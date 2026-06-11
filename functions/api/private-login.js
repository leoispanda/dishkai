import { json } from "../_shared/menu-analysis.js";
import { checkRateLimit, createSessionCookie, securityHeaders, verifyAccessCode } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const limited = checkRateLimit(request, json, "private-login", 8, 60_000);
  if (limited) return limited;

  const body = await request.json().catch(() => ({}));
  try {
    if (!verifyAccessCode(body.accessCode, env)) {
      return json({
        error: "INVALID_ACCESS_CODE",
        message: "Unauthorized access is not permitted.",
      }, 401, securityHeaders());
    }

    return json({ ok: true }, 200, {
      ...securityHeaders(),
      "Set-Cookie": await createSessionCookie(env),
    });
  } catch (error) {
    return json({
      error: error.code || "PRIVATE_ACCESS_CONFIG_ERROR",
      message: "Private access is not configured correctly.",
    }, 500, securityHeaders());
  }
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
