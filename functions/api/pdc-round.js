import { json } from "../_shared/menu-analysis.js";
import { runPdcRound } from "../_shared/pdc-engine.js";

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({}));
  const result = await runPdcRound(body, env);
  return json(result.body, result.status);
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405);
}
