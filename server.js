import { createServer } from "node:http";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, normalize, resolve, sep } from "node:path";
import { MAX_MENU_IMAGE_REQUEST_BYTES, analyzeMenuImage, analyzeMenuText } from "./functions/_shared/menu-analysis.js";
import { runPdcRound } from "./functions/_shared/pdc-engine.js";
import {
  checkRateLimit,
  clearSessionCookie,
  createSessionCookie,
  hasValidSession,
  requireSameOrigin,
  securityHeaders,
  verifyAccessCode,
} from "./functions/_shared/security.js";
import {
  UNMATCHED_DISH_AGGREGATE_KEY,
  clearUnmatchedDishBacklog,
  readUnmatchedDishBacklog,
  recordUnmatchedDishes,
} from "./functions/_shared/unmatched-dishes.js";

const root = process.cwd();
const publicRoot = join(root, "public");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";
const JSON_BODY_LIMIT_BYTES = 64 * 1024;
const localUnmatchedDishesPath = join(root, "data", "private", "unmatched-dish-backlog.json");

function localEnv() {
  return {
    ...process.env,
    DISHKAI_LOCAL_DEV: "true",
    DISHKAI_UNMATCHED_DISHES: localUnmatchedDishStore(),
  };
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

const server = createServer(async (request, response) => {
  try {
    const requestHost = request.headers.host || `${host}:${port}`;
    const url = new URL(request.url, `http://${requestHost}`);

    if (request.method === "GET" && url.pathname === "/api/health") {
      sendJson(response, 200, { ok: true, app: "DishKAI" });
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/private-status") {
      sendJson(response, 200, { ok: true, authenticated: await hasValidSession(toWebRequest(request, url), localEnv()) }, securityHeaders());
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/private-login") {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      const limited = checkRateLimit(webRequest, localJson, "private-login", 8, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request, 4096);
      try {
        if (!verifyAccessCode(body.accessCode, localEnv())) {
          sendJson(response, 401, { error: "INVALID_ACCESS_CODE", message: "Unauthorized access is not permitted." }, securityHeaders());
          return;
        }
        sendJson(response, 200, { ok: true }, { ...securityHeaders(), "Set-Cookie": await createSessionCookie(localEnv()) });
      } catch {
        sendJson(response, 500, { error: "PRIVATE_ACCESS_CONFIG_ERROR", message: "Private access is not configured correctly." }, securityHeaders());
      }
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/private-logout") {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      sendJson(response, 200, { ok: true }, { ...securityHeaders(), "Set-Cookie": clearSessionCookie(localEnv()) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu-text") {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      const limited = checkRateLimit(webRequest, localJson, "analyze-menu-text", 30, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request);
      const result = await analyzeMenuText({
        menuText: body.menuText,
        sourceLanguage: body.sourceLanguage || "auto",
        targetLanguage: body.targetLanguage || "en",
        env: localEnv(),
      });
      if (result.ok) await recordUnmatchedDishes({ result, env: localEnv(), sourceType: "text" });
      sendJson(response, result.ok ? 200 : 400, result, securityHeaders());
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu") {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      const limited = checkRateLimit(webRequest, localJson, "analyze-menu", 20, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request);
      const result = await analyzeMenuText({
        menuText: body.menuText || body.text || "",
        sourceLanguage: "auto",
        targetLanguage: body.targetLanguage || "en",
        env: localEnv(),
      });
      if (result.ok) await recordUnmatchedDishes({ result, env: localEnv(), sourceType: "text" });
      sendJson(response, result.ok ? 200 : 400, result, securityHeaders());
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu-image") {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      const limited = checkRateLimit(webRequest, localJson, "analyze-menu-image", 10, 60_000);
      if (limited) return sendWebJson(response, limited);

      const formData = await readMultipartFormData(request, url, MAX_MENU_IMAGE_REQUEST_BYTES);
      const result = await analyzeMenuImage({
        image: formData.get("image"),
        sourceLanguage: formData.get("sourceLanguage") || "auto",
        targetLanguage: formData.get("targetLanguage") || "en",
        env: localEnv(),
      });
      if (result.ok) await recordUnmatchedDishes({ result, env: localEnv(), sourceType: "image" });
      sendJson(response, result.ok ? 200 : result.statusCode || 400, result, securityHeaders());
      return;
    }

    if (["GET", "DELETE"].includes(request.method) && url.pathname === "/api/unmatched-dishes") {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      if (!(await hasValidSession(webRequest, localEnv()))) {
        sendJson(response, 401, { error: "PRIVATE_ACCESS_REQUIRED", message: "Unauthorized access is not permitted." }, securityHeaders());
        return;
      }

      const limited = checkRateLimit(webRequest, localJson, request.method === "DELETE" ? "unmatched-dishes-clear" : "unmatched-dishes", request.method === "DELETE" ? 5 : 20, 60_000);
      if (limited) return sendWebJson(response, limited);

      const result = request.method === "DELETE"
        ? await clearUnmatchedDishBacklog(localEnv())
        : await readUnmatchedDishBacklog(localEnv());
      sendJson(response, result.configured ? 200 : 503, result, securityHeaders());
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/pdc-round") {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      if (!(await hasValidSession(webRequest, localEnv()))) {
        sendJson(response, 401, { error: "PRIVATE_ACCESS_REQUIRED", message: "Unauthorized access is not permitted." }, securityHeaders());
        return;
      }
      const limited = checkRateLimit(webRequest, localJson, "pdc-round", 20, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request);
      const result = await runPdcRound(body, {});
      sendJson(response, result.status, result.body, securityHeaders());
      return;
    }

    if (request.method === "POST" && [
      "/api/save-profile",
      "/api/analyze-receipt",
      "/api/save-rating",
      "/api/generate-dish-image",
      "/api/clear-recent-scans",
    ].includes(url.pathname)) {
      const webRequest = toWebRequest(request, url);
      const crossOrigin = requireSameOrigin(webRequest, localJson);
      if (crossOrigin) return sendWebJson(response, crossOrigin);

      if (!(await hasValidSession(webRequest, localEnv()))) {
        sendJson(response, 401, { error: "PRIVATE_ACCESS_REQUIRED", message: "Unauthorized access is not permitted." }, securityHeaders());
        return;
      }
      sendJson(response, url.pathname === "/api/clear-recent-scans" ? 200 : 501, {
        ok: url.pathname === "/api/clear-recent-scans",
        message: url.pathname === "/api/clear-recent-scans"
          ? "No persistent temporary scan records are stored by default."
          : "This private API is protected and not enabled for storage or generation yet.",
      }, securityHeaders());
      return;
    }

    await serveStatic(url.pathname, response);
  } catch (error) {
    if (error?.code === "REQUEST_BODY_TOO_LARGE") {
      sendJson(response, 413, { error: "REQUEST_BODY_TOO_LARGE", message: "Request body is too large." }, securityHeaders());
      return;
    }
    if (error instanceof SyntaxError) {
      sendJson(response, 400, { error: "INVALID_JSON", message: "Request body must be valid JSON." }, securityHeaders());
      return;
    }
    sendJson(response, 500, { error: "Internal server error" }, securityHeaders());
  }
});

