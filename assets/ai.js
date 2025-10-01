var Ru = "vercel.ai.error", Eh = Symbol.for(Ru), Au, Oh = class ju extends Error {
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
    cause: o
  }) {
    super(r), this[Au] = !0, this.name = t, this.cause = o;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return ju.hasMarker(t, Ru);
  }
  static hasMarker(t, r) {
    const o = Symbol.for(r);
    return t != null && typeof t == "object" && o in t && typeof t[o] == "boolean" && t[o] === !0;
  }
};
Au = Eh;
var L = Oh, Mu = "AI_APICallError", Pu = `vercel.ai.error.${Mu}`, Nh = Symbol.for(Pu), zu, Ze = class extends L {
  constructor({
    message: e,
    url: t,
    requestBodyValues: r,
    statusCode: o,
    responseHeaders: n,
    responseBody: i,
    cause: a,
    isRetryable: s = o != null && (o === 408 || // request timeout
    o === 409 || // conflict
    o === 429 || // too many requests
    o >= 500),
    // server error
    data: u
  }) {
    super({ name: Mu, message: e, cause: a }), this[zu] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = o, this.responseHeaders = n, this.responseBody = i, this.isRetryable = s, this.data = u;
  }
  static isInstance(e) {
    return L.hasMarker(e, Pu);
  }
};
zu = Nh;
var Uu = "AI_EmptyResponseBodyError", Du = `vercel.ai.error.${Uu}`, Ch = Symbol.for(Du), Zu, Rh = class extends L {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Uu, message: e }), this[Zu] = !0;
  }
  static isInstance(e) {
    return L.hasMarker(e, Du);
  }
};
Zu = Ch;
function wn(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var qu = "AI_InvalidArgumentError", Lu = `vercel.ai.error.${qu}`, Ah = Symbol.for(Lu), Fu, ei = class extends L {
  constructor({
    message: t,
    cause: r,
    argument: o
  }) {
    super({ name: qu, message: t, cause: r }), this[Fu] = !0, this.argument = o;
  }
  static isInstance(t) {
    return L.hasMarker(t, Lu);
  }
};
Fu = Ah;
var Ju = "AI_InvalidPromptError", Vu = `vercel.ai.error.${Ju}`, jh = Symbol.for(Vu), Gu, Jt = class extends L {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: Ju, message: `Invalid prompt: ${t}`, cause: r }), this[Gu] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, Vu);
  }
};
Gu = jh;
var Bu = "AI_InvalidResponseDataError", Wu = `vercel.ai.error.${Bu}`, Mh = Symbol.for(Wu), Hu, Eo = class extends L {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: Bu, message: t }), this[Hu] = !0, this.data = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, Wu);
  }
};
Hu = Mh;
var Ku = "AI_JSONParseError", Yu = `vercel.ai.error.${Ku}`, Ph = Symbol.for(Yu), Xu, qn = class extends L {
  constructor({ text: e, cause: t }) {
    super({
      name: Ku,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${wn(t)}`,
      cause: t
    }), this[Xu] = !0, this.text = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, Yu);
  }
};
Xu = Ph;
var Qu = "AI_LoadAPIKeyError", el = `vercel.ai.error.${Qu}`, zh = Symbol.for(el), tl, br = class extends L {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Qu, message: e }), this[tl] = !0;
  }
  static isInstance(e) {
    return L.hasMarker(e, el);
  }
};
tl = zh;
var nl = "AI_NoContentGeneratedError", rl = `vercel.ai.error.${nl}`, Uh = Symbol.for(rl), ol, yE = class extends L {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: nl, message: e }), this[ol] = !0;
  }
  static isInstance(e) {
    return L.hasMarker(e, rl);
  }
};
ol = Uh;
var il = "AI_NoSuchModelError", al = `vercel.ai.error.${il}`, Dh = Symbol.for(al), sl, Ve = class extends L {
  constructor({
    errorName: e = il,
    modelId: t,
    modelType: r,
    message: o = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: o }), this[sl] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return L.hasMarker(e, al);
  }
};
sl = Dh;
var ul = "AI_TooManyEmbeddingValuesForCallError", ll = `vercel.ai.error.${ul}`, Zh = Symbol.for(ll), cl, ti = class extends L {
  constructor(e) {
    super({
      name: ul,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[cl] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return L.hasMarker(e, ll);
  }
};
cl = Zh;
var dl = "AI_TypeValidationError", pl = `vercel.ai.error.${dl}`, qh = Symbol.for(pl), ml, Lh = class Do extends L {
  constructor({ value: t, cause: r }) {
    super({
      name: dl,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${wn(r)}`,
      cause: r
    }), this[ml] = !0, this.value = t;
  }
  static isInstance(t) {
    return L.hasMarker(t, pl);
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
    return Do.isInstance(r) && r.value === t ? r : new Do({ value: t, cause: r });
  }
};
ml = qh;
var tt = Lh, fl = "AI_UnsupportedFunctionalityError", gl = `vercel.ai.error.${fl}`, Fh = Symbol.for(gl), hl, $e = class extends L {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: fl, message: t }), this[hl] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, gl);
  }
};
hl = Fh;
function Sr(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? !0 : Array.isArray(e) ? e.every(Sr) : typeof e == "object" ? Object.entries(e).every(
    ([t, r]) => typeof t == "string" && Sr(r)
  ) : !1;
}
function ss(e) {
  return Array.isArray(e) && e.every(Sr);
}
function Tr(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, r]) => typeof t == "string" && Sr(r)
  );
}
class us extends Error {
  constructor(t, r) {
    super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Oo(e) {
}
function Jh(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = Oo, onError: r = Oo, onRetry: o = Oo, onComment: n } = e;
  let i = "", a = !0, s, u = "", l = "";
  function d(_) {
    const v = a ? _.replace(/^\xEF\xBB\xBF/, "") : _, [m, b] = Vh(`${i}${v}`);
    for (const $ of m)
      h($);
    i = b, a = !1;
  }
  function h(_) {
    if (_ === "") {
      p();
      return;
    }
    if (_.startsWith(":")) {
      n && n(_.slice(_.startsWith(": ") ? 2 : 1));
      return;
    }
    const v = _.indexOf(":");
    if (v !== -1) {
      const m = _.slice(0, v), b = _[v + 1] === " " ? 2 : 1, $ = _.slice(v + b);
      y(m, $, _);
      return;
    }
    y(_, "", _);
  }
  function y(_, v, m) {
    switch (_) {
      case "event":
        l = v;
        break;
      case "data":
        u = `${u}${v}
`;
        break;
      case "id":
        s = v.includes("\0") ? void 0 : v;
        break;
      case "retry":
        /^\d+$/.test(v) ? o(parseInt(v, 10)) : r(
          new us(`Invalid \`retry\` value: "${v}"`, {
            type: "invalid-retry",
            value: v,
            line: m
          })
        );
        break;
      default:
        r(
          new us(
            `Unknown field "${_.length > 20 ? `${_.slice(0, 20)}…` : _}"`,
            { type: "unknown-field", field: _, value: v, line: m }
          )
        );
        break;
    }
  }
  function p() {
    u.length > 0 && t({
      id: s,
      event: l || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), s = void 0, u = "", l = "";
  }
  function g(_ = {}) {
    i && _.consume && h(i), a = !0, s = void 0, u = "", l = "", i = "";
  }
  return { feed: d, reset: g };
}
function Vh(e) {
  const t = [];
  let r = "", o = 0;
  for (; o < e.length; ) {
    const n = e.indexOf("\r", o), i = e.indexOf(`
`, o);
    let a = -1;
    if (n !== -1 && i !== -1 ? a = Math.min(n, i) : n !== -1 ? n === e.length - 1 ? a = -1 : a = n : i !== -1 && (a = i), a === -1) {
      r = e.slice(o);
      break;
    } else {
      const s = e.slice(o, a);
      t.push(s), o = a + 1, e[o - 1] === "\r" && e[o] === `
` && o++;
    }
  }
  return [t, r];
}
class vl extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: o } = {}) {
    let n;
    super({
      start(i) {
        n = Jh({
          onEvent: (a) => {
            i.enqueue(a);
          },
          onError(a) {
            t === "terminate" ? i.error(a) : typeof t == "function" && t(a);
          },
          onRetry: r,
          onComment: o
        });
      },
      transform(i) {
        n.feed(i);
      }
    });
  }
}
const yl = Object.freeze({
  status: "aborted"
});
function T(e, t, r) {
  function o(s, u) {
    var l;
    Object.defineProperty(s, "_zod", {
      value: s._zod ?? {},
      enumerable: !1
    }), (l = s._zod).traits ?? (l.traits = /* @__PURE__ */ new Set()), s._zod.traits.add(e), t(s, u);
    for (const d in a.prototype)
      d in s || Object.defineProperty(s, d, { value: a.prototype[d].bind(s) });
    s._zod.constr = a, s._zod.def = u;
  }
  const n = (r == null ? void 0 : r.Parent) ?? Object;
  class i extends n {
  }
  Object.defineProperty(i, "name", { value: e });
  function a(s) {
    var u;
    const l = r != null && r.Parent ? new i() : this;
    o(l, s), (u = l._zod).deferred ?? (u.deferred = []);
    for (const d of l._zod.deferred)
      d();
    return l;
  }
  return Object.defineProperty(a, "init", { value: o }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (s) => {
      var u, l;
      return r != null && r.Parent && s instanceof r.Parent ? !0 : (l = (u = s == null ? void 0 : s._zod) == null ? void 0 : u.traits) == null ? void 0 : l.has(e);
    }
  }), Object.defineProperty(a, "name", { value: e }), a;
}
const _l = Symbol("zod_brand");
class Wt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Vr extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Er = {};
function Qe(e) {
  return e && Object.assign(Er, e), Er;
}
function Gh(e) {
  return e;
}
function Bh(e) {
  return e;
}
function Wh(e) {
}
function Hh(e) {
  throw new Error();
}
function Kh(e) {
}
function ni(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, n]) => t.indexOf(+o) === -1).map(([o, n]) => n);
}
function P(e, t = "|") {
  return e.map((r) => X(r)).join(t);
}
function Or(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function er(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function on(e) {
  return e == null;
}
function Gr(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function bl(e, t) {
  const r = (e.toString().split(".")[1] || "").length, o = t.toString();
  let n = (o.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(o)) {
    const u = o.match(/\d?e-(\d?)/);
    u != null && u[1] && (n = Number.parseInt(u[1]));
  }
  const i = r > n ? r : n, a = Number.parseInt(e.toFixed(i).replace(".", "")), s = Number.parseInt(t.toFixed(i).replace(".", ""));
  return a % s / 10 ** i;
}
const ls = Symbol("evaluating");
function se(e, t, r) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== ls)
        return o === void 0 && (o = ls, o = r()), o;
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Yh(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function Lt(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function At(...e) {
  const t = {};
  for (const r of e) {
    const o = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function Xh(e) {
  return At(e._zod.def);
}
function Qh(e, t) {
  return t ? t.reduce((r, o) => r == null ? void 0 : r[o], e) : e;
}
function ev(e) {
  const t = Object.keys(e), r = t.map((o) => e[o]);
  return Promise.all(r).then((o) => {
    const n = {};
    for (let i = 0; i < t.length; i++)
      n[t[i]] = o[i];
    return n;
  });
}
function tv(e = 10) {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let o = 0; o < e; o++)
    r += t[Math.floor(Math.random() * t.length)];
  return r;
}
function Zo(e) {
  return JSON.stringify(e);
}
const ri = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function gn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const wl = er(() => {
  var e;
  if (typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare")))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function Kt(e) {
  if (gn(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(gn(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Br(e) {
  return Kt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function nv(e) {
  let t = 0;
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t++;
  return t;
}
const rv = (e) => {
  const t = typeof e;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(e) ? "array" : e === null ? "null" : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? "promise" : typeof Map < "u" && e instanceof Map ? "map" : typeof Set < "u" && e instanceof Set ? "set" : typeof Date < "u" && e instanceof Date ? "date" : typeof File < "u" && e instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, Nr = /* @__PURE__ */ new Set(["string", "number", "symbol"]), $l = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function Dt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ct(e, t, r) {
  const o = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (o._zod.parent = e), o;
}
function j(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function ov(e) {
  let t;
  return new Proxy({}, {
    get(r, o, n) {
      return t ?? (t = e()), Reflect.get(t, o, n);
    },
    set(r, o, n, i) {
      return t ?? (t = e()), Reflect.set(t, o, n, i);
    },
    has(r, o) {
      return t ?? (t = e()), Reflect.has(t, o);
    },
    deleteProperty(r, o) {
      return t ?? (t = e()), Reflect.deleteProperty(t, o);
    },
    ownKeys(r) {
      return t ?? (t = e()), Reflect.ownKeys(t);
    },
    getOwnPropertyDescriptor(r, o) {
      return t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, o);
    },
    defineProperty(r, o, n) {
      return t ?? (t = e()), Reflect.defineProperty(t, o, n);
    }
  });
}
function X(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Il(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const kl = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, xl = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function Sl(e, t) {
  const r = e._zod.def, o = At(e._zod.def, {
    get shape() {
      const n = {};
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (n[i] = r.shape[i]);
      }
      return Lt(this, "shape", n), n;
    },
    checks: []
  });
  return ct(e, o);
}
function Tl(e, t) {
  const r = e._zod.def, o = At(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete n[i];
      }
      return Lt(this, "shape", n), n;
    },
    checks: []
  });
  return ct(e, o);
}
function El(e, t) {
  if (!Kt(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = At(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return Lt(this, "shape", i), i;
    },
    checks: []
  });
  return ct(e, n);
}
function Ol(e, t) {
  if (!Kt(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return Lt(this, "shape", o), o;
    },
    checks: e._zod.def.checks
  };
  return ct(e, r);
}
function Nl(e, t) {
  const r = At(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Lt(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ct(e, r);
}
function Cl(e, t, r) {
  const o = At(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, i = { ...n };
      if (r)
        for (const a in r) {
          if (!(a in n))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (i[a] = e ? new e({
            type: "optional",
            innerType: n[a]
          }) : n[a]);
        }
      else
        for (const a in n)
          i[a] = e ? new e({
            type: "optional",
            innerType: n[a]
          }) : n[a];
      return Lt(this, "shape", i), i;
    },
    checks: []
  });
  return ct(t, o);
}
function Rl(e, t, r) {
  const o = At(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, i = { ...n };
      if (r)
        for (const a in r) {
          if (!(a in i))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (i[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          }));
        }
      else
        for (const a in n)
          i[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          });
      return Lt(this, "shape", i), i;
    },
    checks: []
  });
  return ct(t, o);
}
function Vt(e, t = 0) {
  var r;
  if (e.aborted === !0)
    return !0;
  for (let o = t; o < e.issues.length; o++)
    if (((r = e.issues[o]) == null ? void 0 : r.continue) !== !0)
      return !0;
  return !1;
}
function ht(e, t) {
  return t.map((r) => {
    var o;
    return (o = r).path ?? (o.path = []), r.path.unshift(e), r;
  });
}
function Mn(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function bt(e, t, r) {
  var n, i, a, s, u, l;
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const d = Mn((a = (i = (n = e.inst) == null ? void 0 : n._zod.def) == null ? void 0 : i.error) == null ? void 0 : a.call(i, e)) ?? Mn((s = t == null ? void 0 : t.error) == null ? void 0 : s.call(t, e)) ?? Mn((u = r.customError) == null ? void 0 : u.call(r, e)) ?? Mn((l = r.localeError) == null ? void 0 : l.call(r, e)) ?? "Invalid input";
    o.message = d;
  }
  return delete o.inst, delete o.continue, t != null && t.reportInput || delete o.input, o;
}
function Wr(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function Hr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function hn(...e) {
  const [t, r, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: o
  } : { ...t };
}
function iv(e) {
  return Object.entries(e).filter(([t, r]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
function Al(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    r[o] = t.charCodeAt(o);
  return r;
}
function jl(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return btoa(t);
}
function av(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = "=".repeat((4 - t.length % 4) % 4);
  return Al(t + r);
}
function sv(e) {
  return jl(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function uv(e) {
  const t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const r = new Uint8Array(t.length / 2);
  for (let o = 0; o < t.length; o += 2)
    r[o / 2] = Number.parseInt(t.slice(o, o + 2), 16);
  return r;
}
function lv(e) {
  return Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
}
class cv {
  constructor(...t) {
  }
}
const Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIGINT_FORMAT_RANGES: xl,
  Class: cv,
  NUMBER_FORMAT_RANGES: kl,
  aborted: Vt,
  allowsEval: wl,
  assert: Kh,
  assertEqual: Gh,
  assertIs: Wh,
  assertNever: Hh,
  assertNotEqual: Bh,
  assignProp: Lt,
  base64ToUint8Array: Al,
  base64urlToUint8Array: av,
  cached: er,
  captureStackTrace: ri,
  cleanEnum: iv,
  cleanRegex: Gr,
  clone: ct,
  cloneDef: Xh,
  createTransparentProxy: ov,
  defineLazy: se,
  esc: Zo,
  escapeRegex: Dt,
  extend: El,
  finalizeIssue: bt,
  floatSafeRemainder: bl,
  getElementAtPath: Qh,
  getEnumValues: ni,
  getLengthableOrigin: Hr,
  getParsedType: rv,
  getSizableOrigin: Wr,
  hexToUint8Array: uv,
  isObject: gn,
  isPlainObject: Kt,
  issue: hn,
  joinValues: P,
  jsonStringifyReplacer: Or,
  merge: Nl,
  mergeDefs: At,
  normalizeParams: j,
  nullish: on,
  numKeys: nv,
  objectClone: Yh,
  omit: Tl,
  optionalKeys: Il,
  partial: Cl,
  pick: Sl,
  prefixIssues: ht,
  primitiveTypes: $l,
  promiseAllObject: ev,
  propertyKeyTypes: Nr,
  randomString: tv,
  required: Rl,
  safeExtend: Ol,
  shallowClone: Br,
  stringifyPrimitive: X,
  uint8ArrayToBase64: jl,
  uint8ArrayToBase64url: sv,
  uint8ArrayToHex: lv,
  unwrapMessage: Mn
}, Symbol.toStringTag, { value: "Module" })), Pl = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Or, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, oi = T("$ZodError", Pl), ut = T("$ZodError", Pl, { Parent: Error });
function ii(e, t = (r) => r.message) {
  const r = {}, o = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : o.push(t(n));
  return { formErrors: o, fieldErrors: r };
}
function ai(e, t) {
  const r = t || function(i) {
    return i.message;
  }, o = { _errors: [] }, n = (i) => {
    for (const a of i.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map((s) => n({ issues: s }));
      else if (a.code === "invalid_key")
        n({ issues: a.issues });
      else if (a.code === "invalid_element")
        n({ issues: a.issues });
      else if (a.path.length === 0)
        o._errors.push(r(a));
      else {
        let s = o, u = 0;
        for (; u < a.path.length; ) {
          const l = a.path[u];
          u === a.path.length - 1 ? (s[l] = s[l] || { _errors: [] }, s[l]._errors.push(r(a))) : s[l] = s[l] || { _errors: [] }, s = s[l], u++;
        }
      }
  };
  return n(e), o;
}
function zl(e, t) {
  const r = t || function(i) {
    return i.message;
  }, o = { errors: [] }, n = (i, a = []) => {
    var s, u;
    for (const l of i.issues)
      if (l.code === "invalid_union" && l.errors.length)
        l.errors.map((d) => n({ issues: d }, l.path));
      else if (l.code === "invalid_key")
        n({ issues: l.issues }, l.path);
      else if (l.code === "invalid_element")
        n({ issues: l.issues }, l.path);
      else {
        const d = [...a, ...l.path];
        if (d.length === 0) {
          o.errors.push(r(l));
          continue;
        }
        let h = o, y = 0;
        for (; y < d.length; ) {
          const p = d[y], g = y === d.length - 1;
          typeof p == "string" ? (h.properties ?? (h.properties = {}), (s = h.properties)[p] ?? (s[p] = { errors: [] }), h = h.properties[p]) : (h.items ?? (h.items = []), (u = h.items)[p] ?? (u[p] = { errors: [] }), h = h.items[p]), g && h.errors.push(r(l)), y++;
        }
      }
  };
  return n(e), o;
}
function Ul(e) {
  const t = [], r = e.map((o) => typeof o == "object" ? o.key : o);
  for (const o of r)
    typeof o == "number" ? t.push(`[${o}]`) : typeof o == "symbol" ? t.push(`[${JSON.stringify(String(o))}]`) : /[^\w$]/.test(o) ? t.push(`[${JSON.stringify(o)}]`) : (t.length && t.push("."), t.push(o));
  return t.join("");
}
function Dl(e) {
  var o;
  const t = [], r = [...e.issues].sort((n, i) => (n.path ?? []).length - (i.path ?? []).length);
  for (const n of r)
    t.push(`✖ ${n.message}`), (o = n.path) != null && o.length && t.push(`  → at ${Ul(n.path)}`);
  return t.join(`
`);
}
const tr = (e) => (t, r, o, n) => {
  const i = o ? Object.assign(o, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, i);
  if (a instanceof Promise)
    throw new Wt();
  if (a.issues.length) {
    const s = new ((n == null ? void 0 : n.Err) ?? e)(a.issues.map((u) => bt(u, i, Qe())));
    throw ri(s, n == null ? void 0 : n.callee), s;
  }
  return a.value;
}, qo = /* @__PURE__ */ tr(ut), nr = (e) => async (t, r, o, n) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, i);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const s = new ((n == null ? void 0 : n.Err) ?? e)(a.issues.map((u) => bt(u, i, Qe())));
    throw ri(s, n == null ? void 0 : n.callee), s;
  }
  return a.value;
}, Lo = /* @__PURE__ */ nr(ut), rr = (e) => (t, r, o) => {
  const n = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, n);
  if (i instanceof Promise)
    throw new Wt();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? oi)(i.issues.map((a) => bt(a, n, Qe())))
  } : { success: !0, data: i.value };
}, Zl = /* @__PURE__ */ rr(ut), or = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, n);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((a) => bt(a, n, Qe())))
  } : { success: !0, data: i.value };
}, ql = /* @__PURE__ */ or(ut), si = (e) => (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return tr(e)(t, r, n);
}, dv = /* @__PURE__ */ si(ut), ui = (e) => (t, r, o) => tr(e)(t, r, o), pv = /* @__PURE__ */ ui(ut), li = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return nr(e)(t, r, n);
}, mv = /* @__PURE__ */ li(ut), ci = (e) => async (t, r, o) => nr(e)(t, r, o), fv = /* @__PURE__ */ ci(ut), di = (e) => (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return rr(e)(t, r, n);
}, gv = /* @__PURE__ */ di(ut), pi = (e) => (t, r, o) => rr(e)(t, r, o), hv = /* @__PURE__ */ pi(ut), mi = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return or(e)(t, r, n);
}, vv = /* @__PURE__ */ mi(ut), fi = (e) => async (t, r, o) => or(e)(t, r, o), yv = /* @__PURE__ */ fi(ut), Ll = /^[cC][^\s-]{8,}$/, Fl = /^[0-9a-z]+$/, Jl = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Vl = /^[0-9a-vA-V]{20}$/, Gl = /^[A-Za-z0-9]{27}$/, Bl = /^[a-zA-Z0-9_-]{21}$/, Wl = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, _v = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Hl = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, vn = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, bv = /* @__PURE__ */ vn(4), wv = /* @__PURE__ */ vn(6), $v = /* @__PURE__ */ vn(7), Kl = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Iv = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, kv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Yl = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, xv = Yl, Sv = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Tv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Xl() {
  return new RegExp(Tv, "u");
}
const Ql = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ec = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, tc = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, nc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, rc = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, gi = /^[A-Za-z0-9_-]*$/, hi = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, oc = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, ic = /^\+(?:[0-9]){6,14}[0-9]$/, ac = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", sc = /* @__PURE__ */ new RegExp(`^${ac}$`);
function uc(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function lc(e) {
  return new RegExp(`^${uc(e)}$`);
}
function cc(e) {
  const t = uc({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${ac}T(?:${o})$`);
}
const dc = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, pc = /^-?\d+n?$/, mc = /^-?\d+$/, fc = /^-?\d+(?:\.\d+)?/, gc = /^(?:true|false)$/i, hc = /^null$/i, vc = /^undefined$/i, yc = /^[^A-Z]*$/, _c = /^[^a-z]*$/, bc = /^[0-9a-fA-F]*$/;
function ir(e, t) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function ar(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const Ev = /^[0-9a-fA-F]{32}$/, Ov = /* @__PURE__ */ ir(22, "=="), Nv = /* @__PURE__ */ ar(22), Cv = /^[0-9a-fA-F]{40}$/, Rv = /* @__PURE__ */ ir(27, "="), Av = /* @__PURE__ */ ar(27), jv = /^[0-9a-fA-F]{64}$/, Mv = /* @__PURE__ */ ir(43, "="), Pv = /* @__PURE__ */ ar(43), zv = /^[0-9a-fA-F]{96}$/, Uv = /* @__PURE__ */ ir(64, ""), Dv = /* @__PURE__ */ ar(64), Zv = /^[0-9a-fA-F]{128}$/, qv = /* @__PURE__ */ ir(86, "=="), Lv = /* @__PURE__ */ ar(86), vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: rc,
  base64url: gi,
  bigint: pc,
  boolean: gc,
  browserEmail: Sv,
  cidrv4: tc,
  cidrv6: nc,
  cuid: Ll,
  cuid2: Fl,
  date: sc,
  datetime: cc,
  domain: oc,
  duration: Wl,
  e164: ic,
  email: Kl,
  emoji: Xl,
  extendedDuration: _v,
  guid: Hl,
  hex: bc,
  hostname: hi,
  html5Email: Iv,
  idnEmail: xv,
  integer: mc,
  ipv4: Ql,
  ipv6: ec,
  ksuid: Gl,
  lowercase: yc,
  md5_base64: Ov,
  md5_base64url: Nv,
  md5_hex: Ev,
  nanoid: Bl,
  null: hc,
  number: fc,
  rfc5322Email: kv,
  sha1_base64: Rv,
  sha1_base64url: Av,
  sha1_hex: Cv,
  sha256_base64: Mv,
  sha256_base64url: Pv,
  sha256_hex: jv,
  sha384_base64: Uv,
  sha384_base64url: Dv,
  sha384_hex: zv,
  sha512_base64: qv,
  sha512_base64url: Lv,
  sha512_hex: Zv,
  string: dc,
  time: lc,
  ulid: Jl,
  undefined: vc,
  unicodeEmail: Yl,
  uppercase: _c,
  uuid: vn,
  uuid4: bv,
  uuid6: wv,
  uuid7: $v,
  xid: Vl
}, Symbol.toStringTag, { value: "Module" })), Te = /* @__PURE__ */ T("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), wc = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, yi = /* @__PURE__ */ T("$ZodCheckLessThan", (e, t) => {
  Te.init(e, t);
  const r = wc[typeof t.value];
  e._zod.onattach.push((o) => {
    const n = o._zod.bag, i = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value <= t.value : o.value < t.value) || o.issues.push({
      origin: r,
      code: "too_big",
      maximum: t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), _i = /* @__PURE__ */ T("$ZodCheckGreaterThan", (e, t) => {
  Te.init(e, t);
  const r = wc[typeof t.value];
  e._zod.onattach.push((o) => {
    const n = o._zod.bag, i = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value >= t.value : o.value > t.value) || o.issues.push({
      origin: r,
      code: "too_small",
      minimum: t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), $c = /* @__PURE__ */ T("$ZodCheckMultipleOf", (e, t) => {
  Te.init(e, t), e._zod.onattach.push((r) => {
    var o;
    (o = r._zod.bag).multipleOf ?? (o.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : bl(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ic = /* @__PURE__ */ T("$ZodCheckNumberFormat", (e, t) => {
  var a;
  Te.init(e, t), t.format = t.format || "float64";
  const r = (a = t.format) == null ? void 0 : a.includes("int"), o = r ? "int" : "number", [n, i] = kl[t.format];
  e._zod.onattach.push((s) => {
    const u = s._zod.bag;
    u.format = t.format, u.minimum = n, u.maximum = i, r && (u.pattern = mc);
  }), e._zod.check = (s) => {
    const u = s.value;
    if (r) {
      if (!Number.isInteger(u)) {
        s.issues.push({
          expected: o,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: u,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(u)) {
        u > 0 ? s.issues.push({
          input: u,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: o,
          continue: !t.abort
        }) : s.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: o,
          continue: !t.abort
        });
        return;
      }
    }
    u < n && s.issues.push({
      origin: "number",
      input: u,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), u > i && s.issues.push({
      origin: "number",
      input: u,
      code: "too_big",
      maximum: i,
      inst: e
    });
  };
}), kc = /* @__PURE__ */ T("$ZodCheckBigIntFormat", (e, t) => {
  Te.init(e, t);
  const [r, o] = xl[t.format];
  e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, i.minimum = r, i.maximum = o;
  }), e._zod.check = (n) => {
    const i = n.value;
    i < r && n.issues.push({
      origin: "bigint",
      input: i,
      code: "too_small",
      minimum: r,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), i > o && n.issues.push({
      origin: "bigint",
      input: i,
      code: "too_big",
      maximum: o,
      inst: e
    });
  };
}), xc = /* @__PURE__ */ T("$ZodCheckMaxSize", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !on(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const n = o.value;
    n.size <= t.maximum || o.issues.push({
      origin: Wr(n),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Sc = /* @__PURE__ */ T("$ZodCheckMinSize", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !on(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const n = o.value;
    n.size >= t.minimum || o.issues.push({
      origin: Wr(n),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Tc = /* @__PURE__ */ T("$ZodCheckSizeEquals", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !on(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e._zod.check = (o) => {
    const n = o.value, i = n.size;
    if (i === t.size)
      return;
    const a = i > t.size;
    o.issues.push({
      origin: Wr(n),
      ...a ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ec = /* @__PURE__ */ T("$ZodCheckMaxLength", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !on(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const n = o.value;
    if (n.length <= t.maximum)
      return;
    const a = Hr(n);
    o.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Oc = /* @__PURE__ */ T("$ZodCheckMinLength", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !on(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const n = o.value;
    if (n.length >= t.minimum)
      return;
    const a = Hr(n);
    o.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Nc = /* @__PURE__ */ T("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !on(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (o) => {
    const n = o.value, i = n.length;
    if (i === t.length)
      return;
    const a = Hr(n), s = i > t.length;
    o.issues.push({
      origin: a,
      ...s ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), sr = /* @__PURE__ */ T("$ZodCheckStringFormat", (e, t) => {
  var r, o;
  Te.init(e, t), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (o = e._zod).check ?? (o.check = () => {
  });
}), Cc = /* @__PURE__ */ T("$ZodCheckRegex", (e, t) => {
  sr.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Rc = /* @__PURE__ */ T("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = yc), sr.init(e, t);
}), Ac = /* @__PURE__ */ T("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = _c), sr.init(e, t);
}), jc = /* @__PURE__ */ T("$ZodCheckIncludes", (e, t) => {
  Te.init(e, t);
  const r = Dt(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = o, e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Mc = /* @__PURE__ */ T("$ZodCheckStartsWith", (e, t) => {
  Te.init(e, t);
  const r = new RegExp(`^${Dt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.startsWith(t.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Pc = /* @__PURE__ */ T("$ZodCheckEndsWith", (e, t) => {
  Te.init(e, t);
  const r = new RegExp(`.*${Dt(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.endsWith(t.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function cs(e, t, r) {
  e.issues.length && t.issues.push(...ht(r, e.issues));
}
const zc = /* @__PURE__ */ T("$ZodCheckProperty", (e, t) => {
  Te.init(e, t), e._zod.check = (r) => {
    const o = t.schema._zod.run({
      value: r.value[t.property],
      issues: []
    }, {});
    if (o instanceof Promise)
      return o.then((n) => cs(n, r, t.property));
    cs(o, r, t.property);
  };
}), Uc = /* @__PURE__ */ T("$ZodCheckMimeType", (e, t) => {
  Te.init(e, t);
  const r = new Set(t.mime);
  e._zod.onattach.push((o) => {
    o._zod.bag.mime = t.mime;
  }), e._zod.check = (o) => {
    r.has(o.value.type) || o.issues.push({
      code: "invalid_value",
      values: t.mime,
      input: o.value.type,
      inst: e,
      continue: !t.abort
    });
  };
}), Dc = /* @__PURE__ */ T("$ZodCheckOverwrite", (e, t) => {
  Te.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Zc {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const o = t.split(`
`).filter((a) => a), n = Math.min(...o.map((a) => a.length - a.trimStart().length)), i = o.map((a) => a.slice(n)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of i)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this == null ? void 0 : this.args, n = [...((this == null ? void 0 : this.content) ?? [""]).map((i) => `  ${i}`)];
    return new t(...r, n.join(`
`));
  }
}
const qc = {
  major: 4,
  minor: 1,
  patch: 11
}, Q = /* @__PURE__ */ T("$ZodType", (e, t) => {
  var n;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = qc;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const i of o)
    for (const a of i._zod.onattach)
      a(e);
  if (o.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), (n = e._zod.deferred) == null || n.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const i = (s, u, l) => {
      let d = Vt(s), h;
      for (const y of u) {
        if (y._zod.def.when) {
          if (!y._zod.def.when(s))
            continue;
        } else if (d)
          continue;
        const p = s.issues.length, g = y._zod.check(s);
        if (g instanceof Promise && (l == null ? void 0 : l.async) === !1)
          throw new Wt();
        if (h || g instanceof Promise)
          h = (h ?? Promise.resolve()).then(async () => {
            await g, s.issues.length !== p && (d || (d = Vt(s, p)));
          });
        else {
          if (s.issues.length === p)
            continue;
          d || (d = Vt(s, p));
        }
      }
      return h ? h.then(() => s) : s;
    }, a = (s, u, l) => {
      if (Vt(s))
        return s.aborted = !0, s;
      const d = i(u, o, l);
      if (d instanceof Promise) {
        if (l.async === !1)
          throw new Wt();
        return d.then((h) => e._zod.parse(h, l));
      }
      return e._zod.parse(d, l);
    };
    e._zod.run = (s, u) => {
      if (u.skipChecks)
        return e._zod.parse(s, u);
      if (u.direction === "backward") {
        const d = e._zod.parse({ value: s.value, issues: [] }, { ...u, skipChecks: !0 });
        return d instanceof Promise ? d.then((h) => a(h, s, u)) : a(d, s, u);
      }
      const l = e._zod.parse(s, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new Wt();
        return l.then((d) => i(d, o, u));
      }
      return i(l, o, u);
    };
  }
  e["~standard"] = {
    validate: (i) => {
      var a;
      try {
        const s = Zl(e, i);
        return s.success ? { value: s.data } : { issues: (a = s.error) == null ? void 0 : a.issues };
      } catch {
        return ql(e, i).then((u) => {
          var l;
          return u.success ? { value: u.data } : { issues: (l = u.error) == null ? void 0 : l.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ur = /* @__PURE__ */ T("$ZodString", (e, t) => {
  var r;
  Q.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? dc(e._zod.bag), e._zod.parse = (o, n) => {
    if (t.coerce)
      try {
        o.value = String(o.value);
      } catch {
      }
    return typeof o.value == "string" || o.issues.push({
      expected: "string",
      code: "invalid_type",
      input: o.value,
      inst: e
    }), o;
  };
}), be = /* @__PURE__ */ T("$ZodStringFormat", (e, t) => {
  sr.init(e, t), ur.init(e, t);
}), Lc = /* @__PURE__ */ T("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Hl), be.init(e, t);
}), Fc = /* @__PURE__ */ T("$ZodUUID", (e, t) => {
  if (t.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = vn(o));
  } else
    t.pattern ?? (t.pattern = vn());
  be.init(e, t);
}), Jc = /* @__PURE__ */ T("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Kl), be.init(e, t);
}), Vc = /* @__PURE__ */ T("$ZodURL", (e, t) => {
  be.init(e, t), e._zod.check = (r) => {
    try {
      const o = r.value.trim(), n = new URL(o);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: hi.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = n.href : r.value = o;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Gc = /* @__PURE__ */ T("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Xl()), be.init(e, t);
}), Bc = /* @__PURE__ */ T("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Bl), be.init(e, t);
}), Wc = /* @__PURE__ */ T("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Ll), be.init(e, t);
}), Hc = /* @__PURE__ */ T("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Fl), be.init(e, t);
}), Kc = /* @__PURE__ */ T("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Jl), be.init(e, t);
}), Yc = /* @__PURE__ */ T("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Vl), be.init(e, t);
}), Xc = /* @__PURE__ */ T("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Gl), be.init(e, t);
}), Qc = /* @__PURE__ */ T("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = cc(t)), be.init(e, t);
}), ed = /* @__PURE__ */ T("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = sc), be.init(e, t);
}), td = /* @__PURE__ */ T("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = lc(t)), be.init(e, t);
}), nd = /* @__PURE__ */ T("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Wl), be.init(e, t);
}), rd = /* @__PURE__ */ T("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Ql), be.init(e, t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.format = "ipv4";
  });
}), od = /* @__PURE__ */ T("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = ec), be.init(e, t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), id = /* @__PURE__ */ T("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = tc), be.init(e, t);
}), ad = /* @__PURE__ */ T("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = nc), be.init(e, t), e._zod.check = (r) => {
    const o = r.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [n, i] = o;
      if (!i)
        throw new Error();
      const a = Number(i);
      if (`${a}` !== i)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function bi(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const sd = /* @__PURE__ */ T("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = rc), be.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    bi(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function ud(e) {
  if (!gi.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return bi(r);
}
const ld = /* @__PURE__ */ T("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = gi), be.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    ud(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), cd = /* @__PURE__ */ T("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = ic), be.init(e, t);
});
function dd(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [o] = r;
    if (!o)
      return !1;
    const n = JSON.parse(atob(o));
    return !("typ" in n && (n == null ? void 0 : n.typ) !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const pd = /* @__PURE__ */ T("$ZodJWT", (e, t) => {
  be.init(e, t), e._zod.check = (r) => {
    dd(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), md = /* @__PURE__ */ T("$ZodCustomStringFormat", (e, t) => {
  be.init(e, t), e._zod.check = (r) => {
    t.fn(r.value) || r.issues.push({
      code: "invalid_format",
      format: t.format,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), wi = /* @__PURE__ */ T("$ZodNumber", (e, t) => {
  Q.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? fc, e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const n = r.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return r;
    const i = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...i ? { received: i } : {}
    }), r;
  };
}), fd = /* @__PURE__ */ T("$ZodNumber", (e, t) => {
  Ic.init(e, t), wi.init(e, t);
}), $i = /* @__PURE__ */ T("$ZodBoolean", (e, t) => {
  Q.init(e, t), e._zod.pattern = gc, e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const n = r.value;
    return typeof n == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Ii = /* @__PURE__ */ T("$ZodBigInt", (e, t) => {
  Q.init(e, t), e._zod.pattern = pc, e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = BigInt(r.value);
      } catch {
      }
    return typeof r.value == "bigint" || r.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), gd = /* @__PURE__ */ T("$ZodBigInt", (e, t) => {
  kc.init(e, t), Ii.init(e, t);
}), hd = /* @__PURE__ */ T("$ZodSymbol", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n == "symbol" || r.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), vd = /* @__PURE__ */ T("$ZodUndefined", (e, t) => {
  Q.init(e, t), e._zod.pattern = vc, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), yd = /* @__PURE__ */ T("$ZodNull", (e, t) => {
  Q.init(e, t), e._zod.pattern = hc, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, o) => {
    const n = r.value;
    return n === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), _d = /* @__PURE__ */ T("$ZodAny", (e, t) => {
  Q.init(e, t), e._zod.parse = (r) => r;
}), bd = /* @__PURE__ */ T("$ZodUnknown", (e, t) => {
  Q.init(e, t), e._zod.parse = (r) => r;
}), wd = /* @__PURE__ */ T("$ZodNever", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), $d = /* @__PURE__ */ T("$ZodVoid", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "void",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Id = /* @__PURE__ */ T("$ZodDate", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = new Date(r.value);
      } catch {
      }
    const n = r.value, i = n instanceof Date;
    return i && !Number.isNaN(n.getTime()) || r.issues.push({
      expected: "date",
      code: "invalid_type",
      input: n,
      ...i ? { received: "Invalid Date" } : {},
      inst: e
    }), r;
  };
});
function ds(e, t, r) {
  e.issues.length && t.issues.push(...ht(r, e.issues)), t.value[r] = e.value;
}
const kd = /* @__PURE__ */ T("$ZodArray", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!Array.isArray(n))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    r.value = Array(n.length);
    const i = [];
    for (let a = 0; a < n.length; a++) {
      const s = n[a], u = t.element._zod.run({
        value: s,
        issues: []
      }, o);
      u instanceof Promise ? i.push(u.then((l) => ds(l, r, a))) : ds(u, r, a);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function Cr(e, t, r, o) {
  e.issues.length && t.issues.push(...ht(r, e.issues)), e.value === void 0 ? r in o && (t.value[r] = void 0) : t.value[r] = e.value;
}
function xd(e) {
  var o, n, i, a;
  const t = Object.keys(e.shape);
  for (const s of t)
    if (!((a = (i = (n = (o = e.shape) == null ? void 0 : o[s]) == null ? void 0 : n._zod) == null ? void 0 : i.traits) != null && a.has("$ZodType")))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const r = Il(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function Sd(e, t, r, o, n, i) {
  const a = [], s = n.keySet, u = n.catchall._zod, l = u.def.type;
  for (const d of Object.keys(t)) {
    if (s.has(d))
      continue;
    if (l === "never") {
      a.push(d);
      continue;
    }
    const h = u.run({ value: t[d], issues: [] }, o);
    h instanceof Promise ? e.push(h.then((y) => Cr(y, r, d, t))) : Cr(h, r, d, t);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Td = /* @__PURE__ */ T("$ZodObject", (e, t) => {
  Q.init(e, t);
  const r = Object.getOwnPropertyDescriptor(t, "shape");
  if (!(r != null && r.get)) {
    const s = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const u = { ...s };
        return Object.defineProperty(t, "shape", {
          value: u
        }), u;
      }
    });
  }
  const o = er(() => xd(t));
  se(e._zod, "propValues", () => {
    const s = t.shape, u = {};
    for (const l in s) {
      const d = s[l]._zod;
      if (d.values) {
        u[l] ?? (u[l] = /* @__PURE__ */ new Set());
        for (const h of d.values)
          u[l].add(h);
      }
    }
    return u;
  });
  const n = gn, i = t.catchall;
  let a;
  e._zod.parse = (s, u) => {
    a ?? (a = o.value);
    const l = s.value;
    if (!n(l))
      return s.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), s;
    s.value = {};
    const d = [], h = a.shape;
    for (const y of a.keys) {
      const g = h[y]._zod.run({ value: l[y], issues: [] }, u);
      g instanceof Promise ? d.push(g.then((_) => Cr(_, s, y, l))) : Cr(g, s, y, l);
    }
    return i ? Sd(d, l, s, u, o.value, e) : d.length ? Promise.all(d).then(() => s) : s;
  };
}), Ed = /* @__PURE__ */ T("$ZodObjectJIT", (e, t) => {
  Td.init(e, t);
  const r = e._zod.parse, o = er(() => xd(t)), n = (y) => {
    const p = new Zc(["shape", "payload", "ctx"]), g = o.value, _ = ($) => {
      const w = Zo($);
      return `shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const v = /* @__PURE__ */ Object.create(null);
    let m = 0;
    for (const $ of g.keys)
      v[$] = `key_${m++}`;
    p.write("const newResult = {};");
    for (const $ of g.keys) {
      const w = v[$], N = Zo($);
      p.write(`const ${w} = ${_($)};`), p.write(`
        if (${w}.issues.length) {
          payload.issues = payload.issues.concat(${w}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${N}, ...iss.path] : [${N}]
          })));
        }
        
        
        if (${w}.value === undefined) {
          if (${N} in input) {
            newResult[${N}] = undefined;
          }
        } else {
          newResult[${N}] = ${w}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const b = p.compile();
    return ($, w) => b(y, $, w);
  };
  let i;
  const a = gn, s = !Er.jitless, l = s && wl.value, d = t.catchall;
  let h;
  e._zod.parse = (y, p) => {
    h ?? (h = o.value);
    const g = y.value;
    return a(g) ? s && l && (p == null ? void 0 : p.async) === !1 && p.jitless !== !0 ? (i || (i = n(t.shape)), y = i(y, p), d ? Sd([], g, y, p, h, e) : y) : r(y, p) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: g,
      inst: e
    }), y);
  };
});
function ps(e, t, r, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const n = e.filter((i) => !Vt(i));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((i) => i.issues.map((a) => bt(a, o, Qe())))
  }), t);
}
const ki = /* @__PURE__ */ T("$ZodUnion", (e, t) => {
  Q.init(e, t), se(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), se(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), se(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), se(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${n.map((i) => Gr(i.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, o = t.options[0]._zod.run;
  e._zod.parse = (n, i) => {
    if (r)
      return o(n, i);
    let a = !1;
    const s = [];
    for (const u of t.options) {
      const l = u._zod.run({
        value: n.value,
        issues: []
      }, i);
      if (l instanceof Promise)
        s.push(l), a = !0;
      else {
        if (l.issues.length === 0)
          return l;
        s.push(l);
      }
    }
    return a ? Promise.all(s).then((u) => ps(u, n, e, i)) : ps(s, n, e, i);
  };
}), Od = /* @__PURE__ */ T("$ZodDiscriminatedUnion", (e, t) => {
  ki.init(e, t);
  const r = e._zod.parse;
  se(e._zod, "propValues", () => {
    const n = {};
    for (const i of t.options) {
      const a = i._zod.propValues;
      if (!a || Object.keys(a).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const [s, u] of Object.entries(a)) {
        n[s] || (n[s] = /* @__PURE__ */ new Set());
        for (const l of u)
          n[s].add(l);
      }
    }
    return n;
  });
  const o = er(() => {
    var a;
    const n = t.options, i = /* @__PURE__ */ new Map();
    for (const s of n) {
      const u = (a = s._zod.propValues) == null ? void 0 : a[t.discriminator];
      if (!u || u.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
      for (const l of u) {
        if (i.has(l))
          throw new Error(`Duplicate discriminator value "${String(l)}"`);
        i.set(l, s);
      }
    }
    return i;
  });
  e._zod.parse = (n, i) => {
    const a = n.value;
    if (!gn(a))
      return n.issues.push({
        code: "invalid_type",
        expected: "object",
        input: a,
        inst: e
      }), n;
    const s = o.value.get(a == null ? void 0 : a[t.discriminator]);
    return s ? s._zod.run(n, i) : t.unionFallback ? r(n, i) : (n.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: a,
      path: [t.discriminator],
      inst: e
    }), n);
  };
}), Nd = /* @__PURE__ */ T("$ZodIntersection", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value, i = t.left._zod.run({ value: n, issues: [] }, o), a = t.right._zod.run({ value: n, issues: [] }, o);
    return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([u, l]) => ms(r, u, l)) : ms(r, i, a);
  };
});
function Fo(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Kt(e) && Kt(t)) {
    const r = Object.keys(t), o = Object.keys(e).filter((i) => r.indexOf(i) !== -1), n = { ...e, ...t };
    for (const i of o) {
      const a = Fo(e[i], t[i]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...a.mergeErrorPath]
        };
      n[i] = a.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let o = 0; o < e.length; o++) {
      const n = e[o], i = t[o], a = Fo(n, i);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function ms(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), Vt(e))
    return e;
  const o = Fo(t.value, r.value);
  if (!o.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return e.value = o.data, e;
}
const xi = /* @__PURE__ */ T("$ZodTuple", (e, t) => {
  Q.init(e, t);
  const r = t.items, o = r.length - [...r].reverse().findIndex((n) => n._zod.optin !== "optional");
  e._zod.parse = (n, i) => {
    const a = n.value;
    if (!Array.isArray(a))
      return n.issues.push({
        input: a,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), n;
    n.value = [];
    const s = [];
    if (!t.rest) {
      const l = a.length > r.length, d = a.length < o - 1;
      if (l || d)
        return n.issues.push({
          ...l ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
          input: a,
          inst: e,
          origin: "array"
        }), n;
    }
    let u = -1;
    for (const l of r) {
      if (u++, u >= a.length && u >= o)
        continue;
      const d = l._zod.run({
        value: a[u],
        issues: []
      }, i);
      d instanceof Promise ? s.push(d.then((h) => wr(h, n, u))) : wr(d, n, u);
    }
    if (t.rest) {
      const l = a.slice(r.length);
      for (const d of l) {
        u++;
        const h = t.rest._zod.run({
          value: d,
          issues: []
        }, i);
        h instanceof Promise ? s.push(h.then((y) => wr(y, n, u))) : wr(h, n, u);
      }
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function wr(e, t, r) {
  e.issues.length && t.issues.push(...ht(r, e.issues)), t.value[r] = e.value;
}
const Cd = /* @__PURE__ */ T("$ZodRecord", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!Kt(n))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const i = [];
    if (t.keyType._zod.values) {
      const a = t.keyType._zod.values;
      r.value = {};
      for (const u of a)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          const l = t.valueType._zod.run({ value: n[u], issues: [] }, o);
          l instanceof Promise ? i.push(l.then((d) => {
            d.issues.length && r.issues.push(...ht(u, d.issues)), r.value[u] = d.value;
          })) : (l.issues.length && r.issues.push(...ht(u, l.issues)), r.value[u] = l.value);
        }
      let s;
      for (const u in n)
        a.has(u) || (s = s ?? [], s.push(u));
      s && s.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: s
      });
    } else {
      r.value = {};
      for (const a of Reflect.ownKeys(n)) {
        if (a === "__proto__")
          continue;
        const s = t.keyType._zod.run({ value: a, issues: [] }, o);
        if (s instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (s.issues.length) {
          r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: s.issues.map((l) => bt(l, o, Qe())),
            input: a,
            path: [a],
            inst: e
          }), r.value[s.value] = s.value;
          continue;
        }
        const u = t.valueType._zod.run({ value: n[a], issues: [] }, o);
        u instanceof Promise ? i.push(u.then((l) => {
          l.issues.length && r.issues.push(...ht(a, l.issues)), r.value[s.value] = l.value;
        })) : (u.issues.length && r.issues.push(...ht(a, u.issues)), r.value[s.value] = u.value);
      }
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
}), Rd = /* @__PURE__ */ T("$ZodMap", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!(n instanceof Map))
      return r.issues.push({
        expected: "map",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const i = [];
    r.value = /* @__PURE__ */ new Map();
    for (const [a, s] of n) {
      const u = t.keyType._zod.run({ value: a, issues: [] }, o), l = t.valueType._zod.run({ value: s, issues: [] }, o);
      u instanceof Promise || l instanceof Promise ? i.push(Promise.all([u, l]).then(([d, h]) => {
        fs(d, h, r, a, n, e, o);
      })) : fs(u, l, r, a, n, e, o);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function fs(e, t, r, o, n, i, a) {
  e.issues.length && (Nr.has(typeof o) ? r.issues.push(...ht(o, e.issues)) : r.issues.push({
    code: "invalid_key",
    origin: "map",
    input: n,
    inst: i,
    issues: e.issues.map((s) => bt(s, a, Qe()))
  })), t.issues.length && (Nr.has(typeof o) ? r.issues.push(...ht(o, t.issues)) : r.issues.push({
    origin: "map",
    code: "invalid_element",
    input: n,
    inst: i,
    key: o,
    issues: t.issues.map((s) => bt(s, a, Qe()))
  })), r.value.set(e.value, t.value);
}
const Ad = /* @__PURE__ */ T("$ZodSet", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!(n instanceof Set))
      return r.issues.push({
        input: n,
        inst: e,
        expected: "set",
        code: "invalid_type"
      }), r;
    const i = [];
    r.value = /* @__PURE__ */ new Set();
    for (const a of n) {
      const s = t.valueType._zod.run({ value: a, issues: [] }, o);
      s instanceof Promise ? i.push(s.then((u) => gs(u, r))) : gs(s, r);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function gs(e, t) {
  e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
const jd = /* @__PURE__ */ T("$ZodEnum", (e, t) => {
  Q.init(e, t);
  const r = ni(t.entries), o = new Set(r);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${r.filter((n) => Nr.has(typeof n)).map((n) => typeof n == "string" ? Dt(n) : n.toString()).join("|")})$`), e._zod.parse = (n, i) => {
    const a = n.value;
    return o.has(a) || n.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), n;
  };
}), Md = /* @__PURE__ */ T("$ZodLiteral", (e, t) => {
  if (Q.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? Dt(r) : r ? Dt(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const n = r.value;
    return e._zod.values.has(n) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: n,
      inst: e
    }), r;
  };
}), Pd = /* @__PURE__ */ T("$ZodFile", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return n instanceof File || r.issues.push({
      expected: "file",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), zd = /* @__PURE__ */ T("$ZodTransform", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Vr(e.constructor.name);
    const n = t.transform(r.value, r);
    if (o.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((a) => (r.value = a, r));
    if (n instanceof Promise)
      throw new Wt();
    return r.value = n, r;
  };
});
function hs(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Ud = /* @__PURE__ */ T("$ZodOptional", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", se(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), se(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gr(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, o) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(r, o);
      return n instanceof Promise ? n.then((i) => hs(i, r.value)) : hs(n, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, o);
  };
}), Dd = /* @__PURE__ */ T("$ZodNullable", (e, t) => {
  Q.init(e, t), se(e._zod, "optin", () => t.innerType._zod.optin), se(e._zod, "optout", () => t.innerType._zod.optout), se(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gr(r.source)}|null)$`) : void 0;
  }), se(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, o) => r.value === null ? r : t.innerType._zod.run(r, o);
}), Zd = /* @__PURE__ */ T("$ZodDefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", se(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => vs(i, t)) : vs(n, t);
  };
});
function vs(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const qd = /* @__PURE__ */ T("$ZodPrefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", se(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => (o.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, o));
}), Ld = /* @__PURE__ */ T("$ZodNonOptional", (e, t) => {
  Q.init(e, t), se(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (r, o) => {
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => ys(i, e)) : ys(n, e);
  };
});
function ys(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Fd = /* @__PURE__ */ T("$ZodSuccess", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Vr("ZodSuccess");
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => (r.value = i.issues.length === 0, r)) : (r.value = n.issues.length === 0, r);
  };
}), Jd = /* @__PURE__ */ T("$ZodCatch", (e, t) => {
  Q.init(e, t), se(e._zod, "optin", () => t.innerType._zod.optin), se(e._zod, "optout", () => t.innerType._zod.optout), se(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => (r.value = i.value, i.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: i.issues.map((a) => bt(a, o, Qe()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((i) => bt(i, o, Qe()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), Vd = /* @__PURE__ */ T("$ZodNaN", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => ((typeof r.value != "number" || !Number.isNaN(r.value)) && r.issues.push({
    input: r.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), r);
}), Gd = /* @__PURE__ */ T("$ZodPipe", (e, t) => {
  Q.init(e, t), se(e._zod, "values", () => t.in._zod.values), se(e._zod, "optin", () => t.in._zod.optin), se(e._zod, "optout", () => t.out._zod.optout), se(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => $r(a, t.in, o)) : $r(i, t.in, o);
    }
    const n = t.in._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => $r(i, t.out, o)) : $r(n, t.out, o);
  };
});
function $r(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Si = /* @__PURE__ */ T("$ZodCodec", (e, t) => {
  Q.init(e, t), se(e._zod, "values", () => t.in._zod.values), se(e._zod, "optin", () => t.in._zod.optin), se(e._zod, "optout", () => t.out._zod.optout), se(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, o) => {
    if ((o.direction || "forward") === "forward") {
      const i = t.in._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => Ir(a, t, o)) : Ir(i, t, o);
    } else {
      const i = t.out._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => Ir(a, t, o)) : Ir(i, t, o);
    }
  };
});
function Ir(e, t, r) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((r.direction || "forward") === "forward") {
    const n = t.transform(e.value, e);
    return n instanceof Promise ? n.then((i) => kr(e, i, t.out, r)) : kr(e, n, t.out, r);
  } else {
    const n = t.reverseTransform(e.value, e);
    return n instanceof Promise ? n.then((i) => kr(e, i, t.in, r)) : kr(e, n, t.in, r);
  }
}
function kr(e, t, r, o) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: t, issues: e.issues }, o);
}
const Bd = /* @__PURE__ */ T("$ZodReadonly", (e, t) => {
  Q.init(e, t), se(e._zod, "propValues", () => t.innerType._zod.propValues), se(e._zod, "values", () => t.innerType._zod.values), se(e._zod, "optin", () => t.innerType._zod.optin), se(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then(_s) : _s(n);
  };
});
function _s(e) {
  return e.value = Object.freeze(e.value), e;
}
const Wd = /* @__PURE__ */ T("$ZodTemplateLiteral", (e, t) => {
  Q.init(e, t);
  const r = [];
  for (const o of t.parts)
    if (typeof o == "object" && o !== null) {
      if (!o._zod.pattern)
        throw new Error(`Invalid template literal part, no pattern found: ${[...o._zod.traits].shift()}`);
      const n = o._zod.pattern instanceof RegExp ? o._zod.pattern.source : o._zod.pattern;
      if (!n)
        throw new Error(`Invalid template literal part: ${o._zod.traits}`);
      const i = n.startsWith("^") ? 1 : 0, a = n.endsWith("$") ? n.length - 1 : n.length;
      r.push(n.slice(i, a));
    } else if (o === null || $l.has(typeof o))
      r.push(Dt(`${o}`));
    else
      throw new Error(`Invalid template literal part: ${o}`);
  e._zod.pattern = new RegExp(`^${r.join("")}$`), e._zod.parse = (o, n) => typeof o.value != "string" ? (o.issues.push({
    input: o.value,
    inst: e,
    expected: "template_literal",
    code: "invalid_type"
  }), o) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(o.value) || o.issues.push({
    input: o.value,
    inst: e,
    code: "invalid_format",
    format: t.format ?? "template_literal",
    pattern: e._zod.pattern.source
  }), o);
}), Hd = /* @__PURE__ */ T("$ZodFunction", (e, t) => (Q.init(e, t), e._def = t, e._zod.def = t, e.implement = (r) => {
  if (typeof r != "function")
    throw new Error("implement() must be called with a function");
  return function(...o) {
    const n = e._def.input ? qo(e._def.input, o) : o, i = Reflect.apply(r, this, n);
    return e._def.output ? qo(e._def.output, i) : i;
  };
}, e.implementAsync = (r) => {
  if (typeof r != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...o) {
    const n = e._def.input ? await Lo(e._def.input, o) : o, i = await Reflect.apply(r, this, n);
    return e._def.output ? await Lo(e._def.output, i) : i;
  };
}, e._zod.parse = (r, o) => typeof r.value != "function" ? (r.issues.push({
  code: "invalid_type",
  expected: "function",
  input: r.value,
  inst: e
}), r) : (e._def.output && e._def.output._zod.def.type === "promise" ? r.value = e.implementAsync(r.value) : r.value = e.implement(r.value), r), e.input = (...r) => {
  const o = e.constructor;
  return Array.isArray(r[0]) ? new o({
    type: "function",
    input: new xi({
      type: "tuple",
      items: r[0],
      rest: r[1]
    }),
    output: e._def.output
  }) : new o({
    type: "function",
    input: r[0],
    output: e._def.output
  });
}, e.output = (r) => {
  const o = e.constructor;
  return new o({
    type: "function",
    input: e._def.input,
    output: r
  });
}, e)), Kd = /* @__PURE__ */ T("$ZodPromise", (e, t) => {
  Q.init(e, t), e._zod.parse = (r, o) => Promise.resolve(r.value).then((n) => t.innerType._zod.run({ value: n, issues: [] }, o));
}), Yd = /* @__PURE__ */ T("$ZodLazy", (e, t) => {
  Q.init(e, t), se(e._zod, "innerType", () => t.getter()), se(e._zod, "pattern", () => e._zod.innerType._zod.pattern), se(e._zod, "propValues", () => e._zod.innerType._zod.propValues), se(e._zod, "optin", () => e._zod.innerType._zod.optin ?? void 0), se(e._zod, "optout", () => e._zod.innerType._zod.optout ?? void 0), e._zod.parse = (r, o) => e._zod.innerType._zod.run(r, o);
}), Xd = /* @__PURE__ */ T("$ZodCustom", (e, t) => {
  Te.init(e, t), Q.init(e, t), e._zod.parse = (r, o) => r, e._zod.check = (r) => {
    const o = r.value, n = t.fn(o);
    if (n instanceof Promise)
      return n.then((i) => bs(i, r, o, e));
    bs(n, r, o, e);
  };
});
function bs(e, t, r, o) {
  if (!e) {
    const n = {
      code: "custom",
      input: r,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (n.params = o._zod.def.params), t.issues.push(hn(n));
  }
}
const Fv = () => {
  const e = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `مدخلات غير مقبولة: يفترض إدخال ${n.expected}، ولكن تم إدخال ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${X(n.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${i} ${n.maximum.toString()} ${a.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${i} ${n.minimum.toString()} ${a.unit}` : `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"` : i.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"` : i.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"` : i.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}` : `${o[i.format] ?? n.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
      case "unrecognized_keys":
        return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${P(n.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${n.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${n.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function Jv() {
  return {
    localeError: Fv()
  };
}
const Vv = () => {
  const e = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Yanlış dəyər: gözlənilən ${n.expected}, daxil olan ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Yanlış dəyər: gözlənilən ${X(n.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${i}${n.maximum.toString()} ${a.unit ?? "element"}` : `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Çox kiçik: gözlənilən ${n.origin} ${i}${n.minimum.toString()} ${a.unit}` : `Çox kiçik: gözlənilən ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Yanlış mətn: "${i.prefix}" ilə başlamalıdır` : i.format === "ends_with" ? `Yanlış mətn: "${i.suffix}" ilə bitməlidir` : i.format === "includes" ? `Yanlış mətn: "${i.includes}" daxil olmalıdır` : i.format === "regex" ? `Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${n.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${n.origin} daxilində yanlış dəyər`;
      default:
        return "Yanlış dəyər";
    }
  };
};
function Gv() {
  return {
    localeError: Vv()
  };
}
function ws(e, t, r, o) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? o : i === 1 ? t : i >= 2 && i <= 4 ? r : o;
}
const Bv = () => {
  const e = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "лік";
      case "object": {
        if (Array.isArray(n))
          return "масіў";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${n.expected}, атрымана ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Няправільны ўвод: чакалася ${X(n.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const s = Number(n.maximum), u = ws(s, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${a.verb} ${i}${n.maximum.toString()} ${u}`;
        }
        return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const s = Number(n.minimum), u = ws(s, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта малы: чакалася, што ${n.origin} павінна ${a.verb} ${i}${n.minimum.toString()} ${u}`;
        }
        return `Занадта малы: чакалася, што ${n.origin} павінна быць ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${i.prefix}"` : i.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${i.suffix}"` : i.format === "includes" ? `Няправільны радок: павінен змяшчаць "${i.includes}"` : i.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${i.pattern}` : `Няправільны ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${n.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${n.origin}`;
      default:
        return "Няправільны ўвод";
    }
  };
};
function Wv() {
  return {
    localeError: Bv()
  };
}
const Hv = () => {
  const e = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Tipus invàlid: s'esperava ${n.expected}, s'ha rebut ${r(n.input)}`;
      // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Valor invàlid: s'esperava ${X(n.values[0])}` : `Opció invàlida: s'esperava una de ${P(n.values, " o ")}`;
      case "too_big": {
        const i = n.inclusive ? "com a màxim" : "menys de", a = t(n.origin);
        return a ? `Massa gran: s'esperava que ${n.origin ?? "el valor"} contingués ${i} ${n.maximum.toString()} ${a.unit ?? "elements"}` : `Massa gran: s'esperava que ${n.origin ?? "el valor"} fos ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? "com a mínim" : "més de", a = t(n.origin);
        return a ? `Massa petit: s'esperava que ${n.origin} contingués ${i} ${n.minimum.toString()} ${a.unit}` : `Massa petit: s'esperava que ${n.origin} fos ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Format invàlid: ha de començar amb "${i.prefix}"` : i.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${i.suffix}"` : i.format === "includes" ? `Format invàlid: ha d'incloure "${i.includes}"` : i.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${i.pattern}` : `Format invàlid per a ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${n.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element invàlid a ${n.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function Kv() {
  return {
    localeError: Hv()
  };
}
const Yv = () => {
  const e = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "číslo";
      case "string":
        return "řetězec";
      case "boolean":
        return "boolean";
      case "bigint":
        return "bigint";
      case "function":
        return "funkce";
      case "symbol":
        return "symbol";
      case "undefined":
        return "undefined";
      case "object": {
        if (Array.isArray(n))
          return "pole";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Neplatný vstup: očekáváno ${n.expected}, obdrženo ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neplatný vstup: očekáváno ${X(n.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí mít ${i}${n.maximum.toString()} ${a.unit ?? "prvků"}` : `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí být ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí mít ${i}${n.minimum.toString()} ${a.unit ?? "prvků"}` : `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí být ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${i.prefix}"` : i.format === "ends_with" ? `Neplatný řetězec: musí končit na "${i.suffix}"` : i.format === "includes" ? `Neplatný řetězec: musí obsahovat "${i.includes}"` : i.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${i.pattern}` : `Neplatný formát ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${n.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${n.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${n.origin}`;
      default:
        return "Neplatný vstup";
    }
  };
};
function Xv() {
  return {
    localeError: Yv()
  };
}
const Qv = () => {
  const e = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  }, t = {
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  function r(a) {
    return e[a] ?? null;
  }
  function o(a) {
    return t[a] ?? a;
  }
  const n = (a) => {
    const s = typeof a;
    switch (s) {
      case "number":
        return Number.isNaN(a) ? "NaN" : "tal";
      case "object":
        return Array.isArray(a) ? "liste" : a === null ? "null" : Object.getPrototypeOf(a) !== Object.prototype && a.constructor ? a.constructor.name : "objekt";
    }
    return s;
  }, i = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Ugyldigt input: forventede ${o(a.expected)}, fik ${o(n(a.input))}`;
      case "invalid_value":
        return a.values.length === 1 ? `Ugyldig værdi: forventede ${X(a.values[0])}` : `Ugyldigt valg: forventede en af følgende ${P(a.values, "|")}`;
      case "too_big": {
        const s = a.inclusive ? "<=" : "<", u = r(a.origin), l = o(a.origin);
        return u ? `For stor: forventede ${l ?? "value"} ${u.verb} ${s} ${a.maximum.toString()} ${u.unit ?? "elementer"}` : `For stor: forventede ${l ?? "value"} havde ${s} ${a.maximum.toString()}`;
      }
      case "too_small": {
        const s = a.inclusive ? ">=" : ">", u = r(a.origin), l = o(a.origin);
        return u ? `For lille: forventede ${l} ${u.verb} ${s} ${a.minimum.toString()} ${u.unit}` : `For lille: forventede ${l} havde ${s} ${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const s = a;
        return s.format === "starts_with" ? `Ugyldig streng: skal starte med "${s.prefix}"` : s.format === "ends_with" ? `Ugyldig streng: skal ende med "${s.suffix}"` : s.format === "includes" ? `Ugyldig streng: skal indeholde "${s.includes}"` : s.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${s.pattern}` : `Ugyldig ${i[s.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${a.divisor}`;
      case "unrecognized_keys":
        return `${a.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${P(a.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${a.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${a.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function ey() {
  return {
    localeError: Qv()
  };
}
const ty = () => {
  const e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "Zahl";
      case "object": {
        if (Array.isArray(n))
          return "Array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ungültige Eingabe: erwartet ${n.expected}, erhalten ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ungültige Eingabe: erwartet ${X(n.values[0])}` : `Ungültige Option: erwartet eine von ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${i}${n.maximum.toString()} ${a.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${i}${n.maximum.toString()} ist`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Zu klein: erwartet, dass ${n.origin} ${i}${n.minimum.toString()} ${a.unit} hat` : `Zu klein: erwartet, dass ${n.origin} ${i}${n.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ungültiger String: muss mit "${i.prefix}" beginnen` : i.format === "ends_with" ? `Ungültiger String: muss mit "${i.suffix}" enden` : i.format === "includes" ? `Ungültiger String: muss "${i.includes}" enthalten` : i.format === "regex" ? `Ungültiger String: muss dem Muster ${i.pattern} entsprechen` : `Ungültig: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${n.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${n.origin}`;
      default:
        return "Ungültige Eingabe";
    }
  };
};
function ny() {
  return {
    localeError: ty()
  };
}
const ry = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e))
        return "array";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, oy = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Invalid input: expected ${o.expected}, received ${ry(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Invalid input: expected ${X(o.values[0])}` : `Invalid option: expected one of ${P(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Too big: expected ${o.origin ?? "value"} to have ${n}${o.maximum.toString()} ${i.unit ?? "elements"}` : `Too big: expected ${o.origin ?? "value"} to be ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Too small: expected ${o.origin} to have ${n}${o.minimum.toString()} ${i.unit}` : `Too small: expected ${o.origin} to be ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Invalid string: must start with "${n.prefix}"` : n.format === "ends_with" ? `Invalid string: must end with "${n.suffix}"` : n.format === "includes" ? `Invalid string: must include "${n.includes}"` : n.format === "regex" ? `Invalid string: must match pattern ${n.pattern}` : `Invalid ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${o.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${o.keys.length > 1 ? "s" : ""}: ${P(o.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${o.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${o.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Qd() {
  return {
    localeError: oy()
  };
}
const iy = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "nombro";
    case "object": {
      if (Array.isArray(e))
        return "tabelo";
      if (e === null)
        return "senvalora";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, ay = () => {
  const e = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Nevalida enigo: atendiĝis ${o.expected}, riceviĝis ${iy(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Nevalida enigo: atendiĝis ${X(o.values[0])}` : `Nevalida opcio: atendiĝis unu el ${P(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Tro granda: atendiĝis ke ${o.origin ?? "valoro"} havu ${n}${o.maximum.toString()} ${i.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${o.origin ?? "valoro"} havu ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Tro malgranda: atendiĝis ke ${o.origin} havu ${n}${o.minimum.toString()} ${i.unit}` : `Tro malgranda: atendiĝis ke ${o.origin} estu ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${n.prefix}"` : n.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${n.suffix}"` : n.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${n.includes}"` : n.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${n.pattern}` : `Nevalida ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${o.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${o.keys.length > 1 ? "j" : ""} ŝlosilo${o.keys.length > 1 ? "j" : ""}: ${P(o.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${o.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${o.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function sy() {
  return {
    localeError: ay()
  };
}
const uy = () => {
  const e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  }, t = {
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  function r(a) {
    return e[a] ?? null;
  }
  function o(a) {
    return t[a] ?? a;
  }
  const n = (a) => {
    const s = typeof a;
    switch (s) {
      case "number":
        return Number.isNaN(a) ? "NaN" : "number";
      case "object":
        return Array.isArray(a) ? "array" : a === null ? "null" : Object.getPrototypeOf(a) !== Object.prototype ? a.constructor.name : "object";
    }
    return s;
  }, i = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Entrada inválida: se esperaba ${o(a.expected)}, recibido ${o(n(a.input))}`;
      // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Entrada inválida: se esperaba ${X(a.values[0])}` : `Opción inválida: se esperaba una de ${P(a.values, "|")}`;
      case "too_big": {
        const s = a.inclusive ? "<=" : "<", u = r(a.origin), l = o(a.origin);
        return u ? `Demasiado grande: se esperaba que ${l ?? "valor"} tuviera ${s}${a.maximum.toString()} ${u.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${l ?? "valor"} fuera ${s}${a.maximum.toString()}`;
      }
      case "too_small": {
        const s = a.inclusive ? ">=" : ">", u = r(a.origin), l = o(a.origin);
        return u ? `Demasiado pequeño: se esperaba que ${l} tuviera ${s}${a.minimum.toString()} ${u.unit}` : `Demasiado pequeño: se esperaba que ${l} fuera ${s}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const s = a;
        return s.format === "starts_with" ? `Cadena inválida: debe comenzar con "${s.prefix}"` : s.format === "ends_with" ? `Cadena inválida: debe terminar en "${s.suffix}"` : s.format === "includes" ? `Cadena inválida: debe incluir "${s.includes}"` : s.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${s.pattern}` : `Inválido ${i[s.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${a.divisor}`;
      case "unrecognized_keys":
        return `Llave${a.keys.length > 1 ? "s" : ""} desconocida${a.keys.length > 1 ? "s" : ""}: ${P(a.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${o(a.origin)}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${o(a.origin)}`;
      default:
        return "Entrada inválida";
    }
  };
};
function ly() {
  return {
    localeError: uy()
  };
}
const cy = () => {
  const e = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "عدد";
      case "object": {
        if (Array.isArray(n))
          return "آرایه";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ورودی نامعتبر: می‌بایست ${n.expected} می‌بود، ${r(n.input)} دریافت شد`;
      case "invalid_value":
        return n.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${X(n.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${P(n.values, "|")} می‌بود`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${i}${n.maximum.toString()} ${a.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${i}${n.maximum.toString()} باشد`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `خیلی کوچک: ${n.origin} باید ${i}${n.minimum.toString()} ${a.unit} باشد` : `خیلی کوچک: ${n.origin} باید ${i}${n.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `رشته نامعتبر: باید با "${i.prefix}" شروع شود` : i.format === "ends_with" ? `رشته نامعتبر: باید با "${i.suffix}" تمام شود` : i.format === "includes" ? `رشته نامعتبر: باید شامل "${i.includes}" باشد` : i.format === "regex" ? `رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد` : `${o[i.format] ?? n.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${n.origin}`;
      case "invalid_union":
        return "ورودی نامعتبر";
      case "invalid_element":
        return `مقدار نامعتبر در ${n.origin}`;
      default:
        return "ورودی نامعتبر";
    }
  };
};
function dy() {
  return {
    localeError: cy()
  };
}
const py = () => {
  const e = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${n.expected}, oli ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Virheellinen syöte: täytyy olla ${X(n.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Liian suuri: ${a.subject} täytyy olla ${i}${n.maximum.toString()} ${a.unit}`.trim() : `Liian suuri: arvon täytyy olla ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Liian pieni: ${a.subject} täytyy olla ${i}${n.minimum.toString()} ${a.unit}`.trim() : `Liian pieni: arvon täytyy olla ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${i.prefix}"` : i.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${i.suffix}"` : i.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${i.includes}"` : i.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${i.pattern}` : `Virheellinen ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${n.divisor} monikerta`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen syöte";
    }
  };
};
function my() {
  return {
    localeError: py()
  };
}
const fy = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nombre";
      case "object": {
        if (Array.isArray(n))
          return "tableau";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Entrée invalide : ${n.expected} attendu, ${r(n.input)} reçu`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : ${X(n.values[0])} attendu` : `Option invalide : une valeur parmi ${P(n.values, "|")} attendue`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Trop grand : ${n.origin ?? "valeur"} doit ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "élément(s)"}` : `Trop grand : ${n.origin ?? "valeur"} doit être ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Trop petit : ${n.origin} doit ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Trop petit : ${n.origin} doit être ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Chaîne invalide : doit commencer par "${i.prefix}"` : i.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${i.suffix}"` : i.format === "includes" ? `Chaîne invalide : doit inclure "${i.includes}"` : i.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${i.pattern}` : `${o[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function gy() {
  return {
    localeError: fy()
  };
}
const hy = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Entrée invalide : attendu ${n.expected}, reçu ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : attendu ${X(n.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "≤" : "<", a = t(n.origin);
        return a ? `Trop grand : attendu que ${n.origin ?? "la valeur"} ait ${i}${n.maximum.toString()} ${a.unit}` : `Trop grand : attendu que ${n.origin ?? "la valeur"} soit ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? "≥" : ">", a = t(n.origin);
        return a ? `Trop petit : attendu que ${n.origin} ait ${i}${n.minimum.toString()} ${a.unit}` : `Trop petit : attendu que ${n.origin} soit ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Chaîne invalide : doit commencer par "${i.prefix}"` : i.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${i.suffix}"` : i.format === "includes" ? `Chaîne invalide : doit inclure "${i.includes}"` : i.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${i.pattern}` : `${o[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function vy() {
  return {
    localeError: hy()
  };
}
const yy = () => {
  const e = {
    string: { unit: "אותיות", verb: "לכלול" },
    file: { unit: "בייטים", verb: "לכלול" },
    array: { unit: "פריטים", verb: "לכלול" },
    set: { unit: "פריטים", verb: "לכלול" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "קלט",
    email: "כתובת אימייל",
    url: "כתובת רשת",
    emoji: "אימוג'י",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "תאריך וזמן ISO",
    date: "תאריך ISO",
    time: "זמן ISO",
    duration: "משך זמן ISO",
    ipv4: "כתובת IPv4",
    ipv6: "כתובת IPv6",
    cidrv4: "טווח IPv4",
    cidrv6: "טווח IPv6",
    base64: "מחרוזת בבסיס 64",
    base64url: "מחרוזת בבסיס 64 לכתובות רשת",
    json_string: "מחרוזת JSON",
    e164: "מספר E.164",
    jwt: "JWT",
    template_literal: "קלט"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `קלט לא תקין: צריך ${n.expected}, התקבל ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `קלט לא תקין: צריך ${X(n.values[0])}` : `קלט לא תקין: צריך אחת מהאפשרויות  ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `גדול מדי: ${n.origin ?? "value"} צריך להיות ${i}${n.maximum.toString()} ${a.unit ?? "elements"}` : `גדול מדי: ${n.origin ?? "value"} צריך להיות ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `קטן מדי: ${n.origin} צריך להיות ${i}${n.minimum.toString()} ${a.unit}` : `קטן מדי: ${n.origin} צריך להיות ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `מחרוזת לא תקינה: חייבת להתחיל ב"${i.prefix}"` : i.format === "ends_with" ? `מחרוזת לא תקינה: חייבת להסתיים ב "${i.suffix}"` : i.format === "includes" ? `מחרוזת לא תקינה: חייבת לכלול "${i.includes}"` : i.format === "regex" ? `מחרוזת לא תקינה: חייבת להתאים לתבנית ${i.pattern}` : `${o[i.format] ?? n.format} לא תקין`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${n.divisor}`;
      case "unrecognized_keys":
        return `מפתח${n.keys.length > 1 ? "ות" : ""} לא מזוה${n.keys.length > 1 ? "ים" : "ה"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `מפתח לא תקין ב${n.origin}`;
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${n.origin}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function _y() {
  return {
    localeError: yy()
  };
}
const by = () => {
  const e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "szám";
      case "object": {
        if (Array.isArray(n))
          return "tömb";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Érvénytelen bemenet: a várt érték ${n.expected}, a kapott érték ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${X(n.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Túl nagy: ${n.origin ?? "érték"} mérete túl nagy ${i}${n.maximum.toString()} ${a.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${n.origin ?? "érték"} túl nagy: ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Túl kicsi: a bemeneti érték ${n.origin} mérete túl kicsi ${i}${n.minimum.toString()} ${a.unit}` : `Túl kicsi: a bemeneti érték ${n.origin} túl kicsi ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Érvénytelen string: "${i.prefix}" értékkel kell kezdődnie` : i.format === "ends_with" ? `Érvénytelen string: "${i.suffix}" értékkel kell végződnie` : i.format === "includes" ? `Érvénytelen string: "${i.includes}" értéket kell tartalmaznia` : i.format === "regex" ? `Érvénytelen string: ${i.pattern} mintának kell megfelelnie` : `Érvénytelen ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${n.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${n.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${n.origin}`;
      default:
        return "Érvénytelen bemenet";
    }
  };
};
function wy() {
  return {
    localeError: by()
  };
}
const $y = () => {
  const e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${n.expected}, diterima ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak valid: diharapkan ${X(n.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Terlalu besar: diharapkan ${n.origin ?? "value"} memiliki ${i}${n.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${n.origin ?? "value"} menjadi ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Terlalu kecil: diharapkan ${n.origin} memiliki ${i}${n.minimum.toString()} ${a.unit}` : `Terlalu kecil: diharapkan ${n.origin} menjadi ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${i.prefix}"` : i.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${i.suffix}"` : i.format === "includes" ? `String tidak valid: harus menyertakan "${i.includes}"` : i.format === "regex" ? `String tidak valid: harus sesuai pola ${i.pattern}` : `${o[i.format] ?? n.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${n.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${n.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function Iy() {
  return {
    localeError: $y()
  };
}
const ky = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "númer";
    case "object": {
      if (Array.isArray(e))
        return "fylki";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, xy = () => {
  const e = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Rangt gildi: Þú slóst inn ${ky(o.input)} þar sem á að vera ${o.expected}`;
      case "invalid_value":
        return o.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${X(o.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${P(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Of stórt: gert er ráð fyrir að ${o.origin ?? "gildi"} hafi ${n}${o.maximum.toString()} ${i.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${o.origin ?? "gildi"} sé ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Of lítið: gert er ráð fyrir að ${o.origin} hafi ${n}${o.minimum.toString()} ${i.unit}` : `Of lítið: gert er ráð fyrir að ${o.origin} sé ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${n.prefix}"` : n.format === "ends_with" ? `Ógildur strengur: verður að enda á "${n.suffix}"` : n.format === "includes" ? `Ógildur strengur: verður að innihalda "${n.includes}"` : n.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${n.pattern}` : `Rangt ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${o.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${o.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${P(o.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${o.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${o.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function Sy() {
  return {
    localeError: xy()
  };
}
const Ty = () => {
  const e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "numero";
      case "object": {
        if (Array.isArray(n))
          return "vettore";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input non valido: atteso ${n.expected}, ricevuto ${r(n.input)}`;
      // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input non valido: atteso ${X(n.values[0])}` : `Opzione non valida: atteso uno tra ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Troppo grande: ${n.origin ?? "valore"} deve avere ${i}${n.maximum.toString()} ${a.unit ?? "elementi"}` : `Troppo grande: ${n.origin ?? "valore"} deve essere ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Troppo piccolo: ${n.origin} deve avere ${i}${n.minimum.toString()} ${a.unit}` : `Troppo piccolo: ${n.origin} deve essere ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Stringa non valida: deve iniziare con "${i.prefix}"` : i.format === "ends_with" ? `Stringa non valida: deve terminare con "${i.suffix}"` : i.format === "includes" ? `Stringa non valida: deve includere "${i.includes}"` : i.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${i.pattern}` : `Invalid ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
      case "unrecognized_keys":
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${n.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${n.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function Ey() {
  return {
    localeError: Ty()
  };
}
const Oy = () => {
  const e = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "数値";
      case "object": {
        if (Array.isArray(n))
          return "配列";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `無効な入力: ${n.expected}が期待されましたが、${r(n.input)}が入力されました`;
      case "invalid_value":
        return n.values.length === 1 ? `無効な入力: ${X(n.values[0])}が期待されました` : `無効な選択: ${P(n.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const i = n.inclusive ? "以下である" : "より小さい", a = t(n.origin);
        return a ? `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${a.unit ?? "要素"}${i}必要があります` : `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${i}必要があります`;
      }
      case "too_small": {
        const i = n.inclusive ? "以上である" : "より大きい", a = t(n.origin);
        return a ? `小さすぎる値: ${n.origin}は${n.minimum.toString()}${a.unit}${i}必要があります` : `小さすぎる値: ${n.origin}は${n.minimum.toString()}${i}必要があります`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `無効な文字列: "${i.prefix}"で始まる必要があります` : i.format === "ends_with" ? `無効な文字列: "${i.suffix}"で終わる必要があります` : i.format === "includes" ? `無効な文字列: "${i.includes}"を含む必要があります` : i.format === "regex" ? `無効な文字列: パターン${i.pattern}に一致する必要があります` : `無効な${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${n.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${P(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${n.origin}内の無効な値`;
      default:
        return "無効な入力";
    }
  };
};
function Ny() {
  return {
    localeError: Oy()
  };
}
const Cy = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "რიცხვი";
    case "object": {
      if (Array.isArray(e))
        return "მასივი";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return {
    string: "სტრინგი",
    boolean: "ბულეანი",
    undefined: "undefined",
    bigint: "bigint",
    symbol: "symbol",
    function: "ფუნქცია"
  }[t] ?? t;
}, Ry = () => {
  const e = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  };
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `არასწორი შეყვანა: მოსალოდნელი ${o.expected}, მიღებული ${Cy(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${X(o.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${P(o.values, "|")}-დან`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `ზედმეტად დიდი: მოსალოდნელი ${o.origin ?? "მნიშვნელობა"} ${i.verb} ${n}${o.maximum.toString()} ${i.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${o.origin ?? "მნიშვნელობა"} იყოს ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `ზედმეტად პატარა: მოსალოდნელი ${o.origin} ${i.verb} ${n}${o.minimum.toString()} ${i.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${o.origin} იყოს ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `არასწორი სტრინგი: უნდა იწყებოდეს "${n.prefix}"-ით` : n.format === "ends_with" ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${n.suffix}"-ით` : n.format === "includes" ? `არასწორი სტრინგი: უნდა შეიცავდეს "${n.includes}"-ს` : n.format === "regex" ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${n.pattern}` : `არასწორი ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${o.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${o.keys.length > 1 ? "ები" : "ი"}: ${P(o.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${o.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${o.origin}-ში`;
      default:
        return "არასწორი შეყვანა";
    }
  };
};
function Ay() {
  return {
    localeError: Ry()
  };
}
const jy = () => {
  const e = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
      case "object": {
        if (Array.isArray(n))
          return "អារេ (Array)";
        if (n === null)
          return "គ្មានតម្លៃ (null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${n.expected} ប៉ុន្តែទទួលបាន ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${X(n.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${i} ${n.maximum.toString()} ${a.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `តូចពេក៖ ត្រូវការ ${n.origin} ${i} ${n.minimum.toString()} ${a.unit}` : `តូចពេក៖ ត្រូវការ ${n.origin} ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"` : i.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"` : i.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"` : i.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}` : `មិនត្រឹមត្រូវ៖ ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      case "invalid_union":
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      default:
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
    }
  };
};
function ep() {
  return {
    localeError: jy()
  };
}
function My() {
  return ep();
}
const Py = () => {
  const e = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `잘못된 입력: 예상 타입은 ${n.expected}, 받은 타입은 ${r(n.input)}입니다`;
      case "invalid_value":
        return n.values.length === 1 ? `잘못된 입력: 값은 ${X(n.values[0])} 이어야 합니다` : `잘못된 옵션: ${P(n.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const i = n.inclusive ? "이하" : "미만", a = i === "미만" ? "이어야 합니다" : "여야 합니다", s = t(n.origin), u = (s == null ? void 0 : s.unit) ?? "요소";
        return s ? `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()}${u} ${i}${a}` : `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()} ${i}${a}`;
      }
      case "too_small": {
        const i = n.inclusive ? "이상" : "초과", a = i === "이상" ? "이어야 합니다" : "여야 합니다", s = t(n.origin), u = (s == null ? void 0 : s.unit) ?? "요소";
        return s ? `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()}${u} ${i}${a}` : `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()} ${i}${a}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다` : i.format === "ends_with" ? `잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다` : i.format === "includes" ? `잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다` : i.format === "regex" ? `잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다` : `잘못된 ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${n.origin}`;
      case "invalid_union":
        return "잘못된 입력";
      case "invalid_element":
        return `잘못된 값: ${n.origin}`;
      default:
        return "잘못된 입력";
    }
  };
};
function zy() {
  return {
    localeError: Py()
  };
}
const Uy = (e) => Pn(typeof e, e), Pn = (e, t = void 0) => {
  switch (e) {
    case "number":
      return Number.isNaN(t) ? "NaN" : "skaičius";
    case "bigint":
      return "sveikasis skaičius";
    case "string":
      return "eilutė";
    case "boolean":
      return "loginė reikšmė";
    case "undefined":
    case "void":
      return "neapibrėžta reikšmė";
    case "function":
      return "funkcija";
    case "symbol":
      return "simbolis";
    case "object":
      return t === void 0 ? "nežinomas objektas" : t === null ? "nulinė reikšmė" : Array.isArray(t) ? "masyvas" : Object.getPrototypeOf(t) !== Object.prototype && t.constructor ? t.constructor.name : "objektas";
    //Zod types below
    case "null":
      return "nulinė reikšmė";
  }
  return e;
}, Rn = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function $s(e) {
  const t = Math.abs(e), r = t % 10, o = t % 100;
  return o >= 11 && o <= 19 || r === 0 ? "many" : r === 1 ? "one" : "few";
}
const Dy = () => {
  const e = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function t(o, n, i, a) {
    const s = e[o] ?? null;
    return s === null ? s : {
      unit: s.unit[n],
      verb: s.verb[a][i ? "inclusive" : "notInclusive"]
    };
  }
  const r = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  };
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Gautas tipas ${Uy(o.input)}, o tikėtasi - ${Pn(o.expected)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Privalo būti ${X(o.values[0])}` : `Privalo būti vienas iš ${P(o.values, "|")} pasirinkimų`;
      case "too_big": {
        const n = Pn(o.origin), i = t(o.origin, $s(Number(o.maximum)), o.inclusive ?? !1, "smaller");
        if (i != null && i.verb)
          return `${Rn(n ?? o.origin ?? "reikšmė")} ${i.verb} ${o.maximum.toString()} ${i.unit ?? "elementų"}`;
        const a = o.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${Rn(n ?? o.origin ?? "reikšmė")} turi būti ${a} ${o.maximum.toString()} ${i == null ? void 0 : i.unit}`;
      }
      case "too_small": {
        const n = Pn(o.origin), i = t(o.origin, $s(Number(o.minimum)), o.inclusive ?? !1, "bigger");
        if (i != null && i.verb)
          return `${Rn(n ?? o.origin ?? "reikšmė")} ${i.verb} ${o.minimum.toString()} ${i.unit ?? "elementų"}`;
        const a = o.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${Rn(n ?? o.origin ?? "reikšmė")} turi būti ${a} ${o.minimum.toString()} ${i == null ? void 0 : i.unit}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Eilutė privalo prasidėti "${n.prefix}"` : n.format === "ends_with" ? `Eilutė privalo pasibaigti "${n.suffix}"` : n.format === "includes" ? `Eilutė privalo įtraukti "${n.includes}"` : n.format === "regex" ? `Eilutė privalo atitikti ${n.pattern}` : `Neteisingas ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${o.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${o.keys.length > 1 ? "i" : "as"} rakt${o.keys.length > 1 ? "ai" : "as"}: ${P(o.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const n = Pn(o.origin);
        return `${Rn(n ?? o.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function Zy() {
  return {
    localeError: Dy()
  };
}
const qy = () => {
  const e = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "број";
      case "object": {
        if (Array.isArray(n))
          return "низа";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Грешен внес: се очекува ${n.expected}, примено ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${X(n.values[0])}` : `Грешана опција: се очекува една ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Премногу голем: се очекува ${n.origin ?? "вредноста"} да има ${i}${n.maximum.toString()} ${a.unit ?? "елементи"}` : `Премногу голем: се очекува ${n.origin ?? "вредноста"} да биде ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Премногу мал: се очекува ${n.origin} да има ${i}${n.minimum.toString()} ${a.unit}` : `Премногу мал: се очекува ${n.origin} да биде ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Неважечка низа: мора да започнува со "${i.prefix}"` : i.format === "ends_with" ? `Неважечка низа: мора да завршува со "${i.suffix}"` : i.format === "includes" ? `Неважечка низа: мора да вклучува "${i.includes}"` : i.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${i.pattern}` : `Invalid ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${n.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${n.origin}`;
      default:
        return "Грешен внес";
    }
  };
};
function Ly() {
  return {
    localeError: qy()
  };
}
const Fy = () => {
  const e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nombor";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${n.expected}, diterima ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak sah: dijangka ${X(n.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Terlalu besar: dijangka ${n.origin ?? "nilai"} ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: dijangka ${n.origin ?? "nilai"} adalah ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Terlalu kecil: dijangka ${n.origin} ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Terlalu kecil: dijangka ${n.origin} adalah ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${i.prefix}"` : i.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${i.suffix}"` : i.format === "includes" ? `String tidak sah: mesti mengandungi "${i.includes}"` : i.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${i.pattern}` : `${o[i.format] ?? n.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${n.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${n.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function Jy() {
  return {
    localeError: Fy()
  };
}
const Vy = () => {
  const e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "getal";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${n.expected}, ontving ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ongeldige invoer: verwacht ${X(n.values[0])}` : `Ongeldige optie: verwacht één van ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Te lang: verwacht dat ${n.origin ?? "waarde"} ${i}${n.maximum.toString()} ${a.unit ?? "elementen"} bevat` : `Te lang: verwacht dat ${n.origin ?? "waarde"} ${i}${n.maximum.toString()} is`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Te kort: verwacht dat ${n.origin} ${i}${n.minimum.toString()} ${a.unit} bevat` : `Te kort: verwacht dat ${n.origin} ${i}${n.minimum.toString()} is`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ongeldige tekst: moet met "${i.prefix}" beginnen` : i.format === "ends_with" ? `Ongeldige tekst: moet op "${i.suffix}" eindigen` : i.format === "includes" ? `Ongeldige tekst: moet "${i.includes}" bevatten` : i.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}` : `Ongeldig: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${n.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${n.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function Gy() {
  return {
    localeError: Vy()
  };
}
const By = () => {
  const e = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "tall";
      case "object": {
        if (Array.isArray(n))
          return "liste";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${n.expected}, fikk ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ugyldig verdi: forventet ${X(n.values[0])}` : `Ugyldig valg: forventet en av ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `For stor(t): forventet ${n.origin ?? "value"} til å ha ${i}${n.maximum.toString()} ${a.unit ?? "elementer"}` : `For stor(t): forventet ${n.origin ?? "value"} til å ha ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `For lite(n): forventet ${n.origin} til å ha ${i}${n.minimum.toString()} ${a.unit}` : `For lite(n): forventet ${n.origin} til å ha ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ugyldig streng: må starte med "${i.prefix}"` : i.format === "ends_with" ? `Ugyldig streng: må ende med "${i.suffix}"` : i.format === "includes" ? `Ugyldig streng: må inneholde "${i.includes}"` : i.format === "regex" ? `Ugyldig streng: må matche mønsteret ${i.pattern}` : `Ugyldig ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${n.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${n.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function Wy() {
  return {
    localeError: By()
  };
}
const Hy = () => {
  const e = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "numara";
      case "object": {
        if (Array.isArray(n))
          return "saf";
        if (n === null)
          return "gayb";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Fâsit giren: umulan ${n.expected}, alınan ${r(n.input)}`;
      // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Fâsit giren: umulan ${X(n.values[0])}` : `Fâsit tercih: mûteberler ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Fazla büyük: ${n.origin ?? "value"}, ${i}${n.maximum.toString()} ${a.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${n.origin ?? "value"}, ${i}${n.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Fazla küçük: ${n.origin}, ${i}${n.minimum.toString()} ${a.unit} sahip olmalıydı.` : `Fazla küçük: ${n.origin}, ${i}${n.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Fâsit metin: "${i.prefix}" ile başlamalı.` : i.format === "ends_with" ? `Fâsit metin: "${i.suffix}" ile bitmeli.` : i.format === "includes" ? `Fâsit metin: "${i.includes}" ihtivâ etmeli.` : i.format === "regex" ? `Fâsit metin: ${i.pattern} nakşına uymalı.` : `Fâsit ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${n.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${n.origin} için tanınmayan kıymet var.`;
      default:
        return "Kıymet tanınamadı.";
    }
  };
};
function Ky() {
  return {
    localeError: Hy()
  };
}
const Yy = () => {
  const e = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "عدد";
      case "object": {
        if (Array.isArray(n))
          return "ارې";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ناسم ورودي: باید ${n.expected} وای, مګر ${r(n.input)} ترلاسه شو`;
      case "invalid_value":
        return n.values.length === 1 ? `ناسم ورودي: باید ${X(n.values[0])} وای` : `ناسم انتخاب: باید یو له ${P(n.values, "|")} څخه وای`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${i}${n.maximum.toString()} ${a.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${i}${n.maximum.toString()} وي`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `ډیر کوچنی: ${n.origin} باید ${i}${n.minimum.toString()} ${a.unit} ولري` : `ډیر کوچنی: ${n.origin} باید ${i}${n.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `ناسم متن: باید د "${i.prefix}" سره پیل شي` : i.format === "ends_with" ? `ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي` : i.format === "includes" ? `ناسم متن: باید "${i.includes}" ولري` : i.format === "regex" ? `ناسم متن: باید د ${i.pattern} سره مطابقت ولري` : `${o[i.format] ?? n.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${n.origin} کې`;
      case "invalid_union":
        return "ناسمه ورودي";
      case "invalid_element":
        return `ناسم عنصر په ${n.origin} کې`;
      default:
        return "ناسمه ورودي";
    }
  };
};
function Xy() {
  return {
    localeError: Yy()
  };
}
const Qy = () => {
  const e = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "liczba";
      case "object": {
        if (Array.isArray(n))
          return "tablica";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Nieprawidłowe dane wejściowe: oczekiwano ${n.expected}, otrzymano ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${X(n.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Za duża wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${i}${n.maximum.toString()} ${a.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Za mała wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${i}${n.minimum.toString()} ${a.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${i.prefix}"` : i.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${i.suffix}"` : i.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${i.includes}"` : i.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${i.pattern}` : `Nieprawidłow(y/a/e) ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${n.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${n.origin}`;
      default:
        return "Nieprawidłowe dane wejściowe";
    }
  };
};
function e_() {
  return {
    localeError: Qy()
  };
}
const t_ = () => {
  const e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "número";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "nulo";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Tipo inválido: esperado ${n.expected}, recebido ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrada inválida: esperado ${X(n.values[0])}` : `Opção inválida: esperada uma das ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Muito grande: esperado que ${n.origin ?? "valor"} tivesse ${i}${n.maximum.toString()} ${a.unit ?? "elementos"}` : `Muito grande: esperado que ${n.origin ?? "valor"} fosse ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Muito pequeno: esperado que ${n.origin} tivesse ${i}${n.minimum.toString()} ${a.unit}` : `Muito pequeno: esperado que ${n.origin} fosse ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Texto inválido: deve começar com "${i.prefix}"` : i.format === "ends_with" ? `Texto inválido: deve terminar com "${i.suffix}"` : i.format === "includes" ? `Texto inválido: deve incluir "${i.includes}"` : i.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${i.pattern}` : `${o[i.format] ?? n.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${n.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${n.origin}`;
      default:
        return "Campo inválido";
    }
  };
};
function n_() {
  return {
    localeError: t_()
  };
}
function Is(e, t, r, o) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? o : i === 1 ? t : i >= 2 && i <= 4 ? r : o;
}
const r_ = () => {
  const e = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "число";
      case "object": {
        if (Array.isArray(n))
          return "массив";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Неверный ввод: ожидалось ${n.expected}, получено ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неверный ввод: ожидалось ${X(n.values[0])}` : `Неверный вариант: ожидалось одно из ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const s = Number(n.maximum), u = Is(s, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${i}${n.maximum.toString()} ${u}`;
        }
        return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const s = Number(n.minimum), u = Is(s, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${i}${n.minimum.toString()} ${u}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Неверная строка: должна начинаться с "${i.prefix}"` : i.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${i.suffix}"` : i.format === "includes" ? `Неверная строка: должна содержать "${i.includes}"` : i.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${i.pattern}` : `Неверный ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${n.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${n.origin}`;
      default:
        return "Неверные входные данные";
    }
  };
};
function o_() {
  return {
    localeError: r_()
  };
}
const i_ = () => {
  const e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "število";
      case "object": {
        if (Array.isArray(n))
          return "tabela";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Neveljaven vnos: pričakovano ${n.expected}, prejeto ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neveljaven vnos: pričakovano ${X(n.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} imelo ${i}${n.maximum.toString()} ${a.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Premajhno: pričakovano, da bo ${n.origin} imelo ${i}${n.minimum.toString()} ${a.unit}` : `Premajhno: pričakovano, da bo ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${i.prefix}"` : i.format === "ends_with" ? `Neveljaven niz: mora se končati z "${i.suffix}"` : i.format === "includes" ? `Neveljaven niz: mora vsebovati "${i.includes}"` : i.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${i.pattern}` : `Neveljaven ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${n.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${n.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function a_() {
  return {
    localeError: i_()
  };
}
const s_ = () => {
  const e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "antal";
      case "object": {
        if (Array.isArray(n))
          return "lista";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ogiltig inmatning: förväntat ${n.expected}, fick ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ogiltig inmatning: förväntat ${X(n.values[0])}` : `Ogiltigt val: förväntade en av ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `För stor(t): förväntade ${n.origin ?? "värdet"} att ha ${i}${n.maximum.toString()} ${a.unit ?? "element"}` : `För stor(t): förväntat ${n.origin ?? "värdet"} att ha ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${i}${n.minimum.toString()} ${a.unit}` : `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ogiltig sträng: måste börja med "${i.prefix}"` : i.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${i.suffix}"` : i.format === "includes" ? `Ogiltig sträng: måste innehålla "${i.includes}"` : i.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${i.pattern}"` : `Ogiltig(t) ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${n.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${n.origin ?? "värdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function u_() {
  return {
    localeError: s_()
  };
}
const l_ = () => {
  const e = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "எண் அல்லாதது" : "எண்";
      case "object": {
        if (Array.isArray(n))
          return "அணி";
        if (n === null)
          return "வெறுமை";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${n.expected}, பெறப்பட்டது ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${X(n.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${P(n.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${i}${n.maximum.toString()} ${a.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${i}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${i}${n.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${i}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்` : i.format === "ends_with" ? `தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்` : i.format === "includes" ? `தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்` : i.format === "regex" ? `தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${n.origin} இல் தவறான மதிப்பு`;
      default:
        return "தவறான உள்ளீடு";
    }
  };
};
function c_() {
  return {
    localeError: l_()
  };
}
const d_ = () => {
  const e = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
      case "object": {
        if (Array.isArray(n))
          return "อาร์เรย์ (Array)";
        if (n === null)
          return "ไม่มีค่า (null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${n.expected} แต่ได้รับ ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${X(n.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "ไม่เกิน" : "น้อยกว่า", a = t(n.origin);
        return a ? `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${i} ${n.maximum.toString()} ${a.unit ?? "รายการ"}` : `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? "อย่างน้อย" : "มากกว่า", a = t(n.origin);
        return a ? `น้อยกว่ากำหนด: ${n.origin} ควรมี${i} ${n.minimum.toString()} ${a.unit}` : `น้อยกว่ากำหนด: ${n.origin} ควรมี${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"` : i.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"` : i.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ` : i.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}` : `รูปแบบไม่ถูกต้อง: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${n.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
      default:
        return "ข้อมูลไม่ถูกต้อง";
    }
  };
};
function p_() {
  return {
    localeError: d_()
  };
}
const m_ = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e))
        return "array";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, f_ = () => {
  const e = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Geçersiz değer: beklenen ${o.expected}, alınan ${m_(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Geçersiz değer: beklenen ${X(o.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${P(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Çok büyük: beklenen ${o.origin ?? "değer"} ${n}${o.maximum.toString()} ${i.unit ?? "öğe"}` : `Çok büyük: beklenen ${o.origin ?? "değer"} ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Çok küçük: beklenen ${o.origin} ${n}${o.minimum.toString()} ${i.unit}` : `Çok küçük: beklenen ${o.origin} ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Geçersiz metin: "${n.prefix}" ile başlamalı` : n.format === "ends_with" ? `Geçersiz metin: "${n.suffix}" ile bitmeli` : n.format === "includes" ? `Geçersiz metin: "${n.includes}" içermeli` : n.format === "regex" ? `Geçersiz metin: ${n.pattern} desenine uymalı` : `Geçersiz ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${o.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${o.keys.length > 1 ? "lar" : ""}: ${P(o.keys, ", ")}`;
      case "invalid_key":
        return `${o.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${o.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
    }
  };
};
function g_() {
  return {
    localeError: f_()
  };
}
const h_ = () => {
  const e = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "число";
      case "object": {
        if (Array.isArray(n))
          return "масив";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Неправильні вхідні дані: очікується ${n.expected}, отримано ${r(n.input)}`;
      // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неправильні вхідні дані: очікується ${X(n.values[0])}` : `Неправильна опція: очікується одне з ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Занадто велике: очікується, що ${n.origin ?? "значення"} ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "елементів"}` : `Занадто велике: очікується, що ${n.origin ?? "значення"} буде ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Занадто мале: очікується, що ${n.origin} ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Занадто мале: очікується, що ${n.origin} буде ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${i.prefix}"` : i.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${i.suffix}"` : i.format === "includes" ? `Неправильний рядок: повинен містити "${i.includes}"` : i.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${i.pattern}` : `Неправильний ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${n.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${n.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${n.origin}`;
      default:
        return "Неправильні вхідні дані";
    }
  };
};
function tp() {
  return {
    localeError: h_()
  };
}
function v_() {
  return tp();
}
const y_ = () => {
  const e = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "نمبر";
      case "object": {
        if (Array.isArray(n))
          return "آرے";
        if (n === null)
          return "نل";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `غلط ان پٹ: ${n.expected} متوقع تھا، ${r(n.input)} موصول ہوا`;
      case "invalid_value":
        return n.values.length === 1 ? `غلط ان پٹ: ${X(n.values[0])} متوقع تھا` : `غلط آپشن: ${P(n.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `بہت بڑا: ${n.origin ?? "ویلیو"} کے ${i}${n.maximum.toString()} ${a.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${n.origin ?? "ویلیو"} کا ${i}${n.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `بہت چھوٹا: ${n.origin} کے ${i}${n.minimum.toString()} ${a.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${n.origin} کا ${i}${n.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے` : i.format === "ends_with" ? `غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے` : i.format === "includes" ? `غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے` : i.format === "regex" ? `غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے` : `غلط ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${P(n.keys, "، ")}`;
      case "invalid_key":
        return `${n.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${n.origin} میں غلط ویلیو`;
      default:
        return "غلط ان پٹ";
    }
  };
};
function __() {
  return {
    localeError: y_()
  };
}
const b_ = () => {
  const e = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "số";
      case "object": {
        if (Array.isArray(n))
          return "mảng";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Đầu vào không hợp lệ: mong đợi ${n.expected}, nhận được ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${X(n.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Quá nhỏ: mong đợi ${n.origin} ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Quá nhỏ: mong đợi ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${i.prefix}"` : i.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${i.suffix}"` : i.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${i.includes}"` : i.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${i.pattern}` : `${o[i.format] ?? n.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${n.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${n.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${n.origin}`;
      default:
        return "Đầu vào không hợp lệ";
    }
  };
};
function w_() {
  return {
    localeError: b_()
  };
}
const $_ = () => {
  const e = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "非数字(NaN)" : "数字";
      case "object": {
        if (Array.isArray(n))
          return "数组";
        if (n === null)
          return "空值(null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `无效输入：期望 ${n.expected}，实际接收 ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `无效输入：期望 ${X(n.values[0])}` : `无效选项：期望以下之一 ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `数值过大：期望 ${n.origin ?? "值"} ${i}${n.maximum.toString()} ${a.unit ?? "个元素"}` : `数值过大：期望 ${n.origin ?? "值"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `数值过小：期望 ${n.origin} ${i}${n.minimum.toString()} ${a.unit}` : `数值过小：期望 ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `无效字符串：必须以 "${i.prefix}" 开头` : i.format === "ends_with" ? `无效字符串：必须以 "${i.suffix}" 结尾` : i.format === "includes" ? `无效字符串：必须包含 "${i.includes}"` : i.format === "regex" ? `无效字符串：必须满足正则表达式 ${i.pattern}` : `无效${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${n.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${n.origin} 中包含无效值(value)`;
      default:
        return "无效输入";
    }
  };
};
function I_() {
  return {
    localeError: $_()
  };
}
const k_ = () => {
  const e = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `無效的輸入值：預期為 ${n.expected}，但收到 ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `無效的輸入值：預期為 ${X(n.values[0])}` : `無效的選項：預期為以下其中之一 ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `數值過大：預期 ${n.origin ?? "值"} 應為 ${i}${n.maximum.toString()} ${a.unit ?? "個元素"}` : `數值過大：預期 ${n.origin ?? "值"} 應為 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `數值過小：預期 ${n.origin} 應為 ${i}${n.minimum.toString()} ${a.unit}` : `數值過小：預期 ${n.origin} 應為 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `無效的字串：必須以 "${i.prefix}" 開頭` : i.format === "ends_with" ? `無效的字串：必須以 "${i.suffix}" 結尾` : i.format === "includes" ? `無效的字串：必須包含 "${i.includes}"` : i.format === "regex" ? `無效的字串：必須符合格式 ${i.pattern}` : `無效的 ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${n.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${P(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${n.origin} 中有無效的值`;
      default:
        return "無效的輸入值";
    }
  };
};
function x_() {
  return {
    localeError: k_()
  };
}
const S_ = () => {
  const e = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nọ́mbà";
      case "object": {
        if (Array.isArray(n))
          return "akopọ";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ìbáwọlé aṣìṣe: a ní láti fi ${n.expected}, àmọ̀ a rí ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${X(n.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${P(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${n.origin ?? "iye"} ${a.verb} ${i}${n.maximum} ${a.unit}` : `Tó pọ̀ jù: a ní láti jẹ́ ${i}${n.maximum}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Kéré ju: a ní láti jẹ́ pé ${n.origin} ${a.verb} ${i}${n.minimum} ${a.unit}` : `Kéré ju: a ní láti jẹ́ ${i}${n.minimum}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${i.prefix}"` : i.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${i.suffix}"` : i.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${i.includes}"` : i.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${i.pattern}` : `Aṣìṣe: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${n.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${P(n.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${n.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${n.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function T_() {
  return {
    localeError: S_()
  };
}
const np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Jv,
  az: Gv,
  be: Wv,
  ca: Kv,
  cs: Xv,
  da: ey,
  de: ny,
  en: Qd,
  eo: sy,
  es: ly,
  fa: dy,
  fi: my,
  fr: gy,
  frCA: vy,
  he: _y,
  hu: wy,
  id: Iy,
  is: Sy,
  it: Ey,
  ja: Ny,
  ka: Ay,
  kh: My,
  km: ep,
  ko: zy,
  lt: Zy,
  mk: Ly,
  ms: Jy,
  nl: Gy,
  no: Wy,
  ota: Ky,
  pl: e_,
  ps: Xy,
  pt: n_,
  ru: o_,
  sl: a_,
  sv: u_,
  ta: c_,
  th: p_,
  tr: g_,
  ua: v_,
  uk: tp,
  ur: __,
  vi: w_,
  yo: T_,
  zhCN: I_,
  zhTW: x_
}, Symbol.toStringTag, { value: "Module" })), rp = Symbol("ZodOutput"), op = Symbol("ZodInput");
class Ti {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const o = r[0];
    if (this._map.set(t, o), o && typeof o == "object" && "id" in o) {
      if (this._idmap.has(o.id))
        throw new Error(`ID ${o.id} already exists in the registry`);
      this._idmap.set(o.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const o = { ...this.get(r) ?? {} };
      delete o.id;
      const n = { ...o, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Ei() {
  return new Ti();
}
const Gt = /* @__PURE__ */ Ei();
function ip(e, t) {
  return new e({
    type: "string",
    ...j(t)
  });
}
function ap(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...j(t)
  });
}
function Oi(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Rr(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Ni(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Ci(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...j(t)
  });
}
function Ri(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...j(t)
  });
}
function Ai(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...j(t)
  });
}
function Kr(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function ji(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Mi(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Pi(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function zi(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Ui(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Di(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Zi(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function qi(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Li(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Fi(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Ji(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Vi(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Gi(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Bi(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
function Wi(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...j(t)
  });
}
const sp = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function up(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...j(t)
  });
}
function lp(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...j(t)
  });
}
function cp(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...j(t)
  });
}
function dp(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...j(t)
  });
}
function pp(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...j(t)
  });
}
function mp(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...j(t)
  });
}
function fp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...j(t)
  });
}
function gp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...j(t)
  });
}
function hp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...j(t)
  });
}
function vp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...j(t)
  });
}
function yp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...j(t)
  });
}
function _p(e, t) {
  return new e({
    type: "boolean",
    ...j(t)
  });
}
function bp(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...j(t)
  });
}
function wp(e, t) {
  return new e({
    type: "bigint",
    ...j(t)
  });
}
function $p(e, t) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...j(t)
  });
}
function Ip(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...j(t)
  });
}
function kp(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...j(t)
  });
}
function xp(e, t) {
  return new e({
    type: "symbol",
    ...j(t)
  });
}
function Sp(e, t) {
  return new e({
    type: "undefined",
    ...j(t)
  });
}
function Tp(e, t) {
  return new e({
    type: "null",
    ...j(t)
  });
}
function Ep(e) {
  return new e({
    type: "any"
  });
}
function Op(e) {
  return new e({
    type: "unknown"
  });
}
function Np(e, t) {
  return new e({
    type: "never",
    ...j(t)
  });
}
function Cp(e, t) {
  return new e({
    type: "void",
    ...j(t)
  });
}
function Rp(e, t) {
  return new e({
    type: "date",
    ...j(t)
  });
}
function Ap(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...j(t)
  });
}
function jp(e, t) {
  return new e({
    type: "nan",
    ...j(t)
  });
}
function Yt(e, t) {
  return new yi({
    check: "less_than",
    ...j(t),
    value: e,
    inclusive: !1
  });
}
function _t(e, t) {
  return new yi({
    check: "less_than",
    ...j(t),
    value: e,
    inclusive: !0
  });
}
function Xt(e, t) {
  return new _i({
    check: "greater_than",
    ...j(t),
    value: e,
    inclusive: !1
  });
}
function ot(e, t) {
  return new _i({
    check: "greater_than",
    ...j(t),
    value: e,
    inclusive: !0
  });
}
function Mp(e) {
  return Xt(0, e);
}
function Pp(e) {
  return Yt(0, e);
}
function zp(e) {
  return _t(0, e);
}
function Up(e) {
  return ot(0, e);
}
function Ln(e, t) {
  return new $c({
    check: "multiple_of",
    ...j(t),
    value: e
  });
}
function Yr(e, t) {
  return new xc({
    check: "max_size",
    ...j(t),
    maximum: e
  });
}
function Fn(e, t) {
  return new Sc({
    check: "min_size",
    ...j(t),
    minimum: e
  });
}
function Hi(e, t) {
  return new Tc({
    check: "size_equals",
    ...j(t),
    size: e
  });
}
function Xr(e, t) {
  return new Ec({
    check: "max_length",
    ...j(t),
    maximum: e
  });
}
function yn(e, t) {
  return new Oc({
    check: "min_length",
    ...j(t),
    minimum: e
  });
}
function Qr(e, t) {
  return new Nc({
    check: "length_equals",
    ...j(t),
    length: e
  });
}
function Ki(e, t) {
  return new Cc({
    check: "string_format",
    format: "regex",
    ...j(t),
    pattern: e
  });
}
function Yi(e) {
  return new Rc({
    check: "string_format",
    format: "lowercase",
    ...j(e)
  });
}
function Xi(e) {
  return new Ac({
    check: "string_format",
    format: "uppercase",
    ...j(e)
  });
}
function Qi(e, t) {
  return new jc({
    check: "string_format",
    format: "includes",
    ...j(t),
    includes: e
  });
}
function ea(e, t) {
  return new Mc({
    check: "string_format",
    format: "starts_with",
    ...j(t),
    prefix: e
  });
}
function ta(e, t) {
  return new Pc({
    check: "string_format",
    format: "ends_with",
    ...j(t),
    suffix: e
  });
}
function Dp(e, t, r) {
  return new zc({
    check: "property",
    property: e,
    schema: t,
    ...j(r)
  });
}
function na(e, t) {
  return new Uc({
    check: "mime_type",
    mime: e,
    ...j(t)
  });
}
function an(e) {
  return new Dc({
    check: "overwrite",
    tx: e
  });
}
function ra(e) {
  return an((t) => t.normalize(e));
}
function oa() {
  return an((e) => e.trim());
}
function ia() {
  return an((e) => e.toLowerCase());
}
function aa() {
  return an((e) => e.toUpperCase());
}
function Zp(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...j(r)
  });
}
function E_(e, t, r) {
  return new e({
    type: "union",
    options: t,
    ...j(r)
  });
}
function O_(e, t, r, o) {
  return new e({
    type: "union",
    options: r,
    discriminator: t,
    ...j(o)
  });
}
function N_(e, t, r) {
  return new e({
    type: "intersection",
    left: t,
    right: r
  });
}
function C_(e, t, r, o) {
  const n = r instanceof Q, i = n ? o : r, a = n ? r : null;
  return new e({
    type: "tuple",
    items: t,
    rest: a,
    ...j(i)
  });
}
function R_(e, t, r, o) {
  return new e({
    type: "record",
    keyType: t,
    valueType: r,
    ...j(o)
  });
}
function A_(e, t, r, o) {
  return new e({
    type: "map",
    keyType: t,
    valueType: r,
    ...j(o)
  });
}
function j_(e, t, r) {
  return new e({
    type: "set",
    valueType: t,
    ...j(r)
  });
}
function M_(e, t, r) {
  const o = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new e({
    type: "enum",
    entries: o,
    ...j(r)
  });
}
function P_(e, t, r) {
  return new e({
    type: "enum",
    entries: t,
    ...j(r)
  });
}
function z_(e, t, r) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...j(r)
  });
}
function qp(e, t) {
  return new e({
    type: "file",
    ...j(t)
  });
}
function U_(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
function D_(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
function Z_(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
function q_(e, t, r) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : Br(r);
    }
  });
}
function L_(e, t, r) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...j(r)
  });
}
function F_(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
function J_(e, t, r) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
function V_(e, t, r) {
  return new e({
    type: "pipe",
    in: t,
    out: r
  });
}
function G_(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
function B_(e, t, r) {
  return new e({
    type: "template_literal",
    parts: t,
    ...j(r)
  });
}
function W_(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
function H_(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
function Lp(e, t, r) {
  const o = j(r);
  return o.abort ?? (o.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...o
  });
}
function Fp(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...j(r)
  });
}
function Jp(e) {
  const t = Vp((r) => (r.addIssue = (o) => {
    if (typeof o == "string")
      r.issues.push(hn(o, r.value, t._zod.def));
    else {
      const n = o;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(hn(n));
    }
  }, e(r.value, r)));
  return t;
}
function Vp(e, t) {
  const r = new Te({
    check: "custom",
    ...j(t)
  });
  return r._zod.check = e, r;
}
function Gp(e, t) {
  const r = j(t);
  let o = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" && (o = o.map((p) => typeof p == "string" ? p.toLowerCase() : p), n = n.map((p) => typeof p == "string" ? p.toLowerCase() : p));
  const i = new Set(o), a = new Set(n), s = e.Codec ?? Si, u = e.Boolean ?? $i, l = e.String ?? ur, d = new l({ type: "string", error: r.error }), h = new u({ type: "boolean", error: r.error }), y = new s({
    type: "pipe",
    in: d,
    out: h,
    transform: ((p, g) => {
      let _ = p;
      return r.case !== "sensitive" && (_ = _.toLowerCase()), i.has(_) ? !0 : a.has(_) ? !1 : (g.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...i, ...a],
        input: g.value,
        inst: y,
        continue: !1
      }), {});
    }),
    reverseTransform: ((p, g) => p === !0 ? o[0] || "true" : n[0] || "false"),
    error: r.error
  });
  return y;
}
function lr(e, t, r, o = {}) {
  const n = j(o), i = {
    ...j(o),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof r == "function" ? r : (s) => r.test(s),
    ...n
  };
  return r instanceof RegExp && (i.pattern = r), new e(i);
}
class Jo {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = (t == null ? void 0 : t.metadata) ?? Gt, this.target = (t == null ? void 0 : t.target) ?? "draft-2020-12", this.unrepresentable = (t == null ? void 0 : t.unrepresentable) ?? "throw", this.override = (t == null ? void 0 : t.override) ?? (() => {
    }), this.io = (t == null ? void 0 : t.io) ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(t, r = { path: [], schemaPath: [] }) {
    var h, y, p;
    var o;
    const n = t._zod.def, i = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, a = this.seen.get(t);
    if (a)
      return a.count++, r.schemaPath.includes(t) && (a.cycle = r.path), a.schema;
    const s = { schema: {}, count: 1, cycle: void 0, path: r.path };
    this.seen.set(t, s);
    const u = (y = (h = t._zod).toJSONSchema) == null ? void 0 : y.call(h);
    if (u)
      s.schema = u;
    else {
      const g = {
        ...r,
        schemaPath: [...r.schemaPath, t],
        path: r.path
      }, _ = t._zod.parent;
      if (_)
        s.ref = _, this.process(_, g), this.seen.get(_).isParent = !0;
      else {
        const v = s.schema;
        switch (n.type) {
          case "string": {
            const m = v;
            m.type = "string";
            const { minimum: b, maximum: $, format: w, patterns: N, contentEncoding: O } = t._zod.bag;
            if (typeof b == "number" && (m.minLength = b), typeof $ == "number" && (m.maxLength = $), w && (m.format = i[w] ?? w, m.format === "" && delete m.format), O && (m.contentEncoding = O), N && N.size > 0) {
              const I = [...N];
              I.length === 1 ? m.pattern = I[0].source : I.length > 1 && (s.schema.allOf = [
                ...I.map((C) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: C.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const m = v, { minimum: b, maximum: $, format: w, multipleOf: N, exclusiveMaximum: O, exclusiveMinimum: I } = t._zod.bag;
            typeof w == "string" && w.includes("int") ? m.type = "integer" : m.type = "number", typeof I == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (m.minimum = I, m.exclusiveMinimum = !0) : m.exclusiveMinimum = I), typeof b == "number" && (m.minimum = b, typeof I == "number" && this.target !== "draft-4" && (I >= b ? delete m.minimum : delete m.exclusiveMinimum)), typeof O == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (m.maximum = O, m.exclusiveMaximum = !0) : m.exclusiveMaximum = O), typeof $ == "number" && (m.maximum = $, typeof O == "number" && this.target !== "draft-4" && (O <= $ ? delete m.maximum : delete m.exclusiveMaximum)), typeof N == "number" && (m.multipleOf = N);
            break;
          }
          case "boolean": {
            const m = v;
            m.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (v.type = "string", v.nullable = !0, v.enum = [null]) : v.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            v.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const m = v, { minimum: b, maximum: $ } = t._zod.bag;
            typeof b == "number" && (m.minItems = b), typeof $ == "number" && (m.maxItems = $), m.type = "array", m.items = this.process(n.element, { ...g, path: [...g.path, "items"] });
            break;
          }
          case "object": {
            const m = v;
            m.type = "object", m.properties = {};
            const b = n.shape;
            for (const N in b)
              m.properties[N] = this.process(b[N], {
                ...g,
                path: [...g.path, "properties", N]
              });
            const $ = new Set(Object.keys(b)), w = new Set([...$].filter((N) => {
              const O = n.shape[N]._zod;
              return this.io === "input" ? O.optin === void 0 : O.optout === void 0;
            }));
            w.size > 0 && (m.required = Array.from(w)), ((p = n.catchall) == null ? void 0 : p._zod.def.type) === "never" ? m.additionalProperties = !1 : n.catchall ? n.catchall && (m.additionalProperties = this.process(n.catchall, {
              ...g,
              path: [...g.path, "additionalProperties"]
            })) : this.io === "output" && (m.additionalProperties = !1);
            break;
          }
          case "union": {
            const m = v, b = n.options.map(($, w) => this.process($, {
              ...g,
              path: [...g.path, "anyOf", w]
            }));
            m.anyOf = b;
            break;
          }
          case "intersection": {
            const m = v, b = this.process(n.left, {
              ...g,
              path: [...g.path, "allOf", 0]
            }), $ = this.process(n.right, {
              ...g,
              path: [...g.path, "allOf", 1]
            }), w = (O) => "allOf" in O && Object.keys(O).length === 1, N = [
              ...w(b) ? b.allOf : [b],
              ...w($) ? $.allOf : [$]
            ];
            m.allOf = N;
            break;
          }
          case "tuple": {
            const m = v;
            m.type = "array";
            const b = this.target === "draft-2020-12" ? "prefixItems" : "items", $ = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", w = n.items.map((C, R) => this.process(C, {
              ...g,
              path: [...g.path, b, R]
            })), N = n.rest ? this.process(n.rest, {
              ...g,
              path: [...g.path, $, ...this.target === "openapi-3.0" ? [n.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (m.prefixItems = w, N && (m.items = N)) : this.target === "openapi-3.0" ? (m.items = {
              anyOf: w
            }, N && m.items.anyOf.push(N), m.minItems = w.length, N || (m.maxItems = w.length)) : (m.items = w, N && (m.additionalItems = N));
            const { minimum: O, maximum: I } = t._zod.bag;
            typeof O == "number" && (m.minItems = O), typeof I == "number" && (m.maxItems = I);
            break;
          }
          case "record": {
            const m = v;
            m.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (m.propertyNames = this.process(n.keyType, {
              ...g,
              path: [...g.path, "propertyNames"]
            })), m.additionalProperties = this.process(n.valueType, {
              ...g,
              path: [...g.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const m = v, b = ni(n.entries);
            b.every(($) => typeof $ == "number") && (m.type = "number"), b.every(($) => typeof $ == "string") && (m.type = "string"), m.enum = b;
            break;
          }
          case "literal": {
            const m = v, b = [];
            for (const $ of n.values)
              if ($ === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof $ == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                b.push(Number($));
              } else
                b.push($);
            if (b.length !== 0) if (b.length === 1) {
              const $ = b[0];
              m.type = $ === null ? "null" : typeof $, this.target === "draft-4" || this.target === "openapi-3.0" ? m.enum = [$] : m.const = $;
            } else
              b.every(($) => typeof $ == "number") && (m.type = "number"), b.every(($) => typeof $ == "string") && (m.type = "string"), b.every(($) => typeof $ == "boolean") && (m.type = "string"), b.every(($) => $ === null) && (m.type = "null"), m.enum = b;
            break;
          }
          case "file": {
            const m = v, b = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: $, maximum: w, mime: N } = t._zod.bag;
            $ !== void 0 && (b.minLength = $), w !== void 0 && (b.maxLength = w), N ? N.length === 1 ? (b.contentMediaType = N[0], Object.assign(m, b)) : m.anyOf = N.map((O) => ({ ...b, contentMediaType: O })) : Object.assign(m, b);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const m = this.process(n.innerType, g);
            this.target === "openapi-3.0" ? (s.ref = n.innerType, v.nullable = !0) : v.anyOf = [m, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(n.innerType, g), s.ref = n.innerType;
            break;
          }
          case "success": {
            const m = v;
            m.type = "boolean";
            break;
          }
          case "default": {
            this.process(n.innerType, g), s.ref = n.innerType, v.default = JSON.parse(JSON.stringify(n.defaultValue));
            break;
          }
          case "prefault": {
            this.process(n.innerType, g), s.ref = n.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
            break;
          }
          case "catch": {
            this.process(n.innerType, g), s.ref = n.innerType;
            let m;
            try {
              m = n.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = m;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const m = v, b = t._zod.pattern;
            if (!b)
              throw new Error("Pattern not found in template literal");
            m.type = "string", m.pattern = b.source;
            break;
          }
          case "pipe": {
            const m = this.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
            this.process(m, g), s.ref = m;
            break;
          }
          case "readonly": {
            this.process(n.innerType, g), s.ref = n.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(n.innerType, g), s.ref = n.innerType;
            break;
          }
          case "optional": {
            this.process(n.innerType, g), s.ref = n.innerType;
            break;
          }
          case "lazy": {
            const m = t._zod.innerType;
            this.process(m, g), s.ref = m;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const l = this.metadataRegistry.get(t);
    return l && Object.assign(s.schema, l), this.io === "input" && ze(t) && (delete s.schema.examples, delete s.schema.default), this.io === "input" && s.schema._prefault && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, this.seen.get(t).schema;
  }
  emit(t, r) {
    var d, h, y, p, g, _;
    const o = {
      cycles: (r == null ? void 0 : r.cycles) ?? "ref",
      reused: (r == null ? void 0 : r.reused) ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: (r == null ? void 0 : r.external) ?? void 0
    }, n = this.seen.get(t);
    if (!n)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (v) => {
      var N;
      const m = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (o.external) {
        const O = (N = o.external.registry.get(v[0])) == null ? void 0 : N.id, I = o.external.uri ?? ((R) => R);
        if (O)
          return { ref: I(O) };
        const C = v[1].defId ?? v[1].schema.id ?? `schema${this.counter++}`;
        return v[1].defId = C, { defId: C, ref: `${I("__shared")}#/${m}/${C}` };
      }
      if (v[1] === n)
        return { ref: "#" };
      const $ = `#/${m}/`, w = v[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: w, ref: $ + w };
    }, a = (v) => {
      if (v[1].schema.$ref)
        return;
      const m = v[1], { ref: b, defId: $ } = i(v);
      m.def = { ...m.schema }, $ && (m.defId = $);
      const w = m.schema;
      for (const N in w)
        delete w[N];
      w.$ref = b;
    };
    if (o.cycles === "throw")
      for (const v of this.seen.entries()) {
        const m = v[1];
        if (m.cycle)
          throw new Error(`Cycle detected: #/${(d = m.cycle) == null ? void 0 : d.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const v of this.seen.entries()) {
      const m = v[1];
      if (t === v[0]) {
        a(v);
        continue;
      }
      if (o.external) {
        const $ = (h = o.external.registry.get(v[0])) == null ? void 0 : h.id;
        if (t !== v[0] && $) {
          a(v);
          continue;
        }
      }
      if ((y = this.metadataRegistry.get(v[0])) == null ? void 0 : y.id) {
        a(v);
        continue;
      }
      if (m.cycle) {
        a(v);
        continue;
      }
      if (m.count > 1 && o.reused === "ref") {
        a(v);
        continue;
      }
    }
    const s = (v, m) => {
      const b = this.seen.get(v), $ = b.def ?? b.schema, w = { ...$ };
      if (b.ref === null)
        return;
      const N = b.ref;
      if (b.ref = null, N) {
        s(N, m);
        const O = this.seen.get(N).schema;
        O.$ref && (m.target === "draft-7" || m.target === "draft-4" || m.target === "openapi-3.0") ? ($.allOf = $.allOf ?? [], $.allOf.push(O)) : (Object.assign($, O), Object.assign($, w));
      }
      b.isParent || this.override({
        zodSchema: v,
        jsonSchema: $,
        path: b.path ?? []
      });
    };
    for (const v of [...this.seen.entries()].reverse())
      s(v[0], { target: this.target });
    const u = {};
    if (this.target === "draft-2020-12" ? u.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? u.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? u.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), (p = o.external) != null && p.uri) {
      const v = (g = o.external.registry.get(t)) == null ? void 0 : g.id;
      if (!v)
        throw new Error("Schema is missing an `id` property");
      u.$id = o.external.uri(v);
    }
    Object.assign(u, n.def);
    const l = ((_ = o.external) == null ? void 0 : _.defs) ?? {};
    for (const v of this.seen.entries()) {
      const m = v[1];
      m.def && m.defId && (l[m.defId] = m.def);
    }
    o.external || Object.keys(l).length > 0 && (this.target === "draft-2020-12" ? u.$defs = l : u.definitions = l);
    try {
      return JSON.parse(JSON.stringify(u));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function sa(e, t) {
  if (e instanceof Ti) {
    const o = new Jo(t), n = {};
    for (const s of e._idmap.entries()) {
      const [u, l] = s;
      o.process(l);
    }
    const i = {}, a = {
      registry: e,
      uri: t == null ? void 0 : t.uri,
      defs: n
    };
    for (const s of e._idmap.entries()) {
      const [u, l] = s;
      i[u] = o.emit(l, {
        ...t,
        external: a
      });
    }
    if (Object.keys(n).length > 0) {
      const s = o.target === "draft-2020-12" ? "$defs" : "definitions";
      i.__shared = {
        [s]: n
      };
    }
    return { schemas: i };
  }
  const r = new Jo(t);
  return r.process(e), r.emit(e, t);
}
function ze(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  switch (n.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return ze(n.element, r);
    case "object": {
      for (const i in n.shape)
        if (ze(n.shape[i], r))
          return !0;
      return !1;
    }
    case "union": {
      for (const i of n.options)
        if (ze(i, r))
          return !0;
      return !1;
    }
    case "intersection":
      return ze(n.left, r) || ze(n.right, r);
    case "tuple": {
      for (const i of n.items)
        if (ze(i, r))
          return !0;
      return !!(n.rest && ze(n.rest, r));
    }
    case "record":
      return ze(n.keyType, r) || ze(n.valueType, r);
    case "map":
      return ze(n.keyType, r) || ze(n.valueType, r);
    case "set":
      return ze(n.valueType, r);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return ze(n.innerType, r);
    case "lazy":
      return ze(n.getter(), r);
    case "default":
      return ze(n.innerType, r);
    case "prefault":
      return ze(n.innerType, r);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return ze(n.in, r) || ze(n.out, r);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${n.type}`);
}
const K_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $ZodAny: _d,
  $ZodArray: kd,
  $ZodAsyncError: Wt,
  $ZodBase64: sd,
  $ZodBase64URL: ld,
  $ZodBigInt: Ii,
  $ZodBigIntFormat: gd,
  $ZodBoolean: $i,
  $ZodCIDRv4: id,
  $ZodCIDRv6: ad,
  $ZodCUID: Wc,
  $ZodCUID2: Hc,
  $ZodCatch: Jd,
  $ZodCheck: Te,
  $ZodCheckBigIntFormat: kc,
  $ZodCheckEndsWith: Pc,
  $ZodCheckGreaterThan: _i,
  $ZodCheckIncludes: jc,
  $ZodCheckLengthEquals: Nc,
  $ZodCheckLessThan: yi,
  $ZodCheckLowerCase: Rc,
  $ZodCheckMaxLength: Ec,
  $ZodCheckMaxSize: xc,
  $ZodCheckMimeType: Uc,
  $ZodCheckMinLength: Oc,
  $ZodCheckMinSize: Sc,
  $ZodCheckMultipleOf: $c,
  $ZodCheckNumberFormat: Ic,
  $ZodCheckOverwrite: Dc,
  $ZodCheckProperty: zc,
  $ZodCheckRegex: Cc,
  $ZodCheckSizeEquals: Tc,
  $ZodCheckStartsWith: Mc,
  $ZodCheckStringFormat: sr,
  $ZodCheckUpperCase: Ac,
  $ZodCodec: Si,
  $ZodCustom: Xd,
  $ZodCustomStringFormat: md,
  $ZodDate: Id,
  $ZodDefault: Zd,
  $ZodDiscriminatedUnion: Od,
  $ZodE164: cd,
  $ZodEmail: Jc,
  $ZodEmoji: Gc,
  $ZodEncodeError: Vr,
  $ZodEnum: jd,
  $ZodError: oi,
  $ZodFile: Pd,
  $ZodFunction: Hd,
  $ZodGUID: Lc,
  $ZodIPv4: rd,
  $ZodIPv6: od,
  $ZodISODate: ed,
  $ZodISODateTime: Qc,
  $ZodISODuration: nd,
  $ZodISOTime: td,
  $ZodIntersection: Nd,
  $ZodJWT: pd,
  $ZodKSUID: Xc,
  $ZodLazy: Yd,
  $ZodLiteral: Md,
  $ZodMap: Rd,
  $ZodNaN: Vd,
  $ZodNanoID: Bc,
  $ZodNever: wd,
  $ZodNonOptional: Ld,
  $ZodNull: yd,
  $ZodNullable: Dd,
  $ZodNumber: wi,
  $ZodNumberFormat: fd,
  $ZodObject: Td,
  $ZodObjectJIT: Ed,
  $ZodOptional: Ud,
  $ZodPipe: Gd,
  $ZodPrefault: qd,
  $ZodPromise: Kd,
  $ZodReadonly: Bd,
  $ZodRealError: ut,
  $ZodRecord: Cd,
  $ZodRegistry: Ti,
  $ZodSet: Ad,
  $ZodString: ur,
  $ZodStringFormat: be,
  $ZodSuccess: Fd,
  $ZodSymbol: hd,
  $ZodTemplateLiteral: Wd,
  $ZodTransform: zd,
  $ZodTuple: xi,
  $ZodType: Q,
  $ZodULID: Kc,
  $ZodURL: Vc,
  $ZodUUID: Fc,
  $ZodUndefined: vd,
  $ZodUnion: ki,
  $ZodUnknown: bd,
  $ZodVoid: $d,
  $ZodXID: Yc,
  $brand: _l,
  $constructor: T,
  $input: op,
  $output: rp,
  Doc: Zc,
  JSONSchema: K_,
  JSONSchemaGenerator: Jo,
  NEVER: yl,
  TimePrecision: sp,
  _any: Ep,
  _array: Zp,
  _base64: Vi,
  _base64url: Gi,
  _bigint: wp,
  _boolean: _p,
  _catch: J_,
  _check: Vp,
  _cidrv4: Fi,
  _cidrv6: Ji,
  _coercedBigint: $p,
  _coercedBoolean: bp,
  _coercedDate: Ap,
  _coercedNumber: mp,
  _coercedString: ap,
  _cuid: Pi,
  _cuid2: zi,
  _custom: Lp,
  _date: Rp,
  _decode: ui,
  _decodeAsync: ci,
  _default: q_,
  _discriminatedUnion: O_,
  _e164: Bi,
  _email: Oi,
  _emoji: ji,
  _encode: si,
  _encodeAsync: li,
  _endsWith: ta,
  _enum: M_,
  _file: qp,
  _float32: gp,
  _float64: hp,
  _gt: Xt,
  _gte: ot,
  _guid: Rr,
  _includes: Qi,
  _int: fp,
  _int32: vp,
  _int64: Ip,
  _intersection: N_,
  _ipv4: qi,
  _ipv6: Li,
  _isoDate: lp,
  _isoDateTime: up,
  _isoDuration: dp,
  _isoTime: cp,
  _jwt: Wi,
  _ksuid: Zi,
  _lazy: W_,
  _length: Qr,
  _literal: z_,
  _lowercase: Yi,
  _lt: Yt,
  _lte: _t,
  _map: A_,
  _max: _t,
  _maxLength: Xr,
  _maxSize: Yr,
  _mime: na,
  _min: ot,
  _minLength: yn,
  _minSize: Fn,
  _multipleOf: Ln,
  _nan: jp,
  _nanoid: Mi,
  _nativeEnum: P_,
  _negative: Pp,
  _never: Np,
  _nonnegative: Up,
  _nonoptional: L_,
  _nonpositive: zp,
  _normalize: ra,
  _null: Tp,
  _nullable: Z_,
  _number: pp,
  _optional: D_,
  _overwrite: an,
  _parse: tr,
  _parseAsync: nr,
  _pipe: V_,
  _positive: Mp,
  _promise: H_,
  _property: Dp,
  _readonly: G_,
  _record: R_,
  _refine: Fp,
  _regex: Ki,
  _safeDecode: pi,
  _safeDecodeAsync: fi,
  _safeEncode: di,
  _safeEncodeAsync: mi,
  _safeParse: rr,
  _safeParseAsync: or,
  _set: j_,
  _size: Hi,
  _startsWith: ea,
  _string: ip,
  _stringFormat: lr,
  _stringbool: Gp,
  _success: F_,
  _superRefine: Jp,
  _symbol: xp,
  _templateLiteral: B_,
  _toLowerCase: ia,
  _toUpperCase: aa,
  _transform: U_,
  _trim: oa,
  _tuple: C_,
  _uint32: yp,
  _uint64: kp,
  _ulid: Ui,
  _undefined: Sp,
  _union: E_,
  _unknown: Op,
  _uppercase: Xi,
  _url: Kr,
  _uuid: Ni,
  _uuidv4: Ci,
  _uuidv6: Ri,
  _uuidv7: Ai,
  _void: Cp,
  _xid: Di,
  clone: ct,
  config: Qe,
  decode: pv,
  decodeAsync: fv,
  encode: dv,
  encodeAsync: mv,
  flattenError: ii,
  formatError: ai,
  globalConfig: Er,
  globalRegistry: Gt,
  isValidBase64: bi,
  isValidBase64URL: ud,
  isValidJWT: dd,
  locales: np,
  parse: qo,
  parseAsync: Lo,
  prettifyError: Dl,
  regexes: vi,
  registry: Ei,
  safeDecode: hv,
  safeDecodeAsync: yv,
  safeEncode: gv,
  safeEncodeAsync: vv,
  safeParse: Zl,
  safeParseAsync: ql,
  toDotPath: Ul,
  toJSONSchema: sa,
  treeifyError: zl,
  util: Ml,
  version: qc
}, Symbol.toStringTag, { value: "Module" })), ua = /* @__PURE__ */ T("ZodISODateTime", (e, t) => {
  Qc.init(e, t), Ie.init(e, t);
});
function Bp(e) {
  return up(ua, e);
}
const la = /* @__PURE__ */ T("ZodISODate", (e, t) => {
  ed.init(e, t), Ie.init(e, t);
});
function Wp(e) {
  return lp(la, e);
}
const ca = /* @__PURE__ */ T("ZodISOTime", (e, t) => {
  td.init(e, t), Ie.init(e, t);
});
function Hp(e) {
  return cp(ca, e);
}
const da = /* @__PURE__ */ T("ZodISODuration", (e, t) => {
  nd.init(e, t), Ie.init(e, t);
});
function Kp(e) {
  return dp(da, e);
}
const X_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZodISODate: la,
  ZodISODateTime: ua,
  ZodISODuration: da,
  ZodISOTime: ca,
  date: Wp,
  datetime: Bp,
  duration: Kp,
  time: Hp
}, Symbol.toStringTag, { value: "Module" })), Yp = (e, t) => {
  oi.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => ai(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => ii(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Or, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Or, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Q_ = T("ZodError", Yp), lt = T("ZodError", Yp, {
  Parent: Error
}), Xp = /* @__PURE__ */ tr(lt), Qp = /* @__PURE__ */ nr(lt), em = /* @__PURE__ */ rr(lt), pa = /* @__PURE__ */ or(lt), tm = /* @__PURE__ */ si(lt), nm = /* @__PURE__ */ ui(lt), rm = /* @__PURE__ */ li(lt), om = /* @__PURE__ */ ci(lt), im = /* @__PURE__ */ di(lt), am = /* @__PURE__ */ pi(lt), sm = /* @__PURE__ */ mi(lt), um = /* @__PURE__ */ fi(lt), re = /* @__PURE__ */ T("ZodType", (e, t) => (Q.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(At(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
})), e.clone = (r, o) => ct(e, r, o), e.brand = () => e, e.register = ((r, o) => (r.add(e, o), e)), e.parse = (r, o) => Xp(e, r, o, { callee: e.parse }), e.safeParse = (r, o) => em(e, r, o), e.parseAsync = async (r, o) => Qp(e, r, o, { callee: e.parseAsync }), e.safeParseAsync = async (r, o) => pa(e, r, o), e.spa = e.safeParseAsync, e.encode = (r, o) => tm(e, r, o), e.decode = (r, o) => nm(e, r, o), e.encodeAsync = async (r, o) => rm(e, r, o), e.decodeAsync = async (r, o) => om(e, r, o), e.safeEncode = (r, o) => im(e, r, o), e.safeDecode = (r, o) => am(e, r, o), e.safeEncodeAsync = async (r, o) => sm(e, r, o), e.safeDecodeAsync = async (r, o) => um(e, r, o), e.refine = (r, o) => e.check(Lm(r, o)), e.superRefine = (r) => e.check(Fm(r)), e.overwrite = (r) => e.check(an(r)), e.optional = () => xe(e), e.nullable = () => Mr(e), e.nullish = () => xe(Mr(e)), e.nonoptional = (r) => Cm(e, r), e.array = () => A(e), e.or = (r) => Y([e, r]), e.and = (r) => _m(e, r), e.transform = (r) => Pr(e, Pa(r)), e.default = (r) => Em(e, r), e.prefault = (r) => Nm(e, r), e.catch = (r) => jm(e, r), e.pipe = (r) => Pr(e, r), e.readonly = () => zm(e), e.describe = (r) => {
  const o = e.clone();
  return Gt.add(o, { description: r }), o;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = Gt.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Gt.get(e);
  const o = e.clone();
  return Gt.add(o, r[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), ma = /* @__PURE__ */ T("_ZodString", (e, t) => {
  ur.init(e, t), re.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...o) => e.check(Ki(...o)), e.includes = (...o) => e.check(Qi(...o)), e.startsWith = (...o) => e.check(ea(...o)), e.endsWith = (...o) => e.check(ta(...o)), e.min = (...o) => e.check(yn(...o)), e.max = (...o) => e.check(Xr(...o)), e.length = (...o) => e.check(Qr(...o)), e.nonempty = (...o) => e.check(yn(1, ...o)), e.lowercase = (o) => e.check(Yi(o)), e.uppercase = (o) => e.check(Xi(o)), e.trim = () => e.check(oa()), e.normalize = (...o) => e.check(ra(...o)), e.toLowerCase = () => e.check(ia()), e.toUpperCase = () => e.check(aa());
}), eo = /* @__PURE__ */ T("ZodString", (e, t) => {
  ur.init(e, t), ma.init(e, t), e.email = (r) => e.check(Oi(fa, r)), e.url = (r) => e.check(Kr(to, r)), e.jwt = (r) => e.check(Wi(Na, r)), e.emoji = (r) => e.check(ji(ga, r)), e.guid = (r) => e.check(Rr(Ar, r)), e.uuid = (r) => e.check(Ni(Ot, r)), e.uuidv4 = (r) => e.check(Ci(Ot, r)), e.uuidv6 = (r) => e.check(Ri(Ot, r)), e.uuidv7 = (r) => e.check(Ai(Ot, r)), e.nanoid = (r) => e.check(Mi(ha, r)), e.guid = (r) => e.check(Rr(Ar, r)), e.cuid = (r) => e.check(Pi(va, r)), e.cuid2 = (r) => e.check(zi(ya, r)), e.ulid = (r) => e.check(Ui(_a, r)), e.base64 = (r) => e.check(Vi(Sa, r)), e.base64url = (r) => e.check(Gi(Ea, r)), e.xid = (r) => e.check(Di(ba, r)), e.ksuid = (r) => e.check(Zi(wa, r)), e.ipv4 = (r) => e.check(qi($a, r)), e.ipv6 = (r) => e.check(Li(Ia, r)), e.cidrv4 = (r) => e.check(Fi(ka, r)), e.cidrv6 = (r) => e.check(Ji(xa, r)), e.e164 = (r) => e.check(Bi(Oa, r)), e.datetime = (r) => e.check(Bp(r)), e.date = (r) => e.check(Wp(r)), e.time = (r) => e.check(Hp(r)), e.duration = (r) => e.check(Kp(r));
});
function c(e) {
  return ip(eo, e);
}
const Ie = /* @__PURE__ */ T("ZodStringFormat", (e, t) => {
  be.init(e, t), ma.init(e, t);
}), fa = /* @__PURE__ */ T("ZodEmail", (e, t) => {
  Jc.init(e, t), Ie.init(e, t);
});
function eb(e) {
  return Oi(fa, e);
}
const Ar = /* @__PURE__ */ T("ZodGUID", (e, t) => {
  Lc.init(e, t), Ie.init(e, t);
});
function tb(e) {
  return Rr(Ar, e);
}
const Ot = /* @__PURE__ */ T("ZodUUID", (e, t) => {
  Fc.init(e, t), Ie.init(e, t);
});
function nb(e) {
  return Ni(Ot, e);
}
function rb(e) {
  return Ci(Ot, e);
}
function ob(e) {
  return Ri(Ot, e);
}
function ib(e) {
  return Ai(Ot, e);
}
const to = /* @__PURE__ */ T("ZodURL", (e, t) => {
  Vc.init(e, t), Ie.init(e, t);
});
function ab(e) {
  return Kr(to, e);
}
function sb(e) {
  return Kr(to, {
    protocol: /^https?$/,
    hostname: oc,
    ...j(e)
  });
}
const ga = /* @__PURE__ */ T("ZodEmoji", (e, t) => {
  Gc.init(e, t), Ie.init(e, t);
});
function ub(e) {
  return ji(ga, e);
}
const ha = /* @__PURE__ */ T("ZodNanoID", (e, t) => {
  Bc.init(e, t), Ie.init(e, t);
});
function lb(e) {
  return Mi(ha, e);
}
const va = /* @__PURE__ */ T("ZodCUID", (e, t) => {
  Wc.init(e, t), Ie.init(e, t);
});
function cb(e) {
  return Pi(va, e);
}
const ya = /* @__PURE__ */ T("ZodCUID2", (e, t) => {
  Hc.init(e, t), Ie.init(e, t);
});
function db(e) {
  return zi(ya, e);
}
const _a = /* @__PURE__ */ T("ZodULID", (e, t) => {
  Kc.init(e, t), Ie.init(e, t);
});
function pb(e) {
  return Ui(_a, e);
}
const ba = /* @__PURE__ */ T("ZodXID", (e, t) => {
  Yc.init(e, t), Ie.init(e, t);
});
function mb(e) {
  return Di(ba, e);
}
const wa = /* @__PURE__ */ T("ZodKSUID", (e, t) => {
  Xc.init(e, t), Ie.init(e, t);
});
function fb(e) {
  return Zi(wa, e);
}
const $a = /* @__PURE__ */ T("ZodIPv4", (e, t) => {
  rd.init(e, t), Ie.init(e, t);
});
function gb(e) {
  return qi($a, e);
}
const Ia = /* @__PURE__ */ T("ZodIPv6", (e, t) => {
  od.init(e, t), Ie.init(e, t);
});
function hb(e) {
  return Li(Ia, e);
}
const ka = /* @__PURE__ */ T("ZodCIDRv4", (e, t) => {
  id.init(e, t), Ie.init(e, t);
});
function vb(e) {
  return Fi(ka, e);
}
const xa = /* @__PURE__ */ T("ZodCIDRv6", (e, t) => {
  ad.init(e, t), Ie.init(e, t);
});
function yb(e) {
  return Ji(xa, e);
}
const Sa = /* @__PURE__ */ T("ZodBase64", (e, t) => {
  sd.init(e, t), Ie.init(e, t);
});
function Ta(e) {
  return Vi(Sa, e);
}
const Ea = /* @__PURE__ */ T("ZodBase64URL", (e, t) => {
  ld.init(e, t), Ie.init(e, t);
});
function _b(e) {
  return Gi(Ea, e);
}
const Oa = /* @__PURE__ */ T("ZodE164", (e, t) => {
  cd.init(e, t), Ie.init(e, t);
});
function bb(e) {
  return Bi(Oa, e);
}
const Na = /* @__PURE__ */ T("ZodJWT", (e, t) => {
  pd.init(e, t), Ie.init(e, t);
});
function wb(e) {
  return Wi(Na, e);
}
const cr = /* @__PURE__ */ T("ZodCustomStringFormat", (e, t) => {
  md.init(e, t), Ie.init(e, t);
});
function $b(e, t, r = {}) {
  return lr(cr, e, t, r);
}
function Ib(e) {
  return lr(cr, "hostname", hi, e);
}
function kb(e) {
  return lr(cr, "hex", bc, e);
}
function xb(e, t) {
  const r = (t == null ? void 0 : t.enc) ?? "hex", o = `${e}_${r}`, n = vi[o];
  if (!n)
    throw new Error(`Unrecognized hash format: ${o}`);
  return lr(cr, o, n, t);
}
const no = /* @__PURE__ */ T("ZodNumber", (e, t) => {
  wi.init(e, t), re.init(e, t), e.gt = (o, n) => e.check(Xt(o, n)), e.gte = (o, n) => e.check(ot(o, n)), e.min = (o, n) => e.check(ot(o, n)), e.lt = (o, n) => e.check(Yt(o, n)), e.lte = (o, n) => e.check(_t(o, n)), e.max = (o, n) => e.check(_t(o, n)), e.int = (o) => e.check(Vo(o)), e.safe = (o) => e.check(Vo(o)), e.positive = (o) => e.check(Xt(0, o)), e.nonnegative = (o) => e.check(ot(0, o)), e.negative = (o) => e.check(Yt(0, o)), e.nonpositive = (o) => e.check(_t(0, o)), e.multipleOf = (o, n) => e.check(Ln(o, n)), e.step = (o, n) => e.check(Ln(o, n)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function S(e) {
  return pp(no, e);
}
const $n = /* @__PURE__ */ T("ZodNumberFormat", (e, t) => {
  fd.init(e, t), no.init(e, t);
});
function Vo(e) {
  return fp($n, e);
}
function Sb(e) {
  return gp($n, e);
}
function Tb(e) {
  return hp($n, e);
}
function Eb(e) {
  return vp($n, e);
}
function Ob(e) {
  return yp($n, e);
}
const ro = /* @__PURE__ */ T("ZodBoolean", (e, t) => {
  $i.init(e, t), re.init(e, t);
});
function V(e) {
  return _p(ro, e);
}
const oo = /* @__PURE__ */ T("ZodBigInt", (e, t) => {
  Ii.init(e, t), re.init(e, t), e.gte = (o, n) => e.check(ot(o, n)), e.min = (o, n) => e.check(ot(o, n)), e.gt = (o, n) => e.check(Xt(o, n)), e.gte = (o, n) => e.check(ot(o, n)), e.min = (o, n) => e.check(ot(o, n)), e.lt = (o, n) => e.check(Yt(o, n)), e.lte = (o, n) => e.check(_t(o, n)), e.max = (o, n) => e.check(_t(o, n)), e.positive = (o) => e.check(Xt(BigInt(0), o)), e.negative = (o) => e.check(Yt(BigInt(0), o)), e.nonpositive = (o) => e.check(_t(BigInt(0), o)), e.nonnegative = (o) => e.check(ot(BigInt(0), o)), e.multipleOf = (o, n) => e.check(Ln(o, n));
  const r = e._zod.bag;
  e.minValue = r.minimum ?? null, e.maxValue = r.maximum ?? null, e.format = r.format ?? null;
});
function Nb(e) {
  return wp(oo, e);
}
const Ca = /* @__PURE__ */ T("ZodBigIntFormat", (e, t) => {
  gd.init(e, t), oo.init(e, t);
});
function Cb(e) {
  return Ip(Ca, e);
}
function Rb(e) {
  return kp(Ca, e);
}
const lm = /* @__PURE__ */ T("ZodSymbol", (e, t) => {
  hd.init(e, t), re.init(e, t);
});
function Ab(e) {
  return xp(lm, e);
}
const cm = /* @__PURE__ */ T("ZodUndefined", (e, t) => {
  vd.init(e, t), re.init(e, t);
});
function jb(e) {
  return Sp(cm, e);
}
const dm = /* @__PURE__ */ T("ZodNull", (e, t) => {
  yd.init(e, t), re.init(e, t);
});
function Ra(e) {
  return Tp(dm, e);
}
const pm = /* @__PURE__ */ T("ZodAny", (e, t) => {
  _d.init(e, t), re.init(e, t);
});
function vt() {
  return Ep(pm);
}
const mm = /* @__PURE__ */ T("ZodUnknown", (e, t) => {
  bd.init(e, t), re.init(e, t);
});
function ue() {
  return Op(mm);
}
const fm = /* @__PURE__ */ T("ZodNever", (e, t) => {
  wd.init(e, t), re.init(e, t);
});
function Ke(e) {
  return Np(fm, e);
}
const gm = /* @__PURE__ */ T("ZodVoid", (e, t) => {
  $d.init(e, t), re.init(e, t);
});
function Mb(e) {
  return Cp(gm, e);
}
const Aa = /* @__PURE__ */ T("ZodDate", (e, t) => {
  Id.init(e, t), re.init(e, t), e.min = (o, n) => e.check(ot(o, n)), e.max = (o, n) => e.check(_t(o, n));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
function Pb(e) {
  return Rp(Aa, e);
}
const hm = /* @__PURE__ */ T("ZodArray", (e, t) => {
  kd.init(e, t), re.init(e, t), e.element = t.element, e.min = (r, o) => e.check(yn(r, o)), e.nonempty = (r) => e.check(yn(1, r)), e.max = (r, o) => e.check(Xr(r, o)), e.length = (r, o) => e.check(Qr(r, o)), e.unwrap = () => e.element;
});
function A(e, t) {
  return Zp(hm, e, t);
}
function zb(e) {
  const t = e._zod.def.shape;
  return ne(Object.keys(t));
}
const io = /* @__PURE__ */ T("ZodObject", (e, t) => {
  Ed.init(e, t), re.init(e, t), se(e, "shape", () => t.shape), e.keyof = () => ne(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ue() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ue() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Ke() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => El(e, r), e.safeExtend = (r) => Ol(e, r), e.merge = (r) => Nl(e, r), e.pick = (r) => Sl(e, r), e.omit = (r) => Tl(e, r), e.partial = (...r) => Cl(za, e, r[0]), e.required = (...r) => Rl(Ua, e, r[0]);
});
function f(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...j(t)
  };
  return new io(r);
}
function ke(e, t) {
  return new io({
    type: "object",
    shape: e,
    catchall: Ke(),
    ...j(t)
  });
}
function kt(e, t) {
  return new io({
    type: "object",
    shape: e,
    catchall: ue(),
    ...j(t)
  });
}
const ja = /* @__PURE__ */ T("ZodUnion", (e, t) => {
  ki.init(e, t), re.init(e, t), e.options = t.options;
});
function Y(e, t) {
  return new ja({
    type: "union",
    options: e,
    ...j(t)
  });
}
const vm = /* @__PURE__ */ T("ZodDiscriminatedUnion", (e, t) => {
  ja.init(e, t), Od.init(e, t);
});
function Ae(e, t, r) {
  return new vm({
    type: "union",
    options: t,
    discriminator: e,
    ...j(r)
  });
}
const ym = /* @__PURE__ */ T("ZodIntersection", (e, t) => {
  Nd.init(e, t), re.init(e, t);
});
function _m(e, t) {
  return new ym({
    type: "intersection",
    left: e,
    right: t
  });
}
const bm = /* @__PURE__ */ T("ZodTuple", (e, t) => {
  xi.init(e, t), re.init(e, t), e.rest = (r) => e.clone({
    ...e._zod.def,
    rest: r
  });
});
function jr(e, t, r) {
  const o = t instanceof Q, n = o ? r : t, i = o ? t : null;
  return new bm({
    type: "tuple",
    items: e,
    rest: i,
    ...j(n)
  });
}
const Ma = /* @__PURE__ */ T("ZodRecord", (e, t) => {
  Cd.init(e, t), re.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function je(e, t, r) {
  return new Ma({
    type: "record",
    keyType: e,
    valueType: t,
    ...j(r)
  });
}
function Ub(e, t, r) {
  const o = ct(e);
  return o._zod.values = void 0, new Ma({
    type: "record",
    keyType: o,
    valueType: t,
    ...j(r)
  });
}
const wm = /* @__PURE__ */ T("ZodMap", (e, t) => {
  Rd.init(e, t), re.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Db(e, t, r) {
  return new wm({
    type: "map",
    keyType: e,
    valueType: t,
    ...j(r)
  });
}
const $m = /* @__PURE__ */ T("ZodSet", (e, t) => {
  Ad.init(e, t), re.init(e, t), e.min = (...r) => e.check(Fn(...r)), e.nonempty = (r) => e.check(Fn(1, r)), e.max = (...r) => e.check(Yr(...r)), e.size = (...r) => e.check(Hi(...r));
});
function Zb(e, t) {
  return new $m({
    type: "set",
    valueType: e,
    ...j(t)
  });
}
const Jn = /* @__PURE__ */ T("ZodEnum", (e, t) => {
  jd.init(e, t), re.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (o, n) => {
    const i = {};
    for (const a of o)
      if (r.has(a))
        i[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Jn({
      ...t,
      checks: [],
      ...j(n),
      entries: i
    });
  }, e.exclude = (o, n) => {
    const i = { ...t.entries };
    for (const a of o)
      if (r.has(a))
        delete i[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Jn({
      ...t,
      checks: [],
      ...j(n),
      entries: i
    });
  };
});
function ne(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Jn({
    type: "enum",
    entries: r,
    ...j(t)
  });
}
function qb(e, t) {
  return new Jn({
    type: "enum",
    entries: e,
    ...j(t)
  });
}
const Im = /* @__PURE__ */ T("ZodLiteral", (e, t) => {
  Md.init(e, t), re.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function k(e, t) {
  return new Im({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...j(t)
  });
}
const km = /* @__PURE__ */ T("ZodFile", (e, t) => {
  Pd.init(e, t), re.init(e, t), e.min = (r, o) => e.check(Fn(r, o)), e.max = (r, o) => e.check(Yr(r, o)), e.mime = (r, o) => e.check(na(Array.isArray(r) ? r : [r], o));
});
function Lb(e) {
  return qp(km, e);
}
const xm = /* @__PURE__ */ T("ZodTransform", (e, t) => {
  zd.init(e, t), re.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Vr(e.constructor.name);
    r.addIssue = (i) => {
      if (typeof i == "string")
        r.issues.push(hn(i, r.value, t));
      else {
        const a = i;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(hn(a));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((i) => (r.value = i, r)) : (r.value = n, r);
  };
});
function Pa(e) {
  return new xm({
    type: "transform",
    transform: e
  });
}
const za = /* @__PURE__ */ T("ZodOptional", (e, t) => {
  Ud.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function xe(e) {
  return new za({
    type: "optional",
    innerType: e
  });
}
const Sm = /* @__PURE__ */ T("ZodNullable", (e, t) => {
  Dd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Mr(e) {
  return new Sm({
    type: "nullable",
    innerType: e
  });
}
function Fb(e) {
  return xe(Mr(e));
}
const Tm = /* @__PURE__ */ T("ZodDefault", (e, t) => {
  Zd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Em(e, t) {
  return new Tm({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Br(t);
    }
  });
}
const Om = /* @__PURE__ */ T("ZodPrefault", (e, t) => {
  qd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Nm(e, t) {
  return new Om({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Br(t);
    }
  });
}
const Ua = /* @__PURE__ */ T("ZodNonOptional", (e, t) => {
  Ld.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Cm(e, t) {
  return new Ua({
    type: "nonoptional",
    innerType: e,
    ...j(t)
  });
}
const Rm = /* @__PURE__ */ T("ZodSuccess", (e, t) => {
  Fd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Jb(e) {
  return new Rm({
    type: "success",
    innerType: e
  });
}
const Am = /* @__PURE__ */ T("ZodCatch", (e, t) => {
  Jd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function jm(e, t) {
  return new Am({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Mm = /* @__PURE__ */ T("ZodNaN", (e, t) => {
  Vd.init(e, t), re.init(e, t);
});
function Vb(e) {
  return jp(Mm, e);
}
const Da = /* @__PURE__ */ T("ZodPipe", (e, t) => {
  Gd.init(e, t), re.init(e, t), e.in = t.in, e.out = t.out;
});
function Pr(e, t) {
  return new Da({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Za = /* @__PURE__ */ T("ZodCodec", (e, t) => {
  Da.init(e, t), Si.init(e, t);
});
function Gb(e, t, r) {
  return new Za({
    type: "pipe",
    in: e,
    out: t,
    transform: r.decode,
    reverseTransform: r.encode
  });
}
const Pm = /* @__PURE__ */ T("ZodReadonly", (e, t) => {
  Bd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function zm(e) {
  return new Pm({
    type: "readonly",
    innerType: e
  });
}
const Um = /* @__PURE__ */ T("ZodTemplateLiteral", (e, t) => {
  Wd.init(e, t), re.init(e, t);
});
function Bb(e, t) {
  return new Um({
    type: "template_literal",
    parts: e,
    ...j(t)
  });
}
const Dm = /* @__PURE__ */ T("ZodLazy", (e, t) => {
  Yd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function ao(e) {
  return new Dm({
    type: "lazy",
    getter: e
  });
}
const Zm = /* @__PURE__ */ T("ZodPromise", (e, t) => {
  Kd.init(e, t), re.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Wb(e) {
  return new Zm({
    type: "promise",
    innerType: e
  });
}
const qm = /* @__PURE__ */ T("ZodFunction", (e, t) => {
  Hd.init(e, t), re.init(e, t);
});
function ks(e) {
  return new qm({
    type: "function",
    input: Array.isArray(e == null ? void 0 : e.input) ? jr(e == null ? void 0 : e.input) : (e == null ? void 0 : e.input) ?? A(ue()),
    output: (e == null ? void 0 : e.output) ?? ue()
  });
}
const so = /* @__PURE__ */ T("ZodCustom", (e, t) => {
  Xd.init(e, t), re.init(e, t);
});
function Hb(e) {
  const t = new Te({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function qa(e, t) {
  return Lp(so, e ?? (() => !0), t);
}
function Lm(e, t = {}) {
  return Fp(so, e, t);
}
function Fm(e) {
  return Jp(e);
}
function Vn(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const r = new so({
    type: "custom",
    check: "custom",
    fn: (o) => o instanceof e,
    abort: !0,
    ...j(t)
  });
  return r._zod.bag.Class = e, r;
}
const Kb = (...e) => Gp({
  Codec: Za,
  Boolean: ro,
  String: eo
}, ...e);
function Yb(e) {
  const t = ao(() => Y([c(e), S(), V(), Ra(), A(t), je(c(), t)]));
  return t;
}
function Xb(e, t) {
  return Pr(Pa(e), t);
}
const Qb = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function ew(e) {
  Qe({
    customError: e
  });
}
function tw() {
  return Qe().customError;
}
var Go;
Go || (Go = {});
function nw(e) {
  return ap(eo, e);
}
function Jm(e) {
  return mp(no, e);
}
function rw(e) {
  return bp(ro, e);
}
function ow(e) {
  return $p(oo, e);
}
function iw(e) {
  return Ap(Aa, e);
}
const aw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bigint: ow,
  boolean: rw,
  date: iw,
  number: Jm,
  string: nw
}, Symbol.toStringTag, { value: "Module" }));
Qe(Qd());
const fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: _l,
  $input: op,
  $output: rp,
  NEVER: yl,
  TimePrecision: sp,
  ZodAny: pm,
  ZodArray: hm,
  ZodBase64: Sa,
  ZodBase64URL: Ea,
  ZodBigInt: oo,
  ZodBigIntFormat: Ca,
  ZodBoolean: ro,
  ZodCIDRv4: ka,
  ZodCIDRv6: xa,
  ZodCUID: va,
  ZodCUID2: ya,
  ZodCatch: Am,
  ZodCodec: Za,
  ZodCustom: so,
  ZodCustomStringFormat: cr,
  ZodDate: Aa,
  ZodDefault: Tm,
  ZodDiscriminatedUnion: vm,
  ZodE164: Oa,
  ZodEmail: fa,
  ZodEmoji: ga,
  ZodEnum: Jn,
  ZodError: Q_,
  ZodFile: km,
  get ZodFirstPartyTypeKind() {
    return Go;
  },
  ZodFunction: qm,
  ZodGUID: Ar,
  ZodIPv4: $a,
  ZodIPv6: Ia,
  ZodISODate: la,
  ZodISODateTime: ua,
  ZodISODuration: da,
  ZodISOTime: ca,
  ZodIntersection: ym,
  ZodIssueCode: Qb,
  ZodJWT: Na,
  ZodKSUID: wa,
  ZodLazy: Dm,
  ZodLiteral: Im,
  ZodMap: wm,
  ZodNaN: Mm,
  ZodNanoID: ha,
  ZodNever: fm,
  ZodNonOptional: Ua,
  ZodNull: dm,
  ZodNullable: Sm,
  ZodNumber: no,
  ZodNumberFormat: $n,
  ZodObject: io,
  ZodOptional: za,
  ZodPipe: Da,
  ZodPrefault: Om,
  ZodPromise: Zm,
  ZodReadonly: Pm,
  ZodRealError: lt,
  ZodRecord: Ma,
  ZodSet: $m,
  ZodString: eo,
  ZodStringFormat: Ie,
  ZodSuccess: Rm,
  ZodSymbol: lm,
  ZodTemplateLiteral: Um,
  ZodTransform: xm,
  ZodTuple: bm,
  ZodType: re,
  ZodULID: _a,
  ZodURL: to,
  ZodUUID: Ot,
  ZodUndefined: cm,
  ZodUnion: ja,
  ZodUnknown: mm,
  ZodVoid: gm,
  ZodXID: ba,
  _ZodString: ma,
  _default: Em,
  _function: ks,
  any: vt,
  array: A,
  base64: Ta,
  base64url: _b,
  bigint: Nb,
  boolean: V,
  catch: jm,
  check: Hb,
  cidrv4: vb,
  cidrv6: yb,
  clone: ct,
  codec: Gb,
  coerce: aw,
  config: Qe,
  core: Y_,
  cuid: cb,
  cuid2: db,
  custom: qa,
  date: Pb,
  decode: nm,
  decodeAsync: om,
  discriminatedUnion: Ae,
  e164: bb,
  email: eb,
  emoji: ub,
  encode: tm,
  encodeAsync: rm,
  endsWith: ta,
  enum: ne,
  file: Lb,
  flattenError: ii,
  float32: Sb,
  float64: Tb,
  formatError: ai,
  function: ks,
  getErrorMap: tw,
  globalRegistry: Gt,
  gt: Xt,
  gte: ot,
  guid: tb,
  hash: xb,
  hex: kb,
  hostname: Ib,
  httpUrl: sb,
  includes: Qi,
  instanceof: Vn,
  int: Vo,
  int32: Eb,
  int64: Cb,
  intersection: _m,
  ipv4: gb,
  ipv6: hb,
  iso: X_,
  json: Yb,
  jwt: wb,
  keyof: zb,
  ksuid: fb,
  lazy: ao,
  length: Qr,
  literal: k,
  locales: np,
  looseObject: kt,
  lowercase: Yi,
  lt: Yt,
  lte: _t,
  map: Db,
  maxLength: Xr,
  maxSize: Yr,
  mime: na,
  minLength: yn,
  minSize: Fn,
  multipleOf: Ln,
  nan: Vb,
  nanoid: lb,
  nativeEnum: qb,
  negative: Pp,
  never: Ke,
  nonnegative: Up,
  nonoptional: Cm,
  nonpositive: zp,
  normalize: ra,
  null: Ra,
  nullable: Mr,
  nullish: Fb,
  number: S,
  object: f,
  optional: xe,
  overwrite: an,
  parse: Xp,
  parseAsync: Qp,
  partialRecord: Ub,
  pipe: Pr,
  positive: Mp,
  prefault: Nm,
  preprocess: Xb,
  prettifyError: Dl,
  promise: Wb,
  property: Dp,
  readonly: zm,
  record: je,
  refine: Lm,
  regex: Ki,
  regexes: vi,
  registry: Ei,
  safeDecode: am,
  safeDecodeAsync: um,
  safeEncode: im,
  safeEncodeAsync: sm,
  safeParse: em,
  safeParseAsync: pa,
  set: Zb,
  setErrorMap: ew,
  size: Hi,
  startsWith: ea,
  strictObject: ke,
  string: c,
  stringFormat: $b,
  stringbool: Kb,
  success: Jb,
  superRefine: Fm,
  symbol: Ab,
  templateLiteral: Bb,
  toJSONSchema: sa,
  toLowerCase: ia,
  toUpperCase: aa,
  transform: Pa,
  treeifyError: zl,
  trim: oa,
  tuple: jr,
  uint32: Ob,
  uint64: Rb,
  ulid: pb,
  undefined: jb,
  union: Y,
  unknown: ue,
  uppercase: Xi,
  url: ab,
  util: Ml,
  uuid: nb,
  uuidv4: rb,
  uuidv6: ob,
  uuidv7: ib,
  void: Mb,
  xid: mb
}, Symbol.toStringTag, { value: "Module" }));
var Gn;
(function(e) {
  e.assertEqual = (n) => {
  };
  function t(n) {
  }
  e.assertIs = t;
  function r(n) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (n) => {
    const i = {};
    for (const a of n)
      i[a] = a;
    return i;
  }, e.getValidEnumValues = (n) => {
    const i = e.objectKeys(n).filter((s) => typeof n[n[s]] != "number"), a = {};
    for (const s of i)
      a[s] = n[s];
    return e.objectValues(a);
  }, e.objectValues = (n) => e.objectKeys(n).map(function(i) {
    return n[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const i = [];
    for (const a in n)
      Object.prototype.hasOwnProperty.call(n, a) && i.push(a);
    return i;
  }, e.find = (n, i) => {
    for (const a of n)
      if (i(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && Number.isFinite(n) && Math.floor(n) === n;
  function o(n, i = " | ") {
    return n.map((a) => typeof a == "string" ? `'${a}'` : a).join(i);
  }
  e.joinValues = o, e.jsonStringifyReplacer = (n, i) => typeof i == "bigint" ? i.toString() : i;
})(Gn || (Gn = {}));
var xs;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(xs || (xs = {}));
Gn.arrayToEnum([
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
]);
Gn.arrayToEnum([
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
class zr extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (o) => {
      this.issues = [...this.issues, o];
    }, this.addIssues = (o = []) => {
      this.issues = [...this.issues, ...o];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const r = t || function(i) {
      return i.message;
    }, o = { _errors: [] }, n = (i) => {
      for (const a of i.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(n);
        else if (a.code === "invalid_return_type")
          n(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          n(a.argumentsError);
        else if (a.path.length === 0)
          o._errors.push(r(a));
        else {
          let s = o, u = 0;
          for (; u < a.path.length; ) {
            const l = a.path[u];
            u === a.path.length - 1 ? (s[l] = s[l] || { _errors: [] }, s[l]._errors.push(r(a))) : s[l] = s[l] || { _errors: [] }, s = s[l], u++;
          }
        }
    };
    return n(this), o;
  }
  static assert(t) {
    if (!(t instanceof zr))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Gn.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, o = [];
    for (const n of this.issues)
      if (n.path.length > 0) {
        const i = n.path[0];
        r[i] = r[i] || [], r[i].push(t(n));
      } else
        o.push(t(n));
    return { formErrors: o, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
zr.create = (e) => new zr(e);
var Ss;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Ss || (Ss = {}));
var ee;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ee || (ee = {}));
function Ne(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
async function La(e, t) {
  if (e == null)
    return Promise.resolve();
  const r = t == null ? void 0 : t.abortSignal;
  return new Promise((o, n) => {
    if (r != null && r.aborted) {
      n(Ts());
      return;
    }
    const i = setTimeout(() => {
      a(), o();
    }, e), a = () => {
      clearTimeout(i), r == null || r.removeEventListener("abort", s);
    }, s = () => {
      a(), n(Ts());
    };
    r == null || r.addEventListener("abort", s);
  });
}
function Ts() {
  return new DOMException("Delay was aborted", "AbortError");
}
function In(e) {
  return Object.fromEntries([...e.headers]);
}
function Zt(e = globalThis) {
  var t, r, o;
  return e.window ? "runtime/browser" : (t = e.navigator) != null && t.userAgent ? `runtime/${e.navigator.userAgent.toLowerCase()}` : (o = (r = e.process) == null ? void 0 : r.versions) != null && o.node ? `runtime/node.js/${e.process.version.substring(0)}` : e.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown";
}
function sw(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
function Me(e, ...t) {
  const r = sw(
    e ?? {}
  ), o = new Headers(r), n = o.get("user-agent") || "";
  return o.set(
    "user-agent",
    [n, ...t].filter(Boolean).join(" ")
  ), Object.fromEntries(o);
}
var dr = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: o = "-"
} = {}) => {
  const n = () => {
    const i = r.length, a = new Array(t);
    for (let s = 0; s < t; s++)
      a[s] = r[Math.random() * i | 0];
    return a.join("");
  };
  if (e == null)
    return n;
  if (r.includes(o))
    throw new ei({
      argument: "separator",
      message: `The separator "${o}" must not be part of the alphabet "${r}".`
    });
  return () => `${e}${o}${n()}`;
}, Fe = dr();
function uo(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function Qt(e) {
  return (e instanceof Error || e instanceof DOMException) && (e.name === "AbortError" || e.name === "ResponseAborted" || // Next.js
  e.name === "TimeoutError");
}
var uw = ["fetch failed", "failed to fetch"];
function Vm({
  error: e,
  url: t,
  requestBodyValues: r
}) {
  if (Qt(e))
    return e;
  if (e instanceof TypeError && uw.includes(e.message.toLowerCase())) {
    const o = e.cause;
    if (o != null)
      return new Ze({
        message: `Cannot connect to API: ${o.message}`,
        cause: o,
        url: t,
        requestBodyValues: r,
        isRetryable: !0
        // retry when network error
      });
  }
  return e;
}
var Gm = "3.0.10", lw = () => globalThis.fetch, Es = async ({
  url: e,
  headers: t = {},
  successfulResponseHandler: r,
  failedResponseHandler: o,
  abortSignal: n,
  fetch: i = lw()
}) => {
  try {
    const a = await i(e, {
      method: "GET",
      headers: Me(
        t,
        `ai-sdk/provider-utils/${Gm}`,
        Zt()
      ),
      signal: n
    }), s = In(a);
    if (!a.ok) {
      let u;
      try {
        u = await o({
          response: a,
          url: e,
          requestBodyValues: {}
        });
      } catch (l) {
        throw Qt(l) || Ze.isInstance(l) ? l : new Ze({
          message: "Failed to process error response",
          cause: l,
          statusCode: a.status,
          url: e,
          responseHeaders: s,
          requestBodyValues: {}
        });
      }
      throw u.value;
    }
    try {
      return await r({
        response: a,
        url: e,
        requestBodyValues: {}
      });
    } catch (u) {
      throw u instanceof Error && (Qt(u) || Ze.isInstance(u)) ? u : new Ze({
        message: "Failed to process successful response",
        cause: u,
        statusCode: a.status,
        url: e,
        responseHeaders: s,
        requestBodyValues: {}
      });
    }
  } catch (a) {
    throw Vm({ error: a, url: e, requestBodyValues: {} });
  }
}, cw = "JSON schema:", dw = "You MUST answer with a JSON object that matches the JSON schema above.", pw = "You MUST answer with JSON.";
function mw({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? cw : void 0,
  schemaSuffix: o = t != null ? dw : pw
}) {
  return [
    e != null && e.length > 0 ? e : void 0,
    e != null && e.length > 0 ? "" : void 0,
    // add a newline if prompt is not null
    r,
    t != null ? JSON.stringify(t) : void 0,
    o
  ].filter((n) => n != null).join(`
`);
}
function fw({
  messages: e,
  schema: t,
  schemaPrefix: r,
  schemaSuffix: o
}) {
  var n, i;
  const a = ((n = e[0]) == null ? void 0 : n.role) === "system" ? { ...e[0] } : { role: "system", content: "" };
  return a.content = mw({
    prompt: a.content,
    schema: t,
    schemaPrefix: r,
    schemaSuffix: o
  }), [
    a,
    ...((i = e[0]) == null ? void 0 : i.role) === "system" ? e.slice(1) : e
  ];
}
function gw({
  mediaType: e,
  url: t,
  supportedUrls: r
}) {
  return t = t.toLowerCase(), e = e.toLowerCase(), Object.entries(r).map(([o, n]) => {
    const i = o.toLowerCase();
    return i === "*" || i === "*/*" ? { mediaTypePrefix: "", regexes: n } : { mediaTypePrefix: i.replace(/\*/, ""), regexes: n };
  }).filter(({ mediaTypePrefix: o }) => e.startsWith(o)).flatMap(({ regexes: o }) => o).some((o) => o.test(t));
}
function lo({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: o
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new br({
      message: `${o} API key must be a string.`
    });
  if (typeof process > "u")
    throw new br({
      message: `${o} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new br({
      message: `${o} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new br({
      message: `${o} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
function zn({
  settingValue: e,
  environmentVariableName: t
}) {
  if (typeof e == "string")
    return e;
  if (!(e != null || typeof process > "u") && (e = process.env[t], !(e == null || typeof e != "string")))
    return e;
}
function hw(e) {
  var t;
  const [r, o = ""] = e.toLowerCase().split("/");
  return (t = {
    mpeg: "mp3",
    "x-wav": "wav",
    opus: "ogg",
    mp4: "m4a",
    "x-m4a": "m4a"
  }[o]) != null ? t : o;
}
var vw = /"__proto__"\s*:/, yw = /"constructor"\s*:/;
function _w(e) {
  const t = JSON.parse(e);
  return t === null || typeof t != "object" || vw.test(e) === !1 && yw.test(e) === !1 ? t : bw(t);
}
function bw(e) {
  let t = [e];
  for (; t.length; ) {
    const r = t;
    t = [];
    for (const o of r) {
      if (Object.prototype.hasOwnProperty.call(o, "__proto__"))
        throw new SyntaxError("Object contains forbidden prototype property");
      if (Object.prototype.hasOwnProperty.call(o, "constructor") && Object.prototype.hasOwnProperty.call(o.constructor, "prototype"))
        throw new SyntaxError("Object contains forbidden prototype property");
      for (const n in o) {
        const i = o[n];
        i && typeof i == "object" && t.push(i);
      }
    }
  }
  return e;
}
function Fa(e) {
  const { stackTraceLimit: t } = Error;
  Error.stackTraceLimit = 0;
  try {
    return _w(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
var Ur = Symbol.for("vercel.ai.validator");
function ww(e) {
  return { [Ur]: !0, validate: e };
}
function $w(e) {
  return typeof e == "object" && e !== null && Ur in e && e[Ur] === !0 && "validate" in e;
}
function Iw(e) {
  return $w(e) ? e : kw(e);
}
function kw(e) {
  return ww(async (t) => {
    const r = await e["~standard"].validate(t);
    return r.issues == null ? { success: !0, value: r.value } : {
      success: !1,
      error: new tt({
        value: t,
        cause: r.issues
      })
    };
  });
}
async function Ut({
  value: e,
  schema: t
}) {
  const r = await Ct({ value: e, schema: t });
  if (!r.success)
    throw tt.wrap({ value: e, cause: r.error });
  return r.value;
}
async function Ct({
  value: e,
  schema: t
}) {
  const r = Iw(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e, rawValue: e };
    const o = await r.validate(e);
    return o.success ? { success: !0, value: o.value, rawValue: e } : {
      success: !1,
      error: tt.wrap({ value: e, cause: o.error }),
      rawValue: e
    };
  } catch (o) {
    return {
      success: !1,
      error: tt.wrap({ value: e, cause: o }),
      rawValue: e
    };
  }
}
async function xw({
  text: e,
  schema: t
}) {
  try {
    const r = Fa(e);
    return t == null ? r : Ut({ value: r, schema: t });
  } catch (r) {
    throw qn.isInstance(r) || tt.isInstance(r) ? r : new qn({ text: e, cause: r });
  }
}
async function qt({
  text: e,
  schema: t
}) {
  try {
    const r = Fa(e);
    return t == null ? { success: !0, value: r, rawValue: r } : await Ct({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: qn.isInstance(r) ? r : new qn({ text: e, cause: r }),
      rawValue: void 0
    };
  }
}
function Os(e) {
  try {
    return Fa(e), !0;
  } catch {
    return !1;
  }
}
function Ja({
  stream: e,
  schema: t
}) {
  return e.pipeThrough(new TextDecoderStream()).pipeThrough(new vl()).pipeThrough(
    new TransformStream({
      async transform({ data: r }, o) {
        r !== "[DONE]" && o.enqueue(await qt({ text: r, schema: t }));
      }
    })
  );
}
async function Ge({
  provider: e,
  providerOptions: t,
  schema: r
}) {
  if ((t == null ? void 0 : t[e]) == null)
    return;
  const o = await Ct({
    value: t[e],
    schema: r
  });
  if (!o.success)
    throw new ei({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: o.error
    });
  return o.value;
}
var Sw = () => globalThis.fetch, Se = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: o,
  successfulResponseHandler: n,
  abortSignal: i,
  fetch: a
}) => Bm({
  url: e,
  headers: {
    "Content-Type": "application/json",
    ...t
  },
  body: {
    content: JSON.stringify(r),
    values: r
  },
  failedResponseHandler: o,
  successfulResponseHandler: n,
  abortSignal: i,
  fetch: a
}), Tw = async ({
  url: e,
  headers: t,
  formData: r,
  failedResponseHandler: o,
  successfulResponseHandler: n,
  abortSignal: i,
  fetch: a
}) => Bm({
  url: e,
  headers: t,
  body: {
    content: r,
    values: Object.fromEntries(r.entries())
  },
  failedResponseHandler: o,
  successfulResponseHandler: n,
  abortSignal: i,
  fetch: a
}), Bm = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: o,
  failedResponseHandler: n,
  abortSignal: i,
  fetch: a = Sw()
}) => {
  try {
    const s = await a(e, {
      method: "POST",
      headers: Me(
        t,
        `ai-sdk/provider-utils/${Gm}`,
        Zt()
      ),
      body: r.content,
      signal: i
    }), u = In(s);
    if (!s.ok) {
      let l;
      try {
        l = await n({
          response: s,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw Qt(d) || Ze.isInstance(d) ? d : new Ze({
          message: "Failed to process error response",
          cause: d,
          statusCode: s.status,
          url: e,
          responseHeaders: u,
          requestBodyValues: r.values
        });
      }
      throw l.value;
    }
    try {
      return await o({
        response: s,
        url: e,
        requestBodyValues: r.values
      });
    } catch (l) {
      throw l instanceof Error && (Qt(l) || Ze.isInstance(l)) ? l : new Ze({
        message: "Failed to process successful response",
        cause: l,
        statusCode: s.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (s) {
    throw Vm({ error: s, url: e, requestBodyValues: r.values });
  }
};
function _E(e) {
  return e;
}
function Ew(e) {
  return { ...e, type: "dynamic" };
}
function dt({
  id: e,
  name: t,
  inputSchema: r
}) {
  return ({
    execute: o,
    outputSchema: n,
    toModelOutput: i,
    onInputStart: a,
    onInputDelta: s,
    onInputAvailable: u,
    ...l
  }) => ({
    type: "provider-defined",
    id: e,
    name: t,
    args: l,
    inputSchema: r,
    outputSchema: n,
    execute: o,
    toModelOutput: i,
    onInputStart: a,
    onInputDelta: s,
    onInputAvailable: u
  });
}
function Ft({
  id: e,
  name: t,
  inputSchema: r,
  outputSchema: o
}) {
  return ({
    execute: n,
    toModelOutput: i,
    onInputStart: a,
    onInputDelta: s,
    onInputAvailable: u,
    ...l
  }) => ({
    type: "provider-defined",
    id: e,
    name: t,
    args: l,
    inputSchema: r,
    outputSchema: o,
    execute: n,
    toModelOutput: i,
    onInputStart: a,
    onInputDelta: s,
    onInputAvailable: u
  });
}
async function Ue(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var Rt = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: o, url: n, requestBodyValues: i }) => {
  const a = await o.text(), s = In(o);
  if (a.trim() === "")
    return {
      responseHeaders: s,
      value: new Ze({
        message: o.statusText,
        url: n,
        requestBodyValues: i,
        statusCode: o.status,
        responseHeaders: s,
        responseBody: a,
        isRetryable: r == null ? void 0 : r(o)
      })
    };
  try {
    const u = await xw({
      text: a,
      schema: e
    });
    return {
      responseHeaders: s,
      value: new Ze({
        message: t(u),
        url: n,
        requestBodyValues: i,
        statusCode: o.status,
        responseHeaders: s,
        responseBody: a,
        data: u,
        isRetryable: r == null ? void 0 : r(o, u)
      })
    };
  } catch {
    return {
      responseHeaders: s,
      value: new Ze({
        message: o.statusText,
        url: n,
        requestBodyValues: i,
        statusCode: o.status,
        responseHeaders: s,
        responseBody: a,
        isRetryable: r == null ? void 0 : r(o)
      })
    };
  }
}, sn = (e) => async ({ response: t }) => {
  const r = In(t);
  if (t.body == null)
    throw new Rh({});
  return {
    responseHeaders: r,
    value: Ja({
      stream: t.body,
      schema: e
    })
  };
}, Je = (e) => async ({ response: t, url: r, requestBodyValues: o }) => {
  const n = await t.text(), i = await qt({
    text: n,
    schema: e
  }), a = In(t);
  if (!i.success)
    throw new Ze({
      message: "Invalid JSON response",
      cause: i.error,
      statusCode: t.status,
      responseHeaders: a,
      responseBody: n,
      url: r,
      requestBodyValues: o
    });
  return {
    responseHeaders: a,
    value: i.value,
    rawValue: i.rawValue
  };
}, Ow = () => async ({ response: e, url: t, requestBodyValues: r }) => {
  const o = In(e);
  if (!e.body)
    throw new Ze({
      message: "Response body is empty",
      url: t,
      requestBodyValues: r,
      statusCode: e.status,
      responseHeaders: o,
      responseBody: void 0
    });
  try {
    const n = await e.arrayBuffer();
    return {
      responseHeaders: o,
      value: new Uint8Array(n)
    };
  } catch (n) {
    throw new Ze({
      message: "Failed to read response as array buffer",
      url: t,
      requestBodyValues: r,
      statusCode: e.status,
      responseHeaders: o,
      responseBody: void 0,
      cause: n
    });
  }
}, Nw = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
}, Cw = Symbol(
  "Let zodToJsonSchema decide on which parser to use"
), Ns = {
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
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
}, Rw = (e) => typeof e == "string" ? {
  ...Ns,
  name: e
} : {
  ...Ns,
  ...e
};
function it() {
  return {};
}
function Aw(e, t) {
  var r, o, n;
  const i = {
    type: "array"
  };
  return (r = e.type) != null && r._def && ((n = (o = e.type) == null ? void 0 : o._def) == null ? void 0 : n.typeName) !== ee.ZodAny && (i.items = ge(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && (i.minItems = e.minLength.value), e.maxLength && (i.maxItems = e.maxLength.value), e.exactLength && (i.minItems = e.exactLength.value, i.maxItems = e.exactLength.value), i;
}
function jw(e) {
  const t = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return t;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        r.inclusive ? t.minimum = r.value : t.exclusiveMinimum = r.value;
        break;
      case "max":
        r.inclusive ? t.maximum = r.value : t.exclusiveMaximum = r.value;
        break;
      case "multipleOf":
        t.multipleOf = r.value;
        break;
    }
  return t;
}
function Mw() {
  return { type: "boolean" };
}
function Wm(e, t) {
  return ge(e.type._def, t);
}
var Pw = (e, t) => ge(e.innerType._def, t);
function Hm(e, t, r) {
  const o = r ?? t.dateStrategy;
  if (Array.isArray(o))
    return {
      anyOf: o.map((n, i) => Hm(e, t, n))
    };
  switch (o) {
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
      return zw(e);
  }
}
var zw = (e) => {
  const t = {
    type: "integer",
    format: "unix-time"
  };
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        t.minimum = r.value;
        break;
      case "max":
        t.maximum = r.value;
        break;
    }
  return t;
};
function Uw(e, t) {
  return {
    ...ge(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Dw(e, t) {
  return t.effectStrategy === "input" ? ge(e.schema._def, t) : it();
}
function Zw(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
var qw = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Lw(e, t) {
  const r = [
    ge(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    ge(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((n) => !!n), o = [];
  return r.forEach((n) => {
    if (qw(n))
      o.push(...n.allOf);
    else {
      let i = n;
      if ("additionalProperties" in n && n.additionalProperties === !1) {
        const { additionalProperties: a, ...s } = n;
        i = s;
      }
      o.push(i);
    }
  }), o.length ? { allOf: o } : void 0;
}
function Fw(e) {
  const t = typeof e.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : {
    type: t === "bigint" ? "integer" : t,
    const: e.value
  };
}
var No = void 0, mt = {
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
  emoji: () => (No === void 0 && (No = RegExp(
    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    "u"
  )), No),
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
function Km(e, t) {
  const r = {
    type: "string"
  };
  if (e.checks)
    for (const o of e.checks)
      switch (o.kind) {
        case "min":
          r.minLength = typeof r.minLength == "number" ? Math.max(r.minLength, o.value) : o.value;
          break;
        case "max":
          r.maxLength = typeof r.maxLength == "number" ? Math.min(r.maxLength, o.value) : o.value;
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              ft(r, "email", o.message, t);
              break;
            case "format:idn-email":
              ft(r, "idn-email", o.message, t);
              break;
            case "pattern:zod":
              He(r, mt.email, o.message, t);
              break;
          }
          break;
        case "url":
          ft(r, "uri", o.message, t);
          break;
        case "uuid":
          ft(r, "uuid", o.message, t);
          break;
        case "regex":
          He(r, o.regex, o.message, t);
          break;
        case "cuid":
          He(r, mt.cuid, o.message, t);
          break;
        case "cuid2":
          He(r, mt.cuid2, o.message, t);
          break;
        case "startsWith":
          He(
            r,
            RegExp(`^${Co(o.value, t)}`),
            o.message,
            t
          );
          break;
        case "endsWith":
          He(
            r,
            RegExp(`${Co(o.value, t)}$`),
            o.message,
            t
          );
          break;
        case "datetime":
          ft(r, "date-time", o.message, t);
          break;
        case "date":
          ft(r, "date", o.message, t);
          break;
        case "time":
          ft(r, "time", o.message, t);
          break;
        case "duration":
          ft(r, "duration", o.message, t);
          break;
        case "length":
          r.minLength = typeof r.minLength == "number" ? Math.max(r.minLength, o.value) : o.value, r.maxLength = typeof r.maxLength == "number" ? Math.min(r.maxLength, o.value) : o.value;
          break;
        case "includes": {
          He(
            r,
            RegExp(Co(o.value, t)),
            o.message,
            t
          );
          break;
        }
        case "ip": {
          o.version !== "v6" && ft(r, "ipv4", o.message, t), o.version !== "v4" && ft(r, "ipv6", o.message, t);
          break;
        }
        case "base64url":
          He(r, mt.base64url, o.message, t);
          break;
        case "jwt":
          He(r, mt.jwt, o.message, t);
          break;
        case "cidr": {
          o.version !== "v6" && He(r, mt.ipv4Cidr, o.message, t), o.version !== "v4" && He(r, mt.ipv6Cidr, o.message, t);
          break;
        }
        case "emoji":
          He(r, mt.emoji(), o.message, t);
          break;
        case "ulid": {
          He(r, mt.ulid, o.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              ft(r, "binary", o.message, t);
              break;
            }
            case "contentEncoding:base64": {
              r.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              He(r, mt.base64, o.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          He(r, mt.nanoid, o.message, t);
      }
  return r;
}
function Co(e, t) {
  return t.patternStrategy === "escape" ? Vw(e) : e;
}
var Jw = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function Vw(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    Jw.has(e[r]) || (t += "\\"), t += e[r];
  return t;
}
function ft(e, t, r, o) {
  var n;
  e.format || (n = e.anyOf) != null && n.some((i) => i.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format
  }), delete e.format), e.anyOf.push({
    format: t,
    ...r && o.errorMessages && { errorMessage: { format: r } }
  })) : e.format = t;
}
function He(e, t, r, o) {
  var n;
  e.pattern || (n = e.allOf) != null && n.some((i) => i.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern
  }), delete e.pattern), e.allOf.push({
    pattern: Cs(t, o),
    ...r && o.errorMessages && { errorMessage: { pattern: r } }
  })) : e.pattern = Cs(t, o);
}
function Cs(e, t) {
  var r;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const o = {
    i: e.flags.includes("i"),
    // Case-insensitive
    m: e.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: e.flags.includes("s")
    // `.` matches newlines
  }, n = o.i ? e.source.toLowerCase() : e.source;
  let i = "", a = !1, s = !1, u = !1;
  for (let l = 0; l < n.length; l++) {
    if (a) {
      i += n[l], a = !1;
      continue;
    }
    if (o.i) {
      if (s) {
        if (n[l].match(/[a-z]/)) {
          u ? (i += n[l], i += `${n[l - 2]}-${n[l]}`.toUpperCase(), u = !1) : n[l + 1] === "-" && ((r = n[l + 2]) != null && r.match(/[a-z]/)) ? (i += n[l], u = !0) : i += `${n[l]}${n[l].toUpperCase()}`;
          continue;
        }
      } else if (n[l].match(/[a-z]/)) {
        i += `[${n[l]}${n[l].toUpperCase()}]`;
        continue;
      }
    }
    if (o.m) {
      if (n[l] === "^") {
        i += `(^|(?<=[\r
]))`;
        continue;
      } else if (n[l] === "$") {
        i += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (o.s && n[l] === ".") {
      i += s ? `${n[l]}\r
` : `[${n[l]}\r
]`;
      continue;
    }
    i += n[l], n[l] === "\\" ? a = !0 : s && n[l] === "]" ? s = !1 : !s && n[l] === "[" && (s = !0);
  }
  try {
    new RegExp(i);
  } catch {
    return console.warn(
      `Could not convert regex pattern at ${t.currentPath.join(
        "/"
      )} to a flag-independent form! Falling back to the flag-ignorant source`
    ), e.source;
  }
  return i;
}
function Ym(e, t) {
  var r, o, n, i, a, s;
  const u = {
    type: "object",
    additionalProperties: (r = ge(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    })) != null ? r : t.allowedAdditionalProperties
  };
  if (((o = e.keyType) == null ? void 0 : o._def.typeName) === ee.ZodString && ((n = e.keyType._def.checks) != null && n.length)) {
    const { type: l, ...d } = Km(e.keyType._def, t);
    return {
      ...u,
      propertyNames: d
    };
  } else {
    if (((i = e.keyType) == null ? void 0 : i._def.typeName) === ee.ZodEnum)
      return {
        ...u,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((a = e.keyType) == null ? void 0 : a._def.typeName) === ee.ZodBranded && e.keyType._def.type._def.typeName === ee.ZodString && ((s = e.keyType._def.type._def.checks) != null && s.length)) {
      const { type: l, ...d } = Wm(
        e.keyType._def,
        t
      );
      return {
        ...u,
        propertyNames: d
      };
    }
  }
  return u;
}
function Gw(e, t) {
  if (t.mapStrategy === "record")
    return Ym(e, t);
  const r = ge(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || it(), o = ge(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || it();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [r, o],
      minItems: 2,
      maxItems: 2
    }
  };
}
function Bw(e) {
  const t = e.values, o = Object.keys(e.values).filter((i) => typeof t[t[i]] != "number").map((i) => t[i]), n = Array.from(
    new Set(o.map((i) => typeof i))
  );
  return {
    type: n.length === 1 ? n[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: o
  };
}
function Ww() {
  return { not: it() };
}
function Hw() {
  return {
    type: "null"
  };
}
var Bo = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Kw(e, t) {
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every(
    (o) => o._def.typeName in Bo && (!o._def.checks || !o._def.checks.length)
  )) {
    const o = r.reduce((n, i) => {
      const a = Bo[i._def.typeName];
      return a && !n.includes(a) ? [...n, a] : n;
    }, []);
    return {
      type: o.length > 1 ? o : o[0]
    };
  } else if (r.every((o) => o._def.typeName === "ZodLiteral" && !o.description)) {
    const o = r.reduce(
      (n, i) => {
        const a = typeof i._def.value;
        switch (a) {
          case "string":
          case "number":
          case "boolean":
            return [...n, a];
          case "bigint":
            return [...n, "integer"];
          case "object":
            if (i._def.value === null)
              return [...n, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return n;
        }
      },
      []
    );
    if (o.length === r.length) {
      const n = o.filter((i, a, s) => s.indexOf(i) === a);
      return {
        type: n.length > 1 ? n : n[0],
        enum: r.reduce(
          (i, a) => i.includes(a._def.value) ? i : [...i, a._def.value],
          []
        )
      };
    }
  } else if (r.every((o) => o._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce(
        (o, n) => [
          ...o,
          ...n._def.values.filter((i) => !o.includes(i))
        ],
        []
      )
    };
  return Yw(e, t);
}
var Yw = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map(
    (o, n) => ge(o._def, {
      ...t,
      currentPath: [...t.currentPath, "anyOf", `${n}`]
    })
  ).filter(
    (o) => !!o && (!t.strictUnions || typeof o == "object" && Object.keys(o).length > 0)
  );
  return r.length ? { anyOf: r } : void 0;
};
function Xw(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    e.innerType._def.typeName
  ) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return {
      type: [
        Bo[e.innerType._def.typeName],
        "null"
      ]
    };
  const r = ge(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function Qw(e) {
  const t = {
    type: "number"
  };
  if (!e.checks)
    return t;
  for (const r of e.checks)
    switch (r.kind) {
      case "int":
        t.type = "integer";
        break;
      case "min":
        r.inclusive ? t.minimum = r.value : t.exclusiveMinimum = r.value;
        break;
      case "max":
        r.inclusive ? t.maximum = r.value : t.exclusiveMaximum = r.value;
        break;
      case "multipleOf":
        t.multipleOf = r.value;
        break;
    }
  return t;
}
function e$(e, t) {
  const r = {
    type: "object",
    properties: {}
  }, o = [], n = e.shape();
  for (const a in n) {
    let s = n[a];
    if (s === void 0 || s._def === void 0)
      continue;
    const u = n$(s), l = ge(s._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", a],
      propertyPath: [...t.currentPath, "properties", a]
    });
    l !== void 0 && (r.properties[a] = l, u || o.push(a));
  }
  o.length && (r.required = o);
  const i = t$(e, t);
  return i !== void 0 && (r.additionalProperties = i), r;
}
function t$(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return ge(e.catchall._def, {
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
function n$(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
var r$ = (e, t) => {
  var r;
  if (t.currentPath.toString() === ((r = t.propertyPath) == null ? void 0 : r.toString()))
    return ge(e.innerType._def, t);
  const o = ge(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return o ? { anyOf: [{ not: it() }, o] } : it();
}, o$ = (e, t) => {
  if (t.pipeStrategy === "input")
    return ge(e.in._def, t);
  if (t.pipeStrategy === "output")
    return ge(e.out._def, t);
  const r = ge(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), o = ge(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, o].filter((n) => n !== void 0)
  };
};
function i$(e, t) {
  return ge(e.type._def, t);
}
function a$(e, t) {
  const o = {
    type: "array",
    uniqueItems: !0,
    items: ge(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && (o.minItems = e.minSize.value), e.maxSize && (o.maxItems = e.maxSize.value), o;
}
function s$(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map(
      (r, o) => ge(r._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${o}`]
      })
    ).reduce(
      (r, o) => o === void 0 ? r : [...r, o],
      []
    ),
    additionalItems: ge(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map(
      (r, o) => ge(r._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${o}`]
      })
    ).reduce(
      (r, o) => o === void 0 ? r : [...r, o],
      []
    )
  };
}
function u$() {
  return {
    not: it()
  };
}
function l$() {
  return it();
}
var c$ = (e, t) => ge(e.innerType._def, t), d$ = (e, t, r) => {
  switch (t) {
    case ee.ZodString:
      return Km(e, r);
    case ee.ZodNumber:
      return Qw(e);
    case ee.ZodObject:
      return e$(e, r);
    case ee.ZodBigInt:
      return jw(e);
    case ee.ZodBoolean:
      return Mw();
    case ee.ZodDate:
      return Hm(e, r);
    case ee.ZodUndefined:
      return u$();
    case ee.ZodNull:
      return Hw();
    case ee.ZodArray:
      return Aw(e, r);
    case ee.ZodUnion:
    case ee.ZodDiscriminatedUnion:
      return Kw(e, r);
    case ee.ZodIntersection:
      return Lw(e, r);
    case ee.ZodTuple:
      return s$(e, r);
    case ee.ZodRecord:
      return Ym(e, r);
    case ee.ZodLiteral:
      return Fw(e);
    case ee.ZodEnum:
      return Zw(e);
    case ee.ZodNativeEnum:
      return Bw(e);
    case ee.ZodNullable:
      return Xw(e, r);
    case ee.ZodOptional:
      return r$(e, r);
    case ee.ZodMap:
      return Gw(e, r);
    case ee.ZodSet:
      return a$(e, r);
    case ee.ZodLazy:
      return () => e.getter()._def;
    case ee.ZodPromise:
      return i$(e, r);
    case ee.ZodNaN:
    case ee.ZodNever:
      return Ww();
    case ee.ZodEffects:
      return Dw(e, r);
    case ee.ZodAny:
      return it();
    case ee.ZodUnknown:
      return l$();
    case ee.ZodDefault:
      return Uw(e, r);
    case ee.ZodBranded:
      return Wm(e, r);
    case ee.ZodReadonly:
      return c$(e, r);
    case ee.ZodCatch:
      return Pw(e, r);
    case ee.ZodPipeline:
      return o$(e, r);
    case ee.ZodFunction:
    case ee.ZodVoid:
    case ee.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((o) => {
      })();
  }
};
function ge(e, t, r = !1) {
  var o;
  const n = t.seen.get(e);
  if (t.override) {
    const u = (o = t.override) == null ? void 0 : o.call(
      t,
      e,
      t,
      n,
      r
    );
    if (u !== Cw)
      return u;
  }
  if (n && !r) {
    const u = p$(n, t);
    if (u !== void 0)
      return u;
  }
  const i = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, i);
  const a = d$(e, e.typeName, t), s = typeof a == "function" ? ge(a(), t) : a;
  if (s && m$(e, t, s), t.postProcess) {
    const u = t.postProcess(s, e, t);
    return i.jsonSchema = s, u;
  }
  return i.jsonSchema = s, s;
}
var p$ = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Nw(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, o) => t.currentPath[o] === r) ? (console.warn(
        `Recursive reference detected at ${t.currentPath.join(
          "/"
        )}! Defaulting to any`
      ), it()) : t.$refStrategy === "seen" ? it() : void 0;
  }
}, m$ = (e, t, r) => (e.description && (r.description = e.description), r), f$ = (e) => {
  const t = Rw(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    currentPath: r,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(t.definitions).map(([o, n]) => [
        n._def,
        {
          def: n._def,
          path: [...t.basePath, t.definitionPath, o],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
}, g$ = (e, t) => {
  var r;
  const o = f$(t);
  let n = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce(
    (l, [d, h]) => {
      var y;
      return {
        ...l,
        [d]: (y = ge(
          h._def,
          {
            ...o,
            currentPath: [...o.basePath, o.definitionPath, d]
          },
          !0
        )) != null ? y : it()
      };
    },
    {}
  ) : void 0;
  const i = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, a = (r = ge(
    e._def,
    i === void 0 ? o : {
      ...o,
      currentPath: [...o.basePath, o.definitionPath, i]
    },
    !1
  )) != null ? r : it(), s = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  s !== void 0 && (a.title = s);
  const u = i === void 0 ? n ? {
    ...a,
    [o.definitionPath]: n
  } : a : {
    $ref: [
      ...o.$refStrategy === "relative" ? [] : o.basePath,
      o.definitionPath,
      i
    ].join("/"),
    [o.definitionPath]: {
      ...n,
      [i]: a
    }
  };
  return u.$schema = "http://json-schema.org/draft-07/schema#", u;
}, h$ = g$;
function v$(e, t) {
  var r;
  const o = (r = t == null ? void 0 : t.useReferences) != null ? r : !1;
  return co(
    h$(e, {
      $refStrategy: o ? "root" : "none"
    }),
    {
      validate: async (n) => {
        const i = await e.safeParseAsync(n);
        return i.success ? { success: !0, value: i.data } : { success: !1, error: i.error };
      }
    }
  );
}
function y$(e, t) {
  var r;
  const o = (r = t == null ? void 0 : t.useReferences) != null ? r : !1, n = sa(e, {
    target: "draft-7",
    io: "output",
    reused: o ? "ref" : "inline"
  });
  return co(n, {
    validate: async (i) => {
      const a = await pa(e, i);
      return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
    }
  });
}
function _$(e) {
  return "_zod" in e;
}
function b$(e, t) {
  return _$(e) ? y$(e, t) : v$(e, t);
}
var Wo = Symbol.for("vercel.ai.schema");
function co(e, {
  validate: t
} = {}) {
  return {
    [Wo]: !0,
    _type: void 0,
    // should never be used directly
    [Ur]: !0,
    jsonSchema: e,
    validate: t
  };
}
function w$(e) {
  return typeof e == "object" && e !== null && Wo in e && e[Wo] === !0 && "jsonSchema" in e && "validate" in e;
}
function _n(e) {
  return e == null ? co({
    properties: {},
    additionalProperties: !1
  }) : w$(e) ? e : b$(e);
}
var { btoa: $$, atob: I$ } = globalThis;
function pr(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = I$(t);
  return Uint8Array.from(r, (o) => o.codePointAt(0));
}
function Dr(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return $$(t);
}
function yt(e) {
  return e instanceof Uint8Array ? Dr(e) : e;
}
function mr(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
function k$(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* Xm({
  execute: e,
  input: t,
  options: r
}) {
  const o = e(t, r);
  if (k$(o)) {
    let n;
    for await (const i of o)
      n = i, yield { type: "preliminary", output: i };
    yield { type: "final", output: n };
  } else
    yield { type: "final", output: await o };
}
var x$ = "2.0.22", S$ = f({
  type: k("error"),
  error: f({
    type: c(),
    message: c()
  })
}), Rs = Rt({
  errorSchema: S$,
  errorToMessage: (e) => e.error.message
}), As = f({
  /**
   * Citation configuration for this document.
   * When enabled, this document will generate citations in the response.
   */
  citations: f({
    /**
     * Enable citations for this document
     */
    enabled: V()
  }).optional(),
  /**
   * Custom title for the document.
   * If not provided, the filename will be used.
   */
  title: c().optional(),
  /**
   * Context about the document that will be passed to the model
   * but not used towards cited content.
   * Useful for storing document metadata as text or stringified JSON.
   */
  context: c().optional()
}), T$ = f({
  sendReasoning: V().optional(),
  thinking: f({
    type: Y([k("enabled"), k("disabled")]),
    budgetTokens: S().optional()
  }).optional(),
  /**
   * Whether to disable parallel function calling during tool use. Default is false.
   * When set to true, Claude will use at most one tool per response.
   */
  disableParallelToolUse: V().optional(),
  /**
   * Cache control settings for this message.
   * See https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
   */
  cacheControl: f({
    type: k("ephemeral"),
    ttl: Y([k("5m"), k("1h")]).optional()
  }).optional()
});
function zt(e) {
  var t;
  const r = e == null ? void 0 : e.anthropic;
  return (t = r == null ? void 0 : r.cacheControl) != null ? t : r == null ? void 0 : r.cache_control;
}
var E$ = f({
  maxCharacters: S().optional()
}), O$ = dt({
  id: "anthropic.text_editor_20250728",
  name: "str_replace_based_edit_tool",
  inputSchema: f({
    command: ne(["view", "create", "str_replace", "insert"]),
    path: c(),
    file_text: c().optional(),
    insert_line: S().int().optional(),
    new_str: c().optional(),
    old_str: c().optional(),
    view_range: A(S().int()).optional()
  })
}), N$ = (e = {}) => O$(e), C$ = f({
  maxUses: S().optional(),
  allowedDomains: A(c()).optional(),
  blockedDomains: A(c()).optional(),
  userLocation: f({
    type: k("approximate"),
    city: c().optional(),
    region: c().optional(),
    country: c().optional(),
    timezone: c().optional()
  }).optional()
}), Qm = A(
  f({
    url: c(),
    title: c(),
    pageAge: c().nullable(),
    encryptedContent: c(),
    type: k("web_search_result")
  })
), R$ = Ft({
  id: "anthropic.web_search_20250305",
  name: "web_search",
  inputSchema: f({
    query: c()
  }),
  outputSchema: Qm
}), A$ = (e = {}) => R$(e), j$ = f({
  maxUses: S().optional(),
  allowedDomains: A(c()).optional(),
  blockedDomains: A(c()).optional(),
  citations: f({ enabled: V() }).optional(),
  maxContentTokens: S().optional()
}), ef = f({
  type: k("web_fetch_result"),
  url: c(),
  content: f({
    type: k("document"),
    title: c(),
    citations: f({ enabled: V() }).optional(),
    source: Y([
      f({
        type: k("base64"),
        mediaType: k("application/pdf"),
        data: c()
      }),
      f({
        type: k("text"),
        mediaType: k("text/plain"),
        data: c()
      })
    ])
  }),
  retrievedAt: c().nullable()
}), M$ = Ft({
  id: "anthropic.web_fetch_20250910",
  name: "web_fetch",
  inputSchema: f({
    url: c()
  }),
  outputSchema: ef
}), P$ = (e = {}) => M$(e);
function z$({
  tools: e,
  toolChoice: t,
  disableParallelToolUse: r
}) {
  e = e != null && e.length ? e : void 0;
  const o = [], n = /* @__PURE__ */ new Set();
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: o, betas: n };
  const i = [];
  for (const s of e)
    switch (s.type) {
      case "function": {
        const u = zt(s.providerOptions);
        i.push({
          name: s.name,
          description: s.description,
          input_schema: s.inputSchema,
          cache_control: u
        });
        break;
      }
      case "provider-defined": {
        switch (s.id) {
          case "anthropic.code_execution_20250522": {
            n.add("code-execution-2025-05-22"), i.push({
              type: "code_execution_20250522",
              name: "code_execution"
            });
            break;
          }
          case "anthropic.computer_20250124": {
            n.add("computer-use-2025-01-24"), i.push({
              name: "computer",
              type: "computer_20250124",
              display_width_px: s.args.displayWidthPx,
              display_height_px: s.args.displayHeightPx,
              display_number: s.args.displayNumber
            });
            break;
          }
          case "anthropic.computer_20241022": {
            n.add("computer-use-2024-10-22"), i.push({
              name: "computer",
              type: "computer_20241022",
              display_width_px: s.args.displayWidthPx,
              display_height_px: s.args.displayHeightPx,
              display_number: s.args.displayNumber
            });
            break;
          }
          case "anthropic.text_editor_20250124": {
            n.add("computer-use-2025-01-24"), i.push({
              name: "str_replace_editor",
              type: "text_editor_20250124"
            });
            break;
          }
          case "anthropic.text_editor_20241022": {
            n.add("computer-use-2024-10-22"), i.push({
              name: "str_replace_editor",
              type: "text_editor_20241022"
            });
            break;
          }
          case "anthropic.text_editor_20250429": {
            n.add("computer-use-2025-01-24"), i.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250429"
            });
            break;
          }
          case "anthropic.text_editor_20250728": {
            const u = E$.parse(s.args);
            i.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250728",
              max_characters: u.maxCharacters
            });
            break;
          }
          case "anthropic.bash_20250124": {
            n.add("computer-use-2025-01-24"), i.push({
              name: "bash",
              type: "bash_20250124"
            });
            break;
          }
          case "anthropic.bash_20241022": {
            n.add("computer-use-2024-10-22"), i.push({
              name: "bash",
              type: "bash_20241022"
            });
            break;
          }
          case "anthropic.web_fetch_20250910": {
            n.add("web-fetch-2025-09-10");
            const u = j$.parse(s.args);
            i.push({
              type: "web_fetch_20250910",
              name: "web_fetch",
              max_uses: u.maxUses,
              allowed_domains: u.allowedDomains,
              blocked_domains: u.blockedDomains,
              citations: u.citations,
              max_content_tokens: u.maxContentTokens
            });
            break;
          }
          case "anthropic.web_search_20250305": {
            const u = C$.parse(s.args);
            i.push({
              type: "web_search_20250305",
              name: "web_search",
              max_uses: u.maxUses,
              allowed_domains: u.allowedDomains,
              blocked_domains: u.blockedDomains,
              user_location: u.userLocation
            });
            break;
          }
          default: {
            o.push({ type: "unsupported-tool", tool: s });
            break;
          }
        }
        break;
      }
      default: {
        o.push({ type: "unsupported-tool", tool: s });
        break;
      }
    }
  if (t == null)
    return {
      tools: i,
      toolChoice: r ? { type: "auto", disable_parallel_tool_use: r } : void 0,
      toolWarnings: o,
      betas: n
    };
  const a = t.type;
  switch (a) {
    case "auto":
      return {
        tools: i,
        toolChoice: {
          type: "auto",
          disable_parallel_tool_use: r
        },
        toolWarnings: o,
        betas: n
      };
    case "required":
      return {
        tools: i,
        toolChoice: {
          type: "any",
          disable_parallel_tool_use: r
        },
        toolWarnings: o,
        betas: n
      };
    case "none":
      return { tools: void 0, toolChoice: void 0, toolWarnings: o, betas: n };
    case "tool":
      return {
        tools: i,
        toolChoice: {
          type: "tool",
          name: t.toolName,
          disable_parallel_tool_use: r
        },
        toolWarnings: o,
        betas: n
      };
    default: {
      const s = a;
      throw new $e({
        functionality: `tool choice type: ${s}`
      });
    }
  }
}
var tf = f({
  type: k("code_execution_result"),
  stdout: c(),
  stderr: c(),
  return_code: S()
}), U$ = Ft({
  id: "anthropic.code_execution_20250522",
  name: "code_execution",
  inputSchema: f({
    code: c()
  }),
  outputSchema: tf
}), D$ = (e = {}) => U$(e);
function Z$(e) {
  if (typeof e == "string")
    return Buffer.from(e, "base64").toString("utf-8");
  if (e instanceof Uint8Array)
    return new TextDecoder().decode(e);
  throw e instanceof URL ? new $e({
    functionality: "URL-based text documents are not supported for citations"
  }) : new $e({
    functionality: `unsupported data type for text documents: ${typeof e}`
  });
}
async function q$({
  prompt: e,
  sendReasoning: t,
  warnings: r
}) {
  var o, n, i, a, s;
  const u = /* @__PURE__ */ new Set(), l = L$(e);
  let d;
  const h = [];
  async function y(g) {
    var _, v;
    const m = await Ge({
      provider: "anthropic",
      providerOptions: g,
      schema: As
    });
    return (v = (_ = m == null ? void 0 : m.citations) == null ? void 0 : _.enabled) != null ? v : !1;
  }
  async function p(g) {
    const _ = await Ge({
      provider: "anthropic",
      providerOptions: g,
      schema: As
    });
    return {
      title: _ == null ? void 0 : _.title,
      context: _ == null ? void 0 : _.context
    };
  }
  for (let g = 0; g < l.length; g++) {
    const _ = l[g], v = g === l.length - 1, m = _.type;
    switch (m) {
      case "system": {
        if (d != null)
          throw new $e({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        d = _.messages.map(({ content: b, providerOptions: $ }) => ({
          type: "text",
          text: b,
          cache_control: zt($)
        }));
        break;
      }
      case "user": {
        const b = [];
        for (const $ of _.messages) {
          const { role: w, content: N } = $;
          switch (w) {
            case "user": {
              for (let O = 0; O < N.length; O++) {
                const I = N[O], C = O === N.length - 1, R = (o = zt(I.providerOptions)) != null ? o : C ? zt($.providerOptions) : void 0;
                switch (I.type) {
                  case "text": {
                    b.push({
                      type: "text",
                      text: I.text,
                      cache_control: R
                    });
                    break;
                  }
                  case "file": {
                    if (I.mediaType.startsWith("image/"))
                      b.push({
                        type: "image",
                        source: I.data instanceof URL ? {
                          type: "url",
                          url: I.data.toString()
                        } : {
                          type: "base64",
                          media_type: I.mediaType === "image/*" ? "image/jpeg" : I.mediaType,
                          data: yt(I.data)
                        },
                        cache_control: R
                      });
                    else if (I.mediaType === "application/pdf") {
                      u.add("pdfs-2024-09-25");
                      const M = await y(
                        I.providerOptions
                      ), E = await p(
                        I.providerOptions
                      );
                      b.push({
                        type: "document",
                        source: I.data instanceof URL ? {
                          type: "url",
                          url: I.data.toString()
                        } : {
                          type: "base64",
                          media_type: "application/pdf",
                          data: yt(I.data)
                        },
                        title: (n = E.title) != null ? n : I.filename,
                        ...E.context && { context: E.context },
                        ...M && {
                          citations: { enabled: !0 }
                        },
                        cache_control: R
                      });
                    } else if (I.mediaType === "text/plain") {
                      const M = await y(
                        I.providerOptions
                      ), E = await p(
                        I.providerOptions
                      );
                      b.push({
                        type: "document",
                        source: I.data instanceof URL ? {
                          type: "url",
                          url: I.data.toString()
                        } : {
                          type: "text",
                          media_type: "text/plain",
                          data: Z$(I.data)
                        },
                        title: (i = E.title) != null ? i : I.filename,
                        ...E.context && { context: E.context },
                        ...M && {
                          citations: { enabled: !0 }
                        },
                        cache_control: R
                      });
                    } else
                      throw new $e({
                        functionality: `media type: ${I.mediaType}`
                      });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let O = 0; O < N.length; O++) {
                const I = N[O], C = O === N.length - 1, R = (a = zt(I.providerOptions)) != null ? a : C ? zt($.providerOptions) : void 0, M = I.output;
                let E;
                switch (M.type) {
                  case "content":
                    E = M.value.map((z) => {
                      switch (z.type) {
                        case "text":
                          return {
                            type: "text",
                            text: z.text,
                            cache_control: void 0
                          };
                        case "media": {
                          if (z.mediaType.startsWith("image/"))
                            return {
                              type: "image",
                              source: {
                                type: "base64",
                                media_type: z.mediaType,
                                data: z.data
                              },
                              cache_control: void 0
                            };
                          throw new $e({
                            functionality: `media type: ${z.mediaType}`
                          });
                        }
                      }
                    });
                    break;
                  case "text":
                  case "error-text":
                    E = M.value;
                    break;
                  case "json":
                  case "error-json":
                  default:
                    E = JSON.stringify(M.value);
                    break;
                }
                b.push({
                  type: "tool_result",
                  tool_use_id: I.toolCallId,
                  content: E,
                  is_error: M.type === "error-text" || M.type === "error-json" ? !0 : void 0,
                  cache_control: R
                });
              }
              break;
            }
            default: {
              const O = w;
              throw new Error(`Unsupported role: ${O}`);
            }
          }
        }
        h.push({ role: "user", content: b });
        break;
      }
      case "assistant": {
        const b = [];
        for (let $ = 0; $ < _.messages.length; $++) {
          const w = _.messages[$], N = $ === _.messages.length - 1, { content: O } = w;
          for (let I = 0; I < O.length; I++) {
            const C = O[I], R = I === O.length - 1, M = (s = zt(C.providerOptions)) != null ? s : R ? zt(w.providerOptions) : void 0;
            switch (C.type) {
              case "text": {
                b.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    v && N && R ? C.text.trim() : C.text
                  ),
                  cache_control: M
                });
                break;
              }
              case "reasoning": {
                if (t) {
                  const E = await Ge({
                    provider: "anthropic",
                    providerOptions: C.providerOptions,
                    schema: B$
                  });
                  E != null ? E.signature != null ? b.push({
                    type: "thinking",
                    thinking: C.text,
                    signature: E.signature,
                    cache_control: M
                  }) : E.redactedData != null ? b.push({
                    type: "redacted_thinking",
                    data: E.redactedData,
                    cache_control: M
                  }) : r.push({
                    type: "other",
                    message: "unsupported reasoning metadata"
                  }) : r.push({
                    type: "other",
                    message: "unsupported reasoning metadata"
                  });
                } else
                  r.push({
                    type: "other",
                    message: "sending reasoning content is disabled for this model"
                  });
                break;
              }
              case "tool-call": {
                if (C.providerExecuted) {
                  C.toolName === "code_execution" || C.toolName === "web_fetch" || C.toolName === "web_search" ? b.push({
                    type: "server_tool_use",
                    id: C.toolCallId,
                    name: C.toolName,
                    input: C.input,
                    cache_control: M
                  }) : r.push({
                    type: "other",
                    message: `provider executed tool call for tool ${C.toolName} is not supported`
                  });
                  break;
                }
                b.push({
                  type: "tool_use",
                  id: C.toolCallId,
                  name: C.toolName,
                  input: C.input,
                  cache_control: M
                });
                break;
              }
              case "tool-result": {
                if (C.toolName === "code_execution") {
                  const E = C.output;
                  if (E.type !== "json") {
                    r.push({
                      type: "other",
                      message: `provider executed tool result output type ${E.type} for tool ${C.toolName} is not supported`
                    });
                    break;
                  }
                  const z = tf.parse(E.value);
                  b.push({
                    type: "code_execution_tool_result",
                    tool_use_id: C.toolCallId,
                    content: {
                      type: z.type,
                      stdout: z.stdout,
                      stderr: z.stderr,
                      return_code: z.return_code
                    },
                    cache_control: M
                  });
                  break;
                }
                if (C.toolName === "web_fetch") {
                  const E = C.output;
                  if (E.type !== "json") {
                    r.push({
                      type: "other",
                      message: `provider executed tool result output type ${E.type} for tool ${C.toolName} is not supported`
                    });
                    break;
                  }
                  const z = ef.parse(
                    E.value
                  );
                  b.push({
                    type: "web_fetch_tool_result",
                    tool_use_id: C.toolCallId,
                    content: {
                      type: "web_fetch_result",
                      url: z.url,
                      retrieved_at: z.retrievedAt,
                      content: {
                        type: "document",
                        title: z.content.title,
                        citations: z.content.citations,
                        source: {
                          type: z.content.source.type,
                          media_type: z.content.source.mediaType,
                          data: z.content.source.data
                        }
                      }
                    },
                    cache_control: M
                  });
                  break;
                }
                if (C.toolName === "web_search") {
                  const E = C.output;
                  if (E.type !== "json") {
                    r.push({
                      type: "other",
                      message: `provider executed tool result output type ${E.type} for tool ${C.toolName} is not supported`
                    });
                    break;
                  }
                  const z = Qm.parse(
                    E.value
                  );
                  b.push({
                    type: "web_search_tool_result",
                    tool_use_id: C.toolCallId,
                    content: z.map((B) => ({
                      url: B.url,
                      title: B.title,
                      page_age: B.pageAge,
                      encrypted_content: B.encryptedContent,
                      type: B.type
                    })),
                    cache_control: M
                  });
                  break;
                }
                r.push({
                  type: "other",
                  message: `provider executed tool result for tool ${C.toolName} is not supported`
                });
                break;
              }
            }
          }
        }
        h.push({ role: "assistant", content: b });
        break;
      }
      default: {
        const b = m;
        throw new Error(`content type: ${b}`);
      }
    }
  }
  return {
    prompt: { system: d, messages: h },
    betas: u
  };
}
function L$(e) {
  const t = [];
  let r;
  for (const o of e) {
    const { role: n } = o;
    switch (n) {
      case "system": {
        (r == null ? void 0 : r.type) !== "system" && (r = { type: "system", messages: [] }, t.push(r)), r.messages.push(o);
        break;
      }
      case "assistant": {
        (r == null ? void 0 : r.type) !== "assistant" && (r = { type: "assistant", messages: [] }, t.push(r)), r.messages.push(o);
        break;
      }
      case "user": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push(o);
        break;
      }
      case "tool": {
        (r == null ? void 0 : r.type) !== "user" && (r = { type: "user", messages: [] }, t.push(r)), r.messages.push(o);
        break;
      }
      default: {
        const i = n;
        throw new Error(`Unsupported role: ${i}`);
      }
    }
  }
  return t;
}
function js({
  finishReason: e,
  isJsonResponseFromTool: t
}) {
  switch (e) {
    case "pause_turn":
    case "end_turn":
    case "stop_sequence":
      return "stop";
    case "refusal":
      return "content-filter";
    case "tool_use":
      return t ? "stop" : "tool-calls";
    case "max_tokens":
      return "length";
    default:
      return "unknown";
  }
}
var Un = {
  webSearchResult: f({
    type: k("web_search_result_location"),
    cited_text: c(),
    url: c(),
    title: c(),
    encrypted_index: c()
  }),
  pageLocation: f({
    type: k("page_location"),
    cited_text: c(),
    document_index: S(),
    document_title: c().nullable(),
    start_page_number: S(),
    end_page_number: S()
  }),
  charLocation: f({
    type: k("char_location"),
    cited_text: c(),
    document_index: S(),
    document_title: c().nullable(),
    start_char_index: S(),
    end_char_index: S()
  })
}, nf = Ae("type", [
  Un.webSearchResult,
  Un.pageLocation,
  Un.charLocation
]);
Ae("type", [
  Un.pageLocation,
  Un.charLocation
]);
function Ms(e, t, r, o) {
  if (e.type === "page_location" || e.type === "char_location") {
    const n = F$(
      e,
      t,
      r
    );
    n && o(n);
  }
}
function F$(e, t, r) {
  var o;
  const n = t[e.document_index];
  if (!n)
    return null;
  const i = e.type === "page_location" ? {
    citedText: e.cited_text,
    startPageNumber: e.start_page_number,
    endPageNumber: e.end_page_number
  } : {
    citedText: e.cited_text,
    startCharIndex: e.start_char_index,
    endCharIndex: e.end_char_index
  };
  return {
    type: "source",
    sourceType: "document",
    id: r(),
    mediaType: n.mediaType,
    title: (o = e.document_title) != null ? o : n.title,
    filename: n.filename,
    providerMetadata: {
      anthropic: i
    }
  };
}
var J$ = class {
  constructor(e, t) {
    this.specificationVersion = "v2";
    var r;
    this.modelId = e, this.config = t, this.generateId = (r = t.generateId) != null ? r : Fe;
  }
  supportsUrl(e) {
    return e.protocol === "https:";
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var e, t, r;
    return (r = (t = (e = this.config).supportedUrls) == null ? void 0 : t.call(e)) != null ? r : {};
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t = 4096,
    // 4096: max model output tokens TODO update default in v5
    temperature: r,
    topP: o,
    topK: n,
    frequencyPenalty: i,
    presencePenalty: a,
    stopSequences: s,
    responseFormat: u,
    seed: l,
    tools: d,
    toolChoice: h,
    providerOptions: y
  }) {
    var p, g, _;
    const v = [];
    i != null && v.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), a != null && v.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), l != null && v.push({
      type: "unsupported-setting",
      setting: "seed"
    }), (u == null ? void 0 : u.type) === "json" && (u.schema == null ? v.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format requires a schema. The response format is ignored."
    }) : d != null && v.push({
      type: "unsupported-setting",
      setting: "tools",
      details: "JSON response format does not support tools. The provided tools are ignored."
    }));
    const m = (u == null ? void 0 : u.type) === "json" && u.schema != null ? {
      type: "function",
      name: "json",
      description: "Respond with a JSON object.",
      inputSchema: u.schema
    } : void 0, b = await Ge({
      provider: "anthropic",
      providerOptions: y,
      schema: T$
    }), { prompt: $, betas: w } = await q$({
      prompt: e,
      sendReasoning: (p = b == null ? void 0 : b.sendReasoning) != null ? p : !0,
      warnings: v
    }), N = ((g = b == null ? void 0 : b.thinking) == null ? void 0 : g.type) === "enabled", O = (_ = b == null ? void 0 : b.thinking) == null ? void 0 : _.budgetTokens, I = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: t,
      temperature: r,
      top_k: n,
      top_p: o,
      stop_sequences: s,
      // provider specific settings:
      ...N && {
        thinking: { type: "enabled", budget_tokens: O }
      },
      // prompt:
      system: $.system,
      messages: $.messages
    };
    if (N) {
      if (O == null)
        throw new $e({
          functionality: "thinking requires a budget"
        });
      I.temperature != null && (I.temperature = void 0, v.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), n != null && (I.top_k = void 0, v.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), o != null && (I.top_p = void 0, v.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), I.max_tokens = t + O;
    }
    const {
      tools: C,
      toolChoice: R,
      toolWarnings: M,
      betas: E
    } = z$(
      m != null ? {
        tools: [m],
        toolChoice: { type: "tool", toolName: m.name },
        disableParallelToolUse: !0
      } : {
        tools: d ?? [],
        toolChoice: h,
        disableParallelToolUse: b == null ? void 0 : b.disableParallelToolUse
      }
    );
    return {
      args: {
        ...I,
        tools: C,
        tool_choice: R
      },
      warnings: [...v, ...M],
      betas: /* @__PURE__ */ new Set([...w, ...E]),
      usesJsonResponseTool: m != null
    };
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Ne(
      await Ue(this.config.headers),
      e.size > 0 ? { "anthropic-beta": Array.from(e).join(",") } : {},
      t
    );
  }
  buildRequestUrl(e) {
    var t, r, o;
    return (o = (r = (t = this.config).buildRequestUrl) == null ? void 0 : r.call(t, this.config.baseURL, e)) != null ? o : `${this.config.baseURL}/messages`;
  }
  transformRequestBody(e) {
    var t, r, o;
    return (o = (r = (t = this.config).transformRequestBody) == null ? void 0 : r.call(t, e)) != null ? o : e;
  }
  extractCitationDocuments(e) {
    const t = (r) => {
      var o, n;
      if (r.type !== "file" || r.mediaType !== "application/pdf" && r.mediaType !== "text/plain")
        return !1;
      const i = (o = r.providerOptions) == null ? void 0 : o.anthropic, a = i == null ? void 0 : i.citations;
      return (n = a == null ? void 0 : a.enabled) != null ? n : !1;
    };
    return e.filter((r) => r.role === "user").flatMap((r) => r.content).filter(t).map((r) => {
      var o;
      const n = r;
      return {
        title: (o = n.filename) != null ? o : "Untitled Document",
        filename: n.filename,
        mediaType: n.mediaType
      };
    });
  }
  async doGenerate(e) {
    var t, r, o, n, i;
    const { args: a, warnings: s, betas: u, usesJsonResponseTool: l } = await this.getArgs(e), d = this.extractCitationDocuments(e.prompt), {
      responseHeaders: h,
      value: y,
      rawValue: p
    } = await Se({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: u, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: Rs,
      successfulResponseHandler: Je(
        V$
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), g = [];
    for (const _ of y.content)
      switch (_.type) {
        case "text": {
          if (!l && (g.push({ type: "text", text: _.text }), _.citations))
            for (const v of _.citations)
              Ms(
                v,
                d,
                this.generateId,
                (m) => g.push(m)
              );
          break;
        }
        case "thinking": {
          g.push({
            type: "reasoning",
            text: _.thinking,
            providerMetadata: {
              anthropic: {
                signature: _.signature
              }
            }
          });
          break;
        }
        case "redacted_thinking": {
          g.push({
            type: "reasoning",
            text: "",
            providerMetadata: {
              anthropic: {
                redactedData: _.data
              }
            }
          });
          break;
        }
        case "tool_use": {
          g.push(
            // when a json response tool is used, the tool call becomes the text:
            l ? {
              type: "text",
              text: JSON.stringify(_.input)
            } : {
              type: "tool-call",
              toolCallId: _.id,
              toolName: _.name,
              input: JSON.stringify(_.input)
            }
          );
          break;
        }
        case "server_tool_use": {
          (_.name === "web_search" || _.name === "code_execution" || _.name === "web_fetch") && g.push({
            type: "tool-call",
            toolCallId: _.id,
            toolName: _.name,
            input: JSON.stringify(_.input),
            providerExecuted: !0
          });
          break;
        }
        case "web_fetch_tool_result": {
          _.content.type === "web_fetch_result" ? g.push({
            type: "tool-result",
            toolCallId: _.tool_use_id,
            toolName: "web_fetch",
            result: {
              type: "web_fetch_result",
              url: _.content.url,
              retrievedAt: _.content.retrieved_at,
              content: {
                type: _.content.content.type,
                title: _.content.content.title,
                citations: _.content.content.citations,
                source: {
                  type: _.content.content.source.type,
                  mediaType: _.content.content.source.media_type,
                  data: _.content.content.source.data
                }
              }
            },
            providerExecuted: !0
          }) : _.content.type === "web_fetch_tool_result_error" && g.push({
            type: "tool-result",
            toolCallId: _.tool_use_id,
            toolName: "web_fetch",
            isError: !0,
            result: {
              type: "web_fetch_tool_result_error",
              errorCode: _.content.error_code
            },
            providerExecuted: !0
          });
          break;
        }
        case "web_search_tool_result": {
          if (Array.isArray(_.content)) {
            g.push({
              type: "tool-result",
              toolCallId: _.tool_use_id,
              toolName: "web_search",
              result: _.content.map((v) => {
                var m;
                return {
                  url: v.url,
                  title: v.title,
                  pageAge: (m = v.page_age) != null ? m : null,
                  encryptedContent: v.encrypted_content,
                  type: v.type
                };
              }),
              providerExecuted: !0
            });
            for (const v of _.content)
              g.push({
                type: "source",
                sourceType: "url",
                id: this.generateId(),
                url: v.url,
                title: v.title,
                providerMetadata: {
                  anthropic: {
                    pageAge: (t = v.page_age) != null ? t : null
                  }
                }
              });
          } else
            g.push({
              type: "tool-result",
              toolCallId: _.tool_use_id,
              toolName: "web_search",
              isError: !0,
              result: {
                type: "web_search_tool_result_error",
                errorCode: _.content.error_code
              },
              providerExecuted: !0
            });
          break;
        }
        case "code_execution_tool_result": {
          _.content.type === "code_execution_result" ? g.push({
            type: "tool-result",
            toolCallId: _.tool_use_id,
            toolName: "code_execution",
            result: {
              type: _.content.type,
              stdout: _.content.stdout,
              stderr: _.content.stderr,
              return_code: _.content.return_code
            },
            providerExecuted: !0
          }) : _.content.type === "code_execution_tool_result_error" && g.push({
            type: "tool-result",
            toolCallId: _.tool_use_id,
            toolName: "code_execution",
            isError: !0,
            result: {
              type: "code_execution_tool_result_error",
              errorCode: _.content.error_code
            },
            providerExecuted: !0
          });
          break;
        }
      }
    return {
      content: g,
      finishReason: js({
        finishReason: y.stop_reason,
        isJsonResponseFromTool: l
      }),
      usage: {
        inputTokens: y.usage.input_tokens,
        outputTokens: y.usage.output_tokens,
        totalTokens: y.usage.input_tokens + y.usage.output_tokens,
        cachedInputTokens: (r = y.usage.cache_read_input_tokens) != null ? r : void 0
      },
      request: { body: a },
      response: {
        id: (o = y.id) != null ? o : void 0,
        modelId: (n = y.model) != null ? n : void 0,
        headers: h,
        body: p
      },
      warnings: s,
      providerMetadata: {
        anthropic: {
          usage: y.usage,
          cacheCreationInputTokens: (i = y.usage.cache_creation_input_tokens) != null ? i : null
        }
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: r, betas: o, usesJsonResponseTool: n } = await this.getArgs(e), i = this.extractCitationDocuments(e.prompt), a = { ...t, stream: !0 }, { responseHeaders: s, value: u } = await Se({
      url: this.buildRequestUrl(!0),
      headers: await this.getHeaders({ betas: o, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: Rs,
      successfulResponseHandler: sn(
        G$
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let l = "unknown";
    const d = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, h = {};
    let y, p = null, g;
    const _ = this.generateId;
    return {
      stream: u.pipeThrough(
        new TransformStream({
          start(v) {
            v.enqueue({ type: "stream-start", warnings: r });
          },
          transform(v, m) {
            var b, $, w, N, O, I, C;
            if (e.includeRawChunks && m.enqueue({ type: "raw", rawValue: v.rawValue }), !v.success) {
              m.enqueue({ type: "error", error: v.error });
              return;
            }
            const R = v.value;
            switch (R.type) {
              case "ping":
                return;
              case "content_block_start": {
                const M = R.content_block.type;
                switch (g = M, M) {
                  case "text": {
                    h[R.index] = { type: "text" }, m.enqueue({
                      type: "text-start",
                      id: String(R.index)
                    });
                    return;
                  }
                  case "thinking": {
                    h[R.index] = { type: "reasoning" }, m.enqueue({
                      type: "reasoning-start",
                      id: String(R.index)
                    });
                    return;
                  }
                  case "redacted_thinking": {
                    h[R.index] = { type: "reasoning" }, m.enqueue({
                      type: "reasoning-start",
                      id: String(R.index),
                      providerMetadata: {
                        anthropic: {
                          redactedData: R.content_block.data
                        }
                      }
                    });
                    return;
                  }
                  case "tool_use": {
                    h[R.index] = n ? { type: "text" } : {
                      type: "tool-call",
                      toolCallId: R.content_block.id,
                      toolName: R.content_block.name,
                      input: ""
                    }, m.enqueue(
                      n ? { type: "text-start", id: String(R.index) } : {
                        type: "tool-input-start",
                        id: R.content_block.id,
                        toolName: R.content_block.name
                      }
                    );
                    return;
                  }
                  case "server_tool_use": {
                    (R.content_block.name === "web_fetch" || R.content_block.name === "web_search" || R.content_block.name === "code_execution") && (h[R.index] = {
                      type: "tool-call",
                      toolCallId: R.content_block.id,
                      toolName: R.content_block.name,
                      input: "",
                      providerExecuted: !0
                    }, m.enqueue({
                      type: "tool-input-start",
                      id: R.content_block.id,
                      toolName: R.content_block.name,
                      providerExecuted: !0
                    }));
                    return;
                  }
                  case "web_fetch_tool_result": {
                    const E = R.content_block;
                    E.content.type === "web_fetch_result" ? m.enqueue({
                      type: "tool-result",
                      toolCallId: E.tool_use_id,
                      toolName: "web_fetch",
                      result: {
                        type: "web_fetch_result",
                        url: E.content.url,
                        retrievedAt: E.content.retrieved_at,
                        content: {
                          type: E.content.content.type,
                          title: E.content.content.title,
                          citations: E.content.content.citations,
                          source: {
                            type: E.content.content.source.type,
                            mediaType: E.content.content.source.media_type,
                            data: E.content.content.source.data
                          }
                        }
                      }
                    }) : E.content.type === "web_fetch_tool_result_error" && m.enqueue({
                      type: "tool-result",
                      toolCallId: E.tool_use_id,
                      toolName: "web_fetch",
                      isError: !0,
                      result: {
                        type: "web_fetch_tool_result_error",
                        errorCode: E.content.error_code
                      },
                      providerExecuted: !0
                    });
                    return;
                  }
                  case "web_search_tool_result": {
                    const E = R.content_block;
                    if (Array.isArray(E.content)) {
                      m.enqueue({
                        type: "tool-result",
                        toolCallId: E.tool_use_id,
                        toolName: "web_search",
                        result: E.content.map((z) => {
                          var B;
                          return {
                            url: z.url,
                            title: z.title,
                            pageAge: (B = z.page_age) != null ? B : null,
                            encryptedContent: z.encrypted_content,
                            type: z.type
                          };
                        }),
                        providerExecuted: !0
                      });
                      for (const z of E.content)
                        m.enqueue({
                          type: "source",
                          sourceType: "url",
                          id: _(),
                          url: z.url,
                          title: z.title,
                          providerMetadata: {
                            anthropic: {
                              pageAge: (b = z.page_age) != null ? b : null
                            }
                          }
                        });
                    } else
                      m.enqueue({
                        type: "tool-result",
                        toolCallId: E.tool_use_id,
                        toolName: "web_search",
                        isError: !0,
                        result: {
                          type: "web_search_tool_result_error",
                          errorCode: E.content.error_code
                        },
                        providerExecuted: !0
                      });
                    return;
                  }
                  case "code_execution_tool_result": {
                    const E = R.content_block;
                    E.content.type === "code_execution_result" ? m.enqueue({
                      type: "tool-result",
                      toolCallId: E.tool_use_id,
                      toolName: "code_execution",
                      result: {
                        type: E.content.type,
                        stdout: E.content.stdout,
                        stderr: E.content.stderr,
                        return_code: E.content.return_code
                      },
                      providerExecuted: !0
                    }) : E.content.type === "code_execution_tool_result_error" && m.enqueue({
                      type: "tool-result",
                      toolCallId: E.tool_use_id,
                      toolName: "code_execution",
                      isError: !0,
                      result: {
                        type: "code_execution_tool_result_error",
                        errorCode: E.content.error_code
                      },
                      providerExecuted: !0
                    });
                    return;
                  }
                  default: {
                    const E = M;
                    throw new Error(
                      `Unsupported content block type: ${E}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (h[R.index] != null) {
                  const M = h[R.index];
                  switch (M.type) {
                    case "text": {
                      m.enqueue({
                        type: "text-end",
                        id: String(R.index)
                      });
                      break;
                    }
                    case "reasoning": {
                      m.enqueue({
                        type: "reasoning-end",
                        id: String(R.index)
                      });
                      break;
                    }
                    case "tool-call":
                      n || (m.enqueue({
                        type: "tool-input-end",
                        id: M.toolCallId
                      }), m.enqueue(M));
                      break;
                  }
                  delete h[R.index];
                }
                g = void 0;
                return;
              }
              case "content_block_delta": {
                const M = R.delta.type;
                switch (M) {
                  case "text_delta": {
                    if (n)
                      return;
                    m.enqueue({
                      type: "text-delta",
                      id: String(R.index),
                      delta: R.delta.text
                    });
                    return;
                  }
                  case "thinking_delta": {
                    m.enqueue({
                      type: "reasoning-delta",
                      id: String(R.index),
                      delta: R.delta.thinking
                    });
                    return;
                  }
                  case "signature_delta": {
                    g === "thinking" && m.enqueue({
                      type: "reasoning-delta",
                      id: String(R.index),
                      delta: "",
                      providerMetadata: {
                        anthropic: {
                          signature: R.delta.signature
                        }
                      }
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const E = h[R.index], z = R.delta.partial_json;
                    if (n) {
                      if ((E == null ? void 0 : E.type) !== "text")
                        return;
                      m.enqueue({
                        type: "text-delta",
                        id: String(R.index),
                        delta: z
                      });
                    } else {
                      if ((E == null ? void 0 : E.type) !== "tool-call")
                        return;
                      m.enqueue({
                        type: "tool-input-delta",
                        id: E.toolCallId,
                        delta: z
                      }), E.input += z;
                    }
                    return;
                  }
                  case "citations_delta": {
                    const E = R.delta.citation;
                    Ms(
                      E,
                      i,
                      _,
                      (z) => m.enqueue(z)
                    );
                    return;
                  }
                  default: {
                    const E = M;
                    throw new Error(
                      `Unsupported delta type: ${E}`
                    );
                  }
                }
              }
              case "message_start": {
                d.inputTokens = R.message.usage.input_tokens, d.cachedInputTokens = ($ = R.message.usage.cache_read_input_tokens) != null ? $ : void 0, y = {
                  ...R.message.usage
                }, p = (w = R.message.usage.cache_creation_input_tokens) != null ? w : null, m.enqueue({
                  type: "response-metadata",
                  id: (N = R.message.id) != null ? N : void 0,
                  modelId: (O = R.message.model) != null ? O : void 0
                });
                return;
              }
              case "message_delta": {
                d.outputTokens = R.usage.output_tokens, d.totalTokens = ((I = d.inputTokens) != null ? I : 0) + ((C = R.usage.output_tokens) != null ? C : 0), l = js({
                  finishReason: R.delta.stop_reason,
                  isJsonResponseFromTool: n
                }), y = {
                  ...y,
                  ...R.usage
                };
                return;
              }
              case "message_stop": {
                m.enqueue({
                  type: "finish",
                  finishReason: l,
                  usage: d,
                  providerMetadata: {
                    anthropic: {
                      usage: y ?? null,
                      cacheCreationInputTokens: p
                    }
                  }
                });
                return;
              }
              case "error": {
                m.enqueue({ type: "error", error: R.error });
                return;
              }
              default: {
                const M = R;
                throw new Error(`Unsupported chunk type: ${M}`);
              }
            }
          }
        })
      ),
      request: { body: a },
      response: { headers: s }
    };
  }
}, V$ = f({
  type: k("message"),
  id: c().nullish(),
  model: c().nullish(),
  content: A(
    Ae("type", [
      f({
        type: k("text"),
        text: c(),
        citations: A(nf).optional()
      }),
      f({
        type: k("thinking"),
        thinking: c(),
        signature: c()
      }),
      f({
        type: k("redacted_thinking"),
        data: c()
      }),
      f({
        type: k("tool_use"),
        id: c(),
        name: c(),
        input: ue()
      }),
      f({
        type: k("server_tool_use"),
        id: c(),
        name: c(),
        input: je(c(), ue()).nullish()
      }),
      f({
        type: k("web_fetch_tool_result"),
        tool_use_id: c(),
        content: Y([
          f({
            type: k("web_fetch_result"),
            url: c(),
            retrieved_at: c(),
            content: f({
              type: k("document"),
              title: c().nullable(),
              citations: f({ enabled: V() }).optional(),
              source: f({
                type: k("text"),
                media_type: c(),
                data: c()
              })
            })
          }),
          f({
            type: k("web_fetch_tool_result_error"),
            error_code: c()
          })
        ])
      }),
      f({
        type: k("web_search_tool_result"),
        tool_use_id: c(),
        content: Y([
          A(
            f({
              type: k("web_search_result"),
              url: c(),
              title: c(),
              encrypted_content: c(),
              page_age: c().nullish()
            })
          ),
          f({
            type: k("web_search_tool_result_error"),
            error_code: c()
          })
        ])
      }),
      f({
        type: k("code_execution_tool_result"),
        tool_use_id: c(),
        content: Y([
          f({
            type: k("code_execution_result"),
            stdout: c(),
            stderr: c(),
            return_code: S()
          }),
          f({
            type: k("code_execution_tool_result_error"),
            error_code: c()
          })
        ])
      })
    ])
  ),
  stop_reason: c().nullish(),
  usage: kt({
    input_tokens: S(),
    output_tokens: S(),
    cache_creation_input_tokens: S().nullish(),
    cache_read_input_tokens: S().nullish()
  })
}), G$ = Ae("type", [
  f({
    type: k("message_start"),
    message: f({
      id: c().nullish(),
      model: c().nullish(),
      usage: kt({
        input_tokens: S(),
        cache_creation_input_tokens: S().nullish(),
        cache_read_input_tokens: S().nullish()
      })
    })
  }),
  f({
    type: k("content_block_start"),
    index: S(),
    content_block: Ae("type", [
      f({
        type: k("text"),
        text: c()
      }),
      f({
        type: k("thinking"),
        thinking: c()
      }),
      f({
        type: k("tool_use"),
        id: c(),
        name: c()
      }),
      f({
        type: k("redacted_thinking"),
        data: c()
      }),
      f({
        type: k("server_tool_use"),
        id: c(),
        name: c(),
        input: je(c(), ue()).nullish()
      }),
      f({
        type: k("web_fetch_tool_result"),
        tool_use_id: c(),
        content: Y([
          f({
            type: k("web_fetch_result"),
            url: c(),
            retrieved_at: c(),
            content: f({
              type: k("document"),
              title: c().nullable(),
              citations: f({ enabled: V() }).optional(),
              source: f({
                type: k("text"),
                media_type: c(),
                data: c()
              })
            })
          }),
          f({
            type: k("web_fetch_tool_result_error"),
            error_code: c()
          })
        ])
      }),
      f({
        type: k("web_search_tool_result"),
        tool_use_id: c(),
        content: Y([
          A(
            f({
              type: k("web_search_result"),
              url: c(),
              title: c(),
              encrypted_content: c(),
              page_age: c().nullish()
            })
          ),
          f({
            type: k("web_search_tool_result_error"),
            error_code: c()
          })
        ])
      }),
      f({
        type: k("code_execution_tool_result"),
        tool_use_id: c(),
        content: Y([
          f({
            type: k("code_execution_result"),
            stdout: c(),
            stderr: c(),
            return_code: S()
          }),
          f({
            type: k("code_execution_tool_result_error"),
            error_code: c()
          })
        ])
      })
    ])
  }),
  f({
    type: k("content_block_delta"),
    index: S(),
    delta: Ae("type", [
      f({
        type: k("input_json_delta"),
        partial_json: c()
      }),
      f({
        type: k("text_delta"),
        text: c()
      }),
      f({
        type: k("thinking_delta"),
        thinking: c()
      }),
      f({
        type: k("signature_delta"),
        signature: c()
      }),
      f({
        type: k("citations_delta"),
        citation: nf
      })
    ])
  }),
  f({
    type: k("content_block_stop"),
    index: S()
  }),
  f({
    type: k("error"),
    error: f({
      type: c(),
      message: c()
    })
  }),
  f({
    type: k("message_delta"),
    delta: f({ stop_reason: c().nullish() }),
    usage: kt({
      output_tokens: S(),
      cache_creation_input_tokens: S().nullish()
    })
  }),
  f({
    type: k("message_stop")
  }),
  f({
    type: k("ping")
  })
]), B$ = f({
  signature: c().optional(),
  redactedData: c().optional()
}), W$ = dt({
  id: "anthropic.bash_20241022",
  name: "bash",
  inputSchema: fn.object({
    command: fn.string(),
    restart: fn.boolean().optional()
  })
}), H$ = dt({
  id: "anthropic.bash_20250124",
  name: "bash",
  inputSchema: fn.object({
    command: fn.string(),
    restart: fn.boolean().optional()
  })
}), K$ = dt({
  id: "anthropic.computer_20241022",
  name: "computer",
  inputSchema: f({
    action: ne([
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
    coordinate: A(S().int()).optional(),
    text: c().optional()
  })
}), Y$ = dt({
  id: "anthropic.computer_20250124",
  name: "computer",
  inputSchema: f({
    action: ne([
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
    coordinate: jr([S().int(), S().int()]).optional(),
    duration: S().optional(),
    scroll_amount: S().optional(),
    scroll_direction: ne(["up", "down", "left", "right"]).optional(),
    start_coordinate: jr([S().int(), S().int()]).optional(),
    text: c().optional()
  })
}), X$ = dt({
  id: "anthropic.text_editor_20241022",
  name: "str_replace_editor",
  inputSchema: f({
    command: ne(["view", "create", "str_replace", "insert", "undo_edit"]),
    path: c(),
    file_text: c().optional(),
    insert_line: S().int().optional(),
    new_str: c().optional(),
    old_str: c().optional(),
    view_range: A(S().int()).optional()
  })
}), Q$ = dt({
  id: "anthropic.text_editor_20250124",
  name: "str_replace_editor",
  inputSchema: f({
    command: ne(["view", "create", "str_replace", "insert", "undo_edit"]),
    path: c(),
    file_text: c().optional(),
    insert_line: S().int().optional(),
    new_str: c().optional(),
    old_str: c().optional(),
    view_range: A(S().int()).optional()
  })
}), eI = dt({
  id: "anthropic.text_editor_20250429",
  name: "str_replace_based_edit_tool",
  inputSchema: f({
    command: ne(["view", "create", "str_replace", "insert"]),
    path: c(),
    file_text: c().optional(),
    insert_line: S().int().optional(),
    new_str: c().optional(),
    old_str: c().optional(),
    view_range: A(S().int()).optional()
  })
}), tI = {
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   *
   * Tool name must be `bash`.
   */
  bash_20241022: W$,
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   *
   * Tool name must be `bash`.
   */
  bash_20250124: H$,
  /**
   * Claude can analyze data, create visualizations, perform complex calculations,
   * run system commands, create and edit files, and process uploaded files directly within
   * the API conversation.
   *
   * The code execution tool allows Claude to run Bash commands and manipulate files,
   * including writing code, in a secure, sandboxed environment.
   *
   * Tool name must be `code_execution`.
   */
  codeExecution_20250522: D$,
  /**
   * Claude can interact with computer environments through the computer use tool, which
   * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
   *
   * Image results are supported.
   *
   * Tool name must be `computer`.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   */
  computer_20241022: K$,
  /**
   * Claude can interact with computer environments through the computer use tool, which
   * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
   *
   * Image results are supported.
   *
   * Tool name must be `computer`.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   */
  computer_20250124: Y$,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.5
   *
   * Tool name must be `str_replace_editor`.
   */
  textEditor_20241022: X$,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.7
   *
   * Tool name must be `str_replace_editor`.
   */
  textEditor_20250124: Q$,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Note: This version does not support the "undo_edit" command.
   *
   * Tool name must be `str_replace_based_edit_tool`.
   *
   * @deprecated Use textEditor_20250728 instead
   */
  textEditor_20250429: eI,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Note: This version does not support the "undo_edit" command and adds optional max_characters parameter.
   *
   * Supported models: Claude Sonnet 4, Opus 4, and Opus 4.1
   *
   * Tool name must be `str_replace_based_edit_tool`.
   *
   * @param maxCharacters - Optional maximum number of characters to view in the file
   */
  textEditor_20250728: N$,
  /**
   * Creates a web fetch tool that gives Claude direct access to real-time web content.
   *
   * Tool name must be `web_fetch`.
   *
   * @param maxUses - The max_uses parameter limits the number of web fetches performed
   * @param allowedDomains - Only fetch from these domains
   * @param blockedDomains - Never fetch from these domains
   * @param citations - Unlike web search where citations are always enabled, citations are optional for web fetch. Set "citations": {"enabled": true} to enable Claude to cite specific passages from fetched documents.
   * @param maxContentTokens - The max_content_tokens parameter limits the amount of content that will be included in the context.
   */
  webFetch_20250910: P$,
  /**
   * Creates a web search tool that gives Claude direct access to real-time web content.
   *
   * Tool name must be `web_search`.
   *
   * @param maxUses - Maximum number of web searches Claude can perform during the conversation.
   * @param allowedDomains - Optional list of domains that Claude is allowed to search.
   * @param blockedDomains - Optional list of domains that Claude should avoid when searching.
   * @param userLocation - Optional user location information to provide geographically relevant search results.
   */
  webSearch_20250305: A$
};
function nI(e = {}) {
  var t;
  const r = (t = mr(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", o = () => Me(
    {
      "anthropic-version": "2023-06-01",
      "x-api-key": lo({
        apiKey: e.apiKey,
        environmentVariableName: "ANTHROPIC_API_KEY",
        description: "Anthropic"
      }),
      ...e.headers
    },
    `ai-sdk/anthropic/${x$}`
  ), n = (a) => {
    var s;
    return new J$(a, {
      provider: "anthropic.messages",
      baseURL: r,
      headers: o,
      fetch: e.fetch,
      generateId: (s = e.generateId) != null ? s : Fe,
      supportedUrls: () => ({
        "image/*": [/^https?:\/\/.*$/]
      })
    });
  }, i = function(a) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return n(a);
  };
  return i.languageModel = n, i.chat = n, i.messages = n, i.textEmbeddingModel = (a) => {
    throw new Ve({ modelId: a, modelType: "textEmbeddingModel" });
  }, i.imageModel = (a) => {
    throw new Ve({ modelId: a, modelType: "imageModel" });
  }, i.tools = tI, i;
}
nI();
var rI = "2.0.17", oI = f({
  error: f({
    code: S().nullable(),
    message: c(),
    status: c()
  })
}), Bn = Rt({
  errorSchema: oI,
  errorToMessage: (e) => e.error.message
}), iI = f({
  /**
   * Optional. Optional reduced dimension for the output embedding.
   * If set, excessive values in the output embedding are truncated from the end.
   */
  outputDimensionality: S().optional(),
  /**
   * Optional. Specifies the task type for generating embeddings.
   * Supported task types:
   * - SEMANTIC_SIMILARITY: Optimized for text similarity.
   * - CLASSIFICATION: Optimized for text classification.
   * - CLUSTERING: Optimized for clustering texts based on similarity.
   * - RETRIEVAL_DOCUMENT: Optimized for document retrieval.
   * - RETRIEVAL_QUERY: Optimized for query-based retrieval.
   * - QUESTION_ANSWERING: Optimized for answering questions.
   * - FACT_VERIFICATION: Optimized for verifying factual information.
   * - CODE_RETRIEVAL_QUERY: Optimized for retrieving code blocks based on natural language queries.
   */
  taskType: ne([
    "SEMANTIC_SIMILARITY",
    "CLASSIFICATION",
    "CLUSTERING",
    "RETRIEVAL_DOCUMENT",
    "RETRIEVAL_QUERY",
    "QUESTION_ANSWERING",
    "FACT_VERIFICATION",
    "CODE_RETRIEVAL_QUERY"
  ]).optional()
}), aI = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: r,
    providerOptions: o
  }) {
    const n = await Ge({
      provider: "google",
      providerOptions: o,
      schema: iI
    });
    if (e.length > this.maxEmbeddingsPerCall)
      throw new ti({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const i = Ne(
      await Ue(this.config.headers),
      t
    );
    if (e.length === 1) {
      const {
        responseHeaders: l,
        value: d,
        rawValue: h
      } = await Se({
        url: `${this.config.baseURL}/models/${this.modelId}:embedContent`,
        headers: i,
        body: {
          model: `models/${this.modelId}`,
          content: {
            parts: [{ text: e[0] }]
          },
          outputDimensionality: n == null ? void 0 : n.outputDimensionality,
          taskType: n == null ? void 0 : n.taskType
        },
        failedResponseHandler: Bn,
        successfulResponseHandler: Je(
          uI
        ),
        abortSignal: r,
        fetch: this.config.fetch
      });
      return {
        embeddings: [d.embedding.values],
        usage: void 0,
        response: { headers: l, body: h }
      };
    }
    const {
      responseHeaders: a,
      value: s,
      rawValue: u
    } = await Se({
      url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
      headers: i,
      body: {
        requests: e.map((l) => ({
          model: `models/${this.modelId}`,
          content: { role: "user", parts: [{ text: l }] },
          outputDimensionality: n == null ? void 0 : n.outputDimensionality,
          taskType: n == null ? void 0 : n.taskType
        }))
      },
      failedResponseHandler: Bn,
      successfulResponseHandler: Je(
        sI
      ),
      abortSignal: r,
      fetch: this.config.fetch
    });
    return {
      embeddings: s.embeddings.map((l) => l.values),
      usage: void 0,
      response: { headers: a, body: u }
    };
  }
}, sI = f({
  embeddings: A(f({ values: A(S()) }))
}), uI = f({
  embedding: f({ values: A(S()) })
});
function It(e) {
  if (e == null || lI(e))
    return;
  if (typeof e == "boolean")
    return { type: "boolean", properties: {} };
  const {
    type: t,
    description: r,
    required: o,
    properties: n,
    items: i,
    allOf: a,
    anyOf: s,
    oneOf: u,
    format: l,
    const: d,
    minLength: h,
    enum: y
  } = e, p = {};
  if (r && (p.description = r), o && (p.required = o), l && (p.format = l), d !== void 0 && (p.enum = [d]), t && (Array.isArray(t) ? t.includes("null") ? (p.type = t.filter((g) => g !== "null")[0], p.nullable = !0) : p.type = t : t === "null" ? p.type = "null" : p.type = t), y !== void 0 && (p.enum = y), n != null && (p.properties = Object.entries(n).reduce(
    (g, [_, v]) => (g[_] = It(v), g),
    {}
  )), i && (p.items = Array.isArray(i) ? i.map(It) : It(i)), a && (p.allOf = a.map(It)), s)
    if (s.some(
      (g) => typeof g == "object" && (g == null ? void 0 : g.type) === "null"
    )) {
      const g = s.filter(
        (_) => !(typeof _ == "object" && (_ == null ? void 0 : _.type) === "null")
      );
      if (g.length === 1) {
        const _ = It(g[0]);
        typeof _ == "object" && (p.nullable = !0, Object.assign(p, _));
      } else
        p.anyOf = g.map(It), p.nullable = !0;
    } else
      p.anyOf = s.map(It);
  return u && (p.oneOf = u.map(It)), h !== void 0 && (p.minLength = h), p;
}
function lI(e) {
  return e != null && typeof e == "object" && e.type === "object" && (e.properties == null || Object.keys(e.properties).length === 0) && !e.additionalProperties;
}
function cI(e, t) {
  var r;
  const o = [], n = [];
  let i = !0;
  const a = (r = t == null ? void 0 : t.isGemmaModel) != null ? r : !1;
  for (const { role: s, content: u } of e)
    switch (s) {
      case "system": {
        if (!i)
          throw new $e({
            functionality: "system messages are only supported at the beginning of the conversation"
          });
        o.push({ text: u });
        break;
      }
      case "user": {
        i = !1;
        const l = [];
        for (const d of u)
          switch (d.type) {
            case "text": {
              l.push({ text: d.text });
              break;
            }
            case "file": {
              const h = d.mediaType === "image/*" ? "image/jpeg" : d.mediaType;
              l.push(
                d.data instanceof URL ? {
                  fileData: {
                    mimeType: h,
                    fileUri: d.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: h,
                    data: yt(d.data)
                  }
                }
              );
              break;
            }
          }
        n.push({ role: "user", parts: l });
        break;
      }
      case "assistant": {
        i = !1, n.push({
          role: "model",
          parts: u.map((l) => {
            var d, h, y, p, g, _;
            switch (l.type) {
              case "text":
                return l.text.length === 0 ? void 0 : {
                  text: l.text,
                  thoughtSignature: (h = (d = l.providerOptions) == null ? void 0 : d.google) == null ? void 0 : h.thoughtSignature
                };
              case "reasoning":
                return l.text.length === 0 ? void 0 : {
                  text: l.text,
                  thought: !0,
                  thoughtSignature: (p = (y = l.providerOptions) == null ? void 0 : y.google) == null ? void 0 : p.thoughtSignature
                };
              case "file": {
                if (l.mediaType !== "image/png")
                  throw new $e({
                    functionality: "Only PNG images are supported in assistant messages"
                  });
                if (l.data instanceof URL)
                  throw new $e({
                    functionality: "File data URLs in assistant messages are not supported"
                  });
                return {
                  inlineData: {
                    mimeType: l.mediaType,
                    data: yt(l.data)
                  }
                };
              }
              case "tool-call":
                return {
                  functionCall: {
                    name: l.toolName,
                    args: l.input
                  },
                  thoughtSignature: (_ = (g = l.providerOptions) == null ? void 0 : g.google) == null ? void 0 : _.thoughtSignature
                };
            }
          }).filter((l) => l !== void 0)
        });
        break;
      }
      case "tool": {
        i = !1;
        const l = [];
        for (const d of u) {
          const h = d.output;
          if (h.type === "content")
            for (const y of h.value)
              switch (y.type) {
                case "text":
                  l.push({
                    functionResponse: {
                      name: d.toolName,
                      response: {
                        name: d.toolName,
                        content: y.text
                      }
                    }
                  });
                  break;
                case "media":
                  l.push(
                    {
                      inlineData: {
                        mimeType: y.mediaType,
                        data: y.data
                      }
                    },
                    {
                      text: "Tool executed successfully and returned this image as a response"
                    }
                  );
                  break;
                default:
                  l.push({ text: JSON.stringify(y) });
                  break;
              }
          else
            l.push({
              functionResponse: {
                name: d.toolName,
                response: {
                  name: d.toolName,
                  content: h.value
                }
              }
            });
        }
        n.push({
          role: "user",
          parts: l
        });
        break;
      }
    }
  if (a && o.length > 0 && n.length > 0 && n[0].role === "user") {
    const s = o.map((u) => u.text).join(`

`);
    n[0].parts.unshift({ text: s + `

` });
  }
  return {
    systemInstruction: o.length > 0 && !a ? { parts: o } : void 0,
    contents: n
  };
}
function Ps(e) {
  return e.includes("/") ? e : `models/${e}`;
}
var dI = f({
  responseModalities: A(ne(["TEXT", "IMAGE"])).optional(),
  thinkingConfig: f({
    thinkingBudget: S().optional(),
    includeThoughts: V().optional()
  }).optional(),
  /**
  Optional.
  The name of the cached content used as context to serve the prediction.
  Format: cachedContents/{cachedContent}
     */
  cachedContent: c().optional(),
  /**
   * Optional. Enable structured output. Default is true.
   *
   * This is useful when the JSON Schema contains elements that are
   * not supported by the OpenAPI schema version that
   * Google Generative AI uses. You can use this to disable
   * structured outputs if you need to.
   */
  structuredOutputs: V().optional(),
  /**
  Optional. A list of unique safety settings for blocking unsafe content.
   */
  safetySettings: A(
    f({
      category: ne([
        "HARM_CATEGORY_UNSPECIFIED",
        "HARM_CATEGORY_HATE_SPEECH",
        "HARM_CATEGORY_DANGEROUS_CONTENT",
        "HARM_CATEGORY_HARASSMENT",
        "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "HARM_CATEGORY_CIVIC_INTEGRITY"
      ]),
      threshold: ne([
        "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
        "BLOCK_LOW_AND_ABOVE",
        "BLOCK_MEDIUM_AND_ABOVE",
        "BLOCK_ONLY_HIGH",
        "BLOCK_NONE",
        "OFF"
      ])
    })
  ).optional(),
  threshold: ne([
    "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
    "BLOCK_LOW_AND_ABOVE",
    "BLOCK_MEDIUM_AND_ABOVE",
    "BLOCK_ONLY_HIGH",
    "BLOCK_NONE",
    "OFF"
  ]).optional(),
  /**
   * Optional. Enables timestamp understanding for audio-only files.
   *
   * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/audio-understanding
   */
  audioTimestamp: V().optional(),
  /**
   * Optional. Defines labels used in billing reports. Available on Vertex AI only.
   *
   * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls
   */
  labels: je(c(), c()).optional()
});
function pI({
  tools: e,
  toolChoice: t,
  modelId: r
}) {
  var o;
  e = e != null && e.length ? e : void 0;
  const n = [], i = r.includes("gemini-2"), a = r.includes("gemini-1.5-flash") && !r.includes("-8b");
  if (e == null)
    return { tools: void 0, toolConfig: void 0, toolWarnings: n };
  const s = e.some((h) => h.type === "function"), u = e.some(
    (h) => h.type === "provider-defined"
  );
  if (s && u && n.push({
    type: "unsupported-tool",
    tool: e.find((h) => h.type === "function"),
    details: "Cannot mix function tools with provider-defined tools in the same request. Please use either function tools or provider-defined tools, but not both."
  }), u) {
    const h = {};
    return e.filter(
      (p) => p.type === "provider-defined"
    ).forEach((p) => {
      switch (p.id) {
        case "google.google_search":
          i ? h.googleSearch = {} : a ? h.googleSearchRetrieval = {
            dynamicRetrievalConfig: {
              mode: p.args.mode,
              dynamicThreshold: p.args.dynamicThreshold
            }
          } : h.googleSearchRetrieval = {};
          break;
        case "google.url_context":
          i ? h.urlContext = {} : n.push({
            type: "unsupported-tool",
            tool: p,
            details: "The URL context tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.code_execution":
          i ? h.codeExecution = {} : n.push({
            type: "unsupported-tool",
            tool: p,
            details: "The code execution tools is not supported with other Gemini models than Gemini 2."
          });
          break;
        default:
          n.push({ type: "unsupported-tool", tool: p });
          break;
      }
    }), {
      tools: Object.keys(h).length > 0 ? h : void 0,
      toolConfig: void 0,
      toolWarnings: n
    };
  }
  const l = [];
  for (const h of e)
    switch (h.type) {
      case "function":
        l.push({
          name: h.name,
          description: (o = h.description) != null ? o : "",
          parameters: It(h.inputSchema)
        });
        break;
      default:
        n.push({ type: "unsupported-tool", tool: h });
        break;
    }
  if (t == null)
    return {
      tools: { functionDeclarations: l },
      toolConfig: void 0,
      toolWarnings: n
    };
  const d = t.type;
  switch (d) {
    case "auto":
      return {
        tools: { functionDeclarations: l },
        toolConfig: { functionCallingConfig: { mode: "AUTO" } },
        toolWarnings: n
      };
    case "none":
      return {
        tools: { functionDeclarations: l },
        toolConfig: { functionCallingConfig: { mode: "NONE" } },
        toolWarnings: n
      };
    case "required":
      return {
        tools: { functionDeclarations: l },
        toolConfig: { functionCallingConfig: { mode: "ANY" } },
        toolWarnings: n
      };
    case "tool":
      return {
        tools: { functionDeclarations: l },
        toolConfig: {
          functionCallingConfig: {
            mode: "ANY",
            allowedFunctionNames: [t.toolName]
          }
        },
        toolWarnings: n
      };
    default: {
      const h = d;
      throw new $e({
        functionality: `tool choice type: ${h}`
      });
    }
  }
}
function zs({
  finishReason: e,
  hasToolCalls: t
}) {
  switch (e) {
    case "STOP":
      return t ? "tool-calls" : "stop";
    case "MAX_TOKENS":
      return "length";
    case "IMAGE_SAFETY":
    case "RECITATION":
    case "SAFETY":
    case "BLOCKLIST":
    case "PROHIBITED_CONTENT":
    case "SPII":
      return "content-filter";
    case "FINISH_REASON_UNSPECIFIED":
    case "OTHER":
      return "other";
    case "MALFORMED_FUNCTION_CALL":
      return "error";
    default:
      return "unknown";
  }
}
var mI = f({
  web: f({ uri: c(), title: c() }).nullish(),
  retrievedContext: f({ uri: c(), title: c() }).nullish()
}), rf = f({
  webSearchQueries: A(c()).nullish(),
  retrievalQueries: A(c()).nullish(),
  searchEntryPoint: f({ renderedContent: c() }).nullish(),
  groundingChunks: A(mI).nullish(),
  groundingSupports: A(
    f({
      segment: f({
        startIndex: S().nullish(),
        endIndex: S().nullish(),
        text: c().nullish()
      }),
      segment_text: c().nullish(),
      groundingChunkIndices: A(S()).nullish(),
      supportChunkIndices: A(S()).nullish(),
      confidenceScores: A(S()).nullish(),
      confidenceScore: A(S()).nullish()
    })
  ).nullish(),
  retrievalMetadata: Y([
    f({
      webDynamicRetrievalScore: S()
    }),
    f({})
  ]).nullish()
}), fI = dt({
  id: "google.google_search",
  name: "google_search",
  inputSchema: f({
    mode: ne(["MODE_DYNAMIC", "MODE_UNSPECIFIED"]).default("MODE_UNSPECIFIED"),
    dynamicThreshold: S().default(1)
  })
}), gI = f({
  retrievedUrl: c(),
  urlRetrievalStatus: c()
}), of = f({
  urlMetadata: A(gI)
}), hI = dt({
  id: "google.url_context",
  name: "url_context",
  inputSchema: f({})
}), vI = class {
  constructor(e, t) {
    this.specificationVersion = "v2";
    var r;
    this.modelId = e, this.config = t, this.generateId = (r = t.generateId) != null ? r : Fe;
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var e, t, r;
    return (r = (t = (e = this.config).supportedUrls) == null ? void 0 : t.call(e)) != null ? r : {};
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: r,
    topP: o,
    topK: n,
    frequencyPenalty: i,
    presencePenalty: a,
    stopSequences: s,
    responseFormat: u,
    seed: l,
    tools: d,
    toolChoice: h,
    providerOptions: y
  }) {
    var p, g;
    const _ = [], v = await Ge({
      provider: "google",
      providerOptions: y,
      schema: dI
    });
    ((p = v == null ? void 0 : v.thinkingConfig) == null ? void 0 : p.includeThoughts) === !0 && !this.config.provider.startsWith("google.vertex.") && _.push({
      type: "other",
      message: `The 'includeThoughts' option is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
    });
    const m = this.modelId.toLowerCase().startsWith("gemma-"), { contents: b, systemInstruction: $ } = cI(
      e,
      { isGemmaModel: m }
    ), {
      tools: w,
      toolConfig: N,
      toolWarnings: O
    } = pI({
      tools: d,
      toolChoice: h,
      modelId: this.modelId
    });
    return {
      args: {
        generationConfig: {
          // standardized settings:
          maxOutputTokens: t,
          temperature: r,
          topK: n,
          topP: o,
          frequencyPenalty: i,
          presencePenalty: a,
          stopSequences: s,
          seed: l,
          // response format:
          responseMimeType: (u == null ? void 0 : u.type) === "json" ? "application/json" : void 0,
          responseSchema: (u == null ? void 0 : u.type) === "json" && u.schema != null && // Google GenAI does not support all OpenAPI Schema features,
          // so this is needed as an escape hatch:
          // TODO convert into provider option
          ((g = v == null ? void 0 : v.structuredOutputs) == null || g) ? It(u.schema) : void 0,
          ...(v == null ? void 0 : v.audioTimestamp) && {
            audioTimestamp: v.audioTimestamp
          },
          // provider options:
          responseModalities: v == null ? void 0 : v.responseModalities,
          thinkingConfig: v == null ? void 0 : v.thinkingConfig
        },
        contents: b,
        systemInstruction: m ? void 0 : $,
        safetySettings: v == null ? void 0 : v.safetySettings,
        tools: w,
        toolConfig: N,
        cachedContent: v == null ? void 0 : v.cachedContent,
        labels: v == null ? void 0 : v.labels
      },
      warnings: [..._, ...O]
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u, l, d, h, y, p;
    const { args: g, warnings: _ } = await this.getArgs(e), v = JSON.stringify(g), m = Ne(
      await Ue(this.config.headers),
      e.headers
    ), {
      responseHeaders: b,
      value: $,
      rawValue: w
    } = await Se({
      url: `${this.config.baseURL}/${Ps(
        this.modelId
      )}:generateContent`,
      headers: m,
      body: g,
      failedResponseHandler: Bn,
      successfulResponseHandler: Je(bI),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), N = $.candidates[0], O = [], I = (r = (t = N.content) == null ? void 0 : t.parts) != null ? r : [], C = $.usageMetadata;
    let R;
    for (const E of I)
      if ("executableCode" in E && ((o = E.executableCode) != null && o.code)) {
        const z = this.config.generateId();
        R = z, O.push({
          type: "tool-call",
          toolCallId: z,
          toolName: "code_execution",
          input: JSON.stringify(E.executableCode),
          providerExecuted: !0
        });
      } else "codeExecutionResult" in E && E.codeExecutionResult ? (O.push({
        type: "tool-result",
        // Assumes a result directly follows its corresponding call part.
        toolCallId: R,
        toolName: "code_execution",
        result: {
          outcome: E.codeExecutionResult.outcome,
          output: E.codeExecutionResult.output
        },
        providerExecuted: !0
      }), R = void 0) : "text" in E && E.text != null && E.text.length > 0 ? O.push({
        type: E.thought === !0 ? "reasoning" : "text",
        text: E.text,
        providerMetadata: E.thoughtSignature ? { google: { thoughtSignature: E.thoughtSignature } } : void 0
      }) : "functionCall" in E ? O.push({
        type: "tool-call",
        toolCallId: this.config.generateId(),
        toolName: E.functionCall.name,
        input: JSON.stringify(E.functionCall.args),
        providerMetadata: E.thoughtSignature ? { google: { thoughtSignature: E.thoughtSignature } } : void 0
      }) : "inlineData" in E && O.push({
        type: "file",
        data: E.inlineData.data,
        mediaType: E.inlineData.mimeType
      });
    const M = (n = Us({
      groundingMetadata: N.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? n : [];
    for (const E of M)
      O.push(E);
    return {
      content: O,
      finishReason: zs({
        finishReason: N.finishReason,
        hasToolCalls: O.some((E) => E.type === "tool-call")
      }),
      usage: {
        inputTokens: (i = C == null ? void 0 : C.promptTokenCount) != null ? i : void 0,
        outputTokens: (a = C == null ? void 0 : C.candidatesTokenCount) != null ? a : void 0,
        totalTokens: (s = C == null ? void 0 : C.totalTokenCount) != null ? s : void 0,
        reasoningTokens: (u = C == null ? void 0 : C.thoughtsTokenCount) != null ? u : void 0,
        cachedInputTokens: (l = C == null ? void 0 : C.cachedContentTokenCount) != null ? l : void 0
      },
      warnings: _,
      providerMetadata: {
        google: {
          promptFeedback: (d = $.promptFeedback) != null ? d : null,
          groundingMetadata: (h = N.groundingMetadata) != null ? h : null,
          urlContextMetadata: (y = N.urlContextMetadata) != null ? y : null,
          safetyRatings: (p = N.safetyRatings) != null ? p : null,
          usageMetadata: C ?? null
        }
      },
      request: { body: v },
      response: {
        // TODO timestamp, model id, id
        headers: b,
        body: w
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), o = JSON.stringify(t), n = Ne(
      await Ue(this.config.headers),
      e.headers
    ), { responseHeaders: i, value: a } = await Se({
      url: `${this.config.baseURL}/${Ps(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers: n,
      body: t,
      failedResponseHandler: Bn,
      successfulResponseHandler: sn(wI),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let s = "unknown";
    const u = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let l;
    const d = this.config.generateId;
    let h = !1, y = null, p = null, g = 0;
    const _ = /* @__PURE__ */ new Set();
    let v;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(m) {
            m.enqueue({ type: "stream-start", warnings: r });
          },
          transform(m, b) {
            var $, w, N, O, I, C, R, M, E, z, B, H;
            if (e.includeRawChunks && b.enqueue({ type: "raw", rawValue: m.rawValue }), !m.success) {
              b.enqueue({ type: "error", error: m.error });
              return;
            }
            const Z = m.value, F = Z.usageMetadata;
            F != null && (u.inputTokens = ($ = F.promptTokenCount) != null ? $ : void 0, u.outputTokens = (w = F.candidatesTokenCount) != null ? w : void 0, u.totalTokens = (N = F.totalTokenCount) != null ? N : void 0, u.reasoningTokens = (O = F.thoughtsTokenCount) != null ? O : void 0, u.cachedInputTokens = (I = F.cachedContentTokenCount) != null ? I : void 0);
            const te = (C = Z.candidates) == null ? void 0 : C[0];
            if (te == null)
              return;
            const we = te.content, Ee = Us({
              groundingMetadata: te.groundingMetadata,
              generateId: d
            });
            if (Ee != null)
              for (const ie of Ee)
                ie.sourceType === "url" && !_.has(ie.url) && (_.add(ie.url), b.enqueue(ie));
            if (we != null) {
              const ie = (R = we.parts) != null ? R : [];
              for (const U of ie)
                if ("executableCode" in U && ((M = U.executableCode) != null && M.code)) {
                  const x = d();
                  v = x, b.enqueue({
                    type: "tool-call",
                    toolCallId: x,
                    toolName: "code_execution",
                    input: JSON.stringify(U.executableCode),
                    providerExecuted: !0
                  }), h = !0;
                } else if ("codeExecutionResult" in U && U.codeExecutionResult) {
                  const x = v;
                  x && (b.enqueue({
                    type: "tool-result",
                    toolCallId: x,
                    toolName: "code_execution",
                    result: {
                      outcome: U.codeExecutionResult.outcome,
                      output: U.codeExecutionResult.output
                    },
                    providerExecuted: !0
                  }), v = void 0);
                } else "text" in U && U.text != null && U.text.length > 0 && (U.thought === !0 ? (y !== null && (b.enqueue({
                  type: "text-end",
                  id: y
                }), y = null), p === null && (p = String(g++), b.enqueue({
                  type: "reasoning-start",
                  id: p,
                  providerMetadata: U.thoughtSignature ? {
                    google: {
                      thoughtSignature: U.thoughtSignature
                    }
                  } : void 0
                })), b.enqueue({
                  type: "reasoning-delta",
                  id: p,
                  delta: U.text,
                  providerMetadata: U.thoughtSignature ? {
                    google: { thoughtSignature: U.thoughtSignature }
                  } : void 0
                })) : (p !== null && (b.enqueue({
                  type: "reasoning-end",
                  id: p
                }), p = null), y === null && (y = String(g++), b.enqueue({
                  type: "text-start",
                  id: y,
                  providerMetadata: U.thoughtSignature ? {
                    google: {
                      thoughtSignature: U.thoughtSignature
                    }
                  } : void 0
                })), b.enqueue({
                  type: "text-delta",
                  id: y,
                  delta: U.text,
                  providerMetadata: U.thoughtSignature ? {
                    google: { thoughtSignature: U.thoughtSignature }
                  } : void 0
                })));
              const Ce = _I(we.parts);
              if (Ce != null)
                for (const U of Ce)
                  b.enqueue({
                    type: "file",
                    mediaType: U.inlineData.mimeType,
                    data: U.inlineData.data
                  });
              const oe = yI({
                parts: we.parts,
                generateId: d
              });
              if (oe != null)
                for (const U of oe)
                  b.enqueue({
                    type: "tool-input-start",
                    id: U.toolCallId,
                    toolName: U.toolName,
                    providerMetadata: U.providerMetadata
                  }), b.enqueue({
                    type: "tool-input-delta",
                    id: U.toolCallId,
                    delta: U.args,
                    providerMetadata: U.providerMetadata
                  }), b.enqueue({
                    type: "tool-input-end",
                    id: U.toolCallId,
                    providerMetadata: U.providerMetadata
                  }), b.enqueue({
                    type: "tool-call",
                    toolCallId: U.toolCallId,
                    toolName: U.toolName,
                    input: U.args,
                    providerMetadata: U.providerMetadata
                  }), h = !0;
            }
            te.finishReason != null && (s = zs({
              finishReason: te.finishReason,
              hasToolCalls: h
            }), l = {
              google: {
                promptFeedback: (E = Z.promptFeedback) != null ? E : null,
                groundingMetadata: (z = te.groundingMetadata) != null ? z : null,
                urlContextMetadata: (B = te.urlContextMetadata) != null ? B : null,
                safetyRatings: (H = te.safetyRatings) != null ? H : null
              }
            }, F != null && (l.google.usageMetadata = F));
          },
          flush(m) {
            y !== null && m.enqueue({
              type: "text-end",
              id: y
            }), p !== null && m.enqueue({
              type: "reasoning-end",
              id: p
            }), m.enqueue({
              type: "finish",
              finishReason: s,
              usage: u,
              providerMetadata: l
            });
          }
        })
      ),
      response: { headers: i },
      request: { body: o }
    };
  }
};
function yI({
  parts: e,
  generateId: t
}) {
  const r = e == null ? void 0 : e.filter(
    (o) => "functionCall" in o
  );
  return r == null || r.length === 0 ? void 0 : r.map((o) => ({
    type: "tool-call",
    toolCallId: t(),
    toolName: o.functionCall.name,
    args: JSON.stringify(o.functionCall.args),
    providerMetadata: o.thoughtSignature ? { google: { thoughtSignature: o.thoughtSignature } } : void 0
  }));
}
function _I(e) {
  return e == null ? void 0 : e.filter(
    (t) => "inlineData" in t
  );
}
function Us({
  groundingMetadata: e,
  generateId: t
}) {
  var r;
  return (r = e == null ? void 0 : e.groundingChunks) == null ? void 0 : r.filter(
    (o) => o.web != null
  ).map((o) => ({
    type: "source",
    sourceType: "url",
    id: t(),
    url: o.web.uri,
    title: o.web.title
  }));
}
var af = f({
  parts: A(
    Y([
      // note: order matters since text can be fully empty
      f({
        functionCall: f({
          name: c(),
          args: ue()
        }),
        thoughtSignature: c().nullish()
      }),
      f({
        inlineData: f({
          mimeType: c(),
          data: c()
        })
      }),
      f({
        executableCode: f({
          language: c(),
          code: c()
        }).nullish(),
        codeExecutionResult: f({
          outcome: c(),
          output: c()
        }).nullish(),
        text: c().nullish(),
        thought: V().nullish(),
        thoughtSignature: c().nullish()
      })
    ])
  ).nullish()
}), Zr = f({
  category: c().nullish(),
  probability: c().nullish(),
  probabilityScore: S().nullish(),
  severity: c().nullish(),
  severityScore: S().nullish(),
  blocked: V().nullish()
}), sf = f({
  cachedContentTokenCount: S().nullish(),
  thoughtsTokenCount: S().nullish(),
  promptTokenCount: S().nullish(),
  candidatesTokenCount: S().nullish(),
  totalTokenCount: S().nullish()
}), bI = f({
  candidates: A(
    f({
      content: af.nullish().or(f({}).strict()),
      finishReason: c().nullish(),
      safetyRatings: A(Zr).nullish(),
      groundingMetadata: rf.nullish(),
      urlContextMetadata: of.nullish()
    })
  ),
  usageMetadata: sf.nullish(),
  promptFeedback: f({
    blockReason: c().nullish(),
    safetyRatings: A(Zr).nullish()
  }).nullish()
}), wI = f({
  candidates: A(
    f({
      content: af.nullish(),
      finishReason: c().nullish(),
      safetyRatings: A(Zr).nullish(),
      groundingMetadata: rf.nullish(),
      urlContextMetadata: of.nullish()
    })
  ).nullish(),
  usageMetadata: sf.nullish(),
  promptFeedback: f({
    blockReason: c().nullish(),
    safetyRatings: A(Zr).nullish()
  }).nullish()
}), $I = Ft({
  id: "google.code_execution",
  name: "code_execution",
  inputSchema: f({
    language: c().describe("The programming language of the code."),
    code: c().describe("The code to be executed.")
  }),
  outputSchema: f({
    outcome: c().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
    output: c().describe("The output from the code execution.")
  })
}), II = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch: fI,
  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext: hI,
  /**
   * A tool that enables the model to generate and run Python code.
   * Must have name "code_execution".
   *
   * @note Ensure the selected model supports Code Execution.
   * Multi-tool usage with the code execution tool is typically compatible with Gemini >=2 models.
   *
   * @see https://ai.google.dev/gemini-api/docs/code-execution (Google AI)
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/code-execution-api (Vertex AI)
   */
  codeExecution: $I
}, kI = class {
  constructor(e, t, r) {
    this.modelId = e, this.settings = t, this.config = r, this.specificationVersion = "v2";
  }
  get maxImagesPerCall() {
    var e;
    return (e = this.settings.maxImagesPerCall) != null ? e : 4;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate(e) {
    var t, r, o;
    const {
      prompt: n,
      n: i = 1,
      size: a = "1024x1024",
      aspectRatio: s = "1:1",
      seed: u,
      providerOptions: l,
      headers: d,
      abortSignal: h
    } = e, y = [];
    a != null && y.push({
      type: "unsupported-setting",
      setting: "size",
      details: "This model does not support the `size` option. Use `aspectRatio` instead."
    }), u != null && y.push({
      type: "unsupported-setting",
      setting: "seed",
      details: "This model does not support the `seed` option through this provider."
    });
    const p = await Ge({
      provider: "google",
      providerOptions: l,
      schema: SI
    }), g = (o = (r = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : r.call(t)) != null ? o : /* @__PURE__ */ new Date(), _ = {
      sampleCount: i
    };
    s != null && (_.aspectRatio = s), p && Object.assign(_, p);
    const v = {
      instances: [{ prompt: n }],
      parameters: _
    }, { responseHeaders: m, value: b } = await Se({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: Ne(await Ue(this.config.headers), d),
      body: v,
      failedResponseHandler: Bn,
      successfulResponseHandler: Je(
        xI
      ),
      abortSignal: h,
      fetch: this.config.fetch
    });
    return {
      images: b.predictions.map(
        ($) => $.bytesBase64Encoded
      ),
      warnings: y ?? [],
      providerMetadata: {
        google: {
          images: b.predictions.map(($) => ({
            // Add any prediction-specific metadata here
          }))
        }
      },
      response: {
        timestamp: g,
        modelId: this.modelId,
        headers: m
      }
    };
  }
}, xI = f({
  predictions: A(f({ bytesBase64Encoded: c() })).default([])
}), SI = f({
  personGeneration: ne(["dont_allow", "allow_adult", "allow_all"]).nullish(),
  aspectRatio: ne(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish()
});
function TI(e = {}) {
  var t;
  const r = (t = mr(e.baseURL)) != null ? t : "https://generativelanguage.googleapis.com/v1beta", o = () => Me(
    {
      "x-goog-api-key": lo({
        apiKey: e.apiKey,
        environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
        description: "Google Generative AI"
      }),
      ...e.headers
    },
    `ai-sdk/google/${rI}`
  ), n = (u) => {
    var l;
    return new vI(u, {
      provider: "google.generative-ai",
      baseURL: r,
      headers: o,
      generateId: (l = e.generateId) != null ? l : Fe,
      supportedUrls: () => ({
        "*": [
          // Google Generative Language "files" endpoint
          // e.g. https://generativelanguage.googleapis.com/v1beta/files/...
          new RegExp(`^${r}/files/.*$`),
          // YouTube URLs (public or unlisted videos)
          new RegExp(
            "^https://(?:www\\.)?youtube\\.com/watch\\?v=[\\w-]+(?:&[\\w=&.-]*)?$"
          ),
          new RegExp("^https://youtu\\.be/[\\w-]+(?:\\?[\\w=&.-]*)?$")
        ]
      }),
      fetch: e.fetch
    });
  }, i = (u) => new aI(u, {
    provider: "google.generative-ai",
    baseURL: r,
    headers: o,
    fetch: e.fetch
  }), a = (u, l = {}) => new kI(u, l, {
    provider: "google.generative-ai",
    baseURL: r,
    headers: o,
    fetch: e.fetch
  }), s = function(u) {
    if (new.target)
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    return n(u);
  };
  return s.languageModel = n, s.chat = n, s.generativeAI = n, s.embedding = i, s.textEmbedding = i, s.textEmbeddingModel = i, s.image = a, s.imageModel = a, s.tools = II, s;
}
TI();
function EI(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const { role: o, content: n } = e[r], i = r === e.length - 1;
    switch (o) {
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
                return { type: "text", text: a.text };
              case "file":
                if (a.mediaType.startsWith("image/")) {
                  const s = a.mediaType === "image/*" ? "image/jpeg" : a.mediaType;
                  return {
                    type: "image_url",
                    image_url: a.data instanceof URL ? a.data.toString() : `data:${s};base64,${yt(a.data)}`
                  };
                } else {
                  if (a.mediaType === "application/pdf")
                    return {
                      type: "document_url",
                      document_url: a.data.toString()
                    };
                  throw new $e({
                    functionality: "Only images and PDF file parts are supported"
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        let a = "";
        const s = [];
        for (const u of n)
          switch (u.type) {
            case "text": {
              a += u.text;
              break;
            }
            case "tool-call": {
              s.push({
                id: u.toolCallId,
                type: "function",
                function: {
                  name: u.toolName,
                  arguments: JSON.stringify(u.input)
                }
              });
              break;
            }
            case "reasoning": {
              a += u.text;
              break;
            }
            default:
              throw new Error(
                `Unsupported content type in assistant message: ${u.type}`
              );
          }
        t.push({
          role: "assistant",
          content: a,
          prefix: i ? !0 : void 0,
          tool_calls: s.length > 0 ? s : void 0
        });
        break;
      }
      case "tool": {
        for (const a of n) {
          const s = a.output;
          let u;
          switch (s.type) {
            case "text":
            case "error-text":
              u = s.value;
              break;
            case "content":
            case "json":
            case "error-json":
              u = JSON.stringify(s.value);
              break;
          }
          t.push({
            role: "tool",
            name: a.toolName,
            tool_call_id: a.toolCallId,
            content: u
          });
        }
        break;
      }
      default: {
        const a = o;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  }
  return t;
}
function Ds({
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
function Zs(e) {
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
var OI = f({
  /**
  Whether to inject a safety prompt before all conversations.
  
  Defaults to `false`.
     */
  safePrompt: V().optional(),
  documentImageLimit: S().optional(),
  documentPageLimit: S().optional(),
  /**
   * Whether to use structured outputs.
   *
   * @default true
   */
  structuredOutputs: V().optional(),
  /**
   * Whether to use strict JSON schema validation.
   *
   * @default false
   */
  strictJsonSchema: V().optional(),
  /**
   * Whether to enable parallel function calling during tool use.
   * When set to false, the model will use at most one tool per response.
   *
   * @default true
   */
  parallelToolCalls: V().optional()
}), NI = f({
  object: k("error"),
  message: c(),
  type: c(),
  param: c().nullable(),
  code: c().nullable()
}), Ho = Rt({
  errorSchema: NI,
  errorToMessage: (e) => e.message
});
function CI({
  tools: e,
  toolChoice: t
}) {
  e = e != null && e.length ? e : void 0;
  const r = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: r };
  const o = [];
  for (const i of e)
    i.type === "provider-defined" ? r.push({ type: "unsupported-tool", tool: i }) : o.push({
      type: "function",
      function: {
        name: i.name,
        description: i.description,
        parameters: i.inputSchema
      }
    });
  if (t == null)
    return { tools: o, toolChoice: void 0, toolWarnings: r };
  const n = t.type;
  switch (n) {
    case "auto":
    case "none":
      return { tools: o, toolChoice: n, toolWarnings: r };
    case "required":
      return { tools: o, toolChoice: "any", toolWarnings: r };
    case "tool":
      return {
        tools: o.filter(
          (i) => i.function.name === t.toolName
        ),
        toolChoice: "any",
        toolWarnings: r
      };
    default: {
      const i = n;
      throw new $e({
        functionality: `tool choice type: ${i}`
      });
    }
  }
}
var RI = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      "application/pdf": [/^https:\/\/.*$/]
    };
    var r;
    this.modelId = e, this.config = t, this.generateId = (r = t.generateId) != null ? r : Fe;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: r,
    topP: o,
    topK: n,
    frequencyPenalty: i,
    presencePenalty: a,
    stopSequences: s,
    responseFormat: u,
    seed: l,
    providerOptions: d,
    tools: h,
    toolChoice: y
  }) {
    var p, g, _, v;
    const m = [], b = (p = await Ge({
      provider: "mistral",
      providerOptions: d,
      schema: OI
    })) != null ? p : {};
    n != null && m.push({
      type: "unsupported-setting",
      setting: "topK"
    }), i != null && m.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), a != null && m.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), s != null && m.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    });
    const $ = (g = b.structuredOutputs) != null ? g : !0, w = (_ = b.strictJsonSchema) != null ? _ : !1;
    (u == null ? void 0 : u.type) === "json" && !(u != null && u.schema) && (e = fw({
      messages: e,
      schema: u.schema
    }));
    const N = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: b.safePrompt,
      // standardized settings:
      max_tokens: t,
      temperature: r,
      top_p: o,
      random_seed: l,
      // response format:
      response_format: (u == null ? void 0 : u.type) === "json" ? $ && (u == null ? void 0 : u.schema) != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: w,
          name: (v = u.name) != null ? v : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: b.documentImageLimit,
      document_page_limit: b.documentPageLimit,
      // messages:
      messages: EI(e)
    }, {
      tools: O,
      toolChoice: I,
      toolWarnings: C
    } = CI({
      tools: h,
      toolChoice: y
    });
    return {
      args: {
        ...N,
        tools: O,
        tool_choice: I,
        ...O != null && b.parallelToolCalls !== void 0 ? { parallel_tool_calls: b.parallelToolCalls } : {}
      },
      warnings: [...m, ...C]
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = await this.getArgs(e), {
      responseHeaders: o,
      value: n,
      rawValue: i
    } = await Se({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ne(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Ho,
      successfulResponseHandler: Je(
        AI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), a = n.choices[0], s = [];
    if (a.message.content != null && Array.isArray(a.message.content))
      for (const u of a.message.content)
        if (u.type === "thinking") {
          const l = qs(u.thinking);
          l.length > 0 && s.push({ type: "reasoning", text: l });
        } else u.type === "text" && u.text.length > 0 && s.push({ type: "text", text: u.text });
    else {
      const u = Ls(a.message.content);
      u != null && u.length > 0 && s.push({ type: "text", text: u });
    }
    if (a.message.tool_calls != null)
      for (const u of a.message.tool_calls)
        s.push({
          type: "tool-call",
          toolCallId: u.id,
          toolName: u.function.name,
          input: u.function.arguments
        });
    return {
      content: s,
      finishReason: Zs(a.finish_reason),
      usage: {
        inputTokens: n.usage.prompt_tokens,
        outputTokens: n.usage.completion_tokens,
        totalTokens: n.usage.total_tokens
      },
      request: { body: t },
      response: {
        ...Ds(n),
        headers: o,
        body: i
      },
      warnings: r
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), o = { ...t, stream: !0 }, { responseHeaders: n, value: i } = await Se({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ne(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: Ho,
      successfulResponseHandler: sn(
        jI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let a = "unknown";
    const s = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let u = !0, l = !1, d = null;
    const h = this.generateId;
    return {
      stream: i.pipeThrough(
        new TransformStream({
          start(y) {
            y.enqueue({ type: "stream-start", warnings: r });
          },
          transform(y, p) {
            if (e.includeRawChunks && p.enqueue({ type: "raw", rawValue: y.rawValue }), !y.success) {
              p.enqueue({ type: "error", error: y.error });
              return;
            }
            const g = y.value;
            u && (u = !1, p.enqueue({
              type: "response-metadata",
              ...Ds(g)
            })), g.usage != null && (s.inputTokens = g.usage.prompt_tokens, s.outputTokens = g.usage.completion_tokens, s.totalTokens = g.usage.total_tokens);
            const _ = g.choices[0], v = _.delta, m = Ls(v.content);
            if (v.content != null && Array.isArray(v.content)) {
              for (const b of v.content)
                if (b.type === "thinking") {
                  const $ = qs(b.thinking);
                  $.length > 0 && (d == null && (l && (p.enqueue({ type: "text-end", id: "0" }), l = !1), d = h(), p.enqueue({
                    type: "reasoning-start",
                    id: d
                  })), p.enqueue({
                    type: "reasoning-delta",
                    id: d,
                    delta: $
                  }));
                }
            }
            if (m != null && m.length > 0 && (l || (d != null && (p.enqueue({
              type: "reasoning-end",
              id: d
            }), d = null), p.enqueue({ type: "text-start", id: "0" }), l = !0), p.enqueue({
              type: "text-delta",
              id: "0",
              delta: m
            })), (v == null ? void 0 : v.tool_calls) != null)
              for (const b of v.tool_calls) {
                const $ = b.id, w = b.function.name, N = b.function.arguments;
                p.enqueue({
                  type: "tool-input-start",
                  id: $,
                  toolName: w
                }), p.enqueue({
                  type: "tool-input-delta",
                  id: $,
                  delta: N
                }), p.enqueue({
                  type: "tool-input-end",
                  id: $
                }), p.enqueue({
                  type: "tool-call",
                  toolCallId: $,
                  toolName: w,
                  input: N
                });
              }
            _.finish_reason != null && (a = Zs(_.finish_reason));
          },
          flush(y) {
            d != null && y.enqueue({
              type: "reasoning-end",
              id: d
            }), l && y.enqueue({ type: "text-end", id: "0" }), y.enqueue({
              type: "finish",
              finishReason: a,
              usage: s
            });
          }
        })
      ),
      request: { body: o },
      response: { headers: n }
    };
  }
};
function qs(e) {
  return e.filter((t) => t.type === "text").map((t) => t.text).join("");
}
function Ls(e) {
  if (typeof e == "string")
    return e;
  if (e == null)
    return;
  const t = [];
  for (const r of e) {
    const { type: o } = r;
    switch (o) {
      case "text":
        t.push(r.text);
        break;
      case "thinking":
      case "image_url":
      case "reference":
        break;
      default: {
        const n = o;
        throw new Error(`Unsupported type: ${n}`);
      }
    }
  }
  return t.length ? t.join("") : void 0;
}
var uf = Y([
  c(),
  A(
    Ae("type", [
      f({
        type: k("text"),
        text: c()
      }),
      f({
        type: k("image_url"),
        image_url: Y([
          c(),
          f({
            url: c(),
            detail: c().nullable()
          })
        ])
      }),
      f({
        type: k("reference"),
        reference_ids: A(S())
      }),
      f({
        type: k("thinking"),
        thinking: A(
          f({
            type: k("text"),
            text: c()
          })
        )
      })
    ])
  )
]).nullish(), lf = f({
  prompt_tokens: S(),
  completion_tokens: S(),
  total_tokens: S()
}), AI = f({
  id: c().nullish(),
  created: S().nullish(),
  model: c().nullish(),
  choices: A(
    f({
      message: f({
        role: k("assistant"),
        content: uf,
        tool_calls: A(
          f({
            id: c(),
            function: f({ name: c(), arguments: c() })
          })
        ).nullish()
      }),
      index: S(),
      finish_reason: c().nullish()
    })
  ),
  object: k("chat.completion"),
  usage: lf
}), jI = f({
  id: c().nullish(),
  created: S().nullish(),
  model: c().nullish(),
  choices: A(
    f({
      delta: f({
        role: ne(["assistant"]).optional(),
        content: uf,
        tool_calls: A(
          f({
            id: c(),
            function: f({ name: c(), arguments: c() })
          })
        ).nullish()
      }),
      finish_reason: c().nullish(),
      index: S()
    })
  ),
  usage: lf.nullish()
}), MI = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 32, this.supportsParallelCalls = !1, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    abortSignal: t,
    headers: r
  }) {
    if (e.length > this.maxEmbeddingsPerCall)
      throw new ti({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const {
      responseHeaders: o,
      value: n,
      rawValue: i
    } = await Se({
      url: `${this.config.baseURL}/embeddings`,
      headers: Ne(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Ho,
      successfulResponseHandler: Je(
        PI
      ),
      abortSignal: t,
      fetch: this.config.fetch
    });
    return {
      embeddings: n.data.map((a) => a.embedding),
      usage: n.usage ? { tokens: n.usage.prompt_tokens } : void 0,
      response: { headers: o, body: i }
    };
  }
}, PI = f({
  data: A(f({ embedding: A(S()) })),
  usage: f({ prompt_tokens: S() }).nullish()
}), zI = "2.0.17";
function UI(e = {}) {
  var t;
  const r = (t = mr(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", o = () => Me(
    {
      Authorization: `Bearer ${lo({
        apiKey: e.apiKey,
        environmentVariableName: "MISTRAL_API_KEY",
        description: "Mistral"
      })}`,
      ...e.headers
    },
    `ai-sdk/mistral/${zI}`
  ), n = (s) => new RI(s, {
    provider: "mistral.chat",
    baseURL: r,
    headers: o,
    fetch: e.fetch,
    generateId: e.generateId
  }), i = (s) => new MI(s, {
    provider: "mistral.embedding",
    baseURL: r,
    headers: o,
    fetch: e.fetch
  }), a = function(s) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return n(s);
  };
  return a.languageModel = n, a.chat = n, a.embedding = i, a.textEmbedding = i, a.textEmbeddingModel = i, a.imageModel = (s) => {
    throw new Ve({ modelId: s, modelType: "imageModel" });
  }, a;
}
UI();
var Va = f({
  error: f({
    message: c(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: c().nullish(),
    param: vt().nullish(),
    code: Y([c(), S()]).nullish()
  })
}), xt = Rt({
  errorSchema: Va,
  errorToMessage: (e) => e.error.message
});
function DI({
  prompt: e,
  systemMessageMode: t = "system"
}) {
  const r = [], o = [];
  for (const { role: n, content: i } of e)
    switch (n) {
      case "system": {
        switch (t) {
          case "system": {
            r.push({ role: "system", content: i });
            break;
          }
          case "developer": {
            r.push({ role: "developer", content: i });
            break;
          }
          case "remove": {
            o.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const a = t;
            throw new Error(
              `Unsupported system message mode: ${a}`
            );
          }
        }
        break;
      }
      case "user": {
        if (i.length === 1 && i[0].type === "text") {
          r.push({ role: "user", content: i[0].text });
          break;
        }
        r.push({
          role: "user",
          content: i.map((a, s) => {
            var u, l, d;
            switch (a.type) {
              case "text":
                return { type: "text", text: a.text };
              case "file":
                if (a.mediaType.startsWith("image/")) {
                  const h = a.mediaType === "image/*" ? "image/jpeg" : a.mediaType;
                  return {
                    type: "image_url",
                    image_url: {
                      url: a.data instanceof URL ? a.data.toString() : `data:${h};base64,${yt(a.data)}`,
                      // OpenAI specific extension: image detail
                      detail: (l = (u = a.providerOptions) == null ? void 0 : u.openai) == null ? void 0 : l.imageDetail
                    }
                  };
                } else if (a.mediaType.startsWith("audio/")) {
                  if (a.data instanceof URL)
                    throw new $e({
                      functionality: "audio file parts with URLs"
                    });
                  switch (a.mediaType) {
                    case "audio/wav":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: yt(a.data),
                          format: "wav"
                        }
                      };
                    case "audio/mp3":
                    case "audio/mpeg":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: yt(a.data),
                          format: "mp3"
                        }
                      };
                    default:
                      throw new $e({
                        functionality: `audio content parts with media type ${a.mediaType}`
                      });
                  }
                } else if (a.mediaType === "application/pdf") {
                  if (a.data instanceof URL)
                    throw new $e({
                      functionality: "PDF file parts with URLs"
                    });
                  return {
                    type: "file",
                    file: typeof a.data == "string" && a.data.startsWith("file-") ? { file_id: a.data } : {
                      filename: (d = a.filename) != null ? d : `part-${s}.pdf`,
                      file_data: `data:application/pdf;base64,${yt(a.data)}`
                    }
                  };
                } else
                  throw new $e({
                    functionality: `file part media type ${a.mediaType}`
                  });
            }
          })
        });
        break;
      }
      case "assistant": {
        let a = "";
        const s = [];
        for (const u of i)
          switch (u.type) {
            case "text": {
              a += u.text;
              break;
            }
            case "tool-call": {
              s.push({
                id: u.toolCallId,
                type: "function",
                function: {
                  name: u.toolName,
                  arguments: JSON.stringify(u.input)
                }
              });
              break;
            }
          }
        r.push({
          role: "assistant",
          content: a,
          tool_calls: s.length > 0 ? s : void 0
        });
        break;
      }
      case "tool": {
        for (const a of i) {
          const s = a.output;
          let u;
          switch (s.type) {
            case "text":
            case "error-text":
              u = s.value;
              break;
            case "content":
            case "json":
            case "error-json":
              u = JSON.stringify(s.value);
              break;
          }
          r.push({
            role: "tool",
            tool_call_id: a.toolCallId,
            content: u
          });
        }
        break;
      }
      default: {
        const a = n;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  return { messages: r, warnings: o };
}
function Fs({
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
function Js(e) {
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
var ZI = f({
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   *
   * Accepts a JSON object that maps tokens (specified by their token ID in
   * the GPT tokenizer) to an associated bias value from -100 to 100.
   */
  logitBias: je(Jm(), S()).optional(),
  /**
   * Return the log probabilities of the tokens.
   *
   * Setting to true will return the log probabilities of the tokens that
   * were generated.
   *
   * Setting to a number will return the log probabilities of the top n
   * tokens that were generated.
   */
  logprobs: Y([V(), S()]).optional(),
  /**
   * Whether to enable parallel function calling during tool use. Default to true.
   */
  parallelToolCalls: V().optional(),
  /**
   * A unique identifier representing your end-user, which can help OpenAI to
   * monitor and detect abuse.
   */
  user: c().optional(),
  /**
   * Reasoning effort for reasoning models. Defaults to `medium`.
   */
  reasoningEffort: ne(["minimal", "low", "medium", "high"]).optional(),
  /**
   * Maximum number of completion tokens to generate. Useful for reasoning models.
   */
  maxCompletionTokens: S().optional(),
  /**
   * Whether to enable persistence in responses API.
   */
  store: V().optional(),
  /**
   * Metadata to associate with the request.
   */
  metadata: je(c().max(64), c().max(512)).optional(),
  /**
   * Parameters for prediction mode.
   */
  prediction: je(c(), vt()).optional(),
  /**
   * Whether to use structured outputs.
   *
   * @default true
   */
  structuredOutputs: V().optional(),
  /**
   * Service tier for the request.
   * - 'auto': Default service tier
   * - 'flex': 50% cheaper processing at the cost of increased latency. Only available for o3 and o4-mini models.
   * - 'priority': Higher-speed processing with predictably low latency at premium cost. Available for Enterprise customers.
   *
   * @default 'auto'
   */
  serviceTier: ne(["auto", "flex", "priority"]).optional(),
  /**
   * Whether to use strict JSON schema validation.
   *
   * @default false
   */
  strictJsonSchema: V().optional(),
  /**
   * Controls the verbosity of the model's responses.
   * Lower values will result in more concise responses, while higher values will result in more verbose responses.
   */
  textVerbosity: ne(["low", "medium", "high"]).optional(),
  /**
   * A cache key for prompt caching. Allows manual control over prompt caching behavior.
   * Useful for improving cache hit rates and working around automatic caching issues.
   */
  promptCacheKey: c().optional(),
  /**
   * A stable identifier used to help detect users of your application
   * that may be violating OpenAI's usage policies. The IDs should be a
   * string that uniquely identifies each user. We recommend hashing their
   * username or email address, in order to avoid sending us any identifying
   * information.
   */
  safetyIdentifier: c().optional()
});
function qI({
  tools: e,
  toolChoice: t,
  structuredOutputs: r,
  strictJsonSchema: o
}) {
  e = e != null && e.length ? e : void 0;
  const n = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: n };
  const i = [];
  for (const s of e)
    switch (s.type) {
      case "function":
        i.push({
          type: "function",
          function: {
            name: s.name,
            description: s.description,
            parameters: s.inputSchema,
            strict: r ? o : void 0
          }
        });
        break;
      default:
        n.push({ type: "unsupported-tool", tool: s });
        break;
    }
  if (t == null)
    return { tools: i, toolChoice: void 0, toolWarnings: n };
  const a = t.type;
  switch (a) {
    case "auto":
    case "none":
    case "required":
      return { tools: i, toolChoice: a, toolWarnings: n };
    case "tool":
      return {
        tools: i,
        toolChoice: {
          type: "function",
          function: {
            name: t.toolName
          }
        },
        toolWarnings: n
      };
    default: {
      const s = a;
      throw new $e({
        functionality: `tool choice type: ${s}`
      });
    }
  }
}
var LI = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      "image/*": [/^https?:\/\/.*$/]
    }, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: r,
    topP: o,
    topK: n,
    frequencyPenalty: i,
    presencePenalty: a,
    stopSequences: s,
    responseFormat: u,
    seed: l,
    tools: d,
    toolChoice: h,
    providerOptions: y
  }) {
    var p, g, _, v;
    const m = [], b = (p = await Ge({
      provider: "openai",
      providerOptions: y,
      schema: ZI
    })) != null ? p : {}, $ = (g = b.structuredOutputs) != null ? g : !0;
    n != null && m.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (u == null ? void 0 : u.type) === "json" && u.schema != null && !$ && m.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const { messages: w, warnings: N } = DI(
      {
        prompt: e,
        systemMessageMode: BI(this.modelId)
      }
    );
    m.push(...N);
    const O = (_ = b.strictJsonSchema) != null ? _ : !1, I = {
      // model id:
      model: this.modelId,
      // model specific settings:
      logit_bias: b.logitBias,
      logprobs: b.logprobs === !0 || typeof b.logprobs == "number" ? !0 : void 0,
      top_logprobs: typeof b.logprobs == "number" ? b.logprobs : typeof b.logprobs == "boolean" && b.logprobs ? 0 : void 0,
      user: b.user,
      parallel_tool_calls: b.parallelToolCalls,
      // standardized settings:
      max_tokens: t,
      temperature: r,
      top_p: o,
      frequency_penalty: i,
      presence_penalty: a,
      response_format: (u == null ? void 0 : u.type) === "json" ? $ && u.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: O,
          name: (v = u.name) != null ? v : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      stop: s,
      seed: l,
      verbosity: b.textVerbosity,
      // openai specific settings:
      // TODO AI SDK 6: remove, we auto-map maxOutputTokens now
      max_completion_tokens: b.maxCompletionTokens,
      store: b.store,
      metadata: b.metadata,
      prediction: b.prediction,
      reasoning_effort: b.reasoningEffort,
      service_tier: b.serviceTier,
      prompt_cache_key: b.promptCacheKey,
      safety_identifier: b.safetyIdentifier,
      // messages:
      messages: w
    };
    df(this.modelId) ? (I.temperature != null && (I.temperature = void 0, m.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), I.top_p != null && (I.top_p = void 0, m.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })), I.frequency_penalty != null && (I.frequency_penalty = void 0, m.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), I.presence_penalty != null && (I.presence_penalty = void 0, m.push({
      type: "unsupported-setting",
      setting: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), I.logit_bias != null && (I.logit_bias = void 0, m.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), I.logprobs != null && (I.logprobs = void 0, m.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    })), I.top_logprobs != null && (I.top_logprobs = void 0, m.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), I.max_tokens != null && (I.max_completion_tokens == null && (I.max_completion_tokens = I.max_tokens), I.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && I.temperature != null && (I.temperature = void 0, m.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for the search preview models and has been removed."
    })), b.serviceTier === "flex" && !VI(this.modelId) && (m.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), I.service_tier = void 0), b.serviceTier === "priority" && !GI(this.modelId) && (m.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), I.service_tier = void 0);
    const {
      tools: C,
      toolChoice: R,
      toolWarnings: M
    } = qI({
      tools: d,
      toolChoice: h,
      structuredOutputs: $,
      strictJsonSchema: O
    });
    return {
      args: {
        ...I,
        tools: C,
        tool_choice: R
      },
      warnings: [...m, ...M]
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u, l, d, h, y, p, g;
    const { args: _, warnings: v } = await this.getArgs(e), {
      responseHeaders: m,
      value: b,
      rawValue: $
    } = await Se({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), e.headers),
      body: _,
      failedResponseHandler: xt,
      successfulResponseHandler: Je(
        FI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), w = b.choices[0], N = [], O = w.message.content;
    O != null && O.length > 0 && N.push({ type: "text", text: O });
    for (const M of (t = w.message.tool_calls) != null ? t : [])
      N.push({
        type: "tool-call",
        toolCallId: (r = M.id) != null ? r : Fe(),
        toolName: M.function.name,
        input: M.function.arguments
      });
    for (const M of (o = w.message.annotations) != null ? o : [])
      N.push({
        type: "source",
        sourceType: "url",
        id: Fe(),
        url: M.url,
        title: M.title
      });
    const I = (n = b.usage) == null ? void 0 : n.completion_tokens_details, C = (i = b.usage) == null ? void 0 : i.prompt_tokens_details, R = { openai: {} };
    return (I == null ? void 0 : I.accepted_prediction_tokens) != null && (R.openai.acceptedPredictionTokens = I == null ? void 0 : I.accepted_prediction_tokens), (I == null ? void 0 : I.rejected_prediction_tokens) != null && (R.openai.rejectedPredictionTokens = I == null ? void 0 : I.rejected_prediction_tokens), ((a = w.logprobs) == null ? void 0 : a.content) != null && (R.openai.logprobs = w.logprobs.content), {
      content: N,
      finishReason: Js(w.finish_reason),
      usage: {
        inputTokens: (u = (s = b.usage) == null ? void 0 : s.prompt_tokens) != null ? u : void 0,
        outputTokens: (d = (l = b.usage) == null ? void 0 : l.completion_tokens) != null ? d : void 0,
        totalTokens: (y = (h = b.usage) == null ? void 0 : h.total_tokens) != null ? y : void 0,
        reasoningTokens: (p = I == null ? void 0 : I.reasoning_tokens) != null ? p : void 0,
        cachedInputTokens: (g = C == null ? void 0 : C.cached_tokens) != null ? g : void 0
      },
      request: { body: _ },
      response: {
        ...Fs(b),
        headers: m,
        body: $
      },
      warnings: v,
      providerMetadata: R
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), o = {
      ...t,
      stream: !0,
      stream_options: {
        include_usage: !0
      }
    }, { responseHeaders: n, value: i } = await Se({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: xt,
      successfulResponseHandler: sn(
        JI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), a = [];
    let s = "unknown";
    const u = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let l = !0, d = !1;
    const h = { openai: {} };
    return {
      stream: i.pipeThrough(
        new TransformStream({
          start(y) {
            y.enqueue({ type: "stream-start", warnings: r });
          },
          transform(y, p) {
            var g, _, v, m, b, $, w, N, O, I, C, R, M, E, z, B, H, Z, F, te, we, Ee, ie, Ce;
            if (e.includeRawChunks && p.enqueue({ type: "raw", rawValue: y.rawValue }), !y.success) {
              s = "error", p.enqueue({ type: "error", error: y.error });
              return;
            }
            const oe = y.value;
            if ("error" in oe) {
              s = "error", p.enqueue({ type: "error", error: oe.error });
              return;
            }
            l && (l = !1, p.enqueue({
              type: "response-metadata",
              ...Fs(oe)
            })), oe.usage != null && (u.inputTokens = (g = oe.usage.prompt_tokens) != null ? g : void 0, u.outputTokens = (_ = oe.usage.completion_tokens) != null ? _ : void 0, u.totalTokens = (v = oe.usage.total_tokens) != null ? v : void 0, u.reasoningTokens = (b = (m = oe.usage.completion_tokens_details) == null ? void 0 : m.reasoning_tokens) != null ? b : void 0, u.cachedInputTokens = (w = ($ = oe.usage.prompt_tokens_details) == null ? void 0 : $.cached_tokens) != null ? w : void 0, ((N = oe.usage.completion_tokens_details) == null ? void 0 : N.accepted_prediction_tokens) != null && (h.openai.acceptedPredictionTokens = (O = oe.usage.completion_tokens_details) == null ? void 0 : O.accepted_prediction_tokens), ((I = oe.usage.completion_tokens_details) == null ? void 0 : I.rejected_prediction_tokens) != null && (h.openai.rejectedPredictionTokens = (C = oe.usage.completion_tokens_details) == null ? void 0 : C.rejected_prediction_tokens));
            const U = oe.choices[0];
            if ((U == null ? void 0 : U.finish_reason) != null && (s = Js(U.finish_reason)), ((R = U == null ? void 0 : U.logprobs) == null ? void 0 : R.content) != null && (h.openai.logprobs = U.logprobs.content), (U == null ? void 0 : U.delta) == null)
              return;
            const x = U.delta;
            if (x.content != null && (d || (p.enqueue({ type: "text-start", id: "0" }), d = !0), p.enqueue({
              type: "text-delta",
              id: "0",
              delta: x.content
            })), x.tool_calls != null)
              for (const J of x.tool_calls) {
                const le = J.index;
                if (a[le] == null) {
                  if (J.type !== "function")
                    throw new Eo({
                      data: J,
                      message: "Expected 'function' type."
                    });
                  if (J.id == null)
                    throw new Eo({
                      data: J,
                      message: "Expected 'id' to be a string."
                    });
                  if (((M = J.function) == null ? void 0 : M.name) == null)
                    throw new Eo({
                      data: J,
                      message: "Expected 'function.name' to be a string."
                    });
                  p.enqueue({
                    type: "tool-input-start",
                    id: J.id,
                    toolName: J.function.name
                  }), a[le] = {
                    id: J.id,
                    type: "function",
                    function: {
                      name: J.function.name,
                      arguments: (E = J.function.arguments) != null ? E : ""
                    },
                    hasFinished: !1
                  };
                  const ye = a[le];
                  ((z = ye.function) == null ? void 0 : z.name) != null && ((B = ye.function) == null ? void 0 : B.arguments) != null && (ye.function.arguments.length > 0 && p.enqueue({
                    type: "tool-input-delta",
                    id: ye.id,
                    delta: ye.function.arguments
                  }), Os(ye.function.arguments) && (p.enqueue({
                    type: "tool-input-end",
                    id: ye.id
                  }), p.enqueue({
                    type: "tool-call",
                    toolCallId: (H = ye.id) != null ? H : Fe(),
                    toolName: ye.function.name,
                    input: ye.function.arguments
                  }), ye.hasFinished = !0));
                  continue;
                }
                const ve = a[le];
                ve.hasFinished || (((Z = J.function) == null ? void 0 : Z.arguments) != null && (ve.function.arguments += (te = (F = J.function) == null ? void 0 : F.arguments) != null ? te : ""), p.enqueue({
                  type: "tool-input-delta",
                  id: ve.id,
                  delta: (we = J.function.arguments) != null ? we : ""
                }), ((Ee = ve.function) == null ? void 0 : Ee.name) != null && ((ie = ve.function) == null ? void 0 : ie.arguments) != null && Os(ve.function.arguments) && (p.enqueue({
                  type: "tool-input-end",
                  id: ve.id
                }), p.enqueue({
                  type: "tool-call",
                  toolCallId: (Ce = ve.id) != null ? Ce : Fe(),
                  toolName: ve.function.name,
                  input: ve.function.arguments
                }), ve.hasFinished = !0));
              }
            if (x.annotations != null)
              for (const J of x.annotations)
                p.enqueue({
                  type: "source",
                  sourceType: "url",
                  id: Fe(),
                  url: J.url,
                  title: J.title
                });
          },
          flush(y) {
            d && y.enqueue({ type: "text-end", id: "0" }), y.enqueue({
              type: "finish",
              finishReason: s,
              usage: u,
              ...h != null ? { providerMetadata: h } : {}
            });
          }
        })
      ),
      request: { body: o },
      response: { headers: n }
    };
  }
}, cf = f({
  prompt_tokens: S().nullish(),
  completion_tokens: S().nullish(),
  total_tokens: S().nullish(),
  prompt_tokens_details: f({
    cached_tokens: S().nullish()
  }).nullish(),
  completion_tokens_details: f({
    reasoning_tokens: S().nullish(),
    accepted_prediction_tokens: S().nullish(),
    rejected_prediction_tokens: S().nullish()
  }).nullish()
}).nullish(), FI = f({
  id: c().nullish(),
  created: S().nullish(),
  model: c().nullish(),
  choices: A(
    f({
      message: f({
        role: k("assistant").nullish(),
        content: c().nullish(),
        tool_calls: A(
          f({
            id: c().nullish(),
            type: k("function"),
            function: f({
              name: c(),
              arguments: c()
            })
          })
        ).nullish(),
        annotations: A(
          f({
            type: k("url_citation"),
            start_index: S(),
            end_index: S(),
            url: c(),
            title: c()
          })
        ).nullish()
      }),
      index: S(),
      logprobs: f({
        content: A(
          f({
            token: c(),
            logprob: S(),
            top_logprobs: A(
              f({
                token: c(),
                logprob: S()
              })
            )
          })
        ).nullish()
      }).nullish(),
      finish_reason: c().nullish()
    })
  ),
  usage: cf
}), JI = Y([
  f({
    id: c().nullish(),
    created: S().nullish(),
    model: c().nullish(),
    choices: A(
      f({
        delta: f({
          role: ne(["assistant"]).nullish(),
          content: c().nullish(),
          tool_calls: A(
            f({
              index: S(),
              id: c().nullish(),
              type: k("function").nullish(),
              function: f({
                name: c().nullish(),
                arguments: c().nullish()
              })
            })
          ).nullish(),
          annotations: A(
            f({
              type: k("url_citation"),
              start_index: S(),
              end_index: S(),
              url: c(),
              title: c()
            })
          ).nullish()
        }).nullish(),
        logprobs: f({
          content: A(
            f({
              token: c(),
              logprob: S(),
              top_logprobs: A(
                f({
                  token: c(),
                  logprob: S()
                })
              )
            })
          ).nullish()
        }).nullish(),
        finish_reason: c().nullish(),
        index: S()
      })
    ),
    usage: cf
  }),
  Va
]);
function df(e) {
  return (e.startsWith("o") || e.startsWith("gpt-5")) && !e.startsWith("gpt-5-chat");
}
function VI(e) {
  return e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat");
}
function GI(e) {
  return e.startsWith("gpt-4") || e.startsWith("gpt-5-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") || e.startsWith("o3") || e.startsWith("o4-mini");
}
function BI(e) {
  var t, r;
  return df(e) ? (r = (t = WI[e]) == null ? void 0 : t.systemMessageMode) != null ? r : "developer" : "system";
}
var WI = {
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
function HI({
  prompt: e,
  user: t = "user",
  assistant: r = "assistant"
}) {
  let o = "";
  e[0].role === "system" && (o += `${e[0].content}

`, e = e.slice(1));
  for (const { role: n, content: i } of e)
    switch (n) {
      case "system":
        throw new Jt({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const a = i.map((s) => {
          switch (s.type) {
            case "text":
              return s.text;
          }
        }).filter(Boolean).join("");
        o += `${t}:
${a}

`;
        break;
      }
      case "assistant": {
        const a = i.map((s) => {
          switch (s.type) {
            case "text":
              return s.text;
            case "tool-call":
              throw new $e({
                functionality: "tool-call messages"
              });
          }
        }).join("");
        o += `${r}:
${a}

`;
        break;
      }
      case "tool":
        throw new $e({
          functionality: "tool messages"
        });
      default: {
        const a = n;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  return o += `${r}:
`, {
    prompt: o,
    stopSequences: [`
${t}:`]
  };
}
function Vs({
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
function Gs(e) {
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
var Bs = f({
  /**
  Echo back the prompt in addition to the completion.
     */
  echo: V().optional(),
  /**
  Modify the likelihood of specified tokens appearing in the completion.
  
  Accepts a JSON object that maps tokens (specified by their token ID in
  the GPT tokenizer) to an associated bias value from -100 to 100. You
  can use this tokenizer tool to convert text to token IDs. Mathematically,
  the bias is added to the logits generated by the model prior to sampling.
  The exact effect will vary per model, but values between -1 and 1 should
  decrease or increase likelihood of selection; values like -100 or 100
  should result in a ban or exclusive selection of the relevant token.
  
  As an example, you can pass {"50256": -100} to prevent the <|endoftext|>
  token from being generated.
   */
  logitBias: je(c(), S()).optional(),
  /**
  The suffix that comes after a completion of inserted text.
   */
  suffix: c().optional(),
  /**
  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.
   */
  user: c().optional(),
  /**
  Return the log probabilities of the tokens. Including logprobs will increase
  the response size and can slow down response times. However, it can
  be useful to better understand how the model is behaving.
  Setting to true will return the log probabilities of the tokens that
  were generated.
  Setting to a number will return the log probabilities of the top n
  tokens that were generated.
     */
  logprobs: Y([V(), S()]).optional()
}), KI = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      // No URLs are supported for completion models.
    }, this.modelId = e, this.config = t;
  }
  get providerOptionsName() {
    return this.config.provider.split(".")[0].trim();
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: r,
    topP: o,
    topK: n,
    frequencyPenalty: i,
    presencePenalty: a,
    stopSequences: s,
    responseFormat: u,
    tools: l,
    toolChoice: d,
    seed: h,
    providerOptions: y
  }) {
    const p = [], g = {
      ...await Ge({
        provider: "openai",
        providerOptions: y,
        schema: Bs
      }),
      ...await Ge({
        provider: this.providerOptionsName,
        providerOptions: y,
        schema: Bs
      })
    };
    n != null && p.push({ type: "unsupported-setting", setting: "topK" }), l != null && l.length && p.push({ type: "unsupported-setting", setting: "tools" }), d != null && p.push({ type: "unsupported-setting", setting: "toolChoice" }), u != null && u.type !== "text" && p.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: _, stopSequences: v } = HI({ prompt: e }), m = [...v ?? [], ...s ?? []];
    return {
      args: {
        // model id:
        model: this.modelId,
        // model specific settings:
        echo: g.echo,
        logit_bias: g.logitBias,
        logprobs: (g == null ? void 0 : g.logprobs) === !0 ? 0 : (g == null ? void 0 : g.logprobs) === !1 || g == null ? void 0 : g.logprobs,
        suffix: g.suffix,
        user: g.user,
        // standardized settings:
        max_tokens: t,
        temperature: r,
        top_p: o,
        frequency_penalty: i,
        presence_penalty: a,
        seed: h,
        // prompt:
        prompt: _,
        // stop sequences:
        stop: m.length > 0 ? m : void 0
      },
      warnings: p
    };
  }
  async doGenerate(e) {
    var t, r, o;
    const { args: n, warnings: i } = await this.getArgs(e), {
      responseHeaders: a,
      value: s,
      rawValue: u
    } = await Se({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: xt,
      successfulResponseHandler: Je(
        YI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), l = s.choices[0], d = { openai: {} };
    return l.logprobs != null && (d.openai.logprobs = l.logprobs), {
      content: [{ type: "text", text: l.text }],
      usage: {
        inputTokens: (t = s.usage) == null ? void 0 : t.prompt_tokens,
        outputTokens: (r = s.usage) == null ? void 0 : r.completion_tokens,
        totalTokens: (o = s.usage) == null ? void 0 : o.total_tokens
      },
      finishReason: Gs(l.finish_reason),
      request: { body: n },
      response: {
        ...Vs(s),
        headers: a,
        body: u
      },
      providerMetadata: d,
      warnings: i
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), o = {
      ...t,
      stream: !0,
      stream_options: {
        include_usage: !0
      }
    }, { responseHeaders: n, value: i } = await Se({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: xt,
      successfulResponseHandler: sn(
        XI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let a = "unknown";
    const s = { openai: {} }, u = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let l = !0;
    return {
      stream: i.pipeThrough(
        new TransformStream({
          start(d) {
            d.enqueue({ type: "stream-start", warnings: r });
          },
          transform(d, h) {
            if (e.includeRawChunks && h.enqueue({ type: "raw", rawValue: d.rawValue }), !d.success) {
              a = "error", h.enqueue({ type: "error", error: d.error });
              return;
            }
            const y = d.value;
            if ("error" in y) {
              a = "error", h.enqueue({ type: "error", error: y.error });
              return;
            }
            l && (l = !1, h.enqueue({
              type: "response-metadata",
              ...Vs(y)
            }), h.enqueue({ type: "text-start", id: "0" })), y.usage != null && (u.inputTokens = y.usage.prompt_tokens, u.outputTokens = y.usage.completion_tokens, u.totalTokens = y.usage.total_tokens);
            const p = y.choices[0];
            (p == null ? void 0 : p.finish_reason) != null && (a = Gs(p.finish_reason)), (p == null ? void 0 : p.logprobs) != null && (s.openai.logprobs = p.logprobs), (p == null ? void 0 : p.text) != null && p.text.length > 0 && h.enqueue({
              type: "text-delta",
              id: "0",
              delta: p.text
            });
          },
          flush(d) {
            l || d.enqueue({ type: "text-end", id: "0" }), d.enqueue({
              type: "finish",
              finishReason: a,
              providerMetadata: s,
              usage: u
            });
          }
        })
      ),
      request: { body: o },
      response: { headers: n }
    };
  }
}, pf = f({
  prompt_tokens: S(),
  completion_tokens: S(),
  total_tokens: S()
}), YI = f({
  id: c().nullish(),
  created: S().nullish(),
  model: c().nullish(),
  choices: A(
    f({
      text: c(),
      finish_reason: c(),
      logprobs: f({
        tokens: A(c()),
        token_logprobs: A(S()),
        top_logprobs: A(je(c(), S())).nullish()
      }).nullish()
    })
  ),
  usage: pf.nullish()
}), XI = Y([
  f({
    id: c().nullish(),
    created: S().nullish(),
    model: c().nullish(),
    choices: A(
      f({
        text: c(),
        finish_reason: c().nullish(),
        index: S(),
        logprobs: f({
          tokens: A(c()),
          token_logprobs: A(S()),
          top_logprobs: A(je(c(), S())).nullish()
        }).nullish()
      })
    ),
    usage: pf.nullish()
  }),
  Va
]), QI = f({
  /**
  The number of dimensions the resulting output embeddings should have.
  Only supported in text-embedding-3 and later models.
     */
  dimensions: S().optional(),
  /**
  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.
  */
  user: c().optional()
}), ek = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: r,
    providerOptions: o
  }) {
    var n;
    if (e.length > this.maxEmbeddingsPerCall)
      throw new ti({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const i = (n = await Ge({
      provider: "openai",
      providerOptions: o,
      schema: QI
    })) != null ? n : {}, {
      responseHeaders: a,
      value: s,
      rawValue: u
    } = await Se({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: i.dimensions,
        user: i.user
      },
      failedResponseHandler: xt,
      successfulResponseHandler: Je(
        tk
      ),
      abortSignal: r,
      fetch: this.config.fetch
    });
    return {
      embeddings: s.data.map((l) => l.embedding),
      usage: s.usage ? { tokens: s.usage.prompt_tokens } : void 0,
      response: { headers: a, body: u }
    };
  }
}, tk = f({
  data: A(f({ embedding: A(S()) })),
  usage: f({ prompt_tokens: S() }).nullish()
}), nk = {
  "dall-e-3": 1,
  "dall-e-2": 10,
  "gpt-image-1": 10
}, rk = /* @__PURE__ */ new Set(["gpt-image-1"]), ok = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get maxImagesPerCall() {
    var e;
    return (e = nk[this.modelId]) != null ? e : 1;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: r,
    aspectRatio: o,
    seed: n,
    providerOptions: i,
    headers: a,
    abortSignal: s
  }) {
    var u, l, d, h;
    const y = [];
    o != null && y.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), n != null && y.push({ type: "unsupported-setting", setting: "seed" });
    const p = (d = (l = (u = this.config._internal) == null ? void 0 : u.currentDate) == null ? void 0 : l.call(u)) != null ? d : /* @__PURE__ */ new Date(), { value: g, responseHeaders: _ } = await Se({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), a),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: r,
        ...(h = i.openai) != null ? h : {},
        ...rk.has(this.modelId) ? {} : { response_format: "b64_json" }
      },
      failedResponseHandler: xt,
      successfulResponseHandler: Je(
        ik
      ),
      abortSignal: s,
      fetch: this.config.fetch
    });
    return {
      images: g.data.map((v) => v.b64_json),
      warnings: y,
      response: {
        timestamp: p,
        modelId: this.modelId,
        headers: _
      },
      providerMetadata: {
        openai: {
          images: g.data.map(
            (v) => v.revised_prompt ? {
              revisedPrompt: v.revised_prompt
            } : null
          )
        }
      }
    };
  }
}, ik = f({
  data: A(
    f({ b64_json: c(), revised_prompt: c().optional() })
  )
}), ak = f({
  code: c().nullish(),
  containerId: c()
}), sk = f({
  outputs: A(
    Ae("type", [
      f({ type: k("logs"), logs: c() }),
      f({ type: k("image"), url: c() })
    ])
  ).nullish()
}), uk = f({
  container: Y([
    c(),
    f({
      fileIds: A(c()).optional()
    })
  ]).optional()
}), lk = Ft({
  id: "openai.code_interpreter",
  name: "code_interpreter",
  inputSchema: ak,
  outputSchema: sk
}), ck = (e = {}) => lk(e), mf = f({
  key: c(),
  type: ne(["eq", "ne", "gt", "gte", "lt", "lte"]),
  value: Y([c(), S(), V()])
}), ff = f({
  type: ne(["and", "or"]),
  filters: A(
    Y([mf, ao(() => ff)])
  )
}), dk = f({
  vectorStoreIds: A(c()),
  maxNumResults: S().optional(),
  ranking: f({
    ranker: c().optional(),
    scoreThreshold: S().optional()
  }).optional(),
  filters: Y([mf, ff]).optional()
}), pk = f({
  queries: A(c()),
  results: A(
    f({
      attributes: je(c(), ue()),
      fileId: c(),
      filename: c(),
      score: S(),
      text: c()
    })
  ).nullable()
}), mk = Ft({
  id: "openai.file_search",
  name: "file_search",
  inputSchema: f({}),
  outputSchema: pk
}), fk = f({
  background: ne(["auto", "opaque", "transparent"]).optional(),
  inputFidelity: ne(["low", "high"]).optional(),
  inputImageMask: f({
    fileId: c().optional(),
    imageUrl: c().optional()
  }).optional(),
  model: c().optional(),
  moderation: ne(["auto"]).optional(),
  outputCompression: S().int().min(0).max(100).optional(),
  outputFormat: ne(["png", "jpeg", "webp"]).optional(),
  quality: ne(["auto", "low", "medium", "high"]).optional(),
  size: ne(["1024x1024", "1024x1536", "1536x1024", "auto"]).optional()
}).strict(), gk = f({
  result: c()
}), hk = Ft({
  id: "openai.image_generation",
  name: "image_generation",
  inputSchema: f({}),
  outputSchema: gk
}), vk = (e = {}) => hk(e), gf = f({
  action: f({
    type: k("exec"),
    command: A(c()),
    timeoutMs: S().optional(),
    user: c().optional(),
    workingDirectory: c().optional(),
    env: je(c(), c()).optional()
  })
}), hf = f({
  output: c()
}), yk = Ft({
  id: "openai.local_shell",
  name: "local_shell",
  inputSchema: gf,
  outputSchema: hf
}), _k = f({
  filters: f({
    allowedDomains: A(c()).optional()
  }).optional(),
  searchContextSize: ne(["low", "medium", "high"]).optional(),
  userLocation: f({
    type: k("approximate"),
    country: c().optional(),
    city: c().optional(),
    region: c().optional(),
    timezone: c().optional()
  }).optional()
}), bk = dt({
  id: "openai.web_search",
  name: "web_search",
  inputSchema: f({
    action: Ae("type", [
      f({
        type: k("search"),
        query: c().nullish()
      }),
      f({
        type: k("open_page"),
        url: c()
      }),
      f({
        type: k("find"),
        url: c(),
        pattern: c()
      })
    ]).nullish()
  })
}), wk = (e = {}) => bk(e), $k = f({
  /**
   * Search context size to use for the web search.
   * - high: Most comprehensive context, highest cost, slower response
   * - medium: Balanced context, cost, and latency (default)
   * - low: Least context, lowest cost, fastest response
   */
  searchContextSize: ne(["low", "medium", "high"]).optional(),
  /**
   * User location information to provide geographically relevant search results.
   */
  userLocation: f({
    /**
     * Type of location (always 'approximate')
     */
    type: k("approximate"),
    /**
     * Two-letter ISO country code (e.g., 'US', 'GB')
     */
    country: c().optional(),
    /**
     * City name (free text, e.g., 'Minneapolis')
     */
    city: c().optional(),
    /**
     * Region name (free text, e.g., 'Minnesota')
     */
    region: c().optional(),
    /**
     * IANA timezone (e.g., 'America/Chicago')
     */
    timezone: c().optional()
  }).optional()
}), Ik = dt({
  id: "openai.web_search_preview",
  name: "web_search_preview",
  inputSchema: f({
    action: Ae("type", [
      f({
        type: k("search"),
        query: c().nullish()
      }),
      f({
        type: k("open_page"),
        url: c()
      }),
      f({
        type: k("find"),
        url: c(),
        pattern: c()
      })
    ]).nullish()
  })
}), kk = {
  /**
   * The Code Interpreter tool allows models to write and run Python code in a
   * sandboxed environment to solve complex problems in domains like data analysis,
   * coding, and math.
   *
   * @param container - The container to use for the code interpreter.
   *
   * Must have name `code_interpreter`.
   */
  codeInterpreter: ck,
  /**
   * File search is a tool available in the Responses API. It enables models to
   * retrieve information in a knowledge base of previously uploaded files through
   * semantic and keyword search.
   *
   * Must have name `file_search`.
   *
   * @param vectorStoreIds - The vector store IDs to use for the file search.
   * @param maxNumResults - The maximum number of results to return.
   * @param ranking - The ranking options to use for the file search.
   * @param filters - The filters to use for the file search.
   */
  fileSearch: mk,
  /**
   * The image generation tool allows you to generate images using a text prompt,
   * and optionally image inputs. It leverages the GPT Image model,
   * and automatically optimizes text inputs for improved performance.
   *
   * Must have name `image_generation`.
   *
   * @param size - Image dimensions (e.g., 1024x1024, 1024x1536)
   * @param quality - Rendering quality (e.g. low, medium, high)
   * @param format - File output format
   * @param compression - Compression level (0-100%) for JPEG and WebP formats
   * @param background - Transparent or opaque
   */
  imageGeneration: vk,
  /**
   * Local shell is a tool that allows agents to run shell commands locally
   * on a machine you or the user provides.
   *
   * Supported models: `gpt-5-codex` and `codex-mini-latest`
   *
   * Must have name `local_shell`.
   */
  localShell: yk,
  /**
   * Web search allows models to access up-to-date information from the internet
   * and provide answers with sourced citations.
   *
   * Must have name `web_search_preview`.
   *
   * @param searchContextSize - The search context size to use for the web search.
   * @param userLocation - The user location to use for the web search.
   *
   * @deprecated Use `webSearch` instead.
   */
  webSearchPreview: Ik,
  /**
   * Web search allows models to access up-to-date information from the internet
   * and provide answers with sourced citations.
   *
   * Must have name `web_search`.
   *
   * @param filters - The filters to use for the web search.
   * @param searchContextSize - The search context size to use for the web search.
   * @param userLocation - The user location to use for the web search.
   */
  webSearch: wk
};
function Ws(e, t) {
  return t ? t.some((r) => e.startsWith(r)) : !1;
}
async function xk({
  prompt: e,
  systemMessageMode: t,
  fileIdPrefixes: r,
  store: o,
  hasLocalShellTool: n = !1
}) {
  var i, a, s, u, l, d, h, y, p;
  const g = [], _ = [];
  for (const { role: v, content: m } of e)
    switch (v) {
      case "system": {
        switch (t) {
          case "system": {
            g.push({ role: "system", content: m });
            break;
          }
          case "developer": {
            g.push({ role: "developer", content: m });
            break;
          }
          case "remove": {
            _.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const b = t;
            throw new Error(
              `Unsupported system message mode: ${b}`
            );
          }
        }
        break;
      }
      case "user": {
        g.push({
          role: "user",
          content: m.map((b, $) => {
            var w, N, O;
            switch (b.type) {
              case "text":
                return { type: "input_text", text: b.text };
              case "file":
                if (b.mediaType.startsWith("image/")) {
                  const I = b.mediaType === "image/*" ? "image/jpeg" : b.mediaType;
                  return {
                    type: "input_image",
                    ...b.data instanceof URL ? { image_url: b.data.toString() } : typeof b.data == "string" && Ws(b.data, r) ? { file_id: b.data } : {
                      image_url: `data:${I};base64,${yt(b.data)}`
                    },
                    detail: (N = (w = b.providerOptions) == null ? void 0 : w.openai) == null ? void 0 : N.imageDetail
                  };
                } else {
                  if (b.mediaType === "application/pdf")
                    return b.data instanceof URL ? {
                      type: "input_file",
                      file_url: b.data.toString()
                    } : {
                      type: "input_file",
                      ...typeof b.data == "string" && Ws(b.data, r) ? { file_id: b.data } : {
                        filename: (O = b.filename) != null ? O : `part-${$}.pdf`,
                        file_data: `data:application/pdf;base64,${yt(b.data)}`
                      }
                    };
                  throw new $e({
                    functionality: `file part media type ${b.mediaType}`
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        const b = {}, $ = {};
        for (const w of m)
          switch (w.type) {
            case "text": {
              g.push({
                role: "assistant",
                content: [{ type: "output_text", text: w.text }],
                id: (s = (a = (i = w.providerOptions) == null ? void 0 : i.openai) == null ? void 0 : a.itemId) != null ? s : void 0
              });
              break;
            }
            case "tool-call": {
              if ($[w.toolCallId] = w, w.providerExecuted)
                break;
              if (n && w.toolName === "local_shell") {
                const N = gf.parse(w.input);
                g.push({
                  type: "local_shell_call",
                  call_id: w.toolCallId,
                  id: (d = (l = (u = w.providerOptions) == null ? void 0 : u.openai) == null ? void 0 : l.itemId) != null ? d : void 0,
                  action: {
                    type: "exec",
                    command: N.action.command,
                    timeout_ms: N.action.timeoutMs,
                    user: N.action.user,
                    working_directory: N.action.workingDirectory,
                    env: N.action.env
                  }
                });
                break;
              }
              g.push({
                type: "function_call",
                call_id: w.toolCallId,
                name: w.toolName,
                arguments: JSON.stringify(w.input),
                id: (p = (y = (h = w.providerOptions) == null ? void 0 : h.openai) == null ? void 0 : y.itemId) != null ? p : void 0
              });
              break;
            }
            // assistant tool result parts are from provider-executed tools:
            case "tool-result": {
              o ? g.push({ type: "item_reference", id: w.toolCallId }) : _.push({
                type: "other",
                message: `Results for OpenAI tool ${w.toolName} are not sent to the API when store is false`
              });
              break;
            }
            case "reasoning": {
              const N = await Ge({
                provider: "openai",
                providerOptions: w.providerOptions,
                schema: Sk
              }), O = N == null ? void 0 : N.itemId;
              if (O != null) {
                const I = b[O];
                if (o)
                  I === void 0 && (g.push({ type: "item_reference", id: O }), b[O] = {
                    type: "reasoning",
                    id: O,
                    summary: []
                  });
                else {
                  const C = [];
                  w.text.length > 0 ? C.push({
                    type: "summary_text",
                    text: w.text
                  }) : I !== void 0 && _.push({
                    type: "other",
                    message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(w)}.`
                  }), I === void 0 ? (b[O] = {
                    type: "reasoning",
                    id: O,
                    encrypted_content: N == null ? void 0 : N.reasoningEncryptedContent,
                    summary: C
                  }, g.push(b[O])) : I.summary.push(...C);
                }
              } else
                _.push({
                  type: "other",
                  message: `Non-OpenAI reasoning parts are not supported. Skipping reasoning part: ${JSON.stringify(w)}.`
                });
              break;
            }
          }
        break;
      }
      case "tool": {
        for (const b of m) {
          const $ = b.output;
          if (n && b.toolName === "local_shell" && $.type === "json") {
            g.push({
              type: "local_shell_call_output",
              call_id: b.toolCallId,
              output: hf.parse($.value).output
            });
            break;
          }
          let w;
          switch ($.type) {
            case "text":
            case "error-text":
              w = $.value;
              break;
            case "content":
            case "json":
            case "error-json":
              w = JSON.stringify($.value);
              break;
          }
          g.push({
            type: "function_call_output",
            call_id: b.toolCallId,
            output: w
          });
        }
        break;
      }
      default: {
        const b = v;
        throw new Error(`Unsupported role: ${b}`);
      }
    }
  return { input: g, warnings: _ };
}
var Sk = f({
  itemId: c().nullish(),
  reasoningEncryptedContent: c().nullish()
});
function Hs({
  finishReason: e,
  hasFunctionCall: t
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
function Tk({
  tools: e,
  toolChoice: t,
  strictJsonSchema: r
}) {
  e = e != null && e.length ? e : void 0;
  const o = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: o };
  const n = [];
  for (const a of e)
    switch (a.type) {
      case "function":
        n.push({
          type: "function",
          name: a.name,
          description: a.description,
          parameters: a.inputSchema,
          strict: r
        });
        break;
      case "provider-defined": {
        switch (a.id) {
          case "openai.file_search": {
            const s = dk.parse(a.args);
            n.push({
              type: "file_search",
              vector_store_ids: s.vectorStoreIds,
              max_num_results: s.maxNumResults,
              ranking_options: s.ranking ? {
                ranker: s.ranking.ranker,
                score_threshold: s.ranking.scoreThreshold
              } : void 0,
              filters: s.filters
            });
            break;
          }
          case "openai.local_shell": {
            n.push({
              type: "local_shell"
            });
            break;
          }
          case "openai.web_search_preview": {
            const s = $k.parse(a.args);
            n.push({
              type: "web_search_preview",
              search_context_size: s.searchContextSize,
              user_location: s.userLocation
            });
            break;
          }
          case "openai.web_search": {
            const s = _k.parse(a.args);
            n.push({
              type: "web_search",
              filters: s.filters != null ? { allowed_domains: s.filters.allowedDomains } : void 0,
              search_context_size: s.searchContextSize,
              user_location: s.userLocation
            });
            break;
          }
          case "openai.code_interpreter": {
            const s = uk.parse(a.args);
            n.push({
              type: "code_interpreter",
              container: s.container == null ? { type: "auto", file_ids: void 0 } : typeof s.container == "string" ? s.container : { type: "auto", file_ids: s.container.fileIds }
            });
            break;
          }
          case "openai.image_generation": {
            const s = fk.parse(a.args);
            n.push({
              type: "image_generation",
              background: s.background,
              input_fidelity: s.inputFidelity,
              input_image_mask: s.inputImageMask ? {
                file_id: s.inputImageMask.fileId,
                image_url: s.inputImageMask.imageUrl
              } : void 0,
              model: s.model,
              size: s.size,
              quality: s.quality,
              moderation: s.moderation,
              output_format: s.outputFormat,
              output_compression: s.outputCompression
            });
            break;
          }
        }
        break;
      }
      default:
        o.push({ type: "unsupported-tool", tool: a });
        break;
    }
  if (t == null)
    return { tools: n, toolChoice: void 0, toolWarnings: o };
  const i = t.type;
  switch (i) {
    case "auto":
    case "none":
    case "required":
      return { tools: n, toolChoice: i, toolWarnings: o };
    case "tool":
      return {
        tools: n,
        toolChoice: t.toolName === "code_interpreter" || t.toolName === "file_search" || t.toolName === "image_generation" || t.toolName === "web_search_preview" || t.toolName === "web_search" ? { type: t.toolName } : { type: "function", name: t.toolName },
        toolWarnings: o
      };
    default: {
      const a = i;
      throw new $e({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
var vf = f({
  type: k("web_search_call"),
  id: c(),
  status: c(),
  action: Ae("type", [
    f({
      type: k("search"),
      query: c().nullish()
    }),
    f({
      type: k("open_page"),
      url: c()
    }),
    f({
      type: k("find"),
      url: c(),
      pattern: c()
    })
  ]).nullish()
}), yf = f({
  type: k("file_search_call"),
  id: c(),
  queries: A(c()),
  results: A(
    f({
      attributes: je(c(), ue()),
      file_id: c(),
      filename: c(),
      score: S(),
      text: c()
    })
  ).nullish()
}), _f = f({
  type: k("code_interpreter_call"),
  id: c(),
  code: c().nullable(),
  container_id: c(),
  outputs: A(
    Ae("type", [
      f({ type: k("logs"), logs: c() }),
      f({ type: k("image"), url: c() })
    ])
  ).nullable()
}), bf = f({
  type: k("local_shell_call"),
  id: c(),
  call_id: c(),
  action: f({
    type: k("exec"),
    command: A(c()),
    timeout_ms: S().optional(),
    user: c().optional(),
    working_directory: c().optional(),
    env: je(c(), c()).optional()
  })
}), wf = f({
  type: k("image_generation_call"),
  id: c(),
  result: c()
}), $f = 20, If = A(
  f({
    token: c(),
    logprob: S(),
    top_logprobs: A(
      f({
        token: c(),
        logprob: S()
      })
    )
  })
), Ek = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      "image/*": [/^https?:\/\/.*$/],
      "application/pdf": [/^https?:\/\/.*$/]
    }, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    maxOutputTokens: e,
    temperature: t,
    stopSequences: r,
    topP: o,
    topK: n,
    presencePenalty: i,
    frequencyPenalty: a,
    seed: s,
    prompt: u,
    providerOptions: l,
    tools: d,
    toolChoice: h,
    responseFormat: y
  }) {
    var p, g, _, v;
    const m = [], b = ex(this.modelId);
    n != null && m.push({ type: "unsupported-setting", setting: "topK" }), s != null && m.push({ type: "unsupported-setting", setting: "seed" }), i != null && m.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), a != null && m.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), r != null && m.push({ type: "unsupported-setting", setting: "stopSequences" });
    const $ = await Ge({
      provider: "openai",
      providerOptions: l,
      schema: tx
    }), { input: w, warnings: N } = await xk({
      prompt: u,
      systemMessageMode: b.systemMessageMode,
      fileIdPrefixes: this.config.fileIdPrefixes,
      store: (p = $ == null ? void 0 : $.store) != null ? p : !0,
      hasLocalShellTool: R("openai.local_shell")
    });
    m.push(...N);
    const O = (g = $ == null ? void 0 : $.strictJsonSchema) != null ? g : !1;
    let I = $ == null ? void 0 : $.include;
    function C(F) {
      I = I != null ? [...I, F] : [F];
    }
    function R(F) {
      return (d == null ? void 0 : d.find(
        (te) => te.type === "provider-defined" && te.id === F
      )) != null;
    }
    const M = typeof ($ == null ? void 0 : $.logprobs) == "number" ? $ == null ? void 0 : $.logprobs : ($ == null ? void 0 : $.logprobs) === !0 ? $f : void 0;
    M && C("message.output_text.logprobs");
    const E = (_ = d == null ? void 0 : d.find(
      (F) => F.type === "provider-defined" && (F.id === "openai.web_search" || F.id === "openai.web_search_preview")
    )) == null ? void 0 : _.name;
    E && C("web_search_call.action.sources"), R("openai.code_interpreter") && C("code_interpreter_call.outputs");
    const z = {
      model: this.modelId,
      input: w,
      temperature: t,
      top_p: o,
      max_output_tokens: e,
      ...((y == null ? void 0 : y.type) === "json" || ($ == null ? void 0 : $.textVerbosity)) && {
        text: {
          ...(y == null ? void 0 : y.type) === "json" && {
            format: y.schema != null ? {
              type: "json_schema",
              strict: O,
              name: (v = y.name) != null ? v : "response",
              description: y.description,
              schema: y.schema
            } : { type: "json_object" }
          },
          ...($ == null ? void 0 : $.textVerbosity) && {
            verbosity: $.textVerbosity
          }
        }
      },
      // provider options:
      max_tool_calls: $ == null ? void 0 : $.maxToolCalls,
      metadata: $ == null ? void 0 : $.metadata,
      parallel_tool_calls: $ == null ? void 0 : $.parallelToolCalls,
      previous_response_id: $ == null ? void 0 : $.previousResponseId,
      store: $ == null ? void 0 : $.store,
      user: $ == null ? void 0 : $.user,
      instructions: $ == null ? void 0 : $.instructions,
      service_tier: $ == null ? void 0 : $.serviceTier,
      include: I,
      prompt_cache_key: $ == null ? void 0 : $.promptCacheKey,
      safety_identifier: $ == null ? void 0 : $.safetyIdentifier,
      top_logprobs: M,
      // model-specific settings:
      ...b.isReasoningModel && (($ == null ? void 0 : $.reasoningEffort) != null || ($ == null ? void 0 : $.reasoningSummary) != null) && {
        reasoning: {
          ...($ == null ? void 0 : $.reasoningEffort) != null && {
            effort: $.reasoningEffort
          },
          ...($ == null ? void 0 : $.reasoningSummary) != null && {
            summary: $.reasoningSummary
          }
        }
      },
      ...b.requiredAutoTruncation && {
        truncation: "auto"
      }
    };
    b.isReasoningModel ? (z.temperature != null && (z.temperature = void 0, m.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), z.top_p != null && (z.top_p = void 0, m.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    }))) : (($ == null ? void 0 : $.reasoningEffort) != null && m.push({
      type: "unsupported-setting",
      setting: "reasoningEffort",
      details: "reasoningEffort is not supported for non-reasoning models"
    }), ($ == null ? void 0 : $.reasoningSummary) != null && m.push({
      type: "unsupported-setting",
      setting: "reasoningSummary",
      details: "reasoningSummary is not supported for non-reasoning models"
    })), ($ == null ? void 0 : $.serviceTier) === "flex" && !b.supportsFlexProcessing && (m.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), delete z.service_tier), ($ == null ? void 0 : $.serviceTier) === "priority" && !b.supportsPriorityProcessing && (m.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), delete z.service_tier);
    const {
      tools: B,
      toolChoice: H,
      toolWarnings: Z
    } = Tk({
      tools: d,
      toolChoice: h,
      strictJsonSchema: O
    });
    return {
      webSearchToolName: E,
      args: {
        ...z,
        tools: B,
        tool_choice: H
      },
      warnings: [...m, ...Z]
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u, l, d, h, y, p, g, _, v, m, b, $;
    const {
      args: w,
      warnings: N,
      webSearchToolName: O
    } = await this.getArgs(e), I = this.config.url({
      path: "/responses",
      modelId: this.modelId
    }), {
      responseHeaders: C,
      value: R,
      rawValue: M
    } = await Se({
      url: I,
      headers: Ne(this.config.headers(), e.headers),
      body: w,
      failedResponseHandler: xt,
      successfulResponseHandler: Je(
        f({
          id: c(),
          created_at: S(),
          error: f({
            code: c(),
            message: c()
          }).nullish(),
          model: c(),
          output: A(
            Ae("type", [
              f({
                type: k("message"),
                role: k("assistant"),
                id: c(),
                content: A(
                  f({
                    type: k("output_text"),
                    text: c(),
                    logprobs: If.nullish(),
                    annotations: A(
                      Ae("type", [
                        f({
                          type: k("url_citation"),
                          start_index: S(),
                          end_index: S(),
                          url: c(),
                          title: c()
                        }),
                        f({
                          type: k("file_citation"),
                          file_id: c(),
                          filename: c().nullish(),
                          index: S().nullish(),
                          start_index: S().nullish(),
                          end_index: S().nullish(),
                          quote: c().nullish()
                        }),
                        f({
                          type: k("container_file_citation")
                        })
                      ])
                    )
                  })
                )
              }),
              vf,
              yf,
              _f,
              wf,
              bf,
              f({
                type: k("function_call"),
                call_id: c(),
                name: c(),
                arguments: c(),
                id: c()
              }),
              f({
                type: k("computer_call"),
                id: c(),
                status: c().optional()
              }),
              f({
                type: k("reasoning"),
                id: c(),
                encrypted_content: c().nullish(),
                summary: A(
                  f({
                    type: k("summary_text"),
                    text: c()
                  })
                )
              })
            ])
          ),
          service_tier: c().nullish(),
          incomplete_details: f({ reason: c() }).nullish(),
          usage: kf
        })
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    if (R.error)
      throw new Ze({
        message: R.error.message,
        url: I,
        requestBodyValues: w,
        statusCode: 400,
        responseHeaders: C,
        responseBody: M,
        isRetryable: !1
      });
    const E = [], z = [];
    let B = !1;
    for (const Z of R.output)
      switch (Z.type) {
        case "reasoning": {
          Z.summary.length === 0 && Z.summary.push({ type: "summary_text", text: "" });
          for (const F of Z.summary)
            E.push({
              type: "reasoning",
              text: F.text,
              providerMetadata: {
                openai: {
                  itemId: Z.id,
                  reasoningEncryptedContent: (t = Z.encrypted_content) != null ? t : null
                }
              }
            });
          break;
        }
        case "image_generation_call": {
          E.push({
            type: "tool-call",
            toolCallId: Z.id,
            toolName: "image_generation",
            input: "{}",
            providerExecuted: !0
          }), E.push({
            type: "tool-result",
            toolCallId: Z.id,
            toolName: "image_generation",
            result: {
              result: Z.result
            },
            providerExecuted: !0
          });
          break;
        }
        case "local_shell_call": {
          E.push({
            type: "tool-call",
            toolCallId: Z.call_id,
            toolName: "local_shell",
            input: JSON.stringify({ action: Z.action }),
            providerMetadata: {
              openai: {
                itemId: Z.id
              }
            }
          });
          break;
        }
        case "message": {
          for (const F of Z.content) {
            (o = (r = e.providerOptions) == null ? void 0 : r.openai) != null && o.logprobs && F.logprobs && z.push(F.logprobs), E.push({
              type: "text",
              text: F.text,
              providerMetadata: {
                openai: {
                  itemId: Z.id
                }
              }
            });
            for (const te of F.annotations)
              te.type === "url_citation" ? E.push({
                type: "source",
                sourceType: "url",
                id: (a = (i = (n = this.config).generateId) == null ? void 0 : i.call(n)) != null ? a : Fe(),
                url: te.url,
                title: te.title
              }) : te.type === "file_citation" && E.push({
                type: "source",
                sourceType: "document",
                id: (l = (u = (s = this.config).generateId) == null ? void 0 : u.call(s)) != null ? l : Fe(),
                mediaType: "text/plain",
                title: (h = (d = te.quote) != null ? d : te.filename) != null ? h : "Document",
                filename: (y = te.filename) != null ? y : te.file_id
              });
          }
          break;
        }
        case "function_call": {
          B = !0, E.push({
            type: "tool-call",
            toolCallId: Z.call_id,
            toolName: Z.name,
            input: Z.arguments,
            providerMetadata: {
              openai: {
                itemId: Z.id
              }
            }
          });
          break;
        }
        case "web_search_call": {
          E.push({
            type: "tool-call",
            toolCallId: Z.id,
            toolName: O ?? "web_search",
            input: JSON.stringify({ action: Z.action }),
            providerExecuted: !0
          }), E.push({
            type: "tool-result",
            toolCallId: Z.id,
            toolName: O ?? "web_search",
            result: { status: Z.status },
            providerExecuted: !0
          });
          break;
        }
        case "computer_call": {
          E.push({
            type: "tool-call",
            toolCallId: Z.id,
            toolName: "computer_use",
            input: "",
            providerExecuted: !0
          }), E.push({
            type: "tool-result",
            toolCallId: Z.id,
            toolName: "computer_use",
            result: {
              type: "computer_use_tool_result",
              status: Z.status || "completed"
            },
            providerExecuted: !0
          });
          break;
        }
        case "file_search_call": {
          E.push({
            type: "tool-call",
            toolCallId: Z.id,
            toolName: "file_search",
            input: "{}",
            providerExecuted: !0
          }), E.push({
            type: "tool-result",
            toolCallId: Z.id,
            toolName: "file_search",
            result: {
              queries: Z.queries,
              results: (g = (p = Z.results) == null ? void 0 : p.map((F) => ({
                attributes: F.attributes,
                fileId: F.file_id,
                filename: F.filename,
                score: F.score,
                text: F.text
              }))) != null ? g : null
            },
            providerExecuted: !0
          });
          break;
        }
        case "code_interpreter_call": {
          E.push({
            type: "tool-call",
            toolCallId: Z.id,
            toolName: "code_interpreter",
            input: JSON.stringify({
              code: Z.code,
              containerId: Z.container_id
            }),
            providerExecuted: !0
          }), E.push({
            type: "tool-result",
            toolCallId: Z.id,
            toolName: "code_interpreter",
            result: {
              outputs: Z.outputs
            },
            providerExecuted: !0
          });
          break;
        }
      }
    const H = {
      openai: { responseId: R.id }
    };
    return z.length > 0 && (H.openai.logprobs = z), typeof R.service_tier == "string" && (H.openai.serviceTier = R.service_tier), {
      content: E,
      finishReason: Hs({
        finishReason: (_ = R.incomplete_details) == null ? void 0 : _.reason,
        hasFunctionCall: B
      }),
      usage: {
        inputTokens: R.usage.input_tokens,
        outputTokens: R.usage.output_tokens,
        totalTokens: R.usage.input_tokens + R.usage.output_tokens,
        reasoningTokens: (m = (v = R.usage.output_tokens_details) == null ? void 0 : v.reasoning_tokens) != null ? m : void 0,
        cachedInputTokens: ($ = (b = R.usage.input_tokens_details) == null ? void 0 : b.cached_tokens) != null ? $ : void 0
      },
      request: { body: w },
      response: {
        id: R.id,
        timestamp: new Date(R.created_at * 1e3),
        modelId: R.model,
        headers: C,
        body: M
      },
      providerMetadata: H,
      warnings: N
    };
  }
  async doStream(e) {
    const {
      args: t,
      warnings: r,
      webSearchToolName: o
    } = await this.getArgs(e), { responseHeaders: n, value: i } = await Se({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: xt,
      successfulResponseHandler: sn(
        qk
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), a = this;
    let s = "unknown";
    const u = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, l = [];
    let d = null;
    const h = {};
    let y = !1;
    const p = {};
    let g;
    return {
      stream: i.pipeThrough(
        new TransformStream({
          start(_) {
            _.enqueue({ type: "stream-start", warnings: r });
          },
          transform(_, v) {
            var m, b, $, w, N, O, I, C, R, M, E, z, B, H, Z, F, te, we, Ee, ie, Ce, oe, U;
            if (e.includeRawChunks && v.enqueue({ type: "raw", rawValue: _.rawValue }), !_.success) {
              s = "error", v.enqueue({ type: "error", error: _.error });
              return;
            }
            const x = _.value;
            if (Sf(x))
              x.item.type === "function_call" ? (h[x.output_index] = {
                toolName: x.item.name,
                toolCallId: x.item.call_id
              }, v.enqueue({
                type: "tool-input-start",
                id: x.item.call_id,
                toolName: x.item.name
              })) : x.item.type === "web_search_call" ? (h[x.output_index] = {
                toolName: o ?? "web_search",
                toolCallId: x.item.id
              }, v.enqueue({
                type: "tool-input-start",
                id: x.item.id,
                toolName: o ?? "web_search"
              })) : x.item.type === "computer_call" ? (h[x.output_index] = {
                toolName: "computer_use",
                toolCallId: x.item.id
              }, v.enqueue({
                type: "tool-input-start",
                id: x.item.id,
                toolName: "computer_use"
              })) : x.item.type === "code_interpreter_call" ? (h[x.output_index] = {
                toolName: "code_interpreter",
                toolCallId: x.item.id,
                codeInterpreter: {
                  containerId: x.item.container_id
                }
              }, v.enqueue({
                type: "tool-input-start",
                id: x.item.id,
                toolName: "code_interpreter"
              }), v.enqueue({
                type: "tool-input-delta",
                id: x.item.id,
                delta: `{"containerId":"${x.item.container_id}","code":"`
              })) : x.item.type === "file_search_call" ? v.enqueue({
                type: "tool-call",
                toolCallId: x.item.id,
                toolName: "file_search",
                input: "{}",
                providerExecuted: !0
              }) : x.item.type === "image_generation_call" ? v.enqueue({
                type: "tool-call",
                toolCallId: x.item.id,
                toolName: "image_generation",
                input: "{}",
                providerExecuted: !0
              }) : x.item.type === "message" ? v.enqueue({
                type: "text-start",
                id: x.item.id,
                providerMetadata: {
                  openai: {
                    itemId: x.item.id
                  }
                }
              }) : Hk(x) && (p[x.item.id] = {
                encryptedContent: x.item.encrypted_content,
                summaryParts: [0]
              }, v.enqueue({
                type: "reasoning-start",
                id: `${x.item.id}:0`,
                providerMetadata: {
                  openai: {
                    itemId: x.item.id,
                    reasoningEncryptedContent: (m = x.item.encrypted_content) != null ? m : null
                  }
                }
              }));
            else if (xf(x)) {
              if (x.item.type === "function_call")
                h[x.output_index] = void 0, y = !0, v.enqueue({
                  type: "tool-input-end",
                  id: x.item.call_id
                }), v.enqueue({
                  type: "tool-call",
                  toolCallId: x.item.call_id,
                  toolName: x.item.name,
                  input: x.item.arguments,
                  providerMetadata: {
                    openai: {
                      itemId: x.item.id
                    }
                  }
                });
              else if (x.item.type === "web_search_call")
                h[x.output_index] = void 0, v.enqueue({
                  type: "tool-input-end",
                  id: x.item.id
                }), v.enqueue({
                  type: "tool-call",
                  toolCallId: x.item.id,
                  toolName: "web_search",
                  input: JSON.stringify({ action: x.item.action }),
                  providerExecuted: !0
                }), v.enqueue({
                  type: "tool-result",
                  toolCallId: x.item.id,
                  toolName: "web_search",
                  result: { status: x.item.status },
                  providerExecuted: !0
                });
              else if (x.item.type === "computer_call")
                h[x.output_index] = void 0, v.enqueue({
                  type: "tool-input-end",
                  id: x.item.id
                }), v.enqueue({
                  type: "tool-call",
                  toolCallId: x.item.id,
                  toolName: "computer_use",
                  input: "",
                  providerExecuted: !0
                }), v.enqueue({
                  type: "tool-result",
                  toolCallId: x.item.id,
                  toolName: "computer_use",
                  result: {
                    type: "computer_use_tool_result",
                    status: x.item.status || "completed"
                  },
                  providerExecuted: !0
                });
              else if (x.item.type === "file_search_call")
                h[x.output_index] = void 0, v.enqueue({
                  type: "tool-result",
                  toolCallId: x.item.id,
                  toolName: "file_search",
                  result: {
                    queries: x.item.queries,
                    results: ($ = (b = x.item.results) == null ? void 0 : b.map((J) => ({
                      attributes: J.attributes,
                      fileId: J.file_id,
                      filename: J.filename,
                      score: J.score,
                      text: J.text
                    }))) != null ? $ : null
                  },
                  providerExecuted: !0
                });
              else if (x.item.type === "code_interpreter_call")
                h[x.output_index] = void 0, v.enqueue({
                  type: "tool-result",
                  toolCallId: x.item.id,
                  toolName: "code_interpreter",
                  result: {
                    outputs: x.item.outputs
                  },
                  providerExecuted: !0
                });
              else if (x.item.type === "image_generation_call")
                v.enqueue({
                  type: "tool-result",
                  toolCallId: x.item.id,
                  toolName: "image_generation",
                  result: {
                    result: x.item.result
                  },
                  providerExecuted: !0
                });
              else if (x.item.type === "local_shell_call")
                h[x.output_index] = void 0, v.enqueue({
                  type: "tool-call",
                  toolCallId: x.item.call_id,
                  toolName: "local_shell",
                  input: JSON.stringify({
                    action: {
                      type: "exec",
                      command: x.item.action.command,
                      timeoutMs: x.item.action.timeout_ms,
                      user: x.item.action.user,
                      workingDirectory: x.item.action.working_directory,
                      env: x.item.action.env
                    }
                  }),
                  providerMetadata: {
                    openai: { itemId: x.item.id }
                  }
                });
              else if (x.item.type === "message")
                v.enqueue({
                  type: "text-end",
                  id: x.item.id
                });
              else if (Fk(x)) {
                const J = p[x.item.id];
                for (const le of J.summaryParts)
                  v.enqueue({
                    type: "reasoning-end",
                    id: `${x.item.id}:${le}`,
                    providerMetadata: {
                      openai: {
                        itemId: x.item.id,
                        reasoningEncryptedContent: (w = x.item.encrypted_content) != null ? w : null
                      }
                    }
                  });
                delete p[x.item.id];
              }
            } else if (Gk(x)) {
              const J = h[x.output_index];
              J != null && v.enqueue({
                type: "tool-input-delta",
                id: J.toolCallId,
                delta: x.delta
              });
            } else if (Bk(x)) {
              const J = h[x.output_index];
              J != null && v.enqueue({
                type: "tool-input-delta",
                id: J.toolCallId,
                // The delta is code, which is embedding in a JSON string.
                // To escape it, we use JSON.stringify and slice to remove the outer quotes.
                delta: JSON.stringify(x.delta).slice(1, -1)
              });
            } else if (Wk(x)) {
              const J = h[x.output_index];
              J != null && (v.enqueue({
                type: "tool-input-delta",
                id: J.toolCallId,
                delta: '"}'
              }), v.enqueue({
                type: "tool-input-end",
                id: J.toolCallId
              }), v.enqueue({
                type: "tool-call",
                toolCallId: J.toolCallId,
                toolName: "code_interpreter",
                input: JSON.stringify({
                  code: x.code,
                  containerId: J.codeInterpreter.containerId
                }),
                providerExecuted: !0
              }));
            } else Vk(x) ? (d = x.response.id, v.enqueue({
              type: "response-metadata",
              id: x.response.id,
              timestamp: new Date(x.response.created_at * 1e3),
              modelId: x.response.model
            })) : Lk(x) ? (v.enqueue({
              type: "text-delta",
              id: x.item_id,
              delta: x.delta
            }), (O = (N = e.providerOptions) == null ? void 0 : N.openai) != null && O.logprobs && x.logprobs && l.push(x.logprobs)) : Yk(x) ? x.summary_index > 0 && ((I = p[x.item_id]) == null || I.summaryParts.push(
              x.summary_index
            ), v.enqueue({
              type: "reasoning-start",
              id: `${x.item_id}:${x.summary_index}`,
              providerMetadata: {
                openai: {
                  itemId: x.item_id,
                  reasoningEncryptedContent: (R = (C = p[x.item_id]) == null ? void 0 : C.encryptedContent) != null ? R : null
                }
              }
            })) : Xk(x) ? v.enqueue({
              type: "reasoning-delta",
              id: `${x.item_id}:${x.summary_index}`,
              delta: x.delta,
              providerMetadata: {
                openai: {
                  itemId: x.item_id
                }
              }
            }) : Jk(x) ? (s = Hs({
              finishReason: (M = x.response.incomplete_details) == null ? void 0 : M.reason,
              hasFunctionCall: y
            }), u.inputTokens = x.response.usage.input_tokens, u.outputTokens = x.response.usage.output_tokens, u.totalTokens = x.response.usage.input_tokens + x.response.usage.output_tokens, u.reasoningTokens = (z = (E = x.response.usage.output_tokens_details) == null ? void 0 : E.reasoning_tokens) != null ? z : void 0, u.cachedInputTokens = (H = (B = x.response.usage.input_tokens_details) == null ? void 0 : B.cached_tokens) != null ? H : void 0, typeof x.response.service_tier == "string" && (g = x.response.service_tier)) : Kk(x) ? x.annotation.type === "url_citation" ? v.enqueue({
              type: "source",
              sourceType: "url",
              id: (te = (F = (Z = a.config).generateId) == null ? void 0 : F.call(Z)) != null ? te : Fe(),
              url: x.annotation.url,
              title: x.annotation.title
            }) : x.annotation.type === "file_citation" && v.enqueue({
              type: "source",
              sourceType: "document",
              id: (ie = (Ee = (we = a.config).generateId) == null ? void 0 : Ee.call(we)) != null ? ie : Fe(),
              mediaType: "text/plain",
              title: (oe = (Ce = x.annotation.quote) != null ? Ce : x.annotation.filename) != null ? oe : "Document",
              filename: (U = x.annotation.filename) != null ? U : x.annotation.file_id
            }) : Qk(x) && v.enqueue({ type: "error", error: x });
          },
          flush(_) {
            const v = {
              openai: {
                responseId: d
              }
            };
            l.length > 0 && (v.openai.logprobs = l), g !== void 0 && (v.openai.serviceTier = g), _.enqueue({
              type: "finish",
              finishReason: s,
              usage: u,
              providerMetadata: v
            });
          }
        })
      ),
      request: { body: t },
      response: { headers: n }
    };
  }
}, kf = f({
  input_tokens: S(),
  input_tokens_details: f({ cached_tokens: S().nullish() }).nullish(),
  output_tokens: S(),
  output_tokens_details: f({ reasoning_tokens: S().nullish() }).nullish()
}), Ok = f({
  type: k("response.output_text.delta"),
  item_id: c(),
  delta: c(),
  logprobs: If.nullish()
}), Nk = f({
  type: k("error"),
  code: c(),
  message: c(),
  param: c().nullish(),
  sequence_number: S()
}), Ck = f({
  type: ne(["response.completed", "response.incomplete"]),
  response: f({
    incomplete_details: f({ reason: c() }).nullish(),
    usage: kf,
    service_tier: c().nullish()
  })
}), Rk = f({
  type: k("response.created"),
  response: f({
    id: c(),
    created_at: S(),
    model: c(),
    service_tier: c().nullish()
  })
}), Ak = f({
  type: k("response.output_item.added"),
  output_index: S(),
  item: Ae("type", [
    f({
      type: k("message"),
      id: c()
    }),
    f({
      type: k("reasoning"),
      id: c(),
      encrypted_content: c().nullish()
    }),
    f({
      type: k("function_call"),
      id: c(),
      call_id: c(),
      name: c(),
      arguments: c()
    }),
    f({
      type: k("web_search_call"),
      id: c(),
      status: c(),
      action: f({
        type: k("search"),
        query: c().optional()
      }).nullish()
    }),
    f({
      type: k("computer_call"),
      id: c(),
      status: c()
    }),
    f({
      type: k("file_search_call"),
      id: c()
    }),
    f({
      type: k("image_generation_call"),
      id: c()
    }),
    f({
      type: k("code_interpreter_call"),
      id: c(),
      container_id: c(),
      code: c().nullable(),
      outputs: A(
        Ae("type", [
          f({ type: k("logs"), logs: c() }),
          f({ type: k("image"), url: c() })
        ])
      ).nullable(),
      status: c()
    })
  ])
}), jk = f({
  type: k("response.output_item.done"),
  output_index: S(),
  item: Ae("type", [
    f({
      type: k("message"),
      id: c()
    }),
    f({
      type: k("reasoning"),
      id: c(),
      encrypted_content: c().nullish()
    }),
    f({
      type: k("function_call"),
      id: c(),
      call_id: c(),
      name: c(),
      arguments: c(),
      status: k("completed")
    }),
    _f,
    wf,
    vf,
    yf,
    bf,
    f({
      type: k("computer_call"),
      id: c(),
      status: k("completed")
    })
  ])
}), Mk = f({
  type: k("response.function_call_arguments.delta"),
  item_id: c(),
  output_index: S(),
  delta: c()
}), Pk = f({
  type: k("response.code_interpreter_call_code.delta"),
  item_id: c(),
  output_index: S(),
  delta: c()
}), zk = f({
  type: k("response.code_interpreter_call_code.done"),
  item_id: c(),
  output_index: S(),
  code: c()
}), Uk = f({
  type: k("response.output_text.annotation.added"),
  annotation: Ae("type", [
    f({
      type: k("url_citation"),
      url: c(),
      title: c()
    }),
    f({
      type: k("file_citation"),
      file_id: c(),
      filename: c().nullish(),
      index: S().nullish(),
      start_index: S().nullish(),
      end_index: S().nullish(),
      quote: c().nullish()
    })
  ])
}), Dk = f({
  type: k("response.reasoning_summary_part.added"),
  item_id: c(),
  summary_index: S()
}), Zk = f({
  type: k("response.reasoning_summary_text.delta"),
  item_id: c(),
  summary_index: S(),
  delta: c()
}), qk = Y([
  Ok,
  Ck,
  Rk,
  Ak,
  jk,
  Mk,
  Pk,
  zk,
  Uk,
  Dk,
  Zk,
  Nk,
  f({ type: c() }).loose()
  // fallback for unknown chunks
]);
function Lk(e) {
  return e.type === "response.output_text.delta";
}
function xf(e) {
  return e.type === "response.output_item.done";
}
function Fk(e) {
  return xf(e) && e.item.type === "reasoning";
}
function Jk(e) {
  return e.type === "response.completed" || e.type === "response.incomplete";
}
function Vk(e) {
  return e.type === "response.created";
}
function Gk(e) {
  return e.type === "response.function_call_arguments.delta";
}
function Bk(e) {
  return e.type === "response.code_interpreter_call_code.delta";
}
function Wk(e) {
  return e.type === "response.code_interpreter_call_code.done";
}
function Sf(e) {
  return e.type === "response.output_item.added";
}
function Hk(e) {
  return Sf(e) && e.item.type === "reasoning";
}
function Kk(e) {
  return e.type === "response.output_text.annotation.added";
}
function Yk(e) {
  return e.type === "response.reasoning_summary_part.added";
}
function Xk(e) {
  return e.type === "response.reasoning_summary_text.delta";
}
function Qk(e) {
  return e.type === "error";
}
function ex(e) {
  const t = e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat"), r = e.startsWith("gpt-4") || e.startsWith("gpt-5-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") || e.startsWith("o3") || e.startsWith("o4-mini"), o = {
    requiredAutoTruncation: !1,
    systemMessageMode: "system",
    supportsFlexProcessing: t,
    supportsPriorityProcessing: r
  };
  return e.startsWith("gpt-5-chat") ? {
    ...o,
    isReasoningModel: !1
  } : e.startsWith("o") || e.startsWith("gpt-5") || e.startsWith("codex-") || e.startsWith("computer-use") ? e.startsWith("o1-mini") || e.startsWith("o1-preview") ? {
    ...o,
    isReasoningModel: !0,
    systemMessageMode: "remove"
  } : {
    ...o,
    isReasoningModel: !0,
    systemMessageMode: "developer"
  } : {
    ...o,
    isReasoningModel: !1
  };
}
var tx = f({
  include: A(
    ne([
      "reasoning.encrypted_content",
      "file_search_call.results",
      "message.output_text.logprobs"
    ])
  ).nullish(),
  instructions: c().nullish(),
  /**
   * Return the log probabilities of the tokens.
   *
   * Setting to true will return the log probabilities of the tokens that
   * were generated.
   *
   * Setting to a number will return the log probabilities of the top n
   * tokens that were generated.
   *
   * @see https://platform.openai.com/docs/api-reference/responses/create
   * @see https://cookbook.openai.com/examples/using_logprobs
   */
  logprobs: Y([V(), S().min(1).max($f)]).optional(),
  /**
   * The maximum number of total calls to built-in tools that can be processed in a response.
   * This maximum number applies across all built-in tool calls, not per individual tool.
   * Any further attempts to call a tool by the model will be ignored.
   */
  maxToolCalls: S().nullish(),
  metadata: vt().nullish(),
  parallelToolCalls: V().nullish(),
  previousResponseId: c().nullish(),
  promptCacheKey: c().nullish(),
  reasoningEffort: c().nullish(),
  reasoningSummary: c().nullish(),
  safetyIdentifier: c().nullish(),
  serviceTier: ne(["auto", "flex", "priority"]).nullish(),
  store: V().nullish(),
  strictJsonSchema: V().nullish(),
  textVerbosity: ne(["low", "medium", "high"]).nullish(),
  user: c().nullish()
}), nx = f({
  instructions: c().nullish(),
  speed: S().min(0.25).max(4).default(1).nullish()
}), rx = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    text: e,
    voice: t = "alloy",
    outputFormat: r = "mp3",
    speed: o,
    instructions: n,
    language: i,
    providerOptions: a
  }) {
    const s = [], u = await Ge({
      provider: "openai",
      providerOptions: a,
      schema: nx
    }), l = {
      model: this.modelId,
      input: e,
      voice: t,
      response_format: "mp3",
      speed: o,
      instructions: n
    };
    if (r && (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(r) ? l.response_format = r : s.push({
      type: "unsupported-setting",
      setting: "outputFormat",
      details: `Unsupported output format: ${r}. Using mp3 instead.`
    })), u) {
      const d = {};
      for (const h in d) {
        const y = d[h];
        y !== void 0 && (l[h] = y);
      }
    }
    return i && s.push({
      type: "unsupported-setting",
      setting: "language",
      details: `OpenAI speech models do not support language selection. Language parameter "${i}" was ignored.`
    }), {
      requestBody: l,
      warnings: s
    };
  }
  async doGenerate(e) {
    var t, r, o;
    const n = (o = (r = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : r.call(t)) != null ? o : /* @__PURE__ */ new Date(), { requestBody: i, warnings: a } = await this.getArgs(e), {
      value: s,
      responseHeaders: u,
      rawValue: l
    } = await Se({
      url: this.config.url({
        path: "/audio/speech",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), e.headers),
      body: i,
      failedResponseHandler: xt,
      successfulResponseHandler: Ow(),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    return {
      audio: s,
      warnings: a,
      request: {
        body: JSON.stringify(i)
      },
      response: {
        timestamp: n,
        modelId: this.modelId,
        headers: u,
        body: l
      }
    };
  }
}, ox = f({
  /**
   * Additional information to include in the transcription response.
   */
  include: A(c()).optional(),
  /**
   * The language of the input audio in ISO-639-1 format.
   */
  language: c().optional(),
  /**
   * An optional text to guide the model's style or continue a previous audio segment.
   */
  prompt: c().optional(),
  /**
   * The sampling temperature, between 0 and 1.
   * @default 0
   */
  temperature: S().min(0).max(1).default(0).optional(),
  /**
   * The timestamp granularities to populate for this transcription.
   * @default ['segment']
   */
  timestampGranularities: A(ne(["word", "segment"])).default(["segment"]).optional()
}), Ks = {
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
}, ix = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    audio: e,
    mediaType: t,
    providerOptions: r
  }) {
    const o = [], n = await Ge({
      provider: "openai",
      providerOptions: r,
      schema: ox
    }), i = new FormData(), a = e instanceof Uint8Array ? new Blob([e]) : new Blob([pr(e)]);
    i.append("model", this.modelId);
    const s = hw(t);
    if (i.append(
      "file",
      new File([a], "audio", { type: t }),
      `audio.${s}`
    ), n) {
      const u = {
        include: n.include,
        language: n.language,
        prompt: n.prompt,
        // https://platform.openai.com/docs/api-reference/audio/createTranscription#audio_createtranscription-response_format
        // prefer verbose_json to get segments for models that support it
        response_format: [
          "gpt-4o-transcribe",
          "gpt-4o-mini-transcribe"
        ].includes(this.modelId) ? "json" : "verbose_json",
        temperature: n.temperature,
        timestamp_granularities: n.timestampGranularities
      };
      for (const [l, d] of Object.entries(u))
        if (d != null)
          if (Array.isArray(d))
            for (const h of d)
              i.append(`${l}[]`, String(h));
          else
            i.append(l, String(d));
    }
    return {
      formData: i,
      warnings: o
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u;
    const l = (o = (r = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : r.call(t)) != null ? o : /* @__PURE__ */ new Date(), { formData: d, warnings: h } = await this.getArgs(e), {
      value: y,
      responseHeaders: p,
      rawValue: g
    } = await Tw({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Ne(this.config.headers(), e.headers),
      formData: d,
      failedResponseHandler: xt,
      successfulResponseHandler: Je(
        ax
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), _ = y.language != null && y.language in Ks ? Ks[y.language] : void 0;
    return {
      text: y.text,
      segments: (s = (a = (n = y.segments) == null ? void 0 : n.map((v) => ({
        text: v.text,
        startSecond: v.start,
        endSecond: v.end
      }))) != null ? a : (i = y.words) == null ? void 0 : i.map((v) => ({
        text: v.word,
        startSecond: v.start,
        endSecond: v.end
      }))) != null ? s : [],
      language: _,
      durationInSeconds: (u = y.duration) != null ? u : void 0,
      warnings: h,
      response: {
        timestamp: l,
        modelId: this.modelId,
        headers: p,
        body: g
      }
    };
  }
}, ax = f({
  text: c(),
  language: c().nullish(),
  duration: S().nullish(),
  words: A(
    f({
      word: c(),
      start: S(),
      end: S()
    })
  ).nullish(),
  segments: A(
    f({
      id: S(),
      seek: S(),
      start: S(),
      end: S(),
      text: c(),
      tokens: A(S()),
      temperature: S(),
      avg_logprob: S(),
      compression_ratio: S(),
      no_speech_prob: S()
    })
  ).nullish()
}), sx = "2.0.42";
function ux(e = {}) {
  var t, r;
  const o = (t = mr(
    zn({
      settingValue: e.baseURL,
      environmentVariableName: "OPENAI_BASE_URL"
    })
  )) != null ? t : "https://api.openai.com/v1", n = (r = e.name) != null ? r : "openai", i = () => Me(
    {
      Authorization: `Bearer ${lo({
        apiKey: e.apiKey,
        environmentVariableName: "OPENAI_API_KEY",
        description: "OpenAI"
      })}`,
      "OpenAI-Organization": e.organization,
      "OpenAI-Project": e.project,
      ...e.headers
    },
    `ai-sdk/openai/${sx}`
  ), a = (_) => new LI(_, {
    provider: `${n}.chat`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), s = (_) => new KI(_, {
    provider: `${n}.completion`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), u = (_) => new ek(_, {
    provider: `${n}.embedding`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), l = (_) => new ok(_, {
    provider: `${n}.image`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), d = (_) => new ix(_, {
    provider: `${n}.transcription`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), h = (_) => new rx(_, {
    provider: `${n}.speech`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), y = (_) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return p(_);
  }, p = (_) => new Ek(_, {
    provider: `${n}.responses`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch,
    fileIdPrefixes: ["file-"]
  }), g = function(_) {
    return y(_);
  };
  return g.languageModel = y, g.chat = a, g.completion = s, g.responses = p, g.embedding = u, g.textEmbedding = u, g.textEmbeddingModel = u, g.image = l, g.imageModel = l, g.transcription = d, g.transcriptionModel = d, g.speech = h, g.speechModel = h, g.tools = kk, g;
}
ux();
var lx = "vercel.ai.gateway.error", Ro = Symbol.for(lx), Ys, Xs, at = class Tf extends (Xs = Error, Ys = Ro, Xs) {
  constructor({
    message: t,
    statusCode: r = 500,
    cause: o
  }) {
    super(t), this[Ys] = !0, this.statusCode = r, this.cause = o;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(t) {
    return Tf.hasMarker(t);
  }
  static hasMarker(t) {
    return typeof t == "object" && t !== null && Ro in t && t[Ro] === !0;
  }
}, Ef = "GatewayAuthenticationError", cx = `vercel.ai.gateway.error.${Ef}`, Qs = Symbol.for(cx), eu, tu, po = class Of extends (tu = at, eu = Qs, tu) {
  constructor({
    message: t = "Authentication failed",
    statusCode: r = 401,
    cause: o
  } = {}) {
    super({ message: t, statusCode: r, cause: o }), this[eu] = !0, this.name = Ef, this.type = "authentication_error";
  }
  static isInstance(t) {
    return at.hasMarker(t) && Qs in t;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided: t,
    oidcTokenProvided: r,
    message: o = "Authentication failed",
    statusCode: n = 401,
    cause: i
  }) {
    let a;
    return t ? a = `AI Gateway authentication failed: Invalid API key provided.

The token is expected to be provided via the 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.` : r ? a = `AI Gateway authentication failed: Invalid OIDC token provided.

The token is expected to be provided via the 'VERCEL_OIDC_TOKEN' environment variable. It expires every 12 hours.
- make sure your Vercel project settings have OIDC enabled
- if running locally with 'vercel dev', the token is automatically obtained and refreshed
- if running locally with your own dev server, run 'vercel env pull' to fetch the token
- in production/preview, the token is automatically obtained and refreshed

Alternative: Provide an API key via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.` : a = `AI Gateway authentication failed: No authentication provided.

Provide either an API key or OIDC token.

API key instructions:

The token is expected to be provided via the 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

OIDC token instructions:

The token is expected to be provided via the 'VERCEL_OIDC_TOKEN' environment variable. It expires every 12 hours.
- make sure your Vercel project settings have OIDC enabled
- if running locally with 'vercel dev', the token is automatically obtained and refreshed
- if running locally with your own dev server, run 'vercel env pull' to fetch the token
- in production/preview, the token is automatically obtained and refreshed`, new Of({
      message: a,
      statusCode: n,
      cause: i
    });
  }
}, Nf = "GatewayInvalidRequestError", dx = `vercel.ai.gateway.error.${Nf}`, nu = Symbol.for(dx), ru, ou, px = class extends (ou = at, ru = nu, ou) {
  constructor({
    message: e = "Invalid request",
    statusCode: t = 400,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[ru] = !0, this.name = Nf, this.type = "invalid_request_error";
  }
  static isInstance(e) {
    return at.hasMarker(e) && nu in e;
  }
}, Cf = "GatewayRateLimitError", mx = `vercel.ai.gateway.error.${Cf}`, iu = Symbol.for(mx), au, su, fx = class extends (su = at, au = iu, su) {
  constructor({
    message: e = "Rate limit exceeded",
    statusCode: t = 429,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[au] = !0, this.name = Cf, this.type = "rate_limit_exceeded";
  }
  static isInstance(e) {
    return at.hasMarker(e) && iu in e;
  }
}, Rf = "GatewayModelNotFoundError", gx = `vercel.ai.gateway.error.${Rf}`, uu = Symbol.for(gx), hx = f({
  modelId: c()
}), lu, cu, Af = class extends (cu = at, lu = uu, cu) {
  constructor({
    message: e = "Model not found",
    statusCode: t = 404,
    modelId: r,
    cause: o
  } = {}) {
    super({ message: e, statusCode: t, cause: o }), this[lu] = !0, this.name = Rf, this.type = "model_not_found", this.modelId = r;
  }
  static isInstance(e) {
    return at.hasMarker(e) && uu in e;
  }
}, jf = "GatewayInternalServerError", vx = `vercel.ai.gateway.error.${jf}`, du = Symbol.for(vx), pu, mu, fu = class extends (mu = at, pu = du, mu) {
  constructor({
    message: e = "Internal server error",
    statusCode: t = 500,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[pu] = !0, this.name = jf, this.type = "internal_server_error";
  }
  static isInstance(e) {
    return at.hasMarker(e) && du in e;
  }
}, Mf = "GatewayResponseError", yx = `vercel.ai.gateway.error.${Mf}`, gu = Symbol.for(yx), hu, vu, _x = class extends (vu = at, hu = gu, vu) {
  constructor({
    message: e = "Invalid response from Gateway",
    statusCode: t = 502,
    response: r,
    validationError: o,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[hu] = !0, this.name = Mf, this.type = "response_error", this.response = r, this.validationError = o;
  }
  static isInstance(e) {
    return at.hasMarker(e) && gu in e;
  }
};
function yu({
  response: e,
  statusCode: t,
  defaultMessage: r = "Gateway request failed",
  cause: o,
  authMethod: n
}) {
  const i = bx.safeParse(e);
  if (!i.success)
    return new _x({
      message: `Invalid error response format: ${r}`,
      statusCode: t,
      response: e,
      validationError: i.error,
      cause: o
    });
  const a = i.data, s = a.error.type, u = a.error.message;
  switch (s) {
    case "authentication_error":
      return po.createContextualError({
        apiKeyProvided: n === "api-key",
        oidcTokenProvided: n === "oidc",
        statusCode: t,
        cause: o
      });
    case "invalid_request_error":
      return new px({ message: u, statusCode: t, cause: o });
    case "rate_limit_exceeded":
      return new fx({ message: u, statusCode: t, cause: o });
    case "model_not_found": {
      const l = hx.safeParse(
        a.error.param
      );
      return new Af({
        message: u,
        statusCode: t,
        modelId: l.success ? l.data.modelId : void 0,
        cause: o
      });
    }
    case "internal_server_error":
      return new fu({ message: u, statusCode: t, cause: o });
    default:
      return new fu({ message: u, statusCode: t, cause: o });
  }
}
var bx = f({
  error: f({
    message: c(),
    type: c().nullish(),
    param: ue().nullish(),
    code: Y([c(), S()]).nullish()
  })
});
function en(e, t) {
  var r;
  return at.isInstance(e) ? e : Ze.isInstance(e) ? yu({
    response: wx(e),
    statusCode: (r = e.statusCode) != null ? r : 500,
    defaultMessage: "Gateway request failed",
    cause: e,
    authMethod: t
  }) : yu({
    response: {},
    statusCode: 500,
    defaultMessage: e instanceof Error ? `Gateway request failed: ${e.message}` : "Unknown Gateway error",
    cause: e,
    authMethod: t
  });
}
function wx(e) {
  if (e.data !== void 0)
    return e.data;
  if (e.responseBody != null)
    try {
      return JSON.parse(e.responseBody);
    } catch {
      return e.responseBody;
    }
  return {};
}
var Pf = "ai-gateway-auth-method";
function Wn(e) {
  const t = $x.safeParse(
    e[Pf]
  );
  return t.success ? t.data : void 0;
}
var $x = Y([
  k("api-key"),
  k("oidc")
]), _u = class {
  constructor(e) {
    this.config = e;
  }
  async getAvailableModels() {
    try {
      const { value: e } = await Es({
        url: `${this.config.baseURL}/config`,
        headers: await Ue(this.config.headers()),
        successfulResponseHandler: Je(
          Sx
        ),
        failedResponseHandler: Rt({
          errorSchema: vt(),
          errorToMessage: (t) => t
        }),
        fetch: this.config.fetch
      });
      return e;
    } catch (e) {
      throw en(e);
    }
  }
  async getCredits() {
    try {
      const e = new URL(this.config.baseURL), { value: t } = await Es({
        url: `${e.origin}/v1/credits`,
        headers: await Ue(this.config.headers()),
        successfulResponseHandler: Je(Tx),
        failedResponseHandler: Rt({
          errorSchema: vt(),
          errorToMessage: (r) => r
        }),
        fetch: this.config.fetch
      });
      return t;
    } catch (e) {
      throw en(e);
    }
  }
}, Ix = f({
  specificationVersion: k("v2"),
  provider: c(),
  modelId: c()
}), kx = f({
  input: c(),
  output: c(),
  input_cache_read: c().nullish(),
  input_cache_write: c().nullish()
}).transform(({ input: e, output: t, input_cache_read: r, input_cache_write: o }) => ({
  input: e,
  output: t,
  ...r ? { cachedInputTokens: r } : {},
  ...o ? { cacheCreationInputTokens: o } : {}
})), xx = f({
  id: c(),
  name: c(),
  description: c().nullish(),
  pricing: kx.nullish(),
  specification: Ix,
  modelType: ne(["language", "embedding", "image"]).nullish()
}), Sx = f({
  models: A(xx)
}), Tx = f({
  balance: c(),
  total_used: c()
}).transform(({ balance: e, total_used: t }) => ({
  balance: e,
  totalUsed: t
})), Ex = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2", this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(e) {
    const { abortSignal: t, ...r } = e;
    return {
      args: this.maybeEncodeFileParts(r),
      warnings: []
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { abortSignal: o } = e, n = await Ue(this.config.headers());
    try {
      const {
        responseHeaders: i,
        value: a,
        rawValue: s
      } = await Se({
        url: this.getUrl(),
        headers: Ne(
          n,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !1),
          await Ue(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: Je(vt()),
        failedResponseHandler: Rt({
          errorSchema: vt(),
          errorToMessage: (u) => u
        }),
        ...o && { abortSignal: o },
        fetch: this.config.fetch
      });
      return {
        ...a,
        request: { body: t },
        response: { headers: i, body: s },
        warnings: r
      };
    } catch (i) {
      throw en(i, Wn(n));
    }
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { abortSignal: o } = e, n = await Ue(this.config.headers());
    try {
      const { value: i, responseHeaders: a } = await Se({
        url: this.getUrl(),
        headers: Ne(
          n,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !0),
          await Ue(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: sn(vt()),
        failedResponseHandler: Rt({
          errorSchema: vt(),
          errorToMessage: (s) => s
        }),
        ...o && { abortSignal: o },
        fetch: this.config.fetch
      });
      return {
        stream: i.pipeThrough(
          new TransformStream({
            start(s) {
              r.length > 0 && s.enqueue({ type: "stream-start", warnings: r });
            },
            transform(s, u) {
              if (s.success) {
                const l = s.value;
                if (l.type === "raw" && !e.includeRawChunks)
                  return;
                l.type === "response-metadata" && l.timestamp && typeof l.timestamp == "string" && (l.timestamp = new Date(l.timestamp)), u.enqueue(l);
              } else
                u.error(
                  s.error
                );
            }
          })
        ),
        request: { body: t },
        response: { headers: a }
      };
    } catch (i) {
      throw en(i, Wn(n));
    }
  }
  isFilePart(e) {
    return e && typeof e == "object" && "type" in e && e.type === "file";
  }
  /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */
  maybeEncodeFileParts(e) {
    for (const t of e.prompt)
      for (const r of t.content)
        if (this.isFilePart(r)) {
          const o = r;
          if (o.data instanceof Uint8Array) {
            const n = Uint8Array.from(o.data), i = Buffer.from(n).toString("base64");
            o.data = new URL(
              `data:${o.mediaType || "application/octet-stream"};base64,${i}`
            );
          }
        }
    return e;
  }
  getUrl() {
    return `${this.config.baseURL}/language-model`;
  }
  getModelConfigHeaders(e, t) {
    return {
      "ai-language-model-specification-version": "2",
      "ai-language-model-id": e,
      "ai-language-model-streaming": String(t)
    };
  }
}, Ox = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: r,
    providerOptions: o
  }) {
    var n;
    const i = await Ue(this.config.headers());
    try {
      const {
        responseHeaders: a,
        value: s,
        rawValue: u
      } = await Se({
        url: this.getUrl(),
        headers: Ne(
          i,
          t ?? {},
          this.getModelConfigHeaders(),
          await Ue(this.config.o11yHeaders)
        ),
        body: {
          input: e.length === 1 ? e[0] : e,
          ...o ? { providerOptions: o } : {}
        },
        successfulResponseHandler: Je(
          Nx
        ),
        failedResponseHandler: Rt({
          errorSchema: vt(),
          errorToMessage: (l) => l
        }),
        ...r && { abortSignal: r },
        fetch: this.config.fetch
      });
      return {
        embeddings: s.embeddings,
        usage: (n = s.usage) != null ? n : void 0,
        providerMetadata: s.providerMetadata,
        response: { headers: a, body: u }
      };
    } catch (a) {
      throw en(a, Wn(i));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/embedding-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-embedding-model-specification-version": "2",
      "ai-model-id": this.modelId
    };
  }
}, Nx = f({
  embeddings: A(A(S())),
  usage: f({ tokens: S() }).nullish(),
  providerMetadata: je(c(), je(c(), ue())).optional()
});
async function Cx() {
  var e, t;
  const r = (t = (e = zf().headers) == null ? void 0 : e["x-vercel-oidc-token"]) != null ? t : process.env.VERCEL_OIDC_TOKEN;
  if (!r)
    throw new po({
      message: "OIDC token not available",
      statusCode: 401
    });
  return r;
}
async function Rx() {
  var e;
  return (e = zf().headers) == null ? void 0 : e["x-vercel-id"];
}
var Ax = Symbol.for("@vercel/request-context");
function zf() {
  var e, t, r;
  return (r = (t = (e = globalThis[Ax]) == null ? void 0 : e.get) == null ? void 0 : t.call(e)) != null ? r : {};
}
var jx = "1.0.32", Mx = "0.0.1";
function Px(e = {}) {
  var t, r;
  let o = null, n = null;
  const i = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5;
  let a = 0;
  const s = (r = mr(e.baseURL)) != null ? r : "https://ai-gateway.vercel.sh/v1/ai", u = async () => {
    const g = await Ux(e);
    if (g)
      return Me(
        {
          Authorization: `Bearer ${g.token}`,
          "ai-gateway-protocol-version": Mx,
          [Pf]: g.authMethod,
          ...e.headers
        },
        `ai-sdk/gateway/${jx}`
      );
    throw po.createContextualError({
      apiKeyProvided: !1,
      oidcTokenProvided: !1,
      statusCode: 401
    });
  }, l = () => {
    const g = zn({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    }), _ = zn({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    }), v = zn({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const m = await Rx();
      return {
        ...g && { "ai-o11y-deployment-id": g },
        ..._ && { "ai-o11y-environment": _ },
        ...v && { "ai-o11y-region": v },
        ...m && { "ai-o11y-request-id": m }
      };
    };
  }, d = (g) => new Ex(g, {
    provider: "gateway",
    baseURL: s,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: l()
  }), h = async () => {
    var g, _, v;
    const m = (v = (_ = (g = e._internal) == null ? void 0 : g.currentDate) == null ? void 0 : _.call(g).getTime()) != null ? v : Date.now();
    return (!o || m - a > i) && (a = m, o = new _u({
      baseURL: s,
      headers: u,
      fetch: e.fetch
    }).getAvailableModels().then((b) => (n = b, b)).catch(async (b) => {
      throw en(b, Wn(await u()));
    })), n ? Promise.resolve(n) : o;
  }, y = async () => new _u({
    baseURL: s,
    headers: u,
    fetch: e.fetch
  }).getCredits().catch(async (g) => {
    throw en(g, Wn(await u()));
  }), p = function(g) {
    if (new.target)
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    return d(g);
  };
  return p.getAvailableModels = h, p.getCredits = y, p.imageModel = (g) => {
    throw new Ve({ modelId: g, modelType: "imageModel" });
  }, p.languageModel = d, p.textEmbeddingModel = (g) => new Ox(g, {
    provider: "gateway",
    baseURL: s,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: l()
  }), p;
}
var zx = Px();
async function Ux(e) {
  const t = zn({
    settingValue: e.apiKey,
    environmentVariableName: "AI_GATEWAY_API_KEY"
  });
  if (t)
    return {
      token: t,
      authMethod: "api-key"
    };
  try {
    return {
      token: await Cx(),
      authMethod: "oidc"
    };
  } catch {
    return null;
  }
}
var Dx = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Bt = "1.9.0", bu = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Zx(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), o = e.match(bu);
  if (!o)
    return function() {
      return !1;
    };
  var n = {
    major: +o[1],
    minor: +o[2],
    patch: +o[3],
    prerelease: o[4]
  };
  if (n.prerelease != null)
    return function(u) {
      return u === e;
    };
  function i(s) {
    return r.add(s), !1;
  }
  function a(s) {
    return t.add(s), !0;
  }
  return function(u) {
    if (t.has(u))
      return !0;
    if (r.has(u))
      return !1;
    var l = u.match(bu);
    if (!l)
      return i(u);
    var d = {
      major: +l[1],
      minor: +l[2],
      patch: +l[3],
      prerelease: l[4]
    };
    return d.prerelease != null || n.major !== d.major ? i(u) : n.major === 0 ? n.minor === d.minor && n.patch <= d.patch ? a(u) : i(u) : n.minor <= d.minor ? a(u) : i(u);
  };
}
var qx = Zx(Bt), Lx = Bt.split(".")[0], Hn = Symbol.for("opentelemetry.js.api." + Lx), Kn = Dx;
function fr(e, t, r, o) {
  var n;
  o === void 0 && (o = !1);
  var i = Kn[Hn] = (n = Kn[Hn]) !== null && n !== void 0 ? n : {
    version: Bt
  };
  if (!o && i[e]) {
    var a = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(a.stack || a.message), !1;
  }
  if (i.version !== Bt) {
    var a = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + e + " does not match previously registered API v" + Bt);
    return r.error(a.stack || a.message), !1;
  }
  return i[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Bt + "."), !0;
}
function tn(e) {
  var t, r, o = (t = Kn[Hn]) === null || t === void 0 ? void 0 : t.version;
  if (!(!o || !qx(o)))
    return (r = Kn[Hn]) === null || r === void 0 ? void 0 : r[e];
}
function gr(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Bt + ".");
  var r = Kn[Hn];
  r && delete r[e];
}
var Fx = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e), n, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; ) i.push(n.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}, Jx = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Vx = (
  /** @class */
  (function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return An("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return An("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return An("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return An("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return An("verbose", this._namespace, t);
    }, e;
  })()
);
function An(e, t, r) {
  var o = tn("diag");
  if (o)
    return r.unshift(t), o[e].apply(o, Jx([], Fx(r), !1));
}
var rt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(rt || (rt = {}));
function Gx(e, t) {
  e < rt.NONE ? e = rt.NONE : e > rt.ALL && (e = rt.ALL), t = t || {};
  function r(o, n) {
    var i = t[o];
    return typeof i == "function" && e >= n ? i.bind(t) : function() {
    };
  }
  return {
    error: r("error", rt.ERROR),
    warn: r("warn", rt.WARN),
    info: r("info", rt.INFO),
    debug: r("debug", rt.DEBUG),
    verbose: r("verbose", rt.VERBOSE)
  };
}
var Bx = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e), n, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; ) i.push(n.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}, Wx = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Hx = "diag", St = (
  /** @class */
  (function() {
    function e() {
      function t(n) {
        return function() {
          for (var i = [], a = 0; a < arguments.length; a++)
            i[a] = arguments[a];
          var s = tn("diag");
          if (s)
            return s[n].apply(s, Wx([], Bx(i), !1));
        };
      }
      var r = this, o = function(n, i) {
        var a, s, u;
        if (i === void 0 && (i = { logLevel: rt.INFO }), n === r) {
          var l = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((a = l.stack) !== null && a !== void 0 ? a : l.message), !1;
        }
        typeof i == "number" && (i = {
          logLevel: i
        });
        var d = tn("diag"), h = Gx((s = i.logLevel) !== null && s !== void 0 ? s : rt.INFO, n);
        if (d && !i.suppressOverrideMessage) {
          var y = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + y), h.warn("Current logger will overwrite one already registered from " + y);
        }
        return fr("diag", h, r, !0);
      };
      r.setLogger = o, r.disable = function() {
        gr(Hx, r);
      }, r.createComponentLogger = function(n) {
        return new Vx(n);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  })()
), Kx = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e), n, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; ) i.push(n.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}, Yx = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], o = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Xx = (
  /** @class */
  (function() {
    function e(t) {
      this._entries = t ? new Map(t) : /* @__PURE__ */ new Map();
    }
    return e.prototype.getEntry = function(t) {
      var r = this._entries.get(t);
      if (r)
        return Object.assign({}, r);
    }, e.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(t) {
        var r = Kx(t, 2), o = r[0], n = r[1];
        return [o, n];
      });
    }, e.prototype.setEntry = function(t, r) {
      var o = new e(this._entries);
      return o._entries.set(t, r), o;
    }, e.prototype.removeEntry = function(t) {
      var r = new e(this._entries);
      return r._entries.delete(t), r;
    }, e.prototype.removeEntries = function() {
      for (var t, r, o = [], n = 0; n < arguments.length; n++)
        o[n] = arguments[n];
      var i = new e(this._entries);
      try {
        for (var a = Yx(o), s = a.next(); !s.done; s = a.next()) {
          var u = s.value;
          i._entries.delete(u);
        }
      } catch (l) {
        t = { error: l };
      } finally {
        try {
          s && !s.done && (r = a.return) && r.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      return i;
    }, e.prototype.clear = function() {
      return new e();
    }, e;
  })()
);
St.instance();
function Qx(e) {
  return e === void 0 && (e = {}), new Xx(new Map(Object.entries(e)));
}
function Uf(e) {
  return Symbol.for(e);
}
var eS = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), r.getValue = function(o) {
        return r._currentContext.get(o);
      }, r.setValue = function(o, n) {
        var i = new e(r._currentContext);
        return i._currentContext.set(o, n), i;
      }, r.deleteValue = function(o) {
        var n = new e(r._currentContext);
        return n._currentContext.delete(o), n;
      };
    }
    return e;
  })()
), tS = new eS(), un = /* @__PURE__ */ (function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, n) {
      o.__proto__ = n;
    } || function(o, n) {
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (o[i] = n[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function o() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
  };
})(), nS = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return pS;
    }, e.prototype.createHistogram = function(t, r) {
      return mS;
    }, e.prototype.createCounter = function(t, r) {
      return dS;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return fS;
    }, e.prototype.createObservableGauge = function(t, r) {
      return hS;
    }, e.prototype.createObservableCounter = function(t, r) {
      return gS;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return vS;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  })()
), mo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e() {
    }
    return e;
  })()
), rS = (
  /** @class */
  (function(e) {
    un(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, o) {
    }, t;
  })(mo)
), oS = (
  /** @class */
  (function(e) {
    un(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, o) {
    }, t;
  })(mo)
), iS = (
  /** @class */
  (function(e) {
    un(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, o) {
    }, t;
  })(mo)
), aS = (
  /** @class */
  (function(e) {
    un(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, o) {
    }, t;
  })(mo)
), Ga = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  })()
), sS = (
  /** @class */
  (function(e) {
    un(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(Ga)
), uS = (
  /** @class */
  (function(e) {
    un(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(Ga)
), lS = (
  /** @class */
  (function(e) {
    un(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(Ga)
), cS = new nS(), dS = new rS(), pS = new iS(), mS = new aS(), fS = new oS(), gS = new sS(), hS = new uS(), vS = new lS(), yS = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, _S = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, bS = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e), n, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; ) i.push(n.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}, wS = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, $S = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.active = function() {
      return tS;
    }, e.prototype.with = function(t, r, o) {
      for (var n = [], i = 3; i < arguments.length; i++)
        n[i - 3] = arguments[i];
      return r.call.apply(r, wS([o], bS(n), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  })()
), IS = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e), n, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; ) i.push(n.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}, kS = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Ao = "context", xS = new $S(), fo = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return fr(Ao, t, St.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, o) {
      for (var n, i = [], a = 3; a < arguments.length; a++)
        i[a - 3] = arguments[a];
      return (n = this._getContextManager()).with.apply(n, kS([t, r, o], IS(i), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return tn(Ao) || xS;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), gr(Ao, St.instance());
    }, e;
  })()
), Ko;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Ko || (Ko = {}));
var Df = "0000000000000000", Zf = "00000000000000000000000000000000", SS = {
  traceId: Zf,
  spanId: Df,
  traceFlags: Ko.NONE
}, Dn = (
  /** @class */
  (function() {
    function e(t) {
      t === void 0 && (t = SS), this._spanContext = t;
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
  })()
), Ba = Uf("OpenTelemetry Context Key SPAN");
function Wa(e) {
  return e.getValue(Ba) || void 0;
}
function TS() {
  return Wa(fo.getInstance().active());
}
function Ha(e, t) {
  return e.setValue(Ba, t);
}
function ES(e) {
  return e.deleteValue(Ba);
}
function OS(e, t) {
  return Ha(e, new Dn(t));
}
function qf(e) {
  var t;
  return (t = Wa(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var NS = /^([0-9a-f]{32})$/i, CS = /^[0-9a-f]{16}$/i;
function RS(e) {
  return NS.test(e) && e !== Zf;
}
function AS(e) {
  return CS.test(e) && e !== Df;
}
function Lf(e) {
  return RS(e.traceId) && AS(e.spanId);
}
function jS(e) {
  return new Dn(e);
}
var jo = fo.getInstance(), Ff = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, o) {
      o === void 0 && (o = jo.active());
      var n = !!(r != null && r.root);
      if (n)
        return new Dn();
      var i = o && qf(o);
      return MS(i) && Lf(i) ? new Dn(i) : new Dn();
    }, e.prototype.startActiveSpan = function(t, r, o, n) {
      var i, a, s;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? s = r : arguments.length === 3 ? (i = r, s = o) : (i = r, a = o, s = n);
        var u = a ?? jo.active(), l = this.startSpan(t, i, u), d = Ha(u, l);
        return jo.with(d, s, void 0, l);
      }
    }, e;
  })()
);
function MS(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var PS = new Ff(), zS = (
  /** @class */
  (function() {
    function e(t, r, o, n) {
      this._provider = t, this.name = r, this.version = o, this.options = n;
    }
    return e.prototype.startSpan = function(t, r, o) {
      return this._getTracer().startSpan(t, r, o);
    }, e.prototype.startActiveSpan = function(t, r, o, n) {
      var i = this._getTracer();
      return Reflect.apply(i.startActiveSpan, i, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : PS;
    }, e;
  })()
), US = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, o) {
      return new Ff();
    }, e;
  })()
), DS = new US(), wu = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, o) {
      var n;
      return (n = this.getDelegateTracer(t, r, o)) !== null && n !== void 0 ? n : new zS(this, t, r, o);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : DS;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, o) {
      var n;
      return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(t, r, o);
    }, e;
  })()
), qr;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(qr || (qr = {}));
fo.getInstance();
St.instance();
var ZS = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, o) {
      return cS;
    }, e;
  })()
), qS = new ZS(), Mo = "metrics", LS = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return fr(Mo, t, St.instance());
    }, e.prototype.getMeterProvider = function() {
      return tn(Mo) || qS;
    }, e.prototype.getMeter = function(t, r, o) {
      return this.getMeterProvider().getMeter(t, r, o);
    }, e.prototype.disable = function() {
      gr(Mo, St.instance());
    }, e;
  })()
);
LS.getInstance();
var FS = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.inject = function(t, r) {
    }, e.prototype.extract = function(t, r) {
      return t;
    }, e.prototype.fields = function() {
      return [];
    }, e;
  })()
), Ka = Uf("OpenTelemetry Baggage Key");
function Jf(e) {
  return e.getValue(Ka) || void 0;
}
function JS() {
  return Jf(fo.getInstance().active());
}
function VS(e, t) {
  return e.setValue(Ka, t);
}
function GS(e) {
  return e.deleteValue(Ka);
}
var Po = "propagation", BS = new FS(), WS = (
  /** @class */
  (function() {
    function e() {
      this.createBaggage = Qx, this.getBaggage = Jf, this.getActiveBaggage = JS, this.setBaggage = VS, this.deleteBaggage = GS;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return fr(Po, t, St.instance());
    }, e.prototype.inject = function(t, r, o) {
      return o === void 0 && (o = _S), this._getGlobalPropagator().inject(t, r, o);
    }, e.prototype.extract = function(t, r, o) {
      return o === void 0 && (o = yS), this._getGlobalPropagator().extract(t, r, o);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      gr(Po, St.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return tn(Po) || BS;
    }, e;
  })()
);
WS.getInstance();
var zo = "trace", HS = (
  /** @class */
  (function() {
    function e() {
      this._proxyTracerProvider = new wu(), this.wrapSpanContext = jS, this.isSpanContextValid = Lf, this.deleteSpan = ES, this.getSpan = Wa, this.getActiveSpan = TS, this.getSpanContext = qf, this.setSpan = Ha, this.setSpanContext = OS;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = fr(zo, this._proxyTracerProvider, St.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return tn(zo) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      gr(zo, St.instance()), this._proxyTracerProvider = new wu();
    }, e;
  })()
), KS = HS.getInstance(), YS = Object.defineProperty, XS = (e, t) => {
  for (var r in t)
    YS(e, r, { get: t[r], enumerable: !0 });
}, Vf = "AI_NoOutputSpecifiedError", Gf = `vercel.ai.error.${Vf}`, QS = Symbol.for(Gf), Bf, Wf = class extends L {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: Vf, message: e }), this[Bf] = !0;
  }
  static isInstance(e) {
    return L.hasMarker(e, Gf);
  }
};
Bf = QS;
function e0(e) {
  const t = "AI SDK Warning:";
  switch (e.type) {
    case "unsupported-setting": {
      let r = `${t} The "${e.setting}" setting is not supported by this model`;
      return e.details && (r += ` - ${e.details}`), r;
    }
    case "unsupported-tool": {
      const r = "name" in e.tool ? e.tool.name : "unknown tool";
      let o = `${t} The tool "${r}" is not supported by this model`;
      return e.details && (o += ` - ${e.details}`), o;
    }
    case "other":
      return `${t} ${e.message}`;
    default:
      return `${t} ${JSON.stringify(e, null, 2)}`;
  }
}
var t0 = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.", $u = !1, ln = (e) => {
  if (e.length === 0)
    return;
  const t = globalThis.AI_SDK_LOG_WARNINGS;
  if (t !== !1) {
    if (typeof t == "function") {
      t(e);
      return;
    }
    $u || ($u = !0, console.info(t0));
    for (const r of e)
      console.warn(e0(r));
  }
}, Hf = "AI_InvalidArgumentError", Kf = `vercel.ai.error.${Hf}`, n0 = Symbol.for(Kf), Yf, _e = class extends L {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: Hf,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[Yf] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return L.hasMarker(e, Kf);
  }
};
Yf = n0;
var Xf = "AI_InvalidStreamPartError", Qf = `vercel.ai.error.${Xf}`, r0 = Symbol.for(Qf), eg, bE = class extends L {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: Xf, message: t }), this[eg] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, Qf);
  }
};
eg = r0;
var tg = "AI_InvalidToolInputError", ng = `vercel.ai.error.${tg}`, o0 = Symbol.for(ng), rg, og = class extends L {
  constructor({
    toolInput: e,
    toolName: t,
    cause: r,
    message: o = `Invalid input for tool ${t}: ${wn(r)}`
  }) {
    super({ name: tg, message: o, cause: r }), this[rg] = !0, this.toolInput = e, this.toolName = t;
  }
  static isInstance(e) {
    return L.hasMarker(e, ng);
  }
};
rg = o0;
var i0 = "AI_MCPClientError", ig = `vercel.ai.error.${i0}`, a0 = Symbol.for(ig), ag, De = class extends L {
  constructor({
    name: e = "MCPClientError",
    message: t,
    cause: r
  }) {
    super({ name: e, message: t, cause: r }), this[ag] = !0;
  }
  static isInstance(e) {
    return L.hasMarker(e, ig);
  }
};
ag = a0;
var sg = "AI_NoImageGeneratedError", ug = `vercel.ai.error.${sg}`, s0 = Symbol.for(ug), lg, u0 = class extends L {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: r
  }) {
    super({ name: sg, message: e, cause: t }), this[lg] = !0, this.responses = r;
  }
  static isInstance(e) {
    return L.hasMarker(e, ug);
  }
};
lg = s0;
var cg = "AI_NoObjectGeneratedError", dg = `vercel.ai.error.${cg}`, l0 = Symbol.for(dg), pg, nn = class extends L {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: o,
    usage: n,
    finishReason: i
  }) {
    super({ name: cg, message: e, cause: t }), this[pg] = !0, this.text = r, this.response = o, this.usage = n, this.finishReason = i;
  }
  static isInstance(e) {
    return L.hasMarker(e, dg);
  }
};
pg = l0;
var mg = "AI_NoOutputGeneratedError", fg = `vercel.ai.error.${mg}`, c0 = Symbol.for(fg), gg, d0 = class extends L {
  // used in isInstance
  constructor({
    message: e = "No output generated.",
    cause: t
  } = {}) {
    super({ name: mg, message: e, cause: t }), this[gg] = !0;
  }
  static isInstance(e) {
    return L.hasMarker(e, fg);
  }
};
gg = c0;
var p0 = class extends L {
  constructor(e) {
    super({
      name: "AI_NoSpeechGeneratedError",
      message: "No speech audio generated."
    }), this.responses = e.responses;
  }
}, hg = "AI_NoSuchToolError", vg = `vercel.ai.error.${hg}`, m0 = Symbol.for(vg), yg, Yo = class extends L {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: hg, message: r }), this[yg] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return L.hasMarker(e, vg);
  }
};
yg = m0;
var _g = "AI_ToolCallRepairError", bg = `vercel.ai.error.${_g}`, f0 = Symbol.for(bg), wg, g0 = class extends L {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${wn(e)}`
  }) {
    super({ name: _g, message: r, cause: e }), this[wg] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return L.hasMarker(e, bg);
  }
};
wg = f0;
var hr = class extends L {
  constructor(e) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${e.version} for provider "${e.provider}" and model "${e.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    }), this.version = e.version, this.provider = e.provider, this.modelId = e.modelId;
  }
}, $g = "AI_InvalidDataContentError", Ig = `vercel.ai.error.${$g}`, h0 = Symbol.for(Ig), kg, Iu = class extends L {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: $g, message: r, cause: t }), this[kg] = !0, this.content = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, Ig);
  }
};
kg = h0;
var xg = "AI_InvalidMessageRoleError", Sg = `vercel.ai.error.${xg}`, v0 = Symbol.for(Sg), Tg, y0 = class extends L {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: xg, message: t }), this[Tg] = !0, this.role = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, Sg);
  }
};
Tg = v0;
var Eg = "AI_MessageConversionError", Og = `vercel.ai.error.${Eg}`, _0 = Symbol.for(Og), Ng, b0 = class extends L {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: Eg, message: t }), this[Ng] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return L.hasMarker(e, Og);
  }
};
Ng = _0;
var Cg = "AI_DownloadError", Rg = `vercel.ai.error.${Cg}`, w0 = Symbol.for(Rg), Ag, Uo = class extends L {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: o,
    message: n = o == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${o}`
  }) {
    super({ name: Cg, message: n, cause: o }), this[Ag] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return L.hasMarker(e, Rg);
  }
};
Ag = w0;
var jg = "AI_RetryError", Mg = `vercel.ai.error.${jg}`, $0 = Symbol.for(Mg), Pg, ku = class extends L {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: jg, message: e }), this[Pg] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return L.hasMarker(e, Mg);
  }
};
Pg = $0;
function bn(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v2")
      throw new hr({
        version: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId
      });
    return e;
  }
  return Ug().languageModel(e);
}
function zg(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v2")
      throw new hr({
        version: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId
      });
    return e;
  }
  return Ug().textEmbeddingModel(
    e
  );
}
function Ug() {
  var e;
  return (e = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? e : zx;
}
var Dg = [
  {
    mediaType: "image/gif",
    bytesPrefix: [71, 73, 70]
    // GIF
  },
  {
    mediaType: "image/png",
    bytesPrefix: [137, 80, 78, 71]
    // PNG
  },
  {
    mediaType: "image/jpeg",
    bytesPrefix: [255, 216]
    // JPEG
  },
  {
    mediaType: "image/webp",
    bytesPrefix: [
      82,
      73,
      70,
      70,
      // "RIFF"
      null,
      null,
      null,
      null,
      // file size (variable)
      87,
      69,
      66,
      80
      // "WEBP"
    ]
  },
  {
    mediaType: "image/bmp",
    bytesPrefix: [66, 77]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [73, 73, 42, 0]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [77, 77, 0, 42]
  },
  {
    mediaType: "image/avif",
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
    ]
  },
  {
    mediaType: "image/heic",
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
    ]
  }
], Zg = [
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 251]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 250]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 243]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 242]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 227]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 226]
  },
  {
    mediaType: "audio/wav",
    bytesPrefix: [
      82,
      // R
      73,
      // I
      70,
      // F
      70,
      // F
      null,
      null,
      null,
      null,
      87,
      // W
      65,
      // A
      86,
      // V
      69
      // E
    ]
  },
  {
    mediaType: "audio/ogg",
    bytesPrefix: [79, 103, 103, 83]
  },
  {
    mediaType: "audio/flac",
    bytesPrefix: [102, 76, 97, 67]
  },
  {
    mediaType: "audio/aac",
    bytesPrefix: [64, 21, 0, 0]
  },
  {
    mediaType: "audio/mp4",
    bytesPrefix: [102, 116, 121, 112]
  },
  {
    mediaType: "audio/webm",
    bytesPrefix: [26, 69, 223, 163]
  }
], I0 = (e) => {
  const t = typeof e == "string" ? pr(e) : e, r = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
  return t.slice(r + 10);
};
function k0(e) {
  return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && // 'I'
  e[1] === 68 && // 'D'
  e[2] === 51 ? I0(e) : e;
}
function go({
  data: e,
  signatures: t
}) {
  const r = k0(e), o = typeof r == "string" ? pr(
    r.substring(0, Math.min(r.length, 24))
  ) : r;
  for (const n of t)
    if (o.length >= n.bytesPrefix.length && n.bytesPrefix.every(
      (i, a) => i === null || o[a] === i
    ))
      return n.mediaType;
}
var st = "5.0.59", qg = async ({ url: e }) => {
  var t;
  const r = e.toString();
  try {
    const o = await fetch(r, {
      headers: Me(
        {},
        `ai-sdk/${st}`,
        Zt()
      )
    });
    if (!o.ok)
      throw new Uo({
        url: r,
        statusCode: o.status,
        statusText: o.statusText
      });
    return {
      data: new Uint8Array(await o.arrayBuffer()),
      mediaType: (t = o.headers.get("content-type")) != null ? t : void 0
    };
  } catch (o) {
    throw Uo.isInstance(o) ? o : new Uo({ url: r, cause: o });
  }
}, x0 = (e = qg) => (t) => Promise.all(
  t.map(
    async (r) => r.isUrlSupportedByModel ? null : e(r)
  )
);
function S0(e) {
  try {
    const [t, r] = e.split(",");
    return {
      mediaType: t.split(";")[0].split(":")[1],
      base64Content: r
    };
  } catch {
    return {
      mediaType: void 0,
      base64Content: void 0
    };
  }
}
var Lg = Y([
  c(),
  Vn(Uint8Array),
  Vn(ArrayBuffer),
  qa(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function Fg(e) {
  if (e instanceof Uint8Array)
    return { data: e, mediaType: void 0 };
  if (e instanceof ArrayBuffer)
    return { data: new Uint8Array(e), mediaType: void 0 };
  if (typeof e == "string")
    try {
      e = new URL(e);
    } catch {
    }
  if (e instanceof URL && e.protocol === "data:") {
    const { mediaType: t, base64Content: r } = S0(
      e.toString()
    );
    if (t == null || r == null)
      throw new L({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`
      });
    return { data: r, mediaType: t };
  }
  return { data: e, mediaType: void 0 };
}
function T0(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? Dr(new Uint8Array(e)) : Dr(e);
}
function E0(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return pr(e);
    } catch (t) {
      throw new Iu({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Iu({ content: e });
}
async function ho({
  prompt: e,
  supportedUrls: t,
  download: r = x0()
}) {
  const o = await N0(
    e.messages,
    r,
    t
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (n) => O0({ message: n, downloadedAssets: o })
    )
  ];
}
function O0({
  message: e,
  downloadedAssets: t
}) {
  const r = e.role;
  switch (r) {
    case "system":
      return {
        role: "system",
        content: e.content,
        providerOptions: e.providerOptions
      };
    case "user":
      return typeof e.content == "string" ? {
        role: "user",
        content: [{ type: "text", text: e.content }],
        providerOptions: e.providerOptions
      } : {
        role: "user",
        content: e.content.map((o) => C0(o, t)).filter((o) => o.type !== "text" || o.text !== ""),
        providerOptions: e.providerOptions
      };
    case "assistant":
      return typeof e.content == "string" ? {
        role: "assistant",
        content: [{ type: "text", text: e.content }],
        providerOptions: e.providerOptions
      } : {
        role: "assistant",
        content: e.content.filter(
          // remove empty text parts (no text, and no provider options):
          (o) => o.type !== "text" || o.text !== "" || o.providerOptions != null
        ).map((o) => {
          const n = o.providerOptions;
          switch (o.type) {
            case "file": {
              const { data: i, mediaType: a } = Fg(
                o.data
              );
              return {
                type: "file",
                data: i,
                filename: o.filename,
                mediaType: a ?? o.mediaType,
                providerOptions: n
              };
            }
            case "reasoning":
              return {
                type: "reasoning",
                text: o.text,
                providerOptions: n
              };
            case "text":
              return {
                type: "text",
                text: o.text,
                providerOptions: n
              };
            case "tool-call":
              return {
                type: "tool-call",
                toolCallId: o.toolCallId,
                toolName: o.toolName,
                input: o.input,
                providerExecuted: o.providerExecuted,
                providerOptions: n
              };
            case "tool-result":
              return {
                type: "tool-result",
                toolCallId: o.toolCallId,
                toolName: o.toolName,
                output: o.output,
                providerOptions: n
              };
          }
        }),
        providerOptions: e.providerOptions
      };
    case "tool":
      return {
        role: "tool",
        content: e.content.map((o) => ({
          type: "tool-result",
          toolCallId: o.toolCallId,
          toolName: o.toolName,
          output: o.output,
          providerOptions: o.providerOptions
        })),
        providerOptions: e.providerOptions
      };
    default: {
      const o = r;
      throw new y0({ role: o });
    }
  }
}
async function N0(e, t, r) {
  const o = e.filter((i) => i.role === "user").map((i) => i.content).filter(
    (i) => Array.isArray(i)
  ).flat().filter(
    (i) => i.type === "image" || i.type === "file"
  ).map((i) => {
    var a;
    const s = (a = i.mediaType) != null ? a : i.type === "image" ? "image/*" : void 0;
    let u = i.type === "image" ? i.image : i.data;
    if (typeof u == "string")
      try {
        u = new URL(u);
      } catch {
      }
    return { mediaType: s, data: u };
  }).filter(
    (i) => i.data instanceof URL
  ).map((i) => ({
    url: i.data,
    isUrlSupportedByModel: i.mediaType != null && gw({
      url: i.data.toString(),
      mediaType: i.mediaType,
      supportedUrls: r
    })
  })), n = await t(o);
  return Object.fromEntries(
    n.map(
      (i, a) => i == null ? null : [
        o[a].url.toString(),
        { data: i.data, mediaType: i.mediaType }
      ]
    ).filter((i) => i != null)
  );
}
function C0(e, t) {
  var r;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerOptions: e.providerOptions
    };
  let o;
  const n = e.type;
  switch (n) {
    case "image":
      o = e.image;
      break;
    case "file":
      o = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${n}`);
  }
  const { data: i, mediaType: a } = Fg(o);
  let s = a ?? e.mediaType, u = i;
  if (u instanceof URL) {
    const l = t[u.toString()];
    l && (u = l.data, s ?? (s = l.mediaType));
  }
  switch (n) {
    case "image":
      return (u instanceof Uint8Array || typeof u == "string") && (s = (r = go({ data: u, signatures: Dg })) != null ? r : s), {
        type: "file",
        mediaType: s ?? "image/*",
        // any image
        filename: void 0,
        data: u,
        providerOptions: e.providerOptions
      };
    case "file": {
      if (s == null)
        throw new Error("Media type is missing for file part");
      return {
        type: "file",
        mediaType: s,
        filename: e.filename,
        data: u,
        providerOptions: e.providerOptions
      };
    }
  }
}
function rn({
  maxOutputTokens: e,
  temperature: t,
  topP: r,
  topK: o,
  presencePenalty: n,
  frequencyPenalty: i,
  seed: a,
  stopSequences: s
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new _e({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer"
      });
    if (e < 1)
      throw new _e({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new _e({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new _e({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (o != null && typeof o != "number")
    throw new _e({
      parameter: "topK",
      value: o,
      message: "topK must be a number"
    });
  if (n != null && typeof n != "number")
    throw new _e({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number"
    });
  if (i != null && typeof i != "number")
    throw new _e({
      parameter: "frequencyPenalty",
      value: i,
      message: "frequencyPenalty must be a number"
    });
  if (a != null && !Number.isInteger(a))
    throw new _e({
      parameter: "seed",
      value: a,
      message: "seed must be an integer"
    });
  return {
    maxOutputTokens: e,
    temperature: t,
    topP: r,
    topK: o,
    presencePenalty: n,
    frequencyPenalty: i,
    stopSequences: s,
    seed: a
  };
}
function R0(e) {
  return e != null && Object.keys(e).length > 0;
}
function Jg({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return R0(e) ? {
    tools: (r != null ? Object.entries(e).filter(
      ([n]) => r.includes(n)
    ) : Object.entries(e)).map(([n, i]) => {
      const a = i.type;
      switch (a) {
        case void 0:
        case "dynamic":
        case "function":
          return {
            type: "function",
            name: n,
            description: i.description,
            inputSchema: _n(i.inputSchema).jsonSchema,
            providerOptions: i.providerOptions
          };
        case "provider-defined":
          return {
            type: "provider-defined",
            name: n,
            id: i.id,
            args: i.args
          };
        default: {
          const s = a;
          throw new Error(`Unsupported tool type: ${s}`);
        }
      }
    }),
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  } : {
    tools: void 0,
    toolChoice: void 0
  };
}
var Yn = ao(
  () => Y([
    Ra(),
    c(),
    S(),
    V(),
    je(c(), Yn),
    A(Yn)
  ])
), ce = je(
  c(),
  je(c(), Yn)
), Vg = f({
  type: k("text"),
  text: c(),
  providerOptions: ce.optional()
}), A0 = f({
  type: k("image"),
  image: Y([Lg, Vn(URL)]),
  mediaType: c().optional(),
  providerOptions: ce.optional()
}), Gg = f({
  type: k("file"),
  data: Y([Lg, Vn(URL)]),
  filename: c().optional(),
  mediaType: c(),
  providerOptions: ce.optional()
}), j0 = f({
  type: k("reasoning"),
  text: c(),
  providerOptions: ce.optional()
}), M0 = f({
  type: k("tool-call"),
  toolCallId: c(),
  toolName: c(),
  input: ue(),
  providerOptions: ce.optional(),
  providerExecuted: V().optional()
}), P0 = Ae("type", [
  f({
    type: k("text"),
    value: c()
  }),
  f({
    type: k("json"),
    value: Yn
  }),
  f({
    type: k("error-text"),
    value: c()
  }),
  f({
    type: k("error-json"),
    value: Yn
  }),
  f({
    type: k("content"),
    value: A(
      Y([
        f({
          type: k("text"),
          text: c()
        }),
        f({
          type: k("media"),
          data: c(),
          mediaType: c()
        })
      ])
    )
  })
]), Bg = f({
  type: k("tool-result"),
  toolCallId: c(),
  toolName: c(),
  output: P0,
  providerOptions: ce.optional()
}), Wg = f(
  {
    role: k("system"),
    content: c(),
    providerOptions: ce.optional()
  }
), wE = Wg, Hg = f({
  role: k("user"),
  content: Y([
    c(),
    A(Y([Vg, A0, Gg]))
  ]),
  providerOptions: ce.optional()
}), $E = Hg, Kg = f({
  role: k("assistant"),
  content: Y([
    c(),
    A(
      Y([
        Vg,
        Gg,
        j0,
        M0,
        Bg
      ])
    )
  ]),
  providerOptions: ce.optional()
}), IE = Kg, Yg = f({
  role: k("tool"),
  content: A(Bg),
  providerOptions: ce.optional()
}), kE = Yg, Xg = Y([
  Wg,
  Hg,
  Kg,
  Yg
]), xE = Xg;
async function vo(e) {
  if (e.prompt == null && e.messages == null)
    throw new Jt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new Jt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new Jt({
      prompt: e,
      message: "system must be a string"
    });
  let t;
  if (e.prompt != null && typeof e.prompt == "string")
    t = [{ role: "user", content: e.prompt }];
  else if (e.prompt != null && Array.isArray(e.prompt))
    t = e.prompt;
  else if (e.messages != null)
    t = e.messages;
  else
    throw new Jt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (t.length === 0)
    throw new Jt({
      prompt: e,
      message: "messages must not be empty"
    });
  const r = await Ct({
    value: t,
    schema: A(Xg)
  });
  if (!r.success)
    throw new Jt({
      prompt: e,
      message: "The messages must be a ModelMessage[]. If you have passed a UIMessage[], you can use convertToModelMessages to convert them.",
      cause: r.error
    });
  return {
    messages: t,
    system: e.system
  };
}
function yo(e) {
  return po.isInstance(e) || Af.isInstance(e) ? new L({
    name: "GatewayError",
    message: "Vercel AI Gateway access failed. If you want to use AI SDK providers directly, use the providers, e.g. @ai-sdk/openai, or register a different global default provider.",
    cause: e
  }) : e;
}
function Ye({
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
function kn({
  model: e,
  settings: t,
  telemetry: r,
  headers: o
}) {
  var n;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    // settings:
    ...Object.entries(t).reduce((i, [a, s]) => (i[`ai.settings.${a}`] = s, i), {}),
    // add metadata as attributes:
    ...Object.entries((n = r == null ? void 0 : r.metadata) != null ? n : {}).reduce(
      (i, [a, s]) => (i[`ai.telemetry.metadata.${a}`] = s, i),
      {}
    ),
    // request headers
    ...Object.entries(o ?? {}).reduce((i, [a, s]) => (s !== void 0 && (i[`ai.request.headers.${a}`] = s), i), {})
  };
}
var z0 = {
  startSpan() {
    return xr;
  },
  startActiveSpan(e, t, r, o) {
    if (typeof t == "function")
      return t(xr);
    if (typeof r == "function")
      return r(xr);
    if (typeof o == "function")
      return o(xr);
  }
}, xr = {
  spanContext() {
    return U0;
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
}, U0 = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function xn({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || KS.getTracer("ai") : z0;
}
function Xe({
  name: e,
  tracer: t,
  attributes: r,
  fn: o,
  endWhenDone: n = !0
}) {
  return t.startActiveSpan(e, { attributes: r }, async (i) => {
    try {
      const a = await o(i);
      return n && i.end(), a;
    } catch (a) {
      try {
        Ya(i, a);
      } finally {
        i.end();
      }
      throw a;
    }
  });
}
function Ya(e, t) {
  t instanceof Error ? (e.recordException({
    name: t.name,
    message: t.message,
    stack: t.stack
  }), e.setStatus({
    code: qr.ERROR,
    message: t.message
  })) : e.setStatus({ code: qr.ERROR });
}
function pe({
  telemetry: e,
  attributes: t
}) {
  return (e == null ? void 0 : e.isEnabled) !== !0 ? {} : Object.entries(t).reduce((r, [o, n]) => {
    if (n == null)
      return r;
    if (typeof n == "object" && "input" in n && typeof n.input == "function") {
      if ((e == null ? void 0 : e.recordInputs) === !1)
        return r;
      const i = n.input();
      return i == null ? r : { ...r, [o]: i };
    }
    if (typeof n == "object" && "output" in n && typeof n.output == "function") {
      if ((e == null ? void 0 : e.recordOutputs) === !1)
        return r;
      const i = n.output();
      return i == null ? r : { ...r, [o]: i };
    }
    return { ...r, [o]: n };
  }, {});
}
function _o(e) {
  return JSON.stringify(
    e.map((t) => ({
      ...t,
      content: typeof t.content == "string" ? t.content : t.content.map(
        (r) => r.type === "file" ? {
          ...r,
          data: r.data instanceof Uint8Array ? T0(r.data) : r.data
        } : r
      )
    }))
  );
}
function Qg(e, t) {
  return {
    inputTokens: jn(e.inputTokens, t.inputTokens),
    outputTokens: jn(e.outputTokens, t.outputTokens),
    totalTokens: jn(e.totalTokens, t.totalTokens),
    reasoningTokens: jn(
      e.reasoningTokens,
      t.reasoningTokens
    ),
    cachedInputTokens: jn(
      e.cachedInputTokens,
      t.cachedInputTokens
    )
  };
}
function jn(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function Lr(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function D0({
  error: e,
  exponentialBackoffDelay: t
}) {
  const r = e.responseHeaders;
  if (!r)
    return t;
  let o;
  const n = r["retry-after-ms"];
  if (n) {
    const a = parseFloat(n);
    Number.isNaN(a) || (o = a);
  }
  const i = r["retry-after"];
  if (i && o === void 0) {
    const a = parseFloat(i);
    Number.isNaN(a) ? o = Date.parse(i) - Date.now() : o = a * 1e3;
  }
  return o != null && !Number.isNaN(o) && 0 <= o && (o < 60 * 1e3 || o < t) ? o : t;
}
var Z0 = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2,
  abortSignal: o
} = {}) => async (n) => eh(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r,
  abortSignal: o
});
async function eh(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: o,
  abortSignal: n
}, i = []) {
  try {
    return await e();
  } catch (a) {
    if (Qt(a) || t === 0)
      throw a;
    const s = uo(a), u = [...i, a], l = u.length;
    if (l > t)
      throw new ku({
        message: `Failed after ${l} attempts. Last error: ${s}`,
        reason: "maxRetriesExceeded",
        errors: u
      });
    if (a instanceof Error && Ze.isInstance(a) && a.isRetryable === !0 && l <= t)
      return await La(
        D0({
          error: a,
          exponentialBackoffDelay: r
        }),
        { abortSignal: n }
      ), eh(
        e,
        {
          maxRetries: t,
          delayInMs: o * r,
          backoffFactor: o,
          abortSignal: n
        },
        u
      );
    throw l === 1 ? a : new ku({
      message: `Failed after ${l} attempts with non-retryable error: '${s}'`,
      reason: "errorNotRetryable",
      errors: u
    });
  }
}
function jt({
  maxRetries: e,
  abortSignal: t
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new _e({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new _e({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const r = e ?? 2;
  return {
    maxRetries: r,
    retry: Z0({
      maxRetries: r,
      abortSignal: t
    })
  };
}
function Xo(e) {
  const t = e.filter(
    (r) => r.type === "text"
  );
  if (t.length !== 0)
    return t.map((r) => r.text).join("");
}
var bo = class {
  constructor({
    data: e,
    mediaType: t
  }) {
    const r = e instanceof Uint8Array;
    this.base64Data = r ? void 0 : e, this.uint8ArrayData = r ? e : void 0, this.mediaType = t;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = Dr(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = pr(this.base64Data)), this.uint8ArrayData;
  }
}, q0 = class extends bo {
  constructor(e) {
    super(e), this.type = "file";
  }
};
async function th({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: o,
  messages: n
}) {
  try {
    if (t == null)
      throw new Yo({ toolName: e.toolName });
    try {
      return await xu({ toolCall: e, tools: t });
    } catch (i) {
      if (r == null || !(Yo.isInstance(i) || og.isInstance(i)))
        throw i;
      let a = null;
      try {
        a = await r({
          toolCall: e,
          tools: t,
          inputSchema: ({ toolName: s }) => {
            const { inputSchema: u } = t[s];
            return _n(u).jsonSchema;
          },
          system: o,
          messages: n,
          error: i
        });
      } catch (s) {
        throw new g0({
          cause: s,
          originalError: i
        });
      }
      if (a == null)
        throw i;
      return await xu({ toolCall: a, tools: t });
    }
  } catch (i) {
    const a = await qt({ text: e.input }), s = a.success ? a.value : e.input;
    return {
      type: "tool-call",
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      input: s,
      dynamic: !0,
      invalid: !0,
      error: i
    };
  }
}
async function xu({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, o = t[r];
  if (o == null)
    throw new Yo({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const n = _n(o.inputSchema), i = e.input.trim() === "" ? await Ct({ value: {}, schema: n }) : await qt({ text: e.input, schema: n });
  if (i.success === !1)
    throw new og({
      toolName: r,
      toolInput: e.input,
      cause: i.error
    });
  return o.type === "dynamic" ? {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    input: i.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata,
    dynamic: !0
  } : {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: r,
    input: i.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata
  };
}
var nh = class {
  constructor({
    content: e,
    finishReason: t,
    usage: r,
    warnings: o,
    request: n,
    response: i,
    providerMetadata: a
  }) {
    this.content = e, this.finishReason = t, this.usage = r, this.warnings = o, this.request = n, this.response = i, this.providerMetadata = a;
  }
  get text() {
    return this.content.filter((e) => e.type === "text").map((e) => e.text).join("");
  }
  get reasoning() {
    return this.content.filter((e) => e.type === "reasoning");
  }
  get reasoningText() {
    return this.reasoning.length === 0 ? void 0 : this.reasoning.map((e) => e.text).join("");
  }
  get files() {
    return this.content.filter((e) => e.type === "file").map((e) => e.file);
  }
  get sources() {
    return this.content.filter((e) => e.type === "source");
  }
  get toolCalls() {
    return this.content.filter((e) => e.type === "tool-call");
  }
  get staticToolCalls() {
    return this.toolCalls.filter(
      (e) => e.dynamic !== !0
    );
  }
  get dynamicToolCalls() {
    return this.toolCalls.filter(
      (e) => e.dynamic === !0
    );
  }
  get toolResults() {
    return this.content.filter((e) => e.type === "tool-result");
  }
  get staticToolResults() {
    return this.toolResults.filter(
      (e) => e.dynamic !== !0
    );
  }
  get dynamicToolResults() {
    return this.toolResults.filter(
      (e) => e.dynamic === !0
    );
  }
};
function rh(e) {
  return ({ steps: t }) => t.length === e;
}
function SE(e) {
  return ({ steps: t }) => {
    var r, o, n;
    return (n = (o = (r = t[t.length - 1]) == null ? void 0 : r.toolCalls) == null ? void 0 : o.some(
      (i) => i.toolName === e
    )) != null ? n : !1;
  };
}
async function oh({
  stopConditions: e,
  steps: t
}) {
  return (await Promise.all(e.map((r) => r({ steps: t })))).some((r) => r);
}
function Zn({
  output: e,
  tool: t,
  errorMode: r
}) {
  return r === "text" ? { type: "error-text", value: wn(e) } : r === "json" ? { type: "error-json", value: Su(e) } : t != null && t.toModelOutput ? t.toModelOutput(e) : typeof e == "string" ? { type: "text", value: e } : { type: "json", value: Su(e) };
}
function Su(e) {
  return e === void 0 ? null : e;
}
function Qo({
  content: e,
  tools: t
}) {
  const r = [], o = e.filter((i) => i.type !== "source").filter(
    (i) => (i.type !== "tool-result" || i.providerExecuted) && (i.type !== "tool-error" || i.providerExecuted)
  ).filter((i) => i.type !== "text" || i.text.length > 0).map((i) => {
    switch (i.type) {
      case "text":
        return {
          type: "text",
          text: i.text,
          providerOptions: i.providerMetadata
        };
      case "reasoning":
        return {
          type: "reasoning",
          text: i.text,
          providerOptions: i.providerMetadata
        };
      case "file":
        return {
          type: "file",
          data: i.file.base64,
          mediaType: i.file.mediaType,
          providerOptions: i.providerMetadata
        };
      case "tool-call":
        return {
          type: "tool-call",
          toolCallId: i.toolCallId,
          toolName: i.toolName,
          input: i.input,
          providerExecuted: i.providerExecuted,
          providerOptions: i.providerMetadata
        };
      case "tool-result":
        return {
          type: "tool-result",
          toolCallId: i.toolCallId,
          toolName: i.toolName,
          output: Zn({
            tool: t == null ? void 0 : t[i.toolName],
            output: i.output,
            errorMode: "none"
          }),
          providerExecuted: !0,
          providerOptions: i.providerMetadata
        };
      case "tool-error":
        return {
          type: "tool-result",
          toolCallId: i.toolCallId,
          toolName: i.toolName,
          output: Zn({
            tool: t == null ? void 0 : t[i.toolName],
            output: i.error,
            errorMode: "json"
          }),
          providerOptions: i.providerMetadata
        };
    }
  });
  o.length > 0 && r.push({
    role: "assistant",
    content: o
  });
  const n = e.filter((i) => i.type === "tool-result" || i.type === "tool-error").filter((i) => !i.providerExecuted).map((i) => ({
    type: "tool-result",
    toolCallId: i.toolCallId,
    toolName: i.toolName,
    output: Zn({
      tool: t == null ? void 0 : t[i.toolName],
      output: i.type === "tool-result" ? i.output : i.error,
      errorMode: i.type === "tool-error" ? "text" : "none"
    })
  }));
  return n.length > 0 && r.push({
    role: "tool",
    content: n
  }), r;
}
var L0 = dr({
  prefix: "aitxt",
  size: 24
});
async function F0({
  model: e,
  tools: t,
  toolChoice: r,
  system: o,
  prompt: n,
  messages: i,
  maxRetries: a,
  abortSignal: s,
  headers: u,
  stopWhen: l = rh(1),
  experimental_output: d,
  experimental_telemetry: h,
  providerOptions: y,
  experimental_activeTools: p,
  activeTools: g = p,
  experimental_prepareStep: _,
  prepareStep: v = _,
  experimental_repairToolCall: m,
  experimental_download: b,
  experimental_context: $,
  _internal: {
    generateId: w = L0,
    currentDate: N = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: O,
  ...I
}) {
  const C = bn(e), R = Lr(l), { maxRetries: M, retry: E } = jt({
    maxRetries: a,
    abortSignal: s
  }), z = rn(I), B = Me(
    u ?? {},
    `ai/${st}`
  ), H = kn({
    model: C,
    telemetry: h,
    headers: B,
    settings: { ...z, maxRetries: M }
  }), Z = await vo({
    system: o,
    prompt: n,
    messages: i
  }), F = xn(h);
  try {
    return await Xe({
      name: "ai.generateText",
      attributes: pe({
        telemetry: h,
        attributes: {
          ...Ye({
            operationId: "ai.generateText",
            telemetry: h
          }),
          ...H,
          // model:
          "ai.model.provider": C.provider,
          "ai.model.id": C.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: n, messages: i })
          }
        }
      }),
      tracer: F,
      fn: async (te) => {
        var we, Ee, ie, Ce, oe, U, x;
        const J = rn(I);
        let le, ve = [], ye = [];
        const et = [], he = [];
        do {
          const Pe = [
            ...Z.messages,
            ...et
          ], me = await (v == null ? void 0 : v({
            model: C,
            steps: he,
            stepNumber: he.length,
            messages: Pe
          })), fe = await ho({
            prompt: {
              system: (we = me == null ? void 0 : me.system) != null ? we : Z.system,
              messages: (Ee = me == null ? void 0 : me.messages) != null ? Ee : Pe
            },
            supportedUrls: await C.supportedUrls,
            download: b
          }), K = bn(
            (ie = me == null ? void 0 : me.model) != null ? ie : C
          ), { toolChoice: G, tools: q } = Jg({
            tools: t,
            toolChoice: (Ce = me == null ? void 0 : me.toolChoice) != null ? Ce : r,
            activeTools: (oe = me == null ? void 0 : me.activeTools) != null ? oe : g
          });
          le = await E(
            () => {
              var de;
              return Xe({
                name: "ai.generateText.doGenerate",
                attributes: pe({
                  telemetry: h,
                  attributes: {
                    ...Ye({
                      operationId: "ai.generateText.doGenerate",
                      telemetry: h
                    }),
                    ...H,
                    // model:
                    "ai.model.provider": K.provider,
                    "ai.model.id": K.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: () => _o(fe)
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: () => q == null ? void 0 : q.map((Be) => JSON.stringify(Be))
                    },
                    "ai.prompt.toolChoice": {
                      input: () => G != null ? JSON.stringify(G) : void 0
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": K.provider,
                    "gen_ai.request.model": K.modelId,
                    "gen_ai.request.frequency_penalty": I.frequencyPenalty,
                    "gen_ai.request.max_tokens": I.maxOutputTokens,
                    "gen_ai.request.presence_penalty": I.presencePenalty,
                    "gen_ai.request.stop_sequences": I.stopSequences,
                    "gen_ai.request.temperature": (de = I.temperature) != null ? de : void 0,
                    "gen_ai.request.top_k": I.topK,
                    "gen_ai.request.top_p": I.topP
                  }
                }),
                tracer: F,
                fn: async (Be) => {
                  var Sn, Tn, Mt, nt, En, Pt, cn, dn;
                  const qe = await K.doGenerate({
                    ...J,
                    tools: q,
                    toolChoice: G,
                    responseFormat: d == null ? void 0 : d.responseFormat,
                    prompt: fe,
                    providerOptions: y,
                    abortSignal: s,
                    headers: B
                  }), Tt = {
                    id: (Tn = (Sn = qe.response) == null ? void 0 : Sn.id) != null ? Tn : w(),
                    timestamp: (nt = (Mt = qe.response) == null ? void 0 : Mt.timestamp) != null ? nt : N(),
                    modelId: (Pt = (En = qe.response) == null ? void 0 : En.modelId) != null ? Pt : K.modelId,
                    headers: (cn = qe.response) == null ? void 0 : cn.headers,
                    body: (dn = qe.response) == null ? void 0 : dn.body
                  };
                  return Be.setAttributes(
                    pe({
                      telemetry: h,
                      attributes: {
                        "ai.response.finishReason": qe.finishReason,
                        "ai.response.text": {
                          output: () => Xo(qe.content)
                        },
                        "ai.response.toolCalls": {
                          output: () => {
                            const On = Tu(qe.content);
                            return On == null ? void 0 : JSON.stringify(On);
                          }
                        },
                        "ai.response.id": Tt.id,
                        "ai.response.model": Tt.modelId,
                        "ai.response.timestamp": Tt.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          qe.providerMetadata
                        ),
                        // TODO rename telemetry attributes to inputTokens and outputTokens
                        "ai.usage.promptTokens": qe.usage.inputTokens,
                        "ai.usage.completionTokens": qe.usage.outputTokens,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [qe.finishReason],
                        "gen_ai.response.id": Tt.id,
                        "gen_ai.response.model": Tt.modelId,
                        "gen_ai.usage.input_tokens": qe.usage.inputTokens,
                        "gen_ai.usage.output_tokens": qe.usage.outputTokens
                      }
                    })
                  ), { ...qe, response: Tt };
                }
              });
            }
          );
          const Oe = await Promise.all(
            le.content.filter(
              (de) => de.type === "tool-call"
            ).map(
              (de) => th({
                toolCall: de,
                tools: t,
                repairToolCall: m,
                system: o,
                messages: Pe
              })
            )
          );
          for (const de of Oe) {
            if (de.invalid)
              continue;
            const Be = t[de.toolName];
            (Be == null ? void 0 : Be.onInputAvailable) != null && await Be.onInputAvailable({
              input: de.input,
              toolCallId: de.toolCallId,
              messages: Pe,
              abortSignal: s,
              experimental_context: $
            });
          }
          const wt = Oe.filter(
            (de) => de.invalid && de.dynamic
          );
          ye = [];
          for (const de of wt)
            ye.push({
              type: "tool-error",
              toolCallId: de.toolCallId,
              toolName: de.toolName,
              input: de.input,
              error: uo(de.error),
              dynamic: !0
            });
          ve = Oe.filter(
            (de) => !de.providerExecuted
          ), t != null && ye.push(
            ...await J0({
              toolCalls: ve.filter(
                (de) => !de.invalid
              ),
              tools: t,
              tracer: F,
              telemetry: h,
              messages: Pe,
              abortSignal: s,
              experimental_context: $
            })
          );
          const D = G0({
            content: le.content,
            toolCalls: Oe,
            toolOutputs: ye
          });
          et.push(
            ...Qo({
              content: D,
              tools: t
            })
          );
          const ae = new nh({
            content: D,
            finishReason: le.finishReason,
            usage: le.usage,
            warnings: le.warnings,
            providerMetadata: le.providerMetadata,
            request: (U = le.request) != null ? U : {},
            response: {
              ...le.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(et)
            }
          });
          ln((x = le.warnings) != null ? x : []), he.push(ae), await (O == null ? void 0 : O(ae));
        } while (
          // there are tool calls:
          ve.length > 0 && // all current tool calls have outputs (incl. execution errors):
          ye.length === ve.length && // continue until a stop condition is met:
          !await oh({ stopConditions: R, steps: he })
        );
        te.setAttributes(
          pe({
            telemetry: h,
            attributes: {
              "ai.response.finishReason": le.finishReason,
              "ai.response.text": {
                output: () => Xo(le.content)
              },
              "ai.response.toolCalls": {
                output: () => {
                  const Pe = Tu(le.content);
                  return Pe == null ? void 0 : JSON.stringify(Pe);
                }
              },
              "ai.response.providerMetadata": JSON.stringify(
                le.providerMetadata
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": le.usage.inputTokens,
              "ai.usage.completionTokens": le.usage.outputTokens
            }
          })
        );
        const Re = he[he.length - 1];
        return new V0({
          steps: he,
          resolvedOutput: await (d == null ? void 0 : d.parseOutput(
            { text: Re.text },
            {
              response: Re.response,
              usage: Re.usage,
              finishReason: Re.finishReason
            }
          ))
        });
      }
    });
  } catch (te) {
    throw yo(te);
  }
}
async function J0({
  toolCalls: e,
  tools: t,
  tracer: r,
  telemetry: o,
  messages: n,
  abortSignal: i,
  experimental_context: a
}) {
  return (await Promise.all(
    e.map(async ({ toolCallId: u, toolName: l, input: d }) => {
      const h = t[l];
      if ((h == null ? void 0 : h.execute) != null)
        return Xe({
          name: "ai.toolCall",
          attributes: pe({
            telemetry: o,
            attributes: {
              ...Ye({
                operationId: "ai.toolCall",
                telemetry: o
              }),
              "ai.toolCall.name": l,
              "ai.toolCall.id": u,
              "ai.toolCall.args": {
                output: () => JSON.stringify(d)
              }
            }
          }),
          tracer: r,
          fn: async (y) => {
            try {
              const p = Xm({
                execute: h.execute.bind(h),
                input: d,
                options: {
                  toolCallId: u,
                  messages: n,
                  abortSignal: i,
                  experimental_context: a
                }
              });
              let g;
              for await (const _ of p)
                _.type === "final" && (g = _.output);
              try {
                y.setAttributes(
                  pe({
                    telemetry: o,
                    attributes: {
                      "ai.toolCall.result": {
                        output: () => JSON.stringify(g)
                      }
                    }
                  })
                );
              } catch {
              }
              return {
                type: "tool-result",
                toolCallId: u,
                toolName: l,
                input: d,
                output: g,
                dynamic: h.type === "dynamic"
              };
            } catch (p) {
              return Ya(y, p), {
                type: "tool-error",
                toolCallId: u,
                toolName: l,
                input: d,
                error: p,
                dynamic: h.type === "dynamic"
              };
            }
          }
        });
    })
  )).filter(
    (u) => u != null
  );
}
var V0 = class {
  constructor(e) {
    this.steps = e.steps, this.resolvedOutput = e.resolvedOutput;
  }
  get finalStep() {
    return this.steps[this.steps.length - 1];
  }
  get content() {
    return this.finalStep.content;
  }
  get text() {
    return this.finalStep.text;
  }
  get files() {
    return this.finalStep.files;
  }
  get reasoningText() {
    return this.finalStep.reasoningText;
  }
  get reasoning() {
    return this.finalStep.reasoning;
  }
  get toolCalls() {
    return this.finalStep.toolCalls;
  }
  get staticToolCalls() {
    return this.finalStep.staticToolCalls;
  }
  get dynamicToolCalls() {
    return this.finalStep.dynamicToolCalls;
  }
  get toolResults() {
    return this.finalStep.toolResults;
  }
  get staticToolResults() {
    return this.finalStep.staticToolResults;
  }
  get dynamicToolResults() {
    return this.finalStep.dynamicToolResults;
  }
  get sources() {
    return this.finalStep.sources;
  }
  get finishReason() {
    return this.finalStep.finishReason;
  }
  get warnings() {
    return this.finalStep.warnings;
  }
  get providerMetadata() {
    return this.finalStep.providerMetadata;
  }
  get response() {
    return this.finalStep.response;
  }
  get request() {
    return this.finalStep.request;
  }
  get usage() {
    return this.finalStep.usage;
  }
  get totalUsage() {
    return this.steps.reduce(
      (e, t) => Qg(e, t.usage),
      {
        inputTokens: void 0,
        outputTokens: void 0,
        totalTokens: void 0,
        reasoningTokens: void 0,
        cachedInputTokens: void 0
      }
    );
  }
  get experimental_output() {
    if (this.resolvedOutput == null)
      throw new Wf();
    return this.resolvedOutput;
  }
};
function Tu(e) {
  const t = e.filter(
    (r) => r.type === "tool-call"
  );
  if (t.length !== 0)
    return t.map((r) => ({
      toolCallId: r.toolCallId,
      toolName: r.toolName,
      input: r.input
    }));
}
function G0({
  content: e,
  toolCalls: t,
  toolOutputs: r
}) {
  return [
    ...e.map((o) => {
      switch (o.type) {
        case "text":
        case "reasoning":
        case "source":
          return o;
        case "file":
          return {
            type: "file",
            file: new bo(o)
          };
        case "tool-call":
          return t.find(
            (n) => n.toolCallId === o.toolCallId
          );
        case "tool-result": {
          const n = t.find(
            (i) => i.toolCallId === o.toolCallId
          );
          if (n == null)
            throw new Error(`Tool call ${o.toolCallId} not found.`);
          return o.isError ? {
            type: "tool-error",
            toolCallId: o.toolCallId,
            toolName: o.toolName,
            input: n.input,
            error: o.result,
            providerExecuted: !0,
            dynamic: n.dynamic
          } : {
            type: "tool-result",
            toolCallId: o.toolCallId,
            toolName: o.toolName,
            input: n.input,
            output: o.result,
            providerExecuted: !0,
            dynamic: n.dynamic
          };
        }
      }
    }),
    ...r
  ];
}
function vr(e, t) {
  const r = new Headers(e ?? {});
  for (const [o, n] of Object.entries(t))
    r.has(o) || r.set(o, n);
  return r;
}
function ih({
  status: e,
  statusText: t,
  headers: r,
  textStream: o
}) {
  return new Response(o.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: vr(r, {
      "content-type": "text/plain; charset=utf-8"
    })
  });
}
function ah({
  response: e,
  status: t,
  statusText: r,
  headers: o,
  stream: n
}) {
  e.writeHead(t ?? 200, r, o);
  const i = n.getReader();
  (async () => {
    try {
      for (; ; ) {
        const { done: s, value: u } = await i.read();
        if (s)
          break;
        e.write(u);
      }
    } catch (s) {
      throw s;
    } finally {
      e.end();
    }
  })();
}
function sh({
  response: e,
  status: t,
  statusText: r,
  headers: o,
  textStream: n
}) {
  ah({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(
      vr(o, {
        "content-type": "text/plain; charset=utf-8"
      }).entries()
    ),
    stream: n.pipeThrough(new TextEncoderStream())
  });
}
var uh = class extends TransformStream {
  constructor() {
    super({
      transform(e, t) {
        t.enqueue(`data: ${JSON.stringify(e)}

`);
      },
      flush(e) {
        e.enqueue(`data: [DONE]

`);
      }
    });
  }
}, lh = {
  "content-type": "text/event-stream",
  "cache-control": "no-cache",
  connection: "keep-alive",
  "x-vercel-ai-ui-message-stream": "v1",
  "x-accel-buffering": "no"
  // disable nginx buffering
};
function B0({
  status: e,
  statusText: t,
  headers: r,
  stream: o,
  consumeSseStream: n
}) {
  let i = o.pipeThrough(new uh());
  if (n) {
    const [a, s] = i.tee();
    i = a, n({ stream: s });
  }
  return new Response(i.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: vr(r, lh)
  });
}
function W0({
  originalMessages: e,
  responseMessageId: t
}) {
  if (e == null)
    return;
  const r = e[e.length - 1];
  return (r == null ? void 0 : r.role) === "assistant" ? r.id : typeof t == "function" ? t() : t;
}
var ch = Y([
  ke({
    type: k("text-start"),
    id: c(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("text-delta"),
    id: c(),
    delta: c(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("text-end"),
    id: c(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("error"),
    errorText: c()
  }),
  ke({
    type: k("tool-input-start"),
    toolCallId: c(),
    toolName: c(),
    providerExecuted: V().optional(),
    dynamic: V().optional()
  }),
  ke({
    type: k("tool-input-delta"),
    toolCallId: c(),
    inputTextDelta: c()
  }),
  ke({
    type: k("tool-input-available"),
    toolCallId: c(),
    toolName: c(),
    input: ue(),
    providerExecuted: V().optional(),
    providerMetadata: ce.optional(),
    dynamic: V().optional()
  }),
  ke({
    type: k("tool-input-error"),
    toolCallId: c(),
    toolName: c(),
    input: ue(),
    providerExecuted: V().optional(),
    providerMetadata: ce.optional(),
    dynamic: V().optional(),
    errorText: c()
  }),
  ke({
    type: k("tool-output-available"),
    toolCallId: c(),
    output: ue(),
    providerExecuted: V().optional(),
    dynamic: V().optional(),
    preliminary: V().optional()
  }),
  ke({
    type: k("tool-output-error"),
    toolCallId: c(),
    errorText: c(),
    providerExecuted: V().optional(),
    dynamic: V().optional()
  }),
  ke({
    type: k("reasoning-start"),
    id: c(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("reasoning-delta"),
    id: c(),
    delta: c(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("reasoning-end"),
    id: c(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("source-url"),
    sourceId: c(),
    url: c(),
    title: c().optional(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("source-document"),
    sourceId: c(),
    mediaType: c(),
    title: c(),
    filename: c().optional(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: k("file"),
    url: c(),
    mediaType: c(),
    providerMetadata: ce.optional()
  }),
  ke({
    type: qa(
      (e) => typeof e == "string" && e.startsWith("data-"),
      { message: 'Type must start with "data-"' }
    ),
    id: c().optional(),
    data: ue(),
    transient: V().optional()
  }),
  ke({
    type: k("start-step")
  }),
  ke({
    type: k("finish-step")
  }),
  ke({
    type: k("start"),
    messageId: c().optional(),
    messageMetadata: ue().optional()
  }),
  ke({
    type: k("finish"),
    messageMetadata: ue().optional()
  }),
  ke({
    type: k("abort")
  }),
  ke({
    type: k("message-metadata"),
    messageMetadata: ue()
  })
]);
function H0(e) {
  return e.type.startsWith("data-");
}
function Xa(e, t) {
  if (e === void 0 && t === void 0)
    return;
  if (e === void 0)
    return t;
  if (t === void 0)
    return e;
  const r = { ...e };
  for (const o in t)
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      const n = t[o];
      if (n === void 0)
        continue;
      const i = o in e ? e[o] : void 0, a = n !== null && typeof n == "object" && !Array.isArray(n) && !(n instanceof Date) && !(n instanceof RegExp), s = i != null && typeof i == "object" && !Array.isArray(i) && !(i instanceof Date) && !(i instanceof RegExp);
      a && s ? r[o] = Xa(
        i,
        n
      ) : r[o] = n;
    }
  return r;
}
function K0(e) {
  const t = ["ROOT"];
  let r = -1, o = null;
  function n(u, l, d) {
    switch (u) {
      case '"': {
        r = l, t.pop(), t.push(d), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        r = l, o = l, t.pop(), t.push(d), t.push("INSIDE_LITERAL");
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
        r = l, t.pop(), t.push(d), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        r = l, t.pop(), t.push(d), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        r = l, t.pop(), t.push(d), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function i(u, l) {
    switch (u) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        r = l, t.pop();
        break;
      }
    }
  }
  function a(u, l) {
    switch (u) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        r = l, t.pop();
        break;
      }
    }
  }
  for (let u = 0; u < e.length; u++) {
    const l = e[u];
    switch (t[t.length - 1]) {
      case "ROOT":
        n(l, u, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (l) {
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
        switch (l) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (l) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (l) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        n(l, u, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        i(l, u);
        break;
      }
      case "INSIDE_STRING": {
        switch (l) {
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
        switch (l) {
          case "]": {
            r = u, t.pop();
            break;
          }
          default: {
            r = u, n(l, u, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (l) {
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
        n(l, u, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), r = u;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (l) {
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
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && a(l, u), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && i(l, u);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && i(l, u);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && a(l, u);
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
        const h = e.substring(o, u + 1);
        !"false".startsWith(h) && !"true".startsWith(h) && !"null".startsWith(h) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? i(l, u) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && a(l, u)) : r = u;
        break;
      }
    }
  }
  let s = e.slice(0, r + 1);
  for (let u = t.length - 1; u >= 0; u--)
    switch (t[u]) {
      case "INSIDE_STRING": {
        s += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        s += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const d = e.substring(o, e.length);
        "true".startsWith(d) ? s += "true".slice(d.length) : "false".startsWith(d) ? s += "false".slice(d.length) : "null".startsWith(d) && (s += "null".slice(d.length));
      }
    }
  return s;
}
async function Qa(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = await qt({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = await qt({ text: K0(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
function Ht(e) {
  return e.type.startsWith("tool-");
}
function dh(e) {
  return e.type === "dynamic-tool";
}
function Fr(e) {
  return Ht(e) || dh(e);
}
function Xn(e) {
  return e.type.split("-").slice(1).join("-");
}
function TE(e) {
  return dh(e) ? e.toolName : Xn(e);
}
function es({
  lastMessage: e,
  messageId: t
}) {
  return {
    message: (e == null ? void 0 : e.role) === "assistant" ? e : {
      id: t,
      metadata: void 0,
      role: "assistant",
      parts: []
    },
    activeTextParts: {},
    activeReasoningParts: {},
    partialToolCalls: {}
  };
}
function ts({
  stream: e,
  messageMetadataSchema: t,
  dataPartSchemas: r,
  runUpdateMessageJob: o,
  onError: n,
  onToolCall: i,
  onData: a
}) {
  return e.pipeThrough(
    new TransformStream({
      async transform(s, u) {
        await o(async ({ state: l, write: d }) => {
          var h, y, p, g;
          function _(w) {
            const O = l.message.parts.filter(Ht).find(
              (I) => I.toolCallId === w
            );
            if (O == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return O;
          }
          function v(w) {
            const O = l.message.parts.filter(
              (I) => I.type === "dynamic-tool"
            ).find(
              (I) => I.toolCallId === w
            );
            if (O == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return O;
          }
          function m(w) {
            var N;
            const O = l.message.parts.find(
              (R) => Ht(R) && R.toolCallId === w.toolCallId
            ), I = w, C = O;
            O != null ? (O.state = w.state, C.input = I.input, C.output = I.output, C.errorText = I.errorText, C.rawInput = I.rawInput, C.preliminary = I.preliminary, C.providerExecuted = (N = I.providerExecuted) != null ? N : O.providerExecuted, I.providerMetadata != null && O.state === "input-available" && (O.callProviderMetadata = I.providerMetadata)) : l.message.parts.push({
              type: `tool-${w.toolName}`,
              toolCallId: w.toolCallId,
              state: w.state,
              input: I.input,
              output: I.output,
              rawInput: I.rawInput,
              errorText: I.errorText,
              providerExecuted: I.providerExecuted,
              preliminary: I.preliminary,
              ...I.providerMetadata != null ? { callProviderMetadata: I.providerMetadata } : {}
            });
          }
          function b(w) {
            var N;
            const O = l.message.parts.find(
              (R) => R.type === "dynamic-tool" && R.toolCallId === w.toolCallId
            ), I = w, C = O;
            O != null ? (O.state = w.state, C.toolName = w.toolName, C.input = I.input, C.output = I.output, C.errorText = I.errorText, C.rawInput = (N = I.rawInput) != null ? N : C.rawInput, C.preliminary = I.preliminary, I.providerMetadata != null && O.state === "input-available" && (O.callProviderMetadata = I.providerMetadata)) : l.message.parts.push({
              type: "dynamic-tool",
              toolName: w.toolName,
              toolCallId: w.toolCallId,
              state: w.state,
              input: I.input,
              output: I.output,
              errorText: I.errorText,
              preliminary: I.preliminary,
              ...I.providerMetadata != null ? { callProviderMetadata: I.providerMetadata } : {}
            });
          }
          async function $(w) {
            if (w != null) {
              const N = l.message.metadata != null ? Xa(l.message.metadata, w) : w;
              t != null && await Ut({
                value: N,
                schema: t
              }), l.message.metadata = N;
            }
          }
          switch (s.type) {
            case "text-start": {
              const w = {
                type: "text",
                text: "",
                providerMetadata: s.providerMetadata,
                state: "streaming"
              };
              l.activeTextParts[s.id] = w, l.message.parts.push(w), d();
              break;
            }
            case "text-delta": {
              const w = l.activeTextParts[s.id];
              w.text += s.delta, w.providerMetadata = (h = s.providerMetadata) != null ? h : w.providerMetadata, d();
              break;
            }
            case "text-end": {
              const w = l.activeTextParts[s.id];
              w.state = "done", w.providerMetadata = (y = s.providerMetadata) != null ? y : w.providerMetadata, delete l.activeTextParts[s.id], d();
              break;
            }
            case "reasoning-start": {
              const w = {
                type: "reasoning",
                text: "",
                providerMetadata: s.providerMetadata,
                state: "streaming"
              };
              l.activeReasoningParts[s.id] = w, l.message.parts.push(w), d();
              break;
            }
            case "reasoning-delta": {
              const w = l.activeReasoningParts[s.id];
              w.text += s.delta, w.providerMetadata = (p = s.providerMetadata) != null ? p : w.providerMetadata, d();
              break;
            }
            case "reasoning-end": {
              const w = l.activeReasoningParts[s.id];
              w.providerMetadata = (g = s.providerMetadata) != null ? g : w.providerMetadata, w.state = "done", delete l.activeReasoningParts[s.id], d();
              break;
            }
            case "file": {
              l.message.parts.push({
                type: "file",
                mediaType: s.mediaType,
                url: s.url
              }), d();
              break;
            }
            case "source-url": {
              l.message.parts.push({
                type: "source-url",
                sourceId: s.sourceId,
                url: s.url,
                title: s.title,
                providerMetadata: s.providerMetadata
              }), d();
              break;
            }
            case "source-document": {
              l.message.parts.push({
                type: "source-document",
                sourceId: s.sourceId,
                mediaType: s.mediaType,
                title: s.title,
                filename: s.filename,
                providerMetadata: s.providerMetadata
              }), d();
              break;
            }
            case "tool-input-start": {
              const w = l.message.parts.filter(Ht);
              l.partialToolCalls[s.toolCallId] = {
                text: "",
                toolName: s.toolName,
                index: w.length,
                dynamic: s.dynamic
              }, s.dynamic ? b({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "input-streaming",
                input: void 0
              }) : m({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: s.providerExecuted
              }), d();
              break;
            }
            case "tool-input-delta": {
              const w = l.partialToolCalls[s.toolCallId];
              w.text += s.inputTextDelta;
              const { value: N } = await Qa(
                w.text
              );
              w.dynamic ? b({
                toolCallId: s.toolCallId,
                toolName: w.toolName,
                state: "input-streaming",
                input: N
              }) : m({
                toolCallId: s.toolCallId,
                toolName: w.toolName,
                state: "input-streaming",
                input: N
              }), d();
              break;
            }
            case "tool-input-available": {
              s.dynamic ? b({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "input-available",
                input: s.input,
                providerMetadata: s.providerMetadata
              }) : m({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "input-available",
                input: s.input,
                providerExecuted: s.providerExecuted,
                providerMetadata: s.providerMetadata
              }), d(), i && !s.providerExecuted && await i({
                toolCall: s
              });
              break;
            }
            case "tool-input-error": {
              s.dynamic ? b({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "output-error",
                input: s.input,
                errorText: s.errorText,
                providerMetadata: s.providerMetadata
              }) : m({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "output-error",
                input: void 0,
                rawInput: s.input,
                errorText: s.errorText,
                providerExecuted: s.providerExecuted,
                providerMetadata: s.providerMetadata
              }), d();
              break;
            }
            case "tool-output-available": {
              if (s.dynamic) {
                const w = v(
                  s.toolCallId
                );
                b({
                  toolCallId: s.toolCallId,
                  toolName: w.toolName,
                  state: "output-available",
                  input: w.input,
                  output: s.output,
                  preliminary: s.preliminary
                });
              } else {
                const w = _(s.toolCallId);
                m({
                  toolCallId: s.toolCallId,
                  toolName: Xn(w),
                  state: "output-available",
                  input: w.input,
                  output: s.output,
                  providerExecuted: s.providerExecuted,
                  preliminary: s.preliminary
                });
              }
              d();
              break;
            }
            case "tool-output-error": {
              if (s.dynamic) {
                const w = v(
                  s.toolCallId
                );
                b({
                  toolCallId: s.toolCallId,
                  toolName: w.toolName,
                  state: "output-error",
                  input: w.input,
                  errorText: s.errorText
                });
              } else {
                const w = _(s.toolCallId);
                m({
                  toolCallId: s.toolCallId,
                  toolName: Xn(w),
                  state: "output-error",
                  input: w.input,
                  rawInput: w.rawInput,
                  errorText: s.errorText
                });
              }
              d();
              break;
            }
            case "start-step": {
              l.message.parts.push({ type: "step-start" });
              break;
            }
            case "finish-step": {
              l.activeTextParts = {}, l.activeReasoningParts = {};
              break;
            }
            case "start": {
              s.messageId != null && (l.message.id = s.messageId), await $(s.messageMetadata), (s.messageId != null || s.messageMetadata != null) && d();
              break;
            }
            case "finish": {
              await $(s.messageMetadata), s.messageMetadata != null && d();
              break;
            }
            case "message-metadata": {
              await $(s.messageMetadata), s.messageMetadata != null && d();
              break;
            }
            case "error": {
              n == null || n(new Error(s.errorText));
              break;
            }
            default:
              if (H0(s)) {
                (r == null ? void 0 : r[s.type]) != null && await Ut({
                  value: s.data,
                  schema: r[s.type]
                });
                const w = s;
                if (w.transient) {
                  a == null || a(w);
                  break;
                }
                const N = w.id != null ? l.message.parts.find(
                  (O) => w.type === O.type && w.id === O.id
                ) : void 0;
                N != null ? N.data = w.data : l.message.parts.push(w), a == null || a(w), d();
              }
          }
          u.enqueue(s);
        });
      }
    })
  );
}
function ph({
  messageId: e,
  originalMessages: t = [],
  onFinish: r,
  onError: o,
  stream: n
}) {
  let i = t == null ? void 0 : t[t.length - 1];
  (i == null ? void 0 : i.role) !== "assistant" ? i = void 0 : e = i.id;
  let a = !1;
  const s = n.pipeThrough(
    new TransformStream({
      transform(y, p) {
        if (y.type === "start") {
          const g = y;
          g.messageId == null && e != null && (g.messageId = e);
        }
        y.type === "abort" && (a = !0), p.enqueue(y);
      }
    })
  );
  if (r == null)
    return s;
  const u = es({
    lastMessage: i ? structuredClone(i) : void 0,
    messageId: e ?? ""
    // will be overridden by the stream
  }), l = async (y) => {
    await y({ state: u, write: () => {
    } });
  };
  let d = !1;
  const h = async () => {
    if (d || !r)
      return;
    d = !0;
    const y = u.message.id === (i == null ? void 0 : i.id);
    await r({
      isAborted: a,
      isContinuation: y,
      responseMessage: u.message,
      messages: [
        ...y ? t.slice(0, -1) : t,
        u.message
      ]
    });
  };
  return ts({
    stream: s,
    runUpdateMessageJob: l,
    onError: o
  }).pipeThrough(
    new TransformStream({
      transform(y, p) {
        p.enqueue(y);
      },
      // @ts-expect-error cancel is still new and missing from types https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility
      async cancel() {
        await h();
      },
      async flush() {
        await h();
      }
    })
  );
}
function Y0({
  response: e,
  status: t,
  statusText: r,
  headers: o,
  stream: n,
  consumeSseStream: i
}) {
  let a = n.pipeThrough(new uh());
  if (i) {
    const [s, u] = a.tee();
    a = s, i({ stream: u });
  }
  ah({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(
      vr(o, lh).entries()
    ),
    stream: a.pipeThrough(new TextEncoderStream())
  });
}
function Nt(e) {
  const t = e.pipeThrough(new TransformStream());
  return t[Symbol.asyncIterator] = function() {
    const r = this.getReader();
    let o = !1;
    async function n(i) {
      var a;
      o = !0;
      try {
        i && await ((a = r.cancel) == null ? void 0 : a.call(r));
      } finally {
        try {
          r.releaseLock();
        } catch {
        }
      }
    }
    return {
      /**
       * Reads the next chunk from the stream.
       * @returns A promise resolving to the next IteratorResult.
       */
      async next() {
        if (o)
          return { done: !0, value: void 0 };
        const { done: i, value: a } = await r.read();
        return i ? (await n(!0), { done: !0, value: void 0 }) : { done: !1, value: a };
      },
      /**
       * Called on early exit (e.g., break from for-await).
       * Ensures the stream is cancelled and resources are released.
       * @returns A promise resolving to a completed IteratorResult.
       */
      async return() {
        return await n(!0), { done: !0, value: void 0 };
      },
      /**
       * Called on early exit with error.
       * Ensures the stream is cancelled and resources are released, then rethrows the error.
       * @param err The error to throw.
       * @returns A promise that rejects with the provided error.
       */
      async throw(i) {
        throw await n(!0), i;
      }
    };
  }, t;
}
async function wo({
  stream: e,
  onError: t
}) {
  const r = e.getReader();
  try {
    for (; ; ) {
      const { done: o } = await r.read();
      if (o)
        break;
    }
  } catch (o) {
    t == null || t(o);
  } finally {
    r.releaseLock();
  }
}
function Eu() {
  let e, t;
  return {
    promise: new Promise((o, n) => {
      e = o, t = n;
    }),
    resolve: e,
    reject: t
  };
}
function mh() {
  let e = [], t = null, r = !1, o = Eu();
  const n = () => {
    r = !0, o.resolve(), e.forEach((a) => a.cancel()), e = [], t == null || t.close();
  }, i = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return o = Eu(), await o.promise, i();
    try {
      const { value: a, done: s } = await e[0].read();
      s ? (e.shift(), e.length > 0 ? await i() : r && (t == null || t.close())) : t == null || t.enqueue(a);
    } catch (a) {
      t == null || t.error(a), e.shift(), n();
    }
  };
  return {
    stream: new ReadableStream({
      start(a) {
        t = a;
      },
      pull: i,
      async cancel() {
        for (const a of e)
          await a.cancel();
        e = [], r = !0;
      }
    }),
    addStream: (a) => {
      if (r)
        throw new Error("Cannot add inner stream: outer stream is closed");
      e.push(a.getReader()), o.resolve();
    },
    /**
     * Gracefully close the outer stream. This will let the inner streams
     * finish processing and then close the outer stream.
     */
    close: () => {
      r = !0, o.resolve(), e.length === 0 && (t == null || t.close());
    },
    /**
     * Immediately close the outer stream. This will cancel all inner streams
     * and close the outer stream.
     */
    terminate: n
  };
}
var gt = class {
  constructor() {
    this.status = { type: "pending" }, this._resolve = void 0, this._reject = void 0;
  }
  get promise() {
    return this._promise ? this._promise : (this._promise = new Promise((e, t) => {
      this.status.type === "resolved" ? e(this.status.value) : this.status.type === "rejected" && t(this.status.error), this._resolve = e, this._reject = t;
    }), this._promise);
  }
  resolve(e) {
    var t;
    this.status = { type: "resolved", value: e }, this._promise && ((t = this._resolve) == null || t.call(this, e));
  }
  reject(e) {
    var t;
    this.status = { type: "rejected", error: e }, this._promise && ((t = this._reject) == null || t.call(this, e));
  }
};
function fh() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
function X0({
  tools: e,
  generatorStream: t,
  tracer: r,
  telemetry: o,
  system: n,
  messages: i,
  abortSignal: a,
  repairToolCall: s,
  experimental_context: u
}) {
  let l = null;
  const d = new ReadableStream({
    start(m) {
      l = m;
    }
  }), h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map();
  let p = !1, g;
  function _() {
    p && h.size === 0 && (g != null && l.enqueue(g), l.close());
  }
  const v = new TransformStream({
    async transform(m, b) {
      const $ = m.type;
      switch ($) {
        case "stream-start":
        case "text-start":
        case "text-delta":
        case "text-end":
        case "reasoning-start":
        case "reasoning-delta":
        case "reasoning-end":
        case "tool-input-start":
        case "tool-input-delta":
        case "tool-input-end":
        case "source":
        case "response-metadata":
        case "error":
        case "raw": {
          b.enqueue(m);
          break;
        }
        case "file": {
          b.enqueue({
            type: "file",
            file: new q0({
              data: m.data,
              mediaType: m.mediaType
            })
          });
          break;
        }
        case "finish": {
          g = {
            type: "finish",
            finishReason: m.finishReason,
            usage: m.usage,
            providerMetadata: m.providerMetadata
          };
          break;
        }
        case "tool-call": {
          try {
            const w = await th({
              toolCall: m,
              tools: e,
              repairToolCall: s,
              system: n,
              messages: i
            });
            if (b.enqueue(w), w.invalid) {
              l.enqueue({
                type: "tool-error",
                toolCallId: w.toolCallId,
                toolName: w.toolName,
                input: w.input,
                error: uo(w.error),
                dynamic: !0
              });
              break;
            }
            const N = e[w.toolName];
            if (y.set(w.toolCallId, w.input), N.onInputAvailable != null && await N.onInputAvailable({
              input: w.input,
              toolCallId: w.toolCallId,
              messages: i,
              abortSignal: a,
              experimental_context: u
            }), N.execute != null && w.providerExecuted !== !0) {
              const O = Fe();
              h.add(O), Xe({
                name: "ai.toolCall",
                attributes: pe({
                  telemetry: o,
                  attributes: {
                    ...Ye({
                      operationId: "ai.toolCall",
                      telemetry: o
                    }),
                    "ai.toolCall.name": w.toolName,
                    "ai.toolCall.id": w.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(w.input)
                    }
                  }
                }),
                tracer: r,
                fn: async (I) => {
                  let C;
                  try {
                    const R = Xm({
                      execute: N.execute.bind(N),
                      input: w.input,
                      options: {
                        toolCallId: w.toolCallId,
                        messages: i,
                        abortSignal: a,
                        experimental_context: u
                      }
                    });
                    for await (const M of R)
                      l.enqueue({
                        ...w,
                        type: "tool-result",
                        output: M.output,
                        ...M.type === "preliminary" && {
                          preliminary: !0
                        }
                      }), M.type === "final" && (C = M.output);
                  } catch (R) {
                    Ya(I, R), l.enqueue({
                      ...w,
                      type: "tool-error",
                      error: R
                    }), h.delete(O), _();
                    return;
                  }
                  h.delete(O), _();
                  try {
                    I.setAttributes(
                      pe({
                        telemetry: o,
                        attributes: {
                          "ai.toolCall.result": {
                            output: () => JSON.stringify(C)
                          }
                        }
                      })
                    );
                  } catch {
                  }
                }
              });
            }
          } catch (w) {
            l.enqueue({ type: "error", error: w });
          }
          break;
        }
        case "tool-result": {
          const w = m.toolName;
          m.isError ? l.enqueue({
            type: "tool-error",
            toolCallId: m.toolCallId,
            toolName: w,
            input: y.get(m.toolCallId),
            providerExecuted: m.providerExecuted,
            error: m.result
          }) : b.enqueue({
            type: "tool-result",
            toolCallId: m.toolCallId,
            toolName: w,
            input: y.get(m.toolCallId),
            output: m.result,
            providerExecuted: m.providerExecuted
          });
          break;
        }
        default: {
          const w = $;
          throw new Error(`Unhandled chunk type: ${w}`);
        }
      }
    },
    flush() {
      p = !0, _();
    }
  });
  return new ReadableStream({
    async start(m) {
      return Promise.all([
        t.pipeThrough(v).pipeTo(
          new WritableStream({
            write(b) {
              m.enqueue(b);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
          new WritableStream({
            write(b) {
              m.enqueue(b);
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
var Q0 = dr({
  prefix: "aitxt",
  size: 24
});
function eT({
  model: e,
  tools: t,
  toolChoice: r,
  system: o,
  prompt: n,
  messages: i,
  maxRetries: a,
  abortSignal: s,
  headers: u,
  stopWhen: l = rh(1),
  experimental_output: d,
  experimental_telemetry: h,
  prepareStep: y,
  providerOptions: p,
  experimental_activeTools: g,
  activeTools: _ = g,
  experimental_repairToolCall: v,
  experimental_transform: m,
  experimental_download: b,
  includeRawChunks: $ = !1,
  onChunk: w,
  onError: N = ({ error: H }) => {
    console.error(H);
  },
  onFinish: O,
  onAbort: I,
  onStepFinish: C,
  experimental_context: R,
  _internal: {
    now: M = fh,
    generateId: E = Q0,
    currentDate: z = () => /* @__PURE__ */ new Date()
  } = {},
  ...B
}) {
  return new nT({
    model: bn(e),
    telemetry: h,
    headers: u,
    settings: B,
    maxRetries: a,
    abortSignal: s,
    system: o,
    prompt: n,
    messages: i,
    tools: t,
    toolChoice: r,
    transforms: Lr(m),
    activeTools: _,
    repairToolCall: v,
    stopConditions: Lr(l),
    output: d,
    providerOptions: p,
    prepareStep: y,
    includeRawChunks: $,
    onChunk: w,
    onError: N,
    onFinish: O,
    onAbort: I,
    onStepFinish: C,
    now: M,
    currentDate: z,
    generateId: E,
    experimental_context: R,
    download: b
  });
}
function tT(e) {
  if (!e)
    return new TransformStream({
      transform(a, s) {
        s.enqueue({ part: a, partialOutput: void 0 });
      }
    });
  let t, r = "", o = "", n = "";
  function i({
    controller: a,
    partialOutput: s = void 0
  }) {
    a.enqueue({
      part: {
        type: "text-delta",
        id: t,
        text: o
      },
      partialOutput: s
    }), o = "";
  }
  return new TransformStream({
    async transform(a, s) {
      if (a.type === "finish-step" && o.length > 0 && i({ controller: s }), a.type !== "text-delta" && a.type !== "text-start" && a.type !== "text-end") {
        s.enqueue({ part: a, partialOutput: void 0 });
        return;
      }
      if (t == null)
        t = a.id;
      else if (a.id !== t) {
        s.enqueue({ part: a, partialOutput: void 0 });
        return;
      }
      if (a.type === "text-start") {
        s.enqueue({ part: a, partialOutput: void 0 });
        return;
      }
      if (a.type === "text-end") {
        o.length > 0 && i({ controller: s }), s.enqueue({ part: a, partialOutput: void 0 });
        return;
      }
      r += a.text, o += a.text;
      const u = await e.parsePartial({ text: r });
      if (u != null) {
        const l = JSON.stringify(u.partial);
        l !== n && (i({ controller: s, partialOutput: u.partial }), n = l);
      }
    }
  });
}
var nT = class {
  constructor({
    model: e,
    telemetry: t,
    headers: r,
    settings: o,
    maxRetries: n,
    abortSignal: i,
    system: a,
    prompt: s,
    messages: u,
    tools: l,
    toolChoice: d,
    transforms: h,
    activeTools: y,
    repairToolCall: p,
    stopConditions: g,
    output: _,
    providerOptions: v,
    prepareStep: m,
    includeRawChunks: b,
    now: $,
    currentDate: w,
    generateId: N,
    onChunk: O,
    onError: I,
    onFinish: C,
    onAbort: R,
    onStepFinish: M,
    experimental_context: E,
    download: z
  }) {
    this._totalUsage = new gt(), this._finishReason = new gt(), this._steps = new gt(), this.output = _, this.includeRawChunks = b, this.tools = l;
    let B, H = [];
    const Z = [];
    let F, te, we = {}, Ee = [];
    const ie = [];
    let Ce, oe = {}, U = {};
    const x = new TransformStream({
      async transform(fe, K) {
        var G, q, Oe, wt;
        K.enqueue(fe);
        const { part: D } = fe;
        if ((D.type === "text-delta" || D.type === "reasoning-delta" || D.type === "source" || D.type === "tool-call" || D.type === "tool-result" || D.type === "tool-input-start" || D.type === "tool-input-delta" || D.type === "raw") && await (O == null ? void 0 : O({ chunk: D })), D.type === "error" && await I({ error: yo(D.error) }), D.type === "text-start" && (oe[D.id] = {
          type: "text",
          text: "",
          providerMetadata: D.providerMetadata
        }, H.push(oe[D.id])), D.type === "text-delta") {
          const ae = oe[D.id];
          if (ae == null) {
            K.enqueue({
              part: {
                type: "error",
                error: `text part ${D.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ae.text += D.text, ae.providerMetadata = (G = D.providerMetadata) != null ? G : ae.providerMetadata;
        }
        if (D.type === "text-end") {
          const ae = oe[D.id];
          if (ae == null) {
            K.enqueue({
              part: {
                type: "error",
                error: `text part ${D.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ae.providerMetadata = (q = D.providerMetadata) != null ? q : ae.providerMetadata, delete oe[D.id];
        }
        if (D.type === "reasoning-start" && (U[D.id] = {
          type: "reasoning",
          text: "",
          providerMetadata: D.providerMetadata
        }, H.push(U[D.id])), D.type === "reasoning-delta") {
          const ae = U[D.id];
          if (ae == null) {
            K.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${D.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ae.text += D.text, ae.providerMetadata = (Oe = D.providerMetadata) != null ? Oe : ae.providerMetadata;
        }
        if (D.type === "reasoning-end") {
          const ae = U[D.id];
          if (ae == null) {
            K.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${D.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ae.providerMetadata = (wt = D.providerMetadata) != null ? wt : ae.providerMetadata, delete U[D.id];
        }
        if (D.type === "file" && H.push({ type: "file", file: D.file }), D.type === "source" && H.push(D), D.type === "tool-call" && H.push(D), D.type === "tool-result" && !D.preliminary && H.push(D), D.type === "tool-error" && H.push(D), D.type === "start-step" && (we = D.request, Ee = D.warnings), D.type === "finish-step") {
          const ae = Qo({
            content: H,
            tools: l
          }), de = new nh({
            content: H,
            finishReason: D.finishReason,
            usage: D.usage,
            warnings: Ee,
            request: we,
            response: {
              ...D.response,
              messages: [...Z, ...ae]
            },
            providerMetadata: D.providerMetadata
          });
          await (M == null ? void 0 : M(de)), ln(Ee), ie.push(de), H = [], U = {}, oe = {}, Z.push(...ae), B.resolve();
        }
        D.type === "finish" && (te = D.totalUsage, F = D.finishReason);
      },
      async flush(fe) {
        try {
          if (ie.length === 0) {
            const Oe = new d0({
              message: "No output generated. Check the stream for errors."
            });
            me._finishReason.reject(Oe), me._totalUsage.reject(Oe), me._steps.reject(Oe);
            return;
          }
          const K = F ?? "unknown", G = te ?? {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          };
          me._finishReason.resolve(K), me._totalUsage.resolve(G), me._steps.resolve(ie);
          const q = ie[ie.length - 1];
          await (C == null ? void 0 : C({
            finishReason: K,
            totalUsage: G,
            usage: q.usage,
            content: q.content,
            text: q.text,
            reasoningText: q.reasoningText,
            reasoning: q.reasoning,
            files: q.files,
            sources: q.sources,
            toolCalls: q.toolCalls,
            staticToolCalls: q.staticToolCalls,
            dynamicToolCalls: q.dynamicToolCalls,
            toolResults: q.toolResults,
            staticToolResults: q.staticToolResults,
            dynamicToolResults: q.dynamicToolResults,
            request: q.request,
            response: q.response,
            warnings: q.warnings,
            providerMetadata: q.providerMetadata,
            steps: ie
          })), Ce.setAttributes(
            pe({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": K,
                "ai.response.text": { output: () => q.text },
                "ai.response.toolCalls": {
                  output: () => {
                    var Oe;
                    return (Oe = q.toolCalls) != null && Oe.length ? JSON.stringify(q.toolCalls) : void 0;
                  }
                },
                "ai.response.providerMetadata": JSON.stringify(
                  q.providerMetadata
                ),
                "ai.usage.inputTokens": G.inputTokens,
                "ai.usage.outputTokens": G.outputTokens,
                "ai.usage.totalTokens": G.totalTokens,
                "ai.usage.reasoningTokens": G.reasoningTokens,
                "ai.usage.cachedInputTokens": G.cachedInputTokens
              }
            })
          );
        } catch (K) {
          fe.error(K);
        } finally {
          Ce.end();
        }
      }
    }), J = mh();
    this.addStream = J.addStream, this.closeStream = J.close;
    const le = J.stream.getReader();
    let ve = new ReadableStream({
      async start(fe) {
        fe.enqueue({ type: "start" });
      },
      async pull(fe) {
        function K() {
          R == null || R({ steps: ie }), fe.enqueue({ type: "abort" }), fe.close();
        }
        try {
          const { done: G, value: q } = await le.read();
          if (G) {
            fe.close();
            return;
          }
          if (i != null && i.aborted) {
            K();
            return;
          }
          fe.enqueue(q);
        } catch (G) {
          Qt(G) && (i != null && i.aborted) ? K() : fe.error(G);
        }
      },
      cancel(fe) {
        return J.stream.cancel(fe);
      }
    });
    for (const fe of h)
      ve = ve.pipeThrough(
        fe({
          tools: l,
          stopStream() {
            J.terminate();
          }
        })
      );
    this.baseStream = ve.pipeThrough(tT(_)).pipeThrough(x);
    const { maxRetries: ye, retry: et } = jt({
      maxRetries: n,
      abortSignal: i
    }), he = xn(t), Re = rn(o), Pe = kn({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...Re, maxRetries: ye }
    }), me = this;
    Xe({
      name: "ai.streamText",
      attributes: pe({
        telemetry: t,
        attributes: {
          ...Ye({ operationId: "ai.streamText", telemetry: t }),
          ...Pe,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: a, prompt: s, messages: u })
          }
        }
      }),
      tracer: he,
      endWhenDone: !1,
      fn: async (fe) => {
        Ce = fe;
        async function K({
          currentStep: G,
          responseMessages: q,
          usage: Oe
        }) {
          var wt, D, ae, de, Be;
          const Sn = me.includeRawChunks;
          B = new gt();
          const Tn = await vo({
            system: a,
            prompt: s,
            messages: u
          }), Mt = [
            ...Tn.messages,
            ...q
          ], nt = await (m == null ? void 0 : m({
            model: e,
            steps: ie,
            stepNumber: ie.length,
            messages: Mt
          })), En = await ho({
            prompt: {
              system: (wt = nt == null ? void 0 : nt.system) != null ? wt : Tn.system,
              messages: (D = nt == null ? void 0 : nt.messages) != null ? D : Mt
            },
            supportedUrls: await e.supportedUrls,
            download: z
          }), Pt = bn(
            (ae = nt == null ? void 0 : nt.model) != null ? ae : e
          ), { toolChoice: cn, tools: dn } = Jg({
            tools: l,
            toolChoice: (de = nt == null ? void 0 : nt.toolChoice) != null ? de : d,
            activeTools: (Be = nt == null ? void 0 : nt.activeTools) != null ? Be : y
          }), {
            result: { stream: qe, response: Tt, request: On },
            doStreamSpan: pn,
            startTimestampMs: rs
          } = await et(
            () => Xe({
              name: "ai.streamText.doStream",
              attributes: pe({
                telemetry: t,
                attributes: {
                  ...Ye({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...Pe,
                  // model:
                  "ai.model.provider": Pt.provider,
                  "ai.model.id": Pt.modelId,
                  // prompt:
                  "ai.prompt.messages": {
                    input: () => _o(En)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => dn == null ? void 0 : dn.map((W) => JSON.stringify(W))
                  },
                  "ai.prompt.toolChoice": {
                    input: () => cn != null ? JSON.stringify(cn) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": Pt.provider,
                  "gen_ai.request.model": Pt.modelId,
                  "gen_ai.request.frequency_penalty": Re.frequencyPenalty,
                  "gen_ai.request.max_tokens": Re.maxOutputTokens,
                  "gen_ai.request.presence_penalty": Re.presencePenalty,
                  "gen_ai.request.stop_sequences": Re.stopSequences,
                  "gen_ai.request.temperature": Re.temperature,
                  "gen_ai.request.top_k": Re.topK,
                  "gen_ai.request.top_p": Re.topP
                }
              }),
              tracer: he,
              endWhenDone: !1,
              fn: async (W) => ({
                startTimestampMs: $(),
                // get before the call
                doStreamSpan: W,
                result: await Pt.doStream({
                  ...Re,
                  tools: dn,
                  toolChoice: cn,
                  responseFormat: _ == null ? void 0 : _.responseFormat,
                  prompt: En,
                  providerOptions: v,
                  abortSignal: i,
                  headers: r,
                  includeRawChunks: Sn
                })
              })
            })
          ), Sh = X0({
            tools: l,
            generatorStream: qe,
            tracer: he,
            telemetry: t,
            system: a,
            messages: Mt,
            repairToolCall: p,
            abortSignal: i,
            experimental_context: E
          }), Th = On ?? {}, yr = [], Io = [];
          let ko;
          const xo = {};
          let mn = "unknown", pt = {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }, So, os = !0, $t = {
            id: N(),
            timestamp: w(),
            modelId: e.modelId
          }, is = "";
          me.addStream(
            Sh.pipeThrough(
              new TransformStream({
                async transform(W, Le) {
                  var Nn, Cn, _r, Et;
                  if (W.type === "stream-start") {
                    ko = W.warnings;
                    return;
                  }
                  if (os) {
                    const We = $() - rs;
                    os = !1, pn.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": We
                    }), pn.setAttributes({
                      "ai.response.msToFirstChunk": We
                    }), Le.enqueue({
                      type: "start-step",
                      request: Th,
                      warnings: ko ?? []
                    });
                  }
                  const as = W.type;
                  switch (as) {
                    case "text-start":
                    case "text-end": {
                      Le.enqueue(W);
                      break;
                    }
                    case "text-delta": {
                      W.delta.length > 0 && (Le.enqueue({
                        type: "text-delta",
                        id: W.id,
                        text: W.delta,
                        providerMetadata: W.providerMetadata
                      }), is += W.delta);
                      break;
                    }
                    case "reasoning-start":
                    case "reasoning-end": {
                      Le.enqueue(W);
                      break;
                    }
                    case "reasoning-delta": {
                      Le.enqueue({
                        type: "reasoning-delta",
                        id: W.id,
                        text: W.delta,
                        providerMetadata: W.providerMetadata
                      });
                      break;
                    }
                    case "tool-call": {
                      Le.enqueue(W), yr.push(W);
                      break;
                    }
                    case "tool-result": {
                      Le.enqueue(W), W.preliminary || Io.push(W);
                      break;
                    }
                    case "tool-error": {
                      Le.enqueue(W), Io.push(W);
                      break;
                    }
                    case "response-metadata": {
                      $t = {
                        id: (Nn = W.id) != null ? Nn : $t.id,
                        timestamp: (Cn = W.timestamp) != null ? Cn : $t.timestamp,
                        modelId: (_r = W.modelId) != null ? _r : $t.modelId
                      };
                      break;
                    }
                    case "finish": {
                      pt = W.usage, mn = W.finishReason, So = W.providerMetadata;
                      const We = $() - rs;
                      pn.addEvent("ai.stream.finish"), pn.setAttributes({
                        "ai.response.msToFinish": We,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((Et = pt.outputTokens) != null ? Et : 0) / We
                      });
                      break;
                    }
                    case "file": {
                      Le.enqueue(W);
                      break;
                    }
                    case "source": {
                      Le.enqueue(W);
                      break;
                    }
                    case "tool-input-start": {
                      xo[W.id] = W.toolName;
                      const We = l == null ? void 0 : l[W.toolName];
                      (We == null ? void 0 : We.onInputStart) != null && await We.onInputStart({
                        toolCallId: W.id,
                        messages: Mt,
                        abortSignal: i,
                        experimental_context: E
                      }), Le.enqueue({
                        ...W,
                        dynamic: (We == null ? void 0 : We.type) === "dynamic"
                      });
                      break;
                    }
                    case "tool-input-end": {
                      delete xo[W.id], Le.enqueue(W);
                      break;
                    }
                    case "tool-input-delta": {
                      const We = xo[W.id], To = l == null ? void 0 : l[We];
                      (To == null ? void 0 : To.onInputDelta) != null && await To.onInputDelta({
                        inputTextDelta: W.delta,
                        toolCallId: W.id,
                        messages: Mt,
                        abortSignal: i,
                        experimental_context: E
                      }), Le.enqueue(W);
                      break;
                    }
                    case "error": {
                      Le.enqueue(W), mn = "error";
                      break;
                    }
                    case "raw": {
                      Sn && Le.enqueue(W);
                      break;
                    }
                    default: {
                      const We = as;
                      throw new Error(`Unknown chunk type: ${We}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(W) {
                  const Le = yr.length > 0 ? JSON.stringify(yr) : void 0;
                  try {
                    pn.setAttributes(
                      pe({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": mn,
                          "ai.response.text": {
                            output: () => is
                          },
                          "ai.response.toolCalls": {
                            output: () => Le
                          },
                          "ai.response.id": $t.id,
                          "ai.response.model": $t.modelId,
                          "ai.response.timestamp": $t.timestamp.toISOString(),
                          "ai.response.providerMetadata": JSON.stringify(So),
                          "ai.usage.inputTokens": pt.inputTokens,
                          "ai.usage.outputTokens": pt.outputTokens,
                          "ai.usage.totalTokens": pt.totalTokens,
                          "ai.usage.reasoningTokens": pt.reasoningTokens,
                          "ai.usage.cachedInputTokens": pt.cachedInputTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [mn],
                          "gen_ai.response.id": $t.id,
                          "gen_ai.response.model": $t.modelId,
                          "gen_ai.usage.input_tokens": pt.inputTokens,
                          "gen_ai.usage.output_tokens": pt.outputTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    pn.end();
                  }
                  W.enqueue({
                    type: "finish-step",
                    finishReason: mn,
                    usage: pt,
                    providerMetadata: So,
                    response: {
                      ...$t,
                      headers: Tt == null ? void 0 : Tt.headers
                    }
                  });
                  const Nn = Qg(Oe, pt);
                  await B.promise;
                  const Cn = yr.filter(
                    (Et) => Et.providerExecuted !== !0
                  ), _r = Io.filter(
                    (Et) => Et.providerExecuted !== !0
                  );
                  if (Cn.length > 0 && // all current tool calls have outputs (incl. execution errors):
                  _r.length === Cn.length && // continue until a stop condition is met:
                  !await oh({
                    stopConditions: g,
                    steps: ie
                  })) {
                    q.push(
                      ...Qo({
                        content: (
                          // use transformed content to create the messages for the next step:
                          ie[ie.length - 1].content
                        ),
                        tools: l
                      })
                    );
                    try {
                      await K({
                        currentStep: G + 1,
                        responseMessages: q,
                        usage: Nn
                      });
                    } catch (Et) {
                      W.enqueue({
                        type: "error",
                        error: Et
                      }), me.closeStream();
                    }
                  } else
                    W.enqueue({
                      type: "finish",
                      finishReason: mn,
                      totalUsage: Nn
                    }), me.closeStream();
                }
              })
            )
          );
        }
        await K({
          currentStep: 0,
          responseMessages: [],
          usage: {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }
        });
      }
    }).catch((fe) => {
      me.addStream(
        new ReadableStream({
          start(K) {
            K.enqueue({ type: "error", error: fe }), K.close();
          }
        })
      ), me.closeStream();
    });
  }
  get steps() {
    return this.consumeStream(), this._steps.promise;
  }
  get finalStep() {
    return this.steps.then((e) => e[e.length - 1]);
  }
  get content() {
    return this.finalStep.then((e) => e.content);
  }
  get warnings() {
    return this.finalStep.then((e) => e.warnings);
  }
  get providerMetadata() {
    return this.finalStep.then((e) => e.providerMetadata);
  }
  get text() {
    return this.finalStep.then((e) => e.text);
  }
  get reasoningText() {
    return this.finalStep.then((e) => e.reasoningText);
  }
  get reasoning() {
    return this.finalStep.then((e) => e.reasoning);
  }
  get sources() {
    return this.finalStep.then((e) => e.sources);
  }
  get files() {
    return this.finalStep.then((e) => e.files);
  }
  get toolCalls() {
    return this.finalStep.then((e) => e.toolCalls);
  }
  get staticToolCalls() {
    return this.finalStep.then((e) => e.staticToolCalls);
  }
  get dynamicToolCalls() {
    return this.finalStep.then((e) => e.dynamicToolCalls);
  }
  get toolResults() {
    return this.finalStep.then((e) => e.toolResults);
  }
  get staticToolResults() {
    return this.finalStep.then((e) => e.staticToolResults);
  }
  get dynamicToolResults() {
    return this.finalStep.then((e) => e.dynamicToolResults);
  }
  get usage() {
    return this.finalStep.then((e) => e.usage);
  }
  get request() {
    return this.finalStep.then((e) => e.request);
  }
  get response() {
    return this.finalStep.then((e) => e.response);
  }
  get totalUsage() {
    return this.consumeStream(), this._totalUsage.promise;
  }
  get finishReason() {
    return this.consumeStream(), this._finishReason.promise;
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
    return Nt(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part: e }, t) {
            e.type === "text-delta" && t.enqueue(e.text);
          }
        })
      )
    );
  }
  get fullStream() {
    return Nt(
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
      await wo({
        stream: this.fullStream,
        onError: e == null ? void 0 : e.onError
      });
    } catch (r) {
      (t = e == null ? void 0 : e.onError) == null || t.call(e, r);
    }
  }
  get experimental_partialOutputStream() {
    if (this.output == null)
      throw new Wf();
    return Nt(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ partialOutput: e }, t) {
            e != null && t.enqueue(e);
          }
        })
      )
    );
  }
  toUIMessageStream({
    originalMessages: e,
    generateMessageId: t,
    onFinish: r,
    messageMetadata: o,
    sendReasoning: n = !0,
    sendSources: i = !1,
    sendStart: a = !0,
    sendFinish: s = !0,
    onError: u = wn
  } = {}) {
    const l = t != null ? W0({
      originalMessages: e,
      responseMessageId: t
    }) : void 0, d = {}, h = (p) => {
      var g, _;
      const v = d[p];
      return ((_ = (g = this.tools) == null ? void 0 : g[v]) == null ? void 0 : _.type) === "dynamic" ? !0 : void 0;
    }, y = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (p, g) => {
          const _ = o == null ? void 0 : o({ part: p }), v = p.type;
          switch (v) {
            case "text-start": {
              g.enqueue({
                type: "text-start",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "text-delta": {
              g.enqueue({
                type: "text-delta",
                id: p.id,
                delta: p.text,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "text-end": {
              g.enqueue({
                type: "text-end",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-start": {
              g.enqueue({
                type: "reasoning-start",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-delta": {
              n && g.enqueue({
                type: "reasoning-delta",
                id: p.id,
                delta: p.text,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-end": {
              g.enqueue({
                type: "reasoning-end",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "file": {
              g.enqueue({
                type: "file",
                mediaType: p.file.mediaType,
                url: `data:${p.file.mediaType};base64,${p.file.base64}`
              });
              break;
            }
            case "source": {
              i && p.sourceType === "url" && g.enqueue({
                type: "source-url",
                sourceId: p.id,
                url: p.url,
                title: p.title,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              }), i && p.sourceType === "document" && g.enqueue({
                type: "source-document",
                sourceId: p.id,
                mediaType: p.mediaType,
                title: p.title,
                filename: p.filename,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "tool-input-start": {
              d[p.id] = p.toolName;
              const m = h(p.id);
              g.enqueue({
                type: "tool-input-start",
                toolCallId: p.id,
                toolName: p.toolName,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...m != null ? { dynamic: m } : {}
              });
              break;
            }
            case "tool-input-delta": {
              g.enqueue({
                type: "tool-input-delta",
                toolCallId: p.id,
                inputTextDelta: p.delta
              });
              break;
            }
            case "tool-call": {
              d[p.toolCallId] = p.toolName;
              const m = h(p.toolCallId);
              p.invalid ? g.enqueue({
                type: "tool-input-error",
                toolCallId: p.toolCallId,
                toolName: p.toolName,
                input: p.input,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {},
                ...m != null ? { dynamic: m } : {},
                errorText: u(p.error)
              }) : g.enqueue({
                type: "tool-input-available",
                toolCallId: p.toolCallId,
                toolName: p.toolName,
                input: p.input,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {},
                ...m != null ? { dynamic: m } : {}
              });
              break;
            }
            case "tool-result": {
              const m = h(p.toolCallId);
              g.enqueue({
                type: "tool-output-available",
                toolCallId: p.toolCallId,
                output: p.output,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.preliminary != null ? { preliminary: p.preliminary } : {},
                ...m != null ? { dynamic: m } : {}
              });
              break;
            }
            case "tool-error": {
              const m = h(p.toolCallId);
              g.enqueue({
                type: "tool-output-error",
                toolCallId: p.toolCallId,
                errorText: u(p.error),
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...m != null ? { dynamic: m } : {}
              });
              break;
            }
            case "error": {
              g.enqueue({
                type: "error",
                errorText: u(p.error)
              });
              break;
            }
            case "start-step": {
              g.enqueue({ type: "start-step" });
              break;
            }
            case "finish-step": {
              g.enqueue({ type: "finish-step" });
              break;
            }
            case "start": {
              a && g.enqueue({
                type: "start",
                ..._ != null ? { messageMetadata: _ } : {},
                ...l != null ? { messageId: l } : {}
              });
              break;
            }
            case "finish": {
              s && g.enqueue({
                type: "finish",
                ..._ != null ? { messageMetadata: _ } : {}
              });
              break;
            }
            case "abort": {
              g.enqueue(p);
              break;
            }
            case "tool-input-end":
              break;
            case "raw":
              break;
            default: {
              const m = v;
              throw new Error(`Unknown chunk type: ${m}`);
            }
          }
          _ != null && v !== "start" && v !== "finish" && g.enqueue({
            type: "message-metadata",
            messageMetadata: _
          });
        }
      })
    );
    return Nt(
      ph({
        stream: y,
        messageId: l ?? (t == null ? void 0 : t()),
        originalMessages: e,
        onFinish: r,
        onError: u
      })
    );
  }
  pipeUIMessageStreamToResponse(e, {
    originalMessages: t,
    generateMessageId: r,
    onFinish: o,
    messageMetadata: n,
    sendReasoning: i,
    sendSources: a,
    sendFinish: s,
    sendStart: u,
    onError: l,
    ...d
  } = {}) {
    Y0({
      response: e,
      stream: this.toUIMessageStream({
        originalMessages: t,
        generateMessageId: r,
        onFinish: o,
        messageMetadata: n,
        sendReasoning: i,
        sendSources: a,
        sendFinish: s,
        sendStart: u,
        onError: l
      }),
      ...d
    });
  }
  pipeTextStreamToResponse(e, t) {
    sh({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toUIMessageStreamResponse({
    originalMessages: e,
    generateMessageId: t,
    onFinish: r,
    messageMetadata: o,
    sendReasoning: n,
    sendSources: i,
    sendFinish: a,
    sendStart: s,
    onError: u,
    ...l
  } = {}) {
    return B0({
      stream: this.toUIMessageStream({
        originalMessages: e,
        generateMessageId: t,
        onFinish: r,
        messageMetadata: o,
        sendReasoning: n,
        sendSources: i,
        sendFinish: a,
        sendStart: s,
        onError: u
      }),
      ...l
    });
  }
  toTextStreamResponse(e) {
    return ih({
      textStream: this.textStream,
      ...e
    });
  }
};
function gh(e, t) {
  const r = [];
  t != null && t.ignoreIncompleteToolCalls && (e = e.map((o) => ({
    ...o,
    parts: o.parts.filter(
      (n) => !Fr(n) || n.state !== "input-streaming" && n.state !== "input-available"
    )
  })));
  for (const o of e)
    switch (o.role) {
      case "system": {
        const n = o.parts.filter((a) => a.type === "text"), i = n.reduce((a, s) => s.providerMetadata != null ? { ...a, ...s.providerMetadata } : a, {});
        r.push({
          role: "system",
          content: n.map((a) => a.text).join(""),
          ...Object.keys(i).length > 0 ? { providerOptions: i } : {}
        });
        break;
      }
      case "user": {
        r.push({
          role: "user",
          content: o.parts.filter(
            (n) => n.type === "text" || n.type === "file"
          ).map((n) => {
            switch (n.type) {
              case "text":
                return {
                  type: "text",
                  text: n.text,
                  ...n.providerMetadata != null ? { providerOptions: n.providerMetadata } : {}
                };
              case "file":
                return {
                  type: "file",
                  mediaType: n.mediaType,
                  filename: n.filename,
                  data: n.url,
                  ...n.providerMetadata != null ? { providerOptions: n.providerMetadata } : {}
                };
              default:
                return n;
            }
          })
        });
        break;
      }
      case "assistant": {
        if (o.parts != null) {
          let n = function() {
            var a, s;
            if (i.length === 0)
              return;
            const u = [];
            for (const d of i)
              if (d.type === "text")
                u.push({
                  type: "text",
                  text: d.text,
                  ...d.providerMetadata != null ? { providerOptions: d.providerMetadata } : {}
                });
              else if (d.type === "file")
                u.push({
                  type: "file",
                  mediaType: d.mediaType,
                  filename: d.filename,
                  data: d.url
                });
              else if (d.type === "reasoning")
                u.push({
                  type: "reasoning",
                  text: d.text,
                  providerOptions: d.providerMetadata
                });
              else if (d.type === "dynamic-tool") {
                const h = d.toolName;
                d.state !== "input-streaming" && u.push({
                  type: "tool-call",
                  toolCallId: d.toolCallId,
                  toolName: h,
                  input: d.input,
                  ...d.callProviderMetadata != null ? { providerOptions: d.callProviderMetadata } : {}
                });
              } else if (Ht(d)) {
                const h = Xn(d);
                d.state !== "input-streaming" && (u.push({
                  type: "tool-call",
                  toolCallId: d.toolCallId,
                  toolName: h,
                  input: d.state === "output-error" ? (a = d.input) != null ? a : d.rawInput : d.input,
                  providerExecuted: d.providerExecuted,
                  ...d.callProviderMetadata != null ? { providerOptions: d.callProviderMetadata } : {}
                }), d.providerExecuted === !0 && (d.state === "output-available" || d.state === "output-error") && u.push({
                  type: "tool-result",
                  toolCallId: d.toolCallId,
                  toolName: h,
                  output: Zn({
                    output: d.state === "output-error" ? d.errorText : d.output,
                    tool: (s = t == null ? void 0 : t.tools) == null ? void 0 : s[h],
                    errorMode: d.state === "output-error" ? "json" : "none"
                  })
                }));
              } else {
                const h = d;
                throw new Error(`Unsupported part: ${h}`);
              }
            r.push({
              role: "assistant",
              content: u
            });
            const l = i.filter(
              (d) => Ht(d) && d.providerExecuted !== !0 || d.type === "dynamic-tool"
            );
            l.length > 0 && r.push({
              role: "tool",
              content: l.map((d) => {
                var h;
                switch (d.state) {
                  case "output-error":
                  case "output-available": {
                    const y = d.type === "dynamic-tool" ? d.toolName : Xn(d);
                    return {
                      type: "tool-result",
                      toolCallId: d.toolCallId,
                      toolName: y,
                      output: Zn({
                        output: d.state === "output-error" ? d.errorText : d.output,
                        tool: (h = t == null ? void 0 : t.tools) == null ? void 0 : h[y],
                        errorMode: d.state === "output-error" ? "text" : "none"
                      })
                    };
                  }
                  default:
                    return null;
                }
              }).filter(
                (d) => d != null
              )
            }), i = [];
          }, i = [];
          for (const a of o.parts)
            a.type === "text" || a.type === "reasoning" || a.type === "file" || a.type === "dynamic-tool" || Ht(a) ? i.push(a) : a.type === "step-start" && n();
          n();
          break;
        }
        break;
      }
      default: {
        const n = o.role;
        throw new b0({
          originalMessage: o,
          message: `Unsupported role: ${n}`
        });
      }
    }
  return r;
}
var EE = gh, OE = class {
  constructor(e) {
    this.settings = e;
  }
  get tools() {
    return this.settings.tools;
  }
  async generate(e) {
    return F0({ ...this.settings, ...e });
  }
  stream(e) {
    return eT({ ...this.settings, ...e });
  }
  /**
   * Creates a response object that streams UI messages to the client.
   */
  respond(e) {
    return this.stream({
      prompt: gh(e.messages)
    }).toUIMessageStreamResponse();
  }
};
async function NE({
  model: e,
  value: t,
  providerOptions: r,
  maxRetries: o,
  abortSignal: n,
  headers: i,
  experimental_telemetry: a
}) {
  const s = zg(e), { maxRetries: u, retry: l } = jt({
    maxRetries: o,
    abortSignal: n
  }), d = Me(
    i ?? {},
    `ai/${st}`
  ), h = kn({
    model: s,
    telemetry: a,
    headers: d,
    settings: { maxRetries: u }
  }), y = xn(a);
  return Xe({
    name: "ai.embed",
    attributes: pe({
      telemetry: a,
      attributes: {
        ...Ye({ operationId: "ai.embed", telemetry: a }),
        ...h,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: y,
    fn: async (p) => {
      const { embedding: g, usage: _, response: v, providerMetadata: m } = await l(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Xe({
            name: "ai.embed.doEmbed",
            attributes: pe({
              telemetry: a,
              attributes: {
                ...Ye({
                  operationId: "ai.embed.doEmbed",
                  telemetry: a
                }),
                ...h,
                // specific settings that only make sense on the outer level:
                "ai.values": { input: () => [JSON.stringify(t)] }
              }
            }),
            tracer: y,
            fn: async (b) => {
              var $;
              const w = await s.doEmbed({
                values: [t],
                abortSignal: n,
                headers: d,
                providerOptions: r
              }), N = w.embeddings[0], O = ($ = w.usage) != null ? $ : { tokens: NaN };
              return b.setAttributes(
                pe({
                  telemetry: a,
                  attributes: {
                    "ai.embeddings": {
                      output: () => w.embeddings.map(
                        (I) => JSON.stringify(I)
                      )
                    },
                    "ai.usage.tokens": O.tokens
                  }
                })
              ), {
                embedding: N,
                usage: O,
                providerMetadata: w.providerMetadata,
                response: w.response
              };
            }
          })
        )
      );
      return p.setAttributes(
        pe({
          telemetry: a,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(g) },
            "ai.usage.tokens": _.tokens
          }
        })
      ), new rT({
        value: t,
        embedding: g,
        usage: _,
        providerMetadata: m,
        response: v
      });
    }
  });
}
var rT = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.providerMetadata = e.providerMetadata, this.response = e.response;
  }
};
function Ou(e, t) {
  if (t <= 0)
    throw new Error("chunkSize must be greater than 0");
  const r = [];
  for (let o = 0; o < e.length; o += t)
    r.push(e.slice(o, o + t));
  return r;
}
async function CE({
  model: e,
  values: t,
  maxParallelCalls: r = 1 / 0,
  maxRetries: o,
  abortSignal: n,
  headers: i,
  providerOptions: a,
  experimental_telemetry: s
}) {
  const u = zg(e), { maxRetries: l, retry: d } = jt({
    maxRetries: o,
    abortSignal: n
  }), h = Me(
    i ?? {},
    `ai/${st}`
  ), y = kn({
    model: u,
    telemetry: s,
    headers: h,
    settings: { maxRetries: l }
  }), p = xn(s);
  return Xe({
    name: "ai.embedMany",
    attributes: pe({
      telemetry: s,
      attributes: {
        ...Ye({ operationId: "ai.embedMany", telemetry: s }),
        ...y,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((g) => JSON.stringify(g))
        }
      }
    }),
    tracer: p,
    fn: async (g) => {
      var _;
      const [v, m] = await Promise.all([
        u.maxEmbeddingsPerCall,
        u.supportsParallelCalls
      ]);
      if (v == null || v === 1 / 0) {
        const { embeddings: C, usage: R, response: M, providerMetadata: E } = await d(
          () => Xe({
            name: "ai.embedMany.doEmbed",
            attributes: pe({
              telemetry: s,
              attributes: {
                ...Ye({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: s
                }),
                ...y,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => t.map((z) => JSON.stringify(z))
                }
              }
            }),
            tracer: p,
            fn: async (z) => {
              var B;
              const H = await u.doEmbed({
                values: t,
                abortSignal: n,
                headers: h,
                providerOptions: a
              }), Z = H.embeddings, F = (B = H.usage) != null ? B : { tokens: NaN };
              return z.setAttributes(
                pe({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => Z.map(
                        (te) => JSON.stringify(te)
                      )
                    },
                    "ai.usage.tokens": F.tokens
                  }
                })
              ), {
                embeddings: Z,
                usage: F,
                providerMetadata: H.providerMetadata,
                response: H.response
              };
            }
          })
        );
        return g.setAttributes(
          pe({
            telemetry: s,
            attributes: {
              "ai.embeddings": {
                output: () => C.map((z) => JSON.stringify(z))
              },
              "ai.usage.tokens": R.tokens
            }
          })
        ), new Nu({
          values: t,
          embeddings: C,
          usage: R,
          providerMetadata: E,
          responses: [M]
        });
      }
      const b = Ou(t, v), $ = [], w = [];
      let N = 0, O;
      const I = Ou(
        b,
        m ? r : 1
      );
      for (const C of I) {
        const R = await Promise.all(
          C.map((M) => d(() => Xe({
            name: "ai.embedMany.doEmbed",
            attributes: pe({
              telemetry: s,
              attributes: {
                ...Ye({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: s
                }),
                ...y,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => M.map((E) => JSON.stringify(E))
                }
              }
            }),
            tracer: p,
            fn: async (E) => {
              var z;
              const B = await u.doEmbed({
                values: M,
                abortSignal: n,
                headers: h,
                providerOptions: a
              }), H = B.embeddings, Z = (z = B.usage) != null ? z : { tokens: NaN };
              return E.setAttributes(
                pe({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => H.map(
                        (F) => JSON.stringify(F)
                      )
                    },
                    "ai.usage.tokens": Z.tokens
                  }
                })
              ), {
                embeddings: H,
                usage: Z,
                providerMetadata: B.providerMetadata,
                response: B.response
              };
            }
          })))
        );
        for (const M of R)
          if ($.push(...M.embeddings), w.push(M.response), N += M.usage.tokens, M.providerMetadata)
            if (!O)
              O = { ...M.providerMetadata };
            else
              for (const [E, z] of Object.entries(
                M.providerMetadata
              ))
                O[E] = {
                  ...(_ = O[E]) != null ? _ : {},
                  ...z
                };
      }
      return g.setAttributes(
        pe({
          telemetry: s,
          attributes: {
            "ai.embeddings": {
              output: () => $.map((C) => JSON.stringify(C))
            },
            "ai.usage.tokens": N
          }
        })
      ), new Nu({
        values: t,
        embeddings: $,
        usage: { tokens: N },
        providerMetadata: O,
        responses: w
      });
    }
  });
}
var Nu = class {
  constructor(e) {
    this.values = e.values, this.embeddings = e.embeddings, this.usage = e.usage, this.providerMetadata = e.providerMetadata, this.responses = e.responses;
  }
};
async function RE({
  model: e,
  prompt: t,
  n: r = 1,
  maxImagesPerCall: o,
  size: n,
  aspectRatio: i,
  seed: a,
  providerOptions: s,
  maxRetries: u,
  abortSignal: l,
  headers: d
}) {
  var h, y;
  if (e.specificationVersion !== "v2")
    throw new hr({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const p = Me(
    d ?? {},
    `ai/${st}`
  ), { retry: g } = jt({
    maxRetries: u,
    abortSignal: l
  }), _ = (h = o ?? await iT(e)) != null ? h : 1, v = Math.ceil(r / _), m = Array.from({ length: v }, (I, C) => {
    if (C < v - 1)
      return _;
    const R = r % _;
    return R === 0 ? _ : R;
  }), b = await Promise.all(
    m.map(
      async (I) => g(
        () => e.doGenerate({
          prompt: t,
          n: I,
          abortSignal: l,
          headers: p,
          size: n,
          aspectRatio: i,
          seed: a,
          providerOptions: s ?? {}
        })
      )
    )
  ), $ = [], w = [], N = [], O = {};
  for (const I of b) {
    if ($.push(
      ...I.images.map(
        (C) => {
          var R;
          return new bo({
            data: C,
            mediaType: (R = go({
              data: C,
              signatures: Dg
            })) != null ? R : "image/png"
          });
        }
      )
    ), w.push(...I.warnings), I.providerMetadata)
      for (const [C, R] of Object.entries(I.providerMetadata))
        (y = O[C]) != null || (O[C] = { images: [] }), O[C].images.push(
          ...I.providerMetadata[C].images
        );
    N.push(I.response);
  }
  if (ln(w), !$.length)
    throw new u0({ responses: N });
  return new oT({
    images: $,
    warnings: w,
    responses: N,
    providerMetadata: O
  });
}
var oT = class {
  constructor(e) {
    this.images = e.images, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = e.providerMetadata;
  }
  get image() {
    return this.images[0];
  }
};
async function iT(e) {
  return e.maxImagesPerCall instanceof Function ? e.maxImagesPerCall({
    modelId: e.modelId
  }) : e.maxImagesPerCall;
}
function aT(e) {
  const t = e.filter(
    (r) => r.type === "reasoning"
  );
  return t.length === 0 ? void 0 : t.map((r) => r.text).join(`
`);
}
var sT = {
  type: "no-schema",
  jsonSchema: void 0,
  async validatePartialResult({ value: e, textDelta: t }) {
    return { success: !0, value: { partial: e, textDelta: t } };
  },
  async validateFinalResult(e, t) {
    return e === void 0 ? {
      success: !1,
      error: new nn({
        message: "No object generated: response did not match schema.",
        text: t.text,
        response: t.response,
        usage: t.usage,
        finishReason: t.finishReason
      })
    } : { success: !0, value: e };
  },
  createElementStream() {
    throw new $e({
      functionality: "element streams in no-schema mode"
    });
  }
}, uT = (e) => ({
  type: "object",
  jsonSchema: e.jsonSchema,
  async validatePartialResult({ value: t, textDelta: r }) {
    return {
      success: !0,
      value: {
        // Note: currently no validation of partial results:
        partial: t,
        textDelta: r
      }
    };
  },
  async validateFinalResult(t) {
    return Ct({ value: t, schema: e });
  },
  createElementStream() {
    throw new $e({
      functionality: "element streams in object mode"
    });
  }
}), lT = (e) => {
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
    async validatePartialResult({
      value: o,
      latestObject: n,
      isFirstDelta: i,
      isFinalDelta: a
    }) {
      var s;
      if (!Tr(o) || !ss(o.elements))
        return {
          success: !1,
          error: new tt({
            value: o,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const u = o.elements, l = [];
      for (let y = 0; y < u.length; y++) {
        const p = u[y], g = await Ct({ value: p, schema: e });
        if (!(y === u.length - 1 && !a)) {
          if (!g.success)
            return g;
          l.push(g.value);
        }
      }
      const d = (s = n == null ? void 0 : n.length) != null ? s : 0;
      let h = "";
      return i && (h += "["), d > 0 && (h += ","), h += l.slice(d).map((y) => JSON.stringify(y)).join(","), a && (h += "]"), {
        success: !0,
        value: {
          partial: l,
          textDelta: h
        }
      };
    },
    async validateFinalResult(o) {
      if (!Tr(o) || !ss(o.elements))
        return {
          success: !1,
          error: new tt({
            value: o,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const n = o.elements;
      for (const i of n) {
        const a = await Ct({ value: i, schema: e });
        if (!a.success)
          return a;
      }
      return { success: !0, value: n };
    },
    createElementStream(o) {
      let n = 0;
      return Nt(
        o.pipeThrough(
          new TransformStream({
            transform(i, a) {
              switch (i.type) {
                case "object": {
                  const s = i.object;
                  for (; n < s.length; n++)
                    a.enqueue(s[n]);
                  break;
                }
                case "text-delta":
                case "finish":
                case "error":
                  break;
                default: {
                  const s = i;
                  throw new Error(
                    `Unsupported chunk type: ${s}`
                  );
                }
              }
            }
          })
        )
      );
    }
  };
}, cT = (e) => ({
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
  async validateFinalResult(t) {
    if (!Tr(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new tt({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const r = t.result;
    return e.includes(r) ? { success: !0, value: r } : {
      success: !1,
      error: new tt({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  async validatePartialResult({ value: t, textDelta: r }) {
    if (!Tr(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new tt({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const o = t.result, n = e.filter(
      (i) => i.startsWith(o)
    );
    return t.result.length === 0 || n.length === 0 ? {
      success: !1,
      error: new tt({
        value: t,
        cause: "value must be a string in the enum"
      })
    } : {
      success: !0,
      value: {
        partial: n.length > 1 ? o : n[0],
        textDelta: r
      }
    };
  },
  createElementStream() {
    throw new $e({
      functionality: "element streams in enum mode"
    });
  }
});
function hh({
  output: e,
  schema: t,
  enumValues: r
}) {
  switch (e) {
    case "object":
      return uT(_n(t));
    case "array":
      return lT(_n(t));
    case "enum":
      return cT(r);
    case "no-schema":
      return sT;
    default: {
      const o = e;
      throw new Error(`Unsupported output: ${o}`);
    }
  }
}
async function Cu(e, t, r) {
  const o = await qt({ text: e });
  if (!o.success)
    throw new nn({
      message: "No object generated: could not parse the response.",
      cause: o.error,
      text: e,
      response: r.response,
      usage: r.usage,
      finishReason: r.finishReason
    });
  const n = await t.validateFinalResult(
    o.value,
    {
      text: e,
      response: r.response,
      usage: r.usage
    }
  );
  if (!n.success)
    throw new nn({
      message: "No object generated: response did not match schema.",
      cause: n.error,
      text: e,
      response: r.response,
      usage: r.usage,
      finishReason: r.finishReason
    });
  return n.value;
}
async function vh(e, t, r, o) {
  try {
    return await Cu(e, t, o);
  } catch (n) {
    if (r != null && nn.isInstance(n) && (qn.isInstance(n.cause) || tt.isInstance(n.cause))) {
      const i = await r({
        text: e,
        error: n.cause
      });
      if (i === null)
        throw n;
      return await Cu(
        i,
        t,
        o
      );
    }
    throw n;
  }
}
function yh({
  output: e,
  schema: t,
  schemaName: r,
  schemaDescription: o,
  enumValues: n
}) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new _e({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t != null)
      throw new _e({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output."
      });
    if (o != null)
      throw new _e({
        parameter: "schemaDescription",
        value: o,
        message: "Schema description is not supported for no-schema output."
      });
    if (r != null)
      throw new _e({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for no-schema output."
      });
    if (n != null)
      throw new _e({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (t == null)
      throw new _e({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output."
      });
    if (n != null)
      throw new _e({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (t == null)
      throw new _e({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output."
      });
    if (n != null)
      throw new _e({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new _e({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output."
      });
    if (o != null)
      throw new _e({
        parameter: "schemaDescription",
        value: o,
        message: "Schema description is not supported for enum output."
      });
    if (r != null)
      throw new _e({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for enum output."
      });
    if (n == null)
      throw new _e({
        parameter: "enumValues",
        value: n,
        message: "Enum values are required for enum output."
      });
    for (const i of n)
      if (typeof i != "string")
        throw new _e({
          parameter: "enumValues",
          value: i,
          message: "Enum values must be strings."
        });
  }
}
var dT = dr({ prefix: "aiobj", size: 24 });
async function AE(e) {
  const {
    model: t,
    output: r = "object",
    system: o,
    prompt: n,
    messages: i,
    maxRetries: a,
    abortSignal: s,
    headers: u,
    experimental_repairText: l,
    experimental_telemetry: d,
    experimental_download: h,
    providerOptions: y,
    _internal: {
      generateId: p = dT,
      currentDate: g = () => /* @__PURE__ */ new Date()
    } = {},
    ..._
  } = e, v = bn(t), m = "enum" in e ? e.enum : void 0, {
    schema: b,
    schemaDescription: $,
    schemaName: w
  } = "schema" in e ? e : {};
  yh({
    output: r,
    schema: b,
    schemaName: w,
    schemaDescription: $,
    enumValues: m
  });
  const { maxRetries: N, retry: O } = jt({
    maxRetries: a,
    abortSignal: s
  }), I = hh({
    output: r,
    schema: b,
    enumValues: m
  }), C = rn(_), R = Me(
    u ?? {},
    `ai/${st}`
  ), M = kn({
    model: v,
    telemetry: d,
    headers: R,
    settings: { ...C, maxRetries: N }
  }), E = xn(d);
  try {
    return await Xe({
      name: "ai.generateObject",
      attributes: pe({
        telemetry: d,
        attributes: {
          ...Ye({
            operationId: "ai.generateObject",
            telemetry: d
          }),
          ...M,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: n, messages: i })
          },
          "ai.schema": I.jsonSchema != null ? { input: () => JSON.stringify(I.jsonSchema) } : void 0,
          "ai.schema.name": w,
          "ai.schema.description": $,
          "ai.settings.output": I.type
        }
      }),
      tracer: E,
      fn: async (z) => {
        var B;
        let H, Z, F, te, we, Ee, ie, Ce;
        const oe = await vo({
          system: o,
          prompt: n,
          messages: i
        }), U = await ho({
          prompt: oe,
          supportedUrls: await v.supportedUrls,
          download: h
        }), x = await O(
          () => Xe({
            name: "ai.generateObject.doGenerate",
            attributes: pe({
              telemetry: d,
              attributes: {
                ...Ye({
                  operationId: "ai.generateObject.doGenerate",
                  telemetry: d
                }),
                ...M,
                "ai.prompt.messages": {
                  input: () => _o(U)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": v.provider,
                "gen_ai.request.model": v.modelId,
                "gen_ai.request.frequency_penalty": C.frequencyPenalty,
                "gen_ai.request.max_tokens": C.maxOutputTokens,
                "gen_ai.request.presence_penalty": C.presencePenalty,
                "gen_ai.request.temperature": C.temperature,
                "gen_ai.request.top_k": C.topK,
                "gen_ai.request.top_p": C.topP
              }
            }),
            tracer: E,
            fn: async (le) => {
              var ve, ye, et, he, Re, Pe, me, fe;
              const K = await v.doGenerate({
                responseFormat: {
                  type: "json",
                  schema: I.jsonSchema,
                  name: w,
                  description: $
                },
                ...rn(_),
                prompt: U,
                providerOptions: y,
                abortSignal: s,
                headers: R
              }), G = {
                id: (ye = (ve = K.response) == null ? void 0 : ve.id) != null ? ye : p(),
                timestamp: (he = (et = K.response) == null ? void 0 : et.timestamp) != null ? he : g(),
                modelId: (Pe = (Re = K.response) == null ? void 0 : Re.modelId) != null ? Pe : v.modelId,
                headers: (me = K.response) == null ? void 0 : me.headers,
                body: (fe = K.response) == null ? void 0 : fe.body
              }, q = Xo(K.content), Oe = aT(K.content);
              if (q === void 0)
                throw new nn({
                  message: "No object generated: the model did not return a response.",
                  response: G,
                  usage: K.usage,
                  finishReason: K.finishReason
                });
              return le.setAttributes(
                pe({
                  telemetry: d,
                  attributes: {
                    "ai.response.finishReason": K.finishReason,
                    "ai.response.object": { output: () => q },
                    "ai.response.id": G.id,
                    "ai.response.model": G.modelId,
                    "ai.response.timestamp": G.timestamp.toISOString(),
                    "ai.response.providerMetadata": JSON.stringify(
                      K.providerMetadata
                    ),
                    // TODO rename telemetry attributes to inputTokens and outputTokens
                    "ai.usage.promptTokens": K.usage.inputTokens,
                    "ai.usage.completionTokens": K.usage.outputTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [K.finishReason],
                    "gen_ai.response.id": G.id,
                    "gen_ai.response.model": G.modelId,
                    "gen_ai.usage.input_tokens": K.usage.inputTokens,
                    "gen_ai.usage.output_tokens": K.usage.outputTokens
                  }
                })
              ), {
                ...K,
                objectText: q,
                reasoning: Oe,
                responseData: G
              };
            }
          })
        );
        H = x.objectText, Z = x.finishReason, F = x.usage, te = x.warnings, ie = x.providerMetadata, Ee = (B = x.request) != null ? B : {}, we = x.responseData, Ce = x.reasoning, ln(te);
        const J = await vh(
          H,
          I,
          l,
          {
            response: we,
            usage: F,
            finishReason: Z
          }
        );
        return z.setAttributes(
          pe({
            telemetry: d,
            attributes: {
              "ai.response.finishReason": Z,
              "ai.response.object": {
                output: () => JSON.stringify(J)
              },
              "ai.response.providerMetadata": JSON.stringify(
                ie
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": F.inputTokens,
              "ai.usage.completionTokens": F.outputTokens
            }
          })
        ), new pT({
          object: J,
          reasoning: Ce,
          finishReason: Z,
          usage: F,
          warnings: te,
          request: Ee,
          response: we,
          providerMetadata: ie
        });
      }
    });
  } catch (z) {
    throw yo(z);
  }
}
var pT = class {
  constructor(e) {
    this.object = e.object, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.response = e.response, this.request = e.request, this.reasoning = e.reasoning;
  }
  toJsonResponse(e) {
    var t;
    return new Response(JSON.stringify(this.object), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: vr(e == null ? void 0 : e.headers, {
        "content-type": "application/json; charset=utf-8"
      })
    });
  }
};
function jE(e, t) {
  if (e.length !== t.length)
    throw new _e({
      parameter: "vector1,vector2",
      value: { vector1Length: e.length, vector2Length: t.length },
      message: "Vectors must have the same length"
    });
  const r = e.length;
  if (r === 0)
    return 0;
  let o = 0, n = 0, i = 0;
  for (let a = 0; a < r; a++) {
    const s = e[a], u = t[a];
    o += s * s, n += u * u, i += s * u;
  }
  return o === 0 || n === 0 ? 0 : i / (Math.sqrt(o) * Math.sqrt(n));
}
function ME(e) {
  const [t, r] = e.split(",");
  if (t.split(";")[0].split(":")[1] == null || r == null)
    throw new Error("Invalid data URL format");
  try {
    return window.atob(r);
  } catch {
    throw new Error("Error decoding data URL");
  }
}
function Jr(e, t) {
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
    for (let n = 0; n < e.length; n++)
      if (!Jr(e[n], t[n]))
        return !1;
    return !0;
  }
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  for (const n of r)
    if (!o.includes(n) || !Jr(e[n], t[n]))
      return !1;
  return !0;
}
var mT = class {
  constructor() {
    this.queue = [], this.isProcessing = !1;
  }
  async processQueue() {
    if (!this.isProcessing) {
      for (this.isProcessing = !0; this.queue.length > 0; )
        await this.queue[0](), this.queue.shift();
      this.isProcessing = !1;
    }
  }
  async run(e) {
    return new Promise((t, r) => {
      this.queue.push(async () => {
        try {
          await e(), t();
        } catch (o) {
          r(o);
        }
      }), this.processQueue();
    });
  }
};
function PE({
  chunks: e,
  initialDelayInMs: t = 0,
  chunkDelayInMs: r = 0,
  _internal: o
}) {
  var n;
  const i = (n = o == null ? void 0 : o.delay) != null ? n : La;
  let a = 0;
  return new ReadableStream({
    async pull(s) {
      a < e.length ? (await i(a === 0 ? t : r), s.enqueue(e[a++])) : s.close();
    }
  });
}
var fT = dr({ prefix: "aiobj", size: 24 });
function zE(e) {
  const {
    model: t,
    output: r = "object",
    system: o,
    prompt: n,
    messages: i,
    maxRetries: a,
    abortSignal: s,
    headers: u,
    experimental_repairText: l,
    experimental_telemetry: d,
    experimental_download: h,
    providerOptions: y,
    onError: p = ({ error: C }) => {
      console.error(C);
    },
    onFinish: g,
    _internal: {
      generateId: _ = fT,
      currentDate: v = () => /* @__PURE__ */ new Date(),
      now: m = fh
    } = {},
    ...b
  } = e, $ = "enum" in e && e.enum ? e.enum : void 0, {
    schema: w,
    schemaDescription: N,
    schemaName: O
  } = "schema" in e ? e : {};
  yh({
    output: r,
    schema: w,
    schemaName: O,
    schemaDescription: N,
    enumValues: $
  });
  const I = hh({
    output: r,
    schema: w,
    enumValues: $
  });
  return new gT({
    model: t,
    telemetry: d,
    headers: u,
    settings: b,
    maxRetries: a,
    abortSignal: s,
    outputStrategy: I,
    system: o,
    prompt: n,
    messages: i,
    schemaName: O,
    schemaDescription: N,
    providerOptions: y,
    repairText: l,
    onError: p,
    onFinish: g,
    download: h,
    generateId: _,
    currentDate: v,
    now: m
  });
}
var gT = class {
  constructor({
    model: e,
    headers: t,
    telemetry: r,
    settings: o,
    maxRetries: n,
    abortSignal: i,
    outputStrategy: a,
    system: s,
    prompt: u,
    messages: l,
    schemaName: d,
    schemaDescription: h,
    providerOptions: y,
    repairText: p,
    onError: g,
    onFinish: _,
    download: v,
    generateId: m,
    currentDate: b,
    now: $
  }) {
    this._object = new gt(), this._usage = new gt(), this._providerMetadata = new gt(), this._warnings = new gt(), this._request = new gt(), this._response = new gt(), this._finishReason = new gt();
    const w = bn(e), { maxRetries: N, retry: O } = jt({
      maxRetries: n,
      abortSignal: i
    }), I = rn(o), C = kn({
      model: w,
      telemetry: r,
      headers: t,
      settings: { ...I, maxRetries: N }
    }), R = xn(r), M = this, E = mh(), z = new TransformStream({
      transform(B, H) {
        H.enqueue(B), B.type === "error" && g({ error: yo(B.error) });
      }
    });
    this.baseStream = E.stream.pipeThrough(z), Xe({
      name: "ai.streamObject",
      attributes: pe({
        telemetry: r,
        attributes: {
          ...Ye({
            operationId: "ai.streamObject",
            telemetry: r
          }),
          ...C,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: s, prompt: u, messages: l })
          },
          "ai.schema": a.jsonSchema != null ? { input: () => JSON.stringify(a.jsonSchema) } : void 0,
          "ai.schema.name": d,
          "ai.schema.description": h,
          "ai.settings.output": a.type
        }
      }),
      tracer: R,
      endWhenDone: !1,
      fn: async (B) => {
        const H = await vo({
          system: s,
          prompt: u,
          messages: l
        }), Z = {
          responseFormat: {
            type: "json",
            schema: a.jsonSchema,
            name: d,
            description: h
          },
          ...rn(o),
          prompt: await ho({
            prompt: H,
            supportedUrls: await w.supportedUrls,
            download: v
          }),
          providerOptions: y,
          abortSignal: i,
          headers: t,
          includeRawChunks: !1
        }, F = {
          transform: (G, q) => {
            switch (G.type) {
              case "text-delta":
                q.enqueue(G.delta);
                break;
              case "response-metadata":
              case "finish":
              case "error":
              case "stream-start":
                q.enqueue(G);
                break;
            }
          }
        }, {
          result: { stream: te, response: we, request: Ee },
          doStreamSpan: ie,
          startTimestampMs: Ce
        } = await O(
          () => Xe({
            name: "ai.streamObject.doStream",
            attributes: pe({
              telemetry: r,
              attributes: {
                ...Ye({
                  operationId: "ai.streamObject.doStream",
                  telemetry: r
                }),
                ...C,
                "ai.prompt.messages": {
                  input: () => _o(Z.prompt)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": w.provider,
                "gen_ai.request.model": w.modelId,
                "gen_ai.request.frequency_penalty": I.frequencyPenalty,
                "gen_ai.request.max_tokens": I.maxOutputTokens,
                "gen_ai.request.presence_penalty": I.presencePenalty,
                "gen_ai.request.temperature": I.temperature,
                "gen_ai.request.top_k": I.topK,
                "gen_ai.request.top_p": I.topP
              }
            }),
            tracer: R,
            endWhenDone: !1,
            fn: async (G) => ({
              startTimestampMs: $(),
              doStreamSpan: G,
              result: await w.doStream(Z)
            })
          })
        );
        M._request.resolve(Ee ?? {});
        let oe, U = {
          inputTokens: void 0,
          outputTokens: void 0,
          totalTokens: void 0
        }, x, J, le, ve, ye = "", et = "", he = {
          id: m(),
          timestamp: b(),
          modelId: w.modelId
        }, Re, Pe, me = !0, fe = !0;
        const K = te.pipeThrough(new TransformStream(F)).pipeThrough(
          new TransformStream({
            async transform(G, q) {
              var Oe, wt, D;
              if (typeof G == "object" && G.type === "stream-start") {
                oe = G.warnings;
                return;
              }
              if (me) {
                const ae = $() - Ce;
                me = !1, ie.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": ae
                }), ie.setAttributes({
                  "ai.stream.msToFirstChunk": ae
                });
              }
              if (typeof G == "string") {
                ye += G, et += G;
                const { value: ae, state: de } = await Qa(ye);
                if (ae !== void 0 && !Jr(Re, ae)) {
                  const Be = await a.validatePartialResult({
                    value: ae,
                    textDelta: et,
                    latestObject: Pe,
                    isFirstDelta: fe,
                    isFinalDelta: de === "successful-parse"
                  });
                  Be.success && !Jr(
                    Pe,
                    Be.value.partial
                  ) && (Re = ae, Pe = Be.value.partial, q.enqueue({
                    type: "object",
                    object: Pe
                  }), q.enqueue({
                    type: "text-delta",
                    textDelta: Be.value.textDelta
                  }), et = "", fe = !1);
                }
                return;
              }
              switch (G.type) {
                case "response-metadata": {
                  he = {
                    id: (Oe = G.id) != null ? Oe : he.id,
                    timestamp: (wt = G.timestamp) != null ? wt : he.timestamp,
                    modelId: (D = G.modelId) != null ? D : he.modelId
                  };
                  break;
                }
                case "finish": {
                  et !== "" && q.enqueue({ type: "text-delta", textDelta: et }), x = G.finishReason, U = G.usage, J = G.providerMetadata, q.enqueue({
                    ...G,
                    usage: U,
                    response: he
                  }), ln(oe ?? []), M._usage.resolve(U), M._providerMetadata.resolve(J), M._warnings.resolve(oe), M._response.resolve({
                    ...he,
                    headers: we == null ? void 0 : we.headers
                  }), M._finishReason.resolve(x ?? "unknown");
                  try {
                    le = await vh(
                      ye,
                      a,
                      p,
                      {
                        response: he,
                        usage: U,
                        finishReason: x
                      }
                    ), M._object.resolve(le);
                  } catch (ae) {
                    ve = ae, M._object.reject(ae);
                  }
                  break;
                }
                default: {
                  q.enqueue(G);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(G) {
              try {
                const q = U ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                ie.setAttributes(
                  pe({
                    telemetry: r,
                    attributes: {
                      "ai.response.finishReason": x,
                      "ai.response.object": {
                        output: () => JSON.stringify(le)
                      },
                      "ai.response.id": he.id,
                      "ai.response.model": he.modelId,
                      "ai.response.timestamp": he.timestamp.toISOString(),
                      "ai.response.providerMetadata": JSON.stringify(J),
                      "ai.usage.inputTokens": q.inputTokens,
                      "ai.usage.outputTokens": q.outputTokens,
                      "ai.usage.totalTokens": q.totalTokens,
                      "ai.usage.reasoningTokens": q.reasoningTokens,
                      "ai.usage.cachedInputTokens": q.cachedInputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [x],
                      "gen_ai.response.id": he.id,
                      "gen_ai.response.model": he.modelId,
                      "gen_ai.usage.input_tokens": q.inputTokens,
                      "gen_ai.usage.output_tokens": q.outputTokens
                    }
                  })
                ), ie.end(), B.setAttributes(
                  pe({
                    telemetry: r,
                    attributes: {
                      "ai.usage.inputTokens": q.inputTokens,
                      "ai.usage.outputTokens": q.outputTokens,
                      "ai.usage.totalTokens": q.totalTokens,
                      "ai.usage.reasoningTokens": q.reasoningTokens,
                      "ai.usage.cachedInputTokens": q.cachedInputTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(le)
                      },
                      "ai.response.providerMetadata": JSON.stringify(J)
                    }
                  })
                ), await (_ == null ? void 0 : _({
                  usage: q,
                  object: le,
                  error: ve,
                  response: {
                    ...he,
                    headers: we == null ? void 0 : we.headers
                  },
                  warnings: oe,
                  providerMetadata: J
                }));
              } catch (q) {
                G.enqueue({ type: "error", error: q });
              } finally {
                B.end();
              }
            }
          })
        );
        E.addStream(K);
      }
    }).catch((B) => {
      E.addStream(
        new ReadableStream({
          start(H) {
            H.enqueue({ type: "error", error: B }), H.close();
          }
        })
      );
    }).finally(() => {
      E.close();
    }), this.outputStrategy = a;
  }
  get object() {
    return this._object.promise;
  }
  get usage() {
    return this._usage.promise;
  }
  get providerMetadata() {
    return this._providerMetadata.promise;
  }
  get warnings() {
    return this._warnings.promise;
  }
  get request() {
    return this._request.promise;
  }
  get response() {
    return this._response.promise;
  }
  get finishReason() {
    return this._finishReason.promise;
  }
  get partialObjectStream() {
    return Nt(
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
    return Nt(
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
    return Nt(this.baseStream);
  }
  pipeTextStreamToResponse(e, t) {
    sh({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toTextStreamResponse(e) {
    return ih({
      textStream: this.textStream,
      ...e
    });
  }
}, hT = class extends bo {
  constructor({
    data: e,
    mediaType: t
  }) {
    super({ data: e, mediaType: t });
    let r = "mp3";
    if (t) {
      const o = t.split("/");
      o.length === 2 && t !== "audio/mpeg" && (r = o[1]);
    }
    if (!r)
      throw new Error(
        "Audio format must be provided or determinable from media type"
      );
    this.format = r;
  }
};
async function UE({
  model: e,
  text: t,
  voice: r,
  outputFormat: o,
  instructions: n,
  speed: i,
  language: a,
  providerOptions: s = {},
  maxRetries: u,
  abortSignal: l,
  headers: d
}) {
  var h;
  if (e.specificationVersion !== "v2")
    throw new hr({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const y = Me(
    d ?? {},
    `ai/${st}`
  ), { retry: p } = jt({
    maxRetries: u,
    abortSignal: l
  }), g = await p(
    () => e.doGenerate({
      text: t,
      voice: r,
      outputFormat: o,
      instructions: n,
      speed: i,
      language: a,
      abortSignal: l,
      headers: y,
      providerOptions: s
    })
  );
  if (!g.audio || g.audio.length === 0)
    throw new p0({ responses: [g.response] });
  return ln(g.warnings), new vT({
    audio: new hT({
      data: g.audio,
      mediaType: (h = go({
        data: g.audio,
        signatures: Zg
      })) != null ? h : "audio/mp3"
    }),
    warnings: g.warnings,
    responses: [g.response],
    providerMetadata: g.providerMetadata
  });
}
var vT = class {
  constructor(e) {
    var t;
    this.audio = e.audio, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
}, yT = {};
XS(yT, {
  object: () => bT,
  text: () => _T
});
var _T = () => ({
  type: "text",
  responseFormat: { type: "text" },
  async parsePartial({ text: e }) {
    return { partial: e };
  },
  async parseOutput({ text: e }) {
    return e;
  }
}), bT = ({
  schema: e
}) => {
  const t = _n(e);
  return {
    type: "object",
    responseFormat: {
      type: "json",
      schema: t.jsonSchema
    },
    async parsePartial({ text: r }) {
      const o = await Qa(r);
      switch (o.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: o.value
          };
        default: {
          const n = o.state;
          throw new Error(`Unsupported parse state: ${n}`);
        }
      }
    },
    async parseOutput({ text: r }, o) {
      const n = await qt({ text: r });
      if (!n.success)
        throw new nn({
          message: "No object generated: could not parse the response.",
          cause: n.error,
          text: r,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
      const i = await Ct({
        value: n.value,
        schema: t
      });
      if (!i.success)
        throw new nn({
          message: "No object generated: response did not match schema.",
          cause: i.error,
          text: r,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
      return i.value;
    }
  };
}, wT = {
  word: /\S+\s+/m,
  line: /\n+/m
};
function DE({
  delayInMs: e = 10,
  chunking: t = "word",
  _internal: { delay: r = La } = {}
} = {}) {
  let o;
  if (typeof t == "function")
    o = (n) => {
      const i = t(n);
      if (i == null)
        return null;
      if (!i.length)
        throw new Error("Chunking function must return a non-empty string.");
      if (!n.startsWith(i))
        throw new Error(
          `Chunking function must return a match that is a prefix of the buffer. Received: "${i}" expected to start with "${n}"`
        );
      return i;
    };
  else {
    const n = typeof t == "string" ? wT[t] : t;
    if (n == null)
      throw new ei({
        argument: "chunking",
        message: `Chunking must be "word" or "line" or a RegExp. Received: ${t}`
      });
    o = (i) => {
      const a = n.exec(i);
      return a ? i.slice(0, a.index) + (a == null ? void 0 : a[0]) : null;
    };
  }
  return () => {
    let n = "", i = "";
    return new TransformStream({
      async transform(a, s) {
        if (a.type !== "text-delta") {
          n.length > 0 && (s.enqueue({ type: "text-delta", text: n, id: i }), n = ""), s.enqueue(a);
          return;
        }
        a.id !== i && n.length > 0 && (s.enqueue({ type: "text-delta", text: n, id: i }), n = ""), n += a.text, i = a.id;
        let u;
        for (; (u = o(n)) != null; )
          s.enqueue({ type: "text-delta", text: u, id: i }), n = n.slice(u.length), await r(e);
      }
    });
  };
}
function ZE({
  settings: e
}) {
  return {
    middlewareVersion: "v2",
    transformParams: async ({ params: t }) => Xa(e, t)
  };
}
function $T(e, t) {
  if (t.length === 0)
    return null;
  const r = e.indexOf(t);
  if (r !== -1)
    return r;
  for (let o = e.length - 1; o >= 0; o--) {
    const n = e.substring(o);
    if (t.startsWith(n))
      return o;
  }
  return null;
}
function qE({
  tagName: e,
  separator: t = `
`,
  startWithReasoning: r = !1
}) {
  const o = `<${e}>`, n = `</${e}>`;
  return {
    middlewareVersion: "v2",
    wrapGenerate: async ({ doGenerate: i }) => {
      const { content: a, ...s } = await i(), u = [];
      for (const l of a) {
        if (l.type !== "text") {
          u.push(l);
          continue;
        }
        const d = r ? o + l.text : l.text, h = new RegExp(`${o}(.*?)${n}`, "gs"), y = Array.from(d.matchAll(h));
        if (!y.length) {
          u.push(l);
          continue;
        }
        const p = y.map((_) => _[1]).join(t);
        let g = d;
        for (let _ = y.length - 1; _ >= 0; _--) {
          const v = y[_], m = g.slice(0, v.index), b = g.slice(
            v.index + v[0].length
          );
          g = m + (m.length > 0 && b.length > 0 ? t : "") + b;
        }
        u.push({
          type: "reasoning",
          text: p
        }), u.push({
          type: "text",
          text: g
        });
      }
      return { content: u, ...s };
    },
    wrapStream: async ({ doStream: i }) => {
      const { stream: a, ...s } = await i(), u = {};
      let l;
      return {
        stream: a.pipeThrough(
          new TransformStream({
            transform: (d, h) => {
              if (d.type === "text-start") {
                l = d;
                return;
              }
              if (d.type === "text-end" && l && (h.enqueue(l), l = void 0), d.type !== "text-delta") {
                h.enqueue(d);
                return;
              }
              u[d.id] == null && (u[d.id] = {
                isFirstReasoning: !0,
                isFirstText: !0,
                afterSwitch: !1,
                isReasoning: r,
                buffer: "",
                idCounter: 0,
                textId: d.id
              });
              const y = u[d.id];
              y.buffer += d.delta;
              function p(g) {
                if (g.length > 0) {
                  const _ = y.afterSwitch && (y.isReasoning ? !y.isFirstReasoning : !y.isFirstText) ? t : "";
                  y.isReasoning && (y.afterSwitch || y.isFirstReasoning) && h.enqueue({
                    type: "reasoning-start",
                    id: `reasoning-${y.idCounter}`
                  }), y.isReasoning ? h.enqueue({
                    type: "reasoning-delta",
                    delta: _ + g,
                    id: `reasoning-${y.idCounter}`
                  }) : (l && (h.enqueue(l), l = void 0), h.enqueue({
                    type: "text-delta",
                    delta: _ + g,
                    id: y.textId
                  })), y.afterSwitch = !1, y.isReasoning ? y.isFirstReasoning = !1 : y.isFirstText = !1;
                }
              }
              do {
                const g = y.isReasoning ? n : o, _ = $T(
                  y.buffer,
                  g
                );
                if (_ == null) {
                  p(y.buffer), y.buffer = "";
                  break;
                }
                if (p(y.buffer.slice(0, _)), _ + g.length <= y.buffer.length)
                  y.buffer = y.buffer.slice(
                    _ + g.length
                  ), y.isReasoning && h.enqueue({
                    type: "reasoning-end",
                    id: `reasoning-${y.idCounter++}`
                  }), y.isReasoning = !y.isReasoning, y.afterSwitch = !0;
                else {
                  y.buffer = y.buffer.slice(_);
                  break;
                }
              } while (!0);
            }
          })
        ),
        ...s
      };
    }
  };
}
function LE() {
  return {
    middlewareVersion: "v2",
    wrapStream: async ({ doGenerate: e }) => {
      const t = await e();
      let r = 0;
      return {
        stream: new ReadableStream({
          start(n) {
            n.enqueue({
              type: "stream-start",
              warnings: t.warnings
            }), n.enqueue({ type: "response-metadata", ...t.response });
            for (const i of t.content)
              switch (i.type) {
                case "text": {
                  i.text.length > 0 && (n.enqueue({ type: "text-start", id: String(r) }), n.enqueue({
                    type: "text-delta",
                    id: String(r),
                    delta: i.text
                  }), n.enqueue({ type: "text-end", id: String(r) }), r++);
                  break;
                }
                case "reasoning": {
                  n.enqueue({
                    type: "reasoning-start",
                    id: String(r),
                    providerMetadata: i.providerMetadata
                  }), n.enqueue({
                    type: "reasoning-delta",
                    id: String(r),
                    delta: i.text
                  }), n.enqueue({ type: "reasoning-end", id: String(r) }), r++;
                  break;
                }
                default: {
                  n.enqueue(i);
                  break;
                }
              }
            n.enqueue({
              type: "finish",
              finishReason: t.finishReason,
              usage: t.usage,
              providerMetadata: t.providerMetadata
            }), n.close();
          }
        }),
        request: t.request,
        response: t.response
      };
    }
  };
}
var _h = ({
  model: e,
  middleware: t,
  modelId: r,
  providerId: o
}) => Lr(t).reverse().reduce((n, i) => IT({ model: n, middleware: i, modelId: r, providerId: o }), e), IT = ({
  model: e,
  middleware: {
    transformParams: t,
    wrapGenerate: r,
    wrapStream: o,
    overrideProvider: n,
    overrideModelId: i,
    overrideSupportedUrls: a
  },
  modelId: s,
  providerId: u
}) => {
  var l, d, h;
  async function y({
    params: p,
    type: g
  }) {
    return t ? await t({ params: p, type: g, model: e }) : p;
  }
  return {
    specificationVersion: "v2",
    provider: (l = u ?? (n == null ? void 0 : n({ model: e }))) != null ? l : e.provider,
    modelId: (d = s ?? (i == null ? void 0 : i({ model: e }))) != null ? d : e.modelId,
    supportedUrls: (h = a == null ? void 0 : a({ model: e })) != null ? h : e.supportedUrls,
    async doGenerate(p) {
      const g = await y({ params: p, type: "generate" }), _ = async () => e.doGenerate(g);
      return r ? r({
        doGenerate: _,
        doStream: async () => e.doStream(g),
        params: g,
        model: e
      }) : _();
    },
    async doStream(p) {
      const g = await y({ params: p, type: "stream" }), _ = async () => e.doGenerate(g), v = async () => e.doStream(g);
      return o ? o({ doGenerate: _, doStream: v, params: g, model: e }) : v();
    }
  };
};
function FE({
  provider: e,
  languageModelMiddleware: t
}) {
  return {
    languageModel(o) {
      let n = e.languageModel(o);
      return n = _h({
        model: n,
        middleware: t
      }), n;
    },
    textEmbeddingModel: e.textEmbeddingModel,
    imageModel: e.imageModel,
    transcriptionModel: e.transcriptionModel,
    speechModel: e.speechModel
  };
}
function kT({
  languageModels: e,
  textEmbeddingModels: t,
  imageModels: r,
  transcriptionModels: o,
  speechModels: n,
  fallbackProvider: i
}) {
  return {
    languageModel(a) {
      if (e != null && a in e)
        return e[a];
      if (i)
        return i.languageModel(a);
      throw new Ve({ modelId: a, modelType: "languageModel" });
    },
    textEmbeddingModel(a) {
      if (t != null && a in t)
        return t[a];
      if (i)
        return i.textEmbeddingModel(a);
      throw new Ve({ modelId: a, modelType: "textEmbeddingModel" });
    },
    imageModel(a) {
      if (r != null && a in r)
        return r[a];
      if (i != null && i.imageModel)
        return i.imageModel(a);
      throw new Ve({ modelId: a, modelType: "imageModel" });
    },
    transcriptionModel(a) {
      if (o != null && a in o)
        return o[a];
      if (i != null && i.transcriptionModel)
        return i.transcriptionModel(a);
      throw new Ve({ modelId: a, modelType: "transcriptionModel" });
    },
    speechModel(a) {
      if (n != null && a in n)
        return n[a];
      if (i != null && i.speechModel)
        return i.speechModel(a);
      throw new Ve({ modelId: a, modelType: "speechModel" });
    }
  };
}
var JE = kT, bh = "AI_NoSuchProviderError", wh = `vercel.ai.error.${bh}`, xT = Symbol.for(wh), $h, ST = class extends Ve {
  constructor({
    modelId: e,
    modelType: t,
    providerId: r,
    availableProviders: o,
    message: n = `No such provider: ${r} (available providers: ${o.join()})`
  }) {
    super({ errorName: bh, modelId: e, modelType: t, message: n }), this[$h] = !0, this.providerId = r, this.availableProviders = o;
  }
  static isInstance(e) {
    return L.hasMarker(e, wh);
  }
};
$h = xT;
function TT(e, {
  separator: t = ":",
  languageModelMiddleware: r
} = {}) {
  const o = new ET({
    separator: t,
    languageModelMiddleware: r
  });
  for (const [n, i] of Object.entries(e))
    o.registerProvider({ id: n, provider: i });
  return o;
}
var VE = TT, ET = class {
  constructor({
    separator: e,
    languageModelMiddleware: t
  }) {
    this.providers = {}, this.separator = e, this.languageModelMiddleware = t;
  }
  registerProvider({
    id: e,
    provider: t
  }) {
    this.providers[e] = t;
  }
  getProvider(e, t) {
    const r = this.providers[e];
    if (r == null)
      throw new ST({
        modelId: e,
        modelType: t,
        providerId: e,
        availableProviders: Object.keys(this.providers)
      });
    return r;
  }
  splitId(e, t) {
    const r = e.indexOf(this.separator);
    if (r === -1)
      throw new Ve({
        modelId: e,
        modelType: t,
        message: `Invalid ${t} id for registry: ${e} (must be in the format "providerId${this.separator}modelId")`
      });
    return [e.slice(0, r), e.slice(r + this.separator.length)];
  }
  languageModel(e) {
    var t, r;
    const [o, n] = this.splitId(e, "languageModel");
    let i = (r = (t = this.getProvider(o, "languageModel")).languageModel) == null ? void 0 : r.call(
      t,
      n
    );
    if (i == null)
      throw new Ve({ modelId: e, modelType: "languageModel" });
    return this.languageModelMiddleware != null && (i = _h({
      model: i,
      middleware: this.languageModelMiddleware
    })), i;
  }
  textEmbeddingModel(e) {
    var t;
    const [r, o] = this.splitId(e, "textEmbeddingModel"), n = this.getProvider(r, "textEmbeddingModel"), i = (t = n.textEmbeddingModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ve({
        modelId: e,
        modelType: "textEmbeddingModel"
      });
    return i;
  }
  imageModel(e) {
    var t;
    const [r, o] = this.splitId(e, "imageModel"), n = this.getProvider(r, "imageModel"), i = (t = n.imageModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ve({ modelId: e, modelType: "imageModel" });
    return i;
  }
  transcriptionModel(e) {
    var t;
    const [r, o] = this.splitId(e, "transcriptionModel"), n = this.getProvider(r, "transcriptionModel"), i = (t = n.transcriptionModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ve({
        modelId: e,
        modelType: "transcriptionModel"
      });
    return i;
  }
  speechModel(e) {
    var t;
    const [r, o] = this.splitId(e, "speechModel"), n = this.getProvider(r, "speechModel"), i = (t = n.speechModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ve({ modelId: e, modelType: "speechModel" });
    return i;
  }
}, Ih = "2025-06-18", OT = [
  Ih,
  "2025-03-26",
  "2024-11-05"
], NT = kt({
  name: c(),
  version: c()
}), ns = kt({
  _meta: xe(f({}).loose())
}), Qn = ns, CT = f({
  method: c(),
  params: xe(ns)
}), RT = kt({
  experimental: xe(f({}).loose()),
  logging: xe(f({}).loose()),
  prompts: xe(
    kt({
      listChanged: xe(V())
    })
  ),
  resources: xe(
    kt({
      subscribe: xe(V()),
      listChanged: xe(V())
    })
  ),
  tools: xe(
    kt({
      listChanged: xe(V())
    })
  )
}), AT = Qn.extend({
  protocolVersion: c(),
  capabilities: RT,
  serverInfo: NT,
  instructions: xe(c())
}), jT = Qn.extend({
  nextCursor: xe(c())
}), MT = f({
  name: c(),
  description: xe(c()),
  inputSchema: f({
    type: k("object"),
    properties: xe(f({}).loose())
  }).loose()
}).loose(), PT = jT.extend({
  tools: A(MT)
}), zT = f({
  type: k("text"),
  text: c()
}).loose(), UT = f({
  type: k("image"),
  data: Ta(),
  mimeType: c()
}).loose(), kh = f({
  /**
   * The URI of this resource.
   */
  uri: c(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: xe(c())
}).loose(), DT = kh.extend({
  text: c()
}), ZT = kh.extend({
  blob: Ta()
}), qT = f({
  type: k("resource"),
  resource: Y([DT, ZT])
}).loose(), LT = Qn.extend({
  content: A(
    Y([zT, UT, qT])
  ),
  isError: V().default(!1).optional()
}).or(
  Qn.extend({
    toolResult: ue()
  })
), $o = "2.0", FT = f({
  jsonrpc: k($o),
  id: Y([c(), S().int()])
}).merge(CT).strict(), JT = f({
  jsonrpc: k($o),
  id: Y([c(), S().int()]),
  result: Qn
}).strict(), VT = f({
  jsonrpc: k($o),
  id: Y([c(), S().int()]),
  error: f({
    code: S().int(),
    message: c(),
    data: xe(ue())
  })
}).strict(), GT = f({
  jsonrpc: k($o)
}).merge(
  f({
    method: c(),
    params: xe(ns)
  })
).strict(), BT = Y([
  FT,
  GT,
  JT,
  VT
]), WT = class {
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
        var o, n, i;
        try {
          const a = Me(
            {
              ...this.headers,
              Accept: "text/event-stream"
            },
            `ai-sdk/${st}`,
            Zt()
          ), s = await fetch(this.url.href, {
            headers: a,
            signal: (o = this.abortController) == null ? void 0 : o.signal
          });
          if (!s.ok || !s.body) {
            const h = new De({
              message: `MCP SSE Transport Error: ${s.status} ${s.statusText}`
            });
            return (n = this.onerror) == null || n.call(this, h), t(h);
          }
          const l = s.body.pipeThrough(new TextDecoderStream()).pipeThrough(new vl()).getReader(), d = async () => {
            var h, y, p;
            try {
              for (; ; ) {
                const { done: g, value: _ } = await l.read();
                if (g) {
                  if (this.connected)
                    throw this.connected = !1, new De({
                      message: "MCP SSE Transport Error: Connection closed unexpectedly"
                    });
                  return;
                }
                const { event: v, data: m } = _;
                if (v === "endpoint") {
                  if (this.endpoint = new URL(m, this.url), this.endpoint.origin !== this.url.origin)
                    throw new De({
                      message: `MCP SSE Transport Error: Endpoint origin does not match connection origin: ${this.endpoint.origin}`
                    });
                  this.connected = !0, e();
                } else if (v === "message")
                  try {
                    const b = BT.parse(
                      JSON.parse(m)
                    );
                    (h = this.onmessage) == null || h.call(this, b);
                  } catch (b) {
                    const $ = new De({
                      message: "MCP SSE Transport Error: Failed to parse message",
                      cause: b
                    });
                    (y = this.onerror) == null || y.call(this, $);
                  }
              }
            } catch (g) {
              if (g instanceof Error && g.name === "AbortError")
                return;
              (p = this.onerror) == null || p.call(this, g), t(g);
            }
          };
          this.sseConnection = {
            close: () => l.cancel()
          }, d();
        } catch (a) {
          if (a instanceof Error && a.name === "AbortError")
            return;
          (i = this.onerror) == null || i.call(this, a), t(a);
        }
      })();
    });
  }
  async close() {
    var e, t, r;
    this.connected = !1, (e = this.sseConnection) == null || e.close(), (t = this.abortController) == null || t.abort(), (r = this.onclose) == null || r.call(this);
  }
  async send(e) {
    var t, r, o;
    if (!this.endpoint || !this.connected)
      throw new De({
        message: "MCP SSE Transport Error: Not connected"
      });
    try {
      const i = {
        method: "POST",
        headers: Me(
          {
            ...this.headers,
            "Content-Type": "application/json"
          },
          `ai-sdk/${st}`,
          Zt()
        ),
        body: JSON.stringify(e),
        signal: (t = this.abortController) == null ? void 0 : t.signal
      }, a = await fetch(this.endpoint, i);
      if (!a.ok) {
        const s = await a.text().catch(() => null), u = new De({
          message: `MCP SSE Transport Error: POSTing to endpoint (HTTP ${a.status}): ${s}`
        });
        (r = this.onerror) == null || r.call(this, u);
        return;
      }
    } catch (n) {
      (o = this.onerror) == null || o.call(this, n);
      return;
    }
  }
};
function HT(e) {
  if (e.type !== "sse")
    throw new De({
      message: "Unsupported or invalid transport configuration. If you are using a custom transport, make sure it implements the MCPTransport interface."
    });
  return new WT(e);
}
function KT(e) {
  return "start" in e && typeof e.start == "function" && "send" in e && typeof e.send == "function" && "close" in e && typeof e.close == "function";
}
var YT = "1.0.0";
async function GE(e) {
  const t = new XT(e);
  return await t.init(), t;
}
var XT = class {
  constructor({
    transport: e,
    name: t = "ai-sdk-mcp-client",
    onUncaughtError: r
  }) {
    this.requestMessageId = 0, this.responseHandlers = /* @__PURE__ */ new Map(), this.serverCapabilities = {}, this.isClosed = !0, this.onUncaughtError = r, KT(e) ? this.transport = e : this.transport = HT(e), this.transport.onclose = () => this.onClose(), this.transport.onerror = (o) => this.onError(o), this.transport.onmessage = (o) => {
      if ("method" in o) {
        this.onError(
          new De({
            message: "Unsupported message type"
          })
        );
        return;
      }
      this.onResponse(o);
    }, this.clientInfo = {
      name: t,
      version: YT
    };
  }
  async init() {
    try {
      await this.transport.start(), this.isClosed = !1;
      const e = await this.request({
        request: {
          method: "initialize",
          params: {
            protocolVersion: Ih,
            capabilities: {},
            clientInfo: this.clientInfo
          }
        },
        resultSchema: AT
      });
      if (e === void 0)
        throw new De({
          message: "Server sent invalid initialize result"
        });
      if (!OT.includes(e.protocolVersion))
        throw new De({
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
          throw new De({
            message: "Server does not support tools"
          });
        break;
      default:
        throw new De({
          message: `Unsupported method: ${e}`
        });
    }
  }
  async request({
    request: e,
    resultSchema: t,
    options: r
  }) {
    return new Promise((o, n) => {
      if (this.isClosed)
        return n(
          new De({
            message: "Attempted to send a request from a closed client"
          })
        );
      this.assertCapability(e.method);
      const i = r == null ? void 0 : r.signal;
      i == null || i.throwIfAborted();
      const a = this.requestMessageId++, s = {
        ...e,
        jsonrpc: "2.0",
        id: a
      }, u = () => {
        this.responseHandlers.delete(a);
      };
      this.responseHandlers.set(a, (l) => {
        if (i != null && i.aborted)
          return n(
            new De({
              message: "Request was aborted",
              cause: i.reason
            })
          );
        if (l instanceof Error)
          return n(l);
        try {
          const d = t.parse(l.result);
          o(d);
        } catch (d) {
          const h = new De({
            message: "Failed to parse server response",
            cause: d
          });
          n(h);
        }
      }), this.transport.send(s).catch((l) => {
        u(), n(l);
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
        resultSchema: PT,
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
        resultSchema: LT,
        options: {
          signal: r == null ? void 0 : r.abortSignal
        }
      });
    } catch (o) {
      throw o;
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
      const o = await this.listTools();
      for (const { name: n, description: i, inputSchema: a } of o.tools) {
        if (e !== "automatic" && !(n in e))
          continue;
        const s = this, u = async (d, h) => {
          var y;
          return (y = h == null ? void 0 : h.abortSignal) == null || y.throwIfAborted(), s.callTool({ name: n, args: d, options: h });
        }, l = e === "automatic" ? Ew({
          description: i,
          inputSchema: co({
            ...a,
            properties: (t = a.properties) != null ? t : {},
            additionalProperties: !1
          }),
          execute: u
        }) : {
          description: i,
          inputSchema: e[n].inputSchema,
          execute: u
        };
        r[n] = l;
      }
      return r;
    } catch (o) {
      throw o;
    }
  }
  onClose() {
    if (this.isClosed)
      return;
    this.isClosed = !0;
    const e = new De({
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
      throw new De({
        message: `Protocol error: Received a response for an unknown message ID: ${JSON.stringify(
          e
        )}`
      });
    this.responseHandlers.delete(t), r(
      "result" in e ? e : new De({
        message: e.error.message,
        cause: e.error
      })
    );
  }
}, QT = class extends L {
  constructor(e) {
    super({
      name: "AI_NoTranscriptGeneratedError",
      message: "No transcript generated."
    }), this.responses = e.responses;
  }
};
async function BE({
  model: e,
  audio: t,
  providerOptions: r = {},
  maxRetries: o,
  abortSignal: n,
  headers: i
}) {
  if (e.specificationVersion !== "v2")
    throw new hr({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const { retry: a } = jt({
    maxRetries: o,
    abortSignal: n
  }), s = Me(
    i ?? {},
    `ai/${st}`
  ), u = t instanceof URL ? (await qg({ url: t })).data : E0(t), l = await a(
    () => {
      var d;
      return e.doGenerate({
        audio: u,
        abortSignal: n,
        headers: s,
        providerOptions: r,
        mediaType: (d = go({
          data: u,
          signatures: Zg
        })) != null ? d : "audio/wav"
      });
    }
  );
  if (ln(l.warnings), !l.text)
    throw new QT({ responses: [l.response] });
  return new eE({
    text: l.text,
    segments: l.segments,
    language: l.language,
    durationInSeconds: l.durationInSeconds,
    warnings: l.warnings,
    responses: [l.response],
    providerMetadata: l.providerMetadata
  });
}
var eE = class {
  constructor(e) {
    var t;
    this.text = e.text, this.segments = e.segments, this.language = e.language, this.durationInSeconds = e.durationInSeconds, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
async function tE({
  stream: e,
  onTextPart: t
}) {
  const r = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: o, value: n } = await r.read();
    if (o)
      break;
    await t(n);
  }
}
var nE = () => fetch;
async function WE({
  api: e,
  prompt: t,
  credentials: r,
  headers: o,
  body: n,
  streamProtocol: i = "data",
  setCompletion: a,
  setLoading: s,
  setError: u,
  setAbortController: l,
  onFinish: d,
  onError: h,
  fetch: y = nE()
}) {
  var p;
  try {
    s(!0), u(void 0);
    const g = new AbortController();
    l(g), a("");
    const _ = await y(e, {
      method: "POST",
      body: JSON.stringify({
        prompt: t,
        ...n
      }),
      credentials: r,
      headers: Me(
        {
          "Content-Type": "application/json",
          ...o
        },
        `ai-sdk/${st}`,
        Zt()
      ),
      signal: g.signal
    }).catch((m) => {
      throw m;
    });
    if (!_.ok)
      throw new Error(
        (p = await _.text()) != null ? p : "Failed to fetch the chat response."
      );
    if (!_.body)
      throw new Error("The response body is empty.");
    let v = "";
    switch (i) {
      case "text": {
        await tE({
          stream: _.body,
          onTextPart: (m) => {
            v += m, a(v);
          }
        });
        break;
      }
      case "data": {
        await wo({
          stream: Ja({
            stream: _.body,
            schema: ch
          }).pipeThrough(
            new TransformStream({
              async transform(m) {
                if (!m.success)
                  throw m.error;
                const b = m.value;
                if (b.type === "text-delta")
                  v += b.delta, a(v);
                else if (b.type === "error")
                  throw new Error(b.errorText);
              }
            })
          ),
          onError: (m) => {
            throw m;
          }
        });
        break;
      }
      default: {
        const m = i;
        throw new Error(`Unknown stream protocol: ${m}`);
      }
    }
    return d && d(t, v), l(null), v;
  } catch (g) {
    if (g.name === "AbortError")
      return l(null), null;
    g instanceof Error && h && h(g), u(g);
  } finally {
    s(!1);
  }
}
async function rE(e) {
  if (e == null)
    return [];
  if (!globalThis.FileList || !(e instanceof globalThis.FileList))
    throw new Error("FileList is not supported in the current environment");
  return Promise.all(
    Array.from(e).map(async (t) => {
      const { name: r, type: o } = t, n = await new Promise((i, a) => {
        const s = new FileReader();
        s.onload = (u) => {
          var l;
          i((l = u.target) == null ? void 0 : l.result);
        }, s.onerror = (u) => a(u), s.readAsDataURL(t);
      });
      return {
        type: "file",
        mediaType: o,
        filename: r,
        url: n
      };
    })
  );
}
var xh = class {
  constructor({
    api: e = "/api/chat",
    credentials: t,
    headers: r,
    body: o,
    fetch: n,
    prepareSendMessagesRequest: i,
    prepareReconnectToStreamRequest: a
  }) {
    this.api = e, this.credentials = t, this.headers = r, this.body = o, this.fetch = n, this.prepareSendMessagesRequest = i, this.prepareReconnectToStreamRequest = a;
  }
  async sendMessages({
    abortSignal: e,
    ...t
  }) {
    var r, o, n, i, a;
    const s = await Ue(this.body), u = await Ue(this.headers), l = await Ue(this.credentials), d = await ((r = this.prepareSendMessagesRequest) == null ? void 0 : r.call(this, {
      api: this.api,
      id: t.chatId,
      messages: t.messages,
      body: { ...s, ...t.body },
      headers: { ...u, ...t.headers },
      credentials: l,
      requestMetadata: t.metadata,
      trigger: t.trigger,
      messageId: t.messageId
    })), h = (o = d == null ? void 0 : d.api) != null ? o : this.api, y = (d == null ? void 0 : d.headers) !== void 0 ? d.headers : { ...u, ...t.headers }, p = (d == null ? void 0 : d.body) !== void 0 ? d.body : {
      ...s,
      ...t.body,
      id: t.chatId,
      messages: t.messages,
      trigger: t.trigger,
      messageId: t.messageId
    }, g = (n = d == null ? void 0 : d.credentials) != null ? n : l, v = await ((i = this.fetch) != null ? i : globalThis.fetch)(h, {
      method: "POST",
      headers: Me(
        {
          "Content-Type": "application/json",
          ...y
        },
        `ai-sdk/${st}`,
        Zt()
      ),
      body: JSON.stringify(p),
      credentials: g,
      signal: e
    });
    if (!v.ok)
      throw new Error(
        (a = await v.text()) != null ? a : "Failed to fetch the chat response."
      );
    if (!v.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(v.body);
  }
  async reconnectToStream(e) {
    var t, r, o, n, i;
    const a = await Ue(this.body), s = await Ue(this.headers), u = await Ue(this.credentials), l = await ((t = this.prepareReconnectToStreamRequest) == null ? void 0 : t.call(this, {
      api: this.api,
      id: e.chatId,
      body: { ...a, ...e.body },
      headers: { ...s, ...e.headers },
      credentials: u,
      requestMetadata: e.metadata
    })), d = (r = l == null ? void 0 : l.api) != null ? r : `${this.api}/${e.chatId}/stream`, h = (l == null ? void 0 : l.headers) !== void 0 ? l.headers : { ...s, ...e.headers }, y = (o = l == null ? void 0 : l.credentials) != null ? o : u, g = await ((n = this.fetch) != null ? n : globalThis.fetch)(d, {
      method: "GET",
      headers: Me(
        h,
        `ai-sdk/${st}`,
        Zt()
      ),
      credentials: y
    });
    if (g.status === 204)
      return null;
    if (!g.ok)
      throw new Error(
        (i = await g.text()) != null ? i : "Failed to fetch the chat response."
      );
    if (!g.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(g.body);
  }
}, oE = class extends xh {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return Ja({
      stream: e,
      schema: ch
    }).pipeThrough(
      new TransformStream({
        async transform(t, r) {
          if (!t.success)
            throw t.error;
          r.enqueue(t.value);
        }
      })
    );
  }
}, HE = class {
  constructor({
    generateId: e = Fe,
    id: t = e(),
    transport: r = new oE(),
    messageMetadataSchema: o,
    dataPartSchemas: n,
    state: i,
    onError: a,
    onToolCall: s,
    onFinish: u,
    onData: l,
    sendAutomaticallyWhen: d
  }) {
    this.activeResponse = void 0, this.jobExecutor = new mT(), this.sendMessage = async (h, y) => {
      var p, g, _, v;
      if (h == null) {
        await this.makeRequest({
          trigger: "submit-message",
          messageId: (p = this.lastMessage) == null ? void 0 : p.id,
          ...y
        });
        return;
      }
      let m;
      if ("text" in h || "files" in h ? m = {
        parts: [
          ...Array.isArray(h.files) ? h.files : await rE(h.files),
          ..."text" in h && h.text != null ? [{ type: "text", text: h.text }] : []
        ]
      } : m = h, h.messageId != null) {
        const b = this.state.messages.findIndex(
          ($) => $.id === h.messageId
        );
        if (b === -1)
          throw new Error(`message with id ${h.messageId} not found`);
        if (this.state.messages[b].role !== "user")
          throw new Error(
            `message with id ${h.messageId} is not a user message`
          );
        this.state.messages = this.state.messages.slice(0, b + 1), this.state.replaceMessage(b, {
          ...m,
          id: h.messageId,
          role: (g = m.role) != null ? g : "user",
          metadata: h.metadata
        });
      } else
        this.state.pushMessage({
          ...m,
          id: (_ = m.id) != null ? _ : this.generateId(),
          role: (v = m.role) != null ? v : "user",
          metadata: h.metadata
        });
      await this.makeRequest({
        trigger: "submit-message",
        messageId: h.messageId,
        ...y
      });
    }, this.regenerate = async ({
      messageId: h,
      ...y
    } = {}) => {
      const p = h == null ? this.state.messages.length - 1 : this.state.messages.findIndex((g) => g.id === h);
      if (p === -1)
        throw new Error(`message ${h} not found`);
      this.state.messages = this.state.messages.slice(
        0,
        // if the message is a user message, we need to include it in the request:
        this.messages[p].role === "assistant" ? p : p + 1
      ), await this.makeRequest({
        trigger: "regenerate-message",
        messageId: h,
        ...y
      });
    }, this.resumeStream = async (h = {}) => {
      await this.makeRequest({ trigger: "resume-stream", ...h });
    }, this.clearError = () => {
      this.status === "error" && (this.state.error = void 0, this.setStatus({ status: "ready" }));
    }, this.addToolResult = async ({
      state: h = "output-available",
      tool: y,
      toolCallId: p,
      output: g,
      errorText: _
    }) => this.jobExecutor.run(async () => {
      var v, m;
      const b = this.state.messages, $ = b[b.length - 1];
      this.state.replaceMessage(b.length - 1, {
        ...$,
        parts: $.parts.map(
          (w) => Fr(w) && w.toolCallId === p ? { ...w, state: h, output: g, errorText: _ } : w
        )
      }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(
        (w) => Fr(w) && w.toolCallId === p ? {
          ...w,
          state: h,
          output: g,
          errorText: _
        } : w
      )), this.status !== "streaming" && this.status !== "submitted" && ((v = this.sendAutomaticallyWhen) != null && v.call(this, { messages: this.state.messages })) && this.makeRequest({
        trigger: "submit-message",
        messageId: (m = this.lastMessage) == null ? void 0 : m.id
      });
    }), this.stop = async () => {
      var h;
      this.status !== "streaming" && this.status !== "submitted" || (h = this.activeResponse) != null && h.abortController && this.activeResponse.abortController.abort();
    }, this.id = t, this.transport = r, this.generateId = e, this.messageMetadataSchema = o, this.dataPartSchemas = n, this.state = i, this.onError = a, this.onToolCall = s, this.onFinish = u, this.onData = l, this.sendAutomaticallyWhen = d;
  }
  /**
   * Hook status:
   *
   * - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
   * - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
   * - `ready`: The full response has been received and processed; a new user message can be submitted.
   * - `error`: An error occurred during the API request, preventing successful completion.
   */
  get status() {
    return this.state.status;
  }
  setStatus({
    status: e,
    error: t
  }) {
    this.status !== e && (this.state.status = e, this.state.error = t);
  }
  get error() {
    return this.state.error;
  }
  get messages() {
    return this.state.messages;
  }
  get lastMessage() {
    return this.state.messages[this.state.messages.length - 1];
  }
  set messages(e) {
    this.state.messages = e;
  }
  async makeRequest({
    trigger: e,
    metadata: t,
    headers: r,
    body: o,
    messageId: n
  }) {
    var i, a, s;
    this.setStatus({ status: "submitted", error: void 0 });
    const u = this.lastMessage;
    let l = !1, d = !1, h = !1;
    try {
      const y = {
        state: es({
          lastMessage: this.state.snapshot(u),
          messageId: this.generateId()
        }),
        abortController: new AbortController()
      };
      y.abortController.signal.addEventListener("abort", () => {
        l = !0;
      }), this.activeResponse = y;
      let p;
      if (e === "resume-stream") {
        const _ = await this.transport.reconnectToStream({
          chatId: this.id,
          metadata: t,
          headers: r,
          body: o
        });
        if (_ == null) {
          this.setStatus({ status: "ready" });
          return;
        }
        p = _;
      } else
        p = await this.transport.sendMessages({
          chatId: this.id,
          messages: this.state.messages,
          abortSignal: y.abortController.signal,
          metadata: t,
          headers: r,
          body: o,
          trigger: e,
          messageId: n
        });
      const g = (_) => (
        // serialize the job execution to avoid race conditions:
        this.jobExecutor.run(
          () => _({
            state: y.state,
            write: () => {
              var v;
              this.setStatus({ status: "streaming" }), y.state.message.id === ((v = this.lastMessage) == null ? void 0 : v.id) ? this.state.replaceMessage(
                this.state.messages.length - 1,
                y.state.message
              ) : this.state.pushMessage(y.state.message);
            }
          })
        )
      );
      await wo({
        stream: ts({
          stream: p,
          onToolCall: this.onToolCall,
          onData: this.onData,
          messageMetadataSchema: this.messageMetadataSchema,
          dataPartSchemas: this.dataPartSchemas,
          runUpdateMessageJob: g,
          onError: (_) => {
            throw _;
          }
        }),
        onError: (_) => {
          throw _;
        }
      }), this.setStatus({ status: "ready" });
    } catch (y) {
      if (l || y.name === "AbortError")
        return l = !0, this.setStatus({ status: "ready" }), null;
      h = !0, y instanceof TypeError && (y.message.toLowerCase().includes("fetch") || y.message.toLowerCase().includes("network")) && (d = !0), this.onError && y instanceof Error && this.onError(y), this.setStatus({ status: "error", error: y });
    } finally {
      try {
        (i = this.onFinish) == null || i.call(this, {
          message: this.activeResponse.state.message,
          messages: this.state.messages,
          isAbort: l,
          isDisconnect: d,
          isError: h
        });
      } catch (y) {
        console.error(y);
      }
      this.activeResponse = void 0;
    }
    (a = this.sendAutomaticallyWhen) != null && a.call(this, { messages: this.state.messages }) && await this.makeRequest({
      trigger: "submit-message",
      messageId: (s = this.lastMessage) == null ? void 0 : s.id,
      metadata: t,
      headers: r,
      body: o
    });
  }
};
function KE({
  messages: e
}) {
  const t = e[e.length - 1];
  if (!t || t.role !== "assistant")
    return !1;
  const r = t.parts.reduce((n, i, a) => i.type === "step-start" ? a : n, -1), o = t.parts.slice(r + 1).filter(Fr);
  return o.length > 0 && o.every(
    (n) => n.state === "output-available" || n.state === "output-error"
  );
}
function iE({
  stream: e
}) {
  return e.pipeThrough(
    new TransformStream({
      start(t) {
        t.enqueue({ type: "start" }), t.enqueue({ type: "start-step" }), t.enqueue({ type: "text-start", id: "text-1" });
      },
      async transform(t, r) {
        r.enqueue({ type: "text-delta", id: "text-1", delta: t });
      },
      async flush(t) {
        t.enqueue({ type: "text-end", id: "text-1" }), t.enqueue({ type: "finish-step" }), t.enqueue({ type: "finish" });
      }
    })
  );
}
var YE = class extends xh {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return iE({
      stream: e.pipeThrough(new TextDecoderStream())
    });
  }
}, aE = f({
  type: k("text"),
  text: c(),
  state: ne(["streaming", "done"]).optional(),
  providerMetadata: ce.optional()
}), sE = f({
  type: k("reasoning"),
  text: c(),
  state: ne(["streaming", "done"]).optional(),
  providerMetadata: ce.optional()
}), uE = f({
  type: k("source-url"),
  sourceId: c(),
  url: c(),
  title: c().optional(),
  providerMetadata: ce.optional()
}), lE = f({
  type: k("source-document"),
  sourceId: c(),
  mediaType: c(),
  title: c(),
  filename: c().optional(),
  providerMetadata: ce.optional()
}), cE = f({
  type: k("file"),
  mediaType: c(),
  filename: c().optional(),
  url: c(),
  providerMetadata: ce.optional()
}), dE = f({
  type: k("step-start")
}), pE = f({
  type: c().startsWith("data-"),
  id: c().optional(),
  data: ue()
}), mE = [
  f({
    type: k("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: k("input-streaming"),
    input: ue().optional(),
    output: Ke().optional(),
    errorText: Ke().optional()
  }),
  f({
    type: k("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: k("input-available"),
    input: ue(),
    output: Ke().optional(),
    errorText: Ke().optional(),
    callProviderMetadata: ce.optional()
  }),
  f({
    type: k("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: k("output-available"),
    input: ue(),
    output: ue(),
    errorText: Ke().optional(),
    callProviderMetadata: ce.optional(),
    preliminary: V().optional()
  }),
  f({
    type: k("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: k("output-error"),
    input: ue(),
    output: Ke().optional(),
    errorText: c(),
    callProviderMetadata: ce.optional()
  })
], fE = [
  f({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: k("input-streaming"),
    providerExecuted: V().optional(),
    input: ue().optional(),
    output: Ke().optional(),
    errorText: Ke().optional()
  }),
  f({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: k("input-available"),
    providerExecuted: V().optional(),
    input: ue(),
    output: Ke().optional(),
    errorText: Ke().optional(),
    callProviderMetadata: ce.optional()
  }),
  f({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: k("output-available"),
    providerExecuted: V().optional(),
    input: ue(),
    output: ue(),
    errorText: Ke().optional(),
    callProviderMetadata: ce.optional(),
    preliminary: V().optional()
  }),
  f({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: k("output-error"),
    providerExecuted: V().optional(),
    input: ue(),
    output: Ke().optional(),
    errorText: c(),
    callProviderMetadata: ce.optional()
  })
], gE = f({
  id: c(),
  role: ne(["system", "user", "assistant"]),
  metadata: ue().optional(),
  parts: A(
    Y([
      aE,
      sE,
      uE,
      lE,
      cE,
      dE,
      pE,
      ...mE,
      ...fE
    ])
  )
});
async function hE({
  messages: e,
  metadataSchema: t,
  dataSchemas: r,
  tools: o
}) {
  try {
    if (e == null)
      return {
        success: !1,
        error: new _e({
          parameter: "messages",
          value: e,
          message: "messages parameter must be provided"
        })
      };
    const n = await Ut({
      value: e,
      schema: A(gE)
    });
    if (t)
      for (const i of n)
        await Ut({
          value: i.metadata,
          schema: t
        });
    if (r)
      for (const i of n) {
        const a = i.parts.filter(
          (s) => s.type.startsWith("data-")
        );
        for (const s of a) {
          const u = s.type.slice(5), l = r[u];
          if (!l)
            return {
              success: !1,
              error: new tt({
                value: s.data,
                cause: `No data schema found for data part ${u}`
              })
            };
          await Ut({
            value: s.data,
            schema: l
          });
        }
      }
    if (o)
      for (const i of n) {
        const a = i.parts.filter(
          (s) => s.type.startsWith("tool-")
        );
        for (const s of a) {
          const u = s.type.slice(5), l = o[u];
          if (!l)
            return {
              success: !1,
              error: new tt({
                value: s.input,
                cause: `No tool schema found for tool part ${u}`
              })
            };
          (s.state === "input-available" || s.state === "output-available" || s.state === "output-error") && await Ut({
            value: s.input,
            schema: l.inputSchema
          }), s.state === "output-available" && l.outputSchema && await Ut({
            value: s.output,
            schema: l.outputSchema
          });
        }
      }
    return {
      success: !0,
      data: n
    };
  } catch (n) {
    return {
      success: !1,
      error: n
    };
  }
}
async function XE({
  messages: e,
  metadataSchema: t,
  dataSchemas: r,
  tools: o
}) {
  const n = await hE({
    messages: e,
    metadataSchema: t,
    dataSchemas: r,
    tools: o
  });
  if (!n.success)
    throw n.error;
  return n.data;
}
function QE({
  execute: e,
  onError: t = uo,
  originalMessages: r,
  onFinish: o,
  generateId: n = Fe
}) {
  let i;
  const a = [], s = new ReadableStream({
    start(d) {
      i = d;
    }
  });
  function u(d) {
    try {
      i.enqueue(d);
    } catch {
    }
  }
  try {
    const d = e({
      writer: {
        write(h) {
          u(h);
        },
        merge(h) {
          a.push(
            (async () => {
              const y = h.getReader();
              for (; ; ) {
                const { done: p, value: g } = await y.read();
                if (p)
                  break;
                u(g);
              }
            })().catch((y) => {
              u({
                type: "error",
                errorText: t(y)
              });
            })
          );
        },
        onError: t
      }
    });
    d && a.push(
      d.catch((h) => {
        u({
          type: "error",
          errorText: t(h)
        });
      })
    );
  } catch (d) {
    u({
      type: "error",
      errorText: t(d)
    });
  }
  return new Promise(async (d) => {
    for (; a.length > 0; )
      await a.shift();
    d();
  }).finally(() => {
    try {
      i.close();
    } catch {
    }
  }), ph({
    stream: s,
    messageId: n(),
    originalMessages: r,
    onFinish: o,
    onError: t
  });
}
function eO({
  message: e,
  stream: t,
  onError: r,
  terminateOnError: o = !1
}) {
  var n;
  let i, a = !1;
  const s = new ReadableStream({
    start(d) {
      i = d;
    }
  }), u = es({
    messageId: (n = e == null ? void 0 : e.id) != null ? n : "",
    lastMessage: e
  }), l = (d) => {
    r == null || r(d), !a && o && (a = !0, i == null || i.error(d));
  };
  return wo({
    stream: ts({
      stream: t,
      runUpdateMessageJob(d) {
        return d({
          state: u,
          write: () => {
            i == null || i.enqueue(structuredClone(u.message));
          }
        });
      },
      onError: l
    }),
    onError: l
  }).finally(() => {
    a || i == null || i.close();
  }), Nt(s);
}
export {
  L as AISDKError,
  Ze as APICallError,
  HE as AbstractChat,
  oE as DefaultChatTransport,
  Uo as DownloadError,
  Rh as EmptyResponseBodyError,
  OE as Experimental_Agent,
  xh as HttpChatTransport,
  _e as InvalidArgumentError,
  Iu as InvalidDataContentError,
  y0 as InvalidMessageRoleError,
  Jt as InvalidPromptError,
  Eo as InvalidResponseDataError,
  bE as InvalidStreamPartError,
  og as InvalidToolInputError,
  qn as JSONParseError,
  uh as JsonToSseTransformStream,
  br as LoadAPIKeyError,
  De as MCPClientError,
  b0 as MessageConversionError,
  yE as NoContentGeneratedError,
  u0 as NoImageGeneratedError,
  nn as NoObjectGeneratedError,
  d0 as NoOutputGeneratedError,
  Wf as NoOutputSpecifiedError,
  p0 as NoSpeechGeneratedError,
  Ve as NoSuchModelError,
  ST as NoSuchProviderError,
  Yo as NoSuchToolError,
  yT as Output,
  ku as RetryError,
  mT as SerialJobExecutor,
  YE as TextStreamChatTransport,
  ti as TooManyEmbeddingValuesForCallError,
  g0 as ToolCallRepairError,
  tt as TypeValidationError,
  lh as UI_MESSAGE_STREAM_HEADERS,
  $e as UnsupportedFunctionalityError,
  hr as UnsupportedModelVersionError,
  _n as asSchema,
  Kg as assistantModelMessageSchema,
  WE as callCompletionApi,
  wo as consumeStream,
  rE as convertFileListToFileUIParts,
  EE as convertToCoreMessages,
  gh as convertToModelMessages,
  IE as coreAssistantMessageSchema,
  xE as coreMessageSchema,
  wE as coreSystemMessageSchema,
  kE as coreToolMessageSchema,
  $E as coreUserMessageSchema,
  jE as cosineSimilarity,
  nI as createAnthropic,
  Px as createGateway,
  TI as createGoogleGenerativeAI,
  dr as createIdGenerator,
  UI as createMistral,
  ux as createOpenAI,
  TT as createProviderRegistry,
  ih as createTextStreamResponse,
  QE as createUIMessageStream,
  B0 as createUIMessageStreamResponse,
  kT as customProvider,
  ZE as defaultSettingsMiddleware,
  Ew as dynamicTool,
  NE as embed,
  CE as embedMany,
  GE as experimental_createMCPClient,
  VE as experimental_createProviderRegistry,
  JE as experimental_customProvider,
  RE as experimental_generateImage,
  UE as experimental_generateSpeech,
  BE as experimental_transcribe,
  qE as extractReasoningMiddleware,
  zx as gateway,
  Fe as generateId,
  AE as generateObject,
  F0 as generateText,
  ME as getTextFromDataUrl,
  Xn as getToolName,
  TE as getToolOrDynamicToolName,
  SE as hasToolCall,
  Jr as isDeepEqualData,
  Fr as isToolOrDynamicToolUIPart,
  Ht as isToolUIPart,
  co as jsonSchema,
  KE as lastAssistantMessageIsCompleteWithToolCalls,
  Xg as modelMessageSchema,
  Ja as parseJsonEventStream,
  Qa as parsePartialJson,
  sh as pipeTextStreamToResponse,
  Y0 as pipeUIMessageStreamToResponse,
  eO as readUIMessageStream,
  hE as safeValidateUIMessages,
  PE as simulateReadableStream,
  LE as simulateStreamingMiddleware,
  DE as smoothStream,
  rh as stepCountIs,
  zE as streamObject,
  eT as streamText,
  Wg as systemModelMessageSchema,
  _E as tool,
  Yg as toolModelMessageSchema,
  ch as uiMessageChunkSchema,
  Hg as userModelMessageSchema,
  XE as validateUIMessages,
  _h as wrapLanguageModel,
  FE as wrapProvider,
  b$ as zodSchema
};
