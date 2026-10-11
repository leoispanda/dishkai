const loginStrings = {
  zh: {
    eyebrow: "PRIVATE EXPERIMENT", title: "私人实验室", intro: "考虑到欧洲 AI 法规及潜在风险，我决定为这个个人开发的网站增加密码，仅供自己使用。",
    passwordLabel: "访问密码", enter: "进入实验室", checking: "正在确认会话…", signingIn: "正在验证…",
    required: "请输入访问密码。", denied: "密码未通过验证，请重试。", unavailable: "暂时无法完成请求，请检查网络后重试。",
    notConfigured: "私人访问尚未配置，暂时无法登录。", rateLimited: "尝试过于频繁，请稍后再试。", retry: "重新检查连接",
    privacy: "密码由服务器验证。此应用使用安全会话 Cookie，AI 功能会调用外部服务。", footer: "我的 AI 菜单工具与个人 PDC 实验空间。",
  },
  en: {
    eyebrow: "PRIVATE EXPERIMENT", title: "Private workspace", intro: "In light of European AI regulations and potential risks, I've decided to password-protect this personally developed website for my own use only.",
    passwordLabel: "Access password", enter: "Enter workspace", checking: "Checking your session…", signingIn: "Verifying…",
    required: "Enter your access password.", denied: "The password was not accepted. Please try again.", unavailable: "The request could not be completed. Check your connection and try again.",
    notConfigured: "Private access is not configured, so sign-in is unavailable.", rateLimited: "Too many attempts. Please try again later.", retry: "Check connection again",
    privacy: "The server verifies your password. This app uses a secure session cookie, and AI features call external services.", footer: "My experimental space for the AI menu tool and Personal PDC.",
  },
  nl: {
    eyebrow: "PRIVÉ-EXPERIMENT", title: "Privéwerkruimte", intro: "Met het oog op Europese AI-regelgeving en mogelijke risico’s heb ik besloten deze zelf ontwikkelde website met een wachtwoord te beveiligen, alleen voor eigen gebruik.",
    passwordLabel: "Toegangswachtwoord", enter: "Open werkruimte", checking: "Je sessie wordt gecontroleerd…", signingIn: "Controleren…",
    required: "Voer je toegangswachtwoord in.", denied: "Het wachtwoord is niet geaccepteerd. Probeer opnieuw.", unavailable: "Het verzoek kon niet worden voltooid. Controleer je verbinding en probeer opnieuw.",
    notConfigured: "Privétoegang is niet ingesteld. Inloggen is niet beschikbaar.", rateLimited: "Te veel pogingen. Probeer het later opnieuw.", retry: "Controleer verbinding opnieuw",
    privacy: "De server controleert je wachtwoord. Deze app gebruikt een beveiligde sessiecookie; AI-functies gebruiken externe diensten.", footer: "Mijn experimenteerruimte voor de AI-menutool en Personal PDC.",
  },
};

function loadLoginLanguage() {
  try {
    const stored = localStorage.getItem("dishkai-ui-lang");
    return Object.hasOwn(loginStrings, stored) ? stored : "zh";
  } catch {
    return "zh";
  }
}

let loginLanguage = loadLoginLanguage();
let loginPending = false;
let loginCheckPending = false;
let loginConfigured = null;
let loginStatusKey = "";
let loginStatusIsError = false;
const loginElement = (selector) => document.querySelector(selector);
const loginText = (key) => loginStrings[loginLanguage][key];

function safeLoginNext(value) {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//") || /[\\\u0000-\u0020\u007f]/.test(value)) return "/";
  try {
    const url = new URL(value, window.location.origin);
    if (url.origin !== window.location.origin || ["/login", "/login.html"].includes(url.pathname.replace(/\/+$/, ""))) return "/";
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return "/";
  }
}

function loginDestination() {
  return safeLoginNext(new URLSearchParams(window.location.search).get("next"));
}

function setLoginStatus(key = "", error = false) {
  loginStatusKey = key;
  loginStatusIsError = error;
  const status = loginElement("#loginStatus");
  status.textContent = key ? loginText(key) : "";
  status.classList.toggle("error", error);
}

