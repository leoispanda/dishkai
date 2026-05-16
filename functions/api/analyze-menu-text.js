import { analyzeMenuText, json } from "../_shared/menu-analysis.js";

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({}));
  const result = await analyzeMenuText({
    menuText: body.menuText,
    sourceLanguage: body.sourceLanguage || "auto",
    targetLanguage: body.targetLanguage || "en",
    env,
  });
  return json(result, result.ok ? 200 : 400);
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405);
}
