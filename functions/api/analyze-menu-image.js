import { analyzeMenuImage, json } from "../_shared/menu-analysis.js";
import { checkRateLimit, requirePrivateSession, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "analyze-menu-image", 10, 60_000);
  if (limited) return limited;

  const result = await analyzeMenuImage();
  return json(result, 501, securityHeaders());
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405, securityHeaders());
}
