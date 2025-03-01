var ga = "vercel.ai.error", ko = Symbol.for(ga), ya, To = class va extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: t,
    message: r,
    cause: n
  }) {
    super(r), this[ya] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return va.hasMarker(t, ga);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
ya = ko;
var R = To, _a = "AI_APICallError", ba = `vercel.ai.error.${_a}`, So = Symbol.for(ba), wa, Te = class extends R {
  constructor({
    message: e,
    url: t,
    requestBodyValues: r,
    statusCode: n,
    responseHeaders: a,
    responseBody: s,
    cause: o,
    isRetryable: l = n != null && (n === 408 || // request timeout
    n === 409 || // conflict
    n === 429 || // too many requests
    n >= 500),
    // server error
    data: u
  }) {
    super({ name: _a, message: e, cause: o }), this[wa] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.isRetryable = l, this.data = u;
  }
  static isInstance(e) {
    return R.hasMarker(e, ba);
  }
};
wa = So;
var xa = "AI_EmptyResponseBodyError", ka = `vercel.ai.error.${xa}`, Io = Symbol.for(ka), Ta, Eo = class extends R {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: xa, message: e }), this[Ta] = !0;
  }
  static isInstance(e) {
    return R.hasMarker(e, ka);
  }
};
Ta = Io;
function Ft(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Sa = "AI_InvalidArgumentError", Ia = `vercel.ai.error.${Sa}`, Co = Symbol.for(Ia), Ea, Ca = class extends R {
  constructor({
    message: t,
    cause: r,
    argument: n
  }) {
    super({ name: Sa, message: t, cause: r }), this[Ea] = !0, this.argument = n;
  }
  static isInstance(t) {
    return R.hasMarker(t, Ia);
  }
};
Ea = Co;
var Aa = "AI_InvalidPromptError", Ra = `vercel.ai.error.${Aa}`, Ao = Symbol.for(Ra), Na, Ve = class extends R {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: Aa, message: `Invalid prompt: ${t}`, cause: r }), this[Na] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, Ra);
  }
};
Na = Ao;
var Pa = "AI_InvalidResponseDataError", Oa = `vercel.ai.error.${Pa}`, Ro = Symbol.for(Oa), ja, Zr = class extends R {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: Pa, message: t }), this[ja] = !0, this.data = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, Oa);
  }
};
ja = Ro;
var Ma = "AI_JSONParseError", $a = `vercel.ai.error.${Ma}`, No = Symbol.for($a), Da, nr = class extends R {
  constructor({ text: e, cause: t }) {
    super({
      name: Ma,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Ft(t)}`,
      cause: t
    }), this[Da] = !0, this.text = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, $a);
  }
};
Da = No;
var Za = "AI_LoadAPIKeyError", Ua = `vercel.ai.error.${Za}`, Po = Symbol.for(Ua), La, Qt = class extends R {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Za, message: e }), this[La] = !0;
  }
  static isInstance(e) {
    return R.hasMarker(e, Ua);
  }
};
La = Po;
var qa = "AI_NoSuchModelError", Fa = `vercel.ai.error.${qa}`, Oo = Symbol.for(Fa), Ba, jo = class extends R {
  constructor({
    errorName: e = qa,
    modelId: t,
    modelType: r,
    message: n = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: n }), this[Ba] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return R.hasMarker(e, Fa);
  }
};
Ba = Oo;
var Va = "AI_TooManyEmbeddingValuesForCallError", za = `vercel.ai.error.${Va}`, Mo = Symbol.for(za), Ja, Ha = class extends R {
  constructor(e) {
    super({
      name: Va,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[Ja] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return R.hasMarker(e, za);
  }
};
Ja = Mo;
var Wa = "AI_TypeValidationError", Ga = `vercel.ai.error.${Wa}`, $o = Symbol.for(Ga), Ya, Do = class Kr extends R {
  constructor({ value: t, cause: r }) {
    super({
      name: Wa,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Ft(r)}`,
      cause: r
    }), this[Ya] = !0, this.value = t;
  }
  static isInstance(t) {
    return R.hasMarker(t, Ga);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value: t,
    cause: r
  }) {
    return Kr.isInstance(r) && r.value === t ? r : new Kr({ value: t, cause: r });
  }
};
Ya = $o;
var ar = Do, Ka = "AI_UnsupportedFunctionalityError", Xa = `vercel.ai.error.${Ka}`, Zo = Symbol.for(Xa), Qa, B = class extends R {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: Ka, message: t }), this[Qa] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, Xa);
  }
};
Qa = Zo;
let Uo = (e, t = 21) => (r = t) => {
  let n = "", a = r | 0;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function Lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ft = { exports: {} };
const qo = typeof Buffer < "u", qn = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, Fn = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function es(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), qo && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (qn.test(e) === !1 && Fn.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (qn.test(e) === !1)
      return n;
  } else if (Fn.test(e) === !1)
    return n;
  return ts(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function ts(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
      for (const l in o) {
        const u = o[l];
        u && typeof u == "object" && a.push(u);
      }
    }
  }
  return e;
}
function dn(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return es(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function Fo(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return es(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
ft.exports = dn;
ft.exports.default = dn;
ft.exports.parse = dn;
ft.exports.safeParse = Fo;
ft.exports.scan = ts;
var Bo = ft.exports;
const pn = /* @__PURE__ */ Lo(Bo);
var Vo = Object.defineProperty, zo = (e, t, r) => t in e ? Vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, er = (e, t, r) => zo(e, typeof t != "symbol" ? t + "" : t, r);
class Bn extends Error {
  constructor(t, r) {
    super(t), er(this, "type"), er(this, "field"), er(this, "value"), er(this, "line"), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Ur(e) {
}
function Jo(e) {
  const { onEvent: t = Ur, onError: r = Ur, onRetry: n = Ur, onComment: a } = e;
  let s = "", o = !0, l, u = "", c = "";
  function d(p) {
    const m = o ? p.replace(/^\xEF\xBB\xBF/, "") : p, [v, w] = Ho(`${s}${m}`);
    for (const I of v)
      f(I);
    s = w, o = !1;
  }
  function f(p) {
    if (p === "") {
      T();
      return;
    }
    if (p.startsWith(":")) {
      a && a(p.slice(p.startsWith(": ") ? 2 : 1));
      return;
    }
    const m = p.indexOf(":");
    if (m !== -1) {
      const v = p.slice(0, m), w = p[m + 1] === " " ? 2 : 1, I = p.slice(m + w);
      b(v, I, p);
      return;
    }
    b(p, "", p);
  }
  function b(p, m, v) {
    switch (p) {
      case "event":
        c = m;
        break;
      case "data":
        u = `${u}${m}
`;
        break;
      case "id":
        l = m.includes("\0") ? void 0 : m;
        break;
      case "retry":
        /^\d+$/.test(m) ? n(parseInt(m, 10)) : r(
          new Bn(`Invalid \`retry\` value: "${m}"`, {
            type: "invalid-retry",
            value: m,
            line: v
          })
        );
        break;
      default:
        r(
          new Bn(
            `Unknown field "${p.length > 20 ? `${p.slice(0, 20)}…` : p}"`,
            { type: "unknown-field", field: p, value: m, line: v }
          )
        );
        break;
    }
  }
  function T() {
    u.length > 0 && t({
      id: l,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), l = void 0, u = "", c = "";
  }
  function h(p = {}) {
    s && p.consume && f(s), l = void 0, u = "", c = "", s = "";
  }
  return { feed: d, reset: h };
}
function Ho(e) {
  const t = [];
  let r = "";
  const n = e.length;
  for (let a = 0; a < n; a++) {
    const s = e[a];
    s === "\r" && e[a + 1] === `
` ? (t.push(r), r = "", a++) : s === "\r" || s === `
` ? (t.push(r), r = "") : r += s;
  }
  return [t, r];
}
class Wo extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let a;
    super({
      start(s) {
        a = Jo({
          onEvent: (o) => {
            s.enqueue(o);
          },
          onError(o) {
            t === "terminate" ? s.error(o) : typeof t == "function" && t(o);
          },
          onRetry: r,
          onComment: n
        });
      },
      transform(s) {
        a.feed(s);
      }
    });
  }
}
function Se(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function Go(e) {
  return new ReadableStream({
    /**
     * Called when the consumer wants to pull more data from the stream.
     *
     * @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
     * @returns {Promise<void>}
     */
    async pull(t) {
      try {
        const { value: r, done: n } = await e.next();
        n ? t.close() : t.enqueue(r);
      } catch (r) {
        t.error(r);
      }
    },
    /**
     * Called when the consumer cancels the stream.
     */
    cancel() {
    }
  });
}
async function Yo(e) {
  return e == null ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
function _r(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Ke = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const a = Uo(r, t);
  if (e == null)
    return a;
  if (r.includes(n))
    throw new Ca({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (s) => `${e}${n}${a(s)}`;
}, nt = Ke();
function Ko(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function Xo(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
function rr(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function fn({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new Qt({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new Qt({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new Qt({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new Qt({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var sr = Symbol.for("vercel.ai.validator");
function Qo(e) {
  return { [sr]: !0, validate: e };
}
function ei(e) {
  return typeof e == "object" && e !== null && sr in e && e[sr] === !0 && "validate" in e;
}
function ti(e) {
  return ei(e) ? e : ri(e);
}
function ri(e) {
  return Qo((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function ni({
  value: e,
  schema: t
}) {
  const r = Bt({ value: e, schema: t });
  if (!r.success)
    throw ar.wrap({ value: e, cause: r.error });
  return r.value;
}
function Bt({
  value: e,
  schema: t
}) {
  const r = ti(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: ar.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: ar.wrap({ value: e, cause: n })
    };
  }
}
function ai({
  text: e,
  schema: t
}) {
  try {
    const r = pn.parse(e);
    return t == null ? r : ni({ value: r, schema: t });
  } catch (r) {
    throw nr.isInstance(r) || ar.isInstance(r) ? r : new nr({ text: e, cause: r });
  }
}
function lt({
  text: e,
  schema: t
}) {
  try {
    const r = pn.parse(e);
    if (t == null)
      return { success: !0, value: r, rawValue: r };
    const n = Bt({ value: r, schema: t });
    return n.success ? { ...n, rawValue: r } : n;
  } catch (r) {
    return {
      success: !1,
      error: nr.isInstance(r) ? r : new nr({ text: e, cause: r })
    };
  }
}
function Vn(e) {
  try {
    return pn.parse(e), !0;
  } catch {
    return !1;
  }
}
var si = () => globalThis.fetch, ge = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => oi({
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
}), oi = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = si()
}) => {
  try {
    const l = await o(e, {
      method: "POST",
      headers: Xo(t),
      body: r.content,
      signal: s
    }), u = _r(l);
    if (!l.ok) {
      let c;
      try {
        c = await a({
          response: l,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw rr(d) || Te.isInstance(d) ? d : new Te({
          message: "Failed to process error response",
          cause: d,
          statusCode: l.status,
          url: e,
          responseHeaders: u,
          requestBodyValues: r.values
        });
      }
      throw c.value;
    }
    try {
      return await n({
        response: l,
        url: e,
        requestBodyValues: r.values
      });
    } catch (c) {
      throw c instanceof Error && (rr(c) || Te.isInstance(c)) ? c : new Te({
        message: "Failed to process successful response",
        cause: c,
        statusCode: l.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (l) {
    if (rr(l))
      throw l;
    if (l instanceof TypeError && l.message === "fetch failed") {
      const u = l.cause;
      if (u != null)
        throw new Te({
          message: `Cannot connect to API: ${u.message}`,
          cause: u,
          url: e,
          requestBodyValues: r.values,
          isRetryable: !0
          // retry when network error
        });
    }
    throw l;
  }
};
async function ii(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var mn = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), l = _r(n);
  if (o.trim() === "")
    return {
      responseHeaders: l,
      value: new Te({
        message: n.statusText,
        url: a,
        requestBodyValues: s,
        statusCode: n.status,
        responseHeaders: l,
        responseBody: o,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  try {
    const u = ai({
      text: o,
      schema: e
    });
    return {
      responseHeaders: l,
      value: new Te({
        message: t(u),
        url: a,
        requestBodyValues: s,
        statusCode: n.status,
        responseHeaders: l,
        responseBody: o,
        data: u,
        isRetryable: r == null ? void 0 : r(n, u)
      })
    };
  } catch {
    return {
      responseHeaders: l,
      value: new Te({
        message: n.statusText,
        url: a,
        requestBodyValues: s,
        statusCode: n.status,
        responseHeaders: l,
        responseBody: o,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  }
}, br = (e) => async ({ response: t }) => {
  const r = _r(t);
  if (t.body == null)
    throw new Eo({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new Wo()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            lt({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, Xe = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = lt({
    text: a,
    schema: e
  }), o = _r(t);
  if (!s.success)
    throw new Te({
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
    value: s.value,
    rawValue: s.rawValue
  };
}, { btoa: li, atob: ui } = globalThis;
function ci(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = ui(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function wt(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return li(t);
}
function hn(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
const di = Symbol("Let zodToJsonSchema decide on which parser to use"), zn = {
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
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
}, pi = (e) => typeof e == "string" ? {
  ...zn,
  name: e
} : {
  ...zn,
  ...e
}, fi = (e) => {
  const t = pi(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
};
function rs(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function L(e, t, r, n, a) {
  e[t] = r, rs(e, t, n, a);
}
var $;
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
    const s = e.objectKeys(a).filter((l) => typeof a[a[l]] != "number"), o = {};
    for (const l of s)
      o[l] = a[l];
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
})($ || ($ = {}));
var Xr;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Xr || (Xr = {}));
const S = $.arrayToEnum([
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
]), Ne = (e) => {
  switch (typeof e) {
    case "undefined":
      return S.undefined;
    case "string":
      return S.string;
    case "number":
      return isNaN(e) ? S.nan : S.number;
    case "boolean":
      return S.boolean;
    case "function":
      return S.function;
    case "bigint":
      return S.bigint;
    case "symbol":
      return S.symbol;
    case "object":
      return Array.isArray(e) ? S.array : e === null ? S.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? S.promise : typeof Map < "u" && e instanceof Map ? S.map : typeof Set < "u" && e instanceof Set ? S.set : typeof Date < "u" && e instanceof Date ? S.date : S.object;
    default:
      return S.unknown;
  }
}, y = $.arrayToEnum([
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
]), mi = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ae extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
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
          let l = n, u = 0;
          for (; u < o.path.length; ) {
            const c = o.path[u];
            u === o.path.length - 1 ? (l[c] = l[c] || { _errors: [] }, l[c]._errors.push(r(o))) : l[c] = l[c] || { _errors: [] }, l = l[c], u++;
          }
        }
    };
    return a(this), n;
  }
  static assert(t) {
    if (!(t instanceof ae))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, $.jsonStringifyReplacer, 2);
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
ae.create = (e) => new ae(e);
const ut = (e, t) => {
  let r;
  switch (e.code) {
    case y.invalid_type:
      e.received === S.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case y.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, $.jsonStringifyReplacer)}`;
      break;
    case y.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${$.joinValues(e.keys, ", ")}`;
      break;
    case y.invalid_union:
      r = "Invalid input";
      break;
    case y.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${$.joinValues(e.options)}`;
      break;
    case y.invalid_enum_value:
      r = `Invalid enum value. Expected ${$.joinValues(e.options)}, received '${e.received}'`;
      break;
    case y.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case y.invalid_return_type:
      r = "Invalid function return type";
      break;
    case y.invalid_date:
      r = "Invalid date";
      break;
    case y.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : $.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case y.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case y.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case y.custom:
      r = "Invalid input";
      break;
    case y.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case y.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case y.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, $.assertNever(e);
  }
  return { message: r };
};
let ns = ut;
function hi(e) {
  ns = e;
}
function or() {
  return ns;
}
const ir = (e) => {
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
  let l = "";
  const u = n.filter((c) => !!c).slice().reverse();
  for (const c of u)
    l = c(o, { data: t, defaultError: l }).message;
  return {
    ...a,
    path: s,
    message: l
  };
}, gi = [];
function x(e, t) {
  const r = or(), n = ir({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      r,
      // then global override map
      r === ut ? void 0 : ut
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(n);
}
class W {
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
        return N;
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
    return W.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: s, value: o } = a;
      if (s.status === "aborted" || o.status === "aborted")
        return N;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const N = Object.freeze({
  status: "aborted"
}), st = (e) => ({ status: "dirty", value: e }), K = (e) => ({ status: "valid", value: e }), Qr = (e) => e.status === "aborted", en = (e) => e.status === "dirty", He = (e) => e.status === "valid", xt = (e) => typeof Promise < "u" && e instanceof Promise;
function lr(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function as(e, t, r, n, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var C;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(C || (C = {}));
var vt, _t;
class Ie {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Jn = (e, t) => {
  if (He(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new ae(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function O(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: a } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (o, l) => {
    var u, c;
    const { message: d } = e;
    return o.code === "invalid_enum_value" ? { message: d ?? l.defaultError } : typeof l.data > "u" ? { message: (u = d ?? n) !== null && u !== void 0 ? u : l.defaultError } : o.code !== "invalid_type" ? { message: l.defaultError } : { message: (c = d ?? r) !== null && c !== void 0 ? c : l.defaultError };
  }, description: a };
}
class j {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ne(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ne(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new W(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ne(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (xt(r))
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
      parsedType: Ne(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return Jn(a, s);
  }
  "~validate"(t) {
    var r, n;
    const a = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Ne(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: a });
        return He(s) ? {
          value: s.value
        } : {
          issues: a.common.issues
        };
      } catch (s) {
        !((n = (r = s == null ? void 0 : s.message) === null || r === void 0 ? void 0 : r.toLowerCase()) === null || n === void 0) && n.includes("encountered") && (this["~standard"].async = !0), a.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: a }).then((s) => He(s) ? {
      value: s.value
    } : {
      issues: a.common.issues
    });
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
      parsedType: Ne(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (xt(a) ? a : Promise.resolve(a));
    return Jn(n, s);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, s) => {
      const o = t(a), l = () => s.addIssue({
        code: y.custom,
        ...n(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (l(), !1)) : o ? !0 : (l(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new ye({
      schema: this,
      typeName: _.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (r) => this["~validate"](r)
    };
  }
  optional() {
    return he.create(this, this._def);
  }
  nullable() {
    return Ze.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return me.create(this);
  }
  promise() {
    return dt.create(this, this._def);
  }
  or(t) {
    return It.create([this, t], this._def);
  }
  and(t) {
    return Et.create(this, t, this._def);
  }
  transform(t) {
    return new ye({
      ...O(this._def),
      schema: this,
      typeName: _.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Pt({
      ...O(this._def),
      innerType: this,
      defaultValue: r,
      typeName: _.ZodDefault
    });
  }
  brand() {
    return new gn({
      typeName: _.ZodBranded,
      type: this,
      ...O(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ot({
      ...O(this._def),
      innerType: this,
      catchValue: r,
      typeName: _.ZodCatch
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
    return Vt.create(this, t);
  }
  readonly() {
    return jt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const yi = /^c[^\s-]{8,}$/i, vi = /^[0-9a-z]+$/, _i = /^[0-9A-HJKMNP-TV-Z]{26}$/i, bi = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, wi = /^[a-z0-9_-]{21}$/i, xi = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ki = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ti = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Si = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Lr;
const Ii = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ei = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Ci = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Ai = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ri = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ni = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, ss = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Pi = new RegExp(`^${ss}$`);
function os(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Oi(e) {
  return new RegExp(`^${os(e)}$`);
}
function is(e) {
  let t = `${ss}T${os(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function ji(e, t) {
  return !!((t === "v4" || !t) && Ii.test(e) || (t === "v6" || !t) && Ci.test(e));
}
function Mi(e, t) {
  if (!xi.test(e))
    return !1;
  try {
    const [r] = e.split("."), n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), a = JSON.parse(atob(n));
    return !(typeof a != "object" || a === null || !a.typ || !a.alg || t && a.alg !== t);
  } catch {
    return !1;
  }
}
function $i(e, t) {
  return !!((t === "v4" || !t) && Ei.test(e) || (t === "v6" || !t) && Ai.test(e));
}
class fe extends j {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== S.string) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: y.invalid_type,
        expected: S.string,
        received: s.parsedType
      }), N;
    }
    const n = new W();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), x(a, {
          code: y.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), x(a, {
          code: y.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, l = t.data.length < s.value;
        (o || l) && (a = this._getOrReturnCtx(t, a), o ? x(a, {
          code: y.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : l && x(a, {
          code: y.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Ti.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "email",
          code: y.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        Lr || (Lr = new RegExp(Si, "u")), Lr.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "emoji",
          code: y.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        bi.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "uuid",
          code: y.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        wi.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "nanoid",
          code: y.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        yi.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "cuid",
          code: y.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        vi.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "cuid2",
          code: y.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        _i.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "ulid",
          code: y.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), x(a, {
            validation: "url",
            code: y.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "regex",
        code: y.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? is(s).test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Pi.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Oi(s).test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? ki.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "duration",
        code: y.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? ji(t.data, s.version) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "ip",
        code: y.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? Mi(t.data, s.alg) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "jwt",
        code: y.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? $i(t.data, s.version) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "cidr",
        code: y.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Ri.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "base64",
        code: y.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? Ni.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "base64url",
        code: y.invalid_string,
        message: s.message
      }), n.dirty()) : $.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: y.invalid_string,
      ...C.errToObj(n)
    });
  }
  _addCheck(t) {
    return new fe({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...C.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...C.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...C.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...C.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...C.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...C.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...C.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...C.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...C.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...C.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...C.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...C.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...C.errToObj(t) });
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
      ...C.errToObj(t == null ? void 0 : t.message)
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
      ...C.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...C.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...C.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...C.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...C.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...C.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...C.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...C.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...C.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, C.errToObj(t));
  }
  trim() {
    return new fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new fe({
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
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
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
fe.create = (e) => {
  var t;
  return new fe({
    checks: [],
    typeName: _.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...O(e)
  });
};
function Di(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class Me extends j {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== S.number) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: y.invalid_type,
        expected: S.number,
        received: s.parsedType
      }), N;
    }
    let n;
    const a = new W();
    for (const s of this._def.checks)
      s.kind === "int" ? $.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? Di(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.not_finite,
        message: s.message
      }), a.dirty()) : $.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, C.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, C.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, C.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, C.toString(r));
  }
  setLimit(t, r, n, a) {
    return new Me({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: C.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Me({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: C.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: C.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: C.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: C.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: C.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: C.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: C.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: C.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: C.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && $.isInteger(t.value));
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
Me.create = (e) => new Me({
  checks: [],
  typeName: _.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...O(e)
});
class $e extends j {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== S.bigint)
      return this._getInvalidInput(t);
    let n;
    const a = new W();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: y.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : $.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return x(r, {
      code: y.invalid_type,
      expected: S.bigint,
      received: r.parsedType
    }), N;
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, C.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, C.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, C.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, C.toString(r));
  }
  setLimit(t, r, n, a) {
    return new $e({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: C.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new $e({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: C.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: C.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: C.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: C.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: C.toString(r)
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
$e.create = (e) => {
  var t;
  return new $e({
    checks: [],
    typeName: _.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...O(e)
  });
};
class kt extends j {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== S.boolean) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: y.invalid_type,
        expected: S.boolean,
        received: n.parsedType
      }), N;
    }
    return K(t.data);
  }
}
kt.create = (e) => new kt({
  typeName: _.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...O(e)
});
class We extends j {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== S.date) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: y.invalid_type,
        expected: S.date,
        received: s.parsedType
      }), N;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: y.invalid_date
      }), N;
    }
    const n = new W();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), x(a, {
        code: y.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : $.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new We({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: C.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: C.toString(r)
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
We.create = (e) => new We({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: _.ZodDate,
  ...O(e)
});
class ur extends j {
  _parse(t) {
    if (this._getType(t) !== S.symbol) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: y.invalid_type,
        expected: S.symbol,
        received: n.parsedType
      }), N;
    }
    return K(t.data);
  }
}
ur.create = (e) => new ur({
  typeName: _.ZodSymbol,
  ...O(e)
});
class Tt extends j {
  _parse(t) {
    if (this._getType(t) !== S.undefined) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: y.invalid_type,
        expected: S.undefined,
        received: n.parsedType
      }), N;
    }
    return K(t.data);
  }
}
Tt.create = (e) => new Tt({
  typeName: _.ZodUndefined,
  ...O(e)
});
class St extends j {
  _parse(t) {
    if (this._getType(t) !== S.null) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: y.invalid_type,
        expected: S.null,
        received: n.parsedType
      }), N;
    }
    return K(t.data);
  }
}
St.create = (e) => new St({
  typeName: _.ZodNull,
  ...O(e)
});
class ct extends j {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return K(t.data);
  }
}
ct.create = (e) => new ct({
  typeName: _.ZodAny,
  ...O(e)
});
class Je extends j {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return K(t.data);
  }
}
Je.create = (e) => new Je({
  typeName: _.ZodUnknown,
  ...O(e)
});
class Pe extends j {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return x(r, {
      code: y.invalid_type,
      expected: S.never,
      received: r.parsedType
    }), N;
  }
}
Pe.create = (e) => new Pe({
  typeName: _.ZodNever,
  ...O(e)
});
class cr extends j {
  _parse(t) {
    if (this._getType(t) !== S.undefined) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: y.invalid_type,
        expected: S.void,
        received: n.parsedType
      }), N;
    }
    return K(t.data);
  }
}
cr.create = (e) => new cr({
  typeName: _.ZodVoid,
  ...O(e)
});
class me extends j {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== S.array)
      return x(r, {
        code: y.invalid_type,
        expected: S.array,
        received: r.parsedType
      }), N;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, l = r.data.length < a.exactLength.value;
      (o || l) && (x(r, {
        code: o ? y.too_big : y.too_small,
        minimum: l ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (x(r, {
      code: y.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (x(r, {
      code: y.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, l) => a.type._parseAsync(new Ie(r, o, r.path, l)))).then((o) => W.mergeArray(n, o));
    const s = [...r.data].map((o, l) => a.type._parseSync(new Ie(r, o, r.path, l)));
    return W.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new me({
      ...this._def,
      minLength: { value: t, message: C.toString(r) }
    });
  }
  max(t, r) {
    return new me({
      ...this._def,
      maxLength: { value: t, message: C.toString(r) }
    });
  }
  length(t, r) {
    return new me({
      ...this._def,
      exactLength: { value: t, message: C.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
me.create = (e, t) => new me({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: _.ZodArray,
  ...O(t)
});
function at(e) {
  if (e instanceof F) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = he.create(at(n));
    }
    return new F({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof me ? new me({
    ...e._def,
    type: at(e.element)
  }) : e instanceof he ? he.create(at(e.unwrap())) : e instanceof Ze ? Ze.create(at(e.unwrap())) : e instanceof Ee ? Ee.create(e.items.map((t) => at(t))) : e;
}
class F extends j {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = $.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== S.object) {
      const c = this._getOrReturnCtx(t);
      return x(c, {
        code: y.invalid_type,
        expected: S.object,
        received: c.parsedType
      }), N;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), l = [];
    if (!(this._def.catchall instanceof Pe && this._def.unknownKeys === "strip"))
      for (const c in a.data)
        o.includes(c) || l.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], f = a.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new Ie(a, f, a.path, c)),
        alwaysSet: c in a.data
      });
    }
    if (this._def.catchall instanceof Pe) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of l)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: a.data[d] }
          });
      else if (c === "strict")
        l.length > 0 && (x(a, {
          code: y.unrecognized_keys,
          keys: l
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of l) {
        const f = a.data[d];
        u.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new Ie(a, f, a.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of u) {
        const f = await d.key, b = await d.value;
        c.push({
          key: f,
          value: b,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => W.mergeObjectSync(n, c)) : W.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return C.errToObj, new F({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, s, o, l;
          const u = (o = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (l = C.errToObj(t).message) !== null && l !== void 0 ? l : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new F({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new F({
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
    return new F({
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
    return new F({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: _.ZodObject
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
    return new F({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return $.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new F({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return $.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new F({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return at(this);
  }
  partial(t) {
    const r = {};
    return $.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new F({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return $.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof he; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new F({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return ls($.objectKeys(this.shape));
  }
}
F.create = (e, t) => new F({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Pe.create(),
  typeName: _.ZodObject,
  ...O(t)
});
F.strictCreate = (e, t) => new F({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Pe.create(),
  typeName: _.ZodObject,
  ...O(t)
});
F.lazycreate = (e, t) => new F({
  shape: e,
  unknownKeys: "strip",
  catchall: Pe.create(),
  typeName: _.ZodObject,
  ...O(t)
});
class It extends j {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const l of s)
        if (l.result.status === "valid")
          return l.result;
      for (const l of s)
        if (l.result.status === "dirty")
          return r.common.issues.push(...l.ctx.common.issues), l.result;
      const o = s.map((l) => new ae(l.ctx.common.issues));
      return x(r, {
        code: y.invalid_union,
        unionErrors: o
      }), N;
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
      for (const u of n) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = u._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const l = o.map((u) => new ae(u));
      return x(r, {
        code: y.invalid_union,
        unionErrors: l
      }), N;
    }
  }
  get options() {
    return this._def.options;
  }
}
It.create = (e, t) => new It({
  options: e,
  typeName: _.ZodUnion,
  ...O(t)
});
const Re = (e) => e instanceof At ? Re(e.schema) : e instanceof ye ? Re(e.innerType()) : e instanceof Rt ? [e.value] : e instanceof De ? e.options : e instanceof Nt ? $.objectValues(e.enum) : e instanceof Pt ? Re(e._def.innerType) : e instanceof Tt ? [void 0] : e instanceof St ? [null] : e instanceof he ? [void 0, ...Re(e.unwrap())] : e instanceof Ze ? [null, ...Re(e.unwrap())] : e instanceof gn || e instanceof jt ? Re(e.unwrap()) : e instanceof Ot ? Re(e._def.innerType) : [];
class wr extends j {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== S.object)
      return x(r, {
        code: y.invalid_type,
        expected: S.object,
        received: r.parsedType
      }), N;
    const n = this.discriminator, a = r.data[n], s = this.optionsMap.get(a);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (x(r, {
      code: y.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), N);
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
      const o = Re(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const l of o) {
        if (a.has(l))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(l)}`);
        a.set(l, s);
      }
    }
    return new wr({
      typeName: _.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...O(n)
    });
  }
}
function tn(e, t) {
  const r = Ne(e), n = Ne(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === S.object && n === S.object) {
    const a = $.objectKeys(t), s = $.objectKeys(e).filter((l) => a.indexOf(l) !== -1), o = { ...e, ...t };
    for (const l of s) {
      const u = tn(e[l], t[l]);
      if (!u.valid)
        return { valid: !1 };
      o[l] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === S.array && n === S.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], l = t[s], u = tn(o, l);
      if (!u.valid)
        return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else return r === S.date && n === S.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Et extends j {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (Qr(s) || Qr(o))
        return N;
      const l = tn(s.value, o.value);
      return l.valid ? ((en(s) || en(o)) && r.dirty(), { status: r.value, value: l.data }) : (x(n, {
        code: y.invalid_intersection_types
      }), N);
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
Et.create = (e, t, r) => new Et({
  left: e,
  right: t,
  typeName: _.ZodIntersection,
  ...O(r)
});
class Ee extends j {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== S.array)
      return x(n, {
        code: y.invalid_type,
        expected: S.array,
        received: n.parsedType
      }), N;
    if (n.data.length < this._def.items.length)
      return x(n, {
        code: y.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), N;
    !this._def.rest && n.data.length > this._def.items.length && (x(n, {
      code: y.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, l) => {
      const u = this._def.items[l] || this._def.rest;
      return u ? u._parse(new Ie(n, o, n.path, l)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => W.mergeArray(r, o)) : W.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ee({
      ...this._def,
      rest: t
    });
  }
}
Ee.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ee({
    items: e,
    typeName: _.ZodTuple,
    rest: null,
    ...O(t)
  });
};
class Ct extends j {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== S.object)
      return x(n, {
        code: y.invalid_type,
        expected: S.object,
        received: n.parsedType
      }), N;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const l in n.data)
      a.push({
        key: s._parse(new Ie(n, l, n.path, l)),
        value: o._parse(new Ie(n, n.data[l], n.path, l)),
        alwaysSet: l in n.data
      });
    return n.common.async ? W.mergeObjectAsync(r, a) : W.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof j ? new Ct({
      keyType: t,
      valueType: r,
      typeName: _.ZodRecord,
      ...O(n)
    }) : new Ct({
      keyType: fe.create(),
      valueType: t,
      typeName: _.ZodRecord,
      ...O(r)
    });
  }
}
class dr extends j {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== S.map)
      return x(n, {
        code: y.invalid_type,
        expected: S.map,
        received: n.parsedType
      }), N;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([l, u], c) => ({
      key: a._parse(new Ie(n, l, n.path, [c, "key"])),
      value: s._parse(new Ie(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const l = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key, d = await u.value;
          if (c.status === "aborted" || d.status === "aborted")
            return N;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(), l.set(c.value, d.value);
        }
        return { status: r.value, value: l };
      });
    } else {
      const l = /* @__PURE__ */ new Map();
      for (const u of o) {
        const c = u.key, d = u.value;
        if (c.status === "aborted" || d.status === "aborted")
          return N;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(), l.set(c.value, d.value);
      }
      return { status: r.value, value: l };
    }
  }
}
dr.create = (e, t, r) => new dr({
  valueType: t,
  keyType: e,
  typeName: _.ZodMap,
  ...O(r)
});
class Ge extends j {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== S.set)
      return x(n, {
        code: y.invalid_type,
        expected: S.set,
        received: n.parsedType
      }), N;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (x(n, {
      code: y.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (x(n, {
      code: y.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function o(u) {
      const c = /* @__PURE__ */ new Set();
      for (const d of u) {
        if (d.status === "aborted")
          return N;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const l = [...n.data.values()].map((u, c) => s._parse(new Ie(n, u, n.path, c)));
    return n.common.async ? Promise.all(l).then((u) => o(u)) : o(l);
  }
  min(t, r) {
    return new Ge({
      ...this._def,
      minSize: { value: t, message: C.toString(r) }
    });
  }
  max(t, r) {
    return new Ge({
      ...this._def,
      maxSize: { value: t, message: C.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ge.create = (e, t) => new Ge({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: _.ZodSet,
  ...O(t)
});
class it extends j {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== S.function)
      return x(r, {
        code: y.invalid_type,
        expected: S.function,
        received: r.parsedType
      }), N;
    function n(l, u) {
      return ir({
        data: l,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          or(),
          ut
        ].filter((c) => !!c),
        issueData: {
          code: y.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function a(l, u) {
      return ir({
        data: l,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          or(),
          ut
        ].filter((c) => !!c),
        issueData: {
          code: y.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof dt) {
      const l = this;
      return K(async function(...u) {
        const c = new ae([]), d = await l._def.args.parseAsync(u, s).catch((T) => {
          throw c.addIssue(n(u, T)), c;
        }), f = await Reflect.apply(o, this, d);
        return await l._def.returns._def.type.parseAsync(f, s).catch((T) => {
          throw c.addIssue(a(f, T)), c;
        });
      });
    } else {
      const l = this;
      return K(function(...u) {
        const c = l._def.args.safeParse(u, s);
        if (!c.success)
          throw new ae([n(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), f = l._def.returns.safeParse(d, s);
        if (!f.success)
          throw new ae([a(d, f.error)]);
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
    return new it({
      ...this._def,
      args: Ee.create(t).rest(Je.create())
    });
  }
  returns(t) {
    return new it({
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
    return new it({
      args: t || Ee.create([]).rest(Je.create()),
      returns: r || Je.create(),
      typeName: _.ZodFunction,
      ...O(n)
    });
  }
}
class At extends j {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
At.create = (e, t) => new At({
  getter: e,
  typeName: _.ZodLazy,
  ...O(t)
});
class Rt extends j {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return x(r, {
        received: r.data,
        code: y.invalid_literal,
        expected: this._def.value
      }), N;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Rt.create = (e, t) => new Rt({
  value: e,
  typeName: _.ZodLiteral,
  ...O(t)
});
function ls(e, t) {
  return new De({
    values: e,
    typeName: _.ZodEnum,
    ...O(t)
  });
}
class De extends j {
  constructor() {
    super(...arguments), vt.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return x(r, {
        expected: $.joinValues(n),
        received: r.parsedType,
        code: y.invalid_type
      }), N;
    }
    if (lr(this, vt) || as(this, vt, new Set(this._def.values)), !lr(this, vt).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return x(r, {
        received: r.data,
        code: y.invalid_enum_value,
        options: n
      }), N;
    }
    return K(t.data);
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
    return De.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return De.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
vt = /* @__PURE__ */ new WeakMap();
De.create = ls;
class Nt extends j {
  constructor() {
    super(...arguments), _t.set(this, void 0);
  }
  _parse(t) {
    const r = $.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== S.string && n.parsedType !== S.number) {
      const a = $.objectValues(r);
      return x(n, {
        expected: $.joinValues(a),
        received: n.parsedType,
        code: y.invalid_type
      }), N;
    }
    if (lr(this, _t) || as(this, _t, new Set($.getValidEnumValues(this._def.values))), !lr(this, _t).has(t.data)) {
      const a = $.objectValues(r);
      return x(n, {
        received: n.data,
        code: y.invalid_enum_value,
        options: a
      }), N;
    }
    return K(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
_t = /* @__PURE__ */ new WeakMap();
Nt.create = (e, t) => new Nt({
  values: e,
  typeName: _.ZodNativeEnum,
  ...O(t)
});
class dt extends j {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== S.promise && r.common.async === !1)
      return x(r, {
        code: y.invalid_type,
        expected: S.promise,
        received: r.parsedType
      }), N;
    const n = r.parsedType === S.promise ? r.data : Promise.resolve(r.data);
    return K(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
dt.create = (e, t) => new dt({
  type: e,
  typeName: _.ZodPromise,
  ...O(t)
});
class ye extends j {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === _.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        x(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), a.type === "preprocess") {
      const o = a.transform(n.data, s);
      if (n.common.async)
        return Promise.resolve(o).then(async (l) => {
          if (r.value === "aborted")
            return N;
          const u = await this._def.schema._parseAsync({
            data: l,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? N : u.status === "dirty" || r.value === "dirty" ? st(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return N;
        const l = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return l.status === "aborted" ? N : l.status === "dirty" || r.value === "dirty" ? st(l.value) : l;
      }
    }
    if (a.type === "refinement") {
      const o = (l) => {
        const u = a.refinement(l, s);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return l;
      };
      if (n.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return l.status === "aborted" ? N : (l.status === "dirty" && r.dirty(), o(l.value), { status: r.value, value: l.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((l) => l.status === "aborted" ? N : (l.status === "dirty" && r.dirty(), o(l.value).then(() => ({ status: r.value, value: l.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!He(o))
          return o;
        const l = a.transform(o.value, s);
        if (l instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: l };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => He(o) ? Promise.resolve(a.transform(o.value, s)).then((l) => ({ status: r.value, value: l })) : o);
    $.assertNever(a);
  }
}
ye.create = (e, t, r) => new ye({
  schema: e,
  typeName: _.ZodEffects,
  effect: t,
  ...O(r)
});
ye.createWithPreprocess = (e, t, r) => new ye({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: _.ZodEffects,
  ...O(r)
});
class he extends j {
  _parse(t) {
    return this._getType(t) === S.undefined ? K(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
he.create = (e, t) => new he({
  innerType: e,
  typeName: _.ZodOptional,
  ...O(t)
});
class Ze extends j {
  _parse(t) {
    return this._getType(t) === S.null ? K(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ze.create = (e, t) => new Ze({
  innerType: e,
  typeName: _.ZodNullable,
  ...O(t)
});
class Pt extends j {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === S.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Pt.create = (e, t) => new Pt({
  innerType: e,
  typeName: _.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...O(t)
});
class Ot extends j {
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
    return xt(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new ae(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new ae(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ot.create = (e, t) => new Ot({
  innerType: e,
  typeName: _.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...O(t)
});
class pr extends j {
  _parse(t) {
    if (this._getType(t) !== S.nan) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: y.invalid_type,
        expected: S.nan,
        received: n.parsedType
      }), N;
    }
    return { status: "valid", value: t.data };
  }
}
pr.create = (e) => new pr({
  typeName: _.ZodNaN,
  ...O(e)
});
const Zi = Symbol("zod_brand");
class gn extends j {
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
class Vt extends j {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? N : s.status === "dirty" ? (r.dirty(), st(s.value)) : this._def.out._parseAsync({
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
      return a.status === "aborted" ? N : a.status === "dirty" ? (r.dirty(), {
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
    return new Vt({
      in: t,
      out: r,
      typeName: _.ZodPipeline
    });
  }
}
class jt extends j {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (He(a) && (a.value = Object.freeze(a.value)), a);
    return xt(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
jt.create = (e, t) => new jt({
  innerType: e,
  typeName: _.ZodReadonly,
  ...O(t)
});
function Hn(e, t) {
  const r = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof r == "string" ? { message: r } : r;
}
function us(e, t = {}, r) {
  return e ? ct.create().superRefine((n, a) => {
    var s, o;
    const l = e(n);
    if (l instanceof Promise)
      return l.then((u) => {
        var c, d;
        if (!u) {
          const f = Hn(t, n), b = (d = (c = f.fatal) !== null && c !== void 0 ? c : r) !== null && d !== void 0 ? d : !0;
          a.addIssue({ code: "custom", ...f, fatal: b });
        }
      });
    if (!l) {
      const u = Hn(t, n), c = (o = (s = u.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0;
      a.addIssue({ code: "custom", ...u, fatal: c });
    }
  }) : ct.create();
}
const Ui = {
  object: F.lazycreate
};
var _;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(_ || (_ = {}));
const Li = (e, t = {
  message: `Input not instance of ${e.name}`
}) => us((r) => r instanceof e, t), cs = fe.create, ds = Me.create, qi = pr.create, Fi = $e.create, ps = kt.create, Bi = We.create, Vi = ur.create, zi = Tt.create, Ji = St.create, Hi = ct.create, Wi = Je.create, Gi = Pe.create, Yi = cr.create, Ki = me.create, Xi = F.create, Qi = F.strictCreate, el = It.create, tl = wr.create, rl = Et.create, nl = Ee.create, al = Ct.create, sl = dr.create, ol = Ge.create, il = it.create, ll = At.create, ul = Rt.create, cl = De.create, dl = Nt.create, pl = dt.create, Wn = ye.create, fl = he.create, ml = Ze.create, hl = ye.createWithPreprocess, gl = Vt.create, yl = () => cs().optional(), vl = () => ds().optional(), _l = () => ps().optional(), bl = {
  string: (e) => fe.create({ ...e, coerce: !0 }),
  number: (e) => Me.create({ ...e, coerce: !0 }),
  boolean: (e) => kt.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => $e.create({ ...e, coerce: !0 }),
  date: (e) => We.create({ ...e, coerce: !0 })
}, wl = N;
var i = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ut,
  setErrorMap: hi,
  getErrorMap: or,
  makeIssue: ir,
  EMPTY_PATH: gi,
  addIssueToContext: x,
  ParseStatus: W,
  INVALID: N,
  DIRTY: st,
  OK: K,
  isAborted: Qr,
  isDirty: en,
  isValid: He,
  isAsync: xt,
  get util() {
    return $;
  },
  get objectUtil() {
    return Xr;
  },
  ZodParsedType: S,
  getParsedType: Ne,
  ZodType: j,
  datetimeRegex: is,
  ZodString: fe,
  ZodNumber: Me,
  ZodBigInt: $e,
  ZodBoolean: kt,
  ZodDate: We,
  ZodSymbol: ur,
  ZodUndefined: Tt,
  ZodNull: St,
  ZodAny: ct,
  ZodUnknown: Je,
  ZodNever: Pe,
  ZodVoid: cr,
  ZodArray: me,
  ZodObject: F,
  ZodUnion: It,
  ZodDiscriminatedUnion: wr,
  ZodIntersection: Et,
  ZodTuple: Ee,
  ZodRecord: Ct,
  ZodMap: dr,
  ZodSet: Ge,
  ZodFunction: it,
  ZodLazy: At,
  ZodLiteral: Rt,
  ZodEnum: De,
  ZodNativeEnum: Nt,
  ZodPromise: dt,
  ZodEffects: ye,
  ZodTransformer: ye,
  ZodOptional: he,
  ZodNullable: Ze,
  ZodDefault: Pt,
  ZodCatch: Ot,
  ZodNaN: pr,
  BRAND: Zi,
  ZodBranded: gn,
  ZodPipeline: Vt,
  ZodReadonly: jt,
  custom: us,
  Schema: j,
  ZodSchema: j,
  late: Ui,
  get ZodFirstPartyTypeKind() {
    return _;
  },
  coerce: bl,
  any: Hi,
  array: Ki,
  bigint: Fi,
  boolean: ps,
  date: Bi,
  discriminatedUnion: tl,
  effect: Wn,
  enum: cl,
  function: il,
  instanceof: Li,
  intersection: rl,
  lazy: ll,
  literal: ul,
  map: sl,
  nan: qi,
  nativeEnum: dl,
  never: Gi,
  null: Ji,
  nullable: ml,
  number: ds,
  object: Xi,
  oboolean: _l,
  onumber: vl,
  optional: fl,
  ostring: yl,
  pipeline: gl,
  preprocess: hl,
  promise: pl,
  record: al,
  set: ol,
  strictObject: Qi,
  string: cs,
  symbol: Vi,
  transformer: Wn,
  tuple: nl,
  undefined: zi,
  union: el,
  unknown: Wi,
  void: Yi,
  NEVER: wl,
  ZodIssueCode: y,
  quotelessJson: mi,
  ZodError: ae
});
function xl() {
  return {};
}
function kl(e, t) {
  var n, a, s;
  const r = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((s = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : s.typeName) !== _.ZodAny && (r.items = D(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && L(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && L(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (L(r, "minItems", e.exactLength.value, e.exactLength.message, t), L(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function Tl(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? L(r, "minimum", n.value, n.message, t) : L(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), L(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? L(r, "maximum", n.value, n.message, t) : L(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), L(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        L(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Sl() {
  return {
    type: "boolean"
  };
}
function fs(e, t) {
  return D(e.type._def, t);
}
const Il = (e, t) => D(e.innerType._def, t);
function ms(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => ms(e, t, a))
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
      return El(e, t);
  }
}
const El = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        L(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
      case "max":
        L(
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
function Cl(e, t) {
  return {
    ...D(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Al(e, t) {
  return t.effectStrategy === "input" ? D(e.schema._def, t) : {};
}
function Rl(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const Nl = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Pl(e, t) {
  const r = [
    D(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    D(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((s) => !!s);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const a = [];
  return r.forEach((s) => {
    if (Nl(s))
      a.push(...s.allOf), s.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let o = s;
      if ("additionalProperties" in s && s.additionalProperties === !1) {
        const { additionalProperties: l, ...u } = s;
        o = u;
      } else
        n = void 0;
      a.push(o);
    }
  }), a.length ? {
    allOf: a,
    ...n
  } : void 0;
}
function Ol(e, t) {
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
let qr;
const ce = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => (qr === void 0 && (qr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), qr),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function hs(e, t) {
  const r = {
    type: "string"
  };
  if (e.checks)
    for (const n of e.checks)
      switch (n.kind) {
        case "min":
          L(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, t);
          break;
        case "max":
          L(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              de(r, "email", n.message, t);
              break;
            case "format:idn-email":
              de(r, "idn-email", n.message, t);
              break;
            case "pattern:zod":
              G(r, ce.email, n.message, t);
              break;
          }
          break;
        case "url":
          de(r, "uri", n.message, t);
          break;
        case "uuid":
          de(r, "uuid", n.message, t);
          break;
        case "regex":
          G(r, n.regex, n.message, t);
          break;
        case "cuid":
          G(r, ce.cuid, n.message, t);
          break;
        case "cuid2":
          G(r, ce.cuid2, n.message, t);
          break;
        case "startsWith":
          G(r, RegExp(`^${Fr(n.value, t)}`), n.message, t);
          break;
        case "endsWith":
          G(r, RegExp(`${Fr(n.value, t)}$`), n.message, t);
          break;
        case "datetime":
          de(r, "date-time", n.message, t);
          break;
        case "date":
          de(r, "date", n.message, t);
          break;
        case "time":
          de(r, "time", n.message, t);
          break;
        case "duration":
          de(r, "duration", n.message, t);
          break;
        case "length":
          L(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, t), L(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
          break;
        case "includes": {
          G(r, RegExp(Fr(n.value, t)), n.message, t);
          break;
        }
        case "ip": {
          n.version !== "v6" && de(r, "ipv4", n.message, t), n.version !== "v4" && de(r, "ipv6", n.message, t);
          break;
        }
        case "base64url":
          G(r, ce.base64url, n.message, t);
          break;
        case "jwt":
          G(r, ce.jwt, n.message, t);
          break;
        case "cidr": {
          n.version !== "v6" && G(r, ce.ipv4Cidr, n.message, t), n.version !== "v4" && G(r, ce.ipv6Cidr, n.message, t);
          break;
        }
        case "emoji":
          G(r, ce.emoji(), n.message, t);
          break;
        case "ulid": {
          G(r, ce.ulid, n.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              de(r, "binary", n.message, t);
              break;
            }
            case "contentEncoding:base64": {
              L(r, "contentEncoding", "base64", n.message, t);
              break;
            }
            case "pattern:zod": {
              G(r, ce.base64, n.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          G(r, ce.nanoid, n.message, t);
      }
  return r;
}
function Fr(e, t) {
  return t.patternStrategy === "escape" ? Ml(e) : e;
}
const jl = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Ml(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    jl.has(e[r]) || (t += "\\"), t += e[r];
  return t;
}
function de(e, t, r, n) {
  var a;
  e.format || (a = e.anyOf) != null && a.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : L(e, "format", t, r, n);
}
function G(e, t, r, n) {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: Gn(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : L(e, "pattern", Gn(t, n), r, n);
}
function Gn(e, t) {
  var u;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const r = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s")
    // `.` matches newlines
  }, n = r.i ? e.source.toLowerCase() : e.source;
  let a = "", s = !1, o = !1, l = !1;
  for (let c = 0; c < n.length; c++) {
    if (s) {
      a += n[c], s = !1;
      continue;
    }
    if (r.i) {
      if (o) {
        if (n[c].match(/[a-z]/)) {
          l ? (a += n[c], a += `${n[c - 2]}-${n[c]}`.toUpperCase(), l = !1) : n[c + 1] === "-" && ((u = n[c + 2]) != null && u.match(/[a-z]/)) ? (a += n[c], l = !0) : a += `${n[c]}${n[c].toUpperCase()}`;
          continue;
        }
      } else if (n[c].match(/[a-z]/)) {
        a += `[${n[c]}${n[c].toUpperCase()}]`;
        continue;
      }
    }
    if (r.m) {
      if (n[c] === "^") {
        a += `(^|(?<=[\r
]))`;
        continue;
      } else if (n[c] === "$") {
        a += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r.s && n[c] === ".") {
      a += o ? `${n[c]}\r
` : `[${n[c]}\r
]`;
      continue;
    }
    a += n[c], n[c] === "\\" ? s = !0 : o && n[c] === "]" ? o = !1 : !o && n[c] === "[" && (o = !0);
  }
  try {
    new RegExp(a);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
  }
  return a;
}
function gs(e, t) {
  var n, a, s, o, l, u;
  if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === _.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((c, d) => ({
        ...c,
        [d]: D(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", d]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: D(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (t.target === "openApi3")
    return r;
  if (((a = e.keyType) == null ? void 0 : a._def.typeName) === _.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
    const { type: c, ...d } = hs(e.keyType._def, t);
    return {
      ...r,
      propertyNames: d
    };
  } else {
    if (((o = e.keyType) == null ? void 0 : o._def.typeName) === _.ZodEnum)
      return {
        ...r,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((l = e.keyType) == null ? void 0 : l._def.typeName) === _.ZodBranded && e.keyType._def.type._def.typeName === _.ZodString && ((u = e.keyType._def.type._def.checks) != null && u.length)) {
      const { type: c, ...d } = fs(e.keyType._def, t);
      return {
        ...r,
        propertyNames: d
      };
    }
  }
  return r;
}
function $l(e, t) {
  if (t.mapStrategy === "record")
    return gs(e, t);
  const r = D(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, n = D(e.valueType._def, {
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
function Dl(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function Zl() {
  return {
    not: {}
  };
}
function Ul(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const fr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Ll(e, t) {
  if (t.target === "openApi3")
    return Yn(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in fr && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = fr[s._def.typeName];
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
      const a = n.filter((s, o, l) => l.indexOf(s) === o);
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
  return Yn(e, t);
}
const Yn = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => D(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function ql(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: fr[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        fr[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const n = D(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = D(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function Fl(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", rs(r, "type", n.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? L(r, "minimum", n.value, n.message, t) : L(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), L(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? L(r, "maximum", n.value, n.message, t) : L(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), L(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        L(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Bl(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : D(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : D(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function Vl(e, t) {
  const r = t.target === "openAi", n = {
    type: "object",
    ...Object.entries(e.shape()).reduce((a, [s, o]) => {
      if (o === void 0 || o._def === void 0)
        return a;
      let l = o.isOptional();
      l && r && (o instanceof he && (o = o._def.innerType), o.isNullable() || (o = o.nullable()), l = !1);
      const u = D(o._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", s],
        propertyPath: [...t.currentPath, "properties", s]
      });
      return u === void 0 ? a : {
        properties: { ...a.properties, [s]: u },
        required: l ? a.required : [...a.required, s]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: Bl(e, t)
  };
  return n.required.length || delete n.required, n;
}
const zl = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return D(e.innerType._def, t);
  const r = D(e.innerType._def, {
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
}, Jl = (e, t) => {
  if (t.pipeStrategy === "input")
    return D(e.in._def, t);
  if (t.pipeStrategy === "output")
    return D(e.out._def, t);
  const r = D(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = D(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function Hl(e, t) {
  return D(e.type._def, t);
}
function Wl(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: D(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && L(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && L(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function Gl(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, n) => D(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: D(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, n) => D(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function Yl() {
  return {
    not: {}
  };
}
function Kl() {
  return {};
}
const Xl = (e, t) => D(e.innerType._def, t), Ql = (e, t, r) => {
  switch (t) {
    case _.ZodString:
      return hs(e, r);
    case _.ZodNumber:
      return Fl(e, r);
    case _.ZodObject:
      return Vl(e, r);
    case _.ZodBigInt:
      return Tl(e, r);
    case _.ZodBoolean:
      return Sl();
    case _.ZodDate:
      return ms(e, r);
    case _.ZodUndefined:
      return Yl();
    case _.ZodNull:
      return Ul(r);
    case _.ZodArray:
      return kl(e, r);
    case _.ZodUnion:
    case _.ZodDiscriminatedUnion:
      return Ll(e, r);
    case _.ZodIntersection:
      return Pl(e, r);
    case _.ZodTuple:
      return Gl(e, r);
    case _.ZodRecord:
      return gs(e, r);
    case _.ZodLiteral:
      return Ol(e, r);
    case _.ZodEnum:
      return Rl(e);
    case _.ZodNativeEnum:
      return Dl(e);
    case _.ZodNullable:
      return ql(e, r);
    case _.ZodOptional:
      return zl(e, r);
    case _.ZodMap:
      return $l(e, r);
    case _.ZodSet:
      return Wl(e, r);
    case _.ZodLazy:
      return () => e.getter()._def;
    case _.ZodPromise:
      return Hl(e, r);
    case _.ZodNaN:
    case _.ZodNever:
      return Zl();
    case _.ZodEffects:
      return Al(e, r);
    case _.ZodAny:
      return xl();
    case _.ZodUnknown:
      return Kl();
    case _.ZodDefault:
      return Cl(e, r);
    case _.ZodBranded:
      return fs(e, r);
    case _.ZodReadonly:
      return Xl(e, r);
    case _.ZodCatch:
      return Il(e, r);
    case _.ZodPipeline:
      return Jl(e, r);
    case _.ZodFunction:
    case _.ZodVoid:
    case _.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
};
function D(e, t, r = !1) {
  var l;
  const n = t.seen.get(e);
  if (t.override) {
    const u = (l = t.override) == null ? void 0 : l.call(t, e, t, n, r);
    if (u !== di)
      return u;
  }
  if (n && !r) {
    const u = eu(n, t);
    if (u !== void 0)
      return u;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = Ql(e, e.typeName, t), o = typeof s == "function" ? D(s(), t) : s;
  if (o && ru(e, t, o), t.postProcess) {
    const u = t.postProcess(o, e, t);
    return a.jsonSchema = o, u;
  }
  return a.jsonSchema = o, o;
}
const eu = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: tu(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, tu = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, ru = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), nu = (e, t) => {
  const r = fi(t), n = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((u, [c, d]) => ({
    ...u,
    [c]: D(d._def, {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, c]
    }, !0) ?? {}
  }), {}) : void 0, a = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, s = D(e._def, a === void 0 ? r : {
    ...r,
    currentPath: [...r.basePath, r.definitionPath, a]
  }, !1) ?? {}, o = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  o !== void 0 && (s.title = o);
  const l = a === void 0 ? n ? {
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
  return r.target === "jsonSchema7" ? l.$schema = "http://json-schema.org/draft-07/schema#" : (r.target === "jsonSchema2019-09" || r.target === "openAi") && (l.$schema = "https://json-schema.org/draft/2019-09/schema#"), r.target === "openAi" && ("anyOf" in l || "oneOf" in l || "allOf" in l || "type" in l && Array.isArray(l.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), l;
};
var Mt = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, $t = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Dt = {
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
}, Zt = {
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
}, Ut = {
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
}, au = [
  Mt,
  $t,
  Dt,
  Zt,
  Ut
];
Mt.code + "", $t.code + "", Dt.code + "", Zt.code + "", Ut.code + "";
Mt.name + "", Mt.code, $t.name + "", $t.code, Dt.name + "", Dt.code, Zt.name + "", Zt.code, Ut.name + "", Ut.code;
au.map((e) => e.code);
function su(e) {
  const t = ["ROOT"];
  let r = -1, n = null;
  function a(u, c, d) {
    switch (u) {
      case '"': {
        r = c, t.pop(), t.push(d), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        r = c, n = c, t.pop(), t.push(d), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(d), t.push("INSIDE_NUMBER");
        break;
      }
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        r = c, t.pop(), t.push(d), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        r = c, t.pop(), t.push(d), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        r = c, t.pop(), t.push(d), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function s(u, c) {
    switch (u) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        r = c, t.pop();
        break;
      }
    }
  }
  function o(u, c) {
    switch (u) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        r = c, t.pop();
        break;
      }
    }
  }
  for (let u = 0; u < e.length; u++) {
    const c = e[u];
    switch (t[t.length - 1]) {
      case "ROOT":
        a(c, u, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            r = u, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (c) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        a(c, u, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(c, u);
        break;
      }
      case "INSIDE_STRING": {
        switch (c) {
          case '"': {
            t.pop(), r = u;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = u;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (c) {
          case "]": {
            r = u, t.pop();
            break;
          }
          default: {
            r = u, a(c, u, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (c) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            r = u, t.pop();
            break;
          }
          default: {
            r = u;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        a(c, u, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), r = u;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (c) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            r = u;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(c, u), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(c, u);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(c, u);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(c, u);
            break;
          }
          default: {
            t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const f = e.substring(n, u + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(c, u) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(c, u)) : r = u;
        break;
      }
    }
  }
  let l = e.slice(0, r + 1);
  for (let u = t.length - 1; u >= 0; u--)
    switch (t[u]) {
      case "INSIDE_STRING": {
        l += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        l += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        l += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const d = e.substring(n, e.length);
        "true".startsWith(d) ? l += "true".slice(d.length) : "false".startsWith(d) ? l += "false".slice(d.length) : "null".startsWith(d) && (l += "null".slice(d.length));
      }
    }
  return l;
}
function ou(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = lt({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = lt({ text: su(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var iu = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, lu = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, uu = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, cu = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, du = {
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
}, pu = {
  code: "a",
  name: "tool_result",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("result" in e))
      throw new Error(
        '"tool_result" parts expect an object with a "toolCallId" and a "result" property.'
      );
    return {
      type: "tool_result",
      value: e
    };
  }
}, fu = {
  code: "b",
  name: "tool_call_streaming_start",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string")
      throw new Error(
        '"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.'
      );
    return {
      type: "tool_call_streaming_start",
      value: e
    };
  }
}, mu = {
  code: "c",
  name: "tool_call_delta",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("argsTextDelta" in e) || typeof e.argsTextDelta != "string")
      throw new Error(
        '"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.'
      );
    return {
      type: "tool_call_delta",
      value: e
    };
  }
}, hu = {
  code: "d",
  name: "finish_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string")
      throw new Error(
        '"finish_message" parts expect an object with a "finishReason" property.'
      );
    const t = {
      finishReason: e.finishReason
    };
    return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
      promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN,
      completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN
    }), {
      type: "finish_message",
      value: t
    };
  }
}, gu = {
  code: "e",
  name: "finish_step",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string")
      throw new Error(
        '"finish_step" parts expect an object with a "finishReason" property.'
      );
    const t = {
      finishReason: e.finishReason,
      isContinued: !1
    };
    return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
      promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN,
      completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN
    }), "isContinued" in e && typeof e.isContinued == "boolean" && (t.isContinued = e.isContinued), {
      type: "finish_step",
      value: t
    };
  }
}, yu = {
  code: "f",
  name: "start_step",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("messageId" in e) || typeof e.messageId != "string")
      throw new Error(
        '"start_step" parts expect an object with an "id" property.'
      );
    return {
      type: "start_step",
      value: {
        messageId: e.messageId
      }
    };
  }
}, vu = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, _u = {
  code: "h",
  name: "source",
  parse: (e) => {
    if (e == null || typeof e != "object")
      throw new Error('"source" parts expect a Source object.');
    return {
      type: "source",
      value: e
    };
  }
}, bu = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, wu = {
  code: "j",
  name: "reasoning_signature",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("signature" in e) || typeof e.signature != "string")
      throw new Error(
        '"reasoning_signature" parts expect an object with a "signature" property.'
      );
    return {
      type: "reasoning_signature",
      value: { signature: e.signature }
    };
  }
}, xr = [
  iu,
  lu,
  uu,
  cu,
  du,
  pu,
  fu,
  mu,
  hu,
  gu,
  yu,
  vu,
  _u,
  bu,
  wu
];
Object.fromEntries(
  xr.map((e) => [e.code, e])
);
Object.fromEntries(
  xr.map((e) => [e.name, e.code])
);
xr.map((e) => e.code);
function Y(e, t) {
  const r = xr.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
function xu(e, t) {
  var r;
  const n = (r = void 0) != null ? r : !1;
  return ku(
    nu(e, {
      $refStrategy: n ? "root" : "none",
      target: "jsonSchema7"
      // note: openai mode breaks various gemini conversions
    }),
    {
      validate: (a) => {
        const s = e.safeParse(a);
        return s.success ? { success: !0, value: s.data } : { success: !1, error: s.error };
      }
    }
  );
}
var rn = Symbol.for("vercel.ai.schema");
function ku(e, {
  validate: t
} = {}) {
  return {
    [rn]: !0,
    _type: void 0,
    // should never be used directly
    [sr]: !0,
    jsonSchema: e,
    validate: t
  };
}
function Tu(e) {
  return typeof e == "object" && e !== null && rn in e && e[rn] === !0 && "jsonSchema" in e && "validate" in e;
}
function kr(e) {
  return Tu(e) ? e : xu(e);
}
var Su = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, ze = "1.9.0", Kn = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Iu(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(Kn);
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
    return function(u) {
      return u === e;
    };
  function s(l) {
    return r.add(l), !1;
  }
  function o(l) {
    return t.add(l), !0;
  }
  return function(u) {
    if (t.has(u))
      return !0;
    if (r.has(u))
      return !1;
    var c = u.match(Kn);
    if (!c)
      return s(u);
    var d = {
      major: +c[1],
      minor: +c[2],
      patch: +c[3],
      prerelease: c[4]
    };
    return d.prerelease != null || a.major !== d.major ? s(u) : a.major === 0 ? a.minor === d.minor && a.patch <= d.patch ? o(u) : s(u) : a.minor <= d.minor ? o(u) : s(u);
  };
}
var Eu = Iu(ze), Cu = ze.split(".")[0], Lt = Symbol.for("opentelemetry.js.api." + Cu), qt = Su;
function zt(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = qt[Lt] = (a = qt[Lt]) !== null && a !== void 0 ? a : {
    version: ze
  };
  if (!n && s[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(o.stack || o.message), !1;
  }
  if (s.version !== ze) {
    var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + e + " does not match previously registered API v" + ze);
    return r.error(o.stack || o.message), !1;
  }
  return s[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + ze + "."), !0;
}
function Ye(e) {
  var t, r, n = (t = qt[Lt]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !Eu(n)))
    return (r = qt[Lt]) === null || r === void 0 ? void 0 : r[e];
}
function Jt(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + ze + ".");
  var r = qt[Lt];
  r && delete r[e];
}
var Au = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, Ru = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Nu = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yt("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yt("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yt("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yt("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yt("verbose", this._namespace, t);
    }, e;
  }()
);
function yt(e, t, r) {
  var n = Ye("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, Ru([], Au(r), !1));
}
var ne;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(ne || (ne = {}));
function Pu(e, t) {
  e < ne.NONE ? e = ne.NONE : e > ne.ALL && (e = ne.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", ne.ERROR),
    warn: r("warn", ne.WARN),
    info: r("info", ne.INFO),
    debug: r("debug", ne.DEBUG),
    verbose: r("verbose", ne.VERBOSE)
  };
}
var Ou = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, ju = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Mu = "diag", Ce = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var l = Ye("diag");
          if (l)
            return l[a].apply(l, ju([], Ou(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, l, u;
        if (s === void 0 && (s = { logLevel: ne.INFO }), a === r) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = c.stack) !== null && o !== void 0 ? o : c.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var d = Ye("diag"), f = Pu((l = s.logLevel) !== null && l !== void 0 ? l : ne.INFO, a);
        if (d && !s.suppressOverrideMessage) {
          var b = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + b), f.warn("Current logger will overwrite one already registered from " + b);
        }
        return zt("diag", f, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Jt(Mu, r);
      }, r.createComponentLogger = function(a) {
        return new Nu(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), $u = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, Du = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Zu = (
  /** @class */
  function() {
    function e(t) {
      this._entries = t ? new Map(t) : /* @__PURE__ */ new Map();
    }
    return e.prototype.getEntry = function(t) {
      var r = this._entries.get(t);
      if (r)
        return Object.assign({}, r);
    }, e.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(t) {
        var r = $u(t, 2), n = r[0], a = r[1];
        return [n, a];
      });
    }, e.prototype.setEntry = function(t, r) {
      var n = new e(this._entries);
      return n._entries.set(t, r), n;
    }, e.prototype.removeEntry = function(t) {
      var r = new e(this._entries);
      return r._entries.delete(t), r;
    }, e.prototype.removeEntries = function() {
      for (var t, r, n = [], a = 0; a < arguments.length; a++)
        n[a] = arguments[a];
      var s = new e(this._entries);
      try {
        for (var o = Du(n), l = o.next(); !l.done; l = o.next()) {
          var u = l.value;
          s._entries.delete(u);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          l && !l.done && (r = o.return) && r.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return s;
    }, e.prototype.clear = function() {
      return new e();
    }, e;
  }()
);
Ce.instance();
function Uu(e) {
  return e === void 0 && (e = {}), new Zu(new Map(Object.entries(e)));
}
function ys(e) {
  return Symbol.for(e);
}
var Lu = (
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
), qu = new Lu(), Qe = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Fu = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return Xu;
    }, e.prototype.createHistogram = function(t, r) {
      return Qu;
    }, e.prototype.createCounter = function(t, r) {
      return Ku;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return ec;
    }, e.prototype.createObservableGauge = function(t, r) {
      return rc;
    }, e.prototype.createObservableCounter = function(t, r) {
      return tc;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return nc;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), Tr = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), Bu = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Tr)
), Vu = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Tr)
), zu = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Tr)
), Ju = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Tr)
), yn = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), Hu = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(yn)
), Wu = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(yn)
), Gu = (
  /** @class */
  function(e) {
    Qe(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(yn)
), Yu = new Fu(), Ku = new Bu(), Xu = new zu(), Qu = new Ju(), ec = new Vu(), tc = new Hu(), rc = new Wu(), nc = new Gu(), ac = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, sc = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, oc = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, ic = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, lc = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return qu;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, ic([n], oc(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), uc = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}, cc = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Br = "context", dc = new lc(), Sr = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return zt(Br, t, Ce.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, cc([t, r, n], uc(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return Ye(Br) || dc;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Jt(Br, Ce.instance());
    }, e;
  }()
), nn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(nn || (nn = {}));
var vs = "0000000000000000", _s = "00000000000000000000000000000000", pc = {
  traceId: _s,
  spanId: vs,
  traceFlags: nn.NONE
}, bt = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = pc), this._spanContext = t;
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
), vn = ys("OpenTelemetry Context Key SPAN");
function _n(e) {
  return e.getValue(vn) || void 0;
}
function fc() {
  return _n(Sr.getInstance().active());
}
function bn(e, t) {
  return e.setValue(vn, t);
}
function mc(e) {
  return e.deleteValue(vn);
}
function hc(e, t) {
  return bn(e, new bt(t));
}
function bs(e) {
  var t;
  return (t = _n(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var gc = /^([0-9a-f]{32})$/i, yc = /^[0-9a-f]{16}$/i;
function vc(e) {
  return gc.test(e) && e !== _s;
}
function _c(e) {
  return yc.test(e) && e !== vs;
}
function ws(e) {
  return vc(e.traceId) && _c(e.spanId);
}
function bc(e) {
  return new bt(e);
}
var Vr = Sr.getInstance(), xs = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = Vr.active());
      var a = !!(r != null && r.root);
      if (a)
        return new bt();
      var s = n && bs(n);
      return wc(s) && ws(s) ? new bt(s) : new bt();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, l;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? l = r : arguments.length === 3 ? (s = r, l = n) : (s = r, o = n, l = a);
        var u = o ?? Vr.active(), c = this.startSpan(t, s, u), d = bn(u, c);
        return Vr.with(d, l, void 0, c);
      }
    }, e;
  }()
);
function wc(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var xc = new xs(), kc = (
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
      return t ? (this._delegate = t, this._delegate) : xc;
    }, e;
  }()
), Tc = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new xs();
    }, e;
  }()
), Sc = new Tc(), Xn = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new kc(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Sc;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), mr;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(mr || (mr = {}));
Sr.getInstance();
Ce.instance();
var Ic = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, n) {
      return Yu;
    }, e;
  }()
), Ec = new Ic(), zr = "metrics", Cc = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return zt(zr, t, Ce.instance());
    }, e.prototype.getMeterProvider = function() {
      return Ye(zr) || Ec;
    }, e.prototype.getMeter = function(t, r, n) {
      return this.getMeterProvider().getMeter(t, r, n);
    }, e.prototype.disable = function() {
      Jt(zr, Ce.instance());
    }, e;
  }()
);
Cc.getInstance();
var Ac = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.inject = function(t, r) {
    }, e.prototype.extract = function(t, r) {
      return t;
    }, e.prototype.fields = function() {
      return [];
    }, e;
  }()
), wn = ys("OpenTelemetry Baggage Key");
function ks(e) {
  return e.getValue(wn) || void 0;
}
function Rc() {
  return ks(Sr.getInstance().active());
}
function Nc(e, t) {
  return e.setValue(wn, t);
}
function Pc(e) {
  return e.deleteValue(wn);
}
var Jr = "propagation", Oc = new Ac(), jc = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = Uu, this.getBaggage = ks, this.getActiveBaggage = Rc, this.setBaggage = Nc, this.deleteBaggage = Pc;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return zt(Jr, t, Ce.instance());
    }, e.prototype.inject = function(t, r, n) {
      return n === void 0 && (n = sc), this._getGlobalPropagator().inject(t, r, n);
    }, e.prototype.extract = function(t, r, n) {
      return n === void 0 && (n = ac), this._getGlobalPropagator().extract(t, r, n);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Jt(Jr, Ce.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return Ye(Jr) || Oc;
    }, e;
  }()
);
jc.getInstance();
var Hr = "trace", Mc = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new Xn(), this.wrapSpanContext = bc, this.isSpanContextValid = ws, this.deleteSpan = mc, this.getSpan = _n, this.getActiveSpan = fc, this.getSpanContext = bs, this.setSpan = bn, this.setSpanContext = hc;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = zt(Hr, this._proxyTracerProvider, Ce.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return Ye(Hr) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Jt(Hr, Ce.instance()), this._proxyTracerProvider = new Xn();
    }, e;
  }()
), $c = Mc.getInstance(), Dc = Object.defineProperty, xn = (e, t) => {
  for (var r in t)
    Dc(e, r, { get: t[r], enumerable: !0 });
};
function hr(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = new Headers(e ?? {});
  return n.has("Content-Type") || n.set("Content-Type", t), r !== void 0 && n.set("X-Vercel-AI-Data-Stream", r), n;
}
function Qn(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = {};
  if (e != null)
    for (const [a, s] of Object.entries(e))
      n[a] = s;
  return n["Content-Type"] == null && (n["Content-Type"] = t), r !== void 0 && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function ea({
  response: e,
  status: t,
  statusText: r,
  headers: n,
  stream: a
}) {
  e.writeHead(t ?? 200, r, n);
  const s = a.getReader();
  (async () => {
    try {
      for (; ; ) {
        const { done: l, value: u } = await s.read();
        if (l)
          break;
        e.write(u);
      }
    } catch (l) {
      throw l;
    } finally {
      e.end();
    }
  })();
}
var Ts = "AI_InvalidArgumentError", Ss = `vercel.ai.error.${Ts}`, Zc = Symbol.for(Ss), Is, pe = class extends R {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: Ts,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[Is] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return R.hasMarker(e, Ss);
  }
};
Is = Zc;
var Es = "AI_RetryError", Cs = `vercel.ai.error.${Es}`, Uc = Symbol.for(Cs), As, ta = class extends R {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: Es, message: e }), this[As] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return R.hasMarker(e, Cs);
  }
};
As = Uc;
var Lc = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => Rs(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function Rs(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (rr(s) || t === 0)
      throw s;
    const o = Ko(s), l = [...a, s], u = l.length;
    if (u > t)
      throw new ta({
        message: `Failed after ${u} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: l
      });
    if (s instanceof Error && Te.isInstance(s) && s.isRetryable === !0 && u <= t)
      return await Yo(r), Rs(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        l
      );
    throw u === 1 ? s : new ta({
      message: `Failed after ${u} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: l
    });
  }
}
function qc({
  maxRetries: e
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new pe({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new pe({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const t = e ?? 2;
  return {
    maxRetries: t,
    retry: Lc({ maxRetries: t })
  };
}
function an({
  operationId: e,
  telemetry: t
}) {
  return {
    // standardized operation and resource name:
    "operation.name": `${e}${(t == null ? void 0 : t.functionId) != null ? ` ${t.functionId}` : ""}`,
    "resource.name": t == null ? void 0 : t.functionId,
    // detailed, AI SDK specific data:
    "ai.operationId": e,
    "ai.telemetry.functionId": t == null ? void 0 : t.functionId
  };
}
function Fc({
  model: e,
  settings: t,
  telemetry: r,
  headers: n
}) {
  var a;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    // settings:
    ...Object.entries(t).reduce((s, [o, l]) => (s[`ai.settings.${o}`] = l, s), {}),
    // add metadata as attributes:
    ...Object.entries((a = r == null ? void 0 : r.metadata) != null ? a : {}).reduce(
      (s, [o, l]) => (s[`ai.telemetry.metadata.${o}`] = l, s),
      {}
    ),
    // request headers
    ...Object.entries(n ?? {}).reduce((s, [o, l]) => (l !== void 0 && (s[`ai.request.headers.${o}`] = l), s), {})
  };
}
var Bc = {
  startSpan() {
    return tr;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(tr);
    if (typeof r == "function")
      return r(tr);
    if (typeof n == "function")
      return n(tr);
  }
}, tr = {
  spanContext() {
    return Vc;
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
}, Vc = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function zc({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || $c.getTracer("ai") : Bc;
}
function sn({
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
          code: mr.ERROR,
          message: o.message
        })) : s.setStatus({ code: mr.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function ot({
  telemetry: e,
  attributes: t
}) {
  return (e == null ? void 0 : e.isEnabled) !== !0 ? {} : Object.entries(t).reduce((r, [n, a]) => {
    if (a === void 0)
      return r;
    if (typeof a == "object" && "input" in a && typeof a.input == "function") {
      if ((e == null ? void 0 : e.recordInputs) === !1)
        return r;
      const s = a.input();
      return s === void 0 ? r : { ...r, [n]: s };
    }
    if (typeof a == "object" && "output" in a && typeof a.output == "function") {
      if ((e == null ? void 0 : e.recordOutputs) === !1)
        return r;
      const s = a.output();
      return s === void 0 ? r : { ...r, [n]: s };
    }
    return { ...r, [n]: a };
  }, {});
}
var Ns = "AI_NoObjectGeneratedError", Ps = `vercel.ai.error.${Ns}`, Jc = Symbol.for(Ps), Os, ra = class extends R {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: n,
    usage: a
  }) {
    super({ name: Ns, message: e, cause: t }), this[Os] = !0, this.text = r, this.response = n, this.usage = a;
  }
  static isInstance(e) {
    return R.hasMarker(e, Ps);
  }
};
Os = Jc;
var js = "AI_DownloadError", Ms = `vercel.ai.error.${js}`, Hc = Symbol.for(Ms), $s, Wr = class extends R {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: js, message: a, cause: n }), this[$s] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return R.hasMarker(e, Ms);
  }
};
$s = Hc;
async function Wc({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const a = await t(n);
    if (!a.ok)
      throw new Wr({
        url: n,
        statusCode: a.status,
        statusText: a.statusText
      });
    return {
      data: new Uint8Array(await a.arrayBuffer()),
      mimeType: (r = a.headers.get("content-type")) != null ? r : void 0
    };
  } catch (a) {
    throw Wr.isInstance(a) ? a : new Wr({ url: n, cause: a });
  }
}
var Gc = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function Yc(e) {
  for (const { bytes: t, mimeType: r } of Gc)
    if (e.length >= t.length && t.every((n, a) => e[a] === n))
      return r;
}
var Ds = "AI_InvalidDataContentError", Zs = `vercel.ai.error.${Ds}`, Kc = Symbol.for(Zs), Us, na = class extends R {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: Ds, message: r, cause: t }), this[Us] = !0, this.content = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, Zs);
  }
};
Us = Kc;
var Ls = i.union([
  i.string(),
  i.instanceof(Uint8Array),
  i.instanceof(ArrayBuffer),
  i.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function Xc(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? wt(new Uint8Array(e)) : wt(e);
}
function gr(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return ci(e);
    } catch (t) {
      throw new na({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new na({ content: e });
}
function Qc(e) {
  try {
    return new TextDecoder().decode(e);
  } catch {
    throw new Error("Error decoding Uint8Array to text");
  }
}
var qs = "AI_InvalidMessageRoleError", Fs = `vercel.ai.error.${qs}`, ed = Symbol.for(Fs), Bs, td = class extends R {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: qs, message: t }), this[Bs] = !0, this.role = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, Fs);
  }
};
Bs = ed;
function rd(e) {
  try {
    const [t, r] = e.split(",");
    return {
      mimeType: t.split(";")[0].split(":")[1],
      base64Content: r
    };
  } catch {
    return {
      mimeType: void 0,
      base64Content: void 0
    };
  }
}
async function nd({
  prompt: e,
  modelSupportsImageUrls: t = !0,
  modelSupportsUrl: r = () => !1,
  downloadImplementation: n = Wc
}) {
  const a = await sd(
    e.messages,
    n,
    t,
    r
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (s) => ad(s, a)
    )
  ];
}
function ad(e, t) {
  var r, n, a, s, o, l;
  const u = e.role;
  switch (u) {
    case "system":
      return {
        role: "system",
        content: e.content,
        providerMetadata: (r = e.providerOptions) != null ? r : e.experimental_providerMetadata
      };
    case "user":
      return typeof e.content == "string" ? {
        role: "user",
        content: [{ type: "text", text: e.content }],
        providerMetadata: (n = e.providerOptions) != null ? n : e.experimental_providerMetadata
      } : {
        role: "user",
        content: e.content.map((c) => od(c, t)).filter((c) => c.type !== "text" || c.text !== ""),
        providerMetadata: (a = e.providerOptions) != null ? a : e.experimental_providerMetadata
      };
    case "assistant":
      return typeof e.content == "string" ? {
        role: "assistant",
        content: [{ type: "text", text: e.content }],
        providerMetadata: (s = e.providerOptions) != null ? s : e.experimental_providerMetadata
      } : {
        role: "assistant",
        content: e.content.filter(
          // remove empty text parts:
          (c) => c.type !== "text" || c.text !== ""
        ).map((c) => {
          const { experimental_providerMetadata: d, providerOptions: f, ...b } = c;
          return {
            ...b,
            providerMetadata: f ?? d
          };
        }),
        providerMetadata: (o = e.providerOptions) != null ? o : e.experimental_providerMetadata
      };
    case "tool":
      return {
        role: "tool",
        content: e.content.map((c) => {
          var d;
          return {
            type: "tool-result",
            toolCallId: c.toolCallId,
            toolName: c.toolName,
            result: c.result,
            content: c.experimental_content,
            isError: c.isError,
            providerMetadata: (d = c.providerOptions) != null ? d : c.experimental_providerMetadata
          };
        }),
        providerMetadata: (l = e.providerOptions) != null ? l : e.experimental_providerMetadata
      };
    default: {
      const c = u;
      throw new td({ role: c });
    }
  }
}
async function sd(e, t, r, n) {
  const a = e.filter((o) => o.role === "user").map((o) => o.content).filter(
    (o) => Array.isArray(o)
  ).flat().filter(
    (o) => o.type === "image" || o.type === "file"
  ).filter(
    (o) => !(o.type === "image" && r === !0)
  ).map((o) => o.type === "image" ? o.image : o.data).map(
    (o) => (
      // support string urls:
      typeof o == "string" && (o.startsWith("http:") || o.startsWith("https:")) ? new URL(o) : o
    )
  ).filter((o) => o instanceof URL).filter((o) => !n(o)), s = await Promise.all(
    a.map(async (o) => ({
      url: o,
      data: await t({ url: o })
    }))
  );
  return Object.fromEntries(
    s.map(({ url: o, data: l }) => [o.toString(), l])
  );
}
function od(e, t) {
  var r;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerMetadata: e.experimental_providerMetadata
    };
  let n = e.mimeType, a, s, o;
  const l = e.type;
  switch (l) {
    case "image":
      a = e.image;
      break;
    case "file":
      a = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${l}`);
  }
  try {
    s = typeof a == "string" ? new URL(a) : a;
  } catch {
    s = a;
  }
  if (s instanceof URL)
    if (s.protocol === "data:") {
      const { mimeType: u, base64Content: c } = rd(
        s.toString()
      );
      if (u == null || c == null)
        throw new Error(`Invalid data URL format in part ${l}`);
      n = u, o = gr(c);
    } else {
      const u = t[s.toString()];
      u ? (o = u.data, n ?? (n = u.mimeType)) : o = s;
    }
  else
    o = gr(s);
  switch (l) {
    case "image":
      return o instanceof Uint8Array && (n = (r = Yc(o)) != null ? r : n), {
        type: "image",
        image: o,
        mimeType: n,
        providerMetadata: e.experimental_providerMetadata
      };
    case "file": {
      if (n == null)
        throw new Error("Mime type is missing for file part");
      return {
        type: "file",
        data: o instanceof Uint8Array ? Xc(o) : o,
        mimeType: n,
        providerMetadata: e.experimental_providerMetadata
      };
    }
  }
}
function id({
  maxTokens: e,
  temperature: t,
  topP: r,
  topK: n,
  presencePenalty: a,
  frequencyPenalty: s,
  stopSequences: o,
  seed: l
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new pe({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new pe({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new pe({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new pe({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new pe({
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (a != null && typeof a != "number")
    throw new pe({
      parameter: "presencePenalty",
      value: a,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new pe({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (l != null && !Number.isInteger(l))
    throw new pe({
      parameter: "seed",
      value: l,
      message: "seed must be an integer"
    });
  return {
    maxTokens: e,
    temperature: t ?? 0,
    topP: r,
    topK: n,
    presencePenalty: a,
    frequencyPenalty: s,
    stopSequences: o != null && o.length > 0 ? o : void 0,
    seed: l
  };
}
function ld(e) {
  var t, r, n;
  const a = [];
  for (const s of e) {
    let o;
    try {
      o = new URL(s.url);
    } catch {
      throw new Error(`Invalid URL: ${s.url}`);
    }
    switch (o.protocol) {
      case "http:":
      case "https:": {
        if ((t = s.contentType) != null && t.startsWith("image/"))
          a.push({ type: "image", image: o });
        else {
          if (!s.contentType)
            throw new Error(
              "If the attachment is not an image, it must specify a content type"
            );
          a.push({
            type: "file",
            data: o,
            mimeType: s.contentType
          });
        }
        break;
      }
      case "data:": {
        let l, u, c;
        try {
          [l, u] = s.url.split(","), c = l.split(";")[0].split(":")[1];
        } catch {
          throw new Error(`Error processing data URL: ${s.url}`);
        }
        if (c == null || u == null)
          throw new Error(`Invalid data URL format: ${s.url}`);
        if ((r = s.contentType) != null && r.startsWith("image/"))
          a.push({
            type: "image",
            image: gr(u)
          });
        else if ((n = s.contentType) != null && n.startsWith("text/"))
          a.push({
            type: "text",
            text: Qc(
              gr(u)
            )
          });
        else {
          if (!s.contentType)
            throw new Error(
              "If the attachment is not an image or text, it must specify a content type"
            );
          a.push({
            type: "file",
            data: u,
            mimeType: s.contentType
          });
        }
        break;
      }
      default:
        throw new Error(`Unsupported URL protocol: ${o.protocol}`);
    }
  }
  return a;
}
var Vs = "AI_MessageConversionError", zs = `vercel.ai.error.${Vs}`, ud = Symbol.for(zs), Js, Gr = class extends R {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: Vs, message: t }), this[Js] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, zs);
  }
};
Js = ud;
function cd(e, t) {
  var r, n;
  const a = (r = t == null ? void 0 : t.tools) != null ? r : {}, s = [];
  for (let o = 0; o < e.length; o++) {
    const l = e[o], u = o === e.length - 1, { role: c, content: d, experimental_attachments: f } = l;
    switch (c) {
      case "system": {
        s.push({
          role: "system",
          content: d
        });
        break;
      }
      case "user": {
        s.push({
          role: "user",
          content: f ? [
            { type: "text", text: d },
            ...ld(f)
          ] : d
        });
        break;
      }
      case "assistant": {
        if (l.parts != null) {
          let h = function() {
            const w = [];
            for (const g of v)
              switch (g.type) {
                case "text":
                  w.push({
                    type: "text",
                    text: g.text
                  });
                  break;
                case "reasoning": {
                  for (const E of g.details)
                    switch (E.type) {
                      case "text":
                        w.push({
                          type: "reasoning",
                          text: E.text,
                          signature: E.signature
                        });
                        break;
                      case "redacted":
                        w.push({
                          type: "redacted-reasoning",
                          data: E.data
                        });
                        break;
                    }
                  break;
                }
                case "tool-invocation":
                  w.push({
                    type: "tool-call",
                    toolCallId: g.toolInvocation.toolCallId,
                    toolName: g.toolInvocation.toolName,
                    args: g.toolInvocation.args
                  });
                  break;
                default: {
                  const E = g;
                  throw new Error(`Unsupported part: ${E}`);
                }
              }
            s.push({
              role: "assistant",
              content: w
            });
            const I = v.filter(
              (g) => g.type === "tool-invocation"
            ).map((g) => g.toolInvocation);
            I.length > 0 && s.push({
              role: "tool",
              content: I.map(
                (g) => {
                  if (!("result" in g))
                    throw new Gr({
                      originalMessage: l,
                      message: "ToolInvocation must have a result: " + JSON.stringify(g)
                    });
                  const { toolCallId: E, toolName: P, result: A } = g, Z = a[P];
                  return (Z == null ? void 0 : Z.experimental_toToolResultContent) != null ? {
                    type: "tool-result",
                    toolCallId: E,
                    toolName: P,
                    result: Z.experimental_toToolResultContent(A),
                    experimental_content: Z.experimental_toToolResultContent(A)
                  } : {
                    type: "tool-result",
                    toolCallId: E,
                    toolName: P,
                    result: A
                  };
                }
              )
            }), v = [], m = !1, p++;
          }, p = 0, m = !1, v = [];
          for (const w of l.parts)
            switch (w.type) {
              case "reasoning":
                v.push(w);
                break;
              case "text": {
                m && h(), v.push(w);
                break;
              }
              case "tool-invocation": {
                ((n = w.toolInvocation.step) != null ? n : 0) !== p && h(), v.push(w), m = !0;
                break;
              }
            }
          h();
          break;
        }
        const b = l.toolInvocations;
        if (b == null || b.length === 0) {
          s.push({ role: "assistant", content: d });
          break;
        }
        const T = b.reduce((h, p) => {
          var m;
          return Math.max(h, (m = p.step) != null ? m : 0);
        }, 0);
        for (let h = 0; h <= T; h++) {
          const p = b.filter(
            (m) => {
              var v;
              return ((v = m.step) != null ? v : 0) === h;
            }
          );
          p.length !== 0 && (s.push({
            role: "assistant",
            content: [
              ...u && d && h === 0 ? [{ type: "text", text: d }] : [],
              ...p.map(
                ({ toolCallId: m, toolName: v, args: w }) => ({
                  type: "tool-call",
                  toolCallId: m,
                  toolName: v,
                  args: w
                })
              )
            ]
          }), s.push({
            role: "tool",
            content: p.map((m) => {
              if (!("result" in m))
                throw new Gr({
                  originalMessage: l,
                  message: "ToolInvocation must have a result: " + JSON.stringify(m)
                });
              const { toolCallId: v, toolName: w, result: I } = m, g = a[w];
              return (g == null ? void 0 : g.experimental_toToolResultContent) != null ? {
                type: "tool-result",
                toolCallId: v,
                toolName: w,
                result: g.experimental_toToolResultContent(I),
                experimental_content: g.experimental_toToolResultContent(I)
              } : {
                type: "tool-result",
                toolCallId: v,
                toolName: w,
                result: I
              };
            })
          }));
        }
        d && !u && s.push({ role: "assistant", content: d });
        break;
      }
      case "data":
        break;
      default: {
        const b = c;
        throw new Gr({
          originalMessage: l,
          message: `Unsupported role: ${b}`
        });
      }
    }
  }
  return s;
}
function dd(e) {
  if (!Array.isArray(e))
    return "other";
  if (e.length === 0)
    return "messages";
  const t = e.map(pd);
  return t.some((r) => r === "has-ui-specific-parts") ? "ui-messages" : t.every(
    (r) => r === "has-core-specific-parts" || r === "message"
  ) ? "messages" : "other";
}
function pd(e) {
  return typeof e == "object" && e !== null && (e.role === "function" || // UI-only role
  e.role === "data" || // UI-only role
  "toolInvocations" in e || // UI-specific field
  "experimental_attachments" in e) ? "has-ui-specific-parts" : typeof e == "object" && e !== null && "content" in e && (Array.isArray(e.content) || // Core messages can have array content
  "experimental_providerMetadata" in e || "providerOptions" in e) ? "has-core-specific-parts" : typeof e == "object" && e !== null && "role" in e && "content" in e && typeof e.content == "string" && ["system", "user", "assistant", "tool"].includes(e.role) ? "message" : "other";
}
var on = i.lazy(
  () => i.union([
    i.null(),
    i.string(),
    i.number(),
    i.boolean(),
    i.record(i.string(), on),
    i.array(on)
  ])
), V = i.record(
  i.string(),
  i.record(i.string(), on)
), fd = i.array(
  i.union([
    i.object({ type: i.literal("text"), text: i.string() }),
    i.object({
      type: i.literal("image"),
      data: i.string(),
      mimeType: i.string().optional()
    })
  ])
), Hs = i.object({
  type: i.literal("text"),
  text: i.string(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), md = i.object({
  type: i.literal("image"),
  image: i.union([Ls, i.instanceof(URL)]),
  mimeType: i.string().optional(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), hd = i.object({
  type: i.literal("file"),
  data: i.union([Ls, i.instanceof(URL)]),
  mimeType: i.string(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), gd = i.object({
  type: i.literal("reasoning"),
  text: i.string(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), yd = i.object({
  type: i.literal("redacted-reasoning"),
  data: i.string(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), vd = i.object({
  type: i.literal("tool-call"),
  toolCallId: i.string(),
  toolName: i.string(),
  args: i.unknown(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), _d = i.object({
  type: i.literal("tool-result"),
  toolCallId: i.string(),
  toolName: i.string(),
  result: i.unknown(),
  content: fd.optional(),
  isError: i.boolean().optional(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), bd = i.object({
  role: i.literal("system"),
  content: i.string(),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), wd = i.object({
  role: i.literal("user"),
  content: i.union([
    i.string(),
    i.array(i.union([Hs, md, hd]))
  ]),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), xd = i.object({
  role: i.literal("assistant"),
  content: i.union([
    i.string(),
    i.array(
      i.union([
        Hs,
        gd,
        yd,
        vd
      ])
    )
  ]),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), kd = i.object({
  role: i.literal("tool"),
  content: i.array(_d),
  providerOptions: V.optional(),
  experimental_providerMetadata: V.optional()
}), Td = i.union([
  bd,
  wd,
  xd,
  kd
]);
function Sd({
  prompt: e,
  tools: t
}) {
  if (e.prompt == null && e.messages == null)
    throw new Ve({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new Ve({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new Ve({
      prompt: e,
      message: "system must be a string"
    });
  if (e.prompt != null) {
    if (typeof e.prompt != "string")
      throw new Ve({
        prompt: e,
        message: "prompt must be a string"
      });
    return {
      type: "prompt",
      system: e.system,
      messages: [
        {
          role: "user",
          content: e.prompt
        }
      ]
    };
  }
  if (e.messages != null) {
    const r = dd(e.messages);
    if (r === "other")
      throw new Ve({
        prompt: e,
        message: "messages must be an array of CoreMessage or UIMessage"
      });
    const n = r === "ui-messages" ? cd(e.messages, {
      tools: t
    }) : e.messages, a = Bt({
      value: n,
      schema: i.array(Td)
    });
    if (!a.success)
      throw new Ve({
        prompt: e,
        message: "messages must be an array of CoreMessage or UIMessage",
        cause: a.error
      });
    return {
      type: "messages",
      messages: n,
      system: e.system
    };
  }
  throw new Error("unreachable");
}
function Id({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Ed(e, t) {
  return {
    promptTokens: e.promptTokens + t.promptTokens,
    completionTokens: e.completionTokens + t.completionTokens,
    totalTokens: e.totalTokens + t.totalTokens
  };
}
var Cd = "JSON schema:", Ad = "You MUST answer with a JSON object that matches the JSON schema above.", Rd = "You MUST answer with JSON.";
function Nd({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? Cd : void 0,
  schemaSuffix: n = t != null ? Ad : Rd
}) {
  return [
    e != null && e.length > 0 ? e : void 0,
    e != null && e.length > 0 ? "" : void 0,
    // add a newline if prompt is not null
    r,
    t != null ? JSON.stringify(t) : void 0,
    n
  ].filter((a) => a != null).join(`
`);
}
function Yr(e) {
  const t = e.pipeThrough(new TransformStream());
  return t[Symbol.asyncIterator] = () => {
    const r = t.getReader();
    return {
      async next() {
        const { done: n, value: a } = await r.read();
        return n ? { done: !0, value: void 0 } : { done: !1, value: a };
      }
    };
  }, t;
}
Ke({ prefix: "aiobj", size: 24 });
var re = class {
  constructor() {
    this.status = { type: "pending" }, this._resolve = void 0, this._reject = void 0;
  }
  get value() {
    return this.promise ? this.promise : (this.promise = new Promise((e, t) => {
      this.status.type === "resolved" ? e(this.status.value) : this.status.type === "rejected" && t(this.status.error), this._resolve = e, this._reject = t;
    }), this.promise);
  }
  resolve(e) {
    var t;
    this.status = { type: "resolved", value: e }, this.promise && ((t = this._resolve) == null || t.call(this, e));
  }
  reject(e) {
    var t;
    this.status = { type: "rejected", error: e }, this.promise && ((t = this._reject) == null || t.call(this, e));
  }
};
function aa() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function Pd() {
  let e = [], t = null, r = !1, n = aa();
  const a = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = aa(), await n.promise, a();
    try {
      const { value: s, done: o } = await e[0].read();
      o ? (e.shift(), e.length > 0 ? await a() : r && (t == null || t.close())) : t == null || t.enqueue(s);
    } catch (s) {
      t == null || t.error(s), e.shift(), r && e.length === 0 && (t == null || t.close());
    }
  };
  return {
    stream: new ReadableStream({
      start(s) {
        t = s;
      },
      pull: a,
      async cancel() {
        for (const s of e)
          await s.cancel();
        e = [], r = !0;
      }
    }),
    addStream: (s) => {
      if (r)
        throw new Error("Cannot add inner stream: outer stream is closed");
      e.push(s.getReader()), n.resolve();
    },
    /**
     * Gracefully close the outer stream. This will let the inner streams
     * finish processing and then close the outer stream.
     */
    close: () => {
      r = !0, n.resolve(), e.length === 0 && (t == null || t.close());
    },
    /**
     * Immediately close the outer stream. This will cancel all inner streams
     * and close the outer stream.
     */
    terminate: () => {
      r = !0, n.resolve(), e.forEach((s) => s.cancel()), e = [], t == null || t.close();
    }
  };
}
function Od() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
Ke({ prefix: "aiobj", size: 24 });
var Ws = "AI_NoOutputSpecifiedError", Gs = `vercel.ai.error.${Ws}`, jd = Symbol.for(Gs), Ys, Md = class extends R {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: Ws, message: e }), this[Ys] = !0;
  }
  static isInstance(e) {
    return R.hasMarker(e, Gs);
  }
};
Ys = jd;
var Ks = "AI_ToolExecutionError", Xs = `vercel.ai.error.${Ks}`, $d = Symbol.for(Xs), Qs, Dd = class extends R {
  constructor({
    toolArgs: e,
    toolName: t,
    toolCallId: r,
    cause: n,
    message: a = `Error executing tool ${t}: ${Ft(n)}`
  }) {
    super({ name: Ks, message: a, cause: n }), this[Qs] = !0, this.toolArgs = e, this.toolName = t, this.toolCallId = r;
  }
  static isInstance(e) {
    return R.hasMarker(e, Xs);
  }
};
Qs = $d;
function Zd(e) {
  return e != null && Object.keys(e).length > 0;
}
function Ud({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return Zd(e) ? {
    tools: (r != null ? Object.entries(e).filter(
      ([a]) => r.includes(a)
    ) : Object.entries(e)).map(([a, s]) => {
      const o = s.type;
      switch (o) {
        case void 0:
        case "function":
          return {
            type: "function",
            name: a,
            description: s.description,
            parameters: kr(s.parameters).jsonSchema
          };
        case "provider-defined":
          return {
            type: "provider-defined",
            name: a,
            id: s.id,
            args: s.args
          };
        default: {
          const l = o;
          throw new Error(`Unsupported tool type: ${l}`);
        }
      }
    }),
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
var Ld = /^([\s\S]*?)(\s+)(\S*)$/;
function qd(e) {
  const t = e.match(Ld);
  return t ? { prefix: t[1], whitespace: t[2], suffix: t[3] } : void 0;
}
var eo = "AI_InvalidToolArgumentsError", to = `vercel.ai.error.${eo}`, Fd = Symbol.for(to), ro, no = class extends R {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Ft(
      r
    )}`
  }) {
    super({ name: eo, message: n, cause: r }), this[ro] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return R.hasMarker(e, to);
  }
};
ro = Fd;
var ao = "AI_NoSuchToolError", so = `vercel.ai.error.${ao}`, Bd = Symbol.for(so), oo, ln = class extends R {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: ao, message: r }), this[oo] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return R.hasMarker(e, so);
  }
};
oo = Bd;
var io = "AI_ToolCallRepairError", lo = `vercel.ai.error.${io}`, Vd = Symbol.for(lo), uo, zd = class extends R {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${Ft(e)}`
  }) {
    super({ name: io, message: r, cause: e }), this[uo] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return R.hasMarker(e, lo);
  }
};
uo = Vd;
async function Jd({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: n,
  messages: a
}) {
  if (t == null)
    throw new ln({ toolName: e.toolName });
  try {
    return await sa({ toolCall: e, tools: t });
  } catch (s) {
    if (r == null || !(ln.isInstance(s) || no.isInstance(s)))
      throw s;
    let o = null;
    try {
      o = await r({
        toolCall: e,
        tools: t,
        parameterSchema: ({ toolName: l }) => kr(t[l].parameters).jsonSchema,
        system: n,
        messages: a,
        error: s
      });
    } catch (l) {
      throw new zd({
        cause: l,
        originalError: s
      });
    }
    if (o == null)
      throw s;
    return await sa({ toolCall: o, tools: t });
  }
}
async function sa({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, n = t[r];
  if (n == null)
    throw new ln({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = kr(n.parameters), s = e.args.trim() === "" ? Bt({ value: {}, schema: a }) : lt({ text: e.args, schema: a });
  if (s.success === !1)
    throw new no({
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
function oa({
  text: e = "",
  reasoning: t,
  tools: r,
  toolCalls: n,
  toolResults: a,
  messageId: s,
  generateMessageId: o
}) {
  const l = [];
  return l.push({
    role: "assistant",
    content: [
      ...t.map(
        (u) => u.type === "text" ? { ...u, type: "reasoning" } : { ...u, type: "redacted-reasoning" }
      ),
      { type: "text", text: e },
      ...n
    ],
    id: s
  }), a.length > 0 && l.push({
    role: "tool",
    id: o(),
    content: a.map((u) => {
      const c = r[u.toolName];
      return (c == null ? void 0 : c.experimental_toToolResultContent) != null ? {
        type: "tool-result",
        toolCallId: u.toolCallId,
        toolName: u.toolName,
        result: c.experimental_toToolResultContent(u.result),
        experimental_content: c.experimental_toToolResultContent(
          u.result
        )
      } : {
        type: "tool-result",
        toolCallId: u.toolCallId,
        toolName: u.toolName,
        result: u.result
      };
    })
  }), l;
}
function Hd(e) {
  const t = e.filter((r) => r.type === "text").map((r) => r.text).join("");
  return t.length > 0 ? t : void 0;
}
Ke({
  prefix: "aitxt",
  size: 24
});
Ke({
  prefix: "msg",
  size: 24
});
var Wd = {};
xn(Wd, {
  object: () => Xd,
  text: () => Kd
});
var co = "AI_InvalidStreamPartError", po = `vercel.ai.error.${co}`, Gd = Symbol.for(po), fo, Yd = class extends R {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: co, message: t }), this[fo] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return R.hasMarker(e, po);
  }
};
fo = Gd;
var Kd = () => ({
  type: "text",
  responseFormat: () => ({ type: "text" }),
  injectIntoSystemPrompt({ system: e }) {
    return e;
  },
  parsePartial({ text: e }) {
    return { partial: e };
  },
  parseOutput({ text: e }) {
    return e;
  }
}), Xd = ({
  schema: e
}) => {
  const t = kr(e);
  return {
    type: "object",
    responseFormat: ({ model: r }) => ({
      type: "json",
      schema: r.supportsStructuredOutputs ? t.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system: r, model: n }) {
      return n.supportsStructuredOutputs ? r : Nd({
        prompt: r,
        schema: t.jsonSchema
      });
    },
    parsePartial({ text: r }) {
      const n = ou(r);
      switch (n.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: n.value
          };
        default: {
          const a = n.state;
          throw new Error(`Unsupported parse state: ${a}`);
        }
      }
    },
    parseOutput({ text: r }, n) {
      const a = lt({ text: r });
      if (!a.success)
        throw new ra({
          message: "No object generated: could not parse the response.",
          cause: a.error,
          text: r,
          response: n.response,
          usage: n.usage
        });
      const s = Bt({
        value: a.value,
        schema: t
      });
      if (!s.success)
        throw new ra({
          message: "No object generated: response did not match schema.",
          cause: s.error,
          text: r,
          response: n.response,
          usage: n.usage
        });
      return s.value;
    }
  };
};
function Qd(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function kn(e, t) {
  const r = e.getReader(), n = t.getReader();
  let a, s, o = !1, l = !1;
  async function u(d) {
    try {
      a == null && (a = r.read());
      const f = await a;
      a = void 0, f.done ? d.close() : d.enqueue(f.value);
    } catch (f) {
      d.error(f);
    }
  }
  async function c(d) {
    try {
      s == null && (s = n.read());
      const f = await s;
      s = void 0, f.done ? d.close() : d.enqueue(f.value);
    } catch (f) {
      d.error(f);
    }
  }
  return new ReadableStream({
    async pull(d) {
      try {
        if (o) {
          await c(d);
          return;
        }
        if (l) {
          await u(d);
          return;
        }
        a == null && (a = r.read()), s == null && (s = n.read());
        const { result: f, reader: b } = await Promise.race([
          a.then((T) => ({ result: T, reader: r })),
          s.then((T) => ({ result: T, reader: n }))
        ]);
        f.done || d.enqueue(f.value), b === r ? (a = void 0, f.done && (await c(d), o = !0)) : (s = void 0, f.done && (l = !0, await u(d)));
      } catch (f) {
        d.error(f);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
function ep({
  tools: e,
  generatorStream: t,
  toolCallStreaming: r,
  tracer: n,
  telemetry: a,
  system: s,
  messages: o,
  abortSignal: l,
  repairToolCall: u
}) {
  let c = null;
  const d = new ReadableStream({
    start(v) {
      c = v;
    }
  }), f = {}, b = /* @__PURE__ */ new Set();
  let T = !1, h;
  function p() {
    T && b.size === 0 && (h != null && c.enqueue(h), c.close());
  }
  const m = new TransformStream({
    async transform(v, w) {
      const I = v.type;
      switch (I) {
        case "text-delta":
        case "reasoning":
        case "reasoning-signature":
        case "redacted-reasoning":
        case "source":
        case "response-metadata":
        case "error": {
          w.enqueue(v);
          break;
        }
        case "tool-call-delta": {
          r && (f[v.toolCallId] || (w.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: v.toolCallId,
            toolName: v.toolName
          }), f[v.toolCallId] = !0), w.enqueue({
            type: "tool-call-delta",
            toolCallId: v.toolCallId,
            toolName: v.toolName,
            argsTextDelta: v.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          try {
            const g = await Jd({
              toolCall: v,
              tools: e,
              repairToolCall: u,
              system: s,
              messages: o
            });
            w.enqueue(g);
            const E = e[g.toolName];
            if (E.execute != null) {
              const P = nt();
              b.add(P), sn({
                name: "ai.toolCall",
                attributes: ot({
                  telemetry: a,
                  attributes: {
                    ...an({
                      operationId: "ai.toolCall",
                      telemetry: a
                    }),
                    "ai.toolCall.name": g.toolName,
                    "ai.toolCall.id": g.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(g.args)
                    }
                  }
                }),
                tracer: n,
                fn: async (A) => E.execute(g.args, {
                  toolCallId: g.toolCallId,
                  messages: o,
                  abortSignal: l
                }).then(
                  (Z) => {
                    c.enqueue({
                      ...g,
                      type: "tool-result",
                      result: Z
                    }), b.delete(P), p();
                    try {
                      A.setAttributes(
                        ot({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(Z)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (Z) => {
                    c.enqueue({
                      type: "error",
                      error: new Dd({
                        toolCallId: g.toolCallId,
                        toolName: g.toolName,
                        toolArgs: g.args,
                        cause: Z
                      })
                    }), b.delete(P), p();
                  }
                )
              });
            }
          } catch (g) {
            c.enqueue({
              type: "error",
              error: g
            });
          }
          break;
        }
        case "finish": {
          h = {
            type: "finish",
            finishReason: v.finishReason,
            logprobs: v.logprobs,
            usage: Id(v.usage),
            experimental_providerMetadata: v.providerMetadata
          };
          break;
        }
        default: {
          const g = I;
          throw new Error(`Unhandled chunk type: ${g}`);
        }
      }
    },
    flush() {
      T = !0, p();
    }
  });
  return new ReadableStream({
    async start(v) {
      return Promise.all([
        t.pipeThrough(m).pipeTo(
          new WritableStream({
            write(w) {
              v.enqueue(w);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
          new WritableStream({
            write(w) {
              v.enqueue(w);
            },
            close() {
              v.close();
            }
          })
        )
      ]);
    }
  });
}
var tp = Ke({
  prefix: "aitxt",
  size: 24
}), rp = Ke({
  prefix: "msg",
  size: 24
});
function sf({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: s,
  maxRetries: o,
  abortSignal: l,
  headers: u,
  maxSteps: c = 1,
  experimental_generateMessageId: d = rp,
  experimental_output: f,
  experimental_continueSteps: b = !1,
  experimental_telemetry: T,
  experimental_providerMetadata: h,
  providerOptions: p = h,
  experimental_toolCallStreaming: m = !1,
  toolCallStreaming: v = m,
  experimental_activeTools: w,
  experimental_repairToolCall: I,
  experimental_transform: g,
  onChunk: E,
  onError: P,
  onFinish: A,
  onStepFinish: Z,
  _internal: {
    now: X = Od,
    generateId: oe = tp,
    currentDate: Ae = () => /* @__PURE__ */ new Date()
  } = {},
  ...ve
}) {
  return new ap({
    model: e,
    telemetry: T,
    headers: u,
    settings: ve,
    maxRetries: o,
    abortSignal: l,
    system: n,
    prompt: a,
    messages: s,
    tools: t,
    toolChoice: r,
    toolCallStreaming: v,
    transforms: Qd(g),
    activeTools: w,
    repairToolCall: I,
    maxSteps: c,
    output: f,
    continueSteps: b,
    providerOptions: p,
    onChunk: E,
    onError: P,
    onFinish: A,
    onStepFinish: Z,
    now: X,
    currentDate: Ae,
    generateId: oe,
    generateMessageId: d
  });
}
function np(e) {
  if (!e)
    return new TransformStream({
      transform(s, o) {
        o.enqueue({ part: s, partialOutput: void 0 });
      }
    });
  let t = "", r = "", n = "";
  function a({
    controller: s,
    partialOutput: o = void 0
  }) {
    s.enqueue({
      part: { type: "text-delta", textDelta: r },
      partialOutput: o
    }), r = "";
  }
  return new TransformStream({
    transform(s, o) {
      if (s.type === "step-finish" && a({ controller: o }), s.type !== "text-delta") {
        o.enqueue({ part: s, partialOutput: void 0 });
        return;
      }
      t += s.textDelta, r += s.textDelta;
      const l = e.parsePartial({ text: t });
      if (l != null) {
        const u = JSON.stringify(l.partial);
        u !== n && (a({ controller: o, partialOutput: l.partial }), n = u);
      }
    },
    flush(s) {
      r.length > 0 && a({ controller: s });
    }
  });
}
var ap = class {
  constructor({
    model: e,
    telemetry: t,
    headers: r,
    settings: n,
    maxRetries: a,
    abortSignal: s,
    system: o,
    prompt: l,
    messages: u,
    tools: c,
    toolChoice: d,
    toolCallStreaming: f,
    transforms: b,
    activeTools: T,
    repairToolCall: h,
    maxSteps: p,
    output: m,
    continueSteps: v,
    providerOptions: w,
    now: I,
    currentDate: g,
    generateId: E,
    generateMessageId: P,
    onChunk: A,
    onError: Z,
    onFinish: X,
    onStepFinish: oe
  }) {
    this.warningsPromise = new re(), this.usagePromise = new re(), this.finishReasonPromise = new re(), this.providerMetadataPromise = new re(), this.textPromise = new re(), this.reasoningPromise = new re(), this.reasoningDetailsPromise = new re(), this.sourcesPromise = new re(), this.toolCallsPromise = new re(), this.toolResultsPromise = new re(), this.requestPromise = new re(), this.responsePromise = new re(), this.stepsPromise = new re();
    var Ae;
    if (p < 1)
      throw new pe({
        parameter: "maxSteps",
        value: p,
        message: "maxSteps must be at least 1"
      });
    this.output = m;
    let ve = "", _e = "", ee = "";
    const ie = [];
    let le, et = [];
    const J = [], Q = {
      id: E(),
      timestamp: g(),
      modelId: e.modelId,
      messages: []
    };
    let q = [], U = [], Ir, Er, En = "initial";
    const Ue = [];
    let Cr;
    const yo = new TransformStream({
      async transform(be, we) {
        we.enqueue(be);
        const { part: k } = be;
        if ((k.type === "text-delta" || k.type === "reasoning" || k.type === "source" || k.type === "tool-call" || k.type === "tool-result" || k.type === "tool-call-streaming-start" || k.type === "tool-call-delta") && await (A == null ? void 0 : A({ chunk: k })), k.type === "error" && await (Z == null ? void 0 : Z({ error: k.error })), k.type === "text-delta" && (ve += k.textDelta, _e += k.textDelta, ee += k.textDelta), k.type === "reasoning" && (le == null ? (le = { type: "text", text: k.textDelta }, ie.push(le)) : le.text += k.textDelta), k.type === "reasoning-signature") {
          if (le == null)
            throw new R({
              name: "InvalidStreamPart",
              message: "reasoning-signature without reasoning"
            });
          le.signature = k.signature, le = void 0;
        }
        if (k.type === "redacted-reasoning" && ie.push({ type: "redacted", data: k.data }), k.type === "source" && (J.push(k.source), et.push(k.source)), k.type === "tool-call" && q.push(k), k.type === "tool-result" && U.push(k), k.type === "step-finish") {
          const te = oa({
            text: _e,
            reasoning: ie,
            tools: c ?? {},
            toolCalls: q,
            toolResults: U,
            messageId: k.messageId,
            generateMessageId: P
          }), Oe = Ue.length;
          let se = "done";
          Oe + 1 < p && (v && k.finishReason === "length" && // only use continue when there are no tool calls:
          q.length === 0 ? se = "continue" : (
            // there are tool calls:
            q.length > 0 && // all current tool calls have results:
            U.length === q.length && (se = "tool-result")
          ));
          const Wt = {
            stepType: En,
            text: ve,
            reasoning: Hd(ie),
            reasoningDetails: ie,
            sources: et,
            toolCalls: q,
            toolResults: U,
            finishReason: k.finishReason,
            usage: k.usage,
            warnings: k.warnings,
            logprobs: k.logprobs,
            request: k.request,
            response: {
              ...k.response,
              messages: [...Q.messages, ...te]
            },
            providerMetadata: k.experimental_providerMetadata,
            experimental_providerMetadata: k.experimental_providerMetadata,
            isContinued: k.isContinued
          };
          await (oe == null ? void 0 : oe(Wt)), Ue.push(Wt), q = [], U = [], ve = "", et = [], se !== "done" && (En = se), se !== "continue" && (Q.messages.push(...te), _e = "");
        }
        k.type === "finish" && (Q.id = k.response.id, Q.timestamp = k.response.timestamp, Q.modelId = k.response.modelId, Q.headers = k.response.headers, Er = k.usage, Ir = k.finishReason);
      },
      async flush(be) {
        var we;
        try {
          if (Ue.length === 0)
            return;
          const k = Ue[Ue.length - 1];
          H.warningsPromise.resolve(k.warnings), H.requestPromise.resolve(k.request), H.responsePromise.resolve(k.response), H.toolCallsPromise.resolve(k.toolCalls), H.toolResultsPromise.resolve(k.toolResults), H.providerMetadataPromise.resolve(
            k.experimental_providerMetadata
          ), H.reasoningPromise.resolve(k.reasoning), H.reasoningDetailsPromise.resolve(k.reasoningDetails);
          const te = Ir ?? "unknown", Oe = Er ?? {
            completionTokens: NaN,
            promptTokens: NaN,
            totalTokens: NaN
          };
          H.finishReasonPromise.resolve(te), H.usagePromise.resolve(Oe), H.textPromise.resolve(ee), H.sourcesPromise.resolve(J), H.stepsPromise.resolve(Ue), await (X == null ? void 0 : X({
            finishReason: te,
            logprobs: void 0,
            usage: Oe,
            text: ee,
            reasoning: k.reasoning,
            reasoningDetails: k.reasoningDetails,
            sources: k.sources,
            toolCalls: k.toolCalls,
            toolResults: k.toolResults,
            request: (we = k.request) != null ? we : {},
            response: k.response,
            warnings: k.warnings,
            providerMetadata: k.providerMetadata,
            experimental_providerMetadata: k.experimental_providerMetadata,
            steps: Ue
          })), Cr.setAttributes(
            ot({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": te,
                "ai.response.text": { output: () => ee },
                "ai.response.toolCalls": {
                  output: () => {
                    var se;
                    return (se = k.toolCalls) != null && se.length ? JSON.stringify(k.toolCalls) : void 0;
                  }
                },
                "ai.usage.promptTokens": Oe.promptTokens,
                "ai.usage.completionTokens": Oe.completionTokens
              }
            })
          );
        } catch (k) {
          be.error(k);
        } finally {
          Cr.end();
        }
      }
    }), Ht = Pd();
    this.addStream = Ht.addStream, this.closeStream = Ht.close;
    let Ar = Ht.stream;
    for (const be of b)
      Ar = Ar.pipeThrough(
        be({
          tools: c,
          stopStream() {
            Ht.terminate();
          }
        })
      );
    this.baseStream = Ar.pipeThrough(np(m)).pipeThrough(yo);
    const { maxRetries: vo, retry: _o } = qc({
      maxRetries: a
    }), Rr = zc(t), Cn = Fc({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...n, maxRetries: vo }
    }), Nr = Sd({
      prompt: {
        system: (Ae = m == null ? void 0 : m.injectIntoSystemPrompt({ system: o, model: e })) != null ? Ae : o,
        prompt: l,
        messages: u
      },
      tools: c
    }), H = this;
    sn({
      name: "ai.streamText",
      attributes: ot({
        telemetry: t,
        attributes: {
          ...an({ operationId: "ai.streamText", telemetry: t }),
          ...Cn,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: l, messages: u })
          },
          "ai.settings.maxSteps": p
        }
      }),
      tracer: Rr,
      endWhenDone: !1,
      fn: async (be) => {
        Cr = be;
        async function we({
          currentStep: k,
          responseMessages: te,
          usage: Oe,
          stepType: se,
          previousStepText: Wt,
          hasLeadingWhitespace: bo,
          messageId: Gt
        }) {
          var An;
          const Pr = te.length === 0 ? Nr.type : "messages", Rn = [
            ...Nr.messages,
            ...te
          ], Nn = await nd({
            prompt: {
              type: Pr,
              system: Nr.system,
              messages: Rn
            },
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: (An = e.supportsUrl) == null ? void 0 : An.bind(e)
            // support 'this' context
          }), Yt = {
            type: "regular",
            ...Ud({ tools: c, toolChoice: d, activeTools: T })
          }, {
            result: { stream: wo, warnings: Or, rawResponse: Kt, request: Pn },
            doStreamSpan: tt,
            startTimestampMs: On
          } = await _o(
            () => sn({
              name: "ai.streamText.doStream",
              attributes: ot({
                telemetry: t,
                attributes: {
                  ...an({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...Cn,
                  "ai.prompt.format": {
                    input: () => Pr
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(Nn)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var M;
                      return (M = Yt.tools) == null ? void 0 : M.map((z) => JSON.stringify(z));
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => Yt.toolChoice != null ? JSON.stringify(Yt.toolChoice) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": e.provider,
                  "gen_ai.request.model": e.modelId,
                  "gen_ai.request.frequency_penalty": n.frequencyPenalty,
                  "gen_ai.request.max_tokens": n.maxTokens,
                  "gen_ai.request.presence_penalty": n.presencePenalty,
                  "gen_ai.request.stop_sequences": n.stopSequences,
                  "gen_ai.request.temperature": n.temperature,
                  "gen_ai.request.top_k": n.topK,
                  "gen_ai.request.top_p": n.topP
                }
              }),
              tracer: Rr,
              endWhenDone: !1,
              fn: async (M) => ({
                startTimestampMs: I(),
                // get before the call
                doStreamSpan: M,
                result: await e.doStream({
                  mode: Yt,
                  ...id(n),
                  inputFormat: Pr,
                  responseFormat: m == null ? void 0 : m.responseFormat({ model: e }),
                  prompt: Nn,
                  providerMetadata: w,
                  abortSignal: s,
                  headers: r
                })
              })
            })
          ), xo = ep({
            tools: c,
            generatorStream: wo,
            toolCallStreaming: f,
            tracer: Rr,
            telemetry: t,
            system: o,
            messages: Rn,
            repairToolCall: h,
            abortSignal: s
          }), jn = Pn ?? {}, Le = [], jr = [], Mr = [];
          let qe, Fe = "unknown", je = {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          }, mt, Mn = !0, ht = "", $n = se === "continue" ? Wt : "", $r, ue = {
            id: E(),
            timestamp: g(),
            modelId: e.modelId
          }, rt = "", Dn = !1, Zn = !0, Un = !1;
          async function Dr({
            controller: M,
            chunk: z
          }) {
            M.enqueue(z), ht += z.textDelta, $n += z.textDelta, Dn = !0, Un = z.textDelta.trimEnd() !== z.textDelta;
          }
          H.addStream(
            xo.pipeThrough(
              new TransformStream({
                async transform(M, z) {
                  var xe, gt, Be;
                  if (Mn) {
                    const ke = I() - On;
                    Mn = !1, tt.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": ke
                    }), tt.setAttributes({
                      "ai.response.msToFirstChunk": ke
                    }), z.enqueue({
                      type: "step-start",
                      messageId: Gt,
                      request: jn,
                      warnings: Or ?? []
                    });
                  }
                  if (M.type === "text-delta" && M.textDelta.length === 0)
                    return;
                  const Ln = M.type;
                  switch (Ln) {
                    case "text-delta": {
                      if (v) {
                        const ke = Zn && bo ? M.textDelta.trimStart() : M.textDelta;
                        if (ke.length === 0)
                          break;
                        Zn = !1, rt += ke;
                        const Xt = qd(rt);
                        Xt != null && (rt = Xt.suffix, await Dr({
                          controller: z,
                          chunk: {
                            type: "text-delta",
                            textDelta: Xt.prefix + Xt.whitespace
                          }
                        }));
                      } else
                        await Dr({ controller: z, chunk: M });
                      break;
                    }
                    case "reasoning": {
                      z.enqueue(M), qe == null ? (qe = {
                        type: "text",
                        text: M.textDelta
                      }, Mr.push(qe)) : qe.text += M.textDelta;
                      break;
                    }
                    case "reasoning-signature": {
                      if (z.enqueue(M), qe == null)
                        throw new Yd({
                          chunk: M,
                          message: "reasoning-signature without reasoning"
                        });
                      qe.signature = M.signature, qe = void 0;
                      break;
                    }
                    case "redacted-reasoning": {
                      z.enqueue(M), Mr.push({
                        type: "redacted",
                        data: M.data
                      });
                      break;
                    }
                    case "tool-call": {
                      z.enqueue(M), Le.push(M);
                      break;
                    }
                    case "tool-result": {
                      z.enqueue(M), jr.push(M);
                      break;
                    }
                    case "response-metadata": {
                      ue = {
                        id: (xe = M.id) != null ? xe : ue.id,
                        timestamp: (gt = M.timestamp) != null ? gt : ue.timestamp,
                        modelId: (Be = M.modelId) != null ? Be : ue.modelId
                      };
                      break;
                    }
                    case "finish": {
                      je = M.usage, Fe = M.finishReason, mt = M.experimental_providerMetadata, $r = M.logprobs;
                      const ke = I() - On;
                      tt.addEvent("ai.stream.finish"), tt.setAttributes({
                        "ai.response.msToFinish": ke,
                        "ai.response.avgCompletionTokensPerSecond": 1e3 * je.completionTokens / ke
                      });
                      break;
                    }
                    case "source":
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      z.enqueue(M);
                      break;
                    }
                    case "error": {
                      z.enqueue(M), Fe = "error";
                      break;
                    }
                    default: {
                      const ke = Ln;
                      throw new Error(`Unknown chunk type: ${ke}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(M) {
                  const z = Le.length > 0 ? JSON.stringify(Le) : void 0;
                  let xe = "done";
                  k + 1 < p && (v && Fe === "length" && // only use continue when there are no tool calls:
                  Le.length === 0 ? xe = "continue" : (
                    // there are tool calls:
                    Le.length > 0 && // all current tool calls have results:
                    jr.length === Le.length && (xe = "tool-result")
                  )), v && rt.length > 0 && (xe !== "continue" || // when the next step is a regular step, publish the buffer
                  se === "continue" && !Dn) && (await Dr({
                    controller: M,
                    chunk: {
                      type: "text-delta",
                      textDelta: rt
                    }
                  }), rt = "");
                  try {
                    tt.setAttributes(
                      ot({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Fe,
                          "ai.response.text": { output: () => ht },
                          "ai.response.toolCalls": {
                            output: () => z
                          },
                          "ai.response.id": ue.id,
                          "ai.response.model": ue.modelId,
                          "ai.response.timestamp": ue.timestamp.toISOString(),
                          "ai.usage.promptTokens": je.promptTokens,
                          "ai.usage.completionTokens": je.completionTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [Fe],
                          "gen_ai.response.id": ue.id,
                          "gen_ai.response.model": ue.modelId,
                          "gen_ai.usage.input_tokens": je.promptTokens,
                          "gen_ai.usage.output_tokens": je.completionTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    tt.end();
                  }
                  M.enqueue({
                    type: "step-finish",
                    finishReason: Fe,
                    usage: je,
                    providerMetadata: mt,
                    experimental_providerMetadata: mt,
                    logprobs: $r,
                    request: jn,
                    response: {
                      ...ue,
                      headers: Kt == null ? void 0 : Kt.headers
                    },
                    warnings: Or,
                    isContinued: xe === "continue",
                    messageId: Gt
                  });
                  const gt = Ed(Oe, je);
                  if (xe === "done")
                    M.enqueue({
                      type: "finish",
                      finishReason: Fe,
                      usage: gt,
                      providerMetadata: mt,
                      experimental_providerMetadata: mt,
                      logprobs: $r,
                      response: {
                        ...ue,
                        headers: Kt == null ? void 0 : Kt.headers
                      }
                    }), H.closeStream();
                  else {
                    if (se === "continue") {
                      const Be = te[te.length - 1];
                      typeof Be.content == "string" ? Be.content += ht : Be.content.push({
                        text: ht,
                        type: "text"
                      });
                    } else
                      te.push(
                        ...oa({
                          text: ht,
                          reasoning: Mr,
                          tools: c ?? {},
                          toolCalls: Le,
                          toolResults: jr,
                          messageId: Gt,
                          generateMessageId: P
                        })
                      );
                    await we({
                      currentStep: k + 1,
                      responseMessages: te,
                      usage: gt,
                      stepType: xe,
                      previousStepText: $n,
                      hasLeadingWhitespace: Un,
                      messageId: (
                        // keep the same id when continuing a step:
                        xe === "continue" ? Gt : P()
                      )
                    });
                  }
                }
              })
            )
          );
        }
        await we({
          currentStep: 0,
          responseMessages: [],
          usage: {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          },
          previousStepText: "",
          stepType: "initial",
          hasLeadingWhitespace: !1,
          messageId: P()
        });
      }
    }).catch((be) => {
      H.addStream(
        new ReadableStream({
          start(we) {
            we.enqueue({ type: "error", error: be }), we.close();
          }
        })
      ), H.closeStream();
    });
  }
  get warnings() {
    return this.warningsPromise.value;
  }
  get usage() {
    return this.usagePromise.value;
  }
  get finishReason() {
    return this.finishReasonPromise.value;
  }
  get experimental_providerMetadata() {
    return this.providerMetadataPromise.value;
  }
  get providerMetadata() {
    return this.providerMetadataPromise.value;
  }
  get text() {
    return this.textPromise.value;
  }
  get reasoning() {
    return this.reasoningPromise.value;
  }
  get reasoningDetails() {
    return this.reasoningDetailsPromise.value;
  }
  get sources() {
    return this.sourcesPromise.value;
  }
  get toolCalls() {
    return this.toolCallsPromise.value;
  }
  get toolResults() {
    return this.toolResultsPromise.value;
  }
  get request() {
    return this.requestPromise.value;
  }
  get response() {
    return this.responsePromise.value;
  }
  get steps() {
    return this.stepsPromise.value;
  }
  /**
  Split out a new stream from the original stream.
  The original stream is replaced to allow for further splitting,
  since we do not know how many times the stream will be split.
  
  Note: this leads to buffering the stream content on the server.
  However, the LLM results are expected to be small enough to not cause issues.
     */
  teeStream() {
    const [e, t] = this.baseStream.tee();
    return this.baseStream = t, e;
  }
  get textStream() {
    return Yr(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part: e }, t) {
            e.type === "text-delta" && t.enqueue(e.textDelta);
          }
        })
      )
    );
  }
  get fullStream() {
    return Yr(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part: e }, t) {
            t.enqueue(e);
          }
        })
      )
    );
  }
  async consumeStream() {
    const e = this.fullStream;
    for await (const t of e)
      ;
  }
  get experimental_partialOutputStream() {
    if (this.output == null)
      throw new Md();
    return Yr(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ partialOutput: e }, t) {
            e != null && t.enqueue(e);
          }
        })
      )
    );
  }
  toDataStreamInternal({
    getErrorMessage: e = () => "An error occurred.",
    // mask error messages for safety by default
    sendUsage: t = !0,
    sendReasoning: r = !1,
    sendSources: n = !1
  }) {
    return this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (a, s) => {
          const o = a.type;
          switch (o) {
            case "text-delta": {
              s.enqueue(Y("text", a.textDelta));
              break;
            }
            case "reasoning": {
              r && s.enqueue(
                Y("reasoning", a.textDelta)
              );
              break;
            }
            case "redacted-reasoning": {
              r && s.enqueue(
                Y("redacted_reasoning", {
                  data: a.data
                })
              );
              break;
            }
            case "reasoning-signature": {
              r && s.enqueue(
                Y("reasoning_signature", {
                  signature: a.signature
                })
              );
              break;
            }
            case "source": {
              n && s.enqueue(
                Y("source", a.source)
              );
              break;
            }
            case "tool-call-streaming-start": {
              s.enqueue(
                Y("tool_call_streaming_start", {
                  toolCallId: a.toolCallId,
                  toolName: a.toolName
                })
              );
              break;
            }
            case "tool-call-delta": {
              s.enqueue(
                Y("tool_call_delta", {
                  toolCallId: a.toolCallId,
                  argsTextDelta: a.argsTextDelta
                })
              );
              break;
            }
            case "tool-call": {
              s.enqueue(
                Y("tool_call", {
                  toolCallId: a.toolCallId,
                  toolName: a.toolName,
                  args: a.args
                })
              );
              break;
            }
            case "tool-result": {
              s.enqueue(
                Y("tool_result", {
                  toolCallId: a.toolCallId,
                  result: a.result
                })
              );
              break;
            }
            case "error": {
              s.enqueue(
                Y("error", e(a.error))
              );
              break;
            }
            case "step-start": {
              s.enqueue(
                Y("start_step", {
                  messageId: a.messageId
                })
              );
              break;
            }
            case "step-finish": {
              s.enqueue(
                Y("finish_step", {
                  finishReason: a.finishReason,
                  usage: t ? {
                    promptTokens: a.usage.promptTokens,
                    completionTokens: a.usage.completionTokens
                  } : void 0,
                  isContinued: a.isContinued
                })
              );
              break;
            }
            case "finish": {
              s.enqueue(
                Y("finish_message", {
                  finishReason: a.finishReason,
                  usage: t ? {
                    promptTokens: a.usage.promptTokens,
                    completionTokens: a.usage.completionTokens
                  } : void 0
                })
              );
              break;
            }
            default: {
              const l = o;
              throw new Error(`Unknown chunk type: ${l}`);
            }
          }
        }
      })
    );
  }
  pipeDataStreamToResponse(e, {
    status: t,
    statusText: r,
    headers: n,
    data: a,
    getErrorMessage: s,
    sendUsage: o,
    sendReasoning: l,
    sendSources: u
  } = {}) {
    ea({
      response: e,
      status: t,
      statusText: r,
      headers: Qn(n, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({
        data: a,
        getErrorMessage: s,
        sendUsage: o,
        sendReasoning: l,
        sendSources: u
      })
    });
  }
  pipeTextStreamToResponse(e, t) {
    ea({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: Qn(t == null ? void 0 : t.headers, {
        contentType: "text/plain; charset=utf-8"
      }),
      stream: this.textStream.pipeThrough(new TextEncoderStream())
    });
  }
  // TODO breaking change 5.0: remove pipeThrough(new TextEncoderStream())
  toDataStream(e) {
    const t = this.toDataStreamInternal({
      getErrorMessage: e == null ? void 0 : e.getErrorMessage,
      sendUsage: e == null ? void 0 : e.sendUsage,
      sendReasoning: e == null ? void 0 : e.sendReasoning,
      sendSources: e == null ? void 0 : e.sendSources
    }).pipeThrough(new TextEncoderStream());
    return e != null && e.data ? kn(e == null ? void 0 : e.data.stream, t) : t;
  }
  mergeIntoDataStream(e, t) {
    e.merge(
      this.toDataStreamInternal({
        getErrorMessage: e.onError,
        sendUsage: t == null ? void 0 : t.sendUsage,
        sendReasoning: t == null ? void 0 : t.sendReasoning,
        sendSources: t == null ? void 0 : t.sendSources
      })
    );
  }
  toDataStreamResponse({
    headers: e,
    status: t,
    statusText: r,
    data: n,
    getErrorMessage: a,
    sendUsage: s,
    sendReasoning: o,
    sendSources: l
  } = {}) {
    return new Response(
      this.toDataStream({
        data: n,
        getErrorMessage: a,
        sendUsage: s,
        sendReasoning: o,
        sendSources: l
      }),
      {
        status: t,
        statusText: r,
        headers: hr(e, {
          contentType: "text/plain; charset=utf-8",
          dataStreamVersion: "v1"
        })
      }
    );
  }
  toTextStreamResponse(e) {
    var t;
    return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: hr(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, sp = {};
xn(sp, {
  mergeIntoDataStream: () => lp,
  toDataStream: () => op,
  toDataStreamResponse: () => ip
});
function mo(e = {}) {
  const t = new TextEncoder();
  let r = "";
  return new TransformStream({
    async start() {
      e.onStart && await e.onStart();
    },
    async transform(n, a) {
      a.enqueue(t.encode(n)), r += n, e.onToken && await e.onToken(n), e.onText && typeof n == "string" && await e.onText(n);
    },
    async flush() {
      e.onCompletion && await e.onCompletion(r), e.onFinal && await e.onFinal(r);
    }
  });
}
function Tn(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        var a;
        if (typeof r == "string") {
          n.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && ia(
            (a = r.data) == null ? void 0 : a.chunk,
            n
          );
          return;
        }
        ia(r, n);
      }
    })
  ).pipeThrough(mo(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        n.enqueue(Y("text", r));
      }
    })
  );
}
function op(e, t) {
  return Tn(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function ip(e, t) {
  var r;
  const n = Tn(
    e,
    t == null ? void 0 : t.callbacks
  ).pipeThrough(new TextEncoderStream()), a = t == null ? void 0 : t.data, s = t == null ? void 0 : t.init, o = a ? kn(a.stream, n) : n;
  return new Response(o, {
    status: (r = s == null ? void 0 : s.status) != null ? r : 200,
    statusText: s == null ? void 0 : s.statusText,
    headers: hr(s == null ? void 0 : s.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function lp(e, t) {
  t.dataStream.merge(Tn(e, t.callbacks));
}
function ia(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const n of r)
      n.type === "text" && t.enqueue(n.text);
  }
}
var up = {};
xn(up, {
  mergeIntoDataStream: () => pp,
  toDataStream: () => cp,
  toDataStreamResponse: () => dp
});
function Sn(e, t) {
  const r = fp();
  return Go(e[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(n, a) {
        a.enqueue(r(n.delta));
      }
    })
  ).pipeThrough(mo(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (n, a) => {
        a.enqueue(Y("text", n));
      }
    })
  );
}
function cp(e, t) {
  return Sn(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function dp(e, t = {}) {
  var r;
  const { init: n, data: a, callbacks: s } = t, o = Sn(e, s).pipeThrough(
    new TextEncoderStream()
  ), l = a ? kn(a.stream, o) : o;
  return new Response(l, {
    status: (r = n == null ? void 0 : n.status) != null ? r : 200,
    statusText: n == null ? void 0 : n.statusText,
    headers: hr(n == null ? void 0 : n.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function pp(e, t) {
  t.dataStream.merge(Sn(e, t.callbacks));
}
function fp() {
  let e = !0;
  return (t) => (e && (t = t.trimStart(), t && (e = !1)), t);
}
var mp = i.object({
  type: i.literal("error"),
  error: i.object({
    type: i.string(),
    message: i.string()
  })
}), la = mn({
  errorSchema: mp,
  errorToMessage: (e) => e.error.message
});
function hp(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0, n = [], a = /* @__PURE__ */ new Set();
  if (r == null)
    return { tools: void 0, tool_choice: void 0, toolWarnings: n, betas: a };
  const s = [];
  for (const u of r)
    switch (u.type) {
      case "function":
        s.push({
          name: u.name,
          description: u.description,
          input_schema: u.parameters
        });
        break;
      case "provider-defined":
        switch (u.id) {
          case "anthropic.computer_20250124":
            a.add("computer-use-2025-01-24"), s.push({
              name: u.name,
              type: "computer_20250124",
              display_width_px: u.args.displayWidthPx,
              display_height_px: u.args.displayHeightPx,
              display_number: u.args.displayNumber
            });
            break;
          case "anthropic.computer_20241022":
            a.add("computer-use-2024-10-22"), s.push({
              name: u.name,
              type: "computer_20241022",
              display_width_px: u.args.displayWidthPx,
              display_height_px: u.args.displayHeightPx,
              display_number: u.args.displayNumber
            });
            break;
          case "anthropic.text_editor_20241022":
            a.add("computer-use-2024-10-22"), s.push({
              name: u.name,
              type: "text_editor_20241022"
            });
            break;
          case "anthropic.bash_20241022":
            a.add("computer-use-2024-10-22"), s.push({
              name: u.name,
              type: "bash_20241022"
            });
            break;
          default:
            n.push({ type: "unsupported-tool", tool: u });
            break;
        }
        break;
      default:
        n.push({ type: "unsupported-tool", tool: u });
        break;
    }
  const o = e.toolChoice;
  if (o == null)
    return {
      tools: s,
      tool_choice: void 0,
      toolWarnings: n,
      betas: a
    };
  const l = o.type;
  switch (l) {
    case "auto":
      return {
        tools: s,
        tool_choice: { type: "auto" },
        toolWarnings: n,
        betas: a
      };
    case "required":
      return {
        tools: s,
        tool_choice: { type: "any" },
        toolWarnings: n,
        betas: a
      };
    case "none":
      return { tools: void 0, tool_choice: void 0, toolWarnings: n, betas: a };
    case "tool":
      return {
        tools: s,
        tool_choice: { type: "tool", name: o.toolName },
        toolWarnings: n,
        betas: a
      };
    default: {
      const u = l;
      throw new B({
        functionality: `Unsupported tool choice type: ${u}`
      });
    }
  }
}
function gp({
  prompt: e
}) {
  var t, r, n, a;
  const s = /* @__PURE__ */ new Set(), o = yp(e);
  let l;
  const u = [];
  function c(d) {
    var f;
    const b = d == null ? void 0 : d.anthropic;
    return (f = b == null ? void 0 : b.cacheControl) != null ? f : b == null ? void 0 : b.cache_control;
  }
  for (let d = 0; d < o.length; d++) {
    const f = o[d], b = d === o.length - 1, T = f.type;
    switch (T) {
      case "system": {
        if (l != null)
          throw new B({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        l = f.messages.map(({ content: h, providerMetadata: p }) => ({
          type: "text",
          text: h,
          cache_control: c(p)
        }));
        break;
      }
      case "user": {
        const h = [];
        for (const p of f.messages) {
          const { role: m, content: v } = p;
          switch (m) {
            case "user": {
              for (let w = 0; w < v.length; w++) {
                const I = v[w], g = w === v.length - 1, E = (t = c(I.providerMetadata)) != null ? t : g ? c(p.providerMetadata) : void 0;
                switch (I.type) {
                  case "text": {
                    h.push({
                      type: "text",
                      text: I.text,
                      cache_control: E
                    });
                    break;
                  }
                  case "image": {
                    if (I.image instanceof URL)
                      throw new B({
                        functionality: "Image URLs in user messages"
                      });
                    h.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: (r = I.mimeType) != null ? r : "image/jpeg",
                        data: wt(I.image)
                      },
                      cache_control: E
                    });
                    break;
                  }
                  case "file": {
                    if (I.data instanceof URL)
                      throw new B({
                        functionality: "Image URLs in user messages"
                      });
                    if (I.mimeType !== "application/pdf")
                      throw new B({
                        functionality: "Non-PDF files in user messages"
                      });
                    s.add("pdfs-2024-09-25"), h.push({
                      type: "document",
                      source: {
                        type: "base64",
                        media_type: "application/pdf",
                        data: I.data
                      },
                      cache_control: E
                    });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let w = 0; w < v.length; w++) {
                const I = v[w], g = w === v.length - 1, E = (n = c(I.providerMetadata)) != null ? n : g ? c(p.providerMetadata) : void 0, P = I.content != null ? I.content.map((A) => {
                  var Z;
                  switch (A.type) {
                    case "text":
                      return {
                        type: "text",
                        text: A.text,
                        cache_control: void 0
                      };
                    case "image":
                      return {
                        type: "image",
                        source: {
                          type: "base64",
                          media_type: (Z = A.mimeType) != null ? Z : "image/jpeg",
                          data: A.data
                        },
                        cache_control: void 0
                      };
                  }
                }) : JSON.stringify(I.result);
                h.push({
                  type: "tool_result",
                  tool_use_id: I.toolCallId,
                  content: P,
                  is_error: I.isError,
                  cache_control: E
                });
              }
              break;
            }
            default: {
              const w = m;
              throw new Error(`Unsupported role: ${w}`);
            }
          }
        }
        u.push({ role: "user", content: h });
        break;
      }
      case "assistant": {
        const h = [];
        for (let p = 0; p < f.messages.length; p++) {
          const m = f.messages[p], v = p === f.messages.length - 1, { content: w } = m;
          for (let I = 0; I < w.length; I++) {
            const g = w[I], E = I === w.length - 1, P = (a = c(g.providerMetadata)) != null ? a : E ? c(m.providerMetadata) : void 0;
            switch (g.type) {
              case "text": {
                h.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    b && v && E ? g.text.trim() : g.text
                  ),
                  cache_control: P
                });
                break;
              }
              case "reasoning": {
                h.push({
                  type: "thinking",
                  thinking: g.text,
                  signature: g.signature,
                  cache_control: P
                });
                break;
              }
              case "redacted-reasoning": {
                h.push({
                  type: "redacted_thinking",
                  data: g.data,
                  cache_control: P
                });
                break;
              }
              case "tool-call": {
                h.push({
                  type: "tool_use",
                  id: g.toolCallId,
                  name: g.toolName,
                  input: g.args,
                  cache_control: P
                });
                break;
              }
              default: {
                const A = g;
                throw new Error(`Unsupported part: ${A}`);
              }
            }
          }
        }
        u.push({ role: "assistant", content: h });
        break;
      }
      default: {
        const h = T;
        throw new Error(`Unsupported type: ${h}`);
      }
    }
  }
  return {
    prompt: { system: l, messages: u },
    betas: s
  };
}
function yp(e) {
  const t = [];
  let r;
  for (const n of e) {
    const { role: a } = n;
    switch (a) {
      case "system": {
        (r == null ? void 0 : r.type) !== "system" && (r = { type: "system", messages: [] }, t.push(r)), r.messages.push(n);
        break;
      }
      case "assistant": {
        (r == null ? void 0 : r.type) !== "assistant" && (r = { type: "assistant", messages: [] }, t.push(r)), r.messages.push(n);
        break;
      }
      case "user": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push(n);
        break;
      }
      case "tool": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push(n);
        break;
      }
      default: {
        const s = a;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  }
  return t;
}
function ua(e) {
  switch (e) {
    case "end_turn":
    case "stop_sequence":
      return "stop";
    case "tool_use":
      return "tool-calls";
    case "max_tokens":
      return "length";
    default:
      return "unknown";
  }
}
var vp = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "tool", this.supportsImageUrls = !1, this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    mode: e,
    prompt: t,
    maxTokens: r = 4096,
    // 4096: max model output tokens TODO update default in v5
    temperature: n,
    topP: a,
    topK: s,
    frequencyPenalty: o,
    presencePenalty: l,
    stopSequences: u,
    responseFormat: c,
    seed: d,
    providerMetadata: f
  }) {
    var b, T, h;
    const p = e.type, m = [];
    o != null && m.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), l != null && m.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), d != null && m.push({
      type: "unsupported-setting",
      setting: "seed"
    }), c != null && c.type !== "text" && m.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: v, betas: w } = gp({
      prompt: t
    }), I = wp.safeParse(
      (b = f == null ? void 0 : f.anthropic) == null ? void 0 : b.thinking
    );
    if (!I.success)
      throw new Ca({
        argument: "providerOptions.anthropic.thinking",
        message: "invalid thinking options",
        cause: I.error
      });
    const g = ((T = I.data) == null ? void 0 : T.type) === "enabled", E = (h = I.data) == null ? void 0 : h.budgetTokens, P = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: r,
      temperature: n,
      top_k: s,
      top_p: a,
      stop_sequences: u,
      // provider specific settings:
      ...g && {
        thinking: { type: "enabled", budget_tokens: E }
      },
      // prompt:
      system: v.system,
      messages: v.messages
    };
    if (g) {
      if (E == null)
        throw new B({
          functionality: "thinking requires a budget"
        });
      P.temperature != null && (P.temperature = void 0, m.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), s != null && (P.top_k = void 0, m.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), a != null && (P.top_p = void 0, m.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), P.max_tokens = r + E;
    }
    switch (p) {
      case "regular": {
        const {
          tools: A,
          tool_choice: Z,
          toolWarnings: X,
          betas: oe
        } = hp(e);
        return {
          args: { ...P, tools: A, tool_choice: Z },
          warnings: [...m, ...X],
          betas: /* @__PURE__ */ new Set([...w, ...oe])
        };
      }
      case "object-json":
        throw new B({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: A, description: Z, parameters: X } = e.tool;
        return {
          args: {
            ...P,
            tools: [{ name: A, description: Z, input_schema: X }],
            tool_choice: { type: "tool", name: A }
          },
          warnings: m,
          betas: w
        };
      }
      default: {
        const A = p;
        throw new Error(`Unsupported type: ${A}`);
      }
    }
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Se(
      await ii(this.config.headers),
      e.size > 0 ? { "anthropic-beta": Array.from(e).join(",") } : {},
      t
    );
  }
  buildRequestUrl(e) {
    var t, r, n;
    return (n = (r = (t = this.config).buildRequestUrl) == null ? void 0 : r.call(t, this.config.baseURL, e)) != null ? n : `${this.config.baseURL}/messages`;
  }
  transformRequestBody(e) {
    var t, r, n;
    return (n = (r = (t = this.config).transformRequestBody) == null ? void 0 : r.call(t, e)) != null ? n : e;
  }
  async doGenerate(e) {
    var t, r, n, a;
    const { args: s, warnings: o, betas: l } = await this.getArgs(e), { responseHeaders: u, value: c } = await ge({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: l, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: la,
      successfulResponseHandler: Xe(
        _p
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: d, ...f } = s;
    let b = "";
    for (const p of c.content)
      p.type === "text" && (b += p.text);
    let T;
    if (c.content.some((p) => p.type === "tool_use")) {
      T = [];
      for (const p of c.content)
        p.type === "tool_use" && T.push({
          toolCallType: "function",
          toolCallId: p.id,
          toolName: p.name,
          args: JSON.stringify(p.input)
        });
    }
    const h = c.content.filter(
      (p) => p.type === "redacted_thinking" || p.type === "thinking"
    ).map(
      (p) => p.type === "thinking" ? {
        type: "text",
        text: p.thinking,
        signature: p.signature
      } : {
        type: "redacted",
        data: p.data
      }
    );
    return {
      text: b,
      reasoning: h.length > 0 ? h : void 0,
      toolCalls: T,
      finishReason: ua(c.stop_reason),
      usage: {
        promptTokens: c.usage.input_tokens,
        completionTokens: c.usage.output_tokens
      },
      rawCall: { rawPrompt: d, rawSettings: f },
      rawResponse: { headers: u },
      response: {
        id: (t = c.id) != null ? t : void 0,
        modelId: (r = c.model) != null ? r : void 0
      },
      warnings: o,
      providerMetadata: {
        anthropic: {
          cacheCreationInputTokens: (n = c.usage.cache_creation_input_tokens) != null ? n : null,
          cacheReadInputTokens: (a = c.usage.cache_read_input_tokens) != null ? a : null
        }
      },
      request: { body: JSON.stringify(s) }
    };
  }
  async doStream(e) {
    const { args: t, warnings: r, betas: n } = await this.getArgs(e), a = { ...t, stream: !0 }, { responseHeaders: s, value: o } = await ge({
      url: this.buildRequestUrl(!0),
      headers: await this.getHeaders({ betas: n, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: la,
      successfulResponseHandler: br(
        bp
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: l, ...u } = t;
    let c = "unknown";
    const d = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, f = {};
    let b, T;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          transform(h, p) {
            var m, v, w, I;
            if (!h.success) {
              p.enqueue({ type: "error", error: h.error });
              return;
            }
            const g = h.value;
            switch (g.type) {
              case "ping":
                return;
              case "content_block_start": {
                const E = g.content_block.type;
                switch (T = E, E) {
                  case "text":
                  case "thinking":
                    return;
                  case "redacted_thinking": {
                    p.enqueue({
                      type: "redacted-reasoning",
                      data: g.content_block.data
                    });
                    return;
                  }
                  case "tool_use": {
                    f[g.index] = {
                      toolCallId: g.content_block.id,
                      toolName: g.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const P = E;
                    throw new Error(
                      `Unsupported content block type: ${P}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (f[g.index] != null) {
                  const E = f[g.index];
                  p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: E.toolCallId,
                    toolName: E.toolName,
                    args: E.jsonText
                  }), delete f[g.index];
                }
                T = void 0;
                return;
              }
              case "content_block_delta": {
                const E = g.delta.type;
                switch (E) {
                  case "text_delta": {
                    p.enqueue({
                      type: "text-delta",
                      textDelta: g.delta.text
                    });
                    return;
                  }
                  case "thinking_delta": {
                    p.enqueue({
                      type: "reasoning",
                      textDelta: g.delta.thinking
                    });
                    return;
                  }
                  case "signature_delta": {
                    T === "thinking" && p.enqueue({
                      type: "reasoning-signature",
                      signature: g.delta.signature
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const P = f[g.index];
                    p.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: P.toolCallId,
                      toolName: P.toolName,
                      argsTextDelta: g.delta.partial_json
                    }), P.jsonText += g.delta.partial_json;
                    return;
                  }
                  default: {
                    const P = E;
                    throw new Error(
                      `Unsupported delta type: ${P}`
                    );
                  }
                }
              }
              case "message_start": {
                d.promptTokens = g.message.usage.input_tokens, d.completionTokens = g.message.usage.output_tokens, b = {
                  anthropic: {
                    cacheCreationInputTokens: (m = g.message.usage.cache_creation_input_tokens) != null ? m : null,
                    cacheReadInputTokens: (v = g.message.usage.cache_read_input_tokens) != null ? v : null
                  }
                }, p.enqueue({
                  type: "response-metadata",
                  id: (w = g.message.id) != null ? w : void 0,
                  modelId: (I = g.message.model) != null ? I : void 0
                });
                return;
              }
              case "message_delta": {
                d.completionTokens = g.usage.output_tokens, c = ua(g.delta.stop_reason);
                return;
              }
              case "message_stop": {
                p.enqueue({
                  type: "finish",
                  finishReason: c,
                  usage: d,
                  providerMetadata: b
                });
                return;
              }
              case "error": {
                p.enqueue({ type: "error", error: g.error });
                return;
              }
              default: {
                const E = g;
                throw new Error(`Unsupported chunk type: ${E}`);
              }
            }
          }
        })
      ),
      rawCall: { rawPrompt: l, rawSettings: u },
      rawResponse: { headers: s },
      warnings: r,
      request: { body: JSON.stringify(a) }
    };
  }
}, _p = i.object({
  type: i.literal("message"),
  id: i.string().nullish(),
  model: i.string().nullish(),
  content: i.array(
    i.discriminatedUnion("type", [
      i.object({
        type: i.literal("text"),
        text: i.string()
      }),
      i.object({
        type: i.literal("thinking"),
        thinking: i.string(),
        signature: i.string()
      }),
      i.object({
        type: i.literal("redacted_thinking"),
        data: i.string()
      }),
      i.object({
        type: i.literal("tool_use"),
        id: i.string(),
        name: i.string(),
        input: i.unknown()
      })
    ])
  ),
  stop_reason: i.string().nullish(),
  usage: i.object({
    input_tokens: i.number(),
    output_tokens: i.number(),
    cache_creation_input_tokens: i.number().nullish(),
    cache_read_input_tokens: i.number().nullish()
  })
}), bp = i.discriminatedUnion("type", [
  i.object({
    type: i.literal("message_start"),
    message: i.object({
      id: i.string().nullish(),
      model: i.string().nullish(),
      usage: i.object({
        input_tokens: i.number(),
        output_tokens: i.number(),
        cache_creation_input_tokens: i.number().nullish(),
        cache_read_input_tokens: i.number().nullish()
      })
    })
  }),
  i.object({
    type: i.literal("content_block_start"),
    index: i.number(),
    content_block: i.discriminatedUnion("type", [
      i.object({
        type: i.literal("text"),
        text: i.string()
      }),
      i.object({
        type: i.literal("thinking"),
        thinking: i.string()
      }),
      i.object({
        type: i.literal("tool_use"),
        id: i.string(),
        name: i.string()
      }),
      i.object({
        type: i.literal("redacted_thinking"),
        data: i.string()
      })
    ])
  }),
  i.object({
    type: i.literal("content_block_delta"),
    index: i.number(),
    delta: i.discriminatedUnion("type", [
      i.object({
        type: i.literal("input_json_delta"),
        partial_json: i.string()
      }),
      i.object({
        type: i.literal("text_delta"),
        text: i.string()
      }),
      i.object({
        type: i.literal("thinking_delta"),
        thinking: i.string()
      }),
      i.object({
        type: i.literal("signature_delta"),
        signature: i.string()
      })
    ])
  }),
  i.object({
    type: i.literal("content_block_stop"),
    index: i.number()
  }),
  i.object({
    type: i.literal("error"),
    error: i.object({
      type: i.string(),
      message: i.string()
    })
  }),
  i.object({
    type: i.literal("message_delta"),
    delta: i.object({ stop_reason: i.string().nullish() }),
    usage: i.object({ output_tokens: i.number() })
  }),
  i.object({
    type: i.literal("message_stop")
  }),
  i.object({
    type: i.literal("ping")
  })
]), wp = i.object({
  type: i.union([i.literal("enabled"), i.literal("disabled")]),
  budgetTokens: i.number().optional()
}).optional(), xp = i.object({
  command: i.string(),
  restart: i.boolean().optional()
});
function kp(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20241022",
    args: {},
    parameters: xp,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Tp = i.object({
  command: i.enum(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: i.string(),
  file_text: i.string().optional(),
  insert_line: i.number().int().optional(),
  new_str: i.string().optional(),
  old_str: i.string().optional(),
  view_range: i.array(i.number().int()).optional()
});
function Sp(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20241022",
    args: {},
    parameters: Tp,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Ip = i.object({
  action: i.enum([
    "key",
    "type",
    "mouse_move",
    "left_click",
    "left_click_drag",
    "right_click",
    "middle_click",
    "double_click",
    "screenshot",
    "cursor_position"
  ]),
  coordinate: i.array(i.number().int()).optional(),
  text: i.string().optional()
});
function Ep(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20241022",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Ip,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Cp = i.object({
  action: i.enum([
    "key",
    "hold_key",
    "type",
    "cursor_position",
    "mouse_move",
    "left_mouse_down",
    "left_mouse_up",
    "left_click",
    "left_click_drag",
    "right_click",
    "middle_click",
    "double_click",
    "triple_click",
    "scroll",
    "wait",
    "screenshot"
  ]),
  coordinate: i.tuple([i.number().int(), i.number().int()]).optional(),
  duration: i.number().optional(),
  scroll_amount: i.number().optional(),
  scroll_direction: i.enum(["up", "down", "left", "right"]).optional(),
  start_coordinate: i.tuple([i.number().int(), i.number().int()]).optional(),
  text: i.string().optional()
});
function Ap(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20250124",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Cp,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Rp = {
  bash_20241022: kp,
  textEditor_20241022: Sp,
  computer_20241022: Ep,
  computer_20250124: Ap
};
function Np(e = {}) {
  var t;
  const r = (t = hn(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", n = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": fn({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), a = (o, l = {}) => new vp(o, l, {
    provider: "anthropic.messages",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = function(o, l) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return a(o, l);
  };
  return s.languageModel = a, s.chat = a, s.messages = a, s.textEmbeddingModel = (o) => {
    throw new jo({ modelId: o, modelType: "textEmbeddingModel" });
  }, s.tools = Rp, s;
}
Np();
function Pp(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const { role: n, content: a } = e[r], s = r === e.length - 1;
    switch (n) {
      case "system": {
        t.push({ role: "system", content: a });
        break;
      }
      case "user": {
        t.push({
          role: "user",
          content: a.map((o) => {
            var l;
            switch (o.type) {
              case "text":
                return { type: "text", text: o.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: o.image instanceof URL ? o.image.toString() : `data:${(l = o.mimeType) != null ? l : "image/jpeg"};base64,${wt(o.image)}`
                };
              case "file":
                throw new B({
                  functionality: "File content parts in user messages"
                });
            }
          })
        });
        break;
      }
      case "assistant": {
        let o = "";
        const l = [];
        for (const u of a)
          switch (u.type) {
            case "text": {
              o += u.text;
              break;
            }
            case "redacted-reasoning":
            case "reasoning":
              break;
            case "tool-call": {
              l.push({
                id: u.toolCallId,
                type: "function",
                function: {
                  name: u.toolName,
                  arguments: JSON.stringify(u.args)
                }
              });
              break;
            }
            default: {
              const c = u;
              throw new Error(`Unsupported part: ${c}`);
            }
          }
        t.push({
          role: "assistant",
          content: o,
          prefix: s ? !0 : void 0,
          tool_calls: l.length > 0 ? l : void 0
        });
        break;
      }
      case "tool": {
        for (const o of a)
          t.push({
            role: "tool",
            name: o.toolName,
            content: JSON.stringify(o.result),
            tool_call_id: o.toolCallId
          });
        break;
      }
      default: {
        const o = n;
        throw new Error(`Unsupported role: ${o}`);
      }
    }
  }
  return t;
}
function ca(e) {
  switch (e) {
    case "stop":
      return "stop";
    case "length":
    case "model_length":
      return "length";
    case "tool_calls":
      return "tool-calls";
    default:
      return "unknown";
  }
}
var Op = i.object({
  object: i.literal("error"),
  message: i.string(),
  type: i.string(),
  param: i.string().nullable(),
  code: i.string().nullable()
}), un = mn({
  errorSchema: Op,
  errorToMessage: (e) => e.message
});
function da({
  id: e,
  model: t,
  created: r
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: r != null ? new Date(r * 1e3) : void 0
  };
}
function jp(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0, n = [];
  if (r == null)
    return { tools: void 0, tool_choice: void 0, toolWarnings: n };
  const a = [];
  for (const l of r)
    l.type === "provider-defined" ? n.push({ type: "unsupported-tool", tool: l }) : a.push({
      type: "function",
      function: {
        name: l.name,
        description: l.description,
        parameters: l.parameters
      }
    });
  const s = e.toolChoice;
  if (s == null)
    return { tools: a, tool_choice: void 0, toolWarnings: n };
  const o = s.type;
  switch (o) {
    case "auto":
    case "none":
      return { tools: a, tool_choice: o, toolWarnings: n };
    case "required":
      return { tools: a, tool_choice: "any", toolWarnings: n };
    case "tool":
      return {
        tools: a.filter(
          (l) => l.function.name === s.toolName
        ),
        tool_choice: "any",
        toolWarnings: n
      };
    default: {
      const l = o;
      throw new B({
        functionality: `Unsupported tool choice type: ${l}`
      });
    }
  }
}
var Mp = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsImageUrls = !1, this.modelId = e, this.settings = t, this.config = r;
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
    topK: s,
    frequencyPenalty: o,
    presencePenalty: l,
    stopSequences: u,
    responseFormat: c,
    seed: d
  }) {
    const f = e.type, b = [];
    s != null && b.push({
      type: "unsupported-setting",
      setting: "topK"
    }), o != null && b.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), l != null && b.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), u != null && b.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    }), c != null && c.type === "json" && c.schema != null && b.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is not supported"
    });
    const T = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: this.settings.safePrompt,
      // standardized settings:
      max_tokens: r,
      temperature: n,
      top_p: a,
      random_seed: d,
      // response format:
      response_format: (c == null ? void 0 : c.type) === "json" ? { type: "json_object" } : void 0,
      // messages:
      messages: Pp(t)
    };
    switch (f) {
      case "regular": {
        const { tools: h, tool_choice: p, toolWarnings: m } = jp(e);
        return {
          args: { ...T, tools: h, tool_choice: p },
          warnings: [...b, ...m]
        };
      }
      case "object-json":
        return {
          args: {
            ...T,
            response_format: { type: "json_object" }
          },
          warnings: b
        };
      case "object-tool":
        return {
          args: {
            ...T,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: b
        };
      default: {
        const h = f;
        throw new Error(`Unsupported type: ${h}`);
      }
    }
  }
  async doGenerate(e) {
    var t;
    const { args: r, warnings: n } = this.getArgs(e), { responseHeaders: a, value: s } = await ge({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Se(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: un,
      successfulResponseHandler: Xe(
        $p
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...l } = r, u = s.choices[0];
    let c = pa(u.message.content);
    const d = o[o.length - 1];
    return d.role === "assistant" && (c != null && c.startsWith(d.content)) && (c = c.slice(d.content.length)), {
      text: c,
      toolCalls: (t = u.message.tool_calls) == null ? void 0 : t.map((f) => ({
        toolCallType: "function",
        toolCallId: f.id,
        toolName: f.function.name,
        args: f.function.arguments
      })),
      finishReason: ca(u.finish_reason),
      usage: {
        promptTokens: s.usage.prompt_tokens,
        completionTokens: s.usage.completion_tokens
      },
      rawCall: { rawPrompt: o, rawSettings: l },
      rawResponse: { headers: a },
      request: { body: JSON.stringify(r) },
      response: da(s),
      warnings: n
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = { ...t, stream: !0 }, { responseHeaders: a, value: s } = await ge({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Se(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: un,
      successfulResponseHandler: br(
        Dp
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...l } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d = 0, f = !1;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(b, T) {
            if (!b.success) {
              T.enqueue({ type: "error", error: b.error });
              return;
            }
            d++;
            const h = b.value;
            d === 1 && T.enqueue({
              type: "response-metadata",
              ...da(h)
            }), h.usage != null && (c = {
              promptTokens: h.usage.prompt_tokens,
              completionTokens: h.usage.completion_tokens
            });
            const p = h.choices[0];
            if ((p == null ? void 0 : p.finish_reason) != null && (u = ca(p.finish_reason)), (p == null ? void 0 : p.delta) == null)
              return;
            const m = p.delta, v = pa(m.content);
            if (d <= 2) {
              const w = o[o.length - 1];
              if (w.role === "assistant" && v === w.content.trimEnd()) {
                v.length < w.content.length && (f = !0);
                return;
              }
            }
            if (v != null && (T.enqueue({
              type: "text-delta",
              textDelta: f ? v.trimStart() : v
            }), f = !1), m.tool_calls != null)
              for (const w of m.tool_calls)
                T.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: w.id,
                  toolName: w.function.name,
                  argsTextDelta: w.function.arguments
                }), T.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: w.id,
                  toolName: w.function.name,
                  args: w.function.arguments
                });
          },
          flush(b) {
            b.enqueue({ type: "finish", finishReason: u, usage: c });
          }
        })
      ),
      rawCall: { rawPrompt: o, rawSettings: l },
      rawResponse: { headers: a },
      request: { body: JSON.stringify(n) },
      warnings: r
    };
  }
};
function pa(e) {
  if (typeof e == "string")
    return e;
  if (e == null)
    return;
  const t = [];
  for (const r of e) {
    const { type: n } = r;
    switch (n) {
      case "text":
        t.push(r.text);
        break;
      case "image_url":
      case "reference":
        break;
      default: {
        const a = n;
        throw new Error(`Unsupported type: ${a}`);
      }
    }
  }
  return t.length ? t.join("") : void 0;
}
var ho = i.union([
  i.string(),
  i.array(
    i.discriminatedUnion("type", [
      i.object({
        type: i.literal("text"),
        text: i.string()
      }),
      i.object({
        type: i.literal("image_url"),
        image_url: i.union([
          i.string(),
          i.object({
            url: i.string(),
            detail: i.string().nullable()
          })
        ])
      }),
      i.object({
        type: i.literal("reference"),
        reference_ids: i.array(i.number())
      })
    ])
  )
]).nullish(), $p = i.object({
  id: i.string().nullish(),
  created: i.number().nullish(),
  model: i.string().nullish(),
  choices: i.array(
    i.object({
      message: i.object({
        role: i.literal("assistant"),
        content: ho,
        tool_calls: i.array(
          i.object({
            id: i.string(),
            function: i.object({ name: i.string(), arguments: i.string() })
          })
        ).nullish()
      }),
      index: i.number(),
      finish_reason: i.string().nullish()
    })
  ),
  object: i.literal("chat.completion"),
  usage: i.object({
    prompt_tokens: i.number(),
    completion_tokens: i.number()
  })
}), Dp = i.object({
  id: i.string().nullish(),
  created: i.number().nullish(),
  model: i.string().nullish(),
  choices: i.array(
    i.object({
      delta: i.object({
        role: i.enum(["assistant"]).optional(),
        content: ho,
        tool_calls: i.array(
          i.object({
            id: i.string(),
            function: i.object({ name: i.string(), arguments: i.string() })
          })
        ).nullish()
      }),
      finish_reason: i.string().nullish(),
      index: i.number()
    })
  ),
  usage: i.object({
    prompt_tokens: i.number(),
    completion_tokens: i.number()
  }).nullish()
}), Zp = class {
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
      throw new Ha({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await ge({
      url: `${this.config.baseURL}/embeddings`,
      headers: Se(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: un,
      successfulResponseHandler: Xe(
        Up
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
}, Up = i.object({
  data: i.array(i.object({ embedding: i.array(i.number()) })),
  usage: i.object({ prompt_tokens: i.number() }).nullish()
});
function Lp(e = {}) {
  var t;
  const r = (t = hn(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", n = () => ({
    Authorization: `Bearer ${fn({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (l, u = {}) => new Mp(l, u, {
    provider: "mistral.chat",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = (l, u = {}) => new Zp(l, u, {
    provider: "mistral.embedding",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), o = function(l, u) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return a(l, u);
  };
  return o.languageModel = a, o.chat = a, o.embedding = s, o.textEmbedding = s, o.textEmbeddingModel = s, o;
}
Lp();
function qp({
  prompt: e,
  useLegacyFunctionCalling: t = !1,
  systemMessageMode: r = "system"
}) {
  const n = [];
  for (const { role: a, content: s } of e)
    switch (a) {
      case "system": {
        switch (r) {
          case "system": {
            n.push({ role: "system", content: s });
            break;
          }
          case "developer": {
            n.push({ role: "developer", content: s });
            break;
          }
          case "remove":
            break;
          default: {
            const o = r;
            throw new Error(
              `Unsupported system message mode: ${o}`
            );
          }
        }
        break;
      }
      case "user": {
        if (s.length === 1 && s[0].type === "text") {
          n.push({ role: "user", content: s[0].text });
          break;
        }
        n.push({
          role: "user",
          content: s.map((o) => {
            var l, u, c;
            switch (o.type) {
              case "text":
                return { type: "text", text: o.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: {
                    url: o.image instanceof URL ? o.image.toString() : `data:${(l = o.mimeType) != null ? l : "image/jpeg"};base64,${wt(o.image)}`,
                    // OpenAI specific extension: image detail
                    detail: (c = (u = o.providerMetadata) == null ? void 0 : u.openai) == null ? void 0 : c.imageDetail
                  }
                };
              case "file": {
                if (o.data instanceof URL)
                  throw new B({
                    functionality: "'File content parts with URL data' functionality not supported."
                  });
                switch (o.mimeType) {
                  case "audio/wav":
                    return {
                      type: "input_audio",
                      input_audio: { data: o.data, format: "wav" }
                    };
                  case "audio/mp3":
                  case "audio/mpeg":
                    return {
                      type: "input_audio",
                      input_audio: { data: o.data, format: "mp3" }
                    };
                  default:
                    throw new B({
                      functionality: `File content part type ${o.mimeType} in user messages`
                    });
                }
              }
            }
          })
        });
        break;
      }
      case "assistant": {
        let o = "";
        const l = [];
        for (const u of s)
          switch (u.type) {
            case "text": {
              o += u.text;
              break;
            }
            case "redacted-reasoning":
            case "reasoning":
              break;
            case "tool-call": {
              l.push({
                id: u.toolCallId,
                type: "function",
                function: {
                  name: u.toolName,
                  arguments: JSON.stringify(u.args)
                }
              });
              break;
            }
            default: {
              const c = u;
              throw new Error(`Unsupported part: ${c}`);
            }
          }
        if (t) {
          if (l.length > 1)
            throw new B({
              functionality: "useLegacyFunctionCalling with multiple tool calls in one message"
            });
          n.push({
            role: "assistant",
            content: o,
            function_call: l.length > 0 ? l[0].function : void 0
          });
        } else
          n.push({
            role: "assistant",
            content: o,
            tool_calls: l.length > 0 ? l : void 0
          });
        break;
      }
      case "tool": {
        for (const o of s)
          t ? n.push({
            role: "function",
            name: o.toolName,
            content: JSON.stringify(o.result)
          }) : n.push({
            role: "tool",
            tool_call_id: o.toolCallId,
            content: JSON.stringify(o.result)
          });
        break;
      }
      default: {
        const o = a;
        throw new Error(`Unsupported role: ${o}`);
      }
    }
  return n;
}
function fa(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.content) == null ? void 0 : t.map(({ token: n, logprob: a, top_logprobs: s }) => ({
    token: n,
    logprob: a,
    topLogprobs: s ? s.map(({ token: o, logprob: l }) => ({
      token: o,
      logprob: l
    })) : []
  }))) != null ? r : void 0;
}
function yr(e) {
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
var In = i.object({
  error: i.object({
    message: i.string(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: i.string().nullish(),
    param: i.any().nullish(),
    code: i.union([i.string(), i.number()]).nullish()
  })
}), pt = mn({
  errorSchema: In,
  errorToMessage: (e) => e.error.message
});
function vr({
  id: e,
  model: t,
  created: r
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: r != null ? new Date(r * 1e3) : void 0
  };
}
function Fp({
  mode: e,
  useLegacyFunctionCalling: t = !1,
  structuredOutputs: r
}) {
  var n;
  const a = (n = e.tools) != null && n.length ? e.tools : void 0, s = [];
  if (a == null)
    return { tools: void 0, tool_choice: void 0, toolWarnings: s };
  const o = e.toolChoice;
  if (t) {
    const c = [];
    for (const f of a)
      f.type === "provider-defined" ? s.push({ type: "unsupported-tool", tool: f }) : c.push({
        name: f.name,
        description: f.description,
        parameters: f.parameters
      });
    if (o == null)
      return {
        functions: c,
        function_call: void 0,
        toolWarnings: s
      };
    switch (o.type) {
      case "auto":
      case "none":
      case void 0:
        return {
          functions: c,
          function_call: void 0,
          toolWarnings: s
        };
      case "required":
        throw new B({
          functionality: "useLegacyFunctionCalling and toolChoice: required"
        });
      default:
        return {
          functions: c,
          function_call: { name: o.toolName },
          toolWarnings: s
        };
    }
  }
  const l = [];
  for (const c of a)
    c.type === "provider-defined" ? s.push({ type: "unsupported-tool", tool: c }) : l.push({
      type: "function",
      function: {
        name: c.name,
        description: c.description,
        parameters: c.parameters,
        strict: r ? !0 : void 0
      }
    });
  if (o == null)
    return { tools: l, tool_choice: void 0, toolWarnings: s };
  const u = o.type;
  switch (u) {
    case "auto":
    case "none":
    case "required":
      return { tools: l, tool_choice: u, toolWarnings: s };
    case "tool":
      return {
        tools: l,
        tool_choice: {
          type: "function",
          function: {
            name: o.toolName
          }
        },
        toolWarnings: s
      };
    default: {
      const c = u;
      throw new B({
        functionality: `Unsupported tool choice type: ${c}`
      });
    }
  }
}
var Bp = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get supportsStructuredOutputs() {
    var e;
    return (e = this.settings.structuredOutputs) != null ? e : cn(this.modelId);
  }
  get defaultObjectGenerationMode() {
    return Jp(this.modelId) ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
  }
  get provider() {
    return this.config.provider;
  }
  get supportsImageUrls() {
    return !this.settings.downloadImages;
  }
  getArgs({
    mode: e,
    prompt: t,
    maxTokens: r,
    temperature: n,
    topP: a,
    topK: s,
    frequencyPenalty: o,
    presencePenalty: l,
    stopSequences: u,
    responseFormat: c,
    seed: d,
    providerMetadata: f
  }) {
    var b, T, h, p, m, v, w, I;
    const g = e.type, E = [];
    s != null && E.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (c == null ? void 0 : c.type) === "json" && c.schema != null && !this.supportsStructuredOutputs && E.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const P = this.settings.useLegacyFunctionCalling;
    if (P && this.settings.parallelToolCalls === !0)
      throw new B({
        functionality: "useLegacyFunctionCalling with parallelToolCalls"
      });
    if (P && this.supportsStructuredOutputs)
      throw new B({
        functionality: "structuredOutputs with useLegacyFunctionCalling"
      });
    ma(this.modelId) === "remove" && t.some((Z) => Z.role === "system") && E.push({
      type: "other",
      message: "system messages are removed for this model"
    });
    const A = {
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
      frequency_penalty: o,
      presence_penalty: l,
      response_format: (c == null ? void 0 : c.type) === "json" ? this.supportsStructuredOutputs && c.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: c.schema,
          strict: !0,
          name: (b = c.name) != null ? b : "response",
          description: c.description
        }
      } : { type: "json_object" } : void 0,
      stop: u,
      seed: d,
      // openai specific settings:
      // TODO remove in next major version; we auto-map maxTokens now
      max_completion_tokens: (T = f == null ? void 0 : f.openai) == null ? void 0 : T.maxCompletionTokens,
      store: (h = f == null ? void 0 : f.openai) == null ? void 0 : h.store,
      metadata: (p = f == null ? void 0 : f.openai) == null ? void 0 : p.metadata,
      prediction: (m = f == null ? void 0 : f.openai) == null ? void 0 : m.prediction,
      reasoning_effort: (w = (v = f == null ? void 0 : f.openai) == null ? void 0 : v.reasoningEffort) != null ? w : this.settings.reasoningEffort,
      // messages:
      messages: qp({
        prompt: t,
        useLegacyFunctionCalling: P,
        systemMessageMode: ma(this.modelId)
      })
    };
    switch (cn(this.modelId) && (A.temperature != null && (A.temperature = void 0, E.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), A.top_p != null && (A.top_p = void 0, E.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })), A.frequency_penalty != null && (A.frequency_penalty = void 0, E.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), A.presence_penalty != null && (A.presence_penalty = void 0, E.push({
      type: "unsupported-setting",
      setting: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), A.logit_bias != null && (A.logit_bias = void 0, E.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), A.logprobs != null && (A.logprobs = void 0, E.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    })), A.top_logprobs != null && (A.top_logprobs = void 0, E.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), A.max_tokens != null && (A.max_completion_tokens == null && (A.max_completion_tokens = A.max_tokens), A.max_tokens = void 0)), g) {
      case "regular": {
        const { tools: Z, tool_choice: X, functions: oe, function_call: Ae, toolWarnings: ve } = Fp({
          mode: e,
          useLegacyFunctionCalling: P,
          structuredOutputs: this.supportsStructuredOutputs
        });
        return {
          args: {
            ...A,
            tools: Z,
            tool_choice: X,
            functions: oe,
            function_call: Ae
          },
          warnings: [...E, ...ve]
        };
      }
      case "object-json":
        return {
          args: {
            ...A,
            response_format: this.supportsStructuredOutputs && e.schema != null ? {
              type: "json_schema",
              json_schema: {
                schema: e.schema,
                strict: !0,
                name: (I = e.name) != null ? I : "response",
                description: e.description
              }
            } : { type: "json_object" }
          },
          warnings: E
        };
      case "object-tool":
        return {
          args: P ? {
            ...A,
            function_call: {
              name: e.tool.name
            },
            functions: [
              {
                name: e.tool.name,
                description: e.tool.description,
                parameters: e.tool.parameters
              }
            ]
          } : {
            ...A,
            tool_choice: {
              type: "function",
              function: { name: e.tool.name }
            },
            tools: [
              {
                type: "function",
                function: {
                  name: e.tool.name,
                  description: e.tool.description,
                  parameters: e.tool.parameters,
                  strict: this.supportsStructuredOutputs ? !0 : void 0
                }
              }
            ]
          },
          warnings: E
        };
      default: {
        const Z = g;
        throw new Error(`Unsupported type: ${Z}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o, l, u;
    const { args: c, warnings: d } = this.getArgs(e), { responseHeaders: f, value: b } = await ge({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: c,
      failedResponseHandler: pt,
      successfulResponseHandler: Xe(
        Vp
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: T, ...h } = c, p = b.choices[0], m = (t = b.usage) == null ? void 0 : t.completion_tokens_details, v = (r = b.usage) == null ? void 0 : r.prompt_tokens_details, w = { openai: {} };
    return (m == null ? void 0 : m.reasoning_tokens) != null && (w.openai.reasoningTokens = m == null ? void 0 : m.reasoning_tokens), (m == null ? void 0 : m.accepted_prediction_tokens) != null && (w.openai.acceptedPredictionTokens = m == null ? void 0 : m.accepted_prediction_tokens), (m == null ? void 0 : m.rejected_prediction_tokens) != null && (w.openai.rejectedPredictionTokens = m == null ? void 0 : m.rejected_prediction_tokens), (v == null ? void 0 : v.cached_tokens) != null && (w.openai.cachedPromptTokens = v == null ? void 0 : v.cached_tokens), {
      text: (n = p.message.content) != null ? n : void 0,
      toolCalls: this.settings.useLegacyFunctionCalling && p.message.function_call ? [
        {
          toolCallType: "function",
          toolCallId: nt(),
          toolName: p.message.function_call.name,
          args: p.message.function_call.arguments
        }
      ] : (a = p.message.tool_calls) == null ? void 0 : a.map((I) => {
        var g;
        return {
          toolCallType: "function",
          toolCallId: (g = I.id) != null ? g : nt(),
          toolName: I.function.name,
          args: I.function.arguments
        };
      }),
      finishReason: yr(p.finish_reason),
      usage: {
        promptTokens: (o = (s = b.usage) == null ? void 0 : s.prompt_tokens) != null ? o : NaN,
        completionTokens: (u = (l = b.usage) == null ? void 0 : l.completion_tokens) != null ? u : NaN
      },
      rawCall: { rawPrompt: T, rawSettings: h },
      rawResponse: { headers: f },
      request: { body: JSON.stringify(c) },
      response: vr(b),
      warnings: d,
      logprobs: fa(p.logprobs),
      providerMetadata: w
    };
  }
  async doStream(e) {
    if (this.settings.simulateStreaming) {
      const p = await this.doGenerate(e);
      return {
        stream: new ReadableStream({
          start(v) {
            if (v.enqueue({ type: "response-metadata", ...p.response }), p.text && v.enqueue({
              type: "text-delta",
              textDelta: p.text
            }), p.toolCalls)
              for (const w of p.toolCalls)
                v.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: w.toolCallId,
                  toolName: w.toolName,
                  argsTextDelta: w.args
                }), v.enqueue({
                  type: "tool-call",
                  ...w
                });
            v.enqueue({
              type: "finish",
              finishReason: p.finishReason,
              usage: p.usage,
              logprobs: p.logprobs,
              providerMetadata: p.providerMetadata
            }), v.close();
          }
        }),
        rawCall: p.rawCall,
        rawResponse: p.rawResponse,
        warnings: p.warnings
      };
    }
    const { args: t, warnings: r } = this.getArgs(e), n = {
      ...t,
      stream: !0,
      // only include stream_options when in strict compatibility mode:
      stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
    }, { responseHeaders: a, value: s } = await ge({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: pt,
      successfulResponseHandler: br(
        zp
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...l } = t, u = [];
    let c = "unknown", d = {
      promptTokens: void 0,
      completionTokens: void 0
    }, f, b = !0;
    const { useLegacyFunctionCalling: T } = this.settings, h = { openai: {} };
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(p, m) {
            var v, w, I, g, E, P, A, Z, X, oe, Ae, ve;
            if (!p.success) {
              c = "error", m.enqueue({ type: "error", error: p.error });
              return;
            }
            const _e = p.value;
            if ("error" in _e) {
              c = "error", m.enqueue({ type: "error", error: _e.error });
              return;
            }
            if (b && (b = !1, m.enqueue({
              type: "response-metadata",
              ...vr(_e)
            })), _e.usage != null) {
              const {
                prompt_tokens: J,
                completion_tokens: Q,
                prompt_tokens_details: q,
                completion_tokens_details: U
              } = _e.usage;
              d = {
                promptTokens: J ?? void 0,
                completionTokens: Q ?? void 0
              }, (U == null ? void 0 : U.reasoning_tokens) != null && (h.openai.reasoningTokens = U == null ? void 0 : U.reasoning_tokens), (U == null ? void 0 : U.accepted_prediction_tokens) != null && (h.openai.acceptedPredictionTokens = U == null ? void 0 : U.accepted_prediction_tokens), (U == null ? void 0 : U.rejected_prediction_tokens) != null && (h.openai.rejectedPredictionTokens = U == null ? void 0 : U.rejected_prediction_tokens), (q == null ? void 0 : q.cached_tokens) != null && (h.openai.cachedPromptTokens = q == null ? void 0 : q.cached_tokens);
            }
            const ee = _e.choices[0];
            if ((ee == null ? void 0 : ee.finish_reason) != null && (c = yr(ee.finish_reason)), (ee == null ? void 0 : ee.delta) == null)
              return;
            const ie = ee.delta;
            ie.content != null && m.enqueue({
              type: "text-delta",
              textDelta: ie.content
            });
            const le = fa(
              ee == null ? void 0 : ee.logprobs
            );
            le != null && le.length && (f === void 0 && (f = []), f.push(...le));
            const et = T && ie.function_call != null ? [
              {
                type: "function",
                id: nt(),
                function: ie.function_call,
                index: 0
              }
            ] : ie.tool_calls;
            if (et != null)
              for (const J of et) {
                const Q = J.index;
                if (u[Q] == null) {
                  if (J.type !== "function")
                    throw new Zr({
                      data: J,
                      message: "Expected 'function' type."
                    });
                  if (J.id == null)
                    throw new Zr({
                      data: J,
                      message: "Expected 'id' to be a string."
                    });
                  if (((v = J.function) == null ? void 0 : v.name) == null)
                    throw new Zr({
                      data: J,
                      message: "Expected 'function.name' to be a string."
                    });
                  u[Q] = {
                    id: J.id,
                    type: "function",
                    function: {
                      name: J.function.name,
                      arguments: (w = J.function.arguments) != null ? w : ""
                    },
                    hasFinished: !1
                  };
                  const U = u[Q];
                  ((I = U.function) == null ? void 0 : I.name) != null && ((g = U.function) == null ? void 0 : g.arguments) != null && (U.function.arguments.length > 0 && m.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: U.id,
                    toolName: U.function.name,
                    argsTextDelta: U.function.arguments
                  }), Vn(U.function.arguments) && (m.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (E = U.id) != null ? E : nt(),
                    toolName: U.function.name,
                    args: U.function.arguments
                  }), U.hasFinished = !0));
                  continue;
                }
                const q = u[Q];
                q.hasFinished || (((P = J.function) == null ? void 0 : P.arguments) != null && (q.function.arguments += (Z = (A = J.function) == null ? void 0 : A.arguments) != null ? Z : ""), m.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: q.id,
                  toolName: q.function.name,
                  argsTextDelta: (X = J.function.arguments) != null ? X : ""
                }), ((oe = q.function) == null ? void 0 : oe.name) != null && ((Ae = q.function) == null ? void 0 : Ae.arguments) != null && Vn(q.function.arguments) && (m.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (ve = q.id) != null ? ve : nt(),
                  toolName: q.function.name,
                  args: q.function.arguments
                }), q.hasFinished = !0));
              }
          },
          flush(p) {
            var m, v;
            p.enqueue({
              type: "finish",
              finishReason: c,
              logprobs: f,
              usage: {
                promptTokens: (m = d.promptTokens) != null ? m : NaN,
                completionTokens: (v = d.completionTokens) != null ? v : NaN
              },
              ...h != null ? { providerMetadata: h } : {}
            });
          }
        })
      ),
      rawCall: { rawPrompt: o, rawSettings: l },
      rawResponse: { headers: a },
      request: { body: JSON.stringify(n) },
      warnings: r
    };
  }
}, go = i.object({
  prompt_tokens: i.number().nullish(),
  completion_tokens: i.number().nullish(),
  prompt_tokens_details: i.object({
    cached_tokens: i.number().nullish()
  }).nullish(),
  completion_tokens_details: i.object({
    reasoning_tokens: i.number().nullish(),
    accepted_prediction_tokens: i.number().nullish(),
    rejected_prediction_tokens: i.number().nullish()
  }).nullish()
}).nullish(), Vp = i.object({
  id: i.string().nullish(),
  created: i.number().nullish(),
  model: i.string().nullish(),
  choices: i.array(
    i.object({
      message: i.object({
        role: i.literal("assistant").nullish(),
        content: i.string().nullish(),
        function_call: i.object({
          arguments: i.string(),
          name: i.string()
        }).nullish(),
        tool_calls: i.array(
          i.object({
            id: i.string().nullish(),
            type: i.literal("function"),
            function: i.object({
              name: i.string(),
              arguments: i.string()
            })
          })
        ).nullish()
      }),
      index: i.number(),
      logprobs: i.object({
        content: i.array(
          i.object({
            token: i.string(),
            logprob: i.number(),
            top_logprobs: i.array(
              i.object({
                token: i.string(),
                logprob: i.number()
              })
            )
          })
        ).nullable()
      }).nullish(),
      finish_reason: i.string().nullish()
    })
  ),
  usage: go
}), zp = i.union([
  i.object({
    id: i.string().nullish(),
    created: i.number().nullish(),
    model: i.string().nullish(),
    choices: i.array(
      i.object({
        delta: i.object({
          role: i.enum(["assistant"]).nullish(),
          content: i.string().nullish(),
          function_call: i.object({
            name: i.string().optional(),
            arguments: i.string().optional()
          }).nullish(),
          tool_calls: i.array(
            i.object({
              index: i.number(),
              id: i.string().nullish(),
              type: i.literal("function").optional(),
              function: i.object({
                name: i.string().nullish(),
                arguments: i.string().nullish()
              })
            })
          ).nullish()
        }).nullish(),
        logprobs: i.object({
          content: i.array(
            i.object({
              token: i.string(),
              logprob: i.number(),
              top_logprobs: i.array(
                i.object({
                  token: i.string(),
                  logprob: i.number()
                })
              )
            })
          ).nullable()
        }).nullish(),
        finish_reason: i.string().nullable().optional(),
        index: i.number()
      })
    ),
    usage: go
  }),
  In
]);
function cn(e) {
  return e === "o1" || e.startsWith("o1-") || e === "o3" || e.startsWith("o3-");
}
function Jp(e) {
  return e.startsWith("gpt-4o-audio-preview");
}
function ma(e) {
  var t, r;
  return cn(e) ? (r = (t = Hp[e]) == null ? void 0 : t.systemMessageMode) != null ? r : "developer" : "system";
}
var Hp = {
  "o1-mini": {
    systemMessageMode: "remove"
  },
  "o1-mini-2024-09-12": {
    systemMessageMode: "remove"
  },
  "o1-preview": {
    systemMessageMode: "remove"
  },
  "o1-preview-2024-09-12": {
    systemMessageMode: "remove"
  },
  "o3-mini": {
    systemMessageMode: "developer"
  },
  "o3-mini-2025-01-31": {
    systemMessageMode: "developer"
  }
};
function Wp({
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
        throw new Ve({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const l = o.map((u) => {
          switch (u.type) {
            case "text":
              return u.text;
            case "image":
              throw new B({
                functionality: "images"
              });
          }
        }).join("");
        a += `${r}:
${l}

`;
        break;
      }
      case "assistant": {
        const l = o.map((u) => {
          switch (u.type) {
            case "text":
              return u.text;
            case "tool-call":
              throw new B({
                functionality: "tool-call messages"
              });
          }
        }).join("");
        a += `${n}:
${l}

`;
        break;
      }
      case "tool":
        throw new B({
          functionality: "tool messages"
        });
      default: {
        const l = s;
        throw new Error(`Unsupported role: ${l}`);
      }
    }
  return a += `${n}:
`, {
    prompt: a,
    stopSequences: [`
${r}:`]
  };
}
function ha(e) {
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
var Gp = class {
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
    topK: o,
    frequencyPenalty: l,
    presencePenalty: u,
    stopSequences: c,
    responseFormat: d,
    seed: f
  }) {
    var b;
    const T = e.type, h = [];
    o != null && h.push({
      type: "unsupported-setting",
      setting: "topK"
    }), d != null && d.type !== "text" && h.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: p, stopSequences: m } = Wp({ prompt: r, inputFormat: t }), v = [...m ?? [], ...c ?? []], w = {
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
      frequency_penalty: l,
      presence_penalty: u,
      seed: f,
      // prompt:
      prompt: p,
      // stop sequences:
      stop: v.length > 0 ? v : void 0
    };
    switch (T) {
      case "regular": {
        if ((b = e.tools) != null && b.length)
          throw new B({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new B({
            functionality: "toolChoice"
          });
        return { args: w, warnings: h };
      }
      case "object-json":
        throw new B({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new B({
          functionality: "object-tool mode"
        });
      default: {
        const I = T;
        throw new Error(`Unsupported type: ${I}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await ge({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: pt,
      successfulResponseHandler: Xe(
        Yp
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...o } = t, l = a.choices[0];
    return {
      text: l.text,
      usage: {
        promptTokens: a.usage.prompt_tokens,
        completionTokens: a.usage.completion_tokens
      },
      finishReason: yr(l.finish_reason),
      logprobs: ha(l.logprobs),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      response: vr(a),
      warnings: r,
      request: { body: JSON.stringify(t) }
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = {
      ...t,
      stream: !0,
      // only include stream_options when in strict compatibility mode:
      stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
    }, { responseHeaders: a, value: s } = await ge({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: pt,
      successfulResponseHandler: br(
        Kp
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: o, ...l } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d, f = !0;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(b, T) {
            if (!b.success) {
              u = "error", T.enqueue({ type: "error", error: b.error });
              return;
            }
            const h = b.value;
            if ("error" in h) {
              u = "error", T.enqueue({ type: "error", error: h.error });
              return;
            }
            f && (f = !1, T.enqueue({
              type: "response-metadata",
              ...vr(h)
            })), h.usage != null && (c = {
              promptTokens: h.usage.prompt_tokens,
              completionTokens: h.usage.completion_tokens
            });
            const p = h.choices[0];
            (p == null ? void 0 : p.finish_reason) != null && (u = yr(p.finish_reason)), (p == null ? void 0 : p.text) != null && T.enqueue({
              type: "text-delta",
              textDelta: p.text
            });
            const m = ha(
              p == null ? void 0 : p.logprobs
            );
            m != null && m.length && (d === void 0 && (d = []), d.push(...m));
          },
          flush(b) {
            b.enqueue({
              type: "finish",
              finishReason: u,
              logprobs: d,
              usage: c
            });
          }
        })
      ),
      rawCall: { rawPrompt: o, rawSettings: l },
      rawResponse: { headers: a },
      warnings: r,
      request: { body: JSON.stringify(n) }
    };
  }
}, Yp = i.object({
  id: i.string().nullish(),
  created: i.number().nullish(),
  model: i.string().nullish(),
  choices: i.array(
    i.object({
      text: i.string(),
      finish_reason: i.string(),
      logprobs: i.object({
        tokens: i.array(i.string()),
        token_logprobs: i.array(i.number()),
        top_logprobs: i.array(i.record(i.string(), i.number())).nullable()
      }).nullish()
    })
  ),
  usage: i.object({
    prompt_tokens: i.number(),
    completion_tokens: i.number()
  })
}), Kp = i.union([
  i.object({
    id: i.string().nullish(),
    created: i.number().nullish(),
    model: i.string().nullish(),
    choices: i.array(
      i.object({
        text: i.string(),
        finish_reason: i.string().nullish(),
        index: i.number(),
        logprobs: i.object({
          tokens: i.array(i.string()),
          token_logprobs: i.array(i.number()),
          top_logprobs: i.array(i.record(i.string(), i.number())).nullable()
        }).nullish()
      })
    ),
    usage: i.object({
      prompt_tokens: i.number(),
      completion_tokens: i.number()
    }).nullish()
  }),
  In
]), Xp = class {
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
      throw new Ha({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await ge({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: pt,
      successfulResponseHandler: Xe(
        Qp
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
}, Qp = i.object({
  data: i.array(i.object({ embedding: i.array(i.number()) })),
  usage: i.object({ prompt_tokens: i.number() }).nullish()
}), ef = {
  "dall-e-3": 1,
  "dall-e-2": 10
}, tf = class {
  constructor(e, t, r) {
    this.modelId = e, this.settings = t, this.config = r, this.specificationVersion = "v1";
  }
  get maxImagesPerCall() {
    var e, t;
    return (t = (e = this.settings.maxImagesPerCall) != null ? e : ef[this.modelId]) != null ? t : 1;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: r,
    aspectRatio: n,
    seed: a,
    providerOptions: s,
    headers: o,
    abortSignal: l
  }) {
    var u, c, d, f;
    const b = [];
    n != null && b.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), a != null && b.push({ type: "unsupported-setting", setting: "seed" });
    const T = (d = (c = (u = this.config._internal) == null ? void 0 : u.currentDate) == null ? void 0 : c.call(u)) != null ? d : /* @__PURE__ */ new Date(), { value: h, responseHeaders: p } = await ge({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), o),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: r,
        ...(f = s.openai) != null ? f : {},
        response_format: "b64_json"
      },
      failedResponseHandler: pt,
      successfulResponseHandler: Xe(
        rf
      ),
      abortSignal: l,
      fetch: this.config.fetch
    });
    return {
      images: h.data.map((m) => m.b64_json),
      warnings: b,
      response: {
        timestamp: T,
        modelId: this.modelId,
        headers: p
      }
    };
  }
}, rf = i.object({
  data: i.array(i.object({ b64_json: i.string() }))
});
function nf(e = {}) {
  var t, r, n;
  const a = (t = hn(e.baseURL)) != null ? t : "https://api.openai.com/v1", s = (r = e.compatibility) != null ? r : "compatible", o = (n = e.name) != null ? n : "openai", l = () => ({
    Authorization: `Bearer ${fn({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), u = (h, p = {}) => new Bp(h, p, {
    provider: `${o}.chat`,
    url: ({ path: m }) => `${a}${m}`,
    headers: l,
    compatibility: s,
    fetch: e.fetch
  }), c = (h, p = {}) => new Gp(h, p, {
    provider: `${o}.completion`,
    url: ({ path: m }) => `${a}${m}`,
    headers: l,
    compatibility: s,
    fetch: e.fetch
  }), d = (h, p = {}) => new Xp(h, p, {
    provider: `${o}.embedding`,
    url: ({ path: m }) => `${a}${m}`,
    headers: l,
    fetch: e.fetch
  }), f = (h, p = {}) => new tf(h, p, {
    provider: `${o}.image`,
    url: ({ path: m }) => `${a}${m}`,
    headers: l,
    fetch: e.fetch
  }), b = (h, p) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return h === "gpt-3.5-turbo-instruct" ? c(
      h,
      p
    ) : u(h, p);
  }, T = function(h, p) {
    return b(h, p);
  };
  return T.languageModel = b, T.chat = u, T.completion = c, T.embedding = d, T.textEmbedding = d, T.textEmbeddingModel = d, T.image = f, T.imageModel = f, T;
}
nf({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  R as AISDKError,
  Np as createAnthropic,
  Lp as createMistral,
  nf as createOpenAI,
  sf as streamText
};
