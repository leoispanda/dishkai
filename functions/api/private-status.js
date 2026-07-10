import { json } from "../_shared/http.js";
import { hasValidSession, securityHeaders } from "../_shared/security.js";

export async function onRequestGet({ request, env }) {
  return json({
    ok: true,
    authenticated: await hasValidSession(request, env),
  }, 200, securityHeaders());
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
