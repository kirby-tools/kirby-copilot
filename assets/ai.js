var as = "vercel.ai.error", $i = Symbol.for(as), ss, Di = class os extends Error {
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
    super(r), this[ss] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return os.hasMarker(t, as);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
ss = $i;
var j = Di, is = "AI_APICallError", ls = `vercel.ai.error.${is}`, qi = Symbol.for(ls), us, Be = class extends j {
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
    data: l
  }) {
    super({ name: is, message: e, cause: o }), this[us] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = s, this.isRetryable = i, this.data = l;
  }
  static isInstance(e) {
    return j.hasMarker(e, ls);
  }
};
us = qi;
var cs = "AI_EmptyResponseBodyError", ds = `vercel.ai.error.${cs}`, Ui = Symbol.for(ds), ps, Li = class extends j {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: cs, message: e }), this[ps] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, ds);
  }
};
ps = Ui;
function Rr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var ms = "AI_InvalidArgumentError", fs = `vercel.ai.error.${ms}`, Fi = Symbol.for(fs), hs, Kn = class extends j {
  constructor({
    message: t,
    cause: r,
    argument: n
  }) {
    super({ name: ms, message: t, cause: r }), this[hs] = !0, this.argument = n;
  }
  static isInstance(t) {
    return j.hasMarker(t, fs);
  }
};
hs = Fi;
var gs = "AI_InvalidPromptError", ys = `vercel.ai.error.${gs}`, Zi = Symbol.for(ys), vs, ut = class extends j {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: gs, message: `Invalid prompt: ${t}`, cause: r }), this[vs] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ys);
  }
};
vs = Zi;
var _s = "AI_InvalidResponseDataError", bs = `vercel.ai.error.${_s}`, Vi = Symbol.for(bs), ws, xn = class extends j {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: _s, message: t }), this[ws] = !0, this.data = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, bs);
  }
};
ws = Vi;
var xs = "AI_JSONParseError", ks = `vercel.ai.error.${xs}`, Bi = Symbol.for(ks), Ts, mr = class extends j {
  constructor({ text: e, cause: t }) {
    super({
      name: xs,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Rr(t)}`,
      cause: t
    }), this[Ts] = !0, this.text = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ks);
  }
};
Ts = Bi;
var Ss = "AI_LoadAPIKeyError", Is = `vercel.ai.error.${Ss}`, Ji = Symbol.for(Is), Cs, Dr = class extends j {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Ss, message: e }), this[Cs] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Is);
  }
};
Cs = Ji;
var Rs = "AI_NoContentGeneratedError", Es = `vercel.ai.error.${Rs}`, zi = Symbol.for(Es), As, lh = class extends j {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: Rs, message: e }), this[As] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Es);
  }
};
As = zi;
var Ns = "AI_NoSuchModelError", Ps = `vercel.ai.error.${Ns}`, Gi = Symbol.for(Ps), Os, pt = class extends j {
  constructor({
    errorName: e = Ns,
    modelId: t,
    modelType: r,
    message: n = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: n }), this[Os] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ps);
  }
};
Os = Gi;
var Ms = "AI_TooManyEmbeddingValuesForCallError", js = `vercel.ai.error.${Ms}`, Hi = Symbol.for(js), $s, Ds = class extends j {
  constructor(e) {
    super({
      name: Ms,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[$s] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return j.hasMarker(e, js);
  }
};
$s = Hi;
var qs = "AI_TypeValidationError", Us = `vercel.ai.error.${qs}`, Wi = Symbol.for(Us), Ls, Ki = class Mn extends j {
  constructor({ value: t, cause: r }) {
    super({
      name: qs,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Rr(r)}`,
      cause: r
    }), this[Ls] = !0, this.value = t;
  }
  static isInstance(t) {
    return j.hasMarker(t, Us);
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
    return Mn.isInstance(r) && r.value === t ? r : new Mn({ value: t, cause: r });
  }
};
Ls = Wi;
var ft = Ki, Fs = "AI_UnsupportedFunctionalityError", Zs = `vercel.ai.error.${Fs}`, Yi = Symbol.for(Zs), Vs, se = class extends j {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: Fs, message: t }), this[Vs] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Zs);
  }
};
Vs = Yi;
function Lr(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? !0 : Array.isArray(e) ? e.every(Lr) : typeof e == "object" ? Object.entries(e).every(
    ([t, r]) => typeof t == "string" && Lr(r)
  ) : !1;
}
function xa(e) {
  return Array.isArray(e) && e.every(Lr);
}
function jn(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, r]) => typeof t == "string" && Lr(r)
  );
}
let Xi = (e, t = 21) => (r = t) => {
  let n = "", a = r | 0;
  for (; a--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function Qi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var er = { exports: {} };
const el = typeof Buffer < "u", ka = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, Ta = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Bs(e, t, r) {
  r == null && t !== null && typeof t == "object" && (r = t, t = void 0), el && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, t);
  if (n === null || typeof n != "object")
    return n;
  const a = r && r.protoAction || "error", s = r && r.constructorAction || "error";
  if (a === "ignore" && s === "ignore")
    return n;
  if (a !== "ignore" && s !== "ignore") {
    if (ka.test(e) === !1 && Ta.test(e) === !1)
      return n;
  } else if (a !== "ignore" && s === "ignore") {
    if (ka.test(e) === !1)
      return n;
  } else if (Ta.test(e) === !1)
    return n;
  return Js(n, { protoAction: a, constructorAction: s, safe: r && r.safe });
}
function Js(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
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
        const l = o[i];
        l && typeof l == "object" && a.push(l);
      }
    }
  }
  return e;
}
function Yn(e, t, r) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Bs(e, t, r);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function tl(e, t) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Bs(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = r;
  }
}
er.exports = Yn;
er.exports.default = Yn;
er.exports.parse = Yn;
er.exports.safeParse = tl;
er.exports.scan = Js;
var rl = er.exports;
const Xn = /* @__PURE__ */ Qi(rl);
function Le(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
function nl(e) {
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
async function Qn(e) {
  return e == null ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
function zs() {
  let e = "", t, r = [], n, a;
  function s(l, u) {
    if (l === "") {
      o(u);
      return;
    }
    if (l.startsWith(":"))
      return;
    const c = l.indexOf(":");
    if (c === -1) {
      i(l, "");
      return;
    }
    const d = l.slice(0, c), m = c + 1, _ = m < l.length && l[m] === " " ? l.slice(m + 1) : l.slice(m);
    i(d, _);
  }
  function o(l) {
    r.length > 0 && (l.enqueue({
      event: t,
      data: r.join(`
`),
      id: n,
      retry: a
    }), r = [], t = void 0, a = void 0);
  }
  function i(l, u) {
    switch (l) {
      case "event":
        t = u;
        break;
      case "data":
        r.push(u);
        break;
      case "id":
        n = u;
        break;
      case "retry":
        const c = parseInt(u, 10);
        isNaN(c) || (a = c);
        break;
    }
  }
  return new TransformStream({
    transform(l, u) {
      const { lines: c, incompleteLine: d } = al(e, l);
      e = d;
      for (let m = 0; m < c.length; m++)
        s(c[m], u);
    },
    flush(l) {
      s(e, l), o(l);
    }
  });
}
function al(e, t) {
  const r = [];
  let n = e;
  for (let a = 0; a < t.length; ) {
    const s = t[a++];
    s === `
` ? (r.push(n), n = "") : s === "\r" ? (r.push(n), n = "", t[a] === `
` && a++) : n += s;
  }
  return { lines: r, incompleteLine: n };
}
function Er(e) {
  const t = {};
  return e.headers.forEach((r, n) => {
    t[n] = r;
  }), t;
}
var Ft = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const a = Xi(r, t);
  if (e == null)
    return a;
  if (r.includes(n))
    throw new Kn({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (s) => `${e}${n}${a(s)}`;
}, kt = Ft();
function sl(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function ol(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
function Ur(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function ea({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new Dr({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new Dr({
      message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new Dr({
      message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new Dr({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var Fr = Symbol.for("vercel.ai.validator");
function il(e) {
  return { [Fr]: !0, validate: e };
}
function ll(e) {
  return typeof e == "object" && e !== null && Fr in e && e[Fr] === !0 && "validate" in e;
}
function ul(e) {
  return ll(e) ? e : cl(e);
}
function cl(e) {
  return il((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function dl({
  value: e,
  schema: t
}) {
  const r = ht({ value: e, schema: t });
  if (!r.success)
    throw ft.wrap({ value: e, cause: r.error });
  return r.value;
}
function ht({
  value: e,
  schema: t
}) {
  const r = ul(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: ft.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: ft.wrap({ value: e, cause: n })
    };
  }
}
function pl({
  text: e,
  schema: t
}) {
  try {
    const r = Xn.parse(e);
    return t == null ? r : dl({ value: r, schema: t });
  } catch (r) {
    throw mr.isInstance(r) || ft.isInstance(r) ? r : new mr({ text: e, cause: r });
  }
}
function Ot({
  text: e,
  schema: t
}) {
  try {
    const r = Xn.parse(e);
    if (t == null)
      return { success: !0, value: r, rawValue: r };
    const n = ht({ value: r, schema: t });
    return n.success ? { ...n, rawValue: r } : n;
  } catch (r) {
    return {
      success: !1,
      error: mr.isInstance(r) ? r : new mr({ text: e, cause: r })
    };
  }
}
function Sa(e) {
  try {
    return Xn.parse(e), !0;
  } catch {
    return !1;
  }
}
function un({
  provider: e,
  providerOptions: t,
  schema: r
}) {
  if ((t == null ? void 0 : t[e]) == null)
    return;
  const n = ht({
    value: t[e],
    schema: r
  });
  if (!n.success)
    throw new Kn({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: n.error
    });
  return n.value;
}
var ml = () => globalThis.fetch, Fe = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => Gs({
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
}), fl = async ({
  url: e,
  headers: t,
  formData: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}) => Gs({
  url: e,
  headers: t,
  body: {
    content: r,
    values: Object.fromEntries(r.entries())
  },
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: s,
  fetch: o
}), Gs = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: s,
  fetch: o = ml()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: ol(t),
      body: r.content,
      signal: s
    }), l = Er(i);
    if (!i.ok) {
      let u;
      try {
        u = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (c) {
        throw Ur(c) || Be.isInstance(c) ? c : new Be({
          message: "Failed to process error response",
          cause: c,
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
      throw u instanceof Error && (Ur(u) || Be.isInstance(u)) ? u : new Be({
        message: "Failed to process successful response",
        cause: u,
        statusCode: i.status,
        url: e,
        responseHeaders: l,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    if (Ur(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const l = i.cause;
      if (l != null)
        throw new Be({
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
};
async function hl(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var ta = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: s }) => {
  const o = await n.text(), i = Er(n);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new Be({
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
    const l = pl({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new Be({
        message: t(l),
        url: a,
        requestBodyValues: s,
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
      value: new Be({
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
}, Ar = (e) => async ({ response: t }) => {
  const r = Er(t);
  if (t.body == null)
    throw new Li({});
  return {
    responseHeaders: r,
    value: t.body.pipeThrough(new TextDecoderStream()).pipeThrough(zs()).pipeThrough(
      new TransformStream({
        transform({ data: n }, a) {
          n !== "[DONE]" && a.enqueue(
            Ot({
              text: n,
              schema: e
            })
          );
        }
      })
    )
  };
}, vt = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), s = Ot({
    text: a,
    schema: e
  }), o = Er(t);
  if (!s.success)
    throw new Be({
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
}, gl = () => async ({ response: e, url: t, requestBodyValues: r }) => {
  const n = Er(e);
  if (!e.body)
    throw new Be({
      message: "Response body is empty",
      url: t,
      requestBodyValues: r,
      statusCode: e.status,
      responseHeaders: n,
      responseBody: void 0
    });
  try {
    const a = await e.arrayBuffer();
    return {
      responseHeaders: n,
      value: new Uint8Array(a)
    };
  } catch (a) {
    throw new Be({
      message: "Failed to read response as array buffer",
      url: t,
      requestBodyValues: r,
      statusCode: e.status,
      responseHeaders: n,
      responseBody: void 0,
      cause: a
    });
  }
}, { btoa: yl, atob: vl } = globalThis;
function cn(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = vl(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function Mt(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return yl(t);
}
function ra(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
const _l = Symbol("Let zodToJsonSchema decide on which parser to use"), Ia = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: !0,
  rejectedAdditionalProperties: !1,
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
}, bl = (e) => typeof e == "string" ? {
  ...Ia,
  name: e
} : {
  ...Ia,
  ...e
}, wl = (e) => {
  const t = bl(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function Hs(e, t, r, n) {
  n != null && n.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function ae(e, t, r, n, a) {
  e[t] = r, Hs(e, t, n, a);
}
var K;
(function(e) {
  e.assertEqual = (a) => {
  };
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
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a;
  function n(a, s = " | ") {
    return a.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (a, s) => typeof s == "bigint" ? s.toString() : s;
})(K || (K = {}));
var Ca;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ca || (Ca = {}));
const O = K.arrayToEnum([
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
]), xt = (e) => {
  switch (typeof e) {
    case "undefined":
      return O.undefined;
    case "string":
      return O.string;
    case "number":
      return Number.isNaN(e) ? O.nan : O.number;
    case "boolean":
      return O.boolean;
    case "function":
      return O.function;
    case "bigint":
      return O.bigint;
    case "symbol":
      return O.symbol;
    case "object":
      return Array.isArray(e) ? O.array : e === null ? O.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? O.promise : typeof Map < "u" && e instanceof Map ? O.map : typeof Set < "u" && e instanceof Set ? O.set : typeof Date < "u" && e instanceof Date ? O.date : O.object;
    default:
      return O.unknown;
  }
}, I = K.arrayToEnum([
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
]);
class gt extends Error {
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
          let i = n, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], l++;
          }
        }
    };
    return a(this), n;
  }
  static assert(t) {
    if (!(t instanceof gt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, K.jsonStringifyReplacer, 2);
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
gt.create = (e) => new gt(e);
const $n = (e, t) => {
  let r;
  switch (e.code) {
    case I.invalid_type:
      e.received === O.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case I.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, K.jsonStringifyReplacer)}`;
      break;
    case I.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${K.joinValues(e.keys, ", ")}`;
      break;
    case I.invalid_union:
      r = "Invalid input";
      break;
    case I.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${K.joinValues(e.options)}`;
      break;
    case I.invalid_enum_value:
      r = `Invalid enum value. Expected ${K.joinValues(e.options)}, received '${e.received}'`;
      break;
    case I.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case I.invalid_return_type:
      r = "Invalid function return type";
      break;
    case I.invalid_date:
      r = "Invalid date";
      break;
    case I.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : K.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case I.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case I.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case I.custom:
      r = "Invalid input";
      break;
    case I.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case I.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case I.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, K.assertNever(e);
  }
  return { message: r };
};
let xl = $n;
function kl() {
  return xl;
}
const Tl = (e) => {
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
  const l = n.filter((u) => !!u).slice().reverse();
  for (const u of l)
    i = u(o, { data: t, defaultError: i }).message;
  return {
    ...a,
    path: s,
    message: i
  };
};
function N(e, t) {
  const r = kl(), n = Tl({
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
      r === $n ? void 0 : $n
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(n);
}
class De {
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
        return L;
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
    return De.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: s, value: o } = a;
      if (s.status === "aborted" || o.status === "aborted")
        return L;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const L = Object.freeze({
  status: "aborted"
}), dr = (e) => ({ status: "dirty", value: e }), ze = (e) => ({ status: "valid", value: e }), Ra = (e) => e.status === "aborted", Ea = (e) => e.status === "dirty", Ht = (e) => e.status === "valid", Zr = (e) => typeof Promise < "u" && e instanceof Promise;
var M;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(M || (M = {}));
class rt {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Aa = (e, t) => {
  if (Ht(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new gt(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function V(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: a } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (o, i) => {
    const { message: l } = e;
    return o.code === "invalid_enum_value" ? { message: l ?? i.defaultError } : typeof i.data > "u" ? { message: l ?? n ?? i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: l ?? r ?? i.defaultError };
  }, description: a };
}
class z {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return xt(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: xt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new De(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: xt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Zr(r))
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
    const n = {
      common: {
        issues: [],
        async: (r == null ? void 0 : r.async) ?? !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: xt(t)
    }, a = this._parseSync({ data: t, path: n.path, parent: n });
    return Aa(n, a);
  }
  "~validate"(t) {
    var n, a;
    const r = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: xt(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: r });
        return Ht(s) ? {
          value: s.value
        } : {
          issues: r.common.issues
        };
      } catch (s) {
        (a = (n = s == null ? void 0 : s.message) == null ? void 0 : n.toLowerCase()) != null && a.includes("encountered") && (this["~standard"].async = !0), r.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: r }).then((s) => Ht(s) ? {
      value: s.value
    } : {
      issues: r.common.issues
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
      parsedType: xt(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (Zr(a) ? a : Promise.resolve(a));
    return Aa(n, s);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, s) => {
      const o = t(a), i = () => s.addIssue({
        code: I.custom,
        ...n(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new Dt({
      schema: this,
      typeName: C.ZodEffects,
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
    return tt.create(this, this._def);
  }
  nullable() {
    return qt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return et.create(this);
  }
  promise() {
    return Kr.create(this, this._def);
  }
  or(t) {
    return Jr.create([this, t], this._def);
  }
  and(t) {
    return zr.create(this, t, this._def);
  }
  transform(t) {
    return new Dt({
      ...V(this._def),
      schema: this,
      typeName: C.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Yr({
      ...V(this._def),
      innerType: this,
      defaultValue: r,
      typeName: C.ZodDefault
    });
  }
  brand() {
    return new Xs({
      typeName: C.ZodBranded,
      type: this,
      ...V(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Xr({
      ...V(this._def),
      innerType: this,
      catchValue: r,
      typeName: C.ZodCatch
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
    return aa.create(this, t);
  }
  readonly() {
    return Qr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Sl = /^c[^\s-]{8,}$/i, Il = /^[0-9a-z]+$/, Cl = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Rl = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, El = /^[a-z0-9_-]{21}$/i, Al = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Nl = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Pl = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ol = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let kn;
const Ml = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, jl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, $l = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Dl = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ql = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ul = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ws = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Ll = new RegExp(`^${Ws}$`);
function Ks(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const r = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}
function Fl(e) {
  return new RegExp(`^${Ks(e)}$`);
}
function Zl(e) {
  let t = `${Ws}T${Ks(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function Vl(e, t) {
  return !!((t === "v4" || !t) && Ml.test(e) || (t === "v6" || !t) && $l.test(e));
}
function Bl(e, t) {
  if (!Al.test(e))
    return !1;
  try {
    const [r] = e.split("."), n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), a = JSON.parse(atob(n));
    return !(typeof a != "object" || a === null || "typ" in a && (a == null ? void 0 : a.typ) !== "JWT" || !a.alg || t && a.alg !== t);
  } catch {
    return !1;
  }
}
function Jl(e, t) {
  return !!((t === "v4" || !t) && jl.test(e) || (t === "v6" || !t) && Dl.test(e));
}
class mt extends z {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== O.string) {
      const s = this._getOrReturnCtx(t);
      return N(s, {
        code: I.invalid_type,
        expected: O.string,
        received: s.parsedType
      }), L;
    }
    const n = new De();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), N(a, {
          code: I.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), N(a, {
          code: I.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (a = this._getOrReturnCtx(t, a), o ? N(a, {
          code: I.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && N(a, {
          code: I.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Pl.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
          validation: "email",
          code: I.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        kn || (kn = new RegExp(Ol, "u")), kn.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
          validation: "emoji",
          code: I.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Rl.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
          validation: "uuid",
          code: I.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        El.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
          validation: "nanoid",
          code: I.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Sl.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
          validation: "cuid",
          code: I.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Il.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
          validation: "cuid2",
          code: I.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Cl.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
          validation: "ulid",
          code: I.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), N(a, {
            validation: "url",
            code: I.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
        validation: "regex",
        code: I.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Zl(s).test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Ll.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Fl(s).test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Nl.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
        validation: "duration",
        code: I.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Vl(t.data, s.version) || (a = this._getOrReturnCtx(t, a), N(a, {
        validation: "ip",
        code: I.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? Bl(t.data, s.alg) || (a = this._getOrReturnCtx(t, a), N(a, {
        validation: "jwt",
        code: I.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? Jl(t.data, s.version) || (a = this._getOrReturnCtx(t, a), N(a, {
        validation: "cidr",
        code: I.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? ql.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
        validation: "base64",
        code: I.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? Ul.test(t.data) || (a = this._getOrReturnCtx(t, a), N(a, {
        validation: "base64url",
        code: I.invalid_string,
        message: s.message
      }), n.dirty()) : K.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: I.invalid_string,
      ...M.errToObj(n)
    });
  }
  _addCheck(t) {
    return new mt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...M.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...M.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...M.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...M.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...M.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...M.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...M.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...M.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...M.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...M.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...M.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...M.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...M.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (t == null ? void 0 : t.offset) ?? !1,
      local: (t == null ? void 0 : t.local) ?? !1,
      ...M.errToObj(t == null ? void 0 : t.message)
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
      ...M.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...M.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...M.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...M.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...M.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...M.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...M.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...M.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...M.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, M.errToObj(t));
  }
  trim() {
    return new mt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new mt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new mt({
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
mt.create = (e) => new mt({
  checks: [],
  typeName: C.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...V(e)
});
function zl(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = Number.parseInt(e.toFixed(a).replace(".", "")), o = Number.parseInt(t.toFixed(a).replace(".", ""));
  return s % o / 10 ** a;
}
class Wt extends z {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== O.number) {
      const s = this._getOrReturnCtx(t);
      return N(s, {
        code: I.invalid_type,
        expected: O.number,
        received: s.parsedType
      }), L;
    }
    let n;
    const a = new De();
    for (const s of this._def.checks)
      s.kind === "int" ? K.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? zl(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.not_finite,
        message: s.message
      }), a.dirty()) : K.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, M.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, M.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, M.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, M.toString(r));
  }
  setLimit(t, r, n, a) {
    return new Wt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: M.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Wt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: M.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: M.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: M.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: M.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: M.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: M.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: M.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: M.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: M.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && K.isInteger(t.value));
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
Wt.create = (e) => new Wt({
  checks: [],
  typeName: C.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class fr extends z {
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
    if (this._getType(t) !== O.bigint)
      return this._getInvalidInput(t);
    let n;
    const a = new De();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), N(n, {
        code: I.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : K.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return N(r, {
      code: I.invalid_type,
      expected: O.bigint,
      received: r.parsedType
    }), L;
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, M.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, M.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, M.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, M.toString(r));
  }
  setLimit(t, r, n, a) {
    return new fr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: M.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new fr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: M.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: M.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: M.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: M.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: M.toString(r)
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
fr.create = (e) => new fr({
  checks: [],
  typeName: C.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...V(e)
});
class Dn extends z {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== O.boolean) {
      const n = this._getOrReturnCtx(t);
      return N(n, {
        code: I.invalid_type,
        expected: O.boolean,
        received: n.parsedType
      }), L;
    }
    return ze(t.data);
  }
}
Dn.create = (e) => new Dn({
  typeName: C.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class Vr extends z {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== O.date) {
      const s = this._getOrReturnCtx(t);
      return N(s, {
        code: I.invalid_type,
        expected: O.date,
        received: s.parsedType
      }), L;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return N(s, {
        code: I.invalid_date
      }), L;
    }
    const n = new De();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), N(a, {
        code: I.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : K.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Vr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: M.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: M.toString(r)
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
Vr.create = (e) => new Vr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: C.ZodDate,
  ...V(e)
});
class Na extends z {
  _parse(t) {
    if (this._getType(t) !== O.symbol) {
      const n = this._getOrReturnCtx(t);
      return N(n, {
        code: I.invalid_type,
        expected: O.symbol,
        received: n.parsedType
      }), L;
    }
    return ze(t.data);
  }
}
Na.create = (e) => new Na({
  typeName: C.ZodSymbol,
  ...V(e)
});
class qn extends z {
  _parse(t) {
    if (this._getType(t) !== O.undefined) {
      const n = this._getOrReturnCtx(t);
      return N(n, {
        code: I.invalid_type,
        expected: O.undefined,
        received: n.parsedType
      }), L;
    }
    return ze(t.data);
  }
}
qn.create = (e) => new qn({
  typeName: C.ZodUndefined,
  ...V(e)
});
class Br extends z {
  _parse(t) {
    if (this._getType(t) !== O.null) {
      const n = this._getOrReturnCtx(t);
      return N(n, {
        code: I.invalid_type,
        expected: O.null,
        received: n.parsedType
      }), L;
    }
    return ze(t.data);
  }
}
Br.create = (e) => new Br({
  typeName: C.ZodNull,
  ...V(e)
});
class hr extends z {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return ze(t.data);
  }
}
hr.create = (e) => new hr({
  typeName: C.ZodAny,
  ...V(e)
});
class Un extends z {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return ze(t.data);
  }
}
Un.create = (e) => new Un({
  typeName: C.ZodUnknown,
  ...V(e)
});
class St extends z {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return N(r, {
      code: I.invalid_type,
      expected: O.never,
      received: r.parsedType
    }), L;
  }
}
St.create = (e) => new St({
  typeName: C.ZodNever,
  ...V(e)
});
class Pa extends z {
  _parse(t) {
    if (this._getType(t) !== O.undefined) {
      const n = this._getOrReturnCtx(t);
      return N(n, {
        code: I.invalid_type,
        expected: O.void,
        received: n.parsedType
      }), L;
    }
    return ze(t.data);
  }
}
Pa.create = (e) => new Pa({
  typeName: C.ZodVoid,
  ...V(e)
});
class et extends z {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== O.array)
      return N(r, {
        code: I.invalid_type,
        expected: O.array,
        received: r.parsedType
      }), L;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, i = r.data.length < a.exactLength.value;
      (o || i) && (N(r, {
        code: o ? I.too_big : I.too_small,
        minimum: i ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (N(r, {
      code: I.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (N(r, {
      code: I.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => a.type._parseAsync(new rt(r, o, r.path, i)))).then((o) => De.mergeArray(n, o));
    const s = [...r.data].map((o, i) => a.type._parseSync(new rt(r, o, r.path, i)));
    return De.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new et({
      ...this._def,
      minLength: { value: t, message: M.toString(r) }
    });
  }
  max(t, r) {
    return new et({
      ...this._def,
      maxLength: { value: t, message: M.toString(r) }
    });
  }
  length(t, r) {
    return new et({
      ...this._def,
      exactLength: { value: t, message: M.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
et.create = (e, t) => new et({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: C.ZodArray,
  ...V(t)
});
function Gt(e) {
  if (e instanceof ke) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = tt.create(Gt(n));
    }
    return new ke({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof et ? new et({
    ...e._def,
    type: Gt(e.element)
  }) : e instanceof tt ? tt.create(Gt(e.unwrap())) : e instanceof qt ? qt.create(Gt(e.unwrap())) : e instanceof jt ? jt.create(e.items.map((t) => Gt(t))) : e;
}
class ke extends z {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = K.objectKeys(t);
    return this._cached = { shape: t, keys: r }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== O.object) {
      const u = this._getOrReturnCtx(t);
      return N(u, {
        code: I.invalid_type,
        expected: O.object,
        received: u.parsedType
      }), L;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof St && this._def.unknownKeys === "strip"))
      for (const u in a.data)
        o.includes(u) || i.push(u);
    const l = [];
    for (const u of o) {
      const c = s[u], d = a.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new rt(a, d, a.path, u)),
        alwaysSet: u in a.data
      });
    }
    if (this._def.catchall instanceof St) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of i)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: a.data[c] }
          });
      else if (u === "strict")
        i.length > 0 && (N(a, {
          code: I.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of i) {
        const d = a.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(
            new rt(a, d, a.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const c of l) {
        const d = await c.key, m = await c.value;
        u.push({
          key: d,
          value: m,
          alwaysSet: c.alwaysSet
        });
      }
      return u;
    }).then((u) => De.mergeObjectSync(n, u)) : De.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return M.errToObj, new ke({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var s, o;
          const a = ((o = (s = this._def).errorMap) == null ? void 0 : o.call(s, r, n).message) ?? n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: M.errToObj(t).message ?? a
          } : {
            message: a
          };
        }
      } : {}
    });
  }
  strip() {
    return new ke({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ke({
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
    return new ke({
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
    return new ke({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: C.ZodObject
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
    return new ke({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    for (const n of K.objectKeys(t))
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    for (const n of K.objectKeys(this.shape))
      t[n] || (r[n] = this.shape[n]);
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Gt(this);
  }
  partial(t) {
    const r = {};
    for (const n of K.objectKeys(this.shape)) {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    for (const n of K.objectKeys(this.shape))
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof tt; )
          s = s._def.innerType;
        r[n] = s;
      }
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ys(K.objectKeys(this.shape));
  }
}
ke.create = (e, t) => new ke({
  shape: () => e,
  unknownKeys: "strip",
  catchall: St.create(),
  typeName: C.ZodObject,
  ...V(t)
});
ke.strictCreate = (e, t) => new ke({
  shape: () => e,
  unknownKeys: "strict",
  catchall: St.create(),
  typeName: C.ZodObject,
  ...V(t)
});
ke.lazycreate = (e, t) => new ke({
  shape: e,
  unknownKeys: "strip",
  catchall: St.create(),
  typeName: C.ZodObject,
  ...V(t)
});
class Jr extends z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new gt(i.ctx.common.issues));
      return N(r, {
        code: I.invalid_union,
        unionErrors: o
      }), L;
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
      for (const l of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, c = l._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !s && (s = { result: c, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const i = o.map((l) => new gt(l));
      return N(r, {
        code: I.invalid_union,
        unionErrors: i
      }), L;
    }
  }
  get options() {
    return this._def.options;
  }
}
Jr.create = (e, t) => new Jr({
  options: e,
  typeName: C.ZodUnion,
  ...V(t)
});
const lt = (e) => e instanceof Hr ? lt(e.schema) : e instanceof Dt ? lt(e.innerType()) : e instanceof Wr ? [e.value] : e instanceof $t ? e.options : e instanceof Fn ? K.objectValues(e.enum) : e instanceof Yr ? lt(e._def.innerType) : e instanceof qn ? [void 0] : e instanceof Br ? [null] : e instanceof tt ? [void 0, ...lt(e.unwrap())] : e instanceof qt ? [null, ...lt(e.unwrap())] : e instanceof Xs || e instanceof Qr ? lt(e.unwrap()) : e instanceof Xr ? lt(e._def.innerType) : [];
class na extends z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== O.object)
      return N(r, {
        code: I.invalid_type,
        expected: O.object,
        received: r.parsedType
      }), L;
    const n = this.discriminator, a = r.data[n], s = this.optionsMap.get(a);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (N(r, {
      code: I.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), L);
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
      const o = lt(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (a.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        a.set(i, s);
      }
    }
    return new na({
      typeName: C.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...V(n)
    });
  }
}
function Ln(e, t) {
  const r = xt(e), n = xt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === O.object && n === O.object) {
    const a = K.objectKeys(t), s = K.objectKeys(e).filter((i) => a.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const l = Ln(e[i], t[i]);
      if (!l.valid)
        return { valid: !1 };
      o[i] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === O.array && n === O.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], l = Ln(o, i);
      if (!l.valid)
        return { valid: !1 };
      a.push(l.data);
    }
    return { valid: !0, data: a };
  } else return r === O.date && n === O.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class zr extends z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (Ra(s) || Ra(o))
        return L;
      const i = Ln(s.value, o.value);
      return i.valid ? ((Ea(s) || Ea(o)) && r.dirty(), { status: r.value, value: i.data }) : (N(n, {
        code: I.invalid_intersection_types
      }), L);
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
zr.create = (e, t, r) => new zr({
  left: e,
  right: t,
  typeName: C.ZodIntersection,
  ...V(r)
});
class jt extends z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== O.array)
      return N(n, {
        code: I.invalid_type,
        expected: O.array,
        received: n.parsedType
      }), L;
    if (n.data.length < this._def.items.length)
      return N(n, {
        code: I.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), L;
    !this._def.rest && n.data.length > this._def.items.length && (N(n, {
      code: I.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, i) => {
      const l = this._def.items[i] || this._def.rest;
      return l ? l._parse(new rt(n, o, n.path, i)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => De.mergeArray(r, o)) : De.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new jt({
      ...this._def,
      rest: t
    });
  }
}
jt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new jt({
    items: e,
    typeName: C.ZodTuple,
    rest: null,
    ...V(t)
  });
};
class Gr extends z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== O.object)
      return N(n, {
        code: I.invalid_type,
        expected: O.object,
        received: n.parsedType
      }), L;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in n.data)
      a.push({
        key: s._parse(new rt(n, i, n.path, i)),
        value: o._parse(new rt(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? De.mergeObjectAsync(r, a) : De.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof z ? new Gr({
      keyType: t,
      valueType: r,
      typeName: C.ZodRecord,
      ...V(n)
    }) : new Gr({
      keyType: mt.create(),
      valueType: t,
      typeName: C.ZodRecord,
      ...V(r)
    });
  }
}
class Oa extends z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== O.map)
      return N(n, {
        code: I.invalid_type,
        expected: O.map,
        received: n.parsedType
      }), L;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([i, l], u) => ({
      key: a._parse(new rt(n, i, n.path, [u, "key"])),
      value: s._parse(new rt(n, l, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, c = await l.value;
          if (u.status === "aborted" || c.status === "aborted")
            return L;
          (u.status === "dirty" || c.status === "dirty") && r.dirty(), i.set(u.value, c.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, c = l.value;
        if (u.status === "aborted" || c.status === "aborted")
          return L;
        (u.status === "dirty" || c.status === "dirty") && r.dirty(), i.set(u.value, c.value);
      }
      return { status: r.value, value: i };
    }
  }
}
Oa.create = (e, t, r) => new Oa({
  valueType: t,
  keyType: e,
  typeName: C.ZodMap,
  ...V(r)
});
class gr extends z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== O.set)
      return N(n, {
        code: I.invalid_type,
        expected: O.set,
        received: n.parsedType
      }), L;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (N(n, {
      code: I.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (N(n, {
      code: I.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return L;
        c.status === "dirty" && r.dirty(), u.add(c.value);
      }
      return { status: r.value, value: u };
    }
    const i = [...n.data.values()].map((l, u) => s._parse(new rt(n, l, n.path, u)));
    return n.common.async ? Promise.all(i).then((l) => o(l)) : o(i);
  }
  min(t, r) {
    return new gr({
      ...this._def,
      minSize: { value: t, message: M.toString(r) }
    });
  }
  max(t, r) {
    return new gr({
      ...this._def,
      maxSize: { value: t, message: M.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
gr.create = (e, t) => new gr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: C.ZodSet,
  ...V(t)
});
class Hr extends z {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Hr.create = (e, t) => new Hr({
  getter: e,
  typeName: C.ZodLazy,
  ...V(t)
});
class Wr extends z {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return N(r, {
        received: r.data,
        code: I.invalid_literal,
        expected: this._def.value
      }), L;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Wr.create = (e, t) => new Wr({
  value: e,
  typeName: C.ZodLiteral,
  ...V(t)
});
function Ys(e, t) {
  return new $t({
    values: e,
    typeName: C.ZodEnum,
    ...V(t)
  });
}
class $t extends z {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return N(r, {
        expected: K.joinValues(n),
        received: r.parsedType,
        code: I.invalid_type
      }), L;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return N(r, {
        received: r.data,
        code: I.invalid_enum_value,
        options: n
      }), L;
    }
    return ze(t.data);
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
    return $t.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return $t.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
$t.create = Ys;
class Fn extends z {
  _parse(t) {
    const r = K.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== O.string && n.parsedType !== O.number) {
      const a = K.objectValues(r);
      return N(n, {
        expected: K.joinValues(a),
        received: n.parsedType,
        code: I.invalid_type
      }), L;
    }
    if (this._cache || (this._cache = new Set(K.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const a = K.objectValues(r);
      return N(n, {
        received: n.data,
        code: I.invalid_enum_value,
        options: a
      }), L;
    }
    return ze(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Fn.create = (e, t) => new Fn({
  values: e,
  typeName: C.ZodNativeEnum,
  ...V(t)
});
class Kr extends z {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== O.promise && r.common.async === !1)
      return N(r, {
        code: I.invalid_type,
        expected: O.promise,
        received: r.parsedType
      }), L;
    const n = r.parsedType === O.promise ? r.data : Promise.resolve(r.data);
    return ze(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Kr.create = (e, t) => new Kr({
  type: e,
  typeName: C.ZodPromise,
  ...V(t)
});
class Dt extends z {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === C.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        N(n, o), o.fatal ? r.abort() : r.dirty();
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
            return L;
          const l = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? L : l.status === "dirty" || r.value === "dirty" ? dr(l.value) : l;
        });
      {
        if (r.value === "aborted")
          return L;
        const i = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? L : i.status === "dirty" || r.value === "dirty" ? dr(i.value) : i;
      }
    }
    if (a.type === "refinement") {
      const o = (i) => {
        const l = a.refinement(i, s);
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
        return i.status === "aborted" ? L : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? L : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Ht(o))
          return L;
        const i = a.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => Ht(o) ? Promise.resolve(a.transform(o.value, s)).then((i) => ({
          status: r.value,
          value: i
        })) : L);
    K.assertNever(a);
  }
}
Dt.create = (e, t, r) => new Dt({
  schema: e,
  typeName: C.ZodEffects,
  effect: t,
  ...V(r)
});
Dt.createWithPreprocess = (e, t, r) => new Dt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: C.ZodEffects,
  ...V(r)
});
class tt extends z {
  _parse(t) {
    return this._getType(t) === O.undefined ? ze(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
tt.create = (e, t) => new tt({
  innerType: e,
  typeName: C.ZodOptional,
  ...V(t)
});
class qt extends z {
  _parse(t) {
    return this._getType(t) === O.null ? ze(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
qt.create = (e, t) => new qt({
  innerType: e,
  typeName: C.ZodNullable,
  ...V(t)
});
class Yr extends z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === O.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Yr.create = (e, t) => new Yr({
  innerType: e,
  typeName: C.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...V(t)
});
class Xr extends z {
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
    return Zr(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new gt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new gt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Xr.create = (e, t) => new Xr({
  innerType: e,
  typeName: C.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...V(t)
});
class Ma extends z {
  _parse(t) {
    if (this._getType(t) !== O.nan) {
      const n = this._getOrReturnCtx(t);
      return N(n, {
        code: I.invalid_type,
        expected: O.nan,
        received: n.parsedType
      }), L;
    }
    return { status: "valid", value: t.data };
  }
}
Ma.create = (e) => new Ma({
  typeName: C.ZodNaN,
  ...V(e)
});
class Xs extends z {
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
class aa extends z {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? L : s.status === "dirty" ? (r.dirty(), dr(s.value)) : this._def.out._parseAsync({
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
      return a.status === "aborted" ? L : a.status === "dirty" ? (r.dirty(), {
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
    return new aa({
      in: t,
      out: r,
      typeName: C.ZodPipeline
    });
  }
}
class Qr extends z {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (a) => (Ht(a) && (a.value = Object.freeze(a.value)), a);
    return Zr(r) ? r.then((a) => n(a)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Qr.create = (e, t) => new Qr({
  innerType: e,
  typeName: C.ZodReadonly,
  ...V(t)
});
function ja(e, t) {
  const r = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof r == "string" ? { message: r } : r;
}
function Qs(e, t = {}, r) {
  return e ? hr.create().superRefine((n, a) => {
    const s = e(n);
    if (s instanceof Promise)
      return s.then((o) => {
        if (!o) {
          const i = ja(t, n), l = i.fatal ?? r ?? !0;
          a.addIssue({ code: "custom", ...i, fatal: l });
        }
      });
    if (!s) {
      const o = ja(t, n), i = o.fatal ?? r ?? !0;
      a.addIssue({ code: "custom", ...o, fatal: i });
    }
  }) : hr.create();
}
var C;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(C || (C = {}));
const en = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Qs((r) => r instanceof e, t), h = mt.create, R = Wt.create, Je = Dn.create, Gl = Br.create, eo = hr.create, Nr = Un.create;
St.create;
const F = et.create, y = ke.create, ge = Jr.create, Tt = na.create;
zr.create;
const $a = jt.create, yr = Gr.create, Hl = Hr.create, A = Wr.create, yt = $t.create;
Kr.create;
const Ie = tt.create;
qt.create;
function Wl() {
  return {};
}
function Kl(e, t) {
  var n, a, s;
  const r = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((s = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : s.typeName) !== C.ZodAny && (r.items = Q(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && ae(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && ae(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (ae(r, "minItems", e.exactLength.value, e.exactLength.message, t), ae(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function Yl(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? ae(r, "minimum", n.value, n.message, t) : ae(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), ae(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? ae(r, "maximum", n.value, n.message, t) : ae(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), ae(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        ae(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function Xl() {
  return {
    type: "boolean"
  };
}
function to(e, t) {
  return Q(e.type._def, t);
}
const Ql = (e, t) => Q(e.innerType._def, t);
function ro(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, s) => ro(e, t, a))
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
      return eu(e, t);
  }
}
const eu = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        ae(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          t
        );
        break;
      case "max":
        ae(
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
function tu(e, t) {
  return {
    ...Q(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function ru(e, t) {
  return t.effectStrategy === "input" ? Q(e.schema._def, t) : {};
}
function nu(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const au = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function su(e, t) {
  const r = [
    Q(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    Q(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((s) => !!s);
  let n = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const a = [];
  return r.forEach((s) => {
    if (au(s))
      a.push(...s.allOf), s.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let o = s;
      if ("additionalProperties" in s && s.additionalProperties === !1) {
        const { additionalProperties: i, ...l } = s;
        o = l;
      } else
        n = void 0;
      a.push(o);
    }
  }), a.length ? {
    allOf: a,
    ...n
  } : void 0;
}
function ou(e, t) {
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
let Tn;
const We = {
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
  emoji: () => (Tn === void 0 && (Tn = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Tn),
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
function no(e, t) {
  const r = {
    type: "string"
  };
  if (e.checks)
    for (const n of e.checks)
      switch (n.kind) {
        case "min":
          ae(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, t);
          break;
        case "max":
          ae(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              Ke(r, "email", n.message, t);
              break;
            case "format:idn-email":
              Ke(r, "idn-email", n.message, t);
              break;
            case "pattern:zod":
              $e(r, We.email, n.message, t);
              break;
          }
          break;
        case "url":
          Ke(r, "uri", n.message, t);
          break;
        case "uuid":
          Ke(r, "uuid", n.message, t);
          break;
        case "regex":
          $e(r, n.regex, n.message, t);
          break;
        case "cuid":
          $e(r, We.cuid, n.message, t);
          break;
        case "cuid2":
          $e(r, We.cuid2, n.message, t);
          break;
        case "startsWith":
          $e(r, RegExp(`^${Sn(n.value, t)}`), n.message, t);
          break;
        case "endsWith":
          $e(r, RegExp(`${Sn(n.value, t)}$`), n.message, t);
          break;
        case "datetime":
          Ke(r, "date-time", n.message, t);
          break;
        case "date":
          Ke(r, "date", n.message, t);
          break;
        case "time":
          Ke(r, "time", n.message, t);
          break;
        case "duration":
          Ke(r, "duration", n.message, t);
          break;
        case "length":
          ae(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, t), ae(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, t);
          break;
        case "includes": {
          $e(r, RegExp(Sn(n.value, t)), n.message, t);
          break;
        }
        case "ip": {
          n.version !== "v6" && Ke(r, "ipv4", n.message, t), n.version !== "v4" && Ke(r, "ipv6", n.message, t);
          break;
        }
        case "base64url":
          $e(r, We.base64url, n.message, t);
          break;
        case "jwt":
          $e(r, We.jwt, n.message, t);
          break;
        case "cidr": {
          n.version !== "v6" && $e(r, We.ipv4Cidr, n.message, t), n.version !== "v4" && $e(r, We.ipv6Cidr, n.message, t);
          break;
        }
        case "emoji":
          $e(r, We.emoji(), n.message, t);
          break;
        case "ulid": {
          $e(r, We.ulid, n.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Ke(r, "binary", n.message, t);
              break;
            }
            case "contentEncoding:base64": {
              ae(r, "contentEncoding", "base64", n.message, t);
              break;
            }
            case "pattern:zod": {
              $e(r, We.base64, n.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          $e(r, We.nanoid, n.message, t);
      }
  return r;
}
function Sn(e, t) {
  return t.patternStrategy === "escape" ? lu(e) : e;
}
const iu = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function lu(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    iu.has(e[r]) || (t += "\\"), t += e[r];
  return t;
}
function Ke(e, t, r, n) {
  var a;
  e.format || (a = e.anyOf) != null && a.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : ae(e, "format", t, r, n);
}
function $e(e, t, r, n) {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && n.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: Da(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : ae(e, "pattern", Da(t, n), r, n);
}
function Da(e, t) {
  var l;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const r = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s")
    // `.` matches newlines
  }, n = r.i ? e.source.toLowerCase() : e.source;
  let a = "", s = !1, o = !1, i = !1;
  for (let u = 0; u < n.length; u++) {
    if (s) {
      a += n[u], s = !1;
      continue;
    }
    if (r.i) {
      if (o) {
        if (n[u].match(/[a-z]/)) {
          i ? (a += n[u], a += `${n[u - 2]}-${n[u]}`.toUpperCase(), i = !1) : n[u + 1] === "-" && ((l = n[u + 2]) != null && l.match(/[a-z]/)) ? (a += n[u], i = !0) : a += `${n[u]}${n[u].toUpperCase()}`;
          continue;
        }
      } else if (n[u].match(/[a-z]/)) {
        a += `[${n[u]}${n[u].toUpperCase()}]`;
        continue;
      }
    }
    if (r.m) {
      if (n[u] === "^") {
        a += `(^|(?<=[\r
]))`;
        continue;
      } else if (n[u] === "$") {
        a += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r.s && n[u] === ".") {
      a += o ? `${n[u]}\r
` : `[${n[u]}\r
]`;
      continue;
    }
    a += n[u], n[u] === "\\" ? s = !0 : o && n[u] === "]" ? o = !1 : !o && n[u] === "[" && (o = !0);
  }
  try {
    new RegExp(a);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
  }
  return a;
}
function ao(e, t) {
  var n, a, s, o, i, l;
  if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && ((n = e.keyType) == null ? void 0 : n._def.typeName) === C.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((u, c) => ({
        ...u,
        [c]: Q(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", c]
        }) ?? {}
      }), {}),
      additionalProperties: t.rejectedAdditionalProperties
    };
  const r = {
    type: "object",
    additionalProperties: Q(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? t.allowedAdditionalProperties
  };
  if (t.target === "openApi3")
    return r;
  if (((a = e.keyType) == null ? void 0 : a._def.typeName) === C.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
    const { type: u, ...c } = no(e.keyType._def, t);
    return {
      ...r,
      propertyNames: c
    };
  } else {
    if (((o = e.keyType) == null ? void 0 : o._def.typeName) === C.ZodEnum)
      return {
        ...r,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((i = e.keyType) == null ? void 0 : i._def.typeName) === C.ZodBranded && e.keyType._def.type._def.typeName === C.ZodString && ((l = e.keyType._def.type._def.checks) != null && l.length)) {
      const { type: u, ...c } = to(e.keyType._def, t);
      return {
        ...r,
        propertyNames: c
      };
    }
  }
  return r;
}
function uu(e, t) {
  if (t.mapStrategy === "record")
    return ao(e, t);
  const r = Q(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, n = Q(e.valueType._def, {
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
function cu(e) {
  const t = e.values, n = Object.keys(e.values).filter((s) => typeof t[t[s]] != "number").map((s) => t[s]), a = Array.from(new Set(n.map((s) => typeof s)));
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function du() {
  return {
    not: {}
  };
}
function pu(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const tn = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function mu(e, t) {
  if (t.target === "openApi3")
    return qa(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((n) => n._def.typeName in tn && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((a, s) => {
      const o = tn[s._def.typeName];
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
  return qa(e, t);
}
const qa = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((n, a) => Q(n._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${a}`]
  })).filter((n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function fu(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: tn[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        tn[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const n = Q(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = Q(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function hu(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", Hs(r, "type", n.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? n.inclusive ? ae(r, "minimum", n.value, n.message, t) : ae(r, "exclusiveMinimum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMinimum = !0), ae(r, "minimum", n.value, n.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? n.inclusive ? ae(r, "maximum", n.value, n.message, t) : ae(r, "exclusiveMaximum", n.value, n.message, t) : (n.inclusive || (r.exclusiveMaximum = !0), ae(r, "maximum", n.value, n.message, t));
        break;
      case "multipleOf":
        ae(r, "multipleOf", n.value, n.message, t);
        break;
    }
  return r;
}
function gu(e, t) {
  const r = t.target === "openAi", n = {
    type: "object",
    properties: {}
  }, a = [], s = e.shape();
  for (const i in s) {
    let l = s[i];
    if (l === void 0 || l._def === void 0)
      continue;
    let u = vu(l);
    u && r && (l instanceof tt && (l = l._def.innerType), l.isNullable() || (l = l.nullable()), u = !1);
    const c = Q(l._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", i],
      propertyPath: [...t.currentPath, "properties", i]
    });
    c !== void 0 && (n.properties[i] = c, u || a.push(i));
  }
  a.length && (n.required = a);
  const o = yu(e, t);
  return o !== void 0 && (n.additionalProperties = o), n;
}
function yu(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return Q(e.catchall._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    });
  switch (e.unknownKeys) {
    case "passthrough":
      return t.allowedAdditionalProperties;
    case "strict":
      return t.rejectedAdditionalProperties;
    case "strip":
      return t.removeAdditionalStrategy === "strict" ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties;
  }
}
function vu(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
const _u = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return Q(e.innerType._def, t);
  const r = Q(e.innerType._def, {
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
}, bu = (e, t) => {
  if (t.pipeStrategy === "input")
    return Q(e.in._def, t);
  if (t.pipeStrategy === "output")
    return Q(e.out._def, t);
  const r = Q(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = Q(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function wu(e, t) {
  return Q(e.type._def, t);
}
function xu(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: Q(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && ae(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && ae(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
function ku(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, n) => Q(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: Q(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, n) => Q(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function Tu() {
  return {
    not: {}
  };
}
function Su() {
  return {};
}
const Iu = (e, t) => Q(e.innerType._def, t), Cu = (e, t, r) => {
  switch (t) {
    case C.ZodString:
      return no(e, r);
    case C.ZodNumber:
      return hu(e, r);
    case C.ZodObject:
      return gu(e, r);
    case C.ZodBigInt:
      return Yl(e, r);
    case C.ZodBoolean:
      return Xl();
    case C.ZodDate:
      return ro(e, r);
    case C.ZodUndefined:
      return Tu();
    case C.ZodNull:
      return pu(r);
    case C.ZodArray:
      return Kl(e, r);
    case C.ZodUnion:
    case C.ZodDiscriminatedUnion:
      return mu(e, r);
    case C.ZodIntersection:
      return su(e, r);
    case C.ZodTuple:
      return ku(e, r);
    case C.ZodRecord:
      return ao(e, r);
    case C.ZodLiteral:
      return ou(e, r);
    case C.ZodEnum:
      return nu(e);
    case C.ZodNativeEnum:
      return cu(e);
    case C.ZodNullable:
      return fu(e, r);
    case C.ZodOptional:
      return _u(e, r);
    case C.ZodMap:
      return uu(e, r);
    case C.ZodSet:
      return xu(e, r);
    case C.ZodLazy:
      return () => e.getter()._def;
    case C.ZodPromise:
      return wu(e, r);
    case C.ZodNaN:
    case C.ZodNever:
      return du();
    case C.ZodEffects:
      return ru(e, r);
    case C.ZodAny:
      return Wl();
    case C.ZodUnknown:
      return Su();
    case C.ZodDefault:
      return tu(e, r);
    case C.ZodBranded:
      return to(e, r);
    case C.ZodReadonly:
      return Iu(e, r);
    case C.ZodCatch:
      return Ql(e, r);
    case C.ZodPipeline:
      return bu(e, r);
    case C.ZodFunction:
    case C.ZodVoid:
    case C.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
};
function Q(e, t, r = !1) {
  var i;
  const n = t.seen.get(e);
  if (t.override) {
    const l = (i = t.override) == null ? void 0 : i.call(t, e, t, n, r);
    if (l !== _l)
      return l;
  }
  if (n && !r) {
    const l = Ru(n, t);
    if (l !== void 0)
      return l;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = Cu(e, e.typeName, t), o = typeof s == "function" ? Q(s(), t) : s;
  if (o && Au(e, t, o), t.postProcess) {
    const l = t.postProcess(o, e, t);
    return a.jsonSchema = o, l;
  }
  return a.jsonSchema = o, o;
}
const Ru = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Eu(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, Eu = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, Au = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), Nu = (e, t) => {
  const r = wl(t), n = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((l, [u, c]) => ({
    ...l,
    [u]: Q(c._def, {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, u]
    }, !0) ?? {}
  }), {}) : void 0, a = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, s = Q(e._def, a === void 0 ? r : {
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
var vr = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, _r = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, br = {
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
}, wr = {
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
}, xr = {
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
}, so = [
  vr,
  _r,
  br,
  wr,
  xr
], Pu = {
  [vr.code]: vr,
  [_r.code]: _r,
  [br.code]: br,
  [wr.code]: wr,
  [xr.code]: xr
};
vr.name + "", vr.code, _r.name + "", _r.code, br.name + "", br.code, wr.name + "", wr.code, xr.name + "", xr.code;
var Ou = so.map((e) => e.code), uh = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const r = e.slice(0, t);
  if (!Ou.includes(r))
    throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  const n = r, a = e.slice(t + 1), s = JSON.parse(a);
  return Pu[n].parse(s);
};
function zt(e, t) {
  const r = so.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
function Mu(e) {
  const t = ["ROOT"];
  let r = -1, n = null;
  function a(l, u, c) {
    switch (l) {
      case '"': {
        r = u, t.pop(), t.push(c), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        r = u, n = u, t.pop(), t.push(c), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(c), t.push("INSIDE_NUMBER");
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
        r = u, t.pop(), t.push(c), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function s(l, u) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        r = u, t.pop();
        break;
      }
    }
  }
  function o(l, u) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        r = u, t.pop();
        break;
      }
    }
  }
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    switch (t[t.length - 1]) {
      case "ROOT":
        a(u, l, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            r = l, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (u) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        a(u, l, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(u, l);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
          case '"': {
            t.pop(), r = l;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = l;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (u) {
          case "]": {
            r = l, t.pop();
            break;
          }
          default: {
            r = l, a(u, l, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (u) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            r = l, t.pop();
            break;
          }
          default: {
            r = l;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        a(u, l, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), r = l;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (u) {
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
            r = l;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, l);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, l);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l);
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
        const d = e.substring(n, l + 1);
        !"false".startsWith(d) && !"true".startsWith(d) && !"null".startsWith(d) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(u, l) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l)) : r = l;
        break;
      }
    }
  }
  let i = e.slice(0, r + 1);
  for (let l = t.length - 1; l >= 0; l--)
    switch (t[l]) {
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
        const c = e.substring(n, e.length);
        "true".startsWith(c) ? i += "true".slice(c.length) : "false".startsWith(c) ? i += "false".slice(c.length) : "null".startsWith(c) && (i += "null".slice(c.length));
      }
    }
  return i;
}
function oo(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = Ot({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = Ot({ text: Mu(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var ju = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, $u = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Du = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, qu = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Uu = {
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
}, Lu = {
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
}, Fu = {
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
}, Zu = {
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
}, Vu = {
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
}, Bu = {
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
}, Ju = {
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
}, zu = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, Gu = {
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
}, Hu = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, Wu = {
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
}, Ku = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, dn = [
  ju,
  $u,
  Du,
  qu,
  Uu,
  Lu,
  Fu,
  Zu,
  Vu,
  Bu,
  Ju,
  zu,
  Gu,
  Hu,
  Wu,
  Ku
], Yu = Object.fromEntries(
  dn.map((e) => [e.code, e])
);
Object.fromEntries(
  dn.map((e) => [e.name, e.code])
);
var Xu = dn.map((e) => e.code), Qu = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const r = e.slice(0, t);
  if (!Xu.includes(r))
    throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  const n = r, a = e.slice(t + 1), s = JSON.parse(a);
  return Yu[n].parse(s);
};
function pe(e, t) {
  const r = dn.find((n) => n.name === e);
  if (!r)
    throw new Error(`Invalid stream part type: ${e}`);
  return `${r.code}:${JSON.stringify(t)}
`;
}
var ec = 10;
function tc(e, t) {
  const r = new Uint8Array(t);
  let n = 0;
  for (const a of e)
    r.set(a, n), n += a.length;
  return e.length = 0, r;
}
async function ch({
  stream: e,
  onTextPart: t,
  onReasoningPart: r,
  onReasoningSignaturePart: n,
  onRedactedReasoningPart: a,
  onSourcePart: s,
  onFilePart: o,
  onDataPart: i,
  onErrorPart: l,
  onToolCallStreamingStartPart: u,
  onToolCallDeltaPart: c,
  onToolCallPart: d,
  onToolResultPart: m,
  onMessageAnnotationsPart: _,
  onFinishMessagePart: v,
  onFinishStepPart: g,
  onStartStepPart: p
}) {
  const f = e.getReader(), w = new TextDecoder(), k = [];
  let b = 0;
  for (; ; ) {
    const { value: x } = await f.read();
    if (x && (k.push(x), b += x.length, x[x.length - 1] !== ec))
      continue;
    if (k.length === 0)
      break;
    const S = tc(k, b);
    b = 0;
    const $ = w.decode(S, { stream: !0 }).split(`
`).filter((E) => E !== "").map(Qu);
    for (const { type: E, value: P } of $)
      switch (E) {
        case "text":
          await (t == null ? void 0 : t(P));
          break;
        case "reasoning":
          await (r == null ? void 0 : r(P));
          break;
        case "reasoning_signature":
          await (n == null ? void 0 : n(P));
          break;
        case "redacted_reasoning":
          await (a == null ? void 0 : a(P));
          break;
        case "file":
          await (o == null ? void 0 : o(P));
          break;
        case "source":
          await (s == null ? void 0 : s(P));
          break;
        case "data":
          await (i == null ? void 0 : i(P));
          break;
        case "error":
          await (l == null ? void 0 : l(P));
          break;
        case "message_annotations":
          await (_ == null ? void 0 : _(P));
          break;
        case "tool_call_streaming_start":
          await (u == null ? void 0 : u(P));
          break;
        case "tool_call_delta":
          await (c == null ? void 0 : c(P));
          break;
        case "tool_call":
          await (d == null ? void 0 : d(P));
          break;
        case "tool_result":
          await (m == null ? void 0 : m(P));
          break;
        case "finish_message":
          await (v == null ? void 0 : v(P));
          break;
        case "finish_step":
          await (g == null ? void 0 : g(P));
          break;
        case "start_step":
          await (p == null ? void 0 : p(P));
          break;
        default: {
          const G = E;
          throw new Error(`Unknown stream part type: ${G}`);
        }
      }
  }
}
async function dh({
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
function rc(e) {
  return e == null ? void 0 : e.reduce((t, r) => {
    var n;
    return Math.max(t, (n = r.step) != null ? n : 0);
  }, 0);
}
function rn(e, t) {
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
      if (!rn(e[a], t[a]))
        return !1;
    return !0;
  }
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (const a of r)
    if (!n.includes(a) || !rn(e[a], t[a]))
      return !1;
  return !0;
}
function nc(e, t) {
  var r;
  const n = (r = t == null ? void 0 : t.useReferences) != null ? r : !1;
  return io(
    Nu(e, {
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
var Zn = Symbol.for("vercel.ai.schema");
function io(e, {
  validate: t
} = {}) {
  return {
    [Zn]: !0,
    _type: void 0,
    // should never be used directly
    [Fr]: !0,
    jsonSchema: e,
    validate: t
  };
}
function ac(e) {
  return typeof e == "object" && e !== null && Zn in e && e[Zn] === !0 && "jsonSchema" in e && "validate" in e;
}
function Kt(e) {
  return ac(e) ? e : nc(e);
}
var sc = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Nt = "1.9.0", Ua = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function oc(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(Ua);
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
    return function(l) {
      return l === e;
    };
  function s(i) {
    return r.add(i), !1;
  }
  function o(i) {
    return t.add(i), !0;
  }
  return function(l) {
    if (t.has(l))
      return !0;
    if (r.has(l))
      return !1;
    var u = l.match(Ua);
    if (!u)
      return s(l);
    var c = {
      major: +u[1],
      minor: +u[2],
      patch: +u[3],
      prerelease: u[4]
    };
    return c.prerelease != null || a.major !== c.major ? s(l) : a.major === 0 ? a.minor === c.minor && a.patch <= c.patch ? o(l) : s(l) : a.minor <= c.minor ? o(l) : s(l);
  };
}
var ic = oc(Nt), lc = Nt.split(".")[0], kr = Symbol.for("opentelemetry.js.api." + lc), Tr = sc;
function Pr(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var s = Tr[kr] = (a = Tr[kr]) !== null && a !== void 0 ? a : {
    version: Nt
  };
  if (!n && s[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(o.stack || o.message), !1;
  }
  if (s.version !== Nt) {
    var o = new Error("@opentelemetry/api: Registration of version v" + s.version + " for " + e + " does not match previously registered API v" + Nt);
    return r.error(o.stack || o.message), !1;
  }
  return s[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Nt + "."), !0;
}
function Ut(e) {
  var t, r, n = (t = Tr[kr]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !ic(n)))
    return (r = Tr[kr]) === null || r === void 0 ? void 0 : r[e];
}
function Or(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Nt + ".");
  var r = Tr[kr];
  r && delete r[e];
}
var uc = function(e, t) {
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
}, cc = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, dc = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return cr("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return cr("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return cr("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return cr("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return cr("verbose", this._namespace, t);
    }, e;
  }()
);
function cr(e, t, r) {
  var n = Ut("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, cc([], uc(r), !1));
}
var Ve;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(Ve || (Ve = {}));
function pc(e, t) {
  e < Ve.NONE ? e = Ve.NONE : e > Ve.ALL && (e = Ve.ALL), t = t || {};
  function r(n, a) {
    var s = t[n];
    return typeof s == "function" && e >= a ? s.bind(t) : function() {
    };
  }
  return {
    error: r("error", Ve.ERROR),
    warn: r("warn", Ve.WARN),
    info: r("info", Ve.INFO),
    debug: r("debug", Ve.DEBUG),
    verbose: r("verbose", Ve.VERBOSE)
  };
}
var mc = function(e, t) {
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
}, fc = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, hc = "diag", nt = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var s = [], o = 0; o < arguments.length; o++)
            s[o] = arguments[o];
          var i = Ut("diag");
          if (i)
            return i[a].apply(i, fc([], mc(s), !1));
        };
      }
      var r = this, n = function(a, s) {
        var o, i, l;
        if (s === void 0 && (s = { logLevel: Ve.INFO }), a === r) {
          var u = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((o = u.stack) !== null && o !== void 0 ? o : u.message), !1;
        }
        typeof s == "number" && (s = {
          logLevel: s
        });
        var c = Ut("diag"), d = pc((i = s.logLevel) !== null && i !== void 0 ? i : Ve.INFO, a);
        if (c && !s.suppressOverrideMessage) {
          var m = (l = new Error().stack) !== null && l !== void 0 ? l : "<failed to generate stacktrace>";
          c.warn("Current logger will be overwritten from " + m), d.warn("Current logger will overwrite one already registered from " + m);
        }
        return Pr("diag", d, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Or(hc, r);
      }, r.createComponentLogger = function(a) {
        return new dc(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), gc = function(e, t) {
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
}, yc = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, vc = (
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
        var r = gc(t, 2), n = r[0], a = r[1];
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
        for (var o = yc(n), i = o.next(); !i.done; i = o.next()) {
          var l = i.value;
          s._entries.delete(l);
        }
      } catch (u) {
        t = { error: u };
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
nt.instance();
function _c(e) {
  return e === void 0 && (e = {}), new vc(new Map(Object.entries(e)));
}
function lo(e) {
  return Symbol.for(e);
}
var bc = (
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
), wc = new bc(), Zt = /* @__PURE__ */ function() {
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
}(), xc = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return Pc;
    }, e.prototype.createHistogram = function(t, r) {
      return Oc;
    }, e.prototype.createCounter = function(t, r) {
      return Nc;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return Mc;
    }, e.prototype.createObservableGauge = function(t, r) {
      return $c;
    }, e.prototype.createObservableCounter = function(t, r) {
      return jc;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return Dc;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), pn = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), kc = (
  /** @class */
  function(e) {
    Zt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(pn)
), Tc = (
  /** @class */
  function(e) {
    Zt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, n) {
    }, t;
  }(pn)
), Sc = (
  /** @class */
  function(e) {
    Zt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(pn)
), Ic = (
  /** @class */
  function(e) {
    Zt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, n) {
    }, t;
  }(pn)
), sa = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), Cc = (
  /** @class */
  function(e) {
    Zt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(sa)
), Rc = (
  /** @class */
  function(e) {
    Zt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(sa)
), Ec = (
  /** @class */
  function(e) {
    Zt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(sa)
), Ac = new xc(), Nc = new kc(), Pc = new Sc(), Oc = new Ic(), Mc = new Tc(), jc = new Cc(), $c = new Rc(), Dc = new Ec(), qc = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, Uc = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, Lc = function(e, t) {
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
}, Fc = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Zc = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return wc;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return r.call.apply(r, Fc([n], Lc(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), Vc = function(e, t) {
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
}, Bc = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, s; n < a; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, In = "context", Jc = new Zc(), mn = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Pr(In, t, nt.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, s = [], o = 3; o < arguments.length; o++)
        s[o - 3] = arguments[o];
      return (a = this._getContextManager()).with.apply(a, Bc([t, r, n], Vc(s), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return Ut(In) || Jc;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Or(In, nt.instance());
    }, e;
  }()
), Vn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Vn || (Vn = {}));
var uo = "0000000000000000", co = "00000000000000000000000000000000", zc = {
  traceId: co,
  spanId: uo,
  traceFlags: Vn.NONE
}, pr = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = zc), this._spanContext = t;
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
), oa = lo("OpenTelemetry Context Key SPAN");
function ia(e) {
  return e.getValue(oa) || void 0;
}
function Gc() {
  return ia(mn.getInstance().active());
}
function la(e, t) {
  return e.setValue(oa, t);
}
function Hc(e) {
  return e.deleteValue(oa);
}
function Wc(e, t) {
  return la(e, new pr(t));
}
function po(e) {
  var t;
  return (t = ia(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var Kc = /^([0-9a-f]{32})$/i, Yc = /^[0-9a-f]{16}$/i;
function Xc(e) {
  return Kc.test(e) && e !== co;
}
function Qc(e) {
  return Yc.test(e) && e !== uo;
}
function mo(e) {
  return Xc(e.traceId) && Qc(e.spanId);
}
function ed(e) {
  return new pr(e);
}
var Cn = mn.getInstance(), fo = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = Cn.active());
      var a = !!(r != null && r.root);
      if (a)
        return new pr();
      var s = n && po(n);
      return td(s) && mo(s) ? new pr(s) : new pr();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var s, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (s = r, i = n) : (s = r, o = n, i = a);
        var l = o ?? Cn.active(), u = this.startSpan(t, s, l), c = la(l, u);
        return Cn.with(c, i, void 0, u);
      }
    }, e;
  }()
);
function td(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var rd = new fo(), nd = (
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
      return t ? (this._delegate = t, this._delegate) : rd;
    }, e;
  }()
), ad = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new fo();
    }, e;
  }()
), sd = new ad(), La = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new nd(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : sd;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), nn;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(nn || (nn = {}));
mn.getInstance();
nt.instance();
var od = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, n) {
      return Ac;
    }, e;
  }()
), id = new od(), Rn = "metrics", ld = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return Pr(Rn, t, nt.instance());
    }, e.prototype.getMeterProvider = function() {
      return Ut(Rn) || id;
    }, e.prototype.getMeter = function(t, r, n) {
      return this.getMeterProvider().getMeter(t, r, n);
    }, e.prototype.disable = function() {
      Or(Rn, nt.instance());
    }, e;
  }()
);
ld.getInstance();
var ud = (
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
), ua = lo("OpenTelemetry Baggage Key");
function ho(e) {
  return e.getValue(ua) || void 0;
}
function cd() {
  return ho(mn.getInstance().active());
}
function dd(e, t) {
  return e.setValue(ua, t);
}
function pd(e) {
  return e.deleteValue(ua);
}
var En = "propagation", md = new ud(), fd = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = _c, this.getBaggage = ho, this.getActiveBaggage = cd, this.setBaggage = dd, this.deleteBaggage = pd;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return Pr(En, t, nt.instance());
    }, e.prototype.inject = function(t, r, n) {
      return n === void 0 && (n = Uc), this._getGlobalPropagator().inject(t, r, n);
    }, e.prototype.extract = function(t, r, n) {
      return n === void 0 && (n = qc), this._getGlobalPropagator().extract(t, r, n);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Or(En, nt.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return Ut(En) || md;
    }, e;
  }()
);
fd.getInstance();
var An = "trace", hd = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new La(), this.wrapSpanContext = ed, this.isSpanContextValid = mo, this.deleteSpan = Hc, this.getSpan = ia, this.getActiveSpan = Gc, this.getSpanContext = po, this.setSpan = la, this.setSpanContext = Wc;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Pr(An, this._proxyTracerProvider, nt.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return Ut(An) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Or(An, nt.instance()), this._proxyTracerProvider = new La();
    }, e;
  }()
), gd = hd.getInstance(), yd = Object.defineProperty, ca = (e, t) => {
  for (var r in t)
    yd(e, r, { get: t[r], enumerable: !0 });
};
function go({
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
      write(l) {
        s(l);
      },
      writeData(l) {
        s(pe("data", [l]));
      },
      writeMessageAnnotation(l) {
        s(pe("message_annotations", [l]));
      },
      writeSource(l) {
        s(pe("source", l));
      },
      merge(l) {
        n.push(
          (async () => {
            const u = l.getReader();
            for (; ; ) {
              const { done: c, value: d } = await u.read();
              if (c)
                break;
              s(d);
            }
          })().catch((u) => {
            s(pe("error", t(u)));
          })
        );
      },
      onError: t
    });
    i && n.push(
      i.catch((l) => {
        s(pe("error", t(l)));
      })
    );
  } catch (i) {
    s(pe("error", t(i)));
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
function Lt(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = new Headers(e ?? {});
  return n.has("Content-Type") || n.set("Content-Type", t), r !== void 0 && n.set("X-Vercel-AI-Data-Stream", r), n;
}
function ph({
  status: e,
  statusText: t,
  headers: r,
  execute: n,
  onError: a
}) {
  return new Response(
    go({ execute: n, onError: a }).pipeThrough(new TextEncoderStream()),
    {
      status: e,
      statusText: t,
      headers: Lt(r, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      })
    }
  );
}
function an(e, {
  contentType: t,
  dataStreamVersion: r
}) {
  const n = {};
  if (e != null)
    for (const [a, s] of Object.entries(e))
      n[a] = s;
  return n["Content-Type"] == null && (n["Content-Type"] = t), r !== void 0 && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function sn({
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
        const { done: i, value: l } = await s.read();
        if (i)
          break;
        e.write(l);
      }
    } catch (i) {
      throw i;
    } finally {
      e.end();
    }
  })();
}
function mh(e, {
  status: t,
  statusText: r,
  headers: n,
  execute: a,
  onError: s
}) {
  sn({
    response: e,
    status: t,
    statusText: r,
    headers: an(n, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    }),
    stream: go({ execute: a, onError: s }).pipeThrough(
      new TextEncoderStream()
    )
  });
}
var yo = "AI_InvalidArgumentError", vo = `vercel.ai.error.${yo}`, vd = Symbol.for(vo), _o, ne = class extends j {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: yo,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[_o] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, vo);
  }
};
_o = vd;
var bo = "AI_RetryError", wo = `vercel.ai.error.${bo}`, _d = Symbol.for(wo), xo, Fa = class extends j {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: bo, message: e }), this[xo] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return j.hasMarker(e, wo);
  }
};
xo = _d;
var bd = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2
} = {}) => async (n) => ko(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r
});
async function ko(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (Ur(s) || t === 0)
      throw s;
    const o = sl(s), i = [...a, s], l = i.length;
    if (l > t)
      throw new Fa({
        message: `Failed after ${l} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (s instanceof Error && Be.isInstance(s) && s.isRetryable === !0 && l <= t)
      return await Qn(r), ko(
        e,
        { maxRetries: t, delayInMs: n * r, backoffFactor: n },
        i
      );
    throw l === 1 ? s : new Fa({
      message: `Failed after ${l} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function _t({
  maxRetries: e
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new ne({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new ne({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const t = e ?? 2;
  return {
    maxRetries: t,
    retry: bd({ maxRetries: t })
  };
}
function Oe({
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
function tr({
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
var wd = {
  startSpan() {
    return qr;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(qr);
    if (typeof r == "function")
      return r(qr);
    if (typeof n == "function")
      return n(qr);
  }
}, qr = {
  spanContext() {
    return xd;
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
}, xd = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function rr({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || gd.getTracer("ai") : wd;
}
function Me({
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
          code: nn.ERROR,
          message: o.message
        })) : s.setStatus({ code: nn.ERROR });
      } finally {
        s.end();
      }
      throw o;
    }
  });
}
function W({
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
async function fh({
  model: e,
  value: t,
  maxRetries: r,
  abortSignal: n,
  headers: a,
  experimental_telemetry: s
}) {
  const { maxRetries: o, retry: i } = _t({ maxRetries: r }), l = tr({
    model: e,
    telemetry: s,
    headers: a,
    settings: { maxRetries: o }
  }), u = rr(s);
  return Me({
    name: "ai.embed",
    attributes: W({
      telemetry: s,
      attributes: {
        ...Oe({ operationId: "ai.embed", telemetry: s }),
        ...l,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: u,
    fn: async (c) => {
      const { embedding: d, usage: m, rawResponse: _ } = await i(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Me({
            name: "ai.embed.doEmbed",
            attributes: W({
              telemetry: s,
              attributes: {
                ...Oe({
                  operationId: "ai.embed.doEmbed",
                  telemetry: s
                }),
                ...l,
                // specific settings that only make sense on the outer level:
                "ai.values": { input: () => [JSON.stringify(t)] }
              }
            }),
            tracer: u,
            fn: async (v) => {
              var g;
              const p = await e.doEmbed({
                values: [t],
                abortSignal: n,
                headers: a
              }), f = p.embeddings[0], w = (g = p.usage) != null ? g : { tokens: NaN };
              return v.setAttributes(
                W({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => p.embeddings.map(
                        (k) => JSON.stringify(k)
                      )
                    },
                    "ai.usage.tokens": w.tokens
                  }
                })
              ), {
                embedding: f,
                usage: w,
                rawResponse: p.rawResponse
              };
            }
          })
        )
      );
      return c.setAttributes(
        W({
          telemetry: s,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(d) },
            "ai.usage.tokens": m.tokens
          }
        })
      ), new kd({ value: t, embedding: d, usage: m, rawResponse: _ });
    }
  });
}
var kd = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.rawResponse = e.rawResponse;
  }
};
function Td(e, t) {
  if (t <= 0)
    throw new Error("chunkSize must be greater than 0");
  const r = [];
  for (let n = 0; n < e.length; n += t)
    r.push(e.slice(n, n + t));
  return r;
}
async function hh({
  model: e,
  values: t,
  maxRetries: r,
  abortSignal: n,
  headers: a,
  experimental_telemetry: s
}) {
  const { maxRetries: o, retry: i } = _t({ maxRetries: r }), l = tr({
    model: e,
    telemetry: s,
    headers: a,
    settings: { maxRetries: o }
  }), u = rr(s);
  return Me({
    name: "ai.embedMany",
    attributes: W({
      telemetry: s,
      attributes: {
        ...Oe({ operationId: "ai.embedMany", telemetry: s }),
        ...l,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((c) => JSON.stringify(c))
        }
      }
    }),
    tracer: u,
    fn: async (c) => {
      const d = e.maxEmbeddingsPerCall;
      if (d == null) {
        const { embeddings: g, usage: p } = await i(() => Me({
          name: "ai.embedMany.doEmbed",
          attributes: W({
            telemetry: s,
            attributes: {
              ...Oe({
                operationId: "ai.embedMany.doEmbed",
                telemetry: s
              }),
              ...l,
              // specific settings that only make sense on the outer level:
              "ai.values": {
                input: () => t.map((f) => JSON.stringify(f))
              }
            }
          }),
          tracer: u,
          fn: async (f) => {
            var w;
            const k = await e.doEmbed({
              values: t,
              abortSignal: n,
              headers: a
            }), b = k.embeddings, x = (w = k.usage) != null ? w : { tokens: NaN };
            return f.setAttributes(
              W({
                telemetry: s,
                attributes: {
                  "ai.embeddings": {
                    output: () => b.map((S) => JSON.stringify(S))
                  },
                  "ai.usage.tokens": x.tokens
                }
              })
            ), { embeddings: b, usage: x };
          }
        }));
        return c.setAttributes(
          W({
            telemetry: s,
            attributes: {
              "ai.embeddings": {
                output: () => g.map((f) => JSON.stringify(f))
              },
              "ai.usage.tokens": p.tokens
            }
          })
        ), new Za({ values: t, embeddings: g, usage: p });
      }
      const m = Td(t, d), _ = [];
      let v = 0;
      for (const g of m) {
        const { embeddings: p, usage: f } = await i(() => Me({
          name: "ai.embedMany.doEmbed",
          attributes: W({
            telemetry: s,
            attributes: {
              ...Oe({
                operationId: "ai.embedMany.doEmbed",
                telemetry: s
              }),
              ...l,
              // specific settings that only make sense on the outer level:
              "ai.values": {
                input: () => g.map((w) => JSON.stringify(w))
              }
            }
          }),
          tracer: u,
          fn: async (w) => {
            var k;
            const b = await e.doEmbed({
              values: g,
              abortSignal: n,
              headers: a
            }), x = b.embeddings, S = (k = b.usage) != null ? k : { tokens: NaN };
            return w.setAttributes(
              W({
                telemetry: s,
                attributes: {
                  "ai.embeddings": {
                    output: () => x.map(($) => JSON.stringify($))
                  },
                  "ai.usage.tokens": S.tokens
                }
              })
            ), { embeddings: x, usage: S };
          }
        }));
        _.push(...p), v += f.tokens;
      }
      return c.setAttributes(
        W({
          telemetry: s,
          attributes: {
            "ai.embeddings": {
              output: () => _.map((g) => JSON.stringify(g))
            },
            "ai.usage.tokens": v
          }
        })
      ), new Za({
        values: t,
        embeddings: _,
        usage: { tokens: v }
      });
    }
  });
}
var Za = class {
  constructor(e) {
    this.values = e.values, this.embeddings = e.embeddings, this.usage = e.usage;
  }
}, To = "AI_NoImageGeneratedError", So = `vercel.ai.error.${To}`, Sd = Symbol.for(So), Io, Id = class extends j {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: r
  }) {
    super({ name: To, message: e, cause: t }), this[Io] = !0, this.responses = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, So);
  }
};
Io = Sd;
var fn = class {
  constructor({
    data: e,
    mimeType: t
  }) {
    const r = e instanceof Uint8Array;
    this.base64Data = r ? void 0 : e, this.uint8ArrayData = r ? e : void 0, this.mimeType = t;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = Mt(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = cn(this.base64Data)), this.uint8ArrayData;
  }
}, Cd = class extends fn {
  constructor(e) {
    super(e), this.type = "file";
  }
}, Co = [
  {
    mimeType: "image/gif",
    bytesPrefix: [71, 73, 70],
    base64Prefix: "R0lG"
  },
  {
    mimeType: "image/png",
    bytesPrefix: [137, 80, 78, 71],
    base64Prefix: "iVBORw"
  },
  {
    mimeType: "image/jpeg",
    bytesPrefix: [255, 216],
    base64Prefix: "/9j/"
  },
  {
    mimeType: "image/webp",
    bytesPrefix: [82, 73, 70, 70],
    base64Prefix: "UklGRg"
  },
  {
    mimeType: "image/bmp",
    bytesPrefix: [66, 77],
    base64Prefix: "Qk"
  },
  {
    mimeType: "image/tiff",
    bytesPrefix: [73, 73, 42, 0],
    base64Prefix: "SUkqAA"
  },
  {
    mimeType: "image/tiff",
    bytesPrefix: [77, 77, 0, 42],
    base64Prefix: "TU0AKg"
  },
  {
    mimeType: "image/avif",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      97,
      118,
      105,
      102
    ],
    base64Prefix: "AAAAIGZ0eXBhdmlm"
  },
  {
    mimeType: "image/heic",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      104,
      101,
      105,
      99
    ],
    base64Prefix: "AAAAIGZ0eXBoZWlj"
  }
], Ro = [
  {
    mimeType: "audio/mpeg",
    bytesPrefix: [255, 251],
    base64Prefix: "//s="
  },
  {
    mimeType: "audio/wav",
    bytesPrefix: [82, 73, 70, 70],
    base64Prefix: "UklGR"
  },
  {
    mimeType: "audio/ogg",
    bytesPrefix: [79, 103, 103, 83],
    base64Prefix: "T2dnUw"
  },
  {
    mimeType: "audio/flac",
    bytesPrefix: [102, 76, 97, 67],
    base64Prefix: "ZkxhQw"
  },
  {
    mimeType: "audio/aac",
    bytesPrefix: [64, 21, 0, 0],
    base64Prefix: "QBUA"
  },
  {
    mimeType: "audio/mp4",
    bytesPrefix: [102, 116, 121, 112],
    base64Prefix: "ZnR5cA"
  }
], Rd = (e) => {
  const t = typeof e == "string" ? cn(e) : e, r = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
  return t.slice(r + 10);
};
function Ed(e) {
  return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && // 'I'
  e[1] === 68 && // 'D'
  e[2] === 51 ? Rd(e) : e;
}
function hn({
  data: e,
  signatures: t
}) {
  const r = Ed(e);
  for (const n of t)
    if (typeof r == "string" ? r.startsWith(n.base64Prefix) : r.length >= n.bytesPrefix.length && n.bytesPrefix.every(
      (a, s) => r[s] === a
    ))
      return n.mimeType;
}
async function gh({
  model: e,
  prompt: t,
  n: r = 1,
  size: n,
  aspectRatio: a,
  seed: s,
  providerOptions: o,
  maxRetries: i,
  abortSignal: l,
  headers: u
}) {
  var c;
  const { retry: d } = _t({ maxRetries: i }), m = (c = e.maxImagesPerCall) != null ? c : 1, _ = Math.ceil(r / m), v = Array.from({ length: _ }, (k, b) => {
    if (b < _ - 1)
      return m;
    const x = r % m;
    return x === 0 ? m : x;
  }), g = await Promise.all(
    v.map(
      async (k) => d(
        () => e.doGenerate({
          prompt: t,
          n: k,
          abortSignal: l,
          headers: u,
          size: n,
          aspectRatio: a,
          seed: s,
          providerOptions: o ?? {}
        })
      )
    )
  ), p = [], f = [], w = [];
  for (const k of g)
    p.push(
      ...k.images.map(
        (b) => {
          var x;
          return new fn({
            data: b,
            mimeType: (x = hn({
              data: b,
              signatures: Co
            })) != null ? x : "image/png"
          });
        }
      )
    ), f.push(...k.warnings), w.push(k.response);
  if (!p.length)
    throw new Id({ responses: w });
  return new Ad({ images: p, warnings: f, responses: w });
}
var Ad = class {
  constructor(e) {
    this.images = e.images, this.warnings = e.warnings, this.responses = e.responses;
  }
  get image() {
    return this.images[0];
  }
}, Eo = "AI_NoObjectGeneratedError", Ao = `vercel.ai.error.${Eo}`, Nd = Symbol.for(Ao), No, dt = class extends j {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: n,
    usage: a,
    finishReason: s
  }) {
    super({ name: Eo, message: e, cause: t }), this[No] = !0, this.text = r, this.response = n, this.usage = a, this.finishReason = s;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ao);
  }
};
No = Nd;
var Po = "AI_DownloadError", Oo = `vercel.ai.error.${Po}`, Pd = Symbol.for(Oo), Mo, Nn = class extends j {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: Po, message: a, cause: n }), this[Mo] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, Oo);
  }
};
Mo = Pd;
async function jo({ url: e }) {
  var t;
  const r = e.toString();
  try {
    const n = await fetch(r);
    if (!n.ok)
      throw new Nn({
        url: r,
        statusCode: n.status,
        statusText: n.statusText
      });
    return {
      data: new Uint8Array(await n.arrayBuffer()),
      mimeType: (t = n.headers.get("content-type")) != null ? t : void 0
    };
  } catch (n) {
    throw Nn.isInstance(n) ? n : new Nn({ url: r, cause: n });
  }
}
var $o = "AI_InvalidDataContentError", Do = `vercel.ai.error.${$o}`, Od = Symbol.for(Do), qo, Va = class extends j {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: $o, message: r, cause: t }), this[qo] = !0, this.content = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Do);
  }
};
qo = Od;
var Uo = ge([
  h(),
  en(Uint8Array),
  en(ArrayBuffer),
  Qs(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function gn(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? Mt(new Uint8Array(e)) : Mt(e);
}
function Sr(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return cn(e);
    } catch (t) {
      throw new Va({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Va({ content: e });
}
function Md(e) {
  try {
    return new TextDecoder().decode(e);
  } catch {
    throw new Error("Error decoding Uint8Array to text");
  }
}
var Lo = "AI_InvalidMessageRoleError", Fo = `vercel.ai.error.${Lo}`, jd = Symbol.for(Fo), Zo, $d = class extends j {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: Lo, message: t }), this[Zo] = !0, this.role = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Fo);
  }
};
Zo = jd;
function Dd(e) {
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
async function Yt({
  prompt: e,
  modelSupportsImageUrls: t = !0,
  modelSupportsUrl: r = () => !1,
  downloadImplementation: n = jo
}) {
  const a = await Ud(
    e.messages,
    n,
    t,
    r
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (s) => qd(s, a)
    )
  ];
}
function qd(e, t) {
  var r, n, a, s, o, i;
  const l = e.role;
  switch (l) {
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
        content: e.content.map((u) => Ld(u, t)).filter((u) => u.type !== "text" || u.text !== ""),
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
          (u) => u.type !== "text" || u.text !== ""
        ).map((u) => {
          var c;
          const d = (c = u.providerOptions) != null ? c : u.experimental_providerMetadata;
          switch (u.type) {
            case "file":
              return {
                type: "file",
                data: u.data instanceof URL ? u.data : gn(u.data),
                filename: u.filename,
                mimeType: u.mimeType,
                providerMetadata: d
              };
            case "reasoning":
              return {
                type: "reasoning",
                text: u.text,
                signature: u.signature,
                providerMetadata: d
              };
            case "redacted-reasoning":
              return {
                type: "redacted-reasoning",
                data: u.data,
                providerMetadata: d
              };
            case "text":
              return {
                type: "text",
                text: u.text,
                providerMetadata: d
              };
            case "tool-call":
              return {
                type: "tool-call",
                toolCallId: u.toolCallId,
                toolName: u.toolName,
                args: u.args,
                providerMetadata: d
              };
          }
        }),
        providerMetadata: (o = e.providerOptions) != null ? o : e.experimental_providerMetadata
      };
    case "tool":
      return {
        role: "tool",
        content: e.content.map((u) => {
          var c;
          return {
            type: "tool-result",
            toolCallId: u.toolCallId,
            toolName: u.toolName,
            result: u.result,
            content: u.experimental_content,
            isError: u.isError,
            providerMetadata: (c = u.providerOptions) != null ? c : u.experimental_providerMetadata
          };
        }),
        providerMetadata: (i = e.providerOptions) != null ? i : e.experimental_providerMetadata
      };
    default: {
      const u = l;
      throw new $d({ role: u });
    }
  }
}
async function Ud(e, t, r, n) {
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
function Ld(e, t) {
  var r, n, a, s;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerMetadata: (r = e.providerOptions) != null ? r : e.experimental_providerMetadata
    };
  let o = e.mimeType, i, l, u;
  const c = e.type;
  switch (c) {
    case "image":
      i = e.image;
      break;
    case "file":
      i = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${c}`);
  }
  try {
    l = typeof i == "string" ? new URL(i) : i;
  } catch {
    l = i;
  }
  if (l instanceof URL)
    if (l.protocol === "data:") {
      const { mimeType: d, base64Content: m } = Dd(
        l.toString()
      );
      if (d == null || m == null)
        throw new Error(`Invalid data URL format in part ${c}`);
      o = d, u = Sr(m);
    } else {
      const d = t[l.toString()];
      d ? (u = d.data, o ?? (o = d.mimeType)) : u = l;
    }
  else
    u = Sr(l);
  switch (c) {
    case "image":
      return u instanceof Uint8Array && (o = (n = hn({
        data: u,
        signatures: Co
      })) != null ? n : o), {
        type: "image",
        image: u,
        mimeType: o,
        providerMetadata: (a = e.providerOptions) != null ? a : e.experimental_providerMetadata
      };
    case "file": {
      if (o == null)
        throw new Error("Mime type is missing for file part");
      return {
        type: "file",
        data: u instanceof Uint8Array ? gn(u) : u,
        filename: e.filename,
        mimeType: o,
        providerMetadata: (s = e.providerOptions) != null ? s : e.experimental_providerMetadata
      };
    }
  }
}
function Xt({
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
      throw new ne({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be an integer"
      });
    if (e < 1)
      throw new ne({
        parameter: "maxTokens",
        value: e,
        message: "maxTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new ne({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new ne({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new ne({
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (a != null && typeof a != "number")
    throw new ne({
      parameter: "presencePenalty",
      value: a,
      message: "presencePenalty must be a number"
    });
  if (s != null && typeof s != "number")
    throw new ne({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number"
    });
  if (i != null && !Number.isInteger(i))
    throw new ne({
      parameter: "seed",
      value: i,
      message: "seed must be an integer"
    });
  return {
    maxTokens: e,
    // TODO v5 remove default 0 for temperature
    temperature: t ?? 0,
    topP: r,
    topK: n,
    presencePenalty: a,
    frequencyPenalty: s,
    stopSequences: o != null && o.length > 0 ? o : void 0,
    seed: i
  };
}
function Ba(e) {
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
        let i, l, u;
        try {
          [i, l] = s.url.split(","), u = i.split(";")[0].split(":")[1];
        } catch {
          throw new Error(`Error processing data URL: ${s.url}`);
        }
        if (u == null || l == null)
          throw new Error(`Invalid data URL format: ${s.url}`);
        if ((r = s.contentType) != null && r.startsWith("image/"))
          a.push({
            type: "image",
            image: Sr(l)
          });
        else if ((n = s.contentType) != null && n.startsWith("text/"))
          a.push({
            type: "text",
            text: Md(
              Sr(l)
            )
          });
        else {
          if (!s.contentType)
            throw new Error(
              "If the attachment is not an image or text, it must specify a content type"
            );
          a.push({
            type: "file",
            data: l,
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
var Vo = "AI_MessageConversionError", Bo = `vercel.ai.error.${Vo}`, Fd = Symbol.for(Bo), Jo, Pn = class extends j {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: Vo, message: t }), this[Jo] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Bo);
  }
};
Jo = Fd;
function Zd(e, t) {
  var r, n;
  const a = (r = t == null ? void 0 : t.tools) != null ? r : {}, s = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o], l = o === e.length - 1, { role: u, content: c, experimental_attachments: d } = i;
    switch (u) {
      case "system": {
        s.push({
          role: "system",
          content: c
        });
        break;
      }
      case "user": {
        if (i.parts == null)
          s.push({
            role: "user",
            content: d ? [
              { type: "text", text: c },
              ...Ba(d)
            ] : c
          });
        else {
          const m = i.parts.filter((_) => _.type === "text").map((_) => ({
            type: "text",
            text: _.text
          }));
          s.push({
            role: "user",
            content: d ? [...m, ...Ba(d)] : m
          });
        }
        break;
      }
      case "assistant": {
        if (i.parts != null) {
          let v = function() {
            const w = [];
            for (const b of f)
              switch (b.type) {
                case "file":
                case "text": {
                  w.push(b);
                  break;
                }
                case "reasoning": {
                  for (const x of b.details)
                    switch (x.type) {
                      case "text":
                        w.push({
                          type: "reasoning",
                          text: x.text,
                          signature: x.signature
                        });
                        break;
                      case "redacted":
                        w.push({
                          type: "redacted-reasoning",
                          data: x.data
                        });
                        break;
                    }
                  break;
                }
                case "tool-invocation":
                  w.push({
                    type: "tool-call",
                    toolCallId: b.toolInvocation.toolCallId,
                    toolName: b.toolInvocation.toolName,
                    args: b.toolInvocation.args
                  });
                  break;
                default: {
                  const x = b;
                  throw new Error(`Unsupported part: ${x}`);
                }
              }
            s.push({
              role: "assistant",
              content: w
            });
            const k = f.filter(
              (b) => b.type === "tool-invocation"
            ).map((b) => b.toolInvocation);
            k.length > 0 && s.push({
              role: "tool",
              content: k.map(
                (b) => {
                  if (!("result" in b))
                    throw new Pn({
                      originalMessage: i,
                      message: "ToolInvocation must have a result: " + JSON.stringify(b)
                    });
                  const { toolCallId: x, toolName: S, result: $ } = b, E = a[S];
                  return (E == null ? void 0 : E.experimental_toToolResultContent) != null ? {
                    type: "tool-result",
                    toolCallId: x,
                    toolName: S,
                    result: E.experimental_toToolResultContent($),
                    experimental_content: E.experimental_toToolResultContent($)
                  } : {
                    type: "tool-result",
                    toolCallId: x,
                    toolName: S,
                    result: $
                  };
                }
              )
            }), f = [], p = !1, g++;
          }, g = 0, p = !1, f = [];
          for (const w of i.parts)
            switch (w.type) {
              case "text": {
                p && v(), f.push(w);
                break;
              }
              case "file":
              case "reasoning": {
                f.push(w);
                break;
              }
              case "tool-invocation": {
                ((n = w.toolInvocation.step) != null ? n : 0) !== g && v(), f.push(w), p = !0;
                break;
              }
            }
          v();
          break;
        }
        const m = i.toolInvocations;
        if (m == null || m.length === 0) {
          s.push({ role: "assistant", content: c });
          break;
        }
        const _ = m.reduce((v, g) => {
          var p;
          return Math.max(v, (p = g.step) != null ? p : 0);
        }, 0);
        for (let v = 0; v <= _; v++) {
          const g = m.filter(
            (p) => {
              var f;
              return ((f = p.step) != null ? f : 0) === v;
            }
          );
          g.length !== 0 && (s.push({
            role: "assistant",
            content: [
              ...l && c && v === 0 ? [{ type: "text", text: c }] : [],
              ...g.map(
                ({ toolCallId: p, toolName: f, args: w }) => ({
                  type: "tool-call",
                  toolCallId: p,
                  toolName: f,
                  args: w
                })
              )
            ]
          }), s.push({
            role: "tool",
            content: g.map((p) => {
              if (!("result" in p))
                throw new Pn({
                  originalMessage: i,
                  message: "ToolInvocation must have a result: " + JSON.stringify(p)
                });
              const { toolCallId: f, toolName: w, result: k } = p, b = a[w];
              return (b == null ? void 0 : b.experimental_toToolResultContent) != null ? {
                type: "tool-result",
                toolCallId: f,
                toolName: w,
                result: b.experimental_toToolResultContent(k),
                experimental_content: b.experimental_toToolResultContent(k)
              } : {
                type: "tool-result",
                toolCallId: f,
                toolName: w,
                result: k
              };
            })
          }));
        }
        c && !l && s.push({ role: "assistant", content: c });
        break;
      }
      case "data":
        break;
      default: {
        const m = u;
        throw new Pn({
          originalMessage: i,
          message: `Unsupported role: ${m}`
        });
      }
    }
  }
  return s;
}
var Bn = Hl(
  () => ge([
    Gl(),
    h(),
    R(),
    Je(),
    yr(h(), Bn),
    F(Bn)
  ])
), ve = yr(
  h(),
  yr(h(), Bn)
), Vd = F(
  ge([
    y({ type: A("text"), text: h() }),
    y({
      type: A("image"),
      data: h(),
      mimeType: h().optional()
    })
  ])
), zo = y({
  type: A("text"),
  text: h(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Bd = y({
  type: A("image"),
  image: ge([Uo, en(URL)]),
  mimeType: h().optional(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Go = y({
  type: A("file"),
  data: ge([Uo, en(URL)]),
  filename: h().optional(),
  mimeType: h(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Jd = y({
  type: A("reasoning"),
  text: h(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), zd = y({
  type: A("redacted-reasoning"),
  data: h(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Gd = y({
  type: A("tool-call"),
  toolCallId: h(),
  toolName: h(),
  args: Nr(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Hd = y({
  type: A("tool-result"),
  toolCallId: h(),
  toolName: h(),
  result: Nr(),
  content: Vd.optional(),
  isError: Je().optional(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Wd = y({
  role: A("system"),
  content: h(),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Kd = y({
  role: A("user"),
  content: ge([
    h(),
    F(ge([zo, Bd, Go]))
  ]),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Yd = y({
  role: A("assistant"),
  content: ge([
    h(),
    F(
      ge([
        zo,
        Go,
        Jd,
        zd,
        Gd
      ])
    )
  ]),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Xd = y({
  role: A("tool"),
  content: F(Hd),
  providerOptions: ve.optional(),
  experimental_providerMetadata: ve.optional()
}), Qd = ge([
  Wd,
  Kd,
  Yd,
  Xd
]);
function Qt({
  prompt: e,
  tools: t
}) {
  if (e.prompt == null && e.messages == null)
    throw new ut({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new ut({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new ut({
      prompt: e,
      message: "system must be a string"
    });
  if (e.prompt != null) {
    if (typeof e.prompt != "string")
      throw new ut({
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
    const n = ep(e.messages) === "ui-messages" ? Zd(e.messages, {
      tools: t
    }) : e.messages;
    if (n.length === 0)
      throw new ut({
        prompt: e,
        message: "messages must not be empty"
      });
    const a = ht({
      value: n,
      schema: F(Qd)
    });
    if (!a.success)
      throw new ut({
        prompt: e,
        message: [
          "message must be a CoreMessage or a UI message",
          `Validation error: ${a.error.message}`
        ].join(`
`),
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
function ep(e) {
  if (!Array.isArray(e))
    throw new ut({
      prompt: e,
      message: [
        "messages must be an array of CoreMessage or UIMessage",
        `Received non-array value: ${JSON.stringify(e)}`
      ].join(`
`),
      cause: e
    });
  if (e.length === 0)
    return "messages";
  const t = e.map(tp);
  if (t.some((n) => n === "has-ui-specific-parts"))
    return "ui-messages";
  const r = t.findIndex(
    (n) => n !== "has-core-specific-parts" && n !== "message"
  );
  if (r === -1)
    return "messages";
  throw new ut({
    prompt: e,
    message: [
      "messages must be an array of CoreMessage or UIMessage",
      `Received message of type: "${t[r]}" at index ${r}`,
      `messages[${r}]: ${JSON.stringify(e[r])}`
    ].join(`
`),
    cause: e
  });
}
function tp(e) {
  return typeof e == "object" && e !== null && (e.role === "function" || // UI-only role
  e.role === "data" || // UI-only role
  "toolInvocations" in e || // UI-specific field
  "parts" in e || // UI-specific field
  "experimental_attachments" in e) ? "has-ui-specific-parts" : typeof e == "object" && e !== null && "content" in e && (Array.isArray(e.content) || // Core messages can have array content
  "experimental_providerMetadata" in e || "providerOptions" in e) ? "has-core-specific-parts" : typeof e == "object" && e !== null && "role" in e && "content" in e && typeof e.content == "string" && ["system", "user", "assistant", "tool"].includes(e.role) ? "message" : "other";
}
function ct({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Ho(e, t) {
  return {
    promptTokens: e.promptTokens + t.promptTokens,
    completionTokens: e.completionTokens + t.completionTokens,
    totalTokens: e.totalTokens + t.totalTokens
  };
}
var rp = "JSON schema:", np = "You MUST answer with a JSON object that matches the JSON schema above.", ap = "You MUST answer with JSON.";
function Ir({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? rp : void 0,
  schemaSuffix: n = t != null ? np : ap
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
function Pt(e) {
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
var sp = {
  type: "no-schema",
  jsonSchema: void 0,
  validatePartialResult({ value: e, textDelta: t }) {
    return { success: !0, value: { partial: e, textDelta: t } };
  },
  validateFinalResult(e, t) {
    return e === void 0 ? {
      success: !1,
      error: new dt({
        message: "No object generated: response did not match schema.",
        text: t.text,
        response: t.response,
        usage: t.usage,
        finishReason: t.finishReason
      })
    } : { success: !0, value: e };
  },
  createElementStream() {
    throw new se({
      functionality: "element streams in no-schema mode"
    });
  }
}, op = (e) => ({
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
    return ht({ value: t, schema: e });
  },
  createElementStream() {
    throw new se({
      functionality: "element streams in object mode"
    });
  }
}), ip = (e) => {
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
      if (!jn(n) || !xa(n.elements))
        return {
          success: !1,
          error: new ft({
            value: n,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const l = n.elements, u = [];
      for (let m = 0; m < l.length; m++) {
        const _ = l[m], v = ht({ value: _, schema: e });
        if (!(m === l.length - 1 && !o)) {
          if (!v.success)
            return v;
          u.push(v.value);
        }
      }
      const c = (i = a == null ? void 0 : a.length) != null ? i : 0;
      let d = "";
      return s && (d += "["), c > 0 && (d += ","), d += u.slice(c).map((m) => JSON.stringify(m)).join(","), o && (d += "]"), {
        success: !0,
        value: {
          partial: u,
          textDelta: d
        }
      };
    },
    validateFinalResult(n) {
      if (!jn(n) || !xa(n.elements))
        return {
          success: !1,
          error: new ft({
            value: n,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const a = n.elements;
      for (const s of a) {
        const o = ht({ value: s, schema: e });
        if (!o.success)
          return o;
      }
      return { success: !0, value: a };
    },
    createElementStream(n) {
      let a = 0;
      return Pt(
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
}, lp = (e) => ({
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
    if (!jn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new ft({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const r = t.result;
    return e.includes(r) ? { success: !0, value: r } : {
      success: !1,
      error: new ft({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  validatePartialResult() {
    throw new se({
      functionality: "partial results in enum mode"
    });
  },
  createElementStream() {
    throw new se({
      functionality: "element streams in enum mode"
    });
  }
});
function Wo({
  output: e,
  schema: t,
  enumValues: r
}) {
  switch (e) {
    case "object":
      return op(Kt(t));
    case "array":
      return ip(Kt(t));
    case "enum":
      return lp(r);
    case "no-schema":
      return sp;
    default: {
      const n = e;
      throw new Error(`Unsupported output: ${n}`);
    }
  }
}
function Ko({
  output: e,
  mode: t,
  schema: r,
  schemaName: n,
  schemaDescription: a,
  enumValues: s
}) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new ne({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t === "auto" || t === "tool")
      throw new ne({
        parameter: "mode",
        value: t,
        message: 'Mode must be "json" for no-schema output.'
      });
    if (r != null)
      throw new ne({
        parameter: "schema",
        value: r,
        message: "Schema is not supported for no-schema output."
      });
    if (a != null)
      throw new ne({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for no-schema output."
      });
    if (n != null)
      throw new ne({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for no-schema output."
      });
    if (s != null)
      throw new ne({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (r == null)
      throw new ne({
        parameter: "schema",
        value: r,
        message: "Schema is required for object output."
      });
    if (s != null)
      throw new ne({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (r == null)
      throw new ne({
        parameter: "schema",
        value: r,
        message: "Element schema is required for array output."
      });
    if (s != null)
      throw new ne({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (r != null)
      throw new ne({
        parameter: "schema",
        value: r,
        message: "Schema is not supported for enum output."
      });
    if (a != null)
      throw new ne({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for enum output."
      });
    if (n != null)
      throw new ne({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for enum output."
      });
    if (s == null)
      throw new ne({
        parameter: "enumValues",
        value: s,
        message: "Enum values are required for enum output."
      });
    for (const o of s)
      if (typeof o != "string")
        throw new ne({
          parameter: "enumValues",
          value: o,
          message: "Enum values must be strings."
        });
  }
}
function yn(e) {
  const t = e.map((r) => ({
    ...r,
    content: typeof r.content == "string" ? r.content : r.content.map(up)
  }));
  return JSON.stringify(t);
}
function up(e) {
  return e.type === "image" ? {
    ...e,
    image: e.image instanceof Uint8Array ? gn(e.image) : e.image
  } : e;
}
var cp = Ft({ prefix: "aiobj", size: 24 });
async function yh({
  model: e,
  enum: t,
  // rename bc enum is reserved by typescript
  schema: r,
  schemaName: n,
  schemaDescription: a,
  mode: s,
  output: o = "object",
  system: i,
  prompt: l,
  messages: u,
  maxRetries: c,
  abortSignal: d,
  headers: m,
  experimental_repairText: _,
  experimental_telemetry: v,
  experimental_providerMetadata: g,
  providerOptions: p = g,
  _internal: {
    generateId: f = cp,
    currentDate: w = () => /* @__PURE__ */ new Date()
  } = {},
  ...k
}) {
  Ko({
    output: o,
    mode: s,
    schema: r,
    schemaName: n,
    schemaDescription: a,
    enumValues: t
  });
  const { maxRetries: b, retry: x } = _t({ maxRetries: c }), S = Wo({
    output: o,
    schema: r,
    enumValues: t
  });
  S.type === "no-schema" && s === void 0 && (s = "json");
  const $ = tr({
    model: e,
    telemetry: v,
    headers: m,
    settings: { ...k, maxRetries: b }
  }), E = rr(v);
  return Me({
    name: "ai.generateObject",
    attributes: W({
      telemetry: v,
      attributes: {
        ...Oe({
          operationId: "ai.generateObject",
          telemetry: v
        }),
        ...$,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system: i, prompt: l, messages: u })
        },
        "ai.schema": S.jsonSchema != null ? { input: () => JSON.stringify(S.jsonSchema) } : void 0,
        "ai.schema.name": n,
        "ai.schema.description": a,
        "ai.settings.output": S.type,
        "ai.settings.mode": s
      }
    }),
    tracer: E,
    fn: async (P) => {
      var G, ce, be, me;
      (s === "auto" || s == null) && (s = e.defaultObjectGenerationMode);
      let ie, de, ye, fe, H, ue, Y, U, Ce;
      switch (s) {
        case "json": {
          const ee = Qt({
            prompt: {
              system: S.jsonSchema == null ? Ir({ prompt: i }) : e.supportsStructuredOutputs ? i : Ir({
                prompt: i,
                schema: S.jsonSchema
              }),
              prompt: l,
              messages: u
            },
            tools: void 0
          }), oe = await Yt({
            prompt: ee,
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: (G = e.supportsUrl) == null ? void 0 : G.bind(e)
            // support 'this' context
          }), re = await x(
            () => Me({
              name: "ai.generateObject.doGenerate",
              attributes: W({
                telemetry: v,
                attributes: {
                  ...Oe({
                    operationId: "ai.generateObject.doGenerate",
                    telemetry: v
                  }),
                  ...$,
                  "ai.prompt.format": {
                    input: () => ee.type
                  },
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(oe)
                  },
                  "ai.settings.mode": s,
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": e.provider,
                  "gen_ai.request.model": e.modelId,
                  "gen_ai.request.frequency_penalty": k.frequencyPenalty,
                  "gen_ai.request.max_tokens": k.maxTokens,
                  "gen_ai.request.presence_penalty": k.presencePenalty,
                  "gen_ai.request.temperature": k.temperature,
                  "gen_ai.request.top_k": k.topK,
                  "gen_ai.request.top_p": k.topP
                }
              }),
              tracer: E,
              fn: async (te) => {
                var q, he, Ae, Ne, je, B;
                const D = await e.doGenerate({
                  mode: {
                    type: "object-json",
                    schema: S.jsonSchema,
                    name: n,
                    description: a
                  },
                  ...Xt(k),
                  inputFormat: ee.type,
                  prompt: oe,
                  providerMetadata: p,
                  abortSignal: d,
                  headers: m
                }), Z = {
                  id: (he = (q = D.response) == null ? void 0 : q.id) != null ? he : f(),
                  timestamp: (Ne = (Ae = D.response) == null ? void 0 : Ae.timestamp) != null ? Ne : w(),
                  modelId: (B = (je = D.response) == null ? void 0 : je.modelId) != null ? B : e.modelId
                };
                if (D.text === void 0)
                  throw new dt({
                    message: "No object generated: the model did not return a response.",
                    response: Z,
                    usage: ct(D.usage),
                    finishReason: D.finishReason
                  });
                return te.setAttributes(
                  W({
                    telemetry: v,
                    attributes: {
                      "ai.response.finishReason": D.finishReason,
                      "ai.response.object": { output: () => D.text },
                      "ai.response.id": Z.id,
                      "ai.response.model": Z.modelId,
                      "ai.response.timestamp": Z.timestamp.toISOString(),
                      "ai.usage.promptTokens": D.usage.promptTokens,
                      "ai.usage.completionTokens": D.usage.completionTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [D.finishReason],
                      "gen_ai.response.id": Z.id,
                      "gen_ai.response.model": Z.modelId,
                      "gen_ai.usage.prompt_tokens": D.usage.promptTokens,
                      "gen_ai.usage.completion_tokens": D.usage.completionTokens
                    }
                  })
                ), { ...D, objectText: D.text, responseData: Z };
              }
            })
          );
          ie = re.objectText, de = re.finishReason, ye = re.usage, fe = re.warnings, H = re.rawResponse, U = re.logprobs, Ce = re.providerMetadata, Y = (ce = re.request) != null ? ce : {}, ue = re.responseData;
          break;
        }
        case "tool": {
          const ee = Qt({
            prompt: { system: i, prompt: l, messages: u },
            tools: void 0
          }), oe = await Yt({
            prompt: ee,
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: (be = e.supportsUrl) == null ? void 0 : be.bind(e)
            // support 'this' context,
          }), re = ee.type, te = await x(
            () => Me({
              name: "ai.generateObject.doGenerate",
              attributes: W({
                telemetry: v,
                attributes: {
                  ...Oe({
                    operationId: "ai.generateObject.doGenerate",
                    telemetry: v
                  }),
                  ...$,
                  "ai.prompt.format": {
                    input: () => re
                  },
                  "ai.prompt.messages": {
                    input: () => yn(oe)
                  },
                  "ai.settings.mode": s,
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": e.provider,
                  "gen_ai.request.model": e.modelId,
                  "gen_ai.request.frequency_penalty": k.frequencyPenalty,
                  "gen_ai.request.max_tokens": k.maxTokens,
                  "gen_ai.request.presence_penalty": k.presencePenalty,
                  "gen_ai.request.temperature": k.temperature,
                  "gen_ai.request.top_k": k.topK,
                  "gen_ai.request.top_p": k.topP
                }
              }),
              tracer: E,
              fn: async (q) => {
                var he, Ae, Ne, je, B, D, Z, we;
                const X = await e.doGenerate({
                  mode: {
                    type: "object-tool",
                    tool: {
                      type: "function",
                      name: n ?? "json",
                      description: a ?? "Respond with a JSON object.",
                      parameters: S.jsonSchema
                    }
                  },
                  ...Xt(k),
                  inputFormat: re,
                  prompt: oe,
                  providerMetadata: p,
                  abortSignal: d,
                  headers: m
                }), T = (Ae = (he = X.toolCalls) == null ? void 0 : he[0]) == null ? void 0 : Ae.args, le = {
                  id: (je = (Ne = X.response) == null ? void 0 : Ne.id) != null ? je : f(),
                  timestamp: (D = (B = X.response) == null ? void 0 : B.timestamp) != null ? D : w(),
                  modelId: (we = (Z = X.response) == null ? void 0 : Z.modelId) != null ? we : e.modelId
                };
                if (T === void 0)
                  throw new dt({
                    message: "No object generated: the tool was not called.",
                    response: le,
                    usage: ct(X.usage),
                    finishReason: X.finishReason
                  });
                return q.setAttributes(
                  W({
                    telemetry: v,
                    attributes: {
                      "ai.response.finishReason": X.finishReason,
                      "ai.response.object": { output: () => T },
                      "ai.response.id": le.id,
                      "ai.response.model": le.modelId,
                      "ai.response.timestamp": le.timestamp.toISOString(),
                      "ai.usage.promptTokens": X.usage.promptTokens,
                      "ai.usage.completionTokens": X.usage.completionTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [X.finishReason],
                      "gen_ai.response.id": le.id,
                      "gen_ai.response.model": le.modelId,
                      "gen_ai.usage.input_tokens": X.usage.promptTokens,
                      "gen_ai.usage.output_tokens": X.usage.completionTokens
                    }
                  })
                ), { ...X, objectText: T, responseData: le };
              }
            })
          );
          ie = te.objectText, de = te.finishReason, ye = te.usage, fe = te.warnings, H = te.rawResponse, U = te.logprobs, Ce = te.providerMetadata, Y = (me = te.request) != null ? me : {}, ue = te.responseData;
          break;
        }
        case void 0:
          throw new Error(
            "Model does not have a default object generation mode."
          );
        default: {
          const ee = s;
          throw new Error(`Unsupported mode: ${ee}`);
        }
      }
      function qe(ee) {
        const oe = Ot({ text: ee });
        if (!oe.success)
          throw new dt({
            message: "No object generated: could not parse the response.",
            cause: oe.error,
            text: ee,
            response: ue,
            usage: ct(ye),
            finishReason: de
          });
        const re = S.validateFinalResult(
          oe.value,
          {
            text: ee,
            response: ue,
            usage: ct(ye)
          }
        );
        if (!re.success)
          throw new dt({
            message: "No object generated: response did not match schema.",
            cause: re.error,
            text: ee,
            response: ue,
            usage: ct(ye),
            finishReason: de
          });
        return re.value;
      }
      let Re;
      try {
        Re = qe(ie);
      } catch (ee) {
        if (_ != null && dt.isInstance(ee) && (mr.isInstance(ee.cause) || ft.isInstance(ee.cause))) {
          const oe = await _({
            text: ie,
            error: ee.cause
          });
          if (oe === null)
            throw ee;
          Re = qe(oe);
        } else
          throw ee;
      }
      return P.setAttributes(
        W({
          telemetry: v,
          attributes: {
            "ai.response.finishReason": de,
            "ai.response.object": {
              output: () => JSON.stringify(Re)
            },
            "ai.usage.promptTokens": ye.promptTokens,
            "ai.usage.completionTokens": ye.completionTokens
          }
        })
      ), new dp({
        object: Re,
        finishReason: de,
        usage: ct(ye),
        warnings: fe,
        request: Y,
        response: {
          ...ue,
          headers: H == null ? void 0 : H.headers,
          body: H == null ? void 0 : H.body
        },
        logprobs: U,
        providerMetadata: Ce
      });
    }
  });
}
var dp = class {
  constructor(e) {
    this.object = e.object, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.experimental_providerMetadata = e.providerMetadata, this.response = e.response, this.request = e.request, this.logprobs = e.logprobs;
  }
  toJsonResponse(e) {
    var t;
    return new Response(JSON.stringify(this.object), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: Lt(e == null ? void 0 : e.headers, {
        contentType: "application/json; charset=utf-8"
      })
    });
  }
}, xe = class {
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
function Ja() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function Yo() {
  let e = [], t = null, r = !1, n = Ja();
  const a = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = Ja(), await n.promise, a();
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
function Xo() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
var pp = Ft({ prefix: "aiobj", size: 24 });
function vh({
  model: e,
  schema: t,
  schemaName: r,
  schemaDescription: n,
  mode: a,
  output: s = "object",
  system: o,
  prompt: i,
  messages: l,
  maxRetries: u,
  abortSignal: c,
  headers: d,
  experimental_telemetry: m,
  experimental_providerMetadata: _,
  providerOptions: v = _,
  onError: g,
  onFinish: p,
  _internal: {
    generateId: f = pp,
    currentDate: w = () => /* @__PURE__ */ new Date(),
    now: k = Xo
  } = {},
  ...b
}) {
  Ko({
    output: s,
    mode: a,
    schema: t,
    schemaName: r,
    schemaDescription: n
  });
  const x = Wo({ output: s, schema: t });
  return x.type === "no-schema" && a === void 0 && (a = "json"), new mp({
    model: e,
    telemetry: m,
    headers: d,
    settings: b,
    maxRetries: u,
    abortSignal: c,
    outputStrategy: x,
    system: o,
    prompt: i,
    messages: l,
    schemaName: r,
    schemaDescription: n,
    providerOptions: v,
    mode: a,
    onError: g,
    onFinish: p,
    generateId: f,
    currentDate: w,
    now: k
  });
}
var mp = class {
  constructor({
    model: e,
    headers: t,
    telemetry: r,
    settings: n,
    maxRetries: a,
    abortSignal: s,
    outputStrategy: o,
    system: i,
    prompt: l,
    messages: u,
    schemaName: c,
    schemaDescription: d,
    providerOptions: m,
    mode: _,
    onError: v,
    onFinish: g,
    generateId: p,
    currentDate: f,
    now: w
  }) {
    this.objectPromise = new xe(), this.usagePromise = new xe(), this.providerMetadataPromise = new xe(), this.warningsPromise = new xe(), this.requestPromise = new xe(), this.responsePromise = new xe();
    const { maxRetries: k, retry: b } = _t({
      maxRetries: a
    }), x = tr({
      model: e,
      telemetry: r,
      headers: t,
      settings: { ...n, maxRetries: k }
    }), S = rr(r), $ = this, E = Yo(), P = new TransformStream({
      transform(G, ce) {
        ce.enqueue(G), G.type === "error" && (v == null || v({ error: G.error }));
      }
    });
    this.baseStream = E.stream.pipeThrough(P), Me({
      name: "ai.streamObject",
      attributes: W({
        telemetry: r,
        attributes: {
          ...Oe({
            operationId: "ai.streamObject",
            telemetry: r
          }),
          ...x,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: i, prompt: l, messages: u })
          },
          "ai.schema": o.jsonSchema != null ? { input: () => JSON.stringify(o.jsonSchema) } : void 0,
          "ai.schema.name": c,
          "ai.schema.description": d,
          "ai.settings.output": o.type,
          "ai.settings.mode": _
        }
      }),
      tracer: S,
      endWhenDone: !1,
      fn: async (G) => {
        var ce, be;
        (_ === "auto" || _ == null) && (_ = e.defaultObjectGenerationMode);
        let me, ie;
        switch (_) {
          case "json": {
            const B = Qt({
              prompt: {
                system: o.jsonSchema == null ? Ir({ prompt: i }) : e.supportsStructuredOutputs ? i : Ir({
                  prompt: i,
                  schema: o.jsonSchema
                }),
                prompt: l,
                messages: u
              },
              tools: void 0
            });
            me = {
              mode: {
                type: "object-json",
                schema: o.jsonSchema,
                name: c,
                description: d
              },
              ...Xt(n),
              inputFormat: B.type,
              prompt: await Yt({
                prompt: B,
                modelSupportsImageUrls: e.supportsImageUrls,
                modelSupportsUrl: (ce = e.supportsUrl) == null ? void 0 : ce.bind(e)
                // support 'this' context
              }),
              providerMetadata: m,
              abortSignal: s,
              headers: t
            }, ie = {
              transform: (D, Z) => {
                switch (D.type) {
                  case "text-delta":
                    Z.enqueue(D.textDelta);
                    break;
                  case "response-metadata":
                  case "finish":
                  case "error":
                    Z.enqueue(D);
                    break;
                }
              }
            };
            break;
          }
          case "tool": {
            const B = Qt({
              prompt: { system: i, prompt: l, messages: u },
              tools: void 0
            });
            me = {
              mode: {
                type: "object-tool",
                tool: {
                  type: "function",
                  name: c ?? "json",
                  description: d ?? "Respond with a JSON object.",
                  parameters: o.jsonSchema
                }
              },
              ...Xt(n),
              inputFormat: B.type,
              prompt: await Yt({
                prompt: B,
                modelSupportsImageUrls: e.supportsImageUrls,
                modelSupportsUrl: (be = e.supportsUrl) == null ? void 0 : be.bind(e)
                // support 'this' context,
              }),
              providerMetadata: m,
              abortSignal: s,
              headers: t
            }, ie = {
              transform(D, Z) {
                switch (D.type) {
                  case "tool-call-delta":
                    Z.enqueue(D.argsTextDelta);
                    break;
                  case "response-metadata":
                  case "finish":
                  case "error":
                    Z.enqueue(D);
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
            const B = _;
            throw new Error(`Unsupported mode: ${B}`);
          }
        }
        const {
          result: { stream: de, warnings: ye, rawResponse: fe, request: H },
          doStreamSpan: ue,
          startTimestampMs: Y
        } = await b(
          () => Me({
            name: "ai.streamObject.doStream",
            attributes: W({
              telemetry: r,
              attributes: {
                ...Oe({
                  operationId: "ai.streamObject.doStream",
                  telemetry: r
                }),
                ...x,
                "ai.prompt.format": {
                  input: () => me.inputFormat
                },
                "ai.prompt.messages": {
                  input: () => yn(me.prompt)
                },
                "ai.settings.mode": _,
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
            tracer: S,
            endWhenDone: !1,
            fn: async (B) => ({
              startTimestampMs: w(),
              doStreamSpan: B,
              result: await e.doStream(me)
            })
          })
        );
        $.requestPromise.resolve(H ?? {});
        let U, Ce, qe, Re, ee, oe = "", re = "", te = {
          id: p(),
          timestamp: f(),
          modelId: e.modelId
        }, q, he, Ae = !0, Ne = !0;
        const je = de.pipeThrough(new TransformStream(ie)).pipeThrough(
          new TransformStream({
            async transform(B, D) {
              var Z, we, X;
              if (Ae) {
                const T = w() - Y;
                Ae = !1, ue.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": T
                }), ue.setAttributes({
                  "ai.stream.msToFirstChunk": T
                });
              }
              if (typeof B == "string") {
                oe += B, re += B;
                const { value: T, state: le } = oo(oe);
                if (T !== void 0 && !rn(q, T)) {
                  const Ee = o.validatePartialResult({
                    value: T,
                    textDelta: re,
                    latestObject: he,
                    isFirstDelta: Ne,
                    isFinalDelta: le === "successful-parse"
                  });
                  Ee.success && !rn(
                    he,
                    Ee.value.partial
                  ) && (q = T, he = Ee.value.partial, D.enqueue({
                    type: "object",
                    object: he
                  }), D.enqueue({
                    type: "text-delta",
                    textDelta: Ee.value.textDelta
                  }), re = "", Ne = !1);
                }
                return;
              }
              switch (B.type) {
                case "response-metadata": {
                  te = {
                    id: (Z = B.id) != null ? Z : te.id,
                    timestamp: (we = B.timestamp) != null ? we : te.timestamp,
                    modelId: (X = B.modelId) != null ? X : te.modelId
                  };
                  break;
                }
                case "finish": {
                  re !== "" && D.enqueue({ type: "text-delta", textDelta: re }), Ce = B.finishReason, U = ct(B.usage), qe = B.providerMetadata, D.enqueue({ ...B, usage: U, response: te }), $.usagePromise.resolve(U), $.providerMetadataPromise.resolve(qe), $.responsePromise.resolve({
                    ...te,
                    headers: fe == null ? void 0 : fe.headers
                  });
                  const T = o.validateFinalResult(
                    q,
                    {
                      text: oe,
                      response: te,
                      usage: U
                    }
                  );
                  T.success ? (Re = T.value, $.objectPromise.resolve(Re)) : (ee = new dt({
                    message: "No object generated: response did not match schema.",
                    cause: T.error,
                    text: oe,
                    response: te,
                    usage: U,
                    finishReason: Ce
                  }), $.objectPromise.reject(ee));
                  break;
                }
                default: {
                  D.enqueue(B);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(B) {
              try {
                const D = U ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                ue.setAttributes(
                  W({
                    telemetry: r,
                    attributes: {
                      "ai.response.finishReason": Ce,
                      "ai.response.object": {
                        output: () => JSON.stringify(Re)
                      },
                      "ai.response.id": te.id,
                      "ai.response.model": te.modelId,
                      "ai.response.timestamp": te.timestamp.toISOString(),
                      "ai.usage.promptTokens": D.promptTokens,
                      "ai.usage.completionTokens": D.completionTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [Ce],
                      "gen_ai.response.id": te.id,
                      "gen_ai.response.model": te.modelId,
                      "gen_ai.usage.input_tokens": D.promptTokens,
                      "gen_ai.usage.output_tokens": D.completionTokens
                    }
                  })
                ), ue.end(), G.setAttributes(
                  W({
                    telemetry: r,
                    attributes: {
                      "ai.usage.promptTokens": D.promptTokens,
                      "ai.usage.completionTokens": D.completionTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(Re)
                      }
                    }
                  })
                ), await (g == null ? void 0 : g({
                  usage: D,
                  object: Re,
                  error: ee,
                  response: {
                    ...te,
                    headers: fe == null ? void 0 : fe.headers
                  },
                  warnings: ye,
                  providerMetadata: qe,
                  experimental_providerMetadata: qe
                }));
              } catch (D) {
                B.enqueue({ type: "error", error: D });
              } finally {
                G.end();
              }
            }
          })
        );
        E.addStream(je);
      }
    }).catch((G) => {
      E.addStream(
        new ReadableStream({
          start(ce) {
            ce.enqueue({ type: "error", error: G }), ce.close();
          }
        })
      );
    }).finally(() => {
      E.close();
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
    return Pt(
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
    return Pt(
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
    return Pt(this.baseStream);
  }
  pipeTextStreamToResponse(e, t) {
    sn({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: an(t == null ? void 0 : t.headers, {
        contentType: "text/plain; charset=utf-8"
      }),
      stream: this.textStream.pipeThrough(new TextEncoderStream())
    });
  }
  toTextStreamResponse(e) {
    var t;
    return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: Lt(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, Qo = "AI_NoOutputSpecifiedError", ei = `vercel.ai.error.${Qo}`, fp = Symbol.for(ei), ti, ri = class extends j {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: Qo, message: e }), this[ti] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, ei);
  }
};
ti = fp;
var ni = "AI_ToolExecutionError", ai = `vercel.ai.error.${ni}`, hp = Symbol.for(ai), si, oi = class extends j {
  constructor({
    toolArgs: e,
    toolName: t,
    toolCallId: r,
    cause: n,
    message: a = `Error executing tool ${t}: ${Rr(n)}`
  }) {
    super({ name: ni, message: a, cause: n }), this[si] = !0, this.toolArgs = e, this.toolName = t, this.toolCallId = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, ai);
  }
};
si = hp;
function gp(e) {
  return e != null && Object.keys(e).length > 0;
}
function ii({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return gp(e) ? {
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
            parameters: Kt(s.parameters).jsonSchema
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
var yp = /^([\s\S]*?)(\s+)(\S*)$/;
function li(e) {
  const t = e.match(yp);
  return t ? { prefix: t[1], whitespace: t[2], suffix: t[3] } : void 0;
}
function vp(e) {
  const t = li(e);
  return t ? t.prefix + t.whitespace : e;
}
var ui = "AI_InvalidToolArgumentsError", ci = `vercel.ai.error.${ui}`, _p = Symbol.for(ci), di, pi = class extends j {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: r,
    message: n = `Invalid arguments for tool ${t}: ${Rr(
      r
    )}`
  }) {
    super({ name: ui, message: n, cause: r }), this[di] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, ci);
  }
};
di = _p;
var mi = "AI_NoSuchToolError", fi = `vercel.ai.error.${mi}`, bp = Symbol.for(fi), hi, Jn = class extends j {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: mi, message: r }), this[hi] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, fi);
  }
};
hi = bp;
var gi = "AI_ToolCallRepairError", yi = `vercel.ai.error.${gi}`, wp = Symbol.for(yi), vi, xp = class extends j {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${Rr(e)}`
  }) {
    super({ name: gi, message: r, cause: e }), this[vi] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, yi);
  }
};
vi = wp;
async function _i({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: n,
  messages: a
}) {
  if (t == null)
    throw new Jn({ toolName: e.toolName });
  try {
    return await za({ toolCall: e, tools: t });
  } catch (s) {
    if (r == null || !(Jn.isInstance(s) || pi.isInstance(s)))
      throw s;
    let o = null;
    try {
      o = await r({
        toolCall: e,
        tools: t,
        parameterSchema: ({ toolName: i }) => Kt(t[i].parameters).jsonSchema,
        system: n,
        messages: a,
        error: s
      });
    } catch (i) {
      throw new xp({
        cause: i,
        originalError: s
      });
    }
    if (o == null)
      throw s;
    return await za({ toolCall: o, tools: t });
  }
}
async function za({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, n = t[r];
  if (n == null)
    throw new Jn({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const a = Kt(n.parameters), s = e.args.trim() === "" ? ht({ value: {}, schema: a }) : Ot({ text: e.args, schema: a });
  if (s.success === !1)
    throw new pi({
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
function zn(e) {
  const t = e.filter((r) => r.type === "text").map((r) => r.text).join("");
  return t.length > 0 ? t : void 0;
}
function Gn({
  text: e = "",
  files: t,
  reasoning: r,
  tools: n,
  toolCalls: a,
  toolResults: s,
  messageId: o,
  generateMessageId: i
}) {
  const l = [], u = [];
  return r.length > 0 && u.push(
    ...r.map(
      (c) => c.type === "text" ? { ...c, type: "reasoning" } : { ...c, type: "redacted-reasoning" }
    )
  ), t.length > 0 && u.push(
    ...t.map((c) => ({
      type: "file",
      data: c.base64,
      mimeType: c.mimeType
    }))
  ), e.length > 0 && u.push({ type: "text", text: e }), a.length > 0 && u.push(...a), u.length > 0 && l.push({
    role: "assistant",
    content: u,
    id: o
  }), s.length > 0 && l.push({
    role: "tool",
    id: i(),
    content: s.map((c) => {
      const d = n[c.toolName];
      return (d == null ? void 0 : d.experimental_toToolResultContent) != null ? {
        type: "tool-result",
        toolCallId: c.toolCallId,
        toolName: c.toolName,
        result: d.experimental_toToolResultContent(c.result),
        experimental_content: d.experimental_toToolResultContent(
          c.result
        )
      } : {
        type: "tool-result",
        toolCallId: c.toolCallId,
        toolName: c.toolName,
        result: c.result
      };
    })
  }), l;
}
var kp = Ft({
  prefix: "aitxt",
  size: 24
}), Tp = Ft({
  prefix: "msg",
  size: 24
});
async function _h({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: s,
  maxRetries: o,
  abortSignal: i,
  headers: l,
  maxSteps: u = 1,
  experimental_generateMessageId: c = Tp,
  experimental_output: d,
  experimental_continueSteps: m = !1,
  experimental_telemetry: _,
  experimental_providerMetadata: v,
  providerOptions: g = v,
  experimental_activeTools: p,
  experimental_prepareStep: f,
  experimental_repairToolCall: w,
  _internal: {
    generateId: k = kp,
    currentDate: b = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: x,
  ...S
}) {
  var $;
  if (u < 1)
    throw new ne({
      parameter: "maxSteps",
      value: u,
      message: "maxSteps must be at least 1"
    });
  const { maxRetries: E, retry: P } = _t({ maxRetries: o }), G = tr({
    model: e,
    telemetry: _,
    headers: l,
    settings: { ...S, maxRetries: E }
  }), ce = Qt({
    prompt: {
      system: ($ = d == null ? void 0 : d.injectIntoSystemPrompt({ system: n, model: e })) != null ? $ : n,
      prompt: a,
      messages: s
    },
    tools: t
  }), be = rr(_);
  return Me({
    name: "ai.generateText",
    attributes: W({
      telemetry: _,
      attributes: {
        ...Oe({
          operationId: "ai.generateText",
          telemetry: _
        }),
        ...G,
        // model:
        "ai.model.provider": e.provider,
        "ai.model.id": e.modelId,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system: n, prompt: a, messages: s })
        },
        "ai.settings.maxSteps": u
      }
    }),
    tracer: be,
    fn: async (me) => {
      var ie, de, ye, fe, H, ue, Y, U, Ce, qe, Re, ee, oe, re;
      const te = Xt(S);
      let q, he = [], Ae = [], Ne = [], je = 0;
      const B = [];
      let D = "";
      const Z = [], we = [];
      let X = {
        completionTokens: 0,
        promptTokens: 0,
        totalTokens: 0
      }, T = "initial";
      do {
        const le = je === 0 ? ce.type : "messages", Ee = [
          ...ce.messages,
          ...B
        ], Te = await (f == null ? void 0 : f({
          model: e,
          steps: we,
          maxSteps: u,
          stepNumber: je
        })), Vt = (ie = Te == null ? void 0 : Te.toolChoice) != null ? ie : r, _n = (de = Te == null ? void 0 : Te.experimental_activeTools) != null ? de : p, Ue = (ye = Te == null ? void 0 : Te.model) != null ? ye : e, nr = await Yt({
          prompt: {
            type: le,
            system: ce.system,
            messages: Ee
          },
          modelSupportsImageUrls: Ue.supportsImageUrls,
          modelSupportsUrl: (fe = Ue.supportsUrl) == null ? void 0 : fe.bind(Ue)
          // support 'this' context
        }), bt = {
          type: "regular",
          ...ii({
            tools: t,
            toolChoice: Vt,
            activeTools: _n
          })
        };
        q = await P(
          () => Me({
            name: "ai.generateText.doGenerate",
            attributes: W({
              telemetry: _,
              attributes: {
                ...Oe({
                  operationId: "ai.generateText.doGenerate",
                  telemetry: _
                }),
                ...G,
                // model:
                "ai.model.provider": Ue.provider,
                "ai.model.id": Ue.modelId,
                // prompt:
                "ai.prompt.format": { input: () => le },
                "ai.prompt.messages": {
                  input: () => yn(nr)
                },
                "ai.prompt.tools": {
                  // convert the language model level tools:
                  input: () => {
                    var Ze;
                    return (Ze = bt.tools) == null ? void 0 : Ze.map((Ge) => JSON.stringify(Ge));
                  }
                },
                "ai.prompt.toolChoice": {
                  input: () => bt.toolChoice != null ? JSON.stringify(bt.toolChoice) : void 0
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": Ue.provider,
                "gen_ai.request.model": Ue.modelId,
                "gen_ai.request.frequency_penalty": S.frequencyPenalty,
                "gen_ai.request.max_tokens": S.maxTokens,
                "gen_ai.request.presence_penalty": S.presencePenalty,
                "gen_ai.request.stop_sequences": S.stopSequences,
                "gen_ai.request.temperature": S.temperature,
                "gen_ai.request.top_k": S.topK,
                "gen_ai.request.top_p": S.topP
              }
            }),
            tracer: be,
            fn: async (Ze) => {
              var Ge, sr, jr, or, Ye, Bt;
              const Pe = await Ue.doGenerate({
                mode: bt,
                ...te,
                inputFormat: le,
                responseFormat: d == null ? void 0 : d.responseFormat({ model: e }),
                prompt: nr,
                providerMetadata: g,
                abortSignal: i,
                headers: l
              }), it = {
                id: (sr = (Ge = Pe.response) == null ? void 0 : Ge.id) != null ? sr : k(),
                timestamp: (or = (jr = Pe.response) == null ? void 0 : jr.timestamp) != null ? or : b(),
                modelId: (Bt = (Ye = Pe.response) == null ? void 0 : Ye.modelId) != null ? Bt : Ue.modelId
              };
              return Ze.setAttributes(
                W({
                  telemetry: _,
                  attributes: {
                    "ai.response.finishReason": Pe.finishReason,
                    "ai.response.text": {
                      output: () => Pe.text
                    },
                    "ai.response.toolCalls": {
                      output: () => JSON.stringify(Pe.toolCalls)
                    },
                    "ai.response.id": it.id,
                    "ai.response.model": it.modelId,
                    "ai.response.timestamp": it.timestamp.toISOString(),
                    "ai.usage.promptTokens": Pe.usage.promptTokens,
                    "ai.usage.completionTokens": Pe.usage.completionTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [Pe.finishReason],
                    "gen_ai.response.id": it.id,
                    "gen_ai.response.model": it.modelId,
                    "gen_ai.usage.input_tokens": Pe.usage.promptTokens,
                    "gen_ai.usage.output_tokens": Pe.usage.completionTokens
                  }
                })
              ), { ...Pe, response: it };
            }
          })
        ), he = await Promise.all(
          ((H = q.toolCalls) != null ? H : []).map(
            (Ze) => _i({
              toolCall: Ze,
              tools: t,
              repairToolCall: w,
              system: n,
              messages: Ee
            })
          )
        ), Ae = t == null ? [] : await Sp({
          toolCalls: he,
          tools: t,
          tracer: be,
          telemetry: _,
          messages: Ee,
          abortSignal: i
        });
        const ar = ct(
          q.usage
        );
        X = Ho(X, ar);
        let st = "done";
        ++je < u && (m && q.finishReason === "length" && // only use continue when there are no tool calls:
        he.length === 0 ? st = "continue" : (
          // there are tool calls:
          he.length > 0 && // all current tool calls have results:
          Ae.length === he.length && (st = "tool-result")
        ));
        const It = (ue = q.text) != null ? ue : "", Mr = T === "continue" && // only for continue steps
        D.trimEnd() !== D ? It.trimStart() : It, ot = st === "continue" ? vp(Mr) : Mr;
        if (D = st === "continue" || T === "continue" ? D + ot : ot, Ne = Ga(
          q.reasoning
        ), Z.push(...(Y = q.sources) != null ? Y : []), T === "continue") {
          const Ze = B[B.length - 1];
          typeof Ze.content == "string" ? Ze.content += ot : Ze.content.push({
            text: ot,
            type: "text"
          });
        } else
          B.push(
            ...Gn({
              text: D,
              files: On(q.files),
              reasoning: Ga(q.reasoning),
              tools: t ?? {},
              toolCalls: he,
              toolResults: Ae,
              messageId: c(),
              generateMessageId: c
            })
          );
        const Ct = {
          stepType: T,
          text: ot,
          // TODO v5: rename reasoning to reasoningText (and use reasoning for composite array)
          reasoning: zn(Ne),
          reasoningDetails: Ne,
          files: On(q.files),
          sources: (U = q.sources) != null ? U : [],
          toolCalls: he,
          toolResults: Ae,
          finishReason: q.finishReason,
          usage: ar,
          warnings: q.warnings,
          logprobs: q.logprobs,
          request: (Ce = q.request) != null ? Ce : {},
          response: {
            ...q.response,
            headers: (qe = q.rawResponse) == null ? void 0 : qe.headers,
            body: (Re = q.rawResponse) == null ? void 0 : Re.body,
            // deep clone msgs to avoid mutating past messages in multi-step:
            messages: structuredClone(B)
          },
          providerMetadata: q.providerMetadata,
          experimental_providerMetadata: q.providerMetadata,
          isContinued: st === "continue"
        };
        we.push(Ct), await (x == null ? void 0 : x(Ct)), T = st;
      } while (T !== "done");
      return me.setAttributes(
        W({
          telemetry: _,
          attributes: {
            "ai.response.finishReason": q.finishReason,
            "ai.response.text": {
              output: () => q.text
            },
            "ai.response.toolCalls": {
              output: () => JSON.stringify(q.toolCalls)
            },
            "ai.usage.promptTokens": q.usage.promptTokens,
            "ai.usage.completionTokens": q.usage.completionTokens
          }
        })
      ), new Ip({
        text: D,
        files: On(q.files),
        reasoning: zn(Ne),
        reasoningDetails: Ne,
        sources: Z,
        outputResolver: () => {
          if (d == null)
            throw new ri();
          return d.parseOutput(
            { text: D },
            {
              response: q.response,
              usage: X,
              finishReason: q.finishReason
            }
          );
        },
        toolCalls: he,
        toolResults: Ae,
        finishReason: q.finishReason,
        usage: X,
        warnings: q.warnings,
        request: (ee = q.request) != null ? ee : {},
        response: {
          ...q.response,
          headers: (oe = q.rawResponse) == null ? void 0 : oe.headers,
          body: (re = q.rawResponse) == null ? void 0 : re.body,
          messages: B
        },
        logprobs: q.logprobs,
        steps: we,
        providerMetadata: q.providerMetadata
      });
    }
  });
}
async function Sp({
  toolCalls: e,
  tools: t,
  tracer: r,
  telemetry: n,
  messages: a,
  abortSignal: s
}) {
  return (await Promise.all(
    e.map(async ({ toolCallId: i, toolName: l, args: u }) => {
      const c = t[l];
      if ((c == null ? void 0 : c.execute) == null)
        return;
      const d = await Me({
        name: "ai.toolCall",
        attributes: W({
          telemetry: n,
          attributes: {
            ...Oe({
              operationId: "ai.toolCall",
              telemetry: n
            }),
            "ai.toolCall.name": l,
            "ai.toolCall.id": i,
            "ai.toolCall.args": {
              output: () => JSON.stringify(u)
            }
          }
        }),
        tracer: r,
        fn: async (m) => {
          try {
            const _ = await c.execute(u, {
              toolCallId: i,
              messages: a,
              abortSignal: s
            });
            try {
              m.setAttributes(
                W({
                  telemetry: n,
                  attributes: {
                    "ai.toolCall.result": {
                      output: () => JSON.stringify(_)
                    }
                  }
                })
              );
            } catch {
            }
            return _;
          } catch (_) {
            throw new oi({
              toolCallId: i,
              toolName: l,
              toolArgs: u,
              cause: _
            });
          }
        }
      });
      return {
        type: "tool-result",
        toolCallId: i,
        toolName: l,
        args: u,
        result: d
      };
    })
  )).filter(
    (i) => i != null
  );
}
var Ip = class {
  constructor(e) {
    this.text = e.text, this.files = e.files, this.reasoning = e.reasoning, this.reasoningDetails = e.reasoningDetails, this.toolCalls = e.toolCalls, this.toolResults = e.toolResults, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.request = e.request, this.response = e.response, this.steps = e.steps, this.experimental_providerMetadata = e.providerMetadata, this.providerMetadata = e.providerMetadata, this.logprobs = e.logprobs, this.outputResolver = e.outputResolver, this.sources = e.sources;
  }
  get experimental_output() {
    return this.outputResolver();
  }
};
function Ga(e) {
  return e == null ? [] : typeof e == "string" ? [{ type: "text", text: e }] : e;
}
function On(e) {
  var t;
  return (t = e == null ? void 0 : e.map((r) => new fn(r))) != null ? t : [];
}
var Cp = {};
ca(Cp, {
  object: () => Op,
  text: () => Pp
});
var bi = "AI_InvalidStreamPartError", wi = `vercel.ai.error.${bi}`, Rp = Symbol.for(wi), xi, Ep = class extends j {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: bi, message: t }), this[xi] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, wi);
  }
};
xi = Rp;
var Ap = "AI_MCPClientError", ki = `vercel.ai.error.${Ap}`, Np = Symbol.for(ki), Ti, Se = class extends j {
  constructor({
    name: e = "MCPClientError",
    message: t,
    cause: r
  }) {
    super({ name: e, message: t, cause: r }), this[Ti] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, ki);
  }
};
Ti = Np;
var Pp = () => ({
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
}), Op = ({
  schema: e
}) => {
  const t = Kt(e);
  return {
    type: "object",
    responseFormat: ({ model: r }) => ({
      type: "json",
      schema: r.supportsStructuredOutputs ? t.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system: r, model: n }) {
      return n.supportsStructuredOutputs ? r : Ir({
        prompt: r,
        schema: t.jsonSchema
      });
    },
    parsePartial({ text: r }) {
      const n = oo(r);
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
      const a = Ot({ text: r });
      if (!a.success)
        throw new dt({
          message: "No object generated: could not parse the response.",
          cause: a.error,
          text: r,
          response: n.response,
          usage: n.usage,
          finishReason: n.finishReason
        });
      const s = ht({
        value: a.value,
        schema: t
      });
      if (!s.success)
        throw new dt({
          message: "No object generated: response did not match schema.",
          cause: s.error,
          text: r,
          response: n.response,
          usage: n.usage,
          finishReason: n.finishReason
        });
      return s.value;
    }
  };
}, Mp = {
  word: /\S+\s+/m,
  line: /\n+/m
};
function bh({
  delayInMs: e = 10,
  chunking: t = "word",
  _internal: { delay: r = Qn } = {}
} = {}) {
  let n;
  if (typeof t == "function")
    n = (a) => {
      const s = t(a);
      if (s == null)
        return null;
      if (!s.length)
        throw new Error("Chunking function must return a non-empty string.");
      if (!a.startsWith(s))
        throw new Error(
          `Chunking function must return a match that is a prefix of the buffer. Received: "${s}" expected to start with "${a}"`
        );
      return s;
    };
  else {
    const a = typeof t == "string" ? Mp[t] : t;
    if (a == null)
      throw new Kn({
        argument: "chunking",
        message: `Chunking must be "word" or "line" or a RegExp. Received: ${t}`
      });
    n = (s) => {
      const o = a.exec(s);
      return o ? s.slice(0, o.index) + (o == null ? void 0 : o[0]) : null;
    };
  }
  return () => {
    let a = "";
    return new TransformStream({
      async transform(s, o) {
        if (s.type !== "text-delta") {
          a.length > 0 && (o.enqueue({ type: "text-delta", textDelta: a }), a = ""), o.enqueue(s);
          return;
        }
        a += s.textDelta;
        let i;
        for (; (i = n(a)) != null; )
          o.enqueue({ type: "text-delta", textDelta: i }), a = a.slice(i.length), await r(e);
      }
    });
  };
}
function Si(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
async function jp({
  stream: e,
  onError: t
}) {
  const r = e.getReader();
  try {
    for (; ; ) {
      const { done: n } = await r.read();
      if (n)
        break;
    }
  } catch (n) {
    t == null || t(n);
  } finally {
    r.releaseLock();
  }
}
function da(e, t) {
  const r = e.getReader(), n = t.getReader();
  let a, s, o = !1, i = !1;
  async function l(c) {
    try {
      a == null && (a = r.read());
      const d = await a;
      a = void 0, d.done ? c.close() : c.enqueue(d.value);
    } catch (d) {
      c.error(d);
    }
  }
  async function u(c) {
    try {
      s == null && (s = n.read());
      const d = await s;
      s = void 0, d.done ? c.close() : c.enqueue(d.value);
    } catch (d) {
      c.error(d);
    }
  }
  return new ReadableStream({
    async pull(c) {
      try {
        if (o) {
          await u(c);
          return;
        }
        if (i) {
          await l(c);
          return;
        }
        a == null && (a = r.read()), s == null && (s = n.read());
        const { result: d, reader: m } = await Promise.race([
          a.then((_) => ({ result: _, reader: r })),
          s.then((_) => ({ result: _, reader: n }))
        ]);
        d.done || c.enqueue(d.value), m === r ? (a = void 0, d.done && (await u(c), o = !0)) : (s = void 0, d.done && (i = !0, await l(c)));
      } catch (d) {
        c.error(d);
      }
    },
    cancel() {
      r.cancel(), n.cancel();
    }
  });
}
function $p({
  tools: e,
  generatorStream: t,
  toolCallStreaming: r,
  tracer: n,
  telemetry: a,
  system: s,
  messages: o,
  abortSignal: i,
  repairToolCall: l
}) {
  let u = null;
  const c = new ReadableStream({
    start(f) {
      u = f;
    }
  }), d = {}, m = /* @__PURE__ */ new Set();
  let _ = !1, v;
  function g() {
    _ && m.size === 0 && (v != null && u.enqueue(v), u.close());
  }
  const p = new TransformStream({
    async transform(f, w) {
      const k = f.type;
      switch (k) {
        case "text-delta":
        case "reasoning":
        case "reasoning-signature":
        case "redacted-reasoning":
        case "source":
        case "response-metadata":
        case "error": {
          w.enqueue(f);
          break;
        }
        case "file": {
          w.enqueue(
            new Cd({
              data: f.data,
              mimeType: f.mimeType
            })
          );
          break;
        }
        case "tool-call-delta": {
          r && (d[f.toolCallId] || (w.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: f.toolCallId,
            toolName: f.toolName
          }), d[f.toolCallId] = !0), w.enqueue({
            type: "tool-call-delta",
            toolCallId: f.toolCallId,
            toolName: f.toolName,
            argsTextDelta: f.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          try {
            const b = await _i({
              toolCall: f,
              tools: e,
              repairToolCall: l,
              system: s,
              messages: o
            });
            w.enqueue(b);
            const x = e[b.toolName];
            if (x.execute != null) {
              const S = kt();
              m.add(S), Me({
                name: "ai.toolCall",
                attributes: W({
                  telemetry: a,
                  attributes: {
                    ...Oe({
                      operationId: "ai.toolCall",
                      telemetry: a
                    }),
                    "ai.toolCall.name": b.toolName,
                    "ai.toolCall.id": b.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(b.args)
                    }
                  }
                }),
                tracer: n,
                fn: async ($) => x.execute(b.args, {
                  toolCallId: b.toolCallId,
                  messages: o,
                  abortSignal: i
                }).then(
                  (E) => {
                    u.enqueue({
                      ...b,
                      type: "tool-result",
                      result: E
                    }), m.delete(S), g();
                    try {
                      $.setAttributes(
                        W({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(E)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (E) => {
                    u.enqueue({
                      type: "error",
                      error: new oi({
                        toolCallId: b.toolCallId,
                        toolName: b.toolName,
                        toolArgs: b.args,
                        cause: E
                      })
                    }), m.delete(S), g();
                  }
                )
              });
            }
          } catch (b) {
            u.enqueue({
              type: "error",
              error: b
            });
          }
          break;
        }
        case "finish": {
          v = {
            type: "finish",
            finishReason: f.finishReason,
            logprobs: f.logprobs,
            usage: ct(f.usage),
            experimental_providerMetadata: f.providerMetadata
          };
          break;
        }
        default: {
          const b = k;
          throw new Error(`Unhandled chunk type: ${b}`);
        }
      }
    },
    flush() {
      _ = !0, g();
    }
  });
  return new ReadableStream({
    async start(f) {
      return Promise.all([
        t.pipeThrough(p).pipeTo(
          new WritableStream({
            write(w) {
              f.enqueue(w);
            },
            close() {
            }
          })
        ),
        c.pipeTo(
          new WritableStream({
            write(w) {
              f.enqueue(w);
            },
            close() {
              f.close();
            }
          })
        )
      ]);
    }
  });
}
var Dp = Ft({
  prefix: "aitxt",
  size: 24
}), qp = Ft({
  prefix: "msg",
  size: 24
});
function wh({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: s,
  maxRetries: o,
  abortSignal: i,
  headers: l,
  maxSteps: u = 1,
  experimental_generateMessageId: c = qp,
  experimental_output: d,
  experimental_continueSteps: m = !1,
  experimental_telemetry: _,
  experimental_providerMetadata: v,
  providerOptions: g = v,
  experimental_toolCallStreaming: p = !1,
  toolCallStreaming: f = p,
  experimental_activeTools: w,
  experimental_repairToolCall: k,
  experimental_transform: b,
  onChunk: x,
  onError: S,
  onFinish: $,
  onStepFinish: E,
  _internal: {
    now: P = Xo,
    generateId: G = Dp,
    currentDate: ce = () => /* @__PURE__ */ new Date()
  } = {},
  ...be
}) {
  return new Lp({
    model: e,
    telemetry: _,
    headers: l,
    settings: be,
    maxRetries: o,
    abortSignal: i,
    system: n,
    prompt: a,
    messages: s,
    tools: t,
    toolChoice: r,
    toolCallStreaming: f,
    transforms: Si(b),
    activeTools: w,
    repairToolCall: k,
    maxSteps: u,
    output: d,
    continueSteps: m,
    providerOptions: g,
    onChunk: x,
    onError: S,
    onFinish: $,
    onStepFinish: E,
    now: P,
    currentDate: ce,
    generateId: G,
    generateMessageId: c
  });
}
function Up(e) {
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
        const l = JSON.stringify(i.partial);
        l !== n && (a({ controller: o, partialOutput: i.partial }), n = l);
      }
    },
    flush(s) {
      r.length > 0 && a({ controller: s });
    }
  });
}
var Lp = class {
  constructor({
    model: e,
    telemetry: t,
    headers: r,
    settings: n,
    maxRetries: a,
    abortSignal: s,
    system: o,
    prompt: i,
    messages: l,
    tools: u,
    toolChoice: c,
    toolCallStreaming: d,
    transforms: m,
    activeTools: _,
    repairToolCall: v,
    maxSteps: g,
    output: p,
    continueSteps: f,
    providerOptions: w,
    now: k,
    currentDate: b,
    generateId: x,
    generateMessageId: S,
    onChunk: $,
    onError: E,
    onFinish: P,
    onStepFinish: G
  }) {
    this.warningsPromise = new xe(), this.usagePromise = new xe(), this.finishReasonPromise = new xe(), this.providerMetadataPromise = new xe(), this.textPromise = new xe(), this.reasoningPromise = new xe(), this.reasoningDetailsPromise = new xe(), this.sourcesPromise = new xe(), this.filesPromise = new xe(), this.toolCallsPromise = new xe(), this.toolResultsPromise = new xe(), this.requestPromise = new xe(), this.responsePromise = new xe(), this.stepsPromise = new xe();
    var ce;
    if (g < 1)
      throw new ne({
        parameter: "maxSteps",
        value: g,
        message: "maxSteps must be at least 1"
      });
    this.output = p;
    let be = "", me = "", ie = "", de = [], ye = [], fe, H = [];
    const ue = [], Y = {
      id: x(),
      timestamp: b(),
      modelId: e.modelId,
      messages: []
    };
    let U = [], Ce = [], qe, Re, ee = "initial";
    const oe = [];
    let re;
    const te = new TransformStream({
      async transform(we, X) {
        X.enqueue(we);
        const { part: T } = we;
        if ((T.type === "text-delta" || T.type === "reasoning" || T.type === "source" || T.type === "tool-call" || T.type === "tool-result" || T.type === "tool-call-streaming-start" || T.type === "tool-call-delta") && await ($ == null ? void 0 : $({ chunk: T })), T.type === "error" && await (E == null ? void 0 : E({ error: T.error })), T.type === "text-delta" && (be += T.textDelta, me += T.textDelta, ie += T.textDelta), T.type === "reasoning" && (fe == null ? (fe = { type: "text", text: T.textDelta }, de.push(fe)) : fe.text += T.textDelta), T.type === "reasoning-signature") {
          if (fe == null)
            throw new j({
              name: "InvalidStreamPart",
              message: "reasoning-signature without reasoning"
            });
          fe.signature = T.signature, fe = void 0;
        }
        if (T.type === "redacted-reasoning" && de.push({ type: "redacted", data: T.data }), T.type === "file" && ye.push(T), T.type === "source" && (ue.push(T.source), H.push(T.source)), T.type === "tool-call" && U.push(T), T.type === "tool-result" && Ce.push(T), T.type === "step-finish") {
          const le = Gn({
            text: me,
            files: ye,
            reasoning: de,
            tools: u ?? {},
            toolCalls: U,
            toolResults: Ce,
            messageId: T.messageId,
            generateMessageId: S
          }), Ee = oe.length;
          let Te = "done";
          Ee + 1 < g && (f && T.finishReason === "length" && // only use continue when there are no tool calls:
          U.length === 0 ? Te = "continue" : (
            // there are tool calls:
            U.length > 0 && // all current tool calls have results:
            Ce.length === U.length && (Te = "tool-result")
          ));
          const Vt = {
            stepType: ee,
            text: be,
            reasoning: zn(de),
            reasoningDetails: de,
            files: ye,
            sources: H,
            toolCalls: U,
            toolResults: Ce,
            finishReason: T.finishReason,
            usage: T.usage,
            warnings: T.warnings,
            logprobs: T.logprobs,
            request: T.request,
            response: {
              ...T.response,
              messages: [...Y.messages, ...le]
            },
            providerMetadata: T.experimental_providerMetadata,
            experimental_providerMetadata: T.experimental_providerMetadata,
            isContinued: T.isContinued
          };
          await (G == null ? void 0 : G(Vt)), oe.push(Vt), U = [], Ce = [], be = "", H = [], de = [], ye = [], fe = void 0, Te !== "done" && (ee = Te), Te !== "continue" && (Y.messages.push(...le), me = "");
        }
        T.type === "finish" && (Y.id = T.response.id, Y.timestamp = T.response.timestamp, Y.modelId = T.response.modelId, Y.headers = T.response.headers, Re = T.usage, qe = T.finishReason);
      },
      async flush(we) {
        var X;
        try {
          if (oe.length === 0)
            return;
          const T = oe[oe.length - 1];
          Z.warningsPromise.resolve(T.warnings), Z.requestPromise.resolve(T.request), Z.responsePromise.resolve(T.response), Z.toolCallsPromise.resolve(T.toolCalls), Z.toolResultsPromise.resolve(T.toolResults), Z.providerMetadataPromise.resolve(
            T.experimental_providerMetadata
          ), Z.reasoningPromise.resolve(T.reasoning), Z.reasoningDetailsPromise.resolve(T.reasoningDetails);
          const le = qe ?? "unknown", Ee = Re ?? {
            completionTokens: NaN,
            promptTokens: NaN,
            totalTokens: NaN
          };
          Z.finishReasonPromise.resolve(le), Z.usagePromise.resolve(Ee), Z.textPromise.resolve(ie), Z.sourcesPromise.resolve(ue), Z.filesPromise.resolve(T.files), Z.stepsPromise.resolve(oe), await (P == null ? void 0 : P({
            finishReason: le,
            logprobs: void 0,
            usage: Ee,
            text: ie,
            reasoning: T.reasoning,
            reasoningDetails: T.reasoningDetails,
            files: T.files,
            sources: T.sources,
            toolCalls: T.toolCalls,
            toolResults: T.toolResults,
            request: (X = T.request) != null ? X : {},
            response: T.response,
            warnings: T.warnings,
            providerMetadata: T.providerMetadata,
            experimental_providerMetadata: T.experimental_providerMetadata,
            steps: oe
          })), re.setAttributes(
            W({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": le,
                "ai.response.text": { output: () => ie },
                "ai.response.toolCalls": {
                  output: () => {
                    var Te;
                    return (Te = T.toolCalls) != null && Te.length ? JSON.stringify(T.toolCalls) : void 0;
                  }
                },
                "ai.usage.promptTokens": Ee.promptTokens,
                "ai.usage.completionTokens": Ee.completionTokens
              }
            })
          );
        } catch (T) {
          we.error(T);
        } finally {
          re.end();
        }
      }
    }), q = Yo();
    this.addStream = q.addStream, this.closeStream = q.close;
    let he = q.stream;
    for (const we of m)
      he = he.pipeThrough(
        we({
          tools: u,
          stopStream() {
            q.terminate();
          }
        })
      );
    this.baseStream = he.pipeThrough(Up(p)).pipeThrough(te);
    const { maxRetries: Ae, retry: Ne } = _t({
      maxRetries: a
    }), je = rr(t), B = tr({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...n, maxRetries: Ae }
    }), D = Qt({
      prompt: {
        system: (ce = p == null ? void 0 : p.injectIntoSystemPrompt({ system: o, model: e })) != null ? ce : o,
        prompt: i,
        messages: l
      },
      tools: u
    }), Z = this;
    Me({
      name: "ai.streamText",
      attributes: W({
        telemetry: t,
        attributes: {
          ...Oe({ operationId: "ai.streamText", telemetry: t }),
          ...B,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: i, messages: l })
          },
          "ai.settings.maxSteps": g
        }
      }),
      tracer: je,
      endWhenDone: !1,
      fn: async (we) => {
        re = we;
        async function X({
          currentStep: T,
          responseMessages: le,
          usage: Ee,
          stepType: Te,
          previousStepText: Vt,
          hasLeadingWhitespace: _n,
          messageId: Ue
        }) {
          var nr;
          const bt = le.length === 0 ? D.type : "messages", ar = [
            ...D.messages,
            ...le
          ], st = await Yt({
            prompt: {
              type: bt,
              system: D.system,
              messages: ar
            },
            modelSupportsImageUrls: e.supportsImageUrls,
            modelSupportsUrl: (nr = e.supportsUrl) == null ? void 0 : nr.bind(e)
            // support 'this' context
          }), It = {
            type: "regular",
            ...ii({ tools: u, toolChoice: c, activeTools: _ })
          }, {
            result: { stream: Mr, warnings: ot, rawResponse: Ct, request: Ze },
            doStreamSpan: Ge,
            startTimestampMs: sr
          } = await Ne(
            () => Me({
              name: "ai.streamText.doStream",
              attributes: W({
                telemetry: t,
                attributes: {
                  ...Oe({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...B,
                  "ai.prompt.format": {
                    input: () => bt
                  },
                  "ai.prompt.messages": {
                    input: () => yn(st)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var J;
                      return (J = It.tools) == null ? void 0 : J.map((_e) => JSON.stringify(_e));
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => It.toolChoice != null ? JSON.stringify(It.toolChoice) : void 0
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
              tracer: je,
              endWhenDone: !1,
              fn: async (J) => ({
                startTimestampMs: k(),
                // get before the call
                doStreamSpan: J,
                result: await e.doStream({
                  mode: It,
                  ...Xt(n),
                  inputFormat: bt,
                  responseFormat: p == null ? void 0 : p.responseFormat({ model: e }),
                  prompt: st,
                  providerMetadata: w,
                  abortSignal: s,
                  headers: r
                })
              })
            })
          ), jr = $p({
            tools: u,
            generatorStream: Mr,
            toolCallStreaming: d,
            tracer: je,
            telemetry: t,
            system: o,
            messages: ar,
            repairToolCall: v,
            abortSignal: s
          }), or = Ze ?? {}, Ye = [], Bt = [], Pe = [], it = [];
          let Rt, Et = "unknown", wt = {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          }, ir, ga = !0, lr = "", ya = Te === "continue" ? Vt : "", bn, He = {
            id: x(),
            timestamp: b(),
            modelId: e.modelId
          }, Jt = "", va = !1, _a = !0, ba = !1;
          async function wn({
            controller: J,
            chunk: _e
          }) {
            J.enqueue(_e), lr += _e.textDelta, ya += _e.textDelta, va = !0, ba = _e.textDelta.trimEnd() !== _e.textDelta;
          }
          Z.addStream(
            jr.pipeThrough(
              new TransformStream({
                async transform(J, _e) {
                  var Xe, ur, At;
                  if (ga) {
                    const Qe = k() - sr;
                    ga = !1, Ge.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": Qe
                    }), Ge.setAttributes({
                      "ai.response.msToFirstChunk": Qe
                    }), _e.enqueue({
                      type: "step-start",
                      messageId: Ue,
                      request: or,
                      warnings: ot ?? []
                    });
                  }
                  if (J.type === "text-delta" && J.textDelta.length === 0)
                    return;
                  const wa = J.type;
                  switch (wa) {
                    case "text-delta": {
                      if (f) {
                        const Qe = _a && _n ? J.textDelta.trimStart() : J.textDelta;
                        if (Qe.length === 0)
                          break;
                        _a = !1, Jt += Qe;
                        const $r = li(Jt);
                        $r != null && (Jt = $r.suffix, await wn({
                          controller: _e,
                          chunk: {
                            type: "text-delta",
                            textDelta: $r.prefix + $r.whitespace
                          }
                        }));
                      } else
                        await wn({ controller: _e, chunk: J });
                      break;
                    }
                    case "reasoning": {
                      _e.enqueue(J), Rt == null ? (Rt = {
                        type: "text",
                        text: J.textDelta
                      }, Pe.push(Rt)) : Rt.text += J.textDelta;
                      break;
                    }
                    case "reasoning-signature": {
                      if (_e.enqueue(J), Rt == null)
                        throw new Ep({
                          chunk: J,
                          message: "reasoning-signature without reasoning"
                        });
                      Rt.signature = J.signature, Rt = void 0;
                      break;
                    }
                    case "redacted-reasoning": {
                      _e.enqueue(J), Pe.push({
                        type: "redacted",
                        data: J.data
                      });
                      break;
                    }
                    case "tool-call": {
                      _e.enqueue(J), Ye.push(J);
                      break;
                    }
                    case "tool-result": {
                      _e.enqueue(J), Bt.push(J);
                      break;
                    }
                    case "response-metadata": {
                      He = {
                        id: (Xe = J.id) != null ? Xe : He.id,
                        timestamp: (ur = J.timestamp) != null ? ur : He.timestamp,
                        modelId: (At = J.modelId) != null ? At : He.modelId
                      };
                      break;
                    }
                    case "finish": {
                      wt = J.usage, Et = J.finishReason, ir = J.experimental_providerMetadata, bn = J.logprobs;
                      const Qe = k() - sr;
                      Ge.addEvent("ai.stream.finish"), Ge.setAttributes({
                        "ai.response.msToFinish": Qe,
                        "ai.response.avgCompletionTokensPerSecond": 1e3 * wt.completionTokens / Qe
                      });
                      break;
                    }
                    case "file": {
                      it.push(J), _e.enqueue(J);
                      break;
                    }
                    case "source":
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      _e.enqueue(J);
                      break;
                    }
                    case "error": {
                      _e.enqueue(J), Et = "error";
                      break;
                    }
                    default: {
                      const Qe = wa;
                      throw new Error(`Unknown chunk type: ${Qe}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(J) {
                  const _e = Ye.length > 0 ? JSON.stringify(Ye) : void 0;
                  let Xe = "done";
                  T + 1 < g && (f && Et === "length" && // only use continue when there are no tool calls:
                  Ye.length === 0 ? Xe = "continue" : (
                    // there are tool calls:
                    Ye.length > 0 && // all current tool calls have results:
                    Bt.length === Ye.length && (Xe = "tool-result")
                  )), f && Jt.length > 0 && (Xe !== "continue" || // when the next step is a regular step, publish the buffer
                  Te === "continue" && !va) && (await wn({
                    controller: J,
                    chunk: {
                      type: "text-delta",
                      textDelta: Jt
                    }
                  }), Jt = "");
                  try {
                    Ge.setAttributes(
                      W({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Et,
                          "ai.response.text": { output: () => lr },
                          "ai.response.toolCalls": {
                            output: () => _e
                          },
                          "ai.response.id": He.id,
                          "ai.response.model": He.modelId,
                          "ai.response.timestamp": He.timestamp.toISOString(),
                          "ai.usage.promptTokens": wt.promptTokens,
                          "ai.usage.completionTokens": wt.completionTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [Et],
                          "gen_ai.response.id": He.id,
                          "gen_ai.response.model": He.modelId,
                          "gen_ai.usage.input_tokens": wt.promptTokens,
                          "gen_ai.usage.output_tokens": wt.completionTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    Ge.end();
                  }
                  J.enqueue({
                    type: "step-finish",
                    finishReason: Et,
                    usage: wt,
                    providerMetadata: ir,
                    experimental_providerMetadata: ir,
                    logprobs: bn,
                    request: or,
                    response: {
                      ...He,
                      headers: Ct == null ? void 0 : Ct.headers
                    },
                    warnings: ot,
                    isContinued: Xe === "continue",
                    messageId: Ue
                  });
                  const ur = Ho(Ee, wt);
                  if (Xe === "done")
                    J.enqueue({
                      type: "finish",
                      finishReason: Et,
                      usage: ur,
                      providerMetadata: ir,
                      experimental_providerMetadata: ir,
                      logprobs: bn,
                      response: {
                        ...He,
                        headers: Ct == null ? void 0 : Ct.headers
                      }
                    }), Z.closeStream();
                  else {
                    if (Te === "continue") {
                      const At = le[le.length - 1];
                      typeof At.content == "string" ? At.content += lr : At.content.push({
                        text: lr,
                        type: "text"
                      });
                    } else
                      le.push(
                        ...Gn({
                          text: lr,
                          files: it,
                          reasoning: Pe,
                          tools: u ?? {},
                          toolCalls: Ye,
                          toolResults: Bt,
                          messageId: Ue,
                          generateMessageId: S
                        })
                      );
                    await X({
                      currentStep: T + 1,
                      responseMessages: le,
                      usage: ur,
                      stepType: Xe,
                      previousStepText: ya,
                      hasLeadingWhitespace: ba,
                      messageId: (
                        // keep the same id when continuing a step:
                        Xe === "continue" ? Ue : S()
                      )
                    });
                  }
                }
              })
            )
          );
        }
        await X({
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
          messageId: S()
        });
      }
    }).catch((we) => {
      Z.addStream(
        new ReadableStream({
          start(X) {
            X.enqueue({ type: "error", error: we }), X.close();
          }
        })
      ), Z.closeStream();
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
  get files() {
    return this.filesPromise.value;
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
    return Pt(
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
    return Pt(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part: e }, t) {
            t.enqueue(e);
          }
        })
      )
    );
  }
  async consumeStream(e) {
    var t;
    try {
      await jp({
        stream: this.fullStream,
        onError: e == null ? void 0 : e.onError
      });
    } catch (r) {
      (t = e == null ? void 0 : e.onError) == null || t.call(e, r);
    }
  }
  get experimental_partialOutputStream() {
    if (this.output == null)
      throw new ri();
    return Pt(
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
    sendSources: n = !1,
    experimental_sendFinish: a = !0
  }) {
    return this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (s, o) => {
          const i = s.type;
          switch (i) {
            case "text-delta": {
              o.enqueue(pe("text", s.textDelta));
              break;
            }
            case "reasoning": {
              r && o.enqueue(
                pe("reasoning", s.textDelta)
              );
              break;
            }
            case "redacted-reasoning": {
              r && o.enqueue(
                pe("redacted_reasoning", {
                  data: s.data
                })
              );
              break;
            }
            case "reasoning-signature": {
              r && o.enqueue(
                pe("reasoning_signature", {
                  signature: s.signature
                })
              );
              break;
            }
            case "file": {
              o.enqueue(
                pe("file", {
                  mimeType: s.mimeType,
                  data: s.base64
                })
              );
              break;
            }
            case "source": {
              n && o.enqueue(
                pe("source", s.source)
              );
              break;
            }
            case "tool-call-streaming-start": {
              o.enqueue(
                pe("tool_call_streaming_start", {
                  toolCallId: s.toolCallId,
                  toolName: s.toolName
                })
              );
              break;
            }
            case "tool-call-delta": {
              o.enqueue(
                pe("tool_call_delta", {
                  toolCallId: s.toolCallId,
                  argsTextDelta: s.argsTextDelta
                })
              );
              break;
            }
            case "tool-call": {
              o.enqueue(
                pe("tool_call", {
                  toolCallId: s.toolCallId,
                  toolName: s.toolName,
                  args: s.args
                })
              );
              break;
            }
            case "tool-result": {
              o.enqueue(
                pe("tool_result", {
                  toolCallId: s.toolCallId,
                  result: s.result
                })
              );
              break;
            }
            case "error": {
              o.enqueue(
                pe("error", e(s.error))
              );
              break;
            }
            case "step-start": {
              o.enqueue(
                pe("start_step", {
                  messageId: s.messageId
                })
              );
              break;
            }
            case "step-finish": {
              o.enqueue(
                pe("finish_step", {
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
              a && o.enqueue(
                pe("finish_message", {
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
              const l = i;
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
    sendReasoning: i,
    sendSources: l,
    experimental_sendFinish: u
  } = {}) {
    sn({
      response: e,
      status: t,
      statusText: r,
      headers: an(n, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({
        data: a,
        getErrorMessage: s,
        sendUsage: o,
        sendReasoning: i,
        sendSources: l,
        experimental_sendFinish: u
      })
    });
  }
  pipeTextStreamToResponse(e, t) {
    sn({
      response: e,
      status: t == null ? void 0 : t.status,
      statusText: t == null ? void 0 : t.statusText,
      headers: an(t == null ? void 0 : t.headers, {
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
      sendSources: e == null ? void 0 : e.sendSources,
      experimental_sendFinish: e == null ? void 0 : e.experimental_sendFinish
    }).pipeThrough(new TextEncoderStream());
    return e != null && e.data ? da(e == null ? void 0 : e.data.stream, t) : t;
  }
  mergeIntoDataStream(e, t) {
    e.merge(
      this.toDataStreamInternal({
        getErrorMessage: e.onError,
        sendUsage: t == null ? void 0 : t.sendUsage,
        sendReasoning: t == null ? void 0 : t.sendReasoning,
        sendSources: t == null ? void 0 : t.sendSources,
        experimental_sendFinish: t == null ? void 0 : t.experimental_sendFinish
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
    sendSources: i,
    experimental_sendFinish: l
  } = {}) {
    return new Response(
      this.toDataStream({
        data: n,
        getErrorMessage: a,
        sendUsage: s,
        sendReasoning: o,
        sendSources: i,
        experimental_sendFinish: l
      }),
      {
        status: t,
        statusText: r,
        headers: Lt(e, {
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
      headers: Lt(e == null ? void 0 : e.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
}, Fp = class extends j {
  constructor(e) {
    super({
      name: "AI_NoSpeechGeneratedError",
      message: "No speech audio generated."
    }), this.responses = e.responses;
  }
}, Zp = class extends fn {
  constructor({
    data: e,
    mimeType: t
  }) {
    super({ data: e, mimeType: t });
    let r = "mp3";
    if (t) {
      const n = t.split("/");
      n.length === 2 && t !== "audio/mpeg" && (r = n[1]);
    }
    if (!r)
      throw new Error(
        "Audio format must be provided or determinable from mimeType"
      );
    this.format = r;
  }
};
async function xh({
  model: e,
  text: t,
  voice: r,
  outputFormat: n,
  instructions: a,
  speed: s,
  providerOptions: o = {},
  maxRetries: i,
  abortSignal: l,
  headers: u
}) {
  var c;
  const { retry: d } = _t({ maxRetries: i }), m = await d(
    () => e.doGenerate({
      text: t,
      voice: r,
      outputFormat: n,
      instructions: a,
      speed: s,
      abortSignal: l,
      headers: u,
      providerOptions: o
    })
  );
  if (!m.audio || m.audio.length === 0)
    throw new Fp({ responses: [m.response] });
  return new Vp({
    audio: new Zp({
      data: m.audio,
      mimeType: (c = hn({
        data: m.audio,
        signatures: Ro
      })) != null ? c : "audio/mp3"
    }),
    warnings: m.warnings,
    responses: [m.response],
    providerMetadata: m.providerMetadata
  });
}
var Vp = class {
  constructor(e) {
    var t;
    this.audio = e.audio, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
}, Bp = class extends j {
  constructor(e) {
    super({
      name: "AI_NoTranscriptGeneratedError",
      message: "No transcript generated."
    }), this.responses = e.responses;
  }
};
async function kh({
  model: e,
  audio: t,
  providerOptions: r = {},
  maxRetries: n,
  abortSignal: a,
  headers: s
}) {
  const { retry: o } = _t({ maxRetries: n }), i = t instanceof URL ? (await jo({ url: t })).data : Sr(t), l = await o(
    () => {
      var u;
      return e.doGenerate({
        audio: i,
        abortSignal: a,
        headers: s,
        providerOptions: r,
        mediaType: (u = hn({
          data: i,
          signatures: Ro
        })) != null ? u : "audio/wav"
      });
    }
  );
  if (!l.text)
    throw new Bp({ responses: [l.response] });
  return new Jp({
    text: l.text,
    segments: l.segments,
    language: l.language,
    durationInSeconds: l.durationInSeconds,
    warnings: l.warnings,
    responses: [l.response],
    providerMetadata: l.providerMetadata
  });
}
var Jp = class {
  constructor(e) {
    var t;
    this.text = e.text, this.segments = e.segments, this.language = e.language, this.durationInSeconds = e.durationInSeconds, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
function Ii(e, t) {
  if (e === void 0 && t === void 0)
    return;
  if (e === void 0)
    return t;
  if (t === void 0)
    return e;
  const r = { ...e };
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const a = t[n];
      if (a === void 0)
        continue;
      const s = n in e ? e[n] : void 0, o = a !== null && typeof a == "object" && !Array.isArray(a) && !(a instanceof Date) && !(a instanceof RegExp), i = s != null && typeof s == "object" && !Array.isArray(s) && !(s instanceof Date) && !(s instanceof RegExp);
      o && i ? r[n] = Ii(
        s,
        a
      ) : r[n] = a;
    }
  return r;
}
function Th({
  settings: e
}) {
  return {
    middlewareVersion: "v1",
    transformParams: async ({ params: t }) => {
      var r;
      return {
        ...e,
        ...t,
        providerMetadata: Ii(
          e.providerMetadata,
          t.providerMetadata
        ),
        // special case for temperature 0
        // TODO remove when temperature defaults to undefined
        temperature: t.temperature === 0 || t.temperature == null ? (r = e.temperature) != null ? r : 0 : t.temperature
      };
    }
  };
}
function zp(e, t) {
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
function Sh({
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
      const l = r ? n + o : o, u = new RegExp(`${n}(.*?)${a}`, "gs"), c = Array.from(l.matchAll(u));
      if (!c.length)
        return { text: l, ...i };
      const d = c.map((_) => _[1]).join(t);
      let m = l;
      for (let _ = c.length - 1; _ >= 0; _--) {
        const v = c[_], g = m.slice(0, v.index), p = m.slice(
          v.index + v[0].length
        );
        m = g + (g.length > 0 && p.length > 0 ? t : "") + p;
      }
      return { ...i, text: m, reasoning: d };
    },
    wrapStream: async ({ doStream: s }) => {
      const { stream: o, ...i } = await s();
      let l = !0, u = !0, c = !1, d = r, m = "";
      return {
        stream: o.pipeThrough(
          new TransformStream({
            transform: (_, v) => {
              if (_.type !== "text-delta") {
                v.enqueue(_);
                return;
              }
              m += _.textDelta;
              function g(p) {
                if (p.length > 0) {
                  const f = c && (d ? !l : !u) ? t : "";
                  v.enqueue({
                    type: d ? "reasoning" : "text-delta",
                    textDelta: f + p
                  }), c = !1, d ? l = !1 : u = !1;
                }
              }
              do {
                const p = d ? a : n, f = zp(m, p);
                if (f == null) {
                  g(m), m = "";
                  break;
                }
                if (g(m.slice(0, f)), f + p.length <= m.length)
                  m = m.slice(f + p.length), d = !d, c = !0;
                else {
                  m = m.slice(f);
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
function Ih() {
  return {
    middlewareVersion: "v1",
    wrapStream: async ({ doGenerate: e }) => {
      const t = await e();
      return {
        stream: new ReadableStream({
          start(n) {
            if (n.enqueue({ type: "response-metadata", ...t.response }), t.reasoning)
              if (typeof t.reasoning == "string")
                n.enqueue({
                  type: "reasoning",
                  textDelta: t.reasoning
                });
              else
                for (const a of t.reasoning)
                  switch (a.type) {
                    case "text": {
                      n.enqueue({
                        type: "reasoning",
                        textDelta: a.text
                      }), a.signature != null && n.enqueue({
                        type: "reasoning-signature",
                        signature: a.signature
                      });
                      break;
                    }
                    case "redacted": {
                      n.enqueue({
                        type: "redacted-reasoning",
                        data: a.data
                      });
                      break;
                    }
                  }
            if (t.text && n.enqueue({
              type: "text-delta",
              textDelta: t.text
            }), t.toolCalls)
              for (const a of t.toolCalls)
                n.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: a.toolCallId,
                  toolName: a.toolName,
                  argsTextDelta: a.args
                }), n.enqueue({
                  type: "tool-call",
                  ...a
                });
            n.enqueue({
              type: "finish",
              finishReason: t.finishReason,
              usage: t.usage,
              logprobs: t.logprobs,
              providerMetadata: t.providerMetadata
            }), n.close();
          }
        }),
        rawCall: t.rawCall,
        rawResponse: t.rawResponse,
        warnings: t.warnings
      };
    }
  };
}
var Gp = ({
  model: e,
  middleware: t,
  modelId: r,
  providerId: n
}) => Si(t).reverse().reduce((a, s) => Hp({ model: a, middleware: s, modelId: r, providerId: n }), e), Hp = ({
  model: e,
  middleware: { transformParams: t, wrapGenerate: r, wrapStream: n },
  modelId: a,
  providerId: s
}) => {
  var o;
  async function i({
    params: l,
    type: u
  }) {
    return t ? await t({ params: l, type: u }) : l;
  }
  return {
    specificationVersion: "v1",
    provider: s ?? e.provider,
    modelId: a ?? e.modelId,
    defaultObjectGenerationMode: e.defaultObjectGenerationMode,
    supportsImageUrls: e.supportsImageUrls,
    supportsUrl: (o = e.supportsUrl) == null ? void 0 : o.bind(e),
    supportsStructuredOutputs: e.supportsStructuredOutputs,
    async doGenerate(l) {
      const u = await i({ params: l, type: "generate" }), c = async () => e.doGenerate(u);
      return r ? r({
        doGenerate: c,
        doStream: async () => e.doStream(u),
        params: u,
        model: e
      }) : c();
    },
    async doStream(l) {
      const u = await i({ params: l, type: "stream" }), c = async () => e.doGenerate(u), d = async () => e.doStream(u);
      return n ? n({ doGenerate: c, doStream: d, params: u, model: e }) : d();
    }
  };
}, Ch = Gp;
function Rh({
  messages: e,
  message: t
}) {
  return [
    ...e.length > 0 && e[e.length - 1].id === t.id ? e.slice(0, -1) : e,
    t
  ];
}
function Eh({
  messages: e,
  responseMessages: t,
  _internal: { currentDate: r = () => /* @__PURE__ */ new Date() } = {}
}) {
  var n, a, s, o;
  const i = structuredClone(e);
  for (const l of t) {
    const u = l.role, c = i[i.length - 1], d = c.role === "assistant";
    switch (u) {
      case "assistant": {
        let m = function(p) {
          return (typeof l.content == "string" ? [] : l.content.filter((f) => f.type === "tool-call")).map((f) => ({
            state: "call",
            step: p,
            args: f.args,
            toolCallId: f.toolCallId,
            toolName: f.toolName
          }));
        };
        const _ = [{ type: "step-start" }];
        let v = "", g;
        if (typeof l.content == "string")
          v = l.content, _.push({
            type: "text",
            text: l.content
          });
        else {
          let p;
          for (const f of l.content)
            switch (f.type) {
              case "text": {
                p = void 0, v += f.text, _.push({
                  type: "text",
                  text: f.text
                });
                break;
              }
              case "reasoning": {
                p == null && (p = {
                  type: "reasoning",
                  reasoning: "",
                  details: []
                }, _.push(p)), g = (g ?? "") + f.text, p.reasoning += f.text, p.details.push({
                  type: "text",
                  text: f.text,
                  signature: f.signature
                });
                break;
              }
              case "redacted-reasoning": {
                p == null && (p = {
                  type: "reasoning",
                  reasoning: "",
                  details: []
                }, _.push(p)), p.details.push({
                  type: "redacted",
                  data: f.data
                });
                break;
              }
              case "tool-call":
                break;
              case "file":
                if (f.data instanceof URL)
                  throw new j({
                    name: "InvalidAssistantFileData",
                    message: "File data cannot be a URL"
                  });
                _.push({
                  type: "file",
                  mimeType: f.mimeType,
                  data: gn(f.data)
                });
                break;
            }
        }
        if (d) {
          const p = rc(
            c.toolInvocations
          );
          (n = c.parts) != null || (c.parts = []), c.content = v, c.reasoning = g, c.parts.push(..._), c.toolInvocations = [
            ...(a = c.toolInvocations) != null ? a : [],
            ...m(p === void 0 ? 0 : p + 1)
          ], m(p === void 0 ? 0 : p + 1).map((f) => ({
            type: "tool-invocation",
            toolInvocation: f
          })).forEach((f) => {
            c.parts.push(f);
          });
        } else
          i.push({
            role: "assistant",
            id: l.id,
            createdAt: r(),
            // generate a createdAt date for the message, will be overridden by the client
            content: v,
            reasoning: g,
            toolInvocations: m(0),
            parts: [
              ..._,
              ...m(0).map((p) => ({
                type: "tool-invocation",
                toolInvocation: p
              }))
            ]
          });
        break;
      }
      case "tool": {
        if ((s = c.toolInvocations) != null || (c.toolInvocations = []), c.role !== "assistant")
          throw new Error(
            `Tool result must follow an assistant message: ${c.role}`
          );
        (o = c.parts) != null || (c.parts = []);
        for (const m of l.content) {
          const _ = c.toolInvocations.find(
            (p) => p.toolCallId === m.toolCallId
          ), v = c.parts.find(
            (p) => p.type === "tool-invocation" && p.toolInvocation.toolCallId === m.toolCallId
          );
          if (!_)
            throw new Error("Tool call not found in previous message");
          _.state = "result";
          const g = _;
          g.result = m.result, v ? v.toolInvocation = g : c.parts.push({
            type: "tool-invocation",
            toolInvocation: g
          });
        }
        break;
      }
      default: {
        const m = u;
        throw new Error(`Unsupported message role: ${m}`);
      }
    }
  }
  return i;
}
function Wp({
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
      throw new pt({ modelId: a, modelType: "languageModel" });
    },
    textEmbeddingModel(a) {
      if (t != null && a in t)
        return t[a];
      if (n)
        return n.textEmbeddingModel(a);
      throw new pt({ modelId: a, modelType: "textEmbeddingModel" });
    },
    imageModel(a) {
      if (r != null && a in r)
        return r[a];
      if (n != null && n.imageModel)
        return n.imageModel(a);
      throw new pt({ modelId: a, modelType: "imageModel" });
    }
  };
}
var Ah = Wp, Ci = "AI_NoSuchProviderError", Ri = `vercel.ai.error.${Ci}`, Kp = Symbol.for(Ri), Ei, Yp = class extends pt {
  constructor({
    modelId: e,
    modelType: t,
    providerId: r,
    availableProviders: n,
    message: a = `No such provider: ${r} (available providers: ${n.join()})`
  }) {
    super({ errorName: Ci, modelId: e, modelType: t, message: a }), this[Ei] = !0, this.providerId = r, this.availableProviders = n;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ri);
  }
};
Ei = Kp;
function Xp(e, {
  separator: t = ":"
} = {}) {
  const r = new Qp({
    separator: t
  });
  for (const [n, a] of Object.entries(e))
    r.registerProvider({ id: n, provider: a });
  return r;
}
var Nh = Xp, Qp = class {
  constructor({ separator: e }) {
    this.providers = {}, this.separator = e;
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
      throw new Yp({
        modelId: e,
        modelType: "languageModel",
        providerId: e,
        availableProviders: Object.keys(this.providers)
      });
    return t;
  }
  splitId(e, t) {
    const r = e.indexOf(this.separator);
    if (r === -1)
      throw new pt({
        modelId: e,
        modelType: t,
        message: `Invalid ${t} id for registry: ${e} (must be in the format "providerId${this.separator}modelId")`
      });
    return [e.slice(0, r), e.slice(r + this.separator.length)];
  }
  languageModel(e) {
    var t, r;
    const [n, a] = this.splitId(e, "languageModel"), s = (r = (t = this.getProvider(n)).languageModel) == null ? void 0 : r.call(t, a);
    if (s == null)
      throw new pt({ modelId: e, modelType: "languageModel" });
    return s;
  }
  textEmbeddingModel(e) {
    var t;
    const [r, n] = this.splitId(e, "textEmbeddingModel"), a = this.getProvider(r), s = (t = a.textEmbeddingModel) == null ? void 0 : t.call(a, n);
    if (s == null)
      throw new pt({
        modelId: e,
        modelType: "textEmbeddingModel"
      });
    return s;
  }
  imageModel(e) {
    var t;
    const [r, n] = this.splitId(e, "imageModel"), a = this.getProvider(r), s = (t = a.imageModel) == null ? void 0 : t.call(a, n);
    if (s == null)
      throw new pt({ modelId: e, modelType: "imageModel" });
    return s;
  }
};
function Ph(e) {
  return e;
}
var Ai = "2024-11-05", em = [
  Ai,
  "2024-10-07"
], tm = y({
  name: h(),
  version: h()
}).passthrough(), pa = y({
  _meta: Ie(y({}).passthrough())
}).passthrough(), Cr = pa, rm = y({
  method: h(),
  params: Ie(pa)
}), nm = y({
  experimental: Ie(y({}).passthrough()),
  logging: Ie(y({}).passthrough()),
  prompts: Ie(
    y({
      listChanged: Ie(Je())
    }).passthrough()
  ),
  resources: Ie(
    y({
      subscribe: Ie(Je()),
      listChanged: Ie(Je())
    }).passthrough()
  ),
  tools: Ie(
    y({
      listChanged: Ie(Je())
    }).passthrough()
  )
}).passthrough(), am = Cr.extend({
  protocolVersion: h(),
  capabilities: nm,
  serverInfo: tm,
  instructions: Ie(h())
}), sm = Cr.extend({
  nextCursor: Ie(h())
}), om = y({
  name: h(),
  description: Ie(h()),
  inputSchema: y({
    type: A("object"),
    properties: Ie(y({}).passthrough())
  }).passthrough()
}).passthrough(), im = sm.extend({
  tools: F(om)
}), lm = y({
  type: A("text"),
  text: h()
}).passthrough(), um = y({
  type: A("image"),
  data: h().base64(),
  mimeType: h()
}).passthrough(), Ni = y({
  /**
   * The URI of this resource.
   */
  uri: h(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: Ie(h())
}).passthrough(), cm = Ni.extend({
  text: h()
}), dm = Ni.extend({
  blob: h().base64()
}), pm = y({
  type: A("resource"),
  resource: ge([cm, dm])
}).passthrough(), mm = Cr.extend({
  content: F(
    ge([lm, um, pm])
  ),
  isError: Je().default(!1).optional()
}).or(
  Cr.extend({
    toolResult: Nr()
  })
), vn = "2.0", fm = y({
  jsonrpc: A(vn),
  id: ge([h(), R().int()])
}).merge(rm).strict(), hm = y({
  jsonrpc: A(vn),
  id: ge([h(), R().int()]),
  result: Cr
}).strict(), gm = y({
  jsonrpc: A(vn),
  id: ge([h(), R().int()]),
  error: y({
    code: R().int(),
    message: h(),
    data: Ie(Nr())
  })
}).strict(), ym = y({
  jsonrpc: A(vn)
}).merge(
  y({
    method: h(),
    params: Ie(pa)
  })
).strict(), vm = ge([
  fm,
  ym,
  hm,
  gm
]), _m = class {
  constructor({
    url: e,
    headers: t
  }) {
    this.connected = !1, this.url = new URL(e), this.headers = t;
  }
  async start() {
    return new Promise((e, t) => {
      if (this.connected)
        return e();
      this.abortController = new AbortController(), (async () => {
        var n, a, s;
        try {
          const o = new Headers(this.headers);
          o.set("Accept", "text/event-stream");
          const i = await fetch(this.url.href, {
            headers: o,
            signal: (n = this.abortController) == null ? void 0 : n.signal
          });
          if (!i.ok || !i.body) {
            const d = new Se({
              message: `MCP SSE Transport Error: ${i.status} ${i.statusText}`
            });
            return (a = this.onerror) == null || a.call(this, d), t(d);
          }
          const u = i.body.pipeThrough(new TextDecoderStream()).pipeThrough(zs()).getReader(), c = async () => {
            var d, m, _;
            try {
              for (; ; ) {
                const { done: v, value: g } = await u.read();
                if (v) {
                  if (this.connected)
                    throw this.connected = !1, new Se({
                      message: "MCP SSE Transport Error: Connection closed unexpectedly"
                    });
                  return;
                }
                const { event: p, data: f } = g;
                if (p === "endpoint") {
                  if (this.endpoint = new URL(f, this.url), this.endpoint.origin !== this.url.origin)
                    throw new Se({
                      message: `MCP SSE Transport Error: Endpoint origin does not match connection origin: ${this.endpoint.origin}`
                    });
                  this.connected = !0, e();
                } else if (p === "message")
                  try {
                    const w = vm.parse(
                      JSON.parse(f)
                    );
                    (d = this.onmessage) == null || d.call(this, w);
                  } catch (w) {
                    const k = new Se({
                      message: "MCP SSE Transport Error: Failed to parse message",
                      cause: w
                    });
                    (m = this.onerror) == null || m.call(this, k);
                  }
              }
            } catch (v) {
              if (v instanceof Error && v.name === "AbortError")
                return;
              (_ = this.onerror) == null || _.call(this, v), t(v);
            }
          };
          this.sseConnection = {
            close: () => u.cancel()
          }, c();
        } catch (o) {
          if (o instanceof Error && o.name === "AbortError")
            return;
          (s = this.onerror) == null || s.call(this, o), t(o);
        }
      })();
    });
  }
  async close() {
    var e, t, r;
    this.connected = !1, (e = this.sseConnection) == null || e.close(), (t = this.abortController) == null || t.abort(), (r = this.onclose) == null || r.call(this);
  }
  async send(e) {
    var t, r, n;
    if (!this.endpoint || !this.connected)
      throw new Se({
        message: "MCP SSE Transport Error: Not connected"
      });
    try {
      const a = new Headers(this.headers);
      a.set("Content-Type", "application/json");
      const s = {
        method: "POST",
        headers: a,
        body: JSON.stringify(e),
        signal: (t = this.abortController) == null ? void 0 : t.signal
      }, o = await fetch(this.endpoint, s);
      if (!o.ok) {
        const i = await o.text().catch(() => null), l = new Se({
          message: `MCP SSE Transport Error: POSTing to endpoint (HTTP ${o.status}): ${i}`
        });
        (r = this.onerror) == null || r.call(this, l);
        return;
      }
    } catch (a) {
      (n = this.onerror) == null || n.call(this, a);
      return;
    }
  }
};
function bm(e) {
  if (e.type !== "sse")
    throw new Se({
      message: "Unsupported or invalid transport configuration. If you are using a custom transport, make sure it implements the MCPTransport interface."
    });
  return new _m(e);
}
function wm(e) {
  return "start" in e && typeof e.start == "function" && "send" in e && typeof e.send == "function" && "close" in e && typeof e.close == "function";
}
var xm = "1.0.0";
async function Oh(e) {
  const t = new km(e);
  return await t.init(), t;
}
var km = class {
  constructor({
    transport: e,
    name: t = "ai-sdk-mcp-client",
    onUncaughtError: r
  }) {
    this.requestMessageId = 0, this.responseHandlers = /* @__PURE__ */ new Map(), this.serverCapabilities = {}, this.isClosed = !0, this.onUncaughtError = r, wm(e) ? this.transport = e : this.transport = bm(e), this.transport.onclose = () => this.onClose(), this.transport.onerror = (n) => this.onError(n), this.transport.onmessage = (n) => {
      if ("method" in n) {
        this.onError(
          new Se({
            message: "Unsupported message type"
          })
        );
        return;
      }
      this.onResponse(n);
    }, this.clientInfo = {
      name: t,
      version: xm
    };
  }
  async init() {
    try {
      await this.transport.start(), this.isClosed = !1;
      const e = await this.request({
        request: {
          method: "initialize",
          params: {
            protocolVersion: Ai,
            capabilities: {},
            clientInfo: this.clientInfo
          }
        },
        resultSchema: am
      });
      if (e === void 0)
        throw new Se({
          message: "Server sent invalid initialize result"
        });
      if (!em.includes(e.protocolVersion))
        throw new Se({
          message: `Server's protocol version is not supported: ${e.protocolVersion}`
        });
      return this.serverCapabilities = e.capabilities, await this.notification({
        method: "notifications/initialized"
      }), this;
    } catch (e) {
      throw await this.close(), e;
    }
  }
  async close() {
    var e;
    this.isClosed || (await ((e = this.transport) == null ? void 0 : e.close()), this.onClose());
  }
  assertCapability(e) {
    switch (e) {
      case "initialize":
        break;
      case "tools/list":
      case "tools/call":
        if (!this.serverCapabilities.tools)
          throw new Se({
            message: "Server does not support tools"
          });
        break;
      default:
        throw new Se({
          message: `Unsupported method: ${e}`
        });
    }
  }
  async request({
    request: e,
    resultSchema: t,
    options: r
  }) {
    return new Promise((n, a) => {
      if (this.isClosed)
        return a(
          new Se({
            message: "Attempted to send a request from a closed client"
          })
        );
      this.assertCapability(e.method);
      const s = r == null ? void 0 : r.signal;
      s == null || s.throwIfAborted();
      const o = this.requestMessageId++, i = {
        ...e,
        jsonrpc: "2.0",
        id: o
      }, l = () => {
        this.responseHandlers.delete(o);
      };
      this.responseHandlers.set(o, (u) => {
        if (s != null && s.aborted)
          return a(
            new Se({
              message: "Request was aborted",
              cause: s.reason
            })
          );
        if (u instanceof Error)
          return a(u);
        try {
          const c = t.parse(u.result);
          n(c);
        } catch (c) {
          const d = new Se({
            message: "Failed to parse server response",
            cause: c
          });
          a(d);
        }
      }), this.transport.send(i).catch((u) => {
        l(), a(u);
      });
    });
  }
  async listTools({
    params: e,
    options: t
  } = {}) {
    try {
      return this.request({
        request: { method: "tools/list", params: e },
        resultSchema: im,
        options: t
      });
    } catch (r) {
      throw r;
    }
  }
  async callTool({
    name: e,
    args: t,
    options: r
  }) {
    try {
      return this.request({
        request: { method: "tools/call", params: { name: e, arguments: t } },
        resultSchema: mm,
        options: {
          signal: r == null ? void 0 : r.abortSignal
        }
      });
    } catch (n) {
      throw n;
    }
  }
  async notification(e) {
    const t = {
      ...e,
      jsonrpc: "2.0"
    };
    await this.transport.send(t);
  }
  /**
   * Returns a set of AI SDK tools from the MCP server
   * @returns A record of tool names to their implementations
   */
  async tools({
    schemas: e = "automatic"
  } = {}) {
    var t;
    const r = {};
    try {
      const n = await this.listTools();
      for (const { name: a, description: s, inputSchema: o } of n.tools) {
        if (e !== "automatic" && !(a in e))
          continue;
        const i = e === "automatic" ? io({
          ...o,
          properties: (t = o.properties) != null ? t : {},
          additionalProperties: !1
        }) : e[a].parameters, l = this, u = {
          description: s,
          parameters: i,
          execute: async (c, d) => {
            var m;
            return (m = d == null ? void 0 : d.abortSignal) == null || m.throwIfAborted(), l.callTool({
              name: a,
              args: c,
              options: d
            });
          }
        };
        r[a] = u;
      }
      return r;
    } catch (n) {
      throw n;
    }
  }
  onClose() {
    if (this.isClosed)
      return;
    this.isClosed = !0;
    const e = new Se({
      message: "Connection closed"
    });
    for (const t of this.responseHandlers.values())
      t(e);
    this.responseHandlers.clear();
  }
  onError(e) {
    this.onUncaughtError && this.onUncaughtError(e);
  }
  onResponse(e) {
    const t = Number(e.id), r = this.responseHandlers.get(t);
    if (r === void 0)
      throw new Se({
        message: `Protocol error: Received a response for an unknown message ID: ${JSON.stringify(
          e
        )}`
      });
    this.responseHandlers.delete(t), r(
      "result" in e ? e : new Se({
        message: e.error.message,
        cause: e.error
      })
    );
  }
};
function Mh(e, t, r) {
  if (e.length !== t.length)
    throw new ne({
      parameter: "vector1,vector2",
      value: { vector1Length: e.length, vector2Length: t.length },
      message: "Vectors must have the same length"
    });
  const n = e.length;
  if (n === 0) {
    if (r != null && r.throwErrorForEmptyVectors)
      throw new ne({
        parameter: "vector1",
        value: e,
        message: "Vectors cannot be empty"
      });
    return 0;
  }
  let a = 0, s = 0, o = 0;
  for (let i = 0; i < n; i++) {
    const l = e[i], u = t[i];
    a += l * l, s += u * u, o += l * u;
  }
  return a === 0 || s === 0 ? 0 : o / (Math.sqrt(a) * Math.sqrt(s));
}
function jh({
  chunks: e,
  initialDelayInMs: t = 0,
  chunkDelayInMs: r = 0,
  _internal: n
}) {
  var a;
  const s = (a = n == null ? void 0 : n.delay) != null ? a : Qn;
  let o = 0;
  return new ReadableStream({
    async pull(i) {
      o < e.length ? (await s(o === 0 ? t : r), i.enqueue(e[o++])) : i.close();
    }
  });
}
function $h({ threadId: e, messageId: t }, r) {
  const n = new ReadableStream({
    async start(a) {
      var s;
      const o = new TextEncoder(), i = (d) => {
        a.enqueue(
          o.encode(
            zt("assistant_message", d)
          )
        );
      }, l = (d) => {
        a.enqueue(
          o.encode(
            zt("data_message", d)
          )
        );
      }, u = (d) => {
        a.enqueue(
          o.encode(zt("error", d))
        );
      }, c = async (d) => {
        var m, _;
        let v;
        for await (const g of d)
          switch (g.event) {
            case "thread.message.created": {
              a.enqueue(
                o.encode(
                  zt("assistant_message", {
                    id: g.data.id,
                    role: "assistant",
                    content: [{ type: "text", text: { value: "" } }]
                  })
                )
              );
              break;
            }
            case "thread.message.delta": {
              const p = (m = g.data.delta.content) == null ? void 0 : m[0];
              (p == null ? void 0 : p.type) === "text" && ((_ = p.text) == null ? void 0 : _.value) != null && a.enqueue(
                o.encode(
                  zt("text", p.text.value)
                )
              );
              break;
            }
            case "thread.run.completed":
            case "thread.run.requires_action": {
              v = g.data;
              break;
            }
          }
        return v;
      };
      a.enqueue(
        o.encode(
          zt("assistant_control_data", {
            threadId: e,
            messageId: t
          })
        )
      );
      try {
        await r({
          sendMessage: i,
          sendDataMessage: l,
          forwardStream: c
        });
      } catch (d) {
        u((s = d.message) != null ? s : `${d}`);
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
var Tm = {};
ca(Tm, {
  mergeIntoDataStream: () => Cm,
  toDataStream: () => Sm,
  toDataStreamResponse: () => Im
});
function Pi(e = {}) {
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
function ma(e, t) {
  return e.pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        var a;
        if (typeof r == "string") {
          n.enqueue(r);
          return;
        }
        if ("event" in r) {
          r.event === "on_chat_model_stream" && Ha(
            (a = r.data) == null ? void 0 : a.chunk,
            n
          );
          return;
        }
        Ha(r, n);
      }
    })
  ).pipeThrough(Pi(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (r, n) => {
        n.enqueue(pe("text", r));
      }
    })
  );
}
function Sm(e, t) {
  return ma(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function Im(e, t) {
  var r;
  const n = ma(
    e,
    t == null ? void 0 : t.callbacks
  ).pipeThrough(new TextEncoderStream()), a = t == null ? void 0 : t.data, s = t == null ? void 0 : t.init, o = a ? da(a.stream, n) : n;
  return new Response(o, {
    status: (r = s == null ? void 0 : s.status) != null ? r : 200,
    statusText: s == null ? void 0 : s.statusText,
    headers: Lt(s == null ? void 0 : s.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function Cm(e, t) {
  t.dataStream.merge(ma(e, t.callbacks));
}
function Ha(e, t) {
  if (typeof e.content == "string")
    t.enqueue(e.content);
  else {
    const r = e.content;
    for (const n of r)
      n.type === "text" && t.enqueue(n.text);
  }
}
var Rm = {};
ca(Rm, {
  mergeIntoDataStream: () => Nm,
  toDataStream: () => Em,
  toDataStreamResponse: () => Am
});
function fa(e, t) {
  const r = Pm();
  return nl(e[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(n, a) {
        a.enqueue(r(n.delta));
      }
    })
  ).pipeThrough(Pi(t)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (n, a) => {
        a.enqueue(pe("text", n));
      }
    })
  );
}
function Em(e, t) {
  return fa(e, t).pipeThrough(
    new TextEncoderStream()
  );
}
function Am(e, t = {}) {
  var r;
  const { init: n, data: a, callbacks: s } = t, o = fa(e, s).pipeThrough(
    new TextEncoderStream()
  ), i = a ? da(a.stream, o) : o;
  return new Response(i, {
    status: (r = n == null ? void 0 : n.status) != null ? r : 200,
    statusText: n == null ? void 0 : n.statusText,
    headers: Lt(n == null ? void 0 : n.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function Nm(e, t) {
  t.dataStream.merge(fa(e, t.callbacks));
}
function Pm() {
  let e = !0;
  return (t) => (e && (t = t.trimStart(), t && (e = !1)), t);
}
var Om = 15 * 1e3, Dh = class {
  constructor() {
    this.encoder = new TextEncoder(), this.controller = null, this.isClosed = !1, this.warningTimeout = null;
    const e = this;
    this.stream = new ReadableStream({
      start: async (t) => {
        e.controller = t, process.env.NODE_ENV === "development" && (e.warningTimeout = setTimeout(() => {
          console.warn(
            "The data stream is hanging. Did you forget to close it with `data.close()`?"
          );
        }, Om));
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
      this.encoder.encode(pe("data", [e]))
    );
  }
  appendMessageAnnotation(e) {
    if (this.isClosed)
      throw new Error("Data Stream has already been closed.");
    if (!this.controller)
      throw new Error("Stream controller is not initialized.");
    this.controller.enqueue(
      this.encoder.encode(pe("message_annotations", [e]))
    );
  }
}, Mm = y({
  type: A("error"),
  error: y({
    type: h(),
    message: h()
  })
}), Wa = ta({
  errorSchema: Mm,
  errorToMessage: (e) => e.error.message
});
function jm(e) {
  var t;
  const r = (t = e.tools) != null && t.length ? e.tools : void 0, n = [], a = /* @__PURE__ */ new Set();
  if (r == null)
    return { tools: void 0, tool_choice: void 0, toolWarnings: n, betas: a };
  const s = [];
  for (const l of r)
    switch (l.type) {
      case "function":
        s.push({
          name: l.name,
          description: l.description,
          input_schema: l.parameters
        });
        break;
      case "provider-defined":
        switch (l.id) {
          case "anthropic.computer_20250124":
            a.add("computer-use-2025-01-24"), s.push({
              name: l.name,
              type: "computer_20250124",
              display_width_px: l.args.displayWidthPx,
              display_height_px: l.args.displayHeightPx,
              display_number: l.args.displayNumber
            });
            break;
          case "anthropic.computer_20241022":
            a.add("computer-use-2024-10-22"), s.push({
              name: l.name,
              type: "computer_20241022",
              display_width_px: l.args.displayWidthPx,
              display_height_px: l.args.displayHeightPx,
              display_number: l.args.displayNumber
            });
            break;
          case "anthropic.text_editor_20250124":
            a.add("computer-use-2025-01-24"), s.push({
              name: l.name,
              type: "text_editor_20250124"
            });
            break;
          case "anthropic.text_editor_20241022":
            a.add("computer-use-2024-10-22"), s.push({
              name: l.name,
              type: "text_editor_20241022"
            });
            break;
          case "anthropic.bash_20250124":
            a.add("computer-use-2025-01-24"), s.push({
              name: l.name,
              type: "bash_20250124"
            });
            break;
          case "anthropic.bash_20241022":
            a.add("computer-use-2024-10-22"), s.push({
              name: l.name,
              type: "bash_20241022"
            });
            break;
          default:
            n.push({ type: "unsupported-tool", tool: l });
            break;
        }
        break;
      default:
        n.push({ type: "unsupported-tool", tool: l });
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
      const l = i;
      throw new se({
        functionality: `Unsupported tool choice type: ${l}`
      });
    }
  }
}
function $m({
  prompt: e,
  sendReasoning: t,
  warnings: r
}) {
  var n, a, s, o;
  const i = /* @__PURE__ */ new Set(), l = Dm(e);
  let u;
  const c = [];
  function d(m) {
    var _;
    const v = m == null ? void 0 : m.anthropic;
    return (_ = v == null ? void 0 : v.cacheControl) != null ? _ : v == null ? void 0 : v.cache_control;
  }
  for (let m = 0; m < l.length; m++) {
    const _ = l[m], v = m === l.length - 1, g = _.type;
    switch (g) {
      case "system": {
        if (u != null)
          throw new se({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        u = _.messages.map(({ content: p, providerMetadata: f }) => ({
          type: "text",
          text: p,
          cache_control: d(f)
        }));
        break;
      }
      case "user": {
        const p = [];
        for (const f of _.messages) {
          const { role: w, content: k } = f;
          switch (w) {
            case "user": {
              for (let b = 0; b < k.length; b++) {
                const x = k[b], S = b === k.length - 1, $ = (n = d(x.providerMetadata)) != null ? n : S ? d(f.providerMetadata) : void 0;
                switch (x.type) {
                  case "text": {
                    p.push({
                      type: "text",
                      text: x.text,
                      cache_control: $
                    });
                    break;
                  }
                  case "image": {
                    p.push({
                      type: "image",
                      source: x.image instanceof URL ? {
                        type: "url",
                        url: x.image.toString()
                      } : {
                        type: "base64",
                        media_type: (a = x.mimeType) != null ? a : "image/jpeg",
                        data: Mt(x.image)
                      },
                      cache_control: $
                    });
                    break;
                  }
                  case "file": {
                    if (x.mimeType !== "application/pdf")
                      throw new se({
                        functionality: "Non-PDF files in user messages"
                      });
                    i.add("pdfs-2024-09-25"), p.push({
                      type: "document",
                      source: x.data instanceof URL ? {
                        type: "url",
                        url: x.data.toString()
                      } : {
                        type: "base64",
                        media_type: "application/pdf",
                        data: x.data
                      },
                      cache_control: $
                    });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let b = 0; b < k.length; b++) {
                const x = k[b], S = b === k.length - 1, $ = (s = d(x.providerMetadata)) != null ? s : S ? d(f.providerMetadata) : void 0, E = x.content != null ? x.content.map((P) => {
                  var G;
                  switch (P.type) {
                    case "text":
                      return {
                        type: "text",
                        text: P.text,
                        cache_control: void 0
                      };
                    case "image":
                      return {
                        type: "image",
                        source: {
                          type: "base64",
                          media_type: (G = P.mimeType) != null ? G : "image/jpeg",
                          data: P.data
                        },
                        cache_control: void 0
                      };
                  }
                }) : JSON.stringify(x.result);
                p.push({
                  type: "tool_result",
                  tool_use_id: x.toolCallId,
                  content: E,
                  is_error: x.isError,
                  cache_control: $
                });
              }
              break;
            }
            default: {
              const b = w;
              throw new Error(`Unsupported role: ${b}`);
            }
          }
        }
        c.push({ role: "user", content: p });
        break;
      }
      case "assistant": {
        const p = [];
        for (let f = 0; f < _.messages.length; f++) {
          const w = _.messages[f], k = f === _.messages.length - 1, { content: b } = w;
          for (let x = 0; x < b.length; x++) {
            const S = b[x], $ = x === b.length - 1, E = (o = d(S.providerMetadata)) != null ? o : $ ? d(w.providerMetadata) : void 0;
            switch (S.type) {
              case "text": {
                p.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    v && k && $ ? S.text.trim() : S.text
                  ),
                  cache_control: E
                });
                break;
              }
              case "reasoning": {
                t ? p.push({
                  type: "thinking",
                  thinking: S.text,
                  signature: S.signature,
                  cache_control: E
                }) : r.push({
                  type: "other",
                  message: "sending reasoning content is disabled for this model"
                });
                break;
              }
              case "redacted-reasoning": {
                p.push({
                  type: "redacted_thinking",
                  data: S.data,
                  cache_control: E
                });
                break;
              }
              case "tool-call": {
                p.push({
                  type: "tool_use",
                  id: S.toolCallId,
                  name: S.toolName,
                  input: S.args,
                  cache_control: E
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
        const p = g;
        throw new Error(`Unsupported type: ${p}`);
      }
    }
  }
  return {
    prompt: { system: u, messages: c },
    betas: i
  };
}
function Dm(e) {
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
function Ka(e) {
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
var qm = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "tool", this.modelId = e, this.settings = t, this.config = r;
  }
  supportsUrl(e) {
    return e.protocol === "https:";
  }
  get provider() {
    return this.config.provider;
  }
  get supportsImageUrls() {
    return this.config.supportsImageUrls;
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
    stopSequences: l,
    responseFormat: u,
    seed: c,
    providerMetadata: d
  }) {
    var m, _, v;
    const g = e.type, p = [];
    o != null && p.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && p.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), c != null && p.push({
      type: "unsupported-setting",
      setting: "seed"
    }), u != null && u.type !== "text" && p.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: f, betas: w } = $m({
      prompt: t,
      sendReasoning: (m = this.settings.sendReasoning) != null ? m : !0,
      warnings: p
    }), k = un({
      provider: "anthropic",
      providerOptions: d,
      schema: Fm
    }), b = ((_ = k == null ? void 0 : k.thinking) == null ? void 0 : _.type) === "enabled", x = (v = k == null ? void 0 : k.thinking) == null ? void 0 : v.budgetTokens, S = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: r,
      temperature: n,
      top_k: s,
      top_p: a,
      stop_sequences: l,
      // provider specific settings:
      ...b && {
        thinking: { type: "enabled", budget_tokens: x }
      },
      // prompt:
      system: f.system,
      messages: f.messages
    };
    if (b) {
      if (x == null)
        throw new se({
          functionality: "thinking requires a budget"
        });
      S.temperature != null && (S.temperature = void 0, p.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), s != null && (S.top_k = void 0, p.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), a != null && (S.top_p = void 0, p.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), S.max_tokens = r + x;
    }
    switch (g) {
      case "regular": {
        const {
          tools: $,
          tool_choice: E,
          toolWarnings: P,
          betas: G
        } = jm(e);
        return {
          args: { ...S, tools: $, tool_choice: E },
          warnings: [...p, ...P],
          betas: /* @__PURE__ */ new Set([...w, ...G])
        };
      }
      case "object-json":
        throw new se({
          functionality: "json-mode object generation"
        });
      case "object-tool": {
        const { name: $, description: E, parameters: P } = e.tool;
        return {
          args: {
            ...S,
            tools: [{ name: $, description: E, input_schema: P }],
            tool_choice: { type: "tool", name: $ }
          },
          warnings: p,
          betas: w
        };
      }
      default: {
        const $ = g;
        throw new Error(`Unsupported type: ${$}`);
      }
    }
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Le(
      await hl(this.config.headers),
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
    const { args: s, warnings: o, betas: i } = await this.getArgs(e), {
      responseHeaders: l,
      value: u,
      rawValue: c
    } = await Fe({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: i, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: Wa,
      successfulResponseHandler: vt(
        Um
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: d, ...m } = s;
    let _ = "";
    for (const p of u.content)
      p.type === "text" && (_ += p.text);
    let v;
    if (u.content.some((p) => p.type === "tool_use")) {
      v = [];
      for (const p of u.content)
        p.type === "tool_use" && v.push({
          toolCallType: "function",
          toolCallId: p.id,
          toolName: p.name,
          args: JSON.stringify(p.input)
        });
    }
    const g = u.content.filter(
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
      text: _,
      reasoning: g.length > 0 ? g : void 0,
      toolCalls: v,
      finishReason: Ka(u.stop_reason),
      usage: {
        promptTokens: u.usage.input_tokens,
        completionTokens: u.usage.output_tokens
      },
      rawCall: { rawPrompt: d, rawSettings: m },
      rawResponse: {
        headers: l,
        body: c
      },
      response: {
        id: (t = u.id) != null ? t : void 0,
        modelId: (r = u.model) != null ? r : void 0
      },
      warnings: o,
      providerMetadata: {
        anthropic: {
          cacheCreationInputTokens: (n = u.usage.cache_creation_input_tokens) != null ? n : null,
          cacheReadInputTokens: (a = u.usage.cache_read_input_tokens) != null ? a : null
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
      failedResponseHandler: Wa,
      successfulResponseHandler: Ar(
        Lm
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...l } = t;
    let u = "unknown";
    const c = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, d = {};
    let m, _;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          transform(v, g) {
            var p, f, w, k;
            if (!v.success) {
              g.enqueue({ type: "error", error: v.error });
              return;
            }
            const b = v.value;
            switch (b.type) {
              case "ping":
                return;
              case "content_block_start": {
                const x = b.content_block.type;
                switch (_ = x, x) {
                  case "text":
                  case "thinking":
                    return;
                  case "redacted_thinking": {
                    g.enqueue({
                      type: "redacted-reasoning",
                      data: b.content_block.data
                    });
                    return;
                  }
                  case "tool_use": {
                    d[b.index] = {
                      toolCallId: b.content_block.id,
                      toolName: b.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const S = x;
                    throw new Error(
                      `Unsupported content block type: ${S}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (d[b.index] != null) {
                  const x = d[b.index];
                  g.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: x.toolCallId,
                    toolName: x.toolName,
                    args: x.jsonText
                  }), delete d[b.index];
                }
                _ = void 0;
                return;
              }
              case "content_block_delta": {
                const x = b.delta.type;
                switch (x) {
                  case "text_delta": {
                    g.enqueue({
                      type: "text-delta",
                      textDelta: b.delta.text
                    });
                    return;
                  }
                  case "thinking_delta": {
                    g.enqueue({
                      type: "reasoning",
                      textDelta: b.delta.thinking
                    });
                    return;
                  }
                  case "signature_delta": {
                    _ === "thinking" && g.enqueue({
                      type: "reasoning-signature",
                      signature: b.delta.signature
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const S = d[b.index];
                    g.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: S.toolCallId,
                      toolName: S.toolName,
                      argsTextDelta: b.delta.partial_json
                    }), S.jsonText += b.delta.partial_json;
                    return;
                  }
                  default: {
                    const S = x;
                    throw new Error(
                      `Unsupported delta type: ${S}`
                    );
                  }
                }
              }
              case "message_start": {
                c.promptTokens = b.message.usage.input_tokens, c.completionTokens = b.message.usage.output_tokens, m = {
                  anthropic: {
                    cacheCreationInputTokens: (p = b.message.usage.cache_creation_input_tokens) != null ? p : null,
                    cacheReadInputTokens: (f = b.message.usage.cache_read_input_tokens) != null ? f : null
                  }
                }, g.enqueue({
                  type: "response-metadata",
                  id: (w = b.message.id) != null ? w : void 0,
                  modelId: (k = b.message.model) != null ? k : void 0
                });
                return;
              }
              case "message_delta": {
                c.completionTokens = b.usage.output_tokens, u = Ka(b.delta.stop_reason);
                return;
              }
              case "message_stop": {
                g.enqueue({
                  type: "finish",
                  finishReason: u,
                  usage: c,
                  providerMetadata: m
                });
                return;
              }
              case "error": {
                g.enqueue({ type: "error", error: b.error });
                return;
              }
              default: {
                const x = b;
                throw new Error(`Unsupported chunk type: ${x}`);
              }
            }
          }
        })
      ),
      rawCall: { rawPrompt: i, rawSettings: l },
      rawResponse: { headers: s },
      warnings: r,
      request: { body: JSON.stringify(a) }
    };
  }
}, Um = y({
  type: A("message"),
  id: h().nullish(),
  model: h().nullish(),
  content: F(
    Tt("type", [
      y({
        type: A("text"),
        text: h()
      }),
      y({
        type: A("thinking"),
        thinking: h(),
        signature: h()
      }),
      y({
        type: A("redacted_thinking"),
        data: h()
      }),
      y({
        type: A("tool_use"),
        id: h(),
        name: h(),
        input: Nr()
      })
    ])
  ),
  stop_reason: h().nullish(),
  usage: y({
    input_tokens: R(),
    output_tokens: R(),
    cache_creation_input_tokens: R().nullish(),
    cache_read_input_tokens: R().nullish()
  })
}), Lm = Tt("type", [
  y({
    type: A("message_start"),
    message: y({
      id: h().nullish(),
      model: h().nullish(),
      usage: y({
        input_tokens: R(),
        output_tokens: R(),
        cache_creation_input_tokens: R().nullish(),
        cache_read_input_tokens: R().nullish()
      })
    })
  }),
  y({
    type: A("content_block_start"),
    index: R(),
    content_block: Tt("type", [
      y({
        type: A("text"),
        text: h()
      }),
      y({
        type: A("thinking"),
        thinking: h()
      }),
      y({
        type: A("tool_use"),
        id: h(),
        name: h()
      }),
      y({
        type: A("redacted_thinking"),
        data: h()
      })
    ])
  }),
  y({
    type: A("content_block_delta"),
    index: R(),
    delta: Tt("type", [
      y({
        type: A("input_json_delta"),
        partial_json: h()
      }),
      y({
        type: A("text_delta"),
        text: h()
      }),
      y({
        type: A("thinking_delta"),
        thinking: h()
      }),
      y({
        type: A("signature_delta"),
        signature: h()
      })
    ])
  }),
  y({
    type: A("content_block_stop"),
    index: R()
  }),
  y({
    type: A("error"),
    error: y({
      type: h(),
      message: h()
    })
  }),
  y({
    type: A("message_delta"),
    delta: y({ stop_reason: h().nullish() }),
    usage: y({ output_tokens: R() })
  }),
  y({
    type: A("message_stop")
  }),
  y({
    type: A("ping")
  })
]), Fm = y({
  thinking: y({
    type: ge([A("enabled"), A("disabled")]),
    budgetTokens: R().optional()
  }).optional()
}), Zm = y({
  command: h(),
  restart: Je().optional()
});
function Vm(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20241022",
    args: {},
    parameters: Zm,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Bm = y({
  command: h(),
  restart: Je().optional()
});
function Jm(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20250124",
    args: {},
    parameters: Bm,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var zm = y({
  command: yt(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: h(),
  file_text: h().optional(),
  insert_line: R().int().optional(),
  new_str: h().optional(),
  old_str: h().optional(),
  view_range: F(R().int()).optional()
});
function Gm(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20241022",
    args: {},
    parameters: zm,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Hm = y({
  command: yt(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: h(),
  file_text: h().optional(),
  insert_line: R().int().optional(),
  new_str: h().optional(),
  old_str: h().optional(),
  view_range: F(R().int()).optional()
});
function Wm(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20250124",
    args: {},
    parameters: Hm,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Km = y({
  action: yt([
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
  coordinate: F(R().int()).optional(),
  text: h().optional()
});
function Ym(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20241022",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Km,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Xm = y({
  action: yt([
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
  coordinate: $a([R().int(), R().int()]).optional(),
  duration: R().optional(),
  scroll_amount: R().optional(),
  scroll_direction: yt(["up", "down", "left", "right"]).optional(),
  start_coordinate: $a([R().int(), R().int()]).optional(),
  text: h().optional()
});
function Qm(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20250124",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Xm,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var ef = {
  bash_20241022: Vm,
  bash_20250124: Jm,
  textEditor_20241022: Gm,
  textEditor_20250124: Wm,
  computer_20241022: Ym,
  computer_20250124: Qm
};
function tf(e = {}) {
  var t;
  const r = (t = ra(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", n = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": ea({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), a = (o, i = {}) => new qm(o, i, {
    provider: "anthropic.messages",
    baseURL: r,
    headers: n,
    fetch: e.fetch,
    supportsImageUrls: !0
  }), s = function(o, i) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return a(o, i);
  };
  return s.languageModel = a, s.chat = a, s.messages = a, s.textEmbeddingModel = (o) => {
    throw new pt({ modelId: o, modelType: "textEmbeddingModel" });
  }, s.tools = ef, s;
}
tf();
function rf(e) {
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
                  image_url: o.image instanceof URL ? o.image.toString() : `data:${(i = o.mimeType) != null ? i : "image/jpeg"};base64,${Mt(o.image)}`
                };
              case "file": {
                if (!(o.data instanceof URL))
                  throw new se({
                    functionality: "File content parts in user messages"
                  });
                switch (o.mimeType) {
                  case "application/pdf":
                    return {
                      type: "document_url",
                      document_url: o.data.toString()
                    };
                  default:
                    throw new se({
                      functionality: "Only PDF files are supported in user messages"
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
        for (const l of a)
          switch (l.type) {
            case "text": {
              o += l.text;
              break;
            }
            case "tool-call": {
              i.push({
                id: l.toolCallId,
                type: "function",
                function: {
                  name: l.toolName,
                  arguments: JSON.stringify(l.args)
                }
              });
              break;
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
function Ya(e) {
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
var nf = y({
  object: A("error"),
  message: h(),
  type: h(),
  param: h().nullable(),
  code: h().nullable()
}), Hn = ta({
  errorSchema: nf,
  errorToMessage: (e) => e.message
});
function Xa({
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
function af(e) {
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
      throw new se({
        functionality: `Unsupported tool choice type: ${i}`
      });
    }
  }
}
var sf = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsImageUrls = !1, this.modelId = e, this.settings = t, this.config = r;
  }
  get provider() {
    return this.config.provider;
  }
  supportsUrl(e) {
    return e.protocol === "https:";
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
    stopSequences: l,
    responseFormat: u,
    seed: c,
    providerMetadata: d
  }) {
    var m, _;
    const v = e.type, g = [];
    s != null && g.push({
      type: "unsupported-setting",
      setting: "topK"
    }), o != null && g.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && g.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), l != null && g.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    }), u != null && u.type === "json" && u.schema != null && g.push({
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
      random_seed: c,
      // response format:
      response_format: (u == null ? void 0 : u.type) === "json" ? { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: (m = d == null ? void 0 : d.mistral) == null ? void 0 : m.documentImageLimit,
      document_page_limit: (_ = d == null ? void 0 : d.mistral) == null ? void 0 : _.documentPageLimit,
      // messages:
      messages: rf(t)
    };
    switch (v) {
      case "regular": {
        const { tools: f, tool_choice: w, toolWarnings: k } = af(e);
        return {
          args: { ...p, tools: f, tool_choice: w },
          warnings: [...g, ...k]
        };
      }
      case "object-json":
        return {
          args: {
            ...p,
            response_format: { type: "json_object" }
          },
          warnings: g
        };
      case "object-tool":
        return {
          args: {
            ...p,
            tool_choice: "any",
            tools: [{ type: "function", function: e.tool }]
          },
          warnings: g
        };
      default: {
        const f = v;
        throw new Error(`Unsupported type: ${f}`);
      }
    }
  }
  async doGenerate(e) {
    var t;
    const { args: r, warnings: n } = this.getArgs(e), {
      responseHeaders: a,
      value: s,
      rawValue: o
    } = await Fe({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Le(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: Hn,
      successfulResponseHandler: vt(
        of
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: i, ...l } = r, u = s.choices[0];
    let c = Qa(u.message.content);
    const d = i[i.length - 1];
    return d.role === "assistant" && (c != null && c.startsWith(d.content)) && (c = c.slice(d.content.length)), {
      text: c,
      toolCalls: (t = u.message.tool_calls) == null ? void 0 : t.map((m) => ({
        toolCallType: "function",
        toolCallId: m.id,
        toolName: m.function.name,
        args: m.function.arguments
      })),
      finishReason: Ya(u.finish_reason),
      usage: {
        promptTokens: s.usage.prompt_tokens,
        completionTokens: s.usage.completion_tokens
      },
      rawCall: { rawPrompt: i, rawSettings: l },
      rawResponse: {
        headers: a,
        body: o
      },
      request: { body: JSON.stringify(r) },
      response: Xa(s),
      warnings: n
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), n = { ...t, stream: !0 }, { responseHeaders: a, value: s } = await Fe({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Le(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Hn,
      successfulResponseHandler: Ar(
        lf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t;
    let l = "unknown", u = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, c = 0, d = !1;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(m, _) {
            if (!m.success) {
              _.enqueue({ type: "error", error: m.error });
              return;
            }
            c++;
            const v = m.value;
            c === 1 && _.enqueue({
              type: "response-metadata",
              ...Xa(v)
            }), v.usage != null && (u = {
              promptTokens: v.usage.prompt_tokens,
              completionTokens: v.usage.completion_tokens
            });
            const g = v.choices[0];
            if ((g == null ? void 0 : g.finish_reason) != null && (l = Ya(g.finish_reason)), (g == null ? void 0 : g.delta) == null)
              return;
            const p = g.delta, f = Qa(p.content);
            if (c <= 2) {
              const w = o[o.length - 1];
              if (w.role === "assistant" && f === w.content.trimEnd()) {
                f.length < w.content.length && (d = !0);
                return;
              }
            }
            if (f != null && (_.enqueue({
              type: "text-delta",
              textDelta: d ? f.trimStart() : f
            }), d = !1), p.tool_calls != null)
              for (const w of p.tool_calls)
                _.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: w.id,
                  toolName: w.function.name,
                  argsTextDelta: w.function.arguments
                }), _.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: w.id,
                  toolName: w.function.name,
                  args: w.function.arguments
                });
          },
          flush(m) {
            m.enqueue({ type: "finish", finishReason: l, usage: u });
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
function Qa(e) {
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
var Oi = ge([
  h(),
  F(
    Tt("type", [
      y({
        type: A("text"),
        text: h()
      }),
      y({
        type: A("image_url"),
        image_url: ge([
          h(),
          y({
            url: h(),
            detail: h().nullable()
          })
        ])
      }),
      y({
        type: A("reference"),
        reference_ids: F(R())
      })
    ])
  )
]).nullish(), of = y({
  id: h().nullish(),
  created: R().nullish(),
  model: h().nullish(),
  choices: F(
    y({
      message: y({
        role: A("assistant"),
        content: Oi,
        tool_calls: F(
          y({
            id: h(),
            function: y({ name: h(), arguments: h() })
          })
        ).nullish()
      }),
      index: R(),
      finish_reason: h().nullish()
    })
  ),
  object: A("chat.completion"),
  usage: y({
    prompt_tokens: R(),
    completion_tokens: R()
  })
}), lf = y({
  id: h().nullish(),
  created: R().nullish(),
  model: h().nullish(),
  choices: F(
    y({
      delta: y({
        role: yt(["assistant"]).optional(),
        content: Oi,
        tool_calls: F(
          y({
            id: h(),
            function: y({ name: h(), arguments: h() })
          })
        ).nullish()
      }),
      finish_reason: h().nullish(),
      index: R()
    })
  ),
  usage: y({
    prompt_tokens: R(),
    completion_tokens: R()
  }).nullish()
}), uf = class {
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
      throw new Ds({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const { responseHeaders: n, value: a } = await Fe({
      url: `${this.config.baseURL}/embeddings`,
      headers: Le(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Hn,
      successfulResponseHandler: vt(
        cf
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
}, cf = y({
  data: F(y({ embedding: F(R()) })),
  usage: y({ prompt_tokens: R() }).nullish()
});
function df(e = {}) {
  var t;
  const r = (t = ra(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", n = () => ({
    Authorization: `Bearer ${ea({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), a = (i, l = {}) => new sf(i, l, {
    provider: "mistral.chat",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), s = (i, l = {}) => new uf(i, l, {
    provider: "mistral.embedding",
    baseURL: r,
    headers: n,
    fetch: e.fetch
  }), o = function(i, l) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return a(i, l);
  };
  return o.languageModel = a, o.chat = a, o.embedding = s, o.textEmbedding = s, o.textEmbeddingModel = s, o;
}
df();
function pf({
  prompt: e,
  useLegacyFunctionCalling: t = !1,
  systemMessageMode: r = "system"
}) {
  const n = [], a = [];
  for (const { role: s, content: o } of e)
    switch (s) {
      case "system": {
        switch (r) {
          case "system": {
            n.push({ role: "system", content: o });
            break;
          }
          case "developer": {
            n.push({ role: "developer", content: o });
            break;
          }
          case "remove": {
            a.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const i = r;
            throw new Error(
              `Unsupported system message mode: ${i}`
            );
          }
        }
        break;
      }
      case "user": {
        if (o.length === 1 && o[0].type === "text") {
          n.push({ role: "user", content: o[0].text });
          break;
        }
        n.push({
          role: "user",
          content: o.map((i, l) => {
            var u, c, d, m;
            switch (i.type) {
              case "text":
                return { type: "text", text: i.text };
              case "image":
                return {
                  type: "image_url",
                  image_url: {
                    url: i.image instanceof URL ? i.image.toString() : `data:${(u = i.mimeType) != null ? u : "image/jpeg"};base64,${Mt(i.image)}`,
                    // OpenAI specific extension: image detail
                    detail: (d = (c = i.providerMetadata) == null ? void 0 : c.openai) == null ? void 0 : d.imageDetail
                  }
                };
              case "file": {
                if (i.data instanceof URL)
                  throw new se({
                    functionality: "'File content parts with URL data' functionality not supported."
                  });
                switch (i.mimeType) {
                  case "audio/wav":
                    return {
                      type: "input_audio",
                      input_audio: { data: i.data, format: "wav" }
                    };
                  case "audio/mp3":
                  case "audio/mpeg":
                    return {
                      type: "input_audio",
                      input_audio: { data: i.data, format: "mp3" }
                    };
                  case "application/pdf":
                    return {
                      type: "file",
                      file: {
                        filename: (m = i.filename) != null ? m : `part-${l}.pdf`,
                        file_data: `data:application/pdf;base64,${i.data}`
                      }
                    };
                  default:
                    throw new se({
                      functionality: `File content part type ${i.mimeType} in user messages`
                    });
                }
              }
            }
          })
        });
        break;
      }
      case "assistant": {
        let i = "";
        const l = [];
        for (const u of o)
          switch (u.type) {
            case "text": {
              i += u.text;
              break;
            }
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
          }
        if (t) {
          if (l.length > 1)
            throw new se({
              functionality: "useLegacyFunctionCalling with multiple tool calls in one message"
            });
          n.push({
            role: "assistant",
            content: i,
            function_call: l.length > 0 ? l[0].function : void 0
          });
        } else
          n.push({
            role: "assistant",
            content: i,
            tool_calls: l.length > 0 ? l : void 0
          });
        break;
      }
      case "tool": {
        for (const i of o)
          t ? n.push({
            role: "function",
            name: i.toolName,
            content: JSON.stringify(i.result)
          }) : n.push({
            role: "tool",
            tool_call_id: i.toolCallId,
            content: JSON.stringify(i.result)
          });
        break;
      }
      default: {
        const i = s;
        throw new Error(`Unsupported role: ${i}`);
      }
    }
  return { messages: n, warnings: a };
}
function es(e) {
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
function on(e) {
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
var ha = y({
  error: y({
    message: h(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: h().nullish(),
    param: eo().nullish(),
    code: ge([h(), R()]).nullish()
  })
}), at = ta({
  errorSchema: ha,
  errorToMessage: (e) => e.error.message
});
function ln({
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
function mf({
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
    const u = [];
    for (const d of a)
      d.type === "provider-defined" ? s.push({ type: "unsupported-tool", tool: d }) : u.push({
        name: d.name,
        description: d.description,
        parameters: d.parameters
      });
    if (o == null)
      return {
        functions: u,
        function_call: void 0,
        toolWarnings: s
      };
    switch (o.type) {
      case "auto":
      case "none":
      case void 0:
        return {
          functions: u,
          function_call: void 0,
          toolWarnings: s
        };
      case "required":
        throw new se({
          functionality: "useLegacyFunctionCalling and toolChoice: required"
        });
      default:
        return {
          functions: u,
          function_call: { name: o.toolName },
          toolWarnings: s
        };
    }
  }
  const i = [];
  for (const u of a)
    u.type === "provider-defined" ? s.push({ type: "unsupported-tool", tool: u }) : i.push({
      type: "function",
      function: {
        name: u.name,
        description: u.description,
        parameters: u.parameters,
        strict: r ? !0 : void 0
      }
    });
  if (o == null)
    return { tools: i, tool_choice: void 0, toolWarnings: s };
  const l = o.type;
  switch (l) {
    case "auto":
    case "none":
    case "required":
      return { tools: i, tool_choice: l, toolWarnings: s };
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
      const u = l;
      throw new se({
        functionality: `Unsupported tool choice type: ${u}`
      });
    }
  }
}
var ff = class {
  constructor(e, t, r) {
    this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
  }
  get supportsStructuredOutputs() {
    var e;
    return (e = this.settings.structuredOutputs) != null ? e : Wn(this.modelId);
  }
  get defaultObjectGenerationMode() {
    return yf(this.modelId) ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
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
    stopSequences: l,
    responseFormat: u,
    seed: c,
    providerMetadata: d
  }) {
    var m, _, v, g, p, f, w, k;
    const b = e.type, x = [];
    s != null && x.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (u == null ? void 0 : u.type) === "json" && u.schema != null && !this.supportsStructuredOutputs && x.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const S = this.settings.useLegacyFunctionCalling;
    if (S && this.settings.parallelToolCalls === !0)
      throw new se({
        functionality: "useLegacyFunctionCalling with parallelToolCalls"
      });
    if (S && this.supportsStructuredOutputs)
      throw new se({
        functionality: "structuredOutputs with useLegacyFunctionCalling"
      });
    const { messages: $, warnings: E } = pf(
      {
        prompt: t,
        useLegacyFunctionCalling: S,
        systemMessageMode: vf(this.modelId)
      }
    );
    x.push(...E);
    const P = {
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
      response_format: (u == null ? void 0 : u.type) === "json" ? this.supportsStructuredOutputs && u.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: !0,
          name: (m = u.name) != null ? m : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      stop: l,
      seed: c,
      // openai specific settings:
      // TODO remove in next major version; we auto-map maxTokens now
      max_completion_tokens: (_ = d == null ? void 0 : d.openai) == null ? void 0 : _.maxCompletionTokens,
      store: (v = d == null ? void 0 : d.openai) == null ? void 0 : v.store,
      metadata: (g = d == null ? void 0 : d.openai) == null ? void 0 : g.metadata,
      prediction: (p = d == null ? void 0 : d.openai) == null ? void 0 : p.prediction,
      reasoning_effort: (w = (f = d == null ? void 0 : d.openai) == null ? void 0 : f.reasoningEffort) != null ? w : this.settings.reasoningEffort,
      // messages:
      messages: $
    };
    switch (Wn(this.modelId) ? (P.temperature != null && (P.temperature = void 0, x.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), P.top_p != null && (P.top_p = void 0, x.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })), P.frequency_penalty != null && (P.frequency_penalty = void 0, x.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), P.presence_penalty != null && (P.presence_penalty = void 0, x.push({
      type: "unsupported-setting",
      setting: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), P.logit_bias != null && (P.logit_bias = void 0, x.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), P.logprobs != null && (P.logprobs = void 0, x.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    })), P.top_logprobs != null && (P.top_logprobs = void 0, x.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), P.max_tokens != null && (P.max_completion_tokens == null && (P.max_completion_tokens = P.max_tokens), P.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && P.temperature != null && (P.temperature = void 0, x.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for the search preview models and has been removed."
    })), b) {
      case "regular": {
        const { tools: G, tool_choice: ce, functions: be, function_call: me, toolWarnings: ie } = mf({
          mode: e,
          useLegacyFunctionCalling: S,
          structuredOutputs: this.supportsStructuredOutputs
        });
        return {
          args: {
            ...P,
            tools: G,
            tool_choice: ce,
            functions: be,
            function_call: me
          },
          warnings: [...x, ...ie]
        };
      }
      case "object-json":
        return {
          args: {
            ...P,
            response_format: this.supportsStructuredOutputs && e.schema != null ? {
              type: "json_schema",
              json_schema: {
                schema: e.schema,
                strict: !0,
                name: (k = e.name) != null ? k : "response",
                description: e.description
              }
            } : { type: "json_object" }
          },
          warnings: x
        };
      case "object-tool":
        return {
          args: S ? {
            ...P,
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
            ...P,
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
          warnings: x
        };
      default: {
        const G = b;
        throw new Error(`Unsupported type: ${G}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o, i, l;
    const { args: u, warnings: c } = this.getArgs(e), {
      responseHeaders: d,
      value: m,
      rawValue: _
    } = await Fe({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Le(this.config.headers(), e.headers),
      body: u,
      failedResponseHandler: at,
      successfulResponseHandler: vt(
        hf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: v, ...g } = u, p = m.choices[0], f = (t = m.usage) == null ? void 0 : t.completion_tokens_details, w = (r = m.usage) == null ? void 0 : r.prompt_tokens_details, k = { openai: {} };
    return (f == null ? void 0 : f.reasoning_tokens) != null && (k.openai.reasoningTokens = f == null ? void 0 : f.reasoning_tokens), (f == null ? void 0 : f.accepted_prediction_tokens) != null && (k.openai.acceptedPredictionTokens = f == null ? void 0 : f.accepted_prediction_tokens), (f == null ? void 0 : f.rejected_prediction_tokens) != null && (k.openai.rejectedPredictionTokens = f == null ? void 0 : f.rejected_prediction_tokens), (w == null ? void 0 : w.cached_tokens) != null && (k.openai.cachedPromptTokens = w == null ? void 0 : w.cached_tokens), {
      text: (n = p.message.content) != null ? n : void 0,
      toolCalls: this.settings.useLegacyFunctionCalling && p.message.function_call ? [
        {
          toolCallType: "function",
          toolCallId: kt(),
          toolName: p.message.function_call.name,
          args: p.message.function_call.arguments
        }
      ] : (a = p.message.tool_calls) == null ? void 0 : a.map((b) => {
        var x;
        return {
          toolCallType: "function",
          toolCallId: (x = b.id) != null ? x : kt(),
          toolName: b.function.name,
          args: b.function.arguments
        };
      }),
      finishReason: on(p.finish_reason),
      usage: {
        promptTokens: (o = (s = m.usage) == null ? void 0 : s.prompt_tokens) != null ? o : NaN,
        completionTokens: (l = (i = m.usage) == null ? void 0 : i.completion_tokens) != null ? l : NaN
      },
      rawCall: { rawPrompt: v, rawSettings: g },
      rawResponse: { headers: d, body: _ },
      request: { body: JSON.stringify(u) },
      response: ln(m),
      warnings: c,
      logprobs: es(p.logprobs),
      providerMetadata: k
    };
  }
  async doStream(e) {
    if (this.settings.simulateStreaming) {
      const g = await this.doGenerate(e);
      return {
        stream: new ReadableStream({
          start(f) {
            if (f.enqueue({ type: "response-metadata", ...g.response }), g.text && f.enqueue({
              type: "text-delta",
              textDelta: g.text
            }), g.toolCalls)
              for (const w of g.toolCalls)
                f.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: w.toolCallId,
                  toolName: w.toolName,
                  argsTextDelta: w.args
                }), f.enqueue({
                  type: "tool-call",
                  ...w
                });
            f.enqueue({
              type: "finish",
              finishReason: g.finishReason,
              usage: g.usage,
              logprobs: g.logprobs,
              providerMetadata: g.providerMetadata
            }), f.close();
          }
        }),
        rawCall: g.rawCall,
        rawResponse: g.rawResponse,
        warnings: g.warnings
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
      headers: Le(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: at,
      successfulResponseHandler: Ar(
        gf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { messages: o, ...i } = t, l = [];
    let u = "unknown", c = {
      promptTokens: void 0,
      completionTokens: void 0
    }, d, m = !0;
    const { useLegacyFunctionCalling: _ } = this.settings, v = { openai: {} };
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(g, p) {
            var f, w, k, b, x, S, $, E, P, G, ce, be;
            if (!g.success) {
              u = "error", p.enqueue({ type: "error", error: g.error });
              return;
            }
            const me = g.value;
            if ("error" in me) {
              u = "error", p.enqueue({ type: "error", error: me.error });
              return;
            }
            if (m && (m = !1, p.enqueue({
              type: "response-metadata",
              ...ln(me)
            })), me.usage != null) {
              const {
                prompt_tokens: H,
                completion_tokens: ue,
                prompt_tokens_details: Y,
                completion_tokens_details: U
              } = me.usage;
              c = {
                promptTokens: H ?? void 0,
                completionTokens: ue ?? void 0
              }, (U == null ? void 0 : U.reasoning_tokens) != null && (v.openai.reasoningTokens = U == null ? void 0 : U.reasoning_tokens), (U == null ? void 0 : U.accepted_prediction_tokens) != null && (v.openai.acceptedPredictionTokens = U == null ? void 0 : U.accepted_prediction_tokens), (U == null ? void 0 : U.rejected_prediction_tokens) != null && (v.openai.rejectedPredictionTokens = U == null ? void 0 : U.rejected_prediction_tokens), (Y == null ? void 0 : Y.cached_tokens) != null && (v.openai.cachedPromptTokens = Y == null ? void 0 : Y.cached_tokens);
            }
            const ie = me.choices[0];
            if ((ie == null ? void 0 : ie.finish_reason) != null && (u = on(ie.finish_reason)), (ie == null ? void 0 : ie.delta) == null)
              return;
            const de = ie.delta;
            de.content != null && p.enqueue({
              type: "text-delta",
              textDelta: de.content
            });
            const ye = es(
              ie == null ? void 0 : ie.logprobs
            );
            ye != null && ye.length && (d === void 0 && (d = []), d.push(...ye));
            const fe = _ && de.function_call != null ? [
              {
                type: "function",
                id: kt(),
                function: de.function_call,
                index: 0
              }
            ] : de.tool_calls;
            if (fe != null)
              for (const H of fe) {
                const ue = H.index;
                if (l[ue] == null) {
                  if (H.type !== "function")
                    throw new xn({
                      data: H,
                      message: "Expected 'function' type."
                    });
                  if (H.id == null)
                    throw new xn({
                      data: H,
                      message: "Expected 'id' to be a string."
                    });
                  if (((f = H.function) == null ? void 0 : f.name) == null)
                    throw new xn({
                      data: H,
                      message: "Expected 'function.name' to be a string."
                    });
                  l[ue] = {
                    id: H.id,
                    type: "function",
                    function: {
                      name: H.function.name,
                      arguments: (w = H.function.arguments) != null ? w : ""
                    },
                    hasFinished: !1
                  };
                  const U = l[ue];
                  ((k = U.function) == null ? void 0 : k.name) != null && ((b = U.function) == null ? void 0 : b.arguments) != null && (U.function.arguments.length > 0 && p.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: U.id,
                    toolName: U.function.name,
                    argsTextDelta: U.function.arguments
                  }), Sa(U.function.arguments) && (p.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (x = U.id) != null ? x : kt(),
                    toolName: U.function.name,
                    args: U.function.arguments
                  }), U.hasFinished = !0));
                  continue;
                }
                const Y = l[ue];
                Y.hasFinished || (((S = H.function) == null ? void 0 : S.arguments) != null && (Y.function.arguments += (E = ($ = H.function) == null ? void 0 : $.arguments) != null ? E : ""), p.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: Y.id,
                  toolName: Y.function.name,
                  argsTextDelta: (P = H.function.arguments) != null ? P : ""
                }), ((G = Y.function) == null ? void 0 : G.name) != null && ((ce = Y.function) == null ? void 0 : ce.arguments) != null && Sa(Y.function.arguments) && (p.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (be = Y.id) != null ? be : kt(),
                  toolName: Y.function.name,
                  args: Y.function.arguments
                }), Y.hasFinished = !0));
              }
          },
          flush(g) {
            var p, f;
            g.enqueue({
              type: "finish",
              finishReason: u,
              logprobs: d,
              usage: {
                promptTokens: (p = c.promptTokens) != null ? p : NaN,
                completionTokens: (f = c.completionTokens) != null ? f : NaN
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
}, Mi = y({
  prompt_tokens: R().nullish(),
  completion_tokens: R().nullish(),
  prompt_tokens_details: y({
    cached_tokens: R().nullish()
  }).nullish(),
  completion_tokens_details: y({
    reasoning_tokens: R().nullish(),
    accepted_prediction_tokens: R().nullish(),
    rejected_prediction_tokens: R().nullish()
  }).nullish()
}).nullish(), hf = y({
  id: h().nullish(),
  created: R().nullish(),
  model: h().nullish(),
  choices: F(
    y({
      message: y({
        role: A("assistant").nullish(),
        content: h().nullish(),
        function_call: y({
          arguments: h(),
          name: h()
        }).nullish(),
        tool_calls: F(
          y({
            id: h().nullish(),
            type: A("function"),
            function: y({
              name: h(),
              arguments: h()
            })
          })
        ).nullish()
      }),
      index: R(),
      logprobs: y({
        content: F(
          y({
            token: h(),
            logprob: R(),
            top_logprobs: F(
              y({
                token: h(),
                logprob: R()
              })
            )
          })
        ).nullable()
      }).nullish(),
      finish_reason: h().nullish()
    })
  ),
  usage: Mi
}), gf = ge([
  y({
    id: h().nullish(),
    created: R().nullish(),
    model: h().nullish(),
    choices: F(
      y({
        delta: y({
          role: yt(["assistant"]).nullish(),
          content: h().nullish(),
          function_call: y({
            name: h().optional(),
            arguments: h().optional()
          }).nullish(),
          tool_calls: F(
            y({
              index: R(),
              id: h().nullish(),
              type: A("function").nullish(),
              function: y({
                name: h().nullish(),
                arguments: h().nullish()
              })
            })
          ).nullish()
        }).nullish(),
        logprobs: y({
          content: F(
            y({
              token: h(),
              logprob: R(),
              top_logprobs: F(
                y({
                  token: h(),
                  logprob: R()
                })
              )
            })
          ).nullable()
        }).nullish(),
        finish_reason: h().nullish(),
        index: R()
      })
    ),
    usage: Mi
  }),
  ha
]);
function Wn(e) {
  return e.startsWith("o");
}
function yf(e) {
  return e.startsWith("gpt-4o-audio-preview");
}
function vf(e) {
  var t, r;
  return Wn(e) ? (r = (t = _f[e]) == null ? void 0 : t.systemMessageMode) != null ? r : "developer" : "system";
}
var _f = {
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
  o3: {
    systemMessageMode: "developer"
  },
  "o3-2025-04-16": {
    systemMessageMode: "developer"
  },
  "o3-mini": {
    systemMessageMode: "developer"
  },
  "o3-mini-2025-01-31": {
    systemMessageMode: "developer"
  },
  "o4-mini": {
    systemMessageMode: "developer"
  },
  "o4-mini-2025-04-16": {
    systemMessageMode: "developer"
  }
};
function bf({
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
        throw new ut({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const i = o.map((l) => {
          switch (l.type) {
            case "text":
              return l.text;
            case "image":
              throw new se({
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
        const i = o.map((l) => {
          switch (l.type) {
            case "text":
              return l.text;
            case "tool-call":
              throw new se({
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
        throw new se({
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
function ts(e) {
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
var wf = class {
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
    presencePenalty: l,
    stopSequences: u,
    responseFormat: c,
    seed: d
  }) {
    var m;
    const _ = e.type, v = [];
    o != null && v.push({
      type: "unsupported-setting",
      setting: "topK"
    }), c != null && c.type !== "text" && v.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: g, stopSequences: p } = bf({ prompt: r, inputFormat: t }), f = [...p ?? [], ...u ?? []], w = {
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
      presence_penalty: l,
      seed: d,
      // prompt:
      prompt: g,
      // stop sequences:
      stop: f.length > 0 ? f : void 0
    };
    switch (_) {
      case "regular": {
        if ((m = e.tools) != null && m.length)
          throw new se({
            functionality: "tools"
          });
        if (e.toolChoice)
          throw new se({
            functionality: "toolChoice"
          });
        return { args: w, warnings: v };
      }
      case "object-json":
        throw new se({
          functionality: "object-json mode"
        });
      case "object-tool":
        throw new se({
          functionality: "object-tool mode"
        });
      default: {
        const k = _;
        throw new Error(`Unsupported type: ${k}`);
      }
    }
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = this.getArgs(e), {
      responseHeaders: n,
      value: a,
      rawValue: s
    } = await Fe({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Le(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: at,
      successfulResponseHandler: vt(
        xf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: o, ...i } = t, l = a.choices[0];
    return {
      text: l.text,
      usage: {
        promptTokens: a.usage.prompt_tokens,
        completionTokens: a.usage.completion_tokens
      },
      finishReason: on(l.finish_reason),
      logprobs: ts(l.logprobs),
      rawCall: { rawPrompt: o, rawSettings: i },
      rawResponse: { headers: n, body: s },
      response: ln(a),
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
      headers: Le(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: at,
      successfulResponseHandler: Ar(
        kf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), { prompt: o, ...i } = t;
    let l = "unknown", u = {
      promptTokens: Number.NaN,
      completionTokens: Number.NaN
    }, c, d = !0;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          transform(m, _) {
            if (!m.success) {
              l = "error", _.enqueue({ type: "error", error: m.error });
              return;
            }
            const v = m.value;
            if ("error" in v) {
              l = "error", _.enqueue({ type: "error", error: v.error });
              return;
            }
            d && (d = !1, _.enqueue({
              type: "response-metadata",
              ...ln(v)
            })), v.usage != null && (u = {
              promptTokens: v.usage.prompt_tokens,
              completionTokens: v.usage.completion_tokens
            });
            const g = v.choices[0];
            (g == null ? void 0 : g.finish_reason) != null && (l = on(g.finish_reason)), (g == null ? void 0 : g.text) != null && _.enqueue({
              type: "text-delta",
              textDelta: g.text
            });
            const p = ts(
              g == null ? void 0 : g.logprobs
            );
            p != null && p.length && (c === void 0 && (c = []), c.push(...p));
          },
          flush(m) {
            m.enqueue({
              type: "finish",
              finishReason: l,
              logprobs: c,
              usage: u
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
}, xf = y({
  id: h().nullish(),
  created: R().nullish(),
  model: h().nullish(),
  choices: F(
    y({
      text: h(),
      finish_reason: h(),
      logprobs: y({
        tokens: F(h()),
        token_logprobs: F(R()),
        top_logprobs: F(yr(h(), R())).nullable()
      }).nullish()
    })
  ),
  usage: y({
    prompt_tokens: R(),
    completion_tokens: R()
  })
}), kf = ge([
  y({
    id: h().nullish(),
    created: R().nullish(),
    model: h().nullish(),
    choices: F(
      y({
        text: h(),
        finish_reason: h().nullish(),
        index: R(),
        logprobs: y({
          tokens: F(h()),
          token_logprobs: F(R()),
          top_logprobs: F(yr(h(), R())).nullable()
        }).nullish()
      })
    ),
    usage: y({
      prompt_tokens: R(),
      completion_tokens: R()
    }).nullish()
  }),
  ha
]), Tf = class {
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
      throw new Ds({
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
      headers: Le(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: this.settings.dimensions,
        user: this.settings.user
      },
      failedResponseHandler: at,
      successfulResponseHandler: vt(
        Sf
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
}, Sf = y({
  data: F(y({ embedding: F(R()) })),
  usage: y({ prompt_tokens: R() }).nullish()
}), If = {
  "dall-e-3": 1,
  "dall-e-2": 10,
  "gpt-image-1": 10
}, Cf = /* @__PURE__ */ new Set(["gpt-image-1"]), Rf = class {
  constructor(e, t, r) {
    this.modelId = e, this.settings = t, this.config = r, this.specificationVersion = "v1";
  }
  get maxImagesPerCall() {
    var e, t;
    return (t = (e = this.settings.maxImagesPerCall) != null ? e : If[this.modelId]) != null ? t : 1;
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
    var l, u, c, d;
    const m = [];
    n != null && m.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), a != null && m.push({ type: "unsupported-setting", setting: "seed" });
    const _ = (c = (u = (l = this.config._internal) == null ? void 0 : l.currentDate) == null ? void 0 : u.call(l)) != null ? c : /* @__PURE__ */ new Date(), { value: v, responseHeaders: g } = await Fe({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Le(this.config.headers(), o),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: r,
        ...(d = s.openai) != null ? d : {},
        ...Cf.has(this.modelId) ? {} : { response_format: "b64_json" }
      },
      failedResponseHandler: at,
      successfulResponseHandler: vt(
        Ef
      ),
      abortSignal: i,
      fetch: this.config.fetch
    });
    return {
      images: v.data.map((p) => p.b64_json),
      warnings: m,
      response: {
        timestamp: _,
        modelId: this.modelId,
        headers: g
      }
    };
  }
}, Ef = y({
  data: F(y({ b64_json: h() }))
}), Af = y({
  include: F(h()).nullish(),
  language: h().nullish(),
  prompt: h().nullish(),
  temperature: R().min(0).max(1).nullish().default(0),
  timestampGranularities: F(yt(["word", "segment"])).nullish().default(["segment"])
}), rs = {
  afrikaans: "af",
  arabic: "ar",
  armenian: "hy",
  azerbaijani: "az",
  belarusian: "be",
  bosnian: "bs",
  bulgarian: "bg",
  catalan: "ca",
  chinese: "zh",
  croatian: "hr",
  czech: "cs",
  danish: "da",
  dutch: "nl",
  english: "en",
  estonian: "et",
  finnish: "fi",
  french: "fr",
  galician: "gl",
  german: "de",
  greek: "el",
  hebrew: "he",
  hindi: "hi",
  hungarian: "hu",
  icelandic: "is",
  indonesian: "id",
  italian: "it",
  japanese: "ja",
  kannada: "kn",
  kazakh: "kk",
  korean: "ko",
  latvian: "lv",
  lithuanian: "lt",
  macedonian: "mk",
  malay: "ms",
  marathi: "mr",
  maori: "mi",
  nepali: "ne",
  norwegian: "no",
  persian: "fa",
  polish: "pl",
  portuguese: "pt",
  romanian: "ro",
  russian: "ru",
  serbian: "sr",
  slovak: "sk",
  slovenian: "sl",
  spanish: "es",
  swahili: "sw",
  swedish: "sv",
  tagalog: "tl",
  tamil: "ta",
  thai: "th",
  turkish: "tr",
  ukrainian: "uk",
  urdu: "ur",
  vietnamese: "vi",
  welsh: "cy"
}, Nf = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v1";
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    audio: e,
    mediaType: t,
    providerOptions: r
  }) {
    var n, a, s, o, i;
    const l = [], u = un({
      provider: "openai",
      providerOptions: r,
      schema: Af
    }), c = new FormData(), d = e instanceof Uint8Array ? new Blob([e]) : new Blob([cn(e)]);
    if (c.append("model", this.modelId), c.append("file", new File([d], "audio", { type: t })), u) {
      const m = {
        include: (n = u.include) != null ? n : void 0,
        language: (a = u.language) != null ? a : void 0,
        prompt: (s = u.prompt) != null ? s : void 0,
        temperature: (o = u.temperature) != null ? o : void 0,
        timestamp_granularities: (i = u.timestampGranularities) != null ? i : void 0
      };
      for (const _ in m) {
        const v = m[_];
        v !== void 0 && c.append(_, String(v));
      }
    }
    return {
      formData: c,
      warnings: l
    };
  }
  async doGenerate(e) {
    var t, r, n, a, s, o;
    const i = (n = (r = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : r.call(t)) != null ? n : /* @__PURE__ */ new Date(), { formData: l, warnings: u } = this.getArgs(e), {
      value: c,
      responseHeaders: d,
      rawValue: m
    } = await fl({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Le(this.config.headers(), e.headers),
      formData: l,
      failedResponseHandler: at,
      successfulResponseHandler: vt(
        Pf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), _ = c.language != null && c.language in rs ? rs[c.language] : void 0;
    return {
      text: c.text,
      segments: (s = (a = c.words) == null ? void 0 : a.map((v) => ({
        text: v.word,
        startSecond: v.start,
        endSecond: v.end
      }))) != null ? s : [],
      language: _,
      durationInSeconds: (o = c.duration) != null ? o : void 0,
      warnings: u,
      response: {
        timestamp: i,
        modelId: this.modelId,
        headers: d,
        body: m
      }
    };
  }
}, Pf = y({
  text: h(),
  language: h().nullish(),
  duration: R().nullish(),
  words: F(
    y({
      word: h(),
      start: R(),
      end: R()
    })
  ).nullish()
});
function Of({
  prompt: e,
  systemMessageMode: t
}) {
  const r = [], n = [];
  for (const { role: a, content: s } of e)
    switch (a) {
      case "system": {
        switch (t) {
          case "system": {
            r.push({ role: "system", content: s });
            break;
          }
          case "developer": {
            r.push({ role: "developer", content: s });
            break;
          }
          case "remove": {
            n.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const o = t;
            throw new Error(
              `Unsupported system message mode: ${o}`
            );
          }
        }
        break;
      }
      case "user": {
        r.push({
          role: "user",
          content: s.map((o, i) => {
            var l, u, c, d;
            switch (o.type) {
              case "text":
                return { type: "input_text", text: o.text };
              case "image":
                return {
                  type: "input_image",
                  image_url: o.image instanceof URL ? o.image.toString() : `data:${(l = o.mimeType) != null ? l : "image/jpeg"};base64,${Mt(o.image)}`,
                  // OpenAI specific extension: image detail
                  detail: (c = (u = o.providerMetadata) == null ? void 0 : u.openai) == null ? void 0 : c.imageDetail
                };
              case "file": {
                if (o.data instanceof URL)
                  throw new se({
                    functionality: "File URLs in user messages"
                  });
                switch (o.mimeType) {
                  case "application/pdf":
                    return {
                      type: "input_file",
                      filename: (d = o.filename) != null ? d : `part-${i}.pdf`,
                      file_data: `data:application/pdf;base64,${o.data}`
                    };
                  default:
                    throw new se({
                      functionality: "Only PDF files are supported in user messages"
                    });
                }
              }
            }
          })
        });
        break;
      }
      case "assistant": {
        for (const o of s)
          switch (o.type) {
            case "text": {
              r.push({
                role: "assistant",
                content: [{ type: "output_text", text: o.text }]
              });
              break;
            }
            case "tool-call": {
              r.push({
                type: "function_call",
                call_id: o.toolCallId,
                name: o.toolName,
                arguments: JSON.stringify(o.args)
              });
              break;
            }
          }
        break;
      }
      case "tool": {
        for (const o of s)
          r.push({
            type: "function_call_output",
            call_id: o.toolCallId,
            output: JSON.stringify(o.result)
          });
        break;
      }
      default: {
        const o = a;
        throw new Error(`Unsupported role: ${o}`);
      }
    }
  return { messages: r, warnings: n };
}
function ns({
  finishReason: e,
  hasToolCalls: t
}) {
  switch (e) {
    case void 0:
    case null:
      return t ? "tool-calls" : "stop";
    case "max_output_tokens":
      return "length";
    case "content_filter":
      return "content-filter";
    default:
      return t ? "tool-calls" : "unknown";
  }
}
function Mf({
  mode: e,
  strict: t
}) {
  var r;
  const n = (r = e.tools) != null && r.length ? e.tools : void 0, a = [];
  if (n == null)
    return { tools: void 0, tool_choice: void 0, toolWarnings: a };
  const s = e.toolChoice, o = [];
  for (const l of n)
    switch (l.type) {
      case "function":
        o.push({
          type: "function",
          name: l.name,
          description: l.description,
          parameters: l.parameters,
          strict: t ? !0 : void 0
        });
        break;
      case "provider-defined":
        switch (l.id) {
          case "openai.web_search_preview":
            o.push({
              type: "web_search_preview",
              search_context_size: l.args.searchContextSize,
              user_location: l.args.userLocation
            });
            break;
          default:
            a.push({ type: "unsupported-tool", tool: l });
            break;
        }
        break;
      default:
        a.push({ type: "unsupported-tool", tool: l });
        break;
    }
  if (s == null)
    return { tools: o, tool_choice: void 0, toolWarnings: a };
  const i = s.type;
  switch (i) {
    case "auto":
    case "none":
    case "required":
      return { tools: o, tool_choice: i, toolWarnings: a };
    case "tool":
      return s.toolName === "web_search_preview" ? {
        tools: o,
        tool_choice: {
          type: "web_search_preview"
        },
        toolWarnings: a
      } : {
        tools: o,
        tool_choice: {
          type: "function",
          name: s.toolName
        },
        toolWarnings: a
      };
    default: {
      const l = i;
      throw new se({
        functionality: `Unsupported tool choice type: ${l}`
      });
    }
  }
}
var jf = class {
  constructor(e, t) {
    this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsStructuredOutputs = !0, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    mode: e,
    maxTokens: t,
    temperature: r,
    stopSequences: n,
    topP: a,
    topK: s,
    presencePenalty: o,
    frequencyPenalty: i,
    seed: l,
    prompt: u,
    providerMetadata: c,
    responseFormat: d
  }) {
    var m, _, v;
    const g = [], p = Qf(this.modelId), f = e.type;
    s != null && g.push({
      type: "unsupported-setting",
      setting: "topK"
    }), l != null && g.push({
      type: "unsupported-setting",
      setting: "seed"
    }), o != null && g.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), i != null && g.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), n != null && g.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    });
    const { messages: w, warnings: k } = Of({
      prompt: u,
      systemMessageMode: p.systemMessageMode
    });
    g.push(...k);
    const b = un({
      provider: "openai",
      providerOptions: c,
      schema: eh
    }), x = (m = b == null ? void 0 : b.strictSchemas) != null ? m : !0, S = {
      model: this.modelId,
      input: w,
      temperature: r,
      top_p: a,
      max_output_tokens: t,
      ...(d == null ? void 0 : d.type) === "json" && {
        text: {
          format: d.schema != null ? {
            type: "json_schema",
            strict: x,
            name: (_ = d.name) != null ? _ : "response",
            description: d.description,
            schema: d.schema
          } : { type: "json_object" }
        }
      },
      // provider options:
      metadata: b == null ? void 0 : b.metadata,
      parallel_tool_calls: b == null ? void 0 : b.parallelToolCalls,
      previous_response_id: b == null ? void 0 : b.previousResponseId,
      store: b == null ? void 0 : b.store,
      user: b == null ? void 0 : b.user,
      instructions: b == null ? void 0 : b.instructions,
      // model-specific settings:
      ...p.isReasoningModel && ((b == null ? void 0 : b.reasoningEffort) != null || (b == null ? void 0 : b.reasoningSummary) != null) && {
        reasoning: {
          ...(b == null ? void 0 : b.reasoningEffort) != null && {
            effort: b.reasoningEffort
          },
          ...(b == null ? void 0 : b.reasoningSummary) != null && {
            summary: b.reasoningSummary
          }
        }
      },
      ...p.requiredAutoTruncation && {
        truncation: "auto"
      }
    };
    switch (p.isReasoningModel && (S.temperature != null && (S.temperature = void 0, g.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), S.top_p != null && (S.top_p = void 0, g.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    }))), f) {
      case "regular": {
        const { tools: $, tool_choice: E, toolWarnings: P } = Mf({
          mode: e,
          strict: x
          // TODO support provider options on tools
        });
        return {
          args: {
            ...S,
            tools: $,
            tool_choice: E
          },
          warnings: [...g, ...P]
        };
      }
      case "object-json":
        return {
          args: {
            ...S,
            text: {
              format: e.schema != null ? {
                type: "json_schema",
                strict: x,
                name: (v = e.name) != null ? v : "response",
                description: e.description,
                schema: e.schema
              } : { type: "json_object" }
            }
          },
          warnings: g
        };
      case "object-tool":
        return {
          args: {
            ...S,
            tool_choice: { type: "function", name: e.tool.name },
            tools: [
              {
                type: "function",
                name: e.tool.name,
                description: e.tool.description,
                parameters: e.tool.parameters,
                strict: x
              }
            ]
          },
          warnings: g
        };
      default: {
        const $ = f;
        throw new Error(`Unsupported type: ${$}`);
      }
    }
  }
  async doGenerate(e) {
    var t, r, n, a, s, o, i;
    const { args: l, warnings: u } = this.getArgs(e), {
      responseHeaders: c,
      value: d,
      rawValue: m
    } = await Fe({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Le(this.config.headers(), e.headers),
      body: l,
      failedResponseHandler: at,
      successfulResponseHandler: vt(
        y({
          id: h(),
          created_at: R(),
          model: h(),
          output: F(
            Tt("type", [
              y({
                type: A("message"),
                role: A("assistant"),
                content: F(
                  y({
                    type: A("output_text"),
                    text: h(),
                    annotations: F(
                      y({
                        type: A("url_citation"),
                        start_index: R(),
                        end_index: R(),
                        url: h(),
                        title: h()
                      })
                    )
                  })
                )
              }),
              y({
                type: A("function_call"),
                call_id: h(),
                name: h(),
                arguments: h()
              }),
              y({
                type: A("web_search_call")
              }),
              y({
                type: A("computer_call")
              }),
              y({
                type: A("reasoning"),
                summary: F(
                  y({
                    type: A("summary_text"),
                    text: h()
                  })
                )
              })
            ])
          ),
          incomplete_details: y({ reason: h() }).nullable(),
          usage: ji
        })
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), _ = d.output.filter((p) => p.type === "message").flatMap((p) => p.content).filter((p) => p.type === "output_text"), v = d.output.filter((p) => p.type === "function_call").map((p) => ({
      toolCallType: "function",
      toolCallId: p.call_id,
      toolName: p.name,
      args: p.arguments
    })), g = (r = (t = d.output.find((p) => p.type === "reasoning")) == null ? void 0 : t.summary) != null ? r : null;
    return {
      text: _.map((p) => p.text).join(`
`),
      sources: _.flatMap(
        (p) => p.annotations.map((f) => {
          var w, k, b;
          return {
            sourceType: "url",
            id: (b = (k = (w = this.config).generateId) == null ? void 0 : k.call(w)) != null ? b : kt(),
            url: f.url,
            title: f.title
          };
        })
      ),
      finishReason: ns({
        finishReason: (n = d.incomplete_details) == null ? void 0 : n.reason,
        hasToolCalls: v.length > 0
      }),
      toolCalls: v.length > 0 ? v : void 0,
      reasoning: g ? g.map((p) => ({
        type: "text",
        text: p.text
      })) : void 0,
      usage: {
        promptTokens: d.usage.input_tokens,
        completionTokens: d.usage.output_tokens
      },
      rawCall: {
        rawPrompt: void 0,
        rawSettings: {}
      },
      rawResponse: {
        headers: c,
        body: m
      },
      request: {
        body: JSON.stringify(l)
      },
      response: {
        id: d.id,
        timestamp: new Date(d.created_at * 1e3),
        modelId: d.model
      },
      providerMetadata: {
        openai: {
          responseId: d.id,
          cachedPromptTokens: (s = (a = d.usage.input_tokens_details) == null ? void 0 : a.cached_tokens) != null ? s : null,
          reasoningTokens: (i = (o = d.usage.output_tokens_details) == null ? void 0 : o.reasoning_tokens) != null ? i : null
        }
      },
      warnings: u
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: a } = await Fe({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Le(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: at,
      successfulResponseHandler: Ar(
        Bf
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), s = this;
    let o = "unknown", i = NaN, l = NaN, u = null, c = null, d = null;
    const m = {};
    let _ = !1;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          transform(v, g) {
            var p, f, w, k, b, x, S, $;
            if (!v.success) {
              o = "error", g.enqueue({ type: "error", error: v.error });
              return;
            }
            const E = v.value;
            if (Kf(E))
              E.item.type === "function_call" && (m[E.output_index] = {
                toolName: E.item.name,
                toolCallId: E.item.call_id
              }, g.enqueue({
                type: "tool-call-delta",
                toolCallType: "function",
                toolCallId: E.item.call_id,
                toolName: E.item.name,
                argsTextDelta: E.item.arguments
              }));
            else if (Wf(E)) {
              const P = m[E.output_index];
              P != null && g.enqueue({
                type: "tool-call-delta",
                toolCallType: "function",
                toolCallId: P.toolCallId,
                toolName: P.toolName,
                argsTextDelta: E.delta
              });
            } else Hf(E) ? (d = E.response.id, g.enqueue({
              type: "response-metadata",
              id: E.response.id,
              timestamp: new Date(E.response.created_at * 1e3),
              modelId: E.response.model
            })) : Jf(E) ? g.enqueue({
              type: "text-delta",
              textDelta: E.delta
            }) : Xf(E) ? g.enqueue({
              type: "reasoning",
              textDelta: E.delta
            }) : zf(E) && E.item.type === "function_call" ? (m[E.output_index] = void 0, _ = !0, g.enqueue({
              type: "tool-call",
              toolCallType: "function",
              toolCallId: E.item.call_id,
              toolName: E.item.name,
              args: E.item.arguments
            })) : Gf(E) ? (o = ns({
              finishReason: (p = E.response.incomplete_details) == null ? void 0 : p.reason,
              hasToolCalls: _
            }), i = E.response.usage.input_tokens, l = E.response.usage.output_tokens, u = (w = (f = E.response.usage.input_tokens_details) == null ? void 0 : f.cached_tokens) != null ? w : u, c = (b = (k = E.response.usage.output_tokens_details) == null ? void 0 : k.reasoning_tokens) != null ? b : c) : Yf(E) && g.enqueue({
              type: "source",
              source: {
                sourceType: "url",
                id: ($ = (S = (x = s.config).generateId) == null ? void 0 : S.call(x)) != null ? $ : kt(),
                url: E.annotation.url,
                title: E.annotation.title
              }
            });
          },
          flush(v) {
            v.enqueue({
              type: "finish",
              finishReason: o,
              usage: { promptTokens: i, completionTokens: l },
              ...(u != null || c != null) && {
                providerMetadata: {
                  openai: {
                    responseId: d,
                    cachedPromptTokens: u,
                    reasoningTokens: c
                  }
                }
              }
            });
          }
        })
      ),
      rawCall: {
        rawPrompt: void 0,
        rawSettings: {}
      },
      rawResponse: { headers: n },
      request: { body: JSON.stringify(t) },
      warnings: r
    };
  }
}, ji = y({
  input_tokens: R(),
  input_tokens_details: y({ cached_tokens: R().nullish() }).nullish(),
  output_tokens: R(),
  output_tokens_details: y({ reasoning_tokens: R().nullish() }).nullish()
}), $f = y({
  type: A("response.output_text.delta"),
  delta: h()
}), Df = y({
  type: yt(["response.completed", "response.incomplete"]),
  response: y({
    incomplete_details: y({ reason: h() }).nullish(),
    usage: ji
  })
}), qf = y({
  type: A("response.created"),
  response: y({
    id: h(),
    created_at: R(),
    model: h()
  })
}), Uf = y({
  type: A("response.output_item.done"),
  output_index: R(),
  item: Tt("type", [
    y({
      type: A("message")
    }),
    y({
      type: A("function_call"),
      id: h(),
      call_id: h(),
      name: h(),
      arguments: h(),
      status: A("completed")
    })
  ])
}), Lf = y({
  type: A("response.function_call_arguments.delta"),
  item_id: h(),
  output_index: R(),
  delta: h()
}), Ff = y({
  type: A("response.output_item.added"),
  output_index: R(),
  item: Tt("type", [
    y({
      type: A("message")
    }),
    y({
      type: A("function_call"),
      id: h(),
      call_id: h(),
      name: h(),
      arguments: h()
    })
  ])
}), Zf = y({
  type: A("response.output_text.annotation.added"),
  annotation: y({
    type: A("url_citation"),
    url: h(),
    title: h()
  })
}), Vf = y({
  type: A("response.reasoning_summary_text.delta"),
  item_id: h(),
  output_index: R(),
  summary_index: R(),
  delta: h()
}), Bf = ge([
  $f,
  Df,
  qf,
  Uf,
  Lf,
  Ff,
  Zf,
  Vf,
  y({ type: h() }).passthrough()
  // fallback for unknown chunks
]);
function Jf(e) {
  return e.type === "response.output_text.delta";
}
function zf(e) {
  return e.type === "response.output_item.done";
}
function Gf(e) {
  return e.type === "response.completed" || e.type === "response.incomplete";
}
function Hf(e) {
  return e.type === "response.created";
}
function Wf(e) {
  return e.type === "response.function_call_arguments.delta";
}
function Kf(e) {
  return e.type === "response.output_item.added";
}
function Yf(e) {
  return e.type === "response.output_text.annotation.added";
}
function Xf(e) {
  return e.type === "response.reasoning_summary_text.delta";
}
function Qf(e) {
  return e.startsWith("o") ? e.startsWith("o1-mini") || e.startsWith("o1-preview") ? {
    isReasoningModel: !0,
    systemMessageMode: "remove",
    requiredAutoTruncation: !1
  } : {
    isReasoningModel: !0,
    systemMessageMode: "developer",
    requiredAutoTruncation: !1
  } : {
    isReasoningModel: !1,
    systemMessageMode: "system",
    requiredAutoTruncation: !1
  };
}
var eh = y({
  metadata: eo().nullish(),
  parallelToolCalls: Je().nullish(),
  previousResponseId: h().nullish(),
  store: Je().nullish(),
  user: h().nullish(),
  reasoningEffort: h().nullish(),
  strictSchemas: Je().nullish(),
  instructions: h().nullish(),
  reasoningSummary: h().nullish()
}), th = y({});
function rh({
  searchContextSize: e,
  userLocation: t
} = {}) {
  return {
    type: "provider-defined",
    id: "openai.web_search_preview",
    args: {
      searchContextSize: e,
      userLocation: t
    },
    parameters: th
  };
}
var nh = {
  webSearchPreview: rh
}, ah = y({
  instructions: h().nullish(),
  speed: R().min(0.25).max(4).default(1).nullish()
}), sh = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v1";
  }
  get provider() {
    return this.config.provider;
  }
  getArgs({
    text: e,
    voice: t = "alloy",
    outputFormat: r = "mp3",
    speed: n,
    instructions: a,
    providerOptions: s
  }) {
    const o = [], i = un({
      provider: "openai",
      providerOptions: s,
      schema: ah
    }), l = {
      model: this.modelId,
      input: e,
      voice: t,
      response_format: "mp3",
      speed: n,
      instructions: a
    };
    if (r && (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(r) ? l.response_format = r : o.push({
      type: "unsupported-setting",
      setting: "outputFormat",
      details: `Unsupported output format: ${r}. Using mp3 instead.`
    })), i) {
      const u = {};
      for (const c in u) {
        const d = u[c];
        d !== void 0 && (l[c] = d);
      }
    }
    return {
      requestBody: l,
      warnings: o
    };
  }
  async doGenerate(e) {
    var t, r, n;
    const a = (n = (r = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : r.call(t)) != null ? n : /* @__PURE__ */ new Date(), { requestBody: s, warnings: o } = this.getArgs(e), {
      value: i,
      responseHeaders: l,
      rawValue: u
    } = await Fe({
      url: this.config.url({
        path: "/audio/speech",
        modelId: this.modelId
      }),
      headers: Le(this.config.headers(), e.headers),
      body: s,
      failedResponseHandler: at,
      successfulResponseHandler: gl(),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    return {
      audio: i,
      warnings: o,
      request: {
        body: JSON.stringify(s)
      },
      response: {
        timestamp: a,
        modelId: this.modelId,
        headers: l,
        body: u
      }
    };
  }
};
function oh(e = {}) {
  var t, r, n;
  const a = (t = ra(e.baseURL)) != null ? t : "https://api.openai.com/v1", s = (r = e.compatibility) != null ? r : "compatible", o = (n = e.name) != null ? n : "openai", i = () => ({
    Authorization: `Bearer ${ea({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), l = (f, w = {}) => new ff(f, w, {
    provider: `${o}.chat`,
    url: ({ path: k }) => `${a}${k}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), u = (f, w = {}) => new wf(f, w, {
    provider: `${o}.completion`,
    url: ({ path: k }) => `${a}${k}`,
    headers: i,
    compatibility: s,
    fetch: e.fetch
  }), c = (f, w = {}) => new Tf(f, w, {
    provider: `${o}.embedding`,
    url: ({ path: k }) => `${a}${k}`,
    headers: i,
    fetch: e.fetch
  }), d = (f, w = {}) => new Rf(f, w, {
    provider: `${o}.image`,
    url: ({ path: k }) => `${a}${k}`,
    headers: i,
    fetch: e.fetch
  }), m = (f) => new Nf(f, {
    provider: `${o}.transcription`,
    url: ({ path: w }) => `${a}${w}`,
    headers: i,
    fetch: e.fetch
  }), _ = (f) => new sh(f, {
    provider: `${o}.speech`,
    url: ({ path: w }) => `${a}${w}`,
    headers: i,
    fetch: e.fetch
  }), v = (f, w) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return f === "gpt-3.5-turbo-instruct" ? u(
      f,
      w
    ) : l(f, w);
  }, g = (f) => new jf(f, {
    provider: `${o}.responses`,
    url: ({ path: w }) => `${a}${w}`,
    headers: i,
    fetch: e.fetch
  }), p = function(f, w) {
    return v(f, w);
  };
  return p.languageModel = v, p.chat = l, p.completion = u, p.responses = g, p.embedding = c, p.textEmbedding = c, p.textEmbeddingModel = c, p.image = d, p.imageModel = d, p.transcription = m, p.transcriptionModel = m, p.speech = _, p.speechModel = _, p.tools = nh, p;
}
oh({
  compatibility: "strict"
  // strict for OpenAI API
});
export {
  j as AISDKError,
  Be as APICallError,
  $h as AssistantResponse,
  Nn as DownloadError,
  Li as EmptyResponseBodyError,
  ne as InvalidArgumentError,
  Va as InvalidDataContentError,
  $d as InvalidMessageRoleError,
  ut as InvalidPromptError,
  xn as InvalidResponseDataError,
  Ep as InvalidStreamPartError,
  pi as InvalidToolArgumentsError,
  mr as JSONParseError,
  Tm as LangChainAdapter,
  Rm as LlamaIndexAdapter,
  Dr as LoadAPIKeyError,
  Se as MCPClientError,
  Pn as MessageConversionError,
  lh as NoContentGeneratedError,
  Id as NoImageGeneratedError,
  dt as NoObjectGeneratedError,
  ri as NoOutputSpecifiedError,
  pt as NoSuchModelError,
  Yp as NoSuchProviderError,
  Jn as NoSuchToolError,
  Cp as Output,
  Fa as RetryError,
  Dh as StreamData,
  xp as ToolCallRepairError,
  oi as ToolExecutionError,
  ft as TypeValidationError,
  se as UnsupportedFunctionalityError,
  Rh as appendClientMessage,
  Eh as appendResponseMessages,
  Zd as convertToCoreMessages,
  Yd as coreAssistantMessageSchema,
  Qd as coreMessageSchema,
  Wd as coreSystemMessageSchema,
  Xd as coreToolMessageSchema,
  Kd as coreUserMessageSchema,
  Mh as cosineSimilarity,
  tf as createAnthropic,
  go as createDataStream,
  ph as createDataStreamResponse,
  Ft as createIdGenerator,
  df as createMistral,
  oh as createOpenAI,
  Xp as createProviderRegistry,
  Wp as customProvider,
  Th as defaultSettingsMiddleware,
  fh as embed,
  hh as embedMany,
  Oh as experimental_createMCPClient,
  Nh as experimental_createProviderRegistry,
  Ah as experimental_customProvider,
  gh as experimental_generateImage,
  xh as experimental_generateSpeech,
  kh as experimental_transcribe,
  Ch as experimental_wrapLanguageModel,
  Sh as extractReasoningMiddleware,
  zt as formatAssistantStreamPart,
  pe as formatDataStreamPart,
  kt as generateId,
  yh as generateObject,
  _h as generateText,
  io as jsonSchema,
  uh as parseAssistantStreamPart,
  Qu as parseDataStreamPart,
  mh as pipeDataStreamToResponse,
  ch as processDataStream,
  dh as processTextStream,
  jh as simulateReadableStream,
  Ih as simulateStreamingMiddleware,
  bh as smoothStream,
  vh as streamObject,
  wh as streamText,
  Ph as tool,
  Gp as wrapLanguageModel,
  nc as zodSchema
};
