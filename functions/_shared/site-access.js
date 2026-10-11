import { json } from "./http.js";
import { hasValidSession, requirePrivateSession, securityHeaders } from "./security.js";

const LOGIN_ASSETS = new Set([
  "/login", "/login.html", "/login.js", "/login.css",
  "/assets/brand/dishkai-cloche-logo.svg",
]);
const PUBLIC_AUTH_METHODS = new Map([
  ["/api/private-login", new Set(["POST"])],
  ["/api/private-status", new Set(["GET", "HEAD"])],
  ["/api/private-logout", new Set(["POST"])],
]);

export function isPublicLoginRequest(request) {
  const path = new URL(request.url).pathname;
  return (["GET", "HEAD"].includes(request.method) && LOGIN_ASSETS.has(path))
    || Boolean(PUBLIC_AUTH_METHODS.get(path)?.has(request.method));
}

export function privateResponseHeaders(headers = {}) {
  const result = new Headers(headers);
  for (const [name, value] of Object.entries(securityHeaders())) result.set(name, value);
  result.set("Cache-Control", "private, no-store");
  result.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  const vary = result.get("Vary");
  if (!vary?.split(",").some((part) => part.trim().toLowerCase() === "cookie")) {
    result.set("Vary", vary ? `${vary}, Cookie` : "Cookie");
  }
  return result;
}

export async function requireSiteAccess(request, env) {
  if (isPublicLoginRequest(request)) return null;
  if (await hasValidSession(request, env)) return null;
  const path = new URL(request.url).pathname;
  if (path === "/api" || path.startsWith("/api/") || !["GET", "HEAD"].includes(request.method)) {
    const response = await requirePrivateSession(request, env, json);
    return new Response(request.method === "HEAD" ? null : response.body, {
      status: response.status,
      headers: privateResponseHeaders(response.headers),
    });
  }
  return new Response(null, { status: 302, headers: privateResponseHeaders({ Location: "/login" }) });
}
