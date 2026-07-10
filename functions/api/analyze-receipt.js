import { json } from "../_shared/http.js";
import { checkRateLimit, requirePrivateSession, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  const crossOrigin = requireSameOrigin(request, json);
  if (crossOrigin) return crossOrigin;

  const unauthorized = await requirePrivateSession(request, env, json);
  if (unauthorized) return unauthorized;

  const limited = checkRateLimit(request, json, "analyze-receipt", 10, 60_000);
  if (limited) return limited;

  return json({
    ok: false,
    error: "RECEIPT_ANALYSIS_DISABLED",
    message: "Receipt analysis is disabled. Do not upload receipts containing payment details, addresses, phone numbers, or other personal/sensitive information.",
  }, 501, securityHeaders());
}

export function onRequest() {
  return json({ error: "Method not allowed." }, 405, securityHeaders());
}
