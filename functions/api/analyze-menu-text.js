import { json } from "../_shared/http.js";
import { analyzeMenuText } from "../_shared/menu-analysis.js";
import { checkRateLimit, readJsonBody, requireSameOrigin, securityHeaders } from "../_shared/security.js";
import { recordUnmatchedDishes } from "../_shared/unmatched-dishes.js";

export async function onRequestPost(context) {
  const { request, env } = context;
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

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
  if (result.ok) context.waitUntil(recordUnmatchedDishes({ result, env, sourceType: "text" }));
  return json(result, result.ok ? 200 : 400, securityHeaders());
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405, securityHeaders());
}
