var vu = "vercel.ai.error", ah = Symbol.for(vu), yu, sh = class _u extends Error {
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
    super(r), this[yu] = !0, this.name = t, this.cause = o;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return _u.hasMarker(t, vu);
  }
  static hasMarker(t, r) {
    const o = Symbol.for(r);
    return t != null && typeof t == "object" && o in t && typeof t[o] == "boolean" && t[o] === !0;
  }
};
yu = ah;
var D = sh, bu = "AI_APICallError", wu = `vercel.ai.error.${bu}`, uh = Symbol.for(wu), $u, je = class extends D {
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
    super({ name: bu, message: e, cause: a }), this[$u] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = o, this.responseHeaders = n, this.responseBody = i, this.isRetryable = s, this.data = u;
  }
  static isInstance(e) {
    return D.hasMarker(e, wu);
  }
};
$u = uh;
var Iu = "AI_EmptyResponseBodyError", ku = `vercel.ai.error.${Iu}`, lh = Symbol.for(ku), xu, ch = class extends D {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Iu, message: e }), this[xu] = !0;
  }
  static isInstance(e) {
    return D.hasMarker(e, ku);
  }
};
xu = lh;
function mn(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Su = "AI_InvalidArgumentError", Tu = `vercel.ai.error.${Su}`, dh = Symbol.for(Tu), Ou, Lo = class extends D {
  constructor({
    message: t,
    cause: r,
    argument: o
  }) {
    super({ name: Su, message: t, cause: r }), this[Ou] = !0, this.argument = o;
  }
  static isInstance(t) {
    return D.hasMarker(t, Tu);
  }
};
Ou = dh;
var Eu = "AI_InvalidPromptError", Nu = `vercel.ai.error.${Eu}`, ph = Symbol.for(Nu), Cu, Zt = class extends D {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: Eu, message: `Invalid prompt: ${t}`, cause: r }), this[Cu] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, Nu);
  }
};
Cu = ph;
var Pu = "AI_InvalidResponseDataError", Au = `vercel.ai.error.${Pu}`, mh = Symbol.for(Au), Mu, yo = class extends D {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: Pu, message: t }), this[Mu] = !0, this.data = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, Au);
  }
};
Mu = mh;
var Ru = "AI_JSONParseError", ju = `vercel.ai.error.${Ru}`, fh = Symbol.for(ju), zu, En = class extends D {
  constructor({ text: e, cause: t }) {
    super({
      name: Ru,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${mn(t)}`,
      cause: t
    }), this[zu] = !0, this.text = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, ju);
  }
};
zu = fh;
var Uu = "AI_LoadAPIKeyError", Du = `vercel.ai.error.${Uu}`, gh = Symbol.for(Du), qu, ar = class extends D {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Uu, message: e }), this[qu] = !0;
  }
  static isInstance(e) {
    return D.hasMarker(e, Du);
  }
};
qu = gh;
var Zu = "AI_NoContentGeneratedError", Lu = `vercel.ai.error.${Zu}`, hh = Symbol.for(Lu), Fu, cT = class extends D {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: Zu, message: e }), this[Fu] = !0;
  }
  static isInstance(e) {
    return D.hasMarker(e, Lu);
  }
};
Fu = hh;
var Ju = "AI_NoSuchModelError", Gu = `vercel.ai.error.${Ju}`, vh = Symbol.for(Gu), Vu, Ze = class extends D {
  constructor({
    errorName: e = Ju,
    modelId: t,
    modelType: r,
    message: o = `No such ${r}: ${t}`
  }) {
    super({ name: e, message: o }), this[Vu] = !0, this.modelId = t, this.modelType = r;
  }
  static isInstance(e) {
    return D.hasMarker(e, Gu);
  }
};
Vu = vh;
var Bu = "AI_TooManyEmbeddingValuesForCallError", Wu = `vercel.ai.error.${Bu}`, yh = Symbol.for(Wu), Hu, Fo = class extends D {
  constructor(e) {
    super({
      name: Bu,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[Hu] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return D.hasMarker(e, Wu);
  }
};
Hu = yh;
var Ku = "AI_TypeValidationError", Yu = `vercel.ai.error.${Ku}`, _h = Symbol.for(Yu), Xu, bh = class Eo extends D {
  constructor({ value: t, cause: r }) {
    super({
      name: Ku,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${mn(r)}`,
      cause: r
    }), this[Xu] = !0, this.value = t;
  }
  static isInstance(t) {
    return D.hasMarker(t, Yu);
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
    return Eo.isInstance(r) && r.value === t ? r : new Eo({ value: t, cause: r });
  }
};
Xu = _h;
var Xe = bh, Qu = "AI_UnsupportedFunctionalityError", el = `vercel.ai.error.${Qu}`, wh = Symbol.for(el), tl, we = class extends D {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: Qu, message: t }), this[tl] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, el);
  }
};
tl = wh;
function fr(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? !0 : Array.isArray(e) ? e.every(fr) : typeof e == "object" ? Object.entries(e).every(
    ([t, r]) => typeof t == "string" && fr(r)
  ) : !1;
}
function Ya(e) {
  return Array.isArray(e) && e.every(fr);
}
function gr(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, r]) => typeof t == "string" && fr(r)
  );
}
class Xa extends Error {
  constructor(t, r) {
    super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function _o(e) {
}
function $h(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = _o, onError: r = _o, onRetry: o = _o, onComment: n } = e;
  let i = "", a = !0, s, u = "", l = "";
  function d(_) {
    const v = a ? _.replace(/^\xEF\xBB\xBF/, "") : _, [g, b] = Ih(`${i}${v}`);
    for (const w of g)
      f(w);
    i = b, a = !1;
  }
  function f(_) {
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
      const g = _.slice(0, v), b = _[v + 1] === " " ? 2 : 1, w = _.slice(v + b);
      y(g, w, _);
      return;
    }
    y(_, "", _);
  }
  function y(_, v, g) {
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
          new Xa(`Invalid \`retry\` value: "${v}"`, {
            type: "invalid-retry",
            value: v,
            line: g
          })
        );
        break;
      default:
        r(
          new Xa(
            `Unknown field "${_.length > 20 ? `${_.slice(0, 20)}…` : _}"`,
            { type: "unknown-field", field: _, value: v, line: g }
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
  function m(_ = {}) {
    i && _.consume && f(i), a = !0, s = void 0, u = "", l = "", i = "";
  }
  return { feed: d, reset: m };
}
function Ih(e) {
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
class nl extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: o } = {}) {
    let n;
    super({
      start(i) {
        n = $h({
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
const rl = Object.freeze({
  status: "aborted"
});
function S(e, t, r) {
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
const ol = Symbol("zod_brand");
class Gt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Ar extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const hr = {};
function Ye(e) {
  return e && Object.assign(hr, e), hr;
}
function kh(e) {
  return e;
}
function xh(e) {
  return e;
}
function Sh(e) {
}
function Th(e) {
  throw new Error();
}
function Oh(e) {
}
function Jo(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, n]) => t.indexOf(+o) === -1).map(([o, n]) => n);
}
function R(e, t = "|") {
  return e.map((r) => H(r)).join(t);
}
function vr(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function qn(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Qt(e) {
  return e == null;
}
function Mr(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function il(e, t) {
  const r = (e.toString().split(".")[1] || "").length, o = t.toString();
  let n = (o.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(o)) {
    const u = o.match(/\d?e-(\d?)/);
    u != null && u[1] && (n = Number.parseInt(u[1]));
  }
  const i = r > n ? r : n, a = Number.parseInt(e.toFixed(i).replace(".", "")), s = Number.parseInt(t.toFixed(i).replace(".", ""));
  return a % s / 10 ** i;
}
const Qa = Symbol("evaluating");
function ee(e, t, r) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== Qa)
        return o === void 0 && (o = Qa, o = r()), o;
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
function Rr(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function vt(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Dt(...e) {
  const t = {};
  for (const r of e) {
    const o = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function Eh(e) {
  return Dt(e._zod.def);
}
function Nh(e, t) {
  return t ? t.reduce((r, o) => r == null ? void 0 : r[o], e) : e;
}
function Ch(e) {
  const t = Object.keys(e), r = t.map((o) => e[o]);
  return Promise.all(r).then((o) => {
    const n = {};
    for (let i = 0; i < t.length; i++)
      n[t[i]] = o[i];
    return n;
  });
}
function Ph(e = 10) {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let o = 0; o < e; o++)
    r += t[Math.floor(Math.random() * t.length)];
  return r;
}
function No(e) {
  return JSON.stringify(e);
}
const Go = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function sn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const al = qn(() => {
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
function Vt(e) {
  if (sn(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(sn(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function jr(e) {
  return Vt(e) ? { ...e } : e;
}
function Ah(e) {
  let t = 0;
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t++;
  return t;
}
const Mh = (e) => {
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
}, yr = /* @__PURE__ */ new Set(["string", "number", "symbol"]), sl = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function jt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function st(e, t, r) {
  const o = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (o._zod.parent = e), o;
}
function P(e) {
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
function Rh(e) {
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
function H(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function ul(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const ll = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, cl = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function dl(e, t) {
  const r = e._zod.def, o = Dt(e._zod.def, {
    get shape() {
      const n = {};
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (n[i] = r.shape[i]);
      }
      return vt(this, "shape", n), n;
    },
    checks: []
  });
  return st(e, o);
}
function pl(e, t) {
  const r = e._zod.def, o = Dt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete n[i];
      }
      return vt(this, "shape", n), n;
    },
    checks: []
  });
  return st(e, o);
}
function ml(e, t) {
  if (!Vt(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = Dt(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return vt(this, "shape", i), i;
    },
    checks: []
  });
  return st(e, n);
}
function fl(e, t) {
  if (!Vt(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return vt(this, "shape", o), o;
    },
    checks: e._zod.def.checks
  };
  return st(e, r);
}
function gl(e, t) {
  const r = Dt(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return vt(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return st(e, r);
}
function hl(e, t, r) {
  const o = Dt(t._zod.def, {
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
      return vt(this, "shape", i), i;
    },
    checks: []
  });
  return st(t, o);
}
function vl(e, t, r) {
  const o = Dt(t._zod.def, {
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
      return vt(this, "shape", i), i;
    },
    checks: []
  });
  return st(t, o);
}
function Lt(e, t = 0) {
  var r;
  if (e.aborted === !0)
    return !0;
  for (let o = t; o < e.issues.length; o++)
    if (((r = e.issues[o]) == null ? void 0 : r.continue) !== !0)
      return !0;
  return !1;
}
function mt(e, t) {
  return t.map((r) => {
    var o;
    return (o = r).path ?? (o.path = []), r.path.unshift(e), r;
  });
}
function xn(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function ht(e, t, r) {
  var n, i, a, s, u, l;
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const d = xn((a = (i = (n = e.inst) == null ? void 0 : n._zod.def) == null ? void 0 : i.error) == null ? void 0 : a.call(i, e)) ?? xn((s = t == null ? void 0 : t.error) == null ? void 0 : s.call(t, e)) ?? xn((u = r.customError) == null ? void 0 : u.call(r, e)) ?? xn((l = r.localeError) == null ? void 0 : l.call(r, e)) ?? "Invalid input";
    o.message = d;
  }
  return delete o.inst, delete o.continue, t != null && t.reportInput || delete o.input, o;
}
function zr(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function Ur(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function un(...e) {
  const [t, r, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: o
  } : { ...t };
}
function jh(e) {
  return Object.entries(e).filter(([t, r]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
function yl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    r[o] = t.charCodeAt(o);
  return r;
}
function _l(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return btoa(t);
}
function zh(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = "=".repeat((4 - t.length % 4) % 4);
  return yl(t + r);
}
function Uh(e) {
  return _l(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Dh(e) {
  const t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const r = new Uint8Array(t.length / 2);
  for (let o = 0; o < t.length; o += 2)
    r[o / 2] = Number.parseInt(t.slice(o, o + 2), 16);
  return r;
}
function qh(e) {
  return Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
}
class Zh {
  constructor(...t) {
  }
}
const Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIGINT_FORMAT_RANGES: cl,
  Class: Zh,
  NUMBER_FORMAT_RANGES: ll,
  aborted: Lt,
  allowsEval: al,
  assert: Oh,
  assertEqual: kh,
  assertIs: Sh,
  assertNever: Th,
  assertNotEqual: xh,
  assignProp: vt,
  base64ToUint8Array: yl,
  base64urlToUint8Array: zh,
  cached: qn,
  captureStackTrace: Go,
  cleanEnum: jh,
  cleanRegex: Mr,
  clone: st,
  cloneDef: Eh,
  createTransparentProxy: Rh,
  defineLazy: ee,
  esc: No,
  escapeRegex: jt,
  extend: ml,
  finalizeIssue: ht,
  floatSafeRemainder: il,
  getElementAtPath: Nh,
  getEnumValues: Jo,
  getLengthableOrigin: Ur,
  getParsedType: Mh,
  getSizableOrigin: zr,
  hexToUint8Array: Dh,
  isObject: sn,
  isPlainObject: Vt,
  issue: un,
  joinValues: R,
  jsonStringifyReplacer: vr,
  merge: gl,
  mergeDefs: Dt,
  normalizeParams: P,
  nullish: Qt,
  numKeys: Ah,
  objectClone: Rr,
  omit: pl,
  optionalKeys: ul,
  partial: hl,
  pick: dl,
  prefixIssues: mt,
  primitiveTypes: sl,
  promiseAllObject: Ch,
  propertyKeyTypes: yr,
  randomString: Ph,
  required: vl,
  safeExtend: fl,
  shallowClone: jr,
  stringifyPrimitive: H,
  uint8ArrayToBase64: _l,
  uint8ArrayToBase64url: Uh,
  uint8ArrayToHex: qh,
  unwrapMessage: xn
}, Symbol.toStringTag, { value: "Module" })), bl = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, vr, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Vo = S("$ZodError", bl), it = S("$ZodError", bl, { Parent: Error });
function Bo(e, t = (r) => r.message) {
  const r = {}, o = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : o.push(t(n));
  return { formErrors: o, fieldErrors: r };
}
function Wo(e, t) {
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
function wl(e, t) {
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
        let f = o, y = 0;
        for (; y < d.length; ) {
          const p = d[y], m = y === d.length - 1;
          typeof p == "string" ? (f.properties ?? (f.properties = {}), (s = f.properties)[p] ?? (s[p] = { errors: [] }), f = f.properties[p]) : (f.items ?? (f.items = []), (u = f.items)[p] ?? (u[p] = { errors: [] }), f = f.items[p]), m && f.errors.push(r(l)), y++;
        }
      }
  };
  return n(e), o;
}
function $l(e) {
  const t = [], r = e.map((o) => typeof o == "object" ? o.key : o);
  for (const o of r)
    typeof o == "number" ? t.push(`[${o}]`) : typeof o == "symbol" ? t.push(`[${JSON.stringify(String(o))}]`) : /[^\w$]/.test(o) ? t.push(`[${JSON.stringify(o)}]`) : (t.length && t.push("."), t.push(o));
  return t.join("");
}
function Il(e) {
  var o;
  const t = [], r = [...e.issues].sort((n, i) => (n.path ?? []).length - (i.path ?? []).length);
  for (const n of r)
    t.push(`✖ ${n.message}`), (o = n.path) != null && o.length && t.push(`  → at ${$l(n.path)}`);
  return t.join(`
`);
}
const Zn = (e) => (t, r, o, n) => {
  const i = o ? Object.assign(o, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, i);
  if (a instanceof Promise)
    throw new Gt();
  if (a.issues.length) {
    const s = new ((n == null ? void 0 : n.Err) ?? e)(a.issues.map((u) => ht(u, i, Ye())));
    throw Go(s, n == null ? void 0 : n.callee), s;
  }
  return a.value;
}, Co = /* @__PURE__ */ Zn(it), Ln = (e) => async (t, r, o, n) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, i);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const s = new ((n == null ? void 0 : n.Err) ?? e)(a.issues.map((u) => ht(u, i, Ye())));
    throw Go(s, n == null ? void 0 : n.callee), s;
  }
  return a.value;
}, Po = /* @__PURE__ */ Ln(it), Fn = (e) => (t, r, o) => {
  const n = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, n);
  if (i instanceof Promise)
    throw new Gt();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Vo)(i.issues.map((a) => ht(a, n, Ye())))
  } : { success: !0, data: i.value };
}, kl = /* @__PURE__ */ Fn(it), Jn = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, n);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((a) => ht(a, n, Ye())))
  } : { success: !0, data: i.value };
}, xl = /* @__PURE__ */ Jn(it), Ho = (e) => (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Zn(e)(t, r, n);
}, Fh = /* @__PURE__ */ Ho(it), Ko = (e) => (t, r, o) => Zn(e)(t, r, o), Jh = /* @__PURE__ */ Ko(it), Yo = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ln(e)(t, r, n);
}, Gh = /* @__PURE__ */ Yo(it), Xo = (e) => async (t, r, o) => Ln(e)(t, r, o), Vh = /* @__PURE__ */ Xo(it), Qo = (e) => (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Fn(e)(t, r, n);
}, Bh = /* @__PURE__ */ Qo(it), ei = (e) => (t, r, o) => Fn(e)(t, r, o), Wh = /* @__PURE__ */ ei(it), ti = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Jn(e)(t, r, n);
}, Hh = /* @__PURE__ */ ti(it), ni = (e) => async (t, r, o) => Jn(e)(t, r, o), Kh = /* @__PURE__ */ ni(it), Sl = /^[cC][^\s-]{8,}$/, Tl = /^[0-9a-z]+$/, Ol = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, El = /^[0-9a-vA-V]{20}$/, Nl = /^[A-Za-z0-9]{27}$/, Cl = /^[a-zA-Z0-9_-]{21}$/, Pl = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Yh = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Al = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ln = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Xh = /* @__PURE__ */ ln(4), Qh = /* @__PURE__ */ ln(6), ev = /* @__PURE__ */ ln(7), Ml = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, tv = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, nv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, rv = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, ov = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, iv = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, av = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Rl() {
  return new RegExp(av, "u");
}
const jl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, zl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/, Ul = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Dl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ql = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ri = /^[A-Za-z0-9_-]*$/, oi = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Zl = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, Ll = /^\+(?:[0-9]){6,14}[0-9]$/, Fl = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Jl = /* @__PURE__ */ new RegExp(`^${Fl}$`);
function Gl(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Vl(e) {
  return new RegExp(`^${Gl(e)}$`);
}
function Bl(e) {
  const t = Gl({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Fl}T(?:${o})$`);
}
const Wl = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Hl = /^\d+n?$/, Kl = /^\d+$/, Yl = /^-?\d+(?:\.\d+)?/i, Xl = /true|false/i, Ql = /null/i, ec = /undefined/i, tc = /^[^A-Z]*$/, nc = /^[^a-z]*$/, rc = /^[0-9a-fA-F]*$/;
function Gn(e, t) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function Vn(e) {
  return new RegExp(`^[A-Za-z0-9-_]{${e}}$`);
}
const sv = /^[0-9a-fA-F]{32}$/, uv = /* @__PURE__ */ Gn(22, "=="), lv = /* @__PURE__ */ Vn(22), cv = /^[0-9a-fA-F]{40}$/, dv = /* @__PURE__ */ Gn(27, "="), pv = /* @__PURE__ */ Vn(27), mv = /^[0-9a-fA-F]{64}$/, fv = /* @__PURE__ */ Gn(43, "="), gv = /* @__PURE__ */ Vn(43), hv = /^[0-9a-fA-F]{96}$/, vv = /* @__PURE__ */ Gn(64, ""), yv = /* @__PURE__ */ Vn(64), _v = /^[0-9a-fA-F]{128}$/, bv = /* @__PURE__ */ Gn(86, "=="), wv = /* @__PURE__ */ Vn(86), ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: ql,
  base64url: ri,
  bigint: Hl,
  boolean: Xl,
  browserEmail: iv,
  cidrv4: Ul,
  cidrv6: Dl,
  cuid: Sl,
  cuid2: Tl,
  date: Jl,
  datetime: Bl,
  domain: Zl,
  duration: Pl,
  e164: Ll,
  email: Ml,
  emoji: Rl,
  extendedDuration: Yh,
  guid: Al,
  hex: rc,
  hostname: oi,
  html5Email: tv,
  idnEmail: ov,
  integer: Kl,
  ipv4: jl,
  ipv6: zl,
  ksuid: Nl,
  lowercase: tc,
  md5_base64: uv,
  md5_base64url: lv,
  md5_hex: sv,
  nanoid: Cl,
  null: Ql,
  number: Yl,
  rfc5322Email: nv,
  sha1_base64: dv,
  sha1_base64url: pv,
  sha1_hex: cv,
  sha256_base64: fv,
  sha256_base64url: gv,
  sha256_hex: mv,
  sha384_base64: vv,
  sha384_base64url: yv,
  sha384_hex: hv,
  sha512_base64: bv,
  sha512_base64url: wv,
  sha512_hex: _v,
  string: Wl,
  time: Vl,
  ulid: Ol,
  undefined: ec,
  unicodeEmail: rv,
  uppercase: nc,
  uuid: ln,
  uuid4: Xh,
  uuid6: Qh,
  uuid7: ev,
  xid: El
}, Symbol.toStringTag, { value: "Module" })), Te = /* @__PURE__ */ S("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), oc = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, ai = /* @__PURE__ */ S("$ZodCheckLessThan", (e, t) => {
  Te.init(e, t);
  const r = oc[typeof t.value];
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
}), si = /* @__PURE__ */ S("$ZodCheckGreaterThan", (e, t) => {
  Te.init(e, t);
  const r = oc[typeof t.value];
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
}), ic = /* @__PURE__ */ S("$ZodCheckMultipleOf", (e, t) => {
  Te.init(e, t), e._zod.onattach.push((r) => {
    var o;
    (o = r._zod.bag).multipleOf ?? (o.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : il(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ac = /* @__PURE__ */ S("$ZodCheckNumberFormat", (e, t) => {
  var a;
  Te.init(e, t), t.format = t.format || "float64";
  const r = (a = t.format) == null ? void 0 : a.includes("int"), o = r ? "int" : "number", [n, i] = ll[t.format];
  e._zod.onattach.push((s) => {
    const u = s._zod.bag;
    u.format = t.format, u.minimum = n, u.maximum = i, r && (u.pattern = Kl);
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
}), sc = /* @__PURE__ */ S("$ZodCheckBigIntFormat", (e, t) => {
  Te.init(e, t);
  const [r, o] = cl[t.format];
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
}), uc = /* @__PURE__ */ S("$ZodCheckMaxSize", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !Qt(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const n = o.value;
    n.size <= t.maximum || o.issues.push({
      origin: zr(n),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), lc = /* @__PURE__ */ S("$ZodCheckMinSize", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !Qt(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const n = o.value;
    n.size >= t.minimum || o.issues.push({
      origin: zr(n),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), cc = /* @__PURE__ */ S("$ZodCheckSizeEquals", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !Qt(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e._zod.check = (o) => {
    const n = o.value, i = n.size;
    if (i === t.size)
      return;
    const a = i > t.size;
    o.issues.push({
      origin: zr(n),
      ...a ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), dc = /* @__PURE__ */ S("$ZodCheckMaxLength", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !Qt(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const n = o.value;
    if (n.length <= t.maximum)
      return;
    const a = Ur(n);
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
}), pc = /* @__PURE__ */ S("$ZodCheckMinLength", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !Qt(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const n = o.value;
    if (n.length >= t.minimum)
      return;
    const a = Ur(n);
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
}), mc = /* @__PURE__ */ S("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Te.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !Qt(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (o) => {
    const n = o.value, i = n.length;
    if (i === t.length)
      return;
    const a = Ur(n), s = i > t.length;
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
}), Bn = /* @__PURE__ */ S("$ZodCheckStringFormat", (e, t) => {
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
}), fc = /* @__PURE__ */ S("$ZodCheckRegex", (e, t) => {
  Bn.init(e, t), e._zod.check = (r) => {
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
}), gc = /* @__PURE__ */ S("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = tc), Bn.init(e, t);
}), hc = /* @__PURE__ */ S("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = nc), Bn.init(e, t);
}), vc = /* @__PURE__ */ S("$ZodCheckIncludes", (e, t) => {
  Te.init(e, t);
  const r = jt(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
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
}), yc = /* @__PURE__ */ S("$ZodCheckStartsWith", (e, t) => {
  Te.init(e, t);
  const r = new RegExp(`^${jt(t.prefix)}.*`);
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
}), _c = /* @__PURE__ */ S("$ZodCheckEndsWith", (e, t) => {
  Te.init(e, t);
  const r = new RegExp(`.*${jt(t.suffix)}$`);
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
function es(e, t, r) {
  e.issues.length && t.issues.push(...mt(r, e.issues));
}
const bc = /* @__PURE__ */ S("$ZodCheckProperty", (e, t) => {
  Te.init(e, t), e._zod.check = (r) => {
    const o = t.schema._zod.run({
      value: r.value[t.property],
      issues: []
    }, {});
    if (o instanceof Promise)
      return o.then((n) => es(n, r, t.property));
    es(o, r, t.property);
  };
}), wc = /* @__PURE__ */ S("$ZodCheckMimeType", (e, t) => {
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
}), $c = /* @__PURE__ */ S("$ZodCheckOverwrite", (e, t) => {
  Te.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Ic {
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
const kc = {
  major: 4,
  minor: 1,
  patch: 1
}, K = /* @__PURE__ */ S("$ZodType", (e, t) => {
  var n;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = kc;
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
      let d = Lt(s), f;
      for (const y of u) {
        if (y._zod.def.when) {
          if (!y._zod.def.when(s))
            continue;
        } else if (d)
          continue;
        const p = s.issues.length, m = y._zod.check(s);
        if (m instanceof Promise && (l == null ? void 0 : l.async) === !1)
          throw new Gt();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, s.issues.length !== p && (d || (d = Lt(s, p)));
          });
        else {
          if (s.issues.length === p)
            continue;
          d || (d = Lt(s, p));
        }
      }
      return f ? f.then(() => s) : s;
    }, a = (s, u, l) => {
      if (Lt(s))
        return s.aborted = !0, s;
      const d = i(u, o, l);
      if (d instanceof Promise) {
        if (l.async === !1)
          throw new Gt();
        return d.then((f) => e._zod.parse(f, l));
      }
      return e._zod.parse(d, l);
    };
    e._zod.run = (s, u) => {
      if (u.skipChecks)
        return e._zod.parse(s, u);
      if (u.direction === "backward") {
        const d = e._zod.parse({ value: s.value, issues: [] }, { ...u, skipChecks: !0 });
        return d instanceof Promise ? d.then((f) => a(f, s, u)) : a(d, s, u);
      }
      const l = e._zod.parse(s, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new Gt();
        return l.then((d) => i(d, o, u));
      }
      return i(l, o, u);
    };
  }
  e["~standard"] = {
    validate: (i) => {
      var a;
      try {
        const s = kl(e, i);
        return s.success ? { value: s.data } : { issues: (a = s.error) == null ? void 0 : a.issues };
      } catch {
        return xl(e, i).then((u) => {
          var l;
          return u.success ? { value: u.data } : { issues: (l = u.error) == null ? void 0 : l.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Wn = /* @__PURE__ */ S("$ZodString", (e, t) => {
  var r;
  K.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? Wl(e._zod.bag), e._zod.parse = (o, n) => {
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
}), ve = /* @__PURE__ */ S("$ZodStringFormat", (e, t) => {
  Bn.init(e, t), Wn.init(e, t);
}), xc = /* @__PURE__ */ S("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Al), ve.init(e, t);
}), Sc = /* @__PURE__ */ S("$ZodUUID", (e, t) => {
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
    t.pattern ?? (t.pattern = ln(o));
  } else
    t.pattern ?? (t.pattern = ln());
  ve.init(e, t);
}), Tc = /* @__PURE__ */ S("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Ml), ve.init(e, t);
}), Oc = /* @__PURE__ */ S("$ZodURL", (e, t) => {
  ve.init(e, t), e._zod.check = (r) => {
    try {
      const o = r.value.trim(), n = new URL(o);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: oi.source,
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
}), Ec = /* @__PURE__ */ S("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Rl()), ve.init(e, t);
}), Nc = /* @__PURE__ */ S("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Cl), ve.init(e, t);
}), Cc = /* @__PURE__ */ S("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Sl), ve.init(e, t);
}), Pc = /* @__PURE__ */ S("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Tl), ve.init(e, t);
}), Ac = /* @__PURE__ */ S("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Ol), ve.init(e, t);
}), Mc = /* @__PURE__ */ S("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = El), ve.init(e, t);
}), Rc = /* @__PURE__ */ S("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Nl), ve.init(e, t);
}), jc = /* @__PURE__ */ S("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Bl(t)), ve.init(e, t);
}), zc = /* @__PURE__ */ S("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Jl), ve.init(e, t);
}), Uc = /* @__PURE__ */ S("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Vl(t)), ve.init(e, t);
}), Dc = /* @__PURE__ */ S("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Pl), ve.init(e, t);
}), qc = /* @__PURE__ */ S("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = jl), ve.init(e, t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.format = "ipv4";
  });
}), Zc = /* @__PURE__ */ S("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = zl), ve.init(e, t), e._zod.onattach.push((r) => {
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
}), Lc = /* @__PURE__ */ S("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Ul), ve.init(e, t);
}), Fc = /* @__PURE__ */ S("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Dl), ve.init(e, t), e._zod.check = (r) => {
    const [o, n] = r.value.split("/");
    try {
      if (!n)
        throw new Error();
      const i = Number(n);
      if (`${i}` !== n)
        throw new Error();
      if (i < 0 || i > 128)
        throw new Error();
      new URL(`http://[${o}]`);
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
function ui(e) {
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
const Jc = /* @__PURE__ */ S("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = ql), ve.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    ui(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Gc(e) {
  if (!ri.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return ui(r);
}
const Vc = /* @__PURE__ */ S("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ri), ve.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    Gc(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Bc = /* @__PURE__ */ S("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Ll), ve.init(e, t);
});
function Wc(e, t = null) {
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
const Hc = /* @__PURE__ */ S("$ZodJWT", (e, t) => {
  ve.init(e, t), e._zod.check = (r) => {
    Wc(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Kc = /* @__PURE__ */ S("$ZodCustomStringFormat", (e, t) => {
  ve.init(e, t), e._zod.check = (r) => {
    t.fn(r.value) || r.issues.push({
      code: "invalid_format",
      format: t.format,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), li = /* @__PURE__ */ S("$ZodNumber", (e, t) => {
  K.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Yl, e._zod.parse = (r, o) => {
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
}), Yc = /* @__PURE__ */ S("$ZodNumber", (e, t) => {
  ac.init(e, t), li.init(e, t);
}), ci = /* @__PURE__ */ S("$ZodBoolean", (e, t) => {
  K.init(e, t), e._zod.pattern = Xl, e._zod.parse = (r, o) => {
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
}), di = /* @__PURE__ */ S("$ZodBigInt", (e, t) => {
  K.init(e, t), e._zod.pattern = Hl, e._zod.parse = (r, o) => {
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
}), Xc = /* @__PURE__ */ S("$ZodBigInt", (e, t) => {
  sc.init(e, t), di.init(e, t);
}), Qc = /* @__PURE__ */ S("$ZodSymbol", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n == "symbol" || r.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), ed = /* @__PURE__ */ S("$ZodUndefined", (e, t) => {
  K.init(e, t), e._zod.pattern = ec, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), td = /* @__PURE__ */ S("$ZodNull", (e, t) => {
  K.init(e, t), e._zod.pattern = Ql, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, o) => {
    const n = r.value;
    return n === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), nd = /* @__PURE__ */ S("$ZodAny", (e, t) => {
  K.init(e, t), e._zod.parse = (r) => r;
}), rd = /* @__PURE__ */ S("$ZodUnknown", (e, t) => {
  K.init(e, t), e._zod.parse = (r) => r;
}), od = /* @__PURE__ */ S("$ZodNever", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), id = /* @__PURE__ */ S("$ZodVoid", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "void",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), ad = /* @__PURE__ */ S("$ZodDate", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
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
function ts(e, t, r) {
  e.issues.length && t.issues.push(...mt(r, e.issues)), t.value[r] = e.value;
}
const sd = /* @__PURE__ */ S("$ZodArray", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
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
      u instanceof Promise ? i.push(u.then((l) => ts(l, r, a))) : ts(u, r, a);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function _r(e, t, r, o) {
  e.issues.length && t.issues.push(...mt(r, e.issues)), e.value === void 0 ? r in o && (t.value[r] = void 0) : t.value[r] = e.value;
}
function ud(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape[o]._zod.traits.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const r = ul(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function ld(e, t, r, o, n, i) {
  const a = [], s = n.keySet, u = n.catchall._zod, l = u.def.type;
  for (const d of Object.keys(t)) {
    if (s.has(d))
      continue;
    if (l === "never") {
      a.push(d);
      continue;
    }
    const f = u.run({ value: t[d], issues: [] }, o);
    f instanceof Promise ? e.push(f.then((y) => _r(y, r, d, t))) : _r(f, r, d, t);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const cd = /* @__PURE__ */ S("$ZodObject", (e, t) => {
  K.init(e, t);
  const r = qn(() => ud(t));
  ee(e._zod, "propValues", () => {
    const a = t.shape, s = {};
    for (const u in a) {
      const l = a[u]._zod;
      if (l.values) {
        s[u] ?? (s[u] = /* @__PURE__ */ new Set());
        for (const d of l.values)
          s[u].add(d);
      }
    }
    return s;
  });
  const o = sn, n = t.catchall;
  let i;
  e._zod.parse = (a, s) => {
    i ?? (i = r.value);
    const u = a.value;
    if (!o(u))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), a;
    a.value = {};
    const l = [], d = i.shape;
    for (const f of i.keys) {
      const p = d[f]._zod.run({ value: u[f], issues: [] }, s);
      p instanceof Promise ? l.push(p.then((m) => _r(m, a, f, u))) : _r(p, a, f, u);
    }
    return n ? ld(l, u, a, s, r.value, e) : l.length ? Promise.all(l).then(() => a) : a;
  };
}), dd = /* @__PURE__ */ S("$ZodObjectJIT", (e, t) => {
  cd.init(e, t);
  const r = e._zod.parse, o = qn(() => ud(t)), n = (y) => {
    const p = new Ic(["shape", "payload", "ctx"]), m = o.value, _ = (w) => {
      const $ = No(w);
      return `shape[${$}]._zod.run({ value: input[${$}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const v = /* @__PURE__ */ Object.create(null);
    let g = 0;
    for (const w of m.keys)
      v[w] = `key_${g++}`;
    p.write("const newResult = {}");
    for (const w of m.keys) {
      const $ = v[w], O = No(w);
      p.write(`const ${$} = ${_(w)};`), p.write(`
        if (${$}.issues.length) {
          payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${O}, ...iss.path] : [${O}]
          })));
        }
        
        if (${$}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${$}.value;
        }
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const b = p.compile();
    return (w, $) => b(y, w, $);
  };
  let i;
  const a = sn, s = !hr.jitless, l = s && al.value, d = t.catchall;
  let f;
  e._zod.parse = (y, p) => {
    f ?? (f = o.value);
    const m = y.value;
    return a(m) ? s && l && (p == null ? void 0 : p.async) === !1 && p.jitless !== !0 ? (i || (i = n(t.shape)), y = i(y, p), d ? ld([], m, y, p, f, e) : y) : r(y, p) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: m,
      inst: e
    }), y);
  };
});
function ns(e, t, r, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const n = e.filter((i) => !Lt(i));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((i) => i.issues.map((a) => ht(a, o, Ye())))
  }), t);
}
const pi = /* @__PURE__ */ S("$ZodUnion", (e, t) => {
  K.init(e, t), ee(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), ee(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), ee(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), ee(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${n.map((i) => Mr(i.source)).join("|")})$`);
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
    return a ? Promise.all(s).then((u) => ns(u, n, e, i)) : ns(s, n, e, i);
  };
}), pd = /* @__PURE__ */ S("$ZodDiscriminatedUnion", (e, t) => {
  pi.init(e, t);
  const r = e._zod.parse;
  ee(e._zod, "propValues", () => {
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
  const o = qn(() => {
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
    if (!sn(a))
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
}), md = /* @__PURE__ */ S("$ZodIntersection", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value, i = t.left._zod.run({ value: n, issues: [] }, o), a = t.right._zod.run({ value: n, issues: [] }, o);
    return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([u, l]) => rs(r, u, l)) : rs(r, i, a);
  };
});
function Ao(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Vt(e) && Vt(t)) {
    const r = Object.keys(t), o = Object.keys(e).filter((i) => r.indexOf(i) !== -1), n = { ...e, ...t };
    for (const i of o) {
      const a = Ao(e[i], t[i]);
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
      const n = e[o], i = t[o], a = Ao(n, i);
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
function rs(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), Lt(e))
    return e;
  const o = Ao(t.value, r.value);
  if (!o.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return e.value = o.data, e;
}
const mi = /* @__PURE__ */ S("$ZodTuple", (e, t) => {
  K.init(e, t);
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
      d instanceof Promise ? s.push(d.then((f) => sr(f, n, u))) : sr(d, n, u);
    }
    if (t.rest) {
      const l = a.slice(r.length);
      for (const d of l) {
        u++;
        const f = t.rest._zod.run({
          value: d,
          issues: []
        }, i);
        f instanceof Promise ? s.push(f.then((y) => sr(y, n, u))) : sr(f, n, u);
      }
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function sr(e, t, r) {
  e.issues.length && t.issues.push(...mt(r, e.issues)), t.value[r] = e.value;
}
const fd = /* @__PURE__ */ S("$ZodRecord", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!Vt(n))
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
            d.issues.length && r.issues.push(...mt(u, d.issues)), r.value[u] = d.value;
          })) : (l.issues.length && r.issues.push(...mt(u, l.issues)), r.value[u] = l.value);
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
            issues: s.issues.map((l) => ht(l, o, Ye())),
            input: a,
            path: [a],
            inst: e
          }), r.value[s.value] = s.value;
          continue;
        }
        const u = t.valueType._zod.run({ value: n[a], issues: [] }, o);
        u instanceof Promise ? i.push(u.then((l) => {
          l.issues.length && r.issues.push(...mt(a, l.issues)), r.value[s.value] = l.value;
        })) : (u.issues.length && r.issues.push(...mt(a, u.issues)), r.value[s.value] = u.value);
      }
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
}), gd = /* @__PURE__ */ S("$ZodMap", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
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
      u instanceof Promise || l instanceof Promise ? i.push(Promise.all([u, l]).then(([d, f]) => {
        os(d, f, r, a, n, e, o);
      })) : os(u, l, r, a, n, e, o);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function os(e, t, r, o, n, i, a) {
  e.issues.length && (yr.has(typeof o) ? r.issues.push(...mt(o, e.issues)) : r.issues.push({
    code: "invalid_key",
    origin: "map",
    input: n,
    inst: i,
    issues: e.issues.map((s) => ht(s, a, Ye()))
  })), t.issues.length && (yr.has(typeof o) ? r.issues.push(...mt(o, t.issues)) : r.issues.push({
    origin: "map",
    code: "invalid_element",
    input: n,
    inst: i,
    key: o,
    issues: t.issues.map((s) => ht(s, a, Ye()))
  })), r.value.set(e.value, t.value);
}
const hd = /* @__PURE__ */ S("$ZodSet", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
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
      s instanceof Promise ? i.push(s.then((u) => is(u, r))) : is(s, r);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function is(e, t) {
  e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
const vd = /* @__PURE__ */ S("$ZodEnum", (e, t) => {
  K.init(e, t);
  const r = Jo(t.entries), o = new Set(r);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${r.filter((n) => yr.has(typeof n)).map((n) => typeof n == "string" ? jt(n) : n.toString()).join("|")})$`), e._zod.parse = (n, i) => {
    const a = n.value;
    return o.has(a) || n.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), n;
  };
}), yd = /* @__PURE__ */ S("$ZodLiteral", (e, t) => {
  if (K.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? jt(r) : r ? jt(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const n = r.value;
    return e._zod.values.has(n) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: n,
      inst: e
    }), r;
  };
}), _d = /* @__PURE__ */ S("$ZodFile", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return n instanceof File || r.issues.push({
      expected: "file",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), bd = /* @__PURE__ */ S("$ZodTransform", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Ar(e.constructor.name);
    const n = t.transform(r.value, r);
    if (o.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((a) => (r.value = a, r));
    if (n instanceof Promise)
      throw new Gt();
    return r.value = n, r;
  };
});
function as(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const wd = /* @__PURE__ */ S("$ZodOptional", (e, t) => {
  K.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ee(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ee(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Mr(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, o) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(r, o);
      return n instanceof Promise ? n.then((i) => as(i, r.value)) : as(n, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, o);
  };
}), $d = /* @__PURE__ */ S("$ZodNullable", (e, t) => {
  K.init(e, t), ee(e._zod, "optin", () => t.innerType._zod.optin), ee(e._zod, "optout", () => t.innerType._zod.optout), ee(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Mr(r.source)}|null)$`) : void 0;
  }), ee(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, o) => r.value === null ? r : t.innerType._zod.run(r, o);
}), Id = /* @__PURE__ */ S("$ZodDefault", (e, t) => {
  K.init(e, t), e._zod.optin = "optional", ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => ss(i, t)) : ss(n, t);
  };
});
function ss(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const kd = /* @__PURE__ */ S("$ZodPrefault", (e, t) => {
  K.init(e, t), e._zod.optin = "optional", ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => (o.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, o));
}), xd = /* @__PURE__ */ S("$ZodNonOptional", (e, t) => {
  K.init(e, t), ee(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (r, o) => {
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => us(i, e)) : us(n, e);
  };
});
function us(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Sd = /* @__PURE__ */ S("$ZodSuccess", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Ar("ZodSuccess");
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => (r.value = i.issues.length === 0, r)) : (r.value = n.issues.length === 0, r);
  };
}), Td = /* @__PURE__ */ S("$ZodCatch", (e, t) => {
  K.init(e, t), ee(e._zod, "optin", () => t.innerType._zod.optin), ee(e._zod, "optout", () => t.innerType._zod.optout), ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => (r.value = i.value, i.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: i.issues.map((a) => ht(a, o, Ye()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((i) => ht(i, o, Ye()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), Od = /* @__PURE__ */ S("$ZodNaN", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => ((typeof r.value != "number" || !Number.isNaN(r.value)) && r.issues.push({
    input: r.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), r);
}), Ed = /* @__PURE__ */ S("$ZodPipe", (e, t) => {
  K.init(e, t), ee(e._zod, "values", () => t.in._zod.values), ee(e._zod, "optin", () => t.in._zod.optin), ee(e._zod, "optout", () => t.out._zod.optout), ee(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => ur(a, t.in, o)) : ur(i, t.in, o);
    }
    const n = t.in._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => ur(i, t.out, o)) : ur(n, t.out, o);
  };
});
function ur(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const fi = /* @__PURE__ */ S("$ZodCodec", (e, t) => {
  K.init(e, t), ee(e._zod, "values", () => t.in._zod.values), ee(e._zod, "optin", () => t.in._zod.optin), ee(e._zod, "optout", () => t.out._zod.optout), ee(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, o) => {
    if ((o.direction || "forward") === "forward") {
      const i = t.in._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => lr(a, t, o)) : lr(i, t, o);
    } else {
      const i = t.out._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => lr(a, t, o)) : lr(i, t, o);
    }
  };
});
function lr(e, t, r) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((r.direction || "forward") === "forward") {
    const n = t.transform(e.value, e);
    return n instanceof Promise ? n.then((i) => cr(e, i, t.out, r)) : cr(e, n, t.out, r);
  } else {
    const n = t.reverseTransform(e.value, e);
    return n instanceof Promise ? n.then((i) => cr(e, i, t.in, r)) : cr(e, n, t.in, r);
  }
}
function cr(e, t, r, o) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: t, issues: e.issues }, o);
}
const Nd = /* @__PURE__ */ S("$ZodReadonly", (e, t) => {
  K.init(e, t), ee(e._zod, "propValues", () => t.innerType._zod.propValues), ee(e._zod, "values", () => t.innerType._zod.values), ee(e._zod, "optin", () => t.innerType._zod.optin), ee(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then(ls) : ls(n);
  };
});
function ls(e) {
  return e.value = Object.freeze(e.value), e;
}
const Cd = /* @__PURE__ */ S("$ZodTemplateLiteral", (e, t) => {
  K.init(e, t);
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
    } else if (o === null || sl.has(typeof o))
      r.push(jt(`${o}`));
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
}), Pd = /* @__PURE__ */ S("$ZodFunction", (e, t) => (K.init(e, t), e._def = t, e._zod.def = t, e.implement = (r) => {
  if (typeof r != "function")
    throw new Error("implement() must be called with a function");
  return function(...o) {
    const n = e._def.input ? Co(e._def.input, o) : o, i = Reflect.apply(r, this, n);
    return e._def.output ? Co(e._def.output, i) : i;
  };
}, e.implementAsync = (r) => {
  if (typeof r != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...o) {
    const n = e._def.input ? await Po(e._def.input, o) : o, i = await Reflect.apply(r, this, n);
    return e._def.output ? await Po(e._def.output, i) : i;
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
    input: new mi({
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
}, e)), Ad = /* @__PURE__ */ S("$ZodPromise", (e, t) => {
  K.init(e, t), e._zod.parse = (r, o) => Promise.resolve(r.value).then((n) => t.innerType._zod.run({ value: n, issues: [] }, o));
}), Md = /* @__PURE__ */ S("$ZodLazy", (e, t) => {
  K.init(e, t), ee(e._zod, "innerType", () => t.getter()), ee(e._zod, "pattern", () => e._zod.innerType._zod.pattern), ee(e._zod, "propValues", () => e._zod.innerType._zod.propValues), ee(e._zod, "optin", () => e._zod.innerType._zod.optin ?? void 0), ee(e._zod, "optout", () => e._zod.innerType._zod.optout ?? void 0), e._zod.parse = (r, o) => e._zod.innerType._zod.run(r, o);
}), Rd = /* @__PURE__ */ S("$ZodCustom", (e, t) => {
  Te.init(e, t), K.init(e, t), e._zod.parse = (r, o) => r, e._zod.check = (r) => {
    const o = r.value, n = t.fn(o);
    if (n instanceof Promise)
      return n.then((i) => cs(i, r, o, e));
    cs(n, r, o, e);
  };
});
function cs(e, t, r, o) {
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
    o._zod.def.params && (n.params = o._zod.def.params), t.issues.push(un(n));
  }
}
const $v = () => {
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
        return n.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${H(n.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${R(n.values, "|")}`;
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
        return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${R(n.keys, "، ")}`;
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
function Iv() {
  return {
    localeError: $v()
  };
}
const kv = () => {
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
        return n.values.length === 1 ? `Yanlış dəyər: gözlənilən ${H(n.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${R(n.values, "|")}`;
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
        return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${R(n.keys, ", ")}`;
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
function xv() {
  return {
    localeError: kv()
  };
}
function ds(e, t, r, o) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? o : i === 1 ? t : i >= 2 && i <= 4 ? r : o;
}
const Sv = () => {
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
        return n.values.length === 1 ? `Няправільны ўвод: чакалася ${H(n.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${R(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const s = Number(n.maximum), u = ds(s, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${a.verb} ${i}${n.maximum.toString()} ${u}`;
        }
        return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const s = Number(n.minimum), u = ds(s, a.unit.one, a.unit.few, a.unit.many);
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
        return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${R(n.keys, ", ")}`;
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
function Tv() {
  return {
    localeError: Sv()
  };
}
const Ov = () => {
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
      case "invalid_value":
        return n.values.length === 1 ? `Valor invàlid: s'esperava ${H(n.values[0])}` : `Opció invàlida: s'esperava una de ${R(n.values, " o ")}`;
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
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${n.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return `Element invàlid a ${n.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function Ev() {
  return {
    localeError: Ov()
  };
}
const Nv = () => {
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
        return n.values.length === 1 ? `Neplatný vstup: očekáváno ${H(n.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${R(n.values, "|")}`;
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
        return `Neznámé klíče: ${R(n.keys, ", ")}`;
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
function Cv() {
  return {
    localeError: Nv()
  };
}
const Pv = () => {
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
        return a.values.length === 1 ? `Ugyldig værdi: forventede ${H(a.values[0])}` : `Ugyldigt valg: forventede en af følgende ${R(a.values, "|")}`;
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
        return `${a.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${R(a.keys, ", ")}`;
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
function Av() {
  return {
    localeError: Pv()
  };
}
const Mv = () => {
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
        return n.values.length === 1 ? `Ungültige Eingabe: erwartet ${H(n.values[0])}` : `Ungültige Option: erwartet eine von ${R(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${R(n.keys, ", ")}`;
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
function Rv() {
  return {
    localeError: Mv()
  };
}
const jv = (e) => {
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
}, zv = () => {
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
        return `Invalid input: expected ${o.expected}, received ${jv(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Invalid input: expected ${H(o.values[0])}` : `Invalid option: expected one of ${R(o.values, "|")}`;
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
        return `Unrecognized key${o.keys.length > 1 ? "s" : ""}: ${R(o.keys, ", ")}`;
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
function jd() {
  return {
    localeError: zv()
  };
}
const Uv = (e) => {
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
}, Dv = () => {
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
        return `Nevalida enigo: atendiĝis ${o.expected}, riceviĝis ${Uv(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Nevalida enigo: atendiĝis ${H(o.values[0])}` : `Nevalida opcio: atendiĝis unu el ${R(o.values, "|")}`;
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
        return `Nekonata${o.keys.length > 1 ? "j" : ""} ŝlosilo${o.keys.length > 1 ? "j" : ""}: ${R(o.keys, ", ")}`;
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
function qv() {
  return {
    localeError: Dv()
  };
}
const Zv = () => {
  const e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
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
          return "arreglo";
        if (n === null)
          return "nulo";
        if (Object.getPrototypeOf(n) !== Object.prototype)
          return n.constructor.name;
      }
    }
    return i;
  }, o = {
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
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Entrada inválida: se esperaba ${n.expected}, recibido ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrada inválida: se esperaba ${H(n.values[0])}` : `Opción inválida: se esperaba una de ${R(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Demasiado grande: se esperaba que ${n.origin ?? "valor"} tuviera ${i}${n.maximum.toString()} ${a.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${n.origin ?? "valor"} fuera ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Demasiado pequeño: se esperaba que ${n.origin} tuviera ${i}${n.minimum.toString()} ${a.unit}` : `Demasiado pequeño: se esperaba que ${n.origin} fuera ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Cadena inválida: debe comenzar con "${i.prefix}"` : i.format === "ends_with" ? `Cadena inválida: debe terminar en "${i.suffix}"` : i.format === "includes" ? `Cadena inválida: debe incluir "${i.includes}"` : i.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${i.pattern}` : `Inválido ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Llave${n.keys.length > 1 ? "s" : ""} desconocida${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${n.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${n.origin}`;
      default:
        return "Entrada inválida";
    }
  };
};
function Lv() {
  return {
    localeError: Zv()
  };
}
const Fv = () => {
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
        return n.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${H(n.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${R(n.values, "|")} می‌بود`;
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
        return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${R(n.keys, ", ")}`;
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
function Jv() {
  return {
    localeError: Fv()
  };
}
const Gv = () => {
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
        return n.values.length === 1 ? `Virheellinen syöte: täytyy olla ${H(n.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${R(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${R(n.keys, ", ")}`;
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
function Vv() {
  return {
    localeError: Gv()
  };
}
const Bv = () => {
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
        return n.values.length === 1 ? `Entrée invalide : ${H(n.values[0])} attendu` : `Option invalide : une valeur parmi ${R(n.values, "|")} attendue`;
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
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${R(n.keys, ", ")}`;
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
function Wv() {
  return {
    localeError: Bv()
  };
}
const Hv = () => {
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
        return n.values.length === 1 ? `Entrée invalide : attendu ${H(n.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${R(n.values, "|")}`;
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
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${R(n.keys, ", ")}`;
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
function Kv() {
  return {
    localeError: Hv()
  };
}
const Yv = () => {
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
      case "invalid_value":
        return n.values.length === 1 ? `קלט לא תקין: צריך ${H(n.values[0])}` : `קלט לא תקין: צריך אחת מהאפשרויות  ${R(n.values, "|")}`;
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
        return `מפתח${n.keys.length > 1 ? "ות" : ""} לא מזוה${n.keys.length > 1 ? "ים" : "ה"}: ${R(n.keys, ", ")}`;
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
function Xv() {
  return {
    localeError: Yv()
  };
}
const Qv = () => {
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
      case "invalid_value":
        return n.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${H(n.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${R(n.values, "|")}`;
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
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
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
function ey() {
  return {
    localeError: Qv()
  };
}
const ty = () => {
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
        return n.values.length === 1 ? `Input tidak valid: diharapkan ${H(n.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${R(n.values, "|")}`;
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
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
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
function ny() {
  return {
    localeError: ty()
  };
}
const ry = (e) => {
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
}, oy = () => {
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
        return `Rangt gildi: Þú slóst inn ${ry(o.input)} þar sem á að vera ${o.expected}`;
      case "invalid_value":
        return o.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${H(o.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${R(o.values, "|")}`;
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
        return `Óþekkt ${o.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${R(o.keys, ", ")}`;
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
function iy() {
  return {
    localeError: oy()
  };
}
const ay = () => {
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
      case "invalid_value":
        return n.values.length === 1 ? `Input non valido: atteso ${H(n.values[0])}` : `Opzione non valida: atteso uno tra ${R(n.values, "|")}`;
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
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${R(n.keys, ", ")}`;
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
function sy() {
  return {
    localeError: ay()
  };
}
const uy = () => {
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
        return n.values.length === 1 ? `無効な入力: ${H(n.values[0])}が期待されました` : `無効な選択: ${R(n.values, "、")}のいずれかである必要があります`;
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
        return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${R(n.keys, "、")}`;
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
function ly() {
  return {
    localeError: uy()
  };
}
const cy = () => {
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
        return n.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${H(n.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${R(n.values, "|")}`;
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
        return `រកឃើញសោមិនស្គាល់៖ ${R(n.keys, ", ")}`;
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
function dy() {
  return {
    localeError: cy()
  };
}
const py = () => {
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
        return n.values.length === 1 ? `잘못된 입력: 값은 ${H(n.values[0])} 이어야 합니다` : `잘못된 옵션: ${R(n.values, "또는 ")} 중 하나여야 합니다`;
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
        return `인식할 수 없는 키: ${R(n.keys, ", ")}`;
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
function my() {
  return {
    localeError: py()
  };
}
const fy = () => {
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
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${H(n.values[0])}` : `Грешана опција: се очекува една ${R(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${R(n.keys, ", ")}`;
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
function gy() {
  return {
    localeError: fy()
  };
}
const hy = () => {
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
        return n.values.length === 1 ? `Input tidak sah: dijangka ${H(n.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${R(n.values, "|")}`;
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
        return `Kunci tidak dikenali: ${R(n.keys, ", ")}`;
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
function vy() {
  return {
    localeError: hy()
  };
}
const yy = () => {
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
        return n.values.length === 1 ? `Ongeldige invoer: verwacht ${H(n.values[0])}` : `Ongeldige optie: verwacht één van ${R(n.values, "|")}`;
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
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
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
function _y() {
  return {
    localeError: yy()
  };
}
const by = () => {
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
        return n.values.length === 1 ? `Ugyldig verdi: forventet ${H(n.values[0])}` : `Ugyldig valg: forventet en av ${R(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${R(n.keys, ", ")}`;
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
function wy() {
  return {
    localeError: by()
  };
}
const $y = () => {
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
      case "invalid_value":
        return n.values.length === 1 ? `Fâsit giren: umulan ${H(n.values[0])}` : `Fâsit tercih: mûteberler ${R(n.values, "|")}`;
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
        return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
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
function Iy() {
  return {
    localeError: $y()
  };
}
const ky = () => {
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
        return n.values.length === 1 ? `ناسم ورودي: باید ${H(n.values[0])} وای` : `ناسم انتخاب: باید یو له ${R(n.values, "|")} څخه وای`;
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
        return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${R(n.keys, ", ")}`;
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
function xy() {
  return {
    localeError: ky()
  };
}
const Sy = () => {
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
        return n.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${H(n.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${R(n.values, "|")}`;
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
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
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
function Ty() {
  return {
    localeError: Sy()
  };
}
const Oy = () => {
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
        return n.values.length === 1 ? `Entrada inválida: esperado ${H(n.values[0])}` : `Opção inválida: esperada uma das ${R(n.values, "|")}`;
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
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${R(n.keys, ", ")}`;
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
function Ey() {
  return {
    localeError: Oy()
  };
}
function ps(e, t, r, o) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? o : i === 1 ? t : i >= 2 && i <= 4 ? r : o;
}
const Ny = () => {
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
        return n.values.length === 1 ? `Неверный ввод: ожидалось ${H(n.values[0])}` : `Неверный вариант: ожидалось одно из ${R(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const s = Number(n.maximum), u = ps(s, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${i}${n.maximum.toString()} ${u}`;
        }
        return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const s = Number(n.minimum), u = ps(s, a.unit.one, a.unit.few, a.unit.many);
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
        return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${R(n.keys, ", ")}`;
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
function Cy() {
  return {
    localeError: Ny()
  };
}
const Py = () => {
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
        return n.values.length === 1 ? `Neveljaven vnos: pričakovano ${H(n.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${R(n.values, "|")}`;
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
        return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${R(n.keys, ", ")}`;
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
function Ay() {
  return {
    localeError: Py()
  };
}
const My = () => {
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
        return n.values.length === 1 ? `Ogiltig inmatning: förväntat ${H(n.values[0])}` : `Ogiltigt val: förväntade en av ${R(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${R(n.keys, ", ")}`;
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
function Ry() {
  return {
    localeError: My()
  };
}
const jy = () => {
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
        return n.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${H(n.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${R(n.values, "|")} இல் ஒன்று`;
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
        return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${R(n.keys, ", ")}`;
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
function zy() {
  return {
    localeError: jy()
  };
}
const Uy = () => {
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
        return n.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${H(n.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${R(n.values, "|")}`;
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
        return `พบคีย์ที่ไม่รู้จัก: ${R(n.keys, ", ")}`;
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
function Dy() {
  return {
    localeError: Uy()
  };
}
const qy = (e) => {
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
}, Zy = () => {
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
        return `Geçersiz değer: beklenen ${o.expected}, alınan ${qy(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Geçersiz değer: beklenen ${H(o.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${R(o.values, "|")}`;
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
        return `Tanınmayan anahtar${o.keys.length > 1 ? "lar" : ""}: ${R(o.keys, ", ")}`;
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
function Ly() {
  return {
    localeError: Zy()
  };
}
const Fy = () => {
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
      case "invalid_value":
        return n.values.length === 1 ? `Неправильні вхідні дані: очікується ${H(n.values[0])}` : `Неправильна опція: очікується одне з ${R(n.values, "|")}`;
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
        return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${R(n.keys, ", ")}`;
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
function Jy() {
  return {
    localeError: Fy()
  };
}
const Gy = () => {
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
        return n.values.length === 1 ? `غلط ان پٹ: ${H(n.values[0])} متوقع تھا` : `غلط آپشن: ${R(n.values, "|")} میں سے ایک متوقع تھا`;
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
        return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${R(n.keys, "، ")}`;
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
function Vy() {
  return {
    localeError: Gy()
  };
}
const By = () => {
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
        return n.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${H(n.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${R(n.values, "|")}`;
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
        return `Khóa không được nhận dạng: ${R(n.keys, ", ")}`;
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
function Wy() {
  return {
    localeError: By()
  };
}
const Hy = () => {
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
        return n.values.length === 1 ? `无效输入：期望 ${H(n.values[0])}` : `无效选项：期望以下之一 ${R(n.values, "|")}`;
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
        return `出现未知的键(key): ${R(n.keys, ", ")}`;
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
function Ky() {
  return {
    localeError: Hy()
  };
}
const Yy = () => {
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
        return n.values.length === 1 ? `無效的輸入值：預期為 ${H(n.values[0])}` : `無效的選項：預期為以下其中之一 ${R(n.values, "|")}`;
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
        return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${R(n.keys, "、")}`;
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
function Xy() {
  return {
    localeError: Yy()
  };
}
const Qy = () => {
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
        return n.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${H(n.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${R(n.values, "|")}`;
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
        return `Bọtìnì àìmọ̀: ${R(n.keys, ", ")}`;
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
function e_() {
  return {
    localeError: Qy()
  };
}
const zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Iv,
  az: xv,
  be: Tv,
  ca: Ev,
  cs: Cv,
  da: Av,
  de: Rv,
  en: jd,
  eo: qv,
  es: Lv,
  fa: Jv,
  fi: Vv,
  fr: Wv,
  frCA: Kv,
  he: Xv,
  hu: ey,
  id: ny,
  is: iy,
  it: sy,
  ja: ly,
  kh: dy,
  ko: my,
  mk: gy,
  ms: vy,
  nl: _y,
  no: wy,
  ota: Iy,
  pl: Ty,
  ps: xy,
  pt: Ey,
  ru: Cy,
  sl: Ay,
  sv: Ry,
  ta: zy,
  th: Dy,
  tr: Ly,
  ua: Jy,
  ur: Vy,
  vi: Wy,
  yo: e_,
  zhCN: Ky,
  zhTW: Xy
}, Symbol.toStringTag, { value: "Module" })), Ud = Symbol("ZodOutput"), Dd = Symbol("ZodInput");
class gi {
  constructor() {
    this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
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
    return this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map(), this;
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
function hi() {
  return new gi();
}
const Ft = /* @__PURE__ */ hi();
function qd(e, t) {
  return new e({
    type: "string",
    ...P(t)
  });
}
function Zd(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...P(t)
  });
}
function vi(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function br(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function yi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function _i(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...P(t)
  });
}
function bi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...P(t)
  });
}
function wi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...P(t)
  });
}
function Dr(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function $i(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Ii(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function ki(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function xi(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Si(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Ti(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Oi(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Ei(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Ni(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Ci(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Pi(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Ai(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Mi(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function Ri(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
function ji(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
const Ld = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function Fd(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...P(t)
  });
}
function Jd(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...P(t)
  });
}
function Gd(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...P(t)
  });
}
function Vd(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...P(t)
  });
}
function Bd(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...P(t)
  });
}
function Wd(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...P(t)
  });
}
function Hd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...P(t)
  });
}
function Kd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...P(t)
  });
}
function Yd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...P(t)
  });
}
function Xd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...P(t)
  });
}
function Qd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...P(t)
  });
}
function ep(e, t) {
  return new e({
    type: "boolean",
    ...P(t)
  });
}
function tp(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...P(t)
  });
}
function np(e, t) {
  return new e({
    type: "bigint",
    ...P(t)
  });
}
function rp(e, t) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...P(t)
  });
}
function op(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...P(t)
  });
}
function ip(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...P(t)
  });
}
function ap(e, t) {
  return new e({
    type: "symbol",
    ...P(t)
  });
}
function sp(e, t) {
  return new e({
    type: "undefined",
    ...P(t)
  });
}
function up(e, t) {
  return new e({
    type: "null",
    ...P(t)
  });
}
function lp(e) {
  return new e({
    type: "any"
  });
}
function cp(e) {
  return new e({
    type: "unknown"
  });
}
function dp(e, t) {
  return new e({
    type: "never",
    ...P(t)
  });
}
function pp(e, t) {
  return new e({
    type: "void",
    ...P(t)
  });
}
function mp(e, t) {
  return new e({
    type: "date",
    ...P(t)
  });
}
function fp(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...P(t)
  });
}
function gp(e, t) {
  return new e({
    type: "nan",
    ...P(t)
  });
}
function Bt(e, t) {
  return new ai({
    check: "less_than",
    ...P(t),
    value: e,
    inclusive: !1
  });
}
function gt(e, t) {
  return new ai({
    check: "less_than",
    ...P(t),
    value: e,
    inclusive: !0
  });
}
function Wt(e, t) {
  return new si({
    check: "greater_than",
    ...P(t),
    value: e,
    inclusive: !1
  });
}
function rt(e, t) {
  return new si({
    check: "greater_than",
    ...P(t),
    value: e,
    inclusive: !0
  });
}
function hp(e) {
  return Wt(0, e);
}
function vp(e) {
  return Bt(0, e);
}
function yp(e) {
  return gt(0, e);
}
function _p(e) {
  return rt(0, e);
}
function Nn(e, t) {
  return new ic({
    check: "multiple_of",
    ...P(t),
    value: e
  });
}
function qr(e, t) {
  return new uc({
    check: "max_size",
    ...P(t),
    maximum: e
  });
}
function Cn(e, t) {
  return new lc({
    check: "min_size",
    ...P(t),
    minimum: e
  });
}
function zi(e, t) {
  return new cc({
    check: "size_equals",
    ...P(t),
    size: e
  });
}
function Zr(e, t) {
  return new dc({
    check: "max_length",
    ...P(t),
    maximum: e
  });
}
function cn(e, t) {
  return new pc({
    check: "min_length",
    ...P(t),
    minimum: e
  });
}
function Lr(e, t) {
  return new mc({
    check: "length_equals",
    ...P(t),
    length: e
  });
}
function Ui(e, t) {
  return new fc({
    check: "string_format",
    format: "regex",
    ...P(t),
    pattern: e
  });
}
function Di(e) {
  return new gc({
    check: "string_format",
    format: "lowercase",
    ...P(e)
  });
}
function qi(e) {
  return new hc({
    check: "string_format",
    format: "uppercase",
    ...P(e)
  });
}
function Zi(e, t) {
  return new vc({
    check: "string_format",
    format: "includes",
    ...P(t),
    includes: e
  });
}
function Li(e, t) {
  return new yc({
    check: "string_format",
    format: "starts_with",
    ...P(t),
    prefix: e
  });
}
function Fi(e, t) {
  return new _c({
    check: "string_format",
    format: "ends_with",
    ...P(t),
    suffix: e
  });
}
function bp(e, t, r) {
  return new bc({
    check: "property",
    property: e,
    schema: t,
    ...P(r)
  });
}
function Ji(e, t) {
  return new wc({
    check: "mime_type",
    mime: e,
    ...P(t)
  });
}
function en(e) {
  return new $c({
    check: "overwrite",
    tx: e
  });
}
function Gi(e) {
  return en((t) => t.normalize(e));
}
function Vi() {
  return en((e) => e.trim());
}
function Bi() {
  return en((e) => e.toLowerCase());
}
function Wi() {
  return en((e) => e.toUpperCase());
}
function wp(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...P(r)
  });
}
function t_(e, t, r) {
  return new e({
    type: "union",
    options: t,
    ...P(r)
  });
}
function n_(e, t, r, o) {
  return new e({
    type: "union",
    options: r,
    discriminator: t,
    ...P(o)
  });
}
function r_(e, t, r) {
  return new e({
    type: "intersection",
    left: t,
    right: r
  });
}
function o_(e, t, r, o) {
  const n = r instanceof K, i = n ? o : r, a = n ? r : null;
  return new e({
    type: "tuple",
    items: t,
    rest: a,
    ...P(i)
  });
}
function i_(e, t, r, o) {
  return new e({
    type: "record",
    keyType: t,
    valueType: r,
    ...P(o)
  });
}
function a_(e, t, r, o) {
  return new e({
    type: "map",
    keyType: t,
    valueType: r,
    ...P(o)
  });
}
function s_(e, t, r) {
  return new e({
    type: "set",
    valueType: t,
    ...P(r)
  });
}
function u_(e, t, r) {
  const o = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new e({
    type: "enum",
    entries: o,
    ...P(r)
  });
}
function l_(e, t, r) {
  return new e({
    type: "enum",
    entries: t,
    ...P(r)
  });
}
function c_(e, t, r) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...P(r)
  });
}
function $p(e, t) {
  return new e({
    type: "file",
    ...P(t)
  });
}
function d_(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
function p_(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
function m_(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
function f_(e, t, r) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : jr(r);
    }
  });
}
function g_(e, t, r) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...P(r)
  });
}
function h_(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
function v_(e, t, r) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
function y_(e, t, r) {
  return new e({
    type: "pipe",
    in: t,
    out: r
  });
}
function __(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
function b_(e, t, r) {
  return new e({
    type: "template_literal",
    parts: t,
    ...P(r)
  });
}
function w_(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
function $_(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
function Ip(e, t, r) {
  const o = P(r);
  return o.abort ?? (o.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...o
  });
}
function kp(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...P(r)
  });
}
function xp(e) {
  const t = Sp((r) => (r.addIssue = (o) => {
    if (typeof o == "string")
      r.issues.push(un(o, r.value, t._zod.def));
    else {
      const n = o;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(un(n));
    }
  }, e(r.value, r)));
  return t;
}
function Sp(e, t) {
  const r = new Te({
    check: "custom",
    ...P(t)
  });
  return r._zod.check = e, r;
}
function Tp(e, t) {
  const r = P(t);
  let o = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" && (o = o.map((p) => typeof p == "string" ? p.toLowerCase() : p), n = n.map((p) => typeof p == "string" ? p.toLowerCase() : p));
  const i = new Set(o), a = new Set(n), s = e.Codec ?? fi, u = e.Boolean ?? ci, l = e.String ?? Wn, d = new l({ type: "string", error: r.error }), f = new u({ type: "boolean", error: r.error }), y = new s({
    type: "pipe",
    in: d,
    out: f,
    transform: (p, m) => {
      let _ = p;
      return r.case !== "sensitive" && (_ = _.toLowerCase()), i.has(_) ? !0 : a.has(_) ? !1 : (m.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...i, ...a],
        input: m.value,
        inst: y,
        continue: !1
      }), {});
    },
    reverseTransform: (p, m) => p === !0 ? o[0] || "true" : n[0] || "false",
    error: r.error
  });
  return y;
}
function Hn(e, t, r, o = {}) {
  const n = P(o), i = {
    ...P(o),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof r == "function" ? r : (s) => r.test(s),
    ...n
  };
  return r instanceof RegExp && (i.pattern = r), new e(i);
}
class Mo {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = (t == null ? void 0 : t.metadata) ?? Ft, this.target = (t == null ? void 0 : t.target) ?? "draft-2020-12", this.unrepresentable = (t == null ? void 0 : t.unrepresentable) ?? "throw", this.override = (t == null ? void 0 : t.override) ?? (() => {
    }), this.io = (t == null ? void 0 : t.io) ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(t, r = { path: [], schemaPath: [] }) {
    var f, y, p;
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
    const u = (y = (f = t._zod).toJSONSchema) == null ? void 0 : y.call(f);
    if (u)
      s.schema = u;
    else {
      const m = {
        ...r,
        schemaPath: [...r.schemaPath, t],
        path: r.path
      }, _ = t._zod.parent;
      if (_)
        s.ref = _, this.process(_, m), this.seen.get(_).isParent = !0;
      else {
        const v = s.schema;
        switch (n.type) {
          case "string": {
            const g = v;
            g.type = "string";
            const { minimum: b, maximum: w, format: $, patterns: O, contentEncoding: E } = t._zod.bag;
            if (typeof b == "number" && (g.minLength = b), typeof w == "number" && (g.maxLength = w), $ && (g.format = i[$] ?? $, g.format === "" && delete g.format), E && (g.contentEncoding = E), O && O.size > 0) {
              const I = [...O];
              I.length === 1 ? g.pattern = I[0].source : I.length > 1 && (s.schema.allOf = [
                ...I.map((k) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: k.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const g = v, { minimum: b, maximum: w, format: $, multipleOf: O, exclusiveMaximum: E, exclusiveMinimum: I } = t._zod.bag;
            typeof $ == "string" && $.includes("int") ? g.type = "integer" : g.type = "number", typeof I == "number" && (this.target === "draft-4" ? (g.minimum = I, g.exclusiveMinimum = !0) : g.exclusiveMinimum = I), typeof b == "number" && (g.minimum = b, typeof I == "number" && this.target !== "draft-4" && (I >= b ? delete g.minimum : delete g.exclusiveMinimum)), typeof E == "number" && (this.target === "draft-4" ? (g.maximum = E, g.exclusiveMaximum = !0) : g.exclusiveMaximum = E), typeof w == "number" && (g.maximum = w, typeof E == "number" && this.target !== "draft-4" && (E <= w ? delete g.maximum : delete g.exclusiveMaximum)), typeof O == "number" && (g.multipleOf = O);
            break;
          }
          case "boolean": {
            const g = v;
            g.type = "boolean";
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
            v.type = "null";
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
            const g = v, { minimum: b, maximum: w } = t._zod.bag;
            typeof b == "number" && (g.minItems = b), typeof w == "number" && (g.maxItems = w), g.type = "array", g.items = this.process(n.element, { ...m, path: [...m.path, "items"] });
            break;
          }
          case "object": {
            const g = v;
            g.type = "object", g.properties = {};
            const b = n.shape;
            for (const O in b)
              g.properties[O] = this.process(b[O], {
                ...m,
                path: [...m.path, "properties", O]
              });
            const w = new Set(Object.keys(b)), $ = new Set([...w].filter((O) => {
              const E = n.shape[O]._zod;
              return this.io === "input" ? E.optin === void 0 : E.optout === void 0;
            }));
            $.size > 0 && (g.required = Array.from($)), ((p = n.catchall) == null ? void 0 : p._zod.def.type) === "never" ? g.additionalProperties = !1 : n.catchall ? n.catchall && (g.additionalProperties = this.process(n.catchall, {
              ...m,
              path: [...m.path, "additionalProperties"]
            })) : this.io === "output" && (g.additionalProperties = !1);
            break;
          }
          case "union": {
            const g = v, b = n.options.map((w, $) => this.process(w, {
              ...m,
              path: [...m.path, "anyOf", $]
            }));
            if (this.target === "openapi-3.0") {
              const w = b.filter((O) => O.type !== "null"), $ = w.length !== b.length;
              w.length === 1 ? Object.assign(g, w[0]) : g.anyOf = w, $ && (g.nullable = !0);
            } else
              g.anyOf = b;
            break;
          }
          case "intersection": {
            const g = v, b = this.process(n.left, {
              ...m,
              path: [...m.path, "allOf", 0]
            }), w = this.process(n.right, {
              ...m,
              path: [...m.path, "allOf", 1]
            }), $ = (E) => "allOf" in E && Object.keys(E).length === 1, O = [
              ...$(b) ? b.allOf : [b],
              ...$(w) ? w.allOf : [w]
            ];
            g.allOf = O;
            break;
          }
          case "tuple": {
            const g = v;
            g.type = "array";
            const b = n.items.map((O, E) => this.process(O, { ...m, path: [...m.path, "prefixItems", E] }));
            if (this.target === "draft-2020-12" ? g.prefixItems = b : g.items = b, n.rest) {
              const O = this.process(n.rest, {
                ...m,
                path: [...m.path, "items"]
              });
              this.target === "draft-2020-12" ? g.items = O : g.additionalItems = O;
            }
            n.rest && (g.items = this.process(n.rest, {
              ...m,
              path: [...m.path, "items"]
            }));
            const { minimum: w, maximum: $ } = t._zod.bag;
            typeof w == "number" && (g.minItems = w), typeof $ == "number" && (g.maxItems = $);
            break;
          }
          case "record": {
            const g = v;
            g.type = "object", this.target !== "draft-4" && (g.propertyNames = this.process(n.keyType, {
              ...m,
              path: [...m.path, "propertyNames"]
            })), g.additionalProperties = this.process(n.valueType, {
              ...m,
              path: [...m.path, "additionalProperties"]
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
            const g = v, b = Jo(n.entries);
            b.every((w) => typeof w == "number") && (g.type = "number"), b.every((w) => typeof w == "string") && (g.type = "string"), g.enum = b;
            break;
          }
          case "literal": {
            const g = v, b = [];
            for (const w of n.values)
              if (w === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof w == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                b.push(Number(w));
              } else
                b.push(w);
            if (b.length !== 0) if (b.length === 1) {
              const w = b[0];
              g.type = w === null ? "null" : typeof w, this.target === "draft-4" || this.target === "openapi-3.0" ? g.enum = [w] : g.const = w;
            } else
              b.every((w) => typeof w == "number") && (g.type = "number"), b.every((w) => typeof w == "string") && (g.type = "string"), b.every((w) => typeof w == "boolean") && (g.type = "string"), b.every((w) => w === null) && (g.type = "null"), g.enum = b;
            break;
          }
          case "file": {
            const g = v, b = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: w, maximum: $, mime: O } = t._zod.bag;
            w !== void 0 && (b.minLength = w), $ !== void 0 && (b.maxLength = $), O ? O.length === 1 ? (b.contentMediaType = O[0], Object.assign(g, b)) : g.anyOf = O.map((E) => ({ ...b, contentMediaType: E })) : Object.assign(g, b);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const g = this.process(n.innerType, m);
            this.target === "openapi-3.0" ? (Object.assign(v, g), v.nullable = !0, s.ref = n.innerType) : v.anyOf = [g, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(n.innerType, m), s.ref = n.innerType;
            break;
          }
          case "success": {
            const g = v;
            g.type = "boolean";
            break;
          }
          case "default": {
            this.process(n.innerType, m), s.ref = n.innerType, v.default = JSON.parse(JSON.stringify(n.defaultValue));
            break;
          }
          case "prefault": {
            this.process(n.innerType, m), s.ref = n.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
            break;
          }
          case "catch": {
            this.process(n.innerType, m), s.ref = n.innerType;
            let g;
            try {
              g = n.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = g;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const g = v, b = t._zod.pattern;
            if (!b)
              throw new Error("Pattern not found in template literal");
            g.type = "string", g.pattern = b.source;
            break;
          }
          case "pipe": {
            const g = this.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
            this.process(g, m), s.ref = g;
            break;
          }
          case "readonly": {
            this.process(n.innerType, m), s.ref = n.innerType, v.readOnly = !0;
            break;
          }
          case "promise": {
            this.process(n.innerType, m), s.ref = n.innerType;
            break;
          }
          case "optional": {
            this.process(n.innerType, m), s.ref = n.innerType;
            break;
          }
          case "lazy": {
            const g = t._zod.innerType;
            this.process(g, m), s.ref = g;
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
    return l && Object.assign(s.schema, l), this.io === "input" && Ce(t) && (delete s.schema.examples, delete s.schema.default), this.io === "input" && s.schema._prefault && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, this.seen.get(t).schema;
  }
  emit(t, r) {
    var d, f, y, p, m, _;
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
      var O;
      const g = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (o.external) {
        const E = (O = o.external.registry.get(v[0])) == null ? void 0 : O.id, I = o.external.uri ?? ((M) => M);
        if (E)
          return { ref: I(E) };
        const k = v[1].defId ?? v[1].schema.id ?? `schema${this.counter++}`;
        return v[1].defId = k, { defId: k, ref: `${I("__shared")}#/${g}/${k}` };
      }
      if (v[1] === n)
        return { ref: "#" };
      const w = `#/${g}/`, $ = v[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: $, ref: w + $ };
    }, a = (v) => {
      if (v[1].schema.$ref)
        return;
      const g = v[1], { ref: b, defId: w } = i(v);
      g.def = { ...g.schema }, w && (g.defId = w);
      const $ = g.schema;
      for (const O in $)
        delete $[O];
      $.$ref = b;
    };
    if (o.cycles === "throw")
      for (const v of this.seen.entries()) {
        const g = v[1];
        if (g.cycle)
          throw new Error(`Cycle detected: #/${(d = g.cycle) == null ? void 0 : d.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const v of this.seen.entries()) {
      const g = v[1];
      if (t === v[0]) {
        a(v);
        continue;
      }
      if (o.external) {
        const w = (f = o.external.registry.get(v[0])) == null ? void 0 : f.id;
        if (t !== v[0] && w) {
          a(v);
          continue;
        }
      }
      if ((y = this.metadataRegistry.get(v[0])) == null ? void 0 : y.id) {
        a(v);
        continue;
      }
      if (g.cycle) {
        a(v);
        continue;
      }
      if (g.count > 1 && o.reused === "ref") {
        a(v);
        continue;
      }
    }
    const s = (v, g) => {
      const b = this.seen.get(v), w = b.def ?? b.schema, $ = { ...w };
      if (b.ref === null)
        return;
      const O = b.ref;
      if (b.ref = null, O) {
        s(O, g);
        const E = this.seen.get(O).schema;
        E.$ref && (g.target === "draft-7" || g.target === "draft-4" || g.target === "openapi-3.0") ? (w.allOf = w.allOf ?? [], w.allOf.push(E)) : (Object.assign(w, E), Object.assign(w, $));
      }
      b.isParent || this.override({
        zodSchema: v,
        jsonSchema: w,
        path: b.path ?? []
      });
    };
    for (const v of [...this.seen.entries()].reverse())
      s(v[0], { target: this.target });
    const u = {};
    if (this.target === "draft-2020-12" ? u.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? u.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? u.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), (p = o.external) != null && p.uri) {
      const v = (m = o.external.registry.get(t)) == null ? void 0 : m.id;
      if (!v)
        throw new Error("Schema is missing an `id` property");
      u.$id = o.external.uri(v);
    }
    Object.assign(u, n.def);
    const l = ((_ = o.external) == null ? void 0 : _.defs) ?? {};
    for (const v of this.seen.entries()) {
      const g = v[1];
      g.def && g.defId && (l[g.defId] = g.def);
    }
    o.external || Object.keys(l).length > 0 && (this.target === "draft-2020-12" ? u.$defs = l : u.definitions = l);
    try {
      return JSON.parse(JSON.stringify(u));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Hi(e, t) {
  if (e instanceof gi) {
    const o = new Mo(t), n = {};
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
  const r = new Mo(t);
  return r.process(e), r.emit(e, t);
}
function Ce(e, t) {
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
      return Ce(n.element, r);
    case "object": {
      for (const i in n.shape)
        if (Ce(n.shape[i], r))
          return !0;
      return !1;
    }
    case "union": {
      for (const i of n.options)
        if (Ce(i, r))
          return !0;
      return !1;
    }
    case "intersection":
      return Ce(n.left, r) || Ce(n.right, r);
    case "tuple": {
      for (const i of n.items)
        if (Ce(i, r))
          return !0;
      return !!(n.rest && Ce(n.rest, r));
    }
    case "record":
      return Ce(n.keyType, r) || Ce(n.valueType, r);
    case "map":
      return Ce(n.keyType, r) || Ce(n.valueType, r);
    case "set":
      return Ce(n.valueType, r);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Ce(n.innerType, r);
    case "lazy":
      return Ce(n.getter(), r);
    case "default":
      return Ce(n.innerType, r);
    case "prefault":
      return Ce(n.innerType, r);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Ce(n.in, r) || Ce(n.out, r);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${n.type}`);
}
const I_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), k_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $ZodAny: nd,
  $ZodArray: sd,
  $ZodAsyncError: Gt,
  $ZodBase64: Jc,
  $ZodBase64URL: Vc,
  $ZodBigInt: di,
  $ZodBigIntFormat: Xc,
  $ZodBoolean: ci,
  $ZodCIDRv4: Lc,
  $ZodCIDRv6: Fc,
  $ZodCUID: Cc,
  $ZodCUID2: Pc,
  $ZodCatch: Td,
  $ZodCheck: Te,
  $ZodCheckBigIntFormat: sc,
  $ZodCheckEndsWith: _c,
  $ZodCheckGreaterThan: si,
  $ZodCheckIncludes: vc,
  $ZodCheckLengthEquals: mc,
  $ZodCheckLessThan: ai,
  $ZodCheckLowerCase: gc,
  $ZodCheckMaxLength: dc,
  $ZodCheckMaxSize: uc,
  $ZodCheckMimeType: wc,
  $ZodCheckMinLength: pc,
  $ZodCheckMinSize: lc,
  $ZodCheckMultipleOf: ic,
  $ZodCheckNumberFormat: ac,
  $ZodCheckOverwrite: $c,
  $ZodCheckProperty: bc,
  $ZodCheckRegex: fc,
  $ZodCheckSizeEquals: cc,
  $ZodCheckStartsWith: yc,
  $ZodCheckStringFormat: Bn,
  $ZodCheckUpperCase: hc,
  $ZodCodec: fi,
  $ZodCustom: Rd,
  $ZodCustomStringFormat: Kc,
  $ZodDate: ad,
  $ZodDefault: Id,
  $ZodDiscriminatedUnion: pd,
  $ZodE164: Bc,
  $ZodEmail: Tc,
  $ZodEmoji: Ec,
  $ZodEncodeError: Ar,
  $ZodEnum: vd,
  $ZodError: Vo,
  $ZodFile: _d,
  $ZodFunction: Pd,
  $ZodGUID: xc,
  $ZodIPv4: qc,
  $ZodIPv6: Zc,
  $ZodISODate: zc,
  $ZodISODateTime: jc,
  $ZodISODuration: Dc,
  $ZodISOTime: Uc,
  $ZodIntersection: md,
  $ZodJWT: Hc,
  $ZodKSUID: Rc,
  $ZodLazy: Md,
  $ZodLiteral: yd,
  $ZodMap: gd,
  $ZodNaN: Od,
  $ZodNanoID: Nc,
  $ZodNever: od,
  $ZodNonOptional: xd,
  $ZodNull: td,
  $ZodNullable: $d,
  $ZodNumber: li,
  $ZodNumberFormat: Yc,
  $ZodObject: cd,
  $ZodObjectJIT: dd,
  $ZodOptional: wd,
  $ZodPipe: Ed,
  $ZodPrefault: kd,
  $ZodPromise: Ad,
  $ZodReadonly: Nd,
  $ZodRealError: it,
  $ZodRecord: fd,
  $ZodRegistry: gi,
  $ZodSet: hd,
  $ZodString: Wn,
  $ZodStringFormat: ve,
  $ZodSuccess: Sd,
  $ZodSymbol: Qc,
  $ZodTemplateLiteral: Cd,
  $ZodTransform: bd,
  $ZodTuple: mi,
  $ZodType: K,
  $ZodULID: Ac,
  $ZodURL: Oc,
  $ZodUUID: Sc,
  $ZodUndefined: ed,
  $ZodUnion: pi,
  $ZodUnknown: rd,
  $ZodVoid: id,
  $ZodXID: Mc,
  $brand: ol,
  $constructor: S,
  $input: Dd,
  $output: Ud,
  Doc: Ic,
  JSONSchema: I_,
  JSONSchemaGenerator: Mo,
  NEVER: rl,
  TimePrecision: Ld,
  _any: lp,
  _array: wp,
  _base64: Ai,
  _base64url: Mi,
  _bigint: np,
  _boolean: ep,
  _catch: v_,
  _check: Sp,
  _cidrv4: Ci,
  _cidrv6: Pi,
  _coercedBigint: rp,
  _coercedBoolean: tp,
  _coercedDate: fp,
  _coercedNumber: Wd,
  _coercedString: Zd,
  _cuid: ki,
  _cuid2: xi,
  _custom: Ip,
  _date: mp,
  _decode: Ko,
  _decodeAsync: Xo,
  _default: f_,
  _discriminatedUnion: n_,
  _e164: Ri,
  _email: vi,
  _emoji: $i,
  _encode: Ho,
  _encodeAsync: Yo,
  _endsWith: Fi,
  _enum: u_,
  _file: $p,
  _float32: Kd,
  _float64: Yd,
  _gt: Wt,
  _gte: rt,
  _guid: br,
  _includes: Zi,
  _int: Hd,
  _int32: Xd,
  _int64: op,
  _intersection: r_,
  _ipv4: Ei,
  _ipv6: Ni,
  _isoDate: Jd,
  _isoDateTime: Fd,
  _isoDuration: Vd,
  _isoTime: Gd,
  _jwt: ji,
  _ksuid: Oi,
  _lazy: w_,
  _length: Lr,
  _literal: c_,
  _lowercase: Di,
  _lt: Bt,
  _lte: gt,
  _map: a_,
  _max: gt,
  _maxLength: Zr,
  _maxSize: qr,
  _mime: Ji,
  _min: rt,
  _minLength: cn,
  _minSize: Cn,
  _multipleOf: Nn,
  _nan: gp,
  _nanoid: Ii,
  _nativeEnum: l_,
  _negative: vp,
  _never: dp,
  _nonnegative: _p,
  _nonoptional: g_,
  _nonpositive: yp,
  _normalize: Gi,
  _null: up,
  _nullable: m_,
  _number: Bd,
  _optional: p_,
  _overwrite: en,
  _parse: Zn,
  _parseAsync: Ln,
  _pipe: y_,
  _positive: hp,
  _promise: $_,
  _property: bp,
  _readonly: __,
  _record: i_,
  _refine: kp,
  _regex: Ui,
  _safeDecode: ei,
  _safeDecodeAsync: ni,
  _safeEncode: Qo,
  _safeEncodeAsync: ti,
  _safeParse: Fn,
  _safeParseAsync: Jn,
  _set: s_,
  _size: zi,
  _startsWith: Li,
  _string: qd,
  _stringFormat: Hn,
  _stringbool: Tp,
  _success: h_,
  _superRefine: xp,
  _symbol: ap,
  _templateLiteral: b_,
  _toLowerCase: Bi,
  _toUpperCase: Wi,
  _transform: d_,
  _trim: Vi,
  _tuple: o_,
  _uint32: Qd,
  _uint64: ip,
  _ulid: Si,
  _undefined: sp,
  _union: t_,
  _unknown: cp,
  _uppercase: qi,
  _url: Dr,
  _uuid: yi,
  _uuidv4: _i,
  _uuidv6: bi,
  _uuidv7: wi,
  _void: pp,
  _xid: Ti,
  clone: st,
  config: Ye,
  decode: Jh,
  decodeAsync: Vh,
  encode: Fh,
  encodeAsync: Gh,
  flattenError: Bo,
  formatError: Wo,
  globalConfig: hr,
  globalRegistry: Ft,
  isValidBase64: ui,
  isValidBase64URL: Gc,
  isValidJWT: Wc,
  locales: zd,
  parse: Co,
  parseAsync: Po,
  prettifyError: Il,
  regexes: ii,
  registry: hi,
  safeDecode: Wh,
  safeDecodeAsync: Kh,
  safeEncode: Bh,
  safeEncodeAsync: Hh,
  safeParse: kl,
  safeParseAsync: xl,
  toDotPath: $l,
  toJSONSchema: Hi,
  treeifyError: wl,
  util: Lh,
  version: kc
}, Symbol.toStringTag, { value: "Module" })), Ki = /* @__PURE__ */ S("ZodISODateTime", (e, t) => {
  jc.init(e, t), $e.init(e, t);
});
function Op(e) {
  return Fd(Ki, e);
}
const Yi = /* @__PURE__ */ S("ZodISODate", (e, t) => {
  zc.init(e, t), $e.init(e, t);
});
function Ep(e) {
  return Jd(Yi, e);
}
const Xi = /* @__PURE__ */ S("ZodISOTime", (e, t) => {
  Uc.init(e, t), $e.init(e, t);
});
function Np(e) {
  return Gd(Xi, e);
}
const Qi = /* @__PURE__ */ S("ZodISODuration", (e, t) => {
  Dc.init(e, t), $e.init(e, t);
});
function Cp(e) {
  return Vd(Qi, e);
}
const x_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZodISODate: Yi,
  ZodISODateTime: Ki,
  ZodISODuration: Qi,
  ZodISOTime: Xi,
  date: Ep,
  datetime: Op,
  duration: Cp,
  time: Np
}, Symbol.toStringTag, { value: "Module" })), Pp = (e, t) => {
  Vo.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Wo(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => Bo(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, vr, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, vr, 2);
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
}, S_ = S("ZodError", Pp), at = S("ZodError", Pp, {
  Parent: Error
}), Ap = /* @__PURE__ */ Zn(at), Mp = /* @__PURE__ */ Ln(at), Rp = /* @__PURE__ */ Fn(at), ea = /* @__PURE__ */ Jn(at), jp = /* @__PURE__ */ Ho(at), zp = /* @__PURE__ */ Ko(at), Up = /* @__PURE__ */ Yo(at), Dp = /* @__PURE__ */ Xo(at), qp = /* @__PURE__ */ Qo(at), Zp = /* @__PURE__ */ ei(at), Lp = /* @__PURE__ */ ti(at), Fp = /* @__PURE__ */ ni(at), Q = /* @__PURE__ */ S("ZodType", (e, t) => (K.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(
  {
    ...t,
    checks: [
      ...t.checks ?? [],
      ...r.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
    ]
  }
  // { parent: true }
), e.clone = (r, o) => st(e, r, o), e.brand = () => e, e.register = (r, o) => (r.add(e, o), e), e.parse = (r, o) => Ap(e, r, o, { callee: e.parse }), e.safeParse = (r, o) => Rp(e, r, o), e.parseAsync = async (r, o) => Mp(e, r, o, { callee: e.parseAsync }), e.safeParseAsync = async (r, o) => ea(e, r, o), e.spa = e.safeParseAsync, e.encode = (r, o) => jp(e, r, o), e.decode = (r, o) => zp(e, r, o), e.encodeAsync = async (r, o) => Up(e, r, o), e.decodeAsync = async (r, o) => Dp(e, r, o), e.safeEncode = (r, o) => qp(e, r, o), e.safeDecode = (r, o) => Zp(e, r, o), e.safeEncodeAsync = async (r, o) => Lp(e, r, o), e.safeDecodeAsync = async (r, o) => Fp(e, r, o), e.refine = (r, o) => e.check(km(r, o)), e.superRefine = (r) => e.check(xm(r)), e.overwrite = (r) => e.check(en(r)), e.optional = () => xe(e), e.nullable = () => Ir(e), e.nullish = () => xe(Ir(e)), e.nonoptional = (r) => pm(e, r), e.array = () => A(e), e.or = (r) => X([e, r]), e.and = (r) => em(e, r), e.transform = (r) => kr(e, ka(r)), e.default = (r) => lm(e, r), e.prefault = (r) => dm(e, r), e.catch = (r) => gm(e, r), e.pipe = (r) => kr(e, r), e.readonly = () => ym(e), e.describe = (r) => {
  const o = e.clone();
  return Ft.add(o, { description: r }), o;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = Ft.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Ft.get(e);
  const o = e.clone();
  return Ft.add(o, r[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), ta = /* @__PURE__ */ S("_ZodString", (e, t) => {
  Wn.init(e, t), Q.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...o) => e.check(Ui(...o)), e.includes = (...o) => e.check(Zi(...o)), e.startsWith = (...o) => e.check(Li(...o)), e.endsWith = (...o) => e.check(Fi(...o)), e.min = (...o) => e.check(cn(...o)), e.max = (...o) => e.check(Zr(...o)), e.length = (...o) => e.check(Lr(...o)), e.nonempty = (...o) => e.check(cn(1, ...o)), e.lowercase = (o) => e.check(Di(o)), e.uppercase = (o) => e.check(qi(o)), e.trim = () => e.check(Vi()), e.normalize = (...o) => e.check(Gi(...o)), e.toLowerCase = () => e.check(Bi()), e.toUpperCase = () => e.check(Wi());
}), Fr = /* @__PURE__ */ S("ZodString", (e, t) => {
  Wn.init(e, t), ta.init(e, t), e.email = (r) => e.check(vi(na, r)), e.url = (r) => e.check(Dr(Jr, r)), e.jwt = (r) => e.check(ji(ya, r)), e.emoji = (r) => e.check($i(ra, r)), e.guid = (r) => e.check(br(wr, r)), e.uuid = (r) => e.check(yi(Tt, r)), e.uuidv4 = (r) => e.check(_i(Tt, r)), e.uuidv6 = (r) => e.check(bi(Tt, r)), e.uuidv7 = (r) => e.check(wi(Tt, r)), e.nanoid = (r) => e.check(Ii(oa, r)), e.guid = (r) => e.check(br(wr, r)), e.cuid = (r) => e.check(ki(ia, r)), e.cuid2 = (r) => e.check(xi(aa, r)), e.ulid = (r) => e.check(Si(sa, r)), e.base64 = (r) => e.check(Ai(fa, r)), e.base64url = (r) => e.check(Mi(ha, r)), e.xid = (r) => e.check(Ti(ua, r)), e.ksuid = (r) => e.check(Oi(la, r)), e.ipv4 = (r) => e.check(Ei(ca, r)), e.ipv6 = (r) => e.check(Ni(da, r)), e.cidrv4 = (r) => e.check(Ci(pa, r)), e.cidrv6 = (r) => e.check(Pi(ma, r)), e.e164 = (r) => e.check(Ri(va, r)), e.datetime = (r) => e.check(Op(r)), e.date = (r) => e.check(Ep(r)), e.time = (r) => e.check(Np(r)), e.duration = (r) => e.check(Cp(r));
});
function c(e) {
  return qd(Fr, e);
}
const $e = /* @__PURE__ */ S("ZodStringFormat", (e, t) => {
  ve.init(e, t), ta.init(e, t);
}), na = /* @__PURE__ */ S("ZodEmail", (e, t) => {
  Tc.init(e, t), $e.init(e, t);
});
function T_(e) {
  return vi(na, e);
}
const wr = /* @__PURE__ */ S("ZodGUID", (e, t) => {
  xc.init(e, t), $e.init(e, t);
});
function O_(e) {
  return br(wr, e);
}
const Tt = /* @__PURE__ */ S("ZodUUID", (e, t) => {
  Sc.init(e, t), $e.init(e, t);
});
function E_(e) {
  return yi(Tt, e);
}
function N_(e) {
  return _i(Tt, e);
}
function C_(e) {
  return bi(Tt, e);
}
function P_(e) {
  return wi(Tt, e);
}
const Jr = /* @__PURE__ */ S("ZodURL", (e, t) => {
  Oc.init(e, t), $e.init(e, t);
});
function A_(e) {
  return Dr(Jr, e);
}
function M_(e) {
  return Dr(Jr, {
    protocol: /^https?$/,
    hostname: Zl,
    ...P(e)
  });
}
const ra = /* @__PURE__ */ S("ZodEmoji", (e, t) => {
  Ec.init(e, t), $e.init(e, t);
});
function R_(e) {
  return $i(ra, e);
}
const oa = /* @__PURE__ */ S("ZodNanoID", (e, t) => {
  Nc.init(e, t), $e.init(e, t);
});
function j_(e) {
  return Ii(oa, e);
}
const ia = /* @__PURE__ */ S("ZodCUID", (e, t) => {
  Cc.init(e, t), $e.init(e, t);
});
function z_(e) {
  return ki(ia, e);
}
const aa = /* @__PURE__ */ S("ZodCUID2", (e, t) => {
  Pc.init(e, t), $e.init(e, t);
});
function U_(e) {
  return xi(aa, e);
}
const sa = /* @__PURE__ */ S("ZodULID", (e, t) => {
  Ac.init(e, t), $e.init(e, t);
});
function D_(e) {
  return Si(sa, e);
}
const ua = /* @__PURE__ */ S("ZodXID", (e, t) => {
  Mc.init(e, t), $e.init(e, t);
});
function q_(e) {
  return Ti(ua, e);
}
const la = /* @__PURE__ */ S("ZodKSUID", (e, t) => {
  Rc.init(e, t), $e.init(e, t);
});
function Z_(e) {
  return Oi(la, e);
}
const ca = /* @__PURE__ */ S("ZodIPv4", (e, t) => {
  qc.init(e, t), $e.init(e, t);
});
function L_(e) {
  return Ei(ca, e);
}
const da = /* @__PURE__ */ S("ZodIPv6", (e, t) => {
  Zc.init(e, t), $e.init(e, t);
});
function F_(e) {
  return Ni(da, e);
}
const pa = /* @__PURE__ */ S("ZodCIDRv4", (e, t) => {
  Lc.init(e, t), $e.init(e, t);
});
function J_(e) {
  return Ci(pa, e);
}
const ma = /* @__PURE__ */ S("ZodCIDRv6", (e, t) => {
  Fc.init(e, t), $e.init(e, t);
});
function G_(e) {
  return Pi(ma, e);
}
const fa = /* @__PURE__ */ S("ZodBase64", (e, t) => {
  Jc.init(e, t), $e.init(e, t);
});
function ga(e) {
  return Ai(fa, e);
}
const ha = /* @__PURE__ */ S("ZodBase64URL", (e, t) => {
  Vc.init(e, t), $e.init(e, t);
});
function V_(e) {
  return Mi(ha, e);
}
const va = /* @__PURE__ */ S("ZodE164", (e, t) => {
  Bc.init(e, t), $e.init(e, t);
});
function B_(e) {
  return Ri(va, e);
}
const ya = /* @__PURE__ */ S("ZodJWT", (e, t) => {
  Hc.init(e, t), $e.init(e, t);
});
function W_(e) {
  return ji(ya, e);
}
const Kn = /* @__PURE__ */ S("ZodCustomStringFormat", (e, t) => {
  Kc.init(e, t), $e.init(e, t);
});
function H_(e, t, r = {}) {
  return Hn(Kn, e, t, r);
}
function K_(e) {
  return Hn(Kn, "hostname", oi, e);
}
function Y_(e) {
  return Hn(Kn, "hex", rc, e);
}
function X_(e, t) {
  const r = (t == null ? void 0 : t.enc) ?? "hex", o = `${e}_${r}`, n = ii[o];
  if (!n)
    throw new Error(`Unrecognized hash format: ${o}`);
  return Hn(Kn, o, n, t);
}
const Gr = /* @__PURE__ */ S("ZodNumber", (e, t) => {
  li.init(e, t), Q.init(e, t), e.gt = (o, n) => e.check(Wt(o, n)), e.gte = (o, n) => e.check(rt(o, n)), e.min = (o, n) => e.check(rt(o, n)), e.lt = (o, n) => e.check(Bt(o, n)), e.lte = (o, n) => e.check(gt(o, n)), e.max = (o, n) => e.check(gt(o, n)), e.int = (o) => e.check(Ro(o)), e.safe = (o) => e.check(Ro(o)), e.positive = (o) => e.check(Wt(0, o)), e.nonnegative = (o) => e.check(rt(0, o)), e.negative = (o) => e.check(Bt(0, o)), e.nonpositive = (o) => e.check(gt(0, o)), e.multipleOf = (o, n) => e.check(Nn(o, n)), e.step = (o, n) => e.check(Nn(o, n)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function T(e) {
  return Bd(Gr, e);
}
const fn = /* @__PURE__ */ S("ZodNumberFormat", (e, t) => {
  Yc.init(e, t), Gr.init(e, t);
});
function Ro(e) {
  return Hd(fn, e);
}
function Q_(e) {
  return Kd(fn, e);
}
function eb(e) {
  return Yd(fn, e);
}
function tb(e) {
  return Xd(fn, e);
}
function nb(e) {
  return Qd(fn, e);
}
const Vr = /* @__PURE__ */ S("ZodBoolean", (e, t) => {
  ci.init(e, t), Q.init(e, t);
});
function W(e) {
  return ep(Vr, e);
}
const Br = /* @__PURE__ */ S("ZodBigInt", (e, t) => {
  di.init(e, t), Q.init(e, t), e.gte = (o, n) => e.check(rt(o, n)), e.min = (o, n) => e.check(rt(o, n)), e.gt = (o, n) => e.check(Wt(o, n)), e.gte = (o, n) => e.check(rt(o, n)), e.min = (o, n) => e.check(rt(o, n)), e.lt = (o, n) => e.check(Bt(o, n)), e.lte = (o, n) => e.check(gt(o, n)), e.max = (o, n) => e.check(gt(o, n)), e.positive = (o) => e.check(Wt(BigInt(0), o)), e.negative = (o) => e.check(Bt(BigInt(0), o)), e.nonpositive = (o) => e.check(gt(BigInt(0), o)), e.nonnegative = (o) => e.check(rt(BigInt(0), o)), e.multipleOf = (o, n) => e.check(Nn(o, n));
  const r = e._zod.bag;
  e.minValue = r.minimum ?? null, e.maxValue = r.maximum ?? null, e.format = r.format ?? null;
});
function rb(e) {
  return np(Br, e);
}
const _a = /* @__PURE__ */ S("ZodBigIntFormat", (e, t) => {
  Xc.init(e, t), Br.init(e, t);
});
function ob(e) {
  return op(_a, e);
}
function ib(e) {
  return ip(_a, e);
}
const Jp = /* @__PURE__ */ S("ZodSymbol", (e, t) => {
  Qc.init(e, t), Q.init(e, t);
});
function ab(e) {
  return ap(Jp, e);
}
const Gp = /* @__PURE__ */ S("ZodUndefined", (e, t) => {
  ed.init(e, t), Q.init(e, t);
});
function sb(e) {
  return sp(Gp, e);
}
const Vp = /* @__PURE__ */ S("ZodNull", (e, t) => {
  td.init(e, t), Q.init(e, t);
});
function ba(e) {
  return up(Vp, e);
}
const Bp = /* @__PURE__ */ S("ZodAny", (e, t) => {
  nd.init(e, t), Q.init(e, t);
});
function $t() {
  return lp(Bp);
}
const Wp = /* @__PURE__ */ S("ZodUnknown", (e, t) => {
  rd.init(e, t), Q.init(e, t);
});
function re() {
  return cp(Wp);
}
const Hp = /* @__PURE__ */ S("ZodNever", (e, t) => {
  od.init(e, t), Q.init(e, t);
});
function We(e) {
  return dp(Hp, e);
}
const Kp = /* @__PURE__ */ S("ZodVoid", (e, t) => {
  id.init(e, t), Q.init(e, t);
});
function ub(e) {
  return pp(Kp, e);
}
const wa = /* @__PURE__ */ S("ZodDate", (e, t) => {
  ad.init(e, t), Q.init(e, t), e.min = (o, n) => e.check(rt(o, n)), e.max = (o, n) => e.check(gt(o, n));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
function lb(e) {
  return mp(wa, e);
}
const Yp = /* @__PURE__ */ S("ZodArray", (e, t) => {
  sd.init(e, t), Q.init(e, t), e.element = t.element, e.min = (r, o) => e.check(cn(r, o)), e.nonempty = (r) => e.check(cn(1, r)), e.max = (r, o) => e.check(Zr(r, o)), e.length = (r, o) => e.check(Lr(r, o)), e.unwrap = () => e.element;
});
function A(e, t) {
  return wp(Yp, e, t);
}
function cb(e) {
  const t = e._zod.def.shape;
  return ne(Object.keys(t));
}
const Wr = /* @__PURE__ */ S("ZodObject", (e, t) => {
  dd.init(e, t), Q.init(e, t), ee(e, "shape", () => t.shape), e.keyof = () => ne(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: re() }), e.loose = () => e.clone({ ...e._zod.def, catchall: re() }), e.strict = () => e.clone({ ...e._zod.def, catchall: We() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => ml(e, r), e.safeExtend = (r) => fl(e, r), e.merge = (r) => gl(e, r), e.pick = (r) => dl(e, r), e.omit = (r) => pl(e, r), e.partial = (...r) => hl(xa, e, r[0]), e.required = (...r) => vl(Sa, e, r[0]);
});
function h(e, t) {
  const r = {
    type: "object",
    get shape() {
      return vt(this, "shape", e ? Rr(e) : {}), this.shape;
    },
    ...P(t)
  };
  return new Wr(r);
}
function he(e, t) {
  return new Wr({
    type: "object",
    get shape() {
      return vt(this, "shape", Rr(e)), this.shape;
    },
    catchall: We(),
    ...P(t)
  });
}
function Ot(e, t) {
  return new Wr({
    type: "object",
    get shape() {
      return vt(this, "shape", Rr(e)), this.shape;
    },
    catchall: re(),
    ...P(t)
  });
}
const $a = /* @__PURE__ */ S("ZodUnion", (e, t) => {
  pi.init(e, t), Q.init(e, t), e.options = t.options;
});
function X(e, t) {
  return new $a({
    type: "union",
    options: e,
    ...P(t)
  });
}
const Xp = /* @__PURE__ */ S("ZodDiscriminatedUnion", (e, t) => {
  $a.init(e, t), pd.init(e, t);
});
function Le(e, t, r) {
  return new Xp({
    type: "union",
    options: t,
    discriminator: e,
    ...P(r)
  });
}
const Qp = /* @__PURE__ */ S("ZodIntersection", (e, t) => {
  md.init(e, t), Q.init(e, t);
});
function em(e, t) {
  return new Qp({
    type: "intersection",
    left: e,
    right: t
  });
}
const tm = /* @__PURE__ */ S("ZodTuple", (e, t) => {
  mi.init(e, t), Q.init(e, t), e.rest = (r) => e.clone({
    ...e._zod.def,
    rest: r
  });
});
function $r(e, t, r) {
  const o = t instanceof K, n = o ? r : t, i = o ? t : null;
  return new tm({
    type: "tuple",
    items: e,
    rest: i,
    ...P(n)
  });
}
const Ia = /* @__PURE__ */ S("ZodRecord", (e, t) => {
  fd.init(e, t), Q.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Fe(e, t, r) {
  return new Ia({
    type: "record",
    keyType: e,
    valueType: t,
    ...P(r)
  });
}
function db(e, t, r) {
  const o = st(e);
  return o._zod.values = void 0, new Ia({
    type: "record",
    keyType: o,
    valueType: t,
    ...P(r)
  });
}
const nm = /* @__PURE__ */ S("ZodMap", (e, t) => {
  gd.init(e, t), Q.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function pb(e, t, r) {
  return new nm({
    type: "map",
    keyType: e,
    valueType: t,
    ...P(r)
  });
}
const rm = /* @__PURE__ */ S("ZodSet", (e, t) => {
  hd.init(e, t), Q.init(e, t), e.min = (...r) => e.check(Cn(...r)), e.nonempty = (r) => e.check(Cn(1, r)), e.max = (...r) => e.check(qr(...r)), e.size = (...r) => e.check(zi(...r));
});
function mb(e, t) {
  return new rm({
    type: "set",
    valueType: e,
    ...P(t)
  });
}
const Pn = /* @__PURE__ */ S("ZodEnum", (e, t) => {
  vd.init(e, t), Q.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (o, n) => {
    const i = {};
    for (const a of o)
      if (r.has(a))
        i[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Pn({
      ...t,
      checks: [],
      ...P(n),
      entries: i
    });
  }, e.exclude = (o, n) => {
    const i = { ...t.entries };
    for (const a of o)
      if (r.has(a))
        delete i[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Pn({
      ...t,
      checks: [],
      ...P(n),
      entries: i
    });
  };
});
function ne(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Pn({
    type: "enum",
    entries: r,
    ...P(t)
  });
}
function fb(e, t) {
  return new Pn({
    type: "enum",
    entries: e,
    ...P(t)
  });
}
const om = /* @__PURE__ */ S("ZodLiteral", (e, t) => {
  yd.init(e, t), Q.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function x(e, t) {
  return new om({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...P(t)
  });
}
const im = /* @__PURE__ */ S("ZodFile", (e, t) => {
  _d.init(e, t), Q.init(e, t), e.min = (r, o) => e.check(Cn(r, o)), e.max = (r, o) => e.check(qr(r, o)), e.mime = (r, o) => e.check(Ji(Array.isArray(r) ? r : [r], o));
});
function gb(e) {
  return $p(im, e);
}
const am = /* @__PURE__ */ S("ZodTransform", (e, t) => {
  bd.init(e, t), Q.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Ar(e.constructor.name);
    r.addIssue = (i) => {
      if (typeof i == "string")
        r.issues.push(un(i, r.value, t));
      else {
        const a = i;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(un(a));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((i) => (r.value = i, r)) : (r.value = n, r);
  };
});
function ka(e) {
  return new am({
    type: "transform",
    transform: e
  });
}
const xa = /* @__PURE__ */ S("ZodOptional", (e, t) => {
  wd.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function xe(e) {
  return new xa({
    type: "optional",
    innerType: e
  });
}
const sm = /* @__PURE__ */ S("ZodNullable", (e, t) => {
  $d.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ir(e) {
  return new sm({
    type: "nullable",
    innerType: e
  });
}
function hb(e) {
  return xe(Ir(e));
}
const um = /* @__PURE__ */ S("ZodDefault", (e, t) => {
  Id.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function lm(e, t) {
  return new um({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : jr(t);
    }
  });
}
const cm = /* @__PURE__ */ S("ZodPrefault", (e, t) => {
  kd.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function dm(e, t) {
  return new cm({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : jr(t);
    }
  });
}
const Sa = /* @__PURE__ */ S("ZodNonOptional", (e, t) => {
  xd.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function pm(e, t) {
  return new Sa({
    type: "nonoptional",
    innerType: e,
    ...P(t)
  });
}
const mm = /* @__PURE__ */ S("ZodSuccess", (e, t) => {
  Sd.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function vb(e) {
  return new mm({
    type: "success",
    innerType: e
  });
}
const fm = /* @__PURE__ */ S("ZodCatch", (e, t) => {
  Td.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function gm(e, t) {
  return new fm({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const hm = /* @__PURE__ */ S("ZodNaN", (e, t) => {
  Od.init(e, t), Q.init(e, t);
});
function yb(e) {
  return gp(hm, e);
}
const Ta = /* @__PURE__ */ S("ZodPipe", (e, t) => {
  Ed.init(e, t), Q.init(e, t), e.in = t.in, e.out = t.out;
});
function kr(e, t) {
  return new Ta({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Oa = /* @__PURE__ */ S("ZodCodec", (e, t) => {
  Ta.init(e, t), fi.init(e, t);
});
function _b(e, t, r) {
  return new Oa({
    type: "pipe",
    in: e,
    out: t,
    transform: r.decode,
    reverseTransform: r.encode
  });
}
const vm = /* @__PURE__ */ S("ZodReadonly", (e, t) => {
  Nd.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ym(e) {
  return new vm({
    type: "readonly",
    innerType: e
  });
}
const _m = /* @__PURE__ */ S("ZodTemplateLiteral", (e, t) => {
  Cd.init(e, t), Q.init(e, t);
});
function bb(e, t) {
  return new _m({
    type: "template_literal",
    parts: e,
    ...P(t)
  });
}
const bm = /* @__PURE__ */ S("ZodLazy", (e, t) => {
  Md.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function Hr(e) {
  return new bm({
    type: "lazy",
    getter: e
  });
}
const wm = /* @__PURE__ */ S("ZodPromise", (e, t) => {
  Ad.init(e, t), Q.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function wb(e) {
  return new wm({
    type: "promise",
    innerType: e
  });
}
const $m = /* @__PURE__ */ S("ZodFunction", (e, t) => {
  Pd.init(e, t), Q.init(e, t);
});
function ms(e) {
  return new $m({
    type: "function",
    input: Array.isArray(e == null ? void 0 : e.input) ? $r(e == null ? void 0 : e.input) : (e == null ? void 0 : e.input) ?? A(re()),
    output: (e == null ? void 0 : e.output) ?? re()
  });
}
const Kr = /* @__PURE__ */ S("ZodCustom", (e, t) => {
  Rd.init(e, t), Q.init(e, t);
});
function $b(e) {
  const t = new Te({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function Im(e, t) {
  return Ip(Kr, e ?? (() => !0), t);
}
function km(e, t = {}) {
  return kp(Kr, e, t);
}
function xm(e) {
  return xp(e);
}
function An(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const r = new Kr({
    type: "custom",
    check: "custom",
    fn: (o) => o instanceof e,
    abort: !0,
    ...P(t)
  });
  return r._zod.bag.Class = e, r;
}
const Ib = (...e) => Tp({
  Codec: Oa,
  Boolean: Vr,
  String: Fr
}, ...e);
function kb(e) {
  const t = Hr(() => X([c(e), T(), W(), ba(), A(t), Fe(c(), t)]));
  return t;
}
function xb(e, t) {
  return kr(ka(e), t);
}
const Sb = {
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
function Tb(e) {
  Ye({
    customError: e
  });
}
function Ob() {
  return Ye().customError;
}
var B;
B || (B = {});
function Eb(e) {
  return Zd(Fr, e);
}
function Sm(e) {
  return Wd(Gr, e);
}
function Nb(e) {
  return tp(Vr, e);
}
function Cb(e) {
  return rp(Br, e);
}
function Pb(e) {
  return fp(wa, e);
}
const Ab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bigint: Cb,
  boolean: Nb,
  date: Pb,
  number: Sm,
  string: Eb
}, Symbol.toStringTag, { value: "Module" }));
Ye(jd());
const an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: ol,
  $input: Dd,
  $output: Ud,
  NEVER: rl,
  TimePrecision: Ld,
  ZodAny: Bp,
  ZodArray: Yp,
  ZodBase64: fa,
  ZodBase64URL: ha,
  ZodBigInt: Br,
  ZodBigIntFormat: _a,
  ZodBoolean: Vr,
  ZodCIDRv4: pa,
  ZodCIDRv6: ma,
  ZodCUID: ia,
  ZodCUID2: aa,
  ZodCatch: fm,
  ZodCodec: Oa,
  ZodCustom: Kr,
  ZodCustomStringFormat: Kn,
  ZodDate: wa,
  ZodDefault: um,
  ZodDiscriminatedUnion: Xp,
  ZodE164: va,
  ZodEmail: na,
  ZodEmoji: ra,
  ZodEnum: Pn,
  ZodError: S_,
  ZodFile: im,
  get ZodFirstPartyTypeKind() {
    return B;
  },
  ZodFunction: $m,
  ZodGUID: wr,
  ZodIPv4: ca,
  ZodIPv6: da,
  ZodISODate: Yi,
  ZodISODateTime: Ki,
  ZodISODuration: Qi,
  ZodISOTime: Xi,
  ZodIntersection: Qp,
  ZodIssueCode: Sb,
  ZodJWT: ya,
  ZodKSUID: la,
  ZodLazy: bm,
  ZodLiteral: om,
  ZodMap: nm,
  ZodNaN: hm,
  ZodNanoID: oa,
  ZodNever: Hp,
  ZodNonOptional: Sa,
  ZodNull: Vp,
  ZodNullable: sm,
  ZodNumber: Gr,
  ZodNumberFormat: fn,
  ZodObject: Wr,
  ZodOptional: xa,
  ZodPipe: Ta,
  ZodPrefault: cm,
  ZodPromise: wm,
  ZodReadonly: vm,
  ZodRealError: at,
  ZodRecord: Ia,
  ZodSet: rm,
  ZodString: Fr,
  ZodStringFormat: $e,
  ZodSuccess: mm,
  ZodSymbol: Jp,
  ZodTemplateLiteral: _m,
  ZodTransform: am,
  ZodTuple: tm,
  ZodType: Q,
  ZodULID: sa,
  ZodURL: Jr,
  ZodUUID: Tt,
  ZodUndefined: Gp,
  ZodUnion: $a,
  ZodUnknown: Wp,
  ZodVoid: Kp,
  ZodXID: ua,
  _ZodString: ta,
  _default: lm,
  _function: ms,
  any: $t,
  array: A,
  base64: ga,
  base64url: V_,
  bigint: rb,
  boolean: W,
  catch: gm,
  check: $b,
  cidrv4: J_,
  cidrv6: G_,
  clone: st,
  codec: _b,
  coerce: Ab,
  config: Ye,
  core: k_,
  cuid: z_,
  cuid2: U_,
  custom: Im,
  date: lb,
  decode: zp,
  decodeAsync: Dp,
  discriminatedUnion: Le,
  e164: B_,
  email: T_,
  emoji: R_,
  encode: jp,
  encodeAsync: Up,
  endsWith: Fi,
  enum: ne,
  file: gb,
  flattenError: Bo,
  float32: Q_,
  float64: eb,
  formatError: Wo,
  function: ms,
  getErrorMap: Ob,
  globalRegistry: Ft,
  gt: Wt,
  gte: rt,
  guid: O_,
  hash: X_,
  hex: Y_,
  hostname: K_,
  httpUrl: M_,
  includes: Zi,
  instanceof: An,
  int: Ro,
  int32: tb,
  int64: ob,
  intersection: em,
  ipv4: L_,
  ipv6: F_,
  iso: x_,
  json: kb,
  jwt: W_,
  keyof: cb,
  ksuid: Z_,
  lazy: Hr,
  length: Lr,
  literal: x,
  locales: zd,
  looseObject: Ot,
  lowercase: Di,
  lt: Bt,
  lte: gt,
  map: pb,
  maxLength: Zr,
  maxSize: qr,
  mime: Ji,
  minLength: cn,
  minSize: Cn,
  multipleOf: Nn,
  nan: yb,
  nanoid: j_,
  nativeEnum: fb,
  negative: vp,
  never: We,
  nonnegative: _p,
  nonoptional: pm,
  nonpositive: yp,
  normalize: Gi,
  null: ba,
  nullable: Ir,
  nullish: hb,
  number: T,
  object: h,
  optional: xe,
  overwrite: en,
  parse: Ap,
  parseAsync: Mp,
  partialRecord: db,
  pipe: kr,
  positive: hp,
  prefault: dm,
  preprocess: xb,
  prettifyError: Il,
  promise: wb,
  property: bp,
  readonly: ym,
  record: Fe,
  refine: km,
  regex: Ui,
  regexes: ii,
  registry: hi,
  safeDecode: Zp,
  safeDecodeAsync: Fp,
  safeEncode: qp,
  safeEncodeAsync: Lp,
  safeParse: Rp,
  safeParseAsync: ea,
  set: mb,
  setErrorMap: Tb,
  size: zi,
  startsWith: Li,
  strictObject: he,
  string: c,
  stringFormat: H_,
  stringbool: Ib,
  success: vb,
  superRefine: xm,
  symbol: ab,
  templateLiteral: bb,
  toJSONSchema: Hi,
  toLowerCase: Bi,
  toUpperCase: Wi,
  transform: ka,
  treeifyError: wl,
  trim: Vi,
  tuple: $r,
  uint32: nb,
  uint64: ib,
  ulid: D_,
  undefined: sb,
  union: X,
  unknown: re,
  uppercase: qi,
  url: A_,
  uuid: E_,
  uuidv4: N_,
  uuidv6: C_,
  uuidv7: P_,
  void: ub,
  xid: q_
}, Symbol.toStringTag, { value: "Module" })), Mb = Symbol("Let zodToJsonSchema decide on which parser to use"), fs = {
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
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
}, Rb = (e) => typeof e == "string" ? {
  ...fs,
  name: e
} : {
  ...fs,
  ...e
}, jb = (e) => {
  const t = Rb(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    flags: { hasReferencedOpenAiAnyType: !1 },
    currentPath: r,
    propertyPath: void 0,
    seen: new Map(Object.entries(t.definitions).map(([o, n]) => [
      n._def,
      {
        def: n._def,
        path: [...t.basePath, t.definitionPath, o],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};
function Tm(e, t, r, o) {
  o != null && o.errorMessages && r && (e.errorMessage = {
    ...e.errorMessage,
    [t]: r
  });
}
function pe(e, t, r, o, n) {
  e[t] = r, Tm(e, t, o, n);
}
const Om = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
};
function Qe(e) {
  if (e.target !== "openAi")
    return {};
  const t = [
    ...e.basePath,
    e.definitionPath,
    e.openAiAnyTypeName
  ];
  return e.flags.hasReferencedOpenAiAnyType = !0, {
    $ref: e.$refStrategy === "relative" ? Om(t, e.currentPath) : t.join("/")
  };
}
function zb(e, t) {
  var o, n, i;
  const r = {
    type: "array"
  };
  return (o = e.type) != null && o._def && ((i = (n = e.type) == null ? void 0 : n._def) == null ? void 0 : i.typeName) !== B.ZodAny && (r.items = le(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && pe(r, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && pe(r, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (pe(r, "minItems", e.exactLength.value, e.exactLength.message, t), pe(r, "maxItems", e.exactLength.value, e.exactLength.message, t)), r;
}
function Ub(e, t) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return r;
  for (const o of e.checks)
    switch (o.kind) {
      case "min":
        t.target === "jsonSchema7" ? o.inclusive ? pe(r, "minimum", o.value, o.message, t) : pe(r, "exclusiveMinimum", o.value, o.message, t) : (o.inclusive || (r.exclusiveMinimum = !0), pe(r, "minimum", o.value, o.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? o.inclusive ? pe(r, "maximum", o.value, o.message, t) : pe(r, "exclusiveMaximum", o.value, o.message, t) : (o.inclusive || (r.exclusiveMaximum = !0), pe(r, "maximum", o.value, o.message, t));
        break;
      case "multipleOf":
        pe(r, "multipleOf", o.value, o.message, t);
        break;
    }
  return r;
}
function Db() {
  return {
    type: "boolean"
  };
}
function Em(e, t) {
  return le(e.type._def, t);
}
const qb = (e, t) => le(e.innerType._def, t);
function Nm(e, t, r) {
  const o = r ?? t.dateStrategy;
  if (Array.isArray(o))
    return {
      anyOf: o.map((n, i) => Nm(e, t, n))
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
      return Zb(e, t);
  }
}
const Zb = (e, t) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return r;
  for (const o of e.checks)
    switch (o.kind) {
      case "min":
        pe(
          r,
          "minimum",
          o.value,
          // This is in milliseconds
          o.message,
          t
        );
        break;
      case "max":
        pe(
          r,
          "maximum",
          o.value,
          // This is in milliseconds
          o.message,
          t
        );
        break;
    }
  return r;
};
function Lb(e, t) {
  return {
    ...le(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Fb(e, t) {
  return t.effectStrategy === "input" ? le(e.schema._def, t) : Qe(t);
}
function Jb(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const Gb = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Vb(e, t) {
  const r = [
    le(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    le(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((i) => !!i);
  let o = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const n = [];
  return r.forEach((i) => {
    if (Gb(i))
      n.push(...i.allOf), i.unevaluatedProperties === void 0 && (o = void 0);
    else {
      let a = i;
      if ("additionalProperties" in i && i.additionalProperties === !1) {
        const { additionalProperties: s, ...u } = i;
        a = u;
      } else
        o = void 0;
      n.push(a);
    }
  }), n.length ? {
    allOf: n,
    ...o
  } : void 0;
}
function Bb(e, t) {
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
let bo;
const ct = {
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
  emoji: () => (bo === void 0 && (bo = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), bo),
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
function Cm(e, t) {
  const r = {
    type: "string"
  };
  if (e.checks)
    for (const o of e.checks)
      switch (o.kind) {
        case "min":
          pe(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, o.value) : o.value, o.message, t);
          break;
        case "max":
          pe(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, o.value) : o.value, o.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              dt(r, "email", o.message, t);
              break;
            case "format:idn-email":
              dt(r, "idn-email", o.message, t);
              break;
            case "pattern:zod":
              Be(r, ct.email, o.message, t);
              break;
          }
          break;
        case "url":
          dt(r, "uri", o.message, t);
          break;
        case "uuid":
          dt(r, "uuid", o.message, t);
          break;
        case "regex":
          Be(r, o.regex, o.message, t);
          break;
        case "cuid":
          Be(r, ct.cuid, o.message, t);
          break;
        case "cuid2":
          Be(r, ct.cuid2, o.message, t);
          break;
        case "startsWith":
          Be(r, RegExp(`^${wo(o.value, t)}`), o.message, t);
          break;
        case "endsWith":
          Be(r, RegExp(`${wo(o.value, t)}$`), o.message, t);
          break;
        case "datetime":
          dt(r, "date-time", o.message, t);
          break;
        case "date":
          dt(r, "date", o.message, t);
          break;
        case "time":
          dt(r, "time", o.message, t);
          break;
        case "duration":
          dt(r, "duration", o.message, t);
          break;
        case "length":
          pe(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, o.value) : o.value, o.message, t), pe(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, o.value) : o.value, o.message, t);
          break;
        case "includes": {
          Be(r, RegExp(wo(o.value, t)), o.message, t);
          break;
        }
        case "ip": {
          o.version !== "v6" && dt(r, "ipv4", o.message, t), o.version !== "v4" && dt(r, "ipv6", o.message, t);
          break;
        }
        case "base64url":
          Be(r, ct.base64url, o.message, t);
          break;
        case "jwt":
          Be(r, ct.jwt, o.message, t);
          break;
        case "cidr": {
          o.version !== "v6" && Be(r, ct.ipv4Cidr, o.message, t), o.version !== "v4" && Be(r, ct.ipv6Cidr, o.message, t);
          break;
        }
        case "emoji":
          Be(r, ct.emoji(), o.message, t);
          break;
        case "ulid": {
          Be(r, ct.ulid, o.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              dt(r, "binary", o.message, t);
              break;
            }
            case "contentEncoding:base64": {
              pe(r, "contentEncoding", "base64", o.message, t);
              break;
            }
            case "pattern:zod": {
              Be(r, ct.base64, o.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Be(r, ct.nanoid, o.message, t);
      }
  return r;
}
function wo(e, t) {
  return t.patternStrategy === "escape" ? Hb(e) : e;
}
const Wb = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Hb(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    Wb.has(e[r]) || (t += "\\"), t += e[r];
  return t;
}
function dt(e, t, r, o) {
  var n;
  e.format || (n = e.anyOf) != null && n.some((i) => i.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && o.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...r && o.errorMessages && { errorMessage: { format: r } }
  })) : pe(e, "format", t, r, o);
}
function Be(e, t, r, o) {
  var n;
  e.pattern || (n = e.allOf) != null && n.some((i) => i.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && o.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: gs(t, o),
    ...r && o.errorMessages && { errorMessage: { pattern: r } }
  })) : pe(e, "pattern", gs(t, o), r, o);
}
function gs(e, t) {
  var u;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const r = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s")
    // `.` matches newlines
  }, o = r.i ? e.source.toLowerCase() : e.source;
  let n = "", i = !1, a = !1, s = !1;
  for (let l = 0; l < o.length; l++) {
    if (i) {
      n += o[l], i = !1;
      continue;
    }
    if (r.i) {
      if (a) {
        if (o[l].match(/[a-z]/)) {
          s ? (n += o[l], n += `${o[l - 2]}-${o[l]}`.toUpperCase(), s = !1) : o[l + 1] === "-" && ((u = o[l + 2]) != null && u.match(/[a-z]/)) ? (n += o[l], s = !0) : n += `${o[l]}${o[l].toUpperCase()}`;
          continue;
        }
      } else if (o[l].match(/[a-z]/)) {
        n += `[${o[l]}${o[l].toUpperCase()}]`;
        continue;
      }
    }
    if (r.m) {
      if (o[l] === "^") {
        n += `(^|(?<=[\r
]))`;
        continue;
      } else if (o[l] === "$") {
        n += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r.s && o[l] === ".") {
      n += a ? `${o[l]}\r
` : `[${o[l]}\r
]`;
      continue;
    }
    n += o[l], o[l] === "\\" ? i = !0 : a && o[l] === "]" ? a = !1 : !a && o[l] === "[" && (a = !0);
  }
  try {
    new RegExp(n);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
  }
  return n;
}
function Pm(e, t) {
  var o, n, i, a, s, u;
  if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && ((o = e.keyType) == null ? void 0 : o._def.typeName) === B.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((l, d) => ({
        ...l,
        [d]: le(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", d]
        }) ?? Qe(t)
      }), {}),
      additionalProperties: t.rejectedAdditionalProperties
    };
  const r = {
    type: "object",
    additionalProperties: le(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? t.allowedAdditionalProperties
  };
  if (t.target === "openApi3")
    return r;
  if (((n = e.keyType) == null ? void 0 : n._def.typeName) === B.ZodString && ((i = e.keyType._def.checks) != null && i.length)) {
    const { type: l, ...d } = Cm(e.keyType._def, t);
    return {
      ...r,
      propertyNames: d
    };
  } else {
    if (((a = e.keyType) == null ? void 0 : a._def.typeName) === B.ZodEnum)
      return {
        ...r,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === B.ZodBranded && e.keyType._def.type._def.typeName === B.ZodString && ((u = e.keyType._def.type._def.checks) != null && u.length)) {
      const { type: l, ...d } = Em(e.keyType._def, t);
      return {
        ...r,
        propertyNames: d
      };
    }
  }
  return r;
}
function Kb(e, t) {
  if (t.mapStrategy === "record")
    return Pm(e, t);
  const r = le(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || Qe(t), o = le(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || Qe(t);
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
function Yb(e) {
  const t = e.values, o = Object.keys(e.values).filter((i) => typeof t[t[i]] != "number").map((i) => t[i]), n = Array.from(new Set(o.map((i) => typeof i)));
  return {
    type: n.length === 1 ? n[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: o
  };
}
function Xb(e) {
  return e.target === "openAi" ? void 0 : {
    not: Qe({
      ...e,
      currentPath: [...e.currentPath, "not"]
    })
  };
}
function Qb(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const xr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function ew(e, t) {
  if (t.target === "openApi3")
    return hs(e, t);
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((o) => o._def.typeName in xr && (!o._def.checks || !o._def.checks.length))) {
    const o = r.reduce((n, i) => {
      const a = xr[i._def.typeName];
      return a && !n.includes(a) ? [...n, a] : n;
    }, []);
    return {
      type: o.length > 1 ? o : o[0]
    };
  } else if (r.every((o) => o._def.typeName === "ZodLiteral" && !o.description)) {
    const o = r.reduce((n, i) => {
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
    }, []);
    if (o.length === r.length) {
      const n = o.filter((i, a, s) => s.indexOf(i) === a);
      return {
        type: n.length > 1 ? n : n[0],
        enum: r.reduce((i, a) => i.includes(a._def.value) ? i : [...i, a._def.value], [])
      };
    }
  } else if (r.every((o) => o._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce((o, n) => [
        ...o,
        ...n._def.values.filter((i) => !o.includes(i))
      ], [])
    };
  return hs(e, t);
}
const hs = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((o, n) => le(o._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${n}`]
  })).filter((o) => !!o && (!t.strictUnions || typeof o == "object" && Object.keys(o).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function tw(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: xr[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        xr[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const o = le(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return o && "$ref" in o ? { allOf: [o], nullable: !0 } : o && { ...o, nullable: !0 };
  }
  const r = le(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function nw(e, t) {
  const r = {
    type: "number"
  };
  if (!e.checks)
    return r;
  for (const o of e.checks)
    switch (o.kind) {
      case "int":
        r.type = "integer", Tm(r, "type", o.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? o.inclusive ? pe(r, "minimum", o.value, o.message, t) : pe(r, "exclusiveMinimum", o.value, o.message, t) : (o.inclusive || (r.exclusiveMinimum = !0), pe(r, "minimum", o.value, o.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? o.inclusive ? pe(r, "maximum", o.value, o.message, t) : pe(r, "exclusiveMaximum", o.value, o.message, t) : (o.inclusive || (r.exclusiveMaximum = !0), pe(r, "maximum", o.value, o.message, t));
        break;
      case "multipleOf":
        pe(r, "multipleOf", o.value, o.message, t);
        break;
    }
  return r;
}
function rw(e, t) {
  const r = t.target === "openAi", o = {
    type: "object",
    properties: {}
  }, n = [], i = e.shape();
  for (const s in i) {
    let u = i[s];
    if (u === void 0 || u._def === void 0)
      continue;
    let l = iw(u);
    l && r && (u._def.typeName === "ZodOptional" && (u = u._def.innerType), u.isNullable() || (u = u.nullable()), l = !1);
    const d = le(u._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", s],
      propertyPath: [...t.currentPath, "properties", s]
    });
    d !== void 0 && (o.properties[s] = d, l || n.push(s));
  }
  n.length && (o.required = n);
  const a = ow(e, t);
  return a !== void 0 && (o.additionalProperties = a), o;
}
function ow(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return le(e.catchall._def, {
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
function iw(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
const aw = (e, t) => {
  var o;
  if (t.currentPath.toString() === ((o = t.propertyPath) == null ? void 0 : o.toString()))
    return le(e.innerType._def, t);
  const r = le(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return r ? {
    anyOf: [
      {
        not: Qe(t)
      },
      r
    ]
  } : Qe(t);
}, sw = (e, t) => {
  if (t.pipeStrategy === "input")
    return le(e.in._def, t);
  if (t.pipeStrategy === "output")
    return le(e.out._def, t);
  const r = le(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), o = le(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, o].filter((n) => n !== void 0)
  };
};
function uw(e, t) {
  return le(e.type._def, t);
}
function lw(e, t) {
  const o = {
    type: "array",
    uniqueItems: !0,
    items: le(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && pe(o, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && pe(o, "maxItems", e.maxSize.value, e.maxSize.message, t), o;
}
function cw(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((r, o) => le(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${o}`]
    })).reduce((r, o) => o === void 0 ? r : [...r, o], []),
    additionalItems: le(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((r, o) => le(r._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${o}`]
    })).reduce((r, o) => o === void 0 ? r : [...r, o], [])
  };
}
function dw(e) {
  return {
    not: Qe(e)
  };
}
function pw(e) {
  return Qe(e);
}
const mw = (e, t) => le(e.innerType._def, t), fw = (e, t, r) => {
  switch (t) {
    case B.ZodString:
      return Cm(e, r);
    case B.ZodNumber:
      return nw(e, r);
    case B.ZodObject:
      return rw(e, r);
    case B.ZodBigInt:
      return Ub(e, r);
    case B.ZodBoolean:
      return Db();
    case B.ZodDate:
      return Nm(e, r);
    case B.ZodUndefined:
      return dw(r);
    case B.ZodNull:
      return Qb(r);
    case B.ZodArray:
      return zb(e, r);
    case B.ZodUnion:
    case B.ZodDiscriminatedUnion:
      return ew(e, r);
    case B.ZodIntersection:
      return Vb(e, r);
    case B.ZodTuple:
      return cw(e, r);
    case B.ZodRecord:
      return Pm(e, r);
    case B.ZodLiteral:
      return Bb(e, r);
    case B.ZodEnum:
      return Jb(e);
    case B.ZodNativeEnum:
      return Yb(e);
    case B.ZodNullable:
      return tw(e, r);
    case B.ZodOptional:
      return aw(e, r);
    case B.ZodMap:
      return Kb(e, r);
    case B.ZodSet:
      return lw(e, r);
    case B.ZodLazy:
      return () => e.getter()._def;
    case B.ZodPromise:
      return uw(e, r);
    case B.ZodNaN:
    case B.ZodNever:
      return Xb(r);
    case B.ZodEffects:
      return Fb(e, r);
    case B.ZodAny:
      return Qe(r);
    case B.ZodUnknown:
      return pw(r);
    case B.ZodDefault:
      return Lb(e, r);
    case B.ZodBranded:
      return Em(e, r);
    case B.ZodReadonly:
      return mw(e, r);
    case B.ZodCatch:
      return qb(e, r);
    case B.ZodPipeline:
      return sw(e, r);
    case B.ZodFunction:
    case B.ZodVoid:
    case B.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((o) => {
      })();
  }
};
function le(e, t, r = !1) {
  var s;
  const o = t.seen.get(e);
  if (t.override) {
    const u = (s = t.override) == null ? void 0 : s.call(t, e, t, o, r);
    if (u !== Mb)
      return u;
  }
  if (o && !r) {
    const u = gw(o, t);
    if (u !== void 0)
      return u;
  }
  const n = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, n);
  const i = fw(e, e.typeName, t), a = typeof i == "function" ? le(i(), t) : i;
  if (a && hw(e, t, a), t.postProcess) {
    const u = t.postProcess(a, e, t);
    return n.jsonSchema = a, u;
  }
  return n.jsonSchema = a, a;
}
const gw = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Om(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, o) => t.currentPath[o] === r) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), Qe(t)) : t.$refStrategy === "seen" ? Qe(t) : void 0;
  }
}, hw = (e, t, r) => (e.description && (r.description = e.description, t.markdownDescription && (r.markdownDescription = e.description)), r), vw = (e, t) => {
  const r = jb(t);
  let o = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((u, [l, d]) => ({
    ...u,
    [l]: le(d._def, {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, l]
    }, !0) ?? Qe(r)
  }), {}) : void 0;
  const n = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, i = le(e._def, n === void 0 ? r : {
    ...r,
    currentPath: [...r.basePath, r.definitionPath, n]
  }, !1) ?? Qe(r), a = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  a !== void 0 && (i.title = a), r.flags.hasReferencedOpenAiAnyType && (o || (o = {}), o[r.openAiAnyTypeName] || (o[r.openAiAnyTypeName] = {
    // Skipping "object" as no properties can be defined and additionalProperties must be "false"
    type: ["string", "number", "integer", "boolean", "array", "null"],
    items: {
      $ref: r.$refStrategy === "relative" ? "1" : [
        ...r.basePath,
        r.definitionPath,
        r.openAiAnyTypeName
      ].join("/")
    }
  }));
  const s = n === void 0 ? o ? {
    ...i,
    [r.definitionPath]: o
  } : i : {
    $ref: [
      ...r.$refStrategy === "relative" ? [] : r.basePath,
      r.definitionPath,
      n
    ].join("/"),
    [r.definitionPath]: {
      ...o,
      [n]: i
    }
  };
  return r.target === "jsonSchema7" ? s.$schema = "http://json-schema.org/draft-07/schema#" : (r.target === "jsonSchema2019-09" || r.target === "openAi") && (s.$schema = "https://json-schema.org/draft/2019-09/schema#"), r.target === "openAi" && ("anyOf" in s || "oneOf" in s || "allOf" in s || "type" in s && Array.isArray(s.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), s;
};
function Ee(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
async function Ea(e, t) {
  if (e == null)
    return Promise.resolve();
  const r = t == null ? void 0 : t.abortSignal;
  return new Promise((o, n) => {
    if (r != null && r.aborted) {
      n(vs());
      return;
    }
    const i = setTimeout(() => {
      a(), o();
    }, e), a = () => {
      clearTimeout(i), r == null || r.removeEventListener("abort", s);
    }, s = () => {
      a(), n(vs());
    };
    r == null || r.addEventListener("abort", s);
  });
}
function vs() {
  return new DOMException("Delay was aborted", "AbortError");
}
function gn(e) {
  return Object.fromEntries([...e.headers]);
}
var Yn = ({
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
    throw new Lo({
      argument: "separator",
      message: `The separator "${o}" must not be part of the alphabet "${r}".`
    });
  return () => `${e}${o}${n()}`;
}, De = Yn();
function Yr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function Ht(e) {
  return (e instanceof Error || e instanceof DOMException) && (e.name === "AbortError" || e.name === "ResponseAborted" || // Next.js
  e.name === "TimeoutError");
}
var yw = ["fetch failed", "failed to fetch"];
function Am({
  error: e,
  url: t,
  requestBodyValues: r
}) {
  if (Ht(e))
    return e;
  if (e instanceof TypeError && yw.includes(e.message.toLowerCase())) {
    const o = e.cause;
    if (o != null)
      return new je({
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
function Mm(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, r]) => r != null)
  );
}
var _w = () => globalThis.fetch, bw = async ({
  url: e,
  headers: t = {},
  successfulResponseHandler: r,
  failedResponseHandler: o,
  abortSignal: n,
  fetch: i = _w()
}) => {
  try {
    const a = await i(e, {
      method: "GET",
      headers: Mm(t),
      signal: n
    }), s = gn(a);
    if (!a.ok) {
      let u;
      try {
        u = await o({
          response: a,
          url: e,
          requestBodyValues: {}
        });
      } catch (l) {
        throw Ht(l) || je.isInstance(l) ? l : new je({
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
      throw u instanceof Error && (Ht(u) || je.isInstance(u)) ? u : new je({
        message: "Failed to process successful response",
        cause: u,
        statusCode: a.status,
        url: e,
        responseHeaders: s,
        requestBodyValues: {}
      });
    }
  } catch (a) {
    throw Am({ error: a, url: e, requestBodyValues: {} });
  }
}, ww = "JSON schema:", $w = "You MUST answer with a JSON object that matches the JSON schema above.", Iw = "You MUST answer with JSON.";
function kw({
  prompt: e,
  schema: t,
  schemaPrefix: r = t != null ? ww : void 0,
  schemaSuffix: o = t != null ? $w : Iw
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
function xw({
  messages: e,
  schema: t,
  schemaPrefix: r,
  schemaSuffix: o
}) {
  var n, i;
  const a = ((n = e[0]) == null ? void 0 : n.role) === "system" ? { ...e[0] } : { role: "system", content: "" };
  return a.content = kw({
    prompt: a.content,
    schema: t,
    schemaPrefix: r,
    schemaSuffix: o
  }), [
    a,
    ...((i = e[0]) == null ? void 0 : i.role) === "system" ? e.slice(1) : e
  ];
}
function Sw({
  mediaType: e,
  url: t,
  supportedUrls: r
}) {
  return t = t.toLowerCase(), e = e.toLowerCase(), Object.entries(r).map(([o, n]) => {
    const i = o.toLowerCase();
    return i === "*" || i === "*/*" ? { mediaTypePrefix: "", regexes: n } : { mediaTypePrefix: i.replace(/\*/, ""), regexes: n };
  }).filter(({ mediaTypePrefix: o }) => e.startsWith(o)).flatMap(({ regexes: o }) => o).some((o) => o.test(t));
}
function Xr({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: o
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new ar({
      message: `${o} API key must be a string.`
    });
  if (typeof process > "u")
    throw new ar({
      message: `${o} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new ar({
      message: `${o} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new ar({
      message: `${o} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
function mr({
  settingValue: e,
  environmentVariableName: t
}) {
  if (typeof e == "string")
    return e;
  if (!(e != null || typeof process > "u") && (e = process.env[t], !(e == null || typeof e != "string")))
    return e;
}
var Tw = /"__proto__"\s*:/, Ow = /"constructor"\s*:/;
function Ew(e) {
  const t = JSON.parse(e);
  return t === null || typeof t != "object" || Tw.test(e) === !1 && Ow.test(e) === !1 ? t : Nw(t);
}
function Nw(e) {
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
function Na(e) {
  const { stackTraceLimit: t } = Error;
  Error.stackTraceLimit = 0;
  try {
    return Ew(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
var Sr = Symbol.for("vercel.ai.validator");
function Cw(e) {
  return { [Sr]: !0, validate: e };
}
function Pw(e) {
  return typeof e == "object" && e !== null && Sr in e && e[Sr] === !0 && "validate" in e;
}
function Aw(e) {
  return Pw(e) ? e : Mw(e);
}
function Mw(e) {
  return Cw(async (t) => {
    const r = await e["~standard"].validate(t);
    return r.issues == null ? { success: !0, value: r.value } : {
      success: !1,
      error: new Xe({
        value: t,
        cause: r.issues
      })
    };
  });
}
async function Rt({
  value: e,
  schema: t
}) {
  const r = await Nt({ value: e, schema: t });
  if (!r.success)
    throw Xe.wrap({ value: e, cause: r.error });
  return r.value;
}
async function Nt({
  value: e,
  schema: t
}) {
  const r = Aw(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e, rawValue: e };
    const o = await r.validate(e);
    return o.success ? { success: !0, value: o.value, rawValue: e } : {
      success: !1,
      error: Xe.wrap({ value: e, cause: o.error }),
      rawValue: e
    };
  } catch (o) {
    return {
      success: !1,
      error: Xe.wrap({ value: e, cause: o }),
      rawValue: e
    };
  }
}
async function Rw({
  text: e,
  schema: t
}) {
  try {
    const r = Na(e);
    return t == null ? r : Rt({ value: r, schema: t });
  } catch (r) {
    throw En.isInstance(r) || Xe.isInstance(r) ? r : new En({ text: e, cause: r });
  }
}
async function zt({
  text: e,
  schema: t
}) {
  try {
    const r = Na(e);
    return t == null ? { success: !0, value: r, rawValue: r } : await Nt({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: En.isInstance(r) ? r : new En({ text: e, cause: r }),
      rawValue: void 0
    };
  }
}
function ys(e) {
  try {
    return Na(e), !0;
  } catch {
    return !1;
  }
}
function Ca({
  stream: e,
  schema: t
}) {
  return e.pipeThrough(new TextDecoderStream()).pipeThrough(new nl()).pipeThrough(
    new TransformStream({
      async transform({ data: r }, o) {
        r !== "[DONE]" && o.enqueue(await zt({ text: r, schema: t }));
      }
    })
  );
}
async function Je({
  provider: e,
  providerOptions: t,
  schema: r
}) {
  if ((t == null ? void 0 : t[e]) == null)
    return;
  const o = await Nt({
    value: t[e],
    schema: r
  });
  if (!o.success)
    throw new Lo({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: o.error
    });
  return o.value;
}
var jw = () => globalThis.fetch, Se = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: o,
  successfulResponseHandler: n,
  abortSignal: i,
  fetch: a
}) => Rm({
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
}), zw = async ({
  url: e,
  headers: t,
  formData: r,
  failedResponseHandler: o,
  successfulResponseHandler: n,
  abortSignal: i,
  fetch: a
}) => Rm({
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
}), Rm = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: o,
  failedResponseHandler: n,
  abortSignal: i,
  fetch: a = jw()
}) => {
  try {
    const s = await a(e, {
      method: "POST",
      headers: Mm(t),
      body: r.content,
      signal: i
    }), u = gn(s);
    if (!s.ok) {
      let l;
      try {
        l = await n({
          response: s,
          url: e,
          requestBodyValues: r.values
        });
      } catch (d) {
        throw Ht(d) || je.isInstance(d) ? d : new je({
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
      throw l instanceof Error && (Ht(l) || je.isInstance(l)) ? l : new je({
        message: "Failed to process successful response",
        cause: l,
        statusCode: s.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: r.values
      });
    }
  } catch (s) {
    throw Am({ error: s, url: e, requestBodyValues: r.values });
  }
};
function dT(e) {
  return e;
}
function Uw(e) {
  return { ...e, type: "dynamic" };
}
function ut({
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
function Pa({
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
async function Re(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var Ut = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: o, url: n, requestBodyValues: i }) => {
  const a = await o.text(), s = gn(o);
  if (a.trim() === "")
    return {
      responseHeaders: s,
      value: new je({
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
    const u = await Rw({
      text: a,
      schema: e
    });
    return {
      responseHeaders: s,
      value: new je({
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
      value: new je({
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
}, tn = (e) => async ({ response: t }) => {
  const r = gn(t);
  if (t.body == null)
    throw new ch({});
  return {
    responseHeaders: r,
    value: Ca({
      stream: t.body,
      schema: e
    })
  };
}, Ge = (e) => async ({ response: t, url: r, requestBodyValues: o }) => {
  const n = await t.text(), i = await zt({
    text: n,
    schema: e
  }), a = gn(t);
  if (!i.success)
    throw new je({
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
}, Dw = () => async ({ response: e, url: t, requestBodyValues: r }) => {
  const o = gn(e);
  if (!e.body)
    throw new je({
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
    throw new je({
      message: "Failed to read response as array buffer",
      url: t,
      requestBodyValues: r,
      statusCode: e.status,
      responseHeaders: o,
      responseBody: void 0,
      cause: n
    });
  }
};
function qw(e, t) {
  var r;
  const o = (r = t == null ? void 0 : t.useReferences) != null ? r : !1;
  return Qr(
    vw(e, {
      $refStrategy: o ? "root" : "none",
      target: "jsonSchema7"
      // note: openai mode breaks various gemini conversions
    }),
    {
      validate: async (n) => {
        const i = await e.safeParseAsync(n);
        return i.success ? { success: !0, value: i.data } : { success: !1, error: i.error };
      }
    }
  );
}
function Zw(e, t) {
  var r;
  const o = (r = t == null ? void 0 : t.useReferences) != null ? r : !1, n = Hi(e, {
    target: "draft-7",
    io: "output",
    reused: o ? "ref" : "inline"
  });
  return Qr(n, {
    validate: async (i) => {
      const a = await ea(e, i);
      return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
    }
  });
}
function Lw(e) {
  return "_zod" in e;
}
function Fw(e, t) {
  return Lw(e) ? Zw(e, t) : qw(e, t);
}
var jo = Symbol.for("vercel.ai.schema");
function Qr(e, {
  validate: t
} = {}) {
  return {
    [jo]: !0,
    _type: void 0,
    // should never be used directly
    [Sr]: !0,
    jsonSchema: e,
    validate: t
  };
}
function Jw(e) {
  return typeof e == "object" && e !== null && jo in e && e[jo] === !0 && "jsonSchema" in e && "validate" in e;
}
function dn(e) {
  return e == null ? Qr({
    properties: {},
    additionalProperties: !1
  }) : Jw(e) ? e : Fw(e);
}
var { btoa: Gw, atob: Vw } = globalThis;
function eo(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = Vw(t);
  return Uint8Array.from(r, (o) => o.codePointAt(0));
}
function Tr(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return Gw(t);
}
function ft(e) {
  return e instanceof Uint8Array ? Tr(e) : e;
}
function Xn(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
function Bw(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* jm({
  execute: e,
  input: t,
  options: r
}) {
  const o = e(t, r);
  if (Bw(o)) {
    let n;
    for await (const i of o)
      n = i, yield { type: "preliminary", output: i };
    yield { type: "final", output: n };
  } else
    yield { type: "final", output: await o };
}
var Ww = h({
  type: x("error"),
  error: h({
    type: c(),
    message: c()
  })
}), _s = Ut({
  errorSchema: Ww,
  errorToMessage: (e) => e.error.message
}), bs = h({
  /**
   * Citation configuration for this document.
   * When enabled, this document will generate citations in the response.
   */
  citations: h({
    /**
     * Enable citations for this document
     */
    enabled: W()
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
}), Hw = h({
  sendReasoning: W().optional(),
  thinking: h({
    type: X([x("enabled"), x("disabled")]),
    budgetTokens: T().optional()
  }).optional(),
  /**
   * Whether to disable parallel function calling during tool use. Default is false.
   * When set to true, Claude will use at most one tool per response.
   */
  disableParallelToolUse: W().optional()
});
function Mt(e) {
  var t;
  const r = e == null ? void 0 : e.anthropic;
  return (t = r == null ? void 0 : r.cacheControl) != null ? t : r == null ? void 0 : r.cache_control;
}
var Kw = h({
  /**
   * Maximum number of web searches Claude can perform during the conversation.
   */
  maxUses: T().optional(),
  /**
   * Optional list of domains that Claude is allowed to search.
   */
  allowedDomains: A(c()).optional(),
  /**
   * Optional list of domains that Claude should avoid when searching.
   */
  blockedDomains: A(c()).optional(),
  /**
   * Optional user location information to provide geographically relevant search results.
   */
  userLocation: h({
    type: x("approximate"),
    city: c().optional(),
    region: c().optional(),
    country: c().optional(),
    timezone: c().optional()
  }).optional()
}), zm = A(
  h({
    url: c(),
    title: c(),
    pageAge: c().nullable(),
    encryptedContent: c(),
    type: c()
  })
), Yw = Pa({
  id: "anthropic.web_search_20250305",
  name: "web_search",
  inputSchema: h({
    query: c()
  }),
  outputSchema: zm
}), Xw = (e = {}) => Yw(e);
function Qw(e) {
  return typeof e == "object" && e !== null && "type" in e && e.type === "web_search_20250305";
}
function e$({
  tools: e,
  toolChoice: t,
  disableParallelToolUse: r
}) {
  e = e != null && e.length ? e : void 0;
  const o = [], n = /* @__PURE__ */ new Set();
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: o, betas: n };
  const i = [];
  for (const s of e) {
    if (Qw(s)) {
      i.push(s);
      continue;
    }
    switch (s.type) {
      case "function":
        const u = Mt(s.providerOptions);
        i.push({
          name: s.name,
          description: s.description,
          input_schema: s.inputSchema,
          cache_control: u
        });
        break;
      case "provider-defined":
        switch (s.id) {
          case "anthropic.computer_20250124":
            n.add("computer-use-2025-01-24"), i.push({
              name: "computer",
              type: "computer_20250124",
              display_width_px: s.args.displayWidthPx,
              display_height_px: s.args.displayHeightPx,
              display_number: s.args.displayNumber
            });
            break;
          case "anthropic.computer_20241022":
            n.add("computer-use-2024-10-22"), i.push({
              name: "computer",
              type: "computer_20241022",
              display_width_px: s.args.displayWidthPx,
              display_height_px: s.args.displayHeightPx,
              display_number: s.args.displayNumber
            });
            break;
          case "anthropic.text_editor_20250124":
            n.add("computer-use-2025-01-24"), i.push({
              name: "str_replace_editor",
              type: "text_editor_20250124"
            });
            break;
          case "anthropic.text_editor_20241022":
            n.add("computer-use-2024-10-22"), i.push({
              name: "str_replace_editor",
              type: "text_editor_20241022"
            });
            break;
          case "anthropic.text_editor_20250429":
            n.add("computer-use-2025-01-24"), i.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250429"
            });
            break;
          case "anthropic.bash_20250124":
            n.add("computer-use-2025-01-24"), i.push({
              name: "bash",
              type: "bash_20250124"
            });
            break;
          case "anthropic.bash_20241022":
            n.add("computer-use-2024-10-22"), i.push({
              name: "bash",
              type: "bash_20241022"
            });
            break;
          case "anthropic.web_search_20250305": {
            const l = Kw.parse(s.args);
            i.push({
              type: "web_search_20250305",
              name: "web_search",
              max_uses: l.maxUses,
              allowed_domains: l.allowedDomains,
              blocked_domains: l.blockedDomains,
              user_location: l.userLocation
            });
            break;
          }
          case "anthropic.code_execution_20250522": {
            n.add("code-execution-2025-05-22"), i.push({
              type: "code_execution_20250522",
              name: "code_execution"
            });
            break;
          }
          default:
            o.push({ type: "unsupported-tool", tool: s });
            break;
        }
        break;
      default:
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
      throw new we({
        functionality: `tool choice type: ${s}`
      });
    }
  }
}
var Um = h({
  type: x("code_execution_result"),
  stdout: c(),
  stderr: c(),
  return_code: T()
}), t$ = Pa({
  id: "anthropic.code_execution_20250522",
  name: "code_execution",
  inputSchema: h({
    code: c()
  }),
  outputSchema: Um
}), n$ = (e = {}) => t$(e);
function r$(e) {
  if (typeof e == "string")
    return Buffer.from(e, "base64").toString("utf-8");
  if (e instanceof Uint8Array)
    return new TextDecoder().decode(e);
  throw e instanceof URL ? new we({
    functionality: "URL-based text documents are not supported for citations"
  }) : new we({
    functionality: `unsupported data type for text documents: ${typeof e}`
  });
}
async function o$({
  prompt: e,
  sendReasoning: t,
  warnings: r
}) {
  var o, n, i, a, s;
  const u = /* @__PURE__ */ new Set(), l = i$(e);
  let d;
  const f = [];
  async function y(m) {
    var _, v;
    const g = await Je({
      provider: "anthropic",
      providerOptions: m,
      schema: bs
    });
    return (v = (_ = g == null ? void 0 : g.citations) == null ? void 0 : _.enabled) != null ? v : !1;
  }
  async function p(m) {
    const _ = await Je({
      provider: "anthropic",
      providerOptions: m,
      schema: bs
    });
    return {
      title: _ == null ? void 0 : _.title,
      context: _ == null ? void 0 : _.context
    };
  }
  for (let m = 0; m < l.length; m++) {
    const _ = l[m], v = m === l.length - 1, g = _.type;
    switch (g) {
      case "system": {
        if (d != null)
          throw new we({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        d = _.messages.map(({ content: b, providerOptions: w }) => ({
          type: "text",
          text: b,
          cache_control: Mt(w)
        }));
        break;
      }
      case "user": {
        const b = [];
        for (const w of _.messages) {
          const { role: $, content: O } = w;
          switch ($) {
            case "user": {
              for (let E = 0; E < O.length; E++) {
                const I = O[E], k = E === O.length - 1, M = (o = Mt(I.providerOptions)) != null ? o : k ? Mt(w.providerOptions) : void 0;
                switch (I.type) {
                  case "text": {
                    b.push({
                      type: "text",
                      text: I.text,
                      cache_control: M
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
                          data: ft(I.data)
                        },
                        cache_control: M
                      });
                    else if (I.mediaType === "application/pdf") {
                      u.add("pdfs-2024-09-25");
                      const C = await y(
                        I.providerOptions
                      ), j = await p(
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
                          data: ft(I.data)
                        },
                        title: (n = j.title) != null ? n : I.filename,
                        ...j.context && { context: j.context },
                        ...C && {
                          citations: { enabled: !0 }
                        },
                        cache_control: M
                      });
                    } else if (I.mediaType === "text/plain") {
                      const C = await y(
                        I.providerOptions
                      ), j = await p(
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
                          data: r$(I.data)
                        },
                        title: (i = j.title) != null ? i : I.filename,
                        ...j.context && { context: j.context },
                        ...C && {
                          citations: { enabled: !0 }
                        },
                        cache_control: M
                      });
                    } else
                      throw new we({
                        functionality: `media type: ${I.mediaType}`
                      });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let E = 0; E < O.length; E++) {
                const I = O[E], k = E === O.length - 1, M = (a = Mt(I.providerOptions)) != null ? a : k ? Mt(w.providerOptions) : void 0, C = I.output;
                let j;
                switch (C.type) {
                  case "content":
                    j = C.value.map((Z) => {
                      switch (Z.type) {
                        case "text":
                          return {
                            type: "text",
                            text: Z.text,
                            cache_control: void 0
                          };
                        case "media": {
                          if (Z.mediaType.startsWith("image/"))
                            return {
                              type: "image",
                              source: {
                                type: "base64",
                                media_type: Z.mediaType,
                                data: Z.data
                              },
                              cache_control: void 0
                            };
                          throw new we({
                            functionality: `media type: ${Z.mediaType}`
                          });
                        }
                      }
                    });
                    break;
                  case "text":
                  case "error-text":
                    j = C.value;
                    break;
                  case "json":
                  case "error-json":
                  default:
                    j = JSON.stringify(C.value);
                    break;
                }
                b.push({
                  type: "tool_result",
                  tool_use_id: I.toolCallId,
                  content: j,
                  is_error: C.type === "error-text" || C.type === "error-json" ? !0 : void 0,
                  cache_control: M
                });
              }
              break;
            }
            default: {
              const E = $;
              throw new Error(`Unsupported role: ${E}`);
            }
          }
        }
        f.push({ role: "user", content: b });
        break;
      }
      case "assistant": {
        const b = [];
        for (let w = 0; w < _.messages.length; w++) {
          const $ = _.messages[w], O = w === _.messages.length - 1, { content: E } = $;
          for (let I = 0; I < E.length; I++) {
            const k = E[I], M = I === E.length - 1, C = (s = Mt(k.providerOptions)) != null ? s : M ? Mt($.providerOptions) : void 0;
            switch (k.type) {
              case "text": {
                b.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    v && O && M ? k.text.trim() : k.text
                  ),
                  cache_control: C
                });
                break;
              }
              case "reasoning": {
                if (t) {
                  const j = await Je({
                    provider: "anthropic",
                    providerOptions: k.providerOptions,
                    schema: c$
                  });
                  j != null ? j.signature != null ? b.push({
                    type: "thinking",
                    thinking: k.text,
                    signature: j.signature,
                    cache_control: C
                  }) : j.redactedData != null ? b.push({
                    type: "redacted_thinking",
                    data: j.redactedData,
                    cache_control: C
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
                if (k.providerExecuted) {
                  if (k.toolName === "web_search") {
                    b.push({
                      type: "server_tool_use",
                      id: k.toolCallId,
                      name: "web_search",
                      input: k.input,
                      cache_control: C
                    });
                    break;
                  }
                  if (k.toolName === "code_execution") {
                    b.push({
                      type: "server_tool_use",
                      id: k.toolCallId,
                      name: "code_execution",
                      input: k.input,
                      cache_control: C
                    });
                    break;
                  }
                  r.push({
                    type: "other",
                    message: `provider executed tool call for tool ${k.toolName} is not supported`
                  });
                  break;
                }
                b.push({
                  type: "tool_use",
                  id: k.toolCallId,
                  name: k.toolName,
                  input: k.input,
                  cache_control: C
                });
                break;
              }
              case "tool-result": {
                if (k.toolName === "web_search") {
                  const j = k.output;
                  if (j.type !== "json") {
                    r.push({
                      type: "other",
                      message: `provider executed tool result output type ${j.type} for tool ${k.toolName} is not supported`
                    });
                    break;
                  }
                  const Z = zm.parse(
                    j.value
                  );
                  b.push({
                    type: "web_search_tool_result",
                    tool_use_id: k.toolCallId,
                    content: Z.map((L) => ({
                      url: L.url,
                      title: L.title,
                      page_age: L.pageAge,
                      encrypted_content: L.encryptedContent,
                      type: L.type
                    })),
                    cache_control: C
                  });
                  break;
                }
                if (k.toolName === "code_execution") {
                  const j = k.output;
                  if (j.type !== "json") {
                    r.push({
                      type: "other",
                      message: `provider executed tool result output type ${j.type} for tool ${k.toolName} is not supported`
                    });
                    break;
                  }
                  const Z = Um.parse(j.value);
                  b.push({
                    type: "code_execution_tool_result",
                    tool_use_id: k.toolCallId,
                    content: {
                      type: Z.type,
                      stdout: Z.stdout,
                      stderr: Z.stderr,
                      return_code: Z.return_code
                    },
                    cache_control: C
                  });
                  break;
                }
                r.push({
                  type: "other",
                  message: `provider executed tool result for tool ${k.toolName} is not supported`
                });
                break;
              }
            }
          }
        }
        f.push({ role: "assistant", content: b });
        break;
      }
      default: {
        const b = g;
        throw new Error(`content type: ${b}`);
      }
    }
  }
  return {
    prompt: { system: d, messages: f },
    betas: u
  };
}
function i$(e) {
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
function ws({
  finishReason: e,
  isJsonResponseFromTool: t
}) {
  switch (e) {
    case "end_turn":
    case "stop_sequence":
      return "stop";
    case "tool_use":
      return t ? "stop" : "tool-calls";
    case "max_tokens":
      return "length";
    default:
      return "unknown";
  }
}
var Sn = {
  webSearchResult: h({
    type: x("web_search_result_location"),
    cited_text: c(),
    url: c(),
    title: c(),
    encrypted_index: c()
  }),
  pageLocation: h({
    type: x("page_location"),
    cited_text: c(),
    document_index: T(),
    document_title: c().nullable(),
    start_page_number: T(),
    end_page_number: T()
  }),
  charLocation: h({
    type: x("char_location"),
    cited_text: c(),
    document_index: T(),
    document_title: c().nullable(),
    start_char_index: T(),
    end_char_index: T()
  })
}, Dm = Le("type", [
  Sn.webSearchResult,
  Sn.pageLocation,
  Sn.charLocation
]);
Le("type", [
  Sn.pageLocation,
  Sn.charLocation
]);
function $s(e, t, r, o) {
  if (e.type === "page_location" || e.type === "char_location") {
    const n = a$(
      e,
      t,
      r
    );
    n && o(n);
  }
}
function a$(e, t, r) {
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
var s$ = class {
  constructor(e, t) {
    this.specificationVersion = "v2";
    var r;
    this.modelId = e, this.config = t, this.generateId = (r = t.generateId) != null ? r : De;
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
    toolChoice: f,
    providerOptions: y
  }) {
    var p, m, _;
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
    const g = (u == null ? void 0 : u.type) === "json" && u.schema != null ? {
      type: "function",
      name: "json",
      description: "Respond with a JSON object.",
      inputSchema: u.schema
    } : void 0, b = await Je({
      provider: "anthropic",
      providerOptions: y,
      schema: Hw
    }), { prompt: w, betas: $ } = await o$({
      prompt: e,
      sendReasoning: (p = b == null ? void 0 : b.sendReasoning) != null ? p : !0,
      warnings: v
    }), O = ((m = b == null ? void 0 : b.thinking) == null ? void 0 : m.type) === "enabled", E = (_ = b == null ? void 0 : b.thinking) == null ? void 0 : _.budgetTokens, I = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: t,
      temperature: r,
      top_k: n,
      top_p: o,
      stop_sequences: s,
      // provider specific settings:
      ...O && {
        thinking: { type: "enabled", budget_tokens: E }
      },
      // prompt:
      system: w.system,
      messages: w.messages
    };
    if (O) {
      if (E == null)
        throw new we({
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
      })), I.max_tokens = t + E;
    }
    const {
      tools: k,
      toolChoice: M,
      toolWarnings: C,
      betas: j
    } = e$(
      g != null ? {
        tools: [g],
        toolChoice: { type: "tool", toolName: g.name },
        disableParallelToolUse: b == null ? void 0 : b.disableParallelToolUse
      } : {
        tools: d ?? [],
        toolChoice: f,
        disableParallelToolUse: b == null ? void 0 : b.disableParallelToolUse
      }
    );
    return {
      args: {
        ...I,
        tools: k,
        tool_choice: M
      },
      warnings: [...v, ...C],
      betas: /* @__PURE__ */ new Set([...$, ...j]),
      usesJsonResponseTool: g != null
    };
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Ee(
      await Re(this.config.headers),
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
      responseHeaders: f,
      value: y,
      rawValue: p
    } = await Se({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: u, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: _s,
      successfulResponseHandler: Ge(
        u$
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), m = [];
    for (const _ of y.content)
      switch (_.type) {
        case "text": {
          if (!l && (m.push({ type: "text", text: _.text }), _.citations))
            for (const v of _.citations)
              $s(
                v,
                d,
                this.generateId,
                (g) => m.push(g)
              );
          break;
        }
        case "thinking": {
          m.push({
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
          m.push({
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
          m.push(
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
          (_.name === "web_search" || _.name === "code_execution") && m.push({
            type: "tool-call",
            toolCallId: _.id,
            toolName: _.name,
            input: JSON.stringify(_.input),
            providerExecuted: !0
          });
          break;
        }
        case "web_search_tool_result": {
          if (Array.isArray(_.content)) {
            m.push({
              type: "tool-result",
              toolCallId: _.tool_use_id,
              toolName: "web_search",
              result: _.content.map((v) => {
                var g;
                return {
                  url: v.url,
                  title: v.title,
                  pageAge: (g = v.page_age) != null ? g : null,
                  encryptedContent: v.encrypted_content,
                  type: v.type
                };
              }),
              providerExecuted: !0
            });
            for (const v of _.content)
              m.push({
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
            m.push({
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
          _.content.type === "code_execution_result" ? m.push({
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
          }) : _.content.type === "code_execution_tool_result_error" && m.push({
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
      content: m,
      finishReason: ws({
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
        headers: f,
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
      failedResponseHandler: _s,
      successfulResponseHandler: tn(
        l$
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let l = "unknown";
    const d = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, f = {};
    let y, p;
    const m = this.generateId;
    return {
      stream: u.pipeThrough(
        new TransformStream({
          start(_) {
            _.enqueue({ type: "stream-start", warnings: r });
          },
          transform(_, v) {
            var g, b, w, $, O, E, I;
            if (e.includeRawChunks && v.enqueue({ type: "raw", rawValue: _.rawValue }), !_.success) {
              v.enqueue({ type: "error", error: _.error });
              return;
            }
            const k = _.value;
            switch (k.type) {
              case "ping":
                return;
              case "content_block_start": {
                const M = k.content_block.type;
                switch (p = M, M) {
                  case "text": {
                    f[k.index] = { type: "text" }, v.enqueue({
                      type: "text-start",
                      id: String(k.index)
                    });
                    return;
                  }
                  case "thinking": {
                    f[k.index] = { type: "reasoning" }, v.enqueue({
                      type: "reasoning-start",
                      id: String(k.index)
                    });
                    return;
                  }
                  case "redacted_thinking": {
                    f[k.index] = { type: "reasoning" }, v.enqueue({
                      type: "reasoning-start",
                      id: String(k.index),
                      providerMetadata: {
                        anthropic: {
                          redactedData: k.content_block.data
                        }
                      }
                    });
                    return;
                  }
                  case "tool_use": {
                    f[k.index] = n ? { type: "text" } : {
                      type: "tool-call",
                      toolCallId: k.content_block.id,
                      toolName: k.content_block.name,
                      input: ""
                    }, v.enqueue(
                      n ? { type: "text-start", id: String(k.index) } : {
                        type: "tool-input-start",
                        id: k.content_block.id,
                        toolName: k.content_block.name
                      }
                    );
                    return;
                  }
                  case "server_tool_use": {
                    (k.content_block.name === "web_search" || k.content_block.name === "code_execution") && (f[k.index] = {
                      type: "tool-call",
                      toolCallId: k.content_block.id,
                      toolName: k.content_block.name,
                      input: "",
                      providerExecuted: !0
                    }, v.enqueue({
                      type: "tool-input-start",
                      id: k.content_block.id,
                      toolName: k.content_block.name,
                      providerExecuted: !0
                    }));
                    return;
                  }
                  case "web_search_tool_result": {
                    const C = k.content_block;
                    if (Array.isArray(C.content)) {
                      v.enqueue({
                        type: "tool-result",
                        toolCallId: C.tool_use_id,
                        toolName: "web_search",
                        result: C.content.map((j) => {
                          var Z;
                          return {
                            url: j.url,
                            title: j.title,
                            pageAge: (Z = j.page_age) != null ? Z : null,
                            encryptedContent: j.encrypted_content,
                            type: j.type
                          };
                        }),
                        providerExecuted: !0
                      });
                      for (const j of C.content)
                        v.enqueue({
                          type: "source",
                          sourceType: "url",
                          id: m(),
                          url: j.url,
                          title: j.title,
                          providerMetadata: {
                            anthropic: {
                              pageAge: (g = j.page_age) != null ? g : null
                            }
                          }
                        });
                    } else
                      v.enqueue({
                        type: "tool-result",
                        toolCallId: C.tool_use_id,
                        toolName: "web_search",
                        isError: !0,
                        result: {
                          type: "web_search_tool_result_error",
                          errorCode: C.content.error_code
                        },
                        providerExecuted: !0
                      });
                    return;
                  }
                  case "code_execution_tool_result": {
                    const C = k.content_block;
                    C.content.type === "code_execution_result" ? v.enqueue({
                      type: "tool-result",
                      toolCallId: C.tool_use_id,
                      toolName: "code_execution",
                      result: {
                        type: C.content.type,
                        stdout: C.content.stdout,
                        stderr: C.content.stderr,
                        return_code: C.content.return_code
                      },
                      providerExecuted: !0
                    }) : C.content.type === "code_execution_tool_result_error" && v.enqueue({
                      type: "tool-result",
                      toolCallId: C.tool_use_id,
                      toolName: "code_execution",
                      isError: !0,
                      result: {
                        type: "code_execution_tool_result_error",
                        errorCode: C.content.error_code
                      },
                      providerExecuted: !0
                    });
                    return;
                  }
                  default: {
                    const C = M;
                    throw new Error(
                      `Unsupported content block type: ${C}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (f[k.index] != null) {
                  const M = f[k.index];
                  switch (M.type) {
                    case "text": {
                      v.enqueue({
                        type: "text-end",
                        id: String(k.index)
                      });
                      break;
                    }
                    case "reasoning": {
                      v.enqueue({
                        type: "reasoning-end",
                        id: String(k.index)
                      });
                      break;
                    }
                    case "tool-call":
                      n || (v.enqueue({
                        type: "tool-input-end",
                        id: M.toolCallId
                      }), v.enqueue(M));
                      break;
                  }
                  delete f[k.index];
                }
                p = void 0;
                return;
              }
              case "content_block_delta": {
                const M = k.delta.type;
                switch (M) {
                  case "text_delta": {
                    if (n)
                      return;
                    v.enqueue({
                      type: "text-delta",
                      id: String(k.index),
                      delta: k.delta.text
                    });
                    return;
                  }
                  case "thinking_delta": {
                    v.enqueue({
                      type: "reasoning-delta",
                      id: String(k.index),
                      delta: k.delta.thinking
                    });
                    return;
                  }
                  case "signature_delta": {
                    p === "thinking" && v.enqueue({
                      type: "reasoning-delta",
                      id: String(k.index),
                      delta: "",
                      providerMetadata: {
                        anthropic: {
                          signature: k.delta.signature
                        }
                      }
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const C = f[k.index], j = k.delta.partial_json;
                    if (n) {
                      if ((C == null ? void 0 : C.type) !== "text")
                        return;
                      v.enqueue({
                        type: "text-delta",
                        id: String(k.index),
                        delta: j
                      });
                    } else {
                      if ((C == null ? void 0 : C.type) !== "tool-call")
                        return;
                      v.enqueue({
                        type: "tool-input-delta",
                        id: C.toolCallId,
                        delta: j
                      }), C.input += j;
                    }
                    return;
                  }
                  case "citations_delta": {
                    const C = k.delta.citation;
                    $s(
                      C,
                      i,
                      m,
                      (j) => v.enqueue(j)
                    );
                    return;
                  }
                  default: {
                    const C = M;
                    throw new Error(
                      `Unsupported delta type: ${C}`
                    );
                  }
                }
              }
              case "message_start": {
                d.inputTokens = k.message.usage.input_tokens, d.cachedInputTokens = (b = k.message.usage.cache_read_input_tokens) != null ? b : void 0, y = {
                  anthropic: {
                    usage: k.message.usage,
                    cacheCreationInputTokens: (w = k.message.usage.cache_creation_input_tokens) != null ? w : null
                  }
                }, v.enqueue({
                  type: "response-metadata",
                  id: ($ = k.message.id) != null ? $ : void 0,
                  modelId: (O = k.message.model) != null ? O : void 0
                });
                return;
              }
              case "message_delta": {
                d.outputTokens = k.usage.output_tokens, d.totalTokens = ((E = d.inputTokens) != null ? E : 0) + ((I = k.usage.output_tokens) != null ? I : 0), l = ws({
                  finishReason: k.delta.stop_reason,
                  isJsonResponseFromTool: n
                });
                return;
              }
              case "message_stop": {
                v.enqueue({
                  type: "finish",
                  finishReason: l,
                  usage: d,
                  providerMetadata: y
                });
                return;
              }
              case "error": {
                v.enqueue({ type: "error", error: k.error });
                return;
              }
              default: {
                const M = k;
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
}, u$ = h({
  type: x("message"),
  id: c().nullish(),
  model: c().nullish(),
  content: A(
    Le("type", [
      h({
        type: x("text"),
        text: c(),
        citations: A(Dm).optional()
      }),
      h({
        type: x("thinking"),
        thinking: c(),
        signature: c()
      }),
      h({
        type: x("redacted_thinking"),
        data: c()
      }),
      h({
        type: x("tool_use"),
        id: c(),
        name: c(),
        input: re()
      }),
      h({
        type: x("server_tool_use"),
        id: c(),
        name: c(),
        input: Fe(c(), re()).nullish()
      }),
      h({
        type: x("web_search_tool_result"),
        tool_use_id: c(),
        content: X([
          A(
            h({
              type: x("web_search_result"),
              url: c(),
              title: c(),
              encrypted_content: c(),
              page_age: c().nullish()
            })
          ),
          h({
            type: x("web_search_tool_result_error"),
            error_code: c()
          })
        ])
      }),
      h({
        type: x("code_execution_tool_result"),
        tool_use_id: c(),
        content: X([
          h({
            type: x("code_execution_result"),
            stdout: c(),
            stderr: c(),
            return_code: T()
          }),
          h({
            type: x("code_execution_tool_result_error"),
            error_code: c()
          })
        ])
      })
    ])
  ),
  stop_reason: c().nullish(),
  usage: Ot({
    input_tokens: T(),
    output_tokens: T(),
    cache_creation_input_tokens: T().nullish(),
    cache_read_input_tokens: T().nullish()
  })
}), l$ = Le("type", [
  h({
    type: x("message_start"),
    message: h({
      id: c().nullish(),
      model: c().nullish(),
      usage: Ot({
        input_tokens: T(),
        output_tokens: T(),
        cache_creation_input_tokens: T().nullish(),
        cache_read_input_tokens: T().nullish()
      })
    })
  }),
  h({
    type: x("content_block_start"),
    index: T(),
    content_block: Le("type", [
      h({
        type: x("text"),
        text: c()
      }),
      h({
        type: x("thinking"),
        thinking: c()
      }),
      h({
        type: x("tool_use"),
        id: c(),
        name: c()
      }),
      h({
        type: x("redacted_thinking"),
        data: c()
      }),
      h({
        type: x("server_tool_use"),
        id: c(),
        name: c(),
        input: Fe(c(), re()).nullish()
      }),
      h({
        type: x("web_search_tool_result"),
        tool_use_id: c(),
        content: X([
          A(
            h({
              type: x("web_search_result"),
              url: c(),
              title: c(),
              encrypted_content: c(),
              page_age: c().nullish()
            })
          ),
          h({
            type: x("web_search_tool_result_error"),
            error_code: c()
          })
        ])
      }),
      h({
        type: x("code_execution_tool_result"),
        tool_use_id: c(),
        content: X([
          h({
            type: x("code_execution_result"),
            stdout: c(),
            stderr: c(),
            return_code: T()
          }),
          h({
            type: x("code_execution_tool_result_error"),
            error_code: c()
          })
        ])
      })
    ])
  }),
  h({
    type: x("content_block_delta"),
    index: T(),
    delta: Le("type", [
      h({
        type: x("input_json_delta"),
        partial_json: c()
      }),
      h({
        type: x("text_delta"),
        text: c()
      }),
      h({
        type: x("thinking_delta"),
        thinking: c()
      }),
      h({
        type: x("signature_delta"),
        signature: c()
      }),
      h({
        type: x("citations_delta"),
        citation: Dm
      })
    ])
  }),
  h({
    type: x("content_block_stop"),
    index: T()
  }),
  h({
    type: x("error"),
    error: h({
      type: c(),
      message: c()
    })
  }),
  h({
    type: x("message_delta"),
    delta: h({ stop_reason: c().nullish() }),
    usage: h({ output_tokens: T() })
  }),
  h({
    type: x("message_stop")
  }),
  h({
    type: x("ping")
  })
]), c$ = h({
  signature: c().optional(),
  redactedData: c().optional()
}), d$ = ut({
  id: "anthropic.bash_20241022",
  name: "bash",
  inputSchema: an.object({
    command: an.string(),
    restart: an.boolean().optional()
  })
}), p$ = ut({
  id: "anthropic.bash_20250124",
  name: "bash",
  inputSchema: an.object({
    command: an.string(),
    restart: an.boolean().optional()
  })
}), m$ = ut({
  id: "anthropic.computer_20241022",
  name: "computer",
  inputSchema: h({
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
    coordinate: A(T().int()).optional(),
    text: c().optional()
  })
}), f$ = ut({
  id: "anthropic.computer_20250124",
  name: "computer",
  inputSchema: h({
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
    coordinate: $r([T().int(), T().int()]).optional(),
    duration: T().optional(),
    scroll_amount: T().optional(),
    scroll_direction: ne(["up", "down", "left", "right"]).optional(),
    start_coordinate: $r([T().int(), T().int()]).optional(),
    text: c().optional()
  })
}), g$ = ut({
  id: "anthropic.text_editor_20241022",
  name: "str_replace_editor",
  inputSchema: h({
    command: ne(["view", "create", "str_replace", "insert", "undo_edit"]),
    path: c(),
    file_text: c().optional(),
    insert_line: T().int().optional(),
    new_str: c().optional(),
    old_str: c().optional(),
    view_range: A(T().int()).optional()
  })
}), h$ = ut({
  id: "anthropic.text_editor_20250124",
  name: "str_replace_editor",
  inputSchema: h({
    command: ne(["view", "create", "str_replace", "insert", "undo_edit"]),
    path: c(),
    file_text: c().optional(),
    insert_line: T().int().optional(),
    new_str: c().optional(),
    old_str: c().optional(),
    view_range: A(T().int()).optional()
  })
}), v$ = ut({
  id: "anthropic.text_editor_20250429",
  name: "str_replace_based_edit_tool",
  inputSchema: h({
    command: ne(["view", "create", "str_replace", "insert"]),
    path: c(),
    file_text: c().optional(),
    insert_line: T().int().optional(),
    new_str: c().optional(),
    old_str: c().optional(),
    view_range: A(T().int()).optional()
  })
}), y$ = {
  /**
   * Creates a tool for running a bash command. Must have name "bash".
   *
   * Image results are supported.
   *
   * @param execute - The function to execute the tool. Optional.
   */
  bash_20241022: d$,
  /**
   * Creates a tool for running a bash command. Must have name "bash".
   *
   * Image results are supported.
   *
   * @param execute - The function to execute the tool. Optional.
   */
  bash_20250124: p$,
  /**
   * Creates a tool for editing text. Must have name "str_replace_editor".
   */
  textEditor_20241022: g$,
  /**
   * Creates a tool for editing text. Must have name "str_replace_editor".
   */
  textEditor_20250124: h$,
  /**
   * Creates a tool for editing text. Must have name "str_replace_based_edit_tool".
   * Note: This version does not support the "undo_edit" command.
   */
  textEditor_20250429: v$,
  /**
   * Creates a tool for executing actions on a computer. Must have name "computer".
   *
   * Image results are supported.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   */
  computer_20241022: m$,
  /**
   * Creates a tool for executing actions on a computer. Must have name "computer".
   *
   * Image results are supported.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   * @param execute - The function to execute the tool. Optional.
   */
  computer_20250124: f$,
  /**
   * Creates a web search tool that gives Claude direct access to real-time web content.
   * Must have name "web_search".
   *
   * @param maxUses - Maximum number of web searches Claude can perform during the conversation.
   * @param allowedDomains - Optional list of domains that Claude is allowed to search.
   * @param blockedDomains - Optional list of domains that Claude should avoid when searching.
   * @param userLocation - Optional user location information to provide geographically relevant search results.
   */
  webSearch_20250305: Xw,
  /**
   * Creates a tool for executing Python code. Must have name "code_execution".
   */
  codeExecution_20250522: n$
};
function _$(e = {}) {
  var t;
  const r = (t = Xn(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", o = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": Xr({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), n = (a) => {
    var s;
    return new s$(a, {
      provider: "anthropic.messages",
      baseURL: r,
      headers: o,
      fetch: e.fetch,
      generateId: (s = e.generateId) != null ? s : De,
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
    throw new Ze({ modelId: a, modelType: "textEmbeddingModel" });
  }, i.imageModel = (a) => {
    throw new Ze({ modelId: a, modelType: "imageModel" });
  }, i.tools = y$, i;
}
_$();
var b$ = h({
  error: h({
    code: T().nullable(),
    message: c(),
    status: c()
  })
}), Mn = Ut({
  errorSchema: b$,
  errorToMessage: (e) => e.error.message
}), w$ = h({
  /**
   * Optional. Optional reduced dimension for the output embedding.
   * If set, excessive values in the output embedding are truncated from the end.
   */
  outputDimensionality: T().optional(),
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
}), $$ = class {
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
    const n = await Je({
      provider: "google",
      providerOptions: o,
      schema: w$
    });
    if (e.length > this.maxEmbeddingsPerCall)
      throw new Fo({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const i = Ee(
      await Re(this.config.headers),
      t
    );
    if (e.length === 1) {
      const {
        responseHeaders: l,
        value: d,
        rawValue: f
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
        failedResponseHandler: Mn,
        successfulResponseHandler: Ge(
          k$
        ),
        abortSignal: r,
        fetch: this.config.fetch
      });
      return {
        embeddings: [d.embedding.values],
        usage: void 0,
        response: { headers: l, body: f }
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
      failedResponseHandler: Mn,
      successfulResponseHandler: Ge(
        I$
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
}, I$ = h({
  embeddings: A(h({ values: A(T()) }))
}), k$ = h({
  embedding: h({ values: A(T()) })
});
function wt(e) {
  if (e == null || x$(e))
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
    minLength: f,
    enum: y
  } = e, p = {};
  if (r && (p.description = r), o && (p.required = o), l && (p.format = l), d !== void 0 && (p.enum = [d]), t && (Array.isArray(t) ? t.includes("null") ? (p.type = t.filter((m) => m !== "null")[0], p.nullable = !0) : p.type = t : t === "null" ? p.type = "null" : p.type = t), y !== void 0 && (p.enum = y), n != null && (p.properties = Object.entries(n).reduce(
    (m, [_, v]) => (m[_] = wt(v), m),
    {}
  )), i && (p.items = Array.isArray(i) ? i.map(wt) : wt(i)), a && (p.allOf = a.map(wt)), s)
    if (s.some(
      (m) => typeof m == "object" && (m == null ? void 0 : m.type) === "null"
    )) {
      const m = s.filter(
        (_) => !(typeof _ == "object" && (_ == null ? void 0 : _.type) === "null")
      );
      if (m.length === 1) {
        const _ = wt(m[0]);
        typeof _ == "object" && (p.nullable = !0, Object.assign(p, _));
      } else
        p.anyOf = m.map(wt), p.nullable = !0;
    } else
      p.anyOf = s.map(wt);
  return u && (p.oneOf = u.map(wt)), f !== void 0 && (p.minLength = f), p;
}
function x$(e) {
  return e != null && typeof e == "object" && e.type === "object" && (e.properties == null || Object.keys(e.properties).length === 0) && !e.additionalProperties;
}
function S$(e, t) {
  var r;
  const o = [], n = [];
  let i = !0;
  const a = (r = t == null ? void 0 : t.isGemmaModel) != null ? r : !1;
  for (const { role: s, content: u } of e)
    switch (s) {
      case "system": {
        if (!i)
          throw new we({
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
              const f = d.mediaType === "image/*" ? "image/jpeg" : d.mediaType;
              l.push(
                d.data instanceof URL ? {
                  fileData: {
                    mimeType: f,
                    fileUri: d.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: f,
                    data: ft(d.data)
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
            var d, f, y, p, m, _;
            switch (l.type) {
              case "text":
                return l.text.length === 0 ? void 0 : {
                  text: l.text,
                  thoughtSignature: (f = (d = l.providerOptions) == null ? void 0 : d.google) == null ? void 0 : f.thoughtSignature
                };
              case "reasoning":
                return l.text.length === 0 ? void 0 : {
                  text: l.text,
                  thought: !0,
                  thoughtSignature: (p = (y = l.providerOptions) == null ? void 0 : y.google) == null ? void 0 : p.thoughtSignature
                };
              case "file": {
                if (l.mediaType !== "image/png")
                  throw new we({
                    functionality: "Only PNG images are supported in assistant messages"
                  });
                if (l.data instanceof URL)
                  throw new we({
                    functionality: "File data URLs in assistant messages are not supported"
                  });
                return {
                  inlineData: {
                    mimeType: l.mediaType,
                    data: ft(l.data)
                  }
                };
              }
              case "tool-call":
                return {
                  functionCall: {
                    name: l.toolName,
                    args: l.input
                  },
                  thoughtSignature: (_ = (m = l.providerOptions) == null ? void 0 : m.google) == null ? void 0 : _.thoughtSignature
                };
            }
          }).filter((l) => l !== void 0)
        });
        break;
      }
      case "tool": {
        i = !1, n.push({
          role: "user",
          parts: u.map((l) => ({
            functionResponse: {
              name: l.toolName,
              response: {
                name: l.toolName,
                content: l.output.value
              }
            }
          }))
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
function Is(e) {
  return e.includes("/") ? e : `models/${e}`;
}
var T$ = h({
  responseModalities: A(ne(["TEXT", "IMAGE"])).optional(),
  thinkingConfig: h({
    thinkingBudget: T().optional(),
    includeThoughts: W().optional()
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
  structuredOutputs: W().optional(),
  /**
  Optional. A list of unique safety settings for blocking unsafe content.
   */
  safetySettings: A(
    h({
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
  audioTimestamp: W().optional(),
  /**
   * Optional. Defines labels used in billing reports. Available on Vertex AI only.
   *
   * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls
   */
  labels: Fe(c(), c()).optional()
});
function O$({
  tools: e,
  toolChoice: t,
  modelId: r
}) {
  var o;
  e = e != null && e.length ? e : void 0;
  const n = [], i = r.includes("gemini-2"), a = r.includes("gemini-1.5-flash") && !r.includes("-8b");
  if (e == null)
    return { tools: void 0, toolConfig: void 0, toolWarnings: n };
  const s = e.some((f) => f.type === "function"), u = e.some(
    (f) => f.type === "provider-defined"
  );
  if (s && u && n.push({
    type: "unsupported-tool",
    tool: e.find((f) => f.type === "function"),
    details: "Cannot mix function tools with provider-defined tools in the same request. Please use either function tools or provider-defined tools, but not both."
  }), u) {
    const f = {};
    return e.filter(
      (p) => p.type === "provider-defined"
    ).forEach((p) => {
      switch (p.id) {
        case "google.google_search":
          i ? f.googleSearch = {} : a ? f.googleSearchRetrieval = {
            dynamicRetrievalConfig: {
              mode: p.args.mode,
              dynamicThreshold: p.args.dynamicThreshold
            }
          } : f.googleSearchRetrieval = {};
          break;
        case "google.url_context":
          i ? f.urlContext = {} : n.push({
            type: "unsupported-tool",
            tool: p,
            details: "The URL context tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.code_execution":
          i ? f.codeExecution = {} : n.push({
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
      tools: Object.keys(f).length > 0 ? f : void 0,
      toolConfig: void 0,
      toolWarnings: n
    };
  }
  const l = [];
  for (const f of e)
    switch (f.type) {
      case "function":
        l.push({
          name: f.name,
          description: (o = f.description) != null ? o : "",
          parameters: wt(f.inputSchema)
        });
        break;
      default:
        n.push({ type: "unsupported-tool", tool: f });
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
      const f = d;
      throw new we({
        functionality: `tool choice type: ${f}`
      });
    }
  }
}
function ks({
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
var E$ = h({
  web: h({ uri: c(), title: c() }).nullish(),
  retrievedContext: h({ uri: c(), title: c() }).nullish()
}), qm = h({
  webSearchQueries: A(c()).nullish(),
  retrievalQueries: A(c()).nullish(),
  searchEntryPoint: h({ renderedContent: c() }).nullish(),
  groundingChunks: A(E$).nullish(),
  groundingSupports: A(
    h({
      segment: h({
        startIndex: T().nullish(),
        endIndex: T().nullish(),
        text: c().nullish()
      }),
      segment_text: c().nullish(),
      groundingChunkIndices: A(T()).nullish(),
      supportChunkIndices: A(T()).nullish(),
      confidenceScores: A(T()).nullish(),
      confidenceScore: A(T()).nullish()
    })
  ).nullish(),
  retrievalMetadata: X([
    h({
      webDynamicRetrievalScore: T()
    }),
    h({})
  ]).nullish()
}), N$ = ut({
  id: "google.google_search",
  name: "google_search",
  inputSchema: h({
    mode: ne(["MODE_DYNAMIC", "MODE_UNSPECIFIED"]).default("MODE_UNSPECIFIED"),
    dynamicThreshold: T().default(1)
  })
}), C$ = h({
  retrievedUrl: c(),
  urlRetrievalStatus: c()
}), Zm = h({
  urlMetadata: A(C$)
}), P$ = ut({
  id: "google.url_context",
  name: "url_context",
  inputSchema: h({})
}), A$ = class {
  constructor(e, t) {
    this.specificationVersion = "v2";
    var r;
    this.modelId = e, this.config = t, this.generateId = (r = t.generateId) != null ? r : De;
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
    toolChoice: f,
    providerOptions: y
  }) {
    var p, m;
    const _ = [], v = await Je({
      provider: "google",
      providerOptions: y,
      schema: T$
    });
    ((p = v == null ? void 0 : v.thinkingConfig) == null ? void 0 : p.includeThoughts) === !0 && !this.config.provider.startsWith("google.vertex.") && _.push({
      type: "other",
      message: `The 'includeThoughts' option is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
    });
    const g = this.modelId.toLowerCase().startsWith("gemma-"), { contents: b, systemInstruction: w } = S$(
      e,
      { isGemmaModel: g }
    ), {
      tools: $,
      toolConfig: O,
      toolWarnings: E
    } = O$({
      tools: d,
      toolChoice: f,
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
          ((m = v == null ? void 0 : v.structuredOutputs) == null || m) ? wt(u.schema) : void 0,
          ...(v == null ? void 0 : v.audioTimestamp) && {
            audioTimestamp: v.audioTimestamp
          },
          // provider options:
          responseModalities: v == null ? void 0 : v.responseModalities,
          thinkingConfig: v == null ? void 0 : v.thinkingConfig
        },
        contents: b,
        systemInstruction: g ? void 0 : w,
        safetySettings: v == null ? void 0 : v.safetySettings,
        tools: $,
        toolConfig: O,
        cachedContent: v == null ? void 0 : v.cachedContent,
        labels: v == null ? void 0 : v.labels
      },
      warnings: [..._, ...E]
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u, l, d, f, y;
    const { args: p, warnings: m } = await this.getArgs(e), _ = JSON.stringify(p), v = Ee(
      await Re(this.config.headers),
      e.headers
    ), {
      responseHeaders: g,
      value: b,
      rawValue: w
    } = await Se({
      url: `${this.config.baseURL}/${Is(
        this.modelId
      )}:generateContent`,
      headers: v,
      body: p,
      failedResponseHandler: Mn,
      successfulResponseHandler: Ge(j$),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), $ = b.candidates[0], O = [], E = (r = (t = $.content) == null ? void 0 : t.parts) != null ? r : [], I = b.usageMetadata;
    let k;
    for (const C of E)
      if ("executableCode" in C && ((o = C.executableCode) != null && o.code)) {
        const j = this.config.generateId();
        k = j, O.push({
          type: "tool-call",
          toolCallId: j,
          toolName: "code_execution",
          input: JSON.stringify(C.executableCode),
          providerExecuted: !0
        });
      } else "codeExecutionResult" in C && C.codeExecutionResult ? (O.push({
        type: "tool-result",
        // Assumes a result directly follows its corresponding call part.
        toolCallId: k,
        toolName: "code_execution",
        result: {
          outcome: C.codeExecutionResult.outcome,
          output: C.codeExecutionResult.output
        },
        providerExecuted: !0
      }), k = void 0) : "text" in C && C.text != null && C.text.length > 0 ? O.push({
        type: C.thought === !0 ? "reasoning" : "text",
        text: C.text,
        providerMetadata: C.thoughtSignature ? { google: { thoughtSignature: C.thoughtSignature } } : void 0
      }) : "functionCall" in C ? O.push({
        type: "tool-call",
        toolCallId: this.config.generateId(),
        toolName: C.functionCall.name,
        input: JSON.stringify(C.functionCall.args),
        providerMetadata: C.thoughtSignature ? { google: { thoughtSignature: C.thoughtSignature } } : void 0
      }) : "inlineData" in C && O.push({
        type: "file",
        data: C.inlineData.data,
        mediaType: C.inlineData.mimeType
      });
    const M = (n = xs({
      groundingMetadata: $.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? n : [];
    for (const C of M)
      O.push(C);
    return {
      content: O,
      finishReason: ks({
        finishReason: $.finishReason,
        hasToolCalls: O.some((C) => C.type === "tool-call")
      }),
      usage: {
        inputTokens: (i = I == null ? void 0 : I.promptTokenCount) != null ? i : void 0,
        outputTokens: (a = I == null ? void 0 : I.candidatesTokenCount) != null ? a : void 0,
        totalTokens: (s = I == null ? void 0 : I.totalTokenCount) != null ? s : void 0,
        reasoningTokens: (u = I == null ? void 0 : I.thoughtsTokenCount) != null ? u : void 0,
        cachedInputTokens: (l = I == null ? void 0 : I.cachedContentTokenCount) != null ? l : void 0
      },
      warnings: m,
      providerMetadata: {
        google: {
          groundingMetadata: (d = $.groundingMetadata) != null ? d : null,
          urlContextMetadata: (f = $.urlContextMetadata) != null ? f : null,
          safetyRatings: (y = $.safetyRatings) != null ? y : null,
          usageMetadata: I ?? null
        }
      },
      request: { body: _ },
      response: {
        // TODO timestamp, model id, id
        headers: g,
        body: w
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), o = JSON.stringify(t), n = Ee(
      await Re(this.config.headers),
      e.headers
    ), { responseHeaders: i, value: a } = await Se({
      url: `${this.config.baseURL}/${Is(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers: n,
      body: t,
      failedResponseHandler: Mn,
      successfulResponseHandler: tn(z$),
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
    let f = !1, y = null, p = null, m = 0;
    const _ = /* @__PURE__ */ new Set();
    let v;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(g) {
            g.enqueue({ type: "stream-start", warnings: r });
          },
          transform(g, b) {
            var w, $, O, E, I, k, M, C, j, Z, L;
            if (e.includeRawChunks && b.enqueue({ type: "raw", rawValue: g.rawValue }), !g.success) {
              b.enqueue({ type: "error", error: g.error });
              return;
            }
            const ce = g.value, N = ce.usageMetadata;
            N != null && (u.inputTokens = (w = N.promptTokenCount) != null ? w : void 0, u.outputTokens = ($ = N.candidatesTokenCount) != null ? $ : void 0, u.totalTokens = (O = N.totalTokenCount) != null ? O : void 0, u.reasoningTokens = (E = N.thoughtsTokenCount) != null ? E : void 0, u.cachedInputTokens = (I = N.cachedContentTokenCount) != null ? I : void 0);
            const se = (k = ce.candidates) == null ? void 0 : k[0];
            if (se == null)
              return;
            const ke = se.content, Pe = xs({
              groundingMetadata: se.groundingMetadata,
              generateId: d
            });
            if (Pe != null)
              for (const oe of Pe)
                oe.sourceType === "url" && !_.has(oe.url) && (_.add(oe.url), b.enqueue(oe));
            if (ke != null) {
              const oe = (M = ke.parts) != null ? M : [];
              for (const z of oe)
                if ("executableCode" in z && ((C = z.executableCode) != null && C.code)) {
                  const Y = d();
                  v = Y, b.enqueue({
                    type: "tool-call",
                    toolCallId: Y,
                    toolName: "code_execution",
                    input: JSON.stringify(z.executableCode),
                    providerExecuted: !0
                  }), f = !0;
                } else if ("codeExecutionResult" in z && z.codeExecutionResult) {
                  const Y = v;
                  Y && (b.enqueue({
                    type: "tool-result",
                    toolCallId: Y,
                    toolName: "code_execution",
                    result: {
                      outcome: z.codeExecutionResult.outcome,
                      output: z.codeExecutionResult.output
                    },
                    providerExecuted: !0
                  }), v = void 0);
                } else "text" in z && z.text != null && z.text.length > 0 && (z.thought === !0 ? (y !== null && (b.enqueue({
                  type: "text-end",
                  id: y
                }), y = null), p === null && (p = String(m++), b.enqueue({
                  type: "reasoning-start",
                  id: p,
                  providerMetadata: z.thoughtSignature ? {
                    google: {
                      thoughtSignature: z.thoughtSignature
                    }
                  } : void 0
                })), b.enqueue({
                  type: "reasoning-delta",
                  id: p,
                  delta: z.text,
                  providerMetadata: z.thoughtSignature ? {
                    google: { thoughtSignature: z.thoughtSignature }
                  } : void 0
                })) : (p !== null && (b.enqueue({
                  type: "reasoning-end",
                  id: p
                }), p = null), y === null && (y = String(m++), b.enqueue({
                  type: "text-start",
                  id: y,
                  providerMetadata: z.thoughtSignature ? {
                    google: {
                      thoughtSignature: z.thoughtSignature
                    }
                  } : void 0
                })), b.enqueue({
                  type: "text-delta",
                  id: y,
                  delta: z.text,
                  providerMetadata: z.thoughtSignature ? {
                    google: { thoughtSignature: z.thoughtSignature }
                  } : void 0
                })));
              const qe = R$(ke.parts);
              if (qe != null)
                for (const z of qe)
                  b.enqueue({
                    type: "file",
                    mediaType: z.inlineData.mimeType,
                    data: z.inlineData.data
                  });
              const Oe = M$({
                parts: ke.parts,
                generateId: d
              });
              if (Oe != null)
                for (const z of Oe)
                  b.enqueue({
                    type: "tool-input-start",
                    id: z.toolCallId,
                    toolName: z.toolName,
                    providerMetadata: z.providerMetadata
                  }), b.enqueue({
                    type: "tool-input-delta",
                    id: z.toolCallId,
                    delta: z.args,
                    providerMetadata: z.providerMetadata
                  }), b.enqueue({
                    type: "tool-input-end",
                    id: z.toolCallId,
                    providerMetadata: z.providerMetadata
                  }), b.enqueue({
                    type: "tool-call",
                    toolCallId: z.toolCallId,
                    toolName: z.toolName,
                    input: z.args,
                    providerMetadata: z.providerMetadata
                  }), f = !0;
            }
            se.finishReason != null && (s = ks({
              finishReason: se.finishReason,
              hasToolCalls: f
            }), l = {
              google: {
                groundingMetadata: (j = se.groundingMetadata) != null ? j : null,
                urlContextMetadata: (Z = se.urlContextMetadata) != null ? Z : null,
                safetyRatings: (L = se.safetyRatings) != null ? L : null
              }
            }, N != null && (l.google.usageMetadata = N));
          },
          flush(g) {
            y !== null && g.enqueue({
              type: "text-end",
              id: y
            }), p !== null && g.enqueue({
              type: "reasoning-end",
              id: p
            }), g.enqueue({
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
function M$({
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
function R$(e) {
  return e == null ? void 0 : e.filter(
    (t) => "inlineData" in t
  );
}
function xs({
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
var Lm = h({
  parts: A(
    X([
      // note: order matters since text can be fully empty
      h({
        functionCall: h({
          name: c(),
          args: re()
        }),
        thoughtSignature: c().nullish()
      }),
      h({
        inlineData: h({
          mimeType: c(),
          data: c()
        })
      }),
      h({
        executableCode: h({
          language: c(),
          code: c()
        }).nullish(),
        codeExecutionResult: h({
          outcome: c(),
          output: c()
        }).nullish(),
        text: c().nullish(),
        thought: W().nullish(),
        thoughtSignature: c().nullish()
      })
    ])
  ).nullish()
}), Fm = h({
  category: c().nullish(),
  probability: c().nullish(),
  probabilityScore: T().nullish(),
  severity: c().nullish(),
  severityScore: T().nullish(),
  blocked: W().nullish()
}), Jm = h({
  cachedContentTokenCount: T().nullish(),
  thoughtsTokenCount: T().nullish(),
  promptTokenCount: T().nullish(),
  candidatesTokenCount: T().nullish(),
  totalTokenCount: T().nullish()
}), j$ = h({
  candidates: A(
    h({
      content: Lm.nullish().or(h({}).strict()),
      finishReason: c().nullish(),
      safetyRatings: A(Fm).nullish(),
      groundingMetadata: qm.nullish(),
      urlContextMetadata: Zm.nullish()
    })
  ),
  usageMetadata: Jm.nullish()
}), z$ = h({
  candidates: A(
    h({
      content: Lm.nullish(),
      finishReason: c().nullish(),
      safetyRatings: A(Fm).nullish(),
      groundingMetadata: qm.nullish(),
      urlContextMetadata: Zm.nullish()
    })
  ).nullish(),
  usageMetadata: Jm.nullish()
}), U$ = Pa({
  id: "google.code_execution",
  name: "code_execution",
  inputSchema: h({
    language: c().describe("The programming language of the code."),
    code: c().describe("The code to be executed.")
  }),
  outputSchema: h({
    outcome: c().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
    output: c().describe("The output from the code execution.")
  })
}), D$ = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch: N$,
  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext: P$,
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
  codeExecution: U$
}, q$ = class {
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
      abortSignal: f
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
    const p = await Je({
      provider: "google",
      providerOptions: l,
      schema: L$
    }), m = (o = (r = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : r.call(t)) != null ? o : /* @__PURE__ */ new Date(), _ = {
      sampleCount: i
    };
    s != null && (_.aspectRatio = s), p && Object.assign(_, p);
    const v = {
      instances: [{ prompt: n }],
      parameters: _
    }, { responseHeaders: g, value: b } = await Se({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: Ee(await Re(this.config.headers), d),
      body: v,
      failedResponseHandler: Mn,
      successfulResponseHandler: Ge(
        Z$
      ),
      abortSignal: f,
      fetch: this.config.fetch
    });
    return {
      images: b.predictions.map(
        (w) => w.bytesBase64Encoded
      ),
      warnings: y ?? [],
      providerMetadata: {
        google: {
          images: b.predictions.map((w) => ({
            // Add any prediction-specific metadata here
          }))
        }
      },
      response: {
        timestamp: m,
        modelId: this.modelId,
        headers: g
      }
    };
  }
}, Z$ = h({
  predictions: A(h({ bytesBase64Encoded: c() })).default([])
}), L$ = h({
  personGeneration: ne(["dont_allow", "allow_adult", "allow_all"]).nullish(),
  aspectRatio: ne(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish()
});
function F$(e = {}) {
  var t;
  const r = (t = Xn(e.baseURL)) != null ? t : "https://generativelanguage.googleapis.com/v1beta", o = () => ({
    "x-goog-api-key": Xr({
      apiKey: e.apiKey,
      environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
      description: "Google Generative AI"
    }),
    ...e.headers
  }), n = (u) => {
    var l;
    return new A$(u, {
      provider: "google.generative-ai",
      baseURL: r,
      headers: o,
      generateId: (l = e.generateId) != null ? l : De,
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
  }, i = (u) => new $$(u, {
    provider: "google.generative-ai",
    baseURL: r,
    headers: o,
    fetch: e.fetch
  }), a = (u, l = {}) => new q$(u, l, {
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
  return s.languageModel = n, s.chat = n, s.generativeAI = n, s.embedding = i, s.textEmbedding = i, s.textEmbeddingModel = i, s.image = a, s.imageModel = a, s.tools = D$, s;
}
F$();
function J$(e) {
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
                    image_url: a.data instanceof URL ? a.data.toString() : `data:${s};base64,${ft(a.data)}`
                  };
                } else {
                  if (a.mediaType === "application/pdf")
                    return {
                      type: "document_url",
                      document_url: a.data.toString()
                    };
                  throw new we({
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
function Ss({
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
function Ts(e) {
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
var G$ = h({
  /**
  Whether to inject a safety prompt before all conversations.
  
  Defaults to `false`.
     */
  safePrompt: W().optional(),
  documentImageLimit: T().optional(),
  documentPageLimit: T().optional()
}), V$ = h({
  object: x("error"),
  message: c(),
  type: c(),
  param: c().nullable(),
  code: c().nullable()
}), zo = Ut({
  errorSchema: V$,
  errorToMessage: (e) => e.message
});
function B$({
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
      throw new we({
        functionality: `tool choice type: ${i}`
      });
    }
  }
}
var W$ = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      "application/pdf": [/^https:\/\/.*$/]
    };
    var r;
    this.modelId = e, this.config = t, this.generateId = (r = t.generateId) != null ? r : De;
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
    tools: f,
    toolChoice: y
  }) {
    var p;
    const m = [], _ = (p = await Je({
      provider: "mistral",
      providerOptions: d,
      schema: G$
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
    }), u != null && u.type === "json" && u.schema != null && m.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is not supported"
    }), (u == null ? void 0 : u.type) === "json" && (e = xw({
      messages: e,
      schema: u.schema
    }));
    const v = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: _.safePrompt,
      // standardized settings:
      max_tokens: t,
      temperature: r,
      top_p: o,
      random_seed: l,
      // response format:
      // TODO add JSON schema support (see OpenAI implementation)
      response_format: (u == null ? void 0 : u.type) === "json" ? { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: _.documentImageLimit,
      document_page_limit: _.documentPageLimit,
      // messages:
      messages: J$(e)
    }, {
      tools: g,
      toolChoice: b,
      toolWarnings: w
    } = B$({
      tools: f,
      toolChoice: y
    });
    return {
      args: {
        ...v,
        tools: g,
        tool_choice: b
      },
      warnings: [...m, ...w]
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = await this.getArgs(e), {
      responseHeaders: o,
      value: n,
      rawValue: i
    } = await Se({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ee(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: zo,
      successfulResponseHandler: Ge(
        H$
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), a = n.choices[0], s = [];
    if (a.message.content != null && Array.isArray(a.message.content))
      for (const u of a.message.content)
        if (u.type === "thinking") {
          const l = Os(u.thinking);
          l.length > 0 && s.push({ type: "reasoning", text: l });
        } else u.type === "text" && u.text.length > 0 && s.push({ type: "text", text: u.text });
    else {
      const u = Es(a.message.content);
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
      finishReason: Ts(a.finish_reason),
      usage: {
        inputTokens: n.usage.prompt_tokens,
        outputTokens: n.usage.completion_tokens,
        totalTokens: n.usage.total_tokens
      },
      request: { body: t },
      response: {
        ...Ss(n),
        headers: o,
        body: i
      },
      warnings: r
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), o = { ...t, stream: !0 }, { responseHeaders: n, value: i } = await Se({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ee(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: zo,
      successfulResponseHandler: tn(
        K$
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
    const f = this.generateId;
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
            const m = y.value;
            u && (u = !1, p.enqueue({
              type: "response-metadata",
              ...Ss(m)
            })), m.usage != null && (s.inputTokens = m.usage.prompt_tokens, s.outputTokens = m.usage.completion_tokens, s.totalTokens = m.usage.total_tokens);
            const _ = m.choices[0], v = _.delta, g = Es(v.content);
            if (v.content != null && Array.isArray(v.content)) {
              for (const b of v.content)
                if (b.type === "thinking") {
                  const w = Os(b.thinking);
                  w.length > 0 && (d == null && (l && (p.enqueue({ type: "text-end", id: "0" }), l = !1), d = f(), p.enqueue({
                    type: "reasoning-start",
                    id: d
                  })), p.enqueue({
                    type: "reasoning-delta",
                    id: d,
                    delta: w
                  }));
                }
            }
            if (g != null && g.length > 0 && (l || (d != null && (p.enqueue({
              type: "reasoning-end",
              id: d
            }), d = null), p.enqueue({ type: "text-start", id: "0" }), l = !0), p.enqueue({
              type: "text-delta",
              id: "0",
              delta: g
            })), (v == null ? void 0 : v.tool_calls) != null)
              for (const b of v.tool_calls) {
                const w = b.id, $ = b.function.name, O = b.function.arguments;
                p.enqueue({
                  type: "tool-input-start",
                  id: w,
                  toolName: $
                }), p.enqueue({
                  type: "tool-input-delta",
                  id: w,
                  delta: O
                }), p.enqueue({
                  type: "tool-input-end",
                  id: w
                }), p.enqueue({
                  type: "tool-call",
                  toolCallId: w,
                  toolName: $,
                  input: O
                });
              }
            _.finish_reason != null && (a = Ts(_.finish_reason));
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
function Os(e) {
  return e.filter((t) => t.type === "text").map((t) => t.text).join("");
}
function Es(e) {
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
var Gm = X([
  c(),
  A(
    Le("type", [
      h({
        type: x("text"),
        text: c()
      }),
      h({
        type: x("image_url"),
        image_url: X([
          c(),
          h({
            url: c(),
            detail: c().nullable()
          })
        ])
      }),
      h({
        type: x("reference"),
        reference_ids: A(T())
      }),
      h({
        type: x("thinking"),
        thinking: A(
          h({
            type: x("text"),
            text: c()
          })
        )
      })
    ])
  )
]).nullish(), Vm = h({
  prompt_tokens: T(),
  completion_tokens: T(),
  total_tokens: T()
}), H$ = h({
  id: c().nullish(),
  created: T().nullish(),
  model: c().nullish(),
  choices: A(
    h({
      message: h({
        role: x("assistant"),
        content: Gm,
        tool_calls: A(
          h({
            id: c(),
            function: h({ name: c(), arguments: c() })
          })
        ).nullish()
      }),
      index: T(),
      finish_reason: c().nullish()
    })
  ),
  object: x("chat.completion"),
  usage: Vm
}), K$ = h({
  id: c().nullish(),
  created: T().nullish(),
  model: c().nullish(),
  choices: A(
    h({
      delta: h({
        role: ne(["assistant"]).optional(),
        content: Gm,
        tool_calls: A(
          h({
            id: c(),
            function: h({ name: c(), arguments: c() })
          })
        ).nullish()
      }),
      finish_reason: c().nullish(),
      index: T()
    })
  ),
  usage: Vm.nullish()
}), Y$ = class {
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
      throw new Fo({
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
      headers: Ee(this.config.headers(), r),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: zo,
      successfulResponseHandler: Ge(
        X$
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
}, X$ = h({
  data: A(h({ embedding: A(T()) })),
  usage: h({ prompt_tokens: T() }).nullish()
});
function Q$(e = {}) {
  var t;
  const r = (t = Xn(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", o = () => ({
    Authorization: `Bearer ${Xr({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), n = (s) => new W$(s, {
    provider: "mistral.chat",
    baseURL: r,
    headers: o,
    fetch: e.fetch,
    generateId: e.generateId
  }), i = (s) => new Y$(s, {
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
    throw new Ze({ modelId: s, modelType: "imageModel" });
  }, a;
}
Q$();
var Aa = h({
  error: h({
    message: c(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: c().nullish(),
    param: $t().nullish(),
    code: X([c(), T()]).nullish()
  })
}), kt = Ut({
  errorSchema: Aa,
  errorToMessage: (e) => e.error.message
});
function eI({
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
                  const f = a.mediaType === "image/*" ? "image/jpeg" : a.mediaType;
                  return {
                    type: "image_url",
                    image_url: {
                      url: a.data instanceof URL ? a.data.toString() : `data:${f};base64,${ft(a.data)}`,
                      // OpenAI specific extension: image detail
                      detail: (l = (u = a.providerOptions) == null ? void 0 : u.openai) == null ? void 0 : l.imageDetail
                    }
                  };
                } else if (a.mediaType.startsWith("audio/")) {
                  if (a.data instanceof URL)
                    throw new we({
                      functionality: "audio file parts with URLs"
                    });
                  switch (a.mediaType) {
                    case "audio/wav":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: ft(a.data),
                          format: "wav"
                        }
                      };
                    case "audio/mp3":
                    case "audio/mpeg":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: ft(a.data),
                          format: "mp3"
                        }
                      };
                    default:
                      throw new we({
                        functionality: `audio content parts with media type ${a.mediaType}`
                      });
                  }
                } else if (a.mediaType === "application/pdf") {
                  if (a.data instanceof URL)
                    throw new we({
                      functionality: "PDF file parts with URLs"
                    });
                  return {
                    type: "file",
                    file: typeof a.data == "string" && a.data.startsWith("file-") ? { file_id: a.data } : {
                      filename: (d = a.filename) != null ? d : `part-${s}.pdf`,
                      file_data: `data:application/pdf;base64,${ft(a.data)}`
                    }
                  };
                } else
                  throw new we({
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
function Ns({
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
function Cs(e) {
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
var tI = h({
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   *
   * Accepts a JSON object that maps tokens (specified by their token ID in
   * the GPT tokenizer) to an associated bias value from -100 to 100.
   */
  logitBias: Fe(Sm(), T()).optional(),
  /**
   * Return the log probabilities of the tokens.
   *
   * Setting to true will return the log probabilities of the tokens that
   * were generated.
   *
   * Setting to a number will return the log probabilities of the top n
   * tokens that were generated.
   */
  logprobs: X([W(), T()]).optional(),
  /**
   * Whether to enable parallel function calling during tool use. Default to true.
   */
  parallelToolCalls: W().optional(),
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
  maxCompletionTokens: T().optional(),
  /**
   * Whether to enable persistence in responses API.
   */
  store: W().optional(),
  /**
   * Metadata to associate with the request.
   */
  metadata: Fe(c().max(64), c().max(512)).optional(),
  /**
   * Parameters for prediction mode.
   */
  prediction: Fe(c(), $t()).optional(),
  /**
   * Whether to use structured outputs.
   *
   * @default true
   */
  structuredOutputs: W().optional(),
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
  strictJsonSchema: W().optional(),
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
}), Bm = h({
  key: c(),
  type: ne(["eq", "ne", "gt", "gte", "lt", "lte"]),
  value: X([c(), T(), W()])
}), Wm = h({
  type: ne(["and", "or"]),
  filters: A(
    X([Bm, Hr(() => Wm)])
  )
}), nI = X([Bm, Wm]), Hm = h({
  /**
   * List of vector store IDs to search through. If not provided, searches all available vector stores.
   */
  vectorStoreIds: A(c()).optional(),
  /**
   * Maximum number of search results to return. Defaults to 10.
   */
  maxNumResults: T().optional(),
  /**
   * Ranking options for the search.
   */
  ranking: h({
    ranker: ne(["auto", "default-2024-08-21"]).optional()
  }).optional(),
  /**
   * A filter to apply based on file attributes.
   */
  filters: nI.optional()
}), rI = ut({
  id: "openai.file_search",
  name: "file_search",
  inputSchema: h({
    query: c()
  })
}), Km = h({
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
  userLocation: h({
    /**
     * Type of location (always 'approximate')
     */
    type: x("approximate"),
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
}), oI = ut({
  id: "openai.web_search_preview",
  name: "web_search_preview",
  inputSchema: h({
    action: Le("type", [
      h({
        type: x("search"),
        query: c()
      }),
      h({
        type: x("open_page"),
        url: c()
      }),
      h({
        type: x("find"),
        url: c(),
        pattern: c()
      })
    ]).nullish()
  })
});
function iI({
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
      case "provider-defined":
        switch (s.id) {
          case "openai.file_search": {
            const u = Hm.parse(s.args);
            i.push({
              type: "file_search",
              vector_store_ids: u.vectorStoreIds,
              max_num_results: u.maxNumResults,
              ranking_options: u.ranking ? { ranker: u.ranking.ranker } : void 0,
              filters: u.filters
            });
            break;
          }
          case "openai.web_search_preview": {
            const u = Km.parse(s.args);
            i.push({
              type: "web_search_preview",
              search_context_size: u.searchContextSize,
              user_location: u.userLocation
            });
            break;
          }
          default:
            n.push({ type: "unsupported-tool", tool: s });
            break;
        }
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
      throw new we({
        functionality: `tool choice type: ${s}`
      });
    }
  }
}
var aI = class {
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
    toolChoice: f,
    providerOptions: y
  }) {
    var p, m, _, v;
    const g = [], b = (p = await Je({
      provider: "openai",
      providerOptions: y,
      schema: tI
    })) != null ? p : {}, w = (m = b.structuredOutputs) != null ? m : !0;
    n != null && g.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (u == null ? void 0 : u.type) === "json" && u.schema != null && !w && g.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const { messages: $, warnings: O } = eI(
      {
        prompt: e,
        systemMessageMode: dI(this.modelId)
      }
    );
    g.push(...O);
    const E = (_ = b.strictJsonSchema) != null ? _ : !1, I = {
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
      response_format: (u == null ? void 0 : u.type) === "json" ? w && u.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: E,
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
      messages: $
    };
    Xm(this.modelId) ? (I.temperature != null && (I.temperature = void 0, g.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), I.top_p != null && (I.top_p = void 0, g.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })), I.frequency_penalty != null && (I.frequency_penalty = void 0, g.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), I.presence_penalty != null && (I.presence_penalty = void 0, g.push({
      type: "unsupported-setting",
      setting: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), I.logit_bias != null && (I.logit_bias = void 0, g.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), I.logprobs != null && (I.logprobs = void 0, g.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    })), I.top_logprobs != null && (I.top_logprobs = void 0, g.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), I.max_tokens != null && (I.max_completion_tokens == null && (I.max_completion_tokens = I.max_tokens), I.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && I.temperature != null && (I.temperature = void 0, g.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for the search preview models and has been removed."
    })), b.serviceTier === "flex" && !lI(this.modelId) && (g.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), I.service_tier = void 0), b.serviceTier === "priority" && !cI(this.modelId) && (g.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), I.service_tier = void 0);
    const {
      tools: k,
      toolChoice: M,
      toolWarnings: C
    } = iI({
      tools: d,
      toolChoice: f,
      structuredOutputs: w,
      strictJsonSchema: E
    });
    return {
      args: {
        ...I,
        tools: k,
        tool_choice: M
      },
      warnings: [...g, ...C]
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u, l, d, f, y, p, m;
    const { args: _, warnings: v } = await this.getArgs(e), {
      responseHeaders: g,
      value: b,
      rawValue: w
    } = await Se({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), e.headers),
      body: _,
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        sI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), $ = b.choices[0], O = [], E = $.message.content;
    E != null && E.length > 0 && O.push({ type: "text", text: E });
    for (const C of (t = $.message.tool_calls) != null ? t : [])
      O.push({
        type: "tool-call",
        toolCallId: (r = C.id) != null ? r : De(),
        toolName: C.function.name,
        input: C.function.arguments
      });
    for (const C of (o = $.message.annotations) != null ? o : [])
      O.push({
        type: "source",
        sourceType: "url",
        id: De(),
        url: C.url,
        title: C.title
      });
    const I = (n = b.usage) == null ? void 0 : n.completion_tokens_details, k = (i = b.usage) == null ? void 0 : i.prompt_tokens_details, M = { openai: {} };
    return (I == null ? void 0 : I.accepted_prediction_tokens) != null && (M.openai.acceptedPredictionTokens = I == null ? void 0 : I.accepted_prediction_tokens), (I == null ? void 0 : I.rejected_prediction_tokens) != null && (M.openai.rejectedPredictionTokens = I == null ? void 0 : I.rejected_prediction_tokens), ((a = $.logprobs) == null ? void 0 : a.content) != null && (M.openai.logprobs = $.logprobs.content), {
      content: O,
      finishReason: Cs($.finish_reason),
      usage: {
        inputTokens: (u = (s = b.usage) == null ? void 0 : s.prompt_tokens) != null ? u : void 0,
        outputTokens: (d = (l = b.usage) == null ? void 0 : l.completion_tokens) != null ? d : void 0,
        totalTokens: (y = (f = b.usage) == null ? void 0 : f.total_tokens) != null ? y : void 0,
        reasoningTokens: (p = I == null ? void 0 : I.reasoning_tokens) != null ? p : void 0,
        cachedInputTokens: (m = k == null ? void 0 : k.cached_tokens) != null ? m : void 0
      },
      request: { body: _ },
      response: {
        ...Ns(b),
        headers: g,
        body: w
      },
      warnings: v,
      providerMetadata: M
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
      headers: Ee(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: kt,
      successfulResponseHandler: tn(
        uI
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
    const f = { openai: {} };
    return {
      stream: i.pipeThrough(
        new TransformStream({
          start(y) {
            y.enqueue({ type: "stream-start", warnings: r });
          },
          transform(y, p) {
            var m, _, v, g, b, w, $, O, E, I, k, M, C, j, Z, L, ce, N, se, ke, Pe, oe, qe, Oe;
            if (e.includeRawChunks && p.enqueue({ type: "raw", rawValue: y.rawValue }), !y.success) {
              s = "error", p.enqueue({ type: "error", error: y.error });
              return;
            }
            const z = y.value;
            if ("error" in z) {
              s = "error", p.enqueue({ type: "error", error: z.error });
              return;
            }
            l && (l = !1, p.enqueue({
              type: "response-metadata",
              ...Ns(z)
            })), z.usage != null && (u.inputTokens = (m = z.usage.prompt_tokens) != null ? m : void 0, u.outputTokens = (_ = z.usage.completion_tokens) != null ? _ : void 0, u.totalTokens = (v = z.usage.total_tokens) != null ? v : void 0, u.reasoningTokens = (b = (g = z.usage.completion_tokens_details) == null ? void 0 : g.reasoning_tokens) != null ? b : void 0, u.cachedInputTokens = ($ = (w = z.usage.prompt_tokens_details) == null ? void 0 : w.cached_tokens) != null ? $ : void 0, ((O = z.usage.completion_tokens_details) == null ? void 0 : O.accepted_prediction_tokens) != null && (f.openai.acceptedPredictionTokens = (E = z.usage.completion_tokens_details) == null ? void 0 : E.accepted_prediction_tokens), ((I = z.usage.completion_tokens_details) == null ? void 0 : I.rejected_prediction_tokens) != null && (f.openai.rejectedPredictionTokens = (k = z.usage.completion_tokens_details) == null ? void 0 : k.rejected_prediction_tokens));
            const Y = z.choices[0];
            if ((Y == null ? void 0 : Y.finish_reason) != null && (s = Cs(Y.finish_reason)), ((M = Y == null ? void 0 : Y.logprobs) == null ? void 0 : M.content) != null && (f.openai.logprobs = Y.logprobs.content), (Y == null ? void 0 : Y.delta) == null)
              return;
            const ye = Y.delta;
            if (ye.content != null && (d || (p.enqueue({ type: "text-start", id: "0" }), d = !0), p.enqueue({
              type: "text-delta",
              id: "0",
              delta: ye.content
            })), ye.tool_calls != null)
              for (const te of ye.tool_calls) {
                const Ae = te.index;
                if (a[Ae] == null) {
                  if (te.type !== "function")
                    throw new yo({
                      data: te,
                      message: "Expected 'function' type."
                    });
                  if (te.id == null)
                    throw new yo({
                      data: te,
                      message: "Expected 'id' to be a string."
                    });
                  if (((C = te.function) == null ? void 0 : C.name) == null)
                    throw new yo({
                      data: te,
                      message: "Expected 'function.name' to be a string."
                    });
                  p.enqueue({
                    type: "tool-input-start",
                    id: te.id,
                    toolName: te.function.name
                  }), a[Ae] = {
                    id: te.id,
                    type: "function",
                    function: {
                      name: te.function.name,
                      arguments: (j = te.function.arguments) != null ? j : ""
                    },
                    hasFinished: !1
                  };
                  const fe = a[Ae];
                  ((Z = fe.function) == null ? void 0 : Z.name) != null && ((L = fe.function) == null ? void 0 : L.arguments) != null && (fe.function.arguments.length > 0 && p.enqueue({
                    type: "tool-input-delta",
                    id: fe.id,
                    delta: fe.function.arguments
                  }), ys(fe.function.arguments) && (p.enqueue({
                    type: "tool-input-end",
                    id: fe.id
                  }), p.enqueue({
                    type: "tool-call",
                    toolCallId: (ce = fe.id) != null ? ce : De(),
                    toolName: fe.function.name,
                    input: fe.function.arguments
                  }), fe.hasFinished = !0));
                  continue;
                }
                const me = a[Ae];
                me.hasFinished || (((N = te.function) == null ? void 0 : N.arguments) != null && (me.function.arguments += (ke = (se = te.function) == null ? void 0 : se.arguments) != null ? ke : ""), p.enqueue({
                  type: "tool-input-delta",
                  id: me.id,
                  delta: (Pe = te.function.arguments) != null ? Pe : ""
                }), ((oe = me.function) == null ? void 0 : oe.name) != null && ((qe = me.function) == null ? void 0 : qe.arguments) != null && ys(me.function.arguments) && (p.enqueue({
                  type: "tool-input-end",
                  id: me.id
                }), p.enqueue({
                  type: "tool-call",
                  toolCallId: (Oe = me.id) != null ? Oe : De(),
                  toolName: me.function.name,
                  input: me.function.arguments
                }), me.hasFinished = !0));
              }
            if (ye.annotations != null)
              for (const te of ye.annotations)
                p.enqueue({
                  type: "source",
                  sourceType: "url",
                  id: De(),
                  url: te.url,
                  title: te.title
                });
          },
          flush(y) {
            d && y.enqueue({ type: "text-end", id: "0" }), y.enqueue({
              type: "finish",
              finishReason: s,
              usage: u,
              ...f != null ? { providerMetadata: f } : {}
            });
          }
        })
      ),
      request: { body: o },
      response: { headers: n }
    };
  }
}, Ym = h({
  prompt_tokens: T().nullish(),
  completion_tokens: T().nullish(),
  total_tokens: T().nullish(),
  prompt_tokens_details: h({
    cached_tokens: T().nullish()
  }).nullish(),
  completion_tokens_details: h({
    reasoning_tokens: T().nullish(),
    accepted_prediction_tokens: T().nullish(),
    rejected_prediction_tokens: T().nullish()
  }).nullish()
}).nullish(), sI = h({
  id: c().nullish(),
  created: T().nullish(),
  model: c().nullish(),
  choices: A(
    h({
      message: h({
        role: x("assistant").nullish(),
        content: c().nullish(),
        tool_calls: A(
          h({
            id: c().nullish(),
            type: x("function"),
            function: h({
              name: c(),
              arguments: c()
            })
          })
        ).nullish(),
        annotations: A(
          h({
            type: x("url_citation"),
            start_index: T(),
            end_index: T(),
            url: c(),
            title: c()
          })
        ).nullish()
      }),
      index: T(),
      logprobs: h({
        content: A(
          h({
            token: c(),
            logprob: T(),
            top_logprobs: A(
              h({
                token: c(),
                logprob: T()
              })
            )
          })
        ).nullish()
      }).nullish(),
      finish_reason: c().nullish()
    })
  ),
  usage: Ym
}), uI = X([
  h({
    id: c().nullish(),
    created: T().nullish(),
    model: c().nullish(),
    choices: A(
      h({
        delta: h({
          role: ne(["assistant"]).nullish(),
          content: c().nullish(),
          tool_calls: A(
            h({
              index: T(),
              id: c().nullish(),
              type: x("function").nullish(),
              function: h({
                name: c().nullish(),
                arguments: c().nullish()
              })
            })
          ).nullish(),
          annotations: A(
            h({
              type: x("url_citation"),
              start_index: T(),
              end_index: T(),
              url: c(),
              title: c()
            })
          ).nullish()
        }).nullish(),
        logprobs: h({
          content: A(
            h({
              token: c(),
              logprob: T(),
              top_logprobs: A(
                h({
                  token: c(),
                  logprob: T()
                })
              )
            })
          ).nullish()
        }).nullish(),
        finish_reason: c().nullish(),
        index: T()
      })
    ),
    usage: Ym
  }),
  Aa
]);
function Xm(e) {
  return (e.startsWith("o") || e.startsWith("gpt-5")) && !e.startsWith("gpt-5-chat");
}
function lI(e) {
  return e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat");
}
function cI(e) {
  return e.startsWith("gpt-4") || e.startsWith("gpt-5-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") || e.startsWith("o3") || e.startsWith("o4-mini");
}
function dI(e) {
  var t, r;
  return Xm(e) ? (r = (t = pI[e]) == null ? void 0 : t.systemMessageMode) != null ? r : "developer" : "system";
}
var pI = {
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
function mI({
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
        throw new Zt({
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
              throw new we({
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
        throw new we({
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
function Ps({
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
function As(e) {
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
var Ms = h({
  /**
  Echo back the prompt in addition to the completion.
     */
  echo: W().optional(),
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
  logitBias: Fe(c(), T()).optional(),
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
  logprobs: X([W(), T()]).optional()
}), fI = class {
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
    seed: f,
    providerOptions: y
  }) {
    const p = [], m = {
      ...await Je({
        provider: "openai",
        providerOptions: y,
        schema: Ms
      }),
      ...await Je({
        provider: this.providerOptionsName,
        providerOptions: y,
        schema: Ms
      })
    };
    n != null && p.push({ type: "unsupported-setting", setting: "topK" }), l != null && l.length && p.push({ type: "unsupported-setting", setting: "tools" }), d != null && p.push({ type: "unsupported-setting", setting: "toolChoice" }), u != null && u.type !== "text" && p.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: _, stopSequences: v } = mI({ prompt: e }), g = [...v ?? [], ...s ?? []];
    return {
      args: {
        // model id:
        model: this.modelId,
        // model specific settings:
        echo: m.echo,
        logit_bias: m.logitBias,
        logprobs: (m == null ? void 0 : m.logprobs) === !0 ? 0 : (m == null ? void 0 : m.logprobs) === !1 || m == null ? void 0 : m.logprobs,
        suffix: m.suffix,
        user: m.user,
        // standardized settings:
        max_tokens: t,
        temperature: r,
        top_p: o,
        frequency_penalty: i,
        presence_penalty: a,
        seed: f,
        // prompt:
        prompt: _,
        // stop sequences:
        stop: g.length > 0 ? g : void 0
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
      headers: Ee(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        gI
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
      finishReason: As(l.finish_reason),
      request: { body: n },
      response: {
        ...Ps(s),
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
      headers: Ee(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: kt,
      successfulResponseHandler: tn(
        hI
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
          transform(d, f) {
            if (e.includeRawChunks && f.enqueue({ type: "raw", rawValue: d.rawValue }), !d.success) {
              a = "error", f.enqueue({ type: "error", error: d.error });
              return;
            }
            const y = d.value;
            if ("error" in y) {
              a = "error", f.enqueue({ type: "error", error: y.error });
              return;
            }
            l && (l = !1, f.enqueue({
              type: "response-metadata",
              ...Ps(y)
            }), f.enqueue({ type: "text-start", id: "0" })), y.usage != null && (u.inputTokens = y.usage.prompt_tokens, u.outputTokens = y.usage.completion_tokens, u.totalTokens = y.usage.total_tokens);
            const p = y.choices[0];
            (p == null ? void 0 : p.finish_reason) != null && (a = As(p.finish_reason)), (p == null ? void 0 : p.logprobs) != null && (s.openai.logprobs = p.logprobs), (p == null ? void 0 : p.text) != null && p.text.length > 0 && f.enqueue({
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
}, Qm = h({
  prompt_tokens: T(),
  completion_tokens: T(),
  total_tokens: T()
}), gI = h({
  id: c().nullish(),
  created: T().nullish(),
  model: c().nullish(),
  choices: A(
    h({
      text: c(),
      finish_reason: c(),
      logprobs: h({
        tokens: A(c()),
        token_logprobs: A(T()),
        top_logprobs: A(Fe(c(), T())).nullish()
      }).nullish()
    })
  ),
  usage: Qm.nullish()
}), hI = X([
  h({
    id: c().nullish(),
    created: T().nullish(),
    model: c().nullish(),
    choices: A(
      h({
        text: c(),
        finish_reason: c().nullish(),
        index: T(),
        logprobs: h({
          tokens: A(c()),
          token_logprobs: A(T()),
          top_logprobs: A(Fe(c(), T())).nullish()
        }).nullish()
      })
    ),
    usage: Qm.nullish()
  }),
  Aa
]), vI = h({
  /**
  The number of dimensions the resulting output embeddings should have.
  Only supported in text-embedding-3 and later models.
     */
  dimensions: T().optional(),
  /**
  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.
  */
  user: c().optional()
}), yI = class {
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
      throw new Fo({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const i = (n = await Je({
      provider: "openai",
      providerOptions: o,
      schema: vI
    })) != null ? n : {}, {
      responseHeaders: a,
      value: s,
      rawValue: u
    } = await Se({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: i.dimensions,
        user: i.user
      },
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        _I
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
}, _I = h({
  data: A(h({ embedding: A(T()) })),
  usage: h({ prompt_tokens: T() }).nullish()
}), bI = {
  "dall-e-3": 1,
  "dall-e-2": 10,
  "gpt-image-1": 10
}, wI = /* @__PURE__ */ new Set(["gpt-image-1"]), $I = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get maxImagesPerCall() {
    var e;
    return (e = bI[this.modelId]) != null ? e : 1;
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
    var u, l, d, f;
    const y = [];
    o != null && y.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), n != null && y.push({ type: "unsupported-setting", setting: "seed" });
    const p = (d = (l = (u = this.config._internal) == null ? void 0 : u.currentDate) == null ? void 0 : l.call(u)) != null ? d : /* @__PURE__ */ new Date(), { value: m, responseHeaders: _ } = await Se({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), a),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: r,
        ...(f = i.openai) != null ? f : {},
        ...wI.has(this.modelId) ? {} : { response_format: "b64_json" }
      },
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        II
      ),
      abortSignal: s,
      fetch: this.config.fetch
    });
    return {
      images: m.data.map((v) => v.b64_json),
      warnings: y,
      response: {
        timestamp: p,
        modelId: this.modelId,
        headers: _
      },
      providerMetadata: {
        openai: {
          images: m.data.map(
            (v) => v.revised_prompt ? {
              revisedPrompt: v.revised_prompt
            } : null
          )
        }
      }
    };
  }
}, II = h({
  data: A(
    h({ b64_json: c(), revised_prompt: c().optional() })
  )
}), kI = h({
  container: X([
    c(),
    h({
      fileIds: A(c()).optional()
    })
  ]).optional()
}), xI = ut({
  id: "openai.code_interpreter",
  name: "code_interpreter",
  inputSchema: h({})
}), SI = {
  codeInterpreter: xI,
  fileSearch: rI,
  webSearchPreview: oI
};
function Rs(e, t) {
  return t ? t.some((r) => e.startsWith(r)) : !1;
}
async function TI({
  prompt: e,
  systemMessageMode: t,
  fileIdPrefixes: r
}) {
  var o, n, i, a, s, u;
  const l = [], d = [];
  for (const { role: f, content: y } of e)
    switch (f) {
      case "system": {
        switch (t) {
          case "system": {
            l.push({ role: "system", content: y });
            break;
          }
          case "developer": {
            l.push({ role: "developer", content: y });
            break;
          }
          case "remove": {
            d.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const p = t;
            throw new Error(
              `Unsupported system message mode: ${p}`
            );
          }
        }
        break;
      }
      case "user": {
        l.push({
          role: "user",
          content: y.map((p, m) => {
            var _, v, g;
            switch (p.type) {
              case "text":
                return { type: "input_text", text: p.text };
              case "file":
                if (p.mediaType.startsWith("image/")) {
                  const b = p.mediaType === "image/*" ? "image/jpeg" : p.mediaType;
                  return {
                    type: "input_image",
                    ...p.data instanceof URL ? { image_url: p.data.toString() } : typeof p.data == "string" && Rs(p.data, r) ? { file_id: p.data } : {
                      image_url: `data:${b};base64,${ft(p.data)}`
                    },
                    detail: (v = (_ = p.providerOptions) == null ? void 0 : _.openai) == null ? void 0 : v.imageDetail
                  };
                } else {
                  if (p.mediaType === "application/pdf")
                    return p.data instanceof URL ? {
                      type: "input_file",
                      file_url: p.data.toString()
                    } : {
                      type: "input_file",
                      ...typeof p.data == "string" && Rs(p.data, r) ? { file_id: p.data } : {
                        filename: (g = p.filename) != null ? g : `part-${m}.pdf`,
                        file_data: `data:application/pdf;base64,${ft(p.data)}`
                      }
                    };
                  throw new we({
                    functionality: `file part media type ${p.mediaType}`
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        const p = {};
        for (const m of y)
          switch (m.type) {
            case "text": {
              l.push({
                role: "assistant",
                content: [{ type: "output_text", text: m.text }],
                id: (i = (n = (o = m.providerOptions) == null ? void 0 : o.openai) == null ? void 0 : n.itemId) != null ? i : void 0
              });
              break;
            }
            case "tool-call": {
              if (m.providerExecuted)
                break;
              l.push({
                type: "function_call",
                call_id: m.toolCallId,
                name: m.toolName,
                arguments: JSON.stringify(m.input),
                id: (u = (s = (a = m.providerOptions) == null ? void 0 : a.openai) == null ? void 0 : s.itemId) != null ? u : void 0
              });
              break;
            }
            case "tool-result": {
              d.push({
                type: "other",
                message: "tool result parts in assistant messages are not supported for OpenAI responses"
              });
              break;
            }
            case "reasoning": {
              const _ = await Je({
                provider: "openai",
                providerOptions: m.providerOptions,
                schema: OI
              }), v = _ == null ? void 0 : _.itemId;
              if (v != null) {
                const g = p[v], b = [];
                m.text.length > 0 ? b.push({ type: "summary_text", text: m.text }) : g !== void 0 && d.push({
                  type: "other",
                  message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(m)}.`
                }), g === void 0 ? (p[v] = {
                  type: "reasoning",
                  id: v,
                  encrypted_content: _ == null ? void 0 : _.reasoningEncryptedContent,
                  summary: b
                }, l.push(p[v])) : g.summary.push(...b);
              } else
                d.push({
                  type: "other",
                  message: `Non-OpenAI reasoning parts are not supported. Skipping reasoning part: ${JSON.stringify(m)}.`
                });
              break;
            }
          }
        break;
      }
      case "tool": {
        for (const p of y) {
          const m = p.output;
          let _;
          switch (m.type) {
            case "text":
            case "error-text":
              _ = m.value;
              break;
            case "content":
            case "json":
            case "error-json":
              _ = JSON.stringify(m.value);
              break;
          }
          l.push({
            type: "function_call_output",
            call_id: p.toolCallId,
            output: _
          });
        }
        break;
      }
      default: {
        const p = f;
        throw new Error(`Unsupported role: ${p}`);
      }
    }
  return { messages: l, warnings: d };
}
var OI = h({
  itemId: c().nullish(),
  reasoningEncryptedContent: c().nullish()
});
function js({
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
function EI({
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
            const s = Hm.parse(a.args);
            n.push({
              type: "file_search",
              vector_store_ids: s.vectorStoreIds,
              max_num_results: s.maxNumResults,
              ranking_options: s.ranking ? { ranker: s.ranking.ranker } : void 0,
              filters: s.filters
            });
            break;
          }
          case "openai.web_search_preview": {
            const s = Km.parse(a.args);
            n.push({
              type: "web_search_preview",
              search_context_size: s.searchContextSize,
              user_location: s.userLocation
            });
            break;
          }
          case "openai.code_interpreter": {
            const s = kI.parse(a.args);
            n.push({
              type: "code_interpreter",
              container: s.container == null ? { type: "auto", file_ids: void 0 } : typeof s.container == "string" ? s.container : { type: "auto", file_ids: s.container.fileIds }
            });
            break;
          }
          default: {
            o.push({ type: "unsupported-tool", tool: a });
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
        toolChoice: t.toolName === "code_interpreter" || t.toolName === "file_search" || t.toolName === "web_search_preview" ? { type: t.toolName } : { type: "function", name: t.toolName },
        toolWarnings: o
      };
    default: {
      const a = i;
      throw new we({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
var ef = h({
  type: x("web_search_call"),
  id: c(),
  status: c(),
  action: Le("type", [
    h({
      type: x("search"),
      query: c()
    }),
    h({
      type: x("open_page"),
      url: c()
    }),
    h({
      type: x("find"),
      url: c(),
      pattern: c()
    })
  ]).nullish()
}), tf = 20, nf = A(
  h({
    token: c(),
    logprob: T(),
    top_logprobs: A(
      h({
        token: c(),
        logprob: T()
      })
    )
  })
), NI = class {
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
    toolChoice: f,
    responseFormat: y
  }) {
    var p, m;
    const _ = [], v = XI(this.modelId);
    n != null && _.push({ type: "unsupported-setting", setting: "topK" }), s != null && _.push({ type: "unsupported-setting", setting: "seed" }), i != null && _.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), a != null && _.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), r != null && _.push({ type: "unsupported-setting", setting: "stopSequences" });
    const { messages: g, warnings: b } = await TI({
      prompt: u,
      systemMessageMode: v.systemMessageMode,
      fileIdPrefixes: this.config.fileIdPrefixes
    });
    _.push(...b);
    const w = await Je({
      provider: "openai",
      providerOptions: l,
      schema: QI
    }), $ = (p = w == null ? void 0 : w.strictJsonSchema) != null ? p : !1, O = typeof (w == null ? void 0 : w.logprobs) == "number" ? w == null ? void 0 : w.logprobs : (w == null ? void 0 : w.logprobs) === !0 ? tf : void 0, E = O ? Array.isArray(w == null ? void 0 : w.include) ? [...w == null ? void 0 : w.include, "message.output_text.logprobs"] : ["message.output_text.logprobs"] : w == null ? void 0 : w.include, I = {
      model: this.modelId,
      input: g,
      temperature: t,
      top_p: o,
      max_output_tokens: e,
      ...((y == null ? void 0 : y.type) === "json" || (w == null ? void 0 : w.textVerbosity)) && {
        text: {
          ...(y == null ? void 0 : y.type) === "json" && {
            format: y.schema != null ? {
              type: "json_schema",
              strict: $,
              name: (m = y.name) != null ? m : "response",
              description: y.description,
              schema: y.schema
            } : { type: "json_object" }
          },
          ...(w == null ? void 0 : w.textVerbosity) && {
            verbosity: w.textVerbosity
          }
        }
      },
      // provider options:
      metadata: w == null ? void 0 : w.metadata,
      parallel_tool_calls: w == null ? void 0 : w.parallelToolCalls,
      previous_response_id: w == null ? void 0 : w.previousResponseId,
      store: w == null ? void 0 : w.store,
      user: w == null ? void 0 : w.user,
      instructions: w == null ? void 0 : w.instructions,
      service_tier: w == null ? void 0 : w.serviceTier,
      include: E,
      prompt_cache_key: w == null ? void 0 : w.promptCacheKey,
      safety_identifier: w == null ? void 0 : w.safetyIdentifier,
      top_logprobs: O,
      // model-specific settings:
      ...v.isReasoningModel && ((w == null ? void 0 : w.reasoningEffort) != null || (w == null ? void 0 : w.reasoningSummary) != null) && {
        reasoning: {
          ...(w == null ? void 0 : w.reasoningEffort) != null && {
            effort: w.reasoningEffort
          },
          ...(w == null ? void 0 : w.reasoningSummary) != null && {
            summary: w.reasoningSummary
          }
        }
      },
      ...v.requiredAutoTruncation && {
        truncation: "auto"
      }
    };
    v.isReasoningModel ? (I.temperature != null && (I.temperature = void 0, _.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), I.top_p != null && (I.top_p = void 0, _.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    }))) : ((w == null ? void 0 : w.reasoningEffort) != null && _.push({
      type: "unsupported-setting",
      setting: "reasoningEffort",
      details: "reasoningEffort is not supported for non-reasoning models"
    }), (w == null ? void 0 : w.reasoningSummary) != null && _.push({
      type: "unsupported-setting",
      setting: "reasoningSummary",
      details: "reasoningSummary is not supported for non-reasoning models"
    })), (w == null ? void 0 : w.serviceTier) === "flex" && !v.supportsFlexProcessing && (_.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), delete I.service_tier), (w == null ? void 0 : w.serviceTier) === "priority" && !v.supportsPriorityProcessing && (_.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), delete I.service_tier);
    const {
      tools: k,
      toolChoice: M,
      toolWarnings: C
    } = EI({
      tools: d,
      toolChoice: f,
      strictJsonSchema: $
    });
    return {
      args: {
        ...I,
        tools: k,
        tool_choice: M
      },
      warnings: [..._, ...C]
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u, l, d, f, y, p, m;
    const { args: _, warnings: v } = await this.getArgs(e), g = this.config.url({
      path: "/responses",
      modelId: this.modelId
    }), {
      responseHeaders: b,
      value: w,
      rawValue: $
    } = await Se({
      url: g,
      headers: Ee(this.config.headers(), e.headers),
      body: _,
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        h({
          id: c(),
          created_at: T(),
          error: h({
            code: c(),
            message: c()
          }).nullish(),
          model: c(),
          output: A(
            Le("type", [
              h({
                type: x("message"),
                role: x("assistant"),
                id: c(),
                content: A(
                  h({
                    type: x("output_text"),
                    text: c(),
                    logprobs: nf.nullish(),
                    annotations: A(
                      Le("type", [
                        h({
                          type: x("url_citation"),
                          start_index: T(),
                          end_index: T(),
                          url: c(),
                          title: c()
                        }),
                        h({
                          type: x("file_citation"),
                          start_index: T(),
                          end_index: T(),
                          file_id: c(),
                          quote: c()
                        })
                      ])
                    )
                  })
                )
              }),
              h({
                type: x("function_call"),
                call_id: c(),
                name: c(),
                arguments: c(),
                id: c()
              }),
              ef,
              h({
                type: x("computer_call"),
                id: c(),
                status: c().optional()
              }),
              h({
                type: x("file_search_call"),
                id: c(),
                status: c().optional(),
                queries: A(c()).nullish(),
                results: A(
                  h({
                    attributes: h({
                      file_id: c(),
                      filename: c(),
                      score: T(),
                      text: c()
                    })
                  })
                ).nullish()
              }),
              h({
                type: x("reasoning"),
                id: c(),
                encrypted_content: c().nullish(),
                summary: A(
                  h({
                    type: x("summary_text"),
                    text: c()
                  })
                )
              })
            ])
          ),
          incomplete_details: h({ reason: c() }).nullable(),
          usage: rf
        })
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    if (w.error)
      throw new je({
        message: w.error.message,
        url: g,
        requestBodyValues: _,
        statusCode: 400,
        responseHeaders: b,
        responseBody: $,
        isRetryable: !1
      });
    const O = [], E = [];
    for (const k of w.output)
      switch (k.type) {
        case "reasoning": {
          k.summary.length === 0 && k.summary.push({ type: "summary_text", text: "" });
          for (const M of k.summary)
            O.push({
              type: "reasoning",
              text: M.text,
              providerMetadata: {
                openai: {
                  itemId: k.id,
                  reasoningEncryptedContent: (t = k.encrypted_content) != null ? t : null
                }
              }
            });
          break;
        }
        case "message": {
          for (const M of k.content) {
            (o = (r = e.providerOptions) == null ? void 0 : r.openai) != null && o.logprobs && M.logprobs && E.push(M.logprobs), O.push({
              type: "text",
              text: M.text,
              providerMetadata: {
                openai: {
                  itemId: k.id
                }
              }
            });
            for (const C of M.annotations)
              C.type === "url_citation" ? O.push({
                type: "source",
                sourceType: "url",
                id: (a = (i = (n = this.config).generateId) == null ? void 0 : i.call(n)) != null ? a : De(),
                url: C.url,
                title: C.title
              }) : C.type === "file_citation" && O.push({
                type: "source",
                sourceType: "document",
                id: (l = (u = (s = this.config).generateId) == null ? void 0 : u.call(s)) != null ? l : De(),
                mediaType: "text/plain",
                title: C.quote,
                filename: C.file_id
              });
          }
          break;
        }
        case "function_call": {
          O.push({
            type: "tool-call",
            toolCallId: k.call_id,
            toolName: k.name,
            input: k.arguments,
            providerMetadata: {
              openai: {
                itemId: k.id
              }
            }
          });
          break;
        }
        case "web_search_call": {
          O.push({
            type: "tool-call",
            toolCallId: k.id,
            toolName: "web_search_preview",
            input: JSON.stringify({ action: k.action }),
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: k.id,
            toolName: "web_search_preview",
            result: { status: k.status },
            providerExecuted: !0
          });
          break;
        }
        case "computer_call": {
          O.push({
            type: "tool-call",
            toolCallId: k.id,
            toolName: "computer_use",
            input: "",
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: k.id,
            toolName: "computer_use",
            result: {
              type: "computer_use_tool_result",
              status: k.status || "completed"
            },
            providerExecuted: !0
          });
          break;
        }
        case "file_search_call": {
          O.push({
            type: "tool-call",
            toolCallId: k.id,
            toolName: "file_search",
            input: "",
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: k.id,
            toolName: "file_search",
            result: {
              type: "file_search_tool_result",
              status: k.status || "completed",
              ...k.queries && { queries: k.queries },
              ...k.results && { results: k.results }
            },
            providerExecuted: !0
          });
          break;
        }
      }
    const I = {
      openai: { responseId: w.id }
    };
    return E.length > 0 && (I.openai.logprobs = E), {
      content: O,
      finishReason: js({
        finishReason: (d = w.incomplete_details) == null ? void 0 : d.reason,
        hasToolCalls: O.some((k) => k.type === "tool-call")
      }),
      usage: {
        inputTokens: w.usage.input_tokens,
        outputTokens: w.usage.output_tokens,
        totalTokens: w.usage.input_tokens + w.usage.output_tokens,
        reasoningTokens: (y = (f = w.usage.output_tokens_details) == null ? void 0 : f.reasoning_tokens) != null ? y : void 0,
        cachedInputTokens: (m = (p = w.usage.input_tokens_details) == null ? void 0 : p.cached_tokens) != null ? m : void 0
      },
      request: { body: _ },
      response: {
        id: w.id,
        timestamp: new Date(w.created_at * 1e3),
        modelId: w.model,
        headers: b,
        body: $
      },
      providerMetadata: I,
      warnings: v
    };
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { responseHeaders: o, value: n } = await Se({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: kt,
      successfulResponseHandler: tn(
        ZI
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), i = this;
    let a = "unknown";
    const s = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, u = [];
    let l = null;
    const d = {};
    let f = !1;
    const y = {};
    return {
      stream: n.pipeThrough(
        new TransformStream({
          start(p) {
            p.enqueue({ type: "stream-start", warnings: r });
          },
          transform(p, m) {
            var _, v, g, b, w, $, O, E, I, k, M, C, j, Z, L, ce;
            if (e.includeRawChunks && m.enqueue({ type: "raw", rawValue: p.rawValue }), !p.success) {
              a = "error", m.enqueue({ type: "error", error: p.error });
              return;
            }
            const N = p.value;
            if (af(N))
              N.item.type === "function_call" ? (d[N.output_index] = {
                toolName: N.item.name,
                toolCallId: N.item.call_id
              }, m.enqueue({
                type: "tool-input-start",
                id: N.item.call_id,
                toolName: N.item.name
              })) : N.item.type === "web_search_call" ? (d[N.output_index] = {
                toolName: "web_search_preview",
                toolCallId: N.item.id
              }, m.enqueue({
                type: "tool-input-start",
                id: N.item.id,
                toolName: "web_search_preview"
              })) : N.item.type === "computer_call" ? (d[N.output_index] = {
                toolName: "computer_use",
                toolCallId: N.item.id
              }, m.enqueue({
                type: "tool-input-start",
                id: N.item.id,
                toolName: "computer_use"
              })) : N.item.type === "file_search_call" ? (d[N.output_index] = {
                toolName: "file_search",
                toolCallId: N.item.id
              }, m.enqueue({
                type: "tool-input-start",
                id: N.item.id,
                toolName: "file_search"
              })) : N.item.type === "message" ? m.enqueue({
                type: "text-start",
                id: N.item.id,
                providerMetadata: {
                  openai: {
                    itemId: N.item.id
                  }
                }
              }) : BI(N) && (y[N.item.id] = {
                encryptedContent: N.item.encrypted_content,
                summaryParts: [0]
              }, m.enqueue({
                type: "reasoning-start",
                id: `${N.item.id}:0`,
                providerMetadata: {
                  openai: {
                    itemId: N.item.id,
                    reasoningEncryptedContent: (_ = N.item.encrypted_content) != null ? _ : null
                  }
                }
              }));
            else if (of(N)) {
              if (N.item.type === "function_call")
                d[N.output_index] = void 0, f = !0, m.enqueue({
                  type: "tool-input-end",
                  id: N.item.call_id
                }), m.enqueue({
                  type: "tool-call",
                  toolCallId: N.item.call_id,
                  toolName: N.item.name,
                  input: N.item.arguments,
                  providerMetadata: {
                    openai: {
                      itemId: N.item.id
                    }
                  }
                });
              else if (N.item.type === "web_search_call")
                d[N.output_index] = void 0, f = !0, m.enqueue({
                  type: "tool-input-end",
                  id: N.item.id
                }), m.enqueue({
                  type: "tool-call",
                  toolCallId: N.item.id,
                  toolName: "web_search_preview",
                  input: JSON.stringify({ action: N.item.action }),
                  providerExecuted: !0
                }), m.enqueue({
                  type: "tool-result",
                  toolCallId: N.item.id,
                  toolName: "web_search_preview",
                  result: { status: N.item.status },
                  providerExecuted: !0
                });
              else if (N.item.type === "computer_call")
                d[N.output_index] = void 0, f = !0, m.enqueue({
                  type: "tool-input-end",
                  id: N.item.id
                }), m.enqueue({
                  type: "tool-call",
                  toolCallId: N.item.id,
                  toolName: "computer_use",
                  input: "",
                  providerExecuted: !0
                }), m.enqueue({
                  type: "tool-result",
                  toolCallId: N.item.id,
                  toolName: "computer_use",
                  result: {
                    type: "computer_use_tool_result",
                    status: N.item.status || "completed"
                  },
                  providerExecuted: !0
                });
              else if (N.item.type === "file_search_call")
                d[N.output_index] = void 0, f = !0, m.enqueue({
                  type: "tool-input-end",
                  id: N.item.id
                }), m.enqueue({
                  type: "tool-call",
                  toolCallId: N.item.id,
                  toolName: "file_search",
                  input: "",
                  providerExecuted: !0
                }), m.enqueue({
                  type: "tool-result",
                  toolCallId: N.item.id,
                  toolName: "file_search",
                  result: {
                    type: "file_search_tool_result",
                    status: N.item.status || "completed",
                    ...N.item.queries && { queries: N.item.queries },
                    ...N.item.results && { results: N.item.results }
                  },
                  providerExecuted: !0
                });
              else if (N.item.type === "message")
                m.enqueue({
                  type: "text-end",
                  id: N.item.id
                });
              else if (FI(N)) {
                const se = y[N.item.id];
                for (const ke of se.summaryParts)
                  m.enqueue({
                    type: "reasoning-end",
                    id: `${N.item.id}:${ke}`,
                    providerMetadata: {
                      openai: {
                        itemId: N.item.id,
                        reasoningEncryptedContent: (v = N.item.encrypted_content) != null ? v : null
                      }
                    }
                  });
                delete y[N.item.id];
              }
            } else if (VI(N)) {
              const se = d[N.output_index];
              se != null && m.enqueue({
                type: "tool-input-delta",
                id: se.toolCallId,
                delta: N.delta
              });
            } else GI(N) ? (l = N.response.id, m.enqueue({
              type: "response-metadata",
              id: N.response.id,
              timestamp: new Date(N.response.created_at * 1e3),
              modelId: N.response.model
            })) : LI(N) ? (m.enqueue({
              type: "text-delta",
              id: N.item_id,
              delta: N.delta
            }), N.logprobs && u.push(N.logprobs)) : HI(N) ? N.summary_index > 0 && ((g = y[N.item_id]) == null || g.summaryParts.push(
              N.summary_index
            ), m.enqueue({
              type: "reasoning-start",
              id: `${N.item_id}:${N.summary_index}`,
              providerMetadata: {
                openai: {
                  itemId: N.item_id,
                  reasoningEncryptedContent: (w = (b = y[N.item_id]) == null ? void 0 : b.encryptedContent) != null ? w : null
                }
              }
            })) : KI(N) ? m.enqueue({
              type: "reasoning-delta",
              id: `${N.item_id}:${N.summary_index}`,
              delta: N.delta,
              providerMetadata: {
                openai: {
                  itemId: N.item_id
                }
              }
            }) : JI(N) ? (a = js({
              finishReason: ($ = N.response.incomplete_details) == null ? void 0 : $.reason,
              hasToolCalls: f
            }), s.inputTokens = N.response.usage.input_tokens, s.outputTokens = N.response.usage.output_tokens, s.totalTokens = N.response.usage.input_tokens + N.response.usage.output_tokens, s.reasoningTokens = (E = (O = N.response.usage.output_tokens_details) == null ? void 0 : O.reasoning_tokens) != null ? E : void 0, s.cachedInputTokens = (k = (I = N.response.usage.input_tokens_details) == null ? void 0 : I.cached_tokens) != null ? k : void 0) : WI(N) ? N.annotation.type === "url_citation" ? m.enqueue({
              type: "source",
              sourceType: "url",
              id: (j = (C = (M = i.config).generateId) == null ? void 0 : C.call(M)) != null ? j : De(),
              url: N.annotation.url,
              title: N.annotation.title
            }) : N.annotation.type === "file_citation" && m.enqueue({
              type: "source",
              sourceType: "document",
              id: (ce = (L = (Z = i.config).generateId) == null ? void 0 : L.call(Z)) != null ? ce : De(),
              mediaType: "text/plain",
              title: N.annotation.quote,
              filename: N.annotation.file_id
            }) : YI(N) && m.enqueue({ type: "error", error: N });
          },
          flush(p) {
            const m = {
              openai: {
                responseId: l
              }
            };
            u.length > 0 && (m.openai.logprobs = u), p.enqueue({
              type: "finish",
              finishReason: a,
              usage: s,
              providerMetadata: m
            });
          }
        })
      ),
      request: { body: t },
      response: { headers: o }
    };
  }
}, rf = h({
  input_tokens: T(),
  input_tokens_details: h({ cached_tokens: T().nullish() }).nullish(),
  output_tokens: T(),
  output_tokens_details: h({ reasoning_tokens: T().nullish() }).nullish()
}), CI = h({
  type: x("response.output_text.delta"),
  item_id: c(),
  delta: c(),
  logprobs: nf.nullish()
}), PI = h({
  type: x("error"),
  code: c(),
  message: c(),
  param: c().nullish(),
  sequence_number: T()
}), AI = h({
  type: ne(["response.completed", "response.incomplete"]),
  response: h({
    incomplete_details: h({ reason: c() }).nullish(),
    usage: rf
  })
}), MI = h({
  type: x("response.created"),
  response: h({
    id: c(),
    created_at: T(),
    model: c()
  })
}), RI = h({
  type: x("response.output_item.added"),
  output_index: T(),
  item: Le("type", [
    h({
      type: x("message"),
      id: c()
    }),
    h({
      type: x("reasoning"),
      id: c(),
      encrypted_content: c().nullish()
    }),
    h({
      type: x("function_call"),
      id: c(),
      call_id: c(),
      name: c(),
      arguments: c()
    }),
    h({
      type: x("web_search_call"),
      id: c(),
      status: c(),
      action: h({
        type: x("search"),
        query: c().optional()
      }).nullish()
    }),
    h({
      type: x("computer_call"),
      id: c(),
      status: c()
    }),
    h({
      type: x("file_search_call"),
      id: c(),
      status: c(),
      queries: A(c()).nullish(),
      results: A(
        h({
          attributes: h({
            file_id: c(),
            filename: c(),
            score: T(),
            text: c()
          })
        })
      ).optional()
    })
  ])
}), jI = h({
  type: x("response.output_item.done"),
  output_index: T(),
  item: Le("type", [
    h({
      type: x("message"),
      id: c()
    }),
    h({
      type: x("reasoning"),
      id: c(),
      encrypted_content: c().nullish()
    }),
    h({
      type: x("function_call"),
      id: c(),
      call_id: c(),
      name: c(),
      arguments: c(),
      status: x("completed")
    }),
    ef,
    h({
      type: x("computer_call"),
      id: c(),
      status: x("completed")
    }),
    h({
      type: x("file_search_call"),
      id: c(),
      status: x("completed"),
      queries: A(c()).nullish(),
      results: A(
        h({
          attributes: h({
            file_id: c(),
            filename: c(),
            score: T(),
            text: c()
          })
        })
      ).nullish()
    })
  ])
}), zI = h({
  type: x("response.function_call_arguments.delta"),
  item_id: c(),
  output_index: T(),
  delta: c()
}), UI = h({
  type: x("response.output_text.annotation.added"),
  annotation: Le("type", [
    h({
      type: x("url_citation"),
      url: c(),
      title: c()
    }),
    h({
      type: x("file_citation"),
      file_id: c(),
      quote: c()
    })
  ])
}), DI = h({
  type: x("response.reasoning_summary_part.added"),
  item_id: c(),
  summary_index: T()
}), qI = h({
  type: x("response.reasoning_summary_text.delta"),
  item_id: c(),
  summary_index: T(),
  delta: c()
}), ZI = X([
  CI,
  AI,
  MI,
  RI,
  jI,
  zI,
  UI,
  DI,
  qI,
  PI,
  h({ type: c() }).loose()
  // fallback for unknown chunks
]);
function LI(e) {
  return e.type === "response.output_text.delta";
}
function of(e) {
  return e.type === "response.output_item.done";
}
function FI(e) {
  return of(e) && e.item.type === "reasoning";
}
function JI(e) {
  return e.type === "response.completed" || e.type === "response.incomplete";
}
function GI(e) {
  return e.type === "response.created";
}
function VI(e) {
  return e.type === "response.function_call_arguments.delta";
}
function af(e) {
  return e.type === "response.output_item.added";
}
function BI(e) {
  return af(e) && e.item.type === "reasoning";
}
function WI(e) {
  return e.type === "response.output_text.annotation.added";
}
function HI(e) {
  return e.type === "response.reasoning_summary_part.added";
}
function KI(e) {
  return e.type === "response.reasoning_summary_text.delta";
}
function YI(e) {
  return e.type === "error";
}
function XI(e) {
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
var QI = h({
  metadata: $t().nullish(),
  parallelToolCalls: W().nullish(),
  previousResponseId: c().nullish(),
  store: W().nullish(),
  user: c().nullish(),
  reasoningEffort: c().nullish(),
  strictJsonSchema: W().nullish(),
  instructions: c().nullish(),
  reasoningSummary: c().nullish(),
  serviceTier: ne(["auto", "flex", "priority"]).nullish(),
  include: A(
    ne([
      "reasoning.encrypted_content",
      "file_search_call.results",
      "message.output_text.logprobs"
    ])
  ).nullish(),
  textVerbosity: ne(["low", "medium", "high"]).nullish(),
  promptCacheKey: c().nullish(),
  safetyIdentifier: c().nullish(),
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
  logprobs: X([W(), T().min(1).max(tf)]).optional()
}), ek = h({
  instructions: c().nullish(),
  speed: T().min(0.25).max(4).default(1).nullish()
}), tk = class {
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
    const s = [], u = await Je({
      provider: "openai",
      providerOptions: a,
      schema: ek
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
      for (const f in d) {
        const y = d[f];
        y !== void 0 && (l[f] = y);
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
      headers: Ee(this.config.headers(), e.headers),
      body: i,
      failedResponseHandler: kt,
      successfulResponseHandler: Dw(),
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
}, nk = h({
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
  temperature: T().min(0).max(1).default(0).optional(),
  /**
   * The timestamp granularities to populate for this transcription.
   * @default ['segment']
   */
  timestampGranularities: A(ne(["word", "segment"])).default(["segment"]).optional()
}), zs = {
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
}, rk = class {
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
    const o = [], n = await Je({
      provider: "openai",
      providerOptions: r,
      schema: nk
    }), i = new FormData(), a = e instanceof Uint8Array ? new Blob([e]) : new Blob([eo(e)]);
    if (i.append("model", this.modelId), i.append("file", new File([a], "audio", { type: t })), n) {
      const s = {
        include: n.include,
        language: n.language,
        prompt: n.prompt,
        response_format: "verbose_json",
        // always use verbose_json to get segments
        temperature: n.temperature,
        timestamp_granularities: n.timestampGranularities
      };
      for (const [u, l] of Object.entries(s))
        l != null && i.append(u, String(l));
    }
    return {
      formData: i,
      warnings: o
    };
  }
  async doGenerate(e) {
    var t, r, o, n, i, a, s, u;
    const l = (o = (r = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : r.call(t)) != null ? o : /* @__PURE__ */ new Date(), { formData: d, warnings: f } = await this.getArgs(e), {
      value: y,
      responseHeaders: p,
      rawValue: m
    } = await zw({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Ee(this.config.headers(), e.headers),
      formData: d,
      failedResponseHandler: kt,
      successfulResponseHandler: Ge(
        ok
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), _ = y.language != null && y.language in zs ? zs[y.language] : void 0;
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
      warnings: f,
      response: {
        timestamp: l,
        modelId: this.modelId,
        headers: p,
        body: m
      }
    };
  }
}, ok = h({
  text: c(),
  language: c().nullish(),
  duration: T().nullish(),
  words: A(
    h({
      word: c(),
      start: T(),
      end: T()
    })
  ).nullish(),
  segments: A(
    h({
      id: T(),
      seek: T(),
      start: T(),
      end: T(),
      text: c(),
      tokens: A(T()),
      temperature: T(),
      avg_logprob: T(),
      compression_ratio: T(),
      no_speech_prob: T()
    })
  ).nullish()
});
function ik(e = {}) {
  var t, r;
  const o = (t = Xn(e.baseURL)) != null ? t : "https://api.openai.com/v1", n = (r = e.name) != null ? r : "openai", i = () => ({
    Authorization: `Bearer ${Xr({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), a = (_) => new aI(_, {
    provider: `${n}.chat`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), s = (_) => new fI(_, {
    provider: `${n}.completion`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), u = (_) => new yI(_, {
    provider: `${n}.embedding`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), l = (_) => new $I(_, {
    provider: `${n}.image`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), d = (_) => new rk(_, {
    provider: `${n}.transcription`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch
  }), f = (_) => new tk(_, {
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
  }, p = (_) => new NI(_, {
    provider: `${n}.responses`,
    url: ({ path: v }) => `${o}${v}`,
    headers: i,
    fetch: e.fetch,
    fileIdPrefixes: ["file-"]
  }), m = function(_) {
    return y(_);
  };
  return m.languageModel = y, m.chat = a, m.completion = s, m.responses = p, m.embedding = u, m.textEmbedding = u, m.textEmbeddingModel = u, m.image = l, m.imageModel = l, m.transcription = d, m.transcriptionModel = d, m.speech = f, m.speechModel = f, m.tools = SI, m;
}
ik();
var ak = "vercel.ai.gateway.error", $o = Symbol.for(ak), Us, Ds, ot = class sf extends (Ds = Error, Us = $o, Ds) {
  constructor({
    message: t,
    statusCode: r = 500,
    cause: o
  }) {
    super(t), this[Us] = !0, this.statusCode = r, this.cause = o;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(t) {
    return sf.hasMarker(t);
  }
  static hasMarker(t) {
    return typeof t == "object" && t !== null && $o in t && t[$o] === !0;
  }
}, uf = "GatewayAuthenticationError", sk = `vercel.ai.gateway.error.${uf}`, qs = Symbol.for(sk), Zs, Ls, to = class lf extends (Ls = ot, Zs = qs, Ls) {
  constructor({
    message: t = "Authentication failed",
    statusCode: r = 401,
    cause: o
  } = {}) {
    super({ message: t, statusCode: r, cause: o }), this[Zs] = !0, this.name = uf, this.type = "authentication_error";
  }
  static isInstance(t) {
    return ot.hasMarker(t) && qs in t;
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
- in production/preview, the token is automatically obtained and refreshed`, new lf({
      message: a,
      statusCode: n,
      cause: i
    });
  }
}, cf = "GatewayInvalidRequestError", uk = `vercel.ai.gateway.error.${cf}`, Fs = Symbol.for(uk), Js, Gs, lk = class extends (Gs = ot, Js = Fs, Gs) {
  constructor({
    message: e = "Invalid request",
    statusCode: t = 400,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[Js] = !0, this.name = cf, this.type = "invalid_request_error";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Fs in e;
  }
}, df = "GatewayRateLimitError", ck = `vercel.ai.gateway.error.${df}`, Vs = Symbol.for(ck), Bs, Ws, dk = class extends (Ws = ot, Bs = Vs, Ws) {
  constructor({
    message: e = "Rate limit exceeded",
    statusCode: t = 429,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[Bs] = !0, this.name = df, this.type = "rate_limit_exceeded";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Vs in e;
  }
}, pf = "GatewayModelNotFoundError", pk = `vercel.ai.gateway.error.${pf}`, Hs = Symbol.for(pk), mk = h({
  modelId: c()
}), Ks, Ys, mf = class extends (Ys = ot, Ks = Hs, Ys) {
  constructor({
    message: e = "Model not found",
    statusCode: t = 404,
    modelId: r,
    cause: o
  } = {}) {
    super({ message: e, statusCode: t, cause: o }), this[Ks] = !0, this.name = pf, this.type = "model_not_found", this.modelId = r;
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Hs in e;
  }
}, ff = "GatewayInternalServerError", fk = `vercel.ai.gateway.error.${ff}`, Xs = Symbol.for(fk), Qs, eu, tu = class extends (eu = ot, Qs = Xs, eu) {
  constructor({
    message: e = "Internal server error",
    statusCode: t = 500,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[Qs] = !0, this.name = ff, this.type = "internal_server_error";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Xs in e;
  }
}, gf = "GatewayResponseError", gk = `vercel.ai.gateway.error.${gf}`, nu = Symbol.for(gk), ru, ou, hk = class extends (ou = ot, ru = nu, ou) {
  constructor({
    message: e = "Invalid response from Gateway",
    statusCode: t = 502,
    response: r,
    validationError: o,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[ru] = !0, this.name = gf, this.type = "response_error", this.response = r, this.validationError = o;
  }
  static isInstance(e) {
    return ot.hasMarker(e) && nu in e;
  }
};
function iu({
  response: e,
  statusCode: t,
  defaultMessage: r = "Gateway request failed",
  cause: o,
  authMethod: n
}) {
  const i = vk.safeParse(e);
  if (!i.success)
    return new hk({
      message: `Invalid error response format: ${r}`,
      statusCode: t,
      response: e,
      validationError: i.error,
      cause: o
    });
  const a = i.data, s = a.error.type, u = a.error.message;
  switch (s) {
    case "authentication_error":
      return to.createContextualError({
        apiKeyProvided: n === "api-key",
        oidcTokenProvided: n === "oidc",
        statusCode: t,
        cause: o
      });
    case "invalid_request_error":
      return new lk({ message: u, statusCode: t, cause: o });
    case "rate_limit_exceeded":
      return new dk({ message: u, statusCode: t, cause: o });
    case "model_not_found": {
      const l = mk.safeParse(
        a.error.param
      );
      return new mf({
        message: u,
        statusCode: t,
        modelId: l.success ? l.data.modelId : void 0,
        cause: o
      });
    }
    case "internal_server_error":
      return new tu({ message: u, statusCode: t, cause: o });
    default:
      return new tu({ message: u, statusCode: t, cause: o });
  }
}
var vk = h({
  error: h({
    message: c(),
    type: c().nullish(),
    param: re().nullish(),
    code: X([c(), T()]).nullish()
  })
});
function Rn(e, t) {
  var r;
  return ot.isInstance(e) ? e : je.isInstance(e) ? iu({
    response: yk(e),
    statusCode: (r = e.statusCode) != null ? r : 500,
    defaultMessage: "Gateway request failed",
    cause: e,
    authMethod: t
  }) : iu({
    response: {},
    statusCode: 500,
    defaultMessage: e instanceof Error ? `Gateway request failed: ${e.message}` : "Unknown Gateway error",
    cause: e,
    authMethod: t
  });
}
function yk(e) {
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
var hf = "ai-gateway-auth-method";
function Or(e) {
  const t = _k.safeParse(
    e[hf]
  );
  return t.success ? t.data : void 0;
}
var _k = X([
  x("api-key"),
  x("oidc")
]), bk = class {
  constructor(e) {
    this.config = e;
  }
  async getAvailableModels() {
    try {
      const { value: e } = await bw({
        url: `${this.config.baseURL}/config`,
        headers: await Re(this.config.headers()),
        successfulResponseHandler: Ge(
          kk
        ),
        failedResponseHandler: Ut({
          errorSchema: $t(),
          errorToMessage: (t) => t
        }),
        fetch: this.config.fetch
      });
      return e;
    } catch (e) {
      throw Rn(e);
    }
  }
}, wk = h({
  specificationVersion: x("v2"),
  provider: c(),
  modelId: c()
}), $k = h({
  input: c(),
  output: c()
}), Ik = h({
  id: c(),
  name: c(),
  description: c().nullish(),
  pricing: $k.nullish(),
  specification: wk,
  modelType: ne(["language", "embedding", "image"]).nullish()
}), kk = h({
  models: A(Ik)
}), xk = class {
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
    const { args: t, warnings: r } = await this.getArgs(e), { abortSignal: o } = e, n = await Re(this.config.headers());
    try {
      const {
        responseHeaders: i,
        value: a,
        rawValue: s
      } = await Se({
        url: this.getUrl(),
        headers: Ee(
          n,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !1),
          await Re(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: Ge($t()),
        failedResponseHandler: Ut({
          errorSchema: $t(),
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
      throw Rn(i, Or(n));
    }
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { abortSignal: o } = e, n = await Re(this.config.headers());
    try {
      const { value: i, responseHeaders: a } = await Se({
        url: this.getUrl(),
        headers: Ee(
          n,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !0),
          await Re(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: tn($t()),
        failedResponseHandler: Ut({
          errorSchema: $t(),
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
      throw Rn(i, Or(n));
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
}, Sk = class {
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
    const i = await Re(this.config.headers());
    try {
      const {
        responseHeaders: a,
        value: s,
        rawValue: u
      } = await Se({
        url: this.getUrl(),
        headers: Ee(
          i,
          t ?? {},
          this.getModelConfigHeaders(),
          await Re(this.config.o11yHeaders)
        ),
        body: {
          input: e.length === 1 ? e[0] : e,
          ...o ?? {}
        },
        successfulResponseHandler: Ge(
          Tk
        ),
        failedResponseHandler: Ut({
          errorSchema: $t(),
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
      throw Rn(a, Or(i));
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
}, Tk = h({
  embeddings: A(A(T())),
  usage: h({ tokens: T() }).nullish(),
  providerMetadata: Fe(c(), Fe(c(), re())).optional()
});
async function Ok() {
  var e, t;
  const r = (t = (e = vf().headers) == null ? void 0 : e["x-vercel-oidc-token"]) != null ? t : process.env.VERCEL_OIDC_TOKEN;
  if (!r)
    throw new to({
      message: "OIDC token not available",
      statusCode: 401
    });
  return r;
}
async function Ek() {
  var e;
  return (e = vf().headers) == null ? void 0 : e["x-vercel-id"];
}
var Nk = Symbol.for("@vercel/request-context");
function vf() {
  var e, t, r;
  return (r = (t = (e = globalThis[Nk]) == null ? void 0 : e.get) == null ? void 0 : t.call(e)) != null ? r : {};
}
var Ck = "0.0.1";
function Pk(e = {}) {
  var t, r;
  let o = null, n = null;
  const i = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5;
  let a = 0;
  const s = (r = Xn(e.baseURL)) != null ? r : "https://ai-gateway.vercel.sh/v1/ai", u = async () => {
    const p = await Mk(e);
    if (p)
      return {
        Authorization: `Bearer ${p.token}`,
        "ai-gateway-protocol-version": Ck,
        [hf]: p.authMethod,
        ...e.headers
      };
    throw to.createContextualError({
      apiKeyProvided: !1,
      oidcTokenProvided: !1,
      statusCode: 401
    });
  }, l = () => {
    const p = mr({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    }), m = mr({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    }), _ = mr({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const v = await Ek();
      return {
        ...p && { "ai-o11y-deployment-id": p },
        ...m && { "ai-o11y-environment": m },
        ..._ && { "ai-o11y-region": _ },
        ...v && { "ai-o11y-request-id": v }
      };
    };
  }, d = (p) => new xk(p, {
    provider: "gateway",
    baseURL: s,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: l()
  }), f = async () => {
    var p, m, _;
    const v = (_ = (m = (p = e._internal) == null ? void 0 : p.currentDate) == null ? void 0 : m.call(p).getTime()) != null ? _ : Date.now();
    return (!o || v - a > i) && (a = v, o = new bk({
      baseURL: s,
      headers: u,
      fetch: e.fetch
    }).getAvailableModels().then((g) => (n = g, g)).catch(async (g) => {
      throw Rn(g, Or(await u()));
    })), n ? Promise.resolve(n) : o;
  }, y = function(p) {
    if (new.target)
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    return d(p);
  };
  return y.getAvailableModels = f, y.imageModel = (p) => {
    throw new Ze({ modelId: p, modelType: "imageModel" });
  }, y.languageModel = d, y.textEmbeddingModel = (p) => new Sk(p, {
    provider: "gateway",
    baseURL: s,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: l()
  }), y;
}
var Ak = Pk();
async function Mk(e) {
  const t = mr({
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
      token: await Ok(),
      authMethod: "oidc"
    };
  } catch {
    return null;
  }
}
var Rk = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Jt = "1.9.0", au = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function jk(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), o = e.match(au);
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
    var l = u.match(au);
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
var zk = jk(Jt), Uk = Jt.split(".")[0], jn = Symbol.for("opentelemetry.js.api." + Uk), zn = Rk;
function Qn(e, t, r, o) {
  var n;
  o === void 0 && (o = !1);
  var i = zn[jn] = (n = zn[jn]) !== null && n !== void 0 ? n : {
    version: Jt
  };
  if (!o && i[e]) {
    var a = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(a.stack || a.message), !1;
  }
  if (i.version !== Jt) {
    var a = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + e + " does not match previously registered API v" + Jt);
    return r.error(a.stack || a.message), !1;
  }
  return i[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Jt + "."), !0;
}
function Kt(e) {
  var t, r, o = (t = zn[jn]) === null || t === void 0 ? void 0 : t.version;
  if (!(!o || !zk(o)))
    return (r = zn[jn]) === null || r === void 0 ? void 0 : r[e];
}
function er(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Jt + ".");
  var r = zn[jn];
  r && delete r[e];
}
var Dk = function(e, t) {
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
}, qk = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Zk = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return In("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return In("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return In("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return In("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return In("verbose", this._namespace, t);
    }, e;
  }()
);
function In(e, t, r) {
  var o = Kt("diag");
  if (o)
    return r.unshift(t), o[e].apply(o, qk([], Dk(r), !1));
}
var nt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(nt || (nt = {}));
function Lk(e, t) {
  e < nt.NONE ? e = nt.NONE : e > nt.ALL && (e = nt.ALL), t = t || {};
  function r(o, n) {
    var i = t[o];
    return typeof i == "function" && e >= n ? i.bind(t) : function() {
    };
  }
  return {
    error: r("error", nt.ERROR),
    warn: r("warn", nt.WARN),
    info: r("info", nt.INFO),
    debug: r("debug", nt.DEBUG),
    verbose: r("verbose", nt.VERBOSE)
  };
}
var Fk = function(e, t) {
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
}, Jk = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Gk = "diag", xt = (
  /** @class */
  function() {
    function e() {
      function t(n) {
        return function() {
          for (var i = [], a = 0; a < arguments.length; a++)
            i[a] = arguments[a];
          var s = Kt("diag");
          if (s)
            return s[n].apply(s, Jk([], Fk(i), !1));
        };
      }
      var r = this, o = function(n, i) {
        var a, s, u;
        if (i === void 0 && (i = { logLevel: nt.INFO }), n === r) {
          var l = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((a = l.stack) !== null && a !== void 0 ? a : l.message), !1;
        }
        typeof i == "number" && (i = {
          logLevel: i
        });
        var d = Kt("diag"), f = Lk((s = i.logLevel) !== null && s !== void 0 ? s : nt.INFO, n);
        if (d && !i.suppressOverrideMessage) {
          var y = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + y), f.warn("Current logger will overwrite one already registered from " + y);
        }
        return Qn("diag", f, r, !0);
      };
      r.setLogger = o, r.disable = function() {
        er(Gk, r);
      }, r.createComponentLogger = function(n) {
        return new Zk(n);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), Vk = function(e, t) {
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
}, Bk = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], o = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Wk = (
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
        var r = Vk(t, 2), o = r[0], n = r[1];
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
        for (var a = Bk(o), s = a.next(); !s.done; s = a.next()) {
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
  }()
);
xt.instance();
function Hk(e) {
  return e === void 0 && (e = {}), new Wk(new Map(Object.entries(e)));
}
function yf(e) {
  return Symbol.for(e);
}
var Kk = (
  /** @class */
  /* @__PURE__ */ function() {
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
  }()
), Yk = new Kk(), nn = /* @__PURE__ */ function() {
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
}(), Xk = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, r) {
      return ux;
    }, e.prototype.createHistogram = function(t, r) {
      return lx;
    }, e.prototype.createCounter = function(t, r) {
      return sx;
    }, e.prototype.createUpDownCounter = function(t, r) {
      return cx;
    }, e.prototype.createObservableGauge = function(t, r) {
      return px;
    }, e.prototype.createObservableCounter = function(t, r) {
      return dx;
    }, e.prototype.createObservableUpDownCounter = function(t, r) {
      return mx;
    }, e.prototype.addBatchObservableCallback = function(t, r) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), no = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), Qk = (
  /** @class */
  function(e) {
    nn(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, o) {
    }, t;
  }(no)
), ex = (
  /** @class */
  function(e) {
    nn(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(r, o) {
    }, t;
  }(no)
), tx = (
  /** @class */
  function(e) {
    nn(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, o) {
    }, t;
  }(no)
), nx = (
  /** @class */
  function(e) {
    nn(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(r, o) {
    }, t;
  }(no)
), Ma = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), rx = (
  /** @class */
  function(e) {
    nn(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Ma)
), ox = (
  /** @class */
  function(e) {
    nn(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Ma)
), ix = (
  /** @class */
  function(e) {
    nn(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Ma)
), ax = new Xk(), sx = new Qk(), ux = new tx(), lx = new nx(), cx = new ex(), dx = new rx(), px = new ox(), mx = new ix(), fx = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, gx = {
  set: function(e, t, r) {
    e != null && (e[t] = r);
  }
}, hx = function(e, t) {
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
}, vx = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, yx = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return Yk;
    }, e.prototype.with = function(t, r, o) {
      for (var n = [], i = 3; i < arguments.length; i++)
        n[i - 3] = arguments[i];
      return r.call.apply(r, vx([o], hx(n), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), _x = function(e, t) {
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
}, bx = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, n = t.length, i; o < n; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Io = "context", wx = new yx(), ro = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Qn(Io, t, xt.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, o) {
      for (var n, i = [], a = 3; a < arguments.length; a++)
        i[a - 3] = arguments[a];
      return (n = this._getContextManager()).with.apply(n, bx([t, r, o], _x(i), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return Kt(Io) || wx;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), er(Io, xt.instance());
    }, e;
  }()
), Uo;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Uo || (Uo = {}));
var _f = "0000000000000000", bf = "00000000000000000000000000000000", $x = {
  traceId: bf,
  spanId: _f,
  traceFlags: Uo.NONE
}, Tn = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = $x), this._spanContext = t;
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
), Ra = yf("OpenTelemetry Context Key SPAN");
function ja(e) {
  return e.getValue(Ra) || void 0;
}
function Ix() {
  return ja(ro.getInstance().active());
}
function za(e, t) {
  return e.setValue(Ra, t);
}
function kx(e) {
  return e.deleteValue(Ra);
}
function xx(e, t) {
  return za(e, new Tn(t));
}
function wf(e) {
  var t;
  return (t = ja(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var Sx = /^([0-9a-f]{32})$/i, Tx = /^[0-9a-f]{16}$/i;
function Ox(e) {
  return Sx.test(e) && e !== bf;
}
function Ex(e) {
  return Tx.test(e) && e !== _f;
}
function $f(e) {
  return Ox(e.traceId) && Ex(e.spanId);
}
function Nx(e) {
  return new Tn(e);
}
var ko = ro.getInstance(), If = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, o) {
      o === void 0 && (o = ko.active());
      var n = !!(r != null && r.root);
      if (n)
        return new Tn();
      var i = o && wf(o);
      return Cx(i) && $f(i) ? new Tn(i) : new Tn();
    }, e.prototype.startActiveSpan = function(t, r, o, n) {
      var i, a, s;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? s = r : arguments.length === 3 ? (i = r, s = o) : (i = r, a = o, s = n);
        var u = a ?? ko.active(), l = this.startSpan(t, i, u), d = za(u, l);
        return ko.with(d, s, void 0, l);
      }
    }, e;
  }()
);
function Cx(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var Px = new If(), Ax = (
  /** @class */
  function() {
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
      return t ? (this._delegate = t, this._delegate) : Px;
    }, e;
  }()
), Mx = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, o) {
      return new If();
    }, e;
  }()
), Rx = new Mx(), su = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, o) {
      var n;
      return (n = this.getDelegateTracer(t, r, o)) !== null && n !== void 0 ? n : new Ax(this, t, r, o);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Rx;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, o) {
      var n;
      return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(t, r, o);
    }, e;
  }()
), Er;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(Er || (Er = {}));
ro.getInstance();
xt.instance();
var jx = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, r, o) {
      return ax;
    }, e;
  }()
), zx = new jx(), xo = "metrics", Ux = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return Qn(xo, t, xt.instance());
    }, e.prototype.getMeterProvider = function() {
      return Kt(xo) || zx;
    }, e.prototype.getMeter = function(t, r, o) {
      return this.getMeterProvider().getMeter(t, r, o);
    }, e.prototype.disable = function() {
      er(xo, xt.instance());
    }, e;
  }()
);
Ux.getInstance();
var Dx = (
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
), Ua = yf("OpenTelemetry Baggage Key");
function kf(e) {
  return e.getValue(Ua) || void 0;
}
function qx() {
  return kf(ro.getInstance().active());
}
function Zx(e, t) {
  return e.setValue(Ua, t);
}
function Lx(e) {
  return e.deleteValue(Ua);
}
var So = "propagation", Fx = new Dx(), Jx = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = Hk, this.getBaggage = kf, this.getActiveBaggage = qx, this.setBaggage = Zx, this.deleteBaggage = Lx;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return Qn(So, t, xt.instance());
    }, e.prototype.inject = function(t, r, o) {
      return o === void 0 && (o = gx), this._getGlobalPropagator().inject(t, r, o);
    }, e.prototype.extract = function(t, r, o) {
      return o === void 0 && (o = fx), this._getGlobalPropagator().extract(t, r, o);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      er(So, xt.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return Kt(So) || Fx;
    }, e;
  }()
);
Jx.getInstance();
var To = "trace", Gx = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new su(), this.wrapSpanContext = Nx, this.isSpanContextValid = $f, this.deleteSpan = kx, this.getSpan = ja, this.getActiveSpan = Ix, this.getSpanContext = wf, this.setSpan = za, this.setSpanContext = xx;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Qn(To, this._proxyTracerProvider, xt.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return Kt(To) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      er(To, xt.instance()), this._proxyTracerProvider = new su();
    }, e;
  }()
), Vx = Gx.getInstance(), Bx = Object.defineProperty, Wx = (e, t) => {
  for (var r in t)
    Bx(e, r, { get: t[r], enumerable: !0 });
}, xf = "AI_NoOutputSpecifiedError", Sf = `vercel.ai.error.${xf}`, Hx = Symbol.for(Sf), Tf, Of = class extends D {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: xf, message: e }), this[Tf] = !0;
  }
  static isInstance(e) {
    return D.hasMarker(e, Sf);
  }
};
Tf = Hx;
var Ef = "AI_InvalidArgumentError", Nf = `vercel.ai.error.${Ef}`, Kx = Symbol.for(Nf), Cf, be = class extends D {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: Ef,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[Cf] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return D.hasMarker(e, Nf);
  }
};
Cf = Kx;
var Pf = "AI_InvalidStreamPartError", Af = `vercel.ai.error.${Pf}`, Yx = Symbol.for(Af), Mf, pT = class extends D {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: Pf, message: t }), this[Mf] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, Af);
  }
};
Mf = Yx;
var Rf = "AI_InvalidToolInputError", jf = `vercel.ai.error.${Rf}`, Xx = Symbol.for(jf), zf, Uf = class extends D {
  constructor({
    toolInput: e,
    toolName: t,
    cause: r,
    message: o = `Invalid input for tool ${t}: ${mn(r)}`
  }) {
    super({ name: Rf, message: o, cause: r }), this[zf] = !0, this.toolInput = e, this.toolName = t;
  }
  static isInstance(e) {
    return D.hasMarker(e, jf);
  }
};
zf = Xx;
var Qx = "AI_MCPClientError", Df = `vercel.ai.error.${Qx}`, eS = Symbol.for(Df), qf, Me = class extends D {
  constructor({
    name: e = "MCPClientError",
    message: t,
    cause: r
  }) {
    super({ name: e, message: t, cause: r }), this[qf] = !0;
  }
  static isInstance(e) {
    return D.hasMarker(e, Df);
  }
};
qf = eS;
var Zf = "AI_NoImageGeneratedError", Lf = `vercel.ai.error.${Zf}`, tS = Symbol.for(Lf), Ff, nS = class extends D {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: r
  }) {
    super({ name: Zf, message: e, cause: t }), this[Ff] = !0, this.responses = r;
  }
  static isInstance(e) {
    return D.hasMarker(e, Lf);
  }
};
Ff = tS;
var Jf = "AI_NoObjectGeneratedError", Gf = `vercel.ai.error.${Jf}`, rS = Symbol.for(Gf), Vf, Yt = class extends D {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: o,
    usage: n,
    finishReason: i
  }) {
    super({ name: Jf, message: e, cause: t }), this[Vf] = !0, this.text = r, this.response = o, this.usage = n, this.finishReason = i;
  }
  static isInstance(e) {
    return D.hasMarker(e, Gf);
  }
};
Vf = rS;
var Bf = "AI_NoOutputGeneratedError", Wf = `vercel.ai.error.${Bf}`, oS = Symbol.for(Wf), Hf, iS = class extends D {
  // used in isInstance
  constructor({
    message: e = "No output generated.",
    cause: t
  } = {}) {
    super({ name: Bf, message: e, cause: t }), this[Hf] = !0;
  }
  static isInstance(e) {
    return D.hasMarker(e, Wf);
  }
};
Hf = oS;
var Kf = "AI_NoSuchToolError", Yf = `vercel.ai.error.${Kf}`, aS = Symbol.for(Yf), Xf, Do = class extends D {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Kf, message: r }), this[Xf] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return D.hasMarker(e, Yf);
  }
};
Xf = aS;
var Qf = "AI_ToolCallRepairError", eg = `vercel.ai.error.${Qf}`, sS = Symbol.for(eg), tg, uS = class extends D {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${mn(e)}`
  }) {
    super({ name: Qf, message: r, cause: e }), this[tg] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return D.hasMarker(e, eg);
  }
};
tg = sS;
var tr = class extends D {
  constructor(e) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${e.version} for provider "${e.provider}" and model "${e.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    }), this.version = e.version, this.provider = e.provider, this.modelId = e.modelId;
  }
}, ng = "AI_InvalidDataContentError", rg = `vercel.ai.error.${ng}`, lS = Symbol.for(rg), og, uu = class extends D {
  constructor({
    content: e,
    cause: t,
    message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: ng, message: r, cause: t }), this[og] = !0, this.content = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, rg);
  }
};
og = lS;
var ig = "AI_InvalidMessageRoleError", ag = `vercel.ai.error.${ig}`, cS = Symbol.for(ag), sg, dS = class extends D {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: ig, message: t }), this[sg] = !0, this.role = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, ag);
  }
};
sg = cS;
var ug = "AI_MessageConversionError", lg = `vercel.ai.error.${ug}`, pS = Symbol.for(lg), cg, dr = class extends D {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: ug, message: t }), this[cg] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return D.hasMarker(e, lg);
  }
};
cg = pS;
var dg = "AI_DownloadError", pg = `vercel.ai.error.${dg}`, mS = Symbol.for(pg), mg, Oo = class extends D {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: o,
    message: n = o == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${o}`
  }) {
    super({ name: dg, message: n, cause: o }), this[mg] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return D.hasMarker(e, pg);
  }
};
mg = mS;
var fg = "AI_RetryError", gg = `vercel.ai.error.${fg}`, fS = Symbol.for(gg), hg, lu = class extends D {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: fg, message: e }), this[hg] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return D.hasMarker(e, gg);
  }
};
hg = fS;
function pn(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v2")
      throw new tr({
        version: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId
      });
    return e;
  }
  return yg().languageModel(e);
}
function vg(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v2")
      throw new tr({
        version: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId
      });
    return e;
  }
  return yg().textEmbeddingModel(
    e
  );
}
function yg() {
  var e;
  return (e = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? e : Ak;
}
var _g = [
  {
    mediaType: "image/gif",
    bytesPrefix: [71, 73, 70],
    base64Prefix: "R0lG"
  },
  {
    mediaType: "image/png",
    bytesPrefix: [137, 80, 78, 71],
    base64Prefix: "iVBORw"
  },
  {
    mediaType: "image/jpeg",
    bytesPrefix: [255, 216],
    base64Prefix: "/9j/"
  },
  {
    mediaType: "image/webp",
    bytesPrefix: [82, 73, 70, 70],
    base64Prefix: "UklGRg"
  },
  {
    mediaType: "image/bmp",
    bytesPrefix: [66, 77],
    base64Prefix: "Qk"
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [73, 73, 42, 0],
    base64Prefix: "SUkqAA"
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [77, 77, 0, 42],
    base64Prefix: "TU0AKg"
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
    ],
    base64Prefix: "AAAAIGZ0eXBhdmlm"
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
    ],
    base64Prefix: "AAAAIGZ0eXBoZWlj"
  }
], bg = [
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 251],
    base64Prefix: "//s="
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 250],
    base64Prefix: "//o="
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 243],
    base64Prefix: "//M="
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 242],
    base64Prefix: "//I="
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 227],
    base64Prefix: "/+M="
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 226],
    base64Prefix: "/+I="
  },
  {
    mediaType: "audio/wav",
    bytesPrefix: [82, 73, 70, 70],
    base64Prefix: "UklGR"
  },
  {
    mediaType: "audio/ogg",
    bytesPrefix: [79, 103, 103, 83],
    base64Prefix: "T2dnUw"
  },
  {
    mediaType: "audio/flac",
    bytesPrefix: [102, 76, 97, 67],
    base64Prefix: "ZkxhQw"
  },
  {
    mediaType: "audio/aac",
    bytesPrefix: [64, 21, 0, 0],
    base64Prefix: "QBUA"
  },
  {
    mediaType: "audio/mp4",
    bytesPrefix: [102, 116, 121, 112],
    base64Prefix: "ZnR5cA"
  },
  {
    mediaType: "audio/webm",
    bytesPrefix: [26, 69, 223, 163],
    base64Prefix: "GkXf"
  }
], gS = (e) => {
  const t = typeof e == "string" ? eo(e) : e, r = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
  return t.slice(r + 10);
};
function hS(e) {
  return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && // 'I'
  e[1] === 68 && // 'D'
  e[2] === 51 ? gS(e) : e;
}
function oo({
  data: e,
  signatures: t
}) {
  const r = hS(e);
  for (const o of t)
    if (typeof r == "string" ? r.startsWith(o.base64Prefix) : r.length >= o.bytesPrefix.length && o.bytesPrefix.every(
      (n, i) => r[i] === n
    ))
      return o.mediaType;
}
async function wg({ url: e }) {
  var t;
  const r = e.toString();
  try {
    const o = await fetch(r);
    if (!o.ok)
      throw new Oo({
        url: r,
        statusCode: o.status,
        statusText: o.statusText
      });
    return {
      data: new Uint8Array(await o.arrayBuffer()),
      mediaType: (t = o.headers.get("content-type")) != null ? t : void 0
    };
  } catch (o) {
    throw Oo.isInstance(o) ? o : new Oo({ url: r, cause: o });
  }
}
function vS(e) {
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
var $g = X([
  c(),
  An(Uint8Array),
  An(ArrayBuffer),
  Im(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function Ig(e) {
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
    const { mediaType: t, base64Content: r } = vS(
      e.toString()
    );
    if (t == null || r == null)
      throw new D({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`
      });
    return { data: r, mediaType: t };
  }
  return { data: e, mediaType: void 0 };
}
function yS(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? Tr(new Uint8Array(e)) : Tr(e);
}
function _S(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return eo(e);
    } catch (t) {
      throw new uu({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new uu({ content: e });
}
async function io({
  prompt: e,
  supportedUrls: t,
  downloadImplementation: r = wg
}) {
  const o = await wS(
    e.messages,
    r,
    t
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (n) => bS({ message: n, downloadedAssets: o })
    )
  ];
}
function bS({
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
        content: e.content.map((o) => $S(o, t)).filter((o) => o.type !== "text" || o.text !== ""),
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
          // remove empty text parts:
          (o) => o.type !== "text" || o.text !== ""
        ).map((o) => {
          const n = o.providerOptions;
          switch (o.type) {
            case "file": {
              const { data: i, mediaType: a } = Ig(
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
      throw new dS({ role: o });
    }
  }
}
async function wS(e, t, r) {
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
    (i) => i.data instanceof URL && i.mediaType != null && !Sw({
      url: i.data.toString(),
      mediaType: i.mediaType,
      supportedUrls: r
    })
  ).map((i) => i.data), n = await Promise.all(
    o.map(async (i) => ({
      url: i,
      data: await t({ url: i })
    }))
  );
  return Object.fromEntries(
    n.map(({ url: i, data: a }) => [i.toString(), a])
  );
}
function $S(e, t) {
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
  const { data: i, mediaType: a } = Ig(o);
  let s = a ?? e.mediaType, u = i;
  if (u instanceof URL) {
    const l = t[u.toString()];
    l && (u = l.data, s ?? (s = l.mediaType));
  }
  switch (n) {
    case "image":
      return (u instanceof Uint8Array || typeof u == "string") && (s = (r = oo({ data: u, signatures: _g })) != null ? r : s), {
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
function Xt({
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
      throw new be({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer"
      });
    if (e < 1)
      throw new be({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new be({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new be({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (o != null && typeof o != "number")
    throw new be({
      parameter: "topK",
      value: o,
      message: "topK must be a number"
    });
  if (n != null && typeof n != "number")
    throw new be({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number"
    });
  if (i != null && typeof i != "number")
    throw new be({
      parameter: "frequencyPenalty",
      value: i,
      message: "frequencyPenalty must be a number"
    });
  if (a != null && !Number.isInteger(a))
    throw new be({
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
function IS(e) {
  return e != null && Object.keys(e).length > 0;
}
function kg({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  return IS(e) ? {
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
            inputSchema: dn(i.inputSchema).jsonSchema,
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
var Un = Hr(
  () => X([
    ba(),
    c(),
    T(),
    W(),
    Fe(c(), Un),
    A(Un)
  ])
), ae = Fe(
  c(),
  Fe(c(), Un)
), xg = h({
  type: x("text"),
  text: c(),
  providerOptions: ae.optional()
}), kS = h({
  type: x("image"),
  image: X([$g, An(URL)]),
  mediaType: c().optional(),
  providerOptions: ae.optional()
}), Sg = h({
  type: x("file"),
  data: X([$g, An(URL)]),
  filename: c().optional(),
  mediaType: c(),
  providerOptions: ae.optional()
}), xS = h({
  type: x("reasoning"),
  text: c(),
  providerOptions: ae.optional()
}), SS = h({
  type: x("tool-call"),
  toolCallId: c(),
  toolName: c(),
  input: re(),
  providerOptions: ae.optional(),
  providerExecuted: W().optional()
}), TS = Le("type", [
  h({
    type: x("text"),
    value: c()
  }),
  h({
    type: x("json"),
    value: Un
  }),
  h({
    type: x("error-text"),
    value: c()
  }),
  h({
    type: x("error-json"),
    value: Un
  }),
  h({
    type: x("content"),
    value: A(
      X([
        h({
          type: x("text"),
          text: c()
        }),
        h({
          type: x("media"),
          data: c(),
          mediaType: c()
        })
      ])
    )
  })
]), Tg = h({
  type: x("tool-result"),
  toolCallId: c(),
  toolName: c(),
  output: TS,
  providerOptions: ae.optional()
}), Og = h(
  {
    role: x("system"),
    content: c(),
    providerOptions: ae.optional()
  }
), mT = Og, Eg = h({
  role: x("user"),
  content: X([
    c(),
    A(X([xg, kS, Sg]))
  ]),
  providerOptions: ae.optional()
}), fT = Eg, Ng = h({
  role: x("assistant"),
  content: X([
    c(),
    A(
      X([
        xg,
        Sg,
        xS,
        SS,
        Tg
      ])
    )
  ]),
  providerOptions: ae.optional()
}), gT = Ng, Cg = h({
  role: x("tool"),
  content: A(Tg),
  providerOptions: ae.optional()
}), hT = Cg, Pg = X([
  Og,
  Eg,
  Ng,
  Cg
]), vT = Pg;
async function ao(e) {
  if (e.prompt == null && e.messages == null)
    throw new Zt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new Zt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new Zt({
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
    throw new Zt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (t.length === 0)
    throw new Zt({
      prompt: e,
      message: "messages must not be empty"
    });
  const r = await Nt({
    value: t,
    schema: A(Pg)
  });
  if (!r.success)
    throw new Zt({
      prompt: e,
      message: "The messages must be a ModelMessage[]. If you have passed a UIMessage[], you can use convertToModelMessages to convert them.",
      cause: r.error
    });
  return {
    messages: t,
    system: e.system
  };
}
function so(e) {
  return to.isInstance(e) || mf.isInstance(e) ? new D({
    name: "GatewayError",
    message: "Vercel AI Gateway access failed. If you want to use AI SDK providers directly, use the providers, e.g. @ai-sdk/openai, or register a different global default provider.",
    cause: e
  }) : e;
}
function He({
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
function hn({
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
var OS = {
  startSpan() {
    return pr;
  },
  startActiveSpan(e, t, r, o) {
    if (typeof t == "function")
      return t(pr);
    if (typeof r == "function")
      return r(pr);
    if (typeof o == "function")
      return o(pr);
  }
}, pr = {
  spanContext() {
    return ES;
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
}, ES = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function vn({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || Vx.getTracer("ai") : OS;
}
function Ke({
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
        Da(i, a);
      } finally {
        i.end();
      }
      throw a;
    }
  });
}
function Da(e, t) {
  t instanceof Error ? (e.recordException({
    name: t.name,
    message: t.message,
    stack: t.stack
  }), e.setStatus({
    code: Er.ERROR,
    message: t.message
  })) : e.setStatus({ code: Er.ERROR });
}
function ue({
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
function uo(e) {
  return JSON.stringify(
    e.map((t) => ({
      ...t,
      content: typeof t.content == "string" ? t.content : t.content.map(
        (r) => r.type === "file" ? {
          ...r,
          data: r.data instanceof Uint8Array ? yS(r.data) : r.data
        } : r
      )
    }))
  );
}
function Ag(e, t) {
  return {
    inputTokens: kn(e.inputTokens, t.inputTokens),
    outputTokens: kn(e.outputTokens, t.outputTokens),
    totalTokens: kn(e.totalTokens, t.totalTokens),
    reasoningTokens: kn(
      e.reasoningTokens,
      t.reasoningTokens
    ),
    cachedInputTokens: kn(
      e.cachedInputTokens,
      t.cachedInputTokens
    )
  };
}
function kn(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function Nr(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function NS({
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
var CS = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2,
  abortSignal: o
} = {}) => async (n) => Mg(n, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r,
  abortSignal: o
});
async function Mg(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: o,
  abortSignal: n
}, i = []) {
  try {
    return await e();
  } catch (a) {
    if (Ht(a) || t === 0)
      throw a;
    const s = Yr(a), u = [...i, a], l = u.length;
    if (l > t)
      throw new lu({
        message: `Failed after ${l} attempts. Last error: ${s}`,
        reason: "maxRetriesExceeded",
        errors: u
      });
    if (a instanceof Error && je.isInstance(a) && a.isRetryable === !0 && l <= t)
      return await Ea(
        NS({
          error: a,
          exponentialBackoffDelay: r
        }),
        { abortSignal: n }
      ), Mg(
        e,
        {
          maxRetries: t,
          delayInMs: o * r,
          backoffFactor: o,
          abortSignal: n
        },
        u
      );
    throw l === 1 ? a : new lu({
      message: `Failed after ${l} attempts with non-retryable error: '${s}'`,
      reason: "errorNotRetryable",
      errors: u
    });
  }
}
function Ct({
  maxRetries: e,
  abortSignal: t
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new be({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new be({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const r = e ?? 2;
  return {
    maxRetries: r,
    retry: CS({
      maxRetries: r,
      abortSignal: t
    })
  };
}
function qo(e) {
  const t = e.filter(
    (r) => r.type === "text"
  );
  if (t.length !== 0)
    return t.map((r) => r.text).join("");
}
var lo = class {
  constructor({
    data: e,
    mediaType: t
  }) {
    const r = e instanceof Uint8Array;
    this.base64Data = r ? void 0 : e, this.uint8ArrayData = r ? e : void 0, this.mediaType = t;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = Tr(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = eo(this.base64Data)), this.uint8ArrayData;
  }
}, PS = class extends lo {
  constructor(e) {
    super(e), this.type = "file";
  }
};
async function Rg({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: o,
  messages: n
}) {
  try {
    if (t == null)
      throw new Do({ toolName: e.toolName });
    try {
      return await cu({ toolCall: e, tools: t });
    } catch (i) {
      if (r == null || !(Do.isInstance(i) || Uf.isInstance(i)))
        throw i;
      let a = null;
      try {
        a = await r({
          toolCall: e,
          tools: t,
          inputSchema: ({ toolName: s }) => {
            const { inputSchema: u } = t[s];
            return dn(u).jsonSchema;
          },
          system: o,
          messages: n,
          error: i
        });
      } catch (s) {
        throw new uS({
          cause: s,
          originalError: i
        });
      }
      if (a == null)
        throw i;
      return await cu({ toolCall: a, tools: t });
    }
  } catch (i) {
    const a = await zt({ text: e.input }), s = a.success ? a.value : e.input;
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
async function cu({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, o = t[r];
  if (o == null)
    throw new Do({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const n = dn(o.inputSchema), i = e.input.trim() === "" ? await Nt({ value: {}, schema: n }) : await zt({ text: e.input, schema: n });
  if (i.success === !1)
    throw new Uf({
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
var jg = class {
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
      (e) => e.dynamic === !1
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
      (e) => e.dynamic === !1
    );
  }
  get dynamicToolResults() {
    return this.toolResults.filter(
      (e) => e.dynamic === !0
    );
  }
};
function zg(e) {
  return ({ steps: t }) => t.length === e;
}
function yT(e) {
  return ({ steps: t }) => {
    var r, o, n;
    return (n = (o = (r = t[t.length - 1]) == null ? void 0 : r.toolCalls) == null ? void 0 : o.some(
      (i) => i.toolName === e
    )) != null ? n : !1;
  };
}
async function Ug({
  stopConditions: e,
  steps: t
}) {
  return (await Promise.all(e.map((r) => r({ steps: t })))).some((r) => r);
}
function On({
  output: e,
  tool: t,
  errorMode: r
}) {
  return r === "text" ? { type: "error-text", value: mn(e) } : r === "json" ? { type: "error-json", value: du(e) } : t != null && t.toModelOutput ? t.toModelOutput(e) : typeof e == "string" ? { type: "text", value: e } : { type: "json", value: du(e) };
}
function du(e) {
  return e === void 0 ? null : e;
}
function Zo({
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
          output: On({
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
          output: On({
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
    output: On({
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
var AS = Yn({
  prefix: "aitxt",
  size: 24
});
async function MS({
  model: e,
  tools: t,
  toolChoice: r,
  system: o,
  prompt: n,
  messages: i,
  maxRetries: a,
  abortSignal: s,
  headers: u,
  stopWhen: l = zg(1),
  experimental_output: d,
  experimental_telemetry: f,
  providerOptions: y,
  experimental_activeTools: p,
  activeTools: m = p,
  experimental_prepareStep: _,
  prepareStep: v = _,
  experimental_repairToolCall: g,
  experimental_context: b,
  _internal: {
    generateId: w = AS,
    currentDate: $ = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: O,
  ...E
}) {
  const I = pn(e), k = Nr(l), { maxRetries: M, retry: C } = Ct({
    maxRetries: a,
    abortSignal: s
  }), j = Xt(E), Z = hn({
    model: I,
    telemetry: f,
    headers: u,
    settings: { ...j, maxRetries: M }
  }), L = await ao({
    system: o,
    prompt: n,
    messages: i
  }), ce = vn(f);
  try {
    return await Ke({
      name: "ai.generateText",
      attributes: ue({
        telemetry: f,
        attributes: {
          ...He({
            operationId: "ai.generateText",
            telemetry: f
          }),
          ...Z,
          // model:
          "ai.model.provider": I.provider,
          "ai.model.id": I.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: n, messages: i })
          }
        }
      }),
      tracer: ce,
      fn: async (N) => {
        var se, ke, Pe, oe, qe, Oe;
        const z = Xt(E);
        let Y, ye = [], te = [];
        const Ae = [], me = [];
        do {
          const de = [
            ...L.messages,
            ...Ae
          ], ge = await (v == null ? void 0 : v({
            model: I,
            steps: me,
            stepNumber: me.length,
            messages: de
          })), et = await io({
            prompt: {
              system: (se = ge == null ? void 0 : ge.system) != null ? se : L.system,
              messages: (ke = ge == null ? void 0 : ge.messages) != null ? ke : de
            },
            supportedUrls: await I.supportedUrls
          }), _e = pn(
            (Pe = ge == null ? void 0 : ge.model) != null ? Pe : I
          ), { toolChoice: V, tools: ie } = kg({
            tools: t,
            toolChoice: (oe = ge == null ? void 0 : ge.toolChoice) != null ? oe : r,
            activeTools: (qe = ge == null ? void 0 : ge.activeTools) != null ? qe : m
          });
          Y = await C(
            () => {
              var G;
              return Ke({
                name: "ai.generateText.doGenerate",
                attributes: ue({
                  telemetry: f,
                  attributes: {
                    ...He({
                      operationId: "ai.generateText.doGenerate",
                      telemetry: f
                    }),
                    ...Z,
                    // model:
                    "ai.model.provider": _e.provider,
                    "ai.model.id": _e.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: () => uo(et)
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: () => ie == null ? void 0 : ie.map((Ie) => JSON.stringify(Ie))
                    },
                    "ai.prompt.toolChoice": {
                      input: () => V != null ? JSON.stringify(V) : void 0
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": _e.provider,
                    "gen_ai.request.model": _e.modelId,
                    "gen_ai.request.frequency_penalty": E.frequencyPenalty,
                    "gen_ai.request.max_tokens": E.maxOutputTokens,
                    "gen_ai.request.presence_penalty": E.presencePenalty,
                    "gen_ai.request.stop_sequences": E.stopSequences,
                    "gen_ai.request.temperature": (G = E.temperature) != null ? G : void 0,
                    "gen_ai.request.top_k": E.topK,
                    "gen_ai.request.top_p": E.topP
                  }
                }),
                tracer: ce,
                fn: async (Ie) => {
                  var qt, yt, yn, _n, Pt, tt, bn, At;
                  const Ne = await _e.doGenerate({
                    ...z,
                    tools: ie,
                    toolChoice: V,
                    responseFormat: d == null ? void 0 : d.responseFormat,
                    prompt: et,
                    providerOptions: y,
                    abortSignal: s,
                    headers: u
                  }), _t = {
                    id: (yt = (qt = Ne.response) == null ? void 0 : qt.id) != null ? yt : w(),
                    timestamp: (_n = (yn = Ne.response) == null ? void 0 : yn.timestamp) != null ? _n : $(),
                    modelId: (tt = (Pt = Ne.response) == null ? void 0 : Pt.modelId) != null ? tt : _e.modelId,
                    headers: (bn = Ne.response) == null ? void 0 : bn.headers,
                    body: (At = Ne.response) == null ? void 0 : At.body
                  };
                  return Ie.setAttributes(
                    ue({
                      telemetry: f,
                      attributes: {
                        "ai.response.finishReason": Ne.finishReason,
                        "ai.response.text": {
                          output: () => qo(Ne.content)
                        },
                        "ai.response.toolCalls": {
                          output: () => {
                            const rr = pu(Ne.content);
                            return rr == null ? void 0 : JSON.stringify(rr);
                          }
                        },
                        "ai.response.id": _t.id,
                        "ai.response.model": _t.modelId,
                        "ai.response.timestamp": _t.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          Ne.providerMetadata
                        ),
                        // TODO rename telemetry attributes to inputTokens and outputTokens
                        "ai.usage.promptTokens": Ne.usage.inputTokens,
                        "ai.usage.completionTokens": Ne.usage.outputTokens,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [Ne.finishReason],
                        "gen_ai.response.id": _t.id,
                        "gen_ai.response.model": _t.modelId,
                        "gen_ai.usage.input_tokens": Ne.usage.inputTokens,
                        "gen_ai.usage.output_tokens": Ne.usage.outputTokens
                      }
                    })
                  ), { ...Ne, response: _t };
                }
              });
            }
          );
          const F = await Promise.all(
            Y.content.filter(
              (G) => G.type === "tool-call"
            ).map(
              (G) => Rg({
                toolCall: G,
                tools: t,
                repairToolCall: g,
                system: o,
                messages: de
              })
            )
          );
          for (const G of F) {
            if (G.invalid)
              continue;
            const Ie = t[G.toolName];
            (Ie == null ? void 0 : Ie.onInputAvailable) != null && await Ie.onInputAvailable({
              input: G.input,
              toolCallId: G.toolCallId,
              messages: de,
              abortSignal: s,
              experimental_context: b
            });
          }
          const q = F.filter(
            (G) => G.invalid && G.dynamic
          );
          te = [];
          for (const G of q)
            te.push({
              type: "tool-error",
              toolCallId: G.toolCallId,
              toolName: G.toolName,
              input: G.input,
              error: Yr(G.error),
              dynamic: !0
            });
          ye = F.filter(
            (G) => !G.providerExecuted
          ), t != null && te.push(
            ...await RS({
              toolCalls: ye.filter(
                (G) => !G.invalid
              ),
              tools: t,
              tracer: ce,
              telemetry: f,
              messages: de,
              abortSignal: s,
              experimental_context: b
            })
          );
          const ze = zS({
            content: Y.content,
            toolCalls: F,
            toolOutputs: te
          });
          Ae.push(
            ...Zo({
              content: ze,
              tools: t
            })
          );
          const U = new jg({
            content: ze,
            finishReason: Y.finishReason,
            usage: Y.usage,
            warnings: Y.warnings,
            providerMetadata: Y.providerMetadata,
            request: (Oe = Y.request) != null ? Oe : {},
            response: {
              ...Y.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(Ae)
            }
          });
          me.push(U), await (O == null ? void 0 : O(U));
        } while (
          // there are tool calls:
          ye.length > 0 && // all current tool calls have outputs (incl. execution errors):
          te.length === ye.length && // continue until a stop condition is met:
          !await Ug({ stopConditions: k, steps: me })
        );
        N.setAttributes(
          ue({
            telemetry: f,
            attributes: {
              "ai.response.finishReason": Y.finishReason,
              "ai.response.text": {
                output: () => qo(Y.content)
              },
              "ai.response.toolCalls": {
                output: () => {
                  const de = pu(Y.content);
                  return de == null ? void 0 : JSON.stringify(de);
                }
              },
              "ai.response.providerMetadata": JSON.stringify(
                Y.providerMetadata
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": Y.usage.inputTokens,
              "ai.usage.completionTokens": Y.usage.outputTokens
            }
          })
        );
        const fe = me[me.length - 1];
        return new jS({
          steps: me,
          resolvedOutput: await (d == null ? void 0 : d.parseOutput(
            { text: fe.text },
            {
              response: fe.response,
              usage: fe.usage,
              finishReason: fe.finishReason
            }
          ))
        });
      }
    });
  } catch (N) {
    throw so(N);
  }
}
async function RS({
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
      const f = t[l];
      if ((f == null ? void 0 : f.execute) != null)
        return Ke({
          name: "ai.toolCall",
          attributes: ue({
            telemetry: o,
            attributes: {
              ...He({
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
              const p = jm({
                execute: f.execute.bind(f),
                input: d,
                options: {
                  toolCallId: u,
                  messages: n,
                  abortSignal: i,
                  experimental_context: a
                }
              });
              let m;
              for await (const _ of p)
                _.type === "final" && (m = _.output);
              try {
                y.setAttributes(
                  ue({
                    telemetry: o,
                    attributes: {
                      "ai.toolCall.result": {
                        output: () => JSON.stringify(m)
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
                output: m,
                dynamic: f.type === "dynamic"
              };
            } catch (p) {
              return Da(y, p), {
                type: "tool-error",
                toolCallId: u,
                toolName: l,
                input: d,
                error: p,
                dynamic: f.type === "dynamic"
              };
            }
          }
        });
    })
  )).filter(
    (u) => u != null
  );
}
var jS = class {
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
      (e, t) => Ag(e, t.usage),
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
      throw new Of();
    return this.resolvedOutput;
  }
};
function pu(e) {
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
function zS({
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
            file: new lo(o)
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
function nr(e, t) {
  const r = new Headers(e ?? {});
  for (const [o, n] of Object.entries(t))
    r.has(o) || r.set(o, n);
  return r;
}
function Dg({
  status: e,
  statusText: t,
  headers: r,
  textStream: o
}) {
  return new Response(o.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: nr(r, {
      "content-type": "text/plain; charset=utf-8"
    })
  });
}
function qg({
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
function Zg({
  response: e,
  status: t,
  statusText: r,
  headers: o,
  textStream: n
}) {
  qg({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(
      nr(o, {
        "content-type": "text/plain; charset=utf-8"
      }).entries()
    ),
    stream: n.pipeThrough(new TextEncoderStream())
  });
}
var Lg = class extends TransformStream {
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
}, Fg = {
  "content-type": "text/event-stream",
  "cache-control": "no-cache",
  connection: "keep-alive",
  "x-vercel-ai-ui-message-stream": "v1",
  "x-accel-buffering": "no"
  // disable nginx buffering
};
function US({
  status: e,
  statusText: t,
  headers: r,
  stream: o,
  consumeSseStream: n
}) {
  let i = o.pipeThrough(new Lg());
  if (n) {
    const [a, s] = i.tee();
    i = a, n({ stream: s });
  }
  return new Response(i.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: nr(r, Fg)
  });
}
function DS({
  originalMessages: e,
  responseMessageId: t
}) {
  if (e == null)
    return;
  const r = e[e.length - 1];
  return (r == null ? void 0 : r.role) === "assistant" ? r.id : typeof t == "function" ? t() : t;
}
var Jg = X([
  he({
    type: x("text-start"),
    id: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("text-delta"),
    id: c(),
    delta: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("text-end"),
    id: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("error"),
    errorText: c()
  }),
  he({
    type: x("tool-input-start"),
    toolCallId: c(),
    toolName: c(),
    providerExecuted: W().optional(),
    dynamic: W().optional()
  }),
  he({
    type: x("tool-input-delta"),
    toolCallId: c(),
    inputTextDelta: c()
  }),
  he({
    type: x("tool-input-available"),
    toolCallId: c(),
    toolName: c(),
    input: re(),
    providerExecuted: W().optional(),
    providerMetadata: ae.optional(),
    dynamic: W().optional()
  }),
  he({
    type: x("tool-input-error"),
    toolCallId: c(),
    toolName: c(),
    input: re(),
    providerExecuted: W().optional(),
    providerMetadata: ae.optional(),
    dynamic: W().optional(),
    errorText: c()
  }),
  he({
    type: x("tool-output-available"),
    toolCallId: c(),
    output: re(),
    providerExecuted: W().optional(),
    dynamic: W().optional(),
    preliminary: W().optional()
  }),
  he({
    type: x("tool-output-error"),
    toolCallId: c(),
    errorText: c(),
    providerExecuted: W().optional(),
    dynamic: W().optional()
  }),
  he({
    type: x("reasoning"),
    text: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("reasoning-start"),
    id: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("reasoning-delta"),
    id: c(),
    delta: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("reasoning-end"),
    id: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("reasoning-part-finish")
  }),
  he({
    type: x("source-url"),
    sourceId: c(),
    url: c(),
    title: c().optional(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("source-document"),
    sourceId: c(),
    mediaType: c(),
    title: c(),
    filename: c().optional(),
    providerMetadata: ae.optional()
  }),
  he({
    type: x("file"),
    url: c(),
    mediaType: c(),
    providerMetadata: ae.optional()
  }),
  he({
    type: c().startsWith("data-"),
    id: c().optional(),
    data: re(),
    transient: W().optional()
  }),
  he({
    type: x("start-step")
  }),
  he({
    type: x("finish-step")
  }),
  he({
    type: x("start"),
    messageId: c().optional(),
    messageMetadata: re().optional()
  }),
  he({
    type: x("finish"),
    messageMetadata: re().optional()
  }),
  he({
    type: x("abort")
  }),
  he({
    type: x("message-metadata"),
    messageMetadata: re()
  })
]);
function qS(e) {
  return e.type.startsWith("data-");
}
function qa(e, t) {
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
      a && s ? r[o] = qa(
        i,
        n
      ) : r[o] = n;
    }
  return r;
}
function ZS(e) {
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
        const f = e.substring(o, u + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? i(l, u) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && a(l, u)) : r = u;
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
async function Za(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = await zt({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = await zt({ text: ZS(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
function It(e) {
  return e.type.startsWith("tool-");
}
function Cr(e) {
  return e.type.split("-").slice(1).join("-");
}
function La({
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
function Fa({
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
          var f, y, p, m;
          function _($) {
            const E = l.message.parts.filter(It).find(
              (I) => I.toolCallId === $
            );
            if (E == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return E;
          }
          function v($) {
            const E = l.message.parts.filter(
              (I) => I.type === "dynamic-tool"
            ).find(
              (I) => I.toolCallId === $
            );
            if (E == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return E;
          }
          function g($) {
            var O;
            const E = l.message.parts.find(
              (M) => It(M) && M.toolCallId === $.toolCallId
            ), I = $, k = E;
            E != null ? (E.state = $.state, k.input = I.input, k.output = I.output, k.errorText = I.errorText, k.rawInput = I.rawInput, k.preliminary = I.preliminary, k.providerExecuted = (O = I.providerExecuted) != null ? O : E.providerExecuted, I.providerMetadata != null && E.state === "input-available" && (E.callProviderMetadata = I.providerMetadata)) : l.message.parts.push({
              type: `tool-${$.toolName}`,
              toolCallId: $.toolCallId,
              state: $.state,
              input: I.input,
              output: I.output,
              rawInput: I.rawInput,
              errorText: I.errorText,
              providerExecuted: I.providerExecuted,
              preliminary: I.preliminary,
              ...I.providerMetadata != null ? { callProviderMetadata: I.providerMetadata } : {}
            });
          }
          function b($) {
            var O;
            const E = l.message.parts.find(
              (M) => M.type === "dynamic-tool" && M.toolCallId === $.toolCallId
            ), I = $, k = E;
            E != null ? (E.state = $.state, k.toolName = $.toolName, k.input = I.input, k.output = I.output, k.errorText = I.errorText, k.rawInput = (O = I.rawInput) != null ? O : k.rawInput, k.preliminary = I.preliminary, I.providerMetadata != null && E.state === "input-available" && (E.callProviderMetadata = I.providerMetadata)) : l.message.parts.push({
              type: "dynamic-tool",
              toolName: $.toolName,
              toolCallId: $.toolCallId,
              state: $.state,
              input: I.input,
              output: I.output,
              errorText: I.errorText,
              preliminary: I.preliminary,
              ...I.providerMetadata != null ? { callProviderMetadata: I.providerMetadata } : {}
            });
          }
          async function w($) {
            if ($ != null) {
              const O = l.message.metadata != null ? qa(l.message.metadata, $) : $;
              t != null && await Rt({
                value: O,
                schema: t
              }), l.message.metadata = O;
            }
          }
          switch (s.type) {
            case "text-start": {
              const $ = {
                type: "text",
                text: "",
                providerMetadata: s.providerMetadata,
                state: "streaming"
              };
              l.activeTextParts[s.id] = $, l.message.parts.push($), d();
              break;
            }
            case "text-delta": {
              const $ = l.activeTextParts[s.id];
              $.text += s.delta, $.providerMetadata = (f = s.providerMetadata) != null ? f : $.providerMetadata, d();
              break;
            }
            case "text-end": {
              const $ = l.activeTextParts[s.id];
              $.state = "done", $.providerMetadata = (y = s.providerMetadata) != null ? y : $.providerMetadata, delete l.activeTextParts[s.id], d();
              break;
            }
            case "reasoning-start": {
              const $ = {
                type: "reasoning",
                text: "",
                providerMetadata: s.providerMetadata,
                state: "streaming"
              };
              l.activeReasoningParts[s.id] = $, l.message.parts.push($), d();
              break;
            }
            case "reasoning-delta": {
              const $ = l.activeReasoningParts[s.id];
              $.text += s.delta, $.providerMetadata = (p = s.providerMetadata) != null ? p : $.providerMetadata, d();
              break;
            }
            case "reasoning-end": {
              const $ = l.activeReasoningParts[s.id];
              $.providerMetadata = (m = s.providerMetadata) != null ? m : $.providerMetadata, $.state = "done", delete l.activeReasoningParts[s.id], d();
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
              const $ = l.message.parts.filter(It);
              l.partialToolCalls[s.toolCallId] = {
                text: "",
                toolName: s.toolName,
                index: $.length,
                dynamic: s.dynamic
              }, s.dynamic ? b({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "input-streaming",
                input: void 0
              }) : g({
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: s.providerExecuted
              }), d();
              break;
            }
            case "tool-input-delta": {
              const $ = l.partialToolCalls[s.toolCallId];
              $.text += s.inputTextDelta;
              const { value: O } = await Za(
                $.text
              );
              $.dynamic ? b({
                toolCallId: s.toolCallId,
                toolName: $.toolName,
                state: "input-streaming",
                input: O
              }) : g({
                toolCallId: s.toolCallId,
                toolName: $.toolName,
                state: "input-streaming",
                input: O
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
              }) : g({
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
              }) : g({
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
                const $ = v(
                  s.toolCallId
                );
                b({
                  toolCallId: s.toolCallId,
                  toolName: $.toolName,
                  state: "output-available",
                  input: $.input,
                  output: s.output,
                  preliminary: s.preliminary
                });
              } else {
                const $ = _(s.toolCallId);
                g({
                  toolCallId: s.toolCallId,
                  toolName: Cr($),
                  state: "output-available",
                  input: $.input,
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
                const $ = v(
                  s.toolCallId
                );
                b({
                  toolCallId: s.toolCallId,
                  toolName: $.toolName,
                  state: "output-error",
                  input: $.input,
                  errorText: s.errorText
                });
              } else {
                const $ = _(s.toolCallId);
                g({
                  toolCallId: s.toolCallId,
                  toolName: Cr($),
                  state: "output-error",
                  input: $.input,
                  rawInput: $.rawInput,
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
              s.messageId != null && (l.message.id = s.messageId), await w(s.messageMetadata), (s.messageId != null || s.messageMetadata != null) && d();
              break;
            }
            case "finish": {
              await w(s.messageMetadata), s.messageMetadata != null && d();
              break;
            }
            case "message-metadata": {
              await w(s.messageMetadata), s.messageMetadata != null && d();
              break;
            }
            case "error": {
              n == null || n(new Error(s.errorText));
              break;
            }
            default:
              if (qS(s)) {
                (r == null ? void 0 : r[s.type]) != null && await Rt({
                  value: s.data,
                  schema: r[s.type]
                });
                const $ = s;
                if ($.transient) {
                  a == null || a($);
                  break;
                }
                const O = $.id != null ? l.message.parts.find(
                  (E) => $.type === E.type && $.id === E.id
                ) : void 0;
                O != null ? O.data = $.data : l.message.parts.push($), a == null || a($), d();
              }
          }
          u.enqueue(s);
        });
      }
    })
  );
}
function Gg({
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
      transform(d, f) {
        if (d.type === "start") {
          const y = d;
          y.messageId == null && e != null && (y.messageId = e);
        }
        d.type === "abort" && (a = !0), f.enqueue(d);
      }
    })
  );
  if (r == null)
    return s;
  const u = La({
    lastMessage: i ? structuredClone(i) : void 0,
    messageId: e ?? ""
    // will be overridden by the stream
  });
  return Fa({
    stream: s,
    runUpdateMessageJob: async (d) => {
      await d({ state: u, write: () => {
      } });
    },
    onError: o
  }).pipeThrough(
    new TransformStream({
      transform(d, f) {
        f.enqueue(d);
      },
      async flush() {
        const d = u.message.id === (i == null ? void 0 : i.id);
        await r({
          isAborted: a,
          isContinuation: d,
          responseMessage: u.message,
          messages: [
            ...d ? t.slice(0, -1) : t,
            u.message
          ]
        });
      }
    })
  );
}
function LS({
  response: e,
  status: t,
  statusText: r,
  headers: o,
  stream: n,
  consumeSseStream: i
}) {
  let a = n.pipeThrough(new Lg());
  if (i) {
    const [s, u] = a.tee();
    a = s, i({ stream: u });
  }
  qg({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(
      nr(o, Fg).entries()
    ),
    stream: a.pipeThrough(new TextEncoderStream())
  });
}
function Et(e) {
  const t = e.pipeThrough(new TransformStream());
  return t[Symbol.asyncIterator] = () => {
    const r = t.getReader();
    return {
      async next() {
        const { done: o, value: n } = await r.read();
        return o ? { done: !0, value: void 0 } : { done: !1, value: n };
      }
    };
  }, t;
}
async function co({
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
function mu() {
  let e, t;
  return {
    promise: new Promise((o, n) => {
      e = o, t = n;
    }),
    resolve: e,
    reject: t
  };
}
function Vg() {
  let e = [], t = null, r = !1, o = mu();
  const n = () => {
    r = !0, o.resolve(), e.forEach((a) => a.cancel()), e = [], t == null || t.close();
  }, i = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return o = mu(), await o.promise, i();
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
var pt = class {
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
function Bg() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
function FS({
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
    start(g) {
      l = g;
    }
  }), f = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map();
  let p = !1, m;
  function _() {
    p && f.size === 0 && (m != null && l.enqueue(m), l.close());
  }
  const v = new TransformStream({
    async transform(g, b) {
      const w = g.type;
      switch (w) {
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
          b.enqueue(g);
          break;
        }
        case "file": {
          b.enqueue({
            type: "file",
            file: new PS({
              data: g.data,
              mediaType: g.mediaType
            })
          });
          break;
        }
        case "finish": {
          m = {
            type: "finish",
            finishReason: g.finishReason,
            usage: g.usage,
            providerMetadata: g.providerMetadata
          };
          break;
        }
        case "tool-call": {
          try {
            const $ = await Rg({
              toolCall: g,
              tools: e,
              repairToolCall: s,
              system: n,
              messages: i
            });
            if (b.enqueue($), $.invalid) {
              l.enqueue({
                type: "tool-error",
                toolCallId: $.toolCallId,
                toolName: $.toolName,
                input: $.input,
                error: Yr($.error),
                dynamic: !0
              });
              break;
            }
            const O = e[$.toolName];
            if (y.set($.toolCallId, $.input), O.onInputAvailable != null && await O.onInputAvailable({
              input: $.input,
              toolCallId: $.toolCallId,
              messages: i,
              abortSignal: a,
              experimental_context: u
            }), O.execute != null && $.providerExecuted !== !0) {
              const E = De();
              f.add(E), Ke({
                name: "ai.toolCall",
                attributes: ue({
                  telemetry: o,
                  attributes: {
                    ...He({
                      operationId: "ai.toolCall",
                      telemetry: o
                    }),
                    "ai.toolCall.name": $.toolName,
                    "ai.toolCall.id": $.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify($.input)
                    }
                  }
                }),
                tracer: r,
                fn: async (I) => {
                  let k;
                  try {
                    const M = jm({
                      execute: O.execute.bind(O),
                      input: $.input,
                      options: {
                        toolCallId: $.toolCallId,
                        messages: i,
                        abortSignal: a,
                        experimental_context: u
                      }
                    });
                    for await (const C of M)
                      l.enqueue({
                        ...$,
                        type: "tool-result",
                        output: C.output,
                        ...C.type === "preliminary" && {
                          preliminary: !0
                        }
                      }), C.type === "final" && (k = C.output);
                  } catch (M) {
                    Da(I, M), l.enqueue({
                      ...$,
                      type: "tool-error",
                      error: M
                    }), f.delete(E), _();
                    return;
                  }
                  f.delete(E), _();
                  try {
                    I.setAttributes(
                      ue({
                        telemetry: o,
                        attributes: {
                          "ai.toolCall.result": {
                            output: () => JSON.stringify(k)
                          }
                        }
                      })
                    );
                  } catch {
                  }
                }
              });
            }
          } catch ($) {
            l.enqueue({ type: "error", error: $ });
          }
          break;
        }
        case "tool-result": {
          const $ = g.toolName;
          g.isError ? l.enqueue({
            type: "tool-error",
            toolCallId: g.toolCallId,
            toolName: $,
            input: y.get(g.toolCallId),
            providerExecuted: g.providerExecuted,
            error: g.result
          }) : b.enqueue({
            type: "tool-result",
            toolCallId: g.toolCallId,
            toolName: $,
            input: y.get(g.toolCallId),
            output: g.result,
            providerExecuted: g.providerExecuted
          });
          break;
        }
        default: {
          const $ = w;
          throw new Error(`Unhandled chunk type: ${$}`);
        }
      }
    },
    flush() {
      p = !0, _();
    }
  });
  return new ReadableStream({
    async start(g) {
      return Promise.all([
        t.pipeThrough(v).pipeTo(
          new WritableStream({
            write(b) {
              g.enqueue(b);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
          new WritableStream({
            write(b) {
              g.enqueue(b);
            },
            close() {
              g.close();
            }
          })
        )
      ]);
    }
  });
}
var JS = Yn({
  prefix: "aitxt",
  size: 24
});
function GS({
  model: e,
  tools: t,
  toolChoice: r,
  system: o,
  prompt: n,
  messages: i,
  maxRetries: a,
  abortSignal: s,
  headers: u,
  stopWhen: l = zg(1),
  experimental_output: d,
  experimental_telemetry: f,
  prepareStep: y,
  providerOptions: p,
  experimental_activeTools: m,
  activeTools: _ = m,
  experimental_repairToolCall: v,
  experimental_transform: g,
  includeRawChunks: b = !1,
  onChunk: w,
  onError: $ = ({ error: L }) => {
    console.error(L);
  },
  onFinish: O,
  onAbort: E,
  onStepFinish: I,
  experimental_context: k,
  _internal: {
    now: M = Bg,
    generateId: C = JS,
    currentDate: j = () => /* @__PURE__ */ new Date()
  } = {},
  ...Z
}) {
  return new BS({
    model: pn(e),
    telemetry: f,
    headers: u,
    settings: Z,
    maxRetries: a,
    abortSignal: s,
    system: o,
    prompt: n,
    messages: i,
    tools: t,
    toolChoice: r,
    transforms: Nr(g),
    activeTools: _,
    repairToolCall: v,
    stopConditions: Nr(l),
    output: d,
    providerOptions: p,
    prepareStep: y,
    includeRawChunks: b,
    onChunk: w,
    onError: $,
    onFinish: O,
    onAbort: E,
    onStepFinish: I,
    now: M,
    currentDate: j,
    generateId: C,
    experimental_context: k
  });
}
function VS(e) {
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
var BS = class {
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
    transforms: f,
    activeTools: y,
    repairToolCall: p,
    stopConditions: m,
    output: _,
    providerOptions: v,
    prepareStep: g,
    includeRawChunks: b,
    now: w,
    currentDate: $,
    generateId: O,
    onChunk: E,
    onError: I,
    onFinish: k,
    onAbort: M,
    onStepFinish: C,
    experimental_context: j
  }) {
    this._totalUsage = new pt(), this._finishReason = new pt(), this._steps = new pt(), this.output = _, this.includeRawChunks = b, this.tools = l;
    let Z, L = [];
    const ce = [];
    let N, se, ke = {}, Pe = [];
    const oe = [];
    let qe, Oe = {}, z = {};
    const Y = new TransformStream({
      async transform(V, ie) {
        var F, q, ze;
        ie.enqueue(V);
        const { part: U } = V;
        if ((U.type === "text-delta" || U.type === "reasoning-delta" || U.type === "source" || U.type === "tool-call" || U.type === "tool-result" || U.type === "tool-input-start" || U.type === "tool-input-delta" || U.type === "raw") && await (E == null ? void 0 : E({ chunk: U })), U.type === "error" && await I({ error: so(U.error) }), U.type === "text-start" && (Oe[U.id] = {
          type: "text",
          text: "",
          providerMetadata: U.providerMetadata
        }, L.push(Oe[U.id])), U.type === "text-delta") {
          const G = Oe[U.id];
          if (G == null) {
            ie.enqueue({
              part: {
                type: "error",
                error: `text part ${U.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          G.text += U.text, G.providerMetadata = (F = U.providerMetadata) != null ? F : G.providerMetadata;
        }
        if (U.type === "text-end" && delete Oe[U.id], U.type === "reasoning-start" && (z[U.id] = {
          type: "reasoning",
          text: "",
          providerMetadata: U.providerMetadata
        }, L.push(z[U.id])), U.type === "reasoning-delta") {
          const G = z[U.id];
          if (G == null) {
            ie.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${U.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          G.text += U.text, G.providerMetadata = (q = U.providerMetadata) != null ? q : G.providerMetadata;
        }
        if (U.type === "reasoning-end") {
          const G = z[U.id];
          if (G == null) {
            ie.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${U.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          G.providerMetadata = (ze = U.providerMetadata) != null ? ze : G.providerMetadata, delete z[U.id];
        }
        if (U.type === "file" && L.push({ type: "file", file: U.file }), U.type === "source" && L.push(U), U.type === "tool-call" && L.push(U), U.type === "tool-result" && !U.preliminary && L.push(U), U.type === "tool-error" && L.push(U), U.type === "start-step" && (ke = U.request, Pe = U.warnings), U.type === "finish-step") {
          const G = Zo({
            content: L,
            tools: l
          }), Ie = new jg({
            content: L,
            finishReason: U.finishReason,
            usage: U.usage,
            warnings: Pe,
            request: ke,
            response: {
              ...U.response,
              messages: [...ce, ...G]
            },
            providerMetadata: U.providerMetadata
          });
          await (C == null ? void 0 : C(Ie)), oe.push(Ie), L = [], z = {}, Oe = {}, ce.push(...G), Z.resolve();
        }
        U.type === "finish" && (se = U.totalUsage, N = U.finishReason);
      },
      async flush(V) {
        try {
          if (oe.length === 0) {
            const ze = new iS({
              message: "No output generated. Check the stream for errors."
            });
            _e._finishReason.reject(ze), _e._totalUsage.reject(ze), _e._steps.reject(ze);
            return;
          }
          const ie = N ?? "unknown", F = se ?? {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          };
          _e._finishReason.resolve(ie), _e._totalUsage.resolve(F), _e._steps.resolve(oe);
          const q = oe[oe.length - 1];
          await (k == null ? void 0 : k({
            finishReason: ie,
            totalUsage: F,
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
            steps: oe
          })), qe.setAttributes(
            ue({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": ie,
                "ai.response.text": { output: () => q.text },
                "ai.response.toolCalls": {
                  output: () => {
                    var ze;
                    return (ze = q.toolCalls) != null && ze.length ? JSON.stringify(q.toolCalls) : void 0;
                  }
                },
                "ai.response.providerMetadata": JSON.stringify(
                  q.providerMetadata
                ),
                "ai.usage.inputTokens": F.inputTokens,
                "ai.usage.outputTokens": F.outputTokens,
                "ai.usage.totalTokens": F.totalTokens,
                "ai.usage.reasoningTokens": F.reasoningTokens,
                "ai.usage.cachedInputTokens": F.cachedInputTokens
              }
            })
          );
        } catch (ie) {
          V.error(ie);
        } finally {
          qe.end();
        }
      }
    }), ye = Vg();
    this.addStream = ye.addStream, this.closeStream = ye.close;
    const te = ye.stream.getReader();
    let Ae = new ReadableStream({
      async start(V) {
        V.enqueue({ type: "start" });
      },
      async pull(V) {
        function ie() {
          M == null || M({ steps: oe }), V.enqueue({ type: "abort" }), V.close();
        }
        try {
          const { done: F, value: q } = await te.read();
          if (F) {
            V.close();
            return;
          }
          if (i != null && i.aborted) {
            ie();
            return;
          }
          V.enqueue(q);
        } catch (F) {
          Ht(F) && (i != null && i.aborted) ? ie() : V.error(F);
        }
      },
      cancel(V) {
        return ye.stream.cancel(V);
      }
    });
    for (const V of f)
      Ae = Ae.pipeThrough(
        V({
          tools: l,
          stopStream() {
            ye.terminate();
          }
        })
      );
    this.baseStream = Ae.pipeThrough(VS(_)).pipeThrough(Y);
    const { maxRetries: me, retry: fe } = Ct({
      maxRetries: n,
      abortSignal: i
    }), de = vn(t), ge = Xt(o), et = hn({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...ge, maxRetries: me }
    }), _e = this;
    Ke({
      name: "ai.streamText",
      attributes: ue({
        telemetry: t,
        attributes: {
          ...He({ operationId: "ai.streamText", telemetry: t }),
          ...et,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: a, prompt: s, messages: u })
          }
        }
      }),
      tracer: de,
      endWhenDone: !1,
      fn: async (V) => {
        qe = V;
        async function ie({
          currentStep: F,
          responseMessages: q,
          usage: ze
        }) {
          var U, G, Ie, qt, yt;
          const yn = _e.includeRawChunks;
          Z = new pt();
          const _n = await ao({
            system: a,
            prompt: s,
            messages: u
          }), Pt = [
            ..._n.messages,
            ...q
          ], tt = await (g == null ? void 0 : g({
            model: e,
            steps: oe,
            stepNumber: oe.length,
            messages: Pt
          })), bn = await io({
            prompt: {
              system: (U = tt == null ? void 0 : tt.system) != null ? U : _n.system,
              messages: (G = tt == null ? void 0 : tt.messages) != null ? G : Pt
            },
            supportedUrls: await e.supportedUrls
          }), At = pn(
            (Ie = tt == null ? void 0 : tt.model) != null ? Ie : e
          ), { toolChoice: Ne, tools: _t } = kg({
            tools: l,
            toolChoice: (qt = tt == null ? void 0 : tt.toolChoice) != null ? qt : d,
            activeTools: (yt = tt == null ? void 0 : tt.activeTools) != null ? yt : y
          }), {
            result: { stream: rr, response: Ga, request: Va },
            doStreamSpan: rn,
            startTimestampMs: Ba
          } = await fe(
            () => Ke({
              name: "ai.streamText.doStream",
              attributes: ue({
                telemetry: t,
                attributes: {
                  ...He({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...et,
                  // model:
                  "ai.model.provider": At.provider,
                  "ai.model.id": At.modelId,
                  // prompt:
                  "ai.prompt.messages": {
                    input: () => uo(bn)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => _t == null ? void 0 : _t.map((J) => JSON.stringify(J))
                  },
                  "ai.prompt.toolChoice": {
                    input: () => Ne != null ? JSON.stringify(Ne) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": At.provider,
                  "gen_ai.request.model": At.modelId,
                  "gen_ai.request.frequency_penalty": ge.frequencyPenalty,
                  "gen_ai.request.max_tokens": ge.maxOutputTokens,
                  "gen_ai.request.presence_penalty": ge.presencePenalty,
                  "gen_ai.request.stop_sequences": ge.stopSequences,
                  "gen_ai.request.temperature": ge.temperature,
                  "gen_ai.request.top_k": ge.topK,
                  "gen_ai.request.top_p": ge.topP
                }
              }),
              tracer: de,
              endWhenDone: !1,
              fn: async (J) => ({
                startTimestampMs: w(),
                // get before the call
                doStreamSpan: J,
                result: await At.doStream({
                  ...ge,
                  tools: _t,
                  toolChoice: Ne,
                  responseFormat: _ == null ? void 0 : _.responseFormat,
                  prompt: bn,
                  providerOptions: v,
                  abortSignal: i,
                  headers: r,
                  includeRawChunks: yn
                })
              })
            })
          ), oh = FS({
            tools: l,
            generatorStream: rr,
            tracer: de,
            telemetry: t,
            system: a,
            messages: Pt,
            repairToolCall: p,
            abortSignal: i,
            experimental_context: j
          }), ih = Va ?? {}, or = [], mo = [];
          let fo;
          const go = {};
          let on = "unknown", lt = {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }, ho, Wa = !0, bt = {
            id: O(),
            timestamp: $(),
            modelId: e.modelId
          }, Ha = "";
          _e.addStream(
            oh.pipeThrough(
              new TransformStream({
                async transform(J, Ue) {
                  var wn, $n, ir, St;
                  if (J.type === "stream-start") {
                    fo = J.warnings;
                    return;
                  }
                  if (Wa) {
                    const Ve = w() - Ba;
                    Wa = !1, rn.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": Ve
                    }), rn.setAttributes({
                      "ai.response.msToFirstChunk": Ve
                    }), Ue.enqueue({
                      type: "start-step",
                      request: ih,
                      warnings: fo ?? []
                    });
                  }
                  const Ka = J.type;
                  switch (Ka) {
                    case "text-start":
                    case "text-end": {
                      Ue.enqueue(J);
                      break;
                    }
                    case "text-delta": {
                      J.delta.length > 0 && (Ue.enqueue({
                        type: "text-delta",
                        id: J.id,
                        text: J.delta,
                        providerMetadata: J.providerMetadata
                      }), Ha += J.delta);
                      break;
                    }
                    case "reasoning-start":
                    case "reasoning-end": {
                      Ue.enqueue(J);
                      break;
                    }
                    case "reasoning-delta": {
                      Ue.enqueue({
                        type: "reasoning-delta",
                        id: J.id,
                        text: J.delta,
                        providerMetadata: J.providerMetadata
                      });
                      break;
                    }
                    case "tool-call": {
                      Ue.enqueue(J), or.push(J);
                      break;
                    }
                    case "tool-result": {
                      Ue.enqueue(J), J.preliminary || mo.push(J);
                      break;
                    }
                    case "tool-error": {
                      Ue.enqueue(J), mo.push(J);
                      break;
                    }
                    case "response-metadata": {
                      bt = {
                        id: (wn = J.id) != null ? wn : bt.id,
                        timestamp: ($n = J.timestamp) != null ? $n : bt.timestamp,
                        modelId: (ir = J.modelId) != null ? ir : bt.modelId
                      };
                      break;
                    }
                    case "finish": {
                      lt = J.usage, on = J.finishReason, ho = J.providerMetadata;
                      const Ve = w() - Ba;
                      rn.addEvent("ai.stream.finish"), rn.setAttributes({
                        "ai.response.msToFinish": Ve,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((St = lt.outputTokens) != null ? St : 0) / Ve
                      });
                      break;
                    }
                    case "file": {
                      Ue.enqueue(J);
                      break;
                    }
                    case "source": {
                      Ue.enqueue(J);
                      break;
                    }
                    case "tool-input-start": {
                      go[J.id] = J.toolName;
                      const Ve = l == null ? void 0 : l[J.toolName];
                      (Ve == null ? void 0 : Ve.onInputStart) != null && await Ve.onInputStart({
                        toolCallId: J.id,
                        messages: Pt,
                        abortSignal: i,
                        experimental_context: j
                      }), Ue.enqueue({
                        ...J,
                        dynamic: (Ve == null ? void 0 : Ve.type) === "dynamic"
                      });
                      break;
                    }
                    case "tool-input-end": {
                      delete go[J.id], Ue.enqueue(J);
                      break;
                    }
                    case "tool-input-delta": {
                      const Ve = go[J.id], vo = l == null ? void 0 : l[Ve];
                      (vo == null ? void 0 : vo.onInputDelta) != null && await vo.onInputDelta({
                        inputTextDelta: J.delta,
                        toolCallId: J.id,
                        messages: Pt,
                        abortSignal: i,
                        experimental_context: j
                      }), Ue.enqueue(J);
                      break;
                    }
                    case "error": {
                      Ue.enqueue(J), on = "error";
                      break;
                    }
                    case "raw": {
                      yn && Ue.enqueue(J);
                      break;
                    }
                    default: {
                      const Ve = Ka;
                      throw new Error(`Unknown chunk type: ${Ve}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(J) {
                  const Ue = or.length > 0 ? JSON.stringify(or) : void 0;
                  try {
                    rn.setAttributes(
                      ue({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": on,
                          "ai.response.text": {
                            output: () => Ha
                          },
                          "ai.response.toolCalls": {
                            output: () => Ue
                          },
                          "ai.response.id": bt.id,
                          "ai.response.model": bt.modelId,
                          "ai.response.timestamp": bt.timestamp.toISOString(),
                          "ai.response.providerMetadata": JSON.stringify(ho),
                          "ai.usage.inputTokens": lt.inputTokens,
                          "ai.usage.outputTokens": lt.outputTokens,
                          "ai.usage.totalTokens": lt.totalTokens,
                          "ai.usage.reasoningTokens": lt.reasoningTokens,
                          "ai.usage.cachedInputTokens": lt.cachedInputTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [on],
                          "gen_ai.response.id": bt.id,
                          "gen_ai.response.model": bt.modelId,
                          "gen_ai.usage.input_tokens": lt.inputTokens,
                          "gen_ai.usage.output_tokens": lt.outputTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    rn.end();
                  }
                  J.enqueue({
                    type: "finish-step",
                    finishReason: on,
                    usage: lt,
                    providerMetadata: ho,
                    response: {
                      ...bt,
                      headers: Ga == null ? void 0 : Ga.headers
                    }
                  });
                  const wn = Ag(ze, lt);
                  await Z.promise;
                  const $n = or.filter(
                    (St) => St.providerExecuted !== !0
                  ), ir = mo.filter(
                    (St) => St.providerExecuted !== !0
                  );
                  if ($n.length > 0 && // all current tool calls have outputs (incl. execution errors):
                  ir.length === $n.length && // continue until a stop condition is met:
                  !await Ug({
                    stopConditions: m,
                    steps: oe
                  })) {
                    q.push(
                      ...Zo({
                        content: (
                          // use transformed content to create the messages for the next step:
                          oe[oe.length - 1].content
                        ),
                        tools: l
                      })
                    );
                    try {
                      await ie({
                        currentStep: F + 1,
                        responseMessages: q,
                        usage: wn
                      });
                    } catch (St) {
                      J.enqueue({
                        type: "error",
                        error: St
                      }), _e.closeStream();
                    }
                  } else
                    J.enqueue({
                      type: "finish",
                      finishReason: on,
                      totalUsage: wn
                    }), _e.closeStream();
                }
              })
            )
          );
        }
        await ie({
          currentStep: 0,
          responseMessages: [],
          usage: {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }
        });
      }
    }).catch((V) => {
      _e.addStream(
        new ReadableStream({
          start(ie) {
            ie.enqueue({ type: "error", error: V }), ie.close();
          }
        })
      ), _e.closeStream();
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
    return Et(
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
    return Et(
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
      await co({
        stream: this.fullStream,
        onError: e == null ? void 0 : e.onError
      });
    } catch (r) {
      (t = e == null ? void 0 : e.onError) == null || t.call(e, r);
    }
  }
  get experimental_partialOutputStream() {
    if (this.output == null)
      throw new Of();
    return Et(
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
    onError: u = mn
  } = {}) {
    const l = t != null ? DS({
      originalMessages: e,
      responseMessageId: t
    }) : void 0, d = {}, f = (p) => {
      var m, _;
      const v = d[p];
      return ((_ = (m = this.tools) == null ? void 0 : m[v]) == null ? void 0 : _.type) === "dynamic" ? !0 : void 0;
    }, y = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (p, m) => {
          const _ = o == null ? void 0 : o({ part: p }), v = p.type;
          switch (v) {
            case "text-start": {
              m.enqueue({
                type: "text-start",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "text-delta": {
              m.enqueue({
                type: "text-delta",
                id: p.id,
                delta: p.text,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "text-end": {
              m.enqueue({
                type: "text-end",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-start": {
              m.enqueue({
                type: "reasoning-start",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-delta": {
              n && m.enqueue({
                type: "reasoning-delta",
                id: p.id,
                delta: p.text,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-end": {
              m.enqueue({
                type: "reasoning-end",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "file": {
              m.enqueue({
                type: "file",
                mediaType: p.file.mediaType,
                url: `data:${p.file.mediaType};base64,${p.file.base64}`
              });
              break;
            }
            case "source": {
              i && p.sourceType === "url" && m.enqueue({
                type: "source-url",
                sourceId: p.id,
                url: p.url,
                title: p.title,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              }), i && p.sourceType === "document" && m.enqueue({
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
              const g = f(p.id);
              m.enqueue({
                type: "tool-input-start",
                toolCallId: p.id,
                toolName: p.toolName,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...g != null ? { dynamic: g } : {}
              });
              break;
            }
            case "tool-input-delta": {
              m.enqueue({
                type: "tool-input-delta",
                toolCallId: p.id,
                inputTextDelta: p.delta
              });
              break;
            }
            case "tool-call": {
              d[p.toolCallId] = p.toolName;
              const g = f(p.toolCallId);
              p.invalid ? m.enqueue({
                type: "tool-input-error",
                toolCallId: p.toolCallId,
                toolName: p.toolName,
                input: p.input,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {},
                ...g != null ? { dynamic: g } : {},
                errorText: u(p.error)
              }) : m.enqueue({
                type: "tool-input-available",
                toolCallId: p.toolCallId,
                toolName: p.toolName,
                input: p.input,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {},
                ...g != null ? { dynamic: g } : {}
              });
              break;
            }
            case "tool-result": {
              const g = f(p.toolCallId);
              m.enqueue({
                type: "tool-output-available",
                toolCallId: p.toolCallId,
                output: p.output,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.preliminary != null ? { preliminary: p.preliminary } : {},
                ...g != null ? { dynamic: g } : {}
              });
              break;
            }
            case "tool-error": {
              const g = f(p.toolCallId);
              m.enqueue({
                type: "tool-output-error",
                toolCallId: p.toolCallId,
                errorText: u(p.error),
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...g != null ? { dynamic: g } : {}
              });
              break;
            }
            case "error": {
              m.enqueue({
                type: "error",
                errorText: u(p.error)
              });
              break;
            }
            case "start-step": {
              m.enqueue({ type: "start-step" });
              break;
            }
            case "finish-step": {
              m.enqueue({ type: "finish-step" });
              break;
            }
            case "start": {
              a && m.enqueue({
                type: "start",
                ..._ != null ? { messageMetadata: _ } : {},
                ...l != null ? { messageId: l } : {}
              });
              break;
            }
            case "finish": {
              s && m.enqueue({
                type: "finish",
                ..._ != null ? { messageMetadata: _ } : {}
              });
              break;
            }
            case "abort": {
              m.enqueue(p);
              break;
            }
            case "tool-input-end":
              break;
            case "raw":
              break;
            default: {
              const g = v;
              throw new Error(`Unknown chunk type: ${g}`);
            }
          }
          _ != null && v !== "start" && v !== "finish" && m.enqueue({
            type: "message-metadata",
            messageMetadata: _
          });
        }
      })
    );
    return Et(
      Gg({
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
    LS({
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
    Zg({
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
    return US({
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
    return Dg({
      textStream: this.textStream,
      ...e
    });
  }
}, _T = class {
  constructor(e) {
    this.settings = e;
  }
  async generate(e) {
    return MS({ ...this.settings, ...e });
  }
  stream(e) {
    return GS({ ...this.settings, ...e });
  }
};
async function bT({
  model: e,
  value: t,
  providerOptions: r,
  maxRetries: o,
  abortSignal: n,
  headers: i,
  experimental_telemetry: a
}) {
  const s = vg(e), { maxRetries: u, retry: l } = Ct({
    maxRetries: o,
    abortSignal: n
  }), d = hn({
    model: s,
    telemetry: a,
    headers: i,
    settings: { maxRetries: u }
  }), f = vn(a);
  return Ke({
    name: "ai.embed",
    attributes: ue({
      telemetry: a,
      attributes: {
        ...He({ operationId: "ai.embed", telemetry: a }),
        ...d,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: f,
    fn: async (y) => {
      const { embedding: p, usage: m, response: _, providerMetadata: v } = await l(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Ke({
            name: "ai.embed.doEmbed",
            attributes: ue({
              telemetry: a,
              attributes: {
                ...He({
                  operationId: "ai.embed.doEmbed",
                  telemetry: a
                }),
                ...d,
                // specific settings that only make sense on the outer level:
                "ai.values": { input: () => [JSON.stringify(t)] }
              }
            }),
            tracer: f,
            fn: async (g) => {
              var b;
              const w = await s.doEmbed({
                values: [t],
                abortSignal: n,
                headers: i,
                providerOptions: r
              }), $ = w.embeddings[0], O = (b = w.usage) != null ? b : { tokens: NaN };
              return g.setAttributes(
                ue({
                  telemetry: a,
                  attributes: {
                    "ai.embeddings": {
                      output: () => w.embeddings.map(
                        (E) => JSON.stringify(E)
                      )
                    },
                    "ai.usage.tokens": O.tokens
                  }
                })
              ), {
                embedding: $,
                usage: O,
                providerMetadata: w.providerMetadata,
                response: w.response
              };
            }
          })
        )
      );
      return y.setAttributes(
        ue({
          telemetry: a,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(p) },
            "ai.usage.tokens": m.tokens
          }
        })
      ), new WS({
        value: t,
        embedding: p,
        usage: m,
        providerMetadata: v,
        response: _
      });
    }
  });
}
var WS = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.providerMetadata = e.providerMetadata, this.response = e.response;
  }
};
function fu(e, t) {
  if (t <= 0)
    throw new Error("chunkSize must be greater than 0");
  const r = [];
  for (let o = 0; o < e.length; o += t)
    r.push(e.slice(o, o + t));
  return r;
}
async function wT({
  model: e,
  values: t,
  maxParallelCalls: r = 1 / 0,
  maxRetries: o,
  abortSignal: n,
  headers: i,
  providerOptions: a,
  experimental_telemetry: s
}) {
  const u = vg(e), { maxRetries: l, retry: d } = Ct({
    maxRetries: o,
    abortSignal: n
  }), f = hn({
    model: u,
    telemetry: s,
    headers: i,
    settings: { maxRetries: l }
  }), y = vn(s);
  return Ke({
    name: "ai.embedMany",
    attributes: ue({
      telemetry: s,
      attributes: {
        ...He({ operationId: "ai.embedMany", telemetry: s }),
        ...f,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((p) => JSON.stringify(p))
        }
      }
    }),
    tracer: y,
    fn: async (p) => {
      var m;
      const [_, v] = await Promise.all([
        u.maxEmbeddingsPerCall,
        u.supportsParallelCalls
      ]);
      if (_ == null || _ === 1 / 0) {
        const { embeddings: I, usage: k, response: M, providerMetadata: C } = await d(
          () => Ke({
            name: "ai.embedMany.doEmbed",
            attributes: ue({
              telemetry: s,
              attributes: {
                ...He({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: s
                }),
                ...f,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => t.map((j) => JSON.stringify(j))
                }
              }
            }),
            tracer: y,
            fn: async (j) => {
              var Z;
              const L = await u.doEmbed({
                values: t,
                abortSignal: n,
                headers: i,
                providerOptions: a
              }), ce = L.embeddings, N = (Z = L.usage) != null ? Z : { tokens: NaN };
              return j.setAttributes(
                ue({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => ce.map(
                        (se) => JSON.stringify(se)
                      )
                    },
                    "ai.usage.tokens": N.tokens
                  }
                })
              ), {
                embeddings: ce,
                usage: N,
                providerMetadata: L.providerMetadata,
                response: L.response
              };
            }
          })
        );
        return p.setAttributes(
          ue({
            telemetry: s,
            attributes: {
              "ai.embeddings": {
                output: () => I.map((j) => JSON.stringify(j))
              },
              "ai.usage.tokens": k.tokens
            }
          })
        ), new gu({
          values: t,
          embeddings: I,
          usage: k,
          providerMetadata: C,
          responses: [M]
        });
      }
      const g = fu(t, _), b = [], w = [];
      let $ = 0, O;
      const E = fu(
        g,
        v ? r : 1
      );
      for (const I of E) {
        const k = await Promise.all(
          I.map((M) => d(() => Ke({
            name: "ai.embedMany.doEmbed",
            attributes: ue({
              telemetry: s,
              attributes: {
                ...He({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: s
                }),
                ...f,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => M.map((C) => JSON.stringify(C))
                }
              }
            }),
            tracer: y,
            fn: async (C) => {
              var j;
              const Z = await u.doEmbed({
                values: M,
                abortSignal: n,
                headers: i,
                providerOptions: a
              }), L = Z.embeddings, ce = (j = Z.usage) != null ? j : { tokens: NaN };
              return C.setAttributes(
                ue({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => L.map(
                        (N) => JSON.stringify(N)
                      )
                    },
                    "ai.usage.tokens": ce.tokens
                  }
                })
              ), {
                embeddings: L,
                usage: ce,
                providerMetadata: Z.providerMetadata,
                response: Z.response
              };
            }
          })))
        );
        for (const M of k)
          if (b.push(...M.embeddings), w.push(M.response), $ += M.usage.tokens, M.providerMetadata)
            if (!O)
              O = { ...M.providerMetadata };
            else
              for (const [C, j] of Object.entries(
                M.providerMetadata
              ))
                O[C] = {
                  ...(m = O[C]) != null ? m : {},
                  ...j
                };
      }
      return p.setAttributes(
        ue({
          telemetry: s,
          attributes: {
            "ai.embeddings": {
              output: () => b.map((I) => JSON.stringify(I))
            },
            "ai.usage.tokens": $
          }
        })
      ), new gu({
        values: t,
        embeddings: b,
        usage: { tokens: $ },
        providerMetadata: O,
        responses: w
      });
    }
  });
}
var gu = class {
  constructor(e) {
    this.values = e.values, this.embeddings = e.embeddings, this.usage = e.usage, this.providerMetadata = e.providerMetadata, this.responses = e.responses;
  }
};
async function $T({
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
  var f, y;
  if (e.specificationVersion !== "v2")
    throw new tr({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const { retry: p } = Ct({
    maxRetries: u,
    abortSignal: l
  }), m = (f = o ?? await KS(e)) != null ? f : 1, _ = Math.ceil(r / m), v = Array.from({ length: _ }, (E, I) => {
    if (I < _ - 1)
      return m;
    const k = r % m;
    return k === 0 ? m : k;
  }), g = await Promise.all(
    v.map(
      async (E) => p(
        () => e.doGenerate({
          prompt: t,
          n: E,
          abortSignal: l,
          headers: d,
          size: n,
          aspectRatio: i,
          seed: a,
          providerOptions: s ?? {}
        })
      )
    )
  ), b = [], w = [], $ = [], O = {};
  for (const E of g) {
    if (b.push(
      ...E.images.map(
        (I) => {
          var k;
          return new lo({
            data: I,
            mediaType: (k = oo({
              data: I,
              signatures: _g
            })) != null ? k : "image/png"
          });
        }
      )
    ), w.push(...E.warnings), E.providerMetadata)
      for (const [I, k] of Object.entries(E.providerMetadata))
        (y = O[I]) != null || (O[I] = { images: [] }), O[I].images.push(
          ...E.providerMetadata[I].images
        );
    $.push(E.response);
  }
  if (!b.length)
    throw new nS({ responses: $ });
  return new HS({
    images: b,
    warnings: w,
    responses: $,
    providerMetadata: O
  });
}
var HS = class {
  constructor(e) {
    this.images = e.images, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = e.providerMetadata;
  }
  get image() {
    return this.images[0];
  }
};
async function KS(e) {
  return e.maxImagesPerCall instanceof Function ? e.maxImagesPerCall({
    modelId: e.modelId
  }) : e.maxImagesPerCall;
}
function YS(e) {
  const t = e.filter(
    (r) => r.type === "reasoning"
  );
  return t.length === 0 ? void 0 : t.map((r) => r.text).join(`
`);
}
var XS = {
  type: "no-schema",
  jsonSchema: void 0,
  async validatePartialResult({ value: e, textDelta: t }) {
    return { success: !0, value: { partial: e, textDelta: t } };
  },
  async validateFinalResult(e, t) {
    return e === void 0 ? {
      success: !1,
      error: new Yt({
        message: "No object generated: response did not match schema.",
        text: t.text,
        response: t.response,
        usage: t.usage,
        finishReason: t.finishReason
      })
    } : { success: !0, value: e };
  },
  createElementStream() {
    throw new we({
      functionality: "element streams in no-schema mode"
    });
  }
}, QS = (e) => ({
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
    return Nt({ value: t, schema: e });
  },
  createElementStream() {
    throw new we({
      functionality: "element streams in object mode"
    });
  }
}), e0 = (e) => {
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
      if (!gr(o) || !Ya(o.elements))
        return {
          success: !1,
          error: new Xe({
            value: o,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const u = o.elements, l = [];
      for (let y = 0; y < u.length; y++) {
        const p = u[y], m = await Nt({ value: p, schema: e });
        if (!(y === u.length - 1 && !a)) {
          if (!m.success)
            return m;
          l.push(m.value);
        }
      }
      const d = (s = n == null ? void 0 : n.length) != null ? s : 0;
      let f = "";
      return i && (f += "["), d > 0 && (f += ","), f += l.slice(d).map((y) => JSON.stringify(y)).join(","), a && (f += "]"), {
        success: !0,
        value: {
          partial: l,
          textDelta: f
        }
      };
    },
    async validateFinalResult(o) {
      if (!gr(o) || !Ya(o.elements))
        return {
          success: !1,
          error: new Xe({
            value: o,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const n = o.elements;
      for (const i of n) {
        const a = await Nt({ value: i, schema: e });
        if (!a.success)
          return a;
      }
      return { success: !0, value: n };
    },
    createElementStream(o) {
      let n = 0;
      return Et(
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
}, t0 = (e) => ({
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
    if (!gr(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new Xe({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const r = t.result;
    return e.includes(r) ? { success: !0, value: r } : {
      success: !1,
      error: new Xe({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  async validatePartialResult({ value: t, textDelta: r }) {
    if (!gr(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new Xe({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const o = t.result, n = e.filter(
      (i) => i.startsWith(o)
    );
    return t.result.length === 0 || n.length === 0 ? {
      success: !1,
      error: new Xe({
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
    throw new we({
      functionality: "element streams in enum mode"
    });
  }
});
function Wg({
  output: e,
  schema: t,
  enumValues: r
}) {
  switch (e) {
    case "object":
      return QS(dn(t));
    case "array":
      return e0(dn(t));
    case "enum":
      return t0(r);
    case "no-schema":
      return XS;
    default: {
      const o = e;
      throw new Error(`Unsupported output: ${o}`);
    }
  }
}
async function hu(e, t, r) {
  const o = await zt({ text: e });
  if (!o.success)
    throw new Yt({
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
    throw new Yt({
      message: "No object generated: response did not match schema.",
      cause: n.error,
      text: e,
      response: r.response,
      usage: r.usage,
      finishReason: r.finishReason
    });
  return n.value;
}
async function Hg(e, t, r, o) {
  try {
    return await hu(e, t, o);
  } catch (n) {
    if (r != null && Yt.isInstance(n) && (En.isInstance(n.cause) || Xe.isInstance(n.cause))) {
      const i = await r({
        text: e,
        error: n.cause
      });
      if (i === null)
        throw n;
      return await hu(
        i,
        t,
        o
      );
    }
    throw n;
  }
}
function Kg({
  output: e,
  schema: t,
  schemaName: r,
  schemaDescription: o,
  enumValues: n
}) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new be({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t != null)
      throw new be({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output."
      });
    if (o != null)
      throw new be({
        parameter: "schemaDescription",
        value: o,
        message: "Schema description is not supported for no-schema output."
      });
    if (r != null)
      throw new be({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for no-schema output."
      });
    if (n != null)
      throw new be({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (t == null)
      throw new be({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output."
      });
    if (n != null)
      throw new be({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (t == null)
      throw new be({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output."
      });
    if (n != null)
      throw new be({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new be({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output."
      });
    if (o != null)
      throw new be({
        parameter: "schemaDescription",
        value: o,
        message: "Schema description is not supported for enum output."
      });
    if (r != null)
      throw new be({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for enum output."
      });
    if (n == null)
      throw new be({
        parameter: "enumValues",
        value: n,
        message: "Enum values are required for enum output."
      });
    for (const i of n)
      if (typeof i != "string")
        throw new be({
          parameter: "enumValues",
          value: i,
          message: "Enum values must be strings."
        });
  }
}
var n0 = Yn({ prefix: "aiobj", size: 24 });
async function IT(e) {
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
    providerOptions: f,
    _internal: {
      generateId: y = n0,
      currentDate: p = () => /* @__PURE__ */ new Date()
    } = {},
    ...m
  } = e, _ = pn(t), v = "enum" in e ? e.enum : void 0, {
    schema: g,
    schemaDescription: b,
    schemaName: w
  } = "schema" in e ? e : {};
  Kg({
    output: r,
    schema: g,
    schemaName: w,
    schemaDescription: b,
    enumValues: v
  });
  const { maxRetries: $, retry: O } = Ct({
    maxRetries: a,
    abortSignal: s
  }), E = Wg({
    output: r,
    schema: g,
    enumValues: v
  }), I = Xt(m), k = hn({
    model: _,
    telemetry: d,
    headers: u,
    settings: { ...I, maxRetries: $ }
  }), M = vn(d);
  try {
    return await Ke({
      name: "ai.generateObject",
      attributes: ue({
        telemetry: d,
        attributes: {
          ...He({
            operationId: "ai.generateObject",
            telemetry: d
          }),
          ...k,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: n, messages: i })
          },
          "ai.schema": E.jsonSchema != null ? { input: () => JSON.stringify(E.jsonSchema) } : void 0,
          "ai.schema.name": w,
          "ai.schema.description": b,
          "ai.settings.output": E.type
        }
      }),
      tracer: M,
      fn: async (C) => {
        var j;
        let Z, L, ce, N, se, ke, Pe, oe;
        const qe = await ao({
          system: o,
          prompt: n,
          messages: i
        }), Oe = await io({
          prompt: qe,
          supportedUrls: await _.supportedUrls
        }), z = await O(
          () => Ke({
            name: "ai.generateObject.doGenerate",
            attributes: ue({
              telemetry: d,
              attributes: {
                ...He({
                  operationId: "ai.generateObject.doGenerate",
                  telemetry: d
                }),
                ...k,
                "ai.prompt.messages": {
                  input: () => uo(Oe)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": _.provider,
                "gen_ai.request.model": _.modelId,
                "gen_ai.request.frequency_penalty": I.frequencyPenalty,
                "gen_ai.request.max_tokens": I.maxOutputTokens,
                "gen_ai.request.presence_penalty": I.presencePenalty,
                "gen_ai.request.temperature": I.temperature,
                "gen_ai.request.top_k": I.topK,
                "gen_ai.request.top_p": I.topP
              }
            }),
            tracer: M,
            fn: async (ye) => {
              var te, Ae, me, fe, de, ge, et, _e;
              const V = await _.doGenerate({
                responseFormat: {
                  type: "json",
                  schema: E.jsonSchema,
                  name: w,
                  description: b
                },
                ...Xt(m),
                prompt: Oe,
                providerOptions: f,
                abortSignal: s,
                headers: u
              }), ie = {
                id: (Ae = (te = V.response) == null ? void 0 : te.id) != null ? Ae : y(),
                timestamp: (fe = (me = V.response) == null ? void 0 : me.timestamp) != null ? fe : p(),
                modelId: (ge = (de = V.response) == null ? void 0 : de.modelId) != null ? ge : _.modelId,
                headers: (et = V.response) == null ? void 0 : et.headers,
                body: (_e = V.response) == null ? void 0 : _e.body
              }, F = qo(V.content), q = YS(V.content);
              if (F === void 0)
                throw new Yt({
                  message: "No object generated: the model did not return a response.",
                  response: ie,
                  usage: V.usage,
                  finishReason: V.finishReason
                });
              return ye.setAttributes(
                ue({
                  telemetry: d,
                  attributes: {
                    "ai.response.finishReason": V.finishReason,
                    "ai.response.object": { output: () => F },
                    "ai.response.id": ie.id,
                    "ai.response.model": ie.modelId,
                    "ai.response.timestamp": ie.timestamp.toISOString(),
                    "ai.response.providerMetadata": JSON.stringify(
                      V.providerMetadata
                    ),
                    // TODO rename telemetry attributes to inputTokens and outputTokens
                    "ai.usage.promptTokens": V.usage.inputTokens,
                    "ai.usage.completionTokens": V.usage.outputTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [V.finishReason],
                    "gen_ai.response.id": ie.id,
                    "gen_ai.response.model": ie.modelId,
                    "gen_ai.usage.input_tokens": V.usage.inputTokens,
                    "gen_ai.usage.output_tokens": V.usage.outputTokens
                  }
                })
              ), {
                ...V,
                objectText: F,
                reasoning: q,
                responseData: ie
              };
            }
          })
        );
        Z = z.objectText, L = z.finishReason, ce = z.usage, N = z.warnings, Pe = z.providerMetadata, ke = (j = z.request) != null ? j : {}, se = z.responseData, oe = z.reasoning;
        const Y = await Hg(
          Z,
          E,
          l,
          {
            response: se,
            usage: ce,
            finishReason: L
          }
        );
        return C.setAttributes(
          ue({
            telemetry: d,
            attributes: {
              "ai.response.finishReason": L,
              "ai.response.object": {
                output: () => JSON.stringify(Y)
              },
              "ai.response.providerMetadata": JSON.stringify(
                Pe
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": ce.inputTokens,
              "ai.usage.completionTokens": ce.outputTokens
            }
          })
        ), new r0({
          object: Y,
          reasoning: oe,
          finishReason: L,
          usage: ce,
          warnings: N,
          request: ke,
          response: se,
          providerMetadata: Pe
        });
      }
    });
  } catch (C) {
    throw so(C);
  }
}
var r0 = class {
  constructor(e) {
    this.object = e.object, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.response = e.response, this.request = e.request, this.reasoning = e.reasoning;
  }
  toJsonResponse(e) {
    var t;
    return new Response(JSON.stringify(this.object), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: nr(e == null ? void 0 : e.headers, {
        "content-type": "application/json; charset=utf-8"
      })
    });
  }
};
function kT(e, t) {
  if (e.length !== t.length)
    throw new be({
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
function xT(e) {
  const [t, r] = e.split(",");
  if (t.split(";")[0].split(":")[1] == null || r == null)
    throw new Error("Invalid data URL format");
  try {
    return window.atob(r);
  } catch {
    throw new Error("Error decoding data URL");
  }
}
function Pr(e, t) {
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
      if (!Pr(e[n], t[n]))
        return !1;
    return !0;
  }
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  for (const n of r)
    if (!o.includes(n) || !Pr(e[n], t[n]))
      return !1;
  return !0;
}
var o0 = class {
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
function ST({
  chunks: e,
  initialDelayInMs: t = 0,
  chunkDelayInMs: r = 0,
  _internal: o
}) {
  var n;
  const i = (n = o == null ? void 0 : o.delay) != null ? n : Ea;
  let a = 0;
  return new ReadableStream({
    async pull(s) {
      a < e.length ? (await i(a === 0 ? t : r), s.enqueue(e[a++])) : s.close();
    }
  });
}
var i0 = Yn({ prefix: "aiobj", size: 24 });
function TT(e) {
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
    providerOptions: f,
    onError: y = ({ error: I }) => {
      console.error(I);
    },
    onFinish: p,
    _internal: {
      generateId: m = i0,
      currentDate: _ = () => /* @__PURE__ */ new Date(),
      now: v = Bg
    } = {},
    ...g
  } = e, b = "enum" in e && e.enum ? e.enum : void 0, {
    schema: w,
    schemaDescription: $,
    schemaName: O
  } = "schema" in e ? e : {};
  Kg({
    output: r,
    schema: w,
    schemaName: O,
    schemaDescription: $,
    enumValues: b
  });
  const E = Wg({
    output: r,
    schema: w,
    enumValues: b
  });
  return new a0({
    model: t,
    telemetry: d,
    headers: u,
    settings: g,
    maxRetries: a,
    abortSignal: s,
    outputStrategy: E,
    system: o,
    prompt: n,
    messages: i,
    schemaName: O,
    schemaDescription: $,
    providerOptions: f,
    repairText: l,
    onError: y,
    onFinish: p,
    generateId: m,
    currentDate: _,
    now: v
  });
}
var a0 = class {
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
    schemaDescription: f,
    providerOptions: y,
    repairText: p,
    onError: m,
    onFinish: _,
    generateId: v,
    currentDate: g,
    now: b
  }) {
    this._object = new pt(), this._usage = new pt(), this._providerMetadata = new pt(), this._warnings = new pt(), this._request = new pt(), this._response = new pt(), this._finishReason = new pt();
    const w = pn(e), { maxRetries: $, retry: O } = Ct({
      maxRetries: n,
      abortSignal: i
    }), E = Xt(o), I = hn({
      model: w,
      telemetry: r,
      headers: t,
      settings: { ...E, maxRetries: $ }
    }), k = vn(r), M = this, C = Vg(), j = new TransformStream({
      transform(Z, L) {
        L.enqueue(Z), Z.type === "error" && m({ error: so(Z.error) });
      }
    });
    this.baseStream = C.stream.pipeThrough(j), Ke({
      name: "ai.streamObject",
      attributes: ue({
        telemetry: r,
        attributes: {
          ...He({
            operationId: "ai.streamObject",
            telemetry: r
          }),
          ...I,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: s, prompt: u, messages: l })
          },
          "ai.schema": a.jsonSchema != null ? { input: () => JSON.stringify(a.jsonSchema) } : void 0,
          "ai.schema.name": d,
          "ai.schema.description": f,
          "ai.settings.output": a.type
        }
      }),
      tracer: k,
      endWhenDone: !1,
      fn: async (Z) => {
        const L = await ao({
          system: s,
          prompt: u,
          messages: l
        }), ce = {
          responseFormat: {
            type: "json",
            schema: a.jsonSchema,
            name: d,
            description: f
          },
          ...Xt(o),
          prompt: await io({
            prompt: L,
            supportedUrls: await w.supportedUrls
          }),
          providerOptions: y,
          abortSignal: i,
          headers: t,
          includeRawChunks: !1
        }, N = {
          transform: (F, q) => {
            switch (F.type) {
              case "text-delta":
                q.enqueue(F.delta);
                break;
              case "response-metadata":
              case "finish":
              case "error":
              case "stream-start":
                q.enqueue(F);
                break;
            }
          }
        }, {
          result: { stream: se, response: ke, request: Pe },
          doStreamSpan: oe,
          startTimestampMs: qe
        } = await O(
          () => Ke({
            name: "ai.streamObject.doStream",
            attributes: ue({
              telemetry: r,
              attributes: {
                ...He({
                  operationId: "ai.streamObject.doStream",
                  telemetry: r
                }),
                ...I,
                "ai.prompt.messages": {
                  input: () => uo(ce.prompt)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": w.provider,
                "gen_ai.request.model": w.modelId,
                "gen_ai.request.frequency_penalty": E.frequencyPenalty,
                "gen_ai.request.max_tokens": E.maxOutputTokens,
                "gen_ai.request.presence_penalty": E.presencePenalty,
                "gen_ai.request.temperature": E.temperature,
                "gen_ai.request.top_k": E.topK,
                "gen_ai.request.top_p": E.topP
              }
            }),
            tracer: k,
            endWhenDone: !1,
            fn: async (F) => ({
              startTimestampMs: b(),
              doStreamSpan: F,
              result: await w.doStream(ce)
            })
          })
        );
        M._request.resolve(Pe ?? {});
        let Oe, z = {
          inputTokens: void 0,
          outputTokens: void 0,
          totalTokens: void 0
        }, Y, ye, te, Ae, me = "", fe = "", de = {
          id: v(),
          timestamp: g(),
          modelId: w.modelId
        }, ge, et, _e = !0, V = !0;
        const ie = se.pipeThrough(new TransformStream(N)).pipeThrough(
          new TransformStream({
            async transform(F, q) {
              var ze, U, G;
              if (typeof F == "object" && F.type === "stream-start") {
                Oe = F.warnings;
                return;
              }
              if (_e) {
                const Ie = b() - qe;
                _e = !1, oe.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": Ie
                }), oe.setAttributes({
                  "ai.stream.msToFirstChunk": Ie
                });
              }
              if (typeof F == "string") {
                me += F, fe += F;
                const { value: Ie, state: qt } = await Za(me);
                if (Ie !== void 0 && !Pr(ge, Ie)) {
                  const yt = await a.validatePartialResult({
                    value: Ie,
                    textDelta: fe,
                    latestObject: et,
                    isFirstDelta: V,
                    isFinalDelta: qt === "successful-parse"
                  });
                  yt.success && !Pr(
                    et,
                    yt.value.partial
                  ) && (ge = Ie, et = yt.value.partial, q.enqueue({
                    type: "object",
                    object: et
                  }), q.enqueue({
                    type: "text-delta",
                    textDelta: yt.value.textDelta
                  }), fe = "", V = !1);
                }
                return;
              }
              switch (F.type) {
                case "response-metadata": {
                  de = {
                    id: (ze = F.id) != null ? ze : de.id,
                    timestamp: (U = F.timestamp) != null ? U : de.timestamp,
                    modelId: (G = F.modelId) != null ? G : de.modelId
                  };
                  break;
                }
                case "finish": {
                  fe !== "" && q.enqueue({ type: "text-delta", textDelta: fe }), Y = F.finishReason, z = F.usage, ye = F.providerMetadata, q.enqueue({
                    ...F,
                    usage: z,
                    response: de
                  }), M._usage.resolve(z), M._providerMetadata.resolve(ye), M._warnings.resolve(Oe), M._response.resolve({
                    ...de,
                    headers: ke == null ? void 0 : ke.headers
                  }), M._finishReason.resolve(Y ?? "unknown");
                  try {
                    te = await Hg(
                      me,
                      a,
                      p,
                      {
                        response: de,
                        usage: z,
                        finishReason: Y
                      }
                    ), M._object.resolve(te);
                  } catch (Ie) {
                    Ae = Ie, M._object.reject(Ie);
                  }
                  break;
                }
                default: {
                  q.enqueue(F);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(F) {
              try {
                const q = z ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                oe.setAttributes(
                  ue({
                    telemetry: r,
                    attributes: {
                      "ai.response.finishReason": Y,
                      "ai.response.object": {
                        output: () => JSON.stringify(te)
                      },
                      "ai.response.id": de.id,
                      "ai.response.model": de.modelId,
                      "ai.response.timestamp": de.timestamp.toISOString(),
                      "ai.response.providerMetadata": JSON.stringify(ye),
                      "ai.usage.inputTokens": q.inputTokens,
                      "ai.usage.outputTokens": q.outputTokens,
                      "ai.usage.totalTokens": q.totalTokens,
                      "ai.usage.reasoningTokens": q.reasoningTokens,
                      "ai.usage.cachedInputTokens": q.cachedInputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [Y],
                      "gen_ai.response.id": de.id,
                      "gen_ai.response.model": de.modelId,
                      "gen_ai.usage.input_tokens": q.inputTokens,
                      "gen_ai.usage.output_tokens": q.outputTokens
                    }
                  })
                ), oe.end(), Z.setAttributes(
                  ue({
                    telemetry: r,
                    attributes: {
                      "ai.usage.inputTokens": q.inputTokens,
                      "ai.usage.outputTokens": q.outputTokens,
                      "ai.usage.totalTokens": q.totalTokens,
                      "ai.usage.reasoningTokens": q.reasoningTokens,
                      "ai.usage.cachedInputTokens": q.cachedInputTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(te)
                      },
                      "ai.response.providerMetadata": JSON.stringify(ye)
                    }
                  })
                ), await (_ == null ? void 0 : _({
                  usage: q,
                  object: te,
                  error: Ae,
                  response: {
                    ...de,
                    headers: ke == null ? void 0 : ke.headers
                  },
                  warnings: Oe,
                  providerMetadata: ye
                }));
              } catch (q) {
                F.enqueue({ type: "error", error: q });
              } finally {
                Z.end();
              }
            }
          })
        );
        C.addStream(ie);
      }
    }).catch((Z) => {
      C.addStream(
        new ReadableStream({
          start(L) {
            L.enqueue({ type: "error", error: Z }), L.close();
          }
        })
      );
    }).finally(() => {
      C.close();
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
    return Et(
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
    return Et(
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
    return Et(this.baseStream);
  }
  pipeTextStreamToResponse(e, t) {
    Zg({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toTextStreamResponse(e) {
    return Dg({
      textStream: this.textStream,
      ...e
    });
  }
}, s0 = class extends D {
  constructor(e) {
    super({
      name: "AI_NoSpeechGeneratedError",
      message: "No speech audio generated."
    }), this.responses = e.responses;
  }
}, u0 = class extends lo {
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
async function OT({
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
  var f;
  if (e.specificationVersion !== "v2")
    throw new tr({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const { retry: y } = Ct({
    maxRetries: u,
    abortSignal: l
  }), p = await y(
    () => e.doGenerate({
      text: t,
      voice: r,
      outputFormat: o,
      instructions: n,
      speed: i,
      language: a,
      abortSignal: l,
      headers: d,
      providerOptions: s
    })
  );
  if (!p.audio || p.audio.length === 0)
    throw new s0({ responses: [p.response] });
  return new l0({
    audio: new u0({
      data: p.audio,
      mediaType: (f = oo({
        data: p.audio,
        signatures: bg
      })) != null ? f : "audio/mp3"
    }),
    warnings: p.warnings,
    responses: [p.response],
    providerMetadata: p.providerMetadata
  });
}
var l0 = class {
  constructor(e) {
    var t;
    this.audio = e.audio, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
}, c0 = {};
Wx(c0, {
  object: () => p0,
  text: () => d0
});
var d0 = () => ({
  type: "text",
  responseFormat: { type: "text" },
  async parsePartial({ text: e }) {
    return { partial: e };
  },
  async parseOutput({ text: e }) {
    return e;
  }
}), p0 = ({
  schema: e
}) => {
  const t = dn(e);
  return {
    type: "object",
    responseFormat: {
      type: "json",
      schema: t.jsonSchema
    },
    async parsePartial({ text: r }) {
      const o = await Za(r);
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
      const n = await zt({ text: r });
      if (!n.success)
        throw new Yt({
          message: "No object generated: could not parse the response.",
          cause: n.error,
          text: r,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
      const i = await Nt({
        value: n.value,
        schema: t
      });
      if (!i.success)
        throw new Yt({
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
}, m0 = {
  word: /\S+\s+/m,
  line: /\n+/m
};
function ET({
  delayInMs: e = 10,
  chunking: t = "word",
  _internal: { delay: r = Ea } = {}
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
    const n = typeof t == "string" ? m0[t] : t;
    if (n == null)
      throw new Lo({
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
function NT({
  settings: e
}) {
  return {
    middlewareVersion: "v2",
    transformParams: async ({ params: t }) => qa(e, t)
  };
}
function f0(e, t) {
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
function CT({
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
        const d = r ? o + l.text : l.text, f = new RegExp(`${o}(.*?)${n}`, "gs"), y = Array.from(d.matchAll(f));
        if (!y.length) {
          u.push(l);
          continue;
        }
        const p = y.map((_) => _[1]).join(t);
        let m = d;
        for (let _ = y.length - 1; _ >= 0; _--) {
          const v = y[_], g = m.slice(0, v.index), b = m.slice(
            v.index + v[0].length
          );
          m = g + (g.length > 0 && b.length > 0 ? t : "") + b;
        }
        u.push({
          type: "reasoning",
          text: p
        }), u.push({
          type: "text",
          text: m
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
            transform: (d, f) => {
              if (d.type === "text-start") {
                l = d;
                return;
              }
              if (d.type === "text-end" && l && (f.enqueue(l), l = void 0), d.type !== "text-delta") {
                f.enqueue(d);
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
              function p(m) {
                if (m.length > 0) {
                  const _ = y.afterSwitch && (y.isReasoning ? !y.isFirstReasoning : !y.isFirstText) ? t : "";
                  y.isReasoning && (y.afterSwitch || y.isFirstReasoning) && f.enqueue({
                    type: "reasoning-start",
                    id: `reasoning-${y.idCounter}`
                  }), y.isReasoning ? f.enqueue({
                    type: "reasoning-delta",
                    delta: _ + m,
                    id: `reasoning-${y.idCounter}`
                  }) : (l && (f.enqueue(l), l = void 0), f.enqueue({
                    type: "text-delta",
                    delta: _ + m,
                    id: y.textId
                  })), y.afterSwitch = !1, y.isReasoning ? y.isFirstReasoning = !1 : y.isFirstText = !1;
                }
              }
              do {
                const m = y.isReasoning ? n : o, _ = f0(
                  y.buffer,
                  m
                );
                if (_ == null) {
                  p(y.buffer), y.buffer = "";
                  break;
                }
                if (p(y.buffer.slice(0, _)), _ + m.length <= y.buffer.length)
                  y.buffer = y.buffer.slice(
                    _ + m.length
                  ), y.isReasoning && f.enqueue({
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
function PT() {
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
var Yg = ({
  model: e,
  middleware: t,
  modelId: r,
  providerId: o
}) => Nr(t).reverse().reduce((n, i) => g0({ model: n, middleware: i, modelId: r, providerId: o }), e), g0 = ({
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
  var l, d, f;
  async function y({
    params: p,
    type: m
  }) {
    return t ? await t({ params: p, type: m, model: e }) : p;
  }
  return {
    specificationVersion: "v2",
    provider: (l = u ?? (n == null ? void 0 : n({ model: e }))) != null ? l : e.provider,
    modelId: (d = s ?? (i == null ? void 0 : i({ model: e }))) != null ? d : e.modelId,
    supportedUrls: (f = a == null ? void 0 : a({ model: e })) != null ? f : e.supportedUrls,
    async doGenerate(p) {
      const m = await y({ params: p, type: "generate" }), _ = async () => e.doGenerate(m);
      return r ? r({
        doGenerate: _,
        doStream: async () => e.doStream(m),
        params: m,
        model: e
      }) : _();
    },
    async doStream(p) {
      const m = await y({ params: p, type: "stream" }), _ = async () => e.doGenerate(m), v = async () => e.doStream(m);
      return o ? o({ doGenerate: _, doStream: v, params: m, model: e }) : v();
    }
  };
};
function AT({
  provider: e,
  languageModelMiddleware: t
}) {
  return {
    languageModel(o) {
      let n = e.languageModel(o);
      return n = Yg({
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
function h0({
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
      throw new Ze({ modelId: a, modelType: "languageModel" });
    },
    textEmbeddingModel(a) {
      if (t != null && a in t)
        return t[a];
      if (i)
        return i.textEmbeddingModel(a);
      throw new Ze({ modelId: a, modelType: "textEmbeddingModel" });
    },
    imageModel(a) {
      if (r != null && a in r)
        return r[a];
      if (i != null && i.imageModel)
        return i.imageModel(a);
      throw new Ze({ modelId: a, modelType: "imageModel" });
    },
    transcriptionModel(a) {
      if (o != null && a in o)
        return o[a];
      if (i != null && i.transcriptionModel)
        return i.transcriptionModel(a);
      throw new Ze({ modelId: a, modelType: "transcriptionModel" });
    },
    speechModel(a) {
      if (n != null && a in n)
        return n[a];
      if (i != null && i.speechModel)
        return i.speechModel(a);
      throw new Ze({ modelId: a, modelType: "speechModel" });
    }
  };
}
var MT = h0, Xg = "AI_NoSuchProviderError", Qg = `vercel.ai.error.${Xg}`, v0 = Symbol.for(Qg), eh, y0 = class extends Ze {
  constructor({
    modelId: e,
    modelType: t,
    providerId: r,
    availableProviders: o,
    message: n = `No such provider: ${r} (available providers: ${o.join()})`
  }) {
    super({ errorName: Xg, modelId: e, modelType: t, message: n }), this[eh] = !0, this.providerId = r, this.availableProviders = o;
  }
  static isInstance(e) {
    return D.hasMarker(e, Qg);
  }
};
eh = v0;
function _0(e, {
  separator: t = ":",
  languageModelMiddleware: r
} = {}) {
  const o = new b0({
    separator: t,
    languageModelMiddleware: r
  });
  for (const [n, i] of Object.entries(e))
    o.registerProvider({ id: n, provider: i });
  return o;
}
var RT = _0, b0 = class {
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
      throw new y0({
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
      throw new Ze({
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
      throw new Ze({ modelId: e, modelType: "languageModel" });
    return this.languageModelMiddleware != null && (i = Yg({
      model: i,
      middleware: this.languageModelMiddleware
    })), i;
  }
  textEmbeddingModel(e) {
    var t;
    const [r, o] = this.splitId(e, "textEmbeddingModel"), n = this.getProvider(r, "textEmbeddingModel"), i = (t = n.textEmbeddingModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ze({
        modelId: e,
        modelType: "textEmbeddingModel"
      });
    return i;
  }
  imageModel(e) {
    var t;
    const [r, o] = this.splitId(e, "imageModel"), n = this.getProvider(r, "imageModel"), i = (t = n.imageModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ze({ modelId: e, modelType: "imageModel" });
    return i;
  }
  transcriptionModel(e) {
    var t;
    const [r, o] = this.splitId(e, "transcriptionModel"), n = this.getProvider(r, "transcriptionModel"), i = (t = n.transcriptionModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ze({
        modelId: e,
        modelType: "transcriptionModel"
      });
    return i;
  }
  speechModel(e) {
    var t;
    const [r, o] = this.splitId(e, "speechModel"), n = this.getProvider(r, "speechModel"), i = (t = n.speechModel) == null ? void 0 : t.call(n, o);
    if (i == null)
      throw new Ze({ modelId: e, modelType: "speechModel" });
    return i;
  }
}, th = "2025-06-18", w0 = [
  th,
  "2025-03-26",
  "2024-11-05"
], $0 = Ot({
  name: c(),
  version: c()
}), Ja = Ot({
  _meta: xe(h({}).loose())
}), Dn = Ja, I0 = h({
  method: c(),
  params: xe(Ja)
}), k0 = Ot({
  experimental: xe(h({}).loose()),
  logging: xe(h({}).loose()),
  prompts: xe(
    Ot({
      listChanged: xe(W())
    })
  ),
  resources: xe(
    Ot({
      subscribe: xe(W()),
      listChanged: xe(W())
    })
  ),
  tools: xe(
    Ot({
      listChanged: xe(W())
    })
  )
}), x0 = Dn.extend({
  protocolVersion: c(),
  capabilities: k0,
  serverInfo: $0,
  instructions: xe(c())
}), S0 = Dn.extend({
  nextCursor: xe(c())
}), T0 = h({
  name: c(),
  description: xe(c()),
  inputSchema: h({
    type: x("object"),
    properties: xe(h({}).loose())
  }).loose()
}).loose(), O0 = S0.extend({
  tools: A(T0)
}), E0 = h({
  type: x("text"),
  text: c()
}).loose(), N0 = h({
  type: x("image"),
  data: ga(),
  mimeType: c()
}).loose(), nh = h({
  /**
   * The URI of this resource.
   */
  uri: c(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: xe(c())
}).loose(), C0 = nh.extend({
  text: c()
}), P0 = nh.extend({
  blob: ga()
}), A0 = h({
  type: x("resource"),
  resource: X([C0, P0])
}).loose(), M0 = Dn.extend({
  content: A(
    X([E0, N0, A0])
  ),
  isError: W().default(!1).optional()
}).or(
  Dn.extend({
    toolResult: re()
  })
), po = "2.0", R0 = h({
  jsonrpc: x(po),
  id: X([c(), T().int()])
}).merge(I0).strict(), j0 = h({
  jsonrpc: x(po),
  id: X([c(), T().int()]),
  result: Dn
}).strict(), z0 = h({
  jsonrpc: x(po),
  id: X([c(), T().int()]),
  error: h({
    code: T().int(),
    message: c(),
    data: xe(re())
  })
}).strict(), U0 = h({
  jsonrpc: x(po)
}).merge(
  h({
    method: c(),
    params: xe(Ja)
  })
).strict(), D0 = X([
  R0,
  U0,
  j0,
  z0
]), q0 = class {
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
          const a = new Headers(this.headers);
          a.set("Accept", "text/event-stream");
          const s = await fetch(this.url.href, {
            headers: a,
            signal: (o = this.abortController) == null ? void 0 : o.signal
          });
          if (!s.ok || !s.body) {
            const f = new Me({
              message: `MCP SSE Transport Error: ${s.status} ${s.statusText}`
            });
            return (n = this.onerror) == null || n.call(this, f), t(f);
          }
          const l = s.body.pipeThrough(new TextDecoderStream()).pipeThrough(new nl()).getReader(), d = async () => {
            var f, y, p;
            try {
              for (; ; ) {
                const { done: m, value: _ } = await l.read();
                if (m) {
                  if (this.connected)
                    throw this.connected = !1, new Me({
                      message: "MCP SSE Transport Error: Connection closed unexpectedly"
                    });
                  return;
                }
                const { event: v, data: g } = _;
                if (v === "endpoint") {
                  if (this.endpoint = new URL(g, this.url), this.endpoint.origin !== this.url.origin)
                    throw new Me({
                      message: `MCP SSE Transport Error: Endpoint origin does not match connection origin: ${this.endpoint.origin}`
                    });
                  this.connected = !0, e();
                } else if (v === "message")
                  try {
                    const b = D0.parse(
                      JSON.parse(g)
                    );
                    (f = this.onmessage) == null || f.call(this, b);
                  } catch (b) {
                    const w = new Me({
                      message: "MCP SSE Transport Error: Failed to parse message",
                      cause: b
                    });
                    (y = this.onerror) == null || y.call(this, w);
                  }
              }
            } catch (m) {
              if (m instanceof Error && m.name === "AbortError")
                return;
              (p = this.onerror) == null || p.call(this, m), t(m);
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
      throw new Me({
        message: "MCP SSE Transport Error: Not connected"
      });
    try {
      const n = new Headers(this.headers);
      n.set("Content-Type", "application/json");
      const i = {
        method: "POST",
        headers: n,
        body: JSON.stringify(e),
        signal: (t = this.abortController) == null ? void 0 : t.signal
      }, a = await fetch(this.endpoint, i);
      if (!a.ok) {
        const s = await a.text().catch(() => null), u = new Me({
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
function Z0(e) {
  if (e.type !== "sse")
    throw new Me({
      message: "Unsupported or invalid transport configuration. If you are using a custom transport, make sure it implements the MCPTransport interface."
    });
  return new q0(e);
}
function L0(e) {
  return "start" in e && typeof e.start == "function" && "send" in e && typeof e.send == "function" && "close" in e && typeof e.close == "function";
}
var F0 = "1.0.0";
async function jT(e) {
  const t = new J0(e);
  return await t.init(), t;
}
var J0 = class {
  constructor({
    transport: e,
    name: t = "ai-sdk-mcp-client",
    onUncaughtError: r
  }) {
    this.requestMessageId = 0, this.responseHandlers = /* @__PURE__ */ new Map(), this.serverCapabilities = {}, this.isClosed = !0, this.onUncaughtError = r, L0(e) ? this.transport = e : this.transport = Z0(e), this.transport.onclose = () => this.onClose(), this.transport.onerror = (o) => this.onError(o), this.transport.onmessage = (o) => {
      if ("method" in o) {
        this.onError(
          new Me({
            message: "Unsupported message type"
          })
        );
        return;
      }
      this.onResponse(o);
    }, this.clientInfo = {
      name: t,
      version: F0
    };
  }
  async init() {
    try {
      await this.transport.start(), this.isClosed = !1;
      const e = await this.request({
        request: {
          method: "initialize",
          params: {
            protocolVersion: th,
            capabilities: {},
            clientInfo: this.clientInfo
          }
        },
        resultSchema: x0
      });
      if (e === void 0)
        throw new Me({
          message: "Server sent invalid initialize result"
        });
      if (!w0.includes(e.protocolVersion))
        throw new Me({
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
          throw new Me({
            message: "Server does not support tools"
          });
        break;
      default:
        throw new Me({
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
          new Me({
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
            new Me({
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
          const f = new Me({
            message: "Failed to parse server response",
            cause: d
          });
          n(f);
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
        resultSchema: O0,
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
        resultSchema: M0,
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
        const s = this, u = async (d, f) => {
          var y;
          return (y = f == null ? void 0 : f.abortSignal) == null || y.throwIfAborted(), s.callTool({ name: n, args: d, options: f });
        }, l = e === "automatic" ? Uw({
          description: i,
          inputSchema: Qr({
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
    const e = new Me({
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
      throw new Me({
        message: `Protocol error: Received a response for an unknown message ID: ${JSON.stringify(
          e
        )}`
      });
    this.responseHandlers.delete(t), r(
      "result" in e ? e : new Me({
        message: e.error.message,
        cause: e.error
      })
    );
  }
}, G0 = class extends D {
  constructor(e) {
    super({
      name: "AI_NoTranscriptGeneratedError",
      message: "No transcript generated."
    }), this.responses = e.responses;
  }
};
async function zT({
  model: e,
  audio: t,
  providerOptions: r = {},
  maxRetries: o,
  abortSignal: n,
  headers: i
}) {
  if (e.specificationVersion !== "v2")
    throw new tr({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const { retry: a } = Ct({
    maxRetries: o,
    abortSignal: n
  }), s = t instanceof URL ? (await wg({ url: t })).data : _S(t), u = await a(
    () => {
      var l;
      return e.doGenerate({
        audio: s,
        abortSignal: n,
        headers: i,
        providerOptions: r,
        mediaType: (l = oo({
          data: s,
          signatures: bg
        })) != null ? l : "audio/wav"
      });
    }
  );
  if (!u.text)
    throw new G0({ responses: [u.response] });
  return new V0({
    text: u.text,
    segments: u.segments,
    language: u.language,
    durationInSeconds: u.durationInSeconds,
    warnings: u.warnings,
    responses: [u.response],
    providerMetadata: u.providerMetadata
  });
}
var V0 = class {
  constructor(e) {
    var t;
    this.text = e.text, this.segments = e.segments, this.language = e.language, this.durationInSeconds = e.durationInSeconds, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
async function B0({
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
var W0 = () => fetch;
async function UT({
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
  onError: f,
  fetch: y = W0()
}) {
  var p;
  try {
    s(!0), u(void 0);
    const m = new AbortController();
    l(m), a("");
    const _ = await y(e, {
      method: "POST",
      body: JSON.stringify({
        prompt: t,
        ...n
      }),
      credentials: r,
      headers: {
        "Content-Type": "application/json",
        ...o
      },
      signal: m.signal
    }).catch((g) => {
      throw g;
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
        await B0({
          stream: _.body,
          onTextPart: (g) => {
            v += g, a(v);
          }
        });
        break;
      }
      case "data": {
        await co({
          stream: Ca({
            stream: _.body,
            schema: Jg
          }).pipeThrough(
            new TransformStream({
              async transform(g) {
                if (!g.success)
                  throw g.error;
                const b = g.value;
                if (b.type === "text-delta")
                  v += b.delta, a(v);
                else if (b.type === "error")
                  throw new Error(b.errorText);
              }
            })
          ),
          onError: (g) => {
            throw g;
          }
        });
        break;
      }
      default: {
        const g = i;
        throw new Error(`Unknown stream protocol: ${g}`);
      }
    }
    return d && d(t, v), l(null), v;
  } catch (m) {
    if (m.name === "AbortError")
      return l(null), null;
    m instanceof Error && f && f(m), u(m);
  } finally {
    s(!1);
  }
}
async function H0(e) {
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
var rh = class {
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
    const s = await Re(this.body), u = await Re(this.headers), l = await Re(this.credentials), d = await ((r = this.prepareSendMessagesRequest) == null ? void 0 : r.call(this, {
      api: this.api,
      id: t.chatId,
      messages: t.messages,
      body: { ...s, ...t.body },
      headers: { ...u, ...t.headers },
      credentials: l,
      requestMetadata: t.metadata,
      trigger: t.trigger,
      messageId: t.messageId
    })), f = (o = d == null ? void 0 : d.api) != null ? o : this.api, y = (d == null ? void 0 : d.headers) !== void 0 ? d.headers : { ...u, ...t.headers }, p = (d == null ? void 0 : d.body) !== void 0 ? d.body : {
      ...s,
      ...t.body,
      id: t.chatId,
      messages: t.messages,
      trigger: t.trigger,
      messageId: t.messageId
    }, m = (n = d == null ? void 0 : d.credentials) != null ? n : l, v = await ((i = this.fetch) != null ? i : globalThis.fetch)(f, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...y
      },
      body: JSON.stringify(p),
      credentials: m,
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
    const a = await Re(this.body), s = await Re(this.headers), u = await Re(this.credentials), l = await ((t = this.prepareReconnectToStreamRequest) == null ? void 0 : t.call(this, {
      api: this.api,
      id: e.chatId,
      body: { ...a, ...e.body },
      headers: { ...s, ...e.headers },
      credentials: u,
      requestMetadata: e.metadata
    })), d = (r = l == null ? void 0 : l.api) != null ? r : `${this.api}/${e.chatId}/stream`, f = (l == null ? void 0 : l.headers) !== void 0 ? l.headers : { ...s, ...e.headers }, y = (o = l == null ? void 0 : l.credentials) != null ? o : u, m = await ((n = this.fetch) != null ? n : globalThis.fetch)(d, {
      method: "GET",
      headers: f,
      credentials: y
    });
    if (m.status === 204)
      return null;
    if (!m.ok)
      throw new Error(
        (i = await m.text()) != null ? i : "Failed to fetch the chat response."
      );
    if (!m.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(m.body);
  }
}, K0 = class extends rh {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return Ca({
      stream: e,
      schema: Jg
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
}, DT = class {
  constructor({
    generateId: e = De,
    id: t = e(),
    transport: r = new K0(),
    messageMetadataSchema: o,
    dataPartSchemas: n,
    state: i,
    onError: a,
    onToolCall: s,
    onFinish: u,
    onData: l,
    sendAutomaticallyWhen: d
  }) {
    this.activeResponse = void 0, this.jobExecutor = new o0(), this.sendMessage = async (f, y) => {
      var p, m, _, v;
      if (f == null) {
        await this.makeRequest({
          trigger: "submit-message",
          messageId: (p = this.lastMessage) == null ? void 0 : p.id,
          ...y
        });
        return;
      }
      let g;
      if ("text" in f || "files" in f ? g = {
        parts: [
          ...Array.isArray(f.files) ? f.files : await H0(f.files),
          ..."text" in f && f.text != null ? [{ type: "text", text: f.text }] : []
        ]
      } : g = f, f.messageId != null) {
        const b = this.state.messages.findIndex(
          (w) => w.id === f.messageId
        );
        if (b === -1)
          throw new Error(`message with id ${f.messageId} not found`);
        if (this.state.messages[b].role !== "user")
          throw new Error(
            `message with id ${f.messageId} is not a user message`
          );
        this.state.messages = this.state.messages.slice(0, b + 1), this.state.replaceMessage(b, {
          ...g,
          id: f.messageId,
          role: (m = g.role) != null ? m : "user",
          metadata: f.metadata
        });
      } else
        this.state.pushMessage({
          ...g,
          id: (_ = g.id) != null ? _ : this.generateId(),
          role: (v = g.role) != null ? v : "user",
          metadata: f.metadata
        });
      await this.makeRequest({
        trigger: "submit-message",
        messageId: f.messageId,
        ...y
      });
    }, this.regenerate = async ({
      messageId: f,
      ...y
    } = {}) => {
      const p = f == null ? this.state.messages.length - 1 : this.state.messages.findIndex((m) => m.id === f);
      if (p === -1)
        throw new Error(`message ${f} not found`);
      this.state.messages = this.state.messages.slice(
        0,
        // if the message is a user message, we need to include it in the request:
        this.messages[p].role === "assistant" ? p : p + 1
      ), await this.makeRequest({
        trigger: "regenerate-message",
        messageId: f,
        ...y
      });
    }, this.resumeStream = async (f = {}) => {
      await this.makeRequest({ trigger: "resume-stream", ...f });
    }, this.clearError = () => {
      this.status === "error" && (this.state.error = void 0, this.setStatus({ status: "ready" }));
    }, this.addToolResult = async ({
      tool: f,
      toolCallId: y,
      output: p
    }) => this.jobExecutor.run(async () => {
      var m, _;
      const v = this.state.messages, g = v[v.length - 1];
      this.state.replaceMessage(v.length - 1, {
        ...g,
        parts: g.parts.map(
          (b) => It(b) && b.toolCallId === y ? { ...b, state: "output-available", output: p } : b
        )
      }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(
        (b) => It(b) && b.toolCallId === y ? {
          ...b,
          state: "output-available",
          output: p,
          errorText: void 0
        } : b
      )), this.status !== "streaming" && this.status !== "submitted" && ((m = this.sendAutomaticallyWhen) != null && m.call(this, { messages: this.state.messages })) && this.makeRequest({
        trigger: "submit-message",
        messageId: (_ = this.lastMessage) == null ? void 0 : _.id
      });
    }), this.stop = async () => {
      var f;
      this.status !== "streaming" && this.status !== "submitted" || (f = this.activeResponse) != null && f.abortController && this.activeResponse.abortController.abort();
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
    try {
      const l = {
        state: La({
          lastMessage: this.state.snapshot(u),
          messageId: this.generateId()
        }),
        abortController: new AbortController()
      };
      this.activeResponse = l;
      let d;
      if (e === "resume-stream") {
        const y = await this.transport.reconnectToStream({
          chatId: this.id,
          metadata: t,
          headers: r,
          body: o
        });
        if (y == null) {
          this.setStatus({ status: "ready" });
          return;
        }
        d = y;
      } else
        d = await this.transport.sendMessages({
          chatId: this.id,
          messages: this.state.messages,
          abortSignal: l.abortController.signal,
          metadata: t,
          headers: r,
          body: o,
          trigger: e,
          messageId: n
        });
      const f = (y) => (
        // serialize the job execution to avoid race conditions:
        this.jobExecutor.run(
          () => y({
            state: l.state,
            write: () => {
              var p;
              this.setStatus({ status: "streaming" }), l.state.message.id === ((p = this.lastMessage) == null ? void 0 : p.id) ? this.state.replaceMessage(
                this.state.messages.length - 1,
                l.state.message
              ) : this.state.pushMessage(l.state.message);
            }
          })
        )
      );
      await co({
        stream: Fa({
          stream: d,
          onToolCall: this.onToolCall,
          onData: this.onData,
          messageMetadataSchema: this.messageMetadataSchema,
          dataPartSchemas: this.dataPartSchemas,
          runUpdateMessageJob: f,
          onError: (y) => {
            throw y;
          }
        }),
        onError: (y) => {
          throw y;
        }
      }), (i = this.onFinish) == null || i.call(this, { message: l.state.message }), this.setStatus({ status: "ready" });
    } catch (l) {
      if (l.name === "AbortError")
        return this.setStatus({ status: "ready" }), null;
      this.onError && l instanceof Error && this.onError(l), this.setStatus({ status: "error", error: l });
    } finally {
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
function Y0(e, t) {
  const r = [];
  t != null && t.ignoreIncompleteToolCalls && (e = e.map((o) => ({
    ...o,
    parts: o.parts.filter(
      (n) => !It(n) || n.state !== "input-streaming" && n.state !== "input-available"
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
                const f = d.toolName;
                if (d.state === "input-streaming")
                  throw new dr({
                    originalMessage: o,
                    message: `incomplete tool input is not supported: ${d.toolCallId}`
                  });
                u.push({
                  type: "tool-call",
                  toolCallId: d.toolCallId,
                  toolName: f,
                  input: d.input,
                  ...d.callProviderMetadata != null ? { providerOptions: d.callProviderMetadata } : {}
                });
              } else if (It(d)) {
                const f = Cr(d);
                if (d.state === "input-streaming")
                  throw new dr({
                    originalMessage: o,
                    message: `incomplete tool input is not supported: ${d.toolCallId}`
                  });
                u.push({
                  type: "tool-call",
                  toolCallId: d.toolCallId,
                  toolName: f,
                  input: d.state === "output-error" ? (a = d.input) != null ? a : d.rawInput : d.input,
                  providerExecuted: d.providerExecuted,
                  ...d.callProviderMetadata != null ? { providerOptions: d.callProviderMetadata } : {}
                }), d.providerExecuted === !0 && (d.state === "output-available" || d.state === "output-error") && u.push({
                  type: "tool-result",
                  toolCallId: d.toolCallId,
                  toolName: f,
                  output: On({
                    output: d.state === "output-error" ? d.errorText : d.output,
                    tool: (s = t == null ? void 0 : t.tools) == null ? void 0 : s[f],
                    errorMode: d.state === "output-error" ? "json" : "none"
                  })
                });
              } else {
                const f = d;
                throw new Error(`Unsupported part: ${f}`);
              }
            r.push({
              role: "assistant",
              content: u
            });
            const l = i.filter(
              (d) => It(d) && d.providerExecuted !== !0 || d.type === "dynamic-tool"
            );
            l.length > 0 && r.push({
              role: "tool",
              content: l.map((d) => {
                var f;
                switch (d.state) {
                  case "output-error":
                  case "output-available": {
                    const y = d.type === "dynamic-tool" ? d.toolName : Cr(d);
                    return {
                      type: "tool-result",
                      toolCallId: d.toolCallId,
                      toolName: y,
                      output: On({
                        output: d.state === "output-error" ? d.errorText : d.output,
                        tool: (f = t == null ? void 0 : t.tools) == null ? void 0 : f[y],
                        errorMode: d.state === "output-error" ? "text" : "none"
                      })
                    };
                  }
                  default:
                    throw new dr({
                      originalMessage: o,
                      message: `Unsupported tool part state: ${d.state}`
                    });
                }
              })
            }), i = [];
          }, i = [];
          for (const a of o.parts)
            a.type === "text" || a.type === "reasoning" || a.type === "file" || a.type === "dynamic-tool" || It(a) ? i.push(a) : a.type === "step-start" && n();
          n();
          break;
        }
        break;
      }
      default: {
        const n = o.role;
        throw new dr({
          originalMessage: o,
          message: `Unsupported role: ${n}`
        });
      }
    }
  return r;
}
var qT = Y0;
function ZT({
  messages: e
}) {
  const t = e[e.length - 1];
  if (!t || t.role !== "assistant")
    return !1;
  const r = t.parts.reduce((n, i, a) => i.type === "step-start" ? a : n, -1), o = t.parts.slice(r + 1).filter((n) => It(n) || n.type === "dynamic-tool");
  return o.length > 0 && o.every((n) => n.state === "output-available");
}
function X0({
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
var LT = class extends rh {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return X0({
      stream: e.pipeThrough(new TextDecoderStream())
    });
  }
}, Q0 = h({
  type: x("text"),
  text: c(),
  state: ne(["streaming", "done"]).optional(),
  providerMetadata: ae.optional()
}), eT = h({
  type: x("reasoning"),
  text: c(),
  state: ne(["streaming", "done"]).optional(),
  providerMetadata: ae.optional()
}), tT = h({
  type: x("source-url"),
  sourceId: c(),
  url: c(),
  title: c().optional(),
  providerMetadata: ae.optional()
}), nT = h({
  type: x("source-document"),
  sourceId: c(),
  mediaType: c(),
  title: c(),
  filename: c().optional(),
  providerMetadata: ae.optional()
}), rT = h({
  type: x("file"),
  mediaType: c(),
  filename: c().optional(),
  url: c(),
  providerMetadata: ae.optional()
}), oT = h({
  type: x("step-start")
}), iT = h({
  type: c().startsWith("data-"),
  id: c().optional(),
  data: re()
}), aT = [
  h({
    type: x("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: x("input-streaming"),
    input: re().optional(),
    output: We().optional(),
    errorText: We().optional()
  }),
  h({
    type: x("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: x("input-available"),
    input: re(),
    output: We().optional(),
    errorText: We().optional(),
    callProviderMetadata: ae.optional()
  }),
  h({
    type: x("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: x("output-available"),
    input: re(),
    output: re(),
    errorText: We().optional(),
    callProviderMetadata: ae.optional(),
    preliminary: W().optional()
  }),
  h({
    type: x("dynamic-tool"),
    toolName: c(),
    toolCallId: c(),
    state: x("output-error"),
    input: re(),
    output: We().optional(),
    errorText: c(),
    callProviderMetadata: ae.optional()
  })
], sT = [
  h({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: x("input-streaming"),
    input: re().optional(),
    output: We().optional(),
    errorText: We().optional()
  }),
  h({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: x("input-available"),
    input: re(),
    output: We().optional(),
    errorText: We().optional(),
    callProviderMetadata: ae.optional()
  }),
  h({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: x("output-available"),
    input: re(),
    output: re(),
    errorText: We().optional(),
    callProviderMetadata: ae.optional(),
    preliminary: W().optional()
  }),
  h({
    type: c().startsWith("tool-"),
    toolCallId: c(),
    state: x("output-error"),
    input: re(),
    output: We().optional(),
    errorText: c(),
    callProviderMetadata: ae.optional()
  })
], uT = h({
  id: c(),
  role: ne(["system", "user", "assistant"]),
  metadata: re().optional(),
  parts: A(
    X([
      Q0,
      eT,
      tT,
      nT,
      rT,
      oT,
      iT,
      ...aT,
      ...sT
    ])
  )
});
async function FT({
  messages: e,
  metadataSchema: t,
  dataSchemas: r,
  tools: o
}) {
  const n = await Rt({
    value: e,
    schema: A(uT)
  });
  if (t)
    for (const i of n)
      await Rt({
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
          throw new Xe({
            value: s.data,
            cause: `No data schema found for data part ${u}`
          });
        await Rt({
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
          throw new Xe({
            value: s.input,
            cause: `No tool schema found for tool part ${u}`
          });
        (s.state === "input-available" || s.state === "output-available" || s.state === "output-error") && await Rt({
          value: s.input,
          schema: l.inputSchema
        }), s.state === "output-available" && l.outputSchema && await Rt({
          value: s.output,
          schema: l.outputSchema
        });
      }
    }
  return n;
}
function JT({
  execute: e,
  onError: t = Yr,
  originalMessages: r,
  onFinish: o,
  generateId: n = De
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
        write(f) {
          u(f);
        },
        merge(f) {
          a.push(
            (async () => {
              const y = f.getReader();
              for (; ; ) {
                const { done: p, value: m } = await y.read();
                if (p)
                  break;
                u(m);
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
      d.catch((f) => {
        u({
          type: "error",
          errorText: t(f)
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
  }), Gg({
    stream: s,
    messageId: n(),
    originalMessages: r,
    onFinish: o,
    onError: t
  });
}
function GT({
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
  }), u = La({
    messageId: (n = e == null ? void 0 : e.id) != null ? n : "",
    lastMessage: e
  }), l = (d) => {
    r == null || r(d), !a && o && (a = !0, i == null || i.error(d));
  };
  return co({
    stream: Fa({
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
  }), Et(s);
}
export {
  D as AISDKError,
  je as APICallError,
  DT as AbstractChat,
  K0 as DefaultChatTransport,
  Oo as DownloadError,
  ch as EmptyResponseBodyError,
  _T as Experimental_Agent,
  rh as HttpChatTransport,
  be as InvalidArgumentError,
  uu as InvalidDataContentError,
  dS as InvalidMessageRoleError,
  Zt as InvalidPromptError,
  yo as InvalidResponseDataError,
  pT as InvalidStreamPartError,
  Uf as InvalidToolInputError,
  En as JSONParseError,
  Lg as JsonToSseTransformStream,
  ar as LoadAPIKeyError,
  Me as MCPClientError,
  dr as MessageConversionError,
  cT as NoContentGeneratedError,
  nS as NoImageGeneratedError,
  Yt as NoObjectGeneratedError,
  iS as NoOutputGeneratedError,
  Of as NoOutputSpecifiedError,
  Ze as NoSuchModelError,
  y0 as NoSuchProviderError,
  Do as NoSuchToolError,
  c0 as Output,
  lu as RetryError,
  o0 as SerialJobExecutor,
  LT as TextStreamChatTransport,
  uS as ToolCallRepairError,
  Xe as TypeValidationError,
  Fg as UI_MESSAGE_STREAM_HEADERS,
  we as UnsupportedFunctionalityError,
  tr as UnsupportedModelVersionError,
  dn as asSchema,
  Ng as assistantModelMessageSchema,
  UT as callCompletionApi,
  co as consumeStream,
  H0 as convertFileListToFileUIParts,
  qT as convertToCoreMessages,
  Y0 as convertToModelMessages,
  gT as coreAssistantMessageSchema,
  vT as coreMessageSchema,
  mT as coreSystemMessageSchema,
  hT as coreToolMessageSchema,
  fT as coreUserMessageSchema,
  kT as cosineSimilarity,
  _$ as createAnthropic,
  F$ as createGoogleGenerativeAI,
  Yn as createIdGenerator,
  Q$ as createMistral,
  ik as createOpenAI,
  _0 as createProviderRegistry,
  Dg as createTextStreamResponse,
  JT as createUIMessageStream,
  US as createUIMessageStreamResponse,
  h0 as customProvider,
  NT as defaultSettingsMiddleware,
  Uw as dynamicTool,
  bT as embed,
  wT as embedMany,
  jT as experimental_createMCPClient,
  RT as experimental_createProviderRegistry,
  MT as experimental_customProvider,
  $T as experimental_generateImage,
  OT as experimental_generateSpeech,
  zT as experimental_transcribe,
  CT as extractReasoningMiddleware,
  De as generateId,
  IT as generateObject,
  MS as generateText,
  xT as getTextFromDataUrl,
  Cr as getToolName,
  yT as hasToolCall,
  Pr as isDeepEqualData,
  It as isToolUIPart,
  Qr as jsonSchema,
  ZT as lastAssistantMessageIsCompleteWithToolCalls,
  Pg as modelMessageSchema,
  Za as parsePartialJson,
  Zg as pipeTextStreamToResponse,
  LS as pipeUIMessageStreamToResponse,
  GT as readUIMessageStream,
  ST as simulateReadableStream,
  PT as simulateStreamingMiddleware,
  ET as smoothStream,
  zg as stepCountIs,
  TT as streamObject,
  GS as streamText,
  Og as systemModelMessageSchema,
  dT as tool,
  Cg as toolModelMessageSchema,
  Eg as userModelMessageSchema,
  FT as validateUIMessages,
  Yg as wrapLanguageModel,
  AT as wrapProvider,
  Fw as zodSchema
};