function renderLoginLanguage() {
  document.documentElement.lang = loginLanguage === "zh" ? "zh-CN" : loginLanguage;
  document.title = `${loginText("title")} · DishKAI`;
  document.querySelectorAll("[data-login-i18n]").forEach((element) => {
    element.textContent = loginText(element.dataset.loginI18n);
  });
  document.querySelectorAll("[data-login-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.loginLanguage === loginLanguage));
  });
  setLoginStatus(loginStatusKey, loginStatusIsError);
  updateLoginBusy();
}

function updateLoginBusy() {
  const busy = loginPending || loginCheckPending;
  loginElement("#loginForm").setAttribute("aria-busy", String(busy));
  loginElement("#loginPassword").disabled = busy;
  const button = loginElement("#loginButton");
  button.disabled = busy || loginConfigured === false;
  button.textContent = loginText(loginPending ? "signingIn" : "enter");
}

async function requestLoginJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(url, { ...options, cache: "no-store", credentials: "same-origin", signal: controller.signal });
    const result = await response.json();
    return { response, result };
  } finally {
    window.clearTimeout(timeout);
  }
}

async function checkLoginSession() {
  if (loginCheckPending || loginPending) return;
  loginCheckPending = true;
  setLoginStatus("checking");
  loginElement("#retryLoginStatus").hidden = true;
  updateLoginBusy();
  try {
    const { response, result } = await requestLoginJson("/api/private-status");
    if (!response.ok || result?.ok !== true) throw new Error("SESSION_CHECK_FAILED");
    loginConfigured = result.configured === true;
    if (loginConfigured && result.authenticated === true) {
      window.location.replace(loginDestination());
      return;
    }
    setLoginStatus(loginConfigured ? "" : "notConfigured", !loginConfigured);
    loginElement("#retryLoginStatus").hidden = loginConfigured;
  } catch {
    setLoginStatus("unavailable", true);
    loginElement("#retryLoginStatus").hidden = false;
  } finally {
    loginCheckPending = false;
    updateLoginBusy();
  }
}

async function submitLogin(event) {
  event.preventDefault();
  if (loginPending || loginCheckPending || loginConfigured === false) return;
  const password = loginElement("#loginPassword");
  const accessCode = password.value;
  password.value = "";
  if (!accessCode) {
    setLoginStatus("required", true);
    password.focus();
    return;
  }
  loginPending = true;
  setLoginStatus("signingIn");
  updateLoginBusy();
  try {
    const { response, result } = await requestLoginJson("/api/private-login", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ accessCode }),
    });
    if (response.ok && result?.ok === true) {
      const confirmation = await requestLoginJson("/api/private-status");
      if (confirmation.response.ok && confirmation.result?.ok === true && confirmation.result?.configured === true && confirmation.result?.authenticated === true) {
        window.location.replace(loginDestination());
      } else {
        setLoginStatus("unavailable", true);
        loginElement("#retryLoginStatus").hidden = false;
      }
      return;
    }
    const key = response.status === 401 ? "denied" : response.status === 429 ? "rateLimited" : response.status === 503 && result?.error === "PRIVATE_ACCESS_CONFIG_ERROR" ? "notConfigured" : "unavailable";
    if (key === "notConfigured") {
      loginConfigured = false;
      loginElement("#retryLoginStatus").hidden = false;
    }
    setLoginStatus(key, true);
  } catch {
    setLoginStatus("unavailable", true);
    loginElement("#retryLoginStatus").hidden = false;
  } finally {
    password.value = "";
    loginPending = false;
    updateLoginBusy();
  }
}

document.querySelectorAll("[data-login-language]").forEach((button) => {
  button.addEventListener("click", () => {
    loginLanguage = button.dataset.loginLanguage;
    try { localStorage.setItem("dishkai-ui-lang", loginLanguage); } catch {}
    renderLoginLanguage();
  });
});
loginElement("#loginForm").addEventListener("submit", submitLogin);
loginElement("#retryLoginStatus").addEventListener("click", () => { void checkLoginSession(); });
window.addEventListener("pageshow", (event) => {
  if (event.persisted) void checkLoginSession();
});
renderLoginLanguage();
try { localStorage.setItem("dishkai-ui-lang", loginLanguage); } catch {}
void checkLoginSession();
