import { analyzeMenuText, json } from "../_shared/menu-analysis.js";
import { checkRateLimit, readJsonBody, requireSameOrigin, securityHeaders } from "../_shared/security.js";
import { recordUnmatchedDishes } from "../_shared/unmatched-dishes.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const limited = checkRateLimit(request, json, "analyze-menu", 20, 60_000);
  if (limited) return limited;

  const parsed = await readJsonBody(request, json);
  if (parsed.error) return parsed.error;
  const body = parsed.body;
  const result = await analyzeMenuText({
    menuText: body.menuText || body.text || "",
    sourceLanguage: "auto",
    targetLanguage: body.targetLanguage || "en",
    env,
  });
  if (result.ok) await recordUnmatchedDishes({ result, env, sourceType: "text" });
  return json(result, result.ok ? 200 : 400, securityHeaders());
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
