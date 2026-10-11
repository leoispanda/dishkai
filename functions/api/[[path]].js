import { json } from "../_shared/http.js";
import { requirePrivateSession, securityHeaders } from "../_shared/security.js";

// Unregistered API paths must not fall through to the Pages HTML fallback.
export async function onRequest({ request, env }) {
  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  return json({ error: "NOT_FOUND", message: "API endpoint not found." }, 404, securityHeaders());
}
