import { json } from "../_shared/menu-analysis.js";
import { clearSessionCookie, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ env }) {
  return json({ ok: true }, 200, {
    ...securityHeaders(),
    "Set-Cookie": clearSessionCookie(env),
  });
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
