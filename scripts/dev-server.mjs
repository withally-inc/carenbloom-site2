import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import applicationHandler from "../api/applications.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number.parseInt(process.env.PORT || "49279", 10);
const host = process.env.HOST || "0.0.0.0";

function loadEnv(filePath) {
  if (!existsSync(filePath)) return;
  const raw = readFileSync(filePath, "utf8");
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) return;
    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key && process.env[key] === undefined) process.env[key] = value;
  });
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  }[ext] || "application/octet-stream";
}

function staticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const cleanPath = decoded.replace(/^\/+/, "");
  let target = path.join(root, cleanPath);
  if (decoded === "/" || decoded.endsWith("/")) target = path.join(root, cleanPath, "index.html");
  if (!path.extname(target) && existsSync(path.join(target, "index.html"))) target = path.join(target, "index.html");
  if (!target.startsWith(root)) return null;
  return target;
}

function redirect(res, destination) {
  res.statusCode = 308;
  res.setHeader("Location", destination);
  res.end();
}

loadEnv(path.join(root, ".env"));

const server = createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname === "/api/applications") {
    await applicationHandler(req, res);
    return;
  }

  if (requestUrl.pathname === "/creators") return redirect(res, "/talents");
  if (requestUrl.pathname === "/creators/") return redirect(res, "/talents/");
  if (requestUrl.pathname === "/goods") return redirect(res, "/brands");
  if (requestUrl.pathname === "/goods/") return redirect(res, "/brands/");

  const target = staticPath(requestUrl.pathname);
  if (!target) {
    res.statusCode = 403;
    res.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(target);
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType(target));
    res.end(body);
  } catch {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Care & Bloom dev server: http://localhost:${port}`);
});
