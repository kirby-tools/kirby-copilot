let Ya = (e, t = 21) => (r = t) => {
  let n = "", a = r;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
var On = "vercel.ai.error", Xa = Symbol.for(On), Mn, Qa = class $n extends Error {
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
    super(r), this[Mn] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return $n.hasMarker(t, On);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
  /**
   * Returns a JSON representation of the error.
   * @returns {Object} An object containing the error's name, message, and cause.
   *
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message
    };
  }
};
Mn = Xa;
var j = Qa, vr = "AI_APICallError", Zn = `vercel.ai.error.${vr}`, es = Symbol.for(Zn), Dn, ae = class extends j {
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
    data: u
  }) {
    super({ name: vr, message: e, cause: o }), this[Dn] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return j.hasMarker(e, Zn);
  }
  /**
   * @deprecated Use isInstance instead.
   */
  static isAPICallError(e) {
    return e instanceof Error && e.name === vr && typeof e.url == "string" && typeof e.requestBodyValues == "object" && (e.statusCode == null || typeof e.statusCode == "number") && (e.responseHeaders == null || typeof e.responseHeaders == "object") && (e.responseBody == null || typeof e.responseBody == "string") && (e.cause == null || typeof e.cause == "object") && typeof e.isRetryable == "boolean" && (e.data == null || typeof e.data == "object");
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
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
};
Dn = es;
var _r = "AI_EmptyResponseBodyError", Ln = `vercel.ai.error.${_r}`, ts = Symbol.for(Ln), Un, rs = class extends j {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: _r, message: e }), this[Un] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ln);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isEmptyResponseBodyError(e) {
    return e instanceof Error && e.name === _r;
  }
};
Un = ts;
function Fr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var br = "AI_InvalidPromptError", qn = `vercel.ai.error.${br}`, ns = Symbol.for(qn), Vn, Ue = class extends j {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: br, message: `Invalid prompt: ${t}`, cause: r }), this[Vn] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, qn);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isInvalidPromptError(e) {
    return e instanceof Error && e.name === br && prompt != null;
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      prompt: this.prompt
    };
  }
};
Vn = ns;
var wr = "AI_InvalidResponseDataError", Bn = `vercel.ai.error.${wr}`, as = Symbol.for(Bn), zn, dr = class extends j {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: wr, message: t }), this[zn] = !0, this.data = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Bn);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isInvalidResponseDataError(e) {
    return e instanceof Error && e.name === wr && e.data != null;
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      data: this.data
    };
  }
};
zn = as;
var xr = "AI_JSONParseError", Jn = `vercel.ai.error.${xr}`, ss = Symbol.for(Jn), Hn, Bt = class extends j {
  constructor({ text: e, cause: t }) {
    super({
      name: xr,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Fr(t)}`,
      cause: t
    }), this[Hn] = !0, this.text = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Jn);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isJSONParseError(e) {
    return e instanceof Error && e.name === xr && "text" in e && typeof e.text == "string";
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      cause: this.cause,
      stack: this.stack,
      valueText: this.text
    };
  }
};
Hn = ss;
var kr = "AI_LoadAPIKeyError", Fn = `vercel.ai.error.${kr}`, os = Symbol.for(Fn), Wn, Ut = class extends j {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: kr, message: e }), this[Wn] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Fn);
  }
  /**
   * @deprecated Use isInstance instead.
   */
  static isLoadAPIKeyError(e) {
    return e instanceof Error && e.name === kr;
  }
};
Wn = os;
var Tr = "AI_NoSuchModelError", Gn = `vercel.ai.error.${Tr}`, is = Symbol.for(Gn), Kn, ls = class extends j {
  constructor({
    errorName: e = Tr,
    modelId: t,
    modelType: r,
    message: n = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: n }), this[Kn] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, Gn);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isNoSuchModelError(e) {
    return e instanceof Error && e.name === Tr && typeof e.modelId == "string" && typeof e.modelType == "string";
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      modelId: this.modelId,
      modelType: this.modelType
    };
  }
};
Kn = is;
var Sr = "AI_TooManyEmbeddingValuesForCallError", Yn = `vercel.ai.error.${Sr}`, us = Symbol.for(Yn), Xn, Qn = class extends j {
  constructor(e) {
    super({
      name: Sr,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[Xn] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return j.hasMarker(e, Yn);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isTooManyEmbeddingValuesForCallError(e) {
    return e instanceof Error && e.name === Sr && "provider" in e && typeof e.provider == "string" && "modelId" in e && typeof e.modelId == "string" && "maxEmbeddingsPerCall" in e && typeof e.maxEmbeddingsPerCall == "number" && "values" in e && Array.isArray(e.values);
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
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
};
Xn = us;
var Cr = "AI_TypeValidationError", ea = `vercel.ai.error.${Cr}`, cs = Symbol.for(ea), ta, ds = class Er extends j {
  constructor({ value: t, cause: r }) {
    super({
      name: Cr,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Fr(r)}`,
      cause: r
    }), this[ta] = !0, this.value = t;
  }
  static isInstance(t) {
    return j.hasMarker(t, ea);
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
    return Er.isInstance(r) && r.value === t ? r : new Er({ value: t, cause: r });
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isTypeValidationError(t) {
    return t instanceof Error && t.name === Cr;
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      cause: this.cause,
      stack: this.stack,
      value: this.value
    };
  }
};
ta = cs;
var zt = ds, Ir = "AI_UnsupportedFunctionalityError", ra = `vercel.ai.error.${Ir}`, ps = Symbol.for(ra), na, L = class extends j {
  constructor({ functionality: e }) {
    super({
      name: Ir,
      message: `'${e}' functionality not supported.`
    }), this[na] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ra);
  }
  /**
   * @deprecated Use isInstance instead.
   */
  static isUnsupportedFunctionalityError(e) {
    return e instanceof Error && e.name === Ir && typeof e.functionality == "string";
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      functionality: this.functionality
    };
  }
};
na = ps;
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ge = { exports: {} };
const fs = typeof Buffer < "u", dn = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, pn = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function aa(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), fs && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (dn.test(e) === !1 && pn.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (dn.test(e) === !1)
      return n;
  } else if (pn.test(e) === !1)
    return n;
  return sa(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function sa(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
        const u = o[i];
        u && typeof u == "object" && a.push(u);
      }
    }
  }
  return e;
}
function Wr(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return aa(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function hs(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return aa(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
Ge.exports = Wr;
Ge.exports.default = Wr;
Ge.exports.parse = Wr;
Ge.exports.safeParse = hs;
Ge.exports.scan = sa;
var gs = Ge.exports;
const Gr = /* @__PURE__ */ ms(gs);
function ys(e) {
  let t, r, n, a, s, o, i;
  return u(), {
    feed: c,
    reset: u
  };
  function u() {
    t = !0, r = "", n = 0, a = -1, s = void 0, o = void 0, i = "";
  }
  function c(m) {
    r = r ? r + m : m, t && vs(r) && (r = r.slice(oa.length)), t = !1;
    const f = r.length;
    let p = 0, y = !1;
    for (; p < f; ) {
      y && (r[p] === `
` && ++p, y = !1);
      let w = -1, k = a, T;
      for (let b = n; w < 0 && b < f; ++b)
        T = r[b], T === ":" && k < 0 ? k = b - p : T === "\r" ? (y = !0, w = b - p) : T === `
` && (w = b - p);
      if (w < 0) {
        n = f - p, a = k;
        break;
      } else
        n = 0, a = -1;
      d(r, p, k, w), p += w + 1;
    }
    p === f ? r = "" : p > 0 && (r = r.slice(p));
  }
  function d(m, f, p, y) {
    if (y === 0) {
      i.length > 0 && (e({
        type: "event",
        id: s,
        event: o || void 0,
        data: i.slice(0, -1)
        // remove trailing newline
      }), i = "", s = void 0), o = void 0;
      return;
    }
    const w = p < 0, k = m.slice(f, f + (w ? y : p));
    let T = 0;
    w ? T = y : m[f + p + 1] === " " ? T = p + 2 : T = p + 1;
    const b = f + T, I = y - T, P = m.slice(b, b + I).toString();
    if (k === "data")
      i += P ? "".concat(P, `
`) : `
`;
    else if (k === "event")
      o = P;
    else if (k === "id" && !P.includes("\0"))
      s = P;
    else if (k === "retry") {
      const H = parseInt(P, 10);
      Number.isNaN(H) || e({
        type: "reconnect-interval",
        value: H
      });
    }
  }
}
const oa = [239, 187, 191];
function vs(e) {
  return oa.every((t, r) => e.charCodeAt(r) === t);
}
class _s extends TransformStream {
  constructor() {
    let t;
    super({
      start(r) {
        t = ys((n) => {
          n.type === "event" && r.enqueue(n);
        });
      },
      transform(r) {
        t.feed(r);
      }
    });
  }
}
function fe(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function sr(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var ia = ({
  prefix: e = "",
  length: t = 7,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
} = {}) => {
  const n = Ya(r, t);
  return () => `${e}${n()}`;
}, qe = ia();
function la(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function Vt(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Kr({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new Ut({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new Ut({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new Ut({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new Ut({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var Jt = Symbol.for("vercel.ai.validator");
function bs(e) {
  return { [Jt]: !0, validate: e };
}
function ws(e) {
  return typeof e == "object" && e !== null && Jt in e && e[Jt] === !0 && "validate" in e;
}
function xs(e) {
  return ws(e) ? e : ks(e);
}
function ks(e) {
  return bs((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function Ts({
  value: e,
  schema: t
}) {
  const r = Yr({ value: e, schema: t });
  if (!r.success)
    throw zt.wrap({ value: e, cause: r.error });
  return r.value;
}
function Yr({
  value: e,
  schema: t
}) {
  const r = xs(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: zt.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: zt.wrap({ value: e, cause: n })
    };
  }
}
function Ss({
  text: e,
  schema: t
}) {
  try {
    const r = Gr.parse(e);
    return t == null ? r : Ts({ value: r, schema: t });
  } catch (r) {
    throw Bt.isJSONParseError(r) || zt.isTypeValidationError(r) ? r : new Bt({ text: e, cause: r });
  }
}
function Xr({
  text: e,
  schema: t
}) {
  try {
    const r = Gr.parse(e);
    return t == null ? {
      success: !0,
      value: r
    } : Yr({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: Bt.isJSONParseError(r) ? r : new Bt({ text: e, cause: r })
    };
  }
}
function mn(e) {
  try {
    return Gr.parse(e), !0;
  } catch {
    return !1;
  }
}
function Cs(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var Es = () => globalThis.fetch, oe = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => Is({
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
}), Is = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = Es()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: Cs(t),
      body: r.content,
      signal: s
    }), u = sr(i);
    if (!i.ok) {
      let c;
      try {
        c = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw Vt(d) || ae.isAPICallError(d) ? d : new ae({
          message: "Failed to process error response",
          cause: d,
          statusCode: i.status,
          url: e,
          responseHeaders: u,
          requestBodyValues: r.values
        });
      }
      throw c.value;
    }
    try {
      return await n({
        response: i,
        url: e,
        requestBodyValues: r.values
      });
    } catch (c) {
      throw c instanceof Error && (Vt(c) || ae.isAPICallError(c)) ? c : new ae({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (Vt(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const u = i.cause;
      if (u != null)
        throw new ae({
          message: `Cannot connect to API: ${u.message}`,
          cause: u,
          url: e,
          requestBodyValues: r.values,
          isRetryable: !0
          // retry when network error
        });
    }
    throw i;
  }
}, Qr = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), i = sr(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new ae({
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
    const u = Ss({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new ae({
        message: t(u),
        url: a,
        requestBodyValues: s,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: o,
        data: u,
        isRetryable: r == null ? void 0 : r(n, u)
      })
    };
  } catch {
    return {
      responseHeaders: i,
      value: new ae({
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
}, or = (e) => async ({ response: t }) => {
  const r = sr(t);
  if (t.body == null)
    throw new rs({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new _s()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            Xr({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, Ke = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = Xr({
    text: a,
    schema: e
  }), o = sr(t);
  if (!s.success)
    throw new ae({
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
}, { btoa: Ns, atob: js } = globalThis;
function As(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = js(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function ua(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return Ns(t);
}
function en(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
const Rs = Symbol("Let zodToJsonSchema decide on which parser to use"), Ps = {
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
}, Os = (e) => ({
  ...Ps,
  ...e
}), Ms = (e) => {
  const t = Os(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function ca(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function R(e, t, r, n, a) {
  e[t] = r, ca(e, t, n, a);
}
var N;
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
})(N || (N = {}));
var Nr;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Nr || (Nr = {}));
const _ = N.arrayToEnum([
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
]), be = (e) => {
  switch (typeof e) {
    case "undefined":
      return _.undefined;
    case "string":
      return _.string;
    case "number":
      return isNaN(e) ? _.nan : _.number;
    case "boolean":
      return _.boolean;
    case "function":
      return _.function;
    case "bigint":
      return _.bigint;
    case "symbol":
      return _.symbol;
    case "object":
      return Array.isArray(e) ? _.array : e === null ? _.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? _.promise : typeof Map < "u" && e instanceof Map ? _.map : typeof Set < "u" && e instanceof Set ? _.set : typeof Date < "u" && e instanceof Date ? _.date : _.object;
    default:
      return _.unknown;
  }
}, h = N.arrayToEnum([
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
]), $s = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class z extends Error {
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
          let i = n, u = 0;
          for (; u < o.path.length; ) {
            const c = o.path[u];
            u === o.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(r(o))) : i[c] = i[c] || { _errors: [] }, i = i[c], u++;
          }
        }
    };
    return a(this), n;
  }
  static assert(t) {
    if (!(t instanceof z))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, N.jsonStringifyReplacer, 2);
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
z.create = (e) => new z(e);
const Je = (e, t) => {
  let r;
  switch (e.code) {
    case h.invalid_type:
      e.received === _.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case h.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, N.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${N.joinValues(e.keys, ", ")}`;
      break;
    case h.invalid_union:
      r = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${N.joinValues(e.options)}`;
      break;
    case h.invalid_enum_value:
      r = `Invalid enum value. Expected ${N.joinValues(e.options)}, received '${e.received}'`;
      break;
    case h.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case h.invalid_return_type:
      r = "Invalid function return type";
      break;
    case h.invalid_date:
      r = "Invalid date";
      break;
    case h.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : N.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case h.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case h.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case h.custom:
      r = "Invalid input";
      break;
    case h.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case h.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case h.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, N.assertNever(e);
  }
  return { message: r };
};
let da = Je;
function Zs(e) {
  da = e;
}
function Ht() {
  return da;
}
const Ft = (e) => {
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
  const u = n.filter((c) => !!c).slice().reverse();
  for (const c of u)
    i = c(o, { data: t, defaultError: i }).message;
  return {
    ...a,
    path: s,
    message: i
  };
}, Ds = [];
function v(e, t) {
  const r = Ht(), n = Ft({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      r,
      r === Je ? void 0 : Je
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(n);
}
class D {
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
        return S;
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
    return D.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: s, value: o } = a;
      if (s.status === "aborted" || o.status === "aborted")
        return S;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const S = Object.freeze({
  status: "aborted"
}), Be = (e) => ({ status: "dirty", value: e }), U = (e) => ({ status: "valid", value: e }), jr = (e) => e.status === "aborted", Ar = (e) => e.status === "dirty", nt = (e) => e.status === "valid", at = (e) => typeof Promise < "u" && e instanceof Promise;
function Wt(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function pa(e, t, r, n, a) {
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var x;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(x || (x = {}));
var et, tt;
class ie {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const fn = (e, t) => {
  if (nt(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new z(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function C(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: a } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (o, i) => {
    var u, c;
    const { message: d } = e;
    return o.code === "invalid_enum_value" ? { message: d ?? i.defaultError } : typeof i.data > "u" ? { message: (u = d ?? n) !== null && u !== void 0 ? u : i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: (c = d ?? r) !== null && c !== void 0 ? c : i.defaultError };
  }, description: a };
}
class E {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return be(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: be(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new D(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: be(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (at(r))
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
      parsedType: be(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return fn(a, s);
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
      parsedType: be(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (at(a) ? a : Promise.resolve(a));
    return fn(n, s);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, s) => {
      const o = t(a), i = () => s.addIssue({
        code: h.custom,
        ...n(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new ee({
      schema: this,
      typeName: g.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return se.create(this, this._def);
  }
  nullable() {
    return Te.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Q.create(this, this._def);
  }
  promise() {
    return Fe.create(this, this._def);
  }
  or(t) {
    return lt.create([this, t], this._def);
  }
  and(t) {
    return ut.create(this, t, this._def);
  }
  transform(t) {
    return new ee({
      ...C(this._def),
      schema: this,
      typeName: g.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new ft({
      ...C(this._def),
      innerType: this,
      defaultValue: r,
      typeName: g.ZodDefault
    });
  }
  brand() {
    return new tn({
      typeName: g.ZodBranded,
      type: this,
      ...C(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new ht({
      ...C(this._def),
      innerType: this,
      catchValue: r,
      typeName: g.ZodCatch
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
    return $t.create(this, t);
  }
  readonly() {
    return gt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ls = /^c[^\s-]{8,}$/i, Us = /^[0-9a-z]+$/, qs = /^[0-9A-HJKMNP-TV-Z]{26}$/, Vs = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Bs = /^[a-z0-9_-]{21}$/i, zs = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Js = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Hs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let pr;
const Fs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ws = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Gs = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ma = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Ks = new RegExp(`^${ma}$`);
function fa(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Ys(e) {
  return new RegExp(`^${fa(e)}$`);
}
function ha(e) {
  let t = `${ma}T${fa(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function Xs(e, t) {
  return !!((t === "v4" || !t) && Fs.test(e) || (t === "v6" || !t) && Ws.test(e));
}
class X extends E {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== _.string) {
      const s = this._getOrReturnCtx(t);
      return v(s, {
        code: h.invalid_type,
        expected: _.string,
        received: s.parsedType
      }), S;
    }
    const n = new D();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), v(a, {
          code: h.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), v(a, {
          code: h.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (a = this._getOrReturnCtx(t, a), o ? v(a, {
          code: h.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && v(a, {
          code: h.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Js.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
          validation: "email",
          code: h.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        pr || (pr = new RegExp(Hs, "u")), pr.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
          validation: "emoji",
          code: h.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Vs.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
          validation: "uuid",
          code: h.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Bs.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
          validation: "nanoid",
          code: h.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Ls.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
          validation: "cuid",
          code: h.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Us.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
          validation: "cuid2",
          code: h.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        qs.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
          validation: "ulid",
          code: h.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), v(a, {
            validation: "url",
            code: h.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
        validation: "regex",
        code: h.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? ha(s).test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Ks.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Ys(s).test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? zs.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
        validation: "duration",
        code: h.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Xs(t.data, s.version) || (a = this._getOrReturnCtx(t, a), v(a, {
        validation: "ip",
        code: h.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Gs.test(t.data) || (a = this._getOrReturnCtx(t, a), v(a, {
        validation: "base64",
        code: h.invalid_string,
        message: s.message
      }), n.dirty()) : N.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: h.invalid_string,
      ...x.errToObj(n)
    });
  }
  _addCheck(t) {
    return new X({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...x.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...x.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...x.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...x.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...x.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...x.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...x.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...x.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...x.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...x.errToObj(t) });
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
      ...x.errToObj(t == null ? void 0 : t.message)
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
      ...x.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...x.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...x.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...x.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...x.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...x.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...x.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...x.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...x.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, x.errToObj(t));
  }
  trim() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new X({
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
X.create = (e) => {
  var t;
  return new X({
    checks: [],
    typeName: g.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...C(e)
  });
};
function Qs(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class we extends E {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== _.number) {
      const s = this._getOrReturnCtx(t);
      return v(s, {
        code: h.invalid_type,
        expected: _.number,
        received: s.parsedType
      }), S;
    }
    let n;
    const a = new D();
    for (const s of this._def.checks)
      s.kind === "int" ? N.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? Qs(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.not_finite,
        message: s.message
      }), a.dirty()) : N.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, x.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, x.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, x.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, x.toString(r));
  }
  setLimit(t, r, n, a) {
    return new we({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: x.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new we({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: x.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: x.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: x.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: x.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: x.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: x.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: x.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: x.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: x.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && N.isInteger(t.value));
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
we.create = (e) => new we({
  checks: [],
  typeName: g.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...C(e)
});
class xe extends E {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== _.bigint) {
      const s = this._getOrReturnCtx(t);
      return v(s, {
        code: h.invalid_type,
        expected: _.bigint,
        received: s.parsedType
      }), S;
    }
    let n;
    const a = new D();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), v(n, {
        code: h.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : N.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, x.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, x.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, x.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, x.toString(r));
  }
  setLimit(t, r, n, a) {
    return new xe({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: x.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new xe({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: x.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: x.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: x.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: x.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: x.toString(r)
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
xe.create = (e) => {
  var t;
  return new xe({
    checks: [],
    typeName: g.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...C(e)
  });
};
class st extends E {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== _.boolean) {
      const n = this._getOrReturnCtx(t);
      return v(n, {
        code: h.invalid_type,
        expected: _.boolean,
        received: n.parsedType
      }), S;
    }
    return U(t.data);
  }
}
st.create = (e) => new st({
  typeName: g.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...C(e)
});
class Re extends E {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== _.date) {
      const s = this._getOrReturnCtx(t);
      return v(s, {
        code: h.invalid_type,
        expected: _.date,
        received: s.parsedType
      }), S;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return v(s, {
        code: h.invalid_date
      }), S;
    }
    const n = new D();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), v(a, {
        code: h.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : N.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Re({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: x.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: x.toString(r)
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
Re.create = (e) => new Re({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: g.ZodDate,
  ...C(e)
});
class Gt extends E {
  _parse(t) {
    if (this._getType(t) !== _.symbol) {
      const n = this._getOrReturnCtx(t);
      return v(n, {
        code: h.invalid_type,
        expected: _.symbol,
        received: n.parsedType
      }), S;
    }
    return U(t.data);
  }
}
Gt.create = (e) => new Gt({
  typeName: g.ZodSymbol,
  ...C(e)
});
class ot extends E {
  _parse(t) {
    if (this._getType(t) !== _.undefined) {
      const n = this._getOrReturnCtx(t);
      return v(n, {
        code: h.invalid_type,
        expected: _.undefined,
        received: n.parsedType
      }), S;
    }
    return U(t.data);
  }
}
ot.create = (e) => new ot({
  typeName: g.ZodUndefined,
  ...C(e)
});
class it extends E {
  _parse(t) {
    if (this._getType(t) !== _.null) {
      const n = this._getOrReturnCtx(t);
      return v(n, {
        code: h.invalid_type,
        expected: _.null,
        received: n.parsedType
      }), S;
    }
    return U(t.data);
  }
}
it.create = (e) => new it({
  typeName: g.ZodNull,
  ...C(e)
});
class He extends E {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return U(t.data);
  }
}
He.create = (e) => new He({
  typeName: g.ZodAny,
  ...C(e)
});
class Ae extends E {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return U(t.data);
  }
}
Ae.create = (e) => new Ae({
  typeName: g.ZodUnknown,
  ...C(e)
});
class he extends E {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return v(r, {
      code: h.invalid_type,
      expected: _.never,
      received: r.parsedType
    }), S;
  }
}
he.create = (e) => new he({
  typeName: g.ZodNever,
  ...C(e)
});
class Kt extends E {
  _parse(t) {
    if (this._getType(t) !== _.undefined) {
      const n = this._getOrReturnCtx(t);
      return v(n, {
        code: h.invalid_type,
        expected: _.void,
        received: n.parsedType
      }), S;
    }
    return U(t.data);
  }
}
Kt.create = (e) => new Kt({
  typeName: g.ZodVoid,
  ...C(e)
});
class Q extends E {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== _.array)
      return v(r, {
        code: h.invalid_type,
        expected: _.array,
        received: r.parsedType
      }), S;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, i = r.data.length < a.exactLength.value;
      (o || i) && (v(r, {
        code: o ? h.too_big : h.too_small,
        minimum: i ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (v(r, {
      code: h.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (v(r, {
      code: h.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => a.type._parseAsync(new ie(r, o, r.path, i)))).then((o) => D.mergeArray(n, o));
    const s = [...r.data].map((o, i) => a.type._parseSync(new ie(r, o, r.path, i)));
    return D.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new Q({
      ...this._def,
      minLength: { value: t, message: x.toString(r) }
    });
  }
  max(t, r) {
    return new Q({
      ...this._def,
      maxLength: { value: t, message: x.toString(r) }
    });
  }
  length(t, r) {
    return new Q({
      ...this._def,
      exactLength: { value: t, message: x.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Q.create = (e, t) => new Q({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: g.ZodArray,
  ...C(t)
});
function Ve(e) {
  if (e instanceof M) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = se.create(Ve(n));
    }
    return new M({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Q ? new Q({
    ...e._def,
    type: Ve(e.element)
  }) : e instanceof se ? se.create(Ve(e.unwrap())) : e instanceof Te ? Te.create(Ve(e.unwrap())) : e instanceof le ? le.create(e.items.map((t) => Ve(t))) : e;
}
class M extends E {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = N.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== _.object) {
      const c = this._getOrReturnCtx(t);
      return v(c, {
        code: h.invalid_type,
        expected: _.object,
        received: c.parsedType
      }), S;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof he && this._def.unknownKeys === "strip"))
      for (const c in a.data)
        o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], m = a.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new ie(a, m, a.path, c)),
        alwaysSet: c in a.data
      });
    }
    if (this._def.catchall instanceof he) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of i)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: a.data[d] }
          });
      else if (c === "strict")
        i.length > 0 && (v(a, {
          code: h.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of i) {
        const m = a.data[d];
        u.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new ie(a, m, a.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of u) {
        const m = await d.key, f = await d.value;
        c.push({
          key: m,
          value: f,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => D.mergeObjectSync(n, c)) : D.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return x.errToObj, new M({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, s, o, i;
          const u = (o = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = x.errToObj(t).message) !== null && i !== void 0 ? i : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new M({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new M({
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
    return new M({
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
    return new M({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: g.ZodObject
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
    return new M({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return N.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new M({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return N.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new M({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ve(this);
  }
  partial(t) {
    const r = {};
    return N.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new M({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return N.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof se; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new M({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return ga(N.objectKeys(this.shape));
  }
}
M.create = (e, t) => new M({
  shape: () => e,
  unknownKeys: "strip",
  catchall: he.create(),
  typeName: g.ZodObject,
  ...C(t)
});
M.strictCreate = (e, t) => new M({
  shape: () => e,
  unknownKeys: "strict",
  catchall: he.create(),
  typeName: g.ZodObject,
  ...C(t)
});
M.lazycreate = (e, t) => new M({
  shape: e,
  unknownKeys: "strip",
  catchall: he.create(),
  typeName: g.ZodObject,
  ...C(t)
});
class lt extends E {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new z(i.ctx.common.issues));
      return v(r, {
        code: h.invalid_union,
        unionErrors: o
      }), S;
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
      const i = o.map((u) => new z(u));
      return v(r, {
        code: h.invalid_union,
        unionErrors: i
      }), S;
    }
  }
  get options() {
    return this._def.options;
  }
}
lt.create = (e, t) => new lt({
  options: e,
  typeName: g.ZodUnion,
  ...C(t)
});
const pe = (e) => e instanceof dt ? pe(e.schema) : e instanceof ee ? pe(e.innerType()) : e instanceof pt ? [e.value] : e instanceof ke ? e.options : e instanceof mt ? N.objectValues(e.enum) : e instanceof ft ? pe(e._def.innerType) : e instanceof ot ? [void 0] : e instanceof it ? [null] : e instanceof se ? [void 0, ...pe(e.unwrap())] : e instanceof Te ? [null, ...pe(e.unwrap())] : e instanceof tn || e instanceof gt ? pe(e.unwrap()) : e instanceof ht ? pe(e._def.innerType) : [];
class ir extends E {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _.object)
      return v(r, {
        code: h.invalid_type,
        expected: _.object,
        received: r.parsedType
      }), S;
    const n = this.discriminator, a = r.data[n], s = this.optionsMap.get(a);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (v(r, {
      code: h.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), S);
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
      const o = pe(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (a.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        a.set(i, s);
      }
    }
    return new ir({
      typeName: g.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...C(n)
    });
  }
}
function Rr(e, t) {
  const r = be(e), n = be(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === _.object && n === _.object) {
    const a = N.objectKeys(t), s = N.objectKeys(e).filter((i) => a.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const u = Rr(e[i], t[i]);
      if (!u.valid)
        return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === _.array && n === _.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], u = Rr(o, i);
      if (!u.valid)
        return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else return r === _.date && n === _.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ut extends E {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (jr(s) || jr(o))
        return S;
      const i = Rr(s.value, o.value);
      return i.valid ? ((Ar(s) || Ar(o)) && r.dirty(), { status: r.value, value: i.data }) : (v(n, {
        code: h.invalid_intersection_types
      }), S);
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
ut.create = (e, t, r) => new ut({
  left: e,
  right: t,
  typeName: g.ZodIntersection,
  ...C(r)
});
class le extends E {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _.array)
      return v(n, {
        code: h.invalid_type,
        expected: _.array,
        received: n.parsedType
      }), S;
    if (n.data.length < this._def.items.length)
      return v(n, {
        code: h.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), S;
    !this._def.rest && n.data.length > this._def.items.length && (v(n, {
      code: h.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, i) => {
      const u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new ie(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => D.mergeArray(r, o)) : D.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new le({
      ...this._def,
      rest: t
    });
  }
}
le.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new le({
    items: e,
    typeName: g.ZodTuple,
    rest: null,
    ...C(t)
  });
};
class ct extends E {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _.object)
      return v(n, {
        code: h.invalid_type,
        expected: _.object,
        received: n.parsedType
      }), S;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      a.push({
        key: s._parse(new ie(n, i, n.path, i)),
        value: o._parse(new ie(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? D.mergeObjectAsync(r, a) : D.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof E ? new ct({
      keyType: t,
      valueType: r,
      typeName: g.ZodRecord,
      ...C(n)
    }) : new ct({
      keyType: X.create(),
      valueType: t,
      typeName: g.ZodRecord,
      ...C(r)
    });
  }
}
class Yt extends E {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _.map)
      return v(n, {
        code: h.invalid_type,
        expected: _.map,
        received: n.parsedType
      }), S;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([i, u], c) => ({
      key: a._parse(new ie(n, i, n.path, [c, "key"])),
      value: s._parse(new ie(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key, d = await u.value;
          if (c.status === "aborted" || d.status === "aborted")
            return S;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(c.value, d.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const u of o) {
        const c = u.key, d = u.value;
        if (c.status === "aborted" || d.status === "aborted")
          return S;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(c.value, d.value);
      }
      return { status: r.value, value: i };
    }
  }
}
Yt.create = (e, t, r) => new Yt({
  valueType: t,
  keyType: e,
  typeName: g.ZodMap,
  ...C(r)
});
class Pe extends E {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _.set)
      return v(n, {
        code: h.invalid_type,
        expected: _.set,
        received: n.parsedType
      }), S;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (v(n, {
      code: h.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (v(n, {
      code: h.too_big,
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
          return S;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const i = [...n.data.values()].map((u, c) => s._parse(new ie(n, u, n.path, c)));
    return n.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(t, r) {
    return new Pe({
      ...this._def,
      minSize: { value: t, message: x.toString(r) }
    });
  }
  max(t, r) {
    return new Pe({
      ...this._def,
      maxSize: { value: t, message: x.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Pe.create = (e, t) => new Pe({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: g.ZodSet,
  ...C(t)
});
class ze extends E {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _.function)
      return v(r, {
        code: h.invalid_type,
        expected: _.function,
        received: r.parsedType
      }), S;
    function n(i, u) {
      return Ft({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ht(),
          Je
        ].filter((c) => !!c),
        issueData: {
          code: h.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function a(i, u) {
      return Ft({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ht(),
          Je
        ].filter((c) => !!c),
        issueData: {
          code: h.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof Fe) {
      const i = this;
      return U(async function(...u) {
        const c = new z([]), d = await i._def.args.parseAsync(u, s).catch((p) => {
          throw c.addIssue(n(u, p)), c;
        }), m = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(m, s).catch((p) => {
          throw c.addIssue(a(m, p)), c;
        });
      });
    } else {
      const i = this;
      return U(function(...u) {
        const c = i._def.args.safeParse(u, s);
        if (!c.success)
          throw new z([n(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), m = i._def.returns.safeParse(d, s);
        if (!m.success)
          throw new z([a(d, m.error)]);
        return m.data;
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
    return new ze({
      ...this._def,
      args: le.create(t).rest(Ae.create())
    });
  }
  returns(t) {
    return new ze({
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
    return new ze({
      args: t || le.create([]).rest(Ae.create()),
      returns: r || Ae.create(),
      typeName: g.ZodFunction,
      ...C(n)
    });
  }
}
class dt extends E {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
dt.create = (e, t) => new dt({
  getter: e,
  typeName: g.ZodLazy,
  ...C(t)
});
class pt extends E {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return v(r, {
        received: r.data,
        code: h.invalid_literal,
        expected: this._def.value
      }), S;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
pt.create = (e, t) => new pt({
  value: e,
  typeName: g.ZodLiteral,
  ...C(t)
});
function ga(e, t) {
  return new ke({
    values: e,
    typeName: g.ZodEnum,
    ...C(t)
  });
}
class ke extends E {
  constructor() {
    super(...arguments), et.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return v(r, {
        expected: N.joinValues(n),
        received: r.parsedType,
        code: h.invalid_type
      }), S;
    }
    if (Wt(this, et) || pa(this, et, new Set(this._def.values)), !Wt(this, et).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return v(r, {
        received: r.data,
        code: h.invalid_enum_value,
        options: n
      }), S;
    }
    return U(t.data);
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
    return ke.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return ke.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
et = /* @__PURE__ */ new WeakMap();
ke.create = ga;
class mt extends E {
  constructor() {
    super(...arguments), tt.set(this, void 0);
  }
  _parse(t) {
    const r = N.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== _.string && n.parsedType !== _.number) {
      const a = N.objectValues(r);
      return v(n, {
        expected: N.joinValues(a),
        received: n.parsedType,
        code: h.invalid_type
      }), S;
    }
    if (Wt(this, tt) || pa(this, tt, new Set(N.getValidEnumValues(this._def.values))), !Wt(this, tt).has(t.data)) {
      const a = N.objectValues(r);
      return v(n, {
        received: n.data,
        code: h.invalid_enum_value,
        options: a
      }), S;
    }
    return U(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
tt = /* @__PURE__ */ new WeakMap();
mt.create = (e, t) => new mt({
  values: e,
  typeName: g.ZodNativeEnum,
  ...C(t)
});
class Fe extends E {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _.promise && r.common.async === !1)
      return v(r, {
        code: h.invalid_type,
        expected: _.promise,
        received: r.parsedType
      }), S;
    const n = r.parsedType === _.promise ? r.data : Promise.resolve(r.data);
    return U(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Fe.create = (e, t) => new Fe({
  type: e,
  typeName: g.ZodPromise,
  ...C(t)
});
class ee extends E {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === g.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        v(n, o), o.fatal ? r.abort() : r.dirty();
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
            return S;
          const u = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? S : u.status === "dirty" || r.value === "dirty" ? Be(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return S;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? S : i.status === "dirty" || r.value === "dirty" ? Be(i.value) : i;
      }
    }
    if (a.type === "refinement") {
      const o = (i) => {
        const u = a.refinement(i, s);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? S : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? S : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!nt(o))
          return o;
        const i = a.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => nt(o) ? Promise.resolve(a.transform(o.value, s)).then((i) => ({ status: r.value, value: i })) : o);
    N.assertNever(a);
  }
}
ee.create = (e, t, r) => new ee({
  schema: e,
  typeName: g.ZodEffects,
  effect: t,
  ...C(r)
});
ee.createWithPreprocess = (e, t, r) => new ee({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: g.ZodEffects,
  ...C(r)
});
class se extends E {
  _parse(t) {
    return this._getType(t) === _.undefined ? U(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
se.create = (e, t) => new se({
  innerType: e,
  typeName: g.ZodOptional,
  ...C(t)
});
class Te extends E {
  _parse(t) {
    return this._getType(t) === _.null ? U(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Te.create = (e, t) => new Te({
  innerType: e,
  typeName: g.ZodNullable,
  ...C(t)
});
class ft extends E {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === _.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ft.create = (e, t) => new ft({
  innerType: e,
  typeName: g.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...C(t)
});
class ht extends E {
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
    return at(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new z(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new z(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ht.create = (e, t) => new ht({
  innerType: e,
  typeName: g.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...C(t)
});
class Xt extends E {
  _parse(t) {
    if (this._getType(t) !== _.nan) {
      const n = this._getOrReturnCtx(t);
      return v(n, {
        code: h.invalid_type,
        expected: _.nan,
        received: n.parsedType
      }), S;
    }
    return { status: "valid", value: t.data };
  }
}
Xt.create = (e) => new Xt({
  typeName: g.ZodNaN,
  ...C(e)
});
const eo = Symbol("zod_brand");
class tn extends E {
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
class $t extends E {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? S : s.status === "dirty" ? (r.dirty(), Be(s.value)) : this._def.out._parseAsync({
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
      return a.status === "aborted" ? S : a.status === "dirty" ? (r.dirty(), {
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
    return new $t({
      in: t,
      out: r,
      typeName: g.ZodPipeline
    });
  }
}
class gt extends E {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (nt(a) && (a.value = Object.freeze(a.value)), a);
    return at(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
gt.create = (e, t) => new gt({
  innerType: e,
  typeName: g.ZodReadonly,
  ...C(t)
});
function ya(e, t = {}, r) {
  return e ? He.create().superRefine((n, a) => {
    var s, o;
    if (!e(n)) {
      const i = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, u = (o = (s = i.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0, c = typeof i == "string" ? { message: i } : i;
      a.addIssue({ code: "custom", ...c, fatal: u });
    }
  }) : He.create();
}
const to = {
  object: M.lazycreate
};
var g;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(g || (g = {}));
const ro = (e, t = {
  message: `Input not instance of ${e.name}`
}) => ya((r) => r instanceof e, t), va = X.create, _a = we.create, no = Xt.create, ao = xe.create, ba = st.create, so = Re.create, oo = Gt.create, io = ot.create, lo = it.create, uo = He.create, co = Ae.create, po = he.create, mo = Kt.create, fo = Q.create, ho = M.create, go = M.strictCreate, yo = lt.create, vo = ir.create, _o = ut.create, bo = le.create, wo = ct.create, xo = Yt.create, ko = Pe.create, To = ze.create, So = dt.create, Co = pt.create, Eo = ke.create, Io = mt.create, No = Fe.create, hn = ee.create, jo = se.create, Ao = Te.create, Ro = ee.createWithPreprocess, Po = $t.create, Oo = () => va().optional(), Mo = () => _a().optional(), $o = () => ba().optional(), Zo = {
  string: (e) => X.create({ ...e, coerce: !0 }),
  number: (e) => we.create({ ...e, coerce: !0 }),
  boolean: (e) => st.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => xe.create({ ...e, coerce: !0 }),
  date: (e) => Re.create({ ...e, coerce: !0 })
}, Do = S;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Je,
  setErrorMap: Zs,
  getErrorMap: Ht,
  makeIssue: Ft,
  EMPTY_PATH: Ds,
  addIssueToContext: v,
  ParseStatus: D,
  INVALID: S,
  DIRTY: Be,
  OK: U,
  isAborted: jr,
  isDirty: Ar,
  isValid: nt,
  isAsync: at,
  get util() {
    return N;
  },
  get objectUtil() {
    return Nr;
  },
  ZodParsedType: _,
  getParsedType: be,
  ZodType: E,
  datetimeRegex: ha,
  ZodString: X,
  ZodNumber: we,
  ZodBigInt: xe,
  ZodBoolean: st,
  ZodDate: Re,
  ZodSymbol: Gt,
  ZodUndefined: ot,
  ZodNull: it,
  ZodAny: He,
  ZodUnknown: Ae,
  ZodNever: he,
  ZodVoid: Kt,
  ZodArray: Q,
  ZodObject: M,
  ZodUnion: lt,
  ZodDiscriminatedUnion: ir,
  ZodIntersection: ut,
  ZodTuple: le,
  ZodRecord: ct,
  ZodMap: Yt,
  ZodSet: Pe,
  ZodFunction: ze,
  ZodLazy: dt,
  ZodLiteral: pt,
  ZodEnum: ke,
  ZodNativeEnum: mt,
  ZodPromise: Fe,
  ZodEffects: ee,
  ZodTransformer: ee,
  ZodOptional: se,
  ZodNullable: Te,
  ZodDefault: ft,
  ZodCatch: ht,
  ZodNaN: Xt,
  BRAND: eo,
  ZodBranded: tn,
  ZodPipeline: $t,
  ZodReadonly: gt,
  custom: ya,
  Schema: E,
  ZodSchema: E,
  late: to,
  get ZodFirstPartyTypeKind() {
    return g;
  },
  coerce: Zo,
  any: uo,
  array: fo,
  bigint: ao,
  boolean: ba,
  date: so,
  discriminatedUnion: vo,
  effect: hn,
  enum: Eo,
  function: To,
  instanceof: ro,
  intersection: _o,
  lazy: So,
  literal: Co,
  map: xo,
  nan: no,
  nativeEnum: Io,
  never: po,
  null: lo,
  nullable: Ao,
  number: _a,
  object: ho,
  oboolean: $o,
  onumber: Mo,
  optional: jo,
  ostring: Oo,
  pipeline: Po,
  preprocess: Ro,
  promise: No,
  record: wo,
  set: ko,
  strictObject: go,
  string: va,
  symbol: oo,
  transformer: hn,
  tuple: bo,
  undefined: io,
  union: yo,
  unknown: co,
  void: mo,
  NEVER: Do,
  ZodIssueCode: h,
  quotelessJson: $s,
  ZodError: z
});
function Lo() {
  return {};
}
function Uo(e, t) {
  var n, a;
  const r = {
    type: "array"
  };
  return ((a = (n = e.type) == null ? void 0 : n._def) == null ? void 0 : a.typeName) !== g.ZodAny && (r.items = A(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && R(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && R(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (R(r, "minItems", e.exactLength.value, e.exactLength.message, t), R(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function qo(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? R(r, "minimum", n.value, n.message, t) : R(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), R(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? R(r, "maximum", n.value, n.message, t) : R(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), R(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        R(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Vo() {
  return {
    type: "boolean"
  };
}
function Bo(e, t) {
  return A(e.type._def, t);
}
const zo = (e, t) => A(e.innerType._def, t);
function wa(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => wa(e, t, a))
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
      return Jo(e, t);
  }
}
const Jo = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        R(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
      case "max":
        R(
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
function Ho(e, t) {
  return {
    ...A(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Fo(e, t) {
  return t.effectStrategy === "input" ? A(e.schema._def, t) : {};
}
function Wo(e) {
  return {
    type: "string",
    enum: e.values
  };
}
const Go = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Ko(e, t) {
  const r = [
    A(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    A(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((s) => !!s);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const a = [];
  return r.forEach((s) => {
    if (Go(s))
      a.push(...s.allOf), s.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let o = s;
      if ("additionalProperties" in s && s.additionalProperties === !1) {
        const { additionalProperties: i, ...u } = s;
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
function Yo(e, t) {
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
let mr;
const Ie = {
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
  emoji: () => (mr === void 0 && (mr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), mr),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/
};
function xa(e, t) {
  const r = {
    type: "string"
  };
  function n(a) {
    return t.patternStrategy === "escape" ? Xo(a) : a;
  }
  if (e.checks)
    for (const a of e.checks)
      switch (a.kind) {
        case "min":
          R(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t);
          break;
        case "max":
          R(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              K(r, "email", a.message, t);
              break;
            case "format:idn-email":
              K(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              Y(r, Ie.email, a.message, t);
              break;
          }
          break;
        case "url":
          K(r, "uri", a.message, t);
          break;
        case "uuid":
          K(r, "uuid", a.message, t);
          break;
        case "regex":
          Y(r, a.regex, a.message, t);
          break;
        case "cuid":
          Y(r, Ie.cuid, a.message, t);
          break;
        case "cuid2":
          Y(r, Ie.cuid2, a.message, t);
          break;
        case "startsWith":
          Y(r, RegExp(`^${n(a.value)}`), a.message, t);
          break;
        case "endsWith":
          Y(r, RegExp(`${n(a.value)}$`), a.message, t);
          break;
        case "datetime":
          K(r, "date-time", a.message, t);
          break;
        case "date":
          K(r, "date", a.message, t);
          break;
        case "time":
          K(r, "time", a.message, t);
          break;
        case "duration":
          K(r, "duration", a.message, t);
          break;
        case "length":
          R(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t), R(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "includes": {
          Y(r, RegExp(n(a.value)), a.message, t);
          break;
        }
        case "ip": {
          a.version !== "v6" && K(r, "ipv4", a.message, t), a.version !== "v4" && K(r, "ipv6", a.message, t);
          break;
        }
        case "emoji":
          Y(r, Ie.emoji, a.message, t);
          break;
        case "ulid": {
          Y(r, Ie.ulid, a.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              K(r, "binary", a.message, t);
              break;
            }
            case "contentEncoding:base64": {
              R(r, "contentEncoding", "base64", a.message, t);
              break;
            }
            case "pattern:zod": {
              Y(r, Ie.base64, a.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Y(r, Ie.nanoid, a.message, t);
      }
  return r;
}
const Xo = (e) => Array.from(e).map((t) => /[a-zA-Z0-9]/.test(t) ? t : `\\${t}`).join(""), K = (e, t, r, n) => {
  var a;
  e.format || (a = e.anyOf) != null && a.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : R(e, "format", t, r, n);
}, Y = (e, t, r, n) => {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: gn(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : R(e, "pattern", gn(t, n), r, n);
}, gn = (e, t) => {
  var c;
  const r = typeof e == "function" ? e() : e;
  if (!t.applyRegexFlags || !r.flags)
    return r.source;
  const n = {
    i: r.flags.includes("i"),
    m: r.flags.includes("m"),
    s: r.flags.includes("s")
    // `.` matches newlines
  }, a = n.i ? r.source.toLowerCase() : r.source;
  let s = "", o = !1, i = !1, u = !1;
  for (let d = 0; d < a.length; d++) {
    if (o) {
      s += a[d], o = !1;
      continue;
    }
    if (n.i) {
      if (i) {
        if (a[d].match(/[a-z]/)) {
          u ? (s += a[d], s += `${a[d - 2]}-${a[d]}`.toUpperCase(), u = !1) : a[d + 1] === "-" && ((c = a[d + 2]) != null && c.match(/[a-z]/)) ? (s += a[d], u = !0) : s += `${a[d]}${a[d].toUpperCase()}`;
          continue;
        }
      } else if (a[d].match(/[a-z]/)) {
        s += `[${a[d]}${a[d].toUpperCase()}]`;
        continue;
      }
    }
    if (n.m) {
      if (a[d] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (a[d] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n.s && a[d] === ".") {
      s += i ? `${a[d]}\r
` : `[${a[d]}\r
]`;
      continue;
    }
    s += a[d], a[d] === "\\" ? o = !0 : i && a[d] === "]" ? i = !1 : !i && a[d] === "[" && (i = !0);
  }
  try {
    const d = new RegExp(s);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), r.source;
  }
  return s;
};
function ka(e, t) {
  var n, a, s, o;
  if (t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === g.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((i, u) => ({
        ...i,
        [u]: A(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", u]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: A(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (t.target === "openApi3")
    return r;
  if (((a = e.keyType) == null ? void 0 : a._def.typeName) === g.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
    const i = Object.entries(xa(e.keyType._def, t)).reduce((u, [c, d]) => c === "type" ? u : { ...u, [c]: d }, {});
    return {
      ...r,
      propertyNames: i
    };
  } else if (((o = e.keyType) == null ? void 0 : o._def.typeName) === g.ZodEnum)
    return {
      ...r,
      propertyNames: {
        enum: e.keyType._def.values
      }
    };
  return r;
}
function Qo(e, t) {
  if (t.mapStrategy === "record")
    return ka(e, t);
  const r = A(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, n = A(e.valueType._def, {
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
function ei(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function ti() {
  return {
    not: {}
  };
}
function ri(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const Qt = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function ni(e, t) {
  if (t.target === "openApi3")
    return yn(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in Qt && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = Qt[s._def.typeName];
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
  return yn(e, t);
}
const yn = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => A(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function ai(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: Qt[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        Qt[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const n = A(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = A(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function si(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", ca(r, "type", n.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? R(r, "minimum", n.value, n.message, t) : R(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), R(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? R(r, "maximum", n.value, n.message, t) : R(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), R(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        R(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function oi(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : A(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : A(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function ii(e, t) {
  const r = {
    type: "object",
    ...Object.entries(e.shape()).reduce((n, [a, s]) => {
      if (s === void 0 || s._def === void 0)
        return n;
      const o = A(s._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", a],
        propertyPath: [...t.currentPath, "properties", a]
      });
      return o === void 0 ? n : {
        properties: { ...n.properties, [a]: o },
        required: s.isOptional() ? n.required : [...n.required, a]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: oi(e, t)
  };
  return r.required.length || delete r.required, r;
}
const li = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return A(e.innerType._def, t);
  const r = A(e.innerType._def, {
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
}, ui = (e, t) => {
  if (t.pipeStrategy === "input")
    return A(e.in._def, t);
  if (t.pipeStrategy === "output")
    return A(e.out._def, t);
  const r = A(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = A(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function ci(e, t) {
  return A(e.type._def, t);
}
function di(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: A(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && R(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && R(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function pi(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, n) => A(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: A(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, n) => A(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function mi() {
  return {
    not: {}
  };
}
function fi() {
  return {};
}
const hi = (e, t) => A(e.innerType._def, t);
function A(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const i = (o = t.override) == null ? void 0 : o.call(t, e, t, n, r);
    if (i !== Rs)
      return i;
  }
  if (n && !r) {
    const i = gi(n, t);
    if (i !== void 0)
      return i;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = vi(e, e.typeName, t);
  return s && _i(e, t, s), a.jsonSchema = s, s;
}
const gi = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: yi(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, yi = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, vi = (e, t, r) => {
  switch (t) {
    case g.ZodString:
      return xa(e, r);
    case g.ZodNumber:
      return si(e, r);
    case g.ZodObject:
      return ii(e, r);
    case g.ZodBigInt:
      return qo(e, r);
    case g.ZodBoolean:
      return Vo();
    case g.ZodDate:
      return wa(e, r);
    case g.ZodUndefined:
      return mi();
    case g.ZodNull:
      return ri(r);
    case g.ZodArray:
      return Uo(e, r);
    case g.ZodUnion:
    case g.ZodDiscriminatedUnion:
      return ni(e, r);
    case g.ZodIntersection:
      return Ko(e, r);
    case g.ZodTuple:
      return pi(e, r);
    case g.ZodRecord:
      return ka(e, r);
    case g.ZodLiteral:
      return Yo(e, r);
    case g.ZodEnum:
      return Wo(e);
    case g.ZodNativeEnum:
      return ei(e);
    case g.ZodNullable:
      return ai(e, r);
    case g.ZodOptional:
      return li(e, r);
    case g.ZodMap:
      return Qo(e, r);
    case g.ZodSet:
      return di(e, r);
    case g.ZodLazy:
      return A(e.getter()._def, r);
    case g.ZodPromise:
      return ci(e, r);
    case g.ZodNaN:
    case g.ZodNever:
      return ti();
    case g.ZodEffects:
      return Fo(e, r);
    case g.ZodAny:
      return Lo();
    case g.ZodUnknown:
      return fi();
    case g.ZodDefault:
      return Ho(e, r);
    case g.ZodBranded:
      return Bo(e, r);
    case g.ZodReadonly:
      return hi(e, r);
    case g.ZodCatch:
      return zo(e, r);
    case g.ZodPipeline:
      return ui(e, r);
    case g.ZodFunction:
    case g.ZodVoid:
    case g.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, _i = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), bi = (e, t) => {
  const r = Ms(t), n = void 0, a = t == null ? void 0 : t.name, s = A(
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
var yt = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, vt = {
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
}, _t = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, bt = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, wt = {
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
}, xt = {
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
}, kt = {
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
}, Tt = {
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
}, St = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Ct = {
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
}, Et = {
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
}, It = {
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
}, Nt = {
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
}, jt = {
  code: "d",
  name: "finish_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string" || !("usage" in e) || e.usage == null || typeof e.usage != "object" || !("promptTokens" in e.usage) || !("completionTokens" in e.usage))
      throw new Error(
        '"finish_message" parts expect an object with a "finishReason" and "usage" property.'
      );
    return typeof e.usage.promptTokens != "number" && (e.usage.promptTokens = Number.NaN), typeof e.usage.completionTokens != "number" && (e.usage.completionTokens = Number.NaN), {
      type: "finish_message",
      value: e
    };
  }
}, At = {
  code: "e",
  name: "finish_roundtrip",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string" || !("usage" in e) || e.usage == null || typeof e.usage != "object" || !("promptTokens" in e.usage) || !("completionTokens" in e.usage))
      throw new Error(
        '"finish_roundtrip" parts expect an object with a "finishReason" and "usage" property.'
      );
    return typeof e.usage.promptTokens != "number" && (e.usage.promptTokens = Number.NaN), typeof e.usage.completionTokens != "number" && (e.usage.completionTokens = Number.NaN), {
      type: "finish_roundtrip",
      value: e
    };
  }
}, Ta = [
  yt,
  vt,
  _t,
  bt,
  wt,
  xt,
  kt,
  Tt,
  St,
  Ct,
  Et,
  It,
  Nt,
  jt,
  At
];
yt.code + "", vt.code + "", _t.code + "", bt.code + "", wt.code + "", xt.code + "", kt.code + "", Tt.code + "", St.code + "", Ct.code + "", Et.code + "", It.code + "", Nt.code + "", jt.code + "", At.code + "";
yt.name + "", yt.code, vt.name + "", vt.code, _t.name + "", _t.code, bt.name + "", bt.code, wt.name + "", wt.code, xt.name + "", xt.code, kt.name + "", kt.code, Tt.name + "", Tt.code, St.name + "", St.code, Ct.name + "", Ct.code, Et.name + "", Et.code, It.name + "", It.code, Nt.name + "", Nt.code, jt.name + "", jt.code, At.name + "", At.code;
Ta.map((e) => e.code);
function me(e, t) {
  const r = Ta.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
var Pr = Symbol.for("vercel.ai.schema");
function wi(e, {
  validate: t
} = {}) {
  return {
    [Pr]: !0,
    _type: void 0,
    // should never be used directly
    [Jt]: !0,
    jsonSchema: e,
    validate: t
  };
}
function xi(e) {
  return typeof e == "object" && e !== null && Pr in e && e[Pr] === !0 && "jsonSchema" in e && "validate" in e;
}
function Sa(e) {
  return xi(e) ? e : ki(e);
}
function ki(e) {
  return wi(
    // we assume that zodToJsonSchema will return a valid JSONSchema7:
    bi(e),
    {
      validate: (t) => {
        const r = e.safeParse(t);
        return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
      }
    }
  );
}
var Ti = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, je = "1.9.0", vn = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Si(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(vn);
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
  function s(i) {
    return r.add(i), !1;
  }
  function o(i) {
    return t.add(i), !0;
  }
  return function(u) {
    if (t.has(u))
      return !0;
    if (r.has(u))
      return !1;
    var c = u.match(vn);
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
var Ci = Si(je), Ei = je.split(".")[0], Rt = Symbol.for("opentelemetry.js.api." + Ei), Pt = Ti;
function rn(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = Pt[Rt] = (a = Pt[Rt]) !== null && a !== void 0 ? a : {
    version: je
  };
  if (!n && s[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(o.stack || o.message), !1;
  }
  if (s.version !== je) {
    var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + e + " does not match previously registered API v" + je);
    return r.error(o.stack || o.message), !1;
  }
  return s[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + je + "."), !0;
}
function Ot(e) {
  var t, r, n = (t = Pt[Rt]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !Ci(n)))
    return (r = Pt[Rt]) === null || r === void 0 ? void 0 : r[e];
}
function nn(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + je + ".");
  var r = Pt[Rt];
  r && delete r[e];
}
var Ii = function(e, t) {
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
}, Ni = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, ji = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Qe("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Qe("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Qe("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Qe("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return Qe("verbose", this._namespace, t);
    }, e;
  }()
);
function Qe(e, t, r) {
  var n = Ot("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, Ni([], Ii(r), !1));
}
var B;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(B || (B = {}));
function Ai(e, t) {
  e < B.NONE ? e = B.NONE : e > B.ALL && (e = B.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", B.ERROR),
    warn: r("warn", B.WARN),
    info: r("info", B.INFO),
    debug: r("debug", B.DEBUG),
    verbose: r("verbose", B.VERBOSE)
  };
}
var Ri = function(e, t) {
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
}, Pi = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Oi = "diag", er = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var i = Ot("diag");
          if (i)
            return i[a].apply(i, Pi([], Ri(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, i, u;
        if (s === void 0 && (s = { logLevel: B.INFO }), a === r) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = c.stack) !== null && o !== void 0 ? o : c.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var d = Ot("diag"), m = Ai((i = s.logLevel) !== null && i !== void 0 ? i : B.INFO, a);
        if (d && !s.suppressOverrideMessage) {
          var f = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + f), m.warn("Current logger will overwrite one already registered from " + f);
        }
        return rn("diag", m, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        nn(Oi, r);
      }, r.createComponentLogger = function(a) {
        return new ji(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
);
function Mi(e) {
  return Symbol.for(e);
}
var $i = (
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
), Zi = new $i(), Di = function(e, t) {
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
}, Li = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Ui = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return Zi;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, Li([n], Di(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), qi = function(e, t) {
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
}, Vi = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, fr = "context", Bi = new Ui(), Ca = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return rn(fr, t, er.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, Vi([t, r, n], qi(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return Ot(fr) || Bi;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), nn(fr, er.instance());
    }, e;
  }()
), Or;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Or || (Or = {}));
var Ea = "0000000000000000", Ia = "00000000000000000000000000000000", zi = {
  traceId: Ia,
  spanId: Ea,
  traceFlags: Or.NONE
}, rt = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = zi), this._spanContext = t;
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
), an = Mi("OpenTelemetry Context Key SPAN");
function sn(e) {
  return e.getValue(an) || void 0;
}
function Ji() {
  return sn(Ca.getInstance().active());
}
function on(e, t) {
  return e.setValue(an, t);
}
function Hi(e) {
  return e.deleteValue(an);
}
function Fi(e, t) {
  return on(e, new rt(t));
}
function Na(e) {
  var t;
  return (t = sn(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var Wi = /^([0-9a-f]{32})$/i, Gi = /^[0-9a-f]{16}$/i;
function Ki(e) {
  return Wi.test(e) && e !== Ia;
}
function Yi(e) {
  return Gi.test(e) && e !== Ea;
}
function ja(e) {
  return Ki(e.traceId) && Yi(e.spanId);
}
function Xi(e) {
  return new rt(e);
}
var hr = Ca.getInstance(), Aa = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = hr.active());
      var a = !!(r != null && r.root);
      if (a)
        return new rt();
      var s = n && Na(n);
      return Qi(s) && ja(s) ? new rt(s) : new rt();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (s = r, i = n) : (s = r, o = n, i = a);
        var u = o ?? hr.active(), c = this.startSpan(t, s, u), d = on(u, c);
        return hr.with(d, i, void 0, c);
      }
    }, e;
  }()
);
function Qi(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var el = new Aa(), tl = (
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
      return t ? (this._delegate = t, this._delegate) : el;
    }, e;
  }()
), rl = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new Aa();
    }, e;
  }()
), nl = new rl(), _n = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new tl(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : nl;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), tr;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(tr || (tr = {}));
var gr = "trace", al = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new _n(), this.wrapSpanContext = Xi, this.isSpanContextValid = ja, this.deleteSpan = Hi, this.getSpan = sn, this.getActiveSpan = Ji, this.getSpanContext = Na, this.setSpan = on, this.setSpanContext = Fi;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = rn(gr, this._proxyTracerProvider, er.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return Ot(gr) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      nn(gr, er.instance()), this._proxyTracerProvider = new _n();
    }, e;
  }()
), sl = al.getInstance(), ol = Object.defineProperty, il = (e, t) => {
  for (var r in t)
    ol(e, r, { get: t[r], enumerable: !0 });
};
async function ll(e) {
  return e === void 0 ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
var Mr = "AI_RetryError", Ra = `vercel.ai.error.${Mr}`, ul = Symbol.for(Ra), Pa, bn = class extends j {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: Mr, message: e }), this[Pa] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return j.hasMarker(e, Ra);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isRetryError(e) {
    return e instanceof Error && e.name === Mr && typeof e.reason == "string" && Array.isArray(e.errors);
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      reason: this.reason,
      lastError: this.lastError,
      errors: this.errors
    };
  }
};
Pa = ul;
var cl = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => Oa(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function Oa(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (Vt(s) || t === 0)
      throw s;
    const o = la(s), i = [...a, s], u = i.length;
    if (u > t)
      throw new bn({
        message: `Failed after ${u} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (s instanceof Error && ae.isAPICallError(s) && s.isRetryable === !0 && u <= t)
      return await ll(r), Oa(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw u === 1 ? s : new bn({
      message: `Failed after ${u} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function $r({
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
function dl({
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
    ...Object.entries(t).reduce((s, [o, i]) => (s[`ai.settings.${o}`] = i, s), {}),
    // add metadata as attributes:
    ...Object.entries((a = r == null ? void 0 : r.metadata) != null ? a : {}).reduce(
      (s, [o, i]) => (s[`ai.telemetry.metadata.${o}`] = i, s),
      {}
    ),
    // request headers
    ...Object.entries(n ?? {}).reduce((s, [o, i]) => (i !== void 0 && (s[`ai.request.headers.${o}`] = i), s), {})
  };
}
var pl = {
  startSpan() {
    return qt;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(qt);
    if (typeof r == "function")
      return r(qt);
    if (typeof n == "function")
      return n(qt);
  }
}, qt = {
  spanContext() {
    return ml;
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
}, ml = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function fl({ isEnabled: e }) {
  return e ? sl.getTracer("ai") : pl;
}
function Zr({
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
          code: tr.ERROR,
          message: o.message
        })) : s.setStatus({ code: tr.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function We({
  telemetry: e,
  attributes: t
}) {
  return Object.entries(t).reduce((r, [n, a]) => {
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
var Dr = "AI_DownloadError", Ma = `vercel.ai.error.${Dr}`, hl = Symbol.for(Ma), $a, yr = class extends j {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: Dr, message: a, cause: n }), this[$a] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ma);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isDownloadError(e) {
    return e instanceof Error && e.name === Dr && typeof e.url == "string" && (e.statusCode == null || typeof e.statusCode == "number") && (e.statusText == null || typeof e.statusText == "string");
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
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
};
$a = hl;
async function gl({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const a = await t(n);
    if (!a.ok)
      throw new yr({
        url: n,
        statusCode: a.status,
        statusText: a.statusText
      });
    return {
      data: new Uint8Array(await a.arrayBuffer()),
      mimeType: (r = a.headers.get("content-type")) != null ? r : void 0
    };
  } catch (a) {
    throw yr.isInstance(a) ? a : new yr({ url: n, cause: a });
  }
}
var yl = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function vl(e) {
  for (const { bytes: t, mimeType: r } of yl)
    if (e.length >= t.length && t.every((n, a) => e[a] === n))
      return r;
}
var Lr = "AI_InvalidDataContentError", Za = `vercel.ai.error.${Lr}`, _l = Symbol.for(Za), Da, wn = class extends j {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: Lr, message: r, cause: t }), this[Da] = !0, this.content = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Za);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isInvalidDataContentError(e) {
    return e instanceof Error && e.name === Lr && e.content != null;
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      cause: this.cause,
      content: this.content
    };
  }
};
Da = _l;
var bl = l.union([
  l.string(),
  l.instanceof(Uint8Array),
  l.instanceof(ArrayBuffer),
  l.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function xn(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return As(e);
    } catch (t) {
      throw new wn({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new wn({ content: e });
}
var Ur = "AI_InvalidMessageRoleError", La = `vercel.ai.error.${Ur}`, wl = Symbol.for(La), Ua, xl = class extends j {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: Ur, message: t }), this[Ua] = !0, this.role = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, La);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isInvalidMessageRoleError(e) {
    return e instanceof Error && e.name === Ur && typeof e.role == "string";
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      role: this.role
    };
  }
};
Ua = wl;
async function kl({
  prompt: e,
  modelSupportsImageUrls: t = !0,
  downloadImplementation: r = gl
}) {
  const n = [];
  e.system != null && n.push({ role: "system", content: e.system });
  const a = t || e.messages == null ? null : await Tl(e.messages, r), s = e.type;
  switch (s) {
    case "prompt": {
      n.push({
        role: "user",
        content: [{ type: "text", text: e.prompt }]
      });
      break;
    }
    case "messages": {
      n.push(
        ...e.messages.map(
          (o) => qa(o, a)
        )
      );
      break;
    }
    default: {
      const o = s;
      throw new Error(`Unsupported prompt type: ${o}`);
    }
  }
  return n;
}
function qa(e, t) {
  const r = e.role;
  switch (r) {
    case "system":
      return {
        role: "system",
        content: e.content,
        providerMetadata: e.experimental_providerMetadata
      };
    case "user":
      return typeof e.content == "string" ? {
        role: "user",
        content: [{ type: "text", text: e.content }],
        providerMetadata: e.experimental_providerMetadata
      } : {
        role: "user",
        content: e.content.map(
          (n) => {
            var a, s, o;
            switch (n.type) {
              case "text":
                return {
                  type: "text",
                  text: n.text,
                  providerMetadata: n.experimental_providerMetadata
                };
              case "image": {
                if (n.image instanceof URL) {
                  if (t == null)
                    return {
                      type: "image",
                      image: n.image,
                      mimeType: n.mimeType,
                      providerMetadata: n.experimental_providerMetadata
                    };
                  {
                    const u = t[n.image.toString()];
                    return {
                      type: "image",
                      image: u.data,
                      mimeType: (a = n.mimeType) != null ? a : u.mimeType,
                      providerMetadata: n.experimental_providerMetadata
                    };
                  }
                }
                if (typeof n.image == "string")
                  try {
                    const u = new URL(n.image);
                    switch (u.protocol) {
                      case "http:":
                      case "https:": {
                        if (t == null)
                          return {
                            type: "image",
                            image: u,
                            mimeType: n.mimeType,
                            providerMetadata: n.experimental_providerMetadata
                          };
                        {
                          const c = t[n.image];
                          return {
                            type: "image",
                            image: c.data,
                            mimeType: (s = n.mimeType) != null ? s : c.mimeType,
                            providerMetadata: n.experimental_providerMetadata
                          };
                        }
                      }
                      case "data:":
                        try {
                          const [c, d] = n.image.split(","), m = c.split(";")[0].split(":")[1];
                          if (m == null || d == null)
                            throw new Error("Invalid data URL format");
                          return {
                            type: "image",
                            image: xn(d),
                            mimeType: m,
                            providerMetadata: n.experimental_providerMetadata
                          };
                        } catch {
                          throw new Error(
                            `Error processing data URL: ${la(
                              e
                            )}`
                          );
                        }
                      default:
                        throw new Error(
                          `Unsupported URL protocol: ${u.protocol}`
                        );
                    }
                  } catch {
                  }
                const i = xn(n.image);
                return {
                  type: "image",
                  image: i,
                  mimeType: (o = n.mimeType) != null ? o : vl(i),
                  providerMetadata: n.experimental_providerMetadata
                };
              }
            }
          }
        ),
        providerMetadata: e.experimental_providerMetadata
      };
    case "assistant":
      return typeof e.content == "string" ? {
        role: "assistant",
        content: [{ type: "text", text: e.content }],
        providerMetadata: e.experimental_providerMetadata
      } : {
        role: "assistant",
        content: e.content.filter(
          // remove empty text parts:
          (n) => n.type !== "text" || n.text !== ""
        ).map((n) => {
          const { experimental_providerMetadata: a, ...s } = n;
          return {
            ...s,
            providerMetadata: a
          };
        }),
        providerMetadata: e.experimental_providerMetadata
      };
    case "tool":
      return {
        role: "tool",
        content: e.content.map((n) => ({
          type: "tool-result",
          toolCallId: n.toolCallId,
          toolName: n.toolName,
          result: n.result,
          providerMetadata: n.experimental_providerMetadata
        })),
        providerMetadata: e.experimental_providerMetadata
      };
    default: {
      const n = r;
      throw new xl({ role: n });
    }
  }
}
async function Tl(e, t) {
  const r = e.filter((a) => a.role === "user").map((a) => a.content).filter(
    (a) => Array.isArray(a)
  ).flat().filter((a) => a.type === "image").map((a) => a.image).map(
    (a) => (
      // support string urls in image parts:
      typeof a == "string" && (a.startsWith("http:") || a.startsWith("https:")) ? new URL(a) : a
    )
  ).filter((a) => a instanceof URL), n = await Promise.all(
    r.map(async (a) => ({
      url: a,
      data: await t({ url: a })
    }))
  );
  return Object.fromEntries(
    n.map(({ url: a, data: s }) => [a.toString(), s])
  );
}
var qr = "AI_InvalidArgumentError", Va = `vercel.ai.error.${qr}`, Sl = Symbol.for(Va), Ba, de = class extends j {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: qr,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[Ba] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, Va);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isInvalidArgumentError(e) {
    return e instanceof Error && e.name === qr && typeof e.parameter == "string" && typeof e.value == "string";
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
};
Ba = Sl;
function Cl({
  maxTokens: e,
  temperature: t,
  topP: r,
  presencePenalty: n,
  frequencyPenalty: a,
  stopSequences: s,
  seed: o,
  maxRetries: i
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new de({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new de({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new de({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new de({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new de({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number"
    });
  if (a != null && typeof a != "number")
    throw new de({
      parameter: "frequencyPenalty",
      value: a,
      message: "frequencyPenalty must be a number"
    });
  if (o != null && !Number.isInteger(o))
    throw new de({
      parameter: "seed",
      value: o,
      message: "seed must be an integer"
    });
  if (i != null) {
    if (!Number.isInteger(i))
      throw new de({
        parameter: "maxRetries",
        value: i,
        message: "maxRetries must be an integer"
      });
    if (i < 0)
      throw new de({
        parameter: "maxRetries",
        value: i,
        message: "maxRetries must be >= 0"
      });
  }
  return {
    maxTokens: e,
    temperature: t ?? 0,
    topP: r,
    presencePenalty: n,
    frequencyPenalty: a,
    stopSequences: s != null && s.length > 0 ? s : void 0,
    seed: o,
    maxRetries: i ?? 2
  };
}
var Vr = l.lazy(
  () => l.union([
    l.null(),
    l.string(),
    l.number(),
    l.boolean(),
    l.record(l.string(), Vr),
    l.array(Vr)
  ])
), Oe = l.record(
  l.string(),
  l.record(l.string(), Vr)
), za = l.object({
  type: l.literal("text"),
  text: l.string(),
  experimental_providerMetadata: Oe.optional()
}), El = l.object({
  type: l.literal("image"),
  image: l.union([bl, l.instanceof(URL)]),
  mimeType: l.string().optional(),
  experimental_providerMetadata: Oe.optional()
}), Il = l.object({
  type: l.literal("tool-call"),
  toolCallId: l.string(),
  toolName: l.string(),
  args: l.unknown()
}), Nl = l.object({
  type: l.literal("tool-result"),
  toolCallId: l.string(),
  toolName: l.string(),
  result: l.unknown(),
  isError: l.boolean().optional(),
  experimental_providerMetadata: Oe.optional()
}), jl = l.object({
  role: l.literal("system"),
  content: l.string(),
  experimental_providerMetadata: Oe.optional()
}), Al = l.object({
  role: l.literal("user"),
  content: l.union([
    l.string(),
    l.array(l.union([za, El]))
  ]),
  experimental_providerMetadata: Oe.optional()
}), Rl = l.object({
  role: l.literal("assistant"),
  content: l.union([
    l.string(),
    l.array(l.union([za, Il]))
  ]),
  experimental_providerMetadata: Oe.optional()
}), Pl = l.object({
  role: l.literal("tool"),
  content: l.array(Nl),
  experimental_providerMetadata: Oe.optional()
}), Ol = l.union([
  jl,
  Al,
  Rl,
  Pl
]);
function kn(e) {
  if (e.prompt == null && e.messages == null)
    throw new Ue({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new Ue({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new Ue({
      prompt: e,
      message: "system must be a string"
    });
  if (e.prompt != null) {
    if (typeof e.prompt != "string")
      throw new Ue({
        prompt: e,
        message: "prompt must be a string"
      });
    return {
      type: "prompt",
      prompt: e.prompt,
      messages: void 0,
      system: e.system
    };
  }
  if (e.messages != null) {
    const t = Yr({
      value: e.messages,
      schema: l.array(Ol)
    });
    if (!t.success)
      throw new Ue({
        prompt: e,
        message: "messages must be an array of CoreMessage",
        cause: t.error
      });
    return {
      type: "messages",
      prompt: void 0,
      messages: e.messages,
      // only possible case bc of checks above
      system: e.system
    };
  }
  throw new Error("unreachable");
}
function Ml(e) {
  return {
    promptTokens: e.promptTokens,
    completionTokens: e.completionTokens,
    totalTokens: e.promptTokens + e.completionTokens
  };
}
function Br(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  var n;
  const a = new Headers((n = e == null ? void 0 : e.headers) != null ? n : {});
  return a.has("Content-Type") || a.set("Content-Type", t), r !== void 0 && a.set("X-Vercel-AI-Data-Stream", r), a;
}
function Tn(e, t) {
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
function Ne() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function $l() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
function Sn(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = {};
  if ((e == null ? void 0 : e.headers) != null)
    for (const [a, s] of Object.entries(e.headers))
      n[a] = s;
  return n["Content-Type"] == null && (n["Content-Type"] = t), r !== void 0 && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function Cn({
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
        const { done: i, value: u } = await s.read();
        if (i)
          break;
        e.write(u);
      }
    } catch (i) {
      throw i;
    } finally {
      e.end();
    }
  })();
}
function Zl(e) {
  return e != null && Object.keys(e).length > 0;
}
function Dl({
  tools: e,
  toolChoice: t
}) {
  return Zl(e) ? {
    tools: Object.entries(e).map(([r, n]) => ({
      type: "function",
      name: r,
      description: n.description,
      parameters: Sa(n.parameters).jsonSchema
    })),
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
function Ll({
  text: e = "",
  toolCalls: t,
  toolResults: r
}) {
  const n = [];
  return n.push({
    role: "assistant",
    content: [{ type: "text", text: e }, ...t]
  }), r.length > 0 && n.push({
    role: "tool",
    content: r.map((a) => ({
      type: "tool-result",
      toolCallId: a.toolCallId,
      toolName: a.toolName,
      result: a.result
    }))
  }), n;
}
var zr = "AI_InvalidToolArgumentsError", Ja = `vercel.ai.error.${zr}`, Ul = Symbol.for(Ja), Ha, ql = class extends j {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Fr(
      r
    )}`
  }) {
    super({ name: zr, message: n, cause: r }), this[Ha] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ja);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isInvalidToolArgumentsError(e) {
    return e instanceof Error && e.name === zr && typeof e.toolName == "string" && typeof e.toolArgs == "string";
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
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
};
Ha = Ul;
var Jr = "AI_NoSuchToolError", Fa = `vercel.ai.error.${Jr}`, Vl = Symbol.for(Fa), Wa, rr = class extends j {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Jr, message: r }), this[Wa] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, Fa);
  }
  /**
   * @deprecated use `isInstance` instead
   */
  static isNoSuchToolError(e) {
    return e instanceof Error && e.name === Jr && "toolName" in e && e.toolName != null && typeof e.name == "string";
  }
  /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      toolName: this.toolName,
      availableTools: this.availableTools
    };
  }
};
Wa = Vl;
function Bl({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName;
  if (t == null)
    throw new rr({ toolName: e.toolName });
  const n = t[r];
  if (n == null)
    throw new rr({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = Xr({
    text: e.args,
    schema: Sa(n.parameters)
  });
  if (a.success === !1)
    throw new ql({
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
function zl() {
  let e = [], t = null, r = !1;
  const n = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length !== 0)
      try {
        const { value: a, done: s } = await e[0].read();
        s ? (e.shift(), e.length > 0 ? await n() : r && (t == null || t.close())) : t == null || t.enqueue(a);
      } catch (a) {
        t == null || t.error(a), e.shift(), r && e.length === 0 && (t == null || t.close());
      }
  };
  return {
    stream: new ReadableStream({
      start(a) {
        t = a;
      },
      pull: n,
      async cancel() {
        for (const a of e)
          await a.cancel();
        e = [], r = !0;
      }
    }),
    addStream: (a) => {
      if (r)
        throw new Error("Cannot add inner stream: outer stream is closed");
      e.push(a.getReader());
    },
    close: () => {
      r = !0, e.length === 0 && (t == null || t.close());
    }
  };
}
function Ga(e, t) {
  const r = e.getReader(), n = t.getReader();
  let a, s, o = !1, i = !1;
  async function u(d) {
    try {
      a == null && (a = r.read());
      const m = await a;
      a = void 0, m.done ? d.close() : d.enqueue(m.value);
    } catch (m) {
      d.error(m);
    }
  }
  async function c(d) {
    try {
      s == null && (s = n.read());
      const m = await s;
      s = void 0, m.done ? d.close() : d.enqueue(m.value);
    } catch (m) {
      d.error(m);
    }
  }
  return new ReadableStream({
    async pull(d) {
      try {
        if (o) {
          await c(d);
          return;
        }
        if (i) {
          await u(d);
          return;
        }
        a == null && (a = r.read()), s == null && (s = n.read());
        const { result: m, reader: f } = await Promise.race([
          a.then((p) => ({ result: p, reader: r })),
          s.then((p) => ({ result: p, reader: n }))
        ]);
        m.done || d.enqueue(m.value), f === r ? (a = void 0, m.done && (await c(d), o = !0)) : (s = void 0, m.done && (i = !0, await u(d)));
      } catch (m) {
        d.error(m);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
function Jl({
  tools: e,
  generatorStream: t,
  toolCallStreaming: r,
  tracer: n,
  telemetry: a
}) {
  let s = !1;
  const o = /* @__PURE__ */ new Set();
  let i = null;
  const u = new ReadableStream({
    start(m) {
      i = m;
    }
  }), c = {}, d = new TransformStream({
    transform(m, f) {
      const p = m.type;
      switch (p) {
        case "text-delta":
        case "response-metadata":
        case "error": {
          f.enqueue(m);
          break;
        }
        case "tool-call-delta": {
          r && (c[m.toolCallId] || (f.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: m.toolCallId,
            toolName: m.toolName
          }), c[m.toolCallId] = !0), f.enqueue({
            type: "tool-call-delta",
            toolCallId: m.toolCallId,
            toolName: m.toolName,
            argsTextDelta: m.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          const y = m.toolName;
          if (e == null) {
            i.enqueue({
              type: "error",
              error: new rr({ toolName: m.toolName })
            });
            break;
          }
          const w = e[y];
          if (w == null) {
            i.enqueue({
              type: "error",
              error: new rr({
                toolName: m.toolName,
                availableTools: Object.keys(e)
              })
            });
            break;
          }
          try {
            const k = Bl({
              toolCall: m,
              tools: e
            });
            if (f.enqueue(k), w.execute != null) {
              const T = qe();
              o.add(T), Zr({
                name: "ai.toolCall",
                attributes: We({
                  telemetry: a,
                  attributes: {
                    ...$r({
                      operationId: "ai.toolCall",
                      telemetry: a
                    }),
                    "ai.toolCall.name": k.toolName,
                    "ai.toolCall.id": k.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(k.args)
                    }
                  }
                }),
                tracer: n,
                fn: async (b) => w.execute(k.args).then(
                  (I) => {
                    i.enqueue({
                      ...k,
                      type: "tool-result",
                      result: I
                    }), o.delete(T), s && o.size === 0 && i.close();
                    try {
                      b.setAttributes(
                        We({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(I)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (I) => {
                    i.enqueue({
                      type: "error",
                      error: I
                    }), o.delete(T), s && o.size === 0 && i.close();
                  }
                )
              });
            }
          } catch (k) {
            i.enqueue({
              type: "error",
              error: k
            });
          }
          break;
        }
        case "finish": {
          f.enqueue({
            type: "finish",
            finishReason: m.finishReason,
            logprobs: m.logprobs,
            usage: Ml(m.usage),
            experimental_providerMetadata: m.providerMetadata
          });
          break;
        }
        default: {
          const y = p;
          throw new Error(`Unhandled chunk type: ${y}`);
        }
      }
    },
    flush() {
      s = !0, o.size === 0 && i.close();
    }
  });
  return new ReadableStream({
    async start(m) {
      return Promise.all([
        t.pipeThrough(d).pipeTo(
          new WritableStream({
            write(f) {
              m.enqueue(f);
            },
            close() {
            }
          })
        ),
        u.pipeTo(
          new WritableStream({
            write(f) {
              m.enqueue(f);
            },
            close() {
              m.close();
            }
          })
        )
      ]);
    }
  });
}
var Hl = ia({ prefix: "aitxt-", length: 24 });
async function Fl({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: s,
  maxRetries: o,
  abortSignal: i,
  headers: u,
  maxToolRoundtrips: c = 0,
  experimental_telemetry: d,
  experimental_providerMetadata: m,
  experimental_toolCallStreaming: f = !1,
  onChunk: p,
  onFinish: y,
  _internal: {
    now: w = $l,
    generateId: k = Hl,
    currentDate: T = () => /* @__PURE__ */ new Date()
  } = {},
  ...b
}) {
  var I;
  const P = dl({
    model: e,
    telemetry: d,
    headers: u,
    settings: { ...b, maxRetries: o }
  }), H = fl({ isEnabled: (I = d == null ? void 0 : d.isEnabled) != null ? I : !1 });
  return Zr({
    name: "ai.streamText",
    attributes: We({
      telemetry: d,
      attributes: {
        ...$r({ operationId: "ai.streamText", telemetry: d }),
        ...P,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system: n, prompt: a, messages: s })
        }
      }
    }),
    tracer: H,
    endWhenDone: !1,
    fn: async (Me) => {
      const $e = cl({ maxRetries: o }), Se = async ({
        promptMessages: te,
        promptType: ge
      }) => {
        const {
          result: { stream: Ee, warnings: Z, rawResponse: ye },
          doStreamSpan: q,
          startTimestampMs: $
        } = await $e(
          () => Zr({
            name: "ai.streamText.doStream",
            attributes: We({
              telemetry: d,
              attributes: {
                ...$r({
                  operationId: "ai.streamText.doStream",
                  telemetry: d
                }),
                ...P,
                "ai.prompt.format": {
                  input: () => ge
                },
                "ai.prompt.messages": {
                  input: () => JSON.stringify(te)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": e.provider,
                "gen_ai.request.model": e.modelId,
                "gen_ai.request.frequency_penalty": b.frequencyPenalty,
                "gen_ai.request.max_tokens": b.maxTokens,
                "gen_ai.request.presence_penalty": b.presencePenalty,
                "gen_ai.request.stop_sequences": b.stopSequences,
                "gen_ai.request.temperature": b.temperature,
                "gen_ai.request.top_k": b.topK,
                "gen_ai.request.top_p": b.topP
              }
            }),
            tracer: H,
            endWhenDone: !1,
            fn: async (Zt) => ({
              startTimestampMs: w(),
              // get before the call
              doStreamSpan: Zt,
              result: await e.doStream({
                mode: {
                  type: "regular",
                  ...Dl({ tools: t, toolChoice: r })
                },
                ...Cl(b),
                inputFormat: ge,
                prompt: te,
                providerMetadata: m,
                abortSignal: i,
                headers: u
              })
            })
          })
        );
        return {
          result: {
            stream: Jl({
              tools: t,
              generatorStream: Ee,
              toolCallStreaming: f,
              tracer: H,
              telemetry: d
            }),
            warnings: Z,
            rawResponse: ye
          },
          doStreamSpan: q,
          startTimestampMs: $
        };
      }, Ce = await kl({
        prompt: kn({ system: n, prompt: a, messages: s }),
        modelSupportsImageUrls: e.supportsImageUrls
      }), {
        result: { stream: Ze, warnings: De, rawResponse: Le },
        doStreamSpan: F,
        startTimestampMs: J
      } = await Se({
        promptType: kn({ system: n, prompt: a, messages: s }).type,
        promptMessages: Ce
      });
      return new Wl({
        stream: Ze,
        warnings: De,
        rawResponse: Le,
        onChunk: p,
        onFinish: y,
        rootSpan: Me,
        doStreamSpan: F,
        telemetry: d,
        startTimestampMs: J,
        maxToolRoundtrips: c,
        startRoundtrip: Se,
        promptMessages: Ce,
        modelId: e.modelId,
        now: w,
        currentDate: T,
        generateId: k
      });
    }
  });
}
var Wl = class {
  constructor({
    stream: e,
    warnings: t,
    rawResponse: r,
    onChunk: n,
    onFinish: a,
    rootSpan: s,
    doStreamSpan: o,
    telemetry: i,
    startTimestampMs: u,
    maxToolRoundtrips: c,
    startRoundtrip: d,
    promptMessages: m,
    modelId: f,
    now: p,
    currentDate: y,
    generateId: w
  }) {
    this.warnings = t, this.rawResponse = r;
    const { resolve: k, promise: T } = Ne();
    this.usage = T;
    const { resolve: b, promise: I } = Ne();
    this.finishReason = I;
    const { resolve: P, promise: H } = Ne();
    this.text = H;
    const { resolve: Me, promise: $e } = Ne();
    this.toolCalls = $e;
    const { resolve: Se, promise: Ce } = Ne();
    this.toolResults = Ce;
    const {
      resolve: Ze,
      promise: De
    } = Ne();
    this.experimental_providerMetadata = De;
    const { resolve: Le, promise: F } = Ne();
    this.response = F;
    const {
      stream: J,
      addStream: te,
      close: ge
    } = zl();
    this.originalStream = J;
    const Ee = this;
    function Z({
      stream: ye,
      startTimestamp: q,
      doStreamSpan: $,
      currentToolRoundtrip: Zt,
      promptMessages: lr,
      usage: ur = {
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0
      }
    }) {
      const ve = [], Ye = [];
      let W = "unknown", re = {
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0
      }, Xe, cn = !0, _e = "", cr, V = {
        id: w(),
        timestamp: y(),
        modelId: f
      };
      te(
        ye.pipeThrough(
          new TransformStream({
            async transform(O, ne) {
              var ue, ce, Dt;
              if (cn) {
                const G = p() - q;
                cn = !1, $.addEvent("ai.stream.firstChunk", {
                  "ai.response.msToFirstChunk": G,
                  // deprecated:
                  "ai.stream.msToFirstChunk": G
                }), $.setAttributes({
                  "ai.response.msToFirstChunk": G,
                  // deprecated:
                  "ai.stream.msToFirstChunk": G
                });
              }
              if (O.type === "text-delta" && O.textDelta.length === 0)
                return;
              const Lt = O.type;
              switch (Lt) {
                case "text-delta": {
                  ne.enqueue(O), _e += O.textDelta, await (n == null ? void 0 : n({ chunk: O }));
                  break;
                }
                case "tool-call": {
                  ne.enqueue(O), ve.push(O), await (n == null ? void 0 : n({ chunk: O }));
                  break;
                }
                case "tool-result": {
                  ne.enqueue(O), Ye.push(O), await (n == null ? void 0 : n({ chunk: O }));
                  break;
                }
                case "response-metadata": {
                  V = {
                    id: (ue = O.id) != null ? ue : V.id,
                    timestamp: (ce = O.timestamp) != null ? ce : V.timestamp,
                    modelId: (Dt = O.modelId) != null ? Dt : V.modelId
                  };
                  break;
                }
                case "finish": {
                  re = O.usage, W = O.finishReason, Xe = O.experimental_providerMetadata, cr = O.logprobs;
                  const G = p() - q;
                  $.addEvent("ai.stream.finish"), $.setAttributes({
                    "ai.response.msToFinish": G,
                    "ai.response.avgCompletionTokensPerSecond": 1e3 * re.completionTokens / G
                  });
                  break;
                }
                case "tool-call-streaming-start":
                case "tool-call-delta": {
                  ne.enqueue(O), await (n == null ? void 0 : n({ chunk: O }));
                  break;
                }
                case "error": {
                  ne.enqueue(O), W = "error";
                  break;
                }
                default: {
                  const G = Lt;
                  throw new Error(`Unknown chunk type: ${G}`);
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(O) {
              O.enqueue({
                type: "roundtrip-finish",
                finishReason: W,
                usage: re,
                experimental_providerMetadata: Xe,
                logprobs: cr,
                response: V
              });
              const ne = ve.length > 0 ? JSON.stringify(ve) : void 0;
              try {
                $.setAttributes(
                  We({
                    telemetry: i,
                    attributes: {
                      "ai.response.finishReason": W,
                      "ai.response.text": { output: () => _e },
                      "ai.response.toolCalls": {
                        output: () => ne
                      },
                      "ai.response.id": V.id,
                      "ai.response.model": V.modelId,
                      "ai.response.timestamp": V.timestamp.toISOString(),
                      "ai.usage.promptTokens": re.promptTokens,
                      "ai.usage.completionTokens": re.completionTokens,
                      // deprecated
                      "ai.finishReason": W,
                      "ai.result.text": { output: () => _e },
                      "ai.result.toolCalls": {
                        output: () => ne
                      },
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [W],
                      "gen_ai.response.id": V.id,
                      "gen_ai.response.model": V.modelId,
                      "gen_ai.usage.input_tokens": re.promptTokens,
                      "gen_ai.usage.output_tokens": re.completionTokens
                    }
                  })
                );
              } catch {
              } finally {
                $.end();
              }
              const ue = {
                promptTokens: ur.promptTokens + re.promptTokens,
                completionTokens: ur.completionTokens + re.completionTokens,
                totalTokens: ur.totalTokens + re.totalTokens
              };
              if (
                // there are tool calls:
                ve.length > 0 && // all current tool calls have results:
                Ye.length === ve.length && // the number of roundtrips is less than the maximum:
                Zt < c
              ) {
                lr.push(
                  ...Ll({
                    text: _e,
                    toolCalls: ve,
                    toolResults: Ye
                  }).map(
                    (G) => qa(G, null)
                  )
                );
                const {
                  result: ce,
                  doStreamSpan: Dt,
                  startTimestampMs: Lt
                } = await d({
                  promptType: "messages",
                  promptMessages: lr
                });
                Ee.warnings = ce.warnings, Ee.rawResponse = ce.rawResponse, Z({
                  stream: ce.stream,
                  startTimestamp: Lt,
                  doStreamSpan: Dt,
                  currentToolRoundtrip: Zt + 1,
                  promptMessages: lr,
                  usage: ue
                });
                return;
              }
              try {
                O.enqueue({
                  type: "finish",
                  finishReason: W,
                  usage: ue,
                  experimental_providerMetadata: Xe,
                  logprobs: cr,
                  response: V
                }), ge(), s.setAttributes(
                  We({
                    telemetry: i,
                    attributes: {
                      "ai.response.finishReason": W,
                      "ai.response.text": { output: () => _e },
                      "ai.response.toolCalls": {
                        output: () => ne
                      },
                      "ai.usage.promptTokens": ue.promptTokens,
                      "ai.usage.completionTokens": ue.completionTokens,
                      // deprecated
                      "ai.finishReason": W,
                      "ai.result.text": { output: () => _e },
                      "ai.result.toolCalls": {
                        output: () => ne
                      }
                    }
                  })
                ), k(ue), b(W), P(_e), Me(ve), Ze(Xe), Se(Ye), Le({
                  ...V,
                  headers: r == null ? void 0 : r.headers
                }), await (a == null ? void 0 : a({
                  finishReason: W,
                  usage: ue,
                  text: _e,
                  toolCalls: ve,
                  // The tool results are inferred as a never[] type, because they are
                  // optional and the execute method with an inferred result type is
                  // optional as well. Therefore we need to cast the toolResults to any.
                  // The type exposed to the users will be correctly inferred.
                  toolResults: Ye,
                  rawResponse: r,
                  response: {
                    ...V,
                    headers: r == null ? void 0 : r.headers
                  },
                  warnings: t,
                  experimental_providerMetadata: Xe
                }));
              } catch (ce) {
                O.error(ce);
              } finally {
                s.end();
              }
            }
          })
        )
      );
    }
    Z({
      stream: e,
      startTimestamp: u,
      doStreamSpan: o,
      currentToolRoundtrip: 0,
      promptMessages: m,
      usage: void 0
    });
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
  get textStream() {
    return Tn(this.teeStream(), {
      transform(e, t) {
        e.type === "text-delta" ? t.enqueue(e.textDelta) : e.type === "error" && t.error(e.error);
      }
    });
  }
  get fullStream() {
    return Tn(this.teeStream(), {
      transform(e, t) {
        t.enqueue(e);
      }
    });
  }
  toAIStream(e = {}) {
    return this.toDataStreamInternal({ callbacks: e });
  }
  toDataStreamInternal({
    callbacks: e = {},
    getErrorMessage: t = () => ""
    // mask error messages for safety by default
  } = {}) {
    let r = "";
    const n = new TransformStream({
      async start() {
        e.onStart && await e.onStart();
      },
      async transform(s, o) {
        if (o.enqueue(s), s.type === "text-delta") {
          const i = s.textDelta;
          r += i, e.onToken && await e.onToken(i), e.onText && await e.onText(i);
        }
      },
      async flush() {
        e.onCompletion && await e.onCompletion(r), e.onFinal && await e.onFinal(r);
      }
    }), a = new TransformStream({
      transform: async (s, o) => {
        const i = s.type;
        switch (i) {
          case "text-delta":
            o.enqueue(me("text", s.textDelta));
            break;
          case "tool-call-streaming-start":
            o.enqueue(
              me("tool_call_streaming_start", {
                toolCallId: s.toolCallId,
                toolName: s.toolName
              })
            );
            break;
          case "tool-call-delta":
            o.enqueue(
              me("tool_call_delta", {
                toolCallId: s.toolCallId,
                argsTextDelta: s.argsTextDelta
              })
            );
            break;
          case "tool-call":
            o.enqueue(
              me("tool_call", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              })
            );
            break;
          case "tool-result":
            o.enqueue(
              me("tool_result", {
                toolCallId: s.toolCallId,
                result: s.result
              })
            );
            break;
          case "error":
            o.enqueue(
              me("error", t(s.error))
            );
            break;
          case "roundtrip-finish":
            o.enqueue(
              me("finish_roundtrip", {
                finishReason: s.finishReason,
                usage: {
                  promptTokens: s.usage.promptTokens,
                  completionTokens: s.usage.completionTokens
                }
              })
            );
            break;
          case "finish":
            o.enqueue(
              me("finish_message", {
                finishReason: s.finishReason,
                usage: {
                  promptTokens: s.usage.promptTokens,
                  completionTokens: s.usage.completionTokens
                }
              })
            );
            break;
          default: {
            const u = i;
            throw new Error(`Unknown chunk type: ${u}`);
          }
        }
      }
    });
    return this.fullStream.pipeThrough(n).pipeThrough(a).pipeThrough(new TextEncoderStream());
  }
  pipeAIStreamToResponse(e, t) {
    return this.pipeDataStreamToResponse(e, t);
  }
  pipeDataStreamToResponse(e, t) {
    const r = t == null ? void 0 : "init" in t ? t.init : {
      headers: "headers" in t ? t.headers : void 0,
      status: "status" in t ? t.status : void 0,
      statusText: "statusText" in t ? t.statusText : void 0
    }, n = t == null ? void 0 : "data" in t ? t.data : void 0, a = t == null ? void 0 : "getErrorMessage" in t ? t.getErrorMessage : void 0;
    Cn({
      response: e,
      status: r == null ? void 0 : r.status,
      statusText: r == null ? void 0 : r.statusText,
      headers: Sn(r, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({ data: n, getErrorMessage: a })
    });
  }
  pipeTextStreamToResponse(e, t) {
    Cn({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: Sn(t, {
        contentType: "text/plain; charset=utf-8"
      }),
      stream: this.textStream.pipeThrough(new TextEncoderStream())
    });
  }
  toAIStreamResponse(e) {
    return this.toDataStreamResponse(e);
  }
  toDataStream(e) {
    const t = this.toDataStreamInternal({
      getErrorMessage: e == null ? void 0 : e.getErrorMessage
    });
    return e != null && e.data ? Ga(e == null ? void 0 : e.data.stream, t) : t;
  }
  toDataStreamResponse(e) {
    var t;
    const r = e == null ? void 0 : "init" in e ? e.init : {
      headers: "headers" in e ? e.headers : void 0,
      status: "status" in e ? e.status : void 0,
      statusText: "statusText" in e ? e.statusText : void 0
    }, n = e == null ? void 0 : "data" in e ? e.data : void 0, a = e == null ? void 0 : "getErrorMessage" in e ? e.getErrorMessage : void 0;
    return new Response(this.toDataStream({ data: n, getErrorMessage: a }), {
      status: (t = r == null ? void 0 : r.status) != null ? t : 200,
      statusText: r == null ? void 0 : r.statusText,
      headers: Br(r, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      })
    });
  }
  toTextStreamResponse(e) {
    var t;
    return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: Br(e, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, ju = Fl;
function Gl(e) {
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
      const a = Kl(n);
      n.onCompletion && await n.onCompletion(r), n.onFinal && !a && await n.onFinal(r);
    }
  });
}
function Kl(e) {
  return "experimental_onFunctionCall" in e;
}
function Yl() {
  const e = new TextEncoder(), t = new TextDecoder();
  return new TransformStream({
    transform: async (r, n) => {
      const a = t.decode(r);
      n.enqueue(e.encode(me("text", a)));
    }
  });
}
new TextDecoder("utf-8");
var Xl = {};
il(Xl, {
  toAIStream: () => Ql,
  toDataStream: () => ln,
  toDataStreamResponse: () => eu
});
function Ql(e, t) {
  return ln(e, t);
}
function ln(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        var a;
        if (typeof r == "string") {
          n.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && En(
            (a = r.data) == null ? void 0 : a.chunk,
            n
          );
          return;
        }
        En(r, n);
      }
    })
  ).pipeThrough(Gl(t)).pipeThrough(Yl());
}
function eu(e, t) {
  var r;
  const n = ln(e, t == null ? void 0 : t.callbacks), a = t == null ? void 0 : t.data, s = t == null ? void 0 : t.init, o = a ? Ga(a.stream, n) : n;
  return new Response(o, {
    status: (r = s == null ? void 0 : s.status) != null ? r : 200,
    statusText: s == null ? void 0 : s.statusText,
    headers: Br(s, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function En(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const n of r)
      n.type === "text" && t.enqueue(n.text);
  }
}
var tu = l.object({
  type: l.literal("error"),
  error: l.object({
    type: l.string(),
    message: l.string()
  })
}), In = Qr({
  errorSchema: tu,
  errorToMessage: (e) => e.error.message
});
function ru({
  prompt: e,
  cacheControl: t
}) {
  var r, n, a, s;
  const o = nu(e);
  let i;
  const u = [];
  function c(d) {
    var m;
    if (t === !1)
      return;
    const f = d == null ? void 0 : d.anthropic;
    return (m = f == null ? void 0 : f.cacheControl) != null ? m : f == null ? void 0 : f.cache_control;
  }
  for (let d = 0; d < o.length; d++) {
    const m = o[d], f = m.type;
    switch (f) {
      case "system": {
        if (i != null)
          throw new L({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        i = m.messages.map(({ content: p, providerMetadata: y }) => ({
          type: "text",
          text: p,
          cache_control: c(y)
        }));
        break;
      }
      case "user": {
        const p = [];
        for (const y of m.messages) {
          const { role: w, content: k } = y;
          switch (w) {
            case "user": {
              for (let T = 0; T < k.length; T++) {
                const b = k[T], I = T === k.length - 1, P = (r = c(b.providerMetadata)) != null ? r : I ? c(y.providerMetadata) : void 0;
                switch (b.type) {
                  case "text": {
                    p.push({
                      type: "text",
                      text: b.text,
                      cache_control: P
                    });
                    break;
                  }
                  case "image": {
                    if (b.image instanceof URL)
                      throw new L({
                        functionality: "Image URLs in user messages"
                      });
                    p.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: (n = b.mimeType) != null ? n : "image/jpeg",
                        data: ua(b.image)
                      },
                      cache_control: P
                    });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let T = 0; T < k.length; T++) {
                const b = k[T], I = T === k.length - 1, P = (a = c(b.providerMetadata)) != null ? a : I ? c(y.providerMetadata) : void 0;
                p.push({
                  type: "tool_result",
                  tool_use_id: b.toolCallId,
                  content: JSON.stringify(b.result),
                  is_error: b.isError,
                  cache_control: P
                });
              }
              break;
            }
            default: {
              const T = w;
              throw new Error(`Unsupported role: ${T}`);
            }
          }
        }
        u.push({ role: "user", content: p });
        break;
      }
      case "assistant": {
        const p = [];
        for (const y of m.messages) {
          const { content: w } = y;
          for (let k = 0; k < w.length; k++) {
            const T = w[k], b = k === w.length - 1, I = (s = c(T.providerMetadata)) != null ? s : b ? c(y.providerMetadata) : void 0;
            switch (T.type) {
              case "text": {
                p.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    d === o.length - 1 && k === m.messages.length - 1 ? T.text.trim() : T.text
                  ),
                  cache_control: I
                });
                break;
              }
              case "tool-call": {
                p.push({
                  type: "tool_use",
                  id: T.toolCallId,
                  name: T.toolName,
                  input: T.args,
                  cache_control: I
                });
                break;
              }
            }
          }
        }
        u.push({ role: "assistant", content: p });
        break;
      }
      default: {
        const p = f;
        throw new Error(`Unsupported type: ${p}`);
      }
    }
  }
  return {
    system: i,
    messages: u
  };
}
function nu(e) {
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
function Nn(e) {
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
var au = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "tool", this.supportsImageUrls = !1, this.modelId = e, this.settings = t, this.config = r;
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
    topK: s,
    frequencyPenalty: o,
    presencePenalty: i,
    stopSequences: u,
    responseFormat: c,
    seed: d
  }) {
    var m;
    const f = e.type, p = [];
    o != null && p.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && p.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), d != null && p.push({
      type: "unsupported-setting",
      setting: "seed"
    }), c != null && c.type !== "text" && p.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const y = ru({
      prompt: t,
      cacheControl: (m = this.settings.cacheControl) != null ? m : !1
    }), w = {
      // model id:
      model: this.modelId,
      // model specific settings:
      top_k: s ?? this.settings.topK,
      // standardized settings:
      max_tokens: r ?? 4096,
      // 4096: max model output tokens
      temperature: n,
      top_p: a,
      stop_sequences: u,
      // prompt:
      system: y.system,
      messages: y.messages
    };
    switch (f) {
      case "regular":
        return {
          args: { ...w, ...iu(e) },
          warnings: p
        };
      case "object-json":
        throw new L({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: k, description: T, parameters: b } = e.tool;
        return {
          args: {
            ...w,
            tools: [{ name: k, description: T, input_schema: b }],
            tool_choice: { type: "tool", name: k }
          },
          warnings: p
        };
      }
      default: {
        const k = f;
        throw new Error(`Unsupported type: ${k}`);
      }
    }
  }
  getHeaders(e) {
    return fe(
      this.config.headers(),
      this.settings.cacheControl ? { "anthropic-beta": "prompt-caching-2024-07-31" } : {},
      e
    );
  }
  async doGenerate(e) {
    var t, r, n, a;
    const { args: s, warnings: o } = await this.getArgs(e), { responseHeaders: i, value: u } = await oe({
      url: `${this.config.baseURL}/messages`,
      headers: this.getHeaders(e.headers),
      body: s,
      failedResponseHandler: In,
      successfulResponseHandler: Ke(
        su
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: c, ...d } = s;
    let m = "";
    for (const p of u.content)
      p.type === "text" && (m += p.text);
    let f;
    if (u.content.some((p) => p.type === "tool_use")) {
      f = [];
      for (const p of u.content)
        p.type === "tool_use" && f.push({
          toolCallType: "function",
          toolCallId: p.id,
          toolName: p.name,
          args: JSON.stringify(p.input)
        });
    }
    return {
      text: m,
      toolCalls: f,
      finishReason: Nn(u.stop_reason),
      usage: {
        promptTokens: u.usage.input_tokens,
        completionTokens: u.usage.output_tokens
      },
      rawCall: { rawPrompt: c, rawSettings: d },
      rawResponse: { headers: i },
      response: {
        id: (t = u.id) != null ? t : void 0,
        modelId: (r = u.model) != null ? r : void 0
      },
      warnings: o,
      providerMetadata: this.settings.cacheControl === !0 ? {
        anthropic: {
          cacheCreationInputTokens: (n = u.usage.cache_creation_input_tokens) != null ? n : null,
          cacheReadInputTokens: (a = u.usage.cache_read_input_tokens) != null ? a : null
        }
      } : void 0
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { responseHeaders: n, value: a } = await oe({
      url: `${this.config.baseURL}/messages`,
      headers: this.getHeaders(e.headers),
      body: { ...t, stream: !0 },
      failedResponseHandler: In,
      successfulResponseHandler: or(
        ou
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...o } = t;
    let i = "unknown";
    const u = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, c = {};
    let d;
    const m = this;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          transform(f, p) {
            var y, w, k, T;
            if (!f.success) {
              p.enqueue({ type: "error", error: f.error });
              return;
            }
            const b = f.value;
            switch (b.type) {
              case "ping":
                return;
              case "content_block_start": {
                const I = b.content_block.type;
                switch (I) {
                  case "text":
                    return;
                  case "tool_use": {
                    c[b.index] = {
                      toolCallId: b.content_block.id,
                      toolName: b.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const P = I;
                    throw new Error(
                      `Unsupported content block type: ${P}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (c[b.index] != null) {
                  const I = c[b.index];
                  p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: I.toolCallId,
                    toolName: I.toolName,
                    args: I.jsonText
                  }), delete c[b.index];
                }
                return;
              }
              case "content_block_delta": {
                const I = b.delta.type;
                switch (I) {
                  case "text_delta": {
                    p.enqueue({
                      type: "text-delta",
                      textDelta: b.delta.text
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const P = c[b.index];
                    p.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: P.toolCallId,
                      toolName: P.toolName,
                      argsTextDelta: b.delta.partial_json
                    }), P.jsonText += b.delta.partial_json;
                    return;
                  }
                  default: {
                    const P = I;
                    throw new Error(
                      `Unsupported delta type: ${P}`
                    );
                  }
                }
              }
              case "message_start": {
                u.promptTokens = b.message.usage.input_tokens, u.completionTokens = b.message.usage.output_tokens, m.settings.cacheControl === !0 && (d = {
                  anthropic: {
                    cacheCreationInputTokens: (y = b.message.usage.cache_creation_input_tokens) != null ? y : null,
                    cacheReadInputTokens: (w = b.message.usage.cache_read_input_tokens) != null ? w : null
                  }
                }), p.enqueue({
                  type: "response-metadata",
                  id: (k = b.message.id) != null ? k : void 0,
                  modelId: (T = b.message.model) != null ? T : void 0
                });
                return;
              }
              case "message_delta": {
                u.completionTokens = b.usage.output_tokens, i = Nn(b.delta.stop_reason);
                return;
              }
              case "message_stop": {
                p.enqueue({
                  type: "finish",
                  finishReason: i,
                  usage: u,
                  providerMetadata: d
                });
                return;
              }
              case "error": {
                p.enqueue({ type: "error", error: b.error });
                return;
              }
              default: {
                const I = b;
                throw new Error(`Unsupported chunk type: ${I}`);
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
}, su = l.object({
  type: l.literal("message"),
  id: l.string().nullish(),
  model: l.string().nullish(),
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
  stop_reason: l.string().nullish(),
  usage: l.object({
    input_tokens: l.number(),
    output_tokens: l.number(),
    cache_creation_input_tokens: l.number().nullish(),
    cache_read_input_tokens: l.number().nullish()
  })
}), ou = l.discriminatedUnion("type", [
  l.object({
    type: l.literal("message_start"),
    message: l.object({
      id: l.string().nullish(),
      model: l.string().nullish(),
      usage: l.object({
        input_tokens: l.number(),
        output_tokens: l.number(),
        cache_creation_input_tokens: l.number().nullish(),
        cache_read_input_tokens: l.number().nullish()
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
    type: l.literal("error"),
    error: l.object({
      type: l.string(),
      message: l.string()
    })
  }),
  l.object({
    type: l.literal("message_delta"),
    delta: l.object({ stop_reason: l.string().nullish() }),
    usage: l.object({ output_tokens: l.number() })
  }),
  l.object({
    type: l.literal("message_stop")
  }),
  l.object({
    type: l.literal("ping")
  })
]);
function iu(e) {
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
function lu(e = {}) {
  var t, r;
  const n = (r = en((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.anthropic.com/v1", a = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": Kr({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), s = (i, u = {}) => new au(i, u, {
    provider: "anthropic.messages",
    baseURL: n,
    headers: a,
    fetch: e.fetch
  }), o = function(i, u) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return s(i, u);
  };
  return o.languageModel = s, o.chat = s, o.messages = s, o.textEmbeddingModel = (i) => {
    throw new ls({ modelId: i, modelType: "textEmbeddingModel" });
  }, o;
}
lu();
function uu(e) {
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
                throw new L({
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
          tool_calls: s.length > 0 ? s : void 0
        });
        break;
      }
      case "tool": {
        for (const a of n)
          t.push({
            role: "tool",
            name: a.toolName,
            content: JSON.stringify(a.result),
            tool_call_id: a.toolCallId
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
function jn(e) {
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
var cu = l.object({
  object: l.literal("error"),
  message: l.string(),
  type: l.string(),
  param: l.string().nullable(),
  code: l.string().nullable()
}), Hr = Qr({
  errorSchema: cu,
  errorToMessage: (e) => e.message
});
function An({
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
var du = class {
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
    topK: s,
    frequencyPenalty: o,
    presencePenalty: i,
    stopSequences: u,
    responseFormat: c,
    seed: d
  }) {
    const m = e.type, f = [];
    s != null && f.push({
      type: "unsupported-setting",
      setting: "topK"
    }), o != null && f.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && f.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), u != null && f.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    }), c != null && c.type === "json" && c.schema != null && f.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is not supported"
    });
    const p = {
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
      messages: uu(t)
    };
    switch (m) {
      case "regular":
        return {
          args: { ...p, ...fu(e) },
          warnings: f
        };
      case "object-json":
        return {
          args: {
            ...p,
            response_format: { type: "json_object" }
          },
          warnings: f
        };
      case "object-tool":
        return {
          args: {
            ...p,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: f
        };
      default: {
        const y = m;
        throw new Error(`Unsupported type: ${y}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const { args: n, warnings: a } = this.getArgs(e), { responseHeaders: s, value: o } = await oe({
      url: `${this.config.baseURL}/chat/completions`,
      headers: fe(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Hr,
      successfulResponseHandler: Ke(
        pu
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...u } = n, c = o.choices[0];
    return {
      text: (t = c.message.content) != null ? t : void 0,
      toolCalls: (r = c.message.tool_calls) == null ? void 0 : r.map((d) => ({
        toolCallType: "function",
        toolCallId: d.id,
        toolName: d.function.name,
        args: d.function.arguments
      })),
      finishReason: jn(c.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: u },
      rawResponse: { headers: s },
      response: An(o),
      warnings: a
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await oe({
      url: `${this.config.baseURL}/chat/completions`,
      headers: fe(this.config.headers(), e.headers),
      body: { ...t, stream: !0 },
      failedResponseHandler: Hr,
      successfulResponseHandler: or(
        mu
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...o } = t;
    let i = "unknown", u = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, c = !0;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          transform(d, m) {
            if (!d.success) {
              m.enqueue({ type: "error", error: d.error });
              return;
            }
            const f = d.value;
            c && (c = !1, m.enqueue({
              type: "response-metadata",
              ...An(f)
            })), f.usage != null && (u = {
              promptTokens: f.usage.prompt_tokens,
              completionTokens: f.usage.completion_tokens
            });
            const p = f.choices[0];
            if ((p == null ? void 0 : p.finish_reason) != null && (i = jn(p.finish_reason)), (p == null ? void 0 : p.delta) == null)
              return;
            const y = p.delta;
            if (y.content != null && m.enqueue({
              type: "text-delta",
              textDelta: y.content
            }), y.tool_calls != null)
              for (const w of y.tool_calls)
                m.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: w.id,
                  toolName: w.function.name,
                  argsTextDelta: w.function.arguments
                }), m.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: w.id,
                  toolName: w.function.name,
                  args: w.function.arguments
                });
          },
          flush(d) {
            d.enqueue({ type: "finish", finishReason: i, usage: u });
          }
        })
      ),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, pu = l.object({
  id: l.string().nullish(),
  created: l.number().nullish(),
  model: l.string().nullish(),
  choices: l.array(
    l.object({
      message: l.object({
        role: l.literal("assistant"),
        content: l.string().nullable(),
        tool_calls: l.array(
          l.object({
            id: l.string(),
            function: l.object({ name: l.string(), arguments: l.string() })
          })
        ).nullish()
      }),
      index: l.number(),
      finish_reason: l.string().nullish()
    })
  ),
  object: l.literal("chat.completion"),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  })
}), mu = l.object({
  id: l.string().nullish(),
  created: l.number().nullish(),
  model: l.string().nullish(),
  choices: l.array(
    l.object({
      delta: l.object({
        role: l.enum(["assistant"]).optional(),
        content: l.string().nullish(),
        tool_calls: l.array(
          l.object({
            id: l.string(),
            function: l.object({ name: l.string(), arguments: l.string() })
          })
        ).nullish()
      }),
      finish_reason: l.string().nullish(),
      index: l.number()
    })
  ),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  }).nullish()
});
function fu(e) {
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
var hu = class {
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
      throw new Qn({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await oe({
      url: `${this.config.baseURL}/embeddings`,
      headers: fe(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Hr,
      successfulResponseHandler: Ke(
        gu
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
}, gu = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function yu(e = {}) {
  var t, r;
  const n = (r = en((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.mistral.ai/v1", a = () => ({
    Authorization: `Bearer ${Kr({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), s = (u, c = {}) => new du(u, c, {
    provider: "mistral.chat",
    baseURL: n,
    headers: a,
    fetch: e.fetch
  }), o = (u, c = {}) => new hu(u, c, {
    provider: "mistral.embedding",
    baseURL: n,
    headers: a,
    fetch: e.fetch
  }), i = function(u, c) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return s(u, c);
  };
  return i.languageModel = s, i.chat = s, i.embedding = o, i.textEmbedding = o, i.textEmbeddingModel = o, i;
}
yu();
function vu({
  prompt: e,
  useLegacyFunctionCalling: t = !1
}) {
  const r = [];
  for (const { role: n, content: a } of e)
    switch (n) {
      case "system": {
        r.push({ role: "system", content: a });
        break;
      }
      case "user": {
        if (a.length === 1 && a[0].type === "text") {
          r.push({ role: "user", content: a[0].text });
          break;
        }
        r.push({
          role: "user",
          content: a.map((s) => {
            var o, i, u;
            switch (s.type) {
              case "text":
                return { type: "text", text: s.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: {
                    url: s.image instanceof URL ? s.image.toString() : `data:${(o = s.mimeType) != null ? o : "image/jpeg"};base64,${ua(s.image)}`,
                    // OpenAI specific extension: image detail
                    detail: (u = (i = s.providerMetadata) == null ? void 0 : i.openai) == null ? void 0 : u.imageDetail
                  }
                };
            }
          })
        });
        break;
      }
      case "assistant": {
        let s = "";
        const o = [];
        for (const i of a)
          switch (i.type) {
            case "text": {
              s += i.text;
              break;
            }
            case "tool-call": {
              o.push({
                id: i.toolCallId,
                type: "function",
                function: {
                  name: i.toolName,
                  arguments: JSON.stringify(i.args)
                }
              });
              break;
            }
            default: {
              const u = i;
              throw new Error(`Unsupported part: ${u}`);
            }
          }
        if (t) {
          if (o.length > 1)
            throw new L({
              functionality: "useLegacyFunctionCalling with multiple tool calls in one message"
            });
          r.push({
            role: "assistant",
            content: s,
            function_call: o.length > 0 ? o[0].function : void 0
          });
        } else
          r.push({
            role: "assistant",
            content: s,
            tool_calls: o.length > 0 ? o : void 0
          });
        break;
      }
      case "tool": {
        for (const s of a)
          t ? r.push({
            role: "function",
            name: s.toolName,
            content: JSON.stringify(s.result)
          }) : r.push({
            role: "tool",
            tool_call_id: s.toolCallId,
            content: JSON.stringify(s.result)
          });
        break;
      }
      default: {
        const s = n;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  return r;
}
function Rn(e) {
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
function nr(e) {
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
var un = l.object({
  error: l.object({
    message: l.string(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l.string().nullish(),
    param: l.any().nullish(),
    code: l.union([l.string(), l.number()]).nullish()
  })
}), Mt = Qr({
  errorSchema: un,
  errorToMessage: (e) => e.error.message
});
function ar({
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
var _u = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get supportsStructuredOutputs() {
    return this.settings.structuredOutputs === !0;
  }
  get defaultObjectGenerationMode() {
    return this.supportsStructuredOutputs ? "json" : "tool";
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
    presencePenalty: i,
    stopSequences: u,
    responseFormat: c,
    seed: d
  }) {
    var m;
    const f = e.type, p = [];
    s != null && p.push({
      type: "unsupported-setting",
      setting: "topK"
    }), c != null && c.type === "json" && c.schema != null && p.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is not supported"
    });
    const y = this.settings.useLegacyFunctionCalling;
    if (y && this.settings.parallelToolCalls === !0)
      throw new L({
        functionality: "useLegacyFunctionCalling with parallelToolCalls"
      });
    if (y && this.settings.structuredOutputs === !0)
      throw new L({
        functionality: "structuredOutputs with useLegacyFunctionCalling"
      });
    const w = {
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
      presence_penalty: i,
      stop: u,
      seed: d,
      // response format:
      response_format: (c == null ? void 0 : c.type) === "json" ? { type: "json_object" } : void 0,
      // messages:
      messages: vu({
        prompt: t,
        useLegacyFunctionCalling: y
      })
    };
    switch (f) {
      case "regular":
        return {
          args: {
            ...w,
            ...xu({
              mode: e,
              useLegacyFunctionCalling: y,
              structuredOutputs: this.settings.structuredOutputs
            })
          },
          warnings: p
        };
      case "object-json":
        return {
          args: {
            ...w,
            response_format: this.settings.structuredOutputs === !0 ? {
              type: "json_schema",
              json_schema: {
                schema: e.schema,
                strict: !0,
                name: (m = e.name) != null ? m : "response",
                description: e.description
              }
            } : { type: "json_object" }
          },
          warnings: p
        };
      case "object-tool":
        return {
          args: y ? {
            ...w,
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
            ...w,
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
                  strict: this.settings.structuredOutputs === !0 ? !0 : void 0
                }
              }
            ]
          },
          warnings: p
        };
      default: {
        const k = f;
        throw new Error(`Unsupported type: ${k}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o;
    const { args: i, warnings: u } = this.getArgs(e), { responseHeaders: c, value: d } = await oe({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: fe(this.config.headers(), e.headers),
      body: i,
      failedResponseHandler: Mt,
      successfulResponseHandler: Ke(
        bu
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: m, ...f } = i, p = d.choices[0];
    return {
      text: (t = p.message.content) != null ? t : void 0,
      toolCalls: this.settings.useLegacyFunctionCalling && p.message.function_call ? [
        {
          toolCallType: "function",
          toolCallId: qe(),
          toolName: p.message.function_call.name,
          args: p.message.function_call.arguments
        }
      ] : (r = p.message.tool_calls) == null ? void 0 : r.map((y) => {
        var w;
        return {
          toolCallType: "function",
          toolCallId: (w = y.id) != null ? w : qe(),
          toolName: y.function.name,
          args: y.function.arguments
        };
      }),
      finishReason: nr(p.finish_reason),
      usage: {
        promptTokens: (a = (n = d.usage) == null ? void 0 : n.prompt_tokens) != null ? a : NaN,
        completionTokens: (o = (s = d.usage) == null ? void 0 : s.completion_tokens) != null ? o : NaN
      },
      rawCall: { rawPrompt: m, rawSettings: f },
      rawResponse: { headers: c },
      response: ar(d),
      warnings: u,
      logprobs: Rn(p.logprobs)
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await oe({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: fe(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: Mt,
      successfulResponseHandler: or(
        wu
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: s, ...o } = t, i = [];
    let u = "unknown", c = {
      promptTokens: void 0,
      completionTokens: void 0
    }, d, m = !0;
    const { useLegacyFunctionCalling: f } = this.settings;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          transform(p, y) {
            var w, k, T, b, I, P, H, Me, $e, Se, Ce, Ze, De, Le;
            if (!p.success) {
              u = "error", y.enqueue({ type: "error", error: p.error });
              return;
            }
            const F = p.value;
            if ("error" in F) {
              u = "error", y.enqueue({ type: "error", error: F.error });
              return;
            }
            m && (m = !1, y.enqueue({
              type: "response-metadata",
              ...ar(F)
            })), F.usage != null && (c = {
              promptTokens: (w = F.usage.prompt_tokens) != null ? w : void 0,
              completionTokens: (k = F.usage.completion_tokens) != null ? k : void 0
            });
            const J = F.choices[0];
            if ((J == null ? void 0 : J.finish_reason) != null && (u = nr(J.finish_reason)), (J == null ? void 0 : J.delta) == null)
              return;
            const te = J.delta;
            te.content != null && y.enqueue({
              type: "text-delta",
              textDelta: te.content
            });
            const ge = Rn(
              J == null ? void 0 : J.logprobs
            );
            ge != null && ge.length && (d === void 0 && (d = []), d.push(...ge));
            const Ee = f && te.function_call != null ? [
              {
                type: "function",
                id: qe(),
                function: te.function_call,
                index: 0
              }
            ] : te.tool_calls;
            if (Ee != null)
              for (const Z of Ee) {
                const ye = Z.index;
                if (i[ye] == null) {
                  if (Z.type !== "function")
                    throw new dr({
                      data: Z,
                      message: "Expected 'function' type."
                    });
                  if (Z.id == null)
                    throw new dr({
                      data: Z,
                      message: "Expected 'id' to be a string."
                    });
                  if (((T = Z.function) == null ? void 0 : T.name) == null)
                    throw new dr({
                      data: Z,
                      message: "Expected 'function.name' to be a string."
                    });
                  i[ye] = {
                    id: Z.id,
                    type: "function",
                    function: {
                      name: Z.function.name,
                      arguments: (b = Z.function.arguments) != null ? b : ""
                    }
                  };
                  const $ = i[ye];
                  ((I = $.function) == null ? void 0 : I.name) != null && ((P = $.function) == null ? void 0 : P.arguments) != null && ($.function.arguments.length > 0 && y.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: $.id,
                    toolName: $.function.name,
                    argsTextDelta: $.function.arguments
                  }), mn($.function.arguments) && y.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (H = $.id) != null ? H : qe(),
                    toolName: $.function.name,
                    args: $.function.arguments
                  }));
                  continue;
                }
                const q = i[ye];
                ((Me = Z.function) == null ? void 0 : Me.arguments) != null && (q.function.arguments += (Se = ($e = Z.function) == null ? void 0 : $e.arguments) != null ? Se : ""), y.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: q.id,
                  toolName: q.function.name,
                  argsTextDelta: (Ce = Z.function.arguments) != null ? Ce : ""
                }), ((Ze = q.function) == null ? void 0 : Ze.name) != null && ((De = q.function) == null ? void 0 : De.arguments) != null && mn(q.function.arguments) && y.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (Le = q.id) != null ? Le : qe(),
                  toolName: q.function.name,
                  args: q.function.arguments
                });
              }
          },
          flush(p) {
            var y, w;
            p.enqueue({
              type: "finish",
              finishReason: u,
              logprobs: d,
              usage: {
                promptTokens: (y = c.promptTokens) != null ? y : NaN,
                completionTokens: (w = c.completionTokens) != null ? w : NaN
              }
            });
          }
        })
      ),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, Ka = l.object({
  prompt_tokens: l.number().nullish(),
  completion_tokens: l.number().nullish()
}).nullish(), bu = l.object({
  id: l.string().nullish(),
  created: l.number().nullish(),
  model: l.string().nullish(),
  choices: l.array(
    l.object({
      message: l.object({
        role: l.literal("assistant").nullish(),
        content: l.string().nullish(),
        function_call: l.object({
          arguments: l.string(),
          name: l.string()
        }).nullish(),
        tool_calls: l.array(
          l.object({
            id: l.string().nullish(),
            type: l.literal("function"),
            function: l.object({
              name: l.string(),
              arguments: l.string()
            })
          })
        ).nullish()
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
      }).nullish(),
      finish_reason: l.string().nullish()
    })
  ),
  usage: Ka
}), wu = l.union([
  l.object({
    id: l.string().nullish(),
    created: l.number().nullish(),
    model: l.string().nullish(),
    choices: l.array(
      l.object({
        delta: l.object({
          role: l.enum(["assistant"]).nullish(),
          content: l.string().nullish(),
          function_call: l.object({
            name: l.string().optional(),
            arguments: l.string().optional()
          }).nullish(),
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
    usage: Ka
  }),
  un
]);
function xu({
  mode: e,
  useLegacyFunctionCalling: t = !1,
  structuredOutputs: r = !1
}) {
  var n;
  const a = (n = e.tools) != null && n.length ? e.tools : void 0;
  if (a == null)
    return { tools: void 0, tool_choice: void 0 };
  const s = e.toolChoice;
  if (t) {
    const u = a.map((d) => ({
      name: d.name,
      description: d.description,
      parameters: d.parameters
    }));
    if (s == null)
      return { functions: u, function_call: void 0 };
    switch (s.type) {
      case "auto":
      case "none":
      case void 0:
        return {
          functions: u,
          function_call: void 0
        };
      case "required":
        throw new L({
          functionality: "useLegacyFunctionCalling and toolChoice: required"
        });
      default:
        return {
          functions: u,
          function_call: { name: s.toolName }
        };
    }
  }
  const o = a.map((u) => ({
    type: "function",
    function: {
      name: u.name,
      description: u.description,
      parameters: u.parameters,
      strict: r === !0 ? !0 : void 0
    }
  }));
  if (s == null)
    return { tools: o, tool_choice: void 0 };
  const i = s.type;
  switch (i) {
    case "auto":
    case "none":
    case "required":
      return { tools: o, tool_choice: i };
    case "tool":
      return {
        tools: o,
        tool_choice: {
          type: "function",
          function: {
            name: s.toolName
          }
        }
      };
    default: {
      const u = i;
      throw new Error(`Unsupported tool choice type: ${u}`);
    }
  }
}
function ku({
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
        throw new Ue({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const i = o.map((u) => {
          switch (u.type) {
            case "text":
              return u.text;
            case "image":
              throw new L({
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
        const i = o.map((u) => {
          switch (u.type) {
            case "text":
              return u.text;
            case "tool-call":
              throw new L({
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
        throw new L({
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
function Pn(e) {
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
var Tu = class {
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
    frequencyPenalty: i,
    presencePenalty: u,
    stopSequences: c,
    responseFormat: d,
    seed: m
  }) {
    var f;
    const p = e.type, y = [];
    o != null && y.push({
      type: "unsupported-setting",
      setting: "topK"
    }), d != null && d.type !== "text" && y.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: w, stopSequences: k } = ku({ prompt: r, inputFormat: t }), T = [...k ?? [], ...c ?? []], b = {
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
      frequency_penalty: i,
      presence_penalty: u,
      seed: m,
      // prompt:
      prompt: w,
      // stop sequences:
      stop: T.length > 0 ? T : void 0
    };
    switch (p) {
      case "regular": {
        if ((f = e.tools) != null && f.length)
          throw new L({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new L({
            functionality: "toolChoice"
          });
        return { args: b, warnings: y };
      }
      case "object-json":
        throw new L({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new L({
          functionality: "object-tool mode"
        });
      default: {
        const I = p;
        throw new Error(`Unsupported type: ${I}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await oe({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: fe(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Mt,
      successfulResponseHandler: Ke(
        Su
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...o } = t, i = a.choices[0];
    return {
      text: i.text,
      usage: {
        promptTokens: a.usage.prompt_tokens,
        completionTokens: a.usage.completion_tokens
      },
      finishReason: nr(i.finish_reason),
      logprobs: Pn(i.logprobs),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      response: ar(a),
      warnings: r
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await oe({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: fe(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
      },
      failedResponseHandler: Mt,
      successfulResponseHandler: or(
        Cu
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: s, ...o } = t;
    let i = "unknown", u = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, c, d = !0;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          transform(m, f) {
            if (!m.success) {
              i = "error", f.enqueue({ type: "error", error: m.error });
              return;
            }
            const p = m.value;
            if ("error" in p) {
              i = "error", f.enqueue({ type: "error", error: p.error });
              return;
            }
            d && (d = !1, f.enqueue({
              type: "response-metadata",
              ...ar(p)
            })), p.usage != null && (u = {
              promptTokens: p.usage.prompt_tokens,
              completionTokens: p.usage.completion_tokens
            });
            const y = p.choices[0];
            (y == null ? void 0 : y.finish_reason) != null && (i = nr(y.finish_reason)), (y == null ? void 0 : y.text) != null && f.enqueue({
              type: "text-delta",
              textDelta: y.text
            });
            const w = Pn(
              y == null ? void 0 : y.logprobs
            );
            w != null && w.length && (c === void 0 && (c = []), c.push(...w));
          },
          flush(m) {
            m.enqueue({
              type: "finish",
              finishReason: i,
              logprobs: c,
              usage: u
            });
          }
        })
      ),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      warnings: r
    };
  }
}, Su = l.object({
  id: l.string().nullish(),
  created: l.number().nullish(),
  model: l.string().nullish(),
  choices: l.array(
    l.object({
      text: l.string(),
      finish_reason: l.string(),
      logprobs: l.object({
        tokens: l.array(l.string()),
        token_logprobs: l.array(l.number()),
        top_logprobs: l.array(l.record(l.string(), l.number())).nullable()
      }).nullish()
    })
  ),
  usage: l.object({
    prompt_tokens: l.number(),
    completion_tokens: l.number()
  })
}), Cu = l.union([
  l.object({
    id: l.string().nullish(),
    created: l.number().nullish(),
    model: l.string().nullish(),
    choices: l.array(
      l.object({
        text: l.string(),
        finish_reason: l.string().nullish(),
        index: l.number(),
        logprobs: l.object({
          tokens: l.array(l.string()),
          token_logprobs: l.array(l.number()),
          top_logprobs: l.array(l.record(l.string(), l.number())).nullable()
        }).nullish()
      })
    ),
    usage: l.object({
      prompt_tokens: l.number(),
      completion_tokens: l.number()
    }).nullish()
  }),
  un
]), Eu = class {
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
      throw new Qn({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await oe({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: fe(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: Mt,
      successfulResponseHandler: Ke(
        Iu
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
}, Iu = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function Nu(e = {}) {
  var t, r, n;
  const a = (r = en((t = e.baseURL) != null ? t : e.baseUrl)) != null ? r : "https://api.openai.com/v1", s = (n = e.compatibility) != null ? n : "compatible", o = () => ({
    Authorization: `Bearer ${Kr({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), i = (f, p = {}) => new _u(f, p, {
    provider: "openai.chat",
    url: ({ path: y }) => `${a}${y}`,
    headers: o,
    compatibility: s,
    fetch: e.fetch
  }), u = (f, p = {}) => new Tu(f, p, {
    provider: "openai.completion",
    url: ({ path: y }) => `${a}${y}`,
    headers: o,
    compatibility: s,
    fetch: e.fetch
  }), c = (f, p = {}) => new Eu(f, p, {
    provider: "openai.embedding",
    url: ({ path: y }) => `${a}${y}`,
    headers: o,
    fetch: e.fetch
  }), d = (f, p) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return f === "gpt-3.5-turbo-instruct" ? u(
      f,
      p
    ) : i(f, p);
  }, m = function(f, p) {
    return d(f, p);
  };
  return m.languageModel = d, m.chat = i, m.completion = u, m.embedding = c, m.textEmbedding = c, m.textEmbeddingModel = c, m;
}
Nu({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  lu as createAnthropic,
  yu as createMistral,
  Nu as createOpenAI,
  ju as experimental_streamText
};
