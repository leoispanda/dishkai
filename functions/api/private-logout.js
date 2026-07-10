import { json } from "../_shared/http.js";
import { clearSessionCookie, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  return json({ ok: true }, 200, {
    ...securityHeaders(),
    "Set-Cookie": clearSessionCookie(env),
  });
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
