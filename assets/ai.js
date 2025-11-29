var xs = "vercel.ai.error", oc = Symbol.for(xs), Is, ac = class ks extends Error {
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
    message: n,
    cause: r
  }) {
    super(n), this[Is] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return ks.hasMarker(t, xs);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
Is = oc;
var H = ac, Ts = "AI_APICallError", Ss = `vercel.ai.error.${Ts}`, sc = Symbol.for(Ss), Es, qe = class extends H {
  constructor({
    message: e,
    url: t,
    requestBodyValues: n,
    statusCode: r,
    responseHeaders: o,
    responseBody: a,
    cause: s,
    isRetryable: i = r != null && (r === 408 || // request timeout
    r === 409 || // conflict
    r === 429 || // too many requests
    r >= 500),
    // server error
    data: u
  }) {
    super({ name: Ts, message: e, cause: s }), this[Es] = !0, this.url = t, this.requestBodyValues = n, this.statusCode = r, this.responseHeaders = o, this.responseBody = a, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ss);
  }
};
Es = sc;
var Cs = "AI_EmptyResponseBodyError", Ms = `vercel.ai.error.${Cs}`, ic = Symbol.for(Ms), Rs, lc = class extends H {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Cs, message: e }), this[Rs] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ms);
  }
};
Rs = ic;
function ln(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Os = "AI_InvalidArgumentError", Ns = `vercel.ai.error.${Os}`, uc = Symbol.for(Ns), As, oo = class extends H {
  constructor({
    message: t,
    cause: n,
    argument: r
  }) {
    super({ name: Os, message: t, cause: n }), this[As] = !0, this.argument = r;
  }
  static isInstance(t) {
    return H.hasMarker(t, Ns);
  }
};
As = uc;
var $s = "AI_InvalidPromptError", Ps = `vercel.ai.error.${$s}`, cc = Symbol.for(Ps), js, Pt = class extends H {
  constructor({
    prompt: e,
    message: t,
    cause: n
  }) {
    super({ name: $s, message: `Invalid prompt: ${t}`, cause: n }), this[js] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ps);
  }
};
js = cc;
var qs = "AI_InvalidResponseDataError", Ds = `vercel.ai.error.${qs}`, dc = Symbol.for(Ds), zs, Sr = class extends H {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: qs, message: t }), this[zs] = !0, this.data = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ds);
  }
};
zs = dc;
var Us = "AI_JSONParseError", Zs = `vercel.ai.error.${Us}`, pc = Symbol.for(Zs), Ls, xn = class extends H {
  constructor({ text: e, cause: t }) {
    super({
      name: Us,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${ln(t)}`,
      cause: t
    }), this[Ls] = !0, this.text = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, Zs);
  }
};
Ls = pc;
var Fs = "AI_LoadAPIKeyError", Vs = `vercel.ai.error.${Fs}`, fc = Symbol.for(Vs), Gs, Zn = class extends H {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Fs, message: e }), this[Gs] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, Vs);
  }
};
Gs = fc;
var Bs = "AI_LoadSettingError", Js = `vercel.ai.error.${Bs}`, mc = Symbol.for(Js), Hs, R0 = class extends H {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Bs, message: e }), this[Hs] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, Js);
  }
};
Hs = mc;
var Ws = "AI_NoContentGeneratedError", Ks = `vercel.ai.error.${Ws}`, hc = Symbol.for(Ks), Ys, O0 = class extends H {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: Ws, message: e }), this[Ys] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ks);
  }
};
Ys = hc;
var Xs = "AI_NoSuchModelError", Qs = `vercel.ai.error.${Xs}`, gc = Symbol.for(Qs), ei, He = class extends H {
  constructor({
    errorName: e = Xs,
    modelId: t,
    modelType: n,
    message: r = `No such ${n}: ${t}`
  }) {
    super({ name: e, message: r }), this[ei] = !0, this.modelId = t, this.modelType = n;
  }
  static isInstance(e) {
    return H.hasMarker(e, Qs);
  }
};
ei = gc;
var ti = "AI_TooManyEmbeddingValuesForCallError", ni = `vercel.ai.error.${ti}`, vc = Symbol.for(ni), ri, ao = class extends H {
  constructor(e) {
    super({
      name: ti,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[ri] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return H.hasMarker(e, ni);
  }
};
ri = vc;
var oi = "AI_TypeValidationError", ai = `vercel.ai.error.${oi}`, yc = Symbol.for(ai), si, _c = class Gr extends H {
  constructor({ value: t, cause: n }) {
    super({
      name: oi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${ln(n)}`,
      cause: n
    }), this[si] = !0, this.value = t;
  }
  static isInstance(t) {
    return H.hasMarker(t, ai);
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
    cause: n
  }) {
    return Gr.isInstance(n) && n.value === t ? n : new Gr({ value: t, cause: n });
  }
};
si = yc;
var Ye = _c, ii = "AI_UnsupportedFunctionalityError", li = `vercel.ai.error.${ii}`, bc = Symbol.for(li), ui, ke = class extends H {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: ii, message: t }), this[ui] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, li);
  }
};
ui = bc;
function Jn(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? !0 : Array.isArray(e) ? e.every(Jn) : typeof e == "object" ? Object.entries(e).every(
    ([t, n]) => typeof t == "string" && Jn(n)
  ) : !1;
}
function zo(e) {
  return Array.isArray(e) && e.every(Jn);
}
function Hn(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, n]) => typeof t == "string" && Jn(n)
  );
}
class Uo extends Error {
  constructor(t, n) {
    super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
function Er(e) {
}
function wc(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = Er, onError: n = Er, onRetry: r = Er, onComment: o } = e;
  let a = "", s = !0, i, u = "", c = "";
  function p(_) {
    const b = s ? _.replace(/^\xEF\xBB\xBF/, "") : _, [h, v] = xc(`${a}${b}`);
    for (const I of h)
      m(I);
    a = v, s = !1;
  }
  function m(_) {
    if (_ === "") {
      f();
      return;
    }
    if (_.startsWith(":")) {
      o && o(_.slice(_.startsWith(": ") ? 2 : 1));
      return;
    }
    const b = _.indexOf(":");
    if (b !== -1) {
      const h = _.slice(0, b), v = _[b + 1] === " " ? 2 : 1, I = _.slice(b + v);
      g(h, I, _);
      return;
    }
    g(_, "", _);
  }
  function g(_, b, h) {
    switch (_) {
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
        /^\d+$/.test(b) ? r(parseInt(b, 10)) : n(
          new Uo(`Invalid \`retry\` value: "${b}"`, {
            type: "invalid-retry",
            value: b,
            line: h
          })
        );
        break;
      default:
        n(
          new Uo(
            `Unknown field "${_.length > 20 ? `${_.slice(0, 20)}…` : _}"`,
            { type: "unknown-field", field: _, value: b, line: h }
          )
        );
        break;
    }
  }
  function f() {
    u.length > 0 && t({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function y(_ = {}) {
    a && _.consume && m(a), s = !0, i = void 0, u = "", c = "", a = "";
  }
  return { feed: p, reset: y };
}
function xc(e) {
  const t = [];
  let n = "", r = 0;
  for (; r < e.length; ) {
    const o = e.indexOf("\r", r), a = e.indexOf(`
`, r);
    let s = -1;
    if (o !== -1 && a !== -1 ? s = Math.min(o, a) : o !== -1 ? o === e.length - 1 ? s = -1 : s = o : a !== -1 && (s = a), s === -1) {
      n = e.slice(r);
      break;
    } else {
      const i = e.slice(r, s);
      t.push(i), r = s + 1, e[r - 1] === "\r" && e[r] === `
` && r++;
    }
  }
  return [t, n];
}
class Ic extends TransformStream {
  constructor({ onError: t, onRetry: n, onComment: r } = {}) {
    let o;
    super({
      start(a) {
        o = wc({
          onEvent: (s) => {
            a.enqueue(s);
          },
          onError(s) {
            t === "terminate" ? a.error(s) : typeof t == "function" && t(s);
          },
          onRetry: n,
          onComment: r
        });
      },
      transform(a) {
        o.feed(a);
      }
    });
  }
}
function A(e, t, n) {
  function r(i, u) {
    if (i._zod || Object.defineProperty(i, "_zod", {
      value: {
        def: u,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), i._zod.traits.has(e))
      return;
    i._zod.traits.add(e), t(i, u);
    const c = s.prototype, p = Object.keys(c);
    for (let m = 0; m < p.length; m++) {
      const g = p[m];
      g in i || (i[g] = c[g].bind(i));
    }
  }
  const o = (n == null ? void 0 : n.Parent) ?? Object;
  class a extends o {
  }
  Object.defineProperty(a, "name", { value: e });
  function s(i) {
    var u;
    const c = n != null && n.Parent ? new a() : this;
    r(c, i), (u = c._zod).deferred ?? (u.deferred = []);
    for (const p of c._zod.deferred)
      p();
    return c;
  }
  return Object.defineProperty(s, "init", { value: r }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (i) => {
      var u, c;
      return n != null && n.Parent && i instanceof n.Parent ? !0 : (c = (u = i == null ? void 0 : i._zod) == null ? void 0 : u.traits) == null ? void 0 : c.has(e);
    }
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class Xt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class ci extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const di = {};
function Rt(e) {
  return di;
}
function pi(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function Br(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function sr(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function so(e) {
  return e == null;
}
function io(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function kc(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = t.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const u = r.match(/\d?e-(\d?)/);
    u != null && u[1] && (o = Number.parseInt(u[1]));
  }
  const a = n > o ? n : o, s = Number.parseInt(e.toFixed(a).replace(".", "")), i = Number.parseInt(t.toFixed(a).replace(".", ""));
  return s % i / 10 ** a;
}
const Zo = Symbol("evaluating");
function pe(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== Zo)
        return r === void 0 && (r = Zo, r = n()), r;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ft(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Vt(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function Lo(e) {
  return JSON.stringify(e);
}
function Tc(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const fi = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function In(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Sc = sr(() => {
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
function tn(e) {
  if (In(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(In(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function mi(e) {
  return tn(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Ec = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function nn(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function $t(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n != null && n.parent) && (r._zod.parent = e), r;
}
function G(e) {
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
function Cc(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Mc = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Rc(e, t) {
  const n = e._zod.def, r = Vt(e._zod.def, {
    get shape() {
      const o = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (o[a] = n.shape[a]);
      }
      return Ft(this, "shape", o), o;
    },
    checks: []
  });
  return $t(e, r);
}
function Oc(e, t) {
  const n = e._zod.def, r = Vt(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete o[a];
      }
      return Ft(this, "shape", o), o;
    },
    checks: []
  });
  return $t(e, r);
}
function Nc(e, t) {
  if (!tn(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Vt(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape, ...t };
      return Ft(this, "shape", a), a;
    },
    checks: []
  });
  return $t(e, o);
}
function Ac(e, t) {
  if (!tn(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return Ft(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  };
  return $t(e, n);
}
function $c(e, t) {
  const n = Vt(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Ft(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return $t(e, n);
}
function Pc(e, t, n) {
  const r = Vt(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, a = { ...o };
      if (n)
        for (const s in n) {
          if (!(s in o))
            throw new Error(`Unrecognized key: "${s}"`);
          n[s] && (a[s] = e ? new e({
            type: "optional",
            innerType: o[s]
          }) : o[s]);
        }
      else
        for (const s in o)
          a[s] = e ? new e({
            type: "optional",
            innerType: o[s]
          }) : o[s];
      return Ft(this, "shape", a), a;
    },
    checks: []
  });
  return $t(t, r);
}
function jc(e, t, n) {
  const r = Vt(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, a = { ...o };
      if (n)
        for (const s in n) {
          if (!(s in a))
            throw new Error(`Unrecognized key: "${s}"`);
          n[s] && (a[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          }));
        }
      else
        for (const s in o)
          a[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          });
      return Ft(this, "shape", a), a;
    },
    checks: []
  });
  return $t(t, r);
}
function Yt(e, t = 0) {
  var n;
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (((n = e.issues[r]) == null ? void 0 : n.continue) !== !0)
      return !0;
  return !1;
}
function qt(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function Ln(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function Ot(e, t, n) {
  var o, a, s, i, u, c;
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const p = Ln((s = (a = (o = e.inst) == null ? void 0 : o._zod.def) == null ? void 0 : a.error) == null ? void 0 : s.call(a, e)) ?? Ln((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? Ln((u = n.customError) == null ? void 0 : u.call(n, e)) ?? Ln((c = n.localeError) == null ? void 0 : c.call(n, e)) ?? "Invalid input";
    r.message = p;
  }
  return delete r.inst, delete r.continue, t != null && t.reportInput || delete r.input, r;
}
function lo(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function kn(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
const hi = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Br, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, gi = A("$ZodError", hi), vi = A("$ZodError", hi, { Parent: Error });
function qc(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function Dc(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o) => {
    for (const a of o.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map((s) => r({ issues: s }));
      else if (a.code === "invalid_key")
        r({ issues: a.issues });
      else if (a.code === "invalid_element")
        r({ issues: a.issues });
      else if (a.path.length === 0)
        n._errors.push(t(a));
      else {
        let s = n, i = 0;
        for (; i < a.path.length; ) {
          const u = a.path[i];
          i === a.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(t(a))) : s[u] = s[u] || { _errors: [] }, s = s[u], i++;
        }
      }
  };
  return r(e), n;
}
const uo = (e) => (t, n, r, o) => {
  const a = r ? Object.assign(r, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, a);
  if (s instanceof Promise)
    throw new Xt();
  if (s.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(s.issues.map((u) => Ot(u, a, Rt())));
    throw fi(i, o == null ? void 0 : o.callee), i;
  }
  return s.value;
}, co = (e) => async (t, n, r, o) => {
  const a = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, a);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(s.issues.map((u) => Ot(u, a, Rt())));
    throw fi(i, o == null ? void 0 : o.callee), i;
  }
  return s.value;
}, ir = (e) => (t, n, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, a = t._zod.run({ value: n, issues: [] }, o);
  if (a instanceof Promise)
    throw new Xt();
  return a.issues.length ? {
    success: !1,
    error: new (e ?? gi)(a.issues.map((s) => Ot(s, o, Rt())))
  } : { success: !0, data: a.value };
}, zc = /* @__PURE__ */ ir(vi), lr = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: n, issues: [] }, o);
  return a instanceof Promise && (a = await a), a.issues.length ? {
    success: !1,
    error: new e(a.issues.map((s) => Ot(s, o, Rt())))
  } : { success: !0, data: a.value };
}, Uc = /* @__PURE__ */ lr(vi), Zc = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return uo(e)(t, n, o);
}, Lc = (e) => (t, n, r) => uo(e)(t, n, r), Fc = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return co(e)(t, n, o);
}, Vc = (e) => async (t, n, r) => co(e)(t, n, r), Gc = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ir(e)(t, n, o);
}, Bc = (e) => (t, n, r) => ir(e)(t, n, r), Jc = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return lr(e)(t, n, o);
}, Hc = (e) => async (t, n, r) => lr(e)(t, n, r), Wc = /^[cC][^\s-]{8,}$/, Kc = /^[0-9a-z]+$/, Yc = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Xc = /^[0-9a-vA-V]{20}$/, Qc = /^[A-Za-z0-9]{27}$/, ed = /^[a-zA-Z0-9_-]{21}$/, td = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nd = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Fo = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, rd = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, od = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ad() {
  return new RegExp(od, "u");
}
const sd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, id = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ld = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ud = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cd = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, yi = /^[A-Za-z0-9_-]*$/, dd = /^\+(?:[0-9]){6,14}[0-9]$/, _i = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", pd = /* @__PURE__ */ new RegExp(`^${_i}$`);
function bi(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function fd(e) {
  return new RegExp(`^${bi(e)}$`);
}
function md(e) {
  const t = bi({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${_i}T(?:${r})$`);
}
const hd = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, gd = /^-?\d+$/, vd = /^-?\d+(?:\.\d+)?/, yd = /^(?:true|false)$/i, _d = /^null$/i, bd = /^[^A-Z]*$/, wd = /^[^a-z]*$/, Xe = /* @__PURE__ */ A("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), wi = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, xi = /* @__PURE__ */ A("$ZodCheckLessThan", (e, t) => {
  Xe.init(e, t);
  const n = wi[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, a = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < a && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: n,
      code: "too_big",
      maximum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Ii = /* @__PURE__ */ A("$ZodCheckGreaterThan", (e, t) => {
  Xe.init(e, t);
  const n = wi[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, a = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > a && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: n,
      code: "too_small",
      minimum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), xd = /* @__PURE__ */ A("$ZodCheckMultipleOf", (e, t) => {
  Xe.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : kc(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Id = /* @__PURE__ */ A("$ZodCheckNumberFormat", (e, t) => {
  var s;
  Xe.init(e, t), t.format = t.format || "float64";
  const n = (s = t.format) == null ? void 0 : s.includes("int"), r = n ? "int" : "number", [o, a] = Mc[t.format];
  e._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = t.format, u.minimum = o, u.maximum = a, n && (u.pattern = gd);
  }), e._zod.check = (i) => {
    const u = i.value;
    if (n) {
      if (!Number.isInteger(u)) {
        i.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: u,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(u)) {
        u > 0 ? i.issues.push({
          input: u,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        }) : i.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        });
        return;
      }
    }
    u < o && i.issues.push({
      origin: "number",
      input: u,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), u > a && i.issues.push({
      origin: "number",
      input: u,
      code: "too_big",
      maximum: a,
      inst: e
    });
  };
}), kd = /* @__PURE__ */ A("$ZodCheckMaxLength", (e, t) => {
  var n;
  Xe.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !so(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum)
      return;
    const s = lo(o);
    r.issues.push({
      origin: s,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Td = /* @__PURE__ */ A("$ZodCheckMinLength", (e, t) => {
  var n;
  Xe.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !so(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum)
      return;
    const s = lo(o);
    r.issues.push({
      origin: s,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Sd = /* @__PURE__ */ A("$ZodCheckLengthEquals", (e, t) => {
  var n;
  Xe.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !so(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, a = o.length;
    if (a === t.length)
      return;
    const s = lo(o), i = a > t.length;
    r.issues.push({
      origin: s,
      ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ur = /* @__PURE__ */ A("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  Xe.init(e, t), e._zod.onattach.push((o) => {
    const a = o._zod.bag;
    a.format = t.format, t.pattern && (a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Ed = /* @__PURE__ */ A("$ZodCheckRegex", (e, t) => {
  ur.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Cd = /* @__PURE__ */ A("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = bd), ur.init(e, t);
}), Md = /* @__PURE__ */ A("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = wd), ur.init(e, t);
}), Rd = /* @__PURE__ */ A("$ZodCheckIncludes", (e, t) => {
  Xe.init(e, t);
  const n = nn(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const a = o._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Od = /* @__PURE__ */ A("$ZodCheckStartsWith", (e, t) => {
  Xe.init(e, t);
  const n = new RegExp(`^${nn(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Nd = /* @__PURE__ */ A("$ZodCheckEndsWith", (e, t) => {
  Xe.init(e, t);
  const n = new RegExp(`.*${nn(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ad = /* @__PURE__ */ A("$ZodCheckOverwrite", (e, t) => {
  Xe.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class $d {
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
    const r = t.split(`
`).filter((s) => s), o = Math.min(...r.map((s) => s.length - s.trimStart().length)), a = r.map((s) => s.slice(o)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of a)
      this.content.push(s);
  }
  compile() {
    const t = Function, n = this == null ? void 0 : this.args, o = [...((this == null ? void 0 : this.content) ?? [""]).map((a) => `  ${a}`)];
    return new t(...n, o.join(`
`));
  }
}
const Pd = {
  major: 4,
  minor: 1,
  patch: 13
}, ye = /* @__PURE__ */ A("$ZodType", (e, t) => {
  var o;
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Pd;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const a of r)
    for (const s of a._zod.onattach)
      s(e);
  if (r.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), (o = e._zod.deferred) == null || o.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const a = (i, u, c) => {
      let p = Yt(i), m;
      for (const g of u) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(i))
            continue;
        } else if (p)
          continue;
        const f = i.issues.length, y = g._zod.check(i);
        if (y instanceof Promise && (c == null ? void 0 : c.async) === !1)
          throw new Xt();
        if (m || y instanceof Promise)
          m = (m ?? Promise.resolve()).then(async () => {
            await y, i.issues.length !== f && (p || (p = Yt(i, f)));
          });
        else {
          if (i.issues.length === f)
            continue;
          p || (p = Yt(i, f));
        }
      }
      return m ? m.then(() => i) : i;
    }, s = (i, u, c) => {
      if (Yt(i))
        return i.aborted = !0, i;
      const p = a(u, r, c);
      if (p instanceof Promise) {
        if (c.async === !1)
          throw new Xt();
        return p.then((m) => e._zod.parse(m, c));
      }
      return e._zod.parse(p, c);
    };
    e._zod.run = (i, u) => {
      if (u.skipChecks)
        return e._zod.parse(i, u);
      if (u.direction === "backward") {
        const p = e._zod.parse({ value: i.value, issues: [] }, { ...u, skipChecks: !0 });
        return p instanceof Promise ? p.then((m) => s(m, i, u)) : s(p, i, u);
      }
      const c = e._zod.parse(i, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new Xt();
        return c.then((p) => a(p, r, u));
      }
      return a(c, r, u);
    };
  }
  e["~standard"] = {
    validate: (a) => {
      var s;
      try {
        const i = zc(e, a);
        return i.success ? { value: i.data } : { issues: (s = i.error) == null ? void 0 : s.issues };
      } catch {
        return Uc(e, a).then((u) => {
          var c;
          return u.success ? { value: u.data } : { issues: (c = u.error) == null ? void 0 : c.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), po = /* @__PURE__ */ A("$ZodString", (e, t) => {
  var n;
  ye.init(e, t), e._zod.pattern = [...((n = e == null ? void 0 : e._zod.bag) == null ? void 0 : n.patterns) ?? []].pop() ?? hd(e._zod.bag), e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), Se = /* @__PURE__ */ A("$ZodStringFormat", (e, t) => {
  ur.init(e, t), po.init(e, t);
}), jd = /* @__PURE__ */ A("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = nd), Se.init(e, t);
}), qd = /* @__PURE__ */ A("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Fo(r));
  } else
    t.pattern ?? (t.pattern = Fo());
  Se.init(e, t);
}), Dd = /* @__PURE__ */ A("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = rd), Se.init(e, t);
}), zd = /* @__PURE__ */ A("$ZodURL", (e, t) => {
  Se.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), o = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = o.href : n.value = r;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Ud = /* @__PURE__ */ A("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = ad()), Se.init(e, t);
}), Zd = /* @__PURE__ */ A("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = ed), Se.init(e, t);
}), Ld = /* @__PURE__ */ A("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Wc), Se.init(e, t);
}), Fd = /* @__PURE__ */ A("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Kc), Se.init(e, t);
}), Vd = /* @__PURE__ */ A("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Yc), Se.init(e, t);
}), Gd = /* @__PURE__ */ A("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Xc), Se.init(e, t);
}), Bd = /* @__PURE__ */ A("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Qc), Se.init(e, t);
}), Jd = /* @__PURE__ */ A("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = md(t)), Se.init(e, t);
}), Hd = /* @__PURE__ */ A("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = pd), Se.init(e, t);
}), Wd = /* @__PURE__ */ A("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = fd(t)), Se.init(e, t);
}), Kd = /* @__PURE__ */ A("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = td), Se.init(e, t);
}), Yd = /* @__PURE__ */ A("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = sd), Se.init(e, t), e._zod.bag.format = "ipv4";
}), Xd = /* @__PURE__ */ A("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = id), Se.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Qd = /* @__PURE__ */ A("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = ld), Se.init(e, t);
}), ep = /* @__PURE__ */ A("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = ud), Se.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, a] = r;
      if (!a)
        throw new Error();
      const s = Number(a);
      if (`${s}` !== a)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function ki(e) {
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
const tp = /* @__PURE__ */ A("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = cd), Se.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    ki(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function np(e) {
  if (!yi.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return ki(n);
}
const rp = /* @__PURE__ */ A("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = yi), Se.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    np(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), op = /* @__PURE__ */ A("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = dd), Se.init(e, t);
});
function ap(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [r] = n;
    if (!r)
      return !1;
    const o = JSON.parse(atob(r));
    return !("typ" in o && (o == null ? void 0 : o.typ) !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const sp = /* @__PURE__ */ A("$ZodJWT", (e, t) => {
  Se.init(e, t), e._zod.check = (n) => {
    ap(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ti = /* @__PURE__ */ A("$ZodNumber", (e, t) => {
  ye.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? vd, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const o = n.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return n;
    const a = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...a ? { received: a } : {}
    }), n;
  };
}), ip = /* @__PURE__ */ A("$ZodNumberFormat", (e, t) => {
  Id.init(e, t), Ti.init(e, t);
}), lp = /* @__PURE__ */ A("$ZodBoolean", (e, t) => {
  ye.init(e, t), e._zod.pattern = yd, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const o = n.value;
    return typeof o == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), up = /* @__PURE__ */ A("$ZodNull", (e, t) => {
  ye.init(e, t), e._zod.pattern = _d, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (n, r) => {
    const o = n.value;
    return o === null || n.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), cp = /* @__PURE__ */ A("$ZodAny", (e, t) => {
  ye.init(e, t), e._zod.parse = (n) => n;
}), dp = /* @__PURE__ */ A("$ZodUnknown", (e, t) => {
  ye.init(e, t), e._zod.parse = (n) => n;
}), pp = /* @__PURE__ */ A("$ZodNever", (e, t) => {
  ye.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function Vo(e, t, n) {
  e.issues.length && t.issues.push(...qt(n, e.issues)), t.value[n] = e.value;
}
const fp = /* @__PURE__ */ A("$ZodArray", (e, t) => {
  ye.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    n.value = Array(o.length);
    const a = [];
    for (let s = 0; s < o.length; s++) {
      const i = o[s], u = t.element._zod.run({
        value: i,
        issues: []
      }, r);
      u instanceof Promise ? a.push(u.then((c) => Vo(c, n, s))) : Vo(u, n, s);
    }
    return a.length ? Promise.all(a).then(() => n) : n;
  };
});
function Wn(e, t, n, r) {
  e.issues.length && t.issues.push(...qt(n, e.issues)), e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Si(e) {
  var r, o, a, s;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((s = (a = (o = (r = e.shape) == null ? void 0 : r[i]) == null ? void 0 : o._zod) == null ? void 0 : a.traits) != null && s.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const n = Cc(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Ei(e, t, n, r, o, a) {
  const s = [], i = o.keySet, u = o.catchall._zod, c = u.def.type;
  for (const p in t) {
    if (i.has(p))
      continue;
    if (c === "never") {
      s.push(p);
      continue;
    }
    const m = u.run({ value: t[p], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((g) => Wn(g, n, p, t))) : Wn(m, n, p, t);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: a
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const mp = /* @__PURE__ */ A("$ZodObject", (e, t) => {
  ye.init(e, t);
  const n = Object.getOwnPropertyDescriptor(t, "shape");
  if (!(n != null && n.get)) {
    const i = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const u = { ...i };
        return Object.defineProperty(t, "shape", {
          value: u
        }), u;
      }
    });
  }
  const r = sr(() => Si(t));
  pe(e._zod, "propValues", () => {
    const i = t.shape, u = {};
    for (const c in i) {
      const p = i[c]._zod;
      if (p.values) {
        u[c] ?? (u[c] = /* @__PURE__ */ new Set());
        for (const m of p.values)
          u[c].add(m);
      }
    }
    return u;
  });
  const o = In, a = t.catchall;
  let s;
  e._zod.parse = (i, u) => {
    s ?? (s = r.value);
    const c = i.value;
    if (!o(c))
      return i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: c,
        inst: e
      }), i;
    i.value = {};
    const p = [], m = s.shape;
    for (const g of s.keys) {
      const y = m[g]._zod.run({ value: c[g], issues: [] }, u);
      y instanceof Promise ? p.push(y.then((_) => Wn(_, i, g, c))) : Wn(y, i, g, c);
    }
    return a ? Ei(p, c, i, u, r.value, e) : p.length ? Promise.all(p).then(() => i) : i;
  };
}), hp = /* @__PURE__ */ A("$ZodObjectJIT", (e, t) => {
  mp.init(e, t);
  const n = e._zod.parse, r = sr(() => Si(t)), o = (g) => {
    const f = new $d(["shape", "payload", "ctx"]), y = r.value, _ = (I) => {
      const w = Lo(I);
      return `shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`;
    };
    f.write("const input = payload.value;");
    const b = /* @__PURE__ */ Object.create(null);
    let h = 0;
    for (const I of y.keys)
      b[I] = `key_${h++}`;
    f.write("const newResult = {};");
    for (const I of y.keys) {
      const w = b[I], E = Lo(I);
      f.write(`const ${w} = ${_(I)};`), f.write(`
        if (${w}.issues.length) {
          payload.issues = payload.issues.concat(${w}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        
        if (${w}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${w}.value;
        }
        
      `);
    }
    f.write("payload.value = newResult;"), f.write("return payload;");
    const v = f.compile();
    return (I, w) => v(g, I, w);
  };
  let a;
  const s = In, i = !di.jitless, c = i && Sc.value, p = t.catchall;
  let m;
  e._zod.parse = (g, f) => {
    m ?? (m = r.value);
    const y = g.value;
    return s(y) ? i && c && (f == null ? void 0 : f.async) === !1 && f.jitless !== !0 ? (a || (a = o(t.shape)), g = a(g, f), p ? Ei([], y, g, f, m, e) : g) : n(g, f) : (g.issues.push({
      expected: "object",
      code: "invalid_type",
      input: y,
      inst: e
    }), g);
  };
});
function Go(e, t, n, r) {
  for (const a of e)
    if (a.issues.length === 0)
      return t.value = a.value, t;
  const o = e.filter((a) => !Yt(a));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((a) => a.issues.map((s) => Ot(s, r, Rt())))
  }), t);
}
const Ci = /* @__PURE__ */ A("$ZodUnion", (e, t) => {
  ye.init(e, t), pe(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), pe(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), pe(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), pe(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((a) => a._zod.pattern);
      return new RegExp(`^(${o.map((a) => io(a.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (o, a) => {
    if (n)
      return r(o, a);
    let s = !1;
    const i = [];
    for (const u of t.options) {
      const c = u._zod.run({
        value: o.value,
        issues: []
      }, a);
      if (c instanceof Promise)
        i.push(c), s = !0;
      else {
        if (c.issues.length === 0)
          return c;
        i.push(c);
      }
    }
    return s ? Promise.all(i).then((u) => Go(u, o, e, a)) : Go(i, o, e, a);
  };
}), gp = /* @__PURE__ */ A("$ZodDiscriminatedUnion", (e, t) => {
  Ci.init(e, t);
  const n = e._zod.parse;
  pe(e._zod, "propValues", () => {
    const o = {};
    for (const a of t.options) {
      const s = a._zod.propValues;
      if (!s || Object.keys(s).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);
      for (const [i, u] of Object.entries(s)) {
        o[i] || (o[i] = /* @__PURE__ */ new Set());
        for (const c of u)
          o[i].add(c);
      }
    }
    return o;
  });
  const r = sr(() => {
    var s;
    const o = t.options, a = /* @__PURE__ */ new Map();
    for (const i of o) {
      const u = (s = i._zod.propValues) == null ? void 0 : s[t.discriminator];
      if (!u || u.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const c of u) {
        if (a.has(c))
          throw new Error(`Duplicate discriminator value "${String(c)}"`);
        a.set(c, i);
      }
    }
    return a;
  });
  e._zod.parse = (o, a) => {
    const s = o.value;
    if (!In(s))
      return o.issues.push({
        code: "invalid_type",
        expected: "object",
        input: s,
        inst: e
      }), o;
    const i = r.value.get(s == null ? void 0 : s[t.discriminator]);
    return i ? i._zod.run(o, a) : t.unionFallback ? n(o, a) : (o.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: s,
      path: [t.discriminator],
      inst: e
    }), o);
  };
}), vp = /* @__PURE__ */ A("$ZodIntersection", (e, t) => {
  ye.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, a = t.left._zod.run({ value: o, issues: [] }, r), s = t.right._zod.run({ value: o, issues: [] }, r);
    return a instanceof Promise || s instanceof Promise ? Promise.all([a, s]).then(([u, c]) => Bo(n, u, c)) : Bo(n, a, s);
  };
});
function Jr(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (tn(e) && tn(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((a) => n.indexOf(a) !== -1), o = { ...e, ...t };
    for (const a of r) {
      const s = Jr(e[a], t[a]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...s.mergeErrorPath]
        };
      o[a] = s.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], a = t[r], s = Jr(o, a);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...s.mergeErrorPath]
        };
      n.push(s.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Bo(e, t, n) {
  if (t.issues.length && e.issues.push(...t.issues), n.issues.length && e.issues.push(...n.issues), Yt(e))
    return e;
  const r = Jr(t.value, n.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const yp = /* @__PURE__ */ A("$ZodTuple", (e, t) => {
  ye.init(e, t);
  const n = t.items;
  e._zod.parse = (r, o) => {
    const a = r.value;
    if (!Array.isArray(a))
      return r.issues.push({
        input: a,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), r;
    r.value = [];
    const s = [], i = [...n].reverse().findIndex((p) => p._zod.optin !== "optional"), u = i === -1 ? 0 : n.length - i;
    if (!t.rest) {
      const p = a.length > n.length, m = a.length < u - 1;
      if (p || m)
        return r.issues.push({
          ...p ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length },
          input: a,
          inst: e,
          origin: "array"
        }), r;
    }
    let c = -1;
    for (const p of n) {
      if (c++, c >= a.length && c >= u)
        continue;
      const m = p._zod.run({
        value: a[c],
        issues: []
      }, o);
      m instanceof Promise ? s.push(m.then((g) => Fn(g, r, c))) : Fn(m, r, c);
    }
    if (t.rest) {
      const p = a.slice(n.length);
      for (const m of p) {
        c++;
        const g = t.rest._zod.run({
          value: m,
          issues: []
        }, o);
        g instanceof Promise ? s.push(g.then((f) => Fn(f, r, c))) : Fn(g, r, c);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function Fn(e, t, n) {
  e.issues.length && t.issues.push(...qt(n, e.issues)), t.value[n] = e.value;
}
const _p = /* @__PURE__ */ A("$ZodRecord", (e, t) => {
  ye.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!tn(o))
      return n.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    const a = [], s = t.keyType._zod.values;
    if (s) {
      n.value = {};
      const i = /* @__PURE__ */ new Set();
      for (const c of s)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          i.add(typeof c == "number" ? c.toString() : c);
          const p = t.valueType._zod.run({ value: o[c], issues: [] }, r);
          p instanceof Promise ? a.push(p.then((m) => {
            m.issues.length && n.issues.push(...qt(c, m.issues)), n.value[c] = m.value;
          })) : (p.issues.length && n.issues.push(...qt(c, p.issues)), n.value[c] = p.value);
        }
      let u;
      for (const c in o)
        i.has(c) || (u = u ?? [], u.push(c));
      u && u.length > 0 && n.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: u
      });
    } else {
      n.value = {};
      for (const i of Reflect.ownKeys(o)) {
        if (i === "__proto__")
          continue;
        const u = t.keyType._zod.run({ value: i, issues: [] }, r);
        if (u instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (u.issues.length) {
          n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: u.issues.map((p) => Ot(p, r, Rt())),
            input: i,
            path: [i],
            inst: e
          }), n.value[u.value] = u.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: o[i], issues: [] }, r);
        c instanceof Promise ? a.push(c.then((p) => {
          p.issues.length && n.issues.push(...qt(i, p.issues)), n.value[u.value] = p.value;
        })) : (c.issues.length && n.issues.push(...qt(i, c.issues)), n.value[u.value] = c.value);
      }
    }
    return a.length ? Promise.all(a).then(() => n) : n;
  };
}), bp = /* @__PURE__ */ A("$ZodEnum", (e, t) => {
  ye.init(e, t);
  const n = pi(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => Ec.has(typeof o)).map((o) => typeof o == "string" ? nn(o) : o.toString()).join("|")})$`), e._zod.parse = (o, a) => {
    const s = o.value;
    return r.has(s) || o.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), o;
  };
}), wp = /* @__PURE__ */ A("$ZodLiteral", (e, t) => {
  if (ye.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const n = new Set(t.values);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? nn(r) : r ? nn(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const a = r.value;
    return n.has(a) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: a,
      inst: e
    }), r;
  };
}), xp = /* @__PURE__ */ A("$ZodTransform", (e, t) => {
  ye.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new ci(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((s) => (n.value = s, n));
    if (o instanceof Promise)
      throw new Xt();
    return n.value = o, n;
  };
});
function Jo(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Ip = /* @__PURE__ */ A("$ZodOptional", (e, t) => {
  ye.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", pe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), pe(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${io(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((a) => Jo(a, n.value)) : Jo(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), kp = /* @__PURE__ */ A("$ZodNullable", (e, t) => {
  ye.init(e, t), pe(e._zod, "optin", () => t.innerType._zod.optin), pe(e._zod, "optout", () => t.innerType._zod.optout), pe(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${io(n.source)}|null)$`) : void 0;
  }), pe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Tp = /* @__PURE__ */ A("$ZodDefault", (e, t) => {
  ye.init(e, t), e._zod.optin = "optional", pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((a) => Ho(a, t)) : Ho(o, t);
  };
});
function Ho(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Sp = /* @__PURE__ */ A("$ZodPrefault", (e, t) => {
  ye.init(e, t), e._zod.optin = "optional", pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Ep = /* @__PURE__ */ A("$ZodNonOptional", (e, t) => {
  ye.init(e, t), pe(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((a) => Wo(a, e)) : Wo(o, e);
  };
});
function Wo(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Cp = /* @__PURE__ */ A("$ZodCatch", (e, t) => {
  ye.init(e, t), pe(e._zod, "optin", () => t.innerType._zod.optin), pe(e._zod, "optout", () => t.innerType._zod.optout), pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((a) => (n.value = a.value, a.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: a.issues.map((s) => Ot(s, r, Rt()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: o.issues.map((a) => Ot(a, r, Rt()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), Mp = /* @__PURE__ */ A("$ZodPipe", (e, t) => {
  ye.init(e, t), pe(e._zod, "values", () => t.in._zod.values), pe(e._zod, "optin", () => t.in._zod.optin), pe(e._zod, "optout", () => t.out._zod.optout), pe(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const a = t.out._zod.run(n, r);
      return a instanceof Promise ? a.then((s) => Vn(s, t.in, r)) : Vn(a, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((a) => Vn(a, t.out, r)) : Vn(o, t.out, r);
  };
});
function Vn(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const Rp = /* @__PURE__ */ A("$ZodReadonly", (e, t) => {
  ye.init(e, t), pe(e._zod, "propValues", () => t.innerType._zod.propValues), pe(e._zod, "values", () => t.innerType._zod.values), pe(e._zod, "optin", () => {
    var n, r;
    return (r = (n = t.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optin;
  }), pe(e._zod, "optout", () => {
    var n, r;
    return (r = (n = t.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optout;
  }), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(Ko) : Ko(o);
  };
});
function Ko(e) {
  return e.value = Object.freeze(e.value), e;
}
const Op = /* @__PURE__ */ A("$ZodLazy", (e, t) => {
  ye.init(e, t), pe(e._zod, "innerType", () => t.getter()), pe(e._zod, "pattern", () => {
    var n, r;
    return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.pattern;
  }), pe(e._zod, "propValues", () => {
    var n, r;
    return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.propValues;
  }), pe(e._zod, "optin", () => {
    var n, r;
    return ((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optin) ?? void 0;
  }), pe(e._zod, "optout", () => {
    var n, r;
    return ((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optout) ?? void 0;
  }), e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r);
}), Np = /* @__PURE__ */ A("$ZodCustom", (e, t) => {
  Xe.init(e, t), ye.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise)
      return o.then((a) => Yo(a, n, r, e));
    Yo(o, n, r, e);
  };
});
function Yo(e, t, n, r) {
  if (!e) {
    const o = {
      code: "custom",
      input: n,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(kn(o));
  }
}
var Xo;
class Mi {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    if (this._map.set(t, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id))
        throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Ap() {
  return new Mi();
}
(Xo = globalThis).__zod_globalRegistry ?? (Xo.__zod_globalRegistry = Ap());
const _n = globalThis.__zod_globalRegistry;
function $p(e, t) {
  return new e({
    type: "string",
    ...G(t)
  });
}
function Pp(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Qo(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function jp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function qp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...G(t)
  });
}
function Dp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...G(t)
  });
}
function zp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...G(t)
  });
}
function Up(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Zp(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Lp(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Fp(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Vp(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Gp(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Bp(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Jp(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Hp(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Wp(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Kp(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Yp(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Xp(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function Qp(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function ef(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function tf(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...G(t)
  });
}
function nf(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...G(t)
  });
}
function rf(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...G(t)
  });
}
function of(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...G(t)
  });
}
function af(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...G(t)
  });
}
function sf(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...G(t)
  });
}
function lf(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...G(t)
  });
}
function uf(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...G(t)
  });
}
function cf(e, t) {
  return new e({
    type: "boolean",
    ...G(t)
  });
}
function df(e, t) {
  return new e({
    type: "null",
    ...G(t)
  });
}
function pf(e) {
  return new e({
    type: "any"
  });
}
function ff(e) {
  return new e({
    type: "unknown"
  });
}
function mf(e, t) {
  return new e({
    type: "never",
    ...G(t)
  });
}
function ea(e, t) {
  return new xi({
    check: "less_than",
    ...G(t),
    value: e,
    inclusive: !1
  });
}
function Cr(e, t) {
  return new xi({
    check: "less_than",
    ...G(t),
    value: e,
    inclusive: !0
  });
}
function ta(e, t) {
  return new Ii({
    check: "greater_than",
    ...G(t),
    value: e,
    inclusive: !1
  });
}
function Mr(e, t) {
  return new Ii({
    check: "greater_than",
    ...G(t),
    value: e,
    inclusive: !0
  });
}
function na(e, t) {
  return new xd({
    check: "multiple_of",
    ...G(t),
    value: e
  });
}
function Ri(e, t) {
  return new kd({
    check: "max_length",
    ...G(t),
    maximum: e
  });
}
function Kn(e, t) {
  return new Td({
    check: "min_length",
    ...G(t),
    minimum: e
  });
}
function Oi(e, t) {
  return new Sd({
    check: "length_equals",
    ...G(t),
    length: e
  });
}
function hf(e, t) {
  return new Ed({
    check: "string_format",
    format: "regex",
    ...G(t),
    pattern: e
  });
}
function gf(e) {
  return new Cd({
    check: "string_format",
    format: "lowercase",
    ...G(e)
  });
}
function vf(e) {
  return new Md({
    check: "string_format",
    format: "uppercase",
    ...G(e)
  });
}
function yf(e, t) {
  return new Rd({
    check: "string_format",
    format: "includes",
    ...G(t),
    includes: e
  });
}
function _f(e, t) {
  return new Od({
    check: "string_format",
    format: "starts_with",
    ...G(t),
    prefix: e
  });
}
function bf(e, t) {
  return new Nd({
    check: "string_format",
    format: "ends_with",
    ...G(t),
    suffix: e
  });
}
function un(e) {
  return new Ad({
    check: "overwrite",
    tx: e
  });
}
function wf(e) {
  return un((t) => t.normalize(e));
}
function xf() {
  return un((e) => e.trim());
}
function If() {
  return un((e) => e.toLowerCase());
}
function kf() {
  return un((e) => e.toUpperCase());
}
function Tf() {
  return un((e) => Tc(e));
}
function Sf(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...G(n)
  });
}
function Ef(e, t, n) {
  const r = G(n);
  return r.abort ?? (r.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...r
  });
}
function Cf(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...G(n)
  });
}
function Mf(e) {
  const t = Rf((n) => (n.addIssue = (r) => {
    if (typeof r == "string")
      n.issues.push(kn(r, n.value, t._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), n.issues.push(kn(o));
    }
  }, e(n.value, n)));
  return t;
}
function Rf(e, t) {
  const n = new Xe({
    check: "custom",
    ...G(t)
  });
  return n._zod.check = e, n;
}
class ra {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = (t == null ? void 0 : t.metadata) ?? _n, this.target = (t == null ? void 0 : t.target) ?? "draft-2020-12", this.unrepresentable = (t == null ? void 0 : t.unrepresentable) ?? "throw", this.override = (t == null ? void 0 : t.override) ?? (() => {
    }), this.io = (t == null ? void 0 : t.io) ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(t, n = { path: [], schemaPath: [] }) {
    var m, g, f;
    var r;
    const o = t._zod.def, a = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, s = this.seen.get(t);
    if (s)
      return s.count++, n.schemaPath.includes(t) && (s.cycle = n.path), s.schema;
    const i = { schema: {}, count: 1, cycle: void 0, path: n.path };
    this.seen.set(t, i);
    const u = (g = (m = t._zod).toJSONSchema) == null ? void 0 : g.call(m);
    if (u)
      i.schema = u;
    else {
      const y = {
        ...n,
        schemaPath: [...n.schemaPath, t],
        path: n.path
      }, _ = t._zod.parent;
      if (_)
        i.ref = _, this.process(_, y), this.seen.get(_).isParent = !0;
      else {
        const b = i.schema;
        switch (o.type) {
          case "string": {
            const h = b;
            h.type = "string";
            const { minimum: v, maximum: I, format: w, patterns: E, contentEncoding: $ } = t._zod.bag;
            if (typeof v == "number" && (h.minLength = v), typeof I == "number" && (h.maxLength = I), w && (h.format = a[w] ?? w, h.format === "" && delete h.format), $ && (h.contentEncoding = $), E && E.size > 0) {
              const S = [...E];
              S.length === 1 ? h.pattern = S[0].source : S.length > 1 && (i.schema.allOf = [
                ...S.map((O) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: O.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = b, { minimum: v, maximum: I, format: w, multipleOf: E, exclusiveMaximum: $, exclusiveMinimum: S } = t._zod.bag;
            typeof w == "string" && w.includes("int") ? h.type = "integer" : h.type = "number", typeof S == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = S, h.exclusiveMinimum = !0) : h.exclusiveMinimum = S), typeof v == "number" && (h.minimum = v, typeof S == "number" && this.target !== "draft-4" && (S >= v ? delete h.minimum : delete h.exclusiveMinimum)), typeof $ == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = $, h.exclusiveMaximum = !0) : h.exclusiveMaximum = $), typeof I == "number" && (h.maximum = I, typeof $ == "number" && this.target !== "draft-4" && ($ <= I ? delete h.maximum : delete h.exclusiveMaximum)), typeof E == "number" && (h.multipleOf = E);
            break;
          }
          case "boolean": {
            const h = b;
            h.type = "boolean";
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
            this.target === "openapi-3.0" ? (b.type = "string", b.nullable = !0, b.enum = [null]) : b.type = "null";
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
            b.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = b, { minimum: v, maximum: I } = t._zod.bag;
            typeof v == "number" && (h.minItems = v), typeof I == "number" && (h.maxItems = I), h.type = "array", h.items = this.process(o.element, { ...y, path: [...y.path, "items"] });
            break;
          }
          case "object": {
            const h = b;
            h.type = "object", h.properties = {};
            const v = o.shape;
            for (const E in v)
              h.properties[E] = this.process(v[E], {
                ...y,
                path: [...y.path, "properties", E]
              });
            const I = new Set(Object.keys(v)), w = new Set([...I].filter((E) => {
              const $ = o.shape[E]._zod;
              return this.io === "input" ? $.optin === void 0 : $.optout === void 0;
            }));
            w.size > 0 && (h.required = Array.from(w)), ((f = o.catchall) == null ? void 0 : f._zod.def.type) === "never" ? h.additionalProperties = !1 : o.catchall ? o.catchall && (h.additionalProperties = this.process(o.catchall, {
              ...y,
              path: [...y.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = b, v = o.discriminator !== void 0, I = o.options.map((w, E) => this.process(w, {
              ...y,
              path: [...y.path, v ? "oneOf" : "anyOf", E]
            }));
            v ? h.oneOf = I : h.anyOf = I;
            break;
          }
          case "intersection": {
            const h = b, v = this.process(o.left, {
              ...y,
              path: [...y.path, "allOf", 0]
            }), I = this.process(o.right, {
              ...y,
              path: [...y.path, "allOf", 1]
            }), w = ($) => "allOf" in $ && Object.keys($).length === 1, E = [
              ...w(v) ? v.allOf : [v],
              ...w(I) ? I.allOf : [I]
            ];
            h.allOf = E;
            break;
          }
          case "tuple": {
            const h = b;
            h.type = "array";
            const v = this.target === "draft-2020-12" ? "prefixItems" : "items", I = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", w = o.items.map((O, R) => this.process(O, {
              ...y,
              path: [...y.path, v, R]
            })), E = o.rest ? this.process(o.rest, {
              ...y,
              path: [...y.path, I, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = w, E && (h.items = E)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: w
            }, E && h.items.anyOf.push(E), h.minItems = w.length, E || (h.maxItems = w.length)) : (h.items = w, E && (h.additionalItems = E));
            const { minimum: $, maximum: S } = t._zod.bag;
            typeof $ == "number" && (h.minItems = $), typeof S == "number" && (h.maxItems = S);
            break;
          }
          case "record": {
            const h = b;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(o.keyType, {
              ...y,
              path: [...y.path, "propertyNames"]
            })), h.additionalProperties = this.process(o.valueType, {
              ...y,
              path: [...y.path, "additionalProperties"]
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
            const h = b, v = pi(o.entries);
            v.every((I) => typeof I == "number") && (h.type = "number"), v.every((I) => typeof I == "string") && (h.type = "string"), h.enum = v;
            break;
          }
          case "literal": {
            const h = b, v = [];
            for (const I of o.values)
              if (I === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof I == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                v.push(Number(I));
              } else
                v.push(I);
            if (v.length !== 0) if (v.length === 1) {
              const I = v[0];
              h.type = I === null ? "null" : typeof I, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [I] : h.const = I;
            } else
              v.every((I) => typeof I == "number") && (h.type = "number"), v.every((I) => typeof I == "string") && (h.type = "string"), v.every((I) => typeof I == "boolean") && (h.type = "string"), v.every((I) => I === null) && (h.type = "null"), h.enum = v;
            break;
          }
          case "file": {
            const h = b, v = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: I, maximum: w, mime: E } = t._zod.bag;
            I !== void 0 && (v.minLength = I), w !== void 0 && (v.maxLength = w), E ? E.length === 1 ? (v.contentMediaType = E[0], Object.assign(h, v)) : h.anyOf = E.map(($) => ({ ...v, contentMediaType: $ })) : Object.assign(h, v);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(o.innerType, y);
            this.target === "openapi-3.0" ? (i.ref = o.innerType, b.nullable = !0) : b.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, y), i.ref = o.innerType;
            break;
          }
          case "success": {
            const h = b;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, y), i.ref = o.innerType, b.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, y), i.ref = o.innerType, this.io === "input" && (b._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, y), i.ref = o.innerType;
            let h;
            try {
              h = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            b.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = b, v = t._zod.pattern;
            if (!v)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = v.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(h, y), i.ref = h;
            break;
          }
          case "readonly": {
            this.process(o.innerType, y), i.ref = o.innerType, b.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, y), i.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, y), i.ref = o.innerType;
            break;
          }
          case "lazy": {
            const h = t._zod.innerType;
            this.process(h, y), i.ref = h;
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
    const c = this.metadataRegistry.get(t);
    return c && Object.assign(i.schema, c), this.io === "input" && Je(t) && (delete i.schema.examples, delete i.schema.default), this.io === "input" && i.schema._prefault && ((r = i.schema).default ?? (r.default = i.schema._prefault)), delete i.schema._prefault, this.seen.get(t).schema;
  }
  emit(t, n) {
    var p, m, g, f, y, _;
    const r = {
      cycles: (n == null ? void 0 : n.cycles) ?? "ref",
      reused: (n == null ? void 0 : n.reused) ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: (n == null ? void 0 : n.external) ?? void 0
    }, o = this.seen.get(t);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const a = (b) => {
      var E;
      const h = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (r.external) {
        const $ = (E = r.external.registry.get(b[0])) == null ? void 0 : E.id, S = r.external.uri ?? ((R) => R);
        if ($)
          return { ref: S($) };
        const O = b[1].defId ?? b[1].schema.id ?? `schema${this.counter++}`;
        return b[1].defId = O, { defId: O, ref: `${S("__shared")}#/${h}/${O}` };
      }
      if (b[1] === o)
        return { ref: "#" };
      const I = `#/${h}/`, w = b[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: w, ref: I + w };
    }, s = (b) => {
      if (b[1].schema.$ref)
        return;
      const h = b[1], { ref: v, defId: I } = a(b);
      h.def = { ...h.schema }, I && (h.defId = I);
      const w = h.schema;
      for (const E in w)
        delete w[E];
      w.$ref = v;
    };
    if (r.cycles === "throw")
      for (const b of this.seen.entries()) {
        const h = b[1];
        if (h.cycle)
          throw new Error(`Cycle detected: #/${(p = h.cycle) == null ? void 0 : p.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const b of this.seen.entries()) {
      const h = b[1];
      if (t === b[0]) {
        s(b);
        continue;
      }
      if (r.external) {
        const I = (m = r.external.registry.get(b[0])) == null ? void 0 : m.id;
        if (t !== b[0] && I) {
          s(b);
          continue;
        }
      }
      if ((g = this.metadataRegistry.get(b[0])) == null ? void 0 : g.id) {
        s(b);
        continue;
      }
      if (h.cycle) {
        s(b);
        continue;
      }
      if (h.count > 1 && r.reused === "ref") {
        s(b);
        continue;
      }
    }
    const i = (b, h) => {
      const v = this.seen.get(b), I = v.def ?? v.schema, w = { ...I };
      if (v.ref === null)
        return;
      const E = v.ref;
      if (v.ref = null, E) {
        i(E, h);
        const $ = this.seen.get(E).schema;
        $.$ref && (h.target === "draft-7" || h.target === "draft-4" || h.target === "openapi-3.0") ? (I.allOf = I.allOf ?? [], I.allOf.push($)) : (Object.assign(I, $), Object.assign(I, w));
      }
      v.isParent || this.override({
        zodSchema: b,
        jsonSchema: I,
        path: v.path ?? []
      });
    };
    for (const b of [...this.seen.entries()].reverse())
      i(b[0], { target: this.target });
    const u = {};
    if (this.target === "draft-2020-12" ? u.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? u.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? u.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), (f = r.external) != null && f.uri) {
      const b = (y = r.external.registry.get(t)) == null ? void 0 : y.id;
      if (!b)
        throw new Error("Schema is missing an `id` property");
      u.$id = r.external.uri(b);
    }
    Object.assign(u, o.def);
    const c = ((_ = r.external) == null ? void 0 : _.defs) ?? {};
    for (const b of this.seen.entries()) {
      const h = b[1];
      h.def && h.defId && (c[h.defId] = h.def);
    }
    r.external || Object.keys(c).length > 0 && (this.target === "draft-2020-12" ? u.$defs = c : u.definitions = c);
    try {
      return JSON.parse(JSON.stringify(u));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Of(e, t) {
  if (e instanceof Mi) {
    const r = new ra(t), o = {};
    for (const i of e._idmap.entries()) {
      const [u, c] = i;
      r.process(c);
    }
    const a = {}, s = {
      registry: e,
      uri: t == null ? void 0 : t.uri,
      defs: o
    };
    for (const i of e._idmap.entries()) {
      const [u, c] = i;
      a[u] = r.emit(c, {
        ...t,
        external: s
      });
    }
    if (Object.keys(o).length > 0) {
      const i = r.target === "draft-2020-12" ? "$defs" : "definitions";
      a.__shared = {
        [i]: o
      };
    }
    return { schemas: a };
  }
  const n = new ra(t);
  return n.process(e), n.emit(e, t);
}
function Je(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return Je(r.element, n);
  if (r.type === "set")
    return Je(r.valueType, n);
  if (r.type === "lazy")
    return Je(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return Je(r.innerType, n);
  if (r.type === "intersection")
    return Je(r.left, n) || Je(r.right, n);
  if (r.type === "record" || r.type === "map")
    return Je(r.keyType, n) || Je(r.valueType, n);
  if (r.type === "pipe")
    return Je(r.in, n) || Je(r.out, n);
  if (r.type === "object") {
    for (const o in r.shape)
      if (Je(r.shape[o], n))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const o of r.options)
      if (Je(o, n))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const o of r.items)
      if (Je(o, n))
        return !0;
    return !!(r.rest && Je(r.rest, n));
  }
  return !1;
}
const Nf = /* @__PURE__ */ A("ZodISODateTime", (e, t) => {
  Jd.init(e, t), Me.init(e, t);
});
function Af(e) {
  return nf(Nf, e);
}
const $f = /* @__PURE__ */ A("ZodISODate", (e, t) => {
  Hd.init(e, t), Me.init(e, t);
});
function Pf(e) {
  return rf($f, e);
}
const jf = /* @__PURE__ */ A("ZodISOTime", (e, t) => {
  Wd.init(e, t), Me.init(e, t);
});
function qf(e) {
  return of(jf, e);
}
const Df = /* @__PURE__ */ A("ZodISODuration", (e, t) => {
  Kd.init(e, t), Me.init(e, t);
});
function zf(e) {
  return af(Df, e);
}
const Uf = (e, t) => {
  gi.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Dc(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => qc(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, Br, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, Br, 2);
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
}, lt = A("ZodError", Uf, {
  Parent: Error
}), Zf = /* @__PURE__ */ uo(lt), Lf = /* @__PURE__ */ co(lt), Ff = /* @__PURE__ */ ir(lt), Ni = /* @__PURE__ */ lr(lt), Vf = /* @__PURE__ */ Zc(lt), Gf = /* @__PURE__ */ Lc(lt), Bf = /* @__PURE__ */ Fc(lt), Jf = /* @__PURE__ */ Vc(lt), Hf = /* @__PURE__ */ Gc(lt), Wf = /* @__PURE__ */ Bc(lt), Kf = /* @__PURE__ */ Jc(lt), Yf = /* @__PURE__ */ Hc(lt), xe = /* @__PURE__ */ A("ZodType", (e, t) => (ye.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(Vt(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (n, r) => $t(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => Zf(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => Ff(e, n, r), e.parseAsync = async (n, r) => Lf(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => Ni(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => Vf(e, n, r), e.decode = (n, r) => Gf(e, n, r), e.encodeAsync = async (n, r) => Bf(e, n, r), e.decodeAsync = async (n, r) => Jf(e, n, r), e.safeEncode = (n, r) => Hf(e, n, r), e.safeDecode = (n, r) => Wf(e, n, r), e.safeEncodeAsync = async (n, r) => Kf(e, n, r), e.safeDecodeAsync = async (n, r) => Yf(e, n, r), e.refine = (n, r) => e.check(Vm(n, r)), e.superRefine = (n) => e.check(Gm(n)), e.overwrite = (n) => e.check(un(n)), e.optional = () => sa(e), e.nullable = () => ia(e), e.nullish = () => sa(ia(e)), e.nonoptional = (n) => qm(e, n), e.array = () => P(e), e.or = (n) => oe([e, n]), e.and = (n) => Sm(e, n), e.transform = (n) => la(e, Om(n)), e.default = (n) => $m(e, n), e.prefault = (n) => jm(e, n), e.catch = (n) => zm(e, n), e.pipe = (n) => la(e, n), e.readonly = () => Lm(e), e.describe = (n) => {
  const r = e.clone();
  return _n.add(r, { description: n }), r;
}, Object.defineProperty(e, "description", {
  get() {
    var n;
    return (n = _n.get(e)) == null ? void 0 : n.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return _n.get(e);
  const r = e.clone();
  return _n.add(r, n[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Ai = /* @__PURE__ */ A("_ZodString", (e, t) => {
  po.init(e, t), xe.init(e, t);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(hf(...r)), e.includes = (...r) => e.check(yf(...r)), e.startsWith = (...r) => e.check(_f(...r)), e.endsWith = (...r) => e.check(bf(...r)), e.min = (...r) => e.check(Kn(...r)), e.max = (...r) => e.check(Ri(...r)), e.length = (...r) => e.check(Oi(...r)), e.nonempty = (...r) => e.check(Kn(1, ...r)), e.lowercase = (r) => e.check(gf(r)), e.uppercase = (r) => e.check(vf(r)), e.trim = () => e.check(xf()), e.normalize = (...r) => e.check(wf(...r)), e.toLowerCase = () => e.check(If()), e.toUpperCase = () => e.check(kf()), e.slugify = () => e.check(Tf());
}), Xf = /* @__PURE__ */ A("ZodString", (e, t) => {
  po.init(e, t), Ai.init(e, t), e.email = (n) => e.check(Pp(Qf, n)), e.url = (n) => e.check(Up(em, n)), e.jwt = (n) => e.check(tf(hm, n)), e.emoji = (n) => e.check(Zp(tm, n)), e.guid = (n) => e.check(Qo(oa, n)), e.uuid = (n) => e.check(jp(Gn, n)), e.uuidv4 = (n) => e.check(qp(Gn, n)), e.uuidv6 = (n) => e.check(Dp(Gn, n)), e.uuidv7 = (n) => e.check(zp(Gn, n)), e.nanoid = (n) => e.check(Lp(nm, n)), e.guid = (n) => e.check(Qo(oa, n)), e.cuid = (n) => e.check(Fp(rm, n)), e.cuid2 = (n) => e.check(Vp(om, n)), e.ulid = (n) => e.check(Gp(am, n)), e.base64 = (n) => e.check(Xp(pm, n)), e.base64url = (n) => e.check(Qp(fm, n)), e.xid = (n) => e.check(Bp(sm, n)), e.ksuid = (n) => e.check(Jp(im, n)), e.ipv4 = (n) => e.check(Hp(lm, n)), e.ipv6 = (n) => e.check(Wp(um, n)), e.cidrv4 = (n) => e.check(Kp(cm, n)), e.cidrv6 = (n) => e.check(Yp(dm, n)), e.e164 = (n) => e.check(ef(mm, n)), e.datetime = (n) => e.check(Af(n)), e.date = (n) => e.check(Pf(n)), e.time = (n) => e.check(qf(n)), e.duration = (n) => e.check(zf(n));
});
function l(e) {
  return $p(Xf, e);
}
const Me = /* @__PURE__ */ A("ZodStringFormat", (e, t) => {
  Se.init(e, t), Ai.init(e, t);
}), Qf = /* @__PURE__ */ A("ZodEmail", (e, t) => {
  Dd.init(e, t), Me.init(e, t);
}), oa = /* @__PURE__ */ A("ZodGUID", (e, t) => {
  jd.init(e, t), Me.init(e, t);
}), Gn = /* @__PURE__ */ A("ZodUUID", (e, t) => {
  qd.init(e, t), Me.init(e, t);
}), em = /* @__PURE__ */ A("ZodURL", (e, t) => {
  zd.init(e, t), Me.init(e, t);
}), tm = /* @__PURE__ */ A("ZodEmoji", (e, t) => {
  Ud.init(e, t), Me.init(e, t);
}), nm = /* @__PURE__ */ A("ZodNanoID", (e, t) => {
  Zd.init(e, t), Me.init(e, t);
}), rm = /* @__PURE__ */ A("ZodCUID", (e, t) => {
  Ld.init(e, t), Me.init(e, t);
}), om = /* @__PURE__ */ A("ZodCUID2", (e, t) => {
  Fd.init(e, t), Me.init(e, t);
}), am = /* @__PURE__ */ A("ZodULID", (e, t) => {
  Vd.init(e, t), Me.init(e, t);
}), sm = /* @__PURE__ */ A("ZodXID", (e, t) => {
  Gd.init(e, t), Me.init(e, t);
}), im = /* @__PURE__ */ A("ZodKSUID", (e, t) => {
  Bd.init(e, t), Me.init(e, t);
}), lm = /* @__PURE__ */ A("ZodIPv4", (e, t) => {
  Yd.init(e, t), Me.init(e, t);
}), um = /* @__PURE__ */ A("ZodIPv6", (e, t) => {
  Xd.init(e, t), Me.init(e, t);
}), cm = /* @__PURE__ */ A("ZodCIDRv4", (e, t) => {
  Qd.init(e, t), Me.init(e, t);
}), dm = /* @__PURE__ */ A("ZodCIDRv6", (e, t) => {
  ep.init(e, t), Me.init(e, t);
}), pm = /* @__PURE__ */ A("ZodBase64", (e, t) => {
  tp.init(e, t), Me.init(e, t);
}), fm = /* @__PURE__ */ A("ZodBase64URL", (e, t) => {
  rp.init(e, t), Me.init(e, t);
}), mm = /* @__PURE__ */ A("ZodE164", (e, t) => {
  op.init(e, t), Me.init(e, t);
}), hm = /* @__PURE__ */ A("ZodJWT", (e, t) => {
  sp.init(e, t), Me.init(e, t);
}), fo = /* @__PURE__ */ A("ZodNumber", (e, t) => {
  Ti.init(e, t), xe.init(e, t), e.gt = (r, o) => e.check(ta(r, o)), e.gte = (r, o) => e.check(Mr(r, o)), e.min = (r, o) => e.check(Mr(r, o)), e.lt = (r, o) => e.check(ea(r, o)), e.lte = (r, o) => e.check(Cr(r, o)), e.max = (r, o) => e.check(Cr(r, o)), e.int = (r) => e.check(aa(r)), e.safe = (r) => e.check(aa(r)), e.positive = (r) => e.check(ta(0, r)), e.nonnegative = (r) => e.check(Mr(0, r)), e.negative = (r) => e.check(ea(0, r)), e.nonpositive = (r) => e.check(Cr(0, r)), e.multipleOf = (r, o) => e.check(na(r, o)), e.step = (r, o) => e.check(na(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function k(e) {
  return sf(fo, e);
}
const gm = /* @__PURE__ */ A("ZodNumberFormat", (e, t) => {
  ip.init(e, t), fo.init(e, t);
});
function aa(e) {
  return uf(gm, e);
}
const vm = /* @__PURE__ */ A("ZodBoolean", (e, t) => {
  lp.init(e, t), xe.init(e, t);
});
function J(e) {
  return cf(vm, e);
}
const ym = /* @__PURE__ */ A("ZodNull", (e, t) => {
  up.init(e, t), xe.init(e, t);
});
function _m(e) {
  return df(ym, e);
}
const bm = /* @__PURE__ */ A("ZodAny", (e, t) => {
  cp.init(e, t), xe.init(e, t);
});
function pt() {
  return pf(bm);
}
const wm = /* @__PURE__ */ A("ZodUnknown", (e, t) => {
  dp.init(e, t), xe.init(e, t);
});
function le() {
  return ff(wm);
}
const xm = /* @__PURE__ */ A("ZodNever", (e, t) => {
  pp.init(e, t), xe.init(e, t);
});
function Te(e) {
  return mf(xm, e);
}
const Im = /* @__PURE__ */ A("ZodArray", (e, t) => {
  fp.init(e, t), xe.init(e, t), e.element = t.element, e.min = (n, r) => e.check(Kn(n, r)), e.nonempty = (n) => e.check(Kn(1, n)), e.max = (n, r) => e.check(Ri(n, r)), e.length = (n, r) => e.check(Oi(n, r)), e.unwrap = () => e.element;
});
function P(e, t) {
  return Sf(Im, e, t);
}
const mo = /* @__PURE__ */ A("ZodObject", (e, t) => {
  hp.init(e, t), xe.init(e, t), pe(e, "shape", () => t.shape), e.keyof = () => Q(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: le() }), e.loose = () => e.clone({ ...e._zod.def, catchall: le() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Te() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Nc(e, n), e.safeExtend = (n) => Ac(e, n), e.merge = (n) => $c(e, n), e.pick = (n) => Rc(e, n), e.omit = (n) => Oc(e, n), e.partial = (...n) => Pc(Pi, e, n[0]), e.required = (...n) => jc(ji, e, n[0]);
});
function d(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...G(t)
  };
  return new mo(n);
}
function Ee(e, t) {
  return new mo({
    type: "object",
    shape: e,
    catchall: Te(),
    ...G(t)
  });
}
function Hr(e, t) {
  return new mo({
    type: "object",
    shape: e,
    catchall: le(),
    ...G(t)
  });
}
const $i = /* @__PURE__ */ A("ZodUnion", (e, t) => {
  Ci.init(e, t), xe.init(e, t), e.options = t.options;
});
function oe(e, t) {
  return new $i({
    type: "union",
    options: e,
    ...G(t)
  });
}
const km = /* @__PURE__ */ A("ZodDiscriminatedUnion", (e, t) => {
  $i.init(e, t), gp.init(e, t);
});
function de(e, t, n) {
  return new km({
    type: "union",
    options: t,
    discriminator: e,
    ...G(n)
  });
}
const Tm = /* @__PURE__ */ A("ZodIntersection", (e, t) => {
  vp.init(e, t), xe.init(e, t);
});
function Sm(e, t) {
  return new Tm({
    type: "intersection",
    left: e,
    right: t
  });
}
const Em = /* @__PURE__ */ A("ZodTuple", (e, t) => {
  yp.init(e, t), xe.init(e, t), e.rest = (n) => e.clone({
    ...e._zod.def,
    rest: n
  });
});
function Wr(e, t, n) {
  const r = t instanceof ye, o = r ? n : t, a = r ? t : null;
  return new Em({
    type: "tuple",
    items: e,
    rest: a,
    ...G(o)
  });
}
const Cm = /* @__PURE__ */ A("ZodRecord", (e, t) => {
  _p.init(e, t), xe.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Pe(e, t, n) {
  return new Cm({
    type: "record",
    keyType: e,
    valueType: t,
    ...G(n)
  });
}
const Kr = /* @__PURE__ */ A("ZodEnum", (e, t) => {
  bp.init(e, t), xe.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const a = {};
    for (const s of r)
      if (n.has(s))
        a[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Kr({
      ...t,
      checks: [],
      ...G(o),
      entries: a
    });
  }, e.exclude = (r, o) => {
    const a = { ...t.entries };
    for (const s of r)
      if (n.has(s))
        delete a[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Kr({
      ...t,
      checks: [],
      ...G(o),
      entries: a
    });
  };
});
function Q(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new Kr({
    type: "enum",
    entries: n,
    ...G(t)
  });
}
const Mm = /* @__PURE__ */ A("ZodLiteral", (e, t) => {
  wp.init(e, t), xe.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function x(e, t) {
  return new Mm({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...G(t)
  });
}
const Rm = /* @__PURE__ */ A("ZodTransform", (e, t) => {
  xp.init(e, t), xe.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new ci(e.constructor.name);
    n.addIssue = (a) => {
      if (typeof a == "string")
        n.issues.push(kn(a, n.value, t));
      else {
        const s = a;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push(kn(s));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((a) => (n.value = a, n)) : (n.value = o, n);
  };
});
function Om(e) {
  return new Rm({
    type: "transform",
    transform: e
  });
}
const Pi = /* @__PURE__ */ A("ZodOptional", (e, t) => {
  Ip.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function sa(e) {
  return new Pi({
    type: "optional",
    innerType: e
  });
}
const Nm = /* @__PURE__ */ A("ZodNullable", (e, t) => {
  kp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ia(e) {
  return new Nm({
    type: "nullable",
    innerType: e
  });
}
const Am = /* @__PURE__ */ A("ZodDefault", (e, t) => {
  Tp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function $m(e, t) {
  return new Am({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : mi(t);
    }
  });
}
const Pm = /* @__PURE__ */ A("ZodPrefault", (e, t) => {
  Sp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function jm(e, t) {
  return new Pm({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : mi(t);
    }
  });
}
const ji = /* @__PURE__ */ A("ZodNonOptional", (e, t) => {
  Ep.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function qm(e, t) {
  return new ji({
    type: "nonoptional",
    innerType: e,
    ...G(t)
  });
}
const Dm = /* @__PURE__ */ A("ZodCatch", (e, t) => {
  Cp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function zm(e, t) {
  return new Dm({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Um = /* @__PURE__ */ A("ZodPipe", (e, t) => {
  Mp.init(e, t), xe.init(e, t), e.in = t.in, e.out = t.out;
});
function la(e, t) {
  return new Um({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Zm = /* @__PURE__ */ A("ZodReadonly", (e, t) => {
  Rp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Lm(e) {
  return new Zm({
    type: "readonly",
    innerType: e
  });
}
const Fm = /* @__PURE__ */ A("ZodLazy", (e, t) => {
  Op.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function qi(e) {
  return new Fm({
    type: "lazy",
    getter: e
  });
}
const ho = /* @__PURE__ */ A("ZodCustom", (e, t) => {
  Np.init(e, t), xe.init(e, t);
});
function Di(e, t) {
  return Ef(ho, e ?? (() => !0), t);
}
function Vm(e, t = {}) {
  return Cf(ho, e, t);
}
function Gm(e) {
  return Mf(e);
}
function Yn(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const n = new ho({
    type: "custom",
    check: "custom",
    fn: (r) => r instanceof e,
    abort: !0,
    ...G(t)
  });
  return n._zod.bag.Class = e, n;
}
function Bm(e) {
  return lf(fo, e);
}
var Tn;
(function(e) {
  e.assertEqual = (o) => {
  };
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const a = {};
    for (const s of o)
      a[s] = s;
    return a;
  }, e.getValidEnumValues = (o) => {
    const a = e.objectKeys(o).filter((i) => typeof o[o[i]] != "number"), s = {};
    for (const i of a)
      s[i] = o[i];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(a) {
    return o[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const a = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && a.push(s);
    return a;
  }, e.find = (o, a) => {
    for (const s of o)
      if (a(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && Number.isFinite(o) && Math.floor(o) === o;
  function r(o, a = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, a) => typeof a == "bigint" ? a.toString() : a;
})(Tn || (Tn = {}));
var ua;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(ua || (ua = {}));
Tn.arrayToEnum([
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
Tn.arrayToEnum([
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
class Xn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, o = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let i = r, u = 0;
          for (; u < s.path.length; ) {
            const c = s.path[u];
            u === s.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(n(s))) : i[c] = i[c] || { _errors: [] }, i = i[c], u++;
          }
        }
    };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof Xn))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Tn.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = /* @__PURE__ */ Object.create(null), r = [];
    for (const o of this.issues)
      if (o.path.length > 0) {
        const a = o.path[0];
        n[a] = n[a] || [], n[a].push(t(o));
      } else
        r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Xn.create = (e) => new Xn(e);
var ca;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(ca || (ca = {}));
var re;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(re || (re = {}));
function Ae(...e) {
  return e.reduce(
    (t, n) => ({
      ...t,
      ...n ?? {}
    }),
    {}
  );
}
async function go(e, t) {
  if (e == null)
    return Promise.resolve();
  const n = t == null ? void 0 : t.abortSignal;
  return new Promise((r, o) => {
    if (n != null && n.aborted) {
      o(da());
      return;
    }
    const a = setTimeout(() => {
      s(), r();
    }, e), s = () => {
      clearTimeout(a), n == null || n.removeEventListener("abort", i);
    }, i = () => {
      s(), o(da());
    };
    n == null || n.addEventListener("abort", i);
  });
}
function da() {
  return new DOMException("Delay was aborted", "AbortError");
}
var st = class {
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
  isResolved() {
    return this.status.type === "resolved";
  }
  isRejected() {
    return this.status.type === "rejected";
  }
  isPending() {
    return this.status.type === "pending";
  }
};
function cn(e) {
  return Object.fromEntries([...e.headers]);
}
var On = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const o = () => {
    const a = n.length, s = new Array(t);
    for (let i = 0; i < t; i++)
      s[i] = n[Math.random() * a | 0];
    return s.join("");
  };
  if (e == null)
    return o;
  if (n.includes(r))
    throw new oo({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return () => `${e}${r}${o()}`;
}, Fe = On();
function cr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function zt(e) {
  return (e instanceof Error || e instanceof DOMException) && (e.name === "AbortError" || e.name === "ResponseAborted" || // Next.js
  e.name === "TimeoutError");
}
var Jm = ["fetch failed", "failed to fetch"];
function zi({
  error: e,
  url: t,
  requestBodyValues: n
}) {
  if (zt(e))
    return e;
  if (e instanceof TypeError && Jm.includes(e.message.toLowerCase())) {
    const r = e.cause;
    if (r != null)
      return new qe({
        message: `Cannot connect to API: ${r.message}`,
        cause: r,
        url: t,
        requestBodyValues: n,
        isRetryable: !0
        // retry when network error
      });
  }
  return e;
}
function rn(e = globalThis) {
  var t, n, r;
  return e.window ? "runtime/browser" : (t = e.navigator) != null && t.userAgent ? `runtime/${e.navigator.userAgent.toLowerCase()}` : (r = (n = e.process) == null ? void 0 : n.versions) != null && r.node ? `runtime/node.js/${e.process.version.substring(0)}` : e.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown";
}
function jt(e) {
  if (e == null)
    return {};
  const t = {};
  if (e instanceof Headers)
    e.forEach((n, r) => {
      t[r.toLowerCase()] = n;
    });
  else {
    Array.isArray(e) || (e = Object.entries(e));
    for (const [n, r] of e)
      r != null && (t[n.toLowerCase()] = r);
  }
  return t;
}
function ze(e, ...t) {
  const n = new Headers(jt(e)), r = n.get("user-agent") || "";
  return n.set(
    "user-agent",
    [r, ...t].filter(Boolean).join(" ")
  ), Object.fromEntries(n.entries());
}
var Ui = "3.0.18", Hm = () => globalThis.fetch, pa = async ({
  url: e,
  headers: t = {},
  successfulResponseHandler: n,
  failedResponseHandler: r,
  abortSignal: o,
  fetch: a = Hm()
}) => {
  try {
    const s = await a(e, {
      method: "GET",
      headers: ze(
        t,
        `ai-sdk/provider-utils/${Ui}`,
        rn()
      ),
      signal: o
    }), i = cn(s);
    if (!s.ok) {
      let u;
      try {
        u = await r({
          response: s,
          url: e,
          requestBodyValues: {}
        });
      } catch (c) {
        throw zt(c) || qe.isInstance(c) ? c : new qe({
          message: "Failed to process error response",
          cause: c,
          statusCode: s.status,
          url: e,
          responseHeaders: i,
          requestBodyValues: {}
        });
      }
      throw u.value;
    }
    try {
      return await n({
        response: s,
        url: e,
        requestBodyValues: {}
      });
    } catch (u) {
      throw u instanceof Error && (zt(u) || qe.isInstance(u)) ? u : new qe({
        message: "Failed to process successful response",
        cause: u,
        statusCode: s.status,
        url: e,
        responseHeaders: i,
        requestBodyValues: {}
      });
    }
  } catch (s) {
    throw zi({ error: s, url: e, requestBodyValues: {} });
  }
}, Wm = "JSON schema:", Km = "You MUST answer with a JSON object that matches the JSON schema above.", Ym = "You MUST answer with JSON.";
function Xm({
  prompt: e,
  schema: t,
  schemaPrefix: n = t != null ? Wm : void 0,
  schemaSuffix: r = t != null ? Km : Ym
}) {
  return [
    e != null && e.length > 0 ? e : void 0,
    e != null && e.length > 0 ? "" : void 0,
    // add a newline if prompt is not null
    n,
    t != null ? JSON.stringify(t) : void 0,
    r
  ].filter((o) => o != null).join(`
`);
}
function Qm({
  messages: e,
  schema: t,
  schemaPrefix: n,
  schemaSuffix: r
}) {
  var o, a;
  const s = ((o = e[0]) == null ? void 0 : o.role) === "system" ? { ...e[0] } : { role: "system", content: "" };
  return s.content = Xm({
    prompt: s.content,
    schema: t,
    schemaPrefix: n,
    schemaSuffix: r
  }), [
    s,
    ...((a = e[0]) == null ? void 0 : a.role) === "system" ? e.slice(1) : e
  ];
}
function eh({
  mediaType: e,
  url: t,
  supportedUrls: n
}) {
  return t = t.toLowerCase(), e = e.toLowerCase(), Object.entries(n).map(([r, o]) => {
    const a = r.toLowerCase();
    return a === "*" || a === "*/*" ? { mediaTypePrefix: "", regexes: o } : { mediaTypePrefix: a.replace(/\*/, ""), regexes: o };
  }).filter(({ mediaTypePrefix: r }) => e.startsWith(r)).flatMap(({ regexes: r }) => r).some((r) => r.test(t));
}
function dr({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: n = "apiKey",
  description: r
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new Zn({
      message: `${r} API key must be a string.`
    });
  if (typeof process > "u")
    throw new Zn({
      message: `${r} API key is missing. Pass it using the '${n}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new Zn({
      message: `${r} API key is missing. Pass it using the '${n}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new Zn({
      message: `${r} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
function Qt({
  settingValue: e,
  environmentVariableName: t
}) {
  if (typeof e == "string")
    return e;
  if (!(e != null || typeof process > "u") && (e = process.env[t], !(e == null || typeof e != "string")))
    return e;
}
function th(e) {
  var t;
  const [n, r = ""] = e.toLowerCase().split("/");
  return (t = {
    mpeg: "mp3",
    "x-wav": "wav",
    opus: "ogg",
    mp4: "m4a",
    "x-m4a": "m4a"
  }[r]) != null ? t : r;
}
var nh = /"__proto__"\s*:/, rh = /"constructor"\s*:/;
function fa(e) {
  const t = JSON.parse(e);
  return t === null || typeof t != "object" || nh.test(e) === !1 && rh.test(e) === !1 ? t : oh(t);
}
function oh(e) {
  let t = [e];
  for (; t.length; ) {
    const n = t;
    t = [];
    for (const r of n) {
      if (Object.prototype.hasOwnProperty.call(r, "__proto__"))
        throw new SyntaxError("Object contains forbidden prototype property");
      if (Object.prototype.hasOwnProperty.call(r, "constructor") && Object.prototype.hasOwnProperty.call(r.constructor, "prototype"))
        throw new SyntaxError("Object contains forbidden prototype property");
      for (const o in r) {
        const a = r[o];
        a && typeof a == "object" && t.push(a);
      }
    }
  }
  return e;
}
function vo(e) {
  const { stackTraceLimit: t } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch {
    return fa(e);
  }
  try {
    return fa(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
var Qn = Symbol.for("vercel.ai.validator");
function ah(e) {
  return { [Qn]: !0, validate: e };
}
function sh(e) {
  return typeof e == "object" && e !== null && Qn in e && e[Qn] === !0 && "validate" in e;
}
function Re(e) {
  let t;
  return () => (t == null && (t = e()), t);
}
function ih(e) {
  return sh(e) ? e : typeof e == "function" ? e() : lh(e);
}
function lh(e) {
  return ah(async (t) => {
    const n = await e["~standard"].validate(t);
    return n.issues == null ? { success: !0, value: n.value } : {
      success: !1,
      error: new Ye({
        value: t,
        cause: n.issues
      })
    };
  });
}
async function Ne({
  value: e,
  schema: t
}) {
  const n = await it({ value: e, schema: t });
  if (!n.success)
    throw Ye.wrap({ value: e, cause: n.error });
  return n.value;
}
async function it({
  value: e,
  schema: t
}) {
  const n = ih(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e, rawValue: e };
    const r = await n.validate(e);
    return r.success ? { success: !0, value: r.value, rawValue: e } : {
      success: !1,
      error: Ye.wrap({ value: e, cause: r.error }),
      rawValue: e
    };
  } catch (r) {
    return {
      success: !1,
      error: Ye.wrap({ value: e, cause: r }),
      rawValue: e
    };
  }
}
async function uh({
  text: e,
  schema: t
}) {
  try {
    const n = vo(e);
    return t == null ? n : Ne({ value: n, schema: t });
  } catch (n) {
    throw xn.isInstance(n) || Ye.isInstance(n) ? n : new xn({ text: e, cause: n });
  }
}
async function Nt({
  text: e,
  schema: t
}) {
  try {
    const n = vo(e);
    return t == null ? { success: !0, value: n, rawValue: n } : await it({ value: n, schema: t });
  } catch (n) {
    return {
      success: !1,
      error: xn.isInstance(n) ? n : new xn({ text: e, cause: n }),
      rawValue: void 0
    };
  }
}
function ma(e) {
  try {
    return vo(e), !0;
  } catch {
    return !1;
  }
}
function yo({
  stream: e,
  schema: t
}) {
  return e.pipeThrough(new TextDecoderStream()).pipeThrough(new Ic()).pipeThrough(
    new TransformStream({
      async transform({ data: n }, r) {
        n !== "[DONE]" && r.enqueue(await Nt({ text: n, schema: t }));
      }
    })
  );
}
async function Ve({
  provider: e,
  providerOptions: t,
  schema: n
}) {
  if ((t == null ? void 0 : t[e]) == null)
    return;
  const r = await it({
    value: t[e],
    schema: n
  });
  if (!r.success)
    throw new oo({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: r.error
    });
  return r.value;
}
var ch = () => globalThis.fetch, Ce = async ({
  url: e,
  headers: t,
  body: n,
  failedResponseHandler: r,
  successfulResponseHandler: o,
  abortSignal: a,
  fetch: s
}) => Zi({
  url: e,
  headers: {
    "Content-Type": "application/json",
    ...t
  },
  body: {
    content: JSON.stringify(n),
    values: n
  },
  failedResponseHandler: r,
  successfulResponseHandler: o,
  abortSignal: a,
  fetch: s
}), dh = async ({
  url: e,
  headers: t,
  formData: n,
  failedResponseHandler: r,
  successfulResponseHandler: o,
  abortSignal: a,
  fetch: s
}) => Zi({
  url: e,
  headers: t,
  body: {
    content: n,
    values: Object.fromEntries(n.entries())
  },
  failedResponseHandler: r,
  successfulResponseHandler: o,
  abortSignal: a,
  fetch: s
}), Zi = async ({
  url: e,
  headers: t = {},
  body: n,
  successfulResponseHandler: r,
  failedResponseHandler: o,
  abortSignal: a,
  fetch: s = ch()
}) => {
  try {
    const i = await s(e, {
      method: "POST",
      headers: ze(
        t,
        `ai-sdk/provider-utils/${Ui}`,
        rn()
      ),
      body: n.content,
      signal: a
    }), u = cn(i);
    if (!i.ok) {
      let c;
      try {
        c = await o({
          response: i,
          url: e,
          requestBodyValues: n.values
        });
      } catch (p) {
        throw zt(p) || qe.isInstance(p) ? p : new qe({
          message: "Failed to process error response",
          cause: p,
          statusCode: i.status,
          url: e,
          responseHeaders: u,
          requestBodyValues: n.values
        });
      }
      throw c.value;
    }
    try {
      return await r({
        response: i,
        url: e,
        requestBodyValues: n.values
      });
    } catch (c) {
      throw c instanceof Error && (zt(c) || qe.isInstance(c)) ? c : new qe({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: n.values
      });
    }
  } catch (i) {
    throw zi({ error: i, url: e, requestBodyValues: n.values });
  }
};
function N0(e) {
  return e;
}
function A0(e) {
  return { ...e, type: "dynamic" };
}
function at({
  id: e,
  name: t,
  inputSchema: n
}) {
  return ({
    execute: r,
    outputSchema: o,
    toModelOutput: a,
    onInputStart: s,
    onInputDelta: i,
    onInputAvailable: u,
    ...c
  }) => ({
    type: "provider-defined",
    id: e,
    name: t,
    args: c,
    inputSchema: n,
    outputSchema: o,
    execute: r,
    toModelOutput: a,
    onInputStart: s,
    onInputDelta: i,
    onInputAvailable: u
  });
}
function ht({
  id: e,
  name: t,
  inputSchema: n,
  outputSchema: r
}) {
  return ({
    execute: o,
    toModelOutput: a,
    onInputStart: s,
    onInputDelta: i,
    onInputAvailable: u,
    ...c
  }) => ({
    type: "provider-defined",
    id: e,
    name: t,
    args: c,
    inputSchema: n,
    outputSchema: r,
    execute: o,
    toModelOutput: a,
    onInputStart: s,
    onInputDelta: i,
    onInputAvailable: u
  });
}
async function Oe(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var bt = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: n
}) => async ({ response: r, url: o, requestBodyValues: a }) => {
  const s = await r.text(), i = cn(r);
  if (s.trim() === "")
    return {
      responseHeaders: i,
      value: new qe({
        message: r.statusText,
        url: o,
        requestBodyValues: a,
        statusCode: r.status,
        responseHeaders: i,
        responseBody: s,
        isRetryable: n == null ? void 0 : n(r)
      })
    };
  try {
    const u = await uh({
      text: s,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new qe({
        message: t(u),
        url: o,
        requestBodyValues: a,
        statusCode: r.status,
        responseHeaders: i,
        responseBody: s,
        data: u,
        isRetryable: n == null ? void 0 : n(r, u)
      })
    };
  } catch {
    return {
      responseHeaders: i,
      value: new qe({
        message: r.statusText,
        url: o,
        requestBodyValues: a,
        statusCode: r.status,
        responseHeaders: i,
        responseBody: s,
        isRetryable: n == null ? void 0 : n(r)
      })
    };
  }
}, Gt = (e) => async ({ response: t }) => {
  const n = cn(t);
  if (t.body == null)
    throw new lc({});
  return {
    responseHeaders: n,
    value: yo({
      stream: t.body,
      schema: e
    })
  };
}, Ue = (e) => async ({ response: t, url: n, requestBodyValues: r }) => {
  const o = await t.text(), a = await Nt({
    text: o,
    schema: e
  }), s = cn(t);
  if (!a.success)
    throw new qe({
      message: "Invalid JSON response",
      cause: a.error,
      statusCode: t.status,
      responseHeaders: s,
      responseBody: o,
      url: n,
      requestBodyValues: r
    });
  return {
    responseHeaders: s,
    value: a.value,
    rawValue: a.rawValue
  };
}, ph = () => async ({ response: e, url: t, requestBodyValues: n }) => {
  const r = cn(e);
  if (!e.body)
    throw new qe({
      message: "Response body is empty",
      url: t,
      requestBodyValues: n,
      statusCode: e.status,
      responseHeaders: r,
      responseBody: void 0
    });
  try {
    const o = await e.arrayBuffer();
    return {
      responseHeaders: r,
      value: new Uint8Array(o)
    };
  } catch (o) {
    throw new qe({
      message: "Failed to read response as array buffer",
      url: t,
      requestBodyValues: n,
      statusCode: e.status,
      responseHeaders: r,
      responseBody: void 0,
      cause: o
    });
  }
}, fh = (e, t) => {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++)
    ;
  return [(e.length - n).toString(), ...t.slice(n)].join("/");
}, mh = Symbol(
  "Let zodToJsonSchema decide on which parser to use"
), ha = {
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
}, hh = (e) => typeof e == "string" ? {
  ...ha,
  name: e
} : {
  ...ha,
  ...e
};
function rt() {
  return {};
}
function gh(e, t) {
  var n, r, o;
  const a = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((o = (r = e.type) == null ? void 0 : r._def) == null ? void 0 : o.typeName) !== re.ZodAny && (a.items = ge(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && (a.minItems = e.minLength.value), e.maxLength && (a.maxItems = e.maxLength.value), e.exactLength && (a.minItems = e.exactLength.value, a.maxItems = e.exactLength.value), a;
}
function vh(e) {
  const t = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks) return t;
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
        break;
      case "max":
        n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
        break;
      case "multipleOf":
        t.multipleOf = n.value;
        break;
    }
  return t;
}
function yh() {
  return { type: "boolean" };
}
function Li(e, t) {
  return ge(e.type._def, t);
}
var _h = (e, t) => ge(e.innerType._def, t);
function Fi(e, t, n) {
  const r = n ?? t.dateStrategy;
  if (Array.isArray(r))
    return {
      anyOf: r.map((o, a) => Fi(e, t, o))
    };
  switch (r) {
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
      return bh(e);
  }
}
var bh = (e) => {
  const t = {
    type: "integer",
    format: "unix-time"
  };
  for (const n of e.checks)
    switch (n.kind) {
      case "min":
        t.minimum = n.value;
        break;
      case "max":
        t.maximum = n.value;
        break;
    }
  return t;
};
function wh(e, t) {
  return {
    ...ge(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function xh(e, t) {
  return t.effectStrategy === "input" ? ge(e.schema._def, t) : rt();
}
function Ih(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
var kh = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Th(e, t) {
  const n = [
    ge(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    ge(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((o) => !!o), r = [];
  return n.forEach((o) => {
    if (kh(o))
      r.push(...o.allOf);
    else {
      let a = o;
      if ("additionalProperties" in o && o.additionalProperties === !1) {
        const { additionalProperties: s, ...i } = o;
        a = i;
      }
      r.push(a);
    }
  }), r.length ? { allOf: r } : void 0;
}
function Sh(e) {
  const t = typeof e.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : {
    type: t === "bigint" ? "integer" : t,
    const: e.value
  };
}
var Rr = void 0, ct = {
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
  emoji: () => (Rr === void 0 && (Rr = RegExp(
    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    "u"
  )), Rr),
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
function Vi(e, t) {
  const n = {
    type: "string"
  };
  if (e.checks)
    for (const r of e.checks)
      switch (r.kind) {
        case "min":
          n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value;
          break;
        case "max":
          n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value;
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              dt(n, "email", r.message, t);
              break;
            case "format:idn-email":
              dt(n, "idn-email", r.message, t);
              break;
            case "pattern:zod":
              Be(n, ct.email, r.message, t);
              break;
          }
          break;
        case "url":
          dt(n, "uri", r.message, t);
          break;
        case "uuid":
          dt(n, "uuid", r.message, t);
          break;
        case "regex":
          Be(n, r.regex, r.message, t);
          break;
        case "cuid":
          Be(n, ct.cuid, r.message, t);
          break;
        case "cuid2":
          Be(n, ct.cuid2, r.message, t);
          break;
        case "startsWith":
          Be(
            n,
            RegExp(`^${Or(r.value, t)}`),
            r.message,
            t
          );
          break;
        case "endsWith":
          Be(
            n,
            RegExp(`${Or(r.value, t)}$`),
            r.message,
            t
          );
          break;
        case "datetime":
          dt(n, "date-time", r.message, t);
          break;
        case "date":
          dt(n, "date", r.message, t);
          break;
        case "time":
          dt(n, "time", r.message, t);
          break;
        case "duration":
          dt(n, "duration", r.message, t);
          break;
        case "length":
          n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value;
          break;
        case "includes": {
          Be(
            n,
            RegExp(Or(r.value, t)),
            r.message,
            t
          );
          break;
        }
        case "ip": {
          r.version !== "v6" && dt(n, "ipv4", r.message, t), r.version !== "v4" && dt(n, "ipv6", r.message, t);
          break;
        }
        case "base64url":
          Be(n, ct.base64url, r.message, t);
          break;
        case "jwt":
          Be(n, ct.jwt, r.message, t);
          break;
        case "cidr": {
          r.version !== "v6" && Be(n, ct.ipv4Cidr, r.message, t), r.version !== "v4" && Be(n, ct.ipv6Cidr, r.message, t);
          break;
        }
        case "emoji":
          Be(n, ct.emoji(), r.message, t);
          break;
        case "ulid": {
          Be(n, ct.ulid, r.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              dt(n, "binary", r.message, t);
              break;
            }
            case "contentEncoding:base64": {
              n.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              Be(n, ct.base64, r.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Be(n, ct.nanoid, r.message, t);
      }
  return n;
}
function Or(e, t) {
  return t.patternStrategy === "escape" ? Ch(e) : e;
}
var Eh = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function Ch(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    Eh.has(e[n]) || (t += "\\"), t += e[n];
  return t;
}
function dt(e, t, n, r) {
  var o;
  e.format || (o = e.anyOf) != null && o.some((a) => a.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format
  }), delete e.format), e.anyOf.push({
    format: t,
    ...n && r.errorMessages && { errorMessage: { format: n } }
  })) : e.format = t;
}
function Be(e, t, n, r) {
  var o;
  e.pattern || (o = e.allOf) != null && o.some((a) => a.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern
  }), delete e.pattern), e.allOf.push({
    pattern: ga(t, r),
    ...n && r.errorMessages && { errorMessage: { pattern: n } }
  })) : e.pattern = ga(t, r);
}
function ga(e, t) {
  var n;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const r = {
    i: e.flags.includes("i"),
    // Case-insensitive
    m: e.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: e.flags.includes("s")
    // `.` matches newlines
  }, o = r.i ? e.source.toLowerCase() : e.source;
  let a = "", s = !1, i = !1, u = !1;
  for (let c = 0; c < o.length; c++) {
    if (s) {
      a += o[c], s = !1;
      continue;
    }
    if (r.i) {
      if (i) {
        if (o[c].match(/[a-z]/)) {
          u ? (a += o[c], a += `${o[c - 2]}-${o[c]}`.toUpperCase(), u = !1) : o[c + 1] === "-" && ((n = o[c + 2]) != null && n.match(/[a-z]/)) ? (a += o[c], u = !0) : a += `${o[c]}${o[c].toUpperCase()}`;
          continue;
        }
      } else if (o[c].match(/[a-z]/)) {
        a += `[${o[c]}${o[c].toUpperCase()}]`;
        continue;
      }
    }
    if (r.m) {
      if (o[c] === "^") {
        a += `(^|(?<=[\r
]))`;
        continue;
      } else if (o[c] === "$") {
        a += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r.s && o[c] === ".") {
      a += i ? `${o[c]}\r
` : `[${o[c]}\r
]`;
      continue;
    }
    a += o[c], o[c] === "\\" ? s = !0 : i && o[c] === "]" ? i = !1 : !i && o[c] === "[" && (i = !0);
  }
  try {
    new RegExp(a);
  } catch {
    return console.warn(
      `Could not convert regex pattern at ${t.currentPath.join(
        "/"
      )} to a flag-independent form! Falling back to the flag-ignorant source`
    ), e.source;
  }
  return a;
}
function Gi(e, t) {
  var n, r, o, a, s, i;
  const u = {
    type: "object",
    additionalProperties: (n = ge(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    })) != null ? n : t.allowedAdditionalProperties
  };
  if (((r = e.keyType) == null ? void 0 : r._def.typeName) === re.ZodString && ((o = e.keyType._def.checks) != null && o.length)) {
    const { type: c, ...p } = Vi(e.keyType._def, t);
    return {
      ...u,
      propertyNames: p
    };
  } else {
    if (((a = e.keyType) == null ? void 0 : a._def.typeName) === re.ZodEnum)
      return {
        ...u,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === re.ZodBranded && e.keyType._def.type._def.typeName === re.ZodString && ((i = e.keyType._def.type._def.checks) != null && i.length)) {
      const { type: c, ...p } = Li(
        e.keyType._def,
        t
      );
      return {
        ...u,
        propertyNames: p
      };
    }
  }
  return u;
}
function Mh(e, t) {
  if (t.mapStrategy === "record")
    return Gi(e, t);
  const n = ge(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || rt(), r = ge(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || rt();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [n, r],
      minItems: 2,
      maxItems: 2
    }
  };
}
function Rh(e) {
  const t = e.values, r = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), o = Array.from(
    new Set(r.map((a) => typeof a))
  );
  return {
    type: o.length === 1 ? o[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function Oh() {
  return { not: rt() };
}
function Nh() {
  return {
    type: "null"
  };
}
var Yr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Ah(e, t) {
  const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (n.every(
    (r) => r._def.typeName in Yr && (!r._def.checks || !r._def.checks.length)
  )) {
    const r = n.reduce((o, a) => {
      const s = Yr[a._def.typeName];
      return s && !o.includes(s) ? [...o, s] : o;
    }, []);
    return {
      type: r.length > 1 ? r : r[0]
    };
  } else if (n.every((r) => r._def.typeName === "ZodLiteral" && !r.description)) {
    const r = n.reduce(
      (o, a) => {
        const s = typeof a._def.value;
        switch (s) {
          case "string":
          case "number":
          case "boolean":
            return [...o, s];
          case "bigint":
            return [...o, "integer"];
          case "object":
            if (a._def.value === null) return [...o, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return o;
        }
      },
      []
    );
    if (r.length === n.length) {
      const o = r.filter((a, s, i) => i.indexOf(a) === s);
      return {
        type: o.length > 1 ? o : o[0],
        enum: n.reduce(
          (a, s) => a.includes(s._def.value) ? a : [...a, s._def.value],
          []
        )
      };
    }
  } else if (n.every((r) => r._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: n.reduce(
        (r, o) => [
          ...r,
          ...o._def.values.filter((a) => !r.includes(a))
        ],
        []
      )
    };
  return $h(e, t);
}
var $h = (e, t) => {
  const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map(
    (r, o) => ge(r._def, {
      ...t,
      currentPath: [...t.currentPath, "anyOf", `${o}`]
    })
  ).filter(
    (r) => !!r && (!t.strictUnions || typeof r == "object" && Object.keys(r).length > 0)
  );
  return n.length ? { anyOf: n } : void 0;
};
function Ph(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    e.innerType._def.typeName
  ) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return {
      type: [
        Yr[e.innerType._def.typeName],
        "null"
      ]
    };
  const n = ge(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return n && { anyOf: [n, { type: "null" }] };
}
function jh(e) {
  const t = {
    type: "number"
  };
  if (!e.checks) return t;
  for (const n of e.checks)
    switch (n.kind) {
      case "int":
        t.type = "integer";
        break;
      case "min":
        n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
        break;
      case "max":
        n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
        break;
      case "multipleOf":
        t.multipleOf = n.value;
        break;
    }
  return t;
}
function qh(e, t) {
  const n = {
    type: "object",
    properties: {}
  }, r = [], o = e.shape();
  for (const s in o) {
    let i = o[s];
    if (i === void 0 || i._def === void 0)
      continue;
    const u = zh(i), c = ge(i._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", s],
      propertyPath: [...t.currentPath, "properties", s]
    });
    c !== void 0 && (n.properties[s] = c, u || r.push(s));
  }
  r.length && (n.required = r);
  const a = Dh(e, t);
  return a !== void 0 && (n.additionalProperties = a), n;
}
function Dh(e, t) {
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
function zh(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
var Uh = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return ge(e.innerType._def, t);
  const r = ge(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return r ? { anyOf: [{ not: rt() }, r] } : rt();
}, Zh = (e, t) => {
  if (t.pipeStrategy === "input")
    return ge(e.in._def, t);
  if (t.pipeStrategy === "output")
    return ge(e.out._def, t);
  const n = ge(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), r = ge(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", n ? "1" : "0"]
  });
  return {
    allOf: [n, r].filter((o) => o !== void 0)
  };
};
function Lh(e, t) {
  return ge(e.type._def, t);
}
function Fh(e, t) {
  const r = {
    type: "array",
    uniqueItems: !0,
    items: ge(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && (r.minItems = e.minSize.value), e.maxSize && (r.maxItems = e.maxSize.value), r;
}
function Vh(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map(
      (n, r) => ge(n._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${r}`]
      })
    ).reduce(
      (n, r) => r === void 0 ? n : [...n, r],
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
      (n, r) => ge(n._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${r}`]
      })
    ).reduce(
      (n, r) => r === void 0 ? n : [...n, r],
      []
    )
  };
}
function Gh() {
  return {
    not: rt()
  };
}
function Bh() {
  return rt();
}
var Jh = (e, t) => ge(e.innerType._def, t), Hh = (e, t, n) => {
  switch (t) {
    case re.ZodString:
      return Vi(e, n);
    case re.ZodNumber:
      return jh(e);
    case re.ZodObject:
      return qh(e, n);
    case re.ZodBigInt:
      return vh(e);
    case re.ZodBoolean:
      return yh();
    case re.ZodDate:
      return Fi(e, n);
    case re.ZodUndefined:
      return Gh();
    case re.ZodNull:
      return Nh();
    case re.ZodArray:
      return gh(e, n);
    case re.ZodUnion:
    case re.ZodDiscriminatedUnion:
      return Ah(e, n);
    case re.ZodIntersection:
      return Th(e, n);
    case re.ZodTuple:
      return Vh(e, n);
    case re.ZodRecord:
      return Gi(e, n);
    case re.ZodLiteral:
      return Sh(e);
    case re.ZodEnum:
      return Ih(e);
    case re.ZodNativeEnum:
      return Rh(e);
    case re.ZodNullable:
      return Ph(e, n);
    case re.ZodOptional:
      return Uh(e, n);
    case re.ZodMap:
      return Mh(e, n);
    case re.ZodSet:
      return Fh(e, n);
    case re.ZodLazy:
      return () => e.getter()._def;
    case re.ZodPromise:
      return Lh(e, n);
    case re.ZodNaN:
    case re.ZodNever:
      return Oh();
    case re.ZodEffects:
      return xh(e, n);
    case re.ZodAny:
      return rt();
    case re.ZodUnknown:
      return Bh();
    case re.ZodDefault:
      return wh(e, n);
    case re.ZodBranded:
      return Li(e, n);
    case re.ZodReadonly:
      return Jh(e, n);
    case re.ZodCatch:
      return _h(e, n);
    case re.ZodPipeline:
      return Zh(e, n);
    case re.ZodFunction:
    case re.ZodVoid:
    case re.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((r) => {
      })();
  }
};
function ge(e, t, n = !1) {
  var r;
  const o = t.seen.get(e);
  if (t.override) {
    const u = (r = t.override) == null ? void 0 : r.call(
      t,
      e,
      t,
      o,
      n
    );
    if (u !== mh)
      return u;
  }
  if (o && !n) {
    const u = Wh(o, t);
    if (u !== void 0)
      return u;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = Hh(e, e.typeName, t), i = typeof s == "function" ? ge(s(), t) : s;
  if (i && Kh(e, t, i), t.postProcess) {
    const u = t.postProcess(i, e, t);
    return a.jsonSchema = i, u;
  }
  return a.jsonSchema = i, i;
}
var Wh = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: fh(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((n, r) => t.currentPath[r] === n) ? (console.warn(
        `Recursive reference detected at ${t.currentPath.join(
          "/"
        )}! Defaulting to any`
      ), rt()) : t.$refStrategy === "seen" ? rt() : void 0;
  }
}, Kh = (e, t, n) => (e.description && (n.description = e.description), n), Yh = (e) => {
  const t = hh(e), n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    currentPath: n,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(t.definitions).map(([r, o]) => [
        o._def,
        {
          def: o._def,
          path: [...t.basePath, t.definitionPath, r],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
}, Xh = (e, t) => {
  var n;
  const r = Yh(t);
  let o = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce(
    (c, [p, m]) => {
      var g;
      return {
        ...c,
        [p]: (g = ge(
          m._def,
          {
            ...r,
            currentPath: [...r.basePath, r.definitionPath, p]
          },
          !0
        )) != null ? g : rt()
      };
    },
    {}
  ) : void 0;
  const a = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, s = (n = ge(
    e._def,
    a === void 0 ? r : {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, a]
    },
    !1
  )) != null ? n : rt(), i = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  i !== void 0 && (s.title = i);
  const u = a === void 0 ? o ? {
    ...s,
    [r.definitionPath]: o
  } : s : {
    $ref: [
      ...r.$refStrategy === "relative" ? [] : r.basePath,
      r.definitionPath,
      a
    ].join("/"),
    [r.definitionPath]: {
      ...o,
      [a]: s
    }
  };
  return u.$schema = "http://json-schema.org/draft-07/schema#", u;
}, Qh = Xh;
function eg(e, t) {
  var n;
  const r = (n = t == null ? void 0 : t.useReferences) != null ? n : !1;
  return _o(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => Qh(e, {
      $refStrategy: r ? "root" : "none"
    }),
    {
      validate: async (o) => {
        const a = await e.safeParseAsync(o);
        return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
      }
    }
  );
}
function tg(e, t) {
  var n;
  const r = (n = t == null ? void 0 : t.useReferences) != null ? n : !1;
  return _o(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => Of(e, {
      target: "draft-7",
      io: "output",
      reused: r ? "ref" : "inline"
    }),
    {
      validate: async (o) => {
        const a = await Ni(e, o);
        return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
      }
    }
  );
}
function ng(e) {
  return "_zod" in e;
}
function U(e, t) {
  return ng(e) ? tg(e, t) : eg(e, t);
}
var Xr = Symbol.for("vercel.ai.schema");
function Y(e) {
  let t;
  return () => (t == null && (t = e()), t);
}
function _o(e, {
  validate: t
} = {}) {
  return {
    [Xr]: !0,
    _type: void 0,
    // should never be used directly
    [Qn]: !0,
    get jsonSchema() {
      return typeof e == "function" && (e = e()), e;
    },
    validate: t
  };
}
function rg(e) {
  return typeof e == "object" && e !== null && Xr in e && e[Xr] === !0 && "jsonSchema" in e && "validate" in e;
}
function on(e) {
  return e == null ? _o({
    properties: {},
    additionalProperties: !1
  }) : rg(e) ? e : typeof e == "function" ? e() : U(e);
}
var { btoa: og, atob: ag } = globalThis;
function Nn(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = ag(t);
  return Uint8Array.from(n, (r) => r.codePointAt(0));
}
function er(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += String.fromCodePoint(e[n]);
  return og(t);
}
function ft(e) {
  return e instanceof Uint8Array ? er(e) : e;
}
function An(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
function sg(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* Bi({
  execute: e,
  input: t,
  options: n
}) {
  const r = e(t, n);
  if (sg(r)) {
    let o;
    for await (const a of r)
      o = a, yield { type: "preliminary", output: a };
    yield { type: "final", output: o };
  } else
    yield { type: "final", output: await r };
}
var ig = "2.0.50", lg = Y(
  () => U(
    d({
      type: x("error"),
      error: d({
        type: l(),
        message: l()
      })
    })
  )
), va = bt({
  errorSchema: lg,
  errorToMessage: (e) => e.error.message
}), ug = Y(
  () => U(
    d({
      type: x("message"),
      id: l().nullish(),
      model: l().nullish(),
      content: P(
        de("type", [
          d({
            type: x("text"),
            text: l(),
            citations: P(
              de("type", [
                d({
                  type: x("web_search_result_location"),
                  cited_text: l(),
                  url: l(),
                  title: l(),
                  encrypted_index: l()
                }),
                d({
                  type: x("page_location"),
                  cited_text: l(),
                  document_index: k(),
                  document_title: l().nullable(),
                  start_page_number: k(),
                  end_page_number: k()
                }),
                d({
                  type: x("char_location"),
                  cited_text: l(),
                  document_index: k(),
                  document_title: l().nullable(),
                  start_char_index: k(),
                  end_char_index: k()
                })
              ])
            ).optional()
          }),
          d({
            type: x("thinking"),
            thinking: l(),
            signature: l()
          }),
          d({
            type: x("redacted_thinking"),
            data: l()
          }),
          d({
            type: x("tool_use"),
            id: l(),
            name: l(),
            input: le()
          }),
          d({
            type: x("server_tool_use"),
            id: l(),
            name: l(),
            input: Pe(l(), le()).nullish()
          }),
          d({
            type: x("web_fetch_tool_result"),
            tool_use_id: l(),
            content: oe([
              d({
                type: x("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: d({
                  type: x("document"),
                  title: l().nullable(),
                  citations: d({ enabled: J() }).optional(),
                  source: d({
                    type: x("text"),
                    media_type: l(),
                    data: l()
                  })
                })
              }),
              d({
                type: x("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          d({
            type: x("web_search_tool_result"),
            tool_use_id: l(),
            content: oe([
              P(
                d({
                  type: x("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              d({
                type: x("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          d({
            type: x("code_execution_tool_result"),
            tool_use_id: l(),
            content: oe([
              d({
                type: x("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              d({
                type: x("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          d({
            type: x("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: de("type", [
              d({
                type: x("bash_code_execution_result"),
                content: P(
                  d({
                    type: x("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              d({
                type: x("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          d({
            type: x("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: de("type", [
              d({
                type: x("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              d({
                type: x("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: k().nullable(),
                start_line: k().nullable(),
                total_lines: k().nullable()
              }),
              d({
                type: x("text_editor_code_execution_create_result"),
                is_file_update: J()
              }),
              d({
                type: x(
                  "text_editor_code_execution_str_replace_result"
                ),
                lines: P(l()).nullable(),
                new_lines: k().nullable(),
                new_start: k().nullable(),
                old_lines: k().nullable(),
                old_start: k().nullable()
              })
            ])
          })
        ])
      ),
      stop_reason: l().nullish(),
      stop_sequence: l().nullish(),
      usage: Hr({
        input_tokens: k(),
        output_tokens: k(),
        cache_creation_input_tokens: k().nullish(),
        cache_read_input_tokens: k().nullish()
      }),
      container: d({
        expires_at: l(),
        id: l(),
        skills: P(
          d({
            type: oe([x("anthropic"), x("custom")]),
            skill_id: l(),
            version: l()
          })
        ).nullish()
      }).nullish()
    })
  )
), cg = Y(
  () => U(
    de("type", [
      d({
        type: x("message_start"),
        message: d({
          id: l().nullish(),
          model: l().nullish(),
          usage: Hr({
            input_tokens: k(),
            cache_creation_input_tokens: k().nullish(),
            cache_read_input_tokens: k().nullish()
          })
        })
      }),
      d({
        type: x("content_block_start"),
        index: k(),
        content_block: de("type", [
          d({
            type: x("text"),
            text: l()
          }),
          d({
            type: x("thinking"),
            thinking: l()
          }),
          d({
            type: x("tool_use"),
            id: l(),
            name: l()
          }),
          d({
            type: x("redacted_thinking"),
            data: l()
          }),
          d({
            type: x("server_tool_use"),
            id: l(),
            name: l(),
            input: Pe(l(), le()).nullish()
          }),
          d({
            type: x("web_fetch_tool_result"),
            tool_use_id: l(),
            content: oe([
              d({
                type: x("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: d({
                  type: x("document"),
                  title: l().nullable(),
                  citations: d({ enabled: J() }).optional(),
                  source: d({
                    type: x("text"),
                    media_type: l(),
                    data: l()
                  })
                })
              }),
              d({
                type: x("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          d({
            type: x("web_search_tool_result"),
            tool_use_id: l(),
            content: oe([
              P(
                d({
                  type: x("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              d({
                type: x("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          d({
            type: x("code_execution_tool_result"),
            tool_use_id: l(),
            content: oe([
              d({
                type: x("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              d({
                type: x("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          d({
            type: x("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: de("type", [
              d({
                type: x("bash_code_execution_result"),
                content: P(
                  d({
                    type: x("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              d({
                type: x("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          d({
            type: x("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: de("type", [
              d({
                type: x("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              d({
                type: x("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: k().nullable(),
                start_line: k().nullable(),
                total_lines: k().nullable()
              }),
              d({
                type: x("text_editor_code_execution_create_result"),
                is_file_update: J()
              }),
              d({
                type: x(
                  "text_editor_code_execution_str_replace_result"
                ),
                lines: P(l()).nullable(),
                new_lines: k().nullable(),
                new_start: k().nullable(),
                old_lines: k().nullable(),
                old_start: k().nullable()
              })
            ])
          })
        ])
      }),
      d({
        type: x("content_block_delta"),
        index: k(),
        delta: de("type", [
          d({
            type: x("input_json_delta"),
            partial_json: l()
          }),
          d({
            type: x("text_delta"),
            text: l()
          }),
          d({
            type: x("thinking_delta"),
            thinking: l()
          }),
          d({
            type: x("signature_delta"),
            signature: l()
          }),
          d({
            type: x("citations_delta"),
            citation: de("type", [
              d({
                type: x("web_search_result_location"),
                cited_text: l(),
                url: l(),
                title: l(),
                encrypted_index: l()
              }),
              d({
                type: x("page_location"),
                cited_text: l(),
                document_index: k(),
                document_title: l().nullable(),
                start_page_number: k(),
                end_page_number: k()
              }),
              d({
                type: x("char_location"),
                cited_text: l(),
                document_index: k(),
                document_title: l().nullable(),
                start_char_index: k(),
                end_char_index: k()
              })
            ])
          })
        ])
      }),
      d({
        type: x("content_block_stop"),
        index: k()
      }),
      d({
        type: x("error"),
        error: d({
          type: l(),
          message: l()
        })
      }),
      d({
        type: x("message_delta"),
        delta: d({
          stop_reason: l().nullish(),
          stop_sequence: l().nullish(),
          container: d({
            expires_at: l(),
            id: l(),
            skills: P(
              d({
                type: oe([
                  x("anthropic"),
                  x("custom")
                ]),
                skill_id: l(),
                version: l()
              })
            ).nullish()
          }).nullish()
        }),
        usage: Hr({
          output_tokens: k(),
          cache_creation_input_tokens: k().nullish()
        })
      }),
      d({
        type: x("message_stop")
      }),
      d({
        type: x("ping")
      })
    ])
  )
), dg = Y(
  () => U(
    d({
      signature: l().optional(),
      redactedData: l().optional()
    })
  )
), ya = d({
  /**
   * Citation configuration for this document.
   * When enabled, this document will generate citations in the response.
   */
  citations: d({
    /**
     * Enable citations for this document
     */
    enabled: J()
  }).optional(),
  /**
   * Custom title for the document.
   * If not provided, the filename will be used.
   */
  title: l().optional(),
  /**
   * Context about the document that will be passed to the model
   * but not used towards cited content.
   * Useful for storing document metadata as text or stringified JSON.
   */
  context: l().optional()
}), pg = d({
  sendReasoning: J().optional(),
  /**
   * Determines how structured outputs are generated.
   *
   * - `outputFormat`: Use the `output_format` parameter to specify the structured output format.
   * - `jsonTool`: Use a special 'json' tool to specify the structured output format (default).
   * - `auto`: Use 'outputFormat' when supported, otherwise use 'jsonTool'.
   */
  structuredOutputMode: Q(["outputFormat", "jsonTool", "auto"]).optional(),
  /**
   * Configuration for enabling Claude's extended thinking.
   *
   * When enabled, responses include thinking content blocks showing Claude's thinking process before the final answer.
   * Requires a minimum budget of 1,024 tokens and counts towards the `max_tokens` limit.
   */
  thinking: d({
    type: oe([x("enabled"), x("disabled")]),
    budgetTokens: k().optional()
  }).optional(),
  /**
   * Whether to disable parallel function calling during tool use. Default is false.
   * When set to true, Claude will use at most one tool per response.
   */
  disableParallelToolUse: J().optional(),
  /**
   * Cache control settings for this message.
   * See https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
   */
  cacheControl: d({
    type: x("ephemeral"),
    ttl: oe([x("5m"), x("1h")]).optional()
  }).optional(),
  /**
   * Agent Skills configuration. Skills enable Claude to perform specialized tasks
   * like document processing (PPTX, DOCX, PDF, XLSX) and data analysis.
   * Requires code execution tool to be enabled.
   */
  container: d({
    id: l().optional(),
    skills: P(
      d({
        type: oe([x("anthropic"), x("custom")]),
        skillId: l(),
        version: l().optional()
      })
    ).optional()
  }).optional(),
  /**
   * @default 'high'
   */
  effort: Q(["low", "medium", "high"]).optional()
}), _a = 4;
function fg(e) {
  var t;
  const n = e == null ? void 0 : e.anthropic;
  return (t = n == null ? void 0 : n.cacheControl) != null ? t : n == null ? void 0 : n.cache_control;
}
var bo = class {
  constructor() {
    this.breakpointCount = 0, this.warnings = [];
  }
  getCacheControl(e, t) {
    const n = fg(e);
    if (n) {
      if (!t.canCache) {
        this.warnings.push({
          type: "unsupported-setting",
          setting: "cacheControl",
          details: `cache_control cannot be set on ${t.type}. It will be ignored.`
        });
        return;
      }
      if (this.breakpointCount++, this.breakpointCount > _a) {
        this.warnings.push({
          type: "unsupported-setting",
          setting: "cacheControl",
          details: `Maximum ${_a} cache breakpoints exceeded (found ${this.breakpointCount}). This breakpoint will be ignored.`
        });
        return;
      }
      return n;
    }
  }
  getWarnings() {
    return this.warnings;
  }
}, mg = Y(
  () => U(
    d({
      maxCharacters: k().optional()
    })
  )
), hg = Y(
  () => U(
    d({
      command: Q(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), gg = at({
  id: "anthropic.text_editor_20250728",
  name: "str_replace_based_edit_tool",
  inputSchema: hg
}), vg = (e = {}) => gg(e), yg = Y(
  () => U(
    d({
      maxUses: k().optional(),
      allowedDomains: P(l()).optional(),
      blockedDomains: P(l()).optional(),
      userLocation: d({
        type: x("approximate"),
        city: l().optional(),
        region: l().optional(),
        country: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Ji = Y(
  () => U(
    P(
      d({
        url: l(),
        title: l(),
        pageAge: l().nullable(),
        encryptedContent: l(),
        type: x("web_search_result")
      })
    )
  )
), _g = Y(
  () => U(
    d({
      query: l()
    })
  )
), bg = ht({
  id: "anthropic.web_search_20250305",
  name: "web_search",
  inputSchema: _g,
  outputSchema: Ji
}), wg = (e = {}) => bg(e), xg = Y(
  () => U(
    d({
      maxUses: k().optional(),
      allowedDomains: P(l()).optional(),
      blockedDomains: P(l()).optional(),
      citations: d({ enabled: J() }).optional(),
      maxContentTokens: k().optional()
    })
  )
), Hi = Y(
  () => U(
    d({
      type: x("web_fetch_result"),
      url: l(),
      content: d({
        type: x("document"),
        title: l(),
        citations: d({ enabled: J() }).optional(),
        source: oe([
          d({
            type: x("base64"),
            mediaType: x("application/pdf"),
            data: l()
          }),
          d({
            type: x("text"),
            mediaType: x("text/plain"),
            data: l()
          })
        ])
      }),
      retrievedAt: l().nullable()
    })
  )
), Ig = Y(
  () => U(
    d({
      url: l()
    })
  )
), kg = ht({
  id: "anthropic.web_fetch_20250910",
  name: "web_fetch",
  inputSchema: Ig,
  outputSchema: Hi
}), Tg = (e = {}) => kg(e);
async function Sg({
  tools: e,
  toolChoice: t,
  disableParallelToolUse: n,
  cacheControlValidator: r
}) {
  e = e != null && e.length ? e : void 0;
  const o = [], a = /* @__PURE__ */ new Set(), s = r || new bo();
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: o, betas: a };
  const i = [];
  for (const c of e)
    switch (c.type) {
      case "function": {
        const p = s.getCacheControl(c.providerOptions, {
          type: "tool definition",
          canCache: !0
        });
        i.push({
          name: c.name,
          description: c.description,
          input_schema: c.inputSchema,
          cache_control: p
        });
        break;
      }
      case "provider-defined": {
        switch (c.id) {
          case "anthropic.code_execution_20250522": {
            a.add("code-execution-2025-05-22"), i.push({
              type: "code_execution_20250522",
              name: "code_execution",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.code_execution_20250825": {
            a.add("code-execution-2025-08-25"), i.push({
              type: "code_execution_20250825",
              name: "code_execution"
            });
            break;
          }
          case "anthropic.computer_20250124": {
            a.add("computer-use-2025-01-24"), i.push({
              name: "computer",
              type: "computer_20250124",
              display_width_px: c.args.displayWidthPx,
              display_height_px: c.args.displayHeightPx,
              display_number: c.args.displayNumber,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.computer_20241022": {
            a.add("computer-use-2024-10-22"), i.push({
              name: "computer",
              type: "computer_20241022",
              display_width_px: c.args.displayWidthPx,
              display_height_px: c.args.displayHeightPx,
              display_number: c.args.displayNumber,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20250124": {
            a.add("computer-use-2025-01-24"), i.push({
              name: "str_replace_editor",
              type: "text_editor_20250124",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20241022": {
            a.add("computer-use-2024-10-22"), i.push({
              name: "str_replace_editor",
              type: "text_editor_20241022",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20250429": {
            a.add("computer-use-2025-01-24"), i.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250429",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20250728": {
            const p = await Ne({
              value: c.args,
              schema: mg
            });
            i.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250728",
              max_characters: p.maxCharacters,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.bash_20250124": {
            a.add("computer-use-2025-01-24"), i.push({
              name: "bash",
              type: "bash_20250124",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.bash_20241022": {
            a.add("computer-use-2024-10-22"), i.push({
              name: "bash",
              type: "bash_20241022",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.memory_20250818": {
            a.add("context-management-2025-06-27"), i.push({
              name: "memory",
              type: "memory_20250818"
            });
            break;
          }
          case "anthropic.web_fetch_20250910": {
            a.add("web-fetch-2025-09-10");
            const p = await Ne({
              value: c.args,
              schema: xg
            });
            i.push({
              type: "web_fetch_20250910",
              name: "web_fetch",
              max_uses: p.maxUses,
              allowed_domains: p.allowedDomains,
              blocked_domains: p.blockedDomains,
              citations: p.citations,
              max_content_tokens: p.maxContentTokens,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.web_search_20250305": {
            const p = await Ne({
              value: c.args,
              schema: yg
            });
            i.push({
              type: "web_search_20250305",
              name: "web_search",
              max_uses: p.maxUses,
              allowed_domains: p.allowedDomains,
              blocked_domains: p.blockedDomains,
              user_location: p.userLocation,
              cache_control: void 0
            });
            break;
          }
          default: {
            o.push({ type: "unsupported-tool", tool: c });
            break;
          }
        }
        break;
      }
      default: {
        o.push({ type: "unsupported-tool", tool: c });
        break;
      }
    }
  if (t == null)
    return {
      tools: i,
      toolChoice: n ? { type: "auto", disable_parallel_tool_use: n } : void 0,
      toolWarnings: o,
      betas: a
    };
  const u = t.type;
  switch (u) {
    case "auto":
      return {
        tools: i,
        toolChoice: {
          type: "auto",
          disable_parallel_tool_use: n
        },
        toolWarnings: o,
        betas: a
      };
    case "required":
      return {
        tools: i,
        toolChoice: {
          type: "any",
          disable_parallel_tool_use: n
        },
        toolWarnings: o,
        betas: a
      };
    case "none":
      return { tools: void 0, toolChoice: void 0, toolWarnings: o, betas: a };
    case "tool":
      return {
        tools: i,
        toolChoice: {
          type: "tool",
          name: t.toolName,
          disable_parallel_tool_use: n
        },
        toolWarnings: o,
        betas: a
      };
    default: {
      const c = u;
      throw new ke({
        functionality: `tool choice type: ${c}`
      });
    }
  }
}
var Wi = Y(
  () => U(
    d({
      type: x("code_execution_result"),
      stdout: l(),
      stderr: l(),
      return_code: k()
    })
  )
), Eg = Y(
  () => U(
    d({
      code: l()
    })
  )
), Cg = ht({
  id: "anthropic.code_execution_20250522",
  name: "code_execution",
  inputSchema: Eg,
  outputSchema: Wi
}), Mg = (e = {}) => Cg(e), Ki = Y(
  () => U(
    de("type", [
      d({
        type: x("bash_code_execution_result"),
        content: P(
          d({
            type: x("bash_code_execution_output"),
            file_id: l()
          })
        ),
        stdout: l(),
        stderr: l(),
        return_code: k()
      }),
      d({
        type: x("bash_code_execution_tool_result_error"),
        error_code: l()
      }),
      d({
        type: x("text_editor_code_execution_tool_result_error"),
        error_code: l()
      }),
      d({
        type: x("text_editor_code_execution_view_result"),
        content: l(),
        file_type: l(),
        num_lines: k().nullable(),
        start_line: k().nullable(),
        total_lines: k().nullable()
      }),
      d({
        type: x("text_editor_code_execution_create_result"),
        is_file_update: J()
      }),
      d({
        type: x("text_editor_code_execution_str_replace_result"),
        lines: P(l()).nullable(),
        new_lines: k().nullable(),
        new_start: k().nullable(),
        old_lines: k().nullable(),
        old_start: k().nullable()
      })
    ])
  )
), Rg = Y(
  () => U(
    de("type", [
      d({
        type: x("bash_code_execution"),
        command: l()
      }),
      de("command", [
        d({
          type: x("text_editor_code_execution"),
          command: x("view"),
          path: l()
        }),
        d({
          type: x("text_editor_code_execution"),
          command: x("create"),
          path: l(),
          file_text: l().nullish()
        }),
        d({
          type: x("text_editor_code_execution"),
          command: x("str_replace"),
          path: l(),
          old_str: l(),
          new_str: l()
        })
      ])
    ])
  )
), Og = ht({
  id: "anthropic.code_execution_20250825",
  name: "code_execution",
  inputSchema: Rg,
  outputSchema: Ki
}), Ng = (e = {}) => Og(e);
function Ag(e) {
  if (typeof e == "string")
    return Buffer.from(e, "base64").toString("utf-8");
  if (e instanceof Uint8Array)
    return new TextDecoder().decode(e);
  throw e instanceof URL ? new ke({
    functionality: "URL-based text documents are not supported for citations"
  }) : new ke({
    functionality: `unsupported data type for text documents: ${typeof e}`
  });
}
async function $g({
  prompt: e,
  sendReasoning: t,
  warnings: n,
  cacheControlValidator: r
}) {
  var o, a, s, i, u;
  const c = /* @__PURE__ */ new Set(), p = Pg(e), m = r || new bo();
  let g;
  const f = [];
  async function y(b) {
    var h, v;
    const I = await Ve({
      provider: "anthropic",
      providerOptions: b,
      schema: ya
    });
    return (v = (h = I == null ? void 0 : I.citations) == null ? void 0 : h.enabled) != null ? v : !1;
  }
  async function _(b) {
    const h = await Ve({
      provider: "anthropic",
      providerOptions: b,
      schema: ya
    });
    return {
      title: h == null ? void 0 : h.title,
      context: h == null ? void 0 : h.context
    };
  }
  for (let b = 0; b < p.length; b++) {
    const h = p[b], v = b === p.length - 1, I = h.type;
    switch (I) {
      case "system": {
        if (g != null)
          throw new ke({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        g = h.messages.map(({ content: w, providerOptions: E }) => ({
          type: "text",
          text: w,
          cache_control: m.getCacheControl(E, {
            type: "system message",
            canCache: !0
          })
        }));
        break;
      }
      case "user": {
        const w = [];
        for (const E of h.messages) {
          const { role: $, content: S } = E;
          switch ($) {
            case "user": {
              for (let O = 0; O < S.length; O++) {
                const R = S[O], C = O === S.length - 1, N = (o = m.getCacheControl(R.providerOptions, {
                  type: "user message part",
                  canCache: !0
                })) != null ? o : C ? m.getCacheControl(E.providerOptions, {
                  type: "user message",
                  canCache: !0
                }) : void 0;
                switch (R.type) {
                  case "text": {
                    w.push({
                      type: "text",
                      text: R.text,
                      cache_control: N
                    });
                    break;
                  }
                  case "file": {
                    if (R.mediaType.startsWith("image/"))
                      w.push({
                        type: "image",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "base64",
                          media_type: R.mediaType === "image/*" ? "image/jpeg" : R.mediaType,
                          data: ft(R.data)
                        },
                        cache_control: N
                      });
                    else if (R.mediaType === "application/pdf") {
                      c.add("pdfs-2024-09-25");
                      const Z = await y(
                        R.providerOptions
                      ), j = await _(
                        R.providerOptions
                      );
                      w.push({
                        type: "document",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "base64",
                          media_type: "application/pdf",
                          data: ft(R.data)
                        },
                        title: (a = j.title) != null ? a : R.filename,
                        ...j.context && { context: j.context },
                        ...Z && {
                          citations: { enabled: !0 }
                        },
                        cache_control: N
                      });
                    } else if (R.mediaType === "text/plain") {
                      const Z = await y(
                        R.providerOptions
                      ), j = await _(
                        R.providerOptions
                      );
                      w.push({
                        type: "document",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "text",
                          media_type: "text/plain",
                          data: Ag(R.data)
                        },
                        title: (s = j.title) != null ? s : R.filename,
                        ...j.context && { context: j.context },
                        ...Z && {
                          citations: { enabled: !0 }
                        },
                        cache_control: N
                      });
                    } else
                      throw new ke({
                        functionality: `media type: ${R.mediaType}`
                      });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let O = 0; O < S.length; O++) {
                const R = S[O], C = O === S.length - 1, N = (i = m.getCacheControl(R.providerOptions, {
                  type: "tool result part",
                  canCache: !0
                })) != null ? i : C ? m.getCacheControl(E.providerOptions, {
                  type: "tool result message",
                  canCache: !0
                }) : void 0, Z = R.output;
                let j;
                switch (Z.type) {
                  case "content":
                    j = Z.value.map((D) => {
                      switch (D.type) {
                        case "text":
                          return {
                            type: "text",
                            text: D.text
                          };
                        case "media": {
                          if (D.mediaType.startsWith("image/"))
                            return {
                              type: "image",
                              source: {
                                type: "base64",
                                media_type: D.mediaType,
                                data: D.data
                              }
                            };
                          if (D.mediaType === "application/pdf")
                            return c.add("pdfs-2024-09-25"), {
                              type: "document",
                              source: {
                                type: "base64",
                                media_type: D.mediaType,
                                data: D.data
                              }
                            };
                          throw new ke({
                            functionality: `media type: ${D.mediaType}`
                          });
                        }
                      }
                    });
                    break;
                  case "text":
                  case "error-text":
                    j = Z.value;
                    break;
                  case "json":
                  case "error-json":
                  default:
                    j = JSON.stringify(Z.value);
                    break;
                }
                w.push({
                  type: "tool_result",
                  tool_use_id: R.toolCallId,
                  content: j,
                  is_error: Z.type === "error-text" || Z.type === "error-json" ? !0 : void 0,
                  cache_control: N
                });
              }
              break;
            }
            default: {
              const O = $;
              throw new Error(`Unsupported role: ${O}`);
            }
          }
        }
        f.push({ role: "user", content: w });
        break;
      }
      case "assistant": {
        const w = [];
        for (let E = 0; E < h.messages.length; E++) {
          const $ = h.messages[E], S = E === h.messages.length - 1, { content: O } = $;
          for (let R = 0; R < O.length; R++) {
            const C = O[R], N = R === O.length - 1, Z = (u = m.getCacheControl(C.providerOptions, {
              type: "assistant message part",
              canCache: !0
            })) != null ? u : N ? m.getCacheControl($.providerOptions, {
              type: "assistant message",
              canCache: !0
            }) : void 0;
            switch (C.type) {
              case "text": {
                w.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    v && S && N ? C.text.trim() : C.text
                  ),
                  cache_control: Z
                });
                break;
              }
              case "reasoning": {
                if (t) {
                  const j = await Ve({
                    provider: "anthropic",
                    providerOptions: C.providerOptions,
                    schema: dg
                  });
                  j != null ? j.signature != null ? (m.getCacheControl(C.providerOptions, {
                    type: "thinking block",
                    canCache: !1
                  }), w.push({
                    type: "thinking",
                    thinking: C.text,
                    signature: j.signature
                  })) : j.redactedData != null ? (m.getCacheControl(C.providerOptions, {
                    type: "redacted thinking block",
                    canCache: !1
                  }), w.push({
                    type: "redacted_thinking",
                    data: j.redactedData
                  })) : n.push({
                    type: "other",
                    message: "unsupported reasoning metadata"
                  }) : n.push({
                    type: "other",
                    message: "unsupported reasoning metadata"
                  });
                } else
                  n.push({
                    type: "other",
                    message: "sending reasoning content is disabled for this model"
                  });
                break;
              }
              case "tool-call": {
                if (C.providerExecuted) {
                  C.toolName === "code_execution" && C.input != null && typeof C.input == "object" && "type" in C.input && typeof C.input.type == "string" && (C.input.type === "bash_code_execution" || C.input.type === "text_editor_code_execution") ? w.push({
                    type: "server_tool_use",
                    id: C.toolCallId,
                    name: C.input.type,
                    // map back to subtool name
                    input: C.input,
                    cache_control: Z
                  }) : C.toolName === "code_execution" || // code execution 20250522
                  C.toolName === "web_fetch" || C.toolName === "web_search" ? w.push({
                    type: "server_tool_use",
                    id: C.toolCallId,
                    name: C.toolName,
                    input: C.input,
                    cache_control: Z
                  }) : n.push({
                    type: "other",
                    message: `provider executed tool call for tool ${C.toolName} is not supported`
                  });
                  break;
                }
                w.push({
                  type: "tool_use",
                  id: C.toolCallId,
                  name: C.toolName,
                  input: C.input,
                  cache_control: Z
                });
                break;
              }
              case "tool-result": {
                if (C.toolName === "code_execution") {
                  const j = C.output;
                  if (j.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${j.type} for tool ${C.toolName} is not supported`
                    });
                    break;
                  }
                  if (j.value == null || typeof j.value != "object" || !("type" in j.value) || typeof j.value.type != "string") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output value is not a valid code execution result for tool ${C.toolName}`
                    });
                    break;
                  }
                  if (j.value.type === "code_execution_result") {
                    const D = await Ne({
                      value: j.value,
                      schema: Wi
                    });
                    w.push({
                      type: "code_execution_tool_result",
                      tool_use_id: C.toolCallId,
                      content: {
                        type: D.type,
                        stdout: D.stdout,
                        stderr: D.stderr,
                        return_code: D.return_code
                      },
                      cache_control: Z
                    });
                  } else {
                    const D = await Ne({
                      value: j.value,
                      schema: Ki
                    });
                    w.push(
                      D.type === "bash_code_execution_result" || D.type === "bash_code_execution_tool_result_error" ? {
                        type: "bash_code_execution_tool_result",
                        tool_use_id: C.toolCallId,
                        cache_control: Z,
                        content: D
                      } : {
                        type: "text_editor_code_execution_tool_result",
                        tool_use_id: C.toolCallId,
                        cache_control: Z,
                        content: D
                      }
                    );
                  }
                  break;
                }
                if (C.toolName === "web_fetch") {
                  const j = C.output;
                  if (j.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${j.type} for tool ${C.toolName} is not supported`
                    });
                    break;
                  }
                  const D = await Ne({
                    value: j.value,
                    schema: Hi
                  });
                  w.push({
                    type: "web_fetch_tool_result",
                    tool_use_id: C.toolCallId,
                    content: {
                      type: "web_fetch_result",
                      url: D.url,
                      retrieved_at: D.retrievedAt,
                      content: {
                        type: "document",
                        title: D.content.title,
                        citations: D.content.citations,
                        source: {
                          type: D.content.source.type,
                          media_type: D.content.source.mediaType,
                          data: D.content.source.data
                        }
                      }
                    },
                    cache_control: Z
                  });
                  break;
                }
                if (C.toolName === "web_search") {
                  const j = C.output;
                  if (j.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${j.type} for tool ${C.toolName} is not supported`
                    });
                    break;
                  }
                  const D = await Ne({
                    value: j.value,
                    schema: Ji
                  });
                  w.push({
                    type: "web_search_tool_result",
                    tool_use_id: C.toolCallId,
                    content: D.map((X) => ({
                      url: X.url,
                      title: X.title,
                      page_age: X.pageAge,
                      encrypted_content: X.encryptedContent,
                      type: X.type
                    })),
                    cache_control: Z
                  });
                  break;
                }
                n.push({
                  type: "other",
                  message: `provider executed tool result for tool ${C.toolName} is not supported`
                });
                break;
              }
            }
          }
        }
        f.push({ role: "assistant", content: w });
        break;
      }
      default: {
        const w = I;
        throw new Error(`content type: ${w}`);
      }
    }
  }
  return {
    prompt: { system: g, messages: f },
    betas: c
  };
}
function Pg(e) {
  const t = [];
  let n;
  for (const r of e) {
    const { role: o } = r;
    switch (o) {
      case "system": {
        (n == null ? void 0 : n.type) !== "system" && (n = { type: "system", messages: [] }, t.push(n)), n.messages.push(r);
        break;
      }
      case "assistant": {
        (n == null ? void 0 : n.type) !== "assistant" && (n = { type: "assistant", messages: [] }, t.push(n)), n.messages.push(r);
        break;
      }
      case "user": {
        (n == null ? void 0 : n.type) !== "user" && (n = { type: "user", messages: [] }, t.push(n)), n.messages.push(r);
        break;
      }
      case "tool": {
        (n == null ? void 0 : n.type) !== "user" && (n = { type: "user", messages: [] }, t.push(n)), n.messages.push(r);
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
function ba({
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
function wa(e, t, n) {
  var r;
  if (e.type !== "page_location" && e.type !== "char_location")
    return;
  const o = t[e.document_index];
  if (o)
    return {
      type: "source",
      sourceType: "document",
      id: n(),
      mediaType: o.mediaType,
      title: (r = e.document_title) != null ? r : o.title,
      filename: o.filename,
      providerMetadata: {
        anthropic: e.type === "page_location" ? {
          citedText: e.cited_text,
          startPageNumber: e.start_page_number,
          endPageNumber: e.end_page_number
        } : {
          citedText: e.cited_text,
          startCharIndex: e.start_char_index,
          endCharIndex: e.end_char_index
        }
      }
    };
}
var jg = class {
  constructor(e, t) {
    this.specificationVersion = "v2";
    var n;
    this.modelId = e, this.config = t, this.generateId = (n = t.generateId) != null ? n : Fe;
  }
  supportsUrl(e) {
    return e.protocol === "https:";
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var e, t, n;
    return (n = (t = (e = this.config).supportedUrls) == null ? void 0 : t.call(e)) != null ? n : {};
  }
  async getArgs({
    userSuppliedBetas: e,
    prompt: t,
    maxOutputTokens: n,
    temperature: r,
    topP: o,
    topK: a,
    frequencyPenalty: s,
    presencePenalty: i,
    stopSequences: u,
    responseFormat: c,
    seed: p,
    tools: m,
    toolChoice: g,
    providerOptions: f
  }) {
    var y, _, b, h, v;
    const I = [];
    s != null && I.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && I.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), p != null && I.push({
      type: "unsupported-setting",
      setting: "seed"
    }), r != null && r > 1 ? (I.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: `${r} exceeds anthropic maximum of 1.0. clamped to 1.0`
    }), r = 1) : r != null && r < 0 && (I.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: `${r} is below anthropic minimum of 0. clamped to 0`
    }), r = 0), (c == null ? void 0 : c.type) === "json" && (c.schema == null ? I.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format requires a schema. The response format is ignored."
    }) : m != null && I.push({
      type: "unsupported-setting",
      setting: "tools",
      details: "JSON response format does not support tools. The provided tools are ignored."
    }));
    const w = await Ve({
      provider: "anthropic",
      providerOptions: f,
      schema: pg
    }), {
      maxOutputTokens: E,
      supportsStructuredOutput: $,
      isKnownModel: S
    } = qg(this.modelId), O = (y = w == null ? void 0 : w.structuredOutputMode) != null ? y : "jsonTool", R = O === "outputFormat" || O === "auto" && $, C = (c == null ? void 0 : c.type) === "json" && c.schema != null && !R ? {
      type: "function",
      name: "json",
      description: "Respond with a JSON object.",
      inputSchema: c.schema
    } : void 0, N = new bo(), { prompt: Z, betas: j } = await $g({
      prompt: t,
      sendReasoning: (_ = w == null ? void 0 : w.sendReasoning) != null ? _ : !0,
      warnings: I,
      cacheControlValidator: N
    }), D = ((b = w == null ? void 0 : w.thinking) == null ? void 0 : b.type) === "enabled", X = (h = w == null ? void 0 : w.thinking) == null ? void 0 : h.budgetTokens, z = n ?? E, V = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: z,
      temperature: r,
      top_k: a,
      top_p: o,
      stop_sequences: u,
      // provider specific settings:
      ...D && {
        thinking: { type: "enabled", budget_tokens: X }
      },
      ...(w == null ? void 0 : w.effort) && {
        output_config: { effort: w.effort }
      },
      // structured output:
      ...R && (c == null ? void 0 : c.type) === "json" && c.schema != null && {
        output_format: {
          type: "json_schema",
          schema: c.schema
        }
      },
      // container with agent skills:
      ...(w == null ? void 0 : w.container) && {
        container: {
          id: w.container.id,
          skills: (v = w.container.skills) == null ? void 0 : v.map((F) => ({
            type: F.type,
            skill_id: F.skillId,
            version: F.version
          }))
        }
      },
      // prompt:
      system: Z.system,
      messages: Z.messages
    };
    if (D) {
      if (X == null)
        throw new ke({
          functionality: "thinking requires a budget"
        });
      V.temperature != null && (V.temperature = void 0, I.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), a != null && (V.top_k = void 0, I.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), o != null && (V.top_p = void 0, I.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), V.max_tokens = z + X;
    }
    S && V.max_tokens > E && (n != null && I.push({
      type: "unsupported-setting",
      setting: "maxOutputTokens",
      details: `${V.max_tokens} (maxOutputTokens + thinkingBudget) is greater than ${this.modelId} ${E} max output tokens. The max output tokens have been limited to ${E}.`
    }), V.max_tokens = E), w != null && w.container && w.container.skills && w.container.skills.length > 0 && (j.add("code-execution-2025-08-25"), j.add("skills-2025-10-02"), j.add("files-api-2025-04-14"), m != null && m.some(
      (F) => F.type === "provider-defined" && F.id === "anthropic.code_execution_20250825"
    ) || I.push({
      type: "other",
      message: "code execution tool is required when using skills"
    })), w != null && w.effort && j.add("effort-2025-11-24"), R && j.add("structured-outputs-2025-11-13");
    const {
      tools: ne,
      toolChoice: be,
      toolWarnings: ae,
      betas: Ie
    } = await Sg(
      C != null ? {
        tools: [C],
        toolChoice: { type: "tool", toolName: C.name },
        disableParallelToolUse: !0,
        cacheControlValidator: N
      } : {
        tools: m ?? [],
        toolChoice: g,
        disableParallelToolUse: w == null ? void 0 : w.disableParallelToolUse,
        cacheControlValidator: N
      }
    ), M = N.getWarnings();
    return {
      args: {
        ...V,
        tools: ne,
        tool_choice: be
      },
      warnings: [...I, ...ae, ...M],
      betas: /* @__PURE__ */ new Set([...j, ...Ie, ...e]),
      usesJsonResponseTool: C != null
    };
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Ae(
      await Oe(this.config.headers),
      t,
      e.size > 0 ? { "anthropic-beta": Array.from(e).join(",") } : {}
    );
  }
  async getBetasFromHeaders(e) {
    var t, n;
    const o = (t = (await Oe(this.config.headers))["anthropic-beta"]) != null ? t : "", a = (n = e == null ? void 0 : e["anthropic-beta"]) != null ? n : "";
    return new Set(
      [
        ...o.toLowerCase().split(","),
        ...a.toLowerCase().split(",")
      ].map((s) => s.trim()).filter((s) => s !== "")
    );
  }
  buildRequestUrl(e) {
    var t, n, r;
    return (r = (n = (t = this.config).buildRequestUrl) == null ? void 0 : n.call(t, this.config.baseURL, e)) != null ? r : `${this.config.baseURL}/messages`;
  }
  transformRequestBody(e) {
    var t, n, r;
    return (r = (n = (t = this.config).transformRequestBody) == null ? void 0 : n.call(t, e)) != null ? r : e;
  }
  extractCitationDocuments(e) {
    const t = (n) => {
      var r, o;
      if (n.type !== "file" || n.mediaType !== "application/pdf" && n.mediaType !== "text/plain")
        return !1;
      const a = (r = n.providerOptions) == null ? void 0 : r.anthropic, s = a == null ? void 0 : a.citations;
      return (o = s == null ? void 0 : s.enabled) != null ? o : !1;
    };
    return e.filter((n) => n.role === "user").flatMap((n) => n.content).filter(t).map((n) => {
      var r;
      const o = n;
      return {
        title: (r = o.filename) != null ? r : "Untitled Document",
        filename: o.filename,
        mediaType: o.mediaType
      };
    });
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u;
    const { args: c, warnings: p, betas: m, usesJsonResponseTool: g } = await this.getArgs({
      ...e,
      userSuppliedBetas: await this.getBetasFromHeaders(e.headers)
    }), f = this.extractCitationDocuments(e.prompt), {
      responseHeaders: y,
      value: _,
      rawValue: b
    } = await Ce({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: m, headers: e.headers }),
      body: this.transformRequestBody(c),
      failedResponseHandler: va,
      successfulResponseHandler: Ue(
        ug
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), h = [];
    for (const v of _.content)
      switch (v.type) {
        case "text": {
          if (!g && (h.push({ type: "text", text: v.text }), v.citations))
            for (const I of v.citations) {
              const w = wa(
                I,
                f,
                this.generateId
              );
              w && h.push(w);
            }
          break;
        }
        case "thinking": {
          h.push({
            type: "reasoning",
            text: v.thinking,
            providerMetadata: {
              anthropic: {
                signature: v.signature
              }
            }
          });
          break;
        }
        case "redacted_thinking": {
          h.push({
            type: "reasoning",
            text: "",
            providerMetadata: {
              anthropic: {
                redactedData: v.data
              }
            }
          });
          break;
        }
        case "tool_use": {
          h.push(
            // when a json response tool is used, the tool call becomes the text:
            g ? {
              type: "text",
              text: JSON.stringify(v.input)
            } : {
              type: "tool-call",
              toolCallId: v.id,
              toolName: v.name,
              input: JSON.stringify(v.input)
            }
          );
          break;
        }
        case "server_tool_use": {
          v.name === "text_editor_code_execution" || v.name === "bash_code_execution" ? h.push({
            type: "tool-call",
            toolCallId: v.id,
            toolName: "code_execution",
            input: JSON.stringify({ type: v.name, ...v.input }),
            providerExecuted: !0
          }) : (v.name === "web_search" || v.name === "code_execution" || v.name === "web_fetch") && h.push({
            type: "tool-call",
            toolCallId: v.id,
            toolName: v.name,
            input: JSON.stringify(v.input),
            providerExecuted: !0
          });
          break;
        }
        case "web_fetch_tool_result": {
          v.content.type === "web_fetch_result" ? h.push({
            type: "tool-result",
            toolCallId: v.tool_use_id,
            toolName: "web_fetch",
            result: {
              type: "web_fetch_result",
              url: v.content.url,
              retrievedAt: v.content.retrieved_at,
              content: {
                type: v.content.content.type,
                title: v.content.content.title,
                citations: v.content.content.citations,
                source: {
                  type: v.content.content.source.type,
                  mediaType: v.content.content.source.media_type,
                  data: v.content.content.source.data
                }
              }
            },
            providerExecuted: !0
          }) : v.content.type === "web_fetch_tool_result_error" && h.push({
            type: "tool-result",
            toolCallId: v.tool_use_id,
            toolName: "web_fetch",
            isError: !0,
            result: {
              type: "web_fetch_tool_result_error",
              errorCode: v.content.error_code
            },
            providerExecuted: !0
          });
          break;
        }
        case "web_search_tool_result": {
          if (Array.isArray(v.content)) {
            h.push({
              type: "tool-result",
              toolCallId: v.tool_use_id,
              toolName: "web_search",
              result: v.content.map((I) => {
                var w;
                return {
                  url: I.url,
                  title: I.title,
                  pageAge: (w = I.page_age) != null ? w : null,
                  encryptedContent: I.encrypted_content,
                  type: I.type
                };
              }),
              providerExecuted: !0
            });
            for (const I of v.content)
              h.push({
                type: "source",
                sourceType: "url",
                id: this.generateId(),
                url: I.url,
                title: I.title,
                providerMetadata: {
                  anthropic: {
                    pageAge: (t = I.page_age) != null ? t : null
                  }
                }
              });
          } else
            h.push({
              type: "tool-result",
              toolCallId: v.tool_use_id,
              toolName: "web_search",
              isError: !0,
              result: {
                type: "web_search_tool_result_error",
                errorCode: v.content.error_code
              },
              providerExecuted: !0
            });
          break;
        }
        // code execution 20250522:
        case "code_execution_tool_result": {
          v.content.type === "code_execution_result" ? h.push({
            type: "tool-result",
            toolCallId: v.tool_use_id,
            toolName: "code_execution",
            result: {
              type: v.content.type,
              stdout: v.content.stdout,
              stderr: v.content.stderr,
              return_code: v.content.return_code
            },
            providerExecuted: !0
          }) : v.content.type === "code_execution_tool_result_error" && h.push({
            type: "tool-result",
            toolCallId: v.tool_use_id,
            toolName: "code_execution",
            isError: !0,
            result: {
              type: "code_execution_tool_result_error",
              errorCode: v.content.error_code
            },
            providerExecuted: !0
          });
          break;
        }
        // code execution 20250825:
        case "bash_code_execution_tool_result":
        case "text_editor_code_execution_tool_result": {
          h.push({
            type: "tool-result",
            toolCallId: v.tool_use_id,
            toolName: "code_execution",
            result: v.content,
            providerExecuted: !0
          });
          break;
        }
      }
    return {
      content: h,
      finishReason: ba({
        finishReason: _.stop_reason,
        isJsonResponseFromTool: g
      }),
      usage: {
        inputTokens: _.usage.input_tokens,
        outputTokens: _.usage.output_tokens,
        totalTokens: _.usage.input_tokens + _.usage.output_tokens,
        cachedInputTokens: (n = _.usage.cache_read_input_tokens) != null ? n : void 0
      },
      request: { body: c },
      response: {
        id: (r = _.id) != null ? r : void 0,
        modelId: (o = _.model) != null ? o : void 0,
        headers: y,
        body: b
      },
      warnings: p,
      providerMetadata: {
        anthropic: {
          usage: _.usage,
          cacheCreationInputTokens: (a = _.usage.cache_creation_input_tokens) != null ? a : null,
          stopSequence: (s = _.stop_sequence) != null ? s : null,
          container: _.container ? {
            expiresAt: _.container.expires_at,
            id: _.container.id,
            skills: (u = (i = _.container.skills) == null ? void 0 : i.map((v) => ({
              type: v.type,
              skillId: v.skill_id,
              version: v.version
            }))) != null ? u : null
          } : null
        }
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: n, betas: r, usesJsonResponseTool: o } = await this.getArgs({
      ...e,
      userSuppliedBetas: await this.getBetasFromHeaders(e.headers)
    }), a = this.extractCitationDocuments(e.prompt), s = { ...t, stream: !0 }, i = this.buildRequestUrl(!0), { responseHeaders: u, value: c } = await Ce({
      url: i,
      headers: await this.getHeaders({ betas: r, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: va,
      successfulResponseHandler: Gt(
        cg
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let p = "unknown";
    const m = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, g = {};
    let f, y = null, _ = null, b = null, h;
    const v = this.generateId;
    let I = !0, w;
    const E = new st(), $ = c.pipeThrough(
      new TransformStream({
        start(C) {
          C.enqueue({ type: "stream-start", warnings: n });
        },
        async flush() {
          E.isPending() && E.resolve({
            stream: w,
            request: { body: s },
            response: { headers: u }
          });
        },
        transform(C, N) {
          var Z, j, D, X, z, V, ne, be, ae, Ie;
          if (e.includeRawChunks && N.enqueue({ type: "raw", rawValue: C.rawValue }), !C.success) {
            N.enqueue({ type: "error", error: C.error });
            return;
          }
          if (I) {
            if (C.value.type === "error") {
              E.reject(
                new qe({
                  message: C.value.error.message,
                  url: i,
                  requestBodyValues: s,
                  statusCode: C.value.error.type === "overloaded_error" ? 529 : 500,
                  responseHeaders: u,
                  responseBody: JSON.stringify(C.value.error),
                  isRetryable: C.value.error.type === "overloaded_error"
                })
              ), N.terminate();
              return;
            }
            I = !1, E.resolve({
              stream: w,
              request: { body: s },
              response: { headers: u }
            });
          }
          const M = C.value;
          switch (M.type) {
            case "ping":
              return;
            case "content_block_start": {
              const F = M.content_block.type;
              switch (h = F, F) {
                case "text": {
                  g[M.index] = { type: "text" }, N.enqueue({
                    type: "text-start",
                    id: String(M.index)
                  });
                  return;
                }
                case "thinking": {
                  g[M.index] = { type: "reasoning" }, N.enqueue({
                    type: "reasoning-start",
                    id: String(M.index)
                  });
                  return;
                }
                case "redacted_thinking": {
                  g[M.index] = { type: "reasoning" }, N.enqueue({
                    type: "reasoning-start",
                    id: String(M.index),
                    providerMetadata: {
                      anthropic: {
                        redactedData: M.content_block.data
                      }
                    }
                  });
                  return;
                }
                case "tool_use": {
                  g[M.index] = o ? { type: "text" } : {
                    type: "tool-call",
                    toolCallId: M.content_block.id,
                    toolName: M.content_block.name,
                    input: "",
                    firstDelta: !0
                  }, N.enqueue(
                    o ? { type: "text-start", id: String(M.index) } : {
                      type: "tool-input-start",
                      id: M.content_block.id,
                      toolName: M.content_block.name
                    }
                  );
                  return;
                }
                case "server_tool_use": {
                  if ([
                    "web_fetch",
                    "web_search",
                    // code execution 20250825:
                    "code_execution",
                    // code execution 20250825 text editor:
                    "text_editor_code_execution",
                    // code execution 20250825 bash:
                    "bash_code_execution"
                  ].includes(M.content_block.name)) {
                    g[M.index] = {
                      type: "tool-call",
                      toolCallId: M.content_block.id,
                      toolName: M.content_block.name,
                      input: "",
                      providerExecuted: !0,
                      firstDelta: !0
                    };
                    const q = M.content_block.name === "text_editor_code_execution" || M.content_block.name === "bash_code_execution" ? "code_execution" : M.content_block.name;
                    N.enqueue({
                      type: "tool-input-start",
                      id: M.content_block.id,
                      toolName: q,
                      providerExecuted: !0
                    });
                  }
                  return;
                }
                case "web_fetch_tool_result": {
                  const q = M.content_block;
                  q.content.type === "web_fetch_result" ? N.enqueue({
                    type: "tool-result",
                    toolCallId: q.tool_use_id,
                    toolName: "web_fetch",
                    result: {
                      type: "web_fetch_result",
                      url: q.content.url,
                      retrievedAt: q.content.retrieved_at,
                      content: {
                        type: q.content.content.type,
                        title: q.content.content.title,
                        citations: q.content.content.citations,
                        source: {
                          type: q.content.content.source.type,
                          mediaType: q.content.content.source.media_type,
                          data: q.content.content.source.data
                        }
                      }
                    },
                    providerExecuted: !0
                  }) : q.content.type === "web_fetch_tool_result_error" && N.enqueue({
                    type: "tool-result",
                    toolCallId: q.tool_use_id,
                    toolName: "web_fetch",
                    isError: !0,
                    result: {
                      type: "web_fetch_tool_result_error",
                      errorCode: q.content.error_code
                    },
                    providerExecuted: !0
                  });
                  return;
                }
                case "web_search_tool_result": {
                  const q = M.content_block;
                  if (Array.isArray(q.content)) {
                    N.enqueue({
                      type: "tool-result",
                      toolCallId: q.tool_use_id,
                      toolName: "web_search",
                      result: q.content.map((T) => {
                        var W;
                        return {
                          url: T.url,
                          title: T.title,
                          pageAge: (W = T.page_age) != null ? W : null,
                          encryptedContent: T.encrypted_content,
                          type: T.type
                        };
                      }),
                      providerExecuted: !0
                    });
                    for (const T of q.content)
                      N.enqueue({
                        type: "source",
                        sourceType: "url",
                        id: v(),
                        url: T.url,
                        title: T.title,
                        providerMetadata: {
                          anthropic: {
                            pageAge: (Z = T.page_age) != null ? Z : null
                          }
                        }
                      });
                  } else
                    N.enqueue({
                      type: "tool-result",
                      toolCallId: q.tool_use_id,
                      toolName: "web_search",
                      isError: !0,
                      result: {
                        type: "web_search_tool_result_error",
                        errorCode: q.content.error_code
                      },
                      providerExecuted: !0
                    });
                  return;
                }
                // code execution 20250522:
                case "code_execution_tool_result": {
                  const q = M.content_block;
                  q.content.type === "code_execution_result" ? N.enqueue({
                    type: "tool-result",
                    toolCallId: q.tool_use_id,
                    toolName: "code_execution",
                    result: {
                      type: q.content.type,
                      stdout: q.content.stdout,
                      stderr: q.content.stderr,
                      return_code: q.content.return_code
                    },
                    providerExecuted: !0
                  }) : q.content.type === "code_execution_tool_result_error" && N.enqueue({
                    type: "tool-result",
                    toolCallId: q.tool_use_id,
                    toolName: "code_execution",
                    isError: !0,
                    result: {
                      type: "code_execution_tool_result_error",
                      errorCode: q.content.error_code
                    },
                    providerExecuted: !0
                  });
                  return;
                }
                // code execution 20250825:
                case "bash_code_execution_tool_result":
                case "text_editor_code_execution_tool_result": {
                  const q = M.content_block;
                  N.enqueue({
                    type: "tool-result",
                    toolCallId: q.tool_use_id,
                    toolName: "code_execution",
                    result: q.content,
                    providerExecuted: !0
                  });
                  return;
                }
                default: {
                  const q = F;
                  throw new Error(
                    `Unsupported content block type: ${q}`
                  );
                }
              }
            }
            case "content_block_stop": {
              if (g[M.index] != null) {
                const F = g[M.index];
                switch (F.type) {
                  case "text": {
                    N.enqueue({
                      type: "text-end",
                      id: String(M.index)
                    });
                    break;
                  }
                  case "reasoning": {
                    N.enqueue({
                      type: "reasoning-end",
                      id: String(M.index)
                    });
                    break;
                  }
                  case "tool-call":
                    if (!o) {
                      N.enqueue({
                        type: "tool-input-end",
                        id: F.toolCallId
                      });
                      const q = F.toolName === "text_editor_code_execution" || F.toolName === "bash_code_execution" ? "code_execution" : F.toolName;
                      N.enqueue({
                        type: "tool-call",
                        toolCallId: F.toolCallId,
                        toolName: q,
                        input: F.input,
                        providerExecuted: F.providerExecuted
                      });
                    }
                    break;
                }
                delete g[M.index];
              }
              h = void 0;
              return;
            }
            case "content_block_delta": {
              const F = M.delta.type;
              switch (F) {
                case "text_delta": {
                  if (o)
                    return;
                  N.enqueue({
                    type: "text-delta",
                    id: String(M.index),
                    delta: M.delta.text
                  });
                  return;
                }
                case "thinking_delta": {
                  N.enqueue({
                    type: "reasoning-delta",
                    id: String(M.index),
                    delta: M.delta.thinking
                  });
                  return;
                }
                case "signature_delta": {
                  h === "thinking" && N.enqueue({
                    type: "reasoning-delta",
                    id: String(M.index),
                    delta: "",
                    providerMetadata: {
                      anthropic: {
                        signature: M.delta.signature
                      }
                    }
                  });
                  return;
                }
                case "input_json_delta": {
                  const q = g[M.index];
                  let T = M.delta.partial_json;
                  if (T.length === 0)
                    return;
                  if (o) {
                    if ((q == null ? void 0 : q.type) !== "text")
                      return;
                    N.enqueue({
                      type: "text-delta",
                      id: String(M.index),
                      delta: T
                    });
                  } else {
                    if ((q == null ? void 0 : q.type) !== "tool-call")
                      return;
                    q.firstDelta && (q.toolName === "bash_code_execution" || q.toolName === "text_editor_code_execution") && (T = `{"type": "${q.toolName}",${T.substring(1)}`), N.enqueue({
                      type: "tool-input-delta",
                      id: q.toolCallId,
                      delta: T
                    }), q.input += T, q.firstDelta = !1;
                  }
                  return;
                }
                case "citations_delta": {
                  const q = M.delta.citation, T = wa(
                    q,
                    a,
                    v
                  );
                  T && N.enqueue(T);
                  return;
                }
                default: {
                  const q = F;
                  throw new Error(
                    `Unsupported delta type: ${q}`
                  );
                }
              }
            }
            case "message_start": {
              m.inputTokens = M.message.usage.input_tokens, m.cachedInputTokens = (j = M.message.usage.cache_read_input_tokens) != null ? j : void 0, f = {
                ...M.message.usage
              }, y = (D = M.message.usage.cache_creation_input_tokens) != null ? D : null, N.enqueue({
                type: "response-metadata",
                id: (X = M.message.id) != null ? X : void 0,
                modelId: (z = M.message.model) != null ? z : void 0
              });
              return;
            }
            case "message_delta": {
              m.outputTokens = M.usage.output_tokens, m.totalTokens = ((V = m.inputTokens) != null ? V : 0) + ((ne = M.usage.output_tokens) != null ? ne : 0), p = ba({
                finishReason: M.delta.stop_reason,
                isJsonResponseFromTool: o
              }), _ = (be = M.delta.stop_sequence) != null ? be : null, b = M.delta.container != null ? {
                expiresAt: M.delta.container.expires_at,
                id: M.delta.container.id,
                skills: (Ie = (ae = M.delta.container.skills) == null ? void 0 : ae.map((F) => ({
                  type: F.type,
                  skillId: F.skill_id,
                  version: F.version
                }))) != null ? Ie : null
              } : null, f = {
                ...f,
                ...M.usage
              };
              return;
            }
            case "message_stop": {
              N.enqueue({
                type: "finish",
                finishReason: p,
                usage: m,
                providerMetadata: {
                  anthropic: {
                    usage: f ?? null,
                    cacheCreationInputTokens: y,
                    stopSequence: _,
                    container: b
                  }
                }
              });
              return;
            }
            case "error": {
              N.enqueue({ type: "error", error: M.error });
              return;
            }
            default: {
              const F = M;
              throw new Error(`Unsupported chunk type: ${F}`);
            }
          }
        }
      })
    ), [S, O] = $.tee();
    w = O;
    const R = S.getReader();
    return (async () => {
      try {
        const { done: C } = await R.read();
        C || await R.cancel();
      } catch {
        try {
          await R.cancel();
        } catch {
        }
      } finally {
        R.releaseLock();
      }
    })(), E.promise;
  }
};
function qg(e) {
  return e.includes("claude-sonnet-4-5") || e.includes("claude-opus-4-5") ? {
    maxOutputTokens: 64e3,
    supportsStructuredOutput: !0,
    isKnownModel: !0
  } : e.includes("claude-opus-4-1") ? {
    maxOutputTokens: 32e3,
    supportsStructuredOutput: !0,
    isKnownModel: !0
  } : e.includes("claude-sonnet-4-") || e.includes("claude-3-7-sonnet") || e.includes("claude-haiku-4-5") ? {
    maxOutputTokens: 64e3,
    supportsStructuredOutput: !1,
    isKnownModel: !0
  } : e.includes("claude-opus-4-") ? {
    maxOutputTokens: 32e3,
    supportsStructuredOutput: !1,
    isKnownModel: !0
  } : e.includes("claude-3-5-haiku") ? {
    maxOutputTokens: 8192,
    supportsStructuredOutput: !1,
    isKnownModel: !0
  } : e.includes("claude-3-haiku") ? {
    maxOutputTokens: 4096,
    supportsStructuredOutput: !1,
    isKnownModel: !0
  } : {
    maxOutputTokens: 4096,
    supportsStructuredOutput: !1,
    isKnownModel: !1
  };
}
var Dg = Y(
  () => U(
    d({
      command: l(),
      restart: J().optional()
    })
  )
), zg = at({
  id: "anthropic.bash_20241022",
  name: "bash",
  inputSchema: Dg
}), Ug = Y(
  () => U(
    d({
      command: l(),
      restart: J().optional()
    })
  )
), Zg = at({
  id: "anthropic.bash_20250124",
  name: "bash",
  inputSchema: Ug
}), Lg = Y(
  () => U(
    d({
      action: Q([
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
      coordinate: P(k().int()).optional(),
      text: l().optional()
    })
  )
), Fg = at({
  id: "anthropic.computer_20241022",
  name: "computer",
  inputSchema: Lg
}), Vg = Y(
  () => U(
    d({
      action: Q([
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
      coordinate: Wr([k().int(), k().int()]).optional(),
      duration: k().optional(),
      scroll_amount: k().optional(),
      scroll_direction: Q(["up", "down", "left", "right"]).optional(),
      start_coordinate: Wr([k().int(), k().int()]).optional(),
      text: l().optional()
    })
  )
), Gg = at({
  id: "anthropic.computer_20250124",
  name: "computer",
  inputSchema: Vg
}), Bg = Y(
  () => U(
    de("command", [
      d({
        command: x("view"),
        path: l(),
        view_range: Wr([k(), k()]).optional()
      }),
      d({
        command: x("create"),
        path: l(),
        file_text: l()
      }),
      d({
        command: x("str_replace"),
        path: l(),
        old_str: l(),
        new_str: l()
      }),
      d({
        command: x("insert"),
        path: l(),
        insert_line: k(),
        insert_text: l()
      }),
      d({
        command: x("delete"),
        path: l()
      }),
      d({
        command: x("rename"),
        old_path: l(),
        new_path: l()
      })
    ])
  )
), Jg = at({
  id: "anthropic.memory_20250818",
  name: "memory",
  inputSchema: Bg
}), Hg = Y(
  () => U(
    d({
      command: Q(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), Wg = at({
  id: "anthropic.text_editor_20241022",
  name: "str_replace_editor",
  inputSchema: Hg
}), Kg = Y(
  () => U(
    d({
      command: Q(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), Yg = at({
  id: "anthropic.text_editor_20250124",
  name: "str_replace_editor",
  inputSchema: Kg
}), Xg = Y(
  () => U(
    d({
      command: Q(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), Qg = at({
  id: "anthropic.text_editor_20250429",
  name: "str_replace_based_edit_tool",
  inputSchema: Xg
}), ev = {
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   *
   * Tool name must be `bash`.
   */
  bash_20241022: zg,
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   *
   * Tool name must be `bash`.
   */
  bash_20250124: Zg,
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
  codeExecution_20250522: Mg,
  /**
   * Claude can analyze data, create visualizations, perform complex calculations,
   * run system commands, create and edit files, and process uploaded files directly within
   * the API conversation.
   *
   * The code execution tool allows Claude to run both Python and Bash commands and manipulate files,
   * including writing code, in a secure, sandboxed environment.
   *
   * This is the latest version with enhanced Bash support and file operations.
   *
   * Tool name must be `code_execution`.
   */
  codeExecution_20250825: Ng,
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
  computer_20241022: Fg,
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
  computer_20250124: Gg,
  /**
   * The memory tool enables Claude to store and retrieve information across conversations through a memory file directory.
   * Claude can create, read, update, and delete files that persist between sessions,
   * allowing it to build knowledge over time without keeping everything in the context window.
   * The memory tool operates client-side—you control where and how the data is stored through your own infrastructure.
   *
   * Supported models: Claude Sonnet 4.5, Claude Sonnet 4, Claude Opus 4.1, Claude Opus 4.
   *
   * Tool name must be `memory`.
   */
  memory_20250818: Jg,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.5
   *
   * Tool name must be `str_replace_editor`.
   */
  textEditor_20241022: Wg,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.7
   *
   * Tool name must be `str_replace_editor`.
   */
  textEditor_20250124: Yg,
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
  textEditor_20250429: Qg,
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
  textEditor_20250728: vg,
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
  webFetch_20250910: Tg,
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
  webSearch_20250305: wg
};
function tv(e = {}) {
  var t, n;
  const r = (t = An(
    Qt({
      settingValue: e.baseURL,
      environmentVariableName: "ANTHROPIC_BASE_URL"
    })
  )) != null ? t : "https://api.anthropic.com/v1", o = (n = e.name) != null ? n : "anthropic.messages", a = () => ze(
    {
      "anthropic-version": "2023-06-01",
      "x-api-key": dr({
        apiKey: e.apiKey,
        environmentVariableName: "ANTHROPIC_API_KEY",
        description: "Anthropic"
      }),
      ...e.headers
    },
    `ai-sdk/anthropic/${ig}`
  ), s = (u) => {
    var c;
    return new jg(u, {
      provider: o,
      baseURL: r,
      headers: a,
      fetch: e.fetch,
      generateId: (c = e.generateId) != null ? c : Fe,
      supportedUrls: () => ({
        "image/*": [/^https?:\/\/.*$/]
      })
    });
  }, i = function(u) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return s(u);
  };
  return i.languageModel = s, i.chat = s, i.messages = s, i.textEmbeddingModel = (u) => {
    throw new He({ modelId: u, modelType: "textEmbeddingModel" });
  }, i.imageModel = (u) => {
    throw new He({ modelId: u, modelType: "imageModel" });
  }, i.tools = ev, i;
}
tv();
var nv = "2.0.44", rv = Y(
  () => U(
    d({
      error: d({
        code: k().nullable(),
        message: l(),
        status: l()
      })
    })
  )
), Sn = bt({
  errorSchema: rv,
  errorToMessage: (e) => e.error.message
}), ov = Y(
  () => U(
    d({
      /**
       * Optional. Optional reduced dimension for the output embedding.
       * If set, excessive values in the output embedding are truncated from the end.
       */
      outputDimensionality: k().optional(),
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
      taskType: Q([
        "SEMANTIC_SIMILARITY",
        "CLASSIFICATION",
        "CLUSTERING",
        "RETRIEVAL_DOCUMENT",
        "RETRIEVAL_QUERY",
        "QUESTION_ANSWERING",
        "FACT_VERIFICATION",
        "CODE_RETRIEVAL_QUERY"
      ]).optional()
    })
  )
), av = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: n,
    providerOptions: r
  }) {
    const o = await Ve({
      provider: "google",
      providerOptions: r,
      schema: ov
    });
    if (e.length > this.maxEmbeddingsPerCall)
      throw new ao({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const a = Ae(
      await Oe(this.config.headers),
      t
    );
    if (e.length === 1) {
      const {
        responseHeaders: c,
        value: p,
        rawValue: m
      } = await Ce({
        url: `${this.config.baseURL}/models/${this.modelId}:embedContent`,
        headers: a,
        body: {
          model: `models/${this.modelId}`,
          content: {
            parts: [{ text: e[0] }]
          },
          outputDimensionality: o == null ? void 0 : o.outputDimensionality,
          taskType: o == null ? void 0 : o.taskType
        },
        failedResponseHandler: Sn,
        successfulResponseHandler: Ue(
          iv
        ),
        abortSignal: n,
        fetch: this.config.fetch
      });
      return {
        embeddings: [p.embedding.values],
        usage: void 0,
        response: { headers: c, body: m }
      };
    }
    const {
      responseHeaders: s,
      value: i,
      rawValue: u
    } = await Ce({
      url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
      headers: a,
      body: {
        requests: e.map((c) => ({
          model: `models/${this.modelId}`,
          content: { role: "user", parts: [{ text: c }] },
          outputDimensionality: o == null ? void 0 : o.outputDimensionality,
          taskType: o == null ? void 0 : o.taskType
        }))
      },
      failedResponseHandler: Sn,
      successfulResponseHandler: Ue(
        sv
      ),
      abortSignal: n,
      fetch: this.config.fetch
    });
    return {
      embeddings: i.embeddings.map((c) => c.values),
      usage: void 0,
      response: { headers: s, body: u }
    };
  }
}, sv = Y(
  () => U(
    d({
      embeddings: P(d({ values: P(k()) }))
    })
  )
), iv = Y(
  () => U(
    d({
      embedding: d({ values: P(k()) })
    })
  )
);
function _t(e) {
  if (e == null || lv(e))
    return;
  if (typeof e == "boolean")
    return { type: "boolean", properties: {} };
  const {
    type: t,
    description: n,
    required: r,
    properties: o,
    items: a,
    allOf: s,
    anyOf: i,
    oneOf: u,
    format: c,
    const: p,
    minLength: m,
    enum: g
  } = e, f = {};
  if (n && (f.description = n), r && (f.required = r), c && (f.format = c), p !== void 0 && (f.enum = [p]), t)
    if (Array.isArray(t)) {
      const y = t.includes("null"), _ = t.filter((b) => b !== "null");
      _.length === 0 ? f.type = "null" : (f.anyOf = _.map((b) => ({ type: b })), y && (f.nullable = !0));
    } else
      f.type = t;
  if (g !== void 0 && (f.enum = g), o != null && (f.properties = Object.entries(o).reduce(
    (y, [_, b]) => (y[_] = _t(b), y),
    {}
  )), a && (f.items = Array.isArray(a) ? a.map(_t) : _t(a)), s && (f.allOf = s.map(_t)), i)
    if (i.some(
      (y) => typeof y == "object" && (y == null ? void 0 : y.type) === "null"
    )) {
      const y = i.filter(
        (_) => !(typeof _ == "object" && (_ == null ? void 0 : _.type) === "null")
      );
      if (y.length === 1) {
        const _ = _t(y[0]);
        typeof _ == "object" && (f.nullable = !0, Object.assign(f, _));
      } else
        f.anyOf = y.map(_t), f.nullable = !0;
    } else
      f.anyOf = i.map(_t);
  return u && (f.oneOf = u.map(_t)), m !== void 0 && (f.minLength = m), f;
}
function lv(e) {
  return e != null && typeof e == "object" && e.type === "object" && (e.properties == null || Object.keys(e.properties).length === 0) && !e.additionalProperties;
}
function uv(e, t) {
  var n;
  const r = [], o = [];
  let a = !0;
  const s = (n = t == null ? void 0 : t.isGemmaModel) != null ? n : !1;
  for (const { role: i, content: u } of e)
    switch (i) {
      case "system": {
        if (!a)
          throw new ke({
            functionality: "system messages are only supported at the beginning of the conversation"
          });
        r.push({ text: u });
        break;
      }
      case "user": {
        a = !1;
        const c = [];
        for (const p of u)
          switch (p.type) {
            case "text": {
              c.push({ text: p.text });
              break;
            }
            case "file": {
              const m = p.mediaType === "image/*" ? "image/jpeg" : p.mediaType;
              c.push(
                p.data instanceof URL ? {
                  fileData: {
                    mimeType: m,
                    fileUri: p.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: m,
                    data: ft(p.data)
                  }
                }
              );
              break;
            }
          }
        o.push({ role: "user", parts: c });
        break;
      }
      case "assistant": {
        a = !1, o.push({
          role: "model",
          parts: u.map((c) => {
            var p, m, g;
            const f = ((m = (p = c.providerOptions) == null ? void 0 : p.google) == null ? void 0 : m.thoughtSignature) != null ? String((g = c.providerOptions.google) == null ? void 0 : g.thoughtSignature) : void 0;
            switch (c.type) {
              case "text":
                return c.text.length === 0 ? void 0 : {
                  text: c.text,
                  thoughtSignature: f
                };
              case "reasoning":
                return c.text.length === 0 ? void 0 : {
                  text: c.text,
                  thought: !0,
                  thoughtSignature: f
                };
              case "file": {
                if (c.mediaType !== "image/png")
                  throw new ke({
                    functionality: "Only PNG images are supported in assistant messages"
                  });
                if (c.data instanceof URL)
                  throw new ke({
                    functionality: "File data URLs in assistant messages are not supported"
                  });
                return {
                  inlineData: {
                    mimeType: c.mediaType,
                    data: ft(c.data)
                  }
                };
              }
              case "tool-call":
                return {
                  functionCall: {
                    name: c.toolName,
                    args: c.input
                  },
                  thoughtSignature: f
                };
            }
          }).filter((c) => c !== void 0)
        });
        break;
      }
      case "tool": {
        a = !1;
        const c = [];
        for (const p of u) {
          const m = p.output;
          if (m.type === "content")
            for (const g of m.value)
              switch (g.type) {
                case "text":
                  c.push({
                    functionResponse: {
                      name: p.toolName,
                      response: {
                        name: p.toolName,
                        content: g.text
                      }
                    }
                  });
                  break;
                case "media":
                  c.push(
                    {
                      inlineData: {
                        mimeType: g.mediaType,
                        data: g.data
                      }
                    },
                    {
                      text: "Tool executed successfully and returned this image as a response"
                    }
                  );
                  break;
                default:
                  c.push({ text: JSON.stringify(g) });
                  break;
              }
          else
            c.push({
              functionResponse: {
                name: p.toolName,
                response: {
                  name: p.toolName,
                  content: m.value
                }
              }
            });
        }
        o.push({
          role: "user",
          parts: c
        });
        break;
      }
    }
  if (s && r.length > 0 && o.length > 0 && o[0].role === "user") {
    const i = r.map((u) => u.text).join(`

`);
    o[0].parts.unshift({ text: i + `

` });
  }
  return {
    systemInstruction: r.length > 0 && !s ? { parts: r } : void 0,
    contents: o
  };
}
function xa(e) {
  return e.includes("/") ? e : `models/${e}`;
}
var cv = Y(
  () => U(
    d({
      responseModalities: P(Q(["TEXT", "IMAGE"])).optional(),
      thinkingConfig: d({
        thinkingBudget: k().optional(),
        includeThoughts: J().optional(),
        // https://ai.google.dev/gemini-api/docs/gemini-3?thinking=high#thinking_level
        thinkingLevel: Q(["low", "medium", "high"]).optional()
      }).optional(),
      /**
       * Optional.
       * The name of the cached content used as context to serve the prediction.
       * Format: cachedContents/{cachedContent}
       */
      cachedContent: l().optional(),
      /**
       * Optional. Enable structured output. Default is true.
       *
       * This is useful when the JSON Schema contains elements that are
       * not supported by the OpenAPI schema version that
       * Google Generative AI uses. You can use this to disable
       * structured outputs if you need to.
       */
      structuredOutputs: J().optional(),
      /**
       * Optional. A list of unique safety settings for blocking unsafe content.
       */
      safetySettings: P(
        d({
          category: Q([
            "HARM_CATEGORY_UNSPECIFIED",
            "HARM_CATEGORY_HATE_SPEECH",
            "HARM_CATEGORY_DANGEROUS_CONTENT",
            "HARM_CATEGORY_HARASSMENT",
            "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "HARM_CATEGORY_CIVIC_INTEGRITY"
          ]),
          threshold: Q([
            "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
            "BLOCK_LOW_AND_ABOVE",
            "BLOCK_MEDIUM_AND_ABOVE",
            "BLOCK_ONLY_HIGH",
            "BLOCK_NONE",
            "OFF"
          ])
        })
      ).optional(),
      threshold: Q([
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
      audioTimestamp: J().optional(),
      /**
       * Optional. Defines labels used in billing reports. Available on Vertex AI only.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls
       */
      labels: Pe(l(), l()).optional(),
      /**
       * Optional. If specified, the media resolution specified will be used.
       *
       * https://ai.google.dev/api/generate-content#MediaResolution
       */
      mediaResolution: Q([
        "MEDIA_RESOLUTION_UNSPECIFIED",
        "MEDIA_RESOLUTION_LOW",
        "MEDIA_RESOLUTION_MEDIUM",
        "MEDIA_RESOLUTION_HIGH"
      ]).optional(),
      /**
       * Optional. Configures the image generation aspect ratio for Gemini models.
       *
       * https://ai.google.dev/gemini-api/docs/image-generation#aspect_ratios
       */
      imageConfig: d({
        aspectRatio: Q([
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9"
        ]).optional(),
        imageSize: Q(["1K", "2K", "4K"]).optional()
      }).optional()
    })
  )
);
function dv({
  tools: e,
  toolChoice: t,
  modelId: n
}) {
  var r;
  e = e != null && e.length ? e : void 0;
  const o = [], a = [
    "gemini-flash-latest",
    "gemini-flash-lite-latest",
    "gemini-pro-latest"
  ].some((f) => f === n), s = n.includes("gemini-2") || n.includes("gemini-3") || a, i = n.includes("gemini-1.5-flash") && !n.includes("-8b"), u = n.includes("gemini-2.5");
  if (e == null)
    return { tools: void 0, toolConfig: void 0, toolWarnings: o };
  const c = e.some((f) => f.type === "function"), p = e.some(
    (f) => f.type === "provider-defined"
  );
  if (c && p) {
    const f = e.filter((y) => y.type === "function");
    o.push({
      type: "unsupported-tool",
      tool: e.find((y) => y.type === "function"),
      details: `Cannot mix function tools with provider-defined tools in the same request. Falling back to provider-defined tools only. The following function tools will be ignored: ${f.map((y) => y.name).join(", ")}. Please use either function tools or provider-defined tools, but not both.`
    });
  }
  if (p) {
    const f = [];
    return e.filter(
      (_) => _.type === "provider-defined"
    ).forEach((_) => {
      switch (_.id) {
        case "google.google_search":
          s ? f.push({ googleSearch: {} }) : i ? f.push({
            googleSearchRetrieval: {
              dynamicRetrievalConfig: {
                mode: _.args.mode,
                dynamicThreshold: _.args.dynamicThreshold
              }
            }
          }) : f.push({ googleSearchRetrieval: {} });
          break;
        case "google.url_context":
          s ? f.push({ urlContext: {} }) : o.push({
            type: "unsupported-tool",
            tool: _,
            details: "The URL context tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.code_execution":
          s ? f.push({ codeExecution: {} }) : o.push({
            type: "unsupported-tool",
            tool: _,
            details: "The code execution tools is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.file_search":
          u ? f.push({ fileSearch: { ..._.args } }) : o.push({
            type: "unsupported-tool",
            tool: _,
            details: "The file search tool is only supported with Gemini 2.5 models."
          });
          break;
        case "google.vertex_rag_store":
          s ? f.push({
            retrieval: {
              vertex_rag_store: {
                rag_resources: {
                  rag_corpus: _.args.ragCorpus
                },
                similarity_top_k: _.args.topK
              }
            }
          }) : o.push({
            type: "unsupported-tool",
            tool: _,
            details: "The RAG store tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        default:
          o.push({ type: "unsupported-tool", tool: _ });
          break;
      }
    }), {
      tools: f.length > 0 ? f : void 0,
      toolConfig: void 0,
      toolWarnings: o
    };
  }
  const m = [];
  for (const f of e)
    switch (f.type) {
      case "function":
        m.push({
          name: f.name,
          description: (r = f.description) != null ? r : "",
          parameters: _t(f.inputSchema)
        });
        break;
      default:
        o.push({ type: "unsupported-tool", tool: f });
        break;
    }
  if (t == null)
    return {
      tools: [{ functionDeclarations: m }],
      toolConfig: void 0,
      toolWarnings: o
    };
  const g = t.type;
  switch (g) {
    case "auto":
      return {
        tools: [{ functionDeclarations: m }],
        toolConfig: { functionCallingConfig: { mode: "AUTO" } },
        toolWarnings: o
      };
    case "none":
      return {
        tools: [{ functionDeclarations: m }],
        toolConfig: { functionCallingConfig: { mode: "NONE" } },
        toolWarnings: o
      };
    case "required":
      return {
        tools: [{ functionDeclarations: m }],
        toolConfig: { functionCallingConfig: { mode: "ANY" } },
        toolWarnings: o
      };
    case "tool":
      return {
        tools: [{ functionDeclarations: m }],
        toolConfig: {
          functionCallingConfig: {
            mode: "ANY",
            allowedFunctionNames: [t.toolName]
          }
        },
        toolWarnings: o
      };
    default: {
      const f = g;
      throw new ke({
        functionality: `tool choice type: ${f}`
      });
    }
  }
}
function Ia({
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
var pv = class {
  constructor(e, t) {
    this.specificationVersion = "v2";
    var n;
    this.modelId = e, this.config = t, this.generateId = (n = t.generateId) != null ? n : Fe;
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var e, t, n;
    return (n = (t = (e = this.config).supportedUrls) == null ? void 0 : t.call(e)) != null ? n : {};
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: n,
    topP: r,
    topK: o,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    seed: c,
    tools: p,
    toolChoice: m,
    providerOptions: g
  }) {
    var f;
    const y = [], _ = await Ve({
      provider: "google",
      providerOptions: g,
      schema: cv
    });
    p != null && p.some(
      ($) => $.type === "provider-defined" && $.id === "google.vertex_rag_store"
    ) && !this.config.provider.startsWith("google.vertex.") && y.push({
      type: "other",
      message: `The 'vertex_rag_store' tool is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
    });
    const b = this.modelId.toLowerCase().startsWith("gemma-"), { contents: h, systemInstruction: v } = uv(
      e,
      { isGemmaModel: b }
    ), {
      tools: I,
      toolConfig: w,
      toolWarnings: E
    } = dv({
      tools: p,
      toolChoice: m,
      modelId: this.modelId
    });
    return {
      args: {
        generationConfig: {
          // standardized settings:
          maxOutputTokens: t,
          temperature: n,
          topK: o,
          topP: r,
          frequencyPenalty: a,
          presencePenalty: s,
          stopSequences: i,
          seed: c,
          // response format:
          responseMimeType: (u == null ? void 0 : u.type) === "json" ? "application/json" : void 0,
          responseSchema: (u == null ? void 0 : u.type) === "json" && u.schema != null && // Google GenAI does not support all OpenAPI Schema features,
          // so this is needed as an escape hatch:
          // TODO convert into provider option
          ((f = _ == null ? void 0 : _.structuredOutputs) == null || f) ? _t(u.schema) : void 0,
          ...(_ == null ? void 0 : _.audioTimestamp) && {
            audioTimestamp: _.audioTimestamp
          },
          // provider options:
          responseModalities: _ == null ? void 0 : _.responseModalities,
          thinkingConfig: _ == null ? void 0 : _.thinkingConfig,
          ...(_ == null ? void 0 : _.imageConfig) && {
            imageConfig: _.imageConfig
          },
          ...(_ == null ? void 0 : _.mediaResolution) && {
            mediaResolution: _.mediaResolution
          }
        },
        contents: h,
        systemInstruction: b ? void 0 : v,
        safetySettings: _ == null ? void 0 : _.safetySettings,
        tools: I,
        toolConfig: w,
        cachedContent: _ == null ? void 0 : _.cachedContent,
        labels: _ == null ? void 0 : _.labels
      },
      warnings: [...y, ...E]
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, p, m, g, f;
    const { args: y, warnings: _ } = await this.getArgs(e), b = JSON.stringify(y), h = Ae(
      await Oe(this.config.headers),
      e.headers
    ), {
      responseHeaders: v,
      value: I,
      rawValue: w
    } = await Ce({
      url: `${this.config.baseURL}/${xa(
        this.modelId
      )}:generateContent`,
      headers: h,
      body: y,
      failedResponseHandler: Sn,
      successfulResponseHandler: Ue(mv),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), E = I.candidates[0], $ = [], S = (n = (t = E.content) == null ? void 0 : t.parts) != null ? n : [], O = I.usageMetadata;
    let R;
    for (const N of S)
      if ("executableCode" in N && ((r = N.executableCode) != null && r.code)) {
        const Z = this.config.generateId();
        R = Z, $.push({
          type: "tool-call",
          toolCallId: Z,
          toolName: "code_execution",
          input: JSON.stringify(N.executableCode),
          providerExecuted: !0
        });
      } else "codeExecutionResult" in N && N.codeExecutionResult ? ($.push({
        type: "tool-result",
        // Assumes a result directly follows its corresponding call part.
        toolCallId: R,
        toolName: "code_execution",
        result: {
          outcome: N.codeExecutionResult.outcome,
          output: N.codeExecutionResult.output
        },
        providerExecuted: !0
      }), R = void 0) : "text" in N && N.text != null && N.text.length > 0 ? $.push({
        type: N.thought === !0 ? "reasoning" : "text",
        text: N.text,
        providerMetadata: N.thoughtSignature ? { google: { thoughtSignature: N.thoughtSignature } } : void 0
      }) : "functionCall" in N ? $.push({
        type: "tool-call",
        toolCallId: this.config.generateId(),
        toolName: N.functionCall.name,
        input: JSON.stringify(N.functionCall.args),
        providerMetadata: N.thoughtSignature ? { google: { thoughtSignature: N.thoughtSignature } } : void 0
      }) : "inlineData" in N && $.push({
        type: "file",
        data: N.inlineData.data,
        mediaType: N.inlineData.mimeType
      });
    const C = (o = ka({
      groundingMetadata: E.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? o : [];
    for (const N of C)
      $.push(N);
    return {
      content: $,
      finishReason: Ia({
        finishReason: E.finishReason,
        hasToolCalls: $.some((N) => N.type === "tool-call")
      }),
      usage: {
        inputTokens: (a = O == null ? void 0 : O.promptTokenCount) != null ? a : void 0,
        outputTokens: (s = O == null ? void 0 : O.candidatesTokenCount) != null ? s : void 0,
        totalTokens: (i = O == null ? void 0 : O.totalTokenCount) != null ? i : void 0,
        reasoningTokens: (u = O == null ? void 0 : O.thoughtsTokenCount) != null ? u : void 0,
        cachedInputTokens: (c = O == null ? void 0 : O.cachedContentTokenCount) != null ? c : void 0
      },
      warnings: _,
      providerMetadata: {
        google: {
          promptFeedback: (p = I.promptFeedback) != null ? p : null,
          groundingMetadata: (m = E.groundingMetadata) != null ? m : null,
          urlContextMetadata: (g = E.urlContextMetadata) != null ? g : null,
          safetyRatings: (f = E.safetyRatings) != null ? f : null,
          usageMetadata: O ?? null
        }
      },
      request: { body: b },
      response: {
        // TODO timestamp, model id, id
        headers: v,
        body: w
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = JSON.stringify(t), o = Ae(
      await Oe(this.config.headers),
      e.headers
    ), { responseHeaders: a, value: s } = await Ce({
      url: `${this.config.baseURL}/${xa(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers: o,
      body: t,
      failedResponseHandler: Sn,
      successfulResponseHandler: Gt(hv),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let i = "unknown";
    const u = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let c;
    const p = this.config.generateId;
    let m = !1, g = null, f = null, y = 0;
    const _ = /* @__PURE__ */ new Set();
    let b;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(h) {
            h.enqueue({ type: "stream-start", warnings: n });
          },
          transform(h, v) {
            var I, w, E, $, S, O, R, C, N, Z, j, D;
            if (e.includeRawChunks && v.enqueue({ type: "raw", rawValue: h.rawValue }), !h.success) {
              v.enqueue({ type: "error", error: h.error });
              return;
            }
            const X = h.value, z = X.usageMetadata;
            z != null && (u.inputTokens = (I = z.promptTokenCount) != null ? I : void 0, u.outputTokens = (w = z.candidatesTokenCount) != null ? w : void 0, u.totalTokens = (E = z.totalTokenCount) != null ? E : void 0, u.reasoningTokens = ($ = z.thoughtsTokenCount) != null ? $ : void 0, u.cachedInputTokens = (S = z.cachedContentTokenCount) != null ? S : void 0);
            const V = (O = X.candidates) == null ? void 0 : O[0];
            if (V == null)
              return;
            const ne = V.content, be = ka({
              groundingMetadata: V.groundingMetadata,
              generateId: p
            });
            if (be != null)
              for (const ae of be)
                ae.sourceType === "url" && !_.has(ae.url) && (_.add(ae.url), v.enqueue(ae));
            if (ne != null) {
              const ae = (R = ne.parts) != null ? R : [];
              for (const M of ae)
                if ("executableCode" in M && ((C = M.executableCode) != null && C.code)) {
                  const F = p();
                  b = F, v.enqueue({
                    type: "tool-call",
                    toolCallId: F,
                    toolName: "code_execution",
                    input: JSON.stringify(M.executableCode),
                    providerExecuted: !0
                  }), m = !0;
                } else if ("codeExecutionResult" in M && M.codeExecutionResult) {
                  const F = b;
                  F && (v.enqueue({
                    type: "tool-result",
                    toolCallId: F,
                    toolName: "code_execution",
                    result: {
                      outcome: M.codeExecutionResult.outcome,
                      output: M.codeExecutionResult.output
                    },
                    providerExecuted: !0
                  }), b = void 0);
                } else "text" in M && M.text != null && M.text.length > 0 ? M.thought === !0 ? (g !== null && (v.enqueue({
                  type: "text-end",
                  id: g
                }), g = null), f === null && (f = String(y++), v.enqueue({
                  type: "reasoning-start",
                  id: f,
                  providerMetadata: M.thoughtSignature ? {
                    google: {
                      thoughtSignature: M.thoughtSignature
                    }
                  } : void 0
                })), v.enqueue({
                  type: "reasoning-delta",
                  id: f,
                  delta: M.text,
                  providerMetadata: M.thoughtSignature ? {
                    google: { thoughtSignature: M.thoughtSignature }
                  } : void 0
                })) : (f !== null && (v.enqueue({
                  type: "reasoning-end",
                  id: f
                }), f = null), g === null && (g = String(y++), v.enqueue({
                  type: "text-start",
                  id: g,
                  providerMetadata: M.thoughtSignature ? {
                    google: {
                      thoughtSignature: M.thoughtSignature
                    }
                  } : void 0
                })), v.enqueue({
                  type: "text-delta",
                  id: g,
                  delta: M.text,
                  providerMetadata: M.thoughtSignature ? {
                    google: { thoughtSignature: M.thoughtSignature }
                  } : void 0
                })) : "inlineData" in M && v.enqueue({
                  type: "file",
                  mediaType: M.inlineData.mimeType,
                  data: M.inlineData.data
                });
              const Ie = fv({
                parts: ne.parts,
                generateId: p
              });
              if (Ie != null)
                for (const M of Ie)
                  v.enqueue({
                    type: "tool-input-start",
                    id: M.toolCallId,
                    toolName: M.toolName,
                    providerMetadata: M.providerMetadata
                  }), v.enqueue({
                    type: "tool-input-delta",
                    id: M.toolCallId,
                    delta: M.args,
                    providerMetadata: M.providerMetadata
                  }), v.enqueue({
                    type: "tool-input-end",
                    id: M.toolCallId,
                    providerMetadata: M.providerMetadata
                  }), v.enqueue({
                    type: "tool-call",
                    toolCallId: M.toolCallId,
                    toolName: M.toolName,
                    input: M.args,
                    providerMetadata: M.providerMetadata
                  }), m = !0;
            }
            V.finishReason != null && (i = Ia({
              finishReason: V.finishReason,
              hasToolCalls: m
            }), c = {
              google: {
                promptFeedback: (N = X.promptFeedback) != null ? N : null,
                groundingMetadata: (Z = V.groundingMetadata) != null ? Z : null,
                urlContextMetadata: (j = V.urlContextMetadata) != null ? j : null,
                safetyRatings: (D = V.safetyRatings) != null ? D : null
              }
            }, z != null && (c.google.usageMetadata = z));
          },
          flush(h) {
            g !== null && h.enqueue({
              type: "text-end",
              id: g
            }), f !== null && h.enqueue({
              type: "reasoning-end",
              id: f
            }), h.enqueue({
              type: "finish",
              finishReason: i,
              usage: u,
              providerMetadata: c
            });
          }
        })
      ),
      response: { headers: a },
      request: { body: r }
    };
  }
};
function fv({
  parts: e,
  generateId: t
}) {
  const n = e == null ? void 0 : e.filter(
    (r) => "functionCall" in r
  );
  return n == null || n.length === 0 ? void 0 : n.map((r) => ({
    type: "tool-call",
    toolCallId: t(),
    toolName: r.functionCall.name,
    args: JSON.stringify(r.functionCall.args),
    providerMetadata: r.thoughtSignature ? { google: { thoughtSignature: r.thoughtSignature } } : void 0
  }));
}
function ka({
  groundingMetadata: e,
  generateId: t
}) {
  var n, r, o, a;
  if (!(e != null && e.groundingChunks))
    return;
  const s = [];
  for (const i of e.groundingChunks)
    if (i.web != null)
      s.push({
        type: "source",
        sourceType: "url",
        id: t(),
        url: i.web.uri,
        title: (n = i.web.title) != null ? n : void 0
      });
    else if (i.retrievedContext != null) {
      const u = i.retrievedContext.uri, c = i.retrievedContext.fileSearchStore;
      if (u && (u.startsWith("http://") || u.startsWith("https://")))
        s.push({
          type: "source",
          sourceType: "url",
          id: t(),
          url: u,
          title: (r = i.retrievedContext.title) != null ? r : void 0
        });
      else if (u) {
        const p = (o = i.retrievedContext.title) != null ? o : "Unknown Document";
        let m = "application/octet-stream", g;
        u.endsWith(".pdf") ? (m = "application/pdf", g = u.split("/").pop()) : u.endsWith(".txt") ? (m = "text/plain", g = u.split("/").pop()) : u.endsWith(".docx") ? (m = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", g = u.split("/").pop()) : u.endsWith(".doc") ? (m = "application/msword", g = u.split("/").pop()) : (u.match(/\.(md|markdown)$/) && (m = "text/markdown"), g = u.split("/").pop()), s.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: m,
          title: p,
          filename: g
        });
      } else if (c) {
        const p = (a = i.retrievedContext.title) != null ? a : "Unknown Document";
        s.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: "application/octet-stream",
          title: p,
          filename: c.split("/").pop()
        });
      }
    }
  return s.length > 0 ? s : void 0;
}
var Yi = () => d({
  webSearchQueries: P(l()).nullish(),
  retrievalQueries: P(l()).nullish(),
  searchEntryPoint: d({ renderedContent: l() }).nullish(),
  groundingChunks: P(
    d({
      web: d({ uri: l(), title: l().nullish() }).nullish(),
      retrievedContext: d({
        uri: l().nullish(),
        title: l().nullish(),
        text: l().nullish(),
        fileSearchStore: l().nullish()
      }).nullish()
    })
  ).nullish(),
  groundingSupports: P(
    d({
      segment: d({
        startIndex: k().nullish(),
        endIndex: k().nullish(),
        text: l().nullish()
      }),
      segment_text: l().nullish(),
      groundingChunkIndices: P(k()).nullish(),
      supportChunkIndices: P(k()).nullish(),
      confidenceScores: P(k()).nullish(),
      confidenceScore: P(k()).nullish()
    })
  ).nullish(),
  retrievalMetadata: oe([
    d({
      webDynamicRetrievalScore: k()
    }),
    d({})
  ]).nullish()
}), Xi = () => d({
  parts: P(
    oe([
      // note: order matters since text can be fully empty
      d({
        functionCall: d({
          name: l(),
          args: le()
        }),
        thoughtSignature: l().nullish()
      }),
      d({
        inlineData: d({
          mimeType: l(),
          data: l()
        })
      }),
      d({
        executableCode: d({
          language: l(),
          code: l()
        }).nullish(),
        codeExecutionResult: d({
          outcome: l(),
          output: l()
        }).nullish(),
        text: l().nullish(),
        thought: J().nullish(),
        thoughtSignature: l().nullish()
      })
    ])
  ).nullish()
}), tr = () => d({
  category: l().nullish(),
  probability: l().nullish(),
  probabilityScore: k().nullish(),
  severity: l().nullish(),
  severityScore: k().nullish(),
  blocked: J().nullish()
}), Qi = d({
  cachedContentTokenCount: k().nullish(),
  thoughtsTokenCount: k().nullish(),
  promptTokenCount: k().nullish(),
  candidatesTokenCount: k().nullish(),
  totalTokenCount: k().nullish(),
  // https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/GenerateContentResponse#TrafficType
  trafficType: l().nullish()
}), el = () => d({
  urlMetadata: P(
    d({
      retrievedUrl: l(),
      urlRetrievalStatus: l()
    })
  )
}), mv = Y(
  () => U(
    d({
      candidates: P(
        d({
          content: Xi().nullish().or(d({}).strict()),
          finishReason: l().nullish(),
          safetyRatings: P(tr()).nullish(),
          groundingMetadata: Yi().nullish(),
          urlContextMetadata: el().nullish()
        })
      ),
      usageMetadata: Qi.nullish(),
      promptFeedback: d({
        blockReason: l().nullish(),
        safetyRatings: P(tr()).nullish()
      }).nullish()
    })
  )
), hv = Y(
  () => U(
    d({
      candidates: P(
        d({
          content: Xi().nullish(),
          finishReason: l().nullish(),
          safetyRatings: P(tr()).nullish(),
          groundingMetadata: Yi().nullish(),
          urlContextMetadata: el().nullish()
        })
      ).nullish(),
      usageMetadata: Qi.nullish(),
      promptFeedback: d({
        blockReason: l().nullish(),
        safetyRatings: P(tr()).nullish()
      }).nullish()
    })
  )
), gv = ht({
  id: "google.code_execution",
  name: "code_execution",
  inputSchema: d({
    language: l().describe("The programming language of the code."),
    code: l().describe("The code to be executed.")
  }),
  outputSchema: d({
    outcome: l().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
    output: l().describe("The output from the code execution.")
  })
}), vv = d({
  /** The names of the file_search_stores to retrieve from.
   *  Example: `fileSearchStores/my-file-search-store-123`
   */
  fileSearchStoreNames: P(l()).describe(
    "The names of the file_search_stores to retrieve from. Example: `fileSearchStores/my-file-search-store-123`"
  ),
  /** The number of file search retrieval chunks to retrieve. */
  topK: k().int().positive().describe("The number of file search retrieval chunks to retrieve.").optional(),
  /** Metadata filter to apply to the file search retrieval documents.
   *  See https://google.aip.dev/160 for the syntax of the filter expression.
   */
  metadataFilter: l().describe(
    "Metadata filter to apply to the file search retrieval documents. See https://google.aip.dev/160 for the syntax of the filter expression."
  ).optional()
}).passthrough(), yv = Y(
  () => U(vv)
), _v = at({
  id: "google.file_search",
  name: "file_search",
  inputSchema: yv
}), bv = at({
  id: "google.google_search",
  name: "google_search",
  inputSchema: Y(
    () => U(
      d({
        mode: Q(["MODE_DYNAMIC", "MODE_UNSPECIFIED"]).default("MODE_UNSPECIFIED"),
        dynamicThreshold: k().default(1)
      })
    )
  )
}), wv = at({
  id: "google.url_context",
  name: "url_context",
  inputSchema: Y(() => U(d({})))
}), xv = at({
  id: "google.vertex_rag_store",
  name: "vertex_rag_store",
  inputSchema: d({
    ragCorpus: l(),
    topK: k().optional()
  })
}), Iv = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch: bv,
  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext: wv,
  /**
   * Enables Retrieval Augmented Generation (RAG) via the Gemini File Search tool.
   * Must have name "file_search".
   *
   * @param fileSearchStoreNames - Fully-qualified File Search store resource names.
   * @param metadataFilter - Optional filter expression to restrict the files that can be retrieved.
   * @param topK - Optional result limit for the number of chunks returned from File Search.
   *
   * @see https://ai.google.dev/gemini-api/docs/file-search
   */
  fileSearch: _v,
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
  codeExecution: gv,
  /**
   * Creates a Vertex RAG Store tool that enables the model to perform RAG searches against a Vertex RAG Store.
   * Must have name "vertex_rag_store".
   */
  vertexRagStore: xv
}, kv = class {
  constructor(e, t, n) {
    this.modelId = e, this.settings = t, this.config = n, this.specificationVersion = "v2";
  }
  get maxImagesPerCall() {
    var e;
    return (e = this.settings.maxImagesPerCall) != null ? e : 4;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate(e) {
    var t, n, r;
    const {
      prompt: o,
      n: a = 1,
      size: s = "1024x1024",
      aspectRatio: i = "1:1",
      seed: u,
      providerOptions: c,
      headers: p,
      abortSignal: m
    } = e, g = [];
    s != null && g.push({
      type: "unsupported-setting",
      setting: "size",
      details: "This model does not support the `size` option. Use `aspectRatio` instead."
    }), u != null && g.push({
      type: "unsupported-setting",
      setting: "seed",
      details: "This model does not support the `seed` option through this provider."
    });
    const f = await Ve({
      provider: "google",
      providerOptions: c,
      schema: Sv
    }), y = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), _ = {
      sampleCount: a
    };
    i != null && (_.aspectRatio = i), f && Object.assign(_, f);
    const b = {
      instances: [{ prompt: o }],
      parameters: _
    }, { responseHeaders: h, value: v } = await Ce({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: Ae(await Oe(this.config.headers), p),
      body: b,
      failedResponseHandler: Sn,
      successfulResponseHandler: Ue(
        Tv
      ),
      abortSignal: m,
      fetch: this.config.fetch
    });
    return {
      images: v.predictions.map(
        (I) => I.bytesBase64Encoded
      ),
      warnings: g ?? [],
      providerMetadata: {
        google: {
          images: v.predictions.map((I) => ({
            // Add any prediction-specific metadata here
          }))
        }
      },
      response: {
        timestamp: y,
        modelId: this.modelId,
        headers: h
      }
    };
  }
}, Tv = Y(
  () => U(
    d({
      predictions: P(d({ bytesBase64Encoded: l() })).default([])
    })
  )
), Sv = Y(
  () => U(
    d({
      personGeneration: Q(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      aspectRatio: Q(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish()
    })
  )
);
function Ev(e = {}) {
  var t, n;
  const r = (t = An(e.baseURL)) != null ? t : "https://generativelanguage.googleapis.com/v1beta", o = (n = e.name) != null ? n : "google.generative-ai", a = () => ze(
    {
      "x-goog-api-key": dr({
        apiKey: e.apiKey,
        environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
        description: "Google Generative AI"
      }),
      ...e.headers
    },
    `ai-sdk/google/${nv}`
  ), s = (p) => {
    var m;
    return new pv(p, {
      provider: o,
      baseURL: r,
      headers: a,
      generateId: (m = e.generateId) != null ? m : Fe,
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
  }, i = (p) => new av(p, {
    provider: o,
    baseURL: r,
    headers: a,
    fetch: e.fetch
  }), u = (p, m = {}) => new kv(p, m, {
    provider: o,
    baseURL: r,
    headers: a,
    fetch: e.fetch
  }), c = function(p) {
    if (new.target)
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    return s(p);
  };
  return c.languageModel = s, c.chat = s, c.generativeAI = s, c.embedding = i, c.textEmbedding = i, c.textEmbeddingModel = i, c.image = u, c.imageModel = u, c.tools = Iv, c;
}
Ev();
function Cv(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { role: r, content: o } = e[n], a = n === e.length - 1;
    switch (r) {
      case "system": {
        t.push({ role: "system", content: o });
        break;
      }
      case "user": {
        t.push({
          role: "user",
          content: o.map((s) => {
            switch (s.type) {
              case "text":
                return { type: "text", text: s.text };
              case "file":
                if (s.mediaType.startsWith("image/")) {
                  const i = s.mediaType === "image/*" ? "image/jpeg" : s.mediaType;
                  return {
                    type: "image_url",
                    image_url: s.data instanceof URL ? s.data.toString() : `data:${i};base64,${ft(s.data)}`
                  };
                } else {
                  if (s.mediaType === "application/pdf")
                    return {
                      type: "document_url",
                      document_url: s.data.toString()
                    };
                  throw new ke({
                    functionality: "Only images and PDF file parts are supported"
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        let s = "";
        const i = [];
        for (const u of o)
          switch (u.type) {
            case "text": {
              s += u.text;
              break;
            }
            case "tool-call": {
              i.push({
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
              s += u.text;
              break;
            }
            default:
              throw new Error(
                `Unsupported content type in assistant message: ${u.type}`
              );
          }
        t.push({
          role: "assistant",
          content: s,
          prefix: a ? !0 : void 0,
          tool_calls: i.length > 0 ? i : void 0
        });
        break;
      }
      case "tool": {
        for (const s of o) {
          const i = s.output;
          let u;
          switch (i.type) {
            case "text":
            case "error-text":
              u = i.value;
              break;
            case "content":
            case "json":
            case "error-json":
              u = JSON.stringify(i.value);
              break;
          }
          t.push({
            role: "tool",
            name: s.toolName,
            tool_call_id: s.toolCallId,
            content: u
          });
        }
        break;
      }
      default: {
        const s = r;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  }
  return t;
}
function Ta({
  id: e,
  model: t,
  created: n
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: n != null ? new Date(n * 1e3) : void 0
  };
}
function Sa(e) {
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
var Mv = d({
  /**
  Whether to inject a safety prompt before all conversations.
  
  Defaults to `false`.
     */
  safePrompt: J().optional(),
  documentImageLimit: k().optional(),
  documentPageLimit: k().optional(),
  /**
   * Whether to use structured outputs.
   *
   * @default true
   */
  structuredOutputs: J().optional(),
  /**
   * Whether to use strict JSON schema validation.
   *
   * @default false
   */
  strictJsonSchema: J().optional(),
  /**
   * Whether to enable parallel function calling during tool use.
   * When set to false, the model will use at most one tool per response.
   *
   * @default true
   */
  parallelToolCalls: J().optional()
}), Rv = d({
  object: x("error"),
  message: l(),
  type: l(),
  param: l().nullable(),
  code: l().nullable()
}), Qr = bt({
  errorSchema: Rv,
  errorToMessage: (e) => e.message
});
function Ov({
  tools: e,
  toolChoice: t
}) {
  e = e != null && e.length ? e : void 0;
  const n = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: n };
  const r = [];
  for (const a of e)
    a.type === "provider-defined" ? n.push({ type: "unsupported-tool", tool: a }) : r.push({
      type: "function",
      function: {
        name: a.name,
        description: a.description,
        parameters: a.inputSchema
      }
    });
  if (t == null)
    return { tools: r, toolChoice: void 0, toolWarnings: n };
  const o = t.type;
  switch (o) {
    case "auto":
    case "none":
      return { tools: r, toolChoice: o, toolWarnings: n };
    case "required":
      return { tools: r, toolChoice: "any", toolWarnings: n };
    // mistral does not support tool mode directly,
    // so we filter the tools and force the tool choice through 'any'
    case "tool":
      return {
        tools: r.filter(
          (a) => a.function.name === t.toolName
        ),
        toolChoice: "any",
        toolWarnings: n
      };
    default: {
      const a = o;
      throw new ke({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
var Nv = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      "application/pdf": [/^https:\/\/.*$/]
    };
    var n;
    this.modelId = e, this.config = t, this.generateId = (n = t.generateId) != null ? n : Fe;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: n,
    topP: r,
    topK: o,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    seed: c,
    providerOptions: p,
    tools: m,
    toolChoice: g
  }) {
    var f, y, _, b;
    const h = [], v = (f = await Ve({
      provider: "mistral",
      providerOptions: p,
      schema: Mv
    })) != null ? f : {};
    o != null && h.push({
      type: "unsupported-setting",
      setting: "topK"
    }), a != null && h.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), s != null && h.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), i != null && h.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    });
    const I = (y = v.structuredOutputs) != null ? y : !0, w = (_ = v.strictJsonSchema) != null ? _ : !1;
    (u == null ? void 0 : u.type) === "json" && !(u != null && u.schema) && (e = Qm({
      messages: e,
      schema: u.schema
    }));
    const E = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: v.safePrompt,
      // standardized settings:
      max_tokens: t,
      temperature: n,
      top_p: r,
      random_seed: c,
      // response format:
      response_format: (u == null ? void 0 : u.type) === "json" ? I && (u == null ? void 0 : u.schema) != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: w,
          name: (b = u.name) != null ? b : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: v.documentImageLimit,
      document_page_limit: v.documentPageLimit,
      // messages:
      messages: Cv(e)
    }, {
      tools: $,
      toolChoice: S,
      toolWarnings: O
    } = Ov({
      tools: m,
      toolChoice: g
    });
    return {
      args: {
        ...E,
        tools: $,
        tool_choice: S,
        ...$ != null && v.parallelToolCalls !== void 0 ? { parallel_tool_calls: v.parallelToolCalls } : {}
      },
      warnings: [...h, ...O]
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: n } = await this.getArgs(e), {
      responseHeaders: r,
      value: o,
      rawValue: a
    } = await Ce({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ae(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Qr,
      successfulResponseHandler: Ue(
        Av
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), s = o.choices[0], i = [];
    if (s.message.content != null && Array.isArray(s.message.content))
      for (const u of s.message.content)
        if (u.type === "thinking") {
          const c = Ea(u.thinking);
          c.length > 0 && i.push({ type: "reasoning", text: c });
        } else u.type === "text" && u.text.length > 0 && i.push({ type: "text", text: u.text });
    else {
      const u = Ca(s.message.content);
      u != null && u.length > 0 && i.push({ type: "text", text: u });
    }
    if (s.message.tool_calls != null)
      for (const u of s.message.tool_calls)
        i.push({
          type: "tool-call",
          toolCallId: u.id,
          toolName: u.function.name,
          input: u.function.arguments
        });
    return {
      content: i,
      finishReason: Sa(s.finish_reason),
      usage: {
        inputTokens: o.usage.prompt_tokens,
        outputTokens: o.usage.completion_tokens,
        totalTokens: o.usage.total_tokens
      },
      request: { body: t },
      response: {
        ...Ta(o),
        headers: r,
        body: a
      },
      warnings: n
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = { ...t, stream: !0 }, { responseHeaders: o, value: a } = await Ce({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ae(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: Qr,
      successfulResponseHandler: Gt(
        $v
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let s = "unknown";
    const i = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let u = !0, c = !1, p = null;
    const m = this.generateId;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(g) {
            g.enqueue({ type: "stream-start", warnings: n });
          },
          transform(g, f) {
            if (e.includeRawChunks && f.enqueue({ type: "raw", rawValue: g.rawValue }), !g.success) {
              f.enqueue({ type: "error", error: g.error });
              return;
            }
            const y = g.value;
            u && (u = !1, f.enqueue({
              type: "response-metadata",
              ...Ta(y)
            })), y.usage != null && (i.inputTokens = y.usage.prompt_tokens, i.outputTokens = y.usage.completion_tokens, i.totalTokens = y.usage.total_tokens);
            const _ = y.choices[0], b = _.delta, h = Ca(b.content);
            if (b.content != null && Array.isArray(b.content)) {
              for (const v of b.content)
                if (v.type === "thinking") {
                  const I = Ea(v.thinking);
                  I.length > 0 && (p == null && (c && (f.enqueue({ type: "text-end", id: "0" }), c = !1), p = m(), f.enqueue({
                    type: "reasoning-start",
                    id: p
                  })), f.enqueue({
                    type: "reasoning-delta",
                    id: p,
                    delta: I
                  }));
                }
            }
            if (h != null && h.length > 0 && (c || (p != null && (f.enqueue({
              type: "reasoning-end",
              id: p
            }), p = null), f.enqueue({ type: "text-start", id: "0" }), c = !0), f.enqueue({
              type: "text-delta",
              id: "0",
              delta: h
            })), (b == null ? void 0 : b.tool_calls) != null)
              for (const v of b.tool_calls) {
                const I = v.id, w = v.function.name, E = v.function.arguments;
                f.enqueue({
                  type: "tool-input-start",
                  id: I,
                  toolName: w
                }), f.enqueue({
                  type: "tool-input-delta",
                  id: I,
                  delta: E
                }), f.enqueue({
                  type: "tool-input-end",
                  id: I
                }), f.enqueue({
                  type: "tool-call",
                  toolCallId: I,
                  toolName: w,
                  input: E
                });
              }
            _.finish_reason != null && (s = Sa(_.finish_reason));
          },
          flush(g) {
            p != null && g.enqueue({
              type: "reasoning-end",
              id: p
            }), c && g.enqueue({ type: "text-end", id: "0" }), g.enqueue({
              type: "finish",
              finishReason: s,
              usage: i
            });
          }
        })
      ),
      request: { body: r },
      response: { headers: o }
    };
  }
};
function Ea(e) {
  return e.filter((t) => t.type === "text").map((t) => t.text).join("");
}
function Ca(e) {
  if (typeof e == "string")
    return e;
  if (e == null)
    return;
  const t = [];
  for (const n of e) {
    const { type: r } = n;
    switch (r) {
      case "text":
        t.push(n.text);
        break;
      case "thinking":
      case "image_url":
      case "reference":
        break;
      default: {
        const o = r;
        throw new Error(`Unsupported type: ${o}`);
      }
    }
  }
  return t.length ? t.join("") : void 0;
}
var tl = oe([
  l(),
  P(
    de("type", [
      d({
        type: x("text"),
        text: l()
      }),
      d({
        type: x("image_url"),
        image_url: oe([
          l(),
          d({
            url: l(),
            detail: l().nullable()
          })
        ])
      }),
      d({
        type: x("reference"),
        reference_ids: P(k())
      }),
      d({
        type: x("thinking"),
        thinking: P(
          d({
            type: x("text"),
            text: l()
          })
        )
      })
    ])
  )
]).nullish(), nl = d({
  prompt_tokens: k(),
  completion_tokens: k(),
  total_tokens: k()
}), Av = d({
  id: l().nullish(),
  created: k().nullish(),
  model: l().nullish(),
  choices: P(
    d({
      message: d({
        role: x("assistant"),
        content: tl,
        tool_calls: P(
          d({
            id: l(),
            function: d({ name: l(), arguments: l() })
          })
        ).nullish()
      }),
      index: k(),
      finish_reason: l().nullish()
    })
  ),
  object: x("chat.completion"),
  usage: nl
}), $v = d({
  id: l().nullish(),
  created: k().nullish(),
  model: l().nullish(),
  choices: P(
    d({
      delta: d({
        role: Q(["assistant"]).optional(),
        content: tl,
        tool_calls: P(
          d({
            id: l(),
            function: d({ name: l(), arguments: l() })
          })
        ).nullish()
      }),
      finish_reason: l().nullish(),
      index: k()
    })
  ),
  usage: nl.nullish()
}), Pv = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 32, this.supportsParallelCalls = !1, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    abortSignal: t,
    headers: n
  }) {
    if (e.length > this.maxEmbeddingsPerCall)
      throw new ao({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const {
      responseHeaders: r,
      value: o,
      rawValue: a
    } = await Ce({
      url: `${this.config.baseURL}/embeddings`,
      headers: Ae(this.config.headers(), n),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Qr,
      successfulResponseHandler: Ue(
        jv
      ),
      abortSignal: t,
      fetch: this.config.fetch
    });
    return {
      embeddings: o.data.map((s) => s.embedding),
      usage: o.usage ? { tokens: o.usage.prompt_tokens } : void 0,
      response: { headers: r, body: a }
    };
  }
}, jv = d({
  data: P(d({ embedding: P(k()) })),
  usage: d({ prompt_tokens: k() }).nullish()
}), qv = "2.0.25";
function Dv(e = {}) {
  var t;
  const n = (t = An(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", r = () => ze(
    {
      Authorization: `Bearer ${dr({
        apiKey: e.apiKey,
        environmentVariableName: "MISTRAL_API_KEY",
        description: "Mistral"
      })}`,
      ...e.headers
    },
    `ai-sdk/mistral/${qv}`
  ), o = (i) => new Nv(i, {
    provider: "mistral.chat",
    baseURL: n,
    headers: r,
    fetch: e.fetch,
    generateId: e.generateId
  }), a = (i) => new Pv(i, {
    provider: "mistral.embedding",
    baseURL: n,
    headers: r,
    fetch: e.fetch
  }), s = function(i) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return o(i);
  };
  return s.languageModel = o, s.chat = o, s.embedding = a, s.textEmbedding = a, s.textEmbeddingModel = a, s.imageModel = (i) => {
    throw new He({ modelId: i, modelType: "imageModel" });
  }, s;
}
Dv();
var wo = d({
  error: d({
    message: l(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l().nullish(),
    param: pt().nullish(),
    code: oe([l(), k()]).nullish()
  })
}), wt = bt({
  errorSchema: wo,
  errorToMessage: (e) => e.error.message
});
function zv({
  prompt: e,
  systemMessageMode: t = "system"
}) {
  const n = [], r = [];
  for (const { role: o, content: a } of e)
    switch (o) {
      case "system": {
        switch (t) {
          case "system": {
            n.push({ role: "system", content: a });
            break;
          }
          case "developer": {
            n.push({ role: "developer", content: a });
            break;
          }
          case "remove": {
            r.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const s = t;
            throw new Error(
              `Unsupported system message mode: ${s}`
            );
          }
        }
        break;
      }
      case "user": {
        if (a.length === 1 && a[0].type === "text") {
          n.push({ role: "user", content: a[0].text });
          break;
        }
        n.push({
          role: "user",
          content: a.map((s, i) => {
            var u, c, p;
            switch (s.type) {
              case "text":
                return { type: "text", text: s.text };
              case "file":
                if (s.mediaType.startsWith("image/")) {
                  const m = s.mediaType === "image/*" ? "image/jpeg" : s.mediaType;
                  return {
                    type: "image_url",
                    image_url: {
                      url: s.data instanceof URL ? s.data.toString() : `data:${m};base64,${ft(s.data)}`,
                      // OpenAI specific extension: image detail
                      detail: (c = (u = s.providerOptions) == null ? void 0 : u.openai) == null ? void 0 : c.imageDetail
                    }
                  };
                } else if (s.mediaType.startsWith("audio/")) {
                  if (s.data instanceof URL)
                    throw new ke({
                      functionality: "audio file parts with URLs"
                    });
                  switch (s.mediaType) {
                    case "audio/wav":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: ft(s.data),
                          format: "wav"
                        }
                      };
                    case "audio/mp3":
                    case "audio/mpeg":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: ft(s.data),
                          format: "mp3"
                        }
                      };
                    default:
                      throw new ke({
                        functionality: `audio content parts with media type ${s.mediaType}`
                      });
                  }
                } else if (s.mediaType === "application/pdf") {
                  if (s.data instanceof URL)
                    throw new ke({
                      functionality: "PDF file parts with URLs"
                    });
                  return {
                    type: "file",
                    file: typeof s.data == "string" && s.data.startsWith("file-") ? { file_id: s.data } : {
                      filename: (p = s.filename) != null ? p : `part-${i}.pdf`,
                      file_data: `data:application/pdf;base64,${ft(s.data)}`
                    }
                  };
                } else
                  throw new ke({
                    functionality: `file part media type ${s.mediaType}`
                  });
            }
          })
        });
        break;
      }
      case "assistant": {
        let s = "";
        const i = [];
        for (const u of a)
          switch (u.type) {
            case "text": {
              s += u.text;
              break;
            }
            case "tool-call": {
              i.push({
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
        n.push({
          role: "assistant",
          content: s,
          tool_calls: i.length > 0 ? i : void 0
        });
        break;
      }
      case "tool": {
        for (const s of a) {
          const i = s.output;
          let u;
          switch (i.type) {
            case "text":
            case "error-text":
              u = i.value;
              break;
            case "content":
            case "json":
            case "error-json":
              u = JSON.stringify(i.value);
              break;
          }
          n.push({
            role: "tool",
            tool_call_id: s.toolCallId,
            content: u
          });
        }
        break;
      }
      default: {
        const s = o;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  return { messages: n, warnings: r };
}
function Nr({
  id: e,
  model: t,
  created: n
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: n ? new Date(n * 1e3) : void 0
  };
}
function Ma(e) {
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
var Uv = Re(
  () => U(
    d({
      id: l().nullish(),
      created: k().nullish(),
      model: l().nullish(),
      choices: P(
        d({
          message: d({
            role: x("assistant").nullish(),
            content: l().nullish(),
            tool_calls: P(
              d({
                id: l().nullish(),
                type: x("function"),
                function: d({
                  name: l(),
                  arguments: l()
                })
              })
            ).nullish(),
            annotations: P(
              d({
                type: x("url_citation"),
                start_index: k(),
                end_index: k(),
                url: l(),
                title: l()
              })
            ).nullish()
          }),
          index: k(),
          logprobs: d({
            content: P(
              d({
                token: l(),
                logprob: k(),
                top_logprobs: P(
                  d({
                    token: l(),
                    logprob: k()
                  })
                )
              })
            ).nullish()
          }).nullish(),
          finish_reason: l().nullish()
        })
      ),
      usage: d({
        prompt_tokens: k().nullish(),
        completion_tokens: k().nullish(),
        total_tokens: k().nullish(),
        prompt_tokens_details: d({
          cached_tokens: k().nullish()
        }).nullish(),
        completion_tokens_details: d({
          reasoning_tokens: k().nullish(),
          accepted_prediction_tokens: k().nullish(),
          rejected_prediction_tokens: k().nullish()
        }).nullish()
      }).nullish()
    })
  )
), Zv = Re(
  () => U(
    oe([
      d({
        id: l().nullish(),
        created: k().nullish(),
        model: l().nullish(),
        choices: P(
          d({
            delta: d({
              role: Q(["assistant"]).nullish(),
              content: l().nullish(),
              tool_calls: P(
                d({
                  index: k(),
                  id: l().nullish(),
                  type: x("function").nullish(),
                  function: d({
                    name: l().nullish(),
                    arguments: l().nullish()
                  })
                })
              ).nullish(),
              annotations: P(
                d({
                  type: x("url_citation"),
                  start_index: k(),
                  end_index: k(),
                  url: l(),
                  title: l()
                })
              ).nullish()
            }).nullish(),
            logprobs: d({
              content: P(
                d({
                  token: l(),
                  logprob: k(),
                  top_logprobs: P(
                    d({
                      token: l(),
                      logprob: k()
                    })
                  )
                })
              ).nullish()
            }).nullish(),
            finish_reason: l().nullish(),
            index: k()
          })
        ),
        usage: d({
          prompt_tokens: k().nullish(),
          completion_tokens: k().nullish(),
          total_tokens: k().nullish(),
          prompt_tokens_details: d({
            cached_tokens: k().nullish()
          }).nullish(),
          completion_tokens_details: d({
            reasoning_tokens: k().nullish(),
            accepted_prediction_tokens: k().nullish(),
            rejected_prediction_tokens: k().nullish()
          }).nullish()
        }).nullish()
      }),
      wo
    ])
  )
), Lv = Re(
  () => U(
    d({
      /**
       * Modify the likelihood of specified tokens appearing in the completion.
       *
       * Accepts a JSON object that maps tokens (specified by their token ID in
       * the GPT tokenizer) to an associated bias value from -100 to 100.
       */
      logitBias: Pe(Bm(), k()).optional(),
      /**
       * Return the log probabilities of the tokens.
       *
       * Setting to true will return the log probabilities of the tokens that
       * were generated.
       *
       * Setting to a number will return the log probabilities of the top n
       * tokens that were generated.
       */
      logprobs: oe([J(), k()]).optional(),
      /**
       * Whether to enable parallel function calling during tool use. Default to true.
       */
      parallelToolCalls: J().optional(),
      /**
       * A unique identifier representing your end-user, which can help OpenAI to
       * monitor and detect abuse.
       */
      user: l().optional(),
      /**
       * Reasoning effort for reasoning models. Defaults to `medium`.
       */
      reasoningEffort: Q(["none", "minimal", "low", "medium", "high"]).optional(),
      /**
       * Maximum number of completion tokens to generate. Useful for reasoning models.
       */
      maxCompletionTokens: k().optional(),
      /**
       * Whether to enable persistence in responses API.
       */
      store: J().optional(),
      /**
       * Metadata to associate with the request.
       */
      metadata: Pe(l().max(64), l().max(512)).optional(),
      /**
       * Parameters for prediction mode.
       */
      prediction: Pe(l(), pt()).optional(),
      /**
       * Whether to use structured outputs.
       *
       * @default true
       */
      structuredOutputs: J().optional(),
      /**
       * Service tier for the request.
       * - 'auto': Default service tier. The request will be processed with the service tier configured in the
       *           Project settings. Unless otherwise configured, the Project will use 'default'.
       * - 'flex': 50% cheaper processing at the cost of increased latency. Only available for o3 and o4-mini models.
       * - 'priority': Higher-speed processing with predictably low latency at premium cost. Available for Enterprise customers.
       * - 'default': The request will be processed with the standard pricing and performance for the selected model.
       *
       * @default 'auto'
       */
      serviceTier: Q(["auto", "flex", "priority", "default"]).optional(),
      /**
       * Whether to use strict JSON schema validation.
       *
       * @default false
       */
      strictJsonSchema: J().optional(),
      /**
       * Controls the verbosity of the model's responses.
       * Lower values will result in more concise responses, while higher values will result in more verbose responses.
       */
      textVerbosity: Q(["low", "medium", "high"]).optional(),
      /**
       * A cache key for prompt caching. Allows manual control over prompt caching behavior.
       * Useful for improving cache hit rates and working around automatic caching issues.
       */
      promptCacheKey: l().optional(),
      /**
       * The retention policy for the prompt cache.
       * - 'in_memory': Default. Standard prompt caching behavior.
       * - '24h': Extended prompt caching that keeps cached prefixes active for up to 24 hours.
       *          Currently only available for 5.1 series models.
       *
       * @default 'in_memory'
       */
      promptCacheRetention: Q(["in_memory", "24h"]).optional(),
      /**
       * A stable identifier used to help detect users of your application
       * that may be violating OpenAI's usage policies. The IDs should be a
       * string that uniquely identifies each user. We recommend hashing their
       * username or email address, in order to avoid sending us any identifying
       * information.
       */
      safetyIdentifier: l().optional()
    })
  )
);
function Fv({
  tools: e,
  toolChoice: t,
  structuredOutputs: n,
  strictJsonSchema: r
}) {
  e = e != null && e.length ? e : void 0;
  const o = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: o };
  const a = [];
  for (const i of e)
    switch (i.type) {
      case "function":
        a.push({
          type: "function",
          function: {
            name: i.name,
            description: i.description,
            parameters: i.inputSchema,
            strict: n ? r : void 0
          }
        });
        break;
      default:
        o.push({ type: "unsupported-tool", tool: i });
        break;
    }
  if (t == null)
    return { tools: a, toolChoice: void 0, toolWarnings: o };
  const s = t.type;
  switch (s) {
    case "auto":
    case "none":
    case "required":
      return { tools: a, toolChoice: s, toolWarnings: o };
    case "tool":
      return {
        tools: a,
        toolChoice: {
          type: "function",
          function: {
            name: t.toolName
          }
        },
        toolWarnings: o
      };
    default: {
      const i = s;
      throw new ke({
        functionality: `tool choice type: ${i}`
      });
    }
  }
}
var Vv = class {
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
    temperature: n,
    topP: r,
    topK: o,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    seed: c,
    tools: p,
    toolChoice: m,
    providerOptions: g
  }) {
    var f, y, _, b;
    const h = [], v = (f = await Ve({
      provider: "openai",
      providerOptions: g,
      schema: Lv
    })) != null ? f : {}, I = (y = v.structuredOutputs) != null ? y : !0;
    o != null && h.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (u == null ? void 0 : u.type) === "json" && u.schema != null && !I && h.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const { messages: w, warnings: E } = zv(
      {
        prompt: e,
        systemMessageMode: Jv(this.modelId)
      }
    );
    h.push(...E);
    const $ = (_ = v.strictJsonSchema) != null ? _ : !1, S = {
      // model id:
      model: this.modelId,
      // model specific settings:
      logit_bias: v.logitBias,
      logprobs: v.logprobs === !0 || typeof v.logprobs == "number" ? !0 : void 0,
      top_logprobs: typeof v.logprobs == "number" ? v.logprobs : typeof v.logprobs == "boolean" && v.logprobs ? 0 : void 0,
      user: v.user,
      parallel_tool_calls: v.parallelToolCalls,
      // standardized settings:
      max_tokens: t,
      temperature: n,
      top_p: r,
      frequency_penalty: a,
      presence_penalty: s,
      response_format: (u == null ? void 0 : u.type) === "json" ? I && u.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: $,
          name: (b = u.name) != null ? b : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      stop: i,
      seed: c,
      verbosity: v.textVerbosity,
      // openai specific settings:
      // TODO AI SDK 6: remove, we auto-map maxOutputTokens now
      max_completion_tokens: v.maxCompletionTokens,
      store: v.store,
      metadata: v.metadata,
      prediction: v.prediction,
      reasoning_effort: v.reasoningEffort,
      service_tier: v.serviceTier,
      prompt_cache_key: v.promptCacheKey,
      prompt_cache_retention: v.promptCacheRetention,
      safety_identifier: v.safetyIdentifier,
      // messages:
      messages: w
    };
    rl(this.modelId) ? (S.temperature != null && (S.temperature = void 0, h.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), S.top_p != null && (S.top_p = void 0, h.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })), S.frequency_penalty != null && (S.frequency_penalty = void 0, h.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), S.presence_penalty != null && (S.presence_penalty = void 0, h.push({
      type: "unsupported-setting",
      setting: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), S.logit_bias != null && (S.logit_bias = void 0, h.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), S.logprobs != null && (S.logprobs = void 0, h.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    })), S.top_logprobs != null && (S.top_logprobs = void 0, h.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), S.max_tokens != null && (S.max_completion_tokens == null && (S.max_completion_tokens = S.max_tokens), S.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && S.temperature != null && (S.temperature = void 0, h.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for the search preview models and has been removed."
    })), v.serviceTier === "flex" && !Gv(this.modelId) && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), S.service_tier = void 0), v.serviceTier === "priority" && !Bv(this.modelId) && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), S.service_tier = void 0);
    const {
      tools: O,
      toolChoice: R,
      toolWarnings: C
    } = Fv({
      tools: p,
      toolChoice: m,
      structuredOutputs: I,
      strictJsonSchema: $
    });
    return {
      args: {
        ...S,
        tools: O,
        tool_choice: R
      },
      warnings: [...h, ...C]
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, p, m, g, f, y;
    const { args: _, warnings: b } = await this.getArgs(e), {
      responseHeaders: h,
      value: v,
      rawValue: I
    } = await Ce({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      body: _,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        Uv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), w = v.choices[0], E = [], $ = w.message.content;
    $ != null && $.length > 0 && E.push({ type: "text", text: $ });
    for (const C of (t = w.message.tool_calls) != null ? t : [])
      E.push({
        type: "tool-call",
        toolCallId: (n = C.id) != null ? n : Fe(),
        toolName: C.function.name,
        input: C.function.arguments
      });
    for (const C of (r = w.message.annotations) != null ? r : [])
      E.push({
        type: "source",
        sourceType: "url",
        id: Fe(),
        url: C.url,
        title: C.title
      });
    const S = (o = v.usage) == null ? void 0 : o.completion_tokens_details, O = (a = v.usage) == null ? void 0 : a.prompt_tokens_details, R = { openai: {} };
    return (S == null ? void 0 : S.accepted_prediction_tokens) != null && (R.openai.acceptedPredictionTokens = S == null ? void 0 : S.accepted_prediction_tokens), (S == null ? void 0 : S.rejected_prediction_tokens) != null && (R.openai.rejectedPredictionTokens = S == null ? void 0 : S.rejected_prediction_tokens), ((s = w.logprobs) == null ? void 0 : s.content) != null && (R.openai.logprobs = w.logprobs.content), {
      content: E,
      finishReason: Ma(w.finish_reason),
      usage: {
        inputTokens: (u = (i = v.usage) == null ? void 0 : i.prompt_tokens) != null ? u : void 0,
        outputTokens: (p = (c = v.usage) == null ? void 0 : c.completion_tokens) != null ? p : void 0,
        totalTokens: (g = (m = v.usage) == null ? void 0 : m.total_tokens) != null ? g : void 0,
        reasoningTokens: (f = S == null ? void 0 : S.reasoning_tokens) != null ? f : void 0,
        cachedInputTokens: (y = O == null ? void 0 : O.cached_tokens) != null ? y : void 0
      },
      request: { body: _ },
      response: {
        ...Nr(v),
        headers: h,
        body: I
      },
      warnings: b,
      providerMetadata: R
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = {
      ...t,
      stream: !0,
      stream_options: {
        include_usage: !0
      }
    }, { responseHeaders: o, value: a } = await Ce({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: wt,
      successfulResponseHandler: Gt(
        Zv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), s = [];
    let i = "unknown";
    const u = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let c = !1, p = !1;
    const m = { openai: {} };
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(g) {
            g.enqueue({ type: "stream-start", warnings: n });
          },
          transform(g, f) {
            var y, _, b, h, v, I, w, E, $, S, O, R, C, N, Z, j, D, X, z, V, ne, be, ae, Ie;
            if (e.includeRawChunks && f.enqueue({ type: "raw", rawValue: g.rawValue }), !g.success) {
              i = "error", f.enqueue({ type: "error", error: g.error });
              return;
            }
            const M = g.value;
            if ("error" in M) {
              i = "error", f.enqueue({ type: "error", error: M.error });
              return;
            }
            if (!c) {
              const T = Nr(M);
              Object.values(T).some(Boolean) && (c = !0, f.enqueue({
                type: "response-metadata",
                ...Nr(M)
              }));
            }
            M.usage != null && (u.inputTokens = (y = M.usage.prompt_tokens) != null ? y : void 0, u.outputTokens = (_ = M.usage.completion_tokens) != null ? _ : void 0, u.totalTokens = (b = M.usage.total_tokens) != null ? b : void 0, u.reasoningTokens = (v = (h = M.usage.completion_tokens_details) == null ? void 0 : h.reasoning_tokens) != null ? v : void 0, u.cachedInputTokens = (w = (I = M.usage.prompt_tokens_details) == null ? void 0 : I.cached_tokens) != null ? w : void 0, ((E = M.usage.completion_tokens_details) == null ? void 0 : E.accepted_prediction_tokens) != null && (m.openai.acceptedPredictionTokens = ($ = M.usage.completion_tokens_details) == null ? void 0 : $.accepted_prediction_tokens), ((S = M.usage.completion_tokens_details) == null ? void 0 : S.rejected_prediction_tokens) != null && (m.openai.rejectedPredictionTokens = (O = M.usage.completion_tokens_details) == null ? void 0 : O.rejected_prediction_tokens));
            const F = M.choices[0];
            if ((F == null ? void 0 : F.finish_reason) != null && (i = Ma(F.finish_reason)), ((R = F == null ? void 0 : F.logprobs) == null ? void 0 : R.content) != null && (m.openai.logprobs = F.logprobs.content), (F == null ? void 0 : F.delta) == null)
              return;
            const q = F.delta;
            if (q.content != null && (p || (f.enqueue({ type: "text-start", id: "0" }), p = !0), f.enqueue({
              type: "text-delta",
              id: "0",
              delta: q.content
            })), q.tool_calls != null)
              for (const T of q.tool_calls) {
                const W = T.index;
                if (s[W] == null) {
                  if (T.type !== "function")
                    throw new Sr({
                      data: T,
                      message: "Expected 'function' type."
                    });
                  if (T.id == null)
                    throw new Sr({
                      data: T,
                      message: "Expected 'id' to be a string."
                    });
                  if (((C = T.function) == null ? void 0 : C.name) == null)
                    throw new Sr({
                      data: T,
                      message: "Expected 'function.name' to be a string."
                    });
                  f.enqueue({
                    type: "tool-input-start",
                    id: T.id,
                    toolName: T.function.name
                  }), s[W] = {
                    id: T.id,
                    type: "function",
                    function: {
                      name: T.function.name,
                      arguments: (N = T.function.arguments) != null ? N : ""
                    },
                    hasFinished: !1
                  };
                  const fe = s[W];
                  ((Z = fe.function) == null ? void 0 : Z.name) != null && ((j = fe.function) == null ? void 0 : j.arguments) != null && (fe.function.arguments.length > 0 && f.enqueue({
                    type: "tool-input-delta",
                    id: fe.id,
                    delta: fe.function.arguments
                  }), ma(fe.function.arguments) && (f.enqueue({
                    type: "tool-input-end",
                    id: fe.id
                  }), f.enqueue({
                    type: "tool-call",
                    toolCallId: (D = fe.id) != null ? D : Fe(),
                    toolName: fe.function.name,
                    input: fe.function.arguments
                  }), fe.hasFinished = !0));
                  continue;
                }
                const ce = s[W];
                ce.hasFinished || (((X = T.function) == null ? void 0 : X.arguments) != null && (ce.function.arguments += (V = (z = T.function) == null ? void 0 : z.arguments) != null ? V : ""), f.enqueue({
                  type: "tool-input-delta",
                  id: ce.id,
                  delta: (ne = T.function.arguments) != null ? ne : ""
                }), ((be = ce.function) == null ? void 0 : be.name) != null && ((ae = ce.function) == null ? void 0 : ae.arguments) != null && ma(ce.function.arguments) && (f.enqueue({
                  type: "tool-input-end",
                  id: ce.id
                }), f.enqueue({
                  type: "tool-call",
                  toolCallId: (Ie = ce.id) != null ? Ie : Fe(),
                  toolName: ce.function.name,
                  input: ce.function.arguments
                }), ce.hasFinished = !0));
              }
            if (q.annotations != null)
              for (const T of q.annotations)
                f.enqueue({
                  type: "source",
                  sourceType: "url",
                  id: Fe(),
                  url: T.url,
                  title: T.title
                });
          },
          flush(g) {
            p && g.enqueue({ type: "text-end", id: "0" }), g.enqueue({
              type: "finish",
              finishReason: i,
              usage: u,
              ...m != null ? { providerMetadata: m } : {}
            });
          }
        })
      ),
      request: { body: r },
      response: { headers: o }
    };
  }
};
function rl(e) {
  return (e.startsWith("o") || e.startsWith("gpt-5")) && !e.startsWith("gpt-5-chat");
}
function Gv(e) {
  return e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat");
}
function Bv(e) {
  return e.startsWith("gpt-4") || e.startsWith("gpt-5-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") || e.startsWith("o3") || e.startsWith("o4-mini");
}
function Jv(e) {
  var t, n;
  return rl(e) ? (n = (t = Hv[e]) == null ? void 0 : t.systemMessageMode) != null ? n : "developer" : "system";
}
var Hv = {
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
function Wv({
  prompt: e,
  user: t = "user",
  assistant: n = "assistant"
}) {
  let r = "";
  e[0].role === "system" && (r += `${e[0].content}

`, e = e.slice(1));
  for (const { role: o, content: a } of e)
    switch (o) {
      case "system":
        throw new Pt({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const s = a.map((i) => {
          switch (i.type) {
            case "text":
              return i.text;
          }
        }).filter(Boolean).join("");
        r += `${t}:
${s}

`;
        break;
      }
      case "assistant": {
        const s = a.map((i) => {
          switch (i.type) {
            case "text":
              return i.text;
            case "tool-call":
              throw new ke({
                functionality: "tool-call messages"
              });
          }
        }).join("");
        r += `${n}:
${s}

`;
        break;
      }
      case "tool":
        throw new ke({
          functionality: "tool messages"
        });
      default: {
        const s = o;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  return r += `${n}:
`, {
    prompt: r,
    stopSequences: [`
${t}:`]
  };
}
function Ra({
  id: e,
  model: t,
  created: n
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: n != null ? new Date(n * 1e3) : void 0
  };
}
function Oa(e) {
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
var Kv = Re(
  () => U(
    d({
      id: l().nullish(),
      created: k().nullish(),
      model: l().nullish(),
      choices: P(
        d({
          text: l(),
          finish_reason: l(),
          logprobs: d({
            tokens: P(l()),
            token_logprobs: P(k()),
            top_logprobs: P(Pe(l(), k())).nullish()
          }).nullish()
        })
      ),
      usage: d({
        prompt_tokens: k(),
        completion_tokens: k(),
        total_tokens: k()
      }).nullish()
    })
  )
), Yv = Re(
  () => U(
    oe([
      d({
        id: l().nullish(),
        created: k().nullish(),
        model: l().nullish(),
        choices: P(
          d({
            text: l(),
            finish_reason: l().nullish(),
            index: k(),
            logprobs: d({
              tokens: P(l()),
              token_logprobs: P(k()),
              top_logprobs: P(Pe(l(), k())).nullish()
            }).nullish()
          })
        ),
        usage: d({
          prompt_tokens: k(),
          completion_tokens: k(),
          total_tokens: k()
        }).nullish()
      }),
      wo
    ])
  )
), Na = Re(
  () => U(
    d({
      /**
      Echo back the prompt in addition to the completion.
         */
      echo: J().optional(),
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
      logitBias: Pe(l(), k()).optional(),
      /**
      The suffix that comes after a completion of inserted text.
       */
      suffix: l().optional(),
      /**
      A unique identifier representing your end-user, which can help OpenAI to
      monitor and detect abuse. Learn more.
       */
      user: l().optional(),
      /**
      Return the log probabilities of the tokens. Including logprobs will increase
      the response size and can slow down response times. However, it can
      be useful to better understand how the model is behaving.
      Setting to true will return the log probabilities of the tokens that
      were generated.
      Setting to a number will return the log probabilities of the top n
      tokens that were generated.
         */
      logprobs: oe([J(), k()]).optional()
    })
  )
), Xv = class {
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
    temperature: n,
    topP: r,
    topK: o,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    tools: c,
    toolChoice: p,
    seed: m,
    providerOptions: g
  }) {
    const f = [], y = {
      ...await Ve({
        provider: "openai",
        providerOptions: g,
        schema: Na
      }),
      ...await Ve({
        provider: this.providerOptionsName,
        providerOptions: g,
        schema: Na
      })
    };
    o != null && f.push({ type: "unsupported-setting", setting: "topK" }), c != null && c.length && f.push({ type: "unsupported-setting", setting: "tools" }), p != null && f.push({ type: "unsupported-setting", setting: "toolChoice" }), u != null && u.type !== "text" && f.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: _, stopSequences: b } = Wv({ prompt: e }), h = [...b ?? [], ...i ?? []];
    return {
      args: {
        // model id:
        model: this.modelId,
        // model specific settings:
        echo: y.echo,
        logit_bias: y.logitBias,
        logprobs: (y == null ? void 0 : y.logprobs) === !0 ? 0 : (y == null ? void 0 : y.logprobs) === !1 || y == null ? void 0 : y.logprobs,
        suffix: y.suffix,
        user: y.user,
        // standardized settings:
        max_tokens: t,
        temperature: n,
        top_p: r,
        frequency_penalty: a,
        presence_penalty: s,
        seed: m,
        // prompt:
        prompt: _,
        // stop sequences:
        stop: h.length > 0 ? h : void 0
      },
      warnings: f
    };
  }
  async doGenerate(e) {
    var t, n, r;
    const { args: o, warnings: a } = await this.getArgs(e), {
      responseHeaders: s,
      value: i,
      rawValue: u
    } = await Ce({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        Kv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), c = i.choices[0], p = { openai: {} };
    return c.logprobs != null && (p.openai.logprobs = c.logprobs), {
      content: [{ type: "text", text: c.text }],
      usage: {
        inputTokens: (t = i.usage) == null ? void 0 : t.prompt_tokens,
        outputTokens: (n = i.usage) == null ? void 0 : n.completion_tokens,
        totalTokens: (r = i.usage) == null ? void 0 : r.total_tokens
      },
      finishReason: Oa(c.finish_reason),
      request: { body: o },
      response: {
        ...Ra(i),
        headers: s,
        body: u
      },
      providerMetadata: p,
      warnings: a
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = {
      ...t,
      stream: !0,
      stream_options: {
        include_usage: !0
      }
    }, { responseHeaders: o, value: a } = await Ce({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: wt,
      successfulResponseHandler: Gt(
        Yv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let s = "unknown";
    const i = { openai: {} }, u = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let c = !0;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(p) {
            p.enqueue({ type: "stream-start", warnings: n });
          },
          transform(p, m) {
            if (e.includeRawChunks && m.enqueue({ type: "raw", rawValue: p.rawValue }), !p.success) {
              s = "error", m.enqueue({ type: "error", error: p.error });
              return;
            }
            const g = p.value;
            if ("error" in g) {
              s = "error", m.enqueue({ type: "error", error: g.error });
              return;
            }
            c && (c = !1, m.enqueue({
              type: "response-metadata",
              ...Ra(g)
            }), m.enqueue({ type: "text-start", id: "0" })), g.usage != null && (u.inputTokens = g.usage.prompt_tokens, u.outputTokens = g.usage.completion_tokens, u.totalTokens = g.usage.total_tokens);
            const f = g.choices[0];
            (f == null ? void 0 : f.finish_reason) != null && (s = Oa(f.finish_reason)), (f == null ? void 0 : f.logprobs) != null && (i.openai.logprobs = f.logprobs), (f == null ? void 0 : f.text) != null && f.text.length > 0 && m.enqueue({
              type: "text-delta",
              id: "0",
              delta: f.text
            });
          },
          flush(p) {
            c || p.enqueue({ type: "text-end", id: "0" }), p.enqueue({
              type: "finish",
              finishReason: s,
              providerMetadata: i,
              usage: u
            });
          }
        })
      ),
      request: { body: r },
      response: { headers: o }
    };
  }
}, Qv = Re(
  () => U(
    d({
      /**
      The number of dimensions the resulting output embeddings should have.
      Only supported in text-embedding-3 and later models.
         */
      dimensions: k().optional(),
      /**
      A unique identifier representing your end-user, which can help OpenAI to
      monitor and detect abuse. Learn more.
      */
      user: l().optional()
    })
  )
), ey = Re(
  () => U(
    d({
      data: P(d({ embedding: P(k()) })),
      usage: d({ prompt_tokens: k() }).nullish()
    })
  )
), ty = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: n,
    providerOptions: r
  }) {
    var o;
    if (e.length > this.maxEmbeddingsPerCall)
      throw new ao({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const a = (o = await Ve({
      provider: "openai",
      providerOptions: r,
      schema: Qv
    })) != null ? o : {}, {
      responseHeaders: s,
      value: i,
      rawValue: u
    } = await Ce({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: a.dimensions,
        user: a.user
      },
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        ey
      ),
      abortSignal: n,
      fetch: this.config.fetch
    });
    return {
      embeddings: i.data.map((c) => c.embedding),
      usage: i.usage ? { tokens: i.usage.prompt_tokens } : void 0,
      response: { headers: s, body: u }
    };
  }
}, ny = Re(
  () => U(
    d({
      data: P(
        d({
          b64_json: l(),
          revised_prompt: l().nullish()
        })
      )
    })
  )
), ry = {
  "dall-e-3": 1,
  "dall-e-2": 10,
  "gpt-image-1": 10,
  "gpt-image-1-mini": 10
}, oy = /* @__PURE__ */ new Set([
  "gpt-image-1",
  "gpt-image-1-mini"
]), ay = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get maxImagesPerCall() {
    var e;
    return (e = ry[this.modelId]) != null ? e : 1;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: n,
    aspectRatio: r,
    seed: o,
    providerOptions: a,
    headers: s,
    abortSignal: i
  }) {
    var u, c, p, m;
    const g = [];
    r != null && g.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), o != null && g.push({ type: "unsupported-setting", setting: "seed" });
    const f = (p = (c = (u = this.config._internal) == null ? void 0 : u.currentDate) == null ? void 0 : c.call(u)) != null ? p : /* @__PURE__ */ new Date(), { value: y, responseHeaders: _ } = await Ce({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), s),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: n,
        ...(m = a.openai) != null ? m : {},
        ...oy.has(this.modelId) ? {} : { response_format: "b64_json" }
      },
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        ny
      ),
      abortSignal: i,
      fetch: this.config.fetch
    });
    return {
      images: y.data.map((b) => b.b64_json),
      warnings: g,
      response: {
        timestamp: f,
        modelId: this.modelId,
        headers: _
      },
      providerMetadata: {
        openai: {
          images: y.data.map(
            (b) => b.revised_prompt ? {
              revisedPrompt: b.revised_prompt
            } : null
          )
        }
      }
    };
  }
}, sy = Y(
  () => U(
    d({
      code: l().nullish(),
      containerId: l()
    })
  )
), iy = Y(
  () => U(
    d({
      outputs: P(
        de("type", [
          d({ type: x("logs"), logs: l() }),
          d({ type: x("image"), url: l() })
        ])
      ).nullish()
    })
  )
), ly = Y(
  () => U(
    d({
      container: oe([
        l(),
        d({
          fileIds: P(l()).optional()
        })
      ]).optional()
    })
  )
), uy = ht({
  id: "openai.code_interpreter",
  name: "code_interpreter",
  inputSchema: sy,
  outputSchema: iy
}), cy = (e = {}) => uy(e), ol = d({
  key: l(),
  type: Q(["eq", "ne", "gt", "gte", "lt", "lte"]),
  value: oe([l(), k(), J()])
}), al = d({
  type: Q(["and", "or"]),
  filters: P(
    oe([ol, qi(() => al)])
  )
}), dy = Y(
  () => U(
    d({
      vectorStoreIds: P(l()),
      maxNumResults: k().optional(),
      ranking: d({
        ranker: l().optional(),
        scoreThreshold: k().optional()
      }).optional(),
      filters: oe([ol, al]).optional()
    })
  )
), py = Y(
  () => U(
    d({
      queries: P(l()),
      results: P(
        d({
          attributes: Pe(l(), le()),
          fileId: l(),
          filename: l(),
          score: k(),
          text: l()
        })
      ).nullable()
    })
  )
), fy = ht({
  id: "openai.file_search",
  name: "file_search",
  inputSchema: d({}),
  outputSchema: py
}), my = Y(
  () => U(
    d({
      background: Q(["auto", "opaque", "transparent"]).optional(),
      inputFidelity: Q(["low", "high"]).optional(),
      inputImageMask: d({
        fileId: l().optional(),
        imageUrl: l().optional()
      }).optional(),
      model: l().optional(),
      moderation: Q(["auto"]).optional(),
      outputCompression: k().int().min(0).max(100).optional(),
      outputFormat: Q(["png", "jpeg", "webp"]).optional(),
      partialImages: k().int().min(0).max(3).optional(),
      quality: Q(["auto", "low", "medium", "high"]).optional(),
      size: Q(["1024x1024", "1024x1536", "1536x1024", "auto"]).optional()
    }).strict()
  )
), hy = Y(() => U(d({}))), gy = Y(
  () => U(d({ result: l() }))
), vy = ht({
  id: "openai.image_generation",
  name: "image_generation",
  inputSchema: hy,
  outputSchema: gy
}), yy = (e = {}) => vy(e), sl = Y(
  () => U(
    d({
      action: d({
        type: x("exec"),
        command: P(l()),
        timeoutMs: k().optional(),
        user: l().optional(),
        workingDirectory: l().optional(),
        env: Pe(l(), l()).optional()
      })
    })
  )
), il = Y(
  () => U(d({ output: l() }))
), _y = ht({
  id: "openai.local_shell",
  name: "local_shell",
  inputSchema: sl,
  outputSchema: il
}), by = Y(
  () => U(
    d({
      externalWebAccess: J().optional(),
      filters: d({ allowedDomains: P(l()).optional() }).optional(),
      searchContextSize: Q(["low", "medium", "high"]).optional(),
      userLocation: d({
        type: x("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), wy = Y(() => U(d({}))), xy = Y(
  () => U(
    d({
      action: de("type", [
        d({
          type: x("search"),
          query: l().optional()
        }),
        d({
          type: x("openPage"),
          url: l()
        }),
        d({
          type: x("find"),
          url: l(),
          pattern: l()
        })
      ]),
      sources: P(
        de("type", [
          d({ type: x("url"), url: l() }),
          d({ type: x("api"), name: l() })
        ])
      ).optional()
    })
  )
), Iy = ht({
  id: "openai.web_search",
  name: "web_search",
  inputSchema: wy,
  outputSchema: xy
}), ky = (e = {}) => Iy(e), Ty = Y(
  () => U(
    d({
      searchContextSize: Q(["low", "medium", "high"]).optional(),
      userLocation: d({
        type: x("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Sy = Y(
  () => U(d({}))
), Ey = Y(
  () => U(
    d({
      action: de("type", [
        d({
          type: x("search"),
          query: l().optional()
        }),
        d({
          type: x("openPage"),
          url: l()
        }),
        d({
          type: x("find"),
          url: l(),
          pattern: l()
        })
      ])
    })
  )
), Cy = ht({
  id: "openai.web_search_preview",
  name: "web_search_preview",
  inputSchema: Sy,
  outputSchema: Ey
}), My = {
  /**
   * The Code Interpreter tool allows models to write and run Python code in a
   * sandboxed environment to solve complex problems in domains like data analysis,
   * coding, and math.
   *
   * @param container - The container to use for the code interpreter.
   *
   * Must have name `code_interpreter`.
   */
  codeInterpreter: cy,
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
  fileSearch: fy,
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
  imageGeneration: yy,
  /**
   * Local shell is a tool that allows agents to run shell commands locally
   * on a machine you or the user provides.
   *
   * Supported models: `gpt-5-codex` and `codex-mini-latest`
   *
   * Must have name `local_shell`.
   */
  localShell: _y,
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
  webSearchPreview: Cy,
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
  webSearch: ky
};
function Aa(e, t) {
  return t ? t.some((n) => e.startsWith(n)) : !1;
}
async function Ry({
  prompt: e,
  systemMessageMode: t,
  fileIdPrefixes: n,
  store: r,
  hasLocalShellTool: o = !1
}) {
  var a, s, i, u;
  const c = [], p = [];
  for (const { role: m, content: g } of e)
    switch (m) {
      case "system": {
        switch (t) {
          case "system": {
            c.push({ role: "system", content: g });
            break;
          }
          case "developer": {
            c.push({ role: "developer", content: g });
            break;
          }
          case "remove": {
            p.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const f = t;
            throw new Error(
              `Unsupported system message mode: ${f}`
            );
          }
        }
        break;
      }
      case "user": {
        c.push({
          role: "user",
          content: g.map((f, y) => {
            var _, b, h;
            switch (f.type) {
              case "text":
                return { type: "input_text", text: f.text };
              case "file":
                if (f.mediaType.startsWith("image/")) {
                  const v = f.mediaType === "image/*" ? "image/jpeg" : f.mediaType;
                  return {
                    type: "input_image",
                    ...f.data instanceof URL ? { image_url: f.data.toString() } : typeof f.data == "string" && Aa(f.data, n) ? { file_id: f.data } : {
                      image_url: `data:${v};base64,${ft(f.data)}`
                    },
                    detail: (b = (_ = f.providerOptions) == null ? void 0 : _.openai) == null ? void 0 : b.imageDetail
                  };
                } else {
                  if (f.mediaType === "application/pdf")
                    return f.data instanceof URL ? {
                      type: "input_file",
                      file_url: f.data.toString()
                    } : {
                      type: "input_file",
                      ...typeof f.data == "string" && Aa(f.data, n) ? { file_id: f.data } : {
                        filename: (h = f.filename) != null ? h : `part-${y}.pdf`,
                        file_data: `data:application/pdf;base64,${ft(f.data)}`
                      }
                    };
                  throw new ke({
                    functionality: `file part media type ${f.mediaType}`
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        const f = {}, y = {};
        for (const _ of g)
          switch (_.type) {
            case "text": {
              const b = (s = (a = _.providerOptions) == null ? void 0 : a.openai) == null ? void 0 : s.itemId;
              if (r && b != null) {
                c.push({ type: "item_reference", id: b });
                break;
              }
              c.push({
                role: "assistant",
                content: [{ type: "output_text", text: _.text }],
                id: b
              });
              break;
            }
            case "tool-call": {
              if (y[_.toolCallId] = _, _.providerExecuted)
                break;
              const b = (u = (i = _.providerOptions) == null ? void 0 : i.openai) == null ? void 0 : u.itemId;
              if (r && b != null) {
                c.push({ type: "item_reference", id: b });
                break;
              }
              if (o && _.toolName === "local_shell") {
                const h = await Ne({
                  value: _.input,
                  schema: sl
                });
                c.push({
                  type: "local_shell_call",
                  call_id: _.toolCallId,
                  id: b,
                  action: {
                    type: "exec",
                    command: h.action.command,
                    timeout_ms: h.action.timeoutMs,
                    user: h.action.user,
                    working_directory: h.action.workingDirectory,
                    env: h.action.env
                  }
                });
                break;
              }
              c.push({
                type: "function_call",
                call_id: _.toolCallId,
                name: _.toolName,
                arguments: JSON.stringify(_.input),
                id: b
              });
              break;
            }
            // assistant tool result parts are from provider-executed tools:
            case "tool-result": {
              r ? c.push({ type: "item_reference", id: _.toolCallId }) : p.push({
                type: "other",
                message: `Results for OpenAI tool ${_.toolName} are not sent to the API when store is false`
              });
              break;
            }
            case "reasoning": {
              const b = await Ve({
                provider: "openai",
                providerOptions: _.providerOptions,
                schema: Oy
              }), h = b == null ? void 0 : b.itemId;
              if (h != null) {
                const v = f[h];
                if (r)
                  v === void 0 && (c.push({ type: "item_reference", id: h }), f[h] = {
                    type: "reasoning",
                    id: h,
                    summary: []
                  });
                else {
                  const I = [];
                  _.text.length > 0 ? I.push({
                    type: "summary_text",
                    text: _.text
                  }) : v !== void 0 && p.push({
                    type: "other",
                    message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(_)}.`
                  }), v === void 0 ? (f[h] = {
                    type: "reasoning",
                    id: h,
                    encrypted_content: b == null ? void 0 : b.reasoningEncryptedContent,
                    summary: I
                  }, c.push(f[h])) : (v.summary.push(...I), (b == null ? void 0 : b.reasoningEncryptedContent) != null && (v.encrypted_content = b.reasoningEncryptedContent));
                }
              } else
                p.push({
                  type: "other",
                  message: `Non-OpenAI reasoning parts are not supported. Skipping reasoning part: ${JSON.stringify(_)}.`
                });
              break;
            }
          }
        break;
      }
      case "tool": {
        for (const f of g) {
          const y = f.output;
          if (o && f.toolName === "local_shell" && y.type === "json") {
            const b = await Ne({
              value: y.value,
              schema: il
            });
            c.push({
              type: "local_shell_call_output",
              call_id: f.toolCallId,
              output: b.output
            });
            break;
          }
          let _;
          switch (y.type) {
            case "text":
            case "error-text":
              _ = y.value;
              break;
            case "json":
            case "error-json":
              _ = JSON.stringify(y.value);
              break;
            case "content":
              _ = y.value.map((b) => {
                switch (b.type) {
                  case "text":
                    return { type: "input_text", text: b.text };
                  case "media":
                    return b.mediaType.startsWith("image/") ? {
                      type: "input_image",
                      image_url: `data:${b.mediaType};base64,${b.data}`
                    } : {
                      type: "input_file",
                      filename: "data",
                      file_data: `data:${b.mediaType};base64,${b.data}`
                    };
                }
              });
              break;
          }
          c.push({
            type: "function_call_output",
            call_id: f.toolCallId,
            output: _
          });
        }
        break;
      }
      default: {
        const f = m;
        throw new Error(`Unsupported role: ${f}`);
      }
    }
  return { input: c, warnings: p };
}
var Oy = d({
  itemId: l().nullish(),
  reasoningEncryptedContent: l().nullish()
});
function $a({
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
var Ny = Re(
  () => U(
    oe([
      d({
        type: x("response.output_text.delta"),
        item_id: l(),
        delta: l(),
        logprobs: P(
          d({
            token: l(),
            logprob: k(),
            top_logprobs: P(
              d({
                token: l(),
                logprob: k()
              })
            )
          })
        ).nullish()
      }),
      d({
        type: Q(["response.completed", "response.incomplete"]),
        response: d({
          incomplete_details: d({ reason: l() }).nullish(),
          usage: d({
            input_tokens: k(),
            input_tokens_details: d({ cached_tokens: k().nullish() }).nullish(),
            output_tokens: k(),
            output_tokens_details: d({ reasoning_tokens: k().nullish() }).nullish()
          }),
          service_tier: l().nullish()
        })
      }),
      d({
        type: x("response.created"),
        response: d({
          id: l(),
          created_at: k(),
          model: l(),
          service_tier: l().nullish()
        })
      }),
      d({
        type: x("response.output_item.added"),
        output_index: k(),
        item: de("type", [
          d({
            type: x("message"),
            id: l()
          }),
          d({
            type: x("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          d({
            type: x("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l()
          }),
          d({
            type: x("web_search_call"),
            id: l(),
            status: l()
          }),
          d({
            type: x("computer_call"),
            id: l(),
            status: l()
          }),
          d({
            type: x("file_search_call"),
            id: l()
          }),
          d({
            type: x("image_generation_call"),
            id: l()
          }),
          d({
            type: x("code_interpreter_call"),
            id: l(),
            container_id: l(),
            code: l().nullable(),
            outputs: P(
              de("type", [
                d({ type: x("logs"), logs: l() }),
                d({ type: x("image"), url: l() })
              ])
            ).nullable(),
            status: l()
          })
        ])
      }),
      d({
        type: x("response.output_item.done"),
        output_index: k(),
        item: de("type", [
          d({
            type: x("message"),
            id: l()
          }),
          d({
            type: x("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          d({
            type: x("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l(),
            status: x("completed")
          }),
          d({
            type: x("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: P(
              de("type", [
                d({ type: x("logs"), logs: l() }),
                d({ type: x("image"), url: l() })
              ])
            ).nullable()
          }),
          d({
            type: x("image_generation_call"),
            id: l(),
            result: l()
          }),
          d({
            type: x("web_search_call"),
            id: l(),
            status: l(),
            action: de("type", [
              d({
                type: x("search"),
                query: l().nullish(),
                sources: P(
                  de("type", [
                    d({ type: x("url"), url: l() }),
                    d({ type: x("api"), name: l() })
                  ])
                ).nullish()
              }),
              d({
                type: x("open_page"),
                url: l()
              }),
              d({
                type: x("find"),
                url: l(),
                pattern: l()
              })
            ])
          }),
          d({
            type: x("file_search_call"),
            id: l(),
            queries: P(l()),
            results: P(
              d({
                attributes: Pe(l(), le()),
                file_id: l(),
                filename: l(),
                score: k(),
                text: l()
              })
            ).nullish()
          }),
          d({
            type: x("local_shell_call"),
            id: l(),
            call_id: l(),
            action: d({
              type: x("exec"),
              command: P(l()),
              timeout_ms: k().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: Pe(l(), l()).optional()
            })
          }),
          d({
            type: x("computer_call"),
            id: l(),
            status: x("completed")
          })
        ])
      }),
      d({
        type: x("response.function_call_arguments.delta"),
        item_id: l(),
        output_index: k(),
        delta: l()
      }),
      d({
        type: x("response.image_generation_call.partial_image"),
        item_id: l(),
        output_index: k(),
        partial_image_b64: l()
      }),
      d({
        type: x("response.code_interpreter_call_code.delta"),
        item_id: l(),
        output_index: k(),
        delta: l()
      }),
      d({
        type: x("response.code_interpreter_call_code.done"),
        item_id: l(),
        output_index: k(),
        code: l()
      }),
      d({
        type: x("response.output_text.annotation.added"),
        annotation: de("type", [
          d({
            type: x("url_citation"),
            start_index: k(),
            end_index: k(),
            url: l(),
            title: l()
          }),
          d({
            type: x("file_citation"),
            file_id: l(),
            filename: l().nullish(),
            index: k().nullish(),
            start_index: k().nullish(),
            end_index: k().nullish(),
            quote: l().nullish()
          })
        ])
      }),
      d({
        type: x("response.reasoning_summary_part.added"),
        item_id: l(),
        summary_index: k()
      }),
      d({
        type: x("response.reasoning_summary_text.delta"),
        item_id: l(),
        summary_index: k(),
        delta: l()
      }),
      d({
        type: x("response.reasoning_summary_part.done"),
        item_id: l(),
        summary_index: k()
      }),
      d({
        type: x("error"),
        sequence_number: k(),
        error: d({
          type: l(),
          code: l(),
          message: l(),
          param: l().nullish()
        })
      }),
      d({ type: l() }).loose().transform((e) => ({
        type: "unknown_chunk",
        message: e.type
      }))
      // fallback for unknown chunks
    ])
  )
), Ay = Re(
  () => U(
    d({
      id: l().optional(),
      created_at: k().optional(),
      error: d({
        message: l(),
        type: l(),
        param: l().nullish(),
        code: l()
      }).nullish(),
      model: l().optional(),
      output: P(
        de("type", [
          d({
            type: x("message"),
            role: x("assistant"),
            id: l(),
            content: P(
              d({
                type: x("output_text"),
                text: l(),
                logprobs: P(
                  d({
                    token: l(),
                    logprob: k(),
                    top_logprobs: P(
                      d({
                        token: l(),
                        logprob: k()
                      })
                    )
                  })
                ).nullish(),
                annotations: P(
                  de("type", [
                    d({
                      type: x("url_citation"),
                      start_index: k(),
                      end_index: k(),
                      url: l(),
                      title: l()
                    }),
                    d({
                      type: x("file_citation"),
                      file_id: l(),
                      filename: l().nullish(),
                      index: k().nullish(),
                      start_index: k().nullish(),
                      end_index: k().nullish(),
                      quote: l().nullish()
                    }),
                    d({
                      type: x("container_file_citation"),
                      container_id: l(),
                      file_id: l(),
                      filename: l().nullish(),
                      start_index: k().nullish(),
                      end_index: k().nullish(),
                      index: k().nullish()
                    }),
                    d({
                      type: x("file_path"),
                      file_id: l(),
                      index: k().nullish()
                    })
                  ])
                )
              })
            )
          }),
          d({
            type: x("web_search_call"),
            id: l(),
            status: l(),
            action: de("type", [
              d({
                type: x("search"),
                query: l().nullish(),
                sources: P(
                  de("type", [
                    d({ type: x("url"), url: l() }),
                    d({ type: x("api"), name: l() })
                  ])
                ).nullish()
              }),
              d({
                type: x("open_page"),
                url: l()
              }),
              d({
                type: x("find"),
                url: l(),
                pattern: l()
              })
            ])
          }),
          d({
            type: x("file_search_call"),
            id: l(),
            queries: P(l()),
            results: P(
              d({
                attributes: Pe(
                  l(),
                  oe([l(), k(), J()])
                ),
                file_id: l(),
                filename: l(),
                score: k(),
                text: l()
              })
            ).nullish()
          }),
          d({
            type: x("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: P(
              de("type", [
                d({ type: x("logs"), logs: l() }),
                d({ type: x("image"), url: l() })
              ])
            ).nullable()
          }),
          d({
            type: x("image_generation_call"),
            id: l(),
            result: l()
          }),
          d({
            type: x("local_shell_call"),
            id: l(),
            call_id: l(),
            action: d({
              type: x("exec"),
              command: P(l()),
              timeout_ms: k().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: Pe(l(), l()).optional()
            })
          }),
          d({
            type: x("function_call"),
            call_id: l(),
            name: l(),
            arguments: l(),
            id: l()
          }),
          d({
            type: x("computer_call"),
            id: l(),
            status: l().optional()
          }),
          d({
            type: x("reasoning"),
            id: l(),
            encrypted_content: l().nullish(),
            summary: P(
              d({
                type: x("summary_text"),
                text: l()
              })
            )
          })
        ])
      ).optional(),
      service_tier: l().nullish(),
      incomplete_details: d({ reason: l() }).nullish(),
      usage: d({
        input_tokens: k(),
        input_tokens_details: d({ cached_tokens: k().nullish() }).nullish(),
        output_tokens: k(),
        output_tokens_details: d({ reasoning_tokens: k().nullish() }).nullish()
      }).optional()
    })
  )
), ll = 20, $y = Re(
  () => U(
    d({
      conversation: l().nullish(),
      include: P(
        Q([
          "reasoning.encrypted_content",
          // handled internally by default, only needed for unknown reasoning models
          "file_search_call.results",
          "message.output_text.logprobs"
        ])
      ).nullish(),
      instructions: l().nullish(),
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
      logprobs: oe([J(), k().min(1).max(ll)]).optional(),
      /**
       * The maximum number of total calls to built-in tools that can be processed in a response.
       * This maximum number applies across all built-in tool calls, not per individual tool.
       * Any further attempts to call a tool by the model will be ignored.
       */
      maxToolCalls: k().nullish(),
      metadata: pt().nullish(),
      parallelToolCalls: J().nullish(),
      previousResponseId: l().nullish(),
      promptCacheKey: l().nullish(),
      /**
       * The retention policy for the prompt cache.
       * - 'in_memory': Default. Standard prompt caching behavior.
       * - '24h': Extended prompt caching that keeps cached prefixes active for up to 24 hours.
       *          Currently only available for 5.1 series models.
       *
       * @default 'in_memory'
       */
      promptCacheRetention: Q(["in_memory", "24h"]).nullish(),
      reasoningEffort: l().nullish(),
      reasoningSummary: l().nullish(),
      safetyIdentifier: l().nullish(),
      serviceTier: Q(["auto", "flex", "priority", "default"]).nullish(),
      store: J().nullish(),
      strictJsonSchema: J().nullish(),
      textVerbosity: Q(["low", "medium", "high"]).nullish(),
      truncation: Q(["auto", "disabled"]).nullish(),
      user: l().nullish()
    })
  )
);
async function Py({
  tools: e,
  toolChoice: t,
  strictJsonSchema: n
}) {
  e = e != null && e.length ? e : void 0;
  const r = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: r };
  const o = [];
  for (const s of e)
    switch (s.type) {
      case "function":
        o.push({
          type: "function",
          name: s.name,
          description: s.description,
          parameters: s.inputSchema,
          strict: n
        });
        break;
      case "provider-defined": {
        switch (s.id) {
          case "openai.file_search": {
            const i = await Ne({
              value: s.args,
              schema: dy
            });
            o.push({
              type: "file_search",
              vector_store_ids: i.vectorStoreIds,
              max_num_results: i.maxNumResults,
              ranking_options: i.ranking ? {
                ranker: i.ranking.ranker,
                score_threshold: i.ranking.scoreThreshold
              } : void 0,
              filters: i.filters
            });
            break;
          }
          case "openai.local_shell": {
            o.push({
              type: "local_shell"
            });
            break;
          }
          case "openai.web_search_preview": {
            const i = await Ne({
              value: s.args,
              schema: Ty
            });
            o.push({
              type: "web_search_preview",
              search_context_size: i.searchContextSize,
              user_location: i.userLocation
            });
            break;
          }
          case "openai.web_search": {
            const i = await Ne({
              value: s.args,
              schema: by
            });
            o.push({
              type: "web_search",
              filters: i.filters != null ? { allowed_domains: i.filters.allowedDomains } : void 0,
              external_web_access: i.externalWebAccess,
              search_context_size: i.searchContextSize,
              user_location: i.userLocation
            });
            break;
          }
          case "openai.code_interpreter": {
            const i = await Ne({
              value: s.args,
              schema: ly
            });
            o.push({
              type: "code_interpreter",
              container: i.container == null ? { type: "auto", file_ids: void 0 } : typeof i.container == "string" ? i.container : { type: "auto", file_ids: i.container.fileIds }
            });
            break;
          }
          case "openai.image_generation": {
            const i = await Ne({
              value: s.args,
              schema: my
            });
            o.push({
              type: "image_generation",
              background: i.background,
              input_fidelity: i.inputFidelity,
              input_image_mask: i.inputImageMask ? {
                file_id: i.inputImageMask.fileId,
                image_url: i.inputImageMask.imageUrl
              } : void 0,
              model: i.model,
              size: i.size,
              quality: i.quality,
              moderation: i.moderation,
              output_format: i.outputFormat,
              output_compression: i.outputCompression
            });
            break;
          }
        }
        break;
      }
      default:
        r.push({ type: "unsupported-tool", tool: s });
        break;
    }
  if (t == null)
    return { tools: o, toolChoice: void 0, toolWarnings: r };
  const a = t.type;
  switch (a) {
    case "auto":
    case "none":
    case "required":
      return { tools: o, toolChoice: a, toolWarnings: r };
    case "tool":
      return {
        tools: o,
        toolChoice: t.toolName === "code_interpreter" || t.toolName === "file_search" || t.toolName === "image_generation" || t.toolName === "web_search_preview" || t.toolName === "web_search" ? { type: t.toolName } : { type: "function", name: t.toolName },
        toolWarnings: r
      };
    default: {
      const s = a;
      throw new ke({
        functionality: `tool choice type: ${s}`
      });
    }
  }
}
var jy = class {
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
    stopSequences: n,
    topP: r,
    topK: o,
    presencePenalty: a,
    frequencyPenalty: s,
    seed: i,
    prompt: u,
    providerOptions: c,
    tools: p,
    toolChoice: m,
    responseFormat: g
  }) {
    var f, y, _, b;
    const h = [], v = By(this.modelId);
    o != null && h.push({ type: "unsupported-setting", setting: "topK" }), i != null && h.push({ type: "unsupported-setting", setting: "seed" }), a != null && h.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), s != null && h.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), n != null && h.push({ type: "unsupported-setting", setting: "stopSequences" });
    const I = await Ve({
      provider: "openai",
      providerOptions: c,
      schema: $y
    });
    I != null && I.conversation && (I != null && I.previousResponseId) && h.push({
      type: "unsupported-setting",
      setting: "conversation",
      details: "conversation and previousResponseId cannot be used together"
    });
    const { input: w, warnings: E } = await Ry({
      prompt: u,
      systemMessageMode: v.systemMessageMode,
      fileIdPrefixes: this.config.fileIdPrefixes,
      store: (f = I == null ? void 0 : I.store) != null ? f : !0,
      hasLocalShellTool: R("openai.local_shell")
    });
    h.push(...E);
    const $ = (y = I == null ? void 0 : I.strictJsonSchema) != null ? y : !1;
    let S = I == null ? void 0 : I.include;
    function O(V) {
      S == null ? S = [V] : S.includes(V) || (S = [...S, V]);
    }
    function R(V) {
      return (p == null ? void 0 : p.find(
        (ne) => ne.type === "provider-defined" && ne.id === V
      )) != null;
    }
    const C = typeof (I == null ? void 0 : I.logprobs) == "number" ? I == null ? void 0 : I.logprobs : (I == null ? void 0 : I.logprobs) === !0 ? ll : void 0;
    C && O("message.output_text.logprobs");
    const N = (_ = p == null ? void 0 : p.find(
      (V) => V.type === "provider-defined" && (V.id === "openai.web_search" || V.id === "openai.web_search_preview")
    )) == null ? void 0 : _.name;
    N && O("web_search_call.action.sources"), R("openai.code_interpreter") && O("code_interpreter_call.outputs");
    const Z = I == null ? void 0 : I.store;
    Z === !1 && v.isReasoningModel && O("reasoning.encrypted_content");
    const j = {
      model: this.modelId,
      input: w,
      temperature: t,
      top_p: r,
      max_output_tokens: e,
      ...((g == null ? void 0 : g.type) === "json" || (I == null ? void 0 : I.textVerbosity)) && {
        text: {
          ...(g == null ? void 0 : g.type) === "json" && {
            format: g.schema != null ? {
              type: "json_schema",
              strict: $,
              name: (b = g.name) != null ? b : "response",
              description: g.description,
              schema: g.schema
            } : { type: "json_object" }
          },
          ...(I == null ? void 0 : I.textVerbosity) && {
            verbosity: I.textVerbosity
          }
        }
      },
      // provider options:
      conversation: I == null ? void 0 : I.conversation,
      max_tool_calls: I == null ? void 0 : I.maxToolCalls,
      metadata: I == null ? void 0 : I.metadata,
      parallel_tool_calls: I == null ? void 0 : I.parallelToolCalls,
      previous_response_id: I == null ? void 0 : I.previousResponseId,
      store: Z,
      user: I == null ? void 0 : I.user,
      instructions: I == null ? void 0 : I.instructions,
      service_tier: I == null ? void 0 : I.serviceTier,
      include: S,
      prompt_cache_key: I == null ? void 0 : I.promptCacheKey,
      prompt_cache_retention: I == null ? void 0 : I.promptCacheRetention,
      safety_identifier: I == null ? void 0 : I.safetyIdentifier,
      top_logprobs: C,
      truncation: I == null ? void 0 : I.truncation,
      // model-specific settings:
      ...v.isReasoningModel && ((I == null ? void 0 : I.reasoningEffort) != null || (I == null ? void 0 : I.reasoningSummary) != null) && {
        reasoning: {
          ...(I == null ? void 0 : I.reasoningEffort) != null && {
            effort: I.reasoningEffort
          },
          ...(I == null ? void 0 : I.reasoningSummary) != null && {
            summary: I.reasoningSummary
          }
        }
      }
    };
    v.isReasoningModel ? (j.temperature != null && (j.temperature = void 0, h.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), j.top_p != null && (j.top_p = void 0, h.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    }))) : ((I == null ? void 0 : I.reasoningEffort) != null && h.push({
      type: "unsupported-setting",
      setting: "reasoningEffort",
      details: "reasoningEffort is not supported for non-reasoning models"
    }), (I == null ? void 0 : I.reasoningSummary) != null && h.push({
      type: "unsupported-setting",
      setting: "reasoningSummary",
      details: "reasoningSummary is not supported for non-reasoning models"
    })), (I == null ? void 0 : I.serviceTier) === "flex" && !v.supportsFlexProcessing && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), delete j.service_tier), (I == null ? void 0 : I.serviceTier) === "priority" && !v.supportsPriorityProcessing && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), delete j.service_tier);
    const {
      tools: D,
      toolChoice: X,
      toolWarnings: z
    } = await Py({
      tools: p,
      toolChoice: m,
      strictJsonSchema: $
    });
    return {
      webSearchToolName: N,
      args: {
        ...j,
        tools: D,
        tool_choice: X
      },
      warnings: [...h, ...z],
      store: Z
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, p, m, g, f, y, _, b, h, v, I;
    const {
      args: w,
      warnings: E,
      webSearchToolName: $
    } = await this.getArgs(e), S = this.config.url({
      path: "/responses",
      modelId: this.modelId
    }), {
      responseHeaders: O,
      value: R,
      rawValue: C
    } = await Ce({
      url: S,
      headers: Ae(this.config.headers(), e.headers),
      body: w,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        Ay
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    if (R.error)
      throw new qe({
        message: R.error.message,
        url: S,
        requestBodyValues: w,
        statusCode: 400,
        responseHeaders: O,
        responseBody: C,
        isRetryable: !1
      });
    const N = [], Z = [];
    let j = !1;
    for (const z of R.output)
      switch (z.type) {
        case "reasoning": {
          z.summary.length === 0 && z.summary.push({ type: "summary_text", text: "" });
          for (const V of z.summary)
            N.push({
              type: "reasoning",
              text: V.text,
              providerMetadata: {
                openai: {
                  itemId: z.id,
                  reasoningEncryptedContent: (t = z.encrypted_content) != null ? t : null
                }
              }
            });
          break;
        }
        case "image_generation_call": {
          N.push({
            type: "tool-call",
            toolCallId: z.id,
            toolName: "image_generation",
            input: "{}",
            providerExecuted: !0
          }), N.push({
            type: "tool-result",
            toolCallId: z.id,
            toolName: "image_generation",
            result: {
              result: z.result
            },
            providerExecuted: !0
          });
          break;
        }
        case "local_shell_call": {
          N.push({
            type: "tool-call",
            toolCallId: z.call_id,
            toolName: "local_shell",
            input: JSON.stringify({
              action: z.action
            }),
            providerMetadata: {
              openai: {
                itemId: z.id
              }
            }
          });
          break;
        }
        case "message": {
          for (const V of z.content) {
            (r = (n = e.providerOptions) == null ? void 0 : n.openai) != null && r.logprobs && V.logprobs && Z.push(V.logprobs), N.push({
              type: "text",
              text: V.text,
              providerMetadata: {
                openai: {
                  itemId: z.id
                }
              }
            });
            for (const ne of V.annotations)
              ne.type === "url_citation" ? N.push({
                type: "source",
                sourceType: "url",
                id: (s = (a = (o = this.config).generateId) == null ? void 0 : a.call(o)) != null ? s : Fe(),
                url: ne.url,
                title: ne.title
              }) : ne.type === "file_citation" && N.push({
                type: "source",
                sourceType: "document",
                id: (c = (u = (i = this.config).generateId) == null ? void 0 : u.call(i)) != null ? c : Fe(),
                mediaType: "text/plain",
                title: (m = (p = ne.quote) != null ? p : ne.filename) != null ? m : "Document",
                filename: (g = ne.filename) != null ? g : ne.file_id,
                ...ne.file_id ? {
                  providerMetadata: {
                    openai: {
                      fileId: ne.file_id
                    }
                  }
                } : {}
              });
          }
          break;
        }
        case "function_call": {
          j = !0, N.push({
            type: "tool-call",
            toolCallId: z.call_id,
            toolName: z.name,
            input: z.arguments,
            providerMetadata: {
              openai: {
                itemId: z.id
              }
            }
          });
          break;
        }
        case "web_search_call": {
          N.push({
            type: "tool-call",
            toolCallId: z.id,
            toolName: $ ?? "web_search",
            input: JSON.stringify({}),
            providerExecuted: !0
          }), N.push({
            type: "tool-result",
            toolCallId: z.id,
            toolName: $ ?? "web_search",
            result: ja(z.action),
            providerExecuted: !0
          });
          break;
        }
        case "computer_call": {
          N.push({
            type: "tool-call",
            toolCallId: z.id,
            toolName: "computer_use",
            input: "",
            providerExecuted: !0
          }), N.push({
            type: "tool-result",
            toolCallId: z.id,
            toolName: "computer_use",
            result: {
              type: "computer_use_tool_result",
              status: z.status || "completed"
            },
            providerExecuted: !0
          });
          break;
        }
        case "file_search_call": {
          N.push({
            type: "tool-call",
            toolCallId: z.id,
            toolName: "file_search",
            input: "{}",
            providerExecuted: !0
          }), N.push({
            type: "tool-result",
            toolCallId: z.id,
            toolName: "file_search",
            result: {
              queries: z.queries,
              results: (y = (f = z.results) == null ? void 0 : f.map((V) => ({
                attributes: V.attributes,
                fileId: V.file_id,
                filename: V.filename,
                score: V.score,
                text: V.text
              }))) != null ? y : null
            },
            providerExecuted: !0
          });
          break;
        }
        case "code_interpreter_call": {
          N.push({
            type: "tool-call",
            toolCallId: z.id,
            toolName: "code_interpreter",
            input: JSON.stringify({
              code: z.code,
              containerId: z.container_id
            }),
            providerExecuted: !0
          }), N.push({
            type: "tool-result",
            toolCallId: z.id,
            toolName: "code_interpreter",
            result: {
              outputs: z.outputs
            },
            providerExecuted: !0
          });
          break;
        }
      }
    const D = {
      openai: {
        ...R.id != null ? { responseId: R.id } : {}
      }
    };
    Z.length > 0 && (D.openai.logprobs = Z), typeof R.service_tier == "string" && (D.openai.serviceTier = R.service_tier);
    const X = R.usage;
    return {
      content: N,
      finishReason: $a({
        finishReason: (_ = R.incomplete_details) == null ? void 0 : _.reason,
        hasFunctionCall: j
      }),
      usage: {
        inputTokens: X.input_tokens,
        outputTokens: X.output_tokens,
        totalTokens: X.input_tokens + X.output_tokens,
        reasoningTokens: (h = (b = X.output_tokens_details) == null ? void 0 : b.reasoning_tokens) != null ? h : void 0,
        cachedInputTokens: (I = (v = X.input_tokens_details) == null ? void 0 : v.cached_tokens) != null ? I : void 0
      },
      request: { body: w },
      response: {
        id: R.id,
        timestamp: new Date(R.created_at * 1e3),
        modelId: R.model,
        headers: O,
        body: C
      },
      providerMetadata: D,
      warnings: E
    };
  }
  async doStream(e) {
    const {
      args: t,
      warnings: n,
      webSearchToolName: r,
      store: o
    } = await this.getArgs(e), { responseHeaders: a, value: s } = await Ce({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: wt,
      successfulResponseHandler: Gt(
        Ny
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), i = this;
    let u = "unknown";
    const c = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, p = [];
    let m = null;
    const g = {}, f = [];
    let y = !1;
    const _ = {};
    let b;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(h) {
            h.enqueue({ type: "stream-start", warnings: n });
          },
          transform(h, v) {
            var I, w, E, $, S, O, R, C, N, Z, j, D, X, z, V, ne, be, ae, Ie, M, F, q;
            if (e.includeRawChunks && v.enqueue({ type: "raw", rawValue: h.rawValue }), !h.success) {
              u = "error", v.enqueue({ type: "error", error: h.error });
              return;
            }
            const T = h.value;
            if (Pa(T))
              T.item.type === "function_call" ? (g[T.output_index] = {
                toolName: T.item.name,
                toolCallId: T.item.call_id
              }, v.enqueue({
                type: "tool-input-start",
                id: T.item.call_id,
                toolName: T.item.name
              })) : T.item.type === "web_search_call" ? (g[T.output_index] = {
                toolName: r ?? "web_search",
                toolCallId: T.item.id
              }, v.enqueue({
                type: "tool-input-start",
                id: T.item.id,
                toolName: r ?? "web_search",
                providerExecuted: !0
              }), v.enqueue({
                type: "tool-input-end",
                id: T.item.id
              }), v.enqueue({
                type: "tool-call",
                toolCallId: T.item.id,
                toolName: r ?? "web_search",
                input: JSON.stringify({}),
                providerExecuted: !0
              })) : T.item.type === "computer_call" ? (g[T.output_index] = {
                toolName: "computer_use",
                toolCallId: T.item.id
              }, v.enqueue({
                type: "tool-input-start",
                id: T.item.id,
                toolName: "computer_use",
                providerExecuted: !0
              })) : T.item.type === "code_interpreter_call" ? (g[T.output_index] = {
                toolName: "code_interpreter",
                toolCallId: T.item.id,
                codeInterpreter: {
                  containerId: T.item.container_id
                }
              }, v.enqueue({
                type: "tool-input-start",
                id: T.item.id,
                toolName: "code_interpreter",
                providerExecuted: !0
              }), v.enqueue({
                type: "tool-input-delta",
                id: T.item.id,
                delta: `{"containerId":"${T.item.container_id}","code":"`
              })) : T.item.type === "file_search_call" ? v.enqueue({
                type: "tool-call",
                toolCallId: T.item.id,
                toolName: "file_search",
                input: "{}",
                providerExecuted: !0
              }) : T.item.type === "image_generation_call" ? v.enqueue({
                type: "tool-call",
                toolCallId: T.item.id,
                toolName: "image_generation",
                input: "{}",
                providerExecuted: !0
              }) : T.item.type === "message" ? (f.splice(0, f.length), v.enqueue({
                type: "text-start",
                id: T.item.id,
                providerMetadata: {
                  openai: {
                    itemId: T.item.id
                  }
                }
              })) : Pa(T) && T.item.type === "reasoning" && (_[T.item.id] = {
                encryptedContent: T.item.encrypted_content,
                summaryParts: { 0: "active" }
              }, v.enqueue({
                type: "reasoning-start",
                id: `${T.item.id}:0`,
                providerMetadata: {
                  openai: {
                    itemId: T.item.id,
                    reasoningEncryptedContent: (I = T.item.encrypted_content) != null ? I : null
                  }
                }
              }));
            else if (Dy(T)) {
              if (T.item.type === "message")
                v.enqueue({
                  type: "text-end",
                  id: T.item.id,
                  providerMetadata: {
                    openai: {
                      itemId: T.item.id,
                      ...f.length > 0 && {
                        annotations: f
                      }
                    }
                  }
                });
              else if (T.item.type === "function_call")
                g[T.output_index] = void 0, y = !0, v.enqueue({
                  type: "tool-input-end",
                  id: T.item.call_id
                }), v.enqueue({
                  type: "tool-call",
                  toolCallId: T.item.call_id,
                  toolName: T.item.name,
                  input: T.item.arguments,
                  providerMetadata: {
                    openai: {
                      itemId: T.item.id
                    }
                  }
                });
              else if (T.item.type === "web_search_call")
                g[T.output_index] = void 0, v.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: r ?? "web_search",
                  result: ja(T.item.action),
                  providerExecuted: !0
                });
              else if (T.item.type === "computer_call")
                g[T.output_index] = void 0, v.enqueue({
                  type: "tool-input-end",
                  id: T.item.id
                }), v.enqueue({
                  type: "tool-call",
                  toolCallId: T.item.id,
                  toolName: "computer_use",
                  input: "",
                  providerExecuted: !0
                }), v.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: "computer_use",
                  result: {
                    type: "computer_use_tool_result",
                    status: T.item.status || "completed"
                  },
                  providerExecuted: !0
                });
              else if (T.item.type === "file_search_call")
                g[T.output_index] = void 0, v.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: "file_search",
                  result: {
                    queries: T.item.queries,
                    results: (E = (w = T.item.results) == null ? void 0 : w.map((W) => ({
                      attributes: W.attributes,
                      fileId: W.file_id,
                      filename: W.filename,
                      score: W.score,
                      text: W.text
                    }))) != null ? E : null
                  },
                  providerExecuted: !0
                });
              else if (T.item.type === "code_interpreter_call")
                g[T.output_index] = void 0, v.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: "code_interpreter",
                  result: {
                    outputs: T.item.outputs
                  },
                  providerExecuted: !0
                });
              else if (T.item.type === "image_generation_call")
                v.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: "image_generation",
                  result: {
                    result: T.item.result
                  },
                  providerExecuted: !0
                });
              else if (T.item.type === "local_shell_call")
                g[T.output_index] = void 0, v.enqueue({
                  type: "tool-call",
                  toolCallId: T.item.call_id,
                  toolName: "local_shell",
                  input: JSON.stringify({
                    action: {
                      type: "exec",
                      command: T.item.action.command,
                      timeoutMs: T.item.action.timeout_ms,
                      user: T.item.action.user,
                      workingDirectory: T.item.action.working_directory,
                      env: T.item.action.env
                    }
                  }),
                  providerMetadata: {
                    openai: { itemId: T.item.id }
                  }
                });
              else if (T.item.type === "reasoning") {
                const W = _[T.item.id], ce = Object.entries(
                  W.summaryParts
                ).filter(
                  ([fe, Ze]) => Ze === "active" || Ze === "can-conclude"
                ).map(([fe]) => fe);
                for (const fe of ce)
                  v.enqueue({
                    type: "reasoning-end",
                    id: `${T.item.id}:${fe}`,
                    providerMetadata: {
                      openai: {
                        itemId: T.item.id,
                        reasoningEncryptedContent: ($ = T.item.encrypted_content) != null ? $ : null
                      }
                    }
                  });
                delete _[T.item.id];
              }
            } else if (Zy(T)) {
              const W = g[T.output_index];
              W != null && v.enqueue({
                type: "tool-input-delta",
                id: W.toolCallId,
                delta: T.delta
              });
            } else if (Ly(T)) {
              const W = g[T.output_index];
              W != null && v.enqueue({
                type: "tool-input-delta",
                id: W.toolCallId,
                // The delta is code, which is embedding in a JSON string.
                // To escape it, we use JSON.stringify and slice to remove the outer quotes.
                delta: JSON.stringify(T.delta).slice(1, -1)
              });
            } else if (Fy(T)) {
              const W = g[T.output_index];
              W != null && (v.enqueue({
                type: "tool-input-delta",
                id: W.toolCallId,
                delta: '"}'
              }), v.enqueue({
                type: "tool-input-end",
                id: W.toolCallId
              }), v.enqueue({
                type: "tool-call",
                toolCallId: W.toolCallId,
                toolName: "code_interpreter",
                input: JSON.stringify({
                  code: T.code,
                  containerId: W.codeInterpreter.containerId
                }),
                providerExecuted: !0
              }));
            } else if (Uy(T))
              m = T.response.id, v.enqueue({
                type: "response-metadata",
                id: T.response.id,
                timestamp: new Date(T.response.created_at * 1e3),
                modelId: T.response.model
              });
            else if (qy(T))
              v.enqueue({
                type: "text-delta",
                id: T.item_id,
                delta: T.delta
              }), (O = (S = e.providerOptions) == null ? void 0 : S.openai) != null && O.logprobs && T.logprobs && p.push(T.logprobs);
            else if (T.type === "response.reasoning_summary_part.added") {
              if (T.summary_index > 0) {
                const W = _[T.item_id];
                W.summaryParts[T.summary_index] = "active";
                for (const ce of Object.keys(
                  W.summaryParts
                ))
                  W.summaryParts[ce] === "can-conclude" && (v.enqueue({
                    type: "reasoning-end",
                    id: `${T.item_id}:${ce}`,
                    providerMetadata: { openai: { itemId: T.item_id } }
                  }), W.summaryParts[ce] = "concluded");
                v.enqueue({
                  type: "reasoning-start",
                  id: `${T.item_id}:${T.summary_index}`,
                  providerMetadata: {
                    openai: {
                      itemId: T.item_id,
                      reasoningEncryptedContent: (C = (R = _[T.item_id]) == null ? void 0 : R.encryptedContent) != null ? C : null
                    }
                  }
                });
              }
            } else T.type === "response.reasoning_summary_text.delta" ? v.enqueue({
              type: "reasoning-delta",
              id: `${T.item_id}:${T.summary_index}`,
              delta: T.delta,
              providerMetadata: {
                openai: {
                  itemId: T.item_id
                }
              }
            }) : T.type === "response.reasoning_summary_part.done" ? o ? (v.enqueue({
              type: "reasoning-end",
              id: `${T.item_id}:${T.summary_index}`,
              providerMetadata: {
                openai: { itemId: T.item_id }
              }
            }), _[T.item_id].summaryParts[T.summary_index] = "concluded") : _[T.item_id].summaryParts[T.summary_index] = "can-conclude" : zy(T) ? (u = $a({
              finishReason: (N = T.response.incomplete_details) == null ? void 0 : N.reason,
              hasFunctionCall: y
            }), c.inputTokens = T.response.usage.input_tokens, c.outputTokens = T.response.usage.output_tokens, c.totalTokens = T.response.usage.input_tokens + T.response.usage.output_tokens, c.reasoningTokens = (j = (Z = T.response.usage.output_tokens_details) == null ? void 0 : Z.reasoning_tokens) != null ? j : void 0, c.cachedInputTokens = (X = (D = T.response.usage.input_tokens_details) == null ? void 0 : D.cached_tokens) != null ? X : void 0, typeof T.response.service_tier == "string" && (b = T.response.service_tier)) : Vy(T) ? (f.push(T.annotation), T.annotation.type === "url_citation" ? v.enqueue({
              type: "source",
              sourceType: "url",
              id: (ne = (V = (z = i.config).generateId) == null ? void 0 : V.call(z)) != null ? ne : Fe(),
              url: T.annotation.url,
              title: T.annotation.title
            }) : T.annotation.type === "file_citation" && v.enqueue({
              type: "source",
              sourceType: "document",
              id: (Ie = (ae = (be = i.config).generateId) == null ? void 0 : ae.call(be)) != null ? Ie : Fe(),
              mediaType: "text/plain",
              title: (F = (M = T.annotation.quote) != null ? M : T.annotation.filename) != null ? F : "Document",
              filename: (q = T.annotation.filename) != null ? q : T.annotation.file_id,
              ...T.annotation.file_id ? {
                providerMetadata: {
                  openai: {
                    fileId: T.annotation.file_id
                  }
                }
              } : {}
            })) : Gy(T) && v.enqueue({ type: "error", error: T });
          },
          flush(h) {
            const v = {
              openai: {
                responseId: m
              }
            };
            p.length > 0 && (v.openai.logprobs = p), b !== void 0 && (v.openai.serviceTier = b), h.enqueue({
              type: "finish",
              finishReason: u,
              usage: c,
              providerMetadata: v
            });
          }
        })
      ),
      request: { body: t },
      response: { headers: a }
    };
  }
};
function qy(e) {
  return e.type === "response.output_text.delta";
}
function Dy(e) {
  return e.type === "response.output_item.done";
}
function zy(e) {
  return e.type === "response.completed" || e.type === "response.incomplete";
}
function Uy(e) {
  return e.type === "response.created";
}
function Zy(e) {
  return e.type === "response.function_call_arguments.delta";
}
function Ly(e) {
  return e.type === "response.code_interpreter_call_code.delta";
}
function Fy(e) {
  return e.type === "response.code_interpreter_call_code.done";
}
function Pa(e) {
  return e.type === "response.output_item.added";
}
function Vy(e) {
  return e.type === "response.output_text.annotation.added";
}
function Gy(e) {
  return e.type === "error";
}
function By(e) {
  const t = e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat"), n = e.startsWith("gpt-4") || e.startsWith("gpt-5-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") || e.startsWith("o3") || e.startsWith("o4-mini"), r = {
    systemMessageMode: "system",
    supportsFlexProcessing: t,
    supportsPriorityProcessing: n
  };
  return e.startsWith("gpt-5-chat") ? {
    ...r,
    isReasoningModel: !1
  } : e.startsWith("o") || e.startsWith("gpt-5") || e.startsWith("codex-") || e.startsWith("computer-use") ? {
    ...r,
    isReasoningModel: !0,
    systemMessageMode: "developer"
  } : {
    ...r,
    isReasoningModel: !1
  };
}
function ja(e) {
  var t;
  switch (e.type) {
    case "search":
      return {
        action: { type: "search", query: (t = e.query) != null ? t : void 0 },
        // include sources when provided by the Responses API (behind include flag)
        ...e.sources != null && { sources: e.sources }
      };
    case "open_page":
      return { action: { type: "openPage", url: e.url } };
    case "find":
      return {
        action: { type: "find", url: e.url, pattern: e.pattern }
      };
  }
}
var Jy = Re(
  () => U(
    d({
      instructions: l().nullish(),
      speed: k().min(0.25).max(4).default(1).nullish()
    })
  )
), Hy = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    text: e,
    voice: t = "alloy",
    outputFormat: n = "mp3",
    speed: r,
    instructions: o,
    language: a,
    providerOptions: s
  }) {
    const i = [], u = await Ve({
      provider: "openai",
      providerOptions: s,
      schema: Jy
    }), c = {
      model: this.modelId,
      input: e,
      voice: t,
      response_format: "mp3",
      speed: r,
      instructions: o
    };
    if (n && (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(n) ? c.response_format = n : i.push({
      type: "unsupported-setting",
      setting: "outputFormat",
      details: `Unsupported output format: ${n}. Using mp3 instead.`
    })), u) {
      const p = {};
      for (const m in p) {
        const g = p[m];
        g !== void 0 && (c[m] = g);
      }
    }
    return a && i.push({
      type: "unsupported-setting",
      setting: "language",
      details: `OpenAI speech models do not support language selection. Language parameter "${a}" was ignored.`
    }), {
      requestBody: c,
      warnings: i
    };
  }
  async doGenerate(e) {
    var t, n, r;
    const o = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), { requestBody: a, warnings: s } = await this.getArgs(e), {
      value: i,
      responseHeaders: u,
      rawValue: c
    } = await Ce({
      url: this.config.url({
        path: "/audio/speech",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      body: a,
      failedResponseHandler: wt,
      successfulResponseHandler: ph(),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    return {
      audio: i,
      warnings: s,
      request: {
        body: JSON.stringify(a)
      },
      response: {
        timestamp: o,
        modelId: this.modelId,
        headers: u,
        body: c
      }
    };
  }
}, Wy = Re(
  () => U(
    d({
      text: l(),
      language: l().nullish(),
      duration: k().nullish(),
      words: P(
        d({
          word: l(),
          start: k(),
          end: k()
        })
      ).nullish(),
      segments: P(
        d({
          id: k(),
          seek: k(),
          start: k(),
          end: k(),
          text: l(),
          tokens: P(k()),
          temperature: k(),
          avg_logprob: k(),
          compression_ratio: k(),
          no_speech_prob: k()
        })
      ).nullish()
    })
  )
), Ky = Re(
  () => U(
    d({
      /**
       * Additional information to include in the transcription response.
       */
      include: P(l()).optional(),
      /**
       * The language of the input audio in ISO-639-1 format.
       */
      language: l().optional(),
      /**
       * An optional text to guide the model's style or continue a previous audio segment.
       */
      prompt: l().optional(),
      /**
       * The sampling temperature, between 0 and 1.
       * @default 0
       */
      temperature: k().min(0).max(1).default(0).optional(),
      /**
       * The timestamp granularities to populate for this transcription.
       * @default ['segment']
       */
      timestampGranularities: P(Q(["word", "segment"])).default(["segment"]).optional()
    })
  )
), qa = {
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
}, Yy = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    audio: e,
    mediaType: t,
    providerOptions: n
  }) {
    const r = [], o = await Ve({
      provider: "openai",
      providerOptions: n,
      schema: Ky
    }), a = new FormData(), s = e instanceof Uint8Array ? new Blob([e]) : new Blob([Nn(e)]);
    a.append("model", this.modelId);
    const i = th(t);
    if (a.append(
      "file",
      new File([s], "audio", { type: t }),
      `audio.${i}`
    ), o) {
      const u = {
        include: o.include,
        language: o.language,
        prompt: o.prompt,
        // https://platform.openai.com/docs/api-reference/audio/createTranscription#audio_createtranscription-response_format
        // prefer verbose_json to get segments for models that support it
        response_format: [
          "gpt-4o-transcribe",
          "gpt-4o-mini-transcribe"
        ].includes(this.modelId) ? "json" : "verbose_json",
        temperature: o.temperature,
        timestamp_granularities: o.timestampGranularities
      };
      for (const [c, p] of Object.entries(u))
        if (p != null)
          if (Array.isArray(p))
            for (const m of p)
              a.append(`${c}[]`, String(m));
          else
            a.append(c, String(p));
    }
    return {
      formData: a,
      warnings: r
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u;
    const c = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), { formData: p, warnings: m } = await this.getArgs(e), {
      value: g,
      responseHeaders: f,
      rawValue: y
    } = await dh({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      formData: p,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        Wy
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), _ = g.language != null && g.language in qa ? qa[g.language] : void 0;
    return {
      text: g.text,
      segments: (i = (s = (o = g.segments) == null ? void 0 : o.map((b) => ({
        text: b.text,
        startSecond: b.start,
        endSecond: b.end
      }))) != null ? s : (a = g.words) == null ? void 0 : a.map((b) => ({
        text: b.word,
        startSecond: b.start,
        endSecond: b.end
      }))) != null ? i : [],
      language: _,
      durationInSeconds: (u = g.duration) != null ? u : void 0,
      warnings: m,
      response: {
        timestamp: c,
        modelId: this.modelId,
        headers: f,
        body: y
      }
    };
  }
}, Xy = "2.0.74";
function Qy(e = {}) {
  var t, n;
  const r = (t = An(
    Qt({
      settingValue: e.baseURL,
      environmentVariableName: "OPENAI_BASE_URL"
    })
  )) != null ? t : "https://api.openai.com/v1", o = (n = e.name) != null ? n : "openai", a = () => ze(
    {
      Authorization: `Bearer ${dr({
        apiKey: e.apiKey,
        environmentVariableName: "OPENAI_API_KEY",
        description: "OpenAI"
      })}`,
      "OpenAI-Organization": e.organization,
      "OpenAI-Project": e.project,
      ...e.headers
    },
    `ai-sdk/openai/${Xy}`
  ), s = (_) => new Vv(_, {
    provider: `${o}.chat`,
    url: ({ path: b }) => `${r}${b}`,
    headers: a,
    fetch: e.fetch
  }), i = (_) => new Xv(_, {
    provider: `${o}.completion`,
    url: ({ path: b }) => `${r}${b}`,
    headers: a,
    fetch: e.fetch
  }), u = (_) => new ty(_, {
    provider: `${o}.embedding`,
    url: ({ path: b }) => `${r}${b}`,
    headers: a,
    fetch: e.fetch
  }), c = (_) => new ay(_, {
    provider: `${o}.image`,
    url: ({ path: b }) => `${r}${b}`,
    headers: a,
    fetch: e.fetch
  }), p = (_) => new Yy(_, {
    provider: `${o}.transcription`,
    url: ({ path: b }) => `${r}${b}`,
    headers: a,
    fetch: e.fetch
  }), m = (_) => new Hy(_, {
    provider: `${o}.speech`,
    url: ({ path: b }) => `${r}${b}`,
    headers: a,
    fetch: e.fetch
  }), g = (_) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return f(_);
  }, f = (_) => new jy(_, {
    provider: `${o}.responses`,
    url: ({ path: b }) => `${r}${b}`,
    headers: a,
    fetch: e.fetch,
    fileIdPrefixes: ["file-"]
  }), y = function(_) {
    return g(_);
  };
  return y.languageModel = g, y.chat = s, y.completion = i, y.responses = f, y.embedding = u, y.textEmbedding = u, y.textEmbeddingModel = u, y.image = c, y.imageModel = c, y.transcription = p, y.transcriptionModel = p, y.speech = m, y.speechModel = m, y.tools = My, y;
}
Qy();
var Ar, Da;
function e_() {
  if (Da) return Ar;
  Da = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, o = (p, m) => {
    for (var g in m)
      e(p, g, { get: m[g], enumerable: !0 });
  }, a = (p, m, g, f) => {
    if (m && typeof m == "object" || typeof m == "function")
      for (let y of n(m))
        !r.call(p, y) && y !== g && e(p, y, { get: () => m[y], enumerable: !(f = t(m, y)) || f.enumerable });
    return p;
  }, s = (p) => a(e({}, "__esModule", { value: !0 }), p), i = {};
  o(i, {
    SYMBOL_FOR_REQ_CONTEXT: () => u,
    getContext: () => c
  }), Ar = s(i);
  const u = Symbol.for("@vercel/request-context");
  function c() {
    var m, g;
    return ((g = (m = globalThis[u]) == null ? void 0 : m.get) == null ? void 0 : g.call(m)) ?? {};
  }
  return Ar;
}
var $r, za;
function t_() {
  if (za) return $r;
  za = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, o = (m, g) => {
    for (var f in g)
      e(m, f, { get: g[f], enumerable: !0 });
  }, a = (m, g, f, y) => {
    if (g && typeof g == "object" || typeof g == "function")
      for (let _ of n(g))
        !r.call(m, _) && _ !== f && e(m, _, { get: () => g[_], enumerable: !(y = t(g, _)) || y.enumerable });
    return m;
  }, s = (m) => a(e({}, "__esModule", { value: !0 }), m), i = {};
  o(i, {
    getContext: () => u.getContext,
    getVercelOidcToken: () => c,
    getVercelOidcTokenSync: () => p
  }), $r = s(i);
  var u = e_();
  async function c() {
    return "";
  }
  function p() {
    return "";
  }
  return $r;
}
var ul = t_(), n_ = "vercel.ai.gateway.error", Pr = Symbol.for(n_), Ua, Za, ot = class cl extends (Za = Error, Ua = Pr, Za) {
  constructor({
    message: t,
    statusCode: n = 500,
    cause: r
  }) {
    super(t), this[Ua] = !0, this.statusCode = n, this.cause = r;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(t) {
    return cl.hasMarker(t);
  }
  static hasMarker(t) {
    return typeof t == "object" && t !== null && Pr in t && t[Pr] === !0;
  }
}, dl = "GatewayAuthenticationError", r_ = `vercel.ai.gateway.error.${dl}`, La = Symbol.for(r_), Fa, Va, xo = class pl extends (Va = ot, Fa = La, Va) {
  constructor({
    message: t = "Authentication failed",
    statusCode: n = 401,
    cause: r
  } = {}) {
    super({ message: t, statusCode: n, cause: r }), this[Fa] = !0, this.name = dl, this.type = "authentication_error";
  }
  static isInstance(t) {
    return ot.hasMarker(t) && La in t;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided: t,
    oidcTokenProvided: n,
    message: r = "Authentication failed",
    statusCode: o = 401,
    cause: a
  }) {
    let s;
    return t ? s = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.` : n ? s = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys` : s = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`, new pl({
      message: s,
      statusCode: o,
      cause: a
    });
  }
}, fl = "GatewayInvalidRequestError", o_ = `vercel.ai.gateway.error.${fl}`, Ga = Symbol.for(o_), Ba, Ja, a_ = class extends (Ja = ot, Ba = Ga, Ja) {
  constructor({
    message: e = "Invalid request",
    statusCode: t = 400,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[Ba] = !0, this.name = fl, this.type = "invalid_request_error";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Ga in e;
  }
}, ml = "GatewayRateLimitError", s_ = `vercel.ai.gateway.error.${ml}`, Ha = Symbol.for(s_), Wa, Ka, i_ = class extends (Ka = ot, Wa = Ha, Ka) {
  constructor({
    message: e = "Rate limit exceeded",
    statusCode: t = 429,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[Wa] = !0, this.name = ml, this.type = "rate_limit_exceeded";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Ha in e;
  }
}, hl = "GatewayModelNotFoundError", l_ = `vercel.ai.gateway.error.${hl}`, Ya = Symbol.for(l_), u_ = Re(
  () => U(
    d({
      modelId: l()
    })
  )
), Xa, Qa, gl = class extends (Qa = ot, Xa = Ya, Qa) {
  constructor({
    message: e = "Model not found",
    statusCode: t = 404,
    modelId: n,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[Xa] = !0, this.name = hl, this.type = "model_not_found", this.modelId = n;
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Ya in e;
  }
}, vl = "GatewayInternalServerError", c_ = `vercel.ai.gateway.error.${vl}`, es = Symbol.for(c_), ts, ns, rs = class extends (ns = ot, ts = es, ns) {
  constructor({
    message: e = "Internal server error",
    statusCode: t = 500,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[ts] = !0, this.name = vl, this.type = "internal_server_error";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && es in e;
  }
}, yl = "GatewayResponseError", d_ = `vercel.ai.gateway.error.${yl}`, os = Symbol.for(d_), as, ss, p_ = class extends (ss = ot, as = os, ss) {
  constructor({
    message: e = "Invalid response from Gateway",
    statusCode: t = 502,
    response: n,
    validationError: r,
    cause: o
  } = {}) {
    super({ message: e, statusCode: t, cause: o }), this[as] = !0, this.name = yl, this.type = "response_error", this.response = n, this.validationError = r;
  }
  static isInstance(e) {
    return ot.hasMarker(e) && os in e;
  }
};
async function is({
  response: e,
  statusCode: t,
  defaultMessage: n = "Gateway request failed",
  cause: r,
  authMethod: o
}) {
  const a = await it({
    value: e,
    schema: f_
  });
  if (!a.success)
    return new p_({
      message: `Invalid error response format: ${n}`,
      statusCode: t,
      response: e,
      validationError: a.error,
      cause: r
    });
  const s = a.value, i = s.error.type, u = s.error.message;
  switch (i) {
    case "authentication_error":
      return xo.createContextualError({
        apiKeyProvided: o === "api-key",
        oidcTokenProvided: o === "oidc",
        statusCode: t,
        cause: r
      });
    case "invalid_request_error":
      return new a_({ message: u, statusCode: t, cause: r });
    case "rate_limit_exceeded":
      return new i_({ message: u, statusCode: t, cause: r });
    case "model_not_found": {
      const c = await it({
        value: s.error.param,
        schema: u_
      });
      return new gl({
        message: u,
        statusCode: t,
        modelId: c.success ? c.value.modelId : void 0,
        cause: r
      });
    }
    case "internal_server_error":
      return new rs({ message: u, statusCode: t, cause: r });
    default:
      return new rs({ message: u, statusCode: t, cause: r });
  }
}
var f_ = Re(
  () => U(
    d({
      error: d({
        message: l(),
        type: l().nullish(),
        param: le().nullish(),
        code: oe([l(), k()]).nullish()
      })
    })
  )
);
function At(e, t) {
  var n;
  return ot.isInstance(e) ? e : qe.isInstance(e) ? is({
    response: m_(e),
    statusCode: (n = e.statusCode) != null ? n : 500,
    defaultMessage: "Gateway request failed",
    cause: e,
    authMethod: t
  }) : is({
    response: {},
    statusCode: 500,
    defaultMessage: e instanceof Error ? `Gateway request failed: ${e.message}` : "Unknown Gateway error",
    cause: e,
    authMethod: t
  });
}
function m_(e) {
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
var _l = "ai-gateway-auth-method";
async function an(e) {
  const t = await it({
    value: e[_l],
    schema: h_
  });
  return t.success ? t.value : void 0;
}
var h_ = Re(
  () => U(oe([x("api-key"), x("oidc")]))
), ls = class {
  constructor(e) {
    this.config = e;
  }
  async getAvailableModels() {
    try {
      const { value: e } = await pa({
        url: `${this.config.baseURL}/config`,
        headers: await Oe(this.config.headers()),
        successfulResponseHandler: Ue(
          g_
        ),
        failedResponseHandler: bt({
          errorSchema: pt(),
          errorToMessage: (t) => t
        }),
        fetch: this.config.fetch
      });
      return e;
    } catch (e) {
      throw await At(e);
    }
  }
  async getCredits() {
    try {
      const e = new URL(this.config.baseURL), { value: t } = await pa({
        url: `${e.origin}/v1/credits`,
        headers: await Oe(this.config.headers()),
        successfulResponseHandler: Ue(
          v_
        ),
        failedResponseHandler: bt({
          errorSchema: pt(),
          errorToMessage: (n) => n
        }),
        fetch: this.config.fetch
      });
      return t;
    } catch (e) {
      throw await At(e);
    }
  }
}, g_ = Re(
  () => U(
    d({
      models: P(
        d({
          id: l(),
          name: l(),
          description: l().nullish(),
          pricing: d({
            input: l(),
            output: l(),
            input_cache_read: l().nullish(),
            input_cache_write: l().nullish()
          }).transform(
            ({ input: e, output: t, input_cache_read: n, input_cache_write: r }) => ({
              input: e,
              output: t,
              ...n ? { cachedInputTokens: n } : {},
              ...r ? { cacheCreationInputTokens: r } : {}
            })
          ).nullish(),
          specification: d({
            specificationVersion: x("v2"),
            provider: l(),
            modelId: l()
          }),
          modelType: Q(["language", "embedding", "image"]).nullish()
        })
      )
    })
  )
), v_ = Re(
  () => U(
    d({
      balance: l(),
      total_used: l()
    }).transform(({ balance: e, total_used: t }) => ({
      balance: e,
      totalUsed: t
    }))
  )
), y_ = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2", this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(e) {
    const { abortSignal: t, ...n } = e;
    return {
      args: this.maybeEncodeFileParts(n),
      warnings: []
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: n } = await this.getArgs(e), { abortSignal: r } = e, o = await Oe(this.config.headers());
    try {
      const {
        responseHeaders: a,
        value: s,
        rawValue: i
      } = await Ce({
        url: this.getUrl(),
        headers: Ae(
          o,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !1),
          await Oe(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: Ue(pt()),
        failedResponseHandler: bt({
          errorSchema: pt(),
          errorToMessage: (u) => u
        }),
        ...r && { abortSignal: r },
        fetch: this.config.fetch
      });
      return {
        ...s,
        request: { body: t },
        response: { headers: a, body: i },
        warnings: n
      };
    } catch (a) {
      throw await At(a, await an(o));
    }
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), { abortSignal: r } = e, o = await Oe(this.config.headers());
    try {
      const { value: a, responseHeaders: s } = await Ce({
        url: this.getUrl(),
        headers: Ae(
          o,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !0),
          await Oe(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: Gt(pt()),
        failedResponseHandler: bt({
          errorSchema: pt(),
          errorToMessage: (i) => i
        }),
        ...r && { abortSignal: r },
        fetch: this.config.fetch
      });
      return {
        stream: a.pipeThrough(
          new TransformStream({
            start(i) {
              n.length > 0 && i.enqueue({ type: "stream-start", warnings: n });
            },
            transform(i, u) {
              if (i.success) {
                const c = i.value;
                if (c.type === "raw" && !e.includeRawChunks)
                  return;
                c.type === "response-metadata" && c.timestamp && typeof c.timestamp == "string" && (c.timestamp = new Date(c.timestamp)), u.enqueue(c);
              } else
                u.error(
                  i.error
                );
            }
          })
        ),
        request: { body: t },
        response: { headers: s }
      };
    } catch (a) {
      throw await At(a, await an(o));
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
      for (const n of t.content)
        if (this.isFilePart(n)) {
          const r = n;
          if (r.data instanceof Uint8Array) {
            const o = Uint8Array.from(r.data), a = Buffer.from(o).toString("base64");
            r.data = new URL(
              `data:${r.mediaType || "application/octet-stream"};base64,${a}`
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
}, __ = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: n,
    providerOptions: r
  }) {
    var o;
    const a = await Oe(this.config.headers());
    try {
      const {
        responseHeaders: s,
        value: i,
        rawValue: u
      } = await Ce({
        url: this.getUrl(),
        headers: Ae(
          a,
          t ?? {},
          this.getModelConfigHeaders(),
          await Oe(this.config.o11yHeaders)
        ),
        body: {
          input: e.length === 1 ? e[0] : e,
          ...r ? { providerOptions: r } : {}
        },
        successfulResponseHandler: Ue(
          b_
        ),
        failedResponseHandler: bt({
          errorSchema: pt(),
          errorToMessage: (c) => c
        }),
        ...n && { abortSignal: n },
        fetch: this.config.fetch
      });
      return {
        embeddings: i.embeddings,
        usage: (o = i.usage) != null ? o : void 0,
        providerMetadata: i.providerMetadata,
        response: { headers: s, body: u }
      };
    } catch (s) {
      throw await At(s, await an(a));
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
}, b_ = Re(
  () => U(
    d({
      embeddings: P(P(k())),
      usage: d({ tokens: k() }).nullish(),
      providerMetadata: Pe(l(), Pe(l(), le())).optional()
    })
  )
), w_ = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2", this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: n,
    aspectRatio: r,
    seed: o,
    providerOptions: a,
    headers: s,
    abortSignal: i
  }) {
    var u;
    const c = await Oe(this.config.headers());
    try {
      const {
        responseHeaders: p,
        value: m,
        rawValue: g
      } = await Ce({
        url: this.getUrl(),
        headers: Ae(
          c,
          s ?? {},
          this.getModelConfigHeaders(),
          await Oe(this.config.o11yHeaders)
        ),
        body: {
          prompt: e,
          n: t,
          ...n && { size: n },
          ...r && { aspectRatio: r },
          ...o && { seed: o },
          ...a && { providerOptions: a }
        },
        successfulResponseHandler: Ue(
          I_
        ),
        failedResponseHandler: bt({
          errorSchema: pt(),
          errorToMessage: (f) => f
        }),
        ...i && { abortSignal: i },
        fetch: this.config.fetch
      });
      return {
        images: m.images,
        // Always base64 strings from server
        warnings: (u = m.warnings) != null ? u : [],
        providerMetadata: m.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: p
        }
      };
    } catch (p) {
      throw At(p, await an(c));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/image-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-image-model-specification-version": "2",
      "ai-model-id": this.modelId
    };
  }
}, x_ = d({
  images: P(le()).optional()
}).catchall(le()), I_ = d({
  images: P(l()),
  // Always base64 strings over the wire
  warnings: P(
    d({
      type: x("other"),
      message: l()
    })
  ).optional(),
  providerMetadata: Pe(l(), x_).optional()
});
async function k_() {
  var e;
  return (e = ul.getContext().headers) == null ? void 0 : e["x-vercel-id"];
}
var T_ = "2.0.17", S_ = "0.0.1";
function E_(e = {}) {
  var t, n;
  let r = null, o = null;
  const a = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5;
  let s = 0;
  const i = (n = An(e.baseURL)) != null ? n : "https://ai-gateway.vercel.sh/v1/ai", u = async () => {
    const y = await M_(e);
    if (y)
      return ze(
        {
          Authorization: `Bearer ${y.token}`,
          "ai-gateway-protocol-version": S_,
          [_l]: y.authMethod,
          ...e.headers
        },
        `ai-sdk/gateway/${T_}`
      );
    throw xo.createContextualError({
      apiKeyProvided: !1,
      oidcTokenProvided: !1,
      statusCode: 401
    });
  }, c = () => {
    const y = Qt({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    }), _ = Qt({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    }), b = Qt({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const h = await k_();
      return {
        ...y && { "ai-o11y-deployment-id": y },
        ..._ && { "ai-o11y-environment": _ },
        ...b && { "ai-o11y-region": b },
        ...h && { "ai-o11y-request-id": h }
      };
    };
  }, p = (y) => new y_(y, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), m = async () => {
    var y, _, b;
    const h = (b = (_ = (y = e._internal) == null ? void 0 : y.currentDate) == null ? void 0 : _.call(y).getTime()) != null ? b : Date.now();
    return (!r || h - s > a) && (s = h, r = new ls({
      baseURL: i,
      headers: u,
      fetch: e.fetch
    }).getAvailableModels().then((v) => (o = v, v)).catch(async (v) => {
      throw await At(
        v,
        await an(await u())
      );
    })), o ? Promise.resolve(o) : r;
  }, g = async () => new ls({
    baseURL: i,
    headers: u,
    fetch: e.fetch
  }).getCredits().catch(async (y) => {
    throw await At(
      y,
      await an(await u())
    );
  }), f = function(y) {
    if (new.target)
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    return p(y);
  };
  return f.getAvailableModels = m, f.getCredits = g, f.imageModel = (y) => new w_(y, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), f.languageModel = p, f.textEmbeddingModel = (y) => new __(y, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), f;
}
var C_ = E_();
async function M_(e) {
  const t = Qt({
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
      token: await ul.getVercelOidcToken(),
      authMethod: "oidc"
    };
  } catch {
    return null;
  }
}
var R_ = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Dt = "1.9.0", us = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function O_(e) {
  var t = /* @__PURE__ */ new Set([e]), n = /* @__PURE__ */ new Set(), r = e.match(us);
  if (!r)
    return function() {
      return !1;
    };
  var o = {
    major: +r[1],
    minor: +r[2],
    patch: +r[3],
    prerelease: r[4]
  };
  if (o.prerelease != null)
    return function(u) {
      return u === e;
    };
  function a(i) {
    return n.add(i), !1;
  }
  function s(i) {
    return t.add(i), !0;
  }
  return function(u) {
    if (t.has(u))
      return !0;
    if (n.has(u))
      return !1;
    var c = u.match(us);
    if (!c)
      return a(u);
    var p = {
      major: +c[1],
      minor: +c[2],
      patch: +c[3],
      prerelease: c[4]
    };
    return p.prerelease != null || o.major !== p.major ? a(u) : o.major === 0 ? o.minor === p.minor && o.patch <= p.patch ? s(u) : a(u) : o.minor <= p.minor ? s(u) : a(u);
  };
}
var N_ = O_(Dt), A_ = Dt.split(".")[0], En = Symbol.for("opentelemetry.js.api." + A_), Cn = R_;
function $n(e, t, n, r) {
  var o;
  r === void 0 && (r = !1);
  var a = Cn[En] = (o = Cn[En]) !== null && o !== void 0 ? o : {
    version: Dt
  };
  if (!r && a[e]) {
    var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return n.error(s.stack || s.message), !1;
  }
  if (a.version !== Dt) {
    var s = new Error("@opentelemetry/api: Registration of version v" + a.version + " for " + e + " does not match previously registered API v" + Dt);
    return n.error(s.stack || s.message), !1;
  }
  return a[e] = t, n.debug("@opentelemetry/api: Registered a global for " + e + " v" + Dt + "."), !0;
}
function Ut(e) {
  var t, n, r = (t = Cn[En]) === null || t === void 0 ? void 0 : t.version;
  if (!(!r || !N_(r)))
    return (n = Cn[En]) === null || n === void 0 ? void 0 : n[e];
}
function Pn(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Dt + ".");
  var n = Cn[En];
  n && delete n[e];
}
var $_ = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, P_ = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, j_ = (
  /** @class */
  (function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return vn("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return vn("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return vn("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return vn("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return vn("verbose", this._namespace, t);
    }, e;
  })()
);
function vn(e, t, n) {
  var r = Ut("diag");
  if (r)
    return n.unshift(t), r[e].apply(r, P_([], $_(n), !1));
}
var nt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(nt || (nt = {}));
function q_(e, t) {
  e < nt.NONE ? e = nt.NONE : e > nt.ALL && (e = nt.ALL), t = t || {};
  function n(r, o) {
    var a = t[r];
    return typeof a == "function" && e >= o ? a.bind(t) : function() {
    };
  }
  return {
    error: n("error", nt.ERROR),
    warn: n("warn", nt.WARN),
    info: n("info", nt.INFO),
    debug: n("debug", nt.DEBUG),
    verbose: n("verbose", nt.VERBOSE)
  };
}
var D_ = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, z_ = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, U_ = "diag", xt = (
  /** @class */
  (function() {
    function e() {
      function t(o) {
        return function() {
          for (var a = [], s = 0; s < arguments.length; s++)
            a[s] = arguments[s];
          var i = Ut("diag");
          if (i)
            return i[o].apply(i, z_([], D_(a), !1));
        };
      }
      var n = this, r = function(o, a) {
        var s, i, u;
        if (a === void 0 && (a = { logLevel: nt.INFO }), o === n) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return n.error((s = c.stack) !== null && s !== void 0 ? s : c.message), !1;
        }
        typeof a == "number" && (a = {
          logLevel: a
        });
        var p = Ut("diag"), m = q_((i = a.logLevel) !== null && i !== void 0 ? i : nt.INFO, o);
        if (p && !a.suppressOverrideMessage) {
          var g = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          p.warn("Current logger will be overwritten from " + g), m.warn("Current logger will overwrite one already registered from " + g);
        }
        return $n("diag", m, n, !0);
      };
      n.setLogger = r, n.disable = function() {
        Pn(U_, n);
      }, n.createComponentLogger = function(o) {
        return new j_(o);
      }, n.verbose = t("verbose"), n.debug = t("debug"), n.info = t("info"), n.warn = t("warn"), n.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  })()
), Z_ = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, L_ = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, F_ = (
  /** @class */
  (function() {
    function e(t) {
      this._entries = t ? new Map(t) : /* @__PURE__ */ new Map();
    }
    return e.prototype.getEntry = function(t) {
      var n = this._entries.get(t);
      if (n)
        return Object.assign({}, n);
    }, e.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(t) {
        var n = Z_(t, 2), r = n[0], o = n[1];
        return [r, o];
      });
    }, e.prototype.setEntry = function(t, n) {
      var r = new e(this._entries);
      return r._entries.set(t, n), r;
    }, e.prototype.removeEntry = function(t) {
      var n = new e(this._entries);
      return n._entries.delete(t), n;
    }, e.prototype.removeEntries = function() {
      for (var t, n, r = [], o = 0; o < arguments.length; o++)
        r[o] = arguments[o];
      var a = new e(this._entries);
      try {
        for (var s = L_(r), i = s.next(); !i.done; i = s.next()) {
          var u = i.value;
          a._entries.delete(u);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          i && !i.done && (n = s.return) && n.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      return a;
    }, e.prototype.clear = function() {
      return new e();
    }, e;
  })()
);
xt.instance();
function V_(e) {
  return e === void 0 && (e = {}), new F_(new Map(Object.entries(e)));
}
function bl(e) {
  return Symbol.for(e);
}
var G_ = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      var n = this;
      n._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), n.getValue = function(r) {
        return n._currentContext.get(r);
      }, n.setValue = function(r, o) {
        var a = new e(n._currentContext);
        return a._currentContext.set(r, o), a;
      }, n.deleteValue = function(r) {
        var o = new e(n._currentContext);
        return o._currentContext.delete(r), o;
      };
    }
    return e;
  })()
), B_ = new G_(), Bt = /* @__PURE__ */ (function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), J_ = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, n) {
      return rb;
    }, e.prototype.createHistogram = function(t, n) {
      return ob;
    }, e.prototype.createCounter = function(t, n) {
      return nb;
    }, e.prototype.createUpDownCounter = function(t, n) {
      return ab;
    }, e.prototype.createObservableGauge = function(t, n) {
      return ib;
    }, e.prototype.createObservableCounter = function(t, n) {
      return sb;
    }, e.prototype.createObservableUpDownCounter = function(t, n) {
      return lb;
    }, e.prototype.addBatchObservableCallback = function(t, n) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  })()
), pr = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e() {
    }
    return e;
  })()
), H_ = (
  /** @class */
  (function(e) {
    Bt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(n, r) {
    }, t;
  })(pr)
), W_ = (
  /** @class */
  (function(e) {
    Bt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(n, r) {
    }, t;
  })(pr)
), K_ = (
  /** @class */
  (function(e) {
    Bt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(n, r) {
    }, t;
  })(pr)
), Y_ = (
  /** @class */
  (function(e) {
    Bt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(n, r) {
    }, t;
  })(pr)
), Io = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  })()
), X_ = (
  /** @class */
  (function(e) {
    Bt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(Io)
), Q_ = (
  /** @class */
  (function(e) {
    Bt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(Io)
), eb = (
  /** @class */
  (function(e) {
    Bt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(Io)
), tb = new J_(), nb = new H_(), rb = new K_(), ob = new Y_(), ab = new W_(), sb = new X_(), ib = new Q_(), lb = new eb(), ub = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, cb = {
  set: function(e, t, n) {
    e != null && (e[t] = n);
  }
}, db = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, pb = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, fb = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.active = function() {
      return B_;
    }, e.prototype.with = function(t, n, r) {
      for (var o = [], a = 3; a < arguments.length; a++)
        o[a - 3] = arguments[a];
      return n.call.apply(n, pb([r], db(o), !1));
    }, e.prototype.bind = function(t, n) {
      return n;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  })()
), mb = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, hb = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, jr = "context", gb = new fb(), fr = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return $n(jr, t, xt.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, n, r) {
      for (var o, a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return (o = this._getContextManager()).with.apply(o, hb([t, n, r], mb(a), !1));
    }, e.prototype.bind = function(t, n) {
      return this._getContextManager().bind(t, n);
    }, e.prototype._getContextManager = function() {
      return Ut(jr) || gb;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Pn(jr, xt.instance());
    }, e;
  })()
), eo;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(eo || (eo = {}));
var wl = "0000000000000000", xl = "00000000000000000000000000000000", vb = {
  traceId: xl,
  spanId: wl,
  traceFlags: eo.NONE
}, bn = (
  /** @class */
  (function() {
    function e(t) {
      t === void 0 && (t = vb), this._spanContext = t;
    }
    return e.prototype.spanContext = function() {
      return this._spanContext;
    }, e.prototype.setAttribute = function(t, n) {
      return this;
    }, e.prototype.setAttributes = function(t) {
      return this;
    }, e.prototype.addEvent = function(t, n) {
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
    }, e.prototype.recordException = function(t, n) {
    }, e;
  })()
), ko = bl("OpenTelemetry Context Key SPAN");
function To(e) {
  return e.getValue(ko) || void 0;
}
function yb() {
  return To(fr.getInstance().active());
}
function So(e, t) {
  return e.setValue(ko, t);
}
function _b(e) {
  return e.deleteValue(ko);
}
function bb(e, t) {
  return So(e, new bn(t));
}
function Il(e) {
  var t;
  return (t = To(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var wb = /^([0-9a-f]{32})$/i, xb = /^[0-9a-f]{16}$/i;
function Ib(e) {
  return wb.test(e) && e !== xl;
}
function kb(e) {
  return xb.test(e) && e !== wl;
}
function kl(e) {
  return Ib(e.traceId) && kb(e.spanId);
}
function Tb(e) {
  return new bn(e);
}
var qr = fr.getInstance(), Tl = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, n, r) {
      r === void 0 && (r = qr.active());
      var o = !!(n != null && n.root);
      if (o)
        return new bn();
      var a = r && Il(r);
      return Sb(a) && kl(a) ? new bn(a) : new bn();
    }, e.prototype.startActiveSpan = function(t, n, r, o) {
      var a, s, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = n : arguments.length === 3 ? (a = n, i = r) : (a = n, s = r, i = o);
        var u = s ?? qr.active(), c = this.startSpan(t, a, u), p = So(u, c);
        return qr.with(p, i, void 0, c);
      }
    }, e;
  })()
);
function Sb(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var Eb = new Tl(), Cb = (
  /** @class */
  (function() {
    function e(t, n, r, o) {
      this._provider = t, this.name = n, this.version = r, this.options = o;
    }
    return e.prototype.startSpan = function(t, n, r) {
      return this._getTracer().startSpan(t, n, r);
    }, e.prototype.startActiveSpan = function(t, n, r, o) {
      var a = this._getTracer();
      return Reflect.apply(a.startActiveSpan, a, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : Eb;
    }, e;
  })()
), Mb = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, n, r) {
      return new Tl();
    }, e;
  })()
), Rb = new Mb(), cs = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, n, r) {
      var o;
      return (o = this.getDelegateTracer(t, n, r)) !== null && o !== void 0 ? o : new Cb(this, t, n, r);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Rb;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, n, r) {
      var o;
      return (o = this._delegate) === null || o === void 0 ? void 0 : o.getTracer(t, n, r);
    }, e;
  })()
), nr;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(nr || (nr = {}));
fr.getInstance();
xt.instance();
var Ob = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, n, r) {
      return tb;
    }, e;
  })()
), Nb = new Ob(), Dr = "metrics", Ab = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return $n(Dr, t, xt.instance());
    }, e.prototype.getMeterProvider = function() {
      return Ut(Dr) || Nb;
    }, e.prototype.getMeter = function(t, n, r) {
      return this.getMeterProvider().getMeter(t, n, r);
    }, e.prototype.disable = function() {
      Pn(Dr, xt.instance());
    }, e;
  })()
);
Ab.getInstance();
var $b = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.inject = function(t, n) {
    }, e.prototype.extract = function(t, n) {
      return t;
    }, e.prototype.fields = function() {
      return [];
    }, e;
  })()
), Eo = bl("OpenTelemetry Baggage Key");
function Sl(e) {
  return e.getValue(Eo) || void 0;
}
function Pb() {
  return Sl(fr.getInstance().active());
}
function jb(e, t) {
  return e.setValue(Eo, t);
}
function qb(e) {
  return e.deleteValue(Eo);
}
var zr = "propagation", Db = new $b(), zb = (
  /** @class */
  (function() {
    function e() {
      this.createBaggage = V_, this.getBaggage = Sl, this.getActiveBaggage = Pb, this.setBaggage = jb, this.deleteBaggage = qb;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return $n(zr, t, xt.instance());
    }, e.prototype.inject = function(t, n, r) {
      return r === void 0 && (r = cb), this._getGlobalPropagator().inject(t, n, r);
    }, e.prototype.extract = function(t, n, r) {
      return r === void 0 && (r = ub), this._getGlobalPropagator().extract(t, n, r);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Pn(zr, xt.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return Ut(zr) || Db;
    }, e;
  })()
);
zb.getInstance();
var Ur = "trace", Ub = (
  /** @class */
  (function() {
    function e() {
      this._proxyTracerProvider = new cs(), this.wrapSpanContext = Tb, this.isSpanContextValid = kl, this.deleteSpan = _b, this.getSpan = To, this.getActiveSpan = yb, this.getSpanContext = Il, this.setSpan = So, this.setSpanContext = bb;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var n = $n(Ur, this._proxyTracerProvider, xt.instance());
      return n && this._proxyTracerProvider.setDelegate(t), n;
    }, e.prototype.getTracerProvider = function() {
      return Ut(Ur) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, n) {
      return this.getTracerProvider().getTracer(t, n);
    }, e.prototype.disable = function() {
      Pn(Ur, xt.instance()), this._proxyTracerProvider = new cs();
    }, e;
  })()
), Zb = Ub.getInstance(), Lb = Object.defineProperty, Fb = (e, t) => {
  for (var n in t)
    Lb(e, n, { get: t[n], enumerable: !0 });
}, El = "AI_NoOutputSpecifiedError", Cl = `vercel.ai.error.${El}`, Vb = Symbol.for(Cl), Ml, Rl = class extends H {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: El, message: e }), this[Ml] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, Cl);
  }
};
Ml = Vb;
function Gb(e) {
  const t = "AI SDK Warning:";
  switch (e.type) {
    case "unsupported-setting": {
      let n = `${t} The "${e.setting}" setting is not supported by this model`;
      return e.details && (n += ` - ${e.details}`), n;
    }
    case "unsupported-tool": {
      const n = "name" in e.tool ? e.tool.name : "unknown tool";
      let r = `${t} The tool "${n}" is not supported by this model`;
      return e.details && (r += ` - ${e.details}`), r;
    }
    case "other":
      return `${t} ${e.message}`;
    default:
      return `${t} ${JSON.stringify(e, null, 2)}`;
  }
}
var Bb = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.", ds = !1, Jt = (e) => {
  if (e.length === 0)
    return;
  const t = globalThis.AI_SDK_LOG_WARNINGS;
  if (t !== !1) {
    if (typeof t == "function") {
      t(e);
      return;
    }
    ds || (ds = !0, console.info(Bb));
    for (const n of e)
      console.warn(Gb(n));
  }
}, Ol = "AI_InvalidArgumentError", Nl = `vercel.ai.error.${Ol}`, Jb = Symbol.for(Nl), Al, we = class extends H {
  constructor({
    parameter: e,
    value: t,
    message: n
  }) {
    super({
      name: Ol,
      message: `Invalid argument for parameter ${e}: ${n}`
    }), this[Al] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, Nl);
  }
};
Al = Jb;
var $l = "AI_InvalidStreamPartError", Pl = `vercel.ai.error.${$l}`, Hb = Symbol.for(Pl), jl, $0 = class extends H {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: $l, message: t }), this[jl] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, Pl);
  }
};
jl = Hb;
var ql = "AI_InvalidToolInputError", Dl = `vercel.ai.error.${ql}`, Wb = Symbol.for(Dl), zl, Ul = class extends H {
  constructor({
    toolInput: e,
    toolName: t,
    cause: n,
    message: r = `Invalid input for tool ${t}: ${ln(n)}`
  }) {
    super({ name: ql, message: r, cause: n }), this[zl] = !0, this.toolInput = e, this.toolName = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, Dl);
  }
};
zl = Wb;
var Zl = "AI_NoImageGeneratedError", Ll = `vercel.ai.error.${Zl}`, Kb = Symbol.for(Ll), Fl, Yb = class extends H {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: n
  }) {
    super({ name: Zl, message: e, cause: t }), this[Fl] = !0, this.responses = n;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ll);
  }
};
Fl = Kb;
var Vl = "AI_NoObjectGeneratedError", Gl = `vercel.ai.error.${Vl}`, Xb = Symbol.for(Gl), Bl, Zt = class extends H {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: n,
    response: r,
    usage: o,
    finishReason: a
  }) {
    super({ name: Vl, message: e, cause: t }), this[Bl] = !0, this.text = n, this.response = r, this.usage = o, this.finishReason = a;
  }
  static isInstance(e) {
    return H.hasMarker(e, Gl);
  }
};
Bl = Xb;
var Jl = "AI_NoOutputGeneratedError", Hl = `vercel.ai.error.${Jl}`, Qb = Symbol.for(Hl), Wl, ew = class extends H {
  // used in isInstance
  constructor({
    message: e = "No output generated.",
    cause: t
  } = {}) {
    super({ name: Jl, message: e, cause: t }), this[Wl] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, Hl);
  }
};
Wl = Qb;
var tw = class extends H {
  constructor(e) {
    super({
      name: "AI_NoSpeechGeneratedError",
      message: "No speech audio generated."
    }), this.responses = e.responses;
  }
}, Kl = "AI_NoSuchToolError", Yl = `vercel.ai.error.${Kl}`, nw = Symbol.for(Yl), Xl, to = class extends H {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: n = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Kl, message: n }), this[Xl] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, Yl);
  }
};
Xl = nw;
var Ql = "AI_ToolCallRepairError", eu = `vercel.ai.error.${Ql}`, rw = Symbol.for(eu), tu, ow = class extends H {
  constructor({
    cause: e,
    originalError: t,
    message: n = `Error repairing tool call: ${ln(e)}`
  }) {
    super({ name: Ql, message: n, cause: e }), this[tu] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, eu);
  }
};
tu = rw;
var jn = class extends H {
  constructor(e) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${e.version} for provider "${e.provider}" and model "${e.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    }), this.version = e.version, this.provider = e.provider, this.modelId = e.modelId;
  }
}, nu = "AI_InvalidDataContentError", ru = `vercel.ai.error.${nu}`, aw = Symbol.for(ru), ou, ps = class extends H {
  constructor({
    content: e,
    cause: t,
    message: n = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: nu, message: n, cause: t }), this[ou] = !0, this.content = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, ru);
  }
};
ou = aw;
var au = "AI_InvalidMessageRoleError", su = `vercel.ai.error.${au}`, sw = Symbol.for(su), iu, iw = class extends H {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: au, message: t }), this[iu] = !0, this.role = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, su);
  }
};
iu = sw;
var lu = "AI_MessageConversionError", uu = `vercel.ai.error.${lu}`, lw = Symbol.for(uu), cu, uw = class extends H {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: lu, message: t }), this[cu] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, uu);
  }
};
cu = lw;
var du = "AI_DownloadError", pu = `vercel.ai.error.${du}`, cw = Symbol.for(pu), fu, Zr = class extends H {
  constructor({
    url: e,
    statusCode: t,
    statusText: n,
    cause: r,
    message: o = r == null ? `Failed to download ${e}: ${t} ${n}` : `Failed to download ${e}: ${r}`
  }) {
    super({ name: du, message: o, cause: r }), this[fu] = !0, this.url = e, this.statusCode = t, this.statusText = n;
  }
  static isInstance(e) {
    return H.hasMarker(e, pu);
  }
};
fu = cw;
var mu = "AI_RetryError", hu = `vercel.ai.error.${mu}`, dw = Symbol.for(hu), gu, fs = class extends H {
  constructor({
    message: e,
    reason: t,
    errors: n
  }) {
    super({ name: mu, message: e }), this[gu] = !0, this.reason = t, this.errors = n, this.lastError = n[n.length - 1];
  }
  static isInstance(e) {
    return H.hasMarker(e, hu);
  }
};
gu = dw;
function sn(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v2")
      throw new jn({
        version: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId
      });
    return e;
  }
  return Co().languageModel(e);
}
function vu(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v2")
      throw new jn({
        version: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId
      });
    return e;
  }
  return Co().textEmbeddingModel(
    e
  );
}
function pw(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v2")
      throw new jn({
        version: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId
      });
    return e;
  }
  return Co().imageModel(e);
}
function Co() {
  var e;
  return (e = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? e : C_;
}
var yu = [
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
], _u = [
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
], fw = (e) => {
  const t = typeof e == "string" ? Nn(e) : e, n = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
  return t.slice(n + 10);
};
function mw(e) {
  return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && // 'I'
  e[1] === 68 && // 'D'
  e[2] === 51 ? fw(e) : e;
}
function mr({
  data: e,
  signatures: t
}) {
  const n = mw(e), r = typeof n == "string" ? Nn(
    n.substring(0, Math.min(n.length, 24))
  ) : n;
  for (const o of t)
    if (r.length >= o.bytesPrefix.length && o.bytesPrefix.every(
      (a, s) => a === null || r[s] === a
    ))
      return o.mediaType;
}
var mt = "5.0.104", bu = async ({ url: e }) => {
  var t;
  const n = e.toString();
  try {
    const r = await fetch(n, {
      headers: ze(
        {},
        `ai-sdk/${mt}`,
        rn()
      )
    });
    if (!r.ok)
      throw new Zr({
        url: n,
        statusCode: r.status,
        statusText: r.statusText
      });
    return {
      data: new Uint8Array(await r.arrayBuffer()),
      mediaType: (t = r.headers.get("content-type")) != null ? t : void 0
    };
  } catch (r) {
    throw Zr.isInstance(r) ? r : new Zr({ url: n, cause: r });
  }
}, hw = (e = bu) => (t) => Promise.all(
  t.map(
    async (n) => n.isUrlSupportedByModel ? null : e(n)
  )
);
function gw(e) {
  try {
    const [t, n] = e.split(",");
    return {
      mediaType: t.split(";")[0].split(":")[1],
      base64Content: n
    };
  } catch {
    return {
      mediaType: void 0,
      base64Content: void 0
    };
  }
}
var wu = oe([
  l(),
  Yn(Uint8Array),
  Yn(ArrayBuffer),
  Di(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, n;
      return (n = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? n : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function xu(e) {
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
    const { mediaType: t, base64Content: n } = gw(
      e.toString()
    );
    if (t == null || n == null)
      throw new H({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`
      });
    return { data: n, mediaType: t };
  }
  return { data: e, mediaType: void 0 };
}
function vw(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? er(new Uint8Array(e)) : er(e);
}
function yw(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return Nn(e);
    } catch (t) {
      throw new ps({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new ps({ content: e });
}
async function hr({
  prompt: e,
  supportedUrls: t,
  download: n = hw()
}) {
  const r = await bw(
    e.messages,
    n,
    t
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (o) => _w({ message: o, downloadedAssets: r })
    )
  ];
}
function _w({
  message: e,
  downloadedAssets: t
}) {
  const n = e.role;
  switch (n) {
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
        content: e.content.map((r) => ww(r, t)).filter((r) => r.type !== "text" || r.text !== ""),
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
          (r) => r.type !== "text" || r.text !== "" || r.providerOptions != null
        ).map((r) => {
          const o = r.providerOptions;
          switch (r.type) {
            case "file": {
              const { data: a, mediaType: s } = xu(
                r.data
              );
              return {
                type: "file",
                data: a,
                filename: r.filename,
                mediaType: s ?? r.mediaType,
                providerOptions: o
              };
            }
            case "reasoning":
              return {
                type: "reasoning",
                text: r.text,
                providerOptions: o
              };
            case "text":
              return {
                type: "text",
                text: r.text,
                providerOptions: o
              };
            case "tool-call":
              return {
                type: "tool-call",
                toolCallId: r.toolCallId,
                toolName: r.toolName,
                input: r.input,
                providerExecuted: r.providerExecuted,
                providerOptions: o
              };
            case "tool-result":
              return {
                type: "tool-result",
                toolCallId: r.toolCallId,
                toolName: r.toolName,
                output: r.output,
                providerOptions: o
              };
          }
        }),
        providerOptions: e.providerOptions
      };
    case "tool":
      return {
        role: "tool",
        content: e.content.map((r) => ({
          type: "tool-result",
          toolCallId: r.toolCallId,
          toolName: r.toolName,
          output: r.output,
          providerOptions: r.providerOptions
        })),
        providerOptions: e.providerOptions
      };
    default: {
      const r = n;
      throw new iw({ role: r });
    }
  }
}
async function bw(e, t, n) {
  const r = e.filter((a) => a.role === "user").map((a) => a.content).filter(
    (a) => Array.isArray(a)
  ).flat().filter(
    (a) => a.type === "image" || a.type === "file"
  ).map((a) => {
    var s;
    const i = (s = a.mediaType) != null ? s : a.type === "image" ? "image/*" : void 0;
    let u = a.type === "image" ? a.image : a.data;
    if (typeof u == "string")
      try {
        u = new URL(u);
      } catch {
      }
    return { mediaType: i, data: u };
  }).filter(
    (a) => a.data instanceof URL
  ).map((a) => ({
    url: a.data,
    isUrlSupportedByModel: a.mediaType != null && eh({
      url: a.data.toString(),
      mediaType: a.mediaType,
      supportedUrls: n
    })
  })), o = await t(r);
  return Object.fromEntries(
    o.map(
      (a, s) => a == null ? null : [
        r[s].url.toString(),
        { data: a.data, mediaType: a.mediaType }
      ]
    ).filter((a) => a != null)
  );
}
function ww(e, t) {
  var n;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerOptions: e.providerOptions
    };
  let r;
  const o = e.type;
  switch (o) {
    case "image":
      r = e.image;
      break;
    case "file":
      r = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${o}`);
  }
  const { data: a, mediaType: s } = xu(r);
  let i = s ?? e.mediaType, u = a;
  if (u instanceof URL) {
    const c = t[u.toString()];
    c && (u = c.data, i ?? (i = c.mediaType));
  }
  switch (o) {
    case "image":
      return (u instanceof Uint8Array || typeof u == "string") && (i = (n = mr({ data: u, signatures: yu })) != null ? n : i), {
        type: "file",
        mediaType: i ?? "image/*",
        // any image
        filename: void 0,
        data: u,
        providerOptions: e.providerOptions
      };
    case "file": {
      if (i == null)
        throw new Error("Media type is missing for file part");
      return {
        type: "file",
        mediaType: i,
        filename: e.filename,
        data: u,
        providerOptions: e.providerOptions
      };
    }
  }
}
function Lt({
  maxOutputTokens: e,
  temperature: t,
  topP: n,
  topK: r,
  presencePenalty: o,
  frequencyPenalty: a,
  seed: s,
  stopSequences: i
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new we({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer"
      });
    if (e < 1)
      throw new we({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new we({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (n != null && typeof n != "number")
    throw new we({
      parameter: "topP",
      value: n,
      message: "topP must be a number"
    });
  if (r != null && typeof r != "number")
    throw new we({
      parameter: "topK",
      value: r,
      message: "topK must be a number"
    });
  if (o != null && typeof o != "number")
    throw new we({
      parameter: "presencePenalty",
      value: o,
      message: "presencePenalty must be a number"
    });
  if (a != null && typeof a != "number")
    throw new we({
      parameter: "frequencyPenalty",
      value: a,
      message: "frequencyPenalty must be a number"
    });
  if (s != null && !Number.isInteger(s))
    throw new we({
      parameter: "seed",
      value: s,
      message: "seed must be an integer"
    });
  return {
    maxOutputTokens: e,
    temperature: t,
    topP: n,
    topK: r,
    presencePenalty: o,
    frequencyPenalty: a,
    stopSequences: i,
    seed: s
  };
}
function xw(e) {
  return e != null && Object.keys(e).length > 0;
}
function Iu({
  tools: e,
  toolChoice: t,
  activeTools: n
}) {
  return xw(e) ? {
    tools: (n != null ? Object.entries(e).filter(
      ([o]) => n.includes(o)
    ) : Object.entries(e)).map(([o, a]) => {
      const s = a.type;
      switch (s) {
        case void 0:
        case "dynamic":
        case "function":
          return {
            type: "function",
            name: o,
            description: a.description,
            inputSchema: on(a.inputSchema).jsonSchema,
            providerOptions: a.providerOptions
          };
        case "provider-defined":
          return {
            type: "provider-defined",
            name: o,
            id: a.id,
            args: a.args
          };
        default: {
          const i = s;
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
var Mn = qi(
  () => oe([
    _m(),
    l(),
    k(),
    J(),
    Pe(l(), Mn),
    P(Mn)
  ])
), ue = Pe(
  l(),
  Pe(l(), Mn)
), ku = d({
  type: x("text"),
  text: l(),
  providerOptions: ue.optional()
}), Iw = d({
  type: x("image"),
  image: oe([wu, Yn(URL)]),
  mediaType: l().optional(),
  providerOptions: ue.optional()
}), Tu = d({
  type: x("file"),
  data: oe([wu, Yn(URL)]),
  filename: l().optional(),
  mediaType: l(),
  providerOptions: ue.optional()
}), kw = d({
  type: x("reasoning"),
  text: l(),
  providerOptions: ue.optional()
}), Tw = d({
  type: x("tool-call"),
  toolCallId: l(),
  toolName: l(),
  input: le(),
  providerOptions: ue.optional(),
  providerExecuted: J().optional()
}), Sw = de("type", [
  d({
    type: x("text"),
    value: l()
  }),
  d({
    type: x("json"),
    value: Mn
  }),
  d({
    type: x("error-text"),
    value: l()
  }),
  d({
    type: x("error-json"),
    value: Mn
  }),
  d({
    type: x("content"),
    value: P(
      oe([
        d({
          type: x("text"),
          text: l()
        }),
        d({
          type: x("media"),
          data: l(),
          mediaType: l()
        })
      ])
    )
  })
]), Su = d({
  type: x("tool-result"),
  toolCallId: l(),
  toolName: l(),
  output: Sw,
  providerOptions: ue.optional()
}), Eu = d(
  {
    role: x("system"),
    content: l(),
    providerOptions: ue.optional()
  }
), P0 = Eu, Cu = d({
  role: x("user"),
  content: oe([
    l(),
    P(oe([ku, Iw, Tu]))
  ]),
  providerOptions: ue.optional()
}), j0 = Cu, Mu = d({
  role: x("assistant"),
  content: oe([
    l(),
    P(
      oe([
        ku,
        Tu,
        kw,
        Tw,
        Su
      ])
    )
  ]),
  providerOptions: ue.optional()
}), q0 = Mu, Ru = d({
  role: x("tool"),
  content: P(Su),
  providerOptions: ue.optional()
}), D0 = Ru, Ou = oe([
  Eu,
  Cu,
  Mu,
  Ru
]), z0 = Ou;
async function gr(e) {
  if (e.prompt == null && e.messages == null)
    throw new Pt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new Pt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new Pt({
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
    throw new Pt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (t.length === 0)
    throw new Pt({
      prompt: e,
      message: "messages must not be empty"
    });
  const n = await it({
    value: t,
    schema: P(Ou)
  });
  if (!n.success)
    throw new Pt({
      prompt: e,
      message: "The messages must be a ModelMessage[]. If you have passed a UIMessage[], you can use convertToModelMessages to convert them.",
      cause: n.error
    });
  return {
    messages: t,
    system: e.system
  };
}
function vr(e) {
  return xo.isInstance(e) || gl.isInstance(e) ? new H({
    name: "GatewayError",
    message: "Vercel AI Gateway access failed. If you want to use AI SDK providers directly, use the providers, e.g. @ai-sdk/openai, or register a different global default provider.",
    cause: e
  }) : e;
}
function We({
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
function dn({
  model: e,
  settings: t,
  telemetry: n,
  headers: r
}) {
  var o;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    // settings:
    ...Object.entries(t).reduce((a, [s, i]) => (a[`ai.settings.${s}`] = i, a), {}),
    // add metadata as attributes:
    ...Object.entries((o = n == null ? void 0 : n.metadata) != null ? o : {}).reduce(
      (a, [s, i]) => (a[`ai.telemetry.metadata.${s}`] = i, a),
      {}
    ),
    // request headers
    ...Object.entries(r ?? {}).reduce((a, [s, i]) => (i !== void 0 && (a[`ai.request.headers.${s}`] = i), a), {})
  };
}
var Ew = {
  startSpan() {
    return Bn;
  },
  startActiveSpan(e, t, n, r) {
    if (typeof t == "function")
      return t(Bn);
    if (typeof n == "function")
      return n(Bn);
    if (typeof r == "function")
      return r(Bn);
  }
}, Bn = {
  spanContext() {
    return Cw;
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
}, Cw = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function pn({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || Zb.getTracer("ai") : Ew;
}
function Ke({
  name: e,
  tracer: t,
  attributes: n,
  fn: r,
  endWhenDone: o = !0
}) {
  return t.startActiveSpan(e, { attributes: n }, async (a) => {
    try {
      const s = await r(a);
      return o && a.end(), s;
    } catch (s) {
      try {
        Mo(a, s);
      } finally {
        a.end();
      }
      throw s;
    }
  });
}
function Mo(e, t) {
  t instanceof Error ? (e.recordException({
    name: t.name,
    message: t.message,
    stack: t.stack
  }), e.setStatus({
    code: nr.ERROR,
    message: t.message
  })) : e.setStatus({ code: nr.ERROR });
}
function he({
  telemetry: e,
  attributes: t
}) {
  return (e == null ? void 0 : e.isEnabled) !== !0 ? {} : Object.entries(t).reduce((n, [r, o]) => {
    if (o == null)
      return n;
    if (typeof o == "object" && "input" in o && typeof o.input == "function") {
      if ((e == null ? void 0 : e.recordInputs) === !1)
        return n;
      const a = o.input();
      return a == null ? n : { ...n, [r]: a };
    }
    if (typeof o == "object" && "output" in o && typeof o.output == "function") {
      if ((e == null ? void 0 : e.recordOutputs) === !1)
        return n;
      const a = o.output();
      return a == null ? n : { ...n, [r]: a };
    }
    return { ...n, [r]: o };
  }, {});
}
function yr(e) {
  return JSON.stringify(
    e.map((t) => ({
      ...t,
      content: typeof t.content == "string" ? t.content : t.content.map(
        (n) => n.type === "file" ? {
          ...n,
          data: n.data instanceof Uint8Array ? vw(n.data) : n.data
        } : n
      )
    }))
  );
}
function Nu(e, t) {
  return {
    inputTokens: yn(e.inputTokens, t.inputTokens),
    outputTokens: yn(e.outputTokens, t.outputTokens),
    totalTokens: yn(e.totalTokens, t.totalTokens),
    reasoningTokens: yn(
      e.reasoningTokens,
      t.reasoningTokens
    ),
    cachedInputTokens: yn(
      e.cachedInputTokens,
      t.cachedInputTokens
    )
  };
}
function yn(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function rr(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function Mw({
  error: e,
  exponentialBackoffDelay: t
}) {
  const n = e.responseHeaders;
  if (!n)
    return t;
  let r;
  const o = n["retry-after-ms"];
  if (o) {
    const s = parseFloat(o);
    Number.isNaN(s) || (r = s);
  }
  const a = n["retry-after"];
  if (a && r === void 0) {
    const s = parseFloat(a);
    Number.isNaN(s) ? r = Date.parse(a) - Date.now() : r = s * 1e3;
  }
  return r != null && !Number.isNaN(r) && 0 <= r && (r < 60 * 1e3 || r < t) ? r : t;
}
var Rw = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: n = 2,
  abortSignal: r
} = {}) => async (o) => Au(o, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: n,
  abortSignal: r
});
async function Au(e, {
  maxRetries: t,
  delayInMs: n,
  backoffFactor: r,
  abortSignal: o
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (zt(s) || t === 0)
      throw s;
    const i = cr(s), u = [...a, s], c = u.length;
    if (c > t)
      throw new fs({
        message: `Failed after ${c} attempts. Last error: ${i}`,
        reason: "maxRetriesExceeded",
        errors: u
      });
    if (s instanceof Error && qe.isInstance(s) && s.isRetryable === !0 && c <= t)
      return await go(
        Mw({
          error: s,
          exponentialBackoffDelay: n
        }),
        { abortSignal: o }
      ), Au(
        e,
        {
          maxRetries: t,
          delayInMs: r * n,
          backoffFactor: r,
          abortSignal: o
        },
        u
      );
    throw c === 1 ? s : new fs({
      message: `Failed after ${c} attempts with non-retryable error: '${i}'`,
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
      throw new we({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new we({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const n = e ?? 2;
  return {
    maxRetries: n,
    retry: Rw({
      maxRetries: n,
      abortSignal: t
    })
  };
}
function no(e) {
  const t = e.filter(
    (n) => n.type === "text"
  );
  if (t.length !== 0)
    return t.map((n) => n.text).join("");
}
var _r = class {
  constructor({
    data: e,
    mediaType: t
  }) {
    const n = e instanceof Uint8Array;
    this.base64Data = n ? void 0 : e, this.uint8ArrayData = n ? e : void 0, this.mediaType = t;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = er(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = Nn(this.base64Data)), this.uint8ArrayData;
  }
}, Ow = class extends _r {
  constructor(e) {
    super(e), this.type = "file";
  }
};
async function $u({
  toolCall: e,
  tools: t,
  repairToolCall: n,
  system: r,
  messages: o
}) {
  try {
    if (t == null)
      throw new to({ toolName: e.toolName });
    try {
      return await ms({ toolCall: e, tools: t });
    } catch (a) {
      if (n == null || !(to.isInstance(a) || Ul.isInstance(a)))
        throw a;
      let s = null;
      try {
        s = await n({
          toolCall: e,
          tools: t,
          inputSchema: ({ toolName: i }) => {
            const { inputSchema: u } = t[i];
            return on(u).jsonSchema;
          },
          system: r,
          messages: o,
          error: a
        });
      } catch (i) {
        throw new ow({
          cause: i,
          originalError: a
        });
      }
      if (s == null)
        throw a;
      return await ms({ toolCall: s, tools: t });
    }
  } catch (a) {
    const s = await Nt({ text: e.input }), i = s.success ? s.value : e.input;
    return {
      type: "tool-call",
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      input: i,
      dynamic: !0,
      invalid: !0,
      error: a
    };
  }
}
async function ms({
  toolCall: e,
  tools: t
}) {
  const n = e.toolName, r = t[n];
  if (r == null)
    throw new to({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const o = on(r.inputSchema), a = e.input.trim() === "" ? await it({ value: {}, schema: o }) : await Nt({ text: e.input, schema: o });
  if (a.success === !1)
    throw new Ul({
      toolName: n,
      toolInput: e.input,
      cause: a.error
    });
  return r.type === "dynamic" ? {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    input: a.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata,
    dynamic: !0
  } : {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: n,
    input: a.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata
  };
}
var Pu = class {
  constructor({
    content: e,
    finishReason: t,
    usage: n,
    warnings: r,
    request: o,
    response: a,
    providerMetadata: s
  }) {
    this.content = e, this.finishReason = t, this.usage = n, this.warnings = r, this.request = o, this.response = a, this.providerMetadata = s;
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
function ju(e) {
  return ({ steps: t }) => t.length === e;
}
function U0(e) {
  return ({ steps: t }) => {
    var n, r, o;
    return (o = (r = (n = t[t.length - 1]) == null ? void 0 : n.toolCalls) == null ? void 0 : r.some(
      (a) => a.toolName === e
    )) != null ? o : !1;
  };
}
async function qu({
  stopConditions: e,
  steps: t
}) {
  return (await Promise.all(e.map((n) => n({ steps: t })))).some((n) => n);
}
function wn({
  output: e,
  tool: t,
  errorMode: n
}) {
  return n === "text" ? { type: "error-text", value: ln(e) } : n === "json" ? { type: "error-json", value: hs(e) } : t != null && t.toModelOutput ? t.toModelOutput(e) : typeof e == "string" ? { type: "text", value: e } : { type: "json", value: hs(e) };
}
function hs(e) {
  return e === void 0 ? null : e;
}
function ro({
  content: e,
  tools: t
}) {
  const n = [], r = e.filter((a) => a.type !== "source").filter(
    (a) => (a.type !== "tool-result" || a.providerExecuted) && (a.type !== "tool-error" || a.providerExecuted)
  ).filter((a) => a.type !== "text" || a.text.length > 0).map((a) => {
    switch (a.type) {
      case "text":
        return {
          type: "text",
          text: a.text,
          providerOptions: a.providerMetadata
        };
      case "reasoning":
        return {
          type: "reasoning",
          text: a.text,
          providerOptions: a.providerMetadata
        };
      case "file":
        return {
          type: "file",
          data: a.file.base64,
          mediaType: a.file.mediaType,
          providerOptions: a.providerMetadata
        };
      case "tool-call":
        return {
          type: "tool-call",
          toolCallId: a.toolCallId,
          toolName: a.toolName,
          input: a.input,
          providerExecuted: a.providerExecuted,
          providerOptions: a.providerMetadata
        };
      case "tool-result":
        return {
          type: "tool-result",
          toolCallId: a.toolCallId,
          toolName: a.toolName,
          output: wn({
            tool: t == null ? void 0 : t[a.toolName],
            output: a.output,
            errorMode: "none"
          }),
          providerExecuted: !0,
          providerOptions: a.providerMetadata
        };
      case "tool-error":
        return {
          type: "tool-result",
          toolCallId: a.toolCallId,
          toolName: a.toolName,
          output: wn({
            tool: t == null ? void 0 : t[a.toolName],
            output: a.error,
            errorMode: "json"
          }),
          providerOptions: a.providerMetadata
        };
    }
  });
  r.length > 0 && n.push({
    role: "assistant",
    content: r
  });
  const o = e.filter((a) => a.type === "tool-result" || a.type === "tool-error").filter((a) => !a.providerExecuted).map((a) => ({
    type: "tool-result",
    toolCallId: a.toolCallId,
    toolName: a.toolName,
    output: wn({
      tool: t == null ? void 0 : t[a.toolName],
      output: a.type === "tool-result" ? a.output : a.error,
      errorMode: a.type === "tool-error" ? "text" : "none"
    }),
    ...a.providerMetadata != null ? { providerOptions: a.providerMetadata } : {}
  }));
  return o.length > 0 && n.push({
    role: "tool",
    content: o
  }), n;
}
var Nw = On({
  prefix: "aitxt",
  size: 24
});
async function Aw({
  model: e,
  tools: t,
  toolChoice: n,
  system: r,
  prompt: o,
  messages: a,
  maxRetries: s,
  abortSignal: i,
  headers: u,
  stopWhen: c = ju(1),
  experimental_output: p,
  experimental_telemetry: m,
  providerOptions: g,
  experimental_activeTools: f,
  activeTools: y = f,
  experimental_prepareStep: _,
  prepareStep: b = _,
  experimental_repairToolCall: h,
  experimental_download: v,
  experimental_context: I,
  _internal: {
    generateId: w = Nw,
    currentDate: E = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: $,
  ...S
}) {
  const O = sn(e), R = rr(c), { maxRetries: C, retry: N } = Ct({
    maxRetries: s,
    abortSignal: i
  }), Z = Lt(S), j = ze(
    u ?? {},
    `ai/${mt}`
  ), D = dn({
    model: O,
    telemetry: m,
    headers: j,
    settings: { ...Z, maxRetries: C }
  }), X = await gr({
    system: r,
    prompt: o,
    messages: a
  }), z = pn(m);
  try {
    return await Ke({
      name: "ai.generateText",
      attributes: he({
        telemetry: m,
        attributes: {
          ...We({
            operationId: "ai.generateText",
            telemetry: m
          }),
          ...D,
          // model:
          "ai.model.provider": O.provider,
          "ai.model.id": O.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: r, prompt: o, messages: a })
          }
        }
      }),
      tracer: z,
      fn: async (V) => {
        var ne, be, ae, Ie, M, F, q;
        const T = Lt(S);
        let W, ce = [], fe = [];
        const Ze = [], ve = [];
        do {
          const _e = [
            ...X.messages,
            ...Ze
          ], se = await (b == null ? void 0 : b({
            model: O,
            steps: ve,
            stepNumber: ve.length,
            messages: _e
          })), te = sn(
            (ne = se == null ? void 0 : se.model) != null ? ne : O
          ), K = await hr({
            prompt: {
              system: (be = se == null ? void 0 : se.system) != null ? be : X.system,
              messages: (ae = se == null ? void 0 : se.messages) != null ? ae : _e
            },
            supportedUrls: await te.supportedUrls,
            download: v
          }), { toolChoice: B, tools: je } = Iu({
            tools: t,
            toolChoice: (Ie = se == null ? void 0 : se.toolChoice) != null ? Ie : n,
            activeTools: (M = se == null ? void 0 : se.activeTools) != null ? M : y
          });
          W = await N(
            () => {
              var me;
              return Ke({
                name: "ai.generateText.doGenerate",
                attributes: he({
                  telemetry: m,
                  attributes: {
                    ...We({
                      operationId: "ai.generateText.doGenerate",
                      telemetry: m
                    }),
                    ...D,
                    // model:
                    "ai.model.provider": te.provider,
                    "ai.model.id": te.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: () => yr(K)
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: () => je == null ? void 0 : je.map((vt) => JSON.stringify(vt))
                    },
                    "ai.prompt.toolChoice": {
                      input: () => B != null ? JSON.stringify(B) : void 0
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": te.provider,
                    "gen_ai.request.model": te.modelId,
                    "gen_ai.request.frequency_penalty": S.frequencyPenalty,
                    "gen_ai.request.max_tokens": S.maxOutputTokens,
                    "gen_ai.request.presence_penalty": S.presencePenalty,
                    "gen_ai.request.stop_sequences": S.stopSequences,
                    "gen_ai.request.temperature": (me = S.temperature) != null ? me : void 0,
                    "gen_ai.request.top_k": S.topK,
                    "gen_ai.request.top_p": S.topP
                  }
                }),
                tracer: z,
                fn: async (vt) => {
                  var fn, Mt, tt, It, mn, Ht, Wt, Dn;
                  const De = await te.doGenerate({
                    ...T,
                    tools: je,
                    toolChoice: B,
                    responseFormat: p == null ? void 0 : p.responseFormat,
                    prompt: K,
                    providerOptions: g,
                    abortSignal: i,
                    headers: j
                  }), kt = {
                    id: (Mt = (fn = De.response) == null ? void 0 : fn.id) != null ? Mt : w(),
                    timestamp: (It = (tt = De.response) == null ? void 0 : tt.timestamp) != null ? It : E(),
                    modelId: (Ht = (mn = De.response) == null ? void 0 : mn.modelId) != null ? Ht : te.modelId,
                    headers: (Wt = De.response) == null ? void 0 : Wt.headers,
                    body: (Dn = De.response) == null ? void 0 : Dn.body
                  };
                  return vt.setAttributes(
                    he({
                      telemetry: m,
                      attributes: {
                        "ai.response.finishReason": De.finishReason,
                        "ai.response.text": {
                          output: () => no(De.content)
                        },
                        "ai.response.toolCalls": {
                          output: () => {
                            const Tt = gs(De.content);
                            return Tt == null ? void 0 : JSON.stringify(Tt);
                          }
                        },
                        "ai.response.id": kt.id,
                        "ai.response.model": kt.modelId,
                        "ai.response.timestamp": kt.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          De.providerMetadata
                        ),
                        // TODO rename telemetry attributes to inputTokens and outputTokens
                        "ai.usage.promptTokens": De.usage.inputTokens,
                        "ai.usage.completionTokens": De.usage.outputTokens,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [De.finishReason],
                        "gen_ai.response.id": kt.id,
                        "gen_ai.response.model": kt.modelId,
                        "gen_ai.usage.input_tokens": De.usage.inputTokens,
                        "gen_ai.usage.output_tokens": De.usage.outputTokens
                      }
                    })
                  ), { ...De, response: kt };
                }
              });
            }
          );
          const et = await Promise.all(
            W.content.filter(
              (me) => me.type === "tool-call"
            ).map(
              (me) => $u({
                toolCall: me,
                tools: t,
                repairToolCall: h,
                system: r,
                messages: _e
              })
            )
          );
          for (const me of et) {
            if (me.invalid)
              continue;
            const vt = t[me.toolName];
            (vt == null ? void 0 : vt.onInputAvailable) != null && await vt.onInputAvailable({
              input: me.input,
              toolCallId: me.toolCallId,
              messages: _e,
              abortSignal: i,
              experimental_context: I
            });
          }
          const L = et.filter(
            (me) => me.invalid && me.dynamic
          );
          fe = [];
          for (const me of L)
            fe.push({
              type: "tool-error",
              toolCallId: me.toolCallId,
              toolName: me.toolName,
              input: me.input,
              error: cr(me.error),
              dynamic: !0
            });
          ce = et.filter(
            (me) => !me.providerExecuted
          ), t != null && fe.push(
            ...await $w({
              toolCalls: ce.filter(
                (me) => !me.invalid
              ),
              tools: t,
              tracer: z,
              telemetry: m,
              messages: _e,
              abortSignal: i,
              experimental_context: I
            })
          );
          const ie = jw({
            content: W.content,
            toolCalls: et,
            toolOutputs: fe
          });
          Ze.push(
            ...ro({
              content: ie,
              tools: t
            })
          );
          const gt = new Pu({
            content: ie,
            finishReason: W.finishReason,
            usage: W.usage,
            warnings: W.warnings,
            providerMetadata: W.providerMetadata,
            request: (F = W.request) != null ? F : {},
            response: {
              ...W.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(Ze)
            }
          });
          Jt((q = W.warnings) != null ? q : []), ve.push(gt), await ($ == null ? void 0 : $(gt));
        } while (
          // there are tool calls:
          ce.length > 0 && // all current tool calls have outputs (incl. execution errors):
          fe.length === ce.length && // continue until a stop condition is met:
          !await qu({ stopConditions: R, steps: ve })
        );
        V.setAttributes(
          he({
            telemetry: m,
            attributes: {
              "ai.response.finishReason": W.finishReason,
              "ai.response.text": {
                output: () => no(W.content)
              },
              "ai.response.toolCalls": {
                output: () => {
                  const _e = gs(W.content);
                  return _e == null ? void 0 : JSON.stringify(_e);
                }
              },
              "ai.response.providerMetadata": JSON.stringify(
                W.providerMetadata
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": W.usage.inputTokens,
              "ai.usage.completionTokens": W.usage.outputTokens
            }
          })
        );
        const $e = ve[ve.length - 1];
        let Qe;
        return $e.finishReason === "stop" && (Qe = await (p == null ? void 0 : p.parseOutput(
          { text: $e.text },
          {
            response: $e.response,
            usage: $e.usage,
            finishReason: $e.finishReason
          }
        ))), new Pw({
          steps: ve,
          resolvedOutput: Qe
        });
      }
    });
  } catch (V) {
    throw vr(V);
  }
}
async function $w({
  toolCalls: e,
  tools: t,
  tracer: n,
  telemetry: r,
  messages: o,
  abortSignal: a,
  experimental_context: s
}) {
  return (await Promise.all(
    e.map(async ({ toolCallId: u, toolName: c, input: p }) => {
      const m = t[c];
      if ((m == null ? void 0 : m.execute) != null)
        return Ke({
          name: "ai.toolCall",
          attributes: he({
            telemetry: r,
            attributes: {
              ...We({
                operationId: "ai.toolCall",
                telemetry: r
              }),
              "ai.toolCall.name": c,
              "ai.toolCall.id": u,
              "ai.toolCall.args": {
                output: () => JSON.stringify(p)
              }
            }
          }),
          tracer: n,
          fn: async (g) => {
            try {
              const f = Bi({
                execute: m.execute.bind(m),
                input: p,
                options: {
                  toolCallId: u,
                  messages: o,
                  abortSignal: a,
                  experimental_context: s
                }
              });
              let y;
              for await (const _ of f)
                _.type === "final" && (y = _.output);
              try {
                g.setAttributes(
                  he({
                    telemetry: r,
                    attributes: {
                      "ai.toolCall.result": {
                        output: () => JSON.stringify(y)
                      }
                    }
                  })
                );
              } catch {
              }
              return {
                type: "tool-result",
                toolCallId: u,
                toolName: c,
                input: p,
                output: y,
                dynamic: m.type === "dynamic"
              };
            } catch (f) {
              return Mo(g, f), {
                type: "tool-error",
                toolCallId: u,
                toolName: c,
                input: p,
                error: f,
                dynamic: m.type === "dynamic"
              };
            }
          }
        });
    })
  )).filter(
    (u) => u != null
  );
}
var Pw = class {
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
      (e, t) => Nu(e, t.usage),
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
      throw new Rl();
    return this.resolvedOutput;
  }
};
function gs(e) {
  const t = e.filter(
    (n) => n.type === "tool-call"
  );
  if (t.length !== 0)
    return t.map((n) => ({
      toolCallId: n.toolCallId,
      toolName: n.toolName,
      input: n.input
    }));
}
function jw({
  content: e,
  toolCalls: t,
  toolOutputs: n
}) {
  return [
    ...e.map((r) => {
      switch (r.type) {
        case "text":
        case "reasoning":
        case "source":
          return r;
        case "file":
          return {
            type: "file",
            file: new _r(r)
          };
        case "tool-call":
          return t.find(
            (o) => o.toolCallId === r.toolCallId
          );
        case "tool-result": {
          const o = t.find(
            (a) => a.toolCallId === r.toolCallId
          );
          if (o == null)
            throw new Error(`Tool call ${r.toolCallId} not found.`);
          return r.isError ? {
            type: "tool-error",
            toolCallId: r.toolCallId,
            toolName: r.toolName,
            input: o.input,
            error: r.result,
            providerExecuted: !0,
            dynamic: o.dynamic
          } : {
            type: "tool-result",
            toolCallId: r.toolCallId,
            toolName: r.toolName,
            input: o.input,
            output: r.result,
            providerExecuted: !0,
            dynamic: o.dynamic
          };
        }
      }
    }),
    ...n
  ];
}
function qn(e, t) {
  const n = new Headers(e ?? {});
  for (const [r, o] of Object.entries(t))
    n.has(r) || n.set(r, o);
  return n;
}
function Du({
  status: e,
  statusText: t,
  headers: n,
  textStream: r
}) {
  return new Response(r.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: qn(n, {
      "content-type": "text/plain; charset=utf-8"
    })
  });
}
function zu({
  response: e,
  status: t,
  statusText: n,
  headers: r,
  stream: o
}) {
  e.writeHead(t ?? 200, n, r);
  const a = o.getReader();
  (async () => {
    try {
      for (; ; ) {
        const { done: i, value: u } = await a.read();
        if (i)
          break;
        e.write(u) || await new Promise((p) => {
          e.once("drain", p);
        });
      }
    } catch (i) {
      throw i;
    } finally {
      e.end();
    }
  })();
}
function Uu({
  response: e,
  status: t,
  statusText: n,
  headers: r,
  textStream: o
}) {
  zu({
    response: e,
    status: t,
    statusText: n,
    headers: Object.fromEntries(
      qn(r, {
        "content-type": "text/plain; charset=utf-8"
      }).entries()
    ),
    stream: o.pipeThrough(new TextEncoderStream())
  });
}
var Zu = class extends TransformStream {
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
}, Lu = {
  "content-type": "text/event-stream",
  "cache-control": "no-cache",
  connection: "keep-alive",
  "x-vercel-ai-ui-message-stream": "v1",
  "x-accel-buffering": "no"
  // disable nginx buffering
};
function qw({
  status: e,
  statusText: t,
  headers: n,
  stream: r,
  consumeSseStream: o
}) {
  let a = r.pipeThrough(new Zu());
  if (o) {
    const [s, i] = a.tee();
    a = s, o({ stream: i });
  }
  return new Response(a.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: qn(n, Lu)
  });
}
function Dw({
  originalMessages: e,
  responseMessageId: t
}) {
  if (e == null)
    return;
  const n = e[e.length - 1];
  return (n == null ? void 0 : n.role) === "assistant" ? n.id : typeof t == "function" ? t() : t;
}
var Fu = Re(
  () => U(
    oe([
      Ee({
        type: x("text-start"),
        id: l(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("text-delta"),
        id: l(),
        delta: l(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("text-end"),
        id: l(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("error"),
        errorText: l()
      }),
      Ee({
        type: x("tool-input-start"),
        toolCallId: l(),
        toolName: l(),
        providerExecuted: J().optional(),
        dynamic: J().optional()
      }),
      Ee({
        type: x("tool-input-delta"),
        toolCallId: l(),
        inputTextDelta: l()
      }),
      Ee({
        type: x("tool-input-available"),
        toolCallId: l(),
        toolName: l(),
        input: le(),
        providerExecuted: J().optional(),
        providerMetadata: ue.optional(),
        dynamic: J().optional()
      }),
      Ee({
        type: x("tool-input-error"),
        toolCallId: l(),
        toolName: l(),
        input: le(),
        providerExecuted: J().optional(),
        providerMetadata: ue.optional(),
        dynamic: J().optional(),
        errorText: l()
      }),
      Ee({
        type: x("tool-output-available"),
        toolCallId: l(),
        output: le(),
        providerExecuted: J().optional(),
        dynamic: J().optional(),
        preliminary: J().optional()
      }),
      Ee({
        type: x("tool-output-error"),
        toolCallId: l(),
        errorText: l(),
        providerExecuted: J().optional(),
        dynamic: J().optional()
      }),
      Ee({
        type: x("reasoning-start"),
        id: l(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("reasoning-delta"),
        id: l(),
        delta: l(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("reasoning-end"),
        id: l(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("source-url"),
        sourceId: l(),
        url: l(),
        title: l().optional(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("source-document"),
        sourceId: l(),
        mediaType: l(),
        title: l(),
        filename: l().optional(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: x("file"),
        url: l(),
        mediaType: l(),
        providerMetadata: ue.optional()
      }),
      Ee({
        type: Di(
          (e) => typeof e == "string" && e.startsWith("data-"),
          { message: 'Type must start with "data-"' }
        ),
        id: l().optional(),
        data: le(),
        transient: J().optional()
      }),
      Ee({
        type: x("start-step")
      }),
      Ee({
        type: x("finish-step")
      }),
      Ee({
        type: x("start"),
        messageId: l().optional(),
        messageMetadata: le().optional()
      }),
      Ee({
        type: x("finish"),
        finishReason: Q([
          "stop",
          "length",
          "content-filter",
          "tool-calls",
          "error",
          "other",
          "unknown"
        ]).optional(),
        messageMetadata: le().optional()
      }),
      Ee({
        type: x("abort")
      }),
      Ee({
        type: x("message-metadata"),
        messageMetadata: le()
      })
    ])
  )
);
function zw(e) {
  return e.type.startsWith("data-");
}
function Ro(e, t) {
  if (e === void 0 && t === void 0)
    return;
  if (e === void 0)
    return t;
  if (t === void 0)
    return e;
  const n = { ...e };
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      const o = t[r];
      if (o === void 0)
        continue;
      const a = r in e ? e[r] : void 0, s = o !== null && typeof o == "object" && !Array.isArray(o) && !(o instanceof Date) && !(o instanceof RegExp), i = a != null && typeof a == "object" && !Array.isArray(a) && !(a instanceof Date) && !(a instanceof RegExp);
      s && i ? n[r] = Ro(
        a,
        o
      ) : n[r] = o;
    }
  return n;
}
function Uw(e) {
  const t = ["ROOT"];
  let n = -1, r = null;
  function o(u, c, p) {
    switch (u) {
      case '"': {
        n = c, t.pop(), t.push(p), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = c, r = c, t.pop(), t.push(p), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(p), t.push("INSIDE_NUMBER");
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
        n = c, t.pop(), t.push(p), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = c, t.pop(), t.push(p), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = c, t.pop(), t.push(p), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function a(u, c) {
    switch (u) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        n = c, t.pop();
        break;
      }
    }
  }
  function s(u, c) {
    switch (u) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        n = c, t.pop();
        break;
      }
    }
  }
  for (let u = 0; u < e.length; u++) {
    const c = e[u];
    switch (t[t.length - 1]) {
      case "ROOT":
        o(c, u, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            n = u, t.pop();
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
        o(c, u, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        a(c, u);
        break;
      }
      case "INSIDE_STRING": {
        switch (c) {
          case '"': {
            t.pop(), n = u;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            n = u;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (c) {
          case "]": {
            n = u, t.pop();
            break;
          }
          default: {
            n = u, o(c, u, "INSIDE_ARRAY_AFTER_VALUE");
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
            n = u, t.pop();
            break;
          }
          default: {
            n = u;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        o(c, u, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = u;
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
            n = u;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && s(c, u), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(c, u);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(c, u);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && s(c, u);
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
        const m = e.substring(r, u + 1);
        !"false".startsWith(m) && !"true".startsWith(m) && !"null".startsWith(m) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? a(c, u) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && s(c, u)) : n = u;
        break;
      }
    }
  }
  let i = e.slice(0, n + 1);
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
        const p = e.substring(r, e.length);
        "true".startsWith(p) ? i += "true".slice(p.length) : "false".startsWith(p) ? i += "false".slice(p.length) : "null".startsWith(p) && (i += "null".slice(p.length));
      }
    }
  return i;
}
async function Oo(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = await Nt({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = await Nt({ text: Uw(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
function Lr(e) {
  return e.type.startsWith("data-");
}
function Fr(e) {
  return e.type === "text";
}
function Vr(e) {
  return e.type === "file";
}
function vs(e) {
  return e.type === "reasoning";
}
function en(e) {
  return e.type.startsWith("tool-");
}
function No(e) {
  return e.type === "dynamic-tool";
}
function Rn(e) {
  return en(e) || No(e);
}
function or(e) {
  return e.type.split("-").slice(1).join("-");
}
function Zw(e) {
  return No(e) ? e.toolName : or(e);
}
function Ao({
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
function $o({
  stream: e,
  messageMetadataSchema: t,
  dataPartSchemas: n,
  runUpdateMessageJob: r,
  onError: o,
  onToolCall: a,
  onData: s
}) {
  return e.pipeThrough(
    new TransformStream({
      async transform(i, u) {
        await r(async ({ state: c, write: p }) => {
          var m, g, f, y;
          function _(w) {
            const $ = c.message.parts.filter(en).find(
              (S) => S.toolCallId === w
            );
            if ($ == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return $;
          }
          function b(w) {
            const $ = c.message.parts.filter(
              (S) => S.type === "dynamic-tool"
            ).find(
              (S) => S.toolCallId === w
            );
            if ($ == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return $;
          }
          function h(w) {
            var E;
            const $ = c.message.parts.find(
              (R) => en(R) && R.toolCallId === w.toolCallId
            ), S = w, O = $;
            $ != null ? ($.state = w.state, O.input = S.input, O.output = S.output, O.errorText = S.errorText, O.rawInput = S.rawInput, O.preliminary = S.preliminary, O.providerExecuted = (E = S.providerExecuted) != null ? E : $.providerExecuted, S.providerMetadata != null && $.state === "input-available" && ($.callProviderMetadata = S.providerMetadata)) : c.message.parts.push({
              type: `tool-${w.toolName}`,
              toolCallId: w.toolCallId,
              state: w.state,
              input: S.input,
              output: S.output,
              rawInput: S.rawInput,
              errorText: S.errorText,
              providerExecuted: S.providerExecuted,
              preliminary: S.preliminary,
              ...S.providerMetadata != null ? { callProviderMetadata: S.providerMetadata } : {}
            });
          }
          function v(w) {
            var E, $;
            const S = c.message.parts.find(
              (C) => C.type === "dynamic-tool" && C.toolCallId === w.toolCallId
            ), O = w, R = S;
            S != null ? (S.state = w.state, R.toolName = w.toolName, R.input = O.input, R.output = O.output, R.errorText = O.errorText, R.rawInput = (E = O.rawInput) != null ? E : R.rawInput, R.preliminary = O.preliminary, R.providerExecuted = ($ = O.providerExecuted) != null ? $ : S.providerExecuted, O.providerMetadata != null && S.state === "input-available" && (S.callProviderMetadata = O.providerMetadata)) : c.message.parts.push({
              type: "dynamic-tool",
              toolName: w.toolName,
              toolCallId: w.toolCallId,
              state: w.state,
              input: O.input,
              output: O.output,
              errorText: O.errorText,
              preliminary: O.preliminary,
              providerExecuted: O.providerExecuted,
              ...O.providerMetadata != null ? { callProviderMetadata: O.providerMetadata } : {}
            });
          }
          async function I(w) {
            if (w != null) {
              const E = c.message.metadata != null ? Ro(c.message.metadata, w) : w;
              t != null && await Ne({
                value: E,
                schema: t
              }), c.message.metadata = E;
            }
          }
          switch (i.type) {
            case "text-start": {
              const w = {
                type: "text",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              c.activeTextParts[i.id] = w, c.message.parts.push(w), p();
              break;
            }
            case "text-delta": {
              const w = c.activeTextParts[i.id];
              w.text += i.delta, w.providerMetadata = (m = i.providerMetadata) != null ? m : w.providerMetadata, p();
              break;
            }
            case "text-end": {
              const w = c.activeTextParts[i.id];
              w.state = "done", w.providerMetadata = (g = i.providerMetadata) != null ? g : w.providerMetadata, delete c.activeTextParts[i.id], p();
              break;
            }
            case "reasoning-start": {
              const w = {
                type: "reasoning",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              c.activeReasoningParts[i.id] = w, c.message.parts.push(w), p();
              break;
            }
            case "reasoning-delta": {
              const w = c.activeReasoningParts[i.id];
              w.text += i.delta, w.providerMetadata = (f = i.providerMetadata) != null ? f : w.providerMetadata, p();
              break;
            }
            case "reasoning-end": {
              const w = c.activeReasoningParts[i.id];
              w.providerMetadata = (y = i.providerMetadata) != null ? y : w.providerMetadata, w.state = "done", delete c.activeReasoningParts[i.id], p();
              break;
            }
            case "file": {
              c.message.parts.push({
                type: "file",
                mediaType: i.mediaType,
                url: i.url
              }), p();
              break;
            }
            case "source-url": {
              c.message.parts.push({
                type: "source-url",
                sourceId: i.sourceId,
                url: i.url,
                title: i.title,
                providerMetadata: i.providerMetadata
              }), p();
              break;
            }
            case "source-document": {
              c.message.parts.push({
                type: "source-document",
                sourceId: i.sourceId,
                mediaType: i.mediaType,
                title: i.title,
                filename: i.filename,
                providerMetadata: i.providerMetadata
              }), p();
              break;
            }
            case "tool-input-start": {
              const w = c.message.parts.filter(en);
              c.partialToolCalls[i.toolCallId] = {
                text: "",
                toolName: i.toolName,
                index: w.length,
                dynamic: i.dynamic
              }, i.dynamic ? v({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted
              }) : h({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted
              }), p();
              break;
            }
            case "tool-input-delta": {
              const w = c.partialToolCalls[i.toolCallId];
              w.text += i.inputTextDelta;
              const { value: E } = await Oo(
                w.text
              );
              w.dynamic ? v({
                toolCallId: i.toolCallId,
                toolName: w.toolName,
                state: "input-streaming",
                input: E
              }) : h({
                toolCallId: i.toolCallId,
                toolName: w.toolName,
                state: "input-streaming",
                input: E
              }), p();
              break;
            }
            case "tool-input-available": {
              i.dynamic ? v({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }) : h({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }), p(), a && !i.providerExecuted && await a({
                toolCall: i
              });
              break;
            }
            case "tool-input-error": {
              i.dynamic ? v({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }) : h({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: void 0,
                rawInput: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }), p();
              break;
            }
            case "tool-output-available": {
              if (i.dynamic) {
                const w = b(
                  i.toolCallId
                );
                v({
                  toolCallId: i.toolCallId,
                  toolName: w.toolName,
                  state: "output-available",
                  input: w.input,
                  output: i.output,
                  preliminary: i.preliminary
                });
              } else {
                const w = _(i.toolCallId);
                h({
                  toolCallId: i.toolCallId,
                  toolName: or(w),
                  state: "output-available",
                  input: w.input,
                  output: i.output,
                  providerExecuted: i.providerExecuted,
                  preliminary: i.preliminary
                });
              }
              p();
              break;
            }
            case "tool-output-error": {
              if (i.dynamic) {
                const w = b(
                  i.toolCallId
                );
                v({
                  toolCallId: i.toolCallId,
                  toolName: w.toolName,
                  state: "output-error",
                  input: w.input,
                  errorText: i.errorText,
                  providerExecuted: i.providerExecuted
                });
              } else {
                const w = _(i.toolCallId);
                h({
                  toolCallId: i.toolCallId,
                  toolName: or(w),
                  state: "output-error",
                  input: w.input,
                  rawInput: w.rawInput,
                  errorText: i.errorText,
                  providerExecuted: i.providerExecuted
                });
              }
              p();
              break;
            }
            case "start-step": {
              c.message.parts.push({ type: "step-start" });
              break;
            }
            case "finish-step": {
              c.activeTextParts = {}, c.activeReasoningParts = {};
              break;
            }
            case "start": {
              i.messageId != null && (c.message.id = i.messageId), await I(i.messageMetadata), (i.messageId != null || i.messageMetadata != null) && p();
              break;
            }
            case "finish": {
              i.finishReason != null && (c.finishReason = i.finishReason), await I(i.messageMetadata), i.messageMetadata != null && p();
              break;
            }
            case "message-metadata": {
              await I(i.messageMetadata), i.messageMetadata != null && p();
              break;
            }
            case "error": {
              o == null || o(new Error(i.errorText));
              break;
            }
            default:
              if (zw(i)) {
                (n == null ? void 0 : n[i.type]) != null && await Ne({
                  value: i.data,
                  schema: n[i.type]
                });
                const w = i;
                if (w.transient) {
                  s == null || s(w);
                  break;
                }
                const E = w.id != null ? c.message.parts.find(
                  ($) => w.type === $.type && w.id === $.id
                ) : void 0;
                E != null ? E.data = w.data : c.message.parts.push(w), s == null || s(w), p();
              }
          }
          u.enqueue(i);
        });
      }
    })
  );
}
function Vu({
  messageId: e,
  originalMessages: t = [],
  onFinish: n,
  onError: r,
  stream: o
}) {
  let a = t == null ? void 0 : t[t.length - 1];
  (a == null ? void 0 : a.role) !== "assistant" ? a = void 0 : e = a.id;
  let s = !1;
  const i = o.pipeThrough(
    new TransformStream({
      transform(g, f) {
        if (g.type === "start") {
          const y = g;
          y.messageId == null && e != null && (y.messageId = e);
        }
        g.type === "abort" && (s = !0), f.enqueue(g);
      }
    })
  );
  if (n == null)
    return i;
  const u = Ao({
    lastMessage: a ? structuredClone(a) : void 0,
    messageId: e ?? ""
    // will be overridden by the stream
  }), c = async (g) => {
    await g({ state: u, write: () => {
    } });
  };
  let p = !1;
  const m = async () => {
    if (p || !n)
      return;
    p = !0;
    const g = u.message.id === (a == null ? void 0 : a.id);
    await n({
      isAborted: s,
      isContinuation: g,
      responseMessage: u.message,
      messages: [
        ...g ? t.slice(0, -1) : t,
        u.message
      ],
      finishReason: u.finishReason
    });
  };
  return $o({
    stream: i,
    runUpdateMessageJob: c,
    onError: r
  }).pipeThrough(
    new TransformStream({
      transform(g, f) {
        f.enqueue(g);
      },
      // @ts-expect-error cancel is still new and missing from types https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility
      async cancel() {
        await m();
      },
      async flush() {
        await m();
      }
    })
  );
}
function Lw({
  response: e,
  status: t,
  statusText: n,
  headers: r,
  stream: o,
  consumeSseStream: a
}) {
  let s = o.pipeThrough(new Zu());
  if (a) {
    const [i, u] = s.tee();
    s = i, a({ stream: u });
  }
  zu({
    response: e,
    status: t,
    statusText: n,
    headers: Object.fromEntries(
      qn(r, Lu).entries()
    ),
    stream: s.pipeThrough(new TextEncoderStream())
  });
}
function Et(e) {
  const t = e.pipeThrough(new TransformStream());
  return t[Symbol.asyncIterator] = function() {
    const n = this.getReader();
    let r = !1;
    async function o(a) {
      var s;
      r = !0;
      try {
        a && await ((s = n.cancel) == null ? void 0 : s.call(n));
      } finally {
        try {
          n.releaseLock();
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
        if (r)
          return { done: !0, value: void 0 };
        const { done: a, value: s } = await n.read();
        return a ? (await o(!0), { done: !0, value: void 0 }) : { done: !1, value: s };
      },
      /**
       * Called on early exit (e.g., break from for-await).
       * Ensures the stream is cancelled and resources are released.
       * @returns A promise resolving to a completed IteratorResult.
       */
      async return() {
        return await o(!0), { done: !0, value: void 0 };
      },
      /**
       * Called on early exit with error.
       * Ensures the stream is cancelled and resources are released, then rethrows the error.
       * @param err The error to throw.
       * @returns A promise that rejects with the provided error.
       */
      async throw(a) {
        throw await o(!0), a;
      }
    };
  }, t;
}
async function br({
  stream: e,
  onError: t
}) {
  const n = e.getReader();
  try {
    for (; ; ) {
      const { done: r } = await n.read();
      if (r)
        break;
    }
  } catch (r) {
    t == null || t(r);
  } finally {
    n.releaseLock();
  }
}
function ys() {
  let e, t;
  return {
    promise: new Promise((r, o) => {
      e = r, t = o;
    }),
    resolve: e,
    reject: t
  };
}
function Gu() {
  let e = [], t = null, n = !1, r = ys();
  const o = () => {
    n = !0, r.resolve(), e.forEach((s) => s.cancel()), e = [], t == null || t.close();
  }, a = async () => {
    if (n && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return r = ys(), await r.promise, a();
    try {
      const { value: s, done: i } = await e[0].read();
      i ? (e.shift(), e.length > 0 ? await a() : n && (t == null || t.close())) : t == null || t.enqueue(s);
    } catch (s) {
      t == null || t.error(s), e.shift(), o();
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
        e = [], n = !0;
      }
    }),
    addStream: (s) => {
      if (n)
        throw new Error("Cannot add inner stream: outer stream is closed");
      e.push(s.getReader()), r.resolve();
    },
    /**
     * Gracefully close the outer stream. This will let the inner streams
     * finish processing and then close the outer stream.
     */
    close: () => {
      n = !0, r.resolve(), e.length === 0 && (t == null || t.close());
    },
    /**
     * Immediately close the outer stream. This will cancel all inner streams
     * and close the outer stream.
     */
    terminate: o
  };
}
function Bu() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
function Fw({
  tools: e,
  generatorStream: t,
  tracer: n,
  telemetry: r,
  system: o,
  messages: a,
  abortSignal: s,
  repairToolCall: i,
  experimental_context: u
}) {
  let c = null;
  const p = new ReadableStream({
    start(h) {
      c = h;
    }
  }), m = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
  let f = !1, y;
  function _() {
    f && m.size === 0 && (y != null && c.enqueue(y), c.close());
  }
  const b = new TransformStream({
    async transform(h, v) {
      const I = h.type;
      switch (I) {
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
          v.enqueue(h);
          break;
        }
        case "file": {
          v.enqueue({
            type: "file",
            file: new Ow({
              data: h.data,
              mediaType: h.mediaType
            })
          });
          break;
        }
        case "finish": {
          y = {
            type: "finish",
            finishReason: h.finishReason,
            usage: h.usage,
            providerMetadata: h.providerMetadata
          };
          break;
        }
        case "tool-call": {
          try {
            const w = await $u({
              toolCall: h,
              tools: e,
              repairToolCall: i,
              system: o,
              messages: a
            });
            if (v.enqueue(w), w.invalid) {
              c.enqueue({
                type: "tool-error",
                toolCallId: w.toolCallId,
                toolName: w.toolName,
                input: w.input,
                error: cr(w.error),
                dynamic: !0
              });
              break;
            }
            const E = e[w.toolName];
            if (g.set(w.toolCallId, w.input), E.onInputAvailable != null && await E.onInputAvailable({
              input: w.input,
              toolCallId: w.toolCallId,
              messages: a,
              abortSignal: s,
              experimental_context: u
            }), E.execute != null && w.providerExecuted !== !0) {
              const $ = Fe();
              m.add($), Ke({
                name: "ai.toolCall",
                attributes: he({
                  telemetry: r,
                  attributes: {
                    ...We({
                      operationId: "ai.toolCall",
                      telemetry: r
                    }),
                    "ai.toolCall.name": w.toolName,
                    "ai.toolCall.id": w.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(w.input)
                    }
                  }
                }),
                tracer: n,
                fn: async (S) => {
                  let O;
                  try {
                    const R = Bi({
                      execute: E.execute.bind(E),
                      input: w.input,
                      options: {
                        toolCallId: w.toolCallId,
                        messages: a,
                        abortSignal: s,
                        experimental_context: u
                      }
                    });
                    for await (const C of R)
                      c.enqueue({
                        ...w,
                        type: "tool-result",
                        output: C.output,
                        ...C.type === "preliminary" && {
                          preliminary: !0
                        }
                      }), C.type === "final" && (O = C.output);
                  } catch (R) {
                    Mo(S, R), c.enqueue({
                      ...w,
                      type: "tool-error",
                      error: R
                    }), m.delete($), _();
                    return;
                  }
                  m.delete($), _();
                  try {
                    S.setAttributes(
                      he({
                        telemetry: r,
                        attributes: {
                          "ai.toolCall.result": {
                            output: () => JSON.stringify(O)
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
            c.enqueue({ type: "error", error: w });
          }
          break;
        }
        case "tool-result": {
          const w = h.toolName;
          h.isError ? c.enqueue({
            type: "tool-error",
            toolCallId: h.toolCallId,
            toolName: w,
            input: g.get(h.toolCallId),
            providerExecuted: h.providerExecuted,
            error: h.result
          }) : v.enqueue({
            type: "tool-result",
            toolCallId: h.toolCallId,
            toolName: w,
            input: g.get(h.toolCallId),
            output: h.result,
            providerExecuted: h.providerExecuted
          });
          break;
        }
        default: {
          const w = I;
          throw new Error(`Unhandled chunk type: ${w}`);
        }
      }
    },
    flush() {
      f = !0, _();
    }
  });
  return new ReadableStream({
    async start(h) {
      return Promise.all([
        t.pipeThrough(b).pipeTo(
          new WritableStream({
            write(v) {
              h.enqueue(v);
            },
            close() {
            }
          })
        ),
        p.pipeTo(
          new WritableStream({
            write(v) {
              h.enqueue(v);
            },
            close() {
              h.close();
            }
          })
        )
      ]);
    }
  });
}
var Vw = On({
  prefix: "aitxt",
  size: 24
});
function Gw({
  model: e,
  tools: t,
  toolChoice: n,
  system: r,
  prompt: o,
  messages: a,
  maxRetries: s,
  abortSignal: i,
  headers: u,
  stopWhen: c = ju(1),
  experimental_output: p,
  experimental_telemetry: m,
  prepareStep: g,
  providerOptions: f,
  experimental_activeTools: y,
  activeTools: _ = y,
  experimental_repairToolCall: b,
  experimental_transform: h,
  experimental_download: v,
  includeRawChunks: I = !1,
  onChunk: w,
  onError: E = ({ error: D }) => {
    console.error(D);
  },
  onFinish: $,
  onAbort: S,
  onStepFinish: O,
  experimental_context: R,
  _internal: {
    now: C = Bu,
    generateId: N = Vw,
    currentDate: Z = () => /* @__PURE__ */ new Date()
  } = {},
  ...j
}) {
  return new Jw({
    model: sn(e),
    telemetry: m,
    headers: u,
    settings: j,
    maxRetries: s,
    abortSignal: i,
    system: r,
    prompt: o,
    messages: a,
    tools: t,
    toolChoice: n,
    transforms: rr(h),
    activeTools: _,
    repairToolCall: b,
    stopConditions: rr(c),
    output: p,
    providerOptions: f,
    prepareStep: g,
    includeRawChunks: I,
    onChunk: w,
    onError: E,
    onFinish: $,
    onAbort: S,
    onStepFinish: O,
    now: C,
    currentDate: Z,
    generateId: N,
    experimental_context: R,
    download: v
  });
}
function Bw(e) {
  if (!e)
    return new TransformStream({
      transform(s, i) {
        i.enqueue({ part: s, partialOutput: void 0 });
      }
    });
  let t, n = "", r = "", o = "";
  function a({
    controller: s,
    partialOutput: i = void 0
  }) {
    s.enqueue({
      part: {
        type: "text-delta",
        id: t,
        text: r
      },
      partialOutput: i
    }), r = "";
  }
  return new TransformStream({
    async transform(s, i) {
      if (s.type === "finish-step" && r.length > 0 && a({ controller: i }), s.type !== "text-delta" && s.type !== "text-start" && s.type !== "text-end") {
        i.enqueue({ part: s, partialOutput: void 0 });
        return;
      }
      if (t == null)
        t = s.id;
      else if (s.id !== t) {
        i.enqueue({ part: s, partialOutput: void 0 });
        return;
      }
      if (s.type === "text-start") {
        i.enqueue({ part: s, partialOutput: void 0 });
        return;
      }
      if (s.type === "text-end") {
        r.length > 0 && a({ controller: i }), i.enqueue({ part: s, partialOutput: void 0 });
        return;
      }
      n += s.text, r += s.text;
      const u = await e.parsePartial({ text: n });
      if (u != null) {
        const c = JSON.stringify(u.partial);
        c !== o && (a({ controller: i, partialOutput: u.partial }), o = c);
      }
    }
  });
}
var Jw = class {
  constructor({
    model: e,
    telemetry: t,
    headers: n,
    settings: r,
    maxRetries: o,
    abortSignal: a,
    system: s,
    prompt: i,
    messages: u,
    tools: c,
    toolChoice: p,
    transforms: m,
    activeTools: g,
    repairToolCall: f,
    stopConditions: y,
    output: _,
    providerOptions: b,
    prepareStep: h,
    includeRawChunks: v,
    now: I,
    currentDate: w,
    generateId: E,
    onChunk: $,
    onError: S,
    onFinish: O,
    onAbort: R,
    onStepFinish: C,
    experimental_context: N,
    download: Z
  }) {
    this._totalUsage = new st(), this._finishReason = new st(), this._steps = new st(), this.output = _, this.includeRawChunks = v, this.tools = c;
    let j, D = [];
    const X = [];
    let z, V, ne = {}, be = [];
    const ae = [];
    let Ie, M = {}, F = {};
    const q = new TransformStream({
      async transform(se, te) {
        var K, B, je, et;
        te.enqueue(se);
        const { part: L } = se;
        if ((L.type === "text-delta" || L.type === "reasoning-delta" || L.type === "source" || L.type === "tool-call" || L.type === "tool-result" || L.type === "tool-input-start" || L.type === "tool-input-delta" || L.type === "raw") && await ($ == null ? void 0 : $({ chunk: L })), L.type === "error" && await S({ error: vr(L.error) }), L.type === "text-start" && (M[L.id] = {
          type: "text",
          text: "",
          providerMetadata: L.providerMetadata
        }, D.push(M[L.id])), L.type === "text-delta") {
          const ie = M[L.id];
          if (ie == null) {
            te.enqueue({
              part: {
                type: "error",
                error: `text part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ie.text += L.text, ie.providerMetadata = (K = L.providerMetadata) != null ? K : ie.providerMetadata;
        }
        if (L.type === "text-end") {
          const ie = M[L.id];
          if (ie == null) {
            te.enqueue({
              part: {
                type: "error",
                error: `text part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ie.providerMetadata = (B = L.providerMetadata) != null ? B : ie.providerMetadata, delete M[L.id];
        }
        if (L.type === "reasoning-start" && (F[L.id] = {
          type: "reasoning",
          text: "",
          providerMetadata: L.providerMetadata
        }, D.push(F[L.id])), L.type === "reasoning-delta") {
          const ie = F[L.id];
          if (ie == null) {
            te.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ie.text += L.text, ie.providerMetadata = (je = L.providerMetadata) != null ? je : ie.providerMetadata;
        }
        if (L.type === "reasoning-end") {
          const ie = F[L.id];
          if (ie == null) {
            te.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ie.providerMetadata = (et = L.providerMetadata) != null ? et : ie.providerMetadata, delete F[L.id];
        }
        if (L.type === "file" && D.push({ type: "file", file: L.file }), L.type === "source" && D.push(L), L.type === "tool-call" && D.push(L), L.type === "tool-result" && !L.preliminary && D.push(L), L.type === "tool-error" && D.push(L), L.type === "start-step" && (ne = L.request, be = L.warnings), L.type === "finish-step") {
          const ie = ro({
            content: D,
            tools: c
          }), gt = new Pu({
            content: D,
            finishReason: L.finishReason,
            usage: L.usage,
            warnings: be,
            request: ne,
            response: {
              ...L.response,
              messages: [...X, ...ie]
            },
            providerMetadata: L.providerMetadata
          });
          await (C == null ? void 0 : C(gt)), Jt(be), ae.push(gt), D = [], F = {}, M = {}, X.push(...ie), j.resolve();
        }
        L.type === "finish" && (V = L.totalUsage, z = L.finishReason);
      },
      async flush(se) {
        try {
          if (ae.length === 0) {
            const je = new ew({
              message: "No output generated. Check the stream for errors."
            });
            _e._finishReason.reject(je), _e._totalUsage.reject(je), _e._steps.reject(je);
            return;
          }
          const te = z ?? "unknown", K = V ?? {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          };
          _e._finishReason.resolve(te), _e._totalUsage.resolve(K), _e._steps.resolve(ae);
          const B = ae[ae.length - 1];
          await (O == null ? void 0 : O({
            finishReason: te,
            totalUsage: K,
            usage: B.usage,
            content: B.content,
            text: B.text,
            reasoningText: B.reasoningText,
            reasoning: B.reasoning,
            files: B.files,
            sources: B.sources,
            toolCalls: B.toolCalls,
            staticToolCalls: B.staticToolCalls,
            dynamicToolCalls: B.dynamicToolCalls,
            toolResults: B.toolResults,
            staticToolResults: B.staticToolResults,
            dynamicToolResults: B.dynamicToolResults,
            request: B.request,
            response: B.response,
            warnings: B.warnings,
            providerMetadata: B.providerMetadata,
            steps: ae
          })), Ie.setAttributes(
            he({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": te,
                "ai.response.text": { output: () => B.text },
                "ai.response.toolCalls": {
                  output: () => {
                    var je;
                    return (je = B.toolCalls) != null && je.length ? JSON.stringify(B.toolCalls) : void 0;
                  }
                },
                "ai.response.providerMetadata": JSON.stringify(
                  B.providerMetadata
                ),
                "ai.usage.inputTokens": K.inputTokens,
                "ai.usage.outputTokens": K.outputTokens,
                "ai.usage.totalTokens": K.totalTokens,
                "ai.usage.reasoningTokens": K.reasoningTokens,
                "ai.usage.cachedInputTokens": K.cachedInputTokens
              }
            })
          );
        } catch (te) {
          se.error(te);
        } finally {
          Ie.end();
        }
      }
    }), T = Gu();
    this.addStream = T.addStream, this.closeStream = T.close;
    const W = T.stream.getReader();
    let ce = new ReadableStream({
      async start(se) {
        se.enqueue({ type: "start" });
      },
      async pull(se) {
        function te() {
          R == null || R({ steps: ae }), se.enqueue({ type: "abort" }), se.close();
        }
        try {
          const { done: K, value: B } = await W.read();
          if (K) {
            se.close();
            return;
          }
          if (a != null && a.aborted) {
            te();
            return;
          }
          se.enqueue(B);
        } catch (K) {
          zt(K) && (a != null && a.aborted) ? te() : se.error(K);
        }
      },
      cancel(se) {
        return T.stream.cancel(se);
      }
    });
    for (const se of m)
      ce = ce.pipeThrough(
        se({
          tools: c,
          stopStream() {
            T.terminate();
          }
        })
      );
    this.baseStream = ce.pipeThrough(Bw(_)).pipeThrough(q);
    const { maxRetries: fe, retry: Ze } = Ct({
      maxRetries: o,
      abortSignal: a
    }), ve = pn(t), $e = Lt(r), Qe = dn({
      model: e,
      telemetry: t,
      headers: n,
      settings: { ...$e, maxRetries: fe }
    }), _e = this;
    Ke({
      name: "ai.streamText",
      attributes: he({
        telemetry: t,
        attributes: {
          ...We({ operationId: "ai.streamText", telemetry: t }),
          ...Qe,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: s, prompt: i, messages: u })
          }
        }
      }),
      tracer: ve,
      endWhenDone: !1,
      fn: async (se) => {
        Ie = se;
        async function te({
          currentStep: K,
          responseMessages: B,
          usage: je
        }) {
          var et, L, ie, gt, me;
          const vt = _e.includeRawChunks;
          j = new st();
          const fn = await gr({
            system: s,
            prompt: i,
            messages: u
          }), Mt = [
            ...fn.messages,
            ...B
          ], tt = await (h == null ? void 0 : h({
            model: e,
            steps: ae,
            stepNumber: ae.length,
            messages: Mt
          })), It = sn(
            (et = tt == null ? void 0 : tt.model) != null ? et : e
          ), mn = await hr({
            prompt: {
              system: (L = tt == null ? void 0 : tt.system) != null ? L : fn.system,
              messages: (ie = tt == null ? void 0 : tt.messages) != null ? ie : Mt
            },
            supportedUrls: await It.supportedUrls,
            download: Z
          }), { toolChoice: Ht, tools: Wt } = Iu({
            tools: c,
            toolChoice: (gt = tt == null ? void 0 : tt.toolChoice) != null ? gt : p,
            activeTools: (me = tt == null ? void 0 : tt.activeTools) != null ? me : g
          }), {
            result: { stream: Dn, response: De, request: kt },
            doStreamSpan: Tt,
            startTimestampMs: Po
          } = await Ze(
            () => Ke({
              name: "ai.streamText.doStream",
              attributes: he({
                telemetry: t,
                attributes: {
                  ...We({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...Qe,
                  // model:
                  "ai.model.provider": It.provider,
                  "ai.model.id": It.modelId,
                  // prompt:
                  "ai.prompt.messages": {
                    input: () => yr(mn)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => Wt == null ? void 0 : Wt.map((ee) => JSON.stringify(ee))
                  },
                  "ai.prompt.toolChoice": {
                    input: () => Ht != null ? JSON.stringify(Ht) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": It.provider,
                  "gen_ai.request.model": It.modelId,
                  "gen_ai.request.frequency_penalty": $e.frequencyPenalty,
                  "gen_ai.request.max_tokens": $e.maxOutputTokens,
                  "gen_ai.request.presence_penalty": $e.presencePenalty,
                  "gen_ai.request.stop_sequences": $e.stopSequences,
                  "gen_ai.request.temperature": $e.temperature,
                  "gen_ai.request.top_k": $e.topK,
                  "gen_ai.request.top_p": $e.topP
                }
              }),
              tracer: ve,
              endWhenDone: !1,
              fn: async (ee) => ({
                startTimestampMs: I(),
                // get before the call
                doStreamSpan: ee,
                result: await It.doStream({
                  ...$e,
                  tools: Wt,
                  toolChoice: Ht,
                  responseFormat: _ == null ? void 0 : _.responseFormat,
                  prompt: mn,
                  providerOptions: b,
                  abortSignal: a,
                  headers: n,
                  includeRawChunks: vt
                })
              })
            })
          ), nc = Fw({
            tools: c,
            generatorStream: Dn,
            tracer: ve,
            telemetry: t,
            system: s,
            messages: Mt,
            repairToolCall: f,
            abortSignal: a,
            experimental_context: N
          }), rc = kt ?? {}, zn = [], wr = [];
          let xr;
          const Ir = {};
          let Kt = "unknown", ut = {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }, kr, jo = !0, yt = {
            id: E(),
            timestamp: w(),
            modelId: e.modelId
          }, qo = "";
          _e.addStream(
            nc.pipeThrough(
              new TransformStream({
                async transform(ee, Le) {
                  var hn, gn, Un, St;
                  if (ee.type === "stream-start") {
                    xr = ee.warnings;
                    return;
                  }
                  if (jo) {
                    const Ge = I() - Po;
                    jo = !1, Tt.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": Ge
                    }), Tt.setAttributes({
                      "ai.response.msToFirstChunk": Ge
                    }), Le.enqueue({
                      type: "start-step",
                      request: rc,
                      warnings: xr ?? []
                    });
                  }
                  const Do = ee.type;
                  switch (Do) {
                    case "text-start":
                    case "text-end": {
                      Le.enqueue(ee);
                      break;
                    }
                    case "text-delta": {
                      ee.delta.length > 0 && (Le.enqueue({
                        type: "text-delta",
                        id: ee.id,
                        text: ee.delta,
                        providerMetadata: ee.providerMetadata
                      }), qo += ee.delta);
                      break;
                    }
                    case "reasoning-start":
                    case "reasoning-end": {
                      Le.enqueue(ee);
                      break;
                    }
                    case "reasoning-delta": {
                      Le.enqueue({
                        type: "reasoning-delta",
                        id: ee.id,
                        text: ee.delta,
                        providerMetadata: ee.providerMetadata
                      });
                      break;
                    }
                    case "tool-call": {
                      Le.enqueue(ee), zn.push(ee);
                      break;
                    }
                    case "tool-result": {
                      Le.enqueue(ee), ee.preliminary || wr.push(ee);
                      break;
                    }
                    case "tool-error": {
                      Le.enqueue(ee), wr.push(ee);
                      break;
                    }
                    case "response-metadata": {
                      yt = {
                        id: (hn = ee.id) != null ? hn : yt.id,
                        timestamp: (gn = ee.timestamp) != null ? gn : yt.timestamp,
                        modelId: (Un = ee.modelId) != null ? Un : yt.modelId
                      };
                      break;
                    }
                    case "finish": {
                      ut = ee.usage, Kt = ee.finishReason, kr = ee.providerMetadata;
                      const Ge = I() - Po;
                      Tt.addEvent("ai.stream.finish"), Tt.setAttributes({
                        "ai.response.msToFinish": Ge,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((St = ut.outputTokens) != null ? St : 0) / Ge
                      });
                      break;
                    }
                    case "file": {
                      Le.enqueue(ee);
                      break;
                    }
                    case "source": {
                      Le.enqueue(ee);
                      break;
                    }
                    case "tool-input-start": {
                      Ir[ee.id] = ee.toolName;
                      const Ge = c == null ? void 0 : c[ee.toolName];
                      (Ge == null ? void 0 : Ge.onInputStart) != null && await Ge.onInputStart({
                        toolCallId: ee.id,
                        messages: Mt,
                        abortSignal: a,
                        experimental_context: N
                      }), Le.enqueue({
                        ...ee,
                        dynamic: (Ge == null ? void 0 : Ge.type) === "dynamic"
                      });
                      break;
                    }
                    case "tool-input-end": {
                      delete Ir[ee.id], Le.enqueue(ee);
                      break;
                    }
                    case "tool-input-delta": {
                      const Ge = Ir[ee.id], Tr = c == null ? void 0 : c[Ge];
                      (Tr == null ? void 0 : Tr.onInputDelta) != null && await Tr.onInputDelta({
                        inputTextDelta: ee.delta,
                        toolCallId: ee.id,
                        messages: Mt,
                        abortSignal: a,
                        experimental_context: N
                      }), Le.enqueue(ee);
                      break;
                    }
                    case "error": {
                      Le.enqueue(ee), Kt = "error";
                      break;
                    }
                    case "raw": {
                      vt && Le.enqueue(ee);
                      break;
                    }
                    default: {
                      const Ge = Do;
                      throw new Error(`Unknown chunk type: ${Ge}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(ee) {
                  const Le = zn.length > 0 ? JSON.stringify(zn) : void 0;
                  try {
                    Tt.setAttributes(
                      he({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Kt,
                          "ai.response.text": {
                            output: () => qo
                          },
                          "ai.response.toolCalls": {
                            output: () => Le
                          },
                          "ai.response.id": yt.id,
                          "ai.response.model": yt.modelId,
                          "ai.response.timestamp": yt.timestamp.toISOString(),
                          "ai.response.providerMetadata": JSON.stringify(kr),
                          "ai.usage.inputTokens": ut.inputTokens,
                          "ai.usage.outputTokens": ut.outputTokens,
                          "ai.usage.totalTokens": ut.totalTokens,
                          "ai.usage.reasoningTokens": ut.reasoningTokens,
                          "ai.usage.cachedInputTokens": ut.cachedInputTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [Kt],
                          "gen_ai.response.id": yt.id,
                          "gen_ai.response.model": yt.modelId,
                          "gen_ai.usage.input_tokens": ut.inputTokens,
                          "gen_ai.usage.output_tokens": ut.outputTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    Tt.end();
                  }
                  ee.enqueue({
                    type: "finish-step",
                    finishReason: Kt,
                    usage: ut,
                    providerMetadata: kr,
                    response: {
                      ...yt,
                      headers: De == null ? void 0 : De.headers
                    }
                  });
                  const hn = Nu(je, ut);
                  await j.promise;
                  const gn = zn.filter(
                    (St) => St.providerExecuted !== !0
                  ), Un = wr.filter(
                    (St) => St.providerExecuted !== !0
                  );
                  if (gn.length > 0 && // all current tool calls have outputs (incl. execution errors):
                  Un.length === gn.length && // continue until a stop condition is met:
                  !await qu({
                    stopConditions: y,
                    steps: ae
                  })) {
                    B.push(
                      ...ro({
                        content: (
                          // use transformed content to create the messages for the next step:
                          ae[ae.length - 1].content
                        ),
                        tools: c
                      })
                    );
                    try {
                      await te({
                        currentStep: K + 1,
                        responseMessages: B,
                        usage: hn
                      });
                    } catch (St) {
                      ee.enqueue({
                        type: "error",
                        error: St
                      }), _e.closeStream();
                    }
                  } else
                    ee.enqueue({
                      type: "finish",
                      finishReason: Kt,
                      totalUsage: hn
                    }), _e.closeStream();
                }
              })
            )
          );
        }
        await te({
          currentStep: 0,
          responseMessages: [],
          usage: {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }
        });
      }
    }).catch((se) => {
      _e.addStream(
        new ReadableStream({
          start(te) {
            te.enqueue({ type: "error", error: se }), te.close();
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
      await br({
        stream: this.fullStream,
        onError: e == null ? void 0 : e.onError
      });
    } catch (n) {
      (t = e == null ? void 0 : e.onError) == null || t.call(e, n);
    }
  }
  get experimental_partialOutputStream() {
    if (this.output == null)
      throw new Rl();
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
    onFinish: n,
    messageMetadata: r,
    sendReasoning: o = !0,
    sendSources: a = !1,
    sendStart: s = !0,
    sendFinish: i = !0,
    onError: u = ln
  } = {}) {
    const c = t != null ? Dw({
      originalMessages: e,
      responseMessageId: t
    }) : void 0, p = {}, m = (f) => {
      var y, _;
      const b = p[f];
      return ((_ = (y = this.tools) == null ? void 0 : y[b]) == null ? void 0 : _.type) === "dynamic" ? !0 : void 0;
    }, g = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (f, y) => {
          const _ = r == null ? void 0 : r({ part: f }), b = f.type;
          switch (b) {
            case "text-start": {
              y.enqueue({
                type: "text-start",
                id: f.id,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              });
              break;
            }
            case "text-delta": {
              y.enqueue({
                type: "text-delta",
                id: f.id,
                delta: f.text,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              });
              break;
            }
            case "text-end": {
              y.enqueue({
                type: "text-end",
                id: f.id,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-start": {
              y.enqueue({
                type: "reasoning-start",
                id: f.id,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-delta": {
              o && y.enqueue({
                type: "reasoning-delta",
                id: f.id,
                delta: f.text,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-end": {
              y.enqueue({
                type: "reasoning-end",
                id: f.id,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              });
              break;
            }
            case "file": {
              y.enqueue({
                type: "file",
                mediaType: f.file.mediaType,
                url: `data:${f.file.mediaType};base64,${f.file.base64}`
              });
              break;
            }
            case "source": {
              a && f.sourceType === "url" && y.enqueue({
                type: "source-url",
                sourceId: f.id,
                url: f.url,
                title: f.title,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              }), a && f.sourceType === "document" && y.enqueue({
                type: "source-document",
                sourceId: f.id,
                mediaType: f.mediaType,
                title: f.title,
                filename: f.filename,
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {}
              });
              break;
            }
            case "tool-input-start": {
              p[f.id] = f.toolName;
              const h = m(f.id);
              y.enqueue({
                type: "tool-input-start",
                toolCallId: f.id,
                toolName: f.toolName,
                ...f.providerExecuted != null ? { providerExecuted: f.providerExecuted } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "tool-input-delta": {
              y.enqueue({
                type: "tool-input-delta",
                toolCallId: f.id,
                inputTextDelta: f.delta
              });
              break;
            }
            case "tool-call": {
              p[f.toolCallId] = f.toolName;
              const h = m(f.toolCallId);
              f.invalid ? y.enqueue({
                type: "tool-input-error",
                toolCallId: f.toolCallId,
                toolName: f.toolName,
                input: f.input,
                ...f.providerExecuted != null ? { providerExecuted: f.providerExecuted } : {},
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {},
                ...h != null ? { dynamic: h } : {},
                errorText: u(f.error)
              }) : y.enqueue({
                type: "tool-input-available",
                toolCallId: f.toolCallId,
                toolName: f.toolName,
                input: f.input,
                ...f.providerExecuted != null ? { providerExecuted: f.providerExecuted } : {},
                ...f.providerMetadata != null ? { providerMetadata: f.providerMetadata } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "tool-result": {
              const h = m(f.toolCallId);
              y.enqueue({
                type: "tool-output-available",
                toolCallId: f.toolCallId,
                output: f.output,
                ...f.providerExecuted != null ? { providerExecuted: f.providerExecuted } : {},
                ...f.preliminary != null ? { preliminary: f.preliminary } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "tool-error": {
              const h = m(f.toolCallId);
              y.enqueue({
                type: "tool-output-error",
                toolCallId: f.toolCallId,
                errorText: u(f.error),
                ...f.providerExecuted != null ? { providerExecuted: f.providerExecuted } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "error": {
              y.enqueue({
                type: "error",
                errorText: u(f.error)
              });
              break;
            }
            case "start-step": {
              y.enqueue({ type: "start-step" });
              break;
            }
            case "finish-step": {
              y.enqueue({ type: "finish-step" });
              break;
            }
            case "start": {
              s && y.enqueue({
                type: "start",
                ..._ != null ? { messageMetadata: _ } : {},
                ...c != null ? { messageId: c } : {}
              });
              break;
            }
            case "finish": {
              i && y.enqueue({
                type: "finish",
                finishReason: f.finishReason,
                ..._ != null ? { messageMetadata: _ } : {}
              });
              break;
            }
            case "abort": {
              y.enqueue(f);
              break;
            }
            case "tool-input-end":
              break;
            case "raw":
              break;
            default: {
              const h = b;
              throw new Error(`Unknown chunk type: ${h}`);
            }
          }
          _ != null && b !== "start" && b !== "finish" && y.enqueue({
            type: "message-metadata",
            messageMetadata: _
          });
        }
      })
    );
    return Et(
      Vu({
        stream: g,
        messageId: c ?? (t == null ? void 0 : t()),
        originalMessages: e,
        onFinish: n,
        onError: u
      })
    );
  }
  pipeUIMessageStreamToResponse(e, {
    originalMessages: t,
    generateMessageId: n,
    onFinish: r,
    messageMetadata: o,
    sendReasoning: a,
    sendSources: s,
    sendFinish: i,
    sendStart: u,
    onError: c,
    ...p
  } = {}) {
    Lw({
      response: e,
      stream: this.toUIMessageStream({
        originalMessages: t,
        generateMessageId: n,
        onFinish: r,
        messageMetadata: o,
        sendReasoning: a,
        sendSources: s,
        sendFinish: i,
        sendStart: u,
        onError: c
      }),
      ...p
    });
  }
  pipeTextStreamToResponse(e, t) {
    Uu({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toUIMessageStreamResponse({
    originalMessages: e,
    generateMessageId: t,
    onFinish: n,
    messageMetadata: r,
    sendReasoning: o,
    sendSources: a,
    sendFinish: s,
    sendStart: i,
    onError: u,
    ...c
  } = {}) {
    return qw({
      stream: this.toUIMessageStream({
        originalMessages: e,
        generateMessageId: t,
        onFinish: n,
        messageMetadata: r,
        sendReasoning: o,
        sendSources: a,
        sendFinish: s,
        sendStart: i,
        onError: u
      }),
      ...c
    });
  }
  toTextStreamResponse(e) {
    return Du({
      textStream: this.textStream,
      ...e
    });
  }
};
function Ju(e, t) {
  const n = [];
  t != null && t.ignoreIncompleteToolCalls && (e = e.map((r) => ({
    ...r,
    parts: r.parts.filter(
      (o) => !Rn(o) || o.state !== "input-streaming" && o.state !== "input-available"
    )
  })));
  for (const r of e)
    switch (r.role) {
      case "system": {
        const o = r.parts.filter(
          (s) => s.type === "text"
        ), a = o.reduce((s, i) => i.providerMetadata != null ? { ...s, ...i.providerMetadata } : s, {});
        n.push({
          role: "system",
          content: o.map((s) => s.text).join(""),
          ...Object.keys(a).length > 0 ? { providerOptions: a } : {}
        });
        break;
      }
      case "user": {
        n.push({
          role: "user",
          content: r.parts.map((o) => {
            var a;
            if (Fr(o))
              return {
                type: "text",
                text: o.text,
                ...o.providerMetadata != null ? { providerOptions: o.providerMetadata } : {}
              };
            if (Vr(o))
              return {
                type: "file",
                mediaType: o.mediaType,
                filename: o.filename,
                data: o.url,
                ...o.providerMetadata != null ? { providerOptions: o.providerMetadata } : {}
              };
            if (Lr(o))
              return (a = t == null ? void 0 : t.convertDataPart) == null ? void 0 : a.call(
                t,
                o
              );
          }).filter((o) => o != null)
        });
        break;
      }
      case "assistant": {
        if (r.parts != null) {
          let o = function() {
            var s, i, u;
            if (a.length === 0)
              return;
            const c = [];
            for (const m of a)
              if (Fr(m))
                c.push({
                  type: "text",
                  text: m.text,
                  ...m.providerMetadata != null ? { providerOptions: m.providerMetadata } : {}
                });
              else if (Vr(m))
                c.push({
                  type: "file",
                  mediaType: m.mediaType,
                  filename: m.filename,
                  data: m.url
                });
              else if (vs(m))
                c.push({
                  type: "reasoning",
                  text: m.text,
                  providerOptions: m.providerMetadata
                });
              else if (No(m)) {
                const g = m.toolName;
                m.state !== "input-streaming" && c.push({
                  type: "tool-call",
                  toolCallId: m.toolCallId,
                  toolName: g,
                  input: m.input,
                  ...m.callProviderMetadata != null ? { providerOptions: m.callProviderMetadata } : {}
                });
              } else if (en(m)) {
                const g = or(m);
                m.state !== "input-streaming" && (c.push({
                  type: "tool-call",
                  toolCallId: m.toolCallId,
                  toolName: g,
                  input: m.state === "output-error" ? (s = m.input) != null ? s : m.rawInput : m.input,
                  providerExecuted: m.providerExecuted,
                  ...m.callProviderMetadata != null ? { providerOptions: m.callProviderMetadata } : {}
                }), m.providerExecuted === !0 && (m.state === "output-available" || m.state === "output-error") && c.push({
                  type: "tool-result",
                  toolCallId: m.toolCallId,
                  toolName: g,
                  output: wn({
                    output: m.state === "output-error" ? m.errorText : m.output,
                    tool: (i = t == null ? void 0 : t.tools) == null ? void 0 : i[g],
                    errorMode: m.state === "output-error" ? "json" : "none"
                  })
                }));
              } else if (Lr(m)) {
                const g = (u = t == null ? void 0 : t.convertDataPart) == null ? void 0 : u.call(
                  t,
                  m
                );
                g != null && c.push(g);
              } else {
                const g = m;
                throw new Error(`Unsupported part: ${g}`);
              }
            n.push({
              role: "assistant",
              content: c
            });
            const p = a.filter(
              (m) => en(m) && m.providerExecuted !== !0 || m.type === "dynamic-tool"
            );
            p.length > 0 && n.push({
              role: "tool",
              content: p.map((m) => {
                var g;
                switch (m.state) {
                  case "output-error":
                  case "output-available": {
                    const f = Zw(m);
                    return {
                      type: "tool-result",
                      toolCallId: m.toolCallId,
                      toolName: f,
                      output: wn({
                        output: m.state === "output-error" ? m.errorText : m.output,
                        tool: (g = t == null ? void 0 : t.tools) == null ? void 0 : g[f],
                        errorMode: m.state === "output-error" ? "text" : "none"
                      })
                    };
                  }
                  default:
                    return null;
                }
              }).filter(
                (m) => m != null
              )
            }), a = [];
          }, a = [];
          for (const s of r.parts)
            Fr(s) || vs(s) || Vr(s) || Rn(s) || Lr(s) ? a.push(s) : s.type === "step-start" && o();
          o();
          break;
        }
        break;
      }
      default: {
        const o = r.role;
        throw new uw({
          originalMessage: r,
          message: `Unsupported role: ${o}`
        });
      }
    }
  return n;
}
var Z0 = Ju, L0 = class {
  constructor(e) {
    this.settings = e;
  }
  get tools() {
    return this.settings.tools;
  }
  async generate(e) {
    return Aw({ ...this.settings, ...e });
  }
  stream(e) {
    return Gw({ ...this.settings, ...e });
  }
  /**
   * Creates a response object that streams UI messages to the client.
   */
  respond(e) {
    return this.stream({
      prompt: Ju(e.messages)
    }).toUIMessageStreamResponse();
  }
};
async function F0({
  model: e,
  value: t,
  providerOptions: n,
  maxRetries: r,
  abortSignal: o,
  headers: a,
  experimental_telemetry: s
}) {
  const i = vu(e), { maxRetries: u, retry: c } = Ct({
    maxRetries: r,
    abortSignal: o
  }), p = ze(
    a ?? {},
    `ai/${mt}`
  ), m = dn({
    model: i,
    telemetry: s,
    headers: p,
    settings: { maxRetries: u }
  }), g = pn(s);
  return Ke({
    name: "ai.embed",
    attributes: he({
      telemetry: s,
      attributes: {
        ...We({ operationId: "ai.embed", telemetry: s }),
        ...m,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: g,
    fn: async (f) => {
      const { embedding: y, usage: _, response: b, providerMetadata: h } = await c(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Ke({
            name: "ai.embed.doEmbed",
            attributes: he({
              telemetry: s,
              attributes: {
                ...We({
                  operationId: "ai.embed.doEmbed",
                  telemetry: s
                }),
                ...m,
                // specific settings that only make sense on the outer level:
                "ai.values": { input: () => [JSON.stringify(t)] }
              }
            }),
            tracer: g,
            fn: async (v) => {
              var I;
              const w = await i.doEmbed({
                values: [t],
                abortSignal: o,
                headers: p,
                providerOptions: n
              }), E = w.embeddings[0], $ = (I = w.usage) != null ? I : { tokens: NaN };
              return v.setAttributes(
                he({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => w.embeddings.map(
                        (S) => JSON.stringify(S)
                      )
                    },
                    "ai.usage.tokens": $.tokens
                  }
                })
              ), {
                embedding: E,
                usage: $,
                providerMetadata: w.providerMetadata,
                response: w.response
              };
            }
          })
        )
      );
      return f.setAttributes(
        he({
          telemetry: s,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(y) },
            "ai.usage.tokens": _.tokens
          }
        })
      ), new Hw({
        value: t,
        embedding: y,
        usage: _,
        providerMetadata: h,
        response: b
      });
    }
  });
}
var Hw = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.providerMetadata = e.providerMetadata, this.response = e.response;
  }
};
function _s(e, t) {
  if (t <= 0)
    throw new Error("chunkSize must be greater than 0");
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push(e.slice(r, r + t));
  return n;
}
async function V0({
  model: e,
  values: t,
  maxParallelCalls: n = 1 / 0,
  maxRetries: r,
  abortSignal: o,
  headers: a,
  providerOptions: s,
  experimental_telemetry: i
}) {
  const u = vu(e), { maxRetries: c, retry: p } = Ct({
    maxRetries: r,
    abortSignal: o
  }), m = ze(
    a ?? {},
    `ai/${mt}`
  ), g = dn({
    model: u,
    telemetry: i,
    headers: m,
    settings: { maxRetries: c }
  }), f = pn(i);
  return Ke({
    name: "ai.embedMany",
    attributes: he({
      telemetry: i,
      attributes: {
        ...We({ operationId: "ai.embedMany", telemetry: i }),
        ...g,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((y) => JSON.stringify(y))
        }
      }
    }),
    tracer: f,
    fn: async (y) => {
      var _;
      const [b, h] = await Promise.all([
        u.maxEmbeddingsPerCall,
        u.supportsParallelCalls
      ]);
      if (b == null || b === 1 / 0) {
        const { embeddings: O, usage: R, response: C, providerMetadata: N } = await p(
          () => Ke({
            name: "ai.embedMany.doEmbed",
            attributes: he({
              telemetry: i,
              attributes: {
                ...We({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...g,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => t.map((Z) => JSON.stringify(Z))
                }
              }
            }),
            tracer: f,
            fn: async (Z) => {
              var j;
              const D = await u.doEmbed({
                values: t,
                abortSignal: o,
                headers: m,
                providerOptions: s
              }), X = D.embeddings, z = (j = D.usage) != null ? j : { tokens: NaN };
              return Z.setAttributes(
                he({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => X.map(
                        (V) => JSON.stringify(V)
                      )
                    },
                    "ai.usage.tokens": z.tokens
                  }
                })
              ), {
                embeddings: X,
                usage: z,
                providerMetadata: D.providerMetadata,
                response: D.response
              };
            }
          })
        );
        return y.setAttributes(
          he({
            telemetry: i,
            attributes: {
              "ai.embeddings": {
                output: () => O.map((Z) => JSON.stringify(Z))
              },
              "ai.usage.tokens": R.tokens
            }
          })
        ), new bs({
          values: t,
          embeddings: O,
          usage: R,
          providerMetadata: N,
          responses: [C]
        });
      }
      const v = _s(t, b), I = [], w = [];
      let E = 0, $;
      const S = _s(
        v,
        h ? n : 1
      );
      for (const O of S) {
        const R = await Promise.all(
          O.map((C) => p(() => Ke({
            name: "ai.embedMany.doEmbed",
            attributes: he({
              telemetry: i,
              attributes: {
                ...We({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...g,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => C.map((N) => JSON.stringify(N))
                }
              }
            }),
            tracer: f,
            fn: async (N) => {
              var Z;
              const j = await u.doEmbed({
                values: C,
                abortSignal: o,
                headers: m,
                providerOptions: s
              }), D = j.embeddings, X = (Z = j.usage) != null ? Z : { tokens: NaN };
              return N.setAttributes(
                he({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => D.map(
                        (z) => JSON.stringify(z)
                      )
                    },
                    "ai.usage.tokens": X.tokens
                  }
                })
              ), {
                embeddings: D,
                usage: X,
                providerMetadata: j.providerMetadata,
                response: j.response
              };
            }
          })))
        );
        for (const C of R)
          if (I.push(...C.embeddings), w.push(C.response), E += C.usage.tokens, C.providerMetadata)
            if (!$)
              $ = { ...C.providerMetadata };
            else
              for (const [N, Z] of Object.entries(
                C.providerMetadata
              ))
                $[N] = {
                  ...(_ = $[N]) != null ? _ : {},
                  ...Z
                };
      }
      return y.setAttributes(
        he({
          telemetry: i,
          attributes: {
            "ai.embeddings": {
              output: () => I.map((O) => JSON.stringify(O))
            },
            "ai.usage.tokens": E
          }
        })
      ), new bs({
        values: t,
        embeddings: I,
        usage: { tokens: E },
        providerMetadata: $,
        responses: w
      });
    }
  });
}
var bs = class {
  constructor(e) {
    this.values = e.values, this.embeddings = e.embeddings, this.usage = e.usage, this.providerMetadata = e.providerMetadata, this.responses = e.responses;
  }
};
async function G0({
  model: e,
  prompt: t,
  n = 1,
  maxImagesPerCall: r,
  size: o,
  aspectRatio: a,
  seed: s,
  providerOptions: i,
  maxRetries: u,
  abortSignal: c,
  headers: p
}) {
  var m, g;
  const f = pw(e), y = ze(
    p ?? {},
    `ai/${mt}`
  ), { retry: _ } = Ct({
    maxRetries: u,
    abortSignal: c
  }), b = (m = r ?? await Kw(f)) != null ? m : 1, h = Math.ceil(n / b), v = Array.from({ length: h }, (O, R) => {
    if (R < h - 1)
      return b;
    const C = n % b;
    return C === 0 ? b : C;
  }), I = await Promise.all(
    v.map(
      async (O) => _(
        () => f.doGenerate({
          prompt: t,
          n: O,
          abortSignal: c,
          headers: y,
          size: o,
          aspectRatio: a,
          seed: s,
          providerOptions: i ?? {}
        })
      )
    )
  ), w = [], E = [], $ = [], S = {};
  for (const O of I) {
    if (w.push(
      ...O.images.map(
        (R) => {
          var C;
          return new _r({
            data: R,
            mediaType: (C = mr({
              data: R,
              signatures: yu
            })) != null ? C : "image/png"
          });
        }
      )
    ), E.push(...O.warnings), O.providerMetadata)
      for (const [R, C] of Object.entries(O.providerMetadata))
        if (R === "gateway") {
          const N = S[R];
          N != null && typeof N == "object" ? S[R] = {
            ...N,
            ...C
          } : S[R] = C;
          const Z = S[R].images;
          Array.isArray(Z) && Z.length === 0 && delete S[R].images;
        } else
          (g = S[R]) != null || (S[R] = { images: [] }), S[R].images.push(
            ...O.providerMetadata[R].images
          );
    $.push(O.response);
  }
  if (Jt(E), !w.length)
    throw new Yb({ responses: $ });
  return new Ww({
    images: w,
    warnings: E,
    responses: $,
    providerMetadata: S
  });
}
var Ww = class {
  constructor(e) {
    this.images = e.images, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = e.providerMetadata;
  }
  get image() {
    return this.images[0];
  }
};
async function Kw(e) {
  return e.maxImagesPerCall instanceof Function ? e.maxImagesPerCall({
    modelId: e.modelId
  }) : e.maxImagesPerCall;
}
function Yw(e) {
  const t = e.filter(
    (n) => n.type === "reasoning"
  );
  return t.length === 0 ? void 0 : t.map((n) => n.text).join(`
`);
}
var Xw = {
  type: "no-schema",
  jsonSchema: void 0,
  async validatePartialResult({ value: e, textDelta: t }) {
    return { success: !0, value: { partial: e, textDelta: t } };
  },
  async validateFinalResult(e, t) {
    return e === void 0 ? {
      success: !1,
      error: new Zt({
        message: "No object generated: response did not match schema.",
        text: t.text,
        response: t.response,
        usage: t.usage,
        finishReason: t.finishReason
      })
    } : { success: !0, value: e };
  },
  createElementStream() {
    throw new ke({
      functionality: "element streams in no-schema mode"
    });
  }
}, Qw = (e) => ({
  type: "object",
  jsonSchema: e.jsonSchema,
  async validatePartialResult({ value: t, textDelta: n }) {
    return {
      success: !0,
      value: {
        // Note: currently no validation of partial results:
        partial: t,
        textDelta: n
      }
    };
  },
  async validateFinalResult(t) {
    return it({ value: t, schema: e });
  },
  createElementStream() {
    throw new ke({
      functionality: "element streams in object mode"
    });
  }
}), e0 = (e) => {
  const { $schema: t, ...n } = e.jsonSchema;
  return {
    type: "array",
    // wrap in object that contains array of elements, since most LLMs will not
    // be able to generate an array directly:
    // possible future optimization: use arrays directly when model supports grammar-guided generation
    jsonSchema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        elements: { type: "array", items: n }
      },
      required: ["elements"],
      additionalProperties: !1
    },
    async validatePartialResult({
      value: r,
      latestObject: o,
      isFirstDelta: a,
      isFinalDelta: s
    }) {
      var i;
      if (!Hn(r) || !zo(r.elements))
        return {
          success: !1,
          error: new Ye({
            value: r,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const u = r.elements, c = [];
      for (let g = 0; g < u.length; g++) {
        const f = u[g], y = await it({ value: f, schema: e });
        if (!(g === u.length - 1 && !s)) {
          if (!y.success)
            return y;
          c.push(y.value);
        }
      }
      const p = (i = o == null ? void 0 : o.length) != null ? i : 0;
      let m = "";
      return a && (m += "["), p > 0 && (m += ","), m += c.slice(p).map((g) => JSON.stringify(g)).join(","), s && (m += "]"), {
        success: !0,
        value: {
          partial: c,
          textDelta: m
        }
      };
    },
    async validateFinalResult(r) {
      if (!Hn(r) || !zo(r.elements))
        return {
          success: !1,
          error: new Ye({
            value: r,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const o = r.elements;
      for (const a of o) {
        const s = await it({ value: a, schema: e });
        if (!s.success)
          return s;
      }
      return { success: !0, value: o };
    },
    createElementStream(r) {
      let o = 0;
      return Et(
        r.pipeThrough(
          new TransformStream({
            transform(a, s) {
              switch (a.type) {
                case "object": {
                  const i = a.object;
                  for (; o < i.length; o++)
                    s.enqueue(i[o]);
                  break;
                }
                case "text-delta":
                case "finish":
                case "error":
                  break;
                default: {
                  const i = a;
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
    if (!Hn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new Ye({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const n = t.result;
    return e.includes(n) ? { success: !0, value: n } : {
      success: !1,
      error: new Ye({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  async validatePartialResult({ value: t, textDelta: n }) {
    if (!Hn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new Ye({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const r = t.result, o = e.filter(
      (a) => a.startsWith(r)
    );
    return t.result.length === 0 || o.length === 0 ? {
      success: !1,
      error: new Ye({
        value: t,
        cause: "value must be a string in the enum"
      })
    } : {
      success: !0,
      value: {
        partial: o.length > 1 ? r : o[0],
        textDelta: n
      }
    };
  },
  createElementStream() {
    throw new ke({
      functionality: "element streams in enum mode"
    });
  }
});
function Hu({
  output: e,
  schema: t,
  enumValues: n
}) {
  switch (e) {
    case "object":
      return Qw(on(t));
    case "array":
      return e0(on(t));
    case "enum":
      return t0(n);
    case "no-schema":
      return Xw;
    default: {
      const r = e;
      throw new Error(`Unsupported output: ${r}`);
    }
  }
}
async function ws(e, t, n) {
  const r = await Nt({ text: e });
  if (!r.success)
    throw new Zt({
      message: "No object generated: could not parse the response.",
      cause: r.error,
      text: e,
      response: n.response,
      usage: n.usage,
      finishReason: n.finishReason
    });
  const o = await t.validateFinalResult(
    r.value,
    {
      text: e,
      response: n.response,
      usage: n.usage
    }
  );
  if (!o.success)
    throw new Zt({
      message: "No object generated: response did not match schema.",
      cause: o.error,
      text: e,
      response: n.response,
      usage: n.usage,
      finishReason: n.finishReason
    });
  return o.value;
}
async function Wu(e, t, n, r) {
  try {
    return await ws(e, t, r);
  } catch (o) {
    if (n != null && Zt.isInstance(o) && (xn.isInstance(o.cause) || Ye.isInstance(o.cause))) {
      const a = await n({
        text: e,
        error: o.cause
      });
      if (a === null)
        throw o;
      return await ws(
        a,
        t,
        r
      );
    }
    throw o;
  }
}
function Ku({
  output: e,
  schema: t,
  schemaName: n,
  schemaDescription: r,
  enumValues: o
}) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new we({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t != null)
      throw new we({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output."
      });
    if (r != null)
      throw new we({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for no-schema output."
      });
    if (n != null)
      throw new we({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for no-schema output."
      });
    if (o != null)
      throw new we({
        parameter: "enumValues",
        value: o,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (t == null)
      throw new we({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output."
      });
    if (o != null)
      throw new we({
        parameter: "enumValues",
        value: o,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (t == null)
      throw new we({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output."
      });
    if (o != null)
      throw new we({
        parameter: "enumValues",
        value: o,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new we({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output."
      });
    if (r != null)
      throw new we({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for enum output."
      });
    if (n != null)
      throw new we({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for enum output."
      });
    if (o == null)
      throw new we({
        parameter: "enumValues",
        value: o,
        message: "Enum values are required for enum output."
      });
    for (const a of o)
      if (typeof a != "string")
        throw new we({
          parameter: "enumValues",
          value: a,
          message: "Enum values must be strings."
        });
  }
}
var n0 = On({ prefix: "aiobj", size: 24 });
async function B0(e) {
  const {
    model: t,
    output: n = "object",
    system: r,
    prompt: o,
    messages: a,
    maxRetries: s,
    abortSignal: i,
    headers: u,
    experimental_repairText: c,
    experimental_telemetry: p,
    experimental_download: m,
    providerOptions: g,
    _internal: {
      generateId: f = n0,
      currentDate: y = () => /* @__PURE__ */ new Date()
    } = {},
    ..._
  } = e, b = sn(t), h = "enum" in e ? e.enum : void 0, {
    schema: v,
    schemaDescription: I,
    schemaName: w
  } = "schema" in e ? e : {};
  Ku({
    output: n,
    schema: v,
    schemaName: w,
    schemaDescription: I,
    enumValues: h
  });
  const { maxRetries: E, retry: $ } = Ct({
    maxRetries: s,
    abortSignal: i
  }), S = Hu({
    output: n,
    schema: v,
    enumValues: h
  }), O = Lt(_), R = ze(
    u ?? {},
    `ai/${mt}`
  ), C = dn({
    model: b,
    telemetry: p,
    headers: R,
    settings: { ...O, maxRetries: E }
  }), N = pn(p);
  try {
    return await Ke({
      name: "ai.generateObject",
      attributes: he({
        telemetry: p,
        attributes: {
          ...We({
            operationId: "ai.generateObject",
            telemetry: p
          }),
          ...C,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: r, prompt: o, messages: a })
          },
          "ai.schema": S.jsonSchema != null ? { input: () => JSON.stringify(S.jsonSchema) } : void 0,
          "ai.schema.name": w,
          "ai.schema.description": I,
          "ai.settings.output": S.type
        }
      }),
      tracer: N,
      fn: async (Z) => {
        var j;
        let D, X, z, V, ne, be, ae, Ie;
        const M = await gr({
          system: r,
          prompt: o,
          messages: a
        }), F = await hr({
          prompt: M,
          supportedUrls: await b.supportedUrls,
          download: m
        }), q = await $(
          () => Ke({
            name: "ai.generateObject.doGenerate",
            attributes: he({
              telemetry: p,
              attributes: {
                ...We({
                  operationId: "ai.generateObject.doGenerate",
                  telemetry: p
                }),
                ...C,
                "ai.prompt.messages": {
                  input: () => yr(F)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": b.provider,
                "gen_ai.request.model": b.modelId,
                "gen_ai.request.frequency_penalty": O.frequencyPenalty,
                "gen_ai.request.max_tokens": O.maxOutputTokens,
                "gen_ai.request.presence_penalty": O.presencePenalty,
                "gen_ai.request.temperature": O.temperature,
                "gen_ai.request.top_k": O.topK,
                "gen_ai.request.top_p": O.topP
              }
            }),
            tracer: N,
            fn: async (W) => {
              var ce, fe, Ze, ve, $e, Qe, _e, se;
              const te = await b.doGenerate({
                responseFormat: {
                  type: "json",
                  schema: S.jsonSchema,
                  name: w,
                  description: I
                },
                ...Lt(_),
                prompt: F,
                providerOptions: g,
                abortSignal: i,
                headers: R
              }), K = {
                id: (fe = (ce = te.response) == null ? void 0 : ce.id) != null ? fe : f(),
                timestamp: (ve = (Ze = te.response) == null ? void 0 : Ze.timestamp) != null ? ve : y(),
                modelId: (Qe = ($e = te.response) == null ? void 0 : $e.modelId) != null ? Qe : b.modelId,
                headers: (_e = te.response) == null ? void 0 : _e.headers,
                body: (se = te.response) == null ? void 0 : se.body
              }, B = no(te.content), je = Yw(te.content);
              if (B === void 0)
                throw new Zt({
                  message: "No object generated: the model did not return a response.",
                  response: K,
                  usage: te.usage,
                  finishReason: te.finishReason
                });
              return W.setAttributes(
                he({
                  telemetry: p,
                  attributes: {
                    "ai.response.finishReason": te.finishReason,
                    "ai.response.object": { output: () => B },
                    "ai.response.id": K.id,
                    "ai.response.model": K.modelId,
                    "ai.response.timestamp": K.timestamp.toISOString(),
                    "ai.response.providerMetadata": JSON.stringify(
                      te.providerMetadata
                    ),
                    // TODO rename telemetry attributes to inputTokens and outputTokens
                    "ai.usage.promptTokens": te.usage.inputTokens,
                    "ai.usage.completionTokens": te.usage.outputTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [te.finishReason],
                    "gen_ai.response.id": K.id,
                    "gen_ai.response.model": K.modelId,
                    "gen_ai.usage.input_tokens": te.usage.inputTokens,
                    "gen_ai.usage.output_tokens": te.usage.outputTokens
                  }
                })
              ), {
                ...te,
                objectText: B,
                reasoning: je,
                responseData: K
              };
            }
          })
        );
        D = q.objectText, X = q.finishReason, z = q.usage, V = q.warnings, ae = q.providerMetadata, be = (j = q.request) != null ? j : {}, ne = q.responseData, Ie = q.reasoning, Jt(V);
        const T = await Wu(
          D,
          S,
          c,
          {
            response: ne,
            usage: z,
            finishReason: X
          }
        );
        return Z.setAttributes(
          he({
            telemetry: p,
            attributes: {
              "ai.response.finishReason": X,
              "ai.response.object": {
                output: () => JSON.stringify(T)
              },
              "ai.response.providerMetadata": JSON.stringify(
                ae
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": z.inputTokens,
              "ai.usage.completionTokens": z.outputTokens
            }
          })
        ), new r0({
          object: T,
          reasoning: Ie,
          finishReason: X,
          usage: z,
          warnings: V,
          request: be,
          response: ne,
          providerMetadata: ae
        });
      }
    });
  } catch (Z) {
    throw vr(Z);
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
      headers: qn(e == null ? void 0 : e.headers, {
        "content-type": "application/json; charset=utf-8"
      })
    });
  }
};
function J0(e, t) {
  if (e.length !== t.length)
    throw new we({
      parameter: "vector1,vector2",
      value: { vector1Length: e.length, vector2Length: t.length },
      message: "Vectors must have the same length"
    });
  const n = e.length;
  if (n === 0)
    return 0;
  let r = 0, o = 0, a = 0;
  for (let s = 0; s < n; s++) {
    const i = e[s], u = t[s];
    r += i * i, o += u * u, a += i * u;
  }
  return r === 0 || o === 0 ? 0 : a / (Math.sqrt(r) * Math.sqrt(o));
}
function H0(e) {
  const [t, n] = e.split(",");
  if (t.split(";")[0].split(":")[1] == null || n == null)
    throw new Error("Invalid data URL format");
  try {
    return window.atob(n);
  } catch {
    throw new Error("Error decoding data URL");
  }
}
function ar(e, t) {
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
    for (let o = 0; o < e.length; o++)
      if (!ar(e[o], t[o]))
        return !1;
    return !0;
  }
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n)
    if (!r.includes(o) || !ar(e[o], t[o]))
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
    return new Promise((t, n) => {
      this.queue.push(async () => {
        try {
          await e(), t();
        } catch (r) {
          n(r);
        }
      }), this.processQueue();
    });
  }
};
function W0({
  chunks: e,
  initialDelayInMs: t = 0,
  chunkDelayInMs: n = 0,
  _internal: r
}) {
  var o;
  const a = (o = r == null ? void 0 : r.delay) != null ? o : go;
  let s = 0;
  return new ReadableStream({
    async pull(i) {
      s < e.length ? (await a(s === 0 ? t : n), i.enqueue(e[s++])) : i.close();
    }
  });
}
var a0 = On({ prefix: "aiobj", size: 24 });
function K0(e) {
  const {
    model: t,
    output: n = "object",
    system: r,
    prompt: o,
    messages: a,
    maxRetries: s,
    abortSignal: i,
    headers: u,
    experimental_repairText: c,
    experimental_telemetry: p,
    experimental_download: m,
    providerOptions: g,
    onError: f = ({ error: O }) => {
      console.error(O);
    },
    onFinish: y,
    _internal: {
      generateId: _ = a0,
      currentDate: b = () => /* @__PURE__ */ new Date(),
      now: h = Bu
    } = {},
    ...v
  } = e, I = "enum" in e && e.enum ? e.enum : void 0, {
    schema: w,
    schemaDescription: E,
    schemaName: $
  } = "schema" in e ? e : {};
  Ku({
    output: n,
    schema: w,
    schemaName: $,
    schemaDescription: E,
    enumValues: I
  });
  const S = Hu({
    output: n,
    schema: w,
    enumValues: I
  });
  return new s0({
    model: t,
    telemetry: p,
    headers: u,
    settings: v,
    maxRetries: s,
    abortSignal: i,
    outputStrategy: S,
    system: r,
    prompt: o,
    messages: a,
    schemaName: $,
    schemaDescription: E,
    providerOptions: g,
    repairText: c,
    onError: f,
    onFinish: y,
    download: m,
    generateId: _,
    currentDate: b,
    now: h
  });
}
var s0 = class {
  constructor({
    model: e,
    headers: t,
    telemetry: n,
    settings: r,
    maxRetries: o,
    abortSignal: a,
    outputStrategy: s,
    system: i,
    prompt: u,
    messages: c,
    schemaName: p,
    schemaDescription: m,
    providerOptions: g,
    repairText: f,
    onError: y,
    onFinish: _,
    download: b,
    generateId: h,
    currentDate: v,
    now: I
  }) {
    this._object = new st(), this._usage = new st(), this._providerMetadata = new st(), this._warnings = new st(), this._request = new st(), this._response = new st(), this._finishReason = new st();
    const w = sn(e), { maxRetries: E, retry: $ } = Ct({
      maxRetries: o,
      abortSignal: a
    }), S = Lt(r), O = dn({
      model: w,
      telemetry: n,
      headers: t,
      settings: { ...S, maxRetries: E }
    }), R = pn(n), C = this, N = Gu(), Z = new TransformStream({
      transform(j, D) {
        D.enqueue(j), j.type === "error" && y({ error: vr(j.error) });
      }
    });
    this.baseStream = N.stream.pipeThrough(Z), Ke({
      name: "ai.streamObject",
      attributes: he({
        telemetry: n,
        attributes: {
          ...We({
            operationId: "ai.streamObject",
            telemetry: n
          }),
          ...O,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: i, prompt: u, messages: c })
          },
          "ai.schema": s.jsonSchema != null ? { input: () => JSON.stringify(s.jsonSchema) } : void 0,
          "ai.schema.name": p,
          "ai.schema.description": m,
          "ai.settings.output": s.type
        }
      }),
      tracer: R,
      endWhenDone: !1,
      fn: async (j) => {
        const D = await gr({
          system: i,
          prompt: u,
          messages: c
        }), X = {
          responseFormat: {
            type: "json",
            schema: s.jsonSchema,
            name: p,
            description: m
          },
          ...Lt(r),
          prompt: await hr({
            prompt: D,
            supportedUrls: await w.supportedUrls,
            download: b
          }),
          providerOptions: g,
          abortSignal: a,
          headers: t,
          includeRawChunks: !1
        }, z = {
          transform: (K, B) => {
            switch (K.type) {
              case "text-delta":
                B.enqueue(K.delta);
                break;
              case "response-metadata":
              case "finish":
              case "error":
              case "stream-start":
                B.enqueue(K);
                break;
            }
          }
        }, {
          result: { stream: V, response: ne, request: be },
          doStreamSpan: ae,
          startTimestampMs: Ie
        } = await $(
          () => Ke({
            name: "ai.streamObject.doStream",
            attributes: he({
              telemetry: n,
              attributes: {
                ...We({
                  operationId: "ai.streamObject.doStream",
                  telemetry: n
                }),
                ...O,
                "ai.prompt.messages": {
                  input: () => yr(X.prompt)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": w.provider,
                "gen_ai.request.model": w.modelId,
                "gen_ai.request.frequency_penalty": S.frequencyPenalty,
                "gen_ai.request.max_tokens": S.maxOutputTokens,
                "gen_ai.request.presence_penalty": S.presencePenalty,
                "gen_ai.request.temperature": S.temperature,
                "gen_ai.request.top_k": S.topK,
                "gen_ai.request.top_p": S.topP
              }
            }),
            tracer: R,
            endWhenDone: !1,
            fn: async (K) => ({
              startTimestampMs: I(),
              doStreamSpan: K,
              result: await w.doStream(X)
            })
          })
        );
        C._request.resolve(be ?? {});
        let M, F = {
          inputTokens: void 0,
          outputTokens: void 0,
          totalTokens: void 0
        }, q, T, W, ce, fe = "", Ze = "", ve = {
          id: h(),
          timestamp: v(),
          modelId: w.modelId
        }, $e, Qe, _e = !0, se = !0;
        const te = V.pipeThrough(new TransformStream(z)).pipeThrough(
          new TransformStream({
            async transform(K, B) {
              var je, et, L;
              if (typeof K == "object" && K.type === "stream-start") {
                M = K.warnings;
                return;
              }
              if (_e) {
                const ie = I() - Ie;
                _e = !1, ae.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": ie
                }), ae.setAttributes({
                  "ai.stream.msToFirstChunk": ie
                });
              }
              if (typeof K == "string") {
                fe += K, Ze += K;
                const { value: ie, state: gt } = await Oo(fe);
                if (ie !== void 0 && !ar($e, ie)) {
                  const me = await s.validatePartialResult({
                    value: ie,
                    textDelta: Ze,
                    latestObject: Qe,
                    isFirstDelta: se,
                    isFinalDelta: gt === "successful-parse"
                  });
                  me.success && !ar(
                    Qe,
                    me.value.partial
                  ) && ($e = ie, Qe = me.value.partial, B.enqueue({
                    type: "object",
                    object: Qe
                  }), B.enqueue({
                    type: "text-delta",
                    textDelta: me.value.textDelta
                  }), Ze = "", se = !1);
                }
                return;
              }
              switch (K.type) {
                case "response-metadata": {
                  ve = {
                    id: (je = K.id) != null ? je : ve.id,
                    timestamp: (et = K.timestamp) != null ? et : ve.timestamp,
                    modelId: (L = K.modelId) != null ? L : ve.modelId
                  };
                  break;
                }
                case "finish": {
                  Ze !== "" && B.enqueue({ type: "text-delta", textDelta: Ze }), q = K.finishReason, F = K.usage, T = K.providerMetadata, B.enqueue({
                    ...K,
                    usage: F,
                    response: ve
                  }), Jt(M ?? []), C._usage.resolve(F), C._providerMetadata.resolve(T), C._warnings.resolve(M), C._response.resolve({
                    ...ve,
                    headers: ne == null ? void 0 : ne.headers
                  }), C._finishReason.resolve(q ?? "unknown");
                  try {
                    W = await Wu(
                      fe,
                      s,
                      f,
                      {
                        response: ve,
                        usage: F,
                        finishReason: q
                      }
                    ), C._object.resolve(W);
                  } catch (ie) {
                    ce = ie, C._object.reject(ie);
                  }
                  break;
                }
                default: {
                  B.enqueue(K);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(K) {
              try {
                const B = F ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                ae.setAttributes(
                  he({
                    telemetry: n,
                    attributes: {
                      "ai.response.finishReason": q,
                      "ai.response.object": {
                        output: () => JSON.stringify(W)
                      },
                      "ai.response.id": ve.id,
                      "ai.response.model": ve.modelId,
                      "ai.response.timestamp": ve.timestamp.toISOString(),
                      "ai.response.providerMetadata": JSON.stringify(T),
                      "ai.usage.inputTokens": B.inputTokens,
                      "ai.usage.outputTokens": B.outputTokens,
                      "ai.usage.totalTokens": B.totalTokens,
                      "ai.usage.reasoningTokens": B.reasoningTokens,
                      "ai.usage.cachedInputTokens": B.cachedInputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [q],
                      "gen_ai.response.id": ve.id,
                      "gen_ai.response.model": ve.modelId,
                      "gen_ai.usage.input_tokens": B.inputTokens,
                      "gen_ai.usage.output_tokens": B.outputTokens
                    }
                  })
                ), ae.end(), j.setAttributes(
                  he({
                    telemetry: n,
                    attributes: {
                      "ai.usage.inputTokens": B.inputTokens,
                      "ai.usage.outputTokens": B.outputTokens,
                      "ai.usage.totalTokens": B.totalTokens,
                      "ai.usage.reasoningTokens": B.reasoningTokens,
                      "ai.usage.cachedInputTokens": B.cachedInputTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(W)
                      },
                      "ai.response.providerMetadata": JSON.stringify(T)
                    }
                  })
                ), await (_ == null ? void 0 : _({
                  usage: B,
                  object: W,
                  error: ce,
                  response: {
                    ...ve,
                    headers: ne == null ? void 0 : ne.headers
                  },
                  warnings: M,
                  providerMetadata: T
                }));
              } catch (B) {
                K.enqueue({ type: "error", error: B });
              } finally {
                j.end();
              }
            }
          })
        );
        N.addStream(te);
      }
    }).catch((j) => {
      N.addStream(
        new ReadableStream({
          start(D) {
            D.enqueue({ type: "error", error: j }), D.close();
          }
        })
      );
    }).finally(() => {
      N.close();
    }), this.outputStrategy = s;
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
                const n = e;
                throw new Error(`Unsupported chunk type: ${n}`);
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
                const n = e;
                throw new Error(`Unsupported chunk type: ${n}`);
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
    Uu({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toTextStreamResponse(e) {
    return Du({
      textStream: this.textStream,
      ...e
    });
  }
}, i0 = class extends _r {
  constructor({
    data: e,
    mediaType: t
  }) {
    super({ data: e, mediaType: t });
    let n = "mp3";
    if (t) {
      const r = t.split("/");
      r.length === 2 && t !== "audio/mpeg" && (n = r[1]);
    }
    if (!n)
      throw new Error(
        "Audio format must be provided or determinable from media type"
      );
    this.format = n;
  }
};
async function Y0({
  model: e,
  text: t,
  voice: n,
  outputFormat: r,
  instructions: o,
  speed: a,
  language: s,
  providerOptions: i = {},
  maxRetries: u,
  abortSignal: c,
  headers: p
}) {
  var m;
  if (e.specificationVersion !== "v2")
    throw new jn({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const g = ze(
    p ?? {},
    `ai/${mt}`
  ), { retry: f } = Ct({
    maxRetries: u,
    abortSignal: c
  }), y = await f(
    () => e.doGenerate({
      text: t,
      voice: n,
      outputFormat: r,
      instructions: o,
      speed: a,
      language: s,
      abortSignal: c,
      headers: g,
      providerOptions: i
    })
  );
  if (!y.audio || y.audio.length === 0)
    throw new tw({ responses: [y.response] });
  return Jt(y.warnings), new l0({
    audio: new i0({
      data: y.audio,
      mediaType: (m = mr({
        data: y.audio,
        signatures: _u
      })) != null ? m : "audio/mp3"
    }),
    warnings: y.warnings,
    responses: [y.response],
    providerMetadata: y.providerMetadata
  });
}
var l0 = class {
  constructor(e) {
    var t;
    this.audio = e.audio, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
}, u0 = {};
Fb(u0, {
  object: () => d0,
  text: () => c0
});
var c0 = () => ({
  type: "text",
  responseFormat: { type: "text" },
  async parsePartial({ text: e }) {
    return { partial: e };
  },
  async parseOutput({ text: e }) {
    return e;
  }
}), d0 = ({
  schema: e
}) => {
  const t = on(e);
  return {
    type: "object",
    responseFormat: {
      type: "json",
      schema: t.jsonSchema
    },
    async parsePartial({ text: n }) {
      const r = await Oo(n);
      switch (r.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: r.value
          };
        default: {
          const o = r.state;
          throw new Error(`Unsupported parse state: ${o}`);
        }
      }
    },
    async parseOutput({ text: n }, r) {
      const o = await Nt({ text: n });
      if (!o.success)
        throw new Zt({
          message: "No object generated: could not parse the response.",
          cause: o.error,
          text: n,
          response: r.response,
          usage: r.usage,
          finishReason: r.finishReason
        });
      const a = await it({
        value: o.value,
        schema: t
      });
      if (!a.success)
        throw new Zt({
          message: "No object generated: response did not match schema.",
          cause: a.error,
          text: n,
          response: r.response,
          usage: r.usage,
          finishReason: r.finishReason
        });
      return a.value;
    }
  };
};
function X0({
  messages: e,
  reasoning: t = "none",
  toolCalls: n = [],
  emptyMessages: r = "remove"
}) {
  (t === "all" || t === "before-last-message") && (e = e.map((o, a) => o.role !== "assistant" || typeof o.content == "string" || t === "before-last-message" && a === e.length - 1 ? o : {
    ...o,
    content: o.content.filter((s) => s.type !== "reasoning")
  })), n === "none" ? n = [] : n === "all" ? n = [{ type: "all" }] : n === "before-last-message" ? n = [{ type: "before-last-message" }] : typeof n == "string" && (n = [{ type: n }]);
  for (const o of n) {
    const a = o.type === "all" ? void 0 : o.type === "before-last-message" ? 1 : Number(
      o.type.slice(12).slice(0, -9)
    ), s = /* @__PURE__ */ new Set();
    if (a != null) {
      for (const i of e.slice(-a))
        if ((i.role === "assistant" || i.role === "tool") && typeof i.content != "string")
          for (const u of i.content)
            (u.type === "tool-call" || u.type === "tool-result") && s.add(u.toolCallId);
    }
    e = e.map((i, u) => {
      if (i.role !== "assistant" && i.role !== "tool" || typeof i.content == "string" || a && u >= e.length - a)
        return i;
      const c = {};
      return {
        ...i,
        content: i.content.filter((p) => p.type !== "tool-call" && p.type !== "tool-result" || (p.type === "tool-call" && (c[p.toolCallId] = p.toolName), (p.type === "tool-call" || p.type === "tool-result") && s.has(p.toolCallId)) ? !0 : o.tools != null && !o.tools.includes(p.toolName))
      };
    });
  }
  return r === "remove" && (e = e.filter((o) => o.content.length > 0)), e;
}
var p0 = {
  word: /\S+\s+/m,
  line: /\n+/m
};
function Q0({
  delayInMs: e = 10,
  chunking: t = "word",
  _internal: { delay: n = go } = {}
} = {}) {
  let r;
  if (typeof t == "function")
    r = (o) => {
      const a = t(o);
      if (a == null)
        return null;
      if (!a.length)
        throw new Error("Chunking function must return a non-empty string.");
      if (!o.startsWith(a))
        throw new Error(
          `Chunking function must return a match that is a prefix of the buffer. Received: "${a}" expected to start with "${o}"`
        );
      return a;
    };
  else {
    const o = typeof t == "string" ? p0[t] : t;
    if (o == null)
      throw new oo({
        argument: "chunking",
        message: `Chunking must be "word" or "line" or a RegExp. Received: ${t}`
      });
    r = (a) => {
      const s = o.exec(a);
      return s ? a.slice(0, s.index) + (s == null ? void 0 : s[0]) : null;
    };
  }
  return () => {
    let o = "", a = "";
    return new TransformStream({
      async transform(s, i) {
        if (s.type !== "text-delta") {
          o.length > 0 && (i.enqueue({ type: "text-delta", text: o, id: a }), o = ""), i.enqueue(s);
          return;
        }
        s.id !== a && o.length > 0 && (i.enqueue({ type: "text-delta", text: o, id: a }), o = ""), o += s.text, a = s.id;
        let u;
        for (; (u = r(o)) != null; )
          i.enqueue({ type: "text-delta", text: u, id: a }), o = o.slice(u.length), await n(e);
      }
    });
  };
}
function ex({
  settings: e
}) {
  return {
    middlewareVersion: "v2",
    transformParams: async ({ params: t }) => Ro(e, t)
  };
}
function f0(e, t) {
  if (t.length === 0)
    return null;
  const n = e.indexOf(t);
  if (n !== -1)
    return n;
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e.substring(r);
    if (t.startsWith(o))
      return r;
  }
  return null;
}
function tx({
  tagName: e,
  separator: t = `
`,
  startWithReasoning: n = !1
}) {
  const r = `<${e}>`, o = `</${e}>`;
  return {
    middlewareVersion: "v2",
    wrapGenerate: async ({ doGenerate: a }) => {
      const { content: s, ...i } = await a(), u = [];
      for (const c of s) {
        if (c.type !== "text") {
          u.push(c);
          continue;
        }
        const p = n ? r + c.text : c.text, m = new RegExp(`${r}(.*?)${o}`, "gs"), g = Array.from(p.matchAll(m));
        if (!g.length) {
          u.push(c);
          continue;
        }
        const f = g.map((_) => _[1]).join(t);
        let y = p;
        for (let _ = g.length - 1; _ >= 0; _--) {
          const b = g[_], h = y.slice(0, b.index), v = y.slice(
            b.index + b[0].length
          );
          y = h + (h.length > 0 && v.length > 0 ? t : "") + v;
        }
        u.push({
          type: "reasoning",
          text: f
        }), u.push({
          type: "text",
          text: y
        });
      }
      return { content: u, ...i };
    },
    wrapStream: async ({ doStream: a }) => {
      const { stream: s, ...i } = await a(), u = {};
      let c;
      return {
        stream: s.pipeThrough(
          new TransformStream({
            transform: (p, m) => {
              if (p.type === "text-start") {
                c = p;
                return;
              }
              if (p.type === "text-end" && c && (m.enqueue(c), c = void 0), p.type !== "text-delta") {
                m.enqueue(p);
                return;
              }
              u[p.id] == null && (u[p.id] = {
                isFirstReasoning: !0,
                isFirstText: !0,
                afterSwitch: !1,
                isReasoning: n,
                buffer: "",
                idCounter: 0,
                textId: p.id
              });
              const g = u[p.id];
              g.buffer += p.delta;
              function f(y) {
                if (y.length > 0) {
                  const _ = g.afterSwitch && (g.isReasoning ? !g.isFirstReasoning : !g.isFirstText) ? t : "";
                  g.isReasoning && (g.afterSwitch || g.isFirstReasoning) && m.enqueue({
                    type: "reasoning-start",
                    id: `reasoning-${g.idCounter}`
                  }), g.isReasoning ? m.enqueue({
                    type: "reasoning-delta",
                    delta: _ + y,
                    id: `reasoning-${g.idCounter}`
                  }) : (c && (m.enqueue(c), c = void 0), m.enqueue({
                    type: "text-delta",
                    delta: _ + y,
                    id: g.textId
                  })), g.afterSwitch = !1, g.isReasoning ? g.isFirstReasoning = !1 : g.isFirstText = !1;
                }
              }
              do {
                const y = g.isReasoning ? o : r, _ = f0(
                  g.buffer,
                  y
                );
                if (_ == null) {
                  f(g.buffer), g.buffer = "";
                  break;
                }
                if (f(g.buffer.slice(0, _)), _ + y.length <= g.buffer.length)
                  g.buffer = g.buffer.slice(
                    _ + y.length
                  ), g.isReasoning && m.enqueue({
                    type: "reasoning-end",
                    id: `reasoning-${g.idCounter++}`
                  }), g.isReasoning = !g.isReasoning, g.afterSwitch = !0;
                else {
                  g.buffer = g.buffer.slice(_);
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
function nx() {
  return {
    middlewareVersion: "v2",
    wrapStream: async ({ doGenerate: e }) => {
      const t = await e();
      let n = 0;
      return {
        stream: new ReadableStream({
          start(o) {
            o.enqueue({
              type: "stream-start",
              warnings: t.warnings
            }), o.enqueue({ type: "response-metadata", ...t.response });
            for (const a of t.content)
              switch (a.type) {
                case "text": {
                  a.text.length > 0 && (o.enqueue({ type: "text-start", id: String(n) }), o.enqueue({
                    type: "text-delta",
                    id: String(n),
                    delta: a.text
                  }), o.enqueue({ type: "text-end", id: String(n) }), n++);
                  break;
                }
                case "reasoning": {
                  o.enqueue({
                    type: "reasoning-start",
                    id: String(n),
                    providerMetadata: a.providerMetadata
                  }), o.enqueue({
                    type: "reasoning-delta",
                    id: String(n),
                    delta: a.text
                  }), o.enqueue({ type: "reasoning-end", id: String(n) }), n++;
                  break;
                }
                default: {
                  o.enqueue(a);
                  break;
                }
              }
            o.enqueue({
              type: "finish",
              finishReason: t.finishReason,
              usage: t.usage,
              providerMetadata: t.providerMetadata
            }), o.close();
          }
        }),
        request: t.request,
        response: t.response
      };
    }
  };
}
var Yu = ({
  model: e,
  middleware: t,
  modelId: n,
  providerId: r
}) => [...rr(t)].reverse().reduce((o, a) => m0({ model: o, middleware: a, modelId: n, providerId: r }), e), m0 = ({
  model: e,
  middleware: {
    transformParams: t,
    wrapGenerate: n,
    wrapStream: r,
    overrideProvider: o,
    overrideModelId: a,
    overrideSupportedUrls: s
  },
  modelId: i,
  providerId: u
}) => {
  var c, p, m;
  async function g({
    params: f,
    type: y
  }) {
    return t ? await t({ params: f, type: y, model: e }) : f;
  }
  return {
    specificationVersion: "v2",
    provider: (c = u ?? (o == null ? void 0 : o({ model: e }))) != null ? c : e.provider,
    modelId: (p = i ?? (a == null ? void 0 : a({ model: e }))) != null ? p : e.modelId,
    supportedUrls: (m = s == null ? void 0 : s({ model: e })) != null ? m : e.supportedUrls,
    async doGenerate(f) {
      const y = await g({ params: f, type: "generate" }), _ = async () => e.doGenerate(y);
      return n ? n({
        doGenerate: _,
        doStream: async () => e.doStream(y),
        params: y,
        model: e
      }) : _();
    },
    async doStream(f) {
      const y = await g({ params: f, type: "stream" }), _ = async () => e.doGenerate(y), b = async () => e.doStream(y);
      return r ? r({ doGenerate: _, doStream: b, params: y, model: e }) : b();
    }
  };
};
function rx({
  provider: e,
  languageModelMiddleware: t
}) {
  return {
    languageModel(r) {
      let o = e.languageModel(r);
      return o = Yu({
        model: o,
        middleware: t
      }), o;
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
  imageModels: n,
  transcriptionModels: r,
  speechModels: o,
  fallbackProvider: a
}) {
  return {
    languageModel(s) {
      if (e != null && s in e)
        return e[s];
      if (a)
        return a.languageModel(s);
      throw new He({ modelId: s, modelType: "languageModel" });
    },
    textEmbeddingModel(s) {
      if (t != null && s in t)
        return t[s];
      if (a)
        return a.textEmbeddingModel(s);
      throw new He({ modelId: s, modelType: "textEmbeddingModel" });
    },
    imageModel(s) {
      if (n != null && s in n)
        return n[s];
      if (a != null && a.imageModel)
        return a.imageModel(s);
      throw new He({ modelId: s, modelType: "imageModel" });
    },
    transcriptionModel(s) {
      if (r != null && s in r)
        return r[s];
      if (a != null && a.transcriptionModel)
        return a.transcriptionModel(s);
      throw new He({ modelId: s, modelType: "transcriptionModel" });
    },
    speechModel(s) {
      if (o != null && s in o)
        return o[s];
      if (a != null && a.speechModel)
        return a.speechModel(s);
      throw new He({ modelId: s, modelType: "speechModel" });
    }
  };
}
var ox = h0, Xu = "AI_NoSuchProviderError", Qu = `vercel.ai.error.${Xu}`, g0 = Symbol.for(Qu), ec, v0 = class extends He {
  constructor({
    modelId: e,
    modelType: t,
    providerId: n,
    availableProviders: r,
    message: o = `No such provider: ${n} (available providers: ${r.join()})`
  }) {
    super({ errorName: Xu, modelId: e, modelType: t, message: o }), this[ec] = !0, this.providerId = n, this.availableProviders = r;
  }
  static isInstance(e) {
    return H.hasMarker(e, Qu);
  }
};
ec = g0;
function y0(e, {
  separator: t = ":",
  languageModelMiddleware: n
} = {}) {
  const r = new _0({
    separator: t,
    languageModelMiddleware: n
  });
  for (const [o, a] of Object.entries(e))
    r.registerProvider({ id: o, provider: a });
  return r;
}
var ax = y0, _0 = class {
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
    const n = this.providers[e];
    if (n == null)
      throw new v0({
        modelId: e,
        modelType: t,
        providerId: e,
        availableProviders: Object.keys(this.providers)
      });
    return n;
  }
  splitId(e, t) {
    const n = e.indexOf(this.separator);
    if (n === -1)
      throw new He({
        modelId: e,
        modelType: t,
        message: `Invalid ${t} id for registry: ${e} (must be in the format "providerId${this.separator}modelId")`
      });
    return [e.slice(0, n), e.slice(n + this.separator.length)];
  }
  languageModel(e) {
    var t, n;
    const [r, o] = this.splitId(e, "languageModel");
    let a = (n = (t = this.getProvider(r, "languageModel")).languageModel) == null ? void 0 : n.call(
      t,
      o
    );
    if (a == null)
      throw new He({ modelId: e, modelType: "languageModel" });
    return this.languageModelMiddleware != null && (a = Yu({
      model: a,
      middleware: this.languageModelMiddleware
    })), a;
  }
  textEmbeddingModel(e) {
    var t;
    const [n, r] = this.splitId(e, "textEmbeddingModel"), o = this.getProvider(n, "textEmbeddingModel"), a = (t = o.textEmbeddingModel) == null ? void 0 : t.call(o, r);
    if (a == null)
      throw new He({
        modelId: e,
        modelType: "textEmbeddingModel"
      });
    return a;
  }
  imageModel(e) {
    var t;
    const [n, r] = this.splitId(e, "imageModel"), o = this.getProvider(n, "imageModel"), a = (t = o.imageModel) == null ? void 0 : t.call(o, r);
    if (a == null)
      throw new He({ modelId: e, modelType: "imageModel" });
    return a;
  }
  transcriptionModel(e) {
    var t;
    const [n, r] = this.splitId(e, "transcriptionModel"), o = this.getProvider(n, "transcriptionModel"), a = (t = o.transcriptionModel) == null ? void 0 : t.call(o, r);
    if (a == null)
      throw new He({
        modelId: e,
        modelType: "transcriptionModel"
      });
    return a;
  }
  speechModel(e) {
    var t;
    const [n, r] = this.splitId(e, "speechModel"), o = this.getProvider(n, "speechModel"), a = (t = o.speechModel) == null ? void 0 : t.call(o, r);
    if (a == null)
      throw new He({ modelId: e, modelType: "speechModel" });
    return a;
  }
}, b0 = class extends H {
  constructor(e) {
    super({
      name: "AI_NoTranscriptGeneratedError",
      message: "No transcript generated."
    }), this.responses = e.responses;
  }
};
async function sx({
  model: e,
  audio: t,
  providerOptions: n = {},
  maxRetries: r,
  abortSignal: o,
  headers: a
}) {
  if (e.specificationVersion !== "v2")
    throw new jn({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const { retry: s } = Ct({
    maxRetries: r,
    abortSignal: o
  }), i = ze(
    a ?? {},
    `ai/${mt}`
  ), u = t instanceof URL ? (await bu({ url: t })).data : yw(t), c = await s(
    () => {
      var p;
      return e.doGenerate({
        audio: u,
        abortSignal: o,
        headers: i,
        providerOptions: n,
        mediaType: (p = mr({
          data: u,
          signatures: _u
        })) != null ? p : "audio/wav"
      });
    }
  );
  if (Jt(c.warnings), !c.text)
    throw new b0({ responses: [c.response] });
  return new w0({
    text: c.text,
    segments: c.segments,
    language: c.language,
    durationInSeconds: c.durationInSeconds,
    warnings: c.warnings,
    responses: [c.response],
    providerMetadata: c.providerMetadata
  });
}
var w0 = class {
  constructor(e) {
    var t;
    this.text = e.text, this.segments = e.segments, this.language = e.language, this.durationInSeconds = e.durationInSeconds, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
async function x0({
  stream: e,
  onTextPart: t
}) {
  const n = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: r, value: o } = await n.read();
    if (r)
      break;
    await t(o);
  }
}
var I0 = () => fetch;
async function ix({
  api: e,
  prompt: t,
  credentials: n,
  headers: r,
  body: o,
  streamProtocol: a = "data",
  setCompletion: s,
  setLoading: i,
  setError: u,
  setAbortController: c,
  onFinish: p,
  onError: m,
  fetch: g = I0()
}) {
  var f;
  try {
    i(!0), u(void 0);
    const y = new AbortController();
    c(y), s("");
    const _ = await g(e, {
      method: "POST",
      body: JSON.stringify({
        prompt: t,
        ...o
      }),
      credentials: n,
      headers: ze(
        {
          "Content-Type": "application/json",
          ...r
        },
        `ai-sdk/${mt}`,
        rn()
      ),
      signal: y.signal
    }).catch((h) => {
      throw h;
    });
    if (!_.ok)
      throw new Error(
        (f = await _.text()) != null ? f : "Failed to fetch the chat response."
      );
    if (!_.body)
      throw new Error("The response body is empty.");
    let b = "";
    switch (a) {
      case "text": {
        await x0({
          stream: _.body,
          onTextPart: (h) => {
            b += h, s(b);
          }
        });
        break;
      }
      case "data": {
        await br({
          stream: yo({
            stream: _.body,
            schema: Fu
          }).pipeThrough(
            new TransformStream({
              async transform(h) {
                if (!h.success)
                  throw h.error;
                const v = h.value;
                if (v.type === "text-delta")
                  b += v.delta, s(b);
                else if (v.type === "error")
                  throw new Error(v.errorText);
              }
            })
          ),
          onError: (h) => {
            throw h;
          }
        });
        break;
      }
      default: {
        const h = a;
        throw new Error(`Unknown stream protocol: ${h}`);
      }
    }
    return p && p(t, b), c(null), b;
  } catch (y) {
    if (y.name === "AbortError")
      return c(null), null;
    y instanceof Error && m && m(y), u(y);
  } finally {
    i(!1);
  }
}
async function k0(e) {
  if (e == null)
    return [];
  if (!globalThis.FileList || !(e instanceof globalThis.FileList))
    throw new Error("FileList is not supported in the current environment");
  return Promise.all(
    Array.from(e).map(async (t) => {
      const { name: n, type: r } = t, o = await new Promise((a, s) => {
        const i = new FileReader();
        i.onload = (u) => {
          var c;
          a((c = u.target) == null ? void 0 : c.result);
        }, i.onerror = (u) => s(u), i.readAsDataURL(t);
      });
      return {
        type: "file",
        mediaType: r,
        filename: n,
        url: o
      };
    })
  );
}
var tc = class {
  constructor({
    api: e = "/api/chat",
    credentials: t,
    headers: n,
    body: r,
    fetch: o,
    prepareSendMessagesRequest: a,
    prepareReconnectToStreamRequest: s
  }) {
    this.api = e, this.credentials = t, this.headers = n, this.body = r, this.fetch = o, this.prepareSendMessagesRequest = a, this.prepareReconnectToStreamRequest = s;
  }
  async sendMessages({
    abortSignal: e,
    ...t
  }) {
    var n, r, o, a, s;
    const i = await Oe(this.body), u = await Oe(this.headers), c = await Oe(this.credentials), p = {
      ...jt(u),
      ...jt(t.headers)
    }, m = await ((n = this.prepareSendMessagesRequest) == null ? void 0 : n.call(this, {
      api: this.api,
      id: t.chatId,
      messages: t.messages,
      body: { ...i, ...t.body },
      headers: p,
      credentials: c,
      requestMetadata: t.metadata,
      trigger: t.trigger,
      messageId: t.messageId
    })), g = (r = m == null ? void 0 : m.api) != null ? r : this.api, f = (m == null ? void 0 : m.headers) !== void 0 ? jt(m.headers) : p, y = (m == null ? void 0 : m.body) !== void 0 ? m.body : {
      ...i,
      ...t.body,
      id: t.chatId,
      messages: t.messages,
      trigger: t.trigger,
      messageId: t.messageId
    }, _ = (o = m == null ? void 0 : m.credentials) != null ? o : c, h = await ((a = this.fetch) != null ? a : globalThis.fetch)(g, {
      method: "POST",
      headers: ze(
        {
          "Content-Type": "application/json",
          ...f
        },
        `ai-sdk/${mt}`,
        rn()
      ),
      body: JSON.stringify(y),
      credentials: _,
      signal: e
    });
    if (!h.ok)
      throw new Error(
        (s = await h.text()) != null ? s : "Failed to fetch the chat response."
      );
    if (!h.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(h.body);
  }
  async reconnectToStream(e) {
    var t, n, r, o, a;
    const s = await Oe(this.body), i = await Oe(this.headers), u = await Oe(this.credentials), c = {
      ...jt(i),
      ...jt(e.headers)
    }, p = await ((t = this.prepareReconnectToStreamRequest) == null ? void 0 : t.call(this, {
      api: this.api,
      id: e.chatId,
      body: { ...s, ...e.body },
      headers: c,
      credentials: u,
      requestMetadata: e.metadata
    })), m = (n = p == null ? void 0 : p.api) != null ? n : `${this.api}/${e.chatId}/stream`, g = (p == null ? void 0 : p.headers) !== void 0 ? jt(p.headers) : c, f = (r = p == null ? void 0 : p.credentials) != null ? r : u, _ = await ((o = this.fetch) != null ? o : globalThis.fetch)(m, {
      method: "GET",
      headers: ze(
        g,
        `ai-sdk/${mt}`,
        rn()
      ),
      credentials: f
    });
    if (_.status === 204)
      return null;
    if (!_.ok)
      throw new Error(
        (a = await _.text()) != null ? a : "Failed to fetch the chat response."
      );
    if (!_.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(_.body);
  }
}, T0 = class extends tc {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return yo({
      stream: e,
      schema: Fu
    }).pipeThrough(
      new TransformStream({
        async transform(t, n) {
          if (!t.success)
            throw t.error;
          n.enqueue(t.value);
        }
      })
    );
  }
}, lx = class {
  constructor({
    generateId: e = Fe,
    id: t = e(),
    transport: n = new T0(),
    messageMetadataSchema: r,
    dataPartSchemas: o,
    state: a,
    onError: s,
    onToolCall: i,
    onFinish: u,
    onData: c,
    sendAutomaticallyWhen: p
  }) {
    this.activeResponse = void 0, this.jobExecutor = new o0(), this.sendMessage = async (m, g) => {
      var f, y, _, b;
      if (m == null) {
        await this.makeRequest({
          trigger: "submit-message",
          messageId: (f = this.lastMessage) == null ? void 0 : f.id,
          ...g
        });
        return;
      }
      let h;
      if ("text" in m || "files" in m ? h = {
        parts: [
          ...Array.isArray(m.files) ? m.files : await k0(m.files),
          ..."text" in m && m.text != null ? [{ type: "text", text: m.text }] : []
        ]
      } : h = m, m.messageId != null) {
        const v = this.state.messages.findIndex(
          (I) => I.id === m.messageId
        );
        if (v === -1)
          throw new Error(`message with id ${m.messageId} not found`);
        if (this.state.messages[v].role !== "user")
          throw new Error(
            `message with id ${m.messageId} is not a user message`
          );
        this.state.messages = this.state.messages.slice(0, v + 1), this.state.replaceMessage(v, {
          ...h,
          id: m.messageId,
          role: (y = h.role) != null ? y : "user",
          metadata: m.metadata
        });
      } else
        this.state.pushMessage({
          ...h,
          id: (_ = h.id) != null ? _ : this.generateId(),
          role: (b = h.role) != null ? b : "user",
          metadata: m.metadata
        });
      await this.makeRequest({
        trigger: "submit-message",
        messageId: m.messageId,
        ...g
      });
    }, this.regenerate = async ({
      messageId: m,
      ...g
    } = {}) => {
      const f = m == null ? this.state.messages.length - 1 : this.state.messages.findIndex((y) => y.id === m);
      if (f === -1)
        throw new Error(`message ${m} not found`);
      this.state.messages = this.state.messages.slice(
        0,
        // if the message is a user message, we need to include it in the request:
        this.messages[f].role === "assistant" ? f : f + 1
      ), await this.makeRequest({
        trigger: "regenerate-message",
        messageId: m,
        ...g
      });
    }, this.resumeStream = async (m = {}) => {
      await this.makeRequest({ trigger: "resume-stream", ...m });
    }, this.clearError = () => {
      this.status === "error" && (this.state.error = void 0, this.setStatus({ status: "ready" }));
    }, this.addToolOutput = async ({
      state: m = "output-available",
      tool: g,
      toolCallId: f,
      output: y,
      errorText: _
    }) => this.jobExecutor.run(async () => {
      var b, h;
      const v = this.state.messages, I = v[v.length - 1];
      this.state.replaceMessage(v.length - 1, {
        ...I,
        parts: I.parts.map(
          (w) => Rn(w) && w.toolCallId === f ? { ...w, state: m, output: y, errorText: _ } : w
        )
      }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(
        (w) => Rn(w) && w.toolCallId === f ? {
          ...w,
          state: m,
          output: y,
          errorText: _
        } : w
      )), this.status !== "streaming" && this.status !== "submitted" && ((b = this.sendAutomaticallyWhen) != null && b.call(this, { messages: this.state.messages })) && this.makeRequest({
        trigger: "submit-message",
        messageId: (h = this.lastMessage) == null ? void 0 : h.id
      });
    }), this.addToolResult = this.addToolOutput, this.stop = async () => {
      var m;
      this.status !== "streaming" && this.status !== "submitted" || (m = this.activeResponse) != null && m.abortController && this.activeResponse.abortController.abort();
    }, this.id = t, this.transport = n, this.generateId = e, this.messageMetadataSchema = r, this.dataPartSchemas = o, this.state = a, this.onError = s, this.onToolCall = i, this.onFinish = u, this.onData = c, this.sendAutomaticallyWhen = p;
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
    headers: n,
    body: r,
    messageId: o
  }) {
    var a, s, i, u;
    this.setStatus({ status: "submitted", error: void 0 });
    const c = this.lastMessage;
    let p = !1, m = !1, g = !1;
    try {
      const f = {
        state: Ao({
          lastMessage: this.state.snapshot(c),
          messageId: this.generateId()
        }),
        abortController: new AbortController()
      };
      f.abortController.signal.addEventListener("abort", () => {
        p = !0;
      }), this.activeResponse = f;
      let y;
      if (e === "resume-stream") {
        const b = await this.transport.reconnectToStream({
          chatId: this.id,
          metadata: t,
          headers: n,
          body: r
        });
        if (b == null) {
          this.setStatus({ status: "ready" });
          return;
        }
        y = b;
      } else
        y = await this.transport.sendMessages({
          chatId: this.id,
          messages: this.state.messages,
          abortSignal: f.abortController.signal,
          metadata: t,
          headers: n,
          body: r,
          trigger: e,
          messageId: o
        });
      const _ = (b) => (
        // serialize the job execution to avoid race conditions:
        this.jobExecutor.run(
          () => b({
            state: f.state,
            write: () => {
              var h;
              this.setStatus({ status: "streaming" }), f.state.message.id === ((h = this.lastMessage) == null ? void 0 : h.id) ? this.state.replaceMessage(
                this.state.messages.length - 1,
                f.state.message
              ) : this.state.pushMessage(f.state.message);
            }
          })
        )
      );
      await br({
        stream: $o({
          stream: y,
          onToolCall: this.onToolCall,
          onData: this.onData,
          messageMetadataSchema: this.messageMetadataSchema,
          dataPartSchemas: this.dataPartSchemas,
          runUpdateMessageJob: _,
          onError: (b) => {
            throw b;
          }
        }),
        onError: (b) => {
          throw b;
        }
      }), this.setStatus({ status: "ready" });
    } catch (f) {
      if (p || f.name === "AbortError")
        return p = !0, this.setStatus({ status: "ready" }), null;
      g = !0, f instanceof TypeError && (f.message.toLowerCase().includes("fetch") || f.message.toLowerCase().includes("network")) && (m = !0), this.onError && f instanceof Error && this.onError(f), this.setStatus({ status: "error", error: f });
    } finally {
      try {
        (s = this.onFinish) == null || s.call(this, {
          message: this.activeResponse.state.message,
          messages: this.state.messages,
          isAbort: p,
          isDisconnect: m,
          isError: g,
          finishReason: (a = this.activeResponse) == null ? void 0 : a.state.finishReason
        });
      } catch (f) {
        console.error(f);
      }
      this.activeResponse = void 0;
    }
    (i = this.sendAutomaticallyWhen) != null && i.call(this, { messages: this.state.messages }) && !g && await this.makeRequest({
      trigger: "submit-message",
      messageId: (u = this.lastMessage) == null ? void 0 : u.id,
      metadata: t,
      headers: n,
      body: r
    });
  }
};
function ux({
  messages: e
}) {
  const t = e[e.length - 1];
  if (!t || t.role !== "assistant")
    return !1;
  const n = t.parts.reduce((o, a, s) => a.type === "step-start" ? s : o, -1), r = t.parts.slice(n + 1).filter(Rn).filter((o) => !o.providerExecuted);
  return r.length > 0 && r.every(
    (o) => o.state === "output-available" || o.state === "output-error"
  );
}
function S0({
  stream: e
}) {
  return e.pipeThrough(
    new TransformStream({
      start(t) {
        t.enqueue({ type: "start" }), t.enqueue({ type: "start-step" }), t.enqueue({ type: "text-start", id: "text-1" });
      },
      async transform(t, n) {
        n.enqueue({ type: "text-delta", id: "text-1", delta: t });
      },
      async flush(t) {
        t.enqueue({ type: "text-end", id: "text-1" }), t.enqueue({ type: "finish-step" }), t.enqueue({ type: "finish" });
      }
    })
  );
}
var cx = class extends tc {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return S0({
      stream: e.pipeThrough(new TextDecoderStream())
    });
  }
}, E0 = Re(
  () => U(
    P(
      d({
        id: l(),
        role: Q(["system", "user", "assistant"]),
        metadata: le().optional(),
        parts: P(
          oe([
            d({
              type: x("text"),
              text: l(),
              state: Q(["streaming", "done"]).optional(),
              providerMetadata: ue.optional()
            }),
            d({
              type: x("reasoning"),
              text: l(),
              state: Q(["streaming", "done"]).optional(),
              providerMetadata: ue.optional()
            }),
            d({
              type: x("source-url"),
              sourceId: l(),
              url: l(),
              title: l().optional(),
              providerMetadata: ue.optional()
            }),
            d({
              type: x("source-document"),
              sourceId: l(),
              mediaType: l(),
              title: l(),
              filename: l().optional(),
              providerMetadata: ue.optional()
            }),
            d({
              type: x("file"),
              mediaType: l(),
              filename: l().optional(),
              url: l(),
              providerMetadata: ue.optional()
            }),
            d({
              type: x("step-start")
            }),
            d({
              type: l().startsWith("data-"),
              id: l().optional(),
              data: le()
            }),
            d({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("input-streaming"),
              input: le().optional(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional()
            }),
            d({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("input-available"),
              input: le(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: ue.optional()
            }),
            d({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("output-available"),
              input: le(),
              providerExecuted: J().optional(),
              output: le(),
              errorText: Te().optional(),
              callProviderMetadata: ue.optional(),
              preliminary: J().optional()
            }),
            d({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("output-error"),
              input: le(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: l(),
              callProviderMetadata: ue.optional()
            }),
            d({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("input-streaming"),
              providerExecuted: J().optional(),
              input: le().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              approval: Te().optional()
            }),
            d({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("input-available"),
              providerExecuted: J().optional(),
              input: le(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: ue.optional(),
              approval: Te().optional()
            }),
            d({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("approval-requested"),
              input: le(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: ue.optional(),
              approval: d({
                id: l(),
                approved: Te().optional(),
                reason: Te().optional()
              })
            }),
            d({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("approval-responded"),
              input: le(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: ue.optional(),
              approval: d({
                id: l(),
                approved: J(),
                reason: l().optional()
              })
            }),
            d({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("output-available"),
              providerExecuted: J().optional(),
              input: le(),
              output: le(),
              errorText: Te().optional(),
              callProviderMetadata: ue.optional(),
              preliminary: J().optional(),
              approval: d({
                id: l(),
                approved: x(!0),
                reason: l().optional()
              }).optional()
            }),
            d({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("output-error"),
              providerExecuted: J().optional(),
              input: le(),
              output: Te().optional(),
              errorText: l(),
              callProviderMetadata: ue.optional(),
              approval: d({
                id: l(),
                approved: x(!0),
                reason: l().optional()
              }).optional()
            }),
            d({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("output-denied"),
              providerExecuted: J().optional(),
              input: le(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: ue.optional(),
              approval: d({
                id: l(),
                approved: x(!1),
                reason: l().optional()
              })
            })
          ])
        ).nonempty("Message must contain at least one part")
      })
    ).nonempty("Messages array must not be empty")
  )
);
async function C0({
  messages: e,
  metadataSchema: t,
  dataSchemas: n,
  tools: r
}) {
  try {
    if (e == null)
      return {
        success: !1,
        error: new we({
          parameter: "messages",
          value: e,
          message: "messages parameter must be provided"
        })
      };
    const o = await Ne({
      value: e,
      schema: E0
    });
    if (t)
      for (const a of o)
        await Ne({
          value: a.metadata,
          schema: t
        });
    if (n)
      for (const a of o) {
        const s = a.parts.filter(
          (i) => i.type.startsWith("data-")
        );
        for (const i of s) {
          const u = i.type.slice(5), c = n[u];
          if (!c)
            return {
              success: !1,
              error: new Ye({
                value: i.data,
                cause: `No data schema found for data part ${u}`
              })
            };
          await Ne({
            value: i.data,
            schema: c
          });
        }
      }
    if (r)
      for (const a of o) {
        const s = a.parts.filter(
          (i) => i.type.startsWith("tool-")
        );
        for (const i of s) {
          const u = i.type.slice(5), c = r[u];
          if (!c)
            return {
              success: !1,
              error: new Ye({
                value: i.input,
                cause: `No tool schema found for tool part ${u}`
              })
            };
          (i.state === "input-available" || i.state === "output-available" || i.state === "output-error") && await Ne({
            value: i.input,
            schema: c.inputSchema
          }), i.state === "output-available" && c.outputSchema && await Ne({
            value: i.output,
            schema: c.outputSchema
          });
        }
      }
    return {
      success: !0,
      data: o
    };
  } catch (o) {
    return {
      success: !1,
      error: o
    };
  }
}
async function dx({
  messages: e,
  metadataSchema: t,
  dataSchemas: n,
  tools: r
}) {
  const o = await C0({
    messages: e,
    metadataSchema: t,
    dataSchemas: n,
    tools: r
  });
  if (!o.success)
    throw o.error;
  return o.data;
}
function px({
  execute: e,
  onError: t = cr,
  originalMessages: n,
  onFinish: r,
  generateId: o = Fe
}) {
  let a;
  const s = [], i = new ReadableStream({
    start(p) {
      a = p;
    }
  });
  function u(p) {
    try {
      a.enqueue(p);
    } catch {
    }
  }
  try {
    const p = e({
      writer: {
        write(m) {
          u(m);
        },
        merge(m) {
          s.push(
            (async () => {
              const g = m.getReader();
              for (; ; ) {
                const { done: f, value: y } = await g.read();
                if (f)
                  break;
                u(y);
              }
            })().catch((g) => {
              u({
                type: "error",
                errorText: t(g)
              });
            })
          );
        },
        onError: t
      }
    });
    p && s.push(
      p.catch((m) => {
        u({
          type: "error",
          errorText: t(m)
        });
      })
    );
  } catch (p) {
    u({
      type: "error",
      errorText: t(p)
    });
  }
  return new Promise(async (p) => {
    for (; s.length > 0; )
      await s.shift();
    p();
  }).finally(() => {
    try {
      a.close();
    } catch {
    }
  }), Vu({
    stream: i,
    messageId: o(),
    originalMessages: n,
    onFinish: r,
    onError: t
  });
}
function fx({
  message: e,
  stream: t,
  onError: n,
  terminateOnError: r = !1
}) {
  var o;
  let a, s = !1;
  const i = new ReadableStream({
    start(p) {
      a = p;
    }
  }), u = Ao({
    messageId: (o = e == null ? void 0 : e.id) != null ? o : "",
    lastMessage: e
  }), c = (p) => {
    n == null || n(p), !s && r && (s = !0, a == null || a.error(p));
  };
  return br({
    stream: $o({
      stream: t,
      runUpdateMessageJob(p) {
        return p({
          state: u,
          write: () => {
            a == null || a.enqueue(structuredClone(u.message));
          }
        });
      },
      onError: c
    }),
    onError: c
  }).finally(() => {
    s || a == null || a.close();
  }), Et(i);
}
export {
  H as AISDKError,
  qe as APICallError,
  lx as AbstractChat,
  T0 as DefaultChatTransport,
  Zr as DownloadError,
  lc as EmptyResponseBodyError,
  L0 as Experimental_Agent,
  tc as HttpChatTransport,
  we as InvalidArgumentError,
  ps as InvalidDataContentError,
  iw as InvalidMessageRoleError,
  Pt as InvalidPromptError,
  Sr as InvalidResponseDataError,
  $0 as InvalidStreamPartError,
  Ul as InvalidToolInputError,
  xn as JSONParseError,
  Zu as JsonToSseTransformStream,
  Zn as LoadAPIKeyError,
  R0 as LoadSettingError,
  uw as MessageConversionError,
  O0 as NoContentGeneratedError,
  Yb as NoImageGeneratedError,
  Zt as NoObjectGeneratedError,
  ew as NoOutputGeneratedError,
  Rl as NoOutputSpecifiedError,
  tw as NoSpeechGeneratedError,
  He as NoSuchModelError,
  v0 as NoSuchProviderError,
  to as NoSuchToolError,
  u0 as Output,
  fs as RetryError,
  o0 as SerialJobExecutor,
  cx as TextStreamChatTransport,
  ao as TooManyEmbeddingValuesForCallError,
  ow as ToolCallRepairError,
  Ye as TypeValidationError,
  Lu as UI_MESSAGE_STREAM_HEADERS,
  ke as UnsupportedFunctionalityError,
  jn as UnsupportedModelVersionError,
  on as asSchema,
  Mu as assistantModelMessageSchema,
  ix as callCompletionApi,
  br as consumeStream,
  k0 as convertFileListToFileUIParts,
  Z0 as convertToCoreMessages,
  Ju as convertToModelMessages,
  q0 as coreAssistantMessageSchema,
  z0 as coreMessageSchema,
  P0 as coreSystemMessageSchema,
  D0 as coreToolMessageSchema,
  j0 as coreUserMessageSchema,
  J0 as cosineSimilarity,
  tv as createAnthropic,
  E_ as createGateway,
  Ev as createGoogleGenerativeAI,
  On as createIdGenerator,
  Dv as createMistral,
  Qy as createOpenAI,
  y0 as createProviderRegistry,
  Du as createTextStreamResponse,
  px as createUIMessageStream,
  qw as createUIMessageStreamResponse,
  h0 as customProvider,
  ex as defaultSettingsMiddleware,
  A0 as dynamicTool,
  F0 as embed,
  V0 as embedMany,
  ax as experimental_createProviderRegistry,
  ox as experimental_customProvider,
  G0 as experimental_generateImage,
  Y0 as experimental_generateSpeech,
  sx as experimental_transcribe,
  tx as extractReasoningMiddleware,
  C_ as gateway,
  Fe as generateId,
  B0 as generateObject,
  Aw as generateText,
  H0 as getTextFromDataUrl,
  or as getToolName,
  Zw as getToolOrDynamicToolName,
  U0 as hasToolCall,
  Lr as isDataUIPart,
  ar as isDeepEqualData,
  Vr as isFileUIPart,
  vs as isReasoningUIPart,
  Fr as isTextUIPart,
  Rn as isToolOrDynamicToolUIPart,
  en as isToolUIPart,
  _o as jsonSchema,
  ux as lastAssistantMessageIsCompleteWithToolCalls,
  Ou as modelMessageSchema,
  yo as parseJsonEventStream,
  Oo as parsePartialJson,
  Uu as pipeTextStreamToResponse,
  Lw as pipeUIMessageStreamToResponse,
  X0 as pruneMessages,
  fx as readUIMessageStream,
  C0 as safeValidateUIMessages,
  W0 as simulateReadableStream,
  nx as simulateStreamingMiddleware,
  Q0 as smoothStream,
  ju as stepCountIs,
  K0 as streamObject,
  Gw as streamText,
  Eu as systemModelMessageSchema,
  N0 as tool,
  Ru as toolModelMessageSchema,
  Fu as uiMessageChunkSchema,
  Cu as userModelMessageSchema,
  dx as validateUIMessages,
  Yu as wrapLanguageModel,
  rx as wrapProvider,
  U as zodSchema
};
