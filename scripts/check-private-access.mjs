import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:net";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createSessionCookie, hasValidSession } from "../functions/_shared/security.js";
import { isPublicLoginRequest, requireSiteAccess } from "../functions/_shared/site-access.js";
import { onRequest as middleware } from "../functions/_middleware.js";
import { onRequestPost as login } from "../functions/api/private-login.js";
import { onRequestPost as logout } from "../functions/api/private-logout.js";
import { onRequestGet as status } from "../functions/api/private-status.js";
import { onRequestPost as analyzeText } from "../functions/api/analyze-menu-text.js";
import { onRequestPost as analyzeLegacyText } from "../functions/api/analyze-menu.js";
import { onRequestPost as analyzeImage } from "../functions/api/analyze-menu-image.js";

// All passwords, sessions and inputs below are synthetic. The only HTTP calls are loopback.
const env = { DISHKAI_PRIVATE_ACCESS_CODE: "synthetic-private-password", DISHKAI_SESSION_SECRET: "synthetic-session-signing-secret" };
const cases = [];
function check(name, run) { cases.push({ name, run }); }
function request(path, options = {}) { return new Request(`https://dishkai.test${path}`, options); }
function cookieHeader(cookie) { return cookie.split(";")[0]; }
const cookie = cookieHeader(await createSessionCookie(env));

check("password login validates server-side and keeps credentials out of responses", async () => {
  const wrong = await login({ env, request: request("/api/private-login", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ accessCode: "wrong" }),
  }) });
  assert.equal(wrong.status, 401);
  assert.equal(wrong.headers.get("Set-Cookie"), null);
  const correct = await login({ env, request: request("/api/private-login", {
    method: "POST", headers: { "Content-Type": "application/json", Origin: "https://dishkai.test" },
    body: JSON.stringify({ accessCode: env.DISHKAI_PRIVATE_ACCESS_CODE }),
  }) });
  assert.equal(correct.status, 200);
  const issued = correct.headers.get("Set-Cookie");
  assert.match(issued, /HttpOnly/);
  assert.match(issued, /Secure/);
  assert.match(issued, /SameSite=Lax/);
  assert.match(issued, /Max-Age=604800/);
  assert.equal(issued.includes(env.DISHKAI_PRIVATE_ACCESS_CODE), false);
  assert.equal(issued.includes(env.DISHKAI_SESSION_SECRET), false);
  assert.equal(await hasValidSession(request("/", { headers: { Cookie: cookieHeader(issued) } }), env), true);
  assert.deepEqual(await correct.json(), { ok: true });
});

check("tampered, malformed and expired sessions cannot enter the site", async () => {
  const tampered = cookie.slice(0, -1) + (cookie.endsWith("A") ? "B" : "A");
  for (const value of [tampered, "dishkai_session=malformed", "dishkai_session=a.b.c"]) {
    assert.equal(await hasValidSession(request("/", { headers: { Cookie: value } }), env), false);
    assert.equal((await requireSiteAccess(request("/", { headers: { Cookie: value } }), env)).status, 302);
  }
  const originalNow = Date.now;
  let expired;
  try {
    Date.now = () => originalNow() - 8 * 24 * 60 * 60 * 1000;
    expired = cookieHeader(await createSessionCookie(env));
  } finally { Date.now = originalNow; }
  assert.equal(await hasValidSession(request("/", { headers: { Cookie: expired } }), env), false);
});

check("missing either secret closes protected pages and APIs even with a previously valid cookie", async () => {
  for (const key of Object.keys(env)) {
    const incomplete = { ...env };
    delete incomplete[key];
    const headers = { Cookie: cookie };
    assert.equal(await hasValidSession(request("/", { headers }), incomplete), false);
    assert.equal((await requireSiteAccess(request("/", { headers }), incomplete)).status, 302);
    assert.equal((await requireSiteAccess(request("/api/analyze-menu-text", { method: "POST", headers }), incomplete)).status, 503);
    const response = await login({ env: incomplete, request: request("/api/private-login", { method: "POST" }) });
    assert.equal(response.status, 503);
    assert.equal((await response.json()).error, "PRIVATE_ACCESS_CONFIG_ERROR");
  }
});

