var Cs = "vercel.ai.error", bi = Symbol.for(Cs), Rs, wi = class Es extends Error {
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
    super(n), this[Rs] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Es.hasMarker(t, Cs);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
Rs = bi;
var j = wi, As = "AI_APICallError", Os = `vercel.ai.error.${As}`, xi = Symbol.for(Os), Ms, $e = class extends j {
  constructor({
    message: e,
    url: t,
    requestBodyValues: n,
    statusCode: r,
    responseHeaders: s,
    responseBody: a,
    cause: o,
    isRetryable: i = r != null && (r === 408 || // request timeout
    r === 409 || // conflict
    r === 429 || // too many requests
    r >= 500),
    // server error
    data: l
  }) {
    super({ name: As, message: e, cause: o }), this[Ms] = !0, this.url = t, this.requestBodyValues = n, this.statusCode = r, this.responseHeaders = s, this.responseBody = a, this.isRetryable = i, this.data = l;
  }
  static isInstance(e) {
    return j.hasMarker(e, Os);
  }
};
Ms = xi;
var Ns = "AI_EmptyResponseBodyError", Ps = `vercel.ai.error.${Ns}`, Ti = Symbol.for(Ps), $s, ki = class extends j {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Ns, message: e }), this[$s] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ps);
  }
};
$s = Ti;
function en(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var js = "AI_InvalidArgumentError", Ds = `vercel.ai.error.${js}`, Si = Symbol.for(Ds), qs, _r = class extends j {
  constructor({
    message: t,
    cause: n,
    argument: r
  }) {
    super({ name: js, message: t, cause: n }), this[qs] = !0, this.argument = r;
  }
  static isInstance(t) {
    return j.hasMarker(t, Ds);
  }
};
qs = Si;
var Us = "AI_InvalidPromptError", Ls = `vercel.ai.error.${Us}`, Ii = Symbol.for(Ls), Zs, gt = class extends j {
  constructor({
    prompt: e,
    message: t,
    cause: n
  }) {
    super({ name: Us, message: `Invalid prompt: ${t}`, cause: n }), this[Zs] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ls);
  }
};
Zs = Ii;
var Vs = "AI_InvalidResponseDataError", Bs = `vercel.ai.error.${Vs}`, Ci = Symbol.for(Bs), Fs, Wn = class extends j {
  constructor({
    data: e,
    message: t = `Invalid response data: ${JSON.stringify(e)}.`
  }) {
    super({ name: Vs, message: t }), this[Fs] = !0, this.data = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Bs);
  }
};
Fs = Ci;
var Gs = "AI_JSONParseError", Js = `vercel.ai.error.${Gs}`, Ri = Symbol.for(Js), Hs, zt = class extends j {
  constructor({ text: e, cause: t }) {
    super({
      name: Gs,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${en(t)}`,
      cause: t
    }), this[Hs] = !0, this.text = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Js);
  }
};
Hs = Ri;
var zs = "AI_LoadAPIKeyError", Ws = `vercel.ai.error.${zs}`, Ei = Symbol.for(Ws), Ys, ln = class extends j {
  // used in isInstance
  constructor({ message: e }) {
    super({ name: zs, message: e }), this[Ys] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ws);
  }
};
Ys = Ei;
var Ks = "AI_NoContentGeneratedError", Xs = `vercel.ai.error.${Ks}`, Ai = Symbol.for(Xs), Qs, Tf = class extends j {
  // used in isInstance
  constructor({
    message: e = "No content generated."
  } = {}) {
    super({ name: Ks, message: e }), this[Qs] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Xs);
  }
};
Qs = Ai;
var ea = "AI_NoSuchModelError", ta = `vercel.ai.error.${ea}`, Oi = Symbol.for(ta), na, je = class extends j {
  constructor({
    errorName: e = ea,
    modelId: t,
    modelType: n,
    message: r = `No such ${n}: ${t}`
  }) {
    super({ name: e, message: r }), this[na] = !0, this.modelId = t, this.modelType = n;
  }
  static isInstance(e) {
    return j.hasMarker(e, ta);
  }
};
na = Oi;
var ra = "AI_TooManyEmbeddingValuesForCallError", sa = `vercel.ai.error.${ra}`, Mi = Symbol.for(sa), aa, br = class extends j {
  constructor(e) {
    super({
      name: ra,
      message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
    }), this[aa] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
  }
  static isInstance(e) {
    return j.hasMarker(e, sa);
  }
};
aa = Mi;
var oa = "AI_TypeValidationError", ia = `vercel.ai.error.${oa}`, Ni = Symbol.for(ia), la, Pi = class ar extends j {
  constructor({ value: t, cause: n }) {
    super({
      name: oa,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${en(n)}`,
      cause: n
    }), this[la] = !0, this.value = t;
  }
  static isInstance(t) {
    return j.hasMarker(t, ia);
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
    return ar.isInstance(n) && n.value === t ? n : new ar({ value: t, cause: n });
  }
};
la = Ni;
var De = Pi, ua = "AI_UnsupportedFunctionalityError", ca = `vercel.ai.error.${ua}`, $i = Symbol.for(ca), da, he = class extends j {
  constructor({
    functionality: e,
    message: t = `'${e}' functionality not supported.`
  }) {
    super({ name: ua, message: t }), this[da] = !0, this.functionality = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, ca);
  }
};
da = $i;
function dn(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? !0 : Array.isArray(e) ? e.every(dn) : typeof e == "object" ? Object.entries(e).every(
    ([t, n]) => typeof t == "string" && dn(n)
  ) : !1;
}
function Fr(e) {
  return Array.isArray(e) && e.every(dn);
}
function pn(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, n]) => typeof t == "string" && dn(n)
  );
}
const ji = Symbol("Let zodToJsonSchema decide on which parser to use"), Gr = {
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
}, Di = (e) => typeof e == "string" ? {
  ...Gr,
  name: e
} : {
  ...Gr,
  ...e
}, qi = (e) => {
  const t = Di(e), n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    currentPath: n,
    propertyPath: void 0,
    seen: new Map(Object.entries(t.definitions).map(([r, s]) => [
      s._def,
      {
        def: s._def,
        path: [...t.basePath, t.definitionPath, r],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};
function pa(e, t, n, r) {
  r != null && r.errorMessages && n && (e.errorMessage = {
    ...e.errorMessage,
    [t]: n
  });
}
function re(e, t, n, r, s) {
  e[t] = n, pa(e, t, r, s);
}
var W;
(function(e) {
  e.assertEqual = (s) => {
  };
  function t(s) {
  }
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (s) => {
    const a = {};
    for (const o of s)
      a[o] = o;
    return a;
  }, e.getValidEnumValues = (s) => {
    const a = e.objectKeys(s).filter((i) => typeof s[s[i]] != "number"), o = {};
    for (const i of a)
      o[i] = s[i];
    return e.objectValues(o);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(a) {
    return s[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && a.push(o);
    return a;
  }, e.find = (s, a) => {
    for (const o of s)
      if (a(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function r(s, a = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(W || (W = {}));
var Jr;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Jr || (Jr = {}));
const A = W.arrayToEnum([
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
]), ct = (e) => {
  switch (typeof e) {
    case "undefined":
      return A.undefined;
    case "string":
      return A.string;
    case "number":
      return Number.isNaN(e) ? A.nan : A.number;
    case "boolean":
      return A.boolean;
    case "function":
      return A.function;
    case "bigint":
      return A.bigint;
    case "symbol":
      return A.symbol;
    case "object":
      return Array.isArray(e) ? A.array : e === null ? A.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? A.promise : typeof Map < "u" && e instanceof Map ? A.map : typeof Set < "u" && e instanceof Set ? A.set : typeof Date < "u" && e instanceof Date ? A.date : A.object;
    default:
      return A.unknown;
  }
}, I = W.arrayToEnum([
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
class at extends Error {
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
    }, r = { _errors: [] }, s = (a) => {
      for (const o of a.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let i = r, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(n(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], l++;
          }
        }
    };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof at))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, W.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const s of this.issues)
      s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(t(s))) : r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
at.create = (e) => new at(e);
const or = (e, t) => {
  let n;
  switch (e.code) {
    case I.invalid_type:
      e.received === A.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case I.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, W.jsonStringifyReplacer)}`;
      break;
    case I.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${W.joinValues(e.keys, ", ")}`;
      break;
    case I.invalid_union:
      n = "Invalid input";
      break;
    case I.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${W.joinValues(e.options)}`;
      break;
    case I.invalid_enum_value:
      n = `Invalid enum value. Expected ${W.joinValues(e.options)}, received '${e.received}'`;
      break;
    case I.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case I.invalid_return_type:
      n = "Invalid function return type";
      break;
    case I.invalid_date:
      n = "Invalid date";
      break;
    case I.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : W.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case I.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case I.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case I.custom:
      n = "Invalid input";
      break;
    case I.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case I.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case I.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, W.assertNever(e);
  }
  return { message: n };
};
let Ui = or;
function Li() {
  return Ui;
}
const Zi = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: s } = e, a = [...n, ...s.path || []], o = {
    ...s,
    path: a
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: a,
      message: s.message
    };
  let i = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    i = u(o, { data: t, defaultError: i }).message;
  return {
    ...s,
    path: a,
    message: i
  };
};
function E(e, t) {
  const n = Li(), r = Zi({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === or ? void 0 : or
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(r);
}
class Oe {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted")
        return D;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const a = await s.key, o = await s.value;
      r.push({
        key: a,
        value: o
      });
    }
    return Oe.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: a, value: o } = s;
      if (a.status === "aborted" || o.status === "aborted")
        return D;
      a.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[a.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const D = Object.freeze({
  status: "aborted"
}), Jt = (e) => ({ status: "dirty", value: e }), Ue = (e) => ({ status: "valid", value: e }), Hr = (e) => e.status === "aborted", zr = (e) => e.status === "dirty", $t = (e) => e.status === "valid", hn = (e) => typeof Promise < "u" && e instanceof Promise;
var $;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})($ || ($ = {}));
class Xe {
  constructor(t, n, r, s) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Wr = (e, t) => {
  if ($t(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new at(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Z(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: s } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (o, i) => {
    const { message: l } = e;
    return o.code === "invalid_enum_value" ? { message: l ?? i.defaultError } : typeof i.data > "u" ? { message: l ?? r ?? i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: l ?? n ?? i.defaultError };
  }, description: s };
}
class J {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ct(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: ct(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Oe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ct(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (hn(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    const r = {
      common: {
        issues: [],
        async: (n == null ? void 0 : n.async) ?? !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ct(t)
    }, s = this._parseSync({ data: t, path: r.path, parent: r });
    return Wr(r, s);
  }
  "~validate"(t) {
    var r, s;
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ct(t)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: t, path: [], parent: n });
        return $t(a) ? {
          value: a.value
        } : {
          issues: n.common.issues
        };
      } catch (a) {
        (s = (r = a == null ? void 0 : a.message) == null ? void 0 : r.toLowerCase()) != null && s.includes("encountered") && (this["~standard"].async = !0), n.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: n }).then((a) => $t(a) ? {
      value: a.value
    } : {
      issues: n.common.issues
    });
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ct(t)
    }, s = this._parse({ data: t, path: r.path, parent: r }), a = await (hn(s) ? s : Promise.resolve(s));
    return Wr(r, a);
  }
  refine(t, n) {
    const r = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, a) => {
      const o = t(s), i = () => a.addIssue({
        code: I.custom,
        ...r(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) => t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1));
  }
  _refinement(t) {
    return new kt({
      schema: this,
      typeName: R.ZodEffects,
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
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return Ye.create(this, this._def);
  }
  nullable() {
    return St.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return We.create(this);
  }
  promise() {
    return wn.create(this, this._def);
  }
  or(t) {
    return gn.create([this, t], this._def);
  }
  and(t) {
    return yn.create(this, t, this._def);
  }
  transform(t) {
    return new kt({
      ...Z(this._def),
      schema: this,
      typeName: R.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new xn({
      ...Z(this._def),
      innerType: this,
      defaultValue: n,
      typeName: R.ZodDefault
    });
  }
  brand() {
    return new ga({
      typeName: R.ZodBranded,
      type: this,
      ...Z(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Tn({
      ...Z(this._def),
      innerType: this,
      catchValue: n,
      typeName: R.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return xr.create(this, t);
  }
  readonly() {
    return kn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Vi = /^c[^\s-]{8,}$/i, Bi = /^[0-9a-z]+$/, Fi = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Gi = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ji = /^[a-z0-9_-]{21}$/i, Hi = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, zi = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wi = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Yi = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Yn;
const Ki = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Qi = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, el = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, tl = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, nl = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, ha = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", rl = new RegExp(`^${ha}$`);
function fa(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function sl(e) {
  return new RegExp(`^${fa(e)}$`);
}
function al(e) {
  let t = `${ha}T${fa(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function ol(e, t) {
  return !!((t === "v4" || !t) && Ki.test(e) || (t === "v6" || !t) && Qi.test(e));
}
function il(e, t) {
  if (!Hi.test(e))
    return !1;
  try {
    const [n] = e.split("."), r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), s = JSON.parse(atob(r));
    return !(typeof s != "object" || s === null || "typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || t && s.alg !== t);
  } catch {
    return !1;
  }
}
function ll(e, t) {
  return !!((t === "v4" || !t) && Xi.test(e) || (t === "v6" || !t) && el.test(e));
}
class ze extends J {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== A.string) {
      const a = this._getOrReturnCtx(t);
      return E(a, {
        code: I.invalid_type,
        expected: A.string,
        received: a.parsedType
      }), D;
    }
    const r = new Oe();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (s = this._getOrReturnCtx(t, s), E(s, {
          code: I.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (s = this._getOrReturnCtx(t, s), E(s, {
          code: I.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const o = t.data.length > a.value, i = t.data.length < a.value;
        (o || i) && (s = this._getOrReturnCtx(t, s), o ? E(s, {
          code: I.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && E(s, {
          code: I.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        Wi.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
          validation: "email",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Yn || (Yn = new RegExp(Yi, "u")), Yn.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
          validation: "emoji",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        Gi.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
          validation: "uuid",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        Ji.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
          validation: "nanoid",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        Vi.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
          validation: "cuid",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        Bi.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
          validation: "cuid2",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        Fi.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
          validation: "ulid",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), E(s, {
            validation: "url",
            code: I.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
        validation: "regex",
        code: I.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? al(a).test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? rl.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? sl(a).test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? zi.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
        validation: "duration",
        code: I.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? ol(t.data, a.version) || (s = this._getOrReturnCtx(t, s), E(s, {
        validation: "ip",
        code: I.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "jwt" ? il(t.data, a.alg) || (s = this._getOrReturnCtx(t, s), E(s, {
        validation: "jwt",
        code: I.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "cidr" ? ll(t.data, a.version) || (s = this._getOrReturnCtx(t, s), E(s, {
        validation: "cidr",
        code: I.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? tl.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
        validation: "base64",
        code: I.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64url" ? nl.test(t.data) || (s = this._getOrReturnCtx(t, s), E(s, {
        validation: "base64url",
        code: I.invalid_string,
        message: a.message
      }), r.dirty()) : W.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: I.invalid_string,
      ...$.errToObj(r)
    });
  }
  _addCheck(t) {
    return new ze({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...$.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...$.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...$.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...$.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...$.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...$.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...$.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...$.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...$.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...$.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...$.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...$.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...$.errToObj(t) });
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
      ...$.errToObj(t == null ? void 0 : t.message)
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
      ...$.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...$.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...$.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...$.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...$.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...$.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...$.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...$.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...$.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, $.errToObj(t));
  }
  trim() {
    return new ze({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ze({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ze({
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
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
ze.create = (e) => new ze({
  checks: [],
  typeName: R.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...Z(e)
});
function ul(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, s = n > r ? n : r, a = Number.parseInt(e.toFixed(s).replace(".", "")), o = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % o / 10 ** s;
}
class bt extends J {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== A.number) {
      const a = this._getOrReturnCtx(t);
      return E(a, {
        code: I.invalid_type,
        expected: A.number,
        received: a.parsedType
      }), D;
    }
    let r;
    const s = new Oe();
    for (const a of this._def.checks)
      a.kind === "int" ? W.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? ul(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.not_finite,
        message: a.message
      }), s.dirty()) : W.assertNever(a);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, $.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, $.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, $.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, $.toString(n));
  }
  setLimit(t, n, r, s) {
    return new bt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: $.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new bt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: $.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: $.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: $.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: $.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: $.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: $.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: $.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: $.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: $.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && W.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
bt.create = (e) => new bt({
  checks: [],
  typeName: R.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Z(e)
});
class wt extends J {
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
    if (this._getType(t) !== A.bigint)
      return this._getInvalidInput(t);
    let r;
    const s = new Oe();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), E(r, {
        code: I.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : W.assertNever(a);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return E(n, {
      code: I.invalid_type,
      expected: A.bigint,
      received: n.parsedType
    }), D;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, $.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, $.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, $.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, $.toString(n));
  }
  setLimit(t, n, r, s) {
    return new wt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: $.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new wt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: $.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: $.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: $.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: $.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: $.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
wt.create = (e) => new wt({
  checks: [],
  typeName: R.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...Z(e)
});
class fn extends J {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== A.boolean) {
      const r = this._getOrReturnCtx(t);
      return E(r, {
        code: I.invalid_type,
        expected: A.boolean,
        received: r.parsedType
      }), D;
    }
    return Ue(t.data);
  }
}
fn.create = (e) => new fn({
  typeName: R.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Z(e)
});
class jt extends J {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== A.date) {
      const a = this._getOrReturnCtx(t);
      return E(a, {
        code: I.invalid_type,
        expected: A.date,
        received: a.parsedType
      }), D;
    }
    if (Number.isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return E(a, {
        code: I.invalid_date
      }), D;
    }
    const r = new Oe();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (s = this._getOrReturnCtx(t, s), E(s, {
        code: I.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : W.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new jt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: $.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: $.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
jt.create = (e) => new jt({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: R.ZodDate,
  ...Z(e)
});
class Yr extends J {
  _parse(t) {
    if (this._getType(t) !== A.symbol) {
      const r = this._getOrReturnCtx(t);
      return E(r, {
        code: I.invalid_type,
        expected: A.symbol,
        received: r.parsedType
      }), D;
    }
    return Ue(t.data);
  }
}
Yr.create = (e) => new Yr({
  typeName: R.ZodSymbol,
  ...Z(e)
});
class ir extends J {
  _parse(t) {
    if (this._getType(t) !== A.undefined) {
      const r = this._getOrReturnCtx(t);
      return E(r, {
        code: I.invalid_type,
        expected: A.undefined,
        received: r.parsedType
      }), D;
    }
    return Ue(t.data);
  }
}
ir.create = (e) => new ir({
  typeName: R.ZodUndefined,
  ...Z(e)
});
class mn extends J {
  _parse(t) {
    if (this._getType(t) !== A.null) {
      const r = this._getOrReturnCtx(t);
      return E(r, {
        code: I.invalid_type,
        expected: A.null,
        received: r.parsedType
      }), D;
    }
    return Ue(t.data);
  }
}
mn.create = (e) => new mn({
  typeName: R.ZodNull,
  ...Z(e)
});
class Wt extends J {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ue(t.data);
  }
}
Wt.create = (e) => new Wt({
  typeName: R.ZodAny,
  ...Z(e)
});
class lr extends J {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ue(t.data);
  }
}
lr.create = (e) => new lr({
  typeName: R.ZodUnknown,
  ...Z(e)
});
class ht extends J {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return E(n, {
      code: I.invalid_type,
      expected: A.never,
      received: n.parsedType
    }), D;
  }
}
ht.create = (e) => new ht({
  typeName: R.ZodNever,
  ...Z(e)
});
class Kr extends J {
  _parse(t) {
    if (this._getType(t) !== A.undefined) {
      const r = this._getOrReturnCtx(t);
      return E(r, {
        code: I.invalid_type,
        expected: A.void,
        received: r.parsedType
      }), D;
    }
    return Ue(t.data);
  }
}
Kr.create = (e) => new Kr({
  typeName: R.ZodVoid,
  ...Z(e)
});
class We extends J {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), s = this._def;
    if (n.parsedType !== A.array)
      return E(n, {
        code: I.invalid_type,
        expected: A.array,
        received: n.parsedType
      }), D;
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value, i = n.data.length < s.exactLength.value;
      (o || i) && (E(n, {
        code: o ? I.too_big : I.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (E(n, {
      code: I.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (E(n, {
      code: I.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, i) => s.type._parseAsync(new Xe(n, o, n.path, i)))).then((o) => Oe.mergeArray(r, o));
    const a = [...n.data].map((o, i) => s.type._parseSync(new Xe(n, o, n.path, i)));
    return Oe.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new We({
      ...this._def,
      minLength: { value: t, message: $.toString(n) }
    });
  }
  max(t, n) {
    return new We({
      ...this._def,
      maxLength: { value: t, message: $.toString(n) }
    });
  }
  length(t, n) {
    return new We({
      ...this._def,
      exactLength: { value: t, message: $.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
We.create = (e, t) => new We({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: R.ZodArray,
  ...Z(t)
});
function Nt(e) {
  if (e instanceof ye) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Ye.create(Nt(r));
    }
    return new ye({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof We ? new We({
    ...e._def,
    type: Nt(e.element)
  }) : e instanceof Ye ? Ye.create(Nt(e.unwrap())) : e instanceof St ? St.create(Nt(e.unwrap())) : e instanceof xt ? xt.create(e.items.map((t) => Nt(t))) : e;
}
class ye extends J {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = W.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== A.object) {
      const u = this._getOrReturnCtx(t);
      return E(u, {
        code: I.invalid_type,
        expected: A.object,
        received: u.parsedType
      }), D;
    }
    const { status: r, ctx: s } = this._processInputParams(t), { shape: a, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof ht && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        o.includes(u) || i.push(u);
    const l = [];
    for (const u of o) {
      const c = a[u], p = s.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new Xe(s, p, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof ht) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of i)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: s.data[c] }
          });
      else if (u === "strict")
        i.length > 0 && (E(s, {
          code: I.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of i) {
        const p = s.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(
            new Xe(s, p, s.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const c of l) {
        const p = await c.key, h = await c.value;
        u.push({
          key: p,
          value: h,
          alwaysSet: c.alwaysSet
        });
      }
      return u;
    }).then((u) => Oe.mergeObjectSync(r, u)) : Oe.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return $.errToObj, new ye({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var a, o;
          const s = ((o = (a = this._def).errorMap) == null ? void 0 : o.call(a, n, r).message) ?? r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: $.errToObj(t).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new ye({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ye({
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
    return new ye({
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
    return new ye({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: R.ZodObject
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
  setKey(t, n) {
    return this.augment({ [t]: n });
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
    return new ye({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const r of W.objectKeys(t))
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new ye({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const r of W.objectKeys(this.shape))
      t[r] || (n[r] = this.shape[r]);
    return new ye({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Nt(this);
  }
  partial(t) {
    const n = {};
    for (const r of W.objectKeys(this.shape)) {
      const s = this.shape[r];
      t && !t[r] ? n[r] = s : n[r] = s.optional();
    }
    return new ye({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const r of W.objectKeys(this.shape))
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Ye; )
          a = a._def.innerType;
        n[r] = a;
      }
    return new ye({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return ma(W.objectKeys(this.shape));
  }
}
ye.create = (e, t) => new ye({
  shape: () => e,
  unknownKeys: "strip",
  catchall: ht.create(),
  typeName: R.ZodObject,
  ...Z(t)
});
ye.strictCreate = (e, t) => new ye({
  shape: () => e,
  unknownKeys: "strict",
  catchall: ht.create(),
  typeName: R.ZodObject,
  ...Z(t)
});
ye.lazycreate = (e, t) => new ye({
  shape: e,
  unknownKeys: "strip",
  catchall: ht.create(),
  typeName: R.ZodObject,
  ...Z(t)
});
class gn extends J {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function s(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((i) => new at(i.ctx.common.issues));
      return E(n, {
        code: I.invalid_union,
        unionErrors: o
      }), D;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let a;
      const o = [];
      for (const l of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, c = l._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !a && (a = { result: c, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((l) => new at(l));
      return E(n, {
        code: I.invalid_union,
        unionErrors: i
      }), D;
    }
  }
  get options() {
    return this._def.options;
  }
}
gn.create = (e, t) => new gn({
  options: e,
  typeName: R.ZodUnion,
  ...Z(t)
});
const nt = (e) => e instanceof _n ? nt(e.schema) : e instanceof kt ? nt(e.innerType()) : e instanceof bn ? [e.value] : e instanceof Tt ? e.options : e instanceof cr ? W.objectValues(e.enum) : e instanceof xn ? nt(e._def.innerType) : e instanceof ir ? [void 0] : e instanceof mn ? [null] : e instanceof Ye ? [void 0, ...nt(e.unwrap())] : e instanceof St ? [null, ...nt(e.unwrap())] : e instanceof ga || e instanceof kn ? nt(e.unwrap()) : e instanceof Tn ? nt(e._def.innerType) : [];
class wr extends J {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== A.object)
      return E(n, {
        code: I.invalid_type,
        expected: A.object,
        received: n.parsedType
      }), D;
    const r = this.discriminator, s = n.data[r], a = this.optionsMap.get(s);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (E(n, {
      code: I.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), D);
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
  static create(t, n, r) {
    const s = /* @__PURE__ */ new Map();
    for (const a of n) {
      const o = nt(a.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (s.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        s.set(i, a);
      }
    }
    return new wr({
      typeName: R.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...Z(r)
    });
  }
}
function ur(e, t) {
  const n = ct(e), r = ct(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === A.object && r === A.object) {
    const s = W.objectKeys(t), a = W.objectKeys(e).filter((i) => s.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of a) {
      const l = ur(e[i], t[i]);
      if (!l.valid)
        return { valid: !1 };
      o[i] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === A.array && r === A.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const o = e[a], i = t[a], l = ur(o, i);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return n === A.date && r === A.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class yn extends J {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = (a, o) => {
      if (Hr(a) || Hr(o))
        return D;
      const i = ur(a.value, o.value);
      return i.valid ? ((zr(a) || zr(o)) && n.dirty(), { status: n.value, value: i.data }) : (E(r, {
        code: I.invalid_intersection_types
      }), D);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, o]) => s(a, o)) : s(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
yn.create = (e, t, n) => new yn({
  left: e,
  right: t,
  typeName: R.ZodIntersection,
  ...Z(n)
});
class xt extends J {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== A.array)
      return E(r, {
        code: I.invalid_type,
        expected: A.array,
        received: r.parsedType
      }), D;
    if (r.data.length < this._def.items.length)
      return E(r, {
        code: I.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), D;
    !this._def.rest && r.data.length > this._def.items.length && (E(r, {
      code: I.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((o, i) => {
      const l = this._def.items[i] || this._def.rest;
      return l ? l._parse(new Xe(r, o, r.path, i)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(a).then((o) => Oe.mergeArray(n, o)) : Oe.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new xt({
      ...this._def,
      rest: t
    });
  }
}
xt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xt({
    items: e,
    typeName: R.ZodTuple,
    rest: null,
    ...Z(t)
  });
};
class vn extends J {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== A.object)
      return E(r, {
        code: I.invalid_type,
        expected: A.object,
        received: r.parsedType
      }), D;
    const s = [], a = this._def.keyType, o = this._def.valueType;
    for (const i in r.data)
      s.push({
        key: a._parse(new Xe(r, i, r.path, i)),
        value: o._parse(new Xe(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data
      });
    return r.common.async ? Oe.mergeObjectAsync(n, s) : Oe.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof J ? new vn({
      keyType: t,
      valueType: n,
      typeName: R.ZodRecord,
      ...Z(r)
    }) : new vn({
      keyType: ze.create(),
      valueType: t,
      typeName: R.ZodRecord,
      ...Z(n)
    });
  }
}
class Xr extends J {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== A.map)
      return E(r, {
        code: I.invalid_type,
        expected: A.map,
        received: r.parsedType
      }), D;
    const s = this._def.keyType, a = this._def.valueType, o = [...r.data.entries()].map(([i, l], u) => ({
      key: s._parse(new Xe(r, i, r.path, [u, "key"])),
      value: a._parse(new Xe(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, c = await l.value;
          if (u.status === "aborted" || c.status === "aborted")
            return D;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(), i.set(u.value, c.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, c = l.value;
        if (u.status === "aborted" || c.status === "aborted")
          return D;
        (u.status === "dirty" || c.status === "dirty") && n.dirty(), i.set(u.value, c.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Xr.create = (e, t, n) => new Xr({
  valueType: t,
  keyType: e,
  typeName: R.ZodMap,
  ...Z(n)
});
class Yt extends J {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== A.set)
      return E(r, {
        code: I.invalid_type,
        expected: A.set,
        received: r.parsedType
      }), D;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (E(r, {
      code: I.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (E(r, {
      code: I.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return D;
        c.status === "dirty" && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const i = [...r.data.values()].map((l, u) => a._parse(new Xe(r, l, r.path, u)));
    return r.common.async ? Promise.all(i).then((l) => o(l)) : o(i);
  }
  min(t, n) {
    return new Yt({
      ...this._def,
      minSize: { value: t, message: $.toString(n) }
    });
  }
  max(t, n) {
    return new Yt({
      ...this._def,
      maxSize: { value: t, message: $.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Yt.create = (e, t) => new Yt({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: R.ZodSet,
  ...Z(t)
});
class _n extends J {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
_n.create = (e, t) => new _n({
  getter: e,
  typeName: R.ZodLazy,
  ...Z(t)
});
class bn extends J {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return E(n, {
        received: n.data,
        code: I.invalid_literal,
        expected: this._def.value
      }), D;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
bn.create = (e, t) => new bn({
  value: e,
  typeName: R.ZodLiteral,
  ...Z(t)
});
function ma(e, t) {
  return new Tt({
    values: e,
    typeName: R.ZodEnum,
    ...Z(t)
  });
}
class Tt extends J {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return E(n, {
        expected: W.joinValues(r),
        received: n.parsedType,
        code: I.invalid_type
      }), D;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return E(n, {
        received: n.data,
        code: I.invalid_enum_value,
        options: r
      }), D;
    }
    return Ue(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Tt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Tt.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Tt.create = ma;
class cr extends J {
  _parse(t) {
    const n = W.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== A.string && r.parsedType !== A.number) {
      const s = W.objectValues(n);
      return E(r, {
        expected: W.joinValues(s),
        received: r.parsedType,
        code: I.invalid_type
      }), D;
    }
    if (this._cache || (this._cache = new Set(W.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const s = W.objectValues(n);
      return E(r, {
        received: r.data,
        code: I.invalid_enum_value,
        options: s
      }), D;
    }
    return Ue(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
cr.create = (e, t) => new cr({
  values: e,
  typeName: R.ZodNativeEnum,
  ...Z(t)
});
class wn extends J {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== A.promise && n.common.async === !1)
      return E(n, {
        code: I.invalid_type,
        expected: A.promise,
        received: n.parsedType
      }), D;
    const r = n.parsedType === A.promise ? n.data : Promise.resolve(n.data);
    return Ue(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
wn.create = (e, t) => new wn({
  type: e,
  typeName: R.ZodPromise,
  ...Z(t)
});
class kt extends J {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === R.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = this._def.effect || null, a = {
      addIssue: (o) => {
        E(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const o = s.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(o).then(async (i) => {
          if (n.value === "aborted")
            return D;
          const l = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? D : l.status === "dirty" || n.value === "dirty" ? Jt(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return D;
        const i = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? D : i.status === "dirty" || n.value === "dirty" ? Jt(i.value) : i;
      }
    }
    if (s.type === "refinement") {
      const o = (i) => {
        const l = s.refinement(i, a);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? D : (i.status === "dirty" && n.dirty(), o(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? D : (i.status === "dirty" && n.dirty(), o(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!$t(o))
          return D;
        const i = s.transform(o.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => $t(o) ? Promise.resolve(s.transform(o.value, a)).then((i) => ({
          status: n.value,
          value: i
        })) : D);
    W.assertNever(s);
  }
}
kt.create = (e, t, n) => new kt({
  schema: e,
  typeName: R.ZodEffects,
  effect: t,
  ...Z(n)
});
kt.createWithPreprocess = (e, t, n) => new kt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: R.ZodEffects,
  ...Z(n)
});
class Ye extends J {
  _parse(t) {
    return this._getType(t) === A.undefined ? Ue(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ye.create = (e, t) => new Ye({
  innerType: e,
  typeName: R.ZodOptional,
  ...Z(t)
});
class St extends J {
  _parse(t) {
    return this._getType(t) === A.null ? Ue(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
St.create = (e, t) => new St({
  innerType: e,
  typeName: R.ZodNullable,
  ...Z(t)
});
class xn extends J {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === A.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
xn.create = (e, t) => new xn({
  innerType: e,
  typeName: R.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Z(t)
});
class Tn extends J {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return hn(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new at(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new at(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Tn.create = (e, t) => new Tn({
  innerType: e,
  typeName: R.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Z(t)
});
class Qr extends J {
  _parse(t) {
    if (this._getType(t) !== A.nan) {
      const r = this._getOrReturnCtx(t);
      return E(r, {
        code: I.invalid_type,
        expected: A.nan,
        received: r.parsedType
      }), D;
    }
    return { status: "valid", value: t.data };
  }
}
Qr.create = (e) => new Qr({
  typeName: R.ZodNaN,
  ...Z(e)
});
class ga extends J {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class xr extends J {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? D : a.status === "dirty" ? (n.dirty(), Jt(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? D : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new xr({
      in: t,
      out: n,
      typeName: R.ZodPipeline
    });
  }
}
class kn extends J {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (s) => ($t(s) && (s.value = Object.freeze(s.value)), s);
    return hn(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
kn.create = (e, t) => new kn({
  innerType: e,
  typeName: R.ZodReadonly,
  ...Z(t)
});
function es(e, t) {
  const n = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof n == "string" ? { message: n } : n;
}
function ya(e, t = {}, n) {
  return e ? Wt.create().superRefine((r, s) => {
    const a = e(r);
    if (a instanceof Promise)
      return a.then((o) => {
        if (!o) {
          const i = es(t, r), l = i.fatal ?? n ?? !0;
          s.addIssue({ code: "custom", ...i, fatal: l });
        }
      });
    if (!a) {
      const o = es(t, r), i = o.fatal ?? n ?? !0;
      s.addIssue({ code: "custom", ...o, fatal: i });
    }
  }) : Wt.create();
}
var R;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(R || (R = {}));
const Sn = (e, t = {
  message: `Input not instance of ${e.name}`
}) => ya((n) => n instanceof e, t), d = ze.create, T = bt.create;
wt.create;
const ue = fn.create;
jt.create;
const cl = mn.create, Pt = Wt.create, Me = lr.create;
ht.create;
const M = We.create, f = ye.create, se = gn.create, pt = wr.create;
yn.create;
const ts = xt.create, Ke = vn.create, dl = _n.create, C = bn.create, Ce = Tt.create;
wn.create;
const be = Ye.create;
St.create;
const pl = {
  string: (e) => ze.create({ ...e, coerce: !0 }),
  number: (e) => bt.create({ ...e, coerce: !0 }),
  boolean: (e) => fn.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => wt.create({ ...e, coerce: !0 }),
  date: (e) => jt.create({ ...e, coerce: !0 })
};
function hl() {
  return {};
}
function fl(e, t) {
  var r, s, a;
  const n = {
    type: "array"
  };
  return (r = e.type) != null && r._def && ((a = (s = e.type) == null ? void 0 : s._def) == null ? void 0 : a.typeName) !== R.ZodAny && (n.items = Q(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && re(n, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && re(n, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (re(n, "minItems", e.exactLength.value, e.exactLength.message, t), re(n, "maxItems", e.exactLength.value, e.exactLength.message, t)), n;
}
function ml(e, t) {
  const n = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? re(n, "minimum", r.value, r.message, t) : re(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), re(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? re(n, "maximum", r.value, r.message, t) : re(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), re(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        re(n, "multipleOf", r.value, r.message, t);
        break;
    }
  return n;
}
function gl() {
  return {
    type: "boolean"
  };
}
function va(e, t) {
  return Q(e.type._def, t);
}
const yl = (e, t) => Q(e.innerType._def, t);
function _a(e, t, n) {
  const r = n ?? t.dateStrategy;
  if (Array.isArray(r))
    return {
      anyOf: r.map((s, a) => _a(e, t, s))
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
      return vl(e, t);
  }
}
const vl = (e, t) => {
  const n = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        re(
          n,
          "minimum",
          r.value,
          // This is in milliseconds
          r.message,
          t
        );
        break;
      case "max":
        re(
          n,
          "maximum",
          r.value,
          // This is in milliseconds
          r.message,
          t
        );
        break;
    }
  return n;
};
function _l(e, t) {
  return {
    ...Q(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function bl(e, t) {
  return t.effectStrategy === "input" ? Q(e.schema._def, t) : {};
}
function wl(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const xl = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Tl(e, t) {
  const n = [
    Q(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    Q(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a);
  let r = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return n.forEach((a) => {
    if (xl(a))
      s.push(...a.allOf), a.unevaluatedProperties === void 0 && (r = void 0);
    else {
      let o = a;
      if ("additionalProperties" in a && a.additionalProperties === !1) {
        const { additionalProperties: i, ...l } = a;
        o = l;
      } else
        r = void 0;
      s.push(o);
    }
  }), s.length ? {
    allOf: s,
    ...r
  } : void 0;
}
function kl(e, t) {
  const n = typeof e.value;
  return n !== "bigint" && n !== "number" && n !== "boolean" && n !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : t.target === "openApi3" ? {
    type: n === "bigint" ? "integer" : n,
    enum: [e.value]
  } : {
    type: n === "bigint" ? "integer" : n,
    const: e.value
  };
}
let Kn;
const Ve = {
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
  emoji: () => (Kn === void 0 && (Kn = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Kn),
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
function ba(e, t) {
  const n = {
    type: "string"
  };
  if (e.checks)
    for (const r of e.checks)
      switch (r.kind) {
        case "min":
          re(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t);
          break;
        case "max":
          re(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              Be(n, "email", r.message, t);
              break;
            case "format:idn-email":
              Be(n, "idn-email", r.message, t);
              break;
            case "pattern:zod":
              Re(n, Ve.email, r.message, t);
              break;
          }
          break;
        case "url":
          Be(n, "uri", r.message, t);
          break;
        case "uuid":
          Be(n, "uuid", r.message, t);
          break;
        case "regex":
          Re(n, r.regex, r.message, t);
          break;
        case "cuid":
          Re(n, Ve.cuid, r.message, t);
          break;
        case "cuid2":
          Re(n, Ve.cuid2, r.message, t);
          break;
        case "startsWith":
          Re(n, RegExp(`^${Xn(r.value, t)}`), r.message, t);
          break;
        case "endsWith":
          Re(n, RegExp(`${Xn(r.value, t)}$`), r.message, t);
          break;
        case "datetime":
          Be(n, "date-time", r.message, t);
          break;
        case "date":
          Be(n, "date", r.message, t);
          break;
        case "time":
          Be(n, "time", r.message, t);
          break;
        case "duration":
          Be(n, "duration", r.message, t);
          break;
        case "length":
          re(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t), re(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "includes": {
          Re(n, RegExp(Xn(r.value, t)), r.message, t);
          break;
        }
        case "ip": {
          r.version !== "v6" && Be(n, "ipv4", r.message, t), r.version !== "v4" && Be(n, "ipv6", r.message, t);
          break;
        }
        case "base64url":
          Re(n, Ve.base64url, r.message, t);
          break;
        case "jwt":
          Re(n, Ve.jwt, r.message, t);
          break;
        case "cidr": {
          r.version !== "v6" && Re(n, Ve.ipv4Cidr, r.message, t), r.version !== "v4" && Re(n, Ve.ipv6Cidr, r.message, t);
          break;
        }
        case "emoji":
          Re(n, Ve.emoji(), r.message, t);
          break;
        case "ulid": {
          Re(n, Ve.ulid, r.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Be(n, "binary", r.message, t);
              break;
            }
            case "contentEncoding:base64": {
              re(n, "contentEncoding", "base64", r.message, t);
              break;
            }
            case "pattern:zod": {
              Re(n, Ve.base64, r.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Re(n, Ve.nanoid, r.message, t);
      }
  return n;
}
function Xn(e, t) {
  return t.patternStrategy === "escape" ? Il(e) : e;
}
const Sl = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Il(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    Sl.has(e[n]) || (t += "\\"), t += e[n];
  return t;
}
function Be(e, t, n, r) {
  var s;
  e.format || (s = e.anyOf) != null && s.some((a) => a.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...n && r.errorMessages && { errorMessage: { format: n } }
  })) : re(e, "format", t, n, r);
}
function Re(e, t, n, r) {
  var s;
  e.pattern || (s = e.allOf) != null && s.some((a) => a.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: ns(t, r),
    ...n && r.errorMessages && { errorMessage: { pattern: n } }
  })) : re(e, "pattern", ns(t, r), n, r);
}
function ns(e, t) {
  var l;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const n = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s")
    // `.` matches newlines
  }, r = n.i ? e.source.toLowerCase() : e.source;
  let s = "", a = !1, o = !1, i = !1;
  for (let u = 0; u < r.length; u++) {
    if (a) {
      s += r[u], a = !1;
      continue;
    }
    if (n.i) {
      if (o) {
        if (r[u].match(/[a-z]/)) {
          i ? (s += r[u], s += `${r[u - 2]}-${r[u]}`.toUpperCase(), i = !1) : r[u + 1] === "-" && ((l = r[u + 2]) != null && l.match(/[a-z]/)) ? (s += r[u], i = !0) : s += `${r[u]}${r[u].toUpperCase()}`;
          continue;
        }
      } else if (r[u].match(/[a-z]/)) {
        s += `[${r[u]}${r[u].toUpperCase()}]`;
        continue;
      }
    }
    if (n.m) {
      if (r[u] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (r[u] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n.s && r[u] === ".") {
      s += o ? `${r[u]}\r
` : `[${r[u]}\r
]`;
      continue;
    }
    s += r[u], r[u] === "\\" ? a = !0 : o && r[u] === "]" ? o = !1 : !o && r[u] === "[" && (o = !0);
  }
  try {
    new RegExp(s);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
  }
  return s;
}
function wa(e, t) {
  var r, s, a, o, i, l;
  if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && ((r = e.keyType) == null ? void 0 : r._def.typeName) === R.ZodEnum)
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
  const n = {
    type: "object",
    additionalProperties: Q(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? t.allowedAdditionalProperties
  };
  if (t.target === "openApi3")
    return n;
  if (((s = e.keyType) == null ? void 0 : s._def.typeName) === R.ZodString && ((a = e.keyType._def.checks) != null && a.length)) {
    const { type: u, ...c } = ba(e.keyType._def, t);
    return {
      ...n,
      propertyNames: c
    };
  } else {
    if (((o = e.keyType) == null ? void 0 : o._def.typeName) === R.ZodEnum)
      return {
        ...n,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((i = e.keyType) == null ? void 0 : i._def.typeName) === R.ZodBranded && e.keyType._def.type._def.typeName === R.ZodString && ((l = e.keyType._def.type._def.checks) != null && l.length)) {
      const { type: u, ...c } = va(e.keyType._def, t);
      return {
        ...n,
        propertyNames: c
      };
    }
  }
  return n;
}
function Cl(e, t) {
  if (t.mapStrategy === "record")
    return wa(e, t);
  const n = Q(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || {}, r = Q(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || {};
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
function Rl(e) {
  const t = e.values, r = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), s = Array.from(new Set(r.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function El() {
  return {
    not: {}
  };
}
function Al(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const In = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Ol(e, t) {
  if (t.target === "openApi3")
    return rs(e, t);
  const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (n.every((r) => r._def.typeName in In && (!r._def.checks || !r._def.checks.length))) {
    const r = n.reduce((s, a) => {
      const o = In[a._def.typeName];
      return o && !s.includes(o) ? [...s, o] : s;
    }, []);
    return {
      type: r.length > 1 ? r : r[0]
    };
  } else if (n.every((r) => r._def.typeName === "ZodLiteral" && !r.description)) {
    const r = n.reduce((s, a) => {
      const o = typeof a._def.value;
      switch (o) {
        case "string":
        case "number":
        case "boolean":
          return [...s, o];
        case "bigint":
          return [...s, "integer"];
        case "object":
          if (a._def.value === null)
            return [...s, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return s;
      }
    }, []);
    if (r.length === n.length) {
      const s = r.filter((a, o, i) => i.indexOf(a) === o);
      return {
        type: s.length > 1 ? s : s[0],
        enum: n.reduce((a, o) => a.includes(o._def.value) ? a : [...a, o._def.value], [])
      };
    }
  } else if (n.every((r) => r._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: n.reduce((r, s) => [
        ...r,
        ...s._def.values.filter((a) => !r.includes(a))
      ], [])
    };
  return rs(e, t);
}
const rs = (e, t) => {
  const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((r, s) => Q(r._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${s}`]
  })).filter((r) => !!r && (!t.strictUnions || typeof r == "object" && Object.keys(r).length > 0));
  return n.length ? { anyOf: n } : void 0;
};
function Ml(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: In[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        In[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const r = Q(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return r && "$ref" in r ? { allOf: [r], nullable: !0 } : r && { ...r, nullable: !0 };
  }
  const n = Q(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return n && { anyOf: [n, { type: "null" }] };
}
function Nl(e, t) {
  const n = {
    type: "number"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "int":
        n.type = "integer", pa(n, "type", r.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? re(n, "minimum", r.value, r.message, t) : re(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), re(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? re(n, "maximum", r.value, r.message, t) : re(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), re(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        re(n, "multipleOf", r.value, r.message, t);
        break;
    }
  return n;
}
function Pl(e, t) {
  const n = t.target === "openAi", r = {
    type: "object",
    properties: {}
  }, s = [], a = e.shape();
  for (const i in a) {
    let l = a[i];
    if (l === void 0 || l._def === void 0)
      continue;
    let u = jl(l);
    u && n && (l instanceof Ye && (l = l._def.innerType), l.isNullable() || (l = l.nullable()), u = !1);
    const c = Q(l._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", i],
      propertyPath: [...t.currentPath, "properties", i]
    });
    c !== void 0 && (r.properties[i] = c, u || s.push(i));
  }
  s.length && (r.required = s);
  const o = $l(e, t);
  return o !== void 0 && (r.additionalProperties = o), r;
}
function $l(e, t) {
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
function jl(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
const Dl = (e, t) => {
  var r;
  if (t.currentPath.toString() === ((r = t.propertyPath) == null ? void 0 : r.toString()))
    return Q(e.innerType._def, t);
  const n = Q(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return n ? {
    anyOf: [
      {
        not: {}
      },
      n
    ]
  } : {};
}, ql = (e, t) => {
  if (t.pipeStrategy === "input")
    return Q(e.in._def, t);
  if (t.pipeStrategy === "output")
    return Q(e.out._def, t);
  const n = Q(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), r = Q(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", n ? "1" : "0"]
  });
  return {
    allOf: [n, r].filter((s) => s !== void 0)
  };
};
function Ul(e, t) {
  return Q(e.type._def, t);
}
function Ll(e, t) {
  const r = {
    type: "array",
    uniqueItems: !0,
    items: Q(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && re(r, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && re(r, "maxItems", e.maxSize.value, e.maxSize.message, t), r;
}
function Zl(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((n, r) => Q(n._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${r}`]
    })).reduce((n, r) => r === void 0 ? n : [...n, r], []),
    additionalItems: Q(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((n, r) => Q(n._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${r}`]
    })).reduce((n, r) => r === void 0 ? n : [...n, r], [])
  };
}
function Vl() {
  return {
    not: {}
  };
}
function Bl() {
  return {};
}
const Fl = (e, t) => Q(e.innerType._def, t), Gl = (e, t, n) => {
  switch (t) {
    case R.ZodString:
      return ba(e, n);
    case R.ZodNumber:
      return Nl(e, n);
    case R.ZodObject:
      return Pl(e, n);
    case R.ZodBigInt:
      return ml(e, n);
    case R.ZodBoolean:
      return gl();
    case R.ZodDate:
      return _a(e, n);
    case R.ZodUndefined:
      return Vl();
    case R.ZodNull:
      return Al(n);
    case R.ZodArray:
      return fl(e, n);
    case R.ZodUnion:
    case R.ZodDiscriminatedUnion:
      return Ol(e, n);
    case R.ZodIntersection:
      return Tl(e, n);
    case R.ZodTuple:
      return Zl(e, n);
    case R.ZodRecord:
      return wa(e, n);
    case R.ZodLiteral:
      return kl(e, n);
    case R.ZodEnum:
      return wl(e);
    case R.ZodNativeEnum:
      return Rl(e);
    case R.ZodNullable:
      return Ml(e, n);
    case R.ZodOptional:
      return Dl(e, n);
    case R.ZodMap:
      return Cl(e, n);
    case R.ZodSet:
      return Ll(e, n);
    case R.ZodLazy:
      return () => e.getter()._def;
    case R.ZodPromise:
      return Ul(e, n);
    case R.ZodNaN:
    case R.ZodNever:
      return El();
    case R.ZodEffects:
      return bl(e, n);
    case R.ZodAny:
      return hl();
    case R.ZodUnknown:
      return Bl();
    case R.ZodDefault:
      return _l(e, n);
    case R.ZodBranded:
      return va(e, n);
    case R.ZodReadonly:
      return Fl(e, n);
    case R.ZodCatch:
      return yl(e, n);
    case R.ZodPipeline:
      return ql(e, n);
    case R.ZodFunction:
    case R.ZodVoid:
    case R.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((r) => {
      })();
  }
};
function Q(e, t, n = !1) {
  var i;
  const r = t.seen.get(e);
  if (t.override) {
    const l = (i = t.override) == null ? void 0 : i.call(t, e, t, r, n);
    if (l !== ji)
      return l;
  }
  if (r && !n) {
    const l = Jl(r, t);
    if (l !== void 0)
      return l;
  }
  const s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  const a = Gl(e, e.typeName, t), o = typeof a == "function" ? Q(a(), t) : a;
  if (o && zl(e, t, o), t.postProcess) {
    const l = t.postProcess(o, e, t);
    return s.jsonSchema = o, l;
  }
  return s.jsonSchema = o, o;
}
const Jl = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Hl(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((n, r) => t.currentPath[r] === n) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), {}) : t.$refStrategy === "seen" ? {} : void 0;
  }
}, Hl = (e, t) => {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++)
    ;
  return [(e.length - n).toString(), ...t.slice(n)].join("/");
}, zl = (e, t, n) => (e.description && (n.description = e.description, t.markdownDescription && (n.markdownDescription = e.description)), n), Wl = (e, t) => {
  const n = qi(t), r = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((l, [u, c]) => ({
    ...l,
    [u]: Q(c._def, {
      ...n,
      currentPath: [...n.basePath, n.definitionPath, u]
    }, !0) ?? {}
  }), {}) : void 0, s = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, a = Q(e._def, s === void 0 ? n : {
    ...n,
    currentPath: [...n.basePath, n.definitionPath, s]
  }, !1) ?? {}, o = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  o !== void 0 && (a.title = o);
  const i = s === void 0 ? r ? {
    ...a,
    [n.definitionPath]: r
  } : a : {
    $ref: [
      ...n.$refStrategy === "relative" ? [] : n.basePath,
      n.definitionPath,
      s
    ].join("/"),
    [n.definitionPath]: {
      ...r,
      [s]: a
    }
  };
  return n.target === "jsonSchema7" ? i.$schema = "http://json-schema.org/draft-07/schema#" : (n.target === "jsonSchema2019-09" || n.target === "openAi") && (i.$schema = "https://json-schema.org/draft/2019-09/schema#"), n.target === "openAi" && ("anyOf" in i || "oneOf" in i || "allOf" in i || "type" in i && Array.isArray(i.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), i;
};
function Se(...e) {
  return e.reduce(
    (t, n) => ({
      ...t,
      ...n ?? {}
    }),
    {}
  );
}
async function Tr(e) {
  return e == null ? Promise.resolve() : new Promise((t) => setTimeout(t, e));
}
function xa() {
  let e = "", t, n = [], r, s;
  function a(l, u) {
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
    const p = l.slice(0, c), h = c + 1, g = h < l.length && l[h] === " " ? l.slice(h + 1) : l.slice(h);
    i(p, g);
  }
  function o(l) {
    n.length > 0 && (l.enqueue({
      event: t,
      data: n.join(`
`),
      id: r,
      retry: s
    }), n = [], t = void 0, s = void 0);
  }
  function i(l, u) {
    switch (l) {
      case "event":
        t = u;
        break;
      case "data":
        n.push(u);
        break;
      case "id":
        r = u;
        break;
      case "retry":
        const c = parseInt(u, 10);
        isNaN(c) || (s = c);
        break;
    }
  }
  return new TransformStream({
    transform(l, u) {
      const { lines: c, incompleteLine: p } = Yl(e, l);
      e = p;
      for (let h = 0; h < c.length; h++)
        a(c[h], u);
    },
    flush(l) {
      a(e, l), o(l);
    }
  });
}
function Yl(e, t) {
  const n = [];
  let r = e;
  for (let s = 0; s < t.length; ) {
    const a = t[s++];
    a === `
` ? (n.push(r), r = "") : a === "\r" ? (n.push(r), r = "", t[s] === `
` && s++) : r += a;
  }
  return { lines: n, incompleteLine: r };
}
function tn(e) {
  const t = {};
  return e.headers.forEach((n, r) => {
    t[r] = n;
  }), t;
}
var nn = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const s = () => {
    const a = n.length, o = new Array(t);
    for (let i = 0; i < t; i++)
      o[i] = n[Math.random() * a | 0];
    return o.join("");
  };
  if (e == null)
    return s;
  if (n.includes(r))
    throw new _r({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return () => `${e}${r}${s()}`;
}, st = nn();
function Kl(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function Xl(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, n]) => n != null)
  );
}
function cn(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Ql({
  mediaType: e,
  url: t,
  supportedUrls: n
}) {
  return t = t.toLowerCase(), e = e.toLowerCase(), Object.entries(n).map(([r, s]) => {
    const a = r.toLowerCase();
    return a === "*" || a === "*/*" ? { mediaTypePrefix: "", regexes: s } : { mediaTypePrefix: a.replace(/\*/, ""), regexes: s };
  }).filter(({ mediaTypePrefix: r }) => e.startsWith(r)).flatMap(({ regexes: r }) => r).some((r) => r.test(t));
}
function $n({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: n = "apiKey",
  description: r
}) {
  if (typeof e == "string")
    return e;
  if (e != null)
    throw new ln({
      message: `${r} API key must be a string.`
    });
  if (typeof process > "u")
    throw new ln({
      message: `${r} API key is missing. Pass it using the '${n}' parameter. Environment variables is not supported in this environment.`
    });
  if (e = process.env[t], e == null)
    throw new ln({
      message: `${r} API key is missing. Pass it using the '${n}' parameter or the ${t} environment variable.`
    });
  if (typeof e != "string")
    throw new ln({
      message: `${r} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
  return e;
}
var eu = /"__proto__"\s*:/, tu = /"constructor"\s*:/;
function nu(e) {
  const t = JSON.parse(e);
  return t === null || typeof t != "object" || eu.test(e) === !1 && tu.test(e) === !1 ? t : ru(t);
}
function ru(e) {
  let t = [e];
  for (; t.length; ) {
    const n = t;
    t = [];
    for (const r of n) {
      if (Object.prototype.hasOwnProperty.call(r, "__proto__"))
        throw new SyntaxError("Object contains forbidden prototype property");
      if (Object.prototype.hasOwnProperty.call(r, "constructor") && Object.prototype.hasOwnProperty.call(r.constructor, "prototype"))
        throw new SyntaxError("Object contains forbidden prototype property");
      for (const s in r) {
        const a = r[s];
        a && typeof a == "object" && t.push(a);
      }
    }
  }
  return e;
}
function kr(e) {
  const { stackTraceLimit: t } = Error;
  Error.stackTraceLimit = 0;
  try {
    return nu(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
var Cn = Symbol.for("vercel.ai.validator");
function su(e) {
  return { [Cn]: !0, validate: e };
}
function au(e) {
  return typeof e == "object" && e !== null && Cn in e && e[Cn] === !0 && "validate" in e;
}
function ou(e) {
  return au(e) ? e : iu(e);
}
function iu(e) {
  return su(async (t) => {
    const n = await e["~standard"].validate(t);
    return n.issues == null ? { success: !0, value: n.value } : {
      success: !1,
      error: new De({
        value: t,
        cause: n.issues
      })
    };
  });
}
async function Ta({
  value: e,
  schema: t
}) {
  const n = await ot({ value: e, schema: t });
  if (!n.success)
    throw De.wrap({ value: e, cause: n.error });
  return n.value;
}
async function ot({
  value: e,
  schema: t
}) {
  const n = ou(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e, rawValue: e };
    const r = await n.validate(e);
    return r.success ? { success: !0, value: r.value, rawValue: e } : {
      success: !1,
      error: De.wrap({ value: e, cause: r.error }),
      rawValue: e
    };
  } catch (r) {
    return {
      success: !1,
      error: De.wrap({ value: e, cause: r }),
      rawValue: e
    };
  }
}
async function lu({
  text: e,
  schema: t
}) {
  try {
    const n = kr(e);
    return t == null ? n : Ta({ value: n, schema: t });
  } catch (n) {
    throw zt.isInstance(n) || De.isInstance(n) ? n : new zt({ text: e, cause: n });
  }
}
async function It({
  text: e,
  schema: t
}) {
  try {
    const n = kr(e);
    return t == null ? { success: !0, value: n, rawValue: n } : await ot({ value: n, schema: t });
  } catch (n) {
    return {
      success: !1,
      error: zt.isInstance(n) ? n : new zt({ text: e, cause: n }),
      rawValue: void 0
    };
  }
}
function ss(e) {
  try {
    return kr(e), !0;
  } catch {
    return !1;
  }
}
function Sr({
  stream: e,
  schema: t
}) {
  return e.pipeThrough(new TextDecoderStream()).pipeThrough(xa()).pipeThrough(
    new TransformStream({
      async transform({ data: n }, r) {
        n !== "[DONE]" && r.enqueue(await It({ text: n, schema: t }));
      }
    })
  );
}
async function qe({
  provider: e,
  providerOptions: t,
  schema: n
}) {
  if ((t == null ? void 0 : t[e]) == null)
    return;
  const r = await ot({
    value: t[e],
    schema: n
  });
  if (!r.success)
    throw new _r({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: r.error
    });
  return r.value;
}
var uu = () => globalThis.fetch, Ie = async ({
  url: e,
  headers: t,
  body: n,
  failedResponseHandler: r,
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}) => ka({
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
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}), cu = async ({
  url: e,
  headers: t,
  formData: n,
  failedResponseHandler: r,
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}) => ka({
  url: e,
  headers: t,
  body: {
    content: n,
    values: Object.fromEntries(n.entries())
  },
  failedResponseHandler: r,
  successfulResponseHandler: s,
  abortSignal: a,
  fetch: o
}), ka = async ({
  url: e,
  headers: t = {},
  body: n,
  successfulResponseHandler: r,
  failedResponseHandler: s,
  abortSignal: a,
  fetch: o = uu()
}) => {
  try {
    const i = await o(e, {
      method: "POST",
      headers: Xl(t),
      body: n.content,
      signal: a
    }), l = tn(i);
    if (!i.ok) {
      let u;
      try {
        u = await s({
          response: i,
          url: e,
          requestBodyValues: n.values
        });
      } catch (c) {
        throw cn(c) || $e.isInstance(c) ? c : new $e({
          message: "Failed to process error response",
          cause: c,
          statusCode: i.status,
          url: e,
          responseHeaders: l,
          requestBodyValues: n.values
        });
      }
      throw u.value;
    }
    try {
      return await r({
        response: i,
        url: e,
        requestBodyValues: n.values
      });
    } catch (u) {
      throw u instanceof Error && (cn(u) || $e.isInstance(u)) ? u : new $e({
        message: "Failed to process successful response",
        cause: u,
        statusCode: i.status,
        url: e,
        responseHeaders: l,
        requestBodyValues: n.values
      });
    }
  } catch (i) {
    if (cn(i))
      throw i;
    if (i instanceof TypeError && i.message === "fetch failed") {
      const l = i.cause;
      if (l != null)
        throw new $e({
          message: `Cannot connect to API: ${l.message}`,
          cause: l,
          url: e,
          requestBodyValues: n.values,
          isRetryable: !0
          // retry when network error
        });
    }
    throw i;
  }
};
async function Rn(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var jn = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: n
}) => async ({ response: r, url: s, requestBodyValues: a }) => {
  const o = await r.text(), i = tn(r);
  if (o.trim() === "")
    return {
      responseHeaders: i,
      value: new $e({
        message: r.statusText,
        url: s,
        requestBodyValues: a,
        statusCode: r.status,
        responseHeaders: i,
        responseBody: o,
        isRetryable: n == null ? void 0 : n(r)
      })
    };
  try {
    const l = await lu({
      text: o,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new $e({
        message: t(l),
        url: s,
        requestBodyValues: a,
        statusCode: r.status,
        responseHeaders: i,
        responseBody: o,
        data: l,
        isRetryable: n == null ? void 0 : n(r, l)
      })
    };
  } catch {
    return {
      responseHeaders: i,
      value: new $e({
        message: r.statusText,
        url: s,
        requestBodyValues: a,
        statusCode: r.status,
        responseHeaders: i,
        responseBody: o,
        isRetryable: n == null ? void 0 : n(r)
      })
    };
  }
}, Ut = (e) => async ({ response: t }) => {
  const n = tn(t);
  if (t.body == null)
    throw new ki({});
  return {
    responseHeaders: n,
    value: Sr({
      stream: t.body,
      schema: e
    })
  };
}, Fe = (e) => async ({ response: t, url: n, requestBodyValues: r }) => {
  const s = await t.text(), a = await It({
    text: s,
    schema: e
  }), o = tn(t);
  if (!a.success)
    throw new $e({
      message: "Invalid JSON response",
      cause: a.error,
      statusCode: t.status,
      responseHeaders: o,
      responseBody: s,
      url: n,
      requestBodyValues: r
    });
  return {
    responseHeaders: o,
    value: a.value,
    rawValue: a.rawValue
  };
}, du = () => async ({ response: e, url: t, requestBodyValues: n }) => {
  const r = tn(e);
  if (!e.body)
    throw new $e({
      message: "Response body is empty",
      url: t,
      requestBodyValues: n,
      statusCode: e.status,
      responseHeaders: r,
      responseBody: void 0
    });
  try {
    const s = await e.arrayBuffer();
    return {
      responseHeaders: r,
      value: new Uint8Array(s)
    };
  } catch (s) {
    throw new $e({
      message: "Failed to read response as array buffer",
      url: t,
      requestBodyValues: n,
      statusCode: e.status,
      responseHeaders: r,
      responseBody: void 0,
      cause: s
    });
  }
};
function pu(e, t) {
  var n;
  const r = (n = void 0) != null ? n : !1;
  return Ir(
    Wl(e, {
      $refStrategy: r ? "root" : "none",
      target: "jsonSchema7"
      // note: openai mode breaks various gemini conversions
    }),
    {
      validate: (s) => {
        const a = e.safeParse(s);
        return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
      }
    }
  );
}
var dr = Symbol.for("vercel.ai.schema");
function Ir(e, {
  validate: t
} = {}) {
  return {
    [dr]: !0,
    _type: void 0,
    // should never be used directly
    [Cn]: !0,
    jsonSchema: e,
    validate: t
  };
}
function hu(e) {
  return typeof e == "object" && e !== null && dr in e && e[dr] === !0 && "jsonSchema" in e && "validate" in e;
}
function Dt(e) {
  return e == null ? Ir({
    properties: {},
    additionalProperties: !1
  }) : hu(e) ? e : pu(e);
}
var { btoa: fu, atob: mu } = globalThis;
function Dn(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = mu(t);
  return Uint8Array.from(n, (r) => r.codePointAt(0));
}
function Sa(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += String.fromCodePoint(e[n]);
  return fu(t);
}
function vt(e) {
  return e instanceof Uint8Array ? Sa(e) : e;
}
function qn(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
var gu = f({
  type: C("error"),
  error: f({
    type: d(),
    message: d()
  })
}), as = jn({
  errorSchema: gu,
  errorToMessage: (e) => e.error.message
}), yu = f({
  /**
  Include reasoning content in requests sent to the model. Defaults to `true`.
  
  If you are experiencing issues with the model handling requests involving
    */
  sendReasoning: ue().optional(),
  thinking: f({
    type: se([C("enabled"), C("disabled")]),
    budgetTokens: T().optional()
  }).optional()
});
function vu({
  tools: e,
  toolChoice: t
}) {
  e = e != null && e.length ? e : void 0;
  const n = [], r = /* @__PURE__ */ new Set();
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: n, betas: r };
  const s = [];
  for (const o of e)
    switch (o.type) {
      case "function":
        s.push({
          name: o.name,
          description: o.description,
          input_schema: o.parameters
        });
        break;
      case "provider-defined":
        switch (o.id) {
          case "anthropic.computer_20250124":
            r.add("computer-use-2025-01-24"), s.push({
              name: o.name,
              type: "computer_20250124",
              display_width_px: o.args.displayWidthPx,
              display_height_px: o.args.displayHeightPx,
              display_number: o.args.displayNumber
            });
            break;
          case "anthropic.computer_20241022":
            r.add("computer-use-2024-10-22"), s.push({
              name: o.name,
              type: "computer_20241022",
              display_width_px: o.args.displayWidthPx,
              display_height_px: o.args.displayHeightPx,
              display_number: o.args.displayNumber
            });
            break;
          case "anthropic.text_editor_20250124":
            r.add("computer-use-2025-01-24"), s.push({
              name: o.name,
              type: "text_editor_20250124"
            });
            break;
          case "anthropic.text_editor_20241022":
            r.add("computer-use-2024-10-22"), s.push({
              name: o.name,
              type: "text_editor_20241022"
            });
            break;
          case "anthropic.bash_20250124":
            r.add("computer-use-2025-01-24"), s.push({
              name: o.name,
              type: "bash_20250124"
            });
            break;
          case "anthropic.bash_20241022":
            r.add("computer-use-2024-10-22"), s.push({
              name: o.name,
              type: "bash_20241022"
            });
            break;
          default:
            n.push({ type: "unsupported-tool", tool: o });
            break;
        }
        break;
      default:
        n.push({ type: "unsupported-tool", tool: o });
        break;
    }
  if (t == null)
    return {
      tools: s,
      toolChoice: void 0,
      toolWarnings: n,
      betas: r
    };
  const a = t.type;
  switch (a) {
    case "auto":
      return {
        tools: s,
        toolChoice: { type: "auto" },
        toolWarnings: n,
        betas: r
      };
    case "required":
      return {
        tools: s,
        toolChoice: { type: "any" },
        toolWarnings: n,
        betas: r
      };
    case "none":
      return { tools: void 0, toolChoice: void 0, toolWarnings: n, betas: r };
    case "tool":
      return {
        tools: s,
        toolChoice: { type: "tool", name: t.toolName },
        toolWarnings: n,
        betas: r
      };
    default: {
      const o = a;
      throw new he({
        functionality: `tool choice type: ${o}`
      });
    }
  }
}
async function _u({
  prompt: e,
  sendReasoning: t,
  warnings: n
}) {
  var r, s, a;
  const o = /* @__PURE__ */ new Set(), i = bu(e);
  let l;
  const u = [];
  function c(p) {
    var h;
    const g = p == null ? void 0 : p.anthropic;
    return (h = g == null ? void 0 : g.cacheControl) != null ? h : g == null ? void 0 : g.cache_control;
  }
  for (let p = 0; p < i.length; p++) {
    const h = i[p], g = p === i.length - 1, v = h.type;
    switch (v) {
      case "system": {
        if (l != null)
          throw new he({
            functionality: "Multiple system messages that are separated by user/assistant messages"
          });
        l = h.messages.map(({ content: y, providerOptions: m }) => ({
          type: "text",
          text: y,
          cache_control: c(m)
        }));
        break;
      }
      case "user": {
        const y = [];
        for (const m of h.messages) {
          const { role: b, content: S } = m;
          switch (b) {
            case "user": {
              for (let w = 0; w < S.length; w++) {
                const x = S[w], _ = w === S.length - 1, k = (r = c(x.providerOptions)) != null ? r : _ ? c(m.providerOptions) : void 0;
                switch (x.type) {
                  case "text": {
                    y.push({
                      type: "text",
                      text: x.text,
                      cache_control: k
                    });
                    break;
                  }
                  case "file": {
                    if (x.mediaType.startsWith("image/"))
                      y.push({
                        type: "image",
                        source: x.data instanceof URL ? {
                          type: "url",
                          url: x.data.toString()
                        } : {
                          type: "base64",
                          media_type: x.mediaType === "image/*" ? "image/jpeg" : x.mediaType,
                          data: vt(x.data)
                        },
                        cache_control: k
                      });
                    else if (x.mediaType === "application/pdf")
                      o.add("pdfs-2024-09-25"), y.push({
                        type: "document",
                        source: x.data instanceof URL ? {
                          type: "url",
                          url: x.data.toString()
                        } : {
                          type: "base64",
                          media_type: "application/pdf",
                          data: vt(x.data)
                        },
                        cache_control: k
                      });
                    else
                      throw new he({
                        functionality: `media type: ${x.mediaType}`
                      });
                    break;
                  }
                }
              }
              break;
            }
            case "tool": {
              for (let w = 0; w < S.length; w++) {
                const x = S[w], _ = w === S.length - 1, k = (s = c(x.providerOptions)) != null ? s : _ ? c(m.providerOptions) : void 0, O = x.content != null ? x.content.map((N) => {
                  var q;
                  switch (N.type) {
                    case "text":
                      return {
                        type: "text",
                        text: N.text,
                        cache_control: void 0
                      };
                    case "image":
                      return {
                        type: "image",
                        source: {
                          type: "base64",
                          media_type: (q = N.mediaType) != null ? q : "image/jpeg",
                          data: N.data
                        },
                        cache_control: void 0
                      };
                  }
                }) : JSON.stringify(x.result);
                y.push({
                  type: "tool_result",
                  tool_use_id: x.toolCallId,
                  content: O,
                  is_error: x.isError,
                  cache_control: k
                });
              }
              break;
            }
            default: {
              const w = b;
              throw new Error(`Unsupported role: ${w}`);
            }
          }
        }
        u.push({ role: "user", content: y });
        break;
      }
      case "assistant": {
        const y = [];
        for (let m = 0; m < h.messages.length; m++) {
          const b = h.messages[m], S = m === h.messages.length - 1, { content: w } = b;
          for (let x = 0; x < w.length; x++) {
            const _ = w[x], k = x === w.length - 1, O = (a = c(_.providerOptions)) != null ? a : k ? c(b.providerOptions) : void 0;
            switch (_.type) {
              case "text": {
                y.push({
                  type: "text",
                  text: (
                    // trim the last text part if it's the last message in the block
                    // because Anthropic does not allow trailing whitespace
                    // in pre-filled assistant responses
                    g && S && k ? _.text.trim() : _.text
                  ),
                  cache_control: O
                });
                break;
              }
              case "reasoning": {
                if (t) {
                  const N = await qe({
                    provider: "anthropic",
                    providerOptions: _.providerOptions,
                    schema: ku
                  });
                  N != null ? N.signature != null ? y.push({
                    type: "thinking",
                    thinking: _.text,
                    signature: N.signature,
                    cache_control: O
                  }) : N.redactedData != null ? y.push({
                    type: "redacted_thinking",
                    data: N.redactedData,
                    cache_control: O
                  }) : n.push({
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
                y.push({
                  type: "tool_use",
                  id: _.toolCallId,
                  name: _.toolName,
                  input: _.args,
                  cache_control: O
                });
                break;
              }
            }
          }
        }
        u.push({ role: "assistant", content: y });
        break;
      }
      default: {
        const y = v;
        throw new Error(`content type: ${y}`);
      }
    }
  }
  return {
    prompt: { system: l, messages: u },
    betas: o
  };
}
function bu(e) {
  const t = [];
  let n;
  for (const r of e) {
    const { role: s } = r;
    switch (s) {
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
        const a = s;
        throw new Error(`Unsupported role: ${a}`);
      }
    }
  }
  return t;
}
function os(e) {
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
var wu = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.modelId = e, this.config = t;
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
    maxOutputTokens: t = 4096,
    // 4096: max model output tokens TODO update default in v5
    temperature: n,
    topP: r,
    topK: s,
    frequencyPenalty: a,
    presencePenalty: o,
    stopSequences: i,
    responseFormat: l,
    seed: u,
    tools: c,
    toolChoice: p,
    providerOptions: h
  }) {
    var g, v, y;
    const m = [];
    a != null && m.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), o != null && m.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), u != null && m.push({
      type: "unsupported-setting",
      setting: "seed"
    }), l != null && l.type !== "text" && m.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const b = await qe({
      provider: "anthropic",
      providerOptions: h,
      schema: yu
    }), { prompt: S, betas: w } = await _u({
      prompt: e,
      sendReasoning: (g = b == null ? void 0 : b.sendReasoning) != null ? g : !0,
      warnings: m
    }), x = ((v = b == null ? void 0 : b.thinking) == null ? void 0 : v.type) === "enabled", _ = (y = b == null ? void 0 : b.thinking) == null ? void 0 : y.budgetTokens, k = {
      // model id:
      model: this.modelId,
      // standardized settings:
      max_tokens: t,
      temperature: n,
      top_k: s,
      top_p: r,
      stop_sequences: i,
      // provider specific settings:
      ...x && {
        thinking: { type: "enabled", budget_tokens: _ }
      },
      // prompt:
      system: S.system,
      messages: S.messages
    };
    if (x) {
      if (_ == null)
        throw new he({
          functionality: "thinking requires a budget"
        });
      k.temperature != null && (k.temperature = void 0, m.push({
        type: "unsupported-setting",
        setting: "temperature",
        details: "temperature is not supported when thinking is enabled"
      })), s != null && (k.top_k = void 0, m.push({
        type: "unsupported-setting",
        setting: "topK",
        details: "topK is not supported when thinking is enabled"
      })), r != null && (k.top_p = void 0, m.push({
        type: "unsupported-setting",
        setting: "topP",
        details: "topP is not supported when thinking is enabled"
      })), k.max_tokens = t + _;
    }
    const {
      tools: O,
      toolChoice: N,
      toolWarnings: q,
      betas: L
    } = vu({ tools: c, toolChoice: p });
    return {
      args: {
        ...k,
        tools: O,
        tool_choice: N
      },
      warnings: [...m, ...q],
      betas: /* @__PURE__ */ new Set([...w, ...L])
    };
  }
  async getHeaders({
    betas: e,
    headers: t
  }) {
    return Se(
      await Rn(this.config.headers),
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
  async doGenerate(e) {
    var t, n, r, s;
    const { args: a, warnings: o, betas: i } = await this.getArgs(e), {
      responseHeaders: l,
      value: u,
      rawValue: c
    } = await Ie({
      url: this.buildRequestUrl(!1),
      headers: await this.getHeaders({ betas: i, headers: e.headers }),
      body: this.transformRequestBody(a),
      failedResponseHandler: as,
      successfulResponseHandler: Fe(
        xu
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), p = [];
    for (const h of u.content)
      switch (h.type) {
        case "text": {
          p.push({ type: "text", text: h.text });
          break;
        }
        case "thinking": {
          p.push({
            type: "reasoning",
            text: h.thinking,
            providerMetadata: {
              anthropic: {
                signature: h.signature
              }
            }
          });
          break;
        }
        case "redacted_thinking": {
          p.push({
            type: "reasoning",
            text: "",
            providerMetadata: {
              anthropic: {
                redactedData: h.data
              }
            }
          });
          break;
        }
        case "tool_use": {
          p.push({
            type: "tool-call",
            toolCallType: "function",
            toolCallId: h.id,
            toolName: h.name,
            args: JSON.stringify(h.input)
          });
          break;
        }
      }
    return {
      content: p,
      finishReason: os(u.stop_reason),
      usage: {
        inputTokens: u.usage.input_tokens,
        outputTokens: u.usage.output_tokens,
        totalTokens: u.usage.input_tokens + u.usage.output_tokens,
        cachedInputTokens: (t = u.usage.cache_read_input_tokens) != null ? t : void 0
      },
      request: { body: a },
      response: {
        id: (n = u.id) != null ? n : void 0,
        modelId: (r = u.model) != null ? r : void 0,
        headers: l,
        body: c
      },
      warnings: o,
      providerMetadata: {
        anthropic: {
          cacheCreationInputTokens: (s = u.usage.cache_creation_input_tokens) != null ? s : null
        }
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: n, betas: r } = await this.getArgs(e), s = { ...t, stream: !0 }, { responseHeaders: a, value: o } = await Ie({
      url: this.buildRequestUrl(!0),
      headers: await this.getHeaders({ betas: r, headers: e.headers }),
      body: this.transformRequestBody(s),
      failedResponseHandler: as,
      successfulResponseHandler: Ut(
        Tu
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let i = "unknown";
    const l = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    }, u = {};
    let c, p;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          start(h) {
            h.enqueue({ type: "stream-start", warnings: n });
          },
          transform(h, g) {
            var v, y, m, b, S, w;
            if (!h.success) {
              g.enqueue({ type: "error", error: h.error });
              return;
            }
            const x = h.value;
            switch (x.type) {
              case "ping":
                return;
              case "content_block_start": {
                const _ = x.content_block.type;
                switch (p = _, _) {
                  case "text":
                  case "thinking":
                    return;
                  case "redacted_thinking": {
                    g.enqueue({
                      type: "reasoning",
                      text: "",
                      providerMetadata: {
                        anthropic: {
                          redactedData: x.content_block.data
                        }
                      }
                    }), g.enqueue({ type: "reasoning-part-finish" });
                    return;
                  }
                  case "tool_use": {
                    u[x.index] = {
                      toolCallId: x.content_block.id,
                      toolName: x.content_block.name,
                      jsonText: ""
                    };
                    return;
                  }
                  default: {
                    const k = _;
                    throw new Error(
                      `Unsupported content block type: ${k}`
                    );
                  }
                }
              }
              case "content_block_stop": {
                if (u[x.index] != null) {
                  const _ = u[x.index];
                  g.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: _.toolCallId,
                    toolName: _.toolName,
                    args: _.jsonText
                  }), delete u[x.index];
                }
                p = void 0;
                return;
              }
              case "content_block_delta": {
                const _ = x.delta.type;
                switch (_) {
                  case "text_delta": {
                    g.enqueue({
                      type: "text",
                      text: x.delta.text
                    });
                    return;
                  }
                  case "thinking_delta": {
                    g.enqueue({
                      type: "reasoning",
                      text: x.delta.thinking
                    });
                    return;
                  }
                  case "signature_delta": {
                    p === "thinking" && (g.enqueue({
                      type: "reasoning",
                      text: "",
                      providerMetadata: {
                        anthropic: {
                          signature: x.delta.signature
                        }
                      }
                    }), g.enqueue({ type: "reasoning-part-finish" }));
                    return;
                  }
                  case "input_json_delta": {
                    const k = u[x.index];
                    g.enqueue({
                      type: "tool-call-delta",
                      toolCallType: "function",
                      toolCallId: k.toolCallId,
                      toolName: k.toolName,
                      argsTextDelta: x.delta.partial_json
                    }), k.jsonText += x.delta.partial_json;
                    return;
                  }
                  default: {
                    const k = _;
                    throw new Error(
                      `Unsupported delta type: ${k}`
                    );
                  }
                }
              }
              case "message_start": {
                l.inputTokens = x.message.usage.input_tokens, l.cachedInputTokens = (v = x.message.usage.cache_read_input_tokens) != null ? v : void 0, c = {
                  anthropic: {
                    cacheCreationInputTokens: (y = x.message.usage.cache_creation_input_tokens) != null ? y : null
                  }
                }, g.enqueue({
                  type: "response-metadata",
                  id: (m = x.message.id) != null ? m : void 0,
                  modelId: (b = x.message.model) != null ? b : void 0
                });
                return;
              }
              case "message_delta": {
                l.outputTokens = x.usage.output_tokens, l.totalTokens = ((S = l.inputTokens) != null ? S : 0) + ((w = x.usage.output_tokens) != null ? w : 0), i = os(x.delta.stop_reason);
                return;
              }
              case "message_stop": {
                g.enqueue({
                  type: "finish",
                  finishReason: i,
                  usage: l,
                  providerMetadata: c
                });
                return;
              }
              case "error": {
                g.enqueue({ type: "error", error: x.error });
                return;
              }
              default: {
                const _ = x;
                throw new Error(`Unsupported chunk type: ${_}`);
              }
            }
          }
        })
      ),
      request: { body: s },
      response: { headers: a }
    };
  }
}, xu = f({
  type: C("message"),
  id: d().nullish(),
  model: d().nullish(),
  content: M(
    pt("type", [
      f({
        type: C("text"),
        text: d()
      }),
      f({
        type: C("thinking"),
        thinking: d(),
        signature: d()
      }),
      f({
        type: C("redacted_thinking"),
        data: d()
      }),
      f({
        type: C("tool_use"),
        id: d(),
        name: d(),
        input: Me()
      })
    ])
  ),
  stop_reason: d().nullish(),
  usage: f({
    input_tokens: T(),
    output_tokens: T(),
    cache_creation_input_tokens: T().nullish(),
    cache_read_input_tokens: T().nullish()
  })
}), Tu = pt("type", [
  f({
    type: C("message_start"),
    message: f({
      id: d().nullish(),
      model: d().nullish(),
      usage: f({
        input_tokens: T(),
        output_tokens: T(),
        cache_creation_input_tokens: T().nullish(),
        cache_read_input_tokens: T().nullish()
      })
    })
  }),
  f({
    type: C("content_block_start"),
    index: T(),
    content_block: pt("type", [
      f({
        type: C("text"),
        text: d()
      }),
      f({
        type: C("thinking"),
        thinking: d()
      }),
      f({
        type: C("tool_use"),
        id: d(),
        name: d()
      }),
      f({
        type: C("redacted_thinking"),
        data: d()
      })
    ])
  }),
  f({
    type: C("content_block_delta"),
    index: T(),
    delta: pt("type", [
      f({
        type: C("input_json_delta"),
        partial_json: d()
      }),
      f({
        type: C("text_delta"),
        text: d()
      }),
      f({
        type: C("thinking_delta"),
        thinking: d()
      }),
      f({
        type: C("signature_delta"),
        signature: d()
      })
    ])
  }),
  f({
    type: C("content_block_stop"),
    index: T()
  }),
  f({
    type: C("error"),
    error: f({
      type: d(),
      message: d()
    })
  }),
  f({
    type: C("message_delta"),
    delta: f({ stop_reason: d().nullish() }),
    usage: f({ output_tokens: T() })
  }),
  f({
    type: C("message_stop")
  }),
  f({
    type: C("ping")
  })
]), ku = f({
  signature: d().optional(),
  redactedData: d().optional()
}), Su = f({
  command: d(),
  restart: ue().optional()
});
function Iu(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20241022",
    args: {},
    parameters: Su,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Cu = f({
  command: d(),
  restart: ue().optional()
});
function Ru(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.bash_20250124",
    args: {},
    parameters: Cu,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Eu = f({
  command: Ce(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: d(),
  file_text: d().optional(),
  insert_line: T().int().optional(),
  new_str: d().optional(),
  old_str: d().optional(),
  view_range: M(T().int()).optional()
});
function Au(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20241022",
    args: {},
    parameters: Eu,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Ou = f({
  command: Ce(["view", "create", "str_replace", "insert", "undo_edit"]),
  path: d(),
  file_text: d().optional(),
  insert_line: T().int().optional(),
  new_str: d().optional(),
  old_str: d().optional(),
  view_range: M(T().int()).optional()
});
function Mu(e = {}) {
  return {
    type: "provider-defined",
    id: "anthropic.text_editor_20250124",
    args: {},
    parameters: Ou,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Nu = f({
  action: Ce([
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
  coordinate: M(T().int()).optional(),
  text: d().optional()
});
function Pu(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20241022",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: Nu,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var $u = f({
  action: Ce([
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
  coordinate: ts([T().int(), T().int()]).optional(),
  duration: T().optional(),
  scroll_amount: T().optional(),
  scroll_direction: Ce(["up", "down", "left", "right"]).optional(),
  start_coordinate: ts([T().int(), T().int()]).optional(),
  text: d().optional()
});
function ju(e) {
  return {
    type: "provider-defined",
    id: "anthropic.computer_20250124",
    args: {
      displayWidthPx: e.displayWidthPx,
      displayHeightPx: e.displayHeightPx,
      displayNumber: e.displayNumber
    },
    parameters: $u,
    execute: e.execute,
    experimental_toToolResultContent: e.experimental_toToolResultContent
  };
}
var Du = {
  bash_20241022: Iu,
  bash_20250124: Ru,
  textEditor_20241022: Au,
  textEditor_20250124: Mu,
  computer_20241022: Pu,
  computer_20250124: ju
};
function qu(e = {}) {
  var t;
  const n = (t = qn(e.baseURL)) != null ? t : "https://api.anthropic.com/v1", r = () => ({
    "anthropic-version": "2023-06-01",
    "x-api-key": $n({
      apiKey: e.apiKey,
      environmentVariableName: "ANTHROPIC_API_KEY",
      description: "Anthropic"
    }),
    ...e.headers
  }), s = (o) => new wu(o, {
    provider: "anthropic.messages",
    baseURL: n,
    headers: r,
    fetch: e.fetch,
    supportedUrls: () => ({
      "image/*": [/^https?:\/\/.*$/]
    })
  }), a = function(o) {
    if (new.target)
      throw new Error(
        "The Anthropic model function cannot be called with the new keyword."
      );
    return s(o);
  };
  return a.languageModel = s, a.chat = s, a.messages = s, a.textEmbeddingModel = (o) => {
    throw new je({ modelId: o, modelType: "textEmbeddingModel" });
  }, a.imageModel = (o) => {
    throw new je({ modelId: o, modelType: "imageModel" });
  }, a.tools = Du, a;
}
qu();
var Uu = f({
  error: f({
    code: T().nullable(),
    message: d(),
    status: d()
  })
}), pr = jn({
  errorSchema: Uu,
  errorToMessage: (e) => e.error.message
}), Lu = f({
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
  taskType: Ce([
    "SEMANTIC_SIMILARITY",
    "CLASSIFICATION",
    "CLUSTERING",
    "RETRIEVAL_DOCUMENT",
    "RETRIEVAL_QUERY",
    "QUESTION_ANSWERING",
    "FACT_VERIFICATION",
    "CODE_RETRIEVAL_QUERY"
  ]).optional()
}), Zu = class {
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
    const s = await qe({
      provider: "google",
      providerOptions: r,
      schema: Lu
    });
    if (e.length > this.maxEmbeddingsPerCall)
      throw new br({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const a = Se(
      await Rn(this.config.headers),
      t
    ), {
      responseHeaders: o,
      value: i,
      rawValue: l
    } = await Ie({
      url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
      headers: a,
      body: {
        requests: e.map((u) => ({
          model: `models/${this.modelId}`,
          content: { role: "user", parts: [{ text: u }] },
          outputDimensionality: s == null ? void 0 : s.outputDimensionality,
          taskType: s == null ? void 0 : s.taskType
        }))
      },
      failedResponseHandler: pr,
      successfulResponseHandler: Fe(
        Vu
      ),
      abortSignal: n,
      fetch: this.config.fetch
    });
    return {
      embeddings: i.embeddings.map((u) => u.values),
      usage: void 0,
      response: { headers: o, body: l }
    };
  }
}, Vu = f({
  embeddings: M(f({ values: M(T()) }))
});
function He(e) {
  if (e == null || Bu(e))
    return;
  if (typeof e == "boolean")
    return { type: "boolean", properties: {} };
  const {
    type: t,
    description: n,
    required: r,
    properties: s,
    items: a,
    allOf: o,
    anyOf: i,
    oneOf: l,
    format: u,
    const: c,
    minLength: p,
    enum: h
  } = e, g = {};
  if (n && (g.description = n), r && (g.required = r), u && (g.format = u), c !== void 0 && (g.enum = [c]), t && (Array.isArray(t) ? t.includes("null") ? (g.type = t.filter((v) => v !== "null")[0], g.nullable = !0) : g.type = t : t === "null" ? g.type = "null" : g.type = t), h !== void 0 && (g.enum = h), s != null && (g.properties = Object.entries(s).reduce(
    (v, [y, m]) => (v[y] = He(m), v),
    {}
  )), a && (g.items = Array.isArray(a) ? a.map(He) : He(a)), o && (g.allOf = o.map(He)), i)
    if (i.some(
      (v) => typeof v == "object" && (v == null ? void 0 : v.type) === "null"
    )) {
      const v = i.filter(
        (y) => !(typeof y == "object" && (y == null ? void 0 : y.type) === "null")
      );
      if (v.length === 1) {
        const y = He(v[0]);
        typeof y == "object" && (g.nullable = !0, Object.assign(g, y));
      } else
        g.anyOf = v.map(He), g.nullable = !0;
    } else
      g.anyOf = i.map(He);
  return l && (g.oneOf = l.map(He)), p !== void 0 && (g.minLength = p), g;
}
function Bu(e) {
  return e != null && typeof e == "object" && e.type === "object" && (e.properties == null || Object.keys(e.properties).length === 0);
}
function Fu(e) {
  const t = [], n = [];
  let r = !0;
  for (const { role: s, content: a } of e)
    switch (s) {
      case "system": {
        if (!r)
          throw new he({
            functionality: "system messages are only supported at the beginning of the conversation"
          });
        t.push({ text: a });
        break;
      }
      case "user": {
        r = !1;
        const o = [];
        for (const i of a)
          switch (i.type) {
            case "text": {
              o.push({ text: i.text });
              break;
            }
            case "file": {
              const l = i.mediaType === "image/*" ? "image/jpeg" : i.mediaType;
              o.push(
                i.data instanceof URL ? {
                  fileData: {
                    mimeType: l,
                    fileUri: i.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: l,
                    data: vt(i.data)
                  }
                }
              );
              break;
            }
          }
        n.push({ role: "user", parts: o });
        break;
      }
      case "assistant": {
        r = !1, n.push({
          role: "model",
          parts: a.map((o) => {
            switch (o.type) {
              case "text":
                return o.text.length === 0 ? void 0 : { text: o.text };
              case "file": {
                if (o.mediaType !== "image/png")
                  throw new he({
                    functionality: "Only PNG images are supported in assistant messages"
                  });
                if (o.data instanceof URL)
                  throw new he({
                    functionality: "File data URLs in assistant messages are not supported"
                  });
                return {
                  inlineData: {
                    mimeType: o.mediaType,
                    data: vt(o.data)
                  }
                };
              }
              case "tool-call":
                return {
                  functionCall: {
                    name: o.toolName,
                    args: o.args
                  }
                };
            }
          }).filter((o) => o !== void 0)
        });
        break;
      }
      case "tool": {
        r = !1, n.push({
          role: "user",
          parts: a.map((o) => ({
            functionResponse: {
              name: o.toolName,
              response: {
                name: o.toolName,
                content: o.result
              }
            }
          }))
        });
        break;
      }
    }
  return {
    systemInstruction: t.length > 0 ? { parts: t } : void 0,
    contents: n
  };
}
function is(e) {
  return e.includes("/") ? e : `models/${e}`;
}
var Gu = f({
  /**
   * The mode of the predictor to be used in dynamic retrieval.
   */
  mode: Ce(["MODE_UNSPECIFIED", "MODE_DYNAMIC"]).optional(),
  /**
   * The threshold to be used in dynamic retrieval. If not set, a system default
   * value is used.
   */
  dynamicThreshold: T().optional()
}), Ju = f({
  responseModalities: M(Ce(["TEXT", "IMAGE"])).optional(),
  thinkingConfig: f({
    thinkingBudget: T().optional()
  }).optional(),
  /**
  Optional.
  The name of the cached content used as context to serve the prediction.
  Format: cachedContents/{cachedContent}
     */
  cachedContent: d().optional(),
  /**
   * Optional. Enable structured output. Default is true.
   *
   * This is useful when the JSON Schema contains elements that are
   * not supported by the OpenAPI schema version that
   * Google Generative AI uses. You can use this to disable
   * structured outputs if you need to.
   */
  structuredOutputs: ue().optional(),
  /**
  Optional. A list of unique safety settings for blocking unsafe content.
   */
  safetySettings: M(
    f({
      category: Ce([
        "HARM_CATEGORY_UNSPECIFIED",
        "HARM_CATEGORY_HATE_SPEECH",
        "HARM_CATEGORY_DANGEROUS_CONTENT",
        "HARM_CATEGORY_HARASSMENT",
        "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "HARM_CATEGORY_CIVIC_INTEGRITY"
      ]),
      threshold: Ce([
        "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
        "BLOCK_LOW_AND_ABOVE",
        "BLOCK_MEDIUM_AND_ABOVE",
        "BLOCK_ONLY_HIGH",
        "BLOCK_NONE",
        "OFF"
      ])
    })
  ).optional(),
  threshold: Ce([
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
  audioTimestamp: ue().optional(),
  /**
  Optional. When enabled, the model will use Google search to ground the response.
  
  @see https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview
   */
  useSearchGrounding: ue().optional(),
  /**
  Optional. Specifies the dynamic retrieval configuration.
  
  @note Dynamic retrieval is only compatible with Gemini 1.5 Flash.
  
  @see https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/ground-with-google-search#dynamic-retrieval
   */
  dynamicRetrievalConfig: Gu.optional()
});
function Hu({
  tools: e,
  toolChoice: t,
  useSearchGrounding: n,
  dynamicRetrievalConfig: r,
  modelId: s
}) {
  var a;
  e = e != null && e.length ? e : void 0;
  const o = [], i = s.includes("gemini-2"), l = s.includes("gemini-1.5-flash") && !s.includes("-8b");
  if (n)
    return {
      tools: i ? { googleSearch: {} } : {
        googleSearchRetrieval: !l || !r ? {} : { dynamicRetrievalConfig: r }
      },
      toolConfig: void 0,
      toolWarnings: o
    };
  if (e == null)
    return { tools: void 0, toolConfig: void 0, toolWarnings: o };
  const u = [];
  for (const p of e)
    p.type === "provider-defined" ? o.push({ type: "unsupported-tool", tool: p }) : u.push({
      name: p.name,
      description: (a = p.description) != null ? a : "",
      parameters: He(p.parameters)
    });
  if (t == null)
    return {
      tools: { functionDeclarations: u },
      toolConfig: void 0,
      toolWarnings: o
    };
  const c = t.type;
  switch (c) {
    case "auto":
      return {
        tools: { functionDeclarations: u },
        toolConfig: { functionCallingConfig: { mode: "AUTO" } },
        toolWarnings: o
      };
    case "none":
      return {
        tools: { functionDeclarations: u },
        toolConfig: { functionCallingConfig: { mode: "NONE" } },
        toolWarnings: o
      };
    case "required":
      return {
        tools: { functionDeclarations: u },
        toolConfig: { functionCallingConfig: { mode: "ANY" } },
        toolWarnings: o
      };
    case "tool":
      return {
        tools: { functionDeclarations: u },
        toolConfig: {
          functionCallingConfig: {
            mode: "ANY",
            allowedFunctionNames: [t.toolName]
          }
        },
        toolWarnings: o
      };
    default: {
      const p = c;
      throw new he({
        functionality: `tool choice type: ${p}`
      });
    }
  }
}
function ls({
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
var zu = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.modelId = e, this.config = t;
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
    topK: s,
    frequencyPenalty: a,
    presencePenalty: o,
    stopSequences: i,
    responseFormat: l,
    seed: u,
    tools: c,
    toolChoice: p,
    providerOptions: h
  }) {
    var g, v;
    const y = [], m = await qe({
      provider: "google",
      providerOptions: h,
      schema: Ju
    }), { contents: b, systemInstruction: S } = Fu(e), {
      tools: w,
      toolConfig: x,
      toolWarnings: _
    } = Hu({
      tools: c,
      toolChoice: p,
      useSearchGrounding: (g = m == null ? void 0 : m.useSearchGrounding) != null ? g : !1,
      dynamicRetrievalConfig: m == null ? void 0 : m.dynamicRetrievalConfig,
      modelId: this.modelId
    });
    return {
      args: {
        generationConfig: {
          // standardized settings:
          maxOutputTokens: t,
          temperature: n,
          topK: s,
          topP: r,
          frequencyPenalty: a,
          presencePenalty: o,
          stopSequences: i,
          seed: u,
          // response format:
          responseMimeType: (l == null ? void 0 : l.type) === "json" ? "application/json" : void 0,
          responseSchema: (l == null ? void 0 : l.type) === "json" && l.schema != null && // Google GenAI does not support all OpenAPI Schema features,
          // so this is needed as an escape hatch:
          // TODO convert into provider option
          ((v = m == null ? void 0 : m.structuredOutputs) == null || v) ? He(l.schema) : void 0,
          ...(m == null ? void 0 : m.audioTimestamp) && {
            audioTimestamp: m.audioTimestamp
          },
          // provider options:
          responseModalities: m == null ? void 0 : m.responseModalities,
          thinkingConfig: m == null ? void 0 : m.thinkingConfig
        },
        contents: b,
        systemInstruction: S,
        safetySettings: m == null ? void 0 : m.safetySettings,
        tools: w,
        toolConfig: x,
        cachedContent: m == null ? void 0 : m.cachedContent
      },
      warnings: [...y, ..._]
    };
  }
  async doGenerate(e) {
    var t, n, r, s, a, o, i, l, u;
    const { args: c, warnings: p } = await this.getArgs(e), h = JSON.stringify(c), g = Se(
      await Rn(this.config.headers),
      e.headers
    ), {
      responseHeaders: v,
      value: y,
      rawValue: m
    } = await Ie({
      url: `${this.config.baseURL}/${is(
        this.modelId
      )}:generateContent`,
      headers: g,
      body: c,
      failedResponseHandler: pr,
      successfulResponseHandler: Fe(Qu),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), b = y.candidates[0], S = [], w = b.content == null || typeof b.content != "object" || !("parts" in b.content) ? [] : (t = b.content.parts) != null ? t : [];
    for (const k of w)
      "text" in k && k.text.length > 0 ? S.push({ type: "text", text: k.text }) : "functionCall" in k ? S.push({
        type: "tool-call",
        toolCallType: "function",
        toolCallId: this.config.generateId(),
        toolName: k.functionCall.name,
        args: JSON.stringify(k.functionCall.args)
      }) : "inlineData" in k && S.push({
        type: "file",
        data: k.inlineData.data,
        mediaType: k.inlineData.mimeType
      });
    const x = (n = us({
      groundingMetadata: b.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? n : [];
    for (const k of x)
      S.push(k);
    const _ = y.usageMetadata;
    return {
      content: S,
      finishReason: ls({
        finishReason: b.finishReason,
        hasToolCalls: S.some((k) => k.type === "tool-call")
      }),
      usage: {
        inputTokens: (r = _ == null ? void 0 : _.promptTokenCount) != null ? r : void 0,
        outputTokens: (s = _ == null ? void 0 : _.candidatesTokenCount) != null ? s : void 0,
        totalTokens: (a = _ == null ? void 0 : _.totalTokenCount) != null ? a : void 0,
        reasoningTokens: (o = _ == null ? void 0 : _.thoughtsTokenCount) != null ? o : void 0,
        cachedInputTokens: (i = _ == null ? void 0 : _.cachedContentTokenCount) != null ? i : void 0
      },
      warnings: p,
      providerMetadata: {
        google: {
          groundingMetadata: (l = b.groundingMetadata) != null ? l : null,
          safetyRatings: (u = b.safetyRatings) != null ? u : null
        }
      },
      request: { body: h },
      response: {
        // TODO timestamp, model id, id
        headers: v,
        body: m
      }
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = JSON.stringify(t), s = Se(
      await Rn(this.config.headers),
      e.headers
    ), { responseHeaders: a, value: o } = await Ie({
      url: `${this.config.baseURL}/${is(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers: s,
      body: t,
      failedResponseHandler: pr,
      successfulResponseHandler: Ut(ec),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let i = "unknown";
    const l = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let u;
    const c = this.config.generateId;
    let p = !1;
    return {
      stream: o.pipeThrough(
        new TransformStream({
          start(h) {
            h.enqueue({ type: "stream-start", warnings: n });
          },
          transform(h, g) {
            var v, y, m, b, S, w, x, _, k;
            if (!h.success) {
              g.enqueue({ type: "error", error: h.error });
              return;
            }
            const O = h.value, N = O.usageMetadata;
            N != null && (l.inputTokens = (v = N.promptTokenCount) != null ? v : void 0, l.outputTokens = (y = N.candidatesTokenCount) != null ? y : void 0, l.totalTokens = (m = N.totalTokenCount) != null ? m : void 0, l.reasoningTokens = (b = N.thoughtsTokenCount) != null ? b : void 0, l.cachedInputTokens = (S = N.cachedContentTokenCount) != null ? S : void 0);
            const q = (w = O.candidates) == null ? void 0 : w[0];
            if (q == null)
              return;
            const L = q.content;
            if (L != null) {
              const ee = Yu(L.parts);
              ee != null && g.enqueue(ee);
              const ae = Ku(L.parts);
              if (ae != null)
                for (const ce of ae)
                  g.enqueue({
                    type: "file",
                    mediaType: ce.inlineData.mimeType,
                    data: ce.inlineData.data
                  });
              const fe = Wu({
                parts: L.parts,
                generateId: c
              });
              if (fe != null)
                for (const ce of fe)
                  g.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: ce.toolCallId,
                    toolName: ce.toolName,
                    argsTextDelta: ce.args
                  }), g.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: ce.toolCallId,
                    toolName: ce.toolName,
                    args: ce.args
                  }), p = !0;
            }
            if (q.finishReason != null) {
              i = ls({
                finishReason: q.finishReason,
                hasToolCalls: p
              });
              const ee = (x = us({
                groundingMetadata: q.groundingMetadata,
                generateId: c
              })) != null ? x : [];
              for (const ae of ee)
                g.enqueue(ae);
              u = {
                google: {
                  groundingMetadata: (_ = q.groundingMetadata) != null ? _ : null,
                  safetyRatings: (k = q.safetyRatings) != null ? k : null
                }
              };
            }
          },
          flush(h) {
            h.enqueue({
              type: "finish",
              finishReason: i,
              usage: l,
              providerMetadata: u
            });
          }
        })
      ),
      response: { headers: a },
      request: { body: r }
    };
  }
};
function Wu({
  parts: e,
  generateId: t
}) {
  const n = e == null ? void 0 : e.filter(
    (r) => "functionCall" in r
  );
  return n == null || n.length === 0 ? void 0 : n.map((r) => ({
    type: "tool-call",
    toolCallType: "function",
    toolCallId: t(),
    toolName: r.functionCall.name,
    args: JSON.stringify(r.functionCall.args)
  }));
}
function Yu(e) {
  const t = e == null ? void 0 : e.filter((n) => "text" in n);
  return t == null || t.length === 0 ? void 0 : {
    type: "text",
    text: t.map((n) => n.text).join("")
  };
}
function Ku(e) {
  return e == null ? void 0 : e.filter(
    (t) => "inlineData" in t
  );
}
function us({
  groundingMetadata: e,
  generateId: t
}) {
  var n;
  return (n = e == null ? void 0 : e.groundingChunks) == null ? void 0 : n.filter(
    (r) => r.web != null
  ).map((r) => ({
    type: "source",
    sourceType: "url",
    id: t(),
    url: r.web.uri,
    title: r.web.title
  }));
}
var Ia = f({
  role: d(),
  parts: M(
    se([
      f({
        text: d()
      }),
      f({
        functionCall: f({
          name: d(),
          args: Me()
        })
      }),
      f({
        inlineData: f({
          mimeType: d(),
          data: d()
        })
      })
    ])
  ).nullish()
}), Xu = f({
  web: f({ uri: d(), title: d() }).nullish(),
  retrievedContext: f({ uri: d(), title: d() }).nullish()
}), Ca = f({
  webSearchQueries: M(d()).nullish(),
  retrievalQueries: M(d()).nullish(),
  searchEntryPoint: f({ renderedContent: d() }).nullish(),
  groundingChunks: M(Xu).nullish(),
  groundingSupports: M(
    f({
      segment: f({
        startIndex: T().nullish(),
        endIndex: T().nullish(),
        text: d().nullish()
      }),
      segment_text: d().nullish(),
      groundingChunkIndices: M(T()).nullish(),
      supportChunkIndices: M(T()).nullish(),
      confidenceScores: M(T()).nullish(),
      confidenceScore: M(T()).nullish()
    })
  ).nullish(),
  retrievalMetadata: se([
    f({
      webDynamicRetrievalScore: T()
    }),
    f({})
  ]).nullish()
}), Ra = f({
  category: d().nullish(),
  probability: d().nullish(),
  probabilityScore: T().nullish(),
  severity: d().nullish(),
  severityScore: T().nullish(),
  blocked: ue().nullish()
}), Ea = f({
  cachedContentTokenCount: T().nullish(),
  thoughtsTokenCount: T().nullish(),
  promptTokenCount: T().nullish(),
  candidatesTokenCount: T().nullish(),
  totalTokenCount: T().nullish()
}), Qu = f({
  candidates: M(
    f({
      content: Ia.nullish().or(f({}).strict()),
      finishReason: d().nullish(),
      safetyRatings: M(Ra).nullish(),
      groundingMetadata: Ca.nullish()
    })
  ),
  usageMetadata: Ea.nullish()
}), ec = f({
  candidates: M(
    f({
      content: Ia.nullish(),
      finishReason: d().nullish(),
      safetyRatings: M(Ra).nullish(),
      groundingMetadata: Ca.nullish()
    })
  ).nullish(),
  usageMetadata: Ea.nullish()
});
function tc(e = {}) {
  var t;
  const n = (t = qn(e.baseURL)) != null ? t : "https://generativelanguage.googleapis.com/v1beta", r = () => ({
    "x-goog-api-key": $n({
      apiKey: e.apiKey,
      environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
      description: "Google Generative AI"
    }),
    ...e.headers
  }), s = (i) => {
    var l;
    return new zu(i, {
      provider: "google.generative-ai",
      baseURL: n,
      headers: r,
      generateId: (l = e.generateId) != null ? l : st,
      supportedUrls: () => ({
        "*": [
          // HTTP URLs:
          /^https?:\/\/.*$/
        ]
      }),
      fetch: e.fetch
    });
  }, a = (i) => new Zu(i, {
    provider: "google.generative-ai",
    baseURL: n,
    headers: r,
    fetch: e.fetch
  }), o = function(i) {
    if (new.target)
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    return s(i);
  };
  return o.languageModel = s, o.chat = s, o.generativeAI = s, o.embedding = a, o.textEmbedding = a, o.textEmbeddingModel = a, o.imageModel = (i) => {
    throw new je({ modelId: i, modelType: "imageModel" });
  }, o;
}
tc();
function nc(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { role: r, content: s } = e[n], a = n === e.length - 1;
    switch (r) {
      case "system": {
        t.push({ role: "system", content: s });
        break;
      }
      case "user": {
        t.push({
          role: "user",
          content: s.map((o) => {
            switch (o.type) {
              case "text":
                return { type: "text", text: o.text };
              case "file":
                if (o.mediaType.startsWith("image/")) {
                  const i = o.mediaType === "image/*" ? "image/jpeg" : o.mediaType;
                  return {
                    type: "image_url",
                    image_url: o.data instanceof URL ? o.data.toString() : `data:${i};base64,${o.data}`
                  };
                } else {
                  if (o.mediaType === "application/pdf")
                    return {
                      type: "document_url",
                      document_url: o.data.toString()
                    };
                  throw new he({
                    functionality: "Only images and PDF file parts are supported"
                  });
                }
            }
          })
        });
        break;
      }
      case "assistant": {
        let o = "";
        const i = [];
        for (const l of s)
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
          prefix: a ? !0 : void 0,
          tool_calls: i.length > 0 ? i : void 0
        });
        break;
      }
      case "tool": {
        for (const o of s)
          t.push({
            role: "tool",
            name: o.toolName,
            content: JSON.stringify(o.result),
            tool_call_id: o.toolCallId
          });
        break;
      }
      default: {
        const o = r;
        throw new Error(`Unsupported role: ${o}`);
      }
    }
  }
  return t;
}
function cs({
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
function ds(e) {
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
var rc = f({
  /**
  Whether to inject a safety prompt before all conversations.
  
  Defaults to `false`.
     */
  safePrompt: ue().optional(),
  documentImageLimit: T().optional(),
  documentPageLimit: T().optional()
}), sc = f({
  object: C("error"),
  message: d(),
  type: d(),
  param: d().nullable(),
  code: d().nullable()
}), hr = jn({
  errorSchema: sc,
  errorToMessage: (e) => e.message
});
function ac({
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
        parameters: a.parameters
      }
    });
  if (t == null)
    return { tools: r, toolChoice: void 0, toolWarnings: n };
  const s = t.type;
  switch (s) {
    case "auto":
    case "none":
      return { tools: r, toolChoice: s, toolWarnings: n };
    case "required":
      return { tools: r, toolChoice: "any", toolWarnings: n };
    case "tool":
      return {
        tools: r.filter(
          (a) => a.function.name === t.toolName
        ),
        toolChoice: "any",
        toolWarnings: n
      };
    default: {
      const a = s;
      throw new he({
        functionality: `tool choice type: ${a}`
      });
    }
  }
}
var oc = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      "application/pdf": [/^https:\/\/.*$/]
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
    topK: s,
    frequencyPenalty: a,
    presencePenalty: o,
    stopSequences: i,
    responseFormat: l,
    seed: u,
    providerOptions: c,
    tools: p,
    toolChoice: h
  }) {
    var g;
    const v = [], y = (g = await qe({
      provider: "mistral",
      providerOptions: c,
      schema: rc
    })) != null ? g : {};
    s != null && v.push({
      type: "unsupported-setting",
      setting: "topK"
    }), a != null && v.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), o != null && v.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), i != null && v.push({
      type: "unsupported-setting",
      setting: "stopSequences"
    }), l != null && l.type === "json" && l.schema != null && v.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is not supported"
    });
    const m = {
      // model id:
      model: this.modelId,
      // model specific settings:
      safe_prompt: y.safePrompt,
      // standardized settings:
      max_tokens: t,
      temperature: n,
      top_p: r,
      random_seed: u,
      // response format:
      response_format: (l == null ? void 0 : l.type) === "json" ? { type: "json_object" } : void 0,
      // mistral-specific provider options:
      document_image_limit: y.documentImageLimit,
      document_page_limit: y.documentPageLimit,
      // messages:
      messages: nc(e)
    }, {
      tools: b,
      toolChoice: S,
      toolWarnings: w
    } = ac({
      tools: p,
      toolChoice: h
    });
    return {
      args: {
        ...m,
        tools: b,
        tool_choice: S
      },
      warnings: [...v, ...w]
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: n } = await this.getArgs(e), {
      responseHeaders: r,
      value: s,
      rawValue: a
    } = await Ie({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Se(this.config.headers(), e.headers),
      body: t,
      failedResponseHandler: hr,
      successfulResponseHandler: Fe(
        ic
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), o = s.choices[0], i = [];
    let l = ps(o.message.content);
    const u = t.messages[t.messages.length - 1];
    if (u.role === "assistant" && (l != null && l.startsWith(u.content)) && (l = l.slice(u.content.length)), l != null && l.length > 0 && i.push({ type: "text", text: l }), o.message.tool_calls != null)
      for (const c of o.message.tool_calls)
        i.push({
          type: "tool-call",
          toolCallType: "function",
          toolCallId: c.id,
          toolName: c.function.name,
          args: c.function.arguments
        });
    return {
      content: i,
      finishReason: ds(o.finish_reason),
      usage: {
        inputTokens: s.usage.prompt_tokens,
        outputTokens: s.usage.completion_tokens,
        totalTokens: s.usage.total_tokens
      },
      request: { body: t },
      response: {
        ...cs(s),
        headers: r,
        body: a
      },
      warnings: n
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = { ...t, stream: !0 }, { responseHeaders: s, value: a } = await Ie({
      url: `${this.config.baseURL}/chat/completions`,
      headers: Se(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: hr,
      successfulResponseHandler: Ut(
        lc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let o = "unknown";
    const i = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let l = 0, u = !1;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(c) {
            c.enqueue({ type: "stream-start", warnings: n });
          },
          transform(c, p) {
            if (!c.success) {
              p.enqueue({ type: "error", error: c.error });
              return;
            }
            l++;
            const h = c.value;
            l === 1 && p.enqueue({
              type: "response-metadata",
              ...cs(h)
            }), h.usage != null && (i.inputTokens = h.usage.prompt_tokens, i.outputTokens = h.usage.completion_tokens, i.totalTokens = h.usage.total_tokens);
            const g = h.choices[0];
            if ((g == null ? void 0 : g.finish_reason) != null && (o = ds(g.finish_reason)), (g == null ? void 0 : g.delta) == null)
              return;
            const v = g.delta, y = ps(v.content);
            if (l <= 2) {
              const m = r.messages[r.messages.length - 1];
              if (m.role === "assistant" && y === m.content.trimEnd()) {
                y.length < m.content.length && (u = !0);
                return;
              }
            }
            if (y != null && (p.enqueue({
              type: "text",
              text: u ? y.trimStart() : y
            }), u = !1), v.tool_calls != null)
              for (const m of v.tool_calls)
                p.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: m.id,
                  toolName: m.function.name,
                  argsTextDelta: m.function.arguments
                }), p.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: m.id,
                  toolName: m.function.name,
                  args: m.function.arguments
                });
          },
          flush(c) {
            c.enqueue({ type: "finish", finishReason: o, usage: i });
          }
        })
      ),
      request: { body: r },
      response: { headers: s }
    };
  }
};
function ps(e) {
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
      case "image_url":
      case "reference":
        break;
      default: {
        const s = r;
        throw new Error(`Unsupported type: ${s}`);
      }
    }
  }
  return t.length ? t.join("") : void 0;
}
var Aa = se([
  d(),
  M(
    pt("type", [
      f({
        type: C("text"),
        text: d()
      }),
      f({
        type: C("image_url"),
        image_url: se([
          d(),
          f({
            url: d(),
            detail: d().nullable()
          })
        ])
      }),
      f({
        type: C("reference"),
        reference_ids: M(T())
      })
    ])
  )
]).nullish(), Oa = f({
  prompt_tokens: T(),
  completion_tokens: T(),
  total_tokens: T()
}), ic = f({
  id: d().nullish(),
  created: T().nullish(),
  model: d().nullish(),
  choices: M(
    f({
      message: f({
        role: C("assistant"),
        content: Aa,
        tool_calls: M(
          f({
            id: d(),
            function: f({ name: d(), arguments: d() })
          })
        ).nullish()
      }),
      index: T(),
      finish_reason: d().nullish()
    })
  ),
  object: C("chat.completion"),
  usage: Oa
}), lc = f({
  id: d().nullish(),
  created: T().nullish(),
  model: d().nullish(),
  choices: M(
    f({
      delta: f({
        role: Ce(["assistant"]).optional(),
        content: Aa,
        tool_calls: M(
          f({
            id: d(),
            function: f({ name: d(), arguments: d() })
          })
        ).nullish()
      }),
      finish_reason: d().nullish(),
      index: T()
    })
  ),
  usage: Oa.nullish()
}), uc = class {
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
      throw new br({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const {
      responseHeaders: r,
      value: s,
      rawValue: a
    } = await Ie({
      url: `${this.config.baseURL}/embeddings`,
      headers: Se(this.config.headers(), n),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float"
      },
      failedResponseHandler: hr,
      successfulResponseHandler: Fe(
        cc
      ),
      abortSignal: t,
      fetch: this.config.fetch
    });
    return {
      embeddings: s.data.map((o) => o.embedding),
      usage: s.usage ? { tokens: s.usage.prompt_tokens } : void 0,
      response: { headers: r, body: a }
    };
  }
}, cc = f({
  data: M(f({ embedding: M(T()) })),
  usage: f({ prompt_tokens: T() }).nullish()
});
function dc(e = {}) {
  var t;
  const n = (t = qn(e.baseURL)) != null ? t : "https://api.mistral.ai/v1", r = () => ({
    Authorization: `Bearer ${$n({
      apiKey: e.apiKey,
      environmentVariableName: "MISTRAL_API_KEY",
      description: "Mistral"
    })}`,
    ...e.headers
  }), s = (i) => new oc(i, {
    provider: "mistral.chat",
    baseURL: n,
    headers: r,
    fetch: e.fetch
  }), a = (i) => new uc(i, {
    provider: "mistral.embedding",
    baseURL: n,
    headers: r,
    fetch: e.fetch
  }), o = function(i) {
    if (new.target)
      throw new Error(
        "The Mistral model function cannot be called with the new keyword."
      );
    return s(i);
  };
  return o.languageModel = s, o.chat = s, o.embedding = a, o.textEmbedding = a, o.textEmbeddingModel = a, o.imageModel = (i) => {
    throw new je({ modelId: i, modelType: "imageModel" });
  }, o;
}
dc();
function pc({
  prompt: e,
  systemMessageMode: t = "system"
}) {
  const n = [], r = [];
  for (const { role: s, content: a } of e)
    switch (s) {
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
            const o = t;
            throw new Error(
              `Unsupported system message mode: ${o}`
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
          content: a.map((o, i) => {
            var l, u, c;
            switch (o.type) {
              case "text":
                return { type: "text", text: o.text };
              case "file":
                if (o.mediaType.startsWith("image/")) {
                  const p = o.mediaType === "image/*" ? "image/jpeg" : o.mediaType;
                  return {
                    type: "image_url",
                    image_url: {
                      url: o.data instanceof URL ? o.data.toString() : `data:${p};base64,${vt(o.data)}`,
                      // OpenAI specific extension: image detail
                      detail: (u = (l = o.providerOptions) == null ? void 0 : l.openai) == null ? void 0 : u.imageDetail
                    }
                  };
                } else if (o.mediaType.startsWith("audio/")) {
                  if (o.data instanceof URL)
                    throw new he({
                      functionality: "audio file parts with URLs"
                    });
                  switch (o.mediaType) {
                    case "audio/wav":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: vt(o.data),
                          format: "wav"
                        }
                      };
                    case "audio/mp3":
                    case "audio/mpeg":
                      return {
                        type: "input_audio",
                        input_audio: {
                          data: vt(o.data),
                          format: "mp3"
                        }
                      };
                    default:
                      throw new he({
                        functionality: `audio content parts with media type ${o.mediaType}`
                      });
                  }
                } else if (o.mediaType === "application/pdf") {
                  if (o.data instanceof URL)
                    throw new he({
                      functionality: "PDF file parts with URLs"
                    });
                  return {
                    type: "file",
                    file: {
                      filename: (c = o.filename) != null ? c : `part-${i}.pdf`,
                      file_data: `data:application/pdf;base64,${o.data}`
                    }
                  };
                } else
                  throw new he({
                    functionality: `file part media type ${o.mediaType}`
                  });
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
        n.push({
          role: "assistant",
          content: o,
          tool_calls: i.length > 0 ? i : void 0
        });
        break;
      }
      case "tool": {
        for (const o of a)
          n.push({
            role: "tool",
            tool_call_id: o.toolCallId,
            content: JSON.stringify(o.result)
          });
        break;
      }
      default: {
        const o = s;
        throw new Error(`Unsupported role: ${o}`);
      }
    }
  return { messages: n, warnings: r };
}
function En({
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
function An(e) {
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
var hc = f({
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   *
   * Accepts a JSON object that maps tokens (specified by their token ID in
   * the GPT tokenizer) to an associated bias value from -100 to 100.
   */
  logitBias: Ke(pl.number(), T()).optional(),
  /**
   * Return the log probabilities of the tokens.
   *
   * Setting to true will return the log probabilities of the tokens that
   * were generated.
   *
   * Setting to a number will return the log probabilities of the top n
   * tokens that were generated.
   */
  logprobs: se([ue(), T()]).optional(),
  /**
   * Whether to enable parallel function calling during tool use. Default to true.
   */
  parallelToolCalls: ue().optional(),
  /**
   * A unique identifier representing your end-user, which can help OpenAI to
   * monitor and detect abuse.
   */
  user: d().optional(),
  /**
   * Reasoning effort for reasoning models. Defaults to `medium`.
   */
  reasoningEffort: Ce(["low", "medium", "high"]).optional(),
  /**
   * Maximum number of completion tokens to generate. Useful for reasoning models.
   */
  maxCompletionTokens: T().optional(),
  /**
   * Whether to enable persistence in responses API.
   */
  store: ue().optional(),
  /**
   * Metadata to associate with the request.
   */
  metadata: Ke(d()).optional(),
  /**
   * Parameters for prediction mode.
   */
  prediction: Ke(Pt()).optional(),
  /**
   * Whether to use structured outputs.
   *
   * @default true
   */
  structuredOutputs: ue().optional()
}), Cr = f({
  error: f({
    message: d(),
    // The additional information below is handled loosely to support
    // OpenAI-compatible providers that have slightly different error
    // responses:
    type: d().nullish(),
    param: Pt().nullish(),
    code: se([d(), T()]).nullish()
  })
}), Qe = jn({
  errorSchema: Cr,
  errorToMessage: (e) => e.error.message
});
function fc({
  tools: e,
  toolChoice: t,
  structuredOutputs: n
}) {
  e = e != null && e.length ? e : void 0;
  const r = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: r };
  const s = [];
  for (const o of e)
    o.type === "provider-defined" ? r.push({ type: "unsupported-tool", tool: o }) : s.push({
      type: "function",
      function: {
        name: o.name,
        description: o.description,
        parameters: o.parameters,
        strict: n ? !0 : void 0
      }
    });
  if (t == null)
    return { tools: s, toolChoice: void 0, toolWarnings: r };
  const a = t.type;
  switch (a) {
    case "auto":
    case "none":
    case "required":
      return { tools: s, toolChoice: a, toolWarnings: r };
    case "tool":
      return {
        tools: s,
        toolChoice: {
          type: "function",
          function: {
            name: t.toolName
          }
        },
        toolWarnings: r
      };
    default: {
      const o = a;
      throw new he({
        functionality: `tool choice type: ${o}`
      });
    }
  }
}
var mc = class {
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
    topK: s,
    frequencyPenalty: a,
    presencePenalty: o,
    stopSequences: i,
    responseFormat: l,
    seed: u,
    tools: c,
    toolChoice: p,
    providerOptions: h
  }) {
    var g, v, y;
    const m = [], b = (g = await qe({
      provider: "openai",
      providerOptions: h,
      schema: hc
    })) != null ? g : {}, S = (v = b.structuredOutputs) != null ? v : !0;
    s != null && m.push({
      type: "unsupported-setting",
      setting: "topK"
    }), (l == null ? void 0 : l.type) === "json" && l.schema != null && !S && m.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format schema is only supported with structuredOutputs"
    });
    const { messages: w, warnings: x } = pc(
      {
        prompt: e,
        systemMessageMode: vc(this.modelId)
      }
    );
    m.push(...x);
    const _ = {
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
      presence_penalty: o,
      response_format: (l == null ? void 0 : l.type) === "json" ? (
        // TODO convert into provider option
        S && l.schema != null ? {
          type: "json_schema",
          json_schema: {
            schema: l.schema,
            strict: !0,
            name: (y = l.name) != null ? y : "response",
            description: l.description
          }
        } : { type: "json_object" }
      ) : void 0,
      stop: i,
      seed: u,
      // openai specific settings:
      // TODO remove in next major version; we auto-map maxOutputTokens now
      max_completion_tokens: b.maxCompletionTokens,
      store: b.store,
      metadata: b.metadata,
      prediction: b.prediction,
      reasoning_effort: b.reasoningEffort,
      // messages:
      messages: w
    };
    Na(this.modelId) ? (_.temperature != null && (_.temperature = void 0, m.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), _.top_p != null && (_.top_p = void 0, m.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })), _.frequency_penalty != null && (_.frequency_penalty = void 0, m.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty",
      details: "frequencyPenalty is not supported for reasoning models"
    })), _.presence_penalty != null && (_.presence_penalty = void 0, m.push({
      type: "unsupported-setting",
      setting: "presencePenalty",
      details: "presencePenalty is not supported for reasoning models"
    })), _.logit_bias != null && (_.logit_bias = void 0, m.push({
      type: "other",
      message: "logitBias is not supported for reasoning models"
    })), _.logprobs != null && (_.logprobs = void 0, m.push({
      type: "other",
      message: "logprobs is not supported for reasoning models"
    })), _.top_logprobs != null && (_.top_logprobs = void 0, m.push({
      type: "other",
      message: "topLogprobs is not supported for reasoning models"
    })), _.max_tokens != null && (_.max_completion_tokens == null && (_.max_completion_tokens = _.max_tokens), _.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && _.temperature != null && (_.temperature = void 0, m.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for the search preview models and has been removed."
    }));
    const {
      tools: k,
      toolChoice: O,
      toolWarnings: N
    } = fc({
      tools: c,
      toolChoice: p,
      structuredOutputs: S
    });
    return {
      args: {
        ..._,
        tools: k,
        tool_choice: O
      },
      warnings: [...m, ...N]
    };
  }
  async doGenerate(e) {
    var t, n, r, s, a, o, i, l, u, c, p, h, g;
    const { args: v, warnings: y } = await this.getArgs(e), {
      responseHeaders: m,
      value: b,
      rawValue: S
    } = await Ie({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: v,
      failedResponseHandler: Qe,
      successfulResponseHandler: Fe(
        gc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), w = b.choices[0], x = [], _ = w.message.content;
    _ != null && _.length > 0 && x.push({ type: "text", text: _ });
    for (const q of (t = w.message.tool_calls) != null ? t : [])
      x.push({
        type: "tool-call",
        toolCallType: "function",
        toolCallId: (n = q.id) != null ? n : st(),
        toolName: q.function.name,
        args: q.function.arguments
      });
    const k = (r = b.usage) == null ? void 0 : r.completion_tokens_details, O = (s = b.usage) == null ? void 0 : s.prompt_tokens_details, N = { openai: {} };
    return (k == null ? void 0 : k.accepted_prediction_tokens) != null && (N.openai.acceptedPredictionTokens = k == null ? void 0 : k.accepted_prediction_tokens), (k == null ? void 0 : k.rejected_prediction_tokens) != null && (N.openai.rejectedPredictionTokens = k == null ? void 0 : k.rejected_prediction_tokens), ((a = w.logprobs) == null ? void 0 : a.content) != null && (N.openai.logprobs = w.logprobs.content), {
      content: x,
      finishReason: An(w.finish_reason),
      usage: {
        inputTokens: (i = (o = b.usage) == null ? void 0 : o.prompt_tokens) != null ? i : void 0,
        outputTokens: (u = (l = b.usage) == null ? void 0 : l.completion_tokens) != null ? u : void 0,
        totalTokens: (p = (c = b.usage) == null ? void 0 : c.total_tokens) != null ? p : void 0,
        reasoningTokens: (h = k == null ? void 0 : k.reasoning_tokens) != null ? h : void 0,
        cachedInputTokens: (g = O == null ? void 0 : O.cached_tokens) != null ? g : void 0
      },
      request: { body: v },
      response: {
        ...En(b),
        headers: m,
        body: S
      },
      warnings: y,
      providerMetadata: N
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), r = {
      ...t,
      stream: !0,
      stream_options: {
        include_usage: !0
      }
    }, { responseHeaders: s, value: a } = await Ie({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: Qe,
      successfulResponseHandler: Ut(
        yc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), o = [];
    let i = "unknown";
    const l = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let u = !0;
    const c = { openai: {} };
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(p) {
            p.enqueue({ type: "stream-start", warnings: n });
          },
          transform(p, h) {
            var g, v, y, m, b, S, w, x, _, k, O, N, q, L, ee, ae, fe, ce, ve, te, ge, Pe, we, Y;
            if (!p.success) {
              i = "error", h.enqueue({ type: "error", error: p.error });
              return;
            }
            const ne = p.value;
            if ("error" in ne) {
              i = "error", h.enqueue({ type: "error", error: ne.error });
              return;
            }
            u && (u = !1, h.enqueue({
              type: "response-metadata",
              ...En(ne)
            })), ne.usage != null && (l.inputTokens = (g = ne.usage.prompt_tokens) != null ? g : void 0, l.outputTokens = (v = ne.usage.completion_tokens) != null ? v : void 0, l.totalTokens = (y = ne.usage.total_tokens) != null ? y : void 0, l.reasoningTokens = (b = (m = ne.usage.completion_tokens_details) == null ? void 0 : m.reasoning_tokens) != null ? b : void 0, l.cachedInputTokens = (w = (S = ne.usage.prompt_tokens_details) == null ? void 0 : S.cached_tokens) != null ? w : void 0, ((x = ne.usage.completion_tokens_details) == null ? void 0 : x.accepted_prediction_tokens) != null && (c.openai.acceptedPredictionTokens = (_ = ne.usage.completion_tokens_details) == null ? void 0 : _.accepted_prediction_tokens), ((k = ne.usage.completion_tokens_details) == null ? void 0 : k.rejected_prediction_tokens) != null && (c.openai.rejectedPredictionTokens = (O = ne.usage.completion_tokens_details) == null ? void 0 : O.rejected_prediction_tokens));
            const oe = ne.choices[0];
            if ((oe == null ? void 0 : oe.finish_reason) != null && (i = An(oe.finish_reason)), ((N = oe == null ? void 0 : oe.logprobs) == null ? void 0 : N.content) != null && (c.openai.logprobs = oe.logprobs.content), (oe == null ? void 0 : oe.delta) == null)
              return;
            const H = oe.delta;
            if (H.content != null && h.enqueue({
              type: "text",
              text: H.content
            }), H.tool_calls != null)
              for (const V of H.tool_calls) {
                const ie = V.index;
                if (o[ie] == null) {
                  if (V.type !== "function")
                    throw new Wn({
                      data: V,
                      message: "Expected 'function' type."
                    });
                  if (V.id == null)
                    throw new Wn({
                      data: V,
                      message: "Expected 'id' to be a string."
                    });
                  if (((q = V.function) == null ? void 0 : q.name) == null)
                    throw new Wn({
                      data: V,
                      message: "Expected 'function.name' to be a string."
                    });
                  o[ie] = {
                    id: V.id,
                    type: "function",
                    function: {
                      name: V.function.name,
                      arguments: (L = V.function.arguments) != null ? L : ""
                    },
                    hasFinished: !1
                  };
                  const U = o[ie];
                  ((ee = U.function) == null ? void 0 : ee.name) != null && ((ae = U.function) == null ? void 0 : ae.arguments) != null && (U.function.arguments.length > 0 && h.enqueue({
                    type: "tool-call-delta",
                    toolCallType: "function",
                    toolCallId: U.id,
                    toolName: U.function.name,
                    argsTextDelta: U.function.arguments
                  }), ss(U.function.arguments) && (h.enqueue({
                    type: "tool-call",
                    toolCallType: "function",
                    toolCallId: (fe = U.id) != null ? fe : st(),
                    toolName: U.function.name,
                    args: U.function.arguments
                  }), U.hasFinished = !0));
                  continue;
                }
                const K = o[ie];
                K.hasFinished || (((ce = V.function) == null ? void 0 : ce.arguments) != null && (K.function.arguments += (te = (ve = V.function) == null ? void 0 : ve.arguments) != null ? te : ""), h.enqueue({
                  type: "tool-call-delta",
                  toolCallType: "function",
                  toolCallId: K.id,
                  toolName: K.function.name,
                  argsTextDelta: (ge = V.function.arguments) != null ? ge : ""
                }), ((Pe = K.function) == null ? void 0 : Pe.name) != null && ((we = K.function) == null ? void 0 : we.arguments) != null && ss(K.function.arguments) && (h.enqueue({
                  type: "tool-call",
                  toolCallType: "function",
                  toolCallId: (Y = K.id) != null ? Y : st(),
                  toolName: K.function.name,
                  args: K.function.arguments
                }), K.hasFinished = !0));
              }
          },
          flush(p) {
            p.enqueue({
              type: "finish",
              finishReason: i,
              usage: l,
              ...c != null ? { providerMetadata: c } : {}
            });
          }
        })
      ),
      request: { body: r },
      response: { headers: s }
    };
  }
}, Ma = f({
  prompt_tokens: T().nullish(),
  completion_tokens: T().nullish(),
  total_tokens: T().nullish(),
  prompt_tokens_details: f({
    cached_tokens: T().nullish()
  }).nullish(),
  completion_tokens_details: f({
    reasoning_tokens: T().nullish(),
    accepted_prediction_tokens: T().nullish(),
    rejected_prediction_tokens: T().nullish()
  }).nullish()
}).nullish(), gc = f({
  id: d().nullish(),
  created: T().nullish(),
  model: d().nullish(),
  choices: M(
    f({
      message: f({
        role: C("assistant").nullish(),
        content: d().nullish(),
        tool_calls: M(
          f({
            id: d().nullish(),
            type: C("function"),
            function: f({
              name: d(),
              arguments: d()
            })
          })
        ).nullish()
      }),
      index: T(),
      logprobs: f({
        content: M(
          f({
            token: d(),
            logprob: T(),
            top_logprobs: M(
              f({
                token: d(),
                logprob: T()
              })
            )
          })
        ).nullish()
      }).nullish(),
      finish_reason: d().nullish()
    })
  ),
  usage: Ma
}), yc = se([
  f({
    id: d().nullish(),
    created: T().nullish(),
    model: d().nullish(),
    choices: M(
      f({
        delta: f({
          role: Ce(["assistant"]).nullish(),
          content: d().nullish(),
          tool_calls: M(
            f({
              index: T(),
              id: d().nullish(),
              type: C("function").nullish(),
              function: f({
                name: d().nullish(),
                arguments: d().nullish()
              })
            })
          ).nullish()
        }).nullish(),
        logprobs: f({
          content: M(
            f({
              token: d(),
              logprob: T(),
              top_logprobs: M(
                f({
                  token: d(),
                  logprob: T()
                })
              )
            })
          ).nullish()
        }).nullish(),
        finish_reason: d().nullish(),
        index: T()
      })
    ),
    usage: Ma
  }),
  Cr
]);
function Na(e) {
  return e.startsWith("o");
}
function vc(e) {
  var t, n;
  return Na(e) ? (n = (t = _c[e]) == null ? void 0 : t.systemMessageMode) != null ? n : "developer" : "system";
}
var _c = {
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
function bc({
  prompt: e,
  user: t = "user",
  assistant: n = "assistant"
}) {
  let r = "";
  e[0].role === "system" && (r += `${e[0].content}

`, e = e.slice(1));
  for (const { role: s, content: a } of e)
    switch (s) {
      case "system":
        throw new gt({
          message: "Unexpected system message in prompt: ${content}",
          prompt: e
        });
      case "user": {
        const o = a.map((i) => {
          switch (i.type) {
            case "text":
              return i.text;
          }
        }).filter(Boolean).join("");
        r += `${t}:
${o}

`;
        break;
      }
      case "assistant": {
        const o = a.map((i) => {
          switch (i.type) {
            case "text":
              return i.text;
            case "tool-call":
              throw new he({
                functionality: "tool-call messages"
              });
          }
        }).join("");
        r += `${n}:
${o}

`;
        break;
      }
      case "tool":
        throw new he({
          functionality: "tool messages"
        });
      default: {
        const o = s;
        throw new Error(`Unsupported role: ${o}`);
      }
    }
  return r += `${n}:
`, {
    prompt: r,
    stopSequences: [`
${t}:`]
  };
}
var hs = f({
  /**
  Echo back the prompt in addition to the completion.
     */
  echo: ue().optional(),
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
  logitBias: Ke(d(), T()).optional(),
  /**
  The suffix that comes after a completion of inserted text.
   */
  suffix: d().optional(),
  /**
  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.
   */
  user: d().optional(),
  /**
  Return the log probabilities of the tokens. Including logprobs will increase
  the response size and can slow down response times. However, it can
  be useful to better understand how the model is behaving.
  Setting to true will return the log probabilities of the tokens that
  were generated.
  Setting to a number will return the log probabilities of the top n
  tokens that were generated.
     */
  logprobs: se([ue(), T()]).optional()
}), wc = class {
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
    topK: s,
    frequencyPenalty: a,
    presencePenalty: o,
    stopSequences: i,
    responseFormat: l,
    tools: u,
    toolChoice: c,
    seed: p,
    providerOptions: h
  }) {
    const g = [], v = {
      ...await qe({
        provider: "openai",
        providerOptions: h,
        schema: hs
      }),
      ...await qe({
        provider: this.providerOptionsName,
        providerOptions: h,
        schema: hs
      })
    };
    s != null && g.push({ type: "unsupported-setting", setting: "topK" }), u != null && u.length && g.push({ type: "unsupported-setting", setting: "tools" }), c != null && g.push({ type: "unsupported-setting", setting: "toolChoice" }), l != null && l.type !== "text" && g.push({
      type: "unsupported-setting",
      setting: "responseFormat",
      details: "JSON response format is not supported."
    });
    const { prompt: y, stopSequences: m } = bc({ prompt: e }), b = [...m ?? [], ...i ?? []];
    return {
      args: {
        // model id:
        model: this.modelId,
        // model specific settings:
        echo: v.echo,
        logit_bias: v.logitBias,
        logprobs: (v == null ? void 0 : v.logprobs) === !0 ? 0 : (v == null ? void 0 : v.logprobs) === !1 || v == null ? void 0 : v.logprobs,
        suffix: v.suffix,
        user: v.user,
        // standardized settings:
        max_tokens: t,
        temperature: n,
        top_p: r,
        frequency_penalty: a,
        presence_penalty: o,
        seed: p,
        // prompt:
        prompt: y,
        // stop sequences:
        stop: b.length > 0 ? b : void 0
      },
      warnings: g
    };
  }
  async doGenerate(e) {
    var t, n, r;
    const { args: s, warnings: a } = await this.getArgs(e), {
      responseHeaders: o,
      value: i,
      rawValue: l
    } = await Ie({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: s,
      failedResponseHandler: Qe,
      successfulResponseHandler: Fe(
        xc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), u = i.choices[0], c = { openai: {} };
    return u.logprobs != null && (c.openai.logprobs = u.logprobs), {
      content: [{ type: "text", text: u.text }],
      usage: {
        inputTokens: (t = i.usage) == null ? void 0 : t.prompt_tokens,
        outputTokens: (n = i.usage) == null ? void 0 : n.completion_tokens,
        totalTokens: (r = i.usage) == null ? void 0 : r.total_tokens
      },
      finishReason: An(u.finish_reason),
      request: { body: s },
      response: {
        ...En(i),
        headers: o,
        body: l
      },
      providerMetadata: c,
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
    }, { responseHeaders: s, value: a } = await Ie({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: r,
      failedResponseHandler: Qe,
      successfulResponseHandler: Ut(
        Tc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    let o = "unknown";
    const i = { openai: {} }, l = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let u = !0;
    return {
      stream: a.pipeThrough(
        new TransformStream({
          start(c) {
            c.enqueue({ type: "stream-start", warnings: n });
          },
          transform(c, p) {
            if (!c.success) {
              o = "error", p.enqueue({ type: "error", error: c.error });
              return;
            }
            const h = c.value;
            if ("error" in h) {
              o = "error", p.enqueue({ type: "error", error: h.error });
              return;
            }
            u && (u = !1, p.enqueue({
              type: "response-metadata",
              ...En(h)
            })), h.usage != null && (l.inputTokens = h.usage.prompt_tokens, l.outputTokens = h.usage.completion_tokens, l.totalTokens = h.usage.total_tokens);
            const g = h.choices[0];
            (g == null ? void 0 : g.finish_reason) != null && (o = An(g.finish_reason)), (g == null ? void 0 : g.logprobs) != null && (i.openai.logprobs = g.logprobs), (g == null ? void 0 : g.text) != null && p.enqueue({
              type: "text",
              text: g.text
            });
          },
          flush(c) {
            c.enqueue({
              type: "finish",
              finishReason: o,
              providerMetadata: i,
              usage: l
            });
          }
        })
      ),
      request: { body: r },
      response: { headers: s }
    };
  }
}, Pa = f({
  prompt_tokens: T(),
  completion_tokens: T(),
  total_tokens: T()
}), xc = f({
  id: d().nullish(),
  created: T().nullish(),
  model: d().nullish(),
  choices: M(
    f({
      text: d(),
      finish_reason: d(),
      logprobs: f({
        tokens: M(d()),
        token_logprobs: M(T()),
        top_logprobs: M(Ke(d(), T())).nullish()
      }).nullish()
    })
  ),
  usage: Pa.nullish()
}), Tc = se([
  f({
    id: d().nullish(),
    created: T().nullish(),
    model: d().nullish(),
    choices: M(
      f({
        text: d(),
        finish_reason: d().nullish(),
        index: T(),
        logprobs: f({
          tokens: M(d()),
          token_logprobs: M(T()),
          top_logprobs: M(Ke(d(), T())).nullish()
        }).nullish()
      })
    ),
    usage: Pa.nullish()
  }),
  Cr
]), kc = f({
  /**
  The number of dimensions the resulting output embeddings should have.
  Only supported in text-embedding-3 and later models.
     */
  dimensions: T().optional(),
  /**
  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.
  */
  user: d().optional()
}), Sc = class {
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
    var s;
    if (e.length > this.maxEmbeddingsPerCall)
      throw new br({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values: e
      });
    const a = (s = await qe({
      provider: "openai",
      providerOptions: r,
      schema: kc
    })) != null ? s : {}, {
      responseHeaders: o,
      value: i,
      rawValue: l
    } = await Ie({
      url: this.config.url({
        path: "/embeddings",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), t),
      body: {
        model: this.modelId,
        input: e,
        encoding_format: "float",
        dimensions: a.dimensions,
        user: a.user
      },
      failedResponseHandler: Qe,
      successfulResponseHandler: Fe(
        Ic
      ),
      abortSignal: n,
      fetch: this.config.fetch
    });
    return {
      embeddings: i.data.map((u) => u.embedding),
      usage: i.usage ? { tokens: i.usage.prompt_tokens } : void 0,
      response: { headers: o, body: l }
    };
  }
}, Ic = f({
  data: M(f({ embedding: M(T()) })),
  usage: f({ prompt_tokens: T() }).nullish()
}), Cc = {
  "dall-e-3": 1,
  "dall-e-2": 10,
  "gpt-image-1": 10
}, Rc = /* @__PURE__ */ new Set(["gpt-image-1"]), Ec = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v2";
  }
  get maxImagesPerCall() {
    var e;
    return (e = Cc[this.modelId]) != null ? e : 1;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: n,
    aspectRatio: r,
    seed: s,
    providerOptions: a,
    headers: o,
    abortSignal: i
  }) {
    var l, u, c, p;
    const h = [];
    r != null && h.push({
      type: "unsupported-setting",
      setting: "aspectRatio",
      details: "This model does not support aspect ratio. Use `size` instead."
    }), s != null && h.push({ type: "unsupported-setting", setting: "seed" });
    const g = (c = (u = (l = this.config._internal) == null ? void 0 : l.currentDate) == null ? void 0 : u.call(l)) != null ? c : /* @__PURE__ */ new Date(), { value: v, responseHeaders: y } = await Ie({
      url: this.config.url({
        path: "/images/generations",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), o),
      body: {
        model: this.modelId,
        prompt: e,
        n: t,
        size: n,
        ...(p = a.openai) != null ? p : {},
        ...Rc.has(this.modelId) ? {} : { response_format: "b64_json" }
      },
      failedResponseHandler: Qe,
      successfulResponseHandler: Fe(
        Ac
      ),
      abortSignal: i,
      fetch: this.config.fetch
    });
    return {
      images: v.data.map((m) => m.b64_json),
      warnings: h,
      response: {
        timestamp: g,
        modelId: this.modelId,
        headers: y
      },
      providerMetadata: {
        openai: {
          images: v.data.map(
            (m) => m.revised_prompt ? {
              revisedPrompt: m.revised_prompt
            } : null
          )
        }
      }
    };
  }
}, Ac = f({
  data: M(
    f({ b64_json: d(), revised_prompt: d().optional() })
  )
}), Oc = f({});
function Mc({
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
    parameters: Oc
  };
}
var Nc = {
  webSearchPreview: Mc
}, Pc = f({
  /**
   * Additional information to include in the transcription response.
   */
  include: M(d()).optional(),
  /**
   * The language of the input audio in ISO-639-1 format.
   */
  language: d().optional(),
  /**
   * An optional text to guide the model's style or continue a previous audio segment.
   */
  prompt: d().optional(),
  /**
   * The sampling temperature, between 0 and 1.
   * @default 0
   */
  temperature: T().min(0).max(1).default(0).optional(),
  /**
   * The timestamp granularities to populate for this transcription.
   * @default ['segment']
   */
  timestampGranularities: M(Ce(["word", "segment"])).default(["segment"]).optional()
}), fs = {
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
}, $c = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v1";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    audio: e,
    mediaType: t,
    providerOptions: n
  }) {
    const r = [], s = await qe({
      provider: "openai",
      providerOptions: n,
      schema: Pc
    }), a = new FormData(), o = e instanceof Uint8Array ? new Blob([e]) : new Blob([Dn(e)]);
    if (a.append("model", this.modelId), a.append("file", new File([o], "audio", { type: t })), s) {
      const i = {
        include: s.include,
        language: s.language,
        prompt: s.prompt,
        temperature: s.temperature,
        timestamp_granularities: s.timestampGranularities
      };
      for (const [l, u] of Object.entries(i))
        u != null && a.append(l, String(u));
    }
    return {
      formData: a,
      warnings: r
    };
  }
  async doGenerate(e) {
    var t, n, r, s, a, o;
    const i = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), { formData: l, warnings: u } = await this.getArgs(e), {
      value: c,
      responseHeaders: p,
      rawValue: h
    } = await cu({
      url: this.config.url({
        path: "/audio/transcriptions",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      formData: l,
      failedResponseHandler: Qe,
      successfulResponseHandler: Fe(
        jc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), g = c.language != null && c.language in fs ? fs[c.language] : void 0;
    return {
      text: c.text,
      segments: (a = (s = c.words) == null ? void 0 : s.map((v) => ({
        text: v.word,
        startSecond: v.start,
        endSecond: v.end
      }))) != null ? a : [],
      language: g,
      durationInSeconds: (o = c.duration) != null ? o : void 0,
      warnings: u,
      response: {
        timestamp: i,
        modelId: this.modelId,
        headers: p,
        body: h
      }
    };
  }
}, jc = f({
  text: d(),
  language: d().nullish(),
  duration: T().nullish(),
  words: M(
    f({
      word: d(),
      start: T(),
      end: T()
    })
  ).nullish()
});
function Dc({
  prompt: e,
  systemMessageMode: t
}) {
  const n = [], r = [];
  for (const { role: s, content: a } of e)
    switch (s) {
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
            const o = t;
            throw new Error(
              `Unsupported system message mode: ${o}`
            );
          }
        }
        break;
      }
      case "user": {
        n.push({
          role: "user",
          content: a.map((o, i) => {
            var l, u, c;
            switch (o.type) {
              case "text":
                return { type: "input_text", text: o.text };
              case "file":
                if (o.mediaType.startsWith("image/")) {
                  const p = o.mediaType === "image/*" ? "image/jpeg" : o.mediaType;
                  return {
                    type: "input_image",
                    image_url: o.data instanceof URL ? o.data.toString() : `data:${p};base64,${o.data}`,
                    // OpenAI specific extension: image detail
                    detail: (u = (l = o.providerOptions) == null ? void 0 : l.openai) == null ? void 0 : u.imageDetail
                  };
                } else if (o.mediaType === "application/pdf") {
                  if (o.data instanceof URL)
                    throw new he({
                      functionality: "PDF file parts with URLs"
                    });
                  return {
                    type: "input_file",
                    filename: (c = o.filename) != null ? c : `part-${i}.pdf`,
                    file_data: `data:application/pdf;base64,${o.data}`
                  };
                } else
                  throw new he({
                    functionality: `file part media type ${o.mediaType}`
                  });
            }
          })
        });
        break;
      }
      case "assistant": {
        for (const o of a)
          switch (o.type) {
            case "text": {
              n.push({
                role: "assistant",
                content: [{ type: "output_text", text: o.text }]
              });
              break;
            }
            case "tool-call": {
              n.push({
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
        for (const o of a)
          n.push({
            type: "function_call_output",
            call_id: o.toolCallId,
            output: JSON.stringify(o.result)
          });
        break;
      }
      default: {
        const o = s;
        throw new Error(`Unsupported role: ${o}`);
      }
    }
  return { messages: n, warnings: r };
}
function ms({
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
function qc({
  tools: e,
  toolChoice: t,
  strict: n
}) {
  e = e != null && e.length ? e : void 0;
  const r = [];
  if (e == null)
    return { tools: void 0, toolChoice: void 0, toolWarnings: r };
  const s = [];
  for (const o of e)
    switch (o.type) {
      case "function":
        s.push({
          type: "function",
          name: o.name,
          description: o.description,
          parameters: o.parameters,
          strict: n ? !0 : void 0
        });
        break;
      case "provider-defined":
        switch (o.id) {
          case "openai.web_search_preview":
            s.push({
              type: "web_search_preview",
              search_context_size: o.args.searchContextSize,
              user_location: o.args.userLocation
            });
            break;
          default:
            r.push({ type: "unsupported-tool", tool: o });
            break;
        }
        break;
      default:
        r.push({ type: "unsupported-tool", tool: o });
        break;
    }
  if (t == null)
    return { tools: s, toolChoice: void 0, toolWarnings: r };
  const a = t.type;
  switch (a) {
    case "auto":
    case "none":
    case "required":
      return { tools: s, toolChoice: a, toolWarnings: r };
    case "tool":
      return {
        tools: s,
        toolChoice: t.toolName === "web_search_preview" ? { type: "web_search_preview" } : { type: "function", name: t.toolName },
        toolWarnings: r
      };
    default: {
      const o = a;
      throw new he({
        functionality: `tool choice type: ${o}`
      });
    }
  }
}
var Uc = class {
  constructor(e, t) {
    this.specificationVersion = "v2", this.supportedUrls = {
      "image/*": [/^https?:\/\/.*$/]
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
    topK: s,
    presencePenalty: a,
    frequencyPenalty: o,
    seed: i,
    prompt: l,
    providerOptions: u,
    tools: c,
    toolChoice: p,
    responseFormat: h
  }) {
    var g, v;
    const y = [], m = rd(this.modelId);
    s != null && y.push({ type: "unsupported-setting", setting: "topK" }), i != null && y.push({ type: "unsupported-setting", setting: "seed" }), a != null && y.push({
      type: "unsupported-setting",
      setting: "presencePenalty"
    }), o != null && y.push({
      type: "unsupported-setting",
      setting: "frequencyPenalty"
    }), n != null && y.push({ type: "unsupported-setting", setting: "stopSequences" });
    const { messages: b, warnings: S } = Dc({
      prompt: l,
      systemMessageMode: m.systemMessageMode
    });
    y.push(...S);
    const w = await qe({
      provider: "openai",
      providerOptions: u,
      schema: sd
    }), x = (g = w == null ? void 0 : w.strictSchemas) != null ? g : !0, _ = {
      model: this.modelId,
      input: b,
      temperature: t,
      top_p: r,
      max_output_tokens: e,
      ...(h == null ? void 0 : h.type) === "json" && {
        text: {
          format: h.schema != null ? {
            type: "json_schema",
            strict: x,
            name: (v = h.name) != null ? v : "response",
            description: h.description,
            schema: h.schema
          } : { type: "json_object" }
        }
      },
      // provider options:
      metadata: w == null ? void 0 : w.metadata,
      parallel_tool_calls: w == null ? void 0 : w.parallelToolCalls,
      previous_response_id: w == null ? void 0 : w.previousResponseId,
      store: w == null ? void 0 : w.store,
      user: w == null ? void 0 : w.user,
      instructions: w == null ? void 0 : w.instructions,
      // model-specific settings:
      ...m.isReasoningModel && ((w == null ? void 0 : w.reasoningEffort) != null || (w == null ? void 0 : w.reasoningSummary) != null) && {
        reasoning: {
          ...(w == null ? void 0 : w.reasoningEffort) != null && {
            effort: w.reasoningEffort
          },
          ...(w == null ? void 0 : w.reasoningSummary) != null && {
            summary: w.reasoningSummary
          }
        }
      },
      ...m.requiredAutoTruncation && {
        truncation: "auto"
      }
    };
    m.isReasoningModel && (_.temperature != null && (_.temperature = void 0, y.push({
      type: "unsupported-setting",
      setting: "temperature",
      details: "temperature is not supported for reasoning models"
    })), _.top_p != null && (_.top_p = void 0, y.push({
      type: "unsupported-setting",
      setting: "topP",
      details: "topP is not supported for reasoning models"
    })));
    const {
      tools: k,
      toolChoice: O,
      toolWarnings: N
    } = qc({
      tools: c,
      toolChoice: p,
      strict: x
    });
    return {
      args: {
        ..._,
        tools: k,
        tool_choice: O
      },
      warnings: [...y, ...N]
    };
  }
  async doGenerate(e) {
    var t, n, r, s, a, o, i, l;
    const { args: u, warnings: c } = await this.getArgs(e), {
      responseHeaders: p,
      value: h,
      rawValue: g
    } = await Ie({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: u,
      failedResponseHandler: Qe,
      successfulResponseHandler: Fe(
        f({
          id: d(),
          created_at: T(),
          model: d(),
          output: M(
            pt("type", [
              f({
                type: C("message"),
                role: C("assistant"),
                content: M(
                  f({
                    type: C("output_text"),
                    text: d(),
                    annotations: M(
                      f({
                        type: C("url_citation"),
                        start_index: T(),
                        end_index: T(),
                        url: d(),
                        title: d()
                      })
                    )
                  })
                )
              }),
              f({
                type: C("function_call"),
                call_id: d(),
                name: d(),
                arguments: d()
              }),
              f({
                type: C("web_search_call")
              }),
              f({
                type: C("computer_call")
              }),
              f({
                type: C("reasoning"),
                summary: M(
                  f({
                    type: C("summary_text"),
                    text: d()
                  })
                )
              })
            ])
          ),
          incomplete_details: f({ reason: d() }).nullable(),
          usage: $a
        })
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), v = [];
    for (const y of h.output)
      switch (y.type) {
        case "reasoning": {
          v.push({
            type: "reasoning",
            text: y.summary.map((m) => m.text).join()
          });
          break;
        }
        case "message": {
          for (const m of y.content) {
            v.push({
              type: "text",
              text: m.text
            });
            for (const b of m.annotations)
              v.push({
                type: "source",
                sourceType: "url",
                id: (r = (n = (t = this.config).generateId) == null ? void 0 : n.call(t)) != null ? r : st(),
                url: b.url,
                title: b.title
              });
          }
          break;
        }
        case "function_call": {
          v.push({
            type: "tool-call",
            toolCallType: "function",
            toolCallId: y.call_id,
            toolName: y.name,
            args: y.arguments
          });
          break;
        }
      }
    return {
      content: v,
      finishReason: ms({
        finishReason: (s = h.incomplete_details) == null ? void 0 : s.reason,
        hasToolCalls: v.some((y) => y.type === "tool-call")
      }),
      usage: {
        inputTokens: h.usage.input_tokens,
        outputTokens: h.usage.output_tokens,
        totalTokens: h.usage.input_tokens + h.usage.output_tokens,
        reasoningTokens: (o = (a = h.usage.output_tokens_details) == null ? void 0 : a.reasoning_tokens) != null ? o : void 0,
        cachedInputTokens: (l = (i = h.usage.input_tokens_details) == null ? void 0 : i.cached_tokens) != null ? l : void 0
      },
      request: { body: u },
      response: {
        id: h.id,
        timestamp: new Date(h.created_at * 1e3),
        modelId: h.model,
        headers: p,
        body: g
      },
      providerMetadata: {
        openai: {
          responseId: h.id
        }
      },
      warnings: c
    };
  }
  async doStream(e) {
    const { args: t, warnings: n } = await this.getArgs(e), { responseHeaders: r, value: s } = await Ie({
      url: this.config.url({
        path: "/responses",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: {
        ...t,
        stream: !0
      },
      failedResponseHandler: Qe,
      successfulResponseHandler: Ut(
        zc
      ),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    }), a = this;
    let o = "unknown";
    const i = {
      inputTokens: void 0,
      outputTokens: void 0,
      totalTokens: void 0
    };
    let l = null;
    const u = {};
    let c = !1;
    return {
      stream: s.pipeThrough(
        new TransformStream({
          start(p) {
            p.enqueue({ type: "stream-start", warnings: n });
          },
          transform(p, h) {
            var g, v, y, m, b, S, w, x;
            if (!p.success) {
              o = "error", h.enqueue({ type: "error", error: p.error });
              return;
            }
            const _ = p.value;
            if (ed(_))
              _.item.type === "function_call" && (u[_.output_index] = {
                toolName: _.item.name,
                toolCallId: _.item.call_id
              }, h.enqueue({
                type: "tool-call-delta",
                toolCallType: "function",
                toolCallId: _.item.call_id,
                toolName: _.item.name,
                argsTextDelta: _.item.arguments
              }));
            else if (Qc(_)) {
              const k = u[_.output_index];
              k != null && h.enqueue({
                type: "tool-call-delta",
                toolCallType: "function",
                toolCallId: k.toolCallId,
                toolName: k.toolName,
                argsTextDelta: _.delta
              });
            } else Xc(_) ? (l = _.response.id, h.enqueue({
              type: "response-metadata",
              id: _.response.id,
              timestamp: new Date(_.response.created_at * 1e3),
              modelId: _.response.model
            })) : Wc(_) ? h.enqueue({
              type: "text",
              text: _.delta
            }) : nd(_) ? h.enqueue({
              type: "reasoning",
              text: _.delta
            }) : Yc(_) && _.item.type === "function_call" ? (u[_.output_index] = void 0, c = !0, h.enqueue({
              type: "tool-call",
              toolCallType: "function",
              toolCallId: _.item.call_id,
              toolName: _.item.name,
              args: _.item.arguments
            })) : Kc(_) ? (o = ms({
              finishReason: (g = _.response.incomplete_details) == null ? void 0 : g.reason,
              hasToolCalls: c
            }), i.inputTokens = _.response.usage.input_tokens, i.outputTokens = _.response.usage.output_tokens, i.totalTokens = _.response.usage.input_tokens + _.response.usage.output_tokens, i.reasoningTokens = (y = (v = _.response.usage.output_tokens_details) == null ? void 0 : v.reasoning_tokens) != null ? y : void 0, i.cachedInputTokens = (b = (m = _.response.usage.input_tokens_details) == null ? void 0 : m.cached_tokens) != null ? b : void 0) : td(_) && h.enqueue({
              type: "source",
              sourceType: "url",
              id: (x = (w = (S = a.config).generateId) == null ? void 0 : w.call(S)) != null ? x : st(),
              url: _.annotation.url,
              title: _.annotation.title
            });
          },
          flush(p) {
            p.enqueue({
              type: "finish",
              finishReason: o,
              usage: i,
              providerMetadata: {
                openai: {
                  responseId: l
                }
              }
            });
          }
        })
      ),
      request: { body: t },
      response: { headers: r }
    };
  }
}, $a = f({
  input_tokens: T(),
  input_tokens_details: f({ cached_tokens: T().nullish() }).nullish(),
  output_tokens: T(),
  output_tokens_details: f({ reasoning_tokens: T().nullish() }).nullish()
}), Lc = f({
  type: C("response.output_text.delta"),
  delta: d()
}), Zc = f({
  type: Ce(["response.completed", "response.incomplete"]),
  response: f({
    incomplete_details: f({ reason: d() }).nullish(),
    usage: $a
  })
}), Vc = f({
  type: C("response.created"),
  response: f({
    id: d(),
    created_at: T(),
    model: d()
  })
}), Bc = f({
  type: C("response.output_item.done"),
  output_index: T(),
  item: pt("type", [
    f({
      type: C("message")
    }),
    f({
      type: C("function_call"),
      id: d(),
      call_id: d(),
      name: d(),
      arguments: d(),
      status: C("completed")
    })
  ])
}), Fc = f({
  type: C("response.function_call_arguments.delta"),
  item_id: d(),
  output_index: T(),
  delta: d()
}), Gc = f({
  type: C("response.output_item.added"),
  output_index: T(),
  item: pt("type", [
    f({
      type: C("message")
    }),
    f({
      type: C("function_call"),
      id: d(),
      call_id: d(),
      name: d(),
      arguments: d()
    })
  ])
}), Jc = f({
  type: C("response.output_text.annotation.added"),
  annotation: f({
    type: C("url_citation"),
    url: d(),
    title: d()
  })
}), Hc = f({
  type: C("response.reasoning_summary_text.delta"),
  item_id: d(),
  output_index: T(),
  summary_index: T(),
  delta: d()
}), zc = se([
  Lc,
  Zc,
  Vc,
  Bc,
  Fc,
  Gc,
  Jc,
  Hc,
  f({ type: d() }).passthrough()
  // fallback for unknown chunks
]);
function Wc(e) {
  return e.type === "response.output_text.delta";
}
function Yc(e) {
  return e.type === "response.output_item.done";
}
function Kc(e) {
  return e.type === "response.completed" || e.type === "response.incomplete";
}
function Xc(e) {
  return e.type === "response.created";
}
function Qc(e) {
  return e.type === "response.function_call_arguments.delta";
}
function ed(e) {
  return e.type === "response.output_item.added";
}
function td(e) {
  return e.type === "response.output_text.annotation.added";
}
function nd(e) {
  return e.type === "response.reasoning_summary_text.delta";
}
function rd(e) {
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
var sd = f({
  metadata: Pt().nullish(),
  parallelToolCalls: ue().nullish(),
  previousResponseId: d().nullish(),
  store: ue().nullish(),
  user: d().nullish(),
  reasoningEffort: d().nullish(),
  strictSchemas: ue().nullish(),
  instructions: d().nullish(),
  reasoningSummary: d().nullish()
}), ad = f({
  instructions: d().nullish(),
  speed: T().min(0.25).max(4).default(1).nullish()
}), od = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v1";
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs({
    text: e,
    voice: t = "alloy",
    outputFormat: n = "mp3",
    speed: r,
    instructions: s,
    providerOptions: a
  }) {
    const o = [], i = await qe({
      provider: "openai",
      providerOptions: a,
      schema: ad
    }), l = {
      model: this.modelId,
      input: e,
      voice: t,
      response_format: "mp3",
      speed: r,
      instructions: s
    };
    if (n && (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(n) ? l.response_format = n : o.push({
      type: "unsupported-setting",
      setting: "outputFormat",
      details: `Unsupported output format: ${n}. Using mp3 instead.`
    })), i) {
      const u = {};
      for (const c in u) {
        const p = u[c];
        p !== void 0 && (l[c] = p);
      }
    }
    return {
      requestBody: l,
      warnings: o
    };
  }
  async doGenerate(e) {
    var t, n, r;
    const s = (r = (n = (t = this.config._internal) == null ? void 0 : t.currentDate) == null ? void 0 : n.call(t)) != null ? r : /* @__PURE__ */ new Date(), { requestBody: a, warnings: o } = await this.getArgs(e), {
      value: i,
      responseHeaders: l,
      rawValue: u
    } = await Ie({
      url: this.config.url({
        path: "/audio/speech",
        modelId: this.modelId
      }),
      headers: Se(this.config.headers(), e.headers),
      body: a,
      failedResponseHandler: Qe,
      successfulResponseHandler: du(),
      abortSignal: e.abortSignal,
      fetch: this.config.fetch
    });
    return {
      audio: i,
      warnings: o,
      request: {
        body: JSON.stringify(a)
      },
      response: {
        timestamp: s,
        modelId: this.modelId,
        headers: l,
        body: u
      }
    };
  }
};
function id(e = {}) {
  var t, n;
  const r = (t = qn(e.baseURL)) != null ? t : "https://api.openai.com/v1", s = (n = e.name) != null ? n : "openai", a = () => ({
    Authorization: `Bearer ${$n({
      apiKey: e.apiKey,
      environmentVariableName: "OPENAI_API_KEY",
      description: "OpenAI"
    })}`,
    "OpenAI-Organization": e.organization,
    "OpenAI-Project": e.project,
    ...e.headers
  }), o = (y) => new mc(y, {
    provider: `${s}.chat`,
    url: ({ path: m }) => `${r}${m}`,
    headers: a,
    fetch: e.fetch
  }), i = (y) => new wc(y, {
    provider: `${s}.completion`,
    url: ({ path: m }) => `${r}${m}`,
    headers: a,
    fetch: e.fetch
  }), l = (y) => new Sc(y, {
    provider: `${s}.embedding`,
    url: ({ path: m }) => `${r}${m}`,
    headers: a,
    fetch: e.fetch
  }), u = (y) => new Ec(y, {
    provider: `${s}.image`,
    url: ({ path: m }) => `${r}${m}`,
    headers: a,
    fetch: e.fetch
  }), c = (y) => new $c(y, {
    provider: `${s}.transcription`,
    url: ({ path: m }) => `${r}${m}`,
    headers: a,
    fetch: e.fetch
  }), p = (y) => new od(y, {
    provider: `${s}.speech`,
    url: ({ path: m }) => `${r}${m}`,
    headers: a,
    fetch: e.fetch
  }), h = (y) => {
    if (new.target)
      throw new Error(
        "The OpenAI model function cannot be called with the new keyword."
      );
    return y === "gpt-3.5-turbo-instruct" ? i(y) : o(y);
  }, g = (y) => new Uc(y, {
    provider: `${s}.responses`,
    url: ({ path: m }) => `${r}${m}`,
    headers: a,
    fetch: e.fetch
  }), v = function(y) {
    return h(y);
  };
  return v.languageModel = h, v.chat = o, v.completion = i, v.responses = g, v.embedding = l, v.textEmbedding = l, v.textEmbeddingModel = l, v.image = u, v.imageModel = u, v.transcription = c, v.transcriptionModel = c, v.speech = p, v.speechModel = p, v.tools = Nc, v;
}
id();
var ld = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, yt = "1.9.0", gs = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function ud(e) {
  var t = /* @__PURE__ */ new Set([e]), n = /* @__PURE__ */ new Set(), r = e.match(gs);
  if (!r)
    return function() {
      return !1;
    };
  var s = {
    major: +r[1],
    minor: +r[2],
    patch: +r[3],
    prerelease: r[4]
  };
  if (s.prerelease != null)
    return function(l) {
      return l === e;
    };
  function a(i) {
    return n.add(i), !1;
  }
  function o(i) {
    return t.add(i), !0;
  }
  return function(l) {
    if (t.has(l))
      return !0;
    if (n.has(l))
      return !1;
    var u = l.match(gs);
    if (!u)
      return a(l);
    var c = {
      major: +u[1],
      minor: +u[2],
      patch: +u[3],
      prerelease: u[4]
    };
    return c.prerelease != null || s.major !== c.major ? a(l) : s.major === 0 ? s.minor === c.minor && s.patch <= c.patch ? o(l) : a(l) : s.minor <= c.minor ? o(l) : a(l);
  };
}
var cd = ud(yt), dd = yt.split(".")[0], Kt = Symbol.for("opentelemetry.js.api." + dd), Xt = ld;
function rn(e, t, n, r) {
  var s;
  r === void 0 && (r = !1);
  var a = Xt[Kt] = (s = Xt[Kt]) !== null && s !== void 0 ? s : {
    version: yt
  };
  if (!r && a[e]) {
    var o = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return n.error(o.stack || o.message), !1;
  }
  if (a.version !== yt) {
    var o = new Error("@opentelemetry/api: Registration of version v" + a.version + " for " + e + " does not match previously registered API v" + yt);
    return n.error(o.stack || o.message), !1;
  }
  return a[e] = t, n.debug("@opentelemetry/api: Registered a global for " + e + " v" + yt + "."), !0;
}
function Ct(e) {
  var t, n, r = (t = Xt[Kt]) === null || t === void 0 ? void 0 : t.version;
  if (!(!r || !cd(r)))
    return (n = Xt[Kt]) === null || n === void 0 ? void 0 : n[e];
}
function sn(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + yt + ".");
  var n = Xt[Kt];
  n && delete n[e];
}
var pd = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), s, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; ) a.push(s.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}, hd = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, a; r < s; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, fd = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return Ft("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return Ft("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return Ft("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return Ft("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return Ft("verbose", this._namespace, t);
    }, e;
  }()
);
function Ft(e, t, n) {
  var r = Ct("diag");
  if (r)
    return n.unshift(t), r[e].apply(r, hd([], pd(n), !1));
}
var Ne;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(Ne || (Ne = {}));
function md(e, t) {
  e < Ne.NONE ? e = Ne.NONE : e > Ne.ALL && (e = Ne.ALL), t = t || {};
  function n(r, s) {
    var a = t[r];
    return typeof a == "function" && e >= s ? a.bind(t) : function() {
    };
  }
  return {
    error: n("error", Ne.ERROR),
    warn: n("warn", Ne.WARN),
    info: n("info", Ne.INFO),
    debug: n("debug", Ne.DEBUG),
    verbose: n("verbose", Ne.VERBOSE)
  };
}
var gd = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), s, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; ) a.push(s.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}, yd = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, a; r < s; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, vd = "diag", et = (
  /** @class */
  function() {
    function e() {
      function t(s) {
        return function() {
          for (var a = [], o = 0; o < arguments.length; o++)
            a[o] = arguments[o];
          var i = Ct("diag");
          if (i)
            return i[s].apply(i, yd([], gd(a), !1));
        };
      }
      var n = this, r = function(s, a) {
        var o, i, l;
        if (a === void 0 && (a = { logLevel: Ne.INFO }), s === n) {
          var u = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return n.error((o = u.stack) !== null && o !== void 0 ? o : u.message), !1;
        }
        typeof a == "number" && (a = {
          logLevel: a
        });
        var c = Ct("diag"), p = md((i = a.logLevel) !== null && i !== void 0 ? i : Ne.INFO, s);
        if (c && !a.suppressOverrideMessage) {
          var h = (l = new Error().stack) !== null && l !== void 0 ? l : "<failed to generate stacktrace>";
          c.warn("Current logger will be overwritten from " + h), p.warn("Current logger will overwrite one already registered from " + h);
        }
        return rn("diag", p, n, !0);
      };
      n.setLogger = r, n.disable = function() {
        sn(vd, n);
      }, n.createComponentLogger = function(s) {
        return new fd(s);
      }, n.verbose = t("verbose"), n.debug = t("debug"), n.info = t("info"), n.warn = t("warn"), n.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
), _d = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), s, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; ) a.push(s.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}, bd = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, wd = (
  /** @class */
  function() {
    function e(t) {
      this._entries = t ? new Map(t) : /* @__PURE__ */ new Map();
    }
    return e.prototype.getEntry = function(t) {
      var n = this._entries.get(t);
      if (n)
        return Object.assign({}, n);
    }, e.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(t) {
        var n = _d(t, 2), r = n[0], s = n[1];
        return [r, s];
      });
    }, e.prototype.setEntry = function(t, n) {
      var r = new e(this._entries);
      return r._entries.set(t, n), r;
    }, e.prototype.removeEntry = function(t) {
      var n = new e(this._entries);
      return n._entries.delete(t), n;
    }, e.prototype.removeEntries = function() {
      for (var t, n, r = [], s = 0; s < arguments.length; s++)
        r[s] = arguments[s];
      var a = new e(this._entries);
      try {
        for (var o = bd(r), i = o.next(); !i.done; i = o.next()) {
          var l = i.value;
          a._entries.delete(l);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          i && !i.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return a;
    }, e.prototype.clear = function() {
      return new e();
    }, e;
  }()
);
et.instance();
function xd(e) {
  return e === void 0 && (e = {}), new wd(new Map(Object.entries(e)));
}
function ja(e) {
  return Symbol.for(e);
}
var Td = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      var n = this;
      n._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), n.getValue = function(r) {
        return n._currentContext.get(r);
      }, n.setValue = function(r, s) {
        var a = new e(n._currentContext);
        return a._currentContext.set(r, s), a;
      }, n.deleteValue = function(r) {
        var s = new e(n._currentContext);
        return s._currentContext.delete(r), s;
      };
    }
    return e;
  }()
), kd = new Td(), Et = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
      r.__proto__ = s;
    } || function(r, s) {
      for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (r[a] = s[a]);
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
}(), Sd = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.createGauge = function(t, n) {
      return $d;
    }, e.prototype.createHistogram = function(t, n) {
      return jd;
    }, e.prototype.createCounter = function(t, n) {
      return Pd;
    }, e.prototype.createUpDownCounter = function(t, n) {
      return Dd;
    }, e.prototype.createObservableGauge = function(t, n) {
      return Ud;
    }, e.prototype.createObservableCounter = function(t, n) {
      return qd;
    }, e.prototype.createObservableUpDownCounter = function(t, n) {
      return Ld;
    }, e.prototype.addBatchObservableCallback = function(t, n) {
    }, e.prototype.removeBatchObservableCallback = function(t) {
    }, e;
  }()
), Un = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), Id = (
  /** @class */
  function(e) {
    Et(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(n, r) {
    }, t;
  }(Un)
), Cd = (
  /** @class */
  function(e) {
    Et(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.add = function(n, r) {
    }, t;
  }(Un)
), Rd = (
  /** @class */
  function(e) {
    Et(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(n, r) {
    }, t;
  }(Un)
), Ed = (
  /** @class */
  function(e) {
    Et(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.record = function(n, r) {
    }, t;
  }(Un)
), Rr = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.addCallback = function(t) {
    }, e.prototype.removeCallback = function(t) {
    }, e;
  }()
), Ad = (
  /** @class */
  function(e) {
    Et(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Rr)
), Od = (
  /** @class */
  function(e) {
    Et(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Rr)
), Md = (
  /** @class */
  function(e) {
    Et(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Rr)
), Nd = new Sd(), Pd = new Id(), $d = new Rd(), jd = new Ed(), Dd = new Cd(), qd = new Ad(), Ud = new Od(), Ld = new Md(), Zd = {
  get: function(e, t) {
    if (e != null)
      return e[t];
  },
  keys: function(e) {
    return e == null ? [] : Object.keys(e);
  }
}, Vd = {
  set: function(e, t, n) {
    e != null && (e[t] = n);
  }
}, Bd = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), s, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; ) a.push(s.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}, Fd = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, a; r < s; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Gd = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return kd;
    }, e.prototype.with = function(t, n, r) {
      for (var s = [], a = 3; a < arguments.length; a++)
        s[a - 3] = arguments[a];
      return n.call.apply(n, Fd([r], Bd(s), !1));
    }, e.prototype.bind = function(t, n) {
      return n;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), Jd = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), s, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; ) a.push(s.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}, Hd = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, a; r < s; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Qn = "context", zd = new Gd(), Ln = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return rn(Qn, t, et.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, n, r) {
      for (var s, a = [], o = 3; o < arguments.length; o++)
        a[o - 3] = arguments[o];
      return (s = this._getContextManager()).with.apply(s, Hd([t, n, r], Jd(a), !1));
    }, e.prototype.bind = function(t, n) {
      return this._getContextManager().bind(t, n);
    }, e.prototype._getContextManager = function() {
      return Ct(Qn) || zd;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), sn(Qn, et.instance());
    }, e;
  }()
), fr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(fr || (fr = {}));
var Da = "0000000000000000", qa = "00000000000000000000000000000000", Wd = {
  traceId: qa,
  spanId: Da,
  traceFlags: fr.NONE
}, Ht = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = Wd), this._spanContext = t;
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
  }()
), Er = ja("OpenTelemetry Context Key SPAN");
function Ar(e) {
  return e.getValue(Er) || void 0;
}
function Yd() {
  return Ar(Ln.getInstance().active());
}
function Or(e, t) {
  return e.setValue(Er, t);
}
function Kd(e) {
  return e.deleteValue(Er);
}
function Xd(e, t) {
  return Or(e, new Ht(t));
}
function Ua(e) {
  var t;
  return (t = Ar(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var Qd = /^([0-9a-f]{32})$/i, ep = /^[0-9a-f]{16}$/i;
function tp(e) {
  return Qd.test(e) && e !== qa;
}
function np(e) {
  return ep.test(e) && e !== Da;
}
function La(e) {
  return tp(e.traceId) && np(e.spanId);
}
function rp(e) {
  return new Ht(e);
}
var er = Ln.getInstance(), Za = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, n, r) {
      r === void 0 && (r = er.active());
      var s = !!(n != null && n.root);
      if (s)
        return new Ht();
      var a = r && Ua(r);
      return sp(a) && La(a) ? new Ht(a) : new Ht();
    }, e.prototype.startActiveSpan = function(t, n, r, s) {
      var a, o, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = n : arguments.length === 3 ? (a = n, i = r) : (a = n, o = r, i = s);
        var l = o ?? er.active(), u = this.startSpan(t, a, l), c = Or(l, u);
        return er.with(c, i, void 0, u);
      }
    }, e;
  }()
);
function sp(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var ap = new Za(), op = (
  /** @class */
  function() {
    function e(t, n, r, s) {
      this._provider = t, this.name = n, this.version = r, this.options = s;
    }
    return e.prototype.startSpan = function(t, n, r) {
      return this._getTracer().startSpan(t, n, r);
    }, e.prototype.startActiveSpan = function(t, n, r, s) {
      var a = this._getTracer();
      return Reflect.apply(a.startActiveSpan, a, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : ap;
    }, e;
  }()
), ip = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, n, r) {
      return new Za();
    }, e;
  }()
), lp = new ip(), ys = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, n, r) {
      var s;
      return (s = this.getDelegateTracer(t, n, r)) !== null && s !== void 0 ? s : new op(this, t, n, r);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : lp;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, n, r) {
      var s;
      return (s = this._delegate) === null || s === void 0 ? void 0 : s.getTracer(t, n, r);
    }, e;
  }()
), On;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(On || (On = {}));
Ln.getInstance();
et.instance();
var up = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getMeter = function(t, n, r) {
      return Nd;
    }, e;
  }()
), cp = new up(), tr = "metrics", dp = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalMeterProvider = function(t) {
      return rn(tr, t, et.instance());
    }, e.prototype.getMeterProvider = function() {
      return Ct(tr) || cp;
    }, e.prototype.getMeter = function(t, n, r) {
      return this.getMeterProvider().getMeter(t, n, r);
    }, e.prototype.disable = function() {
      sn(tr, et.instance());
    }, e;
  }()
);
dp.getInstance();
var pp = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.inject = function(t, n) {
    }, e.prototype.extract = function(t, n) {
      return t;
    }, e.prototype.fields = function() {
      return [];
    }, e;
  }()
), Mr = ja("OpenTelemetry Baggage Key");
function Va(e) {
  return e.getValue(Mr) || void 0;
}
function hp() {
  return Va(Ln.getInstance().active());
}
function fp(e, t) {
  return e.setValue(Mr, t);
}
function mp(e) {
  return e.deleteValue(Mr);
}
var nr = "propagation", gp = new pp(), yp = (
  /** @class */
  function() {
    function e() {
      this.createBaggage = xd, this.getBaggage = Va, this.getActiveBaggage = hp, this.setBaggage = fp, this.deleteBaggage = mp;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalPropagator = function(t) {
      return rn(nr, t, et.instance());
    }, e.prototype.inject = function(t, n, r) {
      return r === void 0 && (r = Vd), this._getGlobalPropagator().inject(t, n, r);
    }, e.prototype.extract = function(t, n, r) {
      return r === void 0 && (r = Zd), this._getGlobalPropagator().extract(t, n, r);
    }, e.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    }, e.prototype.disable = function() {
      sn(nr, et.instance());
    }, e.prototype._getGlobalPropagator = function() {
      return Ct(nr) || gp;
    }, e;
  }()
);
yp.getInstance();
var rr = "trace", vp = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new ys(), this.wrapSpanContext = rp, this.isSpanContextValid = La, this.deleteSpan = Kd, this.getSpan = Ar, this.getActiveSpan = Yd, this.getSpanContext = Ua, this.setSpan = Or, this.setSpanContext = Xd;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var n = rn(rr, this._proxyTracerProvider, et.instance());
      return n && this._proxyTracerProvider.setDelegate(t), n;
    }, e.prototype.getTracerProvider = function() {
      return Ct(rr) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, n) {
      return this.getTracerProvider().getTracer(t, n);
    }, e.prototype.disable = function() {
      sn(rr, et.instance()), this._proxyTracerProvider = new ys();
    }, e;
  }()
), _p = vp.getInstance(), bp = Object.defineProperty, wp = (e, t) => {
  for (var n in t)
    bp(e, n, { get: t[n], enumerable: !0 });
}, Ba = "AI_InvalidArgumentError", Fa = `vercel.ai.error.${Ba}`, xp = Symbol.for(Fa), Ga, le = class extends j {
  constructor({
    parameter: e,
    value: t,
    message: n
  }) {
    super({
      name: Ba,
      message: `Invalid argument for parameter ${e}: ${n}`
    }), this[Ga] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, Fa);
  }
};
Ga = xp;
var Ja = "AI_InvalidStreamPartError", Ha = `vercel.ai.error.${Ja}`, Tp = Symbol.for(Ha), za, kf = class extends j {
  constructor({
    chunk: e,
    message: t
  }) {
    super({ name: Ja, message: t }), this[za] = !0, this.chunk = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ha);
  }
};
za = Tp;
var Wa = "AI_InvalidToolArgumentsError", Ya = `vercel.ai.error.${Wa}`, kp = Symbol.for(Ya), Ka, Xa = class extends j {
  constructor({
    toolArgs: e,
    toolName: t,
    cause: n,
    message: r = `Invalid arguments for tool ${t}: ${en(
      n
    )}`
  }) {
    super({ name: Wa, message: r, cause: n }), this[Ka] = !0, this.toolArgs = e, this.toolName = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, Ya);
  }
};
Ka = kp;
var Sp = "AI_MCPClientError", Qa = `vercel.ai.error.${Sp}`, Ip = Symbol.for(Qa), eo, _e = class extends j {
  constructor({
    name: e = "MCPClientError",
    message: t,
    cause: n
  }) {
    super({ name: e, message: t, cause: n }), this[eo] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, Qa);
  }
};
eo = Ip;
var to = "AI_NoImageGeneratedError", no = `vercel.ai.error.${to}`, Cp = Symbol.for(no), ro, Rp = class extends j {
  constructor({
    message: e = "No image generated.",
    cause: t,
    responses: n
  }) {
    super({ name: to, message: e, cause: t }), this[ro] = !0, this.responses = n;
  }
  static isInstance(e) {
    return j.hasMarker(e, no);
  }
};
ro = Cp;
var so = "AI_NoObjectGeneratedError", ao = `vercel.ai.error.${so}`, Ep = Symbol.for(ao), oo, dt = class extends j {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: n,
    response: r,
    usage: s,
    finishReason: a
  }) {
    super({ name: so, message: e, cause: t }), this[oo] = !0, this.text = n, this.response = r, this.usage = s, this.finishReason = a;
  }
  static isInstance(e) {
    return j.hasMarker(e, ao);
  }
};
oo = Ep;
var io = "AI_NoOutputSpecifiedError", lo = `vercel.ai.error.${io}`, Ap = Symbol.for(lo), uo, co = class extends j {
  // used in isInstance
  constructor({ message: e = "No output specified." } = {}) {
    super({ name: io, message: e }), this[uo] = !0;
  }
  static isInstance(e) {
    return j.hasMarker(e, lo);
  }
};
uo = Ap;
var po = "AI_NoSuchToolError", ho = `vercel.ai.error.${po}`, Op = Symbol.for(ho), fo, mr = class extends j {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: n = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: po, message: n }), this[fo] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, ho);
  }
};
fo = Op;
var mo = "AI_ToolCallRepairError", go = `vercel.ai.error.${mo}`, Mp = Symbol.for(go), yo, Np = class extends j {
  constructor({
    cause: e,
    originalError: t,
    message: n = `Error repairing tool call: ${en(e)}`
  }) {
    super({ name: mo, message: n, cause: e }), this[yo] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return j.hasMarker(e, go);
  }
};
yo = Mp;
var vo = "AI_ToolExecutionError", _o = `vercel.ai.error.${vo}`, Pp = Symbol.for(_o), bo, wo = class extends j {
  constructor({
    toolArgs: e,
    toolName: t,
    toolCallId: n,
    cause: r,
    message: s = `Error executing tool ${t}: ${en(r)}`
  }) {
    super({ name: vo, message: s, cause: r }), this[bo] = !0, this.toolArgs = e, this.toolName = t, this.toolCallId = n;
  }
  static isInstance(e) {
    return j.hasMarker(e, _o);
  }
};
bo = Pp;
var xo = "AI_InvalidDataContentError", To = `vercel.ai.error.${xo}`, $p = Symbol.for(To), ko, vs = class extends j {
  constructor({
    content: e,
    cause: t,
    message: n = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`
  }) {
    super({ name: xo, message: n, cause: t }), this[ko] = !0, this.content = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, To);
  }
};
ko = $p;
var So = "AI_InvalidMessageRoleError", Io = `vercel.ai.error.${So}`, jp = Symbol.for(Io), Co, Dp = class extends j {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: So, message: t }), this[Co] = !0, this.role = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Io);
  }
};
Co = jp;
var Ro = "AI_MessageConversionError", Eo = `vercel.ai.error.${Ro}`, qp = Symbol.for(Eo), Ao, _s = class extends j {
  constructor({
    originalMessage: e,
    message: t
  }) {
    super({ name: Ro, message: t }), this[Ao] = !0, this.originalMessage = e;
  }
  static isInstance(e) {
    return j.hasMarker(e, Eo);
  }
};
Ao = qp;
var Oo = "AI_DownloadError", Mo = `vercel.ai.error.${Oo}`, Up = Symbol.for(Mo), No, sr = class extends j {
  constructor({
    url: e,
    statusCode: t,
    statusText: n,
    cause: r,
    message: s = r == null ? `Failed to download ${e}: ${t} ${n}` : `Failed to download ${e}: ${r}`
  }) {
    super({ name: Oo, message: s, cause: r }), this[No] = !0, this.url = e, this.statusCode = t, this.statusText = n;
  }
  static isInstance(e) {
    return j.hasMarker(e, Mo);
  }
};
No = Up;
var Po = "AI_RetryError", $o = `vercel.ai.error.${Po}`, Lp = Symbol.for($o), jo, bs = class extends j {
  constructor({
    message: e,
    reason: t,
    errors: n
  }) {
    super({ name: Po, message: e }), this[jo] = !0, this.reason = t, this.errors = n, this.lastError = n[n.length - 1];
  }
  static isInstance(e) {
    return j.hasMarker(e, $o);
  }
};
jo = Lp;
function an(e, t) {
  const n = new Headers(e ?? {});
  for (const [r, s] of Object.entries(t))
    n.has(r) || n.set(r, s);
  return n;
}
function Do({
  status: e,
  statusText: t,
  headers: n,
  textStream: r
}) {
  return new Response(r.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: an(n, {
      "content-type": "text/plain; charset=utf-8"
    })
  });
}
function qo({
  response: e,
  status: t,
  statusText: n,
  headers: r,
  stream: s
}) {
  e.writeHead(t ?? 200, n, r);
  const a = s.getReader();
  (async () => {
    try {
      for (; ; ) {
        const { done: i, value: l } = await a.read();
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
function Uo({
  response: e,
  status: t,
  statusText: n,
  headers: r,
  textStream: s
}) {
  qo({
    response: e,
    status: t,
    statusText: n,
    headers: Object.fromEntries(
      an(r, {
        "content-type": "text/plain; charset=utf-8"
      }).entries()
    ),
    stream: s.pipeThrough(new TextEncoderStream())
  });
}
function Sf({
  messages: e,
  message: t
}) {
  return [
    ...e.length > 0 && e[e.length - 1].id === t.id ? e.slice(0, -1) : e,
    t
  ];
}
var Lo = se([
  f({
    type: C("text"),
    text: d()
  }),
  f({
    type: C("error"),
    errorText: d()
  }),
  f({
    type: C("tool-call-streaming-start"),
    toolCallId: d(),
    toolName: d()
  }),
  f({
    type: C("tool-call-delta"),
    toolCallId: d(),
    argsTextDelta: d()
  }),
  f({
    type: C("tool-call"),
    toolCallId: d(),
    toolName: d(),
    args: Me()
  }),
  f({
    type: C("tool-result"),
    toolCallId: d(),
    result: Me(),
    providerMetadata: Pt().optional()
  }),
  f({
    type: C("reasoning"),
    text: d(),
    providerMetadata: Ke(Pt()).optional()
  }),
  f({
    type: C("source"),
    sourceType: C("url"),
    id: d(),
    url: d(),
    title: d().optional(),
    providerMetadata: Pt().optional()
    // Use z.any() for generic metadata
  }),
  f({
    type: C("file"),
    url: d(),
    mediaType: d()
  }),
  f({
    type: d().startsWith("data-"),
    id: d().optional(),
    data: Me()
  }),
  f({
    type: C("metadata"),
    value: f({ metadata: Me() })
  }),
  f({
    type: C("start-step"),
    metadata: Me().optional()
  }),
  f({
    type: C("finish-step"),
    metadata: Me().optional()
  }),
  f({
    type: C("start"),
    messageId: d().optional(),
    metadata: Me().optional()
  }),
  f({
    type: C("finish"),
    metadata: Me().optional()
  }),
  f({
    type: C("reasoning-part-finish")
  })
]);
async function Zn({
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
function Mn(e, t) {
  if (e === void 0 && t === void 0)
    return;
  if (e === void 0)
    return t;
  if (t === void 0)
    return e;
  const n = { ...e };
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      const s = t[r];
      if (s === void 0)
        continue;
      const a = r in e ? e[r] : void 0, o = s !== null && typeof s == "object" && !Array.isArray(s) && !(s instanceof Date) && !(s instanceof RegExp), i = a != null && typeof a == "object" && !Array.isArray(a) && !(a instanceof Date) && !(a instanceof RegExp);
      o && i ? n[r] = Mn(
        a,
        s
      ) : n[r] = s;
    }
  return n;
}
function Zp(e) {
  const t = ["ROOT"];
  let n = -1, r = null;
  function s(l, u, c) {
    switch (l) {
      case '"': {
        n = u, t.pop(), t.push(c), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = u, r = u, t.pop(), t.push(c), t.push("INSIDE_LITERAL");
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
        n = u, t.pop(), t.push(c), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = u, t.pop(), t.push(c), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = u, t.pop(), t.push(c), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function a(l, u) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        n = u, t.pop();
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
        n = u, t.pop();
        break;
      }
    }
  }
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    switch (t[t.length - 1]) {
      case "ROOT":
        s(u, l, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            n = l, t.pop();
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
        s(u, l, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        a(u, l);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
          case '"': {
            t.pop(), n = l;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            n = l;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (u) {
          case "]": {
            n = l, t.pop();
            break;
          }
          default: {
            n = l, s(u, l, "INSIDE_ARRAY_AFTER_VALUE");
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
            n = l, t.pop();
            break;
          }
          default: {
            n = l;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        s(u, l, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = l;
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
            n = l;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(u, l);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(u, l);
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
        const p = e.substring(r, l + 1);
        !"false".startsWith(p) && !"true".startsWith(p) && !"null".startsWith(p) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? a(u, l) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l)) : n = l;
        break;
      }
    }
  }
  let i = e.slice(0, n + 1);
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
        const c = e.substring(r, e.length);
        "true".startsWith(c) ? i += "true".slice(c.length) : "false".startsWith(c) ? i += "false".slice(c.length) : "null".startsWith(c) && (i += "null".slice(c.length));
      }
    }
  return i;
}
async function Nr(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = await It({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = await It({ text: Zp(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
function Nn(e) {
  return e == null ? void 0 : e.reduce((t, n) => {
    var r;
    return Math.max(t, (r = n.step) != null ? r : 0);
  }, 0);
}
function qt(e) {
  return e.parts.filter(
    (t) => t.type === "tool-invocation"
  ).map((t) => t.toolInvocation);
}
function Pr({
  lastMessage: e,
  newMessageId: t = "no-id"
} = {}) {
  var n;
  const r = (e == null ? void 0 : e.role) === "assistant", s = r ? 1 + ((n = Nn(qt(e))) != null ? n : 0) : 0;
  return {
    message: r ? structuredClone(e) : {
      id: t,
      metadata: {},
      role: "assistant",
      parts: []
    },
    activeTextPart: void 0,
    activeReasoningPart: void 0,
    partialToolCalls: {},
    step: s
  };
}
function $r({
  stream: e,
  onToolCall: t,
  messageMetadataSchema: n,
  runUpdateMessageJob: r
}) {
  return e.pipeThrough(
    new TransformStream({
      async transform(s, a) {
        await r(async ({ state: o, write: i }) => {
          function l(c, p) {
            const h = o.message.parts.find(
              (g) => g.type === "tool-invocation" && g.toolInvocation.toolCallId === c
            );
            h != null ? h.toolInvocation = p : o.message.parts.push({
              type: "tool-invocation",
              toolInvocation: p
            });
          }
          async function u(c) {
            if (c != null) {
              const p = o.message.metadata != null ? Mn(o.message.metadata, c) : c;
              n != null && await Ta({
                value: p,
                schema: n
              }), o.message.metadata = p;
            }
          }
          switch (s.type) {
            case "text": {
              o.activeTextPart == null ? (o.activeTextPart = {
                type: "text",
                text: s.text
              }, o.message.parts.push(o.activeTextPart)) : o.activeTextPart.text += s.text, i();
              break;
            }
            case "reasoning": {
              o.activeReasoningPart == null ? (o.activeReasoningPart = {
                type: "reasoning",
                text: s.text,
                providerMetadata: s.providerMetadata
              }, o.message.parts.push(o.activeReasoningPart)) : (o.activeReasoningPart.text += s.text, o.activeReasoningPart.providerMetadata = s.providerMetadata), i();
              break;
            }
            case "reasoning-part-finish": {
              o.activeReasoningPart != null && (o.activeReasoningPart = void 0);
              break;
            }
            case "file": {
              o.message.parts.push({
                type: "file",
                mediaType: s.mediaType,
                url: s.url
              }), i();
              break;
            }
            case "source": {
              o.message.parts.push({
                type: "source",
                source: {
                  sourceType: "url",
                  id: s.id,
                  url: s.url,
                  title: s.title,
                  providerMetadata: s.providerMetadata
                }
              }), i();
              break;
            }
            case "tool-call-streaming-start": {
              const c = qt(o.message);
              o.partialToolCalls[s.toolCallId] = {
                text: "",
                step: o.step,
                toolName: s.toolName,
                index: c.length
              }, l(s.toolCallId, {
                state: "partial-call",
                step: o.step,
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: void 0
              }), i();
              break;
            }
            case "tool-call-delta": {
              const c = o.partialToolCalls[s.toolCallId];
              c.text += s.argsTextDelta;
              const { value: p } = await Nr(
                c.text
              );
              l(s.toolCallId, {
                state: "partial-call",
                step: c.step,
                toolCallId: s.toolCallId,
                toolName: c.toolName,
                args: p
              }), i();
              break;
            }
            case "tool-call": {
              if (l(s.toolCallId, {
                state: "call",
                step: o.step,
                toolCallId: s.toolCallId,
                toolName: s.toolName,
                args: s.args
              }), i(), t) {
                const c = await t({
                  toolCall: s
                });
                c != null && (l(s.toolCallId, {
                  state: "result",
                  step: o.step,
                  toolCallId: s.toolCallId,
                  toolName: s.toolName,
                  args: s.args,
                  result: c
                }), i());
              }
              break;
            }
            case "tool-result": {
              const c = qt(o.message);
              if (c == null)
                throw new Error("tool_result must be preceded by a tool_call");
              const p = c.findIndex(
                (h) => h.toolCallId === s.toolCallId
              );
              if (p === -1)
                throw new Error(
                  "tool_result must be preceded by a tool_call with the same toolCallId"
                );
              l(s.toolCallId, {
                ...c[p],
                state: "result",
                result: s.result
              }), i();
              break;
            }
            case "start-step": {
              o.message.parts.push({ type: "step-start" }), await u(s.metadata), i();
              break;
            }
            case "finish-step": {
              o.step += 1, o.activeTextPart = void 0, o.activeReasoningPart = void 0, await u(s.metadata), s.metadata != null && i();
              break;
            }
            case "start": {
              s.messageId != null && (o.message.id = s.messageId), await u(s.metadata), (s.messageId != null || s.metadata != null) && i();
              break;
            }
            case "finish": {
              await u(s.metadata), s.metadata != null && i();
              break;
            }
            case "metadata": {
              await u(s.metadata), s.metadata != null && i();
              break;
            }
            case "error":
              throw new Error(s.errorText);
            default:
              if (s.type.startsWith("data-")) {
                const c = s.id != null ? o.message.parts.find(
                  (p) => s.type === p.type && s.id === p.id
                ) : void 0;
                c != null ? c.value = Mn(
                  c.data,
                  s.data
                ) : o.message.parts.push({
                  type: s.type,
                  id: s.id,
                  value: s.data
                }), i();
              }
          }
          a.enqueue(s);
        });
      }
    })
  );
}
function Vp({
  stream: e
}) {
  return e.pipeThrough(
    new TransformStream({
      start(t) {
        t.enqueue({ type: "start" }), t.enqueue({ type: "start-step" });
      },
      async transform(t, n) {
        n.enqueue({ type: "text", text: t });
      },
      async flush(t) {
        t.enqueue({ type: "finish-step" }), t.enqueue({ type: "finish" });
      }
    })
  );
}
var Zo = () => fetch;
async function Vo({
  api: e,
  body: t,
  streamProtocol: n = "ui-message",
  credentials: r,
  headers: s,
  abortController: a,
  fetch: o = Zo(),
  requestType: i = "generate"
}) {
  var l, u, c;
  const p = i === "resume" ? await o(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...s
    },
    signal: (l = a == null ? void 0 : a()) == null ? void 0 : l.signal,
    credentials: r
  }) : await o(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...s
    },
    signal: (u = a == null ? void 0 : a()) == null ? void 0 : u.signal,
    credentials: r
  });
  if (!p.ok)
    throw new Error(
      (c = await p.text()) != null ? c : "Failed to fetch the chat response."
    );
  if (!p.body)
    throw new Error("The response body is empty.");
  return n === "text" ? Vp({
    stream: p.body.pipeThrough(new TextDecoderStream())
  }) : Sr({
    stream: p.body,
    schema: Lo
  }).pipeThrough(
    new TransformStream({
      async transform(h, g) {
        if (!h.success)
          throw h.error;
        g.enqueue(h.value);
      }
    })
  );
}
async function Bp({
  stream: e,
  onUpdate: t,
  onFinish: n,
  onToolCall: r,
  generateId: s,
  lastMessage: a,
  messageMetadataSchema: o
}) {
  const i = Pr({
    lastMessage: a,
    newMessageId: s()
  });
  await Zn({
    stream: $r({
      stream: e,
      onToolCall: r,
      messageMetadataSchema: o,
      runUpdateMessageJob: async (u) => {
        await u({
          state: i,
          write: () => {
            t({ message: i.message });
          }
        });
      }
    }),
    onError: (u) => {
      throw u;
    }
  }), n == null || n({ message: i.message });
}
async function If({
  api: e,
  body: t,
  streamProtocol: n = "ui-message",
  credentials: r,
  headers: s,
  abortController: a,
  onUpdate: o,
  onFinish: i,
  onToolCall: l,
  generateId: u,
  fetch: c = Zo(),
  lastMessage: p,
  requestType: h = "generate",
  messageMetadataSchema: g
}) {
  const v = await Vo({
    api: e,
    body: t,
    streamProtocol: n,
    credentials: r,
    headers: s,
    abortController: a,
    fetch: c,
    requestType: h
  });
  await Bp({
    stream: v,
    onUpdate: o,
    onFinish: i,
    onToolCall: l,
    generateId: u,
    lastMessage: p,
    messageMetadataSchema: g
  });
}
async function Fp({
  stream: e,
  onTextPart: t
}) {
  const n = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: r, value: s } = await n.read();
    if (r)
      break;
    await t(s);
  }
}
var Gp = () => fetch;
async function Cf({
  api: e,
  prompt: t,
  credentials: n,
  headers: r,
  body: s,
  streamProtocol: a = "data",
  setCompletion: o,
  setLoading: i,
  setError: l,
  setAbortController: u,
  onFinish: c,
  onError: p,
  fetch: h = Gp()
}) {
  var g;
  try {
    i(!0), l(void 0);
    const v = new AbortController();
    u(v), o("");
    const y = await h(e, {
      method: "POST",
      body: JSON.stringify({
        prompt: t,
        ...s
      }),
      credentials: n,
      headers: {
        "Content-Type": "application/json",
        ...r
      },
      signal: v.signal
    }).catch((b) => {
      throw b;
    });
    if (!y.ok)
      throw new Error(
        (g = await y.text()) != null ? g : "Failed to fetch the chat response."
      );
    if (!y.body)
      throw new Error("The response body is empty.");
    let m = "";
    switch (a) {
      case "text": {
        await Fp({
          stream: y.body,
          onTextPart: (b) => {
            m += b, o(m);
          }
        });
        break;
      }
      case "data": {
        await Zn({
          stream: Sr({
            stream: y.body,
            schema: Lo
          }).pipeThrough(
            new TransformStream({
              async transform(b) {
                if (!b.success)
                  throw b.error;
                const S = b.value;
                if (S.type === "text")
                  m += S.text, o(m);
                else if (S.type === "error")
                  throw new Error(S.errorText);
              }
            })
          ),
          onError: (b) => {
            throw b;
          }
        });
        break;
      }
      default: {
        const b = a;
        throw new Error(`Unknown stream protocol: ${b}`);
      }
    }
    return c && c(t, m), u(null), m;
  } catch (v) {
    if (v.name === "AbortError")
      return u(null), null;
    v instanceof Error && p && p(v), l(v);
  } finally {
    i(!1);
  }
}
var ws = class {
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
function Jp({
  originalMaxToolInvocationStep: e,
  originalMessageCount: t,
  maxSteps: n,
  messages: r
}) {
  var s;
  const a = r[r.length - 1];
  return (
    // check if the feature is enabled:
    n > 1 && // ensure there is a last message:
    a != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (r.length > t || Nn(qt(a)) !== e) && // check that next step is possible:
    Bo(a) && // limit the number of automatic steps:
    ((s = Nn(qt(a))) != null ? s : 0) < n
  );
}
function Bo(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((r, s, a) => s.type === "step-start" ? a : r, -1), n = e.parts.slice(t + 1).filter((r) => r.type === "tool-invocation");
  return n.length > 0 && n.every((r) => "result" in r.toolInvocation);
}
function Hp({
  messages: e,
  toolCallId: t,
  toolResult: n
}) {
  const s = e[e.length - 1].parts.find(
    (a) => a.type === "tool-invocation" && a.toolInvocation.toolCallId === t
  );
  s != null && (s.toolInvocation = {
    ...s.toolInvocation,
    state: "result",
    result: n
  });
}
var zp = class {
  constructor({
    chats: e = {},
    generateId: t,
    messageMetadataSchema: n,
    transport: r,
    maxSteps: s = 1
  }) {
    this.chats = new Map(
      Object.entries(e).map(([a, o]) => [
        a,
        {
          messages: [...o.messages],
          status: "ready",
          activeResponse: void 0,
          error: void 0,
          jobExecutor: new ws()
        }
      ])
    ), this.maxSteps = s, this.transport = r, this.subscribers = /* @__PURE__ */ new Set(), this.generateId = t ?? st, this.messageMetadataSchema = n;
  }
  hasChat(e) {
    return this.chats.has(e);
  }
  addChat(e, t) {
    this.chats.set(e, {
      messages: t,
      status: "ready",
      jobExecutor: new ws()
    });
  }
  getChats() {
    return Array.from(this.chats.entries());
  }
  get chatCount() {
    return this.chats.size;
  }
  getStatus(e) {
    return this.getChat(e).status;
  }
  setStatus({
    id: e,
    status: t,
    error: n
  }) {
    const r = this.getChat(e);
    r.status !== t && (r.status = t, r.error = n, this.emit({ type: "chat-status-changed", chatId: e, error: n }));
  }
  getError(e) {
    return this.getChat(e).error;
  }
  getMessages(e) {
    return this.getChat(e).messages;
  }
  getLastMessage(e) {
    const t = this.getChat(e);
    return t.messages[t.messages.length - 1];
  }
  subscribe(e) {
    return this.subscribers.add(e), () => this.subscribers.delete(e);
  }
  setMessages({
    id: e,
    messages: t
  }) {
    this.getChat(e).messages = [...t], this.emit({ type: "chat-messages-changed", chatId: e });
  }
  removeAssistantResponse(e) {
    const t = this.getChat(e), n = t.messages[t.messages.length - 1];
    if (n == null)
      throw new Error("Cannot remove assistant response from empty chat");
    if (n.role !== "assistant")
      throw new Error("Last message is not an assistant message");
    this.setMessages({ id: e, messages: t.messages.slice(0, -1) });
  }
  async submitMessage({
    chatId: e,
    message: t,
    headers: n,
    body: r,
    onError: s,
    onToolCall: a,
    onFinish: o
  }) {
    var i;
    const u = this.getChat(e).messages;
    await this.triggerRequest({
      chatId: e,
      messages: u.concat({
        ...t,
        id: (i = t.id) != null ? i : this.generateId()
      }),
      headers: n,
      body: r,
      requestType: "generate",
      onError: s,
      onToolCall: a,
      onFinish: o
    });
  }
  async resubmitLastUserMessage({
    chatId: e,
    headers: t,
    body: n,
    onError: r,
    onToolCall: s,
    onFinish: a
  }) {
    const o = this.getChat(e).messages, i = o[o.length - 1].role === "assistant" ? o.slice(0, -1) : o;
    if (i.length !== 0)
      return this.triggerRequest({
        chatId: e,
        requestType: "generate",
        messages: i,
        headers: t,
        body: n,
        onError: r,
        onToolCall: s,
        onFinish: a
      });
  }
  async resumeStream({
    chatId: e,
    headers: t,
    body: n,
    onError: r,
    onToolCall: s,
    onFinish: a
  }) {
    const i = this.getChat(e).messages;
    return this.triggerRequest({
      chatId: e,
      messages: i,
      requestType: "resume",
      headers: t,
      body: n,
      onError: r,
      onToolCall: s,
      onFinish: a
    });
  }
  async addToolResult({
    chatId: e,
    toolCallId: t,
    result: n
  }) {
    const r = this.getChat(e);
    r.jobExecutor.run(async () => {
      const s = r.messages;
      if (Hp({
        messages: s,
        toolCallId: t,
        toolResult: n
      }), this.setMessages({ id: e, messages: s }), r.status === "submitted" || r.status === "streaming")
        return;
      const a = s[s.length - 1];
      Bo(a) && await this.triggerRequest({
        messages: s,
        requestType: "generate",
        chatId: e
      });
    });
  }
  async stopStream({ chatId: e }) {
    var t;
    const n = this.getChat(e);
    n.status !== "streaming" && n.status !== "submitted" || (t = n.activeResponse) != null && t.abortController && (n.activeResponse.abortController.abort(), n.activeResponse.abortController = void 0);
  }
  emit(e) {
    for (const t of this.subscribers)
      t.onChatChanged(e);
  }
  getChat(e) {
    if (!this.hasChat(e))
      throw new Error(`chat '${e}' not found`);
    return this.chats.get(e);
  }
  async triggerRequest({
    chatId: e,
    messages: t,
    requestType: n,
    headers: r,
    body: s,
    onError: a,
    onToolCall: o,
    onFinish: i
  }) {
    const l = this, u = this.getChat(e);
    this.setMessages({ id: e, messages: t }), this.setStatus({ id: e, status: "submitted", error: void 0 });
    const c = t.length, p = Nn(
      qt(t[t.length - 1])
    );
    try {
      const g = {
        state: Pr({
          lastMessage: t[t.length - 1],
          newMessageId: l.generateId()
        }),
        abortController: new AbortController()
      };
      u.activeResponse = g;
      const v = await l.transport.submitMessages({
        chatId: e,
        messages: t,
        body: s,
        headers: r,
        abortController: g.abortController,
        requestType: n
      }), y = (m) => (
        // serialize the job execution to avoid race conditions:
        u.jobExecutor.run(
          () => m({
            state: g.state,
            write: () => {
              l.setStatus({ id: e, status: "streaming" });
              const S = [
                ...g.state.message.id === t[t.length - 1].id ? t.slice(0, t.length - 1) : t,
                g.state.message
              ];
              l.setMessages({
                id: e,
                messages: S
              });
            }
          })
        )
      );
      await Zn({
        stream: $r({
          stream: v,
          onToolCall: o,
          messageMetadataSchema: l.messageMetadataSchema,
          runUpdateMessageJob: y
        }),
        onError: (m) => {
          throw m;
        }
      }), i == null || i({ message: g.state.message }), this.setStatus({ id: e, status: "ready" });
    } catch (g) {
      if (g.name === "AbortError")
        return this.setStatus({ id: e, status: "ready" }), null;
      a && g instanceof Error && a(g), this.setStatus({ id: e, status: "error", error: g });
    } finally {
      u.activeResponse = void 0;
    }
    const h = l.getMessages(e);
    Jp({
      originalMaxToolInvocationStep: p,
      originalMessageCount: c,
      maxSteps: l.maxSteps,
      messages: h
    }) && await l.triggerRequest({
      chatId: e,
      requestType: n,
      onError: a,
      onToolCall: o,
      onFinish: i,
      headers: r,
      body: s,
      messages: h
    });
  }
}, Wp = class {
  constructor({
    api: e,
    credentials: t,
    headers: n,
    body: r,
    streamProtocol: s,
    fetch: a,
    prepareRequestBody: o
  }) {
    this.api = e, this.credentials = t, this.headers = n, this.body = r, this.streamProtocol = s, this.fetch = a, this.prepareRequestBody = o;
  }
  submitMessages({
    chatId: e,
    messages: t,
    abortController: n,
    body: r,
    headers: s,
    requestType: a
  }) {
    var o, i;
    return Vo({
      api: this.api,
      headers: {
        ...this.headers,
        ...s
      },
      body: (i = (o = this.prepareRequestBody) == null ? void 0 : o.call(this, {
        id: e,
        // TODO change to chatId
        messages: t,
        ...this.body,
        ...r
      })) != null ? i : {
        id: e,
        // TODO change to chatId
        messages: t,
        ...this.body,
        ...r
      },
      streamProtocol: this.streamProtocol,
      credentials: this.credentials,
      abortController: () => n,
      fetch: this.fetch,
      requestType: a
    });
  }
};
async function Rf(e) {
  if (e == null)
    return [];
  if (!globalThis.FileList || !(e instanceof globalThis.FileList))
    throw new Error("FileList is not supported in the current environment");
  return Promise.all(
    Array.from(e).map(async (t) => {
      const { name: n, type: r } = t, s = await new Promise((a, o) => {
        const i = new FileReader();
        i.onload = (l) => {
          var u;
          a((u = l.target) == null ? void 0 : u.result);
        }, i.onerror = (l) => o(l), i.readAsDataURL(t);
      });
      return {
        type: "file",
        mediaType: r,
        filename: n,
        url: s
      };
    })
  );
}
function Yp(e, t) {
  var n, r;
  const s = (n = t == null ? void 0 : t.tools) != null ? n : {}, a = [];
  for (const o of e)
    switch (o.role) {
      case "system": {
        a.push({
          role: "system",
          content: o.parts.map((i) => i.type === "text" ? i.text : "").join("")
        });
        break;
      }
      case "user": {
        a.push({
          role: "user",
          content: o.parts.filter(
            (i) => i.type === "text" || i.type === "file"
          ).map(
            (i) => i.type === "file" ? {
              type: "file",
              mediaType: i.mediaType,
              filename: i.filename,
              data: i.url
            } : i
          )
        });
        break;
      }
      case "assistant": {
        if (o.parts != null) {
          let i = function() {
            const p = [];
            for (const g of c)
              switch (g.type) {
                case "text": {
                  p.push(g);
                  break;
                }
                case "file": {
                  p.push({
                    type: "file",
                    mediaType: g.mediaType,
                    data: g.url
                  });
                  break;
                }
                case "reasoning": {
                  p.push({
                    type: "reasoning",
                    text: g.text,
                    providerOptions: g.providerMetadata
                  });
                  break;
                }
                case "tool-invocation":
                  p.push({
                    type: "tool-call",
                    toolCallId: g.toolInvocation.toolCallId,
                    toolName: g.toolInvocation.toolName,
                    args: g.toolInvocation.args
                  });
                  break;
                default: {
                  const v = g;
                  throw new Error(`Unsupported part: ${v}`);
                }
              }
            a.push({
              role: "assistant",
              content: p
            });
            const h = c.filter(
              (g) => g.type === "tool-invocation"
            ).map((g) => g.toolInvocation);
            h.length > 0 && a.push({
              role: "tool",
              content: h.map(
                (g) => {
                  if (!("result" in g))
                    throw new _s({
                      originalMessage: o,
                      message: "ToolInvocation must have a result: " + JSON.stringify(g)
                    });
                  const { toolCallId: v, toolName: y, result: m } = g, b = s[y];
                  return (b == null ? void 0 : b.experimental_toToolResultContent) != null ? {
                    type: "tool-result",
                    toolCallId: v,
                    toolName: y,
                    result: b.experimental_toToolResultContent(m),
                    experimental_content: b.experimental_toToolResultContent(m)
                  } : {
                    type: "tool-result",
                    toolCallId: v,
                    toolName: y,
                    result: m
                  };
                }
              )
            }), c = [], u = !1, l++;
          }, l = 0, u = !1, c = [];
          for (const p of o.parts)
            switch (p.type) {
              case "text": {
                u && i(), c.push(p);
                break;
              }
              case "file":
              case "reasoning": {
                c.push(p);
                break;
              }
              case "tool-invocation": {
                ((r = p.toolInvocation.step) != null ? r : 0) !== l && i(), c.push(p), u = !0;
                break;
              }
            }
          i();
          break;
        }
        break;
      }
      default: {
        const i = o.role;
        throw new _s({
          originalMessage: o,
          message: `Unsupported role: ${i}`
        });
      }
    }
  return a;
}
var Ef = Yp;
function Af({
  api: e,
  fetch: t,
  streamProtocol: n = "ui-message",
  credentials: r,
  headers: s,
  body: a,
  prepareRequestBody: o,
  generateId: i = st,
  messageMetadataSchema: l,
  maxSteps: u = 1,
  chats: c
}) {
  return new zp({
    transport: new Wp({
      api: e,
      fetch: t,
      streamProtocol: n,
      credentials: r,
      headers: s,
      body: a,
      prepareRequestBody: o
    }),
    generateId: i,
    messageMetadataSchema: l,
    maxSteps: u,
    chats: c
  });
}
function Of({
  execute: e,
  onError: t = () => "An error occurred."
  // mask error messages for safety by default
}) {
  let n;
  const r = [], s = new ReadableStream({
    start(i) {
      n = i;
    }
  });
  function a(i) {
    try {
      n.enqueue(i);
    } catch {
    }
  }
  try {
    const i = e({
      write(l) {
        a(l);
      },
      merge(l) {
        r.push(
          (async () => {
            const u = l.getReader();
            for (; ; ) {
              const { done: c, value: p } = await u.read();
              if (c)
                break;
              a(p);
            }
          })().catch((u) => {
            a({ type: "error", errorText: t(u) });
          })
        );
      },
      onError: t
    });
    i && r.push(
      i.catch((l) => {
        a({ type: "error", errorText: t(l) });
      })
    );
  } catch (i) {
    a({ type: "error", errorText: t(i) });
  }
  return new Promise(async (i) => {
    for (; r.length > 0; )
      await r.shift();
    i();
  }).finally(() => {
    try {
      n.close();
    } catch {
    }
  }), s;
}
var Fo = {
  "content-type": "text/event-stream",
  "cache-control": "no-cache",
  connection: "keep-alive",
  "x-vercel-ai-ui-message-stream": "v1",
  "x-accel-buffering": "no"
  // disable nginx buffering
}, Go = class extends TransformStream {
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
};
function Kp({
  status: e,
  statusText: t,
  headers: n,
  stream: r
}) {
  return new Response(
    r.pipeThrough(new Go()).pipeThrough(new TextEncoderStream()),
    {
      status: e,
      statusText: t,
      headers: an(n, Fo)
    }
  );
}
function Xp({
  response: e,
  status: t,
  statusText: n,
  headers: r,
  stream: s
}) {
  qo({
    response: e,
    status: t,
    statusText: n,
    headers: Object.fromEntries(
      an(r, Fo).entries()
    ),
    stream: s.pipeThrough(new Go()).pipeThrough(new TextEncoderStream())
  });
}
function Mf(e) {
  const [t, n] = e.split(",");
  if (t.split(";")[0].split(":")[1] == null || n == null)
    throw new Error("Invalid data URL format");
  try {
    return window.atob(n);
  } catch {
    throw new Error("Error decoding data URL");
  }
}
function Pn(e, t) {
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
    for (let s = 0; s < e.length; s++)
      if (!Pn(e[s], t[s]))
        return !1;
    return !0;
  }
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const s of n)
    if (!r.includes(s) || !Pn(e[s], t[s]))
      return !1;
  return !0;
}
function Nf(e, t) {
  if (e.length !== t.length)
    throw new le({
      parameter: "vector1,vector2",
      value: { vector1Length: e.length, vector2Length: t.length },
      message: "Vectors must have the same length"
    });
  const n = e.length;
  if (n === 0)
    return 0;
  let r = 0, s = 0, a = 0;
  for (let o = 0; o < n; o++) {
    const i = e[o], l = t[o];
    r += i * i, s += l * l, a += i * l;
  }
  return r === 0 || s === 0 ? 0 : a / (Math.sqrt(r) * Math.sqrt(s));
}
function Pf({
  chunks: e,
  initialDelayInMs: t = 0,
  chunkDelayInMs: n = 0,
  _internal: r
}) {
  var s;
  const a = (s = r == null ? void 0 : r.delay) != null ? s : Tr;
  let o = 0;
  return new ReadableStream({
    async pull(i) {
      o < e.length ? (await a(o === 0 ? t : n), i.enqueue(e[o++])) : i.close();
    }
  });
}
var Qp = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: n = 2
} = {}) => async (r) => Jo(r, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: n
});
async function Jo(e, {
  maxRetries: t,
  delayInMs: n,
  backoffFactor: r
}, s = []) {
  try {
    return await e();
  } catch (a) {
    if (cn(a) || t === 0)
      throw a;
    const o = Kl(a), i = [...s, a], l = i.length;
    if (l > t)
      throw new bs({
        message: `Failed after ${l} attempts. Last error: ${o}`,
        reason: "maxRetriesExceeded",
        errors: i
      });
    if (a instanceof Error && $e.isInstance(a) && a.isRetryable === !0 && l <= t)
      return await Tr(n), Jo(
        e,
        { maxRetries: t, delayInMs: r * n, backoffFactor: r },
        i
      );
    throw l === 1 ? a : new bs({
      message: `Failed after ${l} attempts with non-retryable error: '${o}'`,
      reason: "errorNotRetryable",
      errors: i
    });
  }
}
function it({
  maxRetries: e
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new le({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new le({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const t = e ?? 2;
  return {
    maxRetries: t,
    retry: Qp({ maxRetries: t })
  };
}
function Ee({
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
function Lt({
  model: e,
  settings: t,
  telemetry: n,
  headers: r
}) {
  var s;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    // settings:
    ...Object.entries(t).reduce((a, [o, i]) => (a[`ai.settings.${o}`] = i, a), {}),
    // add metadata as attributes:
    ...Object.entries((s = n == null ? void 0 : n.metadata) != null ? s : {}).reduce(
      (a, [o, i]) => (a[`ai.telemetry.metadata.${o}`] = i, a),
      {}
    ),
    // request headers
    ...Object.entries(r ?? {}).reduce((a, [o, i]) => (i !== void 0 && (a[`ai.request.headers.${o}`] = i), a), {})
  };
}
var eh = {
  startSpan() {
    return un;
  },
  startActiveSpan(e, t, n, r) {
    if (typeof t == "function")
      return t(un);
    if (typeof n == "function")
      return n(un);
    if (typeof r == "function")
      return r(un);
  }
}, un = {
  spanContext() {
    return th;
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
}, th = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function Zt({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || _p.getTracer("ai") : eh;
}
function Ae({
  name: e,
  tracer: t,
  attributes: n,
  fn: r,
  endWhenDone: s = !0
}) {
  return t.startActiveSpan(e, { attributes: n }, async (a) => {
    try {
      const o = await r(a);
      return s && a.end(), o;
    } catch (o) {
      try {
        o instanceof Error ? (a.recordException({
          name: o.name,
          message: o.message,
          stack: o.stack
        }), a.setStatus({
          code: On.ERROR,
          message: o.message
        })) : a.setStatus({ code: On.ERROR });
      } finally {
        a.end();
      }
      throw o;
    }
  });
}
function X({
  telemetry: e,
  attributes: t
}) {
  return (e == null ? void 0 : e.isEnabled) !== !0 ? {} : Object.entries(t).reduce((n, [r, s]) => {
    if (s === void 0)
      return n;
    if (typeof s == "object" && "input" in s && typeof s.input == "function") {
      if ((e == null ? void 0 : e.recordInputs) === !1)
        return n;
      const a = s.input();
      return a === void 0 ? n : { ...n, [r]: a };
    }
    if (typeof s == "object" && "output" in s && typeof s.output == "function") {
      if ((e == null ? void 0 : e.recordOutputs) === !1)
        return n;
      const a = s.output();
      return a === void 0 ? n : { ...n, [r]: a };
    }
    return { ...n, [r]: s };
  }, {});
}
async function $f({
  model: e,
  value: t,
  providerOptions: n,
  maxRetries: r,
  abortSignal: s,
  headers: a,
  experimental_telemetry: o
}) {
  const { maxRetries: i, retry: l } = it({ maxRetries: r }), u = Lt({
    model: e,
    telemetry: o,
    headers: a,
    settings: { maxRetries: i }
  }), c = Zt(o);
  return Ae({
    name: "ai.embed",
    attributes: X({
      telemetry: o,
      attributes: {
        ...Ee({ operationId: "ai.embed", telemetry: o }),
        ...u,
        "ai.value": { input: () => JSON.stringify(t) }
      }
    }),
    tracer: c,
    fn: async (p) => {
      const { embedding: h, usage: g, response: v } = await l(
        () => (
          // nested spans to align with the embedMany telemetry data:
          Ae({
            name: "ai.embed.doEmbed",
            attributes: X({
              telemetry: o,
              attributes: {
                ...Ee({
                  operationId: "ai.embed.doEmbed",
                  telemetry: o
                }),
                ...u,
                // specific settings that only make sense on the outer level:
                "ai.values": { input: () => [JSON.stringify(t)] }
              }
            }),
            tracer: c,
            fn: async (y) => {
              var m;
              const b = await e.doEmbed({
                values: [t],
                abortSignal: s,
                headers: a,
                providerOptions: n
              }), S = b.embeddings[0], w = (m = b.usage) != null ? m : { tokens: NaN };
              return y.setAttributes(
                X({
                  telemetry: o,
                  attributes: {
                    "ai.embeddings": {
                      output: () => b.embeddings.map(
                        (x) => JSON.stringify(x)
                      )
                    },
                    "ai.usage.tokens": w.tokens
                  }
                })
              ), {
                embedding: S,
                usage: w,
                response: b.response
              };
            }
          })
        )
      );
      return p.setAttributes(
        X({
          telemetry: o,
          attributes: {
            "ai.embedding": { output: () => JSON.stringify(h) },
            "ai.usage.tokens": g.tokens
          }
        })
      ), new nh({
        value: t,
        embedding: h,
        usage: g,
        response: v
      });
    }
  });
}
var nh = class {
  constructor(e) {
    this.value = e.value, this.embedding = e.embedding, this.usage = e.usage, this.response = e.response;
  }
};
function xs(e, t) {
  if (t <= 0)
    throw new Error("chunkSize must be greater than 0");
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push(e.slice(r, r + t));
  return n;
}
async function jf({
  model: e,
  values: t,
  maxParallelCalls: n = 1 / 0,
  maxRetries: r,
  abortSignal: s,
  headers: a,
  providerOptions: o,
  experimental_telemetry: i
}) {
  const { maxRetries: l, retry: u } = it({ maxRetries: r }), c = Lt({
    model: e,
    telemetry: i,
    headers: a,
    settings: { maxRetries: l }
  }), p = Zt(i);
  return Ae({
    name: "ai.embedMany",
    attributes: X({
      telemetry: i,
      attributes: {
        ...Ee({ operationId: "ai.embedMany", telemetry: i }),
        ...c,
        // specific settings that only make sense on the outer level:
        "ai.values": {
          input: () => t.map((h) => JSON.stringify(h))
        }
      }
    }),
    tracer: p,
    fn: async (h) => {
      const [g, v] = await Promise.all([
        e.maxEmbeddingsPerCall,
        e.supportsParallelCalls
      ]);
      if (g == null || g === 1 / 0) {
        const { embeddings: x, usage: _, response: k } = await u(() => Ae({
          name: "ai.embedMany.doEmbed",
          attributes: X({
            telemetry: i,
            attributes: {
              ...Ee({
                operationId: "ai.embedMany.doEmbed",
                telemetry: i
              }),
              ...c,
              // specific settings that only make sense on the outer level:
              "ai.values": {
                input: () => t.map((O) => JSON.stringify(O))
              }
            }
          }),
          tracer: p,
          fn: async (O) => {
            var N;
            const q = await e.doEmbed({
              values: t,
              abortSignal: s,
              headers: a,
              providerOptions: o
            }), L = q.embeddings, ee = (N = q.usage) != null ? N : { tokens: NaN };
            return O.setAttributes(
              X({
                telemetry: i,
                attributes: {
                  "ai.embeddings": {
                    output: () => L.map((ae) => JSON.stringify(ae))
                  },
                  "ai.usage.tokens": ee.tokens
                }
              })
            ), {
              embeddings: L,
              usage: ee,
              response: q.response
            };
          }
        }));
        return h.setAttributes(
          X({
            telemetry: i,
            attributes: {
              "ai.embeddings": {
                output: () => x.map((O) => JSON.stringify(O))
              },
              "ai.usage.tokens": _.tokens
            }
          })
        ), new Ts({
          values: t,
          embeddings: x,
          usage: _,
          responses: [k]
        });
      }
      const y = xs(t, g), m = [], b = [];
      let S = 0;
      const w = xs(
        y,
        v ? n : 1
      );
      for (const x of w) {
        const _ = await Promise.all(
          x.map((k) => u(() => Ae({
            name: "ai.embedMany.doEmbed",
            attributes: X({
              telemetry: i,
              attributes: {
                ...Ee({
                  operationId: "ai.embedMany.doEmbed",
                  telemetry: i
                }),
                ...c,
                // specific settings that only make sense on the outer level:
                "ai.values": {
                  input: () => k.map((O) => JSON.stringify(O))
                }
              }
            }),
            tracer: p,
            fn: async (O) => {
              var N;
              const q = await e.doEmbed({
                values: k,
                abortSignal: s,
                headers: a,
                providerOptions: o
              }), L = q.embeddings, ee = (N = q.usage) != null ? N : { tokens: NaN };
              return O.setAttributes(
                X({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": {
                      output: () => L.map(
                        (ae) => JSON.stringify(ae)
                      )
                    },
                    "ai.usage.tokens": ee.tokens
                  }
                })
              ), {
                embeddings: L,
                usage: ee,
                response: q.response
              };
            }
          })))
        );
        for (const k of _)
          m.push(...k.embeddings), b.push(k.response), S += k.usage.tokens;
      }
      return h.setAttributes(
        X({
          telemetry: i,
          attributes: {
            "ai.embeddings": {
              output: () => m.map((x) => JSON.stringify(x))
            },
            "ai.usage.tokens": S
          }
        })
      ), new Ts({
        values: t,
        embeddings: m,
        usage: { tokens: S },
        responses: b
      });
    }
  });
}
var Ts = class {
  constructor(e) {
    this.values = e.values, this.embeddings = e.embeddings, this.usage = e.usage, this.responses = e.responses;
  }
}, Ho = [
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
], zo = [
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 251],
    base64Prefix: "//s="
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
  }
], rh = (e) => {
  const t = typeof e == "string" ? Dn(e) : e, n = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
  return t.slice(n + 10);
};
function sh(e) {
  return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && // 'I'
  e[1] === 68 && // 'D'
  e[2] === 51 ? rh(e) : e;
}
function Vn({
  data: e,
  signatures: t
}) {
  const n = sh(e);
  for (const r of t)
    if (typeof n == "string" ? n.startsWith(r.base64Prefix) : n.length >= r.bytesPrefix.length && r.bytesPrefix.every(
      (s, a) => n[a] === s
    ))
      return r.mediaType;
}
var Bn = class {
  constructor({
    data: e,
    mediaType: t
  }) {
    const n = e instanceof Uint8Array;
    this.base64Data = n ? void 0 : e, this.uint8ArrayData = n ? e : void 0, this.mediaType = t;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = Sa(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = Dn(this.base64Data)), this.uint8ArrayData;
  }
}, ah = class extends Bn {
  constructor(e) {
    super(e), this.type = "file";
  }
};
async function Df({
  model: e,
  prompt: t,
  n = 1,
  maxImagesPerCall: r,
  size: s,
  aspectRatio: a,
  seed: o,
  providerOptions: i,
  maxRetries: l,
  abortSignal: u,
  headers: c
}) {
  var p, h;
  const { retry: g } = it({ maxRetries: l }), v = (p = r ?? e.maxImagesPerCall) != null ? p : 1, y = Math.ceil(n / v), m = Array.from({ length: y }, (k, O) => {
    if (O < y - 1)
      return v;
    const N = n % v;
    return N === 0 ? v : N;
  }), b = await Promise.all(
    m.map(
      async (k) => g(
        () => e.doGenerate({
          prompt: t,
          n: k,
          abortSignal: u,
          headers: c,
          size: s,
          aspectRatio: a,
          seed: o,
          providerOptions: i ?? {}
        })
      )
    )
  ), S = [], w = [], x = [], _ = {};
  for (const k of b) {
    if (S.push(
      ...k.images.map(
        (O) => {
          var N;
          return new Bn({
            data: O,
            mediaType: (N = Vn({
              data: O,
              signatures: Ho
            })) != null ? N : "image/png"
          });
        }
      )
    ), w.push(...k.warnings), k.providerMetadata)
      for (const [O, N] of Object.entries(k.providerMetadata))
        (h = _[O]) != null || (_[O] = { images: [] }), _[O].images.push(
          ...k.providerMetadata[O].images
        );
    x.push(k.response);
  }
  if (!S.length)
    throw new Rp({ responses: x });
  return new oh({
    images: S,
    warnings: w,
    responses: x,
    providerMetadata: _
  });
}
var oh = class {
  constructor(e) {
    this.images = e.images, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = e.providerMetadata;
  }
  get image() {
    return this.images[0];
  }
};
function gr(e) {
  const t = e.filter(
    (n) => n.type === "text"
  );
  if (t.length !== 0)
    return t.map((n) => n.text).join("");
}
async function Wo({ url: e }) {
  var t;
  const n = e.toString();
  try {
    const r = await fetch(n);
    if (!r.ok)
      throw new sr({
        url: n,
        statusCode: r.status,
        statusText: r.statusText
      });
    return {
      data: new Uint8Array(await r.arrayBuffer()),
      mediaType: (t = r.headers.get("content-type")) != null ? t : void 0
    };
  } catch (r) {
    throw sr.isInstance(r) ? r : new sr({ url: n, cause: r });
  }
}
function ih(e) {
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
var Yo = se([
  d(),
  Sn(Uint8Array),
  Sn(ArrayBuffer),
  ya(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, n;
      return (n = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? n : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function Ko(e) {
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
    const { mediaType: t, base64Content: n } = ih(
      e.toString()
    );
    if (t == null || n == null)
      throw new j({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`
      });
    return { data: n, mediaType: t };
  }
  return { data: e, mediaType: void 0 };
}
function lh(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    try {
      return Dn(e);
    } catch (t) {
      throw new vs({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t
      });
    }
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  throw new vs({ content: e });
}
async function Fn({
  prompt: e,
  supportedUrls: t,
  downloadImplementation: n = Wo
}) {
  const r = await ch(
    e.messages,
    n,
    t
  );
  return [
    ...e.system != null ? [{ role: "system", content: e.system }] : [],
    ...e.messages.map(
      (s) => uh(s, r)
    )
  ];
}
function uh(e, t) {
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
        content: e.content.map((r) => dh(r, t)).filter((r) => r.type !== "text" || r.text !== ""),
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
          (r) => r.type !== "text" || r.text !== ""
        ).map((r) => {
          const s = r.providerOptions;
          switch (r.type) {
            case "file": {
              const { data: a, mediaType: o } = Ko(
                r.data
              );
              return {
                type: "file",
                data: a,
                filename: r.filename,
                mediaType: o ?? r.mediaType,
                providerOptions: s
              };
            }
            case "reasoning":
              return {
                type: "reasoning",
                text: r.text,
                providerOptions: s
              };
            case "text":
              return {
                type: "text",
                text: r.text,
                providerOptions: s
              };
            case "tool-call":
              return {
                type: "tool-call",
                toolCallId: r.toolCallId,
                toolName: r.toolName,
                args: r.args,
                providerOptions: s
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
          result: r.result,
          content: r.experimental_content,
          isError: r.isError,
          providerOptions: r.providerOptions
        })),
        providerOptions: e.providerOptions
      };
    default: {
      const r = n;
      throw new Dp({ role: r });
    }
  }
}
async function ch(e, t, n) {
  const r = e.filter((a) => a.role === "user").map((a) => a.content).filter(
    (a) => Array.isArray(a)
  ).flat().filter(
    (a) => a.type === "image" || a.type === "file"
  ).map((a) => {
    var o;
    const i = (o = a.mediaType) != null ? o : a.type === "image" ? "image/*" : void 0;
    let l = a.type === "image" ? a.image : a.data;
    if (typeof l == "string")
      try {
        l = new URL(l);
      } catch {
      }
    return { mediaType: i, data: l };
  }).filter(
    (a) => a.data instanceof URL && a.mediaType != null && !Ql({
      url: a.data.toString(),
      mediaType: a.mediaType,
      supportedUrls: n
    })
  ).map((a) => a.data), s = await Promise.all(
    r.map(async (a) => ({
      url: a,
      data: await t({ url: a })
    }))
  );
  return Object.fromEntries(
    s.map(({ url: a, data: o }) => [a.toString(), o])
  );
}
function dh(e, t) {
  var n, r;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerOptions: e.providerOptions
    };
  let s;
  const a = e.type;
  switch (a) {
    case "image":
      s = e.image;
      break;
    case "file":
      s = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${a}`);
  }
  const { data: o, mediaType: i } = Ko(s);
  let l = i ?? e.mediaType, u = o;
  if (u instanceof URL) {
    const c = t[u.toString()];
    c && (u = c.data, l = (n = c.mediaType) != null ? n : l);
  }
  switch (a) {
    case "image":
      return (u instanceof Uint8Array || typeof u == "string") && (l = (r = Vn({ data: u, signatures: Ho })) != null ? r : l), {
        type: "file",
        mediaType: l ?? "image/*",
        // any image
        filename: void 0,
        data: u,
        providerOptions: e.providerOptions
      };
    case "file": {
      if (l == null)
        throw new Error("Media type is missing for file part");
      return {
        type: "file",
        mediaType: l,
        filename: e.filename,
        data: u,
        providerOptions: e.providerOptions
      };
    }
  }
}
function Rt({
  maxOutputTokens: e,
  temperature: t,
  topP: n,
  topK: r,
  presencePenalty: s,
  frequencyPenalty: a,
  seed: o,
  stopSequences: i
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new le({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer"
      });
    if (e < 1)
      throw new le({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new le({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (n != null && typeof n != "number")
    throw new le({
      parameter: "topP",
      value: n,
      message: "topP must be a number"
    });
  if (r != null && typeof r != "number")
    throw new le({
      parameter: "topK",
      value: r,
      message: "topK must be a number"
    });
  if (s != null && typeof s != "number")
    throw new le({
      parameter: "presencePenalty",
      value: s,
      message: "presencePenalty must be a number"
    });
  if (a != null && typeof a != "number")
    throw new le({
      parameter: "frequencyPenalty",
      value: a,
      message: "frequencyPenalty must be a number"
    });
  if (o != null && !Number.isInteger(o))
    throw new le({
      parameter: "seed",
      value: o,
      message: "seed must be an integer"
    });
  return {
    maxOutputTokens: e,
    temperature: t,
    topP: n,
    topK: r,
    presencePenalty: s,
    frequencyPenalty: a,
    stopSequences: i,
    seed: o
  };
}
var yr = dl(
  () => se([
    cl(),
    d(),
    T(),
    ue(),
    Ke(d(), yr),
    M(yr)
  ])
), tt = Ke(
  d(),
  Ke(d(), yr)
), ph = M(
  se([
    f({ type: C("text"), text: d() }),
    f({
      type: C("image"),
      data: d(),
      mediaType: d().optional()
    })
  ])
), Xo = f({
  type: C("text"),
  text: d(),
  providerOptions: tt.optional()
}), hh = f({
  type: C("image"),
  image: se([Yo, Sn(URL)]),
  mediaType: d().optional(),
  providerOptions: tt.optional()
}), Qo = f({
  type: C("file"),
  data: se([Yo, Sn(URL)]),
  filename: d().optional(),
  mediaType: d(),
  providerOptions: tt.optional()
}), fh = f({
  type: C("reasoning"),
  text: d(),
  providerOptions: tt.optional()
}), mh = f({
  type: C("tool-call"),
  toolCallId: d(),
  toolName: d(),
  args: Me(),
  providerOptions: tt.optional()
}), gh = f({
  type: C("tool-result"),
  toolCallId: d(),
  toolName: d(),
  result: Me(),
  content: ph.optional(),
  isError: ue().optional(),
  providerOptions: tt.optional()
}), ei = f(
  {
    role: C("system"),
    content: d(),
    providerOptions: tt.optional()
  }
), qf = ei, ti = f({
  role: C("user"),
  content: se([
    d(),
    M(se([Xo, hh, Qo]))
  ]),
  providerOptions: tt.optional()
}), Uf = ti, ni = f({
  role: C("assistant"),
  content: se([
    d(),
    M(
      se([
        Xo,
        Qo,
        fh,
        mh
      ])
    )
  ]),
  providerOptions: tt.optional()
}), Lf = ni, ri = f({
  role: C("tool"),
  content: M(gh),
  providerOptions: tt.optional()
}), Zf = ri, si = se([
  ei,
  ti,
  ni,
  ri
]), Vf = si;
async function Gn(e) {
  if (e.prompt == null && e.messages == null)
    throw new gt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new gt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string")
    throw new gt({
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
    throw new gt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (t.length === 0)
    throw new gt({
      prompt: e,
      message: "messages must not be empty"
    });
  const n = await ot({
    value: t,
    schema: M(si)
  });
  if (!n.success)
    throw new gt({
      prompt: e,
      message: "The messages must be a ModelMessage[]. If you have passed a UIMessage[], you can use convertToModelMessages to convert them.",
      cause: n.error
    });
  return {
    messages: t,
    system: e.system
  };
}
function _t(e) {
  const t = e.pipeThrough(new TransformStream());
  return t[Symbol.asyncIterator] = () => {
    const n = t.getReader();
    return {
      async next() {
        const { done: r, value: s } = await n.read();
        return r ? { done: !0, value: void 0 } : { done: !1, value: s };
      }
    };
  }, t;
}
var yh = {
  type: "no-schema",
  jsonSchema: void 0,
  async validatePartialResult({ value: e, textDelta: t }) {
    return { success: !0, value: { partial: e, textDelta: t } };
  },
  async validateFinalResult(e, t) {
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
    throw new he({
      functionality: "element streams in no-schema mode"
    });
  }
}, vh = (e) => ({
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
    return ot({ value: t, schema: e });
  },
  createElementStream() {
    throw new he({
      functionality: "element streams in object mode"
    });
  }
}), _h = (e) => {
  const { $schema: t, ...n } = e.jsonSchema;
  return {
    type: "enum",
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
      latestObject: s,
      isFirstDelta: a,
      isFinalDelta: o
    }) {
      var i;
      if (!pn(r) || !Fr(r.elements))
        return {
          success: !1,
          error: new De({
            value: r,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const l = r.elements, u = [];
      for (let h = 0; h < l.length; h++) {
        const g = l[h], v = await ot({ value: g, schema: e });
        if (!(h === l.length - 1 && !o)) {
          if (!v.success)
            return v;
          u.push(v.value);
        }
      }
      const c = (i = s == null ? void 0 : s.length) != null ? i : 0;
      let p = "";
      return a && (p += "["), c > 0 && (p += ","), p += u.slice(c).map((h) => JSON.stringify(h)).join(","), o && (p += "]"), {
        success: !0,
        value: {
          partial: u,
          textDelta: p
        }
      };
    },
    async validateFinalResult(r) {
      if (!pn(r) || !Fr(r.elements))
        return {
          success: !1,
          error: new De({
            value: r,
            cause: "value must be an object that contains an array of elements"
          })
        };
      const s = r.elements;
      for (const a of s) {
        const o = await ot({ value: a, schema: e });
        if (!o.success)
          return o;
      }
      return { success: !0, value: s };
    },
    createElementStream(r) {
      let s = 0;
      return _t(
        r.pipeThrough(
          new TransformStream({
            transform(a, o) {
              switch (a.type) {
                case "object": {
                  const i = a.object;
                  for (; s < i.length; s++)
                    o.enqueue(i[s]);
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
}, bh = (e) => ({
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
    if (!pn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new De({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const n = t.result;
    return e.includes(n) ? { success: !0, value: n } : {
      success: !1,
      error: new De({
        value: t,
        cause: "value must be a string in the enum"
      })
    };
  },
  async validatePartialResult({ value: t, textDelta: n }) {
    if (!pn(t) || typeof t.result != "string")
      return {
        success: !1,
        error: new De({
          value: t,
          cause: 'value must be an object that contains a string in the "result" property.'
        })
      };
    const r = t.result, s = e.filter(
      (a) => a.startsWith(r)
    );
    return t.result.length === 0 || s.length === 0 ? {
      success: !1,
      error: new De({
        value: t,
        cause: "value must be a string in the enum"
      })
    } : {
      success: !0,
      value: {
        partial: s.length > 1 ? r : s[0],
        textDelta: n
      }
    };
  },
  createElementStream() {
    throw new he({
      functionality: "element streams in enum mode"
    });
  }
});
function ai({
  output: e,
  schema: t,
  enumValues: n
}) {
  switch (e) {
    case "object":
      return vh(Dt(t));
    case "array":
      return _h(Dt(t));
    case "enum":
      return bh(n);
    case "no-schema":
      return yh;
    default: {
      const r = e;
      throw new Error(`Unsupported output: ${r}`);
    }
  }
}
function oi({
  output: e,
  schema: t,
  schemaName: n,
  schemaDescription: r,
  enumValues: s
}) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new le({
      parameter: "output",
      value: e,
      message: "Invalid output type."
    });
  if (e === "no-schema") {
    if (t != null)
      throw new le({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output."
      });
    if (r != null)
      throw new le({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for no-schema output."
      });
    if (n != null)
      throw new le({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for no-schema output."
      });
    if (s != null)
      throw new le({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for no-schema output."
      });
  }
  if (e === "object") {
    if (t == null)
      throw new le({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output."
      });
    if (s != null)
      throw new le({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for object output."
      });
  }
  if (e === "array") {
    if (t == null)
      throw new le({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output."
      });
    if (s != null)
      throw new le({
        parameter: "enumValues",
        value: s,
        message: "Enum values are not supported for array output."
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new le({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output."
      });
    if (r != null)
      throw new le({
        parameter: "schemaDescription",
        value: r,
        message: "Schema description is not supported for enum output."
      });
    if (n != null)
      throw new le({
        parameter: "schemaName",
        value: n,
        message: "Schema name is not supported for enum output."
      });
    if (s == null)
      throw new le({
        parameter: "enumValues",
        value: s,
        message: "Enum values are required for enum output."
      });
    for (const a of s)
      if (typeof a != "string")
        throw new le({
          parameter: "enumValues",
          value: a,
          message: "Enum values must be strings."
        });
  }
}
var wh = nn({ prefix: "aiobj", size: 24 });
async function Bf(e) {
  const {
    model: t,
    output: n = "object",
    system: r,
    prompt: s,
    messages: a,
    maxRetries: o,
    abortSignal: i,
    headers: l,
    experimental_repairText: u,
    experimental_telemetry: c,
    providerOptions: p,
    _internal: {
      generateId: h = wh,
      currentDate: g = () => /* @__PURE__ */ new Date()
    } = {},
    ...v
  } = e, y = "enum" in e ? e.enum : void 0, {
    schema: m,
    schemaDescription: b,
    schemaName: S
  } = "schema" in e ? e : {};
  oi({
    output: n,
    schema: m,
    schemaName: S,
    schemaDescription: b,
    enumValues: y
  });
  const { maxRetries: w, retry: x } = it({ maxRetries: o }), _ = ai({
    output: n,
    schema: m,
    enumValues: y
  }), k = Rt(v), O = Lt({
    model: t,
    telemetry: c,
    headers: l,
    settings: { ...k, maxRetries: w }
  }), N = Zt(c);
  return Ae({
    name: "ai.generateObject",
    attributes: X({
      telemetry: c,
      attributes: {
        ...Ee({
          operationId: "ai.generateObject",
          telemetry: c
        }),
        ...O,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system: r, prompt: s, messages: a })
        },
        "ai.schema": _.jsonSchema != null ? { input: () => JSON.stringify(_.jsonSchema) } : void 0,
        "ai.schema.name": S,
        "ai.schema.description": b,
        "ai.settings.output": _.type
      }
    }),
    tracer: N,
    fn: async (q) => {
      var L;
      let ee, ae, fe, ce, ve, te, ge;
      const Pe = await Gn({
        system: r,
        prompt: s,
        messages: a
      }), we = await Fn({
        prompt: Pe,
        supportedUrls: await t.supportedUrls
      }), Y = await x(
        () => Ae({
          name: "ai.generateObject.doGenerate",
          attributes: X({
            telemetry: c,
            attributes: {
              ...Ee({
                operationId: "ai.generateObject.doGenerate",
                telemetry: c
              }),
              ...O,
              "ai.prompt.messages": {
                input: () => JSON.stringify(we)
              },
              // standardized gen-ai llm span attributes:
              "gen_ai.system": t.provider,
              "gen_ai.request.model": t.modelId,
              "gen_ai.request.frequency_penalty": k.frequencyPenalty,
              "gen_ai.request.max_tokens": k.maxOutputTokens,
              "gen_ai.request.presence_penalty": k.presencePenalty,
              "gen_ai.request.temperature": k.temperature,
              "gen_ai.request.top_k": k.topK,
              "gen_ai.request.top_p": k.topP
            }
          }),
          tracer: N,
          fn: async (H) => {
            var V, ie, K, U, de, P, B, xe;
            const pe = await t.doGenerate({
              responseFormat: {
                type: "json",
                schema: _.jsonSchema,
                name: S,
                description: b
              },
              ...Rt(v),
              prompt: we,
              providerOptions: p,
              abortSignal: i,
              headers: l
            }), G = {
              id: (ie = (V = pe.response) == null ? void 0 : V.id) != null ? ie : h(),
              timestamp: (U = (K = pe.response) == null ? void 0 : K.timestamp) != null ? U : g(),
              modelId: (P = (de = pe.response) == null ? void 0 : de.modelId) != null ? P : t.modelId,
              headers: (B = pe.response) == null ? void 0 : B.headers,
              body: (xe = pe.response) == null ? void 0 : xe.body
            }, z = gr(pe.content);
            if (z === void 0)
              throw new dt({
                message: "No object generated: the model did not return a response.",
                response: G,
                usage: pe.usage,
                finishReason: pe.finishReason
              });
            return H.setAttributes(
              X({
                telemetry: c,
                attributes: {
                  "ai.response.finishReason": pe.finishReason,
                  "ai.response.object": { output: () => z },
                  "ai.response.id": G.id,
                  "ai.response.model": G.modelId,
                  "ai.response.timestamp": G.timestamp.toISOString(),
                  // TODO rename telemetry attributes to inputTokens and outputTokens
                  "ai.usage.promptTokens": pe.usage.inputTokens,
                  "ai.usage.completionTokens": pe.usage.outputTokens,
                  // standardized gen-ai llm span attributes:
                  "gen_ai.response.finish_reasons": [pe.finishReason],
                  "gen_ai.response.id": G.id,
                  "gen_ai.response.model": G.modelId,
                  "gen_ai.usage.input_tokens": pe.usage.inputTokens,
                  "gen_ai.usage.output_tokens": pe.usage.outputTokens
                }
              })
            ), { ...pe, objectText: z, responseData: G };
          }
        })
      );
      ee = Y.objectText, ae = Y.finishReason, fe = Y.usage, ce = Y.warnings, ge = Y.providerMetadata, te = (L = Y.request) != null ? L : {}, ve = Y.responseData;
      async function ne(H) {
        const V = await It({ text: H });
        if (!V.success)
          throw new dt({
            message: "No object generated: could not parse the response.",
            cause: V.error,
            text: H,
            response: ve,
            usage: fe,
            finishReason: ae
          });
        const ie = await _.validateFinalResult(
          V.value,
          {
            text: H,
            response: ve,
            usage: fe
          }
        );
        if (!ie.success)
          throw new dt({
            message: "No object generated: response did not match schema.",
            cause: ie.error,
            text: H,
            response: ve,
            usage: fe,
            finishReason: ae
          });
        return ie.value;
      }
      let oe;
      try {
        oe = await ne(ee);
      } catch (H) {
        if (u != null && dt.isInstance(H) && (zt.isInstance(H.cause) || De.isInstance(H.cause))) {
          const V = await u({
            text: ee,
            error: H.cause
          });
          if (V === null)
            throw H;
          oe = await ne(V);
        } else
          throw H;
      }
      return q.setAttributes(
        X({
          telemetry: c,
          attributes: {
            "ai.response.finishReason": ae,
            "ai.response.object": {
              output: () => JSON.stringify(oe)
            },
            // TODO rename telemetry attributes to inputTokens and outputTokens
            "ai.usage.promptTokens": fe.inputTokens,
            "ai.usage.completionTokens": fe.outputTokens
          }
        })
      ), new xh({
        object: oe,
        finishReason: ae,
        usage: fe,
        warnings: ce,
        request: te,
        response: ve,
        providerMetadata: ge
      });
    }
  });
}
var xh = class {
  constructor(e) {
    this.object = e.object, this.finishReason = e.finishReason, this.usage = e.usage, this.warnings = e.warnings, this.providerMetadata = e.providerMetadata, this.response = e.response, this.request = e.request;
  }
  toJsonResponse(e) {
    var t;
    return new Response(JSON.stringify(this.object), {
      status: (t = e == null ? void 0 : e.status) != null ? t : 200,
      headers: an(e == null ? void 0 : e.headers, {
        "content-type": "application/json; charset=utf-8"
      })
    });
  }
};
function ks() {
  let e, t;
  return {
    promise: new Promise((r, s) => {
      e = r, t = s;
    }),
    resolve: e,
    reject: t
  };
}
function ii() {
  let e = [], t = null, n = !1, r = ks();
  const s = async () => {
    if (n && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return r = ks(), await r.promise, s();
    try {
      const { value: a, done: o } = await e[0].read();
      o ? (e.shift(), e.length > 0 ? await s() : n && (t == null || t.close())) : t == null || t.enqueue(a);
    } catch (a) {
      t == null || t.error(a), e.shift(), n && e.length === 0 && (t == null || t.close());
    }
  };
  return {
    stream: new ReadableStream({
      start(a) {
        t = a;
      },
      pull: s,
      async cancel() {
        for (const a of e)
          await a.cancel();
        e = [], n = !0;
      }
    }),
    addStream: (a) => {
      if (n)
        throw new Error("Cannot add inner stream: outer stream is closed");
      e.push(a.getReader()), r.resolve();
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
    terminate: () => {
      n = !0, r.resolve(), e.forEach((a) => a.cancel()), e = [], t == null || t.close();
    }
  };
}
var rt = class {
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
function li() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
var Th = nn({ prefix: "aiobj", size: 24 });
function Ff(e) {
  const {
    model: t,
    output: n = "object",
    system: r,
    prompt: s,
    messages: a,
    maxRetries: o,
    abortSignal: i,
    headers: l,
    experimental_telemetry: u,
    providerOptions: c,
    onError: p,
    onFinish: h,
    _internal: {
      generateId: g = Th,
      currentDate: v = () => /* @__PURE__ */ new Date(),
      now: y = li
    } = {},
    ...m
  } = e, b = "enum" in e && e.enum ? e.enum : void 0, {
    schema: S,
    schemaDescription: w,
    schemaName: x
  } = "schema" in e ? e : {};
  oi({
    output: n,
    schema: S,
    schemaName: x,
    schemaDescription: w,
    enumValues: b
  });
  const _ = ai({
    output: n,
    schema: S,
    enumValues: b
  });
  return new kh({
    model: t,
    telemetry: u,
    headers: l,
    settings: m,
    maxRetries: o,
    abortSignal: i,
    outputStrategy: _,
    system: r,
    prompt: s,
    messages: a,
    schemaName: x,
    schemaDescription: w,
    providerOptions: c,
    onError: p,
    onFinish: h,
    generateId: g,
    currentDate: v,
    now: y
  });
}
var kh = class {
  constructor({
    model: e,
    headers: t,
    telemetry: n,
    settings: r,
    maxRetries: s,
    abortSignal: a,
    outputStrategy: o,
    system: i,
    prompt: l,
    messages: u,
    schemaName: c,
    schemaDescription: p,
    providerOptions: h,
    onError: g,
    onFinish: v,
    generateId: y,
    currentDate: m,
    now: b
  }) {
    this.objectPromise = new rt(), this.usagePromise = new rt(), this.providerMetadataPromise = new rt(), this.warningsPromise = new rt(), this.requestPromise = new rt(), this.responsePromise = new rt();
    const { maxRetries: S, retry: w } = it({
      maxRetries: s
    }), x = Rt(r), _ = Lt({
      model: e,
      telemetry: n,
      headers: t,
      settings: { ...x, maxRetries: S }
    }), k = Zt(n), O = this, N = ii(), q = new TransformStream({
      transform(L, ee) {
        ee.enqueue(L), L.type === "error" && (g == null || g({ error: L.error }));
      }
    });
    this.baseStream = N.stream.pipeThrough(q), Ae({
      name: "ai.streamObject",
      attributes: X({
        telemetry: n,
        attributes: {
          ...Ee({
            operationId: "ai.streamObject",
            telemetry: n
          }),
          ..._,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: i, prompt: l, messages: u })
          },
          "ai.schema": o.jsonSchema != null ? { input: () => JSON.stringify(o.jsonSchema) } : void 0,
          "ai.schema.name": c,
          "ai.schema.description": p,
          "ai.settings.output": o.type
        }
      }),
      tracer: k,
      endWhenDone: !1,
      fn: async (L) => {
        const ee = await Gn({
          system: i,
          prompt: l,
          messages: u
        }), ae = {
          responseFormat: {
            type: "json",
            schema: o.jsonSchema,
            name: c,
            description: p
          },
          ...Rt(r),
          prompt: await Fn({
            prompt: ee,
            supportedUrls: await e.supportedUrls
          }),
          providerOptions: h,
          abortSignal: a,
          headers: t
        }, fe = {
          transform: (G, z) => {
            switch (G.type) {
              case "text":
                z.enqueue(G.text);
                break;
              case "response-metadata":
              case "finish":
              case "error":
                z.enqueue(G);
                break;
            }
          }
        }, {
          result: { stream: ce, response: ve, request: te },
          doStreamSpan: ge,
          startTimestampMs: Pe
        } = await w(
          () => Ae({
            name: "ai.streamObject.doStream",
            attributes: X({
              telemetry: n,
              attributes: {
                ...Ee({
                  operationId: "ai.streamObject.doStream",
                  telemetry: n
                }),
                ..._,
                "ai.prompt.messages": {
                  input: () => JSON.stringify(ae.prompt)
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": e.provider,
                "gen_ai.request.model": e.modelId,
                "gen_ai.request.frequency_penalty": x.frequencyPenalty,
                "gen_ai.request.max_tokens": x.maxOutputTokens,
                "gen_ai.request.presence_penalty": x.presencePenalty,
                "gen_ai.request.temperature": x.temperature,
                "gen_ai.request.top_k": x.topK,
                "gen_ai.request.top_p": x.topP
              }
            }),
            tracer: k,
            endWhenDone: !1,
            fn: async (G) => ({
              startTimestampMs: b(),
              doStreamSpan: G,
              result: await e.doStream(ae)
            })
          })
        );
        O.requestPromise.resolve(te ?? {});
        let we, Y = {
          inputTokens: void 0,
          outputTokens: void 0,
          totalTokens: void 0
        }, ne, oe, H, V, ie = "", K = "", U = {
          id: y(),
          timestamp: m(),
          modelId: e.modelId
        }, de, P, B = !0, xe = !0;
        const pe = ce.pipeThrough(new TransformStream(fe)).pipeThrough(
          new TransformStream({
            async transform(G, z) {
              var Ge, ft, lt;
              if (typeof G == "object" && G.type === "stream-start") {
                we = G.warnings;
                return;
              }
              if (B) {
                const Te = b() - Pe;
                B = !1, ge.addEvent("ai.stream.firstChunk", {
                  "ai.stream.msToFirstChunk": Te
                }), ge.setAttributes({
                  "ai.stream.msToFirstChunk": Te
                });
              }
              if (typeof G == "string") {
                ie += G, K += G;
                const { value: Te, state: Le } = await Nr(ie);
                if (Te !== void 0 && !Pn(de, Te)) {
                  const me = await o.validatePartialResult({
                    value: Te,
                    textDelta: K,
                    latestObject: P,
                    isFirstDelta: xe,
                    isFinalDelta: Le === "successful-parse"
                  });
                  me.success && !Pn(
                    P,
                    me.value.partial
                  ) && (de = Te, P = me.value.partial, z.enqueue({
                    type: "object",
                    object: P
                  }), z.enqueue({
                    type: "text-delta",
                    textDelta: me.value.textDelta
                  }), K = "", xe = !1);
                }
                return;
              }
              switch (G.type) {
                case "response-metadata": {
                  U = {
                    id: (Ge = G.id) != null ? Ge : U.id,
                    timestamp: (ft = G.timestamp) != null ? ft : U.timestamp,
                    modelId: (lt = G.modelId) != null ? lt : U.modelId
                  };
                  break;
                }
                case "finish": {
                  K !== "" && z.enqueue({ type: "text-delta", textDelta: K }), ne = G.finishReason, Y = G.usage, oe = G.providerMetadata, z.enqueue({
                    ...G,
                    usage: Y,
                    response: U
                  }), O.usagePromise.resolve(Y), O.providerMetadataPromise.resolve(oe), O.responsePromise.resolve({
                    ...U,
                    headers: ve == null ? void 0 : ve.headers
                  });
                  const Te = await o.validateFinalResult(
                    de,
                    {
                      text: ie,
                      response: U,
                      usage: Y
                    }
                  );
                  Te.success ? (H = Te.value, O.objectPromise.resolve(H)) : (V = new dt({
                    message: "No object generated: response did not match schema.",
                    cause: Te.error,
                    text: ie,
                    response: U,
                    usage: Y,
                    finishReason: ne
                  }), O.objectPromise.reject(V));
                  break;
                }
                default: {
                  z.enqueue(G);
                  break;
                }
              }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush(G) {
              try {
                const z = Y ?? {
                  promptTokens: NaN,
                  completionTokens: NaN,
                  totalTokens: NaN
                };
                ge.setAttributes(
                  X({
                    telemetry: n,
                    attributes: {
                      "ai.response.finishReason": ne,
                      "ai.response.object": {
                        output: () => JSON.stringify(H)
                      },
                      "ai.response.id": U.id,
                      "ai.response.model": U.modelId,
                      "ai.response.timestamp": U.timestamp.toISOString(),
                      "ai.usage.inputTokens": z.inputTokens,
                      "ai.usage.outputTokens": z.outputTokens,
                      "ai.usage.totalTokens": z.totalTokens,
                      "ai.usage.reasoningTokens": z.reasoningTokens,
                      "ai.usage.cachedInputTokens": z.cachedInputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [ne],
                      "gen_ai.response.id": U.id,
                      "gen_ai.response.model": U.modelId,
                      "gen_ai.usage.input_tokens": z.inputTokens,
                      "gen_ai.usage.output_tokens": z.outputTokens
                    }
                  })
                ), ge.end(), L.setAttributes(
                  X({
                    telemetry: n,
                    attributes: {
                      "ai.usage.inputTokens": z.inputTokens,
                      "ai.usage.outputTokens": z.outputTokens,
                      "ai.usage.totalTokens": z.totalTokens,
                      "ai.usage.reasoningTokens": z.reasoningTokens,
                      "ai.usage.cachedInputTokens": z.cachedInputTokens,
                      "ai.response.object": {
                        output: () => JSON.stringify(H)
                      }
                    }
                  })
                ), await (v == null ? void 0 : v({
                  usage: z,
                  object: H,
                  error: V,
                  response: {
                    ...U,
                    headers: ve == null ? void 0 : ve.headers
                  },
                  warnings: we,
                  providerMetadata: oe
                }));
              } catch (z) {
                G.enqueue({ type: "error", error: z });
              } finally {
                L.end();
              }
            }
          })
        );
        N.addStream(pe);
      }
    }).catch((L) => {
      N.addStream(
        new ReadableStream({
          start(ee) {
            ee.enqueue({ type: "error", error: L }), ee.close();
          }
        })
      );
    }).finally(() => {
      N.close();
    }), this.outputStrategy = o;
  }
  get object() {
    return this.objectPromise.value;
  }
  get usage() {
    return this.usagePromise.value;
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
    return _t(
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
    return _t(
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
    return _t(this.baseStream);
  }
  pipeTextStreamToResponse(e, t) {
    Uo({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toTextStreamResponse(e) {
    return Do({
      textStream: this.textStream,
      ...e
    });
  }
}, Sh = class extends j {
  constructor(e) {
    super({
      name: "AI_NoSpeechGeneratedError",
      message: "No speech audio generated."
    }), this.responses = e.responses;
  }
}, Ih = class extends Bn {
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
async function Gf({
  model: e,
  text: t,
  voice: n,
  outputFormat: r,
  instructions: s,
  speed: a,
  providerOptions: o = {},
  maxRetries: i,
  abortSignal: l,
  headers: u
}) {
  var c;
  const { retry: p } = it({ maxRetries: i }), h = await p(
    () => e.doGenerate({
      text: t,
      voice: n,
      outputFormat: r,
      instructions: s,
      speed: a,
      abortSignal: l,
      headers: u,
      providerOptions: o
    })
  );
  if (!h.audio || h.audio.length === 0)
    throw new Sh({ responses: [h.response] });
  return new Ch({
    audio: new Ih({
      data: h.audio,
      mediaType: (c = Vn({
        data: h.audio,
        signatures: zo
      })) != null ? c : "audio/mp3"
    }),
    warnings: h.warnings,
    responses: [h.response],
    providerMetadata: h.providerMetadata
  });
}
var Ch = class {
  constructor(e) {
    var t;
    this.audio = e.audio, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
function Rh(e) {
  return e != null && Object.keys(e).length > 0;
}
function ui({
  tools: e,
  toolChoice: t,
  activeTools: n
}) {
  return Rh(e) ? {
    tools: (n != null ? Object.entries(e).filter(
      ([s]) => n.includes(s)
    ) : Object.entries(e)).map(([s, a]) => {
      const o = a.type;
      switch (o) {
        case void 0:
        case "function":
          return {
            type: "function",
            name: s,
            description: a.description,
            parameters: Dt(a.parameters).jsonSchema
          };
        case "provider-defined":
          return {
            type: "provider-defined",
            name: s,
            id: a.id,
            args: a.args
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
function ci(e, t) {
  return {
    inputTokens: Gt(e.inputTokens, t.inputTokens),
    outputTokens: Gt(e.outputTokens, t.outputTokens),
    totalTokens: Gt(e.totalTokens, t.totalTokens),
    reasoningTokens: Gt(
      e.reasoningTokens,
      t.reasoningTokens
    ),
    cachedInputTokens: Gt(
      e.cachedInputTokens,
      t.cachedInputTokens
    )
  };
}
function Gt(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function Eh({
  content: e,
  toolCalls: t,
  toolResults: n
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
            file: new Bn(r)
          };
        case "tool-call":
          return t.find(
            (s) => s.toolCallId === r.toolCallId
          );
      }
    }),
    ...n
  ];
}
async function di({
  toolCall: e,
  tools: t,
  repairToolCall: n,
  system: r,
  messages: s
}) {
  if (t == null)
    throw new mr({ toolName: e.toolName });
  try {
    return await Ss({ toolCall: e, tools: t });
  } catch (a) {
    if (n == null || !(mr.isInstance(a) || Xa.isInstance(a)))
      throw a;
    let o = null;
    try {
      o = await n({
        toolCall: e,
        tools: t,
        parameterSchema: ({ toolName: i }) => {
          const { parameters: l } = t[i];
          return Dt(l).jsonSchema;
        },
        system: r,
        messages: s,
        error: a
      });
    } catch (i) {
      throw new Np({
        cause: i,
        originalError: a
      });
    }
    if (o == null)
      throw a;
    return await Ss({ toolCall: o, tools: t });
  }
}
async function Ss({
  toolCall: e,
  tools: t
}) {
  const n = e.toolName, r = t[n];
  if (r == null)
    throw new mr({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  const s = Dt(r.parameters), a = e.args.trim() === "" ? await ot({ value: {}, schema: s }) : await It({ text: e.args, schema: s });
  if (a.success === !1)
    throw new Xa({
      toolName: n,
      toolArgs: e.args,
      cause: a.error
    });
  return {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: n,
    args: a == null ? void 0 : a.value
  };
}
var pi = class {
  constructor({
    content: e,
    finishReason: t,
    usage: n,
    warnings: r,
    request: s,
    response: a,
    providerMetadata: o
  }) {
    this.content = e, this.finishReason = t, this.usage = n, this.warnings = r, this.request = s, this.response = a, this.providerMetadata = o;
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
  get toolResults() {
    return this.content.filter((e) => e.type === "tool-result");
  }
};
function Ah(e) {
  return ({ steps: t }) => t.length >= e;
}
function Jf(e) {
  return ({ steps: t }) => {
    var n, r, s;
    return (s = (r = (n = t[t.length - 1]) == null ? void 0 : n.toolCalls) == null ? void 0 : r.some(
      (a) => a.toolName === e
    )) != null ? s : !1;
  };
}
function vr({
  content: e,
  tools: t
}) {
  const n = [], r = e.filter((a) => a.type !== "tool-result" && a.type !== "source").filter((a) => a.type !== "text" || a.text.length > 0).map((a) => {
    switch (a.type) {
      case "text":
        return a;
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
          mediaType: a.file.mediaType
        };
      case "tool-call":
        return a;
    }
  });
  r.length > 0 && n.push({
    role: "assistant",
    content: r
  });
  const s = e.filter((a) => a.type === "tool-result").map((a) => {
    const o = t[a.toolName];
    return (o == null ? void 0 : o.experimental_toToolResultContent) != null ? {
      type: "tool-result",
      toolCallId: a.toolCallId,
      toolName: a.toolName,
      result: o.experimental_toToolResultContent(a.result),
      experimental_content: o.experimental_toToolResultContent(
        a.result
      )
    } : {
      type: "tool-result",
      toolCallId: a.toolCallId,
      toolName: a.toolName,
      result: a.result
    };
  });
  return s.length > 0 && n.push({
    role: "tool",
    content: s
  }), n;
}
var Oh = nn({
  prefix: "aitxt",
  size: 24
});
async function Hf({
  model: e,
  tools: t,
  toolChoice: n,
  system: r,
  prompt: s,
  messages: a,
  maxRetries: o,
  abortSignal: i,
  headers: l,
  continueUntil: u = Ah(1),
  experimental_output: c,
  experimental_telemetry: p,
  providerOptions: h,
  experimental_activeTools: g,
  experimental_prepareStep: v,
  experimental_repairToolCall: y,
  _internal: {
    generateId: m = Oh,
    currentDate: b = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: S,
  ...w
}) {
  const { maxRetries: x, retry: _ } = it({ maxRetries: o }), k = Rt(w), O = Lt({
    model: e,
    telemetry: p,
    headers: l,
    settings: { ...k, maxRetries: x }
  }), N = await Gn({
    system: r,
    prompt: s,
    messages: a
  }), q = Zt(p);
  return Ae({
    name: "ai.generateText",
    attributes: X({
      telemetry: p,
      attributes: {
        ...Ee({
          operationId: "ai.generateText",
          telemetry: p
        }),
        ...O,
        // model:
        "ai.model.provider": e.provider,
        "ai.model.id": e.modelId,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system: r, prompt: s, messages: a })
        }
      }
    }),
    tracer: q,
    fn: async (L) => {
      var ee, ae, fe, ce;
      const ve = Rt(w);
      let te, ge = [], Pe = [];
      const we = [], Y = [];
      do {
        const oe = [
          ...N.messages,
          ...we
        ], H = await (v == null ? void 0 : v({
          model: e,
          steps: Y,
          stepNumber: Y.length
        })), V = await Fn({
          prompt: {
            system: N.system,
            messages: oe
          },
          supportedUrls: await e.supportedUrls
        }), ie = (ee = H == null ? void 0 : H.model) != null ? ee : e, { toolChoice: K, tools: U } = ui({
          tools: t,
          toolChoice: (ae = H == null ? void 0 : H.toolChoice) != null ? ae : n,
          activeTools: (fe = H == null ? void 0 : H.experimental_activeTools) != null ? fe : g
        });
        te = await _(
          () => {
            var B;
            return Ae({
              name: "ai.generateText.doGenerate",
              attributes: X({
                telemetry: p,
                attributes: {
                  ...Ee({
                    operationId: "ai.generateText.doGenerate",
                    telemetry: p
                  }),
                  ...O,
                  // model:
                  "ai.model.provider": ie.provider,
                  "ai.model.id": ie.modelId,
                  // prompt:
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(V)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => U == null ? void 0 : U.map((xe) => JSON.stringify(xe))
                  },
                  "ai.prompt.toolChoice": {
                    input: () => K != null ? JSON.stringify(K) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": ie.provider,
                  "gen_ai.request.model": ie.modelId,
                  "gen_ai.request.frequency_penalty": w.frequencyPenalty,
                  "gen_ai.request.max_tokens": w.maxOutputTokens,
                  "gen_ai.request.presence_penalty": w.presencePenalty,
                  "gen_ai.request.stop_sequences": w.stopSequences,
                  "gen_ai.request.temperature": (B = w.temperature) != null ? B : void 0,
                  "gen_ai.request.top_k": w.topK,
                  "gen_ai.request.top_p": w.topP
                }
              }),
              tracer: q,
              fn: async (xe) => {
                var pe, G, z, Ge, ft, lt, Te, Le;
                const me = await ie.doGenerate({
                  ...ve,
                  tools: U,
                  toolChoice: K,
                  responseFormat: c == null ? void 0 : c.responseFormat,
                  prompt: V,
                  providerOptions: h,
                  abortSignal: i,
                  headers: l
                }), ut = {
                  id: (G = (pe = me.response) == null ? void 0 : pe.id) != null ? G : m(),
                  timestamp: (Ge = (z = me.response) == null ? void 0 : z.timestamp) != null ? Ge : b(),
                  modelId: (lt = (ft = me.response) == null ? void 0 : ft.modelId) != null ? lt : ie.modelId,
                  headers: (Te = me.response) == null ? void 0 : Te.headers,
                  body: (Le = me.response) == null ? void 0 : Le.body
                };
                return xe.setAttributes(
                  X({
                    telemetry: p,
                    attributes: {
                      "ai.response.finishReason": me.finishReason,
                      "ai.response.text": {
                        output: () => gr(me.content)
                      },
                      "ai.response.toolCalls": {
                        output: () => {
                          const on = Is(me.content);
                          return on == null ? void 0 : JSON.stringify(on);
                        }
                      },
                      "ai.response.id": ut.id,
                      "ai.response.model": ut.modelId,
                      "ai.response.timestamp": ut.timestamp.toISOString(),
                      // TODO rename telemetry attributes to inputTokens and outputTokens
                      "ai.usage.promptTokens": me.usage.inputTokens,
                      "ai.usage.completionTokens": me.usage.outputTokens,
                      // standardized gen-ai llm span attributes:
                      "gen_ai.response.finish_reasons": [me.finishReason],
                      "gen_ai.response.id": ut.id,
                      "gen_ai.response.model": ut.modelId,
                      "gen_ai.usage.input_tokens": me.usage.inputTokens,
                      "gen_ai.usage.output_tokens": me.usage.outputTokens
                    }
                  })
                ), { ...me, response: ut };
              }
            });
          }
        ), ge = await Promise.all(
          te.content.filter(
            (B) => B.type === "tool-call"
          ).map(
            (B) => di({
              toolCall: B,
              tools: t,
              repairToolCall: y,
              system: r,
              messages: oe
            })
          )
        ), Pe = t == null ? [] : await Mh({
          toolCalls: ge,
          tools: t,
          tracer: q,
          telemetry: p,
          messages: oe,
          abortSignal: i
        });
        const de = Eh({
          content: te.content,
          toolCalls: ge,
          toolResults: Pe
        });
        we.push(
          ...vr({
            content: de,
            tools: t ?? {}
          })
        );
        const P = new pi({
          content: de,
          finishReason: te.finishReason,
          usage: te.usage,
          warnings: te.warnings,
          providerMetadata: te.providerMetadata,
          request: (ce = te.request) != null ? ce : {},
          response: {
            ...te.response,
            // deep clone msgs to avoid mutating past messages in multi-step:
            messages: structuredClone(we)
          }
        });
        Y.push(P), await (S == null ? void 0 : S(P));
      } while (
        // there are tool calls:
        ge.length > 0 && // all current tool calls have results:
        Pe.length === ge.length && // continue until the stop condition is met:
        !await u({ steps: Y })
      );
      L.setAttributes(
        X({
          telemetry: p,
          attributes: {
            "ai.response.finishReason": te.finishReason,
            "ai.response.text": {
              output: () => gr(te.content)
            },
            "ai.response.toolCalls": {
              output: () => {
                const oe = Is(te.content);
                return oe == null ? void 0 : JSON.stringify(oe);
              }
            },
            // TODO rename telemetry attributes to inputTokens and outputTokens
            "ai.usage.promptTokens": te.usage.inputTokens,
            "ai.usage.completionTokens": te.usage.outputTokens
          }
        })
      );
      const ne = Y[Y.length - 1];
      return new Nh({
        steps: Y,
        resolvedOutput: await (c == null ? void 0 : c.parseOutput(
          { text: ne.text },
          {
            response: ne.response,
            usage: ne.usage,
            finishReason: ne.finishReason
          }
        ))
      });
    }
  });
}
async function Mh({
  toolCalls: e,
  tools: t,
  tracer: n,
  telemetry: r,
  messages: s,
  abortSignal: a
}) {
  return (await Promise.all(
    e.map(async ({ toolCallId: i, toolName: l, args: u }) => {
      const c = t[l];
      if ((c == null ? void 0 : c.execute) == null)
        return;
      const p = await Ae({
        name: "ai.toolCall",
        attributes: X({
          telemetry: r,
          attributes: {
            ...Ee({
              operationId: "ai.toolCall",
              telemetry: r
            }),
            "ai.toolCall.name": l,
            "ai.toolCall.id": i,
            "ai.toolCall.args": {
              output: () => JSON.stringify(u)
            }
          }
        }),
        tracer: n,
        fn: async (h) => {
          try {
            const g = await c.execute(u, {
              toolCallId: i,
              messages: s,
              abortSignal: a
            });
            try {
              h.setAttributes(
                X({
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
            return g;
          } catch (g) {
            throw new wo({
              toolCallId: i,
              toolName: l,
              toolArgs: u,
              cause: g
            });
          }
        }
      });
      return {
        type: "tool-result",
        toolCallId: i,
        toolName: l,
        args: u,
        result: p
      };
    })
  )).filter(
    (i) => i != null
  );
}
var Nh = class {
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
  get toolResults() {
    return this.finalStep.toolResults;
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
      (e, t) => ci(e, t.usage),
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
      throw new co();
    return this.resolvedOutput;
  }
};
function Is(e) {
  const t = e.filter(
    (n) => n.type === "tool-call"
  );
  if (t.length !== 0)
    return t.map((n) => ({
      toolCallType: n.toolCallType,
      toolCallId: n.toolCallId,
      toolName: n.toolName,
      args: n.args
    }));
}
var Ph = {};
wp(Ph, {
  object: () => jh,
  text: () => $h
});
var $h = () => ({
  type: "text",
  responseFormat: { type: "text" },
  async parsePartial({ text: e }) {
    return { partial: e };
  },
  async parseOutput({ text: e }) {
    return e;
  }
}), jh = ({
  schema: e
}) => {
  const t = Dt(e);
  return {
    type: "object",
    responseFormat: {
      type: "json",
      schema: t.jsonSchema
    },
    async parsePartial({ text: n }) {
      const r = await Nr(n);
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
          const s = r.state;
          throw new Error(`Unsupported parse state: ${s}`);
        }
      }
    },
    async parseOutput({ text: n }, r) {
      const s = await It({ text: n });
      if (!s.success)
        throw new dt({
          message: "No object generated: could not parse the response.",
          cause: s.error,
          text: n,
          response: r.response,
          usage: r.usage,
          finishReason: r.finishReason
        });
      const a = await ot({
        value: s.value,
        schema: t
      });
      if (!a.success)
        throw new dt({
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
}, Dh = {
  word: /\S+\s+/m,
  line: /\n+/m
};
function zf({
  delayInMs: e = 10,
  chunking: t = "word",
  _internal: { delay: n = Tr } = {}
} = {}) {
  let r;
  if (typeof t == "function")
    r = (s) => {
      const a = t(s);
      if (a == null)
        return null;
      if (!a.length)
        throw new Error("Chunking function must return a non-empty string.");
      if (!s.startsWith(a))
        throw new Error(
          `Chunking function must return a match that is a prefix of the buffer. Received: "${a}" expected to start with "${s}"`
        );
      return a;
    };
  else {
    const s = typeof t == "string" ? Dh[t] : t;
    if (s == null)
      throw new _r({
        argument: "chunking",
        message: `Chunking must be "word" or "line" or a RegExp. Received: ${t}`
      });
    r = (a) => {
      const o = s.exec(a);
      return o ? a.slice(0, o.index) + (o == null ? void 0 : o[0]) : null;
    };
  }
  return () => {
    let s = "";
    return new TransformStream({
      async transform(a, o) {
        if (a.type !== "text") {
          s.length > 0 && (o.enqueue({ type: "text", text: s }), s = ""), o.enqueue(a);
          return;
        }
        s += a.text;
        let i;
        for (; (i = r(s)) != null; )
          o.enqueue({ type: "text", text: i }), s = s.slice(i.length), await n(e);
      }
    });
  };
}
function hi(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
function qh({
  tools: e,
  generatorStream: t,
  toolCallStreaming: n,
  tracer: r,
  telemetry: s,
  system: a,
  messages: o,
  abortSignal: i,
  repairToolCall: l
}) {
  let u = null;
  const c = new ReadableStream({
    start(m) {
      u = m;
    }
  }), p = {}, h = /* @__PURE__ */ new Set();
  let g = !1;
  function v() {
    g && h.size === 0 && u.close();
  }
  const y = new TransformStream({
    async transform(m, b) {
      const S = m.type;
      switch (S) {
        case "stream-start":
        case "finish":
        case "text":
        case "reasoning":
        case "reasoning-part-finish":
        case "source":
        case "response-metadata":
        case "error": {
          b.enqueue(m);
          break;
        }
        case "file": {
          b.enqueue({
            type: "file",
            file: new ah({
              data: m.data,
              mediaType: m.mediaType
            })
          });
          break;
        }
        case "tool-call-delta": {
          n && (p[m.toolCallId] || (b.enqueue({
            type: "tool-call-streaming-start",
            toolCallId: m.toolCallId,
            toolName: m.toolName
          }), p[m.toolCallId] = !0), b.enqueue({
            type: "tool-call-delta",
            toolCallId: m.toolCallId,
            toolName: m.toolName,
            argsTextDelta: m.argsTextDelta
          }));
          break;
        }
        case "tool-call": {
          try {
            const w = await di({
              toolCall: m,
              tools: e,
              repairToolCall: l,
              system: a,
              messages: o
            });
            b.enqueue(w);
            const x = e[w.toolName];
            if (x.execute != null) {
              const _ = st();
              h.add(_), Ae({
                name: "ai.toolCall",
                attributes: X({
                  telemetry: s,
                  attributes: {
                    ...Ee({
                      operationId: "ai.toolCall",
                      telemetry: s
                    }),
                    "ai.toolCall.name": w.toolName,
                    "ai.toolCall.id": w.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(w.args)
                    }
                  }
                }),
                tracer: r,
                fn: async (k) => x.execute(w.args, {
                  toolCallId: w.toolCallId,
                  messages: o,
                  abortSignal: i
                }).then(
                  (O) => {
                    u.enqueue({
                      ...w,
                      type: "tool-result",
                      result: O
                    }), h.delete(_), v();
                    try {
                      k.setAttributes(
                        X({
                          telemetry: s,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(O)
                            }
                          }
                        })
                      );
                    } catch {
                    }
                  },
                  (O) => {
                    u.enqueue({
                      type: "error",
                      error: new wo({
                        toolCallId: w.toolCallId,
                        toolName: w.toolName,
                        toolArgs: w.args,
                        cause: O
                      })
                    }), h.delete(_), v();
                  }
                )
              });
            }
          } catch (w) {
            u.enqueue({
              type: "error",
              error: w
            });
          }
          break;
        }
        default: {
          const w = S;
          throw new Error(`Unhandled chunk type: ${w}`);
        }
      }
    },
    flush() {
      g = !0, v();
    }
  });
  return new ReadableStream({
    async start(m) {
      return Promise.all([
        t.pipeThrough(y).pipeTo(
          new WritableStream({
            write(b) {
              m.enqueue(b);
            },
            close() {
            }
          })
        ),
        c.pipeTo(
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
var Uh = nn({
  prefix: "aitxt",
  size: 24
});
function Wf({
  model: e,
  tools: t,
  toolChoice: n,
  system: r,
  prompt: s,
  messages: a,
  maxRetries: o,
  abortSignal: i,
  headers: l,
  maxSteps: u = 1,
  experimental_output: c,
  experimental_telemetry: p,
  providerOptions: h,
  experimental_toolCallStreaming: g = !1,
  toolCallStreaming: v = g,
  experimental_activeTools: y,
  experimental_repairToolCall: m,
  experimental_transform: b,
  onChunk: S,
  onError: w,
  onFinish: x,
  onStepFinish: _,
  _internal: {
    now: k = li,
    generateId: O = Uh,
    currentDate: N = () => /* @__PURE__ */ new Date()
  } = {},
  ...q
}) {
  return new Zh({
    model: e,
    telemetry: p,
    headers: l,
    settings: q,
    maxRetries: o,
    abortSignal: i,
    system: r,
    prompt: s,
    messages: a,
    tools: t,
    toolChoice: n,
    toolCallStreaming: v,
    transforms: hi(b),
    activeTools: y,
    repairToolCall: m,
    maxSteps: u,
    output: c,
    providerOptions: h,
    onChunk: S,
    onError: w,
    onFinish: x,
    onStepFinish: _,
    now: k,
    currentDate: N,
    generateId: O
  });
}
function Lh(e) {
  if (!e)
    return new TransformStream({
      transform(a, o) {
        o.enqueue({ part: a, partialOutput: void 0 });
      }
    });
  let t = "", n = "", r = "";
  function s({
    controller: a,
    partialOutput: o = void 0
  }) {
    a.enqueue({
      part: { type: "text", text: n },
      partialOutput: o
    }), n = "";
  }
  return new TransformStream({
    async transform(a, o) {
      if (a.type === "finish-step" && s({ controller: o }), a.type !== "text") {
        o.enqueue({ part: a, partialOutput: void 0 });
        return;
      }
      t += a.text, n += a.text;
      const i = await e.parsePartial({ text: t });
      if (i != null) {
        const l = JSON.stringify(i.partial);
        l !== r && (s({ controller: o, partialOutput: i.partial }), r = l);
      }
    },
    flush(a) {
      n.length > 0 && s({ controller: a });
    }
  });
}
var Zh = class {
  constructor({
    model: e,
    telemetry: t,
    headers: n,
    settings: r,
    maxRetries: s,
    abortSignal: a,
    system: o,
    prompt: i,
    messages: l,
    tools: u,
    toolChoice: c,
    toolCallStreaming: p,
    transforms: h,
    activeTools: g,
    repairToolCall: v,
    maxSteps: y,
    output: m,
    providerOptions: b,
    now: S,
    currentDate: w,
    generateId: x,
    onChunk: _,
    onError: k,
    onFinish: O,
    onStepFinish: N
  }) {
    if (this.totalUsagePromise = new rt(), this.finishReasonPromise = new rt(), this.stepsPromise = new rt(), y < 1)
      throw new le({
        parameter: "maxSteps",
        value: y,
        message: "maxSteps must be at least 1"
      });
    this.output = m, this.generateId = x;
    let q, L = [];
    const ee = [];
    let ae, fe, ce = {}, ve = [];
    const te = [];
    let ge;
    const Pe = new TransformStream({
      async transform(U, de) {
        de.enqueue(U);
        const { part: P } = U;
        if ((P.type === "text" || P.type === "reasoning" || P.type === "source" || P.type === "tool-call" || P.type === "tool-result" || P.type === "tool-call-streaming-start" || P.type === "tool-call-delta") && await (_ == null ? void 0 : _({ chunk: P })), P.type === "error" && await (k == null ? void 0 : k({ error: P.error })), P.type === "text") {
          const B = L[L.length - 1];
          (B == null ? void 0 : B.type) === "text" ? B.text += P.text : L.push({ type: "text", text: P.text });
        }
        if (P.type === "reasoning" && (q == null ? (q = {
          type: "reasoning",
          text: P.text,
          providerMetadata: P.providerMetadata
        }, L.push(q)) : (q.text += P.text, q.providerMetadata = P.providerMetadata)), P.type === "reasoning-part-finish" && q != null && (q = void 0), P.type === "file" && L.push({ type: "file", file: P.file }), P.type === "source" && L.push(P), P.type === "tool-call" && L.push(P), P.type === "tool-result" && L.push(P), P.type === "start-step" && (ce = P.request, ve = P.warnings), P.type === "finish-step") {
          const B = vr({
            content: L,
            tools: u ?? {}
          }), xe = new pi({
            content: L,
            finishReason: P.finishReason,
            usage: P.usage,
            warnings: ve,
            request: ce,
            response: {
              ...P.response,
              messages: [...ee, ...B]
            },
            providerMetadata: P.providerMetadata
          });
          await (N == null ? void 0 : N(xe)), te.push(xe), L = [], q = void 0, ee.push(...B);
        }
        P.type === "finish" && (fe = P.totalUsage, ae = P.finishReason);
      },
      async flush(U) {
        try {
          if (te.length === 0)
            return;
          const de = ae ?? "unknown", P = fe ?? {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          };
          K.finishReasonPromise.resolve(de), K.totalUsagePromise.resolve(P), K.stepsPromise.resolve(te);
          const B = te[te.length - 1];
          await (O == null ? void 0 : O({
            finishReason: de,
            totalUsage: P,
            usage: B.usage,
            content: B.content,
            text: B.text,
            reasoningText: B.reasoningText,
            reasoning: B.reasoning,
            files: B.files,
            sources: B.sources,
            toolCalls: B.toolCalls,
            toolResults: B.toolResults,
            request: B.request,
            response: B.response,
            warnings: B.warnings,
            providerMetadata: B.providerMetadata,
            steps: te
          })), ge.setAttributes(
            X({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": de,
                "ai.response.text": { output: () => B.text },
                "ai.response.toolCalls": {
                  output: () => {
                    var xe;
                    return (xe = B.toolCalls) != null && xe.length ? JSON.stringify(B.toolCalls) : void 0;
                  }
                },
                "ai.usage.inputTokens": P.inputTokens,
                "ai.usage.outputTokens": P.outputTokens,
                "ai.usage.totalTokens": P.totalTokens,
                "ai.usage.reasoningTokens": P.reasoningTokens,
                "ai.usage.cachedInputTokens": P.cachedInputTokens
              }
            })
          );
        } catch (de) {
          U.error(de);
        } finally {
          ge.end();
        }
      }
    }), we = ii();
    this.addStream = we.addStream, this.closeStream = we.close;
    let Y = we.stream;
    Y = Y.pipeThrough(
      new TransformStream({
        start(U) {
          U.enqueue({ type: "start" });
        }
      })
    );
    for (const U of h)
      Y = Y.pipeThrough(
        U({
          tools: u,
          stopStream() {
            we.terminate();
          }
        })
      );
    this.baseStream = Y.pipeThrough(Lh(m)).pipeThrough(Pe);
    const { maxRetries: ne, retry: oe } = it({
      maxRetries: s
    }), H = Zt(t), V = Rt(r), ie = Lt({
      model: e,
      telemetry: t,
      headers: n,
      settings: { ...V, maxRetries: ne }
    }), K = this;
    Ae({
      name: "ai.streamText",
      attributes: X({
        telemetry: t,
        attributes: {
          ...Ee({ operationId: "ai.streamText", telemetry: t }),
          ...ie,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: o, prompt: i, messages: l })
          },
          "ai.settings.maxSteps": y
        }
      }),
      tracer: H,
      endWhenDone: !1,
      fn: async (U) => {
        ge = U;
        async function de({
          currentStep: P,
          responseMessages: B,
          usage: xe
        }) {
          const pe = await Gn({
            system: o,
            prompt: i,
            messages: l
          }), G = [
            ...pe.messages,
            ...B
          ], z = await Fn({
            prompt: {
              system: pe.system,
              messages: G
            },
            supportedUrls: await e.supportedUrls
          }), Ge = {
            ...ui({ tools: u, toolChoice: c, activeTools: g })
          }, {
            result: { stream: ft, response: lt, request: Te },
            doStreamSpan: Le,
            startTimestampMs: me
          } = await oe(
            () => Ae({
              name: "ai.streamText.doStream",
              attributes: X({
                telemetry: t,
                attributes: {
                  ...Ee({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...ie,
                  "ai.prompt.messages": {
                    input: () => JSON.stringify(z)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var F;
                      return (F = Ge.tools) == null ? void 0 : F.map(
                        (ke) => JSON.stringify(ke)
                      );
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => Ge.toolChoice != null ? JSON.stringify(Ge.toolChoice) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": e.provider,
                  "gen_ai.request.model": e.modelId,
                  "gen_ai.request.frequency_penalty": V.frequencyPenalty,
                  "gen_ai.request.max_tokens": V.maxOutputTokens,
                  "gen_ai.request.presence_penalty": V.presencePenalty,
                  "gen_ai.request.stop_sequences": V.stopSequences,
                  "gen_ai.request.temperature": V.temperature,
                  "gen_ai.request.top_k": V.topK,
                  "gen_ai.request.top_p": V.topP
                }
              }),
              tracer: H,
              endWhenDone: !1,
              fn: async (F) => ({
                startTimestampMs: S(),
                // get before the call
                doStreamSpan: F,
                result: await e.doStream({
                  ...V,
                  ...Ge,
                  responseFormat: m == null ? void 0 : m.responseFormat,
                  prompt: z,
                  providerOptions: b,
                  abortSignal: a,
                  headers: n
                })
              })
            })
          ), ut = qh({
            tools: u,
            generatorStream: ft,
            toolCallStreaming: p,
            tracer: H,
            telemetry: t,
            system: o,
            messages: G,
            repairToolCall: v,
            abortSignal: a
          }), on = Te ?? {}, Vt = [], Dr = [];
          let Hn;
          const At = [];
          let Ot, Mt = "unknown", Ze = {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }, qr, Ur = !0, Lr = "", Je = {
            id: x(),
            timestamp: w(),
            modelId: e.modelId
          };
          async function _i({
            controller: F,
            chunk: ke
          }) {
            F.enqueue(ke), Lr += ke.text;
          }
          K.addStream(
            ut.pipeThrough(
              new TransformStream({
                async transform(F, ke) {
                  var Bt, zn, Zr, Vr;
                  if (F.type === "stream-start") {
                    Hn = F.warnings;
                    return;
                  }
                  if (Ur) {
                    const mt = S() - me;
                    Ur = !1, Le.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": mt
                    }), Le.setAttributes({
                      "ai.response.msToFirstChunk": mt
                    }), ke.enqueue({
                      type: "start-step",
                      request: on,
                      warnings: Hn ?? []
                    });
                  }
                  if (F.type === "text" && F.text.length === 0)
                    return;
                  const Br = F.type;
                  switch (Br) {
                    case "text": {
                      await _i({ controller: ke, chunk: F });
                      break;
                    }
                    case "reasoning": {
                      ke.enqueue(F), Ot == null ? (Ot = {
                        type: "reasoning",
                        text: F.text,
                        providerMetadata: F.providerMetadata
                      }, At.push(Ot)) : (Ot.text += F.text, Ot.providerMetadata = F.providerMetadata);
                      break;
                    }
                    case "reasoning-part-finish": {
                      Ot = void 0, ke.enqueue(F);
                      break;
                    }
                    case "tool-call": {
                      ke.enqueue(F), Vt.push(F), At.push(F);
                      break;
                    }
                    case "tool-result": {
                      ke.enqueue(F), Dr.push(F), At.push(F);
                      break;
                    }
                    case "response-metadata": {
                      Je = {
                        id: (Bt = F.id) != null ? Bt : Je.id,
                        timestamp: (zn = F.timestamp) != null ? zn : Je.timestamp,
                        modelId: (Zr = F.modelId) != null ? Zr : Je.modelId
                      };
                      break;
                    }
                    case "finish": {
                      Ze = F.usage, Mt = F.finishReason, qr = F.providerMetadata;
                      const mt = S() - me;
                      Le.addEvent("ai.stream.finish"), Le.setAttributes({
                        "ai.response.msToFinish": mt,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((Vr = Ze.outputTokens) != null ? Vr : 0) / mt
                      });
                      break;
                    }
                    case "file": {
                      At.push(F), ke.enqueue(F);
                      break;
                    }
                    case "source": {
                      At.push(F), ke.enqueue(F);
                      break;
                    }
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      ke.enqueue(F);
                      break;
                    }
                    case "error": {
                      ke.enqueue(F), Mt = "error";
                      break;
                    }
                    default: {
                      const mt = Br;
                      throw new Error(`Unknown chunk type: ${mt}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(F) {
                  const ke = Vt.length > 0 ? JSON.stringify(Vt) : void 0;
                  try {
                    Le.setAttributes(
                      X({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Mt,
                          "ai.response.text": { output: () => Lr },
                          "ai.response.toolCalls": {
                            output: () => ke
                          },
                          "ai.response.id": Je.id,
                          "ai.response.model": Je.modelId,
                          "ai.response.timestamp": Je.timestamp.toISOString(),
                          "ai.usage.inputTokens": Ze.inputTokens,
                          "ai.usage.outputTokens": Ze.outputTokens,
                          "ai.usage.totalTokens": Ze.totalTokens,
                          "ai.usage.reasoningTokens": Ze.reasoningTokens,
                          "ai.usage.cachedInputTokens": Ze.cachedInputTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [Mt],
                          "gen_ai.response.id": Je.id,
                          "gen_ai.response.model": Je.modelId,
                          "gen_ai.usage.input_tokens": Ze.inputTokens,
                          "gen_ai.usage.output_tokens": Ze.outputTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    Le.end();
                  }
                  F.enqueue({
                    type: "finish-step",
                    finishReason: Mt,
                    usage: Ze,
                    providerMetadata: qr,
                    response: {
                      ...Je,
                      headers: lt == null ? void 0 : lt.headers
                    }
                  });
                  const Bt = ci(xe, Ze);
                  P + 1 < y && // there are tool calls:
                  Vt.length > 0 && // all current tool calls have results:
                  Dr.length === Vt.length ? (B.push(
                    ...vr({
                      content: At,
                      tools: u ?? {}
                    })
                  ), await de({
                    currentStep: P + 1,
                    responseMessages: B,
                    usage: Bt
                  })) : (F.enqueue({
                    type: "finish",
                    finishReason: Mt,
                    totalUsage: Bt
                  }), K.closeStream());
                }
              })
            )
          );
        }
        await de({
          currentStep: 0,
          responseMessages: [],
          usage: {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0
          }
        });
      }
    }).catch((U) => {
      K.addStream(
        new ReadableStream({
          start(de) {
            de.enqueue({ type: "error", error: U }), de.close();
          }
        })
      ), K.closeStream();
    });
  }
  get steps() {
    return this.stepsPromise.value;
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
  get toolResults() {
    return this.finalStep.then((e) => e.toolResults);
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
    return this.totalUsagePromise.value;
  }
  get finishReason() {
    return this.finishReasonPromise.value;
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
    return _t(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part: e }, t) {
            e.type === "text" && t.enqueue(e.text);
          }
        })
      )
    );
  }
  get fullStream() {
    return _t(
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
      await Zn({
        stream: this.fullStream,
        onError: e == null ? void 0 : e.onError
      });
    } catch (n) {
      (t = e == null ? void 0 : e.onError) == null || t.call(e, n);
    }
  }
  get experimental_partialOutputStream() {
    if (this.output == null)
      throw new co();
    return _t(
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
    newMessageId: e,
    originalMessages: t = [],
    onFinish: n,
    messageMetadata: r,
    sendReasoning: s = !1,
    sendSources: a = !1,
    experimental_sendStart: o = !0,
    experimental_sendFinish: i = !0,
    onError: l = () => "An error occurred."
    // mask error messages for safety by default
  } = {}) {
    const u = t[t.length - 1], p = (u == null ? void 0 : u.role) === "assistant" ? u.id : e, h = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (y, m) => {
          const b = y.type;
          switch (b) {
            case "text": {
              m.enqueue({
                type: "text",
                text: y.text
              });
              break;
            }
            case "reasoning": {
              s && m.enqueue({
                type: "reasoning",
                text: y.text,
                providerMetadata: y.providerMetadata
              });
              break;
            }
            case "reasoning-part-finish": {
              s && m.enqueue({ type: "reasoning-part-finish" });
              break;
            }
            case "file": {
              m.enqueue({
                type: "file",
                mediaType: y.file.mediaType,
                url: `data:${y.file.mediaType};base64,${y.file.base64}`
              });
              break;
            }
            case "source": {
              a && m.enqueue({
                type: "source",
                sourceType: y.sourceType,
                id: y.id,
                url: y.url,
                title: y.title,
                providerMetadata: y.providerMetadata
              });
              break;
            }
            case "tool-call-streaming-start": {
              m.enqueue({
                type: "tool-call-streaming-start",
                toolCallId: y.toolCallId,
                toolName: y.toolName
              });
              break;
            }
            case "tool-call-delta": {
              m.enqueue({
                type: "tool-call-delta",
                toolCallId: y.toolCallId,
                argsTextDelta: y.argsTextDelta
              });
              break;
            }
            case "tool-call": {
              m.enqueue({
                type: "tool-call",
                toolCallId: y.toolCallId,
                toolName: y.toolName,
                args: y.args
              });
              break;
            }
            case "tool-result": {
              m.enqueue({
                type: "tool-result",
                toolCallId: y.toolCallId,
                result: y.result
              });
              break;
            }
            case "error": {
              m.enqueue({
                type: "error",
                errorText: l(y.error)
              });
              break;
            }
            case "start-step": {
              const S = r == null ? void 0 : r({ part: y });
              m.enqueue({
                type: "start-step",
                metadata: S
              });
              break;
            }
            case "finish-step": {
              const S = r == null ? void 0 : r({ part: y });
              m.enqueue({
                type: "finish-step",
                metadata: S
              });
              break;
            }
            case "start": {
              if (o) {
                const S = r == null ? void 0 : r({ part: y });
                m.enqueue({
                  type: "start",
                  messageId: p,
                  metadata: S
                });
              }
              break;
            }
            case "finish": {
              if (i) {
                const S = r == null ? void 0 : r({ part: y });
                m.enqueue({
                  type: "finish",
                  metadata: S
                });
              }
              break;
            }
            default: {
              const S = b;
              throw new Error(`Unknown chunk type: ${S}`);
            }
          }
        }
      })
    );
    if (n == null)
      return h;
    const g = Pr({
      lastMessage: u,
      newMessageId: p ?? this.generateId()
    });
    return $r({
      stream: h,
      runUpdateMessageJob: async (y) => {
        await y({ state: g, write: () => {
        } });
      }
    }).pipeThrough(
      new TransformStream({
        transform(y, m) {
          m.enqueue(y);
        },
        flush() {
          const y = g.message.id === (u == null ? void 0 : u.id);
          n({
            isContinuation: y,
            responseMessage: g.message,
            messages: [
              ...y ? t.slice(0, -1) : t,
              g.message
            ]
          });
        }
      })
    );
  }
  pipeUIMessageStreamToResponse(e, {
    newMessageId: t,
    originalMessages: n,
    onFinish: r,
    messageMetadata: s,
    sendReasoning: a,
    sendSources: o,
    experimental_sendFinish: i,
    experimental_sendStart: l,
    onError: u,
    ...c
  } = {}) {
    Xp({
      response: e,
      stream: this.toUIMessageStream({
        newMessageId: t,
        originalMessages: n,
        onFinish: r,
        messageMetadata: s,
        sendReasoning: a,
        sendSources: o,
        experimental_sendFinish: i,
        experimental_sendStart: l,
        onError: u
      }),
      ...c
    });
  }
  pipeTextStreamToResponse(e, t) {
    Uo({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toUIMessageStreamResponse({
    newMessageId: e,
    originalMessages: t,
    onFinish: n,
    messageMetadata: r,
    sendReasoning: s,
    sendSources: a,
    experimental_sendFinish: o,
    experimental_sendStart: i,
    onError: l,
    ...u
  } = {}) {
    return Kp({
      stream: this.toUIMessageStream({
        newMessageId: e,
        originalMessages: t,
        onFinish: n,
        messageMetadata: r,
        sendReasoning: s,
        sendSources: a,
        experimental_sendFinish: o,
        experimental_sendStart: i,
        onError: l
      }),
      ...u
    });
  }
  toTextStreamResponse(e) {
    return Do({
      textStream: this.textStream,
      ...e
    });
  }
};
function Yf({
  settings: e
}) {
  return {
    middlewareVersion: "v2",
    transformParams: async ({ params: t }) => Mn(e, t)
  };
}
function Vh(e, t) {
  if (t.length === 0)
    return null;
  const n = e.indexOf(t);
  if (n !== -1)
    return n;
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e.substring(r);
    if (t.startsWith(s))
      return r;
  }
  return null;
}
function Kf({
  tagName: e,
  separator: t = `
`,
  startWithReasoning: n = !1
}) {
  const r = `<${e}>`, s = `</${e}>`;
  return {
    middlewareVersion: "v2",
    wrapGenerate: async ({ doGenerate: a }) => {
      const { content: o, ...i } = await a(), l = [];
      for (const u of o) {
        if (u.type !== "text") {
          l.push(u);
          continue;
        }
        const c = n ? r + u.text : u.text, p = new RegExp(`${r}(.*?)${s}`, "gs"), h = Array.from(c.matchAll(p));
        if (!h.length) {
          l.push(u);
          continue;
        }
        const g = h.map((y) => y[1]).join(t);
        let v = c;
        for (let y = h.length - 1; y >= 0; y--) {
          const m = h[y], b = v.slice(0, m.index), S = v.slice(
            m.index + m[0].length
          );
          v = b + (b.length > 0 && S.length > 0 ? t : "") + S;
        }
        l.push({
          type: "reasoning",
          text: g
        }), l.push({
          type: "text",
          text: v
        });
      }
      return { content: l, ...i };
    },
    wrapStream: async ({ doStream: a }) => {
      const { stream: o, ...i } = await a();
      let l = !0, u = !0, c = !1, p = n, h = "";
      return {
        stream: o.pipeThrough(
          new TransformStream({
            transform: (g, v) => {
              if (g.type !== "text") {
                v.enqueue(g);
                return;
              }
              h += g.text;
              function y(m) {
                if (m.length > 0) {
                  const b = c && (p ? !l : !u) ? t : "";
                  v.enqueue(
                    p ? {
                      type: "reasoning",
                      text: b + m
                    } : {
                      type: "text",
                      text: b + m
                    }
                  ), c = !1, p ? l = !1 : u = !1;
                }
              }
              do {
                const m = p ? s : r, b = Vh(h, m);
                if (b == null) {
                  y(h), h = "";
                  break;
                }
                if (y(h.slice(0, b)), b + m.length <= h.length)
                  h = h.slice(b + m.length), p && v.enqueue({ type: "reasoning-part-finish" }), p = !p, c = !0;
                else {
                  h = h.slice(b);
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
function Xf() {
  return {
    middlewareVersion: "v2",
    wrapStream: async ({ doGenerate: e }) => {
      const t = await e();
      return {
        stream: new ReadableStream({
          start(r) {
            r.enqueue({
              type: "stream-start",
              warnings: t.warnings
            }), r.enqueue({ type: "response-metadata", ...t.response });
            for (const s of t.content)
              r.enqueue(s);
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
var Qf = ({
  model: e,
  middleware: t,
  modelId: n,
  providerId: r
}) => hi(t).reverse().reduce((s, a) => Bh({ model: s, middleware: a, modelId: n, providerId: r }), e), Bh = ({
  model: e,
  middleware: { transformParams: t, wrapGenerate: n, wrapStream: r },
  modelId: s,
  providerId: a
}) => {
  async function o({
    params: i,
    type: l
  }) {
    return t ? await t({ params: i, type: l }) : i;
  }
  return {
    specificationVersion: "v2",
    provider: a ?? e.provider,
    modelId: s ?? e.modelId,
    // TODO middleware should be able to modify the supported urls
    get supportedUrls() {
      return e.supportedUrls;
    },
    async doGenerate(i) {
      const l = await o({ params: i, type: "generate" }), u = async () => e.doGenerate(l);
      return n ? n({
        doGenerate: u,
        doStream: async () => e.doStream(l),
        params: l,
        model: e
      }) : u();
    },
    async doStream(i) {
      const l = await o({ params: i, type: "stream" }), u = async () => e.doGenerate(l), c = async () => e.doStream(l);
      return r ? r({ doGenerate: u, doStream: c, params: l, model: e }) : c();
    }
  };
};
function Fh({
  languageModels: e,
  textEmbeddingModels: t,
  imageModels: n,
  fallbackProvider: r
}) {
  return {
    languageModel(s) {
      if (e != null && s in e)
        return e[s];
      if (r)
        return r.languageModel(s);
      throw new je({ modelId: s, modelType: "languageModel" });
    },
    textEmbeddingModel(s) {
      if (t != null && s in t)
        return t[s];
      if (r)
        return r.textEmbeddingModel(s);
      throw new je({ modelId: s, modelType: "textEmbeddingModel" });
    },
    imageModel(s) {
      if (n != null && s in n)
        return n[s];
      if (r != null && r.imageModel)
        return r.imageModel(s);
      throw new je({ modelId: s, modelType: "imageModel" });
    }
  };
}
var em = Fh, fi = "AI_NoSuchProviderError", mi = `vercel.ai.error.${fi}`, Gh = Symbol.for(mi), gi, Jh = class extends je {
  constructor({
    modelId: e,
    modelType: t,
    providerId: n,
    availableProviders: r,
    message: s = `No such provider: ${n} (available providers: ${r.join()})`
  }) {
    super({ errorName: fi, modelId: e, modelType: t, message: s }), this[gi] = !0, this.providerId = n, this.availableProviders = r;
  }
  static isInstance(e) {
    return j.hasMarker(e, mi);
  }
};
gi = Gh;
function Hh(e, {
  separator: t = ":"
} = {}) {
  const n = new zh({
    separator: t
  });
  for (const [r, s] of Object.entries(e))
    n.registerProvider({ id: r, provider: s });
  return n;
}
var tm = Hh, zh = class {
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
      throw new Jh({
        modelId: e,
        modelType: "languageModel",
        providerId: e,
        availableProviders: Object.keys(this.providers)
      });
    return t;
  }
  splitId(e, t) {
    const n = e.indexOf(this.separator);
    if (n === -1)
      throw new je({
        modelId: e,
        modelType: t,
        message: `Invalid ${t} id for registry: ${e} (must be in the format "providerId${this.separator}modelId")`
      });
    return [e.slice(0, n), e.slice(n + this.separator.length)];
  }
  languageModel(e) {
    var t, n;
    const [r, s] = this.splitId(e, "languageModel"), a = (n = (t = this.getProvider(r)).languageModel) == null ? void 0 : n.call(t, s);
    if (a == null)
      throw new je({ modelId: e, modelType: "languageModel" });
    return a;
  }
  textEmbeddingModel(e) {
    var t;
    const [n, r] = this.splitId(e, "textEmbeddingModel"), s = this.getProvider(n), a = (t = s.textEmbeddingModel) == null ? void 0 : t.call(s, r);
    if (a == null)
      throw new je({
        modelId: e,
        modelType: "textEmbeddingModel"
      });
    return a;
  }
  imageModel(e) {
    var t;
    const [n, r] = this.splitId(e, "imageModel"), s = this.getProvider(n), a = (t = s.imageModel) == null ? void 0 : t.call(s, r);
    if (a == null)
      throw new je({ modelId: e, modelType: "imageModel" });
    return a;
  }
};
function nm(e) {
  return e;
}
var yi = "2024-11-05", Wh = [
  yi,
  "2024-10-07"
], Yh = f({
  name: d(),
  version: d()
}).passthrough(), jr = f({
  _meta: be(f({}).passthrough())
}).passthrough(), Qt = jr, Kh = f({
  method: d(),
  params: be(jr)
}), Xh = f({
  experimental: be(f({}).passthrough()),
  logging: be(f({}).passthrough()),
  prompts: be(
    f({
      listChanged: be(ue())
    }).passthrough()
  ),
  resources: be(
    f({
      subscribe: be(ue()),
      listChanged: be(ue())
    }).passthrough()
  ),
  tools: be(
    f({
      listChanged: be(ue())
    }).passthrough()
  )
}).passthrough(), Qh = Qt.extend({
  protocolVersion: d(),
  capabilities: Xh,
  serverInfo: Yh,
  instructions: be(d())
}), ef = Qt.extend({
  nextCursor: be(d())
}), tf = f({
  name: d(),
  description: be(d()),
  inputSchema: f({
    type: C("object"),
    properties: be(f({}).passthrough())
  }).passthrough()
}).passthrough(), nf = ef.extend({
  tools: M(tf)
}), rf = f({
  type: C("text"),
  text: d()
}).passthrough(), sf = f({
  type: C("image"),
  data: d().base64(),
  mimeType: d()
}).passthrough(), vi = f({
  /**
   * The URI of this resource.
   */
  uri: d(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: be(d())
}).passthrough(), af = vi.extend({
  text: d()
}), of = vi.extend({
  blob: d().base64()
}), lf = f({
  type: C("resource"),
  resource: se([af, of])
}).passthrough(), uf = Qt.extend({
  content: M(
    se([rf, sf, lf])
  ),
  isError: ue().default(!1).optional()
}).or(
  Qt.extend({
    toolResult: Me()
  })
), Jn = "2.0", cf = f({
  jsonrpc: C(Jn),
  id: se([d(), T().int()])
}).merge(Kh).strict(), df = f({
  jsonrpc: C(Jn),
  id: se([d(), T().int()]),
  result: Qt
}).strict(), pf = f({
  jsonrpc: C(Jn),
  id: se([d(), T().int()]),
  error: f({
    code: T().int(),
    message: d(),
    data: be(Me())
  })
}).strict(), hf = f({
  jsonrpc: C(Jn)
}).merge(
  f({
    method: d(),
    params: be(jr)
  })
).strict(), ff = se([
  cf,
  hf,
  df,
  pf
]), mf = class {
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
        var r, s, a;
        try {
          const o = new Headers(this.headers);
          o.set("Accept", "text/event-stream");
          const i = await fetch(this.url.href, {
            headers: o,
            signal: (r = this.abortController) == null ? void 0 : r.signal
          });
          if (!i.ok || !i.body) {
            const p = new _e({
              message: `MCP SSE Transport Error: ${i.status} ${i.statusText}`
            });
            return (s = this.onerror) == null || s.call(this, p), t(p);
          }
          const u = i.body.pipeThrough(new TextDecoderStream()).pipeThrough(xa()).getReader(), c = async () => {
            var p, h, g;
            try {
              for (; ; ) {
                const { done: v, value: y } = await u.read();
                if (v) {
                  if (this.connected)
                    throw this.connected = !1, new _e({
                      message: "MCP SSE Transport Error: Connection closed unexpectedly"
                    });
                  return;
                }
                const { event: m, data: b } = y;
                if (m === "endpoint") {
                  if (this.endpoint = new URL(b, this.url), this.endpoint.origin !== this.url.origin)
                    throw new _e({
                      message: `MCP SSE Transport Error: Endpoint origin does not match connection origin: ${this.endpoint.origin}`
                    });
                  this.connected = !0, e();
                } else if (m === "message")
                  try {
                    const S = ff.parse(
                      JSON.parse(b)
                    );
                    (p = this.onmessage) == null || p.call(this, S);
                  } catch (S) {
                    const w = new _e({
                      message: "MCP SSE Transport Error: Failed to parse message",
                      cause: S
                    });
                    (h = this.onerror) == null || h.call(this, w);
                  }
              }
            } catch (v) {
              if (v instanceof Error && v.name === "AbortError")
                return;
              (g = this.onerror) == null || g.call(this, v), t(v);
            }
          };
          this.sseConnection = {
            close: () => u.cancel()
          }, c();
        } catch (o) {
          if (o instanceof Error && o.name === "AbortError")
            return;
          (a = this.onerror) == null || a.call(this, o), t(o);
        }
      })();
    });
  }
  async close() {
    var e, t, n;
    this.connected = !1, (e = this.sseConnection) == null || e.close(), (t = this.abortController) == null || t.abort(), (n = this.onclose) == null || n.call(this);
  }
  async send(e) {
    var t, n, r;
    if (!this.endpoint || !this.connected)
      throw new _e({
        message: "MCP SSE Transport Error: Not connected"
      });
    try {
      const s = new Headers(this.headers);
      s.set("Content-Type", "application/json");
      const a = {
        method: "POST",
        headers: s,
        body: JSON.stringify(e),
        signal: (t = this.abortController) == null ? void 0 : t.signal
      }, o = await fetch(this.endpoint, a);
      if (!o.ok) {
        const i = await o.text().catch(() => null), l = new _e({
          message: `MCP SSE Transport Error: POSTing to endpoint (HTTP ${o.status}): ${i}`
        });
        (n = this.onerror) == null || n.call(this, l);
        return;
      }
    } catch (s) {
      (r = this.onerror) == null || r.call(this, s);
      return;
    }
  }
};
function gf(e) {
  if (e.type !== "sse")
    throw new _e({
      message: "Unsupported or invalid transport configuration. If you are using a custom transport, make sure it implements the MCPTransport interface."
    });
  return new mf(e);
}
function yf(e) {
  return "start" in e && typeof e.start == "function" && "send" in e && typeof e.send == "function" && "close" in e && typeof e.close == "function";
}
var vf = "1.0.0";
async function rm(e) {
  const t = new _f(e);
  return await t.init(), t;
}
var _f = class {
  constructor({
    transport: e,
    name: t = "ai-sdk-mcp-client",
    onUncaughtError: n
  }) {
    this.requestMessageId = 0, this.responseHandlers = /* @__PURE__ */ new Map(), this.serverCapabilities = {}, this.isClosed = !0, this.onUncaughtError = n, yf(e) ? this.transport = e : this.transport = gf(e), this.transport.onclose = () => this.onClose(), this.transport.onerror = (r) => this.onError(r), this.transport.onmessage = (r) => {
      if ("method" in r) {
        this.onError(
          new _e({
            message: "Unsupported message type"
          })
        );
        return;
      }
      this.onResponse(r);
    }, this.clientInfo = {
      name: t,
      version: vf
    };
  }
  async init() {
    try {
      await this.transport.start(), this.isClosed = !1;
      const e = await this.request({
        request: {
          method: "initialize",
          params: {
            protocolVersion: yi,
            capabilities: {},
            clientInfo: this.clientInfo
          }
        },
        resultSchema: Qh
      });
      if (e === void 0)
        throw new _e({
          message: "Server sent invalid initialize result"
        });
      if (!Wh.includes(e.protocolVersion))
        throw new _e({
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
          throw new _e({
            message: "Server does not support tools"
          });
        break;
      default:
        throw new _e({
          message: `Unsupported method: ${e}`
        });
    }
  }
  async request({
    request: e,
    resultSchema: t,
    options: n
  }) {
    return new Promise((r, s) => {
      if (this.isClosed)
        return s(
          new _e({
            message: "Attempted to send a request from a closed client"
          })
        );
      this.assertCapability(e.method);
      const a = n == null ? void 0 : n.signal;
      a == null || a.throwIfAborted();
      const o = this.requestMessageId++, i = {
        ...e,
        jsonrpc: "2.0",
        id: o
      }, l = () => {
        this.responseHandlers.delete(o);
      };
      this.responseHandlers.set(o, (u) => {
        if (a != null && a.aborted)
          return s(
            new _e({
              message: "Request was aborted",
              cause: a.reason
            })
          );
        if (u instanceof Error)
          return s(u);
        try {
          const c = t.parse(u.result);
          r(c);
        } catch (c) {
          const p = new _e({
            message: "Failed to parse server response",
            cause: c
          });
          s(p);
        }
      }), this.transport.send(i).catch((u) => {
        l(), s(u);
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
        resultSchema: nf,
        options: t
      });
    } catch (n) {
      throw n;
    }
  }
  async callTool({
    name: e,
    args: t,
    options: n
  }) {
    try {
      return this.request({
        request: { method: "tools/call", params: { name: e, arguments: t } },
        resultSchema: uf,
        options: {
          signal: n == null ? void 0 : n.abortSignal
        }
      });
    } catch (r) {
      throw r;
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
    const n = {};
    try {
      const r = await this.listTools();
      for (const { name: s, description: a, inputSchema: o } of r.tools) {
        if (e !== "automatic" && !(s in e))
          continue;
        const i = e === "automatic" ? Ir({
          ...o,
          properties: (t = o.properties) != null ? t : {},
          additionalProperties: !1
        }) : e[s].parameters, l = this, u = {
          description: a,
          parameters: i,
          execute: async (c, p) => {
            var h;
            return (h = p == null ? void 0 : p.abortSignal) == null || h.throwIfAborted(), l.callTool({
              name: s,
              args: c,
              options: p
            });
          }
        };
        n[s] = u;
      }
      return n;
    } catch (r) {
      throw r;
    }
  }
  onClose() {
    if (this.isClosed)
      return;
    this.isClosed = !0;
    const e = new _e({
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
    const t = Number(e.id), n = this.responseHandlers.get(t);
    if (n === void 0)
      throw new _e({
        message: `Protocol error: Received a response for an unknown message ID: ${JSON.stringify(
          e
        )}`
      });
    this.responseHandlers.delete(t), n(
      "result" in e ? e : new _e({
        message: e.error.message,
        cause: e.error
      })
    );
  }
}, bf = class extends j {
  constructor(e) {
    super({
      name: "AI_NoTranscriptGeneratedError",
      message: "No transcript generated."
    }), this.responses = e.responses;
  }
};
async function sm({
  model: e,
  audio: t,
  providerOptions: n = {},
  maxRetries: r,
  abortSignal: s,
  headers: a
}) {
  const { retry: o } = it({ maxRetries: r }), i = t instanceof URL ? (await Wo({ url: t })).data : lh(t), l = await o(
    () => {
      var u;
      return e.doGenerate({
        audio: i,
        abortSignal: s,
        headers: a,
        providerOptions: n,
        mediaType: (u = Vn({
          data: i,
          signatures: zo
        })) != null ? u : "audio/wav"
      });
    }
  );
  if (!l.text)
    throw new bf({ responses: [l.response] });
  return new wf({
    text: l.text,
    segments: l.segments,
    language: l.language,
    durationInSeconds: l.durationInSeconds,
    warnings: l.warnings,
    responses: [l.response],
    providerMetadata: l.providerMetadata
  });
}
var wf = class {
  constructor(e) {
    var t;
    this.text = e.text, this.segments = e.segments, this.language = e.language, this.durationInSeconds = e.durationInSeconds, this.warnings = e.warnings, this.responses = e.responses, this.providerMetadata = (t = e.providerMetadata) != null ? t : {};
  }
};
export {
  j as AISDKError,
  $e as APICallError,
  zp as ChatStore,
  Wp as DefaultChatTransport,
  sr as DownloadError,
  ki as EmptyResponseBodyError,
  le as InvalidArgumentError,
  vs as InvalidDataContentError,
  Dp as InvalidMessageRoleError,
  gt as InvalidPromptError,
  Wn as InvalidResponseDataError,
  kf as InvalidStreamPartError,
  Xa as InvalidToolArgumentsError,
  zt as JSONParseError,
  Go as JsonToSseTransformStream,
  ln as LoadAPIKeyError,
  _e as MCPClientError,
  _s as MessageConversionError,
  Tf as NoContentGeneratedError,
  Rp as NoImageGeneratedError,
  dt as NoObjectGeneratedError,
  co as NoOutputSpecifiedError,
  je as NoSuchModelError,
  Jh as NoSuchProviderError,
  mr as NoSuchToolError,
  Ph as Output,
  bs as RetryError,
  Np as ToolCallRepairError,
  wo as ToolExecutionError,
  De as TypeValidationError,
  he as UnsupportedFunctionalityError,
  Sf as appendClientMessage,
  Dt as asSchema,
  ni as assistantModelMessageSchema,
  If as callChatApi,
  Cf as callCompletionApi,
  Rf as convertFileListToFileUIParts,
  Ef as convertToCoreMessages,
  Yp as convertToModelMessages,
  Lf as coreAssistantMessageSchema,
  Vf as coreMessageSchema,
  qf as coreSystemMessageSchema,
  Zf as coreToolMessageSchema,
  Uf as coreUserMessageSchema,
  Nf as cosineSimilarity,
  qu as createAnthropic,
  tc as createGoogleGenerativeAI,
  nn as createIdGenerator,
  dc as createMistral,
  id as createOpenAI,
  Hh as createProviderRegistry,
  Do as createTextStreamResponse,
  Of as createUIMessageStream,
  Kp as createUIMessageStreamResponse,
  Fh as customProvider,
  Af as defaultChatStore,
  Yf as defaultSettingsMiddleware,
  $f as embed,
  jf as embedMany,
  rm as experimental_createMCPClient,
  tm as experimental_createProviderRegistry,
  em as experimental_customProvider,
  Df as experimental_generateImage,
  Gf as experimental_generateSpeech,
  sm as experimental_transcribe,
  Nn as extractMaxToolInvocationStep,
  Kf as extractReasoningMiddleware,
  st as generateId,
  Bf as generateObject,
  Hf as generateText,
  Mf as getTextFromDataUrl,
  qt as getToolInvocations,
  Jf as hasToolCall,
  Bo as isAssistantMessageWithCompletedToolCalls,
  Pn as isDeepEqualData,
  Ir as jsonSchema,
  Ah as maxSteps,
  si as modelMessageSchema,
  Nr as parsePartialJson,
  Uo as pipeTextStreamToResponse,
  Xp as pipeUIMessageStreamToResponse,
  Jp as shouldResubmitMessages,
  Pf as simulateReadableStream,
  Xf as simulateStreamingMiddleware,
  zf as smoothStream,
  Ff as streamObject,
  Wf as streamText,
  ei as systemModelMessageSchema,
  nm as tool,
  ri as toolModelMessageSchema,
  Hp as updateToolCallResult,
  ti as userModelMessageSchema,
  Qf as wrapLanguageModel
};
