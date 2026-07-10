import { json } from "../_shared/http.js";
import { checkRateLimit, requirePrivateSession, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "generate-dish-image", 5, 60_000);
  if (limited) return limited;

  return json({
    ok: false,
    error: "IMAGE_GENERATION_DISABLED",
    message: "AI image generation is disabled for now. AI-generated preview. For inspiration only. Actual dish may look different.",
  }, 501, securityHeaders());
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
