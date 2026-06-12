import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { analyzeMenuImage, analyzeMenuText } from "./functions/_shared/menu-analysis.js";
import { runPdcRound } from "./functions/_shared/pdc-engine.js";
import {
  checkRateLimit,
  clearSessionCookie,
  createSessionCookie,
  hasValidSession,
  securityHeaders,
  verifyAccessCode,
} from "./functions/_shared/security.js";

const root = process.cwd();
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

function localEnv() {
  return { ...process.env, DISHKAI_LOCAL_DEV: "true" };
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
    const url = new URL(request.url, `http://${host}:${port}`);

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
      const limited = checkRateLimit(webRequest, localJson, "private-login", 8, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request);
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
      sendJson(response, 200, { ok: true }, { ...securityHeaders(), "Set-Cookie": clearSessionCookie(localEnv()) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu-text") {
      const webRequest = toWebRequest(request, url);
      if (!(await hasValidSession(webRequest, localEnv()))) {
        sendJson(response, 401, { error: "PRIVATE_ACCESS_REQUIRED", message: "Unauthorized access is not permitted." }, securityHeaders());
        return;
      }
      const limited = checkRateLimit(webRequest, localJson, "analyze-menu-text", 30, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request);
      const result = await analyzeMenuText({
        menuText: body.menuText,
        sourceLanguage: body.sourceLanguage || "auto",
        targetLanguage: body.targetLanguage || "en",
        env: localEnv(),
      });
      sendJson(response, result.ok ? 200 : 400, result, securityHeaders());
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu") {
      const webRequest = toWebRequest(request, url);
      if (!(await hasValidSession(webRequest, localEnv()))) {
        sendJson(response, 401, { error: "PRIVATE_ACCESS_REQUIRED", message: "Unauthorized access is not permitted." }, securityHeaders());
        return;
      }
      const limited = checkRateLimit(webRequest, localJson, "analyze-menu", 20, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request);
      const result = await analyzeMenuText({
        menuText: body.menuText || body.text || "",
        sourceLanguage: "auto",
        targetLanguage: body.targetLanguage || "en",
        env: localEnv(),
      });
      sendJson(response, result.ok ? 200 : 400, result, securityHeaders());
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu-image") {
      const webRequest = toWebRequest(request, url);
      if (!(await hasValidSession(webRequest, localEnv()))) {
        sendJson(response, 401, { error: "PRIVATE_ACCESS_REQUIRED", message: "Unauthorized access is not permitted." }, securityHeaders());
        return;
      }
      const limited = checkRateLimit(webRequest, localJson, "analyze-menu-image", 10, 60_000);
      if (limited) return sendWebJson(response, limited);

      const result = await analyzeMenuImage();
      sendJson(response, 501, result);
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/pdc-round") {
      const webRequest = toWebRequest(request, url);
      if (!(await hasValidSession(webRequest, localEnv()))) {
        sendJson(response, 401, { error: "PRIVATE_ACCESS_REQUIRED", message: "Unauthorized access is not permitted." }, securityHeaders());
        return;
      }
      const limited = checkRateLimit(webRequest, localJson, "pdc-round", 20, 60_000);
      if (limited) return sendWebJson(response, limited);

      const body = await readJson(request);
      const result = await runPdcRound(body, {});
      sendJson(response, result.status, result.body);
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
  } catch {
    sendJson(response, 500, { error: "Internal server error" });
  }
});

async function serveStatic(pathname, response) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const safePath = normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);

  if (!filePath.startsWith(root)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
    });
    response.end(content);
  } catch {
    const publicFilePath = join(root, "public", safePath);
    if (publicFilePath.startsWith(join(root, "public"))) {
      try {
        const publicContent = await readFile(publicFilePath);
        response.writeHead(200, {
          "Content-Type": mimeTypes[extname(publicFilePath)] || "application/octet-stream",
        });
        response.end(publicContent);
        return;
      } catch {}
    }

    if (!extname(filePath)) {
      const content = await readFile(join(root, "index.html"));
      response.writeHead(200, { "Content-Type": mimeTypes[".html"] });
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

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

server.listen(port, host, () => {
  console.log(`DishKAI running at http://${host}:${port}`);
});
