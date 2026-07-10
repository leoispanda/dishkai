export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

export async function readBoundedFormData(request, maxBytes) {
  const contentType = request.headers.get("Content-Type") || "";
  if (!/^multipart\/form-data\b/i.test(contentType) || !/\bboundary=/i.test(contentType)) {
    throw requestBodyError("INVALID_MULTIPART", "Request must be multipart form data.", 415);
  }

  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    throw requestBodyError("REQUEST_BODY_TOO_LARGE", "Request body is too large.", 413);
  }
  if (!request.body) {
    throw requestBodyError("EMPTY_REQUEST_BODY", "Request body is empty.", 400);
  }

  const reader = request.body.getReader();
  const chunks = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = value instanceof Uint8Array ? value : new Uint8Array(value);
      totalBytes += chunk.byteLength;
      if (totalBytes > maxBytes) {
        throw requestBodyError("REQUEST_BODY_TOO_LARGE", "Request body is too large.", 413);
      }
      chunks.push(chunk);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const boundedRequest = new Request(request.url, {
    method: request.method,
    headers: request.headers,
    body,
  });
  return boundedRequest.formData();
}

function requestBodyError(code, message, statusCode) {
  const error = new Error(message);
  error.code = code;
  error.statusCode = statusCode;
  return error;
}
