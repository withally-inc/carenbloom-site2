import { buildApplicationPayload, clean, safeUrl } from "./lib/application-payload.js";
import { createPage } from "./lib/notion-client.js";

const DEFAULT_DATABASE_ID = "3792b7ec4597800fab56f5a61ff00187";
const ALLOWED_TIME_ZONES = new Set(["US", "Europe", "Asia"]);
const INTRO_VIDEO_REQUIRED_ROLES = new Set([
  "graphic-designer",
  "video-editor",
  "social-media-manager",
  "head-of-performance-marketing",
  "creative-strategist-performance-marketing",
]);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

async function readPayload(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === "string") return req.body.trim() ? JSON.parse(req.body) : {};
  if (Buffer.isBuffer(req.body)) {
    const rawBody = req.body.toString("utf8");
    return rawBody.trim() ? JSON.parse(rawBody) : {};
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw.trim() ? JSON.parse(raw) : {};
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeTimeZones(payload) {
  const values = Array.isArray(payload.timeZones) ? payload.timeZones : [payload.timeZone];
  return values.map(clean).filter(Boolean);
}

function introVideoIsRequired(payload) {
  return payload.introVideoRequired === true || clean(payload.introVideoRequired) === "true" || INTRO_VIDEO_REQUIRED_ROLES.has(clean(payload.roleSlug));
}

function validatePayload(payload) {
  const required = [
    "role",
    "roleSlug",
    "firstName",
    "lastName",
    "email",
    "phoneCountryCode",
    "phoneNumber",
    "monthlyIncomeUsd",
    "location",
  ];
  for (const field of required) {
    if (!clean(payload[field])) return { error: `Missing required field: ${field}` };
  }

  if (!emailIsValid(clean(payload.email))) return { error: "Enter a valid email address." };
  if (clean(payload.linkedIn) && !safeUrl(payload.linkedIn)) return { error: "Enter a valid LinkedIn URL." };
  if (clean(payload.introVideoUrl) && !safeUrl(payload.introVideoUrl)) return { error: "Enter a valid intro video URL." };
  if (introVideoIsRequired(payload) && !safeUrl(payload.introVideoUrl)) return { error: "Intro video is required for this role." };
  if (!/^\+\d{1,4}$/.test(clean(payload.phoneCountryCode))) return { error: "Choose a valid country / area code." };
  if (!/^[0-9][0-9\s().-]{3,}$/.test(clean(payload.phoneNumber))) return { error: "Enter a valid phone number." };
  if (!/^\d+$/.test(clean(payload.monthlyIncomeUsd))) return { error: "Monthly income must be numbers only." };

  const timeZones = normalizeTimeZones(payload);
  if (!timeZones.length || timeZones.some((timeZone) => !ALLOWED_TIME_ZONES.has(timeZone))) {
    return { error: "Choose a valid time zone." };
  }

  const questions = Array.isArray(payload.questions) ? payload.questions.slice(0, 3) : [];
  for (let i = 0; i < questions.length; i += 1) {
    if (!clean(questions[i].answer)) return { error: `Missing required answer: role question ${i + 1}` };
  }

  return { questions };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { success: false, error: "Method not allowed." });
    return;
  }

  let payload;
  try {
    payload = await readPayload(req);
  } catch {
    sendJson(res, 400, { success: false, error: "Invalid JSON payload." });
    return;
  }

  const validation = validatePayload(payload);
  if (validation.error) {
    sendJson(res, 400, { success: false, error: validation.error });
    return;
  }

  const applicationRef = clean(payload.applicationRef) || undefined;
  const databaseId = clean(process.env.NOTION_CB_TALENTS_DB_ID) || DEFAULT_DATABASE_ID;
  const notionPayload = buildApplicationPayload(databaseId, {
    ...payload,
    phone: `${clean(payload.phoneCountryCode)} ${clean(payload.phoneNumber)}`,
    timeZones: normalizeTimeZones(payload),
    introVideoRequired: introVideoIsRequired(payload),
    applicationRef,
  });

  if (process.env.NOTION_INTAKE_DRY_RUN === "1") {
    sendJson(res, 200, { success: true, ref: notionPayload.applicationRef, dryRun: true });
    return;
  }

  const token = process.env.NOTION_KEY || process.env.NOTION_API_KEY;
  if (!token) {
    sendJson(res, 500, { success: false, error: "Notion intake is not configured." });
    return;
  }

  try {
    const { applicationRef: ref, ...pagePayload } = notionPayload;
    const page = await createPage(token, pagePayload);
    sendJson(res, 200, { success: true, ref: notionPayload.applicationRef, notionPageId: page.id });
  } catch (error) {
    console.error("C&B talent intake failed", error);
    sendJson(res, 502, { success: false, error: "Could not save application right now." });
  }
}

export const _private = {
  buildApplicationPayload,
  validatePayload,
};