check("login allowlist is exact and does not expose app assets, data or alternate encoded paths", async () => {
  for (const path of ["/login", "/login.html", "/login.js?v=test", "/login.css", "/assets/brand/dishkai-cloche-logo.svg"]) {
    assert.equal(isPublicLoginRequest(request(path)), true, path);
    assert.equal(await requireSiteAccess(request(path), {}), null);
  }
  for (const path of ["/", "/index.html", "/script.js", "/styles.css", "/ai-transparency", "/login/private", "/login.js/extra",
    "/login/", "/%6cogin.js", "/login%2ejs", "/assets/brand/other.svg", "/assets/dishes/main/example.webp", "/data/internal/dishes.js"]) {
    const response = await requireSiteAccess(request(path), env);
    assert.equal(response.status, 302, path);
    assert.equal(response.headers.get("Location"), "/login");
    assert.equal(await response.text(), "");
  }
  assert.equal((await requireSiteAccess(request("/login.js", { method: "OPTIONS" }), env)).status, 401);
});

check("unauthenticated APIs and preflight requests return JSON without forwarding", async () => {
  for (const method of ["GET", "POST", "OPTIONS", "HEAD"]) {
    let forwarded = false;
    const response = await middleware({
      request: request("/api/analyze-menu-text", { method }), env,
      next: () => { forwarded = true; throw new Error("Protected request must not be forwarded"); },
    });
    assert.equal(forwarded, false);
    assert.equal(response.status, 401);
    assert.match(response.headers.get("Content-Type"), /application\/json/);
    assert.match(response.headers.get("Cache-Control"), /no-store/);
    if (method === "HEAD") assert.equal(await response.text(), "");
    else assert.equal((await response.json()).error, "PRIVATE_ACCESS_REQUIRED");
  }
});

check("authenticated middleware forwards content with private no-store cache semantics", async () => {
  let forwarded = 0;
  const response = await middleware({
    request: request("/data/internal/example.json", { headers: { Cookie: cookie } }), env,
    next: async () => {
      forwarded += 1;
      return new Response("synthetic private content", { headers: { "Cache-Control": "public, max-age=86400", Vary: "Accept-Encoding" } });
    },
  });
  assert.equal(forwarded, 1);
  assert.equal(await response.text(), "synthetic private content");
  assert.equal(response.headers.get("Cache-Control"), "private, no-store");
  assert.match(response.headers.get("Vary"), /Cookie/);
  const head = await middleware({ request: request("/index.html", { method: "HEAD", headers: { Cookie: cookie } }), env,
    next: async () => new Response("synthetic private content") });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), "");
});

check("login and logout reject cross-origin browser mutations", async () => {
  for (const endpoint of [login, logout]) {
    const response = await endpoint({ env, request: request("/api/private-login", {
      method: "POST", headers: { Origin: "https://other.test", "Content-Type": "application/json" },
      body: JSON.stringify({ accessCode: env.DISHKAI_PRIVATE_ACCESS_CODE }),
    }) });
    assert.equal(response.status, 403);
    assert.equal(response.headers.get("Set-Cookie"), null);
  }
  const locked = await logout({ env, request: request("/api/private-logout", { method: "POST" }) });
  assert.equal(locked.status, 200);
  assert.match(locked.headers.get("Set-Cookie"), /Max-Age=0/);
});

check("public session status declares configuration without exposing any secret", async () => {
  const locked = await status({ env, request: request("/api/private-status") });
  assert.deepEqual(await locked.json(), { ok: true, configured: true, authenticated: false });
  const unlocked = await status({ env, request: request("/api/private-status", { headers: { Cookie: cookie } }) });
  assert.equal((await unlocked.json()).authenticated, true);
  const missing = await status({ env: {}, request: request("/api/private-status") });
  assert.deepEqual(await missing.json(), { ok: true, configured: false, authenticated: false });
});

check("all three menu endpoints enforce their own auth before reading a body or using AI", async () => {
  const originalFetch = globalThis.fetch;
  let aiCalled = false;
  globalThis.fetch = async () => { aiCalled = true; throw new Error("AI must not run before auth"); };
  try {
    for (const endpoint of [analyzeText, analyzeLegacyText, analyzeImage]) {
      const response = await endpoint({
        request: request("/api/menu", { method: "POST", body: "invalid input that must not be parsed" }),
        env: { ...env, DISHKAI_GEMINI_API_KEY: "synthetic-ai-key" },
        waitUntil: () => { throw new Error("No contribution before auth"); },
      });
      assert.equal(response.status, 401);
      assert.equal((await response.json()).error, "PRIVATE_ACCESS_REQUIRED");
    }
    assert.equal(aiCalled, false);
    const authenticated = await analyzeText({
      request: request("/api/menu", { method: "POST", headers: { Cookie: cookie, "Content-Type": "application/json" },
        body: JSON.stringify({ menuText: "Zorble Fantasia" }) }), env,
      waitUntil: () => { throw new Error("Contribution is off by default"); },
    });
    assert.equal(authenticated.status, 200);
    assert.equal((await authenticated.json()).items.length, 1);
  } finally { globalThis.fetch = originalFetch; }
});

