const SESSION_COOKIE = "dishkai_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const DEFAULT_JSON_BODY_LIMIT_BYTES = 64 * 1024;
const MAX_RATE_BUCKETS = 5000;
const rateBuckets = new Map();

export function securityHeaders() {
  return {
    "Cache-Control": "no-store",
    "Content-Security-Policy": "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data: blob:; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  };
}

export async function createSessionCookie(env) {
  const secret = requireSecret(env, "DISHKAI_SESSION_SECRET");
  const payload = {
    sub: "leo-cindy",
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = await sign(encodedPayload, secret);
  return `${SESSION_COOKIE}=${encodedPayload}.${signature}; HttpOnly;${secureCookieAttribute(env)} SameSite=Lax; Path=/; Max-Age=${SESSION_TTL_SECONDS}`;
}

export function clearSessionCookie(env) {
  return `${SESSION_COOKIE}=; HttpOnly;${secureCookieAttribute(env)} SameSite=Lax; Path=/; Max-Age=0`;
}

export async function hasValidSession(request, env) {
  const secret = env?.DISHKAI_SESSION_SECRET;
  if (!secret) return false;
  const cookie = parseCookies(request.headers.get("Cookie") || "")[SESSION_COOKIE];
  if (!cookie || !cookie.includes(".")) return false;
  const [payload, signature] = cookie.split(".");
  const expected = await sign(payload, secret);
  if (!timingSafeEqual(signature, expected)) return false;

  try {
    const decoded = JSON.parse(base64UrlDecode(payload));
    return decoded.sub === "leo-cindy" && Number(decoded.exp) > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export async function requirePrivateSession(request, env, json) {
  if (await hasValidSession(request, env)) return null;
  return json({
    error: "PRIVATE_ACCESS_REQUIRED",
    message: "Unauthorized access is not permitted.",
  }, 401, securityHeaders());
}

export function requireSameOrigin(request, json) {
  const origin = request.headers.get("Origin");
  if (!origin) return null;

  const expectedOrigin = new URL(request.url).origin;
  if (origin === expectedOrigin) return null;

  return json({
    error: "ORIGIN_NOT_ALLOWED",
    message: "Cross-origin requests are not permitted.",
  }, 403, securityHeaders());
}

export function verifyAccessCode(inputCode, env) {
  const expected = requireSecret(env, "DISHKAI_PRIVATE_ACCESS_CODE");
  return timingSafeEqual(String(inputCode || ""), expected);
}

export function requireSecret(env, name) {
  const value = env?.[name];
  if (!value) {
    const error = new Error(`${name} is not configured.`);
    error.code = "SECRET_MISSING";
    throw error;
  }
  return String(value);
}

export function checkRateLimit(request, json, scope, limit = 20, windowMs = 60_000) {
  const ip = request.headers.get("CF-Connecting-IP")
    || request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim()
    || "local";
  const key = `${scope}:${ip}`;
  const now = Date.now();
  const bucket = rateBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    if (rateBuckets.size >= MAX_RATE_BUCKETS) pruneRateBuckets(now);
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return null;
  }

  bucket.count += 1;
  if (bucket.count <= limit) return null;

  return json({
    error: "RATE_LIMITED",
    message: "Too many requests. Please wait before trying again.",
  }, 429, {
    ...securityHeaders(),
    "Retry-After": String(Math.ceil((bucket.resetAt - now) / 1000)),
  });
}

function pruneRateBuckets(now) {
  for (const [key, bucket] of rateBuckets) {
    if (bucket.resetAt <= now) rateBuckets.delete(key);
  }
  while (rateBuckets.size >= MAX_RATE_BUCKETS) {
    const oldestKey = rateBuckets.keys().next().value;
    if (oldestKey === undefined) break;
    rateBuckets.delete(oldestKey);
  }
}

export async function readJsonBody(request, json, maxBytes = DEFAULT_JSON_BODY_LIMIT_BYTES) {
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    return {
      error: json({
        error: "REQUEST_BODY_TOO_LARGE",
        message: "Request body is too large.",
      }, 413, securityHeaders()),
    };
  }

  const text = await request.text();
  if (new TextEncoder().encode(text).length > maxBytes) {
    return {
      error: json({
        error: "REQUEST_BODY_TOO_LARGE",
        message: "Request body is too large.",
      }, 413, securityHeaders()),
    };
  }

  if (!text.trim()) return { body: {} };

  try {
    return { body: JSON.parse(text) };
  } catch {
    return {
      error: json({
        error: "INVALID_JSON",
        message: "Request body must be valid JSON.",
      }, 400, securityHeaders()),
    };
  }
}

export function parseCookies(header) {
  return Object.fromEntries(
    String(header || "")
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        if (index < 0) return [part, ""];
        return [part.slice(0, index), part.slice(index + 1)];
      }),
  );
}

async function sign(value, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return base64UrlEncodeBytes(new Uint8Array(signature));
}

function timingSafeEqual(a, b) {
  const left = String(a || "");
  const right = String(b || "");
  if (!left || !right) return false;
  let diff = left.length ^ right.length;
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    diff |= left.charCodeAt(index % left.length) ^ right.charCodeAt(index % right.length);
  }
  return diff === 0;
}

function base64UrlEncode(value) {
  return base64UrlEncodeBytes(new TextEncoder().encode(value));
}

function base64UrlEncodeBytes(bytes) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecode(value) {
  const normalized = String(value).replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return atob(padded);
}

function secureCookieAttribute(env) {
  return env?.DISHKAI_LOCAL_DEV === "true" ? "" : " Secure;";
}
