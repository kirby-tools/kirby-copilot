var oa = "vercel.ai.error", so = Symbol.for(oa), ia, oo = class la extends Error {
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
    super(r), this[ia] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return la.hasMarker(t, oa);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
ia = so;
var N = oo, ua = "AI_APICallError", ca = `vercel.ai.error.${ua}`, io = Symbol.for(ca), da, be = class extends N {
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
    super({ name: ua, message: e, cause: o }), this[da] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return N.hasMarker(e, ca);
  }
};
da = io;
var pa = "AI_EmptyResponseBodyError", fa = `vercel.ai.error.${pa}`, lo = Symbol.for(fa), ma, uo = class extends N {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: pa, message: e }), this[ma] = !0;
  }
  static isInstance(e) {
    return N.hasMarker(e, fa);
  }
};
ma = lo;
function Wt(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var ha = "AI_InvalidArgumentError", ga = `vercel.ai.error.${ha}`, co = Symbol.for(ga), ya, po = class extends N {
  constructor({
    message: t,
    cause: r,
    argument: n
  }) {
    super({ name: ha, message: t, cause: r }), this[ya] = !0, this.argument = n;
  }
  static isInstance(t) {
    return N.hasMarker(t, ga);
  }
};
ya = co;
var va = "AI_InvalidPromptError", _a = `vercel.ai.error.${va}`, fo = Symbol.for(_a), ba, Ve = class extends N {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: va, message: `Invalid prompt: ${t}`, cause: r }), this[ba] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return N.hasMarker(e, _a);
  }
};
ba = fo;
var wa = "AI_InvalidResponseDataError", xa = `vercel.ai.error.${wa}`, mo = Symbol.for(xa), ka, Zr = class extends N {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: wa, message: t }), this[ka] = !0, this.data = e;
  }
  static isInstance(e) {
    return N.hasMarker(e, xa);
  }
};
ka = mo;
var Ta = "AI_JSONParseError", Sa = `vercel.ai.error.${Ta}`, ho = Symbol.for(Sa), Ca, lr = class extends N {
  constructor({ text: e, cause: t }) {
    super({
      name: Ta,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Wt(t)}`,
      cause: t
    }), this[Ca] = !0, this.text = e;
  }
  static isInstance(e) {
    return N.hasMarker(e, Sa);
  }
};
Ca = ho;
var Ia = "AI_LoadAPIKeyError", Ea = `vercel.ai.error.${Ia}`, go = Symbol.for(Ea), Na, ar = class extends N {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Ia, message: e }), this[Na] = !0;
  }
  static isInstance(e) {
    return N.hasMarker(e, Ea);
  }
};
Na = go;
var Ra = "AI_NoSuchModelError", Pa = `vercel.ai.error.${Ra}`, yo = Symbol.for(Pa), ja, vo = class extends N {
  constructor({
    errorName: e = Ra,
    modelId: t,
    modelType: r,
    message: n = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: n }), this[ja] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return N.hasMarker(e, Pa);
  }
};
ja = yo;
var Oa = "AI_TooManyEmbeddingValuesForCallError", Aa = `vercel.ai.error.${Oa}`, _o = Symbol.for(Aa), Ma, $a = class extends N {
  constructor(e) {
    super({
      name: Oa,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[Ma] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return N.hasMarker(e, Aa);
  }
};
Ma = _o;
var Za = "AI_TypeValidationError", Da = `vercel.ai.error.${Za}`, bo = Symbol.for(Da), Ua, wo = class Jr extends N {
  constructor({ value: t, cause: r }) {
    super({
      name: Za,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Wt(r)}`,
      cause: r
    }), this[Ua] = !0, this.value = t;
  }
  static isInstance(t) {
    return N.hasMarker(t, Da);
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
    return Jr.isInstance(r) && r.value === t ? r : new Jr({ value: t, cause: r });
  }
};
Ua = bo;
var ur = wo, La = "AI_UnsupportedFunctionalityError", qa = `vercel.ai.error.${La}`, xo = Symbol.for(qa), Ba, V = class extends N {
  constructor({ functionality: e }) {
    super({
      name: La,
      message: `'${e}' functionality not supported.`
    }), this[Ba] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return N.hasMarker(e, qa);
  }
};
Ba = xo;
let ko = (e, t = 21) => (r = t) => {
  let n = "", a = r | 0;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function To(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} };
