export const NOTION_VERSION = "2022-06-28";
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
