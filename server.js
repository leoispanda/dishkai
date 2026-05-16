import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { analyzeMenuImage, analyzeMenuText } from "./functions/_shared/menu-analysis.js";

const root = process.cwd();
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${host}:${port}`);

    if (request.method === "GET" && url.pathname === "/api/health") {
      sendJson(response, 200, { ok: true, app: "DishKAI" });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu-text") {
      const body = await readJson(request);
      const result = await analyzeMenuText({
        menuText: body.menuText,
        sourceLanguage: body.sourceLanguage || "auto",
        targetLanguage: body.targetLanguage || "en",
        env: {},
      });
      sendJson(response, result.ok ? 200 : 400, result);
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/analyze-menu-image") {
      const result = await analyzeMenuImage();
      sendJson(response, 501, result);
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

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(data));
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
