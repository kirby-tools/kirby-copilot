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
    data: l
  }) {
    super(e), this.name = "AI_APICallError", this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = s, this.responseBody = a, this.cause = o, this.isRetryable = i, this.data = l;
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
}, vr = class extends Error {
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
}, F = class extends Error {
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
}, Rt = class extends Error {
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
}, _t = class extends Error {
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
}, yt = class extends Error {
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
function Et(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var _r = class extends Error {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Et(
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
}, nt = class extends Error {
  constructor({ text: e, cause: t }) {
    super(
      `JSON parsing failed: Text: ${e}.
Error message: ${Et(t)}`
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
}, st = class extends Error {
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
}, Zt = class extends Error {
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
}, Ft = class extends Error {
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
}, xe = class extends Error {
  constructor({ value: e, cause: t }) {
    super(
      `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${Et(t)}`
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
}, M = class extends Error {
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
let br = (e, t = 21) => (r = t) => {
  let n = "", s = r;
  for (; s--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function wr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} };
const xr = typeof Buffer < "u", Mt = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, $t = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Wt(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), xr && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const s = r && r.protoAction || "error", a = r && r.constructorAction || "error";
  if (s === "ignore" && a === "ignore")
    return n;
  if (s !== "ignore" && a !== "ignore") {
    if (Mt.test(e) === !1 && $t.test(e) === !1)
      return n;
  } else if (s !== "ignore" && a === "ignore") {
    if (Mt.test(e) === !1)
      return n;
  } else if ($t.test(e) === !1)
    return n;
  return Gt(n, { protoAction: s, constructorAction: a, safe: r && r.safe });
}
function Gt(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
        const l = o[i];
        l && typeof l == "object" && s.push(l);
      }
    }
  }
  return e;
}
function St(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Wt(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function kr(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Wt(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
ge.exports = St;
ge.exports.default = St;
ge.exports.parse = St;
ge.exports.safeParse = kr;
ge.exports.scan = Gt;
var Tr = ge.exports;
const It = /* @__PURE__ */ wr(Tr);
function Er(e) {
  let t, r, n, s, a, o, i;
  return l(), {
    feed: u,
    reset: l
  };
  function l() {
    t = !0, r = "", n = 0, s = -1, a = void 0, o = void 0, i = "";
  }
  function u(f) {
    r = r ? r + f : f, t && Sr(r) && (r = r.slice(Kt.length)), t = !1;
    const v = r.length;
    let y = 0, E = !1;
    for (; y < v; ) {
      E && (r[y] === `
` && ++y, E = !1);
      let w = -1, N = s, j;
      for (let Z = n; w < 0 && Z < v; ++Z)
        j = r[Z], j === ":" && N < 0 ? N = Z - y : j === "\r" ? (E = !0, w = Z - y) : j === `
` && (w = Z - y);
      if (w < 0) {
        n = v - y, s = N;
        break;
      } else
        n = 0, s = -1;
      d(r, y, N, w), y += w + 1;
    }
    y === v ? r = "" : y > 0 && (r = r.slice(y));
  }
  function d(f, v, y, E) {
    if (E === 0) {
      i.length > 0 && (e({
        type: "event",
        id: a,
        event: o || void 0,
        data: i.slice(0, -1)
        // remove trailing newline
      }), i = "", a = void 0), o = void 0;
      return;
    }
    const w = y < 0, N = f.slice(v, v + (w ? E : y));
    let j = 0;
    w ? j = E : f[v + y + 1] === " " ? j = y + 2 : j = y + 1;
    const Z = v + j, Xe = E - j, z = f.slice(Z, Z + Xe).toString();
    if (N === "data")
      i += z ? "".concat(z, `
`) : `
`;
    else if (N === "event")
      o = z;
    else if (N === "id" && !z.includes("\0"))
      a = z;
    else if (N === "retry") {
      const ye = parseInt(z, 10);
      Number.isNaN(ye) || e({
        type: "reconnect-interval",
        value: ye
      });
    }
  }
}
const Kt = [239, 187, 191];
function Sr(e) {
  return Kt.every((t, r) => e.charCodeAt(r) === t);
}
class Ir extends TransformStream {
  constructor() {
    let t;
    super({
      start(r) {
        t = Er((n) => {
          n.type === "event" && r.enqueue(n);
        });
      },
      transform(r) {
        t.feed(r);
      }
    });
  }
}
function Q(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function ft(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var ke = br(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function Yt(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function rt(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Xt({
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
function Cr({
  value: e,
  schema: t
}) {
  try {
    return t.parse(e);
  } catch (r) {
    throw new xe({ value: e, cause: r });
  }
}
function Nr({
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
      error: new xe({
        value: e,
        cause: r.error
      })
    };
  } catch (r) {
    return {
      success: !1,
      error: xe.isTypeValidationError(r) ? r : new xe({ value: e, cause: r })
    };
  }
}
function Ar({
  text: e,
  schema: t
}) {
  try {
    const r = It.parse(e);
    return t == null ? r : Cr({ value: r, schema: t });
  } catch (r) {
    throw nt.isJSONParseError(r) || xe.isTypeValidationError(r) ? r : new nt({ text: e, cause: r });
  }
}
function Ct({
  text: e,
  schema: t
}) {
  try {
    const r = It.parse(e);
    return t == null ? {
      success: !0,
      value: r
    } : Nr({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: nt.isJSONParseError(r) ? r : new nt({ text: e, cause: r })
    };
  }
}
function Dt(e) {
  try {
    return It.parse(e), !0;
  } catch {
    return !1;
  }
}
function jr(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var Pr = () => fetch, ee = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}) => Or({
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
}), Or = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: s,
  abortSignal: a,
  fetch: o = Pr()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: jr(t),
      body: r.content,
      signal: a
    }), l = ft(i);
    if (!i.ok) {
      let u;
      try {
        u = await s({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw rt(d) || U.isAPICallError(d) ? d : new U({
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
      throw u instanceof Error && (rt(u) || U.isAPICallError(u)) ? u : new U({
        message: "Failed to process successful response",
        cause: u,
        statusCode: i.status,
        url: e,
        responseHeaders: l,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (rt(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const l = i.cause;
      if (l != null)
        throw new U({
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
}, Qt = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: s, requestBodyValues: a }) => {
  const o = await n.text(), i = ft(n);
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
    const l = Ar({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new U({
        message: t(l),
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
}, Nt = (e) => async ({ response: t }) => {
  const r = ft(t);
  if (t.body == null)
    throw new vr({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new Ir()).pipeThrough(
      new TransformStream({
        transform({ data: n }, s) {
          n !== "[DONE]" && s.enqueue(
            Ct({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, Ke = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const s = await t.text(), a = Ct({
    text: s,
    schema: e
  }), o = ft(t);
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
function Rr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = globalThis.atob(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function Zr(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return globalThis.btoa(t);
}
function er(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
var Te = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Ee = {
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
}, Se = {
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
}, Ce = {
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
}, je = {
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
}, Pe = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Oe = {
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
}, Re = {
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
}, tr = [
  Te,
  Ee,
  Se,
  Ie,
  Ce,
  Ne,
  Ae,
  je,
  Pe,
  Oe,
  Re
];
Te.code + "", Ee.code + "", Se.code + "", Ie.code + "", Ce.code + "", Ne.code + "", Ae.code + "", je.code + "", Pe.code + "", Oe.code + "", Re.code + "";
Te.name + "", Te.code, Ee.name + "", Ee.code, Se.name + "", Se.code, Ie.name + "", Ie.code, Ce.name + "", Ce.code, Ne.name + "", Ne.code, Ae.name + "", Ae.code, je.name + "", je.code, Pe.name + "", Pe.code, Oe.name + "", Oe.code, Re.name + "", Re.code;
tr.map((e) => e.code);
function _e(e, t) {
  const r = tr.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
function rr(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function I(e, t, r, n, s) {
  e[t] = r, rr(e, t, n, s);
}
const Mr = Symbol("Let zodToJsonSchema decide on which parser to use"), $r = {
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
}, Dr = (e) => ({
  ...$r,
  ...e
});
var T;
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
})(T || (T = {}));
var bt;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(bt || (bt = {}));
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
]), X = (e) => {
  switch (typeof e) {
    case "undefined":
      return g.undefined;
    case "string":
      return g.string;
    case "number":
      return isNaN(e) ? g.nan : g.number;
    case "boolean":
      return g.boolean;
    case "function":
      return g.function;
    case "bigint":
      return g.bigint;
    case "symbol":
      return g.symbol;
    case "object":
      return Array.isArray(e) ? g.array : e === null ? g.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? g.promise : typeof Map < "u" && e instanceof Map ? g.map : typeof Set < "u" && e instanceof Set ? g.set : typeof Date < "u" && e instanceof Date ? g.date : g.object;
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
]), Lr = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class R extends Error {
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
          let i = n, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], l++;
          }
        }
    };
    return s(this), n;
  }
  static assert(t) {
    if (!(t instanceof R))
      throw new Error(`Not a ZodError: ${t}`);
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
R.create = (e) => new R(e);
const me = (e, t) => {
  let r;
  switch (e.code) {
    case p.invalid_type:
      e.received === g.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case p.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, T.jsonStringifyReplacer)}`;
      break;
    case p.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${T.joinValues(e.keys, ", ")}`;
      break;
    case p.invalid_union:
      r = "Invalid input";
      break;
    case p.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${T.joinValues(e.options)}`;
      break;
    case p.invalid_enum_value:
      r = `Invalid enum value. Expected ${T.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : T.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case p.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case p.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case p.custom:
      r = "Invalid input";
      break;
    case p.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case p.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case p.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, T.assertNever(e);
  }
  return { message: r };
};
let nr = me;
function Ur(e) {
  nr = e;
}
function at() {
  return nr;
}
const ot = (e) => {
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
  const l = n.filter((u) => !!u).slice().reverse();
  for (const u of l)
    i = u(o, { data: t, defaultError: i }).message;
  return {
    ...s,
    path: a,
    message: i
  };
}, Vr = [];
function h(e, t) {
  const r = at(), n = ot({
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
    return A.mergeObjectSync(t, n);
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
}), de = (e) => ({ status: "dirty", value: e }), P = (e) => ({ status: "valid", value: e }), wt = (e) => e.status === "aborted", xt = (e) => e.status === "dirty", Ze = (e) => e.status === "valid", Me = (e) => typeof Promise < "u" && e instanceof Promise;
function it(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function sr(e, t, r, n, s) {
  if (typeof t == "function" ? e !== t || !s : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var _;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_ || (_ = {}));
var be, we;
class q {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Lt = (e, t) => {
  if (Ze(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new R(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function x(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (o, i) => {
    var l, u;
    const { message: d } = e;
    return o.code === "invalid_enum_value" ? { message: d ?? i.defaultError } : typeof i.data > "u" ? { message: (l = d ?? n) !== null && l !== void 0 ? l : i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: (u = d ?? r) !== null && u !== void 0 ? u : i.defaultError };
  }, description: s };
}
class k {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return X(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: X(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new A(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: X(t.data),
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
      parsedType: X(t)
    }, a = this._parseSync({ data: t, path: s.path, parent: s });
    return Lt(s, a);
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
      parsedType: X(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), a = await (Me(s) ? s : Promise.resolve(s));
    return Lt(n, a);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, a) => {
      const o = t(s), i = () => a.addIssue({
        code: p.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new L({
      schema: this,
      typeName: m.ZodEffects,
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
    return Ue.create([this, t], this._def);
  }
  and(t) {
    return Ve.create(this, t, this._def);
  }
  transform(t) {
    return new L({
      ...x(this._def),
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new He({
      ...x(this._def),
      innerType: this,
      defaultValue: r,
      typeName: m.ZodDefault
    });
  }
  brand() {
    return new At({
      typeName: m.ZodBranded,
      type: this,
      ...x(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Fe({
      ...x(this._def),
      innerType: this,
      catchValue: r,
      typeName: m.ZodCatch
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
    return We.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const qr = /^c[^\s-]{8,}$/i, Br = /^[0-9a-z]+$/, zr = /^[0-9A-HJKMNP-TV-Z]{26}$/, Jr = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Hr = /^[a-z0-9_-]{21}$/i, Fr = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wr = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Gr = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let vt;
const Kr = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Yr = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Xr = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ar = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Qr = new RegExp(`^${ar}$`);
function or(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function en(e) {
  return new RegExp(`^${or(e)}$`);
}
function ir(e) {
  let t = `${ar}T${or(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function tn(e, t) {
  return !!((t === "v4" || !t) && Kr.test(e) || (t === "v6" || !t) && Yr.test(e));
}
class $ extends k {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== g.string) {
      const a = this._getOrReturnCtx(t);
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
        t.data.length < a.value && (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const o = t.data.length > a.value, i = t.data.length < a.value;
        (o || i) && (s = this._getOrReturnCtx(t, s), o ? h(s, {
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
        Wr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "email",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        vt || (vt = new RegExp(Gr, "u")), vt.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "emoji",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        Jr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "uuid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        Hr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "nanoid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        qr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "cuid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        Br.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "cuid2",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        zr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "ulid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), h(s, {
            validation: "url",
            code: p.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "regex",
          code: p.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? ir(a).test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "date" ? Qr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.invalid_string,
          validation: "date",
          message: a.message
        }), n.dirty()) : a.kind === "time" ? en(a).test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          code: p.invalid_string,
          validation: "time",
          message: a.message
        }), n.dirty()) : a.kind === "duration" ? Fr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "duration",
          code: p.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? tn(t.data, a.version) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "ip",
          code: p.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "base64" ? Xr.test(t.data) || (s = this._getOrReturnCtx(t, s), h(s, {
          validation: "base64",
          code: p.invalid_string,
          message: a.message
        }), n.dirty()) : T.assertNever(a);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: p.invalid_string,
      ..._.errToObj(n)
    });
  }
  _addCheck(t) {
    return new $({
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
$.create = (e) => {
  var t;
  return new $({
    checks: [],
    typeName: m.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...x(e)
  });
};
function rn(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, a = parseInt(e.toFixed(s).replace(".", "")), o = parseInt(t.toFixed(s).replace(".", ""));
  return a % o / Math.pow(10, s);
}
class te extends k {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== g.number) {
      const a = this._getOrReturnCtx(t);
      return h(a, {
        code: p.invalid_type,
        expected: g.number,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new A();
    for (const a of this._def.checks)
      a.kind === "int" ? T.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? rn(t.data, a.value) !== 0 && (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.not_finite,
        message: a.message
      }), s.dirty()) : T.assertNever(a);
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && T.isInteger(t.value));
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
  typeName: m.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...x(e)
});
class re extends k {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== g.bigint) {
      const a = this._getOrReturnCtx(t);
      return h(a, {
        code: p.invalid_type,
        expected: g.bigint,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new A();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), h(n, {
        code: p.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : T.assertNever(a);
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
    typeName: m.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...x(e)
  });
};
class $e extends k {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== g.boolean) {
      const n = this._getOrReturnCtx(t);
      return h(n, {
        code: p.invalid_type,
        expected: g.boolean,
        received: n.parsedType
      }), b;
    }
    return P(t.data);
  }
}
$e.create = (e) => new $e({
  typeName: m.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...x(e)
});
class ie extends k {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== g.date) {
      const a = this._getOrReturnCtx(t);
      return h(a, {
        code: p.invalid_type,
        expected: g.date,
        received: a.parsedType
      }), b;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return h(a, {
        code: p.invalid_date
      }), b;
    }
    const n = new A();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (s = this._getOrReturnCtx(t, s), h(s, {
        code: p.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (s = this._getOrReturnCtx(t, s), h(s, {
        code: p.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : T.assertNever(a);
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
  typeName: m.ZodDate,
  ...x(e)
});
class lt extends k {
  _parse(t) {
    if (this._getType(t) !== g.symbol) {
      const n = this._getOrReturnCtx(t);
      return h(n, {
        code: p.invalid_type,
        expected: g.symbol,
        received: n.parsedType
      }), b;
    }
    return P(t.data);
  }
}
lt.create = (e) => new lt({
  typeName: m.ZodSymbol,
  ...x(e)
});
class De extends k {
  _parse(t) {
    if (this._getType(t) !== g.undefined) {
      const n = this._getOrReturnCtx(t);
      return h(n, {
        code: p.invalid_type,
        expected: g.undefined,
        received: n.parsedType
      }), b;
    }
    return P(t.data);
  }
}
De.create = (e) => new De({
  typeName: m.ZodUndefined,
  ...x(e)
});
class Le extends k {
  _parse(t) {
    if (this._getType(t) !== g.null) {
      const n = this._getOrReturnCtx(t);
      return h(n, {
        code: p.invalid_type,
        expected: g.null,
        received: n.parsedType
      }), b;
    }
    return P(t.data);
  }
}
Le.create = (e) => new Le({
  typeName: m.ZodNull,
  ...x(e)
});
class fe extends k {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return P(t.data);
  }
}
fe.create = (e) => new fe({
  typeName: m.ZodAny,
  ...x(e)
});
class oe extends k {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return P(t.data);
  }
}
oe.create = (e) => new oe({
  typeName: m.ZodUnknown,
  ...x(e)
});
class K extends k {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return h(r, {
      code: p.invalid_type,
      expected: g.never,
      received: r.parsedType
    }), b;
  }
}
K.create = (e) => new K({
  typeName: m.ZodNever,
  ...x(e)
});
class ct extends k {
  _parse(t) {
    if (this._getType(t) !== g.undefined) {
      const n = this._getOrReturnCtx(t);
      return h(n, {
        code: p.invalid_type,
        expected: g.void,
        received: n.parsedType
      }), b;
    }
    return P(t.data);
  }
}
ct.create = (e) => new ct({
  typeName: m.ZodVoid,
  ...x(e)
});
class D extends k {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
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
  typeName: m.ZodArray,
  ...x(t)
});
function ue(e) {
  if (e instanceof C) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = V.create(ue(n));
    }
    return new C({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof D ? new D({
      ...e._def,
      type: ue(e.element)
    }) : e instanceof V ? V.create(ue(e.unwrap())) : e instanceof se ? se.create(ue(e.unwrap())) : e instanceof B ? B.create(e.items.map((t) => ue(t))) : e;
}
class C extends k {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = T.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== g.object) {
      const u = this._getOrReturnCtx(t);
      return h(u, {
        code: p.invalid_type,
        expected: g.object,
        received: u.parsedType
      }), b;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: a, keys: o } = this._getCached(), i = [];
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
  strict(t) {
    return _.errToObj, new C({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var s, a, o, i;
          const l = (o = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
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
  extend(t) {
    return new C({
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
    return new C({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
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
    return new C({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return T.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new C({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return T.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new C({
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
    return T.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }), new C({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return T.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
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
    return lr(T.objectKeys(this.shape));
  }
}
C.create = (e, t) => new C({
  shape: () => e,
  unknownKeys: "strip",
  catchall: K.create(),
  typeName: m.ZodObject,
  ...x(t)
});
C.strictCreate = (e, t) => new C({
  shape: () => e,
  unknownKeys: "strict",
  catchall: K.create(),
  typeName: m.ZodObject,
  ...x(t)
});
C.lazycreate = (e, t) => new C({
  shape: e,
  unknownKeys: "strip",
  catchall: K.create(),
  typeName: m.ZodObject,
  ...x(t)
});
class Ue extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
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
Ue.create = (e, t) => new Ue({
  options: e,
  typeName: m.ZodUnion,
  ...x(t)
});
const G = (e) => e instanceof Be ? G(e.schema) : e instanceof L ? G(e.innerType()) : e instanceof ze ? [e.value] : e instanceof ne ? e.options : e instanceof Je ? T.objectValues(e.enum) : e instanceof He ? G(e._def.innerType) : e instanceof De ? [void 0] : e instanceof Le ? [null] : e instanceof V ? [void 0, ...G(e.unwrap())] : e instanceof se ? [null, ...G(e.unwrap())] : e instanceof At || e instanceof We ? G(e.unwrap()) : e instanceof Fe ? G(e._def.innerType) : [];
class ht extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
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
  static create(t, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const a of r) {
      const o = G(a.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (s.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        s.set(i, a);
      }
    }
    return new ht({
      typeName: m.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...x(n)
    });
  }
}
function kt(e, t) {
  const r = X(e), n = X(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === g.object && n === g.object) {
    const s = T.objectKeys(t), a = T.objectKeys(e).filter((i) => s.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of a) {
      const l = kt(e[i], t[i]);
      if (!l.valid)
        return { valid: !1 };
      o[i] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === g.array && n === g.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const o = e[a], i = t[a], l = kt(o, i);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return r === g.date && n === g.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ve extends k {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (a, o) => {
      if (wt(a) || wt(o))
        return b;
      const i = kt(a.value, o.value);
      return i.valid ? ((xt(a) || xt(o)) && r.dirty(), { status: r.value, value: i.data }) : (h(n, {
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
Ve.create = (e, t, r) => new Ve({
  left: e,
  right: t,
  typeName: m.ZodIntersection,
  ...x(r)
});
class B extends k {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
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
  rest(t) {
    return new B({
      ...this._def,
      rest: t
    });
  }
}
B.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new B({
    items: e,
    typeName: m.ZodTuple,
    rest: null,
    ...x(t)
  });
};
class qe extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
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
  static create(t, r, n) {
    return r instanceof k ? new qe({
      keyType: t,
      valueType: r,
      typeName: m.ZodRecord,
      ...x(n)
    }) : new qe({
      keyType: $.create(),
      valueType: t,
      typeName: m.ZodRecord,
      ...x(r)
    });
  }
}
class ut extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
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
ut.create = (e, t, r) => new ut({
  valueType: t,
  keyType: e,
  typeName: m.ZodMap,
  ...x(r)
});
class le extends k {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
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
  typeName: m.ZodSet,
  ...x(t)
});
class pe extends k {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== g.function)
      return h(r, {
        code: p.invalid_type,
        expected: g.function,
        received: r.parsedType
      }), b;
    function n(i, l) {
      return ot({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          at(),
          me
        ].filter((u) => !!u),
        issueData: {
          code: p.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(i, l) {
      return ot({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          at(),
          me
        ].filter((u) => !!u),
        issueData: {
          code: p.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof he) {
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
  args(...t) {
    return new pe({
      ...this._def,
      args: B.create(t).rest(oe.create())
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
      args: t || B.create([]).rest(oe.create()),
      returns: r || oe.create(),
      typeName: m.ZodFunction,
      ...x(n)
    });
  }
}
class Be extends k {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Be.create = (e, t) => new Be({
  getter: e,
  typeName: m.ZodLazy,
  ...x(t)
});
class ze extends k {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return h(r, {
        received: r.data,
        code: p.invalid_literal,
        expected: this._def.value
      }), b;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ze.create = (e, t) => new ze({
  value: e,
  typeName: m.ZodLiteral,
  ...x(t)
});
function lr(e, t) {
  return new ne({
    values: e,
    typeName: m.ZodEnum,
    ...x(t)
  });
}
class ne extends k {
  constructor() {
    super(...arguments), be.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return h(r, {
        expected: T.joinValues(n),
        received: r.parsedType,
        code: p.invalid_type
      }), b;
    }
    if (it(this, be) || sr(this, be, new Set(this._def.values)), !it(this, be).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return h(r, {
        received: r.data,
        code: p.invalid_enum_value,
        options: n
      }), b;
    }
    return P(t.data);
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
be = /* @__PURE__ */ new WeakMap();
ne.create = lr;
class Je extends k {
  constructor() {
    super(...arguments), we.set(this, void 0);
  }
  _parse(t) {
    const r = T.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== g.string && n.parsedType !== g.number) {
      const s = T.objectValues(r);
      return h(n, {
        expected: T.joinValues(s),
        received: n.parsedType,
        code: p.invalid_type
      }), b;
    }
    if (it(this, we) || sr(this, we, new Set(T.getValidEnumValues(this._def.values))), !it(this, we).has(t.data)) {
      const s = T.objectValues(r);
      return h(n, {
        received: n.data,
        code: p.invalid_enum_value,
        options: s
      }), b;
    }
    return P(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
we = /* @__PURE__ */ new WeakMap();
Je.create = (e, t) => new Je({
  values: e,
  typeName: m.ZodNativeEnum,
  ...x(t)
});
class he extends k {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
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
he.create = (e, t) => new he({
  type: e,
  typeName: m.ZodPromise,
  ...x(t)
});
class L extends k {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, a = {
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
          return l.status === "aborted" ? b : l.status === "dirty" || r.value === "dirty" ? de(l.value) : l;
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
        if (!Ze(o))
          return o;
        const i = s.transform(o.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => Ze(o) ? Promise.resolve(s.transform(o.value, a)).then((i) => ({ status: r.value, value: i })) : o);
    T.assertNever(s);
  }
}
L.create = (e, t, r) => new L({
  schema: e,
  typeName: m.ZodEffects,
  effect: t,
  ...x(r)
});
L.createWithPreprocess = (e, t, r) => new L({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: m.ZodEffects,
  ...x(r)
});
class V extends k {
  _parse(t) {
    return this._getType(t) === g.undefined ? P(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
V.create = (e, t) => new V({
  innerType: e,
  typeName: m.ZodOptional,
  ...x(t)
});
class se extends k {
  _parse(t) {
    return this._getType(t) === g.null ? P(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
se.create = (e, t) => new se({
  innerType: e,
  typeName: m.ZodNullable,
  ...x(t)
});
class He extends k {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
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
He.create = (e, t) => new He({
  innerType: e,
  typeName: m.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...x(t)
});
class Fe extends k {
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
Fe.create = (e, t) => new Fe({
  innerType: e,
  typeName: m.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...x(t)
});
class dt extends k {
  _parse(t) {
    if (this._getType(t) !== g.nan) {
      const n = this._getOrReturnCtx(t);
      return h(n, {
        code: p.invalid_type,
        expected: g.nan,
        received: n.parsedType
      }), b;
    }
    return { status: "valid", value: t.data };
  }
}
dt.create = (e) => new dt({
  typeName: m.ZodNaN,
  ...x(e)
});
const nn = Symbol("zod_brand");
class At extends k {
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
class Ye extends k {
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
      typeName: m.ZodPipeline
    });
  }
}
class We extends k {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (s) => (Ze(s) && (s.value = Object.freeze(s.value)), s);
    return Me(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
We.create = (e, t) => new We({
  innerType: e,
  typeName: m.ZodReadonly,
  ...x(t)
});
function cr(e, t = {}, r) {
  return e ? fe.create().superRefine((n, s) => {
    var a, o;
    if (!e(n)) {
      const i = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, l = (o = (a = i.fatal) !== null && a !== void 0 ? a : r) !== null && o !== void 0 ? o : !0, u = typeof i == "string" ? { message: i } : i;
      s.addIssue({ code: "custom", ...u, fatal: l });
    }
  }) : fe.create();
}
const sn = {
  object: C.lazycreate
};
var m;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(m || (m = {}));
const an = (e, t = {
  message: `Input not instance of ${e.name}`
}) => cr((r) => r instanceof e, t), ur = $.create, dr = te.create, on = dt.create, ln = re.create, pr = $e.create, cn = ie.create, un = lt.create, dn = De.create, pn = Le.create, mn = fe.create, fn = oe.create, hn = K.create, gn = ct.create, yn = D.create, vn = C.create, _n = C.strictCreate, bn = Ue.create, wn = ht.create, xn = Ve.create, kn = B.create, Tn = qe.create, En = ut.create, Sn = le.create, In = pe.create, Cn = Be.create, Nn = ze.create, An = ne.create, jn = Je.create, Pn = he.create, Ut = L.create, On = V.create, Rn = se.create, Zn = L.createWithPreprocess, Mn = Ye.create, $n = () => ur().optional(), Dn = () => dr().optional(), Ln = () => pr().optional(), Un = {
  string: (e) => $.create({ ...e, coerce: !0 }),
  number: (e) => te.create({ ...e, coerce: !0 }),
  boolean: (e) => $e.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => re.create({ ...e, coerce: !0 }),
  date: (e) => ie.create({ ...e, coerce: !0 })
}, Vn = b;
var c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: me,
  setErrorMap: Ur,
  getErrorMap: at,
  makeIssue: ot,
  EMPTY_PATH: Vr,
  addIssueToContext: h,
  ParseStatus: A,
  INVALID: b,
  DIRTY: de,
  OK: P,
  isAborted: wt,
  isDirty: xt,
  isValid: Ze,
  isAsync: Me,
  get util() {
    return T;
  },
  get objectUtil() {
    return bt;
  },
  ZodParsedType: g,
  getParsedType: X,
  ZodType: k,
  datetimeRegex: ir,
  ZodString: $,
  ZodNumber: te,
  ZodBigInt: re,
  ZodBoolean: $e,
  ZodDate: ie,
  ZodSymbol: lt,
  ZodUndefined: De,
  ZodNull: Le,
  ZodAny: fe,
  ZodUnknown: oe,
  ZodNever: K,
  ZodVoid: ct,
  ZodArray: D,
  ZodObject: C,
  ZodUnion: Ue,
  ZodDiscriminatedUnion: ht,
  ZodIntersection: Ve,
  ZodTuple: B,
  ZodRecord: qe,
  ZodMap: ut,
  ZodSet: le,
  ZodFunction: pe,
  ZodLazy: Be,
  ZodLiteral: ze,
  ZodEnum: ne,
  ZodNativeEnum: Je,
  ZodPromise: he,
  ZodEffects: L,
  ZodTransformer: L,
  ZodOptional: V,
  ZodNullable: se,
  ZodDefault: He,
  ZodCatch: Fe,
  ZodNaN: dt,
  BRAND: nn,
  ZodBranded: At,
  ZodPipeline: Ye,
  ZodReadonly: We,
  custom: cr,
  Schema: k,
  ZodSchema: k,
  late: sn,
  get ZodFirstPartyTypeKind() {
    return m;
  },
  coerce: Un,
  any: mn,
  array: yn,
  bigint: ln,
  boolean: pr,
  date: cn,
  discriminatedUnion: wn,
  effect: Ut,
  enum: An,
  function: In,
  instanceof: an,
  intersection: xn,
  lazy: Cn,
  literal: Nn,
  map: En,
  nan: on,
  nativeEnum: jn,
  never: hn,
  null: pn,
  nullable: Rn,
  number: dr,
  object: vn,
  oboolean: Ln,
  onumber: Dn,
  optional: On,
  ostring: $n,
  pipeline: Mn,
  preprocess: Zn,
  promise: Pn,
  record: Tn,
  set: Sn,
  strictObject: _n,
  string: ur,
  symbol: un,
  transformer: Ut,
  tuple: kn,
  undefined: dn,
  union: bn,
  unknown: fn,
  void: gn,
  NEVER: Vn,
  ZodIssueCode: p,
  quotelessJson: Lr,
  ZodError: R
});
function qn() {
  return {};
}
function Bn(e, t) {
  var n, s;
  const r = {
    type: "array"
  };
  return ((s = (n = e.type) == null ? void 0 : n._def) == null ? void 0 : s.typeName) !== m.ZodAny && (r.items = S(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && I(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && I(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (I(r, "minItems", e.exactLength.value, e.exactLength.message, t), I(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function zn(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? I(r, "minimum", n.value, n.message, t) : I(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), I(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? I(r, "maximum", n.value, n.message, t) : I(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), I(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        I(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Jn() {
  return {
    type: "boolean"
  };
}
function Hn(e, t) {
  return S(e.type._def, t);
}
const Fn = (e, t) => S(e.innerType._def, t);
function mr(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((s, a) => mr(e, t, s))
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
      return Wn(e, t);
  }
}
const Wn = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        I(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
      case "max":
        I(
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
function Gn(e, t) {
  return {
    ...S(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Kn(e, t) {
  return t.effectStrategy === "input" ? S(e.schema._def, t) : {};
}
function Yn(e) {
  return {
    type: "string",
    enum: e.values
  };
}
const Xn = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Qn(e, t) {
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
    if (Xn(a))
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
function es(e, t) {
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
const ve = {
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
function fr(e, t) {
  const r = {
    type: "string"
  };
  function n(s) {
    return t.patternStrategy === "escape" ? ts(s) : s;
  }
  if (e.checks)
    for (const s of e.checks)
      switch (s.kind) {
        case "min":
          I(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, t);
          break;
        case "max":
          I(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, t);
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
              W(r, ve.email, s.message, t);
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
          W(r, s.regex.source, s.message, t);
          break;
        case "cuid":
          W(r, ve.cuid, s.message, t);
          break;
        case "cuid2":
          W(r, ve.cuid2, s.message, t);
          break;
        case "startsWith":
          W(r, "^" + n(s.value), s.message, t);
          break;
        case "endsWith":
          W(r, n(s.value) + "$", s.message, t);
          break;
        case "datetime":
          ae(r, "date-time", s.message, t);
          break;
        case "length":
          I(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, t), I(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, t);
          break;
        case "includes": {
          W(r, n(s.value), s.message, t);
          break;
        }
        case "ip": {
          s.version !== "v6" && ae(r, "ipv4", s.message, t), s.version !== "v4" && ae(r, "ipv6", s.message, t);
          break;
        }
        case "emoji":
          W(r, ve.emoji, s.message, t);
          break;
        case "ulid": {
          W(r, ve.ulid, s.message, t);
          break;
        }
      }
  return r;
}
const ts = (e) => Array.from(e).map((t) => /[a-zA-Z0-9]/.test(t) ? t : `\\${t}`).join(""), ae = (e, t, r, n) => {
  var s;
  e.format || (s = e.anyOf) != null && s.some((a) => a.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : I(e, "format", t, r, n);
}, W = (e, t, r, n) => {
  var s;
  e.pattern || (s = e.allOf) != null && s.some((a) => a.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: t,
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : I(e, "pattern", t, r, n);
};
function hr(e, t) {
  var n, s, a, o;
  if (t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === m.ZodEnum)
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
  if (((s = e.keyType) == null ? void 0 : s._def.typeName) === m.ZodString && ((a = e.keyType._def.checks) != null && a.length)) {
    const i = Object.entries(fr(e.keyType._def, t)).reduce((l, [u, d]) => u === "type" ? l : { ...l, [u]: d }, {});
    return {
      ...r,
      propertyNames: i
    };
  } else if (((o = e.keyType) == null ? void 0 : o._def.typeName) === m.ZodEnum)
    return {
      ...r,
      propertyNames: {
        enum: e.keyType._def.values
      }
    };
  return r;
}
function rs(e, t) {
  if (t.mapStrategy === "record")
    return hr(e, t);
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
function ns(e) {
  const t = e.values, n = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), s = Array.from(new Set(n.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function ss() {
  return {
    not: {}
  };
}
function as(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const pt = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function os(e, t) {
  if (t.target === "openApi3")
    return Vt(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in pt && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((s, a) => {
      const o = pt[a._def.typeName];
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
  return Vt(e, t);
}
const Vt = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, s) => S(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${s}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function is(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: pt[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        pt[e.innerType._def.typeName],
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
function ls(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", rr(r, "type", n.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? I(r, "minimum", n.value, n.message, t) : I(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), I(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? I(r, "maximum", n.value, n.message, t) : I(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), I(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        I(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function cs(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : S(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : S(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function us(e, t) {
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
    additionalProperties: cs(e, t)
  };
  return r.required.length || delete r.required, r;
}
const ds = (e, t) => {
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
}, ps = (e, t) => {
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
function ms(e, t) {
  return S(e.type._def, t);
}
function fs(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: S(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && I(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && I(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function hs(e, t) {
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
function gs() {
  return {
    not: {}
  };
}
function ys() {
  return {};
}
const vs = (e, t) => S(e.innerType._def, t);
function S(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const i = (o = t.override) == null ? void 0 : o.call(t, e, t, n, r);
    if (i !== Mr)
      return i;
  }
  if (n && !r) {
    const i = _s(n, t);
    if (i !== void 0)
      return i;
  }
  const s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  const a = ws(e, e.typeName, t);
  return a && xs(e, t, a), s.jsonSchema = a, a;
}
const _s = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: bs(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, bs = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, ws = (e, t, r) => {
  switch (t) {
    case m.ZodString:
      return fr(e, r);
    case m.ZodNumber:
      return ls(e, r);
    case m.ZodObject:
      return us(e, r);
    case m.ZodBigInt:
      return zn(e, r);
    case m.ZodBoolean:
      return Jn();
    case m.ZodDate:
      return mr(e, r);
    case m.ZodUndefined:
      return gs();
    case m.ZodNull:
      return as(r);
    case m.ZodArray:
      return Bn(e, r);
    case m.ZodUnion:
    case m.ZodDiscriminatedUnion:
      return os(e, r);
    case m.ZodIntersection:
      return Qn(e, r);
    case m.ZodTuple:
      return hs(e, r);
    case m.ZodRecord:
      return hr(e, r);
    case m.ZodLiteral:
      return es(e, r);
    case m.ZodEnum:
      return Yn(e);
    case m.ZodNativeEnum:
      return ns(e);
    case m.ZodNullable:
      return is(e, r);
    case m.ZodOptional:
      return ds(e, r);
    case m.ZodMap:
      return rs(e, r);
    case m.ZodSet:
      return fs(e, r);
    case m.ZodLazy:
      return S(e.getter()._def, r);
    case m.ZodPromise:
      return ms(e, r);
    case m.ZodNaN:
    case m.ZodNever:
      return ss();
    case m.ZodEffects:
      return Kn(e, r);
    case m.ZodAny:
      return qn();
    case m.ZodUnknown:
      return ys();
    case m.ZodDefault:
      return Gn(e, r);
    case m.ZodBranded:
      return Hn(e, r);
    case m.ZodReadonly:
      return vs(e, r);
    case m.ZodCatch:
      return Fn(e, r);
    case m.ZodPipeline:
      return ps(e, r);
    case m.ZodFunction:
    case m.ZodVoid:
    case m.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, xs = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), ks = (e) => {
  const t = Dr(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
}, Ts = (e, t) => {
  const r = ks(t), n = void 0, s = t == null ? void 0 : t.name, a = S(
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
var Es = Object.defineProperty, Ss = (e, t) => {
  for (var r in t)
    Es(e, r, { get: t[r], enumerable: !0 });
};
async function Is(e) {
  return new Promise((t) => setTimeout(t, e));
}
var Cs = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => gr(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function gr(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, s = []) {
  try {
    return await e();
  } catch (a) {
    if (rt(a) || t === 0)
      throw a;
    const o = Yt(a), i = [...s, a], l = i.length;
    if (l > t)
      throw new Zt({
        message: `Failed after ${l} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (a instanceof Error && U.isAPICallError(a) && a.isRetryable === !0 && l <= t)
      return await Is(r), gr(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw l === 1 ? a : new Zt({
      message: `Failed after ${l} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function Ns(e) {
  return {
    promptTokens: e.promptTokens,
    completionTokens: e.completionTokens,
    totalTokens: e.promptTokens + e.completionTokens
  };
}
var As = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function js(e) {
  for (const { bytes: t, mimeType: r } of As)
    if (e.length >= t.length && t.every((n, s) => e[s] === n))
      return r;
}
function qt(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return Rr(e);
    } catch (t) {
      throw new Rt({
        message: "Invalid data content. Content string is not a base64-encoded image.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Rt({ content: e });
}
var Ps = class extends Error {
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
function Os(e) {
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
        ...e.messages.map(Rs)
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
function Rs(e) {
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
                          const [o, i] = r.image.split(","), l = o.split(";")[0].split(":")[1];
                          if (l == null || i == null)
                            throw new Error("Invalid data URL format");
                          return {
                            type: "image",
                            image: qt(i),
                            mimeType: l
                          };
                        } catch {
                          throw new Error(
                            `Error processing data URL: ${Yt(
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
                const s = qt(r.image);
                return {
                  type: "image",
                  image: s,
                  mimeType: (n = r.mimeType) != null ? n : js(s)
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
      throw new Ps({ role: r });
    }
  }
}
function Zs(e) {
  if (e.prompt == null && e.messages == null)
    throw new _t({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new _t({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
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
function Ms({
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
      throw new F({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new F({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new F({
      parameter: "temperature",
      value: t,
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
    maxTokens: e,
    temperature: t ?? 0,
    topP: r,
    presencePenalty: n,
    frequencyPenalty: s,
    seed: a,
    maxRetries: o ?? 2
  };
}
function $s(e) {
  return Ts(e);
}
function yr(e, { contentType: t }) {
  var r;
  const n = new Headers((r = e == null ? void 0 : e.headers) != null ? r : {});
  return n.has("Content-Type") || n.set("Content-Type", t), n;
}
function Bt(e, t) {
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
function Ds(e) {
  return e != null && Object.keys(e).length > 0;
}
function Ls({
  tools: e,
  toolChoice: t
}) {
  return Ds(e) ? {
    tools: Object.entries(e).map(([r, n]) => ({
      type: "function",
      name: r,
      description: n.description,
      parameters: $s(n.parameters)
    })),
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
function Us({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName;
  if (t == null)
    throw new st({ toolName: e.toolName });
  const n = t[r];
  if (n == null)
    throw new st({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const s = Ct({
    text: e.args,
    schema: n.parameters
  });
  if (s.success === !1)
    throw new _r({
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
function Vs({
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
          if (e == null) {
            s.enqueue({
              type: "error",
              error: new st({ toolName: i.toolName })
            });
            break;
          }
          const f = e[d];
          if (f == null) {
            s.enqueue({
              type: "error",
              error: new st({
                toolName: i.toolName,
                availableTools: Object.keys(e)
              })
            });
            break;
          }
          try {
            const v = Us({
              toolCall: i,
              tools: e
            });
            if (l.enqueue(v), f.execute != null) {
              const y = ke();
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
            usage: Ns(i.usage)
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
async function qs({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: s,
  messages: a,
  maxRetries: o,
  abortSignal: i,
  headers: l,
  onFinish: u,
  ...d
}) {
  const f = Cs({ maxRetries: o }), v = Zs({ system: n, prompt: s, messages: a }), { stream: y, warnings: E, rawResponse: w } = await f(
    () => e.doStream({
      mode: {
        type: "regular",
        ...Ls({ tools: t, toolChoice: r })
      },
      ...Ms(d),
      inputFormat: v.type,
      prompt: Os(v),
      abortSignal: i,
      headers: l
    })
  );
  return new Bs({
    stream: Vs({
      tools: t,
      generatorStream: y
    }),
    warnings: E,
    rawResponse: w,
    onFinish: u
  });
}
var Bs = class {
  constructor({
    stream: e,
    warnings: t,
    rawResponse: r,
    onFinish: n
  }) {
    this.warnings = t, this.rawResponse = r, this.onFinish = n;
    let s;
    this.usage = new Promise((w) => {
      s = w;
    });
    let a;
    this.finishReason = new Promise((w) => {
      a = w;
    });
    let o;
    this.text = new Promise((w) => {
      o = w;
    });
    let i;
    this.toolCalls = new Promise((w) => {
      i = w;
    });
    let l;
    this.toolResults = new Promise((w) => {
      l = w;
    });
    let u, d, f = "";
    const v = [], y = [], E = this;
    this.originalStream = e.pipeThrough(
      new TransformStream({
        async transform(w, N) {
          N.enqueue(w), w.type === "text-delta" && (f += w.textDelta), w.type === "tool-call" && v.push(w), w.type === "tool-result" && y.push(w), w.type === "finish" && (d = w.usage, u = w.finishReason, s(d), a(u), o(f), i(v));
        },
        // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
        async flush(w) {
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
              warnings: t
            }));
          } catch (j) {
            w.error(j);
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
    return Bt(this.teeStream(), {
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
    return Bt(this.teeStream(), {
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
            a.enqueue(_e("text", s.textDelta));
            break;
          case "tool-call":
            a.enqueue(
              _e("tool_call", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              })
            );
            break;
          case "tool-result":
            a.enqueue(
              _e("tool_result", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args,
                result: s.result
              })
            );
            break;
          case "error":
            a.enqueue(
              _e("error", JSON.stringify(s.error))
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
    return new Ks(this.toAIStream(), e);
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
      headers: yr(e, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, va = qs;
function zs(e) {
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
      const s = Js(n);
      n.onCompletion && await n.onCompletion(r), n.onFinal && !s && await n.onFinal(r);
    }
  });
}
function Js(e) {
  return "experimental_onFunctionCall" in e;
}
function Hs() {
  const e = new TextEncoder(), t = new TextDecoder();
  return new TransformStream({
    transform: async (r, n) => {
      const s = t.decode(r);
      n.enqueue(e.encode(_e("text", s)));
    }
  });
}
new TextDecoder("utf-8");
var Fs = {};
Ss(Fs, {
  toAIStream: () => Ws
});
function Ws(e, t) {
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
  ).pipeThrough(zs(t)).pipeThrough(Hs());
}
function Gs(e, t) {
  const r = e.getReader(), n = t.getReader();
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
var Ks = class extends Response {
  constructor(e, t, r) {
    let n = e;
    r && (n = Gs(r.stream, e)), super(n, {
      ...t,
      status: 200,
      headers: yr(t, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
};
function Ys(e) {
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
function zt(e) {
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
var Xs = c.object({
  object: c.literal("error"),
  message: c.string(),
  type: c.string(),
  param: c.string().nullable(),
  code: c.string().nullable()
}), Tt = Qt({
  errorSchema: Xs,
  errorToMessage: (e) => e.message
}), Qs = class {
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
    const l = e.type, u = [];
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
      messages: Ys(t)
    };
    switch (l) {
      case "regular":
        return {
          args: { ...d, ...ra(e) },
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
        throw new M({
          functionality: "object-grammar mode"
        });
      default: {
        const f = l;
        throw new Error(`Unsupported type: ${f}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const { args: n, warnings: s } = this.getArgs(e), { responseHeaders: a, value: o } = await ee({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Q(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Tt,
      successfulResponseHandler: Ke(
        ea
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
      finishReason: zt(u.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: l },
      rawResponse: { headers: a },
      warnings: s
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: s } = await ee({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Q(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: Tt,
      successfulResponseHandler: Nt(
        ta
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: a, ...o } = t;
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
            if ((y == null ? void 0 : y.finish_reason) != null && (i = zt(y.finish_reason)), (y == null ? void 0 : y.delta) == null)
              return;
            const E = y.delta;
            if (E.content != null && f.enqueue({
              type: "text-delta",
              textDelta: E.content
            }), E.tool_calls != null)
              for (const w of E.tool_calls) {
                const N = u();
                f.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: N,
                  toolName: w.function.name,
                  argsTextDelta: w.function.arguments
                }), f.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: N,
                  toolName: w.function.name,
                  args: w.function.arguments
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
}, ea = c.object({
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
}), ta = c.object({
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
function ra(e) {
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
var na = class {
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
      throw new Ft({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: s } = await ee({
      url: `${this.config.baseURL}/embeddings`,
      headers: Q(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Tt,
      successfulResponseHandler: Ke(
        sa
      ),
      abortSignal: t,
      fetch: this.config.fetch
    });
    return {
      embeddings: s.data.map((a) => a.embedding),
      rawResponse: { headers: n }
    };
  }
}, sa = c.object({
  data: c.array(
    c.object({
      embedding: c.array(c.number())
    })
  )
});
function aa(e = {}) {
  var t, r;
  const n = (r = er((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.mistral.ai/v1", s = () => ({
    Authorization: `Bearer ${Xt({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (l, u = {}) => {
    var d;
    return new Qs(l, u, {
      provider: "mistral.chat",
      baseURL: n,
      headers: s,
      generateId: (d = e.generateId) != null ? d : ke,
      fetch: e.fetch
    });
  }, o = (l, u = {}) => new na(l, u, {
    provider: "mistral.embedding",
    baseURL: n,
    headers: s,
    fetch: e.fetch
  }), i = function(l, u) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return a(l, u);
  };
  return i.languageModel = a, i.chat = a, i.embedding = o, i.textEmbedding = o, i;
}
aa();
function oa(e) {
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
                    url: s.image instanceof URL ? s.image.toString() : `data:${(a = s.mimeType) != null ? a : "image/jpeg"};base64,${Zr(s.image)}`
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
function Jt(e) {
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
function mt(e) {
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
var jt = c.object({
  error: c.object({
    message: c.string(),
    type: c.string(),
    param: c.any().nullable(),
    code: c.string().nullable()
  })
}), Ge = Qt({
  errorSchema: jt,
  errorToMessage: (e) => e.error.message
}), ia = class {
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
      top_p: s,
      frequency_penalty: a,
      presence_penalty: o,
      seed: i,
      // messages:
      messages: oa(t)
    };
    switch (l) {
      case "regular":
        return { ...u, ...ua(e) };
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
        throw new M({
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
    const n = this.getArgs(e), { responseHeaders: s, value: a } = await ee({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Q(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Ge,
      successfulResponseHandler: Ke(
        la
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = n, l = a.choices[0];
    return {
      text: (t = l.message.content) != null ? t : void 0,
      toolCalls: (r = l.message.tool_calls) == null ? void 0 : r.map((u) => {
        var d;
        return {
          toolCallType: "function",
          toolCallId: (d = u.id) != null ? d : ke(),
          toolName: u.function.name,
          args: u.function.arguments
        };
      }),
      finishReason: mt(l.finish_reason),
      usage: {
        promptTokens: a.usage.prompt_tokens,
        completionTokens: a.usage.completion_tokens
      },
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: s },
      warnings: [],
      logprobs: Jt(l.logprobs)
    };
  }
  async doStream(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await ee({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Q(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: Ge,
      successfulResponseHandler: Nt(
        ca
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...a } = t, o = [];
    let i = "other", l = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, u;
    return {
      stream: n.pipeThrough(
        new TransformStream({
          transform(d, f) {
            var v, y, E, w, N, j, Z, Xe, z, ye, Pt, Ot;
            if (!d.success) {
              i = "error", f.enqueue({ type: "error", error: d.error });
              return;
            }
            const ce = d.value;
            if ("error" in ce) {
              i = "error", f.enqueue({ type: "error", error: ce.error });
              return;
            }
            ce.usage != null && (l = {
              promptTokens: ce.usage.prompt_tokens,
              completionTokens: ce.usage.completion_tokens
            });
            const Y = ce.choices[0];
            if ((Y == null ? void 0 : Y.finish_reason) != null && (i = mt(Y.finish_reason)), (Y == null ? void 0 : Y.delta) == null)
              return;
            const Qe = Y.delta;
            Qe.content != null && f.enqueue({
              type: "text-delta",
              textDelta: Qe.content
            });
            const gt = Jt(
              Y == null ? void 0 : Y.logprobs
            );
            if (gt != null && gt.length && (u === void 0 && (u = []), u.push(...gt)), Qe.tool_calls != null)
              for (const O of Qe.tool_calls) {
                const et = O.index;
                if (o[et] == null) {
                  if (O.type !== "function")
                    throw new yt({
                      data: O,
                      message: "Expected 'function' type."
                    });
                  if (O.id == null)
                    throw new yt({
                      data: O,
                      message: "Expected 'id' to be a string."
                    });
                  if (((v = O.function) == null ? void 0 : v.name) == null)
                    throw new yt({
                      data: O,
                      message: "Expected 'function.name' to be a string."
                    });
                  o[et] = {
                    id: O.id,
                    type: "function",
                    function: {
                      name: O.function.name,
                      arguments: (y = O.function.arguments) != null ? y : ""
                    }
                  };
                  const H = o[et];
                  ((E = H.function) == null ? void 0 : E.name) != null && ((w = H.function) == null ? void 0 : w.arguments) != null && Dt(H.function.arguments) && (f.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: H.id,
                    toolName: H.function.name,
                    argsTextDelta: H.function.arguments
                  }), f.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (N = H.id) != null ? N : ke(),
                    toolName: H.function.name,
                    args: H.function.arguments
                  }));
                  continue;
                }
                const J = o[et];
                ((j = O.function) == null ? void 0 : j.arguments) != null && (J.function.arguments += (Xe = (Z = O.function) == null ? void 0 : Z.arguments) != null ? Xe : ""), f.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: J.id,
                  toolName: J.function.name,
                  argsTextDelta: (z = O.function.arguments) != null ? z : ""
                }), ((ye = J.function) == null ? void 0 : ye.name) != null && ((Pt = J.function) == null ? void 0 : Pt.arguments) != null && Dt(J.function.arguments) && f.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (Ot = J.id) != null ? Ot : ke(),
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
}, la = c.object({
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
}), ca = c.union([
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
  jt
]);
function ua(e) {
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
function da({
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
        throw new _t({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
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
function Ht(e) {
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
var pa = class {
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
    seed: l
  }) {
    var u;
    const d = e.type, { prompt: f, stopSequences: v } = da({ prompt: r, inputFormat: t }), y = {
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
        if ((u = e.tools) != null && u.length)
          throw new M({
            functionality: "tools"
          });
        if (e.toolChoice)
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
  async doGenerate(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await ee({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Q(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Ge,
      successfulResponseHandler: Ke(
        ma
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
      finishReason: mt(o.finish_reason),
      logprobs: Ht(o.logprobs),
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
  async doStream(e) {
    const t = this.getArgs(e), { responseHeaders: r, value: n } = await ee({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Q(this.config.headers(), e.headers),
      body: {
        ...this.getArgs(e),
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: Ge,
      successfulResponseHandler: Nt(
        fa
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...a } = t;
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
            (v == null ? void 0 : v.finish_reason) != null && (o = mt(v.finish_reason)), (v == null ? void 0 : v.text) != null && d.enqueue({
              type: "text-delta",
              textDelta: v.text
            });
            const y = Ht(
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
}, ma = c.object({
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
}), fa = c.union([
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
  jt
]), ha = class {
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
      throw new Ft({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: s } = await ee({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Q(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: Ge,
      successfulResponseHandler: Ke(
        ga
      ),
      abortSignal: r,
      fetch: this.config.fetch
    });
    return {
      embeddings: s.data.map((a) => a.embedding),
      rawResponse: { headers: n }
    };
  }
}, ga = c.object({
  data: c.array(
    c.object({
      embedding: c.array(c.number())
    })
  )
});
function ya(e = {}) {
  var t, r, n;
  const s = (r = er((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.openai.com/v1", a = (n = e.compatibility) != null ? n : "compatible", o = () => ({
    Authorization: `Bearer ${Xt({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), i = (v, y = {}) => new ia(v, y, {
    provider: "openai.chat",
    url: ({ path: E }) => `${s}${E}`,
    headers: o,
    compatibility: a,
    fetch: e.fetch
  }), l = (v, y = {}) => new pa(v, y, {
    provider: "openai.completion",
    url: ({ path: E }) => `${s}${E}`,
    headers: o,
    compatibility: a,
    fetch: e.fetch
  }), u = (v, y = {}) => new ha(v, y, {
    provider: "openai.embedding",
    url: ({ path: E }) => `${s}${E}`,
    headers: o,
    fetch: e.fetch
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
ya({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  aa as createMistral,
  ya as createOpenAI,
  va as experimental_streamText
};
