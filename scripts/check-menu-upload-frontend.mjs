import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";

const script = await fs.readFile(new URL("../script.js", import.meta.url), "utf8");
const publicScript = await fs.readFile(new URL("../public/script.js", import.meta.url), "utf8");
assert.equal(publicScript, script, "Root and public frontend scripts must stay synchronized.");
// Load the actual application functions without binding unrelated page controls.
const bindingsStart = script.indexOf('\ndocument.querySelectorAll("[data-ui-lang]")');
assert.ok(bindingsStart > 0);

function makeApp() {
  const elements = new Map();
  const element = (id, extra = {}) => {
    const value = { attributes: {}, setAttribute(key, val) { this.attributes[key] = val; }, ...extra };
    elements.set(id, value);
    return value;
  };
  const form = element("#menuForm");
  const button = element("#generateButton", { disabled: false });
  const status = element("#statusMessage", { textContent: "" });
  const image = element("#menuImage", { files: [] });
  element("#menuText", { value: "Pad Thai" });
  element("#targetLanguage", { value: "en" });
  element("#visual-menu", { scrollIntoView() {} });
  const timers = new Map();
  const requests = [];
  const storage = new Map([["dishkai-legal-disclaimer-accepted-v1", "true"], ["dishkai-ui-lang", "en"]]);
  let response = async () => ({ ok: true, status: 200, text: async () => '{"ok":true,"items":[]}' });
  const context = vm.createContext({
    console: { warn() {} },
    AbortController,
    FormData: class { values = []; append(...entry) { this.values.push(entry); } },
    File: class { constructor(parts, name, options) { this.name = name; this.type = options.type; this.size = parts[0].size; } },
    localStorage: { getItem: (key) => storage.get(key), setItem: (key, value) => storage.set(key, value) },
    window: {
      setTimeout(callback, delay) { const id = {}; timers.set(id, { callback, delay }); return id; },
      clearTimeout(id) { timers.delete(id); },
    },
    document: { querySelector: (selector) => elements.get(selector) || null, body: { classList: { toggle() {} } } },
    createImageBitmap: async () => { throw new Error("Image decoding unavailable"); },
    fetch: async (url, options) => { requests.push({ url, options }); return response(url, options); },
  });
  vm.runInContext(script.slice(0, bindingsStart), context);
  vm.runInContext(`
    sessionVerified = true;
    privateAccessGranted = true;
    renderAnalysis = () => {};
    incrementUsageCount = () => {};
    globalThis.menuTest = {
      submitMenu, fetchJson, menuErrorMessage, renderLegalStep,
      setMode: (mode) => { inputMode = mode; },
      setLanguage: (language) => { uiLang = language; },
      translations, MENU_ERROR_TRANSLATIONS,
    };
  `, context);
  return {
    context, api: context.menuTest, form, button, status, image, timers, requests,
    submit: () => context.menuTest.submitMenu({ preventDefault() {} }),
    respondWith: (handler) => { response = handler; },
  };
}

const app = makeApp();
let completeResponse;
app.respondWith(() => new Promise((resolve) => { completeResponse = resolve; }));
const firstSubmission = app.submit();
assert.equal(app.button.disabled, true);
assert.equal(app.form.attributes["aria-busy"], "true");
app.api.renderLegalStep();
assert.equal(app.button.disabled, true, "Updating the legal gate must not unlock an in-flight scan.");
await app.submit();
assert.equal(app.requests.length, 1, "Duplicate submissions must not send a second scan.");
assert.equal([...app.timers.values()][0].delay, 125_000);
completeResponse({ ok: true, status: 200, text: async () => '{"ok":true,"items":[]}' });
await firstSubmission;
assert.equal(app.button.disabled, false);
assert.equal(app.form.attributes["aria-busy"], "false");
assert.equal(app.timers.size, 0);

app.respondWith(async () => { throw new TypeError("Failed to fetch"); });
await app.submit();
assert.equal(app.status.textContent, app.api.translations.en.menuNetworkError);
assert.equal(app.button.disabled, false);
assert.equal(app.form.attributes["aria-busy"], "false");

for (const stage of ["headers", "body"]) {
  const timeoutApp = makeApp();
  const waitForAbort = (signal) => new Promise((_, reject) => {
    signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")), { once: true });
  });
  timeoutApp.respondWith(async (_, options) => stage === "headers"
    ? waitForAbort(options.signal)
    : { ok: true, status: 200, text: () => waitForAbort(options.signal) });
  const pending = timeoutApp.submit();
  await new Promise(setImmediate);
  [...timeoutApp.timers.values()][0].callback();
  await pending;
  assert.equal(timeoutApp.status.textContent, timeoutApp.api.translations.en.menuTimeout);
  assert.equal(timeoutApp.button.disabled, false);
  assert.equal(timeoutApp.timers.size, 0, `Timeout must clear after ${stage} failure.`);
}

const uploadApp = makeApp();
uploadApp.api.setMode("image");
await uploadApp.submit();
assert.equal(uploadApp.status.textContent, uploadApp.api.translations.en.imageRequired);
uploadApp.image.files = [{ type: "image/heic", size: 1000, name: "menu.heic" }];
await uploadApp.submit();
assert.equal(uploadApp.status.textContent, uploadApp.api.translations.en.imageUnsupported);
uploadApp.image.files = [{ type: "image/jpeg", size: 8 * 1024 * 1024 + 1, name: "menu.jpg" }];
await uploadApp.submit();
assert.equal(uploadApp.status.textContent, uploadApp.api.translations.en.imageTooLarge);
assert.equal(uploadApp.requests.length, 0, "Invalid uploads must be stopped before sending.");
assert.equal(uploadApp.button.disabled, false);

uploadApp.context.createImageBitmap = async () => ({ width: 4000, height: 2500, close() {} });
uploadApp.context.document.createElement = () => ({
  getContext: () => ({ drawImage() {} }),
  toBlob: (callback) => callback({ size: 1000 }),
});
await uploadApp.submit();
assert.equal(uploadApp.requests.length, 1, "A large photo reduced below the limit must still upload.");
const sentImage = uploadApp.requests[0].options.body.values.find(([key]) => key === "image")[1];
assert.equal(sentImage.type, "image/jpeg");
assert.equal(sentImage.size, 1000);

for (const language of ["en", "zh", "nl"]) {
  app.api.setLanguage(language);
  for (const [code, key] of Object.entries(app.api.MENU_ERROR_TRANSLATIONS)) {
    assert.ok(app.api.translations[language][key], `${code} needs a ${language} message.`);
    assert.equal(app.api.menuErrorMessage({ error: code, message: "raw provider error" }, "fallback"), app.api.translations[language][key]);
  }
}

app.respondWith(async () => ({ ok: false, status: 502, text: async () => "<html>Bad gateway</html>" }));
await app.submit();
assert.equal(app.status.textContent, app.api.translations.nl.menuServerResponse);
assert.equal(/deploy/i.test(app.status.textContent), false);

const privateApp = makeApp();
const callerSignal = new AbortController().signal;
await privateApp.api.fetchJson("/api/private-status", { signal: callerSignal });
assert.equal(privateApp.requests[0].options.signal, callerSignal);
assert.equal(privateApp.timers.size, 0, "Private calls keep their existing timeout behavior.");

console.log("Frontend menu upload checks passed: request locking, network errors, full-response timeout, file validation, localization, and synchronized copies.");
