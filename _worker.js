export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Proxy /api/* requests to Vercel
    if (url.pathname.startsWith("/api/")) {
      const vercelUrl = `https://carenbloom-site2.vercel.app${url.pathname}${url.search}`;
      const proxyRequest = new Request(vercelUrl, {
        method: request.method,
        headers: request.headers,
        body: request.method !== "GET" && request.method !== "HEAD" ? request.body : null,
        redirect: "follow",
      });
      return fetch(proxyRequest);
    }

    // Let Cloudflare Pages serve static files for everything else
    return env.ASSETS.fetch(request);
  },
};
