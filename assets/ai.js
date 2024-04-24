var D = class extends Error {
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
    data: c
  }) {
    super(t), this.name = "AI_APICallError", this.url = e, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = s, this.responseBody = a, this.cause = o, this.isRetryable = i, this.data = c;
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
}, Qt = class extends Error {
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
}, J = class extends Error {
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
}, er = class extends Error {
  constructor({
    content: t,
    message: e = `Invalid data content. Expected a string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof t}.`
  }) {
    super(e), this.name = "AI_InvalidDataContentError", this.content = t;
  }
  static isInvalidDataContentError(t) {
    return t instanceof Error && t.name === "AI_InvalidDataContentError" && t.content != null;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      content: this.content
    };
  }
}, at = class extends Error {
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
}, nt = class extends Error {
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
function ut(t) {
  return t == null ? "unknown error" : typeof t == "string" ? t : t instanceof Error ? t.message : JSON.stringify(t);
}
var tr = class extends Error {
  constructor({
    toolArgs: t,
    toolName: e,
    cause: r,
    message: n = `Invalid arguments for tool ${e}: ${ut(
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
}, Ue = class extends Error {
  constructor({ text: t, cause: e }) {
    super(
      `JSON parsing failed: Text: ${t}.
Error message: ${ut(e)}`
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
}, Le = class extends Error {
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
}, Ve = class extends Error {
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
}, yt = class extends Error {
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
}, me = class extends Error {
  constructor({ value: t, cause: e }) {
    super(
      `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${ut(e)}`
    ), this.name = "AI_TypeValidationError", this.cause = e, this.value = t;
  }
  static isTypeValidationError(t) {
    return t instanceof Error && t.name === "AI_TypeValidationError" && typeof t.value == "string" && typeof t.cause == "string";
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
}, U = class extends Error {
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
let Ot = (t, e = 21) => (r = e) => {
  let n = "", s = r;
  for (; s--; )
    n += t[Math.random() * t.length | 0];
  return n;
};
function rr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var de = { exports: {} };
const nr = typeof Buffer < "u", vt = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, _t = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Pt(t, e, r) {
  r == null && e !== null && typeof e == "object" && (r = e, e = void 0), nr && Buffer.isBuffer(t) && (t = t.toString()), t && t.charCodeAt(0) === 65279 && (t = t.slice(1));
  const n = JSON.parse(t, e);
  if (n === null || typeof n != "object")
    return n;
  const s = r && r.protoAction || "error", a = r && r.constructorAction || "error";
  if (s === "ignore" && a === "ignore")
    return n;
  if (s !== "ignore" && a !== "ignore") {
    if (vt.test(t) === !1 && _t.test(t) === !1)
      return n;
  } else if (s !== "ignore" && a === "ignore") {
    if (vt.test(t) === !1)
      return n;
  } else if (_t.test(t) === !1)
    return n;
  return Ct(n, { protoAction: s, constructorAction: a, safe: r && r.safe });
}
function Ct(t, { protoAction: e = "error", constructorAction: r = "error", safe: n } = {}) {
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
        const c = o[i];
        c && typeof c == "object" && s.push(c);
      }
    }
  }
  return t;
}
function dt(t, e, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Pt(t, e, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function sr(t, e) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Pt(t, e, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
de.exports = dt;
de.exports.default = dt;
de.exports.parse = dt;
de.exports.safeParse = sr;
de.exports.scan = Ct;
var ar = de.exports;
const pt = /* @__PURE__ */ rr(ar);
function or(t) {
  let e, r, n, s, a, o, i;
  return c(), {
    feed: u,
    reset: c
  };
  function c() {
    e = !0, r = "", n = 0, s = -1, a = void 0, o = void 0, i = "";
  }
  function u(y) {
    r = r ? r + y : y, e && ir(r) && (r = r.slice(Zt.length)), e = !1;
    const _ = r.length;
    let v = 0, E = !1;
    for (; v < _; ) {
      E && (r[v] === `
` && ++v, E = !1);
      let N = -1, A = s, P;
      for (let Z = n; N < 0 && Z < _; ++Z)
        P = r[Z], P === ":" && A < 0 ? A = Z - v : P === "\r" ? (E = !0, N = Z - v) : P === `
` && (N = Z - v);
      if (N < 0) {
        n = _ - v, s = A;
        break;
      } else
        n = 0, s = -1;
      m(r, v, A, N), v += N + 1;
    }
    v === _ ? r = "" : v > 0 && (r = r.slice(v));
  }
  function m(y, _, v, E) {
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
    const N = v < 0, A = y.slice(_, _ + (N ? E : v));
    let P = 0;
    N ? P = E : y[_ + v + 1] === " " ? P = v + 2 : P = v + 1;
    const Z = _ + P, Me = E - P, z = y.slice(Z, Z + Me).toString();
    if (A === "data")
      i += z ? "".concat(z, `
`) : `
`;
    else if (A === "event")
      o = z;
    else if (A === "id" && !z.includes("\0"))
      a = z;
    else if (A === "retry") {
      const ee = parseInt(z, 10);
      Number.isNaN(ee) || t({
        type: "reconnect-interval",
        value: ee
      });
    }
  }
}
const Zt = [239, 187, 191];
function ir(t) {
  return Zt.every((e, r) => t.charCodeAt(r) === e);
}
class cr extends TransformStream {
  constructor() {
    let e;
    super({
      start(r) {
        e = or((n) => {
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
var Rt = Ot(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function lr(t) {
  return t == null ? "unknown error" : typeof t == "string" ? t : t instanceof Error ? t.message : JSON.stringify(t);
}
function Mt({
  apiKey: t,
  environmentVariableName: e,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof t == "string")
    return t;
  if (t != null)
    throw new Le({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new Le({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (t = process.env[e], t == null)
    throw new Le({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${e} environment variable.`
    });
  if (typeof t != "string")
    throw new Le({
      message: `${n} API key must be a string. The value of the ${e} environment variable is not a string.`
    });
  return t;
}
function ur({
  value: t,
  schema: e
}) {
  try {
    return e.parse(t);
  } catch (r) {
    throw new me({ value: t, cause: r });
  }
}
function dr({
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
      error: new me({
        value: t,
        cause: r.error
      })
    };
  } catch (r) {
    return {
      success: !1,
      error: me.isTypeValidationError(r) ? r : new me({ value: t, cause: r })
    };
  }
}
function pr({
  text: t,
  schema: e
}) {
  try {
    const r = pt.parse(t);
    return e == null ? r : ur({ value: r, schema: e });
  } catch (r) {
    throw Ue.isJSONParseError(r) || me.isTypeValidationError(r) ? r : new Ue({ text: t, cause: r });
  }
}
function ft({
  text: t,
  schema: e
}) {
  try {
    const r = pt.parse(t);
    return e == null ? {
      success: !0,
      value: r
    } : dr({ value: r, schema: e });
  } catch (r) {
    return {
      success: !1,
      error: Ue.isJSONParseError(r) ? r : new Ue({ text: t, cause: r })
    };
  }
}
function mr(t) {
  try {
    return pt.parse(t), !0;
  } catch {
    return !1;
  }
}
var ce = async ({
  url: t,
  headers: e,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: s,
  abortSignal: a
}) => fr({
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
  abortSignal: a
}), fr = async ({
  url: t,
  headers: e = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: s,
  abortSignal: a
}) => {
  try {
    const o = Object.fromEntries(
      Object.entries(e).filter(([c, u]) => u != null)
    ), i = await fetch(t, {
      method: "POST",
      headers: o,
      body: r.content,
      signal: a
    });
    if (!i.ok)
      try {
        throw await s({
          response: i,
          url: t,
          requestBodyValues: r.values
        });
      } catch (c) {
        throw c instanceof Error && (c.name === "AbortError" || D.isAPICallError(c)) ? c : new D({
          message: "Failed to process error response",
          cause: c,
          statusCode: i.status,
          url: t,
          requestBodyValues: r.values
        });
      }
    try {
      return await n({
        response: i,
        url: t,
        requestBodyValues: r.values
      });
    } catch (c) {
      throw c instanceof Error && (c.name === "AbortError" || D.isAPICallError(c)) ? c : new D({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: t,
        requestBodyValues: r.values
      });
    }
  } catch (o) {
    if (o instanceof Error && o.name === "AbortError")
      throw o;
    if (o instanceof TypeError && o.message === "fetch failed") {
      const i = o.cause;
      if (i != null)
        throw new D({
          message: `Cannot connect to API: ${i.message}`,
          cause: i,
          url: t,
          requestBodyValues: r.values,
          isRetryable: !0
          // retry when network error
        });
    }
    throw o;
  }
}, $t = ({
  errorSchema: t,
  errorToMessage: e,
  isRetryable: r
}) => async ({ response: n, url: s, requestBodyValues: a }) => {
  const o = await n.text(), i = mt(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new D({
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
    const c = pr({
      text: o,
      schema: t
    });
    return {
      responseHeaders: i,
      value: new D({
        message: e(c),
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
      value: new D({
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
}, ht = (t) => async ({ response: e }) => {
  const r = mt(e);
  if (e.body == null)
    throw new Qt({});
  return {
    responseHeaders: r,
    value: e.body.pipeThrough(new TextDecoderStream()).pipeThrough(new cr()).pipeThrough(
      new TransformStream({
        transform({ data: n }, s) {
          n !== "[DONE]" && s.enqueue(
            ft({
              text: n,
              schema: t
            })
          );
        }
      })
    )
  };
}, gt = (t) => async ({ response: e, url: r, requestBodyValues: n }) => {
  const s = await e.text(), a = ft({
    text: s,
    schema: t
  }), o = mt(e);
  if (!a.success)
    throw new D({
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
function hr(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), r = globalThis.atob(e);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function gr(t) {
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += String.fromCodePoint(t[r]);
  return globalThis.btoa(e);
}
function Lt(t) {
  return t == null ? void 0 : t.replace(/\/$/, "");
}
function Dt(t, e, r, n) {
  n != null && n.errorMessages && r && (t.errorMessage = {
    ...t.errorMessage,
    [e]: r
  });
}
function S(t, e, r, n, s) {
  t[e] = r, Dt(t, e, n, s);
}
const yr = Symbol("Let zodToJsonSchema decide on which parser to use"), bt = {
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
}, vr = (t) => typeof t == "string" ? {
  ...bt,
  name: t
} : {
  ...bt,
  ...t
};
var k;
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
})(k || (k = {}));
var ot;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(ot || (ot = {}));
const f = k.arrayToEnum([
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
]), G = (t) => {
  switch (typeof t) {
    case "undefined":
      return f.undefined;
    case "string":
      return f.string;
    case "number":
      return isNaN(t) ? f.nan : f.number;
    case "boolean":
      return f.boolean;
    case "function":
      return f.function;
    case "bigint":
      return f.bigint;
    case "symbol":
      return f.symbol;
    case "object":
      return Array.isArray(t) ? f.array : t === null ? f.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? f.promise : typeof Map < "u" && t instanceof Map ? f.map : typeof Set < "u" && t instanceof Set ? f.set : typeof Date < "u" && t instanceof Date ? f.date : f.object;
    default:
      return f.unknown;
  }
}, p = k.arrayToEnum([
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
]), _r = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class M extends Error {
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
          let i = n, c = 0;
          for (; c < o.path.length; ) {
            const u = o.path[c];
            c === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], c++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, k.jsonStringifyReplacer, 2);
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
M.create = (t) => new M(t);
const fe = (t, e) => {
  let r;
  switch (t.code) {
    case p.invalid_type:
      t.received === f.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case p.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, k.jsonStringifyReplacer)}`;
      break;
    case p.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${k.joinValues(t.keys, ", ")}`;
      break;
    case p.invalid_union:
      r = "Invalid input";
      break;
    case p.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${k.joinValues(t.options)}`;
      break;
    case p.invalid_enum_value:
      r = `Invalid enum value. Expected ${k.joinValues(t.options)}, received '${t.received}'`;
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
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : k.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
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
      r = e.defaultError, k.assertNever(t);
  }
  return { message: r };
};
let Ut = fe;
function br(t) {
  Ut = t;
}
function Be() {
  return Ut;
}
const ze = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, a = [...r, ...s.path || []], o = {
    ...s,
    path: a
  };
  let i = "";
  const c = n.filter((u) => !!u).slice().reverse();
  for (const u of c)
    i = u(o, { data: e, defaultError: i }).message;
  return {
    ...s,
    path: a,
    message: s.message || i
  };
}, wr = [];
function h(t, e) {
  const r = ze({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Be(),
      fe
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class j {
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
    for (const s of r)
      n.push({
        key: await s.key,
        value: await s.value
      });
    return j.mergeObjectSync(e, n);
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
}), Vt = (t) => ({ status: "dirty", value: t }), O = (t) => ({ status: "valid", value: t }), it = (t) => t.status === "aborted", ct = (t) => t.status === "dirty", he = (t) => t.status === "valid", qe = (t) => typeof Promise < "u" && t instanceof Promise;
var g;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(g || (g = {}));
class V {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const wt = (t, e) => {
  if (he(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new M(t.common.issues);
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
  return e ? { errorMap: e, description: s } : { errorMap: (o, i) => o.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: n ?? i.defaultError } : { message: r ?? i.defaultError }, description: s };
}
class x {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return G(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: G(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new j(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: G(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (qe(r))
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
      parsedType: G(e)
    }, a = this._parseSync({ data: e, path: s.path, parent: s });
    return wt(s, a);
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
      parsedType: G(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), a = await (qe(s) ? s : Promise.resolve(s));
    return wt(n, a);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, a) => {
      const o = e(s), i = () => a.addIssue({
        code: p.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new L({
      schema: this,
      typeName: d.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return F.create(this, this._def);
  }
  nullable() {
    return ae.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $.create(this, this._def);
  }
  promise() {
    return ue.create(this, this._def);
  }
  or(e) {
    return _e.create([this, e], this._def);
  }
  and(e) {
    return be.create(this, e, this._def);
  }
  transform(e) {
    return new L({
      ...w(this._def),
      schema: this,
      typeName: d.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Se({
      ...w(this._def),
      innerType: this,
      defaultValue: r,
      typeName: d.ZodDefault
    });
  }
  brand() {
    return new zt({
      typeName: d.ZodBranded,
      type: this,
      ...w(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new We({
      ...w(this._def),
      innerType: this,
      catchValue: r,
      typeName: d.ZodCatch
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
    return Re.create(this, e);
  }
  readonly() {
    return Ge.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const xr = /^c[^\s-]{8,}$/i, kr = /^[a-z][a-z0-9]*$/, Tr = /^[0-9A-HJKMNP-TV-Z]{26}$/, Sr = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Er = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ir = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let st;
const Nr = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, jr = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Ar = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Or(t, e) {
  return !!((e === "v4" || !e) && Nr.test(t) || (e === "v6" || !e) && jr.test(t));
}
class R extends x {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
      const a = this._getOrReturnCtx(e);
      return h(
        a,
        {
          code: p.invalid_type,
          expected: f.string,
          received: a.parsedType
        }
        //
      ), b;
    }
    const n = new j();
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
        Er.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "email",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        st || (st = new RegExp(Ir, "u")), st.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "emoji",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        Sr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "uuid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        xr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "cuid",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        kr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "cuid2",
          code: p.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        Tr.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
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
        }), n.dirty()) : a.kind === "datetime" ? Ar(a).test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          code: p.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? Or(e.data, a.version) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "ip",
          code: p.invalid_string,
          message: a.message
        }), n.dirty()) : k.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: p.invalid_string,
      ...g.errToObj(n)
    });
  }
  _addCheck(e) {
    return new R({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...g.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...g.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...g.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...g.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...g.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...g.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...g.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...g.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      ...g.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...g.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...g.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...g.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...g.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...g.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...g.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...g.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, g.errToObj(e));
  }
  trim() {
    return new R({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new R({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new R({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
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
R.create = (t) => {
  var e;
  return new R({
    checks: [],
    typeName: d.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...w(t)
  });
};
function Pr(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, a = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return a % o / Math.pow(10, s);
}
class Y extends x {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_type,
        expected: f.number,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new j();
    for (const a of this._def.checks)
      a.kind === "int" ? k.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
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
      }), s.dirty()) : a.kind === "multipleOf" ? Pr(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
        code: p.not_finite,
        message: a.message
      }), s.dirty()) : k.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, g.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, g.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, g.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, g.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Y({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: g.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: g.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: g.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: g.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: g.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: g.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: g.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: g.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: g.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && k.isInteger(e.value));
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
Y.create = (t) => new Y({
  checks: [],
  typeName: d.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...w(t)
});
class X extends x {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== f.bigint) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_type,
        expected: f.bigint,
        received: a.parsedType
      }), b;
    }
    let n;
    const s = new j();
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
      }), s.dirty()) : k.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, g.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, g.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, g.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, g.toString(r));
  }
  setLimit(e, r, n, s) {
    return new X({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: g.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new X({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: g.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: g.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: g.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: g.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(r)
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
X.create = (t) => {
  var e;
  return new X({
    checks: [],
    typeName: d.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...w(t)
  });
};
class ge extends x {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: f.boolean,
        received: n.parsedType
      }), b;
    }
    return O(e.data);
  }
}
ge.create = (t) => new ge({
  typeName: d.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...w(t)
});
class ne extends x {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_type,
        expected: f.date,
        received: a.parsedType
      }), b;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: p.invalid_date
      }), b;
    }
    const n = new j();
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
      }), n.dirty()) : k.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new ne({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: g.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: g.toString(r)
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
ne.create = (t) => new ne({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: d.ZodDate,
  ...w(t)
});
class Je extends x {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: f.symbol,
        received: n.parsedType
      }), b;
    }
    return O(e.data);
  }
}
Je.create = (t) => new Je({
  typeName: d.ZodSymbol,
  ...w(t)
});
class ye extends x {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: f.undefined,
        received: n.parsedType
      }), b;
    }
    return O(e.data);
  }
}
ye.create = (t) => new ye({
  typeName: d.ZodUndefined,
  ...w(t)
});
class ve extends x {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: f.null,
        received: n.parsedType
      }), b;
    }
    return O(e.data);
  }
}
ve.create = (t) => new ve({
  typeName: d.ZodNull,
  ...w(t)
});
class le extends x {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return O(e.data);
  }
}
le.create = (t) => new le({
  typeName: d.ZodAny,
  ...w(t)
});
class re extends x {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return O(e.data);
  }
}
re.create = (t) => new re({
  typeName: d.ZodUnknown,
  ...w(t)
});
class W extends x {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return h(r, {
      code: p.invalid_type,
      expected: f.never,
      received: r.parsedType
    }), b;
  }
}
W.create = (t) => new W({
  typeName: d.ZodNever,
  ...w(t)
});
class He extends x {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: f.void,
        received: n.parsedType
      }), b;
    }
    return O(e.data);
  }
}
He.create = (t) => new He({
  typeName: d.ZodVoid,
  ...w(t)
});
class $ extends x {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== f.array)
      return h(r, {
        code: p.invalid_type,
        expected: f.array,
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
      return Promise.all([...r.data].map((o, i) => s.type._parseAsync(new V(r, o, r.path, i)))).then((o) => j.mergeArray(n, o));
    const a = [...r.data].map((o, i) => s.type._parseSync(new V(r, o, r.path, i)));
    return j.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new $({
      ...this._def,
      minLength: { value: e, message: g.toString(r) }
    });
  }
  max(e, r) {
    return new $({
      ...this._def,
      maxLength: { value: e, message: g.toString(r) }
    });
  }
  length(e, r) {
    return new $({
      ...this._def,
      exactLength: { value: e, message: g.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
$.create = (t, e) => new $({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: d.ZodArray,
  ...w(e)
});
function oe(t) {
  if (t instanceof I) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = F.create(oe(n));
    }
    return new I({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof $ ? new $({
      ...t._def,
      type: oe(t.element)
    }) : t instanceof F ? F.create(oe(t.unwrap())) : t instanceof ae ? ae.create(oe(t.unwrap())) : t instanceof B ? B.create(t.items.map((e) => oe(e))) : t;
}
class I extends x {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = k.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== f.object) {
      const u = this._getOrReturnCtx(e);
      return h(u, {
        code: p.invalid_type,
        expected: f.object,
        received: u.parsedType
      }), b;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: a, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof W && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        o.includes(u) || i.push(u);
    const c = [];
    for (const u of o) {
      const m = a[u], y = s.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: m._parse(new V(s, y, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof W) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const m of i)
          c.push({
            key: { status: "valid", value: m },
            value: { status: "valid", value: s.data[m] }
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
      for (const m of i) {
        const y = s.data[m];
        c.push({
          key: { status: "valid", value: m },
          value: u._parse(
            new V(s, y, s.path, m)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: m in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const m of c) {
        const y = await m.key;
        u.push({
          key: y,
          value: await m.value,
          alwaysSet: m.alwaysSet
        });
      }
      return u;
    }).then((u) => j.mergeObjectSync(n, u)) : j.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return g.errToObj, new I({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, a, o, i;
          const c = (o = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = g.errToObj(e).message) !== null && i !== void 0 ? i : c
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
  extend(e) {
    return new I({
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
    return new I({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: d.ZodObject
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
    return new I({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return k.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new I({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return k.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new I({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return oe(this);
  }
  partial(e) {
    const r = {};
    return k.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new I({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return k.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof F; )
          a = a._def.innerType;
        r[n] = a;
      }
    }), new I({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Bt(k.objectKeys(this.shape));
  }
}
I.create = (t, e) => new I({
  shape: () => t,
  unknownKeys: "strip",
  catchall: W.create(),
  typeName: d.ZodObject,
  ...w(e)
});
I.strictCreate = (t, e) => new I({
  shape: () => t,
  unknownKeys: "strict",
  catchall: W.create(),
  typeName: d.ZodObject,
  ...w(e)
});
I.lazycreate = (t, e) => new I({
  shape: t,
  unknownKeys: "strip",
  catchall: W.create(),
  typeName: d.ZodObject,
  ...w(e)
});
class _e extends x {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((i) => new M(i.ctx.common.issues));
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
      for (const c of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, m = c._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (m.status === "valid")
          return m;
        m.status === "dirty" && !a && (a = { result: m, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((c) => new M(c));
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
_e.create = (t, e) => new _e({
  options: t,
  typeName: d.ZodUnion,
  ...w(e)
});
const De = (t) => t instanceof xe ? De(t.schema) : t instanceof L ? De(t.innerType()) : t instanceof ke ? [t.value] : t instanceof Q ? t.options : t instanceof Te ? Object.keys(t.enum) : t instanceof Se ? De(t._def.innerType) : t instanceof ye ? [void 0] : t instanceof ve ? [null] : null;
class et extends x {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.object)
      return h(r, {
        code: p.invalid_type,
        expected: f.object,
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
      const o = De(a.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (s.has(i))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
        s.set(i, a);
      }
    }
    return new et({
      typeName: d.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...w(n)
    });
  }
}
function lt(t, e) {
  const r = G(t), n = G(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === f.object && n === f.object) {
    const s = k.objectKeys(e), a = k.objectKeys(t).filter((i) => s.indexOf(i) !== -1), o = { ...t, ...e };
    for (const i of a) {
      const c = lt(t[i], e[i]);
      if (!c.valid)
        return { valid: !1 };
      o[i] = c.data;
    }
    return { valid: !0, data: o };
  } else if (r === f.array && n === f.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const o = t[a], i = e[a], c = lt(o, i);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === f.date && n === f.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class be extends x {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (a, o) => {
      if (it(a) || it(o))
        return b;
      const i = lt(a.value, o.value);
      return i.valid ? ((ct(a) || ct(o)) && r.dirty(), { status: r.value, value: i.data }) : (h(n, {
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
be.create = (t, e, r) => new be({
  left: t,
  right: e,
  typeName: d.ZodIntersection,
  ...w(r)
});
class B extends x {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== f.array)
      return h(n, {
        code: p.invalid_type,
        expected: f.array,
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
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new V(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(a).then((o) => j.mergeArray(r, o)) : j.mergeArray(r, a);
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
    typeName: d.ZodTuple,
    rest: null,
    ...w(e)
  });
};
class we extends x {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== f.object)
      return h(n, {
        code: p.invalid_type,
        expected: f.object,
        received: n.parsedType
      }), b;
    const s = [], a = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: a._parse(new V(n, i, n.path, i)),
        value: o._parse(new V(n, n.data[i], n.path, i))
      });
    return n.common.async ? j.mergeObjectAsync(r, s) : j.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof x ? new we({
      keyType: e,
      valueType: r,
      typeName: d.ZodRecord,
      ...w(n)
    }) : new we({
      keyType: R.create(),
      valueType: e,
      typeName: d.ZodRecord,
      ...w(r)
    });
  }
}
class Fe extends x {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== f.map)
      return h(n, {
        code: p.invalid_type,
        expected: f.map,
        received: n.parsedType
      }), b;
    const s = this._def.keyType, a = this._def.valueType, o = [...n.data.entries()].map(([i, c], u) => ({
      key: s._parse(new V(n, i, n.path, [u, "key"])),
      value: a._parse(new V(n, c, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const u = await c.key, m = await c.value;
          if (u.status === "aborted" || m.status === "aborted")
            return b;
          (u.status === "dirty" || m.status === "dirty") && r.dirty(), i.set(u.value, m.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of o) {
        const u = c.key, m = c.value;
        if (u.status === "aborted" || m.status === "aborted")
          return b;
        (u.status === "dirty" || m.status === "dirty") && r.dirty(), i.set(u.value, m.value);
      }
      return { status: r.value, value: i };
    }
  }
}
Fe.create = (t, e, r) => new Fe({
  valueType: e,
  keyType: t,
  typeName: d.ZodMap,
  ...w(r)
});
class se extends x {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== f.set)
      return h(n, {
        code: p.invalid_type,
        expected: f.set,
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
    function o(c) {
      const u = /* @__PURE__ */ new Set();
      for (const m of c) {
        if (m.status === "aborted")
          return b;
        m.status === "dirty" && r.dirty(), u.add(m.value);
      }
      return { status: r.value, value: u };
    }
    const i = [...n.data.values()].map((c, u) => a._parse(new V(n, c, n.path, u)));
    return n.common.async ? Promise.all(i).then((c) => o(c)) : o(i);
  }
  min(e, r) {
    return new se({
      ...this._def,
      minSize: { value: e, message: g.toString(r) }
    });
  }
  max(e, r) {
    return new se({
      ...this._def,
      maxSize: { value: e, message: g.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
se.create = (t, e) => new se({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: d.ZodSet,
  ...w(e)
});
class ie extends x {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.function)
      return h(r, {
        code: p.invalid_type,
        expected: f.function,
        received: r.parsedType
      }), b;
    function n(i, c) {
      return ze({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Be(),
          fe
        ].filter((u) => !!u),
        issueData: {
          code: p.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(i, c) {
      return ze({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Be(),
          fe
        ].filter((u) => !!u),
        issueData: {
          code: p.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof ue) {
      const i = this;
      return O(async function(...c) {
        const u = new M([]), m = await i._def.args.parseAsync(c, a).catch((v) => {
          throw u.addIssue(n(c, v)), u;
        }), y = await Reflect.apply(o, this, m);
        return await i._def.returns._def.type.parseAsync(y, a).catch((v) => {
          throw u.addIssue(s(y, v)), u;
        });
      });
    } else {
      const i = this;
      return O(function(...c) {
        const u = i._def.args.safeParse(c, a);
        if (!u.success)
          throw new M([n(c, u.error)]);
        const m = Reflect.apply(o, this, u.data), y = i._def.returns.safeParse(m, a);
        if (!y.success)
          throw new M([s(m, y.error)]);
        return y.data;
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
    return new ie({
      ...this._def,
      args: B.create(e).rest(re.create())
    });
  }
  returns(e) {
    return new ie({
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
    return new ie({
      args: e || B.create([]).rest(re.create()),
      returns: r || re.create(),
      typeName: d.ZodFunction,
      ...w(n)
    });
  }
}
class xe extends x {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
xe.create = (t, e) => new xe({
  getter: t,
  typeName: d.ZodLazy,
  ...w(e)
});
class ke extends x {
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
ke.create = (t, e) => new ke({
  value: t,
  typeName: d.ZodLiteral,
  ...w(e)
});
function Bt(t, e) {
  return new Q({
    values: t,
    typeName: d.ZodEnum,
    ...w(e)
  });
}
class Q extends x {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return h(r, {
        expected: k.joinValues(n),
        received: r.parsedType,
        code: p.invalid_type
      }), b;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return h(r, {
        received: r.data,
        code: p.invalid_enum_value,
        options: n
      }), b;
    }
    return O(e.data);
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
  extract(e) {
    return Q.create(e);
  }
  exclude(e) {
    return Q.create(this.options.filter((r) => !e.includes(r)));
  }
}
Q.create = Bt;
class Te extends x {
  _parse(e) {
    const r = k.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== f.string && n.parsedType !== f.number) {
      const s = k.objectValues(r);
      return h(n, {
        expected: k.joinValues(s),
        received: n.parsedType,
        code: p.invalid_type
      }), b;
    }
    if (r.indexOf(e.data) === -1) {
      const s = k.objectValues(r);
      return h(n, {
        received: n.data,
        code: p.invalid_enum_value,
        options: s
      }), b;
    }
    return O(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Te.create = (t, e) => new Te({
  values: t,
  typeName: d.ZodNativeEnum,
  ...w(e)
});
class ue extends x {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.promise && r.common.async === !1)
      return h(r, {
        code: p.invalid_type,
        expected: f.promise,
        received: r.parsedType
      }), b;
    const n = r.parsedType === f.promise ? r.data : Promise.resolve(r.data);
    return O(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ue.create = (t, e) => new ue({
  type: t,
  typeName: d.ZodPromise,
  ...w(e)
});
class L extends x {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === d.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
      return n.common.issues.length ? {
        status: "dirty",
        value: n.data
      } : n.common.async ? Promise.resolve(o).then((i) => this._def.schema._parseAsync({
        data: i,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: o,
        path: n.path,
        parent: n
      });
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
        if (!he(o))
          return o;
        const i = s.transform(o.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => he(o) ? Promise.resolve(s.transform(o.value, a)).then((i) => ({ status: r.value, value: i })) : o);
    k.assertNever(s);
  }
}
L.create = (t, e, r) => new L({
  schema: t,
  typeName: d.ZodEffects,
  effect: e,
  ...w(r)
});
L.createWithPreprocess = (t, e, r) => new L({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: d.ZodEffects,
  ...w(r)
});
class F extends x {
  _parse(e) {
    return this._getType(e) === f.undefined ? O(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
F.create = (t, e) => new F({
  innerType: t,
  typeName: d.ZodOptional,
  ...w(e)
});
class ae extends x {
  _parse(e) {
    return this._getType(e) === f.null ? O(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ae.create = (t, e) => new ae({
  innerType: t,
  typeName: d.ZodNullable,
  ...w(e)
});
class Se extends x {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === f.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Se.create = (t, e) => new Se({
  innerType: t,
  typeName: d.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...w(e)
});
class We extends x {
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
    return qe(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new M(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new M(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
We.create = (t, e) => new We({
  innerType: t,
  typeName: d.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...w(e)
});
class Ke extends x {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        code: p.invalid_type,
        expected: f.nan,
        received: n.parsedType
      }), b;
    }
    return { status: "valid", value: e.data };
  }
}
Ke.create = (t) => new Ke({
  typeName: d.ZodNaN,
  ...w(t)
});
const Cr = Symbol("zod_brand");
class zt extends x {
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
class Re extends x {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? b : a.status === "dirty" ? (r.dirty(), Vt(a.value)) : this._def.out._parseAsync({
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
    return new Re({
      in: e,
      out: r,
      typeName: d.ZodPipeline
    });
  }
}
class Ge extends x {
  _parse(e) {
    const r = this._def.innerType._parse(e);
    return he(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Ge.create = (t, e) => new Ge({
  innerType: t,
  typeName: d.ZodReadonly,
  ...w(e)
});
const qt = (t, e = {}, r) => t ? le.create().superRefine((n, s) => {
  var a, o;
  if (!t(n)) {
    const i = typeof e == "function" ? e(n) : typeof e == "string" ? { message: e } : e, c = (o = (a = i.fatal) !== null && a !== void 0 ? a : r) !== null && o !== void 0 ? o : !0, u = typeof i == "string" ? { message: i } : i;
    s.addIssue({ code: "custom", ...u, fatal: c });
  }
}) : le.create(), Zr = {
  object: I.lazycreate
};
var d;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(d || (d = {}));
const Rr = (t, e = {
  message: `Input not instance of ${t.name}`
}) => qt((r) => r instanceof t, e), Jt = R.create, Ht = Y.create, Mr = Ke.create, $r = X.create, Ft = ge.create, Lr = ne.create, Dr = Je.create, Ur = ye.create, Vr = ve.create, Br = le.create, zr = re.create, qr = W.create, Jr = He.create, Hr = $.create, Fr = I.create, Wr = I.strictCreate, Kr = _e.create, Gr = et.create, Yr = be.create, Xr = B.create, Qr = we.create, en = Fe.create, tn = se.create, rn = ie.create, nn = xe.create, sn = ke.create, an = Q.create, on = Te.create, cn = ue.create, xt = L.create, ln = F.create, un = ae.create, dn = L.createWithPreprocess, pn = Re.create, mn = () => Jt().optional(), fn = () => Ht().optional(), hn = () => Ft().optional(), gn = {
  string: (t) => R.create({ ...t, coerce: !0 }),
  number: (t) => Y.create({ ...t, coerce: !0 }),
  boolean: (t) => ge.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => X.create({ ...t, coerce: !0 }),
  date: (t) => ne.create({ ...t, coerce: !0 })
}, yn = b;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: fe,
  setErrorMap: br,
  getErrorMap: Be,
  makeIssue: ze,
  EMPTY_PATH: wr,
  addIssueToContext: h,
  ParseStatus: j,
  INVALID: b,
  DIRTY: Vt,
  OK: O,
  isAborted: it,
  isDirty: ct,
  isValid: he,
  isAsync: qe,
  get util() {
    return k;
  },
  get objectUtil() {
    return ot;
  },
  ZodParsedType: f,
  getParsedType: G,
  ZodType: x,
  ZodString: R,
  ZodNumber: Y,
  ZodBigInt: X,
  ZodBoolean: ge,
  ZodDate: ne,
  ZodSymbol: Je,
  ZodUndefined: ye,
  ZodNull: ve,
  ZodAny: le,
  ZodUnknown: re,
  ZodNever: W,
  ZodVoid: He,
  ZodArray: $,
  ZodObject: I,
  ZodUnion: _e,
  ZodDiscriminatedUnion: et,
  ZodIntersection: be,
  ZodTuple: B,
  ZodRecord: we,
  ZodMap: Fe,
  ZodSet: se,
  ZodFunction: ie,
  ZodLazy: xe,
  ZodLiteral: ke,
  ZodEnum: Q,
  ZodNativeEnum: Te,
  ZodPromise: ue,
  ZodEffects: L,
  ZodTransformer: L,
  ZodOptional: F,
  ZodNullable: ae,
  ZodDefault: Se,
  ZodCatch: We,
  ZodNaN: Ke,
  BRAND: Cr,
  ZodBranded: zt,
  ZodPipeline: Re,
  ZodReadonly: Ge,
  custom: qt,
  Schema: x,
  ZodSchema: x,
  late: Zr,
  get ZodFirstPartyTypeKind() {
    return d;
  },
  coerce: gn,
  any: Br,
  array: Hr,
  bigint: $r,
  boolean: Ft,
  date: Lr,
  discriminatedUnion: Gr,
  effect: xt,
  enum: an,
  function: rn,
  instanceof: Rr,
  intersection: Yr,
  lazy: nn,
  literal: sn,
  map: en,
  nan: Mr,
  nativeEnum: on,
  never: qr,
  null: Vr,
  nullable: un,
  number: Ht,
  object: Fr,
  oboolean: hn,
  onumber: fn,
  optional: ln,
  ostring: mn,
  pipeline: pn,
  preprocess: dn,
  promise: cn,
  record: Qr,
  set: tn,
  strictObject: Wr,
  string: Jt,
  symbol: Dr,
  transformer: xt,
  tuple: Xr,
  undefined: Ur,
  union: Kr,
  unknown: zr,
  void: Jr,
  NEVER: yn,
  ZodIssueCode: p,
  quotelessJson: _r,
  ZodError: M
});
function vn() {
  return {};
}
function _n(t, e) {
  var n, s;
  const r = {
    type: "array"
  };
  return ((s = (n = t.type) == null ? void 0 : n._def) == null ? void 0 : s.typeName) !== d.ZodAny && (r.items = T(t.type._def, {
    ...e,
    currentPath: [...e.currentPath, "items"]
  })), t.minLength && S(r, "minItems", t.minLength.value, t.minLength.message, e), t.maxLength && S(r, "maxItems", t.maxLength.value, t.maxLength.message, e), t.exactLength && (S(r, "minItems", t.exactLength.value, t.exactLength.message, e), S(r, "maxItems", t.exactLength.value, t.exactLength.message, e)), r;
}
function bn(t, e) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? S(r, "minimum", n.value, n.message, e) : S(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), S(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? S(r, "maximum", n.value, n.message, e) : S(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), S(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        S(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function wn() {
  return {
    type: "boolean"
  };
}
function xn(t, e) {
  return T(t.type._def, e);
}
const kn = (t, e) => T(t.innerType._def, e);
function Wt(t, e, r) {
  const n = r ?? e.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((s, a) => Wt(t, e, s))
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
      return Tn(t, e);
  }
}
const Tn = (t, e) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (e.target === "openApi3")
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        S(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          e
        );
        break;
      case "max":
        S(
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
function Sn(t, e) {
  return {
    ...T(t.innerType._def, e),
    default: t.defaultValue()
  };
}
function En(t, e) {
  return e.effectStrategy === "input" ? T(t.schema._def, e) : {};
}
function In(t) {
  return {
    type: "string",
    enum: t.values
  };
}
const Nn = (t) => "type" in t && t.type === "string" ? !1 : "allOf" in t;
function jn(t, e) {
  const r = [
    T(t.left._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "0"]
    }),
    T(t.right._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a);
  let n = e.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return r.forEach((a) => {
    if (Nn(a))
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
function An(t, e) {
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
const pe = {
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
function Kt(t, e) {
  const r = {
    type: "string"
  };
  function n(s) {
    return e.patternStrategy === "escape" ? On(s) : s;
  }
  if (t.checks)
    for (const s of t.checks)
      switch (s.kind) {
        case "min":
          S(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, e);
          break;
        case "max":
          S(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, e);
          break;
        case "email":
          switch (e.emailStrategy) {
            case "format:email":
              te(r, "email", s.message, e);
              break;
            case "format:idn-email":
              te(r, "idn-email", s.message, e);
              break;
            case "pattern:zod":
              H(r, pe.email, s.message, e);
              break;
          }
          break;
        case "url":
          te(r, "uri", s.message, e);
          break;
        case "uuid":
          te(r, "uuid", s.message, e);
          break;
        case "regex":
          H(r, s.regex.source, s.message, e);
          break;
        case "cuid":
          H(r, pe.cuid, s.message, e);
          break;
        case "cuid2":
          H(r, pe.cuid2, s.message, e);
          break;
        case "startsWith":
          H(r, "^" + n(s.value), s.message, e);
          break;
        case "endsWith":
          H(r, n(s.value) + "$", s.message, e);
          break;
        case "datetime":
          te(r, "date-time", s.message, e);
          break;
        case "length":
          S(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, s.value) : s.value, s.message, e), S(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, s.value) : s.value, s.message, e);
          break;
        case "includes": {
          H(r, n(s.value), s.message, e);
          break;
        }
        case "ip": {
          s.version !== "v6" && te(r, "ipv4", s.message, e), s.version !== "v4" && te(r, "ipv6", s.message, e);
          break;
        }
        case "emoji":
          H(r, pe.emoji, s.message, e);
          break;
        case "ulid": {
          H(r, pe.ulid, s.message, e);
          break;
        }
      }
  return r;
}
const On = (t) => Array.from(t).map((e) => /[a-zA-Z0-9]/.test(e) ? e : `\\${e}`).join(""), te = (t, e, r, n) => {
  var s;
  t.format || (s = t.anyOf) != null && s.some((a) => a.format) ? (t.anyOf || (t.anyOf = []), t.format && (t.anyOf.push({
    format: t.format,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { format: t.errorMessage.format }
    }
  }), delete t.format, t.errorMessage && (delete t.errorMessage.format, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.anyOf.push({
    format: e,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : S(t, "format", e, r, n);
}, H = (t, e, r, n) => {
  var s;
  t.pattern || (s = t.allOf) != null && s.some((a) => a.pattern) ? (t.allOf || (t.allOf = []), t.pattern && (t.allOf.push({
    pattern: t.pattern,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { pattern: t.errorMessage.pattern }
    }
  }), delete t.pattern, t.errorMessage && (delete t.errorMessage.pattern, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.allOf.push({
    pattern: e,
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : S(t, "pattern", e, r, n);
};
function Gt(t, e) {
  var n, s, a, o;
  if (e.target === "openApi3" && ((n = t.keyType) == null ? void 0 : n._def.typeName) === d.ZodEnum)
    return {
      type: "object",
      required: t.keyType._def.values,
      properties: t.keyType._def.values.reduce((i, c) => ({
        ...i,
        [c]: T(t.valueType._def, {
          ...e,
          currentPath: [...e.currentPath, "properties", c]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: T(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (e.target === "openApi3")
    return r;
  if (((s = t.keyType) == null ? void 0 : s._def.typeName) === d.ZodString && ((a = t.keyType._def.checks) != null && a.length)) {
    const i = Object.entries(Kt(t.keyType._def, e)).reduce((c, [u, m]) => u === "type" ? c : { ...c, [u]: m }, {});
    return {
      ...r,
      propertyNames: i
    };
  } else if (((o = t.keyType) == null ? void 0 : o._def.typeName) === d.ZodEnum)
    return {
      ...r,
      propertyNames: {
        enum: t.keyType._def.values
      }
    };
  return r;
}
function Pn(t, e) {
  if (e.mapStrategy === "record")
    return Gt(t, e);
  const r = T(t.keyType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "0"]
  }) || {}, n = T(t.valueType._def, {
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
function Cn(t) {
  const e = t.values, n = Object.keys(t.values).filter((a) => typeof e[e[a]] != "number").map((a) => e[a]), s = Array.from(new Set(n.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function Zn() {
  return {
    not: {}
  };
}
function Rn(t) {
  return t.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const Ye = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Mn(t, e) {
  if (e.target === "openApi3")
    return kt(t, e);
  const r = t.options instanceof Map ? Array.from(t.options.values()) : t.options;
  if (r.every((n) => n._def.typeName in Ye && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((s, a) => {
      const o = Ye[a._def.typeName];
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
  return kt(t, e);
}
const kt = (t, e) => {
  const r = (t.options instanceof Map ? Array.from(t.options.values()) : t.options).map((n, s) => T(n._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", `${s}`]
  })).filter((n) => !!n && (!e.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function $n(t, e) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(t.innerType._def.typeName) && (!t.innerType._def.checks || !t.innerType._def.checks.length))
    return e.target === "openApi3" ? {
      type: Ye[t.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        Ye[t.innerType._def.typeName],
        "null"
      ]
    };
  if (e.target === "openApi3") {
    const n = T(t.innerType._def, {
      ...e,
      currentPath: [...e.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = T(t.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function Ln(t, e) {
  const r = {
    type: "number"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", Dt(r, "type", n.message, e);
        break;
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? S(r, "minimum", n.value, n.message, e) : S(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), S(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? S(r, "maximum", n.value, n.message, e) : S(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), S(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        S(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function Dn(t, e) {
  return e.removeAdditionalStrategy === "strict" ? t.catchall._def.typeName === "ZodNever" ? t.unknownKeys !== "strict" : T(t.catchall._def, {
    ...e,
    currentPath: [...e.currentPath, "additionalProperties"]
  }) ?? !0 : t.catchall._def.typeName === "ZodNever" ? t.unknownKeys === "passthrough" : T(t.catchall._def, {
    ...e,
    currentPath: [...e.currentPath, "additionalProperties"]
  }) ?? !0;
}
function Un(t, e) {
  const r = {
    type: "object",
    ...Object.entries(t.shape()).reduce((n, [s, a]) => {
      if (a === void 0 || a._def === void 0)
        return n;
      const o = T(a._def, {
        ...e,
        currentPath: [...e.currentPath, "properties", s],
        propertyPath: [...e.currentPath, "properties", s]
      });
      return o === void 0 ? n : {
        properties: { ...n.properties, [s]: o },
        required: a.isOptional() ? n.required : [...n.required, s]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: Dn(t, e)
  };
  return r.required.length || delete r.required, r;
}
const Vn = (t, e) => {
  var n;
  if (e.currentPath.toString() === ((n = e.propertyPath) == null ? void 0 : n.toString()))
    return T(t.innerType._def, e);
  const r = T(t.innerType._def, {
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
}, Bn = (t, e) => {
  if (e.pipeStrategy === "input")
    return T(t.in._def, e);
  if (e.pipeStrategy === "output")
    return T(t.out._def, e);
  const r = T(t.in._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", "0"]
  }), n = T(t.out._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((s) => s !== void 0)
  };
};
function zn(t, e) {
  return T(t.type._def, e);
}
function qn(t, e) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: T(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "items"]
    })
  };
  return t.minSize && S(n, "minItems", t.minSize.value, t.minSize.message, e), t.maxSize && S(n, "maxItems", t.maxSize.value, t.maxSize.message, e), n;
}
function Jn(t, e) {
  return t.rest ? {
    type: "array",
    minItems: t.items.length,
    items: t.items.map((r, n) => T(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: T(t.rest._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: t.items.length,
    maxItems: t.items.length,
    items: t.items.map((r, n) => T(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function Hn() {
  return {
    not: {}
  };
}
function Fn() {
  return {};
}
const Wn = (t, e) => T(t.innerType._def, e);
function T(t, e, r = !1) {
  var o;
  const n = e.seen.get(t);
  if (e.override) {
    const i = (o = e.override) == null ? void 0 : o.call(e, t, e, n, r);
    if (i !== yr)
      return i;
  }
  if (n && !r) {
    const i = Kn(n, e);
    if (i !== void 0)
      return i;
  }
  const s = { def: t, path: e.currentPath, jsonSchema: void 0 };
  e.seen.set(t, s);
  const a = Yn(t, t.typeName, e);
  return a && Xn(t, e, a), s.jsonSchema = a, a;
}
const Kn = (t, e) => {
  switch (e.$refStrategy) {
    case "root":
      return { $ref: t.path.join("/") };
    case "relative":
      return { $ref: Gn(e.currentPath, t.path) };
    case "none":
    case "seen":
      return t.path.length < e.currentPath.length && t.path.every((r, n) => e.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${e.currentPath.join("/")}! Defaulting to any`), {}) : e.$refStrategy === "seen" ? {} : void 0;
  }
}, Gn = (t, e) => {
  let r = 0;
  for (; r < t.length && r < e.length && t[r] === e[r]; r++)
    ;
  return [(t.length - r).toString(), ...e.slice(r)].join("/");
}, Yn = (t, e, r) => {
  switch (e) {
    case d.ZodString:
      return Kt(t, r);
    case d.ZodNumber:
      return Ln(t, r);
    case d.ZodObject:
      return Un(t, r);
    case d.ZodBigInt:
      return bn(t, r);
    case d.ZodBoolean:
      return wn();
    case d.ZodDate:
      return Wt(t, r);
    case d.ZodUndefined:
      return Hn();
    case d.ZodNull:
      return Rn(r);
    case d.ZodArray:
      return _n(t, r);
    case d.ZodUnion:
    case d.ZodDiscriminatedUnion:
      return Mn(t, r);
    case d.ZodIntersection:
      return jn(t, r);
    case d.ZodTuple:
      return Jn(t, r);
    case d.ZodRecord:
      return Gt(t, r);
    case d.ZodLiteral:
      return An(t, r);
    case d.ZodEnum:
      return In(t);
    case d.ZodNativeEnum:
      return Cn(t);
    case d.ZodNullable:
      return $n(t, r);
    case d.ZodOptional:
      return Vn(t, r);
    case d.ZodMap:
      return Pn(t, r);
    case d.ZodSet:
      return qn(t, r);
    case d.ZodLazy:
      return T(t.getter()._def, r);
    case d.ZodPromise:
      return zn(t, r);
    case d.ZodNaN:
    case d.ZodNever:
      return Zn();
    case d.ZodEffects:
      return En(t, r);
    case d.ZodAny:
      return vn();
    case d.ZodUnknown:
      return Fn();
    case d.ZodDefault:
      return Sn(t, r);
    case d.ZodBranded:
      return xn(t, r);
    case d.ZodReadonly:
      return Wn(t, r);
    case d.ZodCatch:
      return kn(t, r);
    case d.ZodPipeline:
      return Bn(t, r);
    case d.ZodFunction:
    case d.ZodVoid:
    case d.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, Xn = (t, e, r) => (t.description && (r.description = t.description, e.markdownDescription && (r.markdownDescription = t.description)), r), Qn = (t) => {
  const e = vr(t), r = e.name !== void 0 ? [...e.basePath, e.definitionPath, e.name] : e.basePath;
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
}, es = (t, e) => {
  const r = Qn(e), n = typeof e == "object" && e.definitions ? Object.entries(e.definitions).reduce((i, [c, u]) => ({
    ...i,
    [c]: T(u._def, {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, c]
    }, !0) ?? {}
  }), {}) : void 0, s = typeof e == "string" ? e : e == null ? void 0 : e.name, a = T(t._def, s === void 0 ? r : {
    ...r,
    currentPath: [...r.basePath, r.definitionPath, s]
  }, !1) ?? {}, o = s === void 0 ? n ? {
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
function ts(t) {
  return {
    promptTokens: t.promptTokens,
    completionTokens: t.completionTokens,
    totalTokens: t.promptTokens + t.completionTokens
  };
}
var rs = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function ns(t) {
  for (const { bytes: e, mimeType: r } of rs)
    if (t.length >= e.length && e.every((n, s) => t[s] === n))
      return r;
}
function ss(t) {
  if (t instanceof Uint8Array)
    return t;
  if (typeof t == "string")
    return hr(t);
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  throw new er({ content: t });
}
function as(t) {
  const e = [];
  switch (t.system != null && e.push({ role: "system", content: t.system }), t.type) {
    case "prompt": {
      e.push({
        role: "user",
        content: [{ type: "text", text: t.prompt }]
      });
      break;
    }
    case "messages": {
      e.push(
        ...t.messages.map((r) => {
          switch (r.role) {
            case "user":
              return typeof r.content == "string" ? {
                role: "user",
                content: [{ type: "text", text: r.content }]
              } : {
                role: "user",
                content: r.content.map(
                  (n) => {
                    var s;
                    switch (n.type) {
                      case "text":
                        return n;
                      case "image": {
                        if (n.image instanceof URL)
                          return {
                            type: "image",
                            image: n.image,
                            mimeType: n.mimeType
                          };
                        const a = ss(
                          n.image
                        );
                        return {
                          type: "image",
                          image: a,
                          mimeType: (s = n.mimeType) != null ? s : ns(a)
                        };
                      }
                    }
                  }
                )
              };
            case "assistant":
              return typeof r.content == "string" ? {
                role: "assistant",
                content: [{ type: "text", text: r.content }]
              } : { role: "assistant", content: r.content };
            case "tool":
              return r;
          }
        })
      );
      break;
    }
    default: {
      const r = t;
      throw new Error(`Unsupported prompt type: ${r}`);
    }
  }
  return e;
}
function os(t) {
  if (t.prompt == null && t.messages == null)
    throw new at({
      prompt: t,
      message: "prompt or messages must be defined"
    });
  if (t.prompt != null && t.messages != null)
    throw new at({
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
function is({
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
      throw new J({
        parameter: "maxTokens",
        value: t,
        message: "maxTokens must be an integer"
      });
    if (t < 1)
      throw new J({
        parameter: "maxTokens",
        value: t,
        message: "maxTokens must be >= 1"
      });
  }
  if (e != null && typeof e != "number")
    throw new J({
      parameter: "temperature",
      value: e,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new J({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new J({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new J({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (a != null && !Number.isInteger(a))
    throw new J({
      parameter: "seed",
      value: a,
      message: "seed must be an integer"
    });
  if (o != null) {
    if (!Number.isInteger(o))
      throw new J({
        parameter: "maxRetries",
        value: o,
        message: "maxRetries must be an integer"
      });
    if (o < 0)
      throw new J({
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
function cs(t) {
  return es(t);
}
async function ls(t) {
  return new Promise((e) => setTimeout(e, t));
}
var us = ({
  maxRetries: t = 2,
  initialDelayInMs: e = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => Yt(n, {
  maxRetries: t,
  delayInMs: e,
  backoffFactor: r
});
async function Yt(t, {
  maxRetries: e,
  delayInMs: r,
  backoffFactor: n
}, s = []) {
  try {
    return await t();
  } catch (a) {
    if (a instanceof Error && a.name === "AbortError" || e === 0)
      throw a;
    const o = lr(a), i = [...s, a], c = i.length;
    if (c > e)
      throw new yt({
        message: `Failed after ${c} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (a instanceof Error && D.isAPICallError(a) && a.isRetryable === !0 && c <= e)
      return await ls(r), Yt(
        t,
        { maxRetries: e, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw c === 1 ? a : new yt({
      message: `Failed after ${c} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function Tt(t, e) {
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
function ds({
  toolCall: t,
  tools: e
}) {
  const r = t.toolName;
  if (e == null)
    throw new Ve({ toolName: t.toolName });
  const n = e[r];
  if (n == null)
    throw new Ve({
      toolName: t.toolName,
      availableTools: Object.keys(e)
    });
  const s = ft({
    text: t.args,
    schema: n.parameters
  });
  if (s.success === !1)
    throw new tr({
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
var ps = Ot(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function ms({
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
    transform(i, c) {
      const u = i.type;
      switch (u) {
        case "text-delta":
        case "error": {
          c.enqueue(i);
          break;
        }
        case "tool-call": {
          const m = i.toolName;
          if (t == null) {
            s.enqueue({
              type: "error",
              error: new Ve({ toolName: i.toolName })
            });
            break;
          }
          const y = t[m];
          if (y == null) {
            s.enqueue({
              type: "error",
              error: new Ve({
                toolName: i.toolName,
                availableTools: Object.keys(t)
              })
            });
            break;
          }
          try {
            const _ = ds({
              toolCall: i,
              tools: t
            });
            if (c.enqueue(_), y.execute != null) {
              const v = ps();
              n.add(v), y.execute(_.args).then(
                (E) => {
                  s.enqueue({
                    ..._,
                    type: "tool-result",
                    result: E
                  }), n.delete(v), r && n.size === 0 && s.close();
                },
                (E) => {
                  s.enqueue({
                    type: "error",
                    error: E
                  }), n.delete(v), r && n.size === 0 && s.close();
                }
              );
            }
          } catch (_) {
            s.enqueue({
              type: "error",
              error: _
            });
          }
          break;
        }
        case "finish": {
          c.enqueue({
            type: "finish",
            finishReason: i.finishReason,
            logprobs: i.logprobs,
            usage: ts(i.usage)
          });
          break;
        }
        case "tool-call-delta":
          break;
        default: {
          const m = u;
          throw new Error(`Unhandled chunk type: ${m}`);
        }
      }
    },
    flush() {
      r = !0, n.size === 0 && s.close();
    }
  });
  return new ReadableStream({
    async start(i) {
      e.pipeThrough(o).pipeTo(
        new WritableStream({
          write(c) {
            i.enqueue(c);
          },
          close() {
          }
        })
      ), a.pipeTo(
        new WritableStream({
          write(c) {
            i.enqueue(c);
          },
          close() {
            i.close();
          }
        })
      );
    }
  });
}
async function Rs({
  model: t,
  tools: e,
  system: r,
  prompt: n,
  messages: s,
  maxRetries: a,
  abortSignal: o,
  ...i
}) {
  const c = us({ maxRetries: a }), u = os({ system: r, prompt: n, messages: s }), { stream: m, warnings: y, rawResponse: _ } = await c(
    () => t.doStream({
      mode: {
        type: "regular",
        tools: e == null ? void 0 : Object.entries(e).map(([v, E]) => ({
          type: "function",
          name: v,
          description: E.description,
          parameters: cs(E.parameters)
        }))
      },
      ...is(i),
      inputFormat: u.type,
      prompt: as(u),
      abortSignal: o
    })
  );
  return new fs({
    stream: ms({
      tools: e,
      generatorStream: m
    }),
    warnings: y,
    rawResponse: _
  });
}
var fs = class {
  constructor({
    stream: t,
    warnings: e,
    rawResponse: r
  }) {
    this.originalStream = t, this.warnings = e, this.rawResponse = r;
  }
  /**
  A text stream that returns only the generated text deltas. You can use it
  as either an AsyncIterable or a ReadableStream. When an error occurs, the
  stream will throw the error.
     */
  get textStream() {
    return Tt(this.originalStream, {
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
    return Tt(this.originalStream, {
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
  toAIStream(t) {
    return this.textStream.pipeThrough(St(t)).pipeThrough(Et());
  }
  /**
  Writes stream data output to a Node.js response-like object.
  It sets a `Content-Type` header to `text/plain; charset=utf-8` and 
  writes each text delta as a separate chunk.
  
  @param response A Node.js response-like object (ServerResponse).
  @param init Optional headers and status code.
     */
  pipeAIStreamToResponse(t, e) {
    var r;
    t.writeHead((r = e == null ? void 0 : e.status) != null ? r : 200, {
      "Content-Type": "text/plain; charset=utf-8",
      ...e == null ? void 0 : e.headers
    });
    const n = this.textStream.pipeThrough(St(void 0)).pipeThrough(Et()).getReader();
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
  Creates a simple text stream response.
  Each text delta is encoded as UTF-8 and sent as a separate chunk.
  Non-text-delta events are ignored.
     */
  toTextStreamResponse(t) {
    var e;
    const r = new TextEncoder();
    return new Response(
      this.textStream.pipeThrough(
        new TransformStream({
          transform(n, s) {
            s.enqueue(r.encode(n));
          }
        })
      ),
      {
        status: (e = t == null ? void 0 : t.status) != null ? e : 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          ...t == null ? void 0 : t.headers
        }
      }
    );
  }
}, Ee = {
  code: "0",
  name: "text",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: t };
  }
}, Ie = {
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
}, Ne = {
  code: "2",
  name: "data",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: t };
  }
}, je = {
  code: "3",
  name: "error",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: t };
  }
}, Ae = {
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
}, Oe = {
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
}, Pe = {
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
}, Ce = {
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
}, Ze = {
  code: "8",
  name: "message_annotations",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: t };
  }
}, Xt = [
  Ee,
  Ie,
  Ne,
  je,
  Ae,
  Oe,
  Pe,
  Ce,
  Ze
];
Ee.code + "", Ie.code + "", Ne.code + "", je.code + "", Ae.code + "", Oe.code + "", Pe.code + "", Ce.code + "", Ze.code + "";
Ee.name + "", Ee.code, Ie.name + "", Ie.code, Ne.name + "", Ne.code, je.name + "", je.code, Ae.name + "", Ae.code, Oe.name + "", Oe.code, Pe.name + "", Pe.code, Ce.name + "", Ce.code, Ze.name + "", Ze.code;
Xt.map((t) => t.code);
function hs(t, e) {
  const r = Xt.find((n) => n.name === t);
  if (!r)
    throw new Error(`Invalid stream part type: ${t}`);
  return `${r.code}:${JSON.stringify(e)}
`;
}
function St(t) {
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
      const s = gs(n);
      n.onCompletion && await n.onCompletion(r), n.onFinal && !s && await n.onFinal(r);
    }
  });
}
function gs(t) {
  return "experimental_onFunctionCall" in t;
}
function Et() {
  const t = new TextEncoder(), e = new TextDecoder();
  return new TransformStream({
    transform: async (r, n) => {
      const s = e.decode(r);
      n.enqueue(t.encode(hs("text", s)));
    }
  });
}
new TextDecoder("utf-8");
function ys(t) {
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
                throw new U({
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
function It(t) {
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
var vs = l.object({
  object: l.literal("error"),
  message: l.string(),
  type: l.string(),
  param: l.string().nullable(),
  code: l.string().nullable()
}), Nt = $t({
  errorSchema: vs,
  errorToMessage: (t) => t.message
}), _s = class {
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
    var c;
    const u = t.type, m = [];
    a != null && m.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), o != null && m.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    });
    const y = {
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
      messages: ys(e)
    };
    switch (u) {
      case "regular": {
        const _ = (c = t.tools) != null && c.length ? t.tools : void 0;
        return {
          args: {
            ...y,
            tools: _ == null ? void 0 : _.map((v) => ({
              type: "function",
              function: {
                name: v.name,
                description: v.description,
                parameters: v.parameters
              }
            }))
          },
          warnings: m
        };
      }
      case "object-json":
        return {
          args: {
            ...y,
            response_format: { type: "json_object" }
          },
          warnings: m
        };
      case "object-tool":
        return {
          args: {
            ...y,
            tool_choice: "any",
            tools: [{ type: "function", function: t.tool }]
          },
          warnings: m
        };
      case "object-grammar":
        throw new U({
          functionality: "object-grammar mode"
        });
      default: {
        const _ = u;
        throw new Error(`Unsupported type: ${_}`);
      }
    }
  }
  async doGenerate(t) {
    var e, r;
    const { args: n, warnings: s } = this.getArgs(t), { responseHeaders: a, value: o } = await ce({
      url: `${this.config.baseURL}/chat/completions`,
      headers: this.config.headers(),
      body: n,
      failedResponseHandler: Nt,
      successfulResponseHandler: gt(
        bs
      ),
      abortSignal: t.abortSignal
    }), { messages: i, ...c } = n, u = o.choices[0];
    return {
      text: (e = u.message.content) != null ? e : void 0,
      toolCalls: (r = u.message.tool_calls) == null ? void 0 : r.map((m) => ({
        toolCallType: "function",
        toolCallId: this.config.generateId(),
        toolName: m.function.name,
        args: m.function.arguments
      })),
      finishReason: It(u.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: c },
      rawResponse: { headers: a },
      warnings: s
    };
  }
  async doStream(t) {
    const { args: e, warnings: r } = this.getArgs(t), { responseHeaders: n, value: s } = await ce({
      url: `${this.config.baseURL}/chat/completions`,
      headers: this.config.headers(),
      body: {
        ...e,
        stream: !0
      },
      failedResponseHandler: Nt,
      successfulResponseHandler: ht(
        ws
      ),
      abortSignal: t.abortSignal
    }), { messages: a, ...o } = e;
    let i = "other", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    };
    const u = this.config.generateId;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(m, y) {
            if (!m.success) {
              y.enqueue({ type: "error", error: m.error });
              return;
            }
            const _ = m.value;
            _.usage != null && (c = {
              promptTokens: _.usage.prompt_tokens,
              completionTokens: _.usage.completion_tokens
            });
            const v = _.choices[0];
            if ((v == null ? void 0 : v.finish_reason) != null && (i = It(v.finish_reason)), (v == null ? void 0 : v.delta) == null)
              return;
            const E = v.delta;
            if (E.content != null && y.enqueue({
              type: "text-delta",
              textDelta: E.content
            }), E.tool_calls != null)
              for (const N of E.tool_calls) {
                const A = u();
                y.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: A,
                  toolName: N.function.name,
                  argsTextDelta: N.function.arguments
                }), y.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: A,
                  toolName: N.function.name,
                  args: N.function.arguments
                });
              }
          },
          flush(m) {
            m.enqueue({ type: "finish", finishReason: i, usage: c });
          }
        })
      ),
      rawCall: { rawPrompt: a, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, bs = l.object({
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
}), ws = l.object({
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
}), xs = class {
  /**
   * Creates a new Mistral provider instance.
   */
  constructor(t = {}) {
    var e, r, n;
    this.baseURL = (r = Lt((e = t.baseURL) != null ? e : t.baseUrl)) != null ? r : "https://api.mistral.ai/v1", this.apiKey = t.apiKey, this.headers = t.headers, this.generateId = (n = t.generateId) != null ? n : Rt;
  }
  get baseConfig() {
    return {
      baseURL: this.baseURL,
      headers: () => ({
        Authorization: `Bearer ${Mt({
          apiKey: this.apiKey,
          environmentVariableName: "MISTRAL_API_KEY",
          description: "Mistral"
        })}`,
        ...this.headers
      })
    };
  }
  chat(t, e = {}) {
    return new _s(t, e, {
      provider: "mistral.chat",
      ...this.baseConfig,
      generateId: this.generateId
    });
  }
};
function ks(t = {}) {
  const e = new xs(t), r = function(n, s) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return e.chat(n, s);
  };
  return r.chat = e.chat.bind(e), r;
}
ks();
function Ts(t) {
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
            var a;
            switch (s.type) {
              case "text":
                return { type: "text", text: s.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: {
                    url: s.image instanceof URL ? s.image.toString() : `data:${(a = s.mimeType) != null ? a : "image/jpeg"};base64,${gr(s.image)}`
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
function Xe(t) {
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
      return "other";
  }
}
var Ss = l.object({
  error: l.object({
    message: l.string(),
    type: l.string(),
    param: l.any().nullable(),
    code: l.string().nullable()
  })
}), Qe = $t({
  errorSchema: Ss,
  errorToMessage: (t) => t.error.message
});
function jt(t) {
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
var Es = class {
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
    var c;
    const u = t.type, m = {
      // model id:
      model: this.modelId,
      // model specific settings:
      logit_bias: this.settings.logitBias,
      logprobs: this.settings.logprobs === !0 || typeof this.settings.logprobs == "number",
      top_logprobs: typeof this.settings.logprobs == "number" ? this.settings.logprobs : typeof this.settings.logprobs == "boolean" && this.settings.logprobs ? 0 : void 0,
      user: this.settings.user,
      // standardized settings:
      max_tokens: r,
      temperature: n,
      top_p: s,
      frequency_penalty: a,
      presence_penalty: o,
      seed: i,
      // messages:
      messages: Ts(e)
    };
    switch (u) {
      case "regular": {
        const y = (c = t.tools) != null && c.length ? t.tools : void 0;
        return {
          ...m,
          tools: y == null ? void 0 : y.map((_) => ({
            type: "function",
            function: {
              name: _.name,
              description: _.description,
              parameters: _.parameters
            }
          }))
        };
      }
      case "object-json":
        return {
          ...m,
          response_format: { type: "json_object" }
        };
      case "object-tool":
        return {
          ...m,
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
        throw new U({
          functionality: "object-grammar mode"
        });
      default: {
        const y = u;
        throw new Error(`Unsupported type: ${y}`);
      }
    }
  }
  async doGenerate(t) {
    var e, r;
    const n = this.getArgs(t), { responseHeaders: s, value: a } = await ce({
      url: `${this.config.baseURL}/chat/completions`,
      headers: this.config.headers(),
      body: n,
      failedResponseHandler: Qe,
      successfulResponseHandler: gt(
        Is
      ),
      abortSignal: t.abortSignal
    }), { messages: o, ...i } = n, c = a.choices[0];
    return {
      text: (e = c.message.content) != null ? e : void 0,
      toolCalls: (r = c.message.tool_calls) == null ? void 0 : r.map((u) => ({
        toolCallType: "function",
        toolCallId: u.id,
        toolName: u.function.name,
        args: u.function.arguments
      })),
      finishReason: Xe(c.finish_reason),
      usage: {
        promptTokens: a.usage.prompt_tokens,
        completionTokens: a.usage.completion_tokens
      },
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: s },
      warnings: [],
      logprobs: jt(c.logprobs)
    };
  }
  async doStream(t) {
    const e = this.getArgs(t), { responseHeaders: r, value: n } = await ce({
      url: `${this.config.baseURL}/chat/completions`,
      headers: this.config.headers(),
      body: {
        ...e,
        stream: !0
      },
      failedResponseHandler: Qe,
      successfulResponseHandler: ht(
        Ns
      ),
      abortSignal: t.abortSignal
    }), { messages: s, ...a } = e, o = [];
    let i = "other", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, u;
    return {
      stream: n.pipeThrough(
        new TransformStream({
          transform(m, y) {
            var _, v, E, N, A, P, Z, Me, z;
            if (!m.success) {
              y.enqueue({ type: "error", error: m.error });
              return;
            }
            const ee = m.value;
            ee.usage != null && (c = {
              promptTokens: ee.usage.prompt_tokens,
              completionTokens: ee.usage.completion_tokens
            });
            const K = ee.choices[0];
            if ((K == null ? void 0 : K.finish_reason) != null && (i = Xe(K.finish_reason)), (K == null ? void 0 : K.delta) == null)
              return;
            const $e = K.delta;
            $e.content != null && y.enqueue({
              type: "text-delta",
              textDelta: $e.content
            });
            const tt = jt(
              K == null ? void 0 : K.logprobs
            );
            if (tt != null && tt.length && (u === void 0 && (u = []), u.push(...tt)), $e.tool_calls != null)
              for (const C of $e.tool_calls) {
                const rt = C.index;
                if (o[rt] == null) {
                  if (C.type !== "function")
                    throw new nt({
                      data: C,
                      message: "Expected 'function' type."
                    });
                  if (C.id == null)
                    throw new nt({
                      data: C,
                      message: "Expected 'id' to be a string."
                    });
                  if (((_ = C.function) == null ? void 0 : _.name) == null)
                    throw new nt({
                      data: C,
                      message: "Expected 'function.name' to be a string."
                    });
                  o[rt] = {
                    id: C.id,
                    type: "function",
                    function: {
                      name: C.function.name,
                      arguments: (v = C.function.arguments) != null ? v : ""
                    }
                  };
                  continue;
                }
                const q = o[rt];
                ((E = C.function) == null ? void 0 : E.arguments) != null && (q.function.arguments += (A = (N = C.function) == null ? void 0 : N.arguments) != null ? A : ""), y.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: q.id,
                  toolName: q.function.name,
                  argsTextDelta: (P = C.function.arguments) != null ? P : ""
                }), !(((Z = q.function) == null ? void 0 : Z.name) == null || ((Me = q.function) == null ? void 0 : Me.arguments) == null || !mr(q.function.arguments)) && y.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (z = q.id) != null ? z : Rt(),
                  toolName: q.function.name,
                  args: q.function.arguments
                });
              }
          },
          flush(m) {
            m.enqueue({
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
}, Is = l.object({
  choices: l.array(
    l.object({
      message: l.object({
        role: l.literal("assistant"),
        content: l.string().nullable(),
        tool_calls: l.array(
          l.object({
            id: l.string(),
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
  object: l.literal("chat.completion"),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  })
}), Ns = l.object({
  object: l.enum([
    "chat.completion.chunk",
    "chat.completion"
    // support for OpenAI-compatible providers such as Perplexity
  ]),
  choices: l.array(
    l.object({
      delta: l.object({
        role: l.enum(["assistant"]).optional(),
        content: l.string().nullable().optional(),
        tool_calls: l.array(
          l.object({
            index: l.number(),
            id: l.string().optional(),
            type: l.literal("function").optional(),
            function: l.object({
              name: l.string().optional(),
              arguments: l.string().optional()
            })
          })
        ).optional()
      }),
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
      finish_reason: l.string().nullable().optional(),
      index: l.number()
    })
  ),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  }).optional().nullable()
});
function js({
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
        throw new at({
          message: "Unexpected system message in prompt: ${content}",
          prompt: t
        });
      case "user": {
        const i = o.map((c) => {
          switch (c.type) {
            case "text":
              return c.text;
            case "image":
              throw new U({
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
              throw new U({
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
        throw new U({
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
function At(t) {
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
var As = class {
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
    seed: c
  }) {
    var u;
    const m = t.type, { prompt: y, stopSequences: _ } = js({ prompt: r, inputFormat: e }), v = {
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
      prompt: y,
      // stop sequences:
      stop: _
    };
    switch (m) {
      case "regular": {
        if ((u = t.tools) != null && u.length)
          throw new U({
            functionality: "tools"
          });
        return v;
      }
      case "object-json":
        throw new U({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new U({
          functionality: "object-tool mode"
        });
      case "object-grammar":
        throw new U({
          functionality: "object-grammar mode"
        });
      default: {
        const E = m;
        throw new Error(`Unsupported type: ${E}`);
      }
    }
  }
  async doGenerate(t) {
    const e = this.getArgs(t), { responseHeaders: r, value: n } = await ce({
      url: `${this.config.baseURL}/completions`,
      headers: this.config.headers(),
      body: e,
      failedResponseHandler: Qe,
      successfulResponseHandler: gt(
        Os
      ),
      abortSignal: t.abortSignal
    }), { prompt: s, ...a } = e, o = n.choices[0];
    return {
      text: o.text,
      usage: {
        promptTokens: n.usage.prompt_tokens,
        completionTokens: n.usage.completion_tokens
      },
      finishReason: Xe(o.finish_reason),
      logprobs: At(o.logprobs),
      rawCall: { rawPrompt: s, rawSettings: a },
      rawResponse: { headers: r },
      warnings: []
    };
  }
  async doStream(t) {
    const e = this.getArgs(t), { responseHeaders: r, value: n } = await ce({
      url: `${this.config.baseURL}/completions`,
      headers: this.config.headers(),
      body: {
        ...this.getArgs(t),
        stream: !0
      },
      failedResponseHandler: Qe,
      successfulResponseHandler: ht(
        Ps
      ),
      abortSignal: t.abortSignal
    }), { prompt: s, ...a } = e;
    let o = "other", i = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, c;
    return {
      stream: n.pipeThrough(
        new TransformStream({
          transform(u, m) {
            if (!u.success) {
              m.enqueue({ type: "error", error: u.error });
              return;
            }
            const y = u.value;
            y.usage != null && (i = {
              promptTokens: y.usage.prompt_tokens,
              completionTokens: y.usage.completion_tokens
            });
            const _ = y.choices[0];
            (_ == null ? void 0 : _.finish_reason) != null && (o = Xe(_.finish_reason)), (_ == null ? void 0 : _.text) != null && m.enqueue({
              type: "text-delta",
              textDelta: _.text
            });
            const v = At(
              _ == null ? void 0 : _.logprobs
            );
            v != null && v.length && (c === void 0 && (c = []), c.push(...v));
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
}, Os = l.object({
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
}), Ps = l.object({
  object: l.literal("text_completion"),
  choices: l.array(
    l.object({
      text: l.string(),
      finish_reason: l.enum(["stop", "length", "content_filter"]).optional().nullable(),
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
}), Cs = class {
  /**
   * Creates a new OpenAI provider instance.
   */
  constructor(t = {}) {
    var e, r;
    this.baseURL = (r = Lt((e = t.baseURL) != null ? e : t.baseUrl)) != null ? r : "https://api.openai.com/v1", this.apiKey = t.apiKey, this.organization = t.organization, this.project = t.project, this.headers = t.headers;
  }
  get baseConfig() {
    return {
      organization: this.organization,
      baseURL: this.baseURL,
      headers: () => ({
        Authorization: `Bearer ${Mt({
          apiKey: this.apiKey,
          environmentVariableName: "OPENAI_API_KEY",
          description: "OpenAI"
        })}`,
        "OpenAI-Organization": this.organization,
        "OpenAI-Project": this.project,
        ...this.headers
      })
    };
  }
  chat(t, e = {}) {
    return new Es(t, e, {
      provider: "openai.chat",
      ...this.baseConfig
    });
  }
  completion(t, e = {}) {
    return new As(t, e, {
      provider: "openai.completion",
      ...this.baseConfig
    });
  }
};
function Zs(t = {}) {
  const e = new Cs(t), r = function(n, s) {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return n === "gpt-3.5-turbo-instruct" ? e.completion(n, s) : e.chat(n, s);
  };
  return r.chat = e.chat.bind(e), r.completion = e.completion.bind(e), r;
}
Zs();
export {
  ks as createMistral,
  Zs as createOpenAI,
  Rs as experimental_streamText
};
