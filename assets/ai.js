var U = class extends Error {
  constructor({
    message: e,
    url: t,
    requestBodyValues: r,
    statusCode: n,
    responseHeaders: s,
    responseBody: a,
    cause: o,
    isRetryable: i = n != null && (n === 408 || // request timeout
    n === 409 || // conflict
    n === 429 || // too many requests
    n >= 500),
    // server error
    data: c
  }) {
    super(e), this.name = "AI_APICallError", this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = s, this.responseBody = a, this.cause = o, this.isRetryable = i, this.data = c;
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
}, _t = class extends Error {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: s = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super(s), this.name = "AI_DownloadError", this.url = e, this.statusCode = t, this.statusText = r, this.cause = n;
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
}, xr = class extends Error {
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
}, K = class extends Error {
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
}, Dt = class extends Error {
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
}, rt = class extends Error {
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
}, bt = class extends Error {
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
function Ct(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var kr = class extends Error {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Ct(
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
}, st = class extends Error {
  constructor({ text: e, cause: t }) {
    super(
      `JSON parsing failed: Text: ${e}.
Error message: ${Ct(t)}`
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
}, tt = class extends Error {
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
}, at = class extends Error {
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
}, Lt = class extends Error {
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
}, Qt = class extends Error {
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
}, ke = class extends Error {
  constructor({ value: e, cause: t }) {
    super(
      `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${Ct(t)}`
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
}, P = class extends Error {
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
let Tr = (e, t = 21) => (r = t) => {
  let n = "", s = r;
  for (; s--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function Er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} };
const Sr = typeof Buffer < "u", Ut = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, Vt = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function er(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), Sr && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const s = r && r.protoAction || "error", a = r && r.constructorAction || "error";
  if (s === "ignore" && a === "ignore")
    return n;
  if (s !== "ignore" && a !== "ignore") {
    if (Ut.test(e) === !1 && Vt.test(e) === !1)
      return n;
  } else if (s !== "ignore" && a === "ignore") {
    if (Ut.test(e) === !1)
      return n;
  } else if (Vt.test(e) === !1)
    return n;
  return tr(n, { protoAction: s, constructorAction: a, safe: r && r.safe });
}
function tr(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
  let s = [e];
  for (; s.length; ) {
    const a = s;
    s = [];
    for (const o of a) {
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
        const c = o[i];
        c && typeof c == "object" && s.push(c);
      }
    }
  }
  return e;
}
function It(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return er(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function Cr(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return er(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
ge.exports = It;
ge.exports.default = It;
ge.exports.parse = It;
ge.exports.safeParse = Cr;
ge.exports.scan = tr;
var Ir = ge.exports;
const jt = /* @__PURE__ */ Er(Ir);
function jr(e) {
  let t, r, n, s, a, o, i;
  return c(), {
    feed: u,
    reset: c
  };
  function c() {
    t = !0, r = "", n = 0, s = -1, a = void 0, o = void 0, i = "";
  }
  function u(p) {
    r = r ? r + p : p, t && Nr(r) && (r = r.slice(rr.length)), t = !1;
    const h = r.length;
    let g = 0, w = !1;
    for (; g < h; ) {
      w && (r[g] === `
` && ++g, w = !1);
      let x = -1, j = s, A;
      for (let $ = n; x < 0 && $ < h; ++$)
        A = r[$], A === ":" && j < 0 ? j = $ - g : A === "\r" ? (w = !0, x = $ - g) : A === `
` && (x = $ - g);
      if (x < 0) {
        n = h - g, s = j;
        break;
      } else
        n = 0, s = -1;
      d(r, g, j, x), g += x + 1;
    }
    g === h ? r = "" : g > 0 && (r = r.slice(g));
  }
  function d(p, h, g, w) {
    if (w === 0) {
      i.length > 0 && (e({
        type: "event",
        id: a,
        event: o || void 0,
        data: i.slice(0, -1)
        // remove trailing newline
      }), i = "", a = void 0), o = void 0;
      return;
    }
    const x = g < 0, j = p.slice(h, h + (x ? w : g));
    let A = 0;
    x ? A = w : p[h + g + 1] === " " ? A = g + 2 : A = g + 1;
    const $ = h + A, Xe = w - A, J = p.slice($, $ + Xe).toString();
    if (j === "data")
      i += J ? "".concat(J, `
`) : `
`;
    else if (j === "event")
      o = J;
    else if (j === "id" && !J.includes("\0"))
      a = J;
    else if (j === "retry") {
      const ve = parseInt(J, 10);
      Number.isNaN(ve) || e({
        type: "reconnect-interval",
        value: ve
      });
    }
  }
}
const rr = [239, 187, 191];
function Nr(e) {
  return rr.every((t, r) => e.charCodeAt(r) === t);
}
class Ar extends TransformStream {
  constructor() {
    let t;
    super({
      start(r) {
        t = jr((n) => {
          n.type === "event" && r.enqueue(n);
        });
      },
      transform(r) {
        t.feed(r);
      }
    });
  }
}
function q(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
async function Pr({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const s = await t(n);
    if (!s.ok)
      throw new _t({
        url: n,
        statusCode: s.status,
        statusText: s.statusText
      });
    return {
      data: new Uint8Array(await s.arrayBuffer()),
      mimeType: (r = s.headers.get("content-type")) != null ? r : void 0
    };
  } catch (s) {
    throw _t.isDownloadError(s) ? s : new _t({ url: n, cause: s });
  }
}
function ht(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Te = Tr(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function nr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function nt(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Nt({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new tt({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new tt({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new tt({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new tt({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
function Or({
  value: e,
  schema: t
}) {
  try {
    return t.parse(e);
  } catch (r) {
    throw new ke({ value: e, cause: r });
  }
}
function Rr({
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
      error: new ke({
        value: e,
        cause: r.error
      })
    };
  } catch (r) {
    return {
      success: !1,
      error: ke.isTypeValidationError(r) ? r : new ke({ value: e, cause: r })
    };
  }
}
function Zr({
  text: e,
  schema: t
}) {
  try {
    const r = jt.parse(e);
    return t == null ? r : Or({ value: r, schema: t });
  } catch (r) {
    throw st.isJSONParseError(r) || ke.isTypeValidationError(r) ? r : new st({ text: e, cause: r });
  }
}
function At({
  text: e,
  schema: t
}) {
  try {
    const r = jt.parse(e);
    return t == null ? {
      success: !0,
      value: r
    } : Rr({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: st.isJSONParseError(r) ? r : new st({ text: e, cause: r })
    };
  }
}
function qt(e) {
  try {
    return jt.parse(e), !0;
  } catch {
    return !1;
  }
}
function $r(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var Mr = () => fetch, B = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}) => Dr({
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
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}), Dr = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: s,
  abortSignal: a,
  fetch: o = Mr()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: $r(t),
      body: r.content,
      signal: a
    }), c = ht(i);
    if (!i.ok) {
      let u;
      try {
        u = await s({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw nt(d) || U.isAPICallError(d) ? d : new U({
          message: "Failed to process error response",
          cause: d,
          statusCode: i.status,
          url: e,
          responseHeaders: c,
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
      throw u instanceof Error && (nt(u) || U.isAPICallError(u)) ? u : new U({
        message: "Failed to process successful response",
        cause: u,
        statusCode: i.status,
        url: e,
        responseHeaders: c,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (nt(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const c = i.cause;
      if (c != null)
        throw new U({
          message: `Cannot connect to API: ${c.message}`,
          cause: c,
          url: e,
          requestBodyValues: r.values,
          isRetryable: !0
          // retry when network error
        });
    }
    throw i;
  }
}, Pt = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: s, requestBodyValues: a }) => {
  const o = await n.text(), i = ht(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new U({
        message: n.statusText,
        url: s,
        requestBodyValues: a,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: o,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  try {
    const c = Zr({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new U({
        message: t(c),
        url: s,
        requestBodyValues: a,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: o,
        data: c,
        isRetryable: r == null ? void 0 : r(n, c)
      })
    };
  } catch {
    return {
      responseHeaders: i,
      value: new U({
        message: n.statusText,
        url: s,
        requestBodyValues: a,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: o,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  }
}, gt = (e) => async ({ response: t }) => {
  const r = ht(t);
  if (t.body == null)
    throw new xr({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new Ar()).pipeThrough(
      new TransformStream({
        transform({ data: n }, s) {
          n !== "[DONE]" && s.enqueue(
            At({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, ye = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const s = await t.text(), a = At({
    text: s,
    schema: e
  }), o = ht(t);
  if (!a.success)
    throw new U({
      message: "Invalid JSON response",
      cause: a.error,
      statusCode: t.status,
      responseHeaders: o,
      responseBody: s,
      url: r,
      requestBodyValues: n
    });
  return {
    responseHeaders: o,
    value: a.value
  };
};
function Lr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = globalThis.atob(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function sr(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return globalThis.btoa(t);
}
function Ot(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
var Ee = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Se = {
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
}, Ce = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Ie = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, je = {
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
}, Ne = {
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
}, Ae = {
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
}, Pe = {
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
}, Oe = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Re = {
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
}, Ze = {
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
}, ar = [
  Ee,
  Se,
  Ce,
  Ie,
  je,
  Ne,
  Ae,
  Pe,
  Oe,
  Re,
  Ze
];
Ee.code + "", Se.code + "", Ce.code + "", Ie.code + "", je.code + "", Ne.code + "", Ae.code + "", Pe.code + "", Oe.code + "", Re.code + "", Ze.code + "";
Ee.name + "", Ee.code, Se.name + "", Se.code, Ce.name + "", Ce.code, Ie.name + "", Ie.code, je.name + "", je.code, Ne.name + "", Ne.code, Ae.name + "", Ae.code, Pe.name + "", Pe.code, Oe.name + "", Oe.code, Re.name + "", Re.code, Ze.name + "", Ze.code;
ar.map((e) => e.code);
function be(e, t) {
  const r = ar.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
function or(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function C(e, t, r, n, s) {
  e[t] = r, or(e, t, n, s);
}
const Ur = Symbol("Let zodToJsonSchema decide on which parser to use"), Vr = {
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
}, qr = (e) => ({
  ...Vr,
  ...e
});
var E;
(function(e) {
  e.assertEqual = (s) => s;
  function t(s) {
  }
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (s) => {
    const a = {};
    for (const o of s)
      a[o] = o;
    return a;
  }, e.getValidEnumValues = (s) => {
    const a = e.objectKeys(s).filter((i) => typeof s[s[i]] != "number"), o = {};
    for (const i of a)
      o[i] = s[i];
    return e.objectValues(o);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(a) {
    return s[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && a.push(o);
    return a;
  }, e.find = (s, a) => {
    for (const o of s)
      if (a(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, a = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(a);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(E || (E = {}));
var xt;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(xt || (xt = {}));
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
]), ee = (e) => {
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
}, m = E.arrayToEnum([
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
]), Br = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Z extends Error {
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
    const r = t || function(a) {
      return a.message;
    }, n = { _errors: [] }, s = (a) => {
      for (const o of a.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let i = n, c = 0;
          for (; c < o.path.length; ) {
            const u = o.path[c];
            c === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], c++;
          }
        }
    };
    return s(this), n;
  }
  static assert(t) {
    if (!(t instanceof Z))
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
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Z.create = (e) => new Z(e);
const me = (e, t) => {
  let r;
  switch (e.code) {
    case m.invalid_type:
      e.received === v.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case m.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, E.jsonStringifyReplacer)}`;
      break;
    case m.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${E.joinValues(e.keys, ", ")}`;
      break;
    case m.invalid_union:
      r = "Invalid input";
      break;
    case m.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${E.joinValues(e.options)}`;
      break;
    case m.invalid_enum_value:
      r = `Invalid enum value. Expected ${E.joinValues(e.options)}, received '${e.received}'`;
      break;
    case m.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case m.invalid_return_type:
      r = "Invalid function return type";
      break;
    case m.invalid_date:
      r = "Invalid date";
      break;
    case m.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : E.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case m.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case m.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case m.custom:
      r = "Invalid input";
      break;
    case m.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case m.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case m.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, E.assertNever(e);
  }
  return { message: r };
};
let ir = me;
function zr(e) {
  ir = e;
}
function ot() {
  return ir;
}
const it = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: s } = e, a = [...r, ...s.path || []], o = {
    ...s,
    path: a
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: a,
      message: s.message
    };
  let i = "";
  const c = n.filter((u) => !!u).slice().reverse();
  for (const u of c)
    i = u(o, { data: t, defaultError: i }).message;
  return {
    ...s,
    path: a,
    message: i
  };
}, Hr = [];
function y(e, t) {
  const r = ot(), n = it({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      r,
      r === me ? void 0 : me
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(n);
}
class N {
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
    for (const s of r) {
      if (s.status === "aborted")
        return b;
      s.status === "dirty" && t.dirty(), n.push(s.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const s of r) {
      const a = await s.key, o = await s.value;
      n.push({
        key: a,
        value: o
      });
    }
    return N.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: a, value: o } = s;
      if (a.status === "aborted" || o.status === "aborted")
        return b;
      a.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (n[a.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const b = Object.freeze({
  status: "aborted"
}), de = (e) => ({ status: "dirty", value: e }), O = (e) => ({ status: "valid", value: e }), kt = (e) => e.status === "aborted", Tt = (e) => e.status === "dirty", $e = (e) => e.status === "valid", Me = (e) => typeof Promise < "u" && e instanceof Promise;
function lt(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function lr(e, t, r, n, s) {
  if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var _;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_ || (_ = {}));
var we, xe;
class z {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Bt = (e, t) => {
  if ($e(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Z(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function k(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (o, i) => {
    var c, u;
    const { message: d } = e;
    return o.code === "invalid_enum_value" ? { message: d ?? i.defaultError } : typeof i.data > "u" ? { message: (c = d ?? n) !== null && c !== void 0 ? c : i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: (u = d ?? r) !== null && u !== void 0 ? u : i.defaultError };
  }, description: s };
}
class T {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ee(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: ee(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new N(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ee(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Me(r))
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
    const s = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ee(t)
    }, a = this._parseSync({ data: t, path: s.path, parent: s });
    return Bt(s, a);
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
      parsedType: ee(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), a = await (Me(s) ? s : Promise.resolve(s));
    return Bt(n, a);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, a) => {
      const o = t(s), i = () => a.addIssue({
        code: m.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new L({
      schema: this,
      typeName: f.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return V.create(this, this._def);
  }
  nullable() {
    return se.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return D.create(this, this._def);
  }
  promise() {
    return he.create(this, this._def);
  }
  or(t) {
    return Ve.create([this, t], this._def);
  }
  and(t) {
    return qe.create(this, t, this._def);
  }
  transform(t) {
    return new L({
      ...k(this._def),
      schema: this,
      typeName: f.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Fe({
      ...k(this._def),
      innerType: this,
      defaultValue: r,
      typeName: f.ZodDefault
    });
  }
  brand() {
    return new Rt({
      typeName: f.ZodBranded,
      type: this,
      ...k(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new We({
      ...k(this._def),
      innerType: this,
      catchValue: r,
      typeName: f.ZodCatch
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
    return Ye.create(this, t);
  }
  readonly() {
    return Ke.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Jr = /^c[^\s-]{8,}$/i, Fr = /^[0-9a-z]+$/, Wr = /^[0-9A-HJKMNP-TV-Z]{26}$/, Kr = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Gr = /^[a-z0-9_-]{21}$/i, Yr = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Xr = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Qr = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let wt;
const en = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, tn = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, rn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, cr = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", nn = new RegExp(`^${cr}$`);
function ur(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function sn(e) {
  return new RegExp(`^${ur(e)}$`);
}
function dr(e) {
  let t = `${cr}T${ur(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function an(e, t) {
  return !!((t === "v4" || !t) && en.test(e) || (t === "v6" || !t) && tn.test(e));
}
class M extends T {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== v.string) {
      const a = this._getOrReturnCtx(t);
      return y(a, {
        code: m.invalid_type,
        expected: v.string,
        received: a.parsedType
      }), b;
    }
    const n = new N();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (s = this._getOrReturnCtx(t, s), y(s, {
          code: m.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (s = this._getOrReturnCtx(t, s), y(s, {
          code: m.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const o = t.data.length > a.value, i = t.data.length < a.value;
        (o || i) && (s = this._getOrReturnCtx(t, s), o ? y(s, {
          code: m.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && y(s, {
          code: m.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        Xr.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
          validation: "email",
          code: m.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        wt || (wt = new RegExp(Qr, "u")), wt.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
          validation: "emoji",
          code: m.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        Kr.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
          validation: "uuid",
          code: m.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        Gr.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
          validation: "nanoid",
          code: m.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        Jr.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
          validation: "cuid",
          code: m.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        Fr.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
          validation: "cuid2",
          code: m.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        Wr.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
          validation: "ulid",
          code: m.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), y(s, {
            validation: "url",
            code: m.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
        validation: "regex",
        code: m.invalid_string,
        message: a.message
      }), n.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), n.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "datetime" ? dr(a).test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.invalid_string,
        validation: "datetime",
        message: a.message
      }), n.dirty()) : a.kind === "date" ? nn.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.invalid_string,
        validation: "date",
        message: a.message
      }), n.dirty()) : a.kind === "time" ? sn(a).test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.invalid_string,
        validation: "time",
        message: a.message
      }), n.dirty()) : a.kind === "duration" ? Yr.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
        validation: "duration",
        code: m.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "ip" ? an(t.data, a.version) || (s = this._getOrReturnCtx(t, s), y(s, {
        validation: "ip",
        code: m.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "base64" ? rn.test(t.data) || (s = this._getOrReturnCtx(t, s), y(s, {
        validation: "base64",
        code: m.invalid_string,
        message: a.message
      }), n.dirty()) : E.assertNever(a);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: m.invalid_string,
      ..._.errToObj(n)
    });
  }
  _addCheck(t) {
    return new M({
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
    return new M({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new M({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new M({
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
M.create = (e) => {
  var t;
  return new M({
    checks: [],
    typeName: f.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...k(e)
  });
};
function on(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, a = parseInt(e.toFixed(s).replace(".", "")), o = parseInt(t.toFixed(s).replace(".", ""));
  return a % o / Math.pow(10, s);
}
class te extends T {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== v.number) {
      const a = this._getOrReturnCtx(t);
      return y(a, {
        code: m.invalid_type,
        expected: v.number,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new N();
    for (const a of this._def.checks)
      a.kind === "int" ? E.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? on(t.data, a.value) !== 0 && (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.not_finite,
        message: a.message
      }), s.dirty()) : E.assertNever(a);
    return { status: s.value, value: t.data };
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
  setLimit(t, r, n, s) {
    return new te({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: _.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new te({
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
te.create = (e) => new te({
  checks: [],
  typeName: f.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...k(e)
});
class re extends T {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== v.bigint) {
      const a = this._getOrReturnCtx(t);
      return y(a, {
        code: m.invalid_type,
        expected: v.bigint,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new N();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), y(n, {
        code: m.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : E.assertNever(a);
    return { status: s.value, value: t.data };
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
  setLimit(t, r, n, s) {
    return new re({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: _.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new re({
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
re.create = (e) => {
  var t;
  return new re({
    checks: [],
    typeName: f.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...k(e)
  });
};
class De extends T {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== v.boolean) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: m.invalid_type,
        expected: v.boolean,
        received: n.parsedType
      }), b;
    }
    return O(t.data);
  }
}
De.create = (e) => new De({
  typeName: f.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...k(e)
});
class ie extends T {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== v.date) {
      const a = this._getOrReturnCtx(t);
      return y(a, {
        code: m.invalid_type,
        expected: v.date,
        received: a.parsedType
      }), b;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return y(a, {
        code: m.invalid_date
      }), b;
    }
    const n = new N();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (s = this._getOrReturnCtx(t, s), y(s, {
        code: m.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : E.assertNever(a);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ie({
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
ie.create = (e) => new ie({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: f.ZodDate,
  ...k(e)
});
class ct extends T {
  _parse(t) {
    if (this._getType(t) !== v.symbol) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: m.invalid_type,
        expected: v.symbol,
        received: n.parsedType
      }), b;
    }
    return O(t.data);
  }
}
ct.create = (e) => new ct({
  typeName: f.ZodSymbol,
  ...k(e)
});
class Le extends T {
  _parse(t) {
    if (this._getType(t) !== v.undefined) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: m.invalid_type,
        expected: v.undefined,
        received: n.parsedType
      }), b;
    }
    return O(t.data);
  }
}
Le.create = (e) => new Le({
  typeName: f.ZodUndefined,
  ...k(e)
});
class Ue extends T {
  _parse(t) {
    if (this._getType(t) !== v.null) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: m.invalid_type,
        expected: v.null,
        received: n.parsedType
      }), b;
    }
    return O(t.data);
  }
}
Ue.create = (e) => new Ue({
  typeName: f.ZodNull,
  ...k(e)
});
class fe extends T {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return O(t.data);
  }
}
fe.create = (e) => new fe({
  typeName: f.ZodAny,
  ...k(e)
});
class oe extends T {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return O(t.data);
  }
}
oe.create = (e) => new oe({
  typeName: f.ZodUnknown,
  ...k(e)
});
class X extends T {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return y(r, {
      code: m.invalid_type,
      expected: v.never,
      received: r.parsedType
    }), b;
  }
}
X.create = (e) => new X({
  typeName: f.ZodNever,
  ...k(e)
});
class ut extends T {
  _parse(t) {
    if (this._getType(t) !== v.undefined) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: m.invalid_type,
        expected: v.void,
        received: n.parsedType
      }), b;
    }
    return O(t.data);
  }
}
ut.create = (e) => new ut({
  typeName: f.ZodVoid,
  ...k(e)
});
class D extends T {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== v.array)
      return y(r, {
        code: m.invalid_type,
        expected: v.array,
        received: r.parsedType
      }), b;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (o || i) && (y(r, {
        code: o ? m.too_big : m.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (y(r, {
      code: m.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (y(r, {
      code: m.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => s.type._parseAsync(new z(r, o, r.path, i)))).then((o) => N.mergeArray(n, o));
    const a = [...r.data].map((o, i) => s.type._parseSync(new z(r, o, r.path, i)));
    return N.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new D({
      ...this._def,
      minLength: { value: t, message: _.toString(r) }
    });
  }
  max(t, r) {
    return new D({
      ...this._def,
      maxLength: { value: t, message: _.toString(r) }
    });
  }
  length(t, r) {
    return new D({
      ...this._def,
      exactLength: { value: t, message: _.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
D.create = (e, t) => new D({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: f.ZodArray,
  ...k(t)
});
function ue(e) {
  if (e instanceof I) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = V.create(ue(n));
    }
    return new I({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof D ? new D({
    ...e._def,
    type: ue(e.element)
  }) : e instanceof V ? V.create(ue(e.unwrap())) : e instanceof se ? se.create(ue(e.unwrap())) : e instanceof H ? H.create(e.items.map((t) => ue(t))) : e;
}
class I extends T {
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
        code: m.invalid_type,
        expected: v.object,
        received: u.parsedType
      }), b;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: a, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof X && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        o.includes(u) || i.push(u);
    const c = [];
    for (const u of o) {
      const d = a[u], p = s.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: d._parse(new z(s, p, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof X) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of i)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (u === "strict")
        i.length > 0 && (y(s, {
          code: m.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of i) {
        const p = s.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: u._parse(
            new z(s, p, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const d of c) {
        const p = await d.key, h = await d.value;
        u.push({
          key: p,
          value: h,
          alwaysSet: d.alwaysSet
        });
      }
      return u;
    }).then((u) => N.mergeObjectSync(n, u)) : N.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return _.errToObj, new I({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var s, a, o, i;
          const c = (o = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = _.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new I({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new I({
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
    return new I({
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
    return new I({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: f.ZodObject
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
    return new I({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return E.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new I({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return E.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new I({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ue(this);
  }
  partial(t) {
    const r = {};
    return E.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }), new I({
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
        let a = this.shape[n];
        for (; a instanceof V; )
          a = a._def.innerType;
        r[n] = a;
      }
    }), new I({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return pr(E.objectKeys(this.shape));
  }
}
I.create = (e, t) => new I({
  shape: () => e,
  unknownKeys: "strip",
  catchall: X.create(),
  typeName: f.ZodObject,
  ...k(t)
});
I.strictCreate = (e, t) => new I({
  shape: () => e,
  unknownKeys: "strict",
  catchall: X.create(),
  typeName: f.ZodObject,
  ...k(t)
});
I.lazycreate = (e, t) => new I({
  shape: e,
  unknownKeys: "strip",
  catchall: X.create(),
  typeName: f.ZodObject,
  ...k(t)
});
class Ve extends T {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((i) => new Z(i.ctx.common.issues));
      return y(r, {
        code: m.invalid_union,
        unionErrors: o
      }), b;
    }
    if (r.common.async)
      return Promise.all(n.map(async (a) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let a;
      const o = [];
      for (const c of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !a && (a = { result: d, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((c) => new Z(c));
      return y(r, {
        code: m.invalid_union,
        unionErrors: i
      }), b;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ve.create = (e, t) => new Ve({
  options: e,
  typeName: f.ZodUnion,
  ...k(t)
});
const Y = (e) => e instanceof ze ? Y(e.schema) : e instanceof L ? Y(e.innerType()) : e instanceof He ? [e.value] : e instanceof ne ? e.options : e instanceof Je ? E.objectValues(e.enum) : e instanceof Fe ? Y(e._def.innerType) : e instanceof Le ? [void 0] : e instanceof Ue ? [null] : e instanceof V ? [void 0, ...Y(e.unwrap())] : e instanceof se ? [null, ...Y(e.unwrap())] : e instanceof Rt || e instanceof Ke ? Y(e.unwrap()) : e instanceof We ? Y(e._def.innerType) : [];
class yt extends T {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== v.object)
      return y(r, {
        code: m.invalid_type,
        expected: v.object,
        received: r.parsedType
      }), b;
    const n = this.discriminator, s = r.data[n], a = this.optionsMap.get(s);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (y(r, {
      code: m.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), b);
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
    const s = /* @__PURE__ */ new Map();
    for (const a of r) {
      const o = Y(a.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (s.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        s.set(i, a);
      }
    }
    return new yt({
      typeName: f.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...k(n)
    });
  }
}
function Et(e, t) {
  const r = ee(e), n = ee(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === v.object && n === v.object) {
    const s = E.objectKeys(t), a = E.objectKeys(e).filter((i) => s.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of a) {
      const c = Et(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      o[i] = c.data;
    }
    return { valid: !0, data: o };
  } else if (r === v.array && n === v.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const o = e[a], i = t[a], c = Et(o, i);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else return r === v.date && n === v.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class qe extends T {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (a, o) => {
      if (kt(a) || kt(o))
        return b;
      const i = Et(a.value, o.value);
      return i.valid ? ((Tt(a) || Tt(o)) && r.dirty(), { status: r.value, value: i.data }) : (y(n, {
        code: m.invalid_intersection_types
      }), b);
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
    ]).then(([a, o]) => s(a, o)) : s(this._def.left._parseSync({
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
qe.create = (e, t, r) => new qe({
  left: e,
  right: t,
  typeName: f.ZodIntersection,
  ...k(r)
});
class H extends T {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== v.array)
      return y(n, {
        code: m.invalid_type,
        expected: v.array,
        received: n.parsedType
      }), b;
    if (n.data.length < this._def.items.length)
      return y(n, {
        code: m.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), b;
    !this._def.rest && n.data.length > this._def.items.length && (y(n, {
      code: m.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((o, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new z(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(a).then((o) => N.mergeArray(r, o)) : N.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new H({
      ...this._def,
      rest: t
    });
  }
}
H.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new H({
    items: e,
    typeName: f.ZodTuple,
    rest: null,
    ...k(t)
  });
};
class Be extends T {
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
        code: m.invalid_type,
        expected: v.object,
        received: n.parsedType
      }), b;
    const s = [], a = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: a._parse(new z(n, i, n.path, i)),
        value: o._parse(new z(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? N.mergeObjectAsync(r, s) : N.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof T ? new Be({
      keyType: t,
      valueType: r,
      typeName: f.ZodRecord,
      ...k(n)
    }) : new Be({
      keyType: M.create(),
      valueType: t,
      typeName: f.ZodRecord,
      ...k(r)
    });
  }
}
class dt extends T {
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
        code: m.invalid_type,
        expected: v.map,
        received: n.parsedType
      }), b;
    const s = this._def.keyType, a = this._def.valueType, o = [...n.data.entries()].map(([i, c], u) => ({
      key: s._parse(new z(n, i, n.path, [u, "key"])),
      value: a._parse(new z(n, c, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const u = await c.key, d = await c.value;
          if (u.status === "aborted" || d.status === "aborted")
            return b;
          (u.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(u.value, d.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of o) {
        const u = c.key, d = c.value;
        if (u.status === "aborted" || d.status === "aborted")
          return b;
        (u.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(u.value, d.value);
      }
      return { status: r.value, value: i };
    }
  }
}
dt.create = (e, t, r) => new dt({
  valueType: t,
  keyType: e,
  typeName: f.ZodMap,
  ...k(r)
});
class le extends T {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== v.set)
      return y(n, {
        code: m.invalid_type,
        expected: v.set,
        received: n.parsedType
      }), b;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (y(n, {
      code: m.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (y(n, {
      code: m.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function o(c) {
      const u = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return b;
        d.status === "dirty" && r.dirty(), u.add(d.value);
      }
      return { status: r.value, value: u };
    }
    const i = [...n.data.values()].map((c, u) => a._parse(new z(n, c, n.path, u)));
    return n.common.async ? Promise.all(i).then((c) => o(c)) : o(i);
  }
  min(t, r) {
    return new le({
      ...this._def,
      minSize: { value: t, message: _.toString(r) }
    });
  }
  max(t, r) {
    return new le({
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
le.create = (e, t) => new le({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: f.ZodSet,
  ...k(t)
});
class pe extends T {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== v.function)
      return y(r, {
        code: m.invalid_type,
        expected: v.function,
        received: r.parsedType
      }), b;
    function n(i, c) {
      return it({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ot(),
          me
        ].filter((u) => !!u),
        issueData: {
          code: m.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(i, c) {
      return it({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ot(),
          me
        ].filter((u) => !!u),
        issueData: {
          code: m.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof he) {
      const i = this;
      return O(async function(...c) {
        const u = new Z([]), d = await i._def.args.parseAsync(c, a).catch((g) => {
          throw u.addIssue(n(c, g)), u;
        }), p = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(p, a).catch((g) => {
          throw u.addIssue(s(p, g)), u;
        });
      });
    } else {
      const i = this;
      return O(function(...c) {
        const u = i._def.args.safeParse(c, a);
        if (!u.success)
          throw new Z([n(c, u.error)]);
        const d = Reflect.apply(o, this, u.data), p = i._def.returns.safeParse(d, a);
        if (!p.success)
          throw new Z([s(d, p.error)]);
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
    return new pe({
      ...this._def,
      args: H.create(t).rest(oe.create())
    });
  }
  returns(t) {
    return new pe({
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
    return new pe({
      args: t || H.create([]).rest(oe.create()),
      returns: r || oe.create(),
      typeName: f.ZodFunction,
      ...k(n)
    });
  }
}
class ze extends T {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
ze.create = (e, t) => new ze({
  getter: e,
  typeName: f.ZodLazy,
  ...k(t)
});
class He extends T {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return y(r, {
        received: r.data,
        code: m.invalid_literal,
        expected: this._def.value
      }), b;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
He.create = (e, t) => new He({
  value: e,
  typeName: f.ZodLiteral,
  ...k(t)
});
function pr(e, t) {
  return new ne({
    values: e,
    typeName: f.ZodEnum,
    ...k(t)
  });
}
class ne extends T {
  constructor() {
    super(...arguments), we.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return y(r, {
        expected: E.joinValues(n),
        received: r.parsedType,
        code: m.invalid_type
      }), b;
    }
    if (lt(this, we) || lr(this, we, new Set(this._def.values)), !lt(this, we).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return y(r, {
        received: r.data,
        code: m.invalid_enum_value,
        options: n
      }), b;
    }
    return O(t.data);
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
    return ne.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return ne.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
we = /* @__PURE__ */ new WeakMap();
ne.create = pr;
class Je extends T {
  constructor() {
    super(...arguments), xe.set(this, void 0);
  }
  _parse(t) {
    const r = E.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== v.string && n.parsedType !== v.number) {
      const s = E.objectValues(r);
      return y(n, {
        expected: E.joinValues(s),
        received: n.parsedType,
        code: m.invalid_type
      }), b;
    }
    if (lt(this, xe) || lr(this, xe, new Set(E.getValidEnumValues(this._def.values))), !lt(this, xe).has(t.data)) {
      const s = E.objectValues(r);
      return y(n, {
        received: n.data,
        code: m.invalid_enum_value,
        options: s
      }), b;
    }
    return O(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
xe = /* @__PURE__ */ new WeakMap();
Je.create = (e, t) => new Je({
  values: e,
  typeName: f.ZodNativeEnum,
  ...k(t)
});
class he extends T {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== v.promise && r.common.async === !1)
      return y(r, {
        code: m.invalid_type,
        expected: v.promise,
        received: r.parsedType
      }), b;
    const n = r.parsedType === v.promise ? r.data : Promise.resolve(r.data);
    return O(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
he.create = (e, t) => new he({
  type: e,
  typeName: f.ZodPromise,
  ...k(t)
});
class L extends T {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === f.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, a = {
      addIssue: (o) => {
        y(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const o = s.transform(n.data, a);
      if (n.common.async)
        return Promise.resolve(o).then(async (i) => {
          if (r.value === "aborted")
            return b;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return c.status === "aborted" ? b : c.status === "dirty" || r.value === "dirty" ? de(c.value) : c;
        });
      {
        if (r.value === "aborted")
          return b;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? b : i.status === "dirty" || r.value === "dirty" ? de(i.value) : i;
      }
    }
    if (s.type === "refinement") {
      const o = (i) => {
        const c = s.refinement(i, a);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? b : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? b : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!$e(o))
          return o;
        const i = s.transform(o.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => $e(o) ? Promise.resolve(s.transform(o.value, a)).then((i) => ({ status: r.value, value: i })) : o);
    E.assertNever(s);
  }
}
L.create = (e, t, r) => new L({
  schema: e,
  typeName: f.ZodEffects,
  effect: t,
  ...k(r)
});
L.createWithPreprocess = (e, t, r) => new L({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: f.ZodEffects,
  ...k(r)
});
class V extends T {
  _parse(t) {
    return this._getType(t) === v.undefined ? O(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
V.create = (e, t) => new V({
  innerType: e,
  typeName: f.ZodOptional,
  ...k(t)
});
class se extends T {
  _parse(t) {
    return this._getType(t) === v.null ? O(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
se.create = (e, t) => new se({
  innerType: e,
  typeName: f.ZodNullable,
  ...k(t)
});
class Fe extends T {
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
Fe.create = (e, t) => new Fe({
  innerType: e,
  typeName: f.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...k(t)
});
class We extends T {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Me(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Z(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Z(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
We.create = (e, t) => new We({
  innerType: e,
  typeName: f.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...k(t)
});
class pt extends T {
  _parse(t) {
    if (this._getType(t) !== v.nan) {
      const n = this._getOrReturnCtx(t);
      return y(n, {
        code: m.invalid_type,
        expected: v.nan,
        received: n.parsedType
      }), b;
    }
    return { status: "valid", value: t.data };
  }
}
pt.create = (e) => new pt({
  typeName: f.ZodNaN,
  ...k(e)
});
const ln = Symbol("zod_brand");
class Rt extends T {
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
class Ye extends T {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? b : a.status === "dirty" ? (r.dirty(), de(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? b : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new Ye({
      in: t,
      out: r,
      typeName: f.ZodPipeline
    });
  }
}
class Ke extends T {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (s) => ($e(s) && (s.value = Object.freeze(s.value)), s);
    return Me(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ke.create = (e, t) => new Ke({
  innerType: e,
  typeName: f.ZodReadonly,
  ...k(t)
});
function mr(e, t = {}, r) {
  return e ? fe.create().superRefine((n, s) => {
    var a, o;
    if (!e(n)) {
      const i = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, c = (o = (a = i.fatal) !== null && a !== void 0 ? a : r) !== null && o !== void 0 ? o : !0, u = typeof i == "string" ? { message: i } : i;
      s.addIssue({ code: "custom", ...u, fatal: c });
    }
  }) : fe.create();
}
const cn = {
  object: I.lazycreate
};
var f;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(f || (f = {}));
const un = (e, t = {
  message: `Input not instance of ${e.name}`
}) => mr((r) => r instanceof e, t), fr = M.create, hr = te.create, dn = pt.create, pn = re.create, gr = De.create, mn = ie.create, fn = ct.create, hn = Le.create, gn = Ue.create, yn = fe.create, vn = oe.create, _n = X.create, bn = ut.create, wn = D.create, xn = I.create, kn = I.strictCreate, Tn = Ve.create, En = yt.create, Sn = qe.create, Cn = H.create, In = Be.create, jn = dt.create, Nn = le.create, An = pe.create, Pn = ze.create, On = He.create, Rn = ne.create, Zn = Je.create, $n = he.create, zt = L.create, Mn = V.create, Dn = se.create, Ln = L.createWithPreprocess, Un = Ye.create, Vn = () => fr().optional(), qn = () => hr().optional(), Bn = () => gr().optional(), zn = {
  string: (e) => M.create({ ...e, coerce: !0 }),
  number: (e) => te.create({ ...e, coerce: !0 }),
  boolean: (e) => De.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => re.create({ ...e, coerce: !0 }),
  date: (e) => ie.create({ ...e, coerce: !0 })
}, Hn = b;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: me,
  setErrorMap: zr,
  getErrorMap: ot,
  makeIssue: it,
  EMPTY_PATH: Hr,
  addIssueToContext: y,
  ParseStatus: N,
  INVALID: b,
  DIRTY: de,
  OK: O,
  isAborted: kt,
  isDirty: Tt,
  isValid: $e,
  isAsync: Me,
  get util() {
    return E;
  },
  get objectUtil() {
    return xt;
  },
  ZodParsedType: v,
  getParsedType: ee,
  ZodType: T,
  datetimeRegex: dr,
  ZodString: M,
  ZodNumber: te,
  ZodBigInt: re,
  ZodBoolean: De,
  ZodDate: ie,
  ZodSymbol: ct,
  ZodUndefined: Le,
  ZodNull: Ue,
  ZodAny: fe,
  ZodUnknown: oe,
  ZodNever: X,
  ZodVoid: ut,
  ZodArray: D,
  ZodObject: I,
  ZodUnion: Ve,
  ZodDiscriminatedUnion: yt,
  ZodIntersection: qe,
  ZodTuple: H,
  ZodRecord: Be,
  ZodMap: dt,
  ZodSet: le,
  ZodFunction: pe,
  ZodLazy: ze,
  ZodLiteral: He,
  ZodEnum: ne,
  ZodNativeEnum: Je,
  ZodPromise: he,
  ZodEffects: L,
  ZodTransformer: L,
  ZodOptional: V,
  ZodNullable: se,
  ZodDefault: Fe,
  ZodCatch: We,
  ZodNaN: pt,
  BRAND: ln,
  ZodBranded: Rt,
  ZodPipeline: Ye,
  ZodReadonly: Ke,
  custom: mr,
  Schema: T,
  ZodSchema: T,
  late: cn,
  get ZodFirstPartyTypeKind() {
    return f;
  },
  coerce: zn,
  any: yn,
  array: wn,
  bigint: pn,
  boolean: gr,
  date: mn,
  discriminatedUnion: En,
  effect: zt,
  enum: Rn,
  function: An,
  instanceof: un,
  intersection: Sn,
  lazy: Pn,
  literal: On,
  map: jn,
  nan: dn,
  nativeEnum: Zn,
  never: _n,
  null: gn,
  nullable: Dn,
  number: hr,
  object: xn,
  oboolean: Bn,
  onumber: qn,
  optional: Mn,
  ostring: Vn,
  pipeline: Un,
  preprocess: Ln,
  promise: $n,
  record: In,
  set: Nn,
  strictObject: kn,
  string: fr,
  symbol: fn,
  transformer: zt,
  tuple: Cn,
  undefined: hn,
  union: Tn,
  unknown: vn,
  void: bn,
  NEVER: Hn,
  ZodIssueCode: m,
  quotelessJson: Br,
  ZodError: Z
});
function Jn() {
  return {};
}
function Fn(e, t) {
  var n, s;
  const r = {
    type: "array"
  };
  return ((s = (n = e.type) == null ? void 0 : n._def) == null ? void 0 : s.typeName) !== f.ZodAny && (r.items = S(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && C(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && C(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (C(r, "minItems", e.exactLength.value, e.exactLength.message, t), C(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function Wn(e, t) {
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
function Kn() {
  return {
    type: "boolean"
  };
}
function Gn(e, t) {
  return S(e.type._def, t);
}
const Yn = (e, t) => S(e.innerType._def, t);
function yr(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((s, a) => yr(e, t, s))
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
      return Xn(e, t);
  }
}
const Xn = (e, t) => {
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
function Qn(e, t) {
  return {
    ...S(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function es(e, t) {
  return t.effectStrategy === "input" ? S(e.schema._def, t) : {};
}
function ts(e) {
  return {
    type: "string",
    enum: e.values
  };
}
const rs = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function ns(e, t) {
  const r = [
    S(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    S(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return r.forEach((a) => {
    if (rs(a))
      s.push(...a.allOf), a.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let o = a;
      if ("additionalProperties" in a && a.additionalProperties === !1) {
        const { additionalProperties: i, ...c } = a;
        o = c;
      } else
        n = void 0;
      s.push(o);
    }
  }), s.length ? {
    allOf: s,
    ...n
  } : void 0;
}
function ss(e, t) {
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
const _e = {
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
function vr(e, t) {
  const r = {
    type: "string"
  };
  function n(s) {
    return t.patternStrategy === "escape" ? as(s) : s;
  }
  if (e.checks)
    for (const s of e.checks)
      switch (s.kind) {
        case "min":
          C(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, t);
          break;
        case "max":
          C(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              ae(r, "email", s.message, t);
              break;
            case "format:idn-email":
              ae(r, "idn-email", s.message, t);
              break;
            case "pattern:zod":
              G(r, _e.email, s.message, t);
              break;
          }
          break;
        case "url":
          ae(r, "uri", s.message, t);
          break;
        case "uuid":
          ae(r, "uuid", s.message, t);
          break;
        case "regex":
          G(r, s.regex.source, s.message, t);
          break;
        case "cuid":
          G(r, _e.cuid, s.message, t);
          break;
        case "cuid2":
          G(r, _e.cuid2, s.message, t);
          break;
        case "startsWith":
          G(r, "^" + n(s.value), s.message, t);
          break;
        case "endsWith":
          G(r, n(s.value) + "$", s.message, t);
          break;
        case "datetime":
          ae(r, "date-time", s.message, t);
          break;
        case "length":
          C(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, t), C(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, t);
          break;
        case "includes": {
          G(r, n(s.value), s.message, t);
          break;
        }
        case "ip": {
          s.version !== "v6" && ae(r, "ipv4", s.message, t), s.version !== "v4" && ae(r, "ipv6", s.message, t);
          break;
        }
        case "emoji":
          G(r, _e.emoji, s.message, t);
          break;
        case "ulid": {
          G(r, _e.ulid, s.message, t);
          break;
        }
      }
  return r;
}
const as = (e) => Array.from(e).map((t) => /[a-zA-Z0-9]/.test(t) ? t : `\\${t}`).join(""), ae = (e, t, r, n) => {
  var s;
  e.format || (s = e.anyOf) != null && s.some((a) => a.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : C(e, "format", t, r, n);
}, G = (e, t, r, n) => {
  var s;
  e.pattern || (s = e.allOf) != null && s.some((a) => a.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: t,
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : C(e, "pattern", t, r, n);
};
function _r(e, t) {
  var n, s, a, o;
  if (t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === f.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((i, c) => ({
        ...i,
        [c]: S(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", c]
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
  if (((s = e.keyType) == null ? void 0 : s._def.typeName) === f.ZodString && ((a = e.keyType._def.checks) != null && a.length)) {
    const i = Object.entries(vr(e.keyType._def, t)).reduce((c, [u, d]) => u === "type" ? c : { ...c, [u]: d }, {});
    return {
      ...r,
      propertyNames: i
    };
  } else if (((o = e.keyType) == null ? void 0 : o._def.typeName) === f.ZodEnum)
    return {
      ...r,
      propertyNames: {
        enum: e.keyType._def.values
      }
    };
  return r;
}
function os(e, t) {
  if (t.mapStrategy === "record")
    return _r(e, t);
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
function is(e) {
  const t = e.values, n = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), s = Array.from(new Set(n.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function ls() {
  return {
    not: {}
  };
}
function cs(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const mt = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function us(e, t) {
  if (t.target === "openApi3")
    return Ht(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in mt && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((s, a) => {
      const o = mt[a._def.typeName];
      return o && !s.includes(o) ? [...s, o] : s;
    }, []);
    return {
      type: n.length > 1 ? n : n[0]
    };
  } else if (r.every((n) => n._def.typeName === "ZodLiteral" && !n.description)) {
    const n = r.reduce((s, a) => {
      const o = typeof a._def.value;
      switch (o) {
        case "string":
        case "number":
        case "boolean":
          return [...s, o];
        case "bigint":
          return [...s, "integer"];
        case "object":
          if (a._def.value === null)
            return [...s, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return s;
      }
    }, []);
    if (n.length === r.length) {
      const s = n.filter((a, o, i) => i.indexOf(a) === o);
      return {
        type: s.length > 1 ? s : s[0],
        enum: r.reduce((a, o) => a.includes(o._def.value) ? a : [...a, o._def.value], [])
      };
    }
  } else if (r.every((n) => n._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce((n, s) => [
        ...n,
        ...s._def.values.filter((a) => !n.includes(a))
      ], [])
    };
  return Ht(e, t);
}
const Ht = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, s) => S(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${s}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function ds(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: mt[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        mt[e.innerType._def.typeName],
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
function ps(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", or(r, "type", n.message, t);
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
function ms(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : S(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : S(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function fs(e, t) {
  const r = {
    type: "object",
    ...Object.entries(e.shape()).reduce((n, [s, a]) => {
      if (a === void 0 || a._def === void 0)
        return n;
      const o = S(a._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", s],
        propertyPath: [...t.currentPath, "properties", s]
      });
      return o === void 0 ? n : {
        properties: { ...n.properties, [s]: o },
        required: a.isOptional() ? n.required : [...n.required, s]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: ms(e, t)
  };
  return r.required.length || delete r.required, r;
}
const hs = (e, t) => {
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
}, gs = (e, t) => {
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
    allOf: [r, n].filter((s) => s !== void 0)
  };
};
function ys(e, t) {
  return S(e.type._def, t);
}
function vs(e, t) {
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
function _s(e, t) {
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
function bs() {
  return {
    not: {}
  };
}
function ws() {
  return {};
}
const xs = (e, t) => S(e.innerType._def, t);
function S(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const i = (o = t.override) == null ? void 0 : o.call(t, e, t, n, r);
    if (i !== Ur)
      return i;
  }
  if (n && !r) {
    const i = ks(n, t);
    if (i !== void 0)
      return i;
  }
  const s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  const a = Es(e, e.typeName, t);
  return a && Ss(e, t, a), s.jsonSchema = a, a;
}
const ks = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Ts(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, Ts = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, Es = (e, t, r) => {
  switch (t) {
    case f.ZodString:
      return vr(e, r);
    case f.ZodNumber:
      return ps(e, r);
    case f.ZodObject:
      return fs(e, r);
    case f.ZodBigInt:
      return Wn(e, r);
    case f.ZodBoolean:
      return Kn();
    case f.ZodDate:
      return yr(e, r);
    case f.ZodUndefined:
      return bs();
    case f.ZodNull:
      return cs(r);
    case f.ZodArray:
      return Fn(e, r);
    case f.ZodUnion:
    case f.ZodDiscriminatedUnion:
      return us(e, r);
    case f.ZodIntersection:
      return ns(e, r);
    case f.ZodTuple:
      return _s(e, r);
    case f.ZodRecord:
      return _r(e, r);
    case f.ZodLiteral:
      return ss(e, r);
    case f.ZodEnum:
      return ts(e);
    case f.ZodNativeEnum:
      return is(e);
    case f.ZodNullable:
      return ds(e, r);
    case f.ZodOptional:
      return hs(e, r);
    case f.ZodMap:
      return os(e, r);
    case f.ZodSet:
      return vs(e, r);
    case f.ZodLazy:
      return S(e.getter()._def, r);
    case f.ZodPromise:
      return ys(e, r);
    case f.ZodNaN:
    case f.ZodNever:
      return ls();
    case f.ZodEffects:
      return es(e, r);
    case f.ZodAny:
      return Jn();
    case f.ZodUnknown:
      return ws();
    case f.ZodDefault:
      return Qn(e, r);
    case f.ZodBranded:
      return Gn(e, r);
    case f.ZodReadonly:
      return xs(e, r);
    case f.ZodCatch:
      return Yn(e, r);
    case f.ZodPipeline:
      return gs(e, r);
    case f.ZodFunction:
    case f.ZodVoid:
    case f.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, Ss = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), Cs = (e) => {
  const t = qr(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    currentPath: r,
    propertyPath: void 0,
    seen: new Map(Object.entries(t.definitions).map(([n, s]) => [
      s._def,
      {
        def: s._def,
        path: [...t.basePath, t.definitionPath, n],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
}, Is = (e, t) => {
  const r = Cs(t), n = void 0, s = t == null ? void 0 : t.name, a = S(
    e._def,
    r,
    !1
  ) ?? {}, o = s === void 0 ? n ? {
    ...a,
    [r.definitionPath]: n
  } : a : {
    $ref: [
      ...r.$refStrategy === "relative" ? [] : r.basePath,
      r.definitionPath,
      s
    ].join("/"),
    [r.definitionPath]: {
      ...n,
      [s]: a
    }
  };
  return r.target === "jsonSchema7" ? o.$schema = "http://json-schema.org/draft-07/schema#" : r.target === "jsonSchema2019-09" && (o.$schema = "https://json-schema.org/draft/2019-09/schema#"), o;
};
var js = Object.defineProperty, Ns = (e, t) => {
  for (var r in t)
    js(e, r, { get: t[r], enumerable: !0 });
};
async function As(e) {
  return new Promise((t) => setTimeout(t, e));
}
var Ps = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => br(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function br(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, s = []) {
  try {
    return await e();
  } catch (a) {
    if (nt(a) || t === 0)
      throw a;
    const o = nr(a), i = [...s, a], c = i.length;
    if (c > t)
      throw new Lt({
        message: `Failed after ${c} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (a instanceof Error && U.isAPICallError(a) && a.isRetryable === !0 && c <= t)
      return await As(r), br(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw c === 1 ? a : new Lt({
      message: `Failed after ${c} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
var Os = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function Rs(e) {
  for (const { bytes: t, mimeType: r } of Os)
    if (e.length >= t.length && t.every((n, s) => e[s] === n))
      return r;
}
function Jt(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return Lr(e);
    } catch (t) {
      throw new Dt({
        message: "Invalid data content. Content string is not a base64-encoded image.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Dt({ content: e });
}
var Zs = class extends Error {
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
function $s(e) {
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
        ...e.messages.map(Ms)
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
function Ms(e) {
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
                    const a = new URL(r.image);
                    switch (a.protocol) {
                      case "http:":
                      case "https:":
                        return {
                          type: "image",
                          image: a,
                          mimeType: r.mimeType
                        };
                      case "data:":
                        try {
                          const [o, i] = r.image.split(","), c = o.split(";")[0].split(":")[1];
                          if (c == null || i == null)
                            throw new Error("Invalid data URL format");
                          return {
                            type: "image",
                            image: Jt(i),
                            mimeType: c
                          };
                        } catch {
                          throw new Error(
                            `Error processing data URL: ${nr(
                              e
                            )}`
                          );
                        }
                      default:
                        throw new Error(
                          `Unsupported URL protocol: ${a.protocol}`
                        );
                    }
                  } catch {
                  }
                const s = Jt(r.image);
                return {
                  type: "image",
                  image: s,
                  mimeType: (n = r.mimeType) != null ? n : Rs(s)
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
      throw new Zs({ role: r });
    }
  }
}
function Ds(e) {
  if (e.prompt == null && e.messages == null)
    throw new rt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new rt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.messages != null) {
    for (const t of e.messages)
      if (t.role === "system" && typeof t.content != "string")
        throw new rt({
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
function Ls({
  maxTokens: e,
  temperature: t,
  topP: r,
  presencePenalty: n,
  frequencyPenalty: s,
  seed: a,
  maxRetries: o
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new K({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new K({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new K({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new K({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new K({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new K({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (a != null && !Number.isInteger(a))
    throw new K({
      parameter: "seed",
      value: a,
      message: "seed must be an integer"
    });
  if (o != null) {
    if (!Number.isInteger(o))
      throw new K({
        parameter: "maxRetries",
        value: o,
        message: "maxRetries must be an integer"
      });
    if (o < 0)
      throw new K({
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
    frequencyPenalty: s,
    seed: a,
    maxRetries: o ?? 2
  };
}
function Us(e) {
  return {
    promptTokens: e.promptTokens,
    completionTokens: e.completionTokens,
    totalTokens: e.promptTokens + e.completionTokens
  };
}
function Vs(e) {
  return Is(e);
}
function wr(e, { contentType: t }) {
  var r;
  const n = new Headers((r = e == null ? void 0 : e.headers) != null ? r : {});
  return n.has("Content-Type") || n.set("Content-Type", t), n;
}
function Ft(e, t) {
  const r = e.pipeThrough(
    new TransformStream(t)
  );
  return r[Symbol.asyncIterator] = () => {
    const n = r.getReader();
    return {
      async next() {
        const { done: s, value: a } = await n.read();
        return s ? { done: !0, value: void 0 } : { done: !1, value: a };
      }
    };
  }, r;
}
function qs(e) {
  return e != null && Object.keys(e).length > 0;
}
function Bs({
  tools: e,
  toolChoice: t
}) {
  return qs(e) ? {
    tools: Object.entries(e).map(([r, n]) => ({
      type: "function",
      name: r,
      description: n.description,
      parameters: Vs(n.parameters)
    })),
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
function zs({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName;
  if (t == null)
    throw new at({ toolName: e.toolName });
  const n = t[r];
  if (n == null)
    throw new at({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const s = At({
    text: e.args,
    schema: n.parameters
  });
  if (s.success === !1)
    throw new kr({
      toolName: r,
      toolArgs: e.args,
      cause: s.error
    });
  return {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: r,
    args: s.value
  };
}
function Hs({
  tools: e,
  generatorStream: t
}) {
  let r = !1;
  const n = /* @__PURE__ */ new Set();
  let s = null;
  const a = new ReadableStream({
    start(i) {
      s = i;
    }
  }), o = new TransformStream({
    transform(i, c) {
      const u = i.type;
      switch (u) {
        case "text-delta":
        case "error": {
          c.enqueue(i);
          break;
        }
        case "tool-call": {
          const d = i.toolName;
          if (e == null) {
            s.enqueue({
              type: "error",
              error: new at({ toolName: i.toolName })
            });
            break;
          }
          const p = e[d];
          if (p == null) {
            s.enqueue({
              type: "error",
              error: new at({
                toolName: i.toolName,
                availableTools: Object.keys(e)
              })
            });
            break;
          }
          try {
            const h = zs({
              toolCall: i,
              tools: e
            });
            if (c.enqueue(h), p.execute != null) {
              const g = Te();
              n.add(g), p.execute(h.args).then(
                (w) => {
                  s.enqueue({
                    ...h,
                    type: "tool-result",
                    result: w
                  }), n.delete(g), r && n.size === 0 && s.close();
                },
                (w) => {
                  s.enqueue({
                    type: "error",
                    error: w
                  }), n.delete(g), r && n.size === 0 && s.close();
                }
              );
            }
          } catch (h) {
            s.enqueue({
              type: "error",
              error: h
            });
          }
          break;
        }
        case "finish": {
          c.enqueue({
            type: "finish",
            finishReason: i.finishReason,
            logprobs: i.logprobs,
            usage: Us(i.usage)
          });
          break;
        }
        case "tool-call-delta":
          break;
        default: {
          const d = u;
          throw new Error(`Unhandled chunk type: ${d}`);
        }
      }
    },
    flush() {
      r = !0, n.size === 0 && s.close();
    }
  });
  return new ReadableStream({
    async start(i) {
      return Promise.all([
        t.pipeThrough(o).pipeTo(
          new WritableStream({
            write(c) {
              i.enqueue(c);
            },
            close() {
            }
          })
        ),
        a.pipeTo(
          new WritableStream({
            write(c) {
              i.enqueue(c);
            },
            close() {
              i.close();
            }
          })
        )
      ]);
    }
  });
}
async function Js({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: s,
  messages: a,
  maxRetries: o,
  abortSignal: i,
  headers: c,
  onFinish: u,
  ...d
}) {
  const p = Ps({ maxRetries: o }), h = Ds({ system: n, prompt: s, messages: a }), { stream: g, warnings: w, rawResponse: x } = await p(
    () => e.doStream({
      mode: {
        type: "regular",
        ...Bs({ tools: t, toolChoice: r })
      },
      ...Ls(d),
      inputFormat: h.type,
      prompt: $s(h),
      abortSignal: i,
      headers: c
    })
  );
  return new Fs({
    stream: Hs({
      tools: t,
      generatorStream: g
    }),
    warnings: w,
    rawResponse: x,
    onFinish: u
  });
}
var Fs = class {
  constructor({
    stream: e,
    warnings: t,
    rawResponse: r,
    onFinish: n
  }) {
    this.warnings = t, this.rawResponse = r, this.onFinish = n;
    let s;
    this.usage = new Promise((x) => {
      s = x;
    });
    let a;
    this.finishReason = new Promise((x) => {
      a = x;
    });
    let o;
    this.text = new Promise((x) => {
      o = x;
    });
    let i;
    this.toolCalls = new Promise((x) => {
      i = x;
    });
    let c;
    this.toolResults = new Promise((x) => {
      c = x;
    });
    let u, d, p = "";
    const h = [], g = [], w = this;
    this.originalStream = e.pipeThrough(
      new TransformStream({
        async transform(x, j) {
          j.enqueue(x), x.type === "text-delta" && (p += x.textDelta), x.type === "tool-call" && h.push(x), x.type === "tool-result" && g.push(x), x.type === "finish" && (d = x.usage, u = x.finishReason, s(d), a(u), o(p), i(h));
        },
        // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
        async flush(x) {
          var j;
          try {
            c(g), await ((j = w.onFinish) == null ? void 0 : j.call(w, {
              finishReason: u ?? "unknown",
              usage: d ?? {
                promptTokens: NaN,
                completionTokens: NaN,
                totalTokens: NaN
              },
              text: p,
              toolCalls: h,
              // The tool results are inferred as a never[] type, because they are
              // optional and the execute method with an inferred result type is
              // optional as well. Therefore we need to cast the toolResults to any.
              // The type exposed to the users will be correctly inferred.
              toolResults: g,
              rawResponse: r,
              warnings: t
            }));
          } catch (A) {
            x.error(A);
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
    return Ft(this.teeStream(), {
      transform(e, t) {
        if (e.type === "text-delta")
          e.textDelta.length > 0 && t.enqueue(e.textDelta);
        else if (e.type === "error")
          throw e.error;
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
    return Ft(this.teeStream(), {
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
      async transform(s, a) {
        if (a.enqueue(s), s.type === "text-delta") {
          const o = s.textDelta;
          t += o, e.onToken && await e.onToken(o), e.onText && await e.onText(o);
        }
      },
      async flush() {
        e.onCompletion && await e.onCompletion(t), e.onFinal && await e.onFinal(t);
      }
    }), n = new TransformStream({
      transform: async (s, a) => {
        switch (s.type) {
          case "text-delta":
            a.enqueue(be("text", s.textDelta));
            break;
          case "tool-call":
            a.enqueue(
              be("tool_call", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              })
            );
            break;
          case "tool-result":
            a.enqueue(
              be("tool_result", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args,
                result: s.result
              })
            );
            break;
          case "error":
            a.enqueue(
              be("error", JSON.stringify(s.error))
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
          const { done: a, value: o } = await n.read();
          if (a)
            break;
          e.write(o);
        }
      } catch (a) {
        throw a;
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
          const { done: a, value: o } = await n.read();
          if (a)
            break;
          e.write(o);
        }
      } catch (a) {
        throw a;
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
    return new ea(this.toAIStream(), e);
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
      headers: wr(e, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, Na = Js;
function Ws(e) {
  const t = new TextEncoder();
  let r = "";
  const n = e || {};
  return new TransformStream({
    async start() {
      n.onStart && await n.onStart();
    },
    async transform(s, a) {
      const o = typeof s == "string" ? s : s.content;
      a.enqueue(t.encode(o)), r += o, n.onToken && await n.onToken(o), n.onText && typeof s == "string" && await n.onText(s);
    },
    async flush() {
      const s = Ks(n);
      n.onCompletion && await n.onCompletion(r), n.onFinal && !s && await n.onFinal(r);
    }
  });
}
function Ks(e) {
  return "experimental_onFunctionCall" in e;
}
function Gs() {
  const e = new TextEncoder(), t = new TextDecoder();
  return new TransformStream({
    transform: async (r, n) => {
      const s = t.decode(r);
      n.enqueue(e.encode(be("text", s)));
    }
  });
}
new TextDecoder("utf-8");
var Ys = {};
Ns(Ys, {
  toAIStream: () => Xs
});
function Xs(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        if (typeof r == "string")
          n.enqueue(r);
        else if (typeof r.content == "string")
          n.enqueue(r.content);
        else {
          const s = r.content;
          for (const a of s)
            a.type === "text" && n.enqueue(a.text);
        }
      }
    })
  ).pipeThrough(Ws(t)).pipeThrough(Gs());
}
function Qs(e, t) {
  const r = e.getReader(), n = t.getReader();
  let s, a, o = !1, i = !1;
  async function c(d) {
    try {
      s == null && (s = r.read());
      const p = await s;
      s = void 0, p.done ? d.close() : d.enqueue(p.value);
    } catch (p) {
      d.error(p);
    }
  }
  async function u(d) {
    try {
      a == null && (a = n.read());
      const p = await a;
      a = void 0, p.done ? d.close() : d.enqueue(p.value);
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
          c(d);
          return;
        }
        s == null && (s = r.read()), a == null && (a = n.read());
        const { result: p, reader: h } = await Promise.race([
          s.then((g) => ({ result: g, reader: r })),
          a.then((g) => ({ result: g, reader: n }))
        ]);
        p.done || d.enqueue(p.value), h === r ? (s = void 0, p.done && (u(d), o = !0)) : (a = void 0, p.done && (i = !0, c(d)));
      } catch (p) {
        d.error(p);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
var ea = class extends Response {
  constructor(e, t, r) {
    let n = e;
    r && (n = Qs(r.stream, e)), super(n, {
      ...t,
      status: 200,
      headers: wr(t, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, ta = l.object({
  type: l.literal("error"),
  error: l.object({
    type: l.string(),
    message: l.string()
  })
}), Wt = Pt({
  errorSchema: ta,
  errorToMessage: (e) => e.error.message
});
async function ra({
  prompt: e,
  downloadImplementation: t = Pr
}) {
  const r = na(e);
  let n;
  const s = [];
  for (let a = 0; a < r.length; a++) {
    const o = r[a], i = o.type;
    switch (i) {
      case "system": {
        if (n != null)
          throw new P({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        n = o.messages.map(({ content: c }) => c).join(`
`);
        break;
      }
      case "user": {
        const c = [];
        for (const { role: u, content: d } of o.messages)
          switch (u) {
            case "user": {
              for (const p of d)
                switch (p.type) {
                  case "text": {
                    c.push({ type: "text", text: p.text });
                    break;
                  }
                  case "image": {
                    let h, g;
                    if (p.image instanceof URL) {
                      const w = await t({
                        url: p.image
                      });
                      h = w.data, g = w.mimeType;
                    } else
                      h = p.image, g = p.mimeType;
                    c.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: g ?? "image/jpeg",
                        data: sr(h)
                      }
                    });
                    break;
                  }
                }
              break;
            }
            case "tool": {
              for (const p of d)
                c.push({
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
        s.push({ role: "user", content: c });
        break;
      }
      case "assistant": {
        if (o.messages.length > 1)
          throw new P({
            functionality: "Multiple assistant messages in block"
          });
        const { content: c } = o.messages[0];
        s.push({
          role: "assistant",
          content: c.map((u, d) => {
            switch (u.type) {
              case "text":
                return a === r.length - 1 && d === o.messages.length - 1 ? { type: "text", text: u.text.trim() } : { type: "text", text: u.text };
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
        const c = i;
        throw new Error(`Unsupported type: ${c}`);
      }
    }
  }
  return {
    system: n,
    messages: s
  };
}
function na(e) {
  const t = [];
  let r;
  for (const { role: n, content: s } of e)
    switch (n) {
      case "system": {
        (r == null ? void 0 : r.type) !== "system" && (r = { type: "system", messages: [] }, t.push(r)), r.messages.push({ role: n, content: s });
        break;
      }
      case "assistant": {
        (r == null ? void 0 : r.type) !== "assistant" && (r = { type: "assistant", messages: [] }, t.push(r)), r.messages.push({ role: n, content: s });
        break;
      }
      case "user": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push({ role: n, content: s });
        break;
      }
      case "tool": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push({ role: n, content: s });
        break;
      }
      default: {
        const a = n;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  return t;
}
function Kt(e) {
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
var sa = class {
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
    topP: s,
    frequencyPenalty: a,
    presencePenalty: o,
    seed: i
  }) {
    const c = e.type, u = [];
    a != null && u.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), o != null && u.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), i != null && u.push({
      type: "unsupported-setting",
      setting: "seed"
    });
    const d = await ra({ prompt: t }), p = {
      // model id:
      model: this.modelId,
      // model specific settings:
      top_k: this.settings.topK,
      // standardized settings:
      max_tokens: r ?? 4096,
      // 4096: max model output tokens
      temperature: n,
      top_p: s,
      // prompt:
      system: d.system,
      messages: d.messages
    };
    switch (c) {
      case "regular":
        return {
          args: { ...p, ...ia(e) },
          warnings: u
        };
      case "object-json":
        throw new P({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: h, description: g, parameters: w } = e.tool;
        return p.messages[p.messages.length - 1].content.push({
          type: "text",
          text: `

Use the '${h}' tool.`
        }), {
          args: {
            ...p,
            tools: [{ name: h, description: g, input_schema: w }]
          },
          warnings: u
        };
      }
      case "object-grammar":
        throw new P({
          functionality: "grammar-mode object generation"
        });
      default: {
        const h = c;
        throw new Error(`Unsupported type: ${h}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { responseHeaders: n, value: s } = await B({
      url: `${this.config.baseURL}/messages`,
      headers: q(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Wt,
      successfulResponseHandler: ye(
        aa
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: a, ...o } = t;
    let i = "";
    for (const u of s.content)
      u.type === "text" && (i += u.text);
    let c;
    if (s.content.some((u) => u.type === "tool_use")) {
      c = [];
      for (const u of s.content)
        u.type === "tool_use" && c.push({
          toolCallType: "function",
          toolCallId: u.id,
          toolName: u.name,
          args: JSON.stringify(u.input)
        });
    }
    return {
      text: i,
      toolCalls: c,
      finishReason: Kt(s.stop_reason),
      usage: {
        promptTokens: s.usage.input_tokens,
        completionTokens: s.usage.output_tokens
      },
      rawCall: { rawPrompt: a, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { responseHeaders: n, value: s } = await B({
      url: `${this.config.baseURL}/messages`,
      headers: q(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: Wt,
      successfulResponseHandler: gt(
        oa
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: a, ...o } = t;
    let i = "other";
    const c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, u = {};
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(d, p) {
            if (!d.success) {
              p.enqueue({ type: "error", error: d.error });
              return;
            }
            const h = d.value;
            switch (h.type) {
              case "ping":
                return;
              case "content_block_start": {
                const g = h.content_block.type;
                switch (g) {
                  case "text":
                    return;
                  case "tool_use": {
                    u[h.index] = {
                      toolCallId: h.content_block.id,
                      toolName: h.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const w = g;
                    throw new Error(
                      `Unsupported content block type: ${w}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (u[h.index] != null) {
                  const g = u[h.index];
                  p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: g.toolCallId,
                    toolName: g.toolName,
                    args: g.jsonText
                  }), delete u[h.index];
                }
                return;
              }
              case "content_block_delta": {
                const g = h.delta.type;
                switch (g) {
                  case "text_delta": {
                    p.enqueue({
                      type: "text-delta",
                      textDelta: h.delta.text
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const w = u[h.index];
                    p.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: w.toolCallId,
                      toolName: w.toolName,
                      argsTextDelta: h.delta.partial_json
                    }), w.jsonText += h.delta.partial_json;
                    return;
                  }
                  default: {
                    const w = g;
                    throw new Error(
                      `Unsupported delta type: ${w}`
                    );
                  }
                }
              }
              case "message_start": {
                c.promptTokens = h.message.usage.input_tokens, c.completionTokens = h.message.usage.output_tokens;
                return;
              }
              case "message_delta": {
                c.completionTokens = h.usage.output_tokens, i = Kt(h.delta.stop_reason);
                return;
              }
              case "message_stop": {
                p.enqueue({ type: "finish", finishReason: i, usage: c });
                return;
              }
              default: {
                const g = h;
                throw new Error(`Unsupported chunk type: ${g}`);
              }
            }
          }
        })
      ),
      rawCall: { rawPrompt: a, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, aa = l.object({
  type: l.literal("message"),
  content: l.array(
    l.discriminatedUnion("type", [
      l.object({
        type: l.literal("text"),
        text: l.string()
      }),
      l.object({
        type: l.literal("tool_use"),
        id: l.string(),
        name: l.string(),
        input: l.unknown()
      })
    ])
  ),
  stop_reason: l.string().optional().nullable(),
  usage: l.object({
    input_tokens: l.number(),
    output_tokens: l.number()
  })
}), oa = l.discriminatedUnion("type", [
  l.object({
    type: l.literal("message_start"),
    message: l.object({
      usage: l.object({
        input_tokens: l.number(),
        output_tokens: l.number()
      })
    })
  }),
  l.object({
    type: l.literal("content_block_start"),
    index: l.number(),
    content_block: l.discriminatedUnion("type", [
      l.object({
        type: l.literal("text"),
        text: l.string()
      }),
      l.object({
        type: l.literal("tool_use"),
        id: l.string(),
        name: l.string()
      })
    ])
  }),
  l.object({
    type: l.literal("content_block_delta"),
    index: l.number(),
    delta: l.discriminatedUnion("type", [
      l.object({
        type: l.literal("input_json_delta"),
        partial_json: l.string()
      }),
      l.object({
        type: l.literal("text_delta"),
        text: l.string()
      })
    ])
  }),
  l.object({
    type: l.literal("content_block_stop"),
    index: l.number()
  }),
  l.object({
    type: l.literal("message_delta"),
    delta: l.object({ stop_reason: l.string().optional().nullable() }),
    usage: l.object({ output_tokens: l.number() })
  }),
  l.object({
    type: l.literal("message_stop")
  }),
  l.object({
    type: l.literal("ping")
  })
]);
function ia(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0;
  if (r == null)
    return { tools: void 0, tool_choice: void 0 };
  const n = r.map((o) => ({
    name: o.name,
    description: o.description,
    input_schema: o.parameters
  })), s = e.toolChoice;
  if (s == null)
    return { tools: n, tool_choice: void 0 };
  const a = s.type;
  switch (a) {
    case "auto":
      return { tools: n, tool_choice: { type: "auto" } };
    case "required":
      return { tools: n, tool_choice: { type: "any" } };
    case "none":
      return { tools: void 0, tool_choice: void 0 };
    case "tool":
      return {
        tools: n,
        tool_choice: { type: "tool", name: s.toolName }
      };
    default: {
      const o = a;
      throw new Error(`Unsupported tool choice type: ${o}`);
    }
  }
}
function la(e = {}) {
  var t, r;
  const n = (r = Ot((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.anthropic.com/v1", s = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": Nt({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), a = (i, c = {}) => new sa(i, c, {
    provider: "anthropic.messages",
    baseURL: n,
    headers: s,
    fetch: e.fetch
  }), o = function(i, c) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return a(i, c);
  };
  return o.languageModel = a, o.chat = a, o.messages = a, o;
}
la();
function ca(e) {
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
          content: n.map((s) => {
            switch (s.type) {
              case "text":
                return s.text;
              case "image":
                throw new P({
                  functionality: "image-part"
                });
            }
          }).join("")
        });
        break;
      }
      case "assistant": {
        let s = "";
        const a = [];
        for (const o of n)
          switch (o.type) {
            case "text": {
              s += o.text;
              break;
            }
            case "tool-call": {
              a.push({
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
          content: s,
          tool_calls: a.length > 0 ? a.map(({ function: { name: o, arguments: i } }) => ({
            id: "null",
            type: "function",
            function: { name: o, arguments: i }
          })) : void 0
        });
        break;
      }
      case "tool": {
        for (const s of n)
          t.push({
            role: "tool",
            name: s.toolName,
            content: JSON.stringify(s.result)
          });
        break;
      }
      default: {
        const s = r;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  return t;
}
function Gt(e) {
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
var ua = l.object({
  object: l.literal("error"),
  message: l.string(),
  type: l.string(),
  param: l.string().nullable(),
  code: l.string().nullable()
}), St = Pt({
  errorSchema: ua,
  errorToMessage: (e) => e.message
}), da = class {
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
    topP: s,
    frequencyPenalty: a,
    presencePenalty: o,
    seed: i
  }) {
    const c = e.type, u = [];
    a != null && u.push({
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
      top_p: s,
      random_seed: i,
      // messages:
      messages: ca(t)
    };
    switch (c) {
      case "regular":
        return {
          args: { ...d, ...fa(e) },
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
        throw new P({
          functionality: "object-grammar mode"
        });
      default: {
        const p = c;
        throw new Error(`Unsupported type: ${p}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const { args: n, warnings: s } = this.getArgs(e), { responseHeaders: a, value: o } = await B({
      url: `${this.config.baseURL}/chat/completions`,
      headers: q(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: St,
      successfulResponseHandler: ye(
        pa
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...c } = n, u = o.choices[0];
    return {
      text: (t = u.message.content) != null ? t : void 0,
      toolCalls: (r = u.message.tool_calls) == null ? void 0 : r.map((d) => ({
        toolCallType: "function",
        toolCallId: this.config.generateId(),
        toolName: d.function.name,
        args: d.function.arguments
      })),
      finishReason: Gt(u.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: c },
      rawResponse: { headers: a },
      warnings: s
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: s } = await B({
      url: `${this.config.baseURL}/chat/completions`,
      headers: q(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: St,
      successfulResponseHandler: gt(
        ma
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: a, ...o } = t;
    let i = "other", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    };
    const u = this.config.generateId;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(d, p) {
            if (!d.success) {
              p.enqueue({ type: "error", error: d.error });
              return;
            }
            const h = d.value;
            h.usage != null && (c = {
              promptTokens: h.usage.prompt_tokens,
              completionTokens: h.usage.completion_tokens
            });
            const g = h.choices[0];
            if ((g == null ? void 0 : g.finish_reason) != null && (i = Gt(g.finish_reason)), (g == null ? void 0 : g.delta) == null)
              return;
            const w = g.delta;
            if (w.content != null && p.enqueue({
              type: "text-delta",
              textDelta: w.content
            }), w.tool_calls != null)
              for (const x of w.tool_calls) {
                const j = u();
                p.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: j,
                  toolName: x.function.name,
                  argsTextDelta: x.function.arguments
                }), p.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: j,
                  toolName: x.function.name,
                  args: x.function.arguments
                });
              }
          },
          flush(d) {
            d.enqueue({ type: "finish", finishReason: i, usage: c });
          }
        })
      ),
      rawCall: { rawPrompt: a, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, pa = l.object({
  choices: l.array(
    l.object({
      message: l.object({
        role: l.literal("assistant"),
        content: l.string().nullable(),
        tool_calls: l.array(
          l.object({
            function: l.object({
              name: l.string(),
              arguments: l.string()
            })
          })
        ).optional().nullable()
      }),
      index: l.number(),
      finish_reason: l.string().optional().nullable()
    })
  ),
  object: l.literal("chat.completion"),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  })
}), ma = l.object({
  object: l.literal("chat.completion.chunk"),
  choices: l.array(
    l.object({
      delta: l.object({
        role: l.enum(["assistant"]).optional(),
        content: l.string().nullable().optional(),
        tool_calls: l.array(
          l.object({
            function: l.object({ name: l.string(), arguments: l.string() })
          })
        ).optional().nullable()
      }),
      finish_reason: l.string().nullable().optional(),
      index: l.number()
    })
  ),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  }).optional().nullable()
});
function fa(e) {
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
  })), s = e.toolChoice;
  if (s == null)
    return { tools: n, tool_choice: void 0 };
  const a = s.type;
  switch (a) {
    case "auto":
    case "none":
      return { tools: n, tool_choice: a };
    case "required":
      return { tools: n, tool_choice: "any" };
    case "tool":
      return {
        tools: n.filter(
          (o) => o.function.name === s.toolName
        ),
        tool_choice: "any"
      };
    default: {
      const o = a;
      throw new Error(`Unsupported tool choice type: ${o}`);
    }
  }
}
var ha = class {
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
      throw new Qt({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: s } = await B({
      url: `${this.config.baseURL}/embeddings`,
      headers: q(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: St,
      successfulResponseHandler: ye(
        ga
      ),
      abortSignal: t,
      fetch: this.config.fetch
    });
    return {
      embeddings: s.data.map((a) => a.embedding),
      usage: s.usage ? { tokens: s.usage.prompt_tokens } : void 0,
      rawResponse: { headers: n }
    };
  }
}, ga = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function ya(e = {}) {
  var t, r;
  const n = (r = Ot((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.mistral.ai/v1", s = () => ({
    Authorization: `Bearer ${Nt({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (c, u = {}) => {
    var d;
    return new da(c, u, {
      provider: "mistral.chat",
      baseURL: n,
      headers: s,
      generateId: (d = e.generateId) != null ? d : Te,
      fetch: e.fetch
    });
  }, o = (c, u = {}) => new ha(c, u, {
    provider: "mistral.embedding",
    baseURL: n,
    headers: s,
    fetch: e.fetch
  }), i = function(c, u) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return a(c, u);
  };
  return i.languageModel = a, i.chat = a, i.embedding = o, i.textEmbedding = o, i;
}
ya();
function va(e) {
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
          content: n.map((s) => {
            var a;
            switch (s.type) {
              case "text":
                return { type: "text", text: s.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: {
                    url: s.image instanceof URL ? s.image.toString() : `data:${(a = s.mimeType) != null ? a : "image/jpeg"};base64,${sr(s.image)}`
                  }
                };
            }
          })
        });
        break;
      }
      case "assistant": {
        let s = "";
        const a = [];
        for (const o of n)
          switch (o.type) {
            case "text": {
              s += o.text;
              break;
            }
            case "tool-call": {
              a.push({
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
          content: s,
          tool_calls: a.length > 0 ? a : void 0
        });
        break;
      }
      case "tool": {
        for (const s of n)
          t.push({
            role: "tool",
            tool_call_id: s.toolCallId,
            content: JSON.stringify(s.result)
          });
        break;
      }
      default: {
        const s = r;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  return t;
}
function Yt(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.content) == null ? void 0 : t.map(({ token: n, logprob: s, top_logprobs: a }) => ({
    token: n,
    logprob: s,
    topLogprobs: a ? a.map(({ token: o, logprob: i }) => ({
      token: o,
      logprob: i
    })) : []
  }))) != null ? r : void 0;
}
function ft(e) {
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
var Zt = l.object({
  error: l.object({
    message: l.string(),
    type: l.string(),
    param: l.any().nullable(),
    code: l.string().nullable()
  })
}), Ge = Pt({
  errorSchema: Zt,
  errorToMessage: (e) => e.error.message
}), _a = class {
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
    topP: s,
    frequencyPenalty: a,
    presencePenalty: o,
    seed: i
  }) {
    const c = e.type, u = {
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
      top_p: s,
      frequency_penalty: a,
      presence_penalty: o,
      seed: i,
      // messages:
      messages: va(t)
    };
    switch (c) {
      case "regular":
        return { ...u, ...xa(e) };
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
        throw new P({
          functionality: "object-grammar mode"
        });
      default: {
        const d = c;
        throw new Error(`Unsupported type: ${d}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const n = this.getArgs(e), { responseHeaders: s, value: a } = await B({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: q(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Ge,
      successfulResponseHandler: ye(
        ba
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = n, c = a.choices[0];
    return {
      text: (t = c.message.content) != null ? t : void 0,
      toolCalls: (r = c.message.tool_calls) == null ? void 0 : r.map((u) => {
        var d;
        return {
          toolCallType: "function",
          toolCallId: (d = u.id) != null ? d : Te(),
          toolName: u.function.name,
          args: u.function.arguments
        };
      }),
      finishReason: ft(c.finish_reason),
      usage: {
        promptTokens: a.usage.prompt_tokens,
        completionTokens: a.usage.completion_tokens
      },
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: s },
      warnings: [],
      logprobs: Yt(c.logprobs)
    };
  }
  async doStream(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await B({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: q(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: Ge,
      successfulResponseHandler: gt(
        wa
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...a } = t, o = [];
    let i = "other", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, u;
    return {
      stream: n.pipeThrough(
        new TransformStream({
          transform(d, p) {
            var h, g, w, x, j, A, $, Xe, J, ve, $t, Mt;
            if (!d.success) {
              i = "error", p.enqueue({ type: "error", error: d.error });
              return;
            }
            const ce = d.value;
            if ("error" in ce) {
              i = "error", p.enqueue({ type: "error", error: ce.error });
              return;
            }
            ce.usage != null && (c = {
              promptTokens: ce.usage.prompt_tokens,
              completionTokens: ce.usage.completion_tokens
            });
            const Q = ce.choices[0];
            if ((Q == null ? void 0 : Q.finish_reason) != null && (i = ft(Q.finish_reason)), (Q == null ? void 0 : Q.delta) == null)
              return;
            const Qe = Q.delta;
            Qe.content != null && p.enqueue({
              type: "text-delta",
              textDelta: Qe.content
            });
            const vt = Yt(
              Q == null ? void 0 : Q.logprobs
            );
            if (vt != null && vt.length && (u === void 0 && (u = []), u.push(...vt)), Qe.tool_calls != null)
              for (const R of Qe.tool_calls) {
                const et = R.index;
                if (o[et] == null) {
                  if (R.type !== "function")
                    throw new bt({
                      data: R,
                      message: "Expected 'function' type."
                    });
                  if (R.id == null)
                    throw new bt({
                      data: R,
                      message: "Expected 'id' to be a string."
                    });
                  if (((h = R.function) == null ? void 0 : h.name) == null)
                    throw new bt({
                      data: R,
                      message: "Expected 'function.name' to be a string."
                    });
                  o[et] = {
                    id: R.id,
                    type: "function",
                    function: {
                      name: R.function.name,
                      arguments: (g = R.function.arguments) != null ? g : ""
                    }
                  };
                  const W = o[et];
                  ((w = W.function) == null ? void 0 : w.name) != null && ((x = W.function) == null ? void 0 : x.arguments) != null && qt(W.function.arguments) && (p.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: W.id,
                    toolName: W.function.name,
                    argsTextDelta: W.function.arguments
                  }), p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (j = W.id) != null ? j : Te(),
                    toolName: W.function.name,
                    args: W.function.arguments
                  }));
                  continue;
                }
                const F = o[et];
                ((A = R.function) == null ? void 0 : A.arguments) != null && (F.function.arguments += (Xe = ($ = R.function) == null ? void 0 : $.arguments) != null ? Xe : ""), p.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: F.id,
                  toolName: F.function.name,
                  argsTextDelta: (J = R.function.arguments) != null ? J : ""
                }), ((ve = F.function) == null ? void 0 : ve.name) != null && (($t = F.function) == null ? void 0 : $t.arguments) != null && qt(F.function.arguments) && p.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (Mt = F.id) != null ? Mt : Te(),
                  toolName: F.function.name,
                  args: F.function.arguments
                });
              }
          },
          flush(d) {
            d.enqueue({
              type: "finish",
              finishReason: i,
              logprobs: u,
              usage: c
            });
          }
        })
      ),
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
}, ba = l.object({
  choices: l.array(
    l.object({
      message: l.object({
        role: l.literal("assistant"),
        content: l.string().nullable().optional(),
        tool_calls: l.array(
          l.object({
            id: l.string().optional().nullable(),
            type: l.literal("function"),
            function: l.object({
              name: l.string(),
              arguments: l.string()
            })
          })
        ).optional()
      }),
      index: l.number(),
      logprobs: l.object({
        content: l.array(
          l.object({
            token: l.string(),
            logprob: l.number(),
            top_logprobs: l.array(
              l.object({
                token: l.string(),
                logprob: l.number()
              })
            )
          })
        ).nullable()
      }).nullable().optional(),
      finish_reason: l.string().optional().nullable()
    })
  ),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  })
}), wa = l.union([
  l.object({
    choices: l.array(
      l.object({
        delta: l.object({
          role: l.enum(["assistant"]).optional(),
          content: l.string().nullish(),
          tool_calls: l.array(
            l.object({
              index: l.number(),
              id: l.string().nullish(),
              type: l.literal("function").optional(),
              function: l.object({
                name: l.string().nullish(),
                arguments: l.string().nullish()
              })
            })
          ).nullish()
        }).nullish(),
        logprobs: l.object({
          content: l.array(
            l.object({
              token: l.string(),
              logprob: l.number(),
              top_logprobs: l.array(
                l.object({
                  token: l.string(),
                  logprob: l.number()
                })
              )
            })
          ).nullable()
        }).nullish(),
        finish_reason: l.string().nullable().optional(),
        index: l.number()
      })
    ),
    usage: l.object({
      prompt_tokens: l.number(),
      completion_tokens: l.number()
    }).nullish()
  }),
  Zt
]);
function xa(e) {
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
  })), s = e.toolChoice;
  if (s == null)
    return { tools: n, tool_choice: void 0 };
  const a = s.type;
  switch (a) {
    case "auto":
    case "none":
    case "required":
      return { tools: n, tool_choice: a };
    case "tool":
      return {
        tools: n,
        tool_choice: {
          type: "function",
          function: {
            name: s.toolName
          }
        }
      };
    default: {
      const o = a;
      throw new Error(`Unsupported tool choice type: ${o}`);
    }
  }
}
function ka({
  prompt: e,
  inputFormat: t,
  user: r = "user",
  assistant: n = "assistant"
}) {
  if (t === "prompt" && e.length === 1 && e[0].role === "user" && e[0].content.length === 1 && e[0].content[0].type === "text")
    return { prompt: e[0].content[0].text };
  let s = "";
  e[0].role === "system" && (s += `${e[0].content}

`, e = e.slice(1));
  for (const { role: a, content: o } of e)
    switch (a) {
      case "system":
        throw new rt({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const i = o.map((c) => {
          switch (c.type) {
            case "text":
              return c.text;
            case "image":
              throw new P({
                functionality: "images"
              });
          }
        }).join("");
        s += `${r}:
${i}

`;
        break;
      }
      case "assistant": {
        const i = o.map((c) => {
          switch (c.type) {
            case "text":
              return c.text;
            case "tool-call":
              throw new P({
                functionality: "tool-call messages"
              });
          }
        }).join("");
        s += `${n}:
${i}

`;
        break;
      }
      case "tool":
        throw new P({
          functionality: "tool messages"
        });
      default: {
        const i = a;
        throw new Error(`Unsupported role: ${i}`);
      }
    }
  return s += `${n}:
`, {
    prompt: s,
    stopSequences: [`
${r}:`]
  };
}
function Xt(e) {
  return e == null ? void 0 : e.tokens.map((t, r) => ({
    token: t,
    logprob: e.token_logprobs[r],
    topLogprobs: e.top_logprobs ? Object.entries(e.top_logprobs[r]).map(
      ([n, s]) => ({
        token: n,
        logprob: s
      })
    ) : []
  }));
}
var Ta = class {
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
    temperature: s,
    topP: a,
    frequencyPenalty: o,
    presencePenalty: i,
    seed: c
  }) {
    var u;
    const d = e.type, { prompt: p, stopSequences: h } = ka({ prompt: r, inputFormat: t }), g = {
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
      temperature: s,
      top_p: a,
      frequency_penalty: o,
      presence_penalty: i,
      seed: c,
      // prompt:
      prompt: p,
      // stop sequences:
      stop: h
    };
    switch (d) {
      case "regular": {
        if ((u = e.tools) != null && u.length)
          throw new P({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new P({
            functionality: "toolChoice"
          });
        return g;
      }
      case "object-json":
        throw new P({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new P({
          functionality: "object-tool mode"
        });
      case "object-grammar":
        throw new P({
          functionality: "object-grammar mode"
        });
      default: {
        const w = d;
        throw new Error(`Unsupported type: ${w}`);
      }
    }
  }
  async doGenerate(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await B({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: q(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Ge,
      successfulResponseHandler: ye(
        Ea
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...a } = t, o = n.choices[0];
    return {
      text: o.text,
      usage: {
        promptTokens: n.usage.prompt_tokens,
        completionTokens: n.usage.completion_tokens
      },
      finishReason: ft(o.finish_reason),
      logprobs: Xt(o.logprobs),
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
  async doStream(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await B({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: q(this.config.headers(), e.headers),
      body: {
        ...this.getArgs(e),
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: Ge,
      successfulResponseHandler: gt(
        Sa
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...a } = t;
    let o = "other", i = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, c;
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
            const h = p.choices[0];
            (h == null ? void 0 : h.finish_reason) != null && (o = ft(h.finish_reason)), (h == null ? void 0 : h.text) != null && d.enqueue({
              type: "text-delta",
              textDelta: h.text
            });
            const g = Xt(
              h == null ? void 0 : h.logprobs
            );
            g != null && g.length && (c === void 0 && (c = []), c.push(...g));
          },
          flush(u) {
            u.enqueue({
              type: "finish",
              finishReason: o,
              logprobs: c,
              usage: i
            });
          }
        })
      ),
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
}, Ea = l.object({
  choices: l.array(
    l.object({
      text: l.string(),
      finish_reason: l.string(),
      logprobs: l.object({
        tokens: l.array(l.string()),
        token_logprobs: l.array(l.number()),
        top_logprobs: l.array(l.record(l.string(), l.number())).nullable()
      }).nullable().optional()
    })
  ),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  })
}), Sa = l.union([
  l.object({
    choices: l.array(
      l.object({
        text: l.string(),
        finish_reason: l.string().nullish(),
        index: l.number(),
        logprobs: l.object({
          tokens: l.array(l.string()),
          token_logprobs: l.array(l.number()),
          top_logprobs: l.array(l.record(l.string(), l.number())).nullable()
        }).nullable().optional()
      })
    ),
    usage: l.object({
      prompt_tokens: l.number(),
      completion_tokens: l.number()
    }).optional().nullable()
  }),
  Zt
]), Ca = class {
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
      throw new Qt({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: s } = await B({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: q(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: Ge,
      successfulResponseHandler: ye(
        Ia
      ),
      abortSignal: r,
      fetch: this.config.fetch
    });
    return {
      embeddings: s.data.map((a) => a.embedding),
      usage: s.usage ? { tokens: s.usage.prompt_tokens } : void 0,
      rawResponse: { headers: n }
    };
  }
}, Ia = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function ja(e = {}) {
  var t, r, n;
  const s = (r = Ot((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.openai.com/v1", a = (n = e.compatibility) != null ? n : "compatible", o = () => ({
    Authorization: `Bearer ${Nt({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), i = (h, g = {}) => new _a(h, g, {
    provider: "openai.chat",
    url: ({ path: w }) => `${s}${w}`,
    headers: o,
    compatibility: a,
    fetch: e.fetch
  }), c = (h, g = {}) => new Ta(h, g, {
    provider: "openai.completion",
    url: ({ path: w }) => `${s}${w}`,
    headers: o,
    compatibility: a,
    fetch: e.fetch
  }), u = (h, g = {}) => new Ca(h, g, {
    provider: "openai.embedding",
    url: ({ path: w }) => `${s}${w}`,
    headers: o,
    fetch: e.fetch
  }), d = (h, g) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return h === "gpt-3.5-turbo-instruct" ? c(
      h,
      g
    ) : i(h, g);
  }, p = function(h, g) {
    return d(h, g);
  };
  return p.languageModel = d, p.chat = i, p.completion = c, p.embedding = u, p.textEmbedding = u, p;
}
ja({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  la as createAnthropic,
  ya as createMistral,
  ja as createOpenAI,
  Na as experimental_streamText
};
