import { json } from "../_shared/http.js";
import { runPdcRound } from "../_shared/pdc-engine.js";
import { checkRateLimit, readJsonBody, requirePrivateSession, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "pdc-round", 20, 60_000);
  if (limited) return limited;

  const parsed = await readJsonBody(request, json);
  if (parsed.error) return parsed.error;
  const body = parsed.body;
  const result = await runPdcRound(body, env);
  return json(result.body, result.status, securityHeaders());
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
