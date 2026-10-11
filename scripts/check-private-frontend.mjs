import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";

const read = (name) => fs.readFile(new URL(`../${name}`, import.meta.url), "utf8");
const [script, html, loginScript, loginHtml, loginCss] = await Promise.all([
  read("script.js"), read("index.html"), read("login.js"), read("login.html"), read("login.css"),
]);
for (const name of ["script.js", "index.html", "styles.css", "login.js", "login.html", "login.css"]) {
  assert.equal(await read(name), await read(`public/${name}`), `${name} must match the deployed copy.`);
}
for (const page of [html, loginHtml]) assert.ok(page.includes('name="robots" content="noindex, nofollow, noarchive"'));
assert.ok(script.includes("v0.2.41-private-beta"));
assert.ok(html.includes('class="session-checking"'), "Cached private markup must start hidden.");
assert.ok(!html.includes('id="privateAccessForm"'), "Passwords belong on the standalone login page.");
assert.ok(loginHtml.includes('type="password"'));
assert.ok(loginCss.includes("#fff4e8"));
const allowedLoginAssets = new Set(["/assets/brand/dishkai-cloche-logo.svg", "/login.css", "/login.js"]);
for (const match of loginHtml.matchAll(/(?:href|src)="([^"]+)"/g)) {
  assert.ok(allowedLoginAssets.has(match[1].split("?")[0]), "Login must reference only its exact public assets.");
}

function classList(initial = []) {
  const values = new Set(initial);
  return {
    add: (...names) => names.forEach((name) => values.add(name)),
    remove: (...names) => names.forEach((name) => values.delete(name)),
    contains: (name) => values.has(name),
    toggle(name, force = !values.has(name)) { force ? values.add(name) : values.delete(name); },
  };
}

function makeDom(source) {
  const elements = new Map();
  function node(id = "", properties = {}) {
    const element = {
      value: "", checked: false, disabled: false, hidden: false, innerHTML: "", textContent: "", dataset: {}, attributes: {}, events: {},
      classList: classList(), querySelectorAll: () => [], scrollIntoView() {}, focus() {},
      setAttribute(key, value) { this.attributes[key] = value; },
      addEventListener(type, callback) { this.events[type] = callback; },
      ...properties,
    };
    if (id) elements.set(`#${id}`, element);
    return element;
  }
  for (const match of source.matchAll(/\bid="([^"]+)"/g)) node(match[1]);
  const languageButtons = ["zh", "en", "nl"].map((language) => node("", { dataset: { loginLanguage: language } }));
  const document = {
    title: "", documentElement: {}, body: { classList: classList(["session-checking"]) },
    querySelector: (selector) => elements.get(selector) || null,
    querySelectorAll: (selector) => selector === "[data-login-language]" ? languageButtons : [],
  };
  return { elements, languageButtons, document };
}

function makeEnvironment(source, { path = "/", search = "", storageValues = [], handler } = {}) {
  const dom = makeDom(source);
  const storage = new Map(storageValues);
  const requests = [];
  const redirects = [];
  const events = {};
  const timers = new Map();
  let responder = handler;
  const context = vm.createContext({
    console: { warn() {} }, URL, URLSearchParams, AbortController,
    localStorage: {
      getItem: (key) => storage.get(key), setItem: (key, value) => storage.set(key, value), removeItem: (key) => storage.delete(key),
    },
    window: {
      location: { origin: "https://dishkai.test", pathname: path, search, hash: "", replace: (url) => redirects.push(url) },
      setTimeout(callback, delay) { const id = {}; timers.set(id, { callback, delay }); return id; },
      clearTimeout: (id) => timers.delete(id),
      addEventListener: (type, callback) => { events[type] = callback; },
    },
    document: dom.document,
    fetch: async (url, options) => { requests.push({ url, options }); return responder(url, options); },
  });
  return { ...dom, context, storage, requests, redirects, events, timers, respondWith: (value) => { responder = value; } };
}
const response = (status, result) => ({ ok: status >= 200 && status < 300, status, json: async () => result, text: async () => JSON.stringify(result) });
const flush = () => new Promise(setImmediate);
const unauthenticated = () => response(200, { ok: true, configured: true, authenticated: false });
const authenticated = () => response(200, { ok: true, configured: true, authenticated: true });

function makeLogin(options = {}) {
  const app = makeEnvironment(loginHtml, { path: "/login", handler: unauthenticated, ...options });
  vm.runInContext(loginScript, app.context);
  vm.runInContext(`globalThis.api = { safeLoginNext, submitLogin, checkLoginSession, loginText, loginStrings };`, app.context);
  app.api = app.context.api;
  app.submit = () => app.api.submitLogin({ preventDefault() {} });
  return app;
}

