import { MAX_MENU_IMAGE_BYTES, analyzeMenuImage, json } from "../_shared/menu-analysis.js";
import { checkRateLimit, requireSameOrigin, securityHeaders } from "../_shared/security.js";

export async function onRequestPost({ request, env }) {
  try {
    const crossOrigin = requireSameOrigin(request, json);
    if (crossOrigin) return crossOrigin;

    const limited = checkRateLimit(request, json, "analyze-menu-image", 10, 60_000);
    if (limited) return limited;

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (Number.isFinite(contentLength) && contentLength > MAX_MENU_IMAGE_BYTES + 2048) {
      return json({
        ok: false,
        error: "IMAGE_TOO_LARGE",
        message: "Image is too large. Please upload a smaller menu photo.",
      }, 413, securityHeaders());
    }

    const formData = await request.formData().catch(() => null);
    const image = formData?.get("image");
    const result = await analyzeMenuImage({
      image,
      sourceLanguage: formData?.get("sourceLanguage") || "auto",
      targetLanguage: formData?.get("targetLanguage") || "en",
      env,
    });
    return json(result, result.ok ? 200 : result.statusCode || 400, securityHeaders());
  } catch (error) {
    return json({
      ok: false,
      error: error?.code || "IMAGE_ENDPOINT_FAILED",
      message: error?.message || "Menu photo analysis failed before it could return a normal response.",
    }, 500, securityHeaders());
  }
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405, securityHeaders());
}
