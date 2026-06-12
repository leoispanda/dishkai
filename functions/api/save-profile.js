import { json } from "../_shared/menu-analysis.js";
import { checkRateLimit, requirePrivateSession, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "save-profile", 20, 60_000);
  if (limited) return limited;

  return json({
    ok: false,
    error: "DATABASE_WRITE_DISABLED",
    message: "Database writes are disabled until Leo/Cindy manually confirm what should be stored.",
  }, 501, securityHeaders());
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