async function serveStatic(pathname, response) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const safePath = normalize(requested).replace(/^[/\\]+/, "");
  const filePath = resolve(publicRoot, safePath);

  if (filePath !== publicRoot && !filePath.startsWith(`${publicRoot}${sep}`)) {
    sendJson(response, 403, { error: "Forbidden" }, securityHeaders());
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      ...securityHeaders(),
    });
    response.end(content);
  } catch {
    if (!extname(filePath)) {
      const content = await readFile(join(publicRoot, "index.html"));
      response.writeHead(200, { "Content-Type": mimeTypes[".html"], ...securityHeaders() });
      response.end(content);
      return;
    }

    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

function sendJson(response, status, data, headers = {}) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", ...headers });
  response.end(JSON.stringify(data));
}

function localJson(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

async function sendWebJson(response, webResponse) {
  const data = await webResponse.json();
  sendJson(response, webResponse.status, data, Object.fromEntries(webResponse.headers.entries()));
}

function toWebRequest(request, url) {
  return new Request(url.toString(), {
    method: request.method,
    headers: new Headers(request.headers),
  });
}

async function readJson(request, maxBytes = JSON_BODY_LIMIT_BYTES) {
  const contentLength = Number(request.headers["content-length"] || 0);
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    const error = new Error("Request body is too large.");
    error.code = "REQUEST_BODY_TOO_LARGE";
    throw error;
  }

  const chunks = [];
  let totalBytes = 0;
  for await (const chunk of request) {
    totalBytes += chunk.length;
    if (totalBytes > maxBytes) {
      const error = new Error("Request body is too large.");
      error.code = "REQUEST_BODY_TOO_LARGE";
      throw error;
    }
    chunks.push(chunk);
  }
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function readMultipartFormData(request, url, maxBytes) {
  const contentLength = Number(request.headers["content-length"] || 0);
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    const error = new Error("Request body is too large.");
    error.code = "REQUEST_BODY_TOO_LARGE";
    throw error;
  }

  const chunks = [];
  let totalBytes = 0;
  for await (const chunk of request) {
    totalBytes += chunk.length;
    if (totalBytes > maxBytes) {
      const error = new Error("Request body is too large.");
      error.code = "REQUEST_BODY_TOO_LARGE";
      throw error;
    }
    chunks.push(chunk);
  }

  const webRequest = new Request(url.toString(), {
    method: request.method,
    headers: new Headers(request.headers),
    body: chunks.length ? Buffer.concat(chunks) : undefined,
  });
  return webRequest.formData();
}

function localUnmatchedDishStore() {
  return {
    async get(key) {
      if (key !== UNMATCHED_DISH_AGGREGATE_KEY) return null;
      try {
        return await readFile(localUnmatchedDishesPath, "utf8");
      } catch {
        return null;
      }
    },
    async put(key, value) {
      if (key !== UNMATCHED_DISH_AGGREGATE_KEY) return;
      await mkdir(dirname(localUnmatchedDishesPath), { recursive: true });
      await writeFile(localUnmatchedDishesPath, value);
    },
    async delete(key) {
      if (key !== UNMATCHED_DISH_AGGREGATE_KEY) return;
      await rm(localUnmatchedDishesPath, { force: true });
    },
  };
}

server.listen(port, host, () => {
  console.log(`DishKAI running at http://${host}:${port}`);
});
