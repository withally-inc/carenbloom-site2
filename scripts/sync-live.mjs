import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://www.elevatorgoods.com";
const ROOT = path.resolve(new URL("..", import.meta.url).pathname);

const pages = [
  { livePath: "/", outPath: "index.html" },
  { livePath: "/brands", outPath: "brands/index.html" },
  { livePath: "/capital", outPath: "capital/index.html" },
  { livePath: "/talents", outPath: "talents/index.html" }
];

const assetExtensions = new Set([
  ".css",
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".mp4",
  ".webm",
  ".otf",
  ".ttf",
  ".woff",
  ".woff2"
]);

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`GET ${url} failed: ${response.status}`);
  return response.text();
}

async function fetchBytes(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`GET ${url} failed: ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
}

function isAssetPath(rawPath) {
  if (!rawPath.startsWith("/") || rawPath.startsWith("//")) return false;
  const pathname = new URL(rawPath, BASE).pathname;
  return assetExtensions.has(path.extname(pathname).toLowerCase());
}

function collectHtmlAssets(html) {
  const assets = new Set();
  for (const match of html.matchAll(/\b(?:href|src|poster)=["']([^"']+)["']/g)) {
    if (isAssetPath(match[1])) assets.add(new URL(match[1], BASE).pathname);
  }
  return assets;
}

function collectCssAssets(css) {
  const assets = new Set();
  for (const match of css.matchAll(/url\(([^)]+)\)/g)) {
    const value = match[1].trim().replace(/^["']|["']$/g, "");
    if (isAssetPath(value)) assets.add(new URL(value, BASE).pathname);
  }
  return assets;
}

function transformHtml(html) {
  return html.replace(
    "fetch('/api/newsletter/subscribe'",
    "fetch('https://www.elevatorgoods.com/api/newsletter/subscribe'"
  );
}

async function writeRootFile(relativePath, data) {
  const out = path.join(ROOT, relativePath);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, data);
}

async function downloadAsset(assetPath) {
  const pathname = new URL(assetPath, BASE).pathname;
  const bytes = await fetchBytes(new URL(pathname, BASE));
  await writeRootFile(pathname.slice(1), bytes);
  return pathname;
}

async function main() {
  const assetQueue = new Set();
  const downloaded = new Set();

  await mkdir(ROOT, { recursive: true });

  for (const page of pages) {
    const html = transformHtml(await fetchText(new URL(page.livePath, BASE)));
    await writeRootFile(page.outPath, html);
    for (const asset of collectHtmlAssets(html)) assetQueue.add(asset);
  }

  while (assetQueue.size > 0) {
    const asset = assetQueue.values().next().value;
    assetQueue.delete(asset);
    if (downloaded.has(asset)) continue;
    downloaded.add(asset);
    const saved = await downloadAsset(asset);
    if (saved.endsWith(".css")) {
      const css = await fetchText(new URL(saved, BASE));
      for (const nested of collectCssAssets(css)) {
        if (!downloaded.has(nested)) assetQueue.add(nested);
      }
    }
  }

  const manifest = {
    source: BASE,
    syncedAt: new Date().toISOString(),
    pages,
    assets: [...downloaded].sort()
  };
  await writeRootFile("download-manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Synced ${pages.length} pages and ${downloaded.size} assets into ${ROOT}`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
