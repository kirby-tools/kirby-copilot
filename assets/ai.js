var z = class extends Error {
  constructor({
    message: e,
    url: t,
    requestBodyValues: r,
    statusCode: n,
    responseHeaders: a,
    responseBody: s,
    cause: o,
    isRetryable: i = n != null && (n === 408 || // request timeout
    n === 409 || // conflict
    n === 429 || // too many requests
    n >= 500),
    // server error
    data: l
  }) {
    super(e), this.name = "AI_APICallError", this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.cause = o, this.isRetryable = i, this.data = l;
  }
  static isAPICallError(e) {
    return e instanceof Error && e.name === "AI_APICallError" && typeof e.url == "string" && typeof e.requestBodyValues == "object" && (e.statusCode == null || typeof e.statusCode == "number") && (e.responseHeaders == null || typeof e.responseHeaders == "object") && (e.responseBody == null || typeof e.responseBody == "string") && (e.cause == null || typeof e.cause == "object") && typeof e.isRetryable == "boolean" && (e.data == null || typeof e.data == "object");
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      url: this.url,
      requestBodyValues: this.requestBodyValues,
      statusCode: this.statusCode,
      responseHeaders: this.responseHeaders,
      responseBody: this.responseBody,
      cause: this.cause,
      isRetryable: this.isRetryable,
      data: this.data
    };
  }
}, jt = class extends Error {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super(a), this.name = "AI_DownloadError", this.url = e, this.statusCode = t, this.statusText = r, this.cause = n;
  }
  static isDownloadError(e) {
    return e instanceof Error && e.name === "AI_DownloadError" && typeof e.url == "string" && (e.statusCode == null || typeof e.statusCode == "number") && (e.statusText == null || typeof e.statusText == "string");
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      url: this.url,
      statusCode: this.statusCode,
      statusText: this.statusText,
      cause: this.cause
    };
  }
}, Kr = class extends Error {
  constructor({ message: e = "Empty response body" } = {}) {
    super(e), this.name = "AI_EmptyResponseBodyError";
  }
  static isEmptyResponseBodyError(e) {
    return e instanceof Error && e.name === "AI_EmptyResponseBodyError";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack
    };
  }
}, X = class extends Error {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super(`Invalid argument for parameter ${e}: ${r}`), this.name = "AI_InvalidArgumentError", this.parameter = e, this.value = t;
  }
  static isInvalidArgumentError(e) {
    return e instanceof Error && e.name === "AI_InvalidArgumentError" && typeof e.parameter == "string" && typeof e.value == "string";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      parameter: this.parameter,
      value: this.value
    };
  }
}, ar = class extends Error {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super(r), this.name = "AI_InvalidDataContentError", this.cause = t, this.content = e;
  }
  static isInvalidDataContentError(e) {
    return e instanceof Error && e.name === "AI_InvalidDataContentError" && e.content != null;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      cause: this.cause,
      content: this.content
    };
  }
}, pt = class extends Error {
  constructor({ prompt: e, message: t }) {
    super(`Invalid prompt: ${t}`), this.name = "AI_InvalidPromptError", this.prompt = e;
  }
  static isInvalidPromptError(e) {
    return e instanceof Error && e.name === "AI_InvalidPromptError" && prompt != null;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      prompt: this.prompt
    };
  }
}, Pt = class extends Error {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super(t), this.name = "AI_InvalidResponseDataError", this.data = e;
  }
  static isInvalidResponseDataError(e) {
    return e instanceof Error && e.name === "AI_InvalidResponseDataError" && e.data != null;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      data: this.data
    };
  }
};
function zt(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Yr = class extends Error {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${zt(
      r
    )}`
  }) {
    super(n), this.name = "AI_InvalidToolArgumentsError", this.toolArgs = e, this.toolName = t, this.cause = r;
  }
  static isInvalidToolArgumentsError(e) {
    return e instanceof Error && e.name === "AI_InvalidToolArgumentsError" && typeof e.toolName == "string" && typeof e.toolArgs == "string";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      cause: this.cause,
      stack: this.stack,
      toolName: this.toolName,
      toolArgs: this.toolArgs
    };
  }
}, mt = class extends Error {
  constructor({ text: e, cause: t }) {
    super(
      `JSON parsing failed: Text: ${e}.
Error message: ${zt(t)}`
    ), this.name = "AI_JSONParseError", this.cause = t, this.text = e;
  }
  static isJSONParseError(e) {
    return e instanceof Error && e.name === "AI_JSONParseError" && typeof e.text == "string" && typeof e.cause == "string";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      cause: this.cause,
      stack: this.stack,
      valueText: this.text
    };
  }
}, ut = class extends Error {
  constructor({ message: e }) {
    super(e), this.name = "AI_LoadAPIKeyError";
  }
  static isLoadAPIKeyError(e) {
    return e instanceof Error && e.name === "AI_LoadAPIKeyError";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message
    };
  }
}, ht = class extends Error {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super(r), this.name = "AI_NoSuchToolError", this.toolName = e, this.availableTools = t;
  }
  static isNoSuchToolError(e) {
    return e instanceof Error && e.name === "AI_NoSuchToolError" && "toolName" in e && e.toolName != null && typeof e.name == "string";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      toolName: this.toolName,
      availableTools: this.availableTools
    };
  }
}, sr = class extends Error {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super(e), this.name = "AI_RetryError", this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isRetryError(e) {
    return e instanceof Error && e.name === "AI_RetryError" && typeof e.reason == "string" && Array.isArray(e.errors);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      reason: this.reason,
      lastError: this.lastError,
      errors: this.errors
    };
  }
}, wr = class extends Error {
  constructor(e) {
    super(
      `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    ), this.name = "AI_TooManyEmbeddingValuesForCallError", this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInvalidPromptError(e) {
    return e instanceof Error && e.name === "AI_TooManyEmbeddingValuesForCallError" && "provider" in e && typeof e.provider == "string" && "modelId" in e && typeof e.modelId == "string" && "maxEmbeddingsPerCall" in e && typeof e.maxEmbeddingsPerCall == "number" && "values" in e && Array.isArray(e.values);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      provider: this.provider,
      modelId: this.modelId,
      maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
      values: this.values
    };
  }
}, Ie = class extends Error {
  constructor({ value: e, cause: t }) {
    super(
      `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${zt(t)}`
    ), this.name = "AI_TypeValidationError", this.cause = t, this.value = e;
  }
  static isTypeValidationError(e) {
    return e instanceof Error && e.name === "AI_TypeValidationError";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      cause: this.cause,
      stack: this.stack,
      value: this.value
    };
  }
}, O = class extends Error {
  constructor({ functionality: e }) {
    super(`'${e}' functionality not supported.`), this.name = "AI_UnsupportedFunctionalityError", this.functionality = e;
  }
  static isUnsupportedFunctionalityError(e) {
    return e instanceof Error && e.name === "AI_UnsupportedFunctionalityError" && typeof e.functionality == "string";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      functionality: this.functionality
    };
  }
};
let Xr = (e, t = 21) => (r = t) => {
  let n = "", a = r;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function Qr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var we = { exports: {} };
const en = typeof Buffer < "u", or = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, ir = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function xr(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), en && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (or.test(e) === !1 && ir.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (or.test(e) === !1)
      return n;
  } else if (ir.test(e) === !1)
    return n;
  return kr(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function kr(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
  let a = [e];
  for (; a.length; ) {
    const s = a;
    a = [];
    for (const o of s) {
      if (t !== "ignore" && Object.prototype.hasOwnProperty.call(o, "__proto__")) {
        if (n === !0)
          return null;
        if (t === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete o.__proto__;
      }
      if (r !== "ignore" && Object.prototype.hasOwnProperty.call(o, "constructor") && Object.prototype.hasOwnProperty.call(o.constructor, "prototype")) {
        if (n === !0)
          return null;
        if (r === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete o.constructor;
      }
      for (const i in o) {
        const l = o[i];
        l && typeof l == "object" && a.push(l);
      }
    }
  }
  return e;
}
function Jt(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return xr(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function tn(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return xr(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
we.exports = Jt;
we.exports.default = Jt;
we.exports.parse = Jt;
we.exports.safeParse = tn;
we.exports.scan = kr;
var rn = we.exports;
const Ht = /* @__PURE__ */ Qr(rn);
function nn(e) {
  let t, r, n, a, s, o, i;
  return l(), {
    feed: u,
    reset: l
  };
  function l() {
    t = !0, r = "", n = 0, a = -1, s = void 0, o = void 0, i = "";
  }
  function u(p) {
    r = r ? r + p : p, t && an(r) && (r = r.slice(Tr.length)), t = !1;
    const g = r.length;
    let m = 0, b = !1;
    for (; m < g; ) {
      b && (r[m] === `
` && ++m, b = !1);
      let I = -1, N = a, P;
      for (let T = n; I < 0 && T < g; ++T)
        P = r[T], P === ":" && N < 0 ? N = T - m : P === "\r" ? (b = !0, I = T - m) : P === `
` && (I = T - m);
      if (I < 0) {
        n = g - m, a = N;
        break;
      } else
        n = 0, a = -1;
      d(r, m, N, I), m += I + 1;
    }
    m === g ? r = "" : m > 0 && (r = r.slice(m));
  }
  function d(p, g, m, b) {
    if (b === 0) {
      i.length > 0 && (e({
        type: "event",
        id: s,
        event: o || void 0,
        data: i.slice(0, -1)
        // remove trailing newline
      }), i = "", s = void 0), o = void 0;
      return;
    }
    const I = m < 0, N = p.slice(g, g + (I ? b : m));
    let P = 0;
    I ? P = b : p[g + m + 1] === " " ? P = m + 2 : P = m + 1;
    const T = g + P, U = b - P, j = p.slice(T, T + U).toString();
    if (N === "data")
      i += j ? "".concat(j, `
`) : `
`;
    else if (N === "event")
      o = j;
    else if (N === "id" && !j.includes("\0"))
      s = j;
    else if (N === "retry") {
      const M = parseInt(j, 10);
      Number.isNaN(M) || e({
        type: "reconnect-interval",
        value: M
      });
    }
  }
}
const Tr = [239, 187, 191];
function an(e) {
  return Tr.every((t, r) => e.charCodeAt(r) === t);
}
class sn extends TransformStream {
  constructor() {
    let t;
    super({
      start(r) {
        t = nn((n) => {
          n.type === "event" && r.enqueue(n);
        });
      },
      transform(r) {
        t.feed(r);
      }
    });
  }
}
function H(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
async function on({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const a = await t(n);
    if (!a.ok)
      throw new jt({
        url: n,
        statusCode: a.status,
        statusText: a.statusText
      });
    return {
      data: new Uint8Array(await a.arrayBuffer()),
      mimeType: (r = a.headers.get("content-type")) != null ? r : void 0
    };
  } catch (a) {
    throw jt.isDownloadError(a) ? a : new jt({ url: n, cause: a });
  }
}
function Ct(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Ne = Xr(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function Er(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function ft(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Ft({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new ut({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new ut({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new ut({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new ut({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
function ln({
  value: e,
  schema: t
}) {
  try {
    return t.parse(e);
  } catch (r) {
    throw new Ie({ value: e, cause: r });
  }
}
function cn({
  value: e,
  schema: t
}) {
  try {
    const r = t.safeParse(e);
    return r.success ? {
      success: !0,
      value: r.data
    } : {
      success: !1,
      error: new Ie({
        value: e,
        cause: r.error
      })
    };
  } catch (r) {
    return {
      success: !1,
      error: Ie.isTypeValidationError(r) ? r : new Ie({ value: e, cause: r })
    };
  }
}
function un({
  text: e,
  schema: t
}) {
  try {
    const r = Ht.parse(e);
    return t == null ? r : ln({ value: r, schema: t });
  } catch (r) {
    throw mt.isJSONParseError(r) || Ie.isTypeValidationError(r) ? r : new mt({ text: e, cause: r });
  }
}
function Wt({
  text: e,
  schema: t
}) {
  try {
    const r = Ht.parse(e);
    return t == null ? {
      success: !0,
      value: r
    } : cn({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: mt.isJSONParseError(r) ? r : new mt({ text: e, cause: r })
    };
  }
}
function lr(e) {
  try {
    return Ht.parse(e), !0;
  } catch {
    return !1;
  }
}
function dn(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var pn = () => fetch, F = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => fn({
  url: e,
  headers: {
    "Content-Type": "application/json",
    ...t
  },
  body: {
    content: JSON.stringify(r),
    values: r
  },
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}), fn = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = pn()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: dn(t),
      body: r.content,
      signal: s
    }), l = Ct(i);
    if (!i.ok) {
      let u;
      try {
        u = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw ft(d) || z.isAPICallError(d) ? d : new z({
          message: "Failed to process error response",
          cause: d,
          statusCode: i.status,
          url: e,
          responseHeaders: l,
          requestBodyValues: r.values
        });
      }
      throw u.value;
    }
    try {
      return await n({
        response: i,
        url: e,
        requestBodyValues: r.values
      });
    } catch (u) {
      throw u instanceof Error && (ft(u) || z.isAPICallError(u)) ? u : new z({
        message: "Failed to process successful response",
        cause: u,
        statusCode: i.status,
        url: e,
        responseHeaders: l,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (ft(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const l = i.cause;
      if (l != null)
        throw new z({
          message: `Cannot connect to API: ${l.message}`,
          cause: l,
          url: e,
          requestBodyValues: r.values,
          isRetryable: !0
          // retry when network error
        });
    }
    throw i;
  }
}, Gt = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), i = Ct(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new z({
        message: n.statusText,
        url: a,
        requestBodyValues: s,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: o,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  try {
    const l = un({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new z({
        message: t(l),
        url: a,
        requestBodyValues: s,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: o,
        data: l,
        isRetryable: r == null ? void 0 : r(n, l)
      })
    };
  } catch {
    return {
      responseHeaders: i,
      value: new z({
        message: n.statusText,
        url: a,
        requestBodyValues: s,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: o,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  }
}, It = (e) => async ({ response: t }) => {
  const r = Ct(t);
  if (t.body == null)
    throw new Kr({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new sn()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            Wt({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, xe = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = Wt({
    text: a,
    schema: e
  }), o = Ct(t);
  if (!s.success)
    throw new z({
      message: "Invalid JSON response",
      cause: s.error,
      statusCode: t.status,
      responseHeaders: o,
      responseBody: a,
      url: r,
      requestBodyValues: n
    });
  return {
    responseHeaders: o,
    value: s.value
  };
};
function mn(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = globalThis.atob(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function Sr(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return globalThis.btoa(t);
}
function Kt(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
var je = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Pe = {
  code: "1",
  name: "function_call",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("function_call" in e) || typeof e.function_call != "object" || e.function_call == null || !("name" in e.function_call) || !("arguments" in e.function_call) || typeof e.function_call.name != "string" || typeof e.function_call.arguments != "string")
      throw new Error(
        '"function_call" parts expect an object with a "function_call" property.'
      );
    return {
      type: "function_call",
      value: e
    };
  }
}, Re = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Oe = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Ze = {
  code: "4",
  name: "assistant_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("id" in e) || !("role" in e) || !("content" in e) || typeof e.id != "string" || typeof e.role != "string" || e.role !== "assistant" || !Array.isArray(e.content) || !e.content.every(
      (t) => t != null && typeof t == "object" && "type" in t && t.type === "text" && "text" in t && t.text != null && typeof t.text == "object" && "value" in t.text && typeof t.text.value == "string"
    ))
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    return {
      type: "assistant_message",
      value: e
    };
  }
}, Me = {
  code: "5",
  name: "assistant_control_data",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("threadId" in e) || !("messageId" in e) || typeof e.threadId != "string" || typeof e.messageId != "string")
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    return {
      type: "assistant_control_data",
      value: {
        threadId: e.threadId,
        messageId: e.messageId
      }
    };
  }
}, $e = {
  code: "6",
  name: "data_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("role" in e) || !("data" in e) || typeof e.role != "string" || e.role !== "data")
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    return {
      type: "data_message",
      value: e
    };
  }
}, De = {
  code: "7",
  name: "tool_calls",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("tool_calls" in e) || typeof e.tool_calls != "object" || e.tool_calls == null || !Array.isArray(e.tool_calls) || e.tool_calls.some(
      (t) => t == null || typeof t != "object" || !("id" in t) || typeof t.id != "string" || !("type" in t) || typeof t.type != "string" || !("function" in t) || t.function == null || typeof t.function != "object" || !("arguments" in t.function) || typeof t.function.name != "string" || typeof t.function.arguments != "string"
    ))
      throw new Error(
        '"tool_calls" parts expect an object with a ToolCallPayload.'
      );
    return {
      type: "tool_calls",
      value: e
    };
  }
}, Le = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Ue = {
  code: "9",
  name: "tool_call",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string" || !("args" in e) || typeof e.args != "object")
      throw new Error(
        '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.'
      );
    return {
      type: "tool_call",
      value: e
    };
  }
}, Ve = {
  code: "a",
  name: "tool_result",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string" || !("args" in e) || typeof e.args != "object" || !("result" in e))
      throw new Error(
        '"tool_result" parts expect an object with a "toolCallId", "toolName", "args", and "result" property.'
      );
    return {
      type: "tool_result",
      value: e
    };
  }
}, Cr = [
  je,
  Pe,
  Re,
  Oe,
  Ze,
  Me,
  $e,
  De,
  Le,
  Ue,
  Ve
];
je.code + "", Pe.code + "", Re.code + "", Oe.code + "", Ze.code + "", Me.code + "", $e.code + "", De.code + "", Le.code + "", Ue.code + "", Ve.code + "";
je.name + "", je.code, Pe.name + "", Pe.code, Re.name + "", Re.code, Oe.name + "", Oe.code, Ze.name + "", Ze.code, Me.name + "", Me.code, $e.name + "", $e.code, De.name + "", De.code, Le.name + "", Le.code, Ue.name + "", Ue.code, Ve.name + "", Ve.code;
Cr.map((e) => e.code);
function Ee(e, t) {
  const r = Cr.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
function Ir(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function C(e, t, r, n, a) {
  e[t] = r, Ir(e, t, n, a);
}
const hn = Symbol("Let zodToJsonSchema decide on which parser to use"), gn = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  markdownDescription: !1,
  patternStrategy: "escape",
  emailStrategy: "format:email"
}, yn = (e) => ({
  ...gn,
  ...e
});
var E;
(function(e) {
  e.assertEqual = (a) => a;
  function t(a) {
  }
  e.assertIs = t;
  function r(a) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (a) => {
    const s = {};
    for (const o of a)
      s[o] = o;
    return s;
  }, e.getValidEnumValues = (a) => {
    const s = e.objectKeys(a).filter((i) => typeof a[a[i]] != "number"), o = {};
    for (const i of s)
      o[i] = a[i];
    return e.objectValues(o);
  }, e.objectValues = (a) => e.objectKeys(a).map(function(s) {
    return a[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const s = [];
    for (const o in a)
      Object.prototype.hasOwnProperty.call(a, o) && s.push(o);
    return s;
  }, e.find = (a, s) => {
    for (const o of a)
      if (s(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  function n(a, s = " | ") {
    return a.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (a, s) => typeof s == "bigint" ? s.toString() : s;
})(E || (E = {}));
var $t;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})($t || ($t = {}));
const v = E.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), ne = (e) => {
  switch (typeof e) {
    case "undefined":
      return v.undefined;
    case "string":
      return v.string;
    case "number":
      return isNaN(e) ? v.nan : v.number;
    case "boolean":
      return v.boolean;
    case "function":
      return v.function;
    case "bigint":
      return v.bigint;
    case "symbol":
      return v.symbol;
    case "object":
      return Array.isArray(e) ? v.array : e === null ? v.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? v.promise : typeof Map < "u" && e instanceof Map ? v.map : typeof Set < "u" && e instanceof Set ? v.set : typeof Date < "u" && e instanceof Date ? v.date : v.object;
    default:
      return v.unknown;
  }
}, f = E.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), vn = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class L extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const r = t || function(s) {
      return s.message;
    }, n = { _errors: [] }, a = (s) => {
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(a);
        else if (o.code === "invalid_return_type")
          a(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          a(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let i = n, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], l++;
          }
        }
    };
    return a(this), n;
  }
  static assert(t) {
    if (!(t instanceof L))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, E.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, n = [];
    for (const a of this.issues)
      a.path.length > 0 ? (r[a.path[0]] = r[a.path[0]] || [], r[a.path[0]].push(t(a))) : n.push(t(a));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
L.create = (e) => new L(e);
const ve = (e, t) => {
  let r;
  switch (e.code) {
    case f.invalid_type:
      e.received === v.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case f.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, E.jsonStringifyReplacer)}`;
      break;
    case f.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${E.joinValues(e.keys, ", ")}`;
      break;
    case f.invalid_union:
      r = "Invalid input";
      break;
    case f.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${E.joinValues(e.options)}`;
      break;
    case f.invalid_enum_value:
      r = `Invalid enum value. Expected ${E.joinValues(e.options)}, received '${e.received}'`;
      break;
    case f.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case f.invalid_return_type:
      r = "Invalid function return type";
      break;
    case f.invalid_date:
      r = "Invalid date";
      break;
    case f.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : E.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case f.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case f.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case f.custom:
      r = "Invalid input";
      break;
    case f.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case f.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case f.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, E.assertNever(e);
  }
  return { message: r };
};
let Nr = ve;
function _n(e) {
  Nr = e;
}
function gt() {
  return Nr;
}
const yt = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: a } = e, s = [...r, ...a.path || []], o = {
    ...a,
    path: s
  };
  if (a.message !== void 0)
    return {
      ...a,
      path: s,
      message: a.message
    };
  let i = "";
  const l = n.filter((u) => !!u).slice().reverse();
  for (const u of l)
    i = u(o, { data: t, defaultError: i }).message;
  return {
    ...a,
    path: s,
    message: i
  };
}, bn = [];
function y(e, t) {
  const r = gt(), n = yt({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      r,
      r === ve ? void 0 : ve
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(n);
}
class R {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const a of r) {
      if (a.status === "aborted")
        return w;
      a.status === "dirty" && t.dirty(), n.push(a.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const a of r) {
      const s = await a.key, o = await a.value;
      n.push({
        key: s,
        value: o
      });
    }
    return R.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: s, value: o } = a;
      if (s.status === "aborted" || o.status === "aborted")
        return w;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const w = Object.freeze({
  status: "aborted"
}), ge = (e) => ({ status: "dirty", value: e }), Z = (e) => ({ status: "valid", value: e }), Dt = (e) => e.status === "aborted", Lt = (e) => e.status === "dirty", qe = (e) => e.status === "valid", Be = (e) => typeof Promise < "u" && e instanceof Promise;
function vt(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Ar(e, t, r, n, a) {
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var _;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_ || (_ = {}));
var Se, Ce;
class W {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const cr = (e, t) => {
  if (qe(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new L(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function x(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: a } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (o, i) => {
    var l, u;
    const { message: d } = e;
    return o.code === "invalid_enum_value" ? { message: d ?? i.defaultError } : typeof i.data > "u" ? { message: (l = d ?? n) !== null && l !== void 0 ? l : i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: (u = d ?? r) !== null && u !== void 0 ? u : i.defaultError };
  }, description: a };
}
class k {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ne(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: ne(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new R(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ne(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Be(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const a = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ne(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return cr(a, s);
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ne(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (Be(a) ? a : Promise.resolve(a));
    return cr(n, s);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, s) => {
      const o = t(a), i = () => s.addIssue({
        code: f.custom,
        ...n(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new B({
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return J.create(this, this._def);
  }
  nullable() {
    return ie.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return q.create(this, this._def);
  }
  promise() {
    return be.create(this, this._def);
  }
  or(t) {
    return Fe.create([this, t], this._def);
  }
  and(t) {
    return We.create(this, t, this._def);
  }
  transform(t) {
    return new B({
      ...x(this._def),
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Qe({
      ...x(this._def),
      innerType: this,
      defaultValue: r,
      typeName: h.ZodDefault
    });
  }
  brand() {
    return new Yt({
      typeName: h.ZodBranded,
      type: this,
      ...x(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new et({
      ...x(this._def),
      innerType: this,
      catchValue: r,
      typeName: h.ZodCatch
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return ot.create(this, t);
  }
  readonly() {
    return tt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const wn = /^c[^\s-]{8,}$/i, xn = /^[0-9a-z]+$/, kn = /^[0-9A-HJKMNP-TV-Z]{26}$/, Tn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, En = /^[a-z0-9_-]{21}$/i, Sn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Cn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, In = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Rt;
const Nn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, An = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, jn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, jr = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Pn = new RegExp(`^${jr}$`);
function Pr(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Rn(e) {
  return new RegExp(`^${Pr(e)}$`);
}
function Rr(e) {
  let t = `${jr}T${Pr(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function On(e, t) {
  return !!((t === "v4" || !t) && Nn.test(e) || (t === "v6" || !t) && An.test(e));
}
class V extends k {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== v.string) {
      const s = this._getOrReturnCtx(t);
      return y(s, {
        code: f.invalid_type,
        expected: v.string,
        received: s.parsedType
      }), w;
    }
    const n = new R();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), y(a, {
          code: f.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), y(a, {
          code: f.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (a = this._getOrReturnCtx(t, a), o ? y(a, {
          code: f.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && y(a, {
          code: f.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Cn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
          validation: "email",
          code: f.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        Rt || (Rt = new RegExp(In, "u")), Rt.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
          validation: "emoji",
          code: f.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Tn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
          validation: "uuid",
          code: f.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        En.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
          validation: "nanoid",
          code: f.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        wn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
          validation: "cuid",
          code: f.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        xn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
          validation: "cuid2",
          code: f.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        kn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
          validation: "ulid",
          code: f.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), y(a, {
            validation: "url",
            code: f.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
        validation: "regex",
        code: f.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Rr(s).test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Pn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Rn(s).test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Sn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
        validation: "duration",
        code: f.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? On(t.data, s.version) || (a = this._getOrReturnCtx(t, a), y(a, {
        validation: "ip",
        code: f.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? jn.test(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
        validation: "base64",
        code: f.invalid_string,
        message: s.message
      }), n.dirty()) : E.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: f.invalid_string,
      ..._.errToObj(n)
    });
  }
  _addCheck(t) {
    return new V({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ..._.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ..._.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ..._.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ..._.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ..._.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ..._.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ..._.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ..._.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ..._.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ..._.errToObj(t) });
  }
  datetime(t) {
    var r, n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (r = t == null ? void 0 : t.offset) !== null && r !== void 0 ? r : !1,
      local: (n = t == null ? void 0 : t.local) !== null && n !== void 0 ? n : !1,
      ..._.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ..._.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ..._.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ..._.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ..._.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ..._.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ..._.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ..._.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ..._.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ..._.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, _.errToObj(t));
  }
  trim() {
    return new V({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new V({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new V({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
V.create = (e) => {
  var t;
  return new V({
    checks: [],
    typeName: h.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...x(e)
  });
};
function Zn(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class ae extends k {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== v.number) {
      const s = this._getOrReturnCtx(t);
      return y(s, {
        code: f.invalid_type,
        expected: v.number,
        received: s.parsedType
      }), w;
    }
    let n;
    const a = new R();
    for (const s of this._def.checks)
      s.kind === "int" ? E.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? Zn(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.not_finite,
        message: s.message
      }), a.dirty()) : E.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, _.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, _.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, _.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, _.toString(r));
  }
  setLimit(t, r, n, a) {
    return new ae({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: _.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ae({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: _.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: _.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: _.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: _.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && E.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
ae.create = (e) => new ae({
  checks: [],
  typeName: h.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...x(e)
});
class se extends k {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== v.bigint) {
      const s = this._getOrReturnCtx(t);
      return y(s, {
        code: f.invalid_type,
        expected: v.bigint,
        received: s.parsedType
      }), w;
    }
    let n;
    const a = new R();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: f.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : E.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, _.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, _.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, _.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, _.toString(r));
  }
  setLimit(t, r, n, a) {
    return new se({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: _.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new se({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: _.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: _.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: _.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: _.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _.toString(r)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
se.create = (e) => {
  var t;
  return new se({
    checks: [],
    typeName: h.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...x(e)
  });
};
class ze extends k {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== v.boolean) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: f.invalid_type,
        expected: v.boolean,
        received: n.parsedType
      }), w;
    }
    return Z(t.data);
  }
}
ze.create = (e) => new ze({
  typeName: h.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...x(e)
});
class pe extends k {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== v.date) {
      const s = this._getOrReturnCtx(t);
      return y(s, {
        code: f.invalid_type,
        expected: v.date,
        received: s.parsedType
      }), w;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return y(s, {
        code: f.invalid_date
      }), w;
    }
    const n = new R();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), y(a, {
        code: f.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : E.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new pe({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: _.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: _.toString(r)
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
pe.create = (e) => new pe({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: h.ZodDate,
  ...x(e)
});
class _t extends k {
  _parse(t) {
    if (this._getType(t) !== v.symbol) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: f.invalid_type,
        expected: v.symbol,
        received: n.parsedType
      }), w;
    }
    return Z(t.data);
  }
}
_t.create = (e) => new _t({
  typeName: h.ZodSymbol,
  ...x(e)
});
class Je extends k {
  _parse(t) {
    if (this._getType(t) !== v.undefined) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: f.invalid_type,
        expected: v.undefined,
        received: n.parsedType
      }), w;
    }
    return Z(t.data);
  }
}
Je.create = (e) => new Je({
  typeName: h.ZodUndefined,
  ...x(e)
});
class He extends k {
  _parse(t) {
    if (this._getType(t) !== v.null) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: f.invalid_type,
        expected: v.null,
        received: n.parsedType
      }), w;
    }
    return Z(t.data);
  }
}
He.create = (e) => new He({
  typeName: h.ZodNull,
  ...x(e)
});
class _e extends k {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Z(t.data);
  }
}
_e.create = (e) => new _e({
  typeName: h.ZodAny,
  ...x(e)
});
class de extends k {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Z(t.data);
  }
}
de.create = (e) => new de({
  typeName: h.ZodUnknown,
  ...x(e)
});
class te extends k {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return y(r, {
      code: f.invalid_type,
      expected: v.never,
      received: r.parsedType
    }), w;
  }
}
te.create = (e) => new te({
  typeName: h.ZodNever,
  ...x(e)
});
class bt extends k {
  _parse(t) {
    if (this._getType(t) !== v.undefined) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: f.invalid_type,
        expected: v.void,
        received: n.parsedType
      }), w;
    }
    return Z(t.data);
  }
}
bt.create = (e) => new bt({
  typeName: h.ZodVoid,
  ...x(e)
});
class q extends k {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== v.array)
      return y(r, {
        code: f.invalid_type,
        expected: v.array,
        received: r.parsedType
      }), w;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, i = r.data.length < a.exactLength.value;
      (o || i) && (y(r, {
        code: o ? f.too_big : f.too_small,
        minimum: i ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (y(r, {
      code: f.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (y(r, {
      code: f.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => a.type._parseAsync(new W(r, o, r.path, i)))).then((o) => R.mergeArray(n, o));
    const s = [...r.data].map((o, i) => a.type._parseSync(new W(r, o, r.path, i)));
    return R.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new q({
      ...this._def,
      minLength: { value: t, message: _.toString(r) }
    });
  }
  max(t, r) {
    return new q({
      ...this._def,
      maxLength: { value: t, message: _.toString(r) }
    });
  }
  length(t, r) {
    return new q({
      ...this._def,
      exactLength: { value: t, message: _.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
q.create = (e, t) => new q({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: h.ZodArray,
  ...x(t)
});
function he(e) {
  if (e instanceof A) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = J.create(he(n));
    }
    return new A({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof q ? new q({
    ...e._def,
    type: he(e.element)
  }) : e instanceof J ? J.create(he(e.unwrap())) : e instanceof ie ? ie.create(he(e.unwrap())) : e instanceof G ? G.create(e.items.map((t) => he(t))) : e;
}
class A extends k {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = E.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== v.object) {
      const u = this._getOrReturnCtx(t);
      return y(u, {
        code: f.invalid_type,
        expected: v.object,
        received: u.parsedType
      }), w;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof te && this._def.unknownKeys === "strip"))
      for (const u in a.data)
        o.includes(u) || i.push(u);
    const l = [];
    for (const u of o) {
      const d = s[u], p = a.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: d._parse(new W(a, p, a.path, u)),
        alwaysSet: u in a.data
      });
    }
    if (this._def.catchall instanceof te) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of i)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: a.data[d] }
          });
      else if (u === "strict")
        i.length > 0 && (y(a, {
          code: f.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of i) {
        const p = a.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: u._parse(
            new W(a, p, a.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const d of l) {
        const p = await d.key, g = await d.value;
        u.push({
          key: p,
          value: g,
          alwaysSet: d.alwaysSet
        });
      }
      return u;
    }).then((u) => R.mergeObjectSync(n, u)) : R.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return _.errToObj, new A({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, s, o, i;
          const l = (o = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = _.errToObj(t).message) !== null && i !== void 0 ? i : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new A({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new A({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new A({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new A({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: h.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new A({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return E.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new A({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return E.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new A({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return he(this);
  }
  partial(t) {
    const r = {};
    return E.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new A({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return E.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof J; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new A({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Or(E.objectKeys(this.shape));
  }
}
A.create = (e, t) => new A({
  shape: () => e,
  unknownKeys: "strip",
  catchall: te.create(),
  typeName: h.ZodObject,
  ...x(t)
});
A.strictCreate = (e, t) => new A({
  shape: () => e,
  unknownKeys: "strict",
  catchall: te.create(),
  typeName: h.ZodObject,
  ...x(t)
});
A.lazycreate = (e, t) => new A({
  shape: e,
  unknownKeys: "strip",
  catchall: te.create(),
  typeName: h.ZodObject,
  ...x(t)
});
class Fe extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new L(i.ctx.common.issues));
      return y(r, {
        code: f.invalid_union,
        unionErrors: o
      }), w;
    }
    if (r.common.async)
      return Promise.all(n.map(async (s) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(a);
    {
      let s;
      const o = [];
      for (const l of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const i = o.map((l) => new L(l));
      return y(r, {
        code: f.invalid_union,
        unionErrors: i
      }), w;
    }
  }
  get options() {
    return this._def.options;
  }
}
Fe.create = (e, t) => new Fe({
  options: e,
  typeName: h.ZodUnion,
  ...x(t)
});
const ee = (e) => e instanceof Ke ? ee(e.schema) : e instanceof B ? ee(e.innerType()) : e instanceof Ye ? [e.value] : e instanceof oe ? e.options : e instanceof Xe ? E.objectValues(e.enum) : e instanceof Qe ? ee(e._def.innerType) : e instanceof Je ? [void 0] : e instanceof He ? [null] : e instanceof J ? [void 0, ...ee(e.unwrap())] : e instanceof ie ? [null, ...ee(e.unwrap())] : e instanceof Yt || e instanceof tt ? ee(e.unwrap()) : e instanceof et ? ee(e._def.innerType) : [];
class Nt extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== v.object)
      return y(r, {
        code: f.invalid_type,
        expected: v.object,
        received: r.parsedType
      }), w;
    const n = this.discriminator, a = r.data[n], s = this.optionsMap.get(a);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (y(r, {
      code: f.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), w);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, r, n) {
    const a = /* @__PURE__ */ new Map();
    for (const s of r) {
      const o = ee(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (a.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        a.set(i, s);
      }
    }
    return new Nt({
      typeName: h.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...x(n)
    });
  }
}
function Ut(e, t) {
  const r = ne(e), n = ne(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === v.object && n === v.object) {
    const a = E.objectKeys(t), s = E.objectKeys(e).filter((i) => a.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const l = Ut(e[i], t[i]);
      if (!l.valid)
        return { valid: !1 };
      o[i] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === v.array && n === v.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], l = Ut(o, i);
      if (!l.valid)
        return { valid: !1 };
      a.push(l.data);
    }
    return { valid: !0, data: a };
  } else return r === v.date && n === v.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class We extends k {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (Dt(s) || Dt(o))
        return w;
      const i = Ut(s.value, o.value);
      return i.valid ? ((Lt(s) || Lt(o)) && r.dirty(), { status: r.value, value: i.data }) : (y(n, {
        code: f.invalid_intersection_types
      }), w);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([s, o]) => a(s, o)) : a(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
We.create = (e, t, r) => new We({
  left: e,
  right: t,
  typeName: h.ZodIntersection,
  ...x(r)
});
class G extends k {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== v.array)
      return y(n, {
        code: f.invalid_type,
        expected: v.array,
        received: n.parsedType
      }), w;
    if (n.data.length < this._def.items.length)
      return y(n, {
        code: f.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), w;
    !this._def.rest && n.data.length > this._def.items.length && (y(n, {
      code: f.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, i) => {
      const l = this._def.items[i] || this._def.rest;
      return l ? l._parse(new W(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => R.mergeArray(r, o)) : R.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new G({
      ...this._def,
      rest: t
    });
  }
}
G.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new G({
    items: e,
    typeName: h.ZodTuple,
    rest: null,
    ...x(t)
  });
};
class Ge extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== v.object)
      return y(n, {
        code: f.invalid_type,
        expected: v.object,
        received: n.parsedType
      }), w;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      a.push({
        key: s._parse(new W(n, i, n.path, i)),
        value: o._parse(new W(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? R.mergeObjectAsync(r, a) : R.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof k ? new Ge({
      keyType: t,
      valueType: r,
      typeName: h.ZodRecord,
      ...x(n)
    }) : new Ge({
      keyType: V.create(),
      valueType: t,
      typeName: h.ZodRecord,
      ...x(r)
    });
  }
}
class wt extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== v.map)
      return y(n, {
        code: f.invalid_type,
        expected: v.map,
        received: n.parsedType
      }), w;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([i, l], u) => ({
      key: a._parse(new W(n, i, n.path, [u, "key"])),
      value: s._parse(new W(n, l, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, d = await l.value;
          if (u.status === "aborted" || d.status === "aborted")
            return w;
          (u.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(u.value, d.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, d = l.value;
        if (u.status === "aborted" || d.status === "aborted")
          return w;
        (u.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(u.value, d.value);
      }
      return { status: r.value, value: i };
    }
  }
}
wt.create = (e, t, r) => new wt({
  valueType: t,
  keyType: e,
  typeName: h.ZodMap,
  ...x(r)
});
class fe extends k {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== v.set)
      return y(n, {
        code: f.invalid_type,
        expected: v.set,
        received: n.parsedType
      }), w;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (y(n, {
      code: f.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (y(n, {
      code: f.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return w;
        d.status === "dirty" && r.dirty(), u.add(d.value);
      }
      return { status: r.value, value: u };
    }
    const i = [...n.data.values()].map((l, u) => s._parse(new W(n, l, n.path, u)));
    return n.common.async ? Promise.all(i).then((l) => o(l)) : o(i);
  }
  min(t, r) {
    return new fe({
      ...this._def,
      minSize: { value: t, message: _.toString(r) }
    });
  }
  max(t, r) {
    return new fe({
      ...this._def,
      maxSize: { value: t, message: _.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
fe.create = (e, t) => new fe({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: h.ZodSet,
  ...x(t)
});
class ye extends k {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== v.function)
      return y(r, {
        code: f.invalid_type,
        expected: v.function,
        received: r.parsedType
      }), w;
    function n(i, l) {
      return yt({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          gt(),
          ve
        ].filter((u) => !!u),
        issueData: {
          code: f.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function a(i, l) {
      return yt({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          gt(),
          ve
        ].filter((u) => !!u),
        issueData: {
          code: f.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof be) {
      const i = this;
      return Z(async function(...l) {
        const u = new L([]), d = await i._def.args.parseAsync(l, s).catch((m) => {
          throw u.addIssue(n(l, m)), u;
        }), p = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(p, s).catch((m) => {
          throw u.addIssue(a(p, m)), u;
        });
      });
    } else {
      const i = this;
      return Z(function(...l) {
        const u = i._def.args.safeParse(l, s);
        if (!u.success)
          throw new L([n(l, u.error)]);
        const d = Reflect.apply(o, this, u.data), p = i._def.returns.safeParse(d, s);
        if (!p.success)
          throw new L([a(d, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new ye({
      ...this._def,
      args: G.create(t).rest(de.create())
    });
  }
  returns(t) {
    return new ye({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, n) {
    return new ye({
      args: t || G.create([]).rest(de.create()),
      returns: r || de.create(),
      typeName: h.ZodFunction,
      ...x(n)
    });
  }
}
class Ke extends k {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ke.create = (e, t) => new Ke({
  getter: e,
  typeName: h.ZodLazy,
  ...x(t)
});
class Ye extends k {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return y(r, {
        received: r.data,
        code: f.invalid_literal,
        expected: this._def.value
      }), w;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ye.create = (e, t) => new Ye({
  value: e,
  typeName: h.ZodLiteral,
  ...x(t)
});
function Or(e, t) {
  return new oe({
    values: e,
    typeName: h.ZodEnum,
    ...x(t)
  });
}
class oe extends k {
  constructor() {
    super(...arguments), Se.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return y(r, {
        expected: E.joinValues(n),
        received: r.parsedType,
        code: f.invalid_type
      }), w;
    }
    if (vt(this, Se) || Ar(this, Se, new Set(this._def.values)), !vt(this, Se).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return y(r, {
        received: r.data,
        code: f.invalid_enum_value,
        options: n
      }), w;
    }
    return Z(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  extract(t, r = this._def) {
    return oe.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return oe.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
Se = /* @__PURE__ */ new WeakMap();
oe.create = Or;
class Xe extends k {
  constructor() {
    super(...arguments), Ce.set(this, void 0);
  }
  _parse(t) {
    const r = E.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== v.string && n.parsedType !== v.number) {
      const a = E.objectValues(r);
      return y(n, {
        expected: E.joinValues(a),
        received: n.parsedType,
        code: f.invalid_type
      }), w;
    }
    if (vt(this, Ce) || Ar(this, Ce, new Set(E.getValidEnumValues(this._def.values))), !vt(this, Ce).has(t.data)) {
      const a = E.objectValues(r);
      return y(n, {
        received: n.data,
        code: f.invalid_enum_value,
        options: a
      }), w;
    }
    return Z(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ce = /* @__PURE__ */ new WeakMap();
Xe.create = (e, t) => new Xe({
  values: e,
  typeName: h.ZodNativeEnum,
  ...x(t)
});
class be extends k {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== v.promise && r.common.async === !1)
      return y(r, {
        code: f.invalid_type,
        expected: v.promise,
        received: r.parsedType
      }), w;
    const n = r.parsedType === v.promise ? r.data : Promise.resolve(r.data);
    return Z(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
be.create = (e, t) => new be({
  type: e,
  typeName: h.ZodPromise,
  ...x(t)
});
class B extends k {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === h.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        y(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), a.type === "preprocess") {
      const o = a.transform(n.data, s);
      if (n.common.async)
        return Promise.resolve(o).then(async (i) => {
          if (r.value === "aborted")
            return w;
          const l = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? w : l.status === "dirty" || r.value === "dirty" ? ge(l.value) : l;
        });
      {
        if (r.value === "aborted")
          return w;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? w : i.status === "dirty" || r.value === "dirty" ? ge(i.value) : i;
      }
    }
    if (a.type === "refinement") {
      const o = (i) => {
        const l = a.refinement(i, s);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? w : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? w : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!qe(o))
          return o;
        const i = a.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => qe(o) ? Promise.resolve(a.transform(o.value, s)).then((i) => ({ status: r.value, value: i })) : o);
    E.assertNever(a);
  }
}
B.create = (e, t, r) => new B({
  schema: e,
  typeName: h.ZodEffects,
  effect: t,
  ...x(r)
});
B.createWithPreprocess = (e, t, r) => new B({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: h.ZodEffects,
  ...x(r)
});
class J extends k {
  _parse(t) {
    return this._getType(t) === v.undefined ? Z(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
J.create = (e, t) => new J({
  innerType: e,
  typeName: h.ZodOptional,
  ...x(t)
});
class ie extends k {
  _parse(t) {
    return this._getType(t) === v.null ? Z(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ie.create = (e, t) => new ie({
  innerType: e,
  typeName: h.ZodNullable,
  ...x(t)
});
class Qe extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === v.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Qe.create = (e, t) => new Qe({
  innerType: e,
  typeName: h.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...x(t)
});
class et extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Be(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new L(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new L(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
et.create = (e, t) => new et({
  innerType: e,
  typeName: h.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...x(t)
});
class xt extends k {
  _parse(t) {
    if (this._getType(t) !== v.nan) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: f.invalid_type,
        expected: v.nan,
        received: n.parsedType
      }), w;
    }
    return { status: "valid", value: t.data };
  }
}
xt.create = (e) => new xt({
  typeName: h.ZodNaN,
  ...x(e)
});
const Mn = Symbol("zod_brand");
class Yt extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ot extends k {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? w : s.status === "dirty" ? (r.dirty(), ge(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return a.status === "aborted" ? w : a.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new ot({
      in: t,
      out: r,
      typeName: h.ZodPipeline
    });
  }
}
class tt extends k {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (qe(a) && (a.value = Object.freeze(a.value)), a);
    return Be(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
tt.create = (e, t) => new tt({
  innerType: e,
  typeName: h.ZodReadonly,
  ...x(t)
});
function Zr(e, t = {}, r) {
  return e ? _e.create().superRefine((n, a) => {
    var s, o;
    if (!e(n)) {
      const i = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, l = (o = (s = i.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0, u = typeof i == "string" ? { message: i } : i;
      a.addIssue({ code: "custom", ...u, fatal: l });
    }
  }) : _e.create();
}
const $n = {
  object: A.lazycreate
};
var h;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(h || (h = {}));
const Dn = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Zr((r) => r instanceof e, t), Mr = V.create, $r = ae.create, Ln = xt.create, Un = se.create, Dr = ze.create, Vn = pe.create, qn = _t.create, Bn = Je.create, zn = He.create, Jn = _e.create, Hn = de.create, Fn = te.create, Wn = bt.create, Gn = q.create, Kn = A.create, Yn = A.strictCreate, Xn = Fe.create, Qn = Nt.create, ea = We.create, ta = G.create, ra = Ge.create, na = wt.create, aa = fe.create, sa = ye.create, oa = Ke.create, ia = Ye.create, la = oe.create, ca = Xe.create, ua = be.create, ur = B.create, da = J.create, pa = ie.create, fa = B.createWithPreprocess, ma = ot.create, ha = () => Mr().optional(), ga = () => $r().optional(), ya = () => Dr().optional(), va = {
  string: (e) => V.create({ ...e, coerce: !0 }),
  number: (e) => ae.create({ ...e, coerce: !0 }),
  boolean: (e) => ze.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => se.create({ ...e, coerce: !0 }),
  date: (e) => pe.create({ ...e, coerce: !0 })
}, _a = w;
var c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ve,
  setErrorMap: _n,
  getErrorMap: gt,
  makeIssue: yt,
  EMPTY_PATH: bn,
  addIssueToContext: y,
  ParseStatus: R,
  INVALID: w,
  DIRTY: ge,
  OK: Z,
  isAborted: Dt,
  isDirty: Lt,
  isValid: qe,
  isAsync: Be,
  get util() {
    return E;
  },
  get objectUtil() {
    return $t;
  },
  ZodParsedType: v,
  getParsedType: ne,
  ZodType: k,
  datetimeRegex: Rr,
  ZodString: V,
  ZodNumber: ae,
  ZodBigInt: se,
  ZodBoolean: ze,
  ZodDate: pe,
  ZodSymbol: _t,
  ZodUndefined: Je,
  ZodNull: He,
  ZodAny: _e,
  ZodUnknown: de,
  ZodNever: te,
  ZodVoid: bt,
  ZodArray: q,
  ZodObject: A,
  ZodUnion: Fe,
  ZodDiscriminatedUnion: Nt,
  ZodIntersection: We,
  ZodTuple: G,
  ZodRecord: Ge,
  ZodMap: wt,
  ZodSet: fe,
  ZodFunction: ye,
  ZodLazy: Ke,
  ZodLiteral: Ye,
  ZodEnum: oe,
  ZodNativeEnum: Xe,
  ZodPromise: be,
  ZodEffects: B,
  ZodTransformer: B,
  ZodOptional: J,
  ZodNullable: ie,
  ZodDefault: Qe,
  ZodCatch: et,
  ZodNaN: xt,
  BRAND: Mn,
  ZodBranded: Yt,
  ZodPipeline: ot,
  ZodReadonly: tt,
  custom: Zr,
  Schema: k,
  ZodSchema: k,
  late: $n,
  get ZodFirstPartyTypeKind() {
    return h;
  },
  coerce: va,
  any: Jn,
  array: Gn,
  bigint: Un,
  boolean: Dr,
  date: Vn,
  discriminatedUnion: Qn,
  effect: ur,
  enum: la,
  function: sa,
  instanceof: Dn,
  intersection: ea,
  lazy: oa,
  literal: ia,
  map: na,
  nan: Ln,
  nativeEnum: ca,
  never: Fn,
  null: zn,
  nullable: pa,
  number: $r,
  object: Kn,
  oboolean: ya,
  onumber: ga,
  optional: da,
  ostring: ha,
  pipeline: ma,
  preprocess: fa,
  promise: ua,
  record: ra,
  set: aa,
  strictObject: Yn,
  string: Mr,
  symbol: qn,
  transformer: ur,
  tuple: ta,
  undefined: Bn,
  union: Xn,
  unknown: Hn,
  void: Wn,
  NEVER: _a,
  ZodIssueCode: f,
  quotelessJson: vn,
  ZodError: L
});
function ba() {
  return {};
}
function wa(e, t) {
  var n, a;
  const r = {
    type: "array"
  };
  return ((a = (n = e.type) == null ? void 0 : n._def) == null ? void 0 : a.typeName) !== h.ZodAny && (r.items = S(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && C(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && C(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (C(r, "minItems", e.exactLength.value, e.exactLength.message, t), C(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function xa(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? C(r, "minimum", n.value, n.message, t) : C(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), C(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? C(r, "maximum", n.value, n.message, t) : C(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), C(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        C(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function ka() {
  return {
    type: "boolean"
  };
}
function Ta(e, t) {
  return S(e.type._def, t);
}
const Ea = (e, t) => S(e.innerType._def, t);
function Lr(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => Lr(e, t, a))
    };
  switch (n) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return Sa(e, t);
  }
}
const Sa = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        C(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
      case "max":
        C(
          r,
          "maximum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
    }
  return r;
};
function Ca(e, t) {
  return {
    ...S(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Ia(e, t) {
  return t.effectStrategy === "input" ? S(e.schema._def, t) : {};
}
function Na(e) {
  return {
    type: "string",
    enum: e.values
  };
}
const Aa = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function ja(e, t) {
  const r = [
    S(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    S(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((s) => !!s);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const a = [];
  return r.forEach((s) => {
    if (Aa(s))
      a.push(...s.allOf), s.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let o = s;
      if ("additionalProperties" in s && s.additionalProperties === !1) {
        const { additionalProperties: i, ...l } = s;
        o = l;
      } else
        n = void 0;
      a.push(o);
    }
  }), a.length ? {
    allOf: a,
    ...n
  } : void 0;
}
function Pa(e, t) {
  const r = typeof e.value;
  return r !== "bigint" && r !== "number" && r !== "boolean" && r !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : t.target === "openApi3" ? {
    type: r === "bigint" ? "integer" : r,
    enum: [e.value]
  } : {
    type: r === "bigint" ? "integer" : r,
    const: e.value
  };
}
const ke = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: "^[cC][^\\s-]{8,}$",
  cuid2: "^[a-z][a-z0-9]*$",
  ulid: "^[0-9A-HJKMNP-TV-Z]{26}$",
  /**
   * `a-z` was added to replicate /i flag
   */
  email: "^(?!\\.)(?!.*\\.\\.)([a-zA-Z0-9_+-\\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\\-]*\\.)+[a-zA-Z]{2,}$",
  emoji: "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  /**
   * Unused
   */
  uuid: "^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$",
  /**
   * Unused
   */
  ipv4: "^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$",
  /**
   * Unused
   */
  ipv6: "^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$"
};
function Ur(e, t) {
  const r = {
    type: "string"
  };
  function n(a) {
    return t.patternStrategy === "escape" ? Ra(a) : a;
  }
  if (e.checks)
    for (const a of e.checks)
      switch (a.kind) {
        case "min":
          C(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t);
          break;
        case "max":
          C(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              ce(r, "email", a.message, t);
              break;
            case "format:idn-email":
              ce(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              Q(r, ke.email, a.message, t);
              break;
          }
          break;
        case "url":
          ce(r, "uri", a.message, t);
          break;
        case "uuid":
          ce(r, "uuid", a.message, t);
          break;
        case "regex":
          Q(r, a.regex.source, a.message, t);
          break;
        case "cuid":
          Q(r, ke.cuid, a.message, t);
          break;
        case "cuid2":
          Q(r, ke.cuid2, a.message, t);
          break;
        case "startsWith":
          Q(r, "^" + n(a.value), a.message, t);
          break;
        case "endsWith":
          Q(r, n(a.value) + "$", a.message, t);
          break;
        case "datetime":
          ce(r, "date-time", a.message, t);
          break;
        case "length":
          C(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t), C(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "includes": {
          Q(r, n(a.value), a.message, t);
          break;
        }
        case "ip": {
          a.version !== "v6" && ce(r, "ipv4", a.message, t), a.version !== "v4" && ce(r, "ipv6", a.message, t);
          break;
        }
        case "emoji":
          Q(r, ke.emoji, a.message, t);
          break;
        case "ulid": {
          Q(r, ke.ulid, a.message, t);
          break;
        }
      }
  return r;
}
const Ra = (e) => Array.from(e).map((t) => /[a-zA-Z0-9]/.test(t) ? t : `\\${t}`).join(""), ce = (e, t, r, n) => {
  var a;
  e.format || (a = e.anyOf) != null && a.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : C(e, "format", t, r, n);
}, Q = (e, t, r, n) => {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: t,
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : C(e, "pattern", t, r, n);
};
function Vr(e, t) {
  var n, a, s, o;
  if (t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === h.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((i, l) => ({
        ...i,
        [l]: S(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", l]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: S(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (t.target === "openApi3")
    return r;
  if (((a = e.keyType) == null ? void 0 : a._def.typeName) === h.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
    const i = Object.entries(Ur(e.keyType._def, t)).reduce((l, [u, d]) => u === "type" ? l : { ...l, [u]: d }, {});
    return {
      ...r,
      propertyNames: i
    };
  } else if (((o = e.keyType) == null ? void 0 : o._def.typeName) === h.ZodEnum)
    return {
      ...r,
      propertyNames: {
        enum: e.keyType._def.values
      }
    };
  return r;
}
function Oa(e, t) {
  if (t.mapStrategy === "record")
    return Vr(e, t);
  const r = S(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, n = S(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || {};
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [r, n],
      minItems: 2,
      maxItems: 2
    }
  };
}
function Za(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function Ma() {
  return {
    not: {}
  };
}
function $a(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const kt = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Da(e, t) {
  if (t.target === "openApi3")
    return dr(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in kt && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = kt[s._def.typeName];
      return o && !a.includes(o) ? [...a, o] : a;
    }, []);
    return {
      type: n.length > 1 ? n : n[0]
    };
  } else if (r.every((n) => n._def.typeName === "ZodLiteral" && !n.description)) {
    const n = r.reduce((a, s) => {
      const o = typeof s._def.value;
      switch (o) {
        case "string":
        case "number":
        case "boolean":
          return [...a, o];
        case "bigint":
          return [...a, "integer"];
        case "object":
          if (s._def.value === null)
            return [...a, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return a;
      }
    }, []);
    if (n.length === r.length) {
      const a = n.filter((s, o, i) => i.indexOf(s) === o);
      return {
        type: a.length > 1 ? a : a[0],
        enum: r.reduce((s, o) => s.includes(o._def.value) ? s : [...s, o._def.value], [])
      };
    }
  } else if (r.every((n) => n._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce((n, a) => [
        ...n,
        ...a._def.values.filter((s) => !n.includes(s))
      ], [])
    };
  return dr(e, t);
}
const dr = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => S(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function La(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: kt[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        kt[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const n = S(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = S(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function Ua(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", Ir(r, "type", n.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? C(r, "minimum", n.value, n.message, t) : C(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), C(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? C(r, "maximum", n.value, n.message, t) : C(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), C(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        C(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Va(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : S(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : S(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function qa(e, t) {
  const r = {
    type: "object",
    ...Object.entries(e.shape()).reduce((n, [a, s]) => {
      if (s === void 0 || s._def === void 0)
        return n;
      const o = S(s._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", a],
        propertyPath: [...t.currentPath, "properties", a]
      });
      return o === void 0 ? n : {
        properties: { ...n.properties, [a]: o },
        required: s.isOptional() ? n.required : [...n.required, a]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: Va(e, t)
  };
  return r.required.length || delete r.required, r;
}
const Ba = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return S(e.innerType._def, t);
  const r = S(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return r ? {
    anyOf: [
      {
        not: {}
      },
      r
    ]
  } : {};
}, za = (e, t) => {
  if (t.pipeStrategy === "input")
    return S(e.in._def, t);
  if (t.pipeStrategy === "output")
    return S(e.out._def, t);
  const r = S(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = S(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function Ja(e, t) {
  return S(e.type._def, t);
}
function Ha(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: S(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && C(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && C(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function Fa(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, n) => S(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: S(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, n) => S(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function Wa() {
  return {
    not: {}
  };
}
function Ga() {
  return {};
}
const Ka = (e, t) => S(e.innerType._def, t);
function S(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const i = (o = t.override) == null ? void 0 : o.call(t, e, t, n, r);
    if (i !== hn)
      return i;
  }
  if (n && !r) {
    const i = Ya(n, t);
    if (i !== void 0)
      return i;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = Qa(e, e.typeName, t);
  return s && es(e, t, s), a.jsonSchema = s, s;
}
const Ya = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Xa(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, Xa = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, Qa = (e, t, r) => {
  switch (t) {
    case h.ZodString:
      return Ur(e, r);
    case h.ZodNumber:
      return Ua(e, r);
    case h.ZodObject:
      return qa(e, r);
    case h.ZodBigInt:
      return xa(e, r);
    case h.ZodBoolean:
      return ka();
    case h.ZodDate:
      return Lr(e, r);
    case h.ZodUndefined:
      return Wa();
    case h.ZodNull:
      return $a(r);
    case h.ZodArray:
      return wa(e, r);
    case h.ZodUnion:
    case h.ZodDiscriminatedUnion:
      return Da(e, r);
    case h.ZodIntersection:
      return ja(e, r);
    case h.ZodTuple:
      return Fa(e, r);
    case h.ZodRecord:
      return Vr(e, r);
    case h.ZodLiteral:
      return Pa(e, r);
    case h.ZodEnum:
      return Na(e);
    case h.ZodNativeEnum:
      return Za(e);
    case h.ZodNullable:
      return La(e, r);
    case h.ZodOptional:
      return Ba(e, r);
    case h.ZodMap:
      return Oa(e, r);
    case h.ZodSet:
      return Ha(e, r);
    case h.ZodLazy:
      return S(e.getter()._def, r);
    case h.ZodPromise:
      return Ja(e, r);
    case h.ZodNaN:
    case h.ZodNever:
      return Ma();
    case h.ZodEffects:
      return Ia(e, r);
    case h.ZodAny:
      return ba();
    case h.ZodUnknown:
      return Ga();
    case h.ZodDefault:
      return Ca(e, r);
    case h.ZodBranded:
      return Ta(e, r);
    case h.ZodReadonly:
      return Ka(e, r);
    case h.ZodCatch:
      return Ea(e, r);
    case h.ZodPipeline:
      return za(e, r);
    case h.ZodFunction:
    case h.ZodVoid:
    case h.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, es = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), ts = (e) => {
  const t = yn(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    currentPath: r,
    propertyPath: void 0,
    seen: new Map(Object.entries(t.definitions).map(([n, a]) => [
      a._def,
      {
        def: a._def,
        path: [...t.basePath, t.definitionPath, n],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
}, rs = (e, t) => {
  const r = ts(t), n = void 0, a = t == null ? void 0 : t.name, s = S(
    e._def,
    r,
    !1
  ) ?? {}, o = a === void 0 ? n ? {
    ...s,
    [r.definitionPath]: n
  } : s : {
    $ref: [
      ...r.$refStrategy === "relative" ? [] : r.basePath,
      r.definitionPath,
      a
    ].join("/"),
    [r.definitionPath]: {
      ...n,
      [a]: s
    }
  };
  return r.target === "jsonSchema7" ? o.$schema = "http://json-schema.org/draft-07/schema#" : r.target === "jsonSchema2019-09" && (o.$schema = "https://json-schema.org/draft/2019-09/schema#"), o;
};
var ns = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, ue = "1.9.0", pr = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function as(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(pr);
  if (!n)
    return function() {
      return !1;
    };
  var a = {
    major: +n[1],
    minor: +n[2],
    patch: +n[3],
    prerelease: n[4]
  };
  if (a.prerelease != null)
    return function(l) {
      return l === e;
    };
  function s(i) {
    return r.add(i), !1;
  }
  function o(i) {
    return t.add(i), !0;
  }
  return function(l) {
    if (t.has(l))
      return !0;
    if (r.has(l))
      return !1;
    var u = l.match(pr);
    if (!u)
      return s(l);
    var d = {
      major: +u[1],
      minor: +u[2],
      patch: +u[3],
      prerelease: u[4]
    };
    return d.prerelease != null || a.major !== d.major ? s(l) : a.major === 0 ? a.minor === d.minor && a.patch <= d.patch ? o(l) : s(l) : a.minor <= d.minor ? o(l) : s(l);
  };
}
var ss = as(ue), os = ue.split(".")[0], rt = Symbol.for("opentelemetry.js.api." + os), nt = ns;
function Xt(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = nt[rt] = (a = nt[rt]) !== null && a !== void 0 ? a : {
    version: ue
  };
  if (!n && s[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(o.stack || o.message), !1;
  }
  if (s.version !== ue) {
    var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + e + " does not match previously registered API v" + ue);
    return r.error(o.stack || o.message), !1;
  }
  return s[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + ue + "."), !0;
}
function at(e) {
  var t, r, n = (t = nt[rt]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !ss(n)))
    return (r = nt[rt]) === null || r === void 0 ? void 0 : r[e];
}
function Qt(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + ue + ".");
  var r = nt[rt];
  r && delete r[e];
}
var is = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, ls = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, cs = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Te("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Te("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Te("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Te("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Te("verbose", this._namespace, t);
    }, e;
  }()
);
function Te(e, t, r) {
  var n = at("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, ls([], is(r), !1));
}
var D;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(D || (D = {}));
function us(e, t) {
  e < D.NONE ? e = D.NONE : e > D.ALL && (e = D.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", D.ERROR),
    warn: r("warn", D.WARN),
    info: r("info", D.INFO),
    debug: r("debug", D.DEBUG),
    verbose: r("verbose", D.VERBOSE)
  };
}
var ds = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, ps = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, fs = "diag", Tt = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var i = at("diag");
          if (i)
            return i[a].apply(i, ps([], ds(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, i, l;
        if (s === void 0 && (s = { logLevel: D.INFO }), a === r) {
          var u = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = u.stack) !== null && o !== void 0 ? o : u.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var d = at("diag"), p = us((i = s.logLevel) !== null && i !== void 0 ? i : D.INFO, a);
        if (d && !s.suppressOverrideMessage) {
          var g = (l = new Error().stack) !== null && l !== void 0 ? l : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + g), p.warn("Current logger will overwrite one already registered from " + g);
        }
        return Xt("diag", p, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Qt(fs, r);
      }, r.createComponentLogger = function(a) {
        return new cs(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
);
function ms(e) {
  return Symbol.for(e);
}
var hs = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), r.getValue = function(n) {
        return r._currentContext.get(n);
      }, r.setValue = function(n, a) {
        var s = new e(r._currentContext);
        return s._currentContext.set(n, a), s;
      }, r.deleteValue = function(n) {
        var a = new e(r._currentContext);
        return a._currentContext.delete(n), a;
      };
    }
    return e;
  }()
), gs = new hs(), ys = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, vs = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, _s = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return gs;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, vs([n], ys(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), bs = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, ws = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Ot = "context", xs = new _s(), qr = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Xt(Ot, t, Tt.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, ws([t, r, n], bs(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return at(Ot) || xs;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Qt(Ot, Tt.instance());
    }, e;
  }()
), Vt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Vt || (Vt = {}));
var Br = "0000000000000000", zr = "00000000000000000000000000000000", ks = {
  traceId: zr,
  spanId: Br,
  traceFlags: Vt.NONE
}, Ae = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = ks), this._spanContext = t;
    }
    return e.prototype.spanContext = function() {
      return this._spanContext;
    }, e.prototype.setAttribute = function(t, r) {
      return this;
    }, e.prototype.setAttributes = function(t) {
      return this;
    }, e.prototype.addEvent = function(t, r) {
      return this;
    }, e.prototype.addLink = function(t) {
      return this;
    }, e.prototype.addLinks = function(t) {
      return this;
    }, e.prototype.setStatus = function(t) {
      return this;
    }, e.prototype.updateName = function(t) {
      return this;
    }, e.prototype.end = function(t) {
    }, e.prototype.isRecording = function() {
      return !1;
    }, e.prototype.recordException = function(t, r) {
    }, e;
  }()
), er = ms("OpenTelemetry Context Key SPAN");
function tr(e) {
  return e.getValue(er) || void 0;
}
function Ts() {
  return tr(qr.getInstance().active());
}
function rr(e, t) {
  return e.setValue(er, t);
}
function Es(e) {
  return e.deleteValue(er);
}
function Ss(e, t) {
  return rr(e, new Ae(t));
}
function Jr(e) {
  var t;
  return (t = tr(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var Cs = /^([0-9a-f]{32})$/i, Is = /^[0-9a-f]{16}$/i;
function Ns(e) {
  return Cs.test(e) && e !== zr;
}
function As(e) {
  return Is.test(e) && e !== Br;
}
function Hr(e) {
  return Ns(e.traceId) && As(e.spanId);
}
function js(e) {
  return new Ae(e);
}
var Zt = qr.getInstance(), Fr = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = Zt.active());
      var a = !!(r != null && r.root);
      if (a)
        return new Ae();
      var s = n && Jr(n);
      return Ps(s) && Hr(s) ? new Ae(s) : new Ae();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (s = r, i = n) : (s = r, o = n, i = a);
        var l = o ?? Zt.active(), u = this.startSpan(t, s, l), d = rr(l, u);
        return Zt.with(d, i, void 0, u);
      }
    }, e;
  }()
);
function Ps(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var Rs = new Fr(), Os = (
  /** @class */
  function() {
    function e(t, r, n, a) {
      this._provider = t, this.name = r, this.version = n, this.options = a;
    }
    return e.prototype.startSpan = function(t, r, n) {
      return this._getTracer().startSpan(t, r, n);
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s = this._getTracer();
      return Reflect.apply(s.startActiveSpan, s, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : Rs;
    }, e;
  }()
), Zs = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new Fr();
    }, e;
  }()
), Ms = new Zs(), fr = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new Os(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Ms;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), Et;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(Et || (Et = {}));
var Mt = "trace", $s = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new fr(), this.wrapSpanContext = js, this.isSpanContextValid = Hr, this.deleteSpan = Es, this.getSpan = tr, this.getActiveSpan = Ts, this.getSpanContext = Jr, this.setSpan = rr, this.setSpanContext = Ss;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Xt(Mt, this._proxyTracerProvider, Tt.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return at(Mt) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Qt(Mt, Tt.instance()), this._proxyTracerProvider = new fr();
    }, e;
  }()
), Ds = $s.getInstance(), Ls = Object.defineProperty, Us = (e, t) => {
  for (var r in t)
    Ls(e, r, { get: t[r], enumerable: !0 });
};
async function Vs(e) {
  return new Promise((t) => setTimeout(t, e));
}
var qs = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => Wr(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function Wr(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (ft(s) || t === 0)
      throw s;
    const o = Er(s), i = [...a, s], l = i.length;
    if (l > t)
      throw new sr({
        message: `Failed after ${l} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (s instanceof Error && z.isAPICallError(s) && s.isRetryable === !0 && l <= t)
      return await Vs(r), Wr(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw l === 1 ? s : new sr({
      message: `Failed after ${l} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
var Bs = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function zs(e) {
  for (const { bytes: t, mimeType: r } of Bs)
    if (e.length >= t.length && t.every((n, a) => e[a] === n))
      return r;
}
function mr(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return mn(e);
    } catch (t) {
      throw new ar({
        message: "Invalid data content. Content string is not a base64-encoded image.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new ar({ content: e });
}
var Js = class extends Error {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super(t), this.name = "AI_InvalidMessageRoleError", this.role = e;
  }
  static isInvalidMessageRoleError(e) {
    return e instanceof Error && e.name === "AI_InvalidMessageRoleError" && typeof e.role == "string";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      role: this.role
    };
  }
};
function Hs(e) {
  const t = [];
  e.system != null && t.push({ role: "system", content: e.system });
  const r = e.type;
  switch (r) {
    case "prompt": {
      t.push({
        role: "user",
        content: [{ type: "text", text: e.prompt }]
      });
      break;
    }
    case "messages": {
      t.push(
        ...e.messages.map(Fs)
      );
      break;
    }
    default: {
      const n = r;
      throw new Error(`Unsupported prompt type: ${n}`);
    }
  }
  return t;
}
function Fs(e) {
  const t = e.role;
  switch (t) {
    case "system":
      return { role: "system", content: e.content };
    case "user":
      return typeof e.content == "string" ? {
        role: "user",
        content: [{ type: "text", text: e.content }]
      } : {
        role: "user",
        content: e.content.map(
          (r) => {
            var n;
            switch (r.type) {
              case "text":
                return r;
              case "image": {
                if (r.image instanceof URL)
                  return {
                    type: "image",
                    image: r.image,
                    mimeType: r.mimeType
                  };
                if (typeof r.image == "string")
                  try {
                    const s = new URL(r.image);
                    switch (s.protocol) {
                      case "http:":
                      case "https:":
                        return {
                          type: "image",
                          image: s,
                          mimeType: r.mimeType
                        };
                      case "data:":
                        try {
                          const [o, i] = r.image.split(","), l = o.split(";")[0].split(":")[1];
                          if (l == null || i == null)
                            throw new Error("Invalid data URL format");
                          return {
                            type: "image",
                            image: mr(i),
                            mimeType: l
                          };
                        } catch {
                          throw new Error(
                            `Error processing data URL: ${Er(
                              e
                            )}`
                          );
                        }
                      default:
                        throw new Error(
                          `Unsupported URL protocol: ${s.protocol}`
                        );
                    }
                  } catch {
                  }
                const a = mr(r.image);
                return {
                  type: "image",
                  image: a,
                  mimeType: (n = r.mimeType) != null ? n : zs(a)
                };
              }
            }
          }
        )
      };
    case "assistant":
      return typeof e.content == "string" ? {
        role: "assistant",
        content: [{ type: "text", text: e.content }]
      } : {
        role: "assistant",
        content: e.content.filter(
          // remove empty text parts:
          (r) => r.type !== "text" || r.text !== ""
        )
      };
    case "tool":
      return e;
    default: {
      const r = t;
      throw new Js({ role: r });
    }
  }
}
function Ws(e) {
  if (e.prompt == null && e.messages == null)
    throw new pt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new pt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.messages != null) {
    for (const t of e.messages)
      if (t.role === "system" && typeof t.content != "string")
        throw new pt({
          prompt: e,
          message: "system message content must be a string"
        });
  }
  return e.prompt != null ? {
    type: "prompt",
    prompt: e.prompt,
    messages: void 0,
    system: e.system
  } : {
    type: "messages",
    prompt: void 0,
    messages: e.messages,
    // only possible case bc of checks above
    system: e.system
  };
}
function Gs({
  maxTokens: e,
  temperature: t,
  topP: r,
  presencePenalty: n,
  frequencyPenalty: a,
  seed: s,
  maxRetries: o
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new X({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new X({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new X({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new X({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new X({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number"
    });
  if (a != null && typeof a != "number")
    throw new X({
      parameter: "frequencyPenalty",
      value: a,
      message: "frequencyPenalty must be a number"
    });
  if (s != null && !Number.isInteger(s))
    throw new X({
      parameter: "seed",
      value: s,
      message: "seed must be an integer"
    });
  if (o != null) {
    if (!Number.isInteger(o))
      throw new X({
        parameter: "maxRetries",
        value: o,
        message: "maxRetries must be an integer"
      });
    if (o < 0)
      throw new X({
        parameter: "maxRetries",
        value: o,
        message: "maxRetries must be >= 0"
      });
  }
  return {
    maxTokens: e,
    temperature: t ?? 0,
    topP: r,
    presencePenalty: n,
    frequencyPenalty: a,
    seed: s,
    maxRetries: o ?? 2
  };
}
function Ks(e) {
  return {
    promptTokens: e.promptTokens,
    completionTokens: e.completionTokens,
    totalTokens: e.promptTokens + e.completionTokens
  };
}
function Ys(e) {
  return rs(e);
}
function Gr(e, { contentType: t }) {
  var r;
  const n = new Headers((r = e == null ? void 0 : e.headers) != null ? r : {});
  return n.has("Content-Type") || n.set("Content-Type", t), n;
}
function hr(e, t) {
  const r = e.pipeThrough(
    new TransformStream(t)
  );
  return r[Symbol.asyncIterator] = () => {
    const n = r.getReader();
    return {
      async next() {
        const { done: a, value: s } = await n.read();
        return a ? { done: !0, value: void 0 } : { done: !1, value: s };
      }
    };
  }, r;
}
function Xs(e) {
  return e != null && Object.keys(e).length > 0;
}
function Qs({
  tools: e,
  toolChoice: t
}) {
  return Xs(e) ? {
    tools: Object.entries(e).map(([r, n]) => ({
      type: "function",
      name: r,
      description: n.description,
      parameters: Ys(n.parameters)
    })),
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
function eo({
  operationName: e,
  model: t,
  settings: r,
  telemetry: n,
  headers: a
}) {
  var s;
  return {
    "ai.model.provider": t.provider,
    "ai.model.id": t.modelId,
    // settings:
    ...Object.entries(r).reduce((o, [i, l]) => (o[`ai.settings.${i}`] = l, o), {}),
    // special telemetry information
    "operation.name": e,
    "resource.name": n == null ? void 0 : n.functionId,
    "ai.telemetry.functionId": n == null ? void 0 : n.functionId,
    // add metadata as attributes:
    ...Object.entries((s = n == null ? void 0 : n.metadata) != null ? s : {}).reduce(
      (o, [i, l]) => (o[`ai.telemetry.metadata.${i}`] = l, o),
      {}
    ),
    // request headers
    ...Object.entries(a ?? {}).reduce((o, [i, l]) => (l !== void 0 && (o[`ai.request.headers.${i}`] = l), o), {})
  };
}
var to = {
  startSpan() {
    return dt;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(dt);
    if (typeof r == "function")
      return r(dt);
    if (typeof n == "function")
      return n(dt);
  }
}, dt = {
  spanContext() {
    return ro;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return !1;
  },
  recordException() {
    return this;
  }
}, ro = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function no({ isEnabled: e }) {
  return e ? Ds.getTracer("ai") : to;
}
function qt({
  name: e,
  tracer: t,
  attributes: r,
  fn: n,
  endWhenDone: a = !0
}) {
  return t.startActiveSpan(e, { attributes: r }, async (s) => {
    try {
      const o = await n(s);
      return a && s.end(), o;
    } catch (o) {
      try {
        o instanceof Error ? (s.recordException({
          name: o.name,
          message: o.message,
          stack: o.stack
        }), s.setStatus({
          code: Et.ERROR,
          message: o.message
        })) : s.setStatus({ code: Et.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function ao({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName;
  if (t == null)
    throw new ht({ toolName: e.toolName });
  const n = t[r];
  if (n == null)
    throw new ht({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = Wt({
    text: e.args,
    schema: n.parameters
  });
  if (a.success === !1)
    throw new Yr({
      toolName: r,
      toolArgs: e.args,
      cause: a.error
    });
  return {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: r,
    args: a.value
  };
}
function so({
  tools: e,
  generatorStream: t,
  tracer: r
}) {
  let n = !1;
  const a = /* @__PURE__ */ new Set();
  let s = null;
  const o = new ReadableStream({
    start(l) {
      s = l;
    }
  }), i = new TransformStream({
    transform(l, u) {
      const d = l.type;
      switch (d) {
        case "text-delta":
        case "error": {
          u.enqueue(l);
          break;
        }
        case "tool-call": {
          const p = l.toolName;
          if (e == null) {
            s.enqueue({
              type: "error",
              error: new ht({ toolName: l.toolName })
            });
            break;
          }
          const g = e[p];
          if (g == null) {
            s.enqueue({
              type: "error",
              error: new ht({
                toolName: l.toolName,
                availableTools: Object.keys(e)
              })
            });
            break;
          }
          try {
            const m = ao({
              toolCall: l,
              tools: e
            });
            if (u.enqueue(m), g.execute != null) {
              const b = Ne();
              a.add(b), qt({
                name: "ai.toolCall",
                attributes: {
                  "ai.toolCall.name": m.toolName,
                  "ai.toolCall.id": m.toolCallId,
                  "ai.toolCall.args": JSON.stringify(m.args)
                },
                tracer: r,
                fn: async (I) => g.execute(m.args).then(
                  (N) => {
                    s.enqueue({
                      ...m,
                      type: "tool-result",
                      result: N
                    }), a.delete(b), n && a.size === 0 && s.close();
                    try {
                      I.setAttributes({
                        "ai.toolCall.result": JSON.stringify(N)
                      });
                    } catch {
                    }
                  },
                  (N) => {
                    s.enqueue({
                      type: "error",
                      error: N
                    }), a.delete(b), n && a.size === 0 && s.close();
                  }
                )
              });
            }
          } catch (m) {
            s.enqueue({
              type: "error",
              error: m
            });
          }
          break;
        }
        case "finish": {
          u.enqueue({
            type: "finish",
            finishReason: l.finishReason,
            logprobs: l.logprobs,
            usage: Ks(l.usage)
          });
          break;
        }
        case "tool-call-delta":
          break;
        default: {
          const p = d;
          throw new Error(`Unhandled chunk type: ${p}`);
        }
      }
    },
    flush() {
      n = !0, a.size === 0 && s.close();
    }
  });
  return new ReadableStream({
    async start(l) {
      return Promise.all([
        t.pipeThrough(i).pipeTo(
          new WritableStream({
            write(u) {
              l.enqueue(u);
            },
            close() {
            }
          })
        ),
        o.pipeTo(
          new WritableStream({
            write(u) {
              l.enqueue(u);
            },
            close() {
              l.close();
            }
          })
        )
      ]);
    }
  });
}
async function oo({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: s,
  maxRetries: o,
  abortSignal: i,
  headers: l,
  experimental_telemetry: u,
  onFinish: d,
  ...p
}) {
  var g;
  const m = eo({
    operationName: "ai.streamText",
    model: e,
    telemetry: u,
    headers: l,
    settings: { ...p, maxRetries: o }
  }), b = no({ isEnabled: (g = u == null ? void 0 : u.isEnabled) != null ? g : !1 });
  return qt({
    name: "ai.streamText",
    attributes: {
      ...m,
      // specific settings that only make sense on the outer level:
      "ai.prompt": JSON.stringify({ system: n, prompt: a, messages: s })
    },
    tracer: b,
    endWhenDone: !1,
    fn: async (I) => {
      const N = qs({ maxRetries: o }), P = Ws({ system: n, prompt: a, messages: s }), T = Hs(P), {
        result: { stream: U, warnings: j, rawResponse: M },
        doStreamSpan: le
      } = await N(
        () => qt({
          name: "ai.streamText.doStream",
          attributes: {
            ...m,
            "ai.prompt.format": P.type,
            "ai.prompt.messages": JSON.stringify(T)
          },
          tracer: b,
          endWhenDone: !1,
          fn: async (it) => ({
            result: await e.doStream({
              mode: {
                type: "regular",
                ...Qs({ tools: t, toolChoice: r })
              },
              ...Gs(p),
              inputFormat: P.type,
              prompt: T,
              abortSignal: i,
              headers: l
            }),
            doStreamSpan: it
          })
        })
      );
      return new io({
        stream: so({
          tools: t,
          generatorStream: U,
          tracer: b
        }),
        warnings: j,
        rawResponse: M,
        onFinish: d,
        rootSpan: I,
        doStreamSpan: le
      });
    }
  });
}
var io = class {
  constructor({
    stream: e,
    warnings: t,
    rawResponse: r,
    onFinish: n,
    rootSpan: a,
    doStreamSpan: s
  }) {
    this.warnings = t, this.rawResponse = r, this.onFinish = n;
    let o;
    this.usage = new Promise((T) => {
      o = T;
    });
    let i;
    this.finishReason = new Promise((T) => {
      i = T;
    });
    let l;
    this.text = new Promise((T) => {
      l = T;
    });
    let u;
    this.toolCalls = new Promise((T) => {
      u = T;
    });
    let d;
    this.toolResults = new Promise((T) => {
      d = T;
    });
    let p, g, m = "";
    const b = [], I = [];
    let N = !0;
    const P = this;
    this.originalStream = e.pipeThrough(
      new TransformStream({
        async transform(T, U) {
          U.enqueue(T), N && (N = !1, s.addEvent("ai.stream.firstChunk"));
          const j = T.type;
          switch (j) {
            case "text-delta":
              m += T.textDelta;
              break;
            case "tool-call":
              b.push(T);
              break;
            case "tool-result":
              I.push(T);
              break;
            case "finish":
              g = T.usage, p = T.finishReason, o(g), i(p), l(m), u(b);
              break;
            case "error":
              break;
            default: {
              const M = j;
              throw new Error(`Unknown chunk type: ${M}`);
            }
          }
        },
        // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
        async flush(T) {
          var U;
          try {
            const j = g ?? {
              promptTokens: NaN,
              completionTokens: NaN,
              totalTokens: NaN
            }, M = p ?? "unknown", le = b.length > 0 ? JSON.stringify(b) : void 0;
            s.setAttributes({
              "ai.finishReason": M,
              "ai.usage.promptTokens": j.promptTokens,
              "ai.usage.completionTokens": j.completionTokens,
              "ai.result.text": m,
              "ai.result.toolCalls": le
            }), s.end(), a.setAttributes({
              "ai.finishReason": M,
              "ai.usage.promptTokens": j.promptTokens,
              "ai.usage.completionTokens": j.completionTokens,
              "ai.result.text": m,
              "ai.result.toolCalls": le
            }), d(I), await ((U = P.onFinish) == null ? void 0 : U.call(P, {
              finishReason: M,
              usage: j,
              text: m,
              toolCalls: b,
              // The tool results are inferred as a never[] type, because they are
              // optional and the execute method with an inferred result type is
              // optional as well. Therefore we need to cast the toolResults to any.
              // The type exposed to the users will be correctly inferred.
              toolResults: I,
              rawResponse: r,
              warnings: t
            }));
          } catch (j) {
            T.error(j);
          } finally {
            a.end();
          }
        }
      })
    );
  }
  /**
  Split out a new stream from the original stream.
  The original stream is replaced to allow for further splitting,
  since we do not know how many times the stream will be split.
  
  Note: this leads to buffering the stream content on the server.
  However, the LLM results are expected to be small enough to not cause issues.
     */
  teeStream() {
    const [e, t] = this.originalStream.tee();
    return this.originalStream = t, e;
  }
  /**
  A text stream that returns only the generated text deltas. You can use it
  as either an AsyncIterable or a ReadableStream. When an error occurs, the
  stream will throw the error.
     */
  get textStream() {
    return hr(this.teeStream(), {
      transform(e, t) {
        e.type === "text-delta" ? e.textDelta.length > 0 && t.enqueue(e.textDelta) : e.type === "error" && t.error(e.error);
      }
    });
  }
  /**
  A stream with all events, including text deltas, tool calls, tool results, and
  errors.
  You can use it as either an AsyncIterable or a ReadableStream. When an error occurs, the
  stream will throw the error.
     */
  get fullStream() {
    return hr(this.teeStream(), {
      transform(e, t) {
        e.type === "text-delta" ? e.textDelta.length > 0 && t.enqueue(e) : t.enqueue(e);
      }
    });
  }
  /**
  Converts the result to an `AIStream` object that is compatible with `StreamingTextResponse`.
  It can be used with the `useChat` and `useCompletion` hooks.
  
  @param callbacks 
  Stream callbacks that will be called when the stream emits events.
  
  @returns an `AIStream` object.
     */
  toAIStream(e = {}) {
    let t = "";
    const r = new TransformStream({
      async start() {
        e.onStart && await e.onStart();
      },
      async transform(a, s) {
        if (s.enqueue(a), a.type === "text-delta") {
          const o = a.textDelta;
          t += o, e.onToken && await e.onToken(o), e.onText && await e.onText(o);
        }
      },
      async flush() {
        e.onCompletion && await e.onCompletion(t), e.onFinal && await e.onFinal(t);
      }
    }), n = new TransformStream({
      transform: async (a, s) => {
        switch (a.type) {
          case "text-delta":
            s.enqueue(Ee("text", a.textDelta));
            break;
          case "tool-call":
            s.enqueue(
              Ee("tool_call", {
                toolCallId: a.toolCallId,
                toolName: a.toolName,
                args: a.args
              })
            );
            break;
          case "tool-result":
            s.enqueue(
              Ee("tool_result", {
                toolCallId: a.toolCallId,
                toolName: a.toolName,
                args: a.args,
                result: a.result
              })
            );
            break;
          case "error":
            s.enqueue(
              Ee("error", JSON.stringify(a.error))
            );
            break;
        }
      }
    });
    return this.fullStream.pipeThrough(r).pipeThrough(n).pipeThrough(new TextEncoderStream());
  }
  /**
  Writes stream data output to a Node.js response-like object.
  It sets a `Content-Type` header to `text/plain; charset=utf-8` and 
  writes each stream data part as a separate chunk.
  
  @param response A Node.js response-like object (ServerResponse).
  @param init Optional headers and status code.
     */
  pipeAIStreamToResponse(e, t) {
    var r;
    e.writeHead((r = t == null ? void 0 : t.status) != null ? r : 200, {
      "Content-Type": "text/plain; charset=utf-8",
      ...t == null ? void 0 : t.headers
    });
    const n = this.toAIStream().getReader();
    (async () => {
      try {
        for (; ; ) {
          const { done: s, value: o } = await n.read();
          if (s)
            break;
          e.write(o);
        }
      } catch (s) {
        throw s;
      } finally {
        e.end();
      }
    })();
  }
  /**
  Writes text delta output to a Node.js response-like object.
  It sets a `Content-Type` header to `text/plain; charset=utf-8` and 
  writes each text delta as a separate chunk.
  
  @param response A Node.js response-like object (ServerResponse).
  @param init Optional headers and status code.
     */
  pipeTextStreamToResponse(e, t) {
    var r;
    e.writeHead((r = t == null ? void 0 : t.status) != null ? r : 200, {
      "Content-Type": "text/plain; charset=utf-8",
      ...t == null ? void 0 : t.headers
    });
    const n = this.textStream.pipeThrough(new TextEncoderStream()).getReader();
    (async () => {
      try {
        for (; ; ) {
          const { done: s, value: o } = await n.read();
          if (s)
            break;
          e.write(o);
        }
      } catch (s) {
        throw s;
      } finally {
        e.end();
      }
    })();
  }
  /**
  Converts the result to a streamed response object with a stream data part stream.
  It can be used with the `useChat` and `useCompletion` hooks.
  
  @param init Optional headers.
  
  @return A response object.
     */
  toAIStreamResponse(e) {
    return new ho(this.toAIStream(), e);
  }
  /**
  Creates a simple text stream response.
  Each text delta is encoded as UTF-8 and sent as a separate chunk.
  Non-text-delta events are ignored.
  
  @param init Optional headers and status code.
     */
  toTextStreamResponse(e) {
    var t;
    return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: Gr(e, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, Jo = oo;
function lo(e) {
  const t = new TextEncoder();
  let r = "";
  const n = e || {};
  return new TransformStream({
    async start() {
      n.onStart && await n.onStart();
    },
    async transform(a, s) {
      const o = typeof a == "string" ? a : a.content;
      s.enqueue(t.encode(o)), r += o, n.onToken && await n.onToken(o), n.onText && typeof a == "string" && await n.onText(a);
    },
    async flush() {
      const a = co(n);
      n.onCompletion && await n.onCompletion(r), n.onFinal && !a && await n.onFinal(r);
    }
  });
}
function co(e) {
  return "experimental_onFunctionCall" in e;
}
function uo() {
  const e = new TextEncoder(), t = new TextDecoder();
  return new TransformStream({
    transform: async (r, n) => {
      const a = t.decode(r);
      n.enqueue(e.encode(Ee("text", a)));
    }
  });
}
new TextDecoder("utf-8");
var po = {};
Us(po, {
  toAIStream: () => fo
});
function fo(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        if (typeof r == "string")
          n.enqueue(r);
        else if (typeof r.content == "string")
          n.enqueue(r.content);
        else {
          const a = r.content;
          for (const s of a)
            s.type === "text" && n.enqueue(s.text);
        }
      }
    })
  ).pipeThrough(lo(t)).pipeThrough(uo());
}
function mo(e, t) {
  const r = e.getReader(), n = t.getReader();
  let a, s, o = !1, i = !1;
  async function l(d) {
    try {
      a == null && (a = r.read());
      const p = await a;
      a = void 0, p.done ? d.close() : d.enqueue(p.value);
    } catch (p) {
      d.error(p);
    }
  }
  async function u(d) {
    try {
      s == null && (s = n.read());
      const p = await s;
      s = void 0, p.done ? d.close() : d.enqueue(p.value);
    } catch (p) {
      d.error(p);
    }
  }
  return new ReadableStream({
    async pull(d) {
      try {
        if (o) {
          u(d);
          return;
        }
        if (i) {
          l(d);
          return;
        }
        a == null && (a = r.read()), s == null && (s = n.read());
        const { result: p, reader: g } = await Promise.race([
          a.then((m) => ({ result: m, reader: r })),
          s.then((m) => ({ result: m, reader: n }))
        ]);
        p.done || d.enqueue(p.value), g === r ? (a = void 0, p.done && (u(d), o = !0)) : (s = void 0, p.done && (i = !0, l(d)));
      } catch (p) {
        d.error(p);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
var ho = class extends Response {
  constructor(e, t, r) {
    let n = e;
    r && (n = mo(r.stream, e)), super(n, {
      ...t,
      status: 200,
      headers: Gr(t, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, go = c.object({
  type: c.literal("error"),
  error: c.object({
    type: c.string(),
    message: c.string()
  })
}), gr = Gt({
  errorSchema: go,
  errorToMessage: (e) => e.error.message
});
async function yo({
  prompt: e,
  downloadImplementation: t = on
}) {
  const r = vo(e);
  let n;
  const a = [];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = o.type;
    switch (i) {
      case "system": {
        if (n != null)
          throw new O({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        n = o.messages.map(({ content: l }) => l).join(`
`);
        break;
      }
      case "user": {
        const l = [];
        for (const { role: u, content: d } of o.messages)
          switch (u) {
            case "user": {
              for (const p of d)
                switch (p.type) {
                  case "text": {
                    l.push({ type: "text", text: p.text });
                    break;
                  }
                  case "image": {
                    let g, m;
                    if (p.image instanceof URL) {
                      const b = await t({
                        url: p.image
                      });
                      g = b.data, m = b.mimeType;
                    } else
                      g = p.image, m = p.mimeType;
                    l.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: m ?? "image/jpeg",
                        data: Sr(g)
                      }
                    });
                    break;
                  }
                }
              break;
            }
            case "tool": {
              for (const p of d)
                l.push({
                  type: "tool_result",
                  tool_use_id: p.toolCallId,
                  content: JSON.stringify(p.result),
                  is_error: p.isError
                });
              break;
            }
            default: {
              const p = u;
              throw new Error(`Unsupported role: ${p}`);
            }
          }
        a.push({ role: "user", content: l });
        break;
      }
      case "assistant": {
        if (o.messages.length > 1)
          throw new O({
            functionality: "Multiple assistant messages in block"
          });
        const { content: l } = o.messages[0];
        a.push({
          role: "assistant",
          content: l.map((u, d) => {
            switch (u.type) {
              case "text":
                return s === r.length - 1 && d === o.messages.length - 1 ? { type: "text", text: u.text.trim() } : { type: "text", text: u.text };
              case "tool-call":
                return {
                  type: "tool_use",
                  id: u.toolCallId,
                  name: u.toolName,
                  input: u.args
                };
            }
          })
        });
        break;
      }
      default: {
        const l = i;
        throw new Error(`Unsupported type: ${l}`);
      }
    }
  }
  return {
    system: n,
    messages: a
  };
}
function vo(e) {
  const t = [];
  let r;
  for (const { role: n, content: a } of e)
    switch (n) {
      case "system": {
        (r == null ? void 0 : r.type) !== "system" && (r = { type: "system", messages: [] }, t.push(r)), r.messages.push({ role: n, content: a });
        break;
      }
      case "assistant": {
        (r == null ? void 0 : r.type) !== "assistant" && (r = { type: "assistant", messages: [] }, t.push(r)), r.messages.push({ role: n, content: a });
        break;
      }
      case "user": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push({ role: n, content: a });
        break;
      }
      case "tool": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push({ role: n, content: a });
        break;
      }
      default: {
        const s = n;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  return t;
}
function yr(e) {
  switch (e) {
    case "end_turn":
    case "stop_sequence":
      return "stop";
    case "tool_use":
      return "tool-calls";
    case "max_tokens":
      return "length";
    default:
      return "other";
  }
}
var _o = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "tool", this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    mode: e,
    prompt: t,
    maxTokens: r,
    temperature: n,
    topP: a,
    frequencyPenalty: s,
    presencePenalty: o,
    seed: i
  }) {
    const l = e.type, u = [];
    s != null && u.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), o != null && u.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), i != null && u.push({
      type: "unsupported-setting",
      setting: "seed"
    });
    const d = await yo({ prompt: t }), p = {
      // model id:
      model: this.modelId,
      // model specific settings:
      top_k: this.settings.topK,
      // standardized settings:
      max_tokens: r ?? 4096,
      // 4096: max model output tokens
      temperature: n,
      top_p: a,
      // prompt:
      system: d.system,
      messages: d.messages
    };
    switch (l) {
      case "regular":
        return {
          args: { ...p, ...xo(e) },
          warnings: u
        };
      case "object-json":
        throw new O({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: g, description: m, parameters: b } = e.tool;
        return {
          args: {
            ...p,
            tools: [{ name: g, description: m, input_schema: b }],
            tool_choice: { type: "tool", name: g }
          },
          warnings: u
        };
      }
      case "object-grammar":
        throw new O({
          functionality: "grammar-mode object generation"
        });
      default: {
        const g = l;
        throw new Error(`Unsupported type: ${g}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { responseHeaders: n, value: a } = await F({
      url: `${this.config.baseURL}/messages`,
      headers: H(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: gr,
      successfulResponseHandler: xe(
        bo
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...o } = t;
    let i = "";
    for (const u of a.content)
      u.type === "text" && (i += u.text);
    let l;
    if (a.content.some((u) => u.type === "tool_use")) {
      l = [];
      for (const u of a.content)
        u.type === "tool_use" && l.push({
          toolCallType: "function",
          toolCallId: u.id,
          toolName: u.name,
          args: JSON.stringify(u.input)
        });
    }
    return {
      text: i,
      toolCalls: l,
      finishReason: yr(a.stop_reason),
      usage: {
        promptTokens: a.usage.input_tokens,
        completionTokens: a.usage.output_tokens
      },
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { responseHeaders: n, value: a } = await F({
      url: `${this.config.baseURL}/messages`,
      headers: H(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: gr,
      successfulResponseHandler: It(
        wo
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...o } = t;
    let i = "other";
    const l = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, u = {};
    return {
      stream: a.pipeThrough(
        new TransformStream({
          transform(d, p) {
            if (!d.success) {
              p.enqueue({ type: "error", error: d.error });
              return;
            }
            const g = d.value;
            switch (g.type) {
              case "ping":
                return;
              case "content_block_start": {
                const m = g.content_block.type;
                switch (m) {
                  case "text":
                    return;
                  case "tool_use": {
                    u[g.index] = {
                      toolCallId: g.content_block.id,
                      toolName: g.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const b = m;
                    throw new Error(
                      `Unsupported content block type: ${b}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (u[g.index] != null) {
                  const m = u[g.index];
                  p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: m.toolCallId,
                    toolName: m.toolName,
                    args: m.jsonText
                  }), delete u[g.index];
                }
                return;
              }
              case "content_block_delta": {
                const m = g.delta.type;
                switch (m) {
                  case "text_delta": {
                    p.enqueue({
                      type: "text-delta",
                      textDelta: g.delta.text
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const b = u[g.index];
                    p.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: b.toolCallId,
                      toolName: b.toolName,
                      argsTextDelta: g.delta.partial_json
                    }), b.jsonText += g.delta.partial_json;
                    return;
                  }
                  default: {
                    const b = m;
                    throw new Error(
                      `Unsupported delta type: ${b}`
                    );
                  }
                }
              }
              case "message_start": {
                l.promptTokens = g.message.usage.input_tokens, l.completionTokens = g.message.usage.output_tokens;
                return;
              }
              case "message_delta": {
                l.completionTokens = g.usage.output_tokens, i = yr(g.delta.stop_reason);
                return;
              }
              case "message_stop": {
                p.enqueue({ type: "finish", finishReason: i, usage: l });
                return;
              }
              default: {
                const m = g;
                throw new Error(`Unsupported chunk type: ${m}`);
              }
            }
          }
        })
      ),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, bo = c.object({
  type: c.literal("message"),
  content: c.array(
    c.discriminatedUnion("type", [
      c.object({
        type: c.literal("text"),
        text: c.string()
      }),
      c.object({
        type: c.literal("tool_use"),
        id: c.string(),
        name: c.string(),
        input: c.unknown()
      })
    ])
  ),
  stop_reason: c.string().optional().nullable(),
  usage: c.object({
    input_tokens: c.number(),
    output_tokens: c.number()
  })
}), wo = c.discriminatedUnion("type", [
  c.object({
    type: c.literal("message_start"),
    message: c.object({
      usage: c.object({
        input_tokens: c.number(),
        output_tokens: c.number()
      })
    })
  }),
  c.object({
    type: c.literal("content_block_start"),
    index: c.number(),
    content_block: c.discriminatedUnion("type", [
      c.object({
        type: c.literal("text"),
        text: c.string()
      }),
      c.object({
        type: c.literal("tool_use"),
        id: c.string(),
        name: c.string()
      })
    ])
  }),
  c.object({
    type: c.literal("content_block_delta"),
    index: c.number(),
    delta: c.discriminatedUnion("type", [
      c.object({
        type: c.literal("input_json_delta"),
        partial_json: c.string()
      }),
      c.object({
        type: c.literal("text_delta"),
        text: c.string()
      })
    ])
  }),
  c.object({
    type: c.literal("content_block_stop"),
    index: c.number()
  }),
  c.object({
    type: c.literal("message_delta"),
    delta: c.object({ stop_reason: c.string().optional().nullable() }),
    usage: c.object({ output_tokens: c.number() })
  }),
  c.object({
    type: c.literal("message_stop")
  }),
  c.object({
    type: c.literal("ping")
  })
]);
function xo(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0;
  if (r == null)
    return { tools: void 0, tool_choice: void 0 };
  const n = r.map((o) => ({
    name: o.name,
    description: o.description,
    input_schema: o.parameters
  })), a = e.toolChoice;
  if (a == null)
    return { tools: n, tool_choice: void 0 };
  const s = a.type;
  switch (s) {
    case "auto":
      return { tools: n, tool_choice: { type: "auto" } };
    case "required":
      return { tools: n, tool_choice: { type: "any" } };
    case "none":
      return { tools: void 0, tool_choice: void 0 };
    case "tool":
      return {
        tools: n,
        tool_choice: { type: "tool", name: a.toolName }
      };
    default: {
      const o = s;
      throw new Error(`Unsupported tool choice type: ${o}`);
    }
  }
}
function ko(e = {}) {
  var t, r;
  const n = (r = Kt((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.anthropic.com/v1", a = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": Ft({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), s = (i, l = {}) => new _o(i, l, {
    provider: "anthropic.messages",
    baseURL: n,
    headers: a,
    fetch: e.fetch
  }), o = function(i, l) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return s(i, l);
  };
  return o.languageModel = s, o.chat = s, o.messages = s, o;
}
ko();
function To(e) {
  const t = [];
  for (const { role: r, content: n } of e)
    switch (r) {
      case "system": {
        t.push({ role: "system", content: n });
        break;
      }
      case "user": {
        t.push({
          role: "user",
          content: n.map((a) => {
            switch (a.type) {
              case "text":
                return a.text;
              case "image":
                throw new O({
                  functionality: "image-part"
                });
            }
          }).join("")
        });
        break;
      }
      case "assistant": {
        let a = "";
        const s = [];
        for (const o of n)
          switch (o.type) {
            case "text": {
              a += o.text;
              break;
            }
            case "tool-call": {
              s.push({
                id: o.toolCallId,
                type: "function",
                function: {
                  name: o.toolName,
                  arguments: JSON.stringify(o.args)
                }
              });
              break;
            }
            default: {
              const i = o;
              throw new Error(`Unsupported part: ${i}`);
            }
          }
        t.push({
          role: "assistant",
          content: a,
          tool_calls: s.length > 0 ? s.map(({ function: { name: o, arguments: i } }) => ({
            id: "null",
            type: "function",
            function: { name: o, arguments: i }
          })) : void 0
        });
        break;
      }
      case "tool": {
        for (const a of n)
          t.push({
            role: "tool",
            name: a.toolName,
            content: JSON.stringify(a.result)
          });
        break;
      }
      default: {
        const a = r;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  return t;
}
function vr(e) {
  switch (e) {
    case "stop":
      return "stop";
    case "length":
    case "model_length":
      return "length";
    case "tool_calls":
      return "tool-calls";
    default:
      return "other";
  }
}
var Eo = c.object({
  object: c.literal("error"),
  message: c.string(),
  type: c.string(),
  param: c.string().nullable(),
  code: c.string().nullable()
}), Bt = Gt({
  errorSchema: Eo,
  errorToMessage: (e) => e.message
}), So = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    mode: e,
    prompt: t,
    maxTokens: r,
    temperature: n,
    topP: a,
    frequencyPenalty: s,
    presencePenalty: o,
    seed: i
  }) {
    const l = e.type, u = [];
    s != null && u.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), o != null && u.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    });
    const d = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: this.settings.safePrompt,
      // standardized settings:
      max_tokens: r,
      temperature: n,
      top_p: a,
      random_seed: i,
      // messages:
      messages: To(t)
    };
    switch (l) {
      case "regular":
        return {
          args: { ...d, ...No(e) },
          warnings: u
        };
      case "object-json":
        return {
          args: {
            ...d,
            response_format: { type: "json_object" }
          },
          warnings: u
        };
      case "object-tool":
        return {
          args: {
            ...d,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: u
        };
      case "object-grammar":
        throw new O({
          functionality: "object-grammar mode"
        });
      default: {
        const p = l;
        throw new Error(`Unsupported type: ${p}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const { args: n, warnings: a } = this.getArgs(e), { responseHeaders: s, value: o } = await F({
      url: `${this.config.baseURL}/chat/completions`,
      headers: H(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Bt,
      successfulResponseHandler: xe(
        Co
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...l } = n, u = o.choices[0];
    return {
      text: (t = u.message.content) != null ? t : void 0,
      toolCalls: (r = u.message.tool_calls) == null ? void 0 : r.map((d) => ({
        toolCallType: "function",
        toolCallId: this.config.generateId(),
        toolName: d.function.name,
        args: d.function.arguments
      })),
      finishReason: vr(u.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: l },
      rawResponse: { headers: s },
      warnings: a
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await F({
      url: `${this.config.baseURL}/chat/completions`,
      headers: H(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: Bt,
      successfulResponseHandler: It(
        Io
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...o } = t;
    let i = "other", l = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    };
    const u = this.config.generateId;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          transform(d, p) {
            if (!d.success) {
              p.enqueue({ type: "error", error: d.error });
              return;
            }
            const g = d.value;
            g.usage != null && (l = {
              promptTokens: g.usage.prompt_tokens,
              completionTokens: g.usage.completion_tokens
            });
            const m = g.choices[0];
            if ((m == null ? void 0 : m.finish_reason) != null && (i = vr(m.finish_reason)), (m == null ? void 0 : m.delta) == null)
              return;
            const b = m.delta;
            if (b.content != null && p.enqueue({
              type: "text-delta",
              textDelta: b.content
            }), b.tool_calls != null)
              for (const I of b.tool_calls) {
                const N = u();
                p.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: N,
                  toolName: I.function.name,
                  argsTextDelta: I.function.arguments
                }), p.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: N,
                  toolName: I.function.name,
                  args: I.function.arguments
                });
              }
          },
          flush(d) {
            d.enqueue({ type: "finish", finishReason: i, usage: l });
          }
        })
      ),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, Co = c.object({
  choices: c.array(
    c.object({
      message: c.object({
        role: c.literal("assistant"),
        content: c.string().nullable(),
        tool_calls: c.array(
          c.object({
            function: c.object({
              name: c.string(),
              arguments: c.string()
            })
          })
        ).optional().nullable()
      }),
      index: c.number(),
      finish_reason: c.string().optional().nullable()
    })
  ),
  object: c.literal("chat.completion"),
  usage: c.object({
    prompt_tokens: c.number(),
    completion_tokens: c.number()
  })
}), Io = c.object({
  object: c.literal("chat.completion.chunk"),
  choices: c.array(
    c.object({
      delta: c.object({
        role: c.enum(["assistant"]).optional(),
        content: c.string().nullable().optional(),
        tool_calls: c.array(
          c.object({
            function: c.object({ name: c.string(), arguments: c.string() })
          })
        ).optional().nullable()
      }),
      finish_reason: c.string().nullable().optional(),
      index: c.number()
    })
  ),
  usage: c.object({
    prompt_tokens: c.number(),
    completion_tokens: c.number()
  }).optional().nullable()
});
function No(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0;
  if (r == null)
    return { tools: void 0, tool_choice: void 0 };
  const n = r.map((o) => ({
    type: "function",
    function: {
      name: o.name,
      description: o.description,
      parameters: o.parameters
    }
  })), a = e.toolChoice;
  if (a == null)
    return { tools: n, tool_choice: void 0 };
  const s = a.type;
  switch (s) {
    case "auto":
    case "none":
      return { tools: n, tool_choice: s };
    case "required":
      return { tools: n, tool_choice: "any" };
    case "tool":
      return {
        tools: n.filter(
          (o) => o.function.name === a.toolName
        ),
        tool_choice: "any"
      };
    default: {
      const o = s;
      throw new Error(`Unsupported tool choice type: ${o}`);
    }
  }
}
var Ao = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  get maxEmbeddingsPerCall() {
    var e;
    return (e = this.settings.maxEmbeddingsPerCall) != null ? e : 32;
  }
  get supportsParallelCalls() {
    var e;
    return (e = this.settings.supportsParallelCalls) != null ? e : !1;
  }
  async doEmbed({
    values: e,
    abortSignal: t,
    headers: r
  }) {
    if (e.length > this.maxEmbeddingsPerCall)
      throw new wr({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await F({
      url: `${this.config.baseURL}/embeddings`,
      headers: H(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Bt,
      successfulResponseHandler: xe(
        jo
      ),
      abortSignal: t,
      fetch: this.config.fetch
    });
    return {
      embeddings: a.data.map((s) => s.embedding),
      usage: a.usage ? { tokens: a.usage.prompt_tokens } : void 0,
      rawResponse: { headers: n }
    };
  }
}, jo = c.object({
  data: c.array(c.object({ embedding: c.array(c.number()) })),
  usage: c.object({ prompt_tokens: c.number() }).nullish()
});
function Po(e = {}) {
  var t, r;
  const n = (r = Kt((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.mistral.ai/v1", a = () => ({
    Authorization: `Bearer ${Ft({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), s = (l, u = {}) => {
    var d;
    return new So(l, u, {
      provider: "mistral.chat",
      baseURL: n,
      headers: a,
      generateId: (d = e.generateId) != null ? d : Ne,
      fetch: e.fetch
    });
  }, o = (l, u = {}) => new Ao(l, u, {
    provider: "mistral.embedding",
    baseURL: n,
    headers: a,
    fetch: e.fetch
  }), i = function(l, u) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return s(l, u);
  };
  return i.languageModel = s, i.chat = s, i.embedding = o, i.textEmbedding = o, i;
}
Po();
function Ro(e) {
  const t = [];
  for (const { role: r, content: n } of e)
    switch (r) {
      case "system": {
        t.push({ role: "system", content: n });
        break;
      }
      case "user": {
        if (n.length === 1 && n[0].type === "text") {
          t.push({ role: "user", content: n[0].text });
          break;
        }
        t.push({
          role: "user",
          content: n.map((a) => {
            var s;
            switch (a.type) {
              case "text":
                return { type: "text", text: a.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: {
                    url: a.image instanceof URL ? a.image.toString() : `data:${(s = a.mimeType) != null ? s : "image/jpeg"};base64,${Sr(a.image)}`
                  }
                };
            }
          })
        });
        break;
      }
      case "assistant": {
        let a = "";
        const s = [];
        for (const o of n)
          switch (o.type) {
            case "text": {
              a += o.text;
              break;
            }
            case "tool-call": {
              s.push({
                id: o.toolCallId,
                type: "function",
                function: {
                  name: o.toolName,
                  arguments: JSON.stringify(o.args)
                }
              });
              break;
            }
            default: {
              const i = o;
              throw new Error(`Unsupported part: ${i}`);
            }
          }
        t.push({
          role: "assistant",
          content: a,
          tool_calls: s.length > 0 ? s : void 0
        });
        break;
      }
      case "tool": {
        for (const a of n)
          t.push({
            role: "tool",
            tool_call_id: a.toolCallId,
            content: JSON.stringify(a.result)
          });
        break;
      }
      default: {
        const a = r;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  return t;
}
function _r(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.content) == null ? void 0 : t.map(({ token: n, logprob: a, top_logprobs: s }) => ({
    token: n,
    logprob: a,
    topLogprobs: s ? s.map(({ token: o, logprob: i }) => ({
      token: o,
      logprob: i
    })) : []
  }))) != null ? r : void 0;
}
function St(e) {
  switch (e) {
    case "stop":
      return "stop";
    case "length":
      return "length";
    case "content_filter":
      return "content-filter";
    case "function_call":
    case "tool_calls":
      return "tool-calls";
    default:
      return "unknown";
  }
}
var nr = c.object({
  error: c.object({
    message: c.string(),
    type: c.string(),
    param: c.any().nullable(),
    code: c.string().nullable()
  })
}), st = Gt({
  errorSchema: nr,
  errorToMessage: (e) => e.error.message
}), Oo = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "tool", this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    mode: e,
    prompt: t,
    maxTokens: r,
    temperature: n,
    topP: a,
    frequencyPenalty: s,
    presencePenalty: o,
    seed: i
  }) {
    const l = e.type, u = {
      // model id:
      model: this.modelId,
      // model specific settings:
      logit_bias: this.settings.logitBias,
      logprobs: this.settings.logprobs === !0 || typeof this.settings.logprobs == "number" ? !0 : void 0,
      top_logprobs: typeof this.settings.logprobs == "number" ? this.settings.logprobs : typeof this.settings.logprobs == "boolean" && this.settings.logprobs ? 0 : void 0,
      user: this.settings.user,
      parallel_tool_calls: this.settings.parallelToolCalls,
      // standardized settings:
      max_tokens: r,
      temperature: n,
      top_p: a,
      frequency_penalty: s,
      presence_penalty: o,
      seed: i,
      // messages:
      messages: Ro(t)
    };
    switch (l) {
      case "regular":
        return { ...u, ...$o(e) };
      case "object-json":
        return {
          ...u,
          response_format: { type: "json_object" }
        };
      case "object-tool":
        return {
          ...u,
          tool_choice: { type: "function", function: { name: e.tool.name } },
          tools: [
            {
              type: "function",
              function: {
                name: e.tool.name,
                description: e.tool.description,
                parameters: e.tool.parameters
              }
            }
          ]
        };
      case "object-grammar":
        throw new O({
          functionality: "object-grammar mode"
        });
      default: {
        const d = l;
        throw new Error(`Unsupported type: ${d}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const n = this.getArgs(e), { responseHeaders: a, value: s } = await F({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: H(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: st,
      successfulResponseHandler: xe(
        Zo
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = n, l = s.choices[0];
    return {
      text: (t = l.message.content) != null ? t : void 0,
      toolCalls: (r = l.message.tool_calls) == null ? void 0 : r.map((u) => {
        var d;
        return {
          toolCallType: "function",
          toolCallId: (d = u.id) != null ? d : Ne(),
          toolName: u.function.name,
          args: u.function.arguments
        };
      }),
      finishReason: St(l.finish_reason),
      usage: {
        promptTokens: s.usage.prompt_tokens,
        completionTokens: s.usage.completion_tokens
      },
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: a },
      warnings: [],
      logprobs: _r(l.logprobs)
    };
  }
  async doStream(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await F({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: H(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: st,
      successfulResponseHandler: It(
        Mo
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: a, ...s } = t, o = [];
    let i = "other", l = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, u;
    return {
      stream: n.pipeThrough(
        new TransformStream({
          transform(d, p) {
            var g, m, b, I, N, P, T, U, j, M, le, it;
            if (!d.success) {
              i = "error", p.enqueue({ type: "error", error: d.error });
              return;
            }
            const me = d.value;
            if ("error" in me) {
              i = "error", p.enqueue({ type: "error", error: me.error });
              return;
            }
            me.usage != null && (l = {
              promptTokens: me.usage.prompt_tokens,
              completionTokens: me.usage.completion_tokens
            });
            const re = me.choices[0];
            if ((re == null ? void 0 : re.finish_reason) != null && (i = St(re.finish_reason)), (re == null ? void 0 : re.delta) == null)
              return;
            const lt = re.delta;
            lt.content != null && p.enqueue({
              type: "text-delta",
              textDelta: lt.content
            });
            const At = _r(
              re == null ? void 0 : re.logprobs
            );
            if (At != null && At.length && (u === void 0 && (u = []), u.push(...At)), lt.tool_calls != null)
              for (const $ of lt.tool_calls) {
                const ct = $.index;
                if (o[ct] == null) {
                  if ($.type !== "function")
                    throw new Pt({
                      data: $,
                      message: "Expected 'function' type."
                    });
                  if ($.id == null)
                    throw new Pt({
                      data: $,
                      message: "Expected 'id' to be a string."
                    });
                  if (((g = $.function) == null ? void 0 : g.name) == null)
                    throw new Pt({
                      data: $,
                      message: "Expected 'function.name' to be a string."
                    });
                  o[ct] = {
                    id: $.id,
                    type: "function",
                    function: {
                      name: $.function.name,
                      arguments: (m = $.function.arguments) != null ? m : ""
                    }
                  };
                  const Y = o[ct];
                  ((b = Y.function) == null ? void 0 : b.name) != null && ((I = Y.function) == null ? void 0 : I.arguments) != null && lr(Y.function.arguments) && (p.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: Y.id,
                    toolName: Y.function.name,
                    argsTextDelta: Y.function.arguments
                  }), p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (N = Y.id) != null ? N : Ne(),
                    toolName: Y.function.name,
                    args: Y.function.arguments
                  }));
                  continue;
                }
                const K = o[ct];
                ((P = $.function) == null ? void 0 : P.arguments) != null && (K.function.arguments += (U = (T = $.function) == null ? void 0 : T.arguments) != null ? U : ""), p.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: K.id,
                  toolName: K.function.name,
                  argsTextDelta: (j = $.function.arguments) != null ? j : ""
                }), ((M = K.function) == null ? void 0 : M.name) != null && ((le = K.function) == null ? void 0 : le.arguments) != null && lr(K.function.arguments) && p.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (it = K.id) != null ? it : Ne(),
                  toolName: K.function.name,
                  args: K.function.arguments
                });
              }
          },
          flush(d) {
            d.enqueue({
              type: "finish",
              finishReason: i,
              logprobs: u,
              usage: l
            });
          }
        })
      ),
      rawCall: { rawPrompt: a, rawSettings: s },
      rawResponse: { headers: r },
      warnings: []
    };
  }
}, Zo = c.object({
  choices: c.array(
    c.object({
      message: c.object({
        role: c.literal("assistant"),
        content: c.string().nullable().optional(),
        tool_calls: c.array(
          c.object({
            id: c.string().optional().nullable(),
            type: c.literal("function"),
            function: c.object({
              name: c.string(),
              arguments: c.string()
            })
          })
        ).optional()
      }),
      index: c.number(),
      logprobs: c.object({
        content: c.array(
          c.object({
            token: c.string(),
            logprob: c.number(),
            top_logprobs: c.array(
              c.object({
                token: c.string(),
                logprob: c.number()
              })
            )
          })
        ).nullable()
      }).nullable().optional(),
      finish_reason: c.string().optional().nullable()
    })
  ),
  usage: c.object({
    prompt_tokens: c.number(),
    completion_tokens: c.number()
  })
}), Mo = c.union([
  c.object({
    choices: c.array(
      c.object({
        delta: c.object({
          role: c.enum(["assistant"]).optional(),
          content: c.string().nullish(),
          tool_calls: c.array(
            c.object({
              index: c.number(),
              id: c.string().nullish(),
              type: c.literal("function").optional(),
              function: c.object({
                name: c.string().nullish(),
                arguments: c.string().nullish()
              })
            })
          ).nullish()
        }).nullish(),
        logprobs: c.object({
          content: c.array(
            c.object({
              token: c.string(),
              logprob: c.number(),
              top_logprobs: c.array(
                c.object({
                  token: c.string(),
                  logprob: c.number()
                })
              )
            })
          ).nullable()
        }).nullish(),
        finish_reason: c.string().nullable().optional(),
        index: c.number()
      })
    ),
    usage: c.object({
      prompt_tokens: c.number(),
      completion_tokens: c.number()
    }).nullish()
  }),
  nr
]);
function $o(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0;
  if (r == null)
    return { tools: void 0, tool_choice: void 0 };
  const n = r.map((o) => ({
    type: "function",
    function: {
      name: o.name,
      description: o.description,
      parameters: o.parameters
    }
  })), a = e.toolChoice;
  if (a == null)
    return { tools: n, tool_choice: void 0 };
  const s = a.type;
  switch (s) {
    case "auto":
    case "none":
    case "required":
      return { tools: n, tool_choice: s };
    case "tool":
      return {
        tools: n,
        tool_choice: {
          type: "function",
          function: {
            name: a.toolName
          }
        }
      };
    default: {
      const o = s;
      throw new Error(`Unsupported tool choice type: ${o}`);
    }
  }
}
function Do({
  prompt: e,
  inputFormat: t,
  user: r = "user",
  assistant: n = "assistant"
}) {
  if (t === "prompt" && e.length === 1 && e[0].role === "user" && e[0].content.length === 1 && e[0].content[0].type === "text")
    return { prompt: e[0].content[0].text };
  let a = "";
  e[0].role === "system" && (a += `${e[0].content}

`, e = e.slice(1));
  for (const { role: s, content: o } of e)
    switch (s) {
      case "system":
        throw new pt({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const i = o.map((l) => {
          switch (l.type) {
            case "text":
              return l.text;
            case "image":
              throw new O({
                functionality: "images"
              });
          }
        }).join("");
        a += `${r}:
${i}

`;
        break;
      }
      case "assistant": {
        const i = o.map((l) => {
          switch (l.type) {
            case "text":
              return l.text;
            case "tool-call":
              throw new O({
                functionality: "tool-call messages"
              });
          }
        }).join("");
        a += `${n}:
${i}

`;
        break;
      }
      case "tool":
        throw new O({
          functionality: "tool messages"
        });
      default: {
        const i = s;
        throw new Error(`Unsupported role: ${i}`);
      }
    }
  return a += `${n}:
`, {
    prompt: a,
    stopSequences: [`
${r}:`]
  };
}
function br(e) {
  return e == null ? void 0 : e.tokens.map((t, r) => ({
    token: t,
    logprob: e.token_logprobs[r],
    topLogprobs: e.top_logprobs ? Object.entries(e.top_logprobs[r]).map(
      ([n, a]) => ({
        token: n,
        logprob: a
      })
    ) : []
  }));
}
var Lo = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = void 0, this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    mode: e,
    inputFormat: t,
    prompt: r,
    maxTokens: n,
    temperature: a,
    topP: s,
    frequencyPenalty: o,
    presencePenalty: i,
    seed: l
  }) {
    var u;
    const d = e.type, { prompt: p, stopSequences: g } = Do({ prompt: r, inputFormat: t }), m = {
      // model id:
      model: this.modelId,
      // model specific settings:
      echo: this.settings.echo,
      logit_bias: this.settings.logitBias,
      logprobs: typeof this.settings.logprobs == "number" ? this.settings.logprobs : typeof this.settings.logprobs == "boolean" && this.settings.logprobs ? 0 : void 0,
      suffix: this.settings.suffix,
      user: this.settings.user,
      // standardized settings:
      max_tokens: n,
      temperature: a,
      top_p: s,
      frequency_penalty: o,
      presence_penalty: i,
      seed: l,
      // prompt:
      prompt: p,
      // stop sequences:
      stop: g
    };
    switch (d) {
      case "regular": {
        if ((u = e.tools) != null && u.length)
          throw new O({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new O({
            functionality: "toolChoice"
          });
        return m;
      }
      case "object-json":
        throw new O({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new O({
          functionality: "object-tool mode"
        });
      case "object-grammar":
        throw new O({
          functionality: "object-grammar mode"
        });
      default: {
        const b = d;
        throw new Error(`Unsupported type: ${b}`);
      }
    }
  }
  async doGenerate(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await F({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: H(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: st,
      successfulResponseHandler: xe(
        Uo
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: a, ...s } = t, o = n.choices[0];
    return {
      text: o.text,
      usage: {
        promptTokens: n.usage.prompt_tokens,
        completionTokens: n.usage.completion_tokens
      },
      finishReason: St(o.finish_reason),
      logprobs: br(o.logprobs),
      rawCall: { rawPrompt: a, rawSettings: s },
      rawResponse: { headers: r },
      warnings: []
    };
  }
  async doStream(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await F({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: H(this.config.headers(), e.headers),
      body: {
        ...this.getArgs(e),
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: st,
      successfulResponseHandler: It(
        Vo
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: a, ...s } = t;
    let o = "other", i = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, l;
    return {
      stream: n.pipeThrough(
        new TransformStream({
          transform(u, d) {
            if (!u.success) {
              o = "error", d.enqueue({ type: "error", error: u.error });
              return;
            }
            const p = u.value;
            if ("error" in p) {
              o = "error", d.enqueue({ type: "error", error: p.error });
              return;
            }
            p.usage != null && (i = {
              promptTokens: p.usage.prompt_tokens,
              completionTokens: p.usage.completion_tokens
            });
            const g = p.choices[0];
            (g == null ? void 0 : g.finish_reason) != null && (o = St(g.finish_reason)), (g == null ? void 0 : g.text) != null && d.enqueue({
              type: "text-delta",
              textDelta: g.text
            });
            const m = br(
              g == null ? void 0 : g.logprobs
            );
            m != null && m.length && (l === void 0 && (l = []), l.push(...m));
          },
          flush(u) {
            u.enqueue({
              type: "finish",
              finishReason: o,
              logprobs: l,
              usage: i
            });
          }
        })
      ),
      rawCall: { rawPrompt: a, rawSettings: s },
      rawResponse: { headers: r },
      warnings: []
    };
  }
}, Uo = c.object({
  choices: c.array(
    c.object({
      text: c.string(),
      finish_reason: c.string(),
      logprobs: c.object({
        tokens: c.array(c.string()),
        token_logprobs: c.array(c.number()),
        top_logprobs: c.array(c.record(c.string(), c.number())).nullable()
      }).nullable().optional()
    })
  ),
  usage: c.object({
    prompt_tokens: c.number(),
    completion_tokens: c.number()
  })
}), Vo = c.union([
  c.object({
    choices: c.array(
      c.object({
        text: c.string(),
        finish_reason: c.string().nullish(),
        index: c.number(),
        logprobs: c.object({
          tokens: c.array(c.string()),
          token_logprobs: c.array(c.number()),
          top_logprobs: c.array(c.record(c.string(), c.number())).nullable()
        }).nullable().optional()
      })
    ),
    usage: c.object({
      prompt_tokens: c.number(),
      completion_tokens: c.number()
    }).optional().nullable()
  }),
  nr
]), qo = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  get maxEmbeddingsPerCall() {
    var e;
    return (e = this.settings.maxEmbeddingsPerCall) != null ? e : 2048;
  }
  get supportsParallelCalls() {
    var e;
    return (e = this.settings.supportsParallelCalls) != null ? e : !0;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: r
  }) {
    if (e.length > this.maxEmbeddingsPerCall)
      throw new wr({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await F({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: H(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: st,
      successfulResponseHandler: xe(
        Bo
      ),
      abortSignal: r,
      fetch: this.config.fetch
    });
    return {
      embeddings: a.data.map((s) => s.embedding),
      usage: a.usage ? { tokens: a.usage.prompt_tokens } : void 0,
      rawResponse: { headers: n }
    };
  }
}, Bo = c.object({
  data: c.array(c.object({ embedding: c.array(c.number()) })),
  usage: c.object({ prompt_tokens: c.number() }).nullish()
});
function zo(e = {}) {
  var t, r, n;
  const a = (r = Kt((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.openai.com/v1", s = (n = e.compatibility) != null ? n : "compatible", o = () => ({
    Authorization: `Bearer ${Ft({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), i = (g, m = {}) => new Oo(g, m, {
    provider: "openai.chat",
    url: ({ path: b }) => `${a}${b}`,
    headers: o,
    compatibility: s,
    fetch: e.fetch
  }), l = (g, m = {}) => new Lo(g, m, {
    provider: "openai.completion",
    url: ({ path: b }) => `${a}${b}`,
    headers: o,
    compatibility: s,
    fetch: e.fetch
  }), u = (g, m = {}) => new qo(g, m, {
    provider: "openai.embedding",
    url: ({ path: b }) => `${a}${b}`,
    headers: o,
    fetch: e.fetch
  }), d = (g, m) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return g === "gpt-3.5-turbo-instruct" ? l(
      g,
      m
    ) : i(g, m);
  }, p = function(g, m) {
    return d(g, m);
  };
  return p.languageModel = d, p.chat = i, p.completion = l, p.embedding = u, p.textEmbedding = u, p;
}
zo({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  ko as createAnthropic,
  Po as createMistral,
  zo as createOpenAI,
  Jo as experimental_streamText
};
