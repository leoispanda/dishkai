import { json } from "../_shared/http.js";
import { checkRateLimit, requirePrivateSession, requireSameOrigin, securityHeaders } from "../_shared/security.js";
import { clearUnmatchedDishBacklog, readUnmatchedDishBacklog } from "../_shared/unmatched-dishes.js";

export async function onRequestGet({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "unmatched-dishes", 20, 60_000);
  if (limited) return limited;

  const backlog = await readUnmatchedDishBacklog(env);
  return json(backlog, backlog.configured ? 200 : 503, securityHeaders());
}

export async function onRequestDelete({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "unmatched-dishes-clear", 5, 60_000);
  if (limited) return limited;

  const result = await clearUnmatchedDishBacklog(env);
  return json(result, result.configured ? 200 : 503, securityHeaders());
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405, securityHeaders());
}
