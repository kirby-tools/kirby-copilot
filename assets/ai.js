var Gn = "vercel.ai.error", Bs = Symbol.for(Gn), Kn, Vs = class Yn extends Error {
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
    super(r), this[Kn] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Yn.hasMarker(t, Gn);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
Kn = Bs;
var P = Vs, Xn = "AI_APICallError", Qn = `vercel.ai.error.${Xn}`, zs = Symbol.for(Qn), ea, ve = class extends P {
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
    super({ name: Xn, message: e, cause: o }), this[ea] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return P.hasMarker(e, Qn);
  }
};
ea = zs;
var ta = "AI_EmptyResponseBodyError", ra = `vercel.ai.error.${ta}`, Hs = Symbol.for(ra), na, Fs = class extends P {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: ta, message: e }), this[na] = !0;
  }
  static isInstance(e) {
    return P.hasMarker(e, ra);
  }
};
na = Hs;
function Gt(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var aa = "AI_InvalidArgumentError", sa = `vercel.ai.error.${aa}`, Js = Symbol.for(sa), oa, Ws = class extends P {
  constructor({
    message: t,
    cause: r,
    argument: n
  }) {
    super({ name: aa, message: t, cause: r }), this[oa] = !0, this.argument = n;
  }
  static isInstance(t) {
    return P.hasMarker(t, sa);
  }
};
oa = Js;
var ia = "AI_InvalidPromptError", la = `vercel.ai.error.${ia}`, Gs = Symbol.for(la), ua, Ue = class extends P {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: ia, message: `Invalid prompt: ${t}`, cause: r }), this[ua] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return P.hasMarker(e, la);
  }
};
ua = Gs;
var ca = "AI_InvalidResponseDataError", da = `vercel.ai.error.${ca}`, Ks = Symbol.for(da), pa, jr = class extends P {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: ca, message: t }), this[pa] = !0, this.data = e;
  }
  static isInstance(e) {
    return P.hasMarker(e, da);
  }
};
pa = Ks;
var fa = "AI_JSONParseError", ma = `vercel.ai.error.${fa}`, Ys = Symbol.for(ma), ha, ir = class extends P {
  constructor({ text: e, cause: t }) {
    super({
      name: fa,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Gt(t)}`,
      cause: t
    }), this[ha] = !0, this.text = e;
  }
  static isInstance(e) {
    return P.hasMarker(e, ma);
  }
};
ha = Ys;
var ga = "AI_LoadAPIKeyError", ya = `vercel.ai.error.${ga}`, Xs = Symbol.for(ya), va, nr = class extends P {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: ga, message: e }), this[va] = !0;
  }
  static isInstance(e) {
    return P.hasMarker(e, ya);
  }
};
va = Xs;
var _a = "AI_NoSuchModelError", ba = `vercel.ai.error.${_a}`, Qs = Symbol.for(ba), wa, eo = class extends P {
  constructor({
    errorName: e = _a,
    modelId: t,
    modelType: r,
    message: n = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: n }), this[wa] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return P.hasMarker(e, ba);
  }
};
wa = Qs;
var xa = "AI_TooManyEmbeddingValuesForCallError", ka = `vercel.ai.error.${xa}`, to = Symbol.for(ka), Ta, Sa = class extends P {
  constructor(e) {
    super({
      name: xa,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[Ta] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return P.hasMarker(e, ka);
  }
};
Ta = to;
var Ca = "AI_TypeValidationError", Ia = `vercel.ai.error.${Ca}`, ro = Symbol.for(Ia), Ea, no = class Br extends P {
  constructor({ value: t, cause: r }) {
    super({
      name: Ca,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Gt(r)}`,
      cause: r
    }), this[Ea] = !0, this.value = t;
  }
  static isInstance(t) {
    return P.hasMarker(t, Ia);
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
    return Br.isInstance(r) && r.value === t ? r : new Br({ value: t, cause: r });
  }
};
Ea = ro;
var lr = no, Na = "AI_UnsupportedFunctionalityError", Pa = `vercel.ai.error.${Na}`, ao = Symbol.for(Pa), Ra, q = class extends P {
  constructor({ functionality: e }) {
    super({
      name: Na,
      message: `'${e}' functionality not supported.`
    }), this[Ra] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return P.hasMarker(e, Pa);
  }
};
Ra = ao;
let so = (e, t = 21) => (r = t) => {
  let n = "", a = r | 0;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ot = { exports: {} };
const io = typeof Buffer < "u", Tn = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, Sn = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function ja(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), io && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (Tn.test(e) === !1 && Sn.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (Tn.test(e) === !1)
      return n;
  } else if (Sn.test(e) === !1)
    return n;
  return Oa(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function Oa(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
function Qr(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return ja(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function lo(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return ja(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
ot.exports = Qr;
ot.exports.default = Qr;
ot.exports.parse = Qr;
ot.exports.safeParse = lo;
ot.exports.scan = Oa;
var uo = ot.exports;
const en = /* @__PURE__ */ oo(uo);
var co = Object.defineProperty, po = (e, t, r) => t in e ? co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ar = (e, t, r) => po(e, typeof t != "symbol" ? t + "" : t, r);
class Cn extends Error {
  constructor(t, r) {
    super(t), ar(this, "type"), ar(this, "field"), ar(this, "value"), ar(this, "line"), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Or(e) {
}
function fo(e) {
  const { onEvent: t = Or, onError: r = Or, onRetry: n = Or, onComment: a } = e;
  let s = "", o = !0, i, u = "", c = "";
  function d(f) {
    const b = o ? f.replace(/^\xEF\xBB\xBF/, "") : f, [v, E] = mo(`${s}${b}`);
    for (const I of v)
      p(I);
    s = E, o = !1;
  }
  function p(f) {
    if (f === "") {
      _();
      return;
    }
    if (f.startsWith(":")) {
      a && a(f.slice(f.startsWith(": ") ? 2 : 1));
      return;
    }
    const b = f.indexOf(":");
    if (b !== -1) {
      const v = f.slice(0, b), E = f[b + 1] === " " ? 2 : 1, I = f.slice(b + E);
      g(v, I, f);
      return;
    }
    g(f, "", f);
  }
  function g(f, b, v) {
    switch (f) {
      case "event":
        c = b;
        break;
      case "data":
        u = `${u}${b}
`;
        break;
      case "id":
        i = b.includes("\0") ? void 0 : b;
        break;
      case "retry":
        /^\d+$/.test(b) ? n(parseInt(b, 10)) : r(
          new Cn(`Invalid \`retry\` value: "${b}"`, {
            type: "invalid-retry",
            value: b,
            line: v
          })
        );
        break;
      default:
        r(
          new Cn(
            `Unknown field "${f.length > 20 ? `${f.slice(0, 20)}…` : f}"`,
            { type: "unknown-field", field: f, value: b, line: v }
          )
        );
        break;
    }
  }
  function _() {
    u.length > 0 && t({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function y(f = {}) {
    s && f.consume && p(s), i = void 0, u = "", c = "", s = "";
  }
  return { feed: d, reset: y };
}
function mo(e) {
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
class ho extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let a;
    super({
      start(s) {
        a = fo({
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
function Ee(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function go(e) {
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
function kr(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Kt = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const a = so(r, t);
  if (e == null)
    return a;
  if (r.includes(n))
    throw new Ws({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (s) => `${e}${n}${a(s)}`;
}, Xe = Kt();
function yo(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function or(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function tn({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new nr({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new nr({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new nr({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new nr({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var ur = Symbol.for("vercel.ai.validator");
function vo(e) {
  return { [ur]: !0, validate: e };
}
function _o(e) {
  return typeof e == "object" && e !== null && ur in e && e[ur] === !0 && "validate" in e;
}
function bo(e) {
  return _o(e) ? e : wo(e);
}
function wo(e) {
  return vo((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function xo({
  value: e,
  schema: t
}) {
  const r = Tr({ value: e, schema: t });
  if (!r.success)
    throw lr.wrap({ value: e, cause: r.error });
  return r.value;
}
function Tr({
  value: e,
  schema: t
}) {
  const r = bo(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: lr.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: lr.wrap({ value: e, cause: n })
    };
  }
}
function Aa({
  text: e,
  schema: t
}) {
  try {
    const r = en.parse(e);
    return t == null ? r : xo({ value: r, schema: t });
  } catch (r) {
    throw ir.isInstance(r) || lr.isInstance(r) ? r : new ir({ text: e, cause: r });
  }
}
function rn({
  text: e,
  schema: t
}) {
  try {
    const r = en.parse(e);
    return t == null ? {
      success: !0,
      value: r
    } : Tr({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: ir.isInstance(r) ? r : new ir({ text: e, cause: r })
    };
  }
}
function In(e) {
  try {
    return en.parse(e), !0;
  } catch {
    return !1;
  }
}
function ko(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var To = () => globalThis.fetch, be = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => So({
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
}), So = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = To()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: ko(t),
      body: r.content,
      signal: s
    }), u = kr(i);
    if (!i.ok) {
      let c;
      try {
        c = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw or(d) || ve.isInstance(d) ? d : new ve({
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
      throw c instanceof Error && (or(c) || ve.isInstance(c)) ? c : new ve({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (or(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const u = i.cause;
      if (u != null)
        throw new ve({
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
async function Co(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var nn = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), i = kr(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new ve({
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
    const u = Aa({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new ve({
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
      value: new ve({
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
}, Sr = (e) => async ({ response: t }) => {
  const r = kr(t);
  if (t.body == null)
    throw new Fs({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new ho()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            rn({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, it = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = rn({
    text: a,
    schema: e
  }), o = kr(t);
  if (!s.success)
    throw new ve({
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
}, { btoa: Io, atob: Eo } = globalThis;
function No(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = Eo(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function ht(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return Io(t);
}
function an(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
const Po = Symbol("Let zodToJsonSchema decide on which parser to use"), Ro = {
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
}, jo = (e) => ({
  ...Ro,
  ...e
}), Oo = (e) => {
  const t = jo(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function Ma(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function Z(e, t, r, n, a) {
  e[t] = r, Ma(e, t, n, a);
}
var A;
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
})(A || (A = {}));
var Vr;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Vr || (Vr = {}));
const x = A.arrayToEnum([
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
]), Pe = (e) => {
  switch (typeof e) {
    case "undefined":
      return x.undefined;
    case "string":
      return x.string;
    case "number":
      return isNaN(e) ? x.nan : x.number;
    case "boolean":
      return x.boolean;
    case "function":
      return x.function;
    case "bigint":
      return x.bigint;
    case "symbol":
      return x.symbol;
    case "object":
      return Array.isArray(e) ? x.array : e === null ? x.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? x.promise : typeof Map < "u" && e instanceof Map ? x.map : typeof Set < "u" && e instanceof Set ? x.set : typeof Date < "u" && e instanceof Date ? x.date : x.object;
    default:
      return x.unknown;
  }
}, m = A.arrayToEnum([
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
]), Ao = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ee extends Error {
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
    if (!(t instanceof ee))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, A.jsonStringifyReplacer, 2);
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
ee.create = (e) => new ee(e);
const nt = (e, t) => {
  let r;
  switch (e.code) {
    case m.invalid_type:
      e.received === x.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case m.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, A.jsonStringifyReplacer)}`;
      break;
    case m.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${A.joinValues(e.keys, ", ")}`;
      break;
    case m.invalid_union:
      r = "Invalid input";
      break;
    case m.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${A.joinValues(e.options)}`;
      break;
    case m.invalid_enum_value:
      r = `Invalid enum value. Expected ${A.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : A.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
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
      r = t.defaultError, A.assertNever(e);
  }
  return { message: r };
};
let $a = nt;
function Mo(e) {
  $a = e;
}
function cr() {
  return $a;
}
const dr = (e) => {
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
}, $o = [];
function w(e, t) {
  const r = cr(), n = dr({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      r,
      r === nt ? void 0 : nt
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
}), et = (e) => ({ status: "dirty", value: e }), G = (e) => ({ status: "valid", value: e }), zr = (e) => e.status === "aborted", Hr = (e) => e.status === "dirty", gt = (e) => e.status === "valid", yt = (e) => typeof Promise < "u" && e instanceof Promise;
function pr(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Za(e, t, r, n, a) {
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var T;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(T || (T = {}));
var pt, ft;
class we {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const En = (e, t) => {
  if (gt(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new ee(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function N(e) {
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
class R {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Pe(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Pe(t.data),
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
        parsedType: Pe(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (yt(r))
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
      parsedType: Pe(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return En(a, s);
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
      parsedType: Pe(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (yt(a) ? a : Promise.resolve(a));
    return En(n, s);
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
    return new pe({
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return _e.create(this, this._def);
  }
  nullable() {
    return Ae.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return de.create(this, this._def);
  }
  promise() {
    return st.create(this, this._def);
  }
  or(t) {
    return wt.create([this, t], this._def);
  }
  and(t) {
    return xt.create(this, t, this._def);
  }
  transform(t) {
    return new pe({
      ...N(this._def),
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new It({
      ...N(this._def),
      innerType: this,
      defaultValue: r,
      typeName: h.ZodDefault
    });
  }
  brand() {
    return new sn({
      typeName: h.ZodBranded,
      type: this,
      ...N(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Et({
      ...N(this._def),
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
    return Yt.create(this, t);
  }
  readonly() {
    return Nt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Zo = /^c[^\s-]{8,}$/i, Do = /^[0-9a-z]+$/, Uo = /^[0-9A-HJKMNP-TV-Z]{26}$/, Lo = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, qo = /^[a-z0-9_-]{21}$/i, Bo = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Vo = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, zo = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ar;
const Ho = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Fo = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Jo = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Da = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Wo = new RegExp(`^${Da}$`);
function Ua(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Go(e) {
  return new RegExp(`^${Ua(e)}$`);
}
function La(e) {
  let t = `${Da}T${Ua(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function Ko(e, t) {
  return !!((t === "v4" || !t) && Ho.test(e) || (t === "v6" || !t) && Fo.test(e));
}
class ce extends R {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== x.string) {
      const s = this._getOrReturnCtx(t);
      return w(s, {
        code: m.invalid_type,
        expected: x.string,
        received: s.parsedType
      }), C;
    }
    const n = new H();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), w(a, {
          code: m.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), w(a, {
          code: m.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (a = this._getOrReturnCtx(t, a), o ? w(a, {
          code: m.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && w(a, {
          code: m.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Vo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
          validation: "email",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        Ar || (Ar = new RegExp(zo, "u")), Ar.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
          validation: "emoji",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Lo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
          validation: "uuid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        qo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
          validation: "nanoid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Zo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
          validation: "cuid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Do.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
          validation: "cuid2",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Uo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
          validation: "ulid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), w(a, {
            validation: "url",
            code: m.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
        validation: "regex",
        code: m.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? La(s).test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Wo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Go(s).test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Bo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
        validation: "duration",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Ko(t.data, s.version) || (a = this._getOrReturnCtx(t, a), w(a, {
        validation: "ip",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Jo.test(t.data) || (a = this._getOrReturnCtx(t, a), w(a, {
        validation: "base64",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : A.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: m.invalid_string,
      ...T.errToObj(n)
    });
  }
  _addCheck(t) {
    return new ce({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...T.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...T.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...T.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...T.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...T.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...T.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...T.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...T.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...T.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...T.errToObj(t) });
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
      ...T.errToObj(t == null ? void 0 : t.message)
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
      ...T.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...T.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...T.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...T.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...T.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...T.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...T.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...T.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...T.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, T.errToObj(t));
  }
  trim() {
    return new ce({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ce({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ce({
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
ce.create = (e) => {
  var t;
  return new ce({
    checks: [],
    typeName: h.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...N(e)
  });
};
function Yo(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class Re extends R {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== x.number) {
      const s = this._getOrReturnCtx(t);
      return w(s, {
        code: m.invalid_type,
        expected: x.number,
        received: s.parsedType
      }), C;
    }
    let n;
    const a = new H();
    for (const s of this._def.checks)
      s.kind === "int" ? A.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? Yo(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.not_finite,
        message: s.message
      }), a.dirty()) : A.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, T.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, T.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, T.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, T.toString(r));
  }
  setLimit(t, r, n, a) {
    return new Re({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: T.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Re({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: T.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: T.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: T.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: T.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: T.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: T.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: T.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: T.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: T.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && A.isInteger(t.value));
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
Re.create = (e) => new Re({
  checks: [],
  typeName: h.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...N(e)
});
class je extends R {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== x.bigint) {
      const s = this._getOrReturnCtx(t);
      return w(s, {
        code: m.invalid_type,
        expected: x.bigint,
        received: s.parsedType
      }), C;
    }
    let n;
    const a = new H();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: m.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : A.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, T.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, T.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, T.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, T.toString(r));
  }
  setLimit(t, r, n, a) {
    return new je({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: T.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new je({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: T.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: T.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: T.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: T.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: T.toString(r)
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
je.create = (e) => {
  var t;
  return new je({
    checks: [],
    typeName: h.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...N(e)
  });
};
class vt extends R {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== x.boolean) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: m.invalid_type,
        expected: x.boolean,
        received: n.parsedType
      }), C;
    }
    return G(t.data);
  }
}
vt.create = (e) => new vt({
  typeName: h.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...N(e)
});
class Be extends R {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== x.date) {
      const s = this._getOrReturnCtx(t);
      return w(s, {
        code: m.invalid_type,
        expected: x.date,
        received: s.parsedType
      }), C;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return w(s, {
        code: m.invalid_date
      }), C;
    }
    const n = new H();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), w(a, {
        code: m.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : A.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Be({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: T.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: T.toString(r)
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
Be.create = (e) => new Be({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: h.ZodDate,
  ...N(e)
});
class fr extends R {
  _parse(t) {
    if (this._getType(t) !== x.symbol) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: m.invalid_type,
        expected: x.symbol,
        received: n.parsedType
      }), C;
    }
    return G(t.data);
  }
}
fr.create = (e) => new fr({
  typeName: h.ZodSymbol,
  ...N(e)
});
class _t extends R {
  _parse(t) {
    if (this._getType(t) !== x.undefined) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: m.invalid_type,
        expected: x.undefined,
        received: n.parsedType
      }), C;
    }
    return G(t.data);
  }
}
_t.create = (e) => new _t({
  typeName: h.ZodUndefined,
  ...N(e)
});
class bt extends R {
  _parse(t) {
    if (this._getType(t) !== x.null) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: m.invalid_type,
        expected: x.null,
        received: n.parsedType
      }), C;
    }
    return G(t.data);
  }
}
bt.create = (e) => new bt({
  typeName: h.ZodNull,
  ...N(e)
});
class at extends R {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return G(t.data);
  }
}
at.create = (e) => new at({
  typeName: h.ZodAny,
  ...N(e)
});
class qe extends R {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return G(t.data);
  }
}
qe.create = (e) => new qe({
  typeName: h.ZodUnknown,
  ...N(e)
});
class Ne extends R {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return w(r, {
      code: m.invalid_type,
      expected: x.never,
      received: r.parsedType
    }), C;
  }
}
Ne.create = (e) => new Ne({
  typeName: h.ZodNever,
  ...N(e)
});
class mr extends R {
  _parse(t) {
    if (this._getType(t) !== x.undefined) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: m.invalid_type,
        expected: x.void,
        received: n.parsedType
      }), C;
    }
    return G(t.data);
  }
}
mr.create = (e) => new mr({
  typeName: h.ZodVoid,
  ...N(e)
});
class de extends R {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== x.array)
      return w(r, {
        code: m.invalid_type,
        expected: x.array,
        received: r.parsedType
      }), C;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, i = r.data.length < a.exactLength.value;
      (o || i) && (w(r, {
        code: o ? m.too_big : m.too_small,
        minimum: i ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (w(r, {
      code: m.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (w(r, {
      code: m.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => a.type._parseAsync(new we(r, o, r.path, i)))).then((o) => H.mergeArray(n, o));
    const s = [...r.data].map((o, i) => a.type._parseSync(new we(r, o, r.path, i)));
    return H.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new de({
      ...this._def,
      minLength: { value: t, message: T.toString(r) }
    });
  }
  max(t, r) {
    return new de({
      ...this._def,
      maxLength: { value: t, message: T.toString(r) }
    });
  }
  length(t, r) {
    return new de({
      ...this._def,
      exactLength: { value: t, message: T.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
de.create = (e, t) => new de({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: h.ZodArray,
  ...N(t)
});
function Qe(e) {
  if (e instanceof D) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = _e.create(Qe(n));
    }
    return new D({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof de ? new de({
    ...e._def,
    type: Qe(e.element)
  }) : e instanceof _e ? _e.create(Qe(e.unwrap())) : e instanceof Ae ? Ae.create(Qe(e.unwrap())) : e instanceof xe ? xe.create(e.items.map((t) => Qe(t))) : e;
}
class D extends R {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = A.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== x.object) {
      const c = this._getOrReturnCtx(t);
      return w(c, {
        code: m.invalid_type,
        expected: x.object,
        received: c.parsedType
      }), C;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Ne && this._def.unknownKeys === "strip"))
      for (const c in a.data)
        o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], p = a.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new we(a, p, a.path, c)),
        alwaysSet: c in a.data
      });
    }
    if (this._def.catchall instanceof Ne) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of i)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: a.data[d] }
          });
      else if (c === "strict")
        i.length > 0 && (w(a, {
          code: m.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of i) {
        const p = a.data[d];
        u.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new we(a, p, a.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of u) {
        const p = await d.key, g = await d.value;
        c.push({
          key: p,
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
    return T.errToObj, new D({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, s, o, i;
          const u = (o = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = T.errToObj(t).message) !== null && i !== void 0 ? i : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new D({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new D({
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
    return new D({
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
    return new D({
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
    return new D({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return A.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new D({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return A.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new D({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Qe(this);
  }
  partial(t) {
    const r = {};
    return A.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new D({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return A.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof _e; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new D({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return qa(A.objectKeys(this.shape));
  }
}
D.create = (e, t) => new D({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Ne.create(),
  typeName: h.ZodObject,
  ...N(t)
});
D.strictCreate = (e, t) => new D({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Ne.create(),
  typeName: h.ZodObject,
  ...N(t)
});
D.lazycreate = (e, t) => new D({
  shape: e,
  unknownKeys: "strip",
  catchall: Ne.create(),
  typeName: h.ZodObject,
  ...N(t)
});
class wt extends R {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new ee(i.ctx.common.issues));
      return w(r, {
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
      const i = o.map((u) => new ee(u));
      return w(r, {
        code: m.invalid_union,
        unionErrors: i
      }), C;
    }
  }
  get options() {
    return this._def.options;
  }
}
wt.create = (e, t) => new wt({
  options: e,
  typeName: h.ZodUnion,
  ...N(t)
});
const Ie = (e) => e instanceof Tt ? Ie(e.schema) : e instanceof pe ? Ie(e.innerType()) : e instanceof St ? [e.value] : e instanceof Oe ? e.options : e instanceof Ct ? A.objectValues(e.enum) : e instanceof It ? Ie(e._def.innerType) : e instanceof _t ? [void 0] : e instanceof bt ? [null] : e instanceof _e ? [void 0, ...Ie(e.unwrap())] : e instanceof Ae ? [null, ...Ie(e.unwrap())] : e instanceof sn || e instanceof Nt ? Ie(e.unwrap()) : e instanceof Et ? Ie(e._def.innerType) : [];
class Cr extends R {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.object)
      return w(r, {
        code: m.invalid_type,
        expected: x.object,
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
    }) : (w(r, {
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
      const o = Ie(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (a.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        a.set(i, s);
      }
    }
    return new Cr({
      typeName: h.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...N(n)
    });
  }
}
function Fr(e, t) {
  const r = Pe(e), n = Pe(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === x.object && n === x.object) {
    const a = A.objectKeys(t), s = A.objectKeys(e).filter((i) => a.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const u = Fr(e[i], t[i]);
      if (!u.valid)
        return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === x.array && n === x.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], u = Fr(o, i);
      if (!u.valid)
        return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else return r === x.date && n === x.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class xt extends R {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (zr(s) || zr(o))
        return C;
      const i = Fr(s.value, o.value);
      return i.valid ? ((Hr(s) || Hr(o)) && r.dirty(), { status: r.value, value: i.data }) : (w(n, {
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
xt.create = (e, t, r) => new xt({
  left: e,
  right: t,
  typeName: h.ZodIntersection,
  ...N(r)
});
class xe extends R {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== x.array)
      return w(n, {
        code: m.invalid_type,
        expected: x.array,
        received: n.parsedType
      }), C;
    if (n.data.length < this._def.items.length)
      return w(n, {
        code: m.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), C;
    !this._def.rest && n.data.length > this._def.items.length && (w(n, {
      code: m.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, i) => {
      const u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new we(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => H.mergeArray(r, o)) : H.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new xe({
      ...this._def,
      rest: t
    });
  }
}
xe.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xe({
    items: e,
    typeName: h.ZodTuple,
    rest: null,
    ...N(t)
  });
};
class kt extends R {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== x.object)
      return w(n, {
        code: m.invalid_type,
        expected: x.object,
        received: n.parsedType
      }), C;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      a.push({
        key: s._parse(new we(n, i, n.path, i)),
        value: o._parse(new we(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? H.mergeObjectAsync(r, a) : H.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof R ? new kt({
      keyType: t,
      valueType: r,
      typeName: h.ZodRecord,
      ...N(n)
    }) : new kt({
      keyType: ce.create(),
      valueType: t,
      typeName: h.ZodRecord,
      ...N(r)
    });
  }
}
class hr extends R {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== x.map)
      return w(n, {
        code: m.invalid_type,
        expected: x.map,
        received: n.parsedType
      }), C;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([i, u], c) => ({
      key: a._parse(new we(n, i, n.path, [c, "key"])),
      value: s._parse(new we(n, u, n.path, [c, "value"]))
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
hr.create = (e, t, r) => new hr({
  valueType: t,
  keyType: e,
  typeName: h.ZodMap,
  ...N(r)
});
class Ve extends R {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== x.set)
      return w(n, {
        code: m.invalid_type,
        expected: x.set,
        received: n.parsedType
      }), C;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (w(n, {
      code: m.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (w(n, {
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
    const i = [...n.data.values()].map((u, c) => s._parse(new we(n, u, n.path, c)));
    return n.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(t, r) {
    return new Ve({
      ...this._def,
      minSize: { value: t, message: T.toString(r) }
    });
  }
  max(t, r) {
    return new Ve({
      ...this._def,
      maxSize: { value: t, message: T.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ve.create = (e, t) => new Ve({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: h.ZodSet,
  ...N(t)
});
class rt extends R {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.function)
      return w(r, {
        code: m.invalid_type,
        expected: x.function,
        received: r.parsedType
      }), C;
    function n(i, u) {
      return dr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          cr(),
          nt
        ].filter((c) => !!c),
        issueData: {
          code: m.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function a(i, u) {
      return dr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          cr(),
          nt
        ].filter((c) => !!c),
        issueData: {
          code: m.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof st) {
      const i = this;
      return G(async function(...u) {
        const c = new ee([]), d = await i._def.args.parseAsync(u, s).catch((_) => {
          throw c.addIssue(n(u, _)), c;
        }), p = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(p, s).catch((_) => {
          throw c.addIssue(a(p, _)), c;
        });
      });
    } else {
      const i = this;
      return G(function(...u) {
        const c = i._def.args.safeParse(u, s);
        if (!c.success)
          throw new ee([n(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), p = i._def.returns.safeParse(d, s);
        if (!p.success)
          throw new ee([a(d, p.error)]);
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
    return new rt({
      ...this._def,
      args: xe.create(t).rest(qe.create())
    });
  }
  returns(t) {
    return new rt({
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
    return new rt({
      args: t || xe.create([]).rest(qe.create()),
      returns: r || qe.create(),
      typeName: h.ZodFunction,
      ...N(n)
    });
  }
}
class Tt extends R {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Tt.create = (e, t) => new Tt({
  getter: e,
  typeName: h.ZodLazy,
  ...N(t)
});
class St extends R {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return w(r, {
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
St.create = (e, t) => new St({
  value: e,
  typeName: h.ZodLiteral,
  ...N(t)
});
function qa(e, t) {
  return new Oe({
    values: e,
    typeName: h.ZodEnum,
    ...N(t)
  });
}
class Oe extends R {
  constructor() {
    super(...arguments), pt.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return w(r, {
        expected: A.joinValues(n),
        received: r.parsedType,
        code: m.invalid_type
      }), C;
    }
    if (pr(this, pt) || Za(this, pt, new Set(this._def.values)), !pr(this, pt).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return w(r, {
        received: r.data,
        code: m.invalid_enum_value,
        options: n
      }), C;
    }
    return G(t.data);
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
    return Oe.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return Oe.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
pt = /* @__PURE__ */ new WeakMap();
Oe.create = qa;
class Ct extends R {
  constructor() {
    super(...arguments), ft.set(this, void 0);
  }
  _parse(t) {
    const r = A.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== x.string && n.parsedType !== x.number) {
      const a = A.objectValues(r);
      return w(n, {
        expected: A.joinValues(a),
        received: n.parsedType,
        code: m.invalid_type
      }), C;
    }
    if (pr(this, ft) || Za(this, ft, new Set(A.getValidEnumValues(this._def.values))), !pr(this, ft).has(t.data)) {
      const a = A.objectValues(r);
      return w(n, {
        received: n.data,
        code: m.invalid_enum_value,
        options: a
      }), C;
    }
    return G(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ft = /* @__PURE__ */ new WeakMap();
Ct.create = (e, t) => new Ct({
  values: e,
  typeName: h.ZodNativeEnum,
  ...N(t)
});
class st extends R {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.promise && r.common.async === !1)
      return w(r, {
        code: m.invalid_type,
        expected: x.promise,
        received: r.parsedType
      }), C;
    const n = r.parsedType === x.promise ? r.data : Promise.resolve(r.data);
    return G(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
st.create = (e, t) => new st({
  type: e,
  typeName: h.ZodPromise,
  ...N(t)
});
class pe extends R {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === h.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        w(n, o), o.fatal ? r.abort() : r.dirty();
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
          return u.status === "aborted" ? C : u.status === "dirty" || r.value === "dirty" ? et(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return C;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? C : i.status === "dirty" || r.value === "dirty" ? et(i.value) : i;
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
        if (!gt(o))
          return o;
        const i = a.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => gt(o) ? Promise.resolve(a.transform(o.value, s)).then((i) => ({ status: r.value, value: i })) : o);
    A.assertNever(a);
  }
}
pe.create = (e, t, r) => new pe({
  schema: e,
  typeName: h.ZodEffects,
  effect: t,
  ...N(r)
});
pe.createWithPreprocess = (e, t, r) => new pe({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: h.ZodEffects,
  ...N(r)
});
class _e extends R {
  _parse(t) {
    return this._getType(t) === x.undefined ? G(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_e.create = (e, t) => new _e({
  innerType: e,
  typeName: h.ZodOptional,
  ...N(t)
});
class Ae extends R {
  _parse(t) {
    return this._getType(t) === x.null ? G(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ae.create = (e, t) => new Ae({
  innerType: e,
  typeName: h.ZodNullable,
  ...N(t)
});
class It extends R {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === x.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
It.create = (e, t) => new It({
  innerType: e,
  typeName: h.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...N(t)
});
class Et extends R {
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
    return yt(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new ee(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new ee(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Et.create = (e, t) => new Et({
  innerType: e,
  typeName: h.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...N(t)
});
class gr extends R {
  _parse(t) {
    if (this._getType(t) !== x.nan) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: m.invalid_type,
        expected: x.nan,
        received: n.parsedType
      }), C;
    }
    return { status: "valid", value: t.data };
  }
}
gr.create = (e) => new gr({
  typeName: h.ZodNaN,
  ...N(e)
});
const Xo = Symbol("zod_brand");
class sn extends R {
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
class Yt extends R {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? C : s.status === "dirty" ? (r.dirty(), et(s.value)) : this._def.out._parseAsync({
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
    return new Yt({
      in: t,
      out: r,
      typeName: h.ZodPipeline
    });
  }
}
class Nt extends R {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (gt(a) && (a.value = Object.freeze(a.value)), a);
    return yt(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nt.create = (e, t) => new Nt({
  innerType: e,
  typeName: h.ZodReadonly,
  ...N(t)
});
function Ba(e, t = {}, r) {
  return e ? at.create().superRefine((n, a) => {
    var s, o;
    if (!e(n)) {
      const i = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, u = (o = (s = i.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0, c = typeof i == "string" ? { message: i } : i;
      a.addIssue({ code: "custom", ...c, fatal: u });
    }
  }) : at.create();
}
const Qo = {
  object: D.lazycreate
};
var h;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(h || (h = {}));
const ei = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Ba((r) => r instanceof e, t), Va = ce.create, za = Re.create, ti = gr.create, ri = je.create, Ha = vt.create, ni = Be.create, ai = fr.create, si = _t.create, oi = bt.create, ii = at.create, li = qe.create, ui = Ne.create, ci = mr.create, di = de.create, pi = D.create, fi = D.strictCreate, mi = wt.create, hi = Cr.create, gi = xt.create, yi = xe.create, vi = kt.create, _i = hr.create, bi = Ve.create, wi = rt.create, xi = Tt.create, ki = St.create, Ti = Oe.create, Si = Ct.create, Ci = st.create, Nn = pe.create, Ii = _e.create, Ei = Ae.create, Ni = pe.createWithPreprocess, Pi = Yt.create, Ri = () => Va().optional(), ji = () => za().optional(), Oi = () => Ha().optional(), Ai = {
  string: (e) => ce.create({ ...e, coerce: !0 }),
  number: (e) => Re.create({ ...e, coerce: !0 }),
  boolean: (e) => vt.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => je.create({ ...e, coerce: !0 }),
  date: (e) => Be.create({ ...e, coerce: !0 })
}, Mi = C;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: nt,
  setErrorMap: Mo,
  getErrorMap: cr,
  makeIssue: dr,
  EMPTY_PATH: $o,
  addIssueToContext: w,
  ParseStatus: H,
  INVALID: C,
  DIRTY: et,
  OK: G,
  isAborted: zr,
  isDirty: Hr,
  isValid: gt,
  isAsync: yt,
  get util() {
    return A;
  },
  get objectUtil() {
    return Vr;
  },
  ZodParsedType: x,
  getParsedType: Pe,
  ZodType: R,
  datetimeRegex: La,
  ZodString: ce,
  ZodNumber: Re,
  ZodBigInt: je,
  ZodBoolean: vt,
  ZodDate: Be,
  ZodSymbol: fr,
  ZodUndefined: _t,
  ZodNull: bt,
  ZodAny: at,
  ZodUnknown: qe,
  ZodNever: Ne,
  ZodVoid: mr,
  ZodArray: de,
  ZodObject: D,
  ZodUnion: wt,
  ZodDiscriminatedUnion: Cr,
  ZodIntersection: xt,
  ZodTuple: xe,
  ZodRecord: kt,
  ZodMap: hr,
  ZodSet: Ve,
  ZodFunction: rt,
  ZodLazy: Tt,
  ZodLiteral: St,
  ZodEnum: Oe,
  ZodNativeEnum: Ct,
  ZodPromise: st,
  ZodEffects: pe,
  ZodTransformer: pe,
  ZodOptional: _e,
  ZodNullable: Ae,
  ZodDefault: It,
  ZodCatch: Et,
  ZodNaN: gr,
  BRAND: Xo,
  ZodBranded: sn,
  ZodPipeline: Yt,
  ZodReadonly: Nt,
  custom: Ba,
  Schema: R,
  ZodSchema: R,
  late: Qo,
  get ZodFirstPartyTypeKind() {
    return h;
  },
  coerce: Ai,
  any: ii,
  array: di,
  bigint: ri,
  boolean: Ha,
  date: ni,
  discriminatedUnion: hi,
  effect: Nn,
  enum: Ti,
  function: wi,
  instanceof: ei,
  intersection: gi,
  lazy: xi,
  literal: ki,
  map: _i,
  nan: ti,
  nativeEnum: Si,
  never: ui,
  null: oi,
  nullable: Ei,
  number: za,
  object: pi,
  oboolean: Oi,
  onumber: ji,
  optional: Ii,
  ostring: Ri,
  pipeline: Pi,
  preprocess: Ni,
  promise: Ci,
  record: vi,
  set: bi,
  strictObject: fi,
  string: Va,
  symbol: ai,
  transformer: Nn,
  tuple: yi,
  undefined: si,
  union: mi,
  unknown: li,
  void: ci,
  NEVER: Mi,
  ZodIssueCode: m,
  quotelessJson: Ao,
  ZodError: ee
});
function $i() {
  return {};
}
function Zi(e, t) {
  var n, a, s;
  const r = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((s = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : s.typeName) !== h.ZodAny && (r.items = $(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && Z(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && Z(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (Z(r, "minItems", e.exactLength.value, e.exactLength.message, t), Z(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function Di(e, t) {
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
function Ui() {
  return {
    type: "boolean"
  };
}
function Fa(e, t) {
  return $(e.type._def, t);
}
const Li = (e, t) => $(e.innerType._def, t);
function Ja(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => Ja(e, t, a))
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
      return qi(e, t);
  }
}
const qi = (e, t) => {
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
function Bi(e, t) {
  return {
    ...$(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Vi(e, t) {
  return t.effectStrategy === "input" ? $(e.schema._def, t) : {};
}
function zi(e) {
  return {
    type: "string",
    enum: e.values
  };
}
const Hi = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Fi(e, t) {
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
    if (Hi(s))
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
function Ji(e, t) {
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
let Mr;
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
  emoji: () => (Mr === void 0 && (Mr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Mr),
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
function Wa(e, t) {
  const r = {
    type: "string"
  };
  function n(a) {
    return t.patternStrategy === "escape" ? Wi(a) : a;
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
              ie(r, "email", a.message, t);
              break;
            case "format:idn-email":
              ie(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              le(r, De.email, a.message, t);
              break;
          }
          break;
        case "url":
          ie(r, "uri", a.message, t);
          break;
        case "uuid":
          ie(r, "uuid", a.message, t);
          break;
        case "regex":
          le(r, a.regex, a.message, t);
          break;
        case "cuid":
          le(r, De.cuid, a.message, t);
          break;
        case "cuid2":
          le(r, De.cuid2, a.message, t);
          break;
        case "startsWith":
          le(r, RegExp(`^${n(a.value)}`), a.message, t);
          break;
        case "endsWith":
          le(r, RegExp(`${n(a.value)}$`), a.message, t);
          break;
        case "datetime":
          ie(r, "date-time", a.message, t);
          break;
        case "date":
          ie(r, "date", a.message, t);
          break;
        case "time":
          ie(r, "time", a.message, t);
          break;
        case "duration":
          ie(r, "duration", a.message, t);
          break;
        case "length":
          Z(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t), Z(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "includes": {
          le(r, RegExp(n(a.value)), a.message, t);
          break;
        }
        case "ip": {
          a.version !== "v6" && ie(r, "ipv4", a.message, t), a.version !== "v4" && ie(r, "ipv6", a.message, t);
          break;
        }
        case "emoji":
          le(r, De.emoji, a.message, t);
          break;
        case "ulid": {
          le(r, De.ulid, a.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              ie(r, "binary", a.message, t);
              break;
            }
            case "contentEncoding:base64": {
              Z(r, "contentEncoding", "base64", a.message, t);
              break;
            }
            case "pattern:zod": {
              le(r, De.base64, a.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          le(r, De.nanoid, a.message, t);
      }
  return r;
}
const Wi = (e) => Array.from(e).map((t) => /[a-zA-Z0-9]/.test(t) ? t : `\\${t}`).join(""), ie = (e, t, r, n) => {
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
}, le = (e, t, r, n) => {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: Pn(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : Z(e, "pattern", Pn(t, n), r, n);
}, Pn = (e, t) => {
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
function Ga(e, t) {
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
    const { type: c, ...d } = Wa(e.keyType._def, t);
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
      const { type: c, ...d } = Fa(e.keyType._def, t);
      return {
        ...r,
        propertyNames: d
      };
    }
  }
  return r;
}
function Gi(e, t) {
  if (t.mapStrategy === "record")
    return Ga(e, t);
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
function Ki(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function Yi() {
  return {
    not: {}
  };
}
function Xi(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const yr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Qi(e, t) {
  if (t.target === "openApi3")
    return Rn(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in yr && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = yr[s._def.typeName];
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
  return Rn(e, t);
}
const Rn = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => $(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function el(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: yr[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        yr[e.innerType._def.typeName],
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
function tl(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", Ma(r, "type", n.message, t);
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
function rl(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : $(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : $(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function nl(e, t) {
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
    additionalProperties: rl(e, t)
  };
  return r.required.length || delete r.required, r;
}
const al = (e, t) => {
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
}, sl = (e, t) => {
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
function ol(e, t) {
  return $(e.type._def, t);
}
function il(e, t) {
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
function ll(e, t) {
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
function ul() {
  return {
    not: {}
  };
}
function cl() {
  return {};
}
const dl = (e, t) => $(e.innerType._def, t);
function $(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const i = (o = t.override) == null ? void 0 : o.call(t, e, t, n, r);
    if (i !== Po)
      return i;
  }
  if (n && !r) {
    const i = pl(n, t);
    if (i !== void 0)
      return i;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = ml(e, e.typeName, t);
  return s && hl(e, t, s), a.jsonSchema = s, s;
}
const pl = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: fl(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, fl = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, ml = (e, t, r) => {
  switch (t) {
    case h.ZodString:
      return Wa(e, r);
    case h.ZodNumber:
      return tl(e, r);
    case h.ZodObject:
      return nl(e, r);
    case h.ZodBigInt:
      return Di(e, r);
    case h.ZodBoolean:
      return Ui();
    case h.ZodDate:
      return Ja(e, r);
    case h.ZodUndefined:
      return ul();
    case h.ZodNull:
      return Xi(r);
    case h.ZodArray:
      return Zi(e, r);
    case h.ZodUnion:
    case h.ZodDiscriminatedUnion:
      return Qi(e, r);
    case h.ZodIntersection:
      return Fi(e, r);
    case h.ZodTuple:
      return ll(e, r);
    case h.ZodRecord:
      return Ga(e, r);
    case h.ZodLiteral:
      return Ji(e, r);
    case h.ZodEnum:
      return zi(e);
    case h.ZodNativeEnum:
      return Ki(e);
    case h.ZodNullable:
      return el(e, r);
    case h.ZodOptional:
      return al(e, r);
    case h.ZodMap:
      return Gi(e, r);
    case h.ZodSet:
      return il(e, r);
    case h.ZodLazy:
      return $(e.getter()._def, r);
    case h.ZodPromise:
      return ol(e, r);
    case h.ZodNaN:
    case h.ZodNever:
      return Yi();
    case h.ZodEffects:
      return Vi(e, r);
    case h.ZodAny:
      return $i();
    case h.ZodUnknown:
      return cl();
    case h.ZodDefault:
      return Bi(e, r);
    case h.ZodBranded:
      return Fa(e, r);
    case h.ZodReadonly:
      return dl(e, r);
    case h.ZodCatch:
      return Li(e, r);
    case h.ZodPipeline:
      return sl(e, r);
    case h.ZodFunction:
    case h.ZodVoid:
    case h.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, hl = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), gl = (e, t) => {
  const r = Oo(t), n = void 0, a = t == null ? void 0 : t.name, s = $(
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
var Pt = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Rt = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, jt = {
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
}, Ot = {
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
}, yl = [
  Pt,
  Rt,
  jt,
  Ot,
  At
];
Pt.code + "", Rt.code + "", jt.code + "", Ot.code + "", At.code + "";
Pt.name + "", Pt.code, Rt.name + "", Rt.code, jt.name + "", jt.code, Ot.name + "", Ot.code, At.name + "", At.code;
yl.map((e) => e.code);
var Mt = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, $t = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Zt = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Dt = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Ut = {
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
}, Lt = {
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
}, qt = {
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
}, Bt = {
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
}, Vt = {
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
}, zt = {
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
}, Ka = [
  Mt,
  $t,
  Zt,
  Dt,
  Ut,
  Lt,
  qt,
  Bt,
  Vt,
  zt
];
Mt.code + "", $t.code + "", Zt.code + "", Dt.code + "", Ut.code + "", Lt.code + "", qt.code + "", Bt.code + "", Vt.code + "", zt.code + "";
Mt.name + "", Mt.code, $t.name + "", $t.code, Zt.name + "", Zt.code, Dt.name + "", Dt.code, Ut.name + "", Ut.code, Lt.name + "", Lt.code, qt.name + "", qt.code, Bt.name + "", Bt.code, Vt.name + "", Vt.code, zt.name + "", zt.code;
Ka.map((e) => e.code);
function ye(e, t) {
  const r = Ka.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
var Jr = Symbol.for("vercel.ai.schema");
function vl(e, {
  validate: t
} = {}) {
  return {
    [Jr]: !0,
    _type: void 0,
    // should never be used directly
    [ur]: !0,
    jsonSchema: e,
    validate: t
  };
}
function _l(e) {
  return typeof e == "object" && e !== null && Jr in e && e[Jr] === !0 && "jsonSchema" in e && "validate" in e;
}
function Ir(e) {
  return _l(e) ? e : bl(e);
}
function bl(e) {
  return vl(
    // we assume that zodToJsonSchema will return a valid JSONSchema7:
    gl(e),
    {
      validate: (t) => {
        const r = e.safeParse(t);
        return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
      }
    }
  );
}
var wl = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Le = "1.9.0", jn = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function xl(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(jn);
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
    var c = u.match(jn);
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
var kl = xl(Le), Tl = Le.split(".")[0], Ht = Symbol.for("opentelemetry.js.api." + Tl), Ft = wl;
function Xt(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = Ft[Ht] = (a = Ft[Ht]) !== null && a !== void 0 ? a : {
    version: Le
  };
  if (!n && s[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(o.stack || o.message), !1;
  }
  if (s.version !== Le) {
    var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + e + " does not match previously registered API v" + Le);
    return r.error(o.stack || o.message), !1;
  }
  return s[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Le + "."), !0;
}
function ze(e) {
  var t, r, n = (t = Ft[Ht]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !kl(n)))
    return (r = Ft[Ht]) === null || r === void 0 ? void 0 : r[e];
}
function Qt(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Le + ".");
  var r = Ft[Ht];
  r && delete r[e];
}
var Sl = function(e, t) {
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
}, Cl = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Il = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return dt("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return dt("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return dt("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return dt("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return dt("verbose", this._namespace, t);
    }, e;
  }()
);
function dt(e, t, r) {
  var n = ze("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, Cl([], Sl(r), !1));
}
var Q;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(Q || (Q = {}));
function El(e, t) {
  e < Q.NONE ? e = Q.NONE : e > Q.ALL && (e = Q.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", Q.ERROR),
    warn: r("warn", Q.WARN),
    info: r("info", Q.INFO),
    debug: r("debug", Q.DEBUG),
    verbose: r("verbose", Q.VERBOSE)
  };
}
var Nl = function(e, t) {
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
}, Pl = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Rl = "diag", ke = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var i = ze("diag");
          if (i)
            return i[a].apply(i, Pl([], Nl(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, i, u;
        if (s === void 0 && (s = { logLevel: Q.INFO }), a === r) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = c.stack) !== null && o !== void 0 ? o : c.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var d = ze("diag"), p = El((i = s.logLevel) !== null && i !== void 0 ? i : Q.INFO, a);
        if (d && !s.suppressOverrideMessage) {
          var g = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + g), p.warn("Current logger will overwrite one already registered from " + g);
        }
        return Xt("diag", p, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Qt(Rl, r);
      }, r.createComponentLogger = function(a) {
        return new Il(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), jl = function(e, t) {
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
}, Ol = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Al = (
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
        var r = jl(t, 2), n = r[0], a = r[1];
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
        for (var o = Ol(n), i = o.next(); !i.done; i = o.next()) {
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
ke.instance();
function Ml(e) {
  return e === void 0 && (e = {}), new Al(new Map(Object.entries(e)));
}
function Ya(e) {
  return Symbol.for(e);
}
var $l = (
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
), Zl = new $l(), He = /* @__PURE__ */ function() {
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
}(), Dl = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return Wl;
    }, e.prototype.createHistogram = function(t, r) {
      return Gl;
    }, e.prototype.createCounter = function(t, r) {
      return Jl;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return Kl;
    }, e.prototype.createObservableGauge = function(t, r) {
      return Xl;
    }, e.prototype.createObservableCounter = function(t, r) {
      return Yl;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return Ql;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), Er = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), Ul = (
  /** @class */
  function(e) {
    He(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Er)
), Ll = (
  /** @class */
  function(e) {
    He(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Er)
), ql = (
  /** @class */
  function(e) {
    He(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Er)
), Bl = (
  /** @class */
  function(e) {
    He(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Er)
), on = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), Vl = (
  /** @class */
  function(e) {
    He(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(on)
), zl = (
  /** @class */
  function(e) {
    He(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(on)
), Hl = (
  /** @class */
  function(e) {
    He(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(on)
), Fl = new Dl(), Jl = new Ul(), Wl = new ql(), Gl = new Bl(), Kl = new Ll(), Yl = new Vl(), Xl = new zl(), Ql = new Hl(), eu = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, tu = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, ru = function(e, t) {
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
}, nu = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, au = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return Zl;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, nu([n], ru(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), su = function(e, t) {
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
}, ou = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, $r = "context", iu = new au(), Nr = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Xt($r, t, ke.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, ou([t, r, n], su(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return ze($r) || iu;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Qt($r, ke.instance());
    }, e;
  }()
), Wr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Wr || (Wr = {}));
var Xa = "0000000000000000", Qa = "00000000000000000000000000000000", lu = {
  traceId: Qa,
  spanId: Xa,
  traceFlags: Wr.NONE
}, mt = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = lu), this._spanContext = t;
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
), ln = Ya("OpenTelemetry Context Key SPAN");
function un(e) {
  return e.getValue(ln) || void 0;
}
function uu() {
  return un(Nr.getInstance().active());
}
function cn(e, t) {
  return e.setValue(ln, t);
}
function cu(e) {
  return e.deleteValue(ln);
}
function du(e, t) {
  return cn(e, new mt(t));
}
function es(e) {
  var t;
  return (t = un(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var pu = /^([0-9a-f]{32})$/i, fu = /^[0-9a-f]{16}$/i;
function mu(e) {
  return pu.test(e) && e !== Qa;
}
function hu(e) {
  return fu.test(e) && e !== Xa;
}
function ts(e) {
  return mu(e.traceId) && hu(e.spanId);
}
function gu(e) {
  return new mt(e);
}
var Zr = Nr.getInstance(), rs = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = Zr.active());
      var a = !!(r != null && r.root);
      if (a)
        return new mt();
      var s = n && es(n);
      return yu(s) && ts(s) ? new mt(s) : new mt();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (s = r, i = n) : (s = r, o = n, i = a);
        var u = o ?? Zr.active(), c = this.startSpan(t, s, u), d = cn(u, c);
        return Zr.with(d, i, void 0, c);
      }
    }, e;
  }()
);
function yu(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var vu = new rs(), _u = (
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
      return t ? (this._delegate = t, this._delegate) : vu;
    }, e;
  }()
), bu = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new rs();
    }, e;
  }()
), wu = new bu(), On = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new _u(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : wu;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), vr;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(vr || (vr = {}));
Nr.getInstance();
ke.instance();
var xu = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, n) {
      return Fl;
    }, e;
  }()
), ku = new xu(), Dr = "metrics", Tu = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return Xt(Dr, t, ke.instance());
    }, e.prototype.getMeterProvider = function() {
      return ze(Dr) || ku;
    }, e.prototype.getMeter = function(t, r, n) {
      return this.getMeterProvider().getMeter(t, r, n);
    }, e.prototype.disable = function() {
      Qt(Dr, ke.instance());
    }, e;
  }()
);
Tu.getInstance();
var Su = (
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
), dn = Ya("OpenTelemetry Baggage Key");
function ns(e) {
  return e.getValue(dn) || void 0;
}
function Cu() {
  return ns(Nr.getInstance().active());
}
function Iu(e, t) {
  return e.setValue(dn, t);
}
function Eu(e) {
  return e.deleteValue(dn);
}
var Ur = "propagation", Nu = new Su(), Pu = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = Ml, this.getBaggage = ns, this.getActiveBaggage = Cu, this.setBaggage = Iu, this.deleteBaggage = Eu;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return Xt(Ur, t, ke.instance());
    }, e.prototype.inject = function(t, r, n) {
      return n === void 0 && (n = tu), this._getGlobalPropagator().inject(t, r, n);
    }, e.prototype.extract = function(t, r, n) {
      return n === void 0 && (n = eu), this._getGlobalPropagator().extract(t, r, n);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Qt(Ur, ke.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return ze(Ur) || Nu;
    }, e;
  }()
);
Pu.getInstance();
var Lr = "trace", Ru = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new On(), this.wrapSpanContext = gu, this.isSpanContextValid = ts, this.deleteSpan = cu, this.getSpan = un, this.getActiveSpan = uu, this.getSpanContext = es, this.setSpan = cn, this.setSpanContext = du;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Xt(Lr, this._proxyTracerProvider, ke.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return ze(Lr) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Qt(Lr, ke.instance()), this._proxyTracerProvider = new On();
    }, e;
  }()
), ju = Ru.getInstance(), Ou = Object.defineProperty, pn = (e, t) => {
  for (var r in t)
    Ou(e, r, { get: t[r], enumerable: !0 });
};
function _r(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = new Headers(e ?? {});
  return n.has("Content-Type") || n.set("Content-Type", t), r !== void 0 && n.set("X-Vercel-AI-Data-Stream", r), n;
}
function An(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = {};
  if (e != null)
    for (const [a, s] of Object.entries(e))
      n[a] = s;
  return n["Content-Type"] == null && (n["Content-Type"] = t), r !== void 0 && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function Mn({
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
var as = "AI_InvalidArgumentError", ss = `vercel.ai.error.${as}`, Au = Symbol.for(ss), os, ue = class extends P {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: as,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[os] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return P.hasMarker(e, ss);
  }
};
os = Au;
async function Mu(e) {
  return e === void 0 ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
var is = "AI_RetryError", ls = `vercel.ai.error.${is}`, $u = Symbol.for(ls), us, $n = class extends P {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: is, message: e }), this[us] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return P.hasMarker(e, ls);
  }
};
us = $u;
var Zu = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => cs(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function cs(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (or(s) || t === 0)
      throw s;
    const o = yo(s), i = [...a, s], u = i.length;
    if (u > t)
      throw new $n({
        message: `Failed after ${u} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (s instanceof Error && ve.isInstance(s) && s.isRetryable === !0 && u <= t)
      return await Mu(r), cs(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw u === 1 ? s : new $n({
      message: `Failed after ${u} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function Du({
  maxRetries: e
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new ue({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new ue({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const t = e ?? 2;
  return {
    maxRetries: t,
    retry: Zu({ maxRetries: t })
  };
}
function Gr({
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
function Uu({
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
var Lu = {
  startSpan() {
    return sr;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(sr);
    if (typeof r == "function")
      return r(sr);
    if (typeof n == "function")
      return n(sr);
  }
}, sr = {
  spanContext() {
    return qu;
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
}, qu = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function Bu({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || ju.getTracer("ai") : Lu;
}
function Kr({
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
          code: vr.ERROR,
          message: o.message
        })) : s.setStatus({ code: vr.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function tt({
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
var ds = "AI_DownloadError", ps = `vercel.ai.error.${ds}`, Vu = Symbol.for(ps), fs, qr = class extends P {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: ds, message: a, cause: n }), this[fs] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return P.hasMarker(e, ps);
  }
};
fs = Vu;
async function zu({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const a = await t(n);
    if (!a.ok)
      throw new qr({
        url: n,
        statusCode: a.status,
        statusText: a.statusText
      });
    return {
      data: new Uint8Array(await a.arrayBuffer()),
      mimeType: (r = a.headers.get("content-type")) != null ? r : void 0
    };
  } catch (a) {
    throw qr.isInstance(a) ? a : new qr({ url: n, cause: a });
  }
}
var Hu = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function Fu(e) {
  for (const { bytes: t, mimeType: r } of Hu)
    if (e.length >= t.length && t.every((n, a) => e[a] === n))
      return r;
}
var ms = "AI_InvalidDataContentError", hs = `vercel.ai.error.${ms}`, Ju = Symbol.for(hs), gs, Zn = class extends P {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: ms, message: r, cause: t }), this[gs] = !0, this.content = e;
  }
  static isInstance(e) {
    return P.hasMarker(e, hs);
  }
};
gs = Ju;
var ys = l.union([
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
function Wu(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? ht(new Uint8Array(e)) : ht(e);
}
function br(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return No(e);
    } catch (t) {
      throw new Zn({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Zn({ content: e });
}
function Gu(e) {
  try {
    return new TextDecoder().decode(e);
  } catch {
    throw new Error("Error decoding Uint8Array to text");
  }
}
var vs = "AI_InvalidMessageRoleError", _s = `vercel.ai.error.${vs}`, Ku = Symbol.for(_s), bs, Yu = class extends P {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: vs, message: t }), this[bs] = !0, this.role = e;
  }
  static isInstance(e) {
    return P.hasMarker(e, _s);
  }
};
bs = Ku;
function Xu(e) {
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
async function Qu({
  prompt: e,
  modelSupportsImageUrls: t = !0,
  modelSupportsUrl: r = () => !1,
  downloadImplementation: n = zu
}) {
  const a = await tc(
    e.messages,
    n,
    t,
    r
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (s) => ec(s, a)
    )
  ];
}
function ec(e, t) {
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
        content: e.content.map((n) => rc(n, t)).filter((n) => n.type !== "text" || n.text !== ""),
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
      throw new Yu({ role: n });
    }
  }
}
async function tc(e, t, r, n) {
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
function rc(e, t) {
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
      const { mimeType: i, base64Content: u } = Xu(
        a.toString()
      );
      if (i == null || u == null)
        throw new Error(`Invalid data URL format in part ${o}`);
      r = i, s = br(u);
    } else {
      const i = t[a.toString()];
      i ? (s = i.data, r ?? (r = i.mimeType)) : s = a;
    }
  else
    s = br(a);
  switch (o) {
    case "image":
      return r == null && s instanceof Uint8Array && (r = Fu(s)), {
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
        data: s instanceof Uint8Array ? Wu(s) : s,
        mimeType: r,
        providerMetadata: e.experimental_providerMetadata
      };
  }
}
function nc({
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
      throw new ue({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new ue({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new ue({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new ue({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new ue({
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (a != null && typeof a != "number")
    throw new ue({
      parameter: "presencePenalty",
      value: a,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new ue({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (i != null && !Number.isInteger(i))
    throw new ue({
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
var Yr = l.lazy(
  () => l.union([
    l.null(),
    l.string(),
    l.number(),
    l.boolean(),
    l.record(l.string(), Yr),
    l.array(Yr)
  ])
), Me = l.record(
  l.string(),
  l.record(l.string(), Yr)
), ac = l.array(
  l.union([
    l.object({ type: l.literal("text"), text: l.string() }),
    l.object({
      type: l.literal("image"),
      data: l.string(),
      mimeType: l.string().optional()
    })
  ])
), ws = l.object({
  type: l.literal("text"),
  text: l.string(),
  experimental_providerMetadata: Me.optional()
}), sc = l.object({
  type: l.literal("image"),
  image: l.union([ys, l.instanceof(URL)]),
  mimeType: l.string().optional(),
  experimental_providerMetadata: Me.optional()
}), oc = l.object({
  type: l.literal("file"),
  data: l.union([ys, l.instanceof(URL)]),
  mimeType: l.string(),
  experimental_providerMetadata: Me.optional()
}), ic = l.object({
  type: l.literal("tool-call"),
  toolCallId: l.string(),
  toolName: l.string(),
  args: l.unknown()
}), lc = l.object({
  type: l.literal("tool-result"),
  toolCallId: l.string(),
  toolName: l.string(),
  result: l.unknown(),
  content: ac.optional(),
  isError: l.boolean().optional(),
  experimental_providerMetadata: Me.optional()
}), uc = l.object({
  role: l.literal("system"),
  content: l.string(),
  experimental_providerMetadata: Me.optional()
}), cc = l.object({
  role: l.literal("user"),
  content: l.union([
    l.string(),
    l.array(l.union([ws, sc, oc]))
  ]),
  experimental_providerMetadata: Me.optional()
}), dc = l.object({
  role: l.literal("assistant"),
  content: l.union([
    l.string(),
    l.array(l.union([ws, ic]))
  ]),
  experimental_providerMetadata: Me.optional()
}), pc = l.object({
  role: l.literal("tool"),
  content: l.array(lc),
  experimental_providerMetadata: Me.optional()
}), fc = l.union([
  uc,
  cc,
  dc,
  pc
]);
function mc(e) {
  if (!Array.isArray(e))
    return "other";
  if (e.length === 0)
    return "messages";
  const t = e.map(hc);
  return t.some((r) => r === "has-ui-specific-parts") ? "ui-messages" : t.every(
    (r) => r === "has-core-specific-parts" || r === "message"
  ) ? "messages" : "other";
}
function hc(e) {
  return typeof e == "object" && e !== null && (e.role === "function" || // UI-only role
  e.role === "data" || // UI-only role
  "toolInvocations" in e || // UI-specific field
  "experimental_attachments" in e) ? "has-ui-specific-parts" : typeof e == "object" && e !== null && "content" in e && (Array.isArray(e.content) || // Core messages can have array content
  "experimental_providerMetadata" in e) ? "has-core-specific-parts" : typeof e == "object" && e !== null && "role" in e && "content" in e && typeof e.content == "string" && ["system", "user", "assistant", "tool"].includes(e.role) ? "message" : "other";
}
function gc(e) {
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
            image: br(u)
          });
        else if ((n = s.contentType) != null && n.startsWith("text/"))
          a.push({
            type: "text",
            text: Gu(
              br(u)
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
var xs = "AI_MessageConversionError", ks = `vercel.ai.error.${xs}`, yc = Symbol.for(ks), Ts, Dn = class extends P {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: xs, message: t }), this[Ts] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return P.hasMarker(e, ks);
  }
};
Ts = yc;
function vc(e, t) {
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
            ...gc(c)
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
              ({ toolCallId: d, toolName: p, args: g }) => ({
                type: "tool-call",
                toolCallId: d,
                toolName: p,
                args: g
              })
            )
          ]
        }), a.push({
          role: "tool",
          content: u.map((d) => {
            if (!("result" in d))
              throw new Dn({
                originalMessage: s,
                message: "ToolInvocation must have a result: " + JSON.stringify(d)
              });
            const { toolCallId: p, toolName: g, result: _ } = d, y = n[g];
            return (y == null ? void 0 : y.experimental_toToolResultContent) != null ? {
              type: "tool-result",
              toolCallId: p,
              toolName: g,
              result: y.experimental_toToolResultContent(_),
              experimental_content: y.experimental_toToolResultContent(_)
            } : {
              type: "tool-result",
              toolCallId: p,
              toolName: g,
              result: _
            };
          })
        });
        break;
      }
      case "data":
        break;
      default: {
        const d = o;
        throw new Dn({
          originalMessage: s,
          message: `Unsupported role: ${d}`
        });
      }
    }
  }
  return a;
}
function _c({
  prompt: e,
  tools: t
}) {
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
    const r = mc(e.messages);
    if (r === "other")
      throw new Ue({
        prompt: e,
        message: "messages must be an array of CoreMessage or UIMessage"
      });
    const n = r === "ui-messages" ? vc(e.messages, {
      tools: t
    }) : e.messages, a = Tr({
      value: n,
      schema: l.array(fc)
    });
    if (!a.success)
      throw new Ue({
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
function bc({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
var wc = "JSON schema:", xc = "You MUST answer with a JSON object that matches the JSON schema above.", kc = "You MUST answer with JSON.";
function Tc({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? wc : void 0,
  schemaSuffix: n = t != null ? xc : kc
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
function Un(e, t) {
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
Kt({ prefix: "aiobj", size: 24 });
var ge = class {
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
function Ln() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function Sc() {
  let e = [], t = null, r = !1, n = Ln();
  const a = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = Ln(), await n.promise, a();
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
function Cc() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
Kt({ prefix: "aiobj", size: 24 });
var Ss = "AI_InvalidToolArgumentsError", Cs = `vercel.ai.error.${Ss}`, Ic = Symbol.for(Cs), Is, Es = class extends P {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Gt(
      r
    )}`
  }) {
    super({ name: Ss, message: n, cause: r }), this[Is] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return P.hasMarker(e, Cs);
  }
};
Is = Ic;
var Ns = "AI_NoSuchToolError", Ps = `vercel.ai.error.${Ns}`, Ec = Symbol.for(Ps), Rs, Jt = class extends P {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Ns, message: r }), this[Rs] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return P.hasMarker(e, Ps);
  }
};
Rs = Ec;
var js = "AI_ToolCallRepairError", Os = `vercel.ai.error.${js}`, Nc = Symbol.for(Os), As, Pc = class extends P {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${Gt(e)}`
  }) {
    super({ name: js, message: r, cause: e }), this[As] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return P.hasMarker(e, Os);
  }
};
As = Nc;
var Ms = "AI_ToolExecutionError", $s = `vercel.ai.error.${Ms}`, Rc = Symbol.for($s), Zs, jc = class extends P {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Error executing tool ${t}: ${Gt(r)}`
  }) {
    super({ name: Ms, message: n, cause: r }), this[Zs] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return P.hasMarker(e, $s);
  }
};
Zs = Rc;
function Oc(e) {
  return e != null && Object.keys(e).length > 0;
}
function Ac({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return Oc(e) ? {
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
            parameters: Ir(s.parameters).jsonSchema
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
var Mc = /^([\s\S]*?)(\s+)(\S*)$/;
function $c(e) {
  const t = e.match(Mc);
  return t ? { prefix: t[1], whitespace: t[2], suffix: t[3] } : void 0;
}
async function Zc({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: n,
  messages: a
}) {
  if (t == null)
    throw new Jt({ toolName: e.toolName });
  try {
    return await qn({ toolCall: e, tools: t });
  } catch (s) {
    if (r == null || !(Jt.isInstance(s) || Es.isInstance(s)))
      throw s;
    let o = null;
    try {
      o = await r({
        toolCall: e,
        tools: t,
        parameterSchema: ({ toolName: i }) => Ir(t[i].parameters).jsonSchema,
        system: n,
        messages: a,
        error: s
      });
    } catch (i) {
      throw new Pc({
        cause: i,
        originalError: s
      });
    }
    if (o == null)
      throw s;
    return await qn({ toolCall: o, tools: t });
  }
}
async function qn({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, n = t[r];
  if (n == null)
    throw new Jt({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = Ir(n.parameters), s = e.args.trim() === "" ? Tr({ value: {}, schema: a }) : rn({ text: e.args, schema: a });
  if (s.success === !1)
    throw new Es({
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
function Dc({
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
Kt({ prefix: "aitxt", size: 24 });
var Uc = {};
pn(Uc, {
  object: () => qc,
  text: () => Lc
});
var Lc = () => ({
  type: "text",
  responseFormat: () => ({ type: "text" }),
  injectIntoSystemPrompt({ system: e }) {
    return e;
  },
  parseOutput({ text: e }) {
    return e;
  }
}), qc = ({
  schema: e
}) => {
  const t = Ir(e);
  return {
    type: "object",
    responseFormat: ({ model: r }) => ({
      type: "json",
      schema: r.supportsStructuredOutputs ? t.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system: r, model: n }) {
      return n.supportsStructuredOutputs ? r : Tc({
        prompt: r,
        schema: t.jsonSchema
      });
    },
    parseOutput({ text: r }) {
      return Aa({ text: r, schema: t });
    }
  };
};
function fn(e, t) {
  const r = e.getReader(), n = t.getReader();
  let a, s, o = !1, i = !1;
  async function u(d) {
    try {
      a == null && (a = r.read());
      const p = await a;
      a = void 0, p.done ? d.close() : d.enqueue(p.value);
    } catch (p) {
      d.error(p);
    }
  }
  async function c(d) {
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
          await c(d);
          return;
        }
        if (i) {
          await u(d);
          return;
        }
        a == null && (a = r.read()), s == null && (s = n.read());
        const { result: p, reader: g } = await Promise.race([
          a.then((_) => ({ result: _, reader: r })),
          s.then((_) => ({ result: _, reader: n }))
        ]);
        p.done || d.enqueue(p.value), g === r ? (a = void 0, p.done && (await c(d), o = !0)) : (s = void 0, p.done && (i = !0, await u(d)));
      } catch (p) {
        d.error(p);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
function Bc({
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
  }), p = {}, g = /* @__PURE__ */ new Set();
  let _ = !1, y;
  function f() {
    _ && g.size === 0 && (y != null && c.enqueue(y), c.close());
  }
  const b = new TransformStream({
    async transform(v, E) {
      const I = v.type;
      switch (I) {
        case "text-delta":
        case "response-metadata":
        case "error": {
          E.enqueue(v);
          break;
        }
        case "tool-call-delta": {
          r && (p[v.toolCallId] || (E.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: v.toolCallId,
            toolName: v.toolName
          }), p[v.toolCallId] = !0), E.enqueue({
            type: "tool-call-delta",
            toolCallId: v.toolCallId,
            toolName: v.toolName,
            argsTextDelta: v.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          const k = v.toolName;
          if (e == null) {
            c.enqueue({
              type: "error",
              error: new Jt({ toolName: v.toolName })
            });
            break;
          }
          const j = e[k];
          if (j == null) {
            c.enqueue({
              type: "error",
              error: new Jt({
                toolName: v.toolName,
                availableTools: Object.keys(e)
              })
            });
            break;
          }
          try {
            const S = await Zc({
              toolCall: v,
              tools: e,
              repairToolCall: u,
              system: s,
              messages: o
            });
            if (E.enqueue(S), j.execute != null) {
              const B = Xe();
              g.add(B), Kr({
                name: "ai.toolCall",
                attributes: tt({
                  telemetry: a,
                  attributes: {
                    ...Gr({
                      operationId: "ai.toolCall",
                      telemetry: a
                    }),
                    "ai.toolCall.name": S.toolName,
                    "ai.toolCall.id": S.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(S.args)
                    }
                  }
                }),
                tracer: n,
                fn: async (V) => j.execute(S.args, {
                  toolCallId: S.toolCallId,
                  messages: o,
                  abortSignal: i
                }).then(
                  (M) => {
                    c.enqueue({
                      ...S,
                      type: "tool-result",
                      result: M
                    }), g.delete(B), f();
                    try {
                      V.setAttributes(
                        tt({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(M)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (M) => {
                    c.enqueue({
                      type: "error",
                      error: new jc({
                        toolName: S.toolName,
                        toolArgs: S.args,
                        cause: M
                      })
                    }), g.delete(B), f();
                  }
                )
              });
            }
          } catch (S) {
            c.enqueue({
              type: "error",
              error: S
            });
          }
          break;
        }
        case "finish": {
          y = {
            type: "finish",
            finishReason: v.finishReason,
            logprobs: v.logprobs,
            usage: bc(v.usage),
            experimental_providerMetadata: v.providerMetadata
          };
          break;
        }
        default: {
          const k = I;
          throw new Error(`Unhandled chunk type: ${k}`);
        }
      }
    },
    flush() {
      _ = !0, f();
    }
  });
  return new ReadableStream({
    async start(v) {
      return Promise.all([
        t.pipeThrough(b).pipeTo(
          new WritableStream({
            write(E) {
              v.enqueue(E);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
          new WritableStream({
            write(E) {
              v.enqueue(E);
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
var Vc = Kt({ prefix: "aitxt", size: 24 });
function Ud({
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
  experimental_telemetry: p,
  experimental_providerMetadata: g,
  experimental_toolCallStreaming: _ = !1,
  experimental_activeTools: y,
  experimental_repairToolCall: f,
  onChunk: b,
  onFinish: v,
  onStepFinish: E,
  _internal: {
    now: I = Cc,
    generateId: k = Vc,
    currentDate: j = () => /* @__PURE__ */ new Date()
  } = {},
  ...S
}) {
  return new zc({
    model: e,
    telemetry: p,
    headers: u,
    settings: S,
    maxRetries: o,
    abortSignal: i,
    system: n,
    prompt: a,
    messages: s,
    tools: t,
    toolChoice: r,
    toolCallStreaming: _,
    activeTools: y,
    repairToolCall: f,
    maxSteps: c,
    continueSteps: d,
    providerMetadata: g,
    onChunk: b,
    onFinish: v,
    onStepFinish: E,
    now: I,
    currentDate: j,
    generateId: k
  });
}
var zc = class {
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
    toolCallStreaming: p,
    activeTools: g,
    repairToolCall: _,
    maxSteps: y,
    continueSteps: f,
    providerMetadata: b,
    onChunk: v,
    onFinish: E,
    onStepFinish: I,
    now: k,
    currentDate: j,
    generateId: S
  }) {
    if (this.warningsPromise = new ge(), this.usagePromise = new ge(), this.finishReasonPromise = new ge(), this.providerMetadataPromise = new ge(), this.textPromise = new ge(), this.toolCallsPromise = new ge(), this.toolResultsPromise = new ge(), this.requestPromise = new ge(), this.responsePromise = new ge(), this.stepsPromise = new ge(), this.stitchableStream = Sc(), y < 1)
      throw new ue({
        parameter: "maxSteps",
        value: y,
        message: "maxSteps must be at least 1"
      });
    const { maxRetries: B, retry: V } = Du({
      maxRetries: a
    }), M = Bu(t), F = Uu({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...n, maxRetries: B }
    }), te = _c({
      prompt: { system: o, prompt: i, messages: u },
      tools: c
    }), U = this;
    Kr({
      name: "ai.streamText",
      attributes: tt({
        telemetry: t,
        attributes: {
          ...Gr({ operationId: "ai.streamText", telemetry: t }),
          ...F,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: i, messages: u })
          },
          "ai.settings.maxSteps": y
        }
      }),
      tracer: M,
      endWhenDone: !1,
      fn: async (Te) => {
        const re = [];
        async function ne({
          currentStep: ae,
          responseMessages: J,
          usage: $e,
          stepType: Ze,
          previousStepText: L,
          hasLeadingWhitespace: X
        }) {
          const W = J.length === 0 ? te.type : "messages", K = [
            ...te.messages,
            ...J
          ], yn = await Qu({
            prompt: {
              type: W,
              system: te.system,
              messages: K
            },
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: e.supportsUrl
          }), er = {
            type: "regular",
            ...Ac({ tools: c, toolChoice: d, activeTools: g })
          }, {
            result: { stream: Ls, warnings: tr, rawResponse: Fe, request: vn },
            doStreamSpan: Je,
            startTimestampMs: _n
          } = await V(
            () => Kr({
              name: "ai.streamText.doStream",
              attributes: tt({
                telemetry: t,
                attributes: {
                  ...Gr({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...F,
                  "ai.prompt.format": {
                    input: () => W
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(yn)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var O;
                      return (O = er.tools) == null ? void 0 : O.map((z) => JSON.stringify(z));
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => er.toolChoice != null ? JSON.stringify(er.toolChoice) : void 0
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
              tracer: M,
              endWhenDone: !1,
              fn: async (O) => ({
                startTimestampMs: k(),
                // get before the call
                doStreamSpan: O,
                result: await e.doStream({
                  mode: er,
                  ...nc(n),
                  inputFormat: W,
                  prompt: yn,
                  providerMetadata: b,
                  abortSignal: s,
                  headers: r
                })
              })
            })
          ), qs = Bc({
            tools: c,
            generatorStream: Ls,
            toolCallStreaming: p,
            tracer: M,
            telemetry: t,
            system: o,
            messages: K,
            repairToolCall: _,
            abortSignal: s
          }), Pr = vn ?? {}, fe = [], We = [];
          let se = "unknown", oe = {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          }, Ge, bn = !0, Ke = "", lt = Ze === "continue" ? L : "", ut, Y = {
            id: S(),
            timestamp: j(),
            modelId: e.modelId
          }, Ye = "", wn = !1, xn = !0, kn = !1;
          async function Rr({
            controller: O,
            chunk: z
          }) {
            O.enqueue(z), Ke += z.textDelta, lt += z.textDelta, wn = !0, kn = z.textDelta.trimEnd() !== z.textDelta, await (v == null ? void 0 : v({ chunk: z }));
          }
          U.stitchableStream.addStream(
            qs.pipeThrough(
              new TransformStream({
                async transform(O, z) {
                  var me, ct, Se;
                  if (bn) {
                    const he = k() - _n;
                    bn = !1, Je.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": he
                    }), Je.setAttributes({
                      "ai.response.msToFirstChunk": he
                    });
                  }
                  if (O.type === "text-delta" && O.textDelta.length === 0)
                    return;
                  const Ce = O.type;
                  switch (Ce) {
                    case "text-delta": {
                      if (f) {
                        const he = xn && X ? O.textDelta.trimStart() : O.textDelta;
                        if (he.length === 0)
                          break;
                        xn = !1, Ye += he;
                        const rr = $c(Ye);
                        rr != null && (Ye = rr.suffix, await Rr({
                          controller: z,
                          chunk: {
                            type: "text-delta",
                            textDelta: rr.prefix + rr.whitespace
                          }
                        }));
                      } else
                        await Rr({ controller: z, chunk: O });
                      break;
                    }
                    case "tool-call": {
                      z.enqueue(O), fe.push(O), await (v == null ? void 0 : v({ chunk: O }));
                      break;
                    }
                    case "tool-result": {
                      z.enqueue(O), We.push(O), await (v == null ? void 0 : v({ chunk: O }));
                      break;
                    }
                    case "response-metadata": {
                      Y = {
                        id: (me = O.id) != null ? me : Y.id,
                        timestamp: (ct = O.timestamp) != null ? ct : Y.timestamp,
                        modelId: (Se = O.modelId) != null ? Se : Y.modelId
                      };
                      break;
                    }
                    case "finish": {
                      oe = O.usage, se = O.finishReason, Ge = O.experimental_providerMetadata, ut = O.logprobs;
                      const he = k() - _n;
                      Je.addEvent("ai.stream.finish"), Je.setAttributes({
                        "ai.response.msToFinish": he,
                        "ai.response.avgCompletionTokensPerSecond": 1e3 * oe.completionTokens / he
                      });
                      break;
                    }
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      z.enqueue(O), await (v == null ? void 0 : v({ chunk: O }));
                      break;
                    }
                    case "error": {
                      z.enqueue(O), se = "error";
                      break;
                    }
                    default: {
                      const he = Ce;
                      throw new Error(`Unknown chunk type: ${he}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(O) {
                  const z = fe.length > 0 ? JSON.stringify(fe) : void 0;
                  let me = "done";
                  ae + 1 < y && (f && se === "length" && // only use continue when there are no tool calls:
                  fe.length === 0 ? me = "continue" : (
                    // there are tool calls:
                    fe.length > 0 && // all current tool calls have results:
                    We.length === fe.length && (me = "tool-result")
                  )), f && Ye.length > 0 && (me !== "continue" || // when the next step is a regular step, publish the buffer
                  Ze === "continue" && !wn) && (await Rr({
                    controller: O,
                    chunk: {
                      type: "text-delta",
                      textDelta: Ye
                    }
                  }), Ye = "");
                  try {
                    Je.setAttributes(
                      tt({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": se,
                          "ai.response.text": { output: () => Ke },
                          "ai.response.toolCalls": {
                            output: () => z
                          },
                          "ai.response.id": Y.id,
                          "ai.response.model": Y.modelId,
                          "ai.response.timestamp": Y.timestamp.toISOString(),
                          "ai.usage.promptTokens": oe.promptTokens,
                          "ai.usage.completionTokens": oe.completionTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [se],
                          "gen_ai.response.id": Y.id,
                          "gen_ai.response.model": Y.modelId,
                          "gen_ai.usage.input_tokens": oe.promptTokens,
                          "gen_ai.usage.output_tokens": oe.completionTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    Je.end();
                  }
                  if (O.enqueue({
                    type: "step-finish",
                    finishReason: se,
                    usage: oe,
                    experimental_providerMetadata: Ge,
                    logprobs: ut,
                    response: {
                      ...Y
                    },
                    isContinued: me === "continue"
                  }), Ze === "continue") {
                    const Ce = J[J.length - 1];
                    typeof Ce.content == "string" ? Ce.content += Ke : Ce.content.push({
                      text: Ke,
                      type: "text"
                    });
                  } else
                    J.push(
                      ...Dc({
                        text: Ke,
                        tools: c ?? {},
                        toolCalls: fe,
                        toolResults: We
                      })
                    );
                  const ct = {
                    stepType: Ze,
                    text: Ke,
                    toolCalls: fe,
                    toolResults: We,
                    finishReason: se,
                    usage: oe,
                    warnings: tr,
                    logprobs: ut,
                    request: Pr,
                    response: {
                      ...Y,
                      headers: Fe == null ? void 0 : Fe.headers,
                      // deep clone msgs to avoid mutating past messages in multi-step:
                      messages: JSON.parse(JSON.stringify(J))
                    },
                    experimental_providerMetadata: Ge,
                    isContinued: me === "continue"
                  };
                  re.push(ct), await (I == null ? void 0 : I(ct));
                  const Se = {
                    promptTokens: $e.promptTokens + oe.promptTokens,
                    completionTokens: $e.completionTokens + oe.completionTokens,
                    totalTokens: $e.totalTokens + oe.totalTokens
                  };
                  if (me !== "done") {
                    await ne({
                      currentStep: ae + 1,
                      responseMessages: J,
                      usage: Se,
                      stepType: me,
                      previousStepText: lt,
                      hasLeadingWhitespace: kn
                    });
                    return;
                  }
                  try {
                    O.enqueue({
                      type: "finish",
                      finishReason: se,
                      usage: Se,
                      experimental_providerMetadata: Ge,
                      logprobs: ut,
                      response: {
                        ...Y
                      }
                    }), U.stitchableStream.close(), Te.setAttributes(
                      tt({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": se,
                          "ai.response.text": { output: () => lt },
                          "ai.response.toolCalls": {
                            output: () => z
                          },
                          "ai.usage.promptTokens": Se.promptTokens,
                          "ai.usage.completionTokens": Se.completionTokens
                        }
                      })
                    ), U.usagePromise.resolve(Se), U.finishReasonPromise.resolve(se), U.textPromise.resolve(lt), U.toolCallsPromise.resolve(fe), U.providerMetadataPromise.resolve(Ge), U.toolResultsPromise.resolve(We), U.requestPromise.resolve(Pr), U.responsePromise.resolve({
                      ...Y,
                      headers: Fe == null ? void 0 : Fe.headers,
                      messages: J
                    }), U.stepsPromise.resolve(re), U.warningsPromise.resolve(tr ?? []), await (E == null ? void 0 : E({
                      finishReason: se,
                      logprobs: ut,
                      usage: Se,
                      text: lt,
                      toolCalls: fe,
                      // The tool results are inferred as a never[] type, because they are
                      // optional and the execute method with an inferred result type is
                      // optional as well. Therefore we need to cast the toolResults to any.
                      // The type exposed to the users will be correctly inferred.
                      toolResults: We,
                      request: Pr,
                      response: {
                        ...Y,
                        headers: Fe == null ? void 0 : Fe.headers,
                        messages: J
                      },
                      warnings: tr,
                      experimental_providerMetadata: Ge,
                      steps: re
                    }));
                  } catch (Ce) {
                    O.error(Ce);
                  } finally {
                    Te.end();
                  }
                }
              })
            )
          );
        }
        await ne({
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
    }).catch((Te) => {
      U.stitchableStream.addStream(
        new ReadableStream({
          start(re) {
            re.enqueue({ type: "error", error: Te }), re.close();
          }
        })
      ), U.stitchableStream.close();
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
    return Un(this.teeStream(), {
      transform(e, t) {
        e.type === "text-delta" ? t.enqueue(e.textDelta) : e.type === "error" && t.error(e.error);
      }
    });
  }
  get fullStream() {
    return Un(this.teeStream(), {
      transform(e, t) {
        t.enqueue(e);
      }
    });
  }
  toDataStreamInternal({
    getErrorMessage: e = () => "An error occurred.",
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
            o.enqueue(ye("text", s.textDelta));
            break;
          }
          case "tool-call-streaming-start": {
            o.enqueue(
              ye("tool_call_streaming_start", {
                toolCallId: s.toolCallId,
                toolName: s.toolName
              })
            );
            break;
          }
          case "tool-call-delta": {
            o.enqueue(
              ye("tool_call_delta", {
                toolCallId: s.toolCallId,
                argsTextDelta: s.argsTextDelta
              })
            );
            break;
          }
          case "tool-call": {
            o.enqueue(
              ye("tool_call", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              })
            );
            break;
          }
          case "tool-result": {
            o.enqueue(
              ye("tool_result", {
                toolCallId: s.toolCallId,
                result: s.result
              })
            );
            break;
          }
          case "error": {
            o.enqueue(
              ye("error", e(s.error))
            );
            break;
          }
          case "step-finish": {
            o.enqueue(
              ye("finish_step", {
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
              ye("finish_message", {
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
    return this.fullStream.pipeThrough(n).pipeThrough(a);
  }
  pipeDataStreamToResponse(e, {
    status: t,
    statusText: r,
    headers: n,
    data: a,
    getErrorMessage: s,
    sendUsage: o
  } = {}) {
    Mn({
      response: e,
      status: t,
      statusText: r,
      headers: An(n, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({ data: a, getErrorMessage: s, sendUsage: o })
    });
  }
  pipeTextStreamToResponse(e, t) {
    Mn({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: An(t == null ? void 0 : t.headers, {
        contentType: "text/plain; charset=utf-8"
      }),
      stream: this.textStream.pipeThrough(new TextEncoderStream())
    });
  }
  // TODO breaking change 5.0: remove pipeThrough(new TextEncoderStream())
  toDataStream(e) {
    const t = this.toDataStreamInternal({
      getErrorMessage: e == null ? void 0 : e.getErrorMessage,
      sendUsage: e == null ? void 0 : e.sendUsage
    }).pipeThrough(new TextEncoderStream());
    return e != null && e.data ? fn(e == null ? void 0 : e.data.stream, t) : t;
  }
  mergeIntoDataStream(e) {
    e.merge(
      this.toDataStreamInternal({
        getErrorMessage: e.onError
      })
    );
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
        headers: _r(e, {
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
      headers: _r(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, Hc = {};
pn(Hc, {
  mergeIntoDataStream: () => Wc,
  toDataStream: () => Fc,
  toDataStreamResponse: () => Jc
});
function Ds(e = {}) {
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
function mn(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        var a;
        if (typeof r == "string") {
          n.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && Bn(
            (a = r.data) == null ? void 0 : a.chunk,
            n
          );
          return;
        }
        Bn(r, n);
      }
    })
  ).pipeThrough(Ds(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        n.enqueue(ye("text", r));
      }
    })
  );
}
function Fc(e, t) {
  return mn(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function Jc(e, t) {
  var r;
  const n = mn(
    e,
    t == null ? void 0 : t.callbacks
  ).pipeThrough(new TextEncoderStream()), a = t == null ? void 0 : t.data, s = t == null ? void 0 : t.init, o = a ? fn(a.stream, n) : n;
  return new Response(o, {
    status: (r = s == null ? void 0 : s.status) != null ? r : 200,
    statusText: s == null ? void 0 : s.statusText,
    headers: _r(s == null ? void 0 : s.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function Wc(e, t) {
  t.dataStream.merge(mn(e, t.callbacks));
}
function Bn(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const n of r)
      n.type === "text" && t.enqueue(n.text);
  }
}
var Gc = {};
pn(Gc, {
  mergeIntoDataStream: () => Xc,
  toDataStream: () => Kc,
  toDataStreamResponse: () => Yc
});
function hn(e, t) {
  const r = Qc();
  return go(e[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(n, a) {
        a.enqueue(r(n.delta));
      }
    })
  ).pipeThrough(Ds(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (n, a) => {
        a.enqueue(ye("text", n));
      }
    })
  );
}
function Kc(e, t) {
  return hn(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function Yc(e, t = {}) {
  var r;
  const { init: n, data: a, callbacks: s } = t, o = hn(e, s).pipeThrough(
    new TextEncoderStream()
  ), i = a ? fn(a.stream, o) : o;
  return new Response(i, {
    status: (r = n == null ? void 0 : n.status) != null ? r : 200,
    statusText: n == null ? void 0 : n.statusText,
    headers: _r(n == null ? void 0 : n.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function Xc(e, t) {
  t.dataStream.merge(hn(e, t.callbacks));
}
function Qc() {
  let e = !0;
  return (t) => (e && (t = t.trimStart(), t && (e = !1)), t);
}
var ed = l.object({
  type: l.literal("error"),
  error: l.object({
    type: l.string(),
    message: l.string()
  })
}), Vn = nn({
  errorSchema: ed,
  errorToMessage: (e) => e.error.message
});
function td({
  prompt: e,
  cacheControl: t
}) {
  var r, n, a, s;
  const o = /* @__PURE__ */ new Set(), i = rd(e);
  let u;
  const c = [];
  function d(p) {
    var g;
    if (t === !1)
      return;
    const _ = p == null ? void 0 : p.anthropic;
    return (g = _ == null ? void 0 : _.cacheControl) != null ? g : _ == null ? void 0 : _.cache_control;
  }
  for (let p = 0; p < i.length; p++) {
    const g = i[p], _ = p === i.length - 1, y = g.type;
    switch (y) {
      case "system": {
        if (u != null)
          throw new q({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        u = g.messages.map(({ content: f, providerMetadata: b }) => ({
          type: "text",
          text: f,
          cache_control: d(b)
        }));
        break;
      }
      case "user": {
        const f = [];
        for (const b of g.messages) {
          const { role: v, content: E } = b;
          switch (v) {
            case "user": {
              for (let I = 0; I < E.length; I++) {
                const k = E[I], j = I === E.length - 1, S = (r = d(k.providerMetadata)) != null ? r : j ? d(b.providerMetadata) : void 0;
                switch (k.type) {
                  case "text": {
                    f.push({
                      type: "text",
                      text: k.text,
                      cache_control: S
                    });
                    break;
                  }
                  case "image": {
                    if (k.image instanceof URL)
                      throw new q({
                        functionality: "Image URLs in user messages"
                      });
                    f.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: (n = k.mimeType) != null ? n : "image/jpeg",
                        data: ht(k.image)
                      },
                      cache_control: S
                    });
                    break;
                  }
                  case "file": {
                    if (k.data instanceof URL)
                      throw new q({
                        functionality: "Image URLs in user messages"
                      });
                    if (k.mimeType !== "application/pdf")
                      throw new q({
                        functionality: "Non-PDF files in user messages"
                      });
                    o.add("pdfs-2024-09-25"), f.push({
                      type: "document",
                      source: {
                        type: "base64",
                        media_type: "application/pdf",
                        data: k.data
                      },
                      cache_control: S
                    });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let I = 0; I < E.length; I++) {
                const k = E[I], j = I === E.length - 1, S = (a = d(k.providerMetadata)) != null ? a : j ? d(b.providerMetadata) : void 0, B = k.content != null ? k.content.map((V) => {
                  var M;
                  switch (V.type) {
                    case "text":
                      return {
                        type: "text",
                        text: V.text,
                        cache_control: void 0
                      };
                    case "image":
                      return {
                        type: "image",
                        source: {
                          type: "base64",
                          media_type: (M = V.mimeType) != null ? M : "image/jpeg",
                          data: V.data
                        },
                        cache_control: void 0
                      };
                  }
                }) : JSON.stringify(k.result);
                f.push({
                  type: "tool_result",
                  tool_use_id: k.toolCallId,
                  content: B,
                  is_error: k.isError,
                  cache_control: S
                });
              }
              break;
            }
            default: {
              const I = v;
              throw new Error(`Unsupported role: ${I}`);
            }
          }
        }
        c.push({ role: "user", content: f });
        break;
      }
      case "assistant": {
        const f = [];
        for (let b = 0; b < g.messages.length; b++) {
          const v = g.messages[b], E = b === g.messages.length - 1, { content: I } = v;
          for (let k = 0; k < I.length; k++) {
            const j = I[k], S = k === I.length - 1, B = (s = d(j.providerMetadata)) != null ? s : S ? d(v.providerMetadata) : void 0;
            switch (j.type) {
              case "text": {
                f.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    _ && E && S ? j.text.trim() : j.text
                  ),
                  cache_control: B
                });
                break;
              }
              case "tool-call": {
                f.push({
                  type: "tool_use",
                  id: j.toolCallId,
                  name: j.toolName,
                  input: j.args,
                  cache_control: B
                });
                break;
              }
            }
          }
        }
        c.push({ role: "assistant", content: f });
        break;
      }
      default: {
        const f = y;
        throw new Error(`Unsupported type: ${f}`);
      }
    }
  }
  return {
    prompt: { system: u, messages: c },
    betas: o
  };
}
function rd(e) {
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
function zn(e) {
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
function nd(e) {
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
      throw new q({
        functionality: `Unsupported tool choice type: ${u}`
      });
    }
  }
}
var ad = class {
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
    var p;
    const g = e.type, _ = [];
    o != null && _.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && _.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), d != null && _.push({
      type: "unsupported-setting",
      setting: "seed"
    }), c != null && c.type !== "text" && _.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: y, betas: f } = td({
      prompt: t,
      cacheControl: (p = this.settings.cacheControl) != null ? p : !1
    }), b = {
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
      system: y.system,
      messages: y.messages
    };
    switch (g) {
      case "regular": {
        const {
          tools: v,
          tool_choice: E,
          toolWarnings: I,
          betas: k
        } = nd(e);
        return {
          args: { ...b, tools: v, tool_choice: E },
          warnings: [..._, ...I],
          betas: /* @__PURE__ */ new Set([...f, ...k])
        };
      }
      case "object-json":
        throw new q({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: v, description: E, parameters: I } = e.tool;
        return {
          args: {
            ...b,
            tools: [{ name: v, description: E, input_schema: I }],
            tool_choice: { type: "tool", name: v }
          },
          warnings: _,
          betas: f
        };
      }
      default: {
        const v = g;
        throw new Error(`Unsupported type: ${v}`);
      }
    }
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return this.settings.cacheControl && e.add("prompt-caching-2024-07-31"), Ee(
      await Co(this.config.headers),
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
    const { args: s, warnings: o, betas: i } = await this.getArgs(e), { responseHeaders: u, value: c } = await be({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: i, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: Vn,
      successfulResponseHandler: it(
        sd
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: d, ...p } = s;
    let g = "";
    for (const y of c.content)
      y.type === "text" && (g += y.text);
    let _;
    if (c.content.some((y) => y.type === "tool_use")) {
      _ = [];
      for (const y of c.content)
        y.type === "tool_use" && _.push({
          toolCallType: "function",
          toolCallId: y.id,
          toolName: y.name,
          args: JSON.stringify(y.input)
        });
    }
    return {
      text: g,
      toolCalls: _,
      finishReason: zn(c.stop_reason),
      usage: {
        promptTokens: c.usage.input_tokens,
        completionTokens: c.usage.output_tokens
      },
      rawCall: { rawPrompt: d, rawSettings: p },
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
    const { args: t, warnings: r, betas: n } = await this.getArgs(e), a = { ...t, stream: !0 }, { responseHeaders: s, value: o } = await be({
      url: this.buildRequestUrl(!0),
      headers: await this.getHeaders({ betas: n, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: Vn,
      successfulResponseHandler: Sr(
        od
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...u } = t;
    let c = "unknown";
    const d = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, p = {};
    let g;
    const _ = this;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          transform(y, f) {
            var b, v, E, I;
            if (!y.success) {
              f.enqueue({ type: "error", error: y.error });
              return;
            }
            const k = y.value;
            switch (k.type) {
              case "ping":
                return;
              case "content_block_start": {
                const j = k.content_block.type;
                switch (j) {
                  case "text":
                    return;
                  case "tool_use": {
                    p[k.index] = {
                      toolCallId: k.content_block.id,
                      toolName: k.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const S = j;
                    throw new Error(
                      `Unsupported content block type: ${S}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (p[k.index] != null) {
                  const j = p[k.index];
                  f.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: j.toolCallId,
                    toolName: j.toolName,
                    args: j.jsonText
                  }), delete p[k.index];
                }
                return;
              }
              case "content_block_delta": {
                const j = k.delta.type;
                switch (j) {
                  case "text_delta": {
                    f.enqueue({
                      type: "text-delta",
                      textDelta: k.delta.text
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const S = p[k.index];
                    f.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: S.toolCallId,
                      toolName: S.toolName,
                      argsTextDelta: k.delta.partial_json
                    }), S.jsonText += k.delta.partial_json;
                    return;
                  }
                  default: {
                    const S = j;
                    throw new Error(
                      `Unsupported delta type: ${S}`
                    );
                  }
                }
              }
              case "message_start": {
                d.promptTokens = k.message.usage.input_tokens, d.completionTokens = k.message.usage.output_tokens, _.settings.cacheControl === !0 && (g = {
                  anthropic: {
                    cacheCreationInputTokens: (b = k.message.usage.cache_creation_input_tokens) != null ? b : null,
                    cacheReadInputTokens: (v = k.message.usage.cache_read_input_tokens) != null ? v : null
                  }
                }), f.enqueue({
                  type: "response-metadata",
                  id: (E = k.message.id) != null ? E : void 0,
                  modelId: (I = k.message.model) != null ? I : void 0
                });
                return;
              }
              case "message_delta": {
                d.completionTokens = k.usage.output_tokens, c = zn(k.delta.stop_reason);
                return;
              }
              case "message_stop": {
                f.enqueue({
                  type: "finish",
                  finishReason: c,
                  usage: d,
                  providerMetadata: g
                });
                return;
              }
              case "error": {
                f.enqueue({ type: "error", error: k.error });
                return;
              }
              default: {
                const j = k;
                throw new Error(`Unsupported chunk type: ${j}`);
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
}, sd = l.object({
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
}), od = l.discriminatedUnion("type", [
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
]), id = l.object({
  command: l.string(),
  restart: l.boolean().optional()
});
function ld(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20241022",
    args: {},
    parameters: id,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var ud = l.object({
  command: l.enum(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: l.string(),
  file_text: l.string().optional(),
  insert_line: l.number().int().optional(),
  new_str: l.string().optional(),
  old_str: l.string().optional(),
  view_range: l.array(l.number().int()).optional()
});
function cd(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20241022",
    args: {},
    parameters: ud,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var dd = l.object({
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
function pd(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20241022",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: dd,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var fd = {
  bash_20241022: ld,
  textEditor_20241022: cd,
  computer_20241022: pd
};
function md(e = {}) {
  var t;
  const r = (t = an(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", n = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": tn({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), a = (o, i = {}) => new ad(o, i, {
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
    throw new eo({ modelId: o, modelType: "textEmbeddingModel" });
  }, s.tools = fd, s;
}
md();
function hd(e) {
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
                  image_url: o.image instanceof URL ? o.image.toString() : `data:${(i = o.mimeType) != null ? i : "image/jpeg"};base64,${ht(o.image)}`
                };
              case "file":
                throw new q({
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
function Hn(e) {
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
var gd = l.object({
  object: l.literal("error"),
  message: l.string(),
  type: l.string(),
  param: l.string().nullable(),
  code: l.string().nullable()
}), Xr = nn({
  errorSchema: gd,
  errorToMessage: (e) => e.message
});
function Fn({
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
function yd(e) {
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
      throw new q({
        functionality: `Unsupported tool choice type: ${i}`
      });
    }
  }
}
var vd = class {
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
    const p = e.type, g = [];
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
    const _ = {
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
      messages: hd(t)
    };
    switch (p) {
      case "regular": {
        const { tools: y, tool_choice: f, toolWarnings: b } = yd(e);
        return {
          args: { ..._, tools: y, tool_choice: f },
          warnings: [...g, ...b]
        };
      }
      case "object-json":
        return {
          args: {
            ..._,
            response_format: { type: "json_object" }
          },
          warnings: g
        };
      case "object-tool":
        return {
          args: {
            ..._,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: g
        };
      default: {
        const y = p;
        throw new Error(`Unsupported type: ${y}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const { args: n, warnings: a } = this.getArgs(e), { responseHeaders: s, value: o } = await be({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ee(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Xr,
      successfulResponseHandler: it(
        _d
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...u } = n, c = o.choices[0];
    let d = (t = c.message.content) != null ? t : void 0;
    const p = i[i.length - 1];
    return p.role === "assistant" && (d != null && d.startsWith(p.content)) && (d = d.slice(p.content.length)), {
      text: d,
      toolCalls: (r = c.message.tool_calls) == null ? void 0 : r.map((g) => ({
        toolCallType: "function",
        toolCallId: g.id,
        toolName: g.function.name,
        args: g.function.arguments
      })),
      finishReason: Hn(c.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: u },
      rawResponse: { headers: s },
      request: { body: JSON.stringify(n) },
      response: Fn(o),
      warnings: a
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = { ...t, stream: !0 }, { responseHeaders: a, value: s } = await be({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ee(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Xr,
      successfulResponseHandler: Sr(
        bd
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d = 0, p = !1;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(g, _) {
            if (!g.success) {
              _.enqueue({ type: "error", error: g.error });
              return;
            }
            d++;
            const y = g.value;
            d === 1 && _.enqueue({
              type: "response-metadata",
              ...Fn(y)
            }), y.usage != null && (c = {
              promptTokens: y.usage.prompt_tokens,
              completionTokens: y.usage.completion_tokens
            });
            const f = y.choices[0];
            if ((f == null ? void 0 : f.finish_reason) != null && (u = Hn(f.finish_reason)), (f == null ? void 0 : f.delta) == null)
              return;
            const b = f.delta;
            if (d <= 2) {
              const v = o[o.length - 1];
              if (v.role === "assistant" && b.content === v.content.trimEnd()) {
                b.content.length < v.content.length && (p = !0);
                return;
              }
            }
            if (b.content != null && (_.enqueue({
              type: "text-delta",
              textDelta: p ? b.content.trimStart() : b.content
            }), p = !1), b.tool_calls != null)
              for (const v of b.tool_calls)
                _.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: v.id,
                  toolName: v.function.name,
                  argsTextDelta: v.function.arguments
                }), _.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: v.id,
                  toolName: v.function.name,
                  args: v.function.arguments
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
}, _d = l.object({
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
}), bd = l.object({
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
}), wd = class {
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
      throw new Sa({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await be({
      url: `${this.config.baseURL}/embeddings`,
      headers: Ee(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Xr,
      successfulResponseHandler: it(
        xd
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
}, xd = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function kd(e = {}) {
  var t;
  const r = (t = an(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", n = () => ({
    Authorization: `Bearer ${tn({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (i, u = {}) => new vd(i, u, {
    provider: "mistral.chat",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = (i, u = {}) => new wd(i, u, {
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
kd();
function Td({
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
                    url: s.image instanceof URL ? s.image.toString() : `data:${(o = s.mimeType) != null ? o : "image/jpeg"};base64,${ht(s.image)}`,
                    // OpenAI specific extension: image detail
                    detail: (u = (i = s.providerMetadata) == null ? void 0 : i.openai) == null ? void 0 : u.imageDetail
                  }
                };
              case "file": {
                if (s.data instanceof URL)
                  throw new q({
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
                    throw new q({
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
            throw new q({
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
function Jn(e) {
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
function wr(e) {
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
var gn = l.object({
  error: l.object({
    message: l.string(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l.string().nullish(),
    param: l.any().nullish(),
    code: l.union([l.string(), l.number()]).nullish()
  })
}), Wt = nn({
  errorSchema: gn,
  errorToMessage: (e) => e.error.message
});
function xr({
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
function Sd({
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
    for (const p of a)
      p.type === "provider-defined" ? s.push({ type: "unsupported-tool", tool: p }) : c.push({
        name: p.name,
        description: p.description,
        parameters: p.parameters
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
        throw new q({
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
      throw new q({
        functionality: `Unsupported tool choice type: ${c}`
      });
    }
  }
}
var Cd = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get supportsStructuredOutputs() {
    var e;
    return (e = this.settings.structuredOutputs) != null ? e : !1;
  }
  get defaultObjectGenerationMode() {
    return Pd(this.modelId) ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
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
    providerMetadata: p
  }) {
    var g, _, y, f, b, v, E, I, k, j;
    const S = e.type, B = [];
    s != null && B.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (c == null ? void 0 : c.type) === "json" && c.schema != null && !this.supportsStructuredOutputs && B.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const V = this.settings.useLegacyFunctionCalling;
    if (V && this.settings.parallelToolCalls === !0)
      throw new q({
        functionality: "useLegacyFunctionCalling with parallelToolCalls"
      });
    if (V && this.supportsStructuredOutputs)
      throw new q({
        functionality: "structuredOutputs with useLegacyFunctionCalling"
      });
    const M = {
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
      max_completion_tokens: (y = (_ = p == null ? void 0 : p.openai) == null ? void 0 : _.maxCompletionTokens) != null ? y : void 0,
      store: (b = (f = p == null ? void 0 : p.openai) == null ? void 0 : f.store) != null ? b : void 0,
      metadata: (E = (v = p == null ? void 0 : p.openai) == null ? void 0 : v.metadata) != null ? E : void 0,
      prediction: (k = (I = p == null ? void 0 : p.openai) == null ? void 0 : I.prediction) != null ? k : void 0,
      // messages:
      messages: Td({
        prompt: t,
        useLegacyFunctionCalling: V
      })
    };
    switch (Nd(this.modelId) && (M.temperature = void 0, M.top_p = void 0, M.frequency_penalty = void 0, M.presence_penalty = void 0), S) {
      case "regular": {
        const { tools: F, tool_choice: te, functions: U, function_call: Te, toolWarnings: re } = Sd({
          mode: e,
          useLegacyFunctionCalling: V,
          structuredOutputs: this.supportsStructuredOutputs
        });
        return {
          args: {
            ...M,
            tools: F,
            tool_choice: te,
            functions: U,
            function_call: Te
          },
          warnings: [...B, ...re]
        };
      }
      case "object-json":
        return {
          args: {
            ...M,
            response_format: this.supportsStructuredOutputs && e.schema != null ? {
              type: "json_schema",
              json_schema: {
                schema: e.schema,
                strict: !0,
                name: (j = e.name) != null ? j : "response",
                description: e.description
              }
            } : { type: "json_object" }
          },
          warnings: B
        };
      case "object-tool":
        return {
          args: V ? {
            ...M,
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
            ...M,
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
          warnings: B
        };
      default: {
        const F = S;
        throw new Error(`Unsupported type: ${F}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o, i, u, c, d, p, g, _, y, f, b, v, E;
    const { args: I, warnings: k } = this.getArgs(e), { responseHeaders: j, value: S } = await be({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), e.headers),
      body: I,
      failedResponseHandler: Wt,
      successfulResponseHandler: it(
        Id
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: B, ...V } = I, M = S.choices[0];
    let F;
    return (((r = (t = S.usage) == null ? void 0 : t.completion_tokens_details) == null ? void 0 : r.reasoning_tokens) != null || ((a = (n = S.usage) == null ? void 0 : n.prompt_tokens_details) == null ? void 0 : a.cached_tokens) != null) && (F = { openai: {} }, ((o = (s = S.usage) == null ? void 0 : s.completion_tokens_details) == null ? void 0 : o.reasoning_tokens) != null && (F.openai.reasoningTokens = (u = (i = S.usage) == null ? void 0 : i.completion_tokens_details) == null ? void 0 : u.reasoning_tokens), ((d = (c = S.usage) == null ? void 0 : c.prompt_tokens_details) == null ? void 0 : d.cached_tokens) != null && (F.openai.cachedPromptTokens = (g = (p = S.usage) == null ? void 0 : p.prompt_tokens_details) == null ? void 0 : g.cached_tokens)), {
      text: (_ = M.message.content) != null ? _ : void 0,
      toolCalls: this.settings.useLegacyFunctionCalling && M.message.function_call ? [
        {
          toolCallType: "function",
          toolCallId: Xe(),
          toolName: M.message.function_call.name,
          args: M.message.function_call.arguments
        }
      ] : (y = M.message.tool_calls) == null ? void 0 : y.map((te) => {
        var U;
        return {
          toolCallType: "function",
          toolCallId: (U = te.id) != null ? U : Xe(),
          toolName: te.function.name,
          args: te.function.arguments
        };
      }),
      finishReason: wr(M.finish_reason),
      usage: {
        promptTokens: (b = (f = S.usage) == null ? void 0 : f.prompt_tokens) != null ? b : NaN,
        completionTokens: (E = (v = S.usage) == null ? void 0 : v.completion_tokens) != null ? E : NaN
      },
      rawCall: { rawPrompt: B, rawSettings: V },
      rawResponse: { headers: j },
      request: { body: JSON.stringify(I) },
      response: xr(S),
      warnings: k,
      logprobs: Jn(M.logprobs),
      providerMetadata: F
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = {
      ...t,
      stream: !0,
      // only include stream_options when in strict compatibility mode:
      stream_options: this.config.compatibility === "strict" ? { include_usage: !0 } : void 0
    }, { responseHeaders: a, value: s } = await be({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Wt,
      successfulResponseHandler: Sr(
        Ed
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t, u = [];
    let c = "unknown", d = {
      promptTokens: void 0,
      completionTokens: void 0
    }, p, g = !0;
    const { useLegacyFunctionCalling: _ } = this.settings;
    let y;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(f, b) {
            var v, E, I, k, j, S, B, V, M, F, te, U, Te, re;
            if (!f.success) {
              c = "error", b.enqueue({ type: "error", error: f.error });
              return;
            }
            const ne = f.value;
            if ("error" in ne) {
              c = "error", b.enqueue({ type: "error", error: ne.error });
              return;
            }
            if (g && (g = !1, b.enqueue({
              type: "response-metadata",
              ...xr(ne)
            })), ne.usage != null) {
              d = {
                promptTokens: (v = ne.usage.prompt_tokens) != null ? v : void 0,
                completionTokens: (E = ne.usage.completion_tokens) != null ? E : void 0
              };
              const {
                completion_tokens_details: L,
                prompt_tokens_details: X
              } = ne.usage;
              ((L == null ? void 0 : L.reasoning_tokens) != null || (X == null ? void 0 : X.cached_tokens) != null) && (y = { openai: {} }, (L == null ? void 0 : L.reasoning_tokens) != null && (y.openai.reasoningTokens = L == null ? void 0 : L.reasoning_tokens), (X == null ? void 0 : X.cached_tokens) != null && (y.openai.cachedPromptTokens = X == null ? void 0 : X.cached_tokens));
            }
            const ae = ne.choices[0];
            if ((ae == null ? void 0 : ae.finish_reason) != null && (c = wr(ae.finish_reason)), (ae == null ? void 0 : ae.delta) == null)
              return;
            const J = ae.delta;
            J.content != null && b.enqueue({
              type: "text-delta",
              textDelta: J.content
            });
            const $e = Jn(
              ae == null ? void 0 : ae.logprobs
            );
            $e != null && $e.length && (p === void 0 && (p = []), p.push(...$e));
            const Ze = _ && J.function_call != null ? [
              {
                type: "function",
                id: Xe(),
                function: J.function_call,
                index: 0
              }
            ] : J.tool_calls;
            if (Ze != null)
              for (const L of Ze) {
                const X = L.index;
                if (u[X] == null) {
                  if (L.type !== "function")
                    throw new jr({
                      data: L,
                      message: "Expected 'function' type."
                    });
                  if (L.id == null)
                    throw new jr({
                      data: L,
                      message: "Expected 'id' to be a string."
                    });
                  if (((I = L.function) == null ? void 0 : I.name) == null)
                    throw new jr({
                      data: L,
                      message: "Expected 'function.name' to be a string."
                    });
                  u[X] = {
                    id: L.id,
                    type: "function",
                    function: {
                      name: L.function.name,
                      arguments: (k = L.function.arguments) != null ? k : ""
                    },
                    hasFinished: !1
                  };
                  const K = u[X];
                  ((j = K.function) == null ? void 0 : j.name) != null && ((S = K.function) == null ? void 0 : S.arguments) != null && (K.function.arguments.length > 0 && b.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: K.id,
                    toolName: K.function.name,
                    argsTextDelta: K.function.arguments
                  }), In(K.function.arguments) && (b.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (B = K.id) != null ? B : Xe(),
                    toolName: K.function.name,
                    args: K.function.arguments
                  }), K.hasFinished = !0));
                  continue;
                }
                const W = u[X];
                W.hasFinished || (((V = L.function) == null ? void 0 : V.arguments) != null && (W.function.arguments += (F = (M = L.function) == null ? void 0 : M.arguments) != null ? F : ""), b.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: W.id,
                  toolName: W.function.name,
                  argsTextDelta: (te = L.function.arguments) != null ? te : ""
                }), ((U = W.function) == null ? void 0 : U.name) != null && ((Te = W.function) == null ? void 0 : Te.arguments) != null && In(W.function.arguments) && (b.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (re = W.id) != null ? re : Xe(),
                  toolName: W.function.name,
                  args: W.function.arguments
                }), W.hasFinished = !0));
              }
          },
          flush(f) {
            var b, v;
            f.enqueue({
              type: "finish",
              finishReason: c,
              logprobs: p,
              usage: {
                promptTokens: (b = d.promptTokens) != null ? b : NaN,
                completionTokens: (v = d.completionTokens) != null ? v : NaN
              },
              ...y != null ? { providerMetadata: y } : {}
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
}, Us = l.object({
  prompt_tokens: l.number().nullish(),
  completion_tokens: l.number().nullish(),
  prompt_tokens_details: l.object({
    cached_tokens: l.number().nullish()
  }).nullish(),
  completion_tokens_details: l.object({
    reasoning_tokens: l.number().nullish()
  }).nullish()
}).nullish(), Id = l.object({
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
  usage: Us
}), Ed = l.union([
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
    usage: Us
  }),
  gn
]);
function Nd(e) {
  return e.startsWith("o1-");
}
function Pd(e) {
  return e.startsWith("gpt-4o-audio-preview");
}
function Rd({
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
              throw new q({
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
              throw new q({
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
        throw new q({
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
function Wn(e) {
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
var jd = class {
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
    seed: p
  }) {
    var g;
    const _ = e.type, y = [];
    o != null && y.push({
      type: "unsupported-setting",
      setting: "topK"
    }), d != null && d.type !== "text" && y.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: f, stopSequences: b } = Rd({ prompt: r, inputFormat: t }), v = [...b ?? [], ...c ?? []], E = {
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
      seed: p,
      // prompt:
      prompt: f,
      // stop sequences:
      stop: v.length > 0 ? v : void 0
    };
    switch (_) {
      case "regular": {
        if ((g = e.tools) != null && g.length)
          throw new q({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new q({
            functionality: "toolChoice"
          });
        return { args: E, warnings: y };
      }
      case "object-json":
        throw new q({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new q({
          functionality: "object-tool mode"
        });
      default: {
        const I = _;
        throw new Error(`Unsupported type: ${I}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await be({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Wt,
      successfulResponseHandler: it(
        Od
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
      finishReason: wr(i.finish_reason),
      logprobs: Wn(i.logprobs),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      response: xr(a),
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
    }, { responseHeaders: a, value: s } = await be({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Wt,
      successfulResponseHandler: Sr(
        Ad
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: o, ...i } = t;
    let u = "unknown", c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d, p = !0;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(g, _) {
            if (!g.success) {
              u = "error", _.enqueue({ type: "error", error: g.error });
              return;
            }
            const y = g.value;
            if ("error" in y) {
              u = "error", _.enqueue({ type: "error", error: y.error });
              return;
            }
            p && (p = !1, _.enqueue({
              type: "response-metadata",
              ...xr(y)
            })), y.usage != null && (c = {
              promptTokens: y.usage.prompt_tokens,
              completionTokens: y.usage.completion_tokens
            });
            const f = y.choices[0];
            (f == null ? void 0 : f.finish_reason) != null && (u = wr(f.finish_reason)), (f == null ? void 0 : f.text) != null && _.enqueue({
              type: "text-delta",
              textDelta: f.text
            });
            const b = Wn(
              f == null ? void 0 : f.logprobs
            );
            b != null && b.length && (d === void 0 && (d = []), d.push(...b));
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
}, Od = l.object({
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
}), Ad = l.union([
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
  gn
]), Md = class {
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
      throw new Sa({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await be({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: Wt,
      successfulResponseHandler: it(
        $d
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
}, $d = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function Zd(e = {}) {
  var t, r, n;
  const a = (t = an(e.baseURL)) != null ? t : "https://api.openai.com/v1", s = (r = e.compatibility) != null ? r : "compatible", o = (n = e.name) != null ? n : "openai", i = () => ({
    Authorization: `Bearer ${tn({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), u = (_, y = {}) => new Cd(_, y, {
    provider: `${o}.chat`,
    url: ({ path: f }) => `${a}${f}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), c = (_, y = {}) => new jd(_, y, {
    provider: `${o}.completion`,
    url: ({ path: f }) => `${a}${f}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), d = (_, y = {}) => new Md(_, y, {
    provider: `${o}.embedding`,
    url: ({ path: f }) => `${a}${f}`,
    headers: i,
    fetch: e.fetch
  }), p = (_, y) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return _ === "gpt-3.5-turbo-instruct" ? c(
      _,
      y
    ) : u(_, y);
  }, g = function(_, y) {
    return p(_, y);
  };
  return g.languageModel = p, g.chat = u, g.completion = c, g.embedding = d, g.textEmbedding = d, g.textEmbeddingModel = d, g;
}
Zd({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  P as AISDKError,
  md as createAnthropic,
  kd as createMistral,
  Zd as createOpenAI,
  Ud as streamText
};
