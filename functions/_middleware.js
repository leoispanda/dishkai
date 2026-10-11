import { privateResponseHeaders, requireSiteAccess } from "./_shared/site-access.js";

export async function onRequest(context) {
  const blocked = await requireSiteAccess(context.request, context.env);
  if (blocked) return blocked;
  const response = await context.next();
  return new Response(context.request.method === "HEAD" ? null : response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: privateResponseHeaders(response.headers),
  });
}
