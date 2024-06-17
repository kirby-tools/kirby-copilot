var U = class extends Error {
  constructor({
    message: t,
    url: e,
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
    data: l
  }) {
    super(t), this.name = "AI_APICallError", this.url = e, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = s, this.responseBody = a, this.cause = o, this.isRetryable = i, this.data = l;
  }
  static isAPICallError(t) {
    return t instanceof Error && t.name === "AI_APICallError" && typeof t.url == "string" && typeof t.requestBodyValues == "object" && (t.statusCode == null || typeof t.statusCode == "number") && (t.responseHeaders == null || typeof t.responseHeaders == "object") && (t.responseBody == null || typeof t.responseBody == "string") && (t.cause == null || typeof t.cause == "object") && typeof t.isRetryable == "boolean" && (t.data == null || typeof t.data == "object");
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
}, yr = class extends Error {
  constructor({ message: t = "Empty response body" } = {}) {
    super(t), this.name = "AI_EmptyResponseBodyError";
  }
  static isEmptyResponseBodyError(t) {
    return t instanceof Error && t.name === "AI_EmptyResponseBodyError";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack
    };
  }
}, F = class extends Error {
  constructor({
    parameter: t,
    value: e,
    message: r
  }) {
    super(`Invalid argument for parameter ${t}: ${r}`), this.name = "AI_InvalidArgumentError", this.parameter = t, this.value = e;
  }
  static isInvalidArgumentError(t) {
    return t instanceof Error && t.name === "AI_InvalidArgumentError" && typeof t.parameter == "string" && typeof t.value == "string";
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
}, Ot = class extends Error {
  constructor({
    content: t,
    cause: e,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof t}.`
  }) {
    super(r), this.name = "AI_InvalidDataContentError", this.cause = e, this.content = t;
  }
  static isInvalidDataContentError(t) {
    return t instanceof Error && t.name === "AI_InvalidDataContentError" && t.content != null;
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
}, vt = class extends Error {
  constructor({ prompt: t, message: e }) {
    super(`Invalid prompt: ${e}`), this.name = "AI_InvalidPromptError", this.prompt = t;
  }
  static isInvalidPromptError(t) {
    return t instanceof Error && t.name === "AI_InvalidPromptError" && prompt != null;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      prompt: this.prompt
    };
  }
}, gt = class extends Error {
  constructor({
    data: t,
    message: e = `Invalid response data: ${JSON.stringify(t)}.`
  }) {
    super(e), this.name = "AI_InvalidResponseDataError", this.data = t;
  }
  static isInvalidResponseDataError(t) {
    return t instanceof Error && t.name === "AI_InvalidResponseDataError" && t.data != null;
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
function Tt(t) {
  return t == null ? "unknown error" : typeof t == "string" ? t : t instanceof Error ? t.message : JSON.stringify(t);
}
var vr = class extends Error {
  constructor({
    toolArgs: t,
    toolName: e,
    cause: r,
    message: n = `Invalid arguments for tool ${e}: ${Tt(
      r
    )}`
  }) {
    super(n), this.name = "AI_InvalidToolArgumentsError", this.toolArgs = t, this.toolName = e, this.cause = r;
  }
  static isInvalidToolArgumentsError(t) {
    return t instanceof Error && t.name === "AI_InvalidToolArgumentsError" && typeof t.toolName == "string" && typeof t.toolArgs == "string";
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
}, rt = class extends Error {
  constructor({ text: t, cause: e }) {
    super(
      `JSON parsing failed: Text: ${t}.
Error message: ${Tt(e)}`
    ), this.name = "AI_JSONParseError", this.cause = e, this.text = t;
  }
  static isJSONParseError(t) {
    return t instanceof Error && t.name === "AI_JSONParseError" && typeof t.text == "string" && typeof t.cause == "string";
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
}, et = class extends Error {
  constructor({ message: t }) {
    super(t), this.name = "AI_LoadAPIKeyError";
  }
  static isLoadAPIKeyError(t) {
    return t instanceof Error && t.name === "AI_LoadAPIKeyError";
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message
    };
  }
}, nt = class extends Error {
  constructor({
    toolName: t,
    availableTools: e = void 0,
    message: r = `Model tried to call unavailable tool '${t}'. ${e === void 0 ? "No tools are available." : `Available tools: ${e.join(", ")}.`}`
  }) {
    super(r), this.name = "AI_NoSuchToolError", this.toolName = t, this.availableTools = e;
  }
  static isNoSuchToolError(t) {
    return t instanceof Error && t.name === "AI_NoSuchToolError" && "toolName" in t && t.toolName != null && typeof t.name == "string";
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
}, Rt = class extends Error {
  constructor({
    message: t,
    reason: e,
    errors: r
  }) {
    super(t), this.name = "AI_RetryError", this.reason = e, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isRetryError(t) {
    return t instanceof Error && t.name === "AI_RetryError" && typeof t.reason == "string" && Array.isArray(t.errors);
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
}, Ht = class extends Error {
  constructor(t) {
    super(
      `Too many values for a single embedding call. The ${t.provider} model "${t.modelId}" can only embed up to ${t.maxEmbeddingsPerCall} values per call, but ${t.values.length} values were provided.`
    ), this.name = "AI_TooManyEmbeddingValuesForCallError", this.provider = t.provider, this.modelId = t.modelId, this.maxEmbeddingsPerCall = t.maxEmbeddingsPerCall, this.values = t.values;
  }
  static isInvalidPromptError(t) {
    return t instanceof Error && t.name === "AI_TooManyEmbeddingValuesForCallError" && "provider" in t && typeof t.provider == "string" && "modelId" in t && typeof t.modelId == "string" && "maxEmbeddingsPerCall" in t && typeof t.maxEmbeddingsPerCall == "number" && "values" in t && Array.isArray(t.values);
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
}, we = class extends Error {
  constructor({ value: t, cause: e }) {
    super(
      `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Tt(e)}`
    ), this.name = "AI_TypeValidationError", this.cause = e, this.value = t;
  }
  static isTypeValidationError(t) {
    return t instanceof Error && t.name === "AI_TypeValidationError";
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
}, M = class extends Error {
  constructor({ functionality: t }) {
    super(`'${t}' functionality not supported.`), this.name = "AI_UnsupportedFunctionalityError", this.functionality = t;
  }
  static isUnsupportedFunctionalityError(t) {
    return t instanceof Error && t.name === "AI_UnsupportedFunctionalityError" && typeof t.functionality == "string";
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
let _r = (t, e = 21) => (r = e) => {
  let n = "", s = r;
  for (; s--; )
    n += t[Math.random() * t.length | 0];
  return n;
};
function br(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var he = { exports: {} };
const wr = typeof Buffer < "u", Zt = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, Mt = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Ft(t, e, r) {
  r == null && e !== null && typeof e == "object" && (r = e, e = void 0), wr && Buffer.isBuffer(t) && (t = t.toString()), t && t.charCodeAt(0) === 65279 && (t = t.slice(1));
  const n = JSON.parse(t, e);
  if (n === null || typeof n != "object")
    return n;
  const s = r && r.protoAction || "error", a = r && r.constructorAction || "error";
  if (s === "ignore" && a === "ignore")
    return n;
  if (s !== "ignore" && a !== "ignore") {
    if (Zt.test(t) === !1 && Mt.test(t) === !1)
      return n;
  } else if (s !== "ignore" && a === "ignore") {
    if (Zt.test(t) === !1)
      return n;
  } else if (Mt.test(t) === !1)
    return n;
  return Wt(n, { protoAction: s, constructorAction: a, safe: r && r.safe });
}
function Wt(t, { protoAction: e = "error", constructorAction: r = "error", safe: n } = {}) {
  let s = [t];
  for (; s.length; ) {
    const a = s;
    s = [];
    for (const o of a) {
      if (e !== "ignore" && Object.prototype.hasOwnProperty.call(o, "__proto__")) {
        if (n === !0)
          return null;
        if (e === "error")
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
        l && typeof l == "object" && s.push(l);
      }
    }
  }
  return t;
}
function St(t, e, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Ft(t, e, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function xr(t, e) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Ft(t, e, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
he.exports = St;
he.exports.default = St;
he.exports.parse = St;
he.exports.safeParse = xr;
he.exports.scan = Wt;
var kr = he.exports;
const Et = /* @__PURE__ */ br(kr);
function Tr(t) {
  let e, r, n, s, a, o, i;
  return l(), {
    feed: u,
    reset: l
  };
  function l() {
    e = !0, r = "", n = 0, s = -1, a = void 0, o = void 0, i = "";
  }
  function u(f) {
    r = r ? r + f : f, e && Sr(r) && (r = r.slice(Gt.length)), e = !1;
    const v = r.length;
    let y = 0, E = !1;
    for (; y < v; ) {
      E && (r[y] === `
` && ++y, E = !1);
      let x = -1, N = s, j;
      for (let Z = n; x < 0 && Z < v; ++Z)
        j = r[Z], j === ":" && N < 0 ? N = Z - y : j === "\r" ? (E = !0, x = Z - y) : j === `
` && (x = Z - y);
      if (x < 0) {
        n = v - y, s = N;
        break;
      } else
        n = 0, s = -1;
      d(r, y, N, x), y += x + 1;
    }
    y === v ? r = "" : y > 0 && (r = r.slice(y));
  }
  function d(f, v, y, E) {
    if (E === 0) {
      i.length > 0 && (t({
        type: "event",
        id: a,
        event: o || void 0,
        data: i.slice(0, -1)
        // remove trailing newline
      }), i = "", a = void 0), o = void 0;
      return;
    }
    const x = y < 0, N = f.slice(v, v + (x ? E : y));
    let j = 0;
    x ? j = E : f[v + y + 1] === " " ? j = y + 2 : j = y + 1;
    const Z = v + j, Ye = E - j, z = f.slice(Z, Z + Ye).toString();
    if (N === "data")
      i += z ? "".concat(z, `
`) : `
`;
    else if (N === "event")
      o = z;
    else if (N === "id" && !z.includes("\0"))
      a = z;
    else if (N === "retry") {
      const ge = parseInt(z, 10);
      Number.isNaN(ge) || t({
        type: "reconnect-interval",
        value: ge
      });
    }
  }
}
const Gt = [239, 187, 191];
function Sr(t) {
  return Gt.every((e, r) => t.charCodeAt(r) === e);
}
class Er extends TransformStream {
  constructor() {
    let e;
    super({
      start(r) {
        e = Tr((n) => {
          n.type === "event" && r.enqueue(n);
        });
      },
      transform(r) {
        e.feed(r);
      }
    });
  }
}
function mt(t) {
  const e = {};
  return t.headers.forEach((r, n) => {
    e[n] = r;
  }), e;
}
var xe = _r(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function Kt(t) {
  return t == null ? "unknown error" : typeof t == "string" ? t : t instanceof Error ? t.message : JSON.stringify(t);
}
function tt(t) {
  return t instanceof DOMException && (t.name === "AbortError" || t.name === "TimeoutError");
}
function Yt({
  apiKey: t,
  environmentVariableName: e,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof t == "string")
    return t;
  if (t != null)
    throw new et({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new et({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (t = process.env[e], t == null)
    throw new et({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${e} environment variable.`
    });
  if (typeof t != "string")
    throw new et({
      message: `${n} API key must be a string. The value of the ${e} environment variable is not a string.`
    });
  return t;
}
function Ir({
  value: t,
  schema: e
}) {
  try {
    return e.parse(t);
  } catch (r) {
    throw new we({ value: t, cause: r });
  }
}
function Cr({
  value: t,
  schema: e
}) {
  try {
    const r = e.safeParse(t);
    return r.success ? {
      success: !0,
      value: r.data
    } : {
      success: !1,
      error: new we({
        value: t,
        cause: r.error
      })
    };
  } catch (r) {
    return {
      success: !1,
      error: we.isTypeValidationError(r) ? r : new we({ value: t, cause: r })
    };
  }
}
function Nr({
  text: t,
  schema: e
}) {
  try {
    const r = Et.parse(t);
    return e == null ? r : Ir({ value: r, schema: e });
  } catch (r) {
    throw rt.isJSONParseError(r) || we.isTypeValidationError(r) ? r : new rt({ text: t, cause: r });
  }
}
function It({
  text: t,
  schema: e
}) {
  try {
    const r = Et.parse(t);
    return e == null ? {
      success: !0,
      value: r
    } : Cr({ value: r, schema: e });
  } catch (r) {
    return {
      success: !1,
      error: rt.isJSONParseError(r) ? r : new rt({ text: t, cause: r })
    };
  }
}
function $t(t) {
  try {
    return Et.parse(t), !0;
  } catch {
    return !1;
  }
}
var Ar = () => fetch, Q = async ({
  url: t,
  headers: e,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}) => jr({
  url: t,
  headers: {
    ...e,
    "Content-Type": "application/json"
  },
  body: {
    content: JSON.stringify(r),
    values: r
  },
  failedResponseHandler: n,
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}), jr = async ({
  url: t,
  headers: e = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: s,
  abortSignal: a,
  fetch: o = Ar()
}) => {
  try {
    const i = Object.fromEntries(
      Object.entries(e).filter(([d, f]) => f != null)
    ), l = await o(t, {
      method: "POST",
      headers: i,
      body: r.content,
      signal: a
    }), u = mt(l);
    if (!l.ok) {
      let d;
      try {
        d = await s({
          response: l,
          url: t,
          requestBodyValues: r.values
        });
      } catch (f) {
        throw tt(f) || U.isAPICallError(f) ? f : new U({
          message: "Failed to process error response",
          cause: f,
          statusCode: l.status,
          url: t,
          responseHeaders: u,
          requestBodyValues: r.values
        });
      }
      throw d.value;
    }
    try {
      return await n({
        response: l,
        url: t,
        requestBodyValues: r.values
      });
    } catch (d) {
      throw d instanceof Error && (tt(d) || U.isAPICallError(d)) ? d : new U({
        message: "Failed to process successful response",
        cause: d,
        statusCode: l.status,
        url: t,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (tt(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const l = i.cause;
      if (l != null)
        throw new U({
          message: `Cannot connect to API: ${l.message}`,
          cause: l,
          url: t,
          requestBodyValues: r.values,
          isRetryable: !0
          // retry when network error
        });
    }
    throw i;
  }
}, Xt = ({
  errorSchema: t,
  errorToMessage: e,
  isRetryable: r
}) => async ({ response: n, url: s, requestBodyValues: a }) => {
  const o = await n.text(), i = mt(n);
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
    const l = Nr({
      text: o,
      schema: t
    });
    return {
      responseHeaders: i,
      value: new U({
        message: e(l),
        url: s,
        requestBodyValues: a,
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
}, Ct = (t) => async ({ response: e }) => {
  const r = mt(e);
  if (e.body == null)
    throw new yr({});
  return {
    responseHeaders: r,
    value: e.body.pipeThrough(new TextDecoderStream()).pipeThrough(new Er()).pipeThrough(
      new TransformStream({
        transform({ data: n }, s) {
          n !== "[DONE]" && s.enqueue(
            It({
              text: n,
              schema: t
            })
          );
        }
      })
    )
  };
}, Ge = (t) => async ({ response: e, url: r, requestBodyValues: n }) => {
  const s = await e.text(), a = It({
    text: s,
    schema: t
  }), o = mt(e);
  if (!a.success)
    throw new U({
      message: "Invalid JSON response",
      cause: a.error,
      statusCode: e.status,
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
function Pr(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), r = globalThis.atob(e);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function Or(t) {
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += String.fromCodePoint(t[r]);
  return globalThis.btoa(e);
}
function Qt(t) {
  return t == null ? void 0 : t.replace(/\/$/, "");
}
var ke = {
  code: "0",
  name: "text",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: t };
  }
}, Te = {
  code: "1",
  name: "function_call",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("function_call" in t) || typeof t.function_call != "object" || t.function_call == null || !("name" in t.function_call) || !("arguments" in t.function_call) || typeof t.function_call.name != "string" || typeof t.function_call.arguments != "string")
      throw new Error(
        '"function_call" parts expect an object with a "function_call" property.'
      );
    return {
      type: "function_call",
      value: t
    };
  }
}, Se = {
  code: "2",
  name: "data",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: t };
  }
}, Ee = {
  code: "3",
  name: "error",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: t };
  }
}, Ie = {
  code: "4",
  name: "assistant_message",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("id" in t) || !("role" in t) || !("content" in t) || typeof t.id != "string" || typeof t.role != "string" || t.role !== "assistant" || !Array.isArray(t.content) || !t.content.every(
      (e) => e != null && typeof e == "object" && "type" in e && e.type === "text" && "text" in e && e.text != null && typeof e.text == "object" && "value" in e.text && typeof e.text.value == "string"
    ))
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    return {
      type: "assistant_message",
      value: t
    };
  }
}, Ce = {
  code: "5",
  name: "assistant_control_data",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("threadId" in t) || !("messageId" in t) || typeof t.threadId != "string" || typeof t.messageId != "string")
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    return {
      type: "assistant_control_data",
      value: {
        threadId: t.threadId,
        messageId: t.messageId
      }
    };
  }
}, Ne = {
  code: "6",
  name: "data_message",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("role" in t) || !("data" in t) || typeof t.role != "string" || t.role !== "data")
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    return {
      type: "data_message",
      value: t
    };
  }
}, Ae = {
  code: "7",
  name: "tool_calls",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("tool_calls" in t) || typeof t.tool_calls != "object" || t.tool_calls == null || !Array.isArray(t.tool_calls) || t.tool_calls.some(
      (e) => e == null || typeof e != "object" || !("id" in e) || typeof e.id != "string" || !("type" in e) || typeof e.type != "string" || !("function" in e) || e.function == null || typeof e.function != "object" || !("arguments" in e.function) || typeof e.function.name != "string" || typeof e.function.arguments != "string"
    ))
      throw new Error(
        '"tool_calls" parts expect an object with a ToolCallPayload.'
      );
    return {
      type: "tool_calls",
      value: t
    };
  }
}, je = {
  code: "8",
  name: "message_annotations",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: t };
  }
}, Pe = {
  code: "9",
  name: "tool_call",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("toolCallId" in t) || typeof t.toolCallId != "string" || !("toolName" in t) || typeof t.toolName != "string" || !("args" in t) || typeof t.args != "object")
      throw new Error(
        '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.'
      );
    return {
      type: "tool_call",
      value: t
    };
  }
}, Oe = {
  code: "a",
  name: "tool_result",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("toolCallId" in t) || typeof t.toolCallId != "string" || !("toolName" in t) || typeof t.toolName != "string" || !("args" in t) || typeof t.args != "object" || !("result" in t))
      throw new Error(
        '"tool_result" parts expect an object with a "toolCallId", "toolName", "args", and "result" property.'
      );
    return {
      type: "tool_result",
      value: t
    };
  }
}, er = [
  ke,
  Te,
  Se,
  Ee,
  Ie,
  Ce,
  Ne,
  Ae,
  je,
  Pe,
  Oe
];
ke.code + "", Te.code + "", Se.code + "", Ee.code + "", Ie.code + "", Ce.code + "", Ne.code + "", Ae.code + "", je.code + "", Pe.code + "", Oe.code + "";
ke.name + "", ke.code, Te.name + "", Te.code, Se.name + "", Se.code, Ee.name + "", Ee.code, Ie.name + "", Ie.code, Ce.name + "", Ce.code, Ne.name + "", Ne.code, Ae.name + "", Ae.code, je.name + "", je.code, Pe.name + "", Pe.code, Oe.name + "", Oe.code;
er.map((t) => t.code);
function ve(t, e) {
  const r = er.find((n) => n.name === t);
  if (!r)
    throw new Error(`Invalid stream part type: ${t}`);
  return `${r.code}:${JSON.stringify(e)}
`;
}
function tr(t, e, r, n) {
  n != null && n.errorMessages && r && (t.errorMessage = {
    ...t.errorMessage,
    [e]: r
  });
}
function I(t, e, r, n, s) {
  t[e] = r, tr(t, e, n, s);
}
const Rr = Symbol("Let zodToJsonSchema decide on which parser to use"), Zr = {
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
}, Mr = (t) => ({
  ...Zr,
  ...t
});
var T;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s) => {
    const a = {};
    for (const o of s)
      a[o] = o;
    return a;
  }, t.getValidEnumValues = (s) => {
    const a = t.objectKeys(s).filter((i) => typeof s[s[i]] != "number"), o = {};
    for (const i of a)
      o[i] = s[i];
    return t.objectValues(o);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(a) {
    return s[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && a.push(o);
    return a;
  }, t.find = (s, a) => {
    for (const o of s)
      if (a(o))
        return o;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, a = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(a);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(T || (T = {}));
var _t;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(_t || (_t = {}));
const g = T.arrayToEnum([
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
]), X = (t) => {
  switch (typeof t) {
    case "undefined":
      return g.undefined;
    case "string":
      return g.string;
    case "number":
      return isNaN(t) ? g.nan : g.number;
    case "boolean":
      return g.boolean;
    case "function":
      return g.function;
    case "bigint":
      return g.bigint;
    case "symbol":
      return g.symbol;
    case "object":
      return Array.isArray(t) ? g.array : t === null ? g.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? g.promise : typeof Map < "u" && t instanceof Map ? g.map : typeof Set < "u" && t instanceof Set ? g.set : typeof Date < "u" && t instanceof Date ? g.date : g.object;
    default:
      return g.unknown;
  }
}, p = T.arrayToEnum([
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
]), $r = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class R extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(a) {
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
          let i = n, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], l++;
          }
        }
    };
    return s(this), n;
  }
  static assert(e) {
    if (!(e instanceof R))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, T.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
R.create = (t) => new R(t);
const pe = (t, e) => {
  let r;
  switch (t.code) {
    case p.invalid_type:
      t.received === g.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case p.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, T.jsonStringifyReplacer)}`;
      break;
    case p.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${T.joinValues(t.keys, ", ")}`;
      break;
    case p.invalid_union:
      r = "Invalid input";
      break;
    case p.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${T.joinValues(t.options)}`;
      break;
    case p.invalid_enum_value:
      r = `Invalid enum value. Expected ${T.joinValues(t.options)}, received '${t.received}'`;
      break;
    case p.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case p.invalid_return_type:
      r = "Invalid function return type";
      break;
    case p.invalid_date:
      r = "Invalid date";
      break;
    case p.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : T.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case p.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case p.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case p.custom:
      r = "Invalid input";
      break;
    case p.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case p.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case p.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, T.assertNever(t);
  }
  return { message: r };
};
let rr = pe;
function Dr(t) {
  rr = t;
}
function st() {
  return rr;
}
const at = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, a = [...r, ...s.path || []], o = {
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
  const l = n.filter((u) => !!u).slice().reverse();
  for (const u of l)
    i = u(o, { data: e, defaultError: i }).message;
  return {
    ...s,
    path: a,
    message: i
  };
}, Lr = [];
function h(t, e) {
  const r = st(), n = at({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      r,
      r === pe ? void 0 : pe
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(n);
}
class A {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return b;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r) {
      const a = await s.key, o = await s.value;
      n.push({
        key: a,
        value: o
      });
    }
    return A.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: a, value: o } = s;
      if (a.status === "aborted" || o.status === "aborted")
        return b;
      a.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (n[a.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const b = Object.freeze({
  status: "aborted"
}), ue = (t) => ({ status: "dirty", value: t }), P = (t) => ({ status: "valid", value: t }), bt = (t) => t.status === "aborted", wt = (t) => t.status === "dirty", Re = (t) => t.status === "valid", Ze = (t) => typeof Promise < "u" && t instanceof Promise;
function ot(t, e, r, n) {
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function nr(t, e, r, n, s) {
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var _;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(_ || (_ = {}));
var _e, be;
class q {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Dt = (t, e) => {
  if (Re(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new R(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function w(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (o, i) => {
    var l, u;
    const { message: d } = t;
    return o.code === "invalid_enum_value" ? { message: d ?? i.defaultError } : typeof i.data > "u" ? { message: (l = d ?? n) !== null && l !== void 0 ? l : i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: (u = d ?? r) !== null && u !== void 0 ? u : i.defaultError };
  }, description: s };
}
class k {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return X(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: X(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new A(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: X(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Ze(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
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
      data: e,
      parsedType: X(e)
    }, a = this._parseSync({ data: e, path: s.path, parent: s });
    return Dt(s, a);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: X(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), a = await (Ze(s) ? s : Promise.resolve(s));
    return Dt(n, a);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, a) => {
      const o = e(s), i = () => a.addIssue({
        code: p.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new L({
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return V.create(this, this._def);
  }
  nullable() {
    return ne.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return D.create(this, this._def);
  }
  promise() {
    return fe.create(this, this._def);
  }
  or(e) {
    return Le.create([this, e], this._def);
  }
  and(e) {
    return Ue.create(this, e, this._def);
  }
  transform(e) {
    return new L({
      ...w(this._def),
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Je({
      ...w(this._def),
      innerType: this,
      defaultValue: r,
      typeName: m.ZodDefault
    });
  }
  brand() {
    return new Nt({
      typeName: m.ZodBranded,
      type: this,
      ...w(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new He({
      ...w(this._def),
      innerType: this,
      catchValue: r,
      typeName: m.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Ke.create(this, e);
  }
  readonly() {
    return Fe.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ur = /^c[^\s-]{8,}$/i, Vr = /^[0-9a-z]+$/, qr = /^[0-9A-HJKMNP-TV-Z]{26}$/, Br = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, zr = /^[a-z0-9_-]{21}$/i, Jr = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Hr = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Fr = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let yt;
const Wr = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Gr = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Kr = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, sr = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Yr = new RegExp(`^${sr}$`);
function ar(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Xr(t) {
  return new RegExp(`^${ar(t)}$`);
}
function or(t) {
  let e = `${sr}T${ar(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function Qr(t, e) {
  return !!((e === "v4" || !e) && Wr.test(t) || (e === "v6" || !e) && Gr.test(t));
}
class $ extends k {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== g.string) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_type,
        expected: g.string,
        received: a.parsedType
      }), b;
    }
    const n = new A();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const o = e.data.length > a.value, i = e.data.length < a.value;
        (o || i) && (s = this._getOrReturnCtx(e, s), o ? h(s, {
          code: p.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && h(s, {
          code: p.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        Hr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "email",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        yt || (yt = new RegExp(Fr, "u")), yt.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "emoji",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        Br.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "uuid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        zr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "nanoid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        Ur.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "cuid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        Vr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "cuid2",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        qr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "ulid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), h(s, {
            validation: "url",
            code: p.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "regex",
          code: p.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? or(a).test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "date" ? Yr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.invalid_string,
          validation: "date",
          message: a.message
        }), n.dirty()) : a.kind === "time" ? Xr(a).test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.invalid_string,
          validation: "time",
          message: a.message
        }), n.dirty()) : a.kind === "duration" ? Jr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "duration",
          code: p.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? Qr(e.data, a.version) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "ip",
          code: p.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "base64" ? Kr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "base64",
          code: p.invalid_string,
          message: a.message
        }), n.dirty()) : T.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: p.invalid_string,
      ..._.errToObj(n)
    });
  }
  _addCheck(e) {
    return new $({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ..._.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ..._.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ..._.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ..._.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ..._.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ..._.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ..._.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ..._.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ..._.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ..._.errToObj(e) });
  }
  datetime(e) {
    var r, n;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      local: (n = e == null ? void 0 : e.local) !== null && n !== void 0 ? n : !1,
      ..._.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ..._.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ..._.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ..._.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ..._.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ..._.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ..._.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ..._.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ..._.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ..._.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, _.errToObj(e));
  }
  trim() {
    return new $({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new $({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new $({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
$.create = (t) => {
  var e;
  return new $({
    checks: [],
    typeName: m.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...w(t)
  });
};
function en(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, a = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return a % o / Math.pow(10, s);
}
class ee extends k {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== g.number) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_type,
        expected: g.number,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new A();
    for (const a of this._def.checks)
      a.kind === "int" ? T.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? en(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.not_finite,
        message: a.message
      }), s.dirty()) : T.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, _.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, _.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, _.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, _.toString(r));
  }
  setLimit(e, r, n, s) {
    return new ee({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: _.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ee({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: _.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: _.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: _.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: _.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: _.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && T.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
ee.create = (t) => new ee({
  checks: [],
  typeName: m.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...w(t)
});
class te extends k {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== g.bigint) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_type,
        expected: g.bigint,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new A();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : T.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, _.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, _.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, _.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, _.toString(r));
  }
  setLimit(e, r, n, s) {
    return new te({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: _.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new te({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: _.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: _.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: _.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: _.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: _.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
te.create = (t) => {
  var e;
  return new te({
    checks: [],
    typeName: m.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...w(t)
  });
};
class Me extends k {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== g.boolean) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: g.boolean,
        received: n.parsedType
      }), b;
    }
    return P(e.data);
  }
}
Me.create = (t) => new Me({
  typeName: m.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...w(t)
});
class oe extends k {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== g.date) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_type,
        expected: g.date,
        received: a.parsedType
      }), b;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_date
      }), b;
    }
    const n = new A();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), h(s, {
        code: p.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), h(s, {
        code: p.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : T.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new oe({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: _.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: _.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
oe.create = (t) => new oe({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: m.ZodDate,
  ...w(t)
});
class it extends k {
  _parse(e) {
    if (this._getType(e) !== g.symbol) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: g.symbol,
        received: n.parsedType
      }), b;
    }
    return P(e.data);
  }
}
it.create = (t) => new it({
  typeName: m.ZodSymbol,
  ...w(t)
});
class $e extends k {
  _parse(e) {
    if (this._getType(e) !== g.undefined) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: g.undefined,
        received: n.parsedType
      }), b;
    }
    return P(e.data);
  }
}
$e.create = (t) => new $e({
  typeName: m.ZodUndefined,
  ...w(t)
});
class De extends k {
  _parse(e) {
    if (this._getType(e) !== g.null) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: g.null,
        received: n.parsedType
      }), b;
    }
    return P(e.data);
  }
}
De.create = (t) => new De({
  typeName: m.ZodNull,
  ...w(t)
});
class me extends k {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return P(e.data);
  }
}
me.create = (t) => new me({
  typeName: m.ZodAny,
  ...w(t)
});
class ae extends k {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return P(e.data);
  }
}
ae.create = (t) => new ae({
  typeName: m.ZodUnknown,
  ...w(t)
});
class K extends k {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return h(r, {
      code: p.invalid_type,
      expected: g.never,
      received: r.parsedType
    }), b;
  }
}
K.create = (t) => new K({
  typeName: m.ZodNever,
  ...w(t)
});
class lt extends k {
  _parse(e) {
    if (this._getType(e) !== g.undefined) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: g.void,
        received: n.parsedType
      }), b;
    }
    return P(e.data);
  }
}
lt.create = (t) => new lt({
  typeName: m.ZodVoid,
  ...w(t)
});
class D extends k {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== g.array)
      return h(r, {
        code: p.invalid_type,
        expected: g.array,
        received: r.parsedType
      }), b;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (o || i) && (h(r, {
        code: o ? p.too_big : p.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (h(r, {
      code: p.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (h(r, {
      code: p.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => s.type._parseAsync(new q(r, o, r.path, i)))).then((o) => A.mergeArray(n, o));
    const a = [...r.data].map((o, i) => s.type._parseSync(new q(r, o, r.path, i)));
    return A.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new D({
      ...this._def,
      minLength: { value: e, message: _.toString(r) }
    });
  }
  max(e, r) {
    return new D({
      ...this._def,
      maxLength: { value: e, message: _.toString(r) }
    });
  }
  length(e, r) {
    return new D({
      ...this._def,
      exactLength: { value: e, message: _.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
D.create = (t, e) => new D({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: m.ZodArray,
  ...w(e)
});
function ce(t) {
  if (t instanceof C) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = V.create(ce(n));
    }
    return new C({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof D ? new D({
      ...t._def,
      type: ce(t.element)
    }) : t instanceof V ? V.create(ce(t.unwrap())) : t instanceof ne ? ne.create(ce(t.unwrap())) : t instanceof B ? B.create(t.items.map((e) => ce(e))) : t;
}
class C extends k {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = T.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== g.object) {
      const u = this._getOrReturnCtx(e);
      return h(u, {
        code: p.invalid_type,
        expected: g.object,
        received: u.parsedType
      }), b;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: a, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof K && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        o.includes(u) || i.push(u);
    const l = [];
    for (const u of o) {
      const d = a[u], f = s.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: d._parse(new q(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof K) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of i)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (u === "strict")
        i.length > 0 && (h(s, {
          code: p.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of i) {
        const f = s.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: u._parse(
            new q(s, f, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const d of l) {
        const f = await d.key, v = await d.value;
        u.push({
          key: f,
          value: v,
          alwaysSet: d.alwaysSet
        });
      }
      return u;
    }).then((u) => A.mergeObjectSync(n, u)) : A.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return _.errToObj, new C({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, a, o, i;
          const l = (o = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = _.errToObj(e).message) !== null && i !== void 0 ? i : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new C({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new C({
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
  extend(e) {
    return new C({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new C({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: m.ZodObject
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
  setKey(e, r) {
    return this.augment({ [e]: r });
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
  catchall(e) {
    return new C({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return T.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new C({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return T.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new C({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ce(this);
  }
  partial(e) {
    const r = {};
    return T.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new C({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return T.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof V; )
          a = a._def.innerType;
        r[n] = a;
      }
    }), new C({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return ir(T.objectKeys(this.shape));
  }
}
C.create = (t, e) => new C({
  shape: () => t,
  unknownKeys: "strip",
  catchall: K.create(),
  typeName: m.ZodObject,
  ...w(e)
});
C.strictCreate = (t, e) => new C({
  shape: () => t,
  unknownKeys: "strict",
  catchall: K.create(),
  typeName: m.ZodObject,
  ...w(e)
});
C.lazycreate = (t, e) => new C({
  shape: t,
  unknownKeys: "strip",
  catchall: K.create(),
  typeName: m.ZodObject,
  ...w(e)
});
class Le extends k {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((i) => new R(i.ctx.common.issues));
      return h(r, {
        code: p.invalid_union,
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
        d.status === "dirty" && !a && (a = { result: d, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((l) => new R(l));
      return h(r, {
        code: p.invalid_union,
        unionErrors: i
      }), b;
    }
  }
  get options() {
    return this._def.options;
  }
}
Le.create = (t, e) => new Le({
  options: t,
  typeName: m.ZodUnion,
  ...w(e)
});
const G = (t) => t instanceof qe ? G(t.schema) : t instanceof L ? G(t.innerType()) : t instanceof Be ? [t.value] : t instanceof re ? t.options : t instanceof ze ? T.objectValues(t.enum) : t instanceof Je ? G(t._def.innerType) : t instanceof $e ? [void 0] : t instanceof De ? [null] : t instanceof V ? [void 0, ...G(t.unwrap())] : t instanceof ne ? [null, ...G(t.unwrap())] : t instanceof Nt || t instanceof Fe ? G(t.unwrap()) : t instanceof He ? G(t._def.innerType) : [];
class ft extends k {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== g.object)
      return h(r, {
        code: p.invalid_type,
        expected: g.object,
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
    }) : (h(r, {
      code: p.invalid_union_discriminator,
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
  static create(e, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const a of r) {
      const o = G(a.shape[e]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (s.has(i))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
        s.set(i, a);
      }
    }
    return new ft({
      typeName: m.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...w(n)
    });
  }
}
function xt(t, e) {
  const r = X(t), n = X(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === g.object && n === g.object) {
    const s = T.objectKeys(e), a = T.objectKeys(t).filter((i) => s.indexOf(i) !== -1), o = { ...t, ...e };
    for (const i of a) {
      const l = xt(t[i], e[i]);
      if (!l.valid)
        return { valid: !1 };
      o[i] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === g.array && n === g.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const o = t[a], i = e[a], l = xt(o, i);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return r === g.date && n === g.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Ue extends k {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (a, o) => {
      if (bt(a) || bt(o))
        return b;
      const i = xt(a.value, o.value);
      return i.valid ? ((wt(a) || wt(o)) && r.dirty(), { status: r.value, value: i.data }) : (h(n, {
        code: p.invalid_intersection_types
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
Ue.create = (t, e, r) => new Ue({
  left: t,
  right: e,
  typeName: m.ZodIntersection,
  ...w(r)
});
class B extends k {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== g.array)
      return h(n, {
        code: p.invalid_type,
        expected: g.array,
        received: n.parsedType
      }), b;
    if (n.data.length < this._def.items.length)
      return h(n, {
        code: p.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), b;
    !this._def.rest && n.data.length > this._def.items.length && (h(n, {
      code: p.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((o, i) => {
      const l = this._def.items[i] || this._def.rest;
      return l ? l._parse(new q(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(a).then((o) => A.mergeArray(r, o)) : A.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new B({
      ...this._def,
      rest: e
    });
  }
}
B.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new B({
    items: t,
    typeName: m.ZodTuple,
    rest: null,
    ...w(e)
  });
};
class Ve extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== g.object)
      return h(n, {
        code: p.invalid_type,
        expected: g.object,
        received: n.parsedType
      }), b;
    const s = [], a = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: a._parse(new q(n, i, n.path, i)),
        value: o._parse(new q(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? A.mergeObjectAsync(r, s) : A.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof k ? new Ve({
      keyType: e,
      valueType: r,
      typeName: m.ZodRecord,
      ...w(n)
    }) : new Ve({
      keyType: $.create(),
      valueType: e,
      typeName: m.ZodRecord,
      ...w(r)
    });
  }
}
class ct extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== g.map)
      return h(n, {
        code: p.invalid_type,
        expected: g.map,
        received: n.parsedType
      }), b;
    const s = this._def.keyType, a = this._def.valueType, o = [...n.data.entries()].map(([i, l], u) => ({
      key: s._parse(new q(n, i, n.path, [u, "key"])),
      value: a._parse(new q(n, l, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, d = await l.value;
          if (u.status === "aborted" || d.status === "aborted")
            return b;
          (u.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(u.value, d.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, d = l.value;
        if (u.status === "aborted" || d.status === "aborted")
          return b;
        (u.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(u.value, d.value);
      }
      return { status: r.value, value: i };
    }
  }
}
ct.create = (t, e, r) => new ct({
  valueType: e,
  keyType: t,
  typeName: m.ZodMap,
  ...w(r)
});
class ie extends k {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== g.set)
      return h(n, {
        code: p.invalid_type,
        expected: g.set,
        received: n.parsedType
      }), b;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (h(n, {
      code: p.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (h(n, {
      code: p.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return b;
        d.status === "dirty" && r.dirty(), u.add(d.value);
      }
      return { status: r.value, value: u };
    }
    const i = [...n.data.values()].map((l, u) => a._parse(new q(n, l, n.path, u)));
    return n.common.async ? Promise.all(i).then((l) => o(l)) : o(i);
  }
  min(e, r) {
    return new ie({
      ...this._def,
      minSize: { value: e, message: _.toString(r) }
    });
  }
  max(e, r) {
    return new ie({
      ...this._def,
      maxSize: { value: e, message: _.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ie.create = (t, e) => new ie({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: m.ZodSet,
  ...w(e)
});
class de extends k {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== g.function)
      return h(r, {
        code: p.invalid_type,
        expected: g.function,
        received: r.parsedType
      }), b;
    function n(i, l) {
      return at({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          st(),
          pe
        ].filter((u) => !!u),
        issueData: {
          code: p.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(i, l) {
      return at({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          st(),
          pe
        ].filter((u) => !!u),
        issueData: {
          code: p.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof fe) {
      const i = this;
      return P(async function(...l) {
        const u = new R([]), d = await i._def.args.parseAsync(l, a).catch((y) => {
          throw u.addIssue(n(l, y)), u;
        }), f = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(f, a).catch((y) => {
          throw u.addIssue(s(f, y)), u;
        });
      });
    } else {
      const i = this;
      return P(function(...l) {
        const u = i._def.args.safeParse(l, a);
        if (!u.success)
          throw new R([n(l, u.error)]);
        const d = Reflect.apply(o, this, u.data), f = i._def.returns.safeParse(d, a);
        if (!f.success)
          throw new R([s(d, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new de({
      ...this._def,
      args: B.create(e).rest(ae.create())
    });
  }
  returns(e) {
    return new de({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new de({
      args: e || B.create([]).rest(ae.create()),
      returns: r || ae.create(),
      typeName: m.ZodFunction,
      ...w(n)
    });
  }
}
class qe extends k {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
qe.create = (t, e) => new qe({
  getter: t,
  typeName: m.ZodLazy,
  ...w(e)
});
class Be extends k {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return h(r, {
        received: r.data,
        code: p.invalid_literal,
        expected: this._def.value
      }), b;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Be.create = (t, e) => new Be({
  value: t,
  typeName: m.ZodLiteral,
  ...w(e)
});
function ir(t, e) {
  return new re({
    values: t,
    typeName: m.ZodEnum,
    ...w(e)
  });
}
class re extends k {
  constructor() {
    super(...arguments), _e.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return h(r, {
        expected: T.joinValues(n),
        received: r.parsedType,
        code: p.invalid_type
      }), b;
    }
    if (ot(this, _e) || nr(this, _e, new Set(this._def.values)), !ot(this, _e).has(e.data)) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return h(r, {
        received: r.data,
        code: p.invalid_enum_value,
        options: n
      }), b;
    }
    return P(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return re.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return re.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
_e = /* @__PURE__ */ new WeakMap();
re.create = ir;
class ze extends k {
  constructor() {
    super(...arguments), be.set(this, void 0);
  }
  _parse(e) {
    const r = T.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== g.string && n.parsedType !== g.number) {
      const s = T.objectValues(r);
      return h(n, {
        expected: T.joinValues(s),
        received: n.parsedType,
        code: p.invalid_type
      }), b;
    }
    if (ot(this, be) || nr(this, be, new Set(T.getValidEnumValues(this._def.values))), !ot(this, be).has(e.data)) {
      const s = T.objectValues(r);
      return h(n, {
        received: n.data,
        code: p.invalid_enum_value,
        options: s
      }), b;
    }
    return P(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
be = /* @__PURE__ */ new WeakMap();
ze.create = (t, e) => new ze({
  values: t,
  typeName: m.ZodNativeEnum,
  ...w(e)
});
class fe extends k {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== g.promise && r.common.async === !1)
      return h(r, {
        code: p.invalid_type,
        expected: g.promise,
        received: r.parsedType
      }), b;
    const n = r.parsedType === g.promise ? r.data : Promise.resolve(r.data);
    return P(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
fe.create = (t, e) => new fe({
  type: t,
  typeName: m.ZodPromise,
  ...w(e)
});
class L extends k {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null, a = {
      addIssue: (o) => {
        h(n, o), o.fatal ? r.abort() : r.dirty();
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
          const l = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? b : l.status === "dirty" || r.value === "dirty" ? ue(l.value) : l;
        });
      {
        if (r.value === "aborted")
          return b;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? b : i.status === "dirty" || r.value === "dirty" ? ue(i.value) : i;
      }
    }
    if (s.type === "refinement") {
      const o = (i) => {
        const l = s.refinement(i, a);
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
        if (!Re(o))
          return o;
        const i = s.transform(o.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => Re(o) ? Promise.resolve(s.transform(o.value, a)).then((i) => ({ status: r.value, value: i })) : o);
    T.assertNever(s);
  }
}
L.create = (t, e, r) => new L({
  schema: t,
  typeName: m.ZodEffects,
  effect: e,
  ...w(r)
});
L.createWithPreprocess = (t, e, r) => new L({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: m.ZodEffects,
  ...w(r)
});
class V extends k {
  _parse(e) {
    return this._getType(e) === g.undefined ? P(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
V.create = (t, e) => new V({
  innerType: t,
  typeName: m.ZodOptional,
  ...w(e)
});
class ne extends k {
  _parse(e) {
    return this._getType(e) === g.null ? P(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ne.create = (t, e) => new ne({
  innerType: t,
  typeName: m.ZodNullable,
  ...w(e)
});
class Je extends k {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === g.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Je.create = (t, e) => new Je({
  innerType: t,
  typeName: m.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...w(e)
});
class He extends k {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
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
    return Ze(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new R(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new R(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
He.create = (t, e) => new He({
  innerType: t,
  typeName: m.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...w(e)
});
class ut extends k {
  _parse(e) {
    if (this._getType(e) !== g.nan) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: g.nan,
        received: n.parsedType
      }), b;
    }
    return { status: "valid", value: e.data };
  }
}
ut.create = (t) => new ut({
  typeName: m.ZodNaN,
  ...w(t)
});
const tn = Symbol("zod_brand");
class Nt extends k {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
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
class Ke extends k {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? b : a.status === "dirty" ? (r.dirty(), ue(a.value)) : this._def.out._parseAsync({
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
  static create(e, r) {
    return new Ke({
      in: e,
      out: r,
      typeName: m.ZodPipeline
    });
  }
}
class Fe extends k {
  _parse(e) {
    const r = this._def.innerType._parse(e), n = (s) => (Re(s) && (s.value = Object.freeze(s.value)), s);
    return Ze(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Fe.create = (t, e) => new Fe({
  innerType: t,
  typeName: m.ZodReadonly,
  ...w(e)
});
function lr(t, e = {}, r) {
  return t ? me.create().superRefine((n, s) => {
    var a, o;
    if (!t(n)) {
      const i = typeof e == "function" ? e(n) : typeof e == "string" ? { message: e } : e, l = (o = (a = i.fatal) !== null && a !== void 0 ? a : r) !== null && o !== void 0 ? o : !0, u = typeof i == "string" ? { message: i } : i;
      s.addIssue({ code: "custom", ...u, fatal: l });
    }
  }) : me.create();
}
const rn = {
  object: C.lazycreate
};
var m;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(m || (m = {}));
const nn = (t, e = {
  message: `Input not instance of ${t.name}`
}) => lr((r) => r instanceof t, e), cr = $.create, ur = ee.create, sn = ut.create, an = te.create, dr = Me.create, on = oe.create, ln = it.create, cn = $e.create, un = De.create, dn = me.create, pn = ae.create, mn = K.create, fn = lt.create, hn = D.create, gn = C.create, yn = C.strictCreate, vn = Le.create, _n = ft.create, bn = Ue.create, wn = B.create, xn = Ve.create, kn = ct.create, Tn = ie.create, Sn = de.create, En = qe.create, In = Be.create, Cn = re.create, Nn = ze.create, An = fe.create, Lt = L.create, jn = V.create, Pn = ne.create, On = L.createWithPreprocess, Rn = Ke.create, Zn = () => cr().optional(), Mn = () => ur().optional(), $n = () => dr().optional(), Dn = {
  string: (t) => $.create({ ...t, coerce: !0 }),
  number: (t) => ee.create({ ...t, coerce: !0 }),
  boolean: (t) => Me.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => te.create({ ...t, coerce: !0 }),
  date: (t) => oe.create({ ...t, coerce: !0 })
}, Ln = b;
var c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: pe,
  setErrorMap: Dr,
  getErrorMap: st,
  makeIssue: at,
  EMPTY_PATH: Lr,
  addIssueToContext: h,
  ParseStatus: A,
  INVALID: b,
  DIRTY: ue,
  OK: P,
  isAborted: bt,
  isDirty: wt,
  isValid: Re,
  isAsync: Ze,
  get util() {
    return T;
  },
  get objectUtil() {
    return _t;
  },
  ZodParsedType: g,
  getParsedType: X,
  ZodType: k,
  datetimeRegex: or,
  ZodString: $,
  ZodNumber: ee,
  ZodBigInt: te,
  ZodBoolean: Me,
  ZodDate: oe,
  ZodSymbol: it,
  ZodUndefined: $e,
  ZodNull: De,
  ZodAny: me,
  ZodUnknown: ae,
  ZodNever: K,
  ZodVoid: lt,
  ZodArray: D,
  ZodObject: C,
  ZodUnion: Le,
  ZodDiscriminatedUnion: ft,
  ZodIntersection: Ue,
  ZodTuple: B,
  ZodRecord: Ve,
  ZodMap: ct,
  ZodSet: ie,
  ZodFunction: de,
  ZodLazy: qe,
  ZodLiteral: Be,
  ZodEnum: re,
  ZodNativeEnum: ze,
  ZodPromise: fe,
  ZodEffects: L,
  ZodTransformer: L,
  ZodOptional: V,
  ZodNullable: ne,
  ZodDefault: Je,
  ZodCatch: He,
  ZodNaN: ut,
  BRAND: tn,
  ZodBranded: Nt,
  ZodPipeline: Ke,
  ZodReadonly: Fe,
  custom: lr,
  Schema: k,
  ZodSchema: k,
  late: rn,
  get ZodFirstPartyTypeKind() {
    return m;
  },
  coerce: Dn,
  any: dn,
  array: hn,
  bigint: an,
  boolean: dr,
  date: on,
  discriminatedUnion: _n,
  effect: Lt,
  enum: Cn,
  function: Sn,
  instanceof: nn,
  intersection: bn,
  lazy: En,
  literal: In,
  map: kn,
  nan: sn,
  nativeEnum: Nn,
  never: mn,
  null: un,
  nullable: Pn,
  number: ur,
  object: gn,
  oboolean: $n,
  onumber: Mn,
  optional: jn,
  ostring: Zn,
  pipeline: Rn,
  preprocess: On,
  promise: An,
  record: xn,
  set: Tn,
  strictObject: yn,
  string: cr,
  symbol: ln,
  transformer: Lt,
  tuple: wn,
  undefined: cn,
  union: vn,
  unknown: pn,
  void: fn,
  NEVER: Ln,
  ZodIssueCode: p,
  quotelessJson: $r,
  ZodError: R
});
function Un() {
  return {};
}
function Vn(t, e) {
  var n, s;
  const r = {
    type: "array"
  };
  return ((s = (n = t.type) == null ? void 0 : n._def) == null ? void 0 : s.typeName) !== m.ZodAny && (r.items = S(t.type._def, {
    ...e,
    currentPath: [...e.currentPath, "items"]
  })), t.minLength && I(r, "minItems", t.minLength.value, t.minLength.message, e), t.maxLength && I(r, "maxItems", t.maxLength.value, t.maxLength.message, e), t.exactLength && (I(r, "minItems", t.exactLength.value, t.exactLength.message, e), I(r, "maxItems", t.exactLength.value, t.exactLength.message, e)), r;
}
function qn(t, e) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? I(r, "minimum", n.value, n.message, e) : I(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), I(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? I(r, "maximum", n.value, n.message, e) : I(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), I(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        I(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function Bn() {
  return {
    type: "boolean"
  };
}
function zn(t, e) {
  return S(t.type._def, e);
}
const Jn = (t, e) => S(t.innerType._def, e);
function pr(t, e, r) {
  const n = r ?? e.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((s, a) => pr(t, e, s))
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
      return Hn(t, e);
  }
}
const Hn = (t, e) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (e.target === "openApi3")
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        I(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          e
        );
        break;
      case "max":
        I(
          r,
          "maximum",
          n.value,
          // This is in milliseconds
          n.message,
          e
        );
        break;
    }
  return r;
};
function Fn(t, e) {
  return {
    ...S(t.innerType._def, e),
    default: t.defaultValue()
  };
}
function Wn(t, e) {
  return e.effectStrategy === "input" ? S(t.schema._def, e) : {};
}
function Gn(t) {
  return {
    type: "string",
    enum: t.values
  };
}
const Kn = (t) => "type" in t && t.type === "string" ? !1 : "allOf" in t;
function Yn(t, e) {
  const r = [
    S(t.left._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "0"]
    }),
    S(t.right._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a);
  let n = e.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return r.forEach((a) => {
    if (Kn(a))
      s.push(...a.allOf), a.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let o = a;
      if ("additionalProperties" in a && a.additionalProperties === !1) {
        const { additionalProperties: i, ...l } = a;
        o = l;
      } else
        n = void 0;
      s.push(o);
    }
  }), s.length ? {
    allOf: s,
    ...n
  } : void 0;
}
function Xn(t, e) {
  const r = typeof t.value;
  return r !== "bigint" && r !== "number" && r !== "boolean" && r !== "string" ? {
    type: Array.isArray(t.value) ? "array" : "object"
  } : e.target === "openApi3" ? {
    type: r === "bigint" ? "integer" : r,
    enum: [t.value]
  } : {
    type: r === "bigint" ? "integer" : r,
    const: t.value
  };
}
const ye = {
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
function mr(t, e) {
  const r = {
    type: "string"
  };
  function n(s) {
    return e.patternStrategy === "escape" ? Qn(s) : s;
  }
  if (t.checks)
    for (const s of t.checks)
      switch (s.kind) {
        case "min":
          I(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, e);
          break;
        case "max":
          I(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, e);
          break;
        case "email":
          switch (e.emailStrategy) {
            case "format:email":
              se(r, "email", s.message, e);
              break;
            case "format:idn-email":
              se(r, "idn-email", s.message, e);
              break;
            case "pattern:zod":
              W(r, ye.email, s.message, e);
              break;
          }
          break;
        case "url":
          se(r, "uri", s.message, e);
          break;
        case "uuid":
          se(r, "uuid", s.message, e);
          break;
        case "regex":
          W(r, s.regex.source, s.message, e);
          break;
        case "cuid":
          W(r, ye.cuid, s.message, e);
          break;
        case "cuid2":
          W(r, ye.cuid2, s.message, e);
          break;
        case "startsWith":
          W(r, "^" + n(s.value), s.message, e);
          break;
        case "endsWith":
          W(r, n(s.value) + "$", s.message, e);
          break;
        case "datetime":
          se(r, "date-time", s.message, e);
          break;
        case "length":
          I(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, e), I(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, e);
          break;
        case "includes": {
          W(r, n(s.value), s.message, e);
          break;
        }
        case "ip": {
          s.version !== "v6" && se(r, "ipv4", s.message, e), s.version !== "v4" && se(r, "ipv6", s.message, e);
          break;
        }
        case "emoji":
          W(r, ye.emoji, s.message, e);
          break;
        case "ulid": {
          W(r, ye.ulid, s.message, e);
          break;
        }
      }
  return r;
}
const Qn = (t) => Array.from(t).map((e) => /[a-zA-Z0-9]/.test(e) ? e : `\\${e}`).join(""), se = (t, e, r, n) => {
  var s;
  t.format || (s = t.anyOf) != null && s.some((a) => a.format) ? (t.anyOf || (t.anyOf = []), t.format && (t.anyOf.push({
    format: t.format,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { format: t.errorMessage.format }
    }
  }), delete t.format, t.errorMessage && (delete t.errorMessage.format, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.anyOf.push({
    format: e,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : I(t, "format", e, r, n);
}, W = (t, e, r, n) => {
  var s;
  t.pattern || (s = t.allOf) != null && s.some((a) => a.pattern) ? (t.allOf || (t.allOf = []), t.pattern && (t.allOf.push({
    pattern: t.pattern,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { pattern: t.errorMessage.pattern }
    }
  }), delete t.pattern, t.errorMessage && (delete t.errorMessage.pattern, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.allOf.push({
    pattern: e,
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : I(t, "pattern", e, r, n);
};
function fr(t, e) {
  var n, s, a, o;
  if (e.target === "openApi3" && ((n = t.keyType) == null ? void 0 : n._def.typeName) === m.ZodEnum)
    return {
      type: "object",
      required: t.keyType._def.values,
      properties: t.keyType._def.values.reduce((i, l) => ({
        ...i,
        [l]: S(t.valueType._def, {
          ...e,
          currentPath: [...e.currentPath, "properties", l]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: S(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (e.target === "openApi3")
    return r;
  if (((s = t.keyType) == null ? void 0 : s._def.typeName) === m.ZodString && ((a = t.keyType._def.checks) != null && a.length)) {
    const i = Object.entries(mr(t.keyType._def, e)).reduce((l, [u, d]) => u === "type" ? l : { ...l, [u]: d }, {});
    return {
      ...r,
      propertyNames: i
    };
  } else if (((o = t.keyType) == null ? void 0 : o._def.typeName) === m.ZodEnum)
    return {
      ...r,
      propertyNames: {
        enum: t.keyType._def.values
      }
    };
  return r;
}
function es(t, e) {
  if (e.mapStrategy === "record")
    return fr(t, e);
  const r = S(t.keyType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "0"]
  }) || {}, n = S(t.valueType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "1"]
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
function ts(t) {
  const e = t.values, n = Object.keys(t.values).filter((a) => typeof e[e[a]] != "number").map((a) => e[a]), s = Array.from(new Set(n.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function rs() {
  return {
    not: {}
  };
}
function ns(t) {
  return t.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const dt = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function ss(t, e) {
  if (e.target === "openApi3")
    return Ut(t, e);
  const r = t.options instanceof Map ? Array.from(t.options.values()) : t.options;
  if (r.every((n) => n._def.typeName in dt && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((s, a) => {
      const o = dt[a._def.typeName];
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
  return Ut(t, e);
}
const Ut = (t, e) => {
  const r = (t.options instanceof Map ? Array.from(t.options.values()) : t.options).map((n, s) => S(n._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", `${s}`]
  })).filter((n) => !!n && (!e.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function as(t, e) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(t.innerType._def.typeName) && (!t.innerType._def.checks || !t.innerType._def.checks.length))
    return e.target === "openApi3" ? {
      type: dt[t.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        dt[t.innerType._def.typeName],
        "null"
      ]
    };
  if (e.target === "openApi3") {
    const n = S(t.innerType._def, {
      ...e,
      currentPath: [...e.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = S(t.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function os(t, e) {
  const r = {
    type: "number"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", tr(r, "type", n.message, e);
        break;
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? I(r, "minimum", n.value, n.message, e) : I(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), I(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? I(r, "maximum", n.value, n.message, e) : I(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), I(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        I(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function is(t, e) {
  return e.removeAdditionalStrategy === "strict" ? t.catchall._def.typeName === "ZodNever" ? t.unknownKeys !== "strict" : S(t.catchall._def, {
    ...e,
    currentPath: [...e.currentPath, "additionalProperties"]
  }) ?? !0 : t.catchall._def.typeName === "ZodNever" ? t.unknownKeys === "passthrough" : S(t.catchall._def, {
    ...e,
    currentPath: [...e.currentPath, "additionalProperties"]
  }) ?? !0;
}
function ls(t, e) {
  const r = {
    type: "object",
    ...Object.entries(t.shape()).reduce((n, [s, a]) => {
      if (a === void 0 || a._def === void 0)
        return n;
      const o = S(a._def, {
        ...e,
        currentPath: [...e.currentPath, "properties", s],
        propertyPath: [...e.currentPath, "properties", s]
      });
      return o === void 0 ? n : {
        properties: { ...n.properties, [s]: o },
        required: a.isOptional() ? n.required : [...n.required, s]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: is(t, e)
  };
  return r.required.length || delete r.required, r;
}
const cs = (t, e) => {
  var n;
  if (e.currentPath.toString() === ((n = e.propertyPath) == null ? void 0 : n.toString()))
    return S(t.innerType._def, e);
  const r = S(t.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "1"]
  });
  return r ? {
    anyOf: [
      {
        not: {}
      },
      r
    ]
  } : {};
}, us = (t, e) => {
  if (e.pipeStrategy === "input")
    return S(t.in._def, e);
  if (e.pipeStrategy === "output")
    return S(t.out._def, e);
  const r = S(t.in._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", "0"]
  }), n = S(t.out._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((s) => s !== void 0)
  };
};
function ds(t, e) {
  return S(t.type._def, e);
}
function ps(t, e) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: S(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "items"]
    })
  };
  return t.minSize && I(n, "minItems", t.minSize.value, t.minSize.message, e), t.maxSize && I(n, "maxItems", t.maxSize.value, t.maxSize.message, e), n;
}
function ms(t, e) {
  return t.rest ? {
    type: "array",
    minItems: t.items.length,
    items: t.items.map((r, n) => S(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: S(t.rest._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: t.items.length,
    maxItems: t.items.length,
    items: t.items.map((r, n) => S(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function fs() {
  return {
    not: {}
  };
}
function hs() {
  return {};
}
const gs = (t, e) => S(t.innerType._def, e);
function S(t, e, r = !1) {
  var o;
  const n = e.seen.get(t);
  if (e.override) {
    const i = (o = e.override) == null ? void 0 : o.call(e, t, e, n, r);
    if (i !== Rr)
      return i;
  }
  if (n && !r) {
    const i = ys(n, e);
    if (i !== void 0)
      return i;
  }
  const s = { def: t, path: e.currentPath, jsonSchema: void 0 };
  e.seen.set(t, s);
  const a = _s(t, t.typeName, e);
  return a && bs(t, e, a), s.jsonSchema = a, a;
}
const ys = (t, e) => {
  switch (e.$refStrategy) {
    case "root":
      return { $ref: t.path.join("/") };
    case "relative":
      return { $ref: vs(e.currentPath, t.path) };
    case "none":
    case "seen":
      return t.path.length < e.currentPath.length && t.path.every((r, n) => e.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${e.currentPath.join("/")}! Defaulting to any`), {}) : e.$refStrategy === "seen" ? {} : void 0;
  }
}, vs = (t, e) => {
  let r = 0;
  for (; r < t.length && r < e.length && t[r] === e[r]; r++)
    ;
  return [(t.length - r).toString(), ...e.slice(r)].join("/");
}, _s = (t, e, r) => {
  switch (e) {
    case m.ZodString:
      return mr(t, r);
    case m.ZodNumber:
      return os(t, r);
    case m.ZodObject:
      return ls(t, r);
    case m.ZodBigInt:
      return qn(t, r);
    case m.ZodBoolean:
      return Bn();
    case m.ZodDate:
      return pr(t, r);
    case m.ZodUndefined:
      return fs();
    case m.ZodNull:
      return ns(r);
    case m.ZodArray:
      return Vn(t, r);
    case m.ZodUnion:
    case m.ZodDiscriminatedUnion:
      return ss(t, r);
    case m.ZodIntersection:
      return Yn(t, r);
    case m.ZodTuple:
      return ms(t, r);
    case m.ZodRecord:
      return fr(t, r);
    case m.ZodLiteral:
      return Xn(t, r);
    case m.ZodEnum:
      return Gn(t);
    case m.ZodNativeEnum:
      return ts(t);
    case m.ZodNullable:
      return as(t, r);
    case m.ZodOptional:
      return cs(t, r);
    case m.ZodMap:
      return es(t, r);
    case m.ZodSet:
      return ps(t, r);
    case m.ZodLazy:
      return S(t.getter()._def, r);
    case m.ZodPromise:
      return ds(t, r);
    case m.ZodNaN:
    case m.ZodNever:
      return rs();
    case m.ZodEffects:
      return Wn(t, r);
    case m.ZodAny:
      return Un();
    case m.ZodUnknown:
      return hs();
    case m.ZodDefault:
      return Fn(t, r);
    case m.ZodBranded:
      return zn(t, r);
    case m.ZodReadonly:
      return gs(t, r);
    case m.ZodCatch:
      return Jn(t, r);
    case m.ZodPipeline:
      return us(t, r);
    case m.ZodFunction:
    case m.ZodVoid:
    case m.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, bs = (t, e, r) => (t.description && (r.description = t.description, e.markdownDescription && (r.markdownDescription = t.description)), r), ws = (t) => {
  const e = Mr(t), r = e.name !== void 0 ? [...e.basePath, e.definitionPath, e.name] : e.basePath;
  return {
    ...e,
    currentPath: r,
    propertyPath: void 0,
    seen: new Map(Object.entries(e.definitions).map(([n, s]) => [
      s._def,
      {
        def: s._def,
        path: [...e.basePath, e.definitionPath, n],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
}, xs = (t, e) => {
  const r = ws(e), n = void 0, s = e == null ? void 0 : e.name, a = S(
    t._def,
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
var ks = Object.defineProperty, Ts = (t, e) => {
  for (var r in e)
    ks(t, r, { get: e[r], enumerable: !0 });
};
async function Ss(t) {
  return new Promise((e) => setTimeout(e, t));
}
var Es = ({
  maxRetries: t = 2,
  initialDelayInMs: e = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => hr(n, {
  maxRetries: t,
  delayInMs: e,
  backoffFactor: r
});
async function hr(t, {
  maxRetries: e,
  delayInMs: r,
  backoffFactor: n
}, s = []) {
  try {
    return await t();
  } catch (a) {
    if (tt(a) || e === 0)
      throw a;
    const o = Kt(a), i = [...s, a], l = i.length;
    if (l > e)
      throw new Rt({
        message: `Failed after ${l} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (a instanceof Error && U.isAPICallError(a) && a.isRetryable === !0 && l <= e)
      return await Ss(r), hr(
        t,
        { maxRetries: e, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw l === 1 ? a : new Rt({
      message: `Failed after ${l} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function Is(t) {
  return {
    promptTokens: t.promptTokens,
    completionTokens: t.completionTokens,
    totalTokens: t.promptTokens + t.completionTokens
  };
}
var Cs = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function Ns(t) {
  for (const { bytes: e, mimeType: r } of Cs)
    if (t.length >= e.length && e.every((n, s) => t[s] === n))
      return r;
}
function Vt(t) {
  if (t instanceof Uint8Array)
    return t;
  if (typeof t == "string")
    try {
      return Pr(t);
    } catch (e) {
      throw new Ot({
        message: "Invalid data content. Content string is not a base64-encoded image.",
        content: t,
        cause: e
      });
    }
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  throw new Ot({ content: t });
}
var As = class extends Error {
  constructor({
    role: t,
    message: e = `Invalid message role: '${t}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super(e), this.name = "AI_InvalidMessageRoleError", this.role = t;
  }
  static isInvalidMessageRoleError(t) {
    return t instanceof Error && t.name === "AI_InvalidMessageRoleError" && typeof t.role == "string";
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
function js(t) {
  const e = [];
  t.system != null && e.push({ role: "system", content: t.system });
  const r = t.type;
  switch (r) {
    case "prompt": {
      e.push({
        role: "user",
        content: [{ type: "text", text: t.prompt }]
      });
      break;
    }
    case "messages": {
      e.push(
        ...t.messages.map(Ps)
      );
      break;
    }
    default: {
      const n = r;
      throw new Error(`Unsupported prompt type: ${n}`);
    }
  }
  return e;
}
function Ps(t) {
  const e = t.role;
  switch (e) {
    case "system":
      return { role: "system", content: t.content };
    case "user":
      return typeof t.content == "string" ? {
        role: "user",
        content: [{ type: "text", text: t.content }]
      } : {
        role: "user",
        content: t.content.map(
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
                          const [o, i] = r.image.split(","), l = o.split(";")[0].split(":")[1];
                          if (l == null || i == null)
                            throw new Error("Invalid data URL format");
                          return {
                            type: "image",
                            image: Vt(i),
                            mimeType: l
                          };
                        } catch {
                          throw new Error(
                            `Error processing data URL: ${Kt(
                              t
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
                const s = Vt(r.image);
                return {
                  type: "image",
                  image: s,
                  mimeType: (n = r.mimeType) != null ? n : Ns(s)
                };
              }
            }
          }
        )
      };
    case "assistant":
      return typeof t.content == "string" ? {
        role: "assistant",
        content: [{ type: "text", text: t.content }]
      } : {
        role: "assistant",
        content: t.content.filter(
          // remove empty text parts:
          (r) => r.type !== "text" || r.text !== ""
        )
      };
    case "tool":
      return t;
    default: {
      const r = e;
      throw new As({ role: r });
    }
  }
}
function Os(t) {
  if (t.prompt == null && t.messages == null)
    throw new vt({
      prompt: t,
      message: "prompt or messages must be defined"
    });
  if (t.prompt != null && t.messages != null)
    throw new vt({
      prompt: t,
      message: "prompt and messages cannot be defined at the same time"
    });
  return t.prompt != null ? {
    type: "prompt",
    prompt: t.prompt,
    messages: void 0,
    system: t.system
  } : {
    type: "messages",
    prompt: void 0,
    messages: t.messages,
    // only possible case bc of checks above
    system: t.system
  };
}
function Rs({
  maxTokens: t,
  temperature: e,
  topP: r,
  presencePenalty: n,
  frequencyPenalty: s,
  seed: a,
  maxRetries: o
}) {
  if (t != null) {
    if (!Number.isInteger(t))
      throw new F({
        parameter: "maxTokens",
        value: t,
        message: "maxTokens must be an integer"
      });
    if (t < 1)
      throw new F({
        parameter: "maxTokens",
        value: t,
        message: "maxTokens must be >= 1"
      });
  }
  if (e != null && typeof e != "number")
    throw new F({
      parameter: "temperature",
      value: e,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new F({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new F({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new F({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (a != null && !Number.isInteger(a))
    throw new F({
      parameter: "seed",
      value: a,
      message: "seed must be an integer"
    });
  if (o != null) {
    if (!Number.isInteger(o))
      throw new F({
        parameter: "maxRetries",
        value: o,
        message: "maxRetries must be an integer"
      });
    if (o < 0)
      throw new F({
        parameter: "maxRetries",
        value: o,
        message: "maxRetries must be >= 0"
      });
  }
  return {
    maxTokens: t,
    temperature: e ?? 0,
    topP: r,
    presencePenalty: n,
    frequencyPenalty: s,
    seed: a,
    maxRetries: o ?? 2
  };
}
function Zs(t) {
  return xs(t);
}
function qt(t, e) {
  const r = t.pipeThrough(
    new TransformStream(e)
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
function Ms(t) {
  return t != null && Object.keys(t).length > 0;
}
function $s({
  tools: t,
  toolChoice: e
}) {
  return Ms(t) ? {
    tools: Object.entries(t).map(([r, n]) => ({
      type: "function",
      name: r,
      description: n.description,
      parameters: Zs(n.parameters)
    })),
    toolChoice: e == null ? { type: "auto" } : typeof e == "string" ? { type: e } : { type: "tool", toolName: e.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
function Ds({
  toolCall: t,
  tools: e
}) {
  const r = t.toolName;
  if (e == null)
    throw new nt({ toolName: t.toolName });
  const n = e[r];
  if (n == null)
    throw new nt({
      toolName: t.toolName,
      availableTools: Object.keys(e)
    });
  const s = It({
    text: t.args,
    schema: n.parameters
  });
  if (s.success === !1)
    throw new vr({
      toolName: r,
      toolArgs: t.args,
      cause: s.error
    });
  return {
    type: "tool-call",
    toolCallId: t.toolCallId,
    toolName: r,
    args: s.value
  };
}
function gr(t, { contentType: e }) {
  var r;
  const n = new Headers((r = t == null ? void 0 : t.headers) != null ? r : {});
  return n.has("Content-Type") || n.set("Content-Type", e), n;
}
function Ls({
  tools: t,
  generatorStream: e
}) {
  let r = !1;
  const n = /* @__PURE__ */ new Set();
  let s = null;
  const a = new ReadableStream({
    start(i) {
      s = i;
    }
  }), o = new TransformStream({
    transform(i, l) {
      const u = i.type;
      switch (u) {
        case "text-delta":
        case "error": {
          l.enqueue(i);
          break;
        }
        case "tool-call": {
          const d = i.toolName;
          if (t == null) {
            s.enqueue({
              type: "error",
              error: new nt({ toolName: i.toolName })
            });
            break;
          }
          const f = t[d];
          if (f == null) {
            s.enqueue({
              type: "error",
              error: new nt({
                toolName: i.toolName,
                availableTools: Object.keys(t)
              })
            });
            break;
          }
          try {
            const v = Ds({
              toolCall: i,
              tools: t
            });
            if (l.enqueue(v), f.execute != null) {
              const y = xe();
              n.add(y), f.execute(v.args).then(
                (E) => {
                  s.enqueue({
                    ...v,
                    type: "tool-result",
                    result: E
                  }), n.delete(y), r && n.size === 0 && s.close();
                },
                (E) => {
                  s.enqueue({
                    type: "error",
                    error: E
                  }), n.delete(y), r && n.size === 0 && s.close();
                }
              );
            }
          } catch (v) {
            s.enqueue({
              type: "error",
              error: v
            });
          }
          break;
        }
        case "finish": {
          l.enqueue({
            type: "finish",
            finishReason: i.finishReason,
            logprobs: i.logprobs,
            usage: Is(i.usage)
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
        e.pipeThrough(o).pipeTo(
          new WritableStream({
            write(l) {
              i.enqueue(l);
            },
            close() {
            }
          })
        ),
        a.pipeTo(
          new WritableStream({
            write(l) {
              i.enqueue(l);
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
async function Us({
  model: t,
  tools: e,
  toolChoice: r,
  system: n,
  prompt: s,
  messages: a,
  maxRetries: o,
  abortSignal: i,
  onFinish: l,
  ...u
}) {
  const d = Es({ maxRetries: o }), f = Os({ system: n, prompt: s, messages: a }), { stream: v, warnings: y, rawResponse: E } = await d(
    () => t.doStream({
      mode: {
        type: "regular",
        ...$s({ tools: e, toolChoice: r })
      },
      ...Rs(u),
      inputFormat: f.type,
      prompt: js(f),
      abortSignal: i
    })
  );
  return new Vs({
    stream: Ls({
      tools: e,
      generatorStream: v
    }),
    warnings: y,
    rawResponse: E,
    onFinish: l
  });
}
var Vs = class {
  constructor({
    stream: t,
    warnings: e,
    rawResponse: r,
    onFinish: n
  }) {
    this.warnings = e, this.rawResponse = r, this.onFinish = n;
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
    let l;
    this.toolResults = new Promise((x) => {
      l = x;
    });
    let u, d, f = "";
    const v = [], y = [], E = this;
    this.originalStream = t.pipeThrough(
      new TransformStream({
        async transform(x, N) {
          N.enqueue(x), x.type === "text-delta" && (f += x.textDelta), x.type === "tool-call" && v.push(x), x.type === "tool-result" && y.push(x), x.type === "finish" && (d = x.usage, u = x.finishReason, s(d), a(u), o(f), i(v));
        },
        // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
        async flush(x) {
          var N;
          try {
            l(y), await ((N = E.onFinish) == null ? void 0 : N.call(E, {
              finishReason: u ?? "unknown",
              usage: d ?? {
                promptTokens: NaN,
                completionTokens: NaN,
                totalTokens: NaN
              },
              text: f,
              toolCalls: v,
              // The tool results are inferred as a never[] type, because they are
              // optional and the execute method with an inferred result type is
              // optional as well. Therefore we need to cast the toolResults to any.
              // The type exposed to the users will be correctly inferred.
              toolResults: y,
              rawResponse: r,
              warnings: e
            }));
          } catch (j) {
            x.error(j);
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
    const [t, e] = this.originalStream.tee();
    return this.originalStream = e, t;
  }
  /**
  A text stream that returns only the generated text deltas. You can use it
  as either an AsyncIterable or a ReadableStream. When an error occurs, the
  stream will throw the error.
     */
  get textStream() {
    return qt(this.teeStream(), {
      transform(t, e) {
        if (t.type === "text-delta")
          t.textDelta.length > 0 && e.enqueue(t.textDelta);
        else if (t.type === "error")
          throw t.error;
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
    return qt(this.teeStream(), {
      transform(t, e) {
        t.type === "text-delta" ? t.textDelta.length > 0 && e.enqueue(t) : e.enqueue(t);
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
  toAIStream(t = {}) {
    let e = "";
    const r = new TransformStream({
      async start() {
        t.onStart && await t.onStart();
      },
      async transform(s, a) {
        if (a.enqueue(s), s.type === "text-delta") {
          const o = s.textDelta;
          e += o, t.onToken && await t.onToken(o), t.onText && await t.onText(o);
        }
      },
      async flush() {
        t.onCompletion && await t.onCompletion(e), t.onFinal && await t.onFinal(e);
      }
    }), n = new TransformStream({
      transform: async (s, a) => {
        switch (s.type) {
          case "text-delta":
            a.enqueue(ve("text", s.textDelta));
            break;
          case "tool-call":
            a.enqueue(
              ve("tool_call", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              })
            );
            break;
          case "tool-result":
            a.enqueue(
              ve("tool_result", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args,
                result: s.result
              })
            );
            break;
          case "error":
            a.enqueue(
              ve("error", JSON.stringify(s.error))
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
  pipeAIStreamToResponse(t, e) {
    var r;
    t.writeHead((r = e == null ? void 0 : e.status) != null ? r : 200, {
      "Content-Type": "text/plain; charset=utf-8",
      ...e == null ? void 0 : e.headers
    });
    const n = this.toAIStream().getReader();
    (async () => {
      try {
        for (; ; ) {
          const { done: a, value: o } = await n.read();
          if (a)
            break;
          t.write(o);
        }
      } catch (a) {
        throw a;
      } finally {
        t.end();
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
  pipeTextStreamToResponse(t, e) {
    var r;
    t.writeHead((r = e == null ? void 0 : e.status) != null ? r : 200, {
      "Content-Type": "text/plain; charset=utf-8",
      ...e == null ? void 0 : e.headers
    });
    const n = this.textStream.pipeThrough(new TextEncoderStream()).getReader();
    (async () => {
      try {
        for (; ; ) {
          const { done: a, value: o } = await n.read();
          if (a)
            break;
          t.write(o);
        }
      } catch (a) {
        throw a;
      } finally {
        t.end();
      }
    })();
  }
  /**
  Converts the result to a streamed response object with a stream data part stream.
  It can be used with the `useChat` and `useCompletion` hooks.
  
  @param init Optional headers.
  
  @return A response object.
     */
  toAIStreamResponse(t) {
    return new Ws(this.toAIStream(), t);
  }
  /**
  Creates a simple text stream response.
  Each text delta is encoded as UTF-8 and sent as a separate chunk.
  Non-text-delta events are ignored.
  
  @param init Optional headers and status code.
     */
  toTextStreamResponse(t) {
    var e;
    return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
      status: (e = t == null ? void 0 : t.status) != null ? e : 200,
      headers: gr(t, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, ga = Us;
function qs(t) {
  const e = new TextEncoder();
  let r = "";
  const n = t || {};
  return new TransformStream({
    async start() {
      n.onStart && await n.onStart();
    },
    async transform(s, a) {
      const o = typeof s == "string" ? s : s.content;
      a.enqueue(e.encode(o)), r += o, n.onToken && await n.onToken(o), n.onText && typeof s == "string" && await n.onText(s);
    },
    async flush() {
      const s = Bs(n);
      n.onCompletion && await n.onCompletion(r), n.onFinal && !s && await n.onFinal(r);
    }
  });
}
function Bs(t) {
  return "experimental_onFunctionCall" in t;
}
function zs() {
  const t = new TextEncoder(), e = new TextDecoder();
  return new TransformStream({
    transform: async (r, n) => {
      const s = e.decode(r);
      n.enqueue(t.encode(ve("text", s)));
    }
  });
}
new TextDecoder("utf-8");
var Js = {};
Ts(Js, {
  toAIStream: () => Hs
});
function Hs(t, e) {
  return t.pipeThrough(
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
  ).pipeThrough(qs(e)).pipeThrough(zs());
}
function Fs(t, e) {
  const r = t.getReader(), n = e.getReader();
  let s, a, o = !1, i = !1;
  async function l(d) {
    try {
      s == null && (s = r.read());
      const f = await s;
      s = void 0, f.done ? d.close() : d.enqueue(f.value);
    } catch (f) {
      d.error(f);
    }
  }
  async function u(d) {
    try {
      a == null && (a = n.read());
      const f = await a;
      a = void 0, f.done ? d.close() : d.enqueue(f.value);
    } catch (f) {
      d.error(f);
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
        s == null && (s = r.read()), a == null && (a = n.read());
        const { result: f, reader: v } = await Promise.race([
          s.then((y) => ({ result: y, reader: r })),
          a.then((y) => ({ result: y, reader: n }))
        ]);
        f.done || d.enqueue(f.value), v === r ? (s = void 0, f.done && (u(d), o = !0)) : (a = void 0, f.done && (i = !0, l(d)));
      } catch (f) {
        d.error(f);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
var Ws = class extends Response {
  constructor(t, e, r) {
    let n = t;
    r && (n = Fs(r.stream, t)), super(n, {
      ...e,
      status: 200,
      headers: gr(e, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
};
function Gs(t) {
  const e = [];
  for (const { role: r, content: n } of t)
    switch (r) {
      case "system": {
        e.push({ role: "system", content: n });
        break;
      }
      case "user": {
        e.push({
          role: "user",
          content: n.map((s) => {
            switch (s.type) {
              case "text":
                return s.text;
              case "image":
                throw new M({
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
        e.push({
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
          e.push({
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
  return e;
}
function Bt(t) {
  switch (t) {
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
var Ks = c.object({
  object: c.literal("error"),
  message: c.string(),
  type: c.string(),
  param: c.string().nullable(),
  code: c.string().nullable()
}), kt = Xt({
  errorSchema: Ks,
  errorToMessage: (t) => t.message
}), Ys = class {
  constructor(t, e, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.modelId = t, this.settings = e, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    mode: t,
    prompt: e,
    maxTokens: r,
    temperature: n,
    topP: s,
    frequencyPenalty: a,
    presencePenalty: o,
    seed: i
  }) {
    const l = t.type, u = [];
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
      messages: Gs(e)
    };
    switch (l) {
      case "regular":
        return {
          args: { ...d, ...ea(t) },
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
            tools: [{ type: "function", function: t.tool }]
          },
          warnings: u
        };
      case "object-grammar":
        throw new M({
          functionality: "object-grammar mode"
        });
      default: {
        const f = l;
        throw new Error(`Unsupported type: ${f}`);
      }
    }
  }
  async doGenerate(t) {
    var e, r;
    const { args: n, warnings: s } = this.getArgs(t), { responseHeaders: a, value: o } = await Q({
      url: `${this.config.baseURL}/chat/completions`,
      headers: this.config.headers(),
      body: n,
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        Xs
      ),
      abortSignal: t.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...l } = n, u = o.choices[0];
    return {
      text: (e = u.message.content) != null ? e : void 0,
      toolCalls: (r = u.message.tool_calls) == null ? void 0 : r.map((d) => ({
        toolCallType: "function",
        toolCallId: this.config.generateId(),
        toolName: d.function.name,
        args: d.function.arguments
      })),
      finishReason: Bt(u.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: l },
      rawResponse: { headers: a },
      warnings: s
    };
  }
  async doStream(t) {
    const { args: e, warnings: r } = this.getArgs(t), { responseHeaders: n, value: s } = await Q({
      url: `${this.config.baseURL}/chat/completions`,
      headers: this.config.headers(),
      body: {
        ...e,
        stream: !0
      },
      failedResponseHandler: kt,
      successfulResponseHandler: Ct(
        Qs
      ),
      abortSignal: t.abortSignal,
      fetch: this.config.fetch
    }), { messages: a, ...o } = e;
    let i = "other", l = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    };
    const u = this.config.generateId;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(d, f) {
            if (!d.success) {
              f.enqueue({ type: "error", error: d.error });
              return;
            }
            const v = d.value;
            v.usage != null && (l = {
              promptTokens: v.usage.prompt_tokens,
              completionTokens: v.usage.completion_tokens
            });
            const y = v.choices[0];
            if ((y == null ? void 0 : y.finish_reason) != null && (i = Bt(y.finish_reason)), (y == null ? void 0 : y.delta) == null)
              return;
            const E = y.delta;
            if (E.content != null && f.enqueue({
              type: "text-delta",
              textDelta: E.content
            }), E.tool_calls != null)
              for (const x of E.tool_calls) {
                const N = u();
                f.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: N,
                  toolName: x.function.name,
                  argsTextDelta: x.function.arguments
                }), f.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: N,
                  toolName: x.function.name,
                  args: x.function.arguments
                });
              }
          },
          flush(d) {
            d.enqueue({ type: "finish", finishReason: i, usage: l });
          }
        })
      ),
      rawCall: { rawPrompt: a, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, Xs = c.object({
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
}), Qs = c.object({
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
function ea(t) {
  var e;
  const r = (e = t.tools) != null && e.length ? t.tools : void 0;
  if (r == null)
    return { tools: void 0, tool_choice: void 0 };
  const n = r.map((o) => ({
    type: "function",
    function: {
      name: o.name,
      description: o.description,
      parameters: o.parameters
    }
  })), s = t.toolChoice;
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
var ta = class {
  constructor(t, e, r) {
    this.specificationVersion = "v1", this.modelId = t, this.settings = e, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  get maxEmbeddingsPerCall() {
    var t;
    return (t = this.settings.maxEmbeddingsPerCall) != null ? t : 32;
  }
  get supportsParallelCalls() {
    var t;
    return (t = this.settings.supportsParallelCalls) != null ? t : !1;
  }
  async doEmbed({
    values: t,
    abortSignal: e
  }) {
    if (t.length > this.maxEmbeddingsPerCall)
      throw new Ht({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: t
      });
    const { responseHeaders: r, value: n } = await Q({
      url: `${this.config.baseURL}/embeddings`,
      headers: this.config.headers(),
      body: {
        model: this.modelId,
        input: t,
        encoding_format: "float"
      },
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        ra
      ),
      abortSignal: e,
      fetch: this.config.fetch
    });
    return {
      embeddings: n.data.map((s) => s.embedding),
      rawResponse: { headers: r }
    };
  }
}, ra = c.object({
  data: c.array(
    c.object({
      embedding: c.array(c.number())
    })
  )
});
function na(t = {}) {
  var e, r;
  const n = (r = Qt((e = t.baseURL) != null ? e : t.baseUrl)) != null ? r : "https://api.mistral.ai/v1", s = () => ({
    Authorization: `Bearer ${Yt({
      apiKey: t.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...t.headers
  }), a = (l, u = {}) => {
    var d;
    return new Ys(l, u, {
      provider: "mistral.chat",
      baseURL: n,
      headers: s,
      generateId: (d = t.generateId) != null ? d : xe,
      fetch: t.fetch
    });
  }, o = (l, u = {}) => new ta(l, u, {
    provider: "mistral.embedding",
    baseURL: n,
    headers: s,
    fetch: t.fetch
  }), i = function(l, u) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return a(l, u);
  };
  return i.languageModel = a, i.chat = a, i.embedding = o, i.textEmbedding = o, i;
}
na();
function sa(t) {
  const e = [];
  for (const { role: r, content: n } of t)
    switch (r) {
      case "system": {
        e.push({ role: "system", content: n });
        break;
      }
      case "user": {
        if (n.length === 1 && n[0].type === "text") {
          e.push({ role: "user", content: n[0].text });
          break;
        }
        e.push({
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
                    url: s.image instanceof URL ? s.image.toString() : `data:${(a = s.mimeType) != null ? a : "image/jpeg"};base64,${Or(s.image)}`
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
        e.push({
          role: "assistant",
          content: s,
          tool_calls: a.length > 0 ? a : void 0
        });
        break;
      }
      case "tool": {
        for (const s of n)
          e.push({
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
  return e;
}
function zt(t) {
  var e, r;
  return (r = (e = t == null ? void 0 : t.content) == null ? void 0 : e.map(({ token: n, logprob: s, top_logprobs: a }) => ({
    token: n,
    logprob: s,
    topLogprobs: a ? a.map(({ token: o, logprob: i }) => ({
      token: o,
      logprob: i
    })) : []
  }))) != null ? r : void 0;
}
function pt(t) {
  switch (t) {
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
var At = c.object({
  error: c.object({
    message: c.string(),
    type: c.string(),
    param: c.any().nullable(),
    code: c.string().nullable()
  })
}), We = Xt({
  errorSchema: At,
  errorToMessage: (t) => t.error.message
}), aa = class {
  constructor(t, e, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "tool", this.modelId = t, this.settings = e, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    mode: t,
    prompt: e,
    maxTokens: r,
    temperature: n,
    topP: s,
    frequencyPenalty: a,
    presencePenalty: o,
    seed: i
  }) {
    const l = t.type, u = {
      // model id:
      model: this.modelId,
      // model specific settings:
      logit_bias: this.settings.logitBias,
      logprobs: this.settings.logprobs === !0 || typeof this.settings.logprobs == "number",
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
      messages: sa(e)
    };
    switch (l) {
      case "regular":
        return { ...u, ...la(t) };
      case "object-json":
        return {
          ...u,
          response_format: { type: "json_object" }
        };
      case "object-tool":
        return {
          ...u,
          tool_choice: { type: "function", function: { name: t.tool.name } },
          tools: [
            {
              type: "function",
              function: {
                name: t.tool.name,
                description: t.tool.description,
                parameters: t.tool.parameters
              }
            }
          ]
        };
      case "object-grammar":
        throw new M({
          functionality: "object-grammar mode"
        });
      default: {
        const d = l;
        throw new Error(`Unsupported type: ${d}`);
      }
    }
  }
  async doGenerate(t) {
    var e, r;
    const n = this.getArgs(t), { responseHeaders: s, value: a } = await Q({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: this.config.headers(),
      body: n,
      failedResponseHandler: We,
      successfulResponseHandler: Ge(
        oa
      ),
      abortSignal: t.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = n, l = a.choices[0];
    return {
      text: (e = l.message.content) != null ? e : void 0,
      toolCalls: (r = l.message.tool_calls) == null ? void 0 : r.map((u) => {
        var d;
        return {
          toolCallType: "function",
          toolCallId: (d = u.id) != null ? d : xe(),
          toolName: u.function.name,
          args: u.function.arguments
        };
      }),
      finishReason: pt(l.finish_reason),
      usage: {
        promptTokens: a.usage.prompt_tokens,
        completionTokens: a.usage.completion_tokens
      },
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: s },
      warnings: [],
      logprobs: zt(l.logprobs)
    };
  }
  async doStream(t) {
    const e = this.getArgs(t), { responseHeaders: r, value: n } = await Q({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: this.config.headers(),
      body: {
        ...e,
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: We,
      successfulResponseHandler: Ct(
        ia
      ),
      abortSignal: t.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...a } = e, o = [];
    let i = "other", l = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, u;
    return {
      stream: n.pipeThrough(
        new TransformStream({
          transform(d, f) {
            var v, y, E, x, N, j, Z, Ye, z, ge, jt, Pt;
            if (!d.success) {
              i = "error", f.enqueue({ type: "error", error: d.error });
              return;
            }
            const le = d.value;
            if ("error" in le) {
              i = "error", f.enqueue({ type: "error", error: le.error });
              return;
            }
            le.usage != null && (l = {
              promptTokens: le.usage.prompt_tokens,
              completionTokens: le.usage.completion_tokens
            });
            const Y = le.choices[0];
            if ((Y == null ? void 0 : Y.finish_reason) != null && (i = pt(Y.finish_reason)), (Y == null ? void 0 : Y.delta) == null)
              return;
            const Xe = Y.delta;
            Xe.content != null && f.enqueue({
              type: "text-delta",
              textDelta: Xe.content
            });
            const ht = zt(
              Y == null ? void 0 : Y.logprobs
            );
            if (ht != null && ht.length && (u === void 0 && (u = []), u.push(...ht)), Xe.tool_calls != null)
              for (const O of Xe.tool_calls) {
                const Qe = O.index;
                if (o[Qe] == null) {
                  if (O.type !== "function")
                    throw new gt({
                      data: O,
                      message: "Expected 'function' type."
                    });
                  if (O.id == null)
                    throw new gt({
                      data: O,
                      message: "Expected 'id' to be a string."
                    });
                  if (((v = O.function) == null ? void 0 : v.name) == null)
                    throw new gt({
                      data: O,
                      message: "Expected 'function.name' to be a string."
                    });
                  o[Qe] = {
                    id: O.id,
                    type: "function",
                    function: {
                      name: O.function.name,
                      arguments: (y = O.function.arguments) != null ? y : ""
                    }
                  };
                  const H = o[Qe];
                  ((E = H.function) == null ? void 0 : E.name) != null && ((x = H.function) == null ? void 0 : x.arguments) != null && $t(H.function.arguments) && (f.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: H.id,
                    toolName: H.function.name,
                    argsTextDelta: H.function.arguments
                  }), f.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (N = H.id) != null ? N : xe(),
                    toolName: H.function.name,
                    args: H.function.arguments
                  }));
                  continue;
                }
                const J = o[Qe];
                ((j = O.function) == null ? void 0 : j.arguments) != null && (J.function.arguments += (Ye = (Z = O.function) == null ? void 0 : Z.arguments) != null ? Ye : ""), f.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: J.id,
                  toolName: J.function.name,
                  argsTextDelta: (z = O.function.arguments) != null ? z : ""
                }), ((ge = J.function) == null ? void 0 : ge.name) != null && ((jt = J.function) == null ? void 0 : jt.arguments) != null && $t(J.function.arguments) && f.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (Pt = J.id) != null ? Pt : xe(),
                  toolName: J.function.name,
                  args: J.function.arguments
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
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
}, oa = c.object({
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
}), ia = c.union([
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
  At
]);
function la(t) {
  var e;
  const r = (e = t.tools) != null && e.length ? t.tools : void 0;
  if (r == null)
    return { tools: void 0, tool_choice: void 0 };
  const n = r.map((o) => ({
    type: "function",
    function: {
      name: o.name,
      description: o.description,
      parameters: o.parameters
    }
  })), s = t.toolChoice;
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
function ca({
  prompt: t,
  inputFormat: e,
  user: r = "user",
  assistant: n = "assistant"
}) {
  if (e === "prompt" && t.length === 1 && t[0].role === "user" && t[0].content.length === 1 && t[0].content[0].type === "text")
    return { prompt: t[0].content[0].text };
  let s = "";
  t[0].role === "system" && (s += `${t[0].content}

`, t = t.slice(1));
  for (const { role: a, content: o } of t)
    switch (a) {
      case "system":
        throw new vt({
          message: "Unexpected system message in prompt: ${content}",
          prompt: t
        });
      case "user": {
        const i = o.map((l) => {
          switch (l.type) {
            case "text":
              return l.text;
            case "image":
              throw new M({
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
        const i = o.map((l) => {
          switch (l.type) {
            case "text":
              return l.text;
            case "tool-call":
              throw new M({
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
        throw new M({
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
function Jt(t) {
  return t == null ? void 0 : t.tokens.map((e, r) => ({
    token: e,
    logprob: t.token_logprobs[r],
    topLogprobs: t.top_logprobs ? Object.entries(t.top_logprobs[r]).map(
      ([n, s]) => ({
        token: n,
        logprob: s
      })
    ) : []
  }));
}
var ua = class {
  constructor(t, e, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = void 0, this.modelId = t, this.settings = e, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    mode: t,
    inputFormat: e,
    prompt: r,
    maxTokens: n,
    temperature: s,
    topP: a,
    frequencyPenalty: o,
    presencePenalty: i,
    seed: l
  }) {
    var u;
    const d = t.type, { prompt: f, stopSequences: v } = ca({ prompt: r, inputFormat: e }), y = {
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
      seed: l,
      // prompt:
      prompt: f,
      // stop sequences:
      stop: v
    };
    switch (d) {
      case "regular": {
        if ((u = t.tools) != null && u.length)
          throw new M({
            functionality: "tools"
          });
        if (t.toolChoice)
          throw new M({
            functionality: "toolChoice"
          });
        return y;
      }
      case "object-json":
        throw new M({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new M({
          functionality: "object-tool mode"
        });
      case "object-grammar":
        throw new M({
          functionality: "object-grammar mode"
        });
      default: {
        const E = d;
        throw new Error(`Unsupported type: ${E}`);
      }
    }
  }
  async doGenerate(t) {
    const e = this.getArgs(t), { responseHeaders: r, value: n } = await Q({
      url: `${this.config.baseURL}/completions`,
      headers: this.config.headers(),
      body: e,
      failedResponseHandler: We,
      successfulResponseHandler: Ge(
        da
      ),
      abortSignal: t.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...a } = e, o = n.choices[0];
    return {
      text: o.text,
      usage: {
        promptTokens: n.usage.prompt_tokens,
        completionTokens: n.usage.completion_tokens
      },
      finishReason: pt(o.finish_reason),
      logprobs: Jt(o.logprobs),
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
  async doStream(t) {
    const e = this.getArgs(t), { responseHeaders: r, value: n } = await Q({
      url: `${this.config.baseURL}/completions`,
      headers: this.config.headers(),
      body: {
        ...this.getArgs(t),
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: We,
      successfulResponseHandler: Ct(
        pa
      ),
      abortSignal: t.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...a } = e;
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
            const f = u.value;
            if ("error" in f) {
              o = "error", d.enqueue({ type: "error", error: f.error });
              return;
            }
            f.usage != null && (i = {
              promptTokens: f.usage.prompt_tokens,
              completionTokens: f.usage.completion_tokens
            });
            const v = f.choices[0];
            (v == null ? void 0 : v.finish_reason) != null && (o = pt(v.finish_reason)), (v == null ? void 0 : v.text) != null && d.enqueue({
              type: "text-delta",
              textDelta: v.text
            });
            const y = Jt(
              v == null ? void 0 : v.logprobs
            );
            y != null && y.length && (l === void 0 && (l = []), l.push(...y));
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
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
}, da = c.object({
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
}), pa = c.union([
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
  At
]), ma = class {
  constructor(t, e, r) {
    this.specificationVersion = "v1", this.modelId = t, this.settings = e, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  get maxEmbeddingsPerCall() {
    var t;
    return (t = this.settings.maxEmbeddingsPerCall) != null ? t : 2048;
  }
  get supportsParallelCalls() {
    var t;
    return (t = this.settings.supportsParallelCalls) != null ? t : !0;
  }
  async doEmbed({
    values: t,
    abortSignal: e
  }) {
    if (t.length > this.maxEmbeddingsPerCall)
      throw new Ht({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: t
      });
    const { responseHeaders: r, value: n } = await Q({
      url: `${this.config.baseURL}/embeddings`,
      headers: this.config.headers(),
      body: {
        model: this.modelId,
        input: t,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: We,
      successfulResponseHandler: Ge(
        fa
      ),
      abortSignal: e,
      fetch: this.config.fetch
    });
    return {
      embeddings: n.data.map((s) => s.embedding),
      rawResponse: { headers: r }
    };
  }
}, fa = c.object({
  data: c.array(
    c.object({
      embedding: c.array(c.number())
    })
  )
});
function ha(t = {}) {
  var e, r, n;
  const s = (r = Qt((e = t.baseURL) != null ? e : t.baseUrl)) != null ? r : "https://api.openai.com/v1", a = (n = t.compatibility) != null ? n : "compatible", o = () => ({
    Authorization: `Bearer ${Yt({
      apiKey: t.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": t.organization,
    "OpenAI-Project": t.project,
    ...t.headers
  }), i = (v, y = {}) => new aa(v, y, {
    provider: "openai.chat",
    url: ({ path: E }) => `${s}${E}`,
    headers: o,
    compatibility: a,
    fetch: t.fetch
  }), l = (v, y = {}) => new ua(v, y, {
    provider: "openai.completion",
    baseURL: s,
    headers: o,
    compatibility: a,
    fetch: t.fetch
  }), u = (v, y = {}) => new ma(v, y, {
    provider: "openai.embedding",
    baseURL: s,
    headers: o,
    fetch: t.fetch
  }), d = (v, y) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return v === "gpt-3.5-turbo-instruct" ? l(
      v,
      y
    ) : i(v, y);
  }, f = function(v, y) {
    return d(v, y);
  };
  return f.languageModel = d, f.chat = i, f.completion = l, f.embedding = u, f.textEmbedding = u, f;
}
ha({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  na as createMistral,
  ha as createOpenAI,
  ga as experimental_streamText
};
