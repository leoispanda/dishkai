import { json, readBoundedFormData } from "../_shared/http.js";
import { MAX_MENU_IMAGE_REQUEST_BYTES, analyzeMenuImage } from "../_shared/menu-analysis.js";
import { checkRateLimit, requireSameOrigin, securityHeaders } from "../_shared/security.js";
import { recordUnmatchedDishes } from "../_shared/unmatched-dishes.js";

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const crossOrigin = requireSameOrigin(request, json);
    if (crossOrigin) return crossOrigin;

    const limited = checkRateLimit(request, json, "analyze-menu-image", 10, 60_000);
    if (limited) return limited;

    const formData = await readBoundedFormData(request, MAX_MENU_IMAGE_REQUEST_BYTES);
    const image = formData?.get("image");
    const result = await analyzeMenuImage({
      image,
      sourceLanguage: formData?.get("sourceLanguage") || "auto",
      targetLanguage: formData?.get("targetLanguage") || "en",
      env,
    });
    if (result.ok) context.waitUntil(recordUnmatchedDishes({ result, env, sourceType: "image" }));
    return json(result, result.ok ? 200 : result.statusCode || 400, securityHeaders());
  } catch (error) {
    return json({
      ok: false,
      error: error?.code || "IMAGE_ENDPOINT_FAILED",
      message: error?.message || "Menu photo analysis failed before it could return a normal response.",
    }, error?.statusCode || 500, securityHeaders());
  }
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405, securityHeaders());
}
