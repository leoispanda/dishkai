import { json } from "../_shared/http.js";
import { checkRateLimit, requirePrivateSession, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "clear-recent-scans", 6, 60_000);
  if (limited) return limited;

  return json({
    ok: true,
    cleared: true,
    message: "No persistent temporary scan records are stored by default.",
  }, 200, securityHeaders());
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
