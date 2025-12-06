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
var H = ac, Ts = "AI_APICallError", Ss = `vercel.ai.error.${Ts}`, sc = Symbol.for(Ss), Es, ze = class extends H {
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
  function f(y) {
    const w = s ? y.replace(/^\xEF\xBB\xBF/, "") : y, [h, b] = xc(`${a}${w}`);
    for (const _ of h)
      m(_);
    a = b, s = !1;
  }
  function m(y) {
    if (y === "") {
      d();
      return;
    }
    if (y.startsWith(":")) {
      o && o(y.slice(y.startsWith(": ") ? 2 : 1));
      return;
    }
    const w = y.indexOf(":");
    if (w !== -1) {
      const h = y.slice(0, w), b = y[w + 1] === " " ? 2 : 1, _ = y.slice(w + b);
      v(h, _, y);
      return;
    }
    v(y, "", y);
  }
  function v(y, w, h) {
    switch (y) {
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
            `Unknown field "${y.length > 20 ? `${y.slice(0, 20)}…` : y}"`,
            { type: "unknown-field", field: y, value: w, line: h }
          )
        );
        break;
    }
  }
  function d() {
    u.length > 0 && t({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function g(y = {}) {
    a && y.consume && m(a), s = !0, i = void 0, u = "", c = "", a = "";
  }
  return { feed: f, reset: g };
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
function O(e, t, n) {
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
    const c = s.prototype, f = Object.keys(c);
    for (let m = 0; m < f.length; m++) {
      const v = f[m];
      v in i || (i[v] = c[v].bind(i));
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
    for (const f of c._zod.deferred)
      f();
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
function he(e, t, n) {
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
    const f = Ln((s = (a = (o = e.inst) == null ? void 0 : o._zod.def) == null ? void 0 : a.error) == null ? void 0 : s.call(a, e)) ?? Ln((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? Ln((u = n.customError) == null ? void 0 : u.call(n, e)) ?? Ln((c = n.localeError) == null ? void 0 : c.call(n, e)) ?? "Invalid input";
    r.message = f;
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
}, gi = O("$ZodError", hi), vi = O("$ZodError", hi, { Parent: Error });
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
}, gd = /^-?\d+$/, vd = /^-?\d+(?:\.\d+)?/, yd = /^(?:true|false)$/i, _d = /^null$/i, bd = /^[^A-Z]*$/, wd = /^[^a-z]*$/, Xe = /* @__PURE__ */ O("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), wi = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, xi = /* @__PURE__ */ O("$ZodCheckLessThan", (e, t) => {
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
}), Ii = /* @__PURE__ */ O("$ZodCheckGreaterThan", (e, t) => {
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
}), xd = /* @__PURE__ */ O("$ZodCheckMultipleOf", (e, t) => {
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
}), Id = /* @__PURE__ */ O("$ZodCheckNumberFormat", (e, t) => {
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
}), kd = /* @__PURE__ */ O("$ZodCheckMaxLength", (e, t) => {
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
}), Td = /* @__PURE__ */ O("$ZodCheckMinLength", (e, t) => {
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
}), Sd = /* @__PURE__ */ O("$ZodCheckLengthEquals", (e, t) => {
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
}), ur = /* @__PURE__ */ O("$ZodCheckStringFormat", (e, t) => {
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
}), Ed = /* @__PURE__ */ O("$ZodCheckRegex", (e, t) => {
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
}), Cd = /* @__PURE__ */ O("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = bd), ur.init(e, t);
}), Md = /* @__PURE__ */ O("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = wd), ur.init(e, t);
}), Rd = /* @__PURE__ */ O("$ZodCheckIncludes", (e, t) => {
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
}), Od = /* @__PURE__ */ O("$ZodCheckStartsWith", (e, t) => {
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
}), Nd = /* @__PURE__ */ O("$ZodCheckEndsWith", (e, t) => {
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
}), Ad = /* @__PURE__ */ O("$ZodCheckOverwrite", (e, t) => {
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
}, be = /* @__PURE__ */ O("$ZodType", (e, t) => {
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
      let f = Yt(i), m;
      for (const v of u) {
        if (v._zod.def.when) {
          if (!v._zod.def.when(i))
            continue;
        } else if (f)
          continue;
        const d = i.issues.length, g = v._zod.check(i);
        if (g instanceof Promise && (c == null ? void 0 : c.async) === !1)
          throw new Xt();
        if (m || g instanceof Promise)
          m = (m ?? Promise.resolve()).then(async () => {
            await g, i.issues.length !== d && (f || (f = Yt(i, d)));
          });
        else {
          if (i.issues.length === d)
            continue;
          f || (f = Yt(i, d));
        }
      }
      return m ? m.then(() => i) : i;
    }, s = (i, u, c) => {
      if (Yt(i))
        return i.aborted = !0, i;
      const f = a(u, r, c);
      if (f instanceof Promise) {
        if (c.async === !1)
          throw new Xt();
        return f.then((m) => e._zod.parse(m, c));
      }
      return e._zod.parse(f, c);
    };
    e._zod.run = (i, u) => {
      if (u.skipChecks)
        return e._zod.parse(i, u);
      if (u.direction === "backward") {
        const f = e._zod.parse({ value: i.value, issues: [] }, { ...u, skipChecks: !0 });
        return f instanceof Promise ? f.then((m) => s(m, i, u)) : s(f, i, u);
      }
      const c = e._zod.parse(i, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new Xt();
        return c.then((f) => a(f, r, u));
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
}), po = /* @__PURE__ */ O("$ZodString", (e, t) => {
  var n;
  be.init(e, t), e._zod.pattern = [...((n = e == null ? void 0 : e._zod.bag) == null ? void 0 : n.patterns) ?? []].pop() ?? hd(e._zod.bag), e._zod.parse = (r, o) => {
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
}), Se = /* @__PURE__ */ O("$ZodStringFormat", (e, t) => {
  ur.init(e, t), po.init(e, t);
}), jd = /* @__PURE__ */ O("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = nd), Se.init(e, t);
}), qd = /* @__PURE__ */ O("$ZodUUID", (e, t) => {
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
}), Dd = /* @__PURE__ */ O("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = rd), Se.init(e, t);
}), zd = /* @__PURE__ */ O("$ZodURL", (e, t) => {
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
}), Ud = /* @__PURE__ */ O("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = ad()), Se.init(e, t);
}), Zd = /* @__PURE__ */ O("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = ed), Se.init(e, t);
}), Ld = /* @__PURE__ */ O("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Wc), Se.init(e, t);
}), Fd = /* @__PURE__ */ O("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Kc), Se.init(e, t);
}), Vd = /* @__PURE__ */ O("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Yc), Se.init(e, t);
}), Gd = /* @__PURE__ */ O("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Xc), Se.init(e, t);
}), Bd = /* @__PURE__ */ O("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Qc), Se.init(e, t);
}), Jd = /* @__PURE__ */ O("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = md(t)), Se.init(e, t);
}), Hd = /* @__PURE__ */ O("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = pd), Se.init(e, t);
}), Wd = /* @__PURE__ */ O("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = fd(t)), Se.init(e, t);
}), Kd = /* @__PURE__ */ O("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = td), Se.init(e, t);
}), Yd = /* @__PURE__ */ O("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = sd), Se.init(e, t), e._zod.bag.format = "ipv4";
}), Xd = /* @__PURE__ */ O("$ZodIPv6", (e, t) => {
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
}), Qd = /* @__PURE__ */ O("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = ld), Se.init(e, t);
}), ep = /* @__PURE__ */ O("$ZodCIDRv6", (e, t) => {
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
const tp = /* @__PURE__ */ O("$ZodBase64", (e, t) => {
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
const rp = /* @__PURE__ */ O("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = yi), Se.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    np(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), op = /* @__PURE__ */ O("$ZodE164", (e, t) => {
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
const sp = /* @__PURE__ */ O("$ZodJWT", (e, t) => {
  Se.init(e, t), e._zod.check = (n) => {
    ap(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ti = /* @__PURE__ */ O("$ZodNumber", (e, t) => {
  be.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? vd, e._zod.parse = (n, r) => {
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
}), ip = /* @__PURE__ */ O("$ZodNumberFormat", (e, t) => {
  Id.init(e, t), Ti.init(e, t);
}), lp = /* @__PURE__ */ O("$ZodBoolean", (e, t) => {
  be.init(e, t), e._zod.pattern = yd, e._zod.parse = (n, r) => {
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
}), up = /* @__PURE__ */ O("$ZodNull", (e, t) => {
  be.init(e, t), e._zod.pattern = _d, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (n, r) => {
    const o = n.value;
    return o === null || n.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), cp = /* @__PURE__ */ O("$ZodAny", (e, t) => {
  be.init(e, t), e._zod.parse = (n) => n;
}), dp = /* @__PURE__ */ O("$ZodUnknown", (e, t) => {
  be.init(e, t), e._zod.parse = (n) => n;
}), pp = /* @__PURE__ */ O("$ZodNever", (e, t) => {
  be.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function Vo(e, t, n) {
  e.issues.length && t.issues.push(...qt(n, e.issues)), t.value[n] = e.value;
}
const fp = /* @__PURE__ */ O("$ZodArray", (e, t) => {
  be.init(e, t), e._zod.parse = (n, r) => {
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
  for (const f in t) {
    if (i.has(f))
      continue;
    if (c === "never") {
      s.push(f);
      continue;
    }
    const m = u.run({ value: t[f], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((v) => Wn(v, n, f, t))) : Wn(m, n, f, t);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: a
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const mp = /* @__PURE__ */ O("$ZodObject", (e, t) => {
  be.init(e, t);
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
  he(e._zod, "propValues", () => {
    const i = t.shape, u = {};
    for (const c in i) {
      const f = i[c]._zod;
      if (f.values) {
        u[c] ?? (u[c] = /* @__PURE__ */ new Set());
        for (const m of f.values)
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
    const f = [], m = s.shape;
    for (const v of s.keys) {
      const g = m[v]._zod.run({ value: c[v], issues: [] }, u);
      g instanceof Promise ? f.push(g.then((y) => Wn(y, i, v, c))) : Wn(g, i, v, c);
    }
    return a ? Ei(f, c, i, u, r.value, e) : f.length ? Promise.all(f).then(() => i) : i;
  };
}), hp = /* @__PURE__ */ O("$ZodObjectJIT", (e, t) => {
  mp.init(e, t);
  const n = e._zod.parse, r = sr(() => Si(t)), o = (v) => {
    const d = new $d(["shape", "payload", "ctx"]), g = r.value, y = (_) => {
      const x = Lo(_);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    d.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let h = 0;
    for (const _ of g.keys)
      w[_] = `key_${h++}`;
    d.write("const newResult = {};");
    for (const _ of g.keys) {
      const x = w[_], C = Lo(_);
      d.write(`const ${x} = ${y(_)};`), d.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${C}, ...iss.path] : [${C}]
          })));
        }
        
        
        if (${x}.value === undefined) {
          if (${C} in input) {
            newResult[${C}] = undefined;
          }
        } else {
          newResult[${C}] = ${x}.value;
        }
        
      `);
    }
    d.write("payload.value = newResult;"), d.write("return payload;");
    const b = d.compile();
    return (_, x) => b(v, _, x);
  };
  let a;
  const s = In, i = !di.jitless, c = i && Sc.value, f = t.catchall;
  let m;
  e._zod.parse = (v, d) => {
    m ?? (m = r.value);
    const g = v.value;
    return s(g) ? i && c && (d == null ? void 0 : d.async) === !1 && d.jitless !== !0 ? (a || (a = o(t.shape)), v = a(v, d), f ? Ei([], g, v, d, m, e) : v) : n(v, d) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: g,
      inst: e
    }), v);
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
const Ci = /* @__PURE__ */ O("$ZodUnion", (e, t) => {
  be.init(e, t), he(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), he(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), he(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), he(e._zod, "pattern", () => {
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
}), gp = /* @__PURE__ */ O("$ZodDiscriminatedUnion", (e, t) => {
  Ci.init(e, t);
  const n = e._zod.parse;
  he(e._zod, "propValues", () => {
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
}), vp = /* @__PURE__ */ O("$ZodIntersection", (e, t) => {
  be.init(e, t), e._zod.parse = (n, r) => {
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
const yp = /* @__PURE__ */ O("$ZodTuple", (e, t) => {
  be.init(e, t);
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
    const s = [], i = [...n].reverse().findIndex((f) => f._zod.optin !== "optional"), u = i === -1 ? 0 : n.length - i;
    if (!t.rest) {
      const f = a.length > n.length, m = a.length < u - 1;
      if (f || m)
        return r.issues.push({
          ...f ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length },
          input: a,
          inst: e,
          origin: "array"
        }), r;
    }
    let c = -1;
    for (const f of n) {
      if (c++, c >= a.length && c >= u)
        continue;
      const m = f._zod.run({
        value: a[c],
        issues: []
      }, o);
      m instanceof Promise ? s.push(m.then((v) => Fn(v, r, c))) : Fn(m, r, c);
    }
    if (t.rest) {
      const f = a.slice(n.length);
      for (const m of f) {
        c++;
        const v = t.rest._zod.run({
          value: m,
          issues: []
        }, o);
        v instanceof Promise ? s.push(v.then((d) => Fn(d, r, c))) : Fn(v, r, c);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function Fn(e, t, n) {
  e.issues.length && t.issues.push(...qt(n, e.issues)), t.value[n] = e.value;
}
const _p = /* @__PURE__ */ O("$ZodRecord", (e, t) => {
  be.init(e, t), e._zod.parse = (n, r) => {
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
          const f = t.valueType._zod.run({ value: o[c], issues: [] }, r);
          f instanceof Promise ? a.push(f.then((m) => {
            m.issues.length && n.issues.push(...qt(c, m.issues)), n.value[c] = m.value;
          })) : (f.issues.length && n.issues.push(...qt(c, f.issues)), n.value[c] = f.value);
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
            issues: u.issues.map((f) => Ot(f, r, Rt())),
            input: i,
            path: [i],
            inst: e
          }), n.value[u.value] = u.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: o[i], issues: [] }, r);
        c instanceof Promise ? a.push(c.then((f) => {
          f.issues.length && n.issues.push(...qt(i, f.issues)), n.value[u.value] = f.value;
        })) : (c.issues.length && n.issues.push(...qt(i, c.issues)), n.value[u.value] = c.value);
      }
    }
    return a.length ? Promise.all(a).then(() => n) : n;
  };
}), bp = /* @__PURE__ */ O("$ZodEnum", (e, t) => {
  be.init(e, t);
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
}), wp = /* @__PURE__ */ O("$ZodLiteral", (e, t) => {
  if (be.init(e, t), t.values.length === 0)
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
}), xp = /* @__PURE__ */ O("$ZodTransform", (e, t) => {
  be.init(e, t), e._zod.parse = (n, r) => {
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
const Ip = /* @__PURE__ */ O("$ZodOptional", (e, t) => {
  be.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", he(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), he(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${io(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((a) => Jo(a, n.value)) : Jo(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), kp = /* @__PURE__ */ O("$ZodNullable", (e, t) => {
  be.init(e, t), he(e._zod, "optin", () => t.innerType._zod.optin), he(e._zod, "optout", () => t.innerType._zod.optout), he(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${io(n.source)}|null)$`) : void 0;
  }), he(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Tp = /* @__PURE__ */ O("$ZodDefault", (e, t) => {
  be.init(e, t), e._zod.optin = "optional", he(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
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
const Sp = /* @__PURE__ */ O("$ZodPrefault", (e, t) => {
  be.init(e, t), e._zod.optin = "optional", he(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Ep = /* @__PURE__ */ O("$ZodNonOptional", (e, t) => {
  be.init(e, t), he(e._zod, "values", () => {
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
const Cp = /* @__PURE__ */ O("$ZodCatch", (e, t) => {
  be.init(e, t), he(e._zod, "optin", () => t.innerType._zod.optin), he(e._zod, "optout", () => t.innerType._zod.optout), he(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
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
}), Mp = /* @__PURE__ */ O("$ZodPipe", (e, t) => {
  be.init(e, t), he(e._zod, "values", () => t.in._zod.values), he(e._zod, "optin", () => t.in._zod.optin), he(e._zod, "optout", () => t.out._zod.optout), he(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
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
const Rp = /* @__PURE__ */ O("$ZodReadonly", (e, t) => {
  be.init(e, t), he(e._zod, "propValues", () => t.innerType._zod.propValues), he(e._zod, "values", () => t.innerType._zod.values), he(e._zod, "optin", () => {
    var n, r;
    return (r = (n = t.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optin;
  }), he(e._zod, "optout", () => {
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
const Op = /* @__PURE__ */ O("$ZodLazy", (e, t) => {
  be.init(e, t), he(e._zod, "innerType", () => t.getter()), he(e._zod, "pattern", () => {
    var n, r;
    return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.pattern;
  }), he(e._zod, "propValues", () => {
    var n, r;
    return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.propValues;
  }), he(e._zod, "optin", () => {
    var n, r;
    return ((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optin) ?? void 0;
  }), he(e._zod, "optout", () => {
    var n, r;
    return ((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : r.optout) ?? void 0;
  }), e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r);
}), Np = /* @__PURE__ */ O("$ZodCustom", (e, t) => {
  Xe.init(e, t), be.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
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
    var m, v, d;
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
    const u = (v = (m = t._zod).toJSONSchema) == null ? void 0 : v.call(m);
    if (u)
      i.schema = u;
    else {
      const g = {
        ...n,
        schemaPath: [...n.schemaPath, t],
        path: n.path
      }, y = t._zod.parent;
      if (y)
        i.ref = y, this.process(y, g), this.seen.get(y).isParent = !0;
      else {
        const w = i.schema;
        switch (o.type) {
          case "string": {
            const h = w;
            h.type = "string";
            const { minimum: b, maximum: _, format: x, patterns: C, contentEncoding: A } = t._zod.bag;
            if (typeof b == "number" && (h.minLength = b), typeof _ == "number" && (h.maxLength = _), x && (h.format = a[x] ?? x, h.format === "" && delete h.format), A && (h.contentEncoding = A), C && C.size > 0) {
              const S = [...C];
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
            const h = w, { minimum: b, maximum: _, format: x, multipleOf: C, exclusiveMaximum: A, exclusiveMinimum: S } = t._zod.bag;
            typeof x == "string" && x.includes("int") ? h.type = "integer" : h.type = "number", typeof S == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = S, h.exclusiveMinimum = !0) : h.exclusiveMinimum = S), typeof b == "number" && (h.minimum = b, typeof S == "number" && this.target !== "draft-4" && (S >= b ? delete h.minimum : delete h.exclusiveMinimum)), typeof A == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = A, h.exclusiveMaximum = !0) : h.exclusiveMaximum = A), typeof _ == "number" && (h.maximum = _, typeof A == "number" && this.target !== "draft-4" && (A <= _ ? delete h.maximum : delete h.exclusiveMaximum)), typeof C == "number" && (h.multipleOf = C);
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
            const h = w, { minimum: b, maximum: _ } = t._zod.bag;
            typeof b == "number" && (h.minItems = b), typeof _ == "number" && (h.maxItems = _), h.type = "array", h.items = this.process(o.element, { ...g, path: [...g.path, "items"] });
            break;
          }
          case "object": {
            const h = w;
            h.type = "object", h.properties = {};
            const b = o.shape;
            for (const C in b)
              h.properties[C] = this.process(b[C], {
                ...g,
                path: [...g.path, "properties", C]
              });
            const _ = new Set(Object.keys(b)), x = new Set([..._].filter((C) => {
              const A = o.shape[C]._zod;
              return this.io === "input" ? A.optin === void 0 : A.optout === void 0;
            }));
            x.size > 0 && (h.required = Array.from(x)), ((d = o.catchall) == null ? void 0 : d._zod.def.type) === "never" ? h.additionalProperties = !1 : o.catchall ? o.catchall && (h.additionalProperties = this.process(o.catchall, {
              ...g,
              path: [...g.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = w, b = o.discriminator !== void 0, _ = o.options.map((x, C) => this.process(x, {
              ...g,
              path: [...g.path, b ? "oneOf" : "anyOf", C]
            }));
            b ? h.oneOf = _ : h.anyOf = _;
            break;
          }
          case "intersection": {
            const h = w, b = this.process(o.left, {
              ...g,
              path: [...g.path, "allOf", 0]
            }), _ = this.process(o.right, {
              ...g,
              path: [...g.path, "allOf", 1]
            }), x = (A) => "allOf" in A && Object.keys(A).length === 1, C = [
              ...x(b) ? b.allOf : [b],
              ...x(_) ? _.allOf : [_]
            ];
            h.allOf = C;
            break;
          }
          case "tuple": {
            const h = w;
            h.type = "array";
            const b = this.target === "draft-2020-12" ? "prefixItems" : "items", _ = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", x = o.items.map((M, R) => this.process(M, {
              ...g,
              path: [...g.path, b, R]
            })), C = o.rest ? this.process(o.rest, {
              ...g,
              path: [...g.path, _, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = x, C && (h.items = C)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: x
            }, C && h.items.anyOf.push(C), h.minItems = x.length, C || (h.maxItems = x.length)) : (h.items = x, C && (h.additionalItems = C));
            const { minimum: A, maximum: S } = t._zod.bag;
            typeof A == "number" && (h.minItems = A), typeof S == "number" && (h.maxItems = S);
            break;
          }
          case "record": {
            const h = w;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(o.keyType, {
              ...g,
              path: [...g.path, "propertyNames"]
            })), h.additionalProperties = this.process(o.valueType, {
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
            const h = w, b = pi(o.entries);
            b.every((_) => typeof _ == "number") && (h.type = "number"), b.every((_) => typeof _ == "string") && (h.type = "string"), h.enum = b;
            break;
          }
          case "literal": {
            const h = w, b = [];
            for (const _ of o.values)
              if (_ === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof _ == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                b.push(Number(_));
              } else
                b.push(_);
            if (b.length !== 0) if (b.length === 1) {
              const _ = b[0];
              h.type = _ === null ? "null" : typeof _, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [_] : h.const = _;
            } else
              b.every((_) => typeof _ == "number") && (h.type = "number"), b.every((_) => typeof _ == "string") && (h.type = "string"), b.every((_) => typeof _ == "boolean") && (h.type = "string"), b.every((_) => _ === null) && (h.type = "null"), h.enum = b;
            break;
          }
          case "file": {
            const h = w, b = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: _, maximum: x, mime: C } = t._zod.bag;
            _ !== void 0 && (b.minLength = _), x !== void 0 && (b.maxLength = x), C ? C.length === 1 ? (b.contentMediaType = C[0], Object.assign(h, b)) : h.anyOf = C.map((A) => ({ ...b, contentMediaType: A })) : Object.assign(h, b);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(o.innerType, g);
            this.target === "openapi-3.0" ? (i.ref = o.innerType, w.nullable = !0) : w.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, g), i.ref = o.innerType;
            break;
          }
          case "success": {
            const h = w;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, g), i.ref = o.innerType, w.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, g), i.ref = o.innerType, this.io === "input" && (w._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, g), i.ref = o.innerType;
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
            const h = w, b = t._zod.pattern;
            if (!b)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = b.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(h, g), i.ref = h;
            break;
          }
          case "readonly": {
            this.process(o.innerType, g), i.ref = o.innerType, w.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, g), i.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, g), i.ref = o.innerType;
            break;
          }
          case "lazy": {
            const h = t._zod.innerType;
            this.process(h, g), i.ref = h;
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
    var f, m, v, d, g, y;
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
      var C;
      const h = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (r.external) {
        const A = (C = r.external.registry.get(w[0])) == null ? void 0 : C.id, S = r.external.uri ?? ((R) => R);
        if (A)
          return { ref: S(A) };
        const M = w[1].defId ?? w[1].schema.id ?? `schema${this.counter++}`;
        return w[1].defId = M, { defId: M, ref: `${S("__shared")}#/${h}/${M}` };
      }
      if (w[1] === o)
        return { ref: "#" };
      const _ = `#/${h}/`, x = w[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: x, ref: _ + x };
    }, s = (w) => {
      if (w[1].schema.$ref)
        return;
      const h = w[1], { ref: b, defId: _ } = a(w);
      h.def = { ...h.schema }, _ && (h.defId = _);
      const x = h.schema;
      for (const C in x)
        delete x[C];
      x.$ref = b;
    };
    if (r.cycles === "throw")
      for (const w of this.seen.entries()) {
        const h = w[1];
        if (h.cycle)
          throw new Error(`Cycle detected: #/${(f = h.cycle) == null ? void 0 : f.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const w of this.seen.entries()) {
      const h = w[1];
      if (t === w[0]) {
        s(w);
        continue;
      }
      if (r.external) {
        const _ = (m = r.external.registry.get(w[0])) == null ? void 0 : m.id;
        if (t !== w[0] && _) {
          s(w);
          continue;
        }
      }
      if ((v = this.metadataRegistry.get(w[0])) == null ? void 0 : v.id) {
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
      const b = this.seen.get(w), _ = b.def ?? b.schema, x = { ..._ };
      if (b.ref === null)
        return;
      const C = b.ref;
      if (b.ref = null, C) {
        i(C, h);
        const A = this.seen.get(C).schema;
        A.$ref && (h.target === "draft-7" || h.target === "draft-4" || h.target === "openapi-3.0") ? (_.allOf = _.allOf ?? [], _.allOf.push(A)) : (Object.assign(_, A), Object.assign(_, x));
      }
      b.isParent || this.override({
        zodSchema: w,
        jsonSchema: _,
        path: b.path ?? []
      });
    };
    for (const w of [...this.seen.entries()].reverse())
      i(w[0], { target: this.target });
    const u = {};
    if (this.target === "draft-2020-12" ? u.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? u.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? u.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), (d = r.external) != null && d.uri) {
      const w = (g = r.external.registry.get(t)) == null ? void 0 : g.id;
      if (!w)
        throw new Error("Schema is missing an `id` property");
      u.$id = r.external.uri(w);
    }
    Object.assign(u, o.def);
    const c = ((y = r.external) == null ? void 0 : y.defs) ?? {};
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
const Nf = /* @__PURE__ */ O("ZodISODateTime", (e, t) => {
  Jd.init(e, t), Me.init(e, t);
});
function Af(e) {
  return nf(Nf, e);
}
const $f = /* @__PURE__ */ O("ZodISODate", (e, t) => {
  Hd.init(e, t), Me.init(e, t);
});
function Pf(e) {
  return rf($f, e);
}
const jf = /* @__PURE__ */ O("ZodISOTime", (e, t) => {
  Wd.init(e, t), Me.init(e, t);
});
function qf(e) {
  return of(jf, e);
}
const Df = /* @__PURE__ */ O("ZodISODuration", (e, t) => {
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
}, it = O("ZodError", Uf, {
  Parent: Error
}), Zf = /* @__PURE__ */ uo(it), Lf = /* @__PURE__ */ co(it), Ff = /* @__PURE__ */ ir(it), Ni = /* @__PURE__ */ lr(it), Vf = /* @__PURE__ */ Zc(it), Gf = /* @__PURE__ */ Lc(it), Bf = /* @__PURE__ */ Fc(it), Jf = /* @__PURE__ */ Vc(it), Hf = /* @__PURE__ */ Gc(it), Wf = /* @__PURE__ */ Bc(it), Kf = /* @__PURE__ */ Jc(it), Yf = /* @__PURE__ */ Hc(it), Ie = /* @__PURE__ */ O("ZodType", (e, t) => (be.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(Vt(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (n, r) => $t(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => Zf(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => Ff(e, n, r), e.parseAsync = async (n, r) => Lf(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => Ni(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => Vf(e, n, r), e.decode = (n, r) => Gf(e, n, r), e.encodeAsync = async (n, r) => Bf(e, n, r), e.decodeAsync = async (n, r) => Jf(e, n, r), e.safeEncode = (n, r) => Hf(e, n, r), e.safeDecode = (n, r) => Wf(e, n, r), e.safeEncodeAsync = async (n, r) => Kf(e, n, r), e.safeDecodeAsync = async (n, r) => Yf(e, n, r), e.refine = (n, r) => e.check(Vm(n, r)), e.superRefine = (n) => e.check(Gm(n)), e.overwrite = (n) => e.check(un(n)), e.optional = () => sa(e), e.nullable = () => ia(e), e.nullish = () => sa(ia(e)), e.nonoptional = (n) => qm(e, n), e.array = () => N(e), e.or = (n) => ie([e, n]), e.and = (n) => Sm(e, n), e.transform = (n) => la(e, Om(n)), e.default = (n) => $m(e, n), e.prefault = (n) => jm(e, n), e.catch = (n) => zm(e, n), e.pipe = (n) => la(e, n), e.readonly = () => Lm(e), e.describe = (n) => {
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
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Ai = /* @__PURE__ */ O("_ZodString", (e, t) => {
  po.init(e, t), Ie.init(e, t);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(hf(...r)), e.includes = (...r) => e.check(yf(...r)), e.startsWith = (...r) => e.check(_f(...r)), e.endsWith = (...r) => e.check(bf(...r)), e.min = (...r) => e.check(Kn(...r)), e.max = (...r) => e.check(Ri(...r)), e.length = (...r) => e.check(Oi(...r)), e.nonempty = (...r) => e.check(Kn(1, ...r)), e.lowercase = (r) => e.check(gf(r)), e.uppercase = (r) => e.check(vf(r)), e.trim = () => e.check(xf()), e.normalize = (...r) => e.check(wf(...r)), e.toLowerCase = () => e.check(If()), e.toUpperCase = () => e.check(kf()), e.slugify = () => e.check(Tf());
}), Xf = /* @__PURE__ */ O("ZodString", (e, t) => {
  po.init(e, t), Ai.init(e, t), e.email = (n) => e.check(Pp(Qf, n)), e.url = (n) => e.check(Up(em, n)), e.jwt = (n) => e.check(tf(hm, n)), e.emoji = (n) => e.check(Zp(tm, n)), e.guid = (n) => e.check(Qo(oa, n)), e.uuid = (n) => e.check(jp(Gn, n)), e.uuidv4 = (n) => e.check(qp(Gn, n)), e.uuidv6 = (n) => e.check(Dp(Gn, n)), e.uuidv7 = (n) => e.check(zp(Gn, n)), e.nanoid = (n) => e.check(Lp(nm, n)), e.guid = (n) => e.check(Qo(oa, n)), e.cuid = (n) => e.check(Fp(rm, n)), e.cuid2 = (n) => e.check(Vp(om, n)), e.ulid = (n) => e.check(Gp(am, n)), e.base64 = (n) => e.check(Xp(pm, n)), e.base64url = (n) => e.check(Qp(fm, n)), e.xid = (n) => e.check(Bp(sm, n)), e.ksuid = (n) => e.check(Jp(im, n)), e.ipv4 = (n) => e.check(Hp(lm, n)), e.ipv6 = (n) => e.check(Wp(um, n)), e.cidrv4 = (n) => e.check(Kp(cm, n)), e.cidrv6 = (n) => e.check(Yp(dm, n)), e.e164 = (n) => e.check(ef(mm, n)), e.datetime = (n) => e.check(Af(n)), e.date = (n) => e.check(Pf(n)), e.time = (n) => e.check(qf(n)), e.duration = (n) => e.check(zf(n));
});
function l(e) {
  return $p(Xf, e);
}
const Me = /* @__PURE__ */ O("ZodStringFormat", (e, t) => {
  Se.init(e, t), Ai.init(e, t);
}), Qf = /* @__PURE__ */ O("ZodEmail", (e, t) => {
  Dd.init(e, t), Me.init(e, t);
}), oa = /* @__PURE__ */ O("ZodGUID", (e, t) => {
  jd.init(e, t), Me.init(e, t);
}), Gn = /* @__PURE__ */ O("ZodUUID", (e, t) => {
  qd.init(e, t), Me.init(e, t);
}), em = /* @__PURE__ */ O("ZodURL", (e, t) => {
  zd.init(e, t), Me.init(e, t);
}), tm = /* @__PURE__ */ O("ZodEmoji", (e, t) => {
  Ud.init(e, t), Me.init(e, t);
}), nm = /* @__PURE__ */ O("ZodNanoID", (e, t) => {
  Zd.init(e, t), Me.init(e, t);
}), rm = /* @__PURE__ */ O("ZodCUID", (e, t) => {
  Ld.init(e, t), Me.init(e, t);
}), om = /* @__PURE__ */ O("ZodCUID2", (e, t) => {
  Fd.init(e, t), Me.init(e, t);
}), am = /* @__PURE__ */ O("ZodULID", (e, t) => {
  Vd.init(e, t), Me.init(e, t);
}), sm = /* @__PURE__ */ O("ZodXID", (e, t) => {
  Gd.init(e, t), Me.init(e, t);
}), im = /* @__PURE__ */ O("ZodKSUID", (e, t) => {
  Bd.init(e, t), Me.init(e, t);
}), lm = /* @__PURE__ */ O("ZodIPv4", (e, t) => {
  Yd.init(e, t), Me.init(e, t);
}), um = /* @__PURE__ */ O("ZodIPv6", (e, t) => {
  Xd.init(e, t), Me.init(e, t);
}), cm = /* @__PURE__ */ O("ZodCIDRv4", (e, t) => {
  Qd.init(e, t), Me.init(e, t);
}), dm = /* @__PURE__ */ O("ZodCIDRv6", (e, t) => {
  ep.init(e, t), Me.init(e, t);
}), pm = /* @__PURE__ */ O("ZodBase64", (e, t) => {
  tp.init(e, t), Me.init(e, t);
}), fm = /* @__PURE__ */ O("ZodBase64URL", (e, t) => {
  rp.init(e, t), Me.init(e, t);
}), mm = /* @__PURE__ */ O("ZodE164", (e, t) => {
  op.init(e, t), Me.init(e, t);
}), hm = /* @__PURE__ */ O("ZodJWT", (e, t) => {
  sp.init(e, t), Me.init(e, t);
}), fo = /* @__PURE__ */ O("ZodNumber", (e, t) => {
  Ti.init(e, t), Ie.init(e, t), e.gt = (r, o) => e.check(ta(r, o)), e.gte = (r, o) => e.check(Mr(r, o)), e.min = (r, o) => e.check(Mr(r, o)), e.lt = (r, o) => e.check(ea(r, o)), e.lte = (r, o) => e.check(Cr(r, o)), e.max = (r, o) => e.check(Cr(r, o)), e.int = (r) => e.check(aa(r)), e.safe = (r) => e.check(aa(r)), e.positive = (r) => e.check(ta(0, r)), e.nonnegative = (r) => e.check(Mr(0, r)), e.negative = (r) => e.check(ea(0, r)), e.nonpositive = (r) => e.check(Cr(0, r)), e.multipleOf = (r, o) => e.check(na(r, o)), e.step = (r, o) => e.check(na(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function k(e) {
  return sf(fo, e);
}
const gm = /* @__PURE__ */ O("ZodNumberFormat", (e, t) => {
  ip.init(e, t), fo.init(e, t);
});
function aa(e) {
  return uf(gm, e);
}
const vm = /* @__PURE__ */ O("ZodBoolean", (e, t) => {
  lp.init(e, t), Ie.init(e, t);
});
function J(e) {
  return cf(vm, e);
}
const ym = /* @__PURE__ */ O("ZodNull", (e, t) => {
  up.init(e, t), Ie.init(e, t);
});
function _m(e) {
  return df(ym, e);
}
const bm = /* @__PURE__ */ O("ZodAny", (e, t) => {
  cp.init(e, t), Ie.init(e, t);
});
function pt() {
  return pf(bm);
}
const wm = /* @__PURE__ */ O("ZodUnknown", (e, t) => {
  dp.init(e, t), Ie.init(e, t);
});
function de() {
  return ff(wm);
}
const xm = /* @__PURE__ */ O("ZodNever", (e, t) => {
  pp.init(e, t), Ie.init(e, t);
});
function Te(e) {
  return mf(xm, e);
}
const Im = /* @__PURE__ */ O("ZodArray", (e, t) => {
  fp.init(e, t), Ie.init(e, t), e.element = t.element, e.min = (n, r) => e.check(Kn(n, r)), e.nonempty = (n) => e.check(Kn(1, n)), e.max = (n, r) => e.check(Ri(n, r)), e.length = (n, r) => e.check(Oi(n, r)), e.unwrap = () => e.element;
});
function N(e, t) {
  return Sf(Im, e, t);
}
const mo = /* @__PURE__ */ O("ZodObject", (e, t) => {
  hp.init(e, t), Ie.init(e, t), he(e, "shape", () => t.shape), e.keyof = () => ee(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: de() }), e.loose = () => e.clone({ ...e._zod.def, catchall: de() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Te() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Nc(e, n), e.safeExtend = (n) => Ac(e, n), e.merge = (n) => $c(e, n), e.pick = (n) => Rc(e, n), e.omit = (n) => Oc(e, n), e.partial = (...n) => Pc(Pi, e, n[0]), e.required = (...n) => jc(ji, e, n[0]);
});
function p(e, t) {
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
    catchall: de(),
    ...G(t)
  });
}
const $i = /* @__PURE__ */ O("ZodUnion", (e, t) => {
  Ci.init(e, t), Ie.init(e, t), e.options = t.options;
});
function ie(e, t) {
  return new $i({
    type: "union",
    options: e,
    ...G(t)
  });
}
const km = /* @__PURE__ */ O("ZodDiscriminatedUnion", (e, t) => {
  $i.init(e, t), gp.init(e, t);
});
function me(e, t, n) {
  return new km({
    type: "union",
    options: t,
    discriminator: e,
    ...G(n)
  });
}
const Tm = /* @__PURE__ */ O("ZodIntersection", (e, t) => {
  vp.init(e, t), Ie.init(e, t);
});
function Sm(e, t) {
  return new Tm({
    type: "intersection",
    left: e,
    right: t
  });
}
const Em = /* @__PURE__ */ O("ZodTuple", (e, t) => {
  yp.init(e, t), Ie.init(e, t), e.rest = (n) => e.clone({
    ...e._zod.def,
    rest: n
  });
});
function Wr(e, t, n) {
  const r = t instanceof be, o = r ? n : t, a = r ? t : null;
  return new Em({
    type: "tuple",
    items: e,
    rest: a,
    ...G(o)
  });
}
const Cm = /* @__PURE__ */ O("ZodRecord", (e, t) => {
  _p.init(e, t), Ie.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Pe(e, t, n) {
  return new Cm({
    type: "record",
    keyType: e,
    valueType: t,
    ...G(n)
  });
}
const Kr = /* @__PURE__ */ O("ZodEnum", (e, t) => {
  bp.init(e, t), Ie.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
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
function ee(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new Kr({
    type: "enum",
    entries: n,
    ...G(t)
  });
}
const Mm = /* @__PURE__ */ O("ZodLiteral", (e, t) => {
  wp.init(e, t), Ie.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function I(e, t) {
  return new Mm({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...G(t)
  });
}
const Rm = /* @__PURE__ */ O("ZodTransform", (e, t) => {
  xp.init(e, t), Ie.init(e, t), e._zod.parse = (n, r) => {
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
const Pi = /* @__PURE__ */ O("ZodOptional", (e, t) => {
  Ip.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function sa(e) {
  return new Pi({
    type: "optional",
    innerType: e
  });
}
const Nm = /* @__PURE__ */ O("ZodNullable", (e, t) => {
  kp.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ia(e) {
  return new Nm({
    type: "nullable",
    innerType: e
  });
}
const Am = /* @__PURE__ */ O("ZodDefault", (e, t) => {
  Tp.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
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
const Pm = /* @__PURE__ */ O("ZodPrefault", (e, t) => {
  Sp.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.innerType;
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
const ji = /* @__PURE__ */ O("ZodNonOptional", (e, t) => {
  Ep.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function qm(e, t) {
  return new ji({
    type: "nonoptional",
    innerType: e,
    ...G(t)
  });
}
const Dm = /* @__PURE__ */ O("ZodCatch", (e, t) => {
  Cp.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function zm(e, t) {
  return new Dm({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Um = /* @__PURE__ */ O("ZodPipe", (e, t) => {
  Mp.init(e, t), Ie.init(e, t), e.in = t.in, e.out = t.out;
});
function la(e, t) {
  return new Um({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Zm = /* @__PURE__ */ O("ZodReadonly", (e, t) => {
  Rp.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Lm(e) {
  return new Zm({
    type: "readonly",
    innerType: e
  });
}
const Fm = /* @__PURE__ */ O("ZodLazy", (e, t) => {
  Op.init(e, t), Ie.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function qi(e) {
  return new Fm({
    type: "lazy",
    getter: e
  });
}
const ho = /* @__PURE__ */ O("ZodCustom", (e, t) => {
  Np.init(e, t), Ie.init(e, t);
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
var se;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(se || (se = {}));
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
}, De = On();
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
      return new ze({
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
function Ze(e, ...t) {
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
      headers: Ze(
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
        throw zt(c) || ze.isInstance(c) ? c : new ze({
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
      throw u instanceof Error && (zt(u) || ze.isInstance(u)) ? u : new ze({
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
  const n = await st({ value: e, schema: t });
  if (!n.success)
    throw Ye.wrap({ value: e, cause: n.error });
  return n.value;
}
async function st({
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
      headers: Ze(
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
      } catch (f) {
        throw zt(f) || ze.isInstance(f) ? f : new ze({
          message: "Failed to process error response",
          cause: f,
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
      throw c instanceof Error && (zt(c) || ze.isInstance(c)) ? c : new ze({
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
      value: new ze({
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
      value: new ze({
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
      value: new ze({
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
}, Le = (e) => async ({ response: t, url: n, requestBodyValues: r }) => {
  const o = await t.text(), a = await Nt({
    text: o,
    schema: e
  }), s = cn(t);
  if (!a.success)
    throw new ze({
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
    throw new ze({
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
    throw new ze({
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
  return (n = e.type) != null && n._def && ((o = (r = e.type) == null ? void 0 : r._def) == null ? void 0 : o.typeName) !== se.ZodAny && (a.items = _e(e.type._def, {
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
  return _e(e.type._def, t);
}
var _h = (e, t) => _e(e.innerType._def, t);
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
    ..._e(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function xh(e, t) {
  return t.effectStrategy === "input" ? _e(e.schema._def, t) : rt();
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
    _e(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    _e(e.right._def, {
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
function Gi(e, t) {
  var n, r, o, a, s, i;
  const u = {
    type: "object",
    additionalProperties: (n = _e(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    })) != null ? n : t.allowedAdditionalProperties
  };
  if (((r = e.keyType) == null ? void 0 : r._def.typeName) === se.ZodString && ((o = e.keyType._def.checks) != null && o.length)) {
    const { type: c, ...f } = Vi(e.keyType._def, t);
    return {
      ...u,
      propertyNames: f
    };
  } else {
    if (((a = e.keyType) == null ? void 0 : a._def.typeName) === se.ZodEnum)
      return {
        ...u,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === se.ZodBranded && e.keyType._def.type._def.typeName === se.ZodString && ((i = e.keyType._def.type._def.checks) != null && i.length)) {
      const { type: c, ...f } = Li(
        e.keyType._def,
        t
      );
      return {
        ...u,
        propertyNames: f
      };
    }
  }
  return u;
}
function Mh(e, t) {
  if (t.mapStrategy === "record")
    return Gi(e, t);
  const n = _e(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || rt(), r = _e(e.valueType._def, {
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
    (r, o) => _e(r._def, {
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
  const n = _e(e.innerType._def, {
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
    const u = zh(i), c = _e(i._def, {
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
    return _e(e.catchall._def, {
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
    return _e(e.innerType._def, t);
  const r = _e(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return r ? { anyOf: [{ not: rt() }, r] } : rt();
}, Zh = (e, t) => {
  if (t.pipeStrategy === "input")
    return _e(e.in._def, t);
  if (t.pipeStrategy === "output")
    return _e(e.out._def, t);
  const n = _e(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), r = _e(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", n ? "1" : "0"]
  });
  return {
    allOf: [n, r].filter((o) => o !== void 0)
  };
};
function Lh(e, t) {
  return _e(e.type._def, t);
}
function Fh(e, t) {
  const r = {
    type: "array",
    uniqueItems: !0,
    items: _e(e.valueType._def, {
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
      (n, r) => _e(n._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${r}`]
      })
    ).reduce(
      (n, r) => r === void 0 ? n : [...n, r],
      []
    ),
    additionalItems: _e(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map(
      (n, r) => _e(n._def, {
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
var Jh = (e, t) => _e(e.innerType._def, t), Hh = (e, t, n) => {
  switch (t) {
    case se.ZodString:
      return Vi(e, n);
    case se.ZodNumber:
      return jh(e);
    case se.ZodObject:
      return qh(e, n);
    case se.ZodBigInt:
      return vh(e);
    case se.ZodBoolean:
      return yh();
    case se.ZodDate:
      return Fi(e, n);
    case se.ZodUndefined:
      return Gh();
    case se.ZodNull:
      return Nh();
    case se.ZodArray:
      return gh(e, n);
    case se.ZodUnion:
    case se.ZodDiscriminatedUnion:
      return Ah(e, n);
    case se.ZodIntersection:
      return Th(e, n);
    case se.ZodTuple:
      return Vh(e, n);
    case se.ZodRecord:
      return Gi(e, n);
    case se.ZodLiteral:
      return Sh(e);
    case se.ZodEnum:
      return Ih(e);
    case se.ZodNativeEnum:
      return Rh(e);
    case se.ZodNullable:
      return Ph(e, n);
    case se.ZodOptional:
      return Uh(e, n);
    case se.ZodMap:
      return Mh(e, n);
    case se.ZodSet:
      return Fh(e, n);
    case se.ZodLazy:
      return () => e.getter()._def;
    case se.ZodPromise:
      return Lh(e, n);
    case se.ZodNaN:
    case se.ZodNever:
      return Oh();
    case se.ZodEffects:
      return xh(e, n);
    case se.ZodAny:
      return rt();
    case se.ZodUnknown:
      return Bh();
    case se.ZodDefault:
      return wh(e, n);
    case se.ZodBranded:
      return Li(e, n);
    case se.ZodReadonly:
      return Jh(e, n);
    case se.ZodCatch:
      return _h(e, n);
    case se.ZodPipeline:
      return Zh(e, n);
    case se.ZodFunction:
    case se.ZodVoid:
    case se.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((r) => {
      })();
  }
};
function _e(e, t, n = !1) {
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
  const s = Hh(e, e.typeName, t), i = typeof s == "function" ? _e(s(), t) : s;
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
    (c, [f, m]) => {
      var v;
      return {
        ...c,
        [f]: (v = _e(
          m._def,
          {
            ...r,
            currentPath: [...r.basePath, r.definitionPath, f]
          },
          !0
        )) != null ? v : rt()
      };
    },
    {}
  ) : void 0;
  const a = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, s = (n = _e(
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
function X(e) {
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
var ig = "2.0.53", lg = X(
  () => U(
    p({
      type: I("error"),
      error: p({
        type: l(),
        message: l()
      })
    })
  )
), va = bt({
  errorSchema: lg,
  errorToMessage: (e) => e.error.message
}), ug = X(
  () => U(
    p({
      type: I("message"),
      id: l().nullish(),
      model: l().nullish(),
      content: N(
        me("type", [
          p({
            type: I("text"),
            text: l(),
            citations: N(
              me("type", [
                p({
                  type: I("web_search_result_location"),
                  cited_text: l(),
                  url: l(),
                  title: l(),
                  encrypted_index: l()
                }),
                p({
                  type: I("page_location"),
                  cited_text: l(),
                  document_index: k(),
                  document_title: l().nullable(),
                  start_page_number: k(),
                  end_page_number: k()
                }),
                p({
                  type: I("char_location"),
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
            type: I("thinking"),
            thinking: l(),
            signature: l()
          }),
          p({
            type: I("redacted_thinking"),
            data: l()
          }),
          p({
            type: I("tool_use"),
            id: l(),
            name: l(),
            input: de()
          }),
          p({
            type: I("server_tool_use"),
            id: l(),
            name: l(),
            input: Pe(l(), de()).nullish()
          }),
          p({
            type: I("web_fetch_tool_result"),
            tool_use_id: l(),
            content: ie([
              p({
                type: I("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: p({
                  type: I("document"),
                  title: l().nullable(),
                  citations: p({ enabled: J() }).optional(),
                  source: p({
                    type: I("text"),
                    media_type: l(),
                    data: l()
                  })
                })
              }),
              p({
                type: I("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          p({
            type: I("web_search_tool_result"),
            tool_use_id: l(),
            content: ie([
              N(
                p({
                  type: I("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              p({
                type: I("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          p({
            type: I("code_execution_tool_result"),
            tool_use_id: l(),
            content: ie([
              p({
                type: I("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: I("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          p({
            type: I("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: me("type", [
              p({
                type: I("bash_code_execution_result"),
                content: N(
                  p({
                    type: I("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: I("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          p({
            type: I("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: me("type", [
              p({
                type: I("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              p({
                type: I("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: k().nullable(),
                start_line: k().nullable(),
                total_lines: k().nullable()
              }),
              p({
                type: I("text_editor_code_execution_create_result"),
                is_file_update: J()
              }),
              p({
                type: I(
                  "text_editor_code_execution_str_replace_result"
                ),
                lines: N(l()).nullable(),
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
        skills: N(
          p({
            type: ie([I("anthropic"), I("custom")]),
            skill_id: l(),
            version: l()
          })
        ).nullish()
      }).nullish()
    })
  )
), cg = X(
  () => U(
    me("type", [
      p({
        type: I("message_start"),
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
        type: I("content_block_start"),
        index: k(),
        content_block: me("type", [
          p({
            type: I("text"),
            text: l()
          }),
          p({
            type: I("thinking"),
            thinking: l()
          }),
          p({
            type: I("tool_use"),
            id: l(),
            name: l()
          }),
          p({
            type: I("redacted_thinking"),
            data: l()
          }),
          p({
            type: I("server_tool_use"),
            id: l(),
            name: l(),
            input: Pe(l(), de()).nullish()
          }),
          p({
            type: I("web_fetch_tool_result"),
            tool_use_id: l(),
            content: ie([
              p({
                type: I("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: p({
                  type: I("document"),
                  title: l().nullable(),
                  citations: p({ enabled: J() }).optional(),
                  source: p({
                    type: I("text"),
                    media_type: l(),
                    data: l()
                  })
                })
              }),
              p({
                type: I("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          p({
            type: I("web_search_tool_result"),
            tool_use_id: l(),
            content: ie([
              N(
                p({
                  type: I("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              p({
                type: I("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          p({
            type: I("code_execution_tool_result"),
            tool_use_id: l(),
            content: ie([
              p({
                type: I("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: I("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          p({
            type: I("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: me("type", [
              p({
                type: I("bash_code_execution_result"),
                content: N(
                  p({
                    type: I("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: k()
              }),
              p({
                type: I("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          p({
            type: I("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: me("type", [
              p({
                type: I("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              p({
                type: I("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: k().nullable(),
                start_line: k().nullable(),
                total_lines: k().nullable()
              }),
              p({
                type: I("text_editor_code_execution_create_result"),
                is_file_update: J()
              }),
              p({
                type: I(
                  "text_editor_code_execution_str_replace_result"
                ),
                lines: N(l()).nullable(),
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
        type: I("content_block_delta"),
        index: k(),
        delta: me("type", [
          p({
            type: I("input_json_delta"),
            partial_json: l()
          }),
          p({
            type: I("text_delta"),
            text: l()
          }),
          p({
            type: I("thinking_delta"),
            thinking: l()
          }),
          p({
            type: I("signature_delta"),
            signature: l()
          }),
          p({
            type: I("citations_delta"),
            citation: me("type", [
              p({
                type: I("web_search_result_location"),
                cited_text: l(),
                url: l(),
                title: l(),
                encrypted_index: l()
              }),
              p({
                type: I("page_location"),
                cited_text: l(),
                document_index: k(),
                document_title: l().nullable(),
                start_page_number: k(),
                end_page_number: k()
              }),
              p({
                type: I("char_location"),
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
        type: I("content_block_stop"),
        index: k()
      }),
      p({
        type: I("error"),
        error: p({
          type: l(),
          message: l()
        })
      }),
      p({
        type: I("message_delta"),
        delta: p({
          stop_reason: l().nullish(),
          stop_sequence: l().nullish(),
          container: p({
            expires_at: l(),
            id: l(),
            skills: N(
              p({
                type: ie([
                  I("anthropic"),
                  I("custom")
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
        type: I("message_stop")
      }),
      p({
        type: I("ping")
      })
    ])
  )
), dg = X(
  () => U(
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
}), pg = p({
  sendReasoning: J().optional(),
  /**
   * Determines how structured outputs are generated.
   *
   * - `outputFormat`: Use the `output_format` parameter to specify the structured output format.
   * - `jsonTool`: Use a special 'json' tool to specify the structured output format (default).
   * - `auto`: Use 'outputFormat' when supported, otherwise use 'jsonTool'.
   */
  structuredOutputMode: ee(["outputFormat", "jsonTool", "auto"]).optional(),
  /**
   * Configuration for enabling Claude's extended thinking.
   *
   * When enabled, responses include thinking content blocks showing Claude's thinking process before the final answer.
   * Requires a minimum budget of 1,024 tokens and counts towards the `max_tokens` limit.
   */
  thinking: p({
    type: ie([I("enabled"), I("disabled")]),
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
  cacheControl: p({
    type: I("ephemeral"),
    ttl: ie([I("5m"), I("1h")]).optional()
  }).optional(),
  /**
   * Agent Skills configuration. Skills enable Claude to perform specialized tasks
   * like document processing (PPTX, DOCX, PDF, XLSX) and data analysis.
   * Requires code execution tool to be enabled.
   */
  container: p({
    id: l().optional(),
    skills: N(
      p({
        type: ie([I("anthropic"), I("custom")]),
        skillId: l(),
        version: l().optional()
      })
    ).optional()
  }).optional(),
  /**
   * @default 'high'
   */
  effort: ee(["low", "medium", "high"]).optional()
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
}, mg = X(
  () => U(
    p({
      maxCharacters: k().optional()
    })
  )
), hg = X(
  () => U(
    p({
      command: ee(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: N(k().int()).optional()
    })
  )
), gg = at({
  id: "anthropic.text_editor_20250728",
  name: "str_replace_based_edit_tool",
  inputSchema: hg
}), vg = (e = {}) => gg(e), yg = X(
  () => U(
    p({
      maxUses: k().optional(),
      allowedDomains: N(l()).optional(),
      blockedDomains: N(l()).optional(),
      userLocation: p({
        type: I("approximate"),
        city: l().optional(),
        region: l().optional(),
        country: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Ji = X(
  () => U(
    N(
      p({
        url: l(),
        title: l(),
        pageAge: l().nullable(),
        encryptedContent: l(),
        type: I("web_search_result")
      })
    )
  )
), _g = X(
  () => U(
    p({
      query: l()
    })
  )
), bg = ht({
  id: "anthropic.web_search_20250305",
  name: "web_search",
  inputSchema: _g,
  outputSchema: Ji
}), wg = (e = {}) => bg(e), xg = X(
  () => U(
    p({
      maxUses: k().optional(),
      allowedDomains: N(l()).optional(),
      blockedDomains: N(l()).optional(),
      citations: p({ enabled: J() }).optional(),
      maxContentTokens: k().optional()
    })
  )
), Hi = X(
  () => U(
    p({
      type: I("web_fetch_result"),
      url: l(),
      content: p({
        type: I("document"),
        title: l(),
        citations: p({ enabled: J() }).optional(),
        source: ie([
          p({
            type: I("base64"),
            mediaType: I("application/pdf"),
            data: l()
          }),
          p({
            type: I("text"),
            mediaType: I("text/plain"),
            data: l()
          })
        ])
      }),
      retrievedAt: l().nullable()
    })
  )
), Ig = X(
  () => U(
    p({
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
        const f = s.getCacheControl(c.providerOptions, {
          type: "tool definition",
          canCache: !0
        });
        i.push({
          name: c.name,
          description: c.description,
          input_schema: c.inputSchema,
          cache_control: f
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
            const f = await Ne({
              value: c.args,
              schema: mg
            });
            i.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250728",
              max_characters: f.maxCharacters,
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
            const f = await Ne({
              value: c.args,
              schema: xg
            });
            i.push({
              type: "web_fetch_20250910",
              name: "web_fetch",
              max_uses: f.maxUses,
              allowed_domains: f.allowedDomains,
              blocked_domains: f.blockedDomains,
              citations: f.citations,
              max_content_tokens: f.maxContentTokens,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.web_search_20250305": {
            const f = await Ne({
              value: c.args,
              schema: yg
            });
            i.push({
              type: "web_search_20250305",
              name: "web_search",
              max_uses: f.maxUses,
              allowed_domains: f.allowedDomains,
              blocked_domains: f.blockedDomains,
              user_location: f.userLocation,
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
var Wi = X(
  () => U(
    p({
      type: I("code_execution_result"),
      stdout: l(),
      stderr: l(),
      return_code: k()
    })
  )
), Eg = X(
  () => U(
    p({
      code: l()
    })
  )
), Cg = ht({
  id: "anthropic.code_execution_20250522",
  name: "code_execution",
  inputSchema: Eg,
  outputSchema: Wi
}), Mg = (e = {}) => Cg(e), Ki = X(
  () => U(
    me("type", [
      p({
        type: I("bash_code_execution_result"),
        content: N(
          p({
            type: I("bash_code_execution_output"),
            file_id: l()
          })
        ),
        stdout: l(),
        stderr: l(),
        return_code: k()
      }),
      p({
        type: I("bash_code_execution_tool_result_error"),
        error_code: l()
      }),
      p({
        type: I("text_editor_code_execution_tool_result_error"),
        error_code: l()
      }),
      p({
        type: I("text_editor_code_execution_view_result"),
        content: l(),
        file_type: l(),
        num_lines: k().nullable(),
        start_line: k().nullable(),
        total_lines: k().nullable()
      }),
      p({
        type: I("text_editor_code_execution_create_result"),
        is_file_update: J()
      }),
      p({
        type: I("text_editor_code_execution_str_replace_result"),
        lines: N(l()).nullable(),
        new_lines: k().nullable(),
        new_start: k().nullable(),
        old_lines: k().nullable(),
        old_start: k().nullable()
      })
    ])
  )
), Rg = X(
  () => U(
    me("type", [
      p({
        type: I("bash_code_execution"),
        command: l()
      }),
      me("command", [
        p({
          type: I("text_editor_code_execution"),
          command: I("view"),
          path: l()
        }),
        p({
          type: I("text_editor_code_execution"),
          command: I("create"),
          path: l(),
          file_text: l().nullish()
        }),
        p({
          type: I("text_editor_code_execution"),
          command: I("str_replace"),
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
  const c = /* @__PURE__ */ new Set(), f = Pg(e), m = r || new bo();
  let v;
  const d = [];
  async function g(w) {
    var h, b;
    const _ = await Ve({
      provider: "anthropic",
      providerOptions: w,
      schema: ya
    });
    return (b = (h = _ == null ? void 0 : _.citations) == null ? void 0 : h.enabled) != null ? b : !1;
  }
  async function y(w) {
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
  for (let w = 0; w < f.length; w++) {
    const h = f[w], b = w === f.length - 1, _ = h.type;
    switch (_) {
      case "system": {
        if (v != null)
          throw new ke({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        v = h.messages.map(({ content: x, providerOptions: C }) => ({
          type: "text",
          text: x,
          cache_control: m.getCacheControl(C, {
            type: "system message",
            canCache: !0
          })
        }));
        break;
      }
      case "user": {
        const x = [];
        for (const C of h.messages) {
          const { role: A, content: S } = C;
          switch (A) {
            case "user": {
              for (let M = 0; M < S.length; M++) {
                const R = S[M], E = M === S.length - 1, D = (o = m.getCacheControl(R.providerOptions, {
                  type: "user message part",
                  canCache: !0
                })) != null ? o : E ? m.getCacheControl(C.providerOptions, {
                  type: "user message",
                  canCache: !0
                }) : void 0;
                switch (R.type) {
                  case "text": {
                    x.push({
                      type: "text",
                      text: R.text,
                      cache_control: D
                    });
                    break;
                  }
                  case "file": {
                    if (R.mediaType.startsWith("image/"))
                      x.push({
                        type: "image",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "base64",
                          media_type: R.mediaType === "image/*" ? "image/jpeg" : R.mediaType,
                          data: ft(R.data)
                        },
                        cache_control: D
                      });
                    else if (R.mediaType === "application/pdf") {
                      c.add("pdfs-2024-09-25");
                      const Z = await g(
                        R.providerOptions
                      ), q = await y(
                        R.providerOptions
                      );
                      x.push({
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
                        ...Z && {
                          citations: { enabled: !0 }
                        },
                        cache_control: D
                      });
                    } else if (R.mediaType === "text/plain") {
                      const Z = await g(
                        R.providerOptions
                      ), q = await y(
                        R.providerOptions
                      );
                      x.push({
                        type: "document",
                        source: R.data instanceof URL ? {
                          type: "url",
                          url: R.data.toString()
                        } : {
                          type: "text",
                          media_type: "text/plain",
                          data: Ag(R.data)
                        },
                        title: (s = q.title) != null ? s : R.filename,
                        ...q.context && { context: q.context },
                        ...Z && {
                          citations: { enabled: !0 }
                        },
                        cache_control: D
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
              for (let M = 0; M < S.length; M++) {
                const R = S[M], E = M === S.length - 1, D = (i = m.getCacheControl(R.providerOptions, {
                  type: "tool result part",
                  canCache: !0
                })) != null ? i : E ? m.getCacheControl(C.providerOptions, {
                  type: "tool result message",
                  canCache: !0
                }) : void 0, Z = R.output;
                let q;
                switch (Z.type) {
                  case "content":
                    q = Z.value.map((z) => {
                      switch (z.type) {
                        case "text":
                          return {
                            type: "text",
                            text: z.text
                          };
                        case "media": {
                          if (z.mediaType.startsWith("image/"))
                            return {
                              type: "image",
                              source: {
                                type: "base64",
                                media_type: z.mediaType,
                                data: z.data
                              }
                            };
                          if (z.mediaType === "application/pdf")
                            return c.add("pdfs-2024-09-25"), {
                              type: "document",
                              source: {
                                type: "base64",
                                media_type: z.mediaType,
                                data: z.data
                              }
                            };
                          throw new ke({
                            functionality: `media type: ${z.mediaType}`
                          });
                        }
                      }
                    });
                    break;
                  case "text":
                  case "error-text":
                    q = Z.value;
                    break;
                  case "json":
                  case "error-json":
                  default:
                    q = JSON.stringify(Z.value);
                    break;
                }
                x.push({
                  type: "tool_result",
                  tool_use_id: R.toolCallId,
                  content: q,
                  is_error: Z.type === "error-text" || Z.type === "error-json" ? !0 : void 0,
                  cache_control: D
                });
              }
              break;
            }
            default: {
              const M = A;
              throw new Error(`Unsupported role: ${M}`);
            }
          }
        }
        d.push({ role: "user", content: x });
        break;
      }
      case "assistant": {
        const x = [];
        for (let C = 0; C < h.messages.length; C++) {
          const A = h.messages[C], S = C === h.messages.length - 1, { content: M } = A;
          for (let R = 0; R < M.length; R++) {
            const E = M[R], D = R === M.length - 1, Z = (u = m.getCacheControl(E.providerOptions, {
              type: "assistant message part",
              canCache: !0
            })) != null ? u : D ? m.getCacheControl(A.providerOptions, {
              type: "assistant message",
              canCache: !0
            }) : void 0;
            switch (E.type) {
              case "text": {
                x.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    b && S && D ? E.text.trim() : E.text
                  ),
                  cache_control: Z
                });
                break;
              }
              case "reasoning": {
                if (t) {
                  const q = await Ve({
                    provider: "anthropic",
                    providerOptions: E.providerOptions,
                    schema: dg
                  });
                  q != null ? q.signature != null ? (m.getCacheControl(E.providerOptions, {
                    type: "thinking block",
                    canCache: !1
                  }), x.push({
                    type: "thinking",
                    thinking: E.text,
                    signature: q.signature
                  })) : q.redactedData != null ? (m.getCacheControl(E.providerOptions, {
                    type: "redacted thinking block",
                    canCache: !1
                  }), x.push({
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
                if (E.providerExecuted) {
                  E.toolName === "code_execution" && E.input != null && typeof E.input == "object" && "type" in E.input && typeof E.input.type == "string" && (E.input.type === "bash_code_execution" || E.input.type === "text_editor_code_execution") ? x.push({
                    type: "server_tool_use",
                    id: E.toolCallId,
                    name: E.input.type,
                    // map back to subtool name
                    input: E.input,
                    cache_control: Z
                  }) : E.toolName === "code_execution" || // code execution 20250522
                  E.toolName === "web_fetch" || E.toolName === "web_search" ? x.push({
                    type: "server_tool_use",
                    id: E.toolCallId,
                    name: E.toolName,
                    input: E.input,
                    cache_control: Z
                  }) : n.push({
                    type: "other",
                    message: `provider executed tool call for tool ${E.toolName} is not supported`
                  });
                  break;
                }
                x.push({
                  type: "tool_use",
                  id: E.toolCallId,
                  name: E.toolName,
                  input: E.input,
                  cache_control: Z
                });
                break;
              }
              case "tool-result": {
                if (E.toolName === "code_execution") {
                  const q = E.output;
                  if (q.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${q.type} for tool ${E.toolName} is not supported`
                    });
                    break;
                  }
                  if (q.value == null || typeof q.value != "object" || !("type" in q.value) || typeof q.value.type != "string") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output value is not a valid code execution result for tool ${E.toolName}`
                    });
                    break;
                  }
                  if (q.value.type === "code_execution_result") {
                    const z = await Ne({
                      value: q.value,
                      schema: Wi
                    });
                    x.push({
                      type: "code_execution_tool_result",
                      tool_use_id: E.toolCallId,
                      content: {
                        type: z.type,
                        stdout: z.stdout,
                        stderr: z.stderr,
                        return_code: z.return_code
                      },
                      cache_control: Z
                    });
                  } else {
                    const z = await Ne({
                      value: q.value,
                      schema: Ki
                    });
                    x.push(
                      z.type === "bash_code_execution_result" || z.type === "bash_code_execution_tool_result_error" ? {
                        type: "bash_code_execution_tool_result",
                        tool_use_id: E.toolCallId,
                        cache_control: Z,
                        content: z
                      } : {
                        type: "text_editor_code_execution_tool_result",
                        tool_use_id: E.toolCallId,
                        cache_control: Z,
                        content: z
                      }
                    );
                  }
                  break;
                }
                if (E.toolName === "web_fetch") {
                  const q = E.output;
                  if (q.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${q.type} for tool ${E.toolName} is not supported`
                    });
                    break;
                  }
                  const z = await Ne({
                    value: q.value,
                    schema: Hi
                  });
                  x.push({
                    type: "web_fetch_tool_result",
                    tool_use_id: E.toolCallId,
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
                    cache_control: Z
                  });
                  break;
                }
                if (E.toolName === "web_search") {
                  const q = E.output;
                  if (q.type !== "json") {
                    n.push({
                      type: "other",
                      message: `provider executed tool result output type ${q.type} for tool ${E.toolName} is not supported`
                    });
                    break;
                  }
                  const z = await Ne({
                    value: q.value,
                    schema: Ji
                  });
                  x.push({
                    type: "web_search_tool_result",
                    tool_use_id: E.toolCallId,
                    content: z.map((te) => ({
                      url: te.url,
                      title: te.title,
                      page_age: te.pageAge,
                      encrypted_content: te.encryptedContent,
                      type: te.type
                    })),
                    cache_control: Z
                  });
                  break;
                }
                n.push({
                  type: "other",
                  message: `provider executed tool result for tool ${E.toolName} is not supported`
                });
                break;
              }
            }
          }
        }
        d.push({ role: "assistant", content: x });
        break;
      }
      default: {
        const x = _;
        throw new Error(`content type: ${x}`);
      }
    }
  }
  return {
    prompt: { system: v, messages: d },
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
    this.modelId = e, this.config = t, this.generateId = (n = t.generateId) != null ? n : De;
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
    seed: f,
    tools: m,
    toolChoice: v,
    providerOptions: d
  }) {
    var g, y, w, h, b;
    const _ = [];
    s != null && _.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), i != null && _.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), f != null && _.push({
      type: "unsupported-setting",
      setting: "seed"
    }), r != null && r > 1 ? (_.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: `${r} exceeds anthropic maximum of 1.0. clamped to 1.0`
    }), r = 1) : r != null && r < 0 && (_.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: `${r} is below anthropic minimum of 0. clamped to 0`
    }), r = 0), (c == null ? void 0 : c.type) === "json" && (c.schema == null ? _.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format requires a schema. The response format is ignored."
    }) : m != null && _.push({
      type: "unsupported-setting",
      setting: "tools",
      details: "JSON response format does not support tools. The provided tools are ignored."
    }));
    const x = await Ve({
      provider: "anthropic",
      providerOptions: d,
      schema: pg
    }), {
      maxOutputTokens: C,
      supportsStructuredOutput: A,
      isKnownModel: S
    } = qg(this.modelId), M = (g = x == null ? void 0 : x.structuredOutputMode) != null ? g : "jsonTool", R = M === "outputFormat" || M === "auto" && A, E = (c == null ? void 0 : c.type) === "json" && c.schema != null && !R ? {
      type: "function",
      name: "json",
      description: "Respond with a JSON object.",
      inputSchema: c.schema
    } : void 0, D = new bo(), { prompt: Z, betas: q } = await $g({
      prompt: t,
      sendReasoning: (y = x == null ? void 0 : x.sendReasoning) != null ? y : !0,
      warnings: _,
      cacheControlValidator: D
    }), z = ((w = x == null ? void 0 : x.thinking) == null ? void 0 : w.type) === "enabled", te = (h = x == null ? void 0 : x.thinking) == null ? void 0 : h.budgetTokens, oe = n ?? C, F = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: oe,
      temperature: r,
      top_k: a,
      top_p: o,
      stop_sequences: u,
      // provider specific settings:
      ...z && {
        thinking: { type: "enabled", budget_tokens: te }
      },
      ...(x == null ? void 0 : x.effort) && {
        output_config: { effort: x.effort }
      },
      // structured output:
      ...R && (c == null ? void 0 : c.type) === "json" && c.schema != null && {
        output_format: {
          type: "json_schema",
          schema: c.schema
        }
      },
      // container with agent skills:
      ...(x == null ? void 0 : x.container) && {
        container: {
          id: x.container.id,
          skills: (b = x.container.skills) == null ? void 0 : b.map(($) => ({
            type: $.type,
            skill_id: $.skillId,
            version: $.version
          }))
        }
      },
      // prompt:
      system: Z.system,
      messages: Z.messages
    };
    if (z) {
      if (te == null)
        throw new ke({
          functionality: "thinking requires a budget"
        });
      F.temperature != null && (F.temperature = void 0, _.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), a != null && (F.top_k = void 0, _.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), o != null && (F.top_p = void 0, _.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), F.max_tokens = oe + te;
    }
    S && F.max_tokens > C && (n != null && _.push({
      type: "unsupported-setting",
      setting: "maxOutputTokens",
      details: `${F.max_tokens} (maxOutputTokens + thinkingBudget) is greater than ${this.modelId} ${C} max output tokens. The max output tokens have been limited to ${C}.`
    }), F.max_tokens = C), x != null && x.container && x.container.skills && x.container.skills.length > 0 && (q.add("code-execution-2025-08-25"), q.add("skills-2025-10-02"), q.add("files-api-2025-04-14"), m != null && m.some(
      ($) => $.type === "provider-defined" && $.id === "anthropic.code_execution_20250825"
    ) || _.push({
      type: "other",
      message: "code execution tool is required when using skills"
    })), x != null && x.effort && q.add("effort-2025-11-24"), R && q.add("structured-outputs-2025-11-13");
    const {
      tools: pe,
      toolChoice: le,
      toolWarnings: ae,
      betas: P
    } = await Sg(
      E != null ? {
        tools: [E],
        toolChoice: { type: "tool", toolName: E.name },
        disableParallelToolUse: !0,
        cacheControlValidator: D
      } : {
        tools: m ?? [],
        toolChoice: v,
        disableParallelToolUse: x == null ? void 0 : x.disableParallelToolUse,
        cacheControlValidator: D
      }
    ), j = D.getWarnings();
    return {
      args: {
        ...F,
        tools: pe,
        tool_choice: le
      },
      warnings: [..._, ...ae, ...j],
      betas: /* @__PURE__ */ new Set([...q, ...P, ...e]),
      usesJsonResponseTool: E != null
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
    const { args: c, warnings: f, betas: m, usesJsonResponseTool: v } = await this.getArgs({
      ...e,
      userSuppliedBetas: await this.getBetasFromHeaders(e.headers)
    }), d = this.extractCitationDocuments(e.prompt), {
      responseHeaders: g,
      value: y,
      rawValue: w
    } = await Ce({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: m, headers: e.headers }),
      body: this.transformRequestBody(c),
      failedResponseHandler: va,
      successfulResponseHandler: Le(
        ug
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), h = [];
    for (const b of y.content)
      switch (b.type) {
        case "text": {
          if (!v && (h.push({ type: "text", text: b.text }), b.citations))
            for (const _ of b.citations) {
              const x = wa(
                _,
                d,
                this.generateId
              );
              x && h.push(x);
            }
          break;
        }
        case "thinking": {
          h.push({
            type: "reasoning",
            text: b.thinking,
            providerMetadata: {
              anthropic: {
                signature: b.signature
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
                redactedData: b.data
              }
            }
          });
          break;
        }
        case "tool_use": {
          h.push(
            // when a json response tool is used, the tool call becomes the text:
            v ? {
              type: "text",
              text: JSON.stringify(b.input)
            } : {
              type: "tool-call",
              toolCallId: b.id,
              toolName: b.name,
              input: JSON.stringify(b.input)
            }
          );
          break;
        }
        case "server_tool_use": {
          b.name === "text_editor_code_execution" || b.name === "bash_code_execution" ? h.push({
            type: "tool-call",
            toolCallId: b.id,
            toolName: "code_execution",
            input: JSON.stringify({ type: b.name, ...b.input }),
            providerExecuted: !0
          }) : (b.name === "web_search" || b.name === "code_execution" || b.name === "web_fetch") && h.push({
            type: "tool-call",
            toolCallId: b.id,
            toolName: b.name,
            input: JSON.stringify(b.input),
            providerExecuted: !0
          });
          break;
        }
        case "web_fetch_tool_result": {
          b.content.type === "web_fetch_result" ? h.push({
            type: "tool-result",
            toolCallId: b.tool_use_id,
            toolName: "web_fetch",
            result: {
              type: "web_fetch_result",
              url: b.content.url,
              retrievedAt: b.content.retrieved_at,
              content: {
                type: b.content.content.type,
                title: b.content.content.title,
                citations: b.content.content.citations,
                source: {
                  type: b.content.content.source.type,
                  mediaType: b.content.content.source.media_type,
                  data: b.content.content.source.data
                }
              }
            },
            providerExecuted: !0
          }) : b.content.type === "web_fetch_tool_result_error" && h.push({
            type: "tool-result",
            toolCallId: b.tool_use_id,
            toolName: "web_fetch",
            isError: !0,
            result: {
              type: "web_fetch_tool_result_error",
              errorCode: b.content.error_code
            },
            providerExecuted: !0
          });
          break;
        }
        case "web_search_tool_result": {
          if (Array.isArray(b.content)) {
            h.push({
              type: "tool-result",
              toolCallId: b.tool_use_id,
              toolName: "web_search",
              result: b.content.map((_) => {
                var x;
                return {
                  url: _.url,
                  title: _.title,
                  pageAge: (x = _.page_age) != null ? x : null,
                  encryptedContent: _.encrypted_content,
                  type: _.type
                };
              }),
              providerExecuted: !0
            });
            for (const _ of b.content)
              h.push({
                type: "source",
                sourceType: "url",
                id: this.generateId(),
                url: _.url,
                title: _.title,
                providerMetadata: {
                  anthropic: {
                    pageAge: (t = _.page_age) != null ? t : null
                  }
                }
              });
          } else
            h.push({
              type: "tool-result",
              toolCallId: b.tool_use_id,
              toolName: "web_search",
              isError: !0,
              result: {
                type: "web_search_tool_result_error",
                errorCode: b.content.error_code
              },
              providerExecuted: !0
            });
          break;
        }
        // code execution 20250522:
        case "code_execution_tool_result": {
          b.content.type === "code_execution_result" ? h.push({
            type: "tool-result",
            toolCallId: b.tool_use_id,
            toolName: "code_execution",
            result: {
              type: b.content.type,
              stdout: b.content.stdout,
              stderr: b.content.stderr,
              return_code: b.content.return_code
            },
            providerExecuted: !0
          }) : b.content.type === "code_execution_tool_result_error" && h.push({
            type: "tool-result",
            toolCallId: b.tool_use_id,
            toolName: "code_execution",
            isError: !0,
            result: {
              type: "code_execution_tool_result_error",
              errorCode: b.content.error_code
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
            toolCallId: b.tool_use_id,
            toolName: "code_execution",
            result: b.content,
            providerExecuted: !0
          });
          break;
        }
      }
    return {
      content: h,
      finishReason: ba({
        finishReason: y.stop_reason,
        isJsonResponseFromTool: v
      }),
      usage: {
        inputTokens: y.usage.input_tokens,
        outputTokens: y.usage.output_tokens,
        totalTokens: y.usage.input_tokens + y.usage.output_tokens,
        cachedInputTokens: (n = y.usage.cache_read_input_tokens) != null ? n : void 0
      },
      request: { body: c },
      response: {
        id: (r = y.id) != null ? r : void 0,
        modelId: (o = y.model) != null ? o : void 0,
        headers: g,
        body: w
      },
      warnings: f,
      providerMetadata: {
        anthropic: {
          usage: y.usage,
          cacheCreationInputTokens: (a = y.usage.cache_creation_input_tokens) != null ? a : null,
          stopSequence: (s = y.stop_sequence) != null ? s : null,
          container: y.container ? {
            expiresAt: y.container.expires_at,
            id: y.container.id,
            skills: (u = (i = y.container.skills) == null ? void 0 : i.map((b) => ({
              type: b.type,
              skillId: b.skill_id,
              version: b.version
            }))) != null ? u : null
          } : null
        }
      }
    };
  }
  async doStream(e) {
    var t, n;
    const { args: r, warnings: o, betas: a, usesJsonResponseTool: s } = await this.getArgs({
      ...e,
      userSuppliedBetas: await this.getBetasFromHeaders(e.headers)
    }), i = this.extractCitationDocuments(e.prompt), u = { ...r, stream: !0 }, c = this.buildRequestUrl(!0), { responseHeaders: f, value: m } = await Ce({
      url: c,
      headers: await this.getHeaders({ betas: a, headers: e.headers }),
      body: this.transformRequestBody(u),
      failedResponseHandler: va,
      successfulResponseHandler: Gt(
        cg
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let v = "unknown";
    const d = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, g = {};
    let y, w = null, h = null, b = null, _;
    const x = this.generateId, C = m.pipeThrough(
      new TransformStream({
        start(R) {
          R.enqueue({ type: "stream-start", warnings: o });
        },
        transform(R, E) {
          var D, Z, q, z, te, oe, F, pe, le, ae;
          if (e.includeRawChunks && E.enqueue({ type: "raw", rawValue: R.rawValue }), !R.success) {
            E.enqueue({ type: "error", error: R.error });
            return;
          }
          const P = R.value;
          switch (P.type) {
            case "ping":
              return;
            case "content_block_start": {
              const j = P.content_block.type;
              switch (_ = j, j) {
                case "text": {
                  g[P.index] = { type: "text" }, E.enqueue({
                    type: "text-start",
                    id: String(P.index)
                  });
                  return;
                }
                case "thinking": {
                  g[P.index] = { type: "reasoning" }, E.enqueue({
                    type: "reasoning-start",
                    id: String(P.index)
                  });
                  return;
                }
                case "redacted_thinking": {
                  g[P.index] = { type: "reasoning" }, E.enqueue({
                    type: "reasoning-start",
                    id: String(P.index),
                    providerMetadata: {
                      anthropic: {
                        redactedData: P.content_block.data
                      }
                    }
                  });
                  return;
                }
                case "tool_use": {
                  g[P.index] = s ? { type: "text" } : {
                    type: "tool-call",
                    toolCallId: P.content_block.id,
                    toolName: P.content_block.name,
                    input: "",
                    firstDelta: !0
                  }, E.enqueue(
                    s ? { type: "text-start", id: String(P.index) } : {
                      type: "tool-input-start",
                      id: P.content_block.id,
                      toolName: P.content_block.name
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
                  ].includes(P.content_block.name)) {
                    g[P.index] = {
                      type: "tool-call",
                      toolCallId: P.content_block.id,
                      toolName: P.content_block.name,
                      input: "",
                      providerExecuted: !0,
                      firstDelta: !0
                    };
                    const $ = P.content_block.name === "text_editor_code_execution" || P.content_block.name === "bash_code_execution" ? "code_execution" : P.content_block.name;
                    E.enqueue({
                      type: "tool-input-start",
                      id: P.content_block.id,
                      toolName: $,
                      providerExecuted: !0
                    });
                  }
                  return;
                }
                case "web_fetch_tool_result": {
                  const $ = P.content_block;
                  $.content.type === "web_fetch_result" ? E.enqueue({
                    type: "tool-result",
                    toolCallId: $.tool_use_id,
                    toolName: "web_fetch",
                    result: {
                      type: "web_fetch_result",
                      url: $.content.url,
                      retrievedAt: $.content.retrieved_at,
                      content: {
                        type: $.content.content.type,
                        title: $.content.content.title,
                        citations: $.content.content.citations,
                        source: {
                          type: $.content.content.source.type,
                          mediaType: $.content.content.source.media_type,
                          data: $.content.content.source.data
                        }
                      }
                    },
                    providerExecuted: !0
                  }) : $.content.type === "web_fetch_tool_result_error" && E.enqueue({
                    type: "tool-result",
                    toolCallId: $.tool_use_id,
                    toolName: "web_fetch",
                    isError: !0,
                    result: {
                      type: "web_fetch_tool_result_error",
                      errorCode: $.content.error_code
                    },
                    providerExecuted: !0
                  });
                  return;
                }
                case "web_search_tool_result": {
                  const $ = P.content_block;
                  if (Array.isArray($.content)) {
                    E.enqueue({
                      type: "tool-result",
                      toolCallId: $.tool_use_id,
                      toolName: "web_search",
                      result: $.content.map((K) => {
                        var Q;
                        return {
                          url: K.url,
                          title: K.title,
                          pageAge: (Q = K.page_age) != null ? Q : null,
                          encryptedContent: K.encrypted_content,
                          type: K.type
                        };
                      }),
                      providerExecuted: !0
                    });
                    for (const K of $.content)
                      E.enqueue({
                        type: "source",
                        sourceType: "url",
                        id: x(),
                        url: K.url,
                        title: K.title,
                        providerMetadata: {
                          anthropic: {
                            pageAge: (D = K.page_age) != null ? D : null
                          }
                        }
                      });
                  } else
                    E.enqueue({
                      type: "tool-result",
                      toolCallId: $.tool_use_id,
                      toolName: "web_search",
                      isError: !0,
                      result: {
                        type: "web_search_tool_result_error",
                        errorCode: $.content.error_code
                      },
                      providerExecuted: !0
                    });
                  return;
                }
                // code execution 20250522:
                case "code_execution_tool_result": {
                  const $ = P.content_block;
                  $.content.type === "code_execution_result" ? E.enqueue({
                    type: "tool-result",
                    toolCallId: $.tool_use_id,
                    toolName: "code_execution",
                    result: {
                      type: $.content.type,
                      stdout: $.content.stdout,
                      stderr: $.content.stderr,
                      return_code: $.content.return_code
                    },
                    providerExecuted: !0
                  }) : $.content.type === "code_execution_tool_result_error" && E.enqueue({
                    type: "tool-result",
                    toolCallId: $.tool_use_id,
                    toolName: "code_execution",
                    isError: !0,
                    result: {
                      type: "code_execution_tool_result_error",
                      errorCode: $.content.error_code
                    },
                    providerExecuted: !0
                  });
                  return;
                }
                // code execution 20250825:
                case "bash_code_execution_tool_result":
                case "text_editor_code_execution_tool_result": {
                  const $ = P.content_block;
                  E.enqueue({
                    type: "tool-result",
                    toolCallId: $.tool_use_id,
                    toolName: "code_execution",
                    result: $.content,
                    providerExecuted: !0
                  });
                  return;
                }
                default: {
                  const $ = j;
                  throw new Error(
                    `Unsupported content block type: ${$}`
                  );
                }
              }
            }
            case "content_block_stop": {
              if (g[P.index] != null) {
                const j = g[P.index];
                switch (j.type) {
                  case "text": {
                    E.enqueue({
                      type: "text-end",
                      id: String(P.index)
                    });
                    break;
                  }
                  case "reasoning": {
                    E.enqueue({
                      type: "reasoning-end",
                      id: String(P.index)
                    });
                    break;
                  }
                  case "tool-call":
                    if (!s) {
                      E.enqueue({
                        type: "tool-input-end",
                        id: j.toolCallId
                      });
                      const $ = j.toolName === "text_editor_code_execution" || j.toolName === "bash_code_execution" ? "code_execution" : j.toolName;
                      E.enqueue({
                        type: "tool-call",
                        toolCallId: j.toolCallId,
                        toolName: $,
                        input: j.input === "" ? "{}" : j.input,
                        providerExecuted: j.providerExecuted
                      });
                    }
                    break;
                }
                delete g[P.index];
              }
              _ = void 0;
              return;
            }
            case "content_block_delta": {
              const j = P.delta.type;
              switch (j) {
                case "text_delta": {
                  if (s)
                    return;
                  E.enqueue({
                    type: "text-delta",
                    id: String(P.index),
                    delta: P.delta.text
                  });
                  return;
                }
                case "thinking_delta": {
                  E.enqueue({
                    type: "reasoning-delta",
                    id: String(P.index),
                    delta: P.delta.thinking
                  });
                  return;
                }
                case "signature_delta": {
                  _ === "thinking" && E.enqueue({
                    type: "reasoning-delta",
                    id: String(P.index),
                    delta: "",
                    providerMetadata: {
                      anthropic: {
                        signature: P.delta.signature
                      }
                    }
                  });
                  return;
                }
                case "input_json_delta": {
                  const $ = g[P.index];
                  let K = P.delta.partial_json;
                  if (K.length === 0)
                    return;
                  if (s) {
                    if (($ == null ? void 0 : $.type) !== "text")
                      return;
                    E.enqueue({
                      type: "text-delta",
                      id: String(P.index),
                      delta: K
                    });
                  } else {
                    if (($ == null ? void 0 : $.type) !== "tool-call")
                      return;
                    $.firstDelta && ($.toolName === "bash_code_execution" || $.toolName === "text_editor_code_execution") && (K = `{"type": "${$.toolName}",${K.substring(1)}`), E.enqueue({
                      type: "tool-input-delta",
                      id: $.toolCallId,
                      delta: K
                    }), $.input += K, $.firstDelta = !1;
                  }
                  return;
                }
                case "citations_delta": {
                  const $ = P.delta.citation, K = wa(
                    $,
                    i,
                    x
                  );
                  K && E.enqueue(K);
                  return;
                }
                default: {
                  const $ = j;
                  throw new Error(
                    `Unsupported delta type: ${$}`
                  );
                }
              }
            }
            case "message_start": {
              d.inputTokens = P.message.usage.input_tokens, d.cachedInputTokens = (Z = P.message.usage.cache_read_input_tokens) != null ? Z : void 0, y = {
                ...P.message.usage
              }, w = (q = P.message.usage.cache_creation_input_tokens) != null ? q : null, E.enqueue({
                type: "response-metadata",
                id: (z = P.message.id) != null ? z : void 0,
                modelId: (te = P.message.model) != null ? te : void 0
              });
              return;
            }
            case "message_delta": {
              d.outputTokens = P.usage.output_tokens, d.totalTokens = ((oe = d.inputTokens) != null ? oe : 0) + ((F = P.usage.output_tokens) != null ? F : 0), v = ba({
                finishReason: P.delta.stop_reason,
                isJsonResponseFromTool: s
              }), h = (pe = P.delta.stop_sequence) != null ? pe : null, b = P.delta.container != null ? {
                expiresAt: P.delta.container.expires_at,
                id: P.delta.container.id,
                skills: (ae = (le = P.delta.container.skills) == null ? void 0 : le.map((j) => ({
                  type: j.type,
                  skillId: j.skill_id,
                  version: j.version
                }))) != null ? ae : null
              } : null, y = {
                ...y,
                ...P.usage
              };
              return;
            }
            case "message_stop": {
              E.enqueue({
                type: "finish",
                finishReason: v,
                usage: d,
                providerMetadata: {
                  anthropic: {
                    usage: y ?? null,
                    cacheCreationInputTokens: w,
                    stopSequence: h,
                    container: b
                  }
                }
              });
              return;
            }
            case "error": {
              E.enqueue({ type: "error", error: P.error });
              return;
            }
            default: {
              const j = P;
              throw new Error(`Unsupported chunk type: ${j}`);
            }
          }
        }
      })
    ), [A, S] = C.tee(), M = A.getReader();
    try {
      await M.read();
      let R = await M.read();
      if (((t = R.value) == null ? void 0 : t.type) === "raw" && (R = await M.read()), ((n = R.value) == null ? void 0 : n.type) === "error") {
        const E = R.value.error;
        throw new ze({
          message: E.message,
          url: c,
          requestBodyValues: u,
          statusCode: E.type === "overloaded_error" ? 529 : 500,
          responseHeaders: f,
          responseBody: JSON.stringify(E),
          isRetryable: E.type === "overloaded_error"
        });
      }
    } finally {
      M.cancel().catch(() => {
      }), M.releaseLock();
    }
    return {
      stream: S,
      request: { body: u },
      response: { headers: f }
    };
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
var Dg = X(
  () => U(
    p({
      command: l(),
      restart: J().optional()
    })
  )
), zg = at({
  id: "anthropic.bash_20241022",
  name: "bash",
  inputSchema: Dg
}), Ug = X(
  () => U(
    p({
      command: l(),
      restart: J().optional()
    })
  )
), Zg = at({
  id: "anthropic.bash_20250124",
  name: "bash",
  inputSchema: Ug
}), Lg = X(
  () => U(
    p({
      action: ee([
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
      coordinate: N(k().int()).optional(),
      text: l().optional()
    })
  )
), Fg = at({
  id: "anthropic.computer_20241022",
  name: "computer",
  inputSchema: Lg
}), Vg = X(
  () => U(
    p({
      action: ee([
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
      scroll_direction: ee(["up", "down", "left", "right"]).optional(),
      start_coordinate: Wr([k().int(), k().int()]).optional(),
      text: l().optional()
    })
  )
), Gg = at({
  id: "anthropic.computer_20250124",
  name: "computer",
  inputSchema: Vg
}), Bg = X(
  () => U(
    me("command", [
      p({
        command: I("view"),
        path: l(),
        view_range: Wr([k(), k()]).optional()
      }),
      p({
        command: I("create"),
        path: l(),
        file_text: l()
      }),
      p({
        command: I("str_replace"),
        path: l(),
        old_str: l(),
        new_str: l()
      }),
      p({
        command: I("insert"),
        path: l(),
        insert_line: k(),
        insert_text: l()
      }),
      p({
        command: I("delete"),
        path: l()
      }),
      p({
        command: I("rename"),
        old_path: l(),
        new_path: l()
      })
    ])
  )
), Jg = at({
  id: "anthropic.memory_20250818",
  name: "memory",
  inputSchema: Bg
}), Hg = X(
  () => U(
    p({
      command: ee(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: N(k().int()).optional()
    })
  )
), Wg = at({
  id: "anthropic.text_editor_20241022",
  name: "str_replace_editor",
  inputSchema: Hg
}), Kg = X(
  () => U(
    p({
      command: ee(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: N(k().int()).optional()
    })
  )
), Yg = at({
  id: "anthropic.text_editor_20250124",
  name: "str_replace_editor",
  inputSchema: Kg
}), Xg = X(
  () => U(
    p({
      command: ee(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: k().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: N(k().int()).optional()
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
  )) != null ? t : "https://api.anthropic.com/v1", o = (n = e.name) != null ? n : "anthropic.messages", a = () => Ze(
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
      generateId: (c = e.generateId) != null ? c : De,
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
var nv = "2.0.44", rv = X(
  () => U(
    p({
      error: p({
        code: k().nullable(),
        message: l(),
        status: l()
      })
    })
  )
), Sn = bt({
  errorSchema: rv,
  errorToMessage: (e) => e.error.message
}), ov = X(
  () => U(
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
      taskType: ee([
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
        value: f,
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
        successfulResponseHandler: Le(
          iv
        ),
        abortSignal: n,
        fetch: this.config.fetch
      });
      return {
        embeddings: [f.embedding.values],
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
      successfulResponseHandler: Le(
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
}, sv = X(
  () => U(
    p({
      embeddings: N(p({ values: N(k()) }))
    })
  )
), iv = X(
  () => U(
    p({
      embedding: p({ values: N(k()) })
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
    const: f,
    minLength: m,
    enum: v
  } = e, d = {};
  if (n && (d.description = n), r && (d.required = r), c && (d.format = c), f !== void 0 && (d.enum = [f]), t)
    if (Array.isArray(t)) {
      const g = t.includes("null"), y = t.filter((w) => w !== "null");
      y.length === 0 ? d.type = "null" : (d.anyOf = y.map((w) => ({ type: w })), g && (d.nullable = !0));
    } else
      d.type = t;
  if (v !== void 0 && (d.enum = v), o != null && (d.properties = Object.entries(o).reduce(
    (g, [y, w]) => (g[y] = _t(w), g),
    {}
  )), a && (d.items = Array.isArray(a) ? a.map(_t) : _t(a)), s && (d.allOf = s.map(_t)), i)
    if (i.some(
      (g) => typeof g == "object" && (g == null ? void 0 : g.type) === "null"
    )) {
      const g = i.filter(
        (y) => !(typeof y == "object" && (y == null ? void 0 : y.type) === "null")
      );
      if (g.length === 1) {
        const y = _t(g[0]);
        typeof y == "object" && (d.nullable = !0, Object.assign(d, y));
      } else
        d.anyOf = g.map(_t), d.nullable = !0;
    } else
      d.anyOf = i.map(_t);
  return u && (d.oneOf = u.map(_t)), m !== void 0 && (d.minLength = m), d;
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
        for (const f of u)
          switch (f.type) {
            case "text": {
              c.push({ text: f.text });
              break;
            }
            case "file": {
              const m = f.mediaType === "image/*" ? "image/jpeg" : f.mediaType;
              c.push(
                f.data instanceof URL ? {
                  fileData: {
                    mimeType: m,
                    fileUri: f.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: m,
                    data: ft(f.data)
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
            var f, m, v;
            const d = ((m = (f = c.providerOptions) == null ? void 0 : f.google) == null ? void 0 : m.thoughtSignature) != null ? String((v = c.providerOptions.google) == null ? void 0 : v.thoughtSignature) : void 0;
            switch (c.type) {
              case "text":
                return c.text.length === 0 ? void 0 : {
                  text: c.text,
                  thoughtSignature: d
                };
              case "reasoning":
                return c.text.length === 0 ? void 0 : {
                  text: c.text,
                  thought: !0,
                  thoughtSignature: d
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
                  thoughtSignature: d
                };
            }
          }).filter((c) => c !== void 0)
        });
        break;
      }
      case "tool": {
        a = !1;
        const c = [];
        for (const f of u) {
          const m = f.output;
          if (m.type === "content")
            for (const v of m.value)
              switch (v.type) {
                case "text":
                  c.push({
                    functionResponse: {
                      name: f.toolName,
                      response: {
                        name: f.toolName,
                        content: v.text
                      }
                    }
                  });
                  break;
                case "media":
                  c.push(
                    {
                      inlineData: {
                        mimeType: v.mediaType,
                        data: v.data
                      }
                    },
                    {
                      text: "Tool executed successfully and returned this image as a response"
                    }
                  );
                  break;
                default:
                  c.push({ text: JSON.stringify(v) });
                  break;
              }
          else
            c.push({
              functionResponse: {
                name: f.toolName,
                response: {
                  name: f.toolName,
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
var cv = X(
  () => U(
    p({
      responseModalities: N(ee(["TEXT", "IMAGE"])).optional(),
      thinkingConfig: p({
        thinkingBudget: k().optional(),
        includeThoughts: J().optional(),
        // https://ai.google.dev/gemini-api/docs/gemini-3?thinking=high#thinking_level
        thinkingLevel: ee(["low", "medium", "high"]).optional()
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
      safetySettings: N(
        p({
          category: ee([
            "HARM_CATEGORY_UNSPECIFIED",
            "HARM_CATEGORY_HATE_SPEECH",
            "HARM_CATEGORY_DANGEROUS_CONTENT",
            "HARM_CATEGORY_HARASSMENT",
            "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "HARM_CATEGORY_CIVIC_INTEGRITY"
          ]),
          threshold: ee([
            "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
            "BLOCK_LOW_AND_ABOVE",
            "BLOCK_MEDIUM_AND_ABOVE",
            "BLOCK_ONLY_HIGH",
            "BLOCK_NONE",
            "OFF"
          ])
        })
      ).optional(),
      threshold: ee([
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
      mediaResolution: ee([
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
        aspectRatio: ee([
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
        imageSize: ee(["1K", "2K", "4K"]).optional()
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
  ].some((d) => d === n), s = n.includes("gemini-2") || n.includes("gemini-3") || a, i = n.includes("gemini-1.5-flash") && !n.includes("-8b"), u = n.includes("gemini-2.5");
  if (e == null)
    return { tools: void 0, toolConfig: void 0, toolWarnings: o };
  const c = e.some((d) => d.type === "function"), f = e.some(
    (d) => d.type === "provider-defined"
  );
  if (c && f) {
    const d = e.filter((g) => g.type === "function");
    o.push({
      type: "unsupported-tool",
      tool: e.find((g) => g.type === "function"),
      details: `Cannot mix function tools with provider-defined tools in the same request. Falling back to provider-defined tools only. The following function tools will be ignored: ${d.map((g) => g.name).join(", ")}. Please use either function tools or provider-defined tools, but not both.`
    });
  }
  if (f) {
    const d = [];
    return e.filter(
      (y) => y.type === "provider-defined"
    ).forEach((y) => {
      switch (y.id) {
        case "google.google_search":
          s ? d.push({ googleSearch: {} }) : i ? d.push({
            googleSearchRetrieval: {
              dynamicRetrievalConfig: {
                mode: y.args.mode,
                dynamicThreshold: y.args.dynamicThreshold
              }
            }
          }) : d.push({ googleSearchRetrieval: {} });
          break;
        case "google.url_context":
          s ? d.push({ urlContext: {} }) : o.push({
            type: "unsupported-tool",
            tool: y,
            details: "The URL context tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.code_execution":
          s ? d.push({ codeExecution: {} }) : o.push({
            type: "unsupported-tool",
            tool: y,
            details: "The code execution tools is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.file_search":
          u ? d.push({ fileSearch: { ...y.args } }) : o.push({
            type: "unsupported-tool",
            tool: y,
            details: "The file search tool is only supported with Gemini 2.5 models."
          });
          break;
        case "google.vertex_rag_store":
          s ? d.push({
            retrieval: {
              vertex_rag_store: {
                rag_resources: {
                  rag_corpus: y.args.ragCorpus
                },
                similarity_top_k: y.args.topK
              }
            }
          }) : o.push({
            type: "unsupported-tool",
            tool: y,
            details: "The RAG store tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        default:
          o.push({ type: "unsupported-tool", tool: y });
          break;
      }
    }), {
      tools: d.length > 0 ? d : void 0,
      toolConfig: void 0,
      toolWarnings: o
    };
  }
  const m = [];
  for (const d of e)
    switch (d.type) {
      case "function":
        m.push({
          name: d.name,
          description: (r = d.description) != null ? r : "",
          parameters: _t(d.inputSchema)
        });
        break;
      default:
        o.push({ type: "unsupported-tool", tool: d });
        break;
    }
  if (t == null)
    return {
      tools: [{ functionDeclarations: m }],
      toolConfig: void 0,
      toolWarnings: o
    };
  const v = t.type;
  switch (v) {
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
      const d = v;
      throw new ke({
        functionality: `tool choice type: ${d}`
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
    this.modelId = e, this.config = t, this.generateId = (n = t.generateId) != null ? n : De;
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
    tools: f,
    toolChoice: m,
    providerOptions: v
  }) {
    var d;
    const g = [], y = await Ve({
      provider: "google",
      providerOptions: v,
      schema: cv
    });
    f != null && f.some(
      (A) => A.type === "provider-defined" && A.id === "google.vertex_rag_store"
    ) && !this.config.provider.startsWith("google.vertex.") && g.push({
      type: "other",
      message: `The 'vertex_rag_store' tool is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
    });
    const w = this.modelId.toLowerCase().startsWith("gemma-"), { contents: h, systemInstruction: b } = uv(
      e,
      { isGemmaModel: w }
    ), {
      tools: _,
      toolConfig: x,
      toolWarnings: C
    } = dv({
      tools: f,
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
          ((d = y == null ? void 0 : y.structuredOutputs) == null || d) ? _t(u.schema) : void 0,
          ...(y == null ? void 0 : y.audioTimestamp) && {
            audioTimestamp: y.audioTimestamp
          },
          // provider options:
          responseModalities: y == null ? void 0 : y.responseModalities,
          thinkingConfig: y == null ? void 0 : y.thinkingConfig,
          ...(y == null ? void 0 : y.imageConfig) && {
            imageConfig: y.imageConfig
          },
          ...(y == null ? void 0 : y.mediaResolution) && {
            mediaResolution: y.mediaResolution
          }
        },
        contents: h,
        systemInstruction: w ? void 0 : b,
        safetySettings: y == null ? void 0 : y.safetySettings,
        tools: _,
        toolConfig: x,
        cachedContent: y == null ? void 0 : y.cachedContent,
        labels: y == null ? void 0 : y.labels
      },
      warnings: [...g, ...C]
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, f, m, v, d;
    const { args: g, warnings: y } = await this.getArgs(e), w = JSON.stringify(g), h = Ae(
      await Oe(this.config.headers),
      e.headers
    ), {
      responseHeaders: b,
      value: _,
      rawValue: x
    } = await Ce({
      url: `${this.config.baseURL}/${xa(
        this.modelId
      )}:generateContent`,
      headers: h,
      body: g,
      failedResponseHandler: Sn,
      successfulResponseHandler: Le(mv),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), C = _.candidates[0], A = [], S = (n = (t = C.content) == null ? void 0 : t.parts) != null ? n : [], M = _.usageMetadata;
    let R;
    for (const D of S)
      if ("executableCode" in D && ((r = D.executableCode) != null && r.code)) {
        const Z = this.config.generateId();
        R = Z, A.push({
          type: "tool-call",
          toolCallId: Z,
          toolName: "code_execution",
          input: JSON.stringify(D.executableCode),
          providerExecuted: !0
        });
      } else "codeExecutionResult" in D && D.codeExecutionResult ? (A.push({
        type: "tool-result",
        // Assumes a result directly follows its corresponding call part.
        toolCallId: R,
        toolName: "code_execution",
        result: {
          outcome: D.codeExecutionResult.outcome,
          output: D.codeExecutionResult.output
        },
        providerExecuted: !0
      }), R = void 0) : "text" in D && D.text != null && D.text.length > 0 ? A.push({
        type: D.thought === !0 ? "reasoning" : "text",
        text: D.text,
        providerMetadata: D.thoughtSignature ? { google: { thoughtSignature: D.thoughtSignature } } : void 0
      }) : "functionCall" in D ? A.push({
        type: "tool-call",
        toolCallId: this.config.generateId(),
        toolName: D.functionCall.name,
        input: JSON.stringify(D.functionCall.args),
        providerMetadata: D.thoughtSignature ? { google: { thoughtSignature: D.thoughtSignature } } : void 0
      }) : "inlineData" in D && A.push({
        type: "file",
        data: D.inlineData.data,
        mediaType: D.inlineData.mimeType
      });
    const E = (o = ka({
      groundingMetadata: C.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? o : [];
    for (const D of E)
      A.push(D);
    return {
      content: A,
      finishReason: Ia({
        finishReason: C.finishReason,
        hasToolCalls: A.some((D) => D.type === "tool-call")
      }),
      usage: {
        inputTokens: (a = M == null ? void 0 : M.promptTokenCount) != null ? a : void 0,
        outputTokens: (s = M == null ? void 0 : M.candidatesTokenCount) != null ? s : void 0,
        totalTokens: (i = M == null ? void 0 : M.totalTokenCount) != null ? i : void 0,
        reasoningTokens: (u = M == null ? void 0 : M.thoughtsTokenCount) != null ? u : void 0,
        cachedInputTokens: (c = M == null ? void 0 : M.cachedContentTokenCount) != null ? c : void 0
      },
      warnings: y,
      providerMetadata: {
        google: {
          promptFeedback: (f = _.promptFeedback) != null ? f : null,
          groundingMetadata: (m = C.groundingMetadata) != null ? m : null,
          urlContextMetadata: (v = C.urlContextMetadata) != null ? v : null,
          safetyRatings: (d = C.safetyRatings) != null ? d : null,
          usageMetadata: M ?? null
        }
      },
      request: { body: w },
      response: {
        // TODO timestamp, model id, id
        headers: b,
        body: x
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
    const f = this.config.generateId;
    let m = !1, v = null, d = null, g = 0;
    const y = /* @__PURE__ */ new Set();
    let w;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(h) {
            h.enqueue({ type: "stream-start", warnings: n });
          },
          transform(h, b) {
            var _, x, C, A, S, M, R, E, D, Z, q, z;
            if (e.includeRawChunks && b.enqueue({ type: "raw", rawValue: h.rawValue }), !h.success) {
              b.enqueue({ type: "error", error: h.error });
              return;
            }
            const te = h.value, oe = te.usageMetadata;
            oe != null && (u.inputTokens = (_ = oe.promptTokenCount) != null ? _ : void 0, u.outputTokens = (x = oe.candidatesTokenCount) != null ? x : void 0, u.totalTokens = (C = oe.totalTokenCount) != null ? C : void 0, u.reasoningTokens = (A = oe.thoughtsTokenCount) != null ? A : void 0, u.cachedInputTokens = (S = oe.cachedContentTokenCount) != null ? S : void 0);
            const F = (M = te.candidates) == null ? void 0 : M[0];
            if (F == null)
              return;
            const pe = F.content, le = ka({
              groundingMetadata: F.groundingMetadata,
              generateId: f
            });
            if (le != null)
              for (const ae of le)
                ae.sourceType === "url" && !y.has(ae.url) && (y.add(ae.url), b.enqueue(ae));
            if (pe != null) {
              const ae = (R = pe.parts) != null ? R : [];
              for (const j of ae)
                if ("executableCode" in j && ((E = j.executableCode) != null && E.code)) {
                  const $ = f();
                  w = $, b.enqueue({
                    type: "tool-call",
                    toolCallId: $,
                    toolName: "code_execution",
                    input: JSON.stringify(j.executableCode),
                    providerExecuted: !0
                  }), m = !0;
                } else if ("codeExecutionResult" in j && j.codeExecutionResult) {
                  const $ = w;
                  $ && (b.enqueue({
                    type: "tool-result",
                    toolCallId: $,
                    toolName: "code_execution",
                    result: {
                      outcome: j.codeExecutionResult.outcome,
                      output: j.codeExecutionResult.output
                    },
                    providerExecuted: !0
                  }), w = void 0);
                } else "text" in j && j.text != null && j.text.length > 0 ? j.thought === !0 ? (v !== null && (b.enqueue({
                  type: "text-end",
                  id: v
                }), v = null), d === null && (d = String(g++), b.enqueue({
                  type: "reasoning-start",
                  id: d,
                  providerMetadata: j.thoughtSignature ? {
                    google: {
                      thoughtSignature: j.thoughtSignature
                    }
                  } : void 0
                })), b.enqueue({
                  type: "reasoning-delta",
                  id: d,
                  delta: j.text,
                  providerMetadata: j.thoughtSignature ? {
                    google: { thoughtSignature: j.thoughtSignature }
                  } : void 0
                })) : (d !== null && (b.enqueue({
                  type: "reasoning-end",
                  id: d
                }), d = null), v === null && (v = String(g++), b.enqueue({
                  type: "text-start",
                  id: v,
                  providerMetadata: j.thoughtSignature ? {
                    google: {
                      thoughtSignature: j.thoughtSignature
                    }
                  } : void 0
                })), b.enqueue({
                  type: "text-delta",
                  id: v,
                  delta: j.text,
                  providerMetadata: j.thoughtSignature ? {
                    google: { thoughtSignature: j.thoughtSignature }
                  } : void 0
                })) : "inlineData" in j && b.enqueue({
                  type: "file",
                  mediaType: j.inlineData.mimeType,
                  data: j.inlineData.data
                });
              const P = fv({
                parts: pe.parts,
                generateId: f
              });
              if (P != null)
                for (const j of P)
                  b.enqueue({
                    type: "tool-input-start",
                    id: j.toolCallId,
                    toolName: j.toolName,
                    providerMetadata: j.providerMetadata
                  }), b.enqueue({
                    type: "tool-input-delta",
                    id: j.toolCallId,
                    delta: j.args,
                    providerMetadata: j.providerMetadata
                  }), b.enqueue({
                    type: "tool-input-end",
                    id: j.toolCallId,
                    providerMetadata: j.providerMetadata
                  }), b.enqueue({
                    type: "tool-call",
                    toolCallId: j.toolCallId,
                    toolName: j.toolName,
                    input: j.args,
                    providerMetadata: j.providerMetadata
                  }), m = !0;
            }
            F.finishReason != null && (i = Ia({
              finishReason: F.finishReason,
              hasToolCalls: m
            }), c = {
              google: {
                promptFeedback: (D = te.promptFeedback) != null ? D : null,
                groundingMetadata: (Z = F.groundingMetadata) != null ? Z : null,
                urlContextMetadata: (q = F.urlContextMetadata) != null ? q : null,
                safetyRatings: (z = F.safetyRatings) != null ? z : null
              }
            }, oe != null && (c.google.usageMetadata = oe));
          },
          flush(h) {
            v !== null && h.enqueue({
              type: "text-end",
              id: v
            }), d !== null && h.enqueue({
              type: "reasoning-end",
              id: d
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
        const f = (o = i.retrievedContext.title) != null ? o : "Unknown Document";
        let m = "application/octet-stream", v;
        u.endsWith(".pdf") ? (m = "application/pdf", v = u.split("/").pop()) : u.endsWith(".txt") ? (m = "text/plain", v = u.split("/").pop()) : u.endsWith(".docx") ? (m = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", v = u.split("/").pop()) : u.endsWith(".doc") ? (m = "application/msword", v = u.split("/").pop()) : (u.match(/\.(md|markdown)$/) && (m = "text/markdown"), v = u.split("/").pop()), s.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: m,
          title: f,
          filename: v
        });
      } else if (c) {
        const f = (a = i.retrievedContext.title) != null ? a : "Unknown Document";
        s.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: "application/octet-stream",
          title: f,
          filename: c.split("/").pop()
        });
      }
    }
  return s.length > 0 ? s : void 0;
}
var Yi = () => p({
  webSearchQueries: N(l()).nullish(),
  retrievalQueries: N(l()).nullish(),
  searchEntryPoint: p({ renderedContent: l() }).nullish(),
  groundingChunks: N(
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
  groundingSupports: N(
    p({
      segment: p({
        startIndex: k().nullish(),
        endIndex: k().nullish(),
        text: l().nullish()
      }),
      segment_text: l().nullish(),
      groundingChunkIndices: N(k()).nullish(),
      supportChunkIndices: N(k()).nullish(),
      confidenceScores: N(k()).nullish(),
      confidenceScore: N(k()).nullish()
    })
  ).nullish(),
  retrievalMetadata: ie([
    p({
      webDynamicRetrievalScore: k()
    }),
    p({})
  ]).nullish()
}), Xi = () => p({
  parts: N(
    ie([
      // note: order matters since text can be fully empty
      p({
        functionCall: p({
          name: l(),
          args: de()
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
        thought: J().nullish(),
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
  blocked: J().nullish()
}), Qi = p({
  cachedContentTokenCount: k().nullish(),
  thoughtsTokenCount: k().nullish(),
  promptTokenCount: k().nullish(),
  candidatesTokenCount: k().nullish(),
  totalTokenCount: k().nullish(),
  // https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/GenerateContentResponse#TrafficType
  trafficType: l().nullish()
}), el = () => p({
  urlMetadata: N(
    p({
      retrievedUrl: l(),
      urlRetrievalStatus: l()
    })
  )
}), mv = X(
  () => U(
    p({
      candidates: N(
        p({
          content: Xi().nullish().or(p({}).strict()),
          finishReason: l().nullish(),
          safetyRatings: N(tr()).nullish(),
          groundingMetadata: Yi().nullish(),
          urlContextMetadata: el().nullish()
        })
      ),
      usageMetadata: Qi.nullish(),
      promptFeedback: p({
        blockReason: l().nullish(),
        safetyRatings: N(tr()).nullish()
      }).nullish()
    })
  )
), hv = X(
  () => U(
    p({
      candidates: N(
        p({
          content: Xi().nullish(),
          finishReason: l().nullish(),
          safetyRatings: N(tr()).nullish(),
          groundingMetadata: Yi().nullish(),
          urlContextMetadata: el().nullish()
        })
      ).nullish(),
      usageMetadata: Qi.nullish(),
      promptFeedback: p({
        blockReason: l().nullish(),
        safetyRatings: N(tr()).nullish()
      }).nullish()
    })
  )
), gv = ht({
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
}), vv = p({
  /** The names of the file_search_stores to retrieve from.
   *  Example: `fileSearchStores/my-file-search-store-123`
   */
  fileSearchStoreNames: N(l()).describe(
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
}).passthrough(), yv = X(
  () => U(vv)
), _v = at({
  id: "google.file_search",
  name: "file_search",
  inputSchema: yv
}), bv = at({
  id: "google.google_search",
  name: "google_search",
  inputSchema: X(
    () => U(
      p({
        mode: ee(["MODE_DYNAMIC", "MODE_UNSPECIFIED"]).default("MODE_UNSPECIFIED"),
        dynamicThreshold: k().default(1)
      })
    )
  )
}), wv = at({
  id: "google.url_context",
  name: "url_context",
  inputSchema: X(() => U(p({})))
}), xv = at({
  id: "google.vertex_rag_store",
  name: "vertex_rag_store",
  inputSchema: p({
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
      headers: f,
      abortSignal: m
    } = e, v = [];
    s != null && v.push({
      type: "unsupported-setting",
      setting: "size",
      details: "This model does not support the `size` option. Use `aspectRatio` instead."
    }), u != null && v.push({
      type: "unsupported-setting",
      setting: "seed",
      details: "This model does not support the `seed` option through this provider."
    });
    const d = await Ve({
      provider: "google",
      providerOptions: c,
      schema: Sv
    }), g = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), y = {
      sampleCount: a
    };
    i != null && (y.aspectRatio = i), d && Object.assign(y, d);
    const w = {
      instances: [{ prompt: o }],
      parameters: y
    }, { responseHeaders: h, value: b } = await Ce({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: Ae(await Oe(this.config.headers), f),
      body: w,
      failedResponseHandler: Sn,
      successfulResponseHandler: Le(
        Tv
      ),
      abortSignal: m,
      fetch: this.config.fetch
    });
    return {
      images: b.predictions.map(
        (_) => _.bytesBase64Encoded
      ),
      warnings: v ?? [],
      providerMetadata: {
        google: {
          images: b.predictions.map((_) => ({
            // Add any prediction-specific metadata here
          }))
        }
      },
      response: {
        timestamp: g,
        modelId: this.modelId,
        headers: h
      }
    };
  }
}, Tv = X(
  () => U(
    p({
      predictions: N(p({ bytesBase64Encoded: l() })).default([])
    })
  )
), Sv = X(
  () => U(
    p({
      personGeneration: ee(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      aspectRatio: ee(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish()
    })
  )
);
function Ev(e = {}) {
  var t, n;
  const r = (t = An(e.baseURL)) != null ? t : "https://generativelanguage.googleapis.com/v1beta", o = (n = e.name) != null ? n : "google.generative-ai", a = () => Ze(
    {
      "x-goog-api-key": dr({
        apiKey: e.apiKey,
        environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
        description: "Google Generative AI"
      }),
      ...e.headers
    },
    `ai-sdk/google/${nv}`
  ), s = (f) => {
    var m;
    return new pv(f, {
      provider: o,
      baseURL: r,
      headers: a,
      generateId: (m = e.generateId) != null ? m : De,
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
  }, i = (f) => new av(f, {
    provider: o,
    baseURL: r,
    headers: a,
    fetch: e.fetch
  }), u = (f, m = {}) => new kv(f, m, {
    provider: o,
    baseURL: r,
    headers: a,
    fetch: e.fetch
  }), c = function(f) {
    if (new.target)
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    return s(f);
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
var Mv = p({
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
}), Rv = p({
  object: I("error"),
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
    this.modelId = e, this.config = t, this.generateId = (n = t.generateId) != null ? n : De;
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
    providerOptions: f,
    tools: m,
    toolChoice: v
  }) {
    var d, g, y, w;
    const h = [], b = (d = await Ve({
      provider: "mistral",
      providerOptions: f,
      schema: Mv
    })) != null ? d : {};
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
    const _ = (g = b.structuredOutputs) != null ? g : !0, x = (y = b.strictJsonSchema) != null ? y : !1;
    (u == null ? void 0 : u.type) === "json" && !(u != null && u.schema) && (e = Qm({
      messages: e,
      schema: u.schema
    }));
    const C = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: b.safePrompt,
      // standardized settings:
      max_tokens: t,
      temperature: n,
      top_p: r,
      random_seed: c,
      // response format:
      response_format: (u == null ? void 0 : u.type) === "json" ? _ && (u == null ? void 0 : u.schema) != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: x,
          name: (w = u.name) != null ? w : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: b.documentImageLimit,
      document_page_limit: b.documentPageLimit,
      // messages:
      messages: Cv(e)
    }, {
      tools: A,
      toolChoice: S,
      toolWarnings: M
    } = Ov({
      tools: m,
      toolChoice: v
    });
    return {
      args: {
        ...C,
        tools: A,
        tool_choice: S,
        ...A != null && b.parallelToolCalls !== void 0 ? { parallel_tool_calls: b.parallelToolCalls } : {}
      },
      warnings: [...h, ...M]
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
      successfulResponseHandler: Le(
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
    let u = !0, c = !1, f = null;
    const m = this.generateId;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(v) {
            v.enqueue({ type: "stream-start", warnings: n });
          },
          transform(v, d) {
            if (e.includeRawChunks && d.enqueue({ type: "raw", rawValue: v.rawValue }), !v.success) {
              d.enqueue({ type: "error", error: v.error });
              return;
            }
            const g = v.value;
            u && (u = !1, d.enqueue({
              type: "response-metadata",
              ...Ta(g)
            })), g.usage != null && (i.inputTokens = g.usage.prompt_tokens, i.outputTokens = g.usage.completion_tokens, i.totalTokens = g.usage.total_tokens);
            const y = g.choices[0], w = y.delta, h = Ca(w.content);
            if (w.content != null && Array.isArray(w.content)) {
              for (const b of w.content)
                if (b.type === "thinking") {
                  const _ = Ea(b.thinking);
                  _.length > 0 && (f == null && (c && (d.enqueue({ type: "text-end", id: "0" }), c = !1), f = m(), d.enqueue({
                    type: "reasoning-start",
                    id: f
                  })), d.enqueue({
                    type: "reasoning-delta",
                    id: f,
                    delta: _
                  }));
                }
            }
            if (h != null && h.length > 0 && (c || (f != null && (d.enqueue({
              type: "reasoning-end",
              id: f
            }), f = null), d.enqueue({ type: "text-start", id: "0" }), c = !0), d.enqueue({
              type: "text-delta",
              id: "0",
              delta: h
            })), (w == null ? void 0 : w.tool_calls) != null)
              for (const b of w.tool_calls) {
                const _ = b.id, x = b.function.name, C = b.function.arguments;
                d.enqueue({
                  type: "tool-input-start",
                  id: _,
                  toolName: x
                }), d.enqueue({
                  type: "tool-input-delta",
                  id: _,
                  delta: C
                }), d.enqueue({
                  type: "tool-input-end",
                  id: _
                }), d.enqueue({
                  type: "tool-call",
                  toolCallId: _,
                  toolName: x,
                  input: C
                });
              }
            y.finish_reason != null && (s = Sa(y.finish_reason));
          },
          flush(v) {
            f != null && v.enqueue({
              type: "reasoning-end",
              id: f
            }), c && v.enqueue({ type: "text-end", id: "0" }), v.enqueue({
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
var tl = ie([
  l(),
  N(
    me("type", [
      p({
        type: I("text"),
        text: l()
      }),
      p({
        type: I("image_url"),
        image_url: ie([
          l(),
          p({
            url: l(),
            detail: l().nullable()
          })
        ])
      }),
      p({
        type: I("reference"),
        reference_ids: N(k())
      }),
      p({
        type: I("thinking"),
        thinking: N(
          p({
            type: I("text"),
            text: l()
          })
        )
      })
    ])
  )
]).nullish(), nl = p({
  prompt_tokens: k(),
  completion_tokens: k(),
  total_tokens: k()
}), Av = p({
  id: l().nullish(),
  created: k().nullish(),
  model: l().nullish(),
  choices: N(
    p({
      message: p({
        role: I("assistant"),
        content: tl,
        tool_calls: N(
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
  object: I("chat.completion"),
  usage: nl
}), $v = p({
  id: l().nullish(),
  created: k().nullish(),
  model: l().nullish(),
  choices: N(
    p({
      delta: p({
        role: ee(["assistant"]).optional(),
        content: tl,
        tool_calls: N(
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
      successfulResponseHandler: Le(
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
}, jv = p({
  data: N(p({ embedding: N(k()) })),
  usage: p({ prompt_tokens: k() }).nullish()
}), qv = "2.0.25";
function Dv(e = {}) {
  var t;
  const n = (t = An(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", r = () => Ze(
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
var wo = p({
  error: p({
    message: l(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l().nullish(),
    param: pt().nullish(),
    code: ie([l(), k()]).nullish()
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
            var u, c, f;
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
                      filename: (f = s.filename) != null ? f : `part-${i}.pdf`,
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
    p({
      id: l().nullish(),
      created: k().nullish(),
      model: l().nullish(),
      choices: N(
        p({
          message: p({
            role: I("assistant").nullish(),
            content: l().nullish(),
            tool_calls: N(
              p({
                id: l().nullish(),
                type: I("function"),
                function: p({
                  name: l(),
                  arguments: l()
                })
              })
            ).nullish(),
            annotations: N(
              p({
                type: I("url_citation"),
                start_index: k(),
                end_index: k(),
                url: l(),
                title: l()
              })
            ).nullish()
          }),
          index: k(),
          logprobs: p({
            content: N(
              p({
                token: l(),
                logprob: k(),
                top_logprobs: N(
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
), Zv = Re(
  () => U(
    ie([
      p({
        id: l().nullish(),
        created: k().nullish(),
        model: l().nullish(),
        choices: N(
          p({
            delta: p({
              role: ee(["assistant"]).nullish(),
              content: l().nullish(),
              tool_calls: N(
                p({
                  index: k(),
                  id: l().nullish(),
                  type: I("function").nullish(),
                  function: p({
                    name: l().nullish(),
                    arguments: l().nullish()
                  })
                })
              ).nullish(),
              annotations: N(
                p({
                  type: I("url_citation"),
                  start_index: k(),
                  end_index: k(),
                  url: l(),
                  title: l()
                })
              ).nullish()
            }).nullish(),
            logprobs: p({
              content: N(
                p({
                  token: l(),
                  logprob: k(),
                  top_logprobs: N(
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
), Lv = Re(
  () => U(
    p({
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
      logprobs: ie([J(), k()]).optional(),
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
      reasoningEffort: ee(["none", "minimal", "low", "medium", "high"]).optional(),
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
      serviceTier: ee(["auto", "flex", "priority", "default"]).optional(),
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
      textVerbosity: ee(["low", "medium", "high"]).optional(),
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
      promptCacheRetention: ee(["in_memory", "24h"]).optional(),
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
    tools: f,
    toolChoice: m,
    providerOptions: v
  }) {
    var d, g, y, w;
    const h = [], b = (d = await Ve({
      provider: "openai",
      providerOptions: v,
      schema: Lv
    })) != null ? d : {}, _ = (g = b.structuredOutputs) != null ? g : !0;
    o != null && h.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (u == null ? void 0 : u.type) === "json" && u.schema != null && !_ && h.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const { messages: x, warnings: C } = zv(
      {
        prompt: e,
        systemMessageMode: Jv(this.modelId)
      }
    );
    h.push(...C);
    const A = (y = b.strictJsonSchema) != null ? y : !1, S = {
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
      temperature: n,
      top_p: r,
      frequency_penalty: a,
      presence_penalty: s,
      response_format: (u == null ? void 0 : u.type) === "json" ? _ && u.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: A,
          name: (w = u.name) != null ? w : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      stop: i,
      seed: c,
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
      prompt_cache_retention: b.promptCacheRetention,
      safety_identifier: b.safetyIdentifier,
      // messages:
      messages: x
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
    })), b.serviceTier === "flex" && !Gv(this.modelId) && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), S.service_tier = void 0), b.serviceTier === "priority" && !Bv(this.modelId) && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), S.service_tier = void 0);
    const {
      tools: M,
      toolChoice: R,
      toolWarnings: E
    } = Fv({
      tools: f,
      toolChoice: m,
      structuredOutputs: _,
      strictJsonSchema: A
    });
    return {
      args: {
        ...S,
        tools: M,
        tool_choice: R
      },
      warnings: [...h, ...E]
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, f, m, v, d, g;
    const { args: y, warnings: w } = await this.getArgs(e), {
      responseHeaders: h,
      value: b,
      rawValue: _
    } = await Ce({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      body: y,
      failedResponseHandler: wt,
      successfulResponseHandler: Le(
        Uv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), x = b.choices[0], C = [], A = x.message.content;
    A != null && A.length > 0 && C.push({ type: "text", text: A });
    for (const E of (t = x.message.tool_calls) != null ? t : [])
      C.push({
        type: "tool-call",
        toolCallId: (n = E.id) != null ? n : De(),
        toolName: E.function.name,
        input: E.function.arguments
      });
    for (const E of (r = x.message.annotations) != null ? r : [])
      C.push({
        type: "source",
        sourceType: "url",
        id: De(),
        url: E.url,
        title: E.title
      });
    const S = (o = b.usage) == null ? void 0 : o.completion_tokens_details, M = (a = b.usage) == null ? void 0 : a.prompt_tokens_details, R = { openai: {} };
    return (S == null ? void 0 : S.accepted_prediction_tokens) != null && (R.openai.acceptedPredictionTokens = S == null ? void 0 : S.accepted_prediction_tokens), (S == null ? void 0 : S.rejected_prediction_tokens) != null && (R.openai.rejectedPredictionTokens = S == null ? void 0 : S.rejected_prediction_tokens), ((s = x.logprobs) == null ? void 0 : s.content) != null && (R.openai.logprobs = x.logprobs.content), {
      content: C,
      finishReason: Ma(x.finish_reason),
      usage: {
        inputTokens: (u = (i = b.usage) == null ? void 0 : i.prompt_tokens) != null ? u : void 0,
        outputTokens: (f = (c = b.usage) == null ? void 0 : c.completion_tokens) != null ? f : void 0,
        totalTokens: (v = (m = b.usage) == null ? void 0 : m.total_tokens) != null ? v : void 0,
        reasoningTokens: (d = S == null ? void 0 : S.reasoning_tokens) != null ? d : void 0,
        cachedInputTokens: (g = M == null ? void 0 : M.cached_tokens) != null ? g : void 0
      },
      request: { body: y },
      response: {
        ...Nr(b),
        headers: h,
        body: _
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
    let c = !1, f = !1;
    const m = { openai: {} };
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(v) {
            v.enqueue({ type: "stream-start", warnings: n });
          },
          transform(v, d) {
            var g, y, w, h, b, _, x, C, A, S, M, R, E, D, Z, q, z, te, oe, F, pe, le, ae, P;
            if (e.includeRawChunks && d.enqueue({ type: "raw", rawValue: v.rawValue }), !v.success) {
              i = "error", d.enqueue({ type: "error", error: v.error });
              return;
            }
            const j = v.value;
            if ("error" in j) {
              i = "error", d.enqueue({ type: "error", error: j.error });
              return;
            }
            if (!c) {
              const Q = Nr(j);
              Object.values(Q).some(Boolean) && (c = !0, d.enqueue({
                type: "response-metadata",
                ...Nr(j)
              }));
            }
            j.usage != null && (u.inputTokens = (g = j.usage.prompt_tokens) != null ? g : void 0, u.outputTokens = (y = j.usage.completion_tokens) != null ? y : void 0, u.totalTokens = (w = j.usage.total_tokens) != null ? w : void 0, u.reasoningTokens = (b = (h = j.usage.completion_tokens_details) == null ? void 0 : h.reasoning_tokens) != null ? b : void 0, u.cachedInputTokens = (x = (_ = j.usage.prompt_tokens_details) == null ? void 0 : _.cached_tokens) != null ? x : void 0, ((C = j.usage.completion_tokens_details) == null ? void 0 : C.accepted_prediction_tokens) != null && (m.openai.acceptedPredictionTokens = (A = j.usage.completion_tokens_details) == null ? void 0 : A.accepted_prediction_tokens), ((S = j.usage.completion_tokens_details) == null ? void 0 : S.rejected_prediction_tokens) != null && (m.openai.rejectedPredictionTokens = (M = j.usage.completion_tokens_details) == null ? void 0 : M.rejected_prediction_tokens));
            const $ = j.choices[0];
            if (($ == null ? void 0 : $.finish_reason) != null && (i = Ma($.finish_reason)), ((R = $ == null ? void 0 : $.logprobs) == null ? void 0 : R.content) != null && (m.openai.logprobs = $.logprobs.content), ($ == null ? void 0 : $.delta) == null)
              return;
            const K = $.delta;
            if (K.content != null && (f || (d.enqueue({ type: "text-start", id: "0" }), f = !0), d.enqueue({
              type: "text-delta",
              id: "0",
              delta: K.content
            })), K.tool_calls != null)
              for (const Q of K.tool_calls) {
                const T = Q.index;
                if (s[T] == null) {
                  if (Q.type !== "function")
                    throw new Sr({
                      data: Q,
                      message: "Expected 'function' type."
                    });
                  if (Q.id == null)
                    throw new Sr({
                      data: Q,
                      message: "Expected 'id' to be a string."
                    });
                  if (((E = Q.function) == null ? void 0 : E.name) == null)
                    throw new Sr({
                      data: Q,
                      message: "Expected 'function.name' to be a string."
                    });
                  d.enqueue({
                    type: "tool-input-start",
                    id: Q.id,
                    toolName: Q.function.name
                  }), s[T] = {
                    id: Q.id,
                    type: "function",
                    function: {
                      name: Q.function.name,
                      arguments: (D = Q.function.arguments) != null ? D : ""
                    },
                    hasFinished: !1
                  };
                  const W = s[T];
                  ((Z = W.function) == null ? void 0 : Z.name) != null && ((q = W.function) == null ? void 0 : q.arguments) != null && (W.function.arguments.length > 0 && d.enqueue({
                    type: "tool-input-delta",
                    id: W.id,
                    delta: W.function.arguments
                  }), ma(W.function.arguments) && (d.enqueue({
                    type: "tool-input-end",
                    id: W.id
                  }), d.enqueue({
                    type: "tool-call",
                    toolCallId: (z = W.id) != null ? z : De(),
                    toolName: W.function.name,
                    input: W.function.arguments
                  }), W.hasFinished = !0));
                  continue;
                }
                const V = s[T];
                V.hasFinished || (((te = Q.function) == null ? void 0 : te.arguments) != null && (V.function.arguments += (F = (oe = Q.function) == null ? void 0 : oe.arguments) != null ? F : ""), d.enqueue({
                  type: "tool-input-delta",
                  id: V.id,
                  delta: (pe = Q.function.arguments) != null ? pe : ""
                }), ((le = V.function) == null ? void 0 : le.name) != null && ((ae = V.function) == null ? void 0 : ae.arguments) != null && ma(V.function.arguments) && (d.enqueue({
                  type: "tool-input-end",
                  id: V.id
                }), d.enqueue({
                  type: "tool-call",
                  toolCallId: (P = V.id) != null ? P : De(),
                  toolName: V.function.name,
                  input: V.function.arguments
                }), V.hasFinished = !0));
              }
            if (K.annotations != null)
              for (const Q of K.annotations)
                d.enqueue({
                  type: "source",
                  sourceType: "url",
                  id: De(),
                  url: Q.url,
                  title: Q.title
                });
          },
          flush(v) {
            f && v.enqueue({ type: "text-end", id: "0" }), v.enqueue({
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
    p({
      id: l().nullish(),
      created: k().nullish(),
      model: l().nullish(),
      choices: N(
        p({
          text: l(),
          finish_reason: l(),
          logprobs: p({
            tokens: N(l()),
            token_logprobs: N(k()),
            top_logprobs: N(Pe(l(), k())).nullish()
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
), Yv = Re(
  () => U(
    ie([
      p({
        id: l().nullish(),
        created: k().nullish(),
        model: l().nullish(),
        choices: N(
          p({
            text: l(),
            finish_reason: l().nullish(),
            index: k(),
            logprobs: p({
              tokens: N(l()),
              token_logprobs: N(k()),
              top_logprobs: N(Pe(l(), k())).nullish()
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
), Na = Re(
  () => U(
    p({
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
      logprobs: ie([J(), k()]).optional()
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
    toolChoice: f,
    seed: m,
    providerOptions: v
  }) {
    const d = [], g = {
      ...await Ve({
        provider: "openai",
        providerOptions: v,
        schema: Na
      }),
      ...await Ve({
        provider: this.providerOptionsName,
        providerOptions: v,
        schema: Na
      })
    };
    o != null && d.push({ type: "unsupported-setting", setting: "topK" }), c != null && c.length && d.push({ type: "unsupported-setting", setting: "tools" }), f != null && d.push({ type: "unsupported-setting", setting: "toolChoice" }), u != null && u.type !== "text" && d.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: y, stopSequences: w } = Wv({ prompt: e }), h = [...w ?? [], ...i ?? []];
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
        temperature: n,
        top_p: r,
        frequency_penalty: a,
        presence_penalty: s,
        seed: m,
        // prompt:
        prompt: y,
        // stop sequences:
        stop: h.length > 0 ? h : void 0
      },
      warnings: d
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
      successfulResponseHandler: Le(
        Kv
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), c = i.choices[0], f = { openai: {} };
    return c.logprobs != null && (f.openai.logprobs = c.logprobs), {
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
      providerMetadata: f,
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
          start(f) {
            f.enqueue({ type: "stream-start", warnings: n });
          },
          transform(f, m) {
            if (e.includeRawChunks && m.enqueue({ type: "raw", rawValue: f.rawValue }), !f.success) {
              s = "error", m.enqueue({ type: "error", error: f.error });
              return;
            }
            const v = f.value;
            if ("error" in v) {
              s = "error", m.enqueue({ type: "error", error: v.error });
              return;
            }
            c && (c = !1, m.enqueue({
              type: "response-metadata",
              ...Ra(v)
            }), m.enqueue({ type: "text-start", id: "0" })), v.usage != null && (u.inputTokens = v.usage.prompt_tokens, u.outputTokens = v.usage.completion_tokens, u.totalTokens = v.usage.total_tokens);
            const d = v.choices[0];
            (d == null ? void 0 : d.finish_reason) != null && (s = Oa(d.finish_reason)), (d == null ? void 0 : d.logprobs) != null && (i.openai.logprobs = d.logprobs), (d == null ? void 0 : d.text) != null && d.text.length > 0 && m.enqueue({
              type: "text-delta",
              id: "0",
              delta: d.text
            });
          },
          flush(f) {
            c || f.enqueue({ type: "text-end", id: "0" }), f.enqueue({
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
), ey = Re(
  () => U(
    p({
      data: N(p({ embedding: N(k()) })),
      usage: p({ prompt_tokens: k() }).nullish()
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
      successfulResponseHandler: Le(
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
    p({
      created: k().nullish(),
      data: N(
        p({
          b64_json: l(),
          revised_prompt: l().nullish()
        })
      ),
      background: l().nullish(),
      output_format: l().nullish(),
      size: l().nullish(),
      quality: l().nullish(),
      usage: p({
        input_tokens: k().nullish(),
        output_tokens: k().nullish(),
        total_tokens: k().nullish(),
        input_tokens_details: p({
          image_tokens: k().nullish(),
          text_tokens: k().nullish()
        }).nullish()
      }).nullish()
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
    var u, c, f, m;
    const v = [];
    r != null && v.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), o != null && v.push({ type: "unsupported-setting", setting: "seed" });
    const d = (f = (c = (u = this.config._internal) == null ? void 0 : u.currentDate) == null ? void 0 : c.call(u)) != null ? f : /* @__PURE__ */ new Date(), { value: g, responseHeaders: y } = await Ce({
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
      successfulResponseHandler: Le(
        ny
      ),
      abortSignal: i,
      fetch: this.config.fetch
    });
    return {
      images: g.data.map((w) => w.b64_json),
      warnings: v,
      response: {
        timestamp: d,
        modelId: this.modelId,
        headers: y
      },
      providerMetadata: {
        openai: {
          images: g.data.map((w) => ({
            ...w.revised_prompt ? { revisedPrompt: w.revised_prompt } : {},
            ...g.created != null ? { created: g.created } : {},
            ...g.size != null ? { size: g.size } : {},
            ...g.quality != null ? { quality: g.quality } : {},
            ...g.background != null ? { background: g.background } : {},
            ...g.output_format != null ? { outputFormat: g.output_format } : {}
          }))
        }
      }
    };
  }
}, sy = X(
  () => U(
    p({
      code: l().nullish(),
      containerId: l()
    })
  )
), iy = X(
  () => U(
    p({
      outputs: N(
        me("type", [
          p({ type: I("logs"), logs: l() }),
          p({ type: I("image"), url: l() })
        ])
      ).nullish()
    })
  )
), ly = X(
  () => U(
    p({
      container: ie([
        l(),
        p({
          fileIds: N(l()).optional()
        })
      ]).optional()
    })
  )
), uy = ht({
  id: "openai.code_interpreter",
  name: "code_interpreter",
  inputSchema: sy,
  outputSchema: iy
}), cy = (e = {}) => uy(e), ol = p({
  key: l(),
  type: ee(["eq", "ne", "gt", "gte", "lt", "lte"]),
  value: ie([l(), k(), J()])
}), al = p({
  type: ee(["and", "or"]),
  filters: N(
    ie([ol, qi(() => al)])
  )
}), dy = X(
  () => U(
    p({
      vectorStoreIds: N(l()),
      maxNumResults: k().optional(),
      ranking: p({
        ranker: l().optional(),
        scoreThreshold: k().optional()
      }).optional(),
      filters: ie([ol, al]).optional()
    })
  )
), py = X(
  () => U(
    p({
      queries: N(l()),
      results: N(
        p({
          attributes: Pe(l(), de()),
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
  inputSchema: p({}),
  outputSchema: py
}), my = X(
  () => U(
    p({
      background: ee(["auto", "opaque", "transparent"]).optional(),
      inputFidelity: ee(["low", "high"]).optional(),
      inputImageMask: p({
        fileId: l().optional(),
        imageUrl: l().optional()
      }).optional(),
      model: l().optional(),
      moderation: ee(["auto"]).optional(),
      outputCompression: k().int().min(0).max(100).optional(),
      outputFormat: ee(["png", "jpeg", "webp"]).optional(),
      partialImages: k().int().min(0).max(3).optional(),
      quality: ee(["auto", "low", "medium", "high"]).optional(),
      size: ee(["1024x1024", "1024x1536", "1536x1024", "auto"]).optional()
    }).strict()
  )
), hy = X(() => U(p({}))), gy = X(
  () => U(p({ result: l() }))
), vy = ht({
  id: "openai.image_generation",
  name: "image_generation",
  inputSchema: hy,
  outputSchema: gy
}), yy = (e = {}) => vy(e), sl = X(
  () => U(
    p({
      action: p({
        type: I("exec"),
        command: N(l()),
        timeoutMs: k().optional(),
        user: l().optional(),
        workingDirectory: l().optional(),
        env: Pe(l(), l()).optional()
      })
    })
  )
), il = X(
  () => U(p({ output: l() }))
), _y = ht({
  id: "openai.local_shell",
  name: "local_shell",
  inputSchema: sl,
  outputSchema: il
}), by = X(
  () => U(
    p({
      externalWebAccess: J().optional(),
      filters: p({ allowedDomains: N(l()).optional() }).optional(),
      searchContextSize: ee(["low", "medium", "high"]).optional(),
      userLocation: p({
        type: I("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), wy = X(() => U(p({}))), xy = X(
  () => U(
    p({
      action: me("type", [
        p({
          type: I("search"),
          query: l().optional()
        }),
        p({
          type: I("openPage"),
          url: l()
        }),
        p({
          type: I("find"),
          url: l(),
          pattern: l()
        })
      ]),
      sources: N(
        me("type", [
          p({ type: I("url"), url: l() }),
          p({ type: I("api"), name: l() })
        ])
      ).optional()
    })
  )
), Iy = ht({
  id: "openai.web_search",
  name: "web_search",
  inputSchema: wy,
  outputSchema: xy
}), ky = (e = {}) => Iy(e), Ty = X(
  () => U(
    p({
      searchContextSize: ee(["low", "medium", "high"]).optional(),
      userLocation: p({
        type: I("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Sy = X(
  () => U(p({}))
), Ey = X(
  () => U(
    p({
      action: me("type", [
        p({
          type: I("search"),
          query: l().optional()
        }),
        p({
          type: I("openPage"),
          url: l()
        }),
        p({
          type: I("find"),
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
  const c = [], f = [];
  for (const { role: m, content: v } of e)
    switch (m) {
      case "system": {
        switch (t) {
          case "system": {
            c.push({ role: "system", content: v });
            break;
          }
          case "developer": {
            c.push({ role: "developer", content: v });
            break;
          }
          case "remove": {
            f.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const d = t;
            throw new Error(
              `Unsupported system message mode: ${d}`
            );
          }
        }
        break;
      }
      case "user": {
        c.push({
          role: "user",
          content: v.map((d, g) => {
            var y, w, h;
            switch (d.type) {
              case "text":
                return { type: "input_text", text: d.text };
              case "file":
                if (d.mediaType.startsWith("image/")) {
                  const b = d.mediaType === "image/*" ? "image/jpeg" : d.mediaType;
                  return {
                    type: "input_image",
                    ...d.data instanceof URL ? { image_url: d.data.toString() } : typeof d.data == "string" && Aa(d.data, n) ? { file_id: d.data } : {
                      image_url: `data:${b};base64,${ft(d.data)}`
                    },
                    detail: (w = (y = d.providerOptions) == null ? void 0 : y.openai) == null ? void 0 : w.imageDetail
                  };
                } else {
                  if (d.mediaType === "application/pdf")
                    return d.data instanceof URL ? {
                      type: "input_file",
                      file_url: d.data.toString()
                    } : {
                      type: "input_file",
                      ...typeof d.data == "string" && Aa(d.data, n) ? { file_id: d.data } : {
                        filename: (h = d.filename) != null ? h : `part-${g}.pdf`,
                        file_data: `data:application/pdf;base64,${ft(d.data)}`
                      }
                    };
                  throw new ke({
                    functionality: `file part media type ${d.mediaType}`
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        const d = {}, g = {};
        for (const y of v)
          switch (y.type) {
            case "text": {
              const w = (s = (a = y.providerOptions) == null ? void 0 : a.openai) == null ? void 0 : s.itemId;
              if (r && w != null) {
                c.push({ type: "item_reference", id: w });
                break;
              }
              c.push({
                role: "assistant",
                content: [{ type: "output_text", text: y.text }],
                id: w
              });
              break;
            }
            case "tool-call": {
              if (g[y.toolCallId] = y, y.providerExecuted)
                break;
              const w = (u = (i = y.providerOptions) == null ? void 0 : i.openai) == null ? void 0 : u.itemId;
              if (r && w != null) {
                c.push({ type: "item_reference", id: w });
                break;
              }
              if (o && y.toolName === "local_shell") {
                const h = await Ne({
                  value: y.input,
                  schema: sl
                });
                c.push({
                  type: "local_shell_call",
                  call_id: y.toolCallId,
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
                call_id: y.toolCallId,
                name: y.toolName,
                arguments: JSON.stringify(y.input),
                id: w
              });
              break;
            }
            // assistant tool result parts are from provider-executed tools:
            case "tool-result": {
              r ? c.push({ type: "item_reference", id: y.toolCallId }) : f.push({
                type: "other",
                message: `Results for OpenAI tool ${y.toolName} are not sent to the API when store is false`
              });
              break;
            }
            case "reasoning": {
              const w = await Ve({
                provider: "openai",
                providerOptions: y.providerOptions,
                schema: Oy
              }), h = w == null ? void 0 : w.itemId;
              if (h != null) {
                const b = d[h];
                if (r)
                  b === void 0 && (c.push({ type: "item_reference", id: h }), d[h] = {
                    type: "reasoning",
                    id: h,
                    summary: []
                  });
                else {
                  const _ = [];
                  y.text.length > 0 ? _.push({
                    type: "summary_text",
                    text: y.text
                  }) : b !== void 0 && f.push({
                    type: "other",
                    message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(y)}.`
                  }), b === void 0 ? (d[h] = {
                    type: "reasoning",
                    id: h,
                    encrypted_content: w == null ? void 0 : w.reasoningEncryptedContent,
                    summary: _
                  }, c.push(d[h])) : (b.summary.push(..._), (w == null ? void 0 : w.reasoningEncryptedContent) != null && (b.encrypted_content = w.reasoningEncryptedContent));
                }
              } else
                f.push({
                  type: "other",
                  message: `Non-OpenAI reasoning parts are not supported. Skipping reasoning part: ${JSON.stringify(y)}.`
                });
              break;
            }
          }
        break;
      }
      case "tool": {
        for (const d of v) {
          const g = d.output;
          if (o && d.toolName === "local_shell" && g.type === "json") {
            const w = await Ne({
              value: g.value,
              schema: il
            });
            c.push({
              type: "local_shell_call_output",
              call_id: d.toolCallId,
              output: w.output
            });
            break;
          }
          let y;
          switch (g.type) {
            case "text":
            case "error-text":
              y = g.value;
              break;
            case "json":
            case "error-json":
              y = JSON.stringify(g.value);
              break;
            case "content":
              y = g.value.map((w) => {
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
            call_id: d.toolCallId,
            output: y
          });
        }
        break;
      }
      default: {
        const d = m;
        throw new Error(`Unsupported role: ${d}`);
      }
    }
  return { input: c, warnings: f };
}
var Oy = p({
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
    ie([
      p({
        type: I("response.output_text.delta"),
        item_id: l(),
        delta: l(),
        logprobs: N(
          p({
            token: l(),
            logprob: k(),
            top_logprobs: N(
              p({
                token: l(),
                logprob: k()
              })
            )
          })
        ).nullish()
      }),
      p({
        type: ee(["response.completed", "response.incomplete"]),
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
        type: I("response.created"),
        response: p({
          id: l(),
          created_at: k(),
          model: l(),
          service_tier: l().nullish()
        })
      }),
      p({
        type: I("response.output_item.added"),
        output_index: k(),
        item: me("type", [
          p({
            type: I("message"),
            id: l()
          }),
          p({
            type: I("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          p({
            type: I("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l()
          }),
          p({
            type: I("web_search_call"),
            id: l(),
            status: l()
          }),
          p({
            type: I("computer_call"),
            id: l(),
            status: l()
          }),
          p({
            type: I("file_search_call"),
            id: l()
          }),
          p({
            type: I("image_generation_call"),
            id: l()
          }),
          p({
            type: I("code_interpreter_call"),
            id: l(),
            container_id: l(),
            code: l().nullable(),
            outputs: N(
              me("type", [
                p({ type: I("logs"), logs: l() }),
                p({ type: I("image"), url: l() })
              ])
            ).nullable(),
            status: l()
          })
        ])
      }),
      p({
        type: I("response.output_item.done"),
        output_index: k(),
        item: me("type", [
          p({
            type: I("message"),
            id: l()
          }),
          p({
            type: I("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          p({
            type: I("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l(),
            status: I("completed")
          }),
          p({
            type: I("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: N(
              me("type", [
                p({ type: I("logs"), logs: l() }),
                p({ type: I("image"), url: l() })
              ])
            ).nullable()
          }),
          p({
            type: I("image_generation_call"),
            id: l(),
            result: l()
          }),
          p({
            type: I("web_search_call"),
            id: l(),
            status: l(),
            action: me("type", [
              p({
                type: I("search"),
                query: l().nullish(),
                sources: N(
                  me("type", [
                    p({ type: I("url"), url: l() }),
                    p({ type: I("api"), name: l() })
                  ])
                ).nullish()
              }),
              p({
                type: I("open_page"),
                url: l()
              }),
              p({
                type: I("find"),
                url: l(),
                pattern: l()
              })
            ])
          }),
          p({
            type: I("file_search_call"),
            id: l(),
            queries: N(l()),
            results: N(
              p({
                attributes: Pe(l(), de()),
                file_id: l(),
                filename: l(),
                score: k(),
                text: l()
              })
            ).nullish()
          }),
          p({
            type: I("local_shell_call"),
            id: l(),
            call_id: l(),
            action: p({
              type: I("exec"),
              command: N(l()),
              timeout_ms: k().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: Pe(l(), l()).optional()
            })
          }),
          p({
            type: I("computer_call"),
            id: l(),
            status: I("completed")
          })
        ])
      }),
      p({
        type: I("response.function_call_arguments.delta"),
        item_id: l(),
        output_index: k(),
        delta: l()
      }),
      p({
        type: I("response.image_generation_call.partial_image"),
        item_id: l(),
        output_index: k(),
        partial_image_b64: l()
      }),
      p({
        type: I("response.code_interpreter_call_code.delta"),
        item_id: l(),
        output_index: k(),
        delta: l()
      }),
      p({
        type: I("response.code_interpreter_call_code.done"),
        item_id: l(),
        output_index: k(),
        code: l()
      }),
      p({
        type: I("response.output_text.annotation.added"),
        annotation: me("type", [
          p({
            type: I("url_citation"),
            start_index: k(),
            end_index: k(),
            url: l(),
            title: l()
          }),
          p({
            type: I("file_citation"),
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
        type: I("response.reasoning_summary_part.added"),
        item_id: l(),
        summary_index: k()
      }),
      p({
        type: I("response.reasoning_summary_text.delta"),
        item_id: l(),
        summary_index: k(),
        delta: l()
      }),
      p({
        type: I("response.reasoning_summary_part.done"),
        item_id: l(),
        summary_index: k()
      }),
      p({
        type: I("error"),
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
), Ay = Re(
  () => U(
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
      output: N(
        me("type", [
          p({
            type: I("message"),
            role: I("assistant"),
            id: l(),
            content: N(
              p({
                type: I("output_text"),
                text: l(),
                logprobs: N(
                  p({
                    token: l(),
                    logprob: k(),
                    top_logprobs: N(
                      p({
                        token: l(),
                        logprob: k()
                      })
                    )
                  })
                ).nullish(),
                annotations: N(
                  me("type", [
                    p({
                      type: I("url_citation"),
                      start_index: k(),
                      end_index: k(),
                      url: l(),
                      title: l()
                    }),
                    p({
                      type: I("file_citation"),
                      file_id: l(),
                      filename: l().nullish(),
                      index: k().nullish(),
                      start_index: k().nullish(),
                      end_index: k().nullish(),
                      quote: l().nullish()
                    }),
                    p({
                      type: I("container_file_citation"),
                      container_id: l(),
                      file_id: l(),
                      filename: l().nullish(),
                      start_index: k().nullish(),
                      end_index: k().nullish(),
                      index: k().nullish()
                    }),
                    p({
                      type: I("file_path"),
                      file_id: l(),
                      index: k().nullish()
                    })
                  ])
                )
              })
            )
          }),
          p({
            type: I("web_search_call"),
            id: l(),
            status: l(),
            action: me("type", [
              p({
                type: I("search"),
                query: l().nullish(),
                sources: N(
                  me("type", [
                    p({ type: I("url"), url: l() }),
                    p({ type: I("api"), name: l() })
                  ])
                ).nullish()
              }),
              p({
                type: I("open_page"),
                url: l()
              }),
              p({
                type: I("find"),
                url: l(),
                pattern: l()
              })
            ])
          }),
          p({
            type: I("file_search_call"),
            id: l(),
            queries: N(l()),
            results: N(
              p({
                attributes: Pe(
                  l(),
                  ie([l(), k(), J()])
                ),
                file_id: l(),
                filename: l(),
                score: k(),
                text: l()
              })
            ).nullish()
          }),
          p({
            type: I("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: N(
              me("type", [
                p({ type: I("logs"), logs: l() }),
                p({ type: I("image"), url: l() })
              ])
            ).nullable()
          }),
          p({
            type: I("image_generation_call"),
            id: l(),
            result: l()
          }),
          p({
            type: I("local_shell_call"),
            id: l(),
            call_id: l(),
            action: p({
              type: I("exec"),
              command: N(l()),
              timeout_ms: k().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: Pe(l(), l()).optional()
            })
          }),
          p({
            type: I("function_call"),
            call_id: l(),
            name: l(),
            arguments: l(),
            id: l()
          }),
          p({
            type: I("computer_call"),
            id: l(),
            status: l().optional()
          }),
          p({
            type: I("reasoning"),
            id: l(),
            encrypted_content: l().nullish(),
            summary: N(
              p({
                type: I("summary_text"),
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
), ll = 20, $y = Re(
  () => U(
    p({
      conversation: l().nullish(),
      include: N(
        ee([
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
      logprobs: ie([J(), k().min(1).max(ll)]).optional(),
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
      promptCacheRetention: ee(["in_memory", "24h"]).nullish(),
      reasoningEffort: l().nullish(),
      reasoningSummary: l().nullish(),
      safetyIdentifier: l().nullish(),
      serviceTier: ee(["auto", "flex", "priority", "default"]).nullish(),
      store: J().nullish(),
      strictJsonSchema: J().nullish(),
      textVerbosity: ee(["low", "medium", "high"]).nullish(),
      truncation: ee(["auto", "disabled"]).nullish(),
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
    tools: f,
    toolChoice: m,
    responseFormat: v
  }) {
    var d, g, y, w;
    const h = [], b = By(this.modelId);
    o != null && h.push({ type: "unsupported-setting", setting: "topK" }), i != null && h.push({ type: "unsupported-setting", setting: "seed" }), a != null && h.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), s != null && h.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), n != null && h.push({ type: "unsupported-setting", setting: "stopSequences" });
    const _ = await Ve({
      provider: "openai",
      providerOptions: c,
      schema: $y
    });
    _ != null && _.conversation && (_ != null && _.previousResponseId) && h.push({
      type: "unsupported-setting",
      setting: "conversation",
      details: "conversation and previousResponseId cannot be used together"
    });
    const { input: x, warnings: C } = await Ry({
      prompt: u,
      systemMessageMode: b.systemMessageMode,
      fileIdPrefixes: this.config.fileIdPrefixes,
      store: (d = _ == null ? void 0 : _.store) != null ? d : !0,
      hasLocalShellTool: R("openai.local_shell")
    });
    h.push(...C);
    const A = (g = _ == null ? void 0 : _.strictJsonSchema) != null ? g : !1;
    let S = _ == null ? void 0 : _.include;
    function M(F) {
      S == null ? S = [F] : S.includes(F) || (S = [...S, F]);
    }
    function R(F) {
      return (f == null ? void 0 : f.find(
        (pe) => pe.type === "provider-defined" && pe.id === F
      )) != null;
    }
    const E = typeof (_ == null ? void 0 : _.logprobs) == "number" ? _ == null ? void 0 : _.logprobs : (_ == null ? void 0 : _.logprobs) === !0 ? ll : void 0;
    E && M("message.output_text.logprobs");
    const D = (y = f == null ? void 0 : f.find(
      (F) => F.type === "provider-defined" && (F.id === "openai.web_search" || F.id === "openai.web_search_preview")
    )) == null ? void 0 : y.name;
    D && M("web_search_call.action.sources"), R("openai.code_interpreter") && M("code_interpreter_call.outputs");
    const Z = _ == null ? void 0 : _.store;
    Z === !1 && b.isReasoningModel && M("reasoning.encrypted_content");
    const q = {
      model: this.modelId,
      input: x,
      temperature: t,
      top_p: r,
      max_output_tokens: e,
      ...((v == null ? void 0 : v.type) === "json" || (_ == null ? void 0 : _.textVerbosity)) && {
        text: {
          ...(v == null ? void 0 : v.type) === "json" && {
            format: v.schema != null ? {
              type: "json_schema",
              strict: A,
              name: (w = v.name) != null ? w : "response",
              description: v.description,
              schema: v.schema
            } : { type: "json_object" }
          },
          ...(_ == null ? void 0 : _.textVerbosity) && {
            verbosity: _.textVerbosity
          }
        }
      },
      // provider options:
      conversation: _ == null ? void 0 : _.conversation,
      max_tool_calls: _ == null ? void 0 : _.maxToolCalls,
      metadata: _ == null ? void 0 : _.metadata,
      parallel_tool_calls: _ == null ? void 0 : _.parallelToolCalls,
      previous_response_id: _ == null ? void 0 : _.previousResponseId,
      store: Z,
      user: _ == null ? void 0 : _.user,
      instructions: _ == null ? void 0 : _.instructions,
      service_tier: _ == null ? void 0 : _.serviceTier,
      include: S,
      prompt_cache_key: _ == null ? void 0 : _.promptCacheKey,
      prompt_cache_retention: _ == null ? void 0 : _.promptCacheRetention,
      safety_identifier: _ == null ? void 0 : _.safetyIdentifier,
      top_logprobs: E,
      truncation: _ == null ? void 0 : _.truncation,
      // model-specific settings:
      ...b.isReasoningModel && ((_ == null ? void 0 : _.reasoningEffort) != null || (_ == null ? void 0 : _.reasoningSummary) != null) && {
        reasoning: {
          ...(_ == null ? void 0 : _.reasoningEffort) != null && {
            effort: _.reasoningEffort
          },
          ...(_ == null ? void 0 : _.reasoningSummary) != null && {
            summary: _.reasoningSummary
          }
        }
      }
    };
    b.isReasoningModel ? (q.temperature != null && (q.temperature = void 0, h.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), q.top_p != null && (q.top_p = void 0, h.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    }))) : ((_ == null ? void 0 : _.reasoningEffort) != null && h.push({
      type: "unsupported-setting",
      setting: "reasoningEffort",
      details: "reasoningEffort is not supported for non-reasoning models"
    }), (_ == null ? void 0 : _.reasoningSummary) != null && h.push({
      type: "unsupported-setting",
      setting: "reasoningSummary",
      details: "reasoningSummary is not supported for non-reasoning models"
    })), (_ == null ? void 0 : _.serviceTier) === "flex" && !b.supportsFlexProcessing && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), delete q.service_tier), (_ == null ? void 0 : _.serviceTier) === "priority" && !b.supportsPriorityProcessing && (h.push({
      type: "unsupported-setting",
      setting: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), delete q.service_tier);
    const {
      tools: z,
      toolChoice: te,
      toolWarnings: oe
    } = await Py({
      tools: f,
      toolChoice: m,
      strictJsonSchema: A
    });
    return {
      webSearchToolName: D,
      args: {
        ...q,
        tools: z,
        tool_choice: te
      },
      warnings: [...h, ...oe],
      store: Z
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u, c, f, m, v, d, g, y, w, h, b, _, x, C, A, S, M, R, E, D, Z;
    const {
      args: q,
      warnings: z,
      webSearchToolName: te
    } = await this.getArgs(e), oe = this.config.url({
      path: "/responses",
      modelId: this.modelId
    }), F = this.config.provider.replace(".responses", ""), {
      responseHeaders: pe,
      value: le,
      rawValue: ae
    } = await Ce({
      url: oe,
      headers: Ae(this.config.headers(), e.headers),
      body: q,
      failedResponseHandler: wt,
      successfulResponseHandler: Le(
        Ay
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    if (le.error)
      throw new ze({
        message: le.error.message,
        url: oe,
        requestBodyValues: q,
        statusCode: 400,
        responseHeaders: pe,
        responseBody: ae,
        isRetryable: !1
      });
    const P = [], j = [];
    let $ = !1;
    for (const T of le.output)
      switch (T.type) {
        case "reasoning": {
          T.summary.length === 0 && T.summary.push({ type: "summary_text", text: "" });
          for (const V of T.summary)
            P.push({
              type: "reasoning",
              text: V.text,
              providerMetadata: {
                [F]: {
                  itemId: T.id,
                  reasoningEncryptedContent: (t = T.encrypted_content) != null ? t : null
                }
              }
            });
          break;
        }
        case "image_generation_call": {
          P.push({
            type: "tool-call",
            toolCallId: T.id,
            toolName: "image_generation",
            input: "{}",
            providerExecuted: !0
          }), P.push({
            type: "tool-result",
            toolCallId: T.id,
            toolName: "image_generation",
            result: {
              result: T.result
            },
            providerExecuted: !0
          });
          break;
        }
        case "local_shell_call": {
          P.push({
            type: "tool-call",
            toolCallId: T.call_id,
            toolName: "local_shell",
            input: JSON.stringify({
              action: T.action
            }),
            providerMetadata: {
              [F]: {
                itemId: T.id
              }
            }
          });
          break;
        }
        case "message": {
          for (const V of T.content) {
            (r = (n = e.providerOptions) == null ? void 0 : n.openai) != null && r.logprobs && V.logprobs && j.push(V.logprobs), P.push({
              type: "text",
              text: V.text,
              providerMetadata: {
                [F]: {
                  itemId: T.id
                }
              }
            });
            for (const W of V.annotations)
              W.type === "url_citation" ? P.push({
                type: "source",
                sourceType: "url",
                id: (s = (a = (o = this.config).generateId) == null ? void 0 : a.call(o)) != null ? s : De(),
                url: W.url,
                title: W.title
              }) : W.type === "file_citation" ? P.push({
                type: "source",
                sourceType: "document",
                id: (c = (u = (i = this.config).generateId) == null ? void 0 : u.call(i)) != null ? c : De(),
                mediaType: "text/plain",
                title: (m = (f = W.quote) != null ? f : W.filename) != null ? m : "Document",
                filename: (v = W.filename) != null ? v : W.file_id,
                ...W.file_id ? {
                  providerMetadata: {
                    [F]: {
                      fileId: W.file_id
                    }
                  }
                } : {}
              }) : W.type === "container_file_citation" ? P.push({
                type: "source",
                sourceType: "document",
                id: (y = (g = (d = this.config).generateId) == null ? void 0 : g.call(d)) != null ? y : De(),
                mediaType: "text/plain",
                title: (h = (w = W.filename) != null ? w : W.file_id) != null ? h : "Document",
                filename: (b = W.filename) != null ? b : W.file_id,
                providerMetadata: {
                  [F]: {
                    fileId: W.file_id,
                    containerId: W.container_id,
                    ...W.index != null ? { index: W.index } : {}
                  }
                }
              }) : W.type === "file_path" && P.push({
                type: "source",
                sourceType: "document",
                id: (C = (x = (_ = this.config).generateId) == null ? void 0 : x.call(_)) != null ? C : De(),
                mediaType: "application/octet-stream",
                title: W.file_id,
                filename: W.file_id,
                providerMetadata: {
                  [F]: {
                    fileId: W.file_id,
                    ...W.index != null ? { index: W.index } : {}
                  }
                }
              });
          }
          break;
        }
        case "function_call": {
          $ = !0, P.push({
            type: "tool-call",
            toolCallId: T.call_id,
            toolName: T.name,
            input: T.arguments,
            providerMetadata: {
              [F]: {
                itemId: T.id
              }
            }
          });
          break;
        }
        case "web_search_call": {
          P.push({
            type: "tool-call",
            toolCallId: T.id,
            toolName: te ?? "web_search",
            input: JSON.stringify({}),
            providerExecuted: !0
          }), P.push({
            type: "tool-result",
            toolCallId: T.id,
            toolName: te ?? "web_search",
            result: ja(T.action),
            providerExecuted: !0
          });
          break;
        }
        case "computer_call": {
          P.push({
            type: "tool-call",
            toolCallId: T.id,
            toolName: "computer_use",
            input: "",
            providerExecuted: !0
          }), P.push({
            type: "tool-result",
            toolCallId: T.id,
            toolName: "computer_use",
            result: {
              type: "computer_use_tool_result",
              status: T.status || "completed"
            },
            providerExecuted: !0
          });
          break;
        }
        case "file_search_call": {
          P.push({
            type: "tool-call",
            toolCallId: T.id,
            toolName: "file_search",
            input: "{}",
            providerExecuted: !0
          }), P.push({
            type: "tool-result",
            toolCallId: T.id,
            toolName: "file_search",
            result: {
              queries: T.queries,
              results: (S = (A = T.results) == null ? void 0 : A.map((V) => ({
                attributes: V.attributes,
                fileId: V.file_id,
                filename: V.filename,
                score: V.score,
                text: V.text
              }))) != null ? S : null
            },
            providerExecuted: !0
          });
          break;
        }
        case "code_interpreter_call": {
          P.push({
            type: "tool-call",
            toolCallId: T.id,
            toolName: "code_interpreter",
            input: JSON.stringify({
              code: T.code,
              containerId: T.container_id
            }),
            providerExecuted: !0
          }), P.push({
            type: "tool-result",
            toolCallId: T.id,
            toolName: "code_interpreter",
            result: {
              outputs: T.outputs
            },
            providerExecuted: !0
          });
          break;
        }
      }
    const K = {
      [F]: {
        ...le.id != null ? { responseId: le.id } : {}
      }
    };
    j.length > 0 && (K[F].logprobs = j), typeof le.service_tier == "string" && (K[F].serviceTier = le.service_tier);
    const Q = le.usage;
    return {
      content: P,
      finishReason: $a({
        finishReason: (M = le.incomplete_details) == null ? void 0 : M.reason,
        hasFunctionCall: $
      }),
      usage: {
        inputTokens: Q.input_tokens,
        outputTokens: Q.output_tokens,
        totalTokens: Q.input_tokens + Q.output_tokens,
        reasoningTokens: (E = (R = Q.output_tokens_details) == null ? void 0 : R.reasoning_tokens) != null ? E : void 0,
        cachedInputTokens: (Z = (D = Q.input_tokens_details) == null ? void 0 : D.cached_tokens) != null ? Z : void 0
      },
      request: { body: q },
      response: {
        id: le.id,
        timestamp: new Date(le.created_at * 1e3),
        modelId: le.model,
        headers: pe,
        body: ae
      },
      providerMetadata: K,
      warnings: z
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
    }), i = this, u = this.config.provider.replace(".responses", "");
    let c = "unknown";
    const f = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, m = [];
    let v = null;
    const d = {}, g = [];
    let y = !1;
    const w = {};
    let h;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(b) {
            b.enqueue({ type: "stream-start", warnings: n });
          },
          transform(b, _) {
            var x, C, A, S, M, R, E, D, Z, q, z, te, oe, F, pe, le, ae, P, j, $, K, Q;
            if (e.includeRawChunks && _.enqueue({ type: "raw", rawValue: b.rawValue }), !b.success) {
              c = "error", _.enqueue({ type: "error", error: b.error });
              return;
            }
            const T = b.value;
            if (Pa(T))
              T.item.type === "function_call" ? (d[T.output_index] = {
                toolName: T.item.name,
                toolCallId: T.item.call_id
              }, _.enqueue({
                type: "tool-input-start",
                id: T.item.call_id,
                toolName: T.item.name
              })) : T.item.type === "web_search_call" ? (d[T.output_index] = {
                toolName: r ?? "web_search",
                toolCallId: T.item.id
              }, _.enqueue({
                type: "tool-input-start",
                id: T.item.id,
                toolName: r ?? "web_search",
                providerExecuted: !0
              }), _.enqueue({
                type: "tool-input-end",
                id: T.item.id
              }), _.enqueue({
                type: "tool-call",
                toolCallId: T.item.id,
                toolName: r ?? "web_search",
                input: JSON.stringify({}),
                providerExecuted: !0
              })) : T.item.type === "computer_call" ? (d[T.output_index] = {
                toolName: "computer_use",
                toolCallId: T.item.id
              }, _.enqueue({
                type: "tool-input-start",
                id: T.item.id,
                toolName: "computer_use",
                providerExecuted: !0
              })) : T.item.type === "code_interpreter_call" ? (d[T.output_index] = {
                toolName: "code_interpreter",
                toolCallId: T.item.id,
                codeInterpreter: {
                  containerId: T.item.container_id
                }
              }, _.enqueue({
                type: "tool-input-start",
                id: T.item.id,
                toolName: "code_interpreter",
                providerExecuted: !0
              }), _.enqueue({
                type: "tool-input-delta",
                id: T.item.id,
                delta: `{"containerId":"${T.item.container_id}","code":"`
              })) : T.item.type === "file_search_call" ? _.enqueue({
                type: "tool-call",
                toolCallId: T.item.id,
                toolName: "file_search",
                input: "{}",
                providerExecuted: !0
              }) : T.item.type === "image_generation_call" ? _.enqueue({
                type: "tool-call",
                toolCallId: T.item.id,
                toolName: "image_generation",
                input: "{}",
                providerExecuted: !0
              }) : T.item.type === "message" ? (g.splice(0, g.length), _.enqueue({
                type: "text-start",
                id: T.item.id,
                providerMetadata: {
                  [u]: {
                    itemId: T.item.id
                  }
                }
              })) : Pa(T) && T.item.type === "reasoning" && (w[T.item.id] = {
                encryptedContent: T.item.encrypted_content,
                summaryParts: { 0: "active" }
              }, _.enqueue({
                type: "reasoning-start",
                id: `${T.item.id}:0`,
                providerMetadata: {
                  [u]: {
                    itemId: T.item.id,
                    reasoningEncryptedContent: (x = T.item.encrypted_content) != null ? x : null
                  }
                }
              }));
            else if (Dy(T)) {
              if (T.item.type === "message")
                _.enqueue({
                  type: "text-end",
                  id: T.item.id,
                  providerMetadata: {
                    [u]: {
                      itemId: T.item.id,
                      ...g.length > 0 && {
                        annotations: g
                      }
                    }
                  }
                });
              else if (T.item.type === "function_call")
                d[T.output_index] = void 0, y = !0, _.enqueue({
                  type: "tool-input-end",
                  id: T.item.call_id
                }), _.enqueue({
                  type: "tool-call",
                  toolCallId: T.item.call_id,
                  toolName: T.item.name,
                  input: T.item.arguments,
                  providerMetadata: {
                    [u]: {
                      itemId: T.item.id
                    }
                  }
                });
              else if (T.item.type === "web_search_call")
                d[T.output_index] = void 0, _.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: r ?? "web_search",
                  result: ja(T.item.action),
                  providerExecuted: !0
                });
              else if (T.item.type === "computer_call")
                d[T.output_index] = void 0, _.enqueue({
                  type: "tool-input-end",
                  id: T.item.id
                }), _.enqueue({
                  type: "tool-call",
                  toolCallId: T.item.id,
                  toolName: "computer_use",
                  input: "",
                  providerExecuted: !0
                }), _.enqueue({
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
                d[T.output_index] = void 0, _.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: "file_search",
                  result: {
                    queries: T.item.queries,
                    results: (A = (C = T.item.results) == null ? void 0 : C.map((V) => ({
                      attributes: V.attributes,
                      fileId: V.file_id,
                      filename: V.filename,
                      score: V.score,
                      text: V.text
                    }))) != null ? A : null
                  },
                  providerExecuted: !0
                });
              else if (T.item.type === "code_interpreter_call")
                d[T.output_index] = void 0, _.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: "code_interpreter",
                  result: {
                    outputs: T.item.outputs
                  },
                  providerExecuted: !0
                });
              else if (T.item.type === "image_generation_call")
                _.enqueue({
                  type: "tool-result",
                  toolCallId: T.item.id,
                  toolName: "image_generation",
                  result: {
                    result: T.item.result
                  },
                  providerExecuted: !0
                });
              else if (T.item.type === "local_shell_call")
                d[T.output_index] = void 0, _.enqueue({
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
                    [u]: { itemId: T.item.id }
                  }
                });
              else if (T.item.type === "reasoning") {
                const V = w[T.item.id], W = Object.entries(
                  V.summaryParts
                ).filter(
                  ([qe, ge]) => ge === "active" || ge === "can-conclude"
                ).map(([qe]) => qe);
                for (const qe of W)
                  _.enqueue({
                    type: "reasoning-end",
                    id: `${T.item.id}:${qe}`,
                    providerMetadata: {
                      [u]: {
                        itemId: T.item.id,
                        reasoningEncryptedContent: (S = T.item.encrypted_content) != null ? S : null
                      }
                    }
                  });
                delete w[T.item.id];
              }
            } else if (Zy(T)) {
              const V = d[T.output_index];
              V != null && _.enqueue({
                type: "tool-input-delta",
                id: V.toolCallId,
                delta: T.delta
              });
            } else if (Ly(T)) {
              const V = d[T.output_index];
              V != null && _.enqueue({
                type: "tool-input-delta",
                id: V.toolCallId,
                // The delta is code, which is embedding in a JSON string.
                // To escape it, we use JSON.stringify and slice to remove the outer quotes.
                delta: JSON.stringify(T.delta).slice(1, -1)
              });
            } else if (Fy(T)) {
              const V = d[T.output_index];
              V != null && (_.enqueue({
                type: "tool-input-delta",
                id: V.toolCallId,
                delta: '"}'
              }), _.enqueue({
                type: "tool-input-end",
                id: V.toolCallId
              }), _.enqueue({
                type: "tool-call",
                toolCallId: V.toolCallId,
                toolName: "code_interpreter",
                input: JSON.stringify({
                  code: T.code,
                  containerId: V.codeInterpreter.containerId
                }),
                providerExecuted: !0
              }));
            } else if (Uy(T))
              v = T.response.id, _.enqueue({
                type: "response-metadata",
                id: T.response.id,
                timestamp: new Date(T.response.created_at * 1e3),
                modelId: T.response.model
              });
            else if (qy(T))
              _.enqueue({
                type: "text-delta",
                id: T.item_id,
                delta: T.delta
              }), (R = (M = e.providerOptions) == null ? void 0 : M.openai) != null && R.logprobs && T.logprobs && m.push(T.logprobs);
            else if (T.type === "response.reasoning_summary_part.added") {
              if (T.summary_index > 0) {
                const V = w[T.item_id];
                V.summaryParts[T.summary_index] = "active";
                for (const W of Object.keys(
                  V.summaryParts
                ))
                  V.summaryParts[W] === "can-conclude" && (_.enqueue({
                    type: "reasoning-end",
                    id: `${T.item_id}:${W}`,
                    providerMetadata: {
                      [u]: { itemId: T.item_id }
                    }
                  }), V.summaryParts[W] = "concluded");
                _.enqueue({
                  type: "reasoning-start",
                  id: `${T.item_id}:${T.summary_index}`,
                  providerMetadata: {
                    [u]: {
                      itemId: T.item_id,
                      reasoningEncryptedContent: (D = (E = w[T.item_id]) == null ? void 0 : E.encryptedContent) != null ? D : null
                    }
                  }
                });
              }
            } else T.type === "response.reasoning_summary_text.delta" ? _.enqueue({
              type: "reasoning-delta",
              id: `${T.item_id}:${T.summary_index}`,
              delta: T.delta,
              providerMetadata: {
                [u]: {
                  itemId: T.item_id
                }
              }
            }) : T.type === "response.reasoning_summary_part.done" ? o ? (_.enqueue({
              type: "reasoning-end",
              id: `${T.item_id}:${T.summary_index}`,
              providerMetadata: {
                [u]: { itemId: T.item_id }
              }
            }), w[T.item_id].summaryParts[T.summary_index] = "concluded") : w[T.item_id].summaryParts[T.summary_index] = "can-conclude" : zy(T) ? (c = $a({
              finishReason: (Z = T.response.incomplete_details) == null ? void 0 : Z.reason,
              hasFunctionCall: y
            }), f.inputTokens = T.response.usage.input_tokens, f.outputTokens = T.response.usage.output_tokens, f.totalTokens = T.response.usage.input_tokens + T.response.usage.output_tokens, f.reasoningTokens = (z = (q = T.response.usage.output_tokens_details) == null ? void 0 : q.reasoning_tokens) != null ? z : void 0, f.cachedInputTokens = (oe = (te = T.response.usage.input_tokens_details) == null ? void 0 : te.cached_tokens) != null ? oe : void 0, typeof T.response.service_tier == "string" && (h = T.response.service_tier)) : Vy(T) ? (g.push(T.annotation), T.annotation.type === "url_citation" ? _.enqueue({
              type: "source",
              sourceType: "url",
              id: (le = (pe = (F = i.config).generateId) == null ? void 0 : pe.call(F)) != null ? le : De(),
              url: T.annotation.url,
              title: T.annotation.title
            }) : T.annotation.type === "file_citation" && _.enqueue({
              type: "source",
              sourceType: "document",
              id: (j = (P = (ae = i.config).generateId) == null ? void 0 : P.call(ae)) != null ? j : De(),
              mediaType: "text/plain",
              title: (K = ($ = T.annotation.quote) != null ? $ : T.annotation.filename) != null ? K : "Document",
              filename: (Q = T.annotation.filename) != null ? Q : T.annotation.file_id,
              ...T.annotation.file_id ? {
                providerMetadata: {
                  [u]: {
                    fileId: T.annotation.file_id
                  }
                }
              } : {}
            })) : Gy(T) && _.enqueue({ type: "error", error: T });
          },
          flush(b) {
            const _ = {
              [u]: {
                responseId: v
              }
            };
            m.length > 0 && (_[u].logprobs = m), h !== void 0 && (_[u].serviceTier = h), b.enqueue({
              type: "finish",
              finishReason: c,
              usage: f,
              providerMetadata: _
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
      const f = {};
      for (const m in f) {
        const v = f[m];
        v !== void 0 && (c[m] = v);
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
    p({
      text: l(),
      language: l().nullish(),
      duration: k().nullish(),
      words: N(
        p({
          word: l(),
          start: k(),
          end: k()
        })
      ).nullish(),
      segments: N(
        p({
          id: k(),
          seek: k(),
          start: k(),
          end: k(),
          text: l(),
          tokens: N(k()),
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
    p({
      /**
       * Additional information to include in the transcription response.
       */
      include: N(l()).optional(),
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
      timestampGranularities: N(ee(["word", "segment"])).default(["segment"]).optional()
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
      for (const [c, f] of Object.entries(u))
        if (f != null)
          if (Array.isArray(f))
            for (const m of f)
              a.append(`${c}[]`, String(m));
          else
            a.append(c, String(f));
    }
    return {
      formData: a,
      warnings: r
    };
  }
  async doGenerate(e) {
    var t, n, r, o, a, s, i, u;
    const c = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), { formData: f, warnings: m } = await this.getArgs(e), {
      value: v,
      responseHeaders: d,
      rawValue: g
    } = await dh({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Ae(this.config.headers(), e.headers),
      formData: f,
      failedResponseHandler: wt,
      successfulResponseHandler: Le(
        Wy
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), y = v.language != null && v.language in qa ? qa[v.language] : void 0;
    return {
      text: v.text,
      segments: (i = (s = (o = v.segments) == null ? void 0 : o.map((w) => ({
        text: w.text,
        startSecond: w.start,
        endSecond: w.end
      }))) != null ? s : (a = v.words) == null ? void 0 : a.map((w) => ({
        text: w.word,
        startSecond: w.start,
        endSecond: w.end
      }))) != null ? i : [],
      language: y,
      durationInSeconds: (u = v.duration) != null ? u : void 0,
      warnings: m,
      response: {
        timestamp: c,
        modelId: this.modelId,
        headers: d,
        body: g
      }
    };
  }
}, Xy = "2.0.76";
function Qy(e = {}) {
  var t, n;
  const r = (t = An(
    Qt({
      settingValue: e.baseURL,
      environmentVariableName: "OPENAI_BASE_URL"
    })
  )) != null ? t : "https://api.openai.com/v1", o = (n = e.name) != null ? n : "openai", a = () => Ze(
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
  ), s = (y) => new Vv(y, {
    provider: `${o}.chat`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), i = (y) => new Xv(y, {
    provider: `${o}.completion`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), u = (y) => new ty(y, {
    provider: `${o}.embedding`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), c = (y) => new ay(y, {
    provider: `${o}.image`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), f = (y) => new Yy(y, {
    provider: `${o}.transcription`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), m = (y) => new Hy(y, {
    provider: `${o}.speech`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch
  }), v = (y) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return d(y);
  }, d = (y) => new jy(y, {
    provider: `${o}.responses`,
    url: ({ path: w }) => `${r}${w}`,
    headers: a,
    fetch: e.fetch,
    fileIdPrefixes: ["file-"]
  }), g = function(y) {
    return v(y);
  };
  return g.languageModel = v, g.chat = s, g.completion = i, g.responses = d, g.embedding = u, g.textEmbedding = u, g.textEmbeddingModel = u, g.image = c, g.imageModel = c, g.transcription = f, g.transcriptionModel = f, g.speech = m, g.speechModel = m, g.tools = My, g;
}
Qy();
var Ar, Da;
function e_() {
  if (Da) return Ar;
  Da = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, o = (f, m) => {
    for (var v in m)
      e(f, v, { get: m[v], enumerable: !0 });
  }, a = (f, m, v, d) => {
    if (m && typeof m == "object" || typeof m == "function")
      for (let g of n(m))
        !r.call(f, g) && g !== v && e(f, g, { get: () => m[g], enumerable: !(d = t(m, g)) || d.enumerable });
    return f;
  }, s = (f) => a(e({}, "__esModule", { value: !0 }), f), i = {};
  o(i, {
    SYMBOL_FOR_REQ_CONTEXT: () => u,
    getContext: () => c
  }), Ar = s(i);
  const u = Symbol.for("@vercel/request-context");
  function c() {
    var m, v;
    return ((v = (m = globalThis[u]) == null ? void 0 : m.get) == null ? void 0 : v.call(m)) ?? {};
  }
  return Ar;
}
var $r, za;
function t_() {
  if (za) return $r;
  za = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, o = (m, v) => {
    for (var d in v)
      e(m, d, { get: v[d], enumerable: !0 });
  }, a = (m, v, d, g) => {
    if (v && typeof v == "object" || typeof v == "function")
      for (let y of n(v))
        !r.call(m, y) && y !== d && e(m, y, { get: () => v[y], enumerable: !(g = t(v, y)) || g.enumerable });
    return m;
  }, s = (m) => a(e({}, "__esModule", { value: !0 }), m), i = {};
  o(i, {
    getContext: () => u.getContext,
    getVercelOidcToken: () => c,
    getVercelOidcTokenSync: () => f
  }), $r = s(i);
  var u = e_();
  async function c() {
    return "";
  }
  function f() {
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
    p({
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
    p({
      error: p({
        message: l(),
        type: l().nullish(),
        param: de().nullish(),
        code: ie([l(), k()]).nullish()
      })
    })
  )
);
function At(e, t) {
  var n;
  return ot.isInstance(e) ? e : ze.isInstance(e) ? is({
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
  const t = await st({
    value: e[_l],
    schema: h_
  });
  return t.success ? t.value : void 0;
}
var h_ = Re(
  () => U(ie([I("api-key"), I("oidc")]))
), ls = class {
  constructor(e) {
    this.config = e;
  }
  async getAvailableModels() {
    try {
      const { value: e } = await pa({
        url: `${this.config.baseURL}/config`,
        headers: await Oe(this.config.headers()),
        successfulResponseHandler: Le(
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
        successfulResponseHandler: Le(
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
    p({
      models: N(
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
            specificationVersion: I("v2"),
            provider: l(),
            modelId: l()
          }),
          modelType: ee(["language", "embedding", "image"]).nullish()
        })
      )
    })
  )
), v_ = Re(
  () => U(
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
        successfulResponseHandler: Le(pt()),
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
        successfulResponseHandler: Le(
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
    p({
      embeddings: N(N(k())),
      usage: p({ tokens: k() }).nullish(),
      providerMetadata: Pe(l(), Pe(l(), de())).optional()
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
        responseHeaders: f,
        value: m,
        rawValue: v
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
        successfulResponseHandler: Le(
          I_
        ),
        failedResponseHandler: bt({
          errorSchema: pt(),
          errorToMessage: (d) => d
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
          headers: f
        }
      };
    } catch (f) {
      throw At(f, await an(c));
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
  images: N(de()).optional()
}).catchall(de()), I_ = p({
  images: N(l()),
  // Always base64 strings over the wire
  warnings: N(
    p({
      type: I("other"),
      message: l()
    })
  ).optional(),
  providerMetadata: Pe(l(), x_).optional()
});
async function k_() {
  var e;
  return (e = ul.getContext().headers) == null ? void 0 : e["x-vercel-id"];
}
var T_ = "2.0.18", S_ = "0.0.1";
function E_(e = {}) {
  var t, n;
  let r = null, o = null;
  const a = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5;
  let s = 0;
  const i = (n = An(e.baseURL)) != null ? n : "https://ai-gateway.vercel.sh/v1/ai", u = async () => {
    const g = await M_(e);
    if (g)
      return Ze(
        {
          Authorization: `Bearer ${g.token}`,
          "ai-gateway-protocol-version": S_,
          [_l]: g.authMethod,
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
    const g = Qt({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    }), y = Qt({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    }), w = Qt({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const h = await k_();
      return {
        ...g && { "ai-o11y-deployment-id": g },
        ...y && { "ai-o11y-environment": y },
        ...w && { "ai-o11y-region": w },
        ...h && { "ai-o11y-request-id": h }
      };
    };
  }, f = (g) => new y_(g, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), m = async () => {
    var g, y, w;
    const h = (w = (y = (g = e._internal) == null ? void 0 : g.currentDate) == null ? void 0 : y.call(g).getTime()) != null ? w : Date.now();
    return (!r || h - s > a) && (s = h, r = new ls({
      baseURL: i,
      headers: u,
      fetch: e.fetch
    }).getAvailableModels().then((b) => (o = b, b)).catch(async (b) => {
      throw await At(
        b,
        await an(await u())
      );
    })), o ? Promise.resolve(o) : r;
  }, v = async () => new ls({
    baseURL: i,
    headers: u,
    fetch: e.fetch
  }).getCredits().catch(async (g) => {
    throw await At(
      g,
      await an(await u())
    );
  }), d = function(g) {
    if (new.target)
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    return f(g);
  };
  return d.getAvailableModels = m, d.getCredits = v, d.imageModel = (g) => new w_(g, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), d.languageModel = f, d.textEmbeddingModel = (g) => new __(g, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), d;
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
    var f = {
      major: +c[1],
      minor: +c[2],
      patch: +c[3],
      prerelease: c[4]
    };
    return f.prerelease != null || o.major !== f.major ? a(u) : o.major === 0 ? o.minor === f.minor && o.patch <= f.patch ? s(u) : a(u) : o.minor <= f.minor ? s(u) : a(u);
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
        var f = Ut("diag"), m = q_((i = a.logLevel) !== null && i !== void 0 ? i : nt.INFO, o);
        if (f && !a.suppressOverrideMessage) {
          var v = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          f.warn("Current logger will be overwritten from " + v), m.warn("Current logger will overwrite one already registered from " + v);
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
        var u = s ?? qr.active(), c = this.startSpan(t, a, u), f = So(u, c);
        return qr.with(f, i, void 0, c);
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
}, Ol = "AI_InvalidArgumentError", Nl = `vercel.ai.error.${Ol}`, Jb = Symbol.for(Nl), Al, xe = class extends H {
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
var mt = "5.0.106", bu = async ({ url: e }) => {
  var t;
  const n = e.toString();
  try {
    const r = await fetch(n, {
      headers: Ze(
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
var wu = ie([
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
      throw new xe({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer"
      });
    if (e < 1)
      throw new xe({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new xe({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (n != null && typeof n != "number")
    throw new xe({
      parameter: "topP",
      value: n,
      message: "topP must be a number"
    });
  if (r != null && typeof r != "number")
    throw new xe({
      parameter: "topK",
      value: r,
      message: "topK must be a number"
    });
  if (o != null && typeof o != "number")
    throw new xe({
      parameter: "presencePenalty",
      value: o,
      message: "presencePenalty must be a number"
    });
  if (a != null && typeof a != "number")
    throw new xe({
      parameter: "frequencyPenalty",
      value: a,
      message: "frequencyPenalty must be a number"
    });
  if (s != null && !Number.isInteger(s))
    throw new xe({
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
  () => ie([
    _m(),
    l(),
    k(),
    J(),
    Pe(l(), Mn),
    N(Mn)
  ])
), fe = Pe(
  l(),
  Pe(l(), Mn)
), ku = p({
  type: I("text"),
  text: l(),
  providerOptions: fe.optional()
}), Iw = p({
  type: I("image"),
  image: ie([wu, Yn(URL)]),
  mediaType: l().optional(),
  providerOptions: fe.optional()
}), Tu = p({
  type: I("file"),
  data: ie([wu, Yn(URL)]),
  filename: l().optional(),
  mediaType: l(),
  providerOptions: fe.optional()
}), kw = p({
  type: I("reasoning"),
  text: l(),
  providerOptions: fe.optional()
}), Tw = p({
  type: I("tool-call"),
  toolCallId: l(),
  toolName: l(),
  input: de(),
  providerOptions: fe.optional(),
  providerExecuted: J().optional()
}), Sw = me("type", [
  p({
    type: I("text"),
    value: l()
  }),
  p({
    type: I("json"),
    value: Mn
  }),
  p({
    type: I("error-text"),
    value: l()
  }),
  p({
    type: I("error-json"),
    value: Mn
  }),
  p({
    type: I("content"),
    value: N(
      ie([
        p({
          type: I("text"),
          text: l()
        }),
        p({
          type: I("media"),
          data: l(),
          mediaType: l()
        })
      ])
    )
  })
]), Su = p({
  type: I("tool-result"),
  toolCallId: l(),
  toolName: l(),
  output: Sw,
  providerOptions: fe.optional()
}), Eu = p(
  {
    role: I("system"),
    content: l(),
    providerOptions: fe.optional()
  }
), P0 = Eu, Cu = p({
  role: I("user"),
  content: ie([
    l(),
    N(ie([ku, Iw, Tu]))
  ]),
  providerOptions: fe.optional()
}), j0 = Cu, Mu = p({
  role: I("assistant"),
  content: ie([
    l(),
    N(
      ie([
        ku,
        Tu,
        kw,
        Tw,
        Su
      ])
    )
  ]),
  providerOptions: fe.optional()
}), q0 = Mu, Ru = p({
  role: I("tool"),
  content: N(Su),
  providerOptions: fe.optional()
}), D0 = Ru, Ou = ie([
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
  const n = await st({
    value: t,
    schema: N(Ou)
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
function ye({
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
    if (s instanceof Error && ze.isInstance(s) && s.isRetryable === !0 && c <= t)
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
      throw new xe({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new xe({
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
      error: a,
      providerMetadata: e.providerMetadata
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
  const o = on(r.inputSchema), a = e.input.trim() === "" ? await st({ value: {}, schema: o }) : await Nt({ text: e.input, schema: o });
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
  experimental_output: f,
  experimental_telemetry: m,
  providerOptions: v,
  experimental_activeTools: d,
  activeTools: g = d,
  experimental_prepareStep: y,
  prepareStep: w = y,
  experimental_repairToolCall: h,
  experimental_download: b,
  experimental_context: _,
  _internal: {
    generateId: x = Nw,
    currentDate: C = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: A,
  ...S
}) {
  const M = sn(e), R = rr(c), { maxRetries: E, retry: D } = Ct({
    maxRetries: s,
    abortSignal: i
  }), Z = Lt(S), q = Ze(
    u ?? {},
    `ai/${mt}`
  ), z = dn({
    model: M,
    telemetry: m,
    headers: q,
    settings: { ...Z, maxRetries: E }
  }), te = await gr({
    system: r,
    prompt: o,
    messages: a
  }), oe = pn(m);
  try {
    return await Ke({
      name: "ai.generateText",
      attributes: ye({
        telemetry: m,
        attributes: {
          ...We({
            operationId: "ai.generateText",
            telemetry: m
          }),
          ...z,
          // model:
          "ai.model.provider": M.provider,
          "ai.model.id": M.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: r, prompt: o, messages: a })
          }
        }
      }),
      tracer: oe,
      fn: async (F) => {
        var pe, le, ae, P, j, $, K;
        const Q = Lt(S);
        let T, V = [], W = [];
        const qe = [], ge = [];
        do {
          const we = [
            ...te.messages,
            ...qe
          ], ue = await (w == null ? void 0 : w({
            model: M,
            steps: ge,
            stepNumber: ge.length,
            messages: we
          })), re = sn(
            (pe = ue == null ? void 0 : ue.model) != null ? pe : M
          ), Y = await hr({
            prompt: {
              system: (le = ue == null ? void 0 : ue.system) != null ? le : te.system,
              messages: (ae = ue == null ? void 0 : ue.messages) != null ? ae : we
            },
            supportedUrls: await re.supportedUrls,
            download: b
          }), { toolChoice: B, tools: je } = Iu({
            tools: t,
            toolChoice: (P = ue == null ? void 0 : ue.toolChoice) != null ? P : n,
            activeTools: (j = ue == null ? void 0 : ue.activeTools) != null ? j : g
          });
          T = await D(
            () => {
              var ve;
              return Ke({
                name: "ai.generateText.doGenerate",
                attributes: ye({
                  telemetry: m,
                  attributes: {
                    ...We({
                      operationId: "ai.generateText.doGenerate",
                      telemetry: m
                    }),
                    ...z,
                    // model:
                    "ai.model.provider": re.provider,
                    "ai.model.id": re.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: () => yr(Y)
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: () => je == null ? void 0 : je.map((vt) => JSON.stringify(vt))
                    },
                    "ai.prompt.toolChoice": {
                      input: () => B != null ? JSON.stringify(B) : void 0
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": re.provider,
                    "gen_ai.request.model": re.modelId,
                    "gen_ai.request.frequency_penalty": S.frequencyPenalty,
                    "gen_ai.request.max_tokens": S.maxOutputTokens,
                    "gen_ai.request.presence_penalty": S.presencePenalty,
                    "gen_ai.request.stop_sequences": S.stopSequences,
                    "gen_ai.request.temperature": (ve = S.temperature) != null ? ve : void 0,
                    "gen_ai.request.top_k": S.topK,
                    "gen_ai.request.top_p": S.topP
                  }
                }),
                tracer: oe,
                fn: async (vt) => {
                  var fn, Mt, tt, It, mn, Ht, Wt, Dn;
                  const Ue = await re.doGenerate({
                    ...Q,
                    tools: je,
                    toolChoice: B,
                    responseFormat: f == null ? void 0 : f.responseFormat,
                    prompt: Y,
                    providerOptions: v,
                    abortSignal: i,
                    headers: q
                  }), kt = {
                    id: (Mt = (fn = Ue.response) == null ? void 0 : fn.id) != null ? Mt : x(),
                    timestamp: (It = (tt = Ue.response) == null ? void 0 : tt.timestamp) != null ? It : C(),
                    modelId: (Ht = (mn = Ue.response) == null ? void 0 : mn.modelId) != null ? Ht : re.modelId,
                    headers: (Wt = Ue.response) == null ? void 0 : Wt.headers,
                    body: (Dn = Ue.response) == null ? void 0 : Dn.body
                  };
                  return vt.setAttributes(
                    ye({
                      telemetry: m,
                      attributes: {
                        "ai.response.finishReason": Ue.finishReason,
                        "ai.response.text": {
                          output: () => no(Ue.content)
                        },
                        "ai.response.toolCalls": {
                          output: () => {
                            const Tt = gs(Ue.content);
                            return Tt == null ? void 0 : JSON.stringify(Tt);
                          }
                        },
                        "ai.response.id": kt.id,
                        "ai.response.model": kt.modelId,
                        "ai.response.timestamp": kt.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          Ue.providerMetadata
                        ),
                        // TODO rename telemetry attributes to inputTokens and outputTokens
                        "ai.usage.promptTokens": Ue.usage.inputTokens,
                        "ai.usage.completionTokens": Ue.usage.outputTokens,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [Ue.finishReason],
                        "gen_ai.response.id": kt.id,
                        "gen_ai.response.model": kt.modelId,
                        "gen_ai.usage.input_tokens": Ue.usage.inputTokens,
                        "gen_ai.usage.output_tokens": Ue.usage.outputTokens
                      }
                    })
                  ), { ...Ue, response: kt };
                }
              });
            }
          );
          const et = await Promise.all(
            T.content.filter(
              (ve) => ve.type === "tool-call"
            ).map(
              (ve) => $u({
                toolCall: ve,
                tools: t,
                repairToolCall: h,
                system: r,
                messages: we
              })
            )
          );
          for (const ve of et) {
            if (ve.invalid)
              continue;
            const vt = t[ve.toolName];
            (vt == null ? void 0 : vt.onInputAvailable) != null && await vt.onInputAvailable({
              input: ve.input,
              toolCallId: ve.toolCallId,
              messages: we,
              abortSignal: i,
              experimental_context: _
            });
          }
          const L = et.filter(
            (ve) => ve.invalid && ve.dynamic
          );
          W = [];
          for (const ve of L)
            W.push({
              type: "tool-error",
              toolCallId: ve.toolCallId,
              toolName: ve.toolName,
              input: ve.input,
              error: cr(ve.error),
              dynamic: !0
            });
          V = et.filter(
            (ve) => !ve.providerExecuted
          ), t != null && W.push(
            ...await $w({
              toolCalls: V.filter(
                (ve) => !ve.invalid
              ),
              tools: t,
              tracer: oe,
              telemetry: m,
              messages: we,
              abortSignal: i,
              experimental_context: _
            })
          );
          const ce = jw({
            content: T.content,
            toolCalls: et,
            toolOutputs: W
          });
          qe.push(
            ...ro({
              content: ce,
              tools: t
            })
          );
          const gt = new Pu({
            content: ce,
            finishReason: T.finishReason,
            usage: T.usage,
            warnings: T.warnings,
            providerMetadata: T.providerMetadata,
            request: ($ = T.request) != null ? $ : {},
            response: {
              ...T.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(qe)
            }
          });
          Jt((K = T.warnings) != null ? K : []), ge.push(gt), await (A == null ? void 0 : A(gt));
        } while (
          // there are tool calls:
          V.length > 0 && // all current tool calls have outputs (incl. execution errors):
          W.length === V.length && // continue until a stop condition is met:
          !await qu({ stopConditions: R, steps: ge })
        );
        F.setAttributes(
          ye({
            telemetry: m,
            attributes: {
              "ai.response.finishReason": T.finishReason,
              "ai.response.text": {
                output: () => no(T.content)
              },
              "ai.response.toolCalls": {
                output: () => {
                  const we = gs(T.content);
                  return we == null ? void 0 : JSON.stringify(we);
                }
              },
              "ai.response.providerMetadata": JSON.stringify(
                T.providerMetadata
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": T.usage.inputTokens,
              "ai.usage.completionTokens": T.usage.outputTokens
            }
          })
        );
        const $e = ge[ge.length - 1];
        let Qe;
        return $e.finishReason === "stop" && (Qe = await (f == null ? void 0 : f.parseOutput(
          { text: $e.text },
          {
            response: $e.response,
            usage: $e.usage,
            finishReason: $e.finishReason
          }
        ))), new Pw({
          steps: ge,
          resolvedOutput: Qe
        });
      }
    });
  } catch (F) {
    throw vr(F);
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
    e.map(async ({ toolCallId: u, toolName: c, input: f }) => {
      const m = t[c];
      if ((m == null ? void 0 : m.execute) != null)
        return Ke({
          name: "ai.toolCall",
          attributes: ye({
            telemetry: r,
            attributes: {
              ...We({
                operationId: "ai.toolCall",
                telemetry: r
              }),
              "ai.toolCall.name": c,
              "ai.toolCall.id": u,
              "ai.toolCall.args": {
                output: () => JSON.stringify(f)
              }
            }
          }),
          tracer: n,
          fn: async (v) => {
            try {
              const d = Bi({
                execute: m.execute.bind(m),
                input: f,
                options: {
                  toolCallId: u,
                  messages: o,
                  abortSignal: a,
                  experimental_context: s
                }
              });
              let g;
              for await (const y of d)
                y.type === "final" && (g = y.output);
              try {
                v.setAttributes(
                  ye({
                    telemetry: r,
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
                toolName: c,
                input: f,
                output: g,
                dynamic: m.type === "dynamic"
              };
            } catch (d) {
              return Mo(v, d), {
                type: "tool-error",
                toolCallId: u,
                toolName: c,
                input: f,
                error: d,
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
        e.write(u) || await new Promise((f) => {
          e.once("drain", f);
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
    ie([
      Ee({
        type: I("text-start"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("text-delta"),
        id: l(),
        delta: l(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("text-end"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("error"),
        errorText: l()
      }),
      Ee({
        type: I("tool-input-start"),
        toolCallId: l(),
        toolName: l(),
        providerExecuted: J().optional(),
        dynamic: J().optional()
      }),
      Ee({
        type: I("tool-input-delta"),
        toolCallId: l(),
        inputTextDelta: l()
      }),
      Ee({
        type: I("tool-input-available"),
        toolCallId: l(),
        toolName: l(),
        input: de(),
        providerExecuted: J().optional(),
        providerMetadata: fe.optional(),
        dynamic: J().optional()
      }),
      Ee({
        type: I("tool-input-error"),
        toolCallId: l(),
        toolName: l(),
        input: de(),
        providerExecuted: J().optional(),
        providerMetadata: fe.optional(),
        dynamic: J().optional(),
        errorText: l()
      }),
      Ee({
        type: I("tool-output-available"),
        toolCallId: l(),
        output: de(),
        providerExecuted: J().optional(),
        dynamic: J().optional(),
        preliminary: J().optional()
      }),
      Ee({
        type: I("tool-output-error"),
        toolCallId: l(),
        errorText: l(),
        providerExecuted: J().optional(),
        dynamic: J().optional()
      }),
      Ee({
        type: I("reasoning-start"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("reasoning-delta"),
        id: l(),
        delta: l(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("reasoning-end"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("source-url"),
        sourceId: l(),
        url: l(),
        title: l().optional(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("source-document"),
        sourceId: l(),
        mediaType: l(),
        title: l(),
        filename: l().optional(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: I("file"),
        url: l(),
        mediaType: l(),
        providerMetadata: fe.optional()
      }),
      Ee({
        type: Di(
          (e) => typeof e == "string" && e.startsWith("data-"),
          { message: 'Type must start with "data-"' }
        ),
        id: l().optional(),
        data: de(),
        transient: J().optional()
      }),
      Ee({
        type: I("start-step")
      }),
      Ee({
        type: I("finish-step")
      }),
      Ee({
        type: I("start"),
        messageId: l().optional(),
        messageMetadata: de().optional()
      }),
      Ee({
        type: I("finish"),
        finishReason: ee([
          "stop",
          "length",
          "content-filter",
          "tool-calls",
          "error",
          "other",
          "unknown"
        ]).optional(),
        messageMetadata: de().optional()
      }),
      Ee({
        type: I("abort")
      }),
      Ee({
        type: I("message-metadata"),
        messageMetadata: de()
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
  function o(u, c, f) {
    switch (u) {
      case '"': {
        n = c, t.pop(), t.push(f), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = c, r = c, t.pop(), t.push(f), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(f), t.push("INSIDE_NUMBER");
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
        n = c, t.pop(), t.push(f), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = c, t.pop(), t.push(f), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = c, t.pop(), t.push(f), t.push("INSIDE_ARRAY_START");
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
        const f = e.substring(r, e.length);
        "true".startsWith(f) ? i += "true".slice(f.length) : "false".startsWith(f) ? i += "false".slice(f.length) : "null".startsWith(f) && (i += "null".slice(f.length));
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
        await r(async ({ state: c, write: f }) => {
          var m, v, d, g;
          function y(x) {
            const A = c.message.parts.filter(en).find(
              (S) => S.toolCallId === x
            );
            if (A == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return A;
          }
          function w(x) {
            const A = c.message.parts.filter(
              (S) => S.type === "dynamic-tool"
            ).find(
              (S) => S.toolCallId === x
            );
            if (A == null)
              throw new Error(
                "tool-output-error must be preceded by a tool-input-available"
              );
            return A;
          }
          function h(x) {
            var C;
            const A = c.message.parts.find(
              (R) => en(R) && R.toolCallId === x.toolCallId
            ), S = x, M = A;
            A != null ? (A.state = x.state, M.input = S.input, M.output = S.output, M.errorText = S.errorText, M.rawInput = S.rawInput, M.preliminary = S.preliminary, M.providerExecuted = (C = S.providerExecuted) != null ? C : A.providerExecuted, S.providerMetadata != null && A.state === "input-available" && (A.callProviderMetadata = S.providerMetadata)) : c.message.parts.push({
              type: `tool-${x.toolName}`,
              toolCallId: x.toolCallId,
              state: x.state,
              input: S.input,
              output: S.output,
              rawInput: S.rawInput,
              errorText: S.errorText,
              providerExecuted: S.providerExecuted,
              preliminary: S.preliminary,
              ...S.providerMetadata != null ? { callProviderMetadata: S.providerMetadata } : {}
            });
          }
          function b(x) {
            var C, A;
            const S = c.message.parts.find(
              (E) => E.type === "dynamic-tool" && E.toolCallId === x.toolCallId
            ), M = x, R = S;
            S != null ? (S.state = x.state, R.toolName = x.toolName, R.input = M.input, R.output = M.output, R.errorText = M.errorText, R.rawInput = (C = M.rawInput) != null ? C : R.rawInput, R.preliminary = M.preliminary, R.providerExecuted = (A = M.providerExecuted) != null ? A : S.providerExecuted, M.providerMetadata != null && S.state === "input-available" && (S.callProviderMetadata = M.providerMetadata)) : c.message.parts.push({
              type: "dynamic-tool",
              toolName: x.toolName,
              toolCallId: x.toolCallId,
              state: x.state,
              input: M.input,
              output: M.output,
              errorText: M.errorText,
              preliminary: M.preliminary,
              providerExecuted: M.providerExecuted,
              ...M.providerMetadata != null ? { callProviderMetadata: M.providerMetadata } : {}
            });
          }
          async function _(x) {
            if (x != null) {
              const C = c.message.metadata != null ? Ro(c.message.metadata, x) : x;
              t != null && await Ne({
                value: C,
                schema: t
              }), c.message.metadata = C;
            }
          }
          switch (i.type) {
            case "text-start": {
              const x = {
                type: "text",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              c.activeTextParts[i.id] = x, c.message.parts.push(x), f();
              break;
            }
            case "text-delta": {
              const x = c.activeTextParts[i.id];
              x.text += i.delta, x.providerMetadata = (m = i.providerMetadata) != null ? m : x.providerMetadata, f();
              break;
            }
            case "text-end": {
              const x = c.activeTextParts[i.id];
              x.state = "done", x.providerMetadata = (v = i.providerMetadata) != null ? v : x.providerMetadata, delete c.activeTextParts[i.id], f();
              break;
            }
            case "reasoning-start": {
              const x = {
                type: "reasoning",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              c.activeReasoningParts[i.id] = x, c.message.parts.push(x), f();
              break;
            }
            case "reasoning-delta": {
              const x = c.activeReasoningParts[i.id];
              x.text += i.delta, x.providerMetadata = (d = i.providerMetadata) != null ? d : x.providerMetadata, f();
              break;
            }
            case "reasoning-end": {
              const x = c.activeReasoningParts[i.id];
              x.providerMetadata = (g = i.providerMetadata) != null ? g : x.providerMetadata, x.state = "done", delete c.activeReasoningParts[i.id], f();
              break;
            }
            case "file": {
              c.message.parts.push({
                type: "file",
                mediaType: i.mediaType,
                url: i.url
              }), f();
              break;
            }
            case "source-url": {
              c.message.parts.push({
                type: "source-url",
                sourceId: i.sourceId,
                url: i.url,
                title: i.title,
                providerMetadata: i.providerMetadata
              }), f();
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
              }), f();
              break;
            }
            case "tool-input-start": {
              const x = c.message.parts.filter(en);
              c.partialToolCalls[i.toolCallId] = {
                text: "",
                toolName: i.toolName,
                index: x.length,
                dynamic: i.dynamic
              }, i.dynamic ? b({
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
              }), f();
              break;
            }
            case "tool-input-delta": {
              const x = c.partialToolCalls[i.toolCallId];
              x.text += i.inputTextDelta;
              const { value: C } = await Oo(
                x.text
              );
              x.dynamic ? b({
                toolCallId: i.toolCallId,
                toolName: x.toolName,
                state: "input-streaming",
                input: C
              }) : h({
                toolCallId: i.toolCallId,
                toolName: x.toolName,
                state: "input-streaming",
                input: C
              }), f();
              break;
            }
            case "tool-input-available": {
              i.dynamic ? b({
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
              }), f(), a && !i.providerExecuted && await a({
                toolCall: i
              });
              break;
            }
            case "tool-input-error": {
              i.dynamic ? b({
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
              }), f();
              break;
            }
            case "tool-output-available": {
              if (i.dynamic) {
                const x = w(
                  i.toolCallId
                );
                b({
                  toolCallId: i.toolCallId,
                  toolName: x.toolName,
                  state: "output-available",
                  input: x.input,
                  output: i.output,
                  preliminary: i.preliminary
                });
              } else {
                const x = y(i.toolCallId);
                h({
                  toolCallId: i.toolCallId,
                  toolName: or(x),
                  state: "output-available",
                  input: x.input,
                  output: i.output,
                  providerExecuted: i.providerExecuted,
                  preliminary: i.preliminary
                });
              }
              f();
              break;
            }
            case "tool-output-error": {
              if (i.dynamic) {
                const x = w(
                  i.toolCallId
                );
                b({
                  toolCallId: i.toolCallId,
                  toolName: x.toolName,
                  state: "output-error",
                  input: x.input,
                  errorText: i.errorText,
                  providerExecuted: i.providerExecuted
                });
              } else {
                const x = y(i.toolCallId);
                h({
                  toolCallId: i.toolCallId,
                  toolName: or(x),
                  state: "output-error",
                  input: x.input,
                  rawInput: x.rawInput,
                  errorText: i.errorText,
                  providerExecuted: i.providerExecuted
                });
              }
              f();
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
              i.messageId != null && (c.message.id = i.messageId), await _(i.messageMetadata), (i.messageId != null || i.messageMetadata != null) && f();
              break;
            }
            case "finish": {
              i.finishReason != null && (c.finishReason = i.finishReason), await _(i.messageMetadata), i.messageMetadata != null && f();
              break;
            }
            case "message-metadata": {
              await _(i.messageMetadata), i.messageMetadata != null && f();
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
                const x = i;
                if (x.transient) {
                  s == null || s(x);
                  break;
                }
                const C = x.id != null ? c.message.parts.find(
                  (A) => x.type === A.type && x.id === A.id
                ) : void 0;
                C != null ? C.data = x.data : c.message.parts.push(x), s == null || s(x), f();
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
      transform(v, d) {
        if (v.type === "start") {
          const g = v;
          g.messageId == null && e != null && (g.messageId = e);
        }
        v.type === "abort" && (s = !0), d.enqueue(v);
      }
    })
  );
  if (n == null)
    return i;
  const u = Ao({
    lastMessage: a ? structuredClone(a) : void 0,
    messageId: e ?? ""
    // will be overridden by the stream
  }), c = async (v) => {
    await v({ state: u, write: () => {
    } });
  };
  let f = !1;
  const m = async () => {
    if (f || !n)
      return;
    f = !0;
    const v = u.message.id === (a == null ? void 0 : a.id);
    await n({
      isAborted: s,
      isContinuation: v,
      responseMessage: u.message,
      messages: [
        ...v ? t.slice(0, -1) : t,
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
      transform(v, d) {
        d.enqueue(v);
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
  const f = new ReadableStream({
    start(h) {
      c = h;
    }
  }), m = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map();
  let d = !1, g;
  function y() {
    d && m.size === 0 && (g != null && c.enqueue(g), c.close());
  }
  const w = new TransformStream({
    async transform(h, b) {
      const _ = h.type;
      switch (_) {
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
          b.enqueue(h);
          break;
        }
        case "file": {
          b.enqueue({
            type: "file",
            file: new Ow({
              data: h.data,
              mediaType: h.mediaType
            })
          });
          break;
        }
        case "finish": {
          g = {
            type: "finish",
            finishReason: h.finishReason,
            usage: h.usage,
            providerMetadata: h.providerMetadata
          };
          break;
        }
        case "tool-call": {
          try {
            const x = await $u({
              toolCall: h,
              tools: e,
              repairToolCall: i,
              system: o,
              messages: a
            });
            if (b.enqueue(x), x.invalid) {
              c.enqueue({
                type: "tool-error",
                toolCallId: x.toolCallId,
                toolName: x.toolName,
                input: x.input,
                error: cr(x.error),
                dynamic: !0
              });
              break;
            }
            const C = e[x.toolName];
            if (v.set(x.toolCallId, x.input), C.onInputAvailable != null && await C.onInputAvailable({
              input: x.input,
              toolCallId: x.toolCallId,
              messages: a,
              abortSignal: s,
              experimental_context: u
            }), C.execute != null && x.providerExecuted !== !0) {
              const A = De();
              m.add(A), Ke({
                name: "ai.toolCall",
                attributes: ye({
                  telemetry: r,
                  attributes: {
                    ...We({
                      operationId: "ai.toolCall",
                      telemetry: r
                    }),
                    "ai.toolCall.name": x.toolName,
                    "ai.toolCall.id": x.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(x.input)
                    }
                  }
                }),
                tracer: n,
                fn: async (S) => {
                  let M;
                  try {
                    const R = Bi({
                      execute: C.execute.bind(C),
                      input: x.input,
                      options: {
                        toolCallId: x.toolCallId,
                        messages: a,
                        abortSignal: s,
                        experimental_context: u
                      }
                    });
                    for await (const E of R)
                      c.enqueue({
                        ...x,
                        type: "tool-result",
                        output: E.output,
                        ...E.type === "preliminary" && {
                          preliminary: !0
                        }
                      }), E.type === "final" && (M = E.output);
                  } catch (R) {
                    Mo(S, R), c.enqueue({
                      ...x,
                      type: "tool-error",
                      error: R
                    }), m.delete(A), y();
                    return;
                  }
                  m.delete(A), y();
                  try {
                    S.setAttributes(
                      ye({
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
          } catch (x) {
            c.enqueue({ type: "error", error: x });
          }
          break;
        }
        case "tool-result": {
          const x = h.toolName;
          h.isError ? c.enqueue({
            type: "tool-error",
            toolCallId: h.toolCallId,
            toolName: x,
            input: v.get(h.toolCallId),
            providerExecuted: h.providerExecuted,
            error: h.result
          }) : b.enqueue({
            type: "tool-result",
            toolCallId: h.toolCallId,
            toolName: x,
            input: v.get(h.toolCallId),
            output: h.result,
            providerExecuted: h.providerExecuted
          });
          break;
        }
        default: {
          const x = _;
          throw new Error(`Unhandled chunk type: ${x}`);
        }
      }
    },
    flush() {
      d = !0, y();
    }
  });
  return new ReadableStream({
    async start(h) {
      return Promise.all([
        t.pipeThrough(w).pipeTo(
          new WritableStream({
            write(b) {
              h.enqueue(b);
            },
            close() {
            }
          })
        ),
        f.pipeTo(
          new WritableStream({
            write(b) {
              h.enqueue(b);
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
  experimental_output: f,
  experimental_telemetry: m,
  prepareStep: v,
  providerOptions: d,
  experimental_activeTools: g,
  activeTools: y = g,
  experimental_repairToolCall: w,
  experimental_transform: h,
  experimental_download: b,
  includeRawChunks: _ = !1,
  onChunk: x,
  onError: C = ({ error: z }) => {
    console.error(z);
  },
  onFinish: A,
  onAbort: S,
  onStepFinish: M,
  experimental_context: R,
  _internal: {
    now: E = Bu,
    generateId: D = Vw,
    currentDate: Z = () => /* @__PURE__ */ new Date()
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
    activeTools: y,
    repairToolCall: w,
    stopConditions: rr(c),
    output: f,
    providerOptions: d,
    prepareStep: v,
    includeRawChunks: _,
    onChunk: x,
    onError: C,
    onFinish: A,
    onAbort: S,
    onStepFinish: M,
    now: E,
    currentDate: Z,
    generateId: D,
    experimental_context: R,
    download: b
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
    toolChoice: f,
    transforms: m,
    activeTools: v,
    repairToolCall: d,
    stopConditions: g,
    output: y,
    providerOptions: w,
    prepareStep: h,
    includeRawChunks: b,
    now: _,
    currentDate: x,
    generateId: C,
    onChunk: A,
    onError: S,
    onFinish: M,
    onAbort: R,
    onStepFinish: E,
    experimental_context: D,
    download: Z
  }) {
    this._totalUsage = new dt(), this._finishReason = new dt(), this._steps = new dt(), this.output = y, this.includeRawChunks = b, this.tools = c;
    let q, z = [];
    const te = [];
    let oe, F, pe = {}, le = [];
    const ae = [];
    let P, j = {}, $ = {};
    const K = new TransformStream({
      async transform(ue, re) {
        var Y, B, je, et;
        re.enqueue(ue);
        const { part: L } = ue;
        if ((L.type === "text-delta" || L.type === "reasoning-delta" || L.type === "source" || L.type === "tool-call" || L.type === "tool-result" || L.type === "tool-input-start" || L.type === "tool-input-delta" || L.type === "raw") && await (A == null ? void 0 : A({ chunk: L })), L.type === "error" && await S({ error: vr(L.error) }), L.type === "text-start" && (j[L.id] = {
          type: "text",
          text: "",
          providerMetadata: L.providerMetadata
        }, z.push(j[L.id])), L.type === "text-delta") {
          const ce = j[L.id];
          if (ce == null) {
            re.enqueue({
              part: {
                type: "error",
                error: `text part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ce.text += L.text, ce.providerMetadata = (Y = L.providerMetadata) != null ? Y : ce.providerMetadata;
        }
        if (L.type === "text-end") {
          const ce = j[L.id];
          if (ce == null) {
            re.enqueue({
              part: {
                type: "error",
                error: `text part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ce.providerMetadata = (B = L.providerMetadata) != null ? B : ce.providerMetadata, delete j[L.id];
        }
        if (L.type === "reasoning-start" && ($[L.id] = {
          type: "reasoning",
          text: "",
          providerMetadata: L.providerMetadata
        }, z.push($[L.id])), L.type === "reasoning-delta") {
          const ce = $[L.id];
          if (ce == null) {
            re.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ce.text += L.text, ce.providerMetadata = (je = L.providerMetadata) != null ? je : ce.providerMetadata;
        }
        if (L.type === "reasoning-end") {
          const ce = $[L.id];
          if (ce == null) {
            re.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${L.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          ce.providerMetadata = (et = L.providerMetadata) != null ? et : ce.providerMetadata, delete $[L.id];
        }
        if (L.type === "file" && z.push({ type: "file", file: L.file }), L.type === "source" && z.push(L), L.type === "tool-call" && z.push(L), L.type === "tool-result" && !L.preliminary && z.push(L), L.type === "tool-error" && z.push(L), L.type === "start-step" && (pe = L.request, le = L.warnings), L.type === "finish-step") {
          const ce = ro({
            content: z,
            tools: c
          }), gt = new Pu({
            content: z,
            finishReason: L.finishReason,
            usage: L.usage,
            warnings: le,
            request: pe,
            response: {
              ...L.response,
              messages: [...te, ...ce]
            },
            providerMetadata: L.providerMetadata
          });
          await (E == null ? void 0 : E(gt)), Jt(le), ae.push(gt), z = [], $ = {}, j = {}, te.push(...ce), q.resolve();
        }
        L.type === "finish" && (F = L.totalUsage, oe = L.finishReason);
      },
      async flush(ue) {
        try {
          if (ae.length === 0) {
            const je = new ew({
              message: "No output generated. Check the stream for errors."
            });
            we._finishReason.reject(je), we._totalUsage.reject(je), we._steps.reject(je);
            return;
          }
          const re = oe ?? "unknown", Y = F ?? {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          };
          we._finishReason.resolve(re), we._totalUsage.resolve(Y), we._steps.resolve(ae);
          const B = ae[ae.length - 1];
          await (M == null ? void 0 : M({
            finishReason: re,
            totalUsage: Y,
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
          })), P.setAttributes(
            ye({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": re,
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
                "ai.usage.inputTokens": Y.inputTokens,
                "ai.usage.outputTokens": Y.outputTokens,
                "ai.usage.totalTokens": Y.totalTokens,
                "ai.usage.reasoningTokens": Y.reasoningTokens,
                "ai.usage.cachedInputTokens": Y.cachedInputTokens
              }
            })
          );
        } catch (re) {
          ue.error(re);
        } finally {
          P.end();
        }
      }
    }), Q = Gu();
    this.addStream = Q.addStream, this.closeStream = Q.close;
    const T = Q.stream.getReader();
    let V = new ReadableStream({
      async start(ue) {
        ue.enqueue({ type: "start" });
      },
      async pull(ue) {
        function re() {
          R == null || R({ steps: ae }), ue.enqueue({ type: "abort" }), ue.close();
        }
        try {
          const { done: Y, value: B } = await T.read();
          if (Y) {
            ue.close();
            return;
          }
          if (a != null && a.aborted) {
            re();
            return;
          }
          ue.enqueue(B);
        } catch (Y) {
          zt(Y) && (a != null && a.aborted) ? re() : ue.error(Y);
        }
      },
      cancel(ue) {
        return Q.stream.cancel(ue);
      }
    });
    for (const ue of m)
      V = V.pipeThrough(
        ue({
          tools: c,
          stopStream() {
            Q.terminate();
          }
        })
      );
    this.baseStream = V.pipeThrough(Bw(y)).pipeThrough(K);
    const { maxRetries: W, retry: qe } = Ct({
      maxRetries: o,
      abortSignal: a
    }), ge = pn(t), $e = Lt(r), Qe = dn({
      model: e,
      telemetry: t,
      headers: n,
      settings: { ...$e, maxRetries: W }
    }), we = this;
    Ke({
      name: "ai.streamText",
      attributes: ye({
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
      tracer: ge,
      endWhenDone: !1,
      fn: async (ue) => {
        P = ue;
        async function re({
          currentStep: Y,
          responseMessages: B,
          usage: je
        }) {
          var et, L, ce, gt, ve;
          const vt = we.includeRawChunks;
          q = new dt();
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
              messages: (ce = tt == null ? void 0 : tt.messages) != null ? ce : Mt
            },
            supportedUrls: await It.supportedUrls,
            download: Z
          }), { toolChoice: Ht, tools: Wt } = Iu({
            tools: c,
            toolChoice: (gt = tt == null ? void 0 : tt.toolChoice) != null ? gt : f,
            activeTools: (ve = tt == null ? void 0 : tt.activeTools) != null ? ve : v
          }), {
            result: { stream: Dn, response: Ue, request: kt },
            doStreamSpan: Tt,
            startTimestampMs: Po
          } = await qe(
            () => Ke({
              name: "ai.streamText.doStream",
              attributes: ye({
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
                    input: () => Wt == null ? void 0 : Wt.map((ne) => JSON.stringify(ne))
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
              tracer: ge,
              endWhenDone: !1,
              fn: async (ne) => ({
                startTimestampMs: _(),
                // get before the call
                doStreamSpan: ne,
                result: await It.doStream({
                  ...$e,
                  tools: Wt,
                  toolChoice: Ht,
                  responseFormat: y == null ? void 0 : y.responseFormat,
                  prompt: mn,
                  providerOptions: w,
                  abortSignal: a,
                  headers: n,
                  includeRawChunks: vt
                })
              })
            })
          ), nc = Fw({
            tools: c,
            generatorStream: Dn,
            tracer: ge,
            telemetry: t,
            system: s,
            messages: Mt,
            repairToolCall: d,
            abortSignal: a,
            experimental_context: D
          }), rc = kt ?? {}, zn = [], wr = [];
          let xr;
          const Ir = {};
          let Kt = "unknown", lt = {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }, kr, jo = !0, yt = {
            id: C(),
            timestamp: x(),
            modelId: e.modelId
          }, qo = "";
          we.addStream(
            nc.pipeThrough(
              new TransformStream({
                async transform(ne, Fe) {
                  var hn, gn, Un, St;
                  if (ne.type === "stream-start") {
                    xr = ne.warnings;
                    return;
                  }
                  if (jo) {
                    const Ge = _() - Po;
                    jo = !1, Tt.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": Ge
                    }), Tt.setAttributes({
                      "ai.response.msToFirstChunk": Ge
                    }), Fe.enqueue({
                      type: "start-step",
                      request: rc,
                      warnings: xr ?? []
                    });
                  }
                  const Do = ne.type;
                  switch (Do) {
                    case "text-start":
                    case "text-end": {
                      Fe.enqueue(ne);
                      break;
                    }
                    case "text-delta": {
                      ne.delta.length > 0 && (Fe.enqueue({
                        type: "text-delta",
                        id: ne.id,
                        text: ne.delta,
                        providerMetadata: ne.providerMetadata
                      }), qo += ne.delta);
                      break;
                    }
                    case "reasoning-start":
                    case "reasoning-end": {
                      Fe.enqueue(ne);
                      break;
                    }
                    case "reasoning-delta": {
                      Fe.enqueue({
                        type: "reasoning-delta",
                        id: ne.id,
                        text: ne.delta,
                        providerMetadata: ne.providerMetadata
                      });
                      break;
                    }
                    case "tool-call": {
                      Fe.enqueue(ne), zn.push(ne);
                      break;
                    }
                    case "tool-result": {
                      Fe.enqueue(ne), ne.preliminary || wr.push(ne);
                      break;
                    }
                    case "tool-error": {
                      Fe.enqueue(ne), wr.push(ne);
                      break;
                    }
                    case "response-metadata": {
                      yt = {
                        id: (hn = ne.id) != null ? hn : yt.id,
                        timestamp: (gn = ne.timestamp) != null ? gn : yt.timestamp,
                        modelId: (Un = ne.modelId) != null ? Un : yt.modelId
                      };
                      break;
                    }
                    case "finish": {
                      lt = ne.usage, Kt = ne.finishReason, kr = ne.providerMetadata;
                      const Ge = _() - Po;
                      Tt.addEvent("ai.stream.finish"), Tt.setAttributes({
                        "ai.response.msToFinish": Ge,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((St = lt.outputTokens) != null ? St : 0) / Ge
                      });
                      break;
                    }
                    case "file": {
                      Fe.enqueue(ne);
                      break;
                    }
                    case "source": {
                      Fe.enqueue(ne);
                      break;
                    }
                    case "tool-input-start": {
                      Ir[ne.id] = ne.toolName;
                      const Ge = c == null ? void 0 : c[ne.toolName];
                      (Ge == null ? void 0 : Ge.onInputStart) != null && await Ge.onInputStart({
                        toolCallId: ne.id,
                        messages: Mt,
                        abortSignal: a,
                        experimental_context: D
                      }), Fe.enqueue({
                        ...ne,
                        dynamic: (Ge == null ? void 0 : Ge.type) === "dynamic"
                      });
                      break;
                    }
                    case "tool-input-end": {
                      delete Ir[ne.id], Fe.enqueue(ne);
                      break;
                    }
                    case "tool-input-delta": {
                      const Ge = Ir[ne.id], Tr = c == null ? void 0 : c[Ge];
                      (Tr == null ? void 0 : Tr.onInputDelta) != null && await Tr.onInputDelta({
                        inputTextDelta: ne.delta,
                        toolCallId: ne.id,
                        messages: Mt,
                        abortSignal: a,
                        experimental_context: D
                      }), Fe.enqueue(ne);
                      break;
                    }
                    case "error": {
                      Fe.enqueue(ne), Kt = "error";
                      break;
                    }
                    case "raw": {
                      vt && Fe.enqueue(ne);
                      break;
                    }
                    default: {
                      const Ge = Do;
                      throw new Error(`Unknown chunk type: ${Ge}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(ne) {
                  const Fe = zn.length > 0 ? JSON.stringify(zn) : void 0;
                  try {
                    Tt.setAttributes(
                      ye({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Kt,
                          "ai.response.text": {
                            output: () => qo
                          },
                          "ai.response.toolCalls": {
                            output: () => Fe
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
                          "gen_ai.response.finish_reasons": [Kt],
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
                  ne.enqueue({
                    type: "finish-step",
                    finishReason: Kt,
                    usage: lt,
                    providerMetadata: kr,
                    response: {
                      ...yt,
                      headers: Ue == null ? void 0 : Ue.headers
                    }
                  });
                  const hn = Nu(je, lt);
                  await q.promise;
                  const gn = zn.filter(
                    (St) => St.providerExecuted !== !0
                  ), Un = wr.filter(
                    (St) => St.providerExecuted !== !0
                  );
                  if (gn.length > 0 && // all current tool calls have outputs (incl. execution errors):
                  Un.length === gn.length && // continue until a stop condition is met:
                  !await qu({
                    stopConditions: g,
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
                      await re({
                        currentStep: Y + 1,
                        responseMessages: B,
                        usage: hn
                      });
                    } catch (St) {
                      ne.enqueue({
                        type: "error",
                        error: St
                      }), we.closeStream();
                    }
                  } else
                    ne.enqueue({
                      type: "finish",
                      finishReason: Kt,
                      totalUsage: hn
                    }), we.closeStream();
                }
              })
            )
          );
        }
        await re({
          currentStep: 0,
          responseMessages: [],
          usage: {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }
        });
      }
    }).catch((ue) => {
      we.addStream(
        new ReadableStream({
          start(re) {
            re.enqueue({ type: "error", error: ue }), re.close();
          }
        })
      ), we.closeStream();
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
    }) : void 0, f = {}, m = (d) => {
      var g, y;
      const w = f[d];
      return ((y = (g = this.tools) == null ? void 0 : g[w]) == null ? void 0 : y.type) === "dynamic" ? !0 : void 0;
    }, v = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (d, g) => {
          const y = r == null ? void 0 : r({ part: d }), w = d.type;
          switch (w) {
            case "text-start": {
              g.enqueue({
                type: "text-start",
                id: d.id,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              });
              break;
            }
            case "text-delta": {
              g.enqueue({
                type: "text-delta",
                id: d.id,
                delta: d.text,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              });
              break;
            }
            case "text-end": {
              g.enqueue({
                type: "text-end",
                id: d.id,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-start": {
              g.enqueue({
                type: "reasoning-start",
                id: d.id,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-delta": {
              o && g.enqueue({
                type: "reasoning-delta",
                id: d.id,
                delta: d.text,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-end": {
              g.enqueue({
                type: "reasoning-end",
                id: d.id,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              });
              break;
            }
            case "file": {
              g.enqueue({
                type: "file",
                mediaType: d.file.mediaType,
                url: `data:${d.file.mediaType};base64,${d.file.base64}`
              });
              break;
            }
            case "source": {
              a && d.sourceType === "url" && g.enqueue({
                type: "source-url",
                sourceId: d.id,
                url: d.url,
                title: d.title,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              }), a && d.sourceType === "document" && g.enqueue({
                type: "source-document",
                sourceId: d.id,
                mediaType: d.mediaType,
                title: d.title,
                filename: d.filename,
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {}
              });
              break;
            }
            case "tool-input-start": {
              f[d.id] = d.toolName;
              const h = m(d.id);
              g.enqueue({
                type: "tool-input-start",
                toolCallId: d.id,
                toolName: d.toolName,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "tool-input-delta": {
              g.enqueue({
                type: "tool-input-delta",
                toolCallId: d.id,
                inputTextDelta: d.delta
              });
              break;
            }
            case "tool-call": {
              f[d.toolCallId] = d.toolName;
              const h = m(d.toolCallId);
              d.invalid ? g.enqueue({
                type: "tool-input-error",
                toolCallId: d.toolCallId,
                toolName: d.toolName,
                input: d.input,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {},
                ...h != null ? { dynamic: h } : {},
                errorText: u(d.error)
              }) : g.enqueue({
                type: "tool-input-available",
                toolCallId: d.toolCallId,
                toolName: d.toolName,
                input: d.input,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "tool-result": {
              const h = m(d.toolCallId);
              g.enqueue({
                type: "tool-output-available",
                toolCallId: d.toolCallId,
                output: d.output,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...d.preliminary != null ? { preliminary: d.preliminary } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "tool-error": {
              const h = m(d.toolCallId);
              g.enqueue({
                type: "tool-output-error",
                toolCallId: d.toolCallId,
                errorText: u(d.error),
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...h != null ? { dynamic: h } : {}
              });
              break;
            }
            case "error": {
              g.enqueue({
                type: "error",
                errorText: u(d.error)
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
              s && g.enqueue({
                type: "start",
                ...y != null ? { messageMetadata: y } : {},
                ...c != null ? { messageId: c } : {}
              });
              break;
            }
            case "finish": {
              i && g.enqueue({
                type: "finish",
                finishReason: d.finishReason,
                ...y != null ? { messageMetadata: y } : {}
              });
              break;
            }
            case "abort": {
              g.enqueue(d);
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
          y != null && w !== "start" && w !== "finish" && g.enqueue({
            type: "message-metadata",
            messageMetadata: y
          });
        }
      })
    );
    return Et(
      Vu({
        stream: v,
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
    ...f
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
      ...f
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
                const v = m.toolName;
                m.state !== "input-streaming" && c.push({
                  type: "tool-call",
                  toolCallId: m.toolCallId,
                  toolName: v,
                  input: m.input,
                  ...m.callProviderMetadata != null ? { providerOptions: m.callProviderMetadata } : {}
                });
              } else if (en(m)) {
                const v = or(m);
                m.state !== "input-streaming" && (c.push({
                  type: "tool-call",
                  toolCallId: m.toolCallId,
                  toolName: v,
                  input: m.state === "output-error" ? (s = m.input) != null ? s : m.rawInput : m.input,
                  providerExecuted: m.providerExecuted,
                  ...m.callProviderMetadata != null ? { providerOptions: m.callProviderMetadata } : {}
                }), m.providerExecuted === !0 && (m.state === "output-available" || m.state === "output-error") && c.push({
                  type: "tool-result",
                  toolCallId: m.toolCallId,
                  toolName: v,
                  output: wn({
                    output: m.state === "output-error" ? m.errorText : m.output,
                    tool: (i = t == null ? void 0 : t.tools) == null ? void 0 : i[v],
                    errorMode: m.state === "output-error" ? "json" : "none"
                  }),
                  ...m.callProviderMetadata != null ? { providerOptions: m.callProviderMetadata } : {}
                }));
              } else if (Lr(m)) {
                const v = (u = t == null ? void 0 : t.convertDataPart) == null ? void 0 : u.call(
                  t,
                  m
                );
                v != null && c.push(v);
              } else {
                const v = m;
                throw new Error(`Unsupported part: ${v}`);
              }
            n.push({
              role: "assistant",
              content: c
            });
            const f = a.filter(
              (m) => en(m) && m.providerExecuted !== !0 || m.type === "dynamic-tool"
            );
            f.length > 0 && n.push({
              role: "tool",
              content: f.map((m) => {
                var v;
                switch (m.state) {
                  case "output-error":
                  case "output-available": {
                    const d = Zw(m);
                    return {
                      type: "tool-result",
                      toolCallId: m.toolCallId,
                      toolName: d,
                      output: wn({
                        output: m.state === "output-error" ? m.errorText : m.output,
                        tool: (v = t == null ? void 0 : t.tools) == null ? void 0 : v[d],
                        errorMode: m.state === "output-error" ? "text" : "none"
                      }),
                      ...m.callProviderMetadata != null ? { providerOptions: m.callProviderMetadata } : {}
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
  }), f = Ze(
    a ?? {},
    `ai/${mt}`
  ), m = dn({
    model: i,
    telemetry: s,
    headers: f,
    settings: { maxRetries: u }
  }), v = pn(s);
  return Ke({
    name: "ai.embed",
    attributes: ye({
      telemetry: s,
      attributes: {
        ...We({ operationId: "ai.embed", telemetry: s }),
        ...m,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: v,
    fn: async (d) => {
      const { embedding: g, usage: y, response: w, providerMetadata: h } = await c(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Ke({
            name: "ai.embed.doEmbed",
            attributes: ye({
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
            tracer: v,
            fn: async (b) => {
              var _;
              const x = await i.doEmbed({
                values: [t],
                abortSignal: o,
                headers: f,
                providerOptions: n
              }), C = x.embeddings[0], A = (_ = x.usage) != null ? _ : { tokens: NaN };
              return b.setAttributes(
                ye({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => x.embeddings.map(
                        (S) => JSON.stringify(S)
                      )
                    },
                    "ai.usage.tokens": A.tokens
                  }
                })
              ), {
                embedding: C,
                usage: A,
                providerMetadata: x.providerMetadata,
                response: x.response
              };
            }
          })
        )
      );
      return d.setAttributes(
        ye({
          telemetry: s,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(g) },
            "ai.usage.tokens": y.tokens
          }
        })
      ), new Hw({
        value: t,
        embedding: g,
        usage: y,
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
  const u = vu(e), { maxRetries: c, retry: f } = Ct({
    maxRetries: r,
    abortSignal: o
  }), m = Ze(
    a ?? {},
    `ai/${mt}`
  ), v = dn({
    model: u,
    telemetry: i,
    headers: m,
    settings: { maxRetries: c }
  }), d = pn(i);
  return Ke({
    name: "ai.embedMany",
    attributes: ye({
      telemetry: i,
      attributes: {
        ...We({ operationId: "ai.embedMany", telemetry: i }),
        ...v,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((g) => JSON.stringify(g))
        }
      }
    }),
    tracer: d,
    fn: async (g) => {
      var y;
      const [w, h] = await Promise.all([
        u.maxEmbeddingsPerCall,
        u.supportsParallelCalls
      ]);
      if (w == null || w === 1 / 0) {
        const { embeddings: M, usage: R, response: E, providerMetadata: D } = await f(
          () => Ke({
            name: "ai.embedMany.doEmbed",
            attributes: ye({
              telemetry: i,
              attributes: {
                ...We({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...v,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => t.map((Z) => JSON.stringify(Z))
                }
              }
            }),
            tracer: d,
            fn: async (Z) => {
              var q;
              const z = await u.doEmbed({
                values: t,
                abortSignal: o,
                headers: m,
                providerOptions: s
              }), te = z.embeddings, oe = (q = z.usage) != null ? q : { tokens: NaN };
              return Z.setAttributes(
                ye({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => te.map(
                        (F) => JSON.stringify(F)
                      )
                    },
                    "ai.usage.tokens": oe.tokens
                  }
                })
              ), {
                embeddings: te,
                usage: oe,
                providerMetadata: z.providerMetadata,
                response: z.response
              };
            }
          })
        );
        return g.setAttributes(
          ye({
            telemetry: i,
            attributes: {
              "ai.embeddings": {
                output: () => M.map((Z) => JSON.stringify(Z))
              },
              "ai.usage.tokens": R.tokens
            }
          })
        ), new bs({
          values: t,
          embeddings: M,
          usage: R,
          providerMetadata: D,
          responses: [E]
        });
      }
      const b = _s(t, w), _ = [], x = [];
      let C = 0, A;
      const S = _s(
        b,
        h ? n : 1
      );
      for (const M of S) {
        const R = await Promise.all(
          M.map((E) => f(() => Ke({
            name: "ai.embedMany.doEmbed",
            attributes: ye({
              telemetry: i,
              attributes: {
                ...We({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...v,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => E.map((D) => JSON.stringify(D))
                }
              }
            }),
            tracer: d,
            fn: async (D) => {
              var Z;
              const q = await u.doEmbed({
                values: E,
                abortSignal: o,
                headers: m,
                providerOptions: s
              }), z = q.embeddings, te = (Z = q.usage) != null ? Z : { tokens: NaN };
              return D.setAttributes(
                ye({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => z.map(
                        (oe) => JSON.stringify(oe)
                      )
                    },
                    "ai.usage.tokens": te.tokens
                  }
                })
              ), {
                embeddings: z,
                usage: te,
                providerMetadata: q.providerMetadata,
                response: q.response
              };
            }
          })))
        );
        for (const E of R)
          if (_.push(...E.embeddings), x.push(E.response), C += E.usage.tokens, E.providerMetadata)
            if (!A)
              A = { ...E.providerMetadata };
            else
              for (const [D, Z] of Object.entries(
                E.providerMetadata
              ))
                A[D] = {
                  ...(y = A[D]) != null ? y : {},
                  ...Z
                };
      }
      return g.setAttributes(
        ye({
          telemetry: i,
          attributes: {
            "ai.embeddings": {
              output: () => _.map((M) => JSON.stringify(M))
            },
            "ai.usage.tokens": C
          }
        })
      ), new bs({
        values: t,
        embeddings: _,
        usage: { tokens: C },
        providerMetadata: A,
        responses: x
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
  headers: f
}) {
  var m, v;
  const d = pw(e), g = Ze(
    f ?? {},
    `ai/${mt}`
  ), { retry: y } = Ct({
    maxRetries: u,
    abortSignal: c
  }), w = (m = r ?? await Kw(d)) != null ? m : 1, h = Math.ceil(n / w), b = Array.from({ length: h }, (M, R) => {
    if (R < h - 1)
      return w;
    const E = n % w;
    return E === 0 ? w : E;
  }), _ = await Promise.all(
    b.map(
      async (M) => y(
        () => d.doGenerate({
          prompt: t,
          n: M,
          abortSignal: c,
          headers: g,
          size: o,
          aspectRatio: a,
          seed: s,
          providerOptions: i ?? {}
        })
      )
    )
  ), x = [], C = [], A = [], S = {};
  for (const M of _) {
    if (x.push(
      ...M.images.map(
        (R) => {
          var E;
          return new _r({
            data: R,
            mediaType: (E = mr({
              data: R,
              signatures: yu
            })) != null ? E : "image/png"
          });
        }
      )
    ), C.push(...M.warnings), M.providerMetadata)
      for (const [R, E] of Object.entries(M.providerMetadata))
        if (R === "gateway") {
          const D = S[R];
          D != null && typeof D == "object" ? S[R] = {
            ...D,
            ...E
          } : S[R] = E;
          const Z = S[R].images;
          Array.isArray(Z) && Z.length === 0 && delete S[R].images;
        } else
          (v = S[R]) != null || (S[R] = { images: [] }), S[R].images.push(
            ...M.providerMetadata[R].images
          );
    A.push(M.response);
  }
  if (Jt(C), !x.length)
    throw new Yb({ responses: A });
  return new Ww({
    images: x,
    warnings: C,
    responses: A,
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
    return st({ value: t, schema: e });
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
      for (let v = 0; v < u.length; v++) {
        const d = u[v], g = await st({ value: d, schema: e });
        if (!(v === u.length - 1 && !s)) {
          if (!g.success)
            return g;
          c.push(g.value);
        }
      }
      const f = (i = o == null ? void 0 : o.length) != null ? i : 0;
      let m = "";
      return a && (m += "["), f > 0 && (m += ","), m += c.slice(f).map((v) => JSON.stringify(v)).join(","), s && (m += "]"), {
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
    throw new xe({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t != null)
      throw new xe({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output."
      });
    if (r != null)
      throw new xe({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for no-schema output."
      });
    if (n != null)
      throw new xe({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for no-schema output."
      });
    if (o != null)
      throw new xe({
        parameter: "enumValues",
        value: o,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (t == null)
      throw new xe({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output."
      });
    if (o != null)
      throw new xe({
        parameter: "enumValues",
        value: o,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (t == null)
      throw new xe({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output."
      });
    if (o != null)
      throw new xe({
        parameter: "enumValues",
        value: o,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new xe({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output."
      });
    if (r != null)
      throw new xe({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for enum output."
      });
    if (n != null)
      throw new xe({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for enum output."
      });
    if (o == null)
      throw new xe({
        parameter: "enumValues",
        value: o,
        message: "Enum values are required for enum output."
      });
    for (const a of o)
      if (typeof a != "string")
        throw new xe({
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
    experimental_telemetry: f,
    experimental_download: m,
    providerOptions: v,
    _internal: {
      generateId: d = n0,
      currentDate: g = () => /* @__PURE__ */ new Date()
    } = {},
    ...y
  } = e, w = sn(t), h = "enum" in e ? e.enum : void 0, {
    schema: b,
    schemaDescription: _,
    schemaName: x
  } = "schema" in e ? e : {};
  Ku({
    output: n,
    schema: b,
    schemaName: x,
    schemaDescription: _,
    enumValues: h
  });
  const { maxRetries: C, retry: A } = Ct({
    maxRetries: s,
    abortSignal: i
  }), S = Hu({
    output: n,
    schema: b,
    enumValues: h
  }), M = Lt(y), R = Ze(
    u ?? {},
    `ai/${mt}`
  ), E = dn({
    model: w,
    telemetry: f,
    headers: R,
    settings: { ...M, maxRetries: C }
  }), D = pn(f);
  try {
    return await Ke({
      name: "ai.generateObject",
      attributes: ye({
        telemetry: f,
        attributes: {
          ...We({
            operationId: "ai.generateObject",
            telemetry: f
          }),
          ...E,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: r, prompt: o, messages: a })
          },
          "ai.schema": S.jsonSchema != null ? { input: () => JSON.stringify(S.jsonSchema) } : void 0,
          "ai.schema.name": x,
          "ai.schema.description": _,
          "ai.settings.output": S.type
        }
      }),
      tracer: D,
      fn: async (Z) => {
        var q;
        let z, te, oe, F, pe, le, ae, P;
        const j = await gr({
          system: r,
          prompt: o,
          messages: a
        }), $ = await hr({
          prompt: j,
          supportedUrls: await w.supportedUrls,
          download: m
        }), K = await A(
          () => Ke({
            name: "ai.generateObject.doGenerate",
            attributes: ye({
              telemetry: f,
              attributes: {
                ...We({
                  operationId: "ai.generateObject.doGenerate",
                  telemetry: f
                }),
                ...E,
                "ai.prompt.messages": {
                  input: () => yr($)
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
            tracer: D,
            fn: async (T) => {
              var V, W, qe, ge, $e, Qe, we, ue;
              const re = await w.doGenerate({
                responseFormat: {
                  type: "json",
                  schema: S.jsonSchema,
                  name: x,
                  description: _
                },
                ...Lt(y),
                prompt: $,
                providerOptions: v,
                abortSignal: i,
                headers: R
              }), Y = {
                id: (W = (V = re.response) == null ? void 0 : V.id) != null ? W : d(),
                timestamp: (ge = (qe = re.response) == null ? void 0 : qe.timestamp) != null ? ge : g(),
                modelId: (Qe = ($e = re.response) == null ? void 0 : $e.modelId) != null ? Qe : w.modelId,
                headers: (we = re.response) == null ? void 0 : we.headers,
                body: (ue = re.response) == null ? void 0 : ue.body
              }, B = no(re.content), je = Yw(re.content);
              if (B === void 0)
                throw new Zt({
                  message: "No object generated: the model did not return a response.",
                  response: Y,
                  usage: re.usage,
                  finishReason: re.finishReason
                });
              return T.setAttributes(
                ye({
                  telemetry: f,
                  attributes: {
                    "ai.response.finishReason": re.finishReason,
                    "ai.response.object": { output: () => B },
                    "ai.response.id": Y.id,
                    "ai.response.model": Y.modelId,
                    "ai.response.timestamp": Y.timestamp.toISOString(),
                    "ai.response.providerMetadata": JSON.stringify(
                      re.providerMetadata
                    ),
                    // TODO rename telemetry attributes to inputTokens and outputTokens
                    "ai.usage.promptTokens": re.usage.inputTokens,
                    "ai.usage.completionTokens": re.usage.outputTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [re.finishReason],
                    "gen_ai.response.id": Y.id,
                    "gen_ai.response.model": Y.modelId,
                    "gen_ai.usage.input_tokens": re.usage.inputTokens,
                    "gen_ai.usage.output_tokens": re.usage.outputTokens
                  }
                })
              ), {
                ...re,
                objectText: B,
                reasoning: je,
                responseData: Y
              };
            }
          })
        );
        z = K.objectText, te = K.finishReason, oe = K.usage, F = K.warnings, ae = K.providerMetadata, le = (q = K.request) != null ? q : {}, pe = K.responseData, P = K.reasoning, Jt(F);
        const Q = await Wu(
          z,
          S,
          c,
          {
            response: pe,
            usage: oe,
            finishReason: te
          }
        );
        return Z.setAttributes(
          ye({
            telemetry: f,
            attributes: {
              "ai.response.finishReason": te,
              "ai.response.object": {
                output: () => JSON.stringify(Q)
              },
              "ai.response.providerMetadata": JSON.stringify(
                ae
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": oe.inputTokens,
              "ai.usage.completionTokens": oe.outputTokens
            }
          })
        ), new r0({
          object: Q,
          reasoning: P,
          finishReason: te,
          usage: oe,
          warnings: F,
          request: le,
          response: pe,
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
    throw new xe({
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
    experimental_telemetry: f,
    experimental_download: m,
    providerOptions: v,
    onError: d = ({ error: M }) => {
      console.error(M);
    },
    onFinish: g,
    _internal: {
      generateId: y = a0,
      currentDate: w = () => /* @__PURE__ */ new Date(),
      now: h = Bu
    } = {},
    ...b
  } = e, _ = "enum" in e && e.enum ? e.enum : void 0, {
    schema: x,
    schemaDescription: C,
    schemaName: A
  } = "schema" in e ? e : {};
  Ku({
    output: n,
    schema: x,
    schemaName: A,
    schemaDescription: C,
    enumValues: _
  });
  const S = Hu({
    output: n,
    schema: x,
    enumValues: _
  });
  return new s0({
    model: t,
    telemetry: f,
    headers: u,
    settings: b,
    maxRetries: s,
    abortSignal: i,
    outputStrategy: S,
    system: r,
    prompt: o,
    messages: a,
    schemaName: A,
    schemaDescription: C,
    providerOptions: v,
    repairText: c,
    onError: d,
    onFinish: g,
    download: m,
    generateId: y,
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
    schemaName: f,
    schemaDescription: m,
    providerOptions: v,
    repairText: d,
    onError: g,
    onFinish: y,
    download: w,
    generateId: h,
    currentDate: b,
    now: _
  }) {
    this._object = new dt(), this._usage = new dt(), this._providerMetadata = new dt(), this._warnings = new dt(), this._request = new dt(), this._response = new dt(), this._finishReason = new dt();
    const x = sn(e), { maxRetries: C, retry: A } = Ct({
      maxRetries: o,
      abortSignal: a
    }), S = Lt(r), M = dn({
      model: x,
      telemetry: n,
      headers: t,
      settings: { ...S, maxRetries: C }
    }), R = pn(n), E = this, D = Gu(), Z = new TransformStream({
      transform(q, z) {
        z.enqueue(q), q.type === "error" && g({ error: vr(q.error) });
      }
    });
    this.baseStream = D.stream.pipeThrough(Z), Ke({
      name: "ai.streamObject",
      attributes: ye({
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
          "ai.schema.name": f,
          "ai.schema.description": m,
          "ai.settings.output": s.type
        }
      }),
      tracer: R,
      endWhenDone: !1,
      fn: async (q) => {
        const z = await gr({
          system: i,
          prompt: u,
          messages: c
        }), te = {
          responseFormat: {
            type: "json",
            schema: s.jsonSchema,
            name: f,
            description: m
          },
          ...Lt(r),
          prompt: await hr({
            prompt: z,
            supportedUrls: await x.supportedUrls,
            download: w
          }),
          providerOptions: v,
          abortSignal: a,
          headers: t,
          includeRawChunks: !1
        }, oe = {
          transform: (Y, B) => {
            switch (Y.type) {
              case "text-delta":
                B.enqueue(Y.delta);
                break;
              case "response-metadata":
              case "finish":
              case "error":
              case "stream-start":
                B.enqueue(Y);
                break;
            }
          }
        }, {
          result: { stream: F, response: pe, request: le },
          doStreamSpan: ae,
          startTimestampMs: P
        } = await A(
          () => Ke({
            name: "ai.streamObject.doStream",
            attributes: ye({
              telemetry: n,
              attributes: {
                ...We({
                  operationId: "ai.streamObject.doStream",
                  telemetry: n
                }),
                ...M,
                "ai.prompt.messages": {
                  input: () => yr(te.prompt)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": x.provider,
                "gen_ai.request.model": x.modelId,
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
            fn: async (Y) => ({
              startTimestampMs: _(),
              doStreamSpan: Y,
              result: await x.doStream(te)
            })
          })
        );
        E._request.resolve(le ?? {});
        let j, $ = {
          inputTokens: void 0,
          outputTokens: void 0,
          totalTokens: void 0
        }, K, Q, T, V, W = "", qe = "", ge = {
          id: h(),
          timestamp: b(),
          modelId: x.modelId
        }, $e, Qe, we = !0, ue = !0;
        const re = F.pipeThrough(new TransformStream(oe)).pipeThrough(
          new TransformStream({
            async transform(Y, B) {
              var je, et, L;
              if (typeof Y == "object" && Y.type === "stream-start") {
                j = Y.warnings;
                return;
              }
              if (we) {
                const ce = _() - P;
                we = !1, ae.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": ce
                }), ae.setAttributes({
                  "ai.stream.msToFirstChunk": ce
                });
              }
              if (typeof Y == "string") {
                W += Y, qe += Y;
                const { value: ce, state: gt } = await Oo(W);
                if (ce !== void 0 && !ar($e, ce)) {
                  const ve = await s.validatePartialResult({
                    value: ce,
                    textDelta: qe,
                    latestObject: Qe,
                    isFirstDelta: ue,
                    isFinalDelta: gt === "successful-parse"
                  });
                  ve.success && !ar(
                    Qe,
                    ve.value.partial
                  ) && ($e = ce, Qe = ve.value.partial, B.enqueue({
                    type: "object",
                    object: Qe
                  }), B.enqueue({
                    type: "text-delta",
                    textDelta: ve.value.textDelta
                  }), qe = "", ue = !1);
                }
                return;
              }
              switch (Y.type) {
                case "response-metadata": {
                  ge = {
                    id: (je = Y.id) != null ? je : ge.id,
                    timestamp: (et = Y.timestamp) != null ? et : ge.timestamp,
                    modelId: (L = Y.modelId) != null ? L : ge.modelId
                  };
                  break;
                }
                case "finish": {
                  qe !== "" && B.enqueue({ type: "text-delta", textDelta: qe }), K = Y.finishReason, $ = Y.usage, Q = Y.providerMetadata, B.enqueue({
                    ...Y,
                    usage: $,
                    response: ge
                  }), Jt(j ?? []), E._usage.resolve($), E._providerMetadata.resolve(Q), E._warnings.resolve(j), E._response.resolve({
                    ...ge,
                    headers: pe == null ? void 0 : pe.headers
                  }), E._finishReason.resolve(K ?? "unknown");
                  try {
                    T = await Wu(
                      W,
                      s,
                      d,
                      {
                        response: ge,
                        usage: $,
                        finishReason: K
                      }
                    ), E._object.resolve(T);
                  } catch (ce) {
                    V = ce, E._object.reject(ce);
                  }
                  break;
                }
                default: {
                  B.enqueue(Y);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(Y) {
              try {
                const B = $ ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                ae.setAttributes(
                  ye({
                    telemetry: n,
                    attributes: {
                      "ai.response.finishReason": K,
                      "ai.response.object": {
                        output: () => JSON.stringify(T)
                      },
                      "ai.response.id": ge.id,
                      "ai.response.model": ge.modelId,
                      "ai.response.timestamp": ge.timestamp.toISOString(),
                      "ai.response.providerMetadata": JSON.stringify(Q),
                      "ai.usage.inputTokens": B.inputTokens,
                      "ai.usage.outputTokens": B.outputTokens,
                      "ai.usage.totalTokens": B.totalTokens,
                      "ai.usage.reasoningTokens": B.reasoningTokens,
                      "ai.usage.cachedInputTokens": B.cachedInputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [K],
                      "gen_ai.response.id": ge.id,
                      "gen_ai.response.model": ge.modelId,
                      "gen_ai.usage.input_tokens": B.inputTokens,
                      "gen_ai.usage.output_tokens": B.outputTokens
                    }
                  })
                ), ae.end(), q.setAttributes(
                  ye({
                    telemetry: n,
                    attributes: {
                      "ai.usage.inputTokens": B.inputTokens,
                      "ai.usage.outputTokens": B.outputTokens,
                      "ai.usage.totalTokens": B.totalTokens,
                      "ai.usage.reasoningTokens": B.reasoningTokens,
                      "ai.usage.cachedInputTokens": B.cachedInputTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(T)
                      },
                      "ai.response.providerMetadata": JSON.stringify(Q)
                    }
                  })
                ), await (y == null ? void 0 : y({
                  usage: B,
                  object: T,
                  error: V,
                  response: {
                    ...ge,
                    headers: pe == null ? void 0 : pe.headers
                  },
                  warnings: j,
                  providerMetadata: Q
                }));
              } catch (B) {
                Y.enqueue({ type: "error", error: B });
              } finally {
                q.end();
              }
            }
          })
        );
        D.addStream(re);
      }
    }).catch((q) => {
      D.addStream(
        new ReadableStream({
          start(z) {
            z.enqueue({ type: "error", error: q }), z.close();
          }
        })
      );
    }).finally(() => {
      D.close();
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
  headers: f
}) {
  var m;
  if (e.specificationVersion !== "v2")
    throw new jn({
      version: e.specificationVersion,
      provider: e.provider,
      modelId: e.modelId
    });
  const v = Ze(
    f ?? {},
    `ai/${mt}`
  ), { retry: d } = Ct({
    maxRetries: u,
    abortSignal: c
  }), g = await d(
    () => e.doGenerate({
      text: t,
      voice: n,
      outputFormat: r,
      instructions: o,
      speed: a,
      language: s,
      abortSignal: c,
      headers: v,
      providerOptions: i
    })
  );
  if (!g.audio || g.audio.length === 0)
    throw new tw({ responses: [g.response] });
  return Jt(g.warnings), new l0({
    audio: new i0({
      data: g.audio,
      mediaType: (m = mr({
        data: g.audio,
        signatures: _u
      })) != null ? m : "audio/mp3"
    }),
    warnings: g.warnings,
    responses: [g.response],
    providerMetadata: g.providerMetadata
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
        content: i.content.filter((f) => f.type !== "tool-call" && f.type !== "tool-result" || (f.type === "tool-call" && (c[f.toolCallId] = f.toolName), (f.type === "tool-call" || f.type === "tool-result") && s.has(f.toolCallId)) ? !0 : o.tools != null && !o.tools.includes(f.toolName))
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
        const f = n ? r + c.text : c.text, m = new RegExp(`${r}(.*?)${o}`, "gs"), v = Array.from(f.matchAll(m));
        if (!v.length) {
          u.push(c);
          continue;
        }
        const d = v.map((y) => y[1]).join(t);
        let g = f;
        for (let y = v.length - 1; y >= 0; y--) {
          const w = v[y], h = g.slice(0, w.index), b = g.slice(
            w.index + w[0].length
          );
          g = h + (h.length > 0 && b.length > 0 ? t : "") + b;
        }
        u.push({
          type: "reasoning",
          text: d
        }), u.push({
          type: "text",
          text: g
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
            transform: (f, m) => {
              if (f.type === "text-start") {
                c = f;
                return;
              }
              if (f.type === "text-end" && c && (m.enqueue(c), c = void 0), f.type !== "text-delta") {
                m.enqueue(f);
                return;
              }
              u[f.id] == null && (u[f.id] = {
                isFirstReasoning: !0,
                isFirstText: !0,
                afterSwitch: !1,
                isReasoning: n,
                buffer: "",
                idCounter: 0,
                textId: f.id
              });
              const v = u[f.id];
              v.buffer += f.delta;
              function d(g) {
                if (g.length > 0) {
                  const y = v.afterSwitch && (v.isReasoning ? !v.isFirstReasoning : !v.isFirstText) ? t : "";
                  v.isReasoning && (v.afterSwitch || v.isFirstReasoning) && m.enqueue({
                    type: "reasoning-start",
                    id: `reasoning-${v.idCounter}`
                  }), v.isReasoning ? m.enqueue({
                    type: "reasoning-delta",
                    delta: y + g,
                    id: `reasoning-${v.idCounter}`
                  }) : (c && (m.enqueue(c), c = void 0), m.enqueue({
                    type: "text-delta",
                    delta: y + g,
                    id: v.textId
                  })), v.afterSwitch = !1, v.isReasoning ? v.isFirstReasoning = !1 : v.isFirstText = !1;
                }
              }
              do {
                const g = v.isReasoning ? o : r, y = f0(
                  v.buffer,
                  g
                );
                if (y == null) {
                  d(v.buffer), v.buffer = "";
                  break;
                }
                if (d(v.buffer.slice(0, y)), y + g.length <= v.buffer.length)
                  v.buffer = v.buffer.slice(
                    y + g.length
                  ), v.isReasoning && m.enqueue({
                    type: "reasoning-end",
                    id: `reasoning-${v.idCounter++}`
                  }), v.isReasoning = !v.isReasoning, v.afterSwitch = !0;
                else {
                  v.buffer = v.buffer.slice(y);
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
  var c, f, m;
  async function v({
    params: d,
    type: g
  }) {
    return t ? await t({ params: d, type: g, model: e }) : d;
  }
  return {
    specificationVersion: "v2",
    provider: (c = u ?? (o == null ? void 0 : o({ model: e }))) != null ? c : e.provider,
    modelId: (f = i ?? (a == null ? void 0 : a({ model: e }))) != null ? f : e.modelId,
    supportedUrls: (m = s == null ? void 0 : s({ model: e })) != null ? m : e.supportedUrls,
    async doGenerate(d) {
      const g = await v({ params: d, type: "generate" }), y = async () => e.doGenerate(g);
      return n ? n({
        doGenerate: y,
        doStream: async () => e.doStream(g),
        params: g,
        model: e
      }) : y();
    },
    async doStream(d) {
      const g = await v({ params: d, type: "stream" }), y = async () => e.doGenerate(g), w = async () => e.doStream(g);
      return r ? r({ doGenerate: y, doStream: w, params: g, model: e }) : w();
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
  }), i = Ze(
    a ?? {},
    `ai/${mt}`
  ), u = t instanceof URL ? (await bu({ url: t })).data : yw(t), c = await s(
    () => {
      var f;
      return e.doGenerate({
        audio: u,
        abortSignal: o,
        headers: i,
        providerOptions: n,
        mediaType: (f = mr({
          data: u,
          signatures: _u
        })) != null ? f : "audio/wav"
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
  onFinish: f,
  onError: m,
  fetch: v = I0()
}) {
  var d;
  try {
    i(!0), u(void 0);
    const g = new AbortController();
    c(g), s("");
    const y = await v(e, {
      method: "POST",
      body: JSON.stringify({
        prompt: t,
        ...o
      }),
      credentials: n,
      headers: Ze(
        {
          "Content-Type": "application/json",
          ...r
        },
        `ai-sdk/${mt}`,
        rn()
      ),
      signal: g.signal
    }).catch((h) => {
      throw h;
    });
    if (!y.ok)
      throw new Error(
        (d = await y.text()) != null ? d : "Failed to fetch the chat response."
      );
    if (!y.body)
      throw new Error("The response body is empty.");
    let w = "";
    switch (a) {
      case "text": {
        await x0({
          stream: y.body,
          onTextPart: (h) => {
            w += h, s(w);
          }
        });
        break;
      }
      case "data": {
        await br({
          stream: yo({
            stream: y.body,
            schema: Fu
          }).pipeThrough(
            new TransformStream({
              async transform(h) {
                if (!h.success)
                  throw h.error;
                const b = h.value;
                if (b.type === "text-delta")
                  w += b.delta, s(w);
                else if (b.type === "error")
                  throw new Error(b.errorText);
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
    return f && f(t, w), c(null), w;
  } catch (g) {
    if (g.name === "AbortError")
      return c(null), null;
    g instanceof Error && m && m(g), u(g);
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
    const i = await Oe(this.body), u = await Oe(this.headers), c = await Oe(this.credentials), f = {
      ...jt(u),
      ...jt(t.headers)
    }, m = await ((n = this.prepareSendMessagesRequest) == null ? void 0 : n.call(this, {
      api: this.api,
      id: t.chatId,
      messages: t.messages,
      body: { ...i, ...t.body },
      headers: f,
      credentials: c,
      requestMetadata: t.metadata,
      trigger: t.trigger,
      messageId: t.messageId
    })), v = (r = m == null ? void 0 : m.api) != null ? r : this.api, d = (m == null ? void 0 : m.headers) !== void 0 ? jt(m.headers) : f, g = (m == null ? void 0 : m.body) !== void 0 ? m.body : {
      ...i,
      ...t.body,
      id: t.chatId,
      messages: t.messages,
      trigger: t.trigger,
      messageId: t.messageId
    }, y = (o = m == null ? void 0 : m.credentials) != null ? o : c, h = await ((a = this.fetch) != null ? a : globalThis.fetch)(v, {
      method: "POST",
      headers: Ze(
        {
          "Content-Type": "application/json",
          ...d
        },
        `ai-sdk/${mt}`,
        rn()
      ),
      body: JSON.stringify(g),
      credentials: y,
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
    }, f = await ((t = this.prepareReconnectToStreamRequest) == null ? void 0 : t.call(this, {
      api: this.api,
      id: e.chatId,
      body: { ...s, ...e.body },
      headers: c,
      credentials: u,
      requestMetadata: e.metadata
    })), m = (n = f == null ? void 0 : f.api) != null ? n : `${this.api}/${e.chatId}/stream`, v = (f == null ? void 0 : f.headers) !== void 0 ? jt(f.headers) : c, d = (r = f == null ? void 0 : f.credentials) != null ? r : u, y = await ((o = this.fetch) != null ? o : globalThis.fetch)(m, {
      method: "GET",
      headers: Ze(
        v,
        `ai-sdk/${mt}`,
        rn()
      ),
      credentials: d
    });
    if (y.status === 204)
      return null;
    if (!y.ok)
      throw new Error(
        (a = await y.text()) != null ? a : "Failed to fetch the chat response."
      );
    if (!y.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(y.body);
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
    generateId: e = De,
    id: t = e(),
    transport: n = new T0(),
    messageMetadataSchema: r,
    dataPartSchemas: o,
    state: a,
    onError: s,
    onToolCall: i,
    onFinish: u,
    onData: c,
    sendAutomaticallyWhen: f
  }) {
    this.activeResponse = void 0, this.jobExecutor = new o0(), this.sendMessage = async (m, v) => {
      var d, g, y, w;
      if (m == null) {
        await this.makeRequest({
          trigger: "submit-message",
          messageId: (d = this.lastMessage) == null ? void 0 : d.id,
          ...v
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
        const b = this.state.messages.findIndex(
          (_) => _.id === m.messageId
        );
        if (b === -1)
          throw new Error(`message with id ${m.messageId} not found`);
        if (this.state.messages[b].role !== "user")
          throw new Error(
            `message with id ${m.messageId} is not a user message`
          );
        this.state.messages = this.state.messages.slice(0, b + 1), this.state.replaceMessage(b, {
          ...h,
          id: m.messageId,
          role: (g = h.role) != null ? g : "user",
          metadata: m.metadata
        });
      } else
        this.state.pushMessage({
          ...h,
          id: (y = h.id) != null ? y : this.generateId(),
          role: (w = h.role) != null ? w : "user",
          metadata: m.metadata
        });
      await this.makeRequest({
        trigger: "submit-message",
        messageId: m.messageId,
        ...v
      });
    }, this.regenerate = async ({
      messageId: m,
      ...v
    } = {}) => {
      const d = m == null ? this.state.messages.length - 1 : this.state.messages.findIndex((g) => g.id === m);
      if (d === -1)
        throw new Error(`message ${m} not found`);
      this.state.messages = this.state.messages.slice(
        0,
        // if the message is a user message, we need to include it in the request:
        this.messages[d].role === "assistant" ? d : d + 1
      ), await this.makeRequest({
        trigger: "regenerate-message",
        messageId: m,
        ...v
      });
    }, this.resumeStream = async (m = {}) => {
      await this.makeRequest({ trigger: "resume-stream", ...m });
    }, this.clearError = () => {
      this.status === "error" && (this.state.error = void 0, this.setStatus({ status: "ready" }));
    }, this.addToolOutput = async ({
      state: m = "output-available",
      tool: v,
      toolCallId: d,
      output: g,
      errorText: y
    }) => this.jobExecutor.run(async () => {
      var w, h;
      const b = this.state.messages, _ = b[b.length - 1];
      this.state.replaceMessage(b.length - 1, {
        ..._,
        parts: _.parts.map(
          (x) => Rn(x) && x.toolCallId === d ? { ...x, state: m, output: g, errorText: y } : x
        )
      }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(
        (x) => Rn(x) && x.toolCallId === d ? {
          ...x,
          state: m,
          output: g,
          errorText: y
        } : x
      )), this.status !== "streaming" && this.status !== "submitted" && ((w = this.sendAutomaticallyWhen) != null && w.call(this, { messages: this.state.messages })) && this.makeRequest({
        trigger: "submit-message",
        messageId: (h = this.lastMessage) == null ? void 0 : h.id
      });
    }), this.addToolResult = this.addToolOutput, this.stop = async () => {
      var m;
      this.status !== "streaming" && this.status !== "submitted" || (m = this.activeResponse) != null && m.abortController && this.activeResponse.abortController.abort();
    }, this.id = t, this.transport = n, this.generateId = e, this.messageMetadataSchema = r, this.dataPartSchemas = o, this.state = a, this.onError = s, this.onToolCall = i, this.onFinish = u, this.onData = c, this.sendAutomaticallyWhen = f;
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
    let f = !1, m = !1, v = !1;
    try {
      const d = {
        state: Ao({
          lastMessage: this.state.snapshot(c),
          messageId: this.generateId()
        }),
        abortController: new AbortController()
      };
      d.abortController.signal.addEventListener("abort", () => {
        f = !0;
      }), this.activeResponse = d;
      let g;
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
        g = w;
      } else
        g = await this.transport.sendMessages({
          chatId: this.id,
          messages: this.state.messages,
          abortSignal: d.abortController.signal,
          metadata: t,
          headers: n,
          body: r,
          trigger: e,
          messageId: o
        });
      const y = (w) => (
        // serialize the job execution to avoid race conditions:
        this.jobExecutor.run(
          () => w({
            state: d.state,
            write: () => {
              var h;
              this.setStatus({ status: "streaming" }), d.state.message.id === ((h = this.lastMessage) == null ? void 0 : h.id) ? this.state.replaceMessage(
                this.state.messages.length - 1,
                d.state.message
              ) : this.state.pushMessage(d.state.message);
            }
          })
        )
      );
      await br({
        stream: $o({
          stream: g,
          onToolCall: this.onToolCall,
          onData: this.onData,
          messageMetadataSchema: this.messageMetadataSchema,
          dataPartSchemas: this.dataPartSchemas,
          runUpdateMessageJob: y,
          onError: (w) => {
            throw w;
          }
        }),
        onError: (w) => {
          throw w;
        }
      }), this.setStatus({ status: "ready" });
    } catch (d) {
      if (f || d.name === "AbortError")
        return f = !0, this.setStatus({ status: "ready" }), null;
      v = !0, d instanceof TypeError && (d.message.toLowerCase().includes("fetch") || d.message.toLowerCase().includes("network")) && (m = !0), this.onError && d instanceof Error && this.onError(d), this.setStatus({ status: "error", error: d });
    } finally {
      try {
        (s = this.onFinish) == null || s.call(this, {
          message: this.activeResponse.state.message,
          messages: this.state.messages,
          isAbort: f,
          isDisconnect: m,
          isError: v,
          finishReason: (a = this.activeResponse) == null ? void 0 : a.state.finishReason
        });
      } catch (d) {
        console.error(d);
      }
      this.activeResponse = void 0;
    }
    (i = this.sendAutomaticallyWhen) != null && i.call(this, { messages: this.state.messages }) && !v && await this.makeRequest({
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
    N(
      p({
        id: l(),
        role: ee(["system", "user", "assistant"]),
        metadata: de().optional(),
        parts: N(
          ie([
            p({
              type: I("text"),
              text: l(),
              state: ee(["streaming", "done"]).optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: I("reasoning"),
              text: l(),
              state: ee(["streaming", "done"]).optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: I("source-url"),
              sourceId: l(),
              url: l(),
              title: l().optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: I("source-document"),
              sourceId: l(),
              mediaType: l(),
              title: l(),
              filename: l().optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: I("file"),
              mediaType: l(),
              filename: l().optional(),
              url: l(),
              providerMetadata: fe.optional()
            }),
            p({
              type: I("step-start")
            }),
            p({
              type: l().startsWith("data-"),
              id: l().optional(),
              data: de()
            }),
            p({
              type: I("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: I("input-streaming"),
              input: de().optional(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional()
            }),
            p({
              type: I("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: I("input-available"),
              input: de(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: fe.optional()
            }),
            p({
              type: I("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: I("output-available"),
              input: de(),
              providerExecuted: J().optional(),
              output: de(),
              errorText: Te().optional(),
              callProviderMetadata: fe.optional(),
              preliminary: J().optional()
            }),
            p({
              type: I("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: I("output-error"),
              input: de(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: l(),
              callProviderMetadata: fe.optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: I("input-streaming"),
              providerExecuted: J().optional(),
              input: de().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              approval: Te().optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: I("input-available"),
              providerExecuted: J().optional(),
              input: de(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: fe.optional(),
              approval: Te().optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: I("approval-requested"),
              input: de(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: Te().optional(),
                reason: Te().optional()
              })
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: I("approval-responded"),
              input: de(),
              providerExecuted: J().optional(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: J(),
                reason: l().optional()
              })
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: I("output-available"),
              providerExecuted: J().optional(),
              input: de(),
              output: de(),
              errorText: Te().optional(),
              callProviderMetadata: fe.optional(),
              preliminary: J().optional(),
              approval: p({
                id: l(),
                approved: I(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: I("output-error"),
              providerExecuted: J().optional(),
              input: de(),
              output: Te().optional(),
              errorText: l(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: I(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: I("output-denied"),
              providerExecuted: J().optional(),
              input: de(),
              output: Te().optional(),
              errorText: Te().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: I(!1),
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
        error: new xe({
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
  generateId: o = De
}) {
  let a;
  const s = [], i = new ReadableStream({
    start(f) {
      a = f;
    }
  });
  function u(f) {
    try {
      a.enqueue(f);
    } catch {
    }
  }
  try {
    const f = e({
      writer: {
        write(m) {
          u(m);
        },
        merge(m) {
          s.push(
            (async () => {
              const v = m.getReader();
              for (; ; ) {
                const { done: d, value: g } = await v.read();
                if (d)
                  break;
                u(g);
              }
            })().catch((v) => {
              u({
                type: "error",
                errorText: t(v)
              });
            })
          );
        },
        onError: t
      }
    });
    f && s.push(
      f.catch((m) => {
        u({
          type: "error",
          errorText: t(m)
        });
      })
    );
  } catch (f) {
    u({
      type: "error",
      errorText: t(f)
    });
  }
  return new Promise(async (f) => {
    for (; s.length > 0; )
      await s.shift();
    f();
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
    start(f) {
      a = f;
    }
  }), u = Ao({
    messageId: (o = e == null ? void 0 : e.id) != null ? o : "",
    lastMessage: e
  }), c = (f) => {
    n == null || n(f), !s && r && (s = !0, a == null || a.error(f));
  };
  return br({
    stream: $o({
      stream: t,
      runUpdateMessageJob(f) {
        return f({
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
  ze as APICallError,
  lx as AbstractChat,
  T0 as DefaultChatTransport,
  Zr as DownloadError,
  lc as EmptyResponseBodyError,
  L0 as Experimental_Agent,
  tc as HttpChatTransport,
  xe as InvalidArgumentError,
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
  De as generateId,
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
