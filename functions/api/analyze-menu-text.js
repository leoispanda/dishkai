import { analyzeMenuText, json } from "../_shared/menu-analysis.js";
import { checkRateLimit, readJsonBody, requirePrivateSession, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "analyze-menu-text", 30, 60_000);
  if (limited) return limited;

  const parsed = await readJsonBody(request, json);
  if (parsed.error) return parsed.error;
  const body = parsed.body;
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
