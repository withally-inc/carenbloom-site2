const BUCKET = "applications";
const MAX_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "image/png",
  "image/jpeg",
]);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { success: false, error: "Method not allowed." });
    return;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    sendJson(res, 500, { success: false, error: "Storage is not configured." });
    return;
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks);

  const contentType = req.headers["content-type"] || "";
  if (!contentType.includes("application/json")) {
    sendJson(res, 400, { success: false, error: "Content-Type must be application/json." });
    return;
  }

  let payload;
  try {
    payload = JSON.parse(body.toString("utf8"));
  } catch {
    sendJson(res, 400, { success: false, error: "Invalid JSON." });
    return;
  }

  const { fileName, fileData, mimeType, folder } = payload;

  if (!fileName || !fileData || !mimeType) {
    sendJson(res, 400, { success: false, error: "Missing fileName, fileData, or mimeType." });
    return;
  }

  if (!ALLOWED_TYPES.has(mimeType)) {
    sendJson(res, 400, { success: false, error: `File type not allowed: ${mimeType}` });
    return;
  }

  const fileBuffer = Buffer.from(fileData, "base64");

  if (fileBuffer.length > MAX_SIZE) {
    sendJson(res, 400, { success: false, error: "File too large. Maximum 10MB." });
    return;
  }

  const timestamp = Date.now().toString(36).toUpperCase();
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `${folder || "general"}/${timestamp}-${safeName}`;

  // Upload to Supabase Storage via REST API
  const uploadUrl = `${supabaseUrl}/storage/v1/object/${BUCKET}/${path}`;
  const uploadResponse = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": mimeType,
      "x-upsert": "false",
    },
    body: fileBuffer,
  });

  if (!uploadResponse.ok) {
    const errorText = await uploadResponse.text();
    // If bucket doesn't exist, try creating it
    if (uploadResponse.status === 404 || errorText.includes("not found")) {
      const createBucketResponse = await fetch(`${supabaseUrl}/storage/v1/bucket`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: BUCKET, name: BUCKET, public: true }),
      });
      if (createBucketResponse.ok) {
        // Retry upload
        const retryResponse = await fetch(uploadUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": mimeType,
            "x-upsert": "false",
          },
          body: fileBuffer,
        });
        if (!retryResponse.ok) {
          console.error("Upload retry failed:", await retryResponse.text());
          sendJson(res, 502, { success: false, error: "Upload failed after bucket creation." });
          return;
        }
      } else {
        console.error("Bucket creation failed:", await createBucketResponse.text());
        sendJson(res, 502, { success: false, error: "Storage setup failed." });
        return;
      }
    } else {
      console.error("Upload failed:", errorText);
      sendJson(res, 502, { success: false, error: "Upload failed." });
      return;
    }
  }

  const publicUrl = `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${path}`;

  sendJson(res, 200, {
    success: true,
    url: publicUrl,
    path,
    fileName,
  });
}
