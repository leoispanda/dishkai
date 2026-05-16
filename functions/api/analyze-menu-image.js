import { analyzeMenuImage, json } from "../_shared/menu-analysis.js";

export async function onRequestPost() {
  const result = await analyzeMenuImage();
  return json(result, 501);
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405);
}
