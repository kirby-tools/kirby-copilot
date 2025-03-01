var La = "vercel.ai.error", mi = Symbol.for(La), Fa, fi = class Ba extends Error {
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
    super(r), this[Fa] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Ba.hasMarker(t, La);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
Fa = mi;
var O = fi, Va = "AI_APICallError", Ja = `vercel.ai.error.${Va}`, hi = Symbol.for(Ja), za, Ge = class extends O {
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
    super({ name: Va, message: e, cause: o }), this[za] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return O.hasMarker(e, Ja);
  }
};
za = hi;
var Ga = "AI_EmptyResponseBodyError", Ha = `vercel.ai.error.${Ga}`, gi = Symbol.for(Ha), Wa, yi = class extends O {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Ga, message: e }), this[Wa] = !0;
  }
  static isInstance(e) {
    return O.hasMarker(e, Ha);
  }
};
Wa = gi;
function Cr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Ka = "AI_InvalidArgumentError", Ya = `vercel.ai.error.${Ka}`, vi = Symbol.for(Ya), Xa, Un = class extends O {
  constructor({
    message: t,
    cause: r,
    argument: n
  }) {
    super({ name: Ka, message: t, cause: r }), this[Xa] = !0, this.argument = n;
  }
  static isInstance(t) {
    return O.hasMarker(t, Ya);
  }
};
Xa = vi;
var Qa = "AI_InvalidPromptError", es = `vercel.ai.error.${Qa}`, _i = Symbol.for(es), ts, yt = class extends O {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: Qa, message: `Invalid prompt: ${t}`, cause: r }), this[ts] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, es);
  }
};
ts = _i;
var rs = "AI_InvalidResponseDataError", ns = `vercel.ai.error.${rs}`, bi = Symbol.for(ns), as, mn = class extends O {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: rs, message: t }), this[as] = !0, this.data = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, ns);
  }
};
as = bi;
var ss = "AI_JSONParseError", os = `vercel.ai.error.${ss}`, wi = Symbol.for(os), is, or = class extends O {
  constructor({ text: e, cause: t }) {
    super({
      name: ss,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Cr(t)}`,
      cause: t
    }), this[is] = !0, this.text = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, os);
  }
};
is = wi;
var ls = "AI_LoadAPIKeyError", us = `vercel.ai.error.${ls}`, xi = Symbol.for(us), cs, Mr = class extends O {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: ls, message: e }), this[cs] = !0;
  }
  static isInstance(e) {
    return O.hasMarker(e, us);
  }
};
cs = xi;
var ds = "AI_NoContentGeneratedError", ps = `vercel.ai.error.${ds}`, ki = Symbol.for(ps), ms, cf = class extends O {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: ds, message: e }), this[ms] = !0;
  }
  static isInstance(e) {
    return O.hasMarker(e, ps);
  }
};
ms = ki;
var fs = "AI_NoSuchModelError", hs = `vercel.ai.error.${fs}`, Ti = Symbol.for(hs), gs, rt = class extends O {
  constructor({
    errorName: e = fs,
    modelId: t,
    modelType: r,
    message: n = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: n }), this[gs] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return O.hasMarker(e, hs);
  }
};
gs = Ti;
var ys = "AI_TooManyEmbeddingValuesForCallError", vs = `vercel.ai.error.${ys}`, Si = Symbol.for(vs), _s, bs = class extends O {
  constructor(e) {
    super({
      name: ys,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[_s] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return O.hasMarker(e, vs);
  }
};
_s = Si;
var ws = "AI_TypeValidationError", xs = `vercel.ai.error.${ws}`, Ii = Symbol.for(xs), ks, Ei = class Sn extends O {
  constructor({ value: t, cause: r }) {
    super({
      name: ws,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Cr(r)}`,
      cause: r
    }), this[ks] = !0, this.value = t;
  }
  static isInstance(t) {
    return O.hasMarker(t, xs);
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
    return Sn.isInstance(r) && r.value === t ? r : new Sn({ value: t, cause: r });
  }
};
ks = Ii;
var nt = Ei, Ts = "AI_UnsupportedFunctionalityError", Ss = `vercel.ai.error.${Ts}`, Ci = Symbol.for(Ss), Is, re = class extends O {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: Ts, message: t }), this[Is] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, Ss);
  }
};
Is = Ci;
function Ur(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? !0 : Array.isArray(e) ? e.every(Ur) : typeof e == "object" ? Object.entries(e).every(
    ([t, r]) => typeof t == "string" && Ur(r)
  ) : !1;
}
function pa(e) {
  return Array.isArray(e) && e.every(Ur);
}
function In(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, r]) => typeof t == "string" && Ur(r)
  );
}
let Ri = (e, t = 21) => (r = t) => {
  let n = "", a = r | 0;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ht = { exports: {} };
const Ni = typeof Buffer < "u", ma = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, fa = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Es(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), Ni && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (ma.test(e) === !1 && fa.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (ma.test(e) === !1)
      return n;
  } else if (fa.test(e) === !1)
    return n;
  return Cs(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function Cs(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
function Zn(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Es(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function ji(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Es(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
Ht.exports = Zn;
Ht.exports.default = Zn;
Ht.exports.parse = Zn;
Ht.exports.safeParse = ji;
Ht.exports.scan = Cs;
var Oi = Ht.exports;
const Ln = /* @__PURE__ */ Ai(Oi);
var Pi = Object.defineProperty, Mi = (e, t, r) => t in e ? Pi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $r = (e, t, r) => Mi(e, typeof t != "symbol" ? t + "" : t, r);
class ha extends Error {
  constructor(t, r) {
    super(t), $r(this, "type"), $r(this, "field"), $r(this, "value"), $r(this, "line"), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function fn(e) {
}
function $i(e) {
  const { onEvent: t = fn, onError: r = fn, onRetry: n = fn, onComment: a } = e;
  let s = "", o = !0, i, u = "", c = "";
  function d(p) {
    const h = o ? p.replace(/^\xEF\xBB\xBF/, "") : p, [v, b] = Di(`${s}${h}`);
    for (const w of v)
      m(w);
    s = b, o = !1;
  }
  function m(p) {
    if (p === "") {
      y();
      return;
    }
    if (p.startsWith(":")) {
      a && a(p.slice(p.startsWith(": ") ? 2 : 1));
      return;
    }
    const h = p.indexOf(":");
    if (h !== -1) {
      const v = p.slice(0, h), b = p[h + 1] === " " ? 2 : 1, w = p.slice(h + b);
      g(v, w, p);
      return;
    }
    g(p, "", p);
  }
  function g(p, h, v) {
    switch (p) {
      case "event":
        c = h;
        break;
      case "data":
        u = `${u}${h}
`;
        break;
      case "id":
        i = h.includes("\0") ? void 0 : h;
        break;
      case "retry":
        /^\d+$/.test(h) ? n(parseInt(h, 10)) : r(
          new ha(`Invalid \`retry\` value: "${h}"`, {
            type: "invalid-retry",
            value: h,
            line: v
          })
        );
        break;
      default:
        r(
          new ha(
            `Unknown field "${p.length > 20 ? `${p.slice(0, 20)}…` : p}"`,
            { type: "unknown-field", field: p, value: h, line: v }
          )
        );
        break;
    }
  }
  function y() {
    u.length > 0 && t({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function f(p = {}) {
    s && p.consume && m(s), i = void 0, u = "", c = "", s = "";
  }
  return { feed: d, reset: f };
}
function Di(e) {
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
class qi extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let a;
    super({
      start(s) {
        a = $i({
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
function He(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function Ui(e) {
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
async function Fn(e) {
  return e == null ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
function rn(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Et = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const a = Ri(r, t);
  if (e == null)
    return a;
  if (r.includes(n))
    throw new Un({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (s) => `${e}${n}${a(s)}`;
}, Mt = Et();
function Zi(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function Li(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
function qr(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Bn({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new Mr({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new Mr({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new Mr({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new Mr({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var Zr = Symbol.for("vercel.ai.validator");
function Fi(e) {
  return { [Zr]: !0, validate: e };
}
function Bi(e) {
  return typeof e == "object" && e !== null && Zr in e && e[Zr] === !0 && "validate" in e;
}
function Vi(e) {
  return Bi(e) ? e : Ji(e);
}
function Ji(e) {
  return Fi((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function zi({
  value: e,
  schema: t
}) {
  const r = ot({ value: e, schema: t });
  if (!r.success)
    throw nt.wrap({ value: e, cause: r.error });
  return r.value;
}
function ot({
  value: e,
  schema: t
}) {
  const r = Vi(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: nt.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: nt.wrap({ value: e, cause: n })
    };
  }
}
function Gi({
  text: e,
  schema: t
}) {
  try {
    const r = Ln.parse(e);
    return t == null ? r : zi({ value: r, schema: t });
  } catch (r) {
    throw or.isInstance(r) || nt.isInstance(r) ? r : new or({ text: e, cause: r });
  }
}
function wt({
  text: e,
  schema: t
}) {
  try {
    const r = Ln.parse(e);
    if (t == null)
      return { success: !0, value: r, rawValue: r };
    const n = ot({ value: r, schema: t });
    return n.success ? { ...n, rawValue: r } : n;
  } catch (r) {
    return {
      success: !1,
      error: or.isInstance(r) ? r : new or({ text: e, cause: r })
    };
  }
}
function ga(e) {
  try {
    return Ln.parse(e), !0;
  } catch {
    return !1;
  }
}
var Hi = () => globalThis.fetch, Fe = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => Wi({
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
}), Wi = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = Hi()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: Li(t),
      body: r.content,
      signal: s
    }), u = rn(i);
    if (!i.ok) {
      let c;
      try {
        c = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw qr(d) || Ge.isInstance(d) ? d : new Ge({
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
      throw c instanceof Error && (qr(c) || Ge.isInstance(c)) ? c : new Ge({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (qr(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const u = i.cause;
      if (u != null)
        throw new Ge({
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
};
async function Ki(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var Vn = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), i = rn(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new Ge({
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
    const u = Gi({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new Ge({
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
      value: new Ge({
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
}, nn = (e) => async ({ response: t }) => {
  const r = rn(t);
  if (t.body == null)
    throw new yi({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new qi()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            wt({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, Ct = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = wt({
    text: a,
    schema: e
  }), o = rn(t);
  if (!s.success)
    throw new Ge({
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
}, { btoa: Yi, atob: Xi } = globalThis;
function Rs(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = Xi(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function Ut(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return Yi(t);
}
function Jn(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
const Qi = Symbol("Let zodToJsonSchema decide on which parser to use"), ya = {
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
}, el = (e) => typeof e == "string" ? {
  ...ya,
  name: e
} : {
  ...ya,
  ...e
}, tl = (e) => {
  const t = el(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function As(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function X(e, t, r, n, a) {
  e[t] = r, As(e, t, n, a);
}
var J;
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
})(J || (J = {}));
var En;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(En || (En = {}));
const R = J.arrayToEnum([
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
]), Qe = (e) => {
  switch (typeof e) {
    case "undefined":
      return R.undefined;
    case "string":
      return R.string;
    case "number":
      return isNaN(e) ? R.nan : R.number;
    case "boolean":
      return R.boolean;
    case "function":
      return R.function;
    case "bigint":
      return R.bigint;
    case "symbol":
      return R.symbol;
    case "object":
      return Array.isArray(e) ? R.array : e === null ? R.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? R.promise : typeof Map < "u" && e instanceof Map ? R.map : typeof Set < "u" && e instanceof Set ? R.set : typeof Date < "u" && e instanceof Date ? R.date : R.object;
    default:
      return R.unknown;
  }
}, x = J.arrayToEnum([
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
]), rl = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Pe extends Error {
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
    if (!(t instanceof Pe))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, J.jsonStringifyReplacer, 2);
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
Pe.create = (e) => new Pe(e);
const Zt = (e, t) => {
  let r;
  switch (e.code) {
    case x.invalid_type:
      e.received === R.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case x.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, J.jsonStringifyReplacer)}`;
      break;
    case x.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${J.joinValues(e.keys, ", ")}`;
      break;
    case x.invalid_union:
      r = "Invalid input";
      break;
    case x.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${J.joinValues(e.options)}`;
      break;
    case x.invalid_enum_value:
      r = `Invalid enum value. Expected ${J.joinValues(e.options)}, received '${e.received}'`;
      break;
    case x.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case x.invalid_return_type:
      r = "Invalid function return type";
      break;
    case x.invalid_date:
      r = "Invalid date";
      break;
    case x.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : J.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case x.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case x.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case x.custom:
      r = "Invalid input";
      break;
    case x.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case x.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case x.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, J.assertNever(e);
  }
  return { message: r };
};
let Ns = Zt;
function nl(e) {
  Ns = e;
}
function Lr() {
  return Ns;
}
const Fr = (e) => {
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
}, al = [];
function I(e, t) {
  const r = Lr(), n = Fr({
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
      r === Zt ? void 0 : Zt
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(n);
}
class Se {
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
        return P;
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
    return Se.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: s, value: o } = a;
      if (s.status === "aborted" || o.status === "aborted")
        return P;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const P = Object.freeze({
  status: "aborted"
}), Dt = (e) => ({ status: "dirty", value: e }), Ae = (e) => ({ status: "valid", value: e }), Cn = (e) => e.status === "aborted", Rn = (e) => e.status === "dirty", xt = (e) => e.status === "valid", ir = (e) => typeof Promise < "u" && e instanceof Promise;
function Br(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function js(e, t, r, n, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var N;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(N || (N = {}));
var nr, ar;
class We {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const va = (e, t) => {
  if (xt(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Pe(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function D(e) {
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
class Z {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Qe(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Qe(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Se(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Qe(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (ir(r))
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
      parsedType: Qe(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return va(a, s);
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
      parsedType: Qe(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: a });
        return xt(s) ? {
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
    return this._parseAsync({ data: t, path: [], parent: a }).then((s) => xt(s) ? {
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
      parsedType: Qe(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (ir(a) ? a : Promise.resolve(a));
    return va(n, s);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, s) => {
      const o = t(a), i = () => s.addIssue({
        code: x.custom,
        ...n(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new Be({
      schema: this,
      typeName: S.ZodEffects,
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
    return Le.create(this, this._def);
  }
  nullable() {
    return ct.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ze.create(this);
  }
  promise() {
    return Ft.create(this, this._def);
  }
  or(t) {
    return dr.create([this, t], this._def);
  }
  and(t) {
    return pr.create(this, t, this._def);
  }
  transform(t) {
    return new Be({
      ...D(this._def),
      schema: this,
      typeName: S.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new yr({
      ...D(this._def),
      innerType: this,
      defaultValue: r,
      typeName: S.ZodDefault
    });
  }
  brand() {
    return new zn({
      typeName: S.ZodBranded,
      type: this,
      ...D(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new vr({
      ...D(this._def),
      innerType: this,
      catchValue: r,
      typeName: S.ZodCatch
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
    return Rr.create(this, t);
  }
  readonly() {
    return _r.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const sl = /^c[^\s-]{8,}$/i, ol = /^[0-9a-z]+$/, il = /^[0-9A-HJKMNP-TV-Z]{26}$/i, ll = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ul = /^[a-z0-9_-]{21}$/i, cl = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, dl = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, pl = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ml = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let hn;
const fl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, hl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, gl = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, yl = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, vl = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, _l = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Os = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", bl = new RegExp(`^${Os}$`);
function Ps(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function wl(e) {
  return new RegExp(`^${Ps(e)}$`);
}
function Ms(e) {
  let t = `${Os}T${Ps(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function xl(e, t) {
  return !!((t === "v4" || !t) && fl.test(e) || (t === "v6" || !t) && gl.test(e));
}
function kl(e, t) {
  if (!cl.test(e))
    return !1;
  try {
    const [r] = e.split("."), n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), a = JSON.parse(atob(n));
    return !(typeof a != "object" || a === null || !a.typ || !a.alg || t && a.alg !== t);
  } catch {
    return !1;
  }
}
function Tl(e, t) {
  return !!((t === "v4" || !t) && hl.test(e) || (t === "v6" || !t) && yl.test(e));
}
class Ue extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== R.string) {
      const s = this._getOrReturnCtx(t);
      return I(s, {
        code: x.invalid_type,
        expected: R.string,
        received: s.parsedType
      }), P;
    }
    const n = new Se();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), I(a, {
          code: x.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), I(a, {
          code: x.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (a = this._getOrReturnCtx(t, a), o ? I(a, {
          code: x.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && I(a, {
          code: x.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        pl.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
          validation: "email",
          code: x.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        hn || (hn = new RegExp(ml, "u")), hn.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
          validation: "emoji",
          code: x.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        ll.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
          validation: "uuid",
          code: x.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        ul.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
          validation: "nanoid",
          code: x.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        sl.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
          validation: "cuid",
          code: x.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        ol.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
          validation: "cuid2",
          code: x.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        il.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
          validation: "ulid",
          code: x.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), I(a, {
            validation: "url",
            code: x.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        validation: "regex",
        code: x.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Ms(s).test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? bl.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? wl(s).test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? dl.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        validation: "duration",
        code: x.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? xl(t.data, s.version) || (a = this._getOrReturnCtx(t, a), I(a, {
        validation: "ip",
        code: x.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? kl(t.data, s.alg) || (a = this._getOrReturnCtx(t, a), I(a, {
        validation: "jwt",
        code: x.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? Tl(t.data, s.version) || (a = this._getOrReturnCtx(t, a), I(a, {
        validation: "cidr",
        code: x.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? vl.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        validation: "base64",
        code: x.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? _l.test(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        validation: "base64url",
        code: x.invalid_string,
        message: s.message
      }), n.dirty()) : J.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: x.invalid_string,
      ...N.errToObj(n)
    });
  }
  _addCheck(t) {
    return new Ue({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...N.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...N.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...N.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...N.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...N.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...N.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...N.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...N.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...N.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...N.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...N.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...N.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...N.errToObj(t) });
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
      ...N.errToObj(t == null ? void 0 : t.message)
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
      ...N.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...N.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...N.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...N.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...N.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...N.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...N.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...N.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...N.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, N.errToObj(t));
  }
  trim() {
    return new Ue({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ue({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ue({
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
Ue.create = (e) => {
  var t;
  return new Ue({
    checks: [],
    typeName: S.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...D(e)
  });
};
function Sl(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class it extends Z {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== R.number) {
      const s = this._getOrReturnCtx(t);
      return I(s, {
        code: x.invalid_type,
        expected: R.number,
        received: s.parsedType
      }), P;
    }
    let n;
    const a = new Se();
    for (const s of this._def.checks)
      s.kind === "int" ? J.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? Sl(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.not_finite,
        message: s.message
      }), a.dirty()) : J.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, N.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, N.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, N.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, N.toString(r));
  }
  setLimit(t, r, n, a) {
    return new it({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: N.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new it({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: N.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: N.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: N.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: N.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: N.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: N.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: N.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: N.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: N.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && J.isInteger(t.value));
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
it.create = (e) => new it({
  checks: [],
  typeName: S.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...D(e)
});
class lt extends Z {
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
    if (this._getType(t) !== R.bigint)
      return this._getInvalidInput(t);
    let n;
    const a = new Se();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : J.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return I(r, {
      code: x.invalid_type,
      expected: R.bigint,
      received: r.parsedType
    }), P;
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, N.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, N.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, N.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, N.toString(r));
  }
  setLimit(t, r, n, a) {
    return new lt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: N.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new lt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: N.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: N.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: N.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: N.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: N.toString(r)
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
lt.create = (e) => {
  var t;
  return new lt({
    checks: [],
    typeName: S.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...D(e)
  });
};
class lr extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== R.boolean) {
      const n = this._getOrReturnCtx(t);
      return I(n, {
        code: x.invalid_type,
        expected: R.boolean,
        received: n.parsedType
      }), P;
    }
    return Ae(t.data);
  }
}
lr.create = (e) => new lr({
  typeName: S.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...D(e)
});
class kt extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== R.date) {
      const s = this._getOrReturnCtx(t);
      return I(s, {
        code: x.invalid_type,
        expected: R.date,
        received: s.parsedType
      }), P;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return I(s, {
        code: x.invalid_date
      }), P;
    }
    const n = new Se();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : J.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new kt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: N.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: N.toString(r)
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
kt.create = (e) => new kt({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: S.ZodDate,
  ...D(e)
});
class Vr extends Z {
  _parse(t) {
    if (this._getType(t) !== R.symbol) {
      const n = this._getOrReturnCtx(t);
      return I(n, {
        code: x.invalid_type,
        expected: R.symbol,
        received: n.parsedType
      }), P;
    }
    return Ae(t.data);
  }
}
Vr.create = (e) => new Vr({
  typeName: S.ZodSymbol,
  ...D(e)
});
class ur extends Z {
  _parse(t) {
    if (this._getType(t) !== R.undefined) {
      const n = this._getOrReturnCtx(t);
      return I(n, {
        code: x.invalid_type,
        expected: R.undefined,
        received: n.parsedType
      }), P;
    }
    return Ae(t.data);
  }
}
ur.create = (e) => new ur({
  typeName: S.ZodUndefined,
  ...D(e)
});
class cr extends Z {
  _parse(t) {
    if (this._getType(t) !== R.null) {
      const n = this._getOrReturnCtx(t);
      return I(n, {
        code: x.invalid_type,
        expected: R.null,
        received: n.parsedType
      }), P;
    }
    return Ae(t.data);
  }
}
cr.create = (e) => new cr({
  typeName: S.ZodNull,
  ...D(e)
});
class Lt extends Z {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ae(t.data);
  }
}
Lt.create = (e) => new Lt({
  typeName: S.ZodAny,
  ...D(e)
});
class _t extends Z {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ae(t.data);
  }
}
_t.create = (e) => new _t({
  typeName: S.ZodUnknown,
  ...D(e)
});
class at extends Z {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return I(r, {
      code: x.invalid_type,
      expected: R.never,
      received: r.parsedType
    }), P;
  }
}
at.create = (e) => new at({
  typeName: S.ZodNever,
  ...D(e)
});
class Jr extends Z {
  _parse(t) {
    if (this._getType(t) !== R.undefined) {
      const n = this._getOrReturnCtx(t);
      return I(n, {
        code: x.invalid_type,
        expected: R.void,
        received: n.parsedType
      }), P;
    }
    return Ae(t.data);
  }
}
Jr.create = (e) => new Jr({
  typeName: S.ZodVoid,
  ...D(e)
});
class Ze extends Z {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== R.array)
      return I(r, {
        code: x.invalid_type,
        expected: R.array,
        received: r.parsedType
      }), P;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, i = r.data.length < a.exactLength.value;
      (o || i) && (I(r, {
        code: o ? x.too_big : x.too_small,
        minimum: i ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (I(r, {
      code: x.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (I(r, {
      code: x.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => a.type._parseAsync(new We(r, o, r.path, i)))).then((o) => Se.mergeArray(n, o));
    const s = [...r.data].map((o, i) => a.type._parseSync(new We(r, o, r.path, i)));
    return Se.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new Ze({
      ...this._def,
      minLength: { value: t, message: N.toString(r) }
    });
  }
  max(t, r) {
    return new Ze({
      ...this._def,
      maxLength: { value: t, message: N.toString(r) }
    });
  }
  length(t, r) {
    return new Ze({
      ...this._def,
      exactLength: { value: t, message: N.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ze.create = (e, t) => new Ze({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: S.ZodArray,
  ...D(t)
});
function $t(e) {
  if (e instanceof le) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = Le.create($t(n));
    }
    return new le({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Ze ? new Ze({
    ...e._def,
    type: $t(e.element)
  }) : e instanceof Le ? Le.create($t(e.unwrap())) : e instanceof ct ? ct.create($t(e.unwrap())) : e instanceof Ke ? Ke.create(e.items.map((t) => $t(t))) : e;
}
class le extends Z {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = J.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== R.object) {
      const c = this._getOrReturnCtx(t);
      return I(c, {
        code: x.invalid_type,
        expected: R.object,
        received: c.parsedType
      }), P;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof at && this._def.unknownKeys === "strip"))
      for (const c in a.data)
        o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], m = a.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new We(a, m, a.path, c)),
        alwaysSet: c in a.data
      });
    }
    if (this._def.catchall instanceof at) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of i)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: a.data[d] }
          });
      else if (c === "strict")
        i.length > 0 && (I(a, {
          code: x.unrecognized_keys,
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
            new We(a, m, a.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of u) {
        const m = await d.key, g = await d.value;
        c.push({
          key: m,
          value: g,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => Se.mergeObjectSync(n, c)) : Se.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return N.errToObj, new le({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, s, o, i;
          const u = (o = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = N.errToObj(t).message) !== null && i !== void 0 ? i : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new le({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new le({
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
    return new le({
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
    return new le({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: S.ZodObject
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
    return new le({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return J.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new le({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return J.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new le({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return $t(this);
  }
  partial(t) {
    const r = {};
    return J.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new le({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return J.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof Le; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new le({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return $s(J.objectKeys(this.shape));
  }
}
le.create = (e, t) => new le({
  shape: () => e,
  unknownKeys: "strip",
  catchall: at.create(),
  typeName: S.ZodObject,
  ...D(t)
});
le.strictCreate = (e, t) => new le({
  shape: () => e,
  unknownKeys: "strict",
  catchall: at.create(),
  typeName: S.ZodObject,
  ...D(t)
});
le.lazycreate = (e, t) => new le({
  shape: e,
  unknownKeys: "strip",
  catchall: at.create(),
  typeName: S.ZodObject,
  ...D(t)
});
class dr extends Z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new Pe(i.ctx.common.issues));
      return I(r, {
        code: x.invalid_union,
        unionErrors: o
      }), P;
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
      const i = o.map((u) => new Pe(u));
      return I(r, {
        code: x.invalid_union,
        unionErrors: i
      }), P;
    }
  }
  get options() {
    return this._def.options;
  }
}
dr.create = (e, t) => new dr({
  options: e,
  typeName: S.ZodUnion,
  ...D(t)
});
const Xe = (e) => e instanceof fr ? Xe(e.schema) : e instanceof Be ? Xe(e.innerType()) : e instanceof hr ? [e.value] : e instanceof ut ? e.options : e instanceof gr ? J.objectValues(e.enum) : e instanceof yr ? Xe(e._def.innerType) : e instanceof ur ? [void 0] : e instanceof cr ? [null] : e instanceof Le ? [void 0, ...Xe(e.unwrap())] : e instanceof ct ? [null, ...Xe(e.unwrap())] : e instanceof zn || e instanceof _r ? Xe(e.unwrap()) : e instanceof vr ? Xe(e._def.innerType) : [];
class an extends Z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== R.object)
      return I(r, {
        code: x.invalid_type,
        expected: R.object,
        received: r.parsedType
      }), P;
    const n = this.discriminator, a = r.data[n], s = this.optionsMap.get(a);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (I(r, {
      code: x.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), P);
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
      const o = Xe(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (a.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        a.set(i, s);
      }
    }
    return new an({
      typeName: S.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...D(n)
    });
  }
}
function An(e, t) {
  const r = Qe(e), n = Qe(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === R.object && n === R.object) {
    const a = J.objectKeys(t), s = J.objectKeys(e).filter((i) => a.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const u = An(e[i], t[i]);
      if (!u.valid)
        return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === R.array && n === R.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], u = An(o, i);
      if (!u.valid)
        return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else return r === R.date && n === R.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class pr extends Z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (Cn(s) || Cn(o))
        return P;
      const i = An(s.value, o.value);
      return i.valid ? ((Rn(s) || Rn(o)) && r.dirty(), { status: r.value, value: i.data }) : (I(n, {
        code: x.invalid_intersection_types
      }), P);
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
pr.create = (e, t, r) => new pr({
  left: e,
  right: t,
  typeName: S.ZodIntersection,
  ...D(r)
});
class Ke extends Z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== R.array)
      return I(n, {
        code: x.invalid_type,
        expected: R.array,
        received: n.parsedType
      }), P;
    if (n.data.length < this._def.items.length)
      return I(n, {
        code: x.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), P;
    !this._def.rest && n.data.length > this._def.items.length && (I(n, {
      code: x.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, i) => {
      const u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new We(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => Se.mergeArray(r, o)) : Se.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ke({
      ...this._def,
      rest: t
    });
  }
}
Ke.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ke({
    items: e,
    typeName: S.ZodTuple,
    rest: null,
    ...D(t)
  });
};
class mr extends Z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== R.object)
      return I(n, {
        code: x.invalid_type,
        expected: R.object,
        received: n.parsedType
      }), P;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      a.push({
        key: s._parse(new We(n, i, n.path, i)),
        value: o._parse(new We(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? Se.mergeObjectAsync(r, a) : Se.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof Z ? new mr({
      keyType: t,
      valueType: r,
      typeName: S.ZodRecord,
      ...D(n)
    }) : new mr({
      keyType: Ue.create(),
      valueType: t,
      typeName: S.ZodRecord,
      ...D(r)
    });
  }
}
class zr extends Z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== R.map)
      return I(n, {
        code: x.invalid_type,
        expected: R.map,
        received: n.parsedType
      }), P;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([i, u], c) => ({
      key: a._parse(new We(n, i, n.path, [c, "key"])),
      value: s._parse(new We(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key, d = await u.value;
          if (c.status === "aborted" || d.status === "aborted")
            return P;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(c.value, d.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const u of o) {
        const c = u.key, d = u.value;
        if (c.status === "aborted" || d.status === "aborted")
          return P;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(), i.set(c.value, d.value);
      }
      return { status: r.value, value: i };
    }
  }
}
zr.create = (e, t, r) => new zr({
  valueType: t,
  keyType: e,
  typeName: S.ZodMap,
  ...D(r)
});
class Tt extends Z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== R.set)
      return I(n, {
        code: x.invalid_type,
        expected: R.set,
        received: n.parsedType
      }), P;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (I(n, {
      code: x.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (I(n, {
      code: x.too_big,
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
          return P;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const i = [...n.data.values()].map((u, c) => s._parse(new We(n, u, n.path, c)));
    return n.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(t, r) {
    return new Tt({
      ...this._def,
      minSize: { value: t, message: N.toString(r) }
    });
  }
  max(t, r) {
    return new Tt({
      ...this._def,
      maxSize: { value: t, message: N.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Tt.create = (e, t) => new Tt({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: S.ZodSet,
  ...D(t)
});
class qt extends Z {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== R.function)
      return I(r, {
        code: x.invalid_type,
        expected: R.function,
        received: r.parsedType
      }), P;
    function n(i, u) {
      return Fr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Lr(),
          Zt
        ].filter((c) => !!c),
        issueData: {
          code: x.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function a(i, u) {
      return Fr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Lr(),
          Zt
        ].filter((c) => !!c),
        issueData: {
          code: x.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof Ft) {
      const i = this;
      return Ae(async function(...u) {
        const c = new Pe([]), d = await i._def.args.parseAsync(u, s).catch((y) => {
          throw c.addIssue(n(u, y)), c;
        }), m = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(m, s).catch((y) => {
          throw c.addIssue(a(m, y)), c;
        });
      });
    } else {
      const i = this;
      return Ae(function(...u) {
        const c = i._def.args.safeParse(u, s);
        if (!c.success)
          throw new Pe([n(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), m = i._def.returns.safeParse(d, s);
        if (!m.success)
          throw new Pe([a(d, m.error)]);
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
    return new qt({
      ...this._def,
      args: Ke.create(t).rest(_t.create())
    });
  }
  returns(t) {
    return new qt({
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
    return new qt({
      args: t || Ke.create([]).rest(_t.create()),
      returns: r || _t.create(),
      typeName: S.ZodFunction,
      ...D(n)
    });
  }
}
class fr extends Z {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
fr.create = (e, t) => new fr({
  getter: e,
  typeName: S.ZodLazy,
  ...D(t)
});
class hr extends Z {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return I(r, {
        received: r.data,
        code: x.invalid_literal,
        expected: this._def.value
      }), P;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
hr.create = (e, t) => new hr({
  value: e,
  typeName: S.ZodLiteral,
  ...D(t)
});
function $s(e, t) {
  return new ut({
    values: e,
    typeName: S.ZodEnum,
    ...D(t)
  });
}
class ut extends Z {
  constructor() {
    super(...arguments), nr.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return I(r, {
        expected: J.joinValues(n),
        received: r.parsedType,
        code: x.invalid_type
      }), P;
    }
    if (Br(this, nr) || js(this, nr, new Set(this._def.values)), !Br(this, nr).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return I(r, {
        received: r.data,
        code: x.invalid_enum_value,
        options: n
      }), P;
    }
    return Ae(t.data);
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
    return ut.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return ut.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
nr = /* @__PURE__ */ new WeakMap();
ut.create = $s;
class gr extends Z {
  constructor() {
    super(...arguments), ar.set(this, void 0);
  }
  _parse(t) {
    const r = J.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== R.string && n.parsedType !== R.number) {
      const a = J.objectValues(r);
      return I(n, {
        expected: J.joinValues(a),
        received: n.parsedType,
        code: x.invalid_type
      }), P;
    }
    if (Br(this, ar) || js(this, ar, new Set(J.getValidEnumValues(this._def.values))), !Br(this, ar).has(t.data)) {
      const a = J.objectValues(r);
      return I(n, {
        received: n.data,
        code: x.invalid_enum_value,
        options: a
      }), P;
    }
    return Ae(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ar = /* @__PURE__ */ new WeakMap();
gr.create = (e, t) => new gr({
  values: e,
  typeName: S.ZodNativeEnum,
  ...D(t)
});
class Ft extends Z {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== R.promise && r.common.async === !1)
      return I(r, {
        code: x.invalid_type,
        expected: R.promise,
        received: r.parsedType
      }), P;
    const n = r.parsedType === R.promise ? r.data : Promise.resolve(r.data);
    return Ae(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Ft.create = (e, t) => new Ft({
  type: e,
  typeName: S.ZodPromise,
  ...D(t)
});
class Be extends Z {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === S.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        I(n, o), o.fatal ? r.abort() : r.dirty();
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
            return P;
          const u = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? P : u.status === "dirty" || r.value === "dirty" ? Dt(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return P;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? P : i.status === "dirty" || r.value === "dirty" ? Dt(i.value) : i;
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
        return i.status === "aborted" ? P : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? P : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!xt(o))
          return o;
        const i = a.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => xt(o) ? Promise.resolve(a.transform(o.value, s)).then((i) => ({ status: r.value, value: i })) : o);
    J.assertNever(a);
  }
}
Be.create = (e, t, r) => new Be({
  schema: e,
  typeName: S.ZodEffects,
  effect: t,
  ...D(r)
});
Be.createWithPreprocess = (e, t, r) => new Be({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: S.ZodEffects,
  ...D(r)
});
class Le extends Z {
  _parse(t) {
    return this._getType(t) === R.undefined ? Ae(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Le.create = (e, t) => new Le({
  innerType: e,
  typeName: S.ZodOptional,
  ...D(t)
});
class ct extends Z {
  _parse(t) {
    return this._getType(t) === R.null ? Ae(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ct.create = (e, t) => new ct({
  innerType: e,
  typeName: S.ZodNullable,
  ...D(t)
});
class yr extends Z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === R.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
yr.create = (e, t) => new yr({
  innerType: e,
  typeName: S.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...D(t)
});
class vr extends Z {
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
    return ir(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Pe(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Pe(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
vr.create = (e, t) => new vr({
  innerType: e,
  typeName: S.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...D(t)
});
class Gr extends Z {
  _parse(t) {
    if (this._getType(t) !== R.nan) {
      const n = this._getOrReturnCtx(t);
      return I(n, {
        code: x.invalid_type,
        expected: R.nan,
        received: n.parsedType
      }), P;
    }
    return { status: "valid", value: t.data };
  }
}
Gr.create = (e) => new Gr({
  typeName: S.ZodNaN,
  ...D(e)
});
const Il = Symbol("zod_brand");
class zn extends Z {
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
class Rr extends Z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? P : s.status === "dirty" ? (r.dirty(), Dt(s.value)) : this._def.out._parseAsync({
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
      return a.status === "aborted" ? P : a.status === "dirty" ? (r.dirty(), {
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
    return new Rr({
      in: t,
      out: r,
      typeName: S.ZodPipeline
    });
  }
}
class _r extends Z {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (xt(a) && (a.value = Object.freeze(a.value)), a);
    return ir(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_r.create = (e, t) => new _r({
  innerType: e,
  typeName: S.ZodReadonly,
  ...D(t)
});
function _a(e, t) {
  const r = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof r == "string" ? { message: r } : r;
}
function Ds(e, t = {}, r) {
  return e ? Lt.create().superRefine((n, a) => {
    var s, o;
    const i = e(n);
    if (i instanceof Promise)
      return i.then((u) => {
        var c, d;
        if (!u) {
          const m = _a(t, n), g = (d = (c = m.fatal) !== null && c !== void 0 ? c : r) !== null && d !== void 0 ? d : !0;
          a.addIssue({ code: "custom", ...m, fatal: g });
        }
      });
    if (!i) {
      const u = _a(t, n), c = (o = (s = u.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0;
      a.addIssue({ code: "custom", ...u, fatal: c });
    }
  }) : Lt.create();
}
const El = {
  object: le.lazycreate
};
var S;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(S || (S = {}));
const Cl = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Ds((r) => r instanceof e, t), qs = Ue.create, Us = it.create, Rl = Gr.create, Al = lt.create, Zs = lr.create, Nl = kt.create, jl = Vr.create, Ol = ur.create, Pl = cr.create, Ml = Lt.create, $l = _t.create, Dl = at.create, ql = Jr.create, Ul = Ze.create, Zl = le.create, Ll = le.strictCreate, Fl = dr.create, Bl = an.create, Vl = pr.create, Jl = Ke.create, zl = mr.create, Gl = zr.create, Hl = Tt.create, Wl = qt.create, Kl = fr.create, Yl = hr.create, Xl = ut.create, Ql = gr.create, eu = Ft.create, ba = Be.create, tu = Le.create, ru = ct.create, nu = Be.createWithPreprocess, au = Rr.create, su = () => qs().optional(), ou = () => Us().optional(), iu = () => Zs().optional(), lu = {
  string: (e) => Ue.create({ ...e, coerce: !0 }),
  number: (e) => it.create({ ...e, coerce: !0 }),
  boolean: (e) => lr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => lt.create({ ...e, coerce: !0 }),
  date: (e) => kt.create({ ...e, coerce: !0 })
}, uu = P;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Zt,
  setErrorMap: nl,
  getErrorMap: Lr,
  makeIssue: Fr,
  EMPTY_PATH: al,
  addIssueToContext: I,
  ParseStatus: Se,
  INVALID: P,
  DIRTY: Dt,
  OK: Ae,
  isAborted: Cn,
  isDirty: Rn,
  isValid: xt,
  isAsync: ir,
  get util() {
    return J;
  },
  get objectUtil() {
    return En;
  },
  ZodParsedType: R,
  getParsedType: Qe,
  ZodType: Z,
  datetimeRegex: Ms,
  ZodString: Ue,
  ZodNumber: it,
  ZodBigInt: lt,
  ZodBoolean: lr,
  ZodDate: kt,
  ZodSymbol: Vr,
  ZodUndefined: ur,
  ZodNull: cr,
  ZodAny: Lt,
  ZodUnknown: _t,
  ZodNever: at,
  ZodVoid: Jr,
  ZodArray: Ze,
  ZodObject: le,
  ZodUnion: dr,
  ZodDiscriminatedUnion: an,
  ZodIntersection: pr,
  ZodTuple: Ke,
  ZodRecord: mr,
  ZodMap: zr,
  ZodSet: Tt,
  ZodFunction: qt,
  ZodLazy: fr,
  ZodLiteral: hr,
  ZodEnum: ut,
  ZodNativeEnum: gr,
  ZodPromise: Ft,
  ZodEffects: Be,
  ZodTransformer: Be,
  ZodOptional: Le,
  ZodNullable: ct,
  ZodDefault: yr,
  ZodCatch: vr,
  ZodNaN: Gr,
  BRAND: Il,
  ZodBranded: zn,
  ZodPipeline: Rr,
  ZodReadonly: _r,
  custom: Ds,
  Schema: Z,
  ZodSchema: Z,
  late: El,
  get ZodFirstPartyTypeKind() {
    return S;
  },
  coerce: lu,
  any: Ml,
  array: Ul,
  bigint: Al,
  boolean: Zs,
  date: Nl,
  discriminatedUnion: Bl,
  effect: ba,
  enum: Xl,
  function: Wl,
  instanceof: Cl,
  intersection: Vl,
  lazy: Kl,
  literal: Yl,
  map: Gl,
  nan: Rl,
  nativeEnum: Ql,
  never: Dl,
  null: Pl,
  nullable: ru,
  number: Us,
  object: Zl,
  oboolean: iu,
  onumber: ou,
  optional: tu,
  ostring: su,
  pipeline: au,
  preprocess: nu,
  promise: eu,
  record: zl,
  set: Hl,
  strictObject: Ll,
  string: qs,
  symbol: jl,
  transformer: ba,
  tuple: Jl,
  undefined: Ol,
  union: Fl,
  unknown: $l,
  void: ql,
  NEVER: uu,
  ZodIssueCode: x,
  quotelessJson: rl,
  ZodError: Pe
});
function cu() {
  return {};
}
function du(e, t) {
  var n, a, s;
  const r = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((s = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : s.typeName) !== S.ZodAny && (r.items = H(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && X(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && X(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (X(r, "minItems", e.exactLength.value, e.exactLength.message, t), X(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function pu(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? X(r, "minimum", n.value, n.message, t) : X(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), X(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? X(r, "maximum", n.value, n.message, t) : X(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), X(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        X(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function mu() {
  return {
    type: "boolean"
  };
}
function Ls(e, t) {
  return H(e.type._def, t);
}
const fu = (e, t) => H(e.innerType._def, t);
function Fs(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => Fs(e, t, a))
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
      return hu(e, t);
  }
}
const hu = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        X(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
      case "max":
        X(
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
function gu(e, t) {
  return {
    ...H(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function yu(e, t) {
  return t.effectStrategy === "input" ? H(e.schema._def, t) : {};
}
function vu(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const _u = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function bu(e, t) {
  const r = [
    H(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    H(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((s) => !!s);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const a = [];
  return r.forEach((s) => {
    if (_u(s))
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
function wu(e, t) {
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
let gn;
const De = {
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
  emoji: () => (gn === void 0 && (gn = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), gn),
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
function Bs(e, t) {
  const r = {
    type: "string"
  };
  if (e.checks)
    for (const n of e.checks)
      switch (n.kind) {
        case "min":
          X(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, t);
          break;
        case "max":
          X(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              qe(r, "email", n.message, t);
              break;
            case "format:idn-email":
              qe(r, "idn-email", n.message, t);
              break;
            case "pattern:zod":
              Re(r, De.email, n.message, t);
              break;
          }
          break;
        case "url":
          qe(r, "uri", n.message, t);
          break;
        case "uuid":
          qe(r, "uuid", n.message, t);
          break;
        case "regex":
          Re(r, n.regex, n.message, t);
          break;
        case "cuid":
          Re(r, De.cuid, n.message, t);
          break;
        case "cuid2":
          Re(r, De.cuid2, n.message, t);
          break;
        case "startsWith":
          Re(r, RegExp(`^${yn(n.value, t)}`), n.message, t);
          break;
        case "endsWith":
          Re(r, RegExp(`${yn(n.value, t)}$`), n.message, t);
          break;
        case "datetime":
          qe(r, "date-time", n.message, t);
          break;
        case "date":
          qe(r, "date", n.message, t);
          break;
        case "time":
          qe(r, "time", n.message, t);
          break;
        case "duration":
          qe(r, "duration", n.message, t);
          break;
        case "length":
          X(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, t), X(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
          break;
        case "includes": {
          Re(r, RegExp(yn(n.value, t)), n.message, t);
          break;
        }
        case "ip": {
          n.version !== "v6" && qe(r, "ipv4", n.message, t), n.version !== "v4" && qe(r, "ipv6", n.message, t);
          break;
        }
        case "base64url":
          Re(r, De.base64url, n.message, t);
          break;
        case "jwt":
          Re(r, De.jwt, n.message, t);
          break;
        case "cidr": {
          n.version !== "v6" && Re(r, De.ipv4Cidr, n.message, t), n.version !== "v4" && Re(r, De.ipv6Cidr, n.message, t);
          break;
        }
        case "emoji":
          Re(r, De.emoji(), n.message, t);
          break;
        case "ulid": {
          Re(r, De.ulid, n.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              qe(r, "binary", n.message, t);
              break;
            }
            case "contentEncoding:base64": {
              X(r, "contentEncoding", "base64", n.message, t);
              break;
            }
            case "pattern:zod": {
              Re(r, De.base64, n.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Re(r, De.nanoid, n.message, t);
      }
  return r;
}
function yn(e, t) {
  return t.patternStrategy === "escape" ? ku(e) : e;
}
const xu = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function ku(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    xu.has(e[r]) || (t += "\\"), t += e[r];
  return t;
}
function qe(e, t, r, n) {
  var a;
  e.format || (a = e.anyOf) != null && a.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : X(e, "format", t, r, n);
}
function Re(e, t, r, n) {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: wa(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : X(e, "pattern", wa(t, n), r, n);
}
function wa(e, t) {
  var u;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const r = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s")
    // `.` matches newlines
  }, n = r.i ? e.source.toLowerCase() : e.source;
  let a = "", s = !1, o = !1, i = !1;
  for (let c = 0; c < n.length; c++) {
    if (s) {
      a += n[c], s = !1;
      continue;
    }
    if (r.i) {
      if (o) {
        if (n[c].match(/[a-z]/)) {
          i ? (a += n[c], a += `${n[c - 2]}-${n[c]}`.toUpperCase(), i = !1) : n[c + 1] === "-" && ((u = n[c + 2]) != null && u.match(/[a-z]/)) ? (a += n[c], i = !0) : a += `${n[c]}${n[c].toUpperCase()}`;
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
function Vs(e, t) {
  var n, a, s, o, i, u;
  if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === S.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((c, d) => ({
        ...c,
        [d]: H(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", d]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: H(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (t.target === "openApi3")
    return r;
  if (((a = e.keyType) == null ? void 0 : a._def.typeName) === S.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
    const { type: c, ...d } = Bs(e.keyType._def, t);
    return {
      ...r,
      propertyNames: d
    };
  } else {
    if (((o = e.keyType) == null ? void 0 : o._def.typeName) === S.ZodEnum)
      return {
        ...r,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((i = e.keyType) == null ? void 0 : i._def.typeName) === S.ZodBranded && e.keyType._def.type._def.typeName === S.ZodString && ((u = e.keyType._def.type._def.checks) != null && u.length)) {
      const { type: c, ...d } = Ls(e.keyType._def, t);
      return {
        ...r,
        propertyNames: d
      };
    }
  }
  return r;
}
function Tu(e, t) {
  if (t.mapStrategy === "record")
    return Vs(e, t);
  const r = H(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, n = H(e.valueType._def, {
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
function Su(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function Iu() {
  return {
    not: {}
  };
}
function Eu(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const Hr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Cu(e, t) {
  if (t.target === "openApi3")
    return xa(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in Hr && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = Hr[s._def.typeName];
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
  return xa(e, t);
}
const xa = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => H(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function Ru(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: Hr[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        Hr[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const n = H(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = H(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function Au(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", As(r, "type", n.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? X(r, "minimum", n.value, n.message, t) : X(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), X(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? X(r, "maximum", n.value, n.message, t) : X(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), X(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        X(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Nu(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : H(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : H(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function ju(e, t) {
  const r = t.target === "openAi", n = {
    type: "object",
    ...Object.entries(e.shape()).reduce((a, [s, o]) => {
      if (o === void 0 || o._def === void 0)
        return a;
      let i = o.isOptional();
      i && r && (o instanceof Le && (o = o._def.innerType), o.isNullable() || (o = o.nullable()), i = !1);
      const u = H(o._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", s],
        propertyPath: [...t.currentPath, "properties", s]
      });
      return u === void 0 ? a : {
        properties: { ...a.properties, [s]: u },
        required: i ? a.required : [...a.required, s]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: Nu(e, t)
  };
  return n.required.length || delete n.required, n;
}
const Ou = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return H(e.innerType._def, t);
  const r = H(e.innerType._def, {
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
}, Pu = (e, t) => {
  if (t.pipeStrategy === "input")
    return H(e.in._def, t);
  if (t.pipeStrategy === "output")
    return H(e.out._def, t);
  const r = H(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = H(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function Mu(e, t) {
  return H(e.type._def, t);
}
function $u(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: H(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && X(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && X(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function Du(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, n) => H(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: H(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, n) => H(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function qu() {
  return {
    not: {}
  };
}
function Uu() {
  return {};
}
const Zu = (e, t) => H(e.innerType._def, t), Lu = (e, t, r) => {
  switch (t) {
    case S.ZodString:
      return Bs(e, r);
    case S.ZodNumber:
      return Au(e, r);
    case S.ZodObject:
      return ju(e, r);
    case S.ZodBigInt:
      return pu(e, r);
    case S.ZodBoolean:
      return mu();
    case S.ZodDate:
      return Fs(e, r);
    case S.ZodUndefined:
      return qu();
    case S.ZodNull:
      return Eu(r);
    case S.ZodArray:
      return du(e, r);
    case S.ZodUnion:
    case S.ZodDiscriminatedUnion:
      return Cu(e, r);
    case S.ZodIntersection:
      return bu(e, r);
    case S.ZodTuple:
      return Du(e, r);
    case S.ZodRecord:
      return Vs(e, r);
    case S.ZodLiteral:
      return wu(e, r);
    case S.ZodEnum:
      return vu(e);
    case S.ZodNativeEnum:
      return Su(e);
    case S.ZodNullable:
      return Ru(e, r);
    case S.ZodOptional:
      return Ou(e, r);
    case S.ZodMap:
      return Tu(e, r);
    case S.ZodSet:
      return $u(e, r);
    case S.ZodLazy:
      return () => e.getter()._def;
    case S.ZodPromise:
      return Mu(e, r);
    case S.ZodNaN:
    case S.ZodNever:
      return Iu();
    case S.ZodEffects:
      return yu(e, r);
    case S.ZodAny:
      return cu();
    case S.ZodUnknown:
      return Uu();
    case S.ZodDefault:
      return gu(e, r);
    case S.ZodBranded:
      return Ls(e, r);
    case S.ZodReadonly:
      return Zu(e, r);
    case S.ZodCatch:
      return fu(e, r);
    case S.ZodPipeline:
      return Pu(e, r);
    case S.ZodFunction:
    case S.ZodVoid:
    case S.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
};
function H(e, t, r = !1) {
  var i;
  const n = t.seen.get(e);
  if (t.override) {
    const u = (i = t.override) == null ? void 0 : i.call(t, e, t, n, r);
    if (u !== Qi)
      return u;
  }
  if (n && !r) {
    const u = Fu(n, t);
    if (u !== void 0)
      return u;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = Lu(e, e.typeName, t), o = typeof s == "function" ? H(s(), t) : s;
  if (o && Vu(e, t, o), t.postProcess) {
    const u = t.postProcess(o, e, t);
    return a.jsonSchema = o, u;
  }
  return a.jsonSchema = o, o;
}
const Fu = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Bu(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, Bu = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, Vu = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), Ju = (e, t) => {
  const r = tl(t), n = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((u, [c, d]) => ({
    ...u,
    [c]: H(d._def, {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, c]
    }, !0) ?? {}
  }), {}) : void 0, a = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, s = H(e._def, a === void 0 ? r : {
    ...r,
    currentPath: [...r.basePath, r.definitionPath, a]
  }, !1) ?? {}, o = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  o !== void 0 && (s.title = o);
  const i = a === void 0 ? n ? {
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
  return r.target === "jsonSchema7" ? i.$schema = "http://json-schema.org/draft-07/schema#" : (r.target === "jsonSchema2019-09" || r.target === "openAi") && (i.$schema = "https://json-schema.org/draft/2019-09/schema#"), r.target === "openAi" && ("anyOf" in i || "oneOf" in i || "allOf" in i || "type" in i && Array.isArray(i.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), i;
};
var br = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, wr = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, xr = {
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
}, kr = {
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
}, Tr = {
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
}, Js = [
  br,
  wr,
  xr,
  kr,
  Tr
], zu = {
  [br.code]: br,
  [wr.code]: wr,
  [xr.code]: xr,
  [kr.code]: kr,
  [Tr.code]: Tr
};
br.name + "", br.code, wr.name + "", wr.code, xr.name + "", xr.code, kr.name + "", kr.code, Tr.name + "", Tr.code;
var Gu = Js.map((e) => e.code), df = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const r = e.slice(0, t);
  if (!Gu.includes(r))
    throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  const n = r, a = e.slice(t + 1), s = JSON.parse(a);
  return zu[n].parse(s);
};
function Pt(e, t) {
  const r = Js.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
function Hu(e) {
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
        const m = e.substring(n, u + 1);
        !"false".startsWith(m) && !"true".startsWith(m) && !"null".startsWith(m) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(c, u) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(c, u)) : r = u;
        break;
      }
    }
  }
  let i = e.slice(0, r + 1);
  for (let u = t.length - 1; u >= 0; u--)
    switch (t[u]) {
      case "INSIDE_STRING": {
        i += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        i += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        i += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const d = e.substring(n, e.length);
        "true".startsWith(d) ? i += "true".slice(d.length) : "false".startsWith(d) ? i += "false".slice(d.length) : "null".startsWith(d) && (i += "null".slice(d.length));
      }
    }
  return i;
}
function zs(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = wt({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = wt({ text: Hu(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Wu = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Ku = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Yu = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Xu = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Qu = {
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
}, ec = {
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
}, tc = {
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
}, rc = {
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
}, nc = {
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
}, ac = {
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
}, sc = {
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
}, oc = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, ic = {
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
}, lc = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, uc = {
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
}, sn = [
  Wu,
  Ku,
  Yu,
  Xu,
  Qu,
  ec,
  tc,
  rc,
  nc,
  ac,
  sc,
  oc,
  ic,
  lc,
  uc
], cc = Object.fromEntries(
  sn.map((e) => [e.code, e])
);
Object.fromEntries(
  sn.map((e) => [e.name, e.code])
);
var dc = sn.map((e) => e.code), pc = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const r = e.slice(0, t);
  if (!dc.includes(r))
    throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  const n = r, a = e.slice(t + 1), s = JSON.parse(a);
  return cc[n].parse(s);
};
function ie(e, t) {
  const r = sn.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
var mc = 10;
function fc(e, t) {
  const r = new Uint8Array(t);
  let n = 0;
  for (const a of e)
    r.set(a, n), n += a.length;
  return e.length = 0, r;
}
async function pf({
  stream: e,
  onTextPart: t,
  onReasoningPart: r,
  onReasoningSignaturePart: n,
  onRedactedReasoningPart: a,
  onSourcePart: s,
  onDataPart: o,
  onErrorPart: i,
  onToolCallStreamingStartPart: u,
  onToolCallDeltaPart: c,
  onToolCallPart: d,
  onToolResultPart: m,
  onMessageAnnotationsPart: g,
  onFinishMessagePart: y,
  onFinishStepPart: f,
  onStartStepPart: p
}) {
  const h = e.getReader(), v = new TextDecoder(), b = [];
  let w = 0;
  for (; ; ) {
    const { value: _ } = await h.read();
    if (_ && (b.push(_), w += _.length, _[_.length - 1] !== mc))
      continue;
    if (b.length === 0)
      break;
    const T = fc(b, w);
    w = 0;
    const E = v.decode(T, { stream: !0 }).split(`
`).filter((C) => C !== "").map(pc);
    for (const { type: C, value: j } of E)
      switch (C) {
        case "text":
          await (t == null ? void 0 : t(j));
          break;
        case "reasoning":
          await (r == null ? void 0 : r(j));
          break;
        case "reasoning_signature":
          await (n == null ? void 0 : n(j));
          break;
        case "redacted_reasoning":
          await (a == null ? void 0 : a(j));
          break;
        case "source":
          await (s == null ? void 0 : s(j));
          break;
        case "data":
          await (o == null ? void 0 : o(j));
          break;
        case "error":
          await (i == null ? void 0 : i(j));
          break;
        case "message_annotations":
          await (g == null ? void 0 : g(j));
          break;
        case "tool_call_streaming_start":
          await (u == null ? void 0 : u(j));
          break;
        case "tool_call_delta":
          await (c == null ? void 0 : c(j));
          break;
        case "tool_call":
          await (d == null ? void 0 : d(j));
          break;
        case "tool_result":
          await (m == null ? void 0 : m(j));
          break;
        case "finish_message":
          await (y == null ? void 0 : y(j));
          break;
        case "finish_step":
          await (f == null ? void 0 : f(j));
          break;
        case "start_step":
          await (p == null ? void 0 : p(j));
          break;
        default: {
          const oe = C;
          throw new Error(`Unknown stream part type: ${oe}`);
        }
      }
  }
}
async function mf({
  stream: e,
  onTextPart: t
}) {
  const r = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: n, value: a } = await r.read();
    if (n)
      break;
    await t(a);
  }
}
function hc(e) {
  return e == null ? void 0 : e.reduce((t, r) => {
    var n;
    return Math.max(t, (n = r.step) != null ? n : 0);
  }, 0);
}
function Wr(e, t) {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (typeof e != "object" && typeof t != "object")
    return e === t;
  if (e.constructor !== t.constructor)
    return !1;
  if (e instanceof Date && t instanceof Date)
    return e.getTime() === t.getTime();
  if (Array.isArray(e)) {
    if (e.length !== t.length)
      return !1;
    for (let a = 0; a < e.length; a++)
      if (!Wr(e[a], t[a]))
        return !1;
    return !0;
  }
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (const a of r)
    if (!n.includes(a) || !Wr(e[a], t[a]))
      return !1;
  return !0;
}
function gc(e, t) {
  var r;
  const n = (r = t == null ? void 0 : t.useReferences) != null ? r : !1;
  return yc(
    Ju(e, {
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
var Nn = Symbol.for("vercel.ai.schema");
function yc(e, {
  validate: t
} = {}) {
  return {
    [Nn]: !0,
    _type: void 0,
    // should never be used directly
    [Zr]: !0,
    jsonSchema: e,
    validate: t
  };
}
function vc(e) {
  return typeof e == "object" && e !== null && Nn in e && e[Nn] === !0 && "jsonSchema" in e && "validate" in e;
}
function Bt(e) {
  return vc(e) ? e : gc(e);
}
var _c = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, vt = "1.9.0", ka = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function bc(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(ka);
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
    var c = u.match(ka);
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
var wc = bc(vt), xc = vt.split(".")[0], Sr = Symbol.for("opentelemetry.js.api." + xc), Ir = _c;
function Ar(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = Ir[Sr] = (a = Ir[Sr]) !== null && a !== void 0 ? a : {
    version: vt
  };
  if (!n && s[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(o.stack || o.message), !1;
  }
  if (s.version !== vt) {
    var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + e + " does not match previously registered API v" + vt);
    return r.error(o.stack || o.message), !1;
  }
  return s[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + vt + "."), !0;
}
function St(e) {
  var t, r, n = (t = Ir[Sr]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !wc(n)))
    return (r = Ir[Sr]) === null || r === void 0 ? void 0 : r[e];
}
function Nr(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + vt + ".");
  var r = Ir[Sr];
  r && delete r[e];
}
var kc = function(e, t) {
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
}, Tc = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Sc = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return rr("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return rr("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return rr("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return rr("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return rr("verbose", this._namespace, t);
    }, e;
  }()
);
function rr(e, t, r) {
  var n = St("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, Tc([], kc(r), !1));
}
var Oe;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(Oe || (Oe = {}));
function Ic(e, t) {
  e < Oe.NONE ? e = Oe.NONE : e > Oe.ALL && (e = Oe.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", Oe.ERROR),
    warn: r("warn", Oe.WARN),
    info: r("info", Oe.INFO),
    debug: r("debug", Oe.DEBUG),
    verbose: r("verbose", Oe.VERBOSE)
  };
}
var Ec = function(e, t) {
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
}, Cc = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Rc = "diag", Ye = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var i = St("diag");
          if (i)
            return i[a].apply(i, Cc([], Ec(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, i, u;
        if (s === void 0 && (s = { logLevel: Oe.INFO }), a === r) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = c.stack) !== null && o !== void 0 ? o : c.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var d = St("diag"), m = Ic((i = s.logLevel) !== null && i !== void 0 ? i : Oe.INFO, a);
        if (d && !s.suppressOverrideMessage) {
          var g = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + g), m.warn("Current logger will overwrite one already registered from " + g);
        }
        return Ar("diag", m, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Nr(Rc, r);
      }, r.createComponentLogger = function(a) {
        return new Sc(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), Ac = function(e, t) {
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
}, Nc = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, jc = (
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
        var r = Ac(t, 2), n = r[0], a = r[1];
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
        for (var o = Nc(n), i = o.next(); !i.done; i = o.next()) {
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
Ye.instance();
function Oc(e) {
  return e === void 0 && (e = {}), new jc(new Map(Object.entries(e)));
}
function Gs(e) {
  return Symbol.for(e);
}
var Pc = (
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
), Mc = new Pc(), Rt = /* @__PURE__ */ function() {
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
}(), $c = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return zc;
    }, e.prototype.createHistogram = function(t, r) {
      return Gc;
    }, e.prototype.createCounter = function(t, r) {
      return Jc;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return Hc;
    }, e.prototype.createObservableGauge = function(t, r) {
      return Kc;
    }, e.prototype.createObservableCounter = function(t, r) {
      return Wc;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return Yc;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), on = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), Dc = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(on)
), qc = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(on)
), Uc = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(on)
), Zc = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(on)
), Gn = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), Lc = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Gn)
), Fc = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Gn)
), Bc = (
  /** @class */
  function(e) {
    Rt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Gn)
), Vc = new $c(), Jc = new Dc(), zc = new Uc(), Gc = new Zc(), Hc = new qc(), Wc = new Lc(), Kc = new Fc(), Yc = new Bc(), Xc = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, Qc = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, ed = function(e, t) {
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
}, td = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, rd = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return Mc;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, td([n], ed(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), nd = function(e, t) {
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
}, ad = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, vn = "context", sd = new rd(), ln = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Ar(vn, t, Ye.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, ad([t, r, n], nd(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return St(vn) || sd;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Nr(vn, Ye.instance());
    }, e;
  }()
), jn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(jn || (jn = {}));
var Hs = "0000000000000000", Ws = "00000000000000000000000000000000", od = {
  traceId: Ws,
  spanId: Hs,
  traceFlags: jn.NONE
}, sr = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = od), this._spanContext = t;
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
), Hn = Gs("OpenTelemetry Context Key SPAN");
function Wn(e) {
  return e.getValue(Hn) || void 0;
}
function id() {
  return Wn(ln.getInstance().active());
}
function Kn(e, t) {
  return e.setValue(Hn, t);
}
function ld(e) {
  return e.deleteValue(Hn);
}
function ud(e, t) {
  return Kn(e, new sr(t));
}
function Ks(e) {
  var t;
  return (t = Wn(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var cd = /^([0-9a-f]{32})$/i, dd = /^[0-9a-f]{16}$/i;
function pd(e) {
  return cd.test(e) && e !== Ws;
}
function md(e) {
  return dd.test(e) && e !== Hs;
}
function Ys(e) {
  return pd(e.traceId) && md(e.spanId);
}
function fd(e) {
  return new sr(e);
}
var _n = ln.getInstance(), Xs = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = _n.active());
      var a = !!(r != null && r.root);
      if (a)
        return new sr();
      var s = n && Ks(n);
      return hd(s) && Ys(s) ? new sr(s) : new sr();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (s = r, i = n) : (s = r, o = n, i = a);
        var u = o ?? _n.active(), c = this.startSpan(t, s, u), d = Kn(u, c);
        return _n.with(d, i, void 0, c);
      }
    }, e;
  }()
);
function hd(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var gd = new Xs(), yd = (
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
      return t ? (this._delegate = t, this._delegate) : gd;
    }, e;
  }()
), vd = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new Xs();
    }, e;
  }()
), _d = new vd(), Ta = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new yd(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : _d;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), Kr;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(Kr || (Kr = {}));
ln.getInstance();
Ye.instance();
var bd = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, n) {
      return Vc;
    }, e;
  }()
), wd = new bd(), bn = "metrics", xd = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return Ar(bn, t, Ye.instance());
    }, e.prototype.getMeterProvider = function() {
      return St(bn) || wd;
    }, e.prototype.getMeter = function(t, r, n) {
      return this.getMeterProvider().getMeter(t, r, n);
    }, e.prototype.disable = function() {
      Nr(bn, Ye.instance());
    }, e;
  }()
);
xd.getInstance();
var kd = (
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
), Yn = Gs("OpenTelemetry Baggage Key");
function Qs(e) {
  return e.getValue(Yn) || void 0;
}
function Td() {
  return Qs(ln.getInstance().active());
}
function Sd(e, t) {
  return e.setValue(Yn, t);
}
function Id(e) {
  return e.deleteValue(Yn);
}
var wn = "propagation", Ed = new kd(), Cd = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = Oc, this.getBaggage = Qs, this.getActiveBaggage = Td, this.setBaggage = Sd, this.deleteBaggage = Id;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return Ar(wn, t, Ye.instance());
    }, e.prototype.inject = function(t, r, n) {
      return n === void 0 && (n = Qc), this._getGlobalPropagator().inject(t, r, n);
    }, e.prototype.extract = function(t, r, n) {
      return n === void 0 && (n = Xc), this._getGlobalPropagator().extract(t, r, n);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Nr(wn, Ye.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return St(wn) || Ed;
    }, e;
  }()
);
Cd.getInstance();
var xn = "trace", Rd = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new Ta(), this.wrapSpanContext = fd, this.isSpanContextValid = Ys, this.deleteSpan = ld, this.getSpan = Wn, this.getActiveSpan = id, this.getSpanContext = Ks, this.setSpan = Kn, this.setSpanContext = ud;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Ar(xn, this._proxyTracerProvider, Ye.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return St(xn) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Nr(xn, Ye.instance()), this._proxyTracerProvider = new Ta();
    }, e;
  }()
), Ad = Rd.getInstance(), Nd = Object.defineProperty, Xn = (e, t) => {
  for (var r in t)
    Nd(e, r, { get: t[r], enumerable: !0 });
};
function eo({
  execute: e,
  onError: t = () => "An error occurred."
  // mask error messages for safety by default
}) {
  let r;
  const n = [], a = new ReadableStream({
    start(i) {
      r = i;
    }
  });
  function s(i) {
    try {
      r.enqueue(i);
    } catch {
    }
  }
  try {
    const i = e({
      write(u) {
        s(u);
      },
      writeData(u) {
        s(ie("data", [u]));
      },
      writeMessageAnnotation(u) {
        s(ie("message_annotations", [u]));
      },
      writeSource(u) {
        s(ie("source", u));
      },
      merge(u) {
        n.push(
          (async () => {
            const c = u.getReader();
            for (; ; ) {
              const { done: d, value: m } = await c.read();
              if (d)
                break;
              s(m);
            }
          })().catch((c) => {
            s(ie("error", t(c)));
          })
        );
      },
      onError: t
    });
    i && n.push(
      i.catch((u) => {
        s(ie("error", t(u)));
      })
    );
  } catch (i) {
    s(ie("error", t(i)));
  }
  return new Promise(async (i) => {
    for (; n.length > 0; )
      await n.shift();
    i();
  }).finally(() => {
    try {
      r.close();
    } catch {
    }
  }), a;
}
function It(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = new Headers(e ?? {});
  return n.has("Content-Type") || n.set("Content-Type", t), r !== void 0 && n.set("X-Vercel-AI-Data-Stream", r), n;
}
function ff({
  status: e,
  statusText: t,
  headers: r,
  execute: n,
  onError: a
}) {
  return new Response(
    eo({ execute: n, onError: a }).pipeThrough(new TextEncoderStream()),
    {
      status: e,
      statusText: t,
      headers: It(r, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      })
    }
  );
}
function Yr(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = {};
  if (e != null)
    for (const [a, s] of Object.entries(e))
      n[a] = s;
  return n["Content-Type"] == null && (n["Content-Type"] = t), r !== void 0 && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function Xr({
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
function hf(e, {
  status: t,
  statusText: r,
  headers: n,
  execute: a,
  onError: s
}) {
  Xr({
    response: e,
    status: t,
    statusText: r,
    headers: Yr(n, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    }),
    stream: eo({ execute: a, onError: s }).pipeThrough(
      new TextEncoderStream()
    )
  });
}
var to = "AI_InvalidArgumentError", ro = `vercel.ai.error.${to}`, jd = Symbol.for(ro), no, Q = class extends O {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: to,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[no] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return O.hasMarker(e, ro);
  }
};
no = jd;
var ao = "AI_RetryError", so = `vercel.ai.error.${ao}`, Od = Symbol.for(so), oo, Sa = class extends O {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: ao, message: e }), this[oo] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return O.hasMarker(e, so);
  }
};
oo = Od;
var Pd = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => io(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function io(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (qr(s) || t === 0)
      throw s;
    const o = Zi(s), i = [...a, s], u = i.length;
    if (u > t)
      throw new Sa({
        message: `Failed after ${u} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (s instanceof Error && Ge.isInstance(s) && s.isRetryable === !0 && u <= t)
      return await Fn(r), io(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw u === 1 ? s : new Sa({
      message: `Failed after ${u} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function At({
  maxRetries: e
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new Q({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new Q({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const t = e ?? 2;
  return {
    maxRetries: t,
    retry: Pd({ maxRetries: t })
  };
}
function ke({
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
function Wt({
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
var Md = {
  startSpan() {
    return Dr;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(Dr);
    if (typeof r == "function")
      return r(Dr);
    if (typeof n == "function")
      return n(Dr);
  }
}, Dr = {
  spanContext() {
    return $d;
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
}, $d = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function Kt({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || Ad.getTracer("ai") : Md;
}
function Te({
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
          code: Kr.ERROR,
          message: o.message
        })) : s.setStatus({ code: Kr.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function G({
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
async function gf({
  model: e,
  value: t,
  maxRetries: r,
  abortSignal: n,
  headers: a,
  experimental_telemetry: s
}) {
  const { maxRetries: o, retry: i } = At({ maxRetries: r }), u = Wt({
    model: e,
    telemetry: s,
    headers: a,
    settings: { maxRetries: o }
  }), c = Kt(s);
  return Te({
    name: "ai.embed",
    attributes: G({
      telemetry: s,
      attributes: {
        ...ke({ operationId: "ai.embed", telemetry: s }),
        ...u,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: c,
    fn: async (d) => {
      const { embedding: m, usage: g, rawResponse: y } = await i(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Te({
            name: "ai.embed.doEmbed",
            attributes: G({
              telemetry: s,
              attributes: {
                ...ke({
                  operationId: "ai.embed.doEmbed",
                  telemetry: s
                }),
                ...u,
                // specific settings that only make sense on the outer level:
                "ai.values": { input: () => [JSON.stringify(t)] }
              }
            }),
            tracer: c,
            fn: async (f) => {
              var p;
              const h = await e.doEmbed({
                values: [t],
                abortSignal: n,
                headers: a
              }), v = h.embeddings[0], b = (p = h.usage) != null ? p : { tokens: NaN };
              return f.setAttributes(
                G({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => h.embeddings.map(
                        (w) => JSON.stringify(w)
                      )
                    },
                    "ai.usage.tokens": b.tokens
                  }
                })
              ), {
                embedding: v,
                usage: b,
                rawResponse: h.rawResponse
              };
            }
          })
        )
      );
      return d.setAttributes(
        G({
          telemetry: s,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(m) },
            "ai.usage.tokens": g.tokens
          }
        })
      ), new Dd({ value: t, embedding: m, usage: g, rawResponse: y });
    }
  });
}
var Dd = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.rawResponse = e.rawResponse;
  }
};
function qd(e, t) {
  if (t <= 0)
    throw new Error("chunkSize must be greater than 0");
  const r = [];
  for (let n = 0; n < e.length; n += t)
    r.push(e.slice(n, n + t));
  return r;
}
async function yf({
  model: e,
  values: t,
  maxRetries: r,
  abortSignal: n,
  headers: a,
  experimental_telemetry: s
}) {
  const { maxRetries: o, retry: i } = At({ maxRetries: r }), u = Wt({
    model: e,
    telemetry: s,
    headers: a,
    settings: { maxRetries: o }
  }), c = Kt(s);
  return Te({
    name: "ai.embedMany",
    attributes: G({
      telemetry: s,
      attributes: {
        ...ke({ operationId: "ai.embedMany", telemetry: s }),
        ...u,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((d) => JSON.stringify(d))
        }
      }
    }),
    tracer: c,
    fn: async (d) => {
      const m = e.maxEmbeddingsPerCall;
      if (m == null) {
        const { embeddings: p, usage: h } = await i(() => Te({
          name: "ai.embedMany.doEmbed",
          attributes: G({
            telemetry: s,
            attributes: {
              ...ke({
                operationId: "ai.embedMany.doEmbed",
                telemetry: s
              }),
              ...u,
              // specific settings that only make sense on the outer level:
              "ai.values": {
                input: () => t.map((v) => JSON.stringify(v))
              }
            }
          }),
          tracer: c,
          fn: async (v) => {
            var b;
            const w = await e.doEmbed({
              values: t,
              abortSignal: n,
              headers: a
            }), _ = w.embeddings, T = (b = w.usage) != null ? b : { tokens: NaN };
            return v.setAttributes(
              G({
                telemetry: s,
                attributes: {
                  "ai.embeddings": {
                    output: () => _.map((E) => JSON.stringify(E))
                  },
                  "ai.usage.tokens": T.tokens
                }
              })
            ), { embeddings: _, usage: T };
          }
        }));
        return d.setAttributes(
          G({
            telemetry: s,
            attributes: {
              "ai.embeddings": {
                output: () => p.map((v) => JSON.stringify(v))
              },
              "ai.usage.tokens": h.tokens
            }
          })
        ), new Ia({ values: t, embeddings: p, usage: h });
      }
      const g = qd(t, m), y = [];
      let f = 0;
      for (const p of g) {
        const { embeddings: h, usage: v } = await i(() => Te({
          name: "ai.embedMany.doEmbed",
          attributes: G({
            telemetry: s,
            attributes: {
              ...ke({
                operationId: "ai.embedMany.doEmbed",
                telemetry: s
              }),
              ...u,
              // specific settings that only make sense on the outer level:
              "ai.values": {
                input: () => p.map((b) => JSON.stringify(b))
              }
            }
          }),
          tracer: c,
          fn: async (b) => {
            var w;
            const _ = await e.doEmbed({
              values: p,
              abortSignal: n,
              headers: a
            }), T = _.embeddings, E = (w = _.usage) != null ? w : { tokens: NaN };
            return b.setAttributes(
              G({
                telemetry: s,
                attributes: {
                  "ai.embeddings": {
                    output: () => T.map((C) => JSON.stringify(C))
                  },
                  "ai.usage.tokens": E.tokens
                }
              })
            ), { embeddings: T, usage: E };
          }
        }));
        y.push(...h), f += v.tokens;
      }
      return d.setAttributes(
        G({
          telemetry: s,
          attributes: {
            "ai.embeddings": {
              output: () => y.map((p) => JSON.stringify(p))
            },
            "ai.usage.tokens": f
          }
        })
      ), new Ia({
        values: t,
        embeddings: y,
        usage: { tokens: f }
      });
    }
  });
}
var Ia = class {
  constructor(e) {
    this.values = e.values, this.embeddings = e.embeddings, this.usage = e.usage;
  }
}, lo = "AI_NoImageGeneratedError", uo = `vercel.ai.error.${lo}`, Ud = Symbol.for(uo), co, Zd = class extends O {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: r
  }) {
    super({ name: lo, message: e, cause: t }), this[co] = !0, this.responses = r;
  }
  static isInstance(e) {
    return O.hasMarker(e, uo);
  }
};
co = Ud;
async function vf({
  model: e,
  prompt: t,
  n: r = 1,
  size: n,
  aspectRatio: a,
  seed: s,
  providerOptions: o,
  maxRetries: i,
  abortSignal: u,
  headers: c,
  _internal: d = {
    currentDate: () => /* @__PURE__ */ new Date()
  }
}) {
  var m;
  const { retry: g } = At({ maxRetries: i }), y = (m = e.maxImagesPerCall) != null ? m : 1, f = Math.ceil(r / y), p = Array.from({ length: f }, (_, T) => {
    if (T < f - 1)
      return y;
    const E = r % y;
    return E === 0 ? y : E;
  }), h = await Promise.all(
    p.map(
      async (_) => g(
        () => e.doGenerate({
          prompt: t,
          n: _,
          abortSignal: u,
          headers: c,
          size: n,
          aspectRatio: a,
          seed: s,
          providerOptions: o ?? {}
        })
      )
    )
  ), v = [], b = [], w = [];
  for (const _ of h)
    v.push(
      ..._.images.map((T) => new Fd({ image: T }))
    ), b.push(..._.warnings), w.push(_.response);
  if (!v.length)
    throw new Zd({ responses: w });
  return new Ld({ images: v, warnings: b, responses: w });
}
var Ld = class {
  constructor(e) {
    this.images = e.images, this.warnings = e.warnings, this.responses = e.responses;
  }
  get image() {
    return this.images[0];
  }
}, Fd = class {
  constructor({ image: e }) {
    const t = e instanceof Uint8Array;
    this.base64Data = t ? void 0 : e, this.uint8ArrayData = t ? e : void 0;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = Ut(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = Rs(this.base64Data)), this.uint8ArrayData;
  }
}, po = "AI_NoObjectGeneratedError", mo = `vercel.ai.error.${po}`, Bd = Symbol.for(mo), fo, tt = class extends O {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: n,
    usage: a
  }) {
    super({ name: po, message: e, cause: t }), this[fo] = !0, this.text = r, this.response = n, this.usage = a;
  }
  static isInstance(e) {
    return O.hasMarker(e, mo);
  }
};
fo = Bd;
var ho = "AI_DownloadError", go = `vercel.ai.error.${ho}`, Vd = Symbol.for(go), yo, kn = class extends O {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: ho, message: a, cause: n }), this[yo] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return O.hasMarker(e, go);
  }
};
yo = Vd;
async function Jd({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const a = await t(n);
    if (!a.ok)
      throw new kn({
        url: n,
        statusCode: a.status,
        statusText: a.statusText
      });
    return {
      data: new Uint8Array(await a.arrayBuffer()),
      mimeType: (r = a.headers.get("content-type")) != null ? r : void 0
    };
  } catch (a) {
    throw kn.isInstance(a) ? a : new kn({ url: n, cause: a });
  }
}
var zd = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function Gd(e) {
  for (const { bytes: t, mimeType: r } of zd)
    if (e.length >= t.length && t.every((n, a) => e[a] === n))
      return r;
}
var vo = "AI_InvalidDataContentError", _o = `vercel.ai.error.${vo}`, Hd = Symbol.for(_o), bo, Ea = class extends O {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: vo, message: r, cause: t }), this[bo] = !0, this.content = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, _o);
  }
};
bo = Hd;
var wo = l.union([
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
function Wd(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? Ut(new Uint8Array(e)) : Ut(e);
}
function Qr(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return Rs(e);
    } catch (t) {
      throw new Ea({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Ea({ content: e });
}
function Kd(e) {
  try {
    return new TextDecoder().decode(e);
  } catch {
    throw new Error("Error decoding Uint8Array to text");
  }
}
var xo = "AI_InvalidMessageRoleError", ko = `vercel.ai.error.${xo}`, Yd = Symbol.for(ko), To, Xd = class extends O {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: xo, message: t }), this[To] = !0, this.role = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, ko);
  }
};
To = Yd;
function Qd(e) {
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
async function Vt({
  prompt: e,
  modelSupportsImageUrls: t = !0,
  modelSupportsUrl: r = () => !1,
  downloadImplementation: n = Jd
}) {
  const a = await tp(
    e.messages,
    n,
    t,
    r
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (s) => ep(s, a)
    )
  ];
}
function ep(e, t) {
  var r, n, a, s, o, i;
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
        content: e.content.map((c) => rp(c, t)).filter((c) => c.type !== "text" || c.text !== ""),
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
          const { experimental_providerMetadata: d, providerOptions: m, ...g } = c;
          return {
            ...g,
            providerMetadata: m ?? d
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
        providerMetadata: (i = e.providerOptions) != null ? i : e.experimental_providerMetadata
      };
    default: {
      const c = u;
      throw new Xd({ role: c });
    }
  }
}
async function tp(e, t, r, n) {
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
function rp(e, t) {
  var r;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerMetadata: e.experimental_providerMetadata
    };
  let n = e.mimeType, a, s, o;
  const i = e.type;
  switch (i) {
    case "image":
      a = e.image;
      break;
    case "file":
      a = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${i}`);
  }
  try {
    s = typeof a == "string" ? new URL(a) : a;
  } catch {
    s = a;
  }
  if (s instanceof URL)
    if (s.protocol === "data:") {
      const { mimeType: u, base64Content: c } = Qd(
        s.toString()
      );
      if (u == null || c == null)
        throw new Error(`Invalid data URL format in part ${i}`);
      n = u, o = Qr(c);
    } else {
      const u = t[s.toString()];
      u ? (o = u.data, n ?? (n = u.mimeType)) : o = s;
    }
  else
    o = Qr(s);
  switch (i) {
    case "image":
      return o instanceof Uint8Array && (n = (r = Gd(o)) != null ? r : n), {
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
        data: o instanceof Uint8Array ? Wd(o) : o,
        mimeType: n,
        providerMetadata: e.experimental_providerMetadata
      };
    }
  }
}
function Jt({
  maxTokens: e,
  temperature: t,
  topP: r,
  topK: n,
  presencePenalty: a,
  frequencyPenalty: s,
  stopSequences: o,
  seed: i
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new Q({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new Q({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new Q({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new Q({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new Q({
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (a != null && typeof a != "number")
    throw new Q({
      parameter: "presencePenalty",
      value: a,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new Q({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (i != null && !Number.isInteger(i))
    throw new Q({
      parameter: "seed",
      value: i,
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
    seed: i
  };
}
function np(e) {
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
            image: Qr(u)
          });
        else if ((n = s.contentType) != null && n.startsWith("text/"))
          a.push({
            type: "text",
            text: Kd(
              Qr(u)
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
var So = "AI_MessageConversionError", Io = `vercel.ai.error.${So}`, ap = Symbol.for(Io), Eo, Tn = class extends O {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: So, message: t }), this[Eo] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, Io);
  }
};
Eo = ap;
function sp(e, t) {
  var r, n;
  const a = (r = t == null ? void 0 : t.tools) != null ? r : {}, s = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o], u = o === e.length - 1, { role: c, content: d, experimental_attachments: m } = i;
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
          content: m ? [
            { type: "text", text: d },
            ...np(m)
          ] : d
        });
        break;
      }
      case "assistant": {
        if (i.parts != null) {
          let f = function() {
            const b = [];
            for (const _ of v)
              switch (_.type) {
                case "text":
                  b.push({
                    type: "text",
                    text: _.text
                  });
                  break;
                case "reasoning": {
                  for (const T of _.details)
                    switch (T.type) {
                      case "text":
                        b.push({
                          type: "reasoning",
                          text: T.text,
                          signature: T.signature
                        });
                        break;
                      case "redacted":
                        b.push({
                          type: "redacted-reasoning",
                          data: T.data
                        });
                        break;
                    }
                  break;
                }
                case "tool-invocation":
                  b.push({
                    type: "tool-call",
                    toolCallId: _.toolInvocation.toolCallId,
                    toolName: _.toolInvocation.toolName,
                    args: _.toolInvocation.args
                  });
                  break;
                default: {
                  const T = _;
                  throw new Error(`Unsupported part: ${T}`);
                }
              }
            s.push({
              role: "assistant",
              content: b
            });
            const w = v.filter(
              (_) => _.type === "tool-invocation"
            ).map((_) => _.toolInvocation);
            w.length > 0 && s.push({
              role: "tool",
              content: w.map(
                (_) => {
                  if (!("result" in _))
                    throw new Tn({
                      originalMessage: i,
                      message: "ToolInvocation must have a result: " + JSON.stringify(_)
                    });
                  const { toolCallId: T, toolName: E, result: C } = _, j = a[E];
                  return (j == null ? void 0 : j.experimental_toToolResultContent) != null ? {
                    type: "tool-result",
                    toolCallId: T,
                    toolName: E,
                    result: j.experimental_toToolResultContent(C),
                    experimental_content: j.experimental_toToolResultContent(C)
                  } : {
                    type: "tool-result",
                    toolCallId: T,
                    toolName: E,
                    result: C
                  };
                }
              )
            }), v = [], h = !1, p++;
          }, p = 0, h = !1, v = [];
          for (const b of i.parts)
            switch (b.type) {
              case "reasoning":
                v.push(b);
                break;
              case "text": {
                h && f(), v.push(b);
                break;
              }
              case "tool-invocation": {
                ((n = b.toolInvocation.step) != null ? n : 0) !== p && f(), v.push(b), h = !0;
                break;
              }
            }
          f();
          break;
        }
        const g = i.toolInvocations;
        if (g == null || g.length === 0) {
          s.push({ role: "assistant", content: d });
          break;
        }
        const y = g.reduce((f, p) => {
          var h;
          return Math.max(f, (h = p.step) != null ? h : 0);
        }, 0);
        for (let f = 0; f <= y; f++) {
          const p = g.filter(
            (h) => {
              var v;
              return ((v = h.step) != null ? v : 0) === f;
            }
          );
          p.length !== 0 && (s.push({
            role: "assistant",
            content: [
              ...u && d && f === 0 ? [{ type: "text", text: d }] : [],
              ...p.map(
                ({ toolCallId: h, toolName: v, args: b }) => ({
                  type: "tool-call",
                  toolCallId: h,
                  toolName: v,
                  args: b
                })
              )
            ]
          }), s.push({
            role: "tool",
            content: p.map((h) => {
              if (!("result" in h))
                throw new Tn({
                  originalMessage: i,
                  message: "ToolInvocation must have a result: " + JSON.stringify(h)
                });
              const { toolCallId: v, toolName: b, result: w } = h, _ = a[b];
              return (_ == null ? void 0 : _.experimental_toToolResultContent) != null ? {
                type: "tool-result",
                toolCallId: v,
                toolName: b,
                result: _.experimental_toToolResultContent(w),
                experimental_content: _.experimental_toToolResultContent(w)
              } : {
                type: "tool-result",
                toolCallId: v,
                toolName: b,
                result: w
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
        const g = c;
        throw new Tn({
          originalMessage: i,
          message: `Unsupported role: ${g}`
        });
      }
    }
  }
  return s;
}
function op(e) {
  if (!Array.isArray(e))
    return "other";
  if (e.length === 0)
    return "messages";
  const t = e.map(ip);
  return t.some((r) => r === "has-ui-specific-parts") ? "ui-messages" : t.every(
    (r) => r === "has-core-specific-parts" || r === "message"
  ) ? "messages" : "other";
}
function ip(e) {
  return typeof e == "object" && e !== null && (e.role === "function" || // UI-only role
  e.role === "data" || // UI-only role
  "toolInvocations" in e || // UI-specific field
  "experimental_attachments" in e) ? "has-ui-specific-parts" : typeof e == "object" && e !== null && "content" in e && (Array.isArray(e.content) || // Core messages can have array content
  "experimental_providerMetadata" in e || "providerOptions" in e) ? "has-core-specific-parts" : typeof e == "object" && e !== null && "role" in e && "content" in e && typeof e.content == "string" && ["system", "user", "assistant", "tool"].includes(e.role) ? "message" : "other";
}
var On = l.lazy(
  () => l.union([
    l.null(),
    l.string(),
    l.number(),
    l.boolean(),
    l.record(l.string(), On),
    l.array(On)
  ])
), ce = l.record(
  l.string(),
  l.record(l.string(), On)
), lp = l.array(
  l.union([
    l.object({ type: l.literal("text"), text: l.string() }),
    l.object({
      type: l.literal("image"),
      data: l.string(),
      mimeType: l.string().optional()
    })
  ])
), Co = l.object({
  type: l.literal("text"),
  text: l.string(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), up = l.object({
  type: l.literal("image"),
  image: l.union([wo, l.instanceof(URL)]),
  mimeType: l.string().optional(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), cp = l.object({
  type: l.literal("file"),
  data: l.union([wo, l.instanceof(URL)]),
  mimeType: l.string(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), dp = l.object({
  type: l.literal("reasoning"),
  text: l.string(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), pp = l.object({
  type: l.literal("redacted-reasoning"),
  data: l.string(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), mp = l.object({
  type: l.literal("tool-call"),
  toolCallId: l.string(),
  toolName: l.string(),
  args: l.unknown(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), fp = l.object({
  type: l.literal("tool-result"),
  toolCallId: l.string(),
  toolName: l.string(),
  result: l.unknown(),
  content: lp.optional(),
  isError: l.boolean().optional(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), hp = l.object({
  role: l.literal("system"),
  content: l.string(),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), gp = l.object({
  role: l.literal("user"),
  content: l.union([
    l.string(),
    l.array(l.union([Co, up, cp]))
  ]),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), yp = l.object({
  role: l.literal("assistant"),
  content: l.union([
    l.string(),
    l.array(
      l.union([
        Co,
        dp,
        pp,
        mp
      ])
    )
  ]),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), vp = l.object({
  role: l.literal("tool"),
  content: l.array(fp),
  providerOptions: ce.optional(),
  experimental_providerMetadata: ce.optional()
}), _p = l.union([
  hp,
  gp,
  yp,
  vp
]);
function zt({
  prompt: e,
  tools: t
}) {
  if (e.prompt == null && e.messages == null)
    throw new yt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new yt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new yt({
      prompt: e,
      message: "system must be a string"
    });
  if (e.prompt != null) {
    if (typeof e.prompt != "string")
      throw new yt({
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
    const r = op(e.messages);
    if (r === "other")
      throw new yt({
        prompt: e,
        message: "messages must be an array of CoreMessage or UIMessage"
      });
    const n = r === "ui-messages" ? sp(e.messages, {
      tools: t
    }) : e.messages, a = ot({
      value: n,
      schema: l.array(_p)
    });
    if (!a.success)
      throw new yt({
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
function et({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Ro(e, t) {
  return {
    promptTokens: e.promptTokens + t.promptTokens,
    completionTokens: e.completionTokens + t.completionTokens,
    totalTokens: e.totalTokens + t.totalTokens
  };
}
var bp = "JSON schema:", wp = "You MUST answer with a JSON object that matches the JSON schema above.", xp = "You MUST answer with JSON.";
function Er({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? bp : void 0,
  schemaSuffix: n = t != null ? wp : xp
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
function bt(e) {
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
var kp = {
  type: "no-schema",
  jsonSchema: void 0,
  validatePartialResult({ value: e, textDelta: t }) {
    return { success: !0, value: { partial: e, textDelta: t } };
  },
  validateFinalResult(e, t) {
    return e === void 0 ? {
      success: !1,
      error: new tt({
        message: "No object generated: response did not match schema.",
        text: t.text,
        response: t.response,
        usage: t.usage
      })
    } : { success: !0, value: e };
  },
  createElementStream() {
    throw new re({
      functionality: "element streams in no-schema mode"
    });
  }
}, Tp = (e) => ({
  type: "object",
  jsonSchema: e.jsonSchema,
  validatePartialResult({ value: t, textDelta: r }) {
    return {
      success: !0,
      value: {
        // Note: currently no validation of partial results:
        partial: t,
        textDelta: r
      }
    };
  },
  validateFinalResult(t) {
    return ot({ value: t, schema: e });
  },
  createElementStream() {
    throw new re({
      functionality: "element streams in object mode"
    });
  }
}), Sp = (e) => {
  const { $schema: t, ...r } = e.jsonSchema;
  return {
    type: "enum",
    // wrap in object that contains array of elements, since most LLMs will not
    // be able to generate an array directly:
    // possible future optimization: use arrays directly when model supports grammar-guided generation
    jsonSchema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        elements: { type: "array", items: r }
      },
      required: ["elements"],
      additionalProperties: !1
    },
    validatePartialResult({ value: n, latestObject: a, isFirstDelta: s, isFinalDelta: o }) {
      var i;
      if (!In(n) || !pa(n.elements))
        return {
          success: !1,
          error: new nt({
            value: n,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const u = n.elements, c = [];
      for (let g = 0; g < u.length; g++) {
        const y = u[g], f = ot({ value: y, schema: e });
        if (!(g === u.length - 1 && !o)) {
          if (!f.success)
            return f;
          c.push(f.value);
        }
      }
      const d = (i = a == null ? void 0 : a.length) != null ? i : 0;
      let m = "";
      return s && (m += "["), d > 0 && (m += ","), m += c.slice(d).map((g) => JSON.stringify(g)).join(","), o && (m += "]"), {
        success: !0,
        value: {
          partial: c,
          textDelta: m
        }
      };
    },
    validateFinalResult(n) {
      if (!In(n) || !pa(n.elements))
        return {
          success: !1,
          error: new nt({
            value: n,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const a = n.elements;
      for (const s of a) {
        const o = ot({ value: s, schema: e });
        if (!o.success)
          return o;
      }
      return { success: !0, value: a };
    },
    createElementStream(n) {
      let a = 0;
      return bt(
        n.pipeThrough(
          new TransformStream({
            transform(s, o) {
              switch (s.type) {
                case "object": {
                  const i = s.object;
                  for (; a < i.length; a++)
                    o.enqueue(i[a]);
                  break;
                }
                case "text-delta":
                case "finish":
                case "error":
                  break;
                default: {
                  const i = s;
                  throw new Error(
                    `Unsupported chunk type: ${i}`
                  );
                }
              }
            }
          })
        )
      );
    }
  };
}, Ip = (e) => ({
  type: "enum",
  // wrap in object that contains result, since most LLMs will not
  // be able to generate an enum value directly:
  // possible future optimization: use enums directly when model supports top-level enums
  jsonSchema: {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      result: { type: "string", enum: e }
    },
    required: ["result"],
    additionalProperties: !1
  },
  validateFinalResult(t) {
    if (!In(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new nt({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const r = t.result;
    return e.includes(r) ? { success: !0, value: r } : {
      success: !1,
      error: new nt({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  validatePartialResult() {
    throw new re({
      functionality: "partial results in enum mode"
    });
  },
  createElementStream() {
    throw new re({
      functionality: "element streams in enum mode"
    });
  }
});
function Ao({
  output: e,
  schema: t,
  enumValues: r
}) {
  switch (e) {
    case "object":
      return Tp(Bt(t));
    case "array":
      return Sp(Bt(t));
    case "enum":
      return Ip(r);
    case "no-schema":
      return kp;
    default: {
      const n = e;
      throw new Error(`Unsupported output: ${n}`);
    }
  }
}
function No({
  output: e,
  mode: t,
  schema: r,
  schemaName: n,
  schemaDescription: a,
  enumValues: s
}) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new Q({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t === "auto" || t === "tool")
      throw new Q({
        parameter: "mode",
        value: t,
        message: 'Mode must be "json" for no-schema output.'
      });
    if (r != null)
      throw new Q({
        parameter: "schema",
        value: r,
        message: "Schema is not supported for no-schema output."
      });
    if (a != null)
      throw new Q({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for no-schema output."
      });
    if (n != null)
      throw new Q({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for no-schema output."
      });
    if (s != null)
      throw new Q({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (r == null)
      throw new Q({
        parameter: "schema",
        value: r,
        message: "Schema is required for object output."
      });
    if (s != null)
      throw new Q({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (r == null)
      throw new Q({
        parameter: "schema",
        value: r,
        message: "Element schema is required for array output."
      });
    if (s != null)
      throw new Q({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (r != null)
      throw new Q({
        parameter: "schema",
        value: r,
        message: "Schema is not supported for enum output."
      });
    if (a != null)
      throw new Q({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for enum output."
      });
    if (n != null)
      throw new Q({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for enum output."
      });
    if (s == null)
      throw new Q({
        parameter: "enumValues",
        value: s,
        message: "Enum values are required for enum output."
      });
    for (const o of s)
      if (typeof o != "string")
        throw new Q({
          parameter: "enumValues",
          value: o,
          message: "Enum values must be strings."
        });
  }
}
var Ep = Et({ prefix: "aiobj", size: 24 });
async function _f({
  model: e,
  enum: t,
  // rename bc enum is reserved by typescript
  schema: r,
  schemaName: n,
  schemaDescription: a,
  mode: s,
  output: o = "object",
  system: i,
  prompt: u,
  messages: c,
  maxRetries: d,
  abortSignal: m,
  headers: g,
  experimental_repairText: y,
  experimental_telemetry: f,
  experimental_providerMetadata: p,
  providerOptions: h = p,
  _internal: {
    generateId: v = Ep,
    currentDate: b = () => /* @__PURE__ */ new Date()
  } = {},
  ...w
}) {
  No({
    output: o,
    mode: s,
    schema: r,
    schemaName: n,
    schemaDescription: a,
    enumValues: t
  });
  const { maxRetries: _, retry: T } = At({ maxRetries: d }), E = Ao({
    output: o,
    schema: r,
    enumValues: t
  });
  E.type === "no-schema" && s === void 0 && (s = "json");
  const C = Wt({
    model: e,
    telemetry: f,
    headers: g,
    settings: { ...w, maxRetries: _ }
  }), j = Kt(f);
  return Te({
    name: "ai.generateObject",
    attributes: G({
      telemetry: f,
      attributes: {
        ...ke({
          operationId: "ai.generateObject",
          telemetry: f
        }),
        ...C,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system: i, prompt: u, messages: c })
        },
        "ai.schema": E.jsonSchema != null ? { input: () => JSON.stringify(E.jsonSchema) } : void 0,
        "ai.schema.name": n,
        "ai.schema.description": a,
        "ai.settings.output": E.type,
        "ai.settings.mode": s
      }
    }),
    tracer: j,
    fn: async (oe) => {
      var ee, se, _e, ue;
      (s === "auto" || s == null) && (s = e.defaultObjectGenerationMode);
      let ne, de, ae, be, W, Y, z, M, we;
      switch (s) {
        case "json": {
          const q = zt({
            prompt: {
              system: E.jsonSchema == null ? Er({ prompt: i }) : e.supportsStructuredOutputs ? i : Er({
                prompt: i,
                schema: E.jsonSchema
              }),
              prompt: u,
              messages: c
            },
            tools: void 0
          }), te = await Vt({
            prompt: q,
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: (ee = e.supportsUrl) == null ? void 0 : ee.bind(e)
            // support 'this' context
          }), K = await T(
            () => Te({
              name: "ai.generateObject.doGenerate",
              attributes: G({
                telemetry: f,
                attributes: {
                  ...ke({
                    operationId: "ai.generateObject.doGenerate",
                    telemetry: f
                  }),
                  ...C,
                  "ai.prompt.format": {
                    input: () => q.type
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(te)
                  },
                  "ai.settings.mode": s,
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": e.provider,
                  "gen_ai.request.model": e.modelId,
                  "gen_ai.request.frequency_penalty": w.frequencyPenalty,
                  "gen_ai.request.max_tokens": w.maxTokens,
                  "gen_ai.request.presence_penalty": w.presencePenalty,
                  "gen_ai.request.temperature": w.temperature,
                  "gen_ai.request.top_k": w.topK,
                  "gen_ai.request.top_p": w.topP
                }
              }),
              tracer: j,
              fn: async (B) => {
                var ge, me, je, Ie, Ee, U;
                const A = await e.doGenerate({
                  mode: {
                    type: "object-json",
                    schema: E.jsonSchema,
                    name: n,
                    description: a
                  },
                  ...Jt(w),
                  inputFormat: q.type,
                  prompt: te,
                  providerMetadata: h,
                  abortSignal: m,
                  headers: g
                }), V = {
                  id: (me = (ge = A.response) == null ? void 0 : ge.id) != null ? me : v(),
                  timestamp: (Ie = (je = A.response) == null ? void 0 : je.timestamp) != null ? Ie : b(),
                  modelId: (U = (Ee = A.response) == null ? void 0 : Ee.modelId) != null ? U : e.modelId
                };
                if (A.text === void 0)
                  throw new tt({
                    message: "No object generated: the model did not return a response.",
                    response: V,
                    usage: et(A.usage)
                  });
                return B.setAttributes(
                  G({
                    telemetry: f,
                    attributes: {
                      "ai.response.finishReason": A.finishReason,
                      "ai.response.object": { output: () => A.text },
                      "ai.response.id": V.id,
                      "ai.response.model": V.modelId,
                      "ai.response.timestamp": V.timestamp.toISOString(),
                      "ai.usage.promptTokens": A.usage.promptTokens,
                      "ai.usage.completionTokens": A.usage.completionTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [A.finishReason],
                      "gen_ai.response.id": V.id,
                      "gen_ai.response.model": V.modelId,
                      "gen_ai.usage.prompt_tokens": A.usage.promptTokens,
                      "gen_ai.usage.completion_tokens": A.usage.completionTokens
                    }
                  })
                ), { ...A, objectText: A.text, responseData: V };
              }
            })
          );
          ne = K.objectText, de = K.finishReason, ae = K.usage, be = K.warnings, W = K.rawResponse, M = K.logprobs, we = K.providerMetadata, z = (se = K.request) != null ? se : {}, Y = K.responseData;
          break;
        }
        case "tool": {
          const q = zt({
            prompt: { system: i, prompt: u, messages: c },
            tools: void 0
          }), te = await Vt({
            prompt: q,
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: (_e = e.supportsUrl) == null ? void 0 : _e.bind(e)
            // support 'this' context,
          }), K = q.type, B = await T(
            () => Te({
              name: "ai.generateObject.doGenerate",
              attributes: G({
                telemetry: f,
                attributes: {
                  ...ke({
                    operationId: "ai.generateObject.doGenerate",
                    telemetry: f
                  }),
                  ...C,
                  "ai.prompt.format": {
                    input: () => K
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(te)
                  },
                  "ai.settings.mode": s,
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": e.provider,
                  "gen_ai.request.model": e.modelId,
                  "gen_ai.request.frequency_penalty": w.frequencyPenalty,
                  "gen_ai.request.max_tokens": w.maxTokens,
                  "gen_ai.request.presence_penalty": w.presencePenalty,
                  "gen_ai.request.temperature": w.temperature,
                  "gen_ai.request.top_k": w.topK,
                  "gen_ai.request.top_p": w.topP
                }
              }),
              tracer: j,
              fn: async (ge) => {
                var me, je, Ie, Ee, U, A, V, ye;
                const k = await e.doGenerate({
                  mode: {
                    type: "object-tool",
                    tool: {
                      type: "function",
                      name: n ?? "json",
                      description: a ?? "Respond with a JSON object.",
                      parameters: E.jsonSchema
                    }
                  },
                  ...Jt(w),
                  inputFormat: K,
                  prompt: te,
                  providerMetadata: h,
                  abortSignal: m,
                  headers: g
                }), F = (je = (me = k.toolCalls) == null ? void 0 : me[0]) == null ? void 0 : je.args, pe = {
                  id: (Ee = (Ie = k.response) == null ? void 0 : Ie.id) != null ? Ee : v(),
                  timestamp: (A = (U = k.response) == null ? void 0 : U.timestamp) != null ? A : b(),
                  modelId: (ye = (V = k.response) == null ? void 0 : V.modelId) != null ? ye : e.modelId
                };
                if (F === void 0)
                  throw new tt({
                    message: "No object generated: the tool was not called.",
                    response: pe,
                    usage: et(k.usage)
                  });
                return ge.setAttributes(
                  G({
                    telemetry: f,
                    attributes: {
                      "ai.response.finishReason": k.finishReason,
                      "ai.response.object": { output: () => F },
                      "ai.response.id": pe.id,
                      "ai.response.model": pe.modelId,
                      "ai.response.timestamp": pe.timestamp.toISOString(),
                      "ai.usage.promptTokens": k.usage.promptTokens,
                      "ai.usage.completionTokens": k.usage.completionTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [k.finishReason],
                      "gen_ai.response.id": pe.id,
                      "gen_ai.response.model": pe.modelId,
                      "gen_ai.usage.input_tokens": k.usage.promptTokens,
                      "gen_ai.usage.output_tokens": k.usage.completionTokens
                    }
                  })
                ), { ...k, objectText: F, responseData: pe };
              }
            })
          );
          ne = B.objectText, de = B.finishReason, ae = B.usage, be = B.warnings, W = B.rawResponse, M = B.logprobs, we = B.providerMetadata, z = (ue = B.request) != null ? ue : {}, Y = B.responseData;
          break;
        }
        case void 0:
          throw new Error(
            "Model does not have a default object generation mode."
          );
        default: {
          const q = s;
          throw new Error(`Unsupported mode: ${q}`);
        }
      }
      function Ne(q) {
        const te = wt({ text: q });
        if (!te.success)
          throw new tt({
            message: "No object generated: could not parse the response.",
            cause: te.error,
            text: q,
            response: Y,
            usage: et(ae)
          });
        const K = E.validateFinalResult(
          te.value,
          {
            text: q,
            response: Y,
            usage: et(ae)
          }
        );
        if (!K.success)
          throw new tt({
            message: "No object generated: response did not match schema.",
            cause: K.error,
            text: q,
            response: Y,
            usage: et(ae)
          });
        return K.value;
      }
      let $;
      try {
        $ = Ne(ne);
      } catch (q) {
        if (y != null && tt.isInstance(q) && (or.isInstance(q.cause) || nt.isInstance(q.cause))) {
          const te = await y({
            text: ne,
            error: q.cause
          });
          if (te === null)
            throw q;
          $ = Ne(te);
        } else
          throw q;
      }
      return oe.setAttributes(
        G({
          telemetry: f,
          attributes: {
            "ai.response.finishReason": de,
            "ai.response.object": {
              output: () => JSON.stringify($)
            },
            "ai.usage.promptTokens": ae.promptTokens,
            "ai.usage.completionTokens": ae.completionTokens
          }
        })
      ), new Cp({
        object: $,
        finishReason: de,
        usage: et(ae),
        warnings: be,
        request: z,
        response: {
          ...Y,
          headers: W == null ? void 0 : W.headers
        },
        logprobs: M,
        providerMetadata: we
      });
    }
  });
}
var Cp = class {
  constructor(e) {
    this.object = e.object, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.experimental_providerMetadata = e.providerMetadata, this.response = e.response, this.request = e.request, this.logprobs = e.logprobs;
  }
  toJsonResponse(e) {
    var t;
    return new Response(JSON.stringify(this.object), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: It(e == null ? void 0 : e.headers, {
        contentType: "application/json; charset=utf-8"
      })
    });
  }
}, ve = class {
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
function Ca() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function jo() {
  let e = [], t = null, r = !1, n = Ca();
  const a = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = Ca(), await n.promise, a();
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
function Oo() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
var Rp = Et({ prefix: "aiobj", size: 24 });
function bf({
  model: e,
  schema: t,
  schemaName: r,
  schemaDescription: n,
  mode: a,
  output: s = "object",
  system: o,
  prompt: i,
  messages: u,
  maxRetries: c,
  abortSignal: d,
  headers: m,
  experimental_telemetry: g,
  experimental_providerMetadata: y,
  providerOptions: f = y,
  onError: p,
  onFinish: h,
  _internal: {
    generateId: v = Rp,
    currentDate: b = () => /* @__PURE__ */ new Date(),
    now: w = Oo
  } = {},
  ..._
}) {
  No({
    output: s,
    mode: a,
    schema: t,
    schemaName: r,
    schemaDescription: n
  });
  const T = Ao({ output: s, schema: t });
  return T.type === "no-schema" && a === void 0 && (a = "json"), new Ap({
    model: e,
    telemetry: g,
    headers: m,
    settings: _,
    maxRetries: c,
    abortSignal: d,
    outputStrategy: T,
    system: o,
    prompt: i,
    messages: u,
    schemaName: r,
    schemaDescription: n,
    providerOptions: f,
    mode: a,
    onError: p,
    onFinish: h,
    generateId: v,
    currentDate: b,
    now: w
  });
}
var Ap = class {
  constructor({
    model: e,
    headers: t,
    telemetry: r,
    settings: n,
    maxRetries: a,
    abortSignal: s,
    outputStrategy: o,
    system: i,
    prompt: u,
    messages: c,
    schemaName: d,
    schemaDescription: m,
    providerOptions: g,
    mode: y,
    onError: f,
    onFinish: p,
    generateId: h,
    currentDate: v,
    now: b
  }) {
    this.objectPromise = new ve(), this.usagePromise = new ve(), this.providerMetadataPromise = new ve(), this.warningsPromise = new ve(), this.requestPromise = new ve(), this.responsePromise = new ve();
    const { maxRetries: w, retry: _ } = At({
      maxRetries: a
    }), T = Wt({
      model: e,
      telemetry: r,
      headers: t,
      settings: { ...n, maxRetries: w }
    }), E = Kt(r), C = this, j = jo(), oe = new TransformStream({
      transform(ee, se) {
        se.enqueue(ee), ee.type === "error" && (f == null || f({ error: ee.error }));
      }
    });
    this.baseStream = j.stream.pipeThrough(oe), Te({
      name: "ai.streamObject",
      attributes: G({
        telemetry: r,
        attributes: {
          ...ke({
            operationId: "ai.streamObject",
            telemetry: r
          }),
          ...T,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: i, prompt: u, messages: c })
          },
          "ai.schema": o.jsonSchema != null ? { input: () => JSON.stringify(o.jsonSchema) } : void 0,
          "ai.schema.name": d,
          "ai.schema.description": m,
          "ai.settings.output": o.type,
          "ai.settings.mode": y
        }
      }),
      tracer: E,
      endWhenDone: !1,
      fn: async (ee) => {
        var se, _e;
        (y === "auto" || y == null) && (y = e.defaultObjectGenerationMode);
        let ue, ne;
        switch (y) {
          case "json": {
            const U = zt({
              prompt: {
                system: o.jsonSchema == null ? Er({ prompt: i }) : e.supportsStructuredOutputs ? i : Er({
                  prompt: i,
                  schema: o.jsonSchema
                }),
                prompt: u,
                messages: c
              },
              tools: void 0
            });
            ue = {
              mode: {
                type: "object-json",
                schema: o.jsonSchema,
                name: d,
                description: m
              },
              ...Jt(n),
              inputFormat: U.type,
              prompt: await Vt({
                prompt: U,
                modelSupportsImageUrls: e.supportsImageUrls,
                modelSupportsUrl: (se = e.supportsUrl) == null ? void 0 : se.bind(e)
                // support 'this' context
              }),
              providerMetadata: g,
              abortSignal: s,
              headers: t
            }, ne = {
              transform: (A, V) => {
                switch (A.type) {
                  case "text-delta":
                    V.enqueue(A.textDelta);
                    break;
                  case "response-metadata":
                  case "finish":
                  case "error":
                    V.enqueue(A);
                    break;
                }
              }
            };
            break;
          }
          case "tool": {
            const U = zt({
              prompt: { system: i, prompt: u, messages: c },
              tools: void 0
            });
            ue = {
              mode: {
                type: "object-tool",
                tool: {
                  type: "function",
                  name: d ?? "json",
                  description: m ?? "Respond with a JSON object.",
                  parameters: o.jsonSchema
                }
              },
              ...Jt(n),
              inputFormat: U.type,
              prompt: await Vt({
                prompt: U,
                modelSupportsImageUrls: e.supportsImageUrls,
                modelSupportsUrl: (_e = e.supportsUrl) == null ? void 0 : _e.bind(e)
                // support 'this' context,
              }),
              providerMetadata: g,
              abortSignal: s,
              headers: t
            }, ne = {
              transform(A, V) {
                switch (A.type) {
                  case "tool-call-delta":
                    V.enqueue(A.argsTextDelta);
                    break;
                  case "response-metadata":
                  case "finish":
                  case "error":
                    V.enqueue(A);
                    break;
                }
              }
            };
            break;
          }
          case void 0:
            throw new Error(
              "Model does not have a default object generation mode."
            );
          default: {
            const U = y;
            throw new Error(`Unsupported mode: ${U}`);
          }
        }
        const {
          result: { stream: de, warnings: ae, rawResponse: be, request: W },
          doStreamSpan: Y,
          startTimestampMs: z
        } = await _(
          () => Te({
            name: "ai.streamObject.doStream",
            attributes: G({
              telemetry: r,
              attributes: {
                ...ke({
                  operationId: "ai.streamObject.doStream",
                  telemetry: r
                }),
                ...T,
                "ai.prompt.format": {
                  input: () => ue.inputFormat
                },
                "ai.prompt.messages": {
                  input: () => JSON.stringify(ue.prompt)
                },
                "ai.settings.mode": y,
                // standardized gen-ai llm span attributes:
                "gen_ai.system": e.provider,
                "gen_ai.request.model": e.modelId,
                "gen_ai.request.frequency_penalty": n.frequencyPenalty,
                "gen_ai.request.max_tokens": n.maxTokens,
                "gen_ai.request.presence_penalty": n.presencePenalty,
                "gen_ai.request.temperature": n.temperature,
                "gen_ai.request.top_k": n.topK,
                "gen_ai.request.top_p": n.topP
              }
            }),
            tracer: E,
            endWhenDone: !1,
            fn: async (U) => ({
              startTimestampMs: b(),
              doStreamSpan: U,
              result: await e.doStream(ue)
            })
          })
        );
        C.requestPromise.resolve(W ?? {});
        let M, we, Ne, $, q, te = "", K = "", B = {
          id: h(),
          timestamp: v(),
          modelId: e.modelId
        }, ge, me, je = !0, Ie = !0;
        const Ee = de.pipeThrough(new TransformStream(ne)).pipeThrough(
          new TransformStream({
            async transform(U, A) {
              var V, ye, k;
              if (je) {
                const F = b() - z;
                je = !1, Y.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": F
                }), Y.setAttributes({
                  "ai.stream.msToFirstChunk": F
                });
              }
              if (typeof U == "string") {
                te += U, K += U;
                const { value: F, state: pe } = zs(te);
                if (F !== void 0 && !Wr(ge, F)) {
                  const fe = o.validatePartialResult({
                    value: F,
                    textDelta: K,
                    latestObject: me,
                    isFirstDelta: Ie,
                    isFinalDelta: pe === "successful-parse"
                  });
                  fe.success && !Wr(
                    me,
                    fe.value.partial
                  ) && (ge = F, me = fe.value.partial, A.enqueue({
                    type: "object",
                    object: me
                  }), A.enqueue({
                    type: "text-delta",
                    textDelta: fe.value.textDelta
                  }), K = "", Ie = !1);
                }
                return;
              }
              switch (U.type) {
                case "response-metadata": {
                  B = {
                    id: (V = U.id) != null ? V : B.id,
                    timestamp: (ye = U.timestamp) != null ? ye : B.timestamp,
                    modelId: (k = U.modelId) != null ? k : B.modelId
                  };
                  break;
                }
                case "finish": {
                  K !== "" && A.enqueue({ type: "text-delta", textDelta: K }), we = U.finishReason, M = et(U.usage), Ne = U.providerMetadata, A.enqueue({ ...U, usage: M, response: B }), C.usagePromise.resolve(M), C.providerMetadataPromise.resolve(Ne), C.responsePromise.resolve({
                    ...B,
                    headers: be == null ? void 0 : be.headers
                  });
                  const F = o.validateFinalResult(
                    ge,
                    {
                      text: te,
                      response: B,
                      usage: M
                    }
                  );
                  F.success ? ($ = F.value, C.objectPromise.resolve($)) : (q = new tt({
                    message: "No object generated: response did not match schema.",
                    cause: F.error,
                    text: te,
                    response: B,
                    usage: M
                  }), C.objectPromise.reject(q));
                  break;
                }
                default: {
                  A.enqueue(U);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(U) {
              try {
                const A = M ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                Y.setAttributes(
                  G({
                    telemetry: r,
                    attributes: {
                      "ai.response.finishReason": we,
                      "ai.response.object": {
                        output: () => JSON.stringify($)
                      },
                      "ai.response.id": B.id,
                      "ai.response.model": B.modelId,
                      "ai.response.timestamp": B.timestamp.toISOString(),
                      "ai.usage.promptTokens": A.promptTokens,
                      "ai.usage.completionTokens": A.completionTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [we],
                      "gen_ai.response.id": B.id,
                      "gen_ai.response.model": B.modelId,
                      "gen_ai.usage.input_tokens": A.promptTokens,
                      "gen_ai.usage.output_tokens": A.completionTokens
                    }
                  })
                ), Y.end(), ee.setAttributes(
                  G({
                    telemetry: r,
                    attributes: {
                      "ai.usage.promptTokens": A.promptTokens,
                      "ai.usage.completionTokens": A.completionTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify($)
                      }
                    }
                  })
                ), await (p == null ? void 0 : p({
                  usage: A,
                  object: $,
                  error: q,
                  response: {
                    ...B,
                    headers: be == null ? void 0 : be.headers
                  },
                  warnings: ae,
                  providerMetadata: Ne,
                  experimental_providerMetadata: Ne
                }));
              } catch (A) {
                U.enqueue({ type: "error", error: A });
              } finally {
                ee.end();
              }
            }
          })
        );
        j.addStream(Ee);
      }
    }).catch((ee) => {
      j.addStream(
        new ReadableStream({
          start(se) {
            se.enqueue({ type: "error", error: ee }), se.close();
          }
        })
      );
    }).finally(() => {
      j.close();
    }), this.outputStrategy = o;
  }
  get object() {
    return this.objectPromise.value;
  }
  get usage() {
    return this.usagePromise.value;
  }
  get experimental_providerMetadata() {
    return this.providerMetadataPromise.value;
  }
  get providerMetadata() {
    return this.providerMetadataPromise.value;
  }
  get warnings() {
    return this.warningsPromise.value;
  }
  get request() {
    return this.requestPromise.value;
  }
  get response() {
    return this.responsePromise.value;
  }
  get partialObjectStream() {
    return bt(
      this.baseStream.pipeThrough(
        new TransformStream({
          transform(e, t) {
            switch (e.type) {
              case "object":
                t.enqueue(e.object);
                break;
              case "text-delta":
              case "finish":
              case "error":
                break;
              default: {
                const r = e;
                throw new Error(`Unsupported chunk type: ${r}`);
              }
            }
          }
        })
      )
    );
  }
  get elementStream() {
    return this.outputStrategy.createElementStream(this.baseStream);
  }
  get textStream() {
    return bt(
      this.baseStream.pipeThrough(
        new TransformStream({
          transform(e, t) {
            switch (e.type) {
              case "text-delta":
                t.enqueue(e.textDelta);
                break;
              case "object":
              case "finish":
              case "error":
                break;
              default: {
                const r = e;
                throw new Error(`Unsupported chunk type: ${r}`);
              }
            }
          }
        })
      )
    );
  }
  get fullStream() {
    return bt(this.baseStream);
  }
  pipeTextStreamToResponse(e, t) {
    Xr({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: Yr(t == null ? void 0 : t.headers, {
        contentType: "text/plain; charset=utf-8"
      }),
      stream: this.textStream.pipeThrough(new TextEncoderStream())
    });
  }
  toTextStreamResponse(e) {
    var t;
    return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: It(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, Po = "AI_NoOutputSpecifiedError", Mo = `vercel.ai.error.${Po}`, Np = Symbol.for(Mo), $o, Do = class extends O {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: Po, message: e }), this[$o] = !0;
  }
  static isInstance(e) {
    return O.hasMarker(e, Mo);
  }
};
$o = Np;
var qo = "AI_ToolExecutionError", Uo = `vercel.ai.error.${qo}`, jp = Symbol.for(Uo), Zo, Lo = class extends O {
  constructor({
    toolArgs: e,
    toolName: t,
    toolCallId: r,
    cause: n,
    message: a = `Error executing tool ${t}: ${Cr(n)}`
  }) {
    super({ name: qo, message: a, cause: n }), this[Zo] = !0, this.toolArgs = e, this.toolName = t, this.toolCallId = r;
  }
  static isInstance(e) {
    return O.hasMarker(e, Uo);
  }
};
Zo = jp;
function Op(e) {
  return e != null && Object.keys(e).length > 0;
}
function Fo({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return Op(e) ? {
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
            parameters: Bt(s.parameters).jsonSchema
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
var Pp = /^([\s\S]*?)(\s+)(\S*)$/;
function Bo(e) {
  const t = e.match(Pp);
  return t ? { prefix: t[1], whitespace: t[2], suffix: t[3] } : void 0;
}
function Mp(e) {
  const t = Bo(e);
  return t ? t.prefix + t.whitespace : e;
}
var Vo = "AI_InvalidToolArgumentsError", Jo = `vercel.ai.error.${Vo}`, $p = Symbol.for(Jo), zo, Go = class extends O {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Cr(
      r
    )}`
  }) {
    super({ name: Vo, message: n, cause: r }), this[zo] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return O.hasMarker(e, Jo);
  }
};
zo = $p;
var Ho = "AI_NoSuchToolError", Wo = `vercel.ai.error.${Ho}`, Dp = Symbol.for(Wo), Ko, Pn = class extends O {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Ho, message: r }), this[Ko] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return O.hasMarker(e, Wo);
  }
};
Ko = Dp;
var Yo = "AI_ToolCallRepairError", Xo = `vercel.ai.error.${Yo}`, qp = Symbol.for(Xo), Qo, Up = class extends O {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${Cr(e)}`
  }) {
    super({ name: Yo, message: r, cause: e }), this[Qo] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return O.hasMarker(e, Xo);
  }
};
Qo = qp;
async function ei({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: n,
  messages: a
}) {
  if (t == null)
    throw new Pn({ toolName: e.toolName });
  try {
    return await Ra({ toolCall: e, tools: t });
  } catch (s) {
    if (r == null || !(Pn.isInstance(s) || Go.isInstance(s)))
      throw s;
    let o = null;
    try {
      o = await r({
        toolCall: e,
        tools: t,
        parameterSchema: ({ toolName: i }) => Bt(t[i].parameters).jsonSchema,
        system: n,
        messages: a,
        error: s
      });
    } catch (i) {
      throw new Up({
        cause: i,
        originalError: s
      });
    }
    if (o == null)
      throw s;
    return await Ra({ toolCall: o, tools: t });
  }
}
async function Ra({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, n = t[r];
  if (n == null)
    throw new Pn({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = Bt(n.parameters), s = e.args.trim() === "" ? ot({ value: {}, schema: a }) : wt({ text: e.args, schema: a });
  if (s.success === !1)
    throw new Go({
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
function Mn({
  text: e = "",
  reasoning: t,
  tools: r,
  toolCalls: n,
  toolResults: a,
  messageId: s,
  generateMessageId: o
}) {
  const i = [];
  return i.push({
    role: "assistant",
    content: [
      ...t.map(
        (u) => u.type === "text" ? { ...u, type: "reasoning" } : { ...u, type: "redacted-reasoning" }
      ),
      { type: "text", text: e },
      ...n
    ],
    id: s
  }), a.length > 0 && i.push({
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
  }), i;
}
function $n(e) {
  const t = e.filter((r) => r.type === "text").map((r) => r.text).join("");
  return t.length > 0 ? t : void 0;
}
var Zp = Et({
  prefix: "aitxt",
  size: 24
}), Lp = Et({
  prefix: "msg",
  size: 24
});
async function wf({
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
  experimental_generateMessageId: d = Lp,
  experimental_output: m,
  experimental_continueSteps: g = !1,
  experimental_telemetry: y,
  experimental_providerMetadata: f,
  providerOptions: p = f,
  experimental_activeTools: h,
  experimental_repairToolCall: v,
  _internal: {
    generateId: b = Zp,
    currentDate: w = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: _,
  ...T
}) {
  var E;
  if (c < 1)
    throw new Q({
      parameter: "maxSteps",
      value: c,
      message: "maxSteps must be at least 1"
    });
  const { maxRetries: C, retry: j } = At({ maxRetries: o }), oe = Wt({
    model: e,
    telemetry: y,
    headers: u,
    settings: { ...T, maxRetries: C }
  }), ee = zt({
    prompt: {
      system: (E = m == null ? void 0 : m.injectIntoSystemPrompt({ system: n, model: e })) != null ? E : n,
      prompt: a,
      messages: s
    },
    tools: t
  }), se = Kt(y);
  return Te({
    name: "ai.generateText",
    attributes: G({
      telemetry: y,
      attributes: {
        ...ke({
          operationId: "ai.generateText",
          telemetry: y
        }),
        ...oe,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system: n, prompt: a, messages: s })
        },
        "ai.settings.maxSteps": c
      }
    }),
    tracer: se,
    fn: async (_e) => {
      var ue, ne, de, ae, be, W, Y, z, M;
      const we = {
        type: "regular",
        ...Fo({ tools: t, toolChoice: r, activeTools: h })
      }, Ne = Jt(T);
      let $, q = [], te = [], K = [], B = 0;
      const ge = [];
      let me = "";
      const je = [], Ie = [];
      let Ee = {
        completionTokens: 0,
        promptTokens: 0,
        totalTokens: 0
      }, U = "initial";
      do {
        const A = B === 0 ? ee.type : "messages", V = [
          ...ee.messages,
          ...ge
        ], ye = await Vt({
          prompt: {
            type: A,
            system: ee.system,
            messages: V
          },
          modelSupportsImageUrls: e.supportsImageUrls,
          modelSupportsUrl: (ue = e.supportsUrl) == null ? void 0 : ue.bind(e)
          // support 'this' context
        });
        $ = await j(
          () => Te({
            name: "ai.generateText.doGenerate",
            attributes: G({
              telemetry: y,
              attributes: {
                ...ke({
                  operationId: "ai.generateText.doGenerate",
                  telemetry: y
                }),
                ...oe,
                "ai.prompt.format": { input: () => A },
                "ai.prompt.messages": {
                  input: () => JSON.stringify(ye)
                },
                "ai.prompt.tools": {
                  // convert the language model level tools:
                  input: () => {
                    var Ce;
                    return (Ce = we.tools) == null ? void 0 : Ce.map((dt) => JSON.stringify(dt));
                  }
                },
                "ai.prompt.toolChoice": {
                  input: () => we.toolChoice != null ? JSON.stringify(we.toolChoice) : void 0
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": e.provider,
                "gen_ai.request.model": e.modelId,
                "gen_ai.request.frequency_penalty": T.frequencyPenalty,
                "gen_ai.request.max_tokens": T.maxTokens,
                "gen_ai.request.presence_penalty": T.presencePenalty,
                "gen_ai.request.stop_sequences": T.stopSequences,
                "gen_ai.request.temperature": T.temperature,
                "gen_ai.request.top_k": T.topK,
                "gen_ai.request.top_p": T.topP
              }
            }),
            tracer: se,
            fn: async (Ce) => {
              var dt, Nt, Yt, Xt, pt, Or;
              const xe = await e.doGenerate({
                mode: we,
                ...Ne,
                inputFormat: A,
                responseFormat: m == null ? void 0 : m.responseFormat({ model: e }),
                prompt: ye,
                providerMetadata: p,
                abortSignal: i,
                headers: u
              }), Me = {
                id: (Nt = (dt = xe.response) == null ? void 0 : dt.id) != null ? Nt : b(),
                timestamp: (Xt = (Yt = xe.response) == null ? void 0 : Yt.timestamp) != null ? Xt : w(),
                modelId: (Or = (pt = xe.response) == null ? void 0 : pt.modelId) != null ? Or : e.modelId
              };
              return Ce.setAttributes(
                G({
                  telemetry: y,
                  attributes: {
                    "ai.response.finishReason": xe.finishReason,
                    "ai.response.text": {
                      output: () => xe.text
                    },
                    "ai.response.toolCalls": {
                      output: () => JSON.stringify(xe.toolCalls)
                    },
                    "ai.response.id": Me.id,
                    "ai.response.model": Me.modelId,
                    "ai.response.timestamp": Me.timestamp.toISOString(),
                    "ai.usage.promptTokens": xe.usage.promptTokens,
                    "ai.usage.completionTokens": xe.usage.completionTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [xe.finishReason],
                    "gen_ai.response.id": Me.id,
                    "gen_ai.response.model": Me.modelId,
                    "gen_ai.usage.input_tokens": xe.usage.promptTokens,
                    "gen_ai.usage.output_tokens": xe.usage.completionTokens
                  }
                })
              ), { ...xe, response: Me };
            }
          })
        ), q = await Promise.all(
          ((ne = $.toolCalls) != null ? ne : []).map(
            (Ce) => ei({
              toolCall: Ce,
              tools: t,
              repairToolCall: v,
              system: n,
              messages: V
            })
          )
        ), te = t == null ? [] : await Fp({
          toolCalls: q,
          tools: t,
          tracer: se,
          telemetry: y,
          messages: V,
          abortSignal: i
        });
        const k = et(
          $.usage
        );
        Ee = Ro(Ee, k);
        let F = "done";
        ++B < c && (g && $.finishReason === "length" && // only use continue when there are no tool calls:
        q.length === 0 ? F = "continue" : (
          // there are tool calls:
          q.length > 0 && // all current tool calls have results:
          te.length === q.length && (F = "tool-result")
        ));
        const pe = (de = $.text) != null ? de : "", fe = U === "continue" && // only for continue steps
        me.trimEnd() !== me ? pe.trimStart() : pe, Ve = F === "continue" ? Mp(fe) : fe;
        if (me = F === "continue" || U === "continue" ? me + Ve : Ve, K = Aa(
          $.reasoning
        ), je.push(...(ae = $.sources) != null ? ae : []), U === "continue") {
          const Ce = ge[ge.length - 1];
          typeof Ce.content == "string" ? Ce.content += Ve : Ce.content.push({
            text: Ve,
            type: "text"
          });
        } else
          ge.push(
            ...Mn({
              text: me,
              reasoning: Aa($.reasoning),
              tools: t ?? {},
              toolCalls: q,
              toolResults: te,
              messageId: d(),
              generateMessageId: d
            })
          );
        const jr = {
          stepType: U,
          text: Ve,
          // TODO v5: rename reasoning to reasoningText (and use reasoning for composite array)
          reasoning: $n(K),
          reasoningDetails: K,
          sources: (be = $.sources) != null ? be : [],
          toolCalls: q,
          toolResults: te,
          finishReason: $.finishReason,
          usage: k,
          warnings: $.warnings,
          logprobs: $.logprobs,
          request: (W = $.request) != null ? W : {},
          response: {
            ...$.response,
            headers: (Y = $.rawResponse) == null ? void 0 : Y.headers,
            // deep clone msgs to avoid mutating past messages in multi-step:
            messages: structuredClone(ge)
          },
          providerMetadata: $.providerMetadata,
          experimental_providerMetadata: $.providerMetadata,
          isContinued: F === "continue"
        };
        Ie.push(jr), await (_ == null ? void 0 : _(jr)), U = F;
      } while (U !== "done");
      return _e.setAttributes(
        G({
          telemetry: y,
          attributes: {
            "ai.response.finishReason": $.finishReason,
            "ai.response.text": {
              output: () => $.text
            },
            "ai.response.toolCalls": {
              output: () => JSON.stringify($.toolCalls)
            },
            "ai.usage.promptTokens": $.usage.promptTokens,
            "ai.usage.completionTokens": $.usage.completionTokens
          }
        })
      ), new Bp({
        text: me,
        reasoning: $n(K),
        reasoningDetails: K,
        sources: je,
        outputResolver: () => {
          if (m == null)
            throw new Do();
          return m.parseOutput(
            { text: me },
            { response: $.response, usage: Ee }
          );
        },
        toolCalls: q,
        toolResults: te,
        finishReason: $.finishReason,
        usage: Ee,
        warnings: $.warnings,
        request: (z = $.request) != null ? z : {},
        response: {
          ...$.response,
          headers: (M = $.rawResponse) == null ? void 0 : M.headers,
          messages: ge
        },
        logprobs: $.logprobs,
        steps: Ie,
        providerMetadata: $.providerMetadata
      });
    }
  });
}
async function Fp({
  toolCalls: e,
  tools: t,
  tracer: r,
  telemetry: n,
  messages: a,
  abortSignal: s
}) {
  return (await Promise.all(
    e.map(async ({ toolCallId: i, toolName: u, args: c }) => {
      const d = t[u];
      if ((d == null ? void 0 : d.execute) == null)
        return;
      const m = await Te({
        name: "ai.toolCall",
        attributes: G({
          telemetry: n,
          attributes: {
            ...ke({
              operationId: "ai.toolCall",
              telemetry: n
            }),
            "ai.toolCall.name": u,
            "ai.toolCall.id": i,
            "ai.toolCall.args": {
              output: () => JSON.stringify(c)
            }
          }
        }),
        tracer: r,
        fn: async (g) => {
          try {
            const y = await d.execute(c, {
              toolCallId: i,
              messages: a,
              abortSignal: s
            });
            try {
              g.setAttributes(
                G({
                  telemetry: n,
                  attributes: {
                    "ai.toolCall.result": {
                      output: () => JSON.stringify(y)
                    }
                  }
                })
              );
            } catch {
            }
            return y;
          } catch (y) {
            throw new Lo({
              toolCallId: i,
              toolName: u,
              toolArgs: c,
              cause: y
            });
          }
        }
      });
      return {
        type: "tool-result",
        toolCallId: i,
        toolName: u,
        args: c,
        result: m
      };
    })
  )).filter(
    (i) => i != null
  );
}
var Bp = class {
  constructor(e) {
    this.text = e.text, this.reasoning = e.reasoning, this.reasoningDetails = e.reasoningDetails, this.toolCalls = e.toolCalls, this.toolResults = e.toolResults, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.request = e.request, this.response = e.response, this.steps = e.steps, this.experimental_providerMetadata = e.providerMetadata, this.providerMetadata = e.providerMetadata, this.logprobs = e.logprobs, this.outputResolver = e.outputResolver, this.sources = e.sources;
  }
  get experimental_output() {
    return this.outputResolver();
  }
};
function Aa(e) {
  return e == null ? [] : typeof e == "string" ? [{ type: "text", text: e }] : e;
}
var Vp = {};
Xn(Vp, {
  object: () => Hp,
  text: () => Gp
});
var ti = "AI_InvalidStreamPartError", ri = `vercel.ai.error.${ti}`, Jp = Symbol.for(ri), ni, zp = class extends O {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: ti, message: t }), this[ni] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return O.hasMarker(e, ri);
  }
};
ni = Jp;
var Gp = () => ({
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
}), Hp = ({
  schema: e
}) => {
  const t = Bt(e);
  return {
    type: "object",
    responseFormat: ({ model: r }) => ({
      type: "json",
      schema: r.supportsStructuredOutputs ? t.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system: r, model: n }) {
      return n.supportsStructuredOutputs ? r : Er({
        prompt: r,
        schema: t.jsonSchema
      });
    },
    parsePartial({ text: r }) {
      const n = zs(r);
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
      const a = wt({ text: r });
      if (!a.success)
        throw new tt({
          message: "No object generated: could not parse the response.",
          cause: a.error,
          text: r,
          response: n.response,
          usage: n.usage
        });
      const s = ot({
        value: a.value,
        schema: t
      });
      if (!s.success)
        throw new tt({
          message: "No object generated: response did not match schema.",
          cause: s.error,
          text: r,
          response: n.response,
          usage: n.usage
        });
      return s.value;
    }
  };
}, Wp = {
  word: /\s*\S+\s+/m,
  line: /[^\n]*\n/m
};
function xf({
  delayInMs: e = 10,
  chunking: t = "word",
  _internal: { delay: r = Fn } = {}
} = {}) {
  const n = typeof t == "string" ? Wp[t] : t;
  if (n == null)
    throw new Un({
      argument: "chunking",
      message: `Chunking must be "word" or "line" or a RegExp. Received: ${t}`
    });
  return () => {
    let a = "";
    return new TransformStream({
      async transform(s, o) {
        if (s.type === "step-finish") {
          a.length > 0 && (o.enqueue({ type: "text-delta", textDelta: a }), a = ""), o.enqueue(s);
          return;
        }
        if (s.type !== "text-delta") {
          o.enqueue(s);
          return;
        }
        a += s.textDelta;
        let i;
        for (; (i = n.exec(a)) != null; ) {
          const u = i[0];
          o.enqueue({ type: "text-delta", textDelta: u }), a = a.slice(u.length), await r(e);
        }
      }
    });
  };
}
function ai(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function Qn(e, t) {
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
        const { result: m, reader: g } = await Promise.race([
          a.then((y) => ({ result: y, reader: r })),
          s.then((y) => ({ result: y, reader: n }))
        ]);
        m.done || d.enqueue(m.value), g === r ? (a = void 0, m.done && (await c(d), o = !0)) : (s = void 0, m.done && (i = !0, await u(d)));
      } catch (m) {
        d.error(m);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
function Kp({
  tools: e,
  generatorStream: t,
  toolCallStreaming: r,
  tracer: n,
  telemetry: a,
  system: s,
  messages: o,
  abortSignal: i,
  repairToolCall: u
}) {
  let c = null;
  const d = new ReadableStream({
    start(v) {
      c = v;
    }
  }), m = {}, g = /* @__PURE__ */ new Set();
  let y = !1, f;
  function p() {
    y && g.size === 0 && (f != null && c.enqueue(f), c.close());
  }
  const h = new TransformStream({
    async transform(v, b) {
      const w = v.type;
      switch (w) {
        case "text-delta":
        case "reasoning":
        case "reasoning-signature":
        case "redacted-reasoning":
        case "source":
        case "response-metadata":
        case "error": {
          b.enqueue(v);
          break;
        }
        case "tool-call-delta": {
          r && (m[v.toolCallId] || (b.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: v.toolCallId,
            toolName: v.toolName
          }), m[v.toolCallId] = !0), b.enqueue({
            type: "tool-call-delta",
            toolCallId: v.toolCallId,
            toolName: v.toolName,
            argsTextDelta: v.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          try {
            const _ = await ei({
              toolCall: v,
              tools: e,
              repairToolCall: u,
              system: s,
              messages: o
            });
            b.enqueue(_);
            const T = e[_.toolName];
            if (T.execute != null) {
              const E = Mt();
              g.add(E), Te({
                name: "ai.toolCall",
                attributes: G({
                  telemetry: a,
                  attributes: {
                    ...ke({
                      operationId: "ai.toolCall",
                      telemetry: a
                    }),
                    "ai.toolCall.name": _.toolName,
                    "ai.toolCall.id": _.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(_.args)
                    }
                  }
                }),
                tracer: n,
                fn: async (C) => T.execute(_.args, {
                  toolCallId: _.toolCallId,
                  messages: o,
                  abortSignal: i
                }).then(
                  (j) => {
                    c.enqueue({
                      ..._,
                      type: "tool-result",
                      result: j
                    }), g.delete(E), p();
                    try {
                      C.setAttributes(
                        G({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(j)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (j) => {
                    c.enqueue({
                      type: "error",
                      error: new Lo({
                        toolCallId: _.toolCallId,
                        toolName: _.toolName,
                        toolArgs: _.args,
                        cause: j
                      })
                    }), g.delete(E), p();
                  }
                )
              });
            }
          } catch (_) {
            c.enqueue({
              type: "error",
              error: _
            });
          }
          break;
        }
        case "finish": {
          f = {
            type: "finish",
            finishReason: v.finishReason,
            logprobs: v.logprobs,
            usage: et(v.usage),
            experimental_providerMetadata: v.providerMetadata
          };
          break;
        }
        default: {
          const _ = w;
          throw new Error(`Unhandled chunk type: ${_}`);
        }
      }
    },
    flush() {
      y = !0, p();
    }
  });
  return new ReadableStream({
    async start(v) {
      return Promise.all([
        t.pipeThrough(h).pipeTo(
          new WritableStream({
            write(b) {
              v.enqueue(b);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
          new WritableStream({
            write(b) {
              v.enqueue(b);
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
var Yp = Et({
  prefix: "aitxt",
  size: 24
}), Xp = Et({
  prefix: "msg",
  size: 24
});
function kf({
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
  experimental_generateMessageId: d = Xp,
  experimental_output: m,
  experimental_continueSteps: g = !1,
  experimental_telemetry: y,
  experimental_providerMetadata: f,
  providerOptions: p = f,
  experimental_toolCallStreaming: h = !1,
  toolCallStreaming: v = h,
  experimental_activeTools: b,
  experimental_repairToolCall: w,
  experimental_transform: _,
  onChunk: T,
  onError: E,
  onFinish: C,
  onStepFinish: j,
  _internal: {
    now: oe = Oo,
    generateId: ee = Yp,
    currentDate: se = () => /* @__PURE__ */ new Date()
  } = {},
  ..._e
}) {
  return new em({
    model: e,
    telemetry: y,
    headers: u,
    settings: _e,
    maxRetries: o,
    abortSignal: i,
    system: n,
    prompt: a,
    messages: s,
    tools: t,
    toolChoice: r,
    toolCallStreaming: v,
    transforms: ai(_),
    activeTools: b,
    repairToolCall: w,
    maxSteps: c,
    output: m,
    continueSteps: g,
    providerOptions: p,
    onChunk: T,
    onError: E,
    onFinish: C,
    onStepFinish: j,
    now: oe,
    currentDate: se,
    generateId: ee,
    generateMessageId: d
  });
}
function Qp(e) {
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
      const i = e.parsePartial({ text: t });
      if (i != null) {
        const u = JSON.stringify(i.partial);
        u !== n && (a({ controller: o, partialOutput: i.partial }), n = u);
      }
    },
    flush(s) {
      r.length > 0 && a({ controller: s });
    }
  });
}
var em = class {
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
    toolCallStreaming: m,
    transforms: g,
    activeTools: y,
    repairToolCall: f,
    maxSteps: p,
    output: h,
    continueSteps: v,
    providerOptions: b,
    now: w,
    currentDate: _,
    generateId: T,
    generateMessageId: E,
    onChunk: C,
    onError: j,
    onFinish: oe,
    onStepFinish: ee
  }) {
    this.warningsPromise = new ve(), this.usagePromise = new ve(), this.finishReasonPromise = new ve(), this.providerMetadataPromise = new ve(), this.textPromise = new ve(), this.reasoningPromise = new ve(), this.reasoningDetailsPromise = new ve(), this.sourcesPromise = new ve(), this.toolCallsPromise = new ve(), this.toolResultsPromise = new ve(), this.requestPromise = new ve(), this.responsePromise = new ve(), this.stepsPromise = new ve();
    var se;
    if (p < 1)
      throw new Q({
        parameter: "maxSteps",
        value: p,
        message: "maxSteps must be at least 1"
      });
    this.output = h;
    let _e = "", ue = "", ne = "";
    const de = [];
    let ae, be = [];
    const W = [], Y = {
      id: T(),
      timestamp: _(),
      modelId: e.modelId,
      messages: []
    };
    let z = [], M = [], we, Ne, $ = "initial";
    const q = [];
    let te;
    const K = new TransformStream({
      async transform(V, ye) {
        ye.enqueue(V);
        const { part: k } = V;
        if ((k.type === "text-delta" || k.type === "reasoning" || k.type === "source" || k.type === "tool-call" || k.type === "tool-result" || k.type === "tool-call-streaming-start" || k.type === "tool-call-delta") && await (C == null ? void 0 : C({ chunk: k })), k.type === "error" && await (j == null ? void 0 : j({ error: k.error })), k.type === "text-delta" && (_e += k.textDelta, ue += k.textDelta, ne += k.textDelta), k.type === "reasoning" && (ae == null ? (ae = { type: "text", text: k.textDelta }, de.push(ae)) : ae.text += k.textDelta), k.type === "reasoning-signature") {
          if (ae == null)
            throw new O({
              name: "InvalidStreamPart",
              message: "reasoning-signature without reasoning"
            });
          ae.signature = k.signature, ae = void 0;
        }
        if (k.type === "redacted-reasoning" && de.push({ type: "redacted", data: k.data }), k.type === "source" && (W.push(k.source), be.push(k.source)), k.type === "tool-call" && z.push(k), k.type === "tool-result" && M.push(k), k.type === "step-finish") {
          const F = Mn({
            text: ue,
            reasoning: de,
            tools: c ?? {},
            toolCalls: z,
            toolResults: M,
            messageId: k.messageId,
            generateMessageId: E
          }), pe = q.length;
          let fe = "done";
          pe + 1 < p && (v && k.finishReason === "length" && // only use continue when there are no tool calls:
          z.length === 0 ? fe = "continue" : (
            // there are tool calls:
            z.length > 0 && // all current tool calls have results:
            M.length === z.length && (fe = "tool-result")
          ));
          const Ve = {
            stepType: $,
            text: _e,
            reasoning: $n(de),
            reasoningDetails: de,
            sources: be,
            toolCalls: z,
            toolResults: M,
            finishReason: k.finishReason,
            usage: k.usage,
            warnings: k.warnings,
            logprobs: k.logprobs,
            request: k.request,
            response: {
              ...k.response,
              messages: [...Y.messages, ...F]
            },
            providerMetadata: k.experimental_providerMetadata,
            experimental_providerMetadata: k.experimental_providerMetadata,
            isContinued: k.isContinued
          };
          await (ee == null ? void 0 : ee(Ve)), q.push(Ve), z = [], M = [], _e = "", be = [], fe !== "done" && ($ = fe), fe !== "continue" && (Y.messages.push(...F), ue = "");
        }
        k.type === "finish" && (Y.id = k.response.id, Y.timestamp = k.response.timestamp, Y.modelId = k.response.modelId, Y.headers = k.response.headers, Ne = k.usage, we = k.finishReason);
      },
      async flush(V) {
        var ye;
        try {
          if (q.length === 0)
            return;
          const k = q[q.length - 1];
          A.warningsPromise.resolve(k.warnings), A.requestPromise.resolve(k.request), A.responsePromise.resolve(k.response), A.toolCallsPromise.resolve(k.toolCalls), A.toolResultsPromise.resolve(k.toolResults), A.providerMetadataPromise.resolve(
            k.experimental_providerMetadata
          ), A.reasoningPromise.resolve(k.reasoning), A.reasoningDetailsPromise.resolve(k.reasoningDetails);
          const F = we ?? "unknown", pe = Ne ?? {
            completionTokens: NaN,
            promptTokens: NaN,
            totalTokens: NaN
          };
          A.finishReasonPromise.resolve(F), A.usagePromise.resolve(pe), A.textPromise.resolve(ne), A.sourcesPromise.resolve(W), A.stepsPromise.resolve(q), await (oe == null ? void 0 : oe({
            finishReason: F,
            logprobs: void 0,
            usage: pe,
            text: ne,
            reasoning: k.reasoning,
            reasoningDetails: k.reasoningDetails,
            sources: k.sources,
            toolCalls: k.toolCalls,
            toolResults: k.toolResults,
            request: (ye = k.request) != null ? ye : {},
            response: k.response,
            warnings: k.warnings,
            providerMetadata: k.providerMetadata,
            experimental_providerMetadata: k.experimental_providerMetadata,
            steps: q
          })), te.setAttributes(
            G({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": F,
                "ai.response.text": { output: () => ne },
                "ai.response.toolCalls": {
                  output: () => {
                    var fe;
                    return (fe = k.toolCalls) != null && fe.length ? JSON.stringify(k.toolCalls) : void 0;
                  }
                },
                "ai.usage.promptTokens": pe.promptTokens,
                "ai.usage.completionTokens": pe.completionTokens
              }
            })
          );
        } catch (k) {
          V.error(k);
        } finally {
          te.end();
        }
      }
    }), B = jo();
    this.addStream = B.addStream, this.closeStream = B.close;
    let ge = B.stream;
    for (const V of g)
      ge = ge.pipeThrough(
        V({
          tools: c,
          stopStream() {
            B.terminate();
          }
        })
      );
    this.baseStream = ge.pipeThrough(Qp(h)).pipeThrough(K);
    const { maxRetries: me, retry: je } = At({
      maxRetries: a
    }), Ie = Kt(t), Ee = Wt({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...n, maxRetries: me }
    }), U = zt({
      prompt: {
        system: (se = h == null ? void 0 : h.injectIntoSystemPrompt({ system: o, model: e })) != null ? se : o,
        prompt: i,
        messages: u
      },
      tools: c
    }), A = this;
    Te({
      name: "ai.streamText",
      attributes: G({
        telemetry: t,
        attributes: {
          ...ke({ operationId: "ai.streamText", telemetry: t }),
          ...Ee,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: i, messages: u })
          },
          "ai.settings.maxSteps": p
        }
      }),
      tracer: Ie,
      endWhenDone: !1,
      fn: async (V) => {
        te = V;
        async function ye({
          currentStep: k,
          responseMessages: F,
          usage: pe,
          stepType: fe,
          previousStepText: Ve,
          hasLeadingWhitespace: jr,
          messageId: Ce
        }) {
          var dt;
          const Nt = F.length === 0 ? U.type : "messages", Yt = [
            ...U.messages,
            ...F
          ], Xt = await Vt({
            prompt: {
              type: Nt,
              system: U.system,
              messages: Yt
            },
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: (dt = e.supportsUrl) == null ? void 0 : dt.bind(e)
            // support 'this' context
          }), pt = {
            type: "regular",
            ...Fo({ tools: c, toolChoice: d, activeTools: y })
          }, {
            result: { stream: Or, warnings: xe, rawResponse: Me, request: na },
            doStreamSpan: jt,
            startTimestampMs: aa
          } = await je(
            () => Te({
              name: "ai.streamText.doStream",
              attributes: G({
                telemetry: t,
                attributes: {
                  ...ke({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...Ee,
                  "ai.prompt.format": {
                    input: () => Nt
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(Xt)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var L;
                      return (L = pt.tools) == null ? void 0 : L.map((he) => JSON.stringify(he));
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => pt.toolChoice != null ? JSON.stringify(pt.toolChoice) : void 0
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
              tracer: Ie,
              endWhenDone: !1,
              fn: async (L) => ({
                startTimestampMs: w(),
                // get before the call
                doStreamSpan: L,
                result: await e.doStream({
                  mode: pt,
                  ...Jt(n),
                  inputFormat: Nt,
                  responseFormat: h == null ? void 0 : h.responseFormat({ model: e }),
                  prompt: Xt,
                  providerMetadata: b,
                  abortSignal: s,
                  headers: r
                })
              })
            })
          ), pi = Kp({
            tools: c,
            generatorStream: Or,
            toolCallStreaming: m,
            tracer: Ie,
            telemetry: t,
            system: o,
            messages: Yt,
            repairToolCall: f,
            abortSignal: s
          }), sa = na ?? {}, mt = [], un = [], cn = [];
          let ft, ht = "unknown", st = {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          }, Qt, oa = !0, er = "", ia = fe === "continue" ? Ve : "", dn, $e = {
            id: T(),
            timestamp: _(),
            modelId: e.modelId
          }, Ot = "", la = !1, ua = !0, ca = !1;
          async function pn({
            controller: L,
            chunk: he
          }) {
            L.enqueue(he), er += he.textDelta, ia += he.textDelta, la = !0, ca = he.textDelta.trimEnd() !== he.textDelta;
          }
          A.addStream(
            pi.pipeThrough(
              new TransformStream({
                async transform(L, he) {
                  var Je, tr, gt;
                  if (oa) {
                    const ze = w() - aa;
                    oa = !1, jt.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": ze
                    }), jt.setAttributes({
                      "ai.response.msToFirstChunk": ze
                    }), he.enqueue({
                      type: "step-start",
                      messageId: Ce,
                      request: sa,
                      warnings: xe ?? []
                    });
                  }
                  if (L.type === "text-delta" && L.textDelta.length === 0)
                    return;
                  const da = L.type;
                  switch (da) {
                    case "text-delta": {
                      if (v) {
                        const ze = ua && jr ? L.textDelta.trimStart() : L.textDelta;
                        if (ze.length === 0)
                          break;
                        ua = !1, Ot += ze;
                        const Pr = Bo(Ot);
                        Pr != null && (Ot = Pr.suffix, await pn({
                          controller: he,
                          chunk: {
                            type: "text-delta",
                            textDelta: Pr.prefix + Pr.whitespace
                          }
                        }));
                      } else
                        await pn({ controller: he, chunk: L });
                      break;
                    }
                    case "reasoning": {
                      he.enqueue(L), ft == null ? (ft = {
                        type: "text",
                        text: L.textDelta
                      }, cn.push(ft)) : ft.text += L.textDelta;
                      break;
                    }
                    case "reasoning-signature": {
                      if (he.enqueue(L), ft == null)
                        throw new zp({
                          chunk: L,
                          message: "reasoning-signature without reasoning"
                        });
                      ft.signature = L.signature, ft = void 0;
                      break;
                    }
                    case "redacted-reasoning": {
                      he.enqueue(L), cn.push({
                        type: "redacted",
                        data: L.data
                      });
                      break;
                    }
                    case "tool-call": {
                      he.enqueue(L), mt.push(L);
                      break;
                    }
                    case "tool-result": {
                      he.enqueue(L), un.push(L);
                      break;
                    }
                    case "response-metadata": {
                      $e = {
                        id: (Je = L.id) != null ? Je : $e.id,
                        timestamp: (tr = L.timestamp) != null ? tr : $e.timestamp,
                        modelId: (gt = L.modelId) != null ? gt : $e.modelId
                      };
                      break;
                    }
                    case "finish": {
                      st = L.usage, ht = L.finishReason, Qt = L.experimental_providerMetadata, dn = L.logprobs;
                      const ze = w() - aa;
                      jt.addEvent("ai.stream.finish"), jt.setAttributes({
                        "ai.response.msToFinish": ze,
                        "ai.response.avgCompletionTokensPerSecond": 1e3 * st.completionTokens / ze
                      });
                      break;
                    }
                    case "source":
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      he.enqueue(L);
                      break;
                    }
                    case "error": {
                      he.enqueue(L), ht = "error";
                      break;
                    }
                    default: {
                      const ze = da;
                      throw new Error(`Unknown chunk type: ${ze}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(L) {
                  const he = mt.length > 0 ? JSON.stringify(mt) : void 0;
                  let Je = "done";
                  k + 1 < p && (v && ht === "length" && // only use continue when there are no tool calls:
                  mt.length === 0 ? Je = "continue" : (
                    // there are tool calls:
                    mt.length > 0 && // all current tool calls have results:
                    un.length === mt.length && (Je = "tool-result")
                  )), v && Ot.length > 0 && (Je !== "continue" || // when the next step is a regular step, publish the buffer
                  fe === "continue" && !la) && (await pn({
                    controller: L,
                    chunk: {
                      type: "text-delta",
                      textDelta: Ot
                    }
                  }), Ot = "");
                  try {
                    jt.setAttributes(
                      G({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": ht,
                          "ai.response.text": { output: () => er },
                          "ai.response.toolCalls": {
                            output: () => he
                          },
                          "ai.response.id": $e.id,
                          "ai.response.model": $e.modelId,
                          "ai.response.timestamp": $e.timestamp.toISOString(),
                          "ai.usage.promptTokens": st.promptTokens,
                          "ai.usage.completionTokens": st.completionTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [ht],
                          "gen_ai.response.id": $e.id,
                          "gen_ai.response.model": $e.modelId,
                          "gen_ai.usage.input_tokens": st.promptTokens,
                          "gen_ai.usage.output_tokens": st.completionTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    jt.end();
                  }
                  L.enqueue({
                    type: "step-finish",
                    finishReason: ht,
                    usage: st,
                    providerMetadata: Qt,
                    experimental_providerMetadata: Qt,
                    logprobs: dn,
                    request: sa,
                    response: {
                      ...$e,
                      headers: Me == null ? void 0 : Me.headers
                    },
                    warnings: xe,
                    isContinued: Je === "continue",
                    messageId: Ce
                  });
                  const tr = Ro(pe, st);
                  if (Je === "done")
                    L.enqueue({
                      type: "finish",
                      finishReason: ht,
                      usage: tr,
                      providerMetadata: Qt,
                      experimental_providerMetadata: Qt,
                      logprobs: dn,
                      response: {
                        ...$e,
                        headers: Me == null ? void 0 : Me.headers
                      }
                    }), A.closeStream();
                  else {
                    if (fe === "continue") {
                      const gt = F[F.length - 1];
                      typeof gt.content == "string" ? gt.content += er : gt.content.push({
                        text: er,
                        type: "text"
                      });
                    } else
                      F.push(
                        ...Mn({
                          text: er,
                          reasoning: cn,
                          tools: c ?? {},
                          toolCalls: mt,
                          toolResults: un,
                          messageId: Ce,
                          generateMessageId: E
                        })
                      );
                    await ye({
                      currentStep: k + 1,
                      responseMessages: F,
                      usage: tr,
                      stepType: Je,
                      previousStepText: ia,
                      hasLeadingWhitespace: ca,
                      messageId: (
                        // keep the same id when continuing a step:
                        Je === "continue" ? Ce : E()
                      )
                    });
                  }
                }
              })
            )
          );
        }
        await ye({
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
          messageId: E()
        });
      }
    }).catch((V) => {
      A.addStream(
        new ReadableStream({
          start(ye) {
            ye.enqueue({ type: "error", error: V }), ye.close();
          }
        })
      ), A.closeStream();
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
    return bt(
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
    return bt(
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
      throw new Do();
    return bt(
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
              s.enqueue(ie("text", a.textDelta));
              break;
            }
            case "reasoning": {
              r && s.enqueue(
                ie("reasoning", a.textDelta)
              );
              break;
            }
            case "redacted-reasoning": {
              r && s.enqueue(
                ie("redacted_reasoning", {
                  data: a.data
                })
              );
              break;
            }
            case "reasoning-signature": {
              r && s.enqueue(
                ie("reasoning_signature", {
                  signature: a.signature
                })
              );
              break;
            }
            case "source": {
              n && s.enqueue(
                ie("source", a.source)
              );
              break;
            }
            case "tool-call-streaming-start": {
              s.enqueue(
                ie("tool_call_streaming_start", {
                  toolCallId: a.toolCallId,
                  toolName: a.toolName
                })
              );
              break;
            }
            case "tool-call-delta": {
              s.enqueue(
                ie("tool_call_delta", {
                  toolCallId: a.toolCallId,
                  argsTextDelta: a.argsTextDelta
                })
              );
              break;
            }
            case "tool-call": {
              s.enqueue(
                ie("tool_call", {
                  toolCallId: a.toolCallId,
                  toolName: a.toolName,
                  args: a.args
                })
              );
              break;
            }
            case "tool-result": {
              s.enqueue(
                ie("tool_result", {
                  toolCallId: a.toolCallId,
                  result: a.result
                })
              );
              break;
            }
            case "error": {
              s.enqueue(
                ie("error", e(a.error))
              );
              break;
            }
            case "step-start": {
              s.enqueue(
                ie("start_step", {
                  messageId: a.messageId
                })
              );
              break;
            }
            case "step-finish": {
              s.enqueue(
                ie("finish_step", {
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
                ie("finish_message", {
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
              const i = o;
              throw new Error(`Unknown chunk type: ${i}`);
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
    sendReasoning: i,
    sendSources: u
  } = {}) {
    Xr({
      response: e,
      status: t,
      statusText: r,
      headers: Yr(n, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({
        data: a,
        getErrorMessage: s,
        sendUsage: o,
        sendReasoning: i,
        sendSources: u
      })
    });
  }
  pipeTextStreamToResponse(e, t) {
    Xr({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: Yr(t == null ? void 0 : t.headers, {
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
    return e != null && e.data ? Qn(e == null ? void 0 : e.data.stream, t) : t;
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
    sendSources: i
  } = {}) {
    return new Response(
      this.toDataStream({
        data: n,
        getErrorMessage: a,
        sendUsage: s,
        sendReasoning: o,
        sendSources: i
      }),
      {
        status: t,
        statusText: r,
        headers: It(e, {
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
      headers: It(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
};
function tm(e, t) {
  if (t.length === 0)
    return null;
  const r = e.indexOf(t);
  if (r !== -1)
    return r;
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e.substring(n);
    if (t.startsWith(a))
      return n;
  }
  return null;
}
function Tf({
  tagName: e,
  separator: t = `
`,
  startWithReasoning: r = !1
}) {
  const n = `<${e}>`, a = `</${e}>`;
  return {
    middlewareVersion: "v1",
    wrapGenerate: async ({ doGenerate: s }) => {
      const { text: o, ...i } = await s();
      if (o == null)
        return { text: o, ...i };
      const u = r ? n + o : o, c = new RegExp(`${n}(.*?)${a}`, "gs"), d = Array.from(u.matchAll(c));
      if (!d.length)
        return { text: u, ...i };
      const m = d.map((y) => y[1]).join(t);
      let g = u;
      for (let y = d.length - 1; y >= 0; y--) {
        const f = d[y], p = g.slice(0, f.index), h = g.slice(
          f.index + f[0].length
        );
        g = p + (p.length > 0 && h.length > 0 ? t : "") + h;
      }
      return { text: g, reasoning: m, ...i };
    },
    wrapStream: async ({ doStream: s }) => {
      const { stream: o, ...i } = await s();
      let u = !0, c = !0, d = !1, m = r, g = "";
      return {
        stream: o.pipeThrough(
          new TransformStream({
            transform: (y, f) => {
              if (y.type !== "text-delta") {
                f.enqueue(y);
                return;
              }
              g += y.textDelta;
              function p(h) {
                if (h.length > 0) {
                  const v = d && (m ? !u : !c) ? t : "";
                  f.enqueue({
                    type: m ? "reasoning" : "text-delta",
                    textDelta: v + h
                  }), d = !1, m ? u = !1 : c = !1;
                }
              }
              do {
                const h = m ? a : n, v = tm(g, h);
                if (v == null) {
                  p(g), g = "";
                  break;
                }
                if (p(g.slice(0, v)), v + h.length <= g.length)
                  g = g.slice(v + h.length), m = !m, d = !0;
                else {
                  g = g.slice(v);
                  break;
                }
              } while (!0);
            }
          })
        ),
        ...i
      };
    }
  };
}
var rm = ({
  model: e,
  middleware: t,
  modelId: r,
  providerId: n
}) => ai(t).reverse().reduce((a, s) => nm({ model: a, middleware: s, modelId: r, providerId: n }), e), nm = ({
  model: e,
  middleware: { transformParams: t, wrapGenerate: r, wrapStream: n },
  modelId: a,
  providerId: s
}) => {
  var o;
  async function i({
    params: u,
    type: c
  }) {
    return t ? await t({ params: u, type: c }) : u;
  }
  return {
    specificationVersion: "v1",
    provider: s ?? e.provider,
    modelId: a ?? e.modelId,
    defaultObjectGenerationMode: e.defaultObjectGenerationMode,
    supportsImageUrls: e.supportsImageUrls,
    supportsUrl: (o = e.supportsUrl) == null ? void 0 : o.bind(e),
    supportsStructuredOutputs: e.supportsStructuredOutputs,
    async doGenerate(u) {
      const c = await i({ params: u, type: "generate" }), d = async () => e.doGenerate(c);
      return r ? r({ doGenerate: d, params: c, model: e }) : d();
    },
    async doStream(u) {
      const c = await i({ params: u, type: "stream" }), d = async () => e.doStream(c);
      return n ? n({ doStream: d, params: c, model: e }) : d();
    }
  };
}, Sf = rm;
function If({
  messages: e,
  message: t
}) {
  return [
    ...e.length > 0 && e[e.length - 1].id === t.id ? e.slice(0, -1) : e,
    t
  ];
}
function Ef({
  messages: e,
  responseMessages: t,
  _internal: { currentDate: r = () => /* @__PURE__ */ new Date() } = {}
}) {
  var n, a, s, o;
  const i = structuredClone(e);
  for (const u of t) {
    const c = u.role, d = i[i.length - 1], m = d.role === "assistant";
    switch (c) {
      case "assistant":
        let g = function(f) {
          return (typeof u.content == "string" ? [] : u.content.filter((p) => p.type === "tool-call")).map((p) => ({
            state: "call",
            step: f,
            args: p.args,
            toolCallId: p.toolCallId,
            toolName: p.toolName
          }));
        };
        const y = typeof u.content == "string" ? u.content : u.content.filter((f) => f.type === "text").map((f) => f.text).join("");
        if (m) {
          const f = hc(
            d.toolInvocations
          );
          (n = d.parts) != null || (d.parts = []), d.content = y, y.length > 0 && d.parts.push({
            type: "text",
            text: y
          }), d.toolInvocations = [
            ...(a = d.toolInvocations) != null ? a : [],
            ...g(f === void 0 ? 0 : f + 1)
          ], g(f === void 0 ? 0 : f + 1).map((p) => ({
            type: "tool-invocation",
            toolInvocation: p
          })).forEach((p) => {
            d.parts.push(p);
          });
        } else
          i.push({
            role: "assistant",
            id: u.id,
            createdAt: r(),
            // generate a createdAt date for the message, will be overridden by the client
            content: y,
            toolInvocations: g(0),
            parts: [
              ...y.length > 0 ? [{ type: "text", text: y }] : [],
              ...g(0).map((f) => ({
                type: "tool-invocation",
                toolInvocation: f
              }))
            ]
          });
        break;
      case "tool": {
        if ((s = d.toolInvocations) != null || (d.toolInvocations = []), d.role !== "assistant")
          throw new Error(
            `Tool result must follow an assistant message: ${d.role}`
          );
        (o = d.parts) != null || (d.parts = []);
        for (const f of u.content) {
          const p = d.toolInvocations.find(
            (b) => b.toolCallId === f.toolCallId
          ), h = d.parts.find(
            (b) => b.type === "tool-invocation" && b.toolInvocation.toolCallId === f.toolCallId
          );
          if (!p)
            throw new Error("Tool call not found in previous message");
          p.state = "result";
          const v = p;
          v.result = f.result, h ? h.toolInvocation = v : d.parts.push({
            type: "tool-invocation",
            toolInvocation: v
          });
        }
        break;
      }
      default: {
        const f = c;
        throw new Error(`Unsupported message role: ${f}`);
      }
    }
  }
  return i;
}
function am({
  languageModels: e,
  textEmbeddingModels: t,
  imageModels: r,
  fallbackProvider: n
}) {
  return {
    languageModel(a) {
      if (e != null && a in e)
        return e[a];
      if (n)
        return n.languageModel(a);
      throw new rt({ modelId: a, modelType: "languageModel" });
    },
    textEmbeddingModel(a) {
      if (t != null && a in t)
        return t[a];
      if (n)
        return n.textEmbeddingModel(a);
      throw new rt({ modelId: a, modelType: "textEmbeddingModel" });
    },
    imageModel(a) {
      if (r != null && a in r)
        return r[a];
      if (n != null && n.imageModel)
        return n.imageModel(a);
      throw new rt({ modelId: a, modelType: "imageModel" });
    }
  };
}
var Cf = am, si = "AI_NoSuchProviderError", oi = `vercel.ai.error.${si}`, sm = Symbol.for(oi), ii, om = class extends rt {
  constructor({
    modelId: e,
    modelType: t,
    providerId: r,
    availableProviders: n,
    message: a = `No such provider: ${r} (available providers: ${n.join()})`
  }) {
    super({ errorName: si, modelId: e, modelType: t, message: a }), this[ii] = !0, this.providerId = r, this.availableProviders = n;
  }
  static isInstance(e) {
    return O.hasMarker(e, oi);
  }
};
ii = sm;
function Rf(e) {
  const t = new im();
  for (const [r, n] of Object.entries(e))
    t.registerProvider({ id: r, provider: n });
  return t;
}
var im = class {
  constructor() {
    this.providers = {};
  }
  registerProvider({
    id: e,
    provider: t
  }) {
    this.providers[e] = t;
  }
  getProvider(e) {
    const t = this.providers[e];
    if (t == null)
      throw new om({
        modelId: e,
        modelType: "languageModel",
        providerId: e,
        availableProviders: Object.keys(this.providers)
      });
    return t;
  }
  splitId(e, t) {
    const r = e.indexOf(":");
    if (r === -1)
      throw new rt({
        modelId: e,
        modelType: t,
        message: `Invalid ${t} id for registry: ${e} (must be in the format "providerId:modelId")`
      });
    return [e.slice(0, r), e.slice(r + 1)];
  }
  languageModel(e) {
    var t, r;
    const [n, a] = this.splitId(e, "languageModel"), s = (r = (t = this.getProvider(n)).languageModel) == null ? void 0 : r.call(t, a);
    if (s == null)
      throw new rt({ modelId: e, modelType: "languageModel" });
    return s;
  }
  textEmbeddingModel(e) {
    var t;
    const [r, n] = this.splitId(e, "textEmbeddingModel"), a = this.getProvider(r), s = (t = a.textEmbeddingModel) == null ? void 0 : t.call(a, n);
    if (s == null)
      throw new rt({
        modelId: e,
        modelType: "textEmbeddingModel"
      });
    return s;
  }
  imageModel(e) {
    var t;
    const [r, n] = this.splitId(e, "imageModel"), a = this.getProvider(r), s = (t = a.imageModel) == null ? void 0 : t.call(a, n);
    if (s == null)
      throw new rt({ modelId: e, modelType: "imageModel" });
    return s;
  }
  /**
   * @deprecated Use `textEmbeddingModel` instead.
   */
  textEmbedding(e) {
    return this.textEmbeddingModel(e);
  }
};
function Af(e) {
  return e;
}
function Nf(e, t, r = {
  throwErrorForEmptyVectors: !1
}) {
  const { throwErrorForEmptyVectors: n } = r;
  if (e.length !== t.length)
    throw new Error(
      `Vectors must have the same length (vector1: ${e.length} elements, vector2: ${t.length} elements)`
    );
  if (n && e.length === 0)
    throw new Q({
      parameter: "vector1",
      value: e,
      message: "Vectors cannot be empty"
    });
  const a = Na(e), s = Na(t);
  return a === 0 || s === 0 ? 0 : li(e, t) / (a * s);
}
function li(e, t) {
  return e.reduce(
    (r, n, a) => r + n * t[a],
    0
  );
}
function Na(e) {
  return Math.sqrt(li(e, e));
}
function jf({
  chunks: e,
  initialDelayInMs: t = 0,
  chunkDelayInMs: r = 0,
  _internal: n
}) {
  var a;
  const s = (a = n == null ? void 0 : n.delay) != null ? a : Fn;
  let o = 0;
  return new ReadableStream({
    async pull(i) {
      o < e.length ? (await s(o === 0 ? t : r), i.enqueue(e[o++])) : i.close();
    }
  });
}
function Of({ threadId: e, messageId: t }, r) {
  const n = new ReadableStream({
    async start(a) {
      var s;
      const o = new TextEncoder(), i = (m) => {
        a.enqueue(
          o.encode(
            Pt("assistant_message", m)
          )
        );
      }, u = (m) => {
        a.enqueue(
          o.encode(
            Pt("data_message", m)
          )
        );
      }, c = (m) => {
        a.enqueue(
          o.encode(Pt("error", m))
        );
      }, d = async (m) => {
        var g, y;
        let f;
        for await (const p of m)
          switch (p.event) {
            case "thread.message.created": {
              a.enqueue(
                o.encode(
                  Pt("assistant_message", {
                    id: p.data.id,
                    role: "assistant",
                    content: [{ type: "text", text: { value: "" } }]
                  })
                )
              );
              break;
            }
            case "thread.message.delta": {
              const h = (g = p.data.delta.content) == null ? void 0 : g[0];
              (h == null ? void 0 : h.type) === "text" && ((y = h.text) == null ? void 0 : y.value) != null && a.enqueue(
                o.encode(
                  Pt("text", h.text.value)
                )
              );
              break;
            }
            case "thread.run.completed":
            case "thread.run.requires_action": {
              f = p.data;
              break;
            }
          }
        return f;
      };
      a.enqueue(
        o.encode(
          Pt("assistant_control_data", {
            threadId: e,
            messageId: t
          })
        )
      );
      try {
        await r({
          sendMessage: i,
          sendDataMessage: u,
          forwardStream: d
        });
      } catch (m) {
        c((s = m.message) != null ? s : `${m}`);
      } finally {
        a.close();
      }
    },
    pull(a) {
    },
    cancel() {
    }
  });
  return new Response(n, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
var lm = {};
Xn(lm, {
  mergeIntoDataStream: () => dm,
  toDataStream: () => um,
  toDataStreamResponse: () => cm
});
function ui(e = {}) {
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
function ea(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        var a;
        if (typeof r == "string") {
          n.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && ja(
            (a = r.data) == null ? void 0 : a.chunk,
            n
          );
          return;
        }
        ja(r, n);
      }
    })
  ).pipeThrough(ui(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        n.enqueue(ie("text", r));
      }
    })
  );
}
function um(e, t) {
  return ea(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function cm(e, t) {
  var r;
  const n = ea(
    e,
    t == null ? void 0 : t.callbacks
  ).pipeThrough(new TextEncoderStream()), a = t == null ? void 0 : t.data, s = t == null ? void 0 : t.init, o = a ? Qn(a.stream, n) : n;
  return new Response(o, {
    status: (r = s == null ? void 0 : s.status) != null ? r : 200,
    statusText: s == null ? void 0 : s.statusText,
    headers: It(s == null ? void 0 : s.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function dm(e, t) {
  t.dataStream.merge(ea(e, t.callbacks));
}
function ja(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const n of r)
      n.type === "text" && t.enqueue(n.text);
  }
}
var pm = {};
Xn(pm, {
  mergeIntoDataStream: () => hm,
  toDataStream: () => mm,
  toDataStreamResponse: () => fm
});
function ta(e, t) {
  const r = gm();
  return Ui(e[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(n, a) {
        a.enqueue(r(n.delta));
      }
    })
  ).pipeThrough(ui(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (n, a) => {
        a.enqueue(ie("text", n));
      }
    })
  );
}
function mm(e, t) {
  return ta(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function fm(e, t = {}) {
  var r;
  const { init: n, data: a, callbacks: s } = t, o = ta(e, s).pipeThrough(
    new TextEncoderStream()
  ), i = a ? Qn(a.stream, o) : o;
  return new Response(i, {
    status: (r = n == null ? void 0 : n.status) != null ? r : 200,
    statusText: n == null ? void 0 : n.statusText,
    headers: It(n == null ? void 0 : n.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function hm(e, t) {
  t.dataStream.merge(ta(e, t.callbacks));
}
function gm() {
  let e = !0;
  return (t) => (e && (t = t.trimStart(), t && (e = !1)), t);
}
var ym = 15 * 1e3, Pf = class {
  constructor() {
    this.encoder = new TextEncoder(), this.controller = null, this.isClosed = !1, this.warningTimeout = null;
    const e = this;
    this.stream = new ReadableStream({
      start: async (t) => {
        e.controller = t, process.env.NODE_ENV === "development" && (e.warningTimeout = setTimeout(() => {
          console.warn(
            "The data stream is hanging. Did you forget to close it with `data.close()`?"
          );
        }, ym));
      },
      pull: (t) => {
      },
      cancel: (t) => {
        this.isClosed = !0;
      }
    });
  }
  async close() {
    if (this.isClosed)
      throw new Error("Data Stream has already been closed.");
    if (!this.controller)
      throw new Error("Stream controller is not initialized.");
    this.controller.close(), this.isClosed = !0, this.warningTimeout && clearTimeout(this.warningTimeout);
  }
  append(e) {
    if (this.isClosed)
      throw new Error("Data Stream has already been closed.");
    if (!this.controller)
      throw new Error("Stream controller is not initialized.");
    this.controller.enqueue(
      this.encoder.encode(ie("data", [e]))
    );
  }
  appendMessageAnnotation(e) {
    if (this.isClosed)
      throw new Error("Data Stream has already been closed.");
    if (!this.controller)
      throw new Error("Stream controller is not initialized.");
    this.controller.enqueue(
      this.encoder.encode(ie("message_annotations", [e]))
    );
  }
}, vm = l.object({
  type: l.literal("error"),
  error: l.object({
    type: l.string(),
    message: l.string()
  })
}), Oa = Vn({
  errorSchema: vm,
  errorToMessage: (e) => e.error.message
});
function _m(e) {
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
      throw new re({
        functionality: `Unsupported tool choice type: ${u}`
      });
    }
  }
}
function bm({
  prompt: e
}) {
  var t, r, n, a;
  const s = /* @__PURE__ */ new Set(), o = wm(e);
  let i;
  const u = [];
  function c(d) {
    var m;
    const g = d == null ? void 0 : d.anthropic;
    return (m = g == null ? void 0 : g.cacheControl) != null ? m : g == null ? void 0 : g.cache_control;
  }
  for (let d = 0; d < o.length; d++) {
    const m = o[d], g = d === o.length - 1, y = m.type;
    switch (y) {
      case "system": {
        if (i != null)
          throw new re({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        i = m.messages.map(({ content: f, providerMetadata: p }) => ({
          type: "text",
          text: f,
          cache_control: c(p)
        }));
        break;
      }
      case "user": {
        const f = [];
        for (const p of m.messages) {
          const { role: h, content: v } = p;
          switch (h) {
            case "user": {
              for (let b = 0; b < v.length; b++) {
                const w = v[b], _ = b === v.length - 1, T = (t = c(w.providerMetadata)) != null ? t : _ ? c(p.providerMetadata) : void 0;
                switch (w.type) {
                  case "text": {
                    f.push({
                      type: "text",
                      text: w.text,
                      cache_control: T
                    });
                    break;
                  }
                  case "image": {
                    if (w.image instanceof URL)
                      throw new re({
                        functionality: "Image URLs in user messages"
                      });
                    f.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: (r = w.mimeType) != null ? r : "image/jpeg",
                        data: Ut(w.image)
                      },
                      cache_control: T
                    });
                    break;
                  }
                  case "file": {
                    if (w.data instanceof URL)
                      throw new re({
                        functionality: "Image URLs in user messages"
                      });
                    if (w.mimeType !== "application/pdf")
                      throw new re({
                        functionality: "Non-PDF files in user messages"
                      });
                    s.add("pdfs-2024-09-25"), f.push({
                      type: "document",
                      source: {
                        type: "base64",
                        media_type: "application/pdf",
                        data: w.data
                      },
                      cache_control: T
                    });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let b = 0; b < v.length; b++) {
                const w = v[b], _ = b === v.length - 1, T = (n = c(w.providerMetadata)) != null ? n : _ ? c(p.providerMetadata) : void 0, E = w.content != null ? w.content.map((C) => {
                  var j;
                  switch (C.type) {
                    case "text":
                      return {
                        type: "text",
                        text: C.text,
                        cache_control: void 0
                      };
                    case "image":
                      return {
                        type: "image",
                        source: {
                          type: "base64",
                          media_type: (j = C.mimeType) != null ? j : "image/jpeg",
                          data: C.data
                        },
                        cache_control: void 0
                      };
                  }
                }) : JSON.stringify(w.result);
                f.push({
                  type: "tool_result",
                  tool_use_id: w.toolCallId,
                  content: E,
                  is_error: w.isError,
                  cache_control: T
                });
              }
              break;
            }
            default: {
              const b = h;
              throw new Error(`Unsupported role: ${b}`);
            }
          }
        }
        u.push({ role: "user", content: f });
        break;
      }
      case "assistant": {
        const f = [];
        for (let p = 0; p < m.messages.length; p++) {
          const h = m.messages[p], v = p === m.messages.length - 1, { content: b } = h;
          for (let w = 0; w < b.length; w++) {
            const _ = b[w], T = w === b.length - 1, E = (a = c(_.providerMetadata)) != null ? a : T ? c(h.providerMetadata) : void 0;
            switch (_.type) {
              case "text": {
                f.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    g && v && T ? _.text.trim() : _.text
                  ),
                  cache_control: E
                });
                break;
              }
              case "reasoning": {
                f.push({
                  type: "thinking",
                  thinking: _.text,
                  signature: _.signature,
                  cache_control: E
                });
                break;
              }
              case "redacted-reasoning": {
                f.push({
                  type: "redacted_thinking",
                  data: _.data,
                  cache_control: E
                });
                break;
              }
              case "tool-call": {
                f.push({
                  type: "tool_use",
                  id: _.toolCallId,
                  name: _.toolName,
                  input: _.args,
                  cache_control: E
                });
                break;
              }
              default: {
                const C = _;
                throw new Error(`Unsupported part: ${C}`);
              }
            }
          }
        }
        u.push({ role: "assistant", content: f });
        break;
      }
      default: {
        const f = y;
        throw new Error(`Unsupported type: ${f}`);
      }
    }
  }
  return {
    prompt: { system: i, messages: u },
    betas: s
  };
}
function wm(e) {
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
function Pa(e) {
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
var xm = class {
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
    presencePenalty: i,
    stopSequences: u,
    responseFormat: c,
    seed: d,
    providerMetadata: m
  }) {
    var g, y, f;
    const p = e.type, h = [];
    o != null && h.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && h.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), d != null && h.push({
      type: "unsupported-setting",
      setting: "seed"
    }), c != null && c.type !== "text" && h.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: v, betas: b } = bm({
      prompt: t
    }), w = Sm.safeParse(
      (g = m == null ? void 0 : m.anthropic) == null ? void 0 : g.thinking
    );
    if (!w.success)
      throw new Un({
        argument: "providerOptions.anthropic.thinking",
        message: "invalid thinking options",
        cause: w.error
      });
    const _ = ((y = w.data) == null ? void 0 : y.type) === "enabled", T = (f = w.data) == null ? void 0 : f.budgetTokens, E = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: r,
      temperature: n,
      top_k: s,
      top_p: a,
      stop_sequences: u,
      // provider specific settings:
      ..._ && {
        thinking: { type: "enabled", budget_tokens: T }
      },
      // prompt:
      system: v.system,
      messages: v.messages
    };
    if (_) {
      if (T == null)
        throw new re({
          functionality: "thinking requires a budget"
        });
      E.temperature != null && (E.temperature = void 0, h.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), s != null && (E.top_k = void 0, h.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), a != null && (E.top_p = void 0, h.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), E.max_tokens = r + T;
    }
    switch (p) {
      case "regular": {
        const {
          tools: C,
          tool_choice: j,
          toolWarnings: oe,
          betas: ee
        } = _m(e);
        return {
          args: { ...E, tools: C, tool_choice: j },
          warnings: [...h, ...oe],
          betas: /* @__PURE__ */ new Set([...b, ...ee])
        };
      }
      case "object-json":
        throw new re({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: C, description: j, parameters: oe } = e.tool;
        return {
          args: {
            ...E,
            tools: [{ name: C, description: j, input_schema: oe }],
            tool_choice: { type: "tool", name: C }
          },
          warnings: h,
          betas: b
        };
      }
      default: {
        const C = p;
        throw new Error(`Unsupported type: ${C}`);
      }
    }
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return He(
      await Ki(this.config.headers),
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
    const { args: s, warnings: o, betas: i } = await this.getArgs(e), { responseHeaders: u, value: c } = await Fe({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: i, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: Oa,
      successfulResponseHandler: Ct(
        km
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: d, ...m } = s;
    let g = "";
    for (const p of c.content)
      p.type === "text" && (g += p.text);
    let y;
    if (c.content.some((p) => p.type === "tool_use")) {
      y = [];
      for (const p of c.content)
        p.type === "tool_use" && y.push({
          toolCallType: "function",
          toolCallId: p.id,
          toolName: p.name,
          args: JSON.stringify(p.input)
        });
    }
    const f = c.content.filter(
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
      text: g,
      reasoning: f.length > 0 ? f : void 0,
      toolCalls: y,
      finishReason: Pa(c.stop_reason),
      usage: {
        promptTokens: c.usage.input_tokens,
        completionTokens: c.usage.output_tokens
      },
      rawCall: { rawPrompt: d, rawSettings: m },
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
    const { args: t, warnings: r, betas: n } = await this.getArgs(e), a = { ...t, stream: !0 }, { responseHeaders: s, value: o } = await Fe({
      url: this.buildRequestUrl(!0),
      headers: await this.getHeaders({ betas: n, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: Oa,
      successfulResponseHandler: nn(
        Tm
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...u } = t;
    let c = "unknown";
    const d = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, m = {};
    let g, y;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          transform(f, p) {
            var h, v, b, w;
            if (!f.success) {
              p.enqueue({ type: "error", error: f.error });
              return;
            }
            const _ = f.value;
            switch (_.type) {
              case "ping":
                return;
              case "content_block_start": {
                const T = _.content_block.type;
                switch (y = T, T) {
                  case "text":
                  case "thinking":
                    return;
                  case "redacted_thinking": {
                    p.enqueue({
                      type: "redacted-reasoning",
                      data: _.content_block.data
                    });
                    return;
                  }
                  case "tool_use": {
                    m[_.index] = {
                      toolCallId: _.content_block.id,
                      toolName: _.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const E = T;
                    throw new Error(
                      `Unsupported content block type: ${E}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (m[_.index] != null) {
                  const T = m[_.index];
                  p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: T.toolCallId,
                    toolName: T.toolName,
                    args: T.jsonText
                  }), delete m[_.index];
                }
                y = void 0;
                return;
              }
              case "content_block_delta": {
                const T = _.delta.type;
                switch (T) {
                  case "text_delta": {
                    p.enqueue({
                      type: "text-delta",
                      textDelta: _.delta.text
                    });
                    return;
                  }
                  case "thinking_delta": {
                    p.enqueue({
                      type: "reasoning",
                      textDelta: _.delta.thinking
                    });
                    return;
                  }
                  case "signature_delta": {
                    y === "thinking" && p.enqueue({
                      type: "reasoning-signature",
                      signature: _.delta.signature
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const E = m[_.index];
                    p.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: E.toolCallId,
                      toolName: E.toolName,
                      argsTextDelta: _.delta.partial_json
                    }), E.jsonText += _.delta.partial_json;
                    return;
                  }
                  default: {
                    const E = T;
                    throw new Error(
                      `Unsupported delta type: ${E}`
                    );
                  }
                }
              }
              case "message_start": {
                d.promptTokens = _.message.usage.input_tokens, d.completionTokens = _.message.usage.output_tokens, g = {
                  anthropic: {
                    cacheCreationInputTokens: (h = _.message.usage.cache_creation_input_tokens) != null ? h : null,
                    cacheReadInputTokens: (v = _.message.usage.cache_read_input_tokens) != null ? v : null
                  }
                }, p.enqueue({
                  type: "response-metadata",
                  id: (b = _.message.id) != null ? b : void 0,
                  modelId: (w = _.message.model) != null ? w : void 0
                });
                return;
              }
              case "message_delta": {
                d.completionTokens = _.usage.output_tokens, c = Pa(_.delta.stop_reason);
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
                p.enqueue({ type: "error", error: _.error });
                return;
              }
              default: {
                const T = _;
                throw new Error(`Unsupported chunk type: ${T}`);
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
}, km = l.object({
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
        type: l.literal("thinking"),
        thinking: l.string(),
        signature: l.string()
      }),
      l.object({
        type: l.literal("redacted_thinking"),
        data: l.string()
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
}), Tm = l.discriminatedUnion("type", [
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
        type: l.literal("thinking"),
        thinking: l.string()
      }),
      l.object({
        type: l.literal("tool_use"),
        id: l.string(),
        name: l.string()
      }),
      l.object({
        type: l.literal("redacted_thinking"),
        data: l.string()
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
      }),
      l.object({
        type: l.literal("thinking_delta"),
        thinking: l.string()
      }),
      l.object({
        type: l.literal("signature_delta"),
        signature: l.string()
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
]), Sm = l.object({
  type: l.union([l.literal("enabled"), l.literal("disabled")]),
  budgetTokens: l.number().optional()
}).optional(), Im = l.object({
  command: l.string(),
  restart: l.boolean().optional()
});
function Em(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20241022",
    args: {},
    parameters: Im,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Cm = l.object({
  command: l.enum(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: l.string(),
  file_text: l.string().optional(),
  insert_line: l.number().int().optional(),
  new_str: l.string().optional(),
  old_str: l.string().optional(),
  view_range: l.array(l.number().int()).optional()
});
function Rm(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20241022",
    args: {},
    parameters: Cm,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Am = l.object({
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
function Nm(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20241022",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Am,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var jm = l.object({
  action: l.enum([
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
  coordinate: l.tuple([l.number().int(), l.number().int()]).optional(),
  duration: l.number().optional(),
  scroll_amount: l.number().optional(),
  scroll_direction: l.enum(["up", "down", "left", "right"]).optional(),
  start_coordinate: l.tuple([l.number().int(), l.number().int()]).optional(),
  text: l.string().optional()
});
function Om(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20250124",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: jm,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Pm = {
  bash_20241022: Em,
  textEditor_20241022: Rm,
  computer_20241022: Nm,
  computer_20250124: Om
};
function Mm(e = {}) {
  var t;
  const r = (t = Jn(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", n = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": Bn({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), a = (o, i = {}) => new xm(o, i, {
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
    throw new rt({ modelId: o, modelType: "textEmbeddingModel" });
  }, s.tools = Pm, s;
}
Mm();
function $m(e) {
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
                  image_url: o.image instanceof URL ? o.image.toString() : `data:${(i = o.mimeType) != null ? i : "image/jpeg"};base64,${Ut(o.image)}`
                };
              case "file":
                throw new re({
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
            case "redacted-reasoning":
            case "reasoning":
              break;
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
function Ma(e) {
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
var Dm = l.object({
  object: l.literal("error"),
  message: l.string(),
  type: l.string(),
  param: l.string().nullable(),
  code: l.string().nullable()
}), Dn = Vn({
  errorSchema: Dm,
  errorToMessage: (e) => e.message
});
function $a({
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
function qm(e) {
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
      throw new re({
        functionality: `Unsupported tool choice type: ${i}`
      });
    }
  }
}
var Um = class {
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
    const m = e.type, g = [];
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
    const y = {
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
      messages: $m(t)
    };
    switch (m) {
      case "regular": {
        const { tools: f, tool_choice: p, toolWarnings: h } = qm(e);
        return {
          args: { ...y, tools: f, tool_choice: p },
          warnings: [...g, ...h]
        };
      }
      case "object-json":
        return {
          args: {
            ...y,
            response_format: { type: "json_object" }
          },
          warnings: g
        };
      case "object-tool":
        return {
          args: {
            ...y,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: g
        };
      default: {
        const f = m;
        throw new Error(`Unsupported type: ${f}`);
      }
    }
  }
  async doGenerate(e) {
    var t;
    const { args: r, warnings: n } = this.getArgs(e), { responseHeaders: a, value: s } = await Fe({
      url: `${this.config.baseURL}/chat/completions`,
      headers: He(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: Dn,
      successfulResponseHandler: Ct(
        Zm
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = r, u = s.choices[0];
    let c = Da(u.message.content);
    const d = o[o.length - 1];
    return d.role === "assistant" && (c != null && c.startsWith(d.content)) && (c = c.slice(d.content.length)), {
      text: c,
      toolCalls: (t = u.message.tool_calls) == null ? void 0 : t.map((m) => ({
        toolCallType: "function",
        toolCallId: m.id,
        toolName: m.function.name,
        args: m.function.arguments
      })),
      finishReason: Ma(u.finish_reason),
      usage: {
        promptTokens: s.usage.prompt_tokens,
        completionTokens: s.usage.completion_tokens
      },
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: a },
      request: { body: JSON.stringify(r) },
      response: $a(s),
      warnings: n
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = { ...t, stream: !0 }, { responseHeaders: a, value: s } = await Fe({
      url: `${this.config.baseURL}/chat/completions`,
      headers: He(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Dn,
      successfulResponseHandler: nn(
        Lm
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d = 0, m = !1;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(g, y) {
            if (!g.success) {
              y.enqueue({ type: "error", error: g.error });
              return;
            }
            d++;
            const f = g.value;
            d === 1 && y.enqueue({
              type: "response-metadata",
              ...$a(f)
            }), f.usage != null && (c = {
              promptTokens: f.usage.prompt_tokens,
              completionTokens: f.usage.completion_tokens
            });
            const p = f.choices[0];
            if ((p == null ? void 0 : p.finish_reason) != null && (u = Ma(p.finish_reason)), (p == null ? void 0 : p.delta) == null)
              return;
            const h = p.delta, v = Da(h.content);
            if (d <= 2) {
              const b = o[o.length - 1];
              if (b.role === "assistant" && v === b.content.trimEnd()) {
                v.length < b.content.length && (m = !0);
                return;
              }
            }
            if (v != null && (y.enqueue({
              type: "text-delta",
              textDelta: m ? v.trimStart() : v
            }), m = !1), h.tool_calls != null)
              for (const b of h.tool_calls)
                y.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: b.id,
                  toolName: b.function.name,
                  argsTextDelta: b.function.arguments
                }), y.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: b.id,
                  toolName: b.function.name,
                  args: b.function.arguments
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
};
function Da(e) {
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
var ci = l.union([
  l.string(),
  l.array(
    l.discriminatedUnion("type", [
      l.object({
        type: l.literal("text"),
        text: l.string()
      }),
      l.object({
        type: l.literal("image_url"),
        image_url: l.union([
          l.string(),
          l.object({
            url: l.string(),
            detail: l.string().nullable()
          })
        ])
      }),
      l.object({
        type: l.literal("reference"),
        reference_ids: l.array(l.number())
      })
    ])
  )
]).nullish(), Zm = l.object({
  id: l.string().nullish(),
  created: l.number().nullish(),
  model: l.string().nullish(),
  choices: l.array(
    l.object({
      message: l.object({
        role: l.literal("assistant"),
        content: ci,
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
}), Lm = l.object({
  id: l.string().nullish(),
  created: l.number().nullish(),
  model: l.string().nullish(),
  choices: l.array(
    l.object({
      delta: l.object({
        role: l.enum(["assistant"]).optional(),
        content: ci,
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
}), Fm = class {
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
      throw new bs({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await Fe({
      url: `${this.config.baseURL}/embeddings`,
      headers: He(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Dn,
      successfulResponseHandler: Ct(
        Bm
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
}, Bm = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function Vm(e = {}) {
  var t;
  const r = (t = Jn(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", n = () => ({
    Authorization: `Bearer ${Bn({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (i, u = {}) => new Um(i, u, {
    provider: "mistral.chat",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = (i, u = {}) => new Fm(i, u, {
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
Vm();
function Jm({
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
            var i, u, c;
            switch (o.type) {
              case "text":
                return { type: "text", text: o.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: {
                    url: o.image instanceof URL ? o.image.toString() : `data:${(i = o.mimeType) != null ? i : "image/jpeg"};base64,${Ut(o.image)}`,
                    // OpenAI specific extension: image detail
                    detail: (c = (u = o.providerMetadata) == null ? void 0 : u.openai) == null ? void 0 : c.imageDetail
                  }
                };
              case "file": {
                if (o.data instanceof URL)
                  throw new re({
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
                    throw new re({
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
        const i = [];
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
        if (t) {
          if (i.length > 1)
            throw new re({
              functionality: "useLegacyFunctionCalling with multiple tool calls in one message"
            });
          n.push({
            role: "assistant",
            content: o,
            function_call: i.length > 0 ? i[0].function : void 0
          });
        } else
          n.push({
            role: "assistant",
            content: o,
            tool_calls: i.length > 0 ? i : void 0
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
function qa(e) {
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
function en(e) {
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
var ra = l.object({
  error: l.object({
    message: l.string(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l.string().nullish(),
    param: l.any().nullish(),
    code: l.union([l.string(), l.number()]).nullish()
  })
}), Gt = Vn({
  errorSchema: ra,
  errorToMessage: (e) => e.error.message
});
function tn({
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
function zm({
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
    for (const m of a)
      m.type === "provider-defined" ? s.push({ type: "unsupported-tool", tool: m }) : c.push({
        name: m.name,
        description: m.description,
        parameters: m.parameters
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
        throw new re({
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
        strict: r ? !0 : void 0
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
      throw new re({
        functionality: `Unsupported tool choice type: ${c}`
      });
    }
  }
}
var Gm = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get supportsStructuredOutputs() {
    var e;
    return (e = this.settings.structuredOutputs) != null ? e : qn(this.modelId);
  }
  get defaultObjectGenerationMode() {
    return Km(this.modelId) ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
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
    providerMetadata: m
  }) {
    var g, y, f, p, h, v, b, w;
    const _ = e.type, T = [];
    s != null && T.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (c == null ? void 0 : c.type) === "json" && c.schema != null && !this.supportsStructuredOutputs && T.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const E = this.settings.useLegacyFunctionCalling;
    if (E && this.settings.parallelToolCalls === !0)
      throw new re({
        functionality: "useLegacyFunctionCalling with parallelToolCalls"
      });
    if (E && this.supportsStructuredOutputs)
      throw new re({
        functionality: "structuredOutputs with useLegacyFunctionCalling"
      });
    Ua(this.modelId) === "remove" && t.some((j) => j.role === "system") && T.push({
      type: "other",
      message: "system messages are removed for this model"
    });
    const C = {
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
      response_format: (c == null ? void 0 : c.type) === "json" ? this.supportsStructuredOutputs && c.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: c.schema,
          strict: !0,
          name: (g = c.name) != null ? g : "response",
          description: c.description
        }
      } : { type: "json_object" } : void 0,
      stop: u,
      seed: d,
      // openai specific settings:
      // TODO remove in next major version; we auto-map maxTokens now
      max_completion_tokens: (y = m == null ? void 0 : m.openai) == null ? void 0 : y.maxCompletionTokens,
      store: (f = m == null ? void 0 : m.openai) == null ? void 0 : f.store,
      metadata: (p = m == null ? void 0 : m.openai) == null ? void 0 : p.metadata,
      prediction: (h = m == null ? void 0 : m.openai) == null ? void 0 : h.prediction,
      reasoning_effort: (b = (v = m == null ? void 0 : m.openai) == null ? void 0 : v.reasoningEffort) != null ? b : this.settings.reasoningEffort,
      // messages:
      messages: Jm({
        prompt: t,
        useLegacyFunctionCalling: E,
        systemMessageMode: Ua(this.modelId)
      })
    };
    switch (qn(this.modelId) && (C.temperature != null && (C.temperature = void 0, T.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), C.top_p != null && (C.top_p = void 0, T.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })), C.frequency_penalty != null && (C.frequency_penalty = void 0, T.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), C.presence_penalty != null && (C.presence_penalty = void 0, T.push({
      type: "unsupported-setting",
      setting: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), C.logit_bias != null && (C.logit_bias = void 0, T.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), C.logprobs != null && (C.logprobs = void 0, T.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    })), C.top_logprobs != null && (C.top_logprobs = void 0, T.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), C.max_tokens != null && (C.max_completion_tokens == null && (C.max_completion_tokens = C.max_tokens), C.max_tokens = void 0)), _) {
      case "regular": {
        const { tools: j, tool_choice: oe, functions: ee, function_call: se, toolWarnings: _e } = zm({
          mode: e,
          useLegacyFunctionCalling: E,
          structuredOutputs: this.supportsStructuredOutputs
        });
        return {
          args: {
            ...C,
            tools: j,
            tool_choice: oe,
            functions: ee,
            function_call: se
          },
          warnings: [...T, ..._e]
        };
      }
      case "object-json":
        return {
          args: {
            ...C,
            response_format: this.supportsStructuredOutputs && e.schema != null ? {
              type: "json_schema",
              json_schema: {
                schema: e.schema,
                strict: !0,
                name: (w = e.name) != null ? w : "response",
                description: e.description
              }
            } : { type: "json_object" }
          },
          warnings: T
        };
      case "object-tool":
        return {
          args: E ? {
            ...C,
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
            ...C,
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
          warnings: T
        };
      default: {
        const j = _;
        throw new Error(`Unsupported type: ${j}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o, i, u;
    const { args: c, warnings: d } = this.getArgs(e), { responseHeaders: m, value: g } = await Fe({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: He(this.config.headers(), e.headers),
      body: c,
      failedResponseHandler: Gt,
      successfulResponseHandler: Ct(
        Hm
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: y, ...f } = c, p = g.choices[0], h = (t = g.usage) == null ? void 0 : t.completion_tokens_details, v = (r = g.usage) == null ? void 0 : r.prompt_tokens_details, b = { openai: {} };
    return (h == null ? void 0 : h.reasoning_tokens) != null && (b.openai.reasoningTokens = h == null ? void 0 : h.reasoning_tokens), (h == null ? void 0 : h.accepted_prediction_tokens) != null && (b.openai.acceptedPredictionTokens = h == null ? void 0 : h.accepted_prediction_tokens), (h == null ? void 0 : h.rejected_prediction_tokens) != null && (b.openai.rejectedPredictionTokens = h == null ? void 0 : h.rejected_prediction_tokens), (v == null ? void 0 : v.cached_tokens) != null && (b.openai.cachedPromptTokens = v == null ? void 0 : v.cached_tokens), {
      text: (n = p.message.content) != null ? n : void 0,
      toolCalls: this.settings.useLegacyFunctionCalling && p.message.function_call ? [
        {
          toolCallType: "function",
          toolCallId: Mt(),
          toolName: p.message.function_call.name,
          args: p.message.function_call.arguments
        }
      ] : (a = p.message.tool_calls) == null ? void 0 : a.map((w) => {
        var _;
        return {
          toolCallType: "function",
          toolCallId: (_ = w.id) != null ? _ : Mt(),
          toolName: w.function.name,
          args: w.function.arguments
        };
      }),
      finishReason: en(p.finish_reason),
      usage: {
        promptTokens: (o = (s = g.usage) == null ? void 0 : s.prompt_tokens) != null ? o : NaN,
        completionTokens: (u = (i = g.usage) == null ? void 0 : i.completion_tokens) != null ? u : NaN
      },
      rawCall: { rawPrompt: y, rawSettings: f },
      rawResponse: { headers: m },
      request: { body: JSON.stringify(c) },
      response: tn(g),
      warnings: d,
      logprobs: qa(p.logprobs),
      providerMetadata: b
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
              for (const b of p.toolCalls)
                v.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: b.toolCallId,
                  toolName: b.toolName,
                  argsTextDelta: b.args
                }), v.enqueue({
                  type: "tool-call",
                  ...b
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
    }, { responseHeaders: a, value: s } = await Fe({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: He(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Gt,
      successfulResponseHandler: nn(
        Wm
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t, u = [];
    let c = "unknown", d = {
      promptTokens: void 0,
      completionTokens: void 0
    }, m, g = !0;
    const { useLegacyFunctionCalling: y } = this.settings, f = { openai: {} };
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(p, h) {
            var v, b, w, _, T, E, C, j, oe, ee, se, _e;
            if (!p.success) {
              c = "error", h.enqueue({ type: "error", error: p.error });
              return;
            }
            const ue = p.value;
            if ("error" in ue) {
              c = "error", h.enqueue({ type: "error", error: ue.error });
              return;
            }
            if (g && (g = !1, h.enqueue({
              type: "response-metadata",
              ...tn(ue)
            })), ue.usage != null) {
              const {
                prompt_tokens: W,
                completion_tokens: Y,
                prompt_tokens_details: z,
                completion_tokens_details: M
              } = ue.usage;
              d = {
                promptTokens: W ?? void 0,
                completionTokens: Y ?? void 0
              }, (M == null ? void 0 : M.reasoning_tokens) != null && (f.openai.reasoningTokens = M == null ? void 0 : M.reasoning_tokens), (M == null ? void 0 : M.accepted_prediction_tokens) != null && (f.openai.acceptedPredictionTokens = M == null ? void 0 : M.accepted_prediction_tokens), (M == null ? void 0 : M.rejected_prediction_tokens) != null && (f.openai.rejectedPredictionTokens = M == null ? void 0 : M.rejected_prediction_tokens), (z == null ? void 0 : z.cached_tokens) != null && (f.openai.cachedPromptTokens = z == null ? void 0 : z.cached_tokens);
            }
            const ne = ue.choices[0];
            if ((ne == null ? void 0 : ne.finish_reason) != null && (c = en(ne.finish_reason)), (ne == null ? void 0 : ne.delta) == null)
              return;
            const de = ne.delta;
            de.content != null && h.enqueue({
              type: "text-delta",
              textDelta: de.content
            });
            const ae = qa(
              ne == null ? void 0 : ne.logprobs
            );
            ae != null && ae.length && (m === void 0 && (m = []), m.push(...ae));
            const be = y && de.function_call != null ? [
              {
                type: "function",
                id: Mt(),
                function: de.function_call,
                index: 0
              }
            ] : de.tool_calls;
            if (be != null)
              for (const W of be) {
                const Y = W.index;
                if (u[Y] == null) {
                  if (W.type !== "function")
                    throw new mn({
                      data: W,
                      message: "Expected 'function' type."
                    });
                  if (W.id == null)
                    throw new mn({
                      data: W,
                      message: "Expected 'id' to be a string."
                    });
                  if (((v = W.function) == null ? void 0 : v.name) == null)
                    throw new mn({
                      data: W,
                      message: "Expected 'function.name' to be a string."
                    });
                  u[Y] = {
                    id: W.id,
                    type: "function",
                    function: {
                      name: W.function.name,
                      arguments: (b = W.function.arguments) != null ? b : ""
                    },
                    hasFinished: !1
                  };
                  const M = u[Y];
                  ((w = M.function) == null ? void 0 : w.name) != null && ((_ = M.function) == null ? void 0 : _.arguments) != null && (M.function.arguments.length > 0 && h.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: M.id,
                    toolName: M.function.name,
                    argsTextDelta: M.function.arguments
                  }), ga(M.function.arguments) && (h.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (T = M.id) != null ? T : Mt(),
                    toolName: M.function.name,
                    args: M.function.arguments
                  }), M.hasFinished = !0));
                  continue;
                }
                const z = u[Y];
                z.hasFinished || (((E = W.function) == null ? void 0 : E.arguments) != null && (z.function.arguments += (j = (C = W.function) == null ? void 0 : C.arguments) != null ? j : ""), h.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: z.id,
                  toolName: z.function.name,
                  argsTextDelta: (oe = W.function.arguments) != null ? oe : ""
                }), ((ee = z.function) == null ? void 0 : ee.name) != null && ((se = z.function) == null ? void 0 : se.arguments) != null && ga(z.function.arguments) && (h.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (_e = z.id) != null ? _e : Mt(),
                  toolName: z.function.name,
                  args: z.function.arguments
                }), z.hasFinished = !0));
              }
          },
          flush(p) {
            var h, v;
            p.enqueue({
              type: "finish",
              finishReason: c,
              logprobs: m,
              usage: {
                promptTokens: (h = d.promptTokens) != null ? h : NaN,
                completionTokens: (v = d.completionTokens) != null ? v : NaN
              },
              ...f != null ? { providerMetadata: f } : {}
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
}, di = l.object({
  prompt_tokens: l.number().nullish(),
  completion_tokens: l.number().nullish(),
  prompt_tokens_details: l.object({
    cached_tokens: l.number().nullish()
  }).nullish(),
  completion_tokens_details: l.object({
    reasoning_tokens: l.number().nullish(),
    accepted_prediction_tokens: l.number().nullish(),
    rejected_prediction_tokens: l.number().nullish()
  }).nullish()
}).nullish(), Hm = l.object({
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
  usage: di
}), Wm = l.union([
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
    usage: di
  }),
  ra
]);
function qn(e) {
  return e === "o1" || e.startsWith("o1-") || e === "o3" || e.startsWith("o3-");
}
function Km(e) {
  return e.startsWith("gpt-4o-audio-preview");
}
function Ua(e) {
  var t, r;
  return qn(e) ? (r = (t = Ym[e]) == null ? void 0 : t.systemMessageMode) != null ? r : "developer" : "system";
}
var Ym = {
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
function Xm({
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
        throw new yt({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const i = o.map((u) => {
          switch (u.type) {
            case "text":
              return u.text;
            case "image":
              throw new re({
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
              throw new re({
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
        throw new re({
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
function Za(e) {
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
var Qm = class {
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
    var g;
    const y = e.type, f = [];
    o != null && f.push({
      type: "unsupported-setting",
      setting: "topK"
    }), d != null && d.type !== "text" && f.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: p, stopSequences: h } = Xm({ prompt: r, inputFormat: t }), v = [...h ?? [], ...c ?? []], b = {
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
      prompt: p,
      // stop sequences:
      stop: v.length > 0 ? v : void 0
    };
    switch (y) {
      case "regular": {
        if ((g = e.tools) != null && g.length)
          throw new re({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new re({
            functionality: "toolChoice"
          });
        return { args: b, warnings: f };
      }
      case "object-json":
        throw new re({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new re({
          functionality: "object-tool mode"
        });
      default: {
        const w = y;
        throw new Error(`Unsupported type: ${w}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await Fe({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: He(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Gt,
      successfulResponseHandler: Ct(
        ef
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
      finishReason: en(i.finish_reason),
      logprobs: Za(i.logprobs),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      response: tn(a),
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
    }, { responseHeaders: a, value: s } = await Fe({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: He(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Gt,
      successfulResponseHandler: nn(
        tf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: o, ...i } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d, m = !0;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(g, y) {
            if (!g.success) {
              u = "error", y.enqueue({ type: "error", error: g.error });
              return;
            }
            const f = g.value;
            if ("error" in f) {
              u = "error", y.enqueue({ type: "error", error: f.error });
              return;
            }
            m && (m = !1, y.enqueue({
              type: "response-metadata",
              ...tn(f)
            })), f.usage != null && (c = {
              promptTokens: f.usage.prompt_tokens,
              completionTokens: f.usage.completion_tokens
            });
            const p = f.choices[0];
            (p == null ? void 0 : p.finish_reason) != null && (u = en(p.finish_reason)), (p == null ? void 0 : p.text) != null && y.enqueue({
              type: "text-delta",
              textDelta: p.text
            });
            const h = Za(
              p == null ? void 0 : p.logprobs
            );
            h != null && h.length && (d === void 0 && (d = []), d.push(...h));
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
}, ef = l.object({
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
}), tf = l.union([
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
  ra
]), rf = class {
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
      throw new bs({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await Fe({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: He(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: Gt,
      successfulResponseHandler: Ct(
        nf
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
}, nf = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
}), af = {
  "dall-e-3": 1,
  "dall-e-2": 10
}, sf = class {
  constructor(e, t, r) {
    this.modelId = e, this.settings = t, this.config = r, this.specificationVersion = "v1";
  }
  get maxImagesPerCall() {
    var e, t;
    return (t = (e = this.settings.maxImagesPerCall) != null ? e : af[this.modelId]) != null ? t : 1;
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
    abortSignal: i
  }) {
    var u, c, d, m;
    const g = [];
    n != null && g.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), a != null && g.push({ type: "unsupported-setting", setting: "seed" });
    const y = (d = (c = (u = this.config._internal) == null ? void 0 : u.currentDate) == null ? void 0 : c.call(u)) != null ? d : /* @__PURE__ */ new Date(), { value: f, responseHeaders: p } = await Fe({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: He(this.config.headers(), o),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: r,
        ...(m = s.openai) != null ? m : {},
        response_format: "b64_json"
      },
      failedResponseHandler: Gt,
      successfulResponseHandler: Ct(
        of
      ),
      abortSignal: i,
      fetch: this.config.fetch
    });
    return {
      images: f.data.map((h) => h.b64_json),
      warnings: g,
      response: {
        timestamp: y,
        modelId: this.modelId,
        headers: p
      }
    };
  }
}, of = l.object({
  data: l.array(l.object({ b64_json: l.string() }))
});
function lf(e = {}) {
  var t, r, n;
  const a = (t = Jn(e.baseURL)) != null ? t : "https://api.openai.com/v1", s = (r = e.compatibility) != null ? r : "compatible", o = (n = e.name) != null ? n : "openai", i = () => ({
    Authorization: `Bearer ${Bn({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), u = (f, p = {}) => new Gm(f, p, {
    provider: `${o}.chat`,
    url: ({ path: h }) => `${a}${h}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), c = (f, p = {}) => new Qm(f, p, {
    provider: `${o}.completion`,
    url: ({ path: h }) => `${a}${h}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), d = (f, p = {}) => new rf(f, p, {
    provider: `${o}.embedding`,
    url: ({ path: h }) => `${a}${h}`,
    headers: i,
    fetch: e.fetch
  }), m = (f, p = {}) => new sf(f, p, {
    provider: `${o}.image`,
    url: ({ path: h }) => `${a}${h}`,
    headers: i,
    fetch: e.fetch
  }), g = (f, p) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return f === "gpt-3.5-turbo-instruct" ? c(
      f,
      p
    ) : u(f, p);
  }, y = function(f, p) {
    return g(f, p);
  };
  return y.languageModel = g, y.chat = u, y.completion = c, y.embedding = d, y.textEmbedding = d, y.textEmbeddingModel = d, y.image = m, y.imageModel = m, y;
}
lf({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  O as AISDKError,
  Ge as APICallError,
  Of as AssistantResponse,
  kn as DownloadError,
  yi as EmptyResponseBodyError,
  Q as InvalidArgumentError,
  Ea as InvalidDataContentError,
  Xd as InvalidMessageRoleError,
  yt as InvalidPromptError,
  mn as InvalidResponseDataError,
  zp as InvalidStreamPartError,
  Go as InvalidToolArgumentsError,
  or as JSONParseError,
  lm as LangChainAdapter,
  pm as LlamaIndexAdapter,
  Mr as LoadAPIKeyError,
  Tn as MessageConversionError,
  cf as NoContentGeneratedError,
  Zd as NoImageGeneratedError,
  tt as NoObjectGeneratedError,
  Do as NoOutputSpecifiedError,
  rt as NoSuchModelError,
  om as NoSuchProviderError,
  Pn as NoSuchToolError,
  Vp as Output,
  Sa as RetryError,
  Pf as StreamData,
  Up as ToolCallRepairError,
  Lo as ToolExecutionError,
  nt as TypeValidationError,
  re as UnsupportedFunctionalityError,
  If as appendClientMessage,
  Ef as appendResponseMessages,
  sp as convertToCoreMessages,
  yp as coreAssistantMessageSchema,
  _p as coreMessageSchema,
  hp as coreSystemMessageSchema,
  vp as coreToolMessageSchema,
  gp as coreUserMessageSchema,
  Nf as cosineSimilarity,
  Mm as createAnthropic,
  eo as createDataStream,
  ff as createDataStreamResponse,
  Et as createIdGenerator,
  Vm as createMistral,
  lf as createOpenAI,
  am as customProvider,
  gf as embed,
  yf as embedMany,
  Rf as experimental_createProviderRegistry,
  Cf as experimental_customProvider,
  vf as experimental_generateImage,
  Sf as experimental_wrapLanguageModel,
  Tf as extractReasoningMiddleware,
  Pt as formatAssistantStreamPart,
  ie as formatDataStreamPart,
  Mt as generateId,
  _f as generateObject,
  wf as generateText,
  yc as jsonSchema,
  df as parseAssistantStreamPart,
  pc as parseDataStreamPart,
  hf as pipeDataStreamToResponse,
  pf as processDataStream,
  mf as processTextStream,
  jf as simulateReadableStream,
  xf as smoothStream,
  bf as streamObject,
  kf as streamText,
  Af as tool,
  rm as wrapLanguageModel,
  gc as zodSchema
};
