var Is = "vercel.ai.error", ac = Symbol.for(Is), ks, sc = class Ts extends Error {
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
    super(n), this[ks] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Ts.hasMarker(t, Is);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
ks = ac;
var J = sc, Ss = "AI_APICallError", Es = `vercel.ai.error.${Ss}`, ic = Symbol.for(Es), Cs, De = class extends J {
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
    super({ name: Ss, message: e, cause: s }), this[Cs] = !0, this.url = t, this.requestBodyValues = n, this.statusCode = r, this.responseHeaders = o, this.responseBody = a, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return J.hasMarker(e, Es);
  }
};
Cs = ic;
var Ms = "AI_EmptyResponseBodyError", Rs = `vercel.ai.error.${Ms}`, lc = Symbol.for(Rs), Os, uc = class extends J {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Ms, message: e }), this[Os] = !0;
  }
  static isInstance(e) {
    return J.hasMarker(e, Rs);
  }
};
Os = lc;
function ln(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Ns = "AI_InvalidArgumentError", As = `vercel.ai.error.${Ns}`, cc = Symbol.for(As), $s, oo = class extends J {
  constructor({
    message: t,
    cause: n,
    argument: r
  }) {
    super({ name: Ns, message: t, cause: n }), this[$s] = !0, this.argument = r;
  }
  static isInstance(t) {
    return J.hasMarker(t, As);
  }
};
$s = cc;
var Ps = "AI_InvalidPromptError", js = `vercel.ai.error.${Ps}`, dc = Symbol.for(js), qs, Pt = class extends J {
  constructor({
    prompt: e,
    message: t,
    cause: n
  }) {
    super({ name: Ps, message: `Invalid prompt: ${t}`, cause: n }), this[qs] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, js);
  }
};
qs = dc;
var Ds = "AI_InvalidResponseDataError", zs = `vercel.ai.error.${Ds}`, pc = Symbol.for(zs), Us, Sr = class extends J {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: Ds, message: t }), this[Us] = !0, this.data = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, zs);
  }
};
Us = pc;
var Zs = "AI_JSONParseError", Ls = `vercel.ai.error.${Zs}`, fc = Symbol.for(Ls), Fs, xn = class extends J {
  constructor({ text: e, cause: t }) {
    super({
      name: Zs,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${ln(t)}`,
      cause: t
    }), this[Fs] = !0, this.text = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, Ls);
  }
};
Fs = fc;
var Vs = "AI_LoadAPIKeyError", Gs = `vercel.ai.error.${Vs}`, mc = Symbol.for(Gs), Bs, Zn = class extends J {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Vs, message: e }), this[Bs] = !0;
  }
  static isInstance(e) {
    return J.hasMarker(e, Gs);
  }
};
Bs = mc;
var Js = "AI_LoadSettingError", Hs = `vercel.ai.error.${Js}`, hc = Symbol.for(Hs), Ws, R0 = class extends J {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: Js, message: e }), this[Ws] = !0;
  }
  static isInstance(e) {
    return J.hasMarker(e, Hs);
  }
};
Ws = hc;
var Ys = "AI_NoContentGeneratedError", Ks = `vercel.ai.error.${Ys}`, gc = Symbol.for(Ks), Xs, O0 = class extends J {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: Ys, message: e }), this[Xs] = !0;
  }
  static isInstance(e) {
    return J.hasMarker(e, Ks);
  }
};
Xs = gc;
var Qs = "AI_NoSuchModelError", ei = `vercel.ai.error.${Qs}`, vc = Symbol.for(ei), ti, He = class extends J {
  constructor({
    errorName: e = Qs,
    modelId: t,
    modelType: n,
    message: r = `No such ${n}: ${t}`
  }) {
    super({ name: e, message: r }), this[ti] = !0, this.modelId = t, this.modelType = n;
  }
  static isInstance(e) {
    return J.hasMarker(e, ei);
  }
};
ti = vc;
var ni = "AI_TooManyEmbeddingValuesForCallError", ri = `vercel.ai.error.${ni}`, yc = Symbol.for(ri), oi, ao = class extends J {
  constructor(e) {
    super({
      name: ni,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[oi] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return J.hasMarker(e, ri);
  }
};
oi = yc;
var ai = "AI_TypeValidationError", si = `vercel.ai.error.${ai}`, _c = Symbol.for(si), ii, bc = class Gr extends J {
  constructor({ value: t, cause: n }) {
    super({
      name: ai,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${ln(n)}`,
      cause: n
    }), this[ii] = !0, this.value = t;
  }
  static isInstance(t) {
    return J.hasMarker(t, si);
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
ii = _c;
var Ke = bc, li = "AI_UnsupportedFunctionalityError", ui = `vercel.ai.error.${li}`, wc = Symbol.for(ui), ci, xe = class extends J {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: li, message: t }), this[ci] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, ui);
  }
};
ci = wc;
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
function xc(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = Er, onError: n = Er, onRetry: r = Er, onComment: o } = e;
  let a = "", s = !0, i, u = "", c = "";
  function d(_) {
    const w = s ? _.replace(/^\xEF\xBB\xBF/, "") : _, [h, v] = Ic(`${a}${w}`);
    for (const b of h)
      m(b);
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
    const w = _.indexOf(":");
    if (w !== -1) {
      const h = _.slice(0, w), v = _[w + 1] === " " ? 2 : 1, b = _.slice(w + v);
      g(h, b, _);
      return;
    }
    g(_, "", _);
  }
  function g(_, w, h) {
    switch (_) {
      case "event":
        c = w;
        break;
      case "data":
        u = `${u}${w}
`;
        break;
      case "id":
        i = w.includes("\0") ? void 0 : w;
        break;
      case "retry":
        /^\d+$/.test(w) ? r(parseInt(w, 10)) : n(
          new Uo(`Invalid \`retry\` value: "${w}"`, {
            type: "invalid-retry",
            value: w,
            line: h
          })
        );
        break;
      default:
        n(
          new Uo(
            `Unknown field "${_.length > 20 ? `${_.slice(0, 20)}…` : _}"`,
            { type: "unknown-field", field: _, value: w, line: h }
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
  return { feed: d, reset: y };
}
function Ic(e) {
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
class kc extends TransformStream {
  constructor({ onError: t, onRetry: n, onComment: r } = {}) {
    let o;
    super({
      start(a) {
        o = xc({
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
function $(e, t, n) {
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
    const c = s.prototype, d = Object.keys(c);
    for (let m = 0; m < d.length; m++) {
      const g = d[m];
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
    for (const d of c._zod.deferred)
      d();
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
class di extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const pi = {};
function Rt(e) {
  return pi;
}
function fi(e) {
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
function Tc(e, t) {
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
function de(e, t, n) {
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
function Sc(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const mi = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function In(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ec = sr(() => {
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
function hi(e) {
  return tn(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Cc = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function nn(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function $t(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n != null && n.parent) && (r._zod.parent = e), r;
}
function V(e) {
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
function Mc(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Rc = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Oc(e, t) {
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
function Nc(e, t) {
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
function Ac(e, t) {
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
function $c(e, t) {
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
function Pc(e, t) {
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
function jc(e, t, n) {
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
function qc(e, t, n) {
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
function Kt(e, t = 0) {
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
    const d = Ln((s = (a = (o = e.inst) == null ? void 0 : o._zod.def) == null ? void 0 : a.error) == null ? void 0 : s.call(a, e)) ?? Ln((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? Ln((u = n.customError) == null ? void 0 : u.call(n, e)) ?? Ln((c = n.localeError) == null ? void 0 : c.call(n, e)) ?? "Invalid input";
    r.message = d;
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
const gi = (e, t) => {
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
}, vi = $("$ZodError", gi), yi = $("$ZodError", gi, { Parent: Error });
function Dc(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function zc(e, t = (n) => n.message) {
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
    throw mi(i, o == null ? void 0 : o.callee), i;
  }
  return s.value;
}, co = (e) => async (t, n, r, o) => {
  const a = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, a);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(s.issues.map((u) => Ot(u, a, Rt())));
    throw mi(i, o == null ? void 0 : o.callee), i;
  }
  return s.value;
}, ir = (e) => (t, n, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, a = t._zod.run({ value: n, issues: [] }, o);
  if (a instanceof Promise)
    throw new Xt();
  return a.issues.length ? {
    success: !1,
    error: new (e ?? vi)(a.issues.map((s) => Ot(s, o, Rt())))
  } : { success: !0, data: a.value };
}, Uc = /* @__PURE__ */ ir(yi), lr = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: n, issues: [] }, o);
  return a instanceof Promise && (a = await a), a.issues.length ? {
    success: !1,
    error: new e(a.issues.map((s) => Ot(s, o, Rt())))
  } : { success: !0, data: a.value };
}, Zc = /* @__PURE__ */ lr(yi), Lc = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return uo(e)(t, n, o);
}, Fc = (e) => (t, n, r) => uo(e)(t, n, r), Vc = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return co(e)(t, n, o);
}, Gc = (e) => async (t, n, r) => co(e)(t, n, r), Bc = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ir(e)(t, n, o);
}, Jc = (e) => (t, n, r) => ir(e)(t, n, r), Hc = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return lr(e)(t, n, o);
}, Wc = (e) => async (t, n, r) => lr(e)(t, n, r), Yc = /^[cC][^\s-]{8,}$/, Kc = /^[0-9a-z]+$/, Xc = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Qc = /^[0-9a-vA-V]{20}$/, ed = /^[A-Za-z0-9]{27}$/, td = /^[a-zA-Z0-9_-]{21}$/, nd = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, rd = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Fo = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, od = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, ad = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function sd() {
  return new RegExp(ad, "u");
}
const id = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ld = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ud = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, dd = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, _i = /^[A-Za-z0-9_-]*$/, pd = /^\+(?:[0-9]){6,14}[0-9]$/, bi = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", fd = /* @__PURE__ */ new RegExp(`^${bi}$`);
function wi(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function md(e) {
  return new RegExp(`^${wi(e)}$`);
}
function hd(e) {
  const t = wi({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${bi}T(?:${r})$`);
}
const gd = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, vd = /^-?\d+$/, yd = /^-?\d+(?:\.\d+)?/, _d = /^(?:true|false)$/i, bd = /^null$/i, wd = /^[^A-Z]*$/, xd = /^[^a-z]*$/, Xe = /* @__PURE__ */ $("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), xi = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Ii = /* @__PURE__ */ $("$ZodCheckLessThan", (e, t) => {
  Xe.init(e, t);
  const n = xi[typeof t.value];
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
}), ki = /* @__PURE__ */ $("$ZodCheckGreaterThan", (e, t) => {
  Xe.init(e, t);
  const n = xi[typeof t.value];
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
}), Id = /* @__PURE__ */ $("$ZodCheckMultipleOf", (e, t) => {
  Xe.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Tc(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), kd = /* @__PURE__ */ $("$ZodCheckNumberFormat", (e, t) => {
  var s;
  Xe.init(e, t), t.format = t.format || "float64";
  const n = (s = t.format) == null ? void 0 : s.includes("int"), r = n ? "int" : "number", [o, a] = Rc[t.format];
  e._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = t.format, u.minimum = o, u.maximum = a, n && (u.pattern = vd);
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
}), Td = /* @__PURE__ */ $("$ZodCheckMaxLength", (e, t) => {
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
}), Sd = /* @__PURE__ */ $("$ZodCheckMinLength", (e, t) => {
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
}), Ed = /* @__PURE__ */ $("$ZodCheckLengthEquals", (e, t) => {
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
}), ur = /* @__PURE__ */ $("$ZodCheckStringFormat", (e, t) => {
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
}), Cd = /* @__PURE__ */ $("$ZodCheckRegex", (e, t) => {
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
}), Md = /* @__PURE__ */ $("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = wd), ur.init(e, t);
}), Rd = /* @__PURE__ */ $("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = xd), ur.init(e, t);
}), Od = /* @__PURE__ */ $("$ZodCheckIncludes", (e, t) => {
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
}), Nd = /* @__PURE__ */ $("$ZodCheckStartsWith", (e, t) => {
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
}), Ad = /* @__PURE__ */ $("$ZodCheckEndsWith", (e, t) => {
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
}), $d = /* @__PURE__ */ $("$ZodCheckOverwrite", (e, t) => {
  Xe.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class Pd {
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
const jd = {
  major: 4,
  minor: 1,
  patch: 13
}, ye = /* @__PURE__ */ $("$ZodType", (e, t) => {
  var o;
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = jd;
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
      let d = Kt(i), m;
      for (const g of u) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(i))
            continue;
        } else if (d)
          continue;
        const f = i.issues.length, y = g._zod.check(i);
        if (y instanceof Promise && (c == null ? void 0 : c.async) === !1)
          throw new Xt();
        if (m || y instanceof Promise)
          m = (m ?? Promise.resolve()).then(async () => {
            await y, i.issues.length !== f && (d || (d = Kt(i, f)));
          });
        else {
          if (i.issues.length === f)
            continue;
          d || (d = Kt(i, f));
        }
      }
      return m ? m.then(() => i) : i;
    }, s = (i, u, c) => {
      if (Kt(i))
        return i.aborted = !0, i;
      const d = a(u, r, c);
      if (d instanceof Promise) {
        if (c.async === !1)
          throw new Xt();
        return d.then((m) => e._zod.parse(m, c));
      }
      return e._zod.parse(d, c);
    };
    e._zod.run = (i, u) => {
      if (u.skipChecks)
        return e._zod.parse(i, u);
      if (u.direction === "backward") {
        const d = e._zod.parse({ value: i.value, issues: [] }, { ...u, skipChecks: !0 });
        return d instanceof Promise ? d.then((m) => s(m, i, u)) : s(d, i, u);
      }
      const c = e._zod.parse(i, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new Xt();
        return c.then((d) => a(d, r, u));
      }
      return a(c, r, u);
    };
  }
  e["~standard"] = {
    validate: (a) => {
      var s;
      try {
        const i = Uc(e, a);
        return i.success ? { value: i.data } : { issues: (s = i.error) == null ? void 0 : s.issues };
      } catch {
        return Zc(e, a).then((u) => {
          var c;
          return u.success ? { value: u.data } : { issues: (c = u.error) == null ? void 0 : c.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), po = /* @__PURE__ */ $("$ZodString", (e, t) => {
  var n;
  ye.init(e, t), e._zod.pattern = [...((n = e == null ? void 0 : e._zod.bag) == null ? void 0 : n.patterns) ?? []].pop() ?? gd(e._zod.bag), e._zod.parse = (r, o) => {
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
}), ke = /* @__PURE__ */ $("$ZodStringFormat", (e, t) => {
  ur.init(e, t), po.init(e, t);
}), qd = /* @__PURE__ */ $("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = rd), ke.init(e, t);
}), Dd = /* @__PURE__ */ $("$ZodUUID", (e, t) => {
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
  ke.init(e, t);
}), zd = /* @__PURE__ */ $("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = od), ke.init(e, t);
}), Ud = /* @__PURE__ */ $("$ZodURL", (e, t) => {
  ke.init(e, t), e._zod.check = (n) => {
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
}), Zd = /* @__PURE__ */ $("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = sd()), ke.init(e, t);
}), Ld = /* @__PURE__ */ $("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = td), ke.init(e, t);
}), Fd = /* @__PURE__ */ $("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Yc), ke.init(e, t);
}), Vd = /* @__PURE__ */ $("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Kc), ke.init(e, t);
}), Gd = /* @__PURE__ */ $("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Xc), ke.init(e, t);
}), Bd = /* @__PURE__ */ $("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Qc), ke.init(e, t);
}), Jd = /* @__PURE__ */ $("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = ed), ke.init(e, t);
}), Hd = /* @__PURE__ */ $("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = hd(t)), ke.init(e, t);
}), Wd = /* @__PURE__ */ $("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = fd), ke.init(e, t);
}), Yd = /* @__PURE__ */ $("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = md(t)), ke.init(e, t);
}), Kd = /* @__PURE__ */ $("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = nd), ke.init(e, t);
}), Xd = /* @__PURE__ */ $("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = id), ke.init(e, t), e._zod.bag.format = "ipv4";
}), Qd = /* @__PURE__ */ $("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = ld), ke.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), ep = /* @__PURE__ */ $("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = ud), ke.init(e, t);
}), tp = /* @__PURE__ */ $("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = cd), ke.init(e, t), e._zod.check = (n) => {
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
function Ti(e) {
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
const np = /* @__PURE__ */ $("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = dd), ke.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    Ti(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function rp(e) {
  if (!_i.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ti(n);
}
const op = /* @__PURE__ */ $("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = _i), ke.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    rp(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ap = /* @__PURE__ */ $("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = pd), ke.init(e, t);
});
function sp(e, t = null) {
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
const ip = /* @__PURE__ */ $("$ZodJWT", (e, t) => {
  ke.init(e, t), e._zod.check = (n) => {
    sp(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Si = /* @__PURE__ */ $("$ZodNumber", (e, t) => {
  ye.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? yd, e._zod.parse = (n, r) => {
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
}), lp = /* @__PURE__ */ $("$ZodNumberFormat", (e, t) => {
  kd.init(e, t), Si.init(e, t);
}), up = /* @__PURE__ */ $("$ZodBoolean", (e, t) => {
  ye.init(e, t), e._zod.pattern = _d, e._zod.parse = (n, r) => {
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
}), cp = /* @__PURE__ */ $("$ZodNull", (e, t) => {
  ye.init(e, t), e._zod.pattern = bd, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (n, r) => {
    const o = n.value;
    return o === null || n.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), dp = /* @__PURE__ */ $("$ZodAny", (e, t) => {
  ye.init(e, t), e._zod.parse = (n) => n;
}), pp = /* @__PURE__ */ $("$ZodUnknown", (e, t) => {
  ye.init(e, t), e._zod.parse = (n) => n;
}), fp = /* @__PURE__ */ $("$ZodNever", (e, t) => {
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
const mp = /* @__PURE__ */ $("$ZodArray", (e, t) => {
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
function Ei(e) {
  var r, o, a, s;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((s = (a = (o = (r = e.shape) == null ? void 0 : r[i]) == null ? void 0 : o._zod) == null ? void 0 : a.traits) != null && s.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const n = Mc(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Ci(e, t, n, r, o, a) {
  const s = [], i = o.keySet, u = o.catchall._zod, c = u.def.type;
  for (const d in t) {
    if (i.has(d))
      continue;
    if (c === "never") {
      s.push(d);
      continue;
    }
    const m = u.run({ value: t[d], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((g) => Wn(g, n, d, t))) : Wn(m, n, d, t);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: a
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const hp = /* @__PURE__ */ $("$ZodObject", (e, t) => {
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
  const r = sr(() => Ei(t));
  de(e._zod, "propValues", () => {
    const i = t.shape, u = {};
    for (const c in i) {
      const d = i[c]._zod;
      if (d.values) {
        u[c] ?? (u[c] = /* @__PURE__ */ new Set());
        for (const m of d.values)
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
    const d = [], m = s.shape;
    for (const g of s.keys) {
      const y = m[g]._zod.run({ value: c[g], issues: [] }, u);
      y instanceof Promise ? d.push(y.then((_) => Wn(_, i, g, c))) : Wn(y, i, g, c);
    }
    return a ? Ci(d, c, i, u, r.value, e) : d.length ? Promise.all(d).then(() => i) : i;
  };
}), gp = /* @__PURE__ */ $("$ZodObjectJIT", (e, t) => {
  hp.init(e, t);
  const n = e._zod.parse, r = sr(() => Ei(t)), o = (g) => {
    const f = new Pd(["shape", "payload", "ctx"]), y = r.value, _ = (b) => {
      const I = Lo(b);
      return `shape[${I}]._zod.run({ value: input[${I}], issues: [] }, ctx)`;
    };
    f.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let h = 0;
    for (const b of y.keys)
      w[b] = `key_${h++}`;
    f.write("const newResult = {};");
    for (const b of y.keys) {
      const I = w[b], E = Lo(b);
      f.write(`const ${I} = ${_(b)};`), f.write(`
        if (${I}.issues.length) {
          payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        
        if (${I}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${I}.value;
        }
        
      `);
    }
    f.write("payload.value = newResult;"), f.write("return payload;");
    const v = f.compile();
    return (b, I) => v(g, b, I);
  };
  let a;
  const s = In, i = !pi.jitless, c = i && Ec.value, d = t.catchall;
  let m;
  e._zod.parse = (g, f) => {
    m ?? (m = r.value);
    const y = g.value;
    return s(y) ? i && c && (f == null ? void 0 : f.async) === !1 && f.jitless !== !0 ? (a || (a = o(t.shape)), g = a(g, f), d ? Ci([], y, g, f, m, e) : g) : n(g, f) : (g.issues.push({
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
  const o = e.filter((a) => !Kt(a));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((a) => a.issues.map((s) => Ot(s, r, Rt())))
  }), t);
}
const Mi = /* @__PURE__ */ $("$ZodUnion", (e, t) => {
  ye.init(e, t), de(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), de(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), de(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), de(e._zod, "pattern", () => {
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
}), vp = /* @__PURE__ */ $("$ZodDiscriminatedUnion", (e, t) => {
  Mi.init(e, t);
  const n = e._zod.parse;
  de(e._zod, "propValues", () => {
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
}), yp = /* @__PURE__ */ $("$ZodIntersection", (e, t) => {
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
  if (t.issues.length && e.issues.push(...t.issues), n.issues.length && e.issues.push(...n.issues), Kt(e))
    return e;
  const r = Jr(t.value, n.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const _p = /* @__PURE__ */ $("$ZodTuple", (e, t) => {
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
    const s = [], i = [...n].reverse().findIndex((d) => d._zod.optin !== "optional"), u = i === -1 ? 0 : n.length - i;
    if (!t.rest) {
      const d = a.length > n.length, m = a.length < u - 1;
      if (d || m)
        return r.issues.push({
          ...d ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length },
          input: a,
          inst: e,
          origin: "array"
        }), r;
    }
    let c = -1;
    for (const d of n) {
      if (c++, c >= a.length && c >= u)
        continue;
      const m = d._zod.run({
        value: a[c],
        issues: []
      }, o);
      m instanceof Promise ? s.push(m.then((g) => Fn(g, r, c))) : Fn(m, r, c);
    }
    if (t.rest) {
      const d = a.slice(n.length);
      for (const m of d) {
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
const bp = /* @__PURE__ */ $("$ZodRecord", (e, t) => {
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
          const d = t.valueType._zod.run({ value: o[c], issues: [] }, r);
          d instanceof Promise ? a.push(d.then((m) => {
            m.issues.length && n.issues.push(...qt(c, m.issues)), n.value[c] = m.value;
          })) : (d.issues.length && n.issues.push(...qt(c, d.issues)), n.value[c] = d.value);
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
            issues: u.issues.map((d) => Ot(d, r, Rt())),
            input: i,
            path: [i],
            inst: e
          }), n.value[u.value] = u.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: o[i], issues: [] }, r);
        c instanceof Promise ? a.push(c.then((d) => {
          d.issues.length && n.issues.push(...qt(i, d.issues)), n.value[u.value] = d.value;
        })) : (c.issues.length && n.issues.push(...qt(i, c.issues)), n.value[u.value] = c.value);
      }
    }
    return a.length ? Promise.all(a).then(() => n) : n;
  };
}), wp = /* @__PURE__ */ $("$ZodEnum", (e, t) => {
  ye.init(e, t);
  const n = fi(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => Cc.has(typeof o)).map((o) => typeof o == "string" ? nn(o) : o.toString()).join("|")})$`), e._zod.parse = (o, a) => {
    const s = o.value;
    return r.has(s) || o.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), o;
  };
}), xp = /* @__PURE__ */ $("$ZodLiteral", (e, t) => {
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
}), Ip = /* @__PURE__ */ $("$ZodTransform", (e, t) => {
  ye.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new di(e.constructor.name);
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
const kp = /* @__PURE__ */ $("$ZodOptional", (e, t) => {
  ye.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", de(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), de(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${io(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((a) => Jo(a, n.value)) : Jo(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), Tp = /* @__PURE__ */ $("$ZodNullable", (e, t) => {
  ye.init(e, t), de(e._zod, "optin", () => t.innerType._zod.optin), de(e._zod, "optout", () => t.innerType._zod.optout), de(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${io(n.source)}|null)$`) : void 0;
  }), de(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Sp = /* @__PURE__ */ $("$ZodDefault", (e, t) => {
  ye.init(e, t), e._zod.optin = "optional", de(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
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
const Ep = /* @__PURE__ */ $("$ZodPrefault", (e, t) => {
  ye.init(e, t), e._zod.optin = "optional", de(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Cp = /* @__PURE__ */ $("$ZodNonOptional", (e, t) => {
  ye.init(e, t), de(e._zod, "values", () => {
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
const Mp = /* @__PURE__ */ $("$ZodCatch", (e, t) => {
  ye.init(e, t), de(e._zod, "optin", () => t.innerType._zod.optin), de(e._zod, "optout", () => t.innerType._zod.optout), de(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
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
}), Rp = /* @__PURE__ */ $("$ZodPipe", (e, t) => {
  ye.init(e, t), de(e._zod, "values", () => t.in._zod.values), de(e._zod, "optin", () => t.in._zod.optin), de(e._zod, "optout", () => t.out._zod.optout), de(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
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
const Op = /* @__PURE__ */ $("$ZodReadonly", (e, t) => {
  ye.init(e, t), de(e._zod, "propValues", () => t.innerType._zod.propValues), de(e._zod, "values", () => t.innerType._zod.values), de(e._zod, "optin", () => {
    var n, r;
    return (r = (n = t.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optin;
  }), de(e._zod, "optout", () => {
    var n, r;
    return (r = (n = t.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optout;
  }), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(Yo) : Yo(o);
  };
});
function Yo(e) {
  return e.value = Object.freeze(e.value), e;
}
const Np = /* @__PURE__ */ $("$ZodLazy", (e, t) => {
  ye.init(e, t), de(e._zod, "innerType", () => t.getter()), de(e._zod, "pattern", () => {
    var n, r;
    return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.pattern;
  }), de(e._zod, "propValues", () => {
    var n, r;
    return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.propValues;
  }), de(e._zod, "optin", () => {
    var n, r;
    return ((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optin) ?? void 0;
  }), de(e._zod, "optout", () => {
    var n, r;
    return ((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optout) ?? void 0;
  }), e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r);
}), Ap = /* @__PURE__ */ $("$ZodCustom", (e, t) => {
  Xe.init(e, t), ye.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise)
      return o.then((a) => Ko(a, n, r, e));
    Ko(o, n, r, e);
  };
});
function Ko(e, t, n, r) {
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
class Ri {
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
function $p() {
  return new Ri();
}
(Xo = globalThis).__zod_globalRegistry ?? (Xo.__zod_globalRegistry = $p());
const _n = globalThis.__zod_globalRegistry;
function Pp(e, t) {
  return new e({
    type: "string",
    ...V(t)
  });
}
function jp(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Qo(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function qp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Dp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...V(t)
  });
}
function zp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...V(t)
  });
}
function Up(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...V(t)
  });
}
function Zp(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Lp(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Fp(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Vp(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Gp(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Bp(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Jp(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Hp(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Wp(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Yp(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Kp(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Xp(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Qp(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function ef(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function tf(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function nf(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function rf(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...V(t)
  });
}
function of(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...V(t)
  });
}
function af(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...V(t)
  });
}
function sf(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...V(t)
  });
}
function lf(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...V(t)
  });
}
function uf(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...V(t)
  });
}
function cf(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...V(t)
  });
}
function df(e, t) {
  return new e({
    type: "boolean",
    ...V(t)
  });
}
function pf(e, t) {
  return new e({
    type: "null",
    ...V(t)
  });
}
function ff(e) {
  return new e({
    type: "any"
  });
}
function mf(e) {
  return new e({
    type: "unknown"
  });
}
function hf(e, t) {
  return new e({
    type: "never",
    ...V(t)
  });
}
function ea(e, t) {
  return new Ii({
    check: "less_than",
    ...V(t),
    value: e,
    inclusive: !1
  });
}
function Cr(e, t) {
  return new Ii({
    check: "less_than",
    ...V(t),
    value: e,
    inclusive: !0
  });
}
function ta(e, t) {
  return new ki({
    check: "greater_than",
    ...V(t),
    value: e,
    inclusive: !1
  });
}
function Mr(e, t) {
  return new ki({
    check: "greater_than",
    ...V(t),
    value: e,
    inclusive: !0
  });
}
function na(e, t) {
  return new Id({
    check: "multiple_of",
    ...V(t),
    value: e
  });
}
function Oi(e, t) {
  return new Td({
    check: "max_length",
    ...V(t),
    maximum: e
  });
}
function Yn(e, t) {
  return new Sd({
    check: "min_length",
    ...V(t),
    minimum: e
  });
}
function Ni(e, t) {
  return new Ed({
    check: "length_equals",
    ...V(t),
    length: e
  });
}
function gf(e, t) {
  return new Cd({
    check: "string_format",
    format: "regex",
    ...V(t),
    pattern: e
  });
}
function vf(e) {
  return new Md({
    check: "string_format",
    format: "lowercase",
    ...V(e)
  });
}
function yf(e) {
  return new Rd({
    check: "string_format",
    format: "uppercase",
    ...V(e)
  });
}
function _f(e, t) {
  return new Od({
    check: "string_format",
    format: "includes",
    ...V(t),
    includes: e
  });
}
function bf(e, t) {
  return new Nd({
    check: "string_format",
    format: "starts_with",
    ...V(t),
    prefix: e
  });
}
function wf(e, t) {
  return new Ad({
    check: "string_format",
    format: "ends_with",
    ...V(t),
    suffix: e
  });
}
function un(e) {
  return new $d({
    check: "overwrite",
    tx: e
  });
}
function xf(e) {
  return un((t) => t.normalize(e));
}
function If() {
  return un((e) => e.trim());
}
function kf() {
  return un((e) => e.toLowerCase());
}
function Tf() {
  return un((e) => e.toUpperCase());
}
function Sf() {
  return un((e) => Sc(e));
}
function Ef(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...V(n)
  });
}
function Cf(e, t, n) {
  const r = V(n);
  return r.abort ?? (r.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...r
  });
}
function Mf(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...V(n)
  });
}
function Rf(e) {
  const t = Of((n) => (n.addIssue = (r) => {
    if (typeof r == "string")
      n.issues.push(kn(r, n.value, t._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), n.issues.push(kn(o));
    }
  }, e(n.value, n)));
  return t;
}
function Of(e, t) {
  const n = new Xe({
    check: "custom",
    ...V(t)
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
        const w = i.schema;
        switch (o.type) {
          case "string": {
            const h = w;
            h.type = "string";
            const { minimum: v, maximum: b, format: I, patterns: E, contentEncoding: O } = t._zod.bag;
            if (typeof v == "number" && (h.minLength = v), typeof b == "number" && (h.maxLength = b), I && (h.format = a[I] ?? I, h.format === "" && delete h.format), O && (h.contentEncoding = O), E && E.size > 0) {
              const S = [...E];
              S.length === 1 ? h.pattern = S[0].source : S.length > 1 && (i.schema.allOf = [
                ...S.map((M) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: M.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = w, { minimum: v, maximum: b, format: I, multipleOf: E, exclusiveMaximum: O, exclusiveMinimum: S } = t._zod.bag;
            typeof I == "string" && I.includes("int") ? h.type = "integer" : h.type = "number", typeof S == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = S, h.exclusiveMinimum = !0) : h.exclusiveMinimum = S), typeof v == "number" && (h.minimum = v, typeof S == "number" && this.target !== "draft-4" && (S >= v ? delete h.minimum : delete h.exclusiveMinimum)), typeof O == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = O, h.exclusiveMaximum = !0) : h.exclusiveMaximum = O), typeof b == "number" && (h.maximum = b, typeof O == "number" && this.target !== "draft-4" && (O <= b ? delete h.maximum : delete h.exclusiveMaximum)), typeof E == "number" && (h.multipleOf = E);
            break;
          }
          case "boolean": {
            const h = w;
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
            this.target === "openapi-3.0" ? (w.type = "string", w.nullable = !0, w.enum = [null]) : w.type = "null";
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
            w.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = w, { minimum: v, maximum: b } = t._zod.bag;
            typeof v == "number" && (h.minItems = v), typeof b == "number" && (h.maxItems = b), h.type = "array", h.items = this.process(o.element, { ...y, path: [...y.path, "items"] });
            break;
          }
          case "object": {
            const h = w;
            h.type = "object", h.properties = {};
            const v = o.shape;
            for (const E in v)
              h.properties[E] = this.process(v[E], {
                ...y,
                path: [...y.path, "properties", E]
              });
            const b = new Set(Object.keys(v)), I = new Set([...b].filter((E) => {
              const O = o.shape[E]._zod;
              return this.io === "input" ? O.optin === void 0 : O.optout === void 0;
            }));
            I.size > 0 && (h.required = Array.from(I)), ((f = o.catchall) == null ? void 0 : f._zod.def.type) === "never" ? h.additionalProperties = !1 : o.catchall ? o.catchall && (h.additionalProperties = this.process(o.catchall, {
              ...y,
              path: [...y.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = w, v = o.discriminator !== void 0, b = o.options.map((I, E) => this.process(I, {
              ...y,
              path: [...y.path, v ? "oneOf" : "anyOf", E]
            }));
            v ? h.oneOf = b : h.anyOf = b;
            break;
          }
          case "intersection": {
            const h = w, v = this.process(o.left, {
              ...y,
              path: [...y.path, "allOf", 0]
            }), b = this.process(o.right, {
              ...y,
              path: [...y.path, "allOf", 1]
            }), I = (O) => "allOf" in O && Object.keys(O).length === 1, E = [
              ...I(v) ? v.allOf : [v],
              ...I(b) ? b.allOf : [b]
            ];
            h.allOf = E;
            break;
          }
          case "tuple": {
            const h = w;
            h.type = "array";
            const v = this.target === "draft-2020-12" ? "prefixItems" : "items", b = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", I = o.items.map((M, R) => this.process(M, {
              ...y,
              path: [...y.path, v, R]
            })), E = o.rest ? this.process(o.rest, {
              ...y,
              path: [...y.path, b, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = I, E && (h.items = E)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: I
            }, E && h.items.anyOf.push(E), h.minItems = I.length, E || (h.maxItems = I.length)) : (h.items = I, E && (h.additionalItems = E));
            const { minimum: O, maximum: S } = t._zod.bag;
            typeof O == "number" && (h.minItems = O), typeof S == "number" && (h.maxItems = S);
            break;
          }
          case "record": {
            const h = w;
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
            const h = w, v = fi(o.entries);
            v.every((b) => typeof b == "number") && (h.type = "number"), v.every((b) => typeof b == "string") && (h.type = "string"), h.enum = v;
            break;
          }
          case "literal": {
            const h = w, v = [];
            for (const b of o.values)
              if (b === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof b == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                v.push(Number(b));
              } else
                v.push(b);
            if (v.length !== 0) if (v.length === 1) {
              const b = v[0];
              h.type = b === null ? "null" : typeof b, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [b] : h.const = b;
            } else
              v.every((b) => typeof b == "number") && (h.type = "number"), v.every((b) => typeof b == "string") && (h.type = "string"), v.every((b) => typeof b == "boolean") && (h.type = "string"), v.every((b) => b === null) && (h.type = "null"), h.enum = v;
            break;
          }
          case "file": {
            const h = w, v = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: b, maximum: I, mime: E } = t._zod.bag;
            b !== void 0 && (v.minLength = b), I !== void 0 && (v.maxLength = I), E ? E.length === 1 ? (v.contentMediaType = E[0], Object.assign(h, v)) : h.anyOf = E.map((O) => ({ ...v, contentMediaType: O })) : Object.assign(h, v);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(o.innerType, y);
            this.target === "openapi-3.0" ? (i.ref = o.innerType, w.nullable = !0) : w.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, y), i.ref = o.innerType;
            break;
          }
          case "success": {
            const h = w;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, y), i.ref = o.innerType, w.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, y), i.ref = o.innerType, this.io === "input" && (w._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
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
            w.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = w, v = t._zod.pattern;
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
            this.process(o.innerType, y), i.ref = o.innerType, w.readOnly = !0;
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
    var d, m, g, f, y, _;
    const r = {
      cycles: (n == null ? void 0 : n.cycles) ?? "ref",
      reused: (n == null ? void 0 : n.reused) ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: (n == null ? void 0 : n.external) ?? void 0
    }, o = this.seen.get(t);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const a = (w) => {
      var E;
      const h = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (r.external) {
        const O = (E = r.external.registry.get(w[0])) == null ? void 0 : E.id, S = r.external.uri ?? ((R) => R);
        if (O)
          return { ref: S(O) };
        const M = w[1].defId ?? w[1].schema.id ?? `schema${this.counter++}`;
        return w[1].defId = M, { defId: M, ref: `${S("__shared")}#/${h}/${M}` };
      }
      if (w[1] === o)
        return { ref: "#" };
      const b = `#/${h}/`, I = w[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: I, ref: b + I };
    }, s = (w) => {
      if (w[1].schema.$ref)
        return;
      const h = w[1], { ref: v, defId: b } = a(w);
      h.def = { ...h.schema }, b && (h.defId = b);
      const I = h.schema;
      for (const E in I)
        delete I[E];
      I.$ref = v;
    };
    if (r.cycles === "throw")
      for (const w of this.seen.entries()) {
        const h = w[1];
        if (h.cycle)
          throw new Error(`Cycle detected: #/${(d = h.cycle) == null ? void 0 : d.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const w of this.seen.entries()) {
      const h = w[1];
      if (t === w[0]) {
        s(w);
        continue;
      }
      if (r.external) {
        const b = (m = r.external.registry.get(w[0])) == null ? void 0 : m.id;
        if (t !== w[0] && b) {
          s(w);
          continue;
        }
      }
      if ((g = this.metadataRegistry.get(w[0])) == null ? void 0 : g.id) {
        s(w);
        continue;
      }
      if (h.cycle) {
        s(w);
        continue;
      }
      if (h.count > 1 && r.reused === "ref") {
        s(w);
        continue;
      }
    }
    const i = (w, h) => {
      const v = this.seen.get(w), b = v.def ?? v.schema, I = { ...b };
      if (v.ref === null)
        return;
      const E = v.ref;
      if (v.ref = null, E) {
        i(E, h);
        const O = this.seen.get(E).schema;
        O.$ref && (h.target === "draft-7" || h.target === "draft-4" || h.target === "openapi-3.0") ? (b.allOf = b.allOf ?? [], b.allOf.push(O)) : (Object.assign(b, O), Object.assign(b, I));
      }
      v.isParent || this.override({
        zodSchema: w,
        jsonSchema: b,
        path: v.path ?? []
      });
    };
    for (const w of [...this.seen.entries()].reverse())
      i(w[0], { target: this.target });
    const u = {};
    if (this.target === "draft-2020-12" ? u.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? u.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? u.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), (f = r.external) != null && f.uri) {
      const w = (y = r.external.registry.get(t)) == null ? void 0 : y.id;
      if (!w)
        throw new Error("Schema is missing an `id` property");
      u.$id = r.external.uri(w);
    }
    Object.assign(u, o.def);
    const c = ((_ = r.external) == null ? void 0 : _.defs) ?? {};
    for (const w of this.seen.entries()) {
      const h = w[1];
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
function Nf(e, t) {
  if (e instanceof Ri) {
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
const Af = /* @__PURE__ */ $("ZodISODateTime", (e, t) => {
  Hd.init(e, t), Ee.init(e, t);
});
function $f(e) {
  return rf(Af, e);
}
const Pf = /* @__PURE__ */ $("ZodISODate", (e, t) => {
  Wd.init(e, t), Ee.init(e, t);
});
function jf(e) {
  return of(Pf, e);
}
const qf = /* @__PURE__ */ $("ZodISOTime", (e, t) => {
  Yd.init(e, t), Ee.init(e, t);
});
function Df(e) {
  return af(qf, e);
}
const zf = /* @__PURE__ */ $("ZodISODuration", (e, t) => {
  Kd.init(e, t), Ee.init(e, t);
});
function Uf(e) {
  return sf(zf, e);
}
const Zf = (e, t) => {
  vi.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => zc(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Dc(e, n)
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
}, it = $("ZodError", Zf, {
  Parent: Error
}), Lf = /* @__PURE__ */ uo(it), Ff = /* @__PURE__ */ co(it), Vf = /* @__PURE__ */ ir(it), Ai = /* @__PURE__ */ lr(it), Gf = /* @__PURE__ */ Lc(it), Bf = /* @__PURE__ */ Fc(it), Jf = /* @__PURE__ */ Vc(it), Hf = /* @__PURE__ */ Gc(it), Wf = /* @__PURE__ */ Bc(it), Yf = /* @__PURE__ */ Jc(it), Kf = /* @__PURE__ */ Hc(it), Xf = /* @__PURE__ */ Wc(it), we = /* @__PURE__ */ $("ZodType", (e, t) => (ye.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(Vt(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (n, r) => $t(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => Lf(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => Vf(e, n, r), e.parseAsync = async (n, r) => Ff(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => Ai(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => Gf(e, n, r), e.decode = (n, r) => Bf(e, n, r), e.encodeAsync = async (n, r) => Jf(e, n, r), e.decodeAsync = async (n, r) => Hf(e, n, r), e.safeEncode = (n, r) => Wf(e, n, r), e.safeDecode = (n, r) => Yf(e, n, r), e.safeEncodeAsync = async (n, r) => Kf(e, n, r), e.safeDecodeAsync = async (n, r) => Xf(e, n, r), e.refine = (n, r) => e.check(Gm(n, r)), e.superRefine = (n) => e.check(Bm(n)), e.overwrite = (n) => e.check(un(n)), e.optional = () => sa(e), e.nullable = () => ia(e), e.nullish = () => sa(ia(e)), e.nonoptional = (n) => Dm(e, n), e.array = () => P(e), e.or = (n) => ne([e, n]), e.and = (n) => Em(e, n), e.transform = (n) => la(e, Nm(n)), e.default = (n) => Pm(e, n), e.prefault = (n) => qm(e, n), e.catch = (n) => Um(e, n), e.pipe = (n) => la(e, n), e.readonly = () => Fm(e), e.describe = (n) => {
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
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), $i = /* @__PURE__ */ $("_ZodString", (e, t) => {
  po.init(e, t), we.init(e, t);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(gf(...r)), e.includes = (...r) => e.check(_f(...r)), e.startsWith = (...r) => e.check(bf(...r)), e.endsWith = (...r) => e.check(wf(...r)), e.min = (...r) => e.check(Yn(...r)), e.max = (...r) => e.check(Oi(...r)), e.length = (...r) => e.check(Ni(...r)), e.nonempty = (...r) => e.check(Yn(1, ...r)), e.lowercase = (r) => e.check(vf(r)), e.uppercase = (r) => e.check(yf(r)), e.trim = () => e.check(If()), e.normalize = (...r) => e.check(xf(...r)), e.toLowerCase = () => e.check(kf()), e.toUpperCase = () => e.check(Tf()), e.slugify = () => e.check(Sf());
}), Qf = /* @__PURE__ */ $("ZodString", (e, t) => {
  po.init(e, t), $i.init(e, t), e.email = (n) => e.check(jp(em, n)), e.url = (n) => e.check(Zp(tm, n)), e.jwt = (n) => e.check(nf(gm, n)), e.emoji = (n) => e.check(Lp(nm, n)), e.guid = (n) => e.check(Qo(oa, n)), e.uuid = (n) => e.check(qp(Gn, n)), e.uuidv4 = (n) => e.check(Dp(Gn, n)), e.uuidv6 = (n) => e.check(zp(Gn, n)), e.uuidv7 = (n) => e.check(Up(Gn, n)), e.nanoid = (n) => e.check(Fp(rm, n)), e.guid = (n) => e.check(Qo(oa, n)), e.cuid = (n) => e.check(Vp(om, n)), e.cuid2 = (n) => e.check(Gp(am, n)), e.ulid = (n) => e.check(Bp(sm, n)), e.base64 = (n) => e.check(Qp(fm, n)), e.base64url = (n) => e.check(ef(mm, n)), e.xid = (n) => e.check(Jp(im, n)), e.ksuid = (n) => e.check(Hp(lm, n)), e.ipv4 = (n) => e.check(Wp(um, n)), e.ipv6 = (n) => e.check(Yp(cm, n)), e.cidrv4 = (n) => e.check(Kp(dm, n)), e.cidrv6 = (n) => e.check(Xp(pm, n)), e.e164 = (n) => e.check(tf(hm, n)), e.datetime = (n) => e.check($f(n)), e.date = (n) => e.check(jf(n)), e.time = (n) => e.check(Df(n)), e.duration = (n) => e.check(Uf(n));
});
function l(e) {
  return Pp(Qf, e);
}
const Ee = /* @__PURE__ */ $("ZodStringFormat", (e, t) => {
  ke.init(e, t), $i.init(e, t);
}), em = /* @__PURE__ */ $("ZodEmail", (e, t) => {
  zd.init(e, t), Ee.init(e, t);
}), oa = /* @__PURE__ */ $("ZodGUID", (e, t) => {
  qd.init(e, t), Ee.init(e, t);
}), Gn = /* @__PURE__ */ $("ZodUUID", (e, t) => {
  Dd.init(e, t), Ee.init(e, t);
}), tm = /* @__PURE__ */ $("ZodURL", (e, t) => {
  Ud.init(e, t), Ee.init(e, t);
}), nm = /* @__PURE__ */ $("ZodEmoji", (e, t) => {
  Zd.init(e, t), Ee.init(e, t);
}), rm = /* @__PURE__ */ $("ZodNanoID", (e, t) => {
  Ld.init(e, t), Ee.init(e, t);
}), om = /* @__PURE__ */ $("ZodCUID", (e, t) => {
  Fd.init(e, t), Ee.init(e, t);
}), am = /* @__PURE__ */ $("ZodCUID2", (e, t) => {
  Vd.init(e, t), Ee.init(e, t);
}), sm = /* @__PURE__ */ $("ZodULID", (e, t) => {
  Gd.init(e, t), Ee.init(e, t);
}), im = /* @__PURE__ */ $("ZodXID", (e, t) => {
  Bd.init(e, t), Ee.init(e, t);
}), lm = /* @__PURE__ */ $("ZodKSUID", (e, t) => {
  Jd.init(e, t), Ee.init(e, t);
}), um = /* @__PURE__ */ $("ZodIPv4", (e, t) => {
  Xd.init(e, t), Ee.init(e, t);
}), cm = /* @__PURE__ */ $("ZodIPv6", (e, t) => {
  Qd.init(e, t), Ee.init(e, t);
}), dm = /* @__PURE__ */ $("ZodCIDRv4", (e, t) => {
  ep.init(e, t), Ee.init(e, t);
}), pm = /* @__PURE__ */ $("ZodCIDRv6", (e, t) => {
  tp.init(e, t), Ee.init(e, t);
}), fm = /* @__PURE__ */ $("ZodBase64", (e, t) => {
  np.init(e, t), Ee.init(e, t);
}), mm = /* @__PURE__ */ $("ZodBase64URL", (e, t) => {
  op.init(e, t), Ee.init(e, t);
}), hm = /* @__PURE__ */ $("ZodE164", (e, t) => {
  ap.init(e, t), Ee.init(e, t);
}), gm = /* @__PURE__ */ $("ZodJWT", (e, t) => {
  ip.init(e, t), Ee.init(e, t);
}), fo = /* @__PURE__ */ $("ZodNumber", (e, t) => {
  Si.init(e, t), we.init(e, t), e.gt = (r, o) => e.check(ta(r, o)), e.gte = (r, o) => e.check(Mr(r, o)), e.min = (r, o) => e.check(Mr(r, o)), e.lt = (r, o) => e.check(ea(r, o)), e.lte = (r, o) => e.check(Cr(r, o)), e.max = (r, o) => e.check(Cr(r, o)), e.int = (r) => e.check(aa(r)), e.safe = (r) => e.check(aa(r)), e.positive = (r) => e.check(ta(0, r)), e.nonnegative = (r) => e.check(Mr(0, r)), e.negative = (r) => e.check(ea(0, r)), e.nonpositive = (r) => e.check(Cr(0, r)), e.multipleOf = (r, o) => e.check(na(r, o)), e.step = (r, o) => e.check(na(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function k(e) {
  return lf(fo, e);
}
const vm = /* @__PURE__ */ $("ZodNumberFormat", (e, t) => {
  lp.init(e, t), fo.init(e, t);
});
function aa(e) {
  return cf(vm, e);
}
const ym = /* @__PURE__ */ $("ZodBoolean", (e, t) => {
  up.init(e, t), we.init(e, t);
});
function B(e) {
  return df(ym, e);
}
const _m = /* @__PURE__ */ $("ZodNull", (e, t) => {
  cp.init(e, t), we.init(e, t);
});
function bm(e) {
  return pf(_m, e);
}
const wm = /* @__PURE__ */ $("ZodAny", (e, t) => {
  dp.init(e, t), we.init(e, t);
});
function pt() {
  return ff(wm);
}
const xm = /* @__PURE__ */ $("ZodUnknown", (e, t) => {
  pp.init(e, t), we.init(e, t);
});
function ie() {
  return mf(xm);
}
const Im = /* @__PURE__ */ $("ZodNever", (e, t) => {
  fp.init(e, t), we.init(e, t);
});
function Ie(e) {
  return hf(Im, e);
}
const km = /* @__PURE__ */ $("ZodArray", (e, t) => {
  mp.init(e, t), we.init(e, t), e.element = t.element, e.min = (n, r) => e.check(Yn(n, r)), e.nonempty = (n) => e.check(Yn(1, n)), e.max = (n, r) => e.check(Oi(n, r)), e.length = (n, r) => e.check(Ni(n, r)), e.unwrap = () => e.element;
});
function P(e, t) {
  return Ef(km, e, t);
}
const mo = /* @__PURE__ */ $("ZodObject", (e, t) => {
  gp.init(e, t), we.init(e, t), de(e, "shape", () => t.shape), e.keyof = () => X(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ie() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ie() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Ie() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Ac(e, n), e.safeExtend = (n) => $c(e, n), e.merge = (n) => Pc(e, n), e.pick = (n) => Oc(e, n), e.omit = (n) => Nc(e, n), e.partial = (...n) => jc(ji, e, n[0]), e.required = (...n) => qc(qi, e, n[0]);
});
function p(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...V(t)
  };
  return new mo(n);
}
function Te(e, t) {
  return new mo({
    type: "object",
    shape: e,
    catchall: Ie(),
    ...V(t)
  });
}
function Hr(e, t) {
  return new mo({
    type: "object",
    shape: e,
    catchall: ie(),
    ...V(t)
  });
}
const Pi = /* @__PURE__ */ $("ZodUnion", (e, t) => {
  Mi.init(e, t), we.init(e, t), e.options = t.options;
});
function ne(e, t) {
  return new Pi({
    type: "union",
    options: e,
    ...V(t)
  });
}
const Tm = /* @__PURE__ */ $("ZodDiscriminatedUnion", (e, t) => {
  Pi.init(e, t), vp.init(e, t);
});
function ce(e, t, n) {
  return new Tm({
    type: "union",
    options: t,
    discriminator: e,
    ...V(n)
  });
}
const Sm = /* @__PURE__ */ $("ZodIntersection", (e, t) => {
  yp.init(e, t), we.init(e, t);
});
function Em(e, t) {
  return new Sm({
    type: "intersection",
    left: e,
    right: t
  });
}
const Cm = /* @__PURE__ */ $("ZodTuple", (e, t) => {
  _p.init(e, t), we.init(e, t), e.rest = (n) => e.clone({
    ...e._zod.def,
    rest: n
  });
});
function Wr(e, t, n) {
  const r = t instanceof ye, o = r ? n : t, a = r ? t : null;
  return new Cm({
    type: "tuple",
    items: e,
    rest: a,
    ...V(o)
  });
}
const Mm = /* @__PURE__ */ $("ZodRecord", (e, t) => {
  bp.init(e, t), we.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function $e(e, t, n) {
  return new Mm({
    type: "record",
    keyType: e,
    valueType: t,
    ...V(n)
  });
}
const Yr = /* @__PURE__ */ $("ZodEnum", (e, t) => {
  wp.init(e, t), we.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const a = {};
    for (const s of r)
      if (n.has(s))
        a[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Yr({
      ...t,
      checks: [],
      ...V(o),
      entries: a
    });
  }, e.exclude = (r, o) => {
    const a = { ...t.entries };
    for (const s of r)
      if (n.has(s))
        delete a[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Yr({
      ...t,
      checks: [],
      ...V(o),
      entries: a
    });
  };
});
function X(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new Yr({
    type: "enum",
    entries: n,
    ...V(t)
  });
}
const Rm = /* @__PURE__ */ $("ZodLiteral", (e, t) => {
  xp.init(e, t), we.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function x(e, t) {
  return new Rm({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...V(t)
  });
}
const Om = /* @__PURE__ */ $("ZodTransform", (e, t) => {
  Ip.init(e, t), we.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new di(e.constructor.name);
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
function Nm(e) {
  return new Om({
    type: "transform",
    transform: e
  });
}
const ji = /* @__PURE__ */ $("ZodOptional", (e, t) => {
  kp.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function sa(e) {
  return new ji({
    type: "optional",
    innerType: e
  });
}
const Am = /* @__PURE__ */ $("ZodNullable", (e, t) => {
  Tp.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ia(e) {
  return new Am({
    type: "nullable",
    innerType: e
  });
}
const $m = /* @__PURE__ */ $("ZodDefault", (e, t) => {
  Sp.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Pm(e, t) {
  return new $m({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : hi(t);
    }
  });
}
const jm = /* @__PURE__ */ $("ZodPrefault", (e, t) => {
  Ep.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function qm(e, t) {
  return new jm({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : hi(t);
    }
  });
}
const qi = /* @__PURE__ */ $("ZodNonOptional", (e, t) => {
  Cp.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Dm(e, t) {
  return new qi({
    type: "nonoptional",
    innerType: e,
    ...V(t)
  });
}
const zm = /* @__PURE__ */ $("ZodCatch", (e, t) => {
  Mp.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Um(e, t) {
  return new zm({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Zm = /* @__PURE__ */ $("ZodPipe", (e, t) => {
  Rp.init(e, t), we.init(e, t), e.in = t.in, e.out = t.out;
});
function la(e, t) {
  return new Zm({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Lm = /* @__PURE__ */ $("ZodReadonly", (e, t) => {
  Op.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Fm(e) {
  return new Lm({
    type: "readonly",
    innerType: e
  });
}
const Vm = /* @__PURE__ */ $("ZodLazy", (e, t) => {
  Np.init(e, t), we.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function Di(e) {
  return new Vm({
    type: "lazy",
    getter: e
  });
}
const ho = /* @__PURE__ */ $("ZodCustom", (e, t) => {
  Ap.init(e, t), we.init(e, t);
});
function zi(e, t) {
  return Cf(ho, e ?? (() => !0), t);
}
function Gm(e, t = {}) {
  return Mf(ho, e, t);
}
function Bm(e) {
  return Rf(e);
}
function Kn(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const n = new ho({
    type: "custom",
    check: "custom",
    fn: (r) => r instanceof e,
    abort: !0,
    ...V(t)
  });
  return n._zod.bag.Class = e, n;
}
function Jm(e) {
  return uf(fo, e);
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
var te;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(te || (te = {}));
function Re(...e) {
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
var Hm = ["fetch failed", "failed to fetch"];
function Ui({
  error: e,
  url: t,
  requestBodyValues: n
}) {
  if (zt(e))
    return e;
  if (e instanceof TypeError && Hm.includes(e.message.toLowerCase())) {
    const r = e.cause;
    if (r != null)
      return new De({
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
var Zi = "3.0.17", Wm = () => globalThis.fetch, pa = async ({
  url: e,
  headers: t = {},
  successfulResponseHandler: n,
  failedResponseHandler: r,
  abortSignal: o,
  fetch: a = Wm()
}) => {
  try {
    const s = await a(e, {
      method: "GET",
      headers: ze(
        t,
        `ai-sdk/provider-utils/${Zi}`,
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
        throw zt(c) || De.isInstance(c) ? c : new De({
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
      throw u instanceof Error && (zt(u) || De.isInstance(u)) ? u : new De({
        message: "Failed to process successful response",
        cause: u,
        statusCode: s.status,
        url: e,
        responseHeaders: i,
        requestBodyValues: {}
      });
    }
  } catch (s) {
    throw Ui({ error: s, url: e, requestBodyValues: {} });
  }
}, Ym = "JSON schema:", Km = "You MUST answer with a JSON object that matches the JSON schema above.", Xm = "You MUST answer with JSON.";
function Qm({
  prompt: e,
  schema: t,
  schemaPrefix: n = t != null ? Ym : void 0,
  schemaSuffix: r = t != null ? Km : Xm
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
function eh({
  messages: e,
  schema: t,
  schemaPrefix: n,
  schemaSuffix: r
}) {
  var o, a;
  const s = ((o = e[0]) == null ? void 0 : o.role) === "system" ? { ...e[0] } : { role: "system", content: "" };
  return s.content = Qm({
    prompt: s.content,
    schema: t,
    schemaPrefix: n,
    schemaSuffix: r
  }), [
    s,
    ...((a = e[0]) == null ? void 0 : a.role) === "system" ? e.slice(1) : e
  ];
}
function th({
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
function nh(e) {
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
var rh = /"__proto__"\s*:/, oh = /"constructor"\s*:/;
function fa(e) {
  const t = JSON.parse(e);
  return t === null || typeof t != "object" || rh.test(e) === !1 && oh.test(e) === !1 ? t : ah(t);
}
function ah(e) {
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
function sh(e) {
  return { [Qn]: !0, validate: e };
}
function ih(e) {
  return typeof e == "object" && e !== null && Qn in e && e[Qn] === !0 && "validate" in e;
}
function Ce(e) {
  let t;
  return () => (t == null && (t = e()), t);
}
function lh(e) {
  return ih(e) ? e : typeof e == "function" ? e() : uh(e);
}
function uh(e) {
  return sh(async (t) => {
    const n = await e["~standard"].validate(t);
    return n.issues == null ? { success: !0, value: n.value } : {
      success: !1,
      error: new Ke({
        value: t,
        cause: n.issues
      })
    };
  });
}
async function Me({
  value: e,
  schema: t
}) {
  const n = await st({ value: e, schema: t });
  if (!n.success)
    throw Ke.wrap({ value: e, cause: n.error });
  return n.value;
}
async function st({
  value: e,
  schema: t
}) {
  const n = lh(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e, rawValue: e };
    const r = await n.validate(e);
    return r.success ? { success: !0, value: r.value, rawValue: e } : {
      success: !1,
      error: Ke.wrap({ value: e, cause: r.error }),
      rawValue: e
    };
  } catch (r) {
    return {
      success: !1,
      error: Ke.wrap({ value: e, cause: r }),
      rawValue: e
    };
  }
}
async function ch({
  text: e,
  schema: t
}) {
  try {
    const n = vo(e);
    return t == null ? n : Me({ value: n, schema: t });
  } catch (n) {
    throw xn.isInstance(n) || Ke.isInstance(n) ? n : new xn({ text: e, cause: n });
  }
}
async function Nt({
  text: e,
  schema: t
}) {
  try {
    const n = vo(e);
    return t == null ? { success: !0, value: n, rawValue: n } : await st({ value: n, schema: t });
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
  return e.pipeThrough(new TextDecoderStream()).pipeThrough(new kc()).pipeThrough(
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
  const r = await st({
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
var dh = () => globalThis.fetch, Se = async ({
  url: e,
  headers: t,
  body: n,
  failedResponseHandler: r,
  successfulResponseHandler: o,
  abortSignal: a,
  fetch: s
}) => Li({
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
}), ph = async ({
  url: e,
  headers: t,
  formData: n,
  failedResponseHandler: r,
  successfulResponseHandler: o,
  abortSignal: a,
  fetch: s
}) => Li({
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
}), Li = async ({
  url: e,
  headers: t = {},
  body: n,
  successfulResponseHandler: r,
  failedResponseHandler: o,
  abortSignal: a,
  fetch: s = dh()
}) => {
  try {
    const i = await s(e, {
      method: "POST",
      headers: ze(
        t,
        `ai-sdk/provider-utils/${Zi}`,
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
      } catch (d) {
        throw zt(d) || De.isInstance(d) ? d : new De({
          message: "Failed to process error response",
          cause: d,
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
      throw c instanceof Error && (zt(c) || De.isInstance(c)) ? c : new De({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: n.values
      });
    }
  } catch (i) {
    throw Ui({ error: i, url: e, requestBodyValues: n.values });
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
async function Ae(e) {
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
      value: new De({
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
    const u = await ch({
      text: s,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new De({
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
      value: new De({
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
    throw new uc({});
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
    throw new De({
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
}, fh = () => async ({ response: e, url: t, requestBodyValues: n }) => {
  const r = cn(e);
  if (!e.body)
    throw new De({
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
    throw new De({
      message: "Failed to read response as array buffer",
      url: t,
      requestBodyValues: n,
      statusCode: e.status,
      responseHeaders: r,
      responseBody: void 0,
      cause: o
    });
  }
}, mh = (e, t) => {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++)
    ;
  return [(e.length - n).toString(), ...t.slice(n)].join("/");
}, hh = Symbol(
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
}, gh = (e) => typeof e == "string" ? {
  ...ha,
  name: e
} : {
  ...ha,
  ...e
};
function rt() {
  return {};
}
function vh(e, t) {
  var n, r, o;
  const a = {
    type: "array"
  };
  return (n = e.type) != null && n._def && ((o = (r = e.type) == null ? void 0 : r._def) == null ? void 0 : o.typeName) !== te.ZodAny && (a.items = ge(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && (a.minItems = e.minLength.value), e.maxLength && (a.maxItems = e.maxLength.value), e.exactLength && (a.minItems = e.exactLength.value, a.maxItems = e.exactLength.value), a;
}
function yh(e) {
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
function _h() {
  return { type: "boolean" };
}
function Fi(e, t) {
  return ge(e.type._def, t);
}
var bh = (e, t) => ge(e.innerType._def, t);
function Vi(e, t, n) {
  const r = n ?? t.dateStrategy;
  if (Array.isArray(r))
    return {
      anyOf: r.map((o, a) => Vi(e, t, o))
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
      return wh(e);
  }
}
var wh = (e) => {
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
function xh(e, t) {
  return {
    ...ge(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Ih(e, t) {
  return t.effectStrategy === "input" ? ge(e.schema._def, t) : rt();
}
function kh(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
var Th = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Sh(e, t) {
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
    if (Th(o))
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
function Eh(e) {
  const t = typeof e.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : {
    type: t === "bigint" ? "integer" : t,
    const: e.value
  };
}
var Rr = void 0, ut = {
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
function Gi(e, t) {
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
              ct(n, "email", r.message, t);
              break;
            case "format:idn-email":
              ct(n, "idn-email", r.message, t);
              break;
            case "pattern:zod":
              Be(n, ut.email, r.message, t);
              break;
          }
          break;
        case "url":
          ct(n, "uri", r.message, t);
          break;
        case "uuid":
          ct(n, "uuid", r.message, t);
          break;
        case "regex":
          Be(n, r.regex, r.message, t);
          break;
        case "cuid":
          Be(n, ut.cuid, r.message, t);
          break;
        case "cuid2":
          Be(n, ut.cuid2, r.message, t);
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
          ct(n, "date-time", r.message, t);
          break;
        case "date":
          ct(n, "date", r.message, t);
          break;
        case "time":
          ct(n, "time", r.message, t);
          break;
        case "duration":
          ct(n, "duration", r.message, t);
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
          r.version !== "v6" && ct(n, "ipv4", r.message, t), r.version !== "v4" && ct(n, "ipv6", r.message, t);
          break;
        }
        case "base64url":
          Be(n, ut.base64url, r.message, t);
          break;
        case "jwt":
          Be(n, ut.jwt, r.message, t);
          break;
        case "cidr": {
          r.version !== "v6" && Be(n, ut.ipv4Cidr, r.message, t), r.version !== "v4" && Be(n, ut.ipv6Cidr, r.message, t);
          break;
        }
        case "emoji":
          Be(n, ut.emoji(), r.message, t);
          break;
        case "ulid": {
          Be(n, ut.ulid, r.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              ct(n, "binary", r.message, t);
              break;
            }
            case "contentEncoding:base64": {
              n.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              Be(n, ut.base64, r.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Be(n, ut.nanoid, r.message, t);
      }
  return n;
}
function Or(e, t) {
  return t.patternStrategy === "escape" ? Mh(e) : e;
}
var Ch = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function Mh(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    Ch.has(e[n]) || (t += "\\"), t += e[n];
  return t;
}
function ct(e, t, n, r) {
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
function Bi(e, t) {
  var n, r, o, a, s, i;
  const u = {
    type: "object",
    additionalProperties: (n = ge(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    })) != null ? n : t.allowedAdditionalProperties
  };
  if (((r = e.keyType) == null ? void 0 : r._def.typeName) === te.ZodString && ((o = e.keyType._def.checks) != null && o.length)) {
    const { type: c, ...d } = Gi(e.keyType._def, t);
    return {
      ...u,
      propertyNames: d
    };
  } else {
    if (((a = e.keyType) == null ? void 0 : a._def.typeName) === te.ZodEnum)
      return {
        ...u,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === te.ZodBranded && e.keyType._def.type._def.typeName === te.ZodString && ((i = e.keyType._def.type._def.checks) != null && i.length)) {
      const { type: c, ...d } = Fi(
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
function Rh(e, t) {
  if (t.mapStrategy === "record")
    return Bi(e, t);
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
function Oh(e) {
  const t = e.values, r = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), o = Array.from(
    new Set(r.map((a) => typeof a))
  );
  return {
    type: o.length === 1 ? o[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function Nh() {
  return { not: rt() };
}
function Ah() {
  return {
    type: "null"
  };
}
var Kr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function $h(e, t) {
  const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (n.every(
    (r) => r._def.typeName in Kr && (!r._def.checks || !r._def.checks.length)
  )) {
    const r = n.reduce((o, a) => {
      const s = Kr[a._def.typeName];
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
  return Ph(e, t);
}
var Ph = (e, t) => {
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
function jh(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    e.innerType._def.typeName
  ) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return {
      type: [
        Kr[e.innerType._def.typeName],
        "null"
      ]
    };
  const n = ge(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return n && { anyOf: [n, { type: "null" }] };
}
function qh(e) {
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
function Dh(e, t) {
  const n = {
    type: "object",
    properties: {}
  }, r = [], o = e.shape();
  for (const s in o) {
    let i = o[s];
    if (i === void 0 || i._def === void 0)
      continue;
    const u = Uh(i), c = ge(i._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", s],
      propertyPath: [...t.currentPath, "properties", s]
    });
    c !== void 0 && (n.properties[s] = c, u || r.push(s));
  }
  r.length && (n.required = r);
  const a = zh(e, t);
  return a !== void 0 && (n.additionalProperties = a), n;
}
function zh(e, t) {
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
function Uh(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
var Zh = (e, t) => {
  var n;
  if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString()))
    return ge(e.innerType._def, t);
  const r = ge(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return r ? { anyOf: [{ not: rt() }, r] } : rt();
}, Lh = (e, t) => {
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
function Fh(e, t) {
  return ge(e.type._def, t);
}
function Vh(e, t) {
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
function Gh(e, t) {
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
function Bh() {
  return {
    not: rt()
  };
}
function Jh() {
  return rt();
}
var Hh = (e, t) => ge(e.innerType._def, t), Wh = (e, t, n) => {
  switch (t) {
    case te.ZodString:
      return Gi(e, n);
    case te.ZodNumber:
      return qh(e);
    case te.ZodObject:
      return Dh(e, n);
    case te.ZodBigInt:
      return yh(e);
    case te.ZodBoolean:
      return _h();
    case te.ZodDate:
      return Vi(e, n);
    case te.ZodUndefined:
      return Bh();
    case te.ZodNull:
      return Ah();
    case te.ZodArray:
      return vh(e, n);
    case te.ZodUnion:
    case te.ZodDiscriminatedUnion:
      return $h(e, n);
    case te.ZodIntersection:
      return Sh(e, n);
    case te.ZodTuple:
      return Gh(e, n);
    case te.ZodRecord:
      return Bi(e, n);
    case te.ZodLiteral:
      return Eh(e);
    case te.ZodEnum:
      return kh(e);
    case te.ZodNativeEnum:
      return Oh(e);
    case te.ZodNullable:
      return jh(e, n);
    case te.ZodOptional:
      return Zh(e, n);
    case te.ZodMap:
      return Rh(e, n);
    case te.ZodSet:
      return Vh(e, n);
    case te.ZodLazy:
      return () => e.getter()._def;
    case te.ZodPromise:
      return Fh(e, n);
    case te.ZodNaN:
    case te.ZodNever:
      return Nh();
    case te.ZodEffects:
      return Ih(e, n);
    case te.ZodAny:
      return rt();
    case te.ZodUnknown:
      return Jh();
    case te.ZodDefault:
      return xh(e, n);
    case te.ZodBranded:
      return Fi(e, n);
    case te.ZodReadonly:
      return Hh(e, n);
    case te.ZodCatch:
      return bh(e, n);
    case te.ZodPipeline:
      return Lh(e, n);
    case te.ZodFunction:
    case te.ZodVoid:
    case te.ZodSymbol:
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
    if (u !== hh)
      return u;
  }
  if (o && !n) {
    const u = Yh(o, t);
    if (u !== void 0)
      return u;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = Wh(e, e.typeName, t), i = typeof s == "function" ? ge(s(), t) : s;
  if (i && Kh(e, t, i), t.postProcess) {
    const u = t.postProcess(i, e, t);
    return a.jsonSchema = i, u;
  }
  return a.jsonSchema = i, i;
}
var Yh = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: mh(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((n, r) => t.currentPath[r] === n) ? (console.warn(
        `Recursive reference detected at ${t.currentPath.join(
          "/"
        )}! Defaulting to any`
      ), rt()) : t.$refStrategy === "seen" ? rt() : void 0;
  }
}, Kh = (e, t, n) => (e.description && (n.description = e.description), n), Xh = (e) => {
  const t = gh(e), n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
}, Qh = (e, t) => {
  var n;
  const r = Xh(t);
  let o = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce(
    (c, [d, m]) => {
      var g;
      return {
        ...c,
        [d]: (g = ge(
          m._def,
          {
            ...r,
            currentPath: [...r.basePath, r.definitionPath, d]
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
}, eg = Qh;
function tg(e, t) {
  var n;
  const r = (n = t == null ? void 0 : t.useReferences) != null ? n : !1;
  return _o(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => eg(e, {
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
function ng(e, t) {
  var n;
  const r = (n = t == null ? void 0 : t.useReferences) != null ? n : !1;
  return _o(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => Nf(e, {
      target: "draft-7",
      io: "output",
      reused: r ? "ref" : "inline"
    }),
    {
      validate: async (o) => {
        const a = await Ai(e, o);
        return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
      }
    }
  );
}
function rg(e) {
  return "_zod" in e;
}
function z(e, t) {
  return rg(e) ? ng(e, t) : tg(e, t);
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
function og(e) {
  return typeof e == "object" && e !== null && Xr in e && e[Xr] === !0 && "jsonSchema" in e && "validate" in e;
}
function on(e) {
  return e == null ? _o({
    properties: {},
    additionalProperties: !1
  }) : og(e) ? e : typeof e == "function" ? e() : z(e);
}
var { btoa: ag, atob: sg } = globalThis;
function Nn(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = sg(t);
  return Uint8Array.from(n, (r) => r.codePointAt(0));
}
function er(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += String.fromCodePoint(e[n]);
  return ag(t);
}
function ft(e) {
  return e instanceof Uint8Array ? er(e) : e;
}
function An(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
function ig(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* Ji({
  execute: e,
  input: t,
  options: n
}) {
  const r = e(t, n);
  if (ig(r)) {
    let o;
    for await (const a of r)
      o = a, yield { type: "preliminary", output: a };
    yield { type: "final", output: o };
  } else
    yield { type: "final", output: await r };
}
var lg = "2.0.47", ug = Y(
  () => z(
    p({
      type: x("error"),
      error: p({
        type: l(),
        message: l()
      })
    })
  )
), va = bt({
  errorSchema: ug,
  errorToMessage: (e) => e.error.message
}), cg = Y(
  () => z(
    p({
      type: x("message"),
      id: l().nullish(),
      model: l().nullish(),
      content: P(
        ce("type", [
          p({
            type: x("text"),
            text: l(),
            citations: P(
              ce("type", [
                p({
                  type: x("web_search_result_location"),
                  cited_text: l(),
                  url: l(),
                  title: l(),
                  encrypted_index: l()
                }),
                p({
                  type: x("page_location"),
                  cited_text: l(),
                  document_index: k(),
                  document_title: l().nullable(),
                  start_page_number: k(),
                  end_page_number: k()
                }),
                p({
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
          p({
            type: x("thinking"),
            thinking: l(),
            signature: l()
          }),
          p({
            type: x("redacted_thinking"),
            data: l()
          }),
          p({
            type: x("tool_use"),
            id: l(),
            name: l(),
            input: ie()
          }),
          p({
            type: x("server_tool_use"),
            id: l(),
            name: l(),
            input: $e(l(), ie()).nullish()
          }),
          p({
            type: x("web_fetch_tool_result"),
            tool_use_id: l(),
            content: ne([
              p({
                type: x("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: p({
                  type: x("document"),
                  title: l().nullable(),
                  citations: p({ enabled: B() }).optional(),
                  source: p({
                    type: x("text"),
                    media_type: l(),
                    data: l()
                  })
                })
              }),
              p({
                type: x("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          p({
            type: x("web_search_tool_result"),
            tool_use_id: l(),
            content: ne([
              P(
                p({
                  type: x("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              p({
                type: x("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          p({
            type: x("code_execution_tool_result"),
            tool_use_id: l(),
            content: ne([
              p({
                type: x("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: x("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          p({
            type: x("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: ce("type", [
              p({
                type: x("bash_code_execution_result"),
                content: P(
                  p({
                    type: x("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: x("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          p({
            type: x("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: ce("type", [
              p({
                type: x("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              p({
                type: x("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: k().nullable(),
                start_line: k().nullable(),
                total_lines: k().nullable()
              }),
              p({
                type: x("text_editor_code_execution_create_result"),
                is_file_update: B()
              }),
              p({
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
      container: p({
        expires_at: l(),
        id: l(),
        skills: P(
          p({
            type: ne([x("anthropic"), x("custom")]),
            skill_id: l(),
            version: l()
          })
        ).nullish()
      }).nullish()
    })
  )
), dg = Y(
  () => z(
    ce("type", [
      p({
        type: x("message_start"),
        message: p({
          id: l().nullish(),
          model: l().nullish(),
          usage: Hr({
            input_tokens: k(),
            cache_creation_input_tokens: k().nullish(),
            cache_read_input_tokens: k().nullish()
          })
        })
      }),
      p({
        type: x("content_block_start"),
        index: k(),
        content_block: ce("type", [
          p({
            type: x("text"),
            text: l()
          }),
          p({
            type: x("thinking"),
            thinking: l()
          }),
          p({
            type: x("tool_use"),
            id: l(),
            name: l()
          }),
          p({
            type: x("redacted_thinking"),
            data: l()
          }),
          p({
            type: x("server_tool_use"),
            id: l(),
            name: l(),
            input: $e(l(), ie()).nullish()
          }),
          p({
            type: x("web_fetch_tool_result"),
            tool_use_id: l(),
            content: ne([
              p({
                type: x("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: p({
                  type: x("document"),
                  title: l().nullable(),
                  citations: p({ enabled: B() }).optional(),
                  source: p({
                    type: x("text"),
                    media_type: l(),
                    data: l()
                  })
                })
              }),
              p({
                type: x("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          p({
            type: x("web_search_tool_result"),
            tool_use_id: l(),
            content: ne([
              P(
                p({
                  type: x("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              p({
                type: x("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          p({
            type: x("code_execution_tool_result"),
            tool_use_id: l(),
            content: ne([
              p({
                type: x("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: x("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          p({
            type: x("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: ce("type", [
              p({
                type: x("bash_code_execution_result"),
                content: P(
                  p({
                    type: x("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: x("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          p({
            type: x("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: ce("type", [
              p({
                type: x("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              p({
                type: x("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: k().nullable(),
                start_line: k().nullable(),
                total_lines: k().nullable()
              }),
              p({
                type: x("text_editor_code_execution_create_result"),
                is_file_update: B()
              }),
              p({
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
      p({
        type: x("content_block_delta"),
        index: k(),
        delta: ce("type", [
          p({
            type: x("input_json_delta"),
            partial_json: l()
          }),
          p({
            type: x("text_delta"),
            text: l()
          }),
          p({
            type: x("thinking_delta"),
            thinking: l()
          }),
          p({
            type: x("signature_delta"),
            signature: l()
          }),
          p({
            type: x("citations_delta"),
            citation: ce("type", [
              p({
                type: x("web_search_result_location"),
                cited_text: l(),
                url: l(),
                title: l(),
                encrypted_index: l()
              }),
              p({
                type: x("page_location"),
                cited_text: l(),
                document_index: k(),
                document_title: l().nullable(),
                start_page_number: k(),
                end_page_number: k()
              }),
              p({
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
      p({
        type: x("content_block_stop"),
        index: k()
      }),
      p({
        type: x("error"),
        error: p({
          type: l(),
          message: l()
        })
      }),
      p({
        type: x("message_delta"),
        delta: p({
          stop_reason: l().nullish(),
          stop_sequence: l().nullish(),
          container: p({
            expires_at: l(),
            id: l(),
            skills: P(
              p({
                type: ne([
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
      p({
        type: x("message_stop")
      }),
      p({
        type: x("ping")
      })
    ])
  )
), pg = Y(
  () => z(
    p({
      signature: l().optional(),
      redactedData: l().optional()
    })
  )
), ya = p({
  /**
   * Citation configuration for this document.
   * When enabled, this document will generate citations in the response.
   */
  citations: p({
    /**
     * Enable citations for this document
     */
    enabled: B()
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
}), fg = p({
  sendReasoning: B().optional(),
  thinking: p({
    type: ne([x("enabled"), x("disabled")]),
    budgetTokens: k().optional()
  }).optional(),
  /**
   * Whether to disable parallel function calling during tool use. Default is false.
   * When set to true, Claude will use at most one tool per response.
   */
  disableParallelToolUse: B().optional(),
  /**
   * Cache control settings for this message.
   * See https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
   */
  cacheControl: p({
    type: x("ephemeral"),
    ttl: ne([x("5m"), x("1h")]).optional()
  }).optional(),
  /**
   * Agent Skills configuration. Skills enable Claude to perform specialized tasks
   * like document processing (PPTX, DOCX, PDF, XLSX) and data analysis.
   * Requires code execution tool to be enabled.
   */
  container: p({
    id: l().optional(),
    skills: P(
      p({
        type: ne([x("anthropic"), x("custom")]),
        skillId: l(),
        version: l().optional()
      })
    ).optional()
  }).optional(),
  /**
   * @default 'high'
   */
  effort: X(["low", "medium", "high"]).optional()
}), _a = 4;
function mg(e) {
  var t;
  const n = e == null ? void 0 : e.anthropic;
  return (t = n == null ? void 0 : n.cacheControl) != null ? t : n == null ? void 0 : n.cache_control;
}
var bo = class {
  constructor() {
    this.breakpointCount = 0, this.warnings = [];
  }
  getCacheControl(e, t) {
    const n = mg(e);
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
}, hg = Y(
  () => z(
    p({
      maxCharacters: k().optional()
    })
  )
), gg = Y(
  () => z(
    p({
      command: X(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), vg = at({
  id: "anthropic.text_editor_20250728",
  name: "str_replace_based_edit_tool",
  inputSchema: gg
}), yg = (e = {}) => vg(e), _g = Y(
  () => z(
    p({
      maxUses: k().optional(),
      allowedDomains: P(l()).optional(),
      blockedDomains: P(l()).optional(),
      userLocation: p({
        type: x("approximate"),
        city: l().optional(),
        region: l().optional(),
        country: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Hi = Y(
  () => z(
    P(
      p({
        url: l(),
        title: l(),
        pageAge: l().nullable(),
        encryptedContent: l(),
        type: x("web_search_result")
      })
    )
  )
), bg = Y(
  () => z(
    p({
      query: l()
    })
  )
), wg = ht({
  id: "anthropic.web_search_20250305",
  name: "web_search",
  inputSchema: bg,
  outputSchema: Hi
}), xg = (e = {}) => wg(e), Ig = Y(
  () => z(
    p({
      maxUses: k().optional(),
      allowedDomains: P(l()).optional(),
      blockedDomains: P(l()).optional(),
      citations: p({ enabled: B() }).optional(),
      maxContentTokens: k().optional()
    })
  )
), Wi = Y(
  () => z(
    p({
      type: x("web_fetch_result"),
      url: l(),
      content: p({
        type: x("document"),
        title: l(),
        citations: p({ enabled: B() }).optional(),
        source: ne([
          p({
            type: x("base64"),
            mediaType: x("application/pdf"),
            data: l()
          }),
          p({
            type: x("text"),
            mediaType: x("text/plain"),
            data: l()
          })
        ])
      }),
      retrievedAt: l().nullable()
    })
  )
), kg = Y(
  () => z(
    p({
      url: l()
    })
  )
), Tg = ht({
  id: "anthropic.web_fetch_20250910",
  name: "web_fetch",
  inputSchema: kg,
  outputSchema: Wi
}), Sg = (e = {}) => Tg(e);
async function Eg({
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
        const d = s.getCacheControl(c.providerOptions, {
          type: "tool definition",
          canCache: !0
        });
        i.push({
          name: c.name,
          description: c.description,
          input_schema: c.inputSchema,
          cache_control: d
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
            const d = await Me({
              value: c.args,
              schema: hg
            });
            i.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250728",
              max_characters: d.maxCharacters,
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
            const d = await Me({
              value: c.args,
              schema: Ig
            });
            i.push({
              type: "web_fetch_20250910",
              name: "web_fetch",
              max_uses: d.maxUses,
              allowed_domains: d.allowedDomains,
              blocked_domains: d.blockedDomains,
              citations: d.citations,
              max_content_tokens: d.maxContentTokens,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.web_search_20250305": {
            const d = await Me({
              value: c.args,
              schema: _g
            });
            i.push({
              type: "web_search_20250305",
              name: "web_search",
              max_uses: d.maxUses,
              allowed_domains: d.allowedDomains,
              blocked_domains: d.blockedDomains,
              user_location: d.userLocation,
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
      throw new xe({
        functionality: `tool choice type: ${c}`
      });
    }
  }
}
var Yi = Y(
  () => z(
    p({
      type: x("code_execution_result"),
      stdout: l(),
      stderr: l(),
      return_code: k()
    })
  )
), Cg = Y(
  () => z(
    p({
      code: l()
    })
  )
), Mg = ht({
  id: "anthropic.code_execution_20250522",
  name: "code_execution",
  inputSchema: Cg,
  outputSchema: Yi
}), Rg = (e = {}) => Mg(e), Ki = Y(
  () => z(
    ce("type", [
      p({
        type: x("bash_code_execution_result"),
        content: P(
          p({
            type: x("bash_code_execution_output"),
            file_id: l()
          })
        ),
        stdout: l(),
        stderr: l(),
        return_code: k()
      }),
      p({
        type: x("bash_code_execution_tool_result_error"),
        error_code: l()
      }),
      p({
        type: x("text_editor_code_execution_tool_result_error"),
        error_code: l()
      }),
      p({
        type: x("text_editor_code_execution_view_result"),
        content: l(),
        file_type: l(),
        num_lines: k().nullable(),
        start_line: k().nullable(),
        total_lines: k().nullable()
      }),
      p({
        type: x("text_editor_code_execution_create_result"),
        is_file_update: B()
      }),
      p({
        type: x("text_editor_code_execution_str_replace_result"),
        lines: P(l()).nullable(),
        new_lines: k().nullable(),
        new_start: k().nullable(),
        old_lines: k().nullable(),
        old_start: k().nullable()
      })
    ])
  )
), Og = Y(
  () => z(
    ce("type", [
      p({
        type: x("bash_code_execution"),
        command: l()
      }),
      ce("command", [
        p({
          type: x("text_editor_code_execution"),
          command: x("view"),
          path: l()
        }),
        p({
          type: x("text_editor_code_execution"),
          command: x("create"),
          path: l(),
          file_text: l().nullish()
        }),
        p({
          type: x("text_editor_code_execution"),
          command: x("str_replace"),
          path: l(),
          old_str: l(),
          new_str: l()
        })
      ])
    ])
  )
), Ng = ht({
  id: "anthropic.code_execution_20250825",
  name: "code_execution",
  inputSchema: Og,
  outputSchema: Ki
}), Ag = (e = {}) => Ng(e);
function $g(e) {
  if (typeof e == "string")
    return Buffer.from(e, "base64").toString("utf-8");
  if (e instanceof Uint8Array)
    return new TextDecoder().decode(e);
  throw e instanceof URL ? new xe({
    functionality: "URL-based text documents are not supported for citations"
  }) : new xe({
    functionality: `unsupported data type for text documents: ${typeof e}`
  });
}
async function Pg({
  prompt: e,
  sendReasoning: t,
  warnings: n,
  cacheControlValidator: r
}) {
  var o, a, s, i, u;
  const c = /* @__PURE__ */ new Set(), d = jg(e), m = r || new bo();
  let g;
  const f = [];
  async function y(w) {
    var h, v;
    const b = await Ve({
      provider: "anthropic",
      providerOptions: w,
      schema: ya
    });
    return (v = (h = b == null ? void 0 : b.citations) == null ? void 0 : h.enabled) != null ? v : !1;
  }
  async function _(w) {
    const h = await Ve({
      provider: "anthropic",
      providerOptions: w,
      schema: ya
    });
    return {
      title: h == null ? void 0 : h.title,
      context: h == null ? void 0 : h.context
    };
  }
  for (let w = 0; w < d.length; w++) {
    const h = d[w], v = w === d.length - 1, b = h.type;
    switch (b) {
      case "system": {
        if (g != null)
          throw new xe({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        g = h.messages.map(({ content: I, providerOptions: E }) => ({
          type: "text",
          text: I,
          cache_control: m.getCacheControl(E, {
            type: "system message",
            canCache: !0
          })
        }));
        break;
      }
      case "user": {
        const I = [];
        for (const E of h.messages) {
          const { role: O, content: S } = E;
          switch (O) {
            case "user": {
              for (let M = 0; M < S.length; M++) {
                const R = S[M], A = M === S.length - 1, j = (o = m.getCacheControl(R.providerOptions, {
                  type: "user message part",
                  canCache: !0
                })) != null ? o : A ? m.getCacheControl(E.providerOptions, {
                  type: "user message",
                  canCache: !0
                }) : void 0;
                switch (R.type) {
                  case "text": {
                    I.push({
                      type: "text",
                      text: R.text,
                      cache_control: j
                    });
                    break;
                  }
                  case "file": {
                    if (R.mediaType.startsWith("image/"))
                      I.push({
                        type: "image",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "base64",
                          media_type: R.mediaType === "image/*" ? "image/jpeg" : R.mediaType,
                          data: ft(R.data)
                        },
                        cache_control: j
                      });
                    else if (R.mediaType === "application/pdf") {
                      c.add("pdfs-2024-09-25");
                      const D = await y(
                        R.providerOptions
                      ), q = await _(
                        R.providerOptions
                      );
                      I.push({
                        type: "document",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "base64",
                          media_type: "application/pdf",
                          data: ft(R.data)
                        },
                        title: (a = q.title) != null ? a : R.filename,
                        ...q.context && { context: q.context },
                        ...D && {
                          citations: { enabled: !0 }
                        },
                        cache_control: j
                      });
                    } else if (R.mediaType === "text/plain") {
                      const D = await y(
                        R.providerOptions
                      ), q = await _(
                        R.providerOptions
                      );
                      I.push({
                        type: "document",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "text",
                          media_type: "text/plain",
                          data: $g(R.data)
                        },
                        title: (s = q.title) != null ? s : R.filename,
                        ...q.context && { context: q.context },
                        ...D && {
                          citations: { enabled: !0 }
                        },
                        cache_control: j
                      });
                    } else
                      throw new xe({
                        functionality: `media type: ${R.mediaType}`
                      });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let M = 0; M < S.length; M++) {
                const R = S[M], A = M === S.length - 1, j = (i = m.getCacheControl(R.providerOptions, {
                  type: "tool result part",
                  canCache: !0
                })) != null ? i : A ? m.getCacheControl(E.providerOptions, {
                  type: "tool result message",
                  canCache: !0
                }) : void 0, D = R.output;
                let q;
                switch (D.type) {
                  case "content":
                    q = D.value.map((C) => {
                      switch (C.type) {
                        case "text":
                          return {
                            type: "text",
                            text: C.text
                          };
                        case "media": {
                          if (C.mediaType.startsWith("image/"))
                            return {
                              type: "image",
                              source: {
                                type: "base64",
                                media_type: C.mediaType,
                                data: C.data
                              }
                            };
                          if (C.mediaType === "application/pdf")
                            return c.add("pdfs-2024-09-25"), {
                              type: "document",
                              source: {
                                type: "base64",
                                media_type: C.mediaType,
                                data: C.data
                              }
                            };
                          throw new xe({
                            functionality: `media type: ${C.mediaType}`
                          });
                        }
                      }
                    });
                    break;
                  case "text":
                  case "error-text":
                    q = D.value;
                    break;
                  case "json":
                  case "error-json":
                  default:
                    q = JSON.stringify(D.value);
                    break;
                }
                I.push({
                  type: "tool_result",
                  tool_use_id: R.toolCallId,
                  content: q,
                  is_error: D.type === "error-text" || D.type === "error-json" ? !0 : void 0,
                  cache_control: j
                });
              }
              break;
            }
            default: {
              const M = O;
              throw new Error(`Unsupported role: ${M}`);
            }
          }
        }
        f.push({ role: "user", content: I });
        break;
      }
      case "assistant": {
        const I = [];
        for (let E = 0; E < h.messages.length; E++) {
          const O = h.messages[E], S = E === h.messages.length - 1, { content: M } = O;
          for (let R = 0; R < M.length; R++) {
            const A = M[R], j = R === M.length - 1, D = (u = m.getCacheControl(A.providerOptions, {
              type: "assistant message part",
              canCache: !0
            })) != null ? u : j ? m.getCacheControl(O.providerOptions, {
              type: "assistant message",
              canCache: !0
            }) : void 0;
            switch (A.type) {
              case "text": {
                I.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    v && S && j ? A.text.trim() : A.text
                  ),
                  cache_control: D
                });
                break;
              }
              case "reasoning": {
                if (t) {
                  const q = await Ve({
                    provider: "anthropic",
                    providerOptions: A.providerOptions,
                    schema: pg
                  });
                  q != null ? q.signature != null ? (m.getCacheControl(A.providerOptions, {
                    type: "thinking block",
                    canCache: !1
                  }), I.push({
                    type: "thinking",
                    thinking: A.text,
                    signature: q.signature
                  })) : q.redactedData != null ? (m.getCacheControl(A.providerOptions, {
                    type: "redacted thinking block",
                    canCache: !1
                  }), I.push({
                    type: "redacted_thinking",
                    data: q.redactedData
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
                if (A.providerExecuted) {
                  A.toolName === "code_execution" && A.input != null && typeof A.input == "object" && "type" in A.input && typeof A.input.type == "string" && (A.input.type === "bash_code_execution" || A.input.type === "text_editor_code_execution") ? I.push({
                    type: "server_tool_use",
                    id: A.toolCallId,
                    name: A.input.type,
                    // map back to subtool name
                    input: A.input,
                    cache_control: D
                  }) : A.toolName === "code_execution" || // code execution 20250522
                  A.toolName === "web_fetch" || A.toolName === "web_search" ? I.push({
                    type: "server_tool_use",
                    id: A.toolCallId,
                    name: A.toolName,
                    input: A.input,
                    cache_control: D
                  }) : n.push({
                    type: "other",
                    message: `provider executed tool call for tool ${A.toolName} is not supported`
                  });
                  break;
                }
                I.push({
                  type: "tool_use",
                  id: A.toolCallId,
                  name: A.toolName,
                  input: A.input,
                  cache_control: D
                });
                break;
              }
              case "tool-result": {
                if (A.toolName === "code_execution") {
                  const q = A.output;
                  if (q.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${q.type} for tool ${A.toolName} is not supported`
                    });
                    break;
                  }
                  if (q.value == null || typeof q.value != "object" || !("type" in q.value) || typeof q.value.type != "string") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output value is not a valid code execution result for tool ${A.toolName}`
                    });
                    break;
                  }
                  if (q.value.type === "code_execution_result") {
                    const C = await Me({
                      value: q.value,
                      schema: Yi
                    });
                    I.push({
                      type: "code_execution_tool_result",
                      tool_use_id: A.toolCallId,
                      content: {
                        type: C.type,
                        stdout: C.stdout,
                        stderr: C.stderr,
                        return_code: C.return_code
                      },
                      cache_control: D
                    });
                  } else {
                    const C = await Me({
                      value: q.value,
                      schema: Ki
                    });
                    I.push(
                      C.type === "bash_code_execution_result" || C.type === "bash_code_execution_tool_result_error" ? {
                        type: "bash_code_execution_tool_result",
                        tool_use_id: A.toolCallId,
                        cache_control: D,
                        content: C
                      } : {
                        type: "text_editor_code_execution_tool_result",
                        tool_use_id: A.toolCallId,
                        cache_control: D,
                        content: C
                      }
                    );
                  }
                  break;
                }
                if (A.toolName === "web_fetch") {
                  const q = A.output;
                  if (q.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${q.type} for tool ${A.toolName} is not supported`
                    });
                    break;
                  }
                  const C = await Me({
                    value: q.value,
                    schema: Wi
                  });
                  I.push({
                    type: "web_fetch_tool_result",
                    tool_use_id: A.toolCallId,
                    content: {
                      type: "web_fetch_result",
                      url: C.url,
                      retrieved_at: C.retrievedAt,
                      content: {
                        type: "document",
                        title: C.content.title,
                        citations: C.content.citations,
                        source: {
                          type: C.content.source.type,
                          media_type: C.content.source.mediaType,
                          data: C.content.source.data
                        }
                      }
                    },
                    cache_control: D
                  });
                  break;
                }
                if (A.toolName === "web_search") {
                  const q = A.output;
                  if (q.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${q.type} for tool ${A.toolName} is not supported`
                    });
                    break;
                  }
                  const C = await Me({
                    value: q.value,
                    schema: Hi
                  });
                  I.push({
                    type: "web_search_tool_result",
                    tool_use_id: A.toolCallId,
                    content: C.map((F) => ({
                      url: F.url,
                      title: F.title,
                      page_age: F.pageAge,
                      encrypted_content: F.encryptedContent,
                      type: F.type
                    })),
                    cache_control: D
                  });
                  break;
                }
                n.push({
                  type: "other",
                  message: `provider executed tool result for tool ${A.toolName} is not supported`
                });
                break;
              }
            }
          }
        }
        f.push({ role: "assistant", content: I });
        break;
      }
      default: {
        const I = b;
        throw new Error(`content type: ${I}`);
      }
    }
  }
  return {
    prompt: { system: g, messages: f },
    betas: c
  };
}
function jg(e) {
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
var qg = class {
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
    tools: d,
    toolChoice: m,
    providerOptions: g
  }) {
    var f, y, _, w;
    const h = [];
    a != null && h.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), s != null && h.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), c != null && h.push({
      type: "unsupported-setting",
      setting: "seed"
    }), n != null && n > 1 ? (h.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: `${n} exceeds anthropic maximum of 1.0. clamped to 1.0`
    }), n = 1) : n != null && n < 0 && (h.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: `${n} is below anthropic minimum of 0. clamped to 0`
    }), n = 0), (u == null ? void 0 : u.type) === "json" && (u.schema == null ? h.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format requires a schema. The response format is ignored."
    }) : d != null && h.push({
      type: "unsupported-setting",
      setting: "tools",
      details: "JSON response format does not support tools. The provided tools are ignored."
    }));
    const v = (u == null ? void 0 : u.type) === "json" && u.schema != null ? {
      type: "function",
      name: "json",
      description: "Respond with a JSON object.",
      inputSchema: u.schema
    } : void 0, b = await Ve({
      provider: "anthropic",
      providerOptions: g,
      schema: fg
    }), I = new bo(), { prompt: E, betas: O } = await Pg({
      prompt: e,
      sendReasoning: (f = b == null ? void 0 : b.sendReasoning) != null ? f : !0,
      warnings: h,
      cacheControlValidator: I
    }), S = ((y = b == null ? void 0 : b.thinking) == null ? void 0 : y.type) === "enabled", M = (_ = b == null ? void 0 : b.thinking) == null ? void 0 : _.budgetTokens, { maxOutputTokens: R, knownModel: A } = Dg(this.modelId), j = t ?? R, D = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: j,
      temperature: n,
      top_k: o,
      top_p: r,
      stop_sequences: i,
      // provider specific settings:
      ...S && {
        thinking: { type: "enabled", budget_tokens: M }
      },
      ...(b == null ? void 0 : b.effort) && {
        output_config: { effort: b.effort }
      },
      // container with agent skills:
      ...(b == null ? void 0 : b.container) && {
        container: {
          id: b.container.id,
          skills: (w = b.container.skills) == null ? void 0 : w.map((Q) => ({
            type: Q.type,
            skill_id: Q.skillId,
            version: Q.version
          }))
        }
      },
      // prompt:
      system: E.system,
      messages: E.messages
    };
    if (S) {
      if (M == null)
        throw new xe({
          functionality: "thinking requires a budget"
        });
      D.temperature != null && (D.temperature = void 0, h.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), o != null && (D.top_k = void 0, h.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), r != null && (D.top_p = void 0, h.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), D.max_tokens = j + M;
    }
    A && D.max_tokens > R && (t != null && h.push({
      type: "unsupported-setting",
      setting: "maxOutputTokens",
      details: `${D.max_tokens} (maxOutputTokens + thinkingBudget) is greater than ${this.modelId} ${R} max output tokens. The max output tokens have been limited to ${R}.`
    }), D.max_tokens = R), b != null && b.container && b.container.skills && b.container.skills.length > 0 && (O.add("code-execution-2025-08-25"), O.add("skills-2025-10-02"), O.add("files-api-2025-04-14"), d != null && d.some(
      (Q) => Q.type === "provider-defined" && Q.id === "anthropic.code_execution_20250825"
    ) || h.push({
      type: "other",
      message: "code execution tool is required when using skills"
    })), b != null && b.effort && O.add("effort-2025-11-24");
    const {
      tools: q,
      toolChoice: C,
      toolWarnings: F,
      betas: N
    } = await Eg(
      v != null ? {
        tools: [v],
        toolChoice: { type: "tool", toolName: v.name },
        disableParallelToolUse: !0,
        cacheControlValidator: I
      } : {
        tools: d ?? [],
        toolChoice: m,
        disableParallelToolUse: b == null ? void 0 : b.disableParallelToolUse,
        cacheControlValidator: I
      }
    ), U = I.getWarnings();
    return {
      args: {
        ...D,
        tools: q,
        tool_choice: C
      },
      warnings: [...h, ...F, ...U],
      betas: /* @__PURE__ */ new Set([...O, ...N]),
      usesJsonResponseTool: v != null
    };
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Re(
      await Ae(this.config.headers),
      e.size > 0 ? { "anthropic-beta": Array.from(e).join(",") } : {},
      t
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
    const { args: c, warnings: d, betas: m, usesJsonResponseTool: g } = await this.getArgs(e), f = this.extractCitationDocuments(e.prompt), {
      responseHeaders: y,
      value: _,
      rawValue: w
    } = await Se({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: m, headers: e.headers }),
      body: this.transformRequestBody(c),
      failedResponseHandler: va,
      successfulResponseHandler: Ue(
        cg
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), h = [];
    for (const v of _.content)
      switch (v.type) {
        case "text": {
          if (!g && (h.push({ type: "text", text: v.text }), v.citations))
            for (const b of v.citations) {
              const I = wa(
                b,
                f,
                this.generateId
              );
              I && h.push(I);
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
              result: v.content.map((b) => {
                var I;
                return {
                  url: b.url,
                  title: b.title,
                  pageAge: (I = b.page_age) != null ? I : null,
                  encryptedContent: b.encrypted_content,
                  type: b.type
                };
              }),
              providerExecuted: !0
            });
            for (const b of v.content)
              h.push({
                type: "source",
                sourceType: "url",
                id: this.generateId(),
                url: b.url,
                title: b.title,
                providerMetadata: {
                  anthropic: {
                    pageAge: (t = b.page_age) != null ? t : null
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
        body: w
      },
      warnings: d,
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
    const { args: t, warnings: n, betas: r, usesJsonResponseTool: o } = await this.getArgs(e), a = this.extractCitationDocuments(e.prompt), s = { ...t, stream: !0 }, { responseHeaders: i, value: u } = await Se({
      url: this.buildRequestUrl(!0),
      headers: await this.getHeaders({ betas: r, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: va,
      successfulResponseHandler: Gt(
        dg
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let c = "unknown";
    const d = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, m = {};
    let g, f = null, y = null, _ = null, w;
    const h = this.generateId;
    return {
      stream: u.pipeThrough(
        new TransformStream({
          start(v) {
            v.enqueue({ type: "stream-start", warnings: n });
          },
          transform(v, b) {
            var I, E, O, S, M, R, A, j, D, q;
            if (e.includeRawChunks && b.enqueue({ type: "raw", rawValue: v.rawValue }), !v.success) {
              b.enqueue({ type: "error", error: v.error });
              return;
            }
            const C = v.value;
            switch (C.type) {
              case "ping":
                return;
              case "content_block_start": {
                const F = C.content_block.type;
                switch (w = F, F) {
                  case "text": {
                    m[C.index] = { type: "text" }, b.enqueue({
                      type: "text-start",
                      id: String(C.index)
                    });
                    return;
                  }
                  case "thinking": {
                    m[C.index] = { type: "reasoning" }, b.enqueue({
                      type: "reasoning-start",
                      id: String(C.index)
                    });
                    return;
                  }
                  case "redacted_thinking": {
                    m[C.index] = { type: "reasoning" }, b.enqueue({
                      type: "reasoning-start",
                      id: String(C.index),
                      providerMetadata: {
                        anthropic: {
                          redactedData: C.content_block.data
                        }
                      }
                    });
                    return;
                  }
                  case "tool_use": {
                    m[C.index] = o ? { type: "text" } : {
                      type: "tool-call",
                      toolCallId: C.content_block.id,
                      toolName: C.content_block.name,
                      input: "",
                      firstDelta: !0
                    }, b.enqueue(
                      o ? { type: "text-start", id: String(C.index) } : {
                        type: "tool-input-start",
                        id: C.content_block.id,
                        toolName: C.content_block.name
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
                    ].includes(C.content_block.name)) {
                      m[C.index] = {
                        type: "tool-call",
                        toolCallId: C.content_block.id,
                        toolName: C.content_block.name,
                        input: "",
                        providerExecuted: !0,
                        firstDelta: !0
                      };
                      const N = C.content_block.name === "text_editor_code_execution" || C.content_block.name === "bash_code_execution" ? "code_execution" : C.content_block.name;
                      b.enqueue({
                        type: "tool-input-start",
                        id: C.content_block.id,
                        toolName: N,
                        providerExecuted: !0
                      });
                    }
                    return;
                  }
                  case "web_fetch_tool_result": {
                    const N = C.content_block;
                    N.content.type === "web_fetch_result" ? b.enqueue({
                      type: "tool-result",
                      toolCallId: N.tool_use_id,
                      toolName: "web_fetch",
                      result: {
                        type: "web_fetch_result",
                        url: N.content.url,
                        retrievedAt: N.content.retrieved_at,
                        content: {
                          type: N.content.content.type,
                          title: N.content.content.title,
                          citations: N.content.content.citations,
                          source: {
                            type: N.content.content.source.type,
                            mediaType: N.content.content.source.media_type,
                            data: N.content.content.source.data
                          }
                        }
                      },
                      providerExecuted: !0
                    }) : N.content.type === "web_fetch_tool_result_error" && b.enqueue({
                      type: "tool-result",
                      toolCallId: N.tool_use_id,
                      toolName: "web_fetch",
                      isError: !0,
                      result: {
                        type: "web_fetch_tool_result_error",
                        errorCode: N.content.error_code
                      },
                      providerExecuted: !0
                    });
                    return;
                  }
                  case "web_search_tool_result": {
                    const N = C.content_block;
                    if (Array.isArray(N.content)) {
                      b.enqueue({
                        type: "tool-result",
                        toolCallId: N.tool_use_id,
                        toolName: "web_search",
                        result: N.content.map((U) => {
                          var Q;
                          return {
                            url: U.url,
                            title: U.title,
                            pageAge: (Q = U.page_age) != null ? Q : null,
                            encryptedContent: U.encrypted_content,
                            type: U.type
                          };
                        }),
                        providerExecuted: !0
                      });
                      for (const U of N.content)
                        b.enqueue({
                          type: "source",
                          sourceType: "url",
                          id: h(),
                          url: U.url,
                          title: U.title,
                          providerMetadata: {
                            anthropic: {
                              pageAge: (I = U.page_age) != null ? I : null
                            }
                          }
                        });
                    } else
                      b.enqueue({
                        type: "tool-result",
                        toolCallId: N.tool_use_id,
                        toolName: "web_search",
                        isError: !0,
                        result: {
                          type: "web_search_tool_result_error",
                          errorCode: N.content.error_code
                        },
                        providerExecuted: !0
                      });
                    return;
                  }
                  // code execution 20250522:
                  case "code_execution_tool_result": {
                    const N = C.content_block;
                    N.content.type === "code_execution_result" ? b.enqueue({
                      type: "tool-result",
                      toolCallId: N.tool_use_id,
                      toolName: "code_execution",
                      result: {
                        type: N.content.type,
                        stdout: N.content.stdout,
                        stderr: N.content.stderr,
                        return_code: N.content.return_code
                      },
                      providerExecuted: !0
                    }) : N.content.type === "code_execution_tool_result_error" && b.enqueue({
                      type: "tool-result",
                      toolCallId: N.tool_use_id,
                      toolName: "code_execution",
                      isError: !0,
                      result: {
                        type: "code_execution_tool_result_error",
                        errorCode: N.content.error_code
                      },
                      providerExecuted: !0
                    });
                    return;
                  }
                  // code execution 20250825:
                  case "bash_code_execution_tool_result":
                  case "text_editor_code_execution_tool_result": {
                    const N = C.content_block;
                    b.enqueue({
                      type: "tool-result",
                      toolCallId: N.tool_use_id,
                      toolName: "code_execution",
                      result: N.content,
                      providerExecuted: !0
                    });
                    return;
                  }
                  default: {
                    const N = F;
                    throw new Error(
                      `Unsupported content block type: ${N}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (m[C.index] != null) {
                  const F = m[C.index];
                  switch (F.type) {
                    case "text": {
                      b.enqueue({
                        type: "text-end",
                        id: String(C.index)
                      });
                      break;
                    }
                    case "reasoning": {
                      b.enqueue({
                        type: "reasoning-end",
                        id: String(C.index)
                      });
                      break;
                    }
                    case "tool-call":
                      if (!o) {
                        b.enqueue({
                          type: "tool-input-end",
                          id: F.toolCallId
                        });
                        const N = F.toolName === "text_editor_code_execution" || F.toolName === "bash_code_execution" ? "code_execution" : F.toolName;
                        b.enqueue({
                          type: "tool-call",
                          toolCallId: F.toolCallId,
                          toolName: N,
                          input: F.input,
                          providerExecuted: F.providerExecuted
                        });
                      }
                      break;
                  }
                  delete m[C.index];
                }
                w = void 0;
                return;
              }
              case "content_block_delta": {
                const F = C.delta.type;
                switch (F) {
                  case "text_delta": {
                    if (o)
                      return;
                    b.enqueue({
                      type: "text-delta",
                      id: String(C.index),
                      delta: C.delta.text
                    });
                    return;
                  }
                  case "thinking_delta": {
                    b.enqueue({
                      type: "reasoning-delta",
                      id: String(C.index),
                      delta: C.delta.thinking
                    });
                    return;
                  }
                  case "signature_delta": {
                    w === "thinking" && b.enqueue({
                      type: "reasoning-delta",
                      id: String(C.index),
                      delta: "",
                      providerMetadata: {
                        anthropic: {
                          signature: C.delta.signature
                        }
                      }
                    });
                    return;
                  }
                  case "input_json_delta": {
                    const N = m[C.index];
                    let U = C.delta.partial_json;
                    if (U.length === 0)
                      return;
                    if (o) {
                      if ((N == null ? void 0 : N.type) !== "text")
                        return;
                      b.enqueue({
                        type: "text-delta",
                        id: String(C.index),
                        delta: U
                      });
                    } else {
                      if ((N == null ? void 0 : N.type) !== "tool-call")
                        return;
                      N.firstDelta && (N.toolName === "bash_code_execution" || N.toolName === "text_editor_code_execution") && (U = `{"type": "${N.toolName}",${U.substring(1)}`), b.enqueue({
                        type: "tool-input-delta",
                        id: N.toolCallId,
                        delta: U
                      }), N.input += U, N.firstDelta = !1;
                    }
                    return;
                  }
                  case "citations_delta": {
                    const N = C.delta.citation, U = wa(
                      N,
                      a,
                      h
                    );
                    U && b.enqueue(U);
                    return;
                  }
                  default: {
                    const N = F;
                    throw new Error(
                      `Unsupported delta type: ${N}`
                    );
                  }
                }
              }
              case "message_start": {
                d.inputTokens = C.message.usage.input_tokens, d.cachedInputTokens = (E = C.message.usage.cache_read_input_tokens) != null ? E : void 0, g = {
                  ...C.message.usage
                }, f = (O = C.message.usage.cache_creation_input_tokens) != null ? O : null, b.enqueue({
                  type: "response-metadata",
                  id: (S = C.message.id) != null ? S : void 0,
                  modelId: (M = C.message.model) != null ? M : void 0
                });
                return;
              }
              case "message_delta": {
                d.outputTokens = C.usage.output_tokens, d.totalTokens = ((R = d.inputTokens) != null ? R : 0) + ((A = C.usage.output_tokens) != null ? A : 0), c = ba({
                  finishReason: C.delta.stop_reason,
                  isJsonResponseFromTool: o
                }), y = (j = C.delta.stop_sequence) != null ? j : null, _ = C.delta.container != null ? {
                  expiresAt: C.delta.container.expires_at,
                  id: C.delta.container.id,
                  skills: (q = (D = C.delta.container.skills) == null ? void 0 : D.map((F) => ({
                    type: F.type,
                    skillId: F.skill_id,
                    version: F.version
                  }))) != null ? q : null
                } : null, g = {
                  ...g,
                  ...C.usage
                };
                return;
              }
              case "message_stop": {
                b.enqueue({
                  type: "finish",
                  finishReason: c,
                  usage: d,
                  providerMetadata: {
                    anthropic: {
                      usage: g ?? null,
                      cacheCreationInputTokens: f,
                      stopSequence: y,
                      container: _
                    }
                  }
                });
                return;
              }
              case "error": {
                b.enqueue({ type: "error", error: C.error });
                return;
              }
              default: {
                const F = C;
                throw new Error(`Unsupported chunk type: ${F}`);
              }
            }
          }
        })
      ),
      request: { body: s },
      response: { headers: i }
    };
  }
};
function Dg(e) {
  return e.includes("claude-sonnet-4-5") || e.includes("claude-opus-4-5") ? {
    maxOutputTokens: 64e3,
    knownModel: !0
  } : e.includes("claude-opus-4-1") ? {
    maxOutputTokens: 32e3,
    knownModel: !0
  } : e.includes("claude-sonnet-4-") || e.includes("claude-3-7-sonnet") || e.includes("claude-haiku-4-5") ? { maxOutputTokens: 64e3, knownModel: !0 } : e.includes("claude-opus-4-") ? { maxOutputTokens: 32e3, knownModel: !0 } : e.includes("claude-3-5-haiku") ? { maxOutputTokens: 8192, knownModel: !0 } : e.includes("claude-3-haiku") ? { maxOutputTokens: 4096, knownModel: !0 } : { maxOutputTokens: 4096, knownModel: !1 };
}
var zg = Y(
  () => z(
    p({
      command: l(),
      restart: B().optional()
    })
  )
), Ug = at({
  id: "anthropic.bash_20241022",
  name: "bash",
  inputSchema: zg
}), Zg = Y(
  () => z(
    p({
      command: l(),
      restart: B().optional()
    })
  )
), Lg = at({
  id: "anthropic.bash_20250124",
  name: "bash",
  inputSchema: Zg
}), Fg = Y(
  () => z(
    p({
      action: X([
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
), Vg = at({
  id: "anthropic.computer_20241022",
  name: "computer",
  inputSchema: Fg
}), Gg = Y(
  () => z(
    p({
      action: X([
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
      scroll_direction: X(["up", "down", "left", "right"]).optional(),
      start_coordinate: Wr([k().int(), k().int()]).optional(),
      text: l().optional()
    })
  )
), Bg = at({
  id: "anthropic.computer_20250124",
  name: "computer",
  inputSchema: Gg
}), Jg = Y(
  () => z(
    ce("command", [
      p({
        command: x("view"),
        path: l(),
        view_range: Wr([k(), k()]).optional()
      }),
      p({
        command: x("create"),
        path: l(),
        file_text: l()
      }),
      p({
        command: x("str_replace"),
        path: l(),
        old_str: l(),
        new_str: l()
      }),
      p({
        command: x("insert"),
        path: l(),
        insert_line: k(),
        insert_text: l()
      }),
      p({
        command: x("delete"),
        path: l()
      }),
      p({
        command: x("rename"),
        old_path: l(),
        new_path: l()
      })
    ])
  )
), Hg = at({
  id: "anthropic.memory_20250818",
  name: "memory",
  inputSchema: Jg
}), Wg = Y(
  () => z(
    p({
      command: X(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), Yg = at({
  id: "anthropic.text_editor_20241022",
  name: "str_replace_editor",
  inputSchema: Wg
}), Kg = Y(
  () => z(
    p({
      command: X(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), Xg = at({
  id: "anthropic.text_editor_20250124",
  name: "str_replace_editor",
  inputSchema: Kg
}), Qg = Y(
  () => z(
    p({
      command: X(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: P(k().int()).optional()
    })
  )
), ev = at({
  id: "anthropic.text_editor_20250429",
  name: "str_replace_based_edit_tool",
  inputSchema: Qg
}), tv = {
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   *
   * Tool name must be `bash`.
   */
  bash_20241022: Ug,
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   *
   * Tool name must be `bash`.
   */
  bash_20250124: Lg,
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
  codeExecution_20250522: Rg,
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
  codeExecution_20250825: Ag,
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
  computer_20241022: Vg,
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
  computer_20250124: Bg,
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
  memory_20250818: Hg,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.5
   *
   * Tool name must be `str_replace_editor`.
   */
  textEditor_20241022: Yg,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.7
   *
   * Tool name must be `str_replace_editor`.
   */
  textEditor_20250124: Xg,
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
  textEditor_20250429: ev,
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
  textEditor_20250728: yg,
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
  webFetch_20250910: Sg,
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
  webSearch_20250305: xg
};
function nv(e = {}) {
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
    `ai-sdk/anthropic/${lg}`
  ), s = (u) => {
    var c;
    return new qg(u, {
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
  }, i.tools = tv, i;
}
nv();
var rv = "2.0.43", ov = Y(
  () => z(
    p({
      error: p({
        code: k().nullable(),
        message: l(),
        status: l()
      })
    })
  )
), Sn = bt({
  errorSchema: ov,
  errorToMessage: (e) => e.error.message
}), av = Y(
  () => z(
    p({
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
      taskType: X([
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
), sv = class {
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
      schema: av
    });
    if (e.length > this.maxEmbeddingsPerCall)
      throw new ao({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const a = Re(
      await Ae(this.config.headers),
      t
    );
    if (e.length === 1) {
      const {
        responseHeaders: c,
        value: d,
        rawValue: m
      } = await Se({
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
          lv
        ),
        abortSignal: n,
        fetch: this.config.fetch
      });
      return {
        embeddings: [d.embedding.values],
        usage: void 0,
        response: { headers: c, body: m }
      };
    }
    const {
      responseHeaders: s,
      value: i,
      rawValue: u
    } = await Se({
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
        iv
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
}, iv = Y(
  () => z(
    p({
      embeddings: P(p({ values: P(k()) }))
    })
  )
), lv = Y(
  () => z(
    p({
      embedding: p({ values: P(k()) })
    })
  )
);
function _t(e) {
  if (e == null || uv(e))
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
    const: d,
    minLength: m,
    enum: g
  } = e, f = {};
  if (n && (f.description = n), r && (f.required = r), c && (f.format = c), d !== void 0 && (f.enum = [d]), t)
    if (Array.isArray(t)) {
      const y = t.includes("null"), _ = t.filter((w) => w !== "null");
      _.length === 0 ? f.type = "null" : (f.anyOf = _.map((w) => ({ type: w })), y && (f.nullable = !0));
    } else
      f.type = t;
  if (g !== void 0 && (f.enum = g), o != null && (f.properties = Object.entries(o).reduce(
    (y, [_, w]) => (y[_] = _t(w), y),
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
function uv(e) {
  return e != null && typeof e == "object" && e.type === "object" && (e.properties == null || Object.keys(e.properties).length === 0) && !e.additionalProperties;
}
function cv(e, t) {
  var n;
  const r = [], o = [];
  let a = !0;
  const s = (n = t == null ? void 0 : t.isGemmaModel) != null ? n : !1;
  for (const { role: i, content: u } of e)
    switch (i) {
      case "system": {
        if (!a)
          throw new xe({
            functionality: "system messages are only supported at the beginning of the conversation"
          });
        r.push({ text: u });
        break;
      }
      case "user": {
        a = !1;
        const c = [];
        for (const d of u)
          switch (d.type) {
            case "text": {
              c.push({ text: d.text });
              break;
            }
            case "file": {
              const m = d.mediaType === "image/*" ? "image/jpeg" : d.mediaType;
              c.push(
                d.data instanceof URL ? {
                  fileData: {
                    mimeType: m,
                    fileUri: d.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: m,
                    data: ft(d.data)
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
            var d, m, g;
            const f = ((m = (d = c.providerOptions) == null ? void 0 : d.google) == null ? void 0 : m.thoughtSignature) != null ? String((g = c.providerOptions.google) == null ? void 0 : g.thoughtSignature) : void 0;
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
                  throw new xe({
                    functionality: "Only PNG images are supported in assistant messages"
                  });
                if (c.data instanceof URL)
                  throw new xe({
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
        for (const d of u) {
          const m = d.output;
          if (m.type === "content")
            for (const g of m.value)
              switch (g.type) {
                case "text":
                  c.push({
                    functionResponse: {
                      name: d.toolName,
                      response: {
                        name: d.toolName,
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
                name: d.toolName,
                response: {
                  name: d.toolName,
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
var dv = Y(
  () => z(
    p({
      responseModalities: P(X(["TEXT", "IMAGE"])).optional(),
      thinkingConfig: p({
        thinkingBudget: k().optional(),
        includeThoughts: B().optional(),
        // https://ai.google.dev/gemini-api/docs/gemini-3?thinking=high#thinking_level
        thinkingLevel: X(["low", "medium", "high"]).optional()
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
      structuredOutputs: B().optional(),
      /**
       * Optional. A list of unique safety settings for blocking unsafe content.
       */
      safetySettings: P(
        p({
          category: X([
            "HARM_CATEGORY_UNSPECIFIED",
            "HARM_CATEGORY_HATE_SPEECH",
            "HARM_CATEGORY_DANGEROUS_CONTENT",
            "HARM_CATEGORY_HARASSMENT",
            "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "HARM_CATEGORY_CIVIC_INTEGRITY"
          ]),
          threshold: X([
            "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
            "BLOCK_LOW_AND_ABOVE",
            "BLOCK_MEDIUM_AND_ABOVE",
            "BLOCK_ONLY_HIGH",
            "BLOCK_NONE",
            "OFF"
          ])
        })
      ).optional(),
      threshold: X([
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
      audioTimestamp: B().optional(),
      /**
       * Optional. Defines labels used in billing reports. Available on Vertex AI only.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls
       */
      labels: $e(l(), l()).optional(),
      /**
       * Optional. If specified, the media resolution specified will be used.
       *
       * https://ai.google.dev/api/generate-content#MediaResolution
       */
      mediaResolution: X([
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
      imageConfig: p({
        aspectRatio: X([
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
        imageSize: X(["1K", "2K", "4K"]).optional()
      }).optional()
    })
  )
);
function pv({
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
  const c = e.some((f) => f.type === "function"), d = e.some(
    (f) => f.type === "provider-defined"
  );
  if (c && d) {
    const f = e.filter((y) => y.type === "function");
    o.push({
      type: "unsupported-tool",
      tool: e.find((y) => y.type === "function"),
      details: `Cannot mix function tools with provider-defined tools in the same request. Falling back to provider-defined tools only. The following function tools will be ignored: ${f.map((y) => y.name).join(", ")}. Please use either function tools or provider-defined tools, but not both.`
    });
  }
  if (d) {
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
      throw new xe({
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
var fv = class {
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
    tools: d,
    toolChoice: m,
    providerOptions: g
  }) {
    var f;
    const y = [], _ = await Ve({
      provider: "google",
      providerOptions: g,
      schema: dv
    });
    d != null && d.some(
      (O) => O.type === "provider-defined" && O.id === "google.vertex_rag_store"
    ) && !this.config.provider.startsWith("google.vertex.") && y.push({
      type: "other",
      message: `The 'vertex_rag_store' tool is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
    });
    const w = this.modelId.toLowerCase().startsWith("gemma-"), { contents: h, systemInstruction: v } = cv(
      e,
      { isGemmaModel: w }
    ), {
      tools: b,
      toolConfig: I,
      toolWarnings: E
    } = pv({
      tools: d,
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
        systemInstruction: w ? void 0 : v,
        safetySettings: _ == null ? void 0 : _.safetySettings,
        tools: b,
        toolConfig: I,
        cachedContent: _ == null ? void 0 : _.cachedContent,
        labels: _ == null ? void 0 : _.labels
      },
      warnings: [...y, ...E]
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, d, m, g, f;
    const { args: y, warnings: _ } = await this.getArgs(e), w = JSON.stringify(y), h = Re(
      await Ae(this.config.headers),
      e.headers
    ), {
      responseHeaders: v,
      value: b,
      rawValue: I
    } = await Se({
      url: `${this.config.baseURL}/${xa(
        this.modelId
      )}:generateContent`,
      headers: h,
      body: y,
      failedResponseHandler: Sn,
      successfulResponseHandler: Ue(hv),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), E = b.candidates[0], O = [], S = (n = (t = E.content) == null ? void 0 : t.parts) != null ? n : [], M = b.usageMetadata;
    let R;
    for (const j of S)
      if ("executableCode" in j && ((r = j.executableCode) != null && r.code)) {
        const D = this.config.generateId();
        R = D, O.push({
          type: "tool-call",
          toolCallId: D,
          toolName: "code_execution",
          input: JSON.stringify(j.executableCode),
          providerExecuted: !0
        });
      } else "codeExecutionResult" in j && j.codeExecutionResult ? (O.push({
        type: "tool-result",
        // Assumes a result directly follows its corresponding call part.
        toolCallId: R,
        toolName: "code_execution",
        result: {
          outcome: j.codeExecutionResult.outcome,
          output: j.codeExecutionResult.output
        },
        providerExecuted: !0
      }), R = void 0) : "text" in j && j.text != null && j.text.length > 0 ? O.push({
        type: j.thought === !0 ? "reasoning" : "text",
        text: j.text,
        providerMetadata: j.thoughtSignature ? { google: { thoughtSignature: j.thoughtSignature } } : void 0
      }) : "functionCall" in j ? O.push({
        type: "tool-call",
        toolCallId: this.config.generateId(),
        toolName: j.functionCall.name,
        input: JSON.stringify(j.functionCall.args),
        providerMetadata: j.thoughtSignature ? { google: { thoughtSignature: j.thoughtSignature } } : void 0
      }) : "inlineData" in j && O.push({
        type: "file",
        data: j.inlineData.data,
        mediaType: j.inlineData.mimeType
      });
    const A = (o = ka({
      groundingMetadata: E.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? o : [];
    for (const j of A)
      O.push(j);
    return {
      content: O,
      finishReason: Ia({
        finishReason: E.finishReason,
        hasToolCalls: O.some((j) => j.type === "tool-call")
      }),
      usage: {
        inputTokens: (a = M == null ? void 0 : M.promptTokenCount) != null ? a : void 0,
        outputTokens: (s = M == null ? void 0 : M.candidatesTokenCount) != null ? s : void 0,
        totalTokens: (i = M == null ? void 0 : M.totalTokenCount) != null ? i : void 0,
        reasoningTokens: (u = M == null ? void 0 : M.thoughtsTokenCount) != null ? u : void 0,
        cachedInputTokens: (c = M == null ? void 0 : M.cachedContentTokenCount) != null ? c : void 0
      },
      warnings: _,
      providerMetadata: {
        google: {
          promptFeedback: (d = b.promptFeedback) != null ? d : null,
          groundingMetadata: (m = E.groundingMetadata) != null ? m : null,
          urlContextMetadata: (g = E.urlContextMetadata) != null ? g : null,
          safetyRatings: (f = E.safetyRatings) != null ? f : null,
          usageMetadata: M ?? null
        }
      },
      request: { body: w },
      response: {
        // TODO timestamp, model id, id
        headers: v,
        body: I
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = JSON.stringify(t), o = Re(
      await Ae(this.config.headers),
      e.headers
    ), { responseHeaders: a, value: s } = await Se({
      url: `${this.config.baseURL}/${xa(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers: o,
      body: t,
      failedResponseHandler: Sn,
      successfulResponseHandler: Gt(gv),
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
    const d = this.config.generateId;
    let m = !1, g = null, f = null, y = 0;
    const _ = /* @__PURE__ */ new Set();
    let w;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(h) {
            h.enqueue({ type: "stream-start", warnings: n });
          },
          transform(h, v) {
            var b, I, E, O, S, M, R, A, j, D, q, C;
            if (e.includeRawChunks && v.enqueue({ type: "raw", rawValue: h.rawValue }), !h.success) {
              v.enqueue({ type: "error", error: h.error });
              return;
            }
            const F = h.value, N = F.usageMetadata;
            N != null && (u.inputTokens = (b = N.promptTokenCount) != null ? b : void 0, u.outputTokens = (I = N.candidatesTokenCount) != null ? I : void 0, u.totalTokens = (E = N.totalTokenCount) != null ? E : void 0, u.reasoningTokens = (O = N.thoughtsTokenCount) != null ? O : void 0, u.cachedInputTokens = (S = N.cachedContentTokenCount) != null ? S : void 0);
            const U = (M = F.candidates) == null ? void 0 : M[0];
            if (U == null)
              return;
            const Q = U.content, Oe = ka({
              groundingMetadata: U.groundingMetadata,
              generateId: d
            });
            if (Oe != null)
              for (const oe of Oe)
                oe.sourceType === "url" && !_.has(oe.url) && (_.add(oe.url), v.enqueue(oe));
            if (Q != null) {
              const oe = (R = Q.parts) != null ? R : [];
              for (const Z of oe)
                if ("executableCode" in Z && ((A = Z.executableCode) != null && A.code)) {
                  const re = d();
                  w = re, v.enqueue({
                    type: "tool-call",
                    toolCallId: re,
                    toolName: "code_execution",
                    input: JSON.stringify(Z.executableCode),
                    providerExecuted: !0
                  }), m = !0;
                } else if ("codeExecutionResult" in Z && Z.codeExecutionResult) {
                  const re = w;
                  re && (v.enqueue({
                    type: "tool-result",
                    toolCallId: re,
                    toolName: "code_execution",
                    result: {
                      outcome: Z.codeExecutionResult.outcome,
                      output: Z.codeExecutionResult.output
                    },
                    providerExecuted: !0
                  }), w = void 0);
                } else "text" in Z && Z.text != null && Z.text.length > 0 ? Z.thought === !0 ? (g !== null && (v.enqueue({
                  type: "text-end",
                  id: g
                }), g = null), f === null && (f = String(y++), v.enqueue({
                  type: "reasoning-start",
                  id: f,
                  providerMetadata: Z.thoughtSignature ? {
                    google: {
                      thoughtSignature: Z.thoughtSignature
                    }
                  } : void 0
                })), v.enqueue({
                  type: "reasoning-delta",
                  id: f,
                  delta: Z.text,
                  providerMetadata: Z.thoughtSignature ? {
                    google: { thoughtSignature: Z.thoughtSignature }
                  } : void 0
                })) : (f !== null && (v.enqueue({
                  type: "reasoning-end",
                  id: f
                }), f = null), g === null && (g = String(y++), v.enqueue({
                  type: "text-start",
                  id: g,
                  providerMetadata: Z.thoughtSignature ? {
                    google: {
                      thoughtSignature: Z.thoughtSignature
                    }
                  } : void 0
                })), v.enqueue({
                  type: "text-delta",
                  id: g,
                  delta: Z.text,
                  providerMetadata: Z.thoughtSignature ? {
                    google: { thoughtSignature: Z.thoughtSignature }
                  } : void 0
                })) : "inlineData" in Z && v.enqueue({
                  type: "file",
                  mediaType: Z.inlineData.mimeType,
                  data: Z.inlineData.data
                });
              const Pe = mv({
                parts: Q.parts,
                generateId: d
              });
              if (Pe != null)
                for (const Z of Pe)
                  v.enqueue({
                    type: "tool-input-start",
                    id: Z.toolCallId,
                    toolName: Z.toolName,
                    providerMetadata: Z.providerMetadata
                  }), v.enqueue({
                    type: "tool-input-delta",
                    id: Z.toolCallId,
                    delta: Z.args,
                    providerMetadata: Z.providerMetadata
                  }), v.enqueue({
                    type: "tool-input-end",
                    id: Z.toolCallId,
                    providerMetadata: Z.providerMetadata
                  }), v.enqueue({
                    type: "tool-call",
                    toolCallId: Z.toolCallId,
                    toolName: Z.toolName,
                    input: Z.args,
                    providerMetadata: Z.providerMetadata
                  }), m = !0;
            }
            U.finishReason != null && (i = Ia({
              finishReason: U.finishReason,
              hasToolCalls: m
            }), c = {
              google: {
                promptFeedback: (j = F.promptFeedback) != null ? j : null,
                groundingMetadata: (D = U.groundingMetadata) != null ? D : null,
                urlContextMetadata: (q = U.urlContextMetadata) != null ? q : null,
                safetyRatings: (C = U.safetyRatings) != null ? C : null
              }
            }, N != null && (c.google.usageMetadata = N));
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
function mv({
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
        const d = (o = i.retrievedContext.title) != null ? o : "Unknown Document";
        let m = "application/octet-stream", g;
        u.endsWith(".pdf") ? (m = "application/pdf", g = u.split("/").pop()) : u.endsWith(".txt") ? (m = "text/plain", g = u.split("/").pop()) : u.endsWith(".docx") ? (m = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", g = u.split("/").pop()) : u.endsWith(".doc") ? (m = "application/msword", g = u.split("/").pop()) : (u.match(/\.(md|markdown)$/) && (m = "text/markdown"), g = u.split("/").pop()), s.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: m,
          title: d,
          filename: g
        });
      } else if (c) {
        const d = (a = i.retrievedContext.title) != null ? a : "Unknown Document";
        s.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: "application/octet-stream",
          title: d,
          filename: c.split("/").pop()
        });
      }
    }
  return s.length > 0 ? s : void 0;
}
var Xi = () => p({
  webSearchQueries: P(l()).nullish(),
  retrievalQueries: P(l()).nullish(),
  searchEntryPoint: p({ renderedContent: l() }).nullish(),
  groundingChunks: P(
    p({
      web: p({ uri: l(), title: l().nullish() }).nullish(),
      retrievedContext: p({
        uri: l().nullish(),
        title: l().nullish(),
        text: l().nullish(),
        fileSearchStore: l().nullish()
      }).nullish()
    })
  ).nullish(),
  groundingSupports: P(
    p({
      segment: p({
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
  retrievalMetadata: ne([
    p({
      webDynamicRetrievalScore: k()
    }),
    p({})
  ]).nullish()
}), Qi = () => p({
  parts: P(
    ne([
      // note: order matters since text can be fully empty
      p({
        functionCall: p({
          name: l(),
          args: ie()
        }),
        thoughtSignature: l().nullish()
      }),
      p({
        inlineData: p({
          mimeType: l(),
          data: l()
        })
      }),
      p({
        executableCode: p({
          language: l(),
          code: l()
        }).nullish(),
        codeExecutionResult: p({
          outcome: l(),
          output: l()
        }).nullish(),
        text: l().nullish(),
        thought: B().nullish(),
        thoughtSignature: l().nullish()
      })
    ])
  ).nullish()
}), tr = () => p({
  category: l().nullish(),
  probability: l().nullish(),
  probabilityScore: k().nullish(),
  severity: l().nullish(),
  severityScore: k().nullish(),
  blocked: B().nullish()
}), el = p({
  cachedContentTokenCount: k().nullish(),
  thoughtsTokenCount: k().nullish(),
  promptTokenCount: k().nullish(),
  candidatesTokenCount: k().nullish(),
  totalTokenCount: k().nullish(),
  // https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/GenerateContentResponse#TrafficType
  trafficType: l().nullish()
}), tl = () => p({
  urlMetadata: P(
    p({
      retrievedUrl: l(),
      urlRetrievalStatus: l()
    })
  )
}), hv = Y(
  () => z(
    p({
      candidates: P(
        p({
          content: Qi().nullish().or(p({}).strict()),
          finishReason: l().nullish(),
          safetyRatings: P(tr()).nullish(),
          groundingMetadata: Xi().nullish(),
          urlContextMetadata: tl().nullish()
        })
      ),
      usageMetadata: el.nullish(),
      promptFeedback: p({
        blockReason: l().nullish(),
        safetyRatings: P(tr()).nullish()
      }).nullish()
    })
  )
), gv = Y(
  () => z(
    p({
      candidates: P(
        p({
          content: Qi().nullish(),
          finishReason: l().nullish(),
          safetyRatings: P(tr()).nullish(),
          groundingMetadata: Xi().nullish(),
          urlContextMetadata: tl().nullish()
        })
      ).nullish(),
      usageMetadata: el.nullish(),
      promptFeedback: p({
        blockReason: l().nullish(),
        safetyRatings: P(tr()).nullish()
      }).nullish()
    })
  )
), vv = ht({
  id: "google.code_execution",
  name: "code_execution",
  inputSchema: p({
    language: l().describe("The programming language of the code."),
    code: l().describe("The code to be executed.")
  }),
  outputSchema: p({
    outcome: l().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
    output: l().describe("The output from the code execution.")
  })
}), yv = p({
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
}).passthrough(), _v = Y(
  () => z(yv)
), bv = at({
  id: "google.file_search",
  name: "file_search",
  inputSchema: _v
}), wv = at({
  id: "google.google_search",
  name: "google_search",
  inputSchema: Y(
    () => z(
      p({
        mode: X(["MODE_DYNAMIC", "MODE_UNSPECIFIED"]).default("MODE_UNSPECIFIED"),
        dynamicThreshold: k().default(1)
      })
    )
  )
}), xv = at({
  id: "google.url_context",
  name: "url_context",
  inputSchema: Y(() => z(p({})))
}), Iv = at({
  id: "google.vertex_rag_store",
  name: "vertex_rag_store",
  inputSchema: p({
    ragCorpus: l(),
    topK: k().optional()
  })
}), kv = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch: wv,
  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext: xv,
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
  fileSearch: bv,
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
  codeExecution: vv,
  /**
   * Creates a Vertex RAG Store tool that enables the model to perform RAG searches against a Vertex RAG Store.
   * Must have name "vertex_rag_store".
   */
  vertexRagStore: Iv
}, Tv = class {
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
      headers: d,
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
      schema: Ev
    }), y = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), _ = {
      sampleCount: a
    };
    i != null && (_.aspectRatio = i), f && Object.assign(_, f);
    const w = {
      instances: [{ prompt: o }],
      parameters: _
    }, { responseHeaders: h, value: v } = await Se({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: Re(await Ae(this.config.headers), d),
      body: w,
      failedResponseHandler: Sn,
      successfulResponseHandler: Ue(
        Sv
      ),
      abortSignal: m,
      fetch: this.config.fetch
    });
    return {
      images: v.predictions.map(
        (b) => b.bytesBase64Encoded
      ),
      warnings: g ?? [],
      providerMetadata: {
        google: {
          images: v.predictions.map((b) => ({
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
}, Sv = Y(
  () => z(
    p({
      predictions: P(p({ bytesBase64Encoded: l() })).default([])
    })
  )
), Ev = Y(
  () => z(
    p({
      personGeneration: X(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      aspectRatio: X(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish()
    })
  )
);
function Cv(e = {}) {
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
    `ai-sdk/google/${rv}`
  ), s = (d) => {
    var m;
    return new fv(d, {
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
  }, i = (d) => new sv(d, {
    provider: o,
    baseURL: r,
    headers: a,
    fetch: e.fetch
  }), u = (d, m = {}) => new Tv(d, m, {
    provider: o,
    baseURL: r,
    headers: a,
    fetch: e.fetch
  }), c = function(d) {
    if (new.target)
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    return s(d);
  };
  return c.languageModel = s, c.chat = s, c.generativeAI = s, c.embedding = i, c.textEmbedding = i, c.textEmbeddingModel = i, c.image = u, c.imageModel = u, c.tools = kv, c;
}
Cv();
function Mv(e) {
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
                  throw new xe({
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
var Rv = p({
  /**
  Whether to inject a safety prompt before all conversations.
  
  Defaults to `false`.
     */
  safePrompt: B().optional(),
  documentImageLimit: k().optional(),
  documentPageLimit: k().optional(),
  /**
   * Whether to use structured outputs.
   *
   * @default true
   */
  structuredOutputs: B().optional(),
  /**
   * Whether to use strict JSON schema validation.
   *
   * @default false
   */
  strictJsonSchema: B().optional(),
  /**
   * Whether to enable parallel function calling during tool use.
   * When set to false, the model will use at most one tool per response.
   *
   * @default true
   */
  parallelToolCalls: B().optional()
}), Ov = p({
  object: x("error"),
  message: l(),
  type: l(),
  param: l().nullable(),
  code: l().nullable()
}), Qr = bt({
  errorSchema: Ov,
  errorToMessage: (e) => e.message
});
function Nv({
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
      throw new xe({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
var Av = class {
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
    providerOptions: d,
    tools: m,
    toolChoice: g
  }) {
    var f, y, _, w;
    const h = [], v = (f = await Ve({
      provider: "mistral",
      providerOptions: d,
      schema: Rv
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
    const b = (y = v.structuredOutputs) != null ? y : !0, I = (_ = v.strictJsonSchema) != null ? _ : !1;
    (u == null ? void 0 : u.type) === "json" && !(u != null && u.schema) && (e = eh({
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
      response_format: (u == null ? void 0 : u.type) === "json" ? b && (u == null ? void 0 : u.schema) != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: I,
          name: (w = u.name) != null ? w : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: v.documentImageLimit,
      document_page_limit: v.documentPageLimit,
      // messages:
      messages: Mv(e)
    }, {
      tools: O,
      toolChoice: S,
      toolWarnings: M
    } = Nv({
      tools: m,
      toolChoice: g
    });
    return {
      args: {
        ...E,
        tools: O,
        tool_choice: S,
        ...O != null && v.parallelToolCalls !== void 0 ? { parallel_tool_calls: v.parallelToolCalls } : {}
      },
      warnings: [...h, ...M]
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: n } = await this.getArgs(e), {
      responseHeaders: r,
      value: o,
      rawValue: a
    } = await Se({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Re(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: Qr,
      successfulResponseHandler: Ue(
        $v
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
    const { args: t, warnings: n } = await this.getArgs(e), r = { ...t, stream: !0 }, { responseHeaders: o, value: a } = await Se({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Re(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: Qr,
      successfulResponseHandler: Gt(
        Pv
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
    let u = !0, c = !1, d = null;
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
            const _ = y.choices[0], w = _.delta, h = Ca(w.content);
            if (w.content != null && Array.isArray(w.content)) {
              for (const v of w.content)
                if (v.type === "thinking") {
                  const b = Ea(v.thinking);
                  b.length > 0 && (d == null && (c && (f.enqueue({ type: "text-end", id: "0" }), c = !1), d = m(), f.enqueue({
                    type: "reasoning-start",
                    id: d
                  })), f.enqueue({
                    type: "reasoning-delta",
                    id: d,
                    delta: b
                  }));
                }
            }
            if (h != null && h.length > 0 && (c || (d != null && (f.enqueue({
              type: "reasoning-end",
              id: d
            }), d = null), f.enqueue({ type: "text-start", id: "0" }), c = !0), f.enqueue({
              type: "text-delta",
              id: "0",
              delta: h
            })), (w == null ? void 0 : w.tool_calls) != null)
              for (const v of w.tool_calls) {
                const b = v.id, I = v.function.name, E = v.function.arguments;
                f.enqueue({
                  type: "tool-input-start",
                  id: b,
                  toolName: I
                }), f.enqueue({
                  type: "tool-input-delta",
                  id: b,
                  delta: E
                }), f.enqueue({
                  type: "tool-input-end",
                  id: b
                }), f.enqueue({
                  type: "tool-call",
                  toolCallId: b,
                  toolName: I,
                  input: E
                });
              }
            _.finish_reason != null && (s = Sa(_.finish_reason));
          },
          flush(g) {
            d != null && g.enqueue({
              type: "reasoning-end",
              id: d
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
var nl = ne([
  l(),
  P(
    ce("type", [
      p({
        type: x("text"),
        text: l()
      }),
      p({
        type: x("image_url"),
        image_url: ne([
          l(),
          p({
            url: l(),
            detail: l().nullable()
          })
        ])
      }),
      p({
        type: x("reference"),
        reference_ids: P(k())
      }),
      p({
        type: x("thinking"),
        thinking: P(
          p({
            type: x("text"),
            text: l()
          })
        )
      })
    ])
  )
]).nullish(), rl = p({
  prompt_tokens: k(),
  completion_tokens: k(),
  total_tokens: k()
}), $v = p({
  id: l().nullish(),
  created: k().nullish(),
  model: l().nullish(),
  choices: P(
    p({
      message: p({
        role: x("assistant"),
        content: nl,
        tool_calls: P(
          p({
            id: l(),
            function: p({ name: l(), arguments: l() })
          })
        ).nullish()
      }),
      index: k(),
      finish_reason: l().nullish()
    })
  ),
  object: x("chat.completion"),
  usage: rl
}), Pv = p({
  id: l().nullish(),
  created: k().nullish(),
  model: l().nullish(),
  choices: P(
    p({
      delta: p({
        role: X(["assistant"]).optional(),
        content: nl,
        tool_calls: P(
          p({
            id: l(),
            function: p({ name: l(), arguments: l() })
          })
        ).nullish()
      }),
      finish_reason: l().nullish(),
      index: k()
    })
  ),
  usage: rl.nullish()
}), jv = class {
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
    } = await Se({
      url: `${this.config.baseURL}/embeddings`,
      headers: Re(this.config.headers(), n),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Qr,
      successfulResponseHandler: Ue(
        qv
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
}, qv = p({
  data: P(p({ embedding: P(k()) })),
  usage: p({ prompt_tokens: k() }).nullish()
}), Dv = "2.0.24";
function zv(e = {}) {
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
    `ai-sdk/mistral/${Dv}`
  ), o = (i) => new Av(i, {
    provider: "mistral.chat",
    baseURL: n,
    headers: r,
    fetch: e.fetch,
    generateId: e.generateId
  }), a = (i) => new jv(i, {
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
zv();
var wo = p({
  error: p({
    message: l(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l().nullish(),
    param: pt().nullish(),
    code: ne([l(), k()]).nullish()
  })
}), wt = bt({
  errorSchema: wo,
  errorToMessage: (e) => e.error.message
});
function Uv({
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
            var u, c, d;
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
                    throw new xe({
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
                      throw new xe({
                        functionality: `audio content parts with media type ${s.mediaType}`
                      });
                  }
                } else if (s.mediaType === "application/pdf") {
                  if (s.data instanceof URL)
                    throw new xe({
                      functionality: "PDF file parts with URLs"
                    });
                  return {
                    type: "file",
                    file: typeof s.data == "string" && s.data.startsWith("file-") ? { file_id: s.data } : {
                      filename: (d = s.filename) != null ? d : `part-${i}.pdf`,
                      file_data: `data:application/pdf;base64,${ft(s.data)}`
                    }
                  };
                } else
                  throw new xe({
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
var Zv = Ce(
  () => z(
    p({
      id: l().nullish(),
      created: k().nullish(),
      model: l().nullish(),
      choices: P(
        p({
          message: p({
            role: x("assistant").nullish(),
            content: l().nullish(),
            tool_calls: P(
              p({
                id: l().nullish(),
                type: x("function"),
                function: p({
                  name: l(),
                  arguments: l()
                })
              })
            ).nullish(),
            annotations: P(
              p({
                type: x("url_citation"),
                start_index: k(),
                end_index: k(),
                url: l(),
                title: l()
              })
            ).nullish()
          }),
          index: k(),
          logprobs: p({
            content: P(
              p({
                token: l(),
                logprob: k(),
                top_logprobs: P(
                  p({
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
      usage: p({
        prompt_tokens: k().nullish(),
        completion_tokens: k().nullish(),
        total_tokens: k().nullish(),
        prompt_tokens_details: p({
          cached_tokens: k().nullish()
        }).nullish(),
        completion_tokens_details: p({
          reasoning_tokens: k().nullish(),
          accepted_prediction_tokens: k().nullish(),
          rejected_prediction_tokens: k().nullish()
        }).nullish()
      }).nullish()
    })
  )
), Lv = Ce(
  () => z(
    ne([
      p({
        id: l().nullish(),
        created: k().nullish(),
        model: l().nullish(),
        choices: P(
          p({
            delta: p({
              role: X(["assistant"]).nullish(),
              content: l().nullish(),
              tool_calls: P(
                p({
                  index: k(),
                  id: l().nullish(),
                  type: x("function").nullish(),
                  function: p({
                    name: l().nullish(),
                    arguments: l().nullish()
                  })
                })
              ).nullish(),
              annotations: P(
                p({
                  type: x("url_citation"),
                  start_index: k(),
                  end_index: k(),
                  url: l(),
                  title: l()
                })
              ).nullish()
            }).nullish(),
            logprobs: p({
              content: P(
                p({
                  token: l(),
                  logprob: k(),
                  top_logprobs: P(
                    p({
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
        usage: p({
          prompt_tokens: k().nullish(),
          completion_tokens: k().nullish(),
          total_tokens: k().nullish(),
          prompt_tokens_details: p({
            cached_tokens: k().nullish()
          }).nullish(),
          completion_tokens_details: p({
            reasoning_tokens: k().nullish(),
            accepted_prediction_tokens: k().nullish(),
            rejected_prediction_tokens: k().nullish()
          }).nullish()
        }).nullish()
      }),
      wo
    ])
  )
), Fv = Ce(
  () => z(
    p({
      /**
       * Modify the likelihood of specified tokens appearing in the completion.
       *
       * Accepts a JSON object that maps tokens (specified by their token ID in
       * the GPT tokenizer) to an associated bias value from -100 to 100.
       */
      logitBias: $e(Jm(), k()).optional(),
      /**
       * Return the log probabilities of the tokens.
       *
       * Setting to true will return the log probabilities of the tokens that
       * were generated.
       *
       * Setting to a number will return the log probabilities of the top n
       * tokens that were generated.
       */
      logprobs: ne([B(), k()]).optional(),
      /**
       * Whether to enable parallel function calling during tool use. Default to true.
       */
      parallelToolCalls: B().optional(),
      /**
       * A unique identifier representing your end-user, which can help OpenAI to
       * monitor and detect abuse.
       */
      user: l().optional(),
      /**
       * Reasoning effort for reasoning models. Defaults to `medium`.
       */
      reasoningEffort: X(["none", "minimal", "low", "medium", "high"]).optional(),
      /**
       * Maximum number of completion tokens to generate. Useful for reasoning models.
       */
      maxCompletionTokens: k().optional(),
      /**
       * Whether to enable persistence in responses API.
       */
      store: B().optional(),
      /**
       * Metadata to associate with the request.
       */
      metadata: $e(l().max(64), l().max(512)).optional(),
      /**
       * Parameters for prediction mode.
       */
      prediction: $e(l(), pt()).optional(),
      /**
       * Whether to use structured outputs.
       *
       * @default true
       */
      structuredOutputs: B().optional(),
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
      serviceTier: X(["auto", "flex", "priority", "default"]).optional(),
      /**
       * Whether to use strict JSON schema validation.
       *
       * @default false
       */
      strictJsonSchema: B().optional(),
      /**
       * Controls the verbosity of the model's responses.
       * Lower values will result in more concise responses, while higher values will result in more verbose responses.
       */
      textVerbosity: X(["low", "medium", "high"]).optional(),
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
      promptCacheRetention: X(["in_memory", "24h"]).optional(),
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
function Vv({
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
      throw new xe({
        functionality: `tool choice type: ${i}`
      });
    }
  }
}
var Gv = class {
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
    tools: d,
    toolChoice: m,
    providerOptions: g
  }) {
    var f, y, _, w;
    const h = [], v = (f = await Ve({
      provider: "openai",
      providerOptions: g,
      schema: Fv
    })) != null ? f : {}, b = (y = v.structuredOutputs) != null ? y : !0;
    o != null && h.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (u == null ? void 0 : u.type) === "json" && u.schema != null && !b && h.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const { messages: I, warnings: E } = Uv(
      {
        prompt: e,
        systemMessageMode: Hv(this.modelId)
      }
    );
    h.push(...E);
    const O = (_ = v.strictJsonSchema) != null ? _ : !1, S = {
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
      response_format: (u == null ? void 0 : u.type) === "json" ? b && u.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: O,
          name: (w = u.name) != null ? w : "response",
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
      messages: I
    };
    ol(this.modelId) ? (S.temperature != null && (S.temperature = void 0, h.push({
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
    })), v.serviceTier === "flex" && !Bv(this.modelId) && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), S.service_tier = void 0), v.serviceTier === "priority" && !Jv(this.modelId) && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), S.service_tier = void 0);
    const {
      tools: M,
      toolChoice: R,
      toolWarnings: A
    } = Vv({
      tools: d,
      toolChoice: m,
      structuredOutputs: b,
      strictJsonSchema: O
    });
    return {
      args: {
        ...S,
        tools: M,
        tool_choice: R
      },
      warnings: [...h, ...A]
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, d, m, g, f, y;
    const { args: _, warnings: w } = await this.getArgs(e), {
      responseHeaders: h,
      value: v,
      rawValue: b
    } = await Se({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), e.headers),
      body: _,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        Zv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), I = v.choices[0], E = [], O = I.message.content;
    O != null && O.length > 0 && E.push({ type: "text", text: O });
    for (const A of (t = I.message.tool_calls) != null ? t : [])
      E.push({
        type: "tool-call",
        toolCallId: (n = A.id) != null ? n : Fe(),
        toolName: A.function.name,
        input: A.function.arguments
      });
    for (const A of (r = I.message.annotations) != null ? r : [])
      E.push({
        type: "source",
        sourceType: "url",
        id: Fe(),
        url: A.url,
        title: A.title
      });
    const S = (o = v.usage) == null ? void 0 : o.completion_tokens_details, M = (a = v.usage) == null ? void 0 : a.prompt_tokens_details, R = { openai: {} };
    return (S == null ? void 0 : S.accepted_prediction_tokens) != null && (R.openai.acceptedPredictionTokens = S == null ? void 0 : S.accepted_prediction_tokens), (S == null ? void 0 : S.rejected_prediction_tokens) != null && (R.openai.rejectedPredictionTokens = S == null ? void 0 : S.rejected_prediction_tokens), ((s = I.logprobs) == null ? void 0 : s.content) != null && (R.openai.logprobs = I.logprobs.content), {
      content: E,
      finishReason: Ma(I.finish_reason),
      usage: {
        inputTokens: (u = (i = v.usage) == null ? void 0 : i.prompt_tokens) != null ? u : void 0,
        outputTokens: (d = (c = v.usage) == null ? void 0 : c.completion_tokens) != null ? d : void 0,
        totalTokens: (g = (m = v.usage) == null ? void 0 : m.total_tokens) != null ? g : void 0,
        reasoningTokens: (f = S == null ? void 0 : S.reasoning_tokens) != null ? f : void 0,
        cachedInputTokens: (y = M == null ? void 0 : M.cached_tokens) != null ? y : void 0
      },
      request: { body: _ },
      response: {
        ...Nr(v),
        headers: h,
        body: b
      },
      warnings: w,
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
    }, { responseHeaders: o, value: a } = await Se({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: wt,
      successfulResponseHandler: Gt(
        Lv
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
    let c = !1, d = !1;
    const m = { openai: {} };
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(g) {
            g.enqueue({ type: "stream-start", warnings: n });
          },
          transform(g, f) {
            var y, _, w, h, v, b, I, E, O, S, M, R, A, j, D, q, C, F, N, U, Q, Oe, oe, Pe;
            if (e.includeRawChunks && f.enqueue({ type: "raw", rawValue: g.rawValue }), !g.success) {
              i = "error", f.enqueue({ type: "error", error: g.error });
              return;
            }
            const Z = g.value;
            if ("error" in Z) {
              i = "error", f.enqueue({ type: "error", error: Z.error });
              return;
            }
            if (!c) {
              const T = Nr(Z);
              Object.values(T).some(Boolean) && (c = !0, f.enqueue({
                type: "response-metadata",
                ...Nr(Z)
              }));
            }
            Z.usage != null && (u.inputTokens = (y = Z.usage.prompt_tokens) != null ? y : void 0, u.outputTokens = (_ = Z.usage.completion_tokens) != null ? _ : void 0, u.totalTokens = (w = Z.usage.total_tokens) != null ? w : void 0, u.reasoningTokens = (v = (h = Z.usage.completion_tokens_details) == null ? void 0 : h.reasoning_tokens) != null ? v : void 0, u.cachedInputTokens = (I = (b = Z.usage.prompt_tokens_details) == null ? void 0 : b.cached_tokens) != null ? I : void 0, ((E = Z.usage.completion_tokens_details) == null ? void 0 : E.accepted_prediction_tokens) != null && (m.openai.acceptedPredictionTokens = (O = Z.usage.completion_tokens_details) == null ? void 0 : O.accepted_prediction_tokens), ((S = Z.usage.completion_tokens_details) == null ? void 0 : S.rejected_prediction_tokens) != null && (m.openai.rejectedPredictionTokens = (M = Z.usage.completion_tokens_details) == null ? void 0 : M.rejected_prediction_tokens));
            const re = Z.choices[0];
            if ((re == null ? void 0 : re.finish_reason) != null && (i = Ma(re.finish_reason)), ((R = re == null ? void 0 : re.logprobs) == null ? void 0 : R.content) != null && (m.openai.logprobs = re.logprobs.content), (re == null ? void 0 : re.delta) == null)
              return;
            const he = re.delta;
            if (he.content != null && (d || (f.enqueue({ type: "text-start", id: "0" }), d = !0), f.enqueue({
              type: "text-delta",
              id: "0",
              delta: he.content
            })), he.tool_calls != null)
              for (const T of he.tool_calls) {
                const H = T.index;
                if (s[H] == null) {
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
                  if (((A = T.function) == null ? void 0 : A.name) == null)
                    throw new Sr({
                      data: T,
                      message: "Expected 'function.name' to be a string."
                    });
                  f.enqueue({
                    type: "tool-input-start",
                    id: T.id,
                    toolName: T.function.name
                  }), s[H] = {
                    id: T.id,
                    type: "function",
                    function: {
                      name: T.function.name,
                      arguments: (j = T.function.arguments) != null ? j : ""
                    },
                    hasFinished: !1
                  };
                  const pe = s[H];
                  ((D = pe.function) == null ? void 0 : D.name) != null && ((q = pe.function) == null ? void 0 : q.arguments) != null && (pe.function.arguments.length > 0 && f.enqueue({
                    type: "tool-input-delta",
                    id: pe.id,
                    delta: pe.function.arguments
                  }), ma(pe.function.arguments) && (f.enqueue({
                    type: "tool-input-end",
                    id: pe.id
                  }), f.enqueue({
                    type: "tool-call",
                    toolCallId: (C = pe.id) != null ? C : Fe(),
                    toolName: pe.function.name,
                    input: pe.function.arguments
                  }), pe.hasFinished = !0));
                  continue;
                }
                const ue = s[H];
                ue.hasFinished || (((F = T.function) == null ? void 0 : F.arguments) != null && (ue.function.arguments += (U = (N = T.function) == null ? void 0 : N.arguments) != null ? U : ""), f.enqueue({
                  type: "tool-input-delta",
                  id: ue.id,
                  delta: (Q = T.function.arguments) != null ? Q : ""
                }), ((Oe = ue.function) == null ? void 0 : Oe.name) != null && ((oe = ue.function) == null ? void 0 : oe.arguments) != null && ma(ue.function.arguments) && (f.enqueue({
                  type: "tool-input-end",
                  id: ue.id
                }), f.enqueue({
                  type: "tool-call",
                  toolCallId: (Pe = ue.id) != null ? Pe : Fe(),
                  toolName: ue.function.name,
                  input: ue.function.arguments
                }), ue.hasFinished = !0));
              }
            if (he.annotations != null)
              for (const T of he.annotations)
                f.enqueue({
                  type: "source",
                  sourceType: "url",
                  id: Fe(),
                  url: T.url,
                  title: T.title
                });
          },
          flush(g) {
            d && g.enqueue({ type: "text-end", id: "0" }), g.enqueue({
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
function ol(e) {
  return (e.startsWith("o") || e.startsWith("gpt-5")) && !e.startsWith("gpt-5-chat");
}
function Bv(e) {
  return e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat");
}
function Jv(e) {
  return e.startsWith("gpt-4") || e.startsWith("gpt-5-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") || e.startsWith("o3") || e.startsWith("o4-mini");
}
function Hv(e) {
  var t, n;
  return ol(e) ? (n = (t = Wv[e]) == null ? void 0 : t.systemMessageMode) != null ? n : "developer" : "system";
}
var Wv = {
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
function Yv({
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
              throw new xe({
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
        throw new xe({
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
var Kv = Ce(
  () => z(
    p({
      id: l().nullish(),
      created: k().nullish(),
      model: l().nullish(),
      choices: P(
        p({
          text: l(),
          finish_reason: l(),
          logprobs: p({
            tokens: P(l()),
            token_logprobs: P(k()),
            top_logprobs: P($e(l(), k())).nullish()
          }).nullish()
        })
      ),
      usage: p({
        prompt_tokens: k(),
        completion_tokens: k(),
        total_tokens: k()
      }).nullish()
    })
  )
), Xv = Ce(
  () => z(
    ne([
      p({
        id: l().nullish(),
        created: k().nullish(),
        model: l().nullish(),
        choices: P(
          p({
            text: l(),
            finish_reason: l().nullish(),
            index: k(),
            logprobs: p({
              tokens: P(l()),
              token_logprobs: P(k()),
              top_logprobs: P($e(l(), k())).nullish()
            }).nullish()
          })
        ),
        usage: p({
          prompt_tokens: k(),
          completion_tokens: k(),
          total_tokens: k()
        }).nullish()
      }),
      wo
    ])
  )
), Na = Ce(
  () => z(
    p({
      /**
      Echo back the prompt in addition to the completion.
         */
      echo: B().optional(),
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
      logitBias: $e(l(), k()).optional(),
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
      logprobs: ne([B(), k()]).optional()
    })
  )
), Qv = class {
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
    toolChoice: d,
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
    o != null && f.push({ type: "unsupported-setting", setting: "topK" }), c != null && c.length && f.push({ type: "unsupported-setting", setting: "tools" }), d != null && f.push({ type: "unsupported-setting", setting: "toolChoice" }), u != null && u.type !== "text" && f.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: _, stopSequences: w } = Yv({ prompt: e }), h = [...w ?? [], ...i ?? []];
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
    } = await Se({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        Kv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), c = i.choices[0], d = { openai: {} };
    return c.logprobs != null && (d.openai.logprobs = c.logprobs), {
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
      providerMetadata: d,
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
    }, { responseHeaders: o, value: a } = await Se({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: wt,
      successfulResponseHandler: Gt(
        Xv
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
          start(d) {
            d.enqueue({ type: "stream-start", warnings: n });
          },
          transform(d, m) {
            if (e.includeRawChunks && m.enqueue({ type: "raw", rawValue: d.rawValue }), !d.success) {
              s = "error", m.enqueue({ type: "error", error: d.error });
              return;
            }
            const g = d.value;
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
          flush(d) {
            c || d.enqueue({ type: "text-end", id: "0" }), d.enqueue({
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
}, ey = Ce(
  () => z(
    p({
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
), ty = Ce(
  () => z(
    p({
      data: P(p({ embedding: P(k()) })),
      usage: p({ prompt_tokens: k() }).nullish()
    })
  )
), ny = class {
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
      schema: ey
    })) != null ? o : {}, {
      responseHeaders: s,
      value: i,
      rawValue: u
    } = await Se({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: a.dimensions,
        user: a.user
      },
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        ty
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
}, ry = Ce(
  () => z(
    p({
      data: P(
        p({
          b64_json: l(),
          revised_prompt: l().nullish()
        })
      )
    })
  )
), oy = {
  "dall-e-3": 1,
  "dall-e-2": 10,
  "gpt-image-1": 10,
  "gpt-image-1-mini": 10
}, ay = /* @__PURE__ */ new Set([
  "gpt-image-1",
  "gpt-image-1-mini"
]), sy = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get maxImagesPerCall() {
    var e;
    return (e = oy[this.modelId]) != null ? e : 1;
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
    var u, c, d, m;
    const g = [];
    r != null && g.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), o != null && g.push({ type: "unsupported-setting", setting: "seed" });
    const f = (d = (c = (u = this.config._internal) == null ? void 0 : u.currentDate) == null ? void 0 : c.call(u)) != null ? d : /* @__PURE__ */ new Date(), { value: y, responseHeaders: _ } = await Se({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), s),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: n,
        ...(m = a.openai) != null ? m : {},
        ...ay.has(this.modelId) ? {} : { response_format: "b64_json" }
      },
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        ry
      ),
      abortSignal: i,
      fetch: this.config.fetch
    });
    return {
      images: y.data.map((w) => w.b64_json),
      warnings: g,
      response: {
        timestamp: f,
        modelId: this.modelId,
        headers: _
      },
      providerMetadata: {
        openai: {
          images: y.data.map(
            (w) => w.revised_prompt ? {
              revisedPrompt: w.revised_prompt
            } : null
          )
        }
      }
    };
  }
}, iy = Y(
  () => z(
    p({
      code: l().nullish(),
      containerId: l()
    })
  )
), ly = Y(
  () => z(
    p({
      outputs: P(
        ce("type", [
          p({ type: x("logs"), logs: l() }),
          p({ type: x("image"), url: l() })
        ])
      ).nullish()
    })
  )
), uy = Y(
  () => z(
    p({
      container: ne([
        l(),
        p({
          fileIds: P(l()).optional()
        })
      ]).optional()
    })
  )
), cy = ht({
  id: "openai.code_interpreter",
  name: "code_interpreter",
  inputSchema: iy,
  outputSchema: ly
}), dy = (e = {}) => cy(e), al = p({
  key: l(),
  type: X(["eq", "ne", "gt", "gte", "lt", "lte"]),
  value: ne([l(), k(), B()])
}), sl = p({
  type: X(["and", "or"]),
  filters: P(
    ne([al, Di(() => sl)])
  )
}), py = Y(
  () => z(
    p({
      vectorStoreIds: P(l()),
      maxNumResults: k().optional(),
      ranking: p({
        ranker: l().optional(),
        scoreThreshold: k().optional()
      }).optional(),
      filters: ne([al, sl]).optional()
    })
  )
), fy = Y(
  () => z(
    p({
      queries: P(l()),
      results: P(
        p({
          attributes: $e(l(), ie()),
          fileId: l(),
          filename: l(),
          score: k(),
          text: l()
        })
      ).nullable()
    })
  )
), my = ht({
  id: "openai.file_search",
  name: "file_search",
  inputSchema: p({}),
  outputSchema: fy
}), hy = Y(
  () => z(
    p({
      background: X(["auto", "opaque", "transparent"]).optional(),
      inputFidelity: X(["low", "high"]).optional(),
      inputImageMask: p({
        fileId: l().optional(),
        imageUrl: l().optional()
      }).optional(),
      model: l().optional(),
      moderation: X(["auto"]).optional(),
      outputCompression: k().int().min(0).max(100).optional(),
      outputFormat: X(["png", "jpeg", "webp"]).optional(),
      partialImages: k().int().min(0).max(3).optional(),
      quality: X(["auto", "low", "medium", "high"]).optional(),
      size: X(["1024x1024", "1024x1536", "1536x1024", "auto"]).optional()
    }).strict()
  )
), gy = Y(() => z(p({}))), vy = Y(
  () => z(p({ result: l() }))
), yy = ht({
  id: "openai.image_generation",
  name: "image_generation",
  inputSchema: gy,
  outputSchema: vy
}), _y = (e = {}) => yy(e), il = Y(
  () => z(
    p({
      action: p({
        type: x("exec"),
        command: P(l()),
        timeoutMs: k().optional(),
        user: l().optional(),
        workingDirectory: l().optional(),
        env: $e(l(), l()).optional()
      })
    })
  )
), ll = Y(
  () => z(p({ output: l() }))
), by = ht({
  id: "openai.local_shell",
  name: "local_shell",
  inputSchema: il,
  outputSchema: ll
}), wy = Y(
  () => z(
    p({
      externalWebAccess: B().optional(),
      filters: p({ allowedDomains: P(l()).optional() }).optional(),
      searchContextSize: X(["low", "medium", "high"]).optional(),
      userLocation: p({
        type: x("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), xy = Y(() => z(p({}))), Iy = Y(
  () => z(
    p({
      action: ce("type", [
        p({
          type: x("search"),
          query: l().optional()
        }),
        p({
          type: x("openPage"),
          url: l()
        }),
        p({
          type: x("find"),
          url: l(),
          pattern: l()
        })
      ]),
      sources: P(
        ce("type", [
          p({ type: x("url"), url: l() }),
          p({ type: x("api"), name: l() })
        ])
      ).optional()
    })
  )
), ky = ht({
  id: "openai.web_search",
  name: "web_search",
  inputSchema: xy,
  outputSchema: Iy
}), Ty = (e = {}) => ky(e), Sy = Y(
  () => z(
    p({
      searchContextSize: X(["low", "medium", "high"]).optional(),
      userLocation: p({
        type: x("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Ey = Y(
  () => z(p({}))
), Cy = Y(
  () => z(
    p({
      action: ce("type", [
        p({
          type: x("search"),
          query: l().optional()
        }),
        p({
          type: x("openPage"),
          url: l()
        }),
        p({
          type: x("find"),
          url: l(),
          pattern: l()
        })
      ])
    })
  )
), My = ht({
  id: "openai.web_search_preview",
  name: "web_search_preview",
  inputSchema: Ey,
  outputSchema: Cy
}), Ry = {
  /**
   * The Code Interpreter tool allows models to write and run Python code in a
   * sandboxed environment to solve complex problems in domains like data analysis,
   * coding, and math.
   *
   * @param container - The container to use for the code interpreter.
   *
   * Must have name `code_interpreter`.
   */
  codeInterpreter: dy,
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
  fileSearch: my,
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
  imageGeneration: _y,
  /**
   * Local shell is a tool that allows agents to run shell commands locally
   * on a machine you or the user provides.
   *
   * Supported models: `gpt-5-codex` and `codex-mini-latest`
   *
   * Must have name `local_shell`.
   */
  localShell: by,
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
  webSearchPreview: My,
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
  webSearch: Ty
};
function Aa(e, t) {
  return t ? t.some((n) => e.startsWith(n)) : !1;
}
async function Oy({
  prompt: e,
  systemMessageMode: t,
  fileIdPrefixes: n,
  store: r,
  hasLocalShellTool: o = !1
}) {
  var a, s, i, u;
  const c = [], d = [];
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
            d.push({
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
            var _, w, h;
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
                    detail: (w = (_ = f.providerOptions) == null ? void 0 : _.openai) == null ? void 0 : w.imageDetail
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
                  throw new xe({
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
              const w = (s = (a = _.providerOptions) == null ? void 0 : a.openai) == null ? void 0 : s.itemId;
              if (r && w != null) {
                c.push({ type: "item_reference", id: w });
                break;
              }
              c.push({
                role: "assistant",
                content: [{ type: "output_text", text: _.text }],
                id: w
              });
              break;
            }
            case "tool-call": {
              if (y[_.toolCallId] = _, _.providerExecuted)
                break;
              const w = (u = (i = _.providerOptions) == null ? void 0 : i.openai) == null ? void 0 : u.itemId;
              if (r && w != null) {
                c.push({ type: "item_reference", id: w });
                break;
              }
              if (o && _.toolName === "local_shell") {
                const h = await Me({
                  value: _.input,
                  schema: il
                });
                c.push({
                  type: "local_shell_call",
                  call_id: _.toolCallId,
                  id: w,
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
                id: w
              });
              break;
            }
            // assistant tool result parts are from provider-executed tools:
            case "tool-result": {
              r ? c.push({ type: "item_reference", id: _.toolCallId }) : d.push({
                type: "other",
                message: `Results for OpenAI tool ${_.toolName} are not sent to the API when store is false`
              });
              break;
            }
            case "reasoning": {
              const w = await Ve({
                provider: "openai",
                providerOptions: _.providerOptions,
                schema: Ny
              }), h = w == null ? void 0 : w.itemId;
              if (h != null) {
                const v = f[h];
                if (r)
                  v === void 0 && (c.push({ type: "item_reference", id: h }), f[h] = {
                    type: "reasoning",
                    id: h,
                    summary: []
                  });
                else {
                  const b = [];
                  _.text.length > 0 ? b.push({
                    type: "summary_text",
                    text: _.text
                  }) : v !== void 0 && d.push({
                    type: "other",
                    message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(_)}.`
                  }), v === void 0 ? (f[h] = {
                    type: "reasoning",
                    id: h,
                    encrypted_content: w == null ? void 0 : w.reasoningEncryptedContent,
                    summary: b
                  }, c.push(f[h])) : (v.summary.push(...b), (w == null ? void 0 : w.reasoningEncryptedContent) != null && (v.encrypted_content = w.reasoningEncryptedContent));
                }
              } else
                d.push({
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
            const w = await Me({
              value: y.value,
              schema: ll
            });
            c.push({
              type: "local_shell_call_output",
              call_id: f.toolCallId,
              output: w.output
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
              _ = y.value.map((w) => {
                switch (w.type) {
                  case "text":
                    return { type: "input_text", text: w.text };
                  case "media":
                    return w.mediaType.startsWith("image/") ? {
                      type: "input_image",
                      image_url: `data:${w.mediaType};base64,${w.data}`
                    } : {
                      type: "input_file",
                      filename: "data",
                      file_data: `data:${w.mediaType};base64,${w.data}`
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
  return { input: c, warnings: d };
}
var Ny = p({
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
var Ay = Ce(
  () => z(
    ne([
      p({
        type: x("response.output_text.delta"),
        item_id: l(),
        delta: l(),
        logprobs: P(
          p({
            token: l(),
            logprob: k(),
            top_logprobs: P(
              p({
                token: l(),
                logprob: k()
              })
            )
          })
        ).nullish()
      }),
      p({
        type: X(["response.completed", "response.incomplete"]),
        response: p({
          incomplete_details: p({ reason: l() }).nullish(),
          usage: p({
            input_tokens: k(),
            input_tokens_details: p({ cached_tokens: k().nullish() }).nullish(),
            output_tokens: k(),
            output_tokens_details: p({ reasoning_tokens: k().nullish() }).nullish()
          }),
          service_tier: l().nullish()
        })
      }),
      p({
        type: x("response.created"),
        response: p({
          id: l(),
          created_at: k(),
          model: l(),
          service_tier: l().nullish()
        })
      }),
      p({
        type: x("response.output_item.added"),
        output_index: k(),
        item: ce("type", [
          p({
            type: x("message"),
            id: l()
          }),
          p({
            type: x("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          p({
            type: x("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l()
          }),
          p({
            type: x("web_search_call"),
            id: l(),
            status: l()
          }),
          p({
            type: x("computer_call"),
            id: l(),
            status: l()
          }),
          p({
            type: x("file_search_call"),
            id: l()
          }),
          p({
            type: x("image_generation_call"),
            id: l()
          }),
          p({
            type: x("code_interpreter_call"),
            id: l(),
            container_id: l(),
            code: l().nullable(),
            outputs: P(
              ce("type", [
                p({ type: x("logs"), logs: l() }),
                p({ type: x("image"), url: l() })
              ])
            ).nullable(),
            status: l()
          })
        ])
      }),
      p({
        type: x("response.output_item.done"),
        output_index: k(),
        item: ce("type", [
          p({
            type: x("message"),
            id: l()
          }),
          p({
            type: x("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          p({
            type: x("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l(),
            status: x("completed")
          }),
          p({
            type: x("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: P(
              ce("type", [
                p({ type: x("logs"), logs: l() }),
                p({ type: x("image"), url: l() })
              ])
            ).nullable()
          }),
          p({
            type: x("image_generation_call"),
            id: l(),
            result: l()
          }),
          p({
            type: x("web_search_call"),
            id: l(),
            status: l(),
            action: ce("type", [
              p({
                type: x("search"),
                query: l().nullish(),
                sources: P(
                  ce("type", [
                    p({ type: x("url"), url: l() }),
                    p({ type: x("api"), name: l() })
                  ])
                ).nullish()
              }),
              p({
                type: x("open_page"),
                url: l()
              }),
              p({
                type: x("find"),
                url: l(),
                pattern: l()
              })
            ])
          }),
          p({
            type: x("file_search_call"),
            id: l(),
            queries: P(l()),
            results: P(
              p({
                attributes: $e(l(), ie()),
                file_id: l(),
                filename: l(),
                score: k(),
                text: l()
              })
            ).nullish()
          }),
          p({
            type: x("local_shell_call"),
            id: l(),
            call_id: l(),
            action: p({
              type: x("exec"),
              command: P(l()),
              timeout_ms: k().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: $e(l(), l()).optional()
            })
          }),
          p({
            type: x("computer_call"),
            id: l(),
            status: x("completed")
          })
        ])
      }),
      p({
        type: x("response.function_call_arguments.delta"),
        item_id: l(),
        output_index: k(),
        delta: l()
      }),
      p({
        type: x("response.image_generation_call.partial_image"),
        item_id: l(),
        output_index: k(),
        partial_image_b64: l()
      }),
      p({
        type: x("response.code_interpreter_call_code.delta"),
        item_id: l(),
        output_index: k(),
        delta: l()
      }),
      p({
        type: x("response.code_interpreter_call_code.done"),
        item_id: l(),
        output_index: k(),
        code: l()
      }),
      p({
        type: x("response.output_text.annotation.added"),
        annotation: ce("type", [
          p({
            type: x("url_citation"),
            start_index: k(),
            end_index: k(),
            url: l(),
            title: l()
          }),
          p({
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
      p({
        type: x("response.reasoning_summary_part.added"),
        item_id: l(),
        summary_index: k()
      }),
      p({
        type: x("response.reasoning_summary_text.delta"),
        item_id: l(),
        summary_index: k(),
        delta: l()
      }),
      p({
        type: x("response.reasoning_summary_part.done"),
        item_id: l(),
        summary_index: k()
      }),
      p({
        type: x("error"),
        sequence_number: k(),
        error: p({
          type: l(),
          code: l(),
          message: l(),
          param: l().nullish()
        })
      }),
      p({ type: l() }).loose().transform((e) => ({
        type: "unknown_chunk",
        message: e.type
      }))
      // fallback for unknown chunks
    ])
  )
), $y = Ce(
  () => z(
    p({
      id: l().optional(),
      created_at: k().optional(),
      error: p({
        message: l(),
        type: l(),
        param: l().nullish(),
        code: l()
      }).nullish(),
      model: l().optional(),
      output: P(
        ce("type", [
          p({
            type: x("message"),
            role: x("assistant"),
            id: l(),
            content: P(
              p({
                type: x("output_text"),
                text: l(),
                logprobs: P(
                  p({
                    token: l(),
                    logprob: k(),
                    top_logprobs: P(
                      p({
                        token: l(),
                        logprob: k()
                      })
                    )
                  })
                ).nullish(),
                annotations: P(
                  ce("type", [
                    p({
                      type: x("url_citation"),
                      start_index: k(),
                      end_index: k(),
                      url: l(),
                      title: l()
                    }),
                    p({
                      type: x("file_citation"),
                      file_id: l(),
                      filename: l().nullish(),
                      index: k().nullish(),
                      start_index: k().nullish(),
                      end_index: k().nullish(),
                      quote: l().nullish()
                    }),
                    p({
                      type: x("container_file_citation"),
                      container_id: l(),
                      file_id: l(),
                      filename: l().nullish(),
                      start_index: k().nullish(),
                      end_index: k().nullish(),
                      index: k().nullish()
                    }),
                    p({
                      type: x("file_path"),
                      file_id: l(),
                      index: k().nullish()
                    })
                  ])
                )
              })
            )
          }),
          p({
            type: x("web_search_call"),
            id: l(),
            status: l(),
            action: ce("type", [
              p({
                type: x("search"),
                query: l().nullish(),
                sources: P(
                  ce("type", [
                    p({ type: x("url"), url: l() }),
                    p({ type: x("api"), name: l() })
                  ])
                ).nullish()
              }),
              p({
                type: x("open_page"),
                url: l()
              }),
              p({
                type: x("find"),
                url: l(),
                pattern: l()
              })
            ])
          }),
          p({
            type: x("file_search_call"),
            id: l(),
            queries: P(l()),
            results: P(
              p({
                attributes: $e(
                  l(),
                  ne([l(), k(), B()])
                ),
                file_id: l(),
                filename: l(),
                score: k(),
                text: l()
              })
            ).nullish()
          }),
          p({
            type: x("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: P(
              ce("type", [
                p({ type: x("logs"), logs: l() }),
                p({ type: x("image"), url: l() })
              ])
            ).nullable()
          }),
          p({
            type: x("image_generation_call"),
            id: l(),
            result: l()
          }),
          p({
            type: x("local_shell_call"),
            id: l(),
            call_id: l(),
            action: p({
              type: x("exec"),
              command: P(l()),
              timeout_ms: k().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: $e(l(), l()).optional()
            })
          }),
          p({
            type: x("function_call"),
            call_id: l(),
            name: l(),
            arguments: l(),
            id: l()
          }),
          p({
            type: x("computer_call"),
            id: l(),
            status: l().optional()
          }),
          p({
            type: x("reasoning"),
            id: l(),
            encrypted_content: l().nullish(),
            summary: P(
              p({
                type: x("summary_text"),
                text: l()
              })
            )
          })
        ])
      ).optional(),
      service_tier: l().nullish(),
      incomplete_details: p({ reason: l() }).nullish(),
      usage: p({
        input_tokens: k(),
        input_tokens_details: p({ cached_tokens: k().nullish() }).nullish(),
        output_tokens: k(),
        output_tokens_details: p({ reasoning_tokens: k().nullish() }).nullish()
      }).optional()
    })
  )
), ul = 20, Py = Ce(
  () => z(
    p({
      conversation: l().nullish(),
      include: P(
        X([
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
      logprobs: ne([B(), k().min(1).max(ul)]).optional(),
      /**
       * The maximum number of total calls to built-in tools that can be processed in a response.
       * This maximum number applies across all built-in tool calls, not per individual tool.
       * Any further attempts to call a tool by the model will be ignored.
       */
      maxToolCalls: k().nullish(),
      metadata: pt().nullish(),
      parallelToolCalls: B().nullish(),
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
      promptCacheRetention: X(["in_memory", "24h"]).nullish(),
      reasoningEffort: l().nullish(),
      reasoningSummary: l().nullish(),
      safetyIdentifier: l().nullish(),
      serviceTier: X(["auto", "flex", "priority", "default"]).nullish(),
      store: B().nullish(),
      strictJsonSchema: B().nullish(),
      textVerbosity: X(["low", "medium", "high"]).nullish(),
      truncation: X(["auto", "disabled"]).nullish(),
      user: l().nullish()
    })
  )
);
async function jy({
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
            const i = await Me({
              value: s.args,
              schema: py
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
            const i = await Me({
              value: s.args,
              schema: Sy
            });
            o.push({
              type: "web_search_preview",
              search_context_size: i.searchContextSize,
              user_location: i.userLocation
            });
            break;
          }
          case "openai.web_search": {
            const i = await Me({
              value: s.args,
              schema: wy
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
            const i = await Me({
              value: s.args,
              schema: uy
            });
            o.push({
              type: "code_interpreter",
              container: i.container == null ? { type: "auto", file_ids: void 0 } : typeof i.container == "string" ? i.container : { type: "auto", file_ids: i.container.fileIds }
            });
            break;
          }
          case "openai.image_generation": {
            const i = await Me({
              value: s.args,
              schema: hy
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
      throw new xe({
        functionality: `tool choice type: ${s}`
      });
    }
  }
}
var qy = class {
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
    tools: d,
    toolChoice: m,
    responseFormat: g
  }) {
    var f, y, _, w;
    const h = [], v = By(this.modelId);
    o != null && h.push({ type: "unsupported-setting", setting: "topK" }), i != null && h.push({ type: "unsupported-setting", setting: "seed" }), a != null && h.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), s != null && h.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), n != null && h.push({ type: "unsupported-setting", setting: "stopSequences" });
    const b = await Ve({
      provider: "openai",
      providerOptions: c,
      schema: Py
    });
    b != null && b.conversation && (b != null && b.previousResponseId) && h.push({
      type: "unsupported-setting",
      setting: "conversation",
      details: "conversation and previousResponseId cannot be used together"
    });
    const { input: I, warnings: E } = await Oy({
      prompt: u,
      systemMessageMode: v.systemMessageMode,
      fileIdPrefixes: this.config.fileIdPrefixes,
      store: (f = b == null ? void 0 : b.store) != null ? f : !0,
      hasLocalShellTool: R("openai.local_shell")
    });
    h.push(...E);
    const O = (y = b == null ? void 0 : b.strictJsonSchema) != null ? y : !1;
    let S = b == null ? void 0 : b.include;
    function M(U) {
      S == null ? S = [U] : S.includes(U) || (S = [...S, U]);
    }
    function R(U) {
      return (d == null ? void 0 : d.find(
        (Q) => Q.type === "provider-defined" && Q.id === U
      )) != null;
    }
    const A = typeof (b == null ? void 0 : b.logprobs) == "number" ? b == null ? void 0 : b.logprobs : (b == null ? void 0 : b.logprobs) === !0 ? ul : void 0;
    A && M("message.output_text.logprobs");
    const j = (_ = d == null ? void 0 : d.find(
      (U) => U.type === "provider-defined" && (U.id === "openai.web_search" || U.id === "openai.web_search_preview")
    )) == null ? void 0 : _.name;
    j && M("web_search_call.action.sources"), R("openai.code_interpreter") && M("code_interpreter_call.outputs");
    const D = b == null ? void 0 : b.store;
    D === !1 && v.isReasoningModel && M("reasoning.encrypted_content");
    const q = {
      model: this.modelId,
      input: I,
      temperature: t,
      top_p: r,
      max_output_tokens: e,
      ...((g == null ? void 0 : g.type) === "json" || (b == null ? void 0 : b.textVerbosity)) && {
        text: {
          ...(g == null ? void 0 : g.type) === "json" && {
            format: g.schema != null ? {
              type: "json_schema",
              strict: O,
              name: (w = g.name) != null ? w : "response",
              description: g.description,
              schema: g.schema
            } : { type: "json_object" }
          },
          ...(b == null ? void 0 : b.textVerbosity) && {
            verbosity: b.textVerbosity
          }
        }
      },
      // provider options:
      conversation: b == null ? void 0 : b.conversation,
      max_tool_calls: b == null ? void 0 : b.maxToolCalls,
      metadata: b == null ? void 0 : b.metadata,
      parallel_tool_calls: b == null ? void 0 : b.parallelToolCalls,
      previous_response_id: b == null ? void 0 : b.previousResponseId,
      store: D,
      user: b == null ? void 0 : b.user,
      instructions: b == null ? void 0 : b.instructions,
      service_tier: b == null ? void 0 : b.serviceTier,
      include: S,
      prompt_cache_key: b == null ? void 0 : b.promptCacheKey,
      prompt_cache_retention: b == null ? void 0 : b.promptCacheRetention,
      safety_identifier: b == null ? void 0 : b.safetyIdentifier,
      top_logprobs: A,
      truncation: b == null ? void 0 : b.truncation,
      // model-specific settings:
      ...v.isReasoningModel && ((b == null ? void 0 : b.reasoningEffort) != null || (b == null ? void 0 : b.reasoningSummary) != null) && {
        reasoning: {
          ...(b == null ? void 0 : b.reasoningEffort) != null && {
            effort: b.reasoningEffort
          },
          ...(b == null ? void 0 : b.reasoningSummary) != null && {
            summary: b.reasoningSummary
          }
        }
      }
    };
    v.isReasoningModel ? (q.temperature != null && (q.temperature = void 0, h.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), q.top_p != null && (q.top_p = void 0, h.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    }))) : ((b == null ? void 0 : b.reasoningEffort) != null && h.push({
      type: "unsupported-setting",
      setting: "reasoningEffort",
      details: "reasoningEffort is not supported for non-reasoning models"
    }), (b == null ? void 0 : b.reasoningSummary) != null && h.push({
      type: "unsupported-setting",
      setting: "reasoningSummary",
      details: "reasoningSummary is not supported for non-reasoning models"
    })), (b == null ? void 0 : b.serviceTier) === "flex" && !v.supportsFlexProcessing && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), delete q.service_tier), (b == null ? void 0 : b.serviceTier) === "priority" && !v.supportsPriorityProcessing && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), delete q.service_tier);
    const {
      tools: C,
      toolChoice: F,
      toolWarnings: N
    } = await jy({
      tools: d,
      toolChoice: m,
      strictJsonSchema: O
    });
    return {
      webSearchToolName: j,
      args: {
        ...q,
        tools: C,
        tool_choice: F
      },
      warnings: [...h, ...N],
      store: D
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, d, m, g, f, y, _, w, h, v, b;
    const {
      args: I,
      warnings: E,
      webSearchToolName: O
    } = await this.getArgs(e), S = this.config.url({
      path: "/responses",
      modelId: this.modelId
    }), {
      responseHeaders: M,
      value: R,
      rawValue: A
    } = await Se({
      url: S,
      headers: Re(this.config.headers(), e.headers),
      body: I,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        $y
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    if (R.error)
      throw new De({
        message: R.error.message,
        url: S,
        requestBodyValues: I,
        statusCode: 400,
        responseHeaders: M,
        responseBody: A,
        isRetryable: !1
      });
    const j = [], D = [];
    let q = !1;
    for (const N of R.output)
      switch (N.type) {
        case "reasoning": {
          N.summary.length === 0 && N.summary.push({ type: "summary_text", text: "" });
          for (const U of N.summary)
            j.push({
              type: "reasoning",
              text: U.text,
              providerMetadata: {
                openai: {
                  itemId: N.id,
                  reasoningEncryptedContent: (t = N.encrypted_content) != null ? t : null
                }
              }
            });
          break;
        }
        case "image_generation_call": {
          j.push({
            type: "tool-call",
            toolCallId: N.id,
            toolName: "image_generation",
            input: "{}",
            providerExecuted: !0
          }), j.push({
            type: "tool-result",
            toolCallId: N.id,
            toolName: "image_generation",
            result: {
              result: N.result
            },
            providerExecuted: !0
          });
          break;
        }
        case "local_shell_call": {
          j.push({
            type: "tool-call",
            toolCallId: N.call_id,
            toolName: "local_shell",
            input: JSON.stringify({
              action: N.action
            }),
            providerMetadata: {
              openai: {
                itemId: N.id
              }
            }
          });
          break;
        }
        case "message": {
          for (const U of N.content) {
            (r = (n = e.providerOptions) == null ? void 0 : n.openai) != null && r.logprobs && U.logprobs && D.push(U.logprobs), j.push({
              type: "text",
              text: U.text,
              providerMetadata: {
                openai: {
                  itemId: N.id
                }
              }
            });
            for (const Q of U.annotations)
              Q.type === "url_citation" ? j.push({
                type: "source",
                sourceType: "url",
                id: (s = (a = (o = this.config).generateId) == null ? void 0 : a.call(o)) != null ? s : Fe(),
                url: Q.url,
                title: Q.title
              }) : Q.type === "file_citation" && j.push({
                type: "source",
                sourceType: "document",
                id: (c = (u = (i = this.config).generateId) == null ? void 0 : u.call(i)) != null ? c : Fe(),
                mediaType: "text/plain",
                title: (m = (d = Q.quote) != null ? d : Q.filename) != null ? m : "Document",
                filename: (g = Q.filename) != null ? g : Q.file_id,
                ...Q.file_id ? {
                  providerMetadata: {
                    openai: {
                      fileId: Q.file_id
                    }
                  }
                } : {}
              });
          }
          break;
        }
        case "function_call": {
          q = !0, j.push({
            type: "tool-call",
            toolCallId: N.call_id,
            toolName: N.name,
            input: N.arguments,
            providerMetadata: {
              openai: {
                itemId: N.id
              }
            }
          });
          break;
        }
        case "web_search_call": {
          j.push({
            type: "tool-call",
            toolCallId: N.id,
            toolName: O ?? "web_search",
            input: JSON.stringify({}),
            providerExecuted: !0
          }), j.push({
            type: "tool-result",
            toolCallId: N.id,
            toolName: O ?? "web_search",
            result: qa(N.action),
            providerExecuted: !0
          });
          break;
        }
        case "computer_call": {
          j.push({
            type: "tool-call",
            toolCallId: N.id,
            toolName: "computer_use",
            input: "",
            providerExecuted: !0
          }), j.push({
            type: "tool-result",
            toolCallId: N.id,
            toolName: "computer_use",
            result: {
              type: "computer_use_tool_result",
              status: N.status || "completed"
            },
            providerExecuted: !0
          });
          break;
        }
        case "file_search_call": {
          j.push({
            type: "tool-call",
            toolCallId: N.id,
            toolName: "file_search",
            input: "{}",
            providerExecuted: !0
          }), j.push({
            type: "tool-result",
            toolCallId: N.id,
            toolName: "file_search",
            result: {
              queries: N.queries,
              results: (y = (f = N.results) == null ? void 0 : f.map((U) => ({
                attributes: U.attributes,
                fileId: U.file_id,
                filename: U.filename,
                score: U.score,
                text: U.text
              }))) != null ? y : null
            },
            providerExecuted: !0
          });
          break;
        }
        case "code_interpreter_call": {
          j.push({
            type: "tool-call",
            toolCallId: N.id,
            toolName: "code_interpreter",
            input: JSON.stringify({
              code: N.code,
              containerId: N.container_id
            }),
            providerExecuted: !0
          }), j.push({
            type: "tool-result",
            toolCallId: N.id,
            toolName: "code_interpreter",
            result: {
              outputs: N.outputs
            },
            providerExecuted: !0
          });
          break;
        }
      }
    const C = {
      openai: {
        ...R.id != null ? { responseId: R.id } : {}
      }
    };
    D.length > 0 && (C.openai.logprobs = D), typeof R.service_tier == "string" && (C.openai.serviceTier = R.service_tier);
    const F = R.usage;
    return {
      content: j,
      finishReason: $a({
        finishReason: (_ = R.incomplete_details) == null ? void 0 : _.reason,
        hasFunctionCall: q
      }),
      usage: {
        inputTokens: F.input_tokens,
        outputTokens: F.output_tokens,
        totalTokens: F.input_tokens + F.output_tokens,
        reasoningTokens: (h = (w = F.output_tokens_details) == null ? void 0 : w.reasoning_tokens) != null ? h : void 0,
        cachedInputTokens: (b = (v = F.input_tokens_details) == null ? void 0 : v.cached_tokens) != null ? b : void 0
      },
      request: { body: I },
      response: {
        id: R.id,
        timestamp: new Date(R.created_at * 1e3),
        modelId: R.model,
        headers: M,
        body: A
      },
      providerMetadata: C,
      warnings: E
    };
  }
  async doStream(e) {
    const {
      args: t,
      warnings: n,
      webSearchToolName: r,
      store: o
    } = await this.getArgs(e), { responseHeaders: a, value: s } = await Se({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: wt,
      successfulResponseHandler: Gt(
        Ay
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), i = this;
    let u = "unknown";
    const c = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, d = [];
    let m = null;
    const g = {}, f = [];
    let y = !1;
    const _ = {};
    let w;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(h) {
            h.enqueue({ type: "stream-start", warnings: n });
          },
          transform(h, v) {
            var b, I, E, O, S, M, R, A, j, D, q, C, F, N, U, Q, Oe, oe, Pe, Z, re, he;
            if (e.includeRawChunks && v.enqueue({ type: "raw", rawValue: h.rawValue }), !h.success) {
              u = "error", v.enqueue({ type: "error", error: h.error });
              return;
            }
            const T = h.value;
            if (ja(T))
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
              })) : ja(T) && T.item.type === "reasoning" && (_[T.item.id] = {
                encryptedContent: T.item.encrypted_content,
                summaryParts: { 0: "active" }
              }, v.enqueue({
                type: "reasoning-start",
                id: `${T.item.id}:0`,
                providerMetadata: {
                  openai: {
                    itemId: T.item.id,
                    reasoningEncryptedContent: (b = T.item.encrypted_content) != null ? b : null
                  }
                }
              }));
            else if (Pa(T) && T.item.type !== "message") {
              if (T.item.type === "function_call")
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
                  result: qa(T.item.action),
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
                    results: (E = (I = T.item.results) == null ? void 0 : I.map((H) => ({
                      attributes: H.attributes,
                      fileId: H.file_id,
                      filename: H.filename,
                      score: H.score,
                      text: H.text
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
                const H = _[T.item.id], ue = Object.entries(
                  H.summaryParts
                ).filter(
                  ([pe, Ze]) => Ze === "active" || Ze === "can-conclude"
                ).map(([pe]) => pe);
                for (const pe of ue)
                  v.enqueue({
                    type: "reasoning-end",
                    id: `${T.item.id}:${pe}`,
                    providerMetadata: {
                      openai: {
                        itemId: T.item.id,
                        reasoningEncryptedContent: (O = T.item.encrypted_content) != null ? O : null
                      }
                    }
                  });
                delete _[T.item.id];
              }
            } else if (Zy(T)) {
              const H = g[T.output_index];
              H != null && v.enqueue({
                type: "tool-input-delta",
                id: H.toolCallId,
                delta: T.delta
              });
            } else if (Ly(T)) {
              const H = g[T.output_index];
              H != null && v.enqueue({
                type: "tool-input-delta",
                id: H.toolCallId,
                // The delta is code, which is embedding in a JSON string.
                // To escape it, we use JSON.stringify and slice to remove the outer quotes.
                delta: JSON.stringify(T.delta).slice(1, -1)
              });
            } else if (Fy(T)) {
              const H = g[T.output_index];
              H != null && (v.enqueue({
                type: "tool-input-delta",
                id: H.toolCallId,
                delta: '"}'
              }), v.enqueue({
                type: "tool-input-end",
                id: H.toolCallId
              }), v.enqueue({
                type: "tool-call",
                toolCallId: H.toolCallId,
                toolName: "code_interpreter",
                input: JSON.stringify({
                  code: T.code,
                  containerId: H.codeInterpreter.containerId
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
            else if (Dy(T))
              v.enqueue({
                type: "text-delta",
                id: T.item_id,
                delta: T.delta
              }), (M = (S = e.providerOptions) == null ? void 0 : S.openai) != null && M.logprobs && T.logprobs && d.push(T.logprobs);
            else if (T.type === "response.reasoning_summary_part.added") {
              if (T.summary_index > 0) {
                const H = _[T.item_id];
                H.summaryParts[T.summary_index] = "active";
                for (const ue of Object.keys(
                  H.summaryParts
                ))
                  H.summaryParts[ue] === "can-conclude" && (v.enqueue({
                    type: "reasoning-end",
                    id: `${T.item_id}:${ue}`,
                    providerMetadata: { openai: { itemId: T.item_id } }
                  }), H.summaryParts[ue] = "concluded");
                v.enqueue({
                  type: "reasoning-start",
                  id: `${T.item_id}:${T.summary_index}`,
                  providerMetadata: {
                    openai: {
                      itemId: T.item_id,
                      reasoningEncryptedContent: (A = (R = _[T.item_id]) == null ? void 0 : R.encryptedContent) != null ? A : null
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
              finishReason: (j = T.response.incomplete_details) == null ? void 0 : j.reason,
              hasFunctionCall: y
            }), c.inputTokens = T.response.usage.input_tokens, c.outputTokens = T.response.usage.output_tokens, c.totalTokens = T.response.usage.input_tokens + T.response.usage.output_tokens, c.reasoningTokens = (q = (D = T.response.usage.output_tokens_details) == null ? void 0 : D.reasoning_tokens) != null ? q : void 0, c.cachedInputTokens = (F = (C = T.response.usage.input_tokens_details) == null ? void 0 : C.cached_tokens) != null ? F : void 0, typeof T.response.service_tier == "string" && (w = T.response.service_tier)) : Vy(T) ? (f.push(T.annotation), T.annotation.type === "url_citation" ? v.enqueue({
              type: "source",
              sourceType: "url",
              id: (Q = (U = (N = i.config).generateId) == null ? void 0 : U.call(N)) != null ? Q : Fe(),
              url: T.annotation.url,
              title: T.annotation.title
            }) : T.annotation.type === "file_citation" && v.enqueue({
              type: "source",
              sourceType: "document",
              id: (Pe = (oe = (Oe = i.config).generateId) == null ? void 0 : oe.call(Oe)) != null ? Pe : Fe(),
              mediaType: "text/plain",
              title: (re = (Z = T.annotation.quote) != null ? Z : T.annotation.filename) != null ? re : "Document",
              filename: (he = T.annotation.filename) != null ? he : T.annotation.file_id,
              ...T.annotation.file_id ? {
                providerMetadata: {
                  openai: {
                    fileId: T.annotation.file_id
                  }
                }
              } : {}
            })) : Pa(T) && T.item.type === "message" ? v.enqueue({
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
            }) : Gy(T) && v.enqueue({ type: "error", error: T });
          },
          flush(h) {
            const v = {
              openai: {
                responseId: m
              }
            };
            d.length > 0 && (v.openai.logprobs = d), w !== void 0 && (v.openai.serviceTier = w), h.enqueue({
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
function Dy(e) {
  return e.type === "response.output_text.delta";
}
function Pa(e) {
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
function ja(e) {
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
function qa(e) {
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
var Jy = Ce(
  () => z(
    p({
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
      const d = {};
      for (const m in d) {
        const g = d[m];
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
    } = await Se({
      url: this.config.url({
        path: "/audio/speech",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), e.headers),
      body: a,
      failedResponseHandler: wt,
      successfulResponseHandler: fh(),
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
}, Wy = Ce(
  () => z(
    p({
      text: l(),
      language: l().nullish(),
      duration: k().nullish(),
      words: P(
        p({
          word: l(),
          start: k(),
          end: k()
        })
      ).nullish(),
      segments: P(
        p({
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
), Yy = Ce(
  () => z(
    p({
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
      timestampGranularities: P(X(["word", "segment"])).default(["segment"]).optional()
    })
  )
), Da = {
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
}, Ky = class {
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
      schema: Yy
    }), a = new FormData(), s = e instanceof Uint8Array ? new Blob([e]) : new Blob([Nn(e)]);
    a.append("model", this.modelId);
    const i = nh(t);
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
      for (const [c, d] of Object.entries(u))
        if (d != null)
          if (Array.isArray(d))
            for (const m of d)
              a.append(`${c}[]`, String(m));
          else
            a.append(c, String(d));
    }
    return {
      formData: a,
      warnings: r
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u;
    const c = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), { formData: d, warnings: m } = await this.getArgs(e), {
      value: g,
      responseHeaders: f,
      rawValue: y
    } = await ph({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Re(this.config.headers(), e.headers),
      formData: d,
      failedResponseHandler: wt,
      successfulResponseHandler: Ue(
        Wy
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), _ = g.language != null && g.language in Da ? Da[g.language] : void 0;
    return {
      text: g.text,
      segments: (i = (s = (o = g.segments) == null ? void 0 : o.map((w) => ({
        text: w.text,
        startSecond: w.start,
        endSecond: w.end
      }))) != null ? s : (a = g.words) == null ? void 0 : a.map((w) => ({
        text: w.word,
        startSecond: w.start,
        endSecond: w.end
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
}, Xy = "2.0.72";
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
  ), s = (_) => new Gv(_, {
    provider: `${o}.chat`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), i = (_) => new Qv(_, {
    provider: `${o}.completion`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), u = (_) => new ny(_, {
    provider: `${o}.embedding`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), c = (_) => new sy(_, {
    provider: `${o}.image`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), d = (_) => new Ky(_, {
    provider: `${o}.transcription`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), m = (_) => new Hy(_, {
    provider: `${o}.speech`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), g = (_) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return f(_);
  }, f = (_) => new qy(_, {
    provider: `${o}.responses`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch,
    fileIdPrefixes: ["file-"]
  }), y = function(_) {
    return g(_);
  };
  return y.languageModel = g, y.chat = s, y.completion = i, y.responses = f, y.embedding = u, y.textEmbedding = u, y.textEmbeddingModel = u, y.image = c, y.imageModel = c, y.transcription = d, y.transcriptionModel = d, y.speech = m, y.speechModel = m, y.tools = Ry, y;
}
Qy();
var Ar, za;
function e_() {
  if (za) return Ar;
  za = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, o = (d, m) => {
    for (var g in m)
      e(d, g, { get: m[g], enumerable: !0 });
  }, a = (d, m, g, f) => {
    if (m && typeof m == "object" || typeof m == "function")
      for (let y of n(m))
        !r.call(d, y) && y !== g && e(d, y, { get: () => m[y], enumerable: !(f = t(m, y)) || f.enumerable });
    return d;
  }, s = (d) => a(e({}, "__esModule", { value: !0 }), d), i = {};
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
var $r, Ua;
function t_() {
  if (Ua) return $r;
  Ua = 1;
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
    getVercelOidcTokenSync: () => d
  }), $r = s(i);
  var u = e_();
  async function c() {
    return "";
  }
  function d() {
    return "";
  }
  return $r;
}
var cl = t_(), n_ = "vercel.ai.gateway.error", Pr = Symbol.for(n_), Za, La, ot = class dl extends (La = Error, Za = Pr, La) {
  constructor({
    message: t,
    statusCode: n = 500,
    cause: r
  }) {
    super(t), this[Za] = !0, this.statusCode = n, this.cause = r;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(t) {
    return dl.hasMarker(t);
  }
  static hasMarker(t) {
    return typeof t == "object" && t !== null && Pr in t && t[Pr] === !0;
  }
}, pl = "GatewayAuthenticationError", r_ = `vercel.ai.gateway.error.${pl}`, Fa = Symbol.for(r_), Va, Ga, xo = class fl extends (Ga = ot, Va = Fa, Ga) {
  constructor({
    message: t = "Authentication failed",
    statusCode: n = 401,
    cause: r
  } = {}) {
    super({ message: t, statusCode: n, cause: r }), this[Va] = !0, this.name = pl, this.type = "authentication_error";
  }
  static isInstance(t) {
    return ot.hasMarker(t) && Fa in t;
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
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`, new fl({
      message: s,
      statusCode: o,
      cause: a
    });
  }
}, ml = "GatewayInvalidRequestError", o_ = `vercel.ai.gateway.error.${ml}`, Ba = Symbol.for(o_), Ja, Ha, a_ = class extends (Ha = ot, Ja = Ba, Ha) {
  constructor({
    message: e = "Invalid request",
    statusCode: t = 400,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[Ja] = !0, this.name = ml, this.type = "invalid_request_error";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Ba in e;
  }
}, hl = "GatewayRateLimitError", s_ = `vercel.ai.gateway.error.${hl}`, Wa = Symbol.for(s_), Ya, Ka, i_ = class extends (Ka = ot, Ya = Wa, Ka) {
  constructor({
    message: e = "Rate limit exceeded",
    statusCode: t = 429,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[Ya] = !0, this.name = hl, this.type = "rate_limit_exceeded";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Wa in e;
  }
}, gl = "GatewayModelNotFoundError", l_ = `vercel.ai.gateway.error.${gl}`, Xa = Symbol.for(l_), u_ = Ce(
  () => z(
    p({
      modelId: l()
    })
  )
), Qa, es, vl = class extends (es = ot, Qa = Xa, es) {
  constructor({
    message: e = "Model not found",
    statusCode: t = 404,
    modelId: n,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[Qa] = !0, this.name = gl, this.type = "model_not_found", this.modelId = n;
  }
  static isInstance(e) {
    return ot.hasMarker(e) && Xa in e;
  }
}, yl = "GatewayInternalServerError", c_ = `vercel.ai.gateway.error.${yl}`, ts = Symbol.for(c_), ns, rs, os = class extends (rs = ot, ns = ts, rs) {
  constructor({
    message: e = "Internal server error",
    statusCode: t = 500,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[ns] = !0, this.name = yl, this.type = "internal_server_error";
  }
  static isInstance(e) {
    return ot.hasMarker(e) && ts in e;
  }
}, _l = "GatewayResponseError", d_ = `vercel.ai.gateway.error.${_l}`, as = Symbol.for(d_), ss, is, p_ = class extends (is = ot, ss = as, is) {
  constructor({
    message: e = "Invalid response from Gateway",
    statusCode: t = 502,
    response: n,
    validationError: r,
    cause: o
  } = {}) {
    super({ message: e, statusCode: t, cause: o }), this[ss] = !0, this.name = _l, this.type = "response_error", this.response = n, this.validationError = r;
  }
  static isInstance(e) {
    return ot.hasMarker(e) && as in e;
  }
};
async function ls({
  response: e,
  statusCode: t,
  defaultMessage: n = "Gateway request failed",
  cause: r,
  authMethod: o
}) {
  const a = await st({
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
      const c = await st({
        value: s.error.param,
        schema: u_
      });
      return new vl({
        message: u,
        statusCode: t,
        modelId: c.success ? c.value.modelId : void 0,
        cause: r
      });
    }
    case "internal_server_error":
      return new os({ message: u, statusCode: t, cause: r });
    default:
      return new os({ message: u, statusCode: t, cause: r });
  }
}
var f_ = Ce(
  () => z(
    p({
      error: p({
        message: l(),
        type: l().nullish(),
        param: ie().nullish(),
        code: ne([l(), k()]).nullish()
      })
    })
  )
);
function At(e, t) {
  var n;
  return ot.isInstance(e) ? e : De.isInstance(e) ? ls({
    response: m_(e),
    statusCode: (n = e.statusCode) != null ? n : 500,
    defaultMessage: "Gateway request failed",
    cause: e,
    authMethod: t
  }) : ls({
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
var bl = "ai-gateway-auth-method";
async function an(e) {
  const t = await st({
    value: e[bl],
    schema: h_
  });
  return t.success ? t.value : void 0;
}
var h_ = Ce(
  () => z(ne([x("api-key"), x("oidc")]))
), us = class {
  constructor(e) {
    this.config = e;
  }
  async getAvailableModels() {
    try {
      const { value: e } = await pa({
        url: `${this.config.baseURL}/config`,
        headers: await Ae(this.config.headers()),
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
        headers: await Ae(this.config.headers()),
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
}, g_ = Ce(
  () => z(
    p({
      models: P(
        p({
          id: l(),
          name: l(),
          description: l().nullish(),
          pricing: p({
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
          specification: p({
            specificationVersion: x("v2"),
            provider: l(),
            modelId: l()
          }),
          modelType: X(["language", "embedding", "image"]).nullish()
        })
      )
    })
  )
), v_ = Ce(
  () => z(
    p({
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
    const { args: t, warnings: n } = await this.getArgs(e), { abortSignal: r } = e, o = await Ae(this.config.headers());
    try {
      const {
        responseHeaders: a,
        value: s,
        rawValue: i
      } = await Se({
        url: this.getUrl(),
        headers: Re(
          o,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !1),
          await Ae(this.config.o11yHeaders)
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
    const { args: t, warnings: n } = await this.getArgs(e), { abortSignal: r } = e, o = await Ae(this.config.headers());
    try {
      const { value: a, responseHeaders: s } = await Se({
        url: this.getUrl(),
        headers: Re(
          o,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !0),
          await Ae(this.config.o11yHeaders)
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
    const a = await Ae(this.config.headers());
    try {
      const {
        responseHeaders: s,
        value: i,
        rawValue: u
      } = await Se({
        url: this.getUrl(),
        headers: Re(
          a,
          t ?? {},
          this.getModelConfigHeaders(),
          await Ae(this.config.o11yHeaders)
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
}, b_ = Ce(
  () => z(
    p({
      embeddings: P(P(k())),
      usage: p({ tokens: k() }).nullish(),
      providerMetadata: $e(l(), $e(l(), ie())).optional()
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
    const c = await Ae(this.config.headers());
    try {
      const {
        responseHeaders: d,
        value: m,
        rawValue: g
      } = await Se({
        url: this.getUrl(),
        headers: Re(
          c,
          s ?? {},
          this.getModelConfigHeaders(),
          await Ae(this.config.o11yHeaders)
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
          headers: d
        }
      };
    } catch (d) {
      throw At(d, await an(c));
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
}, x_ = p({
  images: P(ie()).optional()
}).catchall(ie()), I_ = p({
  images: P(l()),
  // Always base64 strings over the wire
  warnings: P(
    p({
      type: x("other"),
      message: l()
    })
  ).optional(),
  providerMetadata: $e(l(), x_).optional()
});
async function k_() {
  var e;
  return (e = cl.getContext().headers) == null ? void 0 : e["x-vercel-id"];
}
var T_ = "2.0.15", S_ = "0.0.1";
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
          [bl]: y.authMethod,
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
    }), w = Qt({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const h = await k_();
      return {
        ...y && { "ai-o11y-deployment-id": y },
        ..._ && { "ai-o11y-environment": _ },
        ...w && { "ai-o11y-region": w },
        ...h && { "ai-o11y-request-id": h }
      };
    };
  }, d = (y) => new y_(y, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), m = async () => {
    var y, _, w;
    const h = (w = (_ = (y = e._internal) == null ? void 0 : y.currentDate) == null ? void 0 : _.call(y).getTime()) != null ? w : Date.now();
    return (!r || h - s > a) && (s = h, r = new us({
      baseURL: i,
      headers: u,
      fetch: e.fetch
    }).getAvailableModels().then((v) => (o = v, v)).catch(async (v) => {
      throw await At(
        v,
        await an(await u())
      );
    })), o ? Promise.resolve(o) : r;
  }, g = async () => new us({
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
    return d(y);
  };
  return f.getAvailableModels = m, f.getCredits = g, f.imageModel = (y) => new w_(y, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), f.languageModel = d, f.textEmbeddingModel = (y) => new __(y, {
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
      token: await cl.getVercelOidcToken(),
      authMethod: "oidc"
    };
  } catch {
    return null;
  }
}
var R_ = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Dt = "1.9.0", cs = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function O_(e) {
  var t = /* @__PURE__ */ new Set([e]), n = /* @__PURE__ */ new Set(), r = e.match(cs);
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
    var c = u.match(cs);
    if (!c)
      return a(u);
    var d = {
      major: +c[1],
      minor: +c[2],
      patch: +c[3],
      prerelease: c[4]
    };
    return d.prerelease != null || o.major !== d.major ? a(u) : o.major === 0 ? o.minor === d.minor && o.patch <= d.patch ? s(u) : a(u) : o.minor <= d.minor ? s(u) : a(u);
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
        var d = Ut("diag"), m = q_((i = a.logLevel) !== null && i !== void 0 ? i : nt.INFO, o);
        if (d && !a.suppressOverrideMessage) {
          var g = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + g), m.warn("Current logger will overwrite one already registered from " + g);
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
function wl(e) {
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
), tb = new J_(), nb = new H_(), rb = new Y_(), ob = new K_(), ab = new W_(), sb = new X_(), ib = new Q_(), lb = new eb(), ub = {
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
var xl = "0000000000000000", Il = "00000000000000000000000000000000", vb = {
  traceId: Il,
  spanId: xl,
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
), ko = wl("OpenTelemetry Context Key SPAN");
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
function kl(e) {
  var t;
  return (t = To(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var wb = /^([0-9a-f]{32})$/i, xb = /^[0-9a-f]{16}$/i;
function Ib(e) {
  return wb.test(e) && e !== Il;
}
function kb(e) {
  return xb.test(e) && e !== xl;
}
function Tl(e) {
  return Ib(e.traceId) && kb(e.spanId);
}
function Tb(e) {
  return new bn(e);
}
var qr = fr.getInstance(), Sl = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, n, r) {
      r === void 0 && (r = qr.active());
      var o = !!(n != null && n.root);
      if (o)
        return new bn();
      var a = r && kl(r);
      return Sb(a) && Tl(a) ? new bn(a) : new bn();
    }, e.prototype.startActiveSpan = function(t, n, r, o) {
      var a, s, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = n : arguments.length === 3 ? (a = n, i = r) : (a = n, s = r, i = o);
        var u = s ?? qr.active(), c = this.startSpan(t, a, u), d = So(u, c);
        return qr.with(d, i, void 0, c);
      }
    }, e;
  })()
);
function Sb(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var Eb = new Sl(), Cb = (
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
      return new Sl();
    }, e;
  })()
), Rb = new Mb(), ds = (
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
), Eo = wl("OpenTelemetry Baggage Key");
function El(e) {
  return e.getValue(Eo) || void 0;
}
function Pb() {
  return El(fr.getInstance().active());
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
      this.createBaggage = V_, this.getBaggage = El, this.getActiveBaggage = Pb, this.setBaggage = jb, this.deleteBaggage = qb;
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
      this._proxyTracerProvider = new ds(), this.wrapSpanContext = Tb, this.isSpanContextValid = Tl, this.deleteSpan = _b, this.getSpan = To, this.getActiveSpan = yb, this.getSpanContext = kl, this.setSpan = So, this.setSpanContext = bb;
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
      Pn(Ur, xt.instance()), this._proxyTracerProvider = new ds();
    }, e;
  })()
), Zb = Ub.getInstance(), Lb = Object.defineProperty, Fb = (e, t) => {
  for (var n in t)
    Lb(e, n, { get: t[n], enumerable: !0 });
}, Cl = "AI_NoOutputSpecifiedError", Ml = `vercel.ai.error.${Cl}`, Vb = Symbol.for(Ml), Rl, Ol = class extends J {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: Cl, message: e }), this[Rl] = !0;
  }
  static isInstance(e) {
    return J.hasMarker(e, Ml);
  }
};
Rl = Vb;
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
var Bb = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.", ps = !1, Jt = (e) => {
  if (e.length === 0)
    return;
  const t = globalThis.AI_SDK_LOG_WARNINGS;
  if (t !== !1) {
    if (typeof t == "function") {
      t(e);
      return;
    }
    ps || (ps = !0, console.info(Bb));
    for (const n of e)
      console.warn(Gb(n));
  }
}, Nl = "AI_InvalidArgumentError", Al = `vercel.ai.error.${Nl}`, Jb = Symbol.for(Al), $l, be = class extends J {
  constructor({
    parameter: e,
    value: t,
    message: n
  }) {
    super({
      name: Nl,
      message: `Invalid argument for parameter ${e}: ${n}`
    }), this[$l] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return J.hasMarker(e, Al);
  }
};
$l = Jb;
var Pl = "AI_InvalidStreamPartError", jl = `vercel.ai.error.${Pl}`, Hb = Symbol.for(jl), ql, $0 = class extends J {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: Pl, message: t }), this[ql] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, jl);
  }
};
ql = Hb;
var Dl = "AI_InvalidToolInputError", zl = `vercel.ai.error.${Dl}`, Wb = Symbol.for(zl), Ul, Zl = class extends J {
  constructor({
    toolInput: e,
    toolName: t,
    cause: n,
    message: r = `Invalid input for tool ${t}: ${ln(n)}`
  }) {
    super({ name: Dl, message: r, cause: n }), this[Ul] = !0, this.toolInput = e, this.toolName = t;
  }
  static isInstance(e) {
    return J.hasMarker(e, zl);
  }
};
Ul = Wb;
var Ll = "AI_NoImageGeneratedError", Fl = `vercel.ai.error.${Ll}`, Yb = Symbol.for(Fl), Vl, Kb = class extends J {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: n
  }) {
    super({ name: Ll, message: e, cause: t }), this[Vl] = !0, this.responses = n;
  }
  static isInstance(e) {
    return J.hasMarker(e, Fl);
  }
};
Vl = Yb;
var Gl = "AI_NoObjectGeneratedError", Bl = `vercel.ai.error.${Gl}`, Xb = Symbol.for(Bl), Jl, Zt = class extends J {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: n,
    response: r,
    usage: o,
    finishReason: a
  }) {
    super({ name: Gl, message: e, cause: t }), this[Jl] = !0, this.text = n, this.response = r, this.usage = o, this.finishReason = a;
  }
  static isInstance(e) {
    return J.hasMarker(e, Bl);
  }
};
Jl = Xb;
var Hl = "AI_NoOutputGeneratedError", Wl = `vercel.ai.error.${Hl}`, Qb = Symbol.for(Wl), Yl, ew = class extends J {
  // used in isInstance
  constructor({
    message: e = "No output generated.",
    cause: t
  } = {}) {
    super({ name: Hl, message: e, cause: t }), this[Yl] = !0;
  }
  static isInstance(e) {
    return J.hasMarker(e, Wl);
  }
};
Yl = Qb;
var tw = class extends J {
  constructor(e) {
    super({
      name: "AI_NoSpeechGeneratedError",
      message: "No speech audio generated."
    }), this.responses = e.responses;
  }
}, Kl = "AI_NoSuchToolError", Xl = `vercel.ai.error.${Kl}`, nw = Symbol.for(Xl), Ql, to = class extends J {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: n = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Kl, message: n }), this[Ql] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return J.hasMarker(e, Xl);
  }
};
Ql = nw;
var eu = "AI_ToolCallRepairError", tu = `vercel.ai.error.${eu}`, rw = Symbol.for(tu), nu, ow = class extends J {
  constructor({
    cause: e,
    originalError: t,
    message: n = `Error repairing tool call: ${ln(e)}`
  }) {
    super({ name: eu, message: n, cause: e }), this[nu] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return J.hasMarker(e, tu);
  }
};
nu = rw;
var jn = class extends J {
  constructor(e) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${e.version} for provider "${e.provider}" and model "${e.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    }), this.version = e.version, this.provider = e.provider, this.modelId = e.modelId;
  }
}, ru = "AI_InvalidDataContentError", ou = `vercel.ai.error.${ru}`, aw = Symbol.for(ou), au, fs = class extends J {
  constructor({
    content: e,
    cause: t,
    message: n = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: ru, message: n, cause: t }), this[au] = !0, this.content = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, ou);
  }
};
au = aw;
var su = "AI_InvalidMessageRoleError", iu = `vercel.ai.error.${su}`, sw = Symbol.for(iu), lu, iw = class extends J {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: su, message: t }), this[lu] = !0, this.role = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, iu);
  }
};
lu = sw;
var uu = "AI_MessageConversionError", cu = `vercel.ai.error.${uu}`, lw = Symbol.for(cu), du, uw = class extends J {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: uu, message: t }), this[du] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return J.hasMarker(e, cu);
  }
};
du = lw;
var pu = "AI_DownloadError", fu = `vercel.ai.error.${pu}`, cw = Symbol.for(fu), mu, Zr = class extends J {
  constructor({
    url: e,
    statusCode: t,
    statusText: n,
    cause: r,
    message: o = r == null ? `Failed to download ${e}: ${t} ${n}` : `Failed to download ${e}: ${r}`
  }) {
    super({ name: pu, message: o, cause: r }), this[mu] = !0, this.url = e, this.statusCode = t, this.statusText = n;
  }
  static isInstance(e) {
    return J.hasMarker(e, fu);
  }
};
mu = cw;
var hu = "AI_RetryError", gu = `vercel.ai.error.${hu}`, dw = Symbol.for(gu), vu, ms = class extends J {
  constructor({
    message: e,
    reason: t,
    errors: n
  }) {
    super({ name: hu, message: e }), this[vu] = !0, this.reason = t, this.errors = n, this.lastError = n[n.length - 1];
  }
  static isInstance(e) {
    return J.hasMarker(e, gu);
  }
};
vu = dw;
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
function yu(e) {
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
var _u = [
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
], bu = [
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
var mt = "5.0.101", wu = async ({ url: e }) => {
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
}, hw = (e = wu) => (t) => Promise.all(
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
var xu = ne([
  l(),
  Kn(Uint8Array),
  Kn(ArrayBuffer),
  zi(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, n;
      return (n = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? n : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function Iu(e) {
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
      throw new J({
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
      throw new fs({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new fs({ content: e });
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
              const { data: a, mediaType: s } = Iu(
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
    isUrlSupportedByModel: a.mediaType != null && th({
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
  const { data: a, mediaType: s } = Iu(r);
  let i = s ?? e.mediaType, u = a;
  if (u instanceof URL) {
    const c = t[u.toString()];
    c && (u = c.data, i ?? (i = c.mediaType));
  }
  switch (o) {
    case "image":
      return (u instanceof Uint8Array || typeof u == "string") && (i = (n = mr({ data: u, signatures: _u })) != null ? n : i), {
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
  if (n != null && typeof n != "number")
    throw new be({
      parameter: "topP",
      value: n,
      message: "topP must be a number"
    });
  if (r != null && typeof r != "number")
    throw new be({
      parameter: "topK",
      value: r,
      message: "topK must be a number"
    });
  if (o != null && typeof o != "number")
    throw new be({
      parameter: "presencePenalty",
      value: o,
      message: "presencePenalty must be a number"
    });
  if (a != null && typeof a != "number")
    throw new be({
      parameter: "frequencyPenalty",
      value: a,
      message: "frequencyPenalty must be a number"
    });
  if (s != null && !Number.isInteger(s))
    throw new be({
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
function ku({
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
var Mn = Di(
  () => ne([
    bm(),
    l(),
    k(),
    B(),
    $e(l(), Mn),
    P(Mn)
  ])
), le = $e(
  l(),
  $e(l(), Mn)
), Tu = p({
  type: x("text"),
  text: l(),
  providerOptions: le.optional()
}), Iw = p({
  type: x("image"),
  image: ne([xu, Kn(URL)]),
  mediaType: l().optional(),
  providerOptions: le.optional()
}), Su = p({
  type: x("file"),
  data: ne([xu, Kn(URL)]),
  filename: l().optional(),
  mediaType: l(),
  providerOptions: le.optional()
}), kw = p({
  type: x("reasoning"),
  text: l(),
  providerOptions: le.optional()
}), Tw = p({
  type: x("tool-call"),
  toolCallId: l(),
  toolName: l(),
  input: ie(),
  providerOptions: le.optional(),
  providerExecuted: B().optional()
}), Sw = ce("type", [
  p({
    type: x("text"),
    value: l()
  }),
  p({
    type: x("json"),
    value: Mn
  }),
  p({
    type: x("error-text"),
    value: l()
  }),
  p({
    type: x("error-json"),
    value: Mn
  }),
  p({
    type: x("content"),
    value: P(
      ne([
        p({
          type: x("text"),
          text: l()
        }),
        p({
          type: x("media"),
          data: l(),
          mediaType: l()
        })
      ])
    )
  })
]), Eu = p({
  type: x("tool-result"),
  toolCallId: l(),
  toolName: l(),
  output: Sw,
  providerOptions: le.optional()
}), Cu = p(
  {
    role: x("system"),
    content: l(),
    providerOptions: le.optional()
  }
), P0 = Cu, Mu = p({
  role: x("user"),
  content: ne([
    l(),
    P(ne([Tu, Iw, Su]))
  ]),
  providerOptions: le.optional()
}), j0 = Mu, Ru = p({
  role: x("assistant"),
  content: ne([
    l(),
    P(
      ne([
        Tu,
        Su,
        kw,
        Tw,
        Eu
      ])
    )
  ]),
  providerOptions: le.optional()
}), q0 = Ru, Ou = p({
  role: x("tool"),
  content: P(Eu),
  providerOptions: le.optional()
}), D0 = Ou, Nu = ne([
  Cu,
  Mu,
  Ru,
  Ou
]), z0 = Nu;
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
  const n = await st({
    value: t,
    schema: P(Nu)
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
  return xo.isInstance(e) || vl.isInstance(e) ? new J({
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
function Ye({
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
function me({
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
function Au(e, t) {
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
} = {}) => async (o) => $u(o, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: n,
  abortSignal: r
});
async function $u(e, {
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
      throw new ms({
        message: `Failed after ${c} attempts. Last error: ${i}`,
        reason: "maxRetriesExceeded",
        errors: u
      });
    if (s instanceof Error && De.isInstance(s) && s.isRetryable === !0 && c <= t)
      return await go(
        Mw({
          error: s,
          exponentialBackoffDelay: n
        }),
        { abortSignal: o }
      ), $u(
        e,
        {
          maxRetries: t,
          delayInMs: r * n,
          backoffFactor: r,
          abortSignal: o
        },
        u
      );
    throw c === 1 ? s : new ms({
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
async function Pu({
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
      return await hs({ toolCall: e, tools: t });
    } catch (a) {
      if (n == null || !(to.isInstance(a) || Zl.isInstance(a)))
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
      return await hs({ toolCall: s, tools: t });
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
async function hs({
  toolCall: e,
  tools: t
}) {
  const n = e.toolName, r = t[n];
  if (r == null)
    throw new to({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const o = on(r.inputSchema), a = e.input.trim() === "" ? await st({ value: {}, schema: o }) : await Nt({ text: e.input, schema: o });
  if (a.success === !1)
    throw new Zl({
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
var ju = class {
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
function qu(e) {
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
async function Du({
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
  return n === "text" ? { type: "error-text", value: ln(e) } : n === "json" ? { type: "error-json", value: gs(e) } : t != null && t.toModelOutput ? t.toModelOutput(e) : typeof e == "string" ? { type: "text", value: e } : { type: "json", value: gs(e) };
}
function gs(e) {
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
  stopWhen: c = qu(1),
  experimental_output: d,
  experimental_telemetry: m,
  providerOptions: g,
  experimental_activeTools: f,
  activeTools: y = f,
  experimental_prepareStep: _,
  prepareStep: w = _,
  experimental_repairToolCall: h,
  experimental_download: v,
  experimental_context: b,
  _internal: {
    generateId: I = Nw,
    currentDate: E = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: O,
  ...S
}) {
  const M = sn(e), R = rr(c), { maxRetries: A, retry: j } = Ct({
    maxRetries: s,
    abortSignal: i
  }), D = Lt(S), q = ze(
    u ?? {},
    `ai/${mt}`
  ), C = dn({
    model: M,
    telemetry: m,
    headers: q,
    settings: { ...D, maxRetries: A }
  }), F = await gr({
    system: r,
    prompt: o,
    messages: a
  }), N = pn(m);
  try {
    return await Ye({
      name: "ai.generateText",
      attributes: me({
        telemetry: m,
        attributes: {
          ...We({
            operationId: "ai.generateText",
            telemetry: m
          }),
          ...C,
          // model:
          "ai.model.provider": M.provider,
          "ai.model.id": M.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: r, prompt: o, messages: a })
          }
        }
      }),
      tracer: N,
      fn: async (U) => {
        var Q, Oe, oe, Pe, Z, re, he;
        const T = Lt(S);
        let H, ue = [], pe = [];
        const Ze = [], ve = [];
        do {
          const _e = [
            ...F.messages,
            ...Ze
          ], ae = await (w == null ? void 0 : w({
            model: M,
            steps: ve,
            stepNumber: ve.length,
            messages: _e
          })), ee = sn(
            (Q = ae == null ? void 0 : ae.model) != null ? Q : M
          ), W = await hr({
            prompt: {
              system: (Oe = ae == null ? void 0 : ae.system) != null ? Oe : F.system,
              messages: (oe = ae == null ? void 0 : ae.messages) != null ? oe : _e
            },
            supportedUrls: await ee.supportedUrls,
            download: v
          }), { toolChoice: G, tools: je } = ku({
            tools: t,
            toolChoice: (Pe = ae == null ? void 0 : ae.toolChoice) != null ? Pe : n,
            activeTools: (Z = ae == null ? void 0 : ae.activeTools) != null ? Z : y
          });
          H = await j(
            () => {
              var fe;
              return Ye({
                name: "ai.generateText.doGenerate",
                attributes: me({
                  telemetry: m,
                  attributes: {
                    ...We({
                      operationId: "ai.generateText.doGenerate",
                      telemetry: m
                    }),
                    ...C,
                    // model:
                    "ai.model.provider": ee.provider,
                    "ai.model.id": ee.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: () => yr(W)
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: () => je == null ? void 0 : je.map((vt) => JSON.stringify(vt))
                    },
                    "ai.prompt.toolChoice": {
                      input: () => G != null ? JSON.stringify(G) : void 0
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": ee.provider,
                    "gen_ai.request.model": ee.modelId,
                    "gen_ai.request.frequency_penalty": S.frequencyPenalty,
                    "gen_ai.request.max_tokens": S.maxOutputTokens,
                    "gen_ai.request.presence_penalty": S.presencePenalty,
                    "gen_ai.request.stop_sequences": S.stopSequences,
                    "gen_ai.request.temperature": (fe = S.temperature) != null ? fe : void 0,
                    "gen_ai.request.top_k": S.topK,
                    "gen_ai.request.top_p": S.topP
                  }
                }),
                tracer: N,
                fn: async (vt) => {
                  var fn, Mt, tt, It, mn, Ht, Wt, Dn;
                  const qe = await ee.doGenerate({
                    ...T,
                    tools: je,
                    toolChoice: G,
                    responseFormat: d == null ? void 0 : d.responseFormat,
                    prompt: W,
                    providerOptions: g,
                    abortSignal: i,
                    headers: q
                  }), kt = {
                    id: (Mt = (fn = qe.response) == null ? void 0 : fn.id) != null ? Mt : I(),
                    timestamp: (It = (tt = qe.response) == null ? void 0 : tt.timestamp) != null ? It : E(),
                    modelId: (Ht = (mn = qe.response) == null ? void 0 : mn.modelId) != null ? Ht : ee.modelId,
                    headers: (Wt = qe.response) == null ? void 0 : Wt.headers,
                    body: (Dn = qe.response) == null ? void 0 : Dn.body
                  };
                  return vt.setAttributes(
                    me({
                      telemetry: m,
                      attributes: {
                        "ai.response.finishReason": qe.finishReason,
                        "ai.response.text": {
                          output: () => no(qe.content)
                        },
                        "ai.response.toolCalls": {
                          output: () => {
                            const Tt = vs(qe.content);
                            return Tt == null ? void 0 : JSON.stringify(Tt);
                          }
                        },
                        "ai.response.id": kt.id,
                        "ai.response.model": kt.modelId,
                        "ai.response.timestamp": kt.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          qe.providerMetadata
                        ),
                        // TODO rename telemetry attributes to inputTokens and outputTokens
                        "ai.usage.promptTokens": qe.usage.inputTokens,
                        "ai.usage.completionTokens": qe.usage.outputTokens,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [qe.finishReason],
                        "gen_ai.response.id": kt.id,
                        "gen_ai.response.model": kt.modelId,
                        "gen_ai.usage.input_tokens": qe.usage.inputTokens,
                        "gen_ai.usage.output_tokens": qe.usage.outputTokens
                      }
                    })
                  ), { ...qe, response: kt };
                }
              });
            }
          );
          const et = await Promise.all(
            H.content.filter(
              (fe) => fe.type === "tool-call"
            ).map(
              (fe) => Pu({
                toolCall: fe,
                tools: t,
                repairToolCall: h,
                system: r,
                messages: _e
              })
            )
          );
          for (const fe of et) {
            if (fe.invalid)
              continue;
            const vt = t[fe.toolName];
            (vt == null ? void 0 : vt.onInputAvailable) != null && await vt.onInputAvailable({
              input: fe.input,
              toolCallId: fe.toolCallId,
              messages: _e,
              abortSignal: i,
              experimental_context: b
            });
          }
          const L = et.filter(
            (fe) => fe.invalid && fe.dynamic
          );
          pe = [];
          for (const fe of L)
            pe.push({
              type: "tool-error",
              toolCallId: fe.toolCallId,
              toolName: fe.toolName,
              input: fe.input,
              error: cr(fe.error),
              dynamic: !0
            });
          ue = et.filter(
            (fe) => !fe.providerExecuted
          ), t != null && pe.push(
            ...await $w({
              toolCalls: ue.filter(
                (fe) => !fe.invalid
              ),
              tools: t,
              tracer: N,
              telemetry: m,
              messages: _e,
              abortSignal: i,
              experimental_context: b
            })
          );
          const se = jw({
            content: H.content,
            toolCalls: et,
            toolOutputs: pe
          });
          Ze.push(
            ...ro({
              content: se,
              tools: t
            })
          );
          const gt = new ju({
            content: se,
            finishReason: H.finishReason,
            usage: H.usage,
            warnings: H.warnings,
            providerMetadata: H.providerMetadata,
            request: (re = H.request) != null ? re : {},
            response: {
              ...H.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(Ze)
            }
          });
          Jt((he = H.warnings) != null ? he : []), ve.push(gt), await (O == null ? void 0 : O(gt));
        } while (
          // there are tool calls:
          ue.length > 0 && // all current tool calls have outputs (incl. execution errors):
          pe.length === ue.length && // continue until a stop condition is met:
          !await Du({ stopConditions: R, steps: ve })
        );
        U.setAttributes(
          me({
            telemetry: m,
            attributes: {
              "ai.response.finishReason": H.finishReason,
              "ai.response.text": {
                output: () => no(H.content)
              },
              "ai.response.toolCalls": {
                output: () => {
                  const _e = vs(H.content);
                  return _e == null ? void 0 : JSON.stringify(_e);
                }
              },
              "ai.response.providerMetadata": JSON.stringify(
                H.providerMetadata
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": H.usage.inputTokens,
              "ai.usage.completionTokens": H.usage.outputTokens
            }
          })
        );
        const Ne = ve[ve.length - 1];
        let Qe;
        return Ne.finishReason === "stop" && (Qe = await (d == null ? void 0 : d.parseOutput(
          { text: Ne.text },
          {
            response: Ne.response,
            usage: Ne.usage,
            finishReason: Ne.finishReason
          }
        ))), new Pw({
          steps: ve,
          resolvedOutput: Qe
        });
      }
    });
  } catch (U) {
    throw vr(U);
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
    e.map(async ({ toolCallId: u, toolName: c, input: d }) => {
      const m = t[c];
      if ((m == null ? void 0 : m.execute) != null)
        return Ye({
          name: "ai.toolCall",
          attributes: me({
            telemetry: r,
            attributes: {
              ...We({
                operationId: "ai.toolCall",
                telemetry: r
              }),
              "ai.toolCall.name": c,
              "ai.toolCall.id": u,
              "ai.toolCall.args": {
                output: () => JSON.stringify(d)
              }
            }
          }),
          tracer: n,
          fn: async (g) => {
            try {
              const f = Ji({
                execute: m.execute.bind(m),
                input: d,
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
                  me({
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
                input: d,
                output: y,
                dynamic: m.type === "dynamic"
              };
            } catch (f) {
              return Mo(g, f), {
                type: "tool-error",
                toolCallId: u,
                toolName: c,
                input: d,
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
      (e, t) => Au(e, t.usage),
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
      throw new Ol();
    return this.resolvedOutput;
  }
};
function vs(e) {
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
function zu({
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
function Uu({
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
        e.write(u) || await new Promise((d) => {
          e.once("drain", d);
        });
      }
    } catch (i) {
      throw i;
    } finally {
      e.end();
    }
  })();
}
function Zu({
  response: e,
  status: t,
  statusText: n,
  headers: r,
  textStream: o
}) {
  Uu({
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
var Lu = class extends TransformStream {
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
}, Fu = {
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
  let a = r.pipeThrough(new Lu());
  if (o) {
    const [s, i] = a.tee();
    a = s, o({ stream: i });
  }
  return new Response(a.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: qn(n, Fu)
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
var Vu = Ce(
  () => z(
    ne([
      Te({
        type: x("text-start"),
        id: l(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("text-delta"),
        id: l(),
        delta: l(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("text-end"),
        id: l(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("error"),
        errorText: l()
      }),
      Te({
        type: x("tool-input-start"),
        toolCallId: l(),
        toolName: l(),
        providerExecuted: B().optional(),
        dynamic: B().optional()
      }),
      Te({
        type: x("tool-input-delta"),
        toolCallId: l(),
        inputTextDelta: l()
      }),
      Te({
        type: x("tool-input-available"),
        toolCallId: l(),
        toolName: l(),
        input: ie(),
        providerExecuted: B().optional(),
        providerMetadata: le.optional(),
        dynamic: B().optional()
      }),
      Te({
        type: x("tool-input-error"),
        toolCallId: l(),
        toolName: l(),
        input: ie(),
        providerExecuted: B().optional(),
        providerMetadata: le.optional(),
        dynamic: B().optional(),
        errorText: l()
      }),
      Te({
        type: x("tool-output-available"),
        toolCallId: l(),
        output: ie(),
        providerExecuted: B().optional(),
        dynamic: B().optional(),
        preliminary: B().optional()
      }),
      Te({
        type: x("tool-output-error"),
        toolCallId: l(),
        errorText: l(),
        providerExecuted: B().optional(),
        dynamic: B().optional()
      }),
      Te({
        type: x("reasoning-start"),
        id: l(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("reasoning-delta"),
        id: l(),
        delta: l(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("reasoning-end"),
        id: l(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("source-url"),
        sourceId: l(),
        url: l(),
        title: l().optional(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("source-document"),
        sourceId: l(),
        mediaType: l(),
        title: l(),
        filename: l().optional(),
        providerMetadata: le.optional()
      }),
      Te({
        type: x("file"),
        url: l(),
        mediaType: l(),
        providerMetadata: le.optional()
      }),
      Te({
        type: zi(
          (e) => typeof e == "string" && e.startsWith("data-"),
          { message: 'Type must start with "data-"' }
        ),
        id: l().optional(),
        data: ie(),
        transient: B().optional()
      }),
      Te({
        type: x("start-step")
      }),
      Te({
        type: x("finish-step")
      }),
      Te({
        type: x("start"),
        messageId: l().optional(),
        messageMetadata: ie().optional()
      }),
      Te({
        type: x("finish"),
        finishReason: X([
          "stop",
          "length",
          "content-filter",
          "tool-calls",
          "error",
          "other",
          "unknown"
        ]).optional(),
        messageMetadata: ie().optional()
      }),
      Te({
        type: x("abort")
      }),
      Te({
        type: x("message-metadata"),
        messageMetadata: ie()
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
  function o(u, c, d) {
    switch (u) {
      case '"': {
        n = c, t.pop(), t.push(d), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = c, r = c, t.pop(), t.push(d), t.push("INSIDE_LITERAL");
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
        n = c, t.pop(), t.push(d), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = c, t.pop(), t.push(d), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = c, t.pop(), t.push(d), t.push("INSIDE_ARRAY_START");
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
        const d = e.substring(r, e.length);
        "true".startsWith(d) ? i += "true".slice(d.length) : "false".startsWith(d) ? i += "false".slice(d.length) : "null".startsWith(d) && (i += "null".slice(d.length));
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
function ys(e) {
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
        await r(async ({ state: c, write: d }) => {
          var m, g, f, y;
          function _(I) {
            const O = c.message.parts.filter(en).find(
              (S) => S.toolCallId === I
            );
            if (O == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return O;
          }
          function w(I) {
            const O = c.message.parts.filter(
              (S) => S.type === "dynamic-tool"
            ).find(
              (S) => S.toolCallId === I
            );
            if (O == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return O;
          }
          function h(I) {
            var E;
            const O = c.message.parts.find(
              (R) => en(R) && R.toolCallId === I.toolCallId
            ), S = I, M = O;
            O != null ? (O.state = I.state, M.input = S.input, M.output = S.output, M.errorText = S.errorText, M.rawInput = S.rawInput, M.preliminary = S.preliminary, M.providerExecuted = (E = S.providerExecuted) != null ? E : O.providerExecuted, S.providerMetadata != null && O.state === "input-available" && (O.callProviderMetadata = S.providerMetadata)) : c.message.parts.push({
              type: `tool-${I.toolName}`,
              toolCallId: I.toolCallId,
              state: I.state,
              input: S.input,
              output: S.output,
              rawInput: S.rawInput,
              errorText: S.errorText,
              providerExecuted: S.providerExecuted,
              preliminary: S.preliminary,
              ...S.providerMetadata != null ? { callProviderMetadata: S.providerMetadata } : {}
            });
          }
          function v(I) {
            var E, O;
            const S = c.message.parts.find(
              (A) => A.type === "dynamic-tool" && A.toolCallId === I.toolCallId
            ), M = I, R = S;
            S != null ? (S.state = I.state, R.toolName = I.toolName, R.input = M.input, R.output = M.output, R.errorText = M.errorText, R.rawInput = (E = M.rawInput) != null ? E : R.rawInput, R.preliminary = M.preliminary, R.providerExecuted = (O = M.providerExecuted) != null ? O : S.providerExecuted, M.providerMetadata != null && S.state === "input-available" && (S.callProviderMetadata = M.providerMetadata)) : c.message.parts.push({
              type: "dynamic-tool",
              toolName: I.toolName,
              toolCallId: I.toolCallId,
              state: I.state,
              input: M.input,
              output: M.output,
              errorText: M.errorText,
              preliminary: M.preliminary,
              providerExecuted: M.providerExecuted,
              ...M.providerMetadata != null ? { callProviderMetadata: M.providerMetadata } : {}
            });
          }
          async function b(I) {
            if (I != null) {
              const E = c.message.metadata != null ? Ro(c.message.metadata, I) : I;
              t != null && await Me({
                value: E,
                schema: t
              }), c.message.metadata = E;
            }
          }
          switch (i.type) {
            case "text-start": {
              const I = {
                type: "text",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              c.activeTextParts[i.id] = I, c.message.parts.push(I), d();
              break;
            }
            case "text-delta": {
              const I = c.activeTextParts[i.id];
              I.text += i.delta, I.providerMetadata = (m = i.providerMetadata) != null ? m : I.providerMetadata, d();
              break;
            }
            case "text-end": {
              const I = c.activeTextParts[i.id];
              I.state = "done", I.providerMetadata = (g = i.providerMetadata) != null ? g : I.providerMetadata, delete c.activeTextParts[i.id], d();
              break;
            }
            case "reasoning-start": {
              const I = {
                type: "reasoning",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              c.activeReasoningParts[i.id] = I, c.message.parts.push(I), d();
              break;
            }
            case "reasoning-delta": {
              const I = c.activeReasoningParts[i.id];
              I.text += i.delta, I.providerMetadata = (f = i.providerMetadata) != null ? f : I.providerMetadata, d();
              break;
            }
            case "reasoning-end": {
              const I = c.activeReasoningParts[i.id];
              I.providerMetadata = (y = i.providerMetadata) != null ? y : I.providerMetadata, I.state = "done", delete c.activeReasoningParts[i.id], d();
              break;
            }
            case "file": {
              c.message.parts.push({
                type: "file",
                mediaType: i.mediaType,
                url: i.url
              }), d();
              break;
            }
            case "source-url": {
              c.message.parts.push({
                type: "source-url",
                sourceId: i.sourceId,
                url: i.url,
                title: i.title,
                providerMetadata: i.providerMetadata
              }), d();
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
              }), d();
              break;
            }
            case "tool-input-start": {
              const I = c.message.parts.filter(en);
              c.partialToolCalls[i.toolCallId] = {
                text: "",
                toolName: i.toolName,
                index: I.length,
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
              }), d();
              break;
            }
            case "tool-input-delta": {
              const I = c.partialToolCalls[i.toolCallId];
              I.text += i.inputTextDelta;
              const { value: E } = await Oo(
                I.text
              );
              I.dynamic ? v({
                toolCallId: i.toolCallId,
                toolName: I.toolName,
                state: "input-streaming",
                input: E
              }) : h({
                toolCallId: i.toolCallId,
                toolName: I.toolName,
                state: "input-streaming",
                input: E
              }), d();
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
              }), d(), a && !i.providerExecuted && await a({
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
              }), d();
              break;
            }
            case "tool-output-available": {
              if (i.dynamic) {
                const I = w(
                  i.toolCallId
                );
                v({
                  toolCallId: i.toolCallId,
                  toolName: I.toolName,
                  state: "output-available",
                  input: I.input,
                  output: i.output,
                  preliminary: i.preliminary
                });
              } else {
                const I = _(i.toolCallId);
                h({
                  toolCallId: i.toolCallId,
                  toolName: or(I),
                  state: "output-available",
                  input: I.input,
                  output: i.output,
                  providerExecuted: i.providerExecuted,
                  preliminary: i.preliminary
                });
              }
              d();
              break;
            }
            case "tool-output-error": {
              if (i.dynamic) {
                const I = w(
                  i.toolCallId
                );
                v({
                  toolCallId: i.toolCallId,
                  toolName: I.toolName,
                  state: "output-error",
                  input: I.input,
                  errorText: i.errorText,
                  providerExecuted: i.providerExecuted
                });
              } else {
                const I = _(i.toolCallId);
                h({
                  toolCallId: i.toolCallId,
                  toolName: or(I),
                  state: "output-error",
                  input: I.input,
                  rawInput: I.rawInput,
                  errorText: i.errorText,
                  providerExecuted: i.providerExecuted
                });
              }
              d();
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
              i.messageId != null && (c.message.id = i.messageId), await b(i.messageMetadata), (i.messageId != null || i.messageMetadata != null) && d();
              break;
            }
            case "finish": {
              i.finishReason != null && (c.finishReason = i.finishReason), await b(i.messageMetadata), i.messageMetadata != null && d();
              break;
            }
            case "message-metadata": {
              await b(i.messageMetadata), i.messageMetadata != null && d();
              break;
            }
            case "error": {
              o == null || o(new Error(i.errorText));
              break;
            }
            default:
              if (zw(i)) {
                (n == null ? void 0 : n[i.type]) != null && await Me({
                  value: i.data,
                  schema: n[i.type]
                });
                const I = i;
                if (I.transient) {
                  s == null || s(I);
                  break;
                }
                const E = I.id != null ? c.message.parts.find(
                  (O) => I.type === O.type && I.id === O.id
                ) : void 0;
                E != null ? E.data = I.data : c.message.parts.push(I), s == null || s(I), d();
              }
          }
          u.enqueue(i);
        });
      }
    })
  );
}
function Gu({
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
  let d = !1;
  const m = async () => {
    if (d || !n)
      return;
    d = !0;
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
  let s = o.pipeThrough(new Lu());
  if (a) {
    const [i, u] = s.tee();
    s = i, a({ stream: u });
  }
  Uu({
    response: e,
    status: t,
    statusText: n,
    headers: Object.fromEntries(
      qn(r, Fu).entries()
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
function _s() {
  let e, t;
  return {
    promise: new Promise((r, o) => {
      e = r, t = o;
    }),
    resolve: e,
    reject: t
  };
}
function Bu() {
  let e = [], t = null, n = !1, r = _s();
  const o = () => {
    n = !0, r.resolve(), e.forEach((s) => s.cancel()), e = [], t == null || t.close();
  }, a = async () => {
    if (n && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return r = _s(), await r.promise, a();
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
var dt = class {
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
function Ju() {
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
  const d = new ReadableStream({
    start(h) {
      c = h;
    }
  }), m = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
  let f = !1, y;
  function _() {
    f && m.size === 0 && (y != null && c.enqueue(y), c.close());
  }
  const w = new TransformStream({
    async transform(h, v) {
      const b = h.type;
      switch (b) {
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
            const I = await Pu({
              toolCall: h,
              tools: e,
              repairToolCall: i,
              system: o,
              messages: a
            });
            if (v.enqueue(I), I.invalid) {
              c.enqueue({
                type: "tool-error",
                toolCallId: I.toolCallId,
                toolName: I.toolName,
                input: I.input,
                error: cr(I.error),
                dynamic: !0
              });
              break;
            }
            const E = e[I.toolName];
            if (g.set(I.toolCallId, I.input), E.onInputAvailable != null && await E.onInputAvailable({
              input: I.input,
              toolCallId: I.toolCallId,
              messages: a,
              abortSignal: s,
              experimental_context: u
            }), E.execute != null && I.providerExecuted !== !0) {
              const O = Fe();
              m.add(O), Ye({
                name: "ai.toolCall",
                attributes: me({
                  telemetry: r,
                  attributes: {
                    ...We({
                      operationId: "ai.toolCall",
                      telemetry: r
                    }),
                    "ai.toolCall.name": I.toolName,
                    "ai.toolCall.id": I.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(I.input)
                    }
                  }
                }),
                tracer: n,
                fn: async (S) => {
                  let M;
                  try {
                    const R = Ji({
                      execute: E.execute.bind(E),
                      input: I.input,
                      options: {
                        toolCallId: I.toolCallId,
                        messages: a,
                        abortSignal: s,
                        experimental_context: u
                      }
                    });
                    for await (const A of R)
                      c.enqueue({
                        ...I,
                        type: "tool-result",
                        output: A.output,
                        ...A.type === "preliminary" && {
                          preliminary: !0
                        }
                      }), A.type === "final" && (M = A.output);
                  } catch (R) {
                    Mo(S, R), c.enqueue({
                      ...I,
                      type: "tool-error",
                      error: R
                    }), m.delete(O), _();
                    return;
                  }
                  m.delete(O), _();
                  try {
                    S.setAttributes(
                      me({
                        telemetry: r,
                        attributes: {
                          "ai.toolCall.result": {
                            output: () => JSON.stringify(M)
                          }
                        }
                      })
                    );
                  } catch {
                  }
                }
              });
            }
          } catch (I) {
            c.enqueue({ type: "error", error: I });
          }
          break;
        }
        case "tool-result": {
          const I = h.toolName;
          h.isError ? c.enqueue({
            type: "tool-error",
            toolCallId: h.toolCallId,
            toolName: I,
            input: g.get(h.toolCallId),
            providerExecuted: h.providerExecuted,
            error: h.result
          }) : v.enqueue({
            type: "tool-result",
            toolCallId: h.toolCallId,
            toolName: I,
            input: g.get(h.toolCallId),
            output: h.result,
            providerExecuted: h.providerExecuted
          });
          break;
        }
        default: {
          const I = b;
          throw new Error(`Unhandled chunk type: ${I}`);
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
        t.pipeThrough(w).pipeTo(
          new WritableStream({
            write(v) {
              h.enqueue(v);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
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
  stopWhen: c = qu(1),
  experimental_output: d,
  experimental_telemetry: m,
  prepareStep: g,
  providerOptions: f,
  experimental_activeTools: y,
  activeTools: _ = y,
  experimental_repairToolCall: w,
  experimental_transform: h,
  experimental_download: v,
  includeRawChunks: b = !1,
  onChunk: I,
  onError: E = ({ error: C }) => {
    console.error(C);
  },
  onFinish: O,
  onAbort: S,
  onStepFinish: M,
  experimental_context: R,
  _internal: {
    now: A = Ju,
    generateId: j = Vw,
    currentDate: D = () => /* @__PURE__ */ new Date()
  } = {},
  ...q
}) {
  return new Jw({
    model: sn(e),
    telemetry: m,
    headers: u,
    settings: q,
    maxRetries: s,
    abortSignal: i,
    system: r,
    prompt: o,
    messages: a,
    tools: t,
    toolChoice: n,
    transforms: rr(h),
    activeTools: _,
    repairToolCall: w,
    stopConditions: rr(c),
    output: d,
    providerOptions: f,
    prepareStep: g,
    includeRawChunks: b,
    onChunk: I,
    onError: E,
    onFinish: O,
    onAbort: S,
    onStepFinish: M,
    now: A,
    currentDate: D,
    generateId: j,
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
    toolChoice: d,
    transforms: m,
    activeTools: g,
    repairToolCall: f,
    stopConditions: y,
    output: _,
    providerOptions: w,
    prepareStep: h,
    includeRawChunks: v,
    now: b,
    currentDate: I,
    generateId: E,
    onChunk: O,
    onError: S,
    onFinish: M,
    onAbort: R,
    onStepFinish: A,
    experimental_context: j,
    download: D
  }) {
    this._totalUsage = new dt(), this._finishReason = new dt(), this._steps = new dt(), this.output = _, this.includeRawChunks = v, this.tools = c;
    let q, C = [];
    const F = [];
    let N, U, Q = {}, Oe = [];
    const oe = [];
    let Pe, Z = {}, re = {};
    const he = new TransformStream({
      async transform(ae, ee) {
        var W, G, je, et;
        ee.enqueue(ae);
        const { part: L } = ae;
        if ((L.type === "text-delta" || L.type === "reasoning-delta" || L.type === "source" || L.type === "tool-call" || L.type === "tool-result" || L.type === "tool-input-start" || L.type === "tool-input-delta" || L.type === "raw") && await (O == null ? void 0 : O({ chunk: L })), L.type === "error" && await S({ error: vr(L.error) }), L.type === "text-start" && (Z[L.id] = {
          type: "text",
          text: "",
          providerMetadata: L.providerMetadata
        }, C.push(Z[L.id])), L.type === "text-delta") {
          const se = Z[L.id];
          if (se == null) {
            ee.enqueue({
              part: {
                type: "error",
                error: `text part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          se.text += L.text, se.providerMetadata = (W = L.providerMetadata) != null ? W : se.providerMetadata;
        }
        if (L.type === "text-end") {
          const se = Z[L.id];
          if (se == null) {
            ee.enqueue({
              part: {
                type: "error",
                error: `text part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          se.providerMetadata = (G = L.providerMetadata) != null ? G : se.providerMetadata, delete Z[L.id];
        }
        if (L.type === "reasoning-start" && (re[L.id] = {
          type: "reasoning",
          text: "",
          providerMetadata: L.providerMetadata
        }, C.push(re[L.id])), L.type === "reasoning-delta") {
          const se = re[L.id];
          if (se == null) {
            ee.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          se.text += L.text, se.providerMetadata = (je = L.providerMetadata) != null ? je : se.providerMetadata;
        }
        if (L.type === "reasoning-end") {
          const se = re[L.id];
          if (se == null) {
            ee.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          se.providerMetadata = (et = L.providerMetadata) != null ? et : se.providerMetadata, delete re[L.id];
        }
        if (L.type === "file" && C.push({ type: "file", file: L.file }), L.type === "source" && C.push(L), L.type === "tool-call" && C.push(L), L.type === "tool-result" && !L.preliminary && C.push(L), L.type === "tool-error" && C.push(L), L.type === "start-step" && (Q = L.request, Oe = L.warnings), L.type === "finish-step") {
          const se = ro({
            content: C,
            tools: c
          }), gt = new ju({
            content: C,
            finishReason: L.finishReason,
            usage: L.usage,
            warnings: Oe,
            request: Q,
            response: {
              ...L.response,
              messages: [...F, ...se]
            },
            providerMetadata: L.providerMetadata
          });
          await (A == null ? void 0 : A(gt)), Jt(Oe), oe.push(gt), C = [], re = {}, Z = {}, F.push(...se), q.resolve();
        }
        L.type === "finish" && (U = L.totalUsage, N = L.finishReason);
      },
      async flush(ae) {
        try {
          if (oe.length === 0) {
            const je = new ew({
              message: "No output generated. Check the stream for errors."
            });
            _e._finishReason.reject(je), _e._totalUsage.reject(je), _e._steps.reject(je);
            return;
          }
          const ee = N ?? "unknown", W = U ?? {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          };
          _e._finishReason.resolve(ee), _e._totalUsage.resolve(W), _e._steps.resolve(oe);
          const G = oe[oe.length - 1];
          await (M == null ? void 0 : M({
            finishReason: ee,
            totalUsage: W,
            usage: G.usage,
            content: G.content,
            text: G.text,
            reasoningText: G.reasoningText,
            reasoning: G.reasoning,
            files: G.files,
            sources: G.sources,
            toolCalls: G.toolCalls,
            staticToolCalls: G.staticToolCalls,
            dynamicToolCalls: G.dynamicToolCalls,
            toolResults: G.toolResults,
            staticToolResults: G.staticToolResults,
            dynamicToolResults: G.dynamicToolResults,
            request: G.request,
            response: G.response,
            warnings: G.warnings,
            providerMetadata: G.providerMetadata,
            steps: oe
          })), Pe.setAttributes(
            me({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": ee,
                "ai.response.text": { output: () => G.text },
                "ai.response.toolCalls": {
                  output: () => {
                    var je;
                    return (je = G.toolCalls) != null && je.length ? JSON.stringify(G.toolCalls) : void 0;
                  }
                },
                "ai.response.providerMetadata": JSON.stringify(
                  G.providerMetadata
                ),
                "ai.usage.inputTokens": W.inputTokens,
                "ai.usage.outputTokens": W.outputTokens,
                "ai.usage.totalTokens": W.totalTokens,
                "ai.usage.reasoningTokens": W.reasoningTokens,
                "ai.usage.cachedInputTokens": W.cachedInputTokens
              }
            })
          );
        } catch (ee) {
          ae.error(ee);
        } finally {
          Pe.end();
        }
      }
    }), T = Bu();
    this.addStream = T.addStream, this.closeStream = T.close;
    const H = T.stream.getReader();
    let ue = new ReadableStream({
      async start(ae) {
        ae.enqueue({ type: "start" });
      },
      async pull(ae) {
        function ee() {
          R == null || R({ steps: oe }), ae.enqueue({ type: "abort" }), ae.close();
        }
        try {
          const { done: W, value: G } = await H.read();
          if (W) {
            ae.close();
            return;
          }
          if (a != null && a.aborted) {
            ee();
            return;
          }
          ae.enqueue(G);
        } catch (W) {
          zt(W) && (a != null && a.aborted) ? ee() : ae.error(W);
        }
      },
      cancel(ae) {
        return T.stream.cancel(ae);
      }
    });
    for (const ae of m)
      ue = ue.pipeThrough(
        ae({
          tools: c,
          stopStream() {
            T.terminate();
          }
        })
      );
    this.baseStream = ue.pipeThrough(Bw(_)).pipeThrough(he);
    const { maxRetries: pe, retry: Ze } = Ct({
      maxRetries: o,
      abortSignal: a
    }), ve = pn(t), Ne = Lt(r), Qe = dn({
      model: e,
      telemetry: t,
      headers: n,
      settings: { ...Ne, maxRetries: pe }
    }), _e = this;
    Ye({
      name: "ai.streamText",
      attributes: me({
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
      fn: async (ae) => {
        Pe = ae;
        async function ee({
          currentStep: W,
          responseMessages: G,
          usage: je
        }) {
          var et, L, se, gt, fe;
          const vt = _e.includeRawChunks;
          q = new dt();
          const fn = await gr({
            system: s,
            prompt: i,
            messages: u
          }), Mt = [
            ...fn.messages,
            ...G
          ], tt = await (h == null ? void 0 : h({
            model: e,
            steps: oe,
            stepNumber: oe.length,
            messages: Mt
          })), It = sn(
            (et = tt == null ? void 0 : tt.model) != null ? et : e
          ), mn = await hr({
            prompt: {
              system: (L = tt == null ? void 0 : tt.system) != null ? L : fn.system,
              messages: (se = tt == null ? void 0 : tt.messages) != null ? se : Mt
            },
            supportedUrls: await It.supportedUrls,
            download: D
          }), { toolChoice: Ht, tools: Wt } = ku({
            tools: c,
            toolChoice: (gt = tt == null ? void 0 : tt.toolChoice) != null ? gt : d,
            activeTools: (fe = tt == null ? void 0 : tt.activeTools) != null ? fe : g
          }), {
            result: { stream: Dn, response: qe, request: kt },
            doStreamSpan: Tt,
            startTimestampMs: Po
          } = await Ze(
            () => Ye({
              name: "ai.streamText.doStream",
              attributes: me({
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
                    input: () => Wt == null ? void 0 : Wt.map((K) => JSON.stringify(K))
                  },
                  "ai.prompt.toolChoice": {
                    input: () => Ht != null ? JSON.stringify(Ht) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": It.provider,
                  "gen_ai.request.model": It.modelId,
                  "gen_ai.request.frequency_penalty": Ne.frequencyPenalty,
                  "gen_ai.request.max_tokens": Ne.maxOutputTokens,
                  "gen_ai.request.presence_penalty": Ne.presencePenalty,
                  "gen_ai.request.stop_sequences": Ne.stopSequences,
                  "gen_ai.request.temperature": Ne.temperature,
                  "gen_ai.request.top_k": Ne.topK,
                  "gen_ai.request.top_p": Ne.topP
                }
              }),
              tracer: ve,
              endWhenDone: !1,
              fn: async (K) => ({
                startTimestampMs: b(),
                // get before the call
                doStreamSpan: K,
                result: await It.doStream({
                  ...Ne,
                  tools: Wt,
                  toolChoice: Ht,
                  responseFormat: _ == null ? void 0 : _.responseFormat,
                  prompt: mn,
                  providerOptions: w,
                  abortSignal: a,
                  headers: n,
                  includeRawChunks: vt
                })
              })
            })
          ), rc = Fw({
            tools: c,
            generatorStream: Dn,
            tracer: ve,
            telemetry: t,
            system: s,
            messages: Mt,
            repairToolCall: f,
            abortSignal: a,
            experimental_context: j
          }), oc = kt ?? {}, zn = [], wr = [];
          let xr;
          const Ir = {};
          let Yt = "unknown", lt = {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }, kr, jo = !0, yt = {
            id: E(),
            timestamp: I(),
            modelId: e.modelId
          }, qo = "";
          _e.addStream(
            rc.pipeThrough(
              new TransformStream({
                async transform(K, Le) {
                  var hn, gn, Un, St;
                  if (K.type === "stream-start") {
                    xr = K.warnings;
                    return;
                  }
                  if (jo) {
                    const Ge = b() - Po;
                    jo = !1, Tt.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": Ge
                    }), Tt.setAttributes({
                      "ai.response.msToFirstChunk": Ge
                    }), Le.enqueue({
                      type: "start-step",
                      request: oc,
                      warnings: xr ?? []
                    });
                  }
                  const Do = K.type;
                  switch (Do) {
                    case "text-start":
                    case "text-end": {
                      Le.enqueue(K);
                      break;
                    }
                    case "text-delta": {
                      K.delta.length > 0 && (Le.enqueue({
                        type: "text-delta",
                        id: K.id,
                        text: K.delta,
                        providerMetadata: K.providerMetadata
                      }), qo += K.delta);
                      break;
                    }
                    case "reasoning-start":
                    case "reasoning-end": {
                      Le.enqueue(K);
                      break;
                    }
                    case "reasoning-delta": {
                      Le.enqueue({
                        type: "reasoning-delta",
                        id: K.id,
                        text: K.delta,
                        providerMetadata: K.providerMetadata
                      });
                      break;
                    }
                    case "tool-call": {
                      Le.enqueue(K), zn.push(K);
                      break;
                    }
                    case "tool-result": {
                      Le.enqueue(K), K.preliminary || wr.push(K);
                      break;
                    }
                    case "tool-error": {
                      Le.enqueue(K), wr.push(K);
                      break;
                    }
                    case "response-metadata": {
                      yt = {
                        id: (hn = K.id) != null ? hn : yt.id,
                        timestamp: (gn = K.timestamp) != null ? gn : yt.timestamp,
                        modelId: (Un = K.modelId) != null ? Un : yt.modelId
                      };
                      break;
                    }
                    case "finish": {
                      lt = K.usage, Yt = K.finishReason, kr = K.providerMetadata;
                      const Ge = b() - Po;
                      Tt.addEvent("ai.stream.finish"), Tt.setAttributes({
                        "ai.response.msToFinish": Ge,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((St = lt.outputTokens) != null ? St : 0) / Ge
                      });
                      break;
                    }
                    case "file": {
                      Le.enqueue(K);
                      break;
                    }
                    case "source": {
                      Le.enqueue(K);
                      break;
                    }
                    case "tool-input-start": {
                      Ir[K.id] = K.toolName;
                      const Ge = c == null ? void 0 : c[K.toolName];
                      (Ge == null ? void 0 : Ge.onInputStart) != null && await Ge.onInputStart({
                        toolCallId: K.id,
                        messages: Mt,
                        abortSignal: a,
                        experimental_context: j
                      }), Le.enqueue({
                        ...K,
                        dynamic: (Ge == null ? void 0 : Ge.type) === "dynamic"
                      });
                      break;
                    }
                    case "tool-input-end": {
                      delete Ir[K.id], Le.enqueue(K);
                      break;
                    }
                    case "tool-input-delta": {
                      const Ge = Ir[K.id], Tr = c == null ? void 0 : c[Ge];
                      (Tr == null ? void 0 : Tr.onInputDelta) != null && await Tr.onInputDelta({
                        inputTextDelta: K.delta,
                        toolCallId: K.id,
                        messages: Mt,
                        abortSignal: a,
                        experimental_context: j
                      }), Le.enqueue(K);
                      break;
                    }
                    case "error": {
                      Le.enqueue(K), Yt = "error";
                      break;
                    }
                    case "raw": {
                      vt && Le.enqueue(K);
                      break;
                    }
                    default: {
                      const Ge = Do;
                      throw new Error(`Unknown chunk type: ${Ge}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(K) {
                  const Le = zn.length > 0 ? JSON.stringify(zn) : void 0;
                  try {
                    Tt.setAttributes(
                      me({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Yt,
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
                          "ai.usage.inputTokens": lt.inputTokens,
                          "ai.usage.outputTokens": lt.outputTokens,
                          "ai.usage.totalTokens": lt.totalTokens,
                          "ai.usage.reasoningTokens": lt.reasoningTokens,
                          "ai.usage.cachedInputTokens": lt.cachedInputTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [Yt],
                          "gen_ai.response.id": yt.id,
                          "gen_ai.response.model": yt.modelId,
                          "gen_ai.usage.input_tokens": lt.inputTokens,
                          "gen_ai.usage.output_tokens": lt.outputTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    Tt.end();
                  }
                  K.enqueue({
                    type: "finish-step",
                    finishReason: Yt,
                    usage: lt,
                    providerMetadata: kr,
                    response: {
                      ...yt,
                      headers: qe == null ? void 0 : qe.headers
                    }
                  });
                  const hn = Au(je, lt);
                  await q.promise;
                  const gn = zn.filter(
                    (St) => St.providerExecuted !== !0
                  ), Un = wr.filter(
                    (St) => St.providerExecuted !== !0
                  );
                  if (gn.length > 0 && // all current tool calls have outputs (incl. execution errors):
                  Un.length === gn.length && // continue until a stop condition is met:
                  !await Du({
                    stopConditions: y,
                    steps: oe
                  })) {
                    G.push(
                      ...ro({
                        content: (
                          // use transformed content to create the messages for the next step:
                          oe[oe.length - 1].content
                        ),
                        tools: c
                      })
                    );
                    try {
                      await ee({
                        currentStep: W + 1,
                        responseMessages: G,
                        usage: hn
                      });
                    } catch (St) {
                      K.enqueue({
                        type: "error",
                        error: St
                      }), _e.closeStream();
                    }
                  } else
                    K.enqueue({
                      type: "finish",
                      finishReason: Yt,
                      totalUsage: hn
                    }), _e.closeStream();
                }
              })
            )
          );
        }
        await ee({
          currentStep: 0,
          responseMessages: [],
          usage: {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }
        });
      }
    }).catch((ae) => {
      _e.addStream(
        new ReadableStream({
          start(ee) {
            ee.enqueue({ type: "error", error: ae }), ee.close();
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
      throw new Ol();
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
    }) : void 0, d = {}, m = (f) => {
      var y, _;
      const w = d[f];
      return ((_ = (y = this.tools) == null ? void 0 : y[w]) == null ? void 0 : _.type) === "dynamic" ? !0 : void 0;
    }, g = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (f, y) => {
          const _ = r == null ? void 0 : r({ part: f }), w = f.type;
          switch (w) {
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
              d[f.id] = f.toolName;
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
              d[f.toolCallId] = f.toolName;
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
              const h = w;
              throw new Error(`Unknown chunk type: ${h}`);
            }
          }
          _ != null && w !== "start" && w !== "finish" && y.enqueue({
            type: "message-metadata",
            messageMetadata: _
          });
        }
      })
    );
    return Et(
      Gu({
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
    ...d
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
      ...d
    });
  }
  pipeTextStreamToResponse(e, t) {
    Zu({
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
    return zu({
      textStream: this.textStream,
      ...e
    });
  }
};
function Hu(e, t) {
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
              else if (ys(m))
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
            const d = a.filter(
              (m) => en(m) && m.providerExecuted !== !0 || m.type === "dynamic-tool"
            );
            d.length > 0 && n.push({
              role: "tool",
              content: d.map((m) => {
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
            Fr(s) || ys(s) || Vr(s) || Rn(s) || Lr(s) ? a.push(s) : s.type === "step-start" && o();
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
var Z0 = Hu, L0 = class {
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
      prompt: Hu(e.messages)
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
  const i = yu(e), { maxRetries: u, retry: c } = Ct({
    maxRetries: r,
    abortSignal: o
  }), d = ze(
    a ?? {},
    `ai/${mt}`
  ), m = dn({
    model: i,
    telemetry: s,
    headers: d,
    settings: { maxRetries: u }
  }), g = pn(s);
  return Ye({
    name: "ai.embed",
    attributes: me({
      telemetry: s,
      attributes: {
        ...We({ operationId: "ai.embed", telemetry: s }),
        ...m,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: g,
    fn: async (f) => {
      const { embedding: y, usage: _, response: w, providerMetadata: h } = await c(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Ye({
            name: "ai.embed.doEmbed",
            attributes: me({
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
              var b;
              const I = await i.doEmbed({
                values: [t],
                abortSignal: o,
                headers: d,
                providerOptions: n
              }), E = I.embeddings[0], O = (b = I.usage) != null ? b : { tokens: NaN };
              return v.setAttributes(
                me({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => I.embeddings.map(
                        (S) => JSON.stringify(S)
                      )
                    },
                    "ai.usage.tokens": O.tokens
                  }
                })
              ), {
                embedding: E,
                usage: O,
                providerMetadata: I.providerMetadata,
                response: I.response
              };
            }
          })
        )
      );
      return f.setAttributes(
        me({
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
        response: w
      });
    }
  });
}
var Hw = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.providerMetadata = e.providerMetadata, this.response = e.response;
  }
};
function bs(e, t) {
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
  const u = yu(e), { maxRetries: c, retry: d } = Ct({
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
  return Ye({
    name: "ai.embedMany",
    attributes: me({
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
      const [w, h] = await Promise.all([
        u.maxEmbeddingsPerCall,
        u.supportsParallelCalls
      ]);
      if (w == null || w === 1 / 0) {
        const { embeddings: M, usage: R, response: A, providerMetadata: j } = await d(
          () => Ye({
            name: "ai.embedMany.doEmbed",
            attributes: me({
              telemetry: i,
              attributes: {
                ...We({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...g,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => t.map((D) => JSON.stringify(D))
                }
              }
            }),
            tracer: f,
            fn: async (D) => {
              var q;
              const C = await u.doEmbed({
                values: t,
                abortSignal: o,
                headers: m,
                providerOptions: s
              }), F = C.embeddings, N = (q = C.usage) != null ? q : { tokens: NaN };
              return D.setAttributes(
                me({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => F.map(
                        (U) => JSON.stringify(U)
                      )
                    },
                    "ai.usage.tokens": N.tokens
                  }
                })
              ), {
                embeddings: F,
                usage: N,
                providerMetadata: C.providerMetadata,
                response: C.response
              };
            }
          })
        );
        return y.setAttributes(
          me({
            telemetry: i,
            attributes: {
              "ai.embeddings": {
                output: () => M.map((D) => JSON.stringify(D))
              },
              "ai.usage.tokens": R.tokens
            }
          })
        ), new ws({
          values: t,
          embeddings: M,
          usage: R,
          providerMetadata: j,
          responses: [A]
        });
      }
      const v = bs(t, w), b = [], I = [];
      let E = 0, O;
      const S = bs(
        v,
        h ? n : 1
      );
      for (const M of S) {
        const R = await Promise.all(
          M.map((A) => d(() => Ye({
            name: "ai.embedMany.doEmbed",
            attributes: me({
              telemetry: i,
              attributes: {
                ...We({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...g,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => A.map((j) => JSON.stringify(j))
                }
              }
            }),
            tracer: f,
            fn: async (j) => {
              var D;
              const q = await u.doEmbed({
                values: A,
                abortSignal: o,
                headers: m,
                providerOptions: s
              }), C = q.embeddings, F = (D = q.usage) != null ? D : { tokens: NaN };
              return j.setAttributes(
                me({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => C.map(
                        (N) => JSON.stringify(N)
                      )
                    },
                    "ai.usage.tokens": F.tokens
                  }
                })
              ), {
                embeddings: C,
                usage: F,
                providerMetadata: q.providerMetadata,
                response: q.response
              };
            }
          })))
        );
        for (const A of R)
          if (b.push(...A.embeddings), I.push(A.response), E += A.usage.tokens, A.providerMetadata)
            if (!O)
              O = { ...A.providerMetadata };
            else
              for (const [j, D] of Object.entries(
                A.providerMetadata
              ))
                O[j] = {
                  ...(_ = O[j]) != null ? _ : {},
                  ...D
                };
      }
      return y.setAttributes(
        me({
          telemetry: i,
          attributes: {
            "ai.embeddings": {
              output: () => b.map((M) => JSON.stringify(M))
            },
            "ai.usage.tokens": E
          }
        })
      ), new ws({
        values: t,
        embeddings: b,
        usage: { tokens: E },
        providerMetadata: O,
        responses: I
      });
    }
  });
}
var ws = class {
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
  headers: d
}) {
  var m, g;
  const f = pw(e), y = ze(
    d ?? {},
    `ai/${mt}`
  ), { retry: _ } = Ct({
    maxRetries: u,
    abortSignal: c
  }), w = (m = r ?? await Yw(f)) != null ? m : 1, h = Math.ceil(n / w), v = Array.from({ length: h }, (M, R) => {
    if (R < h - 1)
      return w;
    const A = n % w;
    return A === 0 ? w : A;
  }), b = await Promise.all(
    v.map(
      async (M) => _(
        () => f.doGenerate({
          prompt: t,
          n: M,
          abortSignal: c,
          headers: y,
          size: o,
          aspectRatio: a,
          seed: s,
          providerOptions: i ?? {}
        })
      )
    )
  ), I = [], E = [], O = [], S = {};
  for (const M of b) {
    if (I.push(
      ...M.images.map(
        (R) => {
          var A;
          return new _r({
            data: R,
            mediaType: (A = mr({
              data: R,
              signatures: _u
            })) != null ? A : "image/png"
          });
        }
      )
    ), E.push(...M.warnings), M.providerMetadata)
      for (const [R, A] of Object.entries(M.providerMetadata))
        if (R === "gateway") {
          const j = S[R];
          j != null && typeof j == "object" ? S[R] = {
            ...j,
            ...A
          } : S[R] = A;
          const D = S[R].images;
          Array.isArray(D) && D.length === 0 && delete S[R].images;
        } else
          (g = S[R]) != null || (S[R] = { images: [] }), S[R].images.push(
            ...M.providerMetadata[R].images
          );
    O.push(M.response);
  }
  if (Jt(E), !I.length)
    throw new Kb({ responses: O });
  return new Ww({
    images: I,
    warnings: E,
    responses: O,
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
async function Yw(e) {
  return e.maxImagesPerCall instanceof Function ? e.maxImagesPerCall({
    modelId: e.modelId
  }) : e.maxImagesPerCall;
}
function Kw(e) {
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
    throw new xe({
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
    return st({ value: t, schema: e });
  },
  createElementStream() {
    throw new xe({
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
          error: new Ke({
            value: r,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const u = r.elements, c = [];
      for (let g = 0; g < u.length; g++) {
        const f = u[g], y = await st({ value: f, schema: e });
        if (!(g === u.length - 1 && !s)) {
          if (!y.success)
            return y;
          c.push(y.value);
        }
      }
      const d = (i = o == null ? void 0 : o.length) != null ? i : 0;
      let m = "";
      return a && (m += "["), d > 0 && (m += ","), m += c.slice(d).map((g) => JSON.stringify(g)).join(","), s && (m += "]"), {
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
          error: new Ke({
            value: r,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const o = r.elements;
      for (const a of o) {
        const s = await st({ value: a, schema: e });
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
        error: new Ke({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const n = t.result;
    return e.includes(n) ? { success: !0, value: n } : {
      success: !1,
      error: new Ke({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  async validatePartialResult({ value: t, textDelta: n }) {
    if (!Hn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new Ke({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const r = t.result, o = e.filter(
      (a) => a.startsWith(r)
    );
    return t.result.length === 0 || o.length === 0 ? {
      success: !1,
      error: new Ke({
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
    throw new xe({
      functionality: "element streams in enum mode"
    });
  }
});
function Wu({
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
async function xs(e, t, n) {
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
async function Yu(e, t, n, r) {
  try {
    return await xs(e, t, r);
  } catch (o) {
    if (n != null && Zt.isInstance(o) && (xn.isInstance(o.cause) || Ke.isInstance(o.cause))) {
      const a = await n({
        text: e,
        error: o.cause
      });
      if (a === null)
        throw o;
      return await xs(
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
    if (r != null)
      throw new be({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for no-schema output."
      });
    if (n != null)
      throw new be({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for no-schema output."
      });
    if (o != null)
      throw new be({
        parameter: "enumValues",
        value: o,
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
    if (o != null)
      throw new be({
        parameter: "enumValues",
        value: o,
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
    if (o != null)
      throw new be({
        parameter: "enumValues",
        value: o,
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
    if (r != null)
      throw new be({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for enum output."
      });
    if (n != null)
      throw new be({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for enum output."
      });
    if (o == null)
      throw new be({
        parameter: "enumValues",
        value: o,
        message: "Enum values are required for enum output."
      });
    for (const a of o)
      if (typeof a != "string")
        throw new be({
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
    experimental_telemetry: d,
    experimental_download: m,
    providerOptions: g,
    _internal: {
      generateId: f = n0,
      currentDate: y = () => /* @__PURE__ */ new Date()
    } = {},
    ..._
  } = e, w = sn(t), h = "enum" in e ? e.enum : void 0, {
    schema: v,
    schemaDescription: b,
    schemaName: I
  } = "schema" in e ? e : {};
  Ku({
    output: n,
    schema: v,
    schemaName: I,
    schemaDescription: b,
    enumValues: h
  });
  const { maxRetries: E, retry: O } = Ct({
    maxRetries: s,
    abortSignal: i
  }), S = Wu({
    output: n,
    schema: v,
    enumValues: h
  }), M = Lt(_), R = ze(
    u ?? {},
    `ai/${mt}`
  ), A = dn({
    model: w,
    telemetry: d,
    headers: R,
    settings: { ...M, maxRetries: E }
  }), j = pn(d);
  try {
    return await Ye({
      name: "ai.generateObject",
      attributes: me({
        telemetry: d,
        attributes: {
          ...We({
            operationId: "ai.generateObject",
            telemetry: d
          }),
          ...A,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: r, prompt: o, messages: a })
          },
          "ai.schema": S.jsonSchema != null ? { input: () => JSON.stringify(S.jsonSchema) } : void 0,
          "ai.schema.name": I,
          "ai.schema.description": b,
          "ai.settings.output": S.type
        }
      }),
      tracer: j,
      fn: async (D) => {
        var q;
        let C, F, N, U, Q, Oe, oe, Pe;
        const Z = await gr({
          system: r,
          prompt: o,
          messages: a
        }), re = await hr({
          prompt: Z,
          supportedUrls: await w.supportedUrls,
          download: m
        }), he = await O(
          () => Ye({
            name: "ai.generateObject.doGenerate",
            attributes: me({
              telemetry: d,
              attributes: {
                ...We({
                  operationId: "ai.generateObject.doGenerate",
                  telemetry: d
                }),
                ...A,
                "ai.prompt.messages": {
                  input: () => yr(re)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": w.provider,
                "gen_ai.request.model": w.modelId,
                "gen_ai.request.frequency_penalty": M.frequencyPenalty,
                "gen_ai.request.max_tokens": M.maxOutputTokens,
                "gen_ai.request.presence_penalty": M.presencePenalty,
                "gen_ai.request.temperature": M.temperature,
                "gen_ai.request.top_k": M.topK,
                "gen_ai.request.top_p": M.topP
              }
            }),
            tracer: j,
            fn: async (H) => {
              var ue, pe, Ze, ve, Ne, Qe, _e, ae;
              const ee = await w.doGenerate({
                responseFormat: {
                  type: "json",
                  schema: S.jsonSchema,
                  name: I,
                  description: b
                },
                ...Lt(_),
                prompt: re,
                providerOptions: g,
                abortSignal: i,
                headers: R
              }), W = {
                id: (pe = (ue = ee.response) == null ? void 0 : ue.id) != null ? pe : f(),
                timestamp: (ve = (Ze = ee.response) == null ? void 0 : Ze.timestamp) != null ? ve : y(),
                modelId: (Qe = (Ne = ee.response) == null ? void 0 : Ne.modelId) != null ? Qe : w.modelId,
                headers: (_e = ee.response) == null ? void 0 : _e.headers,
                body: (ae = ee.response) == null ? void 0 : ae.body
              }, G = no(ee.content), je = Kw(ee.content);
              if (G === void 0)
                throw new Zt({
                  message: "No object generated: the model did not return a response.",
                  response: W,
                  usage: ee.usage,
                  finishReason: ee.finishReason
                });
              return H.setAttributes(
                me({
                  telemetry: d,
                  attributes: {
                    "ai.response.finishReason": ee.finishReason,
                    "ai.response.object": { output: () => G },
                    "ai.response.id": W.id,
                    "ai.response.model": W.modelId,
                    "ai.response.timestamp": W.timestamp.toISOString(),
                    "ai.response.providerMetadata": JSON.stringify(
                      ee.providerMetadata
                    ),
                    // TODO rename telemetry attributes to inputTokens and outputTokens
                    "ai.usage.promptTokens": ee.usage.inputTokens,
                    "ai.usage.completionTokens": ee.usage.outputTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [ee.finishReason],
                    "gen_ai.response.id": W.id,
                    "gen_ai.response.model": W.modelId,
                    "gen_ai.usage.input_tokens": ee.usage.inputTokens,
                    "gen_ai.usage.output_tokens": ee.usage.outputTokens
                  }
                })
              ), {
                ...ee,
                objectText: G,
                reasoning: je,
                responseData: W
              };
            }
          })
        );
        C = he.objectText, F = he.finishReason, N = he.usage, U = he.warnings, oe = he.providerMetadata, Oe = (q = he.request) != null ? q : {}, Q = he.responseData, Pe = he.reasoning, Jt(U);
        const T = await Yu(
          C,
          S,
          c,
          {
            response: Q,
            usage: N,
            finishReason: F
          }
        );
        return D.setAttributes(
          me({
            telemetry: d,
            attributes: {
              "ai.response.finishReason": F,
              "ai.response.object": {
                output: () => JSON.stringify(T)
              },
              "ai.response.providerMetadata": JSON.stringify(
                oe
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": N.inputTokens,
              "ai.usage.completionTokens": N.outputTokens
            }
          })
        ), new r0({
          object: T,
          reasoning: Pe,
          finishReason: F,
          usage: N,
          warnings: U,
          request: Oe,
          response: Q,
          providerMetadata: oe
        });
      }
    });
  } catch (D) {
    throw vr(D);
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
    throw new be({
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
function Y0(e) {
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
    experimental_telemetry: d,
    experimental_download: m,
    providerOptions: g,
    onError: f = ({ error: M }) => {
      console.error(M);
    },
    onFinish: y,
    _internal: {
      generateId: _ = a0,
      currentDate: w = () => /* @__PURE__ */ new Date(),
      now: h = Ju
    } = {},
    ...v
  } = e, b = "enum" in e && e.enum ? e.enum : void 0, {
    schema: I,
    schemaDescription: E,
    schemaName: O
  } = "schema" in e ? e : {};
  Ku({
    output: n,
    schema: I,
    schemaName: O,
    schemaDescription: E,
    enumValues: b
  });
  const S = Wu({
    output: n,
    schema: I,
    enumValues: b
  });
  return new s0({
    model: t,
    telemetry: d,
    headers: u,
    settings: v,
    maxRetries: s,
    abortSignal: i,
    outputStrategy: S,
    system: r,
    prompt: o,
    messages: a,
    schemaName: O,
    schemaDescription: E,
    providerOptions: g,
    repairText: c,
    onError: f,
    onFinish: y,
    download: m,
    generateId: _,
    currentDate: w,
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
    schemaName: d,
    schemaDescription: m,
    providerOptions: g,
    repairText: f,
    onError: y,
    onFinish: _,
    download: w,
    generateId: h,
    currentDate: v,
    now: b
  }) {
    this._object = new dt(), this._usage = new dt(), this._providerMetadata = new dt(), this._warnings = new dt(), this._request = new dt(), this._response = new dt(), this._finishReason = new dt();
    const I = sn(e), { maxRetries: E, retry: O } = Ct({
      maxRetries: o,
      abortSignal: a
    }), S = Lt(r), M = dn({
      model: I,
      telemetry: n,
      headers: t,
      settings: { ...S, maxRetries: E }
    }), R = pn(n), A = this, j = Bu(), D = new TransformStream({
      transform(q, C) {
        C.enqueue(q), q.type === "error" && y({ error: vr(q.error) });
      }
    });
    this.baseStream = j.stream.pipeThrough(D), Ye({
      name: "ai.streamObject",
      attributes: me({
        telemetry: n,
        attributes: {
          ...We({
            operationId: "ai.streamObject",
            telemetry: n
          }),
          ...M,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: i, prompt: u, messages: c })
          },
          "ai.schema": s.jsonSchema != null ? { input: () => JSON.stringify(s.jsonSchema) } : void 0,
          "ai.schema.name": d,
          "ai.schema.description": m,
          "ai.settings.output": s.type
        }
      }),
      tracer: R,
      endWhenDone: !1,
      fn: async (q) => {
        const C = await gr({
          system: i,
          prompt: u,
          messages: c
        }), F = {
          responseFormat: {
            type: "json",
            schema: s.jsonSchema,
            name: d,
            description: m
          },
          ...Lt(r),
          prompt: await hr({
            prompt: C,
            supportedUrls: await I.supportedUrls,
            download: w
          }),
          providerOptions: g,
          abortSignal: a,
          headers: t,
          includeRawChunks: !1
        }, N = {
          transform: (W, G) => {
            switch (W.type) {
              case "text-delta":
                G.enqueue(W.delta);
                break;
              case "response-metadata":
              case "finish":
              case "error":
              case "stream-start":
                G.enqueue(W);
                break;
            }
          }
        }, {
          result: { stream: U, response: Q, request: Oe },
          doStreamSpan: oe,
          startTimestampMs: Pe
        } = await O(
          () => Ye({
            name: "ai.streamObject.doStream",
            attributes: me({
              telemetry: n,
              attributes: {
                ...We({
                  operationId: "ai.streamObject.doStream",
                  telemetry: n
                }),
                ...M,
                "ai.prompt.messages": {
                  input: () => yr(F.prompt)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": I.provider,
                "gen_ai.request.model": I.modelId,
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
            fn: async (W) => ({
              startTimestampMs: b(),
              doStreamSpan: W,
              result: await I.doStream(F)
            })
          })
        );
        A._request.resolve(Oe ?? {});
        let Z, re = {
          inputTokens: void 0,
          outputTokens: void 0,
          totalTokens: void 0
        }, he, T, H, ue, pe = "", Ze = "", ve = {
          id: h(),
          timestamp: v(),
          modelId: I.modelId
        }, Ne, Qe, _e = !0, ae = !0;
        const ee = U.pipeThrough(new TransformStream(N)).pipeThrough(
          new TransformStream({
            async transform(W, G) {
              var je, et, L;
              if (typeof W == "object" && W.type === "stream-start") {
                Z = W.warnings;
                return;
              }
              if (_e) {
                const se = b() - Pe;
                _e = !1, oe.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": se
                }), oe.setAttributes({
                  "ai.stream.msToFirstChunk": se
                });
              }
              if (typeof W == "string") {
                pe += W, Ze += W;
                const { value: se, state: gt } = await Oo(pe);
                if (se !== void 0 && !ar(Ne, se)) {
                  const fe = await s.validatePartialResult({
                    value: se,
                    textDelta: Ze,
                    latestObject: Qe,
                    isFirstDelta: ae,
                    isFinalDelta: gt === "successful-parse"
                  });
                  fe.success && !ar(
                    Qe,
                    fe.value.partial
                  ) && (Ne = se, Qe = fe.value.partial, G.enqueue({
                    type: "object",
                    object: Qe
                  }), G.enqueue({
                    type: "text-delta",
                    textDelta: fe.value.textDelta
                  }), Ze = "", ae = !1);
                }
                return;
              }
              switch (W.type) {
                case "response-metadata": {
                  ve = {
                    id: (je = W.id) != null ? je : ve.id,
                    timestamp: (et = W.timestamp) != null ? et : ve.timestamp,
                    modelId: (L = W.modelId) != null ? L : ve.modelId
                  };
                  break;
                }
                case "finish": {
                  Ze !== "" && G.enqueue({ type: "text-delta", textDelta: Ze }), he = W.finishReason, re = W.usage, T = W.providerMetadata, G.enqueue({
                    ...W,
                    usage: re,
                    response: ve
                  }), Jt(Z ?? []), A._usage.resolve(re), A._providerMetadata.resolve(T), A._warnings.resolve(Z), A._response.resolve({
                    ...ve,
                    headers: Q == null ? void 0 : Q.headers
                  }), A._finishReason.resolve(he ?? "unknown");
                  try {
                    H = await Yu(
                      pe,
                      s,
                      f,
                      {
                        response: ve,
                        usage: re,
                        finishReason: he
                      }
                    ), A._object.resolve(H);
                  } catch (se) {
                    ue = se, A._object.reject(se);
                  }
                  break;
                }
                default: {
                  G.enqueue(W);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(W) {
              try {
                const G = re ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                oe.setAttributes(
                  me({
                    telemetry: n,
                    attributes: {
                      "ai.response.finishReason": he,
                      "ai.response.object": {
                        output: () => JSON.stringify(H)
                      },
                      "ai.response.id": ve.id,
                      "ai.response.model": ve.modelId,
                      "ai.response.timestamp": ve.timestamp.toISOString(),
                      "ai.response.providerMetadata": JSON.stringify(T),
                      "ai.usage.inputTokens": G.inputTokens,
                      "ai.usage.outputTokens": G.outputTokens,
                      "ai.usage.totalTokens": G.totalTokens,
                      "ai.usage.reasoningTokens": G.reasoningTokens,
                      "ai.usage.cachedInputTokens": G.cachedInputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [he],
                      "gen_ai.response.id": ve.id,
                      "gen_ai.response.model": ve.modelId,
                      "gen_ai.usage.input_tokens": G.inputTokens,
                      "gen_ai.usage.output_tokens": G.outputTokens
                    }
                  })
                ), oe.end(), q.setAttributes(
                  me({
                    telemetry: n,
                    attributes: {
                      "ai.usage.inputTokens": G.inputTokens,
                      "ai.usage.outputTokens": G.outputTokens,
                      "ai.usage.totalTokens": G.totalTokens,
                      "ai.usage.reasoningTokens": G.reasoningTokens,
                      "ai.usage.cachedInputTokens": G.cachedInputTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(H)
                      },
                      "ai.response.providerMetadata": JSON.stringify(T)
                    }
                  })
                ), await (_ == null ? void 0 : _({
                  usage: G,
                  object: H,
                  error: ue,
                  response: {
                    ...ve,
                    headers: Q == null ? void 0 : Q.headers
                  },
                  warnings: Z,
                  providerMetadata: T
                }));
              } catch (G) {
                W.enqueue({ type: "error", error: G });
              } finally {
                q.end();
              }
            }
          })
        );
        j.addStream(ee);
      }
    }).catch((q) => {
      j.addStream(
        new ReadableStream({
          start(C) {
            C.enqueue({ type: "error", error: q }), C.close();
          }
        })
      );
    }).finally(() => {
      j.close();
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
    Zu({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toTextStreamResponse(e) {
    return zu({
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
async function K0({
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
  headers: d
}) {
  var m;
  if (e.specificationVersion !== "v2")
    throw new jn({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const g = ze(
    d ?? {},
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
        signatures: bu
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
      const a = await st({
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
      for (const i of e.slice(0, -a))
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
        content: i.content.filter((d) => d.type !== "tool-call" && d.type !== "tool-result" || (d.type === "tool-call" && (c[d.toolCallId] = d.toolName), (d.type === "tool-call" || d.type === "tool-result") && s.has(d.toolCallId)) ? !0 : o.tools != null && !o.tools.includes(d.toolName))
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
        const d = n ? r + c.text : c.text, m = new RegExp(`${r}(.*?)${o}`, "gs"), g = Array.from(d.matchAll(m));
        if (!g.length) {
          u.push(c);
          continue;
        }
        const f = g.map((_) => _[1]).join(t);
        let y = d;
        for (let _ = g.length - 1; _ >= 0; _--) {
          const w = g[_], h = y.slice(0, w.index), v = y.slice(
            w.index + w[0].length
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
            transform: (d, m) => {
              if (d.type === "text-start") {
                c = d;
                return;
              }
              if (d.type === "text-end" && c && (m.enqueue(c), c = void 0), d.type !== "text-delta") {
                m.enqueue(d);
                return;
              }
              u[d.id] == null && (u[d.id] = {
                isFirstReasoning: !0,
                isFirstText: !0,
                afterSwitch: !1,
                isReasoning: n,
                buffer: "",
                idCounter: 0,
                textId: d.id
              });
              const g = u[d.id];
              g.buffer += d.delta;
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
var Xu = ({
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
  var c, d, m;
  async function g({
    params: f,
    type: y
  }) {
    return t ? await t({ params: f, type: y, model: e }) : f;
  }
  return {
    specificationVersion: "v2",
    provider: (c = u ?? (o == null ? void 0 : o({ model: e }))) != null ? c : e.provider,
    modelId: (d = i ?? (a == null ? void 0 : a({ model: e }))) != null ? d : e.modelId,
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
      const y = await g({ params: f, type: "stream" }), _ = async () => e.doGenerate(y), w = async () => e.doStream(y);
      return r ? r({ doGenerate: _, doStream: w, params: y, model: e }) : w();
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
      return o = Xu({
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
var ox = h0, Qu = "AI_NoSuchProviderError", ec = `vercel.ai.error.${Qu}`, g0 = Symbol.for(ec), tc, v0 = class extends He {
  constructor({
    modelId: e,
    modelType: t,
    providerId: n,
    availableProviders: r,
    message: o = `No such provider: ${n} (available providers: ${r.join()})`
  }) {
    super({ errorName: Qu, modelId: e, modelType: t, message: o }), this[tc] = !0, this.providerId = n, this.availableProviders = r;
  }
  static isInstance(e) {
    return J.hasMarker(e, ec);
  }
};
tc = g0;
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
    return this.languageModelMiddleware != null && (a = Xu({
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
}, b0 = class extends J {
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
  ), u = t instanceof URL ? (await wu({ url: t })).data : yw(t), c = await s(
    () => {
      var d;
      return e.doGenerate({
        audio: u,
        abortSignal: o,
        headers: i,
        providerOptions: n,
        mediaType: (d = mr({
          data: u,
          signatures: bu
        })) != null ? d : "audio/wav"
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
  onFinish: d,
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
    let w = "";
    switch (a) {
      case "text": {
        await x0({
          stream: _.body,
          onTextPart: (h) => {
            w += h, s(w);
          }
        });
        break;
      }
      case "data": {
        await br({
          stream: yo({
            stream: _.body,
            schema: Vu
          }).pipeThrough(
            new TransformStream({
              async transform(h) {
                if (!h.success)
                  throw h.error;
                const v = h.value;
                if (v.type === "text-delta")
                  w += v.delta, s(w);
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
    return d && d(t, w), c(null), w;
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
var nc = class {
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
    const i = await Ae(this.body), u = await Ae(this.headers), c = await Ae(this.credentials), d = {
      ...jt(u),
      ...jt(t.headers)
    }, m = await ((n = this.prepareSendMessagesRequest) == null ? void 0 : n.call(this, {
      api: this.api,
      id: t.chatId,
      messages: t.messages,
      body: { ...i, ...t.body },
      headers: d,
      credentials: c,
      requestMetadata: t.metadata,
      trigger: t.trigger,
      messageId: t.messageId
    })), g = (r = m == null ? void 0 : m.api) != null ? r : this.api, f = (m == null ? void 0 : m.headers) !== void 0 ? jt(m.headers) : d, y = (m == null ? void 0 : m.body) !== void 0 ? m.body : {
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
    const s = await Ae(this.body), i = await Ae(this.headers), u = await Ae(this.credentials), c = {
      ...jt(i),
      ...jt(e.headers)
    }, d = await ((t = this.prepareReconnectToStreamRequest) == null ? void 0 : t.call(this, {
      api: this.api,
      id: e.chatId,
      body: { ...s, ...e.body },
      headers: c,
      credentials: u,
      requestMetadata: e.metadata
    })), m = (n = d == null ? void 0 : d.api) != null ? n : `${this.api}/${e.chatId}/stream`, g = (d == null ? void 0 : d.headers) !== void 0 ? jt(d.headers) : c, f = (r = d == null ? void 0 : d.credentials) != null ? r : u, _ = await ((o = this.fetch) != null ? o : globalThis.fetch)(m, {
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
}, T0 = class extends nc {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return yo({
      stream: e,
      schema: Vu
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
    sendAutomaticallyWhen: d
  }) {
    this.activeResponse = void 0, this.jobExecutor = new o0(), this.sendMessage = async (m, g) => {
      var f, y, _, w;
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
          (b) => b.id === m.messageId
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
          role: (w = h.role) != null ? w : "user",
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
      var w, h;
      const v = this.state.messages, b = v[v.length - 1];
      this.state.replaceMessage(v.length - 1, {
        ...b,
        parts: b.parts.map(
          (I) => Rn(I) && I.toolCallId === f ? { ...I, state: m, output: y, errorText: _ } : I
        )
      }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(
        (I) => Rn(I) && I.toolCallId === f ? {
          ...I,
          state: m,
          output: y,
          errorText: _
        } : I
      )), this.status !== "streaming" && this.status !== "submitted" && ((w = this.sendAutomaticallyWhen) != null && w.call(this, { messages: this.state.messages })) && this.makeRequest({
        trigger: "submit-message",
        messageId: (h = this.lastMessage) == null ? void 0 : h.id
      });
    }), this.addToolResult = this.addToolOutput, this.stop = async () => {
      var m;
      this.status !== "streaming" && this.status !== "submitted" || (m = this.activeResponse) != null && m.abortController && this.activeResponse.abortController.abort();
    }, this.id = t, this.transport = n, this.generateId = e, this.messageMetadataSchema = r, this.dataPartSchemas = o, this.state = a, this.onError = s, this.onToolCall = i, this.onFinish = u, this.onData = c, this.sendAutomaticallyWhen = d;
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
    let d = !1, m = !1, g = !1;
    try {
      const f = {
        state: Ao({
          lastMessage: this.state.snapshot(c),
          messageId: this.generateId()
        }),
        abortController: new AbortController()
      };
      f.abortController.signal.addEventListener("abort", () => {
        d = !0;
      }), this.activeResponse = f;
      let y;
      if (e === "resume-stream") {
        const w = await this.transport.reconnectToStream({
          chatId: this.id,
          metadata: t,
          headers: n,
          body: r
        });
        if (w == null) {
          this.setStatus({ status: "ready" });
          return;
        }
        y = w;
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
      const _ = (w) => (
        // serialize the job execution to avoid race conditions:
        this.jobExecutor.run(
          () => w({
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
          onError: (w) => {
            throw w;
          }
        }),
        onError: (w) => {
          throw w;
        }
      }), this.setStatus({ status: "ready" });
    } catch (f) {
      if (d || f.name === "AbortError")
        return d = !0, this.setStatus({ status: "ready" }), null;
      g = !0, f instanceof TypeError && (f.message.toLowerCase().includes("fetch") || f.message.toLowerCase().includes("network")) && (m = !0), this.onError && f instanceof Error && this.onError(f), this.setStatus({ status: "error", error: f });
    } finally {
      try {
        (s = this.onFinish) == null || s.call(this, {
          message: this.activeResponse.state.message,
          messages: this.state.messages,
          isAbort: d,
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
var cx = class extends nc {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return S0({
      stream: e.pipeThrough(new TextDecoderStream())
    });
  }
}, E0 = Ce(
  () => z(
    P(
      p({
        id: l(),
        role: X(["system", "user", "assistant"]),
        metadata: ie().optional(),
        parts: P(
          ne([
            p({
              type: x("text"),
              text: l(),
              state: X(["streaming", "done"]).optional(),
              providerMetadata: le.optional()
            }),
            p({
              type: x("reasoning"),
              text: l(),
              state: X(["streaming", "done"]).optional(),
              providerMetadata: le.optional()
            }),
            p({
              type: x("source-url"),
              sourceId: l(),
              url: l(),
              title: l().optional(),
              providerMetadata: le.optional()
            }),
            p({
              type: x("source-document"),
              sourceId: l(),
              mediaType: l(),
              title: l(),
              filename: l().optional(),
              providerMetadata: le.optional()
            }),
            p({
              type: x("file"),
              mediaType: l(),
              filename: l().optional(),
              url: l(),
              providerMetadata: le.optional()
            }),
            p({
              type: x("step-start")
            }),
            p({
              type: l().startsWith("data-"),
              id: l().optional(),
              data: ie()
            }),
            p({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("input-streaming"),
              input: ie().optional(),
              providerExecuted: B().optional(),
              output: Ie().optional(),
              errorText: Ie().optional()
            }),
            p({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("input-available"),
              input: ie(),
              providerExecuted: B().optional(),
              output: Ie().optional(),
              errorText: Ie().optional(),
              callProviderMetadata: le.optional()
            }),
            p({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("output-available"),
              input: ie(),
              providerExecuted: B().optional(),
              output: ie(),
              errorText: Ie().optional(),
              callProviderMetadata: le.optional(),
              preliminary: B().optional()
            }),
            p({
              type: x("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: x("output-error"),
              input: ie(),
              providerExecuted: B().optional(),
              output: Ie().optional(),
              errorText: l(),
              callProviderMetadata: le.optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("input-streaming"),
              providerExecuted: B().optional(),
              input: ie().optional(),
              output: Ie().optional(),
              errorText: Ie().optional(),
              approval: Ie().optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("input-available"),
              providerExecuted: B().optional(),
              input: ie(),
              output: Ie().optional(),
              errorText: Ie().optional(),
              callProviderMetadata: le.optional(),
              approval: Ie().optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("approval-requested"),
              input: ie(),
              providerExecuted: B().optional(),
              output: Ie().optional(),
              errorText: Ie().optional(),
              callProviderMetadata: le.optional(),
              approval: p({
                id: l(),
                approved: Ie().optional(),
                reason: Ie().optional()
              })
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("approval-responded"),
              input: ie(),
              providerExecuted: B().optional(),
              output: Ie().optional(),
              errorText: Ie().optional(),
              callProviderMetadata: le.optional(),
              approval: p({
                id: l(),
                approved: B(),
                reason: l().optional()
              })
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("output-available"),
              providerExecuted: B().optional(),
              input: ie(),
              output: ie(),
              errorText: Ie().optional(),
              callProviderMetadata: le.optional(),
              preliminary: B().optional(),
              approval: p({
                id: l(),
                approved: x(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("output-error"),
              providerExecuted: B().optional(),
              input: ie(),
              output: Ie().optional(),
              errorText: l(),
              callProviderMetadata: le.optional(),
              approval: p({
                id: l(),
                approved: x(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: x("output-denied"),
              providerExecuted: B().optional(),
              input: ie(),
              output: Ie().optional(),
              errorText: Ie().optional(),
              callProviderMetadata: le.optional(),
              approval: p({
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
        error: new be({
          parameter: "messages",
          value: e,
          message: "messages parameter must be provided"
        })
      };
    const o = await Me({
      value: e,
      schema: E0
    });
    if (t)
      for (const a of o)
        await Me({
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
              error: new Ke({
                value: i.data,
                cause: `No data schema found for data part ${u}`
              })
            };
          await Me({
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
              error: new Ke({
                value: i.input,
                cause: `No tool schema found for tool part ${u}`
              })
            };
          (i.state === "input-available" || i.state === "output-available" || i.state === "output-error") && await Me({
            value: i.input,
            schema: c.inputSchema
          }), i.state === "output-available" && c.outputSchema && await Me({
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
    start(d) {
      a = d;
    }
  });
  function u(d) {
    try {
      a.enqueue(d);
    } catch {
    }
  }
  try {
    const d = e({
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
    d && s.push(
      d.catch((m) => {
        u({
          type: "error",
          errorText: t(m)
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
    for (; s.length > 0; )
      await s.shift();
    d();
  }).finally(() => {
    try {
      a.close();
    } catch {
    }
  }), Gu({
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
    start(d) {
      a = d;
    }
  }), u = Ao({
    messageId: (o = e == null ? void 0 : e.id) != null ? o : "",
    lastMessage: e
  }), c = (d) => {
    n == null || n(d), !s && r && (s = !0, a == null || a.error(d));
  };
  return br({
    stream: $o({
      stream: t,
      runUpdateMessageJob(d) {
        return d({
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
  J as AISDKError,
  De as APICallError,
  lx as AbstractChat,
  T0 as DefaultChatTransport,
  Zr as DownloadError,
  uc as EmptyResponseBodyError,
  L0 as Experimental_Agent,
  nc as HttpChatTransport,
  be as InvalidArgumentError,
  fs as InvalidDataContentError,
  iw as InvalidMessageRoleError,
  Pt as InvalidPromptError,
  Sr as InvalidResponseDataError,
  $0 as InvalidStreamPartError,
  Zl as InvalidToolInputError,
  xn as JSONParseError,
  Lu as JsonToSseTransformStream,
  Zn as LoadAPIKeyError,
  R0 as LoadSettingError,
  uw as MessageConversionError,
  O0 as NoContentGeneratedError,
  Kb as NoImageGeneratedError,
  Zt as NoObjectGeneratedError,
  ew as NoOutputGeneratedError,
  Ol as NoOutputSpecifiedError,
  tw as NoSpeechGeneratedError,
  He as NoSuchModelError,
  v0 as NoSuchProviderError,
  to as NoSuchToolError,
  u0 as Output,
  ms as RetryError,
  o0 as SerialJobExecutor,
  cx as TextStreamChatTransport,
  ao as TooManyEmbeddingValuesForCallError,
  ow as ToolCallRepairError,
  Ke as TypeValidationError,
  Fu as UI_MESSAGE_STREAM_HEADERS,
  xe as UnsupportedFunctionalityError,
  jn as UnsupportedModelVersionError,
  on as asSchema,
  Ru as assistantModelMessageSchema,
  ix as callCompletionApi,
  br as consumeStream,
  k0 as convertFileListToFileUIParts,
  Z0 as convertToCoreMessages,
  Hu as convertToModelMessages,
  q0 as coreAssistantMessageSchema,
  z0 as coreMessageSchema,
  P0 as coreSystemMessageSchema,
  D0 as coreToolMessageSchema,
  j0 as coreUserMessageSchema,
  J0 as cosineSimilarity,
  nv as createAnthropic,
  E_ as createGateway,
  Cv as createGoogleGenerativeAI,
  On as createIdGenerator,
  zv as createMistral,
  Qy as createOpenAI,
  y0 as createProviderRegistry,
  zu as createTextStreamResponse,
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
  K0 as experimental_generateSpeech,
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
  ys as isReasoningUIPart,
  Fr as isTextUIPart,
  Rn as isToolOrDynamicToolUIPart,
  en as isToolUIPart,
  _o as jsonSchema,
  ux as lastAssistantMessageIsCompleteWithToolCalls,
  Nu as modelMessageSchema,
  yo as parseJsonEventStream,
  Oo as parsePartialJson,
  Zu as pipeTextStreamToResponse,
  Lw as pipeUIMessageStreamToResponse,
  X0 as pruneMessages,
  fx as readUIMessageStream,
  C0 as safeValidateUIMessages,
  W0 as simulateReadableStream,
  nx as simulateStreamingMiddleware,
  Q0 as smoothStream,
  qu as stepCountIs,
  Y0 as streamObject,
  Gw as streamText,
  Cu as systemModelMessageSchema,
  N0 as tool,
  Ou as toolModelMessageSchema,
  Vu as uiMessageChunkSchema,
  Mu as userModelMessageSchema,
  dx as validateUIMessages,
  Xu as wrapLanguageModel,
  rx as wrapProvider,
  z as zodSchema
};