check("Pages invocation rules do not exempt any protected static files", async () => {
  const rules = JSON.parse(await readFile(new URL("../public/_routes.json", import.meta.url), "utf8"));
  assert.equal(rules.version, 1);
  assert.deepEqual(rules.include, ["/*"]);
  assert.deepEqual(rules.exclude, []);
});

async function startLocalServer() {
  const portFinder = createServer();
  await new Promise((resolve, reject) => { portFinder.once("error", reject); portFinder.listen(0, "127.0.0.1", resolve); });
  const port = portFinder.address().port;
  await new Promise((resolve) => portFinder.close(resolve));
  const child = spawn(process.execPath, ["server.js"], {
    cwd: fileURLToPath(new URL("../", import.meta.url)),
    env: { HOST: "127.0.0.1", PORT: String(port), ...env },
    stdio: ["ignore", "pipe", "pipe"],
  });
  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Local auth test server startup timed out")), 5000);
      child.once("error", (error) => { clearTimeout(timer); reject(error); });
      child.once("exit", () => { clearTimeout(timer); reject(new Error("Local auth test server exited before startup")); });
      child.stdout.on("data", (data) => { if (data.toString().includes("DishKAI running")) { clearTimeout(timer); resolve(); } });
    });
  } catch (error) { child.kill(); throw error; }
  return {
    origin: `http://127.0.0.1:${port}`,
    stop: () => new Promise((resolve) => { child.once("exit", resolve); child.kill(); }),
  };
}

check("local server protects app pages, modules, dish images and APIs before serving them", async () => {
  const server = await startLocalServer();
  const fetchLocal = (path, options = {}) => fetch(`${server.origin}${path}`, { redirect: "manual", ...options });
  try {
    for (const path of ["/", "/index.html", "/script.js", "/styles.css", "/assets/dishes/main/example.webp", "/data/internal/example.js"]) {
      const response = await fetchLocal(path);
      assert.equal(response.status, 302, path);
      assert.equal(response.headers.get("Location"), "/login");
      assert.equal(await response.text(), "");
    }
    const head = await fetchLocal("/script.js", { method: "HEAD" });
    assert.equal(head.status, 302);
    assert.equal(await head.text(), "");
    for (const path of ["/api/analyze-menu", "/api/analyze-menu-text", "/api/analyze-menu-image"]) {
      const response = await fetchLocal(path, { method: "POST", body: "must not be parsed" });
      assert.equal(response.status, 401);
    }
    assert.equal((await fetchLocal("/api/analyze-menu-text", { method: "OPTIONS" })).status, 401);
    const publicLogo = await fetchLocal("/assets/brand/dishkai-cloche-logo.svg");
    assert.equal(publicLogo.status, 200);
    assert.match(await publicLogo.text(), /<svg/);
    const loginPage = await fetchLocal("/login");
    assert.equal(loginPage.status, 200);
    assert.equal((await loginPage.text()).includes('id="menuForm"'), false);
    const loggedIn = await fetchLocal("/api/private-login", { method: "POST",
      headers: { "Content-Type": "application/json", Origin: server.origin }, body: JSON.stringify({ accessCode: env.DISHKAI_PRIVATE_ACCESS_CODE }) });
    assert.equal(loggedIn.status, 200);
    const localCookie = cookieHeader(loggedIn.headers.get("Set-Cookie"));
    const unlocked = await fetchLocal("/", { headers: { Cookie: localCookie } });
    assert.equal(unlocked.status, 200);
    assert.match(await unlocked.text(), /id="menuForm"/);
    assert.equal(unlocked.headers.get("Cache-Control"), "private, no-store");
    const analyzed = await fetchLocal("/api/analyze-menu-text", { method: "POST", headers: { Cookie: localCookie, "Content-Type": "application/json" },
      body: JSON.stringify({ menuText: "Zorble Fantasia" }) });
    assert.equal(analyzed.status, 200);
    assert.equal((await analyzed.json()).items.length, 1);
    const invalidOrigin = await fetchLocal("/api/analyze-menu-text", { method: "POST", headers: { Cookie: localCookie, Origin: "https://other.test" } });
    assert.equal(invalidOrigin.status, 403);
  } finally { await server.stop(); }
});

for (const { name, run } of cases) {
  await run();
  console.log(`PASS ${name}`);
}
console.log(`Private access checks passed (${cases.length} cases; synthetic credentials, loopback HTTP only).`);
