var Bn = "vercel.ai.error", js = Symbol.for(Bn), Vn, As = class zn extends Error {
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
    super(r), this[Vn] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return zn.hasMarker(t, Bn);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
Vn = js;
var j = As, Hn = "AI_APICallError", Jn = `vercel.ai.error.${Hn}`, Os = Symbol.for(Jn), Wn, ge = class extends j {
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
    super({ name: Hn, message: e, cause: o }), this[Wn] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return j.hasMarker(e, Jn);
  }
};
Wn = Os;
var Fn = "AI_EmptyResponseBodyError", Gn = `vercel.ai.error.${Fn}`, Ms = Symbol.for(Gn), Kn, $s = class extends j {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Fn, message: e }), this[Kn] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Gn);
  }
};
Kn = Ms;
function Kr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Yn = "AI_InvalidArgumentError", Xn = `vercel.ai.error.${Yn}`, Zs = Symbol.for(Xn), Qn, Ds = class extends j {
  constructor({
    message: t,
    cause: r,
    argument: n
  }) {
    super({ name: Yn, message: t, cause: r }), this[Qn] = !0, this.argument = n;
  }
  static isInstance(t) {
    return j.hasMarker(t, Xn);
  }
};
Qn = Zs;
var ea = "AI_InvalidPromptError", ta = `vercel.ai.error.${ea}`, Us = Symbol.for(ta), ra, $e = class extends j {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: ea, message: `Invalid prompt: ${t}`, cause: r }), this[ra] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ta);
  }
};
ra = Us;
var na = "AI_InvalidResponseDataError", aa = `vercel.ai.error.${na}`, Ls = Symbol.for(aa), sa, Nr = class extends j {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: na, message: t }), this[sa] = !0, this.data = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, aa);
  }
};
sa = Ls;
var oa = "AI_JSONParseError", ia = `vercel.ai.error.${oa}`, qs = Symbol.for(ia), la, ar = class extends j {
  constructor({ text: e, cause: t }) {
    super({
      name: oa,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Kr(t)}`,
      cause: t
    }), this[la] = !0, this.text = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ia);
  }
};
la = qs;
var ua = "AI_LoadAPIKeyError", ca = `vercel.ai.error.${ua}`, Bs = Symbol.for(ca), da, er = class extends j {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: ua, message: e }), this[da] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, ca);
  }
};
da = Bs;
var pa = "AI_NoSuchModelError", fa = `vercel.ai.error.${pa}`, Vs = Symbol.for(fa), ma, zs = class extends j {
  constructor({
    errorName: e = pa,
    modelId: t,
    modelType: r,
    message: n = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: n }), this[ma] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, fa);
  }
};
ma = Vs;
var ha = "AI_TooManyEmbeddingValuesForCallError", ga = `vercel.ai.error.${ha}`, Hs = Symbol.for(ga), ya, va = class extends j {
  constructor(e) {
    super({
      name: ha,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[ya] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return j.hasMarker(e, ga);
  }
};
ya = Hs;
var _a = "AI_TypeValidationError", ba = `vercel.ai.error.${_a}`, Js = Symbol.for(ba), wa, Ws = class Ur extends j {
  constructor({ value: t, cause: r }) {
    super({
      name: _a,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Kr(r)}`,
      cause: r
    }), this[wa] = !0, this.value = t;
  }
  static isInstance(t) {
    return j.hasMarker(t, ba);
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
    return Ur.isInstance(r) && r.value === t ? r : new Ur({ value: t, cause: r });
  }
};
wa = Js;
var sr = Ws, xa = "AI_UnsupportedFunctionalityError", ka = `vercel.ai.error.${xa}`, Fs = Symbol.for(ka), Ta, B = class extends j {
  constructor({ functionality: e }) {
    super({
      name: xa,
      message: `'${e}' functionality not supported.`
    }), this[Ta] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ka);
  }
};
Ta = Fs;
let Gs = (e, t = 21) => (r = t) => {
  let n = "", a = r;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function Ks(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nt = { exports: {} };
const Ys = typeof Buffer < "u", vn = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, _n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Sa(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), Ys && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (vn.test(e) === !1 && _n.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (vn.test(e) === !1)
      return n;
  } else if (_n.test(e) === !1)
    return n;
  return Ca(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function Ca(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
function Yr(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Sa(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function Xs(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Sa(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
nt.exports = Yr;
nt.exports.default = Yr;
nt.exports.parse = Yr;
nt.exports.safeParse = Xs;
nt.exports.scan = Ca;
var Qs = nt.exports;
const Xr = /* @__PURE__ */ Ks(Qs);
var eo = Object.defineProperty, to = (e, t, r) => t in e ? eo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, tr = (e, t, r) => to(e, typeof t != "symbol" ? t + "" : t, r);
class bn extends Error {
  constructor(t, r) {
    super(t), tr(this, "type"), tr(this, "field"), tr(this, "value"), tr(this, "line"), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Pr(e) {
}
function ro(e) {
  const { onEvent: t = Pr, onError: r = Pr, onRetry: n = Pr, onComment: a } = e;
  let s = "", o = !0, i, u = "", c = "";
  function d(p) {
    const y = o ? p.replace(/^\xEF\xBB\xBF/, "") : p, [T, P] = no(`${s}${y}`);
    for (const S of T)
      f(S);
    s = P, o = !1;
  }
  function f(p) {
    if (p === "") {
      v();
      return;
    }
    if (p.startsWith(":")) {
      a && a(p.slice(p.startsWith(": ") ? 2 : 1));
      return;
    }
    const y = p.indexOf(":");
    if (y !== -1) {
      const T = p.slice(0, y), P = p[y + 1] === " " ? 2 : 1, S = p.slice(y + P);
      g(T, S, p);
      return;
    }
    g(p, "", p);
  }
  function g(p, y, T) {
    switch (p) {
      case "event":
        c = y;
        break;
      case "data":
        u = `${u}${y}
`;
        break;
      case "id":
        i = y.includes("\0") ? void 0 : y;
        break;
      case "retry":
        /^\d+$/.test(y) ? n(parseInt(y, 10)) : r(
          new bn(`Invalid \`retry\` value: "${y}"`, {
            type: "invalid-retry",
            value: y,
            line: T
          })
        );
        break;
      default:
        r(
          new bn(
            `Unknown field "${p.length > 20 ? `${p.slice(0, 20)}…` : p}"`,
            { type: "unknown-field", field: p, value: y, line: T }
          )
        );
        break;
    }
  }
  function v() {
    u.length > 0 && t({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function _(p = {}) {
    s && p.consume && f(s), i = void 0, u = "", c = "", s = "";
  }
  return { feed: d, reset: _ };
}
function no(e) {
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
class ao extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let a;
    super({
      start(s) {
        a = ro({
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
function Ce(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function so(e) {
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
function wr(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Wt = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const a = Gs(r, t);
  if (e == null)
    return a;
  if (r.includes(n))
    throw new Ds({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (s) => `${e}${n}${a(s)}`;
}, Ge = Wt();
function oo(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function nr(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Qr({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new er({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new er({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new er({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new er({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var or = Symbol.for("vercel.ai.validator");
function io(e) {
  return { [or]: !0, validate: e };
}
function lo(e) {
  return typeof e == "object" && e !== null && or in e && e[or] === !0 && "validate" in e;
}
function uo(e) {
  return lo(e) ? e : co(e);
}
function co(e) {
  return io((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function po({
  value: e,
  schema: t
}) {
  const r = xr({ value: e, schema: t });
  if (!r.success)
    throw sr.wrap({ value: e, cause: r.error });
  return r.value;
}
function xr({
  value: e,
  schema: t
}) {
  const r = uo(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: sr.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: sr.wrap({ value: e, cause: n })
    };
  }
}
function fo({
  text: e,
  schema: t
}) {
  try {
    const r = Xr.parse(e);
    return t == null ? r : po({ value: r, schema: t });
  } catch (r) {
    throw ar.isInstance(r) || sr.isInstance(r) ? r : new ar({ text: e, cause: r });
  }
}
function en({
  text: e,
  schema: t
}) {
  try {
    const r = Xr.parse(e);
    return t == null ? {
      success: !0,
      value: r
    } : xr({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: ar.isInstance(r) ? r : new ar({ text: e, cause: r })
    };
  }
}
function wn(e) {
  try {
    return Xr.parse(e), !0;
  } catch {
    return !1;
  }
}
function mo(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var ho = () => globalThis.fetch, ve = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => go({
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
}), go = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = ho()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: mo(t),
      body: r.content,
      signal: s
    }), u = wr(i);
    if (!i.ok) {
      let c;
      try {
        c = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw nr(d) || ge.isInstance(d) ? d : new ge({
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
      throw c instanceof Error && (nr(c) || ge.isInstance(c)) ? c : new ge({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (nr(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const u = i.cause;
      if (u != null)
        throw new ge({
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
}, tn = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), i = wr(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new ge({
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
    const u = fo({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new ge({
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
      value: new ge({
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
}, kr = (e) => async ({ response: t }) => {
  const r = wr(t);
  if (t.body == null)
    throw new $s({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new ao()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            en({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, at = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = en({
    text: a,
    schema: e
  }), o = wr(t);
  if (!s.success)
    throw new ge({
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
}, { btoa: yo, atob: vo } = globalThis;
function _o(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = vo(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function mt(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return yo(t);
}
function rn(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
const bo = Symbol("Let zodToJsonSchema decide on which parser to use"), wo = {
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
}, xo = (e) => ({
  ...wo,
  ...e
}), ko = (e) => {
  const t = xo(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function Ia(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function Z(e, t, r, n, a) {
  e[t] = r, Ia(e, t, n, a);
}
var O;
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
})(O || (O = {}));
var Lr;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Lr || (Lr = {}));
const w = O.arrayToEnum([
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
]), Ee = (e) => {
  switch (typeof e) {
    case "undefined":
      return w.undefined;
    case "string":
      return w.string;
    case "number":
      return isNaN(e) ? w.nan : w.number;
    case "boolean":
      return w.boolean;
    case "function":
      return w.function;
    case "bigint":
      return w.bigint;
    case "symbol":
      return w.symbol;
    case "object":
      return Array.isArray(e) ? w.array : e === null ? w.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? w.promise : typeof Map < "u" && e instanceof Map ? w.map : typeof Set < "u" && e instanceof Set ? w.set : typeof Date < "u" && e instanceof Date ? w.date : w.object;
    default:
      return w.unknown;
  }
}, m = O.arrayToEnum([
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
]), To = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class X extends Error {
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
    if (!(t instanceof X))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, O.jsonStringifyReplacer, 2);
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
X.create = (e) => new X(e);
const et = (e, t) => {
  let r;
  switch (e.code) {
    case m.invalid_type:
      e.received === w.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case m.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, O.jsonStringifyReplacer)}`;
      break;
    case m.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${O.joinValues(e.keys, ", ")}`;
      break;
    case m.invalid_union:
      r = "Invalid input";
      break;
    case m.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${O.joinValues(e.options)}`;
      break;
    case m.invalid_enum_value:
      r = `Invalid enum value. Expected ${O.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : O.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
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
      r = t.defaultError, O.assertNever(e);
  }
  return { message: r };
};
let Ea = et;
function So(e) {
  Ea = e;
}
function ir() {
  return Ea;
}
const lr = (e) => {
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
}, Co = [];
function b(e, t) {
  const r = ir(), n = lr({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      r,
      r === et ? void 0 : et
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(n);
}
class H {
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
        return C;
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
    return H.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: s, value: o } = a;
      if (s.status === "aborted" || o.status === "aborted")
        return C;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const C = Object.freeze({
  status: "aborted"
}), Ye = (e) => ({ status: "dirty", value: e }), W = (e) => ({ status: "valid", value: e }), qr = (e) => e.status === "aborted", Br = (e) => e.status === "dirty", ht = (e) => e.status === "valid", gt = (e) => typeof Promise < "u" && e instanceof Promise;
function ur(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Na(e, t, r, n, a) {
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var k;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(k || (k = {}));
var dt, pt;
class _e {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const xn = (e, t) => {
  if (ht(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new X(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function E(e) {
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
class N {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ee(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ee(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new H(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ee(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (gt(r))
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
      parsedType: Ee(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return xn(a, s);
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
      parsedType: Ee(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (gt(a) ? a : Promise.resolve(a));
    return xn(n, s);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, s) => {
      const o = t(a), i = () => s.addIssue({
        code: m.custom,
        ...n(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new ce({
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return ye.create(this, this._def);
  }
  nullable() {
    return je.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ue.create(this, this._def);
  }
  promise() {
    return rt.create(this, this._def);
  }
  or(t) {
    return bt.create([this, t], this._def);
  }
  and(t) {
    return wt.create(this, t, this._def);
  }
  transform(t) {
    return new ce({
      ...E(this._def),
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ct({
      ...E(this._def),
      innerType: this,
      defaultValue: r,
      typeName: h.ZodDefault
    });
  }
  brand() {
    return new nn({
      typeName: h.ZodBranded,
      type: this,
      ...E(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new It({
      ...E(this._def),
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
    return Ft.create(this, t);
  }
  readonly() {
    return Et.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Io = /^c[^\s-]{8,}$/i, Eo = /^[0-9a-z]+$/, No = /^[0-9A-HJKMNP-TV-Z]{26}$/, Po = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ro = /^[a-z0-9_-]{21}$/i, jo = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ao = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Oo = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Rr;
const Mo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, $o = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Zo = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Pa = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Do = new RegExp(`^${Pa}$`);
function Ra(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Uo(e) {
  return new RegExp(`^${Ra(e)}$`);
}
function ja(e) {
  let t = `${Pa}T${Ra(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function Lo(e, t) {
  return !!((t === "v4" || !t) && Mo.test(e) || (t === "v6" || !t) && $o.test(e));
}
class le extends N {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== w.string) {
      const s = this._getOrReturnCtx(t);
      return b(s, {
        code: m.invalid_type,
        expected: w.string,
        received: s.parsedType
      }), C;
    }
    const n = new H();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), b(a, {
          code: m.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), b(a, {
          code: m.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (a = this._getOrReturnCtx(t, a), o ? b(a, {
          code: m.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && b(a, {
          code: m.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Ao.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
          validation: "email",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        Rr || (Rr = new RegExp(Oo, "u")), Rr.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
          validation: "emoji",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Po.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
          validation: "uuid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Ro.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
          validation: "nanoid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Io.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
          validation: "cuid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Eo.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
          validation: "cuid2",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        No.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
          validation: "ulid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), b(a, {
            validation: "url",
            code: m.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
        validation: "regex",
        code: m.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? ja(s).test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Do.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Uo(s).test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? jo.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
        validation: "duration",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Lo(t.data, s.version) || (a = this._getOrReturnCtx(t, a), b(a, {
        validation: "ip",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Zo.test(t.data) || (a = this._getOrReturnCtx(t, a), b(a, {
        validation: "base64",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : O.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: m.invalid_string,
      ...k.errToObj(n)
    });
  }
  _addCheck(t) {
    return new le({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...k.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...k.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...k.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...k.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...k.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...k.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...k.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...k.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...k.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...k.errToObj(t) });
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
      ...k.errToObj(t == null ? void 0 : t.message)
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
      ...k.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...k.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...k.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...k.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...k.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...k.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...k.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...k.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...k.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, k.errToObj(t));
  }
  trim() {
    return new le({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new le({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new le({
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
le.create = (e) => {
  var t;
  return new le({
    checks: [],
    typeName: h.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...E(e)
  });
};
function qo(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class Ne extends N {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== w.number) {
      const s = this._getOrReturnCtx(t);
      return b(s, {
        code: m.invalid_type,
        expected: w.number,
        received: s.parsedType
      }), C;
    }
    let n;
    const a = new H();
    for (const s of this._def.checks)
      s.kind === "int" ? O.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? qo(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.not_finite,
        message: s.message
      }), a.dirty()) : O.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, k.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, k.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, k.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, k.toString(r));
  }
  setLimit(t, r, n, a) {
    return new Ne({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: k.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: k.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: k.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: k.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: k.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: k.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: k.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: k.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: k.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: k.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && O.isInteger(t.value));
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
Ne.create = (e) => new Ne({
  checks: [],
  typeName: h.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...E(e)
});
class Pe extends N {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== w.bigint) {
      const s = this._getOrReturnCtx(t);
      return b(s, {
        code: m.invalid_type,
        expected: w.bigint,
        received: s.parsedType
      }), C;
    }
    let n;
    const a = new H();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), b(n, {
        code: m.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : O.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, k.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, k.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, k.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, k.toString(r));
  }
  setLimit(t, r, n, a) {
    return new Pe({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: k.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Pe({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: k.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: k.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: k.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: k.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: k.toString(r)
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
Pe.create = (e) => {
  var t;
  return new Pe({
    checks: [],
    typeName: h.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...E(e)
  });
};
class yt extends N {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== w.boolean) {
      const n = this._getOrReturnCtx(t);
      return b(n, {
        code: m.invalid_type,
        expected: w.boolean,
        received: n.parsedType
      }), C;
    }
    return W(t.data);
  }
}
yt.create = (e) => new yt({
  typeName: h.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...E(e)
});
class Ue extends N {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== w.date) {
      const s = this._getOrReturnCtx(t);
      return b(s, {
        code: m.invalid_type,
        expected: w.date,
        received: s.parsedType
      }), C;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return b(s, {
        code: m.invalid_date
      }), C;
    }
    const n = new H();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), b(a, {
        code: m.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : O.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Ue({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: k.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: k.toString(r)
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
Ue.create = (e) => new Ue({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: h.ZodDate,
  ...E(e)
});
class cr extends N {
  _parse(t) {
    if (this._getType(t) !== w.symbol) {
      const n = this._getOrReturnCtx(t);
      return b(n, {
        code: m.invalid_type,
        expected: w.symbol,
        received: n.parsedType
      }), C;
    }
    return W(t.data);
  }
}
cr.create = (e) => new cr({
  typeName: h.ZodSymbol,
  ...E(e)
});
class vt extends N {
  _parse(t) {
    if (this._getType(t) !== w.undefined) {
      const n = this._getOrReturnCtx(t);
      return b(n, {
        code: m.invalid_type,
        expected: w.undefined,
        received: n.parsedType
      }), C;
    }
    return W(t.data);
  }
}
vt.create = (e) => new vt({
  typeName: h.ZodUndefined,
  ...E(e)
});
class _t extends N {
  _parse(t) {
    if (this._getType(t) !== w.null) {
      const n = this._getOrReturnCtx(t);
      return b(n, {
        code: m.invalid_type,
        expected: w.null,
        received: n.parsedType
      }), C;
    }
    return W(t.data);
  }
}
_t.create = (e) => new _t({
  typeName: h.ZodNull,
  ...E(e)
});
class tt extends N {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return W(t.data);
  }
}
tt.create = (e) => new tt({
  typeName: h.ZodAny,
  ...E(e)
});
class De extends N {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return W(t.data);
  }
}
De.create = (e) => new De({
  typeName: h.ZodUnknown,
  ...E(e)
});
class Ie extends N {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return b(r, {
      code: m.invalid_type,
      expected: w.never,
      received: r.parsedType
    }), C;
  }
}
Ie.create = (e) => new Ie({
  typeName: h.ZodNever,
  ...E(e)
});
class dr extends N {
  _parse(t) {
    if (this._getType(t) !== w.undefined) {
      const n = this._getOrReturnCtx(t);
      return b(n, {
        code: m.invalid_type,
        expected: w.void,
        received: n.parsedType
      }), C;
    }
    return W(t.data);
  }
}
dr.create = (e) => new dr({
  typeName: h.ZodVoid,
  ...E(e)
});
class ue extends N {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== w.array)
      return b(r, {
        code: m.invalid_type,
        expected: w.array,
        received: r.parsedType
      }), C;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, i = r.data.length < a.exactLength.value;
      (o || i) && (b(r, {
        code: o ? m.too_big : m.too_small,
        minimum: i ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (b(r, {
      code: m.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (b(r, {
      code: m.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => a.type._parseAsync(new _e(r, o, r.path, i)))).then((o) => H.mergeArray(n, o));
    const s = [...r.data].map((o, i) => a.type._parseSync(new _e(r, o, r.path, i)));
    return H.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new ue({
      ...this._def,
      minLength: { value: t, message: k.toString(r) }
    });
  }
  max(t, r) {
    return new ue({
      ...this._def,
      maxLength: { value: t, message: k.toString(r) }
    });
  }
  length(t, r) {
    return new ue({
      ...this._def,
      exactLength: { value: t, message: k.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ue.create = (e, t) => new ue({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: h.ZodArray,
  ...E(t)
});
function Ke(e) {
  if (e instanceof q) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = ye.create(Ke(n));
    }
    return new q({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof ue ? new ue({
    ...e._def,
    type: Ke(e.element)
  }) : e instanceof ye ? ye.create(Ke(e.unwrap())) : e instanceof je ? je.create(Ke(e.unwrap())) : e instanceof be ? be.create(e.items.map((t) => Ke(t))) : e;
}
class q extends N {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = O.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== w.object) {
      const c = this._getOrReturnCtx(t);
      return b(c, {
        code: m.invalid_type,
        expected: w.object,
        received: c.parsedType
      }), C;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Ie && this._def.unknownKeys === "strip"))
      for (const c in a.data)
        o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], f = a.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new _e(a, f, a.path, c)),
        alwaysSet: c in a.data
      });
    }
    if (this._def.catchall instanceof Ie) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of i)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: a.data[d] }
          });
      else if (c === "strict")
        i.length > 0 && (b(a, {
          code: m.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of i) {
        const f = a.data[d];
        u.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new _e(a, f, a.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of u) {
        const f = await d.key, g = await d.value;
        c.push({
          key: f,
          value: g,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => H.mergeObjectSync(n, c)) : H.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return k.errToObj, new q({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, s, o, i;
          const u = (o = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = k.errToObj(t).message) !== null && i !== void 0 ? i : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new q({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new q({
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
    return new q({
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
    return new q({
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
    return new q({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return O.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new q({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return O.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new q({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ke(this);
  }
  partial(t) {
    const r = {};
    return O.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new q({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return O.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof ye; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new q({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Aa(O.objectKeys(this.shape));
  }
}
q.create = (e, t) => new q({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Ie.create(),
  typeName: h.ZodObject,
  ...E(t)
});
q.strictCreate = (e, t) => new q({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Ie.create(),
  typeName: h.ZodObject,
  ...E(t)
});
q.lazycreate = (e, t) => new q({
  shape: e,
  unknownKeys: "strip",
  catchall: Ie.create(),
  typeName: h.ZodObject,
  ...E(t)
});
class bt extends N {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new X(i.ctx.common.issues));
      return b(r, {
        code: m.invalid_union,
        unionErrors: o
      }), C;
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
      const i = o.map((u) => new X(u));
      return b(r, {
        code: m.invalid_union,
        unionErrors: i
      }), C;
    }
  }
  get options() {
    return this._def.options;
  }
}
bt.create = (e, t) => new bt({
  options: e,
  typeName: h.ZodUnion,
  ...E(t)
});
const Te = (e) => e instanceof kt ? Te(e.schema) : e instanceof ce ? Te(e.innerType()) : e instanceof Tt ? [e.value] : e instanceof Re ? e.options : e instanceof St ? O.objectValues(e.enum) : e instanceof Ct ? Te(e._def.innerType) : e instanceof vt ? [void 0] : e instanceof _t ? [null] : e instanceof ye ? [void 0, ...Te(e.unwrap())] : e instanceof je ? [null, ...Te(e.unwrap())] : e instanceof nn || e instanceof Et ? Te(e.unwrap()) : e instanceof It ? Te(e._def.innerType) : [];
class Tr extends N {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== w.object)
      return b(r, {
        code: m.invalid_type,
        expected: w.object,
        received: r.parsedType
      }), C;
    const n = this.discriminator, a = r.data[n], s = this.optionsMap.get(a);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (b(r, {
      code: m.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), C);
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
      const o = Te(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (a.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        a.set(i, s);
      }
    }
    return new Tr({
      typeName: h.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...E(n)
    });
  }
}
function Vr(e, t) {
  const r = Ee(e), n = Ee(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === w.object && n === w.object) {
    const a = O.objectKeys(t), s = O.objectKeys(e).filter((i) => a.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const u = Vr(e[i], t[i]);
      if (!u.valid)
        return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === w.array && n === w.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], u = Vr(o, i);
      if (!u.valid)
        return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else return r === w.date && n === w.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class wt extends N {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (qr(s) || qr(o))
        return C;
      const i = Vr(s.value, o.value);
      return i.valid ? ((Br(s) || Br(o)) && r.dirty(), { status: r.value, value: i.data }) : (b(n, {
        code: m.invalid_intersection_types
      }), C);
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
wt.create = (e, t, r) => new wt({
  left: e,
  right: t,
  typeName: h.ZodIntersection,
  ...E(r)
});
class be extends N {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== w.array)
      return b(n, {
        code: m.invalid_type,
        expected: w.array,
        received: n.parsedType
      }), C;
    if (n.data.length < this._def.items.length)
      return b(n, {
        code: m.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), C;
    !this._def.rest && n.data.length > this._def.items.length && (b(n, {
      code: m.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, i) => {
      const u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new _e(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => H.mergeArray(r, o)) : H.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new be({
      ...this._def,
      rest: t
    });
  }
}
be.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new be({
    items: e,
    typeName: h.ZodTuple,
    rest: null,
    ...E(t)
  });
};
class xt extends N {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== w.object)
      return b(n, {
        code: m.invalid_type,
        expected: w.object,
        received: n.parsedType
      }), C;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      a.push({
        key: s._parse(new _e(n, i, n.path, i)),
        value: o._parse(new _e(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? H.mergeObjectAsync(r, a) : H.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof N ? new xt({
      keyType: t,
      valueType: r,
      typeName: h.ZodRecord,
      ...E(n)
    }) : new xt({
      keyType: le.create(),
      valueType: t,
      typeName: h.ZodRecord,
      ...E(r)
    });
  }
}
class pr extends N {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== w.map)
      return b(n, {
        code: m.invalid_type,
        expected: w.map,
        received: n.parsedType
      }), C;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([i, u], c) => ({
      key: a._parse(new _e(n, i, n.path, [c, "key"])),
      value: s._parse(new _e(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key, d = await u.value;
          if (c.status === "aborted" || d.status === "aborted")
            return C;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(c.value, d.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const u of o) {
        const c = u.key, d = u.value;
        if (c.status === "aborted" || d.status === "aborted")
          return C;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(c.value, d.value);
      }
      return { status: r.value, value: i };
    }
  }
}
pr.create = (e, t, r) => new pr({
  valueType: t,
  keyType: e,
  typeName: h.ZodMap,
  ...E(r)
});
class Le extends N {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== w.set)
      return b(n, {
        code: m.invalid_type,
        expected: w.set,
        received: n.parsedType
      }), C;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (b(n, {
      code: m.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (b(n, {
      code: m.too_big,
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
          return C;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const i = [...n.data.values()].map((u, c) => s._parse(new _e(n, u, n.path, c)));
    return n.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(t, r) {
    return new Le({
      ...this._def,
      minSize: { value: t, message: k.toString(r) }
    });
  }
  max(t, r) {
    return new Le({
      ...this._def,
      maxSize: { value: t, message: k.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Le.create = (e, t) => new Le({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: h.ZodSet,
  ...E(t)
});
class Qe extends N {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== w.function)
      return b(r, {
        code: m.invalid_type,
        expected: w.function,
        received: r.parsedType
      }), C;
    function n(i, u) {
      return lr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ir(),
          et
        ].filter((c) => !!c),
        issueData: {
          code: m.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function a(i, u) {
      return lr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ir(),
          et
        ].filter((c) => !!c),
        issueData: {
          code: m.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof rt) {
      const i = this;
      return W(async function(...u) {
        const c = new X([]), d = await i._def.args.parseAsync(u, s).catch((v) => {
          throw c.addIssue(n(u, v)), c;
        }), f = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(f, s).catch((v) => {
          throw c.addIssue(a(f, v)), c;
        });
      });
    } else {
      const i = this;
      return W(function(...u) {
        const c = i._def.args.safeParse(u, s);
        if (!c.success)
          throw new X([n(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), f = i._def.returns.safeParse(d, s);
        if (!f.success)
          throw new X([a(d, f.error)]);
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
    return new Qe({
      ...this._def,
      args: be.create(t).rest(De.create())
    });
  }
  returns(t) {
    return new Qe({
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
    return new Qe({
      args: t || be.create([]).rest(De.create()),
      returns: r || De.create(),
      typeName: h.ZodFunction,
      ...E(n)
    });
  }
}
class kt extends N {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
kt.create = (e, t) => new kt({
  getter: e,
  typeName: h.ZodLazy,
  ...E(t)
});
class Tt extends N {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return b(r, {
        received: r.data,
        code: m.invalid_literal,
        expected: this._def.value
      }), C;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Tt.create = (e, t) => new Tt({
  value: e,
  typeName: h.ZodLiteral,
  ...E(t)
});
function Aa(e, t) {
  return new Re({
    values: e,
    typeName: h.ZodEnum,
    ...E(t)
  });
}
class Re extends N {
  constructor() {
    super(...arguments), dt.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return b(r, {
        expected: O.joinValues(n),
        received: r.parsedType,
        code: m.invalid_type
      }), C;
    }
    if (ur(this, dt) || Na(this, dt, new Set(this._def.values)), !ur(this, dt).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return b(r, {
        received: r.data,
        code: m.invalid_enum_value,
        options: n
      }), C;
    }
    return W(t.data);
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
    return Re.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return Re.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
dt = /* @__PURE__ */ new WeakMap();
Re.create = Aa;
class St extends N {
  constructor() {
    super(...arguments), pt.set(this, void 0);
  }
  _parse(t) {
    const r = O.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== w.string && n.parsedType !== w.number) {
      const a = O.objectValues(r);
      return b(n, {
        expected: O.joinValues(a),
        received: n.parsedType,
        code: m.invalid_type
      }), C;
    }
    if (ur(this, pt) || Na(this, pt, new Set(O.getValidEnumValues(this._def.values))), !ur(this, pt).has(t.data)) {
      const a = O.objectValues(r);
      return b(n, {
        received: n.data,
        code: m.invalid_enum_value,
        options: a
      }), C;
    }
    return W(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
pt = /* @__PURE__ */ new WeakMap();
St.create = (e, t) => new St({
  values: e,
  typeName: h.ZodNativeEnum,
  ...E(t)
});
class rt extends N {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== w.promise && r.common.async === !1)
      return b(r, {
        code: m.invalid_type,
        expected: w.promise,
        received: r.parsedType
      }), C;
    const n = r.parsedType === w.promise ? r.data : Promise.resolve(r.data);
    return W(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
rt.create = (e, t) => new rt({
  type: e,
  typeName: h.ZodPromise,
  ...E(t)
});
class ce extends N {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === h.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        b(n, o), o.fatal ? r.abort() : r.dirty();
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
            return C;
          const u = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? C : u.status === "dirty" || r.value === "dirty" ? Ye(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return C;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? C : i.status === "dirty" || r.value === "dirty" ? Ye(i.value) : i;
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
        return i.status === "aborted" ? C : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? C : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!ht(o))
          return o;
        const i = a.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => ht(o) ? Promise.resolve(a.transform(o.value, s)).then((i) => ({ status: r.value, value: i })) : o);
    O.assertNever(a);
  }
}
ce.create = (e, t, r) => new ce({
  schema: e,
  typeName: h.ZodEffects,
  effect: t,
  ...E(r)
});
ce.createWithPreprocess = (e, t, r) => new ce({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: h.ZodEffects,
  ...E(r)
});
class ye extends N {
  _parse(t) {
    return this._getType(t) === w.undefined ? W(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ye.create = (e, t) => new ye({
  innerType: e,
  typeName: h.ZodOptional,
  ...E(t)
});
class je extends N {
  _parse(t) {
    return this._getType(t) === w.null ? W(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
je.create = (e, t) => new je({
  innerType: e,
  typeName: h.ZodNullable,
  ...E(t)
});
class Ct extends N {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === w.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ct.create = (e, t) => new Ct({
  innerType: e,
  typeName: h.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...E(t)
});
class It extends N {
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
    return gt(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new X(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new X(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
It.create = (e, t) => new It({
  innerType: e,
  typeName: h.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...E(t)
});
class fr extends N {
  _parse(t) {
    if (this._getType(t) !== w.nan) {
      const n = this._getOrReturnCtx(t);
      return b(n, {
        code: m.invalid_type,
        expected: w.nan,
        received: n.parsedType
      }), C;
    }
    return { status: "valid", value: t.data };
  }
}
fr.create = (e) => new fr({
  typeName: h.ZodNaN,
  ...E(e)
});
const Bo = Symbol("zod_brand");
class nn extends N {
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
class Ft extends N {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? C : s.status === "dirty" ? (r.dirty(), Ye(s.value)) : this._def.out._parseAsync({
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
      return a.status === "aborted" ? C : a.status === "dirty" ? (r.dirty(), {
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
    return new Ft({
      in: t,
      out: r,
      typeName: h.ZodPipeline
    });
  }
}
class Et extends N {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (ht(a) && (a.value = Object.freeze(a.value)), a);
    return gt(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Et.create = (e, t) => new Et({
  innerType: e,
  typeName: h.ZodReadonly,
  ...E(t)
});
function Oa(e, t = {}, r) {
  return e ? tt.create().superRefine((n, a) => {
    var s, o;
    if (!e(n)) {
      const i = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, u = (o = (s = i.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0, c = typeof i == "string" ? { message: i } : i;
      a.addIssue({ code: "custom", ...c, fatal: u });
    }
  }) : tt.create();
}
const Vo = {
  object: q.lazycreate
};
var h;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(h || (h = {}));
const zo = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Oa((r) => r instanceof e, t), Ma = le.create, $a = Ne.create, Ho = fr.create, Jo = Pe.create, Za = yt.create, Wo = Ue.create, Fo = cr.create, Go = vt.create, Ko = _t.create, Yo = tt.create, Xo = De.create, Qo = Ie.create, ei = dr.create, ti = ue.create, ri = q.create, ni = q.strictCreate, ai = bt.create, si = Tr.create, oi = wt.create, ii = be.create, li = xt.create, ui = pr.create, ci = Le.create, di = Qe.create, pi = kt.create, fi = Tt.create, mi = Re.create, hi = St.create, gi = rt.create, kn = ce.create, yi = ye.create, vi = je.create, _i = ce.createWithPreprocess, bi = Ft.create, wi = () => Ma().optional(), xi = () => $a().optional(), ki = () => Za().optional(), Ti = {
  string: (e) => le.create({ ...e, coerce: !0 }),
  number: (e) => Ne.create({ ...e, coerce: !0 }),
  boolean: (e) => yt.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Pe.create({ ...e, coerce: !0 }),
  date: (e) => Ue.create({ ...e, coerce: !0 })
}, Si = C;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: et,
  setErrorMap: So,
  getErrorMap: ir,
  makeIssue: lr,
  EMPTY_PATH: Co,
  addIssueToContext: b,
  ParseStatus: H,
  INVALID: C,
  DIRTY: Ye,
  OK: W,
  isAborted: qr,
  isDirty: Br,
  isValid: ht,
  isAsync: gt,
  get util() {
    return O;
  },
  get objectUtil() {
    return Lr;
  },
  ZodParsedType: w,
  getParsedType: Ee,
  ZodType: N,
  datetimeRegex: ja,
  ZodString: le,
  ZodNumber: Ne,
  ZodBigInt: Pe,
  ZodBoolean: yt,
  ZodDate: Ue,
  ZodSymbol: cr,
  ZodUndefined: vt,
  ZodNull: _t,
  ZodAny: tt,
  ZodUnknown: De,
  ZodNever: Ie,
  ZodVoid: dr,
  ZodArray: ue,
  ZodObject: q,
  ZodUnion: bt,
  ZodDiscriminatedUnion: Tr,
  ZodIntersection: wt,
  ZodTuple: be,
  ZodRecord: xt,
  ZodMap: pr,
  ZodSet: Le,
  ZodFunction: Qe,
  ZodLazy: kt,
  ZodLiteral: Tt,
  ZodEnum: Re,
  ZodNativeEnum: St,
  ZodPromise: rt,
  ZodEffects: ce,
  ZodTransformer: ce,
  ZodOptional: ye,
  ZodNullable: je,
  ZodDefault: Ct,
  ZodCatch: It,
  ZodNaN: fr,
  BRAND: Bo,
  ZodBranded: nn,
  ZodPipeline: Ft,
  ZodReadonly: Et,
  custom: Oa,
  Schema: N,
  ZodSchema: N,
  late: Vo,
  get ZodFirstPartyTypeKind() {
    return h;
  },
  coerce: Ti,
  any: Yo,
  array: ti,
  bigint: Jo,
  boolean: Za,
  date: Wo,
  discriminatedUnion: si,
  effect: kn,
  enum: mi,
  function: di,
  instanceof: zo,
  intersection: oi,
  lazy: pi,
  literal: fi,
  map: ui,
  nan: Ho,
  nativeEnum: hi,
  never: Qo,
  null: Ko,
  nullable: vi,
  number: $a,
  object: ri,
  oboolean: ki,
  onumber: xi,
  optional: yi,
  ostring: wi,
  pipeline: bi,
  preprocess: _i,
  promise: gi,
  record: li,
  set: ci,
  strictObject: ni,
  string: Ma,
  symbol: Fo,
  transformer: kn,
  tuple: ii,
  undefined: Go,
  union: ai,
  unknown: Xo,
  void: ei,
  NEVER: Si,
  ZodIssueCode: m,
  quotelessJson: To,
  ZodError: X
});
function Ci() {
  return {};
}
function Ii(e, t) {
  var n, a, s;
  const r = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((s = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : s.typeName) !== h.ZodAny && (r.items = $(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && Z(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && Z(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (Z(r, "minItems", e.exactLength.value, e.exactLength.message, t), Z(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function Ei(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? Z(r, "minimum", n.value, n.message, t) : Z(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), Z(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? Z(r, "maximum", n.value, n.message, t) : Z(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), Z(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        Z(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Ni() {
  return {
    type: "boolean"
  };
}
function Da(e, t) {
  return $(e.type._def, t);
}
const Pi = (e, t) => $(e.innerType._def, t);
function Ua(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => Ua(e, t, a))
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
      return Ri(e, t);
  }
}
const Ri = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        Z(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
      case "max":
        Z(
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
function ji(e, t) {
  return {
    ...$(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Ai(e, t) {
  return t.effectStrategy === "input" ? $(e.schema._def, t) : {};
}
function Oi(e) {
  return {
    type: "string",
    enum: e.values
  };
}
const Mi = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function $i(e, t) {
  const r = [
    $(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    $(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((s) => !!s);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const a = [];
  return r.forEach((s) => {
    if (Mi(s))
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
function Zi(e, t) {
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
let jr;
const Me = {
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
  emoji: () => (jr === void 0 && (jr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), jr),
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
function La(e, t) {
  const r = {
    type: "string"
  };
  function n(a) {
    return t.patternStrategy === "escape" ? Di(a) : a;
  }
  if (e.checks)
    for (const a of e.checks)
      switch (a.kind) {
        case "min":
          Z(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t);
          break;
        case "max":
          Z(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              se(r, "email", a.message, t);
              break;
            case "format:idn-email":
              se(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              oe(r, Me.email, a.message, t);
              break;
          }
          break;
        case "url":
          se(r, "uri", a.message, t);
          break;
        case "uuid":
          se(r, "uuid", a.message, t);
          break;
        case "regex":
          oe(r, a.regex, a.message, t);
          break;
        case "cuid":
          oe(r, Me.cuid, a.message, t);
          break;
        case "cuid2":
          oe(r, Me.cuid2, a.message, t);
          break;
        case "startsWith":
          oe(r, RegExp(`^${n(a.value)}`), a.message, t);
          break;
        case "endsWith":
          oe(r, RegExp(`${n(a.value)}$`), a.message, t);
          break;
        case "datetime":
          se(r, "date-time", a.message, t);
          break;
        case "date":
          se(r, "date", a.message, t);
          break;
        case "time":
          se(r, "time", a.message, t);
          break;
        case "duration":
          se(r, "duration", a.message, t);
          break;
        case "length":
          Z(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t), Z(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "includes": {
          oe(r, RegExp(n(a.value)), a.message, t);
          break;
        }
        case "ip": {
          a.version !== "v6" && se(r, "ipv4", a.message, t), a.version !== "v4" && se(r, "ipv6", a.message, t);
          break;
        }
        case "emoji":
          oe(r, Me.emoji, a.message, t);
          break;
        case "ulid": {
          oe(r, Me.ulid, a.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              se(r, "binary", a.message, t);
              break;
            }
            case "contentEncoding:base64": {
              Z(r, "contentEncoding", "base64", a.message, t);
              break;
            }
            case "pattern:zod": {
              oe(r, Me.base64, a.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          oe(r, Me.nanoid, a.message, t);
      }
  return r;
}
const Di = (e) => Array.from(e).map((t) => /[a-zA-Z0-9]/.test(t) ? t : `\\${t}`).join(""), se = (e, t, r, n) => {
  var a;
  e.format || (a = e.anyOf) != null && a.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : Z(e, "format", t, r, n);
}, oe = (e, t, r, n) => {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: Tn(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : Z(e, "pattern", Tn(t, n), r, n);
}, Tn = (e, t) => {
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
function qa(e, t) {
  var n, a, s, o, i, u;
  if (t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === h.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((c, d) => ({
        ...c,
        [d]: $(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", d]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: $(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (t.target === "openApi3")
    return r;
  if (((a = e.keyType) == null ? void 0 : a._def.typeName) === h.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
    const { type: c, ...d } = La(e.keyType._def, t);
    return {
      ...r,
      propertyNames: d
    };
  } else {
    if (((o = e.keyType) == null ? void 0 : o._def.typeName) === h.ZodEnum)
      return {
        ...r,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((i = e.keyType) == null ? void 0 : i._def.typeName) === h.ZodBranded && e.keyType._def.type._def.typeName === h.ZodString && ((u = e.keyType._def.type._def.checks) != null && u.length)) {
      const { type: c, ...d } = Da(e.keyType._def, t);
      return {
        ...r,
        propertyNames: d
      };
    }
  }
  return r;
}
function Ui(e, t) {
  if (t.mapStrategy === "record")
    return qa(e, t);
  const r = $(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, n = $(e.valueType._def, {
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
function Li(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function qi() {
  return {
    not: {}
  };
}
function Bi(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const mr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Vi(e, t) {
  if (t.target === "openApi3")
    return Sn(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in mr && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = mr[s._def.typeName];
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
  return Sn(e, t);
}
const Sn = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => $(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function zi(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: mr[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        mr[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const n = $(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = $(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function Hi(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", Ia(r, "type", n.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? Z(r, "minimum", n.value, n.message, t) : Z(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), Z(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? Z(r, "maximum", n.value, n.message, t) : Z(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), Z(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        Z(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Ji(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : $(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : $(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function Wi(e, t) {
  const r = {
    type: "object",
    ...Object.entries(e.shape()).reduce((n, [a, s]) => {
      if (s === void 0 || s._def === void 0)
        return n;
      const o = $(s._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", a],
        propertyPath: [...t.currentPath, "properties", a]
      });
      return o === void 0 ? n : {
        properties: { ...n.properties, [a]: o },
        required: s.isOptional() ? n.required : [...n.required, a]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: Ji(e, t)
  };
  return r.required.length || delete r.required, r;
}
const Fi = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return $(e.innerType._def, t);
  const r = $(e.innerType._def, {
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
}, Gi = (e, t) => {
  if (t.pipeStrategy === "input")
    return $(e.in._def, t);
  if (t.pipeStrategy === "output")
    return $(e.out._def, t);
  const r = $(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = $(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function Ki(e, t) {
  return $(e.type._def, t);
}
function Yi(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: $(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && Z(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && Z(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function Xi(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, n) => $(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: $(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, n) => $(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function Qi() {
  return {
    not: {}
  };
}
function el() {
  return {};
}
const tl = (e, t) => $(e.innerType._def, t);
function $(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const i = (o = t.override) == null ? void 0 : o.call(t, e, t, n, r);
    if (i !== bo)
      return i;
  }
  if (n && !r) {
    const i = rl(n, t);
    if (i !== void 0)
      return i;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = al(e, e.typeName, t);
  return s && sl(e, t, s), a.jsonSchema = s, s;
}
const rl = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: nl(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, nl = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, al = (e, t, r) => {
  switch (t) {
    case h.ZodString:
      return La(e, r);
    case h.ZodNumber:
      return Hi(e, r);
    case h.ZodObject:
      return Wi(e, r);
    case h.ZodBigInt:
      return Ei(e, r);
    case h.ZodBoolean:
      return Ni();
    case h.ZodDate:
      return Ua(e, r);
    case h.ZodUndefined:
      return Qi();
    case h.ZodNull:
      return Bi(r);
    case h.ZodArray:
      return Ii(e, r);
    case h.ZodUnion:
    case h.ZodDiscriminatedUnion:
      return Vi(e, r);
    case h.ZodIntersection:
      return $i(e, r);
    case h.ZodTuple:
      return Xi(e, r);
    case h.ZodRecord:
      return qa(e, r);
    case h.ZodLiteral:
      return Zi(e, r);
    case h.ZodEnum:
      return Oi(e);
    case h.ZodNativeEnum:
      return Li(e);
    case h.ZodNullable:
      return zi(e, r);
    case h.ZodOptional:
      return Fi(e, r);
    case h.ZodMap:
      return Ui(e, r);
    case h.ZodSet:
      return Yi(e, r);
    case h.ZodLazy:
      return $(e.getter()._def, r);
    case h.ZodPromise:
      return Ki(e, r);
    case h.ZodNaN:
    case h.ZodNever:
      return qi();
    case h.ZodEffects:
      return Ai(e, r);
    case h.ZodAny:
      return Ci();
    case h.ZodUnknown:
      return el();
    case h.ZodDefault:
      return ji(e, r);
    case h.ZodBranded:
      return Da(e, r);
    case h.ZodReadonly:
      return tl(e, r);
    case h.ZodCatch:
      return Pi(e, r);
    case h.ZodPipeline:
      return Gi(e, r);
    case h.ZodFunction:
    case h.ZodVoid:
    case h.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, sl = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), ol = (e, t) => {
  const r = ko(t), n = void 0, a = t == null ? void 0 : t.name, s = $(
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
var Nt = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Pt = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Rt = {
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
}, jt = {
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
}, At = {
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
}, il = [
  Nt,
  Pt,
  Rt,
  jt,
  At
];
Nt.code + "", Pt.code + "", Rt.code + "", jt.code + "", At.code + "";
Nt.name + "", Nt.code, Pt.name + "", Pt.code, Rt.name + "", Rt.code, jt.name + "", jt.code, At.name + "", At.code;
il.map((e) => e.code);
var Ot = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Mt = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, $t = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Zt = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Dt = {
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
}, Ut = {
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
}, Lt = {
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
}, qt = {
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
}, Bt = {
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
}, Vt = {
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
}, Ba = [
  Ot,
  Mt,
  $t,
  Zt,
  Dt,
  Ut,
  Lt,
  qt,
  Bt,
  Vt
];
Ot.code + "", Mt.code + "", $t.code + "", Zt.code + "", Dt.code + "", Ut.code + "", Lt.code + "", qt.code + "", Bt.code + "", Vt.code + "";
Ot.name + "", Ot.code, Mt.name + "", Mt.code, $t.name + "", $t.code, Zt.name + "", Zt.code, Dt.name + "", Dt.code, Ut.name + "", Ut.code, Lt.name + "", Lt.code, qt.name + "", qt.code, Bt.name + "", Bt.code, Vt.name + "", Vt.code;
Ba.map((e) => e.code);
function Se(e, t) {
  const r = Ba.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
var zr = Symbol.for("vercel.ai.schema");
function ll(e, {
  validate: t
} = {}) {
  return {
    [zr]: !0,
    _type: void 0,
    // should never be used directly
    [or]: !0,
    jsonSchema: e,
    validate: t
  };
}
function ul(e) {
  return typeof e == "object" && e !== null && zr in e && e[zr] === !0 && "jsonSchema" in e && "validate" in e;
}
function Va(e) {
  return ul(e) ? e : cl(e);
}
function cl(e) {
  return ll(
    // we assume that zodToJsonSchema will return a valid JSONSchema7:
    ol(e),
    {
      validate: (t) => {
        const r = e.safeParse(t);
        return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
      }
    }
  );
}
var dl = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Ze = "1.9.0", Cn = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function pl(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(Cn);
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
    var c = u.match(Cn);
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
var fl = pl(Ze), ml = Ze.split(".")[0], zt = Symbol.for("opentelemetry.js.api." + ml), Ht = dl;
function Gt(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = Ht[zt] = (a = Ht[zt]) !== null && a !== void 0 ? a : {
    version: Ze
  };
  if (!n && s[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(o.stack || o.message), !1;
  }
  if (s.version !== Ze) {
    var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + e + " does not match previously registered API v" + Ze);
    return r.error(o.stack || o.message), !1;
  }
  return s[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Ze + "."), !0;
}
function qe(e) {
  var t, r, n = (t = Ht[zt]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !fl(n)))
    return (r = Ht[zt]) === null || r === void 0 ? void 0 : r[e];
}
function Kt(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Ze + ".");
  var r = Ht[zt];
  r && delete r[e];
}
var hl = function(e, t) {
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
}, gl = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, yl = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ct("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ct("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ct("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ct("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ct("verbose", this._namespace, t);
    }, e;
  }()
);
function ct(e, t, r) {
  var n = qe("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, gl([], hl(r), !1));
}
var Y;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(Y || (Y = {}));
function vl(e, t) {
  e < Y.NONE ? e = Y.NONE : e > Y.ALL && (e = Y.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", Y.ERROR),
    warn: r("warn", Y.WARN),
    info: r("info", Y.INFO),
    debug: r("debug", Y.DEBUG),
    verbose: r("verbose", Y.VERBOSE)
  };
}
var _l = function(e, t) {
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
}, bl = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, wl = "diag", we = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var i = qe("diag");
          if (i)
            return i[a].apply(i, bl([], _l(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, i, u;
        if (s === void 0 && (s = { logLevel: Y.INFO }), a === r) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = c.stack) !== null && o !== void 0 ? o : c.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var d = qe("diag"), f = vl((i = s.logLevel) !== null && i !== void 0 ? i : Y.INFO, a);
        if (d && !s.suppressOverrideMessage) {
          var g = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + g), f.warn("Current logger will overwrite one already registered from " + g);
        }
        return Gt("diag", f, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Kt(wl, r);
      }, r.createComponentLogger = function(a) {
        return new yl(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), xl = function(e, t) {
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
}, kl = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Tl = (
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
        var r = xl(t, 2), n = r[0], a = r[1];
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
        for (var o = kl(n), i = o.next(); !i.done; i = o.next()) {
          var u = i.value;
          s._entries.delete(u);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o);
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
we.instance();
function Sl(e) {
  return e === void 0 && (e = {}), new Tl(new Map(Object.entries(e)));
}
function za(e) {
  return Symbol.for(e);
}
var Cl = (
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
), Il = new Cl(), Be = /* @__PURE__ */ function() {
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
}(), El = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return Dl;
    }, e.prototype.createHistogram = function(t, r) {
      return Ul;
    }, e.prototype.createCounter = function(t, r) {
      return Zl;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return Ll;
    }, e.prototype.createObservableGauge = function(t, r) {
      return Bl;
    }, e.prototype.createObservableCounter = function(t, r) {
      return ql;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return Vl;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), Sr = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), Nl = (
  /** @class */
  function(e) {
    Be(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Sr)
), Pl = (
  /** @class */
  function(e) {
    Be(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Sr)
), Rl = (
  /** @class */
  function(e) {
    Be(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Sr)
), jl = (
  /** @class */
  function(e) {
    Be(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Sr)
), an = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), Al = (
  /** @class */
  function(e) {
    Be(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(an)
), Ol = (
  /** @class */
  function(e) {
    Be(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(an)
), Ml = (
  /** @class */
  function(e) {
    Be(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(an)
), $l = new El(), Zl = new Nl(), Dl = new Rl(), Ul = new jl(), Ll = new Pl(), ql = new Al(), Bl = new Ol(), Vl = new Ml(), zl = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, Hl = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, Jl = function(e, t) {
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
}, Wl = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Fl = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return Il;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, Wl([n], Jl(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), Gl = function(e, t) {
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
}, Kl = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Ar = "context", Yl = new Fl(), Cr = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Gt(Ar, t, we.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, Kl([t, r, n], Gl(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return qe(Ar) || Yl;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Kt(Ar, we.instance());
    }, e;
  }()
), Hr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Hr || (Hr = {}));
var Ha = "0000000000000000", Ja = "00000000000000000000000000000000", Xl = {
  traceId: Ja,
  spanId: Ha,
  traceFlags: Hr.NONE
}, ft = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = Xl), this._spanContext = t;
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
), sn = za("OpenTelemetry Context Key SPAN");
function on(e) {
  return e.getValue(sn) || void 0;
}
function Ql() {
  return on(Cr.getInstance().active());
}
function ln(e, t) {
  return e.setValue(sn, t);
}
function eu(e) {
  return e.deleteValue(sn);
}
function tu(e, t) {
  return ln(e, new ft(t));
}
function Wa(e) {
  var t;
  return (t = on(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var ru = /^([0-9a-f]{32})$/i, nu = /^[0-9a-f]{16}$/i;
function au(e) {
  return ru.test(e) && e !== Ja;
}
function su(e) {
  return nu.test(e) && e !== Ha;
}
function Fa(e) {
  return au(e.traceId) && su(e.spanId);
}
function ou(e) {
  return new ft(e);
}
var Or = Cr.getInstance(), Ga = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = Or.active());
      var a = !!(r != null && r.root);
      if (a)
        return new ft();
      var s = n && Wa(n);
      return iu(s) && Fa(s) ? new ft(s) : new ft();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (s = r, i = n) : (s = r, o = n, i = a);
        var u = o ?? Or.active(), c = this.startSpan(t, s, u), d = ln(u, c);
        return Or.with(d, i, void 0, c);
      }
    }, e;
  }()
);
function iu(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var lu = new Ga(), uu = (
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
      return t ? (this._delegate = t, this._delegate) : lu;
    }, e;
  }()
), cu = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new Ga();
    }, e;
  }()
), du = new cu(), In = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new uu(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : du;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), hr;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(hr || (hr = {}));
Cr.getInstance();
we.instance();
var pu = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, n) {
      return $l;
    }, e;
  }()
), fu = new pu(), Mr = "metrics", mu = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return Gt(Mr, t, we.instance());
    }, e.prototype.getMeterProvider = function() {
      return qe(Mr) || fu;
    }, e.prototype.getMeter = function(t, r, n) {
      return this.getMeterProvider().getMeter(t, r, n);
    }, e.prototype.disable = function() {
      Kt(Mr, we.instance());
    }, e;
  }()
);
mu.getInstance();
var hu = (
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
), un = za("OpenTelemetry Baggage Key");
function Ka(e) {
  return e.getValue(un) || void 0;
}
function gu() {
  return Ka(Cr.getInstance().active());
}
function yu(e, t) {
  return e.setValue(un, t);
}
function vu(e) {
  return e.deleteValue(un);
}
var $r = "propagation", _u = new hu(), bu = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = Sl, this.getBaggage = Ka, this.getActiveBaggage = gu, this.setBaggage = yu, this.deleteBaggage = vu;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return Gt($r, t, we.instance());
    }, e.prototype.inject = function(t, r, n) {
      return n === void 0 && (n = Hl), this._getGlobalPropagator().inject(t, r, n);
    }, e.prototype.extract = function(t, r, n) {
      return n === void 0 && (n = zl), this._getGlobalPropagator().extract(t, r, n);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Kt($r, we.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return qe($r) || _u;
    }, e;
  }()
);
bu.getInstance();
var Zr = "trace", wu = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new In(), this.wrapSpanContext = ou, this.isSpanContextValid = Fa, this.deleteSpan = eu, this.getSpan = on, this.getActiveSpan = Ql, this.getSpanContext = Wa, this.setSpan = ln, this.setSpanContext = tu;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Gt(Zr, this._proxyTracerProvider, we.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return qe(Zr) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Kt(Zr, we.instance()), this._proxyTracerProvider = new In();
    }, e;
  }()
), xu = wu.getInstance(), ku = Object.defineProperty, Ya = (e, t) => {
  for (var r in t)
    ku(e, r, { get: t[r], enumerable: !0 });
};
async function Tu(e) {
  return e === void 0 ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
var Xa = "AI_RetryError", Qa = `vercel.ai.error.${Xa}`, Su = Symbol.for(Qa), es, En = class extends j {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: Xa, message: e }), this[es] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return j.hasMarker(e, Qa);
  }
};
es = Su;
var Cu = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => ts(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function ts(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (nr(s) || t === 0)
      throw s;
    const o = oo(s), i = [...a, s], u = i.length;
    if (u > t)
      throw new En({
        message: `Failed after ${u} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (s instanceof Error && ge.isInstance(s) && s.isRetryable === !0 && u <= t)
      return await Tu(r), ts(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw u === 1 ? s : new En({
      message: `Failed after ${u} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function Jr({
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
function Iu({
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
var Eu = {
  startSpan() {
    return rr;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(rr);
    if (typeof r == "function")
      return r(rr);
    if (typeof n == "function")
      return n(rr);
  }
}, rr = {
  spanContext() {
    return Nu;
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
}, Nu = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function Pu({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || xu.getTracer("ai") : Eu;
}
function Wr({
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
          code: hr.ERROR,
          message: o.message
        })) : s.setStatus({ code: hr.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function Xe({
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
var rs = "AI_DownloadError", ns = `vercel.ai.error.${rs}`, Ru = Symbol.for(ns), as, Dr = class extends j {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: rs, message: a, cause: n }), this[as] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, ns);
  }
};
as = Ru;
async function ju({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const a = await t(n);
    if (!a.ok)
      throw new Dr({
        url: n,
        statusCode: a.status,
        statusText: a.statusText
      });
    return {
      data: new Uint8Array(await a.arrayBuffer()),
      mimeType: (r = a.headers.get("content-type")) != null ? r : void 0
    };
  } catch (a) {
    throw Dr.isInstance(a) ? a : new Dr({ url: n, cause: a });
  }
}
var Au = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function Ou(e) {
  for (const { bytes: t, mimeType: r } of Au)
    if (e.length >= t.length && t.every((n, a) => e[a] === n))
      return r;
}
var ss = "AI_InvalidDataContentError", os = `vercel.ai.error.${ss}`, Mu = Symbol.for(os), is, Nn = class extends j {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: ss, message: r, cause: t }), this[is] = !0, this.content = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, os);
  }
};
is = Mu;
var ls = l.union([
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
function $u(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? mt(new Uint8Array(e)) : mt(e);
}
function gr(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return _o(e);
    } catch (t) {
      throw new Nn({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Nn({ content: e });
}
function Zu(e) {
  try {
    return new TextDecoder().decode(e);
  } catch {
    throw new Error("Error decoding Uint8Array to text");
  }
}
var us = "AI_InvalidMessageRoleError", cs = `vercel.ai.error.${us}`, Du = Symbol.for(cs), ds, Uu = class extends j {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: us, message: t }), this[ds] = !0, this.role = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, cs);
  }
};
ds = Du;
function Lu(e) {
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
async function qu({
  prompt: e,
  modelSupportsImageUrls: t = !0,
  modelSupportsUrl: r = () => !1,
  downloadImplementation: n = ju
}) {
  const a = await Vu(
    e.messages,
    n,
    t,
    r
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (s) => Bu(s, a)
    )
  ];
}
function Bu(e, t) {
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
        content: e.content.map((n) => zu(n, t)).filter((n) => n.type !== "text" || n.text !== ""),
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
          content: n.experimental_content,
          isError: n.isError,
          providerMetadata: n.experimental_providerMetadata
        })),
        providerMetadata: e.experimental_providerMetadata
      };
    default: {
      const n = r;
      throw new Uu({ role: n });
    }
  }
}
async function Vu(e, t, r, n) {
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
    s.map(({ url: o, data: i }) => [o.toString(), i])
  );
}
function zu(e, t) {
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerMetadata: e.experimental_providerMetadata
    };
  let r = e.mimeType, n, a, s;
  const o = e.type;
  switch (o) {
    case "image":
      n = e.image;
      break;
    case "file":
      n = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${o}`);
  }
  try {
    a = typeof n == "string" ? new URL(n) : n;
  } catch {
    a = n;
  }
  if (a instanceof URL)
    if (a.protocol === "data:") {
      const { mimeType: i, base64Content: u } = Lu(
        a.toString()
      );
      if (i == null || u == null)
        throw new Error(`Invalid data URL format in part ${o}`);
      r = i, s = gr(u);
    } else {
      const i = t[a.toString()];
      i ? (s = i.data, r ?? (r = i.mimeType)) : s = a;
    }
  else
    s = gr(a);
  switch (o) {
    case "image":
      return r == null && s instanceof Uint8Array && (r = Ou(s)), {
        type: "image",
        image: s,
        mimeType: r,
        providerMetadata: e.experimental_providerMetadata
      };
    case "file":
      if (r == null)
        throw new Error("Mime type is missing for file part");
      return {
        type: "file",
        data: s instanceof Uint8Array ? $u(s) : s,
        mimeType: r,
        providerMetadata: e.experimental_providerMetadata
      };
  }
}
var ps = "AI_InvalidArgumentError", fs = `vercel.ai.error.${ps}`, Hu = Symbol.for(fs), ms, ie = class extends j {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: ps,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[ms] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, fs);
  }
};
ms = Hu;
function Ju({
  maxTokens: e,
  temperature: t,
  topP: r,
  topK: n,
  presencePenalty: a,
  frequencyPenalty: s,
  stopSequences: o,
  seed: i,
  maxRetries: u
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new ie({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new ie({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new ie({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new ie({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new ie({
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (a != null && typeof a != "number")
    throw new ie({
      parameter: "presencePenalty",
      value: a,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new ie({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (i != null && !Number.isInteger(i))
    throw new ie({
      parameter: "seed",
      value: i,
      message: "seed must be an integer"
    });
  if (u != null) {
    if (!Number.isInteger(u))
      throw new ie({
        parameter: "maxRetries",
        value: u,
        message: "maxRetries must be an integer"
      });
    if (u < 0)
      throw new ie({
        parameter: "maxRetries",
        value: u,
        message: "maxRetries must be >= 0"
      });
  }
  return {
    maxTokens: e,
    temperature: t ?? 0,
    topP: r,
    topK: n,
    presencePenalty: a,
    frequencyPenalty: s,
    stopSequences: o != null && o.length > 0 ? o : void 0,
    seed: i,
    maxRetries: u ?? 2
  };
}
var Fr = l.lazy(
  () => l.union([
    l.null(),
    l.string(),
    l.number(),
    l.boolean(),
    l.record(l.string(), Fr),
    l.array(Fr)
  ])
), Ae = l.record(
  l.string(),
  l.record(l.string(), Fr)
), Wu = l.array(
  l.union([
    l.object({ type: l.literal("text"), text: l.string() }),
    l.object({
      type: l.literal("image"),
      data: l.string(),
      mimeType: l.string().optional()
    })
  ])
), hs = l.object({
  type: l.literal("text"),
  text: l.string(),
  experimental_providerMetadata: Ae.optional()
}), Fu = l.object({
  type: l.literal("image"),
  image: l.union([ls, l.instanceof(URL)]),
  mimeType: l.string().optional(),
  experimental_providerMetadata: Ae.optional()
}), Gu = l.object({
  type: l.literal("file"),
  data: l.union([ls, l.instanceof(URL)]),
  mimeType: l.string(),
  experimental_providerMetadata: Ae.optional()
}), Ku = l.object({
  type: l.literal("tool-call"),
  toolCallId: l.string(),
  toolName: l.string(),
  args: l.unknown()
}), Yu = l.object({
  type: l.literal("tool-result"),
  toolCallId: l.string(),
  toolName: l.string(),
  result: l.unknown(),
  content: Wu.optional(),
  isError: l.boolean().optional(),
  experimental_providerMetadata: Ae.optional()
}), Xu = l.object({
  role: l.literal("system"),
  content: l.string(),
  experimental_providerMetadata: Ae.optional()
}), Qu = l.object({
  role: l.literal("user"),
  content: l.union([
    l.string(),
    l.array(l.union([hs, Fu, Gu]))
  ]),
  experimental_providerMetadata: Ae.optional()
}), ec = l.object({
  role: l.literal("assistant"),
  content: l.union([
    l.string(),
    l.array(l.union([hs, Ku]))
  ]),
  experimental_providerMetadata: Ae.optional()
}), tc = l.object({
  role: l.literal("tool"),
  content: l.array(Yu),
  experimental_providerMetadata: Ae.optional()
}), rc = l.union([
  Xu,
  Qu,
  ec,
  tc
]);
function nc(e) {
  if (!Array.isArray(e))
    return "other";
  if (e.length === 0)
    return "messages";
  const t = e.map(ac);
  return t.some((r) => r === "has-ui-specific-parts") ? "ui-messages" : t.every(
    (r) => r === "has-core-specific-parts" || r === "message"
  ) ? "messages" : "other";
}
function ac(e) {
  return typeof e == "object" && e !== null && (e.role === "function" || // UI-only role
  e.role === "data" || // UI-only role
  "toolInvocations" in e || // UI-specific field
  "experimental_attachments" in e) ? "has-ui-specific-parts" : typeof e == "object" && e !== null && "content" in e && (Array.isArray(e.content) || // Core messages can have array content
  "experimental_providerMetadata" in e) ? "has-core-specific-parts" : typeof e == "object" && e !== null && "role" in e && "content" in e && typeof e.content == "string" && ["system", "user", "assistant", "tool"].includes(e.role) ? "message" : "other";
}
function sc(e) {
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
        let i, u, c;
        try {
          [i, u] = s.url.split(","), c = i.split(";")[0].split(":")[1];
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
            text: Zu(
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
var gs = "AI_MessageConversionError", ys = `vercel.ai.error.${gs}`, oc = Symbol.for(ys), vs, Pn = class extends j {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: gs, message: t }), this[vs] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ys);
  }
};
vs = oc;
function ic(e, t) {
  var r;
  const n = (r = t == null ? void 0 : t.tools) != null ? r : {}, a = [];
  for (const s of e) {
    const { role: o, content: i, toolInvocations: u, experimental_attachments: c } = s;
    switch (o) {
      case "system": {
        a.push({
          role: "system",
          content: i
        });
        break;
      }
      case "user": {
        a.push({
          role: "user",
          content: c ? [
            { type: "text", text: i },
            ...sc(c)
          ] : i
        });
        break;
      }
      case "assistant": {
        if (u == null) {
          a.push({ role: "assistant", content: i });
          break;
        }
        a.push({
          role: "assistant",
          content: [
            { type: "text", text: i },
            ...u.map(
              ({ toolCallId: d, toolName: f, args: g }) => ({
                type: "tool-call",
                toolCallId: d,
                toolName: f,
                args: g
              })
            )
          ]
        }), a.push({
          role: "tool",
          content: u.map((d) => {
            if (!("result" in d))
              throw new Pn({
                originalMessage: s,
                message: "ToolInvocation must have a result: " + JSON.stringify(d)
              });
            const { toolCallId: f, toolName: g, result: v } = d, _ = n[g];
            return (_ == null ? void 0 : _.experimental_toToolResultContent) != null ? {
              type: "tool-result",
              toolCallId: f,
              toolName: g,
              result: _.experimental_toToolResultContent(v),
              experimental_content: _.experimental_toToolResultContent(v)
            } : {
              type: "tool-result",
              toolCallId: f,
              toolName: g,
              result: v
            };
          })
        });
        break;
      }
      case "data":
        break;
      default: {
        const d = o;
        throw new Pn({
          originalMessage: s,
          message: `Unsupported role: ${d}`
        });
      }
    }
  }
  return a;
}
function lc({
  prompt: e,
  tools: t
}) {
  if (e.prompt == null && e.messages == null)
    throw new $e({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new $e({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new $e({
      prompt: e,
      message: "system must be a string"
    });
  if (e.prompt != null) {
    if (typeof e.prompt != "string")
      throw new $e({
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
    const r = nc(e.messages);
    if (r === "other")
      throw new $e({
        prompt: e,
        message: "messages must be an array of CoreMessage or UIMessage"
      });
    const n = r === "ui-messages" ? ic(e.messages, {
      tools: t
    }) : e.messages, a = xr({
      value: n,
      schema: l.array(rc)
    });
    if (!a.success)
      throw new $e({
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
function uc({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function yr(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = new Headers(e ?? {});
  return n.has("Content-Type") || n.set("Content-Type", t), r !== void 0 && n.set("X-Vercel-AI-Data-Stream", r), n;
}
function Rn(e, t) {
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
Wt({ prefix: "aiobj", size: 24 });
var he = class {
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
function cc() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
function jn(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = {};
  if (e != null)
    for (const [a, s] of Object.entries(e))
      n[a] = s;
  return n["Content-Type"] == null && (n["Content-Type"] = t), r !== void 0 && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function An({
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
function On() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function dc() {
  let e = [], t = null, r = !1, n = On();
  const a = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = On(), await n.promise, a();
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
    close: () => {
      r = !0, n.resolve(), e.length === 0 && (t == null || t.close());
    }
  };
}
Wt({ prefix: "aiobj", size: 24 });
var _s = "AI_InvalidToolArgumentsError", bs = `vercel.ai.error.${_s}`, pc = Symbol.for(bs), ws, fc = class extends j {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Kr(
      r
    )}`
  }) {
    super({ name: _s, message: n, cause: r }), this[ws] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, bs);
  }
};
ws = pc;
var xs = "AI_NoSuchToolError", ks = `vercel.ai.error.${xs}`, mc = Symbol.for(ks), Ts, vr = class extends j {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: xs, message: r }), this[Ts] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, ks);
  }
};
Ts = mc;
function hc(e) {
  return e != null && Object.keys(e).length > 0;
}
function gc({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return hc(e) ? {
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
            parameters: Va(s.parameters).jsonSchema
          };
        case "provider-defined":
          return {
            type: "provider-defined",
            name: a,
            id: s.id,
            args: s.args
          };
        default: {
          const i = o;
          throw new Error(`Unsupported tool type: ${i}`);
        }
      }
    }),
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
var yc = /^([\s\S]*?)(\s+)(\S*)$/;
function vc(e) {
  const t = e.match(yc);
  return t ? { prefix: t[1], whitespace: t[2], suffix: t[3] } : void 0;
}
function _c({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName;
  if (t == null)
    throw new vr({ toolName: e.toolName });
  const n = t[r];
  if (n == null)
    throw new vr({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = Va(n.parameters), s = e.args.trim() === "" ? xr({ value: {}, schema: a }) : en({ text: e.args, schema: a });
  if (s.success === !1)
    throw new fc({
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
function bc({
  text: e = "",
  tools: t,
  toolCalls: r,
  toolResults: n
}) {
  const a = [];
  return a.push({
    role: "assistant",
    content: [{ type: "text", text: e }, ...r]
  }), n.length > 0 && a.push({
    role: "tool",
    content: n.map((s) => {
      const o = t[s.toolName];
      return (o == null ? void 0 : o.experimental_toToolResultContent) != null ? {
        type: "tool-result",
        toolCallId: s.toolCallId,
        toolName: s.toolName,
        result: o.experimental_toToolResultContent(s.result),
        experimental_content: o.experimental_toToolResultContent(
          s.result
        )
      } : {
        type: "tool-result",
        toolCallId: s.toolCallId,
        toolName: s.toolName,
        result: s.result
      };
    })
  }), a;
}
Wt({ prefix: "aitxt", size: 24 });
function cn(e, t) {
  const r = e.getReader(), n = t.getReader();
  let a, s, o = !1, i = !1;
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
        if (i) {
          await u(d);
          return;
        }
        a == null && (a = r.read()), s == null && (s = n.read());
        const { result: f, reader: g } = await Promise.race([
          a.then((v) => ({ result: v, reader: r })),
          s.then((v) => ({ result: v, reader: n }))
        ]);
        f.done || d.enqueue(f.value), g === r ? (a = void 0, f.done && (await c(d), o = !0)) : (s = void 0, f.done && (i = !0, await u(d)));
      } catch (f) {
        d.error(f);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
function wc({
  tools: e,
  generatorStream: t,
  toolCallStreaming: r,
  tracer: n,
  telemetry: a,
  messages: s,
  abortSignal: o
}) {
  let i = null;
  const u = new ReadableStream({
    start(p) {
      i = p;
    }
  }), c = {}, d = /* @__PURE__ */ new Set();
  let f = !1, g;
  function v() {
    f && d.size === 0 && (g != null && i.enqueue(g), i.close());
  }
  const _ = new TransformStream({
    transform(p, y) {
      const T = p.type;
      switch (T) {
        case "text-delta":
        case "response-metadata":
        case "error": {
          y.enqueue(p);
          break;
        }
        case "tool-call-delta": {
          r && (c[p.toolCallId] || (y.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: p.toolCallId,
            toolName: p.toolName
          }), c[p.toolCallId] = !0), y.enqueue({
            type: "tool-call-delta",
            toolCallId: p.toolCallId,
            toolName: p.toolName,
            argsTextDelta: p.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          const P = p.toolName;
          if (e == null) {
            i.enqueue({
              type: "error",
              error: new vr({ toolName: p.toolName })
            });
            break;
          }
          const S = e[P];
          if (S == null) {
            i.enqueue({
              type: "error",
              error: new vr({
                toolName: p.toolName,
                availableTools: Object.keys(e)
              })
            });
            break;
          }
          try {
            const x = _c({
              toolCall: p,
              tools: e
            });
            if (y.enqueue(x), S.execute != null) {
              const R = Ge();
              d.add(R), Wr({
                name: "ai.toolCall",
                attributes: Xe({
                  telemetry: a,
                  attributes: {
                    ...Jr({
                      operationId: "ai.toolCall",
                      telemetry: a
                    }),
                    "ai.toolCall.name": x.toolName,
                    "ai.toolCall.id": x.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(x.args)
                    }
                  }
                }),
                tracer: n,
                fn: async (I) => S.execute(x.args, {
                  messages: s,
                  abortSignal: o
                }).then(
                  (U) => {
                    i.enqueue({
                      ...x,
                      type: "tool-result",
                      result: U
                    }), d.delete(R), v();
                    try {
                      I.setAttributes(
                        Xe({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(U)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (U) => {
                    i.enqueue({
                      type: "error",
                      error: U
                    }), d.delete(R), v();
                  }
                )
              });
            }
          } catch (x) {
            i.enqueue({
              type: "error",
              error: x
            });
          }
          break;
        }
        case "finish": {
          g = {
            type: "finish",
            finishReason: p.finishReason,
            logprobs: p.logprobs,
            usage: uc(p.usage),
            experimental_providerMetadata: p.providerMetadata
          };
          break;
        }
        default: {
          const P = T;
          throw new Error(`Unhandled chunk type: ${P}`);
        }
      }
    },
    flush() {
      f = !0, v();
    }
  });
  return new ReadableStream({
    async start(p) {
      return Promise.all([
        t.pipeThrough(_).pipeTo(
          new WritableStream({
            write(y) {
              p.enqueue(y);
            },
            close() {
            }
          })
        ),
        u.pipeTo(
          new WritableStream({
            write(y) {
              p.enqueue(y);
            },
            close() {
              p.close();
            }
          })
        )
      ]);
    }
  });
}
var xc = Wt({ prefix: "aitxt", size: 24 });
function md({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: s,
  maxRetries: o,
  abortSignal: i,
  headers: u,
  maxSteps: c = 1,
  experimental_continueSteps: d = !1,
  experimental_telemetry: f,
  experimental_providerMetadata: g,
  experimental_toolCallStreaming: v = !1,
  experimental_activeTools: _,
  onChunk: p,
  onFinish: y,
  onStepFinish: T,
  _internal: {
    now: P = cc,
    generateId: S = xc,
    currentDate: x = () => /* @__PURE__ */ new Date()
  } = {},
  ...R
}) {
  return new kc({
    model: e,
    telemetry: f,
    headers: u,
    settings: R,
    maxRetries: o,
    abortSignal: i,
    system: n,
    prompt: a,
    messages: s,
    tools: t,
    toolChoice: r,
    toolCallStreaming: v,
    activeTools: _,
    maxSteps: c,
    continueSteps: d,
    providerMetadata: g,
    onChunk: p,
    onFinish: y,
    onStepFinish: T,
    now: P,
    currentDate: x,
    generateId: S
  });
}
var kc = class {
  constructor({
    model: e,
    telemetry: t,
    headers: r,
    settings: n,
    maxRetries: a,
    abortSignal: s,
    system: o,
    prompt: i,
    messages: u,
    tools: c,
    toolChoice: d,
    toolCallStreaming: f,
    activeTools: g,
    maxSteps: v,
    continueSteps: _,
    providerMetadata: p,
    onChunk: y,
    onFinish: T,
    onStepFinish: P,
    now: S,
    currentDate: x,
    generateId: R
  }) {
    if (this.warningsPromise = new he(), this.usagePromise = new he(), this.finishReasonPromise = new he(), this.providerMetadataPromise = new he(), this.textPromise = new he(), this.toolCallsPromise = new he(), this.toolResultsPromise = new he(), this.requestPromise = new he(), this.responsePromise = new he(), this.stepsPromise = new he(), this.stitchableStream = dc(), v < 1)
      throw new ie({
        parameter: "maxSteps",
        value: v,
        message: "maxSteps must be at least 1"
      });
    const I = Pu(t), U = Iu({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...n, maxRetries: a }
    }), L = lc({
      prompt: { system: o, prompt: i, messages: u },
      tools: c
    }), M = this;
    Wr({
      name: "ai.streamText",
      attributes: Xe({
        telemetry: t,
        attributes: {
          ...Jr({ operationId: "ai.streamText", telemetry: t }),
          ...U,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: i, messages: u })
          },
          "ai.settings.maxSteps": v
        }
      }),
      tracer: I,
      endWhenDone: !1,
      fn: async (F) => {
        const Q = Cu({ maxRetries: a }), re = [];
        async function Oe({
          currentStep: st,
          responseMessages: V,
          usage: ee,
          stepType: de,
          previousStepText: ot,
          hasLeadingWhitespace: Yt
        }) {
          const D = V.length === 0 ? L.type : "messages", G = [
            ...L.messages,
            ...V
          ], te = await qu({
            prompt: {
              type: D,
              system: L.system,
              messages: G
            },
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: e.supportsUrl
          }), J = {
            type: "regular",
            ...gc({ tools: c, toolChoice: d, activeTools: g })
          }, {
            result: { stream: Ps, warnings: Xt, rawResponse: Ve, request: pn },
            doStreamSpan: ze,
            startTimestampMs: fn
          } = await Q(
            () => Wr({
              name: "ai.streamText.doStream",
              attributes: Xe({
                telemetry: t,
                attributes: {
                  ...Jr({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...U,
                  "ai.prompt.format": {
                    input: () => D
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(te)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var A;
                      return (A = J.tools) == null ? void 0 : A.map((z) => JSON.stringify(z));
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => J.toolChoice != null ? JSON.stringify(J.toolChoice) : void 0
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
              tracer: I,
              endWhenDone: !1,
              fn: async (A) => ({
                startTimestampMs: S(),
                // get before the call
                doStreamSpan: A,
                result: await e.doStream({
                  mode: J,
                  ...Ju(n),
                  inputFormat: D,
                  prompt: te,
                  providerMetadata: p,
                  abortSignal: s,
                  headers: r
                })
              })
            })
          ), Rs = wc({
            tools: c,
            generatorStream: Ps,
            toolCallStreaming: f,
            tracer: I,
            telemetry: t,
            messages: G,
            abortSignal: s
          }), Ir = pn ?? {}, pe = [], He = [];
          let ne = "unknown", ae = {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          }, Je, mn = !0, We = "", it = de === "continue" ? ot : "", lt, K = {
            id: R(),
            timestamp: x(),
            modelId: e.modelId
          }, Fe = "", hn = !1, gn = !0, yn = !1;
          async function Er({
            controller: A,
            chunk: z
          }) {
            A.enqueue(z), We += z.textDelta, it += z.textDelta, hn = !0, yn = z.textDelta.trimEnd() !== z.textDelta, await (y == null ? void 0 : y({ chunk: z }));
          }
          M.stitchableStream.addStream(
            Rs.pipeThrough(
              new TransformStream({
                async transform(A, z) {
                  var fe, ut, xe;
                  if (mn) {
                    const me = S() - fn;
                    mn = !1, ze.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": me
                    }), ze.setAttributes({
                      "ai.response.msToFirstChunk": me
                    });
                  }
                  if (A.type === "text-delta" && A.textDelta.length === 0)
                    return;
                  const ke = A.type;
                  switch (ke) {
                    case "text-delta": {
                      if (_) {
                        const me = gn && Yt ? A.textDelta.trimStart() : A.textDelta;
                        if (me.length === 0)
                          break;
                        gn = !1, Fe += me;
                        const Qt = vc(Fe);
                        Qt != null && (Fe = Qt.suffix, await Er({
                          controller: z,
                          chunk: {
                            type: "text-delta",
                            textDelta: Qt.prefix + Qt.whitespace
                          }
                        }));
                      } else
                        await Er({ controller: z, chunk: A });
                      break;
                    }
                    case "tool-call": {
                      z.enqueue(A), pe.push(A), await (y == null ? void 0 : y({ chunk: A }));
                      break;
                    }
                    case "tool-result": {
                      z.enqueue(A), He.push(A), await (y == null ? void 0 : y({ chunk: A }));
                      break;
                    }
                    case "response-metadata": {
                      K = {
                        id: (fe = A.id) != null ? fe : K.id,
                        timestamp: (ut = A.timestamp) != null ? ut : K.timestamp,
                        modelId: (xe = A.modelId) != null ? xe : K.modelId
                      };
                      break;
                    }
                    case "finish": {
                      ae = A.usage, ne = A.finishReason, Je = A.experimental_providerMetadata, lt = A.logprobs;
                      const me = S() - fn;
                      ze.addEvent("ai.stream.finish"), ze.setAttributes({
                        "ai.response.msToFinish": me,
                        "ai.response.avgCompletionTokensPerSecond": 1e3 * ae.completionTokens / me
                      });
                      break;
                    }
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      z.enqueue(A), await (y == null ? void 0 : y({ chunk: A }));
                      break;
                    }
                    case "error": {
                      z.enqueue(A), ne = "error";
                      break;
                    }
                    default: {
                      const me = ke;
                      throw new Error(`Unknown chunk type: ${me}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(A) {
                  const z = pe.length > 0 ? JSON.stringify(pe) : void 0;
                  let fe = "done";
                  st + 1 < v && (_ && ne === "length" && // only use continue when there are no tool calls:
                  pe.length === 0 ? fe = "continue" : (
                    // there are tool calls:
                    pe.length > 0 && // all current tool calls have results:
                    He.length === pe.length && (fe = "tool-result")
                  )), _ && Fe.length > 0 && (fe !== "continue" || // when the next step is a regular step, publish the buffer
                  de === "continue" && !hn) && (await Er({
                    controller: A,
                    chunk: {
                      type: "text-delta",
                      textDelta: Fe
                    }
                  }), Fe = "");
                  try {
                    ze.setAttributes(
                      Xe({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": ne,
                          "ai.response.text": { output: () => We },
                          "ai.response.toolCalls": {
                            output: () => z
                          },
                          "ai.response.id": K.id,
                          "ai.response.model": K.modelId,
                          "ai.response.timestamp": K.timestamp.toISOString(),
                          "ai.usage.promptTokens": ae.promptTokens,
                          "ai.usage.completionTokens": ae.completionTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [ne],
                          "gen_ai.response.id": K.id,
                          "gen_ai.response.model": K.modelId,
                          "gen_ai.usage.input_tokens": ae.promptTokens,
                          "gen_ai.usage.output_tokens": ae.completionTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    ze.end();
                  }
                  if (A.enqueue({
                    type: "step-finish",
                    finishReason: ne,
                    usage: ae,
                    experimental_providerMetadata: Je,
                    logprobs: lt,
                    response: {
                      ...K
                    },
                    isContinued: fe === "continue"
                  }), de === "continue") {
                    const ke = V[V.length - 1];
                    typeof ke.content == "string" ? ke.content += We : ke.content.push({
                      text: We,
                      type: "text"
                    });
                  } else
                    V.push(
                      ...bc({
                        text: We,
                        tools: c ?? {},
                        toolCalls: pe,
                        toolResults: He
                      })
                    );
                  const ut = {
                    stepType: de,
                    text: We,
                    toolCalls: pe,
                    toolResults: He,
                    finishReason: ne,
                    usage: ae,
                    warnings: Xt,
                    logprobs: lt,
                    request: Ir,
                    response: {
                      ...K,
                      headers: Ve == null ? void 0 : Ve.headers,
                      // deep clone msgs to avoid mutating past messages in multi-step:
                      messages: JSON.parse(JSON.stringify(V))
                    },
                    experimental_providerMetadata: Je,
                    isContinued: fe === "continue"
                  };
                  re.push(ut), await (P == null ? void 0 : P(ut));
                  const xe = {
                    promptTokens: ee.promptTokens + ae.promptTokens,
                    completionTokens: ee.completionTokens + ae.completionTokens,
                    totalTokens: ee.totalTokens + ae.totalTokens
                  };
                  if (fe !== "done") {
                    await Oe({
                      currentStep: st + 1,
                      responseMessages: V,
                      usage: xe,
                      stepType: fe,
                      previousStepText: it,
                      hasLeadingWhitespace: yn
                    });
                    return;
                  }
                  try {
                    A.enqueue({
                      type: "finish",
                      finishReason: ne,
                      usage: xe,
                      experimental_providerMetadata: Je,
                      logprobs: lt,
                      response: {
                        ...K
                      }
                    }), M.stitchableStream.close(), F.setAttributes(
                      Xe({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": ne,
                          "ai.response.text": { output: () => it },
                          "ai.response.toolCalls": {
                            output: () => z
                          },
                          "ai.usage.promptTokens": xe.promptTokens,
                          "ai.usage.completionTokens": xe.completionTokens
                        }
                      })
                    ), M.usagePromise.resolve(xe), M.finishReasonPromise.resolve(ne), M.textPromise.resolve(it), M.toolCallsPromise.resolve(pe), M.providerMetadataPromise.resolve(Je), M.toolResultsPromise.resolve(He), M.requestPromise.resolve(Ir), M.responsePromise.resolve({
                      ...K,
                      headers: Ve == null ? void 0 : Ve.headers,
                      messages: V
                    }), M.stepsPromise.resolve(re), M.warningsPromise.resolve(Xt ?? []), await (T == null ? void 0 : T({
                      finishReason: ne,
                      logprobs: lt,
                      usage: xe,
                      text: it,
                      toolCalls: pe,
                      // The tool results are inferred as a never[] type, because they are
                      // optional and the execute method with an inferred result type is
                      // optional as well. Therefore we need to cast the toolResults to any.
                      // The type exposed to the users will be correctly inferred.
                      toolResults: He,
                      request: Ir,
                      response: {
                        ...K,
                        headers: Ve == null ? void 0 : Ve.headers,
                        messages: V
                      },
                      warnings: Xt,
                      experimental_providerMetadata: Je,
                      steps: re
                    }));
                  } catch (ke) {
                    A.error(ke);
                  } finally {
                    F.end();
                  }
                }
              })
            )
          );
        }
        await Oe({
          currentStep: 0,
          responseMessages: [],
          usage: {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          },
          previousStepText: "",
          stepType: "initial",
          hasLeadingWhitespace: !1
        });
      }
    }).catch((F) => {
      M.stitchableStream.addStream(
        new ReadableStream({
          start(Q) {
            Q.error(F);
          }
        })
      ), M.stitchableStream.close();
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
  get text() {
    return this.textPromise.value;
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
    const [e, t] = this.stitchableStream.stream.tee();
    return this.stitchableStream.stream = t, e;
  }
  get textStream() {
    return Rn(this.teeStream(), {
      transform(e, t) {
        e.type === "text-delta" ? t.enqueue(e.textDelta) : e.type === "error" && t.error(e.error);
      }
    });
  }
  get fullStream() {
    return Rn(this.teeStream(), {
      transform(e, t) {
        t.enqueue(e);
      }
    });
  }
  toDataStreamInternal({
    getErrorMessage: e = () => "",
    // mask error messages for safety by default
    sendUsage: t = !0
  } = {}) {
    let r = "";
    const n = new TransformStream({
      async transform(s, o) {
        o.enqueue(s), s.type === "text-delta" && (r += s.textDelta);
      }
    }), a = new TransformStream({
      transform: async (s, o) => {
        const i = s.type;
        switch (i) {
          case "text-delta": {
            o.enqueue(Se("text", s.textDelta));
            break;
          }
          case "tool-call-streaming-start": {
            o.enqueue(
              Se("tool_call_streaming_start", {
                toolCallId: s.toolCallId,
                toolName: s.toolName
              })
            );
            break;
          }
          case "tool-call-delta": {
            o.enqueue(
              Se("tool_call_delta", {
                toolCallId: s.toolCallId,
                argsTextDelta: s.argsTextDelta
              })
            );
            break;
          }
          case "tool-call": {
            o.enqueue(
              Se("tool_call", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              })
            );
            break;
          }
          case "tool-result": {
            o.enqueue(
              Se("tool_result", {
                toolCallId: s.toolCallId,
                result: s.result
              })
            );
            break;
          }
          case "error": {
            o.enqueue(
              Se("error", e(s.error))
            );
            break;
          }
          case "step-finish": {
            o.enqueue(
              Se("finish_step", {
                finishReason: s.finishReason,
                usage: t ? {
                  promptTokens: s.usage.promptTokens,
                  completionTokens: s.usage.completionTokens
                } : void 0,
                isContinued: s.isContinued
              })
            );
            break;
          }
          case "finish": {
            o.enqueue(
              Se("finish_message", {
                finishReason: s.finishReason,
                usage: t ? {
                  promptTokens: s.usage.promptTokens,
                  completionTokens: s.usage.completionTokens
                } : void 0
              })
            );
            break;
          }
          default: {
            const u = i;
            throw new Error(`Unknown chunk type: ${u}`);
          }
        }
      }
    });
    return this.fullStream.pipeThrough(n).pipeThrough(a).pipeThrough(new TextEncoderStream());
  }
  pipeDataStreamToResponse(e, {
    status: t,
    statusText: r,
    headers: n,
    data: a,
    getErrorMessage: s,
    sendUsage: o
  } = {}) {
    An({
      response: e,
      status: t,
      statusText: r,
      headers: jn(n, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({ data: a, getErrorMessage: s, sendUsage: o })
    });
  }
  pipeTextStreamToResponse(e, t) {
    An({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: jn(t == null ? void 0 : t.headers, {
        contentType: "text/plain; charset=utf-8"
      }),
      stream: this.textStream.pipeThrough(new TextEncoderStream())
    });
  }
  toDataStream(e) {
    const t = this.toDataStreamInternal({
      getErrorMessage: e == null ? void 0 : e.getErrorMessage,
      sendUsage: e == null ? void 0 : e.sendUsage
    });
    return e != null && e.data ? cn(e == null ? void 0 : e.data.stream, t) : t;
  }
  toDataStreamResponse({
    headers: e,
    status: t,
    statusText: r,
    data: n,
    getErrorMessage: a,
    sendUsage: s
  } = {}) {
    return new Response(
      this.toDataStream({ data: n, getErrorMessage: a, sendUsage: s }),
      {
        status: t,
        statusText: r,
        headers: yr(e, {
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
      headers: yr(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, Tc = {};
Ya(Tc, {
  toDataStream: () => Is,
  toDataStreamResponse: () => Sc
});
function Ss(e = {}) {
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
      e.onCompletion && await e.onCompletion(r);
    }
  });
}
function Cs() {
  const e = new TextEncoder(), t = new TextDecoder();
  return new TransformStream({
    transform: async (r, n) => {
      const a = t.decode(r);
      n.enqueue(e.encode(Se("text", a)));
    }
  });
}
function Is(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        var a;
        if (typeof r == "string") {
          n.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && Mn(
            (a = r.data) == null ? void 0 : a.chunk,
            n
          );
          return;
        }
        Mn(r, n);
      }
    })
  ).pipeThrough(Ss(t)).pipeThrough(Cs());
}
function Sc(e, t) {
  var r;
  const n = Is(e, t == null ? void 0 : t.callbacks), a = t == null ? void 0 : t.data, s = t == null ? void 0 : t.init, o = a ? cn(a.stream, n) : n;
  return new Response(o, {
    status: (r = s == null ? void 0 : s.status) != null ? r : 200,
    statusText: s == null ? void 0 : s.statusText,
    headers: yr(s == null ? void 0 : s.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function Mn(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const n of r)
      n.type === "text" && t.enqueue(n.text);
  }
}
var Cc = {};
Ya(Cc, {
  toDataStream: () => Es,
  toDataStreamResponse: () => Ic
});
function Es(e, t) {
  const r = Ec();
  return so(e[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(n, a) {
        a.enqueue(r(n.delta));
      }
    })
  ).pipeThrough(Ss(t)).pipeThrough(Cs());
}
function Ic(e, t = {}) {
  var r;
  const { init: n, data: a, callbacks: s } = t, o = Es(e, s), i = a ? cn(a.stream, o) : o;
  return new Response(i, {
    status: (r = n == null ? void 0 : n.status) != null ? r : 200,
    statusText: n == null ? void 0 : n.statusText,
    headers: yr(n == null ? void 0 : n.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function Ec() {
  let e = !0;
  return (t) => (e && (t = t.trimStart(), t && (e = !1)), t);
}
var Nc = l.object({
  type: l.literal("error"),
  error: l.object({
    type: l.string(),
    message: l.string()
  })
}), $n = tn({
  errorSchema: Nc,
  errorToMessage: (e) => e.error.message
});
function Pc({
  prompt: e,
  cacheControl: t
}) {
  var r, n, a, s;
  const o = /* @__PURE__ */ new Set(), i = Rc(e);
  let u;
  const c = [];
  function d(f) {
    var g;
    if (t === !1)
      return;
    const v = f == null ? void 0 : f.anthropic;
    return (g = v == null ? void 0 : v.cacheControl) != null ? g : v == null ? void 0 : v.cache_control;
  }
  for (let f = 0; f < i.length; f++) {
    const g = i[f], v = f === i.length - 1, _ = g.type;
    switch (_) {
      case "system": {
        if (u != null)
          throw new B({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        u = g.messages.map(({ content: p, providerMetadata: y }) => ({
          type: "text",
          text: p,
          cache_control: d(y)
        }));
        break;
      }
      case "user": {
        const p = [];
        for (const y of g.messages) {
          const { role: T, content: P } = y;
          switch (T) {
            case "user": {
              for (let S = 0; S < P.length; S++) {
                const x = P[S], R = S === P.length - 1, I = (r = d(x.providerMetadata)) != null ? r : R ? d(y.providerMetadata) : void 0;
                switch (x.type) {
                  case "text": {
                    p.push({
                      type: "text",
                      text: x.text,
                      cache_control: I
                    });
                    break;
                  }
                  case "image": {
                    if (x.image instanceof URL)
                      throw new B({
                        functionality: "Image URLs in user messages"
                      });
                    p.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: (n = x.mimeType) != null ? n : "image/jpeg",
                        data: mt(x.image)
                      },
                      cache_control: I
                    });
                    break;
                  }
                  case "file": {
                    if (x.data instanceof URL)
                      throw new B({
                        functionality: "Image URLs in user messages"
                      });
                    if (x.mimeType !== "application/pdf")
                      throw new B({
                        functionality: "Non-PDF files in user messages"
                      });
                    o.add("pdfs-2024-09-25"), p.push({
                      type: "document",
                      source: {
                        type: "base64",
                        media_type: "application/pdf",
                        data: x.data
                      },
                      cache_control: I
                    });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let S = 0; S < P.length; S++) {
                const x = P[S], R = S === P.length - 1, I = (a = d(x.providerMetadata)) != null ? a : R ? d(y.providerMetadata) : void 0, U = x.content != null ? x.content.map((L) => {
                  var M;
                  switch (L.type) {
                    case "text":
                      return {
                        type: "text",
                        text: L.text,
                        cache_control: void 0
                      };
                    case "image":
                      return {
                        type: "image",
                        source: {
                          type: "base64",
                          media_type: (M = L.mimeType) != null ? M : "image/jpeg",
                          data: L.data
                        },
                        cache_control: void 0
                      };
                  }
                }) : JSON.stringify(x.result);
                p.push({
                  type: "tool_result",
                  tool_use_id: x.toolCallId,
                  content: U,
                  is_error: x.isError,
                  cache_control: I
                });
              }
              break;
            }
            default: {
              const S = T;
              throw new Error(`Unsupported role: ${S}`);
            }
          }
        }
        c.push({ role: "user", content: p });
        break;
      }
      case "assistant": {
        const p = [];
        for (let y = 0; y < g.messages.length; y++) {
          const T = g.messages[y], P = y === g.messages.length - 1, { content: S } = T;
          for (let x = 0; x < S.length; x++) {
            const R = S[x], I = x === S.length - 1, U = (s = d(R.providerMetadata)) != null ? s : I ? d(T.providerMetadata) : void 0;
            switch (R.type) {
              case "text": {
                p.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    v && P && I ? R.text.trim() : R.text
                  ),
                  cache_control: U
                });
                break;
              }
              case "tool-call": {
                p.push({
                  type: "tool_use",
                  id: R.toolCallId,
                  name: R.toolName,
                  input: R.args,
                  cache_control: U
                });
                break;
              }
            }
          }
        }
        c.push({ role: "assistant", content: p });
        break;
      }
      default: {
        const p = _;
        throw new Error(`Unsupported type: ${p}`);
      }
    }
  }
  return {
    prompt: { system: u, messages: c },
    betas: o
  };
}
function Rc(e) {
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
function Zn(e) {
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
function jc(e) {
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
        switch (a.add("computer-use-2024-10-22"), u.id) {
          case "anthropic.computer_20241022":
            s.push({
              name: u.name,
              type: "computer_20241022",
              display_width_px: u.args.displayWidthPx,
              display_height_px: u.args.displayHeightPx,
              display_number: u.args.displayNumber
            });
            break;
          case "anthropic.text_editor_20241022":
            s.push({
              name: u.name,
              type: "text_editor_20241022"
            });
            break;
          case "anthropic.bash_20241022":
            s.push({
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
  const i = o.type;
  switch (i) {
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
      const u = i;
      throw new B({
        functionality: `Unsupported tool choice type: ${u}`
      });
    }
  }
}
var Ac = class {
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
    var f;
    const g = e.type, v = [];
    o != null && v.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && v.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), d != null && v.push({
      type: "unsupported-setting",
      setting: "seed"
    }), c != null && c.type !== "text" && v.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: _, betas: p } = Pc({
      prompt: t,
      cacheControl: (f = this.settings.cacheControl) != null ? f : !1
    }), y = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: r ?? 4096,
      // 4096: max model output tokens TODO remove
      temperature: n,
      top_k: s,
      top_p: a,
      stop_sequences: u,
      // prompt:
      system: _.system,
      messages: _.messages
    };
    switch (g) {
      case "regular": {
        const {
          tools: T,
          tool_choice: P,
          toolWarnings: S,
          betas: x
        } = jc(e);
        return {
          args: { ...y, tools: T, tool_choice: P },
          warnings: [...v, ...S],
          betas: /* @__PURE__ */ new Set([...p, ...x])
        };
      }
      case "object-json":
        throw new B({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: T, description: P, parameters: S } = e.tool;
        return {
          args: {
            ...y,
            tools: [{ name: T, description: P, input_schema: S }],
            tool_choice: { type: "tool", name: T }
          },
          warnings: v,
          betas: p
        };
      }
      default: {
        const T = g;
        throw new Error(`Unsupported type: ${T}`);
      }
    }
  }
  getHeaders({
    betas: e,
    headers: t
  }) {
    return this.settings.cacheControl && e.add("prompt-caching-2024-07-31"), Ce(
      this.config.headers(),
      e.size > 0 ? { "anthropic-beta": Array.from(e).join(",") } : {},
      t
    );
  }
  async doGenerate(e) {
    var t, r, n, a;
    const { args: s, warnings: o, betas: i } = await this.getArgs(e), { responseHeaders: u, value: c } = await ve({
      url: `${this.config.baseURL}/messages`,
      headers: this.getHeaders({ betas: i, headers: e.headers }),
      body: s,
      failedResponseHandler: $n,
      successfulResponseHandler: at(
        Oc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: d, ...f } = s;
    let g = "";
    for (const _ of c.content)
      _.type === "text" && (g += _.text);
    let v;
    if (c.content.some((_) => _.type === "tool_use")) {
      v = [];
      for (const _ of c.content)
        _.type === "tool_use" && v.push({
          toolCallType: "function",
          toolCallId: _.id,
          toolName: _.name,
          args: JSON.stringify(_.input)
        });
    }
    return {
      text: g,
      toolCalls: v,
      finishReason: Zn(c.stop_reason),
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
      providerMetadata: this.settings.cacheControl === !0 ? {
        anthropic: {
          cacheCreationInputTokens: (n = c.usage.cache_creation_input_tokens) != null ? n : null,
          cacheReadInputTokens: (a = c.usage.cache_read_input_tokens) != null ? a : null
        }
      } : void 0,
      request: { body: JSON.stringify(s) }
    };
  }
  async doStream(e) {
    const { args: t, warnings: r, betas: n } = await this.getArgs(e), a = { ...t, stream: !0 }, { responseHeaders: s, value: o } = await ve({
      url: `${this.config.baseURL}/messages`,
      headers: this.getHeaders({ betas: n, headers: e.headers }),
      body: a,
      failedResponseHandler: $n,
      successfulResponseHandler: kr(
        Mc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...u } = t;
    let c = "unknown";
    const d = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, f = {};
    let g;
    const v = this;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          transform(_, p) {
            var y, T, P, S;
            if (!_.success) {
              p.enqueue({ type: "error", error: _.error });
              return;
            }
            const x = _.value;
            switch (x.type) {
              case "ping":
                return;
              case "content_block_start": {
                const R = x.content_block.type;
                switch (R) {
                  case "text":
                    return;
                  case "tool_use": {
                    f[x.index] = {
                      toolCallId: x.content_block.id,
                      toolName: x.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const I = R;
                    throw new Error(
                      `Unsupported content block type: ${I}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (f[x.index] != null) {
                  const R = f[x.index];
                  p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: R.toolCallId,
                    toolName: R.toolName,
                    args: R.jsonText
                  }), delete f[x.index];
                }
                return;
              }
              case "content_block_delta": {
                const R = x.delta.type;
                switch (R) {
                  case "text_delta": {
                    p.enqueue({
                      type: "text-delta",
                      textDelta: x.delta.text
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const I = f[x.index];
                    p.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: I.toolCallId,
                      toolName: I.toolName,
                      argsTextDelta: x.delta.partial_json
                    }), I.jsonText += x.delta.partial_json;
                    return;
                  }
                  default: {
                    const I = R;
                    throw new Error(
                      `Unsupported delta type: ${I}`
                    );
                  }
                }
              }
              case "message_start": {
                d.promptTokens = x.message.usage.input_tokens, d.completionTokens = x.message.usage.output_tokens, v.settings.cacheControl === !0 && (g = {
                  anthropic: {
                    cacheCreationInputTokens: (y = x.message.usage.cache_creation_input_tokens) != null ? y : null,
                    cacheReadInputTokens: (T = x.message.usage.cache_read_input_tokens) != null ? T : null
                  }
                }), p.enqueue({
                  type: "response-metadata",
                  id: (P = x.message.id) != null ? P : void 0,
                  modelId: (S = x.message.model) != null ? S : void 0
                });
                return;
              }
              case "message_delta": {
                d.completionTokens = x.usage.output_tokens, c = Zn(x.delta.stop_reason);
                return;
              }
              case "message_stop": {
                p.enqueue({
                  type: "finish",
                  finishReason: c,
                  usage: d,
                  providerMetadata: g
                });
                return;
              }
              case "error": {
                p.enqueue({ type: "error", error: x.error });
                return;
              }
              default: {
                const R = x;
                throw new Error(`Unsupported chunk type: ${R}`);
              }
            }
          }
        })
      ),
      rawCall: { rawPrompt: i, rawSettings: u },
      rawResponse: { headers: s },
      warnings: r,
      request: { body: JSON.stringify(a) }
    };
  }
}, Oc = l.object({
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
}), Mc = l.discriminatedUnion("type", [
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
]), $c = l.object({
  command: l.string(),
  restart: l.boolean().optional()
});
function Zc(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20241022",
    args: {},
    parameters: $c,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Dc = l.object({
  command: l.enum(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: l.string(),
  file_text: l.string().optional(),
  insert_line: l.number().int().optional(),
  new_str: l.string().optional(),
  old_str: l.string().optional(),
  view_range: l.array(l.number().int()).optional()
});
function Uc(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20241022",
    args: {},
    parameters: Dc,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Lc = l.object({
  action: l.enum([
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
  coordinate: l.array(l.number().int()).optional(),
  text: l.string().optional()
});
function qc(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20241022",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Lc,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Bc = {
  bash_20241022: Zc,
  textEditor_20241022: Uc,
  computer_20241022: qc
};
function Vc(e = {}) {
  var t;
  const r = (t = rn(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", n = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": Qr({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), a = (o, i = {}) => new Ac(o, i, {
    provider: "anthropic.messages",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = function(o, i) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return a(o, i);
  };
  return s.languageModel = a, s.chat = a, s.messages = a, s.textEmbeddingModel = (o) => {
    throw new zs({ modelId: o, modelType: "textEmbeddingModel" });
  }, s.tools = Bc, s;
}
Vc();
function zc(e) {
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
            var i;
            switch (o.type) {
              case "text":
                return { type: "text", text: o.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: o.image instanceof URL ? o.image.toString() : `data:${(i = o.mimeType) != null ? i : "image/jpeg"};base64,${mt(o.image)}`
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
        const i = [];
        for (const u of a)
          switch (u.type) {
            case "text": {
              o += u.text;
              break;
            }
            case "tool-call": {
              i.push({
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
          tool_calls: i.length > 0 ? i : void 0
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
function Dn(e) {
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
var Hc = l.object({
  object: l.literal("error"),
  message: l.string(),
  type: l.string(),
  param: l.string().nullable(),
  code: l.string().nullable()
}), Gr = tn({
  errorSchema: Hc,
  errorToMessage: (e) => e.message
});
function Un({
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
function Jc(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0, n = [];
  if (r == null)
    return { tools: void 0, tool_choice: void 0, toolWarnings: n };
  const a = [];
  for (const i of r)
    i.type === "provider-defined" ? n.push({ type: "unsupported-tool", tool: i }) : a.push({
      type: "function",
      function: {
        name: i.name,
        description: i.description,
        parameters: i.parameters
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
          (i) => i.function.name === s.toolName
        ),
        tool_choice: "any",
        toolWarnings: n
      };
    default: {
      const i = o;
      throw new B({
        functionality: `Unsupported tool choice type: ${i}`
      });
    }
  }
}
var Wc = class {
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
    presencePenalty: i,
    stopSequences: u,
    responseFormat: c,
    seed: d
  }) {
    const f = e.type, g = [];
    s != null && g.push({
      type: "unsupported-setting",
      setting: "topK"
    }), o != null && g.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && g.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), u != null && g.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    }), c != null && c.type === "json" && c.schema != null && g.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is not supported"
    });
    const v = {
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
      messages: zc(t)
    };
    switch (f) {
      case "regular": {
        const { tools: _, tool_choice: p, toolWarnings: y } = Jc(e);
        return {
          args: { ...v, tools: _, tool_choice: p },
          warnings: [...g, ...y]
        };
      }
      case "object-json":
        return {
          args: {
            ...v,
            response_format: { type: "json_object" }
          },
          warnings: g
        };
      case "object-tool":
        return {
          args: {
            ...v,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: g
        };
      default: {
        const _ = f;
        throw new Error(`Unsupported type: ${_}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const { args: n, warnings: a } = this.getArgs(e), { responseHeaders: s, value: o } = await ve({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ce(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Gr,
      successfulResponseHandler: at(
        Fc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...u } = n, c = o.choices[0];
    let d = (t = c.message.content) != null ? t : void 0;
    const f = i[i.length - 1];
    return f.role === "assistant" && (d != null && d.startsWith(f.content)) && (d = d.slice(f.content.length)), {
      text: d,
      toolCalls: (r = c.message.tool_calls) == null ? void 0 : r.map((g) => ({
        toolCallType: "function",
        toolCallId: g.id,
        toolName: g.function.name,
        args: g.function.arguments
      })),
      finishReason: Dn(c.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: u },
      rawResponse: { headers: s },
      request: { body: JSON.stringify(n) },
      response: Un(o),
      warnings: a
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = { ...t, stream: !0 }, { responseHeaders: a, value: s } = await ve({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ce(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Gr,
      successfulResponseHandler: kr(
        Gc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d = 0, f = !1;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(g, v) {
            if (!g.success) {
              v.enqueue({ type: "error", error: g.error });
              return;
            }
            d++;
            const _ = g.value;
            d === 1 && v.enqueue({
              type: "response-metadata",
              ...Un(_)
            }), _.usage != null && (c = {
              promptTokens: _.usage.prompt_tokens,
              completionTokens: _.usage.completion_tokens
            });
            const p = _.choices[0];
            if ((p == null ? void 0 : p.finish_reason) != null && (u = Dn(p.finish_reason)), (p == null ? void 0 : p.delta) == null)
              return;
            const y = p.delta;
            if (d <= 2) {
              const T = o[o.length - 1];
              if (T.role === "assistant" && y.content === T.content.trimEnd()) {
                y.content.length < T.content.length && (f = !0);
                return;
              }
            }
            if (y.content != null && (v.enqueue({
              type: "text-delta",
              textDelta: f ? y.content.trimStart() : y.content
            }), f = !1), y.tool_calls != null)
              for (const T of y.tool_calls)
                v.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: T.id,
                  toolName: T.function.name,
                  argsTextDelta: T.function.arguments
                }), v.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: T.id,
                  toolName: T.function.name,
                  args: T.function.arguments
                });
          },
          flush(g) {
            g.enqueue({ type: "finish", finishReason: u, usage: c });
          }
        })
      ),
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: a },
      request: { body: JSON.stringify(n) },
      warnings: r
    };
  }
}, Fc = l.object({
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
}), Gc = l.object({
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
}), Kc = class {
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
      throw new va({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await ve({
      url: `${this.config.baseURL}/embeddings`,
      headers: Ce(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Gr,
      successfulResponseHandler: at(
        Yc
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
}, Yc = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function Xc(e = {}) {
  var t;
  const r = (t = rn(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", n = () => ({
    Authorization: `Bearer ${Qr({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (i, u = {}) => new Wc(i, u, {
    provider: "mistral.chat",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = (i, u = {}) => new Kc(i, u, {
    provider: "mistral.embedding",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), o = function(i, u) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return a(i, u);
  };
  return o.languageModel = a, o.chat = a, o.embedding = s, o.textEmbedding = s, o.textEmbeddingModel = s, o;
}
Xc();
function Qc({
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
                    url: s.image instanceof URL ? s.image.toString() : `data:${(o = s.mimeType) != null ? o : "image/jpeg"};base64,${mt(s.image)}`,
                    // OpenAI specific extension: image detail
                    detail: (u = (i = s.providerMetadata) == null ? void 0 : i.openai) == null ? void 0 : u.imageDetail
                  }
                };
              case "file": {
                if (s.data instanceof URL)
                  throw new B({
                    functionality: "'File content parts with URL data' functionality not supported."
                  });
                switch (s.mimeType) {
                  case "audio/wav":
                    return {
                      type: "input_audio",
                      input_audio: { data: s.data, format: "wav" }
                    };
                  case "audio/mp3":
                  case "audio/mpeg":
                    return {
                      type: "input_audio",
                      input_audio: { data: s.data, format: "mp3" }
                    };
                  default:
                    throw new B({
                      functionality: `File content part type ${s.mimeType} in user messages`
                    });
                }
              }
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
            throw new B({
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
function Ln(e) {
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
function _r(e) {
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
var dn = l.object({
  error: l.object({
    message: l.string(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l.string().nullish(),
    param: l.any().nullish(),
    code: l.union([l.string(), l.number()]).nullish()
  })
}), Jt = tn({
  errorSchema: dn,
  errorToMessage: (e) => e.error.message
});
function br({
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
function ed({
  mode: e,
  useLegacyFunctionCalling: t = !1,
  structuredOutputs: r = !1
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
  const i = [];
  for (const c of a)
    c.type === "provider-defined" ? s.push({ type: "unsupported-tool", tool: c }) : i.push({
      type: "function",
      function: {
        name: c.name,
        description: c.description,
        parameters: c.parameters,
        strict: r === !0 ? !0 : void 0
      }
    });
  if (o == null)
    return { tools: i, tool_choice: void 0, toolWarnings: s };
  const u = o.type;
  switch (u) {
    case "auto":
    case "none":
    case "required":
      return { tools: i, tool_choice: u, toolWarnings: s };
    case "tool":
      return {
        tools: i,
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
var td = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get supportsStructuredOutputs() {
    return this.settings.structuredOutputs === !0;
  }
  get defaultObjectGenerationMode() {
    return sd(this.modelId) ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
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
    seed: d,
    providerMetadata: f
  }) {
    var g, v, _, p, y, T, P, S, x;
    const R = e.type, I = [];
    s != null && I.push({
      type: "unsupported-setting",
      setting: "topK"
    }), c != null && c.type === "json" && c.schema != null && I.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is not supported"
    });
    const U = this.settings.useLegacyFunctionCalling;
    if (U && this.settings.parallelToolCalls === !0)
      throw new B({
        functionality: "useLegacyFunctionCalling with parallelToolCalls"
      });
    if (U && this.settings.structuredOutputs === !0)
      throw new B({
        functionality: "structuredOutputs with useLegacyFunctionCalling"
      });
    const L = {
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
      // openai specific settings:
      max_completion_tokens: (v = (g = f == null ? void 0 : f.openai) == null ? void 0 : g.maxCompletionTokens) != null ? v : void 0,
      store: (p = (_ = f == null ? void 0 : f.openai) == null ? void 0 : _.store) != null ? p : void 0,
      metadata: (T = (y = f == null ? void 0 : f.openai) == null ? void 0 : y.metadata) != null ? T : void 0,
      prediction: (S = (P = f == null ? void 0 : f.openai) == null ? void 0 : P.prediction) != null ? S : void 0,
      // response format:
      response_format: (c == null ? void 0 : c.type) === "json" ? { type: "json_object" } : void 0,
      // messages:
      messages: Qc({
        prompt: t,
        useLegacyFunctionCalling: U
      })
    };
    switch (ad(this.modelId) && (L.temperature = void 0, L.top_p = void 0, L.frequency_penalty = void 0, L.presence_penalty = void 0), R) {
      case "regular": {
        const { tools: M, tool_choice: F, functions: Q, function_call: re, toolWarnings: Oe } = ed({
          mode: e,
          useLegacyFunctionCalling: U,
          structuredOutputs: this.settings.structuredOutputs
        });
        return {
          args: {
            ...L,
            tools: M,
            tool_choice: F,
            functions: Q,
            function_call: re
          },
          warnings: [...I, ...Oe]
        };
      }
      case "object-json":
        return {
          args: {
            ...L,
            response_format: this.settings.structuredOutputs === !0 && e.schema != null ? {
              type: "json_schema",
              json_schema: {
                schema: e.schema,
                strict: !0,
                name: (x = e.name) != null ? x : "response",
                description: e.description
              }
            } : { type: "json_object" }
          },
          warnings: I
        };
      case "object-tool":
        return {
          args: U ? {
            ...L,
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
            ...L,
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
          warnings: I
        };
      default: {
        const M = R;
        throw new Error(`Unsupported type: ${M}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o, i, u, c, d, f, g, v, _, p, y, T, P;
    const { args: S, warnings: x } = this.getArgs(e), { responseHeaders: R, value: I } = await ve({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ce(this.config.headers(), e.headers),
      body: S,
      failedResponseHandler: Jt,
      successfulResponseHandler: at(
        rd
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: U, ...L } = S, M = I.choices[0];
    let F;
    return (((r = (t = I.usage) == null ? void 0 : t.completion_tokens_details) == null ? void 0 : r.reasoning_tokens) != null || ((a = (n = I.usage) == null ? void 0 : n.prompt_tokens_details) == null ? void 0 : a.cached_tokens) != null) && (F = { openai: {} }, ((o = (s = I.usage) == null ? void 0 : s.completion_tokens_details) == null ? void 0 : o.reasoning_tokens) != null && (F.openai.reasoningTokens = (u = (i = I.usage) == null ? void 0 : i.completion_tokens_details) == null ? void 0 : u.reasoning_tokens), ((d = (c = I.usage) == null ? void 0 : c.prompt_tokens_details) == null ? void 0 : d.cached_tokens) != null && (F.openai.cachedPromptTokens = (g = (f = I.usage) == null ? void 0 : f.prompt_tokens_details) == null ? void 0 : g.cached_tokens)), {
      text: (v = M.message.content) != null ? v : void 0,
      toolCalls: this.settings.useLegacyFunctionCalling && M.message.function_call ? [
        {
          toolCallType: "function",
          toolCallId: Ge(),
          toolName: M.message.function_call.name,
          args: M.message.function_call.arguments
        }
      ] : (_ = M.message.tool_calls) == null ? void 0 : _.map((Q) => {
        var re;
        return {
          toolCallType: "function",
          toolCallId: (re = Q.id) != null ? re : Ge(),
          toolName: Q.function.name,
          args: Q.function.arguments
        };
      }),
      finishReason: _r(M.finish_reason),
      usage: {
        promptTokens: (y = (p = I.usage) == null ? void 0 : p.prompt_tokens) != null ? y : NaN,
        completionTokens: (P = (T = I.usage) == null ? void 0 : T.completion_tokens) != null ? P : NaN
      },
      rawCall: { rawPrompt: U, rawSettings: L },
      rawResponse: { headers: R },
      request: { body: JSON.stringify(S) },
      response: br(I),
      warnings: x,
      logprobs: Ln(M.logprobs),
      providerMetadata: F
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = {
      ...t,
      stream: !0,
      // only include stream_options when in strict compatibility mode:
      stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
    }, { responseHeaders: a, value: s } = await ve({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ce(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Jt,
      successfulResponseHandler: kr(
        nd
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t, u = [];
    let c = "unknown", d = {
      promptTokens: void 0,
      completionTokens: void 0
    }, f, g = !0;
    const { useLegacyFunctionCalling: v } = this.settings;
    let _;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(p, y) {
            var T, P, S, x, R, I, U, L, M, F, Q, re, Oe, st;
            if (!p.success) {
              c = "error", y.enqueue({ type: "error", error: p.error });
              return;
            }
            const V = p.value;
            if ("error" in V) {
              c = "error", y.enqueue({ type: "error", error: V.error });
              return;
            }
            if (g && (g = !1, y.enqueue({
              type: "response-metadata",
              ...br(V)
            })), V.usage != null) {
              d = {
                promptTokens: (T = V.usage.prompt_tokens) != null ? T : void 0,
                completionTokens: (P = V.usage.completion_tokens) != null ? P : void 0
              };
              const {
                completion_tokens_details: D,
                prompt_tokens_details: G
              } = V.usage;
              ((D == null ? void 0 : D.reasoning_tokens) != null || (G == null ? void 0 : G.cached_tokens) != null) && (_ = { openai: {} }, (D == null ? void 0 : D.reasoning_tokens) != null && (_.openai.reasoningTokens = D == null ? void 0 : D.reasoning_tokens), (G == null ? void 0 : G.cached_tokens) != null && (_.openai.cachedPromptTokens = G == null ? void 0 : G.cached_tokens));
            }
            const ee = V.choices[0];
            if ((ee == null ? void 0 : ee.finish_reason) != null && (c = _r(ee.finish_reason)), (ee == null ? void 0 : ee.delta) == null)
              return;
            const de = ee.delta;
            de.content != null && y.enqueue({
              type: "text-delta",
              textDelta: de.content
            });
            const ot = Ln(
              ee == null ? void 0 : ee.logprobs
            );
            ot != null && ot.length && (f === void 0 && (f = []), f.push(...ot));
            const Yt = v && de.function_call != null ? [
              {
                type: "function",
                id: Ge(),
                function: de.function_call,
                index: 0
              }
            ] : de.tool_calls;
            if (Yt != null)
              for (const D of Yt) {
                const G = D.index;
                if (u[G] == null) {
                  if (D.type !== "function")
                    throw new Nr({
                      data: D,
                      message: "Expected 'function' type."
                    });
                  if (D.id == null)
                    throw new Nr({
                      data: D,
                      message: "Expected 'id' to be a string."
                    });
                  if (((S = D.function) == null ? void 0 : S.name) == null)
                    throw new Nr({
                      data: D,
                      message: "Expected 'function.name' to be a string."
                    });
                  u[G] = {
                    id: D.id,
                    type: "function",
                    function: {
                      name: D.function.name,
                      arguments: (x = D.function.arguments) != null ? x : ""
                    }
                  };
                  const J = u[G];
                  ((R = J.function) == null ? void 0 : R.name) != null && ((I = J.function) == null ? void 0 : I.arguments) != null && (J.function.arguments.length > 0 && y.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: J.id,
                    toolName: J.function.name,
                    argsTextDelta: J.function.arguments
                  }), wn(J.function.arguments) && y.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (U = J.id) != null ? U : Ge(),
                    toolName: J.function.name,
                    args: J.function.arguments
                  }));
                  continue;
                }
                const te = u[G];
                ((L = D.function) == null ? void 0 : L.arguments) != null && (te.function.arguments += (F = (M = D.function) == null ? void 0 : M.arguments) != null ? F : ""), y.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: te.id,
                  toolName: te.function.name,
                  argsTextDelta: (Q = D.function.arguments) != null ? Q : ""
                }), ((re = te.function) == null ? void 0 : re.name) != null && ((Oe = te.function) == null ? void 0 : Oe.arguments) != null && wn(te.function.arguments) && y.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (st = te.id) != null ? st : Ge(),
                  toolName: te.function.name,
                  args: te.function.arguments
                });
              }
          },
          flush(p) {
            var y, T;
            p.enqueue({
              type: "finish",
              finishReason: c,
              logprobs: f,
              usage: {
                promptTokens: (y = d.promptTokens) != null ? y : NaN,
                completionTokens: (T = d.completionTokens) != null ? T : NaN
              },
              ..._ != null ? { providerMetadata: _ } : {}
            });
          }
        })
      ),
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: a },
      request: { body: JSON.stringify(n) },
      warnings: r
    };
  }
}, Ns = l.object({
  prompt_tokens: l.number().nullish(),
  completion_tokens: l.number().nullish(),
  prompt_tokens_details: l.object({
    cached_tokens: l.number().nullish()
  }).nullish(),
  completion_tokens_details: l.object({
    reasoning_tokens: l.number().nullish()
  }).nullish()
}).nullish(), rd = l.object({
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
  usage: Ns
}), nd = l.union([
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
    usage: Ns
  }),
  dn
]);
function ad(e) {
  return e.startsWith("o1-");
}
function sd(e) {
  return e.startsWith("gpt-4o-audio-preview");
}
function od({
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
        throw new $e({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const i = o.map((u) => {
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
              throw new B({
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
        throw new B({
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
function qn(e) {
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
var id = class {
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
    seed: f
  }) {
    var g;
    const v = e.type, _ = [];
    o != null && _.push({
      type: "unsupported-setting",
      setting: "topK"
    }), d != null && d.type !== "text" && _.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: p, stopSequences: y } = od({ prompt: r, inputFormat: t }), T = [...y ?? [], ...c ?? []], P = {
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
      seed: f,
      // prompt:
      prompt: p,
      // stop sequences:
      stop: T.length > 0 ? T : void 0
    };
    switch (v) {
      case "regular": {
        if ((g = e.tools) != null && g.length)
          throw new B({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new B({
            functionality: "toolChoice"
          });
        return { args: P, warnings: _ };
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
        const S = v;
        throw new Error(`Unsupported type: ${S}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await ve({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ce(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Jt,
      successfulResponseHandler: at(
        ld
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
      finishReason: _r(i.finish_reason),
      logprobs: qn(i.logprobs),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      response: br(a),
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
    }, { responseHeaders: a, value: s } = await ve({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ce(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Jt,
      successfulResponseHandler: kr(
        ud
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: o, ...i } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d, f = !0;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(g, v) {
            if (!g.success) {
              u = "error", v.enqueue({ type: "error", error: g.error });
              return;
            }
            const _ = g.value;
            if ("error" in _) {
              u = "error", v.enqueue({ type: "error", error: _.error });
              return;
            }
            f && (f = !1, v.enqueue({
              type: "response-metadata",
              ...br(_)
            })), _.usage != null && (c = {
              promptTokens: _.usage.prompt_tokens,
              completionTokens: _.usage.completion_tokens
            });
            const p = _.choices[0];
            (p == null ? void 0 : p.finish_reason) != null && (u = _r(p.finish_reason)), (p == null ? void 0 : p.text) != null && v.enqueue({
              type: "text-delta",
              textDelta: p.text
            });
            const y = qn(
              p == null ? void 0 : p.logprobs
            );
            y != null && y.length && (d === void 0 && (d = []), d.push(...y));
          },
          flush(g) {
            g.enqueue({
              type: "finish",
              finishReason: u,
              logprobs: d,
              usage: c
            });
          }
        })
      ),
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: a },
      warnings: r,
      request: { body: JSON.stringify(n) }
    };
  }
}, ld = l.object({
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
}), ud = l.union([
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
  dn
]), cd = class {
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
      throw new va({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await ve({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Ce(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: Jt,
      successfulResponseHandler: at(
        dd
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
}, dd = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function pd(e = {}) {
  var t, r, n;
  const a = (t = rn(e.baseURL)) != null ? t : "https://api.openai.com/v1", s = (r = e.compatibility) != null ? r : "compatible", o = (n = e.name) != null ? n : "openai", i = () => ({
    Authorization: `Bearer ${Qr({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), u = (v, _ = {}) => new td(v, _, {
    provider: `${o}.chat`,
    url: ({ path: p }) => `${a}${p}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), c = (v, _ = {}) => new id(v, _, {
    provider: `${o}.completion`,
    url: ({ path: p }) => `${a}${p}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), d = (v, _ = {}) => new cd(v, _, {
    provider: `${o}.embedding`,
    url: ({ path: p }) => `${a}${p}`,
    headers: i,
    fetch: e.fetch
  }), f = (v, _) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return v === "gpt-3.5-turbo-instruct" ? c(
      v,
      _
    ) : u(v, _);
  }, g = function(v, _) {
    return f(v, _);
  };
  return g.languageModel = f, g.chat = u, g.completion = c, g.embedding = d, g.textEmbedding = d, g.textEmbeddingModel = d, g;
}
pd({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  Vc as createAnthropic,
  Xc as createMistral,
  pd as createOpenAI,
  md as streamText
};
