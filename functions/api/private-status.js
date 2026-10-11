import { json } from "../_shared/http.js";
import { hasConfiguredPrivateAccess, hasValidSession, securityHeaders } from "../_shared/security.js";

export async function onRequestGet({ request, env }) {
  return json({
    ok: true,
    configured: hasConfiguredPrivateAccess(env),
    authenticated: await hasValidSession(request, env),
  }, 200, securityHeaders());
}

export const onRequestHead = onRequestGet;

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
