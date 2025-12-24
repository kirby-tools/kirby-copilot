var Zi = "vercel.ai.error", Hp = Symbol.for(Zi), fa, ha, se = class Li extends (ha = Error, fa = Hp, ha) {
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
    message: o,
    cause: n
  }) {
    super(o), this[fa] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Li.hasMarker(t, Zi);
  }
  static hasMarker(t, o) {
    const n = Symbol.for(o);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
}, Fi = "AI_APICallError", Vi = `vercel.ai.error.${Fi}`, Wp = Symbol.for(Vi), ga, va, Xe = class extends (va = se, ga = Wp, va) {
  constructor({
    message: e,
    url: t,
    requestBodyValues: o,
    statusCode: n,
    responseHeaders: r,
    responseBody: a,
    cause: s,
    isRetryable: i = n != null && (n === 408 || // request timeout
    n === 409 || // conflict
    n === 429 || // too many requests
    n >= 500),
    // server error
    data: u
  }) {
    super({ name: Fi, message: e, cause: s }), this[ga] = !0, this.url = t, this.requestBodyValues = o, this.statusCode = n, this.responseHeaders = r, this.responseBody = a, this.isRetryable = i, this.data = u;
  }
  static isInstance(e) {
    return se.hasMarker(e, Vi);
  }
}, Ji = "AI_EmptyResponseBodyError", Gi = `vercel.ai.error.${Ji}`, Kp = Symbol.for(Gi), _a, ya, Yp = class extends (ya = se, _a = Kp, ya) {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Ji, message: e }), this[_a] = !0;
  }
  static isInstance(e) {
    return se.hasMarker(e, Gi);
  }
};
function Eo(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Bi = "AI_InvalidArgumentError", Hi = `vercel.ai.error.${Bi}`, Xp = Symbol.for(Hi), ba, wa, qr = class extends (wa = se, ba = Xp, wa) {
  constructor({
    message: t,
    cause: o,
    argument: n
  }) {
    super({ name: Bi, message: t, cause: o }), this[ba] = !0, this.argument = n;
  }
  static isInstance(t) {
    return se.hasMarker(t, Hi);
  }
}, Wi = "AI_InvalidPromptError", Ki = `vercel.ai.error.${Wi}`, Qp = Symbol.for(Ki), xa, Ia, Xt = class extends (Ia = se, xa = Qp, Ia) {
  constructor({
    prompt: e,
    message: t,
    cause: o
  }) {
    super({ name: Wi, message: `Invalid prompt: ${t}`, cause: o }), this[xa] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, Ki);
  }
}, Yi = "AI_InvalidResponseDataError", Xi = `vercel.ai.error.${Yi}`, ed = Symbol.for(Xi), Ta, ka, tr = class extends (ka = se, Ta = ed, ka) {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: Yi, message: t }), this[Ta] = !0, this.data = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, Xi);
  }
}, Qi = "AI_JSONParseError", el = `vercel.ai.error.${Qi}`, td = Symbol.for(el), Sa, Ca, Zo = class extends (Ca = se, Sa = td, Ca) {
  constructor({ text: e, cause: t }) {
    super({
      name: Qi,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Eo(t)}`,
      cause: t
    }), this[Sa] = !0, this.text = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, el);
  }
}, tl = "AI_LoadAPIKeyError", ol = `vercel.ai.error.${tl}`, od = Symbol.for(ol), Ea, Ra, un = class extends (Ra = se, Ea = od, Ra) {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: tl, message: e }), this[Ea] = !0;
  }
  static isInstance(e) {
    return se.hasMarker(e, ol);
  }
}, nl = "AI_LoadSettingError", rl = `vercel.ai.error.${nl}`, nd = Symbol.for(rl), Ma, Na, sT = class extends (Na = se, Ma = nd, Na) {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: nl, message: e }), this[Ma] = !0;
  }
  static isInstance(e) {
    return se.hasMarker(e, rl);
  }
}, al = "AI_NoContentGeneratedError", sl = `vercel.ai.error.${al}`, rd = Symbol.for(sl), Oa, Aa, iT = class extends (Aa = se, Oa = rd, Aa) {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: al, message: e }), this[Oa] = !0;
  }
  static isInstance(e) {
    return se.hasMarker(e, sl);
  }
}, il = "AI_NoSuchModelError", ll = `vercel.ai.error.${il}`, ad = Symbol.for(ll), $a, Pa, rt = class extends (Pa = se, $a = ad, Pa) {
  constructor({
    errorName: e = il,
    modelId: t,
    modelType: o,
    message: n = `No such ${o}: ${t}`
  }) {
    super({ name: e, message: n }), this[$a] = !0, this.modelId = t, this.modelType = o;
  }
  static isInstance(e) {
    return se.hasMarker(e, ll);
  }
}, ul = "AI_TooManyEmbeddingValuesForCallError", cl = `vercel.ai.error.${ul}`, sd = Symbol.for(cl), qa, ja, jr = class extends (ja = se, qa = sd, ja) {
  constructor(e) {
    super({
      name: ul,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[qa] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return se.hasMarker(e, cl);
  }
}, pl = "AI_TypeValidationError", dl = `vercel.ai.error.${pl}`, id = Symbol.for(dl), Da, za, st = class br extends (za = se, Da = id, za) {
  constructor({ value: t, cause: o }) {
    super({
      name: pl,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Eo(o)}`,
      cause: o
    }), this[Da] = !0, this.value = t;
  }
  static isInstance(t) {
    return se.hasMarker(t, dl);
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
    cause: o
  }) {
    return br.isInstance(o) && o.value === t ? o : new br({ value: t, cause: o });
  }
}, ml = "AI_UnsupportedFunctionalityError", fl = `vercel.ai.error.${ml}`, ld = Symbol.for(fl), Ua, Za, Ge = class extends (Za = se, Ua = ld, Za) {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: ml, message: t }), this[Ua] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, fl);
  }
};
function _n(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? !0 : Array.isArray(e) ? e.every(_n) : typeof e == "object" ? Object.entries(e).every(
    ([t, o]) => typeof t == "string" && (o === void 0 || _n(o))
  ) : !1;
}
function La(e) {
  return Array.isArray(e) && e.every(_n);
}
function yn(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, o]) => typeof t == "string" && (o === void 0 || _n(o))
  );
}
function $(e, t, o) {
  function n(i, u) {
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
    const c = s.prototype, m = Object.keys(c);
    for (let f = 0; f < m.length; f++) {
      const d = m[f];
      d in i || (i[d] = c[d].bind(i));
    }
  }
  const r = (o == null ? void 0 : o.Parent) ?? Object;
  class a extends r {
  }
  Object.defineProperty(a, "name", { value: e });
  function s(i) {
    var u;
    const c = o != null && o.Parent ? new a() : this;
    n(c, i), (u = c._zod).deferred ?? (u.deferred = []);
    for (const m of c._zod.deferred)
      m();
    return c;
  }
  return Object.defineProperty(s, "init", { value: n }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (i) => {
      var u, c;
      return o != null && o.Parent && i instanceof o.Parent ? !0 : (c = (u = i == null ? void 0 : i._zod) == null ? void 0 : u.traits) == null ? void 0 : c.has(e);
    }
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class yo extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class hl extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const gl = {};
function Vt(e) {
  return gl;
}
function vl(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, r]) => t.indexOf(+n) === -1).map(([n, r]) => r);
}
function wr(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function $n(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Dr(e) {
  return e == null;
}
function zr(e) {
  const t = e.startsWith("^") ? 1 : 0, o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, o);
}
function ud(e, t) {
  const o = (e.toString().split(".")[1] || "").length, n = t.toString();
  let r = (n.split(".")[1] || "").length;
  if (r === 0 && /\d?e-\d?/.test(n)) {
    const u = n.match(/\d?e-(\d?)/);
    u != null && u[1] && (r = Number.parseInt(u[1]));
  }
  const a = o > r ? o : r, s = Number.parseInt(e.toFixed(a).replace(".", "")), i = Number.parseInt(t.toFixed(a).replace(".", ""));
  return s % i / 10 ** a;
}
const Fa = Symbol("evaluating");
function Ee(e, t, o) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== Fa)
        return n === void 0 && (n = Fa, n = o()), n;
    },
    set(r) {
      Object.defineProperty(e, t, {
        value: r
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function io(e, t, o) {
  Object.defineProperty(e, t, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function lo(...e) {
  const t = {};
  for (const o of e) {
    const n = Object.getOwnPropertyDescriptors(o);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function Va(e) {
  return JSON.stringify(e);
}
function cd(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const _l = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Lo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const pd = $n(() => {
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
function xo(e) {
  if (Lo(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const o = t.prototype;
  return !(Lo(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function yl(e) {
  return xo(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const dd = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Io(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ht(e, t, o) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || o != null && o.parent) && (n._zod.parent = e), n;
}
function re(e) {
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
function md(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const fd = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function hd(e, t) {
  const o = e._zod.def, n = lo(e._zod.def, {
    get shape() {
      const r = {};
      for (const a in t) {
        if (!(a in o.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (r[a] = o.shape[a]);
      }
      return io(this, "shape", r), r;
    },
    checks: []
  });
  return Ht(e, n);
}
function gd(e, t) {
  const o = e._zod.def, n = lo(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in o.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete r[a];
      }
      return io(this, "shape", r), r;
    },
    checks: []
  });
  return Ht(e, n);
}
function vd(e, t) {
  if (!xo(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = e._zod.def.checks;
  if (o && o.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const r = lo(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape, ...t };
      return io(this, "shape", a), a;
    },
    checks: []
  });
  return Ht(e, r);
}
function _d(e, t) {
  if (!xo(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return io(this, "shape", n), n;
    },
    checks: e._zod.def.checks
  };
  return Ht(e, o);
}
function yd(e, t) {
  const o = lo(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return io(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Ht(e, o);
}
function bd(e, t, o) {
  const n = lo(t._zod.def, {
    get shape() {
      const r = t._zod.def.shape, a = { ...r };
      if (o)
        for (const s in o) {
          if (!(s in r))
            throw new Error(`Unrecognized key: "${s}"`);
          o[s] && (a[s] = e ? new e({
            type: "optional",
            innerType: r[s]
          }) : r[s]);
        }
      else
        for (const s in r)
          a[s] = e ? new e({
            type: "optional",
            innerType: r[s]
          }) : r[s];
      return io(this, "shape", a), a;
    },
    checks: []
  });
  return Ht(t, n);
}
function wd(e, t, o) {
  const n = lo(t._zod.def, {
    get shape() {
      const r = t._zod.def.shape, a = { ...r };
      if (o)
        for (const s in o) {
          if (!(s in a))
            throw new Error(`Unrecognized key: "${s}"`);
          o[s] && (a[s] = new e({
            type: "nonoptional",
            innerType: r[s]
          }));
        }
      else
        for (const s in r)
          a[s] = new e({
            type: "nonoptional",
            innerType: r[s]
          });
      return io(this, "shape", a), a;
    },
    checks: []
  });
  return Ht(t, n);
}
function _o(e, t = 0) {
  var o;
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (((o = e.issues[n]) == null ? void 0 : o.continue) !== !0)
      return !0;
  return !1;
}
function eo(e, t) {
  return t.map((o) => {
    var n;
    return (n = o).path ?? (n.path = []), o.path.unshift(e), o;
  });
}
function cn(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function Jt(e, t, o) {
  var r, a, s, i, u, c;
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const m = cn((s = (a = (r = e.inst) == null ? void 0 : r._zod.def) == null ? void 0 : a.error) == null ? void 0 : s.call(a, e)) ?? cn((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? cn((u = o.customError) == null ? void 0 : u.call(o, e)) ?? cn((c = o.localeError) == null ? void 0 : c.call(o, e)) ?? "Invalid input";
    n.message = m;
  }
  return delete n.inst, delete n.continue, t != null && t.reportInput || delete n.input, n;
}
function Ur(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Fo(...e) {
  const [t, o, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: o,
    inst: n
  } : { ...t };
}
const bl = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, wr, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, wl = $("$ZodError", bl), xl = $("$ZodError", bl, { Parent: Error });
function xd(e, t = (o) => o.message) {
  const o = {}, n = [];
  for (const r of e.issues)
    r.path.length > 0 ? (o[r.path[0]] = o[r.path[0]] || [], o[r.path[0]].push(t(r))) : n.push(t(r));
  return { formErrors: n, fieldErrors: o };
}
function Id(e, t = (o) => o.message) {
  const o = { _errors: [] }, n = (r) => {
    for (const a of r.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map((s) => n({ issues: s }));
      else if (a.code === "invalid_key")
        n({ issues: a.issues });
      else if (a.code === "invalid_element")
        n({ issues: a.issues });
      else if (a.path.length === 0)
        o._errors.push(t(a));
      else {
        let s = o, i = 0;
        for (; i < a.path.length; ) {
          const u = a.path[i];
          i === a.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(t(a))) : s[u] = s[u] || { _errors: [] }, s = s[u], i++;
        }
      }
  };
  return n(e), o;
}
const Zr = (e) => (t, o, n, r) => {
  const a = n ? Object.assign(n, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: o, issues: [] }, a);
  if (s instanceof Promise)
    throw new yo();
  if (s.issues.length) {
    const i = new ((r == null ? void 0 : r.Err) ?? e)(s.issues.map((u) => Jt(u, a, Vt())));
    throw _l(i, r == null ? void 0 : r.callee), i;
  }
  return s.value;
}, Lr = (e) => async (t, o, n, r) => {
  const a = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: o, issues: [] }, a);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const i = new ((r == null ? void 0 : r.Err) ?? e)(s.issues.map((u) => Jt(u, a, Vt())));
    throw _l(i, r == null ? void 0 : r.callee), i;
  }
  return s.value;
}, Pn = (e) => (t, o, n) => {
  const r = n ? { ...n, async: !1 } : { async: !1 }, a = t._zod.run({ value: o, issues: [] }, r);
  if (a instanceof Promise)
    throw new yo();
  return a.issues.length ? {
    success: !1,
    error: new (e ?? wl)(a.issues.map((s) => Jt(s, r, Vt())))
  } : { success: !0, data: a.value };
}, Td = /* @__PURE__ */ Pn(xl), qn = (e) => async (t, o, n) => {
  const r = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: o, issues: [] }, r);
  return a instanceof Promise && (a = await a), a.issues.length ? {
    success: !1,
    error: new e(a.issues.map((s) => Jt(s, r, Vt())))
  } : { success: !0, data: a.value };
}, kd = /* @__PURE__ */ qn(xl), Sd = (e) => (t, o, n) => {
  const r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Zr(e)(t, o, r);
}, Cd = (e) => (t, o, n) => Zr(e)(t, o, n), Ed = (e) => async (t, o, n) => {
  const r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Lr(e)(t, o, r);
}, Rd = (e) => async (t, o, n) => Lr(e)(t, o, n), Md = (e) => (t, o, n) => {
  const r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Pn(e)(t, o, r);
}, Nd = (e) => (t, o, n) => Pn(e)(t, o, n), Od = (e) => async (t, o, n) => {
  const r = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return qn(e)(t, o, r);
}, Ad = (e) => async (t, o, n) => qn(e)(t, o, n), $d = /^[cC][^\s-]{8,}$/, Pd = /^[0-9a-z]+$/, qd = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, jd = /^[0-9a-vA-V]{20}$/, Dd = /^[A-Za-z0-9]{27}$/, zd = /^[a-zA-Z0-9_-]{21}$/, Ud = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Zd = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ja = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ld = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Fd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Vd() {
  return new RegExp(Fd, "u");
}
const Jd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Gd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Bd = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Hd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Wd = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Il = /^[A-Za-z0-9_-]*$/, Kd = /^\+(?:[0-9]){6,14}[0-9]$/, Tl = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Yd = /* @__PURE__ */ new RegExp(`^${Tl}$`);
function kl(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Xd(e) {
  return new RegExp(`^${kl(e)}$`);
}
function Qd(e) {
  const t = kl({ precision: e.precision }), o = ["Z"];
  e.local && o.push(""), e.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${o.join("|")})`;
  return new RegExp(`^${Tl}T(?:${n})$`);
}
const em = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, tm = /^-?\d+$/, om = /^-?\d+(?:\.\d+)?/, nm = /^(?:true|false)$/i, rm = /^null$/i, am = /^[^A-Z]*$/, sm = /^[^a-z]*$/, ht = /* @__PURE__ */ $("$ZodCheck", (e, t) => {
  var o;
  e._zod ?? (e._zod = {}), e._zod.def = t, (o = e._zod).onattach ?? (o.onattach = []);
}), Sl = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Cl = /* @__PURE__ */ $("$ZodCheckLessThan", (e, t) => {
  ht.init(e, t);
  const o = Sl[typeof t.value];
  e._zod.onattach.push((n) => {
    const r = n._zod.bag, a = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < a && (t.inclusive ? r.maximum = t.value : r.exclusiveMaximum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), El = /* @__PURE__ */ $("$ZodCheckGreaterThan", (e, t) => {
  ht.init(e, t);
  const o = Sl[typeof t.value];
  e._zod.onattach.push((n) => {
    const r = n._zod.bag, a = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > a && (t.inclusive ? r.minimum = t.value : r.exclusiveMinimum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), im = /* @__PURE__ */ $("$ZodCheckMultipleOf", (e, t) => {
  ht.init(e, t), e._zod.onattach.push((o) => {
    var n;
    (n = o._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (o) => {
    if (typeof o.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % t.value === BigInt(0) : ud(o.value, t.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), lm = /* @__PURE__ */ $("$ZodCheckNumberFormat", (e, t) => {
  var s;
  ht.init(e, t), t.format = t.format || "float64";
  const o = (s = t.format) == null ? void 0 : s.includes("int"), n = o ? "int" : "number", [r, a] = fd[t.format];
  e._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = t.format, u.minimum = r, u.maximum = a, o && (u.pattern = tm);
  }), e._zod.check = (i) => {
    const u = i.value;
    if (o) {
      if (!Number.isInteger(u)) {
        i.issues.push({
          expected: n,
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
          origin: n,
          continue: !t.abort
        }) : i.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !t.abort
        });
        return;
      }
    }
    u < r && i.issues.push({
      origin: "number",
      input: u,
      code: "too_small",
      minimum: r,
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
}), um = /* @__PURE__ */ $("$ZodCheckMaxLength", (e, t) => {
  var o;
  ht.init(e, t), (o = e._zod.def).when ?? (o.when = (n) => {
    const r = n.value;
    return !Dr(r) && r.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const r = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < r && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const r = n.value;
    if (r.length <= t.maximum)
      return;
    const s = Ur(r);
    n.issues.push({
      origin: s,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), cm = /* @__PURE__ */ $("$ZodCheckMinLength", (e, t) => {
  var o;
  ht.init(e, t), (o = e._zod.def).when ?? (o.when = (n) => {
    const r = n.value;
    return !Dr(r) && r.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const r = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > r && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const r = n.value;
    if (r.length >= t.minimum)
      return;
    const s = Ur(r);
    n.issues.push({
      origin: s,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), pm = /* @__PURE__ */ $("$ZodCheckLengthEquals", (e, t) => {
  var o;
  ht.init(e, t), (o = e._zod.def).when ?? (o.when = (n) => {
    const r = n.value;
    return !Dr(r) && r.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const r = n._zod.bag;
    r.minimum = t.length, r.maximum = t.length, r.length = t.length;
  }), e._zod.check = (n) => {
    const r = n.value, a = r.length;
    if (a === t.length)
      return;
    const s = Ur(r), i = a > t.length;
    n.issues.push({
      origin: s,
      ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), jn = /* @__PURE__ */ $("$ZodCheckStringFormat", (e, t) => {
  var o, n;
  ht.init(e, t), e._zod.onattach.push((r) => {
    const a = r._zod.bag;
    a.format = t.format, t.pattern && (a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(t.pattern));
  }), t.pattern ? (o = e._zod).check ?? (o.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: r.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), dm = /* @__PURE__ */ $("$ZodCheckRegex", (e, t) => {
  jn.init(e, t), e._zod.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), mm = /* @__PURE__ */ $("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = am), jn.init(e, t);
}), fm = /* @__PURE__ */ $("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = sm), jn.init(e, t);
}), hm = /* @__PURE__ */ $("$ZodCheckIncludes", (e, t) => {
  ht.init(e, t);
  const o = Io(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${o}` : o);
  t.pattern = n, e._zod.onattach.push((r) => {
    const a = r._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.includes(t.includes, t.position) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), gm = /* @__PURE__ */ $("$ZodCheckStartsWith", (e, t) => {
  ht.init(e, t);
  const o = new RegExp(`^${Io(t.prefix)}.*`);
  t.pattern ?? (t.pattern = o), e._zod.onattach.push((n) => {
    const r = n._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(o);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), vm = /* @__PURE__ */ $("$ZodCheckEndsWith", (e, t) => {
  ht.init(e, t);
  const o = new RegExp(`.*${Io(t.suffix)}$`);
  t.pattern ?? (t.pattern = o), e._zod.onattach.push((n) => {
    const r = n._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(o);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), _m = /* @__PURE__ */ $("$ZodCheckOverwrite", (e, t) => {
  ht.init(e, t), e._zod.check = (o) => {
    o.value = t.tx(o.value);
  };
});
class ym {
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
    const n = t.split(`
`).filter((s) => s), r = Math.min(...n.map((s) => s.length - s.trimStart().length)), a = n.map((s) => s.slice(r)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of a)
      this.content.push(s);
  }
  compile() {
    const t = Function, o = this == null ? void 0 : this.args, r = [...((this == null ? void 0 : this.content) ?? [""]).map((a) => `  ${a}`)];
    return new t(...o, r.join(`
`));
  }
}
const bm = {
  major: 4,
  minor: 2,
  patch: 1
}, Ne = /* @__PURE__ */ $("$ZodType", (e, t) => {
  var r;
  var o;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = bm;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const a of n)
    for (const s of a._zod.onattach)
      s(e);
  if (n.length === 0)
    (o = e._zod).deferred ?? (o.deferred = []), (r = e._zod.deferred) == null || r.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const a = (i, u, c) => {
      let m = _o(i), f;
      for (const d of u) {
        if (d._zod.def.when) {
          if (!d._zod.def.when(i))
            continue;
        } else if (m)
          continue;
        const g = i.issues.length, _ = d._zod.check(i);
        if (_ instanceof Promise && (c == null ? void 0 : c.async) === !1)
          throw new yo();
        if (f || _ instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await _, i.issues.length !== g && (m || (m = _o(i, g)));
          });
        else {
          if (i.issues.length === g)
            continue;
          m || (m = _o(i, g));
        }
      }
      return f ? f.then(() => i) : i;
    }, s = (i, u, c) => {
      if (_o(i))
        return i.aborted = !0, i;
      const m = a(u, n, c);
      if (m instanceof Promise) {
        if (c.async === !1)
          throw new yo();
        return m.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(m, c);
    };
    e._zod.run = (i, u) => {
      if (u.skipChecks)
        return e._zod.parse(i, u);
      if (u.direction === "backward") {
        const m = e._zod.parse({ value: i.value, issues: [] }, { ...u, skipChecks: !0 });
        return m instanceof Promise ? m.then((f) => s(f, i, u)) : s(m, i, u);
      }
      const c = e._zod.parse(i, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new yo();
        return c.then((m) => a(m, n, u));
      }
      return a(c, n, u);
    };
  }
  e["~standard"] = {
    validate: (a) => {
      var s;
      try {
        const i = Td(e, a);
        return i.success ? { value: i.data } : { issues: (s = i.error) == null ? void 0 : s.issues };
      } catch {
        return kd(e, a).then((u) => {
          var c;
          return u.success ? { value: u.data } : { issues: (c = u.error) == null ? void 0 : c.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Fr = /* @__PURE__ */ $("$ZodString", (e, t) => {
  var o;
  Ne.init(e, t), e._zod.pattern = [...((o = e == null ? void 0 : e._zod.bag) == null ? void 0 : o.patterns) ?? []].pop() ?? em(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), ze = /* @__PURE__ */ $("$ZodStringFormat", (e, t) => {
  jn.init(e, t), Fr.init(e, t);
}), wm = /* @__PURE__ */ $("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Zd), ze.init(e, t);
}), xm = /* @__PURE__ */ $("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Ja(n));
  } else
    t.pattern ?? (t.pattern = Ja());
  ze.init(e, t);
}), Im = /* @__PURE__ */ $("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Ld), ze.init(e, t);
}), Tm = /* @__PURE__ */ $("$ZodURL", (e, t) => {
  ze.init(e, t), e._zod.check = (o) => {
    try {
      const n = o.value.trim(), r = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(r.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: o.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: o.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? o.value = r.href : o.value = n;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), km = /* @__PURE__ */ $("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Vd()), ze.init(e, t);
}), Sm = /* @__PURE__ */ $("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = zd), ze.init(e, t);
}), Cm = /* @__PURE__ */ $("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = $d), ze.init(e, t);
}), Em = /* @__PURE__ */ $("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Pd), ze.init(e, t);
}), Rm = /* @__PURE__ */ $("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = qd), ze.init(e, t);
}), Mm = /* @__PURE__ */ $("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = jd), ze.init(e, t);
}), Nm = /* @__PURE__ */ $("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Dd), ze.init(e, t);
}), Om = /* @__PURE__ */ $("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Qd(t)), ze.init(e, t);
}), Am = /* @__PURE__ */ $("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Yd), ze.init(e, t);
}), $m = /* @__PURE__ */ $("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Xd(t)), ze.init(e, t);
}), Pm = /* @__PURE__ */ $("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Ud), ze.init(e, t);
}), qm = /* @__PURE__ */ $("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Jd), ze.init(e, t), e._zod.bag.format = "ipv4";
}), jm = /* @__PURE__ */ $("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Gd), ze.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Dm = /* @__PURE__ */ $("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Bd), ze.init(e, t);
}), zm = /* @__PURE__ */ $("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Hd), ze.init(e, t), e._zod.check = (o) => {
    const n = o.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [r, a] = n;
      if (!a)
        throw new Error();
      const s = Number(a);
      if (`${s}` !== a)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${r}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function Rl(e) {
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
const Um = /* @__PURE__ */ $("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Wd), ze.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (o) => {
    Rl(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Zm(e) {
  if (!Il.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), o = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Rl(o);
}
const Lm = /* @__PURE__ */ $("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Il), ze.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (o) => {
    Zm(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Fm = /* @__PURE__ */ $("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Kd), ze.init(e, t);
});
function Vm(e, t = null) {
  try {
    const o = e.split(".");
    if (o.length !== 3)
      return !1;
    const [n] = o;
    if (!n)
      return !1;
    const r = JSON.parse(atob(n));
    return !("typ" in r && (r == null ? void 0 : r.typ) !== "JWT" || !r.alg || t && (!("alg" in r) || r.alg !== t));
  } catch {
    return !1;
  }
}
const Jm = /* @__PURE__ */ $("$ZodJWT", (e, t) => {
  ze.init(e, t), e._zod.check = (o) => {
    Vm(o.value, t.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ml = /* @__PURE__ */ $("$ZodNumber", (e, t) => {
  Ne.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? om, e._zod.parse = (o, n) => {
    if (t.coerce)
      try {
        o.value = Number(o.value);
      } catch {
      }
    const r = o.value;
    if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r))
      return o;
    const a = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : "Infinity" : void 0;
    return o.issues.push({
      expected: "number",
      code: "invalid_type",
      input: r,
      inst: e,
      ...a ? { received: a } : {}
    }), o;
  };
}), Gm = /* @__PURE__ */ $("$ZodNumberFormat", (e, t) => {
  lm.init(e, t), Ml.init(e, t);
}), Bm = /* @__PURE__ */ $("$ZodBoolean", (e, t) => {
  Ne.init(e, t), e._zod.pattern = nm, e._zod.parse = (o, n) => {
    if (t.coerce)
      try {
        o.value = !!o.value;
      } catch {
      }
    const r = o.value;
    return typeof r == "boolean" || o.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: r,
      inst: e
    }), o;
  };
}), Hm = /* @__PURE__ */ $("$ZodNull", (e, t) => {
  Ne.init(e, t), e._zod.pattern = rm, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (o, n) => {
    const r = o.value;
    return r === null || o.issues.push({
      expected: "null",
      code: "invalid_type",
      input: r,
      inst: e
    }), o;
  };
}), Wm = /* @__PURE__ */ $("$ZodAny", (e, t) => {
  Ne.init(e, t), e._zod.parse = (o) => o;
}), Km = /* @__PURE__ */ $("$ZodUnknown", (e, t) => {
  Ne.init(e, t), e._zod.parse = (o) => o;
}), Ym = /* @__PURE__ */ $("$ZodNever", (e, t) => {
  Ne.init(e, t), e._zod.parse = (o, n) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: e
  }), o);
});
function Ga(e, t, o) {
  e.issues.length && t.issues.push(...eo(o, e.issues)), t.value[o] = e.value;
}
const Xm = /* @__PURE__ */ $("$ZodArray", (e, t) => {
  Ne.init(e, t), e._zod.parse = (o, n) => {
    const r = o.value;
    if (!Array.isArray(r))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: e
      }), o;
    o.value = Array(r.length);
    const a = [];
    for (let s = 0; s < r.length; s++) {
      const i = r[s], u = t.element._zod.run({
        value: i,
        issues: []
      }, n);
      u instanceof Promise ? a.push(u.then((c) => Ga(c, o, s))) : Ga(u, o, s);
    }
    return a.length ? Promise.all(a).then(() => o) : o;
  };
});
function bn(e, t, o, n) {
  e.issues.length && t.issues.push(...eo(o, e.issues)), e.value === void 0 ? o in n && (t.value[o] = void 0) : t.value[o] = e.value;
}
function Nl(e) {
  var n, r, a, s;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((s = (a = (r = (n = e.shape) == null ? void 0 : n[i]) == null ? void 0 : r._zod) == null ? void 0 : a.traits) != null && s.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const o = md(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(o)
  };
}
function Ol(e, t, o, n, r, a) {
  const s = [], i = r.keySet, u = r.catchall._zod, c = u.def.type;
  for (const m in t) {
    if (i.has(m))
      continue;
    if (c === "never") {
      s.push(m);
      continue;
    }
    const f = u.run({ value: t[m], issues: [] }, n);
    f instanceof Promise ? e.push(f.then((d) => bn(d, o, m, t))) : bn(f, o, m, t);
  }
  return s.length && o.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: a
  }), e.length ? Promise.all(e).then(() => o) : o;
}
const Qm = /* @__PURE__ */ $("$ZodObject", (e, t) => {
  Ne.init(e, t);
  const o = Object.getOwnPropertyDescriptor(t, "shape");
  if (!(o != null && o.get)) {
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
  const n = $n(() => Nl(t));
  Ee(e._zod, "propValues", () => {
    const i = t.shape, u = {};
    for (const c in i) {
      const m = i[c]._zod;
      if (m.values) {
        u[c] ?? (u[c] = /* @__PURE__ */ new Set());
        for (const f of m.values)
          u[c].add(f);
      }
    }
    return u;
  });
  const r = Lo, a = t.catchall;
  let s;
  e._zod.parse = (i, u) => {
    s ?? (s = n.value);
    const c = i.value;
    if (!r(c))
      return i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: c,
        inst: e
      }), i;
    i.value = {};
    const m = [], f = s.shape;
    for (const d of s.keys) {
      const _ = f[d]._zod.run({ value: c[d], issues: [] }, u);
      _ instanceof Promise ? m.push(_.then((v) => bn(v, i, d, c))) : bn(_, i, d, c);
    }
    return a ? Ol(m, c, i, u, n.value, e) : m.length ? Promise.all(m).then(() => i) : i;
  };
}), ef = /* @__PURE__ */ $("$ZodObjectJIT", (e, t) => {
  Qm.init(e, t);
  const o = e._zod.parse, n = $n(() => Nl(t)), r = (d) => {
    const g = new ym(["shape", "payload", "ctx"]), _ = n.value, v = (w) => {
      const E = Va(w);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    g.write("const input = payload.value;");
    const y = /* @__PURE__ */ Object.create(null);
    let S = 0;
    for (const w of _.keys)
      y[w] = `key_${S++}`;
    g.write("const newResult = {};");
    for (const w of _.keys) {
      const E = y[w], k = Va(w);
      g.write(`const ${E} = ${v(w)};`), g.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        
        if (${E}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${E}.value;
        }
        
      `);
    }
    g.write("payload.value = newResult;"), g.write("return payload;");
    const C = g.compile();
    return (w, E) => C(d, w, E);
  };
  let a;
  const s = Lo, i = !gl.jitless, c = i && pd.value, m = t.catchall;
  let f;
  e._zod.parse = (d, g) => {
    f ?? (f = n.value);
    const _ = d.value;
    return s(_) ? i && c && (g == null ? void 0 : g.async) === !1 && g.jitless !== !0 ? (a || (a = r(t.shape)), d = a(d, g), m ? Ol([], _, d, g, f, e) : d) : o(d, g) : (d.issues.push({
      expected: "object",
      code: "invalid_type",
      input: _,
      inst: e
    }), d);
  };
});
function Ba(e, t, o, n) {
  for (const a of e)
    if (a.issues.length === 0)
      return t.value = a.value, t;
  const r = e.filter((a) => !_o(a));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: o,
    errors: e.map((a) => a.issues.map((s) => Jt(s, n, Vt())))
  }), t);
}
const Al = /* @__PURE__ */ $("$ZodUnion", (e, t) => {
  Ne.init(e, t), Ee(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), Ee(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), Ee(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), Ee(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((a) => a._zod.pattern);
      return new RegExp(`^(${r.map((a) => zr(a.source)).join("|")})$`);
    }
  });
  const o = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (r, a) => {
    if (o)
      return n(r, a);
    let s = !1;
    const i = [];
    for (const u of t.options) {
      const c = u._zod.run({
        value: r.value,
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
    return s ? Promise.all(i).then((u) => Ba(u, r, e, a)) : Ba(i, r, e, a);
  };
}), tf = /* @__PURE__ */ $("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, Al.init(e, t);
  const o = e._zod.parse;
  Ee(e._zod, "propValues", () => {
    const r = {};
    for (const a of t.options) {
      const s = a._zod.propValues;
      if (!s || Object.keys(s).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);
      for (const [i, u] of Object.entries(s)) {
        r[i] || (r[i] = /* @__PURE__ */ new Set());
        for (const c of u)
          r[i].add(c);
      }
    }
    return r;
  });
  const n = $n(() => {
    var s;
    const r = t.options, a = /* @__PURE__ */ new Map();
    for (const i of r) {
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
  e._zod.parse = (r, a) => {
    const s = r.value;
    if (!Lo(s))
      return r.issues.push({
        code: "invalid_type",
        expected: "object",
        input: s,
        inst: e
      }), r;
    const i = n.value.get(s == null ? void 0 : s[t.discriminator]);
    return i ? i._zod.run(r, a) : t.unionFallback ? o(r, a) : (r.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: s,
      path: [t.discriminator],
      inst: e
    }), r);
  };
}), of = /* @__PURE__ */ $("$ZodIntersection", (e, t) => {
  Ne.init(e, t), e._zod.parse = (o, n) => {
    const r = o.value, a = t.left._zod.run({ value: r, issues: [] }, n), s = t.right._zod.run({ value: r, issues: [] }, n);
    return a instanceof Promise || s instanceof Promise ? Promise.all([a, s]).then(([u, c]) => Ha(o, u, c)) : Ha(o, a, s);
  };
});
function xr(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (xo(e) && xo(t)) {
    const o = Object.keys(t), n = Object.keys(e).filter((a) => o.indexOf(a) !== -1), r = { ...e, ...t };
    for (const a of n) {
      const s = xr(e[a], t[a]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...s.mergeErrorPath]
        };
      r[a] = s.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = t[n], s = xr(r, a);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...s.mergeErrorPath]
        };
      o.push(s.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Ha(e, t, o) {
  if (t.issues.length && e.issues.push(...t.issues), o.issues.length && e.issues.push(...o.issues), _o(e))
    return e;
  const n = xr(t.value, o.value);
  if (!n.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  return e.value = n.data, e;
}
const nf = /* @__PURE__ */ $("$ZodTuple", (e, t) => {
  Ne.init(e, t);
  const o = t.items;
  e._zod.parse = (n, r) => {
    const a = n.value;
    if (!Array.isArray(a))
      return n.issues.push({
        input: a,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), n;
    n.value = [];
    const s = [], i = [...o].reverse().findIndex((m) => m._zod.optin !== "optional"), u = i === -1 ? 0 : o.length - i;
    if (!t.rest) {
      const m = a.length > o.length, f = a.length < u - 1;
      if (m || f)
        return n.issues.push({
          ...m ? { code: "too_big", maximum: o.length } : { code: "too_small", minimum: o.length },
          input: a,
          inst: e,
          origin: "array"
        }), n;
    }
    let c = -1;
    for (const m of o) {
      if (c++, c >= a.length && c >= u)
        continue;
      const f = m._zod.run({
        value: a[c],
        issues: []
      }, r);
      f instanceof Promise ? s.push(f.then((d) => pn(d, n, c))) : pn(f, n, c);
    }
    if (t.rest) {
      const m = a.slice(o.length);
      for (const f of m) {
        c++;
        const d = t.rest._zod.run({
          value: f,
          issues: []
        }, r);
        d instanceof Promise ? s.push(d.then((g) => pn(g, n, c))) : pn(d, n, c);
      }
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function pn(e, t, o) {
  e.issues.length && t.issues.push(...eo(o, e.issues)), t.value[o] = e.value;
}
const rf = /* @__PURE__ */ $("$ZodRecord", (e, t) => {
  Ne.init(e, t), e._zod.parse = (o, n) => {
    const r = o.value;
    if (!xo(r))
      return o.issues.push({
        expected: "record",
        code: "invalid_type",
        input: r,
        inst: e
      }), o;
    const a = [], s = t.keyType._zod.values;
    if (s) {
      o.value = {};
      const i = /* @__PURE__ */ new Set();
      for (const c of s)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          i.add(typeof c == "number" ? c.toString() : c);
          const m = t.valueType._zod.run({ value: r[c], issues: [] }, n);
          m instanceof Promise ? a.push(m.then((f) => {
            f.issues.length && o.issues.push(...eo(c, f.issues)), o.value[c] = f.value;
          })) : (m.issues.length && o.issues.push(...eo(c, m.issues)), o.value[c] = m.value);
        }
      let u;
      for (const c in r)
        i.has(c) || (u = u ?? [], u.push(c));
      u && u.length > 0 && o.issues.push({
        code: "unrecognized_keys",
        input: r,
        inst: e,
        keys: u
      });
    } else {
      o.value = {};
      for (const i of Reflect.ownKeys(r)) {
        if (i === "__proto__")
          continue;
        const u = t.keyType._zod.run({ value: i, issues: [] }, n);
        if (u instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (u.issues.length) {
          t.mode === "loose" ? o.value[i] = r[i] : o.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: u.issues.map((m) => Jt(m, n, Vt())),
            input: i,
            path: [i],
            inst: e
          });
          continue;
        }
        const c = t.valueType._zod.run({ value: r[i], issues: [] }, n);
        c instanceof Promise ? a.push(c.then((m) => {
          m.issues.length && o.issues.push(...eo(i, m.issues)), o.value[u.value] = m.value;
        })) : (c.issues.length && o.issues.push(...eo(i, c.issues)), o.value[u.value] = c.value);
      }
    }
    return a.length ? Promise.all(a).then(() => o) : o;
  };
}), af = /* @__PURE__ */ $("$ZodEnum", (e, t) => {
  Ne.init(e, t);
  const o = vl(t.entries), n = new Set(o);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${o.filter((r) => dd.has(typeof r)).map((r) => typeof r == "string" ? Io(r) : r.toString()).join("|")})$`), e._zod.parse = (r, a) => {
    const s = r.value;
    return n.has(s) || r.issues.push({
      code: "invalid_value",
      values: o,
      input: s,
      inst: e
    }), r;
  };
}), sf = /* @__PURE__ */ $("$ZodLiteral", (e, t) => {
  if (Ne.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(t.values);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${t.values.map((n) => typeof n == "string" ? Io(n) : n ? Io(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, r) => {
    const a = n.value;
    return o.has(a) || n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: a,
      inst: e
    }), n;
  };
}), lf = /* @__PURE__ */ $("$ZodTransform", (e, t) => {
  Ne.init(e, t), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      throw new hl(e.constructor.name);
    const r = t.transform(o.value, o);
    if (n.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((s) => (o.value = s, o));
    if (r instanceof Promise)
      throw new yo();
    return o.value = r, o;
  };
});
function Wa(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const uf = /* @__PURE__ */ $("$ZodOptional", (e, t) => {
  Ne.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Ee(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Ee(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${zr(o.source)})?$`) : void 0;
  }), e._zod.parse = (o, n) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(o, n);
      return r instanceof Promise ? r.then((a) => Wa(a, o.value)) : Wa(r, o.value);
    }
    return o.value === void 0 ? o : t.innerType._zod.run(o, n);
  };
}), cf = /* @__PURE__ */ $("$ZodNullable", (e, t) => {
  Ne.init(e, t), Ee(e._zod, "optin", () => t.innerType._zod.optin), Ee(e._zod, "optout", () => t.innerType._zod.optout), Ee(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${zr(o.source)}|null)$`) : void 0;
  }), Ee(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (o, n) => o.value === null ? o : t.innerType._zod.run(o, n);
}), pf = /* @__PURE__ */ $("$ZodDefault", (e, t) => {
  Ne.init(e, t), e._zod.optin = "optional", Ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(o, n);
    if (o.value === void 0)
      return o.value = t.defaultValue, o;
    const r = t.innerType._zod.run(o, n);
    return r instanceof Promise ? r.then((a) => Ka(a, t)) : Ka(r, t);
  };
});
function Ka(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const df = /* @__PURE__ */ $("$ZodPrefault", (e, t) => {
  Ne.init(e, t), e._zod.optin = "optional", Ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, n) => (n.direction === "backward" || o.value === void 0 && (o.value = t.defaultValue), t.innerType._zod.run(o, n));
}), mf = /* @__PURE__ */ $("$ZodNonOptional", (e, t) => {
  Ne.init(e, t), Ee(e._zod, "values", () => {
    const o = t.innerType._zod.values;
    return o ? new Set([...o].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (o, n) => {
    const r = t.innerType._zod.run(o, n);
    return r instanceof Promise ? r.then((a) => Ya(a, e)) : Ya(r, e);
  };
});
function Ya(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const ff = /* @__PURE__ */ $("$ZodCatch", (e, t) => {
  Ne.init(e, t), Ee(e._zod, "optin", () => t.innerType._zod.optin), Ee(e._zod, "optout", () => t.innerType._zod.optout), Ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(o, n);
    const r = t.innerType._zod.run(o, n);
    return r instanceof Promise ? r.then((a) => (o.value = a.value, a.issues.length && (o.value = t.catchValue({
      ...o,
      error: {
        issues: a.issues.map((s) => Jt(s, n, Vt()))
      },
      input: o.value
    }), o.issues = []), o)) : (o.value = r.value, r.issues.length && (o.value = t.catchValue({
      ...o,
      error: {
        issues: r.issues.map((a) => Jt(a, n, Vt()))
      },
      input: o.value
    }), o.issues = []), o);
  };
}), hf = /* @__PURE__ */ $("$ZodPipe", (e, t) => {
  Ne.init(e, t), Ee(e._zod, "values", () => t.in._zod.values), Ee(e._zod, "optin", () => t.in._zod.optin), Ee(e._zod, "optout", () => t.out._zod.optout), Ee(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (o, n) => {
    if (n.direction === "backward") {
      const a = t.out._zod.run(o, n);
      return a instanceof Promise ? a.then((s) => dn(s, t.in, n)) : dn(a, t.in, n);
    }
    const r = t.in._zod.run(o, n);
    return r instanceof Promise ? r.then((a) => dn(a, t.out, n)) : dn(r, t.out, n);
  };
});
function dn(e, t, o) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, o);
}
const gf = /* @__PURE__ */ $("$ZodReadonly", (e, t) => {
  Ne.init(e, t), Ee(e._zod, "propValues", () => t.innerType._zod.propValues), Ee(e._zod, "values", () => t.innerType._zod.values), Ee(e._zod, "optin", () => {
    var o, n;
    return (n = (o = t.innerType) == null ? void 0 : o._zod) == null ? void 0 : n.optin;
  }), Ee(e._zod, "optout", () => {
    var o, n;
    return (n = (o = t.innerType) == null ? void 0 : o._zod) == null ? void 0 : n.optout;
  }), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(o, n);
    const r = t.innerType._zod.run(o, n);
    return r instanceof Promise ? r.then(Xa) : Xa(r);
  };
});
function Xa(e) {
  return e.value = Object.freeze(e.value), e;
}
const vf = /* @__PURE__ */ $("$ZodLazy", (e, t) => {
  Ne.init(e, t), Ee(e._zod, "innerType", () => t.getter()), Ee(e._zod, "pattern", () => {
    var o, n;
    return (n = (o = e._zod.innerType) == null ? void 0 : o._zod) == null ? void 0 : n.pattern;
  }), Ee(e._zod, "propValues", () => {
    var o, n;
    return (n = (o = e._zod.innerType) == null ? void 0 : o._zod) == null ? void 0 : n.propValues;
  }), Ee(e._zod, "optin", () => {
    var o, n;
    return ((n = (o = e._zod.innerType) == null ? void 0 : o._zod) == null ? void 0 : n.optin) ?? void 0;
  }), Ee(e._zod, "optout", () => {
    var o, n;
    return ((n = (o = e._zod.innerType) == null ? void 0 : o._zod) == null ? void 0 : n.optout) ?? void 0;
  }), e._zod.parse = (o, n) => e._zod.innerType._zod.run(o, n);
}), _f = /* @__PURE__ */ $("$ZodCustom", (e, t) => {
  ht.init(e, t), Ne.init(e, t), e._zod.parse = (o, n) => o, e._zod.check = (o) => {
    const n = o.value, r = t.fn(n);
    if (r instanceof Promise)
      return r.then((a) => Qa(a, o, n, e));
    Qa(r, o, n, e);
  };
});
function Qa(e, t, o, n) {
  if (!e) {
    const r = {
      code: "custom",
      input: o,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (r.params = n._zod.def.params), t.issues.push(Fo(r));
  }
}
var es;
class yf {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...o) {
    const n = o[0];
    if (this._map.set(t, n), n && typeof n == "object" && "id" in n) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const o = this._map.get(t);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(t), this;
  }
  get(t) {
    const o = t._zod.parent;
    if (o) {
      const n = { ...this.get(o) ?? {} };
      delete n.id;
      const r = { ...n, ...this._map.get(t) };
      return Object.keys(r).length ? r : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function bf() {
  return new yf();
}
(es = globalThis).__zod_globalRegistry ?? (es.__zod_globalRegistry = bf());
const zo = globalThis.__zod_globalRegistry;
function wf(e, t) {
  return new e({
    type: "string",
    ...re(t)
  });
}
function xf(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function ts(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function If(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Tf(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...re(t)
  });
}
function kf(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...re(t)
  });
}
function Sf(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...re(t)
  });
}
function Cf(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Ef(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Rf(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Mf(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Nf(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Of(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Af(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function $f(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Pf(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function qf(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function jf(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Df(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function zf(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Uf(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Zf(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Lf(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...re(t)
  });
}
function Ff(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...re(t)
  });
}
function Vf(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...re(t)
  });
}
function Jf(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...re(t)
  });
}
function Gf(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...re(t)
  });
}
function Bf(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...re(t)
  });
}
function Hf(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...re(t)
  });
}
function Wf(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...re(t)
  });
}
function Kf(e, t) {
  return new e({
    type: "boolean",
    ...re(t)
  });
}
function Yf(e, t) {
  return new e({
    type: "null",
    ...re(t)
  });
}
function Xf(e) {
  return new e({
    type: "any"
  });
}
function Qf(e) {
  return new e({
    type: "unknown"
  });
}
function eh(e, t) {
  return new e({
    type: "never",
    ...re(t)
  });
}
function os(e, t) {
  return new Cl({
    check: "less_than",
    ...re(t),
    value: e,
    inclusive: !1
  });
}
function or(e, t) {
  return new Cl({
    check: "less_than",
    ...re(t),
    value: e,
    inclusive: !0
  });
}
function ns(e, t) {
  return new El({
    check: "greater_than",
    ...re(t),
    value: e,
    inclusive: !1
  });
}
function nr(e, t) {
  return new El({
    check: "greater_than",
    ...re(t),
    value: e,
    inclusive: !0
  });
}
function rs(e, t) {
  return new im({
    check: "multiple_of",
    ...re(t),
    value: e
  });
}
function $l(e, t) {
  return new um({
    check: "max_length",
    ...re(t),
    maximum: e
  });
}
function wn(e, t) {
  return new cm({
    check: "min_length",
    ...re(t),
    minimum: e
  });
}
function Pl(e, t) {
  return new pm({
    check: "length_equals",
    ...re(t),
    length: e
  });
}
function th(e, t) {
  return new dm({
    check: "string_format",
    format: "regex",
    ...re(t),
    pattern: e
  });
}
function oh(e) {
  return new mm({
    check: "string_format",
    format: "lowercase",
    ...re(e)
  });
}
function nh(e) {
  return new fm({
    check: "string_format",
    format: "uppercase",
    ...re(e)
  });
}
function rh(e, t) {
  return new hm({
    check: "string_format",
    format: "includes",
    ...re(t),
    includes: e
  });
}
function ah(e, t) {
  return new gm({
    check: "string_format",
    format: "starts_with",
    ...re(t),
    prefix: e
  });
}
function sh(e, t) {
  return new vm({
    check: "string_format",
    format: "ends_with",
    ...re(t),
    suffix: e
  });
}
function Ro(e) {
  return new _m({
    check: "overwrite",
    tx: e
  });
}
function ih(e) {
  return Ro((t) => t.normalize(e));
}
function lh() {
  return Ro((e) => e.trim());
}
function uh() {
  return Ro((e) => e.toLowerCase());
}
function ch() {
  return Ro((e) => e.toUpperCase());
}
function ph() {
  return Ro((e) => cd(e));
}
function dh(e, t, o) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...re(o)
  });
}
function mh(e, t, o) {
  const n = re(o);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
function fh(e, t, o) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...re(o)
  });
}
function hh(e) {
  const t = gh((o) => (o.addIssue = (n) => {
    if (typeof n == "string")
      o.issues.push(Fo(n, o.value, t._zod.def));
    else {
      const r = n;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = o.value), r.inst ?? (r.inst = t), r.continue ?? (r.continue = !t._zod.def.abort), o.issues.push(Fo(r));
    }
  }, e(o.value, o)));
  return t;
}
function gh(e, t) {
  const o = new ht({
    check: "custom",
    ...re(t)
  });
  return o._zod.check = e, o;
}
function xn(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: (e == null ? void 0 : e.metadata) ?? zo,
    target: t,
    unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
    override: (e == null ? void 0 : e.override) ?? (() => {
    }),
    io: (e == null ? void 0 : e.io) ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: (e == null ? void 0 : e.cycles) ?? "ref",
    reused: (e == null ? void 0 : e.reused) ?? "inline",
    external: (e == null ? void 0 : e.external) ?? void 0
  };
}
function qe(e, t, o = { path: [], schemaPath: [] }) {
  var m, f;
  var n;
  const r = e._zod.def, a = t.seen.get(e);
  if (a)
    return a.count++, o.schemaPath.includes(e) && (a.cycle = o.path), a.schema;
  const s = { schema: {}, count: 1, cycle: void 0, path: o.path };
  t.seen.set(e, s);
  const i = (f = (m = e._zod).toJSONSchema) == null ? void 0 : f.call(m);
  if (i)
    s.schema = i;
  else {
    const d = {
      ...o,
      schemaPath: [...o.schemaPath, e],
      path: o.path
    }, g = e._zod.parent;
    if (g)
      s.ref = g, qe(g, t, d), t.seen.get(g).isParent = !0;
    else if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, s.schema, d);
    else {
      const _ = s.schema, v = t.processors[r.type];
      if (!v)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
      v(e, t, _, d);
    }
  }
  const u = t.metadataRegistry.get(e);
  return u && Object.assign(s.schema, u), t.io === "input" && pt(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((n = s.schema).default ?? (n.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function In(e, t) {
  var a, s, i;
  const o = e.seen.get(t);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (u) => {
    var g;
    const c = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const _ = (g = e.external.registry.get(u[0])) == null ? void 0 : g.id, v = e.external.uri ?? ((S) => S);
      if (_)
        return { ref: v(_) };
      const y = u[1].defId ?? u[1].schema.id ?? `schema${e.counter++}`;
      return u[1].defId = y, { defId: y, ref: `${v("__shared")}#/${c}/${y}` };
    }
    if (u[1] === o)
      return { ref: "#" };
    const f = `#/${c}/`, d = u[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: d, ref: f + d };
  }, r = (u) => {
    if (u[1].schema.$ref)
      return;
    const c = u[1], { ref: m, defId: f } = n(u);
    c.def = { ...c.schema }, f && (c.defId = f);
    const d = c.schema;
    for (const g in d)
      delete d[g];
    d.$ref = m;
  };
  if (e.cycles === "throw")
    for (const u of e.seen.entries()) {
      const c = u[1];
      if (c.cycle)
        throw new Error(`Cycle detected: #/${(a = c.cycle) == null ? void 0 : a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const u of e.seen.entries()) {
    const c = u[1];
    if (t === u[0]) {
      r(u);
      continue;
    }
    if (e.external) {
      const f = (s = e.external.registry.get(u[0])) == null ? void 0 : s.id;
      if (t !== u[0] && f) {
        r(u);
        continue;
      }
    }
    if ((i = e.metadataRegistry.get(u[0])) == null ? void 0 : i.id) {
      r(u);
      continue;
    }
    if (c.cycle) {
      r(u);
      continue;
    }
    if (c.count > 1 && e.reused === "ref") {
      r(u);
      continue;
    }
  }
}
function Tn(e, t) {
  var s, i, u;
  const o = e.seen.get(t);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (c) => {
    const m = e.seen.get(c), f = m.def ?? m.schema, d = { ...f };
    if (m.ref === null)
      return;
    const g = m.ref;
    if (m.ref = null, g) {
      n(g);
      const _ = e.seen.get(g).schema;
      _.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (f.allOf = f.allOf ?? [], f.allOf.push(_)) : (Object.assign(f, _), Object.assign(f, d));
    }
    m.isParent || e.override({
      zodSchema: c,
      jsonSchema: f,
      path: m.path ?? []
    });
  };
  for (const c of [...e.seen.entries()].reverse())
    n(c[0]);
  const r = {};
  if (e.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (s = e.external) != null && s.uri) {
    const c = (i = e.external.registry.get(t)) == null ? void 0 : i.id;
    if (!c)
      throw new Error("Schema is missing an `id` property");
    r.$id = e.external.uri(c);
  }
  Object.assign(r, o.def ?? o.schema);
  const a = ((u = e.external) == null ? void 0 : u.defs) ?? {};
  for (const c of e.seen.entries()) {
    const m = c[1];
    m.def && m.defId && (a[m.defId] = m.def);
  }
  e.external || Object.keys(a).length > 0 && (e.target === "draft-2020-12" ? r.$defs = a : r.definitions = a);
  try {
    const c = JSON.parse(JSON.stringify(r));
    return Object.defineProperty(c, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: kn(t, "input"),
          output: kn(t, "output")
        }
      },
      enumerable: !1,
      writable: !1
    }), c;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function pt(e, t) {
  const o = t ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(e))
    return !1;
  o.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return pt(n.element, o);
  if (n.type === "set")
    return pt(n.valueType, o);
  if (n.type === "lazy")
    return pt(n.getter(), o);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return pt(n.innerType, o);
  if (n.type === "intersection")
    return pt(n.left, o) || pt(n.right, o);
  if (n.type === "record" || n.type === "map")
    return pt(n.keyType, o) || pt(n.valueType, o);
  if (n.type === "pipe")
    return pt(n.in, o) || pt(n.out, o);
  if (n.type === "object") {
    for (const r in n.shape)
      if (pt(n.shape[r], o))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const r of n.options)
      if (pt(r, o))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const r of n.items)
      if (pt(r, o))
        return !0;
    return !!(n.rest && pt(n.rest, o));
  }
  return !1;
}
const vh = (e, t = {}) => (o) => {
  const n = xn({ ...o, processors: t });
  return qe(e, n), In(n, e), Tn(n, e);
}, kn = (e, t) => (o) => {
  const { libraryOptions: n, target: r } = o ?? {}, a = xn({ ...n ?? {}, target: r, io: t, processors: {} });
  return qe(e, a), In(a, e), Tn(a, e);
}, _h = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, ql = (e, t, o, n) => {
  const r = o;
  r.type = "string";
  const { minimum: a, maximum: s, format: i, patterns: u, contentEncoding: c } = e._zod.bag;
  if (typeof a == "number" && (r.minLength = a), typeof s == "number" && (r.maxLength = s), i && (r.format = _h[i] ?? i, r.format === "" && delete r.format), c && (r.contentEncoding = c), u && u.size > 0) {
    const m = [...u];
    m.length === 1 ? r.pattern = m[0].source : m.length > 1 && (r.allOf = [
      ...m.map((f) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: f.source
      }))
    ]);
  }
}, jl = (e, t, o, n) => {
  const r = o, { minimum: a, maximum: s, format: i, multipleOf: u, exclusiveMaximum: c, exclusiveMinimum: m } = e._zod.bag;
  typeof i == "string" && i.includes("int") ? r.type = "integer" : r.type = "number", typeof m == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (r.minimum = m, r.exclusiveMinimum = !0) : r.exclusiveMinimum = m), typeof a == "number" && (r.minimum = a, typeof m == "number" && t.target !== "draft-04" && (m >= a ? delete r.minimum : delete r.exclusiveMinimum)), typeof c == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (r.maximum = c, r.exclusiveMaximum = !0) : r.exclusiveMaximum = c), typeof s == "number" && (r.maximum = s, typeof c == "number" && t.target !== "draft-04" && (c <= s ? delete r.maximum : delete r.exclusiveMaximum)), typeof u == "number" && (r.multipleOf = u);
}, Dl = (e, t, o, n) => {
  o.type = "boolean";
}, yh = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("BigInt cannot be represented in JSON Schema");
}, bh = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Symbols cannot be represented in JSON Schema");
}, zl = (e, t, o, n) => {
  t.target === "openapi-3.0" ? (o.type = "string", o.nullable = !0, o.enum = [null]) : o.type = "null";
}, wh = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Undefined cannot be represented in JSON Schema");
}, xh = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Void cannot be represented in JSON Schema");
}, Ul = (e, t, o, n) => {
  o.not = {};
}, Zl = (e, t, o, n) => {
}, Ll = (e, t, o, n) => {
}, Ih = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Date cannot be represented in JSON Schema");
}, Fl = (e, t, o, n) => {
  const r = e._zod.def, a = vl(r.entries);
  a.every((s) => typeof s == "number") && (o.type = "number"), a.every((s) => typeof s == "string") && (o.type = "string"), o.enum = a;
}, Vl = (e, t, o, n) => {
  const r = e._zod.def, a = [];
  for (const s of r.values)
    if (s === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof s == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      a.push(Number(s));
    } else
      a.push(s);
  if (a.length !== 0) if (a.length === 1) {
    const s = a[0];
    o.type = s === null ? "null" : typeof s, t.target === "draft-04" || t.target === "openapi-3.0" ? o.enum = [s] : o.const = s;
  } else
    a.every((s) => typeof s == "number") && (o.type = "number"), a.every((s) => typeof s == "string") && (o.type = "string"), a.every((s) => typeof s == "boolean") && (o.type = "boolean"), a.every((s) => s === null) && (o.type = "null"), o.enum = a;
}, Th = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("NaN cannot be represented in JSON Schema");
}, kh = (e, t, o, n) => {
  const r = o, a = e._zod.pattern;
  if (!a)
    throw new Error("Pattern not found in template literal");
  r.type = "string", r.pattern = a.source;
}, Sh = (e, t, o, n) => {
  const r = o, a = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  }, { minimum: s, maximum: i, mime: u } = e._zod.bag;
  s !== void 0 && (a.minLength = s), i !== void 0 && (a.maxLength = i), u ? u.length === 1 ? (a.contentMediaType = u[0], Object.assign(r, a)) : r.anyOf = u.map((c) => ({ ...a, contentMediaType: c })) : Object.assign(r, a);
}, Ch = (e, t, o, n) => {
  o.type = "boolean";
}, Jl = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Eh = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Function types cannot be represented in JSON Schema");
}, Gl = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Rh = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Map cannot be represented in JSON Schema");
}, Mh = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Set cannot be represented in JSON Schema");
}, Bl = (e, t, o, n) => {
  const r = o, a = e._zod.def, { minimum: s, maximum: i } = e._zod.bag;
  typeof s == "number" && (r.minItems = s), typeof i == "number" && (r.maxItems = i), r.type = "array", r.items = qe(a.element, t, { ...n, path: [...n.path, "items"] });
}, Hl = (e, t, o, n) => {
  var c;
  const r = o, a = e._zod.def;
  r.type = "object", r.properties = {};
  const s = a.shape;
  for (const m in s)
    r.properties[m] = qe(s[m], t, {
      ...n,
      path: [...n.path, "properties", m]
    });
  const i = new Set(Object.keys(s)), u = new Set([...i].filter((m) => {
    const f = a.shape[m]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  u.size > 0 && (r.required = Array.from(u)), ((c = a.catchall) == null ? void 0 : c._zod.def.type) === "never" ? r.additionalProperties = !1 : a.catchall ? a.catchall && (r.additionalProperties = qe(a.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (r.additionalProperties = !1);
}, Wl = (e, t, o, n) => {
  const r = e._zod.def, a = r.inclusive === !1, s = r.options.map((i, u) => qe(i, t, {
    ...n,
    path: [...n.path, a ? "oneOf" : "anyOf", u]
  }));
  a ? o.oneOf = s : o.anyOf = s;
}, Kl = (e, t, o, n) => {
  const r = e._zod.def, a = qe(r.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), s = qe(r.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), i = (c) => "allOf" in c && Object.keys(c).length === 1, u = [
    ...i(a) ? a.allOf : [a],
    ...i(s) ? s.allOf : [s]
  ];
  o.allOf = u;
}, Yl = (e, t, o, n) => {
  const r = o, a = e._zod.def;
  r.type = "array";
  const s = t.target === "draft-2020-12" ? "prefixItems" : "items", i = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", u = a.items.map((d, g) => qe(d, t, {
    ...n,
    path: [...n.path, s, g]
  })), c = a.rest ? qe(a.rest, t, {
    ...n,
    path: [...n.path, i, ...t.target === "openapi-3.0" ? [a.items.length] : []]
  }) : null;
  t.target === "draft-2020-12" ? (r.prefixItems = u, c && (r.items = c)) : t.target === "openapi-3.0" ? (r.items = {
    anyOf: u
  }, c && r.items.anyOf.push(c), r.minItems = u.length, c || (r.maxItems = u.length)) : (r.items = u, c && (r.additionalItems = c));
  const { minimum: m, maximum: f } = e._zod.bag;
  typeof m == "number" && (r.minItems = m), typeof f == "number" && (r.maxItems = f);
}, Xl = (e, t, o, n) => {
  const r = o, a = e._zod.def;
  r.type = "object", (t.target === "draft-07" || t.target === "draft-2020-12") && (r.propertyNames = qe(a.keyType, t, {
    ...n,
    path: [...n.path, "propertyNames"]
  })), r.additionalProperties = qe(a.valueType, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  });
}, Ql = (e, t, o, n) => {
  const r = e._zod.def, a = qe(r.innerType, t, n), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = r.innerType, o.nullable = !0) : o.anyOf = [a, { type: "null" }];
}, eu = (e, t, o, n) => {
  const r = e._zod.def;
  qe(r.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = r.innerType;
}, tu = (e, t, o, n) => {
  const r = e._zod.def;
  qe(r.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = r.innerType, o.default = JSON.parse(JSON.stringify(r.defaultValue));
}, ou = (e, t, o, n) => {
  const r = e._zod.def;
  qe(r.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = r.innerType, t.io === "input" && (o._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, nu = (e, t, o, n) => {
  const r = e._zod.def;
  qe(r.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = r.innerType;
  let s;
  try {
    s = r.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = s;
}, ru = (e, t, o, n) => {
  const r = e._zod.def, a = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  qe(a, t, n);
  const s = t.seen.get(e);
  s.ref = a;
}, au = (e, t, o, n) => {
  const r = e._zod.def;
  qe(r.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = r.innerType, o.readOnly = !0;
}, Nh = (e, t, o, n) => {
  const r = e._zod.def;
  qe(r.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = r.innerType;
}, su = (e, t, o, n) => {
  const r = e._zod.def;
  qe(r.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = r.innerType;
}, iu = (e, t, o, n) => {
  const r = e._zod.innerType;
  qe(r, t, n);
  const a = t.seen.get(e);
  a.ref = r;
}, as = {
  string: ql,
  number: jl,
  boolean: Dl,
  bigint: yh,
  symbol: bh,
  null: zl,
  undefined: wh,
  void: xh,
  never: Ul,
  any: Zl,
  unknown: Ll,
  date: Ih,
  enum: Fl,
  literal: Vl,
  nan: Th,
  template_literal: kh,
  file: Sh,
  success: Ch,
  custom: Jl,
  function: Eh,
  transform: Gl,
  map: Rh,
  set: Mh,
  array: Bl,
  object: Hl,
  union: Wl,
  intersection: Kl,
  tuple: Yl,
  record: Xl,
  nullable: Ql,
  nonoptional: eu,
  default: tu,
  prefault: ou,
  catch: nu,
  pipe: ru,
  readonly: au,
  promise: Nh,
  optional: su,
  lazy: iu
};
function Oh(e, t) {
  if ("_idmap" in e) {
    const n = e, r = xn({ ...t, processors: as }), a = {};
    for (const u of n._idmap.entries()) {
      const [c, m] = u;
      qe(m, r);
    }
    const s = {}, i = {
      registry: n,
      uri: t == null ? void 0 : t.uri,
      defs: a
    };
    r.external = i;
    for (const u of n._idmap.entries()) {
      const [c, m] = u;
      In(r, m), s[c] = Tn(r, m);
    }
    if (Object.keys(a).length > 0) {
      const u = r.target === "draft-2020-12" ? "$defs" : "definitions";
      s.__shared = {
        [u]: a
      };
    }
    return { schemas: s };
  }
  const o = xn({ ...t, processors: as });
  return qe(e, o), In(o, e), Tn(o, e);
}
const Ah = /* @__PURE__ */ $("ZodISODateTime", (e, t) => {
  Om.init(e, t), Le.init(e, t);
});
function $h(e) {
  return Ff(Ah, e);
}
const Ph = /* @__PURE__ */ $("ZodISODate", (e, t) => {
  Am.init(e, t), Le.init(e, t);
});
function qh(e) {
  return Vf(Ph, e);
}
const jh = /* @__PURE__ */ $("ZodISOTime", (e, t) => {
  $m.init(e, t), Le.init(e, t);
});
function Dh(e) {
  return Jf(jh, e);
}
const zh = /* @__PURE__ */ $("ZodISODuration", (e, t) => {
  Pm.init(e, t), Le.init(e, t);
});
function Uh(e) {
  return Gf(zh, e);
}
const Zh = (e, t) => {
  wl.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (o) => Id(e, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => xd(e, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        e.issues.push(o), e.message = JSON.stringify(e.issues, wr, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        e.issues.push(...o), e.message = JSON.stringify(e.issues, wr, 2);
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
}, Tt = $("ZodError", Zh, {
  Parent: Error
}), Lh = /* @__PURE__ */ Zr(Tt), Fh = /* @__PURE__ */ Lr(Tt), Vh = /* @__PURE__ */ Pn(Tt), lu = /* @__PURE__ */ qn(Tt), Jh = /* @__PURE__ */ Sd(Tt), Gh = /* @__PURE__ */ Cd(Tt), Bh = /* @__PURE__ */ Ed(Tt), Hh = /* @__PURE__ */ Rd(Tt), Wh = /* @__PURE__ */ Md(Tt), Kh = /* @__PURE__ */ Nd(Tt), Yh = /* @__PURE__ */ Od(Tt), Xh = /* @__PURE__ */ Ad(Tt), $e = /* @__PURE__ */ $("ZodType", (e, t) => (Ne.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: kn(e, "input"),
    output: kn(e, "output")
  }
}), e.toJSONSchema = vh(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...o) => e.clone(lo(t, {
  checks: [
    ...t.checks ?? [],
    ...o.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
})), e.clone = (o, n) => Ht(e, o, n), e.brand = () => e, e.register = ((o, n) => (o.add(e, n), e)), e.parse = (o, n) => Lh(e, o, n, { callee: e.parse }), e.safeParse = (o, n) => Vh(e, o, n), e.parseAsync = async (o, n) => Fh(e, o, n, { callee: e.parseAsync }), e.safeParseAsync = async (o, n) => lu(e, o, n), e.spa = e.safeParseAsync, e.encode = (o, n) => Jh(e, o, n), e.decode = (o, n) => Gh(e, o, n), e.encodeAsync = async (o, n) => Bh(e, o, n), e.decodeAsync = async (o, n) => Hh(e, o, n), e.safeEncode = (o, n) => Wh(e, o, n), e.safeDecode = (o, n) => Kh(e, o, n), e.safeEncodeAsync = async (o, n) => Yh(e, o, n), e.safeDecodeAsync = async (o, n) => Xh(e, o, n), e.refine = (o, n) => e.check(Vg(o, n)), e.superRefine = (o) => e.check(Jg(o)), e.overwrite = (o) => e.check(Ro(o)), e.optional = () => ls(e), e.nullable = () => us(e), e.nullish = () => ls(us(e)), e.nonoptional = (o) => jg(e, o), e.array = () => M(e), e.or = (o) => te([e, o]), e.and = (o) => Sg(e, o), e.transform = (o) => cs(e, Ng(o)), e.default = (o) => $g(e, o), e.prefault = (o) => qg(e, o), e.catch = (o) => zg(e, o), e.pipe = (o) => cs(e, o), e.readonly = () => Lg(e), e.describe = (o) => {
  const n = e.clone();
  return zo.add(n, { description: o }), n;
}, Object.defineProperty(e, "description", {
  get() {
    var o;
    return (o = zo.get(e)) == null ? void 0 : o.description;
  },
  configurable: !0
}), e.meta = (...o) => {
  if (o.length === 0)
    return zo.get(e);
  const n = e.clone();
  return zo.add(n, o[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), uu = /* @__PURE__ */ $("_ZodString", (e, t) => {
  Fr.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (n, r, a) => ql(e, n, r);
  const o = e._zod.bag;
  e.format = o.format ?? null, e.minLength = o.minimum ?? null, e.maxLength = o.maximum ?? null, e.regex = (...n) => e.check(th(...n)), e.includes = (...n) => e.check(rh(...n)), e.startsWith = (...n) => e.check(ah(...n)), e.endsWith = (...n) => e.check(sh(...n)), e.min = (...n) => e.check(wn(...n)), e.max = (...n) => e.check($l(...n)), e.length = (...n) => e.check(Pl(...n)), e.nonempty = (...n) => e.check(wn(1, ...n)), e.lowercase = (n) => e.check(oh(n)), e.uppercase = (n) => e.check(nh(n)), e.trim = () => e.check(lh()), e.normalize = (...n) => e.check(ih(...n)), e.toLowerCase = () => e.check(uh()), e.toUpperCase = () => e.check(ch()), e.slugify = () => e.check(ph());
}), Qh = /* @__PURE__ */ $("ZodString", (e, t) => {
  Fr.init(e, t), uu.init(e, t), e.email = (o) => e.check(xf(eg, o)), e.url = (o) => e.check(Cf(tg, o)), e.jwt = (o) => e.check(Lf(gg, o)), e.emoji = (o) => e.check(Ef(og, o)), e.guid = (o) => e.check(ts(ss, o)), e.uuid = (o) => e.check(If(mn, o)), e.uuidv4 = (o) => e.check(Tf(mn, o)), e.uuidv6 = (o) => e.check(kf(mn, o)), e.uuidv7 = (o) => e.check(Sf(mn, o)), e.nanoid = (o) => e.check(Rf(ng, o)), e.guid = (o) => e.check(ts(ss, o)), e.cuid = (o) => e.check(Mf(rg, o)), e.cuid2 = (o) => e.check(Nf(ag, o)), e.ulid = (o) => e.check(Of(sg, o)), e.base64 = (o) => e.check(zf(mg, o)), e.base64url = (o) => e.check(Uf(fg, o)), e.xid = (o) => e.check(Af(ig, o)), e.ksuid = (o) => e.check($f(lg, o)), e.ipv4 = (o) => e.check(Pf(ug, o)), e.ipv6 = (o) => e.check(qf(cg, o)), e.cidrv4 = (o) => e.check(jf(pg, o)), e.cidrv6 = (o) => e.check(Df(dg, o)), e.e164 = (o) => e.check(Zf(hg, o)), e.datetime = (o) => e.check($h(o)), e.date = (o) => e.check(qh(o)), e.time = (o) => e.check(Dh(o)), e.duration = (o) => e.check(Uh(o));
});
function l(e) {
  return wf(Qh, e);
}
const Le = /* @__PURE__ */ $("ZodStringFormat", (e, t) => {
  ze.init(e, t), uu.init(e, t);
}), eg = /* @__PURE__ */ $("ZodEmail", (e, t) => {
  Im.init(e, t), Le.init(e, t);
}), ss = /* @__PURE__ */ $("ZodGUID", (e, t) => {
  wm.init(e, t), Le.init(e, t);
}), mn = /* @__PURE__ */ $("ZodUUID", (e, t) => {
  xm.init(e, t), Le.init(e, t);
}), tg = /* @__PURE__ */ $("ZodURL", (e, t) => {
  Tm.init(e, t), Le.init(e, t);
}), og = /* @__PURE__ */ $("ZodEmoji", (e, t) => {
  km.init(e, t), Le.init(e, t);
}), ng = /* @__PURE__ */ $("ZodNanoID", (e, t) => {
  Sm.init(e, t), Le.init(e, t);
}), rg = /* @__PURE__ */ $("ZodCUID", (e, t) => {
  Cm.init(e, t), Le.init(e, t);
}), ag = /* @__PURE__ */ $("ZodCUID2", (e, t) => {
  Em.init(e, t), Le.init(e, t);
}), sg = /* @__PURE__ */ $("ZodULID", (e, t) => {
  Rm.init(e, t), Le.init(e, t);
}), ig = /* @__PURE__ */ $("ZodXID", (e, t) => {
  Mm.init(e, t), Le.init(e, t);
}), lg = /* @__PURE__ */ $("ZodKSUID", (e, t) => {
  Nm.init(e, t), Le.init(e, t);
}), ug = /* @__PURE__ */ $("ZodIPv4", (e, t) => {
  qm.init(e, t), Le.init(e, t);
}), cg = /* @__PURE__ */ $("ZodIPv6", (e, t) => {
  jm.init(e, t), Le.init(e, t);
}), pg = /* @__PURE__ */ $("ZodCIDRv4", (e, t) => {
  Dm.init(e, t), Le.init(e, t);
}), dg = /* @__PURE__ */ $("ZodCIDRv6", (e, t) => {
  zm.init(e, t), Le.init(e, t);
}), mg = /* @__PURE__ */ $("ZodBase64", (e, t) => {
  Um.init(e, t), Le.init(e, t);
}), fg = /* @__PURE__ */ $("ZodBase64URL", (e, t) => {
  Lm.init(e, t), Le.init(e, t);
}), hg = /* @__PURE__ */ $("ZodE164", (e, t) => {
  Fm.init(e, t), Le.init(e, t);
}), gg = /* @__PURE__ */ $("ZodJWT", (e, t) => {
  Jm.init(e, t), Le.init(e, t);
}), Vr = /* @__PURE__ */ $("ZodNumber", (e, t) => {
  Ml.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (n, r, a) => jl(e, n, r), e.gt = (n, r) => e.check(ns(n, r)), e.gte = (n, r) => e.check(nr(n, r)), e.min = (n, r) => e.check(nr(n, r)), e.lt = (n, r) => e.check(os(n, r)), e.lte = (n, r) => e.check(or(n, r)), e.max = (n, r) => e.check(or(n, r)), e.int = (n) => e.check(is(n)), e.safe = (n) => e.check(is(n)), e.positive = (n) => e.check(ns(0, n)), e.nonnegative = (n) => e.check(nr(0, n)), e.negative = (n) => e.check(os(0, n)), e.nonpositive = (n) => e.check(or(0, n)), e.multipleOf = (n, r) => e.check(rs(n, r)), e.step = (n, r) => e.check(rs(n, r)), e.finite = () => e;
  const o = e._zod.bag;
  e.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), e.isFinite = !0, e.format = o.format ?? null;
});
function x(e) {
  return Bf(Vr, e);
}
const vg = /* @__PURE__ */ $("ZodNumberFormat", (e, t) => {
  Gm.init(e, t), Vr.init(e, t);
});
function is(e) {
  return Wf(vg, e);
}
const _g = /* @__PURE__ */ $("ZodBoolean", (e, t) => {
  Bm.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Dl(e, o, n);
});
function K(e) {
  return Kf(_g, e);
}
const yg = /* @__PURE__ */ $("ZodNull", (e, t) => {
  Hm.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => zl(e, o, n);
});
function cu(e) {
  return Yf(yg, e);
}
const bg = /* @__PURE__ */ $("ZodAny", (e, t) => {
  Wm.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Zl();
});
function vt() {
  return Xf(bg);
}
const wg = /* @__PURE__ */ $("ZodUnknown", (e, t) => {
  Km.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Ll();
});
function ve() {
  return Qf(wg);
}
const xg = /* @__PURE__ */ $("ZodNever", (e, t) => {
  Ym.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Ul(e, o, n);
});
function ke(e) {
  return eh(xg, e);
}
const Ig = /* @__PURE__ */ $("ZodArray", (e, t) => {
  Xm.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Bl(e, o, n, r), e.element = t.element, e.min = (o, n) => e.check(wn(o, n)), e.nonempty = (o) => e.check(wn(1, o)), e.max = (o, n) => e.check($l(o, n)), e.length = (o, n) => e.check(Pl(o, n)), e.unwrap = () => e.element;
});
function M(e, t) {
  return dh(Ig, e, t);
}
const Jr = /* @__PURE__ */ $("ZodObject", (e, t) => {
  ef.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Hl(e, o, n, r), Ee(e, "shape", () => t.shape), e.keyof = () => le(Object.keys(e._zod.def.shape)), e.catchall = (o) => e.clone({ ...e._zod.def, catchall: o }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ve() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ve() }), e.strict = () => e.clone({ ...e._zod.def, catchall: ke() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (o) => vd(e, o), e.safeExtend = (o) => _d(e, o), e.merge = (o) => yd(e, o), e.pick = (o) => hd(e, o), e.omit = (o) => gd(e, o), e.partial = (...o) => bd(du, e, o[0]), e.required = (...o) => wd(mu, e, o[0]);
});
function p(e, t) {
  const o = {
    type: "object",
    shape: e ?? {},
    ...re(t)
  };
  return new Jr(o);
}
function Pe(e, t) {
  return new Jr({
    type: "object",
    shape: e,
    catchall: ke(),
    ...re(t)
  });
}
function Ir(e, t) {
  return new Jr({
    type: "object",
    shape: e,
    catchall: ve(),
    ...re(t)
  });
}
const pu = /* @__PURE__ */ $("ZodUnion", (e, t) => {
  Al.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Wl(e, o, n, r), e.options = t.options;
});
function te(e, t) {
  return new pu({
    type: "union",
    options: e,
    ...re(t)
  });
}
const Tg = /* @__PURE__ */ $("ZodDiscriminatedUnion", (e, t) => {
  pu.init(e, t), tf.init(e, t);
});
function xe(e, t, o) {
  return new Tg({
    type: "union",
    options: t,
    discriminator: e,
    ...re(o)
  });
}
const kg = /* @__PURE__ */ $("ZodIntersection", (e, t) => {
  of.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Kl(e, o, n, r);
});
function Sg(e, t) {
  return new kg({
    type: "intersection",
    left: e,
    right: t
  });
}
const Cg = /* @__PURE__ */ $("ZodTuple", (e, t) => {
  nf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Yl(e, o, n, r), e.rest = (o) => e.clone({
    ...e._zod.def,
    rest: o
  });
});
function Tr(e, t, o) {
  const n = t instanceof Ne, r = n ? o : t, a = n ? t : null;
  return new Cg({
    type: "tuple",
    items: e,
    rest: a,
    ...re(r)
  });
}
const Eg = /* @__PURE__ */ $("ZodRecord", (e, t) => {
  rf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Xl(e, o, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Me(e, t, o) {
  return new Eg({
    type: "record",
    keyType: e,
    valueType: t,
    ...re(o)
  });
}
const kr = /* @__PURE__ */ $("ZodEnum", (e, t) => {
  af.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (n, r, a) => Fl(e, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
  const o = new Set(Object.keys(t.entries));
  e.extract = (n, r) => {
    const a = {};
    for (const s of n)
      if (o.has(s))
        a[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new kr({
      ...t,
      checks: [],
      ...re(r),
      entries: a
    });
  }, e.exclude = (n, r) => {
    const a = { ...t.entries };
    for (const s of n)
      if (o.has(s))
        delete a[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new kr({
      ...t,
      checks: [],
      ...re(r),
      entries: a
    });
  };
});
function le(e, t) {
  const o = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new kr({
    type: "enum",
    entries: o,
    ...re(t)
  });
}
const Rg = /* @__PURE__ */ $("ZodLiteral", (e, t) => {
  sf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Vl(e, o, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function h(e, t) {
  return new Rg({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...re(t)
  });
}
const Mg = /* @__PURE__ */ $("ZodTransform", (e, t) => {
  lf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Gl(e, o), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      throw new hl(e.constructor.name);
    o.addIssue = (a) => {
      if (typeof a == "string")
        o.issues.push(Fo(a, o.value, t));
      else {
        const s = a;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = o.value), s.inst ?? (s.inst = e), o.issues.push(Fo(s));
      }
    };
    const r = t.transform(o.value, o);
    return r instanceof Promise ? r.then((a) => (o.value = a, o)) : (o.value = r, o);
  };
});
function Ng(e) {
  return new Mg({
    type: "transform",
    transform: e
  });
}
const du = /* @__PURE__ */ $("ZodOptional", (e, t) => {
  uf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => su(e, o, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ls(e) {
  return new du({
    type: "optional",
    innerType: e
  });
}
const Og = /* @__PURE__ */ $("ZodNullable", (e, t) => {
  cf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Ql(e, o, n, r), e.unwrap = () => e._zod.def.innerType;
});
function us(e) {
  return new Og({
    type: "nullable",
    innerType: e
  });
}
const Ag = /* @__PURE__ */ $("ZodDefault", (e, t) => {
  pf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => tu(e, o, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function $g(e, t) {
  return new Ag({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : yl(t);
    }
  });
}
const Pg = /* @__PURE__ */ $("ZodPrefault", (e, t) => {
  df.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => ou(e, o, n, r), e.unwrap = () => e._zod.def.innerType;
});
function qg(e, t) {
  return new Pg({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : yl(t);
    }
  });
}
const mu = /* @__PURE__ */ $("ZodNonOptional", (e, t) => {
  mf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => eu(e, o, n, r), e.unwrap = () => e._zod.def.innerType;
});
function jg(e, t) {
  return new mu({
    type: "nonoptional",
    innerType: e,
    ...re(t)
  });
}
const Dg = /* @__PURE__ */ $("ZodCatch", (e, t) => {
  ff.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => nu(e, o, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function zg(e, t) {
  return new Dg({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Ug = /* @__PURE__ */ $("ZodPipe", (e, t) => {
  hf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => ru(e, o, n, r), e.in = t.in, e.out = t.out;
});
function cs(e, t) {
  return new Ug({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Zg = /* @__PURE__ */ $("ZodReadonly", (e, t) => {
  gf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => au(e, o, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Lg(e) {
  return new Zg({
    type: "readonly",
    innerType: e
  });
}
const Fg = /* @__PURE__ */ $("ZodLazy", (e, t) => {
  vf.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => iu(e, o, n, r), e.unwrap = () => e._zod.def.getter();
});
function Gr(e) {
  return new Fg({
    type: "lazy",
    getter: e
  });
}
const Br = /* @__PURE__ */ $("ZodCustom", (e, t) => {
  _f.init(e, t), $e.init(e, t), e._zod.processJSONSchema = (o, n, r) => Jl(e, o);
});
function fu(e, t) {
  return mh(Br, e ?? (() => !0), t);
}
function Vg(e, t = {}) {
  return fh(Br, e, t);
}
function Jg(e) {
  return hh(e);
}
function Sn(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const o = new Br({
    type: "custom",
    check: "custom",
    fn: (n) => n instanceof e,
    abort: !0,
    ...re(t)
  });
  return o._zod.bag.Class = e, o;
}
function Gg(e) {
  return Hf(Vr, e);
}
var Vo;
(function(e) {
  e.assertEqual = (r) => {
  };
  function t(r) {
  }
  e.assertIs = t;
  function o(r) {
    throw new Error();
  }
  e.assertNever = o, e.arrayToEnum = (r) => {
    const a = {};
    for (const s of r)
      a[s] = s;
    return a;
  }, e.getValidEnumValues = (r) => {
    const a = e.objectKeys(r).filter((i) => typeof r[r[i]] != "number"), s = {};
    for (const i of a)
      s[i] = r[i];
    return e.objectValues(s);
  }, e.objectValues = (r) => e.objectKeys(r).map(function(a) {
    return r[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const a = [];
    for (const s in r)
      Object.prototype.hasOwnProperty.call(r, s) && a.push(s);
    return a;
  }, e.find = (r, a) => {
    for (const s of r)
      if (a(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function n(r, a = " | ") {
    return r.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (r, a) => typeof a == "bigint" ? a.toString() : a;
})(Vo || (Vo = {}));
var ps;
(function(e) {
  e.mergeShapes = (t, o) => ({
    ...t,
    ...o
    // second overwrites first
  });
})(ps || (ps = {}));
Vo.arrayToEnum([
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
Vo.arrayToEnum([
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
class Cn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const o = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, o) : this.__proto__ = o, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const o = t || function(a) {
      return a.message;
    }, n = { _errors: [] }, r = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(r);
        else if (s.code === "invalid_return_type")
          r(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          r(s.argumentsError);
        else if (s.path.length === 0)
          n._errors.push(o(s));
        else {
          let i = n, u = 0;
          for (; u < s.path.length; ) {
            const c = s.path[u];
            u === s.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(o(s))) : i[c] = i[c] || { _errors: [] }, i = i[c], u++;
          }
        }
    };
    return r(this), n;
  }
  static assert(t) {
    if (!(t instanceof Cn))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Vo.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (o) => o.message) {
    const o = /* @__PURE__ */ Object.create(null), n = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const a = r.path[0];
        o[a] = o[a] || [], o[a].push(t(r));
      } else
        n.push(t(r));
    return { formErrors: n, fieldErrors: o };
  }
  get formErrors() {
    return this.flatten();
  }
}
Cn.create = (e) => new Cn(e);
var ds;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(ds || (ds = {}));
var ye;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ye || (ye = {}));
class ms extends Error {
  constructor(t, o) {
    super(t), this.name = "ParseError", this.type = o.type, this.field = o.field, this.value = o.value, this.line = o.line;
  }
}
function rr(e) {
}
function Bg(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = rr, onError: o = rr, onRetry: n = rr, onComment: r } = e;
  let a = "", s = !0, i, u = "", c = "";
  function m(v) {
    const y = s ? v.replace(/^\xEF\xBB\xBF/, "") : v, [S, C] = Hg(`${a}${y}`);
    for (const w of S)
      f(w);
    a = C, s = !1;
  }
  function f(v) {
    if (v === "") {
      g();
      return;
    }
    if (v.startsWith(":")) {
      r && r(v.slice(v.startsWith(": ") ? 2 : 1));
      return;
    }
    const y = v.indexOf(":");
    if (y !== -1) {
      const S = v.slice(0, y), C = v[y + 1] === " " ? 2 : 1, w = v.slice(y + C);
      d(S, w, v);
      return;
    }
    d(v, "", v);
  }
  function d(v, y, S) {
    switch (v) {
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
        /^\d+$/.test(y) ? n(parseInt(y, 10)) : o(
          new ms(`Invalid \`retry\` value: "${y}"`, {
            type: "invalid-retry",
            value: y,
            line: S
          })
        );
        break;
      default:
        o(
          new ms(
            `Unknown field "${v.length > 20 ? `${v.slice(0, 20)}…` : v}"`,
            { type: "unknown-field", field: v, value: y, line: S }
          )
        );
        break;
    }
  }
  function g() {
    u.length > 0 && t({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function _(v = {}) {
    a && v.consume && f(a), s = !0, i = void 0, u = "", c = "", a = "";
  }
  return { feed: m, reset: _ };
}
function Hg(e) {
  const t = [];
  let o = "", n = 0;
  for (; n < e.length; ) {
    const r = e.indexOf("\r", n), a = e.indexOf(`
`, n);
    let s = -1;
    if (r !== -1 && a !== -1 ? s = Math.min(r, a) : r !== -1 ? r === e.length - 1 ? s = -1 : s = r : a !== -1 && (s = a), s === -1) {
      o = e.slice(n);
      break;
    } else {
      const i = e.slice(n, s);
      t.push(i), n = s + 1, e[n - 1] === "\r" && e[n] === `
` && n++;
    }
  }
  return [t, o];
}
class Wg extends TransformStream {
  constructor({ onError: t, onRetry: o, onComment: n } = {}) {
    let r;
    super({
      start(a) {
        r = Bg({
          onEvent: (s) => {
            a.enqueue(s);
          },
          onError(s) {
            t === "terminate" ? a.error(s) : typeof t == "function" && t(s);
          },
          onRetry: o,
          onComment: n
        });
      },
      transform(a) {
        r.feed(a);
      }
    });
  }
}
function Ue(...e) {
  return e.reduce(
    (t, o) => ({
      ...t,
      ...o ?? {}
    }),
    {}
  );
}
function hu({
  tools: e = [],
  providerToolNames: t
}) {
  const o = {}, n = {};
  for (const r of e)
    if (r.type === "provider" && r.id in t) {
      const a = t[r.id];
      o[r.name] = a, n[a] = r.name;
    }
  return {
    toProviderToolName: (r) => {
      var a;
      return (a = o[r]) != null ? a : r;
    },
    toCustomToolName: (r) => {
      var a;
      return (a = n[r]) != null ? a : r;
    }
  };
}
async function Hr(e, t) {
  if (e == null)
    return Promise.resolve();
  const o = t == null ? void 0 : t.abortSignal;
  return new Promise((n, r) => {
    if (o != null && o.aborted) {
      r(fs());
      return;
    }
    const a = setTimeout(() => {
      s(), n();
    }, e), s = () => {
      clearTimeout(a), o == null || o.removeEventListener("abort", i);
    }, i = () => {
      s(), r(fs());
    };
    o == null || o.addEventListener("abort", i);
  });
}
function fs() {
  return new DOMException("Delay was aborted", "AbortError");
}
var wt = class {
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
function Mo(e) {
  return Object.fromEntries([...e.headers]);
}
var { btoa: Kg, atob: Yg } = globalThis;
function Wt(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), o = Yg(t);
  return Uint8Array.from(o, (n) => n.codePointAt(0));
}
function En(e) {
  let t = "";
  for (let o = 0; o < e.length; o++)
    t += String.fromCodePoint(e[o]);
  return Kg(t);
}
function Et(e) {
  return e instanceof Uint8Array ? En(e) : e;
}
function Xg(e, t = {}) {
  const { useArrayBrackets: o = !0 } = t, n = new FormData();
  for (const [r, a] of Object.entries(e))
    if (a != null) {
      if (Array.isArray(a)) {
        if (a.length === 1) {
          n.append(r, a[0]);
          continue;
        }
        const s = o ? `${r}[]` : r;
        for (const i of a)
          n.append(s, i);
        continue;
      }
      n.append(r, a);
    }
  return n;
}
var gu = "AI_DownloadError", vu = `vercel.ai.error.${gu}`, Qg = Symbol.for(vu), hs, gs, bo = class extends (gs = se, hs = Qg, gs) {
  constructor({
    url: e,
    statusCode: t,
    statusText: o,
    cause: n,
    message: r = n == null ? `Failed to download ${e}: ${t} ${o}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: gu, message: r, cause: n }), this[hs] = !0, this.url = e, this.statusCode = t, this.statusText = o;
  }
  static isInstance(e) {
    return se.hasMarker(e, vu);
  }
};
async function _u(e) {
  try {
    const t = await fetch(e);
    if (!t.ok)
      throw new bo({
        url: e,
        statusCode: t.status,
        statusText: t.statusText
      });
    return await t.blob();
  } catch (t) {
    throw bo.isInstance(t) ? t : new bo({ url: e, cause: t });
  }
}
var Ko = ({
  prefix: e,
  size: t = 16,
  alphabet: o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const r = () => {
    const a = o.length, s = new Array(t);
    for (let i = 0; i < t; i++)
      s[i] = o[Math.random() * a | 0];
    return s.join("");
  };
  if (e == null)
    return r;
  if (o.includes(n))
    throw new qr({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${o}".`
    });
  return () => `${e}${n}${r()}`;
}, Je = Ko();
function Dn(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function no(e) {
  return (e instanceof Error || e instanceof DOMException) && (e.name === "AbortError" || e.name === "ResponseAborted" || // Next.js
  e.name === "TimeoutError");
}
var ev = ["fetch failed", "failed to fetch"];
function yu({
  error: e,
  url: t,
  requestBodyValues: o
}) {
  if (no(e))
    return e;
  if (e instanceof TypeError && ev.includes(e.message.toLowerCase())) {
    const n = e.cause;
    if (n != null)
      return new Xe({
        message: `Cannot connect to API: ${n.message}`,
        cause: n,
        url: t,
        requestBodyValues: o,
        isRetryable: !0
        // retry when network error
      });
  }
  return e;
}
function To(e = globalThis) {
  var t, o, n;
  return e.window ? "runtime/browser" : (t = e.navigator) != null && t.userAgent ? `runtime/${e.navigator.userAgent.toLowerCase()}` : (n = (o = e.process) == null ? void 0 : o.versions) != null && n.node ? `runtime/node.js/${e.process.version.substring(0)}` : e.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown";
}
function Qt(e) {
  if (e == null)
    return {};
  const t = {};
  if (e instanceof Headers)
    e.forEach((o, n) => {
      t[n.toLowerCase()] = o;
    });
  else {
    Array.isArray(e) || (e = Object.entries(e));
    for (const [o, n] of e)
      n != null && (t[o.toLowerCase()] = n);
  }
  return t;
}
function tt(e, ...t) {
  const o = new Headers(Qt(e)), n = o.get("user-agent") || "";
  return o.set(
    "user-agent",
    [n, ...t].filter(Boolean).join(" ")
  ), Object.fromEntries(o.entries());
}
var bu = "4.0.1", tv = () => globalThis.fetch, vs = async ({
  url: e,
  headers: t = {},
  successfulResponseHandler: o,
  failedResponseHandler: n,
  abortSignal: r,
  fetch: a = tv()
}) => {
  try {
    const s = await a(e, {
      method: "GET",
      headers: tt(
        t,
        `ai-sdk/provider-utils/${bu}`,
        To()
      ),
      signal: r
    }), i = Mo(s);
    if (!s.ok) {
      let u;
      try {
        u = await n({
          response: s,
          url: e,
          requestBodyValues: {}
        });
      } catch (c) {
        throw no(c) || Xe.isInstance(c) ? c : new Xe({
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
      return await o({
        response: s,
        url: e,
        requestBodyValues: {}
      });
    } catch (u) {
      throw u instanceof Error && (no(u) || Xe.isInstance(u)) ? u : new Xe({
        message: "Failed to process successful response",
        cause: u,
        statusCode: s.status,
        url: e,
        responseHeaders: i,
        requestBodyValues: {}
      });
    }
  } catch (s) {
    throw yu({ error: s, url: e, requestBodyValues: {} });
  }
}, ov = "JSON schema:", nv = "You MUST answer with a JSON object that matches the JSON schema above.", rv = "You MUST answer with JSON.";
function av({
  prompt: e,
  schema: t,
  schemaPrefix: o = t != null ? ov : void 0,
  schemaSuffix: n = t != null ? nv : rv
}) {
  return [
    e != null && e.length > 0 ? e : void 0,
    e != null && e.length > 0 ? "" : void 0,
    // add a newline if prompt is not null
    o,
    t != null ? JSON.stringify(t) : void 0,
    n
  ].filter((r) => r != null).join(`
`);
}
function sv({
  messages: e,
  schema: t,
  schemaPrefix: o,
  schemaSuffix: n
}) {
  var r, a;
  const s = ((r = e[0]) == null ? void 0 : r.role) === "system" ? { ...e[0] } : { role: "system", content: "" };
  return s.content = av({
    prompt: s.content,
    schema: t,
    schemaPrefix: o,
    schemaSuffix: n
  }), [
    s,
    ...((a = e[0]) == null ? void 0 : a.role) === "system" ? e.slice(1) : e
  ];
}
function Wr(e) {
  return e != null;
}
function iv({
  mediaType: e,
  url: t,
  supportedUrls: o
}) {
  return t = t.toLowerCase(), e = e.toLowerCase(), Object.entries(o).map(([n, r]) => {
    const a = n.toLowerCase();
    return a === "*" || a === "*/*" ? { mediaTypePrefix: "", regexes: r } : { mediaTypePrefix: a.replace(/\*/, ""), regexes: r };
  }).filter(({ mediaTypePrefix: n }) => e.startsWith(n)).flatMap(({ regexes: n }) => n).some((n) => n.test(t));
}
function zn({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: o = "apiKey",
  description: n
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new un({
      message: `${n} API key must be a string.`
    });
  if (typeof process > "u")
    throw new un({
      message: `${n} API key is missing. Pass it using the '${o}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new un({
      message: `${n} API key is missing. Pass it using the '${o}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new un({
      message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
function wo({
  settingValue: e,
  environmentVariableName: t
}) {
  if (typeof e == "string")
    return e;
  if (!(e != null || typeof process > "u") && (e = process.env[t], !(e == null || typeof e != "string")))
    return e;
}
function lv(e) {
  var t;
  const [o, n = ""] = e.toLowerCase().split("/");
  return (t = {
    mpeg: "mp3",
    "x-wav": "wav",
    opus: "ogg",
    mp4: "m4a",
    "x-m4a": "m4a"
  }[n]) != null ? t : n;
}
var uv = /"__proto__"\s*:/, cv = /"constructor"\s*:/;
function _s(e) {
  const t = JSON.parse(e);
  return t === null || typeof t != "object" || uv.test(e) === !1 && cv.test(e) === !1 ? t : pv(t);
}
function pv(e) {
  let t = [e];
  for (; t.length; ) {
    const o = t;
    t = [];
    for (const n of o) {
      if (Object.prototype.hasOwnProperty.call(n, "__proto__"))
        throw new SyntaxError("Object contains forbidden prototype property");
      if (Object.prototype.hasOwnProperty.call(n, "constructor") && Object.prototype.hasOwnProperty.call(n.constructor, "prototype"))
        throw new SyntaxError("Object contains forbidden prototype property");
      for (const r in n) {
        const a = n[r];
        a && typeof a == "object" && t.push(a);
      }
    }
  }
  return e;
}
function Kr(e) {
  const { stackTraceLimit: t } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch {
    return _s(e);
  }
  try {
    return _s(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
function hn(e) {
  if (e.type === "object") {
    e.additionalProperties = !1;
    const t = e.properties;
    if (t != null)
      for (const o in t)
        t[o] = hn(
          t[o]
        );
  }
  return e.type === "array" && e.items != null && (Array.isArray(e.items) ? e.items = e.items.map(
    (t) => hn(t)
  ) : e.items = hn(
    e.items
  )), e;
}
var dv = Symbol(
  "Let zodToJsonSchema decide on which parser to use"
), ys = {
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
}, mv = (e) => typeof e == "string" ? {
  ...ys,
  name: e
} : {
  ...ys,
  ...e
};
function yt() {
  return {};
}
function fv(e, t) {
  var o, n, r;
  const a = {
    type: "array"
  };
  return (o = e.type) != null && o._def && ((r = (n = e.type) == null ? void 0 : n._def) == null ? void 0 : r.typeName) !== ye.ZodAny && (a.items = Re(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && (a.minItems = e.minLength.value), e.maxLength && (a.maxItems = e.maxLength.value), e.exactLength && (a.minItems = e.exactLength.value, a.maxItems = e.exactLength.value), a;
}
function hv(e) {
  const t = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks) return t;
  for (const o of e.checks)
    switch (o.kind) {
      case "min":
        o.inclusive ? t.minimum = o.value : t.exclusiveMinimum = o.value;
        break;
      case "max":
        o.inclusive ? t.maximum = o.value : t.exclusiveMaximum = o.value;
        break;
      case "multipleOf":
        t.multipleOf = o.value;
        break;
    }
  return t;
}
function gv() {
  return { type: "boolean" };
}
function wu(e, t) {
  return Re(e.type._def, t);
}
var vv = (e, t) => Re(e.innerType._def, t);
function xu(e, t, o) {
  const n = o ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((r, a) => xu(e, t, r))
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
      return _v(e);
  }
}
var _v = (e) => {
  const t = {
    type: "integer",
    format: "unix-time"
  };
  for (const o of e.checks)
    switch (o.kind) {
      case "min":
        t.minimum = o.value;
        break;
      case "max":
        t.maximum = o.value;
        break;
    }
  return t;
};
function yv(e, t) {
  return {
    ...Re(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function bv(e, t) {
  return t.effectStrategy === "input" ? Re(e.schema._def, t) : yt();
}
function wv(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
var xv = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Iv(e, t) {
  const o = [
    Re(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    Re(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((r) => !!r), n = [];
  return o.forEach((r) => {
    if (xv(r))
      n.push(...r.allOf);
    else {
      let a = r;
      if ("additionalProperties" in r && r.additionalProperties === !1) {
        const { additionalProperties: s, ...i } = r;
        a = i;
      }
      n.push(a);
    }
  }), n.length ? { allOf: n } : void 0;
}
function Tv(e) {
  const t = typeof e.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : {
    type: t === "bigint" ? "integer" : t,
    const: e.value
  };
}
var ar = void 0, St = {
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
  emoji: () => (ar === void 0 && (ar = RegExp(
    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    "u"
  )), ar),
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
function Iu(e, t) {
  const o = {
    type: "string"
  };
  if (e.checks)
    for (const n of e.checks)
      switch (n.kind) {
        case "min":
          o.minLength = typeof o.minLength == "number" ? Math.max(o.minLength, n.value) : n.value;
          break;
        case "max":
          o.maxLength = typeof o.maxLength == "number" ? Math.min(o.maxLength, n.value) : n.value;
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              Ct(o, "email", n.message, t);
              break;
            case "format:idn-email":
              Ct(o, "idn-email", n.message, t);
              break;
            case "pattern:zod":
              ct(o, St.email, n.message, t);
              break;
          }
          break;
        case "url":
          Ct(o, "uri", n.message, t);
          break;
        case "uuid":
          Ct(o, "uuid", n.message, t);
          break;
        case "regex":
          ct(o, n.regex, n.message, t);
          break;
        case "cuid":
          ct(o, St.cuid, n.message, t);
          break;
        case "cuid2":
          ct(o, St.cuid2, n.message, t);
          break;
        case "startsWith":
          ct(
            o,
            RegExp(`^${sr(n.value, t)}`),
            n.message,
            t
          );
          break;
        case "endsWith":
          ct(
            o,
            RegExp(`${sr(n.value, t)}$`),
            n.message,
            t
          );
          break;
        case "datetime":
          Ct(o, "date-time", n.message, t);
          break;
        case "date":
          Ct(o, "date", n.message, t);
          break;
        case "time":
          Ct(o, "time", n.message, t);
          break;
        case "duration":
          Ct(o, "duration", n.message, t);
          break;
        case "length":
          o.minLength = typeof o.minLength == "number" ? Math.max(o.minLength, n.value) : n.value, o.maxLength = typeof o.maxLength == "number" ? Math.min(o.maxLength, n.value) : n.value;
          break;
        case "includes": {
          ct(
            o,
            RegExp(sr(n.value, t)),
            n.message,
            t
          );
          break;
        }
        case "ip": {
          n.version !== "v6" && Ct(o, "ipv4", n.message, t), n.version !== "v4" && Ct(o, "ipv6", n.message, t);
          break;
        }
        case "base64url":
          ct(o, St.base64url, n.message, t);
          break;
        case "jwt":
          ct(o, St.jwt, n.message, t);
          break;
        case "cidr": {
          n.version !== "v6" && ct(o, St.ipv4Cidr, n.message, t), n.version !== "v4" && ct(o, St.ipv6Cidr, n.message, t);
          break;
        }
        case "emoji":
          ct(o, St.emoji(), n.message, t);
          break;
        case "ulid": {
          ct(o, St.ulid, n.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Ct(o, "binary", n.message, t);
              break;
            }
            case "contentEncoding:base64": {
              o.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              ct(o, St.base64, n.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          ct(o, St.nanoid, n.message, t);
      }
  return o;
}
function sr(e, t) {
  return t.patternStrategy === "escape" ? Sv(e) : e;
}
var kv = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function Sv(e) {
  let t = "";
  for (let o = 0; o < e.length; o++)
    kv.has(e[o]) || (t += "\\"), t += e[o];
  return t;
}
function Ct(e, t, o, n) {
  var r;
  e.format || (r = e.anyOf) != null && r.some((a) => a.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format
  }), delete e.format), e.anyOf.push({
    format: t,
    ...o && n.errorMessages && { errorMessage: { format: o } }
  })) : e.format = t;
}
function ct(e, t, o, n) {
  var r;
  e.pattern || (r = e.allOf) != null && r.some((a) => a.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern
  }), delete e.pattern), e.allOf.push({
    pattern: bs(t, n),
    ...o && n.errorMessages && { errorMessage: { pattern: o } }
  })) : e.pattern = bs(t, n);
}
function bs(e, t) {
  var o;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const n = {
    i: e.flags.includes("i"),
    // Case-insensitive
    m: e.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: e.flags.includes("s")
    // `.` matches newlines
  }, r = n.i ? e.source.toLowerCase() : e.source;
  let a = "", s = !1, i = !1, u = !1;
  for (let c = 0; c < r.length; c++) {
    if (s) {
      a += r[c], s = !1;
      continue;
    }
    if (n.i) {
      if (i) {
        if (r[c].match(/[a-z]/)) {
          u ? (a += r[c], a += `${r[c - 2]}-${r[c]}`.toUpperCase(), u = !1) : r[c + 1] === "-" && ((o = r[c + 2]) != null && o.match(/[a-z]/)) ? (a += r[c], u = !0) : a += `${r[c]}${r[c].toUpperCase()}`;
          continue;
        }
      } else if (r[c].match(/[a-z]/)) {
        a += `[${r[c]}${r[c].toUpperCase()}]`;
        continue;
      }
    }
    if (n.m) {
      if (r[c] === "^") {
        a += `(^|(?<=[\r
]))`;
        continue;
      } else if (r[c] === "$") {
        a += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n.s && r[c] === ".") {
      a += i ? `${r[c]}\r
` : `[${r[c]}\r
]`;
      continue;
    }
    a += r[c], r[c] === "\\" ? s = !0 : i && r[c] === "]" ? i = !1 : !i && r[c] === "[" && (i = !0);
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
function Tu(e, t) {
  var o, n, r, a, s, i;
  const u = {
    type: "object",
    additionalProperties: (o = Re(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    })) != null ? o : t.allowedAdditionalProperties
  };
  if (((n = e.keyType) == null ? void 0 : n._def.typeName) === ye.ZodString && ((r = e.keyType._def.checks) != null && r.length)) {
    const { type: c, ...m } = Iu(e.keyType._def, t);
    return {
      ...u,
      propertyNames: m
    };
  } else {
    if (((a = e.keyType) == null ? void 0 : a._def.typeName) === ye.ZodEnum)
      return {
        ...u,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === ye.ZodBranded && e.keyType._def.type._def.typeName === ye.ZodString && ((i = e.keyType._def.type._def.checks) != null && i.length)) {
      const { type: c, ...m } = wu(
        e.keyType._def,
        t
      );
      return {
        ...u,
        propertyNames: m
      };
    }
  }
  return u;
}
function Cv(e, t) {
  if (t.mapStrategy === "record")
    return Tu(e, t);
  const o = Re(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || yt(), n = Re(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || yt();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [o, n],
      minItems: 2,
      maxItems: 2
    }
  };
}
function Ev(e) {
  const t = e.values, n = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), r = Array.from(
    new Set(n.map((a) => typeof a))
  );
  return {
    type: r.length === 1 ? r[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function Rv() {
  return { not: yt() };
}
function Mv() {
  return {
    type: "null"
  };
}
var Sr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Nv(e, t) {
  const o = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (o.every(
    (n) => n._def.typeName in Sr && (!n._def.checks || !n._def.checks.length)
  )) {
    const n = o.reduce((r, a) => {
      const s = Sr[a._def.typeName];
      return s && !r.includes(s) ? [...r, s] : r;
    }, []);
    return {
      type: n.length > 1 ? n : n[0]
    };
  } else if (o.every((n) => n._def.typeName === "ZodLiteral" && !n.description)) {
    const n = o.reduce(
      (r, a) => {
        const s = typeof a._def.value;
        switch (s) {
          case "string":
          case "number":
          case "boolean":
            return [...r, s];
          case "bigint":
            return [...r, "integer"];
          case "object":
            if (a._def.value === null) return [...r, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return r;
        }
      },
      []
    );
    if (n.length === o.length) {
      const r = n.filter((a, s, i) => i.indexOf(a) === s);
      return {
        type: r.length > 1 ? r : r[0],
        enum: o.reduce(
          (a, s) => a.includes(s._def.value) ? a : [...a, s._def.value],
          []
        )
      };
    }
  } else if (o.every((n) => n._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: o.reduce(
        (n, r) => [
          ...n,
          ...r._def.values.filter((a) => !n.includes(a))
        ],
        []
      )
    };
  return Ov(e, t);
}
var Ov = (e, t) => {
  const o = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map(
    (n, r) => Re(n._def, {
      ...t,
      currentPath: [...t.currentPath, "anyOf", `${r}`]
    })
  ).filter(
    (n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0)
  );
  return o.length ? { anyOf: o } : void 0;
};
function Av(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    e.innerType._def.typeName
  ) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return {
      type: [
        Sr[e.innerType._def.typeName],
        "null"
      ]
    };
  const o = Re(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return o && { anyOf: [o, { type: "null" }] };
}
function $v(e) {
  const t = {
    type: "number"
  };
  if (!e.checks) return t;
  for (const o of e.checks)
    switch (o.kind) {
      case "int":
        t.type = "integer";
        break;
      case "min":
        o.inclusive ? t.minimum = o.value : t.exclusiveMinimum = o.value;
        break;
      case "max":
        o.inclusive ? t.maximum = o.value : t.exclusiveMaximum = o.value;
        break;
      case "multipleOf":
        t.multipleOf = o.value;
        break;
    }
  return t;
}
function Pv(e, t) {
  const o = {
    type: "object",
    properties: {}
  }, n = [], r = e.shape();
  for (const s in r) {
    let i = r[s];
    if (i === void 0 || i._def === void 0)
      continue;
    const u = jv(i), c = Re(i._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", s],
      propertyPath: [...t.currentPath, "properties", s]
    });
    c !== void 0 && (o.properties[s] = c, u || n.push(s));
  }
  n.length && (o.required = n);
  const a = qv(e, t);
  return a !== void 0 && (o.additionalProperties = a), o;
}
function qv(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return Re(e.catchall._def, {
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
function jv(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
var Dv = (e, t) => {
  var o;
  if (t.currentPath.toString() === ((o = t.propertyPath) == null ? void 0 : o.toString()))
    return Re(e.innerType._def, t);
  const n = Re(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return n ? { anyOf: [{ not: yt() }, n] } : yt();
}, zv = (e, t) => {
  if (t.pipeStrategy === "input")
    return Re(e.in._def, t);
  if (t.pipeStrategy === "output")
    return Re(e.out._def, t);
  const o = Re(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = Re(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", o ? "1" : "0"]
  });
  return {
    allOf: [o, n].filter((r) => r !== void 0)
  };
};
function Uv(e, t) {
  return Re(e.type._def, t);
}
function Zv(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: Re(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && (n.minItems = e.minSize.value), e.maxSize && (n.maxItems = e.maxSize.value), n;
}
function Lv(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map(
      (o, n) => Re(o._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${n}`]
      })
    ).reduce(
      (o, n) => n === void 0 ? o : [...o, n],
      []
    ),
    additionalItems: Re(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map(
      (o, n) => Re(o._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${n}`]
      })
    ).reduce(
      (o, n) => n === void 0 ? o : [...o, n],
      []
    )
  };
}
function Fv() {
  return {
    not: yt()
  };
}
function Vv() {
  return yt();
}
var Jv = (e, t) => Re(e.innerType._def, t), Gv = (e, t, o) => {
  switch (t) {
    case ye.ZodString:
      return Iu(e, o);
    case ye.ZodNumber:
      return $v(e);
    case ye.ZodObject:
      return Pv(e, o);
    case ye.ZodBigInt:
      return hv(e);
    case ye.ZodBoolean:
      return gv();
    case ye.ZodDate:
      return xu(e, o);
    case ye.ZodUndefined:
      return Fv();
    case ye.ZodNull:
      return Mv();
    case ye.ZodArray:
      return fv(e, o);
    case ye.ZodUnion:
    case ye.ZodDiscriminatedUnion:
      return Nv(e, o);
    case ye.ZodIntersection:
      return Iv(e, o);
    case ye.ZodTuple:
      return Lv(e, o);
    case ye.ZodRecord:
      return Tu(e, o);
    case ye.ZodLiteral:
      return Tv(e);
    case ye.ZodEnum:
      return wv(e);
    case ye.ZodNativeEnum:
      return Ev(e);
    case ye.ZodNullable:
      return Av(e, o);
    case ye.ZodOptional:
      return Dv(e, o);
    case ye.ZodMap:
      return Cv(e, o);
    case ye.ZodSet:
      return Zv(e, o);
    case ye.ZodLazy:
      return () => e.getter()._def;
    case ye.ZodPromise:
      return Uv(e, o);
    case ye.ZodNaN:
    case ye.ZodNever:
      return Rv();
    case ye.ZodEffects:
      return bv(e, o);
    case ye.ZodAny:
      return yt();
    case ye.ZodUnknown:
      return Vv();
    case ye.ZodDefault:
      return yv(e, o);
    case ye.ZodBranded:
      return wu(e, o);
    case ye.ZodReadonly:
      return Jv(e, o);
    case ye.ZodCatch:
      return vv(e, o);
    case ye.ZodPipeline:
      return zv(e, o);
    case ye.ZodFunction:
    case ye.ZodVoid:
    case ye.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, Bv = (e, t) => {
  let o = 0;
  for (; o < e.length && o < t.length && e[o] === t[o]; o++)
    ;
  return [(e.length - o).toString(), ...t.slice(o)].join("/");
};
function Re(e, t, o = !1) {
  var n;
  const r = t.seen.get(e);
  if (t.override) {
    const u = (n = t.override) == null ? void 0 : n.call(
      t,
      e,
      t,
      r,
      o
    );
    if (u !== dv)
      return u;
  }
  if (r && !o) {
    const u = Hv(r, t);
    if (u !== void 0)
      return u;
  }
  const a = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, a);
  const s = Gv(e, e.typeName, t), i = typeof s == "function" ? Re(s(), t) : s;
  if (i && Wv(e, t, i), t.postProcess) {
    const u = t.postProcess(i, e, t);
    return a.jsonSchema = i, u;
  }
  return a.jsonSchema = i, i;
}
var Hv = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Bv(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((o, n) => t.currentPath[n] === o) ? (console.warn(
        `Recursive reference detected at ${t.currentPath.join(
          "/"
        )}! Defaulting to any`
      ), yt()) : t.$refStrategy === "seen" ? yt() : void 0;
  }
}, Wv = (e, t, o) => (e.description && (o.description = e.description), o), Kv = (e) => {
  const t = mv(e), o = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    currentPath: o,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(t.definitions).map(([n, r]) => [
        r._def,
        {
          def: r._def,
          path: [...t.basePath, t.definitionPath, n],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
}, Yv = (e, t) => {
  var o;
  const n = Kv(t);
  let r = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce(
    (c, [m, f]) => {
      var d;
      return {
        ...c,
        [m]: (d = Re(
          f._def,
          {
            ...n,
            currentPath: [...n.basePath, n.definitionPath, m]
          },
          !0
        )) != null ? d : yt()
      };
    },
    {}
  ) : void 0;
  const a = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, s = (o = Re(
    e._def,
    a === void 0 ? n : {
      ...n,
      currentPath: [...n.basePath, n.definitionPath, a]
    },
    !1
  )) != null ? o : yt(), i = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  i !== void 0 && (s.title = i);
  const u = a === void 0 ? r ? {
    ...s,
    [n.definitionPath]: r
  } : s : {
    $ref: [
      ...n.$refStrategy === "relative" ? [] : n.basePath,
      n.definitionPath,
      a
    ].join("/"),
    [n.definitionPath]: {
      ...r,
      [a]: s
    }
  };
  return u.$schema = "http://json-schema.org/draft-07/schema#", u;
}, Cr = Symbol.for("vercel.ai.schema");
function G(e) {
  let t;
  return () => (t == null && (t = e()), t);
}
function Un(e, {
  validate: t
} = {}) {
  return {
    [Cr]: !0,
    _type: void 0,
    // should never be used directly
    get jsonSchema() {
      return typeof e == "function" && (e = e()), e;
    },
    validate: t
  };
}
function Xv(e) {
  return typeof e == "object" && e !== null && Cr in e && e[Cr] === !0 && "jsonSchema" in e && "validate" in e;
}
function Gt(e) {
  return e == null ? Un({ properties: {}, additionalProperties: !1 }) : Xv(e) ? e : "~standard" in e ? e["~standard"].vendor === "zod" ? J(e) : Qv(e) : e();
}
function Qv(e) {
  return Un(
    () => e["~standard"].jsonSchema.input({
      target: "draft-07"
    }),
    {
      validate: async (t) => {
        const o = await e["~standard"].validate(t);
        return "value" in o ? { success: !0, value: o.value } : {
          success: !1,
          error: new st({
            value: t,
            cause: o.issues
          })
        };
      }
    }
  );
}
function e_(e, t) {
  var o;
  const n = (o = t == null ? void 0 : t.useReferences) != null ? o : !1;
  return Un(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => Yv(e, {
      $refStrategy: n ? "root" : "none"
    }),
    {
      validate: async (r) => {
        const a = await e.safeParseAsync(r);
        return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
      }
    }
  );
}
function t_(e, t) {
  var o;
  const n = (o = t == null ? void 0 : t.useReferences) != null ? o : !1;
  return Un(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => hn(
      Oh(e, {
        target: "draft-7",
        io: "input",
        reused: n ? "ref" : "inline"
      })
    ),
    {
      validate: async (r) => {
        const a = await lu(e, r);
        return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
      }
    }
  );
}
function o_(e) {
  return "_zod" in e;
}
function J(e, t) {
  return o_(e) ? t_(e, t) : e_(e, t);
}
async function Oe({
  value: e,
  schema: t
}) {
  const o = await ft({ value: e, schema: t });
  if (!o.success)
    throw st.wrap({ value: e, cause: o.error });
  return o.value;
}
async function ft({
  value: e,
  schema: t
}) {
  const o = Gt(t);
  try {
    if (o.validate == null)
      return { success: !0, value: e, rawValue: e };
    const n = await o.validate(e);
    return n.success ? { success: !0, value: n.value, rawValue: e } : {
      success: !1,
      error: st.wrap({ value: e, cause: n.error }),
      rawValue: e
    };
  } catch (n) {
    return {
      success: !1,
      error: st.wrap({ value: e, cause: n }),
      rawValue: e
    };
  }
}
async function n_({
  text: e,
  schema: t
}) {
  try {
    const o = Kr(e);
    return t == null ? o : Oe({ value: o, schema: t });
  } catch (o) {
    throw Zo.isInstance(o) || st.isInstance(o) ? o : new Zo({ text: e, cause: o });
  }
}
async function xt({
  text: e,
  schema: t
}) {
  try {
    const o = Kr(e);
    return t == null ? { success: !0, value: o, rawValue: o } : await ft({ value: o, schema: t });
  } catch (o) {
    return {
      success: !1,
      error: Zo.isInstance(o) ? o : new Zo({ text: e, cause: o }),
      rawValue: void 0
    };
  }
}
function ws(e) {
  try {
    return Kr(e), !0;
  } catch {
    return !1;
  }
}
function Yr({
  stream: e,
  schema: t
}) {
  return e.pipeThrough(new TextDecoderStream()).pipeThrough(new Wg()).pipeThrough(
    new TransformStream({
      async transform({ data: o }, n) {
        o !== "[DONE]" && n.enqueue(await xt({ text: o, schema: t }));
      }
    })
  );
}
async function at({
  provider: e,
  providerOptions: t,
  schema: o
}) {
  if ((t == null ? void 0 : t[e]) == null)
    return;
  const n = await ft({
    value: t[e],
    schema: o
  });
  if (!n.success)
    throw new qr({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: n.error
    });
  return n.value;
}
var r_ = () => globalThis.fetch, Ze = async ({
  url: e,
  headers: t,
  body: o,
  failedResponseHandler: n,
  successfulResponseHandler: r,
  abortSignal: a,
  fetch: s
}) => Su({
  url: e,
  headers: {
    "Content-Type": "application/json",
    ...t
  },
  body: {
    content: JSON.stringify(o),
    values: o
  },
  failedResponseHandler: n,
  successfulResponseHandler: r,
  abortSignal: a,
  fetch: s
}), ku = async ({
  url: e,
  headers: t,
  formData: o,
  failedResponseHandler: n,
  successfulResponseHandler: r,
  abortSignal: a,
  fetch: s
}) => Su({
  url: e,
  headers: t,
  body: {
    content: o,
    values: Object.fromEntries(o.entries())
  },
  failedResponseHandler: n,
  successfulResponseHandler: r,
  abortSignal: a,
  fetch: s
}), Su = async ({
  url: e,
  headers: t = {},
  body: o,
  successfulResponseHandler: n,
  failedResponseHandler: r,
  abortSignal: a,
  fetch: s = r_()
}) => {
  try {
    const i = await s(e, {
      method: "POST",
      headers: tt(
        t,
        `ai-sdk/provider-utils/${bu}`,
        To()
      ),
      body: o.content,
      signal: a
    }), u = Mo(i);
    if (!i.ok) {
      let c;
      try {
        c = await r({
          response: i,
          url: e,
          requestBodyValues: o.values
        });
      } catch (m) {
        throw no(m) || Xe.isInstance(m) ? m : new Xe({
          message: "Failed to process error response",
          cause: m,
          statusCode: i.status,
          url: e,
          responseHeaders: u,
          requestBodyValues: o.values
        });
      }
      throw c.value;
    }
    try {
      return await n({
        response: i,
        url: e,
        requestBodyValues: o.values
      });
    } catch (c) {
      throw c instanceof Error && (no(c) || Xe.isInstance(c)) ? c : new Xe({
        message: "Failed to process successful response",
        cause: c,
        statusCode: i.status,
        url: e,
        responseHeaders: u,
        requestBodyValues: o.values
      });
    }
  } catch (i) {
    throw yu({ error: i, url: e, requestBodyValues: o.values });
  }
};
function lT(e) {
  return e;
}
function uT(e) {
  return { ...e, type: "dynamic" };
}
function dt({
  id: e,
  inputSchema: t
}) {
  return ({
    execute: o,
    outputSchema: n,
    needsApproval: r,
    toModelOutput: a,
    onInputStart: s,
    onInputDelta: i,
    onInputAvailable: u,
    ...c
  }) => ({
    type: "provider",
    id: e,
    args: c,
    inputSchema: t,
    outputSchema: n,
    execute: o,
    needsApproval: r,
    toModelOutput: a,
    onInputStart: s,
    onInputDelta: i,
    onInputAvailable: u
  });
}
function ut({
  id: e,
  inputSchema: t,
  outputSchema: o,
  supportsDeferredResults: n
}) {
  return ({
    execute: r,
    needsApproval: a,
    toModelOutput: s,
    onInputStart: i,
    onInputDelta: u,
    onInputAvailable: c,
    ...m
  }) => ({
    type: "provider",
    id: e,
    args: m,
    inputSchema: t,
    outputSchema: o,
    execute: r,
    needsApproval: a,
    toModelOutput: s,
    onInputStart: i,
    onInputDelta: u,
    onInputAvailable: c,
    supportsDeferredResults: n
  });
}
async function De(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var $t = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: o
}) => async ({ response: n, url: r, requestBodyValues: a }) => {
  const s = await n.text(), i = Mo(n);
  if (s.trim() === "")
    return {
      responseHeaders: i,
      value: new Xe({
        message: n.statusText,
        url: r,
        requestBodyValues: a,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: s,
        isRetryable: o == null ? void 0 : o(n)
      })
    };
  try {
    const u = await n_({
      text: s,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new Xe({
        message: t(u),
        url: r,
        requestBodyValues: a,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: s,
        data: u,
        isRetryable: o == null ? void 0 : o(n, u)
      })
    };
  } catch {
    return {
      responseHeaders: i,
      value: new Xe({
        message: n.statusText,
        url: r,
        requestBodyValues: a,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: s,
        isRetryable: o == null ? void 0 : o(n)
      })
    };
  }
}, uo = (e) => async ({ response: t }) => {
  const o = Mo(t);
  if (t.body == null)
    throw new Yp({});
  return {
    responseHeaders: o,
    value: Yr({
      stream: t.body,
      schema: e
    })
  };
}, Qe = (e) => async ({ response: t, url: o, requestBodyValues: n }) => {
  const r = await t.text(), a = await xt({
    text: r,
    schema: e
  }), s = Mo(t);
  if (!a.success)
    throw new Xe({
      message: "Invalid JSON response",
      cause: a.error,
      statusCode: t.status,
      responseHeaders: s,
      responseBody: r,
      url: o,
      requestBodyValues: n
    });
  return {
    responseHeaders: s,
    value: a.value,
    rawValue: a.rawValue
  };
}, a_ = () => async ({ response: e, url: t, requestBodyValues: o }) => {
  const n = Mo(e);
  if (!e.body)
    throw new Xe({
      message: "Response body is empty",
      url: t,
      requestBodyValues: o,
      statusCode: e.status,
      responseHeaders: n,
      responseBody: void 0
    });
  try {
    const r = await e.arrayBuffer();
    return {
      responseHeaders: n,
      value: new Uint8Array(r)
    };
  } catch (r) {
    throw new Xe({
      message: "Failed to read response as array buffer",
      url: t,
      requestBodyValues: o,
      statusCode: e.status,
      responseHeaders: n,
      responseBody: void 0,
      cause: r
    });
  }
};
function Yo(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
function s_(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* i_({
  execute: e,
  input: t,
  options: o
}) {
  const n = e(t, o);
  if (s_(n)) {
    let r;
    for await (const a of n)
      r = a, yield { type: "preliminary", output: a };
    yield { type: "final", output: r };
  } else
    yield { type: "final", output: await n };
}
var l_ = "3.0.1", u_ = G(
  () => J(
    p({
      type: h("error"),
      error: p({
        type: l(),
        message: l()
      })
    })
  )
), xs = $t({
  errorSchema: u_,
  errorToMessage: (e) => e.error.message
}), c_ = G(
  () => J(
    p({
      type: h("message"),
      id: l().nullish(),
      model: l().nullish(),
      content: M(
        xe("type", [
          p({
            type: h("text"),
            text: l(),
            citations: M(
              xe("type", [
                p({
                  type: h("web_search_result_location"),
                  cited_text: l(),
                  url: l(),
                  title: l(),
                  encrypted_index: l()
                }),
                p({
                  type: h("page_location"),
                  cited_text: l(),
                  document_index: x(),
                  document_title: l().nullable(),
                  start_page_number: x(),
                  end_page_number: x()
                }),
                p({
                  type: h("char_location"),
                  cited_text: l(),
                  document_index: x(),
                  document_title: l().nullable(),
                  start_char_index: x(),
                  end_char_index: x()
                })
              ])
            ).optional()
          }),
          p({
            type: h("thinking"),
            thinking: l(),
            signature: l()
          }),
          p({
            type: h("redacted_thinking"),
            data: l()
          }),
          p({
            type: h("tool_use"),
            id: l(),
            name: l(),
            input: ve(),
            // Programmatic tool calling: caller info when triggered from code execution
            caller: te([
              p({
                type: h("code_execution_20250825"),
                tool_id: l()
              }),
              p({
                type: h("direct")
              })
            ]).optional()
          }),
          p({
            type: h("server_tool_use"),
            id: l(),
            name: l(),
            input: Me(l(), ve()).nullish()
          }),
          p({
            type: h("mcp_tool_use"),
            id: l(),
            name: l(),
            input: ve(),
            server_name: l()
          }),
          p({
            type: h("mcp_tool_result"),
            tool_use_id: l(),
            is_error: K(),
            content: M(
              te([
                l(),
                p({ type: h("text"), text: l() })
              ])
            )
          }),
          p({
            type: h("web_fetch_tool_result"),
            tool_use_id: l(),
            content: te([
              p({
                type: h("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: p({
                  type: h("document"),
                  title: l().nullable(),
                  citations: p({ enabled: K() }).optional(),
                  source: te([
                    p({
                      type: h("base64"),
                      media_type: h("application/pdf"),
                      data: l()
                    }),
                    p({
                      type: h("text"),
                      media_type: h("text/plain"),
                      data: l()
                    })
                  ])
                })
              }),
              p({
                type: h("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          p({
            type: h("web_search_tool_result"),
            tool_use_id: l(),
            content: te([
              M(
                p({
                  type: h("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              p({
                type: h("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          p({
            type: h("code_execution_tool_result"),
            tool_use_id: l(),
            content: te([
              p({
                type: h("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: x(),
                content: M(
                  p({
                    type: h("code_execution_output"),
                    file_id: l()
                  })
                ).optional().default([])
              }),
              p({
                type: h("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          p({
            type: h("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: xe("type", [
              p({
                type: h("bash_code_execution_result"),
                content: M(
                  p({
                    type: h("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: x()
              }),
              p({
                type: h("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          p({
            type: h("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: xe("type", [
              p({
                type: h("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              p({
                type: h("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: x().nullable(),
                start_line: x().nullable(),
                total_lines: x().nullable()
              }),
              p({
                type: h("text_editor_code_execution_create_result"),
                is_file_update: K()
              }),
              p({
                type: h(
                  "text_editor_code_execution_str_replace_result"
                ),
                lines: M(l()).nullable(),
                new_lines: x().nullable(),
                new_start: x().nullable(),
                old_lines: x().nullable(),
                old_start: x().nullable()
              })
            ])
          }),
          // tool search tool results for tool_search_tool_regex_20251119 and tool_search_tool_bm25_20251119:
          p({
            type: h("tool_search_tool_result"),
            tool_use_id: l(),
            content: te([
              p({
                type: h("tool_search_tool_search_result"),
                tool_references: M(
                  p({
                    type: h("tool_reference"),
                    tool_name: l()
                  })
                )
              }),
              p({
                type: h("tool_search_tool_result_error"),
                error_code: l()
              })
            ])
          })
        ])
      ),
      stop_reason: l().nullish(),
      stop_sequence: l().nullish(),
      usage: Ir({
        input_tokens: x(),
        output_tokens: x(),
        cache_creation_input_tokens: x().nullish(),
        cache_read_input_tokens: x().nullish()
      }),
      container: p({
        expires_at: l(),
        id: l(),
        skills: M(
          p({
            type: te([h("anthropic"), h("custom")]),
            skill_id: l(),
            version: l()
          })
        ).nullish()
      }).nullish(),
      context_management: p({
        applied_edits: M(
          te([
            p({
              type: h("clear_tool_uses_20250919"),
              cleared_tool_uses: x(),
              cleared_input_tokens: x()
            }),
            p({
              type: h("clear_thinking_20251015"),
              cleared_thinking_turns: x(),
              cleared_input_tokens: x()
            })
          ])
        )
      }).nullish()
    })
  )
), p_ = G(
  () => J(
    xe("type", [
      p({
        type: h("message_start"),
        message: p({
          id: l().nullish(),
          model: l().nullish(),
          role: l().nullish(),
          usage: Ir({
            input_tokens: x(),
            cache_creation_input_tokens: x().nullish(),
            cache_read_input_tokens: x().nullish()
          }),
          // Programmatic tool calling: content may be pre-populated for deferred tool calls
          content: M(
            xe("type", [
              p({
                type: h("tool_use"),
                id: l(),
                name: l(),
                input: ve(),
                caller: te([
                  p({
                    type: h("code_execution_20250825"),
                    tool_id: l()
                  }),
                  p({
                    type: h("direct")
                  })
                ]).optional()
              })
            ])
          ).nullish(),
          stop_reason: l().nullish(),
          container: p({
            expires_at: l(),
            id: l()
          }).nullish()
        })
      }),
      p({
        type: h("content_block_start"),
        index: x(),
        content_block: xe("type", [
          p({
            type: h("text"),
            text: l()
          }),
          p({
            type: h("thinking"),
            thinking: l()
          }),
          p({
            type: h("tool_use"),
            id: l(),
            name: l(),
            // Programmatic tool calling: input may be present directly for deferred tool calls
            input: Me(l(), ve()).optional(),
            // Programmatic tool calling: caller info when triggered from code execution
            caller: te([
              p({
                type: h("code_execution_20250825"),
                tool_id: l()
              }),
              p({
                type: h("direct")
              })
            ]).optional()
          }),
          p({
            type: h("redacted_thinking"),
            data: l()
          }),
          p({
            type: h("server_tool_use"),
            id: l(),
            name: l(),
            input: Me(l(), ve()).nullish()
          }),
          p({
            type: h("mcp_tool_use"),
            id: l(),
            name: l(),
            input: ve(),
            server_name: l()
          }),
          p({
            type: h("mcp_tool_result"),
            tool_use_id: l(),
            is_error: K(),
            content: M(
              te([
                l(),
                p({ type: h("text"), text: l() })
              ])
            )
          }),
          p({
            type: h("web_fetch_tool_result"),
            tool_use_id: l(),
            content: te([
              p({
                type: h("web_fetch_result"),
                url: l(),
                retrieved_at: l(),
                content: p({
                  type: h("document"),
                  title: l().nullable(),
                  citations: p({ enabled: K() }).optional(),
                  source: te([
                    p({
                      type: h("base64"),
                      media_type: h("application/pdf"),
                      data: l()
                    }),
                    p({
                      type: h("text"),
                      media_type: h("text/plain"),
                      data: l()
                    })
                  ])
                })
              }),
              p({
                type: h("web_fetch_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          p({
            type: h("web_search_tool_result"),
            tool_use_id: l(),
            content: te([
              M(
                p({
                  type: h("web_search_result"),
                  url: l(),
                  title: l(),
                  encrypted_content: l(),
                  page_age: l().nullish()
                })
              ),
              p({
                type: h("web_search_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // code execution results for code_execution_20250522 tool:
          p({
            type: h("code_execution_tool_result"),
            tool_use_id: l(),
            content: te([
              p({
                type: h("code_execution_result"),
                stdout: l(),
                stderr: l(),
                return_code: x(),
                content: M(
                  p({
                    type: h("code_execution_output"),
                    file_id: l()
                  })
                ).optional().default([])
              }),
              p({
                type: h("code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // bash code execution results for code_execution_20250825 tool:
          p({
            type: h("bash_code_execution_tool_result"),
            tool_use_id: l(),
            content: xe("type", [
              p({
                type: h("bash_code_execution_result"),
                content: M(
                  p({
                    type: h("bash_code_execution_output"),
                    file_id: l()
                  })
                ),
                stdout: l(),
                stderr: l(),
                return_code: x()
              }),
              p({
                type: h("bash_code_execution_tool_result_error"),
                error_code: l()
              })
            ])
          }),
          // text editor code execution results for code_execution_20250825 tool:
          p({
            type: h("text_editor_code_execution_tool_result"),
            tool_use_id: l(),
            content: xe("type", [
              p({
                type: h("text_editor_code_execution_tool_result_error"),
                error_code: l()
              }),
              p({
                type: h("text_editor_code_execution_view_result"),
                content: l(),
                file_type: l(),
                num_lines: x().nullable(),
                start_line: x().nullable(),
                total_lines: x().nullable()
              }),
              p({
                type: h("text_editor_code_execution_create_result"),
                is_file_update: K()
              }),
              p({
                type: h(
                  "text_editor_code_execution_str_replace_result"
                ),
                lines: M(l()).nullable(),
                new_lines: x().nullable(),
                new_start: x().nullable(),
                old_lines: x().nullable(),
                old_start: x().nullable()
              })
            ])
          }),
          // tool search tool results for tool_search_tool_regex_20251119 and tool_search_tool_bm25_20251119:
          p({
            type: h("tool_search_tool_result"),
            tool_use_id: l(),
            content: te([
              p({
                type: h("tool_search_tool_search_result"),
                tool_references: M(
                  p({
                    type: h("tool_reference"),
                    tool_name: l()
                  })
                )
              }),
              p({
                type: h("tool_search_tool_result_error"),
                error_code: l()
              })
            ])
          })
        ])
      }),
      p({
        type: h("content_block_delta"),
        index: x(),
        delta: xe("type", [
          p({
            type: h("input_json_delta"),
            partial_json: l()
          }),
          p({
            type: h("text_delta"),
            text: l()
          }),
          p({
            type: h("thinking_delta"),
            thinking: l()
          }),
          p({
            type: h("signature_delta"),
            signature: l()
          }),
          p({
            type: h("citations_delta"),
            citation: xe("type", [
              p({
                type: h("web_search_result_location"),
                cited_text: l(),
                url: l(),
                title: l(),
                encrypted_index: l()
              }),
              p({
                type: h("page_location"),
                cited_text: l(),
                document_index: x(),
                document_title: l().nullable(),
                start_page_number: x(),
                end_page_number: x()
              }),
              p({
                type: h("char_location"),
                cited_text: l(),
                document_index: x(),
                document_title: l().nullable(),
                start_char_index: x(),
                end_char_index: x()
              })
            ])
          })
        ])
      }),
      p({
        type: h("content_block_stop"),
        index: x()
      }),
      p({
        type: h("error"),
        error: p({
          type: l(),
          message: l()
        })
      }),
      p({
        type: h("message_delta"),
        delta: p({
          stop_reason: l().nullish(),
          stop_sequence: l().nullish(),
          container: p({
            expires_at: l(),
            id: l(),
            skills: M(
              p({
                type: te([
                  h("anthropic"),
                  h("custom")
                ]),
                skill_id: l(),
                version: l()
              })
            ).nullish()
          }).nullish(),
          context_management: p({
            applied_edits: M(
              te([
                p({
                  type: h("clear_tool_uses_20250919"),
                  cleared_tool_uses: x(),
                  cleared_input_tokens: x()
                }),
                p({
                  type: h("clear_thinking_20251015"),
                  cleared_thinking_turns: x(),
                  cleared_input_tokens: x()
                })
              ])
            )
          }).nullish()
        }),
        usage: Ir({
          output_tokens: x(),
          cache_creation_input_tokens: x().nullish()
        })
      }),
      p({
        type: h("message_stop")
      }),
      p({
        type: h("ping")
      })
    ])
  )
), d_ = G(
  () => J(
    p({
      signature: l().optional(),
      redactedData: l().optional()
    })
  )
), Is = p({
  /**
   * Citation configuration for this document.
   * When enabled, this document will generate citations in the response.
   */
  citations: p({
    /**
     * Enable citations for this document
     */
    enabled: K()
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
}), m_ = p({
  /**
   * Whether to send reasoning to the model.
   *
   * This allows you to deactivate reasoning inputs for models that do not support them.
   */
  sendReasoning: K().optional(),
  /**
   * Determines how structured outputs are generated.
   *
   * - `outputFormat`: Use the `output_format` parameter to specify the structured output format.
   * - `jsonTool`: Use a special 'json' tool to specify the structured output format.
   * - `auto`: Use 'outputFormat' when supported, otherwise use 'jsonTool' (default).
   */
  structuredOutputMode: le(["outputFormat", "jsonTool", "auto"]).optional(),
  /**
   * Configuration for enabling Claude's extended thinking.
   *
   * When enabled, responses include thinking content blocks showing Claude's thinking process before the final answer.
   * Requires a minimum budget of 1,024 tokens and counts towards the `max_tokens` limit.
   */
  thinking: p({
    type: te([h("enabled"), h("disabled")]),
    budgetTokens: x().optional()
  }).optional(),
  /**
   * Whether to disable parallel function calling during tool use. Default is false.
   * When set to true, Claude will use at most one tool per response.
   */
  disableParallelToolUse: K().optional(),
  /**
   * Cache control settings for this message.
   * See https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
   */
  cacheControl: p({
    type: h("ephemeral"),
    ttl: te([h("5m"), h("1h")]).optional()
  }).optional(),
  /**
   * MCP servers to be utilized in this request.
   */
  mcpServers: M(
    p({
      type: h("url"),
      name: l(),
      url: l(),
      authorizationToken: l().nullish(),
      toolConfiguration: p({
        enabled: K().nullish(),
        allowedTools: M(l()).nullish()
      }).nullish()
    })
  ).optional(),
  /**
   * Agent Skills configuration. Skills enable Claude to perform specialized tasks
   * like document processing (PPTX, DOCX, PDF, XLSX) and data analysis.
   * Requires code execution tool to be enabled.
   */
  container: p({
    id: l().optional(),
    skills: M(
      p({
        type: te([h("anthropic"), h("custom")]),
        skillId: l(),
        version: l().optional()
      })
    ).optional()
  }).optional(),
  /**
   * Whether to enable tool streaming (and structured output streaming).
   *
   * When set to false, the model will return all tool calls and results
   * at once after a delay.
   *
   * @default true
   */
  toolStreaming: K().optional(),
  /**
   * @default 'high'
   */
  effort: le(["low", "medium", "high"]).optional(),
  contextManagement: p({
    edits: M(
      xe("type", [
        p({
          type: h("clear_tool_uses_20250919"),
          trigger: xe("type", [
            p({
              type: h("input_tokens"),
              value: x()
            }),
            p({
              type: h("tool_uses"),
              value: x()
            })
          ]).optional(),
          keep: p({
            type: h("tool_uses"),
            value: x()
          }).optional(),
          clearAtLeast: p({
            type: h("input_tokens"),
            value: x()
          }).optional(),
          clearToolInputs: K().optional(),
          excludeTools: M(l()).optional()
        }),
        p({
          type: h("clear_thinking_20251015"),
          keep: te([
            h("all"),
            p({
              type: h("thinking_turns"),
              value: x()
            })
          ]).optional()
        })
      ])
    )
  }).optional()
}), Ts = 4;
function f_(e) {
  var t;
  const o = e == null ? void 0 : e.anthropic;
  return (t = o == null ? void 0 : o.cacheControl) != null ? t : o == null ? void 0 : o.cache_control;
}
var Xr = class {
  constructor() {
    this.breakpointCount = 0, this.warnings = [];
  }
  getCacheControl(e, t) {
    const o = f_(e);
    if (o) {
      if (!t.canCache) {
        this.warnings.push({
          type: "unsupported",
          feature: "cache_control on non-cacheable context",
          details: `cache_control cannot be set on ${t.type}. It will be ignored.`
        });
        return;
      }
      if (this.breakpointCount++, this.breakpointCount > Ts) {
        this.warnings.push({
          type: "unsupported",
          feature: "cacheControl breakpoint limit",
          details: `Maximum ${Ts} cache breakpoints exceeded (found ${this.breakpointCount}). This breakpoint will be ignored.`
        });
        return;
      }
      return o;
    }
  }
  getWarnings() {
    return this.warnings;
  }
}, h_ = G(
  () => J(
    p({
      maxCharacters: x().optional()
    })
  )
), g_ = G(
  () => J(
    p({
      command: le(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: x().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: M(x().int()).optional()
    })
  )
), v_ = dt({
  id: "anthropic.text_editor_20250728",
  inputSchema: g_
}), __ = (e = {}) => v_(e), y_ = G(
  () => J(
    p({
      maxUses: x().optional(),
      allowedDomains: M(l()).optional(),
      blockedDomains: M(l()).optional(),
      userLocation: p({
        type: h("approximate"),
        city: l().optional(),
        region: l().optional(),
        country: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Cu = G(
  () => J(
    M(
      p({
        url: l(),
        title: l().nullable(),
        pageAge: l().nullable(),
        encryptedContent: l(),
        type: h("web_search_result")
      })
    )
  )
), b_ = G(
  () => J(
    p({
      query: l()
    })
  )
), w_ = ut({
  id: "anthropic.web_search_20250305",
  inputSchema: b_,
  outputSchema: Cu
}), x_ = (e = {}) => w_(e), I_ = G(
  () => J(
    p({
      maxUses: x().optional(),
      allowedDomains: M(l()).optional(),
      blockedDomains: M(l()).optional(),
      citations: p({ enabled: K() }).optional(),
      maxContentTokens: x().optional()
    })
  )
), Eu = G(
  () => J(
    p({
      type: h("web_fetch_result"),
      url: l(),
      content: p({
        type: h("document"),
        title: l().nullable(),
        citations: p({ enabled: K() }).optional(),
        source: te([
          p({
            type: h("base64"),
            mediaType: h("application/pdf"),
            data: l()
          }),
          p({
            type: h("text"),
            mediaType: h("text/plain"),
            data: l()
          })
        ])
      }),
      retrievedAt: l().nullable()
    })
  )
), T_ = G(
  () => J(
    p({
      url: l()
    })
  )
), k_ = ut({
  id: "anthropic.web_fetch_20250910",
  inputSchema: T_,
  outputSchema: Eu
}), S_ = (e = {}) => k_(e);
async function C_({
  tools: e,
  toolChoice: t,
  disableParallelToolUse: o,
  cacheControlValidator: n,
  supportsStructuredOutput: r
}) {
  var a;
  e = e != null && e.length ? e : void 0;
  const s = [], i = /* @__PURE__ */ new Set(), u = n || new Xr();
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: s, betas: i };
  const c = [];
  for (const f of e)
    switch (f.type) {
      case "function": {
        const d = u.getCacheControl(f.providerOptions, {
          type: "tool definition",
          canCache: !0
        }), g = (a = f.providerOptions) == null ? void 0 : a.anthropic, _ = g == null ? void 0 : g.deferLoading, v = g == null ? void 0 : g.allowedCallers;
        c.push({
          name: f.name,
          description: f.description,
          input_schema: f.inputSchema,
          cache_control: d,
          ...r === !0 && f.strict != null ? { strict: f.strict } : {},
          ..._ != null ? { defer_loading: _ } : {},
          ...v != null ? { allowed_callers: v } : {},
          ...f.inputExamples != null ? {
            input_examples: f.inputExamples.map(
              (y) => y.input
            )
          } : {}
        }), r === !0 && i.add("structured-outputs-2025-11-13"), (f.inputExamples != null || v != null) && i.add("advanced-tool-use-2025-11-20");
        break;
      }
      case "provider": {
        switch (f.id) {
          case "anthropic.code_execution_20250522": {
            i.add("code-execution-2025-05-22"), c.push({
              type: "code_execution_20250522",
              name: "code_execution",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.code_execution_20250825": {
            i.add("code-execution-2025-08-25"), c.push({
              type: "code_execution_20250825",
              name: "code_execution"
            });
            break;
          }
          case "anthropic.computer_20250124": {
            i.add("computer-use-2025-01-24"), c.push({
              name: "computer",
              type: "computer_20250124",
              display_width_px: f.args.displayWidthPx,
              display_height_px: f.args.displayHeightPx,
              display_number: f.args.displayNumber,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.computer_20241022": {
            i.add("computer-use-2024-10-22"), c.push({
              name: "computer",
              type: "computer_20241022",
              display_width_px: f.args.displayWidthPx,
              display_height_px: f.args.displayHeightPx,
              display_number: f.args.displayNumber,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20250124": {
            i.add("computer-use-2025-01-24"), c.push({
              name: "str_replace_editor",
              type: "text_editor_20250124",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20241022": {
            i.add("computer-use-2024-10-22"), c.push({
              name: "str_replace_editor",
              type: "text_editor_20241022",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20250429": {
            i.add("computer-use-2025-01-24"), c.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250429",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.text_editor_20250728": {
            const d = await Oe({
              value: f.args,
              schema: h_
            });
            c.push({
              name: "str_replace_based_edit_tool",
              type: "text_editor_20250728",
              max_characters: d.maxCharacters,
              cache_control: void 0
            });
            break;
          }
          case "anthropic.bash_20250124": {
            i.add("computer-use-2025-01-24"), c.push({
              name: "bash",
              type: "bash_20250124",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.bash_20241022": {
            i.add("computer-use-2024-10-22"), c.push({
              name: "bash",
              type: "bash_20241022",
              cache_control: void 0
            });
            break;
          }
          case "anthropic.memory_20250818": {
            i.add("context-management-2025-06-27"), c.push({
              name: "memory",
              type: "memory_20250818"
            });
            break;
          }
          case "anthropic.web_fetch_20250910": {
            i.add("web-fetch-2025-09-10");
            const d = await Oe({
              value: f.args,
              schema: I_
            });
            c.push({
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
            const d = await Oe({
              value: f.args,
              schema: y_
            });
            c.push({
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
          case "anthropic.tool_search_regex_20251119": {
            i.add("advanced-tool-use-2025-11-20"), c.push({
              type: "tool_search_tool_regex_20251119",
              name: "tool_search_tool_regex"
            });
            break;
          }
          case "anthropic.tool_search_bm25_20251119": {
            i.add("advanced-tool-use-2025-11-20"), c.push({
              type: "tool_search_tool_bm25_20251119",
              name: "tool_search_tool_bm25"
            });
            break;
          }
          default: {
            s.push({
              type: "unsupported",
              feature: `provider-defined tool ${f.id}`
            });
            break;
          }
        }
        break;
      }
      default: {
        s.push({
          type: "unsupported",
          feature: `tool ${f}`
        });
        break;
      }
    }
  if (t == null)
    return {
      tools: c,
      toolChoice: o ? { type: "auto", disable_parallel_tool_use: o } : void 0,
      toolWarnings: s,
      betas: i
    };
  const m = t.type;
  switch (m) {
    case "auto":
      return {
        tools: c,
        toolChoice: {
          type: "auto",
          disable_parallel_tool_use: o
        },
        toolWarnings: s,
        betas: i
      };
    case "required":
      return {
        tools: c,
        toolChoice: {
          type: "any",
          disable_parallel_tool_use: o
        },
        toolWarnings: s,
        betas: i
      };
    case "none":
      return { tools: void 0, toolChoice: void 0, toolWarnings: s, betas: i };
    case "tool":
      return {
        tools: c,
        toolChoice: {
          type: "tool",
          name: t.toolName,
          disable_parallel_tool_use: o
        },
        toolWarnings: s,
        betas: i
      };
    default: {
      const f = m;
      throw new Ge({
        functionality: `tool choice type: ${f}`
      });
    }
  }
}
function ks(e) {
  var t, o;
  const n = e.input_tokens, r = e.output_tokens, a = (t = e.cache_creation_input_tokens) != null ? t : 0, s = (o = e.cache_read_input_tokens) != null ? o : 0;
  return {
    inputTokens: {
      total: n + a + s,
      noCache: n,
      cacheRead: s,
      cacheWrite: a
    },
    outputTokens: {
      total: r,
      text: void 0,
      reasoning: void 0
    },
    raw: e
  };
}
var Ru = G(
  () => J(
    p({
      type: h("code_execution_result"),
      stdout: l(),
      stderr: l(),
      return_code: x(),
      content: M(
        p({
          type: h("code_execution_output"),
          file_id: l()
        })
      ).optional().default([])
    })
  )
), E_ = G(
  () => J(
    p({
      code: l()
    })
  )
), R_ = ut({
  id: "anthropic.code_execution_20250522",
  inputSchema: E_,
  outputSchema: Ru
}), M_ = (e = {}) => R_(e), Mu = G(
  () => J(
    xe("type", [
      p({
        type: h("code_execution_result"),
        stdout: l(),
        stderr: l(),
        return_code: x(),
        content: M(
          p({
            type: h("code_execution_output"),
            file_id: l()
          })
        ).optional().default([])
      }),
      p({
        type: h("bash_code_execution_result"),
        content: M(
          p({
            type: h("bash_code_execution_output"),
            file_id: l()
          })
        ),
        stdout: l(),
        stderr: l(),
        return_code: x()
      }),
      p({
        type: h("bash_code_execution_tool_result_error"),
        error_code: l()
      }),
      p({
        type: h("text_editor_code_execution_tool_result_error"),
        error_code: l()
      }),
      p({
        type: h("text_editor_code_execution_view_result"),
        content: l(),
        file_type: l(),
        num_lines: x().nullable(),
        start_line: x().nullable(),
        total_lines: x().nullable()
      }),
      p({
        type: h("text_editor_code_execution_create_result"),
        is_file_update: K()
      }),
      p({
        type: h("text_editor_code_execution_str_replace_result"),
        lines: M(l()).nullable(),
        new_lines: x().nullable(),
        new_start: x().nullable(),
        old_lines: x().nullable(),
        old_start: x().nullable()
      })
    ])
  )
), N_ = G(
  () => J(
    xe("type", [
      // Programmatic tool calling format (mapped from { code } by AI SDK)
      p({
        type: h("programmatic-tool-call"),
        code: l()
      }),
      p({
        type: h("bash_code_execution"),
        command: l()
      }),
      xe("command", [
        p({
          type: h("text_editor_code_execution"),
          command: h("view"),
          path: l()
        }),
        p({
          type: h("text_editor_code_execution"),
          command: h("create"),
          path: l(),
          file_text: l().nullish()
        }),
        p({
          type: h("text_editor_code_execution"),
          command: h("str_replace"),
          path: l(),
          old_str: l(),
          new_str: l()
        })
      ])
    ])
  )
), O_ = ut({
  id: "anthropic.code_execution_20250825",
  inputSchema: N_,
  outputSchema: Mu,
  // Programmatic tool calling: tool results may be deferred to a later turn
  // when code execution triggers a client-executed tool that needs to be
  // resolved before the code execution result can be returned.
  supportsDeferredResults: !0
}), A_ = (e = {}) => O_(e), Nu = G(
  () => J(
    M(
      p({
        type: h("tool_reference"),
        toolName: l()
      })
    )
  )
), $_ = G(
  () => J(
    p({
      /**
       * A regex pattern to search for tools.
       * Uses Python re.search() syntax. Maximum 200 characters.
       *
       * Examples:
       * - "weather" - matches tool names/descriptions containing "weather"
       * - "get_.*_data" - matches tools like get_user_data, get_weather_data
       * - "database.*query|query.*database" - OR patterns for flexibility
       * - "(?i)slack" - case-insensitive search
       */
      pattern: l(),
      /**
       * Maximum number of tools to return. Optional.
       */
      limit: x().optional()
    })
  )
), P_ = ut({
  id: "anthropic.tool_search_regex_20251119",
  inputSchema: $_,
  outputSchema: Nu
}), q_ = (e = {}) => P_(e);
function j_(e) {
  if (typeof e == "string")
    return Buffer.from(e, "base64").toString("utf-8");
  if (e instanceof Uint8Array)
    return new TextDecoder().decode(e);
  throw e instanceof URL ? new Ge({
    functionality: "URL-based text documents are not supported for citations"
  }) : new Ge({
    functionality: `unsupported data type for text documents: ${typeof e}`
  });
}
async function D_({
  prompt: e,
  sendReasoning: t,
  warnings: o,
  cacheControlValidator: n,
  toolNameMapping: r
}) {
  var a, s, i, u, c, m, f, d, g, _, v, y, S, C, w;
  const E = /* @__PURE__ */ new Set(), k = z_(e), T = n || new Xr();
  let I;
  const L = [];
  async function P(N) {
    var j, A;
    const D = await at({
      provider: "anthropic",
      providerOptions: N,
      schema: Is
    });
    return (A = (j = D == null ? void 0 : D.citations) == null ? void 0 : j.enabled) != null ? A : !1;
  }
  async function q(N) {
    const j = await at({
      provider: "anthropic",
      providerOptions: N,
      schema: Is
    });
    return {
      title: j == null ? void 0 : j.title,
      context: j == null ? void 0 : j.context
    };
  }
  for (let N = 0; N < k.length; N++) {
    const j = k[N], A = N === k.length - 1, D = j.type;
    switch (D) {
      case "system": {
        if (I != null)
          throw new Ge({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        I = j.messages.map(({ content: U, providerOptions: ne }) => ({
          type: "text",
          text: U,
          cache_control: T.getCacheControl(ne, {
            type: "system message",
            canCache: !0
          })
        }));
        break;
      }
      case "user": {
        const U = [];
        for (const ne of j.messages) {
          const { role: V, content: B } = ne;
          switch (V) {
            case "user": {
              for (let ue = 0; ue < B.length; ue++) {
                const W = B[ue], X = ue === B.length - 1, z = (a = T.getCacheControl(W.providerOptions, {
                  type: "user message part",
                  canCache: !0
                })) != null ? a : X ? T.getCacheControl(ne.providerOptions, {
                  type: "user message",
                  canCache: !0
                }) : void 0;
                switch (W.type) {
                  case "text": {
                    U.push({
                      type: "text",
                      text: W.text,
                      cache_control: z
                    });
                    break;
                  }
                  case "file": {
                    if (W.mediaType.startsWith("image/"))
                      U.push({
                        type: "image",
                        source: W.data instanceof URL ? {
                          type: "url",
                          url: W.data.toString()
                        } : {
                          type: "base64",
                          media_type: W.mediaType === "image/*" ? "image/jpeg" : W.mediaType,
                          data: Et(W.data)
                        },
                        cache_control: z
                      });
                    else if (W.mediaType === "application/pdf") {
                      E.add("pdfs-2024-09-25");
                      const we = await P(
                        W.providerOptions
                      ), Q = await q(
                        W.providerOptions
                      );
                      U.push({
                        type: "document",
                        source: W.data instanceof URL ? {
                          type: "url",
                          url: W.data.toString()
                        } : {
                          type: "base64",
                          media_type: "application/pdf",
                          data: Et(W.data)
                        },
                        title: (s = Q.title) != null ? s : W.filename,
                        ...Q.context && { context: Q.context },
                        ...we && {
                          citations: { enabled: !0 }
                        },
                        cache_control: z
                      });
                    } else if (W.mediaType === "text/plain") {
                      const we = await P(
                        W.providerOptions
                      ), Q = await q(
                        W.providerOptions
                      );
                      U.push({
                        type: "document",
                        source: W.data instanceof URL ? {
                          type: "url",
                          url: W.data.toString()
                        } : {
                          type: "text",
                          media_type: "text/plain",
                          data: j_(W.data)
                        },
                        title: (i = Q.title) != null ? i : W.filename,
                        ...Q.context && { context: Q.context },
                        ...we && {
                          citations: { enabled: !0 }
                        },
                        cache_control: z
                      });
                    } else
                      throw new Ge({
                        functionality: `media type: ${W.mediaType}`
                      });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let ue = 0; ue < B.length; ue++) {
                const W = B[ue];
                if (W.type === "tool-approval-response")
                  continue;
                const X = ue === B.length - 1, z = (u = T.getCacheControl(W.providerOptions, {
                  type: "tool result part",
                  canCache: !0
                })) != null ? u : X ? T.getCacheControl(ne.providerOptions, {
                  type: "tool result message",
                  canCache: !0
                }) : void 0, we = W.output;
                let Q;
                switch (we.type) {
                  case "content":
                    Q = we.value.map((oe) => {
                      switch (oe.type) {
                        case "text":
                          return {
                            type: "text",
                            text: oe.text
                          };
                        case "image-data":
                          return {
                            type: "image",
                            source: {
                              type: "base64",
                              media_type: oe.mediaType,
                              data: oe.data
                            }
                          };
                        case "image-url":
                          return {
                            type: "image",
                            source: {
                              type: "url",
                              url: oe.url
                            }
                          };
                        case "file-url":
                          return {
                            type: "document",
                            source: {
                              type: "url",
                              url: oe.url
                            }
                          };
                        case "file-data": {
                          if (oe.mediaType === "application/pdf")
                            return E.add("pdfs-2024-09-25"), {
                              type: "document",
                              source: {
                                type: "base64",
                                media_type: oe.mediaType,
                                data: oe.data
                              }
                            };
                          o.push({
                            type: "other",
                            message: `unsupported tool content part type: ${oe.type} with media type: ${oe.mediaType}`
                          });
                          return;
                        }
                        default: {
                          o.push({
                            type: "other",
                            message: `unsupported tool content part type: ${oe.type}`
                          });
                          return;
                        }
                      }
                    }).filter(Wr);
                    break;
                  case "text":
                  case "error-text":
                    Q = we.value;
                    break;
                  case "execution-denied":
                    Q = (c = we.reason) != null ? c : "Tool execution denied.";
                    break;
                  case "json":
                  case "error-json":
                  default:
                    Q = JSON.stringify(we.value);
                    break;
                }
                U.push({
                  type: "tool_result",
                  tool_use_id: W.toolCallId,
                  content: Q,
                  is_error: we.type === "error-text" || we.type === "error-json" ? !0 : void 0,
                  cache_control: z
                });
              }
              break;
            }
            default: {
              const ue = V;
              throw new Error(`Unsupported role: ${ue}`);
            }
          }
        }
        L.push({ role: "user", content: U });
        break;
      }
      case "assistant": {
        const U = [], ne = /* @__PURE__ */ new Set();
        for (let V = 0; V < j.messages.length; V++) {
          const B = j.messages[V], ue = V === j.messages.length - 1, { content: W } = B;
          for (let X = 0; X < W.length; X++) {
            const z = W[X], we = X === W.length - 1, Q = (m = T.getCacheControl(z.providerOptions, {
              type: "assistant message part",
              canCache: !0
            })) != null ? m : we ? T.getCacheControl(B.providerOptions, {
              type: "assistant message",
              canCache: !0
            }) : void 0;
            switch (z.type) {
              case "text": {
                U.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    A && ue && we ? z.text.trim() : z.text
                  ),
                  cache_control: Q
                });
                break;
              }
              case "reasoning": {
                if (t) {
                  const oe = await at({
                    provider: "anthropic",
                    providerOptions: z.providerOptions,
                    schema: d_
                  });
                  oe != null ? oe.signature != null ? (T.getCacheControl(z.providerOptions, {
                    type: "thinking block",
                    canCache: !1
                  }), U.push({
                    type: "thinking",
                    thinking: z.text,
                    signature: oe.signature
                  })) : oe.redactedData != null ? (T.getCacheControl(z.providerOptions, {
                    type: "redacted thinking block",
                    canCache: !1
                  }), U.push({
                    type: "redacted_thinking",
                    data: oe.redactedData
                  })) : o.push({
                    type: "other",
                    message: "unsupported reasoning metadata"
                  }) : o.push({
                    type: "other",
                    message: "unsupported reasoning metadata"
                  });
                } else
                  o.push({
                    type: "other",
                    message: "sending reasoning content is disabled for this model"
                  });
                break;
              }
              case "tool-call": {
                if (z.providerExecuted) {
                  const R = r.toProviderToolName(
                    z.toolName
                  );
                  if (((d = (f = z.providerOptions) == null ? void 0 : f.anthropic) == null ? void 0 : d.type) === "mcp-tool-use") {
                    ne.add(z.toolCallId);
                    const Z = (_ = (g = z.providerOptions) == null ? void 0 : g.anthropic) == null ? void 0 : _.serverName;
                    if (Z == null || typeof Z != "string") {
                      o.push({
                        type: "other",
                        message: "mcp tool use server name is required and must be a string"
                      });
                      break;
                    }
                    U.push({
                      type: "mcp_tool_use",
                      id: z.toolCallId,
                      name: z.toolName,
                      input: z.input,
                      server_name: Z,
                      cache_control: Q
                    });
                  } else if (
                    // code execution 20250825:
                    R === "code_execution" && z.input != null && typeof z.input == "object" && "type" in z.input && typeof z.input.type == "string" && (z.input.type === "bash_code_execution" || z.input.type === "text_editor_code_execution")
                  )
                    U.push({
                      type: "server_tool_use",
                      id: z.toolCallId,
                      name: z.input.type,
                      // map back to subtool name
                      input: z.input,
                      cache_control: Q
                    });
                  else if (
                    // code execution 20250825 programmatic tool calling:
                    // Strip the fake 'programmatic-tool-call' type before sending to Anthropic
                    R === "code_execution" && z.input != null && typeof z.input == "object" && "type" in z.input && z.input.type === "programmatic-tool-call"
                  ) {
                    const { type: Z, ...ce } = z.input;
                    U.push({
                      type: "server_tool_use",
                      id: z.toolCallId,
                      name: "code_execution",
                      input: ce,
                      cache_control: Q
                    });
                  } else
                    R === "code_execution" || // code execution 20250522
                    R === "web_fetch" || R === "web_search" ? U.push({
                      type: "server_tool_use",
                      id: z.toolCallId,
                      name: R,
                      input: z.input,
                      cache_control: Q
                    }) : R === "tool_search_tool_regex" || R === "tool_search_tool_bm25" ? U.push({
                      type: "server_tool_use",
                      id: z.toolCallId,
                      name: R,
                      input: z.input,
                      cache_control: Q
                    }) : o.push({
                      type: "other",
                      message: `provider executed tool call for tool ${z.toolName} is not supported`
                    });
                  break;
                }
                const oe = (v = z.providerOptions) == null ? void 0 : v.anthropic, O = oe != null && oe.caller ? oe.caller.type === "code_execution_20250825" && oe.caller.toolId ? {
                  type: "code_execution_20250825",
                  tool_id: oe.caller.toolId
                } : oe.caller.type === "direct" ? { type: "direct" } : void 0 : void 0;
                U.push({
                  type: "tool_use",
                  id: z.toolCallId,
                  name: z.toolName,
                  input: z.input,
                  ...O && { caller: O },
                  cache_control: Q
                });
                break;
              }
              case "tool-result": {
                const oe = r.toProviderToolName(
                  z.toolName
                );
                if (ne.has(z.toolCallId)) {
                  const O = z.output;
                  if (O.type !== "json" && O.type !== "error-json") {
                    o.push({
                      type: "other",
                      message: `provider executed tool result output type ${O.type} for tool ${z.toolName} is not supported`
                    });
                    break;
                  }
                  U.push({
                    type: "mcp_tool_result",
                    tool_use_id: z.toolCallId,
                    is_error: O.type === "error-json",
                    content: O.value,
                    cache_control: Q
                  });
                } else if (oe === "code_execution") {
                  const O = z.output;
                  if (O.type === "error-text" || O.type === "error-json") {
                    let R = {};
                    try {
                      typeof O.value == "string" ? R = JSON.parse(O.value) : typeof O.value == "object" && O.value !== null && (R = O.value);
                    } catch {
                    }
                    R.type === "code_execution_tool_result_error" ? U.push({
                      type: "code_execution_tool_result",
                      tool_use_id: z.toolCallId,
                      content: {
                        type: "code_execution_tool_result_error",
                        error_code: (y = R.errorCode) != null ? y : "unknown"
                      },
                      cache_control: Q
                    }) : U.push({
                      type: "bash_code_execution_tool_result",
                      tool_use_id: z.toolCallId,
                      cache_control: Q,
                      content: {
                        type: "bash_code_execution_tool_result_error",
                        error_code: (S = R.errorCode) != null ? S : "unknown"
                      }
                    });
                    break;
                  }
                  if (O.type !== "json") {
                    o.push({
                      type: "other",
                      message: `provider executed tool result output type ${O.type} for tool ${z.toolName} is not supported`
                    });
                    break;
                  }
                  if (O.value == null || typeof O.value != "object" || !("type" in O.value) || typeof O.value.type != "string") {
                    o.push({
                      type: "other",
                      message: `provider executed tool result output value is not a valid code execution result for tool ${z.toolName}`
                    });
                    break;
                  }
                  if (O.value.type === "code_execution_result") {
                    const R = await Oe({
                      value: O.value,
                      schema: Ru
                    });
                    U.push({
                      type: "code_execution_tool_result",
                      tool_use_id: z.toolCallId,
                      content: {
                        type: R.type,
                        stdout: R.stdout,
                        stderr: R.stderr,
                        return_code: R.return_code,
                        content: (C = R.content) != null ? C : []
                      },
                      cache_control: Q
                    });
                  } else {
                    const R = await Oe({
                      value: O.value,
                      schema: Mu
                    });
                    R.type === "code_execution_result" ? U.push({
                      type: "code_execution_tool_result",
                      tool_use_id: z.toolCallId,
                      content: {
                        type: R.type,
                        stdout: R.stdout,
                        stderr: R.stderr,
                        return_code: R.return_code,
                        content: (w = R.content) != null ? w : []
                      },
                      cache_control: Q
                    }) : R.type === "bash_code_execution_result" || R.type === "bash_code_execution_tool_result_error" ? U.push({
                      type: "bash_code_execution_tool_result",
                      tool_use_id: z.toolCallId,
                      cache_control: Q,
                      content: R
                    }) : U.push({
                      type: "text_editor_code_execution_tool_result",
                      tool_use_id: z.toolCallId,
                      cache_control: Q,
                      content: R
                    });
                  }
                  break;
                }
                if (oe === "web_fetch") {
                  const O = z.output;
                  if (O.type === "error-json") {
                    const ae = JSON.parse(O.value);
                    U.push({
                      type: "web_fetch_tool_result",
                      tool_use_id: z.toolCallId,
                      content: {
                        type: "web_fetch_tool_result_error",
                        error_code: ae.errorCode
                      },
                      cache_control: Q
                    });
                    break;
                  }
                  if (O.type !== "json") {
                    o.push({
                      type: "other",
                      message: `provider executed tool result output type ${O.type} for tool ${z.toolName} is not supported`
                    });
                    break;
                  }
                  const R = await Oe({
                    value: O.value,
                    schema: Eu
                  });
                  U.push({
                    type: "web_fetch_tool_result",
                    tool_use_id: z.toolCallId,
                    content: {
                      type: "web_fetch_result",
                      url: R.url,
                      retrieved_at: R.retrievedAt,
                      content: {
                        type: "document",
                        title: R.content.title,
                        citations: R.content.citations,
                        source: {
                          type: R.content.source.type,
                          media_type: R.content.source.mediaType,
                          data: R.content.source.data
                        }
                      }
                    },
                    cache_control: Q
                  });
                  break;
                }
                if (oe === "web_search") {
                  const O = z.output;
                  if (O.type !== "json") {
                    o.push({
                      type: "other",
                      message: `provider executed tool result output type ${O.type} for tool ${z.toolName} is not supported`
                    });
                    break;
                  }
                  const R = await Oe({
                    value: O.value,
                    schema: Cu
                  });
                  U.push({
                    type: "web_search_tool_result",
                    tool_use_id: z.toolCallId,
                    content: R.map((ae) => ({
                      url: ae.url,
                      title: ae.title,
                      page_age: ae.pageAge,
                      encrypted_content: ae.encryptedContent,
                      type: ae.type
                    })),
                    cache_control: Q
                  });
                  break;
                }
                if (oe === "tool_search_tool_regex" || oe === "tool_search_tool_bm25") {
                  const O = z.output;
                  if (O.type !== "json") {
                    o.push({
                      type: "other",
                      message: `provider executed tool result output type ${O.type} for tool ${z.toolName} is not supported`
                    });
                    break;
                  }
                  const ae = (await Oe({
                    value: O.value,
                    schema: Nu
                  })).map((Z) => ({
                    type: "tool_reference",
                    tool_name: Z.toolName
                  }));
                  U.push({
                    type: "tool_search_tool_result",
                    tool_use_id: z.toolCallId,
                    content: {
                      type: "tool_search_tool_search_result",
                      tool_references: ae
                    },
                    cache_control: Q
                  });
                  break;
                }
                o.push({
                  type: "other",
                  message: `provider executed tool result for tool ${z.toolName} is not supported`
                });
                break;
              }
            }
          }
        }
        L.push({ role: "assistant", content: U });
        break;
      }
      default: {
        const U = D;
        throw new Error(`content type: ${U}`);
      }
    }
  }
  return {
    prompt: { system: I, messages: L },
    betas: E
  };
}
function z_(e) {
  const t = [];
  let o;
  for (const n of e) {
    const { role: r } = n;
    switch (r) {
      case "system": {
        (o == null ? void 0 : o.type) !== "system" && (o = { type: "system", messages: [] }, t.push(o)), o.messages.push(n);
        break;
      }
      case "assistant": {
        (o == null ? void 0 : o.type) !== "assistant" && (o = { type: "assistant", messages: [] }, t.push(o)), o.messages.push(n);
        break;
      }
      case "user": {
        (o == null ? void 0 : o.type) !== "user" && (o = { type: "user", messages: [] }, t.push(o)), o.messages.push(n);
        break;
      }
      case "tool": {
        (o == null ? void 0 : o.type) !== "user" && (o = { type: "user", messages: [] }, t.push(o)), o.messages.push(n);
        break;
      }
      default: {
        const a = r;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  }
  return t;
}
function ir({
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
    case "model_context_window_exceeded":
      return "length";
    default:
      return "other";
  }
}
function Ss(e, t, o) {
  var n;
  if (e.type !== "page_location" && e.type !== "char_location")
    return;
  const r = t[e.document_index];
  if (r)
    return {
      type: "source",
      sourceType: "document",
      id: o(),
      mediaType: r.mediaType,
      title: (n = e.document_title) != null ? n : r.title,
      filename: r.filename,
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
var U_ = class {
  constructor(e, t) {
    this.specificationVersion = "v3";
    var o;
    this.modelId = e, this.config = t, this.generateId = (o = t.generateId) != null ? o : Je;
  }
  supportsUrl(e) {
    return e.protocol === "https:";
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var e, t, o;
    return (o = (t = (e = this.config).supportedUrls) == null ? void 0 : t.call(e)) != null ? o : {};
  }
  async getArgs({
    userSuppliedBetas: e,
    prompt: t,
    maxOutputTokens: o,
    temperature: n,
    topP: r,
    topK: a,
    frequencyPenalty: s,
    presencePenalty: i,
    stopSequences: u,
    responseFormat: c,
    seed: m,
    tools: f,
    toolChoice: d,
    providerOptions: g,
    stream: _
  }) {
    var v, y, S, C, w, E;
    const k = [];
    s != null && k.push({ type: "unsupported", feature: "frequencyPenalty" }), i != null && k.push({ type: "unsupported", feature: "presencePenalty" }), m != null && k.push({ type: "unsupported", feature: "seed" }), n != null && n > 1 ? (k.push({
      type: "unsupported",
      feature: "temperature",
      details: `${n} exceeds anthropic maximum of 1.0. clamped to 1.0`
    }), n = 1) : n != null && n < 0 && (k.push({
      type: "unsupported",
      feature: "temperature",
      details: `${n} is below anthropic minimum of 0. clamped to 0`
    }), n = 0), (c == null ? void 0 : c.type) === "json" && c.schema == null && k.push({
      type: "unsupported",
      feature: "responseFormat",
      details: "JSON response format requires a schema. The response format is ignored."
    });
    const T = await at({
      provider: "anthropic",
      providerOptions: g,
      schema: m_
    }), {
      maxOutputTokens: I,
      supportsStructuredOutput: L,
      isKnownModel: P
    } = Z_(this.modelId), q = ((v = this.config.supportsNativeStructuredOutput) != null ? v : !0) && L, N = (y = T == null ? void 0 : T.structuredOutputMode) != null ? y : "auto", j = N === "outputFormat" || N === "auto" && q, A = (c == null ? void 0 : c.type) === "json" && c.schema != null && !j ? {
      type: "function",
      name: "json",
      description: "Respond with a JSON object.",
      inputSchema: c.schema
    } : void 0, D = T == null ? void 0 : T.contextManagement, U = new Xr(), ne = hu({
      tools: f,
      providerToolNames: {
        "anthropic.code_execution_20250522": "code_execution",
        "anthropic.code_execution_20250825": "code_execution",
        "anthropic.computer_20241022": "computer",
        "anthropic.computer_20250124": "computer",
        "anthropic.text_editor_20241022": "str_replace_editor",
        "anthropic.text_editor_20250124": "str_replace_editor",
        "anthropic.text_editor_20250429": "str_replace_based_edit_tool",
        "anthropic.text_editor_20250728": "str_replace_based_edit_tool",
        "anthropic.bash_20241022": "bash",
        "anthropic.bash_20250124": "bash",
        "anthropic.memory_20250818": "memory",
        "anthropic.web_search_20250305": "web_search",
        "anthropic.web_fetch_20250910": "web_fetch",
        "anthropic.tool_search_regex_20251119": "tool_search_tool_regex",
        "anthropic.tool_search_bm25_20251119": "tool_search_tool_bm25"
      }
    }), { prompt: V, betas: B } = await D_({
      prompt: t,
      sendReasoning: (S = T == null ? void 0 : T.sendReasoning) != null ? S : !0,
      warnings: k,
      cacheControlValidator: U,
      toolNameMapping: ne
    }), ue = ((C = T == null ? void 0 : T.thinking) == null ? void 0 : C.type) === "enabled";
    let W = (w = T == null ? void 0 : T.thinking) == null ? void 0 : w.budgetTokens;
    const X = o ?? I, z = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: X,
      temperature: n,
      top_k: a,
      top_p: r,
      stop_sequences: u,
      // provider specific settings:
      ...ue && {
        thinking: { type: "enabled", budget_tokens: W }
      },
      ...(T == null ? void 0 : T.effort) && {
        output_config: { effort: T.effort }
      },
      // structured output:
      ...j && (c == null ? void 0 : c.type) === "json" && c.schema != null && {
        output_format: {
          type: "json_schema",
          schema: c.schema
        }
      },
      // mcp servers:
      ...(T == null ? void 0 : T.mcpServers) && T.mcpServers.length > 0 && {
        mcp_servers: T.mcpServers.map((Z) => ({
          type: Z.type,
          name: Z.name,
          url: Z.url,
          authorization_token: Z.authorizationToken,
          tool_configuration: Z.toolConfiguration ? {
            allowed_tools: Z.toolConfiguration.allowedTools,
            enabled: Z.toolConfiguration.enabled
          } : void 0
        }))
      },
      // container: For programmatic tool calling (just an ID string) or agent skills (object with id and skills)
      ...(T == null ? void 0 : T.container) && {
        container: T.container.skills && T.container.skills.length > 0 ? (
          // Object format when skills are provided (agent skills feature)
          {
            id: T.container.id,
            skills: T.container.skills.map((Z) => ({
              type: Z.type,
              skill_id: Z.skillId,
              version: Z.version
            }))
          }
        ) : (
          // String format for container ID only (programmatic tool calling)
          T.container.id
        )
      },
      // prompt:
      system: V.system,
      messages: V.messages,
      ...D && {
        context_management: {
          edits: D.edits.map((Z) => {
            const ce = Z.type;
            switch (ce) {
              case "clear_tool_uses_20250919":
                return {
                  type: Z.type,
                  ...Z.trigger !== void 0 && {
                    trigger: Z.trigger
                  },
                  ...Z.keep !== void 0 && { keep: Z.keep },
                  ...Z.clearAtLeast !== void 0 && {
                    clear_at_least: Z.clearAtLeast
                  },
                  ...Z.clearToolInputs !== void 0 && {
                    clear_tool_inputs: Z.clearToolInputs
                  },
                  ...Z.excludeTools !== void 0 && {
                    exclude_tools: Z.excludeTools
                  }
                };
              case "clear_thinking_20251015":
                return {
                  type: Z.type,
                  ...Z.keep !== void 0 && { keep: Z.keep }
                };
              default:
                k.push({
                  type: "other",
                  message: `Unknown context management strategy: ${ce}`
                });
                return;
            }
          }).filter((Z) => Z !== void 0)
        }
      }
    };
    ue && (W == null && (k.push({
      type: "compatibility",
      feature: "extended thinking",
      details: "thinking budget is required when thinking is enabled. using default budget of 1024 tokens."
    }), z.thinking = {
      type: "enabled",
      budget_tokens: 1024
    }, W = 1024), z.temperature != null && (z.temperature = void 0, k.push({
      type: "unsupported",
      feature: "temperature",
      details: "temperature is not supported when thinking is enabled"
    })), a != null && (z.top_k = void 0, k.push({
      type: "unsupported",
      feature: "topK",
      details: "topK is not supported when thinking is enabled"
    })), r != null && (z.top_p = void 0, k.push({
      type: "unsupported",
      feature: "topP",
      details: "topP is not supported when thinking is enabled"
    })), z.max_tokens = X + (W ?? 0)), P && z.max_tokens > I && (o != null && k.push({
      type: "unsupported",
      feature: "maxOutputTokens",
      details: `${z.max_tokens} (maxOutputTokens + thinkingBudget) is greater than ${this.modelId} ${I} max output tokens. The max output tokens have been limited to ${I}.`
    }), z.max_tokens = I), T != null && T.mcpServers && T.mcpServers.length > 0 && B.add("mcp-client-2025-04-04"), D && B.add("context-management-2025-06-27"), T != null && T.container && T.container.skills && T.container.skills.length > 0 && (B.add("code-execution-2025-08-25"), B.add("skills-2025-10-02"), B.add("files-api-2025-04-14"), f != null && f.some(
      (Z) => Z.type === "provider" && Z.id === "anthropic.code_execution_20250825"
    ) || k.push({
      type: "other",
      message: "code execution tool is required when using skills"
    })), T != null && T.effort && B.add("effort-2025-11-24"), _ && ((E = T == null ? void 0 : T.toolStreaming) == null || E) && B.add("fine-grained-tool-streaming-2025-05-14"), j && (c == null ? void 0 : c.type) === "json" && c.schema != null && B.add("structured-outputs-2025-11-13");
    const {
      tools: Q,
      toolChoice: oe,
      toolWarnings: O,
      betas: R
    } = await C_(
      A != null ? {
        tools: [...f ?? [], A],
        toolChoice: { type: "required" },
        disableParallelToolUse: !0,
        cacheControlValidator: U,
        supportsStructuredOutput: q
      } : {
        tools: f ?? [],
        toolChoice: d,
        disableParallelToolUse: T == null ? void 0 : T.disableParallelToolUse,
        cacheControlValidator: U,
        supportsStructuredOutput: q
      }
    ), ae = U.getWarnings();
    return {
      args: {
        ...z,
        tools: Q,
        tool_choice: oe,
        stream: _ === !0 ? !0 : void 0
        // do not send when not streaming
      },
      warnings: [...k, ...O, ...ae],
      betas: /* @__PURE__ */ new Set([...B, ...R, ...e]),
      usesJsonResponseTool: A != null,
      toolNameMapping: ne
    };
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Ue(
      await De(this.config.headers),
      t,
      e.size > 0 ? { "anthropic-beta": Array.from(e).join(",") } : {}
    );
  }
  async getBetasFromHeaders(e) {
    var t, o;
    const r = (t = (await De(this.config.headers))["anthropic-beta"]) != null ? t : "", a = (o = e == null ? void 0 : e["anthropic-beta"]) != null ? o : "";
    return new Set(
      [
        ...r.toLowerCase().split(","),
        ...a.toLowerCase().split(",")
      ].map((s) => s.trim()).filter((s) => s !== "")
    );
  }
  buildRequestUrl(e) {
    var t, o, n;
    return (n = (o = (t = this.config).buildRequestUrl) == null ? void 0 : o.call(t, this.config.baseURL, e)) != null ? n : `${this.config.baseURL}/messages`;
  }
  transformRequestBody(e) {
    var t, o, n;
    return (n = (o = (t = this.config).transformRequestBody) == null ? void 0 : o.call(t, e)) != null ? n : e;
  }
  extractCitationDocuments(e) {
    const t = (o) => {
      var n, r;
      if (o.type !== "file" || o.mediaType !== "application/pdf" && o.mediaType !== "text/plain")
        return !1;
      const a = (n = o.providerOptions) == null ? void 0 : n.anthropic, s = a == null ? void 0 : a.citations;
      return (r = s == null ? void 0 : s.enabled) != null ? r : !1;
    };
    return e.filter((o) => o.role === "user").flatMap((o) => o.content).filter(t).map((o) => {
      var n;
      const r = o;
      return {
        title: (n = r.filename) != null ? n : "Untitled Document",
        filename: r.filename,
        mediaType: r.mediaType
      };
    });
  }
  async doGenerate(e) {
    var t, o, n, r, a, s, i, u, c, m;
    const { args: f, warnings: d, betas: g, usesJsonResponseTool: _, toolNameMapping: v } = await this.getArgs({
      ...e,
      stream: !1,
      userSuppliedBetas: await this.getBetasFromHeaders(e.headers)
    }), y = this.extractCitationDocuments(e.prompt), {
      responseHeaders: S,
      value: C,
      rawValue: w
    } = await Ze({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: g, headers: e.headers }),
      body: this.transformRequestBody(f),
      failedResponseHandler: xs,
      successfulResponseHandler: Qe(
        c_
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), E = [], k = {};
    let T = !1;
    for (const I of C.content)
      switch (I.type) {
        case "text": {
          if (!_ && (E.push({ type: "text", text: I.text }), I.citations))
            for (const L of I.citations) {
              const P = Ss(
                L,
                y,
                this.generateId
              );
              P && E.push(P);
            }
          break;
        }
        case "thinking": {
          E.push({
            type: "reasoning",
            text: I.thinking,
            providerMetadata: {
              anthropic: {
                signature: I.signature
              }
            }
          });
          break;
        }
        case "redacted_thinking": {
          E.push({
            type: "reasoning",
            text: "",
            providerMetadata: {
              anthropic: {
                redactedData: I.data
              }
            }
          });
          break;
        }
        case "tool_use": {
          if (_ && I.name === "json")
            T = !0, E.push({
              type: "text",
              text: JSON.stringify(I.input)
            });
          else {
            const P = I.caller, q = P ? {
              type: P.type,
              toolId: "tool_id" in P ? P.tool_id : void 0
            } : void 0;
            E.push({
              type: "tool-call",
              toolCallId: I.id,
              toolName: I.name,
              input: JSON.stringify(I.input),
              ...q && {
                providerMetadata: {
                  anthropic: {
                    caller: q
                  }
                }
              }
            });
          }
          break;
        }
        case "server_tool_use": {
          if (I.name === "text_editor_code_execution" || I.name === "bash_code_execution")
            E.push({
              type: "tool-call",
              toolCallId: I.id,
              toolName: v.toCustomToolName("code_execution"),
              input: JSON.stringify({ type: I.name, ...I.input }),
              providerExecuted: !0
            });
          else if (I.name === "web_search" || I.name === "code_execution" || I.name === "web_fetch") {
            const L = I.name === "code_execution" && I.input != null && typeof I.input == "object" && "code" in I.input && !("type" in I.input) ? { type: "programmatic-tool-call", ...I.input } : I.input;
            E.push({
              type: "tool-call",
              toolCallId: I.id,
              toolName: v.toCustomToolName(I.name),
              input: JSON.stringify(L),
              providerExecuted: !0
            });
          } else (I.name === "tool_search_tool_regex" || I.name === "tool_search_tool_bm25") && E.push({
            type: "tool-call",
            toolCallId: I.id,
            toolName: v.toCustomToolName(I.name),
            input: JSON.stringify(I.input),
            providerExecuted: !0
          });
          break;
        }
        case "mcp_tool_use": {
          k[I.id] = {
            type: "tool-call",
            toolCallId: I.id,
            toolName: I.name,
            input: JSON.stringify(I.input),
            providerExecuted: !0,
            dynamic: !0,
            providerMetadata: {
              anthropic: {
                type: "mcp-tool-use",
                serverName: I.server_name
              }
            }
          }, E.push(k[I.id]);
          break;
        }
        case "mcp_tool_result": {
          E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: k[I.tool_use_id].toolName,
            isError: I.is_error,
            result: I.content,
            dynamic: !0,
            providerMetadata: k[I.tool_use_id].providerMetadata
          });
          break;
        }
        case "web_fetch_tool_result": {
          I.content.type === "web_fetch_result" ? E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: v.toCustomToolName("web_fetch"),
            result: {
              type: "web_fetch_result",
              url: I.content.url,
              retrievedAt: I.content.retrieved_at,
              content: {
                type: I.content.content.type,
                title: I.content.content.title,
                citations: I.content.content.citations,
                source: {
                  type: I.content.content.source.type,
                  mediaType: I.content.content.source.media_type,
                  data: I.content.content.source.data
                }
              }
            }
          }) : I.content.type === "web_fetch_tool_result_error" && E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: v.toCustomToolName("web_fetch"),
            isError: !0,
            result: {
              type: "web_fetch_tool_result_error",
              errorCode: I.content.error_code
            }
          });
          break;
        }
        case "web_search_tool_result": {
          if (Array.isArray(I.content)) {
            E.push({
              type: "tool-result",
              toolCallId: I.tool_use_id,
              toolName: v.toCustomToolName("web_search"),
              result: I.content.map((L) => {
                var P;
                return {
                  url: L.url,
                  title: L.title,
                  pageAge: (P = L.page_age) != null ? P : null,
                  encryptedContent: L.encrypted_content,
                  type: L.type
                };
              })
            });
            for (const L of I.content)
              E.push({
                type: "source",
                sourceType: "url",
                id: this.generateId(),
                url: L.url,
                title: L.title,
                providerMetadata: {
                  anthropic: {
                    pageAge: (t = L.page_age) != null ? t : null
                  }
                }
              });
          } else
            E.push({
              type: "tool-result",
              toolCallId: I.tool_use_id,
              toolName: v.toCustomToolName("web_search"),
              isError: !0,
              result: {
                type: "web_search_tool_result_error",
                errorCode: I.content.error_code
              }
            });
          break;
        }
        // code execution 20250522:
        case "code_execution_tool_result": {
          I.content.type === "code_execution_result" ? E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: v.toCustomToolName("code_execution"),
            result: {
              type: I.content.type,
              stdout: I.content.stdout,
              stderr: I.content.stderr,
              return_code: I.content.return_code,
              content: (o = I.content.content) != null ? o : []
            }
          }) : I.content.type === "code_execution_tool_result_error" && E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: v.toCustomToolName("code_execution"),
            isError: !0,
            result: {
              type: "code_execution_tool_result_error",
              errorCode: I.content.error_code
            }
          });
          break;
        }
        // code execution 20250825:
        case "bash_code_execution_tool_result":
        case "text_editor_code_execution_tool_result": {
          E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: v.toCustomToolName("code_execution"),
            result: I.content
          });
          break;
        }
        // tool search tool results:
        case "tool_search_tool_result": {
          I.content.type === "tool_search_tool_search_result" ? E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: v.toCustomToolName("tool_search"),
            result: I.content.tool_references.map((L) => ({
              type: L.type,
              toolName: L.tool_name
            }))
          }) : E.push({
            type: "tool-result",
            toolCallId: I.tool_use_id,
            toolName: v.toCustomToolName("tool_search"),
            isError: !0,
            result: {
              type: "tool_search_tool_result_error",
              errorCode: I.content.error_code
            }
          });
          break;
        }
      }
    return {
      content: E,
      finishReason: {
        unified: ir({
          finishReason: C.stop_reason,
          isJsonResponseFromTool: T
        }),
        raw: (n = C.stop_reason) != null ? n : void 0
      },
      usage: ks(C.usage),
      request: { body: f },
      response: {
        id: (r = C.id) != null ? r : void 0,
        modelId: (a = C.model) != null ? a : void 0,
        headers: S,
        body: w
      },
      warnings: d,
      providerMetadata: {
        anthropic: {
          usage: C.usage,
          cacheCreationInputTokens: (s = C.usage.cache_creation_input_tokens) != null ? s : null,
          stopSequence: (i = C.stop_sequence) != null ? i : null,
          container: C.container ? {
            expiresAt: C.container.expires_at,
            id: C.container.id,
            skills: (c = (u = C.container.skills) == null ? void 0 : u.map((I) => ({
              type: I.type,
              skillId: I.skill_id,
              version: I.version
            }))) != null ? c : null
          } : null,
          contextManagement: (m = Cs(
            C.context_management
          )) != null ? m : null
        }
      }
    };
  }
  async doStream(e) {
    var t, o;
    const {
      args: n,
      warnings: r,
      betas: a,
      usesJsonResponseTool: s,
      toolNameMapping: i
    } = await this.getArgs({
      ...e,
      stream: !0,
      userSuppliedBetas: await this.getBetasFromHeaders(e.headers)
    }), u = this.extractCitationDocuments(e.prompt), c = this.buildRequestUrl(!0), { responseHeaders: m, value: f } = await Ze({
      url: c,
      headers: await this.getHeaders({ betas: a, headers: e.headers }),
      body: this.transformRequestBody(n),
      failedResponseHandler: xs,
      successfulResponseHandler: uo(
        p_
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let d = {
      unified: "other",
      raw: void 0
    };
    const g = {
      input_tokens: 0,
      output_tokens: 0,
      cache_creation_input_tokens: 0,
      cache_read_input_tokens: 0
    }, _ = {}, v = {};
    let y = null, S, C = null, w = null, E = null, k = !1, T;
    const I = this.generateId, L = f.pipeThrough(
      new TransformStream({
        start(j) {
          j.enqueue({ type: "stream-start", warnings: r });
        },
        transform(j, A) {
          var D, U, ne, V, B, ue, W, X, z, we, Q, oe;
          if (e.includeRawChunks && A.enqueue({ type: "raw", rawValue: j.rawValue }), !j.success) {
            A.enqueue({ type: "error", error: j.error });
            return;
          }
          const O = j.value;
          switch (O.type) {
            case "ping":
              return;
            case "content_block_start": {
              const R = O.content_block, ae = R.type;
              switch (T = ae, ae) {
                case "text": {
                  if (s)
                    return;
                  _[O.index] = { type: "text" }, A.enqueue({
                    type: "text-start",
                    id: String(O.index)
                  });
                  return;
                }
                case "thinking": {
                  _[O.index] = { type: "reasoning" }, A.enqueue({
                    type: "reasoning-start",
                    id: String(O.index)
                  });
                  return;
                }
                case "redacted_thinking": {
                  _[O.index] = { type: "reasoning" }, A.enqueue({
                    type: "reasoning-start",
                    id: String(O.index),
                    providerMetadata: {
                      anthropic: {
                        redactedData: R.data
                      }
                    }
                  });
                  return;
                }
                case "tool_use": {
                  if (s && R.name === "json")
                    k = !0, _[O.index] = { type: "text" }, A.enqueue({
                      type: "text-start",
                      id: String(O.index)
                    });
                  else {
                    const ce = R.caller, H = ce ? {
                      type: ce.type,
                      toolId: "tool_id" in ce ? ce.tool_id : void 0
                    } : void 0, Se = R.input && Object.keys(R.input).length > 0 ? JSON.stringify(R.input) : "";
                    _[O.index] = {
                      type: "tool-call",
                      toolCallId: R.id,
                      toolName: R.name,
                      input: Se,
                      firstDelta: Se.length === 0,
                      ...H && { caller: H }
                    }, A.enqueue({
                      type: "tool-input-start",
                      id: R.id,
                      toolName: R.name
                    });
                  }
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
                  ].includes(R.name)) {
                    const Z = R.name === "text_editor_code_execution" || R.name === "bash_code_execution" ? "code_execution" : R.name, ce = i.toCustomToolName(Z);
                    _[O.index] = {
                      type: "tool-call",
                      toolCallId: R.id,
                      toolName: ce,
                      input: "",
                      providerExecuted: !0,
                      firstDelta: !0,
                      providerToolName: R.name
                    }, A.enqueue({
                      type: "tool-input-start",
                      id: R.id,
                      toolName: ce,
                      providerExecuted: !0
                    });
                  } else if (R.name === "tool_search_tool_regex" || R.name === "tool_search_tool_bm25") {
                    const Z = i.toCustomToolName(
                      R.name
                    );
                    _[O.index] = {
                      type: "tool-call",
                      toolCallId: R.id,
                      toolName: Z,
                      input: "",
                      providerExecuted: !0,
                      firstDelta: !0,
                      providerToolName: R.name
                    }, A.enqueue({
                      type: "tool-input-start",
                      id: R.id,
                      toolName: Z,
                      providerExecuted: !0
                    });
                  }
                  return;
                }
                case "web_fetch_tool_result": {
                  R.content.type === "web_fetch_result" ? A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: i.toCustomToolName("web_fetch"),
                    result: {
                      type: "web_fetch_result",
                      url: R.content.url,
                      retrievedAt: R.content.retrieved_at,
                      content: {
                        type: R.content.content.type,
                        title: R.content.content.title,
                        citations: R.content.content.citations,
                        source: {
                          type: R.content.content.source.type,
                          mediaType: R.content.content.source.media_type,
                          data: R.content.content.source.data
                        }
                      }
                    }
                  }) : R.content.type === "web_fetch_tool_result_error" && A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: i.toCustomToolName("web_fetch"),
                    isError: !0,
                    result: {
                      type: "web_fetch_tool_result_error",
                      errorCode: R.content.error_code
                    }
                  });
                  return;
                }
                case "web_search_tool_result": {
                  if (Array.isArray(R.content)) {
                    A.enqueue({
                      type: "tool-result",
                      toolCallId: R.tool_use_id,
                      toolName: i.toCustomToolName("web_search"),
                      result: R.content.map((Z) => {
                        var ce;
                        return {
                          url: Z.url,
                          title: Z.title,
                          pageAge: (ce = Z.page_age) != null ? ce : null,
                          encryptedContent: Z.encrypted_content,
                          type: Z.type
                        };
                      })
                    });
                    for (const Z of R.content)
                      A.enqueue({
                        type: "source",
                        sourceType: "url",
                        id: I(),
                        url: Z.url,
                        title: Z.title,
                        providerMetadata: {
                          anthropic: {
                            pageAge: (D = Z.page_age) != null ? D : null
                          }
                        }
                      });
                  } else
                    A.enqueue({
                      type: "tool-result",
                      toolCallId: R.tool_use_id,
                      toolName: i.toCustomToolName("web_search"),
                      isError: !0,
                      result: {
                        type: "web_search_tool_result_error",
                        errorCode: R.content.error_code
                      }
                    });
                  return;
                }
                // code execution 20250522:
                case "code_execution_tool_result": {
                  R.content.type === "code_execution_result" ? A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: i.toCustomToolName("code_execution"),
                    result: {
                      type: R.content.type,
                      stdout: R.content.stdout,
                      stderr: R.content.stderr,
                      return_code: R.content.return_code,
                      content: (U = R.content.content) != null ? U : []
                    }
                  }) : R.content.type === "code_execution_tool_result_error" && A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: i.toCustomToolName("code_execution"),
                    isError: !0,
                    result: {
                      type: "code_execution_tool_result_error",
                      errorCode: R.content.error_code
                    }
                  });
                  return;
                }
                // code execution 20250825:
                case "bash_code_execution_tool_result":
                case "text_editor_code_execution_tool_result": {
                  A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: i.toCustomToolName("code_execution"),
                    result: R.content
                  });
                  return;
                }
                // tool search tool results:
                case "tool_search_tool_result": {
                  R.content.type === "tool_search_tool_search_result" ? A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: i.toCustomToolName("tool_search"),
                    result: R.content.tool_references.map((Z) => ({
                      type: Z.type,
                      toolName: Z.tool_name
                    }))
                  }) : A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: i.toCustomToolName("tool_search"),
                    isError: !0,
                    result: {
                      type: "tool_search_tool_result_error",
                      errorCode: R.content.error_code
                    }
                  });
                  return;
                }
                case "mcp_tool_use": {
                  v[R.id] = {
                    type: "tool-call",
                    toolCallId: R.id,
                    toolName: R.name,
                    input: JSON.stringify(R.input),
                    providerExecuted: !0,
                    dynamic: !0,
                    providerMetadata: {
                      anthropic: {
                        type: "mcp-tool-use",
                        serverName: R.server_name
                      }
                    }
                  }, A.enqueue(v[R.id]);
                  return;
                }
                case "mcp_tool_result": {
                  A.enqueue({
                    type: "tool-result",
                    toolCallId: R.tool_use_id,
                    toolName: v[R.tool_use_id].toolName,
                    isError: R.is_error,
                    result: R.content,
                    dynamic: !0,
                    providerMetadata: v[R.tool_use_id].providerMetadata
                  });
                  return;
                }
                default: {
                  const Z = ae;
                  throw new Error(
                    `Unsupported content block type: ${Z}`
                  );
                }
              }
            }
            case "content_block_stop": {
              if (_[O.index] != null) {
                const R = _[O.index];
                switch (R.type) {
                  case "text": {
                    A.enqueue({
                      type: "text-end",
                      id: String(O.index)
                    });
                    break;
                  }
                  case "reasoning": {
                    A.enqueue({
                      type: "reasoning-end",
                      id: String(O.index)
                    });
                    break;
                  }
                  case "tool-call":
                    if (!(s && R.toolName === "json")) {
                      A.enqueue({
                        type: "tool-input-end",
                        id: R.toolCallId
                      });
                      let Z = R.input === "" ? "{}" : R.input;
                      if (R.providerToolName === "code_execution")
                        try {
                          const ce = JSON.parse(Z);
                          ce != null && typeof ce == "object" && "code" in ce && !("type" in ce) && (Z = JSON.stringify({
                            type: "programmatic-tool-call",
                            ...ce
                          }));
                        } catch {
                        }
                      A.enqueue({
                        type: "tool-call",
                        toolCallId: R.toolCallId,
                        toolName: R.toolName,
                        input: Z,
                        providerExecuted: R.providerExecuted,
                        ...R.caller && {
                          providerMetadata: {
                            anthropic: {
                              caller: R.caller
                            }
                          }
                        }
                      });
                    }
                    break;
                }
                delete _[O.index];
              }
              T = void 0;
              return;
            }
            case "content_block_delta": {
              const R = O.delta.type;
              switch (R) {
                case "text_delta": {
                  if (s)
                    return;
                  A.enqueue({
                    type: "text-delta",
                    id: String(O.index),
                    delta: O.delta.text
                  });
                  return;
                }
                case "thinking_delta": {
                  A.enqueue({
                    type: "reasoning-delta",
                    id: String(O.index),
                    delta: O.delta.thinking
                  });
                  return;
                }
                case "signature_delta": {
                  T === "thinking" && A.enqueue({
                    type: "reasoning-delta",
                    id: String(O.index),
                    delta: "",
                    providerMetadata: {
                      anthropic: {
                        signature: O.delta.signature
                      }
                    }
                  });
                  return;
                }
                case "input_json_delta": {
                  const ae = _[O.index];
                  let Z = O.delta.partial_json;
                  if (Z.length === 0)
                    return;
                  if (k) {
                    if ((ae == null ? void 0 : ae.type) !== "text")
                      return;
                    A.enqueue({
                      type: "text-delta",
                      id: String(O.index),
                      delta: Z
                    });
                  } else {
                    if ((ae == null ? void 0 : ae.type) !== "tool-call")
                      return;
                    ae.firstDelta && (ae.providerToolName === "bash_code_execution" || ae.providerToolName === "text_editor_code_execution") && (Z = `{"type": "${ae.providerToolName}",${Z.substring(1)}`), A.enqueue({
                      type: "tool-input-delta",
                      id: ae.toolCallId,
                      delta: Z
                    }), ae.input += Z, ae.firstDelta = !1;
                  }
                  return;
                }
                case "citations_delta": {
                  const ae = O.delta.citation, Z = Ss(
                    ae,
                    u,
                    I
                  );
                  Z && A.enqueue(Z);
                  return;
                }
                default: {
                  const ae = R;
                  throw new Error(
                    `Unsupported delta type: ${ae}`
                  );
                }
              }
            }
            case "message_start": {
              if (g.input_tokens = O.message.usage.input_tokens, g.cache_read_input_tokens = (ne = O.message.usage.cache_read_input_tokens) != null ? ne : 0, g.cache_creation_input_tokens = (V = O.message.usage.cache_creation_input_tokens) != null ? V : 0, S = {
                ...O.message.usage
              }, C = (B = O.message.usage.cache_creation_input_tokens) != null ? B : null, O.message.container != null && (E = {
                expiresAt: O.message.container.expires_at,
                id: O.message.container.id,
                skills: null
              }), O.message.stop_reason != null && (d = {
                unified: ir({
                  finishReason: O.message.stop_reason,
                  isJsonResponseFromTool: k
                }),
                raw: O.message.stop_reason
              }), A.enqueue({
                type: "response-metadata",
                id: (ue = O.message.id) != null ? ue : void 0,
                modelId: (W = O.message.model) != null ? W : void 0
              }), O.message.content != null)
                for (let R = 0; R < O.message.content.length; R++) {
                  const ae = O.message.content[R];
                  if (ae.type === "tool_use") {
                    const Z = ae.caller, ce = Z ? {
                      type: Z.type,
                      toolId: "tool_id" in Z ? Z.tool_id : void 0
                    } : void 0;
                    A.enqueue({
                      type: "tool-input-start",
                      id: ae.id,
                      toolName: ae.name
                    });
                    const H = JSON.stringify((X = ae.input) != null ? X : {});
                    A.enqueue({
                      type: "tool-input-delta",
                      id: ae.id,
                      delta: H
                    }), A.enqueue({
                      type: "tool-input-end",
                      id: ae.id
                    }), A.enqueue({
                      type: "tool-call",
                      toolCallId: ae.id,
                      toolName: ae.name,
                      input: H,
                      ...ce && {
                        providerMetadata: {
                          anthropic: {
                            caller: ce
                          }
                        }
                      }
                    });
                  }
                }
              return;
            }
            case "message_delta": {
              g.output_tokens = O.usage.output_tokens, d = {
                unified: ir({
                  finishReason: O.delta.stop_reason,
                  isJsonResponseFromTool: k
                }),
                raw: (z = O.delta.stop_reason) != null ? z : void 0
              }, w = (we = O.delta.stop_sequence) != null ? we : null, E = O.delta.container != null ? {
                expiresAt: O.delta.container.expires_at,
                id: O.delta.container.id,
                skills: (oe = (Q = O.delta.container.skills) == null ? void 0 : Q.map((R) => ({
                  type: R.type,
                  skillId: R.skill_id,
                  version: R.version
                }))) != null ? oe : null
              } : null, O.delta.context_management && (y = Cs(
                O.delta.context_management
              )), S = {
                ...S,
                ...O.usage
              };
              return;
            }
            case "message_stop": {
              A.enqueue({
                type: "finish",
                finishReason: d,
                usage: ks(g),
                providerMetadata: {
                  anthropic: {
                    usage: S ?? null,
                    cacheCreationInputTokens: C,
                    stopSequence: w,
                    container: E,
                    contextManagement: y
                  }
                }
              });
              return;
            }
            case "error": {
              A.enqueue({ type: "error", error: O.error });
              return;
            }
            default: {
              const R = O;
              throw new Error(`Unsupported chunk type: ${R}`);
            }
          }
        }
      })
    ), [P, q] = L.tee(), N = P.getReader();
    try {
      await N.read();
      let j = await N.read();
      if (((t = j.value) == null ? void 0 : t.type) === "raw" && (j = await N.read()), ((o = j.value) == null ? void 0 : o.type) === "error") {
        const A = j.value.error;
        throw new Xe({
          message: A.message,
          url: c,
          requestBodyValues: n,
          statusCode: A.type === "overloaded_error" ? 529 : 500,
          responseHeaders: m,
          responseBody: JSON.stringify(A),
          isRetryable: A.type === "overloaded_error"
        });
      }
    } finally {
      N.cancel().catch(() => {
      }), N.releaseLock();
    }
    return {
      stream: q,
      request: { body: n },
      response: { headers: m }
    };
  }
};
function Z_(e) {
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
function Cs(e) {
  return e ? {
    appliedEdits: e.applied_edits.map((t) => {
      switch (t.type) {
        case "clear_tool_uses_20250919":
          return {
            type: t.type,
            clearedToolUses: t.cleared_tool_uses,
            clearedInputTokens: t.cleared_input_tokens
          };
        case "clear_thinking_20251015":
          return {
            type: t.type,
            clearedThinkingTurns: t.cleared_thinking_turns,
            clearedInputTokens: t.cleared_input_tokens
          };
      }
    }).filter((t) => t !== void 0)
  } : null;
}
var L_ = G(
  () => J(
    p({
      command: l(),
      restart: K().optional()
    })
  )
), F_ = dt({
  id: "anthropic.bash_20241022",
  inputSchema: L_
}), V_ = G(
  () => J(
    p({
      command: l(),
      restart: K().optional()
    })
  )
), J_ = dt({
  id: "anthropic.bash_20250124",
  inputSchema: V_
}), G_ = G(
  () => J(
    p({
      action: le([
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
      coordinate: M(x().int()).optional(),
      text: l().optional()
    })
  )
), B_ = dt({
  id: "anthropic.computer_20241022",
  inputSchema: G_
}), H_ = G(
  () => J(
    p({
      action: le([
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
      coordinate: Tr([x().int(), x().int()]).optional(),
      duration: x().optional(),
      scroll_amount: x().optional(),
      scroll_direction: le(["up", "down", "left", "right"]).optional(),
      start_coordinate: Tr([x().int(), x().int()]).optional(),
      text: l().optional()
    })
  )
), W_ = dt({
  id: "anthropic.computer_20250124",
  inputSchema: H_
}), K_ = G(
  () => J(
    xe("command", [
      p({
        command: h("view"),
        path: l(),
        view_range: Tr([x(), x()]).optional()
      }),
      p({
        command: h("create"),
        path: l(),
        file_text: l()
      }),
      p({
        command: h("str_replace"),
        path: l(),
        old_str: l(),
        new_str: l()
      }),
      p({
        command: h("insert"),
        path: l(),
        insert_line: x(),
        insert_text: l()
      }),
      p({
        command: h("delete"),
        path: l()
      }),
      p({
        command: h("rename"),
        old_path: l(),
        new_path: l()
      })
    ])
  )
), Y_ = dt({
  id: "anthropic.memory_20250818",
  inputSchema: K_
}), X_ = G(
  () => J(
    p({
      command: le(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: x().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: M(x().int()).optional()
    })
  )
), Q_ = dt({
  id: "anthropic.text_editor_20241022",
  inputSchema: X_
}), ey = G(
  () => J(
    p({
      command: le(["view", "create", "str_replace", "insert", "undo_edit"]),
      path: l(),
      file_text: l().optional(),
      insert_line: x().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: M(x().int()).optional()
    })
  )
), ty = dt({
  id: "anthropic.text_editor_20250124",
  inputSchema: ey
}), oy = G(
  () => J(
    p({
      command: le(["view", "create", "str_replace", "insert"]),
      path: l(),
      file_text: l().optional(),
      insert_line: x().int().optional(),
      new_str: l().optional(),
      old_str: l().optional(),
      view_range: M(x().int()).optional()
    })
  )
), ny = dt({
  id: "anthropic.text_editor_20250429",
  inputSchema: oy
}), ry = G(
  () => J(
    M(
      p({
        type: h("tool_reference"),
        toolName: l()
      })
    )
  )
), ay = G(
  () => J(
    p({
      /**
       * A natural language query to search for tools.
       * Claude will use BM25 text search to find relevant tools.
       */
      query: l(),
      /**
       * Maximum number of tools to return. Optional.
       */
      limit: x().optional()
    })
  )
), sy = ut({
  id: "anthropic.tool_search_bm25_20251119",
  inputSchema: ay,
  outputSchema: ry
}), iy = (e = {}) => sy(e), ly = {
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   */
  bash_20241022: F_,
  /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   */
  bash_20250124: J_,
  /**
   * Claude can analyze data, create visualizations, perform complex calculations,
   * run system commands, create and edit files, and process uploaded files directly within
   * the API conversation.
   *
   * The code execution tool allows Claude to run Bash commands and manipulate files,
   * including writing code, in a secure, sandboxed environment.
   */
  codeExecution_20250522: M_,
  /**
   * Claude can analyze data, create visualizations, perform complex calculations,
   * run system commands, create and edit files, and process uploaded files directly within
   * the API conversation.
   *
   * The code execution tool allows Claude to run both Python and Bash commands and manipulate files,
   * including writing code, in a secure, sandboxed environment.
   *
   * This is the latest version with enhanced Bash support and file operations.
   */
  codeExecution_20250825: A_,
  /**
   * Claude can interact with computer environments through the computer use tool, which
   * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
   *
   * Image results are supported.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   */
  computer_20241022: B_,
  /**
   * Claude can interact with computer environments through the computer use tool, which
   * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
   *
   * Image results are supported.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   */
  computer_20250124: W_,
  /**
   * The memory tool enables Claude to store and retrieve information across conversations through a memory file directory.
   * Claude can create, read, update, and delete files that persist between sessions,
   * allowing it to build knowledge over time without keeping everything in the context window.
   * The memory tool operates client-side—you control where and how the data is stored through your own infrastructure.
   *
   * Supported models: Claude Sonnet 4.5, Claude Sonnet 4, Claude Opus 4.1, Claude Opus 4.
   */
  memory_20250818: Y_,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.5
   */
  textEditor_20241022: Q_,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.7
   */
  textEditor_20250124: ty,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Note: This version does not support the "undo_edit" command.
   *
   * @deprecated Use textEditor_20250728 instead
   */
  textEditor_20250429: ny,
  /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Note: This version does not support the "undo_edit" command and adds optional max_characters parameter.
   *
   * Supported models: Claude Sonnet 4, Opus 4, and Opus 4.1
   *
   * @param maxCharacters - Optional maximum number of characters to view in the file
   */
  textEditor_20250728: __,
  /**
   * Creates a web fetch tool that gives Claude direct access to real-time web content.
   *
   * @param maxUses - The max_uses parameter limits the number of web fetches performed
   * @param allowedDomains - Only fetch from these domains
   * @param blockedDomains - Never fetch from these domains
   * @param citations - Unlike web search where citations are always enabled, citations are optional for web fetch. Set "citations": {"enabled": true} to enable Claude to cite specific passages from fetched documents.
   * @param maxContentTokens - The max_content_tokens parameter limits the amount of content that will be included in the context.
   */
  webFetch_20250910: S_,
  /**
   * Creates a web search tool that gives Claude direct access to real-time web content.
   *
   * @param maxUses - Maximum number of web searches Claude can perform during the conversation.
   * @param allowedDomains - Optional list of domains that Claude is allowed to search.
   * @param blockedDomains - Optional list of domains that Claude should avoid when searching.
   * @param userLocation - Optional user location information to provide geographically relevant search results.
   */
  webSearch_20250305: x_,
  /**
   * Creates a tool search tool that uses regex patterns to find tools.
   *
   * The tool search tool enables Claude to work with hundreds or thousands of tools
   * by dynamically discovering and loading them on-demand. Instead of loading all
   * tool definitions into the context window upfront, Claude searches your tool
   * catalog and loads only the tools it needs.
   *
   * Use `providerOptions: { anthropic: { deferLoading: true } }` on other tools
   * to mark them for deferred loading.
   *
   * Supported models: Claude Opus 4.5, Claude Sonnet 4.5
   */
  toolSearchRegex_20251119: q_,
  /**
   * Creates a tool search tool that uses BM25 (natural language) to find tools.
   *
   * The tool search tool enables Claude to work with hundreds or thousands of tools
   * by dynamically discovering and loading them on-demand. Instead of loading all
   * tool definitions into the context window upfront, Claude searches your tool
   * catalog and loads only the tools it needs.
   *
   * Use `providerOptions: { anthropic: { deferLoading: true } }` on other tools
   * to mark them for deferred loading.
   *
   * Supported models: Claude Opus 4.5, Claude Sonnet 4.5
   */
  toolSearchBm25_20251119: iy
};
function uy(e = {}) {
  var t, o;
  const n = (t = Yo(
    wo({
      settingValue: e.baseURL,
      environmentVariableName: "ANTHROPIC_BASE_URL"
    })
  )) != null ? t : "https://api.anthropic.com/v1", r = (o = e.name) != null ? o : "anthropic.messages", a = () => tt(
    {
      "anthropic-version": "2023-06-01",
      "x-api-key": zn({
        apiKey: e.apiKey,
        environmentVariableName: "ANTHROPIC_API_KEY",
        description: "Anthropic"
      }),
      ...e.headers
    },
    `ai-sdk/anthropic/${l_}`
  ), s = (u) => {
    var c;
    return new U_(u, {
      provider: r,
      baseURL: n,
      headers: a,
      fetch: e.fetch,
      generateId: (c = e.generateId) != null ? c : Je,
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
  return i.specificationVersion = "v3", i.languageModel = s, i.chat = s, i.messages = s, i.embeddingModel = (u) => {
    throw new rt({ modelId: u, modelType: "embeddingModel" });
  }, i.textEmbeddingModel = i.embeddingModel, i.imageModel = (u) => {
    throw new rt({ modelId: u, modelType: "imageModel" });
  }, i.tools = ly, i;
}
uy();
var cy = "3.0.1", py = G(
  () => J(
    p({
      error: p({
        code: x().nullable(),
        message: l(),
        status: l()
      })
    })
  )
), Jo = $t({
  errorSchema: py,
  errorToMessage: (e) => e.error.message
}), dy = G(
  () => J(
    p({
      /**
       * Optional. Optional reduced dimension for the output embedding.
       * If set, excessive values in the output embedding are truncated from the end.
       */
      outputDimensionality: x().optional(),
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
      taskType: le([
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
), my = class {
  constructor(e, t) {
    this.specificationVersion = "v3", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: o,
    providerOptions: n
  }) {
    const r = await at({
      provider: "google",
      providerOptions: n,
      schema: dy
    });
    if (e.length > this.maxEmbeddingsPerCall)
      throw new jr({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const a = Ue(
      await De(this.config.headers),
      t
    );
    if (e.length === 1) {
      const {
        responseHeaders: c,
        value: m,
        rawValue: f
      } = await Ze({
        url: `${this.config.baseURL}/models/${this.modelId}:embedContent`,
        headers: a,
        body: {
          model: `models/${this.modelId}`,
          content: {
            parts: [{ text: e[0] }]
          },
          outputDimensionality: r == null ? void 0 : r.outputDimensionality,
          taskType: r == null ? void 0 : r.taskType
        },
        failedResponseHandler: Jo,
        successfulResponseHandler: Qe(
          hy
        ),
        abortSignal: o,
        fetch: this.config.fetch
      });
      return {
        warnings: [],
        embeddings: [m.embedding.values],
        usage: void 0,
        response: { headers: c, body: f }
      };
    }
    const {
      responseHeaders: s,
      value: i,
      rawValue: u
    } = await Ze({
      url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
      headers: a,
      body: {
        requests: e.map((c) => ({
          model: `models/${this.modelId}`,
          content: { role: "user", parts: [{ text: c }] },
          outputDimensionality: r == null ? void 0 : r.outputDimensionality,
          taskType: r == null ? void 0 : r.taskType
        }))
      },
      failedResponseHandler: Jo,
      successfulResponseHandler: Qe(
        fy
      ),
      abortSignal: o,
      fetch: this.config.fetch
    });
    return {
      warnings: [],
      embeddings: i.embeddings.map((c) => c.values),
      usage: void 0,
      response: { headers: s, body: u }
    };
  }
}, fy = G(
  () => J(
    p({
      embeddings: M(p({ values: M(x()) }))
    })
  )
), hy = G(
  () => J(
    p({
      embedding: p({ values: M(x()) })
    })
  )
);
function Es(e) {
  var t, o, n, r;
  if (e == null)
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  const a = (t = e.promptTokenCount) != null ? t : 0, s = (o = e.candidatesTokenCount) != null ? o : 0, i = (n = e.cachedContentTokenCount) != null ? n : 0, u = (r = e.thoughtsTokenCount) != null ? r : 0;
  return {
    inputTokens: {
      total: a,
      noCache: a - i,
      cacheRead: i,
      cacheWrite: void 0
    },
    outputTokens: {
      total: s + u,
      text: s,
      reasoning: u
    },
    raw: e
  };
}
function Ot(e, t = !0) {
  if (e == null)
    return;
  if (gy(e))
    return t ? void 0 : typeof e == "object" && e.description ? { type: "object", description: e.description } : { type: "object" };
  if (typeof e == "boolean")
    return { type: "boolean", properties: {} };
  const {
    type: o,
    description: n,
    required: r,
    properties: a,
    items: s,
    allOf: i,
    anyOf: u,
    oneOf: c,
    format: m,
    const: f,
    minLength: d,
    enum: g
  } = e, _ = {};
  if (n && (_.description = n), r && (_.required = r), m && (_.format = m), f !== void 0 && (_.enum = [f]), o)
    if (Array.isArray(o)) {
      const v = o.includes("null"), y = o.filter((S) => S !== "null");
      y.length === 0 ? _.type = "null" : (_.anyOf = y.map((S) => ({ type: S })), v && (_.nullable = !0));
    } else
      _.type = o;
  if (g !== void 0 && (_.enum = g), a != null && (_.properties = Object.entries(a).reduce(
    (v, [y, S]) => (v[y] = Ot(S, !1), v),
    {}
  )), s && (_.items = Array.isArray(s) ? s.map((v) => Ot(v, !1)) : Ot(s, !1)), i && (_.allOf = i.map(
    (v) => Ot(v, !1)
  )), u)
    if (u.some(
      (v) => typeof v == "object" && (v == null ? void 0 : v.type) === "null"
    )) {
      const v = u.filter(
        (y) => !(typeof y == "object" && (y == null ? void 0 : y.type) === "null")
      );
      if (v.length === 1) {
        const y = Ot(
          v[0],
          !1
        );
        typeof y == "object" && (_.nullable = !0, Object.assign(_, y));
      } else
        _.anyOf = v.map(
          (y) => Ot(y, !1)
        ), _.nullable = !0;
    } else
      _.anyOf = u.map(
        (v) => Ot(v, !1)
      );
  return c && (_.oneOf = c.map(
    (v) => Ot(v, !1)
  )), d !== void 0 && (_.minLength = d), _;
}
function gy(e) {
  return e != null && typeof e == "object" && e.type === "object" && (e.properties == null || Object.keys(e.properties).length === 0) && !e.additionalProperties;
}
function vy(e, t) {
  var o, n, r;
  const a = [], s = [];
  let i = !0;
  const u = (o = t == null ? void 0 : t.isGemmaModel) != null ? o : !1, c = (n = t == null ? void 0 : t.providerOptionsName) != null ? n : "google";
  for (const { role: m, content: f } of e)
    switch (m) {
      case "system": {
        if (!i)
          throw new Ge({
            functionality: "system messages are only supported at the beginning of the conversation"
          });
        a.push({ text: f });
        break;
      }
      case "user": {
        i = !1;
        const d = [];
        for (const g of f)
          switch (g.type) {
            case "text": {
              d.push({ text: g.text });
              break;
            }
            case "file": {
              const _ = g.mediaType === "image/*" ? "image/jpeg" : g.mediaType;
              d.push(
                g.data instanceof URL ? {
                  fileData: {
                    mimeType: _,
                    fileUri: g.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: _,
                    data: Et(g.data)
                  }
                }
              );
              break;
            }
          }
        s.push({ role: "user", parts: d });
        break;
      }
      case "assistant": {
        i = !1, s.push({
          role: "model",
          parts: f.map((d) => {
            var g;
            const _ = (g = d.providerOptions) == null ? void 0 : g[c], v = (_ == null ? void 0 : _.thoughtSignature) != null ? String(_.thoughtSignature) : void 0;
            switch (d.type) {
              case "text":
                return d.text.length === 0 ? void 0 : {
                  text: d.text,
                  thoughtSignature: v
                };
              case "reasoning":
                return d.text.length === 0 ? void 0 : {
                  text: d.text,
                  thought: !0,
                  thoughtSignature: v
                };
              case "file": {
                if (d.data instanceof URL)
                  throw new Ge({
                    functionality: "File data URLs in assistant messages are not supported"
                  });
                return {
                  inlineData: {
                    mimeType: d.mediaType,
                    data: Et(d.data)
                  },
                  thoughtSignature: v
                };
              }
              case "tool-call":
                return {
                  functionCall: {
                    name: d.toolName,
                    args: d.input
                  },
                  thoughtSignature: v
                };
            }
          }).filter((d) => d !== void 0)
        });
        break;
      }
      case "tool": {
        i = !1;
        const d = [];
        for (const g of f) {
          if (g.type === "tool-approval-response")
            continue;
          const _ = g.output;
          if (_.type === "content")
            for (const v of _.value)
              switch (v.type) {
                case "text":
                  d.push({
                    functionResponse: {
                      name: g.toolName,
                      response: {
                        name: g.toolName,
                        content: v.text
                      }
                    }
                  });
                  break;
                case "image-data":
                  d.push(
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
                  d.push({ text: JSON.stringify(v) });
                  break;
              }
          else
            d.push({
              functionResponse: {
                name: g.toolName,
                response: {
                  name: g.toolName,
                  content: _.type === "execution-denied" ? (r = _.reason) != null ? r : "Tool execution denied." : _.value
                }
              }
            });
        }
        s.push({
          role: "user",
          parts: d
        });
        break;
      }
    }
  if (u && a.length > 0 && s.length > 0 && s[0].role === "user") {
    const m = a.map((f) => f.text).join(`

`);
    s[0].parts.unshift({ text: m + `

` });
  }
  return {
    systemInstruction: a.length > 0 && !u ? { parts: a } : void 0,
    contents: s
  };
}
function Rs(e) {
  return e.includes("/") ? e : `models/${e}`;
}
var Ms = G(
  () => J(
    p({
      responseModalities: M(le(["TEXT", "IMAGE"])).optional(),
      thinkingConfig: p({
        thinkingBudget: x().optional(),
        includeThoughts: K().optional(),
        // https://ai.google.dev/gemini-api/docs/gemini-3?thinking=high#thinking_level
        thinkingLevel: le(["minimal", "low", "medium", "high"]).optional()
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
      structuredOutputs: K().optional(),
      /**
       * Optional. A list of unique safety settings for blocking unsafe content.
       */
      safetySettings: M(
        p({
          category: le([
            "HARM_CATEGORY_UNSPECIFIED",
            "HARM_CATEGORY_HATE_SPEECH",
            "HARM_CATEGORY_DANGEROUS_CONTENT",
            "HARM_CATEGORY_HARASSMENT",
            "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "HARM_CATEGORY_CIVIC_INTEGRITY"
          ]),
          threshold: le([
            "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
            "BLOCK_LOW_AND_ABOVE",
            "BLOCK_MEDIUM_AND_ABOVE",
            "BLOCK_ONLY_HIGH",
            "BLOCK_NONE",
            "OFF"
          ])
        })
      ).optional(),
      threshold: le([
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
      audioTimestamp: K().optional(),
      /**
       * Optional. Defines labels used in billing reports. Available on Vertex AI only.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls
       */
      labels: Me(l(), l()).optional(),
      /**
       * Optional. If specified, the media resolution specified will be used.
       *
       * https://ai.google.dev/api/generate-content#MediaResolution
       */
      mediaResolution: le([
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
        aspectRatio: le([
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
        imageSize: le(["1K", "2K", "4K"]).optional()
      }).optional(),
      /**
       * Optional. Configuration for grounding retrieval.
       * Used to provide location context for Google Maps and Google Search grounding.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
       */
      retrievalConfig: p({
        latLng: p({
          latitude: x(),
          longitude: x()
        }).optional()
      }).optional()
    })
  )
);
function _y({
  tools: e,
  toolChoice: t,
  modelId: o
}) {
  var n;
  e = e != null && e.length ? e : void 0;
  const r = [], a = [
    "gemini-flash-latest",
    "gemini-flash-lite-latest",
    "gemini-pro-latest"
  ].some((g) => g === o), s = o.includes("gemini-2") || o.includes("gemini-3") || a, i = o.includes("gemini-1.5-flash") && !o.includes("-8b"), u = o.includes("gemini-2.5");
  if (e == null)
    return { tools: void 0, toolConfig: void 0, toolWarnings: r };
  const c = e.some((g) => g.type === "function"), m = e.some((g) => g.type === "provider");
  if (c && m && r.push({
    type: "unsupported",
    feature: "combination of function and provider-defined tools"
  }), m) {
    const g = [];
    return e.filter((v) => v.type === "provider").forEach((v) => {
      switch (v.id) {
        case "google.google_search":
          s ? g.push({ googleSearch: {} }) : i ? g.push({
            googleSearchRetrieval: {
              dynamicRetrievalConfig: {
                mode: v.args.mode,
                dynamicThreshold: v.args.dynamicThreshold
              }
            }
          }) : g.push({ googleSearchRetrieval: {} });
          break;
        case "google.enterprise_web_search":
          s ? g.push({ enterpriseWebSearch: {} }) : r.push({
            type: "unsupported",
            feature: `provider-defined tool ${v.id}`,
            details: "Enterprise Web Search requires Gemini 2.0 or newer."
          });
          break;
        case "google.url_context":
          s ? g.push({ urlContext: {} }) : r.push({
            type: "unsupported",
            feature: `provider-defined tool ${v.id}`,
            details: "The URL context tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.code_execution":
          s ? g.push({ codeExecution: {} }) : r.push({
            type: "unsupported",
            feature: `provider-defined tool ${v.id}`,
            details: "The code execution tools is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.file_search":
          u ? g.push({ fileSearch: { ...v.args } }) : r.push({
            type: "unsupported",
            feature: `provider-defined tool ${v.id}`,
            details: "The file search tool is only supported with Gemini 2.5 models."
          });
          break;
        case "google.vertex_rag_store":
          s ? g.push({
            retrieval: {
              vertex_rag_store: {
                rag_resources: {
                  rag_corpus: v.args.ragCorpus
                },
                similarity_top_k: v.args.topK
              }
            }
          }) : r.push({
            type: "unsupported",
            feature: `provider-defined tool ${v.id}`,
            details: "The RAG store tool is not supported with other Gemini models than Gemini 2."
          });
          break;
        case "google.google_maps":
          s ? g.push({ googleMaps: {} }) : r.push({
            type: "unsupported",
            feature: `provider-defined tool ${v.id}`,
            details: "The Google Maps grounding tool is not supported with Gemini models other than Gemini 2 or newer."
          });
          break;
        default:
          r.push({
            type: "unsupported",
            feature: `provider-defined tool ${v.id}`
          });
          break;
      }
    }), {
      tools: g.length > 0 ? g : void 0,
      toolConfig: void 0,
      toolWarnings: r
    };
  }
  const f = [];
  for (const g of e)
    switch (g.type) {
      case "function":
        f.push({
          name: g.name,
          description: (n = g.description) != null ? n : "",
          parameters: Ot(g.inputSchema)
        });
        break;
      default:
        r.push({
          type: "unsupported",
          feature: `function tool ${g.name}`
        });
        break;
    }
  if (t == null)
    return {
      tools: [{ functionDeclarations: f }],
      toolConfig: void 0,
      toolWarnings: r
    };
  const d = t.type;
  switch (d) {
    case "auto":
      return {
        tools: [{ functionDeclarations: f }],
        toolConfig: { functionCallingConfig: { mode: "AUTO" } },
        toolWarnings: r
      };
    case "none":
      return {
        tools: [{ functionDeclarations: f }],
        toolConfig: { functionCallingConfig: { mode: "NONE" } },
        toolWarnings: r
      };
    case "required":
      return {
        tools: [{ functionDeclarations: f }],
        toolConfig: { functionCallingConfig: { mode: "ANY" } },
        toolWarnings: r
      };
    case "tool":
      return {
        tools: [{ functionDeclarations: f }],
        toolConfig: {
          functionCallingConfig: {
            mode: "ANY",
            allowedFunctionNames: [t.toolName]
          }
        },
        toolWarnings: r
      };
    default: {
      const g = d;
      throw new Ge({
        functionality: `tool choice type: ${g}`
      });
    }
  }
}
function Ns({
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
    case "MALFORMED_FUNCTION_CALL":
      return "error";
    case "FINISH_REASON_UNSPECIFIED":
    case "OTHER":
    default:
      return "other";
  }
}
var yy = class {
  constructor(e, t) {
    this.specificationVersion = "v3";
    var o;
    this.modelId = e, this.config = t, this.generateId = (o = t.generateId) != null ? o : Je;
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var e, t, o;
    return (o = (t = (e = this.config).supportedUrls) == null ? void 0 : t.call(e)) != null ? o : {};
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: o,
    topP: n,
    topK: r,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    seed: c,
    tools: m,
    toolChoice: f,
    providerOptions: d
  }) {
    var g;
    const _ = [], v = this.config.provider.includes("vertex") ? "vertex" : "google";
    let y = await at({
      provider: v,
      providerOptions: d,
      schema: Ms
    });
    y == null && v !== "google" && (y = await at({
      provider: "google",
      providerOptions: d,
      schema: Ms
    })), m != null && m.some(
      (I) => I.type === "provider" && I.id === "google.vertex_rag_store"
    ) && !this.config.provider.startsWith("google.vertex.") && _.push({
      type: "other",
      message: `The 'vertex_rag_store' tool is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
    });
    const S = this.modelId.toLowerCase().startsWith("gemma-"), { contents: C, systemInstruction: w } = vy(
      e,
      { isGemmaModel: S, providerOptionsName: v }
    ), {
      tools: E,
      toolConfig: k,
      toolWarnings: T
    } = _y({
      tools: m,
      toolChoice: f,
      modelId: this.modelId
    });
    return {
      args: {
        generationConfig: {
          // standardized settings:
          maxOutputTokens: t,
          temperature: o,
          topK: r,
          topP: n,
          frequencyPenalty: a,
          presencePenalty: s,
          stopSequences: i,
          seed: c,
          // response format:
          responseMimeType: (u == null ? void 0 : u.type) === "json" ? "application/json" : void 0,
          responseSchema: (u == null ? void 0 : u.type) === "json" && u.schema != null && // Google GenAI does not support all OpenAPI Schema features,
          // so this is needed as an escape hatch:
          // TODO convert into provider option
          ((g = y == null ? void 0 : y.structuredOutputs) == null || g) ? Ot(u.schema) : void 0,
          ...(y == null ? void 0 : y.audioTimestamp) && {
            audioTimestamp: y.audioTimestamp
          },
          // provider options:
          responseModalities: y == null ? void 0 : y.responseModalities,
          thinkingConfig: y == null ? void 0 : y.thinkingConfig,
          ...(y == null ? void 0 : y.mediaResolution) && {
            mediaResolution: y.mediaResolution
          },
          ...(y == null ? void 0 : y.imageConfig) && {
            imageConfig: y.imageConfig
          }
        },
        contents: C,
        systemInstruction: S ? void 0 : w,
        safetySettings: y == null ? void 0 : y.safetySettings,
        tools: E,
        toolConfig: y != null && y.retrievalConfig ? {
          ...k,
          retrievalConfig: y.retrievalConfig
        } : k,
        cachedContent: y == null ? void 0 : y.cachedContent,
        labels: y == null ? void 0 : y.labels
      },
      warnings: [..._, ...T],
      providerOptionsName: v
    };
  }
  async doGenerate(e) {
    var t, o, n, r, a, s, i, u, c;
    const { args: m, warnings: f, providerOptionsName: d } = await this.getArgs(e), g = Ue(
      await De(this.config.headers),
      e.headers
    ), {
      responseHeaders: _,
      value: v,
      rawValue: y
    } = await Ze({
      url: `${this.config.baseURL}/${Rs(
        this.modelId
      )}:generateContent`,
      headers: g,
      body: m,
      failedResponseHandler: Jo,
      successfulResponseHandler: Qe(wy),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), S = v.candidates[0], C = [], w = (o = (t = S.content) == null ? void 0 : t.parts) != null ? o : [], E = v.usageMetadata;
    let k;
    for (const I of w)
      if ("executableCode" in I && ((n = I.executableCode) != null && n.code)) {
        const L = this.config.generateId();
        k = L, C.push({
          type: "tool-call",
          toolCallId: L,
          toolName: "code_execution",
          input: JSON.stringify(I.executableCode),
          providerExecuted: !0
        });
      } else "codeExecutionResult" in I && I.codeExecutionResult ? (C.push({
        type: "tool-result",
        // Assumes a result directly follows its corresponding call part.
        toolCallId: k,
        toolName: "code_execution",
        result: {
          outcome: I.codeExecutionResult.outcome,
          output: I.codeExecutionResult.output
        }
      }), k = void 0) : "text" in I && I.text != null && I.text.length > 0 ? C.push({
        type: I.thought === !0 ? "reasoning" : "text",
        text: I.text,
        providerMetadata: I.thoughtSignature ? {
          [d]: {
            thoughtSignature: I.thoughtSignature
          }
        } : void 0
      }) : "functionCall" in I ? C.push({
        type: "tool-call",
        toolCallId: this.config.generateId(),
        toolName: I.functionCall.name,
        input: JSON.stringify(I.functionCall.args),
        providerMetadata: I.thoughtSignature ? {
          [d]: {
            thoughtSignature: I.thoughtSignature
          }
        } : void 0
      }) : "inlineData" in I && C.push({
        type: "file",
        data: I.inlineData.data,
        mediaType: I.inlineData.mimeType,
        providerMetadata: I.thoughtSignature ? {
          [d]: {
            thoughtSignature: I.thoughtSignature
          }
        } : void 0
      });
    const T = (r = Os({
      groundingMetadata: S.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? r : [];
    for (const I of T)
      C.push(I);
    return {
      content: C,
      finishReason: {
        unified: Ns({
          finishReason: S.finishReason,
          hasToolCalls: C.some((I) => I.type === "tool-call")
        }),
        raw: (a = S.finishReason) != null ? a : void 0
      },
      usage: Es(E),
      warnings: f,
      providerMetadata: {
        [d]: {
          promptFeedback: (s = v.promptFeedback) != null ? s : null,
          groundingMetadata: (i = S.groundingMetadata) != null ? i : null,
          urlContextMetadata: (u = S.urlContextMetadata) != null ? u : null,
          safetyRatings: (c = S.safetyRatings) != null ? c : null,
          usageMetadata: E ?? null
        }
      },
      request: { body: m },
      response: {
        // TODO timestamp, model id, id
        headers: _,
        body: y
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: o, providerOptionsName: n } = await this.getArgs(e), r = Ue(
      await De(this.config.headers),
      e.headers
    ), { responseHeaders: a, value: s } = await Ze({
      url: `${this.config.baseURL}/${Rs(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers: r,
      body: t,
      failedResponseHandler: Jo,
      successfulResponseHandler: uo(xy),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let i = {
      unified: "other",
      raw: void 0
    }, u, c;
    const m = this.config.generateId;
    let f = !1, d = null, g = null, _ = 0;
    const v = /* @__PURE__ */ new Set();
    let y;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(S) {
            S.enqueue({ type: "stream-start", warnings: o });
          },
          transform(S, C) {
            var w, E, k, T, I, L, P;
            if (e.includeRawChunks && C.enqueue({ type: "raw", rawValue: S.rawValue }), !S.success) {
              C.enqueue({ type: "error", error: S.error });
              return;
            }
            const q = S.value, N = q.usageMetadata;
            N != null && (u = N);
            const j = (w = q.candidates) == null ? void 0 : w[0];
            if (j == null)
              return;
            const A = j.content, D = Os({
              groundingMetadata: j.groundingMetadata,
              generateId: m
            });
            if (D != null)
              for (const U of D)
                U.sourceType === "url" && !v.has(U.url) && (v.add(U.url), C.enqueue(U));
            if (A != null) {
              const U = (E = A.parts) != null ? E : [];
              for (const V of U)
                if ("executableCode" in V && ((k = V.executableCode) != null && k.code)) {
                  const B = m();
                  y = B, C.enqueue({
                    type: "tool-call",
                    toolCallId: B,
                    toolName: "code_execution",
                    input: JSON.stringify(V.executableCode),
                    providerExecuted: !0
                  }), f = !0;
                } else if ("codeExecutionResult" in V && V.codeExecutionResult) {
                  const B = y;
                  B && (C.enqueue({
                    type: "tool-result",
                    toolCallId: B,
                    toolName: "code_execution",
                    result: {
                      outcome: V.codeExecutionResult.outcome,
                      output: V.codeExecutionResult.output
                    }
                  }), y = void 0);
                } else "text" in V && V.text != null && V.text.length > 0 ? V.thought === !0 ? (d !== null && (C.enqueue({
                  type: "text-end",
                  id: d
                }), d = null), g === null && (g = String(_++), C.enqueue({
                  type: "reasoning-start",
                  id: g,
                  providerMetadata: V.thoughtSignature ? {
                    [n]: {
                      thoughtSignature: V.thoughtSignature
                    }
                  } : void 0
                })), C.enqueue({
                  type: "reasoning-delta",
                  id: g,
                  delta: V.text,
                  providerMetadata: V.thoughtSignature ? {
                    [n]: {
                      thoughtSignature: V.thoughtSignature
                    }
                  } : void 0
                })) : (g !== null && (C.enqueue({
                  type: "reasoning-end",
                  id: g
                }), g = null), d === null && (d = String(_++), C.enqueue({
                  type: "text-start",
                  id: d,
                  providerMetadata: V.thoughtSignature ? {
                    [n]: {
                      thoughtSignature: V.thoughtSignature
                    }
                  } : void 0
                })), C.enqueue({
                  type: "text-delta",
                  id: d,
                  delta: V.text,
                  providerMetadata: V.thoughtSignature ? {
                    [n]: {
                      thoughtSignature: V.thoughtSignature
                    }
                  } : void 0
                })) : "inlineData" in V && C.enqueue({
                  type: "file",
                  mediaType: V.inlineData.mimeType,
                  data: V.inlineData.data
                });
              const ne = by({
                parts: A.parts,
                generateId: m,
                providerOptionsName: n
              });
              if (ne != null)
                for (const V of ne)
                  C.enqueue({
                    type: "tool-input-start",
                    id: V.toolCallId,
                    toolName: V.toolName,
                    providerMetadata: V.providerMetadata
                  }), C.enqueue({
                    type: "tool-input-delta",
                    id: V.toolCallId,
                    delta: V.args,
                    providerMetadata: V.providerMetadata
                  }), C.enqueue({
                    type: "tool-input-end",
                    id: V.toolCallId,
                    providerMetadata: V.providerMetadata
                  }), C.enqueue({
                    type: "tool-call",
                    toolCallId: V.toolCallId,
                    toolName: V.toolName,
                    input: V.args,
                    providerMetadata: V.providerMetadata
                  }), f = !0;
            }
            j.finishReason != null && (i = {
              unified: Ns({
                finishReason: j.finishReason,
                hasToolCalls: f
              }),
              raw: j.finishReason
            }, c = {
              [n]: {
                promptFeedback: (T = q.promptFeedback) != null ? T : null,
                groundingMetadata: (I = j.groundingMetadata) != null ? I : null,
                urlContextMetadata: (L = j.urlContextMetadata) != null ? L : null,
                safetyRatings: (P = j.safetyRatings) != null ? P : null
              }
            }, N != null && (c[n].usageMetadata = N));
          },
          flush(S) {
            d !== null && S.enqueue({
              type: "text-end",
              id: d
            }), g !== null && S.enqueue({
              type: "reasoning-end",
              id: g
            }), S.enqueue({
              type: "finish",
              finishReason: i,
              usage: Es(u),
              providerMetadata: c
            });
          }
        })
      ),
      response: { headers: a },
      request: { body: t }
    };
  }
};
function by({
  parts: e,
  generateId: t,
  providerOptionsName: o
}) {
  const n = e == null ? void 0 : e.filter(
    (r) => "functionCall" in r
  );
  return n == null || n.length === 0 ? void 0 : n.map((r) => ({
    type: "tool-call",
    toolCallId: t(),
    toolName: r.functionCall.name,
    args: JSON.stringify(r.functionCall.args),
    providerMetadata: r.thoughtSignature ? {
      [o]: {
        thoughtSignature: r.thoughtSignature
      }
    } : void 0
  }));
}
function Os({
  groundingMetadata: e,
  generateId: t
}) {
  var o, n, r, a, s;
  if (!(e != null && e.groundingChunks))
    return;
  const i = [];
  for (const u of e.groundingChunks)
    if (u.web != null)
      i.push({
        type: "source",
        sourceType: "url",
        id: t(),
        url: u.web.uri,
        title: (o = u.web.title) != null ? o : void 0
      });
    else if (u.retrievedContext != null) {
      const c = u.retrievedContext.uri, m = u.retrievedContext.fileSearchStore;
      if (c && (c.startsWith("http://") || c.startsWith("https://")))
        i.push({
          type: "source",
          sourceType: "url",
          id: t(),
          url: c,
          title: (n = u.retrievedContext.title) != null ? n : void 0
        });
      else if (c) {
        const f = (r = u.retrievedContext.title) != null ? r : "Unknown Document";
        let d = "application/octet-stream", g;
        c.endsWith(".pdf") ? (d = "application/pdf", g = c.split("/").pop()) : c.endsWith(".txt") ? (d = "text/plain", g = c.split("/").pop()) : c.endsWith(".docx") ? (d = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", g = c.split("/").pop()) : c.endsWith(".doc") ? (d = "application/msword", g = c.split("/").pop()) : (c.match(/\.(md|markdown)$/) && (d = "text/markdown"), g = c.split("/").pop()), i.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: d,
          title: f,
          filename: g
        });
      } else if (m) {
        const f = (a = u.retrievedContext.title) != null ? a : "Unknown Document";
        i.push({
          type: "source",
          sourceType: "document",
          id: t(),
          mediaType: "application/octet-stream",
          title: f,
          filename: m.split("/").pop()
        });
      }
    } else u.maps != null && u.maps.uri && i.push({
      type: "source",
      sourceType: "url",
      id: t(),
      url: u.maps.uri,
      title: (s = u.maps.title) != null ? s : void 0
    });
  return i.length > 0 ? i : void 0;
}
var Ou = () => p({
  webSearchQueries: M(l()).nullish(),
  retrievalQueries: M(l()).nullish(),
  searchEntryPoint: p({ renderedContent: l() }).nullish(),
  groundingChunks: M(
    p({
      web: p({ uri: l(), title: l().nullish() }).nullish(),
      retrievedContext: p({
        uri: l().nullish(),
        title: l().nullish(),
        text: l().nullish(),
        fileSearchStore: l().nullish()
      }).nullish(),
      maps: p({
        uri: l().nullish(),
        title: l().nullish(),
        text: l().nullish(),
        placeId: l().nullish()
      }).nullish()
    })
  ).nullish(),
  groundingSupports: M(
    p({
      segment: p({
        startIndex: x().nullish(),
        endIndex: x().nullish(),
        text: l().nullish()
      }),
      segment_text: l().nullish(),
      groundingChunkIndices: M(x()).nullish(),
      supportChunkIndices: M(x()).nullish(),
      confidenceScores: M(x()).nullish(),
      confidenceScore: M(x()).nullish()
    })
  ).nullish(),
  retrievalMetadata: te([
    p({
      webDynamicRetrievalScore: x()
    }),
    p({})
  ]).nullish()
}), Au = () => p({
  parts: M(
    te([
      // note: order matters since text can be fully empty
      p({
        functionCall: p({
          name: l(),
          args: ve()
        }),
        thoughtSignature: l().nullish()
      }),
      p({
        inlineData: p({
          mimeType: l(),
          data: l()
        }),
        thoughtSignature: l().nullish()
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
        thought: K().nullish(),
        thoughtSignature: l().nullish()
      })
    ])
  ).nullish()
}), Rn = () => p({
  category: l().nullish(),
  probability: l().nullish(),
  probabilityScore: x().nullish(),
  severity: l().nullish(),
  severityScore: x().nullish(),
  blocked: K().nullish()
}), $u = p({
  cachedContentTokenCount: x().nullish(),
  thoughtsTokenCount: x().nullish(),
  promptTokenCount: x().nullish(),
  candidatesTokenCount: x().nullish(),
  totalTokenCount: x().nullish(),
  // https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/GenerateContentResponse#TrafficType
  trafficType: l().nullish()
}), Pu = () => p({
  urlMetadata: M(
    p({
      retrievedUrl: l(),
      urlRetrievalStatus: l()
    })
  )
}), wy = G(
  () => J(
    p({
      candidates: M(
        p({
          content: Au().nullish().or(p({}).strict()),
          finishReason: l().nullish(),
          safetyRatings: M(Rn()).nullish(),
          groundingMetadata: Ou().nullish(),
          urlContextMetadata: Pu().nullish()
        })
      ),
      usageMetadata: $u.nullish(),
      promptFeedback: p({
        blockReason: l().nullish(),
        safetyRatings: M(Rn()).nullish()
      }).nullish()
    })
  )
), xy = G(
  () => J(
    p({
      candidates: M(
        p({
          content: Au().nullish(),
          finishReason: l().nullish(),
          safetyRatings: M(Rn()).nullish(),
          groundingMetadata: Ou().nullish(),
          urlContextMetadata: Pu().nullish()
        })
      ).nullish(),
      usageMetadata: $u.nullish(),
      promptFeedback: p({
        blockReason: l().nullish(),
        safetyRatings: M(Rn()).nullish()
      }).nullish()
    })
  )
), Iy = ut({
  id: "google.code_execution",
  inputSchema: p({
    language: l().describe("The programming language of the code."),
    code: l().describe("The code to be executed.")
  }),
  outputSchema: p({
    outcome: l().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
    output: l().describe("The output from the code execution.")
  })
}), Ty = dt({
  id: "google.enterprise_web_search",
  inputSchema: G(() => J(p({})))
}), ky = p({
  /** The names of the file_search_stores to retrieve from.
   *  Example: `fileSearchStores/my-file-search-store-123`
   */
  fileSearchStoreNames: M(l()).describe(
    "The names of the file_search_stores to retrieve from. Example: `fileSearchStores/my-file-search-store-123`"
  ),
  /** The number of file search retrieval chunks to retrieve. */
  topK: x().int().positive().describe("The number of file search retrieval chunks to retrieve.").optional(),
  /** Metadata filter to apply to the file search retrieval documents.
   *  See https://google.aip.dev/160 for the syntax of the filter expression.
   */
  metadataFilter: l().describe(
    "Metadata filter to apply to the file search retrieval documents. See https://google.aip.dev/160 for the syntax of the filter expression."
  ).optional()
}).passthrough(), Sy = G(
  () => J(ky)
), Cy = dt({
  id: "google.file_search",
  inputSchema: Sy
}), Ey = dt({
  id: "google.google_maps",
  inputSchema: G(() => J(p({})))
}), Ry = dt({
  id: "google.google_search",
  inputSchema: G(
    () => J(
      p({
        mode: le(["MODE_DYNAMIC", "MODE_UNSPECIFIED"]).default("MODE_UNSPECIFIED"),
        dynamicThreshold: x().default(1)
      })
    )
  )
}), My = dt({
  id: "google.url_context",
  inputSchema: G(() => J(p({})))
}), Ny = dt({
  id: "google.vertex_rag_store",
  inputSchema: p({
    ragCorpus: l(),
    topK: x().optional()
  })
}), Oy = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch: Ry,
  /**
   * Creates an Enterprise Web Search tool for grounding responses using a compliance-focused web index.
   * Designed for highly-regulated industries (finance, healthcare, public sector).
   * Does not log customer data and supports VPC service controls.
   * Must have name "enterprise_web_search".
   *
   * @note Only available on Vertex AI. Requires Gemini 2.0 or newer.
   *
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise
   */
  enterpriseWebSearch: Ty,
  /**
   * Creates a Google Maps grounding tool that gives the model access to Google Maps data.
   * Must have name "google_maps".
   *
   * @see https://ai.google.dev/gemini-api/docs/maps-grounding
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
   */
  googleMaps: Ey,
  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext: My,
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
  fileSearch: Cy,
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
  codeExecution: Iy,
  /**
   * Creates a Vertex RAG Store tool that enables the model to perform RAG searches against a Vertex RAG Store.
   * Must have name "vertex_rag_store".
   */
  vertexRagStore: Ny
}, Ay = class {
  constructor(e, t, o) {
    this.modelId = e, this.settings = t, this.config = o, this.specificationVersion = "v3";
  }
  get maxImagesPerCall() {
    var e;
    return (e = this.settings.maxImagesPerCall) != null ? e : 4;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate(e) {
    var t, o, n;
    const {
      prompt: r,
      n: a = 1,
      size: s,
      aspectRatio: i = "1:1",
      seed: u,
      providerOptions: c,
      headers: m,
      abortSignal: f,
      files: d,
      mask: g
    } = e, _ = [];
    if (d != null && d.length > 0)
      throw new Error(
        "Google Generative AI does not support image editing. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities."
      );
    if (g != null)
      throw new Error(
        "Google Generative AI does not support image editing with masks. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities."
      );
    s != null && _.push({
      type: "unsupported",
      feature: "size",
      details: "This model does not support the `size` option. Use `aspectRatio` instead."
    }), u != null && _.push({
      type: "unsupported",
      feature: "seed",
      details: "This model does not support the `seed` option through this provider."
    });
    const v = await at({
      provider: "google",
      providerOptions: c,
      schema: Py
    }), y = (n = (o = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : o.call(t)) != null ? n : /* @__PURE__ */ new Date(), S = {
      sampleCount: a
    };
    i != null && (S.aspectRatio = i), v && Object.assign(S, v);
    const C = {
      instances: [{ prompt: r }],
      parameters: S
    }, { responseHeaders: w, value: E } = await Ze({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: Ue(await De(this.config.headers), m),
      body: C,
      failedResponseHandler: Jo,
      successfulResponseHandler: Qe(
        $y
      ),
      abortSignal: f,
      fetch: this.config.fetch
    });
    return {
      images: E.predictions.map(
        (k) => k.bytesBase64Encoded
      ),
      warnings: _ ?? [],
      providerMetadata: {
        google: {
          images: E.predictions.map((k) => ({
            // Add any prediction-specific metadata here
          }))
        }
      },
      response: {
        timestamp: y,
        modelId: this.modelId,
        headers: w
      }
    };
  }
}, $y = G(
  () => J(
    p({
      predictions: M(p({ bytesBase64Encoded: l() })).default([])
    })
  )
), Py = G(
  () => J(
    p({
      personGeneration: le(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      aspectRatio: le(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish()
    })
  )
);
function qy(e = {}) {
  var t, o;
  const n = (t = Yo(e.baseURL)) != null ? t : "https://generativelanguage.googleapis.com/v1beta", r = (o = e.name) != null ? o : "google.generative-ai", a = () => tt(
    {
      "x-goog-api-key": zn({
        apiKey: e.apiKey,
        environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
        description: "Google Generative AI"
      }),
      ...e.headers
    },
    `ai-sdk/google/${cy}`
  ), s = (m) => {
    var f;
    return new yy(m, {
      provider: r,
      baseURL: n,
      headers: a,
      generateId: (f = e.generateId) != null ? f : Je,
      supportedUrls: () => ({
        "*": [
          // Google Generative Language "files" endpoint
          // e.g. https://generativelanguage.googleapis.com/v1beta/files/...
          new RegExp(`^${n}/files/.*$`),
          // YouTube URLs (public or unlisted videos)
          new RegExp(
            "^https://(?:www\\.)?youtube\\.com/watch\\?v=[\\w-]+(?:&[\\w=&.-]*)?$"
          ),
          new RegExp("^https://youtu\\.be/[\\w-]+(?:\\?[\\w=&.-]*)?$")
        ]
      }),
      fetch: e.fetch
    });
  }, i = (m) => new my(m, {
    provider: r,
    baseURL: n,
    headers: a,
    fetch: e.fetch
  }), u = (m, f = {}) => new Ay(m, f, {
    provider: r,
    baseURL: n,
    headers: a,
    fetch: e.fetch
  }), c = function(m) {
    if (new.target)
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    return s(m);
  };
  return c.specificationVersion = "v3", c.languageModel = s, c.chat = s, c.generativeAI = s, c.embedding = i, c.embeddingModel = i, c.textEmbedding = i, c.textEmbeddingModel = i, c.image = u, c.imageModel = u, c.tools = Oy, c;
}
qy();
function As(e) {
  if (e == null)
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  const t = e.prompt_tokens, o = e.completion_tokens;
  return {
    inputTokens: {
      total: t,
      noCache: t,
      cacheRead: void 0,
      cacheWrite: void 0
    },
    outputTokens: {
      total: o,
      text: o,
      reasoning: void 0
    },
    raw: e
  };
}
function $s({
  data: e,
  mediaType: t
}) {
  return e instanceof URL ? e.toString() : `data:${t};base64,${Et(e)}`;
}
function jy(e) {
  var t;
  const o = [];
  for (let n = 0; n < e.length; n++) {
    const { role: r, content: a } = e[n], s = n === e.length - 1;
    switch (r) {
      case "system": {
        o.push({ role: "system", content: a });
        break;
      }
      case "user": {
        o.push({
          role: "user",
          content: a.map((i) => {
            switch (i.type) {
              case "text":
                return { type: "text", text: i.text };
              case "file":
                if (i.mediaType.startsWith("image/")) {
                  const u = i.mediaType === "image/*" ? "image/jpeg" : i.mediaType;
                  return {
                    type: "image_url",
                    image_url: $s({ data: i.data, mediaType: u })
                  };
                } else {
                  if (i.mediaType === "application/pdf")
                    return {
                      type: "document_url",
                      document_url: $s({
                        data: i.data,
                        mediaType: "application/pdf"
                      })
                    };
                  throw new Ge({
                    functionality: "Only images and PDF file parts are supported"
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        let i = "";
        const u = [];
        for (const c of a)
          switch (c.type) {
            case "text": {
              i += c.text;
              break;
            }
            case "tool-call": {
              u.push({
                id: c.toolCallId,
                type: "function",
                function: {
                  name: c.toolName,
                  arguments: JSON.stringify(c.input)
                }
              });
              break;
            }
            case "reasoning": {
              i += c.text;
              break;
            }
            default:
              throw new Error(
                `Unsupported content type in assistant message: ${c.type}`
              );
          }
        o.push({
          role: "assistant",
          content: i,
          prefix: s ? !0 : void 0,
          tool_calls: u.length > 0 ? u : void 0
        });
        break;
      }
      case "tool": {
        for (const i of a) {
          if (i.type === "tool-approval-response")
            continue;
          const u = i.output;
          let c;
          switch (u.type) {
            case "text":
            case "error-text":
              c = u.value;
              break;
            case "execution-denied":
              c = (t = u.reason) != null ? t : "Tool execution denied.";
              break;
            case "content":
            case "json":
            case "error-json":
              c = JSON.stringify(u.value);
              break;
          }
          o.push({
            role: "tool",
            name: i.toolName,
            tool_call_id: i.toolCallId,
            content: c
          });
        }
        break;
      }
      default: {
        const i = r;
        throw new Error(`Unsupported role: ${i}`);
      }
    }
  }
  return o;
}
function Ps({
  id: e,
  model: t,
  created: o
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: o != null ? new Date(o * 1e3) : void 0
  };
}
function qs(e) {
  switch (e) {
    case "stop":
      return "stop";
    case "length":
    case "model_length":
      return "length";
    case "tool_calls":
      return "tool-calls";
    default:
      return "other";
  }
}
var Dy = p({
  /**
  Whether to inject a safety prompt before all conversations.
  
  Defaults to `false`.
     */
  safePrompt: K().optional(),
  documentImageLimit: x().optional(),
  documentPageLimit: x().optional(),
  /**
   * Whether to use structured outputs.
   *
   * @default true
   */
  structuredOutputs: K().optional(),
  /**
   * Whether to use strict JSON schema validation.
   *
   * @default false
   */
  strictJsonSchema: K().optional(),
  /**
   * Whether to enable parallel function calling during tool use.
   * When set to false, the model will use at most one tool per response.
   *
   * @default true
   */
  parallelToolCalls: K().optional()
}), zy = p({
  object: h("error"),
  message: l(),
  type: l(),
  param: l().nullable(),
  code: l().nullable()
}), Er = $t({
  errorSchema: zy,
  errorToMessage: (e) => e.message
});
function Uy({
  tools: e,
  toolChoice: t
}) {
  e = e != null && e.length ? e : void 0;
  const o = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: o };
  const n = [];
  for (const a of e)
    a.type === "provider" ? o.push({
      type: "unsupported",
      feature: `provider-defined tool ${a.id}`
    }) : n.push({
      type: "function",
      function: {
        name: a.name,
        description: a.description,
        parameters: a.inputSchema,
        ...a.strict != null ? { strict: a.strict } : {}
      }
    });
  if (t == null)
    return { tools: n, toolChoice: void 0, toolWarnings: o };
  const r = t.type;
  switch (r) {
    case "auto":
    case "none":
      return { tools: n, toolChoice: r, toolWarnings: o };
    case "required":
      return { tools: n, toolChoice: "any", toolWarnings: o };
    // mistral does not support tool mode directly,
    // so we filter the tools and force the tool choice through 'any'
    case "tool":
      return {
        tools: n.filter(
          (a) => a.function.name === t.toolName
        ),
        toolChoice: "any",
        toolWarnings: o
      };
    default: {
      const a = r;
      throw new Ge({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
var Zy = class {
  constructor(e, t) {
    this.specificationVersion = "v3", this.supportedUrls = {
      "application/pdf": [/^https:\/\/.*$/]
    };
    var o;
    this.modelId = e, this.config = t, this.generateId = (o = t.generateId) != null ? o : Je;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: o,
    topP: n,
    topK: r,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    seed: c,
    providerOptions: m,
    tools: f,
    toolChoice: d
  }) {
    var g, _, v, y;
    const S = [], C = (g = await at({
      provider: "mistral",
      providerOptions: m,
      schema: Dy
    })) != null ? g : {};
    r != null && S.push({ type: "unsupported", feature: "topK" }), a != null && S.push({ type: "unsupported", feature: "frequencyPenalty" }), s != null && S.push({ type: "unsupported", feature: "presencePenalty" }), i != null && S.push({ type: "unsupported", feature: "stopSequences" });
    const w = (_ = C.structuredOutputs) != null ? _ : !0, E = (v = C.strictJsonSchema) != null ? v : !1;
    (u == null ? void 0 : u.type) === "json" && !(u != null && u.schema) && (e = sv({
      messages: e,
      schema: u.schema
    }));
    const k = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: C.safePrompt,
      // standardized settings:
      max_tokens: t,
      temperature: o,
      top_p: n,
      random_seed: c,
      // response format:
      response_format: (u == null ? void 0 : u.type) === "json" ? w && (u == null ? void 0 : u.schema) != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: E,
          name: (y = u.name) != null ? y : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: C.documentImageLimit,
      document_page_limit: C.documentPageLimit,
      // messages:
      messages: jy(e)
    }, {
      tools: T,
      toolChoice: I,
      toolWarnings: L
    } = Uy({
      tools: f,
      toolChoice: d
    });
    return {
      args: {
        ...k,
        tools: T,
        tool_choice: I,
        ...T != null && C.parallelToolCalls !== void 0 ? { parallel_tool_calls: C.parallelToolCalls } : {}
      },
      warnings: [...S, ...L]
    };
  }
  async doGenerate(e) {
    var t;
    const { args: o, warnings: n } = await this.getArgs(e), {
      responseHeaders: r,
      value: a,
      rawValue: s
    } = await Ze({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ue(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: Er,
      successfulResponseHandler: Qe(
        Ly
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), i = a.choices[0], u = [];
    if (i.message.content != null && Array.isArray(i.message.content))
      for (const c of i.message.content)
        if (c.type === "thinking") {
          const m = js(c.thinking);
          m.length > 0 && u.push({ type: "reasoning", text: m });
        } else c.type === "text" && c.text.length > 0 && u.push({ type: "text", text: c.text });
    else {
      const c = Ds(i.message.content);
      c != null && c.length > 0 && u.push({ type: "text", text: c });
    }
    if (i.message.tool_calls != null)
      for (const c of i.message.tool_calls)
        u.push({
          type: "tool-call",
          toolCallId: c.id,
          toolName: c.function.name,
          input: c.function.arguments
        });
    return {
      content: u,
      finishReason: {
        unified: qs(i.finish_reason),
        raw: (t = i.finish_reason) != null ? t : void 0
      },
      usage: As(a.usage),
      request: { body: o },
      response: {
        ...Ps(a),
        headers: r,
        body: s
      },
      warnings: n
    };
  }
  async doStream(e) {
    const { args: t, warnings: o } = await this.getArgs(e), n = { ...t, stream: !0 }, { responseHeaders: r, value: a } = await Ze({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Ue(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Er,
      successfulResponseHandler: uo(
        Fy
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let s = {
      unified: "other",
      raw: void 0
    }, i, u = !0, c = !1, m = null;
    const f = this.generateId;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(d) {
            d.enqueue({ type: "stream-start", warnings: o });
          },
          transform(d, g) {
            if (e.includeRawChunks && g.enqueue({ type: "raw", rawValue: d.rawValue }), !d.success) {
              g.enqueue({ type: "error", error: d.error });
              return;
            }
            const _ = d.value;
            u && (u = !1, g.enqueue({
              type: "response-metadata",
              ...Ps(_)
            })), _.usage != null && (i = _.usage);
            const v = _.choices[0], y = v.delta, S = Ds(y.content);
            if (y.content != null && Array.isArray(y.content)) {
              for (const C of y.content)
                if (C.type === "thinking") {
                  const w = js(C.thinking);
                  w.length > 0 && (m == null && (c && (g.enqueue({ type: "text-end", id: "0" }), c = !1), m = f(), g.enqueue({
                    type: "reasoning-start",
                    id: m
                  })), g.enqueue({
                    type: "reasoning-delta",
                    id: m,
                    delta: w
                  }));
                }
            }
            if (S != null && S.length > 0 && (c || (m != null && (g.enqueue({
              type: "reasoning-end",
              id: m
            }), m = null), g.enqueue({ type: "text-start", id: "0" }), c = !0), g.enqueue({
              type: "text-delta",
              id: "0",
              delta: S
            })), (y == null ? void 0 : y.tool_calls) != null)
              for (const C of y.tool_calls) {
                const w = C.id, E = C.function.name, k = C.function.arguments;
                g.enqueue({
                  type: "tool-input-start",
                  id: w,
                  toolName: E
                }), g.enqueue({
                  type: "tool-input-delta",
                  id: w,
                  delta: k
                }), g.enqueue({
                  type: "tool-input-end",
                  id: w
                }), g.enqueue({
                  type: "tool-call",
                  toolCallId: w,
                  toolName: E,
                  input: k
                });
              }
            v.finish_reason != null && (s = {
              unified: qs(v.finish_reason),
              raw: v.finish_reason
            });
          },
          flush(d) {
            m != null && d.enqueue({
              type: "reasoning-end",
              id: m
            }), c && d.enqueue({ type: "text-end", id: "0" }), d.enqueue({
              type: "finish",
              finishReason: s,
              usage: As(i)
            });
          }
        })
      ),
      request: { body: n },
      response: { headers: r }
    };
  }
};
function js(e) {
  return e.filter((t) => t.type === "text").map((t) => t.text).join("");
}
function Ds(e) {
  if (typeof e == "string")
    return e;
  if (e == null)
    return;
  const t = [];
  for (const o of e) {
    const { type: n } = o;
    switch (n) {
      case "text":
        t.push(o.text);
        break;
      case "thinking":
      case "image_url":
      case "reference":
        break;
      default: {
        const r = n;
        throw new Error(`Unsupported type: ${r}`);
      }
    }
  }
  return t.length ? t.join("") : void 0;
}
var qu = te([
  l(),
  M(
    xe("type", [
      p({
        type: h("text"),
        text: l()
      }),
      p({
        type: h("image_url"),
        image_url: te([
          l(),
          p({
            url: l(),
            detail: l().nullable()
          })
        ])
      }),
      p({
        type: h("reference"),
        reference_ids: M(x())
      }),
      p({
        type: h("thinking"),
        thinking: M(
          p({
            type: h("text"),
            text: l()
          })
        )
      })
    ])
  )
]).nullish(), ju = p({
  prompt_tokens: x(),
  completion_tokens: x(),
  total_tokens: x()
}), Ly = p({
  id: l().nullish(),
  created: x().nullish(),
  model: l().nullish(),
  choices: M(
    p({
      message: p({
        role: h("assistant"),
        content: qu,
        tool_calls: M(
          p({
            id: l(),
            function: p({ name: l(), arguments: l() })
          })
        ).nullish()
      }),
      index: x(),
      finish_reason: l().nullish()
    })
  ),
  object: h("chat.completion"),
  usage: ju
}), Fy = p({
  id: l().nullish(),
  created: x().nullish(),
  model: l().nullish(),
  choices: M(
    p({
      delta: p({
        role: le(["assistant"]).optional(),
        content: qu,
        tool_calls: M(
          p({
            id: l(),
            function: p({ name: l(), arguments: l() })
          })
        ).nullish()
      }),
      finish_reason: l().nullish(),
      index: x()
    })
  ),
  usage: ju.nullish()
}), Vy = class {
  constructor(e, t) {
    this.specificationVersion = "v3", this.maxEmbeddingsPerCall = 32, this.supportsParallelCalls = !1, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    abortSignal: t,
    headers: o
  }) {
    if (e.length > this.maxEmbeddingsPerCall)
      throw new jr({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const {
      responseHeaders: n,
      value: r,
      rawValue: a
    } = await Ze({
      url: `${this.config.baseURL}/embeddings`,
      headers: Ue(this.config.headers(), o),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: Er,
      successfulResponseHandler: Qe(
        Jy
      ),
      abortSignal: t,
      fetch: this.config.fetch
    });
    return {
      warnings: [],
      embeddings: r.data.map((s) => s.embedding),
      usage: r.usage ? { tokens: r.usage.prompt_tokens } : void 0,
      response: { headers: n, body: a }
    };
  }
}, Jy = p({
  data: M(p({ embedding: M(x()) })),
  usage: p({ prompt_tokens: x() }).nullish()
}), Gy = "3.0.1";
function By(e = {}) {
  var t;
  const o = (t = Yo(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", n = () => tt(
    {
      Authorization: `Bearer ${zn({
        apiKey: e.apiKey,
        environmentVariableName: "MISTRAL_API_KEY",
        description: "Mistral"
      })}`,
      ...e.headers
    },
    `ai-sdk/mistral/${Gy}`
  ), r = (i) => new Zy(i, {
    provider: "mistral.chat",
    baseURL: o,
    headers: n,
    fetch: e.fetch,
    generateId: e.generateId
  }), a = (i) => new Vy(i, {
    provider: "mistral.embedding",
    baseURL: o,
    headers: n,
    fetch: e.fetch
  }), s = function(i) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return r(i);
  };
  return s.specificationVersion = "v3", s.languageModel = r, s.chat = r, s.embedding = a, s.embeddingModel = a, s.textEmbedding = a, s.textEmbeddingModel = a, s.imageModel = (i) => {
    throw new rt({ modelId: i, modelType: "imageModel" });
  }, s;
}
By();
var Qr = p({
  error: p({
    message: l(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: l().nullish(),
    param: vt().nullish(),
    code: te([l(), x()]).nullish()
  })
}), Rt = $t({
  errorSchema: Qr,
  errorToMessage: (e) => e.error.message
});
function Du(e) {
  const t = e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat"), o = e.startsWith("gpt-4") || e.startsWith("gpt-5-mini") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-nano") && !e.startsWith("gpt-5-chat") || e.startsWith("o3") || e.startsWith("o4-mini"), n = e.startsWith("o1") || e.startsWith("o3") || e.startsWith("o4-mini") || e.startsWith("codex-mini") || e.startsWith("computer-use-preview") || e.startsWith("gpt-5") && !e.startsWith("gpt-5-chat"), r = e.startsWith("gpt-5.1") || e.startsWith("gpt-5.2");
  return {
    supportsFlexProcessing: t,
    supportsPriorityProcessing: o,
    isReasoningModel: n,
    systemMessageMode: n ? "developer" : "system",
    supportsNonReasoningParameters: r
  };
}
function zs(e) {
  var t, o, n, r, a, s;
  if (e == null)
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  const i = (t = e.prompt_tokens) != null ? t : 0, u = (o = e.completion_tokens) != null ? o : 0, c = (r = (n = e.prompt_tokens_details) == null ? void 0 : n.cached_tokens) != null ? r : 0, m = (s = (a = e.completion_tokens_details) == null ? void 0 : a.reasoning_tokens) != null ? s : 0;
  return {
    inputTokens: {
      total: i,
      noCache: i - c,
      cacheRead: c,
      cacheWrite: void 0
    },
    outputTokens: {
      total: u,
      text: u - m,
      reasoning: m
    },
    raw: e
  };
}
function Hy({
  prompt: e,
  systemMessageMode: t = "system"
}) {
  var o;
  const n = [], r = [];
  for (const { role: a, content: s } of e)
    switch (a) {
      case "system": {
        switch (t) {
          case "system": {
            n.push({ role: "system", content: s });
            break;
          }
          case "developer": {
            n.push({ role: "developer", content: s });
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
            const i = t;
            throw new Error(
              `Unsupported system message mode: ${i}`
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
          content: s.map((i, u) => {
            var c, m, f;
            switch (i.type) {
              case "text":
                return { type: "text", text: i.text };
              case "file":
                if (i.mediaType.startsWith("image/")) {
                  const d = i.mediaType === "image/*" ? "image/jpeg" : i.mediaType;
                  return {
                    type: "image_url",
                    image_url: {
                      url: i.data instanceof URL ? i.data.toString() : `data:${d};base64,${Et(i.data)}`,
                      // OpenAI specific extension: image detail
                      detail: (m = (c = i.providerOptions) == null ? void 0 : c.openai) == null ? void 0 : m.imageDetail
                    }
                  };
                } else if (i.mediaType.startsWith("audio/")) {
                  if (i.data instanceof URL)
                    throw new Ge({
                      functionality: "audio file parts with URLs"
                    });
                  switch (i.mediaType) {
                    case "audio/wav":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: Et(i.data),
                          format: "wav"
                        }
                      };
                    case "audio/mp3":
                    case "audio/mpeg":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: Et(i.data),
                          format: "mp3"
                        }
                      };
                    default:
                      throw new Ge({
                        functionality: `audio content parts with media type ${i.mediaType}`
                      });
                  }
                } else if (i.mediaType === "application/pdf") {
                  if (i.data instanceof URL)
                    throw new Ge({
                      functionality: "PDF file parts with URLs"
                    });
                  return {
                    type: "file",
                    file: typeof i.data == "string" && i.data.startsWith("file-") ? { file_id: i.data } : {
                      filename: (f = i.filename) != null ? f : `part-${u}.pdf`,
                      file_data: `data:application/pdf;base64,${Et(i.data)}`
                    }
                  };
                } else
                  throw new Ge({
                    functionality: `file part media type ${i.mediaType}`
                  });
            }
          })
        });
        break;
      }
      case "assistant": {
        let i = "";
        const u = [];
        for (const c of s)
          switch (c.type) {
            case "text": {
              i += c.text;
              break;
            }
            case "tool-call": {
              u.push({
                id: c.toolCallId,
                type: "function",
                function: {
                  name: c.toolName,
                  arguments: JSON.stringify(c.input)
                }
              });
              break;
            }
          }
        n.push({
          role: "assistant",
          content: i,
          tool_calls: u.length > 0 ? u : void 0
        });
        break;
      }
      case "tool": {
        for (const i of s) {
          if (i.type === "tool-approval-response")
            continue;
          const u = i.output;
          let c;
          switch (u.type) {
            case "text":
            case "error-text":
              c = u.value;
              break;
            case "execution-denied":
              c = (o = u.reason) != null ? o : "Tool execution denied.";
              break;
            case "content":
            case "json":
            case "error-json":
              c = JSON.stringify(u.value);
              break;
          }
          n.push({
            role: "tool",
            tool_call_id: i.toolCallId,
            content: c
          });
        }
        break;
      }
      default: {
        const i = a;
        throw new Error(`Unsupported role: ${i}`);
      }
    }
  return { messages: n, warnings: r };
}
function lr({
  id: e,
  model: t,
  created: o
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: o ? new Date(o * 1e3) : void 0
  };
}
function Us(e) {
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
      return "other";
  }
}
var Wy = G(
  () => J(
    p({
      id: l().nullish(),
      created: x().nullish(),
      model: l().nullish(),
      choices: M(
        p({
          message: p({
            role: h("assistant").nullish(),
            content: l().nullish(),
            tool_calls: M(
              p({
                id: l().nullish(),
                type: h("function"),
                function: p({
                  name: l(),
                  arguments: l()
                })
              })
            ).nullish(),
            annotations: M(
              p({
                type: h("url_citation"),
                url_citation: p({
                  start_index: x(),
                  end_index: x(),
                  url: l(),
                  title: l()
                })
              })
            ).nullish()
          }),
          index: x(),
          logprobs: p({
            content: M(
              p({
                token: l(),
                logprob: x(),
                top_logprobs: M(
                  p({
                    token: l(),
                    logprob: x()
                  })
                )
              })
            ).nullish()
          }).nullish(),
          finish_reason: l().nullish()
        })
      ),
      usage: p({
        prompt_tokens: x().nullish(),
        completion_tokens: x().nullish(),
        total_tokens: x().nullish(),
        prompt_tokens_details: p({
          cached_tokens: x().nullish()
        }).nullish(),
        completion_tokens_details: p({
          reasoning_tokens: x().nullish(),
          accepted_prediction_tokens: x().nullish(),
          rejected_prediction_tokens: x().nullish()
        }).nullish()
      }).nullish()
    })
  )
), Ky = G(
  () => J(
    te([
      p({
        id: l().nullish(),
        created: x().nullish(),
        model: l().nullish(),
        choices: M(
          p({
            delta: p({
              role: le(["assistant"]).nullish(),
              content: l().nullish(),
              tool_calls: M(
                p({
                  index: x(),
                  id: l().nullish(),
                  type: h("function").nullish(),
                  function: p({
                    name: l().nullish(),
                    arguments: l().nullish()
                  })
                })
              ).nullish(),
              annotations: M(
                p({
                  type: h("url_citation"),
                  url_citation: p({
                    start_index: x(),
                    end_index: x(),
                    url: l(),
                    title: l()
                  })
                })
              ).nullish()
            }).nullish(),
            logprobs: p({
              content: M(
                p({
                  token: l(),
                  logprob: x(),
                  top_logprobs: M(
                    p({
                      token: l(),
                      logprob: x()
                    })
                  )
                })
              ).nullish()
            }).nullish(),
            finish_reason: l().nullish(),
            index: x()
          })
        ),
        usage: p({
          prompt_tokens: x().nullish(),
          completion_tokens: x().nullish(),
          total_tokens: x().nullish(),
          prompt_tokens_details: p({
            cached_tokens: x().nullish()
          }).nullish(),
          completion_tokens_details: p({
            reasoning_tokens: x().nullish(),
            accepted_prediction_tokens: x().nullish(),
            rejected_prediction_tokens: x().nullish()
          }).nullish()
        }).nullish()
      }),
      Qr
    ])
  )
), Yy = G(
  () => J(
    p({
      /**
       * Modify the likelihood of specified tokens appearing in the completion.
       *
       * Accepts a JSON object that maps tokens (specified by their token ID in
       * the GPT tokenizer) to an associated bias value from -100 to 100.
       */
      logitBias: Me(Gg(), x()).optional(),
      /**
       * Return the log probabilities of the tokens.
       *
       * Setting to true will return the log probabilities of the tokens that
       * were generated.
       *
       * Setting to a number will return the log probabilities of the top n
       * tokens that were generated.
       */
      logprobs: te([K(), x()]).optional(),
      /**
       * Whether to enable parallel function calling during tool use. Default to true.
       */
      parallelToolCalls: K().optional(),
      /**
       * A unique identifier representing your end-user, which can help OpenAI to
       * monitor and detect abuse.
       */
      user: l().optional(),
      /**
       * Reasoning effort for reasoning models. Defaults to `medium`.
       */
      reasoningEffort: le(["none", "minimal", "low", "medium", "high", "xhigh"]).optional(),
      /**
       * Maximum number of completion tokens to generate. Useful for reasoning models.
       */
      maxCompletionTokens: x().optional(),
      /**
       * Whether to enable persistence in responses API.
       */
      store: K().optional(),
      /**
       * Metadata to associate with the request.
       */
      metadata: Me(l().max(64), l().max(512)).optional(),
      /**
       * Parameters for prediction mode.
       */
      prediction: Me(l(), vt()).optional(),
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
      serviceTier: le(["auto", "flex", "priority", "default"]).optional(),
      /**
       * Whether to use strict JSON schema validation.
       *
       * @default true
       */
      strictJsonSchema: K().optional(),
      /**
       * Controls the verbosity of the model's responses.
       * Lower values will result in more concise responses, while higher values will result in more verbose responses.
       */
      textVerbosity: le(["low", "medium", "high"]).optional(),
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
      promptCacheRetention: le(["in_memory", "24h"]).optional(),
      /**
       * A stable identifier used to help detect users of your application
       * that may be violating OpenAI's usage policies. The IDs should be a
       * string that uniquely identifies each user. We recommend hashing their
       * username or email address, in order to avoid sending us any identifying
       * information.
       */
      safetyIdentifier: l().optional(),
      /**
       * Override the system message mode for this model.
       * - 'system': Use the 'system' role for system messages (default for most models)
       * - 'developer': Use the 'developer' role for system messages (used by reasoning models)
       * - 'remove': Remove system messages entirely
       *
       * If not specified, the mode is automatically determined based on the model.
       */
      systemMessageMode: le(["system", "developer", "remove"]).optional(),
      /**
       * Force treating this model as a reasoning model.
       *
       * This is useful for "stealth" reasoning models (e.g. via a custom baseURL)
       * where the model ID is not recognized by the SDK's allowlist.
       *
       * When enabled, the SDK applies reasoning-model parameter compatibility rules
       * and defaults `systemMessageMode` to `developer` unless overridden.
       */
      forceReasoning: K().optional()
    })
  )
);
function Xy({
  tools: e,
  toolChoice: t
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
          function: {
            name: a.name,
            description: a.description,
            parameters: a.inputSchema,
            ...a.strict != null ? { strict: a.strict } : {}
          }
        });
        break;
      default:
        o.push({
          type: "unsupported",
          feature: `tool type: ${a.type}`
        });
        break;
    }
  if (t == null)
    return { tools: n, toolChoice: void 0, toolWarnings: o };
  const r = t.type;
  switch (r) {
    case "auto":
    case "none":
    case "required":
      return { tools: n, toolChoice: r, toolWarnings: o };
    case "tool":
      return {
        tools: n,
        toolChoice: {
          type: "function",
          function: {
            name: t.toolName
          }
        },
        toolWarnings: o
      };
    default: {
      const a = r;
      throw new Ge({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
var Qy = class {
  constructor(e, t) {
    this.specificationVersion = "v3", this.supportedUrls = {
      "image/*": [/^https?:\/\/.*$/]
    }, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    prompt: e,
    maxOutputTokens: t,
    temperature: o,
    topP: n,
    topK: r,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    seed: c,
    tools: m,
    toolChoice: f,
    providerOptions: d
  }) {
    var g, _, v, y, S;
    const C = [], w = (g = await at({
      provider: "openai",
      providerOptions: d,
      schema: Yy
    })) != null ? g : {}, E = Du(this.modelId), k = (_ = w.forceReasoning) != null ? _ : E.isReasoningModel;
    r != null && C.push({ type: "unsupported", feature: "topK" });
    const { messages: T, warnings: I } = Hy(
      {
        prompt: e,
        systemMessageMode: (v = w.systemMessageMode) != null ? v : k ? "developer" : E.systemMessageMode
      }
    );
    C.push(...I);
    const L = (y = w.strictJsonSchema) != null ? y : !0, P = {
      // model id:
      model: this.modelId,
      // model specific settings:
      logit_bias: w.logitBias,
      logprobs: w.logprobs === !0 || typeof w.logprobs == "number" ? !0 : void 0,
      top_logprobs: typeof w.logprobs == "number" ? w.logprobs : typeof w.logprobs == "boolean" && w.logprobs ? 0 : void 0,
      user: w.user,
      parallel_tool_calls: w.parallelToolCalls,
      // standardized settings:
      max_tokens: t,
      temperature: o,
      top_p: n,
      frequency_penalty: a,
      presence_penalty: s,
      response_format: (u == null ? void 0 : u.type) === "json" ? u.schema != null ? {
        type: "json_schema",
        json_schema: {
          schema: u.schema,
          strict: L,
          name: (S = u.name) != null ? S : "response",
          description: u.description
        }
      } : { type: "json_object" } : void 0,
      stop: i,
      seed: c,
      verbosity: w.textVerbosity,
      // openai specific settings:
      // TODO AI SDK 6: remove, we auto-map maxOutputTokens now
      max_completion_tokens: w.maxCompletionTokens,
      store: w.store,
      metadata: w.metadata,
      prediction: w.prediction,
      reasoning_effort: w.reasoningEffort,
      service_tier: w.serviceTier,
      prompt_cache_key: w.promptCacheKey,
      prompt_cache_retention: w.promptCacheRetention,
      safety_identifier: w.safetyIdentifier,
      // messages:
      messages: T
    };
    k ? ((w.reasoningEffort !== "none" || !E.supportsNonReasoningParameters) && (P.temperature != null && (P.temperature = void 0, C.push({
      type: "unsupported",
      feature: "temperature",
      details: "temperature is not supported for reasoning models"
    })), P.top_p != null && (P.top_p = void 0, C.push({
      type: "unsupported",
      feature: "topP",
      details: "topP is not supported for reasoning models"
    })), P.logprobs != null && (P.logprobs = void 0, C.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    }))), P.frequency_penalty != null && (P.frequency_penalty = void 0, C.push({
      type: "unsupported",
      feature: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), P.presence_penalty != null && (P.presence_penalty = void 0, C.push({
      type: "unsupported",
      feature: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), P.logit_bias != null && (P.logit_bias = void 0, C.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), P.top_logprobs != null && (P.top_logprobs = void 0, C.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), P.max_tokens != null && (P.max_completion_tokens == null && (P.max_completion_tokens = P.max_tokens), P.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && P.temperature != null && (P.temperature = void 0, C.push({
      type: "unsupported",
      feature: "temperature",
      details: "temperature is not supported for the search preview models and has been removed."
    })), w.serviceTier === "flex" && !E.supportsFlexProcessing && (C.push({
      type: "unsupported",
      feature: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), P.service_tier = void 0), w.serviceTier === "priority" && !E.supportsPriorityProcessing && (C.push({
      type: "unsupported",
      feature: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), P.service_tier = void 0);
    const {
      tools: q,
      toolChoice: N,
      toolWarnings: j
    } = Xy({
      tools: m,
      toolChoice: f
    });
    return {
      args: {
        ...P,
        tools: q,
        tool_choice: N
      },
      warnings: [...C, ...j]
    };
  }
  async doGenerate(e) {
    var t, o, n, r, a, s, i;
    const { args: u, warnings: c } = await this.getArgs(e), {
      responseHeaders: m,
      value: f,
      rawValue: d
    } = await Ze({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), e.headers),
      body: u,
      failedResponseHandler: Rt,
      successfulResponseHandler: Qe(
        Wy
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), g = f.choices[0], _ = [], v = g.message.content;
    v != null && v.length > 0 && _.push({ type: "text", text: v });
    for (const C of (t = g.message.tool_calls) != null ? t : [])
      _.push({
        type: "tool-call",
        toolCallId: (o = C.id) != null ? o : Je(),
        toolName: C.function.name,
        input: C.function.arguments
      });
    for (const C of (n = g.message.annotations) != null ? n : [])
      _.push({
        type: "source",
        sourceType: "url",
        id: Je(),
        url: C.url_citation.url,
        title: C.url_citation.title
      });
    const y = (r = f.usage) == null ? void 0 : r.completion_tokens_details;
    (a = f.usage) == null || a.prompt_tokens_details;
    const S = { openai: {} };
    return (y == null ? void 0 : y.accepted_prediction_tokens) != null && (S.openai.acceptedPredictionTokens = y == null ? void 0 : y.accepted_prediction_tokens), (y == null ? void 0 : y.rejected_prediction_tokens) != null && (S.openai.rejectedPredictionTokens = y == null ? void 0 : y.rejected_prediction_tokens), ((s = g.logprobs) == null ? void 0 : s.content) != null && (S.openai.logprobs = g.logprobs.content), {
      content: _,
      finishReason: {
        unified: Us(g.finish_reason),
        raw: (i = g.finish_reason) != null ? i : void 0
      },
      usage: zs(f.usage),
      request: { body: u },
      response: {
        ...lr(f),
        headers: m,
        body: d
      },
      warnings: c,
      providerMetadata: S
    };
  }
  async doStream(e) {
    const { args: t, warnings: o } = await this.getArgs(e), n = {
      ...t,
      stream: !0,
      stream_options: {
        include_usage: !0
      }
    }, { responseHeaders: r, value: a } = await Ze({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Rt,
      successfulResponseHandler: uo(
        Ky
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), s = [];
    let i = {
      unified: "other",
      raw: void 0
    }, u, c = !1, m = !1;
    const f = { openai: {} };
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(d) {
            d.enqueue({ type: "stream-start", warnings: o });
          },
          transform(d, g) {
            var _, v, y, S, C, w, E, k, T, I, L, P, q, N, j, A, D;
            if (e.includeRawChunks && g.enqueue({ type: "raw", rawValue: d.rawValue }), !d.success) {
              i = { unified: "error", raw: void 0 }, g.enqueue({ type: "error", error: d.error });
              return;
            }
            const U = d.value;
            if ("error" in U) {
              i = { unified: "error", raw: void 0 }, g.enqueue({ type: "error", error: U.error });
              return;
            }
            if (!c) {
              const B = lr(U);
              Object.values(B).some(Boolean) && (c = !0, g.enqueue({
                type: "response-metadata",
                ...lr(U)
              }));
            }
            U.usage != null && (u = U.usage, ((_ = U.usage.completion_tokens_details) == null ? void 0 : _.accepted_prediction_tokens) != null && (f.openai.acceptedPredictionTokens = (v = U.usage.completion_tokens_details) == null ? void 0 : v.accepted_prediction_tokens), ((y = U.usage.completion_tokens_details) == null ? void 0 : y.rejected_prediction_tokens) != null && (f.openai.rejectedPredictionTokens = (S = U.usage.completion_tokens_details) == null ? void 0 : S.rejected_prediction_tokens));
            const ne = U.choices[0];
            if ((ne == null ? void 0 : ne.finish_reason) != null && (i = {
              unified: Us(ne.finish_reason),
              raw: ne.finish_reason
            }), ((C = ne == null ? void 0 : ne.logprobs) == null ? void 0 : C.content) != null && (f.openai.logprobs = ne.logprobs.content), (ne == null ? void 0 : ne.delta) == null)
              return;
            const V = ne.delta;
            if (V.content != null && (m || (g.enqueue({ type: "text-start", id: "0" }), m = !0), g.enqueue({
              type: "text-delta",
              id: "0",
              delta: V.content
            })), V.tool_calls != null)
              for (const B of V.tool_calls) {
                const ue = B.index;
                if (s[ue] == null) {
                  if (B.type !== "function")
                    throw new tr({
                      data: B,
                      message: "Expected 'function' type."
                    });
                  if (B.id == null)
                    throw new tr({
                      data: B,
                      message: "Expected 'id' to be a string."
                    });
                  if (((w = B.function) == null ? void 0 : w.name) == null)
                    throw new tr({
                      data: B,
                      message: "Expected 'function.name' to be a string."
                    });
                  g.enqueue({
                    type: "tool-input-start",
                    id: B.id,
                    toolName: B.function.name
                  }), s[ue] = {
                    id: B.id,
                    type: "function",
                    function: {
                      name: B.function.name,
                      arguments: (E = B.function.arguments) != null ? E : ""
                    },
                    hasFinished: !1
                  };
                  const X = s[ue];
                  ((k = X.function) == null ? void 0 : k.name) != null && ((T = X.function) == null ? void 0 : T.arguments) != null && (X.function.arguments.length > 0 && g.enqueue({
                    type: "tool-input-delta",
                    id: X.id,
                    delta: X.function.arguments
                  }), ws(X.function.arguments) && (g.enqueue({
                    type: "tool-input-end",
                    id: X.id
                  }), g.enqueue({
                    type: "tool-call",
                    toolCallId: (I = X.id) != null ? I : Je(),
                    toolName: X.function.name,
                    input: X.function.arguments
                  }), X.hasFinished = !0));
                  continue;
                }
                const W = s[ue];
                W.hasFinished || (((L = B.function) == null ? void 0 : L.arguments) != null && (W.function.arguments += (q = (P = B.function) == null ? void 0 : P.arguments) != null ? q : ""), g.enqueue({
                  type: "tool-input-delta",
                  id: W.id,
                  delta: (N = B.function.arguments) != null ? N : ""
                }), ((j = W.function) == null ? void 0 : j.name) != null && ((A = W.function) == null ? void 0 : A.arguments) != null && ws(W.function.arguments) && (g.enqueue({
                  type: "tool-input-end",
                  id: W.id
                }), g.enqueue({
                  type: "tool-call",
                  toolCallId: (D = W.id) != null ? D : Je(),
                  toolName: W.function.name,
                  input: W.function.arguments
                }), W.hasFinished = !0));
              }
            if (V.annotations != null)
              for (const B of V.annotations)
                g.enqueue({
                  type: "source",
                  sourceType: "url",
                  id: Je(),
                  url: B.url_citation.url,
                  title: B.url_citation.title
                });
          },
          flush(d) {
            m && d.enqueue({ type: "text-end", id: "0" }), d.enqueue({
              type: "finish",
              finishReason: i,
              usage: zs(u),
              ...f != null ? { providerMetadata: f } : {}
            });
          }
        })
      ),
      request: { body: n },
      response: { headers: r }
    };
  }
};
function Zs(e) {
  var t, o, n, r;
  if (e == null)
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  const a = (t = e.prompt_tokens) != null ? t : 0, s = (o = e.completion_tokens) != null ? o : 0;
  return {
    inputTokens: {
      total: (n = e.prompt_tokens) != null ? n : void 0,
      noCache: a,
      cacheRead: void 0,
      cacheWrite: void 0
    },
    outputTokens: {
      total: (r = e.completion_tokens) != null ? r : void 0,
      text: s,
      reasoning: void 0
    },
    raw: e
  };
}
function eb({
  prompt: e,
  user: t = "user",
  assistant: o = "assistant"
}) {
  let n = "";
  e[0].role === "system" && (n += `${e[0].content}

`, e = e.slice(1));
  for (const { role: r, content: a } of e)
    switch (r) {
      case "system":
        throw new Xt({
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
        n += `${t}:
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
              throw new Ge({
                functionality: "tool-call messages"
              });
          }
        }).join("");
        n += `${o}:
${s}

`;
        break;
      }
      case "tool":
        throw new Ge({
          functionality: "tool messages"
        });
      default: {
        const s = r;
        throw new Error(`Unsupported role: ${s}`);
      }
    }
  return n += `${o}:
`, {
    prompt: n,
    stopSequences: [`
${t}:`]
  };
}
function Ls({
  id: e,
  model: t,
  created: o
}) {
  return {
    id: e ?? void 0,
    modelId: t ?? void 0,
    timestamp: o != null ? new Date(o * 1e3) : void 0
  };
}
function Fs(e) {
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
      return "other";
  }
}
var tb = G(
  () => J(
    p({
      id: l().nullish(),
      created: x().nullish(),
      model: l().nullish(),
      choices: M(
        p({
          text: l(),
          finish_reason: l(),
          logprobs: p({
            tokens: M(l()),
            token_logprobs: M(x()),
            top_logprobs: M(Me(l(), x())).nullish()
          }).nullish()
        })
      ),
      usage: p({
        prompt_tokens: x(),
        completion_tokens: x(),
        total_tokens: x()
      }).nullish()
    })
  )
), ob = G(
  () => J(
    te([
      p({
        id: l().nullish(),
        created: x().nullish(),
        model: l().nullish(),
        choices: M(
          p({
            text: l(),
            finish_reason: l().nullish(),
            index: x(),
            logprobs: p({
              tokens: M(l()),
              token_logprobs: M(x()),
              top_logprobs: M(Me(l(), x())).nullish()
            }).nullish()
          })
        ),
        usage: p({
          prompt_tokens: x(),
          completion_tokens: x(),
          total_tokens: x()
        }).nullish()
      }),
      Qr
    ])
  )
), Vs = G(
  () => J(
    p({
      /**
      Echo back the prompt in addition to the completion.
         */
      echo: K().optional(),
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
      logitBias: Me(l(), x()).optional(),
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
      logprobs: te([K(), x()]).optional()
    })
  )
), nb = class {
  constructor(e, t) {
    this.specificationVersion = "v3", this.supportedUrls = {
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
    temperature: o,
    topP: n,
    topK: r,
    frequencyPenalty: a,
    presencePenalty: s,
    stopSequences: i,
    responseFormat: u,
    tools: c,
    toolChoice: m,
    seed: f,
    providerOptions: d
  }) {
    const g = [], _ = {
      ...await at({
        provider: "openai",
        providerOptions: d,
        schema: Vs
      }),
      ...await at({
        provider: this.providerOptionsName,
        providerOptions: d,
        schema: Vs
      })
    };
    r != null && g.push({ type: "unsupported", feature: "topK" }), c != null && c.length && g.push({ type: "unsupported", feature: "tools" }), m != null && g.push({ type: "unsupported", feature: "toolChoice" }), u != null && u.type !== "text" && g.push({
      type: "unsupported",
      feature: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: v, stopSequences: y } = eb({ prompt: e }), S = [...y ?? [], ...i ?? []];
    return {
      args: {
        // model id:
        model: this.modelId,
        // model specific settings:
        echo: _.echo,
        logit_bias: _.logitBias,
        logprobs: (_ == null ? void 0 : _.logprobs) === !0 ? 0 : (_ == null ? void 0 : _.logprobs) === !1 || _ == null ? void 0 : _.logprobs,
        suffix: _.suffix,
        user: _.user,
        // standardized settings:
        max_tokens: t,
        temperature: o,
        top_p: n,
        frequency_penalty: a,
        presence_penalty: s,
        seed: f,
        // prompt:
        prompt: v,
        // stop sequences:
        stop: S.length > 0 ? S : void 0
      },
      warnings: g
    };
  }
  async doGenerate(e) {
    var t;
    const { args: o, warnings: n } = await this.getArgs(e), {
      responseHeaders: r,
      value: a,
      rawValue: s
    } = await Ze({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), e.headers),
      body: o,
      failedResponseHandler: Rt,
      successfulResponseHandler: Qe(
        tb
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), i = a.choices[0], u = { openai: {} };
    return i.logprobs != null && (u.openai.logprobs = i.logprobs), {
      content: [{ type: "text", text: i.text }],
      usage: Zs(a.usage),
      finishReason: {
        unified: Fs(i.finish_reason),
        raw: (t = i.finish_reason) != null ? t : void 0
      },
      request: { body: o },
      response: {
        ...Ls(a),
        headers: r,
        body: s
      },
      providerMetadata: u,
      warnings: n
    };
  }
  async doStream(e) {
    const { args: t, warnings: o } = await this.getArgs(e), n = {
      ...t,
      stream: !0,
      stream_options: {
        include_usage: !0
      }
    }, { responseHeaders: r, value: a } = await Ze({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), e.headers),
      body: n,
      failedResponseHandler: Rt,
      successfulResponseHandler: uo(
        ob
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let s = {
      unified: "other",
      raw: void 0
    };
    const i = { openai: {} };
    let u, c = !0;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(m) {
            m.enqueue({ type: "stream-start", warnings: o });
          },
          transform(m, f) {
            if (e.includeRawChunks && f.enqueue({ type: "raw", rawValue: m.rawValue }), !m.success) {
              s = { unified: "error", raw: void 0 }, f.enqueue({ type: "error", error: m.error });
              return;
            }
            const d = m.value;
            if ("error" in d) {
              s = { unified: "error", raw: void 0 }, f.enqueue({ type: "error", error: d.error });
              return;
            }
            c && (c = !1, f.enqueue({
              type: "response-metadata",
              ...Ls(d)
            }), f.enqueue({ type: "text-start", id: "0" })), d.usage != null && (u = d.usage);
            const g = d.choices[0];
            (g == null ? void 0 : g.finish_reason) != null && (s = {
              unified: Fs(g.finish_reason),
              raw: g.finish_reason
            }), (g == null ? void 0 : g.logprobs) != null && (i.openai.logprobs = g.logprobs), (g == null ? void 0 : g.text) != null && g.text.length > 0 && f.enqueue({
              type: "text-delta",
              id: "0",
              delta: g.text
            });
          },
          flush(m) {
            c || m.enqueue({ type: "text-end", id: "0" }), m.enqueue({
              type: "finish",
              finishReason: s,
              providerMetadata: i,
              usage: Zs(u)
            });
          }
        })
      ),
      request: { body: n },
      response: { headers: r }
    };
  }
}, rb = G(
  () => J(
    p({
      /**
      The number of dimensions the resulting output embeddings should have.
      Only supported in text-embedding-3 and later models.
         */
      dimensions: x().optional(),
      /**
      A unique identifier representing your end-user, which can help OpenAI to
      monitor and detect abuse. Learn more.
      */
      user: l().optional()
    })
  )
), ab = G(
  () => J(
    p({
      data: M(p({ embedding: M(x()) })),
      usage: p({ prompt_tokens: x() }).nullish()
    })
  )
), sb = class {
  constructor(e, t) {
    this.specificationVersion = "v3", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0, this.modelId = e, this.config = t;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: o,
    providerOptions: n
  }) {
    var r;
    if (e.length > this.maxEmbeddingsPerCall)
      throw new jr({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const a = (r = await at({
      provider: "openai",
      providerOptions: n,
      schema: rb
    })) != null ? r : {}, {
      responseHeaders: s,
      value: i,
      rawValue: u
    } = await Ze({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: a.dimensions,
        user: a.user
      },
      failedResponseHandler: Rt,
      successfulResponseHandler: Qe(
        ab
      ),
      abortSignal: o,
      fetch: this.config.fetch
    });
    return {
      warnings: [],
      embeddings: i.data.map((c) => c.embedding),
      usage: i.usage ? { tokens: i.usage.prompt_tokens } : void 0,
      response: { headers: s, body: u }
    };
  }
}, Js = G(
  () => J(
    p({
      created: x().nullish(),
      data: M(
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
        input_tokens: x().nullish(),
        output_tokens: x().nullish(),
        total_tokens: x().nullish(),
        input_tokens_details: p({
          image_tokens: x().nullish(),
          text_tokens: x().nullish()
        }).nullish()
      }).nullish()
    })
  )
), ib = {
  "dall-e-3": 1,
  "dall-e-2": 10,
  "gpt-image-1": 10,
  "gpt-image-1-mini": 10,
  "gpt-image-1.5": 10
}, lb = /* @__PURE__ */ new Set([
  "gpt-image-1",
  "gpt-image-1-mini",
  "gpt-image-1.5"
]), ub = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3";
  }
  get maxImagesPerCall() {
    var e;
    return (e = ib[this.modelId]) != null ? e : 1;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    files: t,
    mask: o,
    n,
    size: r,
    aspectRatio: a,
    seed: s,
    providerOptions: i,
    headers: u,
    abortSignal: c
  }) {
    var m, f, d, g, _, v, y, S, C, w, E;
    const k = [];
    a != null && k.push({
      type: "unsupported",
      feature: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), s != null && k.push({ type: "unsupported", feature: "seed" });
    const T = (d = (f = (m = this.config._internal) == null ? void 0 : m.currentDate) == null ? void 0 : f.call(m)) != null ? d : /* @__PURE__ */ new Date();
    if (t != null) {
      const { value: P, responseHeaders: q } = await ku({
        url: this.config.url({
          path: "/images/edits",
          modelId: this.modelId
        }),
        headers: Ue(this.config.headers(), u),
        formData: Xg({
          model: this.modelId,
          prompt: e,
          image: await Promise.all(
            t.map(
              (N) => N.type === "file" ? new Blob(
                [
                  N.data instanceof Uint8Array ? new Blob([N.data], {
                    type: N.mediaType
                  }) : new Blob([Wt(N.data)], {
                    type: N.mediaType
                  })
                ],
                { type: N.mediaType }
              ) : _u(N.url)
            )
          ),
          mask: o != null ? await cb(o) : void 0,
          n,
          size: r,
          ...(g = i.openai) != null ? g : {}
        }),
        failedResponseHandler: Rt,
        successfulResponseHandler: Qe(
          Js
        ),
        abortSignal: c,
        fetch: this.config.fetch
      });
      return {
        images: P.data.map((N) => N.b64_json),
        warnings: k,
        usage: P.usage != null ? {
          inputTokens: (_ = P.usage.input_tokens) != null ? _ : void 0,
          outputTokens: (v = P.usage.output_tokens) != null ? v : void 0,
          totalTokens: (y = P.usage.total_tokens) != null ? y : void 0
        } : void 0,
        response: {
          timestamp: T,
          modelId: this.modelId,
          headers: q
        },
        providerMetadata: {
          openai: {
            images: P.data.map((N) => {
              var j, A, D, U, ne;
              return {
                ...N.revised_prompt ? { revisedPrompt: N.revised_prompt } : {},
                created: (j = P.created) != null ? j : void 0,
                size: (A = P.size) != null ? A : void 0,
                quality: (D = P.quality) != null ? D : void 0,
                background: (U = P.background) != null ? U : void 0,
                outputFormat: (ne = P.output_format) != null ? ne : void 0
              };
            })
          }
        }
      };
    }
    const { value: I, responseHeaders: L } = await Ze({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), u),
      body: {
        model: this.modelId,
        prompt: e,
        n,
        size: r,
        ...(S = i.openai) != null ? S : {},
        ...lb.has(this.modelId) ? {} : { response_format: "b64_json" }
      },
      failedResponseHandler: Rt,
      successfulResponseHandler: Qe(
        Js
      ),
      abortSignal: c,
      fetch: this.config.fetch
    });
    return {
      images: I.data.map((P) => P.b64_json),
      warnings: k,
      usage: I.usage != null ? {
        inputTokens: (C = I.usage.input_tokens) != null ? C : void 0,
        outputTokens: (w = I.usage.output_tokens) != null ? w : void 0,
        totalTokens: (E = I.usage.total_tokens) != null ? E : void 0
      } : void 0,
      response: {
        timestamp: T,
        modelId: this.modelId,
        headers: L
      },
      providerMetadata: {
        openai: {
          images: I.data.map((P) => {
            var q, N, j, A, D;
            return {
              ...P.revised_prompt ? { revisedPrompt: P.revised_prompt } : {},
              created: (q = I.created) != null ? q : void 0,
              size: (N = I.size) != null ? N : void 0,
              quality: (j = I.quality) != null ? j : void 0,
              background: (A = I.background) != null ? A : void 0,
              outputFormat: (D = I.output_format) != null ? D : void 0
            };
          })
        }
      }
    };
  }
};
async function cb(e) {
  if (!e) return;
  if (e.type === "url")
    return _u(e.url);
  const t = e.data instanceof Uint8Array ? e.data : Wt(e.data);
  return new Blob([t], { type: e.mediaType });
}
var pb = G(
  () => J(
    p({
      callId: l(),
      operation: xe("type", [
        p({
          type: h("create_file"),
          path: l(),
          diff: l()
        }),
        p({
          type: h("delete_file"),
          path: l()
        }),
        p({
          type: h("update_file"),
          path: l(),
          diff: l()
        })
      ])
    })
  )
), zu = G(
  () => J(
    p({
      status: le(["completed", "failed"]),
      output: l().optional()
    })
  )
), db = ut({
  id: "openai.apply_patch",
  inputSchema: pb,
  outputSchema: zu
}), mb = db, fb = G(
  () => J(
    p({
      code: l().nullish(),
      containerId: l()
    })
  )
), hb = G(
  () => J(
    p({
      outputs: M(
        xe("type", [
          p({ type: h("logs"), logs: l() }),
          p({ type: h("image"), url: l() })
        ])
      ).nullish()
    })
  )
), gb = G(
  () => J(
    p({
      container: te([
        l(),
        p({
          fileIds: M(l()).optional()
        })
      ]).optional()
    })
  )
), vb = ut({
  id: "openai.code_interpreter",
  inputSchema: fb,
  outputSchema: hb
}), _b = (e = {}) => vb(e), Uu = p({
  key: l(),
  type: le(["eq", "ne", "gt", "gte", "lt", "lte", "in", "nin"]),
  value: te([l(), x(), K(), M(l())])
}), Zu = p({
  type: le(["and", "or"]),
  filters: M(
    te([Uu, Gr(() => Zu)])
  )
}), yb = G(
  () => J(
    p({
      vectorStoreIds: M(l()),
      maxNumResults: x().optional(),
      ranking: p({
        ranker: l().optional(),
        scoreThreshold: x().optional()
      }).optional(),
      filters: te([Uu, Zu]).optional()
    })
  )
), bb = G(
  () => J(
    p({
      queries: M(l()),
      results: M(
        p({
          attributes: Me(l(), ve()),
          fileId: l(),
          filename: l(),
          score: x(),
          text: l()
        })
      ).nullable()
    })
  )
), wb = ut({
  id: "openai.file_search",
  inputSchema: p({}),
  outputSchema: bb
}), xb = G(
  () => J(
    p({
      background: le(["auto", "opaque", "transparent"]).optional(),
      inputFidelity: le(["low", "high"]).optional(),
      inputImageMask: p({
        fileId: l().optional(),
        imageUrl: l().optional()
      }).optional(),
      model: l().optional(),
      moderation: le(["auto"]).optional(),
      outputCompression: x().int().min(0).max(100).optional(),
      outputFormat: le(["png", "jpeg", "webp"]).optional(),
      partialImages: x().int().min(0).max(3).optional(),
      quality: le(["auto", "low", "medium", "high"]).optional(),
      size: le(["1024x1024", "1024x1536", "1536x1024", "auto"]).optional()
    }).strict()
  )
), Ib = G(() => J(p({}))), Tb = G(
  () => J(p({ result: l() }))
), kb = ut({
  id: "openai.image_generation",
  inputSchema: Ib,
  outputSchema: Tb
}), Sb = (e = {}) => kb(e), Lu = G(
  () => J(
    p({
      action: p({
        type: h("exec"),
        command: M(l()),
        timeoutMs: x().optional(),
        user: l().optional(),
        workingDirectory: l().optional(),
        env: Me(l(), l()).optional()
      })
    })
  )
), Fu = G(
  () => J(p({ output: l() }))
), Cb = ut({
  id: "openai.local_shell",
  inputSchema: Lu,
  outputSchema: Fu
}), Vu = G(
  () => J(
    p({
      action: p({
        commands: M(l()),
        timeoutMs: x().optional(),
        maxOutputLength: x().optional()
      })
    })
  )
), Ju = G(
  () => J(
    p({
      output: M(
        p({
          stdout: l(),
          stderr: l(),
          outcome: xe("type", [
            p({ type: h("timeout") }),
            p({ type: h("exit"), exitCode: x() })
          ])
        })
      )
    })
  )
), Eb = ut({
  id: "openai.shell",
  inputSchema: Vu,
  outputSchema: Ju
}), Rb = G(
  () => J(
    p({
      externalWebAccess: K().optional(),
      filters: p({ allowedDomains: M(l()).optional() }).optional(),
      searchContextSize: le(["low", "medium", "high"]).optional(),
      userLocation: p({
        type: h("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Mb = G(() => J(p({}))), Nb = G(
  () => J(
    p({
      action: xe("type", [
        p({
          type: h("search"),
          query: l().optional()
        }),
        p({
          type: h("openPage"),
          url: l().nullish()
        }),
        p({
          type: h("findInPage"),
          url: l().nullish(),
          pattern: l().nullish()
        })
      ]),
      sources: M(
        xe("type", [
          p({ type: h("url"), url: l() }),
          p({ type: h("api"), name: l() })
        ])
      ).optional()
    })
  )
), Ob = ut({
  id: "openai.web_search",
  inputSchema: Mb,
  outputSchema: Nb
}), Ab = (e = {}) => Ob(e), $b = G(
  () => J(
    p({
      searchContextSize: le(["low", "medium", "high"]).optional(),
      userLocation: p({
        type: h("approximate"),
        country: l().optional(),
        city: l().optional(),
        region: l().optional(),
        timezone: l().optional()
      }).optional()
    })
  )
), Pb = G(
  () => J(p({}))
), qb = G(
  () => J(
    p({
      action: xe("type", [
        p({
          type: h("search"),
          query: l().optional()
        }),
        p({
          type: h("openPage"),
          url: l().nullish()
        }),
        p({
          type: h("findInPage"),
          url: l().nullish(),
          pattern: l().nullish()
        })
      ])
    })
  )
), jb = ut({
  id: "openai.web_search_preview",
  inputSchema: Pb,
  outputSchema: qb
}), Rr = Gr(
  () => te([
    l(),
    x(),
    K(),
    cu(),
    M(Rr),
    Me(l(), Rr)
  ])
), Db = G(
  () => J(
    p({
      serverLabel: l(),
      allowedTools: te([
        M(l()),
        p({
          readOnly: K().optional(),
          toolNames: M(l()).optional()
        })
      ]).optional(),
      authorization: l().optional(),
      connectorId: l().optional(),
      headers: Me(l(), l()).optional(),
      requireApproval: te([
        le(["always", "never"]),
        p({
          never: p({
            toolNames: M(l()).optional()
          }).optional()
        })
      ]).optional(),
      serverDescription: l().optional(),
      serverUrl: l().optional()
    }).refine(
      (e) => e.serverUrl != null || e.connectorId != null,
      "One of serverUrl or connectorId must be provided."
    )
  )
), zb = G(() => J(p({}))), Ub = G(
  () => J(
    p({
      type: h("call"),
      serverLabel: l(),
      name: l(),
      arguments: l(),
      output: l().nullish(),
      error: te([l(), Rr]).optional()
    })
  )
), Zb = ut({
  id: "openai.mcp",
  inputSchema: zb,
  outputSchema: Ub
}), Lb = (e) => Zb(e), Fb = {
  /**
   * The apply_patch tool lets GPT-5.1 create, update, and delete files in your
   * codebase using structured diffs. Instead of just suggesting edits, the model
   * emits patch operations that your application applies and then reports back on,
   * enabling iterative, multi-step code editing workflows.
   *
   */
  applyPatch: mb,
  /**
   * The Code Interpreter tool allows models to write and run Python code in a
   * sandboxed environment to solve complex problems in domains like data analysis,
   * coding, and math.
   *
   * @param container - The container to use for the code interpreter.
   */
  codeInterpreter: _b,
  /**
   * File search is a tool available in the Responses API. It enables models to
   * retrieve information in a knowledge base of previously uploaded files through
   * semantic and keyword search.
   *
   * @param vectorStoreIds - The vector store IDs to use for the file search.
   * @param maxNumResults - The maximum number of results to return.
   * @param ranking - The ranking options to use for the file search.
   * @param filters - The filters to use for the file search.
   */
  fileSearch: wb,
  /**
   * The image generation tool allows you to generate images using a text prompt,
   * and optionally image inputs. It leverages the GPT Image model,
   * and automatically optimizes text inputs for improved performance.
   *
   * @param background - Background type for the generated image. One of 'auto', 'opaque', or 'transparent'.
   * @param inputFidelity - Input fidelity for the generated image. One of 'low' or 'high'.
   * @param inputImageMask - Optional mask for inpainting. Contains fileId and/or imageUrl.
   * @param model - The image generation model to use. Default: gpt-image-1.
   * @param moderation - Moderation level for the generated image. Default: 'auto'.
   * @param outputCompression - Compression level for the output image (0-100).
   * @param outputFormat - The output format of the generated image. One of 'png', 'jpeg', or 'webp'.
   * @param partialImages - Number of partial images to generate in streaming mode (0-3).
   * @param quality - The quality of the generated image. One of 'auto', 'low', 'medium', or 'high'.
   * @param size - The size of the generated image. One of 'auto', '1024x1024', '1024x1536', or '1536x1024'.
   */
  imageGeneration: Sb,
  /**
   * Local shell is a tool that allows agents to run shell commands locally
   * on a machine you or the user provides.
   *
   * Supported models: `gpt-5-codex` and `codex-mini-latest`
   */
  localShell: Cb,
  /**
   * The shell tool allows the model to interact with your local computer through
   * a controlled command-line interface. The model proposes shell commands; your
   * integration executes them and returns the outputs.
   *
   * Available through the Responses API for use with GPT-5.1.
   *
   * WARNING: Running arbitrary shell commands can be dangerous. Always sandbox
   * execution or add strict allow-/deny-lists before forwarding a command to
   * the system shell.
   */
  shell: Eb,
  /**
   * Web search allows models to access up-to-date information from the internet
   * and provide answers with sourced citations.
   *
   * @param searchContextSize - The search context size to use for the web search.
   * @param userLocation - The user location to use for the web search.
   */
  webSearchPreview: jb,
  /**
   * Web search allows models to access up-to-date information from the internet
   * and provide answers with sourced citations.
   *
   * @param filters - The filters to use for the web search.
   * @param searchContextSize - The search context size to use for the web search.
   * @param userLocation - The user location to use for the web search.
   */
  webSearch: Ab,
  /**
   * MCP (Model Context Protocol) allows models to call tools exposed by
   * remote MCP servers or service connectors.
   *
   * @param serverLabel - Label to identify the MCP server.
   * @param allowedTools - Allowed tool names or filter object.
   * @param authorization - OAuth access token for the MCP server/connector.
   * @param connectorId - Identifier for a service connector.
   * @param headers - Optional headers to include in MCP requests.
   * // param requireApproval - Approval policy ('always'|'never'|filter object). (Removed - always 'never')
   * @param serverDescription - Optional description of the server.
   * @param serverUrl - URL for the MCP server.
   */
  mcp: Lb
};
function Gs(e) {
  var t, o, n, r;
  if (e == null)
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  const a = e.input_tokens, s = e.output_tokens, i = (o = (t = e.input_tokens_details) == null ? void 0 : t.cached_tokens) != null ? o : 0, u = (r = (n = e.output_tokens_details) == null ? void 0 : n.reasoning_tokens) != null ? r : 0;
  return {
    inputTokens: {
      total: a,
      noCache: a - i,
      cacheRead: i,
      cacheWrite: void 0
    },
    outputTokens: {
      total: s,
      text: s - u,
      reasoning: u
    },
    raw: e
  };
}
function Bs(e, t) {
  return t ? t.some((o) => e.startsWith(o)) : !1;
}
async function Vb({
  prompt: e,
  toolNameMapping: t,
  systemMessageMode: o,
  fileIdPrefixes: n,
  store: r,
  hasLocalShellTool: a = !1,
  hasShellTool: s = !1,
  hasApplyPatchTool: i = !1
}) {
  var u, c, m, f, d, g, _, v, y, S, C, w, E;
  const k = [], T = [], I = /* @__PURE__ */ new Set();
  for (const { role: L, content: P } of e)
    switch (L) {
      case "system": {
        switch (o) {
          case "system": {
            k.push({ role: "system", content: P });
            break;
          }
          case "developer": {
            k.push({ role: "developer", content: P });
            break;
          }
          case "remove": {
            T.push({
              type: "other",
              message: "system messages are removed for this model"
            });
            break;
          }
          default: {
            const q = o;
            throw new Error(
              `Unsupported system message mode: ${q}`
            );
          }
        }
        break;
      }
      case "user": {
        k.push({
          role: "user",
          content: P.map((q, N) => {
            var j, A, D;
            switch (q.type) {
              case "text":
                return { type: "input_text", text: q.text };
              case "file":
                if (q.mediaType.startsWith("image/")) {
                  const U = q.mediaType === "image/*" ? "image/jpeg" : q.mediaType;
                  return {
                    type: "input_image",
                    ...q.data instanceof URL ? { image_url: q.data.toString() } : typeof q.data == "string" && Bs(q.data, n) ? { file_id: q.data } : {
                      image_url: `data:${U};base64,${Et(q.data)}`
                    },
                    detail: (A = (j = q.providerOptions) == null ? void 0 : j.openai) == null ? void 0 : A.imageDetail
                  };
                } else {
                  if (q.mediaType === "application/pdf")
                    return q.data instanceof URL ? {
                      type: "input_file",
                      file_url: q.data.toString()
                    } : {
                      type: "input_file",
                      ...typeof q.data == "string" && Bs(q.data, n) ? { file_id: q.data } : {
                        filename: (D = q.filename) != null ? D : `part-${N}.pdf`,
                        file_data: `data:application/pdf;base64,${Et(q.data)}`
                      }
                    };
                  throw new Ge({
                    functionality: `file part media type ${q.mediaType}`
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        const q = {};
        for (const N of P)
          switch (N.type) {
            case "text": {
              const j = (c = (u = N.providerOptions) == null ? void 0 : u.openai) == null ? void 0 : c.itemId;
              if (r && j != null) {
                k.push({ type: "item_reference", id: j });
                break;
              }
              k.push({
                role: "assistant",
                content: [{ type: "output_text", text: N.text }],
                id: j
              });
              break;
            }
            case "tool-call": {
              const j = (_ = (f = (m = N.providerOptions) == null ? void 0 : m.openai) == null ? void 0 : f.itemId) != null ? _ : (g = (d = N.providerMetadata) == null ? void 0 : d.openai) == null ? void 0 : g.itemId;
              if (N.providerExecuted) {
                r && j != null && k.push({ type: "item_reference", id: j });
                break;
              }
              if (r && j != null) {
                k.push({ type: "item_reference", id: j });
                break;
              }
              const A = t.toProviderToolName(
                N.toolName
              );
              if (a && A === "local_shell") {
                const D = await Oe({
                  value: N.input,
                  schema: Lu
                });
                k.push({
                  type: "local_shell_call",
                  call_id: N.toolCallId,
                  id: j,
                  action: {
                    type: "exec",
                    command: D.action.command,
                    timeout_ms: D.action.timeoutMs,
                    user: D.action.user,
                    working_directory: D.action.workingDirectory,
                    env: D.action.env
                  }
                });
                break;
              }
              if (s && A === "shell") {
                const D = await Oe({
                  value: N.input,
                  schema: Vu
                });
                k.push({
                  type: "shell_call",
                  call_id: N.toolCallId,
                  id: j,
                  status: "completed",
                  action: {
                    commands: D.action.commands,
                    timeout_ms: D.action.timeoutMs,
                    max_output_length: D.action.maxOutputLength
                  }
                });
                break;
              }
              k.push({
                type: "function_call",
                call_id: N.toolCallId,
                name: A,
                arguments: JSON.stringify(N.input),
                id: j
              });
              break;
            }
            // assistant tool result parts are from provider-executed tools:
            case "tool-result": {
              if (N.output.type === "execution-denied" || N.output.type === "json" && typeof N.output.value == "object" && N.output.value != null && "type" in N.output.value && N.output.value.type === "execution-denied")
                break;
              if (r) {
                const j = (S = (y = (v = N.providerMetadata) == null ? void 0 : v.openai) == null ? void 0 : y.itemId) != null ? S : N.toolCallId;
                k.push({ type: "item_reference", id: j });
              } else
                T.push({
                  type: "other",
                  message: `Results for OpenAI tool ${N.toolName} are not sent to the API when store is false`
                });
              break;
            }
            case "reasoning": {
              const j = await at({
                provider: "openai",
                providerOptions: N.providerOptions,
                schema: Jb
              }), A = j == null ? void 0 : j.itemId;
              if (A != null) {
                const D = q[A];
                if (r)
                  D === void 0 && (k.push({ type: "item_reference", id: A }), q[A] = {
                    type: "reasoning",
                    id: A,
                    summary: []
                  });
                else {
                  const U = [];
                  N.text.length > 0 ? U.push({
                    type: "summary_text",
                    text: N.text
                  }) : D !== void 0 && T.push({
                    type: "other",
                    message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(N)}.`
                  }), D === void 0 ? (q[A] = {
                    type: "reasoning",
                    id: A,
                    encrypted_content: j == null ? void 0 : j.reasoningEncryptedContent,
                    summary: U
                  }, k.push(q[A])) : (D.summary.push(...U), (j == null ? void 0 : j.reasoningEncryptedContent) != null && (D.encrypted_content = j.reasoningEncryptedContent));
                }
              } else
                T.push({
                  type: "other",
                  message: `Non-OpenAI reasoning parts are not supported. Skipping reasoning part: ${JSON.stringify(N)}.`
                });
              break;
            }
          }
        break;
      }
      case "tool": {
        for (const q of P) {
          if (q.type === "tool-approval-response") {
            const D = q;
            if (I.has(D.approvalId))
              continue;
            I.add(D.approvalId), r && k.push({
              type: "item_reference",
              id: D.approvalId
            }), k.push({
              type: "mcp_approval_response",
              approval_request_id: D.approvalId,
              approve: D.approved
            });
            continue;
          }
          const N = q.output;
          if (N.type === "execution-denied" && ((w = (C = N.providerOptions) == null ? void 0 : C.openai) == null ? void 0 : w.approvalId))
            continue;
          const j = t.toProviderToolName(
            q.toolName
          );
          if (a && j === "local_shell" && N.type === "json") {
            const D = await Oe({
              value: N.value,
              schema: Fu
            });
            k.push({
              type: "local_shell_call_output",
              call_id: q.toolCallId,
              output: D.output
            });
            continue;
          }
          if (s && j === "shell" && N.type === "json") {
            const D = await Oe({
              value: N.value,
              schema: Ju
            });
            k.push({
              type: "shell_call_output",
              call_id: q.toolCallId,
              output: D.output.map((U) => ({
                stdout: U.stdout,
                stderr: U.stderr,
                outcome: U.outcome.type === "timeout" ? { type: "timeout" } : {
                  type: "exit",
                  exit_code: U.outcome.exitCode
                }
              }))
            });
            continue;
          }
          if (i && q.toolName === "apply_patch" && N.type === "json") {
            const D = await Oe({
              value: N.value,
              schema: zu
            });
            k.push({
              type: "apply_patch_call_output",
              call_id: q.toolCallId,
              status: D.status,
              output: D.output
            });
            continue;
          }
          let A;
          switch (N.type) {
            case "text":
            case "error-text":
              A = N.value;
              break;
            case "execution-denied":
              A = (E = N.reason) != null ? E : "Tool execution denied.";
              break;
            case "json":
            case "error-json":
              A = JSON.stringify(N.value);
              break;
            case "content":
              A = N.value.map((D) => {
                var U;
                switch (D.type) {
                  case "text":
                    return { type: "input_text", text: D.text };
                  case "image-data":
                    return {
                      type: "input_image",
                      image_url: `data:${D.mediaType};base64,${D.data}`
                    };
                  case "file-data":
                    return {
                      type: "input_file",
                      filename: (U = D.filename) != null ? U : "data",
                      file_data: `data:${D.mediaType};base64,${D.data}`
                    };
                  default: {
                    T.push({
                      type: "other",
                      message: `unsupported tool content part type: ${D.type}`
                    });
                    return;
                  }
                }
              }).filter(Wr);
              break;
          }
          k.push({
            type: "function_call_output",
            call_id: q.toolCallId,
            output: A
          });
        }
        break;
      }
      default: {
        const q = L;
        throw new Error(`Unsupported role: ${q}`);
      }
    }
  return { input: k, warnings: T };
}
var Jb = p({
  itemId: l().nullish(),
  reasoningEncryptedContent: l().nullish()
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
      return t ? "tool-calls" : "other";
  }
}
var Gb = G(
  () => J(
    te([
      p({
        type: h("response.output_text.delta"),
        item_id: l(),
        delta: l(),
        logprobs: M(
          p({
            token: l(),
            logprob: x(),
            top_logprobs: M(
              p({
                token: l(),
                logprob: x()
              })
            )
          })
        ).nullish()
      }),
      p({
        type: le(["response.completed", "response.incomplete"]),
        response: p({
          incomplete_details: p({ reason: l() }).nullish(),
          usage: p({
            input_tokens: x(),
            input_tokens_details: p({ cached_tokens: x().nullish() }).nullish(),
            output_tokens: x(),
            output_tokens_details: p({ reasoning_tokens: x().nullish() }).nullish()
          }),
          service_tier: l().nullish()
        })
      }),
      p({
        type: h("response.created"),
        response: p({
          id: l(),
          created_at: x(),
          model: l(),
          service_tier: l().nullish()
        })
      }),
      p({
        type: h("response.output_item.added"),
        output_index: x(),
        item: xe("type", [
          p({
            type: h("message"),
            id: l()
          }),
          p({
            type: h("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          p({
            type: h("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l()
          }),
          p({
            type: h("web_search_call"),
            id: l(),
            status: l()
          }),
          p({
            type: h("computer_call"),
            id: l(),
            status: l()
          }),
          p({
            type: h("file_search_call"),
            id: l()
          }),
          p({
            type: h("image_generation_call"),
            id: l()
          }),
          p({
            type: h("code_interpreter_call"),
            id: l(),
            container_id: l(),
            code: l().nullable(),
            outputs: M(
              xe("type", [
                p({ type: h("logs"), logs: l() }),
                p({ type: h("image"), url: l() })
              ])
            ).nullable(),
            status: l()
          }),
          p({
            type: h("mcp_call"),
            id: l(),
            status: l(),
            approval_request_id: l().nullish()
          }),
          p({
            type: h("mcp_list_tools"),
            id: l()
          }),
          p({
            type: h("mcp_approval_request"),
            id: l()
          }),
          p({
            type: h("apply_patch_call"),
            id: l(),
            call_id: l(),
            status: le(["in_progress", "completed"]),
            operation: xe("type", [
              p({
                type: h("create_file"),
                path: l(),
                diff: l()
              }),
              p({
                type: h("delete_file"),
                path: l()
              }),
              p({
                type: h("update_file"),
                path: l(),
                diff: l()
              })
            ])
          }),
          p({
            type: h("shell_call"),
            id: l(),
            call_id: l(),
            status: le(["in_progress", "completed", "incomplete"]),
            action: p({
              commands: M(l())
            })
          })
        ])
      }),
      p({
        type: h("response.output_item.done"),
        output_index: x(),
        item: xe("type", [
          p({
            type: h("message"),
            id: l()
          }),
          p({
            type: h("reasoning"),
            id: l(),
            encrypted_content: l().nullish()
          }),
          p({
            type: h("function_call"),
            id: l(),
            call_id: l(),
            name: l(),
            arguments: l(),
            status: h("completed")
          }),
          p({
            type: h("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: M(
              xe("type", [
                p({ type: h("logs"), logs: l() }),
                p({ type: h("image"), url: l() })
              ])
            ).nullable()
          }),
          p({
            type: h("image_generation_call"),
            id: l(),
            result: l()
          }),
          p({
            type: h("web_search_call"),
            id: l(),
            status: l(),
            action: xe("type", [
              p({
                type: h("search"),
                query: l().nullish(),
                sources: M(
                  xe("type", [
                    p({ type: h("url"), url: l() }),
                    p({ type: h("api"), name: l() })
                  ])
                ).nullish()
              }),
              p({
                type: h("open_page"),
                url: l().nullish()
              }),
              p({
                type: h("find_in_page"),
                url: l().nullish(),
                pattern: l().nullish()
              })
            ])
          }),
          p({
            type: h("file_search_call"),
            id: l(),
            queries: M(l()),
            results: M(
              p({
                attributes: Me(
                  l(),
                  te([l(), x(), K()])
                ),
                file_id: l(),
                filename: l(),
                score: x(),
                text: l()
              })
            ).nullish()
          }),
          p({
            type: h("local_shell_call"),
            id: l(),
            call_id: l(),
            action: p({
              type: h("exec"),
              command: M(l()),
              timeout_ms: x().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: Me(l(), l()).optional()
            })
          }),
          p({
            type: h("computer_call"),
            id: l(),
            status: h("completed")
          }),
          p({
            type: h("mcp_call"),
            id: l(),
            status: l(),
            arguments: l(),
            name: l(),
            server_label: l(),
            output: l().nullish(),
            error: te([
              l(),
              p({
                type: l().optional(),
                code: te([x(), l()]).optional(),
                message: l().optional()
              }).loose()
            ]).nullish(),
            approval_request_id: l().nullish()
          }),
          p({
            type: h("mcp_list_tools"),
            id: l(),
            server_label: l(),
            tools: M(
              p({
                name: l(),
                description: l().optional(),
                input_schema: vt(),
                annotations: Me(l(), ve()).optional()
              })
            ),
            error: te([
              l(),
              p({
                type: l().optional(),
                code: te([x(), l()]).optional(),
                message: l().optional()
              }).loose()
            ]).optional()
          }),
          p({
            type: h("mcp_approval_request"),
            id: l(),
            server_label: l(),
            name: l(),
            arguments: l(),
            approval_request_id: l().optional()
          }),
          p({
            type: h("apply_patch_call"),
            id: l(),
            call_id: l(),
            status: le(["in_progress", "completed"]),
            operation: xe("type", [
              p({
                type: h("create_file"),
                path: l(),
                diff: l()
              }),
              p({
                type: h("delete_file"),
                path: l()
              }),
              p({
                type: h("update_file"),
                path: l(),
                diff: l()
              })
            ])
          }),
          p({
            type: h("shell_call"),
            id: l(),
            call_id: l(),
            status: le(["in_progress", "completed", "incomplete"]),
            action: p({
              commands: M(l())
            })
          })
        ])
      }),
      p({
        type: h("response.function_call_arguments.delta"),
        item_id: l(),
        output_index: x(),
        delta: l()
      }),
      p({
        type: h("response.image_generation_call.partial_image"),
        item_id: l(),
        output_index: x(),
        partial_image_b64: l()
      }),
      p({
        type: h("response.code_interpreter_call_code.delta"),
        item_id: l(),
        output_index: x(),
        delta: l()
      }),
      p({
        type: h("response.code_interpreter_call_code.done"),
        item_id: l(),
        output_index: x(),
        code: l()
      }),
      p({
        type: h("response.output_text.annotation.added"),
        annotation: xe("type", [
          p({
            type: h("url_citation"),
            start_index: x(),
            end_index: x(),
            url: l(),
            title: l()
          }),
          p({
            type: h("file_citation"),
            file_id: l(),
            filename: l().nullish(),
            index: x().nullish(),
            start_index: x().nullish(),
            end_index: x().nullish(),
            quote: l().nullish()
          }),
          p({
            type: h("container_file_citation"),
            container_id: l(),
            file_id: l(),
            filename: l().nullish(),
            start_index: x().nullish(),
            end_index: x().nullish(),
            index: x().nullish()
          }),
          p({
            type: h("file_path"),
            file_id: l(),
            index: x().nullish()
          })
        ])
      }),
      p({
        type: h("response.reasoning_summary_part.added"),
        item_id: l(),
        summary_index: x()
      }),
      p({
        type: h("response.reasoning_summary_text.delta"),
        item_id: l(),
        summary_index: x(),
        delta: l()
      }),
      p({
        type: h("response.reasoning_summary_part.done"),
        item_id: l(),
        summary_index: x()
      }),
      p({
        type: h("response.apply_patch_call_operation_diff.delta"),
        item_id: l(),
        output_index: x(),
        delta: l(),
        obfuscation: l().nullish()
      }),
      p({
        type: h("response.apply_patch_call_operation_diff.done"),
        item_id: l(),
        output_index: x(),
        diff: l()
      }),
      p({
        type: h("error"),
        sequence_number: x(),
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
), Bb = G(
  () => J(
    p({
      id: l().optional(),
      created_at: x().optional(),
      error: p({
        message: l(),
        type: l(),
        param: l().nullish(),
        code: l()
      }).nullish(),
      model: l().optional(),
      output: M(
        xe("type", [
          p({
            type: h("message"),
            role: h("assistant"),
            id: l(),
            content: M(
              p({
                type: h("output_text"),
                text: l(),
                logprobs: M(
                  p({
                    token: l(),
                    logprob: x(),
                    top_logprobs: M(
                      p({
                        token: l(),
                        logprob: x()
                      })
                    )
                  })
                ).nullish(),
                annotations: M(
                  xe("type", [
                    p({
                      type: h("url_citation"),
                      start_index: x(),
                      end_index: x(),
                      url: l(),
                      title: l()
                    }),
                    p({
                      type: h("file_citation"),
                      file_id: l(),
                      filename: l().nullish(),
                      index: x().nullish(),
                      start_index: x().nullish(),
                      end_index: x().nullish(),
                      quote: l().nullish()
                    }),
                    p({
                      type: h("container_file_citation"),
                      container_id: l(),
                      file_id: l(),
                      filename: l().nullish(),
                      start_index: x().nullish(),
                      end_index: x().nullish(),
                      index: x().nullish()
                    }),
                    p({
                      type: h("file_path"),
                      file_id: l(),
                      index: x().nullish()
                    })
                  ])
                )
              })
            )
          }),
          p({
            type: h("web_search_call"),
            id: l(),
            status: l(),
            action: xe("type", [
              p({
                type: h("search"),
                query: l().nullish(),
                sources: M(
                  xe("type", [
                    p({ type: h("url"), url: l() }),
                    p({ type: h("api"), name: l() })
                  ])
                ).nullish()
              }),
              p({
                type: h("open_page"),
                url: l().nullish()
              }),
              p({
                type: h("find_in_page"),
                url: l().nullish(),
                pattern: l().nullish()
              })
            ])
          }),
          p({
            type: h("file_search_call"),
            id: l(),
            queries: M(l()),
            results: M(
              p({
                attributes: Me(
                  l(),
                  te([l(), x(), K()])
                ),
                file_id: l(),
                filename: l(),
                score: x(),
                text: l()
              })
            ).nullish()
          }),
          p({
            type: h("code_interpreter_call"),
            id: l(),
            code: l().nullable(),
            container_id: l(),
            outputs: M(
              xe("type", [
                p({ type: h("logs"), logs: l() }),
                p({ type: h("image"), url: l() })
              ])
            ).nullable()
          }),
          p({
            type: h("image_generation_call"),
            id: l(),
            result: l()
          }),
          p({
            type: h("local_shell_call"),
            id: l(),
            call_id: l(),
            action: p({
              type: h("exec"),
              command: M(l()),
              timeout_ms: x().optional(),
              user: l().optional(),
              working_directory: l().optional(),
              env: Me(l(), l()).optional()
            })
          }),
          p({
            type: h("function_call"),
            call_id: l(),
            name: l(),
            arguments: l(),
            id: l()
          }),
          p({
            type: h("computer_call"),
            id: l(),
            status: l().optional()
          }),
          p({
            type: h("reasoning"),
            id: l(),
            encrypted_content: l().nullish(),
            summary: M(
              p({
                type: h("summary_text"),
                text: l()
              })
            )
          }),
          p({
            type: h("mcp_call"),
            id: l(),
            status: l(),
            arguments: l(),
            name: l(),
            server_label: l(),
            output: l().nullish(),
            error: te([
              l(),
              p({
                type: l().optional(),
                code: te([x(), l()]).optional(),
                message: l().optional()
              }).loose()
            ]).nullish(),
            approval_request_id: l().nullish()
          }),
          p({
            type: h("mcp_list_tools"),
            id: l(),
            server_label: l(),
            tools: M(
              p({
                name: l(),
                description: l().optional(),
                input_schema: vt(),
                annotations: Me(l(), ve()).optional()
              })
            ),
            error: te([
              l(),
              p({
                type: l().optional(),
                code: te([x(), l()]).optional(),
                message: l().optional()
              }).loose()
            ]).optional()
          }),
          p({
            type: h("mcp_approval_request"),
            id: l(),
            server_label: l(),
            name: l(),
            arguments: l(),
            approval_request_id: l().optional()
          }),
          p({
            type: h("apply_patch_call"),
            id: l(),
            call_id: l(),
            status: le(["in_progress", "completed"]),
            operation: xe("type", [
              p({
                type: h("create_file"),
                path: l(),
                diff: l()
              }),
              p({
                type: h("delete_file"),
                path: l()
              }),
              p({
                type: h("update_file"),
                path: l(),
                diff: l()
              })
            ])
          }),
          p({
            type: h("shell_call"),
            id: l(),
            call_id: l(),
            status: le(["in_progress", "completed", "incomplete"]),
            action: p({
              commands: M(l())
            })
          })
        ])
      ).optional(),
      service_tier: l().nullish(),
      incomplete_details: p({ reason: l() }).nullish(),
      usage: p({
        input_tokens: x(),
        input_tokens_details: p({ cached_tokens: x().nullish() }).nullish(),
        output_tokens: x(),
        output_tokens_details: p({ reasoning_tokens: x().nullish() }).nullish()
      }).optional()
    })
  )
), Gu = 20, Hb = G(
  () => J(
    p({
      /**
       * The ID of the OpenAI Conversation to continue.
       * You must create a conversation first via the OpenAI API.
       * Cannot be used in conjunction with `previousResponseId`.
       * Defaults to `undefined`.
       * @see https://platform.openai.com/docs/api-reference/conversations/create
       */
      conversation: l().nullish(),
      /**
       * The set of extra fields to include in the response (advanced, usually not needed).
       * Example values: 'reasoning.encrypted_content', 'file_search_call.results', 'message.output_text.logprobs'.
       */
      include: M(
        le([
          "reasoning.encrypted_content",
          // handled internally by default, only needed for unknown reasoning models
          "file_search_call.results",
          "message.output_text.logprobs"
        ])
      ).nullish(),
      /**
       * Instructions for the model.
       * They can be used to change the system or developer message when continuing a conversation using the `previousResponseId` option.
       * Defaults to `undefined`.
       */
      instructions: l().nullish(),
      /**
       * Return the log probabilities of the tokens. Including logprobs will increase
       * the response size and can slow down response times. However, it can
       * be useful to better understand how the model is behaving.
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
      logprobs: te([K(), x().min(1).max(Gu)]).optional(),
      /**
       * The maximum number of total calls to built-in tools that can be processed in a response.
       * This maximum number applies across all built-in tool calls, not per individual tool.
       * Any further attempts to call a tool by the model will be ignored.
       */
      maxToolCalls: x().nullish(),
      /**
       * Additional metadata to store with the generation.
       */
      metadata: vt().nullish(),
      /**
       * Whether to use parallel tool calls. Defaults to `true`.
       */
      parallelToolCalls: K().nullish(),
      /**
       * The ID of the previous response. You can use it to continue a conversation.
       * Defaults to `undefined`.
       */
      previousResponseId: l().nullish(),
      /**
       * Sets a cache key to tie this prompt to cached prefixes for better caching performance.
       */
      promptCacheKey: l().nullish(),
      /**
       * The retention policy for the prompt cache.
       * - 'in_memory': Default. Standard prompt caching behavior.
       * - '24h': Extended prompt caching that keeps cached prefixes active for up to 24 hours.
       *          Currently only available for 5.1 series models.
       *
       * @default 'in_memory'
       */
      promptCacheRetention: le(["in_memory", "24h"]).nullish(),
      /**
       * Reasoning effort for reasoning models. Defaults to `medium`. If you use
       * `providerOptions` to set the `reasoningEffort` option, this model setting will be ignored.
       * Valid values: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'
       *
       * The 'none' type for `reasoningEffort` is only available for OpenAI's GPT-5.1
       * models. Also, the 'xhigh' type for `reasoningEffort` is only available for
       * OpenAI's GPT-5.1-Codex-Max model. Setting `reasoningEffort` to 'none' or 'xhigh' with unsupported models will result in
       * an error.
       */
      reasoningEffort: l().nullish(),
      /**
       * Controls reasoning summary output from the model.
       * Set to "auto" to automatically receive the richest level available,
       * or "detailed" for comprehensive summaries.
       */
      reasoningSummary: l().nullish(),
      /**
       * The identifier for safety monitoring and tracking.
       */
      safetyIdentifier: l().nullish(),
      /**
       * Service tier for the request.
       * Set to 'flex' for 50% cheaper processing at the cost of increased latency (available for o3, o4-mini, and gpt-5 models).
       * Set to 'priority' for faster processing with Enterprise access (available for gpt-4, gpt-5, gpt-5-mini, o3, o4-mini; gpt-5-nano is not supported).
       *
       * Defaults to 'auto'.
       */
      serviceTier: le(["auto", "flex", "priority", "default"]).nullish(),
      /**
       * Whether to store the generation. Defaults to `true`.
       */
      store: K().nullish(),
      /**
       * Whether to use strict JSON schema validation.
       * Defaults to `true`.
       */
      strictJsonSchema: K().nullish(),
      /**
       * Controls the verbosity of the model's responses. Lower values ('low') will result
       * in more concise responses, while higher values ('high') will result in more verbose responses.
       * Valid values: 'low', 'medium', 'high'.
       */
      textVerbosity: le(["low", "medium", "high"]).nullish(),
      /**
       * Controls output truncation. 'auto' (default) performs truncation automatically;
       * 'disabled' turns truncation off.
       */
      truncation: le(["auto", "disabled"]).nullish(),
      /**
       * A unique identifier representing your end-user, which can help OpenAI to
       * monitor and detect abuse.
       * Defaults to `undefined`.
       * @see https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids
       */
      user: l().nullish(),
      /**
       * Override the system message mode for this model.
       * - 'system': Use the 'system' role for system messages (default for most models)
       * - 'developer': Use the 'developer' role for system messages (used by reasoning models)
       * - 'remove': Remove system messages entirely
       *
       * If not specified, the mode is automatically determined based on the model.
       */
      systemMessageMode: le(["system", "developer", "remove"]).optional(),
      /**
       * Force treating this model as a reasoning model.
       *
       * This is useful for "stealth" reasoning models (e.g. via a custom baseURL)
       * where the model ID is not recognized by the SDK's allowlist.
       *
       * When enabled, the SDK applies reasoning-model parameter compatibility rules
       * and defaults `systemMessageMode` to `developer` unless overridden.
       */
      forceReasoning: K().optional()
    })
  )
);
async function Wb({
  tools: e,
  toolChoice: t
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
          ...a.strict != null ? { strict: a.strict } : {}
        });
        break;
      case "provider": {
        switch (a.id) {
          case "openai.file_search": {
            const s = await Oe({
              value: a.args,
              schema: yb
            });
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
          case "openai.shell": {
            n.push({
              type: "shell"
            });
            break;
          }
          case "openai.apply_patch": {
            n.push({
              type: "apply_patch"
            });
            break;
          }
          case "openai.web_search_preview": {
            const s = await Oe({
              value: a.args,
              schema: $b
            });
            n.push({
              type: "web_search_preview",
              search_context_size: s.searchContextSize,
              user_location: s.userLocation
            });
            break;
          }
          case "openai.web_search": {
            const s = await Oe({
              value: a.args,
              schema: Rb
            });
            n.push({
              type: "web_search",
              filters: s.filters != null ? { allowed_domains: s.filters.allowedDomains } : void 0,
              external_web_access: s.externalWebAccess,
              search_context_size: s.searchContextSize,
              user_location: s.userLocation
            });
            break;
          }
          case "openai.code_interpreter": {
            const s = await Oe({
              value: a.args,
              schema: gb
            });
            n.push({
              type: "code_interpreter",
              container: s.container == null ? { type: "auto", file_ids: void 0 } : typeof s.container == "string" ? s.container : { type: "auto", file_ids: s.container.fileIds }
            });
            break;
          }
          case "openai.image_generation": {
            const s = await Oe({
              value: a.args,
              schema: xb
            });
            n.push({
              type: "image_generation",
              background: s.background,
              input_fidelity: s.inputFidelity,
              input_image_mask: s.inputImageMask ? {
                file_id: s.inputImageMask.fileId,
                image_url: s.inputImageMask.imageUrl
              } : void 0,
              model: s.model,
              moderation: s.moderation,
              partial_images: s.partialImages,
              quality: s.quality,
              output_compression: s.outputCompression,
              output_format: s.outputFormat,
              size: s.size
            });
            break;
          }
          case "openai.mcp": {
            const s = await Oe({
              value: a.args,
              schema: Db
            }), i = (m) => ({
              tool_names: m.toolNames
            }), u = s.requireApproval, c = u == null ? void 0 : typeof u == "string" ? u : u.never != null ? { never: i(u.never) } : void 0;
            n.push({
              type: "mcp",
              server_label: s.serverLabel,
              allowed_tools: Array.isArray(s.allowedTools) ? s.allowedTools : s.allowedTools ? {
                read_only: s.allowedTools.readOnly,
                tool_names: s.allowedTools.toolNames
              } : void 0,
              authorization: s.authorization,
              connector_id: s.connectorId,
              headers: s.headers,
              require_approval: c ?? "never",
              server_description: s.serverDescription,
              server_url: s.serverUrl
            });
            break;
          }
        }
        break;
      }
      default:
        o.push({
          type: "unsupported",
          feature: `function tool ${a}`
        });
        break;
    }
  if (t == null)
    return { tools: n, toolChoice: void 0, toolWarnings: o };
  const r = t.type;
  switch (r) {
    case "auto":
    case "none":
    case "required":
      return { tools: n, toolChoice: r, toolWarnings: o };
    case "tool":
      return {
        tools: n,
        toolChoice: t.toolName === "code_interpreter" || t.toolName === "file_search" || t.toolName === "image_generation" || t.toolName === "web_search_preview" || t.toolName === "web_search" || t.toolName === "mcp" || t.toolName === "apply_patch" ? { type: t.toolName } : { type: "function", name: t.toolName },
        toolWarnings: o
      };
    default: {
      const a = r;
      throw new Ge({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
function Ws(e) {
  var t, o;
  const n = {};
  for (const r of e)
    if (r.role === "assistant")
      for (const a of r.content) {
        if (a.type !== "tool-call") continue;
        const s = (o = (t = a.providerOptions) == null ? void 0 : t.openai) == null ? void 0 : o.approvalRequestId;
        s != null && (n[s] = a.toolCallId);
      }
  return n;
}
var Kb = class {
  constructor(e, t) {
    this.specificationVersion = "v3", this.supportedUrls = {
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
    stopSequences: o,
    topP: n,
    topK: r,
    presencePenalty: a,
    frequencyPenalty: s,
    seed: i,
    prompt: u,
    providerOptions: c,
    tools: m,
    toolChoice: f,
    responseFormat: d
  }) {
    var g, _, v, y, S, C;
    const w = [], E = Du(this.modelId);
    r != null && w.push({ type: "unsupported", feature: "topK" }), i != null && w.push({ type: "unsupported", feature: "seed" }), a != null && w.push({ type: "unsupported", feature: "presencePenalty" }), s != null && w.push({ type: "unsupported", feature: "frequencyPenalty" }), o != null && w.push({ type: "unsupported", feature: "stopSequences" });
    const k = await at({
      provider: "openai",
      providerOptions: c,
      schema: Hb
    }), T = (g = k == null ? void 0 : k.forceReasoning) != null ? g : E.isReasoningModel;
    k != null && k.conversation && (k != null && k.previousResponseId) && w.push({
      type: "unsupported",
      feature: "conversation",
      details: "conversation and previousResponseId cannot be used together"
    });
    const I = hu({
      tools: m,
      providerToolNames: {
        "openai.code_interpreter": "code_interpreter",
        "openai.file_search": "file_search",
        "openai.image_generation": "image_generation",
        "openai.local_shell": "local_shell",
        "openai.shell": "shell",
        "openai.web_search": "web_search",
        "openai.web_search_preview": "web_search_preview",
        "openai.mcp": "mcp",
        "openai.apply_patch": "apply_patch"
      }
    }), { input: L, warnings: P } = await Vb({
      prompt: u,
      toolNameMapping: I,
      systemMessageMode: (_ = k == null ? void 0 : k.systemMessageMode) != null ? _ : T ? "developer" : E.systemMessageMode,
      fileIdPrefixes: this.config.fileIdPrefixes,
      store: (v = k == null ? void 0 : k.store) != null ? v : !0,
      hasLocalShellTool: A("openai.local_shell"),
      hasShellTool: A("openai.shell"),
      hasApplyPatchTool: A("openai.apply_patch")
    });
    w.push(...P);
    const q = (y = k == null ? void 0 : k.strictJsonSchema) != null ? y : !0;
    let N = k == null ? void 0 : k.include;
    function j(X) {
      N == null ? N = [X] : N.includes(X) || (N = [...N, X]);
    }
    function A(X) {
      return (m == null ? void 0 : m.find((z) => z.type === "provider" && z.id === X)) != null;
    }
    const D = typeof (k == null ? void 0 : k.logprobs) == "number" ? k == null ? void 0 : k.logprobs : (k == null ? void 0 : k.logprobs) === !0 ? Gu : void 0;
    D && j("message.output_text.logprobs");
    const U = (S = m == null ? void 0 : m.find(
      (X) => X.type === "provider" && (X.id === "openai.web_search" || X.id === "openai.web_search_preview")
    )) == null ? void 0 : S.name;
    U && j("web_search_call.action.sources"), A("openai.code_interpreter") && j("code_interpreter_call.outputs");
    const ne = k == null ? void 0 : k.store;
    ne === !1 && T && j("reasoning.encrypted_content");
    const V = {
      model: this.modelId,
      input: L,
      temperature: t,
      top_p: n,
      max_output_tokens: e,
      ...((d == null ? void 0 : d.type) === "json" || (k == null ? void 0 : k.textVerbosity)) && {
        text: {
          ...(d == null ? void 0 : d.type) === "json" && {
            format: d.schema != null ? {
              type: "json_schema",
              strict: q,
              name: (C = d.name) != null ? C : "response",
              description: d.description,
              schema: d.schema
            } : { type: "json_object" }
          },
          ...(k == null ? void 0 : k.textVerbosity) && {
            verbosity: k.textVerbosity
          }
        }
      },
      // provider options:
      conversation: k == null ? void 0 : k.conversation,
      max_tool_calls: k == null ? void 0 : k.maxToolCalls,
      metadata: k == null ? void 0 : k.metadata,
      parallel_tool_calls: k == null ? void 0 : k.parallelToolCalls,
      previous_response_id: k == null ? void 0 : k.previousResponseId,
      store: ne,
      user: k == null ? void 0 : k.user,
      instructions: k == null ? void 0 : k.instructions,
      service_tier: k == null ? void 0 : k.serviceTier,
      include: N,
      prompt_cache_key: k == null ? void 0 : k.promptCacheKey,
      prompt_cache_retention: k == null ? void 0 : k.promptCacheRetention,
      safety_identifier: k == null ? void 0 : k.safetyIdentifier,
      top_logprobs: D,
      truncation: k == null ? void 0 : k.truncation,
      // model-specific settings:
      ...T && ((k == null ? void 0 : k.reasoningEffort) != null || (k == null ? void 0 : k.reasoningSummary) != null) && {
        reasoning: {
          ...(k == null ? void 0 : k.reasoningEffort) != null && {
            effort: k.reasoningEffort
          },
          ...(k == null ? void 0 : k.reasoningSummary) != null && {
            summary: k.reasoningSummary
          }
        }
      }
    };
    T ? (k == null ? void 0 : k.reasoningEffort) === "none" && E.supportsNonReasoningParameters || (V.temperature != null && (V.temperature = void 0, w.push({
      type: "unsupported",
      feature: "temperature",
      details: "temperature is not supported for reasoning models"
    })), V.top_p != null && (V.top_p = void 0, w.push({
      type: "unsupported",
      feature: "topP",
      details: "topP is not supported for reasoning models"
    }))) : ((k == null ? void 0 : k.reasoningEffort) != null && w.push({
      type: "unsupported",
      feature: "reasoningEffort",
      details: "reasoningEffort is not supported for non-reasoning models"
    }), (k == null ? void 0 : k.reasoningSummary) != null && w.push({
      type: "unsupported",
      feature: "reasoningSummary",
      details: "reasoningSummary is not supported for non-reasoning models"
    })), (k == null ? void 0 : k.serviceTier) === "flex" && !E.supportsFlexProcessing && (w.push({
      type: "unsupported",
      feature: "serviceTier",
      details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
    }), delete V.service_tier), (k == null ? void 0 : k.serviceTier) === "priority" && !E.supportsPriorityProcessing && (w.push({
      type: "unsupported",
      feature: "serviceTier",
      details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
    }), delete V.service_tier);
    const {
      tools: B,
      toolChoice: ue,
      toolWarnings: W
    } = await Wb({
      tools: m,
      toolChoice: f
    });
    return {
      webSearchToolName: U,
      args: {
        ...V,
        tools: B,
        tool_choice: ue
      },
      warnings: [...w, ...W],
      store: ne,
      toolNameMapping: I
    };
  }
  async doGenerate(e) {
    var t, o, n, r, a, s, i, u, c, m, f, d, g, _, v, y, S, C, w, E, k, T, I, L, P, q, N, j, A, D, U;
    const {
      args: ne,
      warnings: V,
      webSearchToolName: B,
      toolNameMapping: ue
    } = await this.getArgs(e), W = this.config.url({
      path: "/responses",
      modelId: this.modelId
    }), X = this.config.provider.replace(".responses", ""), z = Ws(e.prompt), {
      responseHeaders: we,
      value: Q,
      rawValue: oe
    } = await Ze({
      url: W,
      headers: Ue(this.config.headers(), e.headers),
      body: ne,
      failedResponseHandler: Rt,
      successfulResponseHandler: Qe(
        Bb
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    if (Q.error)
      throw new Xe({
        message: Q.error.message,
        url: W,
        requestBodyValues: ne,
        statusCode: 400,
        responseHeaders: we,
        responseBody: oe,
        isRetryable: !1
      });
    const O = [], R = [];
    let ae = !1;
    for (const H of Q.output)
      switch (H.type) {
        case "reasoning": {
          H.summary.length === 0 && H.summary.push({ type: "summary_text", text: "" });
          for (const Ie of H.summary)
            O.push({
              type: "reasoning",
              text: Ie.text,
              providerMetadata: {
                [X]: {
                  itemId: H.id,
                  reasoningEncryptedContent: (t = H.encrypted_content) != null ? t : null
                }
              }
            });
          break;
        }
        case "image_generation_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("image_generation"),
            input: "{}",
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("image_generation"),
            result: {
              result: H.result
            }
          });
          break;
        }
        case "local_shell_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.call_id,
            toolName: ue.toCustomToolName("local_shell"),
            input: JSON.stringify({
              action: H.action
            }),
            providerMetadata: {
              [X]: {
                itemId: H.id
              }
            }
          });
          break;
        }
        case "shell_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.call_id,
            toolName: ue.toCustomToolName("shell"),
            input: JSON.stringify({
              action: {
                commands: H.action.commands
              }
            }),
            providerMetadata: {
              [X]: {
                itemId: H.id
              }
            }
          });
          break;
        }
        case "message": {
          for (const Ie of H.content) {
            (n = (o = e.providerOptions) == null ? void 0 : o.openai) != null && n.logprobs && Ie.logprobs && R.push(Ie.logprobs);
            const Se = {
              itemId: H.id,
              ...Ie.annotations.length > 0 && {
                annotations: Ie.annotations
              }
            };
            O.push({
              type: "text",
              text: Ie.text,
              providerMetadata: {
                [X]: Se
              }
            });
            for (const be of Ie.annotations)
              be.type === "url_citation" ? O.push({
                type: "source",
                sourceType: "url",
                id: (s = (a = (r = this.config).generateId) == null ? void 0 : a.call(r)) != null ? s : Je(),
                url: be.url,
                title: be.title
              }) : be.type === "file_citation" ? O.push({
                type: "source",
                sourceType: "document",
                id: (c = (u = (i = this.config).generateId) == null ? void 0 : u.call(i)) != null ? c : Je(),
                mediaType: "text/plain",
                title: (f = (m = be.quote) != null ? m : be.filename) != null ? f : "Document",
                filename: (d = be.filename) != null ? d : be.file_id,
                ...be.file_id ? {
                  providerMetadata: {
                    [X]: {
                      fileId: be.file_id
                    }
                  }
                } : {}
              }) : be.type === "container_file_citation" ? O.push({
                type: "source",
                sourceType: "document",
                id: (v = (_ = (g = this.config).generateId) == null ? void 0 : _.call(g)) != null ? v : Je(),
                mediaType: "text/plain",
                title: (S = (y = be.filename) != null ? y : be.file_id) != null ? S : "Document",
                filename: (C = be.filename) != null ? C : be.file_id,
                providerMetadata: {
                  [X]: {
                    fileId: be.file_id,
                    containerId: be.container_id,
                    ...be.index != null ? { index: be.index } : {}
                  }
                }
              }) : be.type === "file_path" && O.push({
                type: "source",
                sourceType: "document",
                id: (k = (E = (w = this.config).generateId) == null ? void 0 : E.call(w)) != null ? k : Je(),
                mediaType: "application/octet-stream",
                title: be.file_id,
                filename: be.file_id,
                providerMetadata: {
                  [X]: {
                    fileId: be.file_id,
                    ...be.index != null ? { index: be.index } : {}
                  }
                }
              });
          }
          break;
        }
        case "function_call": {
          ae = !0, O.push({
            type: "tool-call",
            toolCallId: H.call_id,
            toolName: H.name,
            input: H.arguments,
            providerMetadata: {
              [X]: {
                itemId: H.id
              }
            }
          });
          break;
        }
        case "web_search_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.id,
            toolName: ue.toCustomToolName(
              B ?? "web_search"
            ),
            input: JSON.stringify({}),
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: H.id,
            toolName: ue.toCustomToolName(
              B ?? "web_search"
            ),
            result: Ys(H.action)
          });
          break;
        }
        case "mcp_call": {
          const Ie = H.approval_request_id != null && (T = z[H.approval_request_id]) != null ? T : H.id, Se = `mcp.${H.name}`;
          O.push({
            type: "tool-call",
            toolCallId: Ie,
            toolName: Se,
            input: H.arguments,
            providerExecuted: !0,
            dynamic: !0
          }), O.push({
            type: "tool-result",
            toolCallId: Ie,
            toolName: Se,
            result: {
              type: "call",
              serverLabel: H.server_label,
              name: H.name,
              arguments: H.arguments,
              ...H.output != null ? { output: H.output } : {},
              ...H.error != null ? { error: H.error } : {}
            },
            providerMetadata: {
              [X]: {
                itemId: H.id
              }
            }
          });
          break;
        }
        case "mcp_list_tools":
          break;
        case "mcp_approval_request": {
          const Ie = (I = H.approval_request_id) != null ? I : H.id, Se = (q = (P = (L = this.config).generateId) == null ? void 0 : P.call(L)) != null ? q : Je(), be = `mcp.${H.name}`;
          O.push({
            type: "tool-call",
            toolCallId: Se,
            toolName: be,
            input: H.arguments,
            providerExecuted: !0,
            dynamic: !0
          }), O.push({
            type: "tool-approval-request",
            approvalId: Ie,
            toolCallId: Se
          });
          break;
        }
        case "computer_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("computer_use"),
            input: "",
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("computer_use"),
            result: {
              type: "computer_use_tool_result",
              status: H.status || "completed"
            }
          });
          break;
        }
        case "file_search_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("file_search"),
            input: "{}",
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("file_search"),
            result: {
              queries: H.queries,
              results: (j = (N = H.results) == null ? void 0 : N.map((Ie) => ({
                attributes: Ie.attributes,
                fileId: Ie.file_id,
                filename: Ie.filename,
                score: Ie.score,
                text: Ie.text
              }))) != null ? j : null
            }
          });
          break;
        }
        case "code_interpreter_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("code_interpreter"),
            input: JSON.stringify({
              code: H.code,
              containerId: H.container_id
            }),
            providerExecuted: !0
          }), O.push({
            type: "tool-result",
            toolCallId: H.id,
            toolName: ue.toCustomToolName("code_interpreter"),
            result: {
              outputs: H.outputs
            }
          });
          break;
        }
        case "apply_patch_call": {
          O.push({
            type: "tool-call",
            toolCallId: H.call_id,
            toolName: ue.toCustomToolName("apply_patch"),
            input: JSON.stringify({
              callId: H.call_id,
              operation: H.operation
            }),
            providerMetadata: {
              [X]: {
                itemId: H.id
              }
            }
          });
          break;
        }
      }
    const Z = {
      [X]: { responseId: Q.id }
    };
    R.length > 0 && (Z[X].logprobs = R), typeof Q.service_tier == "string" && (Z[X].serviceTier = Q.service_tier);
    const ce = Q.usage;
    return {
      content: O,
      finishReason: {
        unified: Hs({
          finishReason: (A = Q.incomplete_details) == null ? void 0 : A.reason,
          hasFunctionCall: ae
        }),
        raw: (U = (D = Q.incomplete_details) == null ? void 0 : D.reason) != null ? U : void 0
      },
      usage: Gs(ce),
      request: { body: ne },
      response: {
        id: Q.id,
        timestamp: new Date(Q.created_at * 1e3),
        modelId: Q.model,
        headers: we,
        body: oe
      },
      providerMetadata: Z,
      warnings: V
    };
  }
  async doStream(e) {
    const {
      args: t,
      warnings: o,
      webSearchToolName: n,
      toolNameMapping: r,
      store: a
    } = await this.getArgs(e), { responseHeaders: s, value: i } = await Ze({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: Rt,
      successfulResponseHandler: uo(
        Gb
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), u = this, c = this.config.provider.replace(".responses", ""), m = Ws(e.prompt), f = /* @__PURE__ */ new Map();
    let d = {
      unified: "other",
      raw: void 0
    }, g;
    const _ = [];
    let v = null;
    const y = {}, S = [];
    let C = !1;
    const w = {};
    let E;
    return {
      stream: i.pipeThrough(
        new TransformStream({
          start(k) {
            k.enqueue({ type: "stream-start", warnings: o });
          },
          transform(k, T) {
            var I, L, P, q, N, j, A, D, U, ne, V, B, ue, W, X, z, we, Q, oe, O, R, ae, Z, ce, H, Ie, Se, be, _e, ee, ie, Te, he, ge, je, Y;
            if (e.includeRawChunks && T.enqueue({ type: "raw", rawValue: k.rawValue }), !k.success) {
              d = { unified: "error", raw: void 0 }, T.enqueue({ type: "error", error: k.error });
              return;
            }
            const b = k.value;
            if (Ks(b)) {
              if (b.item.type === "function_call")
                y[b.output_index] = {
                  toolName: b.item.name,
                  toolCallId: b.item.call_id
                }, T.enqueue({
                  type: "tool-input-start",
                  id: b.item.call_id,
                  toolName: b.item.name
                });
              else if (b.item.type === "web_search_call")
                y[b.output_index] = {
                  toolName: r.toCustomToolName(
                    n ?? "web_search"
                  ),
                  toolCallId: b.item.id
                }, T.enqueue({
                  type: "tool-input-start",
                  id: b.item.id,
                  toolName: r.toCustomToolName(
                    n ?? "web_search"
                  ),
                  providerExecuted: !0
                }), T.enqueue({
                  type: "tool-input-end",
                  id: b.item.id
                }), T.enqueue({
                  type: "tool-call",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName(
                    n ?? "web_search"
                  ),
                  input: JSON.stringify({}),
                  providerExecuted: !0
                });
              else if (b.item.type === "computer_call")
                y[b.output_index] = {
                  toolName: r.toCustomToolName("computer_use"),
                  toolCallId: b.item.id
                }, T.enqueue({
                  type: "tool-input-start",
                  id: b.item.id,
                  toolName: r.toCustomToolName("computer_use"),
                  providerExecuted: !0
                });
              else if (b.item.type === "code_interpreter_call")
                y[b.output_index] = {
                  toolName: r.toCustomToolName("code_interpreter"),
                  toolCallId: b.item.id,
                  codeInterpreter: {
                    containerId: b.item.container_id
                  }
                }, T.enqueue({
                  type: "tool-input-start",
                  id: b.item.id,
                  toolName: r.toCustomToolName("code_interpreter"),
                  providerExecuted: !0
                }), T.enqueue({
                  type: "tool-input-delta",
                  id: b.item.id,
                  delta: `{"containerId":"${b.item.container_id}","code":"`
                });
              else if (b.item.type === "file_search_call")
                T.enqueue({
                  type: "tool-call",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName("file_search"),
                  input: "{}",
                  providerExecuted: !0
                });
              else if (b.item.type === "image_generation_call")
                T.enqueue({
                  type: "tool-call",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName("image_generation"),
                  input: "{}",
                  providerExecuted: !0
                });
              else if (!(b.item.type === "mcp_call" || b.item.type === "mcp_list_tools" || b.item.type === "mcp_approval_request")) if (b.item.type === "apply_patch_call") {
                const { call_id: F, operation: pe } = b.item;
                if (y[b.output_index] = {
                  toolName: r.toCustomToolName("apply_patch"),
                  toolCallId: F,
                  applyPatch: {
                    // delete_file doesn't have diff
                    hasDiff: pe.type === "delete_file",
                    endEmitted: pe.type === "delete_file"
                  }
                }, T.enqueue({
                  type: "tool-input-start",
                  id: F,
                  toolName: r.toCustomToolName("apply_patch")
                }), pe.type === "delete_file") {
                  const Be = JSON.stringify({
                    callId: F,
                    operation: pe
                  });
                  T.enqueue({
                    type: "tool-input-delta",
                    id: F,
                    delta: Be
                  }), T.enqueue({
                    type: "tool-input-end",
                    id: F
                  });
                } else
                  T.enqueue({
                    type: "tool-input-delta",
                    id: F,
                    delta: `{"callId":"${Yt(F)}","operation":{"type":"${Yt(pe.type)}","path":"${Yt(pe.path)}","diff":"`
                  });
              } else b.item.type === "shell_call" ? y[b.output_index] = {
                toolName: r.toCustomToolName("shell"),
                toolCallId: b.item.call_id
              } : b.item.type === "message" ? (S.splice(0, S.length), T.enqueue({
                type: "text-start",
                id: b.item.id,
                providerMetadata: {
                  [c]: {
                    itemId: b.item.id
                  }
                }
              })) : Ks(b) && b.item.type === "reasoning" && (w[b.item.id] = {
                encryptedContent: b.item.encrypted_content,
                summaryParts: { 0: "active" }
              }, T.enqueue({
                type: "reasoning-start",
                id: `${b.item.id}:0`,
                providerMetadata: {
                  [c]: {
                    itemId: b.item.id,
                    reasoningEncryptedContent: (I = b.item.encrypted_content) != null ? I : null
                  }
                }
              }));
            } else if (Xb(b)) {
              if (b.item.type === "message")
                T.enqueue({
                  type: "text-end",
                  id: b.item.id,
                  providerMetadata: {
                    [c]: {
                      itemId: b.item.id,
                      ...S.length > 0 && {
                        annotations: S
                      }
                    }
                  }
                });
              else if (b.item.type === "function_call")
                y[b.output_index] = void 0, C = !0, T.enqueue({
                  type: "tool-input-end",
                  id: b.item.call_id
                }), T.enqueue({
                  type: "tool-call",
                  toolCallId: b.item.call_id,
                  toolName: b.item.name,
                  input: b.item.arguments,
                  providerMetadata: {
                    [c]: {
                      itemId: b.item.id
                    }
                  }
                });
              else if (b.item.type === "web_search_call")
                y[b.output_index] = void 0, T.enqueue({
                  type: "tool-result",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName(
                    n ?? "web_search"
                  ),
                  result: Ys(b.item.action)
                });
              else if (b.item.type === "computer_call")
                y[b.output_index] = void 0, T.enqueue({
                  type: "tool-input-end",
                  id: b.item.id
                }), T.enqueue({
                  type: "tool-call",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName("computer_use"),
                  input: "",
                  providerExecuted: !0
                }), T.enqueue({
                  type: "tool-result",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName("computer_use"),
                  result: {
                    type: "computer_use_tool_result",
                    status: b.item.status || "completed"
                  }
                });
              else if (b.item.type === "file_search_call")
                y[b.output_index] = void 0, T.enqueue({
                  type: "tool-result",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName("file_search"),
                  result: {
                    queries: b.item.queries,
                    results: (P = (L = b.item.results) == null ? void 0 : L.map((F) => ({
                      attributes: F.attributes,
                      fileId: F.file_id,
                      filename: F.filename,
                      score: F.score,
                      text: F.text
                    }))) != null ? P : null
                  }
                });
              else if (b.item.type === "code_interpreter_call")
                y[b.output_index] = void 0, T.enqueue({
                  type: "tool-result",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName("code_interpreter"),
                  result: {
                    outputs: b.item.outputs
                  }
                });
              else if (b.item.type === "image_generation_call")
                T.enqueue({
                  type: "tool-result",
                  toolCallId: b.item.id,
                  toolName: r.toCustomToolName("image_generation"),
                  result: {
                    result: b.item.result
                  }
                });
              else if (b.item.type === "mcp_call") {
                y[b.output_index] = void 0;
                const F = (q = b.item.approval_request_id) != null ? q : void 0, pe = F != null && (j = (N = f.get(
                  F
                )) != null ? N : m[F]) != null ? j : b.item.id, Be = `mcp.${b.item.name}`;
                T.enqueue({
                  type: "tool-call",
                  toolCallId: pe,
                  toolName: Be,
                  input: b.item.arguments,
                  providerExecuted: !0,
                  dynamic: !0
                }), T.enqueue({
                  type: "tool-result",
                  toolCallId: pe,
                  toolName: Be,
                  result: {
                    type: "call",
                    serverLabel: b.item.server_label,
                    name: b.item.name,
                    arguments: b.item.arguments,
                    ...b.item.output != null ? { output: b.item.output } : {},
                    ...b.item.error != null ? { error: b.item.error } : {}
                  },
                  providerMetadata: {
                    [c]: {
                      itemId: b.item.id
                    }
                  }
                });
              } else if (b.item.type === "mcp_list_tools")
                y[b.output_index] = void 0;
              else if (b.item.type === "apply_patch_call") {
                const F = y[b.output_index];
                F != null && F.applyPatch && !F.applyPatch.endEmitted && b.item.operation.type !== "delete_file" && (F.applyPatch.hasDiff || T.enqueue({
                  type: "tool-input-delta",
                  id: F.toolCallId,
                  delta: Yt(b.item.operation.diff)
                }), T.enqueue({
                  type: "tool-input-delta",
                  id: F.toolCallId,
                  delta: '"}}'
                }), T.enqueue({
                  type: "tool-input-end",
                  id: F.toolCallId
                }), F.applyPatch.endEmitted = !0), F && b.item.status === "completed" && T.enqueue({
                  type: "tool-call",
                  toolCallId: F.toolCallId,
                  toolName: r.toCustomToolName("apply_patch"),
                  input: JSON.stringify({
                    callId: b.item.call_id,
                    operation: b.item.operation
                  }),
                  providerMetadata: {
                    [c]: {
                      itemId: b.item.id
                    }
                  }
                }), y[b.output_index] = void 0;
              } else if (b.item.type === "mcp_approval_request") {
                y[b.output_index] = void 0;
                const F = (U = (D = (A = u.config).generateId) == null ? void 0 : D.call(A)) != null ? U : Je(), pe = (ne = b.item.approval_request_id) != null ? ne : b.item.id;
                f.set(
                  pe,
                  F
                );
                const Be = `mcp.${b.item.name}`;
                T.enqueue({
                  type: "tool-call",
                  toolCallId: F,
                  toolName: Be,
                  input: b.item.arguments,
                  providerExecuted: !0,
                  dynamic: !0
                }), T.enqueue({
                  type: "tool-approval-request",
                  approvalId: pe,
                  toolCallId: F
                });
              } else if (b.item.type === "local_shell_call")
                y[b.output_index] = void 0, T.enqueue({
                  type: "tool-call",
                  toolCallId: b.item.call_id,
                  toolName: r.toCustomToolName("local_shell"),
                  input: JSON.stringify({
                    action: {
                      type: "exec",
                      command: b.item.action.command,
                      timeoutMs: b.item.action.timeout_ms,
                      user: b.item.action.user,
                      workingDirectory: b.item.action.working_directory,
                      env: b.item.action.env
                    }
                  }),
                  providerMetadata: {
                    [c]: { itemId: b.item.id }
                  }
                });
              else if (b.item.type === "shell_call")
                y[b.output_index] = void 0, T.enqueue({
                  type: "tool-call",
                  toolCallId: b.item.call_id,
                  toolName: r.toCustomToolName("shell"),
                  input: JSON.stringify({
                    action: {
                      commands: b.item.action.commands
                    }
                  }),
                  providerMetadata: {
                    [c]: { itemId: b.item.id }
                  }
                });
              else if (b.item.type === "reasoning") {
                const F = w[b.item.id], pe = Object.entries(
                  F.summaryParts
                ).filter(
                  ([Be, Ke]) => Ke === "active" || Ke === "can-conclude"
                ).map(([Be]) => Be);
                for (const Be of pe)
                  T.enqueue({
                    type: "reasoning-end",
                    id: `${b.item.id}:${Be}`,
                    providerMetadata: {
                      [c]: {
                        itemId: b.item.id,
                        reasoningEncryptedContent: (V = b.item.encrypted_content) != null ? V : null
                      }
                    }
                  });
                delete w[b.item.id];
              }
            } else if (tw(b)) {
              const F = y[b.output_index];
              F != null && T.enqueue({
                type: "tool-input-delta",
                id: F.toolCallId,
                delta: b.delta
              });
            } else if (aw(b)) {
              const F = y[b.output_index];
              F != null && F.applyPatch && (T.enqueue({
                type: "tool-input-delta",
                id: F.toolCallId,
                delta: Yt(b.delta)
              }), F.applyPatch.hasDiff = !0);
            } else if (sw(b)) {
              const F = y[b.output_index];
              F != null && F.applyPatch && !F.applyPatch.endEmitted && (F.applyPatch.hasDiff || (T.enqueue({
                type: "tool-input-delta",
                id: F.toolCallId,
                delta: Yt(b.diff)
              }), F.applyPatch.hasDiff = !0), T.enqueue({
                type: "tool-input-delta",
                id: F.toolCallId,
                delta: '"}}'
              }), T.enqueue({
                type: "tool-input-end",
                id: F.toolCallId
              }), F.applyPatch.endEmitted = !0);
            } else if (ow(b))
              T.enqueue({
                type: "tool-result",
                toolCallId: b.item_id,
                toolName: r.toCustomToolName("image_generation"),
                result: {
                  result: b.partial_image_b64
                },
                preliminary: !0
              });
            else if (nw(b)) {
              const F = y[b.output_index];
              F != null && T.enqueue({
                type: "tool-input-delta",
                id: F.toolCallId,
                delta: Yt(b.delta)
              });
            } else if (rw(b)) {
              const F = y[b.output_index];
              F != null && (T.enqueue({
                type: "tool-input-delta",
                id: F.toolCallId,
                delta: '"}'
              }), T.enqueue({
                type: "tool-input-end",
                id: F.toolCallId
              }), T.enqueue({
                type: "tool-call",
                toolCallId: F.toolCallId,
                toolName: r.toCustomToolName("code_interpreter"),
                input: JSON.stringify({
                  code: b.code,
                  containerId: F.codeInterpreter.containerId
                }),
                providerExecuted: !0
              }));
            } else if (ew(b))
              v = b.response.id, T.enqueue({
                type: "response-metadata",
                id: b.response.id,
                timestamp: new Date(b.response.created_at * 1e3),
                modelId: b.response.model
              });
            else if (Yb(b))
              T.enqueue({
                type: "text-delta",
                id: b.item_id,
                delta: b.delta
              }), (ue = (B = e.providerOptions) == null ? void 0 : B.openai) != null && ue.logprobs && b.logprobs && _.push(b.logprobs);
            else if (b.type === "response.reasoning_summary_part.added") {
              if (b.summary_index > 0) {
                const F = w[b.item_id];
                F.summaryParts[b.summary_index] = "active";
                for (const pe of Object.keys(
                  F.summaryParts
                ))
                  F.summaryParts[pe] === "can-conclude" && (T.enqueue({
                    type: "reasoning-end",
                    id: `${b.item_id}:${pe}`,
                    providerMetadata: {
                      [c]: { itemId: b.item_id }
                    }
                  }), F.summaryParts[pe] = "concluded");
                T.enqueue({
                  type: "reasoning-start",
                  id: `${b.item_id}:${b.summary_index}`,
                  providerMetadata: {
                    [c]: {
                      itemId: b.item_id,
                      reasoningEncryptedContent: (X = (W = w[b.item_id]) == null ? void 0 : W.encryptedContent) != null ? X : null
                    }
                  }
                });
              }
            } else b.type === "response.reasoning_summary_text.delta" ? T.enqueue({
              type: "reasoning-delta",
              id: `${b.item_id}:${b.summary_index}`,
              delta: b.delta,
              providerMetadata: {
                [c]: {
                  itemId: b.item_id
                }
              }
            }) : b.type === "response.reasoning_summary_part.done" ? a ? (T.enqueue({
              type: "reasoning-end",
              id: `${b.item_id}:${b.summary_index}`,
              providerMetadata: {
                [c]: { itemId: b.item_id }
              }
            }), w[b.item_id].summaryParts[b.summary_index] = "concluded") : w[b.item_id].summaryParts[b.summary_index] = "can-conclude" : Qb(b) ? (d = {
              unified: Hs({
                finishReason: (z = b.response.incomplete_details) == null ? void 0 : z.reason,
                hasFunctionCall: C
              }),
              raw: (Q = (we = b.response.incomplete_details) == null ? void 0 : we.reason) != null ? Q : void 0
            }, g = b.response.usage, typeof b.response.service_tier == "string" && (E = b.response.service_tier)) : iw(b) ? (S.push(b.annotation), b.annotation.type === "url_citation" ? T.enqueue({
              type: "source",
              sourceType: "url",
              id: (R = (O = (oe = u.config).generateId) == null ? void 0 : O.call(oe)) != null ? R : Je(),
              url: b.annotation.url,
              title: b.annotation.title
            }) : b.annotation.type === "file_citation" ? T.enqueue({
              type: "source",
              sourceType: "document",
              id: (ce = (Z = (ae = u.config).generateId) == null ? void 0 : Z.call(ae)) != null ? ce : Je(),
              mediaType: "text/plain",
              title: (Ie = (H = b.annotation.quote) != null ? H : b.annotation.filename) != null ? Ie : "Document",
              filename: (Se = b.annotation.filename) != null ? Se : b.annotation.file_id,
              ...b.annotation.file_id ? {
                providerMetadata: {
                  [c]: {
                    fileId: b.annotation.file_id
                  }
                }
              } : {}
            }) : b.annotation.type === "container_file_citation" ? T.enqueue({
              type: "source",
              sourceType: "document",
              id: (ee = (_e = (be = u.config).generateId) == null ? void 0 : _e.call(be)) != null ? ee : Je(),
              mediaType: "text/plain",
              title: (Te = (ie = b.annotation.filename) != null ? ie : b.annotation.file_id) != null ? Te : "Document",
              filename: (he = b.annotation.filename) != null ? he : b.annotation.file_id,
              providerMetadata: {
                [c]: {
                  fileId: b.annotation.file_id,
                  containerId: b.annotation.container_id,
                  ...b.annotation.index != null ? { index: b.annotation.index } : {}
                }
              }
            }) : b.annotation.type === "file_path" && T.enqueue({
              type: "source",
              sourceType: "document",
              id: (Y = (je = (ge = u.config).generateId) == null ? void 0 : je.call(ge)) != null ? Y : Je(),
              mediaType: "application/octet-stream",
              title: b.annotation.file_id,
              filename: b.annotation.file_id,
              providerMetadata: {
                [c]: {
                  fileId: b.annotation.file_id,
                  ...b.annotation.index != null ? { index: b.annotation.index } : {}
                }
              }
            })) : lw(b) && T.enqueue({ type: "error", error: b });
          },
          flush(k) {
            const T = {
              [c]: {
                responseId: v
              }
            };
            _.length > 0 && (T[c].logprobs = _), E !== void 0 && (T[c].serviceTier = E), k.enqueue({
              type: "finish",
              finishReason: d,
              usage: Gs(g),
              providerMetadata: T
            });
          }
        })
      ),
      request: { body: t },
      response: { headers: s }
    };
  }
};
function Yb(e) {
  return e.type === "response.output_text.delta";
}
function Xb(e) {
  return e.type === "response.output_item.done";
}
function Qb(e) {
  return e.type === "response.completed" || e.type === "response.incomplete";
}
function ew(e) {
  return e.type === "response.created";
}
function tw(e) {
  return e.type === "response.function_call_arguments.delta";
}
function ow(e) {
  return e.type === "response.image_generation_call.partial_image";
}
function nw(e) {
  return e.type === "response.code_interpreter_call_code.delta";
}
function rw(e) {
  return e.type === "response.code_interpreter_call_code.done";
}
function aw(e) {
  return e.type === "response.apply_patch_call_operation_diff.delta";
}
function sw(e) {
  return e.type === "response.apply_patch_call_operation_diff.done";
}
function Ks(e) {
  return e.type === "response.output_item.added";
}
function iw(e) {
  return e.type === "response.output_text.annotation.added";
}
function lw(e) {
  return e.type === "error";
}
function Ys(e) {
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
    case "find_in_page":
      return {
        action: {
          type: "findInPage",
          url: e.url,
          pattern: e.pattern
        }
      };
  }
}
function Yt(e) {
  return JSON.stringify(e).slice(1, -1);
}
var uw = G(
  () => J(
    p({
      instructions: l().nullish(),
      speed: x().min(0.25).max(4).default(1).nullish()
    })
  )
), cw = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    text: e,
    voice: t = "alloy",
    outputFormat: o = "mp3",
    speed: n,
    instructions: r,
    language: a,
    providerOptions: s
  }) {
    const i = [], u = await at({
      provider: "openai",
      providerOptions: s,
      schema: uw
    }), c = {
      model: this.modelId,
      input: e,
      voice: t,
      response_format: "mp3",
      speed: n,
      instructions: r
    };
    if (o && (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(o) ? c.response_format = o : i.push({
      type: "unsupported",
      feature: "outputFormat",
      details: `Unsupported output format: ${o}. Using mp3 instead.`
    })), u) {
      const m = {};
      for (const f in m) {
        const d = m[f];
        d !== void 0 && (c[f] = d);
      }
    }
    return a && i.push({
      type: "unsupported",
      feature: "language",
      details: `OpenAI speech models do not support language selection. Language parameter "${a}" was ignored.`
    }), {
      requestBody: c,
      warnings: i
    };
  }
  async doGenerate(e) {
    var t, o, n;
    const r = (n = (o = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : o.call(t)) != null ? n : /* @__PURE__ */ new Date(), { requestBody: a, warnings: s } = await this.getArgs(e), {
      value: i,
      responseHeaders: u,
      rawValue: c
    } = await Ze({
      url: this.config.url({
        path: "/audio/speech",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), e.headers),
      body: a,
      failedResponseHandler: Rt,
      successfulResponseHandler: a_(),
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
        timestamp: r,
        modelId: this.modelId,
        headers: u,
        body: c
      }
    };
  }
}, pw = G(
  () => J(
    p({
      text: l(),
      language: l().nullish(),
      duration: x().nullish(),
      words: M(
        p({
          word: l(),
          start: x(),
          end: x()
        })
      ).nullish(),
      segments: M(
        p({
          id: x(),
          seek: x(),
          start: x(),
          end: x(),
          text: l(),
          tokens: M(x()),
          temperature: x(),
          avg_logprob: x(),
          compression_ratio: x(),
          no_speech_prob: x()
        })
      ).nullish()
    })
  )
), dw = G(
  () => J(
    p({
      /**
       * Additional information to include in the transcription response.
       */
      include: M(l()).optional(),
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
      temperature: x().min(0).max(1).default(0).optional(),
      /**
       * The timestamp granularities to populate for this transcription.
       * @default ['segment']
       */
      timestampGranularities: M(le(["word", "segment"])).default(["segment"]).optional()
    })
  )
), Xs = {
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
}, mw = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    audio: e,
    mediaType: t,
    providerOptions: o
  }) {
    const n = [], r = await at({
      provider: "openai",
      providerOptions: o,
      schema: dw
    }), a = new FormData(), s = e instanceof Uint8Array ? new Blob([e]) : new Blob([Wt(e)]);
    a.append("model", this.modelId);
    const i = lv(t);
    if (a.append(
      "file",
      new File([s], "audio", { type: t }),
      `audio.${i}`
    ), r) {
      const u = {
        include: r.include,
        language: r.language,
        prompt: r.prompt,
        // https://platform.openai.com/docs/api-reference/audio/createTranscription#audio_createtranscription-response_format
        // prefer verbose_json to get segments for models that support it
        response_format: [
          "gpt-4o-transcribe",
          "gpt-4o-mini-transcribe"
        ].includes(this.modelId) ? "json" : "verbose_json",
        temperature: r.temperature,
        timestamp_granularities: r.timestampGranularities
      };
      for (const [c, m] of Object.entries(u))
        if (m != null)
          if (Array.isArray(m))
            for (const f of m)
              a.append(`${c}[]`, String(f));
          else
            a.append(c, String(m));
    }
    return {
      formData: a,
      warnings: n
    };
  }
  async doGenerate(e) {
    var t, o, n, r, a, s, i, u;
    const c = (n = (o = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : o.call(t)) != null ? n : /* @__PURE__ */ new Date(), { formData: m, warnings: f } = await this.getArgs(e), {
      value: d,
      responseHeaders: g,
      rawValue: _
    } = await ku({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Ue(this.config.headers(), e.headers),
      formData: m,
      failedResponseHandler: Rt,
      successfulResponseHandler: Qe(
        pw
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), v = d.language != null && d.language in Xs ? Xs[d.language] : void 0;
    return {
      text: d.text,
      segments: (i = (s = (r = d.segments) == null ? void 0 : r.map((y) => ({
        text: y.text,
        startSecond: y.start,
        endSecond: y.end
      }))) != null ? s : (a = d.words) == null ? void 0 : a.map((y) => ({
        text: y.word,
        startSecond: y.start,
        endSecond: y.end
      }))) != null ? i : [],
      language: v,
      durationInSeconds: (u = d.duration) != null ? u : void 0,
      warnings: f,
      response: {
        timestamp: c,
        modelId: this.modelId,
        headers: g,
        body: _
      }
    };
  }
}, fw = "3.0.1";
function hw(e = {}) {
  var t, o;
  const n = (t = Yo(
    wo({
      settingValue: e.baseURL,
      environmentVariableName: "OPENAI_BASE_URL"
    })
  )) != null ? t : "https://api.openai.com/v1", r = (o = e.name) != null ? o : "openai", a = () => tt(
    {
      Authorization: `Bearer ${zn({
        apiKey: e.apiKey,
        environmentVariableName: "OPENAI_API_KEY",
        description: "OpenAI"
      })}`,
      "OpenAI-Organization": e.organization,
      "OpenAI-Project": e.project,
      ...e.headers
    },
    `ai-sdk/openai/${fw}`
  ), s = (v) => new Qy(v, {
    provider: `${r}.chat`,
    url: ({ path: y }) => `${n}${y}`,
    headers: a,
    fetch: e.fetch
  }), i = (v) => new nb(v, {
    provider: `${r}.completion`,
    url: ({ path: y }) => `${n}${y}`,
    headers: a,
    fetch: e.fetch
  }), u = (v) => new sb(v, {
    provider: `${r}.embedding`,
    url: ({ path: y }) => `${n}${y}`,
    headers: a,
    fetch: e.fetch
  }), c = (v) => new ub(v, {
    provider: `${r}.image`,
    url: ({ path: y }) => `${n}${y}`,
    headers: a,
    fetch: e.fetch
  }), m = (v) => new mw(v, {
    provider: `${r}.transcription`,
    url: ({ path: y }) => `${n}${y}`,
    headers: a,
    fetch: e.fetch
  }), f = (v) => new cw(v, {
    provider: `${r}.speech`,
    url: ({ path: y }) => `${n}${y}`,
    headers: a,
    fetch: e.fetch
  }), d = (v) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return g(v);
  }, g = (v) => new Kb(v, {
    provider: `${r}.responses`,
    url: ({ path: y }) => `${n}${y}`,
    headers: a,
    fetch: e.fetch,
    fileIdPrefixes: ["file-"]
  }), _ = function(v) {
    return d(v);
  };
  return _.specificationVersion = "v3", _.languageModel = d, _.chat = s, _.completion = i, _.responses = g, _.embedding = u, _.embeddingModel = u, _.textEmbedding = u, _.textEmbeddingModel = u, _.image = c, _.imageModel = c, _.transcription = m, _.transcriptionModel = m, _.speech = f, _.speechModel = f, _.tools = Fb, _;
}
hw();
var ur, Qs;
function gw() {
  if (Qs) return ur;
  Qs = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, r = (m, f) => {
    for (var d in f)
      e(m, d, { get: f[d], enumerable: !0 });
  }, a = (m, f, d, g) => {
    if (f && typeof f == "object" || typeof f == "function")
      for (let _ of o(f))
        !n.call(m, _) && _ !== d && e(m, _, { get: () => f[_], enumerable: !(g = t(f, _)) || g.enumerable });
    return m;
  }, s = (m) => a(e({}, "__esModule", { value: !0 }), m), i = {};
  r(i, {
    SYMBOL_FOR_REQ_CONTEXT: () => u,
    getContext: () => c
  }), ur = s(i);
  const u = Symbol.for("@vercel/request-context");
  function c() {
    var f, d;
    return ((d = (f = globalThis[u]) == null ? void 0 : f.get) == null ? void 0 : d.call(f)) ?? {};
  }
  return ur;
}
var cr, ei;
function vw() {
  if (ei) return cr;
  ei = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, r = (f, d) => {
    for (var g in d)
      e(f, g, { get: d[g], enumerable: !0 });
  }, a = (f, d, g, _) => {
    if (d && typeof d == "object" || typeof d == "function")
      for (let v of o(d))
        !n.call(f, v) && v !== g && e(f, v, { get: () => d[v], enumerable: !(_ = t(d, v)) || _.enumerable });
    return f;
  }, s = (f) => a(e({}, "__esModule", { value: !0 }), f), i = {};
  r(i, {
    getContext: () => u.getContext,
    getVercelOidcToken: () => c,
    getVercelOidcTokenSync: () => m
  }), cr = s(i);
  var u = gw();
  async function c() {
    return "";
  }
  function m() {
    return "";
  }
  return cr;
}
var Bu = vw(), _w = "vercel.ai.gateway.error", pr = Symbol.for(_w), ti, oi, bt = class Hu extends (oi = Error, ti = pr, oi) {
  constructor({
    message: t,
    statusCode: o = 500,
    cause: n
  }) {
    super(t), this[ti] = !0, this.statusCode = o, this.cause = n;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(t) {
    return Hu.hasMarker(t);
  }
  static hasMarker(t) {
    return typeof t == "object" && t !== null && pr in t && t[pr] === !0;
  }
}, Wu = "GatewayAuthenticationError", yw = `vercel.ai.gateway.error.${Wu}`, ni = Symbol.for(yw), ri, ai, ea = class Ku extends (ai = bt, ri = ni, ai) {
  constructor({
    message: t = "Authentication failed",
    statusCode: o = 401,
    cause: n
  } = {}) {
    super({ message: t, statusCode: o, cause: n }), this[ri] = !0, this.name = Wu, this.type = "authentication_error";
  }
  static isInstance(t) {
    return bt.hasMarker(t) && ni in t;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided: t,
    oidcTokenProvided: o,
    message: n = "Authentication failed",
    statusCode: r = 401,
    cause: a
  }) {
    let s;
    return t ? s = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.` : o ? s = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys` : s = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`, new Ku({
      message: s,
      statusCode: r,
      cause: a
    });
  }
}, Yu = "GatewayInvalidRequestError", bw = `vercel.ai.gateway.error.${Yu}`, si = Symbol.for(bw), ii, li, ww = class extends (li = bt, ii = si, li) {
  constructor({
    message: e = "Invalid request",
    statusCode: t = 400,
    cause: o
  } = {}) {
    super({ message: e, statusCode: t, cause: o }), this[ii] = !0, this.name = Yu, this.type = "invalid_request_error";
  }
  static isInstance(e) {
    return bt.hasMarker(e) && si in e;
  }
}, Xu = "GatewayRateLimitError", xw = `vercel.ai.gateway.error.${Xu}`, ui = Symbol.for(xw), ci, pi, Iw = class extends (pi = bt, ci = ui, pi) {
  constructor({
    message: e = "Rate limit exceeded",
    statusCode: t = 429,
    cause: o
  } = {}) {
    super({ message: e, statusCode: t, cause: o }), this[ci] = !0, this.name = Xu, this.type = "rate_limit_exceeded";
  }
  static isInstance(e) {
    return bt.hasMarker(e) && ui in e;
  }
}, Qu = "GatewayModelNotFoundError", Tw = `vercel.ai.gateway.error.${Qu}`, di = Symbol.for(Tw), kw = G(
  () => J(
    p({
      modelId: l()
    })
  )
), mi, fi, Sw = class extends (fi = bt, mi = di, fi) {
  constructor({
    message: e = "Model not found",
    statusCode: t = 404,
    modelId: o,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[mi] = !0, this.name = Qu, this.type = "model_not_found", this.modelId = o;
  }
  static isInstance(e) {
    return bt.hasMarker(e) && di in e;
  }
}, ec = "GatewayInternalServerError", Cw = `vercel.ai.gateway.error.${ec}`, hi = Symbol.for(Cw), gi, vi, _i = class extends (vi = bt, gi = hi, vi) {
  constructor({
    message: e = "Internal server error",
    statusCode: t = 500,
    cause: o
  } = {}) {
    super({ message: e, statusCode: t, cause: o }), this[gi] = !0, this.name = ec, this.type = "internal_server_error";
  }
  static isInstance(e) {
    return bt.hasMarker(e) && hi in e;
  }
}, tc = "GatewayResponseError", Ew = `vercel.ai.gateway.error.${tc}`, yi = Symbol.for(Ew), bi, wi, Rw = class extends (wi = bt, bi = yi, wi) {
  constructor({
    message: e = "Invalid response from Gateway",
    statusCode: t = 502,
    response: o,
    validationError: n,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[bi] = !0, this.name = tc, this.type = "response_error", this.response = o, this.validationError = n;
  }
  static isInstance(e) {
    return bt.hasMarker(e) && yi in e;
  }
};
async function xi({
  response: e,
  statusCode: t,
  defaultMessage: o = "Gateway request failed",
  cause: n,
  authMethod: r
}) {
  const a = await ft({
    value: e,
    schema: Mw
  });
  if (!a.success)
    return new Rw({
      message: `Invalid error response format: ${o}`,
      statusCode: t,
      response: e,
      validationError: a.error,
      cause: n
    });
  const s = a.value, i = s.error.type, u = s.error.message;
  switch (i) {
    case "authentication_error":
      return ea.createContextualError({
        apiKeyProvided: r === "api-key",
        oidcTokenProvided: r === "oidc",
        statusCode: t,
        cause: n
      });
    case "invalid_request_error":
      return new ww({ message: u, statusCode: t, cause: n });
    case "rate_limit_exceeded":
      return new Iw({ message: u, statusCode: t, cause: n });
    case "model_not_found": {
      const c = await ft({
        value: s.error.param,
        schema: kw
      });
      return new Sw({
        message: u,
        statusCode: t,
        modelId: c.success ? c.value.modelId : void 0,
        cause: n
      });
    }
    case "internal_server_error":
      return new _i({ message: u, statusCode: t, cause: n });
    default:
      return new _i({ message: u, statusCode: t, cause: n });
  }
}
var Mw = G(
  () => J(
    p({
      error: p({
        message: l(),
        type: l().nullish(),
        param: ve().nullish(),
        code: te([l(), x()]).nullish()
      })
    })
  )
);
function Bt(e, t) {
  var o;
  return bt.isInstance(e) ? e : Xe.isInstance(e) ? xi({
    response: Nw(e),
    statusCode: (o = e.statusCode) != null ? o : 500,
    defaultMessage: "Gateway request failed",
    cause: e,
    authMethod: t
  }) : xi({
    response: {},
    statusCode: 500,
    defaultMessage: e instanceof Error ? `Gateway request failed: ${e.message}` : "Unknown Gateway error",
    cause: e,
    authMethod: t
  });
}
function Nw(e) {
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
var oc = "ai-gateway-auth-method";
async function ko(e) {
  const t = await ft({
    value: e[oc],
    schema: Ow
  });
  return t.success ? t.value : void 0;
}
var Ow = G(
  () => J(te([h("api-key"), h("oidc")]))
), Ii = class {
  constructor(e) {
    this.config = e;
  }
  async getAvailableModels() {
    try {
      const { value: e } = await vs({
        url: `${this.config.baseURL}/config`,
        headers: await De(this.config.headers()),
        successfulResponseHandler: Qe(
          Aw
        ),
        failedResponseHandler: $t({
          errorSchema: vt(),
          errorToMessage: (t) => t
        }),
        fetch: this.config.fetch
      });
      return e;
    } catch (e) {
      throw await Bt(e);
    }
  }
  async getCredits() {
    try {
      const e = new URL(this.config.baseURL), { value: t } = await vs({
        url: `${e.origin}/v1/credits`,
        headers: await De(this.config.headers()),
        successfulResponseHandler: Qe(
          $w
        ),
        failedResponseHandler: $t({
          errorSchema: vt(),
          errorToMessage: (o) => o
        }),
        fetch: this.config.fetch
      });
      return t;
    } catch (e) {
      throw await Bt(e);
    }
  }
}, Aw = G(
  () => J(
    p({
      models: M(
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
            ({ input: e, output: t, input_cache_read: o, input_cache_write: n }) => ({
              input: e,
              output: t,
              ...o ? { cachedInputTokens: o } : {},
              ...n ? { cacheCreationInputTokens: n } : {}
            })
          ).nullish(),
          specification: p({
            specificationVersion: h("v3"),
            provider: l(),
            modelId: l()
          }),
          modelType: le(["language", "embedding", "image"]).nullish()
        })
      )
    })
  )
), $w = G(
  () => J(
    p({
      balance: l(),
      total_used: l()
    }).transform(({ balance: e, total_used: t }) => ({
      balance: e,
      totalUsed: t
    }))
  )
), Pw = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3", this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(e) {
    const { abortSignal: t, ...o } = e;
    return {
      args: this.maybeEncodeFileParts(o),
      warnings: []
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: o } = await this.getArgs(e), { abortSignal: n } = e, r = await De(this.config.headers());
    try {
      const {
        responseHeaders: a,
        value: s,
        rawValue: i
      } = await Ze({
        url: this.getUrl(),
        headers: Ue(
          r,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !1),
          await De(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: Qe(vt()),
        failedResponseHandler: $t({
          errorSchema: vt(),
          errorToMessage: (u) => u
        }),
        ...n && { abortSignal: n },
        fetch: this.config.fetch
      });
      return {
        ...s,
        request: { body: t },
        response: { headers: a, body: i },
        warnings: o
      };
    } catch (a) {
      throw await Bt(a, await ko(r));
    }
  }
  async doStream(e) {
    const { args: t, warnings: o } = await this.getArgs(e), { abortSignal: n } = e, r = await De(this.config.headers());
    try {
      const { value: a, responseHeaders: s } = await Ze({
        url: this.getUrl(),
        headers: Ue(
          r,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !0),
          await De(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: uo(vt()),
        failedResponseHandler: $t({
          errorSchema: vt(),
          errorToMessage: (i) => i
        }),
        ...n && { abortSignal: n },
        fetch: this.config.fetch
      });
      return {
        stream: a.pipeThrough(
          new TransformStream({
            start(i) {
              o.length > 0 && i.enqueue({ type: "stream-start", warnings: o });
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
      throw await Bt(a, await ko(r));
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
      for (const o of t.content)
        if (this.isFilePart(o)) {
          const n = o;
          if (n.data instanceof Uint8Array) {
            const r = Uint8Array.from(n.data), a = Buffer.from(r).toString("base64");
            n.data = new URL(
              `data:${n.mediaType || "application/octet-stream"};base64,${a}`
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
}, qw = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: o,
    providerOptions: n
  }) {
    var r;
    const a = await De(this.config.headers());
    try {
      const {
        responseHeaders: s,
        value: i,
        rawValue: u
      } = await Ze({
        url: this.getUrl(),
        headers: Ue(
          a,
          t ?? {},
          this.getModelConfigHeaders(),
          await De(this.config.o11yHeaders)
        ),
        body: {
          values: e,
          ...n ? { providerOptions: n } : {}
        },
        successfulResponseHandler: Qe(
          jw
        ),
        failedResponseHandler: $t({
          errorSchema: vt(),
          errorToMessage: (c) => c
        }),
        ...o && { abortSignal: o },
        fetch: this.config.fetch
      });
      return {
        embeddings: i.embeddings,
        usage: (r = i.usage) != null ? r : void 0,
        providerMetadata: i.providerMetadata,
        response: { headers: s, body: u },
        warnings: []
      };
    } catch (s) {
      throw await Bt(s, await ko(a));
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
}, jw = G(
  () => J(
    p({
      embeddings: M(M(x())),
      usage: p({ tokens: x() }).nullish(),
      providerMetadata: Me(l(), Me(l(), ve())).optional()
    })
  )
), Dw = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3", this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: o,
    aspectRatio: n,
    seed: r,
    providerOptions: a,
    headers: s,
    abortSignal: i
  }) {
    var u;
    const c = await De(this.config.headers());
    try {
      const {
        responseHeaders: m,
        value: f,
        rawValue: d
      } = await Ze({
        url: this.getUrl(),
        headers: Ue(
          c,
          s ?? {},
          this.getModelConfigHeaders(),
          await De(this.config.o11yHeaders)
        ),
        body: {
          prompt: e,
          n: t,
          ...o && { size: o },
          ...n && { aspectRatio: n },
          ...r && { seed: r },
          ...a && { providerOptions: a }
        },
        successfulResponseHandler: Qe(
          Uw
        ),
        failedResponseHandler: $t({
          errorSchema: vt(),
          errorToMessage: (g) => g
        }),
        ...i && { abortSignal: i },
        fetch: this.config.fetch
      });
      return {
        images: f.images,
        // Always base64 strings from server
        warnings: (u = f.warnings) != null ? u : [],
        providerMetadata: f.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: m
        }
      };
    } catch (m) {
      throw Bt(m, await ko(c));
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
}, zw = p({
  images: M(ve()).optional()
}).catchall(ve()), Uw = p({
  images: M(l()),
  // Always base64 strings over the wire
  warnings: M(
    p({
      type: h("other"),
      message: l()
    })
  ).optional(),
  providerMetadata: Me(l(), zw).optional()
});
async function Zw() {
  var e;
  return (e = Bu.getContext().headers) == null ? void 0 : e["x-vercel-id"];
}
var Lw = "3.0.2", Fw = "0.0.1";
function Vw(e = {}) {
  var t, o;
  let n = null, r = null;
  const a = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5;
  let s = 0;
  const i = (o = Yo(e.baseURL)) != null ? o : "https://ai-gateway.vercel.sh/v3/ai", u = async () => {
    const v = await Gw(e);
    if (v)
      return tt(
        {
          Authorization: `Bearer ${v.token}`,
          "ai-gateway-protocol-version": Fw,
          [oc]: v.authMethod,
          ...e.headers
        },
        `ai-sdk/gateway/${Lw}`
      );
    throw ea.createContextualError({
      apiKeyProvided: !1,
      oidcTokenProvided: !1,
      statusCode: 401
    });
  }, c = () => {
    const v = wo({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    }), y = wo({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    }), S = wo({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const C = await Zw();
      return {
        ...v && { "ai-o11y-deployment-id": v },
        ...y && { "ai-o11y-environment": y },
        ...S && { "ai-o11y-region": S },
        ...C && { "ai-o11y-request-id": C }
      };
    };
  }, m = (v) => new Pw(v, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), f = async () => {
    var v, y, S;
    const C = (S = (y = (v = e._internal) == null ? void 0 : v.currentDate) == null ? void 0 : y.call(v).getTime()) != null ? S : Date.now();
    return (!n || C - s > a) && (s = C, n = new Ii({
      baseURL: i,
      headers: u,
      fetch: e.fetch
    }).getAvailableModels().then((w) => (r = w, w)).catch(async (w) => {
      throw await Bt(
        w,
        await ko(await u())
      );
    })), r ? Promise.resolve(r) : n;
  }, d = async () => new Ii({
    baseURL: i,
    headers: u,
    fetch: e.fetch
  }).getCredits().catch(async (v) => {
    throw await Bt(
      v,
      await ko(await u())
    );
  }), g = function(v) {
    if (new.target)
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    return m(v);
  };
  g.specificationVersion = "v3", g.getAvailableModels = f, g.getCredits = d, g.imageModel = (v) => new Dw(v, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  }), g.languageModel = m;
  const _ = (v) => new qw(v, {
    provider: "gateway",
    baseURL: i,
    headers: u,
    fetch: e.fetch,
    o11yHeaders: c()
  });
  return g.embeddingModel = _, g.textEmbeddingModel = _, g;
}
var Jw = Vw();
async function Gw(e) {
  const t = wo({
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
      token: await Bu.getVercelOidcToken(),
      authMethod: "oidc"
    };
  } catch {
    return null;
  }
}
var Bw = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, to = "1.9.0", Ti = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Hw(e) {
  var t = /* @__PURE__ */ new Set([e]), o = /* @__PURE__ */ new Set(), n = e.match(Ti);
  if (!n)
    return function() {
      return !1;
    };
  var r = {
    major: +n[1],
    minor: +n[2],
    patch: +n[3],
    prerelease: n[4]
  };
  if (r.prerelease != null)
    return function(u) {
      return u === e;
    };
  function a(i) {
    return o.add(i), !1;
  }
  function s(i) {
    return t.add(i), !0;
  }
  return function(u) {
    if (t.has(u))
      return !0;
    if (o.has(u))
      return !1;
    var c = u.match(Ti);
    if (!c)
      return a(u);
    var m = {
      major: +c[1],
      minor: +c[2],
      patch: +c[3],
      prerelease: c[4]
    };
    return m.prerelease != null || r.major !== m.major ? a(u) : r.major === 0 ? r.minor === m.minor && r.patch <= m.patch ? s(u) : a(u) : r.minor <= m.minor ? s(u) : a(u);
  };
}
var Ww = Hw(to), Kw = to.split(".")[0], Go = Symbol.for("opentelemetry.js.api." + Kw), Bo = Bw;
function Xo(e, t, o, n) {
  var r;
  n === void 0 && (n = !1);
  var a = Bo[Go] = (r = Bo[Go]) !== null && r !== void 0 ? r : {
    version: to
  };
  if (!n && a[e]) {
    var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return o.error(s.stack || s.message), !1;
  }
  if (a.version !== to) {
    var s = new Error("@opentelemetry/api: Registration of version v" + a.version + " for " + e + " does not match previously registered API v" + to);
    return o.error(s.stack || s.message), !1;
  }
  return a[e] = t, o.debug("@opentelemetry/api: Registered a global for " + e + " v" + to + "."), !0;
}
function ro(e) {
  var t, o, n = (t = Bo[Go]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !Ww(n)))
    return (o = Bo[Go]) === null || o === void 0 ? void 0 : o[e];
}
function Qo(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + to + ".");
  var o = Bo[Go];
  o && delete o[e];
}
var Yw = function(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e), r, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; ) a.push(r.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      r && !r.done && (o = n.return) && o.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, Xw = function(e, t, o) {
  if (o || arguments.length === 2) for (var n = 0, r = t.length, a; n < r; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Qw = (
  /** @class */
  (function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], o = 0; o < arguments.length; o++)
        t[o] = arguments[o];
      return Do("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], o = 0; o < arguments.length; o++)
        t[o] = arguments[o];
      return Do("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], o = 0; o < arguments.length; o++)
        t[o] = arguments[o];
      return Do("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], o = 0; o < arguments.length; o++)
        t[o] = arguments[o];
      return Do("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], o = 0; o < arguments.length; o++)
        t[o] = arguments[o];
      return Do("verbose", this._namespace, t);
    }, e;
  })()
);
function Do(e, t, o) {
  var n = ro("diag");
  if (n)
    return o.unshift(t), n[e].apply(n, Xw([], Yw(o), !1));
}
var gt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(gt || (gt = {}));
function e0(e, t) {
  e < gt.NONE ? e = gt.NONE : e > gt.ALL && (e = gt.ALL), t = t || {};
  function o(n, r) {
    var a = t[n];
    return typeof a == "function" && e >= r ? a.bind(t) : function() {
    };
  }
  return {
    error: o("error", gt.ERROR),
    warn: o("warn", gt.WARN),
    info: o("info", gt.INFO),
    debug: o("debug", gt.DEBUG),
    verbose: o("verbose", gt.VERBOSE)
  };
}
var t0 = function(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e), r, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; ) a.push(r.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      r && !r.done && (o = n.return) && o.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, o0 = function(e, t, o) {
  if (o || arguments.length === 2) for (var n = 0, r = t.length, a; n < r; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, n0 = "diag", Pt = (
  /** @class */
  (function() {
    function e() {
      function t(r) {
        return function() {
          for (var a = [], s = 0; s < arguments.length; s++)
            a[s] = arguments[s];
          var i = ro("diag");
          if (i)
            return i[r].apply(i, o0([], t0(a), !1));
        };
      }
      var o = this, n = function(r, a) {
        var s, i, u;
        if (a === void 0 && (a = { logLevel: gt.INFO }), r === o) {
          var c = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return o.error((s = c.stack) !== null && s !== void 0 ? s : c.message), !1;
        }
        typeof a == "number" && (a = {
          logLevel: a
        });
        var m = ro("diag"), f = e0((i = a.logLevel) !== null && i !== void 0 ? i : gt.INFO, r);
        if (m && !a.suppressOverrideMessage) {
          var d = (u = new Error().stack) !== null && u !== void 0 ? u : "<failed to generate stacktrace>";
          m.warn("Current logger will be overwritten from " + d), f.warn("Current logger will overwrite one already registered from " + d);
        }
        return Xo("diag", f, o, !0);
      };
      o.setLogger = n, o.disable = function() {
        Qo(n0, o);
      }, o.createComponentLogger = function(r) {
        return new Qw(r);
      }, o.verbose = t("verbose"), o.debug = t("debug"), o.info = t("info"), o.warn = t("warn"), o.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  })()
), r0 = function(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e), r, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; ) a.push(r.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      r && !r.done && (o = n.return) && o.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, a0 = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, o = t && e[t], n = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, s0 = (
  /** @class */
  (function() {
    function e(t) {
      this._entries = t ? new Map(t) : /* @__PURE__ */ new Map();
    }
    return e.prototype.getEntry = function(t) {
      var o = this._entries.get(t);
      if (o)
        return Object.assign({}, o);
    }, e.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(t) {
        var o = r0(t, 2), n = o[0], r = o[1];
        return [n, r];
      });
    }, e.prototype.setEntry = function(t, o) {
      var n = new e(this._entries);
      return n._entries.set(t, o), n;
    }, e.prototype.removeEntry = function(t) {
      var o = new e(this._entries);
      return o._entries.delete(t), o;
    }, e.prototype.removeEntries = function() {
      for (var t, o, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      var a = new e(this._entries);
      try {
        for (var s = a0(n), i = s.next(); !i.done; i = s.next()) {
          var u = i.value;
          a._entries.delete(u);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          i && !i.done && (o = s.return) && o.call(s);
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
Pt.instance();
function i0(e) {
  return e === void 0 && (e = {}), new s0(new Map(Object.entries(e)));
}
function nc(e) {
  return Symbol.for(e);
}
var l0 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      var o = this;
      o._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), o.getValue = function(n) {
        return o._currentContext.get(n);
      }, o.setValue = function(n, r) {
        var a = new e(o._currentContext);
        return a._currentContext.set(n, r), a;
      }, o.deleteValue = function(n) {
        var r = new e(o._currentContext);
        return r._currentContext.delete(n), r;
      };
    }
    return e;
  })()
), u0 = new l0(), co = /* @__PURE__ */ (function() {
  var e = function(t, o) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
      n.__proto__ = r;
    } || function(n, r) {
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
    }, e(t, o);
  };
  return function(t, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
    e(t, o);
    function n() {
      this.constructor = t;
    }
    t.prototype = o === null ? Object.create(o) : (n.prototype = o.prototype, new n());
  };
})(), c0 = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, o) {
      return b0;
    }, e.prototype.createHistogram = function(t, o) {
      return w0;
    }, e.prototype.createCounter = function(t, o) {
      return y0;
    }, e.prototype.createUpDownCounter = function(t, o) {
      return x0;
    }, e.prototype.createObservableGauge = function(t, o) {
      return T0;
    }, e.prototype.createObservableCounter = function(t, o) {
      return I0;
    }, e.prototype.createObservableUpDownCounter = function(t, o) {
      return k0;
    }, e.prototype.addBatchObservableCallback = function(t, o) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  })()
), Zn = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e() {
    }
    return e;
  })()
), p0 = (
  /** @class */
  (function(e) {
    co(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(o, n) {
    }, t;
  })(Zn)
), d0 = (
  /** @class */
  (function(e) {
    co(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(o, n) {
    }, t;
  })(Zn)
), m0 = (
  /** @class */
  (function(e) {
    co(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(o, n) {
    }, t;
  })(Zn)
), f0 = (
  /** @class */
  (function(e) {
    co(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(o, n) {
    }, t;
  })(Zn)
), ta = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  })()
), h0 = (
  /** @class */
  (function(e) {
    co(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(ta)
), g0 = (
  /** @class */
  (function(e) {
    co(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(ta)
), v0 = (
  /** @class */
  (function(e) {
    co(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  })(ta)
), _0 = new c0(), y0 = new p0(), b0 = new m0(), w0 = new f0(), x0 = new d0(), I0 = new h0(), T0 = new g0(), k0 = new v0(), S0 = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, C0 = {
  set: function(e, t, o) {
    e != null && (e[t] = o);
  }
}, E0 = function(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e), r, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; ) a.push(r.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      r && !r.done && (o = n.return) && o.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, R0 = function(e, t, o) {
  if (o || arguments.length === 2) for (var n = 0, r = t.length, a; n < r; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, M0 = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.active = function() {
      return u0;
    }, e.prototype.with = function(t, o, n) {
      for (var r = [], a = 3; a < arguments.length; a++)
        r[a - 3] = arguments[a];
      return o.call.apply(o, R0([n], E0(r), !1));
    }, e.prototype.bind = function(t, o) {
      return o;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  })()
), N0 = function(e, t) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var n = o.call(e), r, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; ) a.push(r.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      r && !r.done && (o = n.return) && o.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}, O0 = function(e, t, o) {
  if (o || arguments.length === 2) for (var n = 0, r = t.length, a; n < r; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, dr = "context", A0 = new M0(), Ln = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Xo(dr, t, Pt.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, o, n) {
      for (var r, a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return (r = this._getContextManager()).with.apply(r, O0([t, o, n], N0(a), !1));
    }, e.prototype.bind = function(t, o) {
      return this._getContextManager().bind(t, o);
    }, e.prototype._getContextManager = function() {
      return ro(dr) || A0;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Qo(dr, Pt.instance());
    }, e;
  })()
), Mr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Mr || (Mr = {}));
var rc = "0000000000000000", ac = "00000000000000000000000000000000", $0 = {
  traceId: ac,
  spanId: rc,
  traceFlags: Mr.NONE
}, Uo = (
  /** @class */
  (function() {
    function e(t) {
      t === void 0 && (t = $0), this._spanContext = t;
    }
    return e.prototype.spanContext = function() {
      return this._spanContext;
    }, e.prototype.setAttribute = function(t, o) {
      return this;
    }, e.prototype.setAttributes = function(t) {
      return this;
    }, e.prototype.addEvent = function(t, o) {
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
    }, e.prototype.recordException = function(t, o) {
    }, e;
  })()
), oa = nc("OpenTelemetry Context Key SPAN");
function na(e) {
  return e.getValue(oa) || void 0;
}
function P0() {
  return na(Ln.getInstance().active());
}
function ra(e, t) {
  return e.setValue(oa, t);
}
function q0(e) {
  return e.deleteValue(oa);
}
function j0(e, t) {
  return ra(e, new Uo(t));
}
function sc(e) {
  var t;
  return (t = na(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var D0 = /^([0-9a-f]{32})$/i, z0 = /^[0-9a-f]{16}$/i;
function U0(e) {
  return D0.test(e) && e !== ac;
}
function Z0(e) {
  return z0.test(e) && e !== rc;
}
function ic(e) {
  return U0(e.traceId) && Z0(e.spanId);
}
function L0(e) {
  return new Uo(e);
}
var mr = Ln.getInstance(), lc = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, o, n) {
      n === void 0 && (n = mr.active());
      var r = !!(o != null && o.root);
      if (r)
        return new Uo();
      var a = n && sc(n);
      return F0(a) && ic(a) ? new Uo(a) : new Uo();
    }, e.prototype.startActiveSpan = function(t, o, n, r) {
      var a, s, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = o : arguments.length === 3 ? (a = o, i = n) : (a = o, s = n, i = r);
        var u = s ?? mr.active(), c = this.startSpan(t, a, u), m = ra(u, c);
        return mr.with(m, i, void 0, c);
      }
    }, e;
  })()
);
function F0(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var V0 = new lc(), J0 = (
  /** @class */
  (function() {
    function e(t, o, n, r) {
      this._provider = t, this.name = o, this.version = n, this.options = r;
    }
    return e.prototype.startSpan = function(t, o, n) {
      return this._getTracer().startSpan(t, o, n);
    }, e.prototype.startActiveSpan = function(t, o, n, r) {
      var a = this._getTracer();
      return Reflect.apply(a.startActiveSpan, a, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : V0;
    }, e;
  })()
), G0 = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, o, n) {
      return new lc();
    }, e;
  })()
), B0 = new G0(), ki = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, o, n) {
      var r;
      return (r = this.getDelegateTracer(t, o, n)) !== null && r !== void 0 ? r : new J0(this, t, o, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : B0;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, o, n) {
      var r;
      return (r = this._delegate) === null || r === void 0 ? void 0 : r.getTracer(t, o, n);
    }, e;
  })()
), Mn;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(Mn || (Mn = {}));
Ln.getInstance();
Pt.instance();
var H0 = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, o, n) {
      return _0;
    }, e;
  })()
), W0 = new H0(), fr = "metrics", K0 = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return Xo(fr, t, Pt.instance());
    }, e.prototype.getMeterProvider = function() {
      return ro(fr) || W0;
    }, e.prototype.getMeter = function(t, o, n) {
      return this.getMeterProvider().getMeter(t, o, n);
    }, e.prototype.disable = function() {
      Qo(fr, Pt.instance());
    }, e;
  })()
);
K0.getInstance();
var Y0 = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.inject = function(t, o) {
    }, e.prototype.extract = function(t, o) {
      return t;
    }, e.prototype.fields = function() {
      return [];
    }, e;
  })()
), aa = nc("OpenTelemetry Baggage Key");
function uc(e) {
  return e.getValue(aa) || void 0;
}
function X0() {
  return uc(Ln.getInstance().active());
}
function Q0(e, t) {
  return e.setValue(aa, t);
}
function ex(e) {
  return e.deleteValue(aa);
}
var hr = "propagation", tx = new Y0(), ox = (
  /** @class */
  (function() {
    function e() {
      this.createBaggage = i0, this.getBaggage = uc, this.getActiveBaggage = X0, this.setBaggage = Q0, this.deleteBaggage = ex;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return Xo(hr, t, Pt.instance());
    }, e.prototype.inject = function(t, o, n) {
      return n === void 0 && (n = C0), this._getGlobalPropagator().inject(t, o, n);
    }, e.prototype.extract = function(t, o, n) {
      return n === void 0 && (n = S0), this._getGlobalPropagator().extract(t, o, n);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      Qo(hr, Pt.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return ro(hr) || tx;
    }, e;
  })()
);
ox.getInstance();
var gr = "trace", nx = (
  /** @class */
  (function() {
    function e() {
      this._proxyTracerProvider = new ki(), this.wrapSpanContext = L0, this.isSpanContextValid = ic, this.deleteSpan = q0, this.getSpan = na, this.getActiveSpan = P0, this.getSpanContext = sc, this.setSpan = ra, this.setSpanContext = j0;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var o = Xo(gr, this._proxyTracerProvider, Pt.instance());
      return o && this._proxyTracerProvider.setDelegate(t), o;
    }, e.prototype.getTracerProvider = function() {
      return ro(gr) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, o) {
      return this.getTracerProvider().getTracer(t, o);
    }, e.prototype.disable = function() {
      Qo(gr, Pt.instance()), this._proxyTracerProvider = new ki();
    }, e;
  })()
), rx = nx.getInstance(), ax = Object.defineProperty, sx = (e, t) => {
  for (var o in t)
    ax(e, o, { get: t[o], enumerable: !0 });
}, cc = "AI_InvalidArgumentError", pc = `vercel.ai.error.${cc}`, ix = Symbol.for(pc), dc, Ae = class extends se {
  constructor({
    parameter: e,
    value: t,
    message: o
  }) {
    super({
      name: cc,
      message: `Invalid argument for parameter ${e}: ${o}`
    }), this[dc] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return se.hasMarker(e, pc);
  }
};
dc = ix;
var mc = "AI_InvalidStreamPartError", fc = `vercel.ai.error.${mc}`, lx = Symbol.for(fc), hc, cT = class extends se {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: mc, message: t }), this[hc] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, fc);
  }
};
hc = lx;
var gc = "AI_InvalidToolApprovalError", vc = `vercel.ai.error.${gc}`, ux = Symbol.for(vc), _c, cx = class extends se {
  constructor({ approvalId: e }) {
    super({
      name: gc,
      message: `Tool approval response references unknown approvalId: "${e}". No matching tool-approval-request found in message history.`
    }), this[_c] = !0, this.approvalId = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, vc);
  }
};
_c = ux;
var yc = "AI_InvalidToolInputError", bc = `vercel.ai.error.${yc}`, px = Symbol.for(bc), wc, sa = class extends se {
  constructor({
    toolInput: e,
    toolName: t,
    cause: o,
    message: n = `Invalid input for tool ${t}: ${Eo(o)}`
  }) {
    super({ name: yc, message: n, cause: o }), this[wc] = !0, this.toolInput = e, this.toolName = t;
  }
  static isInstance(e) {
    return se.hasMarker(e, bc);
  }
};
wc = px;
var xc = "AI_ToolCallNotFoundForApprovalError", Ic = `vercel.ai.error.${xc}`, dx = Symbol.for(Ic), Tc, ia = class extends se {
  constructor({
    toolCallId: e,
    approvalId: t
  }) {
    super({
      name: xc,
      message: `Tool call "${e}" not found for approval request "${t}".`
    }), this[Tc] = !0, this.toolCallId = e, this.approvalId = t;
  }
  static isInstance(e) {
    return se.hasMarker(e, Ic);
  }
};
Tc = dx;
var kc = "AI_NoImageGeneratedError", Sc = `vercel.ai.error.${kc}`, mx = Symbol.for(Sc), Cc, fx = class extends se {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: o
  }) {
    super({ name: kc, message: e, cause: t }), this[Cc] = !0, this.responses = o;
  }
  static isInstance(e) {
    return se.hasMarker(e, Sc);
  }
};
Cc = mx;
var Ec = "AI_NoObjectGeneratedError", Rc = `vercel.ai.error.${Ec}`, hx = Symbol.for(Rc), Mc, _t = class extends se {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: o,
    response: n,
    usage: r,
    finishReason: a
  }) {
    super({ name: Ec, message: e, cause: t }), this[Mc] = !0, this.text = o, this.response = n, this.usage = r, this.finishReason = a;
  }
  static isInstance(e) {
    return se.hasMarker(e, Rc);
  }
};
Mc = hx;
var Nc = "AI_NoOutputGeneratedError", Oc = `vercel.ai.error.${Nc}`, gx = Symbol.for(Oc), Ac, $c = class extends se {
  // used in isInstance
  constructor({
    message: e = "No output generated.",
    cause: t
  } = {}) {
    super({ name: Nc, message: e, cause: t }), this[Ac] = !0;
  }
  static isInstance(e) {
    return se.hasMarker(e, Oc);
  }
};
Ac = gx;
var vx = class extends se {
  constructor(e) {
    super({
      name: "AI_NoSpeechGeneratedError",
      message: "No speech audio generated."
    }), this.responses = e.responses;
  }
}, Pc = "AI_NoSuchToolError", qc = `vercel.ai.error.${Pc}`, _x = Symbol.for(qc), jc, Nr = class extends se {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: o = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: Pc, message: o }), this[jc] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return se.hasMarker(e, qc);
  }
};
jc = _x;
var Dc = "AI_ToolCallRepairError", zc = `vercel.ai.error.${Dc}`, yx = Symbol.for(zc), Uc, bx = class extends se {
  constructor({
    cause: e,
    originalError: t,
    message: o = `Error repairing tool call: ${Eo(e)}`
  }) {
    super({ name: Dc, message: o, cause: e }), this[Uc] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return se.hasMarker(e, zc);
  }
};
Uc = yx;
var en = class extends se {
  constructor(e) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${e.version} for provider "${e.provider}" and model "${e.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    }), this.version = e.version, this.provider = e.provider, this.modelId = e.modelId;
  }
}, Zc = "AI_InvalidDataContentError", Lc = `vercel.ai.error.${Zc}`, wx = Symbol.for(Lc), Fc, Si = class extends se {
  constructor({
    content: e,
    cause: t,
    message: o = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: Zc, message: o, cause: t }), this[Fc] = !0, this.content = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, Lc);
  }
};
Fc = wx;
var Vc = "AI_InvalidMessageRoleError", Jc = `vercel.ai.error.${Vc}`, xx = Symbol.for(Jc), Gc, Ix = class extends se {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: Vc, message: t }), this[Gc] = !0, this.role = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, Jc);
  }
};
Gc = xx;
var Bc = "AI_MessageConversionError", Hc = `vercel.ai.error.${Bc}`, Tx = Symbol.for(Hc), Wc, kx = class extends se {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: Bc, message: t }), this[Wc] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return se.hasMarker(e, Hc);
  }
};
Wc = Tx;
var Kc = "AI_RetryError", Yc = `vercel.ai.error.${Kc}`, Sx = Symbol.for(Yc), Xc, Ci = class extends se {
  constructor({
    message: e,
    reason: t,
    errors: o
  }) {
    super({ name: Kc, message: e }), this[Xc] = !0, this.reason = t, this.errors = o, this.lastError = o[o.length - 1];
  }
  static isInstance(e) {
    return se.hasMarker(e, Yc);
  }
};
Xc = Sx;
function Cx({
  warning: e,
  provider: t,
  model: o
}) {
  const n = `AI SDK Warning (${t} / ${o}):`;
  switch (e.type) {
    case "unsupported": {
      let r = `${n} The feature "${e.feature}" is not supported.`;
      return e.details && (r += ` ${e.details}`), r;
    }
    case "compatibility": {
      let r = `${n} The feature "${e.feature}" is used in a compatibility mode.`;
      return e.details && (r += ` ${e.details}`), r;
    }
    case "other":
      return `${n} ${e.message}`;
    default:
      return `${n} ${JSON.stringify(e, null, 2)}`;
  }
}
var Ex = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.", Ei = !1, It = (e) => {
  if (e.warnings.length === 0)
    return;
  const t = globalThis.AI_SDK_LOG_WARNINGS;
  if (t !== !1) {
    if (typeof t == "function") {
      t(e);
      return;
    }
    Ei || (Ei = !0, console.info(Ex));
    for (const o of e.warnings)
      console.warn(
        Cx({
          warning: o,
          provider: e.provider,
          model: e.model
        })
      );
  }
};
function tn({
  provider: e,
  modelId: t
}) {
  It({
    warnings: [
      {
        type: "compatibility",
        feature: "specificationVersion",
        details: "Using v2 specification compatibility mode. Some features may not be available."
      }
    ],
    provider: e,
    model: t
  });
}
function Qc(e) {
  return e.specificationVersion === "v3" ? e : (tn({
    provider: e.provider,
    modelId: e.modelId
  }), new Proxy(e, {
    get(t, o) {
      return o === "specificationVersion" ? "v3" : t[o];
    }
  }));
}
function ep(e) {
  return e.specificationVersion === "v3" ? e : (tn({
    provider: e.provider,
    modelId: e.modelId
  }), new Proxy(e, {
    get(t, o) {
      return o === "specificationVersion" ? "v3" : t[o];
    }
  }));
}
function tp(e) {
  return e.specificationVersion === "v3" ? e : (tn({
    provider: e.provider,
    modelId: e.modelId
  }), new Proxy(e, {
    get(t, o) {
      switch (o) {
        case "specificationVersion":
          return "v3";
        case "doGenerate":
          return async (...n) => {
            const r = await t.doGenerate(...n);
            return {
              ...r,
              finishReason: op(r.finishReason),
              usage: np(r.usage)
            };
          };
        case "doStream":
          return async (...n) => {
            const r = await t.doStream(...n);
            return {
              ...r,
              stream: Rx(r.stream)
            };
          };
        default:
          return t[o];
      }
    }
  }));
}
function Rx(e) {
  return e.pipeThrough(
    new TransformStream({
      transform(t, o) {
        switch (t.type) {
          case "finish":
            o.enqueue({
              ...t,
              finishReason: op(t.finishReason),
              usage: np(t.usage)
            });
            break;
          default:
            o.enqueue(t);
            break;
        }
      }
    })
  );
}
function op(e) {
  return {
    unified: e === "unknown" ? "other" : e,
    raw: void 0
  };
}
function np(e) {
  return {
    inputTokens: {
      total: e.inputTokens,
      noCache: void 0,
      cacheRead: e.cachedInputTokens,
      cacheWrite: void 0
    },
    outputTokens: {
      total: e.outputTokens,
      text: void 0,
      reasoning: e.reasoningTokens
    }
  };
}
function rp(e) {
  return e.specificationVersion === "v3" ? e : (tn({
    provider: e.provider,
    modelId: e.modelId
  }), new Proxy(e, {
    get(t, o) {
      return o === "specificationVersion" ? "v3" : t[o];
    }
  }));
}
function ap(e) {
  return e.specificationVersion === "v3" ? e : (tn({
    provider: e.provider,
    modelId: e.modelId
  }), new Proxy(e, {
    get(t, o) {
      return o === "specificationVersion" ? "v3" : t[o];
    }
  }));
}
function So(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      const t = e;
      throw new en({
        version: t.specificationVersion,
        provider: t.provider,
        modelId: t.modelId
      });
    }
    return tp(e);
  }
  return on().languageModel(e);
}
function sp(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      const t = e;
      throw new en({
        version: t.specificationVersion,
        provider: t.provider,
        modelId: t.modelId
      });
    }
    return Qc(e);
  }
  return on().embeddingModel(e);
}
function Mx(e) {
  var t, o;
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      const n = e;
      throw new en({
        version: n.specificationVersion,
        provider: n.provider,
        modelId: n.modelId
      });
    }
    return ap(e);
  }
  return (o = (t = on()).transcriptionModel) == null ? void 0 : o.call(t, e);
}
function Nx(e) {
  var t, o;
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      const n = e;
      throw new en({
        version: n.specificationVersion,
        provider: n.provider,
        modelId: n.modelId
      });
    }
    return rp(e);
  }
  return (o = (t = on()).speechModel) == null ? void 0 : o.call(t, e);
}
function Ox(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      const t = e;
      throw new en({
        version: t.specificationVersion,
        provider: t.provider,
        modelId: t.modelId
      });
    }
    return ep(e);
  }
  return on().imageModel(e);
}
function on() {
  var e;
  return (e = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? e : Jw;
}
var Nn = [
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
], ip = [
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
], Ax = (e) => {
  const t = typeof e == "string" ? Wt(e) : e, o = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
  return t.slice(o + 10);
};
function $x(e) {
  return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && // 'I'
  e[1] === 68 && // 'D'
  e[2] === 51 ? Ax(e) : e;
}
function Co({
  data: e,
  signatures: t
}) {
  const o = $x(e), n = typeof o == "string" ? Wt(
    o.substring(0, Math.min(o.length, 24))
  ) : o;
  for (const r of t)
    if (n.length >= r.bytesPrefix.length && r.bytesPrefix.every(
      (a, s) => a === null || n[s] === a
    ))
      return r.mediaType;
}
var Mt = "6.0.3", lp = async ({ url: e }) => {
  var t;
  const o = e.toString();
  try {
    const n = await fetch(o, {
      headers: tt(
        {},
        `ai-sdk/${Mt}`,
        To()
      )
    });
    if (!n.ok)
      throw new bo({
        url: o,
        statusCode: n.status,
        statusText: n.statusText
      });
    return {
      data: new Uint8Array(await n.arrayBuffer()),
      mediaType: (t = n.headers.get("content-type")) != null ? t : void 0
    };
  } catch (n) {
    throw bo.isInstance(n) ? n : new bo({ url: o, cause: n });
  }
}, Px = (e = lp) => (t) => Promise.all(
  t.map(
    async (o) => o.isUrlSupportedByModel ? null : e(o)
  )
);
function up(e) {
  try {
    const [t, o] = e.split(",");
    return {
      mediaType: t.split(";")[0].split(":")[1],
      base64Content: o
    };
  } catch {
    return {
      mediaType: void 0,
      base64Content: void 0
    };
  }
}
var cp = te([
  l(),
  Sn(Uint8Array),
  Sn(ArrayBuffer),
  fu(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, o;
      return (o = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? o : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function pp(e) {
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
    const { mediaType: t, base64Content: o } = up(
      e.toString()
    );
    if (t == null || o == null)
      throw new se({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`
      });
    return { data: o, mediaType: t };
  }
  return { data: e, mediaType: void 0 };
}
function qx(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? En(new Uint8Array(e)) : En(e);
}
function dp(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return Wt(e);
    } catch (t) {
      throw new Si({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new Si({ content: e });
}
function ao(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
async function Fn({
  prompt: e,
  supportedUrls: t,
  download: o = Px()
}) {
  const n = await Dx(
    e.messages,
    o,
    t
  ), r = [
    ...e.system != null ? typeof e.system == "string" ? [{ role: "system", content: e.system }] : ao(e.system).map((s) => ({
      role: "system",
      content: s.content,
      providerOptions: s.providerOptions
    })) : [],
    ...e.messages.map(
      (s) => jx({ message: s, downloadedAssets: n })
    )
  ], a = [];
  for (const s of r) {
    if (s.role !== "tool") {
      a.push(s);
      continue;
    }
    const i = a.at(-1);
    (i == null ? void 0 : i.role) === "tool" ? i.content.push(...s.content) : a.push(s);
  }
  return a;
}
function jx({
  message: e,
  downloadedAssets: t
}) {
  const o = e.role;
  switch (o) {
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
        content: e.content.map((n) => zx(n, t)).filter((n) => n.type !== "text" || n.text !== ""),
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
          (n) => n.type !== "text" || n.text !== "" || n.providerOptions != null
        ).filter(
          (n) => n.type !== "tool-approval-request"
        ).map((n) => {
          const r = n.providerOptions;
          switch (n.type) {
            case "file": {
              const { data: a, mediaType: s } = pp(
                n.data
              );
              return {
                type: "file",
                data: a,
                filename: n.filename,
                mediaType: s ?? n.mediaType,
                providerOptions: r
              };
            }
            case "reasoning":
              return {
                type: "reasoning",
                text: n.text,
                providerOptions: r
              };
            case "text":
              return {
                type: "text",
                text: n.text,
                providerOptions: r
              };
            case "tool-call":
              return {
                type: "tool-call",
                toolCallId: n.toolCallId,
                toolName: n.toolName,
                input: n.input,
                providerExecuted: n.providerExecuted,
                providerOptions: r
              };
            case "tool-result":
              return {
                type: "tool-result",
                toolCallId: n.toolCallId,
                toolName: n.toolName,
                output: Ri(n.output),
                providerOptions: r
              };
          }
        }),
        providerOptions: e.providerOptions
      };
    case "tool":
      return {
        role: "tool",
        content: e.content.filter(
          // Only include tool-approval-response for provider-executed tools
          (n) => n.type !== "tool-approval-response" || n.providerExecuted
        ).map((n) => {
          switch (n.type) {
            case "tool-result":
              return {
                type: "tool-result",
                toolCallId: n.toolCallId,
                toolName: n.toolName,
                output: Ri(n.output),
                providerOptions: n.providerOptions
              };
            case "tool-approval-response":
              return {
                type: "tool-approval-response",
                approvalId: n.approvalId,
                approved: n.approved,
                reason: n.reason
              };
          }
        }),
        providerOptions: e.providerOptions
      };
    default: {
      const n = o;
      throw new Ix({ role: n });
    }
  }
}
async function Dx(e, t, o) {
  const n = e.filter((a) => a.role === "user").map((a) => a.content).filter(
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
    isUrlSupportedByModel: a.mediaType != null && iv({
      url: a.data.toString(),
      mediaType: a.mediaType,
      supportedUrls: o
    })
  })), r = await t(n);
  return Object.fromEntries(
    r.map(
      (a, s) => a == null ? null : [
        n[s].url.toString(),
        { data: a.data, mediaType: a.mediaType }
      ]
    ).filter((a) => a != null)
  );
}
function zx(e, t) {
  var o;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerOptions: e.providerOptions
    };
  let n;
  const r = e.type;
  switch (r) {
    case "image":
      n = e.image;
      break;
    case "file":
      n = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${r}`);
  }
  const { data: a, mediaType: s } = pp(n);
  let i = s ?? e.mediaType, u = a;
  if (u instanceof URL) {
    const c = t[u.toString()];
    c && (u = c.data, i ?? (i = c.mediaType));
  }
  switch (r) {
    case "image":
      return (u instanceof Uint8Array || typeof u == "string") && (i = (o = Co({ data: u, signatures: Nn })) != null ? o : i), {
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
function Ri(e) {
  return e.type !== "content" ? e : {
    type: "content",
    value: e.value.map((t) => t.type !== "media" ? t : t.mediaType.startsWith("image/") ? {
      type: "image-data",
      data: t.data,
      mediaType: t.mediaType
    } : {
      type: "file-data",
      data: t.data,
      mediaType: t.mediaType
    })
  };
}
async function oo({
  toolCallId: e,
  input: t,
  output: o,
  tool: n,
  errorMode: r
}) {
  return r === "text" ? { type: "error-text", value: Eo(o) } : r === "json" ? { type: "error-json", value: Mi(o) } : n != null && n.toModelOutput ? await n.toModelOutput({ toolCallId: e, input: t, output: o }) : typeof o == "string" ? { type: "text", value: o } : { type: "json", value: Mi(o) };
}
function Mi(e) {
  return e === void 0 ? null : e;
}
function so({
  maxOutputTokens: e,
  temperature: t,
  topP: o,
  topK: n,
  presencePenalty: r,
  frequencyPenalty: a,
  seed: s,
  stopSequences: i
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new Ae({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer"
      });
    if (e < 1)
      throw new Ae({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new Ae({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (o != null && typeof o != "number")
    throw new Ae({
      parameter: "topP",
      value: o,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new Ae({
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (r != null && typeof r != "number")
    throw new Ae({
      parameter: "presencePenalty",
      value: r,
      message: "presencePenalty must be a number"
    });
  if (a != null && typeof a != "number")
    throw new Ae({
      parameter: "frequencyPenalty",
      value: a,
      message: "frequencyPenalty must be a number"
    });
  if (s != null && !Number.isInteger(s))
    throw new Ae({
      parameter: "seed",
      value: s,
      message: "seed must be an integer"
    });
  return {
    maxOutputTokens: e,
    temperature: t,
    topP: o,
    topK: n,
    presencePenalty: r,
    frequencyPenalty: a,
    stopSequences: i,
    seed: s
  };
}
function Ux(e) {
  return e != null && Object.keys(e).length > 0;
}
async function mp({
  tools: e,
  toolChoice: t,
  activeTools: o
}) {
  if (!Ux(e))
    return {
      tools: void 0,
      toolChoice: void 0
    };
  const n = o != null ? Object.entries(e).filter(
    ([a]) => o.includes(a)
  ) : Object.entries(e), r = [];
  for (const [a, s] of n) {
    const i = s.type;
    switch (i) {
      case void 0:
      case "dynamic":
      case "function":
        r.push({
          type: "function",
          name: a,
          description: s.description,
          inputSchema: await Gt(s.inputSchema).jsonSchema,
          ...s.inputExamples != null ? { inputExamples: s.inputExamples } : {},
          providerOptions: s.providerOptions,
          ...s.strict != null ? { strict: s.strict } : {}
        });
        break;
      case "provider":
        r.push({
          type: "provider",
          name: a,
          id: s.id,
          args: s.args
        });
        break;
      default: {
        const u = i;
        throw new Error(`Unsupported tool type: ${u}`);
      }
    }
  }
  return {
    tools: r,
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  };
}
var Ho = Gr(
  () => te([
    cu(),
    l(),
    x(),
    K(),
    Me(l(), Ho.optional()),
    M(Ho)
  ])
), fe = Me(
  l(),
  Me(l(), Ho.optional())
), fp = p({
  type: h("text"),
  text: l(),
  providerOptions: fe.optional()
}), Zx = p({
  type: h("image"),
  image: te([cp, Sn(URL)]),
  mediaType: l().optional(),
  providerOptions: fe.optional()
}), hp = p({
  type: h("file"),
  data: te([cp, Sn(URL)]),
  filename: l().optional(),
  mediaType: l(),
  providerOptions: fe.optional()
}), Lx = p({
  type: h("reasoning"),
  text: l(),
  providerOptions: fe.optional()
}), Fx = p({
  type: h("tool-call"),
  toolCallId: l(),
  toolName: l(),
  input: ve(),
  providerOptions: fe.optional(),
  providerExecuted: K().optional()
}), Vx = xe(
  "type",
  [
    p({
      type: h("text"),
      value: l(),
      providerOptions: fe.optional()
    }),
    p({
      type: h("json"),
      value: Ho,
      providerOptions: fe.optional()
    }),
    p({
      type: h("execution-denied"),
      reason: l().optional(),
      providerOptions: fe.optional()
    }),
    p({
      type: h("error-text"),
      value: l(),
      providerOptions: fe.optional()
    }),
    p({
      type: h("error-json"),
      value: Ho,
      providerOptions: fe.optional()
    }),
    p({
      type: h("content"),
      value: M(
        te([
          p({
            type: h("text"),
            text: l(),
            providerOptions: fe.optional()
          }),
          p({
            type: h("media"),
            data: l(),
            mediaType: l()
          }),
          p({
            type: h("file-data"),
            data: l(),
            mediaType: l(),
            filename: l().optional(),
            providerOptions: fe.optional()
          }),
          p({
            type: h("file-url"),
            url: l(),
            providerOptions: fe.optional()
          }),
          p({
            type: h("file-id"),
            fileId: te([l(), Me(l(), l())]),
            providerOptions: fe.optional()
          }),
          p({
            type: h("image-data"),
            data: l(),
            mediaType: l(),
            providerOptions: fe.optional()
          }),
          p({
            type: h("image-url"),
            url: l(),
            providerOptions: fe.optional()
          }),
          p({
            type: h("image-file-id"),
            fileId: te([l(), Me(l(), l())]),
            providerOptions: fe.optional()
          }),
          p({
            type: h("custom"),
            providerOptions: fe.optional()
          })
        ])
      )
    })
  ]
), gp = p({
  type: h("tool-result"),
  toolCallId: l(),
  toolName: l(),
  output: Vx,
  providerOptions: fe.optional()
}), Jx = p({
  type: h("tool-approval-request"),
  approvalId: l(),
  toolCallId: l()
}), Gx = p({
  type: h("tool-approval-response"),
  approvalId: l(),
  approved: K(),
  reason: l().optional()
}), Bx = p(
  {
    role: h("system"),
    content: l(),
    providerOptions: fe.optional()
  }
), Hx = p({
  role: h("user"),
  content: te([
    l(),
    M(te([fp, Zx, hp]))
  ]),
  providerOptions: fe.optional()
}), Wx = p({
  role: h("assistant"),
  content: te([
    l(),
    M(
      te([
        fp,
        hp,
        Lx,
        Fx,
        gp,
        Jx
      ])
    )
  ]),
  providerOptions: fe.optional()
}), Kx = p({
  role: h("tool"),
  content: M(te([gp, Gx])),
  providerOptions: fe.optional()
}), Yx = te([
  Bx,
  Hx,
  Wx,
  Kx
]);
async function Vn(e) {
  if (e.prompt == null && e.messages == null)
    throw new Xt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new Xt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string" && !ao(e.system).every(
    (n) => typeof n == "object" && n !== null && "role" in n && n.role === "system"
  ))
    throw new Xt({
      prompt: e,
      message: "system must be a string, SystemModelMessage, or array of SystemModelMessage"
    });
  let t;
  if (e.prompt != null && typeof e.prompt == "string")
    t = [{ role: "user", content: e.prompt }];
  else if (e.prompt != null && Array.isArray(e.prompt))
    t = e.prompt;
  else if (e.messages != null)
    t = e.messages;
  else
    throw new Xt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (t.length === 0)
    throw new Xt({
      prompt: e,
      message: "messages must not be empty"
    });
  const o = await ft({
    value: t,
    schema: M(Yx)
  });
  if (!o.success)
    throw new Xt({
      prompt: e,
      message: "The messages do not match the ModelMessage[] schema.",
      cause: o.error
    });
  return {
    messages: t,
    system: e.system
  };
}
function Jn(e) {
  if (!ea.isInstance(e))
    return e;
  const t = (process == null ? void 0 : process.env.NODE_ENV) === "production", o = "https://ai-sdk.dev/unauthenticated-ai-gateway";
  return t ? new se({
    name: "GatewayError",
    message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${o}`
  }) : Object.assign(
    new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${o}\x1B[0m

`),
    { name: "GatewayAuthenticationError" }
  );
}
function it({
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
function po({
  model: e,
  settings: t,
  telemetry: o,
  headers: n
}) {
  var r;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    // settings:
    ...Object.entries(t).reduce((a, [s, i]) => (a[`ai.settings.${s}`] = i, a), {}),
    // add metadata as attributes:
    ...Object.entries((r = o == null ? void 0 : o.metadata) != null ? r : {}).reduce(
      (a, [s, i]) => (a[`ai.telemetry.metadata.${s}`] = i, a),
      {}
    ),
    // request headers
    ...Object.entries(n ?? {}).reduce((a, [s, i]) => (i !== void 0 && (a[`ai.request.headers.${s}`] = i), a), {})
  };
}
var Xx = {
  startSpan() {
    return fn;
  },
  startActiveSpan(e, t, o, n) {
    if (typeof t == "function")
      return t(fn);
    if (typeof o == "function")
      return o(fn);
    if (typeof n == "function")
      return n(fn);
  }
}, fn = {
  spanContext() {
    return Qx;
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
}, Qx = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function mo({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || rx.getTracer("ai") : Xx;
}
async function lt({
  name: e,
  tracer: t,
  attributes: o,
  fn: n,
  endWhenDone: r = !0
}) {
  return t.startActiveSpan(
    e,
    { attributes: await o },
    async (a) => {
      try {
        const s = await n(a);
        return r && a.end(), s;
      } catch (s) {
        try {
          vp(a, s);
        } finally {
          a.end();
        }
        throw s;
      }
    }
  );
}
function vp(e, t) {
  t instanceof Error ? (e.recordException({
    name: t.name,
    message: t.message,
    stack: t.stack
  }), e.setStatus({
    code: Mn.ERROR,
    message: t.message
  })) : e.setStatus({ code: Mn.ERROR });
}
async function Ce({
  telemetry: e,
  attributes: t
}) {
  if ((e == null ? void 0 : e.isEnabled) !== !0)
    return {};
  const o = {};
  for (const [n, r] of Object.entries(t))
    if (r != null) {
      if (typeof r == "object" && "input" in r && typeof r.input == "function") {
        if ((e == null ? void 0 : e.recordInputs) === !1)
          continue;
        const a = await r.input();
        a != null && (o[n] = a);
        continue;
      }
      if (typeof r == "object" && "output" in r && typeof r.output == "function") {
        if ((e == null ? void 0 : e.recordOutputs) === !1)
          continue;
        const a = await r.output();
        a != null && (o[n] = a);
        continue;
      }
      o[n] = r;
    }
  return o;
}
function Gn(e) {
  return JSON.stringify(
    e.map((t) => ({
      ...t,
      content: typeof t.content == "string" ? t.content : t.content.map(
        (o) => o.type === "file" ? {
          ...o,
          data: o.data instanceof Uint8Array ? qx(o.data) : o.data
        } : o
      )
    }))
  );
}
function Wo(e) {
  return {
    inputTokens: e.inputTokens.total,
    inputTokenDetails: {
      noCacheTokens: e.inputTokens.noCache,
      cacheReadTokens: e.inputTokens.cacheRead,
      cacheWriteTokens: e.inputTokens.cacheWrite
    },
    outputTokens: e.outputTokens.total,
    outputTokenDetails: {
      textTokens: e.outputTokens.text,
      reasoningTokens: e.outputTokens.reasoning
    },
    totalTokens: mt(
      e.inputTokens.total,
      e.outputTokens.total
    ),
    raw: e.raw,
    reasoningTokens: e.outputTokens.reasoning,
    cachedInputTokens: e.inputTokens.cacheRead
  };
}
function gn() {
  return {
    inputTokens: void 0,
    inputTokenDetails: {
      noCacheTokens: void 0,
      cacheReadTokens: void 0,
      cacheWriteTokens: void 0
    },
    outputTokens: void 0,
    outputTokenDetails: {
      textTokens: void 0,
      reasoningTokens: void 0
    },
    totalTokens: void 0,
    raw: void 0
  };
}
function _p(e, t) {
  var o, n, r, a, s, i, u, c, m, f;
  return {
    inputTokens: mt(e.inputTokens, t.inputTokens),
    inputTokenDetails: {
      noCacheTokens: mt(
        (o = e.inputTokenDetails) == null ? void 0 : o.noCacheTokens,
        (n = t.inputTokenDetails) == null ? void 0 : n.noCacheTokens
      ),
      cacheReadTokens: mt(
        (r = e.inputTokenDetails) == null ? void 0 : r.cacheReadTokens,
        (a = t.inputTokenDetails) == null ? void 0 : a.cacheReadTokens
      ),
      cacheWriteTokens: mt(
        (s = e.inputTokenDetails) == null ? void 0 : s.cacheWriteTokens,
        (i = t.inputTokenDetails) == null ? void 0 : i.cacheWriteTokens
      )
    },
    outputTokens: mt(e.outputTokens, t.outputTokens),
    outputTokenDetails: {
      textTokens: mt(
        (u = e.outputTokenDetails) == null ? void 0 : u.textTokens,
        (c = t.outputTokenDetails) == null ? void 0 : c.textTokens
      ),
      reasoningTokens: mt(
        (m = e.outputTokenDetails) == null ? void 0 : m.reasoningTokens,
        (f = t.outputTokenDetails) == null ? void 0 : f.reasoningTokens
      )
    },
    totalTokens: mt(e.totalTokens, t.totalTokens),
    reasoningTokens: mt(
      e.reasoningTokens,
      t.reasoningTokens
    ),
    cachedInputTokens: mt(
      e.cachedInputTokens,
      t.cachedInputTokens
    )
  };
}
function mt(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function eI(e, t) {
  return {
    inputTokens: mt(e.inputTokens, t.inputTokens),
    outputTokens: mt(e.outputTokens, t.outputTokens),
    totalTokens: mt(e.totalTokens, t.totalTokens)
  };
}
function No(e, t) {
  if (e === void 0 && t === void 0)
    return;
  if (e === void 0)
    return t;
  if (t === void 0)
    return e;
  const o = { ...e };
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const r = t[n];
      if (r === void 0)
        continue;
      const a = n in e ? e[n] : void 0, s = r !== null && typeof r == "object" && !Array.isArray(r) && !(r instanceof Date) && !(r instanceof RegExp), i = a != null && typeof a == "object" && !Array.isArray(a) && !(a instanceof Date) && !(a instanceof RegExp);
      s && i ? o[n] = No(
        a,
        r
      ) : o[n] = r;
    }
  return o;
}
function tI({
  error: e,
  exponentialBackoffDelay: t
}) {
  const o = e.responseHeaders;
  if (!o)
    return t;
  let n;
  const r = o["retry-after-ms"];
  if (r) {
    const s = parseFloat(r);
    Number.isNaN(s) || (n = s);
  }
  const a = o["retry-after"];
  if (a && n === void 0) {
    const s = parseFloat(a);
    Number.isNaN(s) ? n = Date.parse(a) - Date.now() : n = s * 1e3;
  }
  return n != null && !Number.isNaN(n) && 0 <= n && (n < 60 * 1e3 || n < t) ? n : t;
}
var oI = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: o = 2,
  abortSignal: n
} = {}) => async (r) => yp(r, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: o,
  abortSignal: n
});
async function yp(e, {
  maxRetries: t,
  delayInMs: o,
  backoffFactor: n,
  abortSignal: r
}, a = []) {
  try {
    return await e();
  } catch (s) {
    if (no(s) || t === 0)
      throw s;
    const i = Dn(s), u = [...a, s], c = u.length;
    if (c > t)
      throw new Ci({
        message: `Failed after ${c} attempts. Last error: ${i}`,
        reason: "maxRetriesExceeded",
        errors: u
      });
    if (s instanceof Error && Xe.isInstance(s) && s.isRetryable === !0 && c <= t)
      return await Hr(
        tI({
          error: s,
          exponentialBackoffDelay: o
        }),
        { abortSignal: r }
      ), yp(
        e,
        {
          maxRetries: t,
          delayInMs: n * o,
          backoffFactor: n,
          abortSignal: r
        },
        u
      );
    throw c === 1 ? s : new Ci({
      message: `Failed after ${c} attempts with non-retryable error: '${i}'`,
      reason: "errorNotRetryable",
      errors: u
    });
  }
}
function qt({
  maxRetries: e,
  abortSignal: t
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new Ae({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new Ae({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const o = e ?? 2;
  return {
    maxRetries: o,
    retry: oI({
      maxRetries: o,
      abortSignal: t
    })
  };
}
function bp({
  messages: e
}) {
  const t = e.at(-1);
  if ((t == null ? void 0 : t.role) != "tool")
    return {
      approvedToolApprovals: [],
      deniedToolApprovals: []
    };
  const o = {};
  for (const u of e)
    if (u.role === "assistant" && typeof u.content != "string") {
      const c = u.content;
      for (const m of c)
        m.type === "tool-call" && (o[m.toolCallId] = m);
    }
  const n = {};
  for (const u of e)
    if (u.role === "assistant" && typeof u.content != "string") {
      const c = u.content;
      for (const m of c)
        m.type === "tool-approval-request" && (n[m.approvalId] = m);
    }
  const r = {};
  for (const u of t.content)
    u.type === "tool-result" && (r[u.toolCallId] = u);
  const a = [], s = [], i = t.content.filter(
    (u) => u.type === "tool-approval-response"
  );
  for (const u of i) {
    const c = n[u.approvalId];
    if (c == null)
      throw new cx({
        approvalId: u.approvalId
      });
    if (r[c.toolCallId] != null)
      continue;
    const m = o[c.toolCallId];
    if (m == null)
      throw new ia({
        toolCallId: c.toolCallId,
        approvalId: c.approvalId
      });
    const f = {
      approvalRequest: c,
      approvalResponse: u,
      toolCall: m
    };
    u.approved ? a.push(f) : s.push(f);
  }
  return { approvedToolApprovals: a, deniedToolApprovals: s };
}
async function la({
  toolCall: e,
  tools: t,
  tracer: o,
  telemetry: n,
  messages: r,
  abortSignal: a,
  experimental_context: s,
  onPreliminaryToolResult: i
}) {
  const { toolName: u, toolCallId: c, input: m } = e, f = t == null ? void 0 : t[u];
  if ((f == null ? void 0 : f.execute) != null)
    return lt({
      name: "ai.toolCall",
      attributes: Ce({
        telemetry: n,
        attributes: {
          ...it({
            operationId: "ai.toolCall",
            telemetry: n
          }),
          "ai.toolCall.name": u,
          "ai.toolCall.id": c,
          "ai.toolCall.args": {
            output: () => JSON.stringify(m)
          }
        }
      }),
      tracer: o,
      fn: async (d) => {
        let g;
        try {
          const _ = i_({
            execute: f.execute.bind(f),
            input: m,
            options: {
              toolCallId: c,
              messages: r,
              abortSignal: a,
              experimental_context: s
            }
          });
          for await (const v of _)
            v.type === "preliminary" ? i == null || i({
              ...e,
              type: "tool-result",
              output: v.output,
              preliminary: !0
            }) : g = v.output;
        } catch (_) {
          return vp(d, _), {
            type: "tool-error",
            toolCallId: c,
            toolName: u,
            input: m,
            error: _,
            dynamic: f.type === "dynamic",
            ...e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}
          };
        }
        try {
          d.setAttributes(
            await Ce({
              telemetry: n,
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
          toolCallId: c,
          toolName: u,
          input: m,
          output: g,
          dynamic: f.type === "dynamic",
          ...e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}
        };
      }
    });
}
function Or(e) {
  const t = e.filter(
    (o) => o.type === "text"
  );
  if (t.length !== 0)
    return t.map((o) => o.text).join("");
}
var Bn = class {
  constructor({
    data: e,
    mediaType: t
  }) {
    const o = e instanceof Uint8Array;
    this.base64Data = o ? void 0 : e, this.uint8ArrayData = o ? e : void 0, this.mediaType = t;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = En(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = Wt(this.base64Data)), this.uint8ArrayData;
  }
}, nI = class extends Bn {
  constructor(e) {
    super(e), this.type = "file";
  }
};
async function wp({
  tool: e,
  toolCall: t,
  messages: o,
  experimental_context: n
}) {
  return e.needsApproval == null ? !1 : typeof e.needsApproval == "boolean" ? e.needsApproval : await e.needsApproval(t.input, {
    toolCallId: t.toolCallId,
    messages: o,
    experimental_context: n
  });
}
var rI = {};
sx(rI, {
  array: () => iI,
  choice: () => lI,
  json: () => uI,
  object: () => sI,
  text: () => On
});
function aI(e) {
  const t = ["ROOT"];
  let o = -1, n = null;
  function r(u, c, m) {
    switch (u) {
      case '"': {
        o = c, t.pop(), t.push(m), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        o = c, n = c, t.pop(), t.push(m), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(m), t.push("INSIDE_NUMBER");
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
        o = c, t.pop(), t.push(m), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        o = c, t.pop(), t.push(m), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        o = c, t.pop(), t.push(m), t.push("INSIDE_ARRAY_START");
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
        o = c, t.pop();
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
        o = c, t.pop();
        break;
      }
    }
  }
  for (let u = 0; u < e.length; u++) {
    const c = e[u];
    switch (t[t.length - 1]) {
      case "ROOT":
        r(c, u, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            o = u, t.pop();
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
        r(c, u, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        a(c, u);
        break;
      }
      case "INSIDE_STRING": {
        switch (c) {
          case '"': {
            t.pop(), o = u;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            o = u;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (c) {
          case "]": {
            o = u, t.pop();
            break;
          }
          default: {
            o = u, r(c, u, "INSIDE_ARRAY_AFTER_VALUE");
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
            o = u, t.pop();
            break;
          }
          default: {
            o = u;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        r(c, u, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), o = u;
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
            o = u;
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
        const f = e.substring(n, u + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? a(c, u) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && s(c, u)) : o = u;
        break;
      }
    }
  }
  let i = e.slice(0, o + 1);
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
        const m = e.substring(n, e.length);
        "true".startsWith(m) ? i += "true".slice(m.length) : "false".startsWith(m) ? i += "false".slice(m.length) : "null".startsWith(m) && (i += "null".slice(m.length));
      }
    }
  return i;
}
async function Oo(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = await xt({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = await xt({ text: aI(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var On = () => ({
  responseFormat: Promise.resolve({ type: "text" }),
  async parseCompleteOutput({ text: e }) {
    return e;
  },
  async parsePartialOutput({ text: e }) {
    return { partial: e };
  }
}), sI = ({
  schema: e,
  name: t,
  description: o
}) => {
  const n = Gt(e);
  return {
    responseFormat: De(n.jsonSchema).then((r) => ({
      type: "json",
      schema: r,
      ...t != null && { name: t },
      ...o != null && { description: o }
    })),
    async parseCompleteOutput({ text: r }, a) {
      const s = await xt({ text: r });
      if (!s.success)
        throw new _t({
          message: "No object generated: could not parse the response.",
          cause: s.error,
          text: r,
          response: a.response,
          usage: a.usage,
          finishReason: a.finishReason
        });
      const i = await ft({
        value: s.value,
        schema: n
      });
      if (!i.success)
        throw new _t({
          message: "No object generated: response did not match schema.",
          cause: i.error,
          text: r,
          response: a.response,
          usage: a.usage,
          finishReason: a.finishReason
        });
      return i.value;
    },
    async parsePartialOutput({ text: r }) {
      const a = await Oo(r);
      switch (a.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: a.value
          };
      }
    }
  };
}, iI = ({
  element: e,
  name: t,
  description: o
}) => {
  const n = Gt(e);
  return {
    // JSON schema that describes an array of elements:
    responseFormat: De(n.jsonSchema).then((r) => {
      const { $schema: a, ...s } = r;
      return {
        type: "json",
        schema: {
          $schema: "http://json-schema.org/draft-07/schema#",
          type: "object",
          properties: {
            elements: { type: "array", items: s }
          },
          required: ["elements"],
          additionalProperties: !1
        },
        ...t != null && { name: t },
        ...o != null && { description: o }
      };
    }),
    async parseCompleteOutput({ text: r }, a) {
      const s = await xt({ text: r });
      if (!s.success)
        throw new _t({
          message: "No object generated: could not parse the response.",
          cause: s.error,
          text: r,
          response: a.response,
          usage: a.usage,
          finishReason: a.finishReason
        });
      const i = s.value;
      if (i == null || typeof i != "object" || !("elements" in i) || !Array.isArray(i.elements))
        throw new _t({
          message: "No object generated: response did not match schema.",
          cause: new st({
            value: i,
            cause: "response must be an object with an elements array"
          }),
          text: r,
          response: a.response,
          usage: a.usage,
          finishReason: a.finishReason
        });
      for (const u of i.elements) {
        const c = await ft({
          value: u,
          schema: n
        });
        if (!c.success)
          throw new _t({
            message: "No object generated: response did not match schema.",
            cause: c.error,
            text: r,
            response: a.response,
            usage: a.usage,
            finishReason: a.finishReason
          });
      }
      return i.elements;
    },
    async parsePartialOutput({ text: r }) {
      const a = await Oo(r);
      switch (a.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse": {
          const s = a.value;
          if (s == null || typeof s != "object" || !("elements" in s) || !Array.isArray(s.elements))
            return;
          const i = a.state === "repaired-parse" && s.elements.length > 0 ? s.elements.slice(0, -1) : s.elements, u = [];
          for (const c of i) {
            const m = await ft({
              value: c,
              schema: n
            });
            m.success && u.push(m.value);
          }
          return { partial: u };
        }
      }
    }
  };
}, lI = ({
  options: e,
  name: t,
  description: o
}) => ({
  // JSON schema that describes an enumeration:
  responseFormat: Promise.resolve({
    type: "json",
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        result: { type: "string", enum: e }
      },
      required: ["result"],
      additionalProperties: !1
    },
    ...t != null && { name: t },
    ...o != null && { description: o }
  }),
  async parseCompleteOutput({ text: n }, r) {
    const a = await xt({ text: n });
    if (!a.success)
      throw new _t({
        message: "No object generated: could not parse the response.",
        cause: a.error,
        text: n,
        response: r.response,
        usage: r.usage,
        finishReason: r.finishReason
      });
    const s = a.value;
    if (s == null || typeof s != "object" || !("result" in s) || typeof s.result != "string" || !e.includes(s.result))
      throw new _t({
        message: "No object generated: response did not match schema.",
        cause: new st({
          value: s,
          cause: "response must be an object that contains a choice value."
        }),
        text: n,
        response: r.response,
        usage: r.usage,
        finishReason: r.finishReason
      });
    return s.result;
  },
  async parsePartialOutput({ text: n }) {
    const r = await Oo(n);
    switch (r.state) {
      case "failed-parse":
      case "undefined-input":
        return;
      case "repaired-parse":
      case "successful-parse": {
        const a = r.value;
        if (a == null || typeof a != "object" || !("result" in a) || typeof a.result != "string")
          return;
        const s = e.filter(
          (i) => i.startsWith(a.result)
        );
        return r.state === "successful-parse" ? s.includes(a.result) ? { partial: a.result } : void 0 : s.length === 1 ? { partial: s[0] } : void 0;
      }
    }
  }
}), uI = ({
  name: e,
  description: t
} = {}) => ({
  responseFormat: Promise.resolve({
    type: "json",
    ...e != null && { name: e },
    ...t != null && { description: t }
  }),
  async parseCompleteOutput({ text: o }, n) {
    const r = await xt({ text: o });
    if (!r.success)
      throw new _t({
        message: "No object generated: could not parse the response.",
        cause: r.error,
        text: o,
        response: n.response,
        usage: n.usage,
        finishReason: n.finishReason
      });
    return r.value;
  },
  async parsePartialOutput({ text: o }) {
    const n = await Oo(o);
    switch (n.state) {
      case "failed-parse":
      case "undefined-input":
        return;
      case "repaired-parse":
      case "successful-parse":
        return n.value === void 0 ? void 0 : { partial: n.value };
    }
  }
});
async function xp({
  toolCall: e,
  tools: t,
  repairToolCall: o,
  system: n,
  messages: r
}) {
  var a;
  try {
    if (t == null) {
      if (e.providerExecuted && e.dynamic)
        return await Ip(e);
      throw new Nr({ toolName: e.toolName });
    }
    try {
      return await Ni({ toolCall: e, tools: t });
    } catch (s) {
      if (o == null || !(Nr.isInstance(s) || sa.isInstance(s)))
        throw s;
      let i = null;
      try {
        i = await o({
          toolCall: e,
          tools: t,
          inputSchema: async ({ toolName: u }) => {
            const { inputSchema: c } = t[u];
            return await Gt(c).jsonSchema;
          },
          system: n,
          messages: r,
          error: s
        });
      } catch (u) {
        throw new bx({
          cause: u,
          originalError: s
        });
      }
      if (i == null)
        throw s;
      return await Ni({ toolCall: i, tools: t });
    }
  } catch (s) {
    const i = await xt({ text: e.input }), u = i.success ? i.value : e.input;
    return {
      type: "tool-call",
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      input: u,
      dynamic: !0,
      invalid: !0,
      error: s,
      title: (a = t == null ? void 0 : t[e.toolName]) == null ? void 0 : a.title,
      providerExecuted: e.providerExecuted,
      providerMetadata: e.providerMetadata
    };
  }
}
async function Ip(e) {
  const t = e.input.trim() === "" ? { success: !0, value: {} } : await xt({ text: e.input });
  if (t.success === !1)
    throw new sa({
      toolName: e.toolName,
      toolInput: e.input,
      cause: t.error
    });
  return {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    input: t.value,
    providerExecuted: !0,
    dynamic: !0,
    providerMetadata: e.providerMetadata
  };
}
async function Ni({
  toolCall: e,
  tools: t
}) {
  const o = e.toolName, n = t[o];
  if (n == null) {
    if (e.providerExecuted && e.dynamic)
      return await Ip(e);
    throw new Nr({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  }
  const r = Gt(n.inputSchema), a = e.input.trim() === "" ? await ft({ value: {}, schema: r }) : await xt({ text: e.input, schema: r });
  if (a.success === !1)
    throw new sa({
      toolName: o,
      toolInput: e.input,
      cause: a.error
    });
  return n.type === "dynamic" ? {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    input: a.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata,
    dynamic: !0,
    title: n.title
  } : {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: o,
    input: a.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata,
    title: n.title
  };
}
var Tp = class {
  constructor({
    content: e,
    finishReason: t,
    rawFinishReason: o,
    usage: n,
    warnings: r,
    request: a,
    response: s,
    providerMetadata: i
  }) {
    this.content = e, this.finishReason = t, this.rawFinishReason = o, this.usage = n, this.warnings = r, this.request = a, this.response = s, this.providerMetadata = i;
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
function ua(e) {
  return ({ steps: t }) => t.length === e;
}
function pT(e) {
  return ({ steps: t }) => {
    var o, n, r;
    return (r = (n = (o = t[t.length - 1]) == null ? void 0 : o.toolCalls) == null ? void 0 : n.some(
      (a) => a.toolName === e
    )) != null ? r : !1;
  };
}
async function kp({
  stopConditions: e,
  steps: t
}) {
  return (await Promise.all(e.map((o) => o({ steps: t })))).some((o) => o);
}
async function Ar({
  content: e,
  tools: t
}) {
  const o = [], n = [];
  for (const a of e)
    if (a.type !== "source" && !((a.type === "tool-result" || a.type === "tool-error") && !a.providerExecuted) && !(a.type === "text" && a.text.length === 0))
      switch (a.type) {
        case "text":
          n.push({
            type: "text",
            text: a.text,
            providerOptions: a.providerMetadata
          });
          break;
        case "reasoning":
          n.push({
            type: "reasoning",
            text: a.text,
            providerOptions: a.providerMetadata
          });
          break;
        case "file":
          n.push({
            type: "file",
            data: a.file.base64,
            mediaType: a.file.mediaType,
            providerOptions: a.providerMetadata
          });
          break;
        case "tool-call":
          n.push({
            type: "tool-call",
            toolCallId: a.toolCallId,
            toolName: a.toolName,
            input: a.input,
            providerExecuted: a.providerExecuted,
            providerOptions: a.providerMetadata
          });
          break;
        case "tool-result": {
          const s = await oo({
            toolCallId: a.toolCallId,
            input: a.input,
            tool: t == null ? void 0 : t[a.toolName],
            output: a.output,
            errorMode: "none"
          });
          n.push({
            type: "tool-result",
            toolCallId: a.toolCallId,
            toolName: a.toolName,
            output: s,
            providerOptions: a.providerMetadata
          });
          break;
        }
        case "tool-error": {
          const s = await oo({
            toolCallId: a.toolCallId,
            input: a.input,
            tool: t == null ? void 0 : t[a.toolName],
            output: a.error,
            errorMode: "json"
          });
          n.push({
            type: "tool-result",
            toolCallId: a.toolCallId,
            toolName: a.toolName,
            output: s,
            providerOptions: a.providerMetadata
          });
          break;
        }
        case "tool-approval-request":
          n.push({
            type: "tool-approval-request",
            approvalId: a.approvalId,
            toolCallId: a.toolCall.toolCallId
          });
          break;
      }
  n.length > 0 && o.push({
    role: "assistant",
    content: n
  });
  const r = [];
  for (const a of e) {
    if (!(a.type === "tool-result" || a.type === "tool-error") || a.providerExecuted)
      continue;
    const s = await oo({
      toolCallId: a.toolCallId,
      input: a.input,
      tool: t == null ? void 0 : t[a.toolName],
      output: a.type === "tool-result" ? a.output : a.error,
      errorMode: a.type === "tool-error" ? "text" : "none"
    });
    r.push({
      type: "tool-result",
      toolCallId: a.toolCallId,
      toolName: a.toolName,
      output: s,
      ...a.providerMetadata != null ? { providerOptions: a.providerMetadata } : {}
    });
  }
  return r.length > 0 && o.push({
    role: "tool",
    content: r
  }), o;
}
var cI = Ko({
  prefix: "aitxt",
  size: 24
});
async function pI({
  model: e,
  tools: t,
  toolChoice: o,
  system: n,
  prompt: r,
  messages: a,
  maxRetries: s,
  abortSignal: i,
  headers: u,
  stopWhen: c = ua(1),
  experimental_output: m,
  output: f = m,
  experimental_telemetry: d,
  providerOptions: g,
  experimental_activeTools: _,
  activeTools: v = _,
  experimental_prepareStep: y,
  prepareStep: S = y,
  experimental_repairToolCall: C,
  experimental_download: w,
  experimental_context: E,
  _internal: {
    generateId: k = cI,
    currentDate: T = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: I,
  onFinish: L,
  ...P
}) {
  const q = So(e), N = ao(c), { maxRetries: j, retry: A } = qt({
    maxRetries: s,
    abortSignal: i
  }), D = so(P), U = tt(
    u ?? {},
    `ai/${Mt}`
  ), ne = po({
    model: q,
    telemetry: d,
    headers: U,
    settings: { ...D, maxRetries: j }
  }), V = await Vn({
    system: n,
    prompt: r,
    messages: a
  }), B = mo(d);
  try {
    return await lt({
      name: "ai.generateText",
      attributes: Ce({
        telemetry: d,
        attributes: {
          ...it({
            operationId: "ai.generateText",
            telemetry: d
          }),
          ...ne,
          // model:
          "ai.model.provider": q.provider,
          "ai.model.id": q.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: n, prompt: r, messages: a })
          }
        }
      }),
      tracer: B,
      fn: async (ue) => {
        var W, X, z, we, Q, oe, O, R;
        const ae = V.messages, Z = [], { approvedToolApprovals: ce, deniedToolApprovals: H } = bp({ messages: ae }), Ie = ce.filter(
          (b) => !b.toolCall.providerExecuted
        );
        if (H.length > 0 || Ie.length > 0) {
          const b = await Oi({
            toolCalls: Ie.map(
              (pe) => pe.toolCall
            ),
            tools: t,
            tracer: B,
            telemetry: d,
            messages: ae,
            abortSignal: i,
            experimental_context: E
          }), F = [];
          for (const pe of b) {
            const Be = await oo({
              toolCallId: pe.toolCallId,
              input: pe.input,
              tool: t == null ? void 0 : t[pe.toolName],
              output: pe.type === "tool-result" ? pe.output : pe.error,
              errorMode: pe.type === "tool-error" ? "json" : "none"
            });
            F.push({
              type: "tool-result",
              toolCallId: pe.toolCallId,
              toolName: pe.toolName,
              output: Be
            });
          }
          for (const pe of H)
            F.push({
              type: "tool-result",
              toolCallId: pe.toolCall.toolCallId,
              toolName: pe.toolCall.toolName,
              output: {
                type: "execution-denied",
                reason: pe.approvalResponse.reason,
                // For provider-executed tools, include approvalId so provider can correlate
                ...pe.toolCall.providerExecuted && {
                  providerOptions: {
                    openai: {
                      approvalId: pe.approvalResponse.approvalId
                    }
                  }
                }
              }
            });
          Z.push({
            role: "tool",
            content: F
          });
        }
        const Se = [
          ...ce,
          ...H
        ].filter((b) => b.toolCall.providerExecuted);
        Se.length > 0 && Z.push({
          role: "tool",
          content: Se.map(
            (b) => ({
              type: "tool-approval-response",
              approvalId: b.approvalResponse.approvalId,
              approved: b.approvalResponse.approved,
              reason: b.approvalResponse.reason,
              providerExecuted: !0
            })
          )
        });
        const be = so(P);
        let _e, ee = [], ie = [];
        const Te = [], he = /* @__PURE__ */ new Map();
        do {
          const b = [...ae, ...Z], F = await (S == null ? void 0 : S({
            model: q,
            steps: Te,
            stepNumber: Te.length,
            messages: b,
            experimental_context: E
          })), pe = So(
            (W = F == null ? void 0 : F.model) != null ? W : q
          ), Be = await Fn({
            prompt: {
              system: (X = F == null ? void 0 : F.system) != null ? X : V.system,
              messages: (z = F == null ? void 0 : F.messages) != null ? z : b
            },
            supportedUrls: await pe.supportedUrls,
            download: w
          });
          E = (we = F == null ? void 0 : F.experimental_context) != null ? we : E;
          const { toolChoice: Ke, tools: Ut } = await mp({
            tools: t,
            toolChoice: (Q = F == null ? void 0 : F.toolChoice) != null ? Q : o,
            activeTools: (oe = F == null ? void 0 : F.activeTools) != null ? oe : v
          });
          _e = await A(
            () => {
              var de;
              return lt({
                name: "ai.generateText.doGenerate",
                attributes: Ce({
                  telemetry: d,
                  attributes: {
                    ...it({
                      operationId: "ai.generateText.doGenerate",
                      telemetry: d
                    }),
                    ...ne,
                    // model:
                    "ai.model.provider": pe.provider,
                    "ai.model.id": pe.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: () => Gn(Be)
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: () => Ut == null ? void 0 : Ut.map((He) => JSON.stringify(He))
                    },
                    "ai.prompt.toolChoice": {
                      input: () => Ke != null ? JSON.stringify(Ke) : void 0
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": pe.provider,
                    "gen_ai.request.model": pe.modelId,
                    "gen_ai.request.frequency_penalty": P.frequencyPenalty,
                    "gen_ai.request.max_tokens": P.maxOutputTokens,
                    "gen_ai.request.presence_penalty": P.presencePenalty,
                    "gen_ai.request.stop_sequences": P.stopSequences,
                    "gen_ai.request.temperature": (de = P.temperature) != null ? de : void 0,
                    "gen_ai.request.top_k": P.topK,
                    "gen_ai.request.top_p": P.topP
                  }
                }),
                tracer: B,
                fn: async (He) => {
                  var fo, jt, ho, rn, an, Ao, $o, Dt;
                  const sn = No(
                    g,
                    F == null ? void 0 : F.providerOptions
                  ), ot = await pe.doGenerate({
                    ...be,
                    tools: Ut,
                    toolChoice: Ke,
                    responseFormat: await (f == null ? void 0 : f.responseFormat),
                    prompt: Be,
                    providerOptions: sn,
                    abortSignal: i,
                    headers: U
                  }), Lt = {
                    id: (jt = (fo = ot.response) == null ? void 0 : fo.id) != null ? jt : k(),
                    timestamp: (rn = (ho = ot.response) == null ? void 0 : ho.timestamp) != null ? rn : T(),
                    modelId: (Ao = (an = ot.response) == null ? void 0 : an.modelId) != null ? Ao : pe.modelId,
                    headers: ($o = ot.response) == null ? void 0 : $o.headers,
                    body: (Dt = ot.response) == null ? void 0 : Dt.body
                  };
                  return He.setAttributes(
                    await Ce({
                      telemetry: d,
                      attributes: {
                        "ai.response.finishReason": ot.finishReason.unified,
                        "ai.response.text": {
                          output: () => Or(ot.content)
                        },
                        "ai.response.toolCalls": {
                          output: () => {
                            const Ft = Ai(ot.content);
                            return Ft == null ? void 0 : JSON.stringify(Ft);
                          }
                        },
                        "ai.response.id": Lt.id,
                        "ai.response.model": Lt.modelId,
                        "ai.response.timestamp": Lt.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          ot.providerMetadata
                        ),
                        // TODO rename telemetry attributes to inputTokens and outputTokens
                        "ai.usage.promptTokens": ot.usage.inputTokens.total,
                        "ai.usage.completionTokens": ot.usage.outputTokens.total,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [
                          ot.finishReason.unified
                        ],
                        "gen_ai.response.id": Lt.id,
                        "gen_ai.response.model": Lt.modelId,
                        "gen_ai.usage.input_tokens": ot.usage.inputTokens.total,
                        "gen_ai.usage.output_tokens": ot.usage.outputTokens.total
                      }
                    })
                  ), { ...ot, response: Lt };
                }
              });
            }
          );
          const Fe = await Promise.all(
            _e.content.filter(
              (de) => de.type === "tool-call"
            ).map(
              (de) => xp({
                toolCall: de,
                tools: t,
                repairToolCall: C,
                system: n,
                messages: b
              })
            )
          ), Ye = {};
          for (const de of Fe) {
            if (de.invalid)
              continue;
            const He = t == null ? void 0 : t[de.toolName];
            He != null && ((He == null ? void 0 : He.onInputAvailable) != null && await He.onInputAvailable({
              input: de.input,
              toolCallId: de.toolCallId,
              messages: b,
              abortSignal: i,
              experimental_context: E
            }), await wp({
              tool: He,
              toolCall: de,
              messages: b,
              experimental_context: E
            }) && (Ye[de.toolCallId] = {
              type: "tool-approval-request",
              approvalId: k(),
              toolCall: de
            }));
          }
          const Ve = Fe.filter(
            (de) => de.invalid && de.dynamic
          );
          ie = [];
          for (const de of Ve)
            ie.push({
              type: "tool-error",
              toolCallId: de.toolCallId,
              toolName: de.toolName,
              input: de.input,
              error: Dn(de.error),
              dynamic: !0
            });
          ee = Fe.filter(
            (de) => !de.providerExecuted
          ), t != null && ie.push(
            ...await Oi({
              toolCalls: ee.filter(
                (de) => !de.invalid && Ye[de.toolCallId] == null
              ),
              tools: t,
              tracer: B,
              telemetry: d,
              messages: b,
              abortSignal: i,
              experimental_context: E
            })
          );
          for (const de of Fe) {
            if (!de.providerExecuted)
              continue;
            const He = t == null ? void 0 : t[de.toolName];
            (He == null ? void 0 : He.type) === "provider" && He.supportsDeferredResults && (_e.content.some(
              (jt) => jt.type === "tool-result" && jt.toolCallId === de.toolCallId
            ) || he.set(de.toolCallId, {
              toolName: de.toolName
            }));
          }
          for (const de of _e.content)
            de.type === "tool-result" && he.delete(de.toolCallId);
          const Kt = mI({
            content: _e.content,
            toolCalls: Fe,
            toolOutputs: ie,
            toolApprovalRequests: Object.values(Ye),
            tools: t
          });
          Z.push(
            ...await Ar({
              content: Kt,
              tools: t
            })
          );
          const Zt = new Tp({
            content: Kt,
            finishReason: _e.finishReason.unified,
            rawFinishReason: _e.finishReason.raw,
            usage: Wo(_e.usage),
            warnings: _e.warnings,
            providerMetadata: _e.providerMetadata,
            request: (O = _e.request) != null ? O : {},
            response: {
              ..._e.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(Z)
            }
          });
          It({
            warnings: (R = _e.warnings) != null ? R : [],
            provider: pe.provider,
            model: pe.modelId
          }), Te.push(Zt), await (I == null ? void 0 : I(Zt));
        } while (
          // Continue if:
          // 1. There are client tool calls that have all been executed, OR
          // 2. There are pending deferred results from provider-executed tools
          (ee.length > 0 && ie.length === ee.length || he.size > 0) && // continue until a stop condition is met:
          !await kp({ stopConditions: N, steps: Te })
        );
        ue.setAttributes(
          await Ce({
            telemetry: d,
            attributes: {
              "ai.response.finishReason": _e.finishReason.unified,
              "ai.response.text": {
                output: () => Or(_e.content)
              },
              "ai.response.toolCalls": {
                output: () => {
                  const b = Ai(_e.content);
                  return b == null ? void 0 : JSON.stringify(b);
                }
              },
              "ai.response.providerMetadata": JSON.stringify(
                _e.providerMetadata
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": _e.usage.inputTokens.total,
              "ai.usage.completionTokens": _e.usage.outputTokens.total
            }
          })
        );
        const ge = Te[Te.length - 1], je = Te.reduce(
          (b, F) => _p(b, F.usage),
          {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0,
            reasoningTokens: void 0,
            cachedInputTokens: void 0
          }
        );
        await (L == null ? void 0 : L({
          finishReason: ge.finishReason,
          rawFinishReason: ge.rawFinishReason,
          usage: ge.usage,
          content: ge.content,
          text: ge.text,
          reasoningText: ge.reasoningText,
          reasoning: ge.reasoning,
          files: ge.files,
          sources: ge.sources,
          toolCalls: ge.toolCalls,
          staticToolCalls: ge.staticToolCalls,
          dynamicToolCalls: ge.dynamicToolCalls,
          toolResults: ge.toolResults,
          staticToolResults: ge.staticToolResults,
          dynamicToolResults: ge.dynamicToolResults,
          request: ge.request,
          response: ge.response,
          warnings: ge.warnings,
          providerMetadata: ge.providerMetadata,
          steps: Te,
          totalUsage: je,
          experimental_context: E
        }));
        let Y;
        return ge.finishReason === "stop" && (Y = await (f ?? On()).parseCompleteOutput(
          { text: ge.text },
          {
            response: ge.response,
            usage: ge.usage,
            finishReason: ge.finishReason
          }
        )), new dI({
          steps: Te,
          totalUsage: je,
          output: Y
        });
      }
    });
  } catch (ue) {
    throw Jn(ue);
  }
}
async function Oi({
  toolCalls: e,
  tools: t,
  tracer: o,
  telemetry: n,
  messages: r,
  abortSignal: a,
  experimental_context: s
}) {
  return (await Promise.all(
    e.map(
      async (u) => la({
        toolCall: u,
        tools: t,
        tracer: o,
        telemetry: n,
        messages: r,
        abortSignal: a,
        experimental_context: s
      })
    )
  )).filter(
    (u) => u != null
  );
}
var dI = class {
  constructor(e) {
    this.steps = e.steps, this._output = e.output, this.totalUsage = e.totalUsage;
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
  get rawFinishReason() {
    return this.finalStep.rawFinishReason;
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
  get experimental_output() {
    return this.output;
  }
  get output() {
    if (this._output == null)
      throw new $c();
    return this._output;
  }
};
function Ai(e) {
  const t = e.filter(
    (o) => o.type === "tool-call"
  );
  if (t.length !== 0)
    return t.map((o) => ({
      toolCallId: o.toolCallId,
      toolName: o.toolName,
      input: o.input
    }));
}
function mI({
  content: e,
  toolCalls: t,
  toolOutputs: o,
  toolApprovalRequests: n,
  tools: r
}) {
  const a = [];
  for (const s of e)
    switch (s.type) {
      case "text":
      case "reasoning":
      case "source":
        a.push(s);
        break;
      case "file": {
        a.push({
          type: "file",
          file: new Bn(s),
          ...s.providerMetadata != null ? { providerMetadata: s.providerMetadata } : {}
        });
        break;
      }
      case "tool-call": {
        a.push(
          t.find((i) => i.toolCallId === s.toolCallId)
        );
        break;
      }
      case "tool-result": {
        const i = t.find(
          (u) => u.toolCallId === s.toolCallId
        );
        if (i == null) {
          const u = r == null ? void 0 : r[s.toolName];
          if (!((u == null ? void 0 : u.type) === "provider" && u.supportsDeferredResults))
            throw new Error(`Tool call ${s.toolCallId} not found.`);
          s.isError ? a.push({
            type: "tool-error",
            toolCallId: s.toolCallId,
            toolName: s.toolName,
            input: void 0,
            error: s.result,
            providerExecuted: !0,
            dynamic: s.dynamic
          }) : a.push({
            type: "tool-result",
            toolCallId: s.toolCallId,
            toolName: s.toolName,
            input: void 0,
            output: s.result,
            providerExecuted: !0,
            dynamic: s.dynamic
          });
          break;
        }
        s.isError ? a.push({
          type: "tool-error",
          toolCallId: s.toolCallId,
          toolName: s.toolName,
          input: i.input,
          error: s.result,
          providerExecuted: !0,
          dynamic: i.dynamic
        }) : a.push({
          type: "tool-result",
          toolCallId: s.toolCallId,
          toolName: s.toolName,
          input: i.input,
          output: s.result,
          providerExecuted: !0,
          dynamic: i.dynamic
        });
        break;
      }
      case "tool-approval-request": {
        const i = t.find(
          (u) => u.toolCallId === s.toolCallId
        );
        if (i == null)
          throw new ia({
            toolCallId: s.toolCallId,
            approvalId: s.approvalId
          });
        a.push({
          type: "tool-approval-request",
          approvalId: s.approvalId,
          toolCall: i
        });
        break;
      }
    }
  return [...a, ...o, ...n];
}
function nn(e, t) {
  const o = new Headers(e ?? {});
  for (const [n, r] of Object.entries(t))
    o.has(n) || o.set(n, r);
  return o;
}
function Sp({
  status: e,
  statusText: t,
  headers: o,
  textStream: n
}) {
  return new Response(n.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: nn(o, {
      "content-type": "text/plain; charset=utf-8"
    })
  });
}
function Cp({
  response: e,
  status: t,
  statusText: o,
  headers: n,
  stream: r
}) {
  const a = t ?? 200;
  o !== void 0 ? e.writeHead(a, o, n) : e.writeHead(a, n);
  const s = r.getReader();
  (async () => {
    try {
      for (; ; ) {
        const { done: u, value: c } = await s.read();
        if (u)
          break;
        e.write(c) || await new Promise((f) => {
          e.once("drain", f);
        });
      }
    } catch (u) {
      throw u;
    } finally {
      e.end();
    }
  })();
}
function Ep({
  response: e,
  status: t,
  statusText: o,
  headers: n,
  textStream: r
}) {
  Cp({
    response: e,
    status: t,
    statusText: o,
    headers: Object.fromEntries(
      nn(n, {
        "content-type": "text/plain; charset=utf-8"
      }).entries()
    ),
    stream: r.pipeThrough(new TextEncoderStream())
  });
}
var Rp = class extends TransformStream {
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
}, Mp = {
  "content-type": "text/event-stream",
  "cache-control": "no-cache",
  connection: "keep-alive",
  "x-vercel-ai-ui-message-stream": "v1",
  "x-accel-buffering": "no"
  // disable nginx buffering
};
function Np({
  status: e,
  statusText: t,
  headers: o,
  stream: n,
  consumeSseStream: r
}) {
  let a = n.pipeThrough(new Rp());
  if (r) {
    const [s, i] = a.tee();
    a = s, r({ stream: i });
  }
  return new Response(a.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: nn(o, Mp)
  });
}
function fI({
  originalMessages: e,
  responseMessageId: t
}) {
  if (e == null)
    return;
  const o = e[e.length - 1];
  return (o == null ? void 0 : o.role) === "assistant" ? o.id : typeof t == "function" ? t() : t;
}
var Op = G(
  () => J(
    te([
      Pe({
        type: h("text-start"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("text-delta"),
        id: l(),
        delta: l(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("text-end"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("error"),
        errorText: l()
      }),
      Pe({
        type: h("tool-input-start"),
        toolCallId: l(),
        toolName: l(),
        providerExecuted: K().optional(),
        dynamic: K().optional(),
        title: l().optional()
      }),
      Pe({
        type: h("tool-input-delta"),
        toolCallId: l(),
        inputTextDelta: l()
      }),
      Pe({
        type: h("tool-input-available"),
        toolCallId: l(),
        toolName: l(),
        input: ve(),
        providerExecuted: K().optional(),
        providerMetadata: fe.optional(),
        dynamic: K().optional(),
        title: l().optional()
      }),
      Pe({
        type: h("tool-input-error"),
        toolCallId: l(),
        toolName: l(),
        input: ve(),
        providerExecuted: K().optional(),
        providerMetadata: fe.optional(),
        dynamic: K().optional(),
        errorText: l(),
        title: l().optional()
      }),
      Pe({
        type: h("tool-approval-request"),
        approvalId: l(),
        toolCallId: l()
      }),
      Pe({
        type: h("tool-output-available"),
        toolCallId: l(),
        output: ve(),
        providerExecuted: K().optional(),
        dynamic: K().optional(),
        preliminary: K().optional()
      }),
      Pe({
        type: h("tool-output-error"),
        toolCallId: l(),
        errorText: l(),
        providerExecuted: K().optional(),
        dynamic: K().optional()
      }),
      Pe({
        type: h("tool-output-denied"),
        toolCallId: l()
      }),
      Pe({
        type: h("reasoning-start"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("reasoning-delta"),
        id: l(),
        delta: l(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("reasoning-end"),
        id: l(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("source-url"),
        sourceId: l(),
        url: l(),
        title: l().optional(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("source-document"),
        sourceId: l(),
        mediaType: l(),
        title: l(),
        filename: l().optional(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: h("file"),
        url: l(),
        mediaType: l(),
        providerMetadata: fe.optional()
      }),
      Pe({
        type: fu(
          (e) => typeof e == "string" && e.startsWith("data-"),
          { message: 'Type must start with "data-"' }
        ),
        id: l().optional(),
        data: ve(),
        transient: K().optional()
      }),
      Pe({
        type: h("start-step")
      }),
      Pe({
        type: h("finish-step")
      }),
      Pe({
        type: h("start"),
        messageId: l().optional(),
        messageMetadata: ve().optional()
      }),
      Pe({
        type: h("finish"),
        finishReason: le([
          "stop",
          "length",
          "content-filter",
          "tool-calls",
          "error",
          "other"
        ]).optional(),
        messageMetadata: ve().optional()
      }),
      Pe({
        type: h("abort")
      }),
      Pe({
        type: h("message-metadata"),
        messageMetadata: ve()
      })
    ])
  )
);
function hI(e) {
  return e.type.startsWith("data-");
}
function vr(e) {
  return e.type.startsWith("data-");
}
function _r(e) {
  return e.type === "text";
}
function yr(e) {
  return e.type === "file";
}
function $i(e) {
  return e.type === "reasoning";
}
function $r(e) {
  return e.type.startsWith("tool-");
}
function Ap(e) {
  return e.type === "dynamic-tool";
}
function At(e) {
  return $r(e) || Ap(e);
}
var dT = At;
function Pr(e) {
  return e.type.split("-").slice(1).join("-");
}
function vn(e) {
  return Ap(e) ? e.toolName : Pr(e);
}
var mT = vn;
function ca({
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
function pa({
  stream: e,
  messageMetadataSchema: t,
  dataPartSchemas: o,
  runUpdateMessageJob: n,
  onError: r,
  onToolCall: a,
  onData: s
}) {
  return e.pipeThrough(
    new TransformStream({
      async transform(i, u) {
        await n(async ({ state: c, write: m }) => {
          var f, d, g, _;
          function v(w) {
            const k = c.message.parts.filter(At).find(
              (T) => T.toolCallId === w
            );
            if (k == null)
              throw new Error(
                `no tool invocation found for tool call ${w}`
              );
            return k;
          }
          function y(w) {
            var E;
            const k = c.message.parts.find(
              (L) => $r(L) && L.toolCallId === w.toolCallId
            ), T = w, I = k;
            k != null ? (k.state = w.state, I.input = T.input, I.output = T.output, I.errorText = T.errorText, I.rawInput = T.rawInput, I.preliminary = T.preliminary, w.title !== void 0 && (I.title = w.title), I.providerExecuted = (E = T.providerExecuted) != null ? E : k.providerExecuted, T.providerMetadata != null && k.state === "input-available" && (k.callProviderMetadata = T.providerMetadata)) : c.message.parts.push({
              type: `tool-${w.toolName}`,
              toolCallId: w.toolCallId,
              state: w.state,
              title: w.title,
              input: T.input,
              output: T.output,
              rawInput: T.rawInput,
              errorText: T.errorText,
              providerExecuted: T.providerExecuted,
              preliminary: T.preliminary,
              ...T.providerMetadata != null ? { callProviderMetadata: T.providerMetadata } : {}
            });
          }
          function S(w) {
            var E, k;
            const T = c.message.parts.find(
              (P) => P.type === "dynamic-tool" && P.toolCallId === w.toolCallId
            ), I = w, L = T;
            T != null ? (T.state = w.state, L.toolName = w.toolName, L.input = I.input, L.output = I.output, L.errorText = I.errorText, L.rawInput = (E = I.rawInput) != null ? E : L.rawInput, L.preliminary = I.preliminary, w.title !== void 0 && (L.title = w.title), L.providerExecuted = (k = I.providerExecuted) != null ? k : T.providerExecuted, I.providerMetadata != null && T.state === "input-available" && (T.callProviderMetadata = I.providerMetadata)) : c.message.parts.push({
              type: "dynamic-tool",
              toolName: w.toolName,
              toolCallId: w.toolCallId,
              state: w.state,
              input: I.input,
              output: I.output,
              errorText: I.errorText,
              preliminary: I.preliminary,
              providerExecuted: I.providerExecuted,
              title: w.title,
              ...I.providerMetadata != null ? { callProviderMetadata: I.providerMetadata } : {}
            });
          }
          async function C(w) {
            if (w != null) {
              const E = c.message.metadata != null ? No(c.message.metadata, w) : w;
              t != null && await Oe({
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
              c.activeTextParts[i.id] = w, c.message.parts.push(w), m();
              break;
            }
            case "text-delta": {
              const w = c.activeTextParts[i.id];
              w.text += i.delta, w.providerMetadata = (f = i.providerMetadata) != null ? f : w.providerMetadata, m();
              break;
            }
            case "text-end": {
              const w = c.activeTextParts[i.id];
              w.state = "done", w.providerMetadata = (d = i.providerMetadata) != null ? d : w.providerMetadata, delete c.activeTextParts[i.id], m();
              break;
            }
            case "reasoning-start": {
              const w = {
                type: "reasoning",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              c.activeReasoningParts[i.id] = w, c.message.parts.push(w), m();
              break;
            }
            case "reasoning-delta": {
              const w = c.activeReasoningParts[i.id];
              w.text += i.delta, w.providerMetadata = (g = i.providerMetadata) != null ? g : w.providerMetadata, m();
              break;
            }
            case "reasoning-end": {
              const w = c.activeReasoningParts[i.id];
              w.providerMetadata = (_ = i.providerMetadata) != null ? _ : w.providerMetadata, w.state = "done", delete c.activeReasoningParts[i.id], m();
              break;
            }
            case "file": {
              c.message.parts.push({
                type: "file",
                mediaType: i.mediaType,
                url: i.url
              }), m();
              break;
            }
            case "source-url": {
              c.message.parts.push({
                type: "source-url",
                sourceId: i.sourceId,
                url: i.url,
                title: i.title,
                providerMetadata: i.providerMetadata
              }), m();
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
              }), m();
              break;
            }
            case "tool-input-start": {
              const w = c.message.parts.filter($r);
              c.partialToolCalls[i.toolCallId] = {
                text: "",
                toolName: i.toolName,
                index: w.length,
                dynamic: i.dynamic,
                title: i.title
              }, i.dynamic ? S({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted,
                title: i.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted,
                title: i.title
              }), m();
              break;
            }
            case "tool-input-delta": {
              const w = c.partialToolCalls[i.toolCallId];
              w.text += i.inputTextDelta;
              const { value: E } = await Oo(
                w.text
              );
              w.dynamic ? S({
                toolCallId: i.toolCallId,
                toolName: w.toolName,
                state: "input-streaming",
                input: E,
                title: w.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: w.toolName,
                state: "input-streaming",
                input: E,
                title: w.title
              }), m();
              break;
            }
            case "tool-input-available": {
              i.dynamic ? S({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata,
                title: i.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata,
                title: i.title
              }), m(), a && !i.providerExecuted && await a({
                toolCall: i
              });
              break;
            }
            case "tool-input-error": {
              i.dynamic ? S({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }) : y({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: void 0,
                rawInput: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }), m();
              break;
            }
            case "tool-approval-request": {
              const w = v(i.toolCallId);
              w.state = "approval-requested", w.approval = { id: i.approvalId }, m();
              break;
            }
            case "tool-output-denied": {
              const w = v(i.toolCallId);
              w.state = "output-denied", m();
              break;
            }
            case "tool-output-available": {
              const w = v(i.toolCallId);
              w.type === "dynamic-tool" ? S({
                toolCallId: i.toolCallId,
                toolName: w.toolName,
                state: "output-available",
                input: w.input,
                output: i.output,
                preliminary: i.preliminary,
                providerExecuted: i.providerExecuted,
                title: w.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: Pr(w),
                state: "output-available",
                input: w.input,
                output: i.output,
                providerExecuted: i.providerExecuted,
                preliminary: i.preliminary,
                title: w.title
              }), m();
              break;
            }
            case "tool-output-error": {
              const w = v(i.toolCallId);
              w.type === "dynamic-tool" ? S({
                toolCallId: i.toolCallId,
                toolName: w.toolName,
                state: "output-error",
                input: w.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                title: w.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: Pr(w),
                state: "output-error",
                input: w.input,
                rawInput: w.rawInput,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                title: w.title
              }), m();
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
              i.messageId != null && (c.message.id = i.messageId), await C(i.messageMetadata), (i.messageId != null || i.messageMetadata != null) && m();
              break;
            }
            case "finish": {
              i.finishReason != null && (c.finishReason = i.finishReason), await C(i.messageMetadata), i.messageMetadata != null && m();
              break;
            }
            case "message-metadata": {
              await C(i.messageMetadata), i.messageMetadata != null && m();
              break;
            }
            case "error": {
              r == null || r(new Error(i.errorText));
              break;
            }
            default:
              if (hI(i)) {
                (o == null ? void 0 : o[i.type]) != null && await Oe({
                  value: i.data,
                  schema: o[i.type]
                });
                const w = i;
                if (w.transient) {
                  s == null || s(w);
                  break;
                }
                const E = w.id != null ? c.message.parts.find(
                  (k) => w.type === k.type && w.id === k.id
                ) : void 0;
                E != null ? E.data = w.data : c.message.parts.push(w), s == null || s(w), m();
              }
          }
          u.enqueue(i);
        });
      }
    })
  );
}
function $p({
  messageId: e,
  originalMessages: t = [],
  onFinish: o,
  onError: n,
  stream: r
}) {
  let a = t == null ? void 0 : t[t.length - 1];
  (a == null ? void 0 : a.role) !== "assistant" ? a = void 0 : e = a.id;
  let s = !1;
  const i = r.pipeThrough(
    new TransformStream({
      transform(d, g) {
        if (d.type === "start") {
          const _ = d;
          _.messageId == null && e != null && (_.messageId = e);
        }
        d.type === "abort" && (s = !0), g.enqueue(d);
      }
    })
  );
  if (o == null)
    return i;
  const u = ca({
    lastMessage: a ? structuredClone(a) : void 0,
    messageId: e ?? ""
    // will be overridden by the stream
  }), c = async (d) => {
    await d({ state: u, write: () => {
    } });
  };
  let m = !1;
  const f = async () => {
    if (m || !o)
      return;
    m = !0;
    const d = u.message.id === (a == null ? void 0 : a.id);
    await o({
      isAborted: s,
      isContinuation: d,
      responseMessage: u.message,
      messages: [
        ...d ? t.slice(0, -1) : t,
        u.message
      ],
      finishReason: u.finishReason
    });
  };
  return pa({
    stream: i,
    runUpdateMessageJob: c,
    onError: n
  }).pipeThrough(
    new TransformStream({
      transform(d, g) {
        g.enqueue(d);
      },
      // @ts-expect-error cancel is still new and missing from types https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility
      async cancel() {
        await f();
      },
      async flush() {
        await f();
      }
    })
  );
}
function Pp({
  response: e,
  status: t,
  statusText: o,
  headers: n,
  stream: r,
  consumeSseStream: a
}) {
  let s = r.pipeThrough(new Rp());
  if (a) {
    const [i, u] = s.tee();
    s = i, a({ stream: u });
  }
  Cp({
    response: e,
    status: t,
    statusText: o,
    headers: Object.fromEntries(
      nn(n, Mp).entries()
    ),
    stream: s.pipeThrough(new TextEncoderStream())
  });
}
function zt(e) {
  const t = e.pipeThrough(new TransformStream());
  return t[Symbol.asyncIterator] = function() {
    const o = this.getReader();
    let n = !1;
    async function r(a) {
      var s;
      n = !0;
      try {
        a && await ((s = o.cancel) == null ? void 0 : s.call(o));
      } finally {
        try {
          o.releaseLock();
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
        if (n)
          return { done: !0, value: void 0 };
        const { done: a, value: s } = await o.read();
        return a ? (await r(!0), { done: !0, value: void 0 }) : { done: !1, value: s };
      },
      /**
       * Called on early exit (e.g., break from for-await).
       * Ensures the stream is cancelled and resources are released.
       * @returns A promise resolving to a completed IteratorResult.
       */
      async return() {
        return await r(!0), { done: !0, value: void 0 };
      },
      /**
       * Called on early exit with error.
       * Ensures the stream is cancelled and resources are released, then rethrows the error.
       * @param err The error to throw.
       * @returns A promise that rejects with the provided error.
       */
      async throw(a) {
        throw await r(!0), a;
      }
    };
  }, t;
}
async function Hn({
  stream: e,
  onError: t
}) {
  const o = e.getReader();
  try {
    for (; ; ) {
      const { done: n } = await o.read();
      if (n)
        break;
    }
  } catch (n) {
    t == null || t(n);
  } finally {
    o.releaseLock();
  }
}
function Pi() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      e = n, t = r;
    }),
    resolve: e,
    reject: t
  };
}
function qp() {
  let e = [], t = null, o = !1, n = Pi();
  const r = () => {
    o = !0, n.resolve(), e.forEach((s) => s.cancel()), e = [], t == null || t.close();
  }, a = async () => {
    if (o && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = Pi(), await n.promise, a();
    try {
      const { value: s, done: i } = await e[0].read();
      i ? (e.shift(), e.length === 0 && o ? t == null || t.close() : await a()) : t == null || t.enqueue(s);
    } catch (s) {
      t == null || t.error(s), e.shift(), r();
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
        e = [], o = !0;
      }
    }),
    addStream: (s) => {
      if (o)
        throw new Error("Cannot add inner stream: outer stream is closed");
      e.push(s.getReader()), n.resolve();
    },
    /**
     * Gracefully close the outer stream. This will let the inner streams
     * finish processing and then close the outer stream.
     */
    close: () => {
      o = !0, n.resolve(), e.length === 0 && (t == null || t.close());
    },
    /**
     * Immediately close the outer stream. This will cancel all inner streams
     * and close the outer stream.
     */
    terminate: r
  };
}
function jp() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
function gI({
  tools: e,
  generatorStream: t,
  tracer: o,
  telemetry: n,
  system: r,
  messages: a,
  abortSignal: s,
  repairToolCall: i,
  experimental_context: u,
  generateId: c
}) {
  let m = null;
  const f = new ReadableStream({
    start(w) {
      m = w;
    }
  }), d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  let v = !1, y;
  function S() {
    v && d.size === 0 && (y != null && m.enqueue(y), m.close());
  }
  const C = new TransformStream({
    async transform(w, E) {
      const k = w.type;
      switch (k) {
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
          E.enqueue(w);
          break;
        }
        case "file": {
          E.enqueue({
            type: "file",
            file: new nI({
              data: w.data,
              mediaType: w.mediaType
            })
          });
          break;
        }
        case "finish": {
          y = {
            type: "finish",
            finishReason: w.finishReason.unified,
            rawFinishReason: w.finishReason.raw,
            usage: Wo(w.usage),
            providerMetadata: w.providerMetadata
          };
          break;
        }
        case "tool-approval-request": {
          const T = _.get(w.toolCallId);
          if (T == null) {
            m.enqueue({
              type: "error",
              error: new ia({
                toolCallId: w.toolCallId,
                approvalId: w.approvalId
              })
            });
            break;
          }
          E.enqueue({
            type: "tool-approval-request",
            approvalId: w.approvalId,
            toolCall: T
          });
          break;
        }
        case "tool-call": {
          try {
            const T = await xp({
              toolCall: w,
              tools: e,
              repairToolCall: i,
              system: r,
              messages: a
            });
            if (_.set(T.toolCallId, T), E.enqueue(T), T.invalid) {
              m.enqueue({
                type: "tool-error",
                toolCallId: T.toolCallId,
                toolName: T.toolName,
                input: T.input,
                error: Dn(T.error),
                dynamic: !0,
                title: T.title
              });
              break;
            }
            const I = e == null ? void 0 : e[T.toolName];
            if (I == null)
              break;
            if (I.onInputAvailable != null && await I.onInputAvailable({
              input: T.input,
              toolCallId: T.toolCallId,
              messages: a,
              abortSignal: s,
              experimental_context: u
            }), await wp({
              tool: I,
              toolCall: T,
              messages: a,
              experimental_context: u
            })) {
              m.enqueue({
                type: "tool-approval-request",
                approvalId: c(),
                toolCall: T
              });
              break;
            }
            if (g.set(T.toolCallId, T.input), I.execute != null && T.providerExecuted !== !0) {
              const L = c();
              d.add(L), la({
                toolCall: T,
                tools: e,
                tracer: o,
                telemetry: n,
                messages: a,
                abortSignal: s,
                experimental_context: u,
                onPreliminaryToolResult: (P) => {
                  m.enqueue(P);
                }
              }).then((P) => {
                m.enqueue(P), d.delete(L), S();
              });
            }
          } catch (T) {
            m.enqueue({ type: "error", error: T });
          }
          break;
        }
        case "tool-result": {
          const T = w.toolName;
          w.isError ? m.enqueue({
            type: "tool-error",
            toolCallId: w.toolCallId,
            toolName: T,
            input: g.get(w.toolCallId),
            providerExecuted: !0,
            error: w.result,
            dynamic: w.dynamic
          }) : E.enqueue({
            type: "tool-result",
            toolCallId: w.toolCallId,
            toolName: T,
            input: g.get(w.toolCallId),
            output: w.result,
            providerExecuted: !0,
            dynamic: w.dynamic
          });
          break;
        }
        default: {
          const T = k;
          throw new Error(`Unhandled chunk type: ${T}`);
        }
      }
    },
    flush() {
      v = !0, S();
    }
  });
  return new ReadableStream({
    async start(w) {
      return Promise.all([
        t.pipeThrough(C).pipeTo(
          new WritableStream({
            write(E) {
              w.enqueue(E);
            },
            close() {
            }
          })
        ),
        f.pipeTo(
          new WritableStream({
            write(E) {
              w.enqueue(E);
            },
            close() {
              w.close();
            }
          })
        )
      ]);
    }
  });
}
var vI = Ko({
  prefix: "aitxt",
  size: 24
});
function _I({
  model: e,
  tools: t,
  toolChoice: o,
  system: n,
  prompt: r,
  messages: a,
  maxRetries: s,
  abortSignal: i,
  headers: u,
  stopWhen: c = ua(1),
  experimental_output: m,
  output: f = m,
  experimental_telemetry: d,
  prepareStep: g,
  providerOptions: _,
  experimental_activeTools: v,
  activeTools: y = v,
  experimental_repairToolCall: S,
  experimental_transform: C,
  experimental_download: w,
  includeRawChunks: E = !1,
  onChunk: k,
  onError: T = ({ error: U }) => {
    console.error(U);
  },
  onFinish: I,
  onAbort: L,
  onStepFinish: P,
  experimental_context: q,
  _internal: {
    now: N = jp,
    generateId: j = vI,
    currentDate: A = () => /* @__PURE__ */ new Date()
  } = {},
  ...D
}) {
  return new bI({
    model: So(e),
    telemetry: d,
    headers: u,
    settings: D,
    maxRetries: s,
    abortSignal: i,
    system: n,
    prompt: r,
    messages: a,
    tools: t,
    toolChoice: o,
    transforms: ao(C),
    activeTools: y,
    repairToolCall: S,
    stopConditions: ao(c),
    output: f,
    providerOptions: _,
    prepareStep: g,
    includeRawChunks: E,
    onChunk: k,
    onError: T,
    onFinish: I,
    onAbort: L,
    onStepFinish: P,
    now: N,
    currentDate: A,
    generateId: j,
    experimental_context: q,
    download: w
  });
}
function yI(e) {
  let t, o = "", n = "", r, a = "";
  function s({
    controller: i,
    partialOutput: u = void 0
  }) {
    i.enqueue({
      part: {
        type: "text-delta",
        id: t,
        text: n,
        providerMetadata: r
      },
      partialOutput: u
    }), n = "";
  }
  return new TransformStream({
    async transform(i, u) {
      var c;
      if (i.type === "finish-step" && n.length > 0 && s({ controller: u }), i.type !== "text-delta" && i.type !== "text-start" && i.type !== "text-end") {
        u.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (t == null)
        t = i.id;
      else if (i.id !== t) {
        u.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (i.type === "text-start") {
        u.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (i.type === "text-end") {
        n.length > 0 && s({ controller: u }), u.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      o += i.text, n += i.text, r = (c = i.providerMetadata) != null ? c : r;
      const m = await e.parsePartialOutput({ text: o });
      if (m !== void 0) {
        const f = JSON.stringify(m.partial);
        f !== a && (s({ controller: u, partialOutput: m.partial }), a = f);
      }
    }
  });
}
var bI = class {
  constructor({
    model: e,
    telemetry: t,
    headers: o,
    settings: n,
    maxRetries: r,
    abortSignal: a,
    system: s,
    prompt: i,
    messages: u,
    tools: c,
    toolChoice: m,
    transforms: f,
    activeTools: d,
    repairToolCall: g,
    stopConditions: _,
    output: v,
    providerOptions: y,
    prepareStep: S,
    includeRawChunks: C,
    now: w,
    currentDate: E,
    generateId: k,
    onChunk: T,
    onError: I,
    onFinish: L,
    onAbort: P,
    onStepFinish: q,
    experimental_context: N,
    download: j
  }) {
    this._totalUsage = new wt(), this._finishReason = new wt(), this._rawFinishReason = new wt(), this._steps = new wt(), this.outputSpecification = v, this.includeRawChunks = C, this.tools = c;
    let A, D = [];
    const U = [];
    let ne, V, B, ue = {}, W = [];
    const X = [], z = /* @__PURE__ */ new Map();
    let we, Q = {}, oe = {};
    const O = new TransformStream({
      async transform(ee, ie) {
        var Te, he, ge, je;
        ie.enqueue(ee);
        const { part: Y } = ee;
        if ((Y.type === "text-delta" || Y.type === "reasoning-delta" || Y.type === "source" || Y.type === "tool-call" || Y.type === "tool-result" || Y.type === "tool-input-start" || Y.type === "tool-input-delta" || Y.type === "raw") && await (T == null ? void 0 : T({ chunk: Y })), Y.type === "error" && await I({ error: Jn(Y.error) }), Y.type === "text-start" && (Q[Y.id] = {
          type: "text",
          text: "",
          providerMetadata: Y.providerMetadata
        }, D.push(Q[Y.id])), Y.type === "text-delta") {
          const b = Q[Y.id];
          if (b == null) {
            ie.enqueue({
              part: {
                type: "error",
                error: `text part ${Y.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          b.text += Y.text, b.providerMetadata = (Te = Y.providerMetadata) != null ? Te : b.providerMetadata;
        }
        if (Y.type === "text-end") {
          const b = Q[Y.id];
          if (b == null) {
            ie.enqueue({
              part: {
                type: "error",
                error: `text part ${Y.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          b.providerMetadata = (he = Y.providerMetadata) != null ? he : b.providerMetadata, delete Q[Y.id];
        }
        if (Y.type === "reasoning-start" && (oe[Y.id] = {
          type: "reasoning",
          text: "",
          providerMetadata: Y.providerMetadata
        }, D.push(oe[Y.id])), Y.type === "reasoning-delta") {
          const b = oe[Y.id];
          if (b == null) {
            ie.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${Y.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          b.text += Y.text, b.providerMetadata = (ge = Y.providerMetadata) != null ? ge : b.providerMetadata;
        }
        if (Y.type === "reasoning-end") {
          const b = oe[Y.id];
          if (b == null) {
            ie.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${Y.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          b.providerMetadata = (je = Y.providerMetadata) != null ? je : b.providerMetadata, delete oe[Y.id];
        }
        if (Y.type === "file" && D.push({ type: "file", file: Y.file }), Y.type === "source" && D.push(Y), Y.type === "tool-call" && D.push(Y), Y.type === "tool-result" && !Y.preliminary && D.push(Y), Y.type === "tool-approval-request" && D.push(Y), Y.type === "tool-error" && D.push(Y), Y.type === "start-step" && (D = [], oe = {}, Q = {}, ue = Y.request, W = Y.warnings), Y.type === "finish-step") {
          const b = await Ar({
            content: D,
            tools: c
          }), F = new Tp({
            content: D,
            finishReason: Y.finishReason,
            rawFinishReason: Y.rawFinishReason,
            usage: Y.usage,
            warnings: W,
            request: ue,
            response: {
              ...Y.response,
              messages: [...U, ...b]
            },
            providerMetadata: Y.providerMetadata
          });
          await (q == null ? void 0 : q(F)), It({
            warnings: W,
            provider: e.provider,
            model: e.modelId
          }), X.push(F), U.push(...b), A.resolve();
        }
        Y.type === "finish" && (B = Y.totalUsage, ne = Y.finishReason, V = Y.rawFinishReason);
      },
      async flush(ee) {
        try {
          if (X.length === 0) {
            const ge = new $c({
              message: "No output generated. Check the stream for errors."
            });
            _e._finishReason.reject(ge), _e._rawFinishReason.reject(ge), _e._totalUsage.reject(ge), _e._steps.reject(ge);
            return;
          }
          const ie = ne ?? "other", Te = B ?? gn();
          _e._finishReason.resolve(ie), _e._rawFinishReason.resolve(V), _e._totalUsage.resolve(Te), _e._steps.resolve(X);
          const he = X[X.length - 1];
          await (L == null ? void 0 : L({
            finishReason: he.finishReason,
            rawFinishReason: he.rawFinishReason,
            totalUsage: Te,
            usage: he.usage,
            content: he.content,
            text: he.text,
            reasoningText: he.reasoningText,
            reasoning: he.reasoning,
            files: he.files,
            sources: he.sources,
            toolCalls: he.toolCalls,
            staticToolCalls: he.staticToolCalls,
            dynamicToolCalls: he.dynamicToolCalls,
            toolResults: he.toolResults,
            staticToolResults: he.staticToolResults,
            dynamicToolResults: he.dynamicToolResults,
            request: he.request,
            response: he.response,
            warnings: he.warnings,
            providerMetadata: he.providerMetadata,
            steps: X,
            experimental_context: N
          })), we.setAttributes(
            await Ce({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": ie,
                "ai.response.text": { output: () => he.text },
                "ai.response.toolCalls": {
                  output: () => {
                    var ge;
                    return (ge = he.toolCalls) != null && ge.length ? JSON.stringify(he.toolCalls) : void 0;
                  }
                },
                "ai.response.providerMetadata": JSON.stringify(
                  he.providerMetadata
                ),
                "ai.usage.inputTokens": Te.inputTokens,
                "ai.usage.outputTokens": Te.outputTokens,
                "ai.usage.totalTokens": Te.totalTokens,
                "ai.usage.reasoningTokens": Te.reasoningTokens,
                "ai.usage.cachedInputTokens": Te.cachedInputTokens
              }
            })
          );
        } catch (ie) {
          ee.error(ie);
        } finally {
          we.end();
        }
      }
    }), R = qp();
    this.addStream = R.addStream, this.closeStream = R.close;
    const ae = R.stream.getReader();
    let Z = new ReadableStream({
      async start(ee) {
        ee.enqueue({ type: "start" });
      },
      async pull(ee) {
        function ie() {
          P == null || P({ steps: X }), ee.enqueue({ type: "abort" }), ee.close();
        }
        try {
          const { done: Te, value: he } = await ae.read();
          if (Te) {
            ee.close();
            return;
          }
          if (a != null && a.aborted) {
            ie();
            return;
          }
          ee.enqueue(he);
        } catch (Te) {
          no(Te) && (a != null && a.aborted) ? ie() : ee.error(Te);
        }
      },
      cancel(ee) {
        return R.stream.cancel(ee);
      }
    });
    for (const ee of f)
      Z = Z.pipeThrough(
        ee({
          tools: c,
          stopStream() {
            R.terminate();
          }
        })
      );
    this.baseStream = Z.pipeThrough(yI(v ?? On())).pipeThrough(O);
    const { maxRetries: ce, retry: H } = qt({
      maxRetries: r,
      abortSignal: a
    }), Ie = mo(t), Se = so(n), be = po({
      model: e,
      telemetry: t,
      headers: o,
      settings: { ...Se, maxRetries: ce }
    }), _e = this;
    lt({
      name: "ai.streamText",
      attributes: Ce({
        telemetry: t,
        attributes: {
          ...it({ operationId: "ai.streamText", telemetry: t }),
          ...be,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: s, prompt: i, messages: u })
          }
        }
      }),
      tracer: Ie,
      endWhenDone: !1,
      fn: async (ee) => {
        we = ee;
        const ie = await Vn({
          system: s,
          prompt: i,
          messages: u
        }), Te = ie.messages, he = [], { approvedToolApprovals: ge, deniedToolApprovals: je } = bp({ messages: Te });
        if (je.length > 0 || ge.length > 0) {
          const b = [
            ...ge,
            ...je
          ].filter((Fe) => Fe.toolCall.providerExecuted), F = ge.filter(
            (Fe) => !Fe.toolCall.providerExecuted
          ), pe = je.filter(
            (Fe) => !Fe.toolCall.providerExecuted
          ), Be = je.filter(
            (Fe) => Fe.toolCall.providerExecuted
          );
          let Ke;
          const Ut = new ReadableStream({
            start(Fe) {
              Ke = Fe;
            }
          });
          _e.addStream(Ut);
          try {
            for (const Ye of [
              ...pe,
              ...Be
            ])
              Ke == null || Ke.enqueue({
                type: "tool-output-denied",
                toolCallId: Ye.toolCall.toolCallId,
                toolName: Ye.toolCall.toolName
              });
            const Fe = [];
            if (await Promise.all(
              F.map(async (Ye) => {
                const Ve = await la({
                  toolCall: Ye.toolCall,
                  tools: c,
                  tracer: Ie,
                  telemetry: t,
                  messages: Te,
                  abortSignal: a,
                  experimental_context: N,
                  onPreliminaryToolResult: (Kt) => {
                    Ke == null || Ke.enqueue(Kt);
                  }
                });
                Ve != null && (Ke == null || Ke.enqueue(Ve), Fe.push(Ve));
              })
            ), b.length > 0 && he.push({
              role: "tool",
              content: b.map(
                (Ye) => ({
                  type: "tool-approval-response",
                  approvalId: Ye.approvalResponse.approvalId,
                  approved: Ye.approvalResponse.approved,
                  reason: Ye.approvalResponse.reason,
                  providerExecuted: !0
                })
              )
            }), Fe.length > 0 || pe.length > 0) {
              const Ye = [];
              for (const Ve of Fe)
                Ye.push({
                  type: "tool-result",
                  toolCallId: Ve.toolCallId,
                  toolName: Ve.toolName,
                  output: await oo({
                    toolCallId: Ve.toolCallId,
                    input: Ve.input,
                    tool: c == null ? void 0 : c[Ve.toolName],
                    output: Ve.type === "tool-result" ? Ve.output : Ve.error,
                    errorMode: Ve.type === "tool-error" ? "json" : "none"
                  })
                });
              for (const Ve of pe)
                Ye.push({
                  type: "tool-result",
                  toolCallId: Ve.toolCall.toolCallId,
                  toolName: Ve.toolCall.toolName,
                  output: {
                    type: "execution-denied",
                    reason: Ve.approvalResponse.reason
                  }
                });
              he.push({
                role: "tool",
                content: Ye
              });
            }
          } finally {
            Ke == null || Ke.close();
          }
        }
        U.push(...he);
        async function Y({
          currentStep: b,
          responseMessages: F,
          usage: pe
        }) {
          var Be, Ke, Ut, Fe, Ye, Ve;
          const Kt = _e.includeRawChunks;
          A = new wt();
          const Zt = [...Te, ...F], de = await (S == null ? void 0 : S({
            model: e,
            steps: X,
            stepNumber: X.length,
            messages: Zt,
            experimental_context: N
          })), He = So(
            (Be = de == null ? void 0 : de.model) != null ? Be : e
          ), fo = await Fn({
            prompt: {
              system: (Ke = de == null ? void 0 : de.system) != null ? Ke : ie.system,
              messages: (Ut = de == null ? void 0 : de.messages) != null ? Ut : Zt
            },
            supportedUrls: await He.supportedUrls,
            download: j
          }), { toolChoice: jt, tools: ho } = await mp({
            tools: c,
            toolChoice: (Fe = de == null ? void 0 : de.toolChoice) != null ? Fe : m,
            activeTools: (Ye = de == null ? void 0 : de.activeTools) != null ? Ye : d
          });
          N = (Ve = de == null ? void 0 : de.experimental_context) != null ? Ve : N;
          const rn = No(
            y,
            de == null ? void 0 : de.providerOptions
          ), {
            result: { stream: an, response: Ao, request: $o },
            doStreamSpan: Dt,
            startTimestampMs: sn
          } = await H(
            () => lt({
              name: "ai.streamText.doStream",
              attributes: Ce({
                telemetry: t,
                attributes: {
                  ...it({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...be,
                  // model:
                  "ai.model.provider": He.provider,
                  "ai.model.id": He.modelId,
                  // prompt:
                  "ai.prompt.messages": {
                    input: () => Gn(fo)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => ho == null ? void 0 : ho.map((me) => JSON.stringify(me))
                  },
                  "ai.prompt.toolChoice": {
                    input: () => jt != null ? JSON.stringify(jt) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": He.provider,
                  "gen_ai.request.model": He.modelId,
                  "gen_ai.request.frequency_penalty": Se.frequencyPenalty,
                  "gen_ai.request.max_tokens": Se.maxOutputTokens,
                  "gen_ai.request.presence_penalty": Se.presencePenalty,
                  "gen_ai.request.stop_sequences": Se.stopSequences,
                  "gen_ai.request.temperature": Se.temperature,
                  "gen_ai.request.top_k": Se.topK,
                  "gen_ai.request.top_p": Se.topP
                }
              }),
              tracer: Ie,
              endWhenDone: !1,
              fn: async (me) => ({
                startTimestampMs: w(),
                // get before the call
                doStreamSpan: me,
                result: await He.doStream({
                  ...Se,
                  tools: ho,
                  toolChoice: jt,
                  responseFormat: await (v == null ? void 0 : v.responseFormat),
                  prompt: fo,
                  providerOptions: rn,
                  abortSignal: a,
                  headers: o,
                  includeRawChunks: Kt
                })
              })
            })
          ), ot = gI({
            tools: c,
            generatorStream: an,
            tracer: Ie,
            telemetry: t,
            system: s,
            messages: Zt,
            repairToolCall: g,
            abortSignal: a,
            experimental_context: N,
            generateId: k
          }), Lt = $o ?? {}, Ft = [], Po = [];
          let Wn;
          const Kn = {};
          let go = "other", Yn, kt = gn(), Xn, da = !0, Nt = {
            id: k(),
            timestamp: E(),
            modelId: e.modelId
          }, ma = "";
          _e.addStream(
            ot.pipeThrough(
              new TransformStream({
                async transform(me, nt) {
                  var qo, jo, ln, et, vo;
                  if (me.type === "stream-start") {
                    Wn = me.warnings;
                    return;
                  }
                  if (da) {
                    const We = w() - sn;
                    da = !1, Dt.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": We
                    }), Dt.setAttributes({
                      "ai.response.msToFirstChunk": We
                    }), nt.enqueue({
                      type: "start-step",
                      request: Lt,
                      warnings: Wn ?? []
                    });
                  }
                  const Qn = me.type;
                  switch (Qn) {
                    case "tool-approval-request":
                    case "text-start":
                    case "text-end": {
                      nt.enqueue(me);
                      break;
                    }
                    case "text-delta": {
                      me.delta.length > 0 && (nt.enqueue({
                        type: "text-delta",
                        id: me.id,
                        text: me.delta,
                        providerMetadata: me.providerMetadata
                      }), ma += me.delta);
                      break;
                    }
                    case "reasoning-start":
                    case "reasoning-end": {
                      nt.enqueue(me);
                      break;
                    }
                    case "reasoning-delta": {
                      nt.enqueue({
                        type: "reasoning-delta",
                        id: me.id,
                        text: me.delta,
                        providerMetadata: me.providerMetadata
                      });
                      break;
                    }
                    case "tool-call": {
                      nt.enqueue(me), Ft.push(me);
                      break;
                    }
                    case "tool-result": {
                      nt.enqueue(me), me.preliminary || Po.push(me);
                      break;
                    }
                    case "tool-error": {
                      nt.enqueue(me), Po.push(me);
                      break;
                    }
                    case "response-metadata": {
                      Nt = {
                        id: (qo = me.id) != null ? qo : Nt.id,
                        timestamp: (jo = me.timestamp) != null ? jo : Nt.timestamp,
                        modelId: (ln = me.modelId) != null ? ln : Nt.modelId
                      };
                      break;
                    }
                    case "finish": {
                      kt = me.usage, go = me.finishReason, Yn = me.rawFinishReason, Xn = me.providerMetadata;
                      const We = w() - sn;
                      Dt.addEvent("ai.stream.finish"), Dt.setAttributes({
                        "ai.response.msToFinish": We,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((et = kt.outputTokens) != null ? et : 0) / We
                      });
                      break;
                    }
                    case "file": {
                      nt.enqueue(me);
                      break;
                    }
                    case "source": {
                      nt.enqueue(me);
                      break;
                    }
                    case "tool-input-start": {
                      Kn[me.id] = me.toolName;
                      const We = c == null ? void 0 : c[me.toolName];
                      (We == null ? void 0 : We.onInputStart) != null && await We.onInputStart({
                        toolCallId: me.id,
                        messages: Zt,
                        abortSignal: a,
                        experimental_context: N
                      }), nt.enqueue({
                        ...me,
                        dynamic: (vo = me.dynamic) != null ? vo : (We == null ? void 0 : We.type) === "dynamic",
                        title: We == null ? void 0 : We.title
                      });
                      break;
                    }
                    case "tool-input-end": {
                      delete Kn[me.id], nt.enqueue(me);
                      break;
                    }
                    case "tool-input-delta": {
                      const We = Kn[me.id], er = c == null ? void 0 : c[We];
                      (er == null ? void 0 : er.onInputDelta) != null && await er.onInputDelta({
                        inputTextDelta: me.delta,
                        toolCallId: me.id,
                        messages: Zt,
                        abortSignal: a,
                        experimental_context: N
                      }), nt.enqueue(me);
                      break;
                    }
                    case "error": {
                      nt.enqueue(me), go = "error";
                      break;
                    }
                    case "raw": {
                      Kt && nt.enqueue(me);
                      break;
                    }
                    default: {
                      const We = Qn;
                      throw new Error(`Unknown chunk type: ${We}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(me) {
                  const nt = Ft.length > 0 ? JSON.stringify(Ft) : void 0;
                  try {
                    Dt.setAttributes(
                      await Ce({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": go,
                          "ai.response.text": {
                            output: () => ma
                          },
                          "ai.response.toolCalls": {
                            output: () => nt
                          },
                          "ai.response.id": Nt.id,
                          "ai.response.model": Nt.modelId,
                          "ai.response.timestamp": Nt.timestamp.toISOString(),
                          "ai.response.providerMetadata": JSON.stringify(Xn),
                          "ai.usage.inputTokens": kt.inputTokens,
                          "ai.usage.outputTokens": kt.outputTokens,
                          "ai.usage.totalTokens": kt.totalTokens,
                          "ai.usage.reasoningTokens": kt.reasoningTokens,
                          "ai.usage.cachedInputTokens": kt.cachedInputTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [go],
                          "gen_ai.response.id": Nt.id,
                          "gen_ai.response.model": Nt.modelId,
                          "gen_ai.usage.input_tokens": kt.inputTokens,
                          "gen_ai.usage.output_tokens": kt.outputTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    Dt.end();
                  }
                  me.enqueue({
                    type: "finish-step",
                    finishReason: go,
                    rawFinishReason: Yn,
                    usage: kt,
                    providerMetadata: Xn,
                    response: {
                      ...Nt,
                      headers: Ao == null ? void 0 : Ao.headers
                    }
                  });
                  const qo = _p(pe, kt);
                  await A.promise;
                  const jo = Ft.filter(
                    (et) => et.providerExecuted !== !0
                  ), ln = Po.filter(
                    (et) => et.providerExecuted !== !0
                  );
                  for (const et of Ft) {
                    if (et.providerExecuted !== !0)
                      continue;
                    const vo = c == null ? void 0 : c[et.toolName];
                    (vo == null ? void 0 : vo.type) === "provider" && vo.supportsDeferredResults && (Po.some(
                      (We) => We.type === "tool-result" && We.toolCallId === et.toolCallId
                    ) || z.set(et.toolCallId, {
                      toolName: et.toolName
                    }));
                  }
                  for (const et of Po)
                    et.type === "tool-result" && z.delete(et.toolCallId);
                  if (
                    // Continue if:
                    // 1. There are client tool calls that have all been executed, OR
                    // 2. There are pending deferred results from provider-executed tools
                    (jo.length > 0 && ln.length === jo.length || z.size > 0) && // continue until a stop condition is met:
                    !await kp({
                      stopConditions: _,
                      steps: X
                    })
                  ) {
                    F.push(
                      ...await Ar({
                        content: (
                          // use transformed content to create the messages for the next step:
                          X[X.length - 1].content
                        ),
                        tools: c
                      })
                    );
                    try {
                      await Y({
                        currentStep: b + 1,
                        responseMessages: F,
                        usage: qo
                      });
                    } catch (et) {
                      me.enqueue({
                        type: "error",
                        error: et
                      }), _e.closeStream();
                    }
                  } else
                    me.enqueue({
                      type: "finish",
                      finishReason: go,
                      rawFinishReason: Yn,
                      totalUsage: qo
                    }), _e.closeStream();
                }
              })
            )
          );
        }
        await Y({
          currentStep: 0,
          responseMessages: he,
          usage: gn()
        });
      }
    }).catch((ee) => {
      _e.addStream(
        new ReadableStream({
          start(ie) {
            ie.enqueue({ type: "error", error: ee }), ie.close();
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
  get rawFinishReason() {
    return this.consumeStream(), this._rawFinishReason.promise;
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
    return zt(
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
    return zt(
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
      await Hn({
        stream: this.fullStream,
        onError: e == null ? void 0 : e.onError
      });
    } catch (o) {
      (t = e == null ? void 0 : e.onError) == null || t.call(e, o);
    }
  }
  get experimental_partialOutputStream() {
    return this.partialOutputStream;
  }
  get partialOutputStream() {
    return zt(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ partialOutput: e }, t) {
            e != null && t.enqueue(e);
          }
        })
      )
    );
  }
  get output() {
    return this.finalStep.then((e) => {
      var t;
      return ((t = this.outputSpecification) != null ? t : On()).parseCompleteOutput(
        { text: e.text },
        {
          response: e.response,
          usage: e.usage,
          finishReason: e.finishReason
        }
      );
    });
  }
  toUIMessageStream({
    originalMessages: e,
    generateMessageId: t,
    onFinish: o,
    messageMetadata: n,
    sendReasoning: r = !0,
    sendSources: a = !1,
    sendStart: s = !0,
    sendFinish: i = !0,
    onError: u = Eo
  } = {}) {
    const c = t != null ? fI({
      originalMessages: e,
      responseMessageId: t
    }) : void 0, m = (d) => {
      var g;
      const _ = (g = this.tools) == null ? void 0 : g[d.toolName];
      return _ == null ? d.dynamic : (_ == null ? void 0 : _.type) === "dynamic" ? !0 : void 0;
    }, f = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (d, g) => {
          const _ = n == null ? void 0 : n({ part: d }), v = d.type;
          switch (v) {
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
              r && g.enqueue({
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
              const y = m(d);
              g.enqueue({
                type: "tool-input-start",
                toolCallId: d.id,
                toolName: d.toolName,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...y != null ? { dynamic: y } : {},
                ...d.title != null ? { title: d.title } : {}
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
              const y = m(d);
              d.invalid ? g.enqueue({
                type: "tool-input-error",
                toolCallId: d.toolCallId,
                toolName: d.toolName,
                input: d.input,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {},
                ...y != null ? { dynamic: y } : {},
                errorText: u(d.error),
                ...d.title != null ? { title: d.title } : {}
              }) : g.enqueue({
                type: "tool-input-available",
                toolCallId: d.toolCallId,
                toolName: d.toolName,
                input: d.input,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...d.providerMetadata != null ? { providerMetadata: d.providerMetadata } : {},
                ...y != null ? { dynamic: y } : {},
                ...d.title != null ? { title: d.title } : {}
              });
              break;
            }
            case "tool-approval-request": {
              g.enqueue({
                type: "tool-approval-request",
                approvalId: d.approvalId,
                toolCallId: d.toolCall.toolCallId
              });
              break;
            }
            case "tool-result": {
              const y = m(d);
              g.enqueue({
                type: "tool-output-available",
                toolCallId: d.toolCallId,
                output: d.output,
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...d.preliminary != null ? { preliminary: d.preliminary } : {},
                ...y != null ? { dynamic: y } : {}
              });
              break;
            }
            case "tool-error": {
              const y = m(d);
              g.enqueue({
                type: "tool-output-error",
                toolCallId: d.toolCallId,
                errorText: u(d.error),
                ...d.providerExecuted != null ? { providerExecuted: d.providerExecuted } : {},
                ...y != null ? { dynamic: y } : {}
              });
              break;
            }
            case "tool-output-denied": {
              g.enqueue({
                type: "tool-output-denied",
                toolCallId: d.toolCallId
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
                ..._ != null ? { messageMetadata: _ } : {},
                ...c != null ? { messageId: c } : {}
              });
              break;
            }
            case "finish": {
              i && g.enqueue({
                type: "finish",
                finishReason: d.finishReason,
                ..._ != null ? { messageMetadata: _ } : {}
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
              const y = v;
              throw new Error(`Unknown chunk type: ${y}`);
            }
          }
          _ != null && v !== "start" && v !== "finish" && g.enqueue({
            type: "message-metadata",
            messageMetadata: _
          });
        }
      })
    );
    return zt(
      $p({
        stream: f,
        messageId: c ?? (t == null ? void 0 : t()),
        originalMessages: e,
        onFinish: o,
        onError: u
      })
    );
  }
  pipeUIMessageStreamToResponse(e, {
    originalMessages: t,
    generateMessageId: o,
    onFinish: n,
    messageMetadata: r,
    sendReasoning: a,
    sendSources: s,
    sendFinish: i,
    sendStart: u,
    onError: c,
    ...m
  } = {}) {
    Pp({
      response: e,
      stream: this.toUIMessageStream({
        originalMessages: t,
        generateMessageId: o,
        onFinish: n,
        messageMetadata: r,
        sendReasoning: a,
        sendSources: s,
        sendFinish: i,
        sendStart: u,
        onError: c
      }),
      ...m
    });
  }
  pipeTextStreamToResponse(e, t) {
    Ep({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toUIMessageStreamResponse({
    originalMessages: e,
    generateMessageId: t,
    onFinish: o,
    messageMetadata: n,
    sendReasoning: r,
    sendSources: a,
    sendFinish: s,
    sendStart: i,
    onError: u,
    ...c
  } = {}) {
    return Np({
      stream: this.toUIMessageStream({
        originalMessages: e,
        generateMessageId: t,
        onFinish: o,
        messageMetadata: n,
        sendReasoning: r,
        sendSources: a,
        sendFinish: s,
        sendStart: i,
        onError: u
      }),
      ...c
    });
  }
  toTextStreamResponse(e) {
    return Sp({
      textStream: this.textStream,
      ...e
    });
  }
}, fT = class {
  constructor(e) {
    this.version = "agent-v1", this.settings = e;
  }
  /**
   * The id of the agent.
   */
  get id() {
    return this.settings.id;
  }
  /**
   * The tools that the agent can use.
   */
  get tools() {
    return this.settings.tools;
  }
  async prepareCall(e) {
    var t, o, n, r;
    const a = {
      ...this.settings,
      stopWhen: (t = this.settings.stopWhen) != null ? t : ua(20),
      ...e
    }, s = (r = await ((n = (o = this.settings).prepareCall) == null ? void 0 : n.call(o, a))) != null ? r : a, { instructions: i, messages: u, prompt: c, ...m } = s;
    return {
      ...m,
      system: i,
      messages: u,
      prompt: c
    };
  }
  /**
   * Generates an output from the agent (non-streaming).
   */
  async generate({
    abortSignal: e,
    ...t
  }) {
    return pI({
      ...await this.prepareCall(t),
      abortSignal: e
    });
  }
  /**
   * Streams an output from the agent (streaming).
   */
  async stream({
    abortSignal: e,
    experimental_transform: t,
    ...o
  }) {
    return _I({
      ...await this.prepareCall(o),
      abortSignal: e,
      experimental_transform: t
    });
  }
};
function hT({
  execute: e,
  onError: t = Dn,
  originalMessages: o,
  onFinish: n,
  generateId: r = Je
}) {
  let a;
  const s = [], i = new ReadableStream({
    start(m) {
      a = m;
    }
  });
  function u(m) {
    try {
      a.enqueue(m);
    } catch {
    }
  }
  try {
    const m = e({
      writer: {
        write(f) {
          u(f);
        },
        merge(f) {
          s.push(
            (async () => {
              const d = f.getReader();
              for (; ; ) {
                const { done: g, value: _ } = await d.read();
                if (g)
                  break;
                u(_);
              }
            })().catch((d) => {
              u({
                type: "error",
                errorText: t(d)
              });
            })
          );
        },
        onError: t
      }
    });
    m && s.push(
      m.catch((f) => {
        u({
          type: "error",
          errorText: t(f)
        });
      })
    );
  } catch (m) {
    u({
      type: "error",
      errorText: t(m)
    });
  }
  return new Promise(async (m) => {
    for (; s.length > 0; )
      await s.shift();
    m();
  }).finally(() => {
    try {
      a.close();
    } catch {
    }
  }), $p({
    stream: i,
    messageId: r(),
    originalMessages: o,
    onFinish: n,
    onError: t
  });
}
function gT({
  message: e,
  stream: t,
  onError: o,
  terminateOnError: n = !1
}) {
  var r;
  let a, s = !1;
  const i = new ReadableStream({
    start(m) {
      a = m;
    }
  }), u = ca({
    messageId: (r = e == null ? void 0 : e.id) != null ? r : "",
    lastMessage: e
  }), c = (m) => {
    o == null || o(m), !s && n && (s = !0, a == null || a.error(m));
  };
  return Hn({
    stream: pa({
      stream: t,
      runUpdateMessageJob(m) {
        return m({
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
  }), zt(i);
}
async function wI(e, t) {
  const o = [];
  t != null && t.ignoreIncompleteToolCalls && (e = e.map((n) => ({
    ...n,
    parts: n.parts.filter(
      (r) => !At(r) || r.state !== "input-streaming" && r.state !== "input-available"
    )
  })));
  for (const n of e)
    switch (n.role) {
      case "system": {
        const r = n.parts.filter(
          (s) => s.type === "text"
        ), a = r.reduce((s, i) => i.providerMetadata != null ? { ...s, ...i.providerMetadata } : s, {});
        o.push({
          role: "system",
          content: r.map((s) => s.text).join(""),
          ...Object.keys(a).length > 0 ? { providerOptions: a } : {}
        });
        break;
      }
      case "user": {
        o.push({
          role: "user",
          content: n.parts.map((r) => {
            var a;
            if (_r(r))
              return {
                type: "text",
                text: r.text,
                ...r.providerMetadata != null ? { providerOptions: r.providerMetadata } : {}
              };
            if (yr(r))
              return {
                type: "file",
                mediaType: r.mediaType,
                filename: r.filename,
                data: r.url,
                ...r.providerMetadata != null ? { providerOptions: r.providerMetadata } : {}
              };
            if (vr(r))
              return (a = t == null ? void 0 : t.convertDataPart) == null ? void 0 : a.call(
                t,
                r
              );
          }).filter(Wr)
        });
        break;
      }
      case "assistant": {
        if (n.parts != null) {
          let r = [];
          async function a() {
            var s, i, u, c, m, f;
            if (r.length === 0)
              return;
            const d = [];
            for (const _ of r)
              if (_r(_))
                d.push({
                  type: "text",
                  text: _.text,
                  ..._.providerMetadata != null ? { providerOptions: _.providerMetadata } : {}
                });
              else if (yr(_))
                d.push({
                  type: "file",
                  mediaType: _.mediaType,
                  filename: _.filename,
                  data: _.url
                });
              else if ($i(_))
                d.push({
                  type: "reasoning",
                  text: _.text,
                  providerOptions: _.providerMetadata
                });
              else if (At(_)) {
                const v = vn(_);
                _.state !== "input-streaming" && (d.push({
                  type: "tool-call",
                  toolCallId: _.toolCallId,
                  toolName: v,
                  input: _.state === "output-error" ? (s = _.input) != null ? s : "rawInput" in _ ? _.rawInput : void 0 : _.input,
                  providerExecuted: _.providerExecuted,
                  ..._.callProviderMetadata != null ? { providerOptions: _.callProviderMetadata } : {}
                }), _.approval != null && d.push({
                  type: "tool-approval-request",
                  approvalId: _.approval.id,
                  toolCallId: _.toolCallId
                }), _.providerExecuted === !0 && _.state !== "approval-responded" && (_.state === "output-available" || _.state === "output-error") && d.push({
                  type: "tool-result",
                  toolCallId: _.toolCallId,
                  toolName: v,
                  output: await oo({
                    toolCallId: _.toolCallId,
                    input: _.input,
                    output: _.state === "output-error" ? _.errorText : _.output,
                    tool: (i = t == null ? void 0 : t.tools) == null ? void 0 : i[v],
                    errorMode: _.state === "output-error" ? "json" : "none"
                  }),
                  ..._.callProviderMetadata != null ? { providerOptions: _.callProviderMetadata } : {}
                }));
              } else if (vr(_)) {
                const v = (u = t == null ? void 0 : t.convertDataPart) == null ? void 0 : u.call(
                  t,
                  _
                );
                v != null && d.push(v);
              } else {
                const v = _;
                throw new Error(`Unsupported part: ${v}`);
              }
            o.push({
              role: "assistant",
              content: d
            });
            const g = r.filter(
              (_) => {
                var v;
                return At(_) && (_.providerExecuted !== !0 || ((v = _.approval) == null ? void 0 : v.approved) != null);
              }
            );
            if (g.length > 0) {
              const _ = [];
              for (const v of g)
                if (((c = v.approval) == null ? void 0 : c.approved) != null && _.push({
                  type: "tool-approval-response",
                  approvalId: v.approval.id,
                  approved: v.approval.approved,
                  reason: v.approval.reason,
                  providerExecuted: v.providerExecuted
                }), v.providerExecuted !== !0)
                  switch (v.state) {
                    case "output-denied": {
                      _.push({
                        type: "tool-result",
                        toolCallId: v.toolCallId,
                        toolName: vn(v),
                        output: {
                          type: "error-text",
                          value: (m = v.approval.reason) != null ? m : "Tool execution denied."
                        },
                        ...v.callProviderMetadata != null ? { providerOptions: v.callProviderMetadata } : {}
                      });
                      break;
                    }
                    case "output-error":
                    case "output-available": {
                      const y = vn(v);
                      _.push({
                        type: "tool-result",
                        toolCallId: v.toolCallId,
                        toolName: y,
                        output: await oo({
                          toolCallId: v.toolCallId,
                          input: v.input,
                          output: v.state === "output-error" ? v.errorText : v.output,
                          tool: (f = t == null ? void 0 : t.tools) == null ? void 0 : f[y],
                          errorMode: v.state === "output-error" ? "text" : "none"
                        }),
                        ...v.callProviderMetadata != null ? { providerOptions: v.callProviderMetadata } : {}
                      });
                      break;
                    }
                  }
              _.length > 0 && o.push({
                role: "tool",
                content: _
              });
            }
            r = [];
          }
          for (const s of n.parts)
            _r(s) || $i(s) || yr(s) || At(s) || vr(s) ? r.push(s) : s.type === "step-start" && await a();
          await a();
          break;
        }
        break;
      }
      default: {
        const r = n.role;
        throw new kx({
          originalMessage: n,
          message: `Unsupported role: ${r}`
        });
      }
    }
  return o;
}
var xI = G(
  () => J(
    M(
      p({
        id: l(),
        role: le(["system", "user", "assistant"]),
        metadata: ve().optional(),
        parts: M(
          te([
            p({
              type: h("text"),
              text: l(),
              state: le(["streaming", "done"]).optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: h("reasoning"),
              text: l(),
              state: le(["streaming", "done"]).optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: h("source-url"),
              sourceId: l(),
              url: l(),
              title: l().optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: h("source-document"),
              sourceId: l(),
              mediaType: l(),
              title: l(),
              filename: l().optional(),
              providerMetadata: fe.optional()
            }),
            p({
              type: h("file"),
              mediaType: l(),
              filename: l().optional(),
              url: l(),
              providerMetadata: fe.optional()
            }),
            p({
              type: h("step-start")
            }),
            p({
              type: l().startsWith("data-"),
              id: l().optional(),
              data: ve()
            }),
            p({
              type: h("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: h("input-streaming"),
              input: ve().optional(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              approval: ke().optional()
            }),
            p({
              type: h("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: h("input-available"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: ke().optional()
            }),
            p({
              type: h("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: h("approval-requested"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: ke().optional(),
                reason: ke().optional()
              })
            }),
            p({
              type: h("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: h("approval-responded"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: K(),
                reason: l().optional()
              })
            }),
            p({
              type: h("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: h("output-available"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ve(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              preliminary: K().optional(),
              approval: p({
                id: l(),
                approved: h(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: h("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: h("output-error"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: l(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: h(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: h("dynamic-tool"),
              toolName: l(),
              toolCallId: l(),
              state: h("output-denied"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: h(!1),
                reason: l().optional()
              })
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: h("input-streaming"),
              providerExecuted: K().optional(),
              input: ve().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              approval: ke().optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: h("input-available"),
              providerExecuted: K().optional(),
              input: ve(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: ke().optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: h("approval-requested"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: ke().optional(),
                reason: ke().optional()
              })
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: h("approval-responded"),
              input: ve(),
              providerExecuted: K().optional(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: K(),
                reason: l().optional()
              })
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: h("output-available"),
              providerExecuted: K().optional(),
              input: ve(),
              output: ve(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              preliminary: K().optional(),
              approval: p({
                id: l(),
                approved: h(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: h("output-error"),
              providerExecuted: K().optional(),
              input: ve(),
              output: ke().optional(),
              errorText: l(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: h(!0),
                reason: l().optional()
              }).optional()
            }),
            p({
              type: l().startsWith("tool-"),
              toolCallId: l(),
              state: h("output-denied"),
              providerExecuted: K().optional(),
              input: ve(),
              output: ke().optional(),
              errorText: ke().optional(),
              callProviderMetadata: fe.optional(),
              approval: p({
                id: l(),
                approved: h(!1),
                reason: l().optional()
              })
            })
          ])
        ).nonempty("Message must contain at least one part")
      })
    ).nonempty("Messages array must not be empty")
  )
);
async function II({
  messages: e,
  metadataSchema: t,
  dataSchemas: o,
  tools: n
}) {
  try {
    if (e == null)
      return {
        success: !1,
        error: new Ae({
          parameter: "messages",
          value: e,
          message: "messages parameter must be provided"
        })
      };
    const r = await Oe({
      value: e,
      schema: xI
    });
    if (t)
      for (const a of r)
        await Oe({
          value: a.metadata,
          schema: t
        });
    if (o)
      for (const a of r) {
        const s = a.parts.filter(
          (i) => i.type.startsWith("data-")
        );
        for (const i of s) {
          const u = i.type.slice(5), c = o[u];
          if (!c)
            return {
              success: !1,
              error: new st({
                value: i.data,
                cause: `No data schema found for data part ${u}`
              })
            };
          await Oe({
            value: i.data,
            schema: c
          });
        }
      }
    if (n)
      for (const a of r) {
        const s = a.parts.filter(
          (i) => i.type.startsWith("tool-")
        );
        for (const i of s) {
          const u = i.type.slice(5), c = n[u];
          if (!c)
            return {
              success: !1,
              error: new st({
                value: i.input,
                cause: `No tool schema found for tool part ${u}`
              })
            };
          (i.state === "input-available" || i.state === "output-available" || i.state === "output-error" && i.input !== void 0) && await Oe({
            value: i.input,
            schema: c.inputSchema
          }), i.state === "output-available" && c.outputSchema && await Oe({
            value: i.output,
            schema: c.outputSchema
          });
        }
      }
    return {
      success: !0,
      data: r
    };
  } catch (r) {
    return {
      success: !1,
      error: r
    };
  }
}
async function TI({
  messages: e,
  metadataSchema: t,
  dataSchemas: o,
  tools: n
}) {
  const r = await II({
    messages: e,
    metadataSchema: t,
    dataSchemas: o,
    tools: n
  });
  if (!r.success)
    throw r.error;
  return r.data;
}
async function Dp({
  agent: e,
  uiMessages: t,
  options: o,
  abortSignal: n,
  experimental_transform: r,
  ...a
}) {
  const s = await TI({
    messages: t,
    tools: e.tools
  }), i = await wI(s, {
    tools: e.tools
  });
  return (await e.stream({
    prompt: i,
    options: o,
    abortSignal: n,
    experimental_transform: r
  })).toUIMessageStream(a);
}
async function vT({
  headers: e,
  status: t,
  statusText: o,
  consumeSseStream: n,
  ...r
}) {
  return Np({
    headers: e,
    status: t,
    statusText: o,
    consumeSseStream: n,
    stream: await Dp(r)
  });
}
async function _T({
  response: e,
  headers: t,
  status: o,
  statusText: n,
  consumeSseStream: r,
  ...a
}) {
  Pp({
    response: e,
    headers: t,
    status: o,
    statusText: n,
    consumeSseStream: r,
    stream: await Dp(a)
  });
}
async function yT({
  model: e,
  value: t,
  providerOptions: o,
  maxRetries: n,
  abortSignal: r,
  headers: a,
  experimental_telemetry: s
}) {
  const i = sp(e), { maxRetries: u, retry: c } = qt({
    maxRetries: n,
    abortSignal: r
  }), m = tt(
    a ?? {},
    `ai/${Mt}`
  ), f = po({
    model: i,
    telemetry: s,
    headers: m,
    settings: { maxRetries: u }
  }), d = mo(s);
  return lt({
    name: "ai.embed",
    attributes: Ce({
      telemetry: s,
      attributes: {
        ...it({ operationId: "ai.embed", telemetry: s }),
        ...f,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: d,
    fn: async (g) => {
      const { embedding: _, usage: v, warnings: y, response: S, providerMetadata: C } = await c(
        () => (
          // nested spans to align with the embedMany telemetry data:
          lt({
            name: "ai.embed.doEmbed",
            attributes: Ce({
              telemetry: s,
              attributes: {
                ...it({
                  operationId: "ai.embed.doEmbed",
                  telemetry: s
                }),
                ...f,
                // specific settings that only make sense on the outer level:
                "ai.values": { input: () => [JSON.stringify(t)] }
              }
            }),
            tracer: d,
            fn: async (w) => {
              var E;
              const k = await i.doEmbed({
                values: [t],
                abortSignal: r,
                headers: m,
                providerOptions: o
              }), T = k.embeddings[0], I = (E = k.usage) != null ? E : { tokens: NaN };
              return w.setAttributes(
                await Ce({
                  telemetry: s,
                  attributes: {
                    "ai.embeddings": {
                      output: () => k.embeddings.map(
                        (L) => JSON.stringify(L)
                      )
                    },
                    "ai.usage.tokens": I.tokens
                  }
                })
              ), {
                embedding: T,
                usage: I,
                warnings: k.warnings,
                providerMetadata: k.providerMetadata,
                response: k.response
              };
            }
          })
        )
      );
      return g.setAttributes(
        await Ce({
          telemetry: s,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(_) },
            "ai.usage.tokens": v.tokens
          }
        })
      ), It({ warnings: y, provider: i.provider, model: i.modelId }), new kI({
        value: t,
        embedding: _,
        usage: v,
        warnings: y,
        providerMetadata: C,
        response: S
      });
    }
  });
}
var kI = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.response = e.response;
  }
};
function qi(e, t) {
  if (t <= 0)
    throw new Error("chunkSize must be greater than 0");
  const o = [];
  for (let n = 0; n < e.length; n += t)
    o.push(e.slice(n, n + t));
  return o;
}
async function bT({
  model: e,
  values: t,
  maxParallelCalls: o = 1 / 0,
  maxRetries: n,
  abortSignal: r,
  headers: a,
  providerOptions: s,
  experimental_telemetry: i
}) {
  const u = sp(e), { maxRetries: c, retry: m } = qt({
    maxRetries: n,
    abortSignal: r
  }), f = tt(
    a ?? {},
    `ai/${Mt}`
  ), d = po({
    model: u,
    telemetry: i,
    headers: f,
    settings: { maxRetries: c }
  }), g = mo(i);
  return lt({
    name: "ai.embedMany",
    attributes: Ce({
      telemetry: i,
      attributes: {
        ...it({ operationId: "ai.embedMany", telemetry: i }),
        ...d,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((_) => JSON.stringify(_))
        }
      }
    }),
    tracer: g,
    fn: async (_) => {
      var v;
      const [y, S] = await Promise.all([
        u.maxEmbeddingsPerCall,
        u.supportsParallelCalls
      ]);
      if (y == null || y === 1 / 0) {
        const { embeddings: P, usage: q, warnings: N, response: j, providerMetadata: A } = await m(() => lt({
          name: "ai.embedMany.doEmbed",
          attributes: Ce({
            telemetry: i,
            attributes: {
              ...it({
                operationId: "ai.embedMany.doEmbed",
                telemetry: i
              }),
              ...d,
              // specific settings that only make sense on the outer level:
              "ai.values": {
                input: () => t.map((D) => JSON.stringify(D))
              }
            }
          }),
          tracer: g,
          fn: async (D) => {
            var U;
            const ne = await u.doEmbed({
              values: t,
              abortSignal: r,
              headers: f,
              providerOptions: s
            }), V = ne.embeddings, B = (U = ne.usage) != null ? U : { tokens: NaN };
            return D.setAttributes(
              await Ce({
                telemetry: i,
                attributes: {
                  "ai.embeddings": {
                    output: () => V.map(
                      (ue) => JSON.stringify(ue)
                    )
                  },
                  "ai.usage.tokens": B.tokens
                }
              })
            ), {
              embeddings: V,
              usage: B,
              warnings: ne.warnings,
              providerMetadata: ne.providerMetadata,
              response: ne.response
            };
          }
        }));
        return _.setAttributes(
          await Ce({
            telemetry: i,
            attributes: {
              "ai.embeddings": {
                output: () => P.map((D) => JSON.stringify(D))
              },
              "ai.usage.tokens": q.tokens
            }
          })
        ), It({
          warnings: N,
          provider: u.provider,
          model: u.modelId
        }), new ji({
          values: t,
          embeddings: P,
          usage: q,
          warnings: N,
          providerMetadata: A,
          responses: [j]
        });
      }
      const C = qi(t, y), w = [], E = [], k = [];
      let T = 0, I;
      const L = qi(
        C,
        S ? o : 1
      );
      for (const P of L) {
        const q = await Promise.all(
          P.map((N) => m(() => lt({
            name: "ai.embedMany.doEmbed",
            attributes: Ce({
              telemetry: i,
              attributes: {
                ...it({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...d,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => N.map((j) => JSON.stringify(j))
                }
              }
            }),
            tracer: g,
            fn: async (j) => {
              var A;
              const D = await u.doEmbed({
                values: N,
                abortSignal: r,
                headers: f,
                providerOptions: s
              }), U = D.embeddings, ne = (A = D.usage) != null ? A : { tokens: NaN };
              return j.setAttributes(
                await Ce({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => U.map(
                        (V) => JSON.stringify(V)
                      )
                    },
                    "ai.usage.tokens": ne.tokens
                  }
                })
              ), {
                embeddings: U,
                usage: ne,
                warnings: D.warnings,
                providerMetadata: D.providerMetadata,
                response: D.response
              };
            }
          })))
        );
        for (const N of q)
          if (w.push(...N.embeddings), E.push(...N.warnings), k.push(N.response), T += N.usage.tokens, N.providerMetadata)
            if (!I)
              I = { ...N.providerMetadata };
            else
              for (const [j, A] of Object.entries(
                N.providerMetadata
              ))
                I[j] = {
                  ...(v = I[j]) != null ? v : {},
                  ...A
                };
      }
      return _.setAttributes(
        await Ce({
          telemetry: i,
          attributes: {
            "ai.embeddings": {
              output: () => w.map((P) => JSON.stringify(P))
            },
            "ai.usage.tokens": T
          }
        })
      ), It({
        warnings: E,
        provider: u.provider,
        model: u.modelId
      }), new ji({
        values: t,
        embeddings: w,
        usage: { tokens: T },
        warnings: E,
        providerMetadata: I,
        responses: k
      });
    }
  });
}
var ji = class {
  constructor(e) {
    this.values = e.values, this.embeddings = e.embeddings, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.responses = e.responses;
  }
};
async function SI({
  model: e,
  prompt: t,
  n: o = 1,
  maxImagesPerCall: n,
  size: r,
  aspectRatio: a,
  seed: s,
  providerOptions: i,
  maxRetries: u,
  abortSignal: c,
  headers: m
}) {
  var f, d;
  const g = Ox(e), _ = tt(
    m ?? {},
    `ai/${Mt}`
  ), { retry: v } = qt({
    maxRetries: u,
    abortSignal: c
  }), y = (f = n ?? await EI(g)) != null ? f : 1, S = Math.ceil(o / y), C = Array.from({ length: S }, (P, q) => {
    if (q < S - 1)
      return y;
    const N = o % y;
    return N === 0 ? y : N;
  }), w = await Promise.all(
    C.map(
      async (P) => v(() => {
        const { prompt: q, files: N, mask: j } = RI(t);
        return g.doGenerate({
          prompt: q,
          files: N,
          mask: j,
          n: P,
          abortSignal: c,
          headers: _,
          size: r,
          aspectRatio: a,
          seed: s,
          providerOptions: i ?? {}
        });
      })
    )
  ), E = [], k = [], T = [], I = {};
  let L = {
    inputTokens: void 0,
    outputTokens: void 0,
    totalTokens: void 0
  };
  for (const P of w) {
    if (E.push(
      ...P.images.map(
        (q) => {
          var N;
          return new Bn({
            data: q,
            mediaType: (N = Co({
              data: q,
              signatures: Nn
            })) != null ? N : "image/png"
          });
        }
      )
    ), k.push(...P.warnings), P.usage != null && (L = eI(L, P.usage)), P.providerMetadata)
      for (const [q, N] of Object.entries(P.providerMetadata))
        if (q === "gateway") {
          const j = I[q];
          j != null && typeof j == "object" ? I[q] = {
            ...j,
            ...N
          } : I[q] = N;
          const A = I[q].images;
          Array.isArray(A) && A.length === 0 && delete I[q].images;
        } else
          (d = I[q]) != null || (I[q] = { images: [] }), I[q].images.push(
            ...P.providerMetadata[q].images
          );
    T.push(P.response);
  }
  if (It({ warnings: k, provider: g.provider, model: g.modelId }), !E.length)
    throw new fx({ responses: T });
  return new CI({
    images: E,
    warnings: k,
    responses: T,
    providerMetadata: I,
    usage: L
  });
}
var CI = class {
  constructor(e) {
    this.images = e.images, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = e.providerMetadata, this.usage = e.usage;
  }
  get image() {
    return this.images[0];
  }
};
async function EI(e) {
  return e.maxImagesPerCall instanceof Function ? e.maxImagesPerCall({
    modelId: e.modelId
  }) : e.maxImagesPerCall;
}
function RI(e) {
  return typeof e == "string" ? { prompt: e, files: void 0, mask: void 0 } : {
    prompt: e.text,
    files: e.images.map(Di),
    mask: e.mask ? Di(e.mask) : void 0
  };
}
function Di(e) {
  if (typeof e == "string" && e.startsWith("http"))
    return {
      type: "url",
      url: e
    };
  if (typeof e == "string" && e.startsWith("data:")) {
    const { mediaType: o, base64Content: n } = up(e);
    if (n != null) {
      const r = Wt(n);
      return {
        type: "file",
        data: r,
        mediaType: o || Co({
          data: r,
          signatures: Nn
        }) || "image/png"
      };
    }
  }
  const t = dp(e);
  return {
    type: "file",
    data: t,
    mediaType: Co({
      data: t,
      signatures: Nn
    }) || "image/png"
  };
}
var wT = SI;
function MI(e) {
  const t = e.filter(
    (o) => o.type === "reasoning"
  );
  return t.length === 0 ? void 0 : t.map((o) => o.text).join(`
`);
}
var NI = {
  type: "no-schema",
  jsonSchema: async () => {
  },
  async validatePartialResult({ value: e, textDelta: t }) {
    return { success: !0, value: { partial: e, textDelta: t } };
  },
  async validateFinalResult(e, t) {
    return e === void 0 ? {
      success: !1,
      error: new _t({
        message: "No object generated: response did not match schema.",
        text: t.text,
        response: t.response,
        usage: t.usage,
        finishReason: t.finishReason
      })
    } : { success: !0, value: e };
  },
  createElementStream() {
    throw new Ge({
      functionality: "element streams in no-schema mode"
    });
  }
}, OI = (e) => ({
  type: "object",
  jsonSchema: async () => await e.jsonSchema,
  async validatePartialResult({ value: t, textDelta: o }) {
    return {
      success: !0,
      value: {
        // Note: currently no validation of partial results:
        partial: t,
        textDelta: o
      }
    };
  },
  async validateFinalResult(t) {
    return ft({ value: t, schema: e });
  },
  createElementStream() {
    throw new Ge({
      functionality: "element streams in object mode"
    });
  }
}), AI = (e) => ({
  type: "array",
  // wrap in object that contains array of elements, since most LLMs will not
  // be able to generate an array directly:
  // possible future optimization: use arrays directly when model supports grammar-guided generation
  jsonSchema: async () => {
    const { $schema: t, ...o } = await e.jsonSchema;
    return {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        elements: { type: "array", items: o }
      },
      required: ["elements"],
      additionalProperties: !1
    };
  },
  async validatePartialResult({
    value: t,
    latestObject: o,
    isFirstDelta: n,
    isFinalDelta: r
  }) {
    var a;
    if (!yn(t) || !La(t.elements))
      return {
        success: !1,
        error: new st({
          value: t,
          cause: "value must be an object that contains an array of elements"
        })
      };
    const s = t.elements, i = [];
    for (let m = 0; m < s.length; m++) {
      const f = s[m], d = await ft({ value: f, schema: e });
      if (!(m === s.length - 1 && !r)) {
        if (!d.success)
          return d;
        i.push(d.value);
      }
    }
    const u = (a = o == null ? void 0 : o.length) != null ? a : 0;
    let c = "";
    return n && (c += "["), u > 0 && (c += ","), c += i.slice(u).map((m) => JSON.stringify(m)).join(","), r && (c += "]"), {
      success: !0,
      value: {
        partial: i,
        textDelta: c
      }
    };
  },
  async validateFinalResult(t) {
    if (!yn(t) || !La(t.elements))
      return {
        success: !1,
        error: new st({
          value: t,
          cause: "value must be an object that contains an array of elements"
        })
      };
    const o = t.elements;
    for (const n of o) {
      const r = await ft({ value: n, schema: e });
      if (!r.success)
        return r;
    }
    return { success: !0, value: o };
  },
  createElementStream(t) {
    let o = 0;
    return zt(
      t.pipeThrough(
        new TransformStream({
          transform(n, r) {
            switch (n.type) {
              case "object": {
                const a = n.object;
                for (; o < a.length; o++)
                  r.enqueue(a[o]);
                break;
              }
              case "text-delta":
              case "finish":
              case "error":
                break;
              default: {
                const a = n;
                throw new Error(
                  `Unsupported chunk type: ${a}`
                );
              }
            }
          }
        })
      )
    );
  }
}), $I = (e) => ({
  type: "enum",
  // wrap in object that contains result, since most LLMs will not
  // be able to generate an enum value directly:
  // possible future optimization: use enums directly when model supports top-level enums
  jsonSchema: async () => ({
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      result: { type: "string", enum: e }
    },
    required: ["result"],
    additionalProperties: !1
  }),
  async validateFinalResult(t) {
    if (!yn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new st({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const o = t.result;
    return e.includes(o) ? { success: !0, value: o } : {
      success: !1,
      error: new st({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  async validatePartialResult({ value: t, textDelta: o }) {
    if (!yn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new st({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const n = t.result, r = e.filter(
      (a) => a.startsWith(n)
    );
    return t.result.length === 0 || r.length === 0 ? {
      success: !1,
      error: new st({
        value: t,
        cause: "value must be a string in the enum"
      })
    } : {
      success: !0,
      value: {
        partial: r.length > 1 ? n : r[0],
        textDelta: o
      }
    };
  },
  createElementStream() {
    throw new Ge({
      functionality: "element streams in enum mode"
    });
  }
});
function zp({
  output: e,
  schema: t,
  enumValues: o
}) {
  switch (e) {
    case "object":
      return OI(Gt(t));
    case "array":
      return AI(Gt(t));
    case "enum":
      return $I(o);
    case "no-schema":
      return NI;
    default: {
      const n = e;
      throw new Error(`Unsupported output: ${n}`);
    }
  }
}
async function zi(e, t, o) {
  const n = await xt({ text: e });
  if (!n.success)
    throw new _t({
      message: "No object generated: could not parse the response.",
      cause: n.error,
      text: e,
      response: o.response,
      usage: o.usage,
      finishReason: o.finishReason
    });
  const r = await t.validateFinalResult(
    n.value,
    {
      text: e,
      response: o.response,
      usage: o.usage
    }
  );
  if (!r.success)
    throw new _t({
      message: "No object generated: response did not match schema.",
      cause: r.error,
      text: e,
      response: o.response,
      usage: o.usage,
      finishReason: o.finishReason
    });
  return r.value;
}
async function Up(e, t, o, n) {
  try {
    return await zi(e, t, n);
  } catch (r) {
    if (o != null && _t.isInstance(r) && (Zo.isInstance(r.cause) || st.isInstance(r.cause))) {
      const a = await o({
        text: e,
        error: r.cause
      });
      if (a === null)
        throw r;
      return await zi(
        a,
        t,
        n
      );
    }
    throw r;
  }
}
function Zp({
  output: e,
  schema: t,
  schemaName: o,
  schemaDescription: n,
  enumValues: r
}) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new Ae({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t != null)
      throw new Ae({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output."
      });
    if (n != null)
      throw new Ae({
        parameter: "schemaDescription",
        value: n,
        message: "Schema description is not supported for no-schema output."
      });
    if (o != null)
      throw new Ae({
        parameter: "schemaName",
        value: o,
        message: "Schema name is not supported for no-schema output."
      });
    if (r != null)
      throw new Ae({
        parameter: "enumValues",
        value: r,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (t == null)
      throw new Ae({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output."
      });
    if (r != null)
      throw new Ae({
        parameter: "enumValues",
        value: r,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (t == null)
      throw new Ae({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output."
      });
    if (r != null)
      throw new Ae({
        parameter: "enumValues",
        value: r,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new Ae({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output."
      });
    if (n != null)
      throw new Ae({
        parameter: "schemaDescription",
        value: n,
        message: "Schema description is not supported for enum output."
      });
    if (o != null)
      throw new Ae({
        parameter: "schemaName",
        value: o,
        message: "Schema name is not supported for enum output."
      });
    if (r == null)
      throw new Ae({
        parameter: "enumValues",
        value: r,
        message: "Enum values are required for enum output."
      });
    for (const a of r)
      if (typeof a != "string")
        throw new Ae({
          parameter: "enumValues",
          value: a,
          message: "Enum values must be strings."
        });
  }
}
var PI = Ko({ prefix: "aiobj", size: 24 });
async function xT(e) {
  const {
    model: t,
    output: o = "object",
    system: n,
    prompt: r,
    messages: a,
    maxRetries: s,
    abortSignal: i,
    headers: u,
    experimental_repairText: c,
    experimental_telemetry: m,
    experimental_download: f,
    providerOptions: d,
    _internal: {
      generateId: g = PI,
      currentDate: _ = () => /* @__PURE__ */ new Date()
    } = {},
    ...v
  } = e, y = So(t), S = "enum" in e ? e.enum : void 0, {
    schema: C,
    schemaDescription: w,
    schemaName: E
  } = "schema" in e ? e : {};
  Zp({
    output: o,
    schema: C,
    schemaName: E,
    schemaDescription: w,
    enumValues: S
  });
  const { maxRetries: k, retry: T } = qt({
    maxRetries: s,
    abortSignal: i
  }), I = zp({
    output: o,
    schema: C,
    enumValues: S
  }), L = so(v), P = tt(
    u ?? {},
    `ai/${Mt}`
  ), q = po({
    model: y,
    telemetry: m,
    headers: P,
    settings: { ...L, maxRetries: k }
  }), N = mo(m), j = await I.jsonSchema();
  try {
    return await lt({
      name: "ai.generateObject",
      attributes: Ce({
        telemetry: m,
        attributes: {
          ...it({
            operationId: "ai.generateObject",
            telemetry: m
          }),
          ...q,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: n, prompt: r, messages: a })
          },
          "ai.schema": j != null ? { input: () => JSON.stringify(j) } : void 0,
          "ai.schema.name": E,
          "ai.schema.description": w,
          "ai.settings.output": I.type
        }
      }),
      tracer: N,
      fn: async (A) => {
        var D;
        let U, ne, V, B, ue, W, X, z;
        const we = await Vn({
          system: n,
          prompt: r,
          messages: a
        }), Q = await Fn({
          prompt: we,
          supportedUrls: await y.supportedUrls,
          download: f
        }), oe = await T(
          () => lt({
            name: "ai.generateObject.doGenerate",
            attributes: Ce({
              telemetry: m,
              attributes: {
                ...it({
                  operationId: "ai.generateObject.doGenerate",
                  telemetry: m
                }),
                ...q,
                "ai.prompt.messages": {
                  input: () => Gn(Q)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": y.provider,
                "gen_ai.request.model": y.modelId,
                "gen_ai.request.frequency_penalty": L.frequencyPenalty,
                "gen_ai.request.max_tokens": L.maxOutputTokens,
                "gen_ai.request.presence_penalty": L.presencePenalty,
                "gen_ai.request.temperature": L.temperature,
                "gen_ai.request.top_k": L.topK,
                "gen_ai.request.top_p": L.topP
              }
            }),
            tracer: N,
            fn: async (R) => {
              var ae, Z, ce, H, Ie, Se, be, _e;
              const ee = await y.doGenerate({
                responseFormat: {
                  type: "json",
                  schema: j,
                  name: E,
                  description: w
                },
                ...so(v),
                prompt: Q,
                providerOptions: d,
                abortSignal: i,
                headers: P
              }), ie = {
                id: (Z = (ae = ee.response) == null ? void 0 : ae.id) != null ? Z : g(),
                timestamp: (H = (ce = ee.response) == null ? void 0 : ce.timestamp) != null ? H : _(),
                modelId: (Se = (Ie = ee.response) == null ? void 0 : Ie.modelId) != null ? Se : y.modelId,
                headers: (be = ee.response) == null ? void 0 : be.headers,
                body: (_e = ee.response) == null ? void 0 : _e.body
              }, Te = Or(ee.content), he = MI(ee.content);
              if (Te === void 0)
                throw new _t({
                  message: "No object generated: the model did not return a response.",
                  response: ie,
                  usage: Wo(ee.usage),
                  finishReason: ee.finishReason.unified
                });
              return R.setAttributes(
                await Ce({
                  telemetry: m,
                  attributes: {
                    "ai.response.finishReason": ee.finishReason.unified,
                    "ai.response.object": { output: () => Te },
                    "ai.response.id": ie.id,
                    "ai.response.model": ie.modelId,
                    "ai.response.timestamp": ie.timestamp.toISOString(),
                    "ai.response.providerMetadata": JSON.stringify(
                      ee.providerMetadata
                    ),
                    // TODO rename telemetry attributes to inputTokens and outputTokens
                    "ai.usage.promptTokens": ee.usage.inputTokens.total,
                    "ai.usage.completionTokens": ee.usage.outputTokens.total,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [
                      ee.finishReason.unified
                    ],
                    "gen_ai.response.id": ie.id,
                    "gen_ai.response.model": ie.modelId,
                    "gen_ai.usage.input_tokens": ee.usage.inputTokens.total,
                    "gen_ai.usage.output_tokens": ee.usage.outputTokens.total
                  }
                })
              ), {
                ...ee,
                objectText: Te,
                reasoning: he,
                responseData: ie
              };
            }
          })
        );
        U = oe.objectText, ne = oe.finishReason.unified, V = Wo(oe.usage), B = oe.warnings, X = oe.providerMetadata, W = (D = oe.request) != null ? D : {}, ue = oe.responseData, z = oe.reasoning, It({
          warnings: B,
          provider: y.provider,
          model: y.modelId
        });
        const O = await Up(
          U,
          I,
          c,
          {
            response: ue,
            usage: V,
            finishReason: ne
          }
        );
        return A.setAttributes(
          await Ce({
            telemetry: m,
            attributes: {
              "ai.response.finishReason": ne,
              "ai.response.object": {
                output: () => JSON.stringify(O)
              },
              "ai.response.providerMetadata": JSON.stringify(
                X
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": V.inputTokens,
              "ai.usage.completionTokens": V.outputTokens
            }
          })
        ), new qI({
          object: O,
          reasoning: z,
          finishReason: ne,
          usage: V,
          warnings: B,
          request: W,
          response: ue,
          providerMetadata: X
        });
      }
    });
  } catch (A) {
    throw Jn(A);
  }
}
var qI = class {
  constructor(e) {
    this.object = e.object, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.response = e.response, this.request = e.request, this.reasoning = e.reasoning;
  }
  toJsonResponse(e) {
    var t;
    return new Response(JSON.stringify(this.object), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: nn(e == null ? void 0 : e.headers, {
        "content-type": "application/json; charset=utf-8"
      })
    });
  }
};
function IT(e, t) {
  if (e.length !== t.length)
    throw new Ae({
      parameter: "vector1,vector2",
      value: { vector1Length: e.length, vector2Length: t.length },
      message: "Vectors must have the same length"
    });
  const o = e.length;
  if (o === 0)
    return 0;
  let n = 0, r = 0, a = 0;
  for (let s = 0; s < o; s++) {
    const i = e[s], u = t[s];
    n += i * i, r += u * u, a += i * u;
  }
  return n === 0 || r === 0 ? 0 : a / (Math.sqrt(n) * Math.sqrt(r));
}
function TT(e) {
  const [t, o] = e.split(",");
  if (t.split(";")[0].split(":")[1] == null || o == null)
    throw new Error("Invalid data URL format");
  try {
    return window.atob(o);
  } catch {
    throw new Error("Error decoding data URL");
  }
}
function An(e, t) {
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
    for (let r = 0; r < e.length; r++)
      if (!An(e[r], t[r]))
        return !1;
    return !0;
  }
  const o = Object.keys(e), n = Object.keys(t);
  if (o.length !== n.length)
    return !1;
  for (const r of o)
    if (!n.includes(r) || !An(e[r], t[r]))
      return !1;
  return !0;
}
var jI = class {
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
    return new Promise((t, o) => {
      this.queue.push(async () => {
        try {
          await e(), t();
        } catch (n) {
          o(n);
        }
      }), this.processQueue();
    });
  }
};
function kT({
  chunks: e,
  initialDelayInMs: t = 0,
  chunkDelayInMs: o = 0,
  _internal: n
}) {
  var r;
  const a = (r = n == null ? void 0 : n.delay) != null ? r : Hr;
  let s = 0;
  return new ReadableStream({
    async pull(i) {
      s < e.length ? (await a(s === 0 ? t : o), i.enqueue(e[s++])) : i.close();
    }
  });
}
var DI = Ko({ prefix: "aiobj", size: 24 });
function ST(e) {
  const {
    model: t,
    output: o = "object",
    system: n,
    prompt: r,
    messages: a,
    maxRetries: s,
    abortSignal: i,
    headers: u,
    experimental_repairText: c,
    experimental_telemetry: m,
    experimental_download: f,
    providerOptions: d,
    onError: g = ({ error: L }) => {
      console.error(L);
    },
    onFinish: _,
    _internal: {
      generateId: v = DI,
      currentDate: y = () => /* @__PURE__ */ new Date(),
      now: S = jp
    } = {},
    ...C
  } = e, w = "enum" in e && e.enum ? e.enum : void 0, {
    schema: E,
    schemaDescription: k,
    schemaName: T
  } = "schema" in e ? e : {};
  Zp({
    output: o,
    schema: E,
    schemaName: T,
    schemaDescription: k,
    enumValues: w
  });
  const I = zp({
    output: o,
    schema: E,
    enumValues: w
  });
  return new zI({
    model: t,
    telemetry: m,
    headers: u,
    settings: C,
    maxRetries: s,
    abortSignal: i,
    outputStrategy: I,
    system: n,
    prompt: r,
    messages: a,
    schemaName: T,
    schemaDescription: k,
    providerOptions: d,
    repairText: c,
    onError: g,
    onFinish: _,
    download: f,
    generateId: v,
    currentDate: y,
    now: S
  });
}
var zI = class {
  constructor({
    model: e,
    headers: t,
    telemetry: o,
    settings: n,
    maxRetries: r,
    abortSignal: a,
    outputStrategy: s,
    system: i,
    prompt: u,
    messages: c,
    schemaName: m,
    schemaDescription: f,
    providerOptions: d,
    repairText: g,
    onError: _,
    onFinish: v,
    download: y,
    generateId: S,
    currentDate: C,
    now: w
  }) {
    this._object = new wt(), this._usage = new wt(), this._providerMetadata = new wt(), this._warnings = new wt(), this._request = new wt(), this._response = new wt(), this._finishReason = new wt();
    const E = So(e), { maxRetries: k, retry: T } = qt({
      maxRetries: r,
      abortSignal: a
    }), I = so(n), L = po({
      model: E,
      telemetry: o,
      headers: t,
      settings: { ...I, maxRetries: k }
    }), P = mo(o), q = this, N = qp(), j = new TransformStream({
      transform(A, D) {
        D.enqueue(A), A.type === "error" && _({ error: Jn(A.error) });
      }
    });
    this.baseStream = N.stream.pipeThrough(j), lt({
      name: "ai.streamObject",
      attributes: Ce({
        telemetry: o,
        attributes: {
          ...it({
            operationId: "ai.streamObject",
            telemetry: o
          }),
          ...L,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: i, prompt: u, messages: c })
          },
          "ai.schema": {
            input: async () => JSON.stringify(await s.jsonSchema())
          },
          "ai.schema.name": m,
          "ai.schema.description": f,
          "ai.settings.output": s.type
        }
      }),
      tracer: P,
      endWhenDone: !1,
      fn: async (A) => {
        const D = await Vn({
          system: i,
          prompt: u,
          messages: c
        }), U = {
          responseFormat: {
            type: "json",
            schema: await s.jsonSchema(),
            name: m,
            description: f
          },
          ...so(n),
          prompt: await Fn({
            prompt: D,
            supportedUrls: await E.supportedUrls,
            download: y
          }),
          providerOptions: d,
          abortSignal: a,
          headers: t,
          includeRawChunks: !1
        }, ne = {
          transform: (ee, ie) => {
            switch (ee.type) {
              case "text-delta":
                ie.enqueue(ee.delta);
                break;
              case "response-metadata":
              case "finish":
              case "error":
              case "stream-start":
                ie.enqueue(ee);
                break;
            }
          }
        }, {
          result: { stream: V, response: B, request: ue },
          doStreamSpan: W,
          startTimestampMs: X
        } = await T(
          () => lt({
            name: "ai.streamObject.doStream",
            attributes: Ce({
              telemetry: o,
              attributes: {
                ...it({
                  operationId: "ai.streamObject.doStream",
                  telemetry: o
                }),
                ...L,
                "ai.prompt.messages": {
                  input: () => Gn(U.prompt)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": E.provider,
                "gen_ai.request.model": E.modelId,
                "gen_ai.request.frequency_penalty": I.frequencyPenalty,
                "gen_ai.request.max_tokens": I.maxOutputTokens,
                "gen_ai.request.presence_penalty": I.presencePenalty,
                "gen_ai.request.temperature": I.temperature,
                "gen_ai.request.top_k": I.topK,
                "gen_ai.request.top_p": I.topP
              }
            }),
            tracer: P,
            endWhenDone: !1,
            fn: async (ee) => ({
              startTimestampMs: w(),
              doStreamSpan: ee,
              result: await E.doStream(U)
            })
          })
        );
        q._request.resolve(ue ?? {});
        let z, we = gn(), Q, oe, O, R, ae = "", Z = "", ce = {
          id: S(),
          timestamp: C(),
          modelId: E.modelId
        }, H, Ie, Se = !0, be = !0;
        const _e = V.pipeThrough(new TransformStream(ne)).pipeThrough(
          new TransformStream({
            async transform(ee, ie) {
              var Te, he, ge;
              if (typeof ee == "object" && ee.type === "stream-start") {
                z = ee.warnings;
                return;
              }
              if (Se) {
                const je = w() - X;
                Se = !1, W.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": je
                }), W.setAttributes({
                  "ai.stream.msToFirstChunk": je
                });
              }
              if (typeof ee == "string") {
                ae += ee, Z += ee;
                const { value: je, state: Y } = await Oo(ae);
                if (je !== void 0 && !An(H, je)) {
                  const b = await s.validatePartialResult({
                    value: je,
                    textDelta: Z,
                    latestObject: Ie,
                    isFirstDelta: be,
                    isFinalDelta: Y === "successful-parse"
                  });
                  b.success && !An(
                    Ie,
                    b.value.partial
                  ) && (H = je, Ie = b.value.partial, ie.enqueue({
                    type: "object",
                    object: Ie
                  }), ie.enqueue({
                    type: "text-delta",
                    textDelta: b.value.textDelta
                  }), Z = "", be = !1);
                }
                return;
              }
              switch (ee.type) {
                case "response-metadata": {
                  ce = {
                    id: (Te = ee.id) != null ? Te : ce.id,
                    timestamp: (he = ee.timestamp) != null ? he : ce.timestamp,
                    modelId: (ge = ee.modelId) != null ? ge : ce.modelId
                  };
                  break;
                }
                case "finish": {
                  Z !== "" && ie.enqueue({ type: "text-delta", textDelta: Z }), Q = ee.finishReason.unified, we = Wo(ee.usage), oe = ee.providerMetadata, ie.enqueue({
                    ...ee,
                    finishReason: ee.finishReason.unified,
                    usage: we,
                    response: ce
                  }), It({
                    warnings: z ?? [],
                    provider: E.provider,
                    model: E.modelId
                  }), q._usage.resolve(we), q._providerMetadata.resolve(oe), q._warnings.resolve(z), q._response.resolve({
                    ...ce,
                    headers: B == null ? void 0 : B.headers
                  }), q._finishReason.resolve(Q ?? "other");
                  try {
                    O = await Up(
                      ae,
                      s,
                      g,
                      {
                        response: ce,
                        usage: we,
                        finishReason: Q
                      }
                    ), q._object.resolve(O);
                  } catch (je) {
                    R = je, q._object.reject(je);
                  }
                  break;
                }
                default: {
                  ie.enqueue(ee);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(ee) {
              try {
                const ie = we ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                W.setAttributes(
                  await Ce({
                    telemetry: o,
                    attributes: {
                      "ai.response.finishReason": Q,
                      "ai.response.object": {
                        output: () => JSON.stringify(O)
                      },
                      "ai.response.id": ce.id,
                      "ai.response.model": ce.modelId,
                      "ai.response.timestamp": ce.timestamp.toISOString(),
                      "ai.response.providerMetadata": JSON.stringify(oe),
                      "ai.usage.inputTokens": ie.inputTokens,
                      "ai.usage.outputTokens": ie.outputTokens,
                      "ai.usage.totalTokens": ie.totalTokens,
                      "ai.usage.reasoningTokens": ie.reasoningTokens,
                      "ai.usage.cachedInputTokens": ie.cachedInputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [Q],
                      "gen_ai.response.id": ce.id,
                      "gen_ai.response.model": ce.modelId,
                      "gen_ai.usage.input_tokens": ie.inputTokens,
                      "gen_ai.usage.output_tokens": ie.outputTokens
                    }
                  })
                ), W.end(), A.setAttributes(
                  await Ce({
                    telemetry: o,
                    attributes: {
                      "ai.usage.inputTokens": ie.inputTokens,
                      "ai.usage.outputTokens": ie.outputTokens,
                      "ai.usage.totalTokens": ie.totalTokens,
                      "ai.usage.reasoningTokens": ie.reasoningTokens,
                      "ai.usage.cachedInputTokens": ie.cachedInputTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(O)
                      },
                      "ai.response.providerMetadata": JSON.stringify(oe)
                    }
                  })
                ), await (v == null ? void 0 : v({
                  usage: ie,
                  object: O,
                  error: R,
                  response: {
                    ...ce,
                    headers: B == null ? void 0 : B.headers
                  },
                  warnings: z,
                  providerMetadata: oe
                }));
              } catch (ie) {
                ee.enqueue({ type: "error", error: ie });
              } finally {
                A.end();
              }
            }
          })
        );
        N.addStream(_e);
      }
    }).catch((A) => {
      N.addStream(
        new ReadableStream({
          start(D) {
            D.enqueue({ type: "error", error: A }), D.close();
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
    return zt(
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
                const o = e;
                throw new Error(`Unsupported chunk type: ${o}`);
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
    return zt(
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
                const o = e;
                throw new Error(`Unsupported chunk type: ${o}`);
              }
            }
          }
        })
      )
    );
  }
  get fullStream() {
    return zt(this.baseStream);
  }
  pipeTextStreamToResponse(e, t) {
    Ep({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toTextStreamResponse(e) {
    return Sp({
      textStream: this.textStream,
      ...e
    });
  }
}, UI = class extends Bn {
  constructor({
    data: e,
    mediaType: t
  }) {
    super({ data: e, mediaType: t });
    let o = "mp3";
    if (t) {
      const n = t.split("/");
      n.length === 2 && t !== "audio/mpeg" && (o = n[1]);
    }
    if (!o)
      throw new Error(
        "Audio format must be provided or determinable from media type"
      );
    this.format = o;
  }
};
async function CT({
  model: e,
  text: t,
  voice: o,
  outputFormat: n,
  instructions: r,
  speed: a,
  language: s,
  providerOptions: i = {},
  maxRetries: u,
  abortSignal: c,
  headers: m
}) {
  var f;
  const d = Nx(e);
  if (!d)
    throw new Error("Model could not be resolved");
  const g = tt(
    m ?? {},
    `ai/${Mt}`
  ), { retry: _ } = qt({
    maxRetries: u,
    abortSignal: c
  }), v = await _(
    () => d.doGenerate({
      text: t,
      voice: o,
      outputFormat: n,
      instructions: r,
      speed: a,
      language: s,
      abortSignal: c,
      headers: g,
      providerOptions: i
    })
  );
  if (!v.audio || v.audio.length === 0)
    throw new vx({ responses: [v.response] });
  return It({
    warnings: v.warnings,
    provider: d.provider,
    model: d.modelId
  }), new ZI({
    audio: new UI({
      data: v.audio,
      mediaType: (f = Co({
        data: v.audio,
        signatures: ip
      })) != null ? f : "audio/mp3"
    }),
    warnings: v.warnings,
    responses: [v.response],
    providerMetadata: v.providerMetadata
  });
}
var ZI = class {
  constructor(e) {
    var t;
    this.audio = e.audio, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
function ET({
  messages: e,
  reasoning: t = "none",
  toolCalls: o = [],
  emptyMessages: n = "remove"
}) {
  (t === "all" || t === "before-last-message") && (e = e.map((r, a) => r.role !== "assistant" || typeof r.content == "string" || t === "before-last-message" && a === e.length - 1 ? r : {
    ...r,
    content: r.content.filter((s) => s.type !== "reasoning")
  })), o === "none" ? o = [] : o === "all" ? o = [{ type: "all" }] : o === "before-last-message" ? o = [{ type: "before-last-message" }] : typeof o == "string" && (o = [{ type: o }]);
  for (const r of o) {
    const a = r.type === "all" ? void 0 : r.type === "before-last-message" ? 1 : Number(
      r.type.slice(12).slice(0, -9)
    ), s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
    if (a != null) {
      for (const u of e.slice(-a))
        if ((u.role === "assistant" || u.role === "tool") && typeof u.content != "string")
          for (const c of u.content)
            c.type === "tool-call" || c.type === "tool-result" ? s.add(c.toolCallId) : (c.type === "tool-approval-request" || c.type === "tool-approval-response") && i.add(c.approvalId);
    }
    e = e.map((u, c) => {
      if (u.role !== "assistant" && u.role !== "tool" || typeof u.content == "string" || a && c >= e.length - a)
        return u;
      const m = {}, f = {};
      return {
        ...u,
        content: u.content.filter((d) => d.type !== "tool-call" && d.type !== "tool-result" && d.type !== "tool-approval-request" && d.type !== "tool-approval-response" || (d.type === "tool-call" ? m[d.toolCallId] = d.toolName : d.type === "tool-approval-request" && (f[d.approvalId] = m[d.toolCallId]), (d.type === "tool-call" || d.type === "tool-result") && s.has(d.toolCallId) || (d.type === "tool-approval-request" || d.type === "tool-approval-response") && i.has(d.approvalId)) ? !0 : r.tools != null && !r.tools.includes(
          d.type === "tool-call" || d.type === "tool-result" ? d.toolName : f[d.approvalId]
        ))
      };
    });
  }
  return n === "remove" && (e = e.filter((r) => r.content.length > 0)), e;
}
var LI = {
  word: /\S+\s+/m,
  line: /\n+/m
};
function RT({
  delayInMs: e = 10,
  chunking: t = "word",
  _internal: { delay: o = Hr } = {}
} = {}) {
  let n;
  if (typeof t == "function")
    n = (r) => {
      const a = t(r);
      if (a == null)
        return null;
      if (!a.length)
        throw new Error("Chunking function must return a non-empty string.");
      if (!r.startsWith(a))
        throw new Error(
          `Chunking function must return a match that is a prefix of the buffer. Received: "${a}" expected to start with "${r}"`
        );
      return a;
    };
  else {
    const r = typeof t == "string" ? LI[t] : t;
    if (r == null)
      throw new qr({
        argument: "chunking",
        message: `Chunking must be "word" or "line" or a RegExp. Received: ${t}`
      });
    n = (a) => {
      const s = r.exec(a);
      return s ? a.slice(0, s.index) + (s == null ? void 0 : s[0]) : null;
    };
  }
  return () => {
    let r = "", a = "";
    return new TransformStream({
      async transform(s, i) {
        if (s.type !== "text-delta") {
          r.length > 0 && (i.enqueue({ type: "text-delta", text: r, id: a }), r = ""), i.enqueue(s);
          return;
        }
        s.id !== a && r.length > 0 && (i.enqueue({ type: "text-delta", text: r, id: a }), r = ""), r += s.text, a = s.id;
        let u;
        for (; (u = n(r)) != null; )
          i.enqueue({ type: "text-delta", text: u, id: a }), r = r.slice(u.length), await o(e);
      }
    });
  };
}
function MT({
  settings: e
}) {
  return {
    specificationVersion: "v3",
    transformParams: async ({ params: t }) => No(e, t)
  };
}
function NT({
  settings: e
}) {
  return {
    specificationVersion: "v3",
    transformParams: async ({ params: t }) => No(e, t)
  };
}
function FI(e, t) {
  if (t.length === 0)
    return null;
  const o = e.indexOf(t);
  if (o !== -1)
    return o;
  for (let n = e.length - 1; n >= 0; n--) {
    const r = e.substring(n);
    if (t.startsWith(r))
      return n;
  }
  return null;
}
function OT({
  tagName: e,
  separator: t = `
`,
  startWithReasoning: o = !1
}) {
  const n = `<${e}>`, r = `</${e}>`;
  return {
    specificationVersion: "v3",
    wrapGenerate: async ({ doGenerate: a }) => {
      const { content: s, ...i } = await a(), u = [];
      for (const c of s) {
        if (c.type !== "text") {
          u.push(c);
          continue;
        }
        const m = o ? n + c.text : c.text, f = new RegExp(`${n}(.*?)${r}`, "gs"), d = Array.from(m.matchAll(f));
        if (!d.length) {
          u.push(c);
          continue;
        }
        const g = d.map((v) => v[1]).join(t);
        let _ = m;
        for (let v = d.length - 1; v >= 0; v--) {
          const y = d[v], S = _.slice(0, y.index), C = _.slice(
            y.index + y[0].length
          );
          _ = S + (S.length > 0 && C.length > 0 ? t : "") + C;
        }
        u.push({
          type: "reasoning",
          text: g
        }), u.push({
          type: "text",
          text: _
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
            transform: (m, f) => {
              if (m.type === "text-start") {
                c = m;
                return;
              }
              if (m.type === "text-end" && c && (f.enqueue(c), c = void 0), m.type !== "text-delta") {
                f.enqueue(m);
                return;
              }
              u[m.id] == null && (u[m.id] = {
                isFirstReasoning: !0,
                isFirstText: !0,
                afterSwitch: !1,
                isReasoning: o,
                buffer: "",
                idCounter: 0,
                textId: m.id
              });
              const d = u[m.id];
              d.buffer += m.delta;
              function g(_) {
                if (_.length > 0) {
                  const v = d.afterSwitch && (d.isReasoning ? !d.isFirstReasoning : !d.isFirstText) ? t : "";
                  d.isReasoning && (d.afterSwitch || d.isFirstReasoning) && f.enqueue({
                    type: "reasoning-start",
                    id: `reasoning-${d.idCounter}`
                  }), d.isReasoning ? f.enqueue({
                    type: "reasoning-delta",
                    delta: v + _,
                    id: `reasoning-${d.idCounter}`
                  }) : (c && (f.enqueue(c), c = void 0), f.enqueue({
                    type: "text-delta",
                    delta: v + _,
                    id: d.textId
                  })), d.afterSwitch = !1, d.isReasoning ? d.isFirstReasoning = !1 : d.isFirstText = !1;
                }
              }
              do {
                const _ = d.isReasoning ? r : n, v = FI(
                  d.buffer,
                  _
                );
                if (v == null) {
                  g(d.buffer), d.buffer = "";
                  break;
                }
                if (g(d.buffer.slice(0, v)), v + _.length <= d.buffer.length)
                  d.buffer = d.buffer.slice(
                    v + _.length
                  ), d.isReasoning && f.enqueue({
                    type: "reasoning-end",
                    id: `reasoning-${d.idCounter++}`
                  }), d.isReasoning = !d.isReasoning, d.afterSwitch = !0;
                else {
                  d.buffer = d.buffer.slice(v);
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
function AT() {
  return {
    specificationVersion: "v3",
    wrapStream: async ({ doGenerate: e }) => {
      const t = await e();
      let o = 0;
      return {
        stream: new ReadableStream({
          start(r) {
            r.enqueue({
              type: "stream-start",
              warnings: t.warnings
            }), r.enqueue({ type: "response-metadata", ...t.response });
            for (const a of t.content)
              switch (a.type) {
                case "text": {
                  a.text.length > 0 && (r.enqueue({ type: "text-start", id: String(o) }), r.enqueue({
                    type: "text-delta",
                    id: String(o),
                    delta: a.text
                  }), r.enqueue({ type: "text-end", id: String(o) }), o++);
                  break;
                }
                case "reasoning": {
                  r.enqueue({
                    type: "reasoning-start",
                    id: String(o),
                    providerMetadata: a.providerMetadata
                  }), r.enqueue({
                    type: "reasoning-delta",
                    id: String(o),
                    delta: a.text
                  }), r.enqueue({ type: "reasoning-end", id: String(o) }), o++;
                  break;
                }
                default: {
                  r.enqueue(a);
                  break;
                }
              }
            r.enqueue({
              type: "finish",
              finishReason: t.finishReason,
              usage: t.usage,
              providerMetadata: t.providerMetadata
            }), r.close();
          }
        }),
        request: t.request,
        response: t.response
      };
    }
  };
}
function VI(e) {
  return JSON.stringify(e.input);
}
function $T({
  prefix: e = "Input Examples:",
  format: t = VI,
  remove: o = !0
} = {}) {
  return {
    specificationVersion: "v3",
    transformParams: async ({ params: n }) => {
      var r;
      if (!((r = n.tools) != null && r.length))
        return n;
      const a = n.tools.map((s) => {
        var i;
        if (s.type !== "function" || !((i = s.inputExamples) != null && i.length))
          return s;
        const u = s.inputExamples.map((f, d) => t(f, d)).join(`
`), c = `${e}
${u}`, m = s.description ? `${s.description}

${c}` : c;
        return {
          ...s,
          description: m,
          inputExamples: o ? void 0 : s.inputExamples
        };
      });
      return {
        ...n,
        tools: a
      };
    }
  };
}
var Lp = ({
  model: e,
  middleware: t,
  modelId: o,
  providerId: n
}) => [...ao(t)].reverse().reduce((r, a) => JI({ model: r, middleware: a, modelId: o, providerId: n }), e), JI = ({
  model: e,
  middleware: {
    transformParams: t,
    wrapGenerate: o,
    wrapStream: n,
    overrideProvider: r,
    overrideModelId: a,
    overrideSupportedUrls: s
  },
  modelId: i,
  providerId: u
}) => {
  var c, m, f;
  async function d({
    params: g,
    type: _
  }) {
    return t ? await t({ params: g, type: _, model: e }) : g;
  }
  return {
    specificationVersion: "v3",
    provider: (c = u ?? (r == null ? void 0 : r({ model: e }))) != null ? c : e.provider,
    modelId: (m = i ?? (a == null ? void 0 : a({ model: e }))) != null ? m : e.modelId,
    supportedUrls: (f = s == null ? void 0 : s({ model: e })) != null ? f : e.supportedUrls,
    async doGenerate(g) {
      const _ = await d({ params: g, type: "generate" }), v = async () => e.doGenerate(_);
      return o ? o({
        doGenerate: v,
        doStream: async () => e.doStream(_),
        params: _,
        model: e
      }) : v();
    },
    async doStream(g) {
      const _ = await d({ params: g, type: "stream" }), v = async () => e.doGenerate(_), y = async () => e.doStream(_);
      return n ? n({ doGenerate: v, doStream: y, params: _, model: e }) : y();
    }
  };
}, PT = ({
  model: e,
  middleware: t,
  modelId: o,
  providerId: n
}) => [...ao(t)].reverse().reduce((r, a) => GI({ model: r, middleware: a, modelId: o, providerId: n }), e), GI = ({
  model: e,
  middleware: {
    transformParams: t,
    wrapEmbed: o,
    overrideProvider: n,
    overrideModelId: r,
    overrideMaxEmbeddingsPerCall: a,
    overrideSupportsParallelCalls: s
  },
  modelId: i,
  providerId: u
}) => {
  var c, m, f, d;
  async function g({
    params: _
  }) {
    return t ? await t({ params: _, model: e }) : _;
  }
  return {
    specificationVersion: "v3",
    provider: (c = u ?? (n == null ? void 0 : n({ model: e }))) != null ? c : e.provider,
    modelId: (m = i ?? (r == null ? void 0 : r({ model: e }))) != null ? m : e.modelId,
    maxEmbeddingsPerCall: (f = a == null ? void 0 : a({ model: e })) != null ? f : e.maxEmbeddingsPerCall,
    supportsParallelCalls: (d = s == null ? void 0 : s({ model: e })) != null ? d : e.supportsParallelCalls,
    async doEmbed(_) {
      const v = await g({ params: _ }), y = async () => e.doEmbed(v);
      return o ? o({
        doEmbed: y,
        params: v,
        model: e
      }) : y();
    }
  };
};
function Fp(e) {
  if ("specificationVersion" in e && e.specificationVersion === "v3")
    return e;
  const t = e;
  return {
    specificationVersion: "v3",
    languageModel: (o) => tp(t.languageModel(o)),
    embeddingModel: (o) => Qc(t.textEmbeddingModel(o)),
    imageModel: (o) => ep(t.imageModel(o)),
    transcriptionModel: t.transcriptionModel ? (o) => ap(t.transcriptionModel(o)) : void 0,
    speechModel: t.speechModel ? (o) => rp(t.speechModel(o)) : void 0,
    rerankingModel: void 0
    // v2 providers don't have reranking models
  };
}
function qT({
  provider: e,
  languageModelMiddleware: t
}) {
  const o = Fp(e);
  return {
    specificationVersion: "v3",
    languageModel: (n) => Lp({
      model: o.languageModel(n),
      middleware: t
    }),
    embeddingModel: o.embeddingModel,
    imageModel: o.imageModel,
    transcriptionModel: o.transcriptionModel,
    speechModel: o.speechModel,
    rerankingModel: o.rerankingModel
  };
}
function BI({
  languageModels: e,
  embeddingModels: t,
  imageModels: o,
  transcriptionModels: n,
  speechModels: r,
  rerankingModels: a,
  fallbackProvider: s
}) {
  const i = s ? Fp(s) : void 0;
  return {
    specificationVersion: "v3",
    languageModel(u) {
      if (e != null && u in e)
        return e[u];
      if (i)
        return i.languageModel(u);
      throw new rt({ modelId: u, modelType: "languageModel" });
    },
    embeddingModel(u) {
      if (t != null && u in t)
        return t[u];
      if (i)
        return i.embeddingModel(u);
      throw new rt({ modelId: u, modelType: "embeddingModel" });
    },
    imageModel(u) {
      if (o != null && u in o)
        return o[u];
      if (i != null && i.imageModel)
        return i.imageModel(u);
      throw new rt({ modelId: u, modelType: "imageModel" });
    },
    transcriptionModel(u) {
      if (n != null && u in n)
        return n[u];
      if (i != null && i.transcriptionModel)
        return i.transcriptionModel(u);
      throw new rt({ modelId: u, modelType: "transcriptionModel" });
    },
    speechModel(u) {
      if (r != null && u in r)
        return r[u];
      if (i != null && i.speechModel)
        return i.speechModel(u);
      throw new rt({ modelId: u, modelType: "speechModel" });
    },
    rerankingModel(u) {
      if (a != null && u in a)
        return a[u];
      if (i != null && i.rerankingModel)
        return i.rerankingModel(u);
      throw new rt({ modelId: u, modelType: "rerankingModel" });
    }
  };
}
var jT = BI, Vp = "AI_NoSuchProviderError", Jp = `vercel.ai.error.${Vp}`, HI = Symbol.for(Jp), Gp, WI = class extends rt {
  constructor({
    modelId: e,
    modelType: t,
    providerId: o,
    availableProviders: n,
    message: r = `No such provider: ${o} (available providers: ${n.join()})`
  }) {
    super({ errorName: Vp, modelId: e, modelType: t, message: r }), this[Gp] = !0, this.providerId = o, this.availableProviders = n;
  }
  static isInstance(e) {
    return se.hasMarker(e, Jp);
  }
};
Gp = HI;
function KI(e, {
  separator: t = ":",
  languageModelMiddleware: o
} = {}) {
  const n = new YI({
    separator: t,
    languageModelMiddleware: o
  });
  for (const [r, a] of Object.entries(e))
    n.registerProvider({ id: r, provider: a });
  return n;
}
var DT = KI, YI = class {
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
    const o = this.providers[e];
    if (o == null)
      throw new WI({
        modelId: e,
        modelType: t,
        providerId: e,
        availableProviders: Object.keys(this.providers)
      });
    return o;
  }
  splitId(e, t) {
    const o = e.indexOf(this.separator);
    if (o === -1)
      throw new rt({
        modelId: e,
        modelType: t,
        message: `Invalid ${t} id for registry: ${e} (must be in the format "providerId${this.separator}modelId")`
      });
    return [e.slice(0, o), e.slice(o + this.separator.length)];
  }
  languageModel(e) {
    var t, o;
    const [n, r] = this.splitId(e, "languageModel");
    let a = (o = (t = this.getProvider(n, "languageModel")).languageModel) == null ? void 0 : o.call(
      t,
      r
    );
    if (a == null)
      throw new rt({ modelId: e, modelType: "languageModel" });
    return this.languageModelMiddleware != null && (a = Lp({
      model: a,
      middleware: this.languageModelMiddleware
    })), a;
  }
  embeddingModel(e) {
    var t;
    const [o, n] = this.splitId(e, "embeddingModel"), r = this.getProvider(o, "embeddingModel"), a = (t = r.embeddingModel) == null ? void 0 : t.call(r, n);
    if (a == null)
      throw new rt({
        modelId: e,
        modelType: "embeddingModel"
      });
    return a;
  }
  imageModel(e) {
    var t;
    const [o, n] = this.splitId(e, "imageModel"), r = this.getProvider(o, "imageModel"), a = (t = r.imageModel) == null ? void 0 : t.call(r, n);
    if (a == null)
      throw new rt({ modelId: e, modelType: "imageModel" });
    return a;
  }
  transcriptionModel(e) {
    var t;
    const [o, n] = this.splitId(e, "transcriptionModel"), r = this.getProvider(o, "transcriptionModel"), a = (t = r.transcriptionModel) == null ? void 0 : t.call(r, n);
    if (a == null)
      throw new rt({
        modelId: e,
        modelType: "transcriptionModel"
      });
    return a;
  }
  speechModel(e) {
    var t;
    const [o, n] = this.splitId(e, "speechModel"), r = this.getProvider(o, "speechModel"), a = (t = r.speechModel) == null ? void 0 : t.call(r, n);
    if (a == null)
      throw new rt({ modelId: e, modelType: "speechModel" });
    return a;
  }
  rerankingModel(e) {
    var t;
    const [o, n] = this.splitId(e, "rerankingModel"), r = this.getProvider(o, "rerankingModel"), a = (t = r.rerankingModel) == null ? void 0 : t.call(r, n);
    if (a == null)
      throw new rt({ modelId: e, modelType: "rerankingModel" });
    return a;
  }
};
async function zT({
  model: e,
  documents: t,
  query: o,
  topN: n,
  maxRetries: r,
  abortSignal: a,
  headers: s,
  providerOptions: i,
  experimental_telemetry: u
}) {
  if (t.length === 0)
    return new Ui({
      originalDocuments: [],
      ranking: [],
      providerMetadata: void 0,
      response: {
        timestamp: /* @__PURE__ */ new Date(),
        modelId: e.modelId
      }
    });
  const { maxRetries: c, retry: m } = qt({
    maxRetries: r,
    abortSignal: a
  }), f = typeof t[0] == "string" ? { type: "text", values: t } : { type: "object", values: t }, d = po({
    model: e,
    telemetry: u,
    headers: s,
    settings: { maxRetries: c }
  }), g = mo(u);
  return lt({
    name: "ai.rerank",
    attributes: Ce({
      telemetry: u,
      attributes: {
        ...it({ operationId: "ai.rerank", telemetry: u }),
        ...d,
        "ai.documents": {
          input: () => t.map((_) => JSON.stringify(_))
        }
      }
    }),
    tracer: g,
    fn: async () => {
      var _, v;
      const { ranking: y, response: S, providerMetadata: C, warnings: w } = await m(
        () => lt({
          name: "ai.rerank.doRerank",
          attributes: Ce({
            telemetry: u,
            attributes: {
              ...it({
                operationId: "ai.rerank.doRerank",
                telemetry: u
              }),
              ...d,
              // specific settings that only make sense on the outer level:
              "ai.documents": {
                input: () => t.map((E) => JSON.stringify(E))
              }
            }
          }),
          tracer: g,
          fn: async (E) => {
            const k = await e.doRerank({
              documents: f,
              query: o,
              topN: n,
              providerOptions: i,
              abortSignal: a,
              headers: s
            }), T = k.ranking;
            return E.setAttributes(
              await Ce({
                telemetry: u,
                attributes: {
                  "ai.ranking.type": f.type,
                  "ai.ranking": {
                    output: () => T.map((I) => JSON.stringify(I))
                  }
                }
              })
            ), {
              ranking: T,
              providerMetadata: k.providerMetadata,
              response: k.response,
              warnings: k.warnings
            };
          }
        })
      );
      return It({
        warnings: w ?? [],
        provider: e.provider,
        model: e.modelId
      }), new Ui({
        originalDocuments: t,
        ranking: y.map((E) => ({
          originalIndex: E.index,
          score: E.relevanceScore,
          document: t[E.index]
        })),
        providerMetadata: C,
        response: {
          id: S == null ? void 0 : S.id,
          timestamp: (_ = S == null ? void 0 : S.timestamp) != null ? _ : /* @__PURE__ */ new Date(),
          modelId: (v = S == null ? void 0 : S.modelId) != null ? v : e.modelId,
          headers: S == null ? void 0 : S.headers,
          body: S == null ? void 0 : S.body
        }
      });
    }
  });
}
var Ui = class {
  constructor(e) {
    this.originalDocuments = e.originalDocuments, this.ranking = e.ranking, this.response = e.response, this.providerMetadata = e.providerMetadata;
  }
  get rerankedDocuments() {
    return this.ranking.map((e) => e.document);
  }
}, XI = class extends se {
  constructor(e) {
    super({
      name: "AI_NoTranscriptGeneratedError",
      message: "No transcript generated."
    }), this.responses = e.responses;
  }
};
async function UT({
  model: e,
  audio: t,
  providerOptions: o = {},
  maxRetries: n,
  abortSignal: r,
  headers: a
}) {
  const s = Mx(e);
  if (!s)
    throw new Error("Model could not be resolved");
  const { retry: i } = qt({
    maxRetries: n,
    abortSignal: r
  }), u = tt(
    a ?? {},
    `ai/${Mt}`
  ), c = t instanceof URL ? (await lp({ url: t })).data : dp(t), m = await i(
    () => {
      var f;
      return s.doGenerate({
        audio: c,
        abortSignal: r,
        headers: u,
        providerOptions: o,
        mediaType: (f = Co({
          data: c,
          signatures: ip
        })) != null ? f : "audio/wav"
      });
    }
  );
  if (It({
    warnings: m.warnings,
    provider: s.provider,
    model: s.modelId
  }), !m.text)
    throw new XI({ responses: [m.response] });
  return new QI({
    text: m.text,
    segments: m.segments,
    language: m.language,
    durationInSeconds: m.durationInSeconds,
    warnings: m.warnings,
    responses: [m.response],
    providerMetadata: m.providerMetadata
  });
}
var QI = class {
  constructor(e) {
    var t;
    this.text = e.text, this.segments = e.segments, this.language = e.language, this.durationInSeconds = e.durationInSeconds, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
async function eT({
  stream: e,
  onTextPart: t
}) {
  const o = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: n, value: r } = await o.read();
    if (n)
      break;
    await t(r);
  }
}
var tT = () => fetch;
async function ZT({
  api: e,
  prompt: t,
  credentials: o,
  headers: n,
  body: r,
  streamProtocol: a = "data",
  setCompletion: s,
  setLoading: i,
  setError: u,
  setAbortController: c,
  onFinish: m,
  onError: f,
  fetch: d = tT()
}) {
  var g;
  try {
    i(!0), u(void 0);
    const _ = new AbortController();
    c(_), s("");
    const v = await d(e, {
      method: "POST",
      body: JSON.stringify({
        prompt: t,
        ...r
      }),
      credentials: o,
      headers: tt(
        {
          "Content-Type": "application/json",
          ...n
        },
        `ai-sdk/${Mt}`,
        To()
      ),
      signal: _.signal
    }).catch((S) => {
      throw S;
    });
    if (!v.ok)
      throw new Error(
        (g = await v.text()) != null ? g : "Failed to fetch the chat response."
      );
    if (!v.body)
      throw new Error("The response body is empty.");
    let y = "";
    switch (a) {
      case "text": {
        await eT({
          stream: v.body,
          onTextPart: (S) => {
            y += S, s(y);
          }
        });
        break;
      }
      case "data": {
        await Hn({
          stream: Yr({
            stream: v.body,
            schema: Op
          }).pipeThrough(
            new TransformStream({
              async transform(S) {
                if (!S.success)
                  throw S.error;
                const C = S.value;
                if (C.type === "text-delta")
                  y += C.delta, s(y);
                else if (C.type === "error")
                  throw new Error(C.errorText);
              }
            })
          ),
          onError: (S) => {
            throw S;
          }
        });
        break;
      }
      default: {
        const S = a;
        throw new Error(`Unknown stream protocol: ${S}`);
      }
    }
    return m && m(t, y), c(null), y;
  } catch (_) {
    if (_.name === "AbortError")
      return c(null), null;
    _ instanceof Error && f && f(_), u(_);
  } finally {
    i(!1);
  }
}
async function oT(e) {
  if (e == null)
    return [];
  if (!globalThis.FileList || !(e instanceof globalThis.FileList))
    throw new Error("FileList is not supported in the current environment");
  return Promise.all(
    Array.from(e).map(async (t) => {
      const { name: o, type: n } = t, r = await new Promise((a, s) => {
        const i = new FileReader();
        i.onload = (u) => {
          var c;
          a((c = u.target) == null ? void 0 : c.result);
        }, i.onerror = (u) => s(u), i.readAsDataURL(t);
      });
      return {
        type: "file",
        mediaType: n,
        filename: o,
        url: r
      };
    })
  );
}
var Bp = class {
  constructor({
    api: e = "/api/chat",
    credentials: t,
    headers: o,
    body: n,
    fetch: r,
    prepareSendMessagesRequest: a,
    prepareReconnectToStreamRequest: s
  }) {
    this.api = e, this.credentials = t, this.headers = o, this.body = n, this.fetch = r, this.prepareSendMessagesRequest = a, this.prepareReconnectToStreamRequest = s;
  }
  async sendMessages({
    abortSignal: e,
    ...t
  }) {
    var o, n, r, a, s;
    const i = await De(this.body), u = await De(this.headers), c = await De(this.credentials), m = {
      ...Qt(u),
      ...Qt(t.headers)
    }, f = await ((o = this.prepareSendMessagesRequest) == null ? void 0 : o.call(this, {
      api: this.api,
      id: t.chatId,
      messages: t.messages,
      body: { ...i, ...t.body },
      headers: m,
      credentials: c,
      requestMetadata: t.metadata,
      trigger: t.trigger,
      messageId: t.messageId
    })), d = (n = f == null ? void 0 : f.api) != null ? n : this.api, g = (f == null ? void 0 : f.headers) !== void 0 ? Qt(f.headers) : m, _ = (f == null ? void 0 : f.body) !== void 0 ? f.body : {
      ...i,
      ...t.body,
      id: t.chatId,
      messages: t.messages,
      trigger: t.trigger,
      messageId: t.messageId
    }, v = (r = f == null ? void 0 : f.credentials) != null ? r : c, S = await ((a = this.fetch) != null ? a : globalThis.fetch)(d, {
      method: "POST",
      headers: tt(
        {
          "Content-Type": "application/json",
          ...g
        },
        `ai-sdk/${Mt}`,
        To()
      ),
      body: JSON.stringify(_),
      credentials: v,
      signal: e
    });
    if (!S.ok)
      throw new Error(
        (s = await S.text()) != null ? s : "Failed to fetch the chat response."
      );
    if (!S.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(S.body);
  }
  async reconnectToStream(e) {
    var t, o, n, r, a;
    const s = await De(this.body), i = await De(this.headers), u = await De(this.credentials), c = {
      ...Qt(i),
      ...Qt(e.headers)
    }, m = await ((t = this.prepareReconnectToStreamRequest) == null ? void 0 : t.call(this, {
      api: this.api,
      id: e.chatId,
      body: { ...s, ...e.body },
      headers: c,
      credentials: u,
      requestMetadata: e.metadata
    })), f = (o = m == null ? void 0 : m.api) != null ? o : `${this.api}/${e.chatId}/stream`, d = (m == null ? void 0 : m.headers) !== void 0 ? Qt(m.headers) : c, g = (n = m == null ? void 0 : m.credentials) != null ? n : u, v = await ((r = this.fetch) != null ? r : globalThis.fetch)(f, {
      method: "GET",
      headers: tt(
        d,
        `ai-sdk/${Mt}`,
        To()
      ),
      credentials: g
    });
    if (v.status === 204)
      return null;
    if (!v.ok)
      throw new Error(
        (a = await v.text()) != null ? a : "Failed to fetch the chat response."
      );
    if (!v.body)
      throw new Error("The response body is empty.");
    return this.processResponseStream(v.body);
  }
}, nT = class extends Bp {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return Yr({
      stream: e,
      schema: Op
    }).pipeThrough(
      new TransformStream({
        async transform(t, o) {
          if (!t.success)
            throw t.error;
          o.enqueue(t.value);
        }
      })
    );
  }
}, LT = class {
  constructor({
    generateId: e = Je,
    id: t = e(),
    transport: o = new nT(),
    messageMetadataSchema: n,
    dataPartSchemas: r,
    state: a,
    onError: s,
    onToolCall: i,
    onFinish: u,
    onData: c,
    sendAutomaticallyWhen: m
  }) {
    this.activeResponse = void 0, this.jobExecutor = new jI(), this.sendMessage = async (f, d) => {
      var g, _, v, y;
      if (f == null) {
        await this.makeRequest({
          trigger: "submit-message",
          messageId: (g = this.lastMessage) == null ? void 0 : g.id,
          ...d
        });
        return;
      }
      let S;
      if ("text" in f || "files" in f ? S = {
        parts: [
          ...Array.isArray(f.files) ? f.files : await oT(f.files),
          ..."text" in f && f.text != null ? [{ type: "text", text: f.text }] : []
        ]
      } : S = f, f.messageId != null) {
        const C = this.state.messages.findIndex(
          (w) => w.id === f.messageId
        );
        if (C === -1)
          throw new Error(`message with id ${f.messageId} not found`);
        if (this.state.messages[C].role !== "user")
          throw new Error(
            `message with id ${f.messageId} is not a user message`
          );
        this.state.messages = this.state.messages.slice(0, C + 1), this.state.replaceMessage(C, {
          ...S,
          id: f.messageId,
          role: (_ = S.role) != null ? _ : "user",
          metadata: f.metadata
        });
      } else
        this.state.pushMessage({
          ...S,
          id: (v = S.id) != null ? v : this.generateId(),
          role: (y = S.role) != null ? y : "user",
          metadata: f.metadata
        });
      await this.makeRequest({
        trigger: "submit-message",
        messageId: f.messageId,
        ...d
      });
    }, this.regenerate = async ({
      messageId: f,
      ...d
    } = {}) => {
      const g = f == null ? this.state.messages.length - 1 : this.state.messages.findIndex((_) => _.id === f);
      if (g === -1)
        throw new Error(`message ${f} not found`);
      this.state.messages = this.state.messages.slice(
        0,
        // if the message is a user message, we need to include it in the request:
        this.messages[g].role === "assistant" ? g : g + 1
      ), await this.makeRequest({
        trigger: "regenerate-message",
        messageId: f,
        ...d
      });
    }, this.resumeStream = async (f = {}) => {
      await this.makeRequest({ trigger: "resume-stream", ...f });
    }, this.clearError = () => {
      this.status === "error" && (this.state.error = void 0, this.setStatus({ status: "ready" }));
    }, this.addToolApprovalResponse = async ({
      id: f,
      approved: d,
      reason: g
    }) => this.jobExecutor.run(async () => {
      var _, v;
      const y = this.state.messages, S = y[y.length - 1], C = (w) => At(w) && w.state === "approval-requested" && w.approval.id === f ? {
        ...w,
        state: "approval-responded",
        approval: { id: f, approved: d, reason: g }
      } : w;
      this.state.replaceMessage(y.length - 1, {
        ...S,
        parts: S.parts.map(C)
      }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(C)), this.status !== "streaming" && this.status !== "submitted" && ((_ = this.sendAutomaticallyWhen) != null && _.call(this, { messages: this.state.messages })) && this.makeRequest({
        trigger: "submit-message",
        messageId: (v = this.lastMessage) == null ? void 0 : v.id
      });
    }), this.addToolOutput = async ({
      state: f = "output-available",
      tool: d,
      toolCallId: g,
      output: _,
      errorText: v
    }) => this.jobExecutor.run(async () => {
      var y, S;
      const C = this.state.messages, w = C[C.length - 1], E = (k) => At(k) && k.toolCallId === g ? { ...k, state: f, output: _, errorText: v } : k;
      this.state.replaceMessage(C.length - 1, {
        ...w,
        parts: w.parts.map(E)
      }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(E)), this.status !== "streaming" && this.status !== "submitted" && ((y = this.sendAutomaticallyWhen) != null && y.call(this, { messages: this.state.messages })) && this.makeRequest({
        trigger: "submit-message",
        messageId: (S = this.lastMessage) == null ? void 0 : S.id
      });
    }), this.addToolResult = this.addToolOutput, this.stop = async () => {
      var f;
      this.status !== "streaming" && this.status !== "submitted" || (f = this.activeResponse) != null && f.abortController && this.activeResponse.abortController.abort();
    }, this.id = t, this.transport = o, this.generateId = e, this.messageMetadataSchema = n, this.dataPartSchemas = r, this.state = a, this.onError = s, this.onToolCall = i, this.onFinish = u, this.onData = c, this.sendAutomaticallyWhen = m;
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
    headers: o,
    body: n,
    messageId: r
  }) {
    var a, s, i, u;
    this.setStatus({ status: "submitted", error: void 0 });
    const c = this.lastMessage;
    let m = !1, f = !1, d = !1;
    try {
      const g = {
        state: ca({
          lastMessage: this.state.snapshot(c),
          messageId: this.generateId()
        }),
        abortController: new AbortController()
      };
      g.abortController.signal.addEventListener("abort", () => {
        m = !0;
      }), this.activeResponse = g;
      let _;
      if (e === "resume-stream") {
        const y = await this.transport.reconnectToStream({
          chatId: this.id,
          metadata: t,
          headers: o,
          body: n
        });
        if (y == null) {
          this.setStatus({ status: "ready" });
          return;
        }
        _ = y;
      } else
        _ = await this.transport.sendMessages({
          chatId: this.id,
          messages: this.state.messages,
          abortSignal: g.abortController.signal,
          metadata: t,
          headers: o,
          body: n,
          trigger: e,
          messageId: r
        });
      const v = (y) => (
        // serialize the job execution to avoid race conditions:
        this.jobExecutor.run(
          () => y({
            state: g.state,
            write: () => {
              var S;
              this.setStatus({ status: "streaming" }), g.state.message.id === ((S = this.lastMessage) == null ? void 0 : S.id) ? this.state.replaceMessage(
                this.state.messages.length - 1,
                g.state.message
              ) : this.state.pushMessage(g.state.message);
            }
          })
        )
      );
      await Hn({
        stream: pa({
          stream: _,
          onToolCall: this.onToolCall,
          onData: this.onData,
          messageMetadataSchema: this.messageMetadataSchema,
          dataPartSchemas: this.dataPartSchemas,
          runUpdateMessageJob: v,
          onError: (y) => {
            throw y;
          }
        }),
        onError: (y) => {
          throw y;
        }
      }), this.setStatus({ status: "ready" });
    } catch (g) {
      if (m || g.name === "AbortError")
        return m = !0, this.setStatus({ status: "ready" }), null;
      d = !0, g instanceof TypeError && (g.message.toLowerCase().includes("fetch") || g.message.toLowerCase().includes("network")) && (f = !0), this.onError && g instanceof Error && this.onError(g), this.setStatus({ status: "error", error: g });
    } finally {
      try {
        (s = this.onFinish) == null || s.call(this, {
          message: this.activeResponse.state.message,
          messages: this.state.messages,
          isAbort: m,
          isDisconnect: f,
          isError: d,
          finishReason: (a = this.activeResponse) == null ? void 0 : a.state.finishReason
        });
      } catch (g) {
        console.error(g);
      }
      this.activeResponse = void 0;
    }
    (i = this.sendAutomaticallyWhen) != null && i.call(this, { messages: this.state.messages }) && !d && await this.makeRequest({
      trigger: "submit-message",
      messageId: (u = this.lastMessage) == null ? void 0 : u.id,
      metadata: t,
      headers: o,
      body: n
    });
  }
};
function FT({
  messages: e
}) {
  const t = e[e.length - 1];
  if (!t || t.role !== "assistant")
    return !1;
  const o = t.parts.reduce((r, a, s) => a.type === "step-start" ? s : r, -1), n = t.parts.slice(o + 1).filter(At).filter((r) => !r.providerExecuted);
  return (
    // has at least one tool approval response
    n.filter((r) => r.state === "approval-responded").length > 0 && // all tool approvals must have a response
    n.every(
      (r) => r.state === "output-available" || r.state === "output-error" || r.state === "approval-responded"
    )
  );
}
function VT({
  messages: e
}) {
  const t = e[e.length - 1];
  if (!t || t.role !== "assistant")
    return !1;
  const o = t.parts.reduce((r, a, s) => a.type === "step-start" ? s : r, -1), n = t.parts.slice(o + 1).filter(At).filter((r) => !r.providerExecuted);
  return n.length > 0 && n.every(
    (r) => r.state === "output-available" || r.state === "output-error"
  );
}
function rT({
  stream: e
}) {
  return e.pipeThrough(
    new TransformStream({
      start(t) {
        t.enqueue({ type: "start" }), t.enqueue({ type: "start-step" }), t.enqueue({ type: "text-start", id: "text-1" });
      },
      async transform(t, o) {
        o.enqueue({ type: "text-delta", id: "text-1", delta: t });
      },
      async flush(t) {
        t.enqueue({ type: "text-end", id: "text-1" }), t.enqueue({ type: "finish-step" }), t.enqueue({ type: "finish" });
      }
    })
  );
}
var JT = class extends Bp {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return rT({
      stream: e.pipeThrough(new TextDecoderStream())
    });
  }
};
export {
  se as AISDKError,
  Xe as APICallError,
  LT as AbstractChat,
  nT as DefaultChatTransport,
  bo as DownloadError,
  Yp as EmptyResponseBodyError,
  fT as Experimental_Agent,
  Bp as HttpChatTransport,
  Ae as InvalidArgumentError,
  Si as InvalidDataContentError,
  Ix as InvalidMessageRoleError,
  Xt as InvalidPromptError,
  tr as InvalidResponseDataError,
  cT as InvalidStreamPartError,
  cx as InvalidToolApprovalError,
  sa as InvalidToolInputError,
  Zo as JSONParseError,
  Rp as JsonToSseTransformStream,
  un as LoadAPIKeyError,
  sT as LoadSettingError,
  kx as MessageConversionError,
  iT as NoContentGeneratedError,
  fx as NoImageGeneratedError,
  _t as NoObjectGeneratedError,
  $c as NoOutputGeneratedError,
  vx as NoSpeechGeneratedError,
  rt as NoSuchModelError,
  WI as NoSuchProviderError,
  Nr as NoSuchToolError,
  rI as Output,
  Ci as RetryError,
  jI as SerialJobExecutor,
  JT as TextStreamChatTransport,
  jr as TooManyEmbeddingValuesForCallError,
  ia as ToolCallNotFoundForApprovalError,
  bx as ToolCallRepairError,
  fT as ToolLoopAgent,
  st as TypeValidationError,
  Mp as UI_MESSAGE_STREAM_HEADERS,
  Ge as UnsupportedFunctionalityError,
  en as UnsupportedModelVersionError,
  $T as addToolInputExamplesMiddleware,
  Gt as asSchema,
  Wx as assistantModelMessageSchema,
  ZT as callCompletionApi,
  Hn as consumeStream,
  oT as convertFileListToFileUIParts,
  wI as convertToModelMessages,
  IT as cosineSimilarity,
  Dp as createAgentUIStream,
  vT as createAgentUIStreamResponse,
  uy as createAnthropic,
  Vw as createGateway,
  qy as createGoogleGenerativeAI,
  Ko as createIdGenerator,
  By as createMistral,
  hw as createOpenAI,
  KI as createProviderRegistry,
  Sp as createTextStreamResponse,
  hT as createUIMessageStream,
  Np as createUIMessageStreamResponse,
  BI as customProvider,
  MT as defaultEmbeddingSettingsMiddleware,
  NT as defaultSettingsMiddleware,
  uT as dynamicTool,
  yT as embed,
  bT as embedMany,
  DT as experimental_createProviderRegistry,
  jT as experimental_customProvider,
  wT as experimental_generateImage,
  CT as experimental_generateSpeech,
  UT as experimental_transcribe,
  OT as extractReasoningMiddleware,
  Jw as gateway,
  Je as generateId,
  SI as generateImage,
  xT as generateObject,
  pI as generateText,
  Pr as getStaticToolName,
  TT as getTextFromDataUrl,
  vn as getToolName,
  mT as getToolOrDynamicToolName,
  pT as hasToolCall,
  vr as isDataUIPart,
  An as isDeepEqualData,
  yr as isFileUIPart,
  $i as isReasoningUIPart,
  $r as isStaticToolUIPart,
  _r as isTextUIPart,
  dT as isToolOrDynamicToolUIPart,
  At as isToolUIPart,
  Un as jsonSchema,
  FT as lastAssistantMessageIsCompleteWithApprovalResponses,
  VT as lastAssistantMessageIsCompleteWithToolCalls,
  Yx as modelMessageSchema,
  Yr as parseJsonEventStream,
  Oo as parsePartialJson,
  _T as pipeAgentUIStreamToResponse,
  Ep as pipeTextStreamToResponse,
  Pp as pipeUIMessageStreamToResponse,
  ET as pruneMessages,
  gT as readUIMessageStream,
  zT as rerank,
  II as safeValidateUIMessages,
  kT as simulateReadableStream,
  AT as simulateStreamingMiddleware,
  RT as smoothStream,
  ua as stepCountIs,
  ST as streamObject,
  _I as streamText,
  Bx as systemModelMessageSchema,
  lT as tool,
  Kx as toolModelMessageSchema,
  Op as uiMessageChunkSchema,
  Hx as userModelMessageSchema,
  TI as validateUIMessages,
  PT as wrapEmbeddingModel,
  Lp as wrapLanguageModel,
  qT as wrapProvider,
  J as zodSchema
};