const login = makeLogin();
await flush();
assert.equal(login.document.documentElement.lang, "zh-CN", "A new login page must default to Chinese.");
assert.equal(login.requests[0].url, "/api/private-status");
assert.equal(login.requests[0].options.cache, "no-store");
assert.equal(login.requests[0].options.credentials, "same-origin");
assert.equal(login.redirects.length, 0);
for (const next of ["https://evil.test/", "//evil.test/", "/\\evil.test/", "/login", "/login.html?next=/", "javascript:alert(1)", "/bad\npath"]) {
  assert.equal(login.api.safeLoginNext(next), "/", "Unsafe next values must not leave or loop through login.");
}
assert.equal(login.api.safeLoginNext("/ai-transparency?view=1#data"), "/ai-transparency?view=1#data");

const existing = makeLogin({ search: "?next=%2Fai-transparency%23data", handler: authenticated });
await flush();
assert.deepEqual(existing.redirects, ["/ai-transparency#data"], "An existing server session should skip password entry.");
const unconfigured = makeLogin({ handler: () => response(200, { ok: true, configured: false, authenticated: false }) });
await flush();
assert.equal(unconfigured.elements.get("#loginButton").disabled, true);
assert.equal(unconfigured.elements.get("#loginStatus").textContent, unconfigured.api.loginStrings.zh.notConfigured);
const unconfiguredCount = unconfigured.requests.length;
unconfigured.elements.get("#loginPassword").value = "synthetic-password";
await unconfigured.submit();
assert.equal(unconfigured.requests.length, unconfiguredCount, "Missing server configuration must not be bypassed by the form.");
for (const language of ["en", "zh", "nl"]) {
  const translated = makeLogin({ storageValues: [["dishkai-ui-lang", language]] });
  await flush();
  assert.equal(translated.document.documentElement.lang, language === "zh" ? "zh-CN" : language);
  translated.respondWith(() => response(401, { error: "INVALID_ACCESS_CODE", message: "raw secret must never display" }));
  translated.elements.get("#loginPassword").value = "synthetic-password";
  await translated.submit();
  assert.equal(translated.elements.get("#loginPassword").value, "");
  assert.equal(translated.elements.get("#loginStatus").textContent, translated.api.loginStrings[language].denied);
  assert.ok(!JSON.stringify([...translated.storage]).includes("synthetic-password"));
}

let resolveLogin;
login.respondWith((url) => url === "/api/private-login" ? new Promise((resolve) => { resolveLogin = resolve; }) : authenticated());
login.elements.get("#loginPassword").value = "synthetic-password";
const pendingLogin = login.submit();
assert.equal(login.elements.get("#loginPassword").value, "", "Clear a submitted password immediately.");
assert.equal(login.elements.get("#loginButton").disabled, true);
const sentCount = login.requests.length;
await login.submit();
assert.equal(login.requests.length, sentCount, "Duplicate login submissions must not send another password.");
assert.deepEqual(JSON.parse(login.requests.at(-1).options.body), { accessCode: "synthetic-password" });
resolveLogin(response(200, { ok: true }));
await pendingLogin;
assert.deepEqual(login.redirects, ["/"]);
assert.equal(login.requests.at(-1).url, "/api/private-status", "Login must confirm that the session cookie is usable.");
assert.equal(login.elements.get("#loginPassword").value, "");
assert.equal(login.timers.size, 0);

for (const fail of [
  async () => { throw new TypeError("network raw detail"); },
  async () => ({ ok: false, status: 502, json: async () => { throw new SyntaxError("<html>private raw text</html>"); } }),
]) {
  const failed = makeLogin(); await flush(); failed.respondWith(fail);
  failed.elements.get("#loginPassword").value = "synthetic-password";
  await failed.submit();
  assert.equal(failed.elements.get("#loginStatus").textContent, failed.api.loginStrings.zh.unavailable);
  assert.equal(failed.elements.get("#loginPassword").value, "");
  assert.equal(failed.redirects.length, 0);
  assert.equal(failed.elements.get("#loginButton").disabled, false);
}
const config = makeLogin(); await flush();
config.respondWith(() => response(503, { error: "PRIVATE_ACCESS_CONFIG_ERROR", message: "raw configuration details" }));
config.elements.get("#loginPassword").value = "synthetic-password";
await config.submit();
assert.equal(config.elements.get("#loginButton").disabled, true);
assert.equal(config.elements.get("#retryLoginStatus").hidden, false, "A lost configuration must remain recoverable.");
config.respondWith(unauthenticated);
await config.api.checkLoginSession();
assert.equal(config.elements.get("#loginButton").disabled, false);
assert.equal(config.elements.get("#retryLoginStatus").hidden, true);
const noCookie = makeLogin(); await flush();
noCookie.respondWith((url) => url === "/api/private-login" ? response(200, { ok: true }) : unauthenticated());
noCookie.elements.get("#loginPassword").value = "synthetic-password";
await noCookie.submit();
assert.equal(noCookie.redirects.length, 0, "An unestablished session must not be treated as a completed sign-in.");
assert.equal(noCookie.elements.get("#retryLoginStatus").hidden, false);

