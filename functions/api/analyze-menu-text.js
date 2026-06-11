import { analyzeMenuText, json } from "../_shared/menu-analysis.js";
import { checkRateLimit, requirePrivateSession, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "analyze-menu-text", 30, 60_000);
  if (limited) return limited;

  const body = await request.json().catch(() => ({}));
  const result = await analyzeMenuText({
    menuText: body.menuText,
    sourceLanguage: body.sourceLanguage || "auto",
    targetLanguage: body.targetLanguage || "en",
    env,
  });
  return json(result, result.ok ? 200 : 400, securityHeaders());
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405, securityHeaders());
}
