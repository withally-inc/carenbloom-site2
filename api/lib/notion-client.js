export const NOTION_VERSION = "2022-06-28";
export const NOTION_FILE_UPLOAD_VERSION = "2026-03-11";
export const NOTION_API_BASE = "https://api.notion.com/v1";

export function notionHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}

export async function notionRequest(path, token, options = {}, fetchImpl = fetch) {
  const response = await fetchImpl(`${NOTION_API_BASE}${path}`, {
    ...options,
    headers: { ...notionHeaders(token), ...(options.headers || {}) },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    const error = new Error(data.message || `Notion request failed (${response.status})`);
    error.status = response.status;
    error.details = data;
    throw error;
  }
  return data;
}

export function createPage(token, payload, fetchImpl) {
  return notionRequest("/pages", token, {
    method: "POST",
    body: JSON.stringify(payload),
  }, fetchImpl);
}

export async function uploadFile(token, file, fetchImpl = fetch) {
  if (!file || typeof file.arrayBuffer !== "function" || !file.name) return null;
  const createResponse = await fetchImpl(`${NOTION_API_BASE}/file_uploads`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_FILE_UPLOAD_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mode: "single_part",
      filename: file.name,
      content_type: file.type || "application/octet-stream",
    }),
  });
  const createText = await createResponse.text();
  const upload = createText ? JSON.parse(createText) : {};
  if (!createResponse.ok) {
    const error = new Error(upload.message || `Notion file upload create failed (${createResponse.status})`);
    error.status = createResponse.status;
    error.details = upload;
    throw error;
  }

  const formData = new FormData();
  formData.append("file", file);
  const sendResponse = await fetchImpl(upload.upload_url || `${NOTION_API_BASE}/file_uploads/${upload.id}/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_FILE_UPLOAD_VERSION,
    },
    body: formData,
  });
  const sendText = await sendResponse.text();
  const sent = sendText ? JSON.parse(sendText) : {};
  if (!sendResponse.ok || sent.status !== "uploaded") {
    const error = new Error(sent.message || `Notion file upload send failed (${sendResponse.status})`);
    error.status = sendResponse.status;
    error.details = sent;
    throw error;
  }

  return { id: upload.id, name: file.name };
}