function makeMain(handler = authenticated) {
  const app = makeEnvironment(html, {
    handler, storageValues: [["dishkai-ui-lang", "en"], ["dishkai-legal-disclaimer-accepted-v1", "true"]],
  });
  app.elements.get("#pdcCouncilType").value = "product";
  app.elements.get("#pdcDiscussionStyle").value = "individual_debate";
  app.elements.get("#pdcGroupCount").value = "3";
  vm.runInContext(script, app.context);
  vm.runInContext(`globalThis.api = { checkPrivateAccess, fetchJson, logoutPrivateAccess, translations, requireLegalAcceptance };`, app.context);
  app.api = app.context.api;
  return app;
}

const main = makeMain(); await flush();
assert.equal(main.requests[0].url, "/api/private-status", "Every application startup checks its server session without an internal URL.");
assert.equal(main.requests[0].options.cache, "no-store");
assert.equal(main.document.body.classList.contains("session-checking"), false);
assert.equal(main.elements.get("#openPdcButton").hidden, false, "PDC must remain available after authentication.");
assert.ok(main.elements.get("#pdcRoleGrid").innerHTML.includes("role-card"), "Authenticate before initializing the actual PDC controls.");
const locked = makeMain(unauthenticated); await flush();
assert.deepEqual(locked.redirects, ["/login?next=%2F"]);
assert.equal(locked.document.body.classList.contains("session-checking"), true);
const offline = makeMain(async () => { throw new TypeError("offline raw detail"); }); await flush();
assert.equal(offline.redirects.length, 0);
assert.equal(offline.document.body.classList.contains("session-checking"), true);
assert.equal(offline.elements.get("#sessionStatus").textContent, offline.api.translations.en.sessionUnavailable);
assert.equal(offline.elements.get("#retrySessionButton").hidden, false);
offline.respondWith(authenticated); await offline.api.checkPrivateAccess();
assert.equal(offline.document.body.classList.contains("session-checking"), false);

main.storage.set("dishkai-pdc-state", "synthetic private history");
main.respondWith(() => ({ ok: false, status: 401, text: async () => { throw new Error("A 401 body must not be rendered."); } }));
await assert.rejects(main.api.fetchJson("/api/analyze-menu-text"), (error) => error.code === "SESSION_REQUIRED");
assert.deepEqual(main.redirects, ["/login?next=%2F"]);
assert.equal(main.storage.has("dishkai-pdc-state"), false);
assert.equal(main.document.body.classList.contains("session-checking"), true);

const logout = makeMain(); await flush();
logout.storage.set("dishkai-pdc-state", "synthetic history");
logout.respondWith(async () => { throw new TypeError("network failure"); });
await logout.api.logoutPrivateAccess();
assert.equal(logout.redirects.length, 0, "A failed sign-out must not pretend the server cookie was cleared.");
assert.equal(logout.storage.has("dishkai-pdc-state"), true);
assert.equal(logout.elements.get("#privateAccessStatus").textContent, logout.api.translations.en.logoutFailed);
logout.respondWith(() => response(200, { ok: true }));
await logout.api.logoutPrivateAccess();
assert.deepEqual(logout.redirects, ["/login"]);
assert.equal(logout.storage.has("dishkai-pdc-state"), false);

const restored = makeMain(); await flush();
restored.events.pagehide();
assert.equal(restored.document.body.classList.contains("session-checking"), true);
restored.respondWith(unauthenticated);
restored.events.pageshow({ persisted: true }); await flush();
assert.deepEqual(restored.redirects, ["/login?next=%2F"], "A cached page restored after expiry must recheck its session.");

const race = makeMain(); await flush();
let resolveStatus;
race.respondWith((url) => url === "/api/private-status"
  ? new Promise((resolve) => { resolveStatus = resolve; })
  : response(401, { error: "SESSION_REQUIRED" }));
const checking = race.api.checkPrivateAccess();
await assert.rejects(race.api.fetchJson("/api/analyze-menu-text"), (error) => error.code === "SESSION_REQUIRED");
resolveStatus(authenticated());
await checking;
assert.equal(race.document.body.classList.contains("session-checking"), true, "A stale successful status response must not reopen a page already redirecting after a 401.");

console.log("Private frontend checks passed: safe login navigation, localized errors, password clearing, cookie confirmation, recoverable failures, startup/401/logout/BFcache session checks, PDC preservation, and synchronized assets.");
