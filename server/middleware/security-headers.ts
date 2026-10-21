import { createHash } from "node:crypto";

const SCRIPT_SRC_BASE = "'self' 'wasm-unsafe-eval' 'unsafe-eval' https://grok.com";

const CSP_REST = [
  "default-src 'self'",
  "style-src 'self' 'sha256-X1ZKyI5R/k+FgxIZvFoPSLGuQcTOaRhi1aTxPZb9jrI=' 'sha256-Q9Z6EIdBFpfoQ0LQm5nVKgBwo3QPf5nyfq/sSTOPXJw='",
  "font-src 'self'",
  "img-src 'self' data:",
  "connect-src 'self' https://huggingface.co https://cdn-lfs.huggingface.co https://*.hf.co https://app-builder-deployer.grok.com",
  "worker-src 'self' blob:",
  "media-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
];

function csp(hashes: string[]): string {
  const script = hashes.length > 0 ? `script-src ${SCRIPT_SRC_BASE} ${hashes.join(" ")}` : `script-src ${SCRIPT_SRC_BASE}`;
  return [CSP_REST[0], script, ...CSP_REST.slice(1)].join("; ");
}

const STAMP_REST: Record<string, string> = {
  "x-content-type-options": "nosniff",
  "referrer-policy": "no-referrer",
  "x-frame-options": "DENY",
  "permissions-policy": "microphone=(self), camera=(), geolocation=()",
};

function stamp(headers: Headers, hashes: string[]) {
  headers.set("content-security-policy", csp(hashes));
  for (const [key, value] of Object.entries(STAMP_REST)) headers.set(key, value);
  if (!headers.has("strict-transport-security")) {
    headers.set("strict-transport-security", "max-age=63072000; includeSubDomains");
  }
}

function inlineHashes(html: string): string[] {
  const found = html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi);
  const hashes: string[] = [];
  for (const match of found) {
    const body = match[1];
    if (!body) continue;
    const digest = createHash("sha256").update(body, "utf8").digest("base64");
    hashes.push(`'sha256-${digest}'`);
  }
  return hashes;
}

const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://choose-america.grok.me/america</loc></url>
  <url><loc>https://choose-america.grok.me/ethos</loc></url>
  <url><loc>https://choose-america.grok.me/privacy</loc></url>
</urlset>
`;

export default async function securityHeaders(_event: { url: URL }, next: () => unknown | Promise<unknown>) {
  if (_event.url.pathname === "/sitemap.xml") {
    const headers = new Headers({ "content-type": "application/xml; charset=utf-8" });
    stamp(headers, []);
    return new Response(SITEMAP, { headers });
  }

  const result = await next();
  if (!(result instanceof Response)) return result;

  const type = result.headers.get("content-type") ?? "";
  if (!type.includes("text/html") || !result.body) {
    const headers = new Headers(result.headers);
    if (_event.url.pathname.endsWith(".wasm")) headers.set("content-type", "application/wasm");
    stamp(headers, []);
    return new Response(result.body, { status: result.status, statusText: result.statusText, headers });
  }

  const bytes = new Uint8Array(await result.arrayBuffer());
  const html = new TextDecoder().decode(bytes);
  const headers = new Headers(result.headers);
  stamp(headers, inlineHashes(html));
  headers.delete("content-length");
  return new Response(bytes, { status: result.status, statusText: result.statusText, headers });
}