const So = typeof Buffer < "u", On = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, An = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Va(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), So && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (On.test(e) === !1 && An.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (On.test(e) === !1)
      return n;
  } else if (An.test(e) === !1)
    return n;
  return za(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function za(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
function sn(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Va(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function Co(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Va(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
ut.exports = sn;
ut.exports.default = sn;
ut.exports.parse = sn;
ut.exports.safeParse = Co;
ut.exports.scan = za;
var Io = ut.exports;
const on = /* @__PURE__ */ To(Io);
var Eo = Object.defineProperty, No = (e, t, r) => t in e ? Eo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, sr = (e, t, r) => No(e, typeof t != "symbol" ? t + "" : t, r);
class Mn extends Error {
  constructor(t, r) {
    super(t), sr(this, "type"), sr(this, "field"), sr(this, "value"), sr(this, "line"), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Dr(e) {
}
function Ro(e) {
  const { onEvent: t = Dr, onError: r = Dr, onRetry: n = Dr, onComment: a } = e;
  let s = "", o = !0, i, u = "", c = "";
  function d(p) {
    const y = o ? p.replace(/^\xEF\xBB\xBF/, "") : p, [_, C] = Po(`${s}${y}`);
    for (const I of _)
      f(I);
    s = C, o = !1;
  }
  function f(p) {
    if (p === "") {
      b();
      return;
    }
    if (p.startsWith(":")) {
      a && a(p.slice(p.startsWith(": ") ? 2 : 1));
      return;
    }
    const y = p.indexOf(":");
    if (y !== -1) {
      const _ = p.slice(0, y), C = p[y + 1] === " " ? 2 : 1, I = p.slice(y + C);
      g(_, I, p);
      return;
    }
    g(p, "", p);
  }
  function g(p, y, _) {
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
          new Mn(`Invalid \`retry\` value: "${y}"`, {
            type: "invalid-retry",
            value: y,
            line: _
          })
        );
        break;
      default:
        r(
          new Mn(
            `Unknown field "${p.length > 20 ? `${p.slice(0, 20)}…` : p}"`,
            { type: "unknown-field", field: p, value: y, line: _ }
          )
        );
        break;
    }
  }
  function b() {
    u.length > 0 && t({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function v(p = {}) {
    s && p.consume && f(s), i = void 0, u = "", c = "", s = "";
  }
  return { feed: d, reset: v };
}
function Po(e) {
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
class jo extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let a;
    super({
      start(s) {
        a = Ro({
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
function xe(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function Oo(e) {
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
function Tr(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Gt = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const a = ko(r, t);
  if (e == null)
    return a;
  if (r.includes(n))
    throw new po({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (s) => `${e}${n}${a(s)}`;
}, et = Gt();
function Ao(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function ir(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function ln({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new ar({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new ar({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new ar({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new ar({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var cr = Symbol.for("vercel.ai.validator");
function Mo(e) {
  return { [cr]: !0, validate: e };
}
function $o(e) {
  return typeof e == "object" && e !== null && cr in e && e[cr] === !0 && "validate" in e;
}
function Zo(e) {
  return $o(e) ? e : Do(e);
}
function Do(e) {
  return Mo((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function Uo({
  value: e,
  schema: t
}) {
  const r = Kt({ value: e, schema: t });
  if (!r.success)
    throw ur.wrap({ value: e, cause: r.error });
  return r.value;
}
function Kt({
  value: e,
  schema: t
}) {
  const r = Zo(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: ur.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: ur.wrap({ value: e, cause: n })
    };
  }
}
function Lo({
  text: e,
  schema: t
}) {
  try {
    const r = on.parse(e);
    return t == null ? r : Uo({ value: r, schema: t });
  } catch (r) {
    throw lr.isInstance(r) || ur.isInstance(r) ? r : new lr({ text: e, cause: r });
  }
}
function Sr({
  text: e,
  schema: t
}) {
  try {
    const r = on.parse(e);
    return t == null ? {
      success: !0,
      value: r
    } : Kt({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: lr.isInstance(r) ? r : new lr({ text: e, cause: r })
    };
  }
}
function $n(e) {
  try {
    return on.parse(e), !0;
  } catch {
    return !1;
  }
}
function qo(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var Bo = () => globalThis.fetch, me = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => Vo({
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
}), Vo = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = Bo()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: qo(t),
      body: r.content,
      signal: s
    }), u = Tr(i);
    if (!i.ok) {
      let c;
      try {
        c = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw ir(d) || be.isInstance(d) ? d : new be({
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
      throw c instanceof Error && (ir(c) || be.isInstance(c)) ? c : new be({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (ir(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const u = i.cause;
      if (u != null)
        throw new be({
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
async function zo(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var un = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), i = Tr(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new be({
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
    const u = Lo({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new be({
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
      value: new be({
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
}, Cr = (e) => async ({ response: t }) => {
  const r = Tr(t);
  if (t.body == null)
    throw new uo({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(new jo()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            Sr({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, Ge = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = Sr({
    text: a,
    schema: e
  }), o = Tr(t);
  if (!s.success)
    throw new be({
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
}, { btoa: Ho, atob: Fo } = globalThis;
function Jo(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = Fo(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function gt(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return Ho(t);
}
function cn(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
const Wo = Symbol("Let zodToJsonSchema decide on which parser to use"), Go = {
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
}, Ko = (e) => ({
  ...Go,
  ...e
}), Yo = (e) => {
  const t = Ko(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function Ha(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function Z(e, t, r, n, a) {
  e[t] = r, Ha(e, t, n, a);
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
var Wr;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Wr || (Wr = {}));
const k = A.arrayToEnum([
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
]), je = (e) => {
  switch (typeof e) {
    case "undefined":
      return k.undefined;
    case "string":
      return k.string;
    case "number":
      return isNaN(e) ? k.nan : k.number;
    case "boolean":
      return k.boolean;
    case "function":
      return k.function;
    case "bigint":
      return k.bigint;
    case "symbol":
      return k.symbol;
    case "object":
      return Array.isArray(e) ? k.array : e === null ? k.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? k.promise : typeof Map < "u" && e instanceof Map ? k.map : typeof Set < "u" && e instanceof Set ? k.set : typeof Date < "u" && e instanceof Date ? k.date : k.object;
    default:
      return k.unknown;
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
]), Xo = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class re extends Error {
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
    if (!(t instanceof re))
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
re.create = (e) => new re(e);
const st = (e, t) => {
  let r;
  switch (e.code) {
    case m.invalid_type:
      e.received === k.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
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
let Fa = st;
function Qo(e) {
  Fa = e;
}
function dr() {
  return Fa;
}
const pr = (e) => {
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
}, ei = [];
function x(e, t) {
  const r = dr(), n = pr({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      r,
      r === st ? void 0 : st
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(n);
}
class F {
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
    return F.mergeObjectSync(t, n);
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
}), rt = (e) => ({ status: "dirty", value: e }), K = (e) => ({ status: "valid", value: e }), Gr = (e) => e.status === "aborted", Kr = (e) => e.status === "dirty", yt = (e) => e.status === "valid", vt = (e) => typeof Promise < "u" && e instanceof Promise;
function fr(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Ja(e, t, r, n, a) {
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}
var T;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(T || (T = {}));
var ft, mt;
class ke {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Zn = (e, t) => {
  if (yt(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new re(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function P(e) {
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
class O {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return je(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: je(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new F(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: je(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (vt(r))
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
      parsedType: je(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return Zn(a, s);
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
      parsedType: je(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (vt(a) ? a : Promise.resolve(a));
    return Zn(n, s);
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
    return new he({
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return we.create(this, this._def);
  }
  nullable() {
    return $e.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return fe.create(this, this._def);
  }
  promise() {
    return it.create(this, this._def);
  }
  or(t) {
    return xt.create([this, t], this._def);
  }
  and(t) {
    return kt.create(this, t, this._def);
  }
  transform(t) {
    return new he({
      ...P(this._def),
      schema: this,
      typeName: h.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Et({
      ...P(this._def),
      innerType: this,
      defaultValue: r,
      typeName: h.ZodDefault
    });
  }
  brand() {
    return new dn({
      typeName: h.ZodBranded,
      type: this,
      ...P(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Nt({
      ...P(this._def),
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
    return Rt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const ti = /^c[^\s-]{8,}$/i, ri = /^[0-9a-z]+$/, ni = /^[0-9A-HJKMNP-TV-Z]{26}$/, ai = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, si = /^[a-z0-9_-]{21}$/i, oi = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ii = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, li = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ur;
const ui = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ci = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, di = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Wa = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", pi = new RegExp(`^${Wa}$`);
function Ga(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function fi(e) {
  return new RegExp(`^${Ga(e)}$`);
}
function Ka(e) {
  let t = `${Wa}T${Ga(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function mi(e, t) {
  return !!((t === "v4" || !t) && ui.test(e) || (t === "v6" || !t) && ci.test(e));
}
class pe extends O {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== k.string) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: m.invalid_type,
        expected: k.string,
        received: s.parsedType
      }), S;
    }
    const n = new F();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), x(a, {
          code: m.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), x(a, {
          code: m.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (a = this._getOrReturnCtx(t, a), o ? x(a, {
          code: m.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && x(a, {
          code: m.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        ii.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "email",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        Ur || (Ur = new RegExp(li, "u")), Ur.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "emoji",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        ai.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "uuid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        si.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "nanoid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        ti.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "cuid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        ri.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "cuid2",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        ni.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
          validation: "ulid",
          code: m.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), x(a, {
            validation: "url",
            code: m.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "regex",
        code: m.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: m.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: m.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: m.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Ka(s).test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: m.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? pi.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: m.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? fi(s).test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        code: m.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? oi.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "duration",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? mi(t.data, s.version) || (a = this._getOrReturnCtx(t, a), x(a, {
        validation: "ip",
        code: m.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? di.test(t.data) || (a = this._getOrReturnCtx(t, a), x(a, {
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
    return new pe({
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
    return new pe({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new pe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new pe({
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
pe.create = (e) => {
  var t;
  return new pe({
    checks: [],
    typeName: h.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...P(e)
  });
};
function hi(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class Oe extends O {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== k.number) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: m.invalid_type,
        expected: k.number,
        received: s.parsedType
      }), S;
    }
    let n;
    const a = new F();
    for (const s of this._def.checks)
      s.kind === "int" ? A.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), x(n, {
        code: m.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: m.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: m.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? hi(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), x(n, {
        code: m.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), x(n, {
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
    return new Oe({
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
    return new Oe({
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
Oe.create = (e) => new Oe({
  checks: [],
  typeName: h.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...P(e)
});
class Ae extends O {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== k.bigint) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: m.invalid_type,
        expected: k.bigint,
        received: s.parsedType
      }), S;
    }
    let n;
    const a = new F();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: m.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), x(n, {
        code: m.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), x(n, {
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
    return new Ae({
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
    return new Ae({
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
Ae.create = (e) => {
  var t;
  return new Ae({
    checks: [],
    typeName: h.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...P(e)
  });
};
class _t extends O {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== k.boolean) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: m.invalid_type,
        expected: k.boolean,
        received: n.parsedType
      }), S;
    }
    return K(t.data);
  }
}
_t.create = (e) => new _t({
  typeName: h.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...P(e)
});
class Fe extends O {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== k.date) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: m.invalid_type,
        expected: k.date,
        received: s.parsedType
      }), S;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return x(s, {
        code: m.invalid_date
      }), S;
    }
    const n = new F();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), x(a, {
        code: m.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), x(a, {
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
    return new Fe({
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
Fe.create = (e) => new Fe({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: h.ZodDate,
  ...P(e)
});
class mr extends O {
  _parse(t) {
    if (this._getType(t) !== k.symbol) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: m.invalid_type,
        expected: k.symbol,
        received: n.parsedType
      }), S;
    }
    return K(t.data);
  }
}
mr.create = (e) => new mr({
  typeName: h.ZodSymbol,
  ...P(e)
});
class bt extends O {
  _parse(t) {
    if (this._getType(t) !== k.undefined) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: m.invalid_type,
        expected: k.undefined,
        received: n.parsedType
      }), S;
    }
    return K(t.data);
  }
}
bt.create = (e) => new bt({
  typeName: h.ZodUndefined,
  ...P(e)
});
class wt extends O {
  _parse(t) {
    if (this._getType(t) !== k.null) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: m.invalid_type,
        expected: k.null,
        received: n.parsedType
      }), S;
    }
    return K(t.data);
  }
}
wt.create = (e) => new wt({
  typeName: h.ZodNull,
  ...P(e)
});
class ot extends O {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return K(t.data);
  }
}
ot.create = (e) => new ot({
  typeName: h.ZodAny,
  ...P(e)
});
class He extends O {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return K(t.data);
  }
}
He.create = (e) => new He({
  typeName: h.ZodUnknown,
  ...P(e)
});
class Ne extends O {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return x(r, {
      code: m.invalid_type,
      expected: k.never,
      received: r.parsedType
    }), S;
  }
}
Ne.create = (e) => new Ne({
  typeName: h.ZodNever,
  ...P(e)
});
class hr extends O {
  _parse(t) {
    if (this._getType(t) !== k.undefined) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: m.invalid_type,
        expected: k.void,
        received: n.parsedType
      }), S;
    }
    return K(t.data);
  }
}
hr.create = (e) => new hr({
  typeName: h.ZodVoid,
  ...P(e)
});
class fe extends O {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== k.array)
      return x(r, {
        code: m.invalid_type,
        expected: k.array,
        received: r.parsedType
      }), S;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, i = r.data.length < a.exactLength.value;
      (o || i) && (x(r, {
        code: o ? m.too_big : m.too_small,
        minimum: i ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (x(r, {
      code: m.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (x(r, {
      code: m.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => a.type._parseAsync(new ke(r, o, r.path, i)))).then((o) => F.mergeArray(n, o));
    const s = [...r.data].map((o, i) => a.type._parseSync(new ke(r, o, r.path, i)));
    return F.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new fe({
      ...this._def,
      minLength: { value: t, message: T.toString(r) }
    });
  }
  max(t, r) {
    return new fe({
      ...this._def,
      maxLength: { value: t, message: T.toString(r) }
    });
  }
  length(t, r) {
    return new fe({
      ...this._def,
      exactLength: { value: t, message: T.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
fe.create = (e, t) => new fe({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: h.ZodArray,
  ...P(t)
});
function tt(e) {
  if (e instanceof q) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = we.create(tt(n));
    }
    return new q({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof fe ? new fe({
    ...e._def,
    type: tt(e.element)
  }) : e instanceof we ? we.create(tt(e.unwrap())) : e instanceof $e ? $e.create(tt(e.unwrap())) : e instanceof Te ? Te.create(e.items.map((t) => tt(t))) : e;
}
class q extends O {
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
    if (this._getType(t) !== k.object) {
      const c = this._getOrReturnCtx(t);
      return x(c, {
        code: m.invalid_type,
        expected: k.object,
        received: c.parsedType
      }), S;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Ne && this._def.unknownKeys === "strip"))
      for (const c in a.data)
        o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], f = a.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new ke(a, f, a.path, c)),
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
        i.length > 0 && (x(a, {
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
            new ke(a, f, a.path, d)
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
    }).then((c) => F.mergeObjectSync(n, c)) : F.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return T.errToObj, new q({
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
    return A.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new q({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return A.objectKeys(this.shape).forEach((n) => {
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
    return tt(this);
  }
  partial(t) {
    const r = {};
    return A.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new q({
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
        for (; s instanceof we; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new q({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ya(A.objectKeys(this.shape));
  }
}
q.create = (e, t) => new q({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Ne.create(),
  typeName: h.ZodObject,
  ...P(t)
});
q.strictCreate = (e, t) => new q({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Ne.create(),
  typeName: h.ZodObject,
  ...P(t)
});
q.lazycreate = (e, t) => new q({
  shape: e,
  unknownKeys: "strip",
  catchall: Ne.create(),
  typeName: h.ZodObject,
  ...P(t)
});
class xt extends O {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new re(i.ctx.common.issues));
      return x(r, {
        code: m.invalid_union,
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
      const i = o.map((u) => new re(u));
      return x(r, {
        code: m.invalid_union,
        unionErrors: i
      }), S;
    }
  }
  get options() {
    return this._def.options;
  }
}
xt.create = (e, t) => new xt({
  options: e,
  typeName: h.ZodUnion,
  ...P(t)
});
const Ee = (e) => e instanceof St ? Ee(e.schema) : e instanceof he ? Ee(e.innerType()) : e instanceof Ct ? [e.value] : e instanceof Me ? e.options : e instanceof It ? A.objectValues(e.enum) : e instanceof Et ? Ee(e._def.innerType) : e instanceof bt ? [void 0] : e instanceof wt ? [null] : e instanceof we ? [void 0, ...Ee(e.unwrap())] : e instanceof $e ? [null, ...Ee(e.unwrap())] : e instanceof dn || e instanceof Rt ? Ee(e.unwrap()) : e instanceof Nt ? Ee(e._def.innerType) : [];
class Ir extends O {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.object)
      return x(r, {
        code: m.invalid_type,
        expected: k.object,
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
    }) : (x(r, {
      code: m.invalid_union_discriminator,
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
      const o = Ee(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (a.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        a.set(i, s);
      }
    }
    return new Ir({
      typeName: h.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...P(n)
    });
  }
}
function Yr(e, t) {
  const r = je(e), n = je(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === k.object && n === k.object) {
    const a = A.objectKeys(t), s = A.objectKeys(e).filter((i) => a.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const u = Yr(e[i], t[i]);
      if (!u.valid)
        return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === k.array && n === k.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], u = Yr(o, i);
      if (!u.valid)
        return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else return r === k.date && n === k.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class kt extends O {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (Gr(s) || Gr(o))
        return S;
      const i = Yr(s.value, o.value);
      return i.valid ? ((Kr(s) || Kr(o)) && r.dirty(), { status: r.value, value: i.data }) : (x(n, {
        code: m.invalid_intersection_types
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
kt.create = (e, t, r) => new kt({
  left: e,
  right: t,
  typeName: h.ZodIntersection,
  ...P(r)
});
class Te extends O {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== k.array)
      return x(n, {
        code: m.invalid_type,
        expected: k.array,
        received: n.parsedType
      }), S;
    if (n.data.length < this._def.items.length)
      return x(n, {
        code: m.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), S;
    !this._def.rest && n.data.length > this._def.items.length && (x(n, {
      code: m.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, i) => {
      const u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new ke(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => F.mergeArray(r, o)) : F.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Te({
      ...this._def,
      rest: t
    });
  }
}
Te.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Te({
    items: e,
    typeName: h.ZodTuple,
    rest: null,
    ...P(t)
  });
};
class Tt extends O {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== k.object)
      return x(n, {
        code: m.invalid_type,
        expected: k.object,
        received: n.parsedType
      }), S;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      a.push({
        key: s._parse(new ke(n, i, n.path, i)),
        value: o._parse(new ke(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? F.mergeObjectAsync(r, a) : F.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof O ? new Tt({
      keyType: t,
      valueType: r,
      typeName: h.ZodRecord,
      ...P(n)
    }) : new Tt({
      keyType: pe.create(),
      valueType: t,
      typeName: h.ZodRecord,
      ...P(r)
    });
  }
}
class gr extends O {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== k.map)
      return x(n, {
        code: m.invalid_type,
        expected: k.map,
        received: n.parsedType
      }), S;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([i, u], c) => ({
      key: a._parse(new ke(n, i, n.path, [c, "key"])),
      value: s._parse(new ke(n, u, n.path, [c, "value"]))
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
gr.create = (e, t, r) => new gr({
  valueType: t,
  keyType: e,
  typeName: h.ZodMap,
  ...P(r)
});
class Je extends O {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== k.set)
      return x(n, {
        code: m.invalid_type,
        expected: k.set,
        received: n.parsedType
      }), S;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (x(n, {
      code: m.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (x(n, {
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
          return S;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const i = [...n.data.values()].map((u, c) => s._parse(new ke(n, u, n.path, c)));
    return n.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(t, r) {
    return new Je({
      ...this._def,
      minSize: { value: t, message: T.toString(r) }
    });
  }
  max(t, r) {
    return new Je({
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
Je.create = (e, t) => new Je({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: h.ZodSet,
  ...P(t)
});
class at extends O {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.function)
      return x(r, {
        code: m.invalid_type,
        expected: k.function,
        received: r.parsedType
      }), S;
    function n(i, u) {
      return pr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          dr(),
          st
        ].filter((c) => !!c),
        issueData: {
          code: m.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function a(i, u) {
      return pr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          dr(),
          st
        ].filter((c) => !!c),
        issueData: {
          code: m.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof it) {
      const i = this;
      return K(async function(...u) {
        const c = new re([]), d = await i._def.args.parseAsync(u, s).catch((b) => {
          throw c.addIssue(n(u, b)), c;
        }), f = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(f, s).catch((b) => {
          throw c.addIssue(a(f, b)), c;
        });
      });
    } else {
      const i = this;
      return K(function(...u) {
        const c = i._def.args.safeParse(u, s);
        if (!c.success)
          throw new re([n(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), f = i._def.returns.safeParse(d, s);
        if (!f.success)
          throw new re([a(d, f.error)]);
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
    return new at({
      ...this._def,
      args: Te.create(t).rest(He.create())
    });
  }
  returns(t) {
    return new at({
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
    return new at({
      args: t || Te.create([]).rest(He.create()),
      returns: r || He.create(),
      typeName: h.ZodFunction,
      ...P(n)
    });
  }
}
class St extends O {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
St.create = (e, t) => new St({
  getter: e,
  typeName: h.ZodLazy,
  ...P(t)
});
class Ct extends O {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return x(r, {
        received: r.data,
        code: m.invalid_literal,
        expected: this._def.value
      }), S;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ct.create = (e, t) => new Ct({
  value: e,
  typeName: h.ZodLiteral,
  ...P(t)
});
function Ya(e, t) {
  return new Me({
    values: e,
    typeName: h.ZodEnum,
    ...P(t)
  });
}
class Me extends O {
  constructor() {
    super(...arguments), ft.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return x(r, {
        expected: A.joinValues(n),
        received: r.parsedType,
        code: m.invalid_type
      }), S;
    }
    if (fr(this, ft) || Ja(this, ft, new Set(this._def.values)), !fr(this, ft).has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return x(r, {
        received: r.data,
        code: m.invalid_enum_value,
        options: n
      }), S;
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
    return Me.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return Me.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
ft = /* @__PURE__ */ new WeakMap();
Me.create = Ya;
class It extends O {
  constructor() {
    super(...arguments), mt.set(this, void 0);
  }
  _parse(t) {
    const r = A.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== k.string && n.parsedType !== k.number) {
      const a = A.objectValues(r);
      return x(n, {
        expected: A.joinValues(a),
        received: n.parsedType,
        code: m.invalid_type
      }), S;
    }
    if (fr(this, mt) || Ja(this, mt, new Set(A.getValidEnumValues(this._def.values))), !fr(this, mt).has(t.data)) {
      const a = A.objectValues(r);
      return x(n, {
        received: n.data,
        code: m.invalid_enum_value,
        options: a
      }), S;
    }
    return K(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
mt = /* @__PURE__ */ new WeakMap();
It.create = (e, t) => new It({
  values: e,
  typeName: h.ZodNativeEnum,
  ...P(t)
});
class it extends O {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.promise && r.common.async === !1)
      return x(r, {
        code: m.invalid_type,
        expected: k.promise,
        received: r.parsedType
      }), S;
    const n = r.parsedType === k.promise ? r.data : Promise.resolve(r.data);
    return K(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
it.create = (e, t) => new it({
  type: e,
  typeName: h.ZodPromise,
  ...P(t)
});
class he extends O {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === h.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        return Promise.resolve(o).then(async (i) => {
          if (r.value === "aborted")
            return S;
          const u = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? S : u.status === "dirty" || r.value === "dirty" ? rt(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return S;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? S : i.status === "dirty" || r.value === "dirty" ? rt(i.value) : i;
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
        if (!yt(o))
          return o;
        const i = a.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => yt(o) ? Promise.resolve(a.transform(o.value, s)).then((i) => ({ status: r.value, value: i })) : o);
    A.assertNever(a);
  }
}
he.create = (e, t, r) => new he({
  schema: e,
  typeName: h.ZodEffects,
  effect: t,
  ...P(r)
});
he.createWithPreprocess = (e, t, r) => new he({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: h.ZodEffects,
  ...P(r)
});
class we extends O {
  _parse(t) {
    return this._getType(t) === k.undefined ? K(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
we.create = (e, t) => new we({
  innerType: e,
  typeName: h.ZodOptional,
  ...P(t)
});
class $e extends O {
  _parse(t) {
    return this._getType(t) === k.null ? K(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$e.create = (e, t) => new $e({
  innerType: e,
  typeName: h.ZodNullable,
  ...P(t)
});
class Et extends O {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === k.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Et.create = (e, t) => new Et({
  innerType: e,
  typeName: h.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...P(t)
});
class Nt extends O {
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
    return vt(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new re(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new re(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Nt.create = (e, t) => new Nt({
  innerType: e,
  typeName: h.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...P(t)
});
class yr extends O {
  _parse(t) {
    if (this._getType(t) !== k.nan) {
      const n = this._getOrReturnCtx(t);
      return x(n, {
        code: m.invalid_type,
        expected: k.nan,
        received: n.parsedType
      }), S;
    }
    return { status: "valid", value: t.data };
  }
}
yr.create = (e) => new yr({
  typeName: h.ZodNaN,
  ...P(e)
});
const gi = Symbol("zod_brand");
class dn extends O {
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
class Yt extends O {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? S : s.status === "dirty" ? (r.dirty(), rt(s.value)) : this._def.out._parseAsync({
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
    return new Yt({
      in: t,
      out: r,
      typeName: h.ZodPipeline
    });
  }
}
class Rt extends O {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (yt(a) && (a.value = Object.freeze(a.value)), a);
    return vt(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Rt.create = (e, t) => new Rt({
  innerType: e,
  typeName: h.ZodReadonly,
  ...P(t)
});
function Xa(e, t = {}, r) {
  return e ? ot.create().superRefine((n, a) => {
    var s, o;
    if (!e(n)) {
      const i = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, u = (o = (s = i.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0, c = typeof i == "string" ? { message: i } : i;
      a.addIssue({ code: "custom", ...c, fatal: u });
    }
  }) : ot.create();
}
const yi = {
  object: q.lazycreate
};
var h;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(h || (h = {}));
const vi = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Xa((r) => r instanceof e, t), Qa = pe.create, es = Oe.create, _i = yr.create, bi = Ae.create, ts = _t.create, wi = Fe.create, xi = mr.create, ki = bt.create, Ti = wt.create, Si = ot.create, Ci = He.create, Ii = Ne.create, Ei = hr.create, Ni = fe.create, Ri = q.create, Pi = q.strictCreate, ji = xt.create, Oi = Ir.create, Ai = kt.create, Mi = Te.create, $i = Tt.create, Zi = gr.create, Di = Je.create, Ui = at.create, Li = St.create, qi = Ct.create, Bi = Me.create, Vi = It.create, zi = it.create, Dn = he.create, Hi = we.create, Fi = $e.create, Ji = he.createWithPreprocess, Wi = Yt.create, Gi = () => Qa().optional(), Ki = () => es().optional(), Yi = () => ts().optional(), Xi = {
  string: (e) => pe.create({ ...e, coerce: !0 }),
  number: (e) => Oe.create({ ...e, coerce: !0 }),
  boolean: (e) => _t.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Ae.create({ ...e, coerce: !0 }),
  date: (e) => Fe.create({ ...e, coerce: !0 })
}, Qi = S;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: st,
  setErrorMap: Qo,
  getErrorMap: dr,
  makeIssue: pr,
  EMPTY_PATH: ei,
  addIssueToContext: x,
  ParseStatus: F,
  INVALID: S,
  DIRTY: rt,
  OK: K,
  isAborted: Gr,
  isDirty: Kr,
  isValid: yt,
  isAsync: vt,
  get util() {
    return A;
  },
  get objectUtil() {
    return Wr;
  },
  ZodParsedType: k,
  getParsedType: je,
  ZodType: O,
  datetimeRegex: Ka,
  ZodString: pe,
  ZodNumber: Oe,
  ZodBigInt: Ae,
  ZodBoolean: _t,
  ZodDate: Fe,
  ZodSymbol: mr,
  ZodUndefined: bt,
  ZodNull: wt,
  ZodAny: ot,
  ZodUnknown: He,
  ZodNever: Ne,
  ZodVoid: hr,
  ZodArray: fe,
  ZodObject: q,
  ZodUnion: xt,
  ZodDiscriminatedUnion: Ir,
  ZodIntersection: kt,
  ZodTuple: Te,
  ZodRecord: Tt,
  ZodMap: gr,
  ZodSet: Je,
  ZodFunction: at,
  ZodLazy: St,
  ZodLiteral: Ct,
  ZodEnum: Me,
  ZodNativeEnum: It,
  ZodPromise: it,
  ZodEffects: he,
  ZodTransformer: he,
  ZodOptional: we,
  ZodNullable: $e,
  ZodDefault: Et,
  ZodCatch: Nt,
  ZodNaN: yr,
  BRAND: gi,
  ZodBranded: dn,
  ZodPipeline: Yt,
  ZodReadonly: Rt,
  custom: Xa,
  Schema: O,
  ZodSchema: O,
  late: yi,
  get ZodFirstPartyTypeKind() {
    return h;
  },
  coerce: Xi,
  any: Si,
  array: Ni,
  bigint: bi,
  boolean: ts,
  date: wi,
  discriminatedUnion: Oi,
  effect: Dn,
  enum: Bi,
  function: Ui,
  instanceof: vi,
  intersection: Ai,
  lazy: Li,
  literal: qi,
  map: Zi,
  nan: _i,
  nativeEnum: Vi,
  never: Ii,
  null: Ti,
  nullable: Fi,
  number: es,
  object: Ri,
  oboolean: Yi,
  onumber: Ki,
  optional: Hi,
  ostring: Gi,
  pipeline: Wi,
  preprocess: Ji,
  promise: zi,
  record: $i,
  set: Di,
  strictObject: Pi,
  string: Qa,
  symbol: xi,
  transformer: Dn,
  tuple: Mi,
  undefined: ki,
  union: ji,
  unknown: Ci,
  void: Ei,
  NEVER: Qi,
  ZodIssueCode: m,
  quotelessJson: Xo,
  ZodError: re
});
function el() {
  return {};
}
function tl(e, t) {
  var n, a, s;
  const r = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((s = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : s.typeName) !== h.ZodAny && (r.items = M(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && Z(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && Z(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (Z(r, "minItems", e.exactLength.value, e.exactLength.message, t), Z(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function rl(e, t) {
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
function nl() {
  return {
    type: "boolean"
  };
}
function rs(e, t) {
  return M(e.type._def, t);
}
const al = (e, t) => M(e.innerType._def, t);
function ns(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => ns(e, t, a))
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
      return sl(e, t);
  }
}
const sl = (e, t) => {
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
function ol(e, t) {
  return {
    ...M(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function il(e, t) {
  return t.effectStrategy === "input" ? M(e.schema._def, t) : {};
}
function ll(e) {
  return {
    type: "string",
    enum: e.values
  };
}
const ul = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function cl(e, t) {
  const r = [
    M(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    M(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((s) => !!s);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const a = [];
  return r.forEach((s) => {
    if (ul(s))
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
function dl(e, t) {
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
let Lr;
const Be = {
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
  emoji: () => (Lr === void 0 && (Lr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Lr),
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
function as(e, t) {
  const r = {
    type: "string"
  };
  function n(a) {
    return t.patternStrategy === "escape" ? pl(a) : a;
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
              ue(r, "email", a.message, t);
              break;
            case "format:idn-email":
              ue(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              ce(r, Be.email, a.message, t);
              break;
          }
          break;
        case "url":
          ue(r, "uri", a.message, t);
          break;
        case "uuid":
          ue(r, "uuid", a.message, t);
          break;
        case "regex":
          ce(r, a.regex, a.message, t);
          break;
        case "cuid":
          ce(r, Be.cuid, a.message, t);
          break;
        case "cuid2":
          ce(r, Be.cuid2, a.message, t);
          break;
        case "startsWith":
          ce(r, RegExp(`^${n(a.value)}`), a.message, t);
          break;
        case "endsWith":
          ce(r, RegExp(`${n(a.value)}$`), a.message, t);
          break;
        case "datetime":
          ue(r, "date-time", a.message, t);
          break;
        case "date":
          ue(r, "date", a.message, t);
          break;
        case "time":
          ue(r, "time", a.message, t);
          break;
        case "duration":
          ue(r, "duration", a.message, t);
          break;
        case "length":
          Z(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value, a.message, t), Z(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value, a.message, t);
          break;
        case "includes": {
          ce(r, RegExp(n(a.value)), a.message, t);
          break;
        }
        case "ip": {
          a.version !== "v6" && ue(r, "ipv4", a.message, t), a.version !== "v4" && ue(r, "ipv6", a.message, t);
          break;
        }
        case "emoji":
          ce(r, Be.emoji, a.message, t);
          break;
        case "ulid": {
          ce(r, Be.ulid, a.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              ue(r, "binary", a.message, t);
              break;
            }
            case "contentEncoding:base64": {
              Z(r, "contentEncoding", "base64", a.message, t);
              break;
            }
            case "pattern:zod": {
              ce(r, Be.base64, a.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          ce(r, Be.nanoid, a.message, t);
      }
  return r;
}
const pl = (e) => Array.from(e).map((t) => /[a-zA-Z0-9]/.test(t) ? t : `\\${t}`).join(""), ue = (e, t, r, n) => {
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
}, ce = (e, t, r, n) => {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: Un(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : Z(e, "pattern", Un(t, n), r, n);
}, Un = (e, t) => {
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
function ss(e, t) {
  var n, a, s, o, i, u;
  if (t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === h.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((c, d) => ({
        ...c,
        [d]: M(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", d]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const r = {
    type: "object",
    additionalProperties: M(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (t.target === "openApi3")
    return r;
  if (((a = e.keyType) == null ? void 0 : a._def.typeName) === h.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
    const { type: c, ...d } = as(e.keyType._def, t);
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
      const { type: c, ...d } = rs(e.keyType._def, t);
      return {
        ...r,
        propertyNames: d
      };
    }
  }
  return r;
}
function fl(e, t) {
  if (t.mapStrategy === "record")
    return ss(e, t);
  const r = M(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, n = M(e.valueType._def, {
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
function ml(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function hl() {
  return {
    not: {}
  };
}
function gl(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const vr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function yl(e, t) {
  if (t.target === "openApi3")
    return Ln(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in vr && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = vr[s._def.typeName];
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
  return Ln(e, t);
}
const Ln = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => M(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function vl(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: vr[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        vr[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const n = M(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = M(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function _l(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", Ha(r, "type", n.message, t);
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
function bl(e, t) {
  return t.removeAdditionalStrategy === "strict" ? e.catchall._def.typeName === "ZodNever" ? e.unknownKeys !== "strict" : M(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0 : e.catchall._def.typeName === "ZodNever" ? e.unknownKeys === "passthrough" : M(e.catchall._def, {
    ...t,
    currentPath: [...t.currentPath, "additionalProperties"]
  }) ?? !0;
}
function wl(e, t) {
  const r = {
    type: "object",
    ...Object.entries(e.shape()).reduce((n, [a, s]) => {
      if (s === void 0 || s._def === void 0)
        return n;
      const o = M(s._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", a],
        propertyPath: [...t.currentPath, "properties", a]
      });
      return o === void 0 ? n : {
        properties: { ...n.properties, [a]: o },
        required: s.isOptional() ? n.required : [...n.required, a]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: bl(e, t)
  };
  return r.required.length || delete r.required, r;
}
const xl = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return M(e.innerType._def, t);
  const r = M(e.innerType._def, {
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
}, kl = (e, t) => {
  if (t.pipeStrategy === "input")
    return M(e.in._def, t);
  if (t.pipeStrategy === "output")
    return M(e.out._def, t);
  const r = M(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = M(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function Tl(e, t) {
  return M(e.type._def, t);
}
function Sl(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: M(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && Z(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && Z(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function Cl(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, n) => M(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: M(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, n) => M(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function Il() {
  return {
    not: {}
  };
}
function El() {
  return {};
}
const Nl = (e, t) => M(e.innerType._def, t);
function M(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const i = (o = t.override) == null ? void 0 : o.call(t, e, t, n, r);
    if (i !== Wo)
      return i;
  }
  if (n && !r) {
    const i = Rl(n, t);
    if (i !== void 0)
      return i;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = jl(e, e.typeName, t);
  return s && Ol(e, t, s), a.jsonSchema = s, s;
}
const Rl = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Pl(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, Pl = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, jl = (e, t, r) => {
  switch (t) {
    case h.ZodString:
      return as(e, r);
    case h.ZodNumber:
      return _l(e, r);
    case h.ZodObject:
      return wl(e, r);
    case h.ZodBigInt:
      return rl(e, r);
    case h.ZodBoolean:
      return nl();
    case h.ZodDate:
      return ns(e, r);
    case h.ZodUndefined:
      return Il();
    case h.ZodNull:
      return gl(r);
    case h.ZodArray:
      return tl(e, r);
    case h.ZodUnion:
    case h.ZodDiscriminatedUnion:
      return yl(e, r);
    case h.ZodIntersection:
      return cl(e, r);
    case h.ZodTuple:
      return Cl(e, r);
    case h.ZodRecord:
      return ss(e, r);
    case h.ZodLiteral:
      return dl(e, r);
    case h.ZodEnum:
      return ll(e);
    case h.ZodNativeEnum:
      return ml(e);
    case h.ZodNullable:
      return vl(e, r);
    case h.ZodOptional:
      return xl(e, r);
    case h.ZodMap:
      return fl(e, r);
    case h.ZodSet:
      return Sl(e, r);
    case h.ZodLazy:
      return M(e.getter()._def, r);
    case h.ZodPromise:
      return Tl(e, r);
    case h.ZodNaN:
    case h.ZodNever:
      return hl();
    case h.ZodEffects:
      return il(e, r);
    case h.ZodAny:
      return el();
    case h.ZodUnknown:
      return El();
    case h.ZodDefault:
      return ol(e, r);
    case h.ZodBranded:
      return rs(e, r);
    case h.ZodReadonly:
      return Nl(e, r);
    case h.ZodCatch:
      return al(e, r);
    case h.ZodPipeline:
      return kl(e, r);
    case h.ZodFunction:
    case h.ZodVoid:
    case h.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, Ol = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), Al = (e, t) => {
  const r = Yo(t), n = void 0, a = t == null ? void 0 : t.name, s = M(
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
}, jt = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Ot = {
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
}, At = {
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
}, Mt = {
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
}, Ml = [
  Pt,
  jt,
  Ot,
  At,
  Mt
];
Pt.code + "", jt.code + "", Ot.code + "", At.code + "", Mt.code + "";
Pt.name + "", Pt.code, jt.name + "", jt.code, Ot.name + "", Ot.code, At.name + "", At.code, Mt.name + "", Mt.code;
Ml.map((e) => e.code);
var $t = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Zt = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Dt = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Ut = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Lt = {
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
}, qt = {
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
}, Bt = {
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
}, Vt = {
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
}, zt = {
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
}, Ht = {
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
}, os = [
  $t,
  Zt,
  Dt,
  Ut,
  Lt,
  qt,
  Bt,
  Vt,
  zt,
  Ht
];
$t.code + "", Zt.code + "", Dt.code + "", Ut.code + "", Lt.code + "", qt.code + "", Bt.code + "", Vt.code + "", zt.code + "", Ht.code + "";
$t.name + "", $t.code, Zt.name + "", Zt.code, Dt.name + "", Dt.code, Ut.name + "", Ut.code, Lt.name + "", Lt.code, qt.name + "", qt.code, Bt.name + "", Bt.code, Vt.name + "", Vt.code, zt.name + "", zt.code, Ht.name + "", Ht.code;
os.map((e) => e.code);
function _e(e, t) {
  const r = os.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
var Xr = Symbol.for("vercel.ai.schema");
function $l(e, {
  validate: t
} = {}) {
  return {
    [Xr]: !0,
    _type: void 0,
    // should never be used directly
    [cr]: !0,
    jsonSchema: e,
    validate: t
  };
}
function Zl(e) {
  return typeof e == "object" && e !== null && Xr in e && e[Xr] === !0 && "jsonSchema" in e && "validate" in e;
}
function Er(e) {
  return Zl(e) ? e : Dl(e);
}
function Dl(e) {
  return $l(
    // we assume that zodToJsonSchema will return a valid JSONSchema7:
    Al(e),
    {
      validate: (t) => {
        const r = e.safeParse(t);
        return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
      }
    }
  );
}
var Ul = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, ze = "1.9.0", qn = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Ll(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(qn);
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
    var c = u.match(qn);
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
var ql = Ll(ze), Bl = ze.split(".")[0], Ft = Symbol.for("opentelemetry.js.api." + Bl), Jt = Ul;
function Xt(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = Jt[Ft] = (a = Jt[Ft]) !== null && a !== void 0 ? a : {
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
function We(e) {
  var t, r, n = (t = Jt[Ft]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !ql(n)))
    return (r = Jt[Ft]) === null || r === void 0 ? void 0 : r[e];
}
function Qt(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + ze + ".");
  var r = Jt[Ft];
  r && delete r[e];
}
var Vl = function(e, t) {
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
}, zl = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Hl = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return pt("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return pt("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return pt("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return pt("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return pt("verbose", this._namespace, t);
    }, e;
  }()
);
function pt(e, t, r) {
  var n = We("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, zl([], Vl(r), !1));
}
var te;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(te || (te = {}));
function Fl(e, t) {
  e < te.NONE ? e = te.NONE : e > te.ALL && (e = te.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", te.ERROR),
    warn: r("warn", te.WARN),
    info: r("info", te.INFO),
    debug: r("debug", te.DEBUG),
    verbose: r("verbose", te.VERBOSE)
  };
}
var Jl = function(e, t) {
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
}, Gl = "diag", Se = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var i = We("diag");
          if (i)
            return i[a].apply(i, Wl([], Jl(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, i, u;
        if (s === void 0 && (s = { logLevel: te.INFO }), a === r) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = c.stack) !== null && o !== void 0 ? o : c.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var d = We("diag"), f = Fl((i = s.logLevel) !== null && i !== void 0 ? i : te.INFO, a);
        if (d && !s.suppressOverrideMessage) {
          var g = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + g), f.warn("Current logger will overwrite one already registered from " + g);
        }
        return Xt("diag", f, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Qt(Gl, r);
      }, r.createComponentLogger = function(a) {
        return new Hl(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), Kl = function(e, t) {
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
}, Yl = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Xl = (
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
        var r = Kl(t, 2), n = r[0], a = r[1];
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
        for (var o = Yl(n), i = o.next(); !i.done; i = o.next()) {
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
Se.instance();
function Ql(e) {
  return e === void 0 && (e = {}), new Xl(new Map(Object.entries(e)));
}
function is(e) {
  return Symbol.for(e);
}
var eu = (
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
), tu = new eu(), Ke = /* @__PURE__ */ function() {
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
}(), ru = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return pu;
    }, e.prototype.createHistogram = function(t, r) {
      return fu;
    }, e.prototype.createCounter = function(t, r) {
      return du;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return mu;
    }, e.prototype.createObservableGauge = function(t, r) {
      return gu;
    }, e.prototype.createObservableCounter = function(t, r) {
      return hu;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return yu;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), Nr = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), nu = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Nr)
), au = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(Nr)
), su = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Nr)
), ou = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(Nr)
), pn = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), iu = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(pn)
), lu = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(pn)
), uu = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(pn)
), cu = new ru(), du = new nu(), pu = new su(), fu = new ou(), mu = new au(), hu = new iu(), gu = new lu(), yu = new uu(), vu = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, _u = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, bu = function(e, t) {
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
}, wu = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, xu = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return tu;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, wu([n], bu(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), ku = function(e, t) {
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
}, Tu = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, qr = "context", Su = new xu(), Rr = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Xt(qr, t, Se.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, Tu([t, r, n], ku(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return We(qr) || Su;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Qt(qr, Se.instance());
    }, e;
  }()
), Qr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Qr || (Qr = {}));
var ls = "0000000000000000", us = "00000000000000000000000000000000", Cu = {
  traceId: us,
  spanId: ls,
  traceFlags: Qr.NONE
}, ht = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = Cu), this._spanContext = t;
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
), fn = is("OpenTelemetry Context Key SPAN");
function mn(e) {
  return e.getValue(fn) || void 0;
}
function Iu() {
  return mn(Rr.getInstance().active());
}
function hn(e, t) {
  return e.setValue(fn, t);
}
function Eu(e) {
  return e.deleteValue(fn);
}
function Nu(e, t) {
  return hn(e, new ht(t));
}
function cs(e) {
  var t;
  return (t = mn(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var Ru = /^([0-9a-f]{32})$/i, Pu = /^[0-9a-f]{16}$/i;
function ju(e) {
  return Ru.test(e) && e !== us;
}
function Ou(e) {
  return Pu.test(e) && e !== ls;
}
function ds(e) {
  return ju(e.traceId) && Ou(e.spanId);
}
function Au(e) {
  return new ht(e);
}
var Br = Rr.getInstance(), ps = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = Br.active());
      var a = !!(r != null && r.root);
      if (a)
        return new ht();
      var s = n && cs(n);
      return Mu(s) && ds(s) ? new ht(s) : new ht();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (s = r, i = n) : (s = r, o = n, i = a);
        var u = o ?? Br.active(), c = this.startSpan(t, s, u), d = hn(u, c);
        return Br.with(d, i, void 0, c);
      }
    }, e;
  }()
);
function Mu(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var $u = new ps(), Zu = (
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
      return t ? (this._delegate = t, this._delegate) : $u;
    }, e;
  }()
), Du = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new ps();
    }, e;
  }()
), Uu = new Du(), Bn = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new Zu(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Uu;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), _r;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(_r || (_r = {}));
Rr.getInstance();
Se.instance();
var Lu = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, n) {
      return cu;
    }, e;
  }()
), qu = new Lu(), Vr = "metrics", Bu = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return Xt(Vr, t, Se.instance());
    }, e.prototype.getMeterProvider = function() {
      return We(Vr) || qu;
    }, e.prototype.getMeter = function(t, r, n) {
      return this.getMeterProvider().getMeter(t, r, n);
    }, e.prototype.disable = function() {
      Qt(Vr, Se.instance());
    }, e;
  }()
);
Bu.getInstance();
var Vu = (
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
), gn = is("OpenTelemetry Baggage Key");
function fs(e) {
  return e.getValue(gn) || void 0;
}
function zu() {
  return fs(Rr.getInstance().active());
}
function Hu(e, t) {
  return e.setValue(gn, t);
}
function Fu(e) {
  return e.deleteValue(gn);
}
var zr = "propagation", Ju = new Vu(), Wu = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = Ql, this.getBaggage = fs, this.getActiveBaggage = zu, this.setBaggage = Hu, this.deleteBaggage = Fu;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return Xt(zr, t, Se.instance());
    }, e.prototype.inject = function(t, r, n) {
      return n === void 0 && (n = _u), this._getGlobalPropagator().inject(t, r, n);
    }, e.prototype.extract = function(t, r, n) {
      return n === void 0 && (n = vu), this._getGlobalPropagator().extract(t, r, n);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Qt(zr, Se.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return We(zr) || Ju;
    }, e;
  }()
);
Wu.getInstance();
var Hr = "trace", Gu = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new Bn(), this.wrapSpanContext = Au, this.isSpanContextValid = ds, this.deleteSpan = Eu, this.getSpan = mn, this.getActiveSpan = Iu, this.getSpanContext = cs, this.setSpan = hn, this.setSpanContext = Nu;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Xt(Hr, this._proxyTracerProvider, Se.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return We(Hr) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Qt(Hr, Se.instance()), this._proxyTracerProvider = new Bn();
    }, e;
  }()
), Ku = Gu.getInstance(), Yu = Object.defineProperty, yn = (e, t) => {
  for (var r in t)
    Yu(e, r, { get: t[r], enumerable: !0 });
};
function br(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = new Headers(e ?? {});
  return n.has("Content-Type") || n.set("Content-Type", t), r !== void 0 && n.set("X-Vercel-AI-Data-Stream", r), n;
}
function Vn(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = {};
  if (e != null)
    for (const [a, s] of Object.entries(e))
      n[a] = s;
  return n["Content-Type"] == null && (n["Content-Type"] = t), r !== void 0 && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function zn({
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
var ms = "AI_InvalidArgumentError", hs = `vercel.ai.error.${ms}`, Xu = Symbol.for(hs), gs, de = class extends N {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: ms,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[gs] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return N.hasMarker(e, hs);
  }
};
gs = Xu;
async function Qu(e) {
  return e === void 0 ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
var ys = "AI_RetryError", vs = `vercel.ai.error.${ys}`, ec = Symbol.for(vs), _s, Hn = class extends N {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: ys, message: e }), this[_s] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return N.hasMarker(e, vs);
  }
};
_s = ec;
var tc = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => bs(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function bs(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (ir(s) || t === 0)
      throw s;
    const o = Ao(s), i = [...a, s], u = i.length;
    if (u > t)
      throw new Hn({
        message: `Failed after ${u} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (s instanceof Error && be.isInstance(s) && s.isRetryable === !0 && u <= t)
      return await Qu(r), bs(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw u === 1 ? s : new Hn({
      message: `Failed after ${u} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function rc({
  maxRetries: e
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new de({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new de({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const t = e ?? 2;
  return {
    maxRetries: t,
    retry: tc({ maxRetries: t })
  };
}
function en({
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
function nc({
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
var ac = {
  startSpan() {
    return or;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(or);
    if (typeof r == "function")
      return r(or);
    if (typeof n == "function")
      return n(or);
  }
}, or = {
  spanContext() {
    return sc;
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
}, sc = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function oc({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || Ku.getTracer("ai") : ac;
}
function tn({
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
          code: _r.ERROR,
          message: o.message
        })) : s.setStatus({ code: _r.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function nt({
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
var ws = "AI_NoObjectGeneratedError", xs = `vercel.ai.error.${ws}`, ic = Symbol.for(xs), ks, Fn = class extends N {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: n,
    usage: a
  }) {
    super({ name: ws, message: e, cause: t }), this[ks] = !0, this.text = r, this.response = n, this.usage = a;
  }
  static isInstance(e) {
    return N.hasMarker(e, xs);
  }
};
ks = ic;
var Ts = "AI_DownloadError", Ss = `vercel.ai.error.${Ts}`, lc = Symbol.for(Ss), Cs, Fr = class extends N {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: Ts, message: a, cause: n }), this[Cs] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return N.hasMarker(e, Ss);
  }
};
Cs = lc;
async function uc({
  url: e,
  fetchImplementation: t = fetch
}) {
  var r;
  const n = e.toString();
  try {
    const a = await t(n);
    if (!a.ok)
      throw new Fr({
        url: n,
        statusCode: a.status,
        statusText: a.statusText
      });
    return {
      data: new Uint8Array(await a.arrayBuffer()),
      mimeType: (r = a.headers.get("content-type")) != null ? r : void 0
    };
  } catch (a) {
    throw Fr.isInstance(a) ? a : new Fr({ url: n, cause: a });
  }
}
var cc = [
  { mimeType: "image/gif", bytes: [71, 73, 70] },
  { mimeType: "image/png", bytes: [137, 80, 78, 71] },
  { mimeType: "image/jpeg", bytes: [255, 216] },
  { mimeType: "image/webp", bytes: [82, 73, 70, 70] }
];
function dc(e) {
  for (const { bytes: t, mimeType: r } of cc)
    if (e.length >= t.length && t.every((n, a) => e[a] === n))
      return r;
}
var Is = "AI_InvalidDataContentError", Es = `vercel.ai.error.${Is}`, pc = Symbol.for(Es), Ns, Jn = class extends N {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: Is, message: r, cause: t }), this[Ns] = !0, this.content = e;
  }
  static isInstance(e) {
    return N.hasMarker(e, Es);
  }
};
Ns = pc;
var Rs = l.union([
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
function fc(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? gt(new Uint8Array(e)) : gt(e);
}
function wr(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return Jo(e);
    } catch (t) {
      throw new Jn({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Jn({ content: e });
}
function mc(e) {
  try {
    return new TextDecoder().decode(e);
  } catch {
    throw new Error("Error decoding Uint8Array to text");
  }
}
var Ps = "AI_InvalidMessageRoleError", js = `vercel.ai.error.${Ps}`, hc = Symbol.for(js), Os, gc = class extends N {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: Ps, message: t }), this[Os] = !0, this.role = e;
  }
  static isInstance(e) {
    return N.hasMarker(e, js);
  }
};
Os = hc;
function yc(e) {
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
async function vc({
  prompt: e,
  modelSupportsImageUrls: t = !0,
  modelSupportsUrl: r = () => !1,
  downloadImplementation: n = uc
}) {
  const a = await bc(
    e.messages,
    n,
    t,
    r
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (s) => _c(s, a)
    )
  ];
}
function _c(e, t) {
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
        content: e.content.map((n) => wc(n, t)).filter((n) => n.type !== "text" || n.text !== ""),
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
      throw new gc({ role: n });
    }
  }
}
async function bc(e, t, r, n) {
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
function wc(e, t) {
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
      const { mimeType: i, base64Content: u } = yc(
        a.toString()
      );
      if (i == null || u == null)
        throw new Error(`Invalid data URL format in part ${o}`);
      r = i, s = wr(u);
    } else {
      const i = t[a.toString()];
      i ? (s = i.data, r ?? (r = i.mimeType)) : s = a;
    }
  else
    s = wr(a);
  switch (o) {
    case "image":
      return r == null && s instanceof Uint8Array && (r = dc(s)), {
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
        data: s instanceof Uint8Array ? fc(s) : s,
        mimeType: r,
        providerMetadata: e.experimental_providerMetadata
      };
  }
}
function xc({
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
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (a != null && typeof a != "number")
    throw new de({
      parameter: "presencePenalty",
      value: a,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new de({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (i != null && !Number.isInteger(i))
    throw new de({
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
var rn = l.lazy(
  () => l.union([
    l.null(),
    l.string(),
    l.number(),
    l.boolean(),
    l.record(l.string(), rn),
    l.array(rn)
  ])
), Ze = l.record(
  l.string(),
  l.record(l.string(), rn)
), kc = l.array(
  l.union([
    l.object({ type: l.literal("text"), text: l.string() }),
    l.object({
      type: l.literal("image"),
      data: l.string(),
      mimeType: l.string().optional()
    })
  ])
), As = l.object({
  type: l.literal("text"),
  text: l.string(),
  experimental_providerMetadata: Ze.optional()
}), Tc = l.object({
  type: l.literal("image"),
  image: l.union([Rs, l.instanceof(URL)]),
  mimeType: l.string().optional(),
  experimental_providerMetadata: Ze.optional()
}), Sc = l.object({
  type: l.literal("file"),
  data: l.union([Rs, l.instanceof(URL)]),
  mimeType: l.string(),
  experimental_providerMetadata: Ze.optional()
}), Cc = l.object({
  type: l.literal("tool-call"),
  toolCallId: l.string(),
  toolName: l.string(),
  args: l.unknown()
}), Ic = l.object({
  type: l.literal("tool-result"),
  toolCallId: l.string(),
  toolName: l.string(),
  result: l.unknown(),
  content: kc.optional(),
  isError: l.boolean().optional(),
  experimental_providerMetadata: Ze.optional()
}), Ec = l.object({
  role: l.literal("system"),
  content: l.string(),
  experimental_providerMetadata: Ze.optional()
}), Nc = l.object({
  role: l.literal("user"),
  content: l.union([
    l.string(),
    l.array(l.union([As, Tc, Sc]))
  ]),
  experimental_providerMetadata: Ze.optional()
}), Rc = l.object({
  role: l.literal("assistant"),
  content: l.union([
    l.string(),
    l.array(l.union([As, Cc]))
  ]),
  experimental_providerMetadata: Ze.optional()
}), Pc = l.object({
  role: l.literal("tool"),
  content: l.array(Ic),
  experimental_providerMetadata: Ze.optional()
}), jc = l.union([
  Ec,
  Nc,
  Rc,
  Pc
]);
function Oc(e) {
  if (!Array.isArray(e))
    return "other";
  if (e.length === 0)
    return "messages";
  const t = e.map(Ac);
  return t.some((r) => r === "has-ui-specific-parts") ? "ui-messages" : t.every(
    (r) => r === "has-core-specific-parts" || r === "message"
  ) ? "messages" : "other";
}
function Ac(e) {
  return typeof e == "object" && e !== null && (e.role === "function" || // UI-only role
  e.role === "data" || // UI-only role
  "toolInvocations" in e || // UI-specific field
  "experimental_attachments" in e) ? "has-ui-specific-parts" : typeof e == "object" && e !== null && "content" in e && (Array.isArray(e.content) || // Core messages can have array content
  "experimental_providerMetadata" in e) ? "has-core-specific-parts" : typeof e == "object" && e !== null && "role" in e && "content" in e && typeof e.content == "string" && ["system", "user", "assistant", "tool"].includes(e.role) ? "message" : "other";
}
function Mc(e) {
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
            image: wr(u)
          });
        else if ((n = s.contentType) != null && n.startsWith("text/"))
          a.push({
            type: "text",
            text: mc(
              wr(u)
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
var Ms = "AI_MessageConversionError", $s = `vercel.ai.error.${Ms}`, $c = Symbol.for($s), Zs, Wn = class extends N {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: Ms, message: t }), this[Zs] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return N.hasMarker(e, $s);
  }
};
Zs = $c;
function Zc(e, t) {
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
            ...Mc(c)
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
              throw new Wn({
                originalMessage: s,
                message: "ToolInvocation must have a result: " + JSON.stringify(d)
              });
            const { toolCallId: f, toolName: g, result: b } = d, v = n[g];
            return (v == null ? void 0 : v.experimental_toToolResultContent) != null ? {
              type: "tool-result",
              toolCallId: f,
              toolName: g,
              result: v.experimental_toToolResultContent(b),
              experimental_content: v.experimental_toToolResultContent(b)
            } : {
              type: "tool-result",
              toolCallId: f,
              toolName: g,
              result: b
            };
          })
        });
        break;
      }
      case "data":
        break;
      default: {
        const d = o;
        throw new Wn({
          originalMessage: s,
          message: `Unsupported role: ${d}`
        });
      }
    }
  }
  return a;
}
function Dc({
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
    const r = Oc(e.messages);
    if (r === "other")
      throw new Ve({
        prompt: e,
        message: "messages must be an array of CoreMessage or UIMessage"
      });
    const n = r === "ui-messages" ? Zc(e.messages, {
      tools: t
    }) : e.messages, a = Kt({
      value: n,
      schema: l.array(jc)
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
function Uc({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Lc(e, t) {
  return {
    promptTokens: e.promptTokens + t.promptTokens,
    completionTokens: e.completionTokens + t.completionTokens,
    totalTokens: e.totalTokens + t.totalTokens
  };
}
var qc = "JSON schema:", Bc = "You MUST answer with a JSON object that matches the JSON schema above.", Vc = "You MUST answer with JSON.";
function zc({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? qc : void 0,
  schemaSuffix: n = t != null ? Bc : Vc
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
function Gn(e, t) {
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
Gt({ prefix: "aiobj", size: 24 });
var ve = class {
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
function Kn() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function Hc() {
  let e = [], t = null, r = !1, n = Kn();
  const a = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = Kn(), await n.promise, a();
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
function Fc() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
Gt({ prefix: "aiobj", size: 24 });
var Ds = "AI_InvalidToolArgumentsError", Us = `vercel.ai.error.${Ds}`, Jc = Symbol.for(Us), Ls, qs = class extends N {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Wt(
      r
    )}`
  }) {
    super({ name: Ds, message: n, cause: r }), this[Ls] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return N.hasMarker(e, Us);
  }
};
Ls = Jc;
var Bs = "AI_NoSuchToolError", Vs = `vercel.ai.error.${Bs}`, Wc = Symbol.for(Vs), zs, nn = class extends N {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Bs, message: r }), this[zs] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return N.hasMarker(e, Vs);
  }
};
zs = Wc;
var Hs = "AI_ToolCallRepairError", Fs = `vercel.ai.error.${Hs}`, Gc = Symbol.for(Fs), Js, Kc = class extends N {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${Wt(e)}`
  }) {
    super({ name: Hs, message: r, cause: e }), this[Js] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return N.hasMarker(e, Fs);
  }
};
Js = Gc;
var Ws = "AI_ToolExecutionError", Gs = `vercel.ai.error.${Ws}`, Yc = Symbol.for(Gs), Ks, Xc = class extends N {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Error executing tool ${t}: ${Wt(r)}`
  }) {
    super({ name: Ws, message: n, cause: r }), this[Ks] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return N.hasMarker(e, Gs);
  }
};
Ks = Yc;
function Qc(e) {
  return e != null && Object.keys(e).length > 0;
}
function ed({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return Qc(e) ? {
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
            parameters: Er(s.parameters).jsonSchema
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
var td = /^([\s\S]*?)(\s+)(\S*)$/;
function rd(e) {
  const t = e.match(td);
  return t ? { prefix: t[1], whitespace: t[2], suffix: t[3] } : void 0;
}
async function nd({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: n,
  messages: a
}) {
  if (t == null)
    throw new nn({ toolName: e.toolName });
  try {
    return await Yn({ toolCall: e, tools: t });
  } catch (s) {
    if (r == null || !(nn.isInstance(s) || qs.isInstance(s)))
      throw s;
    let o = null;
    try {
      o = await r({
        toolCall: e,
        tools: t,
        parameterSchema: ({ toolName: i }) => Er(t[i].parameters).jsonSchema,
        system: n,
        messages: a,
        error: s
      });
    } catch (i) {
      throw new Kc({
        cause: i,
        originalError: s
      });
    }
    if (o == null)
      throw s;
    return await Yn({ toolCall: o, tools: t });
  }
}
async function Yn({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, n = t[r];
  if (n == null)
    throw new nn({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = Er(n.parameters), s = e.args.trim() === "" ? Kt({ value: {}, schema: a }) : Sr({ text: e.args, schema: a });
  if (s.success === !1)
    throw new qs({
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
function Xn({
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
Gt({ prefix: "aitxt", size: 24 });
var ad = {};
yn(ad, {
  object: () => od,
  text: () => sd
});
var sd = () => ({
  type: "text",
  responseFormat: () => ({ type: "text" }),
  injectIntoSystemPrompt({ system: e }) {
    return e;
  },
  parseOutput({ text: e }) {
    return e;
  }
}), od = ({
  schema: e
}) => {
  const t = Er(e);
  return {
    type: "object",
    responseFormat: ({ model: r }) => ({
      type: "json",
      schema: r.supportsStructuredOutputs ? t.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system: r, model: n }) {
      return n.supportsStructuredOutputs ? r : zc({
        prompt: r,
        schema: t.jsonSchema
      });
    },
    parseOutput({ text: r }, n) {
      const a = Sr({ text: r });
      if (!a.success)
        throw new Fn({
          message: "No object generated: could not parse the response.",
          cause: a.error,
          text: r,
          response: n.response,
          usage: n.usage
        });
      const s = Kt({
        value: a.value,
        schema: t
      });
      if (!s.success)
        throw new Fn({
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
function vn(e, t) {
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
          a.then((b) => ({ result: b, reader: r })),
          s.then((b) => ({ result: b, reader: n }))
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
function id({
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
    start(_) {
      c = _;
    }
  }), f = {}, g = /* @__PURE__ */ new Set();
  let b = !1, v;
  function p() {
    b && g.size === 0 && (v != null && c.enqueue(v), c.close());
  }
  const y = new TransformStream({
    async transform(_, C) {
      const I = _.type;
      switch (I) {
        case "text-delta":
        case "response-metadata":
        case "error": {
          C.enqueue(_);
          break;
        }
        case "tool-call-delta": {
          r && (f[_.toolCallId] || (C.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: _.toolCallId,
            toolName: _.toolName
          }), f[_.toolCallId] = !0), C.enqueue({
            type: "tool-call-delta",
            toolCallId: _.toolCallId,
            toolName: _.toolName,
            argsTextDelta: _.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          try {
            const w = await nd({
              toolCall: _,
              tools: e,
              repairToolCall: u,
              system: s,
              messages: o
            });
            C.enqueue(w);
            const R = e[w.toolName];
            if (R.execute != null) {
              const E = et();
              g.add(E), tn({
                name: "ai.toolCall",
                attributes: nt({
                  telemetry: a,
                  attributes: {
                    ...en({
                      operationId: "ai.toolCall",
                      telemetry: a
                    }),
                    "ai.toolCall.name": w.toolName,
                    "ai.toolCall.id": w.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(w.args)
                    }
                  }
                }),
                tracer: n,
                fn: async (D) => R.execute(w.args, {
                  toolCallId: w.toolCallId,
                  messages: o,
                  abortSignal: i
                }).then(
                  (B) => {
                    c.enqueue({
                      ...w,
                      type: "tool-result",
                      result: B
                    }), g.delete(E), p();
                    try {
                      D.setAttributes(
                        nt({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(B)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (B) => {
                    c.enqueue({
                      type: "error",
                      error: new Xc({
                        toolName: w.toolName,
                        toolArgs: w.args,
                        cause: B
                      })
                    }), g.delete(E), p();
                  }
                )
              });
            }
          } catch (w) {
            c.enqueue({
              type: "error",
              error: w
            });
          }
          break;
        }
        case "finish": {
          v = {
            type: "finish",
            finishReason: _.finishReason,
            logprobs: _.logprobs,
            usage: Uc(_.usage),
            experimental_providerMetadata: _.providerMetadata
          };
          break;
        }
        default: {
          const w = I;
          throw new Error(`Unhandled chunk type: ${w}`);
        }
      }
    },
    flush() {
      b = !0, p();
    }
  });
  return new ReadableStream({
    async start(_) {
      return Promise.all([
        t.pipeThrough(y).pipeTo(
          new WritableStream({
            write(C) {
              _.enqueue(C);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
          new WritableStream({
            write(C) {
              _.enqueue(C);
            },
            close() {
              _.close();
            }
          })
        )
      ]);
    }
  });
}
var ld = Gt({ prefix: "aitxt", size: 24 });
function op({
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
  experimental_toolCallStreaming: b = !1,
  experimental_activeTools: v,
  experimental_repairToolCall: p,
  experimental_transform: y,
  onChunk: _,
  onFinish: C,
  onStepFinish: I,
  _internal: {
    now: w = Fc,
    generateId: R = ld,
    currentDate: E = () => /* @__PURE__ */ new Date()
  } = {},
  ...D
}) {
  return new ud({
    model: e,
    telemetry: f,
    headers: u,
    settings: D,
    maxRetries: o,
    abortSignal: i,
    system: n,
    prompt: a,
    messages: s,
    tools: t,
    toolChoice: r,
    toolCallStreaming: b,
    transform: y == null ? void 0 : y({ tools: t }),
    activeTools: v,
    repairToolCall: p,
    maxSteps: c,
    continueSteps: d,
    providerMetadata: g,
    onChunk: _,
    onFinish: C,
    onStepFinish: I,
    now: w,
    currentDate: E,
    generateId: R
  });
}
var ud = class {
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
    transform: g,
    activeTools: b,
    repairToolCall: v,
    maxSteps: p,
    continueSteps: y,
    providerMetadata: _,
    onChunk: C,
    onFinish: I,
    onStepFinish: w,
    now: R,
    currentDate: E,
    generateId: D
  }) {
    if (this.warningsPromise = new ve(), this.usagePromise = new ve(), this.finishReasonPromise = new ve(), this.providerMetadataPromise = new ve(), this.textPromise = new ve(), this.toolCallsPromise = new ve(), this.toolResultsPromise = new ve(), this.requestPromise = new ve(), this.responsePromise = new ve(), this.stepsPromise = new ve(), p < 1)
      throw new de({
        parameter: "maxSteps",
        value: p,
        message: "maxSteps must be at least 1"
      });
    let B = "", z = "", Y = "";
    const J = {
      id: D(),
      timestamp: E(),
      modelId: e.modelId,
      messages: []
    };
    let W = [], Re = [], Ye, ne, ie = "initial";
    const ae = [];
    let De;
    const er = new TransformStream({
      async transform(j, ge) {
        if (ge.enqueue(j), (j.type === "text-delta" || j.type === "tool-call" || j.type === "tool-result" || j.type === "tool-call-streaming-start" || j.type === "tool-call-delta") && await (C == null ? void 0 : C({ chunk: j })), j.type === "text-delta" && (B += j.textDelta, z += j.textDelta, Y += j.textDelta), j.type === "tool-call" && W.push(j), j.type === "tool-result" && Re.push(j), j.type === "step-finish") {
          const L = Xn({
            text: z,
            tools: c ?? {},
            toolCalls: W,
            toolResults: Re
          }), se = ae.length;
          let oe = "done";
          se + 1 < p && (y && j.finishReason === "length" && // only use continue when there are no tool calls:
          W.length === 0 ? oe = "continue" : (
            // there are tool calls:
            W.length > 0 && // all current tool calls have results:
            Re.length === W.length && (oe = "tool-result")
          ));
          const Ce = {
            stepType: ie,
            text: B,
            toolCalls: W,
            toolResults: Re,
            finishReason: j.finishReason,
            usage: j.usage,
            warnings: j.warnings,
            logprobs: j.logprobs,
            request: j.request,
            response: {
              ...j.response,
              messages: [...J.messages, ...L]
            },
            experimental_providerMetadata: j.experimental_providerMetadata,
            isContinued: j.isContinued
          };
          await (w == null ? void 0 : w(Ce)), ae.push(Ce), W = [], Re = [], B = "", j.request, oe !== "done" && (ie = oe), oe !== "continue" && (J.messages.push(...L), z = "");
        }
        j.type === "finish" && (J.id = j.response.id, J.timestamp = j.response.timestamp, J.modelId = j.response.modelId, J.headers = j.response.headers, ne = j.usage, Ye = j.finishReason, j.experimental_providerMetadata);
      },
      async flush(j) {
        var ge;
        try {
          const L = ae[ae.length - 1];
          L && (X.warningsPromise.resolve(L.warnings), X.requestPromise.resolve(L.request), X.responsePromise.resolve(L.response), X.toolCallsPromise.resolve(L.toolCalls), X.toolResultsPromise.resolve(L.toolResults), X.providerMetadataPromise.resolve(
            L.experimental_providerMetadata
          ));
          const se = Ye ?? "unknown", oe = ne ?? {
            completionTokens: NaN,
            promptTokens: NaN,
            totalTokens: NaN
          };
          X.finishReasonPromise.resolve(se), X.usagePromise.resolve(oe), X.textPromise.resolve(Y), X.stepsPromise.resolve(ae), await (I == null ? void 0 : I({
            finishReason: se,
            logprobs: void 0,
            usage: oe,
            text: Y,
            toolCalls: L.toolCalls,
            toolResults: L.toolResults,
            request: (ge = L.request) != null ? ge : {},
            response: L.response,
            warnings: L.warnings,
            experimental_providerMetadata: L.experimental_providerMetadata,
            steps: ae
          })), De.setAttributes(
            nt({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": se,
                "ai.response.text": { output: () => Y },
                "ai.response.toolCalls": {
                  output: () => {
                    var Ce;
                    return (Ce = L.toolCalls) != null && Ce.length ? JSON.stringify(L.toolCalls) : void 0;
                  }
                },
                "ai.usage.promptTokens": oe.promptTokens,
                "ai.usage.completionTokens": oe.completionTokens
              }
            })
          );
        } catch (L) {
          j.error(L);
        } finally {
          De.end();
        }
      }
    }), U = Hc();
    this.addStream = U.addStream, this.closeStream = U.close, this.baseStream = (g ? U.stream.pipeThrough(g) : U.stream).pipeThrough(er);
    const { maxRetries: Q, retry: ee } = rc({
      maxRetries: a
    }), G = oc(t), xn = nc({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...n, maxRetries: Q }
    }), Pr = Dc({
      prompt: { system: o, prompt: i, messages: u },
      tools: c
    }), X = this;
    tn({
      name: "ai.streamText",
      attributes: nt({
        telemetry: t,
        attributes: {
          ...en({ operationId: "ai.streamText", telemetry: t }),
          ...xn,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: i, messages: u })
          },
          "ai.settings.maxSteps": p
        }
      }),
      tracer: G,
      endWhenDone: !1,
      fn: async (j) => {
        De = j;
        async function ge({
          currentStep: L,
          responseMessages: se,
          usage: oe,
          stepType: Ce,
          previousStepText: Qs,
          hasLeadingWhitespace: eo
        }) {
          const jr = se.length === 0 ? Pr.type : "messages", kn = [
            ...Pr.messages,
            ...se
          ], Tn = await vc({
            prompt: {
              type: jr,
              system: Pr.system,
              messages: kn
            },
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: e.supportsUrl
          }), tr = {
            type: "regular",
            ...ed({ tools: c, toolChoice: d, activeTools: b })
          }, {
            result: { stream: to, warnings: ro, rawResponse: rr, request: Sn },
            doStreamSpan: Xe,
            startTimestampMs: Cn
          } = await ee(
            () => tn({
              name: "ai.streamText.doStream",
              attributes: nt({
                telemetry: t,
                attributes: {
                  ...en({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...xn,
                  "ai.prompt.format": {
                    input: () => jr
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(Tn)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var $;
                      return ($ = tr.tools) == null ? void 0 : $.map((H) => JSON.stringify(H));
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => tr.toolChoice != null ? JSON.stringify(tr.toolChoice) : void 0
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
              tracer: G,
              endWhenDone: !1,
              fn: async ($) => ({
                startTimestampMs: R(),
                // get before the call
                doStreamSpan: $,
                result: await e.doStream({
                  mode: tr,
                  ...xc(n),
                  inputFormat: jr,
                  prompt: Tn,
                  providerMetadata: _,
                  abortSignal: s,
                  headers: r
                })
              })
            })
          ), no = id({
            tools: c,
            generatorStream: to,
            toolCallStreaming: f,
            tracer: G,
            telemetry: t,
            system: o,
            messages: kn,
            repairToolCall: v,
            abortSignal: s
          }), ao = Sn ?? {}, Ue = [], Or = [];
          let Le = "unknown", Pe = {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          }, Ar, In = !0, ct = "", En = Ce === "continue" ? Qs : "", Mr, le = {
            id: D(),
            timestamp: E(),
            modelId: e.modelId
          }, Qe = "", Nn = !1, Rn = !0, Pn = !1;
          async function $r({
            controller: $,
            chunk: H
          }) {
            $.enqueue(H), ct += H.textDelta, En += H.textDelta, Nn = !0, Pn = H.textDelta.trimEnd() !== H.textDelta;
          }
          X.addStream(
            no.pipeThrough(
              new TransformStream({
                async transform($, H) {
                  var Ie, dt, qe;
                  if (In) {
                    const ye = R() - Cn;
                    In = !1, Xe.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": ye
                    }), Xe.setAttributes({
                      "ai.response.msToFirstChunk": ye
                    });
                  }
                  if ($.type === "text-delta" && $.textDelta.length === 0)
                    return;
                  const jn = $.type;
                  switch (jn) {
                    case "text-delta": {
                      if (y) {
                        const ye = Rn && eo ? $.textDelta.trimStart() : $.textDelta;
                        if (ye.length === 0)
                          break;
                        Rn = !1, Qe += ye;
                        const nr = rd(Qe);
                        nr != null && (Qe = nr.suffix, await $r({
                          controller: H,
                          chunk: {
                            type: "text-delta",
                            textDelta: nr.prefix + nr.whitespace
                          }
                        }));
                      } else
                        await $r({ controller: H, chunk: $ });
                      break;
                    }
                    case "tool-call": {
                      H.enqueue($), Ue.push($);
                      break;
                    }
                    case "tool-result": {
                      H.enqueue($), Or.push($);
                      break;
                    }
                    case "response-metadata": {
                      le = {
                        id: (Ie = $.id) != null ? Ie : le.id,
                        timestamp: (dt = $.timestamp) != null ? dt : le.timestamp,
                        modelId: (qe = $.modelId) != null ? qe : le.modelId
                      };
                      break;
                    }
                    case "finish": {
                      Pe = $.usage, Le = $.finishReason, Ar = $.experimental_providerMetadata, Mr = $.logprobs;
                      const ye = R() - Cn;
                      Xe.addEvent("ai.stream.finish"), Xe.setAttributes({
                        "ai.response.msToFinish": ye,
                        "ai.response.avgCompletionTokensPerSecond": 1e3 * Pe.completionTokens / ye
                      });
                      break;
                    }
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      H.enqueue($);
                      break;
                    }
                    case "error": {
                      H.enqueue($), Le = "error";
                      break;
                    }
                    default: {
                      const ye = jn;
                      throw new Error(`Unknown chunk type: ${ye}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush($) {
                  const H = Ue.length > 0 ? JSON.stringify(Ue) : void 0;
                  let Ie = "done";
                  L + 1 < p && (y && Le === "length" && // only use continue when there are no tool calls:
                  Ue.length === 0 ? Ie = "continue" : (
                    // there are tool calls:
                    Ue.length > 0 && // all current tool calls have results:
                    Or.length === Ue.length && (Ie = "tool-result")
                  )), y && Qe.length > 0 && (Ie !== "continue" || // when the next step is a regular step, publish the buffer
                  Ce === "continue" && !Nn) && (await $r({
                    controller: $,
                    chunk: {
                      type: "text-delta",
                      textDelta: Qe
                    }
                  }), Qe = "");
                  try {
                    Xe.setAttributes(
                      nt({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Le,
                          "ai.response.text": { output: () => ct },
                          "ai.response.toolCalls": {
                            output: () => H
                          },
                          "ai.response.id": le.id,
                          "ai.response.model": le.modelId,
                          "ai.response.timestamp": le.timestamp.toISOString(),
                          "ai.usage.promptTokens": Pe.promptTokens,
                          "ai.usage.completionTokens": Pe.completionTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [Le],
                          "gen_ai.response.id": le.id,
                          "gen_ai.response.model": le.modelId,
                          "gen_ai.usage.input_tokens": Pe.promptTokens,
                          "gen_ai.usage.output_tokens": Pe.completionTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    Xe.end();
                  }
                  $.enqueue({
                    type: "step-finish",
                    finishReason: Le,
                    usage: Pe,
                    experimental_providerMetadata: Ar,
                    logprobs: Mr,
                    request: ao,
                    response: {
                      ...le,
                      headers: rr == null ? void 0 : rr.headers
                    },
                    warnings: ro,
                    isContinued: Ie === "continue"
                  });
                  const dt = Lc(oe, Pe);
                  if (Ie === "done")
                    $.enqueue({
                      type: "finish",
                      finishReason: Le,
                      usage: dt,
                      experimental_providerMetadata: Ar,
                      logprobs: Mr,
                      response: {
                        ...le,
                        headers: rr == null ? void 0 : rr.headers
                      }
                    }), X.closeStream();
                  else {
                    if (Ce === "continue") {
                      const qe = se[se.length - 1];
                      typeof qe.content == "string" ? qe.content += ct : qe.content.push({
                        text: ct,
                        type: "text"
                      });
                    } else
                      se.push(
                        ...Xn({
                          text: ct,
                          tools: c ?? {},
                          toolCalls: Ue,
                          toolResults: Or
                        })
                      );
                    await ge({
                      currentStep: L + 1,
                      responseMessages: se,
                      usage: dt,
                      stepType: Ie,
                      previousStepText: En,
                      hasLeadingWhitespace: Pn
                    });
                  }
                }
              })
            )
          );
        }
        await ge({
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
    }).catch((j) => {
      X.addStream(
        new ReadableStream({
          start(ge) {
            ge.enqueue({ type: "error", error: j }), ge.close();
          }
        })
      ), X.closeStream();
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
    const [e, t] = this.baseStream.tee();
    return this.baseStream = t, e;
  }
  get textStream() {
    return Gn(this.teeStream(), {
      transform(e, t) {
        e.type === "text-delta" ? t.enqueue(e.textDelta) : e.type === "error" && t.error(e.error);
      }
    });
  }
  get fullStream() {
    return Gn(this.teeStream(), {
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
            o.enqueue(_e("text", s.textDelta));
            break;
          }
          case "tool-call-streaming-start": {
            o.enqueue(
              _e("tool_call_streaming_start", {
                toolCallId: s.toolCallId,
                toolName: s.toolName
              })
            );
            break;
          }
          case "tool-call-delta": {
            o.enqueue(
              _e("tool_call_delta", {
                toolCallId: s.toolCallId,
                argsTextDelta: s.argsTextDelta
              })
            );
            break;
          }
          case "tool-call": {
            o.enqueue(
              _e("tool_call", {
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              })
            );
            break;
          }
          case "tool-result": {
            o.enqueue(
              _e("tool_result", {
                toolCallId: s.toolCallId,
                result: s.result
              })
            );
            break;
          }
          case "error": {
            o.enqueue(
              _e("error", e(s.error))
            );
            break;
          }
          case "step-finish": {
            o.enqueue(
              _e("finish_step", {
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
              _e("finish_message", {
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
    zn({
      response: e,
      status: t,
      statusText: r,
      headers: Vn(n, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({ data: a, getErrorMessage: s, sendUsage: o })
    });
  }
  pipeTextStreamToResponse(e, t) {
    zn({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: Vn(t == null ? void 0 : t.headers, {
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
    return e != null && e.data ? vn(e == null ? void 0 : e.data.stream, t) : t;
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
        headers: br(e, {
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
      headers: br(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, cd = {};
yn(cd, {
  mergeIntoDataStream: () => fd,
  toDataStream: () => dd,
  toDataStreamResponse: () => pd
});
function Ys(e = {}) {
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
function _n(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        var a;
        if (typeof r == "string") {
          n.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && Qn(
            (a = r.data) == null ? void 0 : a.chunk,
            n
          );
          return;
        }
        Qn(r, n);
      }
    })
  ).pipeThrough(Ys(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        n.enqueue(_e("text", r));
      }
    })
  );
}
function dd(e, t) {
  return _n(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function pd(e, t) {
  var r;
  const n = _n(
    e,
    t == null ? void 0 : t.callbacks
  ).pipeThrough(new TextEncoderStream()), a = t == null ? void 0 : t.data, s = t == null ? void 0 : t.init, o = a ? vn(a.stream, n) : n;
  return new Response(o, {
    status: (r = s == null ? void 0 : s.status) != null ? r : 200,
    statusText: s == null ? void 0 : s.statusText,
    headers: br(s == null ? void 0 : s.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function fd(e, t) {
  t.dataStream.merge(_n(e, t.callbacks));
}
function Qn(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const n of r)
      n.type === "text" && t.enqueue(n.text);
  }
}
var md = {};
yn(md, {
  mergeIntoDataStream: () => yd,
  toDataStream: () => hd,
  toDataStreamResponse: () => gd
});
function bn(e, t) {
  const r = vd();
  return Oo(e[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(n, a) {
        a.enqueue(r(n.delta));
      }
    })
  ).pipeThrough(Ys(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (n, a) => {
        a.enqueue(_e("text", n));
      }
    })
  );
}
function hd(e, t) {
  return bn(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function gd(e, t = {}) {
  var r;
  const { init: n, data: a, callbacks: s } = t, o = bn(e, s).pipeThrough(
    new TextEncoderStream()
  ), i = a ? vn(a.stream, o) : o;
  return new Response(i, {
    status: (r = n == null ? void 0 : n.status) != null ? r : 200,
    statusText: n == null ? void 0 : n.statusText,
    headers: br(n == null ? void 0 : n.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function yd(e, t) {
  t.dataStream.merge(bn(e, t.callbacks));
}
function vd() {
  let e = !0;
  return (t) => (e && (t = t.trimStart(), t && (e = !1)), t);
}
var _d = l.object({
  type: l.literal("error"),
  error: l.object({
    type: l.string(),
    message: l.string()
  })
}), ea = un({
  errorSchema: _d,
  errorToMessage: (e) => e.error.message
});
function bd({
  prompt: e,
  cacheControl: t
}) {
  var r, n, a, s;
  const o = /* @__PURE__ */ new Set(), i = wd(e);
  let u;
  const c = [];
  function d(f) {
    var g;
    if (t === !1)
      return;
    const b = f == null ? void 0 : f.anthropic;
    return (g = b == null ? void 0 : b.cacheControl) != null ? g : b == null ? void 0 : b.cache_control;
  }
  for (let f = 0; f < i.length; f++) {
    const g = i[f], b = f === i.length - 1, v = g.type;
    switch (v) {
      case "system": {
        if (u != null)
          throw new V({
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
          const { role: _, content: C } = y;
          switch (_) {
            case "user": {
              for (let I = 0; I < C.length; I++) {
                const w = C[I], R = I === C.length - 1, E = (r = d(w.providerMetadata)) != null ? r : R ? d(y.providerMetadata) : void 0;
                switch (w.type) {
                  case "text": {
                    p.push({
                      type: "text",
                      text: w.text,
                      cache_control: E
                    });
                    break;
                  }
                  case "image": {
                    if (w.image instanceof URL)
                      throw new V({
                        functionality: "Image URLs in user messages"
                      });
                    p.push({
                      type: "image",
                      source: {
                        type: "base64",
                        media_type: (n = w.mimeType) != null ? n : "image/jpeg",
                        data: gt(w.image)
                      },
                      cache_control: E
                    });
                    break;
                  }
                  case "file": {
                    if (w.data instanceof URL)
                      throw new V({
                        functionality: "Image URLs in user messages"
                      });
                    if (w.mimeType !== "application/pdf")
                      throw new V({
                        functionality: "Non-PDF files in user messages"
                      });
                    o.add("pdfs-2024-09-25"), p.push({
                      type: "document",
                      source: {
                        type: "base64",
                        media_type: "application/pdf",
                        data: w.data
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
              for (let I = 0; I < C.length; I++) {
                const w = C[I], R = I === C.length - 1, E = (a = d(w.providerMetadata)) != null ? a : R ? d(y.providerMetadata) : void 0, D = w.content != null ? w.content.map((B) => {
                  var z;
                  switch (B.type) {
                    case "text":
                      return {
                        type: "text",
                        text: B.text,
                        cache_control: void 0
                      };
                    case "image":
                      return {
                        type: "image",
                        source: {
                          type: "base64",
                          media_type: (z = B.mimeType) != null ? z : "image/jpeg",
                          data: B.data
                        },
                        cache_control: void 0
                      };
                  }
                }) : JSON.stringify(w.result);
                p.push({
                  type: "tool_result",
                  tool_use_id: w.toolCallId,
                  content: D,
                  is_error: w.isError,
                  cache_control: E
                });
              }
              break;
            }
            default: {
              const I = _;
              throw new Error(`Unsupported role: ${I}`);
            }
          }
        }
        c.push({ role: "user", content: p });
        break;
      }
      case "assistant": {
        const p = [];
        for (let y = 0; y < g.messages.length; y++) {
          const _ = g.messages[y], C = y === g.messages.length - 1, { content: I } = _;
          for (let w = 0; w < I.length; w++) {
            const R = I[w], E = w === I.length - 1, D = (s = d(R.providerMetadata)) != null ? s : E ? d(_.providerMetadata) : void 0;
            switch (R.type) {
              case "text": {
                p.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    b && C && E ? R.text.trim() : R.text
                  ),
                  cache_control: D
                });
                break;
              }
              case "tool-call": {
                p.push({
                  type: "tool_use",
                  id: R.toolCallId,
                  name: R.toolName,
                  input: R.args,
                  cache_control: D
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
        const p = v;
        throw new Error(`Unsupported type: ${p}`);
      }
    }
  }
  return {
    prompt: { system: u, messages: c },
    betas: o
  };
}
function wd(e) {
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
function ta(e) {
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
function xd(e) {
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
      throw new V({
        functionality: `Unsupported tool choice type: ${u}`
      });
    }
  }
}
var kd = class {
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
    const g = e.type, b = [];
    o != null && b.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && b.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), d != null && b.push({
      type: "unsupported-setting",
      setting: "seed"
    }), c != null && c.type !== "text" && b.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: v, betas: p } = bd({
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
      system: v.system,
      messages: v.messages
    };
    switch (g) {
      case "regular": {
        const {
          tools: _,
          tool_choice: C,
          toolWarnings: I,
          betas: w
        } = xd(e);
        return {
          args: { ...y, tools: _, tool_choice: C },
          warnings: [...b, ...I],
          betas: /* @__PURE__ */ new Set([...p, ...w])
        };
      }
      case "object-json":
        throw new V({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: _, description: C, parameters: I } = e.tool;
        return {
          args: {
            ...y,
            tools: [{ name: _, description: C, input_schema: I }],
            tool_choice: { type: "tool", name: _ }
          },
          warnings: b,
          betas: p
        };
      }
      default: {
        const _ = g;
        throw new Error(`Unsupported type: ${_}`);
      }
    }
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return this.settings.cacheControl && e.add("prompt-caching-2024-07-31"), xe(
      await zo(this.config.headers),
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
    const { args: s, warnings: o, betas: i } = await this.getArgs(e), { responseHeaders: u, value: c } = await me({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: i, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: ea,
      successfulResponseHandler: Ge(
        Td
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: d, ...f } = s;
    let g = "";
    for (const v of c.content)
      v.type === "text" && (g += v.text);
    let b;
    if (c.content.some((v) => v.type === "tool_use")) {
      b = [];
      for (const v of c.content)
        v.type === "tool_use" && b.push({
          toolCallType: "function",
          toolCallId: v.id,
          toolName: v.name,
          args: JSON.stringify(v.input)
        });
    }
    return {
      text: g,
      toolCalls: b,
      finishReason: ta(c.stop_reason),
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
    const { args: t, warnings: r, betas: n } = await this.getArgs(e), a = { ...t, stream: !0 }, { responseHeaders: s, value: o } = await me({
      url: this.buildRequestUrl(!0),
      headers: await this.getHeaders({ betas: n, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: ea,
      successfulResponseHandler: Cr(
        Sd
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
    const b = this;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          transform(v, p) {
            var y, _, C, I;
            if (!v.success) {
              p.enqueue({ type: "error", error: v.error });
              return;
            }
            const w = v.value;
            switch (w.type) {
              case "ping":
                return;
              case "content_block_start": {
                const R = w.content_block.type;
                switch (R) {
                  case "text":
                    return;
                  case "tool_use": {
                    f[w.index] = {
                      toolCallId: w.content_block.id,
                      toolName: w.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const E = R;
                    throw new Error(
                      `Unsupported content block type: ${E}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (f[w.index] != null) {
                  const R = f[w.index];
                  p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: R.toolCallId,
                    toolName: R.toolName,
                    args: R.jsonText
                  }), delete f[w.index];
                }
                return;
              }
              case "content_block_delta": {
                const R = w.delta.type;
                switch (R) {
                  case "text_delta": {
                    p.enqueue({
                      type: "text-delta",
                      textDelta: w.delta.text
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const E = f[w.index];
                    p.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: E.toolCallId,
                      toolName: E.toolName,
                      argsTextDelta: w.delta.partial_json
                    }), E.jsonText += w.delta.partial_json;
                    return;
                  }
                  default: {
                    const E = R;
                    throw new Error(
                      `Unsupported delta type: ${E}`
                    );
                  }
                }
              }
              case "message_start": {
                d.promptTokens = w.message.usage.input_tokens, d.completionTokens = w.message.usage.output_tokens, b.settings.cacheControl === !0 && (g = {
                  anthropic: {
                    cacheCreationInputTokens: (y = w.message.usage.cache_creation_input_tokens) != null ? y : null,
                    cacheReadInputTokens: (_ = w.message.usage.cache_read_input_tokens) != null ? _ : null
                  }
                }), p.enqueue({
                  type: "response-metadata",
                  id: (C = w.message.id) != null ? C : void 0,
                  modelId: (I = w.message.model) != null ? I : void 0
                });
                return;
              }
              case "message_delta": {
                d.completionTokens = w.usage.output_tokens, c = ta(w.delta.stop_reason);
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
                p.enqueue({ type: "error", error: w.error });
                return;
              }
              default: {
                const R = w;
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
}, Td = l.object({
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
}), Sd = l.discriminatedUnion("type", [
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
]), Cd = l.object({
  command: l.string(),
  restart: l.boolean().optional()
});
function Id(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20241022",
    args: {},
    parameters: Cd,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Ed = l.object({
  command: l.enum(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: l.string(),
  file_text: l.string().optional(),
  insert_line: l.number().int().optional(),
  new_str: l.string().optional(),
  old_str: l.string().optional(),
  view_range: l.array(l.number().int()).optional()
});
function Nd(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20241022",
    args: {},
    parameters: Ed,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Rd = l.object({
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
function Pd(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20241022",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Rd,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var jd = {
  bash_20241022: Id,
  textEditor_20241022: Nd,
  computer_20241022: Pd
};
function Od(e = {}) {
  var t;
  const r = (t = cn(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", n = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": ln({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), a = (o, i = {}) => new kd(o, i, {
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
    throw new vo({ modelId: o, modelType: "textEmbeddingModel" });
  }, s.tools = jd, s;
}
Od();
function Ad(e) {
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
                  image_url: o.image instanceof URL ? o.image.toString() : `data:${(i = o.mimeType) != null ? i : "image/jpeg"};base64,${gt(o.image)}`
                };
              case "file":
                throw new V({
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
function ra(e) {
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
var Md = l.object({
  object: l.literal("error"),
  message: l.string(),
  type: l.string(),
  param: l.string().nullable(),
  code: l.string().nullable()
}), an = un({
  errorSchema: Md,
  errorToMessage: (e) => e.message
});
function na({
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
function $d(e) {
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
      throw new V({
        functionality: `Unsupported tool choice type: ${i}`
      });
    }
  }
}
var Zd = class {
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
    const b = {
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
      messages: Ad(t)
    };
    switch (f) {
      case "regular": {
        const { tools: v, tool_choice: p, toolWarnings: y } = $d(e);
        return {
          args: { ...b, tools: v, tool_choice: p },
          warnings: [...g, ...y]
        };
      }
      case "object-json":
        return {
          args: {
            ...b,
            response_format: { type: "json_object" }
          },
          warnings: g
        };
      case "object-tool":
        return {
          args: {
            ...b,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: g
        };
      default: {
        const v = f;
        throw new Error(`Unsupported type: ${v}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r;
    const { args: n, warnings: a } = this.getArgs(e), { responseHeaders: s, value: o } = await me({
      url: `${this.config.baseURL}/chat/completions`,
      headers: xe(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: an,
      successfulResponseHandler: Ge(
        Dd
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
      finishReason: ra(c.finish_reason),
      usage: {
        promptTokens: o.usage.prompt_tokens,
        completionTokens: o.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: u },
      rawResponse: { headers: s },
      request: { body: JSON.stringify(n) },
      response: na(o),
      warnings: a
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = { ...t, stream: !0 }, { responseHeaders: a, value: s } = await me({
      url: `${this.config.baseURL}/chat/completions`,
      headers: xe(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: an,
      successfulResponseHandler: Cr(
        Ud
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
          transform(g, b) {
            if (!g.success) {
              b.enqueue({ type: "error", error: g.error });
              return;
            }
            d++;
            const v = g.value;
            d === 1 && b.enqueue({
              type: "response-metadata",
              ...na(v)
            }), v.usage != null && (c = {
              promptTokens: v.usage.prompt_tokens,
              completionTokens: v.usage.completion_tokens
            });
            const p = v.choices[0];
            if ((p == null ? void 0 : p.finish_reason) != null && (u = ra(p.finish_reason)), (p == null ? void 0 : p.delta) == null)
              return;
            const y = p.delta;
            if (d <= 2) {
              const _ = o[o.length - 1];
              if (_.role === "assistant" && y.content === _.content.trimEnd()) {
                y.content.length < _.content.length && (f = !0);
                return;
              }
            }
            if (y.content != null && (b.enqueue({
              type: "text-delta",
              textDelta: f ? y.content.trimStart() : y.content
            }), f = !1), y.tool_calls != null)
              for (const _ of y.tool_calls)
                b.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: _.id,
                  toolName: _.function.name,
                  argsTextDelta: _.function.arguments
                }), b.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: _.id,
                  toolName: _.function.name,
                  args: _.function.arguments
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
}, Dd = l.object({
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
}), Ud = l.object({
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
}), Ld = class {
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
      throw new $a({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await me({
      url: `${this.config.baseURL}/embeddings`,
      headers: xe(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: an,
      successfulResponseHandler: Ge(
        qd
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
}, qd = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
});
function Bd(e = {}) {
  var t;
  const r = (t = cn(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", n = () => ({
    Authorization: `Bearer ${ln({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (i, u = {}) => new Zd(i, u, {
    provider: "mistral.chat",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = (i, u = {}) => new Ld(i, u, {
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
Bd();
function Vd({
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
                    url: s.image instanceof URL ? s.image.toString() : `data:${(o = s.mimeType) != null ? o : "image/jpeg"};base64,${gt(s.image)}`,
                    // OpenAI specific extension: image detail
                    detail: (u = (i = s.providerMetadata) == null ? void 0 : i.openai) == null ? void 0 : u.imageDetail
                  }
                };
              case "file": {
                if (s.data instanceof URL)
                  throw new V({
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
                    throw new V({
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
            throw new V({
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
function aa(e) {
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
function xr(e) {
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
var wn = l.object({
  error: l.object({
    message: l.string(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l.string().nullish(),
    param: l.any().nullish(),
    code: l.union([l.string(), l.number()]).nullish()
  })
}), lt = un({
  errorSchema: wn,
  errorToMessage: (e) => e.error.message
});
function kr({
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
function zd({
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
        throw new V({
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
      throw new V({
        functionality: `Unsupported tool choice type: ${c}`
      });
    }
  }
}
var Hd = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get supportsStructuredOutputs() {
    var e;
    return (e = this.settings.structuredOutputs) != null ? e : !1;
  }
  get defaultObjectGenerationMode() {
    return Gd(this.modelId) ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
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
    var g, b, v, p, y, _, C, I;
    const w = e.type, R = [];
    s != null && R.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (c == null ? void 0 : c.type) === "json" && c.schema != null && !this.supportsStructuredOutputs && R.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const E = this.settings.useLegacyFunctionCalling;
    if (E && this.settings.parallelToolCalls === !0)
      throw new V({
        functionality: "useLegacyFunctionCalling with parallelToolCalls"
      });
    if (E && this.supportsStructuredOutputs)
      throw new V({
        functionality: "structuredOutputs with useLegacyFunctionCalling"
      });
    const D = {
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
      max_completion_tokens: (b = f == null ? void 0 : f.openai) == null ? void 0 : b.maxCompletionTokens,
      store: (v = f == null ? void 0 : f.openai) == null ? void 0 : v.store,
      metadata: (p = f == null ? void 0 : f.openai) == null ? void 0 : p.metadata,
      prediction: (y = f == null ? void 0 : f.openai) == null ? void 0 : y.prediction,
      reasoning_effort: (C = (_ = f == null ? void 0 : f.openai) == null ? void 0 : _.reasoningEffort) != null ? C : this.settings.reasoningEffort,
      // messages:
      messages: Vd({
        prompt: t,
        useLegacyFunctionCalling: E
      })
    };
    switch (Wd(this.modelId) && (D.temperature = void 0, D.top_p = void 0, D.frequency_penalty = void 0, D.presence_penalty = void 0), w) {
      case "regular": {
        const { tools: B, tool_choice: z, functions: Y, function_call: J, toolWarnings: W } = zd({
          mode: e,
          useLegacyFunctionCalling: E,
          structuredOutputs: this.supportsStructuredOutputs
        });
        return {
          args: {
            ...D,
            tools: B,
            tool_choice: z,
            functions: Y,
            function_call: J
          },
          warnings: [...R, ...W]
        };
      }
      case "object-json":
        return {
          args: {
            ...D,
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
          warnings: R
        };
      case "object-tool":
        return {
          args: E ? {
            ...D,
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
            ...D,
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
          warnings: R
        };
      default: {
        const B = w;
        throw new Error(`Unsupported type: ${B}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o, i, u, c, d, f, g, b, v, p, y, _, C;
    const { args: I, warnings: w } = this.getArgs(e), { responseHeaders: R, value: E } = await me({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: xe(this.config.headers(), e.headers),
      body: I,
      failedResponseHandler: lt,
      successfulResponseHandler: Ge(
        Fd
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: D, ...B } = I, z = E.choices[0];
    let Y;
    return (((r = (t = E.usage) == null ? void 0 : t.completion_tokens_details) == null ? void 0 : r.reasoning_tokens) != null || ((a = (n = E.usage) == null ? void 0 : n.prompt_tokens_details) == null ? void 0 : a.cached_tokens) != null) && (Y = { openai: {} }, ((o = (s = E.usage) == null ? void 0 : s.completion_tokens_details) == null ? void 0 : o.reasoning_tokens) != null && (Y.openai.reasoningTokens = (u = (i = E.usage) == null ? void 0 : i.completion_tokens_details) == null ? void 0 : u.reasoning_tokens), ((d = (c = E.usage) == null ? void 0 : c.prompt_tokens_details) == null ? void 0 : d.cached_tokens) != null && (Y.openai.cachedPromptTokens = (g = (f = E.usage) == null ? void 0 : f.prompt_tokens_details) == null ? void 0 : g.cached_tokens)), {
      text: (b = z.message.content) != null ? b : void 0,
      toolCalls: this.settings.useLegacyFunctionCalling && z.message.function_call ? [
        {
          toolCallType: "function",
          toolCallId: et(),
          toolName: z.message.function_call.name,
          args: z.message.function_call.arguments
        }
      ] : (v = z.message.tool_calls) == null ? void 0 : v.map((J) => {
        var W;
        return {
          toolCallType: "function",
          toolCallId: (W = J.id) != null ? W : et(),
          toolName: J.function.name,
          args: J.function.arguments
        };
      }),
      finishReason: xr(z.finish_reason),
      usage: {
        promptTokens: (y = (p = E.usage) == null ? void 0 : p.prompt_tokens) != null ? y : NaN,
        completionTokens: (C = (_ = E.usage) == null ? void 0 : _.completion_tokens) != null ? C : NaN
      },
      rawCall: { rawPrompt: D, rawSettings: B },
      rawResponse: { headers: R },
      request: { body: JSON.stringify(I) },
      response: kr(E),
      warnings: w,
      logprobs: aa(z.logprobs),
      providerMetadata: Y
    };
  }
  async doStream(e) {
    if (this.settings.simulateStreaming) {
      const p = await this.doGenerate(e);
      return {
        stream: new ReadableStream({
          start(_) {
            if (_.enqueue({ type: "response-metadata", ...p.response }), p.text && _.enqueue({
              type: "text-delta",
              textDelta: p.text
            }), p.toolCalls)
              for (const C of p.toolCalls)
                _.enqueue({
                  type: "tool-call",
                  ...C
                });
            _.enqueue({
              type: "finish",
              finishReason: p.finishReason,
              usage: p.usage,
              logprobs: p.logprobs,
              providerMetadata: p.providerMetadata
            }), _.close();
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
    }, { responseHeaders: a, value: s } = await me({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: xe(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: lt,
      successfulResponseHandler: Cr(
        Jd
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t, u = [];
    let c = "unknown", d = {
      promptTokens: void 0,
      completionTokens: void 0
    }, f, g = !0;
    const { useLegacyFunctionCalling: b } = this.settings;
    let v;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(p, y) {
            var _, C, I, w, R, E, D, B, z, Y, J, W, Re, Ye;
            if (!p.success) {
              c = "error", y.enqueue({ type: "error", error: p.error });
              return;
            }
            const ne = p.value;
            if ("error" in ne) {
              c = "error", y.enqueue({ type: "error", error: ne.error });
              return;
            }
            if (g && (g = !1, y.enqueue({
              type: "response-metadata",
              ...kr(ne)
            })), ne.usage != null) {
              d = {
                promptTokens: (_ = ne.usage.prompt_tokens) != null ? _ : void 0,
                completionTokens: (C = ne.usage.completion_tokens) != null ? C : void 0
              };
              const {
                completion_tokens_details: U,
                prompt_tokens_details: Q
              } = ne.usage;
              ((U == null ? void 0 : U.reasoning_tokens) != null || (Q == null ? void 0 : Q.cached_tokens) != null) && (v = { openai: {} }, (U == null ? void 0 : U.reasoning_tokens) != null && (v.openai.reasoningTokens = U == null ? void 0 : U.reasoning_tokens), (Q == null ? void 0 : Q.cached_tokens) != null && (v.openai.cachedPromptTokens = Q == null ? void 0 : Q.cached_tokens));
            }
            const ie = ne.choices[0];
            if ((ie == null ? void 0 : ie.finish_reason) != null && (c = xr(ie.finish_reason)), (ie == null ? void 0 : ie.delta) == null)
              return;
            const ae = ie.delta;
            ae.content != null && y.enqueue({
              type: "text-delta",
              textDelta: ae.content
            });
            const De = aa(
              ie == null ? void 0 : ie.logprobs
            );
            De != null && De.length && (f === void 0 && (f = []), f.push(...De));
            const er = b && ae.function_call != null ? [
              {
                type: "function",
                id: et(),
                function: ae.function_call,
                index: 0
              }
            ] : ae.tool_calls;
            if (er != null)
              for (const U of er) {
                const Q = U.index;
                if (u[Q] == null) {
                  if (U.type !== "function")
                    throw new Zr({
                      data: U,
                      message: "Expected 'function' type."
                    });
                  if (U.id == null)
                    throw new Zr({
                      data: U,
                      message: "Expected 'id' to be a string."
                    });
                  if (((I = U.function) == null ? void 0 : I.name) == null)
                    throw new Zr({
                      data: U,
                      message: "Expected 'function.name' to be a string."
                    });
                  u[Q] = {
                    id: U.id,
                    type: "function",
                    function: {
                      name: U.function.name,
                      arguments: (w = U.function.arguments) != null ? w : ""
                    },
                    hasFinished: !1
                  };
                  const G = u[Q];
                  ((R = G.function) == null ? void 0 : R.name) != null && ((E = G.function) == null ? void 0 : E.arguments) != null && (G.function.arguments.length > 0 && y.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: G.id,
                    toolName: G.function.name,
                    argsTextDelta: G.function.arguments
                  }), $n(G.function.arguments) && (y.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (D = G.id) != null ? D : et(),
                    toolName: G.function.name,
                    args: G.function.arguments
                  }), G.hasFinished = !0));
                  continue;
                }
                const ee = u[Q];
                ee.hasFinished || (((B = U.function) == null ? void 0 : B.arguments) != null && (ee.function.arguments += (Y = (z = U.function) == null ? void 0 : z.arguments) != null ? Y : ""), y.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: ee.id,
                  toolName: ee.function.name,
                  argsTextDelta: (J = U.function.arguments) != null ? J : ""
                }), ((W = ee.function) == null ? void 0 : W.name) != null && ((Re = ee.function) == null ? void 0 : Re.arguments) != null && $n(ee.function.arguments) && (y.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (Ye = ee.id) != null ? Ye : et(),
                  toolName: ee.function.name,
                  args: ee.function.arguments
                }), ee.hasFinished = !0));
              }
          },
          flush(p) {
            var y, _;
            p.enqueue({
              type: "finish",
              finishReason: c,
              logprobs: f,
              usage: {
                promptTokens: (y = d.promptTokens) != null ? y : NaN,
                completionTokens: (_ = d.completionTokens) != null ? _ : NaN
              },
              ...v != null ? { providerMetadata: v } : {}
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
}, Xs = l.object({
  prompt_tokens: l.number().nullish(),
  completion_tokens: l.number().nullish(),
  prompt_tokens_details: l.object({
    cached_tokens: l.number().nullish()
  }).nullish(),
  completion_tokens_details: l.object({
    reasoning_tokens: l.number().nullish()
  }).nullish()
}).nullish(), Fd = l.object({
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
  usage: Xs
}), Jd = l.union([
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
    usage: Xs
  }),
  wn
]);
function Wd(e) {
  return e === "o1" || e.startsWith("o1-");
}
function Gd(e) {
  return e.startsWith("gpt-4o-audio-preview");
}
function Kd({
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
        const i = o.map((u) => {
          switch (u.type) {
            case "text":
              return u.text;
            case "image":
              throw new V({
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
              throw new V({
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
        throw new V({
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
function sa(e) {
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
var Yd = class {
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
    const b = e.type, v = [];
    o != null && v.push({
      type: "unsupported-setting",
      setting: "topK"
    }), d != null && d.type !== "text" && v.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: p, stopSequences: y } = Kd({ prompt: r, inputFormat: t }), _ = [...y ?? [], ...c ?? []], C = {
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
      stop: _.length > 0 ? _ : void 0
    };
    switch (b) {
      case "regular": {
        if ((g = e.tools) != null && g.length)
          throw new V({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new V({
            functionality: "toolChoice"
          });
        return { args: C, warnings: v };
      }
      case "object-json":
        throw new V({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new V({
          functionality: "object-tool mode"
        });
      default: {
        const I = b;
        throw new Error(`Unsupported type: ${I}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await me({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: xe(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: lt,
      successfulResponseHandler: Ge(
        Xd
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
      finishReason: xr(i.finish_reason),
      logprobs: sa(i.logprobs),
      rawCall: { rawPrompt: s, rawSettings: o },
      rawResponse: { headers: n },
      response: kr(a),
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
    }, { responseHeaders: a, value: s } = await me({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: xe(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: lt,
      successfulResponseHandler: Cr(
        Qd
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
          transform(g, b) {
            if (!g.success) {
              u = "error", b.enqueue({ type: "error", error: g.error });
              return;
            }
            const v = g.value;
            if ("error" in v) {
              u = "error", b.enqueue({ type: "error", error: v.error });
              return;
            }
            f && (f = !1, b.enqueue({
              type: "response-metadata",
              ...kr(v)
            })), v.usage != null && (c = {
              promptTokens: v.usage.prompt_tokens,
              completionTokens: v.usage.completion_tokens
            });
            const p = v.choices[0];
            (p == null ? void 0 : p.finish_reason) != null && (u = xr(p.finish_reason)), (p == null ? void 0 : p.text) != null && b.enqueue({
              type: "text-delta",
              textDelta: p.text
            });
            const y = sa(
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
}, Xd = l.object({
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
}), Qd = l.union([
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
  wn
]), ep = class {
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
      throw new $a({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await me({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: xe(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: lt,
      successfulResponseHandler: Ge(
        tp
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
}, tp = l.object({
  data: l.array(l.object({ embedding: l.array(l.number()) })),
  usage: l.object({ prompt_tokens: l.number() }).nullish()
}), rp = class {
  constructor(e, t) {
    this.specificationVersion = "v1", this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: r,
    providerOptions: n,
    headers: a,
    abortSignal: s
  }) {
    var o;
    const { value: i } = await me({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: xe(this.config.headers(), a),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: r,
        ...(o = n.openai) != null ? o : {},
        response_format: "b64_json"
      },
      failedResponseHandler: lt,
      successfulResponseHandler: Ge(
        np
      ),
      abortSignal: s,
      fetch: this.config.fetch
    });
    return {
      images: i.data.map((u) => u.b64_json)
    };
  }
}, np = l.object({
  data: l.array(l.object({ b64_json: l.string() }))
});
function ap(e = {}) {
  var t, r, n;
  const a = (t = cn(e.baseURL)) != null ? t : "https://api.openai.com/v1", s = (r = e.compatibility) != null ? r : "compatible", o = (n = e.name) != null ? n : "openai", i = () => ({
    Authorization: `Bearer ${ln({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), u = (v, p = {}) => new Hd(v, p, {
    provider: `${o}.chat`,
    url: ({ path: y }) => `${a}${y}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), c = (v, p = {}) => new Yd(v, p, {
    provider: `${o}.completion`,
    url: ({ path: y }) => `${a}${y}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), d = (v, p = {}) => new ep(v, p, {
    provider: `${o}.embedding`,
    url: ({ path: y }) => `${a}${y}`,
    headers: i,
    fetch: e.fetch
  }), f = (v) => new rp(v, {
    provider: `${o}.image`,
    url: ({ path: p }) => `${a}${p}`,
    headers: i,
    fetch: e.fetch
  }), g = (v, p) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return v === "gpt-3.5-turbo-instruct" ? c(
      v,
      p
    ) : u(v, p);
  }, b = function(v, p) {
    return g(v, p);
  };
  return b.languageModel = g, b.chat = u, b.completion = c, b.embedding = d, b.textEmbedding = d, b.textEmbeddingModel = d, b.image = f, b;
}
ap({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  N as AISDKError,
  Od as createAnthropic,
  Bd as createMistral,
  ap as createOpenAI,
  op as streamText
};
