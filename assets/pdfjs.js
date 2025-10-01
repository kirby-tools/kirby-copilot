var jg = Object.defineProperty;
var cf = (d) => {
  throw TypeError(d);
};
var Vg = (d, t, e) => t in d ? jg(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var k = (d, t, e) => Vg(d, typeof t != "symbol" ? t + "" : t, e), Ad = (d, t, e) => t.has(d) || cf("Cannot " + e);
var n = (d, t, e) => (Ad(d, t, "read from private field"), e ? e.call(d) : t.get(d)), g = (d, t, e) => t.has(d) ? cf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), f = (d, t, e, s) => (Ad(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), b = (d, t, e) => (Ad(d, t, "access private method"), e);
var Lt = (d, t, e, s) => ({
  set _(i) {
    f(d, t, i, e);
  },
  get _() {
    return n(d, t, s);
  }
});
const pe = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), xd = [1e-3, 0, 0, 1e-3, 0, 0], yd = 1.35, Ge = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Wi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Lf = "pdfjs_internal_editor_", U = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
}, J = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
}, Wg = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Xt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, sc = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Pt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, ca = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, ld = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, ll = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
}, qh = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
}, Xg = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let hd = ld.WARNINGS;
function qg(d) {
  Number.isInteger(d) && (hd = d);
}
function Yg() {
  return hd;
}
function cd(d) {
  hd >= ld.INFOS && console.log(`Info: ${d}`);
}
function j(d) {
  hd >= ld.WARNINGS && console.log(`Warning: ${d}`);
}
function dt(d) {
  throw new Error(d);
}
function Rt(d, t) {
  d || dt(t);
}
function Kg(d) {
  switch (d == null ? void 0 : d.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function If(d, t = null, e = null) {
  if (!d)
    return null;
  if (e && typeof d == "string") {
    if (e.addDefaultProtocol && d.startsWith("www.")) {
      const i = d.match(/\./g);
      (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
    }
    if (e.tryConvertEncoding)
      try {
        d = em(d);
      } catch {
      }
  }
  const s = t ? URL.parse(d, t) : URL.parse(d);
  return Kg(s) ? s : null;
}
function Ff(d, t, e = !1) {
  const s = URL.parse(d);
  return s ? (s.hash = t, s.href) : e && If(d, "http://example.com") ? d.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function Y(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const oa = (function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
})();
class df extends oa {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class wd extends oa {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class kd extends oa {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class Dc extends oa {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
}
class Qg extends oa {
  constructor(t) {
    super(t, "FormatError");
  }
}
class $n extends oa {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Nf(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && dt("Invalid argument for bytesToString");
  const t = d.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, d);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const r = Math.min(i + e, t), a = d.subarray(i, r);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function Gh(d) {
  typeof d != "string" && dt("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function Jg(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function Zg() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function tm() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class ie {
  static get isLittleEndian() {
    return Y(this, "isLittleEndian", Zg());
  }
  static get isEvalSupported() {
    return Y(this, "isEvalSupported", tm());
  }
  static get isOffscreenCanvasSupported() {
    return Y(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return Y(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return Y(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return Y(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const vd = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var zi, ic, Pd;
class O {
  static makeHexColor(t, e, s) {
    return `#${vd[t]}${vd[e]}${vd[s]}`;
  }
  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, s = 0) {
    const i = t[s], r = t[s + 1];
    t[s] = i * e[0] + r * e[2] + e[4], t[s + 1] = i * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, s = 0) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5];
    for (let c = 0; c < 6; c += 2) {
      const u = t[s + c], p = t[s + c + 1];
      t[s + c] = u * i + p * a + l, t[s + c + 1] = u * r + p * o + h;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0], i = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-s * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, s) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5], c = t[0], u = t[1], p = t[2], m = t[3];
    let A = i * c + l, y = A, v = i * p + l, w = v, S = o * u + h, _ = S, E = o * m + h, C = E;
    if (r !== 0 || a !== 0) {
      const T = r * c, x = r * p, P = a * u, M = a * m;
      A += P, w += P, v += M, y += M, S += T, C += T, E += x, _ += x;
    }
    s[0] = Math.min(s[0], A, v, y, w), s[1] = Math.min(s[1], S, E, _, C), s[2] = Math.max(s[2], A, v, y, w), s[3] = Math.max(s[3], S, E, _, C);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const s = t[0], i = t[1], r = t[2], a = t[3], o = s ** 2 + i ** 2, l = s * r + i * a, h = r ** 2 + a ** 2, c = (o + h) / 2, u = Math.sqrt(c ** 2 - (o * h - l ** 2));
    e[0] = Math.sqrt(c + u || 1), e[1] = Math.sqrt(c - u || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [s, r, i, a];
  }
  static pointBoundingBox(t, e, s) {
    s[0] = Math.min(s[0], t), s[1] = Math.min(s[1], e), s[2] = Math.max(s[2], t), s[3] = Math.max(s[3], e);
  }
  static rectBoundingBox(t, e, s, i, r) {
    r[0] = Math.min(r[0], t, s), r[1] = Math.min(r[1], e, i), r[2] = Math.max(r[2], t, s), r[3] = Math.max(r[3], e, i);
  }
  static bezierBoundingBox(t, e, s, i, r, a, o, l, h) {
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), b(this, zi, Pd).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h), b(this, zi, Pd).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h);
  }
}
zi = new WeakSet(), ic = function(t, e, s, i, r, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, p = h * h, m = p * h, A = u * (u * (u * t + 3 * h * e) + 3 * p * s) + m * i, y = u * (u * (u * r + 3 * h * a) + 3 * p * o) + m * l;
  c[0] = Math.min(c[0], A), c[1] = Math.min(c[1], y), c[2] = Math.max(c[2], A), c[3] = Math.max(c[3], y);
}, Pd = function(t, e, s, i, r, a, o, l, h, c, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, zi, ic).call(this, t, e, s, i, r, a, o, l, -u / c, p);
    return;
  }
  const m = c ** 2 - 4 * u * h;
  if (m < 0)
    return;
  const A = Math.sqrt(m), y = 2 * h;
  b(this, zi, ic).call(this, t, e, s, i, r, a, o, l, (-c + A) / y, p), b(this, zi, ic).call(this, t, e, s, i, r, a, o, l, (-c - A) / y, p);
}, g(O, zi);
function em(d) {
  return decodeURIComponent(escape(d));
}
let _d = null, uf = null;
function sm(d) {
  return _d || (_d = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, uf = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(_d, (t, e, s) => e ? e.normalize("NFKC") : uf.get(s));
}
function Of() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), Nf(d);
}
const Wu = "pdfjs_internal_id_";
function im(d, t, e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [s, i, ...r] = e;
  if (!d(s) && !Number.isInteger(s) || !t(i))
    return !1;
  const a = r.length;
  let o = !0;
  switch (i.name) {
    case "XYZ":
      if (a < 2 || a > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return a === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a > 1)
        return !1;
      break;
    case "FitR":
      if (a !== 4)
        return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const l of r)
    if (!(typeof l == "number" || o && l === null))
      return !1;
  return !0;
}
function ge(d, t, e) {
  return Math.min(Math.max(d, t), e);
}
function Bf(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(Nf(d));
}
function nm(d) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(d) : Gh(atob(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(d) {
  return d.reduce((t, e) => t + e, 0);
});
const Ks = "http://www.w3.org/2000/svg", Yn = class Yn {
};
k(Yn, "CSS", 96), k(Yn, "PDF", 72), k(Yn, "PDF_TO_CSS_UNITS", Yn.CSS / Yn.PDF);
let zn = Yn;
async function Uh(d, t = "text") {
  if (Go(d, document.baseURI)) {
    const e = await fetch(d);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", d, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class jh {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: i,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = r, this.offsetY = a, s *= e;
    const l = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let c, u, p, m;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, u = 0, p = 0, m = 1;
        break;
      case 90:
        c = 0, u = 1, p = 1, m = 0;
        break;
      case 270:
        c = 0, u = -1, p = -1, m = 0;
        break;
      case 0:
        c = 1, u = 0, p = 0, m = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, m = -m);
    let A, y, v, w;
    c === 0 ? (A = Math.abs(h - t[1]) * s + r, y = Math.abs(l - t[0]) * s + a, v = (t[3] - t[1]) * s, w = (t[2] - t[0]) * s) : (A = Math.abs(l - t[0]) * s + r, y = Math.abs(h - t[1]) * s + a, v = (t[2] - t[0]) * s, w = (t[3] - t[1]) * s), this.transform = [c * s, u * s, p * s, m * s, A - c * s * l - p * s * h, y - u * s * l - m * s * h], this.width = v, this.height = w;
  }
  get rawDims() {
    const t = this.viewBox;
    return Y(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new jh({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    const s = [t, e];
    return O.applyTransform(s, this.transform), s;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    O.applyTransform(e, this.transform);
    const s = [t[2], t[3]];
    return O.applyTransform(s, this.transform), [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    return O.applyInverseTransform(s, this.transform), s;
  }
}
class Xu extends oa {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function dd(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function qu(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function rm(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function am(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (dd(d))
    return j('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const s = ((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(o), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  })(d);
  if (!s)
    return t;
  const i = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes("/") ? (l = l.split("/").at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }, r = /\.pdf$/i, a = s.pathname.split("/").at(-1);
  if (r.test(a))
    return i(a);
  if (s.searchParams.size > 0) {
    const o = Array.from(s.searchParams.values()).reverse();
    for (const h of o)
      if (r.test(h))
        return i(h);
    const l = Array.from(s.searchParams.keys()).reverse();
    for (const h of l)
      if (r.test(h))
        return i(h);
  }
  if (s.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(s.hash);
    if (l)
      return i(l[0]);
  }
  return t;
}
class ff {
  constructor() {
    k(this, "started", /* @__PURE__ */ Object.create(null));
    k(this, "times", []);
  }
  time(t) {
    t in this.started && j(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || j(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: s
    } of this.times)
      e = Math.max(s.length, e);
    for (const {
      name: s,
      start: i,
      end: r
    } of this.times)
      t.push(`${s.padEnd(e)} ${r - i}ms
`);
    return t.join("");
  }
}
function Go(d, t) {
  const e = t ? URL.parse(d, t) : URL.parse(d);
  return (e == null ? void 0 : e.protocol) === "http:" || (e == null ? void 0 : e.protocol) === "https:";
}
function as(d) {
  d.preventDefault();
}
function Mt(d) {
  d.preventDefault(), d.stopPropagation();
}
function om(d) {
  console.log("Deprecated API usage: " + d);
}
var ul;
class Lc {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    n(this, ul) || f(this, ul, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, ul).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let c = parseInt(e[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (a += c, o += u) : h === "+" && (a -= c, o -= u), new Date(Date.UTC(s, i, r, a, o, l));
  }
}
ul = new WeakMap(), g(Lc, ul);
function lm(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, r = [0, 0, parseInt(s), parseInt(i)];
  return new jh({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function ud(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (j(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function hm(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, ud(s));
  }
  t.remove();
}
function vt(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = d.getTransform();
  return [t, e, s, i, r, a];
}
function Ss(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = d.getTransform().invertSelf();
  return [t, e, s, i, r, a];
}
function ia(d, t, e = !1, s = !0) {
  if (t instanceof jh) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = d, o = ie.isCSSRoundSupported, l = `var(--total-scale-factor) * ${i}px`, h = `var(--total-scale-factor) * ${r}px`, c = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class Xs {
  constructor() {
    const {
      pixelRatio: t
    } = Xs;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, s, i, r = -1) {
    let a = 1 / 0, o = 1 / 0, l = 1 / 0;
    s = Xs.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), i !== -1 && (o = i / t, l = i / e);
    const h = Math.min(a, o, l);
    return this.sx > h || this.sy > h ? (this.sx = h, this.sy = h, !0) : !1;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const s = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, s) : s;
    }
    return t;
  }
}
const Md = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
var Xi, qi, Ye, ei, fl, _a, Sa, pl, Uc, Hf, se, $f, zf, da, Uo;
const Zs = class Zs {
  constructor(t) {
    g(this, se);
    g(this, Xi, null);
    g(this, qi, null);
    g(this, Ye);
    g(this, ei, null);
    g(this, fl, null);
    g(this, _a, null);
    g(this, Sa, null);
    f(this, Ye, t), n(Zs, pl) || f(Zs, pl, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = f(this, Xi, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, Ye)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", as, {
      signal: e
    }), t.addEventListener("pointerdown", b(Zs, Uc, Hf), {
      signal: e
    }));
    const s = f(this, ei, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, Ye).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = n(this, Ye)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return n(this, Xi);
  }
  hide() {
    var t;
    n(this, Xi).classList.add("hidden"), (t = n(this, qi)) == null || t.hideDropdown();
  }
  show() {
    var t, e;
    n(this, Xi).classList.remove("hidden"), (t = n(this, fl)) == null || t.shown(), (e = n(this, _a)) == null || e.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = n(this, Ye), s = document.createElement("button");
    s.classList.add("basic", "deleteButton"), s.tabIndex = 0, s.setAttribute("data-l10n-id", n(Zs, pl)[t]), b(this, se, da).call(this, s) && s.addEventListener("click", (i) => {
      e.delete();
    }, {
      signal: e._signal
    }), n(this, ei).append(s);
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, se, da).call(this, e), n(this, ei).append(e, n(this, se, Uo)), f(this, fl, t);
  }
  addComment(t) {
    if (n(this, _a))
      return;
    const e = t.render();
    e && (b(this, se, da).call(this, e), n(this, ei).append(e, n(this, se, Uo)), f(this, _a, t), t.toolbar = this);
  }
  addColorPicker(t) {
    if (n(this, qi))
      return;
    f(this, qi, t);
    const e = t.renderButton();
    b(this, se, da).call(this, e), n(this, ei).append(e, n(this, se, Uo));
  }
  async addEditSignatureButton(t) {
    const e = f(this, Sa, await t.renderEditButton(n(this, Ye)));
    b(this, se, da).call(this, e), n(this, ei).append(e, n(this, se, Uo));
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        this.addColorPicker(e);
        break;
      case "altText":
        await this.addAltText(e);
        break;
      case "editSignature":
        await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        this.addComment(e);
        break;
    }
  }
  updateEditSignatureButton(t) {
    n(this, Sa) && (n(this, Sa).title = t);
  }
  remove() {
    var t;
    n(this, Xi).remove(), (t = n(this, qi)) == null || t.destroy(), f(this, qi, null);
  }
};
Xi = new WeakMap(), qi = new WeakMap(), Ye = new WeakMap(), ei = new WeakMap(), fl = new WeakMap(), _a = new WeakMap(), Sa = new WeakMap(), pl = new WeakMap(), Uc = new WeakSet(), Hf = function(t) {
  t.stopPropagation();
}, se = new WeakSet(), $f = function(t) {
  n(this, Ye)._focusEventsAllowed = !1, Mt(t);
}, zf = function(t) {
  n(this, Ye)._focusEventsAllowed = !0, Mt(t);
}, da = function(t) {
  const e = n(this, Ye)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener("focusin", b(this, se, $f).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, se, zf).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", as, {
    signal: e
  }), !0);
}, Uo = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, g(Zs, Uc), g(Zs, pl, null);
let Rd = Zs;
var gl, Jn, si, Ui, Gf, Uf, Dd;
class cm {
  constructor(t) {
    g(this, Ui);
    g(this, gl, null);
    g(this, Jn, null);
    g(this, si);
    f(this, si, t);
  }
  show(t, e, s) {
    const [i, r] = b(this, Ui, Uf).call(this, e, s), {
      style: a
    } = n(this, Jn) || f(this, Jn, b(this, Ui, Gf).call(this));
    t.append(n(this, Jn)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, Jn).remove();
  }
}
gl = new WeakMap(), Jn = new WeakMap(), si = new WeakMap(), Ui = new WeakSet(), Gf = function() {
  const t = f(this, Jn, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar");
  const e = n(this, si)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", as, {
    signal: e
  });
  const s = f(this, gl, document.createElement("div"));
  return s.className = "buttons", t.append(s), n(this, si).hasCommentManager() && b(this, Ui, Dd).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    n(this, si).commentSelection("floating_button");
  }), b(this, Ui, Dd).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    n(this, si).highlightSelection("floating_button");
  }), t;
}, Uf = function(t, e) {
  let s = 0, i = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < s)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, Dd = function(t, e, s, i) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", s);
  const o = n(this, si)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", as, {
    signal: o
  }), r.addEventListener("click", i, {
    signal: o
  })), n(this, gl).append(r);
};
function jf(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var jc;
class dm {
  constructor() {
    g(this, jc, 0);
  }
  get id() {
    return `${Lf}${Lt(this, jc)._++}`;
  }
}
jc = new WeakMap();
var Ea, ml, re, Ca, nc;
const sf = class sf {
  constructor() {
    g(this, Ca);
    g(this, Ea, Of());
    g(this, ml, 0);
    g(this, re, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return Y(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: r
    } = t;
    return b(this, Ca, nc).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, Ca, nc).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, Ca, nc).call(this, t, s);
  }
  async getFromId(t) {
    n(this, re) || f(this, re, /* @__PURE__ */ new Map());
    const e = n(this, re).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    n(this, re) || f(this, re, /* @__PURE__ */ new Map());
    let s = n(this, re).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${n(this, Ea)}_${Lt(this, ml)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, re).set(t, s), n(this, re).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, re).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    n(this, re) || f(this, re, /* @__PURE__ */ new Map());
    const e = n(this, re).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(s.width, s.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = r.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, Ea)}_`);
  }
};
Ea = new WeakMap(), ml = new WeakMap(), re = new WeakMap(), Ca = new WeakSet(), nc = async function(t, e) {
  n(this, re) || f(this, re, /* @__PURE__ */ new Map());
  let s = n(this, re).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${n(this, Ea)}_${Lt(this, ml)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Uh(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = sf._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, a.onload = async () => {
          const u = s.svgUrl = a.result;
          o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    j(i), s = null;
  }
  return n(this, re).set(t, s), s && n(this, re).set(s.id, s), s;
};
let Ld = sf;
var Et, Yi, bl, yt;
class um {
  constructor(t = 128) {
    g(this, Et, []);
    g(this, Yi, !1);
    g(this, bl);
    g(this, yt, -1);
    f(this, bl, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), n(this, Yi))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (n(this, yt) === -1) {
      n(this, Et).length > 0 && (n(this, Et).length = 0), f(this, yt, 0), n(this, Et).push(l);
      return;
    }
    if (a && n(this, Et)[n(this, yt)].type === r) {
      o && (l.undo = n(this, Et)[n(this, yt)].undo), n(this, Et)[n(this, yt)] = l;
      return;
    }
    const h = n(this, yt) + 1;
    h === n(this, bl) ? n(this, Et).splice(0, 1) : (f(this, yt, h), h < n(this, Et).length && n(this, Et).splice(h)), n(this, Et).push(l);
  }
  undo() {
    if (n(this, yt) === -1)
      return;
    f(this, Yi, !0);
    const {
      undo: t,
      post: e
    } = n(this, Et)[n(this, yt)];
    t(), e == null || e(), f(this, Yi, !1), f(this, yt, n(this, yt) - 1);
  }
  redo() {
    if (n(this, yt) < n(this, Et).length - 1) {
      f(this, yt, n(this, yt) + 1), f(this, Yi, !0);
      const {
        cmd: t,
        post: e
      } = n(this, Et)[n(this, yt)];
      t(), e == null || e(), f(this, Yi, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, yt) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, yt) < n(this, Et).length - 1;
  }
  cleanType(t) {
    if (n(this, yt) !== -1) {
      for (let e = n(this, yt); e >= 0; e--)
        if (n(this, Et)[e].type !== t) {
          n(this, Et).splice(e + 1, n(this, yt) - e), f(this, yt, e);
          return;
        }
      n(this, Et).length = 0, f(this, yt, -1);
    }
  }
  destroy() {
    f(this, Et, null);
  }
}
Et = new WeakMap(), Yi = new WeakMap(), bl = new WeakMap(), yt = new WeakMap();
var Vc, Vf;
class Vh {
  constructor(t) {
    g(this, Vc);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = ie.platform;
    for (const [s, i, r = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(b(this, Vc, Vf).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), r || Mt(e));
  }
}
Vc = new WeakSet(), Vf = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Wc = class Wc {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return hm(t), Y(this, "_colors", t);
  }
  convert(t) {
    const e = ud(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return Wc._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? O.makeHexColor(...e) : t;
  }
};
k(Wc, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Id = Wc;
var Ta, Ce, xa, Nt, qt, ka, ii, Pa, Ke, ni, Ki, Qi, Ma, Zn, Ts, Qe, tr, Al, yl, Ra, wl, xs, Ji, Da, Zi, ks, Xc, tn, La, vl, en, er, Ia, sn, _l, Ot, rt, ri, nn, rn, Sl, Fa, El, an, Ps, ai, Cl, Tl, Je, D, rc, Fd, Wf, Xf, jo, qf, Yf, Kf, Nd, Qf, Od, Bd, Jf, le, Qs, Zf, tp, Hd, ep, Vo, $d;
const ya = class ya {
  constructor(t, e, s, i, r, a, o, l, h, c, u, p, m, A, y, v) {
    g(this, D);
    g(this, Ta, new AbortController());
    g(this, Ce, null);
    g(this, xa, null);
    g(this, Nt, /* @__PURE__ */ new Map());
    g(this, qt, /* @__PURE__ */ new Map());
    g(this, ka, null);
    g(this, ii, null);
    g(this, Pa, null);
    g(this, Ke, new um());
    g(this, ni, null);
    g(this, Ki, null);
    g(this, Qi, null);
    g(this, Ma, 0);
    g(this, Zn, /* @__PURE__ */ new Set());
    g(this, Ts, null);
    g(this, Qe, null);
    g(this, tr, /* @__PURE__ */ new Set());
    k(this, "_editorUndoBar", null);
    g(this, Al, !1);
    g(this, yl, !1);
    g(this, Ra, !1);
    g(this, wl, null);
    g(this, xs, null);
    g(this, Ji, null);
    g(this, Da, null);
    g(this, Zi, !1);
    g(this, ks, null);
    g(this, Xc, new dm());
    g(this, tn, !1);
    g(this, La, !1);
    g(this, vl, !1);
    g(this, en, null);
    g(this, er, null);
    g(this, Ia, null);
    g(this, sn, null);
    g(this, _l, null);
    g(this, Ot, U.NONE);
    g(this, rt, /* @__PURE__ */ new Set());
    g(this, ri, null);
    g(this, nn, null);
    g(this, rn, null);
    g(this, Sl, null);
    g(this, Fa, null);
    g(this, El, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    g(this, an, [0, 0]);
    g(this, Ps, null);
    g(this, ai, null);
    g(this, Cl, null);
    g(this, Tl, null);
    g(this, Je, null);
    const w = this._signal = n(this, Ta).signal;
    f(this, ai, t), f(this, Cl, e), f(this, Tl, s), f(this, ka, i), f(this, ni, r), f(this, nn, a), f(this, Fa, l), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), {
      signal: w
    }), o._on("pagechanging", this.onPageChanging.bind(this), {
      signal: w
    }), o._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: w
    }), o._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: w
    }), o._on("setpreference", this.onSetPreference.bind(this), {
      signal: w
    }), o._on("switchannotationeditorparams", (S) => this.updateParams(S.type, S.value), {
      signal: w
    }), window.addEventListener("pointerdown", () => {
      f(this, La, !0);
    }, {
      capture: !0,
      signal: w
    }), window.addEventListener("pointerup", () => {
      f(this, La, !1);
    }, {
      capture: !0,
      signal: w
    }), b(this, D, qf).call(this), b(this, D, Jf).call(this), b(this, D, Nd).call(this), f(this, ii, l.annotationStorage), f(this, wl, l.filterFactory), f(this, rn, h), f(this, Da, c || null), f(this, Al, u), f(this, yl, p), f(this, Ra, m), f(this, _l, A || null), this.viewParameters = {
      realScale: zn.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = y || null, this._supportsPinchToZoom = v !== !1;
  }
  static get _keyboardManager() {
    const t = ya.prototype, e = (a) => n(a, ai).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return Y(this, "_keyboardManager", new Vh([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, ai).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, ai).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i, r, a, o, l, h;
    (t = n(this, Je)) == null || t.resolve(), f(this, Je, null), (e = n(this, Ta)) == null || e.abort(), f(this, Ta, null), this._signal = null;
    for (const c of n(this, qt).values())
      c.destroy();
    n(this, qt).clear(), n(this, Nt).clear(), n(this, tr).clear(), (s = n(this, sn)) == null || s.clear(), f(this, Ce, null), n(this, rt).clear(), n(this, Ke).destroy(), (i = n(this, ka)) == null || i.destroy(), (r = n(this, ni)) == null || r.destroy(), (a = n(this, nn)) == null || a.destroy(), (o = n(this, ks)) == null || o.hide(), f(this, ks, null), (l = n(this, Ia)) == null || l.destroy(), f(this, Ia, null), f(this, xa, null), n(this, xs) && (clearTimeout(n(this, xs)), f(this, xs, null)), n(this, Ps) && (clearTimeout(n(this, Ps)), f(this, Ps, null)), (h = this._editorUndoBar) == null || h.destroy(), f(this, Fa, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, _l);
  }
  get useNewAltTextFlow() {
    return n(this, yl);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, Ra);
  }
  get hcmFilter() {
    return Y(this, "hcmFilter", n(this, rn) ? n(this, wl).addHCMFilter(n(this, rn).foreground, n(this, rn).background) : "none");
  }
  get direction() {
    return Y(this, "direction", getComputedStyle(n(this, ai)).direction);
  }
  get _highlightColors() {
    return Y(this, "_highlightColors", n(this, Da) ? new Map(n(this, Da).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return Y(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), s = !!n(this, rn);
    for (const [i, r] of t) {
      const a = i.endsWith("_HCM");
      if (s && a) {
        e.set(i.replace("_HCM", ""), r);
        continue;
      }
      !s && !a && e.set(i, r);
    }
    return Y(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return Y(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors)
      return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), f(this, Qi, t);
  }
  setMainHighlightColorPicker(t) {
    f(this, Ia, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = n(this, ka)) == null || s.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!n(this, ni);
  }
  editComment(t, e) {
    var s;
    (s = n(this, ni)) == null || s.open(this, t, e);
  }
  getSignature(t) {
    var e;
    (e = n(this, nn)) == null || e.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return n(this, nn);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        f(this, Ra, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    f(this, Ma, t - 1);
  }
  focusMainContainer() {
    n(this, ai).focus();
  }
  findParent(t, e) {
    for (const s of n(this, qt).values()) {
      const {
        x: i,
        y: r,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= r && e <= r + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    n(this, Cl).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, tr).add(t);
  }
  removeShouldRescale(t) {
    n(this, tr).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * zn.PDF_TO_CSS_UNITS;
    for (const s of n(this, tr))
      s.onScaleChanging();
    (e = n(this, Qi)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "", e = !1) {
    const s = document.getSelection();
    if (!s || s.isCollapsed)
      return;
    const {
      anchorNode: i,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o
    } = s, l = s.toString(), c = b(this, D, rc).call(this, s).closest(".textLayer"), u = this.getSelectionBoxes(c);
    if (!u)
      return;
    s.empty();
    const p = b(this, D, Fd).call(this, c), m = n(this, Ot) === U.NONE, A = () => {
      const y = p == null ? void 0 : p.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: u,
        anchorNode: i,
        anchorOffset: r,
        focusNode: a,
        focusOffset: o,
        text: l
      });
      m && this.showAllEditors("highlight", !0, !0), e && (y == null || y.editComment());
    };
    if (m) {
      this.switchToMode(U.HIGHLIGHT, A);
      return;
    }
    A();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, ii) && !n(this, ii).has(t.id) && n(this, ii).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const s = n(this, Tl);
    s && (s.setAttribute("data-l10n-id", t), e ? s.setAttribute("data-l10n-args", JSON.stringify(e)) : s.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, Zi) && (f(this, Zi, !1), b(this, D, jo).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, rt))
      if (e.div.contains(t)) {
        f(this, er, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, er))
      return;
    const [t, e] = n(this, er);
    f(this, er, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, D, Nd).call(this), b(this, D, Od).call(this);
  }
  removeEditListeners() {
    b(this, D, Qf).call(this), b(this, D, Bd).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of n(this, Qe))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of n(this, Qe))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = n(this, Ce)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of n(this, rt)) {
      const r = i.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of n(this, Qe))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (r) {
      j(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const r = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        r.push(h);
      }
      const a = () => {
        for (const l of r)
          b(this, D, Hd).call(this, l);
        b(this, D, $d).call(this, r);
      }, o = () => {
        for (const l of r)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (r) {
      j(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, Ot) !== U.NONE && !this.isEditorHandlingKeyboard && ya._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, Zi) && (f(this, Zi, !1), b(this, D, jo).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (b(this, D, Yf).call(this), b(this, D, Od).call(this), b(this, D, le).call(this, {
      isEditing: n(this, Ot) !== U.NONE,
      isEmpty: b(this, D, Vo).call(this),
      hasSomethingToUndo: n(this, Ke).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Ke).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, D, Kf).call(this), b(this, D, Bd).call(this), b(this, D, le).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, Qe)) {
      f(this, Qe, t);
      for (const e of n(this, Qe))
        b(this, D, Qs).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, Xc).id;
  }
  get currentLayer() {
    return n(this, qt).get(n(this, Ma));
  }
  getLayer(t) {
    return n(this, qt).get(t);
  }
  get currentPageIndex() {
    return n(this, Ma);
  }
  addLayer(t) {
    n(this, qt).set(t.pageIndex, t), n(this, tn) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, qt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1, i = !1, r = !1) {
    var a, o, l, h, c;
    if (n(this, Ot) !== t && !(n(this, Je) && (await n(this, Je).promise, !n(this, Je)))) {
      if (f(this, Je, Promise.withResolvers()), (a = n(this, Qi)) == null || a.commitOrRemove(), n(this, Ot) === U.POPUP && ((o = n(this, ni)) == null || o.hideSidebar()), f(this, Ot, t), t === U.NONE) {
        this.setEditingState(!1), b(this, D, tp).call(this), (l = this._editorUndoBar) == null || l.hide(), n(this, Je).resolve();
        return;
      }
      t === U.SIGNATURE && await ((h = n(this, nn)) == null ? void 0 : h.loadSignatures()), t === U.POPUP && (n(this, xa) || f(this, xa, await n(this, Fa).getAnnotationsByType(new Set(n(this, Qe).map((u) => u._editorType)))), (c = n(this, ni)) == null || c.showSidebar(n(this, xa))), this.setEditingState(!0), await b(this, D, Zf).call(this), this.unselectAll();
      for (const u of n(this, qt).values())
        u.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), n(this, Je).resolve();
        return;
      }
      for (const u of n(this, Nt).values())
        u.annotationElementId === e || u.id === e ? (this.setSelected(u), r ? u.editComment() : i && u.enterInEditMode()) : u.unselect();
      n(this, Je).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== n(this, Ot) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (n(this, Qe)) {
      switch (t) {
        case J.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case J.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, Sl) || f(this, Sl, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const s of n(this, rt))
          s.updateParams(t, e);
      else
        for (const s of n(this, Qe))
          s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var r;
    for (const a of n(this, Nt).values())
      a.editorType === t && a.show(e);
    (((r = n(this, Sl)) == null ? void 0 : r.get(J.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && b(this, D, Qs).call(this, [[J.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, vl) !== t) {
      f(this, vl, t);
      for (const e of n(this, qt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of n(this, Nt).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return n(this, Nt).get(t);
  }
  addEditor(t) {
    n(this, Nt).set(t.id, t);
  }
  removeEditor(t) {
    var e, s;
    t.div.contains(document.activeElement) && (n(this, xs) && clearTimeout(n(this, xs)), f(this, xs, setTimeout(() => {
      this.focusMainContainer(), f(this, xs, null);
    }, 0))), n(this, Nt).delete(t.id), t.annotationElementId && ((e = n(this, sn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Zn).has(t.annotationElementId)) && ((s = n(this, ii)) == null || s.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, Zn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, Zn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, Zn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, Ce) !== t && (f(this, Ce, t), t && b(this, D, Qs).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, D, ep) === t && b(this, D, Qs).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, D, Qs).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, rt).has(t)) {
      n(this, rt).delete(t), t.unselect(), b(this, D, le).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, rt).add(t), t.select(), b(this, D, Qs).call(this, t.propertiesToUpdate), b(this, D, le).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id
    }), (e = n(this, Qi)) == null || e.commitOrRemove();
    for (const s of n(this, rt))
      s !== t && s.unselect();
    n(this, rt).clear(), n(this, rt).add(t), t.select(), b(this, D, Qs).call(this, t.propertiesToUpdate), b(this, D, le).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, rt).has(t);
  }
  get firstSelectedEditor() {
    return n(this, rt).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, rt).delete(t), b(this, D, le).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, rt).size !== 0;
  }
  get isEnterHandled() {
    return n(this, rt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, Ke).undo(), b(this, D, le).call(this, {
      hasSomethingToUndo: n(this, Ke).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, D, Vo).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, Ke).redo(), b(this, D, le).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Ke).hasSomethingToRedo(),
      isEmpty: b(this, D, Vo).call(this)
    });
  }
  addCommands(t) {
    n(this, Ke).add(t), b(this, D, le).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, D, Vo).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, Ke).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, rt)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        b(this, D, Hd).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, Ce)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, Ce) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, rt))
      t.commit();
    b(this, D, $d).call(this, n(this, Nt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, Ce) && (n(this, Ce).commitOrRemove(), n(this, Ot) !== U.NONE)) && !((t = n(this, Qi)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, rt))
        e.unselect();
      n(this, rt).clear(), b(this, D, le).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, an)[0] += t, n(this, an)[1] += e;
    const [i, r] = n(this, an), a = [...n(this, rt)], o = 1e3;
    n(this, Ps) && clearTimeout(n(this, Ps)), f(this, Ps, setTimeout(() => {
      f(this, Ps, null), n(this, an)[0] = n(this, an)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, Nt).has(l.id) && (l.translateInPage(i, r), l.translationDone());
        },
        undo: () => {
          for (const l of a)
            n(this, Nt).has(l.id) && (l.translateInPage(-i, -r), l.translationDone());
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), f(this, Ts, /* @__PURE__ */ new Map());
      for (const t of n(this, rt))
        n(this, Ts).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!n(this, Ts))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, Ts);
    f(this, Ts, null);
    let e = !1;
    for (const [{
      x: i,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = r, o.newPageIndex = a, e || (e = i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, r, a, o) => {
      if (n(this, Nt).has(i.id)) {
        const l = n(this, qt).get(o);
        l ? i._setParentAndPosition(l, r, a) : (i.pageIndex = o, i.x = r, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      undo: () => {
        for (const [i, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (n(this, Ts))
      for (const s of n(this, Ts).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, rt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, Ce) === t;
  }
  getActive() {
    return n(this, Ce);
  }
  getMode() {
    return n(this, Ot);
  }
  get imageManager() {
    return Y(this, "imageManager", new Ld());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let h = 0, c = e.rangeCount; h < c; h++)
      if (!t.contains(e.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, c, u, p) => ({
          x: (c - i) / a,
          y: 1 - (h + u - s) / r,
          width: p / a,
          height: u / r
        });
        break;
      case "180":
        o = (h, c, u, p) => ({
          x: 1 - (h + u - s) / r,
          y: 1 - (c + p - i) / a,
          width: u / r,
          height: p / a
        });
        break;
      case "270":
        o = (h, c, u, p) => ({
          x: 1 - (c + p - i) / a,
          y: (h - s) / r,
          width: p / a,
          height: u / r
        });
        break;
      default:
        o = (h, c, u, p) => ({
          x: (h - s) / r,
          y: (c - i) / a,
          width: u / r,
          height: p / a
        });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: p,
          y: m,
          width: A,
          height: y
        } of u.getClientRects())
          A === 0 || y === 0 || l.push(o(p, m, A, y));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, Pa) || f(this, Pa, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, Pa)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = n(this, Pa)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = n(this, ii).getRawValue(e);
    s && (n(this, Ot) === U.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    var r;
    const i = (r = n(this, sn)) == null ? void 0 : r.get(t);
    i && (i.setCanvas(e, s), n(this, sn).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, sn) || f(this, sn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
Ta = new WeakMap(), Ce = new WeakMap(), xa = new WeakMap(), Nt = new WeakMap(), qt = new WeakMap(), ka = new WeakMap(), ii = new WeakMap(), Pa = new WeakMap(), Ke = new WeakMap(), ni = new WeakMap(), Ki = new WeakMap(), Qi = new WeakMap(), Ma = new WeakMap(), Zn = new WeakMap(), Ts = new WeakMap(), Qe = new WeakMap(), tr = new WeakMap(), Al = new WeakMap(), yl = new WeakMap(), Ra = new WeakMap(), wl = new WeakMap(), xs = new WeakMap(), Ji = new WeakMap(), Da = new WeakMap(), Zi = new WeakMap(), ks = new WeakMap(), Xc = new WeakMap(), tn = new WeakMap(), La = new WeakMap(), vl = new WeakMap(), en = new WeakMap(), er = new WeakMap(), Ia = new WeakMap(), sn = new WeakMap(), _l = new WeakMap(), Ot = new WeakMap(), rt = new WeakMap(), ri = new WeakMap(), nn = new WeakMap(), rn = new WeakMap(), Sl = new WeakMap(), Fa = new WeakMap(), El = new WeakMap(), an = new WeakMap(), Ps = new WeakMap(), ai = new WeakMap(), Cl = new WeakMap(), Tl = new WeakMap(), Je = new WeakMap(), D = new WeakSet(), rc = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Fd = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of n(this, qt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, Wf = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, D, rc).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, ks) || f(this, ks, new cm(this)), n(this, ks).show(s, i, this.direction === "ltr"));
}, Xf = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, ri) && ((r = n(this, ks)) == null || r.hide(), f(this, ri, null), b(this, D, le).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, ri))
    return;
  const i = b(this, D, rc).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, ri) && ((a = n(this, ks)) == null || a.hide(), f(this, ri, null), b(this, D, le).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, ks)) == null || o.hide(), f(this, ri, e), b(this, D, le).call(this, {
    hasSelectedText: !0
  }), !(n(this, Ot) !== U.HIGHLIGHT && n(this, Ot) !== U.NONE) && (n(this, Ot) === U.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), f(this, Zi, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, Ot) === U.HIGHLIGHT ? b(this, D, Fd).call(this, i) : null;
    if (l == null || l.toggleDrawing(), n(this, La)) {
      const h = new AbortController(), c = this.combinedSignal(h), u = (p) => {
        p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && b(this, D, jo).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", u, {
        signal: c
      }), window.addEventListener("blur", u, {
        signal: c
      });
    } else
      l == null || l.toggleDrawing(!0), b(this, D, jo).call(this, "main_toolbar");
  }
}, jo = function(t = "") {
  n(this, Ot) === U.HIGHLIGHT ? this.highlightSelection(t) : n(this, Al) && b(this, D, Wf).call(this);
}, qf = function() {
  document.addEventListener("selectionchange", b(this, D, Xf).bind(this), {
    signal: this._signal
  });
}, Yf = function() {
  if (n(this, Ji))
    return;
  f(this, Ji, new AbortController());
  const t = this.combinedSignal(n(this, Ji));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Kf = function() {
  var t;
  (t = n(this, Ji)) == null || t.abort(), f(this, Ji, null);
}, Nd = function() {
  if (n(this, en))
    return;
  f(this, en, new AbortController());
  const t = this.combinedSignal(n(this, en));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Qf = function() {
  var t;
  (t = n(this, en)) == null || t.abort(), f(this, en, null);
}, Od = function() {
  if (n(this, Ki))
    return;
  f(this, Ki, new AbortController());
  const t = this.combinedSignal(n(this, Ki));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, Bd = function() {
  var t;
  (t = n(this, Ki)) == null || t.abort(), f(this, Ki, null);
}, Jf = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, le = function(t) {
  Object.entries(t).some(([s, i]) => n(this, El)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, El), t)
  }), n(this, Ot) === U.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, D, Qs).call(this, [[J.HIGHLIGHT_FREE, !0]]));
}, Qs = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, Zf = async function() {
  if (!n(this, tn)) {
    f(this, tn, !0);
    const t = [];
    for (const e of n(this, qt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Nt).values())
      e.enable();
  }
}, tp = function() {
  if (this.unselectAll(), n(this, tn)) {
    f(this, tn, !1);
    for (const t of n(this, qt).values())
      t.disable();
    for (const t of n(this, Nt).values())
      t.disable();
  }
}, Hd = function(t) {
  const e = n(this, qt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, ep = function() {
  let t = null;
  for (t of n(this, rt))
    ;
  return t;
}, Vo = function() {
  if (n(this, Nt).size === 0)
    return !0;
  if (n(this, Nt).size === 1)
    for (const t of n(this, Nt).values())
      return t.isEmpty();
  return !1;
}, $d = function(t) {
  for (const e of n(this, rt))
    e.unselect();
  n(this, rt).clear();
  for (const e of t)
    e.isEmpty() || (n(this, rt).add(e), e.select());
  b(this, D, le).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, k(ya, "TRANSLATE_SMALL", 1), k(ya, "TRANSLATE_BIG", 10);
let na = ya;
var zt, Ms, cs, Na, Rs, Te, Oa, Ds, we, oi, sr, Ls, on, ws, Wo, ac;
const he = class he {
  constructor(t) {
    g(this, ws);
    g(this, zt, null);
    g(this, Ms, !1);
    g(this, cs, null);
    g(this, Na, null);
    g(this, Rs, null);
    g(this, Te, null);
    g(this, Oa, !1);
    g(this, Ds, null);
    g(this, we, null);
    g(this, oi, null);
    g(this, sr, null);
    g(this, Ls, !1);
    f(this, we, t), f(this, Ls, t._uiManager.useNewAltTextFlow), n(he, on) || f(he, on, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    he._l10n ?? (he._l10n = t);
  }
  async render() {
    const t = f(this, cs, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = f(this, Na, document.createElement("span"));
    t.append(e), n(this, Ls) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(he, on).missing), e.setAttribute("data-l10n-id", n(he, on)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, we)._uiManager._signal;
    t.addEventListener("contextmenu", as, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const i = (r) => {
      r.preventDefault(), n(this, we)._uiManager.editAltText(n(this, we)), n(this, Ls) && n(this, we)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, ws, Wo)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (f(this, Oa, !0), i(r));
    }, {
      signal: s
    }), await b(this, ws, ac).call(this), t;
  }
  finish() {
    n(this, cs) && (n(this, cs).focus({
      focusVisible: n(this, Oa)
    }), f(this, Oa, !1));
  }
  isEmpty() {
    return n(this, Ls) ? n(this, zt) === null : !n(this, zt) && !n(this, Ms);
  }
  hasData() {
    return n(this, Ls) ? n(this, zt) !== null || !!n(this, oi) : this.isEmpty();
  }
  get guessedText() {
    return n(this, oi);
  }
  async setGuessedText(t) {
    n(this, zt) === null && (f(this, oi, t), f(this, sr, await he._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, ws, ac).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, Ls) || n(this, zt)) {
      (e = n(this, Ds)) == null || e.remove(), f(this, Ds, null);
      return;
    }
    if (!n(this, Ds)) {
      const s = f(this, Ds, document.createElement("div"));
      s.className = "noAltTextBadge", n(this, we).div.append(s);
    }
    n(this, Ds).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, zt);
    return !t && n(this, oi) === e && (e = n(this, sr)), {
      altText: e,
      decorative: n(this, Ms),
      guessedText: n(this, oi),
      textWithDisclaimer: n(this, sr)
    };
  }
  get data() {
    return {
      altText: n(this, zt),
      decorative: n(this, Ms)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: r = !1
  }) {
    s && (f(this, oi, s), f(this, sr, i)), !(n(this, zt) === t && n(this, Ms) === e) && (r || (f(this, zt, t), f(this, Ms, e)), b(this, ws, ac).call(this));
  }
  toggle(t = !1) {
    n(this, cs) && (!t && n(this, Te) && (clearTimeout(n(this, Te)), f(this, Te, null)), n(this, cs).disabled = !t);
  }
  shown() {
    n(this, we)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, ws, Wo)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, cs)) == null || t.remove(), f(this, cs, null), f(this, Na, null), f(this, Rs, null), (e = n(this, Ds)) == null || e.remove(), f(this, Ds, null);
  }
};
zt = new WeakMap(), Ms = new WeakMap(), cs = new WeakMap(), Na = new WeakMap(), Rs = new WeakMap(), Te = new WeakMap(), Oa = new WeakMap(), Ds = new WeakMap(), we = new WeakMap(), oi = new WeakMap(), sr = new WeakMap(), Ls = new WeakMap(), on = new WeakMap(), ws = new WeakSet(), Wo = function() {
  return n(this, zt) && "added" || n(this, zt) === null && this.guessedText && "review" || "missing";
}, ac = async function() {
  var i, r, a;
  const t = n(this, cs);
  if (!t)
    return;
  if (n(this, Ls)) {
    if (t.classList.toggle("done", !!n(this, zt)), t.setAttribute("data-l10n-id", n(he, on)[n(this, ws, Wo)]), (i = n(this, Na)) == null || i.setAttribute("data-l10n-id", n(he, on)[`${n(this, ws, Wo)}-label`]), !n(this, zt)) {
      (r = n(this, Rs)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, zt) && !n(this, Ms)) {
      t.classList.remove("done"), (a = n(this, Rs)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, Rs);
  if (!e) {
    f(this, Rs, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, we).id}`;
    const o = 100, l = n(this, we)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, Te)), f(this, Te, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      f(this, Te, setTimeout(() => {
        f(this, Te, null), n(this, Rs).classList.add("show"), n(this, we)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, Te) && (clearTimeout(n(this, Te)), f(this, Te, null)), (h = n(this, Rs)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, Ms) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, zt)), e.parentNode || t.append(e);
  const s = n(this, we).getElementForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, g(he, on, null), k(he, "_l10n", null);
let Ic = he;
var Is, ir, ds, xl, li, Ba, ln;
class Yh {
  constructor(t) {
    g(this, Is, null);
    g(this, ir, !1);
    g(this, ds, null);
    g(this, xl, null);
    g(this, li, null);
    g(this, Ba, null);
    g(this, ln, !1);
    f(this, ds, t), this.toolbar = null;
  }
  render() {
    if (!n(this, ds)._uiManager.hasCommentManager())
      return null;
    const t = f(this, Is, document.createElement("button"));
    t.className = "comment", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button");
    const e = n(this, ds)._uiManager._signal;
    if (!(e instanceof AbortSignal) || e.aborted)
      return t;
    t.addEventListener("contextmenu", as, {
      signal: e
    }), t.addEventListener("pointerdown", (i) => i.stopPropagation(), {
      signal: e
    });
    const s = (i) => {
      i.preventDefault(), this.edit();
    };
    return t.addEventListener("click", s, {
      capture: !0,
      signal: e
    }), t.addEventListener("keydown", (i) => {
      i.target === t && i.key === "Enter" && (f(this, ir, !0), s(i));
    }, {
      signal: e
    }), t;
  }
  edit() {
    const {
      bottom: t,
      left: e,
      right: s
    } = n(this, ds).getClientDimensions(), i = {
      top: t
    };
    n(this, ds)._uiManager.direction === "ltr" ? i.right = s : i.left = e, n(this, ds)._uiManager.editComment(n(this, ds), i);
  }
  finish() {
    n(this, Is) && (n(this, Is).focus({
      focusVisible: n(this, ir)
    }), f(this, ir, !1));
  }
  isDeleted() {
    return n(this, ln) || n(this, li) === "";
  }
  hasBeenEdited() {
    return this.isDeleted() || n(this, li) !== n(this, xl);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: n(this, li),
      date: n(this, Ba),
      deleted: n(this, ln)
    };
  }
  set data(t) {
    if (t === null) {
      f(this, li, ""), f(this, ln, !0);
      return;
    }
    f(this, li, t), f(this, Ba, /* @__PURE__ */ new Date()), f(this, ln, !1);
  }
  setInitialText(t) {
    f(this, xl, t), this.data = t;
  }
  toggle(t = !1) {
    n(this, Is) && (n(this, Is).disabled = !t);
  }
  shown() {
  }
  destroy() {
    var t;
    (t = n(this, Is)) == null || t.remove(), f(this, Is, null), f(this, li, ""), f(this, Ba, null), f(this, ds, null), f(this, ir, !1), f(this, ln, !1);
  }
}
Is = new WeakMap(), ir = new WeakMap(), ds = new WeakMap(), xl = new WeakMap(), li = new WeakMap(), Ba = new WeakMap(), ln = new WeakMap();
var Ha, nr, kl, Pl, Ml, Rl, Dl, hi, rr, ci, ar, di, Gn, sp, ip, np;
const nf = class nf {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    g(this, Gn);
    g(this, Ha);
    g(this, nr, !1);
    g(this, kl, null);
    g(this, Pl);
    g(this, Ml);
    g(this, Rl);
    g(this, Dl);
    g(this, hi, null);
    g(this, rr);
    g(this, ci, null);
    g(this, ar);
    g(this, di, null);
    f(this, Ha, t), f(this, kl, s), f(this, Pl, e), f(this, Ml, i), f(this, Rl, r), f(this, Dl, a), f(this, ar, new AbortController()), f(this, rr, AbortSignal.any([o, n(this, ar).signal])), t.addEventListener("touchstart", b(this, Gn, sp).bind(this), {
      passive: !1,
      signal: n(this, rr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / Xs.pixelRatio;
  }
  destroy() {
    var t, e;
    (t = n(this, ar)) == null || t.abort(), f(this, ar, null), (e = n(this, hi)) == null || e.abort(), f(this, hi, null);
  }
};
Ha = new WeakMap(), nr = new WeakMap(), kl = new WeakMap(), Pl = new WeakMap(), Ml = new WeakMap(), Rl = new WeakMap(), Dl = new WeakMap(), hi = new WeakMap(), rr = new WeakMap(), ci = new WeakMap(), ar = new WeakMap(), di = new WeakMap(), Gn = new WeakSet(), sp = function(t) {
  var i, r, a;
  if ((i = n(this, Pl)) != null && i.call(this))
    return;
  if (t.touches.length === 1) {
    if (n(this, hi))
      return;
    const o = f(this, hi, new AbortController()), l = AbortSignal.any([n(this, rr), o.signal]), h = n(this, Ha), c = {
      capture: !0,
      signal: l,
      passive: !1
    }, u = (p) => {
      var m;
      p.pointerType === "touch" && ((m = n(this, hi)) == null || m.abort(), f(this, hi, null));
    };
    h.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (Mt(p), u(p));
    }, c), h.addEventListener("pointerup", u, c), h.addEventListener("pointercancel", u, c);
    return;
  }
  if (!n(this, di)) {
    f(this, di, new AbortController());
    const o = AbortSignal.any([n(this, rr), n(this, di).signal]), l = n(this, Ha), h = {
      signal: o,
      capture: !1,
      passive: !1
    };
    l.addEventListener("touchmove", b(this, Gn, ip).bind(this), h);
    const c = b(this, Gn, np).bind(this);
    l.addEventListener("touchend", c, h), l.addEventListener("touchcancel", c, h), h.capture = !0, l.addEventListener("pointerdown", Mt, h), l.addEventListener("pointermove", Mt, h), l.addEventListener("pointercancel", Mt, h), l.addEventListener("pointerup", Mt, h), (r = n(this, Ml)) == null || r.call(this);
  }
  if (Mt(t), t.touches.length !== 2 || (a = n(this, kl)) != null && a.call(this)) {
    f(this, ci, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), f(this, ci, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, ip = function(t) {
  var E;
  if (!n(this, ci) || t.touches.length !== 2)
    return;
  Mt(t);
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = s, l = n(this, ci), {
    touch0X: h,
    touch0Y: c,
    touch1X: u,
    touch1Y: p
  } = l, m = u - h, A = p - c, y = a - i, v = o - r, w = Math.hypot(y, v) || 1, S = Math.hypot(m, A) || 1;
  if (!n(this, nr) && Math.abs(S - w) <= nf.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, nr)) {
    f(this, nr, !0);
    return;
  }
  const _ = [(i + a) / 2, (r + o) / 2];
  (E = n(this, Rl)) == null || E.call(this, _, S, w);
}, np = function(t) {
  var e;
  t.touches.length >= 2 || (n(this, di) && (n(this, di).abort(), f(this, di, null), (e = n(this, Dl)) == null || e.call(this)), n(this, ci) && (Mt(t), f(this, ci, null), f(this, nr, !1)));
};
let Fc = nf;
var or, us, mt, Yt, $a, hn, Ll, lr, Kt, hr, ui, cn, Il, cr, xe, Fl, dr, fi, Fs, za, Ga, Ze, ur, Nl, qc, z, zd, Ol, Gd, oc, rp, ap, Ud, lc, jd, op, lp, hp, Vd, cp, Wd, dp, up, fp, Xd, Xo;
const W = class W {
  constructor(t) {
    g(this, z);
    g(this, or, null);
    g(this, us, null);
    g(this, mt, null);
    g(this, Yt, null);
    g(this, $a, !1);
    g(this, hn, null);
    g(this, Ll, "");
    g(this, lr, !1);
    g(this, Kt, null);
    g(this, hr, null);
    g(this, ui, null);
    g(this, cn, null);
    g(this, Il, "");
    g(this, cr, !1);
    g(this, xe, null);
    g(this, Fl, !1);
    g(this, dr, !1);
    g(this, fi, !1);
    g(this, Fs, null);
    g(this, za, 0);
    g(this, Ga, 0);
    g(this, Ze, null);
    g(this, ur, null);
    k(this, "isSelected", !1);
    k(this, "_isCopy", !1);
    k(this, "_editToolbar", null);
    k(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    k(this, "_initialData", null);
    k(this, "_isVisible", !0);
    k(this, "_uiManager", null);
    k(this, "_focusEventsAllowed", !0);
    g(this, Nl, !1);
    g(this, qc, W._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = W.prototype._resizeWithKeyboard, e = na.TRANSLATE_SMALL, s = na.TRANSLATE_BIG;
    return Y(this, "_resizerKeyboardManager", new Vh([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], W.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return Y(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new fm({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (W._l10n ?? (W._l10n = t), W._l10nResizer || (W._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), W._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    W._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    dt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, Nl);
  }
  set _isDraggable(t) {
    var e;
    f(this, Nl, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = n(this, qc);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : b(this, z, Xo).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, cr) ? f(this, cr, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [r, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / r, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    const [s, i] = this.parentDimensions;
    this.setAt(t * s, e * i, this.width * s, this.height * i), this._onTranslated();
  }
  translate(t, e) {
    b(this, z, zd).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, xe) || f(this, xe, [this.x, this.y, this.width, this.height]), b(this, z, zd).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, xe) || f(this, xe, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, r]
    } = this;
    if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: p
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
    const {
      style: c
    } = s;
    c.left = `${(100 * a).toFixed(2)}%`, c.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), s.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!n(this, xe) && (n(this, xe)[0] !== this.x || n(this, xe)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, xe) && (n(this, xe)[2] !== this.width || n(this, xe)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = W, i = s / t, r = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, r];
      case 180:
        return [i, r];
      case 270:
        return [i, -r];
      default:
        return [-i, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [s, i]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= s, l *= i, r *= s, a *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          r = ge(r, 0, s - o), a = ge(a, 0, i - l);
          break;
        case 90:
          r = ge(r, 0, s - l), a = ge(a, o, i);
          break;
        case 180:
          r = ge(r, o, s), a = ge(a, l, i);
          break;
        case 270:
          r = ge(r, l, s), a = ge(a, 0, i - o);
          break;
      }
    this.x = r /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    r += h, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = W, Ol, Gd).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = W, Ol, Gd).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims(t, e) {
    const [s, i] = this.parentDimensions, {
      style: r
    } = this.div;
    r.width = `${(100 * t / s).toFixed(2)}%`, n(this, lr) || (r.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), r = !n(this, lr) && e.endsWith("%");
    if (i && r)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !n(this, lr) && !r && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = n(this, mt)) == null || t.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || n(this, dr))
      return this._editToolbar;
    this._editToolbar = new Rd(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [e, s] of t)
        await this._editToolbar.addButton(e, s);
    return this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = n(this, mt)) == null || t.destroy());
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return n(this, mt) || (Ic.initialize(W._l10n), f(this, mt, new Ic(this)), n(this, or) && (n(this, mt).data = n(this, or), f(this, or, null))), n(this, mt);
  }
  get altTextData() {
    var t;
    return (t = n(this, mt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, mt) && (n(this, mt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, mt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, mt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, mt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, mt) && !n(this, mt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, mt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  addCommentButton() {
    return n(this, Yt) ? n(this, Yt) : f(this, Yt, new Yh(this));
  }
  get commentColor() {
    return null;
  }
  get comment() {
    const t = n(this, Yt);
    return {
      text: t.data.text,
      date: t.data.date,
      deleted: t.isDeleted(),
      color: this.commentColor
    };
  }
  set comment(t) {
    n(this, Yt) || f(this, Yt, new Yh(this)), n(this, Yt).data = t;
  }
  setCommentData(t) {
    n(this, Yt) || f(this, Yt, new Yh(this)), n(this, Yt).setInitialText(t);
  }
  get hasEditedComment() {
    var t;
    return (t = n(this, Yt)) == null ? void 0 : t.hasBeenEdited();
  }
  async editComment() {
    n(this, Yt) || f(this, Yt, new Yh(this)), n(this, Yt).edit();
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , i] = t.rect, [r] = this.pageDimensions, [a] = this.pageTranslation, o = a + r + 1, l = i - 100, h = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, h, i]
      };
    }
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, $a) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), b(this, z, Wd).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [i, r] = this.getInitialTranslation();
    return this.translate(i, r), jf(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, ur) || f(this, ur, new Fc({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: b(this, z, op).bind(this),
      onPinching: b(this, z, lp).bind(this),
      onPinchEnd: b(this, z, hp).bind(this),
      signal: this._uiManager._signal
    }))), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = ie.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (f(this, cr, !0), this._isDraggable) {
      b(this, z, cp).call(this, t);
      return;
    }
    b(this, z, Vd).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, Fs) && clearTimeout(n(this, Fs)), f(this, Fs, setTimeout(() => {
      var t;
      f(this, Fs, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, u = this.x * r, p = this.y * a, m = this.width * r, A = this.height * a;
    switch (s) {
      case 0:
        return [u + h + o, a - p - c - A + l, u + h + m + o, a - p - c + l];
      case 90:
        return [u + c + o, a - p + h + l, u + c + A + o, a - p + h + m + l];
      case 180:
        return [u - h - m + o, a - p + c + l, u - h + o, a - p + c + A + l];
      case 270:
        return [u - c - A + o, a - p - h - m + l, u - c + o, a - p - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, r, a] = t, o = r - s, l = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [r, e - i, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), f(this, dr, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), f(this, dr, !1), !0) : !1;
  }
  isInEditMode() {
    return n(this, dr);
  }
  shouldGetKeyboardEvents() {
    return n(this, fi);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: s,
      right: i
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && i > 0 && t < r && s > 0;
  }
  rebuild() {
    b(this, z, Wd).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    dt("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s,
      annotationElementId: t.annotationElementId
    });
    i.rotation = t.rotation, f(i, or, t.accessibilityData), i._isCopy = t.isCopy || !1;
    const [r, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = l / a, i.width = h / r, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, cn)) == null || t.abort(), f(this, cn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, Fs) && (clearTimeout(n(this, Fs)), f(this, Fs, null)), b(this, z, Xo).call(this), this.removeEditToolbar(), n(this, Ze)) {
      for (const s of n(this, Ze).values())
        clearTimeout(s);
      f(this, Ze, null);
    }
    this.parent = null, (e = n(this, ur)) == null || e.destroy(), f(this, ur, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, z, rp).call(this), n(this, Kt).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), f(this, ui, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, Kt).children;
    if (!n(this, us)) {
      f(this, us, Array.from(e));
      const a = b(this, z, dp).bind(this), o = b(this, z, up).bind(this), l = this._uiManager._signal;
      for (const h of n(this, us)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", b(this, z, fp).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", W._l10nResizer[c]);
      }
    }
    const s = n(this, us)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, us).length / 4);
    if (r !== i) {
      if (r < i)
        for (let o = 0; o < i - r; o++)
          n(this, Kt).append(n(this, Kt).firstChild);
      else if (r > i)
        for (let o = 0; o < r - i; o++)
          n(this, Kt).firstChild.before(n(this, Kt).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, us)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", W._l10nResizer[h]);
      }
    }
    b(this, z, Xd).call(this, 0), f(this, fi, !0), n(this, Kt).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, fi) && b(this, z, jd).call(this, n(this, Il), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    b(this, z, Xo).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (!(this.isSelected && this._editToolbar)) {
      if (this.isSelected = !0, this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
        this.addEditToolbar().then(() => {
          var i, r;
          (i = this.div) != null && i.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
        });
        return;
      }
      (e = this._editToolbar) == null || e.show(), (s = n(this, mt)) == null || s.toggleAltTextBadge(!1);
    }
  }
  unselect() {
    var t, e, s, i, r;
    this.isSelected && (this.isSelected = !1, (t = n(this, Kt)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (r = n(this, mt)) == null || r.toggleAltTextBadge(!0));
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return !1;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.id
    });
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, Fl);
  }
  set isEditing(t) {
    f(this, Fl, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    f(this, lr, !0);
    const s = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = s, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, Ze) || f(this, Ze, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = n(this, Ze).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, Ze).delete(s), n(this, Ze).size === 0 && f(this, Ze, null);
      }, W._telemetryTimeout), n(this, Ze).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), f(this, $a, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), f(this, $a, !0);
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
or = new WeakMap(), us = new WeakMap(), mt = new WeakMap(), Yt = new WeakMap(), $a = new WeakMap(), hn = new WeakMap(), Ll = new WeakMap(), lr = new WeakMap(), Kt = new WeakMap(), hr = new WeakMap(), ui = new WeakMap(), cn = new WeakMap(), Il = new WeakMap(), cr = new WeakMap(), xe = new WeakMap(), Fl = new WeakMap(), dr = new WeakMap(), fi = new WeakMap(), Fs = new WeakMap(), za = new WeakMap(), Ga = new WeakMap(), Ze = new WeakMap(), ur = new WeakMap(), Nl = new WeakMap(), qc = new WeakMap(), z = new WeakSet(), zd = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, Ol = new WeakSet(), Gd = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, oc = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, rp = function() {
  if (n(this, Kt))
    return;
  f(this, Kt, document.createElement("div")), n(this, Kt).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, Kt).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, z, ap).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", as, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, Kt));
}, ap = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = ie.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = n(this, mt)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, f(this, hr, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, z, jd).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Mt, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", as, {
    signal: a
  }), f(this, ui, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, mt)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, b(this, z, lc).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, Ud = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [r, a] = this.parentDimensions;
  this.setDims(r * s, a * i), this.fixAndSetPosition(), this._onResized();
}, lc = function() {
  if (!n(this, ui))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = n(this, ui);
  f(this, ui, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === s && l === i || this.addCommands({
    cmd: b(this, z, Ud).bind(this, r, a, o, l),
    undo: b(this, z, Ud).bind(this, t, e, s, i),
    mustExec: !0
  });
}, jd = function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = W.MIN_SIZE / s, c = W.MIN_SIZE / i, u = b(this, z, oc).call(this, this.rotation), p = ($, B) => [u[0] * $ + u[2] * B, u[1] * $ + u[3] * B], m = b(this, z, oc).call(this, 360 - this.rotation), A = ($, B) => [m[0] * $ + m[2] * B, m[1] * $ + m[3] * B];
  let y, v, w = !1, S = !1;
  switch (t) {
    case "topLeft":
      w = !0, y = ($, B) => [0, 0], v = ($, B) => [$, B];
      break;
    case "topMiddle":
      y = ($, B) => [$ / 2, 0], v = ($, B) => [$ / 2, B];
      break;
    case "topRight":
      w = !0, y = ($, B) => [$, 0], v = ($, B) => [0, B];
      break;
    case "middleRight":
      S = !0, y = ($, B) => [$, B / 2], v = ($, B) => [0, B / 2];
      break;
    case "bottomRight":
      w = !0, y = ($, B) => [$, B], v = ($, B) => [0, 0];
      break;
    case "bottomMiddle":
      y = ($, B) => [$ / 2, B], v = ($, B) => [$ / 2, 0];
      break;
    case "bottomLeft":
      w = !0, y = ($, B) => [0, B], v = ($, B) => [$, 0];
      break;
    case "middleLeft":
      S = !0, y = ($, B) => [0, B / 2], v = ($, B) => [$, B / 2];
      break;
  }
  const _ = y(o, l), E = v(o, l);
  let C = p(...E);
  const T = W._round(r + C[0]), x = W._round(a + C[1]);
  let P = 1, M = 1, L, R;
  if (e.fromKeyboard)
    ({
      deltaX: L,
      deltaY: R
    } = e);
  else {
    const {
      screenX: $,
      screenY: B
    } = e, [$t, xt] = n(this, hr);
    [L, R] = this.screenToPageTranslation($ - $t, B - xt), n(this, hr)[0] = $, n(this, hr)[1] = B;
  }
  if ([L, R] = A(L / s, R / i), w) {
    const $ = Math.hypot(o, l);
    P = M = Math.max(Math.min(Math.hypot(E[0] - _[0] - L, E[1] - _[1] - R) / $, 1 / o, 1 / l), h / o, c / l);
  } else S ? P = ge(Math.abs(E[0] - _[0] - L), h, 1) / o : M = ge(Math.abs(E[1] - _[1] - R), c, 1) / l;
  const G = W._round(o * P), X = W._round(l * M);
  C = p(...v(G, X));
  const K = T - C[0], et = x - C[1];
  n(this, xe) || f(this, xe, [this.x, this.y, this.width, this.height]), this.width = G, this.height = X, this.x = K, this.y = et, this.setDims(s * G, i * X), this.fixAndSetPosition(), this._onResizing();
}, op = function() {
  var t;
  f(this, ui, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, mt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, lp = function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = b(this, z, oc).call(this, this.rotation), o = (T, x) => [a[0] * T + a[2] * x, a[1] * T + a[3] * x], [l, h] = this.parentDimensions, c = this.x, u = this.y, p = this.width, m = this.height, A = W.MIN_SIZE / l, y = W.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / p, 1 / m), A / p, y / m);
  const v = W._round(p * r), w = W._round(m * r);
  if (v === p && w === m)
    return;
  n(this, xe) || f(this, xe, [c, u, p, m]);
  const S = o(p / 2, m / 2), _ = W._round(c + S[0]), E = W._round(u + S[1]), C = o(v / 2, w / 2);
  this.x = _ - C[0], this.y = E - C[1], this.width = v, this.height = w, this.setDims(l * v, h * w), this.fixAndSetPosition(), this._onResizing();
}, hp = function() {
  var t;
  (t = n(this, mt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), b(this, z, lc).call(this);
}, Vd = function(t) {
  const {
    isMac: e
  } = ie.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, cp = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const i = new AbortController(), r = this._uiManager.combinedSignal(i), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = (h) => {
    i.abort(), f(this, hn, null), f(this, cr, !1), this._uiManager.endDragSession() || b(this, z, Vd).call(this, h), s && this._onStopDragging();
  };
  e && (f(this, za, t.clientX), f(this, Ga, t.clientY), f(this, hn, t.pointerId), f(this, Ll, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: u,
      pointerId: p
    } = h;
    if (p !== n(this, hn)) {
      Mt(h);
      return;
    }
    const [m, A] = this.screenToPageTranslation(c - n(this, za), u - n(this, Ga));
    f(this, za, c), f(this, Ga, u), this._uiManager.dragSelectedEditors(m, A);
  }, a), window.addEventListener("touchmove", Mt, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, Ll) && (n(this, ur) || h.isPrimary) && o(h), Mt(h);
  }, a));
  const l = (h) => {
    if (!n(this, hn) || n(this, hn) === h.pointerId) {
      o(h);
      return;
    }
    Mt(h);
  };
  window.addEventListener("pointerup", l, {
    signal: r
  }), window.addEventListener("blur", l, {
    signal: r
  });
}, Wd = function() {
  if (n(this, cn) || !this.div)
    return;
  f(this, cn, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, cn));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, dp = function(t) {
  W._resizerKeyboardManager.exec(this, t);
}, up = function(t) {
  var e;
  n(this, fi) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, Kt) && b(this, z, Xo).call(this);
}, fp = function(t) {
  f(this, Il, n(this, fi) ? t : "");
}, Xd = function(t) {
  if (n(this, us))
    for (const e of n(this, us))
      e.tabIndex = t;
}, Xo = function() {
  f(this, fi, !1), b(this, z, Xd).call(this, -1), b(this, z, lc).call(this);
}, g(W, Ol), k(W, "_l10n", null), k(W, "_l10nResizer", null), k(W, "_borderLineWidth", -1), k(W, "_colorManager", new Id()), k(W, "_zIndex", 1), k(W, "_telemetryTimeout", 1e3);
let ft = W;
class fm extends ft {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const pf = 3285377520, Xe = 4294901760, Es = 65535;
class pp {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : pf, this.h2 = t ? t & 4294967295 : pf;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let y = 0, v = t.length; y < v; y++) {
        const w = t.charCodeAt(y);
        w <= 255 ? e[s++] = w : (e[s++] = w >>> 8, e[s++] = w & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const u = 3432918353, p = 461845907, m = u & Es, A = p & Es;
    for (let y = 0; y < i; y++)
      y & 1 ? (o = a[y], o = o * u & Xe | o * m & Es, o = o << 15 | o >>> 17, o = o * p & Xe | o * A & Es, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[y], l = l * u & Xe | l * m & Es, l = l << 15 | l >>> 17, l = l * p & Xe | l * A & Es, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & Xe | o * m & Es, o = o << 15 | o >>> 17, o = o * p & Xe | o * A & Es, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Xe | t * 36045 & Es, e = e * 4283543511 & Xe | ((e << 16 | t >>> 16) * 2950163797 & Xe) >>> 16, t ^= e >>> 1, t = t * 444984403 & Xe | t * 60499 & Es, e = e * 3301882366 & Xe | ((e << 16 | t >>> 16) * 3120437893 & Xe) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const qd = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var fr, pr, Qt, Yc, gp;
class Yu {
  constructor() {
    g(this, Yc);
    g(this, fr, !1);
    g(this, pr, null);
    g(this, Qt, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = n(this, Qt).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, Qt).get(t);
  }
  remove(t) {
    if (n(this, Qt).delete(t), n(this, Qt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of n(this, Qt).values())
        if (e instanceof ft)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = n(this, Qt).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (i = !0, s[r] = a);
    else
      i = !0, n(this, Qt).set(t, e);
    i && b(this, Yc, gp).call(this), e instanceof ft && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return n(this, Qt).has(t);
  }
  get size() {
    return n(this, Qt).size;
  }
  resetModified() {
    n(this, fr) && (f(this, fr, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new mp(this);
  }
  get serializable() {
    if (n(this, Qt).size === 0)
      return qd;
    const t = /* @__PURE__ */ new Map(), e = new pp(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, Qt)) {
      const l = o instanceof ft ? o.serialize(!1, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : qd;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of n(this, Qt).values()) {
      if (!(s instanceof ft))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: r
      } = i;
      e.has(r) || e.set(r, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const a = t[r] || (t[r] = /* @__PURE__ */ new Map());
      for (const [o, l] of Object.entries(i)) {
        if (o === "type")
          continue;
        let h = a.get(o);
        h || (h = /* @__PURE__ */ new Map(), a.set(o, h));
        const c = h.get(l) ?? 0;
        h.set(l, c + 1);
      }
    }
    for (const [s, i] of e)
      t[s] = i.computeTelemetryFinalData(t[s]);
    return t;
  }
  resetModifiedIds() {
    f(this, pr, null);
  }
  get modifiedIds() {
    if (n(this, pr))
      return n(this, pr);
    const t = [];
    for (const e of n(this, Qt).values())
      !(e instanceof ft) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return f(this, pr, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return n(this, Qt).entries();
  }
}
fr = new WeakMap(), pr = new WeakMap(), Qt = new WeakMap(), Yc = new WeakSet(), gp = function() {
  n(this, fr) || (f(this, fr, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Bl;
class mp extends Yu {
  constructor(e) {
    super();
    g(this, Bl);
    const {
      map: s,
      hash: i,
      transfer: r
    } = e.serializable, a = structuredClone(s, r ? {
      transfer: r
    } : null);
    f(this, Bl, {
      map: a,
      hash: i,
      transfer: r
    });
  }
  get print() {
    dt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, Bl);
  }
  get modifiedIds() {
    return Y(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Bl = new WeakMap();
var Ua;
class pm {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    g(this, Ua, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Ua).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }) {
    if (!(!t || n(this, Ua).has(t.loadedName))) {
      if (Rt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: i,
          src: r,
          style: a
        } = t, o = new FontFace(i, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Ua).add(i), s == null || s(t);
        } catch {
          j(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      dt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw j(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return Y(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return Y(this, "isSyncFontLoadingSupported", pe || ie.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Rt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const r = s.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return Y(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(E, C) {
      return E.charCodeAt(C) << 24 | E.charCodeAt(C + 1) << 16 | E.charCodeAt(C + 2) << 8 | E.charCodeAt(C + 3) & 255;
    }
    function i(E, C, T, x) {
      const P = E.substring(0, C), M = E.substring(C + T);
      return P + x + M;
    }
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(E, C) {
      if (++h > 30) {
        j("Load test font never loaded."), C();
        return;
      }
      if (l.font = "30px " + E, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        C();
        return;
      }
      setTimeout(c.bind(null, E, C));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, u.length, u);
    const A = 16, y = 1482184792;
    let v = s(p, A);
    for (r = 0, a = u.length - 3; r < a; r += 4)
      v = v - y + s(u, r) | 0;
    r < u.length && (v = v - y + s(u + "XXX", r) | 0), p = i(p, A, 4, Jg(v));
    const w = `url(data:font/opentype;base64,${btoa(p)});`, S = `@font-face {font-family:"${u}";src:${w}}`;
    this.insertRule(S);
    const _ = this._document.createElement("div");
    _.style.visibility = "hidden", _.style.width = _.style.height = "10px", _.style.position = "absolute", _.style.top = _.style.left = "0px";
    for (const E of [t.loadedName, u]) {
      const C = this._document.createElement("span");
      C.textContent = "Hi", C.style.fontFamily = E, _.append(C);
    }
    this._document.body.append(_), c(u, () => {
      _.remove(), e.complete();
    });
  }
}
Ua = new WeakMap();
class gm {
  constructor(t, e = null) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const s in t)
      this[s] = t[s];
    this._inspectFont = e;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const s = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var s;
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${Bf(this.data)});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
    }
    return (s = this._inspectFont) == null || s.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    const s = this.loadedName + "_path_" + e;
    let i;
    try {
      i = t.get(s);
    } catch (a) {
      j(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(i || "");
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
}
function mm(d) {
  if (d instanceof URL)
    return d.href;
  if (typeof d == "string") {
    if (pe)
      return d;
    const t = URL.parse(d, window.location);
    if (t)
      return t.href;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function bm(d) {
  if (pe && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return Gh(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Kh(d) {
  if (typeof d != "string")
    return null;
  if (d.endsWith("/"))
    return d;
  throw new Error(`Invalid factory url: "${d}" must include trailing slash.`);
}
const Yd = (d) => typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0, Am = (d) => typeof d == "object" && typeof (d == null ? void 0 : d.name) == "string", ym = im.bind(null, Yd, Am);
var pi, Kc;
class wm {
  constructor() {
    g(this, pi, /* @__PURE__ */ new Map());
    g(this, Kc, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, Kc).then(() => {
      for (const [i] of n(this, pi))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: r
      } = s;
      if (r.aborted) {
        j("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, pi).set(e, i);
  }
  removeEventListener(t, e) {
    const s = n(this, pi).get(e);
    s == null || s(), n(this, pi).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, pi))
      t == null || t();
    n(this, pi).clear();
  }
}
pi = new WeakMap(), Kc = new WeakMap();
const Qh = {
  DATA: 1,
  ERROR: 2
}, kt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function gf() {
}
function Ae(d) {
  if (d instanceof $n || d instanceof kd || d instanceof df || d instanceof Dc || d instanceof wd)
    return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || dt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new $n(d.message);
    case "InvalidPDFException":
      return new kd(d.message);
    case "PasswordException":
      return new df(d.message, d.code);
    case "ResponseException":
      return new Dc(d.message, d.status, d.missing);
    case "UnknownErrorException":
      return new wd(d.message, d.details);
  }
  return new wd(d.message, d.toString());
}
var ja, rs, bp, Ap, yp, hc;
class qo {
  constructor(t, e, s) {
    g(this, rs);
    g(this, ja, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, rs, bp).bind(this), {
      signal: n(this, ja).signal
    });
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const i = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[i] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, s, i) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: h,
          startCall: c,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: h.desiredSize
        }, i), c.promise;
      },
      pull: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[r].pullCall = c, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: kt.PULL,
          streamId: r,
          desiredSize: h.desiredSize
        }), c.promise;
      },
      cancel: (h) => {
        Rt(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = c, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: kt.CANCEL,
          streamId: r,
          reason: Ae(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = n(this, ja)) == null || t.abort(), f(this, ja, null);
  }
}
ja = new WeakMap(), rs = new WeakSet(), bp = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    b(this, rs, yp).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Qh.DATA)
      i.resolve(t.data);
    else if (t.callback === Qh.ERROR)
      i.reject(Ae(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: Qh.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: Qh.ERROR,
        callbackId: t.callbackId,
        reason: Ae(a)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, rs, Ap).call(this, t);
    return;
  }
  e(t.data);
}, Ap = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, u) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: i,
        stream: kt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: kt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      Rt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: kt.ERROR,
        streamId: e,
        reason: Ae(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(function() {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: kt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: kt.START_COMPLETE,
      streamId: e,
      reason: Ae(h)
    });
  });
}, yp = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case kt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Ae(t.reason));
      break;
    case kt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Ae(t.reason));
      break;
    case kt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || gf).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.PULL_COMPLETE,
          streamId: e,
          reason: Ae(h)
        });
      });
      break;
    case kt.ENQUEUE:
      if (Rt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case kt.CLOSE:
      if (Rt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), b(this, rs, hc).call(this, a, e);
      break;
    case kt.ERROR:
      Rt(a, "error should have stream controller"), a.controller.error(Ae(t.reason)), b(this, rs, hc).call(this, a, e);
      break;
    case kt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Ae(t.reason)), b(this, rs, hc).call(this, a, e);
      break;
    case kt.CANCEL:
      if (!o)
        break;
      const l = Ae(t.reason);
      Promise.try(o.onCancel || gf, l).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.CANCEL_COMPLETE,
          streamId: e,
          reason: Ae(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, hc = async function(t, e) {
  var s, i, r;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var Hl;
class wp {
  constructor({
    enableHWA: t = !1
  }) {
    g(this, Hl, !1);
    f(this, Hl, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !n(this, Hl)
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    dt("Abstract method `_createCanvas` called.");
  }
}
Hl = new WeakMap();
class vm extends wp {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
class vp {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((s) => ({
      cMapData: s,
      isCompressed: this.isCompressed
    })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    dt("Abstract method `_fetch` called.");
  }
}
class mf extends vp {
  async _fetch(t) {
    const e = await Uh(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Gh(e);
  }
}
class _p {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, r) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var gr, Va, gi, mi, ae, mr, br, I, ne, Yo, ua, cc, fa, Sp, Kd, pa, Ko, Qo, Qd, Jo;
class _m extends _p {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    g(this, I);
    g(this, gr);
    g(this, Va);
    g(this, gi);
    g(this, mi);
    g(this, ae);
    g(this, mr);
    g(this, br, 0);
    f(this, mi, e), f(this, ae, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = n(this, I, ne).get(e);
    if (s)
      return s;
    const [i, r, a] = b(this, I, cc).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, I, ne).get(o), s)
      return n(this, I, ne).set(e, s), s;
    const l = `g_${n(this, mi)}_transfer_map_${Lt(this, br)._++}`, h = b(this, I, fa).call(this, l);
    n(this, I, ne).set(e, h), n(this, I, ne).set(o, h);
    const c = b(this, I, pa).call(this, l);
    return b(this, I, Qo).call(this, i, r, a, c), h;
  }
  addHCMFilter(e, s) {
    var A;
    const i = `${e}-${s}`, r = "base";
    let a = n(this, I, Yo).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((A = a.filter) == null || A.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, n(this, I, Yo).set(r, a)), !e || !s))
      return a.url;
    const o = b(this, I, Jo).call(this, e);
    e = O.makeHexColor(...o);
    const l = b(this, I, Jo).call(this, s);
    if (s = O.makeHexColor(...l), n(this, I, ua).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let y = 0; y <= 255; y++) {
      const v = y / 255;
      h[y] = v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), u = `g_${n(this, mi)}_hcm_filter`, p = a.filter = b(this, I, pa).call(this, u);
    b(this, I, Qo).call(this, c, c, c, p), b(this, I, Kd).call(this, p);
    const m = (y, v) => {
      const w = o[y] / 255, S = l[y] / 255, _ = new Array(v + 1);
      for (let E = 0; E <= v; E++)
        _[E] = w + E / v * (S - w);
      return _.join(",");
    };
    return b(this, I, Qo).call(this, m(0, 5), m(1, 5), m(2, 5), p), a.url = b(this, I, fa).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = n(this, I, ne).get(e);
    if (s)
      return s;
    const [i] = b(this, I, cc).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, I, ne).get(r), s)
      return n(this, I, ne).set(e, s), s;
    const a = `g_${n(this, mi)}_alpha_map_${Lt(this, br)._++}`, o = b(this, I, fa).call(this, a);
    n(this, I, ne).set(e, o), n(this, I, ne).set(r, o);
    const l = b(this, I, pa).call(this, a);
    return b(this, I, Qd).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, I, ne).get(e || "luminosity");
    if (s)
      return s;
    let i, r;
    if (e ? ([i] = b(this, I, cc).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, I, ne).get(r), s)
      return n(this, I, ne).set(e, s), s;
    const a = `g_${n(this, mi)}_luminosity_map_${Lt(this, br)._++}`, o = b(this, I, fa).call(this, a);
    n(this, I, ne).set(e, o), n(this, I, ne).set(r, o);
    const l = b(this, I, pa).call(this, a);
    return b(this, I, Sp).call(this, l), e && b(this, I, Qd).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    var S;
    const o = `${s}-${i}-${r}-${a}`;
    let l = n(this, I, Yo).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, I, Yo).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(b(this, I, Jo).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [m, A] = [r, a].map(b(this, I, Jo).bind(this));
    p < u && ([u, p, m, A] = [p, u, A, m]), n(this, I, ua).style.color = "";
    const y = (_, E, C) => {
      const T = new Array(256), x = (p - u) / C, P = _ / 255, M = (E - _) / (255 * C);
      let L = 0;
      for (let R = 0; R <= C; R++) {
        const G = Math.round(u + R * x), X = P + R * M;
        for (let K = L; K <= G; K++)
          T[K] = X;
        L = G + 1;
      }
      for (let R = L; R < 256; R++)
        T[R] = T[L - 1];
      return T.join(",");
    }, v = `g_${n(this, mi)}_hcm_${e}_filter`, w = l.filter = b(this, I, pa).call(this, v);
    return b(this, I, Kd).call(this, w), b(this, I, Qo).call(this, y(m[0], A[0], 5), y(m[1], A[1], 5), y(m[2], A[2], 5), w), l.url = b(this, I, fa).call(this, v), l.url;
  }
  destroy(e = !1) {
    var s, i, r, a;
    e && ((s = n(this, mr)) != null && s.size) || ((i = n(this, gi)) == null || i.parentNode.parentNode.remove(), f(this, gi, null), (r = n(this, Va)) == null || r.clear(), f(this, Va, null), (a = n(this, mr)) == null || a.clear(), f(this, mr, null), f(this, br, 0));
  }
}
gr = new WeakMap(), Va = new WeakMap(), gi = new WeakMap(), mi = new WeakMap(), ae = new WeakMap(), mr = new WeakMap(), br = new WeakMap(), I = new WeakSet(), ne = function() {
  return n(this, Va) || f(this, Va, /* @__PURE__ */ new Map());
}, Yo = function() {
  return n(this, mr) || f(this, mr, /* @__PURE__ */ new Map());
}, ua = function() {
  if (!n(this, gi)) {
    const e = n(this, ae).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, ae).createElementNS(Ks, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), f(this, gi, n(this, ae).createElementNS(Ks, "defs")), e.append(i), i.append(n(this, gi)), n(this, ae).body.append(e);
  }
  return n(this, gi);
}, cc = function(e) {
  if (e.length === 1) {
    const h = e[0], c = new Array(256);
    for (let p = 0; p < 256; p++)
      c[p] = h[p] / 255;
    const u = c.join(",");
    return [u, u, u];
  }
  const [s, i, r] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = r[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, fa = function(e) {
  if (n(this, gr) === void 0) {
    f(this, gr, "");
    const s = n(this, ae).URL;
    s !== n(this, ae).baseURI && (dd(s) ? j('#createUrl: ignore "data:"-URL for performance reasons.') : f(this, gr, Ff(s, "")));
  }
  return `url(${n(this, gr)}#${e})`;
}, Sp = function(e) {
  const s = n(this, ae).createElementNS(Ks, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Kd = function(e) {
  const s = n(this, ae).createElementNS(Ks, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, pa = function(e) {
  const s = n(this, ae).createElementNS(Ks, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, I, ua).append(s), s;
}, Ko = function(e, s, i) {
  const r = n(this, ae).createElementNS(Ks, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, Qo = function(e, s, i, r) {
  const a = n(this, ae).createElementNS(Ks, "feComponentTransfer");
  r.append(a), b(this, I, Ko).call(this, a, "feFuncR", e), b(this, I, Ko).call(this, a, "feFuncG", s), b(this, I, Ko).call(this, a, "feFuncB", i);
}, Qd = function(e, s) {
  const i = n(this, ae).createElementNS(Ks, "feComponentTransfer");
  s.append(i), b(this, I, Ko).call(this, i, "feFuncA", e);
}, Jo = function(e) {
  return n(this, I, ua).style.color = e, ud(getComputedStyle(n(this, I, ua)).getPropertyValue("color"));
};
class Ep {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    dt("Abstract method `_fetch` called.");
  }
}
class bf extends Ep {
  async _fetch(t) {
    const e = await Uh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class Cp {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t)
      throw new Error("Wasm filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t) {
    dt("Abstract method `_fetch` called.");
  }
}
class Af extends Cp {
  async _fetch(t) {
    const e = await Uh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
pe && j("Please use the `legacy` build in Node.js environments.");
async function Ku(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class Sm extends _p {
}
class Em extends wp {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Cm extends vp {
  async _fetch(t) {
    return Ku(t);
  }
}
class Tm extends Ep {
  async _fetch(t) {
    return Ku(t);
  }
}
class xm extends Cp {
  async _fetch(t) {
    return Ku(t);
  }
}
const ha = "__forcedDependency";
var ke, ce, Wa, Ns, Xa, bi, at, lt, Ai, Pe, dn, qa, un, fn;
class km {
  constructor(t) {
    g(this, ke, {
      __proto__: null
    });
    g(this, ce, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [ha]: []
    });
    g(this, Wa, /* @__PURE__ */ new Map());
    g(this, Ns, []);
    g(this, Xa, []);
    g(this, bi, [[1, 0, 0, 1, 0, 0]]);
    g(this, at, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    g(this, lt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    g(this, Ai, -1);
    g(this, Pe, /* @__PURE__ */ new Set());
    g(this, dn, /* @__PURE__ */ new Map());
    g(this, qa, /* @__PURE__ */ new Map());
    g(this, un);
    g(this, fn);
    f(this, un, t.width), f(this, fn, t.height);
  }
  save(t) {
    return f(this, ke, {
      __proto__: n(this, ke)
    }), f(this, ce, {
      __proto__: n(this, ce),
      transform: {
        __proto__: n(this, ce).transform
      },
      moveText: {
        __proto__: n(this, ce).moveText
      },
      sameLineText: {
        __proto__: n(this, ce).sameLineText
      },
      [ha]: {
        __proto__: n(this, ce)[ha]
      }
    }), f(this, at, {
      __proto__: n(this, at)
    }), n(this, Ns).push([t, null]), this;
  }
  restore(t) {
    const e = Object.getPrototypeOf(n(this, ke));
    if (e === null)
      return this;
    f(this, ke, e), f(this, ce, Object.getPrototypeOf(n(this, ce))), f(this, at, Object.getPrototypeOf(n(this, at)));
    const s = n(this, Ns).pop();
    return s !== void 0 && (s[1] = t), this;
  }
  recordOpenMarker(t) {
    return n(this, Ns).push([t, null]), this;
  }
  getOpenMarker() {
    return n(this, Ns).length === 0 ? null : n(this, Ns).at(-1)[0];
  }
  recordCloseMarker(t) {
    const e = n(this, Ns).pop();
    return e !== void 0 && (e[1] = t), this;
  }
  beginMarkedContent(t) {
    return n(this, Xa).push([t, null]), this;
  }
  endMarkedContent(t) {
    const e = n(this, Xa).pop();
    return e !== void 0 && (e[1] = t), this;
  }
  pushBaseTransform(t) {
    return n(this, bi).push(O.multiplyByDOMMatrix(n(this, bi).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return n(this, bi).length > 1 && n(this, bi).pop(), this;
  }
  recordSimpleData(t, e) {
    return n(this, ke)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return n(this, ce)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return n(this, ce)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return n(this, Wa).set(t, e), this;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(ha, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t)
      e in n(this, ke) && this.recordFutureForcedDependency(e, n(this, ke)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, Pe))
      this.recordFutureForcedDependency(ha, t);
    return this;
  }
  resetBBox(t) {
    return f(this, Ai, t), n(this, lt)[0] = 1 / 0, n(this, lt)[1] = 1 / 0, n(this, lt)[2] = -1 / 0, n(this, lt)[3] = -1 / 0, this;
  }
  get hasPendingBBox() {
    return n(this, Ai) !== -1;
  }
  recordClipBox(t, e, s, i, r, a) {
    const o = O.multiplyByDOMMatrix(n(this, bi).at(-1), e.getTransform()), l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    O.axialAlignedBoundingBox([s, r, i, a], o, l);
    const h = O.intersect(n(this, at), l);
    return h ? (n(this, at)[0] = h[0], n(this, at)[1] = h[1], n(this, at)[2] = h[2], n(this, at)[3] = h[3]) : (n(this, at)[0] = n(this, at)[1] = 1 / 0, n(this, at)[2] = n(this, at)[3] = -1 / 0), this;
  }
  recordBBox(t, e, s, i, r, a) {
    const o = n(this, at);
    if (o[0] === 1 / 0)
      return this;
    const l = O.multiplyByDOMMatrix(n(this, bi).at(-1), e.getTransform());
    if (o[0] === -1 / 0)
      return O.axialAlignedBoundingBox([s, r, i, a], l, n(this, lt)), this;
    const h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return O.axialAlignedBoundingBox([s, r, i, a], l, h), n(this, lt)[0] = Math.min(n(this, lt)[0], Math.max(h[0], o[0])), n(this, lt)[1] = Math.min(n(this, lt)[1], Math.max(h[1], o[1])), n(this, lt)[2] = Math.max(n(this, lt)[2], Math.min(h[2], o[2])), n(this, lt)[3] = Math.max(n(this, lt)[3], Math.min(h[3], o[3])), this;
  }
  recordCharacterBBox(t, e, s, i = 1, r = 0, a = 0, o) {
    const l = s.bbox;
    let h, c;
    if (l && (h = l[2] !== l[0] && l[3] !== l[1] && n(this, qa).get(s), h !== !1 && (c = [0, 0, 0, 0], O.axialAlignedBoundingBox(l, s.fontMatrix, c), (i !== 1 || r !== 0 || a !== 0) && O.scaleMinMax([i, 0, 0, -i, r, a], c), h)))
      return this.recordBBox(t, e, c[0], c[2], c[1], c[3]);
    if (!o)
      return this.recordFullPageBBox(t);
    const u = o();
    return l && c && h === void 0 && (h = c[0] <= r - u.actualBoundingBoxLeft && c[2] >= r + u.actualBoundingBoxRight && c[1] <= a - u.actualBoundingBoxAscent && c[3] >= a + u.actualBoundingBoxDescent, n(this, qa).set(s, h), h) ? this.recordBBox(t, e, c[0], c[2], c[1], c[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return n(this, lt)[0] = Math.max(0, n(this, at)[0]), n(this, lt)[1] = Math.max(0, n(this, at)[1]), n(this, lt)[2] = Math.min(n(this, un), n(this, at)[2]), n(this, lt)[3] = Math.min(n(this, fn), n(this, at)[3]), this;
  }
  getSimpleIndex(t) {
    return n(this, ke)[t];
  }
  recordDependencies(t, e) {
    const s = n(this, Pe), i = n(this, ke), r = n(this, ce);
    for (const a of e)
      a in n(this, ke) ? s.add(i[a]) : a in r && r[a].forEach(s.add, s);
    return this;
  }
  copyDependenciesFromIncrementalOperation(t, e) {
    const s = n(this, dn), i = n(this, Pe);
    for (const r of n(this, ce)[e])
      s.get(r).dependencies.forEach(i.add, i.add(r));
    return this;
  }
  recordNamedDependency(t, e) {
    return n(this, Wa).has(e) && n(this, Pe).add(n(this, Wa).get(e)), this;
  }
  recordOperation(t, e = !1) {
    this.recordDependencies(t, [ha]);
    const s = new Set(n(this, Pe)), i = n(this, Ns).concat(n(this, Xa)), r = n(this, Ai) === t ? {
      minX: n(this, lt)[0],
      minY: n(this, lt)[1],
      maxX: n(this, lt)[2],
      maxY: n(this, lt)[3]
    } : null;
    return n(this, dn).set(t, {
      bbox: r,
      pairs: i,
      dependencies: s
    }), e || f(this, Ai, -1), n(this, Pe).clear(), this;
  }
  bboxToClipBoxDropOperation(t) {
    return n(this, Ai) !== -1 && (f(this, Ai, -1), n(this, at)[0] = Math.max(n(this, at)[0], n(this, lt)[0]), n(this, at)[1] = Math.max(n(this, at)[1], n(this, lt)[1]), n(this, at)[2] = Math.min(n(this, at)[2], n(this, lt)[2]), n(this, at)[3] = Math.min(n(this, at)[3], n(this, lt)[3])), n(this, Pe).clear(), this;
  }
  _takePendingDependencies() {
    const t = n(this, Pe);
    return f(this, Pe, /* @__PURE__ */ new Set()), t;
  }
  _extractOperation(t) {
    const e = n(this, dn).get(t);
    return n(this, dn).delete(t), e;
  }
  _pushPendingDependencies(t) {
    for (const e of t)
      n(this, Pe).add(e);
  }
  take() {
    return n(this, qa).clear(), Array.from(n(this, dn), ([t, {
      bbox: e,
      pairs: s,
      dependencies: i
    }]) => (s.forEach((r) => r.forEach(i.add, i)), i.delete(t), {
      minX: ((e == null ? void 0 : e.minX) ?? 0) / n(this, un),
      maxX: ((e == null ? void 0 : e.maxX) ?? n(this, un)) / n(this, un),
      minY: ((e == null ? void 0 : e.minY) ?? 0) / n(this, fn),
      maxY: ((e == null ? void 0 : e.maxY) ?? n(this, fn)) / n(this, fn),
      dependencies: Array.from(i).sort((r, a) => r - a),
      idx: t
    }));
  }
}
ke = new WeakMap(), ce = new WeakMap(), Wa = new WeakMap(), Ns = new WeakMap(), Xa = new WeakMap(), bi = new WeakMap(), at = new WeakMap(), lt = new WeakMap(), Ai = new WeakMap(), Pe = new WeakMap(), dn = new WeakMap(), qa = new WeakMap(), un = new WeakMap(), fn = new WeakMap();
var it, wt, Ya, pn, Ka;
const rf = class rf {
  constructor(t, e) {
    g(this, it);
    g(this, wt);
    g(this, Ya, 0);
    g(this, pn);
    g(this, Ka, 0);
    if (t instanceof rf)
      return t;
    f(this, it, t), f(this, pn, t._takePendingDependencies()), f(this, wt, e);
  }
  save(t) {
    return Lt(this, Ka)._++, n(this, it).save(n(this, wt)), this;
  }
  restore(t) {
    return n(this, Ka) > 0 && (n(this, it).restore(n(this, wt)), Lt(this, Ka)._--), this;
  }
  recordOpenMarker(t) {
    return Lt(this, Ya)._++, this;
  }
  getOpenMarker() {
    return n(this, Ya) > 0 ? n(this, wt) : n(this, it).getOpenMarker();
  }
  recordCloseMarker(t) {
    return Lt(this, Ya)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return n(this, it).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return n(this, it).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return n(this, it).recordSimpleData(t, n(this, wt)), this;
  }
  recordIncrementalData(t, e) {
    return n(this, it).recordIncrementalData(t, n(this, wt)), this;
  }
  resetIncrementalData(t, e) {
    return n(this, it).resetIncrementalData(t, n(this, wt)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordFutureForcedDependency(t, e) {
    return n(this, it).recordFutureForcedDependency(t, n(this, wt)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, it).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, it).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return n(this, it).hasPendingBBox || n(this, it).resetBBox(n(this, wt)), this;
  }
  get hasPendingBBox() {
    return n(this, it).hasPendingBBox;
  }
  recordClipBox(t, e, s, i, r, a) {
    return n(this, it).recordClipBox(n(this, wt), e, s, i, r, a), this;
  }
  recordBBox(t, e, s, i, r, a) {
    return n(this, it).recordBBox(n(this, wt), e, s, i, r, a), this;
  }
  recordCharacterBBox(t, e, s, i, r, a, o) {
    return n(this, it).recordCharacterBBox(n(this, wt), e, s, i, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return n(this, it).recordFullPageBBox(n(this, wt)), this;
  }
  getSimpleIndex(t) {
    return n(this, it).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return n(this, it).recordDependencies(n(this, wt), e), this;
  }
  copyDependenciesFromIncrementalOperation(t, e) {
    return n(this, it).copyDependenciesFromIncrementalOperation(n(this, wt), e), this;
  }
  recordNamedDependency(t, e) {
    return n(this, it).recordNamedDependency(n(this, wt), e), this;
  }
  recordOperation(t) {
    n(this, it).recordOperation(n(this, wt), !0);
    const e = n(this, it)._extractOperation(n(this, wt));
    for (const s of e.dependencies)
      n(this, pn).add(s);
    return n(this, pn).delete(n(this, wt)), n(this, pn).delete(null), this;
  }
  bboxToClipBoxDropOperation(t) {
    return n(this, it).bboxToClipBoxDropOperation(n(this, wt)), this;
  }
  recordNestedDependencies() {
    n(this, it)._pushPendingDependencies(n(this, pn));
  }
  take() {
    throw new Error("Unreachable");
  }
};
it = new WeakMap(), wt = new WeakMap(), Ya = new WeakMap(), pn = new WeakMap(), Ka = new WeakMap();
let Nc = rf;
const qe = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
}, te = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Jd(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class Qu {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    dt("Abstract method `getPattern` called.");
  }
}
class Pm extends Qu {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let r;
    if (i === te.STROKE || i === te.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, vt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = O.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), Jd(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      r.setTransform(u);
    } else
      Jd(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function Sd(d, t, e, s, i, r, a, o) {
  const l = t.coords, h = t.colors, c = d.data, u = d.width * 4;
  let p;
  l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), l[s + 1] > l[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const m = (l[e] + t.offsetX) * t.scaleX, A = (l[e + 1] + t.offsetY) * t.scaleY, y = (l[s] + t.offsetX) * t.scaleX, v = (l[s + 1] + t.offsetY) * t.scaleY, w = (l[i] + t.offsetX) * t.scaleX, S = (l[i + 1] + t.offsetY) * t.scaleY;
  if (A >= S)
    return;
  const _ = h[r], E = h[r + 1], C = h[r + 2], T = h[a], x = h[a + 1], P = h[a + 2], M = h[o], L = h[o + 1], R = h[o + 2], G = Math.round(A), X = Math.round(S);
  let K, et, $, B, $t, xt, We, _s;
  for (let ut = G; ut <= X; ut++) {
    if (ut < v) {
      const St = ut < A ? 0 : (A - ut) / (A - v);
      K = m - (m - y) * St, et = _ - (_ - T) * St, $ = E - (E - x) * St, B = C - (C - P) * St;
    } else {
      let St;
      ut > S ? St = 1 : v === S ? St = 0 : St = (v - ut) / (v - S), K = y - (y - w) * St, et = T - (T - M) * St, $ = x - (x - L) * St, B = P - (P - R) * St;
    }
    let ot;
    ut < A ? ot = 0 : ut > S ? ot = 1 : ot = (A - ut) / (A - S), $t = m - (m - w) * ot, xt = _ - (_ - M) * ot, We = E - (E - L) * ot, _s = C - (C - R) * ot;
    const Ys = Math.round(Math.min(K, $t)), os = Math.round(Math.max(K, $t));
    let ls = u * ut + Ys * 4;
    for (let St = Ys; St <= os; St++)
      ot = (K - St) / (K - $t), ot < 0 ? ot = 0 : ot > 1 && (ot = 1), c[ls++] = et - (et - xt) * ot | 0, c[ls++] = $ - ($ - We) * ot | 0, c[ls++] = B - (B - _s) * ot | 0, c[ls++] = 255;
  }
}
function Mm(d, t, e) {
  const s = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (r = 0; r < l; r++) {
        let c = r * o;
        for (let u = 0; u < h; u++, c++)
          Sd(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), Sd(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = s.length; r < a; r += 3)
        Sd(d, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Rm extends Qu {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), m = h / u, A = c / p, y = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / m,
      scaleY: 1 / A
    }, v = u + 4, w = p + 4, S = s.getCanvas("mesh", v, w), _ = S.context, E = _.createImageData(u, p);
    if (e) {
      const T = E.data;
      for (let x = 0, P = T.length; x < P; x += 4)
        T[x] = e[0], T[x + 1] = e[1], T[x + 2] = e[2], T[x + 3] = 255;
    }
    for (const T of this._figures)
      Mm(E, T, y);
    return _.putImageData(E, 2, 2), {
      canvas: S.canvas,
      offsetX: o - 2 * m,
      offsetY: l - 2 * A,
      scaleX: m,
      scaleY: A
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, s, i) {
    Jd(t, this._bbox);
    const r = new Float32Array(2);
    if (i === te.SHADING)
      O.singularValueDecompose2dScale(vt(t), r);
    else if (this.matrix) {
      O.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      O.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else
      O.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, i === te.SHADING ? null : this._background, e.cachedCanvases);
    return i !== te.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class Dm extends Qu {
  getPattern() {
    return "hotpink";
  }
}
function Lm(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new Pm(d);
    case "Mesh":
      return new Rm(d);
    case "Dummy":
      return new Dm();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const yf = {
  COLORED: 1,
  UNCOLORED: 2
}, Qc = class Qc {
  constructor(t, e, s, i) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = s, this.baseTransform = i;
  }
  createPatternCanvas(t) {
    var $t, xt, We, _s;
    const {
      bbox: e,
      operatorList: s,
      paintType: i,
      tilingType: r,
      color: a,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: l,
      ystep: h
    } = this;
    l = Math.abs(l), h = Math.abs(h), cd("TilingType: " + r);
    const c = e[0], u = e[1], p = e[2], m = e[3], A = p - c, y = m - u, v = new Float32Array(2);
    O.singularValueDecompose2dScale(this.matrix, v);
    const [w, S] = v;
    O.singularValueDecompose2dScale(this.baseTransform, v);
    const _ = w * v[0], E = S * v[1];
    let C = A, T = y, x = !1, P = !1;
    const M = Math.ceil(l * _), L = Math.ceil(h * E), R = Math.ceil(A * _), G = Math.ceil(y * E);
    M >= R ? C = l : x = !0, L >= G ? T = h : P = !0;
    const X = this.getSizeAndScale(C, this.ctx.canvas.width, _), K = this.getSizeAndScale(T, this.ctx.canvas.height, E), et = t.cachedCanvases.getCanvas("pattern", X.size, K.size), $ = et.context, B = o.createCanvasGraphics($);
    if (B.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(B, i, a), $.translate(-X.scale * c, -K.scale * u), B.transform(0, X.scale, 0, 0, K.scale, 0, 0), $.save(), ($t = B.dependencyTracker) == null || $t.save(), this.clipBbox(B, c, u, p, m), B.baseTransform = vt(B.ctx), B.executeOperatorList(s), B.endDrawing(), (_s = (xt = B.dependencyTracker) == null ? void 0 : (We = xt.restore()).recordNestedDependencies) == null || _s.call(We), $.restore(), x || P) {
      const ut = et.canvas;
      x && (C = l), P && (T = h);
      const ot = this.getSizeAndScale(C, this.ctx.canvas.width, _), Ys = this.getSizeAndScale(T, this.ctx.canvas.height, E), os = ot.size, ls = Ys.size, St = t.cachedCanvases.getCanvas("pattern-workaround", os, ls), gd = St.context, md = x ? Math.floor(A / l) : 0, bd = P ? Math.floor(y / h) : 0;
      for (let jn = 0; jn <= md; jn++)
        for (let Vn = 0; Vn <= bd; Vn++)
          gd.drawImage(ut, os * jn, ls * Vn, os, ls, 0, 0, os, ls);
      return {
        canvas: St.canvas,
        scaleX: ot.scale,
        scaleY: Ys.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: et.canvas,
      scaleX: X.scale,
      scaleY: K.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(Qc.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= i ? r = i : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, i, r) {
    const a = i - e, o = r - s;
    t.ctx.rect(e, s, a, o), O.axialAlignedBoundingBox([e, s, i, r], vt(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, r = t.current;
    switch (e) {
      case yf.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        i.fillStyle = r.fillColor = a, i.strokeStyle = r.strokeColor = o;
        break;
      case yf.UNCOLORED:
        i.fillStyle = i.strokeStyle = s, r.fillColor = r.strokeColor = s;
        break;
      default:
        throw new Qg(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, s, i) {
    let r = s;
    i !== te.SHADING && (r = O.transform(r, e.baseTransform), this.matrix && (r = O.transform(r, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(r);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
k(Qc, "MAX_PATTERN_SIZE", 3e3);
let Zd = Qc;
function Im({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = ie.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], c = s >> 3, u = s & 7, p = d.length;
  e = new Uint32Array(e.buffer);
  let m = 0;
  for (let A = 0; A < i; A++) {
    for (const v = t + c; t < v; t++) {
      const w = t < p ? d[t] : 255;
      e[m++] = w & 128 ? h : l, e[m++] = w & 64 ? h : l, e[m++] = w & 32 ? h : l, e[m++] = w & 16 ? h : l, e[m++] = w & 8 ? h : l, e[m++] = w & 4 ? h : l, e[m++] = w & 2 ? h : l, e[m++] = w & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const y = t < p ? d[t++] : 255;
    for (let v = 0; v < u; v++)
      e[m++] = y & 1 << 7 - v ? h : l;
  }
  return {
    srcPos: t,
    destPos: m
  };
}
const wf = 16, vf = 100, Fm = 15, _f = 10, Se = 16, Ed = new DOMMatrix(), Ue = new Float32Array(2), Aa = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function Nm(d, t) {
  if (d._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  d.__originalSave = d.save, d.__originalRestore = d.restore, d.__originalRotate = d.rotate, d.__originalScale = d.scale, d.__originalTranslate = d.translate, d.__originalTransform = d.transform, d.__originalSetTransform = d.setTransform, d.__originalResetTransform = d.resetTransform, d.__originalClip = d.clip, d.__originalMoveTo = d.moveTo, d.__originalLineTo = d.lineTo, d.__originalBezierCurveTo = d.bezierCurveTo, d.__originalRect = d.rect, d.__originalClosePath = d.closePath, d.__originalBeginPath = d.beginPath, d._removeMirroring = () => {
    d.save = d.__originalSave, d.restore = d.__originalRestore, d.rotate = d.__originalRotate, d.scale = d.__originalScale, d.translate = d.__originalTranslate, d.transform = d.__originalTransform, d.setTransform = d.__originalSetTransform, d.resetTransform = d.__originalResetTransform, d.clip = d.__originalClip, d.moveTo = d.__originalMoveTo, d.lineTo = d.__originalLineTo, d.bezierCurveTo = d.__originalBezierCurveTo, d.rect = d.__originalRect, d.closePath = d.__originalClosePath, d.beginPath = d.__originalBeginPath, delete d._removeMirroring;
  }, d.save = function() {
    t.save(), this.__originalSave();
  }, d.restore = function() {
    t.restore(), this.__originalRestore();
  }, d.translate = function(e, s) {
    t.translate(e, s), this.__originalTranslate(e, s);
  }, d.scale = function(e, s) {
    t.scale(e, s), this.__originalScale(e, s);
  }, d.transform = function(e, s, i, r, a, o) {
    t.transform(e, s, i, r, a, o), this.__originalTransform(e, s, i, r, a, o);
  }, d.setTransform = function(e, s, i, r, a, o) {
    t.setTransform(e, s, i, r, a, o), this.__originalSetTransform(e, s, i, r, a, o);
  }, d.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, d.rotate = function(e) {
    t.rotate(e), this.__originalRotate(e);
  }, d.clip = function(e) {
    t.clip(e), this.__originalClip(e);
  }, d.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, d.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, d.bezierCurveTo = function(e, s, i, r, a, o) {
    t.bezierCurveTo(e, s, i, r, a, o), this.__originalBezierCurveTo(e, s, i, r, a, o);
  }, d.rect = function(e, s, i, r) {
    t.rect(e, s, i, r), this.__originalRect(e, s, i, r);
  }, d.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, d.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class Om {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Jh(d, t, e, s, i, r, a, o, l, h) {
  const [c, u, p, m, A, y] = vt(d);
  if (u === 0 && p === 0) {
    const S = a * c + A, _ = Math.round(S), E = o * m + y, C = Math.round(E), T = (a + l) * c + A, x = Math.abs(Math.round(T) - _) || 1, P = (o + h) * m + y, M = Math.abs(Math.round(P) - C) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(m), _, C), d.drawImage(t, e, s, i, r, 0, 0, x, M), d.setTransform(c, u, p, m, A, y), [x, M];
  }
  if (c === 0 && m === 0) {
    const S = o * p + A, _ = Math.round(S), E = a * u + y, C = Math.round(E), T = (o + h) * p + A, x = Math.abs(Math.round(T) - _) || 1, P = (a + l) * u + y, M = Math.abs(Math.round(P) - C) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(p), 0, _, C), d.drawImage(t, e, s, i, r, 0, 0, M, x), d.setTransform(c, u, p, m, A, y), [M, x];
  }
  d.drawImage(t, e, s, i, r, a, o, l, h);
  const v = Math.hypot(c, u), w = Math.hypot(p, m);
  return [v * l, w * h];
}
class Sf {
  constructor(t, e, s) {
    k(this, "alphaIsShape", !1);
    k(this, "fontSize", 0);
    k(this, "fontSizeScale", 1);
    k(this, "textMatrix", null);
    k(this, "textMatrixScale", 1);
    k(this, "fontMatrix", xd);
    k(this, "leading", 0);
    k(this, "x", 0);
    k(this, "y", 0);
    k(this, "lineX", 0);
    k(this, "lineY", 0);
    k(this, "charSpacing", 0);
    k(this, "wordSpacing", 0);
    k(this, "textHScale", 1);
    k(this, "textRenderingMode", Xt.FILL);
    k(this, "textRise", 0);
    k(this, "fillColor", "#000000");
    k(this, "strokeColor", "#000000");
    k(this, "patternFill", !1);
    k(this, "patternStroke", !1);
    k(this, "fillAlpha", 1);
    k(this, "strokeAlpha", 1);
    k(this, "lineWidth", 1);
    k(this, "activeSMask", null);
    k(this, "transferMaps", "none");
    s == null || s(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = Aa.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = te.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === te.STROKE) {
      e || dt("Stroke bounding box must include transform."), O.singularValueDecompose2dScale(e, Ue);
      const i = Ue[0] * this.lineWidth / 2, r = Ue[1] * this.lineWidth / 2;
      s[0] -= i, s[1] -= r, s[2] += i, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = O.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(Aa, 0);
  }
  getClippedPathBoundingBox(t = te.FILL, e = null) {
    return O.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Ef(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Se, r = (e - i) / Se, a = i === 0 ? r : r + 1, o = d.createImageData(s, Se);
  let l = 0, h;
  const c = t.data, u = o.data;
  let p, m, A, y;
  if (t.kind === sc.GRAYSCALE_1BPP) {
    const v = c.byteLength, w = new Uint32Array(u.buffer, 0, u.byteLength >> 2), S = w.length, _ = s + 7 >> 3, E = 4294967295, C = ie.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (A = p < r ? Se : i, h = 0, m = 0; m < A; m++) {
        const T = v - l;
        let x = 0;
        const P = T > _ ? s : T * 8 - 7, M = P & -8;
        let L = 0, R = 0;
        for (; x < M; x += 8)
          R = c[l++], w[h++] = R & 128 ? E : C, w[h++] = R & 64 ? E : C, w[h++] = R & 32 ? E : C, w[h++] = R & 16 ? E : C, w[h++] = R & 8 ? E : C, w[h++] = R & 4 ? E : C, w[h++] = R & 2 ? E : C, w[h++] = R & 1 ? E : C;
        for (; x < P; x++)
          L === 0 && (R = c[l++], L = 128), w[h++] = R & L ? E : C, L >>= 1;
      }
      for (; h < S; )
        w[h++] = 0;
      d.putImageData(o, 0, p * Se);
    }
  } else if (t.kind === sc.RGBA_32BPP) {
    for (m = 0, y = s * Se * 4, p = 0; p < r; p++)
      u.set(c.subarray(l, l + y)), l += y, d.putImageData(o, 0, m), m += Se;
    p < a && (y = s * i * 4, u.set(c.subarray(l, l + y)), d.putImageData(o, 0, m));
  } else if (t.kind === sc.RGB_24BPP)
    for (A = Se, y = s * A, p = 0; p < a; p++) {
      for (p >= r && (A = i, y = s * A), h = 0, m = y; m--; )
        u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
      d.putImageData(o, 0, p * Se);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Cf(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Se, r = (e - i) / Se, a = i === 0 ? r : r + 1, o = d.createImageData(s, Se);
  let l = 0;
  const h = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < r ? Se : i;
    ({
      srcPos: l
    } = Im({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), d.putImageData(o, 0, u * Se);
  }
}
function Bo(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function Zh(d) {
  d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0);
  const {
    filter: t
  } = d;
  t !== "none" && t !== "" && (d.filter = "none");
}
function Tf(d, t) {
  if (t)
    return !0;
  O.singularValueDecompose2dScale(d, Ue);
  const e = Math.fround(Xs.pixelRatio * zn.PDF_TO_CSS_UNITS);
  return Ue[0] <= e && Ue[1] <= e;
}
const Bm = ["butt", "round", "square"], Hm = ["miter", "round", "bevel"], $m = {}, xf = {};
var vs, tu, eu, su;
const af = class af {
  constructor(t, e, s, i, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h, c) {
    g(this, vs);
    this.ctx = t, this.current = new Sf(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Om(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = c ?? null;
  }
  getObject(t, e, s = null) {
    var i;
    return typeof e == "string" ? ((i = this.dependencyTracker) == null || i.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : s;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...vt(this.compositeCtx));
    }
    this.ctx.save(), Zh(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = vt(this.ctx);
  }
  executeOperatorList(t, e, s, i, r) {
    var w;
    const a = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const h = a.length;
    if (h === l)
      return l;
    const c = h - l > _f && typeof s == "function", u = c ? Date.now() + Fm : 0;
    let p = 0;
    const m = this.commonObjs, A = this.objs;
    let y, v;
    for (; ; ) {
      if (i !== void 0 && l === i.nextBreakPoint)
        return i.breakIt(l, s), l;
      if (!r || r.has(l))
        if (y = o[l], v = a[l] ?? null, y !== ll.dependency)
          v === null ? this[y](l) : this[y](l, ...v);
        else
          for (const S of v) {
            (w = this.dependencyTracker) == null || w.recordNamedData(S, l);
            const _ = S.startsWith("g_") ? m : A;
            if (!_.has(S))
              return _.get(S, s), l;
          }
      if (l++, l === h)
        return l;
      if (c && ++p > _f) {
        if (Date.now() > u)
          return s(), l;
        p = 0;
      }
    }
  }
  endDrawing() {
    b(this, vs, tu).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, vs, eu).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, u;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let p = o, m = l;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && l > 1 && (m = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / m), c = this.cachedCanvases.getCanvas(h, p, m), u = c.context, u.clearRect(0, 0, p, m), u.drawImage(t, 0, 0, o, l, 0, 0, p, m), t = c.canvas, o = p, l = m, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t, e) {
    var L, R;
    const s = this.ctx, {
      width: i,
      height: r
    } = e, a = this.current.fillColor, o = this.current.patternFill, l = vt(s);
    let h, c, u, p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const G = e.bitmap || e.data.buffer;
      c = JSON.stringify(o ? l : [l.slice(0, 4), a]), h = this._cachedBitmapsMap.get(G), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(G, h));
      const X = h.get(c);
      if (X && !o) {
        const K = Math.round(Math.min(l[0], l[2]) + l[4]), et = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (L = this.dependencyTracker) == null || L.recordDependencies(t, qe.transformAndFill), {
          canvas: X,
          offsetX: K,
          offsetY: et
        };
      }
      u = X;
    }
    u || (p = this.cachedCanvases.getCanvas("maskCanvas", i, r), Cf(p.context, e));
    let m = O.transform(l, [1 / i, 0, 0, -1 / r, 0, 0]);
    m = O.transform(m, [1, 0, 0, 1, 0, -r]);
    const A = Aa.slice();
    O.axialAlignedBoundingBox([0, 0, i, r], m, A);
    const [y, v, w, S] = A, _ = Math.round(w - y) || 1, E = Math.round(S - v) || 1, C = this.cachedCanvases.getCanvas("fillCanvas", _, E), T = C.context, x = y, P = v;
    T.translate(-x, -P), T.transform(...m), u || (u = this._scaleImage(p.canvas, Ss(T)), u = u.img, h && o && h.set(c, u)), T.imageSmoothingEnabled = Tf(vt(T), e.interpolate), Jh(T, u, 0, 0, u.width, u.height, 0, 0, i, r), T.globalCompositeOperation = "source-in";
    const M = O.transform(Ss(T), [1, 0, 0, 1, -x, -P]);
    return T.fillStyle = o ? a.getPattern(s, this, M, te.FILL) : a, T.fillRect(0, 0, i, r), h && !o && (this.cachedCanvases.delete("fillCanvas"), h.set(c, C.canvas)), (R = this.dependencyTracker) == null || R.recordDependencies(t, qe.transformAndFill), {
      canvas: C.canvas,
      offsetX: Math.round(x),
      offsetY: Math.round(P)
    };
  }
  setLineWidth(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineCap", t), this.ctx.lineCap = Bm[e];
  }
  setLineJoin(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineJoin", t), this.ctx.lineJoin = Hm[e];
  }
  setMiterLimit(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
  }
  setDash(t, e, s) {
    var r;
    (r = this.dependencyTracker) == null || r.recordSimpleData("dash", t);
    const i = this.ctx;
    i.setLineDash !== void 0 && (i.setLineDash(e), i.lineDashOffset = s);
  }
  setRenderingIntent(t, e) {
  }
  setFlatness(t, e) {
  }
  setGState(t, e) {
    var s, i, r, a, o;
    for (const [l, h] of e)
      switch (l) {
        case "LW":
          this.setLineWidth(t, h);
          break;
        case "LC":
          this.setLineCap(t, h);
          break;
        case "LJ":
          this.setLineJoin(t, h);
          break;
        case "ML":
          this.setMiterLimit(t, h);
          break;
        case "D":
          this.setDash(t, h[0], h[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, h);
          break;
        case "FL":
          this.setFlatness(t, h);
          break;
        case "Font":
          this.setFont(t, h[0], h[1]);
          break;
        case "CA":
          (s = this.dependencyTracker) == null || s.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = h;
          break;
        case "ca":
          (i = this.dependencyTracker) == null || i.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = h;
          break;
        case "BM":
          (r = this.dependencyTracker) == null || r.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = h;
          break;
        case "SMask":
          (a = this.dependencyTracker) == null || a.recordSimpleData("SMask", t), this.current.activeSMask = h ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          (o = this.dependencyTracker) == null || o.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(h);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, s = this.ctx.canvas.height, i = "smaskGroupAt" + this.groupLevel, r = this.cachedCanvases.getCanvas(i, e, s);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), Bo(this.suspendedCtx, a), Nm(a, this.suspendedCtx), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Bo(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const r = i[0], a = i[1], o = i[2] - r, l = i[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, r, a, o, l, h, c, u) {
    let p = t.canvas, m = l - c, A = h - u;
    if (a)
      if (m < 0 || A < 0 || m + s > p.width || A + i > p.height) {
        const v = this.cachedCanvases.getCanvas("maskExtension", s, i), w = v.context;
        w.drawImage(p, -m, -A), w.globalCompositeOperation = "destination-atop", w.fillStyle = a, w.fillRect(0, 0, s, i), w.globalCompositeOperation = "source-over", p = v.canvas, m = A = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const v = new Path2D();
        v.rect(m, A, s, i), t.clip(v), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(m, A, s, i), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const y = new Path2D();
    y.rect(l, h, s, i), e.clip(y), e.globalCompositeOperation = "destination-in", e.drawImage(p, m, A, s, i, l, h, s, i), e.restore();
  }
  save(t) {
    var s;
    this.inSMaskMode && Bo(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (s = this.dependencyTracker) == null || s.save(t);
  }
  restore(t) {
    var e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Bo(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, s, i, r, a, o) {
    var l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData("transform", t), this.ctx.transform(e, s, i, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s, i) {
    let [r] = s;
    if (!i) {
      r || (r = s[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === ll.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, i[0] - a, i[2] + a, i[1] - a, i[3] + a).recordDependencies(t, ["transform"]);
    }
    if (!(r instanceof Path2D)) {
      const a = s[0] = new Path2D();
      for (let o = 0, l = r.length; o < l; )
        switch (r[o++]) {
          case qh.moveTo:
            a.moveTo(r[o++], r[o++]);
            break;
          case qh.lineTo:
            a.lineTo(r[o++], r[o++]);
            break;
          case qh.curveTo:
            a.bezierCurveTo(r[o++], r[o++], r[o++], r[o++], r[o++], r[o++]);
            break;
          case qh.closePath:
            a.closePath();
            break;
          default:
            j(`Unrecognized drawing path operator: ${r[o - 1]}`);
            break;
        }
      r = a;
    }
    O.axialAlignedBoundingBox(i, vt(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, s = !0) {
    var a;
    const i = this.ctx, r = this.current.strokeColor;
    if (i.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof r == "object" && (r != null && r.getPattern)) {
        const o = r.isModifyingCurrentTransform() ? i.getTransform() : null;
        if (i.save(), i.strokeStyle = r.getPattern(i, this, Ss(i), te.STROKE), o) {
          const l = new Path2D();
          l.addPath(e, i.getTransform().invertSelf().multiplySelf(o)), e = l;
        }
        this.rescaleAndStroke(e, !1), i.restore();
      } else
        this.rescaleAndStroke(e, !0);
    (a = this.dependencyTracker) == null || a.recordDependencies(t, qe.stroke), s && this.consumePath(t, e, this.current.getClippedPathBoundingBox(te.STROKE, vt(this.ctx))), i.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, s = !0) {
    var h, c, u;
    const i = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
    let o = !1;
    if (a) {
      const p = r.isModifyingCurrentTransform() ? i.getTransform() : null;
      if ((h = this.dependencyTracker) == null || h.save(t), i.save(), i.fillStyle = r.getPattern(i, this, Ss(i), te.FILL), p) {
        const m = new Path2D();
        m.addPath(e, i.getTransform().invertSelf().multiplySelf(p)), e = m;
      }
      o = !0;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (i.fill(e, "evenodd"), this.pendingEOFill = !1) : i.fill(e)), (c = this.dependencyTracker) == null || c.recordDependencies(t, qe.fill), o && (i.restore(), (u = this.dependencyTracker) == null || u.restore(t)), s && this.consumePath(t, e, l);
  }
  eoFill(t, e) {
    this.pendingEOFill = !0, this.fill(t, e);
  }
  fillStroke(t, e) {
    this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    var s;
    this.ctx.fill(e), (s = this.dependencyTracker) == null || s.recordDependencies(t, qe.rawFillPath).recordOperation(t);
  }
  clip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = $m;
  }
  eoClip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = xf;
  }
  beginText(t) {
    var e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const e = this.pendingTextPaths, s = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: i
      } = this;
      e !== void 0 && i.recordFutureForcedDependency("textClip", i.getOpenMarker()).recordFutureForcedDependency("textClip", t), i.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const i = new Path2D(), r = s.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: l,
        fontSize: h,
        path: c
      } of e)
        c && i.addPath(c, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(h, -h));
      s.clip(i);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("leading", t), this.current.leading = -e;
  }
  setFont(t, e, s) {
    var u, p;
    (u = this.dependencyTracker) == null || u.recordSimpleData("font", t).recordNamedDependency(t, e);
    const i = this.commonObjs.get(e), r = this.current;
    if (!i)
      throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = i.fontMatrix || xd, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && j("Invalid font matrix for font " + e), s < 0 ? (s = -s, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = i, this.current.fontSize = s, i.isType3Font)
      return;
    const a = i.loadedName || "sans-serif", o = ((p = i.systemFontInfo) == null ? void 0 : p.css) || `"${a}", ${i.fallbackName}`;
    let l = "normal";
    i.black ? l = "900" : i.bold && (l = "bold");
    const h = i.italic ? "italic" : "normal";
    let c = s;
    s < wf ? c = wf : s > vf && (c = vf), this.current.fontSizeScale = s / c, this.ctx.font = `${h} ${l} ${c}px ${o}`;
  }
  setTextRenderingMode(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRise", t), this.current.textRise = e;
  }
  moveText(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += s;
  }
  setLeadingMoveText(t, e, s) {
    this.setLeading(t, -s), this.moveText(t, e, s);
  }
  setTextMatrix(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("textMatrix", t);
    const {
      current: s
    } = this;
    s.textMatrix = e, s.textMatrixScale = Math.hypot(e[0], e[1]), s.x = s.lineX = 0, s.y = s.lineY = 0;
  }
  nextLine(t) {
    var e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  paintChar(t, e, s, i, r, a) {
    var w, S, _, E;
    const o = this.ctx, l = this.current, h = l.font, c = l.textRenderingMode, u = l.fontSize / l.fontSizeScale, p = c & Xt.FILL_STROKE_MASK, m = !!(c & Xt.ADD_TO_PATH_FLAG), A = l.patternFill && !h.missingFile, y = l.patternStroke && !h.missingFile;
    let v;
    if ((h.disableFontFace || m || A || y) && !h.missingFile && (v = h.getPathGenerator(this.commonObjs, e)), v && (h.disableFontFace || A || y)) {
      o.save(), o.translate(s, i), o.scale(u, -u), (w = this.dependencyTracker) == null || w.recordCharacterBBox(t, o, h);
      let C;
      if (p === Xt.FILL || p === Xt.FILL_STROKE)
        if (r) {
          C = o.getTransform(), o.setTransform(...r);
          const T = b(this, vs, su).call(this, v, C, r);
          o.fill(T);
        } else
          o.fill(v);
      if (p === Xt.STROKE || p === Xt.FILL_STROKE)
        if (a) {
          C || (C = o.getTransform()), o.setTransform(...a);
          const {
            a: T,
            b: x,
            c: P,
            d: M
          } = C, L = O.inverseTransform(a), R = O.transform([T, x, P, M, 0, 0], L);
          O.singularValueDecompose2dScale(R, Ue), o.lineWidth *= Math.max(Ue[0], Ue[1]) / u, o.stroke(b(this, vs, su).call(this, v, C, a));
        } else
          o.lineWidth /= u, o.stroke(v);
      o.restore();
    } else
      (p === Xt.FILL || p === Xt.FILL_STROKE) && (o.fillText(e, s, i), (S = this.dependencyTracker) == null || S.recordCharacterBBox(t, o, h, u, s, i, () => o.measureText(e))), (p === Xt.STROKE || p === Xt.FILL_STROKE) && (this.dependencyTracker && ((_ = this.dependencyTracker) == null || _.recordCharacterBBox(t, o, h, u, s, i, () => o.measureText(e)).recordDependencies(t, qe.stroke)), o.strokeText(e, s, i));
    m && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: vt(o),
      x: s,
      y: i,
      fontSize: u,
      path: v
    }), (E = this.dependencyTracker) == null || E.recordCharacterBBox(t, o, h, u, s, i));
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        s = !0;
        break;
      }
    return Y(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t, e) {
    var P, M, L, R;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, qe.showText).copyDependenciesFromIncrementalOperation(t, "sameLineText").resetBBox(t), this.current.textRenderingMode & Xt.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const s = this.current, i = s.font;
    if (i.isType3Font) {
      this.showType3Text(t, e), (P = this.dependencyTracker) == null || P.recordOperation(t).recordIncrementalData("sameLineText", t);
      return;
    }
    const r = s.fontSize;
    if (r === 0) {
      (M = this.dependencyTracker) == null || M.recordOperation(t);
      return;
    }
    const a = this.ctx, o = s.fontSizeScale, l = s.charSpacing, h = s.wordSpacing, c = s.fontDirection, u = s.textHScale * c, p = e.length, m = i.vertical, A = m ? 1 : -1, y = i.defaultVMetrics, v = r * s.fontMatrix[0], w = s.textRenderingMode === Xt.FILL && !i.disableFontFace && !s.patternFill;
    a.save(), s.textMatrix && a.transform(...s.textMatrix), a.translate(s.x, s.y + s.textRise), c > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let S, _;
    if (s.patternFill) {
      a.save();
      const G = s.fillColor.getPattern(a, this, Ss(a), te.FILL);
      S = vt(a), a.restore(), a.fillStyle = G;
    }
    if (s.patternStroke) {
      a.save();
      const G = s.strokeColor.getPattern(a, this, Ss(a), te.STROKE);
      _ = vt(a), a.restore(), a.strokeStyle = G;
    }
    let E = s.lineWidth;
    const C = s.textMatrixScale;
    if (C === 0 || E === 0) {
      const G = s.textRenderingMode & Xt.FILL_STROKE_MASK;
      (G === Xt.STROKE || G === Xt.FILL_STROKE) && (E = this.getSinglePixelWidth());
    } else
      E /= C;
    if (o !== 1 && (a.scale(o, o), E /= o), a.lineWidth = E, i.isInvalidPDFjsFont) {
      const G = [];
      let X = 0;
      for (const et of e)
        G.push(et.unicode), X += et.width;
      const K = G.join("");
      if (a.fillText(K, 0, 0), this.dependencyTracker !== null) {
        const et = a.measureText(K);
        this.dependencyTracker.recordBBox(t, this.ctx, -et.actualBoundingBoxLeft, et.actualBoundingBoxRight, -et.actualBoundingBoxAscent, et.actualBoundingBoxDescent).recordOperation(t).recordIncrementalData("sameLineText", t);
      }
      s.x += X * v * u, a.restore(), this.compose();
      return;
    }
    let T = 0, x;
    for (x = 0; x < p; ++x) {
      const G = e[x];
      if (typeof G == "number") {
        T += A * G * r / 1e3;
        continue;
      }
      let X = !1;
      const K = (G.isSpace ? h : 0) + l, et = G.fontChar, $ = G.accent;
      let B, $t, xt = G.width;
      if (m) {
        const ut = G.vmetric || y, ot = -(G.vmetric ? ut[1] : xt * 0.5) * v, Ys = ut[2] * v;
        xt = ut ? -ut[0] : xt, B = ot / o, $t = (T + Ys) / o;
      } else
        B = T / o, $t = 0;
      let We;
      if (i.remeasure && xt > 0) {
        We = a.measureText(et);
        const ut = We.width * 1e3 / r * o;
        if (xt < ut && this.isFontSubpixelAAEnabled) {
          const ot = xt / ut;
          X = !0, a.save(), a.scale(ot, 1), B /= ot;
        } else xt !== ut && (B += (xt - ut) / 2e3 * r / o);
      }
      if (this.contentVisible && (G.isInFont || i.missingFile)) {
        if (w && !$)
          a.fillText(et, B, $t), (L = this.dependencyTracker) == null || L.recordCharacterBBox(t, a, We ? {
            bbox: null
          } : i, r / o, B, $t, () => We ?? a.measureText(et));
        else if (this.paintChar(t, et, B, $t, S, _), $) {
          const ut = B + r * $.offset.x / o, ot = $t - r * $.offset.y / o;
          this.paintChar(t, $.fontChar, ut, ot, S, _);
        }
      }
      const _s = m ? xt * v - K * c : xt * v + K * c;
      T += _s, X && a.restore();
    }
    m ? s.y -= T : s.x += T * u, a.restore(), this.compose(), (R = this.dependencyTracker) == null || R.recordOperation(t).recordIncrementalData("sameLineText", t);
  }
  showType3Text(t, e) {
    const s = this.ctx, i = this.current, r = i.font, a = i.fontSize, o = i.fontDirection, l = r.vertical ? 1 : -1, h = i.charSpacing, c = i.wordSpacing, u = i.textHScale * o, p = i.fontMatrix || xd, m = e.length, A = i.textRenderingMode === Xt.INVISIBLE;
    let y, v, w, S;
    if (A || a === 0)
      return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, s.save(), i.textMatrix && s.transform(...i.textMatrix), s.translate(i.x, i.y + i.textRise), s.scale(u, o);
    const _ = this.dependencyTracker;
    for (this.dependencyTracker = _ ? new Nc(_, t) : null, y = 0; y < m; ++y) {
      if (v = e[y], typeof v == "number") {
        S = l * v * a / 1e3, this.ctx.translate(S, 0), i.x += S * u;
        continue;
      }
      const E = (v.isSpace ? c : 0) + h, C = r.charProcOperatorList[v.operatorListId];
      C ? this.contentVisible && (this.save(), s.scale(a, a), s.transform(...p), this.executeOperatorList(C), this.restore()) : j(`Type3 character "${v.operatorListId}" is not available.`);
      const T = [v.width, 0];
      O.applyTransform(T, p), w = T[0] * a + E, s.translate(w, 0), i.x += w * u;
    }
    s.restore(), _ && (this.dependencyTracker.recordNestedDependencies(), this.dependencyTracker = _);
  }
  setCharWidth(t, e, s) {
  }
  setCharWidthAndBounds(t, e, s, i, r, a, o) {
    var h;
    const l = new Path2D();
    l.rect(i, r, a - i, o - r), this.ctx.clip(l), (h = this.dependencyTracker) == null || h.recordBBox(t, this.ctx, i, a, r, o).recordClipBox(t, this.ctx, i, a, r, o), this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let s;
    if (e[0] === "TilingPattern") {
      const i = this.baseTransform || vt(this.ctx), r = {
        createCanvasGraphics: (a) => new af(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new Nc(this.dependencyTracker, t) : null)
      };
      s = new Zd(e, this.ctx, r, i);
    } else
      s = this._getPattern(t, e[1], e[2]);
    return s;
  }
  setStrokeColorN(t, ...e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }
  setFillColorN(t, ...e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("fillColor", t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
  }
  setStrokeTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
  }
  setFillTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e, s = null) {
    let i;
    return this.cachedPatterns.has(e) ? i = this.cachedPatterns.get(e) : (i = Lm(this.getObject(t, e)), this.cachedPatterns.set(e, i)), s && (i.matrix = s), i;
  }
  shadingFill(t, e) {
    var a;
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    this.save(t);
    const i = this._getPattern(t, e);
    s.fillStyle = i.getPattern(s, this, Ss(s), te.SHADING);
    const r = Ss(s);
    if (r) {
      const {
        width: o,
        height: l
      } = s.canvas, h = Aa.slice();
      O.axialAlignedBoundingBox([0, 0, o, l], r, h);
      const [c, u, p, m] = h;
      this.ctx.fillRect(c, u, p - c, m - u);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, qe.transform).recordDependencies(t, qe.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }
  beginInlineImage() {
    dt("Should not call beginInlineImage");
  }
  beginImageData() {
    dt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, s) {
    var i;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = vt(this.ctx), s)) {
      O.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = s, h = new Path2D();
      h.rect(r, a, o - r, l - a), this.ctx.clip(h), (i = this.dependencyTracker) == null || i.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, e) {
    var _;
    if (!this.contentVisible)
      return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const s = this.ctx;
    e.isolated || cd("TODO: Support non-isolated groups."), e.knockout && j("Knockout groups not supported.");
    const i = vt(s);
    if (e.matrix && s.transform(...e.matrix), !e.bbox)
      throw new Error("Bounding box is required.");
    let r = Aa.slice();
    O.axialAlignedBoundingBox(e.bbox, vt(s), r);
    const a = [0, 0, s.canvas.width, s.canvas.height];
    r = O.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]), l = Math.floor(r[1]), h = Math.max(Math.ceil(r[2]) - o, 1), c = Math.max(Math.ceil(r[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, h, c]);
    let u = "groupAt" + this.groupLevel;
    e.smask && (u += "_smask_" + this.smaskCounter++ % 2);
    const p = this.cachedCanvases.getCanvas(u, h, c), m = p.context;
    m.translate(-o, -l), m.transform(...i);
    let A = new Path2D();
    const [y, v, w, S] = e.bbox;
    if (A.rect(y, v, w - y, S - v), e.matrix) {
      const E = new Path2D();
      E.addPath(A, new DOMMatrix(e.matrix)), A = E;
    }
    m.clip(A), e.smask && this.smaskStack.push({
      canvas: p.canvas,
      context: m,
      offsetX: o,
      offsetY: l,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null
    }), (!e.smask || this.dependencyTracker) && (s.setTransform(1, 0, 0, 1, 0, 0), s.translate(o, l), s.save()), Bo(s, m), this.ctx = m, (_ = this.dependencyTracker) == null || _.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(s), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(s), this.groupLevel++;
  }
  endGroup(t, e) {
    var r;
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const s = this.ctx, i = this.groupStack.pop();
    if (this.ctx = i, this.ctx.imageSmoothingEnabled = !1, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = vt(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = Aa.slice();
      O.axialAlignedBoundingBox([0, 0, s.canvas.width, s.canvas.height], a, o), this.ctx.drawImage(s.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }
  beginAnnotation(t, e, s, i, r, a) {
    if (b(this, vs, tu).call(this), Zh(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), s) {
      const o = s[2] - s[0], l = s[3] - s[1];
      if (a && this.annotationCanvasMap) {
        i = i.slice(), i[4] -= s[0], i[5] -= s[1], s = s.slice(), s[0] = s[1] = 0, s[2] = o, s[3] = l, O.singularValueDecompose2dScale(vt(this.ctx), Ue);
        const {
          viewportScale: h
        } = this, c = Math.ceil(o * this.outputScaleX * h), u = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(c, u);
        const {
          canvas: p,
          context: m
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = m, this.ctx.save(), this.ctx.setTransform(Ue[0], 0, 0, -Ue[1], 0, l * Ue[1]), Zh(this.ctx);
      } else {
        Zh(this.ctx), this.endPath(t);
        const h = new Path2D();
        h.rect(s[0], s[1], o, l), this.ctx.clip(h);
      }
    }
    this.current = new Sf(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...i), this.transform(t, ...r);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), b(this, vs, eu).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t, e) {
    var o;
    if (!this.contentVisible)
      return;
    const s = e.count;
    e = this.getObject(t, e.data, e), e.count = s;
    const i = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
    i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), i.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s, i = 0, r = 0, a, o) {
    var u, p, m;
    if (!this.contentVisible)
      return;
    e = this.getObject(t, e.data, e);
    const l = this.ctx;
    l.save();
    const h = vt(l);
    l.transform(s, i, r, a, 0, 0);
    const c = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, c.offsetX - h[4], c.offsetY - h[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let A = 0, y = o.length; A < y; A += 2) {
      const v = O.transform(h, [s, i, r, a, o[A], o[A + 1]]);
      l.drawImage(c.canvas, v[4], v[5]), (p = this.dependencyTracker) == null || p.recordBBox(t, this.ctx, v[4], v[4] + c.canvas.width, v[5], v[5] + c.canvas.height);
    }
    l.restore(), this.compose(), (m = this.dependencyTracker) == null || m.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const s = this.ctx, i = this.current.fillColor, r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, qe.transformAndFill);
    for (const h of e) {
      const {
        data: c,
        width: u,
        height: p,
        transform: m
      } = h, A = this.cachedCanvases.getCanvas("maskCanvas", u, p), y = A.context;
      y.save();
      const v = this.getObject(t, c, h);
      Cf(y, v), y.globalCompositeOperation = "source-in", y.fillStyle = r ? i.getPattern(y, this, Ss(s), te.FILL) : i, y.fillRect(0, 0, u, p), y.restore(), s.save(), s.transform(...m), s.scale(1, -1), Jh(s, A.canvas, 0, 0, u, p, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, u, 0, p), s.restore();
    }
    this.compose(), (l = this.dependencyTracker) == null || l.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t, e);
    if (!s) {
      j("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, e, s, i, r) {
    if (!this.contentVisible)
      return;
    const a = this.getObject(t, e);
    if (!a) {
      j("Dependent image isn't ready yet");
      return;
    }
    const o = a.width, l = a.height, h = [];
    for (let c = 0, u = r.length; c < u; c += 2)
      h.push({
        transform: [s, 0, 0, i, r[c], r[c + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l
      });
    this.paintInlineImageXObjectGroup(t, a, h);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: s,
      height: i
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", s, i), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t, e) {
    var h;
    if (!this.contentVisible)
      return;
    const s = e.width, i = e.height, r = this.ctx;
    this.save(t);
    const {
      filter: a
    } = r;
    a !== "none" && a !== "" && (r.filter = "none"), r.scale(1 / s, -1 / i);
    let o;
    if (e.bitmap)
      o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
      o = e;
    else {
      const u = this.cachedCanvases.getCanvas("inlineImage", s, i).context;
      Ef(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, Ss(r));
    r.imageSmoothingEnabled = Tf(vt(r), e.interpolate), (h = this.dependencyTracker) == null || h.resetBBox(t).recordBBox(t, r, 0, s, -i, 0).recordDependencies(t, qe.imageXObject).recordOperation(t), Jh(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -i, s, i), this.compose(), this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, s) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const i = this.ctx;
    let r;
    if (e.bitmap)
      r = e.bitmap;
    else {
      const h = e.width, c = e.height, p = this.cachedCanvases.getCanvas("inlineImage", h, c).context;
      Ef(p, e), r = this.applyTransferMapsToCanvas(p);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const h of s)
      i.save(), i.transform(...h.transform), i.scale(1, -1), Jh(i, r, h.x, h.y, h.w, h.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, 1, -1, 0), i.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }
  paintSolidColorImageMask(t) {
    var e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, qe.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t, e) {
  }
  markPointProps(t, e, s) {
  }
  beginMarkedContent(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(s)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, e, s) {
    var a, o;
    const i = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(s);
    const r = this.ctx;
    this.pendingClip ? (i || (this.pendingClip === xf ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = vt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: i,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(r);
        if (l === h)
          if (t === 0)
            a = o = 1 / l;
          else {
            const c = l * t;
            a = o = c < 1 ? 1 / c : 1;
          }
        else if (t === 0)
          a = 1 / l, o = 1 / h;
        else {
          const c = l * t, u = h * t;
          a = c < 1 ? 1 / c : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * r - s * i), h = Math.hypot(e, s), c = Math.hypot(i, r);
        if (t === 0)
          a = c / l, o = h / l;
        else {
          const u = t * l;
          a = c > u ? c / u : 1, o = h > u ? h / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const {
      ctx: s,
      current: {
        lineWidth: i
      }
    } = this, [r, a] = this.getScaleForStroking();
    if (r === a) {
      s.lineWidth = (i || 1) * r, s.stroke(t);
      return;
    }
    const o = s.getLineDash();
    e && s.save(), s.scale(r, a), Ed.a = 1 / r, Ed.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, Ed), o.length > 0) {
      const h = Math.max(r, a);
      s.setLineDash(o.map((c) => c / h)), s.lineDashOffset /= h;
    }
    s.lineWidth = i || 1, s.stroke(l), e && s.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
vs = new WeakSet(), tu = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, eu = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, su = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let va = af;
for (const d in ll)
  va.prototype[d] !== void 0 && (va.prototype[ll[d]] = va.prototype[d]);
var $l, zl;
class Hi {
  static get workerPort() {
    return n(this, $l);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    f(this, $l, t);
  }
  static get workerSrc() {
    return n(this, zl);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    f(this, zl, t);
  }
}
$l = new WeakMap(), zl = new WeakMap(), g(Hi, $l, null), g(Hi, zl, "");
var Qa, Gl;
class zm {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    g(this, Qa);
    g(this, Gl);
    f(this, Qa, t), f(this, Gl, e);
  }
  getRaw() {
    return n(this, Gl);
  }
  get(t) {
    return n(this, Qa).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, Qa).entries();
  }
}
Qa = new WeakMap(), Gl = new WeakMap();
const ga = Symbol("INTERNAL");
var Ul, jl, Vl, Ja;
class Gm {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: r
  }) {
    g(this, Ul, !1);
    g(this, jl, !1);
    g(this, Vl, !1);
    g(this, Ja, !0);
    f(this, Ul, !!(t & Ge.DISPLAY)), f(this, jl, !!(t & Ge.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, Vl))
      return n(this, Ja);
    if (!n(this, Ja))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, Ul) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, jl) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== ga && dt("Internal method `_setVisible` called."), f(this, Vl, s), f(this, Ja, e);
  }
}
Ul = new WeakMap(), jl = new WeakMap(), Vl = new WeakMap(), Ja = new WeakMap();
var gn, ht, Za, to, Wl, iu;
class Um {
  constructor(t, e = Ge.DISPLAY) {
    g(this, Wl);
    g(this, gn, null);
    g(this, ht, /* @__PURE__ */ new Map());
    g(this, Za, null);
    g(this, to, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, f(this, to, t.order);
      for (const s of t.groups)
        n(this, ht).set(s.id, new Gm(e, s));
      if (t.baseState === "OFF")
        for (const s of n(this, ht).values())
          s._setVisible(ga, !1);
      for (const s of t.on)
        n(this, ht).get(s)._setVisible(ga, !0);
      for (const s of t.off)
        n(this, ht).get(s)._setVisible(ga, !1);
      f(this, Za, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, ht).size === 0)
      return !0;
    if (!t)
      return cd("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, ht).has(t.id) ? n(this, ht).get(t.id).visible : (j(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, Wl, iu).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, ht).has(e))
            return j(`Optional content group not found: ${e}`), !0;
          if (n(this, ht).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, ht).has(e))
            return j(`Optional content group not found: ${e}`), !0;
          if (!n(this, ht).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, ht).has(e))
            return j(`Optional content group not found: ${e}`), !0;
          if (!n(this, ht).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, ht).has(e))
            return j(`Optional content group not found: ${e}`), !0;
          if (n(this, ht).get(e).visible)
            return !1;
        }
        return !0;
      }
      return j(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return j(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var r;
    const i = n(this, ht).get(t);
    if (!i) {
      j(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, ht).get(o)) == null || r._setVisible(ga, !1, !0));
    i._setVisible(ga, !!e, !0), f(this, gn, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const r = n(this, ht).get(i);
      if (r)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !r.visible, e);
            break;
        }
    }
    f(this, gn, null);
  }
  get hasInitialVisibility() {
    return n(this, Za) === null || this.getHash() === n(this, Za);
  }
  getOrder() {
    return n(this, ht).size ? n(this, to) ? n(this, to).slice() : [...n(this, ht).keys()] : null;
  }
  getGroup(t) {
    return n(this, ht).get(t) || null;
  }
  getHash() {
    if (n(this, gn) !== null)
      return n(this, gn);
    const t = new pp();
    for (const [e, s] of n(this, ht))
      t.update(`${e}:${s.visible}`);
    return f(this, gn, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, ht).entries();
  }
}
gn = new WeakMap(), ht = new WeakMap(), Za = new WeakMap(), to = new WeakMap(), Wl = new WeakSet(), iu = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = b(this, Wl, iu).call(this, r);
    else if (n(this, ht).has(r))
      a = n(this, ht).get(r).visible;
    else
      return j(`Optional content group not found: ${r}`), !0;
    switch (s) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return s === "And";
};
class jm {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    Rt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h
      });
    }), t.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(r) {
        return r._begin !== t ? !1 : (r._enqueue(s), !0);
      });
      Rt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, r;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
      loaded: t.loaded
    }) : (r = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || r.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    Rt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new Vm(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Wm(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeReaders.slice(0))
      s.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class Vm {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = qu(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks)
      this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Wm {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Xm(d) {
  let t = !0, e = s("filename\\*", "i").exec(d);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = l(c), c = h(c), r(c);
  }
  if (e = a(d), e) {
    const c = h(e);
    return r(c);
  }
  if (e = s("filename", "i").exec(d), e) {
    e = e[1];
    let c = o(e);
    return c = h(c), r(c);
  }
  function s(c, u) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(c, u) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const p = new TextDecoder(c, {
          fatal: !0
        }), m = Gh(u);
        u = p.decode(m), t = !1;
      } catch {
      }
    }
    return u;
  }
  function r(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const u = [];
    let p;
    const m = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = m.exec(c)) !== null; ) {
      let [, y, v, w] = p;
      if (y = parseInt(y, 10), y in u) {
        if (y === 0)
          break;
        continue;
      }
      u[y] = [v, w];
    }
    const A = [];
    for (let y = 0; y < u.length && y in u; ++y) {
      let [v, w] = u[y];
      w = o(w), v && (w = unescape(w), y === 0 && (w = l(w))), A.push(w);
    }
    return A.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const u = c.slice(1).split('\\"');
      for (let p = 0; p < u.length; ++p) {
        const m = u[p].indexOf('"');
        m !== -1 && (u[p] = u[p].slice(0, m), u.length = p + 1), u[p] = u[p].replaceAll(/\\(.)/g, "$1");
      }
      c = u.join('"');
    }
    return c;
  }
  function l(c) {
    const u = c.indexOf("'");
    if (u === -1)
      return c;
    const p = c.slice(0, u), A = c.slice(u + 1).replace(/^[^']*'/, "");
    return i(p, A);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, p, m, A) {
      if (m === "q" || m === "Q")
        return A = A.replaceAll("_", " "), A = A.replaceAll(/=([0-9a-fA-F]{2})/g, function(y, v) {
          return String.fromCharCode(parseInt(v, 16));
        }), i(p, A);
      try {
        A = atob(A);
      } catch {
      }
      return i(p, A);
    });
  }
  return "";
}
function Tp(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function fd(d) {
  var t;
  return ((t = URL.parse(d)) == null ? void 0 : t.origin) ?? null;
}
function xp({
  responseHeaders: d,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(d.get("Content-Length"), 10);
  return !Number.isInteger(r) || (i.suggestedLength = r, r <= 2 * e) || s || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function kp(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = Xm(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (qu(e))
      return e;
  }
  return null;
}
function Wh(d, t) {
  return new Dc(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d, d === 404 || d === 0 && t.startsWith("file:"));
}
function Pp(d) {
  return d === 200 || d === 206;
}
function Mp(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function Rp(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (j(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class qm {
  constructor(t) {
    k(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Tp(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Rt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Ym(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Km(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Ym {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Mp(s, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = fd(r.url), !Pp(r.status))
        throw Wh(r.status, i);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = xp({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = kp(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new $n("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: Rp(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class Km {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, Mp(r, this._withCredentials, this._abortController)).then((o) => {
      const l = fd(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!Pp(o.status))
        throw Wh(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: Rp(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Cd = 200, Td = 206;
function Qm(d) {
  const t = d.response;
  return typeof t != "string" ? t : Gh(t).buffer;
}
class Jm {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    k(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Tp(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Td) : i.expectedStatus = Cd, e.responseType = "arraybuffer", Rt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      s.onError(i.status);
      return;
    }
    const r = i.status || Cd;
    if (!(r === Cd && s.expectedStatus === Td) && r !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = Qm(i);
    if (r === Td) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : (j('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : s.onError(i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class Zm {
  constructor(t) {
    this._source = t, this._manager = new Jm(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Rt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new tb(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new eb(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class tb {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = fd(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = xp({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = kp(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = Wh(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class eb {
  constructor(t, e, s) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: s,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = fd((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ?? (this._storedError = Wh(t, this._url));
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const sb = /^[a-z][a-z0-9\-+.]+:/i;
function ib(d) {
  if (sb.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class nb {
  constructor(t) {
    this.source = t, this.url = ib(t.url), Rt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Rt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new rb(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new ab(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class rb {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = Wh(0, this._url.href)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new $n("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class ab {
  constructor(t, e, s) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const i = t.source;
    this._isStreamingSupported = !i.disableStream;
    const r = process.getBuiltinModule("fs");
    this._setReadableStream(r.createReadStream(this._url, {
      start: e,
      end: s - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const Ho = Symbol("INITIAL_DATA");
var Me, Xl, nu;
class Dp {
  constructor() {
    g(this, Xl);
    g(this, Me, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = b(this, Xl, nu).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, Me)[t];
    if (!s || s.data === Ho)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, Me)[t];
    return !!e && e.data !== Ho;
  }
  delete(t) {
    const e = n(this, Me)[t];
    return !e || e.data === Ho ? !1 : (delete n(this, Me)[t], !0);
  }
  resolve(t, e = null) {
    const s = b(this, Xl, nu).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, Me)) {
      const {
        data: s
      } = n(this, Me)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    f(this, Me, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, Me)) {
      const {
        data: e
      } = n(this, Me)[t];
      e !== Ho && (yield [t, e]);
    }
  }
}
Me = new WeakMap(), Xl = new WeakSet(), nu = function(t) {
  var e;
  return (e = n(this, Me))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Ho
  });
};
const ob = 1e5, kf = 30;
var Df, mn, ve, ql, Yl, Ar, yi, Kl, Ql, yr, eo, so, bn, io, Jl, no, wr, Zl, th, ro, vr, eh, An, ao, ji, Lp, Ip, ru, Ve, dc, au, Fp, Np;
const It = class It {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    g(this, ji);
    g(this, mn, Promise.withResolvers());
    g(this, ve, null);
    g(this, ql, !1);
    g(this, Yl, !!((Df = globalThis.FontInspector) != null && Df.enabled));
    g(this, Ar, null);
    g(this, yi, null);
    g(this, Kl, 0);
    g(this, Ql, 0);
    g(this, yr, null);
    g(this, eo, null);
    g(this, so, 0);
    g(this, bn, 0);
    g(this, io, /* @__PURE__ */ Object.create(null));
    g(this, Jl, []);
    g(this, no, null);
    g(this, wr, []);
    g(this, Zl, /* @__PURE__ */ new WeakMap());
    g(this, th, null);
    var l;
    if (t instanceof ReadableStream)
      f(this, no, t);
    else if (typeof t == "object")
      f(this, no, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    f(this, ve, f(this, eo, e)), f(this, bn, s.scale * Xs.pixelRatio), f(this, so, s.rotation), f(this, yi, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: r,
      pageX: a,
      pageY: o
    } = s.rawDims;
    f(this, th, [1, 0, 0, -1, -a, o + r]), f(this, Ql, i), f(this, Kl, r), b(l = It, Ve, Fp).call(l), ia(e, s), n(this, mn).promise.finally(() => {
      n(It, ao).delete(this), f(this, yi, null), f(this, io, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = ie.platform;
    return Y(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, yr).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          n(this, mn).resolve();
          return;
        }
        n(this, Ar) ?? f(this, Ar, e.lang), Object.assign(n(this, io), e.styles), b(this, ji, Lp).call(this, e.items), t();
      }, n(this, mn).reject);
    };
    return f(this, yr, n(this, no).getReader()), n(It, ao).add(this), t(), n(this, mn).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * Xs.pixelRatio, i = t.rotation;
    if (i !== n(this, so) && (e == null || e(), f(this, so, i), ia(n(this, eo), {
      rotation: i
    })), s !== n(this, bn)) {
      e == null || e(), f(this, bn, s);
      const a = {
        div: null,
        properties: null,
        ctx: b(r = It, Ve, dc).call(r, n(this, Ar))
      };
      for (const o of n(this, wr))
        a.properties = n(this, Zl).get(o), a.div = o, b(this, ji, ru).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new $n("TextLayer task cancelled.");
    (e = n(this, yr)) == null || e.cancel(t).catch(() => {
    }), f(this, yr, null), n(this, mn).reject(t);
  }
  get textDivs() {
    return n(this, wr);
  }
  get textContentItemsStr() {
    return n(this, Jl);
  }
  static cleanup() {
    if (!(n(this, ao).size > 0)) {
      n(this, ro).clear();
      for (const {
        canvas: t
      } of n(this, vr).values())
        t.remove();
      n(this, vr).clear();
    }
  }
};
mn = new WeakMap(), ve = new WeakMap(), ql = new WeakMap(), Yl = new WeakMap(), Ar = new WeakMap(), yi = new WeakMap(), Kl = new WeakMap(), Ql = new WeakMap(), yr = new WeakMap(), eo = new WeakMap(), so = new WeakMap(), bn = new WeakMap(), io = new WeakMap(), Jl = new WeakMap(), no = new WeakMap(), wr = new WeakMap(), Zl = new WeakMap(), th = new WeakMap(), ro = new WeakMap(), vr = new WeakMap(), eh = new WeakMap(), An = new WeakMap(), ao = new WeakMap(), ji = new WeakSet(), Lp = function(t) {
  var i, r;
  if (n(this, ql))
    return;
  (r = n(this, yi)).ctx ?? (r.ctx = b(i = It, Ve, dc).call(i, n(this, Ar)));
  const e = n(this, wr), s = n(this, Jl);
  for (const a of t) {
    if (e.length > ob) {
      j("Ignoring additional textDivs for performance reasons."), f(this, ql, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, ve);
        f(this, ve, document.createElement("span")), n(this, ve).classList.add("markedContent"), a.id && n(this, ve).setAttribute("id", `${a.id}`), o.append(n(this, ve));
      } else a.type === "endMarkedContent" && f(this, ve, n(this, ve).parentNode);
      continue;
    }
    s.push(a.str), b(this, ji, Ip).call(this, a);
  }
}, Ip = function(t) {
  var y;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, wr).push(e);
  const i = O.transform(n(this, th), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, io)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Yl) && a.fontSubstitution || a.fontFamily;
  o = It.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * b(y = It, Ve, Np).call(y, o, a, n(this, Ar));
  let c, u;
  r === 0 ? (c = i[4], u = i[5] - h) : (c = i[4] + h * Math.sin(r), u = i[5] - h * Math.cos(r));
  const p = "calc(var(--total-scale-factor) *", m = e.style;
  n(this, ve) === n(this, eo) ? (m.left = `${(100 * c / n(this, Ql)).toFixed(2)}%`, m.top = `${(100 * u / n(this, Kl)).toFixed(2)}%`) : (m.left = `${p}${c.toFixed(2)}px)`, m.top = `${p}${u.toFixed(2)}px)`), m.fontSize = `${p}${(n(It, An) * l).toFixed(2)}px)`, m.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, Yl) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let A = !1;
  if (t.str.length > 1)
    A = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const v = Math.abs(t.transform[0]), w = Math.abs(t.transform[3]);
    v !== w && Math.max(v, w) / Math.min(v, w) > 1.5 && (A = !0);
  }
  if (A && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, Zl).set(e, s), n(this, yi).div = e, n(this, yi).properties = s, b(this, ji, ru).call(this, n(this, yi)), s.hasText && n(this, ve).append(e), s.hasEOL) {
    const v = document.createElement("br");
    v.setAttribute("role", "presentation"), n(this, ve).append(v);
  }
}, ru = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(It, An) > 1 && (a = `scale(${1 / n(It, An)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = r, {
      canvasWidth: h,
      fontSize: c
    } = s;
    b(o = It, Ve, au).call(o, i, c * n(this, bn), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * n(this, bn) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, Ve = new WeakSet(), dc = function(t = null) {
  let e = n(this, vr).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, vr).set(t, e), n(this, eh).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, au = function(t, e, s) {
  const i = n(this, eh).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, Fp = function() {
  if (n(this, An) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), f(this, An, t.getBoundingClientRect().height), t.remove();
}, Np = function(t, e, s) {
  const i = n(this, ro).get(t);
  if (i)
    return i;
  const r = b(this, Ve, dc).call(this, s);
  r.canvas.width = r.canvas.height = kf, b(this, Ve, au).call(this, r, kf, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let h = 0.8;
  return o ? h = o / (o + l) : (ie.platform.isFirefox && j("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, ro).set(t, h), h;
}, g(It, Ve), g(It, ro, /* @__PURE__ */ new Map()), g(It, vr, /* @__PURE__ */ new Map()), g(It, eh, /* @__PURE__ */ new WeakMap()), g(It, An, null), g(It, ao, /* @__PURE__ */ new Set());
let hl = It;
class cl {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(r) {
      var l;
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if (cl.shouldBuildText(o))
        (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const h of r.children)
          i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const lb = 100;
function hb(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new ou(), {
    docId: e
  } = t, s = d.url ? mm(d.url) : null, i = d.data ? bm(d.data) : null, r = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof Op ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : 2 ** 16;
  let c = d.worker instanceof dl ? d.worker : null;
  const u = d.verbosity, p = typeof d.docBaseUrl == "string" && !dd(d.docBaseUrl) ? d.docBaseUrl : null, m = Kh(d.cMapUrl), A = d.cMapPacked !== !1, y = d.CMapReaderFactory || (pe ? Cm : mf), v = Kh(d.iccUrl), w = Kh(d.standardFontDataUrl), S = d.StandardFontDataFactory || (pe ? Tm : bf), _ = Kh(d.wasmUrl), E = d.WasmFactory || (pe ? xm : Af), C = d.stopAtErrors !== !0, T = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, x = d.isEvalSupported !== !1, P = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !pe, M = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !pe && (ie.platform.isFirefox || !globalThis.chrome), L = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, R = typeof d.disableFontFace == "boolean" ? d.disableFontFace : pe, G = d.fontExtraProperties === !0, X = d.enableXfa === !0, K = d.ownerDocument || globalThis.document, et = d.disableRange === !0, $ = d.disableStream === !0, B = d.disableAutoFetch === !0, $t = d.pdfBug === !0, xt = d.CanvasFactory || (pe ? Em : vm), We = d.FilterFactory || (pe ? Sm : _m), _s = d.enableHWA === !0, ut = d.useWasm !== !1, ot = l ? l.length : d.length ?? NaN, Ys = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !pe && !R, os = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : !!(y === mf && S === bf && E === Af && m && w && _ && Go(m, document.baseURI) && Go(w, document.baseURI) && Go(_, document.baseURI)), ls = null;
  qg(u);
  const St = {
    canvasFactory: new xt({
      ownerDocument: K,
      enableHWA: _s
    }),
    filterFactory: new We({
      docId: e,
      ownerDocument: K
    }),
    cMapReaderFactory: os ? null : new y({
      baseUrl: m,
      isCompressed: A
    }),
    standardFontDataFactory: os ? null : new S({
      baseUrl: w
    }),
    wasmFactory: os ? null : new E({
      baseUrl: _
    })
  };
  c || (c = dl.create({
    verbosity: u,
    port: Hi.workerPort
  }), t._worker = c);
  const gd = {
    docId: e,
    apiVersion: "5.4.149",
    data: i,
    password: o,
    disableAutoFetch: B,
    rangeChunkSize: h,
    length: ot,
    docBaseUrl: p,
    enableXfa: X,
    evaluatorOptions: {
      maxImageSize: T,
      disableFontFace: R,
      ignoreErrors: C,
      isEvalSupported: x,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: M,
      canvasMaxAreaInBytes: L,
      fontExtraProperties: G,
      useSystemFonts: Ys,
      useWasm: ut,
      useWorkerFetch: os,
      cMapUrl: m,
      iccUrl: v,
      standardFontDataUrl: w,
      wasmUrl: _
    }
  }, md = {
    ownerDocument: K,
    pdfBug: $t,
    styleElement: ls,
    loadingParams: {
      disableAutoFetch: B,
      enableXfa: X
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const bd = c.messageHandler.sendWithPromise("GetDocRequest", gd, i ? [i.buffer] : null);
    let jn;
    if (l)
      jn = new jm(l, {
        disableRange: et,
        disableStream: $
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      const Vn = Go(s) ? qm : pe ? nb : Zm;
      jn = new Vn({
        url: s,
        length: ot,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: et,
        disableStream: $
      });
    }
    return bd.then((Vn) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const hf = new qo(e, Vn, c.port), Ug = new ub(hf, t, jn, md, St, _s);
      t._transport = Ug, hf.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
var Jc;
const Zc = class Zc {
  constructor() {
    k(this, "_capability", Promise.withResolvers());
    k(this, "_transport", null);
    k(this, "_worker", null);
    k(this, "docId", `d${Lt(Zc, Jc)._++}`);
    k(this, "destroyed", !1);
    k(this, "onPassword", null);
    k(this, "onProgress", null);
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s, i;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
};
Jc = new WeakMap(), g(Zc, Jc, 0);
let ou = Zc;
var _r, sh, ih, nh, rh;
class Op {
  constructor(t, e, s = !1, i = null) {
    g(this, _r, Promise.withResolvers());
    g(this, sh, []);
    g(this, ih, []);
    g(this, nh, []);
    g(this, rh, []);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i;
  }
  addRangeListener(t) {
    n(this, rh).push(t);
  }
  addProgressListener(t) {
    n(this, nh).push(t);
  }
  addProgressiveReadListener(t) {
    n(this, ih).push(t);
  }
  addProgressiveDoneListener(t) {
    n(this, sh).push(t);
  }
  onDataRange(t, e) {
    for (const s of n(this, rh))
      s(t, e);
  }
  onDataProgress(t, e) {
    n(this, _r).promise.then(() => {
      for (const s of n(this, nh))
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    n(this, _r).promise.then(() => {
      for (const e of n(this, ih))
        e(t);
    });
  }
  onDataProgressiveDone() {
    n(this, _r).promise.then(() => {
      for (const t of n(this, sh))
        t();
    });
  }
  transportReady() {
    n(this, _r).resolve();
  }
  requestDataRange(t, e) {
    dt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
_r = new WeakMap(), sh = new WeakMap(), ih = new WeakMap(), nh = new WeakMap(), rh = new WeakMap();
class cb {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return Y(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var wi, Sr, Zo;
class db {
  constructor(t, e, s, i = !1) {
    g(this, Sr);
    g(this, wi, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new ff() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Dp(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedGroups = null;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: r = !1
  } = {}) {
    return new jh({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return Y(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: s,
    intent: i = "display",
    annotationMode: r = Wi.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: h = null,
    pageColors: c = null,
    printAnnotationStorage: u = null,
    isEditing: p = !1,
    recordOperations: m = !1,
    filteredOperationIndexes: A = null
  }) {
    var P, M, L;
    (P = this._stats) == null || P.time("Overall");
    const y = this._transport.getRenderingIntent(i, r, u, p), {
      renderingIntent: v,
      cacheKey: w
    } = y;
    f(this, wi, !1), l || (l = this._transport.getOptionalContentConfig(v));
    let S = this._intentStates.get(w);
    S || (S = /* @__PURE__ */ Object.create(null), this._intentStates.set(w, S)), S.streamReaderCancelTimeout && (clearTimeout(S.streamReaderCancelTimeout), S.streamReaderCancelTimeout = null);
    const _ = !!(v & Ge.PRINT);
    S.displayReadyCapability || (S.displayReadyCapability = Promise.withResolvers(), S.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (M = this._stats) == null || M.time("Page Request"), this._pumpOperatorList(y));
    const E = !this.recordedGroups && (m || this._pdfBug && ((L = globalThis.StepperManager) == null ? void 0 : L.enabled)), C = (R) => {
      var G, X, K;
      if (S.renderTasks.delete(T), E) {
        const et = (G = T.gfx) == null ? void 0 : G.dependencyTracker.take();
        et ? ((X = T.stepper) == null || X.setOperatorGroups(et), m && (this.recordedGroups = et)) : m && (this.recordedGroups = []);
      }
      _ && f(this, wi, !0), b(this, Sr, Zo).call(this), R ? (T.capability.reject(R), this._abortOperatorList({
        intentState: S,
        reason: R instanceof Error ? R : new Error(R)
      })) : T.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (K = globalThis.Stats) != null && K.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, T = new lu({
      callback: C,
      params: {
        canvas: e,
        canvasContext: t,
        dependencyTracker: E ? new km(e) : null,
        viewport: s,
        transform: a,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: h,
      operatorList: S.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: c,
      enableHWA: this._transport.enableHWA,
      filteredOperationIndexes: A
    });
    (S.renderTasks || (S.renderTasks = /* @__PURE__ */ new Set())).add(T);
    const x = T.task;
    return Promise.all([S.displayReadyCapability.promise, l]).then(([R, G]) => {
      var X;
      if (this.destroyed) {
        C();
        return;
      }
      if ((X = this._stats) == null || X.time("Rendering"), !(G.renderingIntent & v))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      T.initializeGraphics({
        transparency: R,
        optionalContentConfig: G
      }), T.operatorListChanged();
    }).catch(C), x;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Wi.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => cl.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function r() {
        a.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
        }, i);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      r();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), f(this, wi, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    f(this, wi, !0);
    const e = b(this, Sr, Zo).call(this);
    return t && e && this._stats && (this._stats = new ff()), e;
  }
  _startRenderPage(t, e) {
    var i, r;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (r = s.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && b(this, Sr, Zo).call(this);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: r,
      transfer: a
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: i
    }, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const c = () => {
      l.read().then(({
        value: u,
        done: p
      }) => {
        if (p) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), c());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const p of h.renderTasks)
              p.operatorListChanged();
            b(this, Sr, Zo).call(this);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    c();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof Xu) {
          let i = lb;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new $n(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
wi = new WeakMap(), Sr = new WeakSet(), Zo = function() {
  if (!n(this, wi) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), f(this, wi, !1), !0;
};
var yn, fs, vi, Er, td, Cr, Tr, me, uc, Bp, Hp, tl, oo, fc;
const gt = class gt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = Yg()
  } = {}) {
    g(this, me);
    g(this, yn, Promise.withResolvers());
    g(this, fs, null);
    g(this, vi, null);
    g(this, Er, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, e) {
      if (n(gt, Tr).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      n(gt, Tr).set(e, this), b(this, me, Bp).call(this, e);
    } else
      b(this, me, Hp).call(this);
  }
  get promise() {
    return n(this, yn).promise;
  }
  get port() {
    return n(this, vi);
  }
  get messageHandler() {
    return n(this, fs);
  }
  destroy() {
    var t, e;
    this.destroyed = !0, (t = n(this, Er)) == null || t.terminate(), f(this, Er, null), n(gt, Tr).delete(n(this, vi)), f(this, vi, null), (e = n(this, fs)) == null || e.destroy(), f(this, fs, null);
  }
  static create(t) {
    const e = n(this, Tr).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new gt(t);
  }
  static get workerSrc() {
    if (Hi.workerSrc)
      return Hi.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return Y(this, "_setupFakeWorkerGlobal", (async () => n(this, oo, fc) ? n(this, oo, fc) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
yn = new WeakMap(), fs = new WeakMap(), vi = new WeakMap(), Er = new WeakMap(), td = new WeakMap(), Cr = new WeakMap(), Tr = new WeakMap(), me = new WeakSet(), uc = function() {
  n(this, yn).resolve(), n(this, fs).send("configure", {
    verbosity: this.verbosity
  });
}, Bp = function(t) {
  f(this, vi, t), f(this, fs, new qo("main", "worker", t)), n(this, fs).on("ready", () => {
  }), b(this, me, uc).call(this);
}, Hp = function() {
  if (n(gt, Cr) || n(gt, oo, fc)) {
    b(this, me, tl).call(this);
    return;
  }
  let {
    workerSrc: t
  } = gt;
  try {
    gt._isSameOrigin(window.location, t) || (t = gt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), s = new qo("main", "worker", e), i = () => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? n(this, yn).reject(new Error("Worker was destroyed")) : b(this, me, tl).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, Er) || i();
    }, {
      signal: r.signal
    }), s.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        i();
        return;
      }
      f(this, fs, s), f(this, vi, e), f(this, Er, e), b(this, me, uc).call(this);
    }), s.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        i();
        return;
      }
      try {
        a();
      } catch {
        b(this, me, tl).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      s.send("test", o, [o.buffer]);
    };
    a();
    return;
  } catch {
    cd("The worker has been disabled.");
  }
  b(this, me, tl).call(this);
}, tl = function() {
  n(gt, Cr) || (j("Setting up fake worker."), f(gt, Cr, !0)), gt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, yn).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new wm();
    f(this, vi, e);
    const s = `fake${Lt(gt, td)._++}`, i = new qo(s + "_worker", s, e);
    t.setup(i, e), f(this, fs, new qo(s, s + "_worker", e)), b(this, me, uc).call(this);
  }).catch((t) => {
    n(this, yn).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, oo = new WeakSet(), fc = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, g(gt, oo), g(gt, td, 0), g(gt, Cr, !1), g(gt, Tr, /* @__PURE__ */ new WeakMap()), pe && (f(gt, Cr, !0), Hi.workerSrc || (Hi.workerSrc = "./pdf.worker.mjs")), gt._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!(s != null && s.origin) || s.origin === "null")
    return !1;
  const i = new URL(e, s);
  return s.origin === i.origin;
}, gt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
}, gt.fromPort = (t) => {
  if (om("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t != null && t.port))
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  return gt.create(t);
};
let dl = gt;
var _i, Os, lo, ho, Si, xr, el;
class ub {
  constructor(t, e, s, i, r, a) {
    g(this, xr);
    g(this, _i, /* @__PURE__ */ new Map());
    g(this, Os, /* @__PURE__ */ new Map());
    g(this, lo, /* @__PURE__ */ new Map());
    g(this, ho, /* @__PURE__ */ new Map());
    g(this, Si, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Dp(), this.fontLoader = new pm({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }
  get annotationStorage() {
    return Y(this, "annotationStorage", new Yu());
  }
  getRenderingIntent(t, e = Wi.ENABLE, s = null, i = !1, r = !1) {
    let a = Ge.DISPLAY, o = qd;
    switch (t) {
      case "any":
        a = Ge.ANY;
        break;
      case "display":
        break;
      case "print":
        a = Ge.PRINT;
        break;
      default:
        j(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Ge.PRINT && s instanceof mp ? s : this.annotationStorage;
    switch (e) {
      case Wi.DISABLE:
        a += Ge.ANNOTATIONS_DISABLE;
        break;
      case Wi.ENABLE:
        break;
      case Wi.ENABLE_FORMS:
        a += Ge.ANNOTATIONS_FORMS;
        break;
      case Wi.ENABLE_STORAGE:
        a += Ge.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        j(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += Ge.IS_EDITING), r && (a += Ge.OPLIST);
    const {
      ids: h,
      hash: c
    } = l.modifiedIds, u = [a, o.hash, c];
    return {
      renderingIntent: a,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = n(this, Si)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of n(this, Os).values())
      t.push(i._destroy());
    n(this, Os).clear(), n(this, lo).clear(), n(this, ho).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, _i).clear(), this.filterFactory.destroy(), hl.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new $n("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Rt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          Rt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        this._fullReader.cancel(r), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      } = this._fullReader;
      return (!i || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, i) => {
      Rt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(s.begin, s.end);
      if (!r) {
        i.close();
        return;
      }
      i.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          Rt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        r.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new cb(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(Ae(s));
    }), t.on("PasswordRequest", (s) => {
      f(this, Si, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Ae(s);
        const i = (r) => {
          r instanceof Error ? n(this, Si).reject(r) : n(this, Si).resolve({
            password: r
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, Si).reject(i);
      }
      return n(this, Si).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      n(this, Os).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          if ("error" in r) {
            const c = r.error;
            j(`Error during font loading: ${c}`), this.commonObjs.resolve(s, c);
            break;
          }
          const o = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (c, u) => globalThis.FontInspector.fontAdded(c, u) : null, l = new gm(r, o);
          this.fontLoader.bind(l).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !l.fontExtraProperties && l.data && (l.data = null), this.commonObjs.resolve(s, l);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: h
          } = r;
          Rt(h, "The imageRef must be defined.");
          for (const c of n(this, Os).values())
            for (const [, u] of c.objs)
              if ((u == null ? void 0 : u.ref) === h)
                return u.dataLen ? (this.commonObjs.resolve(s, structuredClone(u)), u.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, r, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = n(this, Os).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case "Image":
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBinaryData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      const i = this[s.type];
      if (!i)
        throw new Error(`${s.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return i.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && j("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = n(this, lo).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, ho).set(r.refStr, t);
      const a = new db(e, r, this, this._params.pdfBug);
      return n(this, Os).set(e, a), a;
    });
    return n(this, lo).set(e, i), i;
  }
  getPageIndex(t) {
    return Yd(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return b(this, xr, el).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, xr, el).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: e
    });
  }
  getDocJSActions() {
    return b(this, xr, el).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return b(this, xr, el).call(this, "GetOptionalContentConfig").then((e) => new Um(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, _i).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var r, a;
      return {
        info: i[0],
        metadata: i[1] ? new zm(i[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return n(this, _i).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, Os).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, _i).clear(), this.filterFactory.destroy(!0), hl.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Yd(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, ho).get(e) ?? null;
  }
}
_i = new WeakMap(), Os = new WeakMap(), lo = new WeakMap(), ho = new WeakMap(), Si = new WeakMap(), xr = new WeakSet(), el = function(t, e = null) {
  const s = n(this, _i).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return n(this, _i).set(t, i), i;
};
var wn;
class fb {
  constructor(t) {
    g(this, wn, null);
    k(this, "onContinue", null);
    k(this, "onError", null);
    f(this, wn, t);
  }
  get promise() {
    return n(this, wn).capability.promise;
  }
  cancel(t = 0) {
    n(this, wn).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, wn).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, wn);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
wn = new WeakMap();
var vn, kr;
const Kn = class Kn {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: c = !1,
    pdfBug: u = !1,
    pageColors: p = null,
    enableHWA: m = !1,
    filteredOperationIndexes: A = null
  }) {
    g(this, vn, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new fb(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = m, this._dependencyTracker = e.dependencyTracker, this._filteredOperationIndexes = A;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, h;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (n(Kn, kr).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(Kn, kr).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: s,
      transform: i,
      background: r,
      dependencyTracker: a
    } = this.params, o = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new va(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: i,
      viewport: s,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (h = this.graphicsReadyCallback) == null || h.call(this);
  }
  cancel(t = null, e = 0) {
    var s, i, r;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), n(this, vn) && (window.cancelAnimationFrame(n(this, vn)), f(this, vn, null)), n(Kn, kr).delete(this._canvas), t || (t = new Xu(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (i = this.task).onError) == null || r.call(i, t);
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? f(this, vn, window.requestAnimationFrame(() => {
      f(this, vn, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._filteredOperationIndexes), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Kn, kr).delete(this._canvas), this.callback())));
  }
};
vn = new WeakMap(), kr = new WeakMap(), g(Kn, kr, /* @__PURE__ */ new WeakSet());
let lu = Kn;
const pb = "5.4.149", gb = "9e2e9e209";
var Re, Pr, co, Bt, ah, uo, Ei, oh, _n, ps, lh, ct, hu, cu, du, Wn, $p, Vi;
const ye = class ye {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    g(this, ct);
    g(this, Re, null);
    g(this, Pr, null);
    g(this, co);
    g(this, Bt, null);
    g(this, ah, !1);
    g(this, uo, !1);
    g(this, Ei, null);
    g(this, oh);
    g(this, _n, null);
    g(this, ps, null);
    var s, i;
    t ? (f(this, uo, !1), f(this, Ei, t)) : f(this, uo, !0), f(this, ps, (t == null ? void 0 : t._uiManager) || e), f(this, oh, n(this, ps)._eventBus), f(this, co, ((s = t == null ? void 0 : t.color) == null ? void 0 : s.toUpperCase()) || ((i = n(this, ps)) == null ? void 0 : i.highlightColors.values().next().value) || "#FFFF98"), n(ye, lh) || f(ye, lh, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return Y(this, "_keyboardManager", new Vh([[["Escape", "mac+Escape"], ye.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ye.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ye.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ye.prototype._moveToPrevious], [["Home", "mac+Home"], ye.prototype._moveToBeginning], [["End", "mac+End"], ye.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = f(this, Re, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", n(this, Ei) && (t.ariaControls = `${n(this, Ei).id}_colorpicker_dropdown`);
    const e = n(this, ps)._signal;
    t.addEventListener("click", b(this, ct, Wn).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, ct, du).bind(this), {
      signal: e
    });
    const s = f(this, Pr, document.createElement("span"));
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = n(this, co), t.append(s), t;
  }
  renderMainDropdown() {
    const t = f(this, Bt, b(this, ct, hu).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, Re)) {
      b(this, ct, Wn).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, ct, cu).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!n(this, ct, Vi)) {
      b(this, ct, Wn).call(this, t);
      return;
    }
    if (t.target === n(this, Re)) {
      (e = n(this, Bt).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = n(this, Bt)) == null ? void 0 : e.firstChild) || t.target === n(this, Re)) {
      n(this, ct, Vi) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, ct, Vi) || b(this, ct, Wn).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, ct, Vi)) {
      b(this, ct, Wn).call(this, t);
      return;
    }
    (e = n(this, Bt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, ct, Vi)) {
      b(this, ct, Wn).call(this, t);
      return;
    }
    (e = n(this, Bt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, Bt)) == null || t.classList.add("hidden"), n(this, Re).ariaExpanded = "false", (e = n(this, _n)) == null || e.abort(), f(this, _n, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, uo)) {
      if (!n(this, ct, Vi)) {
        (t = n(this, Ei)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, Re).focus({
        preventScroll: !0,
        focusVisible: n(this, ah)
      });
    }
  }
  updateColor(t) {
    if (n(this, Pr) && (n(this, Pr).style.backgroundColor = t), !n(this, Bt))
      return;
    const e = n(this, ps).highlightColors.values();
    for (const s of n(this, Bt).children)
      s.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    var t, e;
    (t = n(this, Re)) == null || t.remove(), f(this, Re, null), f(this, Pr, null), (e = n(this, Bt)) == null || e.remove(), f(this, Bt, null);
  }
};
Re = new WeakMap(), Pr = new WeakMap(), co = new WeakMap(), Bt = new WeakMap(), ah = new WeakMap(), uo = new WeakMap(), Ei = new WeakMap(), oh = new WeakMap(), _n = new WeakMap(), ps = new WeakMap(), lh = new WeakMap(), ct = new WeakSet(), hu = function() {
  const t = document.createElement("div"), e = n(this, ps)._signal;
  t.addEventListener("contextmenu", as, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), n(this, Ei) && (t.id = `${n(this, Ei).id}_colorpicker_dropdown`);
  for (const [s, i] of n(this, ps).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n(ye, lh)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.ariaSelected = i === n(this, co), r.addEventListener("click", b(this, ct, cu).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, ct, du).bind(this), {
    signal: e
  }), t;
}, cu = function(t, e) {
  e.stopPropagation(), n(this, oh).dispatch("switchannotationeditorparams", {
    source: this,
    type: J.HIGHLIGHT_COLOR,
    value: t
  }), this.updateColor(t);
}, du = function(t) {
  ye._keyboardManager.exec(this, t);
}, Wn = function(t) {
  if (n(this, ct, Vi)) {
    this.hideDropdown();
    return;
  }
  if (f(this, ah, t.detail === 0), n(this, _n) || (f(this, _n, new AbortController()), window.addEventListener("pointerdown", b(this, ct, $p).bind(this), {
    signal: n(this, ps).combinedSignal(n(this, _n))
  })), n(this, Re).ariaExpanded = "true", n(this, Bt)) {
    n(this, Bt).classList.remove("hidden");
    return;
  }
  const e = f(this, Bt, b(this, ct, hu).call(this));
  n(this, Re).append(e);
}, $p = function(t) {
  var e;
  (e = n(this, Bt)) != null && e.contains(t.target) || this.hideDropdown();
}, Vi = function() {
  return n(this, Bt) && !n(this, Bt).classList.contains("hidden");
}, g(ye, lh, null);
let Oc = ye;
var Bs, hh, fo, ch;
const Qn = class Qn {
  constructor(t) {
    g(this, Bs, null);
    g(this, hh, null);
    g(this, fo, null);
    f(this, hh, t), f(this, fo, t._uiManager), n(Qn, ch) || f(Qn, ch, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (n(this, Bs))
      return n(this, Bs);
    const {
      editorType: t,
      colorType: e,
      colorValue: s
    } = n(this, hh), i = f(this, Bs, document.createElement("input"));
    return i.type = "color", i.value = s || "#000000", i.className = "basicColorPicker", i.tabIndex = 0, i.setAttribute("data-l10n-id", n(Qn, ch)[t]), i.addEventListener("input", () => {
      n(this, fo).updateParams(e, i.value);
    }, {
      signal: n(this, fo)._signal
    }), i;
  }
  update(t) {
    n(this, Bs) && (n(this, Bs).value = t);
  }
  destroy() {
    var t;
    (t = n(this, Bs)) == null || t.remove(), f(this, Bs, null);
  }
  hideDropdown() {
  }
};
Bs = new WeakMap(), hh = new WeakMap(), fo = new WeakMap(), ch = new WeakMap(), g(Qn, ch, null);
let Bc = Qn;
function Pf(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function $o(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Mf {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = $o(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Pf(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map($o);
  }
  static RGB_HTML(t) {
    return `#${t.map(Pf).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [$o(1 - Math.min(1, t + i)), $o(1 - Math.min(1, s + i)), $o(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(i, r, a);
    return ["CMYK", i, r, a, o];
  }
}
class mb {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    dt("Abstract method `_createSVG` called.");
  }
}
class Hc extends mb {
  _createSVG(t) {
    return document.createElementNS(Ks, t);
  }
}
class zp {
  static setupStorage(t, e, s, i, r) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(e, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [l, h] of Object.entries(a))
      if (h != null)
        switch (l) {
          case "class":
            h.length && t.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", h);
            break;
          case "style":
            Object.assign(t.style, h);
            break;
          case "textContent":
            t.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
        }
    o && r.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var u, p;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: r,
      linkService: s
    });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const m = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = m;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const m = document.createTextNode(i.value);
        a.append(m), o && cl.shouldBuildText(i.name) && h.push(m);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [m, A, y] = c.at(-1);
      if (A + 1 === m.children.length) {
        c.pop();
        continue;
      }
      const v = m.children[++c.at(-1)[1]];
      if (v === null)
        continue;
      const {
        name: w
      } = v;
      if (w === "#text") {
        const _ = document.createTextNode(v.value);
        h.push(_), y.append(_);
        continue;
      }
      const S = (u = v == null ? void 0 : v.attributes) != null && u.xmlns ? document.createElementNS(v.attributes.xmlns, w) : document.createElement(w);
      if (y.append(S), v.attributes && this.setAttributes({
        html: S,
        element: v,
        storage: e,
        intent: r,
        linkService: s
      }), ((p = v.children) == null ? void 0 : p.length) > 0)
        c.push([v, -1, S]);
      else if (v.value) {
        const _ = document.createTextNode(v.value);
        o && cl.shouldBuildText(w) && h.push(_), S.append(_);
      }
    }
    for (const m of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      m.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const bb = 9, ra = /* @__PURE__ */ new WeakSet(), Ab = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Rf {
  static create(t) {
    switch (t.data.annotationType) {
      case Pt.LINK:
        return new Ju(t);
      case Pt.TEXT:
        return new yb(t);
      case Pt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new wb(t);
          case "Btn":
            return t.data.radioButton ? new Vp(t) : t.data.checkBox ? new _b(t) : new Sb(t);
          case "Ch":
            return new Eb(t);
          case "Sig":
            return new vb(t);
        }
        return new la(t);
      case Pt.POPUP:
        return new fu(t);
      case Pt.FREETEXT:
        return new Jp(t);
      case Pt.LINE:
        return new Tb(t);
      case Pt.SQUARE:
        return new xb(t);
      case Pt.CIRCLE:
        return new kb(t);
      case Pt.POLYLINE:
        return new Zp(t);
      case Pt.CARET:
        return new Mb(t);
      case Pt.INK:
        return new Zu(t);
      case Pt.POLYGON:
        return new Pb(t);
      case Pt.HIGHLIGHT:
        return new tg(t);
      case Pt.UNDERLINE:
        return new Rb(t);
      case Pt.SQUIGGLY:
        return new Db(t);
      case Pt.STRIKEOUT:
        return new Lb(t);
      case Pt.STAMP:
        return new eg(t);
      case Pt.FILEATTACHMENT:
        return new Ib(t);
      default:
        return new Tt(t);
    }
  }
}
var Mr, po, Ci, aa, Gp, uu;
const of = class of {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    g(this, aa);
    g(this, Mr, null);
    g(this, po, !1);
    g(this, Ci, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: e
  }) {
    return !!(t != null && t.str || e != null && e.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return of._hasPopupData(this.data);
  }
  get hasCommentButton() {
    return this.enableComment && this._isEditable && this.hasPopupElement;
  }
  get commentButtonPosition() {
    const {
      quadPoints: t,
      rect: e
    } = this.data;
    let s = -1 / 0, i = -1 / 0;
    if ((t == null ? void 0 : t.length) >= 8) {
      for (let r = 0; r < t.length; r += 8)
        t[r + 1] > i ? (i = t[r + 1], s = t[r + 2]) : t[r + 1] === i && (s = Math.max(s, t[r + 2]));
      return [s, i];
    }
    return e ? [e[2], e[3]] : null;
  }
  get commentButtonColor() {
    if (!this.data.color)
      return null;
    const [t, e, s] = this.data.color, r = 255 * (1 - (this.data.opacity ?? 1));
    return b(this, aa, Gp).call(this, Math.min(t + r, 255), Math.min(e + r, 255), Math.min(s + r, 255));
  }
  _normalizePoint(t) {
    const {
      page: {
        view: e
      },
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: i,
          pageX: r,
          pageY: a
        }
      }
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / s, t[1] = 100 * (t[1] - a) / i, t;
  }
  updateEdited(t) {
    var r;
    if (!this.container)
      return;
    t.rect && (n(this, Mr) || f(this, Mr, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: s
    } = t;
    e && b(this, aa, uu).call(this, e);
    let i = ((r = n(this, Ci)) == null ? void 0 : r.popup) || this.popup;
    !i && (s != null && s.text) && (this._createPopup(s), i = n(this, Ci).popup), i && (i.updateEdited(t), s != null && s.deleted && (i.remove(), f(this, Ci, null), this.popup = null));
  }
  resetEdited() {
    var t;
    n(this, Mr) && (b(this, aa, uu).call(this, n(this, Mr).rect), (t = n(this, Ci)) == null || t.popup.resetEdited(), f(this, Mr, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof la) && !(this instanceof Ju) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof fu) {
      const {
        rotation: y
      } = e;
      return !e.hasOwnCanvas && y !== 0 && this.setRotation(y, r), r;
    }
    const {
      width: o,
      height: l
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const y = e.borderStyle.horizontalCornerRadius, v = e.borderStyle.verticalCornerRadius;
      if (y > 0 || v > 0) {
        const S = `calc(${y}px * var(--total-scale-factor)) / calc(${v}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      } else if (this instanceof Vp) {
        const S = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case ca.SOLID:
          a.borderStyle = "solid";
          break;
        case ca.DASHED:
          a.borderStyle = "dashed";
          break;
        case ca.BEVELED:
          j("Unimplemented border style: beveled");
          break;
        case ca.INSET:
          j("Unimplemented border style: inset");
          break;
        case ca.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const w = e.borderColor || null;
      w ? (f(this, po, !0), a.borderColor = O.makeHexColor(w[0] | 0, w[1] | 0, w[2] | 0)) : a.borderWidth = 0;
    }
    const h = O.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: u,
      pageX: p,
      pageY: m
    } = i.rawDims;
    a.left = `${100 * (h[0] - p) / c}%`, a.top = `${100 * (h[1] - m) / u}%`;
    const {
      rotation: A
    } = e;
    return e.hasOwnCanvas || A === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / u}%`) : this.setRotation(A, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / s}%`, e.style.height = `${100 * a / i}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const r = i.detail[e], a = r[0], o = r.slice(1);
      i.target.style[s] = Mf[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Mf[`${a}_rgb`](o)
      });
    };
    return Y(this, "_commonActions", {
      display: (e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const r = t[i] || s[i];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, r] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: r
          },
          target: t
        };
        a(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, i, r] = this.data.rect.map((y) => Math.fround(y));
    if (t.length === 8) {
      const [y, v, w, S] = t.subarray(2, 6);
      if (i === y && r === v && e === w && s === S)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, po)) {
      const {
        borderColor: y,
        borderWidth: v
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${y}" stroke-width="${v}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = r - s, {
      svgFactory: c
    } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0), u.role = "none";
    const p = c.createElement("defs");
    u.append(p);
    const m = c.createElement("clipPath"), A = `clippath_${this.data.id}`;
    m.setAttribute("id", A), m.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(m);
    for (let y = 2, v = t.length; y < v; y += 8) {
      const w = t[y], S = t[y + 1], _ = t[y + 2], E = t[y + 3], C = c.createElement("rect"), T = (_ - e) / l, x = (r - S) / h, P = (w - _) / l, M = (S - E) / h;
      C.setAttribute("x", T), C.setAttribute("y", x), C.setAttribute("width", P), C.setAttribute("height", M), m.append(C), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${T}" y="${x}" width="${P}" height="${M}"/>`);
    }
    n(this, po) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${A})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let s, i;
    t ? (s = {
      str: t.text
    }, i = t.date) : (s = e.contentsObj, i = e.modificationDate);
    const r = f(this, Ci, new fu({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: i,
        contentsObj: s,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation,
        noRotate: !0
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(r.render());
  }
  get hasPopupElement() {
    return !!(n(this, Ci) || this.popup || this.data.popupRef);
  }
  render() {
    dt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: r,
          id: a,
          exportValues: o
        } of i) {
          if (r === -1 || a === e)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
          if (h && !ra.has(h)) {
            j(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          s.push({
            id: a,
            exportValue: l,
            domElement: h
          });
        }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = i, a = i.getAttribute("data-element-id");
      a !== e && ra.has(i) && s.push({
        id: a,
        exportValue: r,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0
      });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
};
Mr = new WeakMap(), po = new WeakMap(), Ci = new WeakMap(), aa = new WeakSet(), Gp = function(t, e, s) {
  t /= 255, e /= 255, s /= 255;
  const i = Math.max(t, e, s), r = Math.min(t, e, s), a = (i + r) / 2, o = ((1 + Math.sqrt(a)) / 2 * 100).toFixed(2);
  if (i === r)
    return `hsl(0, 0%, ${o}%)`;
  const l = i - r;
  let h;
  i === t ? h = (e - s) / l + (e < s ? 6 : 0) : i === e ? h = (s - t) / l + 2 : h = (t - e) / l + 4, h = (h * 60).toFixed(2);
  const c = (l / (1 - Math.abs(2 * a - 1)) * 100).toFixed(2);
  return `hsl(${h}, ${c}%, ${o}%)`;
}, uu = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(i);
};
let Tt = of;
var je, Xn, Up, jp;
class Ju extends Tt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    g(this, je);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action, e.overlaidText), r = !0) : e.attachment ? (b(this, je, Up).call(this, i, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (b(this, je, jp).call(this, i, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(i, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, s, i = "") {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, je, Xn).call(this), i && (e.title = i);
  }
  _bindNamedAction(e, s, i = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), i && (e.title = i), b(this, je, Xn).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(s.actions)) {
      const a = i.get(r);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: r
          }
        }), !1;
      });
    }
    s.overlaidText && (e.title = s.overlaidText), e.onclick || (e.onclick = () => !1), b(this, je, Xn).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), b(this, je, Xn).call(this), !this._fieldObjects) {
      j('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      i == null || i();
      const {
        fields: r,
        refs: a,
        include: o
      } = s, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const p = new Set(a);
        for (const m of r) {
          const A = this._fieldObjects[m] || [];
          for (const {
            id: y
          } of A)
            p.add(y);
        }
        for (const m of Object.values(this._fieldObjects))
          for (const A of m)
            p.has(A.id) === o && l.push(A);
      } else
        for (const p of Object.values(this._fieldObjects))
          l.push(...p);
      const h = this.annotationStorage, c = [];
      for (const p of l) {
        const {
          id: m
        } = p;
        switch (c.push(m), p.type) {
          case "text": {
            const y = p.defaultValue || "";
            h.setValue(m, {
              value: y
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const y = p.defaultValue === p.exportValues;
            h.setValue(m, {
              value: y
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const y = p.defaultValue || "";
            h.setValue(m, {
              value: y
            });
            break;
          }
          default:
            continue;
        }
        const A = document.querySelector(`[data-element-id="${m}"]`);
        if (A) {
          if (!ra.has(A)) {
            j(`_bindResetFormAction - element not allowed: ${m}`);
            continue;
          }
        } else continue;
        A.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: c,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
je = new WeakSet(), Xn = function() {
  this.container.setAttribute("data-internal-link", "");
}, Up = function(e, s, i = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description ? e.title = s.description : i && (e.title = i), e.onclick = () => {
    var a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(s.content, s.filename, r), !1;
  }, b(this, je, Xn).call(this);
}, jp = function(e, s, i = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), i && (e.title = i), b(this, je, Xn).call(this);
};
class yb extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class la extends Tt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return ie.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, r) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(s, (a) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var r, a, o;
    for (const [l, h] of s)
      (h === "Action" || (r = this.data.actions) != null && r[h]) && ((h === "Focus" || h === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, h, i), h === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : O.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || bb, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (yd * i)) || 1, u = h / c;
      a = Math.min(i, l(u / yd));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / yd));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = O.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class wb extends la {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), r.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    var i, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const c = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), ra.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: p,
        timeStep: m
      } = this.data, A = !!p && this.enableScripting;
      u && (s.title = u), this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (v) => {
        t.setValue(e, {
          value: v.target.value
        }), this.setPropertyOnSiblings(s, "value", v.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (v) => {
        const w = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = w, c.formattedValue = null;
      });
      let y = (v) => {
        const {
          formattedValue: w
        } = c;
        w != null && (v.target.value = w), v.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (w) => {
          var _;
          if (c.focused)
            return;
          const {
            target: S
          } = w;
          if (A && (S.type = p, m && (S.step = m)), c.userValue) {
            const E = c.userValue;
            if (A)
              if (p === "time") {
                const C = new Date(E), T = [C.getHours(), C.getMinutes(), C.getSeconds()];
                S.value = T.map((x) => x.toString().padStart(2, "0")).join(":");
              } else
                S.value = new Date(E - Ab).toISOString().split(p === "date" ? "T" : ".", 1)[0];
            else
              S.value = E;
          }
          c.lastCommittedValue = S.value, c.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (w) => {
          this.showElementAndHideCanvas(w.target);
          const S = {
            value(_) {
              c.userValue = _.detail.value ?? "", A || t.setValue(e, {
                value: c.userValue.toString()
              }), _.target.value = c.userValue;
            },
            formattedValue(_) {
              const {
                formattedValue: E
              } = _.detail;
              c.formattedValue = E, E != null && _.target !== document.activeElement && (_.target.value = E);
              const C = {
                formattedValue: E
              };
              A && (C.value = E), t.setValue(e, C);
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var x;
              const {
                charLimit: E
              } = _.detail, {
                target: C
              } = _;
              if (E === 0) {
                C.removeAttribute("maxLength");
                return;
              }
              C.setAttribute("maxLength", E);
              let T = c.userValue;
              !T || T.length <= E || (T = T.slice(0, E), C.value = c.userValue = T, t.setValue(e, {
                value: T
              }), (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: T,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: C.selectionStart,
                  selEnd: C.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(S, w);
        }), s.addEventListener("keydown", (w) => {
          var E;
          c.commitKey = 1;
          let S = -1;
          if (w.key === "Escape" ? S = 0 : w.key === "Enter" && !this.data.multiLine ? S = 2 : w.key === "Tab" && (c.commitKey = 3), S === -1)
            return;
          const {
            value: _
          } = w.target;
          c.lastCommittedValue !== _ && (c.lastCommittedValue = _, c.userValue = _, (E = this.linkService.eventBus) == null || E.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: S,
              selStart: w.target.selectionStart,
              selEnd: w.target.selectionEnd
            }
          }));
        });
        const v = y;
        y = null, s.addEventListener("blur", (w) => {
          var E, C;
          if (!c.focused || !w.relatedTarget)
            return;
          (E = this.data.actions) != null && E.Blur || (c.focused = !1);
          const {
            target: S
          } = w;
          let {
            value: _
          } = S;
          if (A) {
            if (_ && p === "time") {
              const T = _.split(":").map((x) => parseInt(x, 10));
              _ = new Date(2e3, 0, 1, T[0], T[1], T[2] || 0).valueOf(), S.step = "";
            } else
              _ = new Date(_).valueOf();
            S.type = "text";
          }
          c.userValue = _, c.lastCommittedValue !== _ && ((C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: w.target.selectionStart,
              selEnd: w.target.selectionEnd
            }
          })), v(w);
        }), (r = this.data.actions) != null && r.Keystroke && s.addEventListener("beforeinput", (w) => {
          var M;
          c.lastCommittedValue = null;
          const {
            data: S,
            target: _
          } = w, {
            value: E,
            selectionStart: C,
            selectionEnd: T
          } = _;
          let x = C, P = T;
          switch (w.inputType) {
            case "deleteWordBackward": {
              const L = E.substring(0, C).match(/\w*[^\w]*$/);
              L && (x -= L[0].length);
              break;
            }
            case "deleteWordForward": {
              const L = E.substring(C).match(/^[^\w]*\w*/);
              L && (P += L[0].length);
              break;
            }
            case "deleteContentBackward":
              C === T && (x -= 1);
              break;
            case "deleteContentForward":
              C === T && (P += 1);
              break;
          }
          w.preventDefault(), (M = this.linkService.eventBus) == null || M.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: E,
              change: S || "",
              willCommit: !1,
              selStart: x,
              selEnd: P
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (w) => w.target.value);
      }
      if (y && s.addEventListener("blur", y), this.data.comb) {
        const w = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${w}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class vb extends la {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class _b extends la {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return ra.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s)) {
        const c = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = c), t.setValue(h.id, {
          value: c
        });
      }
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class Vp extends la {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (ra.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s))
        t.setValue(h.id, {
          value: !1
        });
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const c = a === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const p = c && u.id === s;
              u.domElement && (u.domElement.checked = p), t.setValue(u.id, {
                value: p
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class Sb extends Ju {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class Eb extends la {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    ra.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const u = this.data.defaultFieldValue;
      for (const p of i.options)
        p.selected = p.value === u;
    });
    for (const c of this.data.options) {
      const u = document.createElement("option");
      u.textContent = c.displayValue, u.value = c.exportValue, s.value.includes(c.exportValue) && (u.setAttribute("selected", !0), r = !1), i.append(u);
    }
    let a = null;
    if (r) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), a = () => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (c) => {
      const u = c ? "value" : "textContent", {
        options: p,
        multiple: m
      } = i;
      return m ? Array.prototype.filter.call(p, (A) => A.selected).map((A) => A[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
    };
    let l = o(!1);
    const h = (c) => {
      const u = c.target.options;
      return Array.prototype.map.call(u, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const u = {
        value(p) {
          a == null || a();
          const m = p.detail.value, A = new Set(Array.isArray(m) ? m : [m]);
          for (const y of i.options)
            y.selected = A.has(y.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(p) {
          i.multiple = !0;
        },
        remove(p) {
          const m = i.options, A = p.detail.remove;
          m[A].selected = !1, i.remove(A), m.length > 0 && Array.prototype.findIndex.call(m, (v) => v.selected) === -1 && (m[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        clear(p) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(p) {
          const {
            index: m,
            displayValue: A,
            exportValue: y
          } = p.detail.insert, v = i.children[m], w = document.createElement("option");
          w.textContent = A, w.value = y, v ? v.before(w) : i.append(w), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        items(p) {
          const {
            items: m
          } = p.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const A of m) {
            const {
              displayValue: y,
              exportValue: v
            } = A, w = document.createElement("option");
            w.textContent = y, w.value = v, i.append(w);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        indices(p) {
          const m = new Set(p.detail.indices);
          for (const A of p.target.options)
            A.selected = m.has(A.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, c);
    }), i.addEventListener("input", (c) => {
      var m;
      const u = o(!0), p = o(!1);
      t.setValue(e, {
        value: u
      }), c.preventDefault(), (m = this.linkService.eventBus) == null || m.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: p,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : i.addEventListener("input", function(c) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class fu extends Tt {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: Tt._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    const {
      container: t
    } = this;
    t.classList.add("popupAnnotation"), t.role = "comment";
    const e = this.popup = new Cb({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate || this.data.creationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open,
      eventBus: this.linkService.eventBus
    }), s = [];
    for (const i of this.elements)
      i.popup = e, i.container.ariaHasPopup = "dialog", s.push(i.data.id), i.addHighlightArea();
    return this.container.setAttribute("aria-controls", s.map((i) => `${Wu}${i}`).join(",")), this.container;
  }
}
var Rr, ed, sd, Dr, go, _t, Ti, Sn, xi, dh, uh, mo, Hs, De, ki, Pi, fh, En, bo, ph, Mi, Ao, Lr, Cn, Q, pc, Wp, Xp, gc, pu, qp, Yp, Kp, Qp, mc, bc, gu;
class Cb {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: h,
    parentRect: c,
    open: u,
    eventBus: p = null
  }) {
    g(this, Q);
    g(this, Rr, b(this, Q, Kp).bind(this));
    g(this, ed, b(this, Q, gu).bind(this));
    g(this, sd, b(this, Q, bc).bind(this));
    g(this, Dr, b(this, Q, mc).bind(this));
    g(this, go, null);
    g(this, _t, null);
    g(this, Ti, null);
    g(this, Sn, null);
    g(this, xi, null);
    g(this, dh, null);
    g(this, uh, null);
    g(this, mo, null);
    g(this, Hs, !1);
    g(this, De, null);
    g(this, ki, null);
    g(this, Pi, null);
    g(this, fh, null);
    g(this, En, null);
    g(this, bo, null);
    g(this, ph, null);
    g(this, Mi, null);
    g(this, Ao, null);
    g(this, Lr, null);
    g(this, Cn, !1);
    f(this, _t, t), f(this, Ao, i), f(this, Ti, a), f(this, Mi, o), f(this, uh, l), f(this, go, e), f(this, ph, h), f(this, mo, c), f(this, xi, s), f(this, dh, p), f(this, Sn, Lc.toDateObject(r)), this.trigger = s.flatMap((m) => m.getElementsToTriggerPopup()), b(this, Q, pc).call(this), n(this, _t).hidden = !0, u && b(this, Q, mc).call(this);
  }
  render() {
    var i;
    if (n(this, De))
      return;
    const t = f(this, De, document.createElement("div"));
    if (t.className = "popup", n(this, go)) {
      const r = t.style.outlineColor = O.makeHexColor(...n(this, go));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", (i = n(this, Ao)) != null && i.str) {
      const r = document.createElement("span");
      r.className = "title", e.append(r), {
        dir: r.dir,
        str: r.textContent
      } = n(this, Ao);
    }
    if (t.append(e), n(this, Sn)) {
      const r = document.createElement("time");
      r.className = "popupDate", r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, Sn).valueOf()
      })), r.dateTime = n(this, Sn).toISOString(), e.append(r);
    }
    const s = n(this, Q, gc);
    if (s)
      zp.render({
        xfaHtml: s,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const r = this._formatContents(n(this, Ti));
      t.append(r);
    }
    n(this, _t).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let r = 0, a = i.length; r < a; ++r) {
      const o = i[r];
      s.append(document.createTextNode(o)), r < a - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: s
  }) {
    var i;
    if (s || e != null && e.deleted) {
      this.remove();
      return;
    }
    b(this, Q, pc).call(this), n(this, Lr) || f(this, Lr, {
      contentsObj: n(this, Ti),
      richText: n(this, Mi)
    }), t && f(this, Pi, null), e && (f(this, Mi, b(this, Q, Yp).call(this, e.text)), f(this, Sn, Lc.toDateObject(e.date)), f(this, Ti, null)), (i = n(this, De)) == null || i.remove(), f(this, De, null);
  }
  resetEdited() {
    var t;
    n(this, Lr) && ({
      contentsObj: Lt(this, Ti)._,
      richText: Lt(this, Mi)._
    } = n(this, Lr), f(this, Lr, null), (t = n(this, De)) == null || t.remove(), f(this, De, null), f(this, Pi, null));
  }
  remove() {
    var t, e;
    (t = n(this, ki)) == null || t.abort(), f(this, ki, null), (e = n(this, De)) == null || e.remove(), f(this, De, null), f(this, Cn, !1), f(this, Hs, !1);
    for (const s of this.trigger)
      s.classList.remove("popupTriggerArea");
  }
  forceHide() {
    f(this, Cn, this.isVisible), n(this, Cn) && (n(this, _t).hidden = !0);
  }
  maybeShow() {
    b(this, Q, pc).call(this), n(this, Cn) && (n(this, De) || b(this, Q, bc).call(this), f(this, Cn, !1), n(this, _t).hidden = !1);
  }
  get isVisible() {
    return n(this, _t).hidden === !1;
  }
}
Rr = new WeakMap(), ed = new WeakMap(), sd = new WeakMap(), Dr = new WeakMap(), go = new WeakMap(), _t = new WeakMap(), Ti = new WeakMap(), Sn = new WeakMap(), xi = new WeakMap(), dh = new WeakMap(), uh = new WeakMap(), mo = new WeakMap(), Hs = new WeakMap(), De = new WeakMap(), ki = new WeakMap(), Pi = new WeakMap(), fh = new WeakMap(), En = new WeakMap(), bo = new WeakMap(), ph = new WeakMap(), Mi = new WeakMap(), Ao = new WeakMap(), Lr = new WeakMap(), Cn = new WeakMap(), Q = new WeakSet(), pc = function() {
  var e;
  if (n(this, ki))
    return;
  f(this, ki, new AbortController());
  const {
    signal: t
  } = n(this, ki);
  for (const s of this.trigger)
    s.addEventListener("click", n(this, Dr), {
      signal: t
    }), s.addEventListener("mouseenter", n(this, sd), {
      signal: t
    }), s.addEventListener("mouseleave", n(this, ed), {
      signal: t
    }), s.classList.add("popupTriggerArea");
  for (const s of n(this, xi))
    (e = s.container) == null || e.addEventListener("keydown", n(this, Rr), {
      signal: t
    });
  b(this, Q, Xp).call(this);
}, Wp = function() {
  const t = n(this, xi).find((e) => e.hasCommentButton);
  t && (f(this, En, t._normalizePoint(t.commentButtonPosition)), f(this, bo, t.commentButtonColor));
}, Xp = function() {
  if (n(this, fh) || (n(this, En) || b(this, Q, Wp).call(this), !n(this, En)))
    return;
  const t = f(this, fh, document.createElement("button"));
  t.className = "annotationCommentButton";
  const e = n(this, xi)[0].container;
  t.style.zIndex = e.style.zIndex + 1, t.tabIndex = 0;
  const {
    signal: s
  } = n(this, ki);
  t.addEventListener("hover", n(this, Dr), {
    signal: s
  }), t.addEventListener("keydown", n(this, Rr), {
    signal: s
  }), t.addEventListener("click", () => {
    var o;
    const [{
      data: {
        id: r
      },
      annotationEditorType: a
    }] = n(this, xi);
    (o = n(this, dh)) == null || o.dispatch("switchannotationeditormode", {
      source: this,
      editId: r,
      mode: a,
      editComment: !0
    });
  }, {
    signal: s
  });
  const {
    style: i
  } = t;
  i.left = `calc(${n(this, En)[0]}%)`, i.top = `calc(${n(this, En)[1]}% - var(--comment-button-dim))`, n(this, bo) && (i.backgroundColor = n(this, bo)), e.after(t);
}, gc = function() {
  const t = n(this, Mi), e = n(this, Ti);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, Mi).html || null;
}, pu = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, Q, gc)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, qp = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, Q, gc)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, Yp = function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: n(this, Q, qp),
      fontSize: n(this, Q, pu) ? `calc(${n(this, Q, pu)}px * var(--total-scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: i
    });
  return s;
}, Kp = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, Hs)) && b(this, Q, mc).call(this);
}, Qp = function() {
  if (n(this, Pi) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: r
      }
    }
  } = n(this, uh);
  let a = !!n(this, mo), o = a ? n(this, mo) : n(this, ph);
  for (const A of n(this, xi))
    if (!o || O.intersect(A.data.rect, o) !== null) {
      o = A.data.rect, a = !0;
      break;
    }
  const l = O.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = l[0] + c, p = l[1];
  f(this, Pi, [100 * (u - i) / e, 100 * (p - r) / s]);
  const {
    style: m
  } = n(this, _t);
  m.left = `${n(this, Pi)[0]}%`, m.top = `${n(this, Pi)[1]}%`;
}, mc = function() {
  f(this, Hs, !n(this, Hs)), n(this, Hs) ? (b(this, Q, bc).call(this), n(this, _t).addEventListener("click", n(this, Dr)), n(this, _t).addEventListener("keydown", n(this, Rr))) : (b(this, Q, gu).call(this), n(this, _t).removeEventListener("click", n(this, Dr)), n(this, _t).removeEventListener("keydown", n(this, Rr)));
}, bc = function() {
  n(this, De) || this.render(), this.isVisible ? n(this, Hs) && n(this, _t).classList.add("focused") : (b(this, Q, Qp).call(this), n(this, _t).hidden = !1, n(this, _t).style.zIndex = parseInt(n(this, _t).style.zIndex) + 1e3);
}, gu = function() {
  n(this, _t).classList.remove("focused"), !(n(this, Hs) || !this.isVisible) && (n(this, _t).hidden = !0, n(this, _t).style.zIndex = parseInt(n(this, _t).style.zIndex) - 1e3);
};
class Jp extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = U.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var gh;
class Tb extends Tt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, gh, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = f(this, gh, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, gh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
gh = new WeakMap();
var mh;
class xb extends Tt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, mh, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, mh, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, mh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
mh = new WeakMap();
var bh;
class kb extends Tt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, bh, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, bh, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, bh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
bh = new WeakMap();
var Ah;
class Zp extends Tt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Ah, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: r
      },
      width: a,
      height: o
    } = this;
    if (!s)
      return this.container;
    const l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, p = s.length; u < p; u += 2) {
      const m = s[u] - e[0], A = e[3] - s[u + 1];
      h.push(`${m},${A}`);
    }
    h = h.join(" ");
    const c = f(this, Ah, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Ah);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Ah = new WeakMap();
class Pb extends Zp {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Mb extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var yh, Ir, wh, mu;
class Zu extends Tt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, wh);
    g(this, yh, null);
    g(this, Ir, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? U.HIGHLIGHT : U.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: i,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = b(this, wh, mu).call(this, s, e), c = this.svgFactory.create(l, h, !0), u = f(this, yh, this.svgFactory.createElement("svg:g"));
    c.append(u), u.setAttribute("stroke-width", r.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let p = 0, m = i.length; p < m; p++) {
      const A = this.svgFactory.createElement(this.svgElementName);
      n(this, Ir).push(A), A.setAttribute("points", i[p].join(",")), u.append(A);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: r
    } = e, a = n(this, yh);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = n(this, Ir).length; o < l; o++)
        n(this, Ir)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h
      } = b(this, wh, mu).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Ir);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  get commentButtonPosition() {
    const {
      inkLists: e,
      rect: s
    } = this.data;
    if ((e == null ? void 0 : e.length) >= 1) {
      let i = -1 / 0, r = -1 / 0;
      for (const a of e)
        for (let o = 0, l = a.length; o < l; o += 2)
          a[o + 1] > r ? (r = a[o + 1], i = a[o]) : a[o + 1] === r && (i = Math.max(i, a[o]));
      if (i !== 1 / 0)
        return [i, r];
    }
    return s ? [s[2], s[3]] : null;
  }
}
yh = new WeakMap(), Ir = new WeakMap(), wh = new WeakSet(), mu = function(e, s) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    default:
      return {
        transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
  }
};
class tg extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = U.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const s = document.createElement("mark");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class Rb extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class Db extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class Lb extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), t) {
      const s = document.createElement("s");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class eg extends Tt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = U.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var vh, _h, bu;
class Ib extends Tt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    g(this, _h);
    g(this, vh, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", b(this, _h, bu).bind(this)), f(this, vh, i);
    const {
      isMac: r
    } = ie.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, _h, bu).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, vh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
vh = new WeakMap(), _h = new WeakSet(), bu = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Sh, Fr, Tn, Eh, Un, yu, wu;
const lf = class lf {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: r,
    viewport: a,
    structTreeLayer: o
  }) {
    g(this, Un);
    g(this, Sh, null);
    g(this, Fr, null);
    g(this, Tn, /* @__PURE__ */ new Map());
    g(this, Eh, null);
    this.div = t, f(this, Sh, e), f(this, Fr, s), f(this, Eh, o || null), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return n(this, Tn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    ia(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Hc(),
      annotationStorage: t.annotationStorage || new Yu(),
      enableComment: t.enableComment === !0,
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === Pt.POPUP;
      if (l) {
        const u = i.get(o.id);
        if (!u)
          continue;
        r.elements = u;
      } else if (o.rect[2] === o.rect[0] || o.rect[3] === o.rect[1])
        continue;
      r.data = o;
      const h = Rf.create(r);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await b(this, Un, yu).call(this, c, o.id, r.elements), h._isEditable && (n(this, Tn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    b(this, Un, wu).call(this);
  }
  async addLinkAnnotations(t, e) {
    const s = {
      data: null,
      layer: this.div,
      linkService: e,
      svgFactory: new Hc(),
      parent: this
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = lf._defaultBorderStyle), s.data = i;
      const r = Rf.create(s);
      if (!r.isRenderable)
        continue;
      const a = r.render();
      await b(this, Un, yu).call(this, a, i.id, null);
    }
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, ia(e, {
      rotation: t.rotation
    }), b(this, Un, wu).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, Tn).values());
  }
  getEditableAnnotation(t) {
    return n(this, Tn).get(t);
  }
  static get _defaultBorderStyle() {
    return Y(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: ca.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
};
Sh = new WeakMap(), Fr = new WeakMap(), Tn = new WeakMap(), Eh = new WeakMap(), Un = new WeakSet(), yu = async function(t, e, s) {
  var o, l;
  const i = t.firstChild || t, r = i.id = `${Wu}${e}`, a = await ((o = n(this, Eh)) == null ? void 0 : o.getAriaAttributes(r));
  if (a)
    for (const [h, c] of a)
      i.setAttribute(h, c);
  s ? s.at(-1).container.after(t) : (this.div.append(t), (l = n(this, Sh)) == null || l.moveElementInDOM(this.div, t, i, !1));
}, wu = function() {
  var e;
  if (!n(this, Fr))
    return;
  const t = this.div;
  for (const [s, i] of n(this, Fr)) {
    const r = t.querySelector(`[data-annotation-id="${s}"]`);
    if (!r)
      continue;
    i.className = "annotationContent";
    const {
      firstChild: a
    } = r;
    a ? a.nodeName === "CANVAS" ? a.replaceWith(i) : a.classList.contains("annotationContent") ? a.after(i) : a.before(i) : r.append(i);
    const o = n(this, Tn).get(s);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(s, r.id, i), o._hasNoCanvas = !1) : o.canvas = i);
  }
  n(this, Fr).clear();
};
let Au = lf;
const tc = /\r\n?|\n/g;
var ts, Le, Ch, Nr, Ie, Dt, sg, ig, ng, Ac, Gi, yc, wc, rg, _u, ag;
const pt = class pt extends ft {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    g(this, Dt);
    g(this, ts);
    g(this, Le, "");
    g(this, Ch, `${this.id}-editor`);
    g(this, Nr, null);
    g(this, Ie);
    k(this, "_colorPicker", null);
    f(this, ts, e.color || pt._defaultColor || ft._defaultLineColor), f(this, Ie, e.fontSize || pt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
  }
  static get _keyboardManager() {
    const e = pt.prototype, s = (a) => a.isEmpty(), i = na.TRANSLATE_SMALL, r = na.TRANSLATE_BIG;
    return Y(this, "_keyboardManager", new Vh([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    ft.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case J.FREETEXT_SIZE:
        pt._defaultFontSize = s;
        break;
      case J.FREETEXT_COLOR:
        pt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case J.FREETEXT_SIZE:
        b(this, Dt, sg).call(this, s);
        break;
      case J.FREETEXT_COLOR:
        b(this, Dt, ig).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[J.FREETEXT_SIZE, pt._defaultFontSize], [J.FREETEXT_COLOR, pt._defaultColor || ft._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[J.FREETEXT_SIZE, n(this, Ie)], [J.FREETEXT_COLOR, n(this, ts)]];
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new Bc(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return J.FREETEXT_COLOR;
  }
  get colorValue() {
    return n(this, ts);
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-pt._internalPadding * e, -(pt._internalPadding + n(this, Ie)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), f(this, Nr, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, Nr));
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    }), !0;
  }
  disableEditMode() {
    var e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, Ch)), this._isDraggable = !0, (e = n(this, Nr)) == null || e.abort(), f(this, Nr, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0) : !1;
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var s;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = n(this, Le), s = f(this, Le, b(this, Dt, ng).call(this).trimEnd());
    if (e === s)
      return;
    const i = (r) => {
      if (f(this, Le, r), !r) {
        this.remove();
        return;
      }
      b(this, Dt, wc).call(this), this._uiManager.rebuild(this), b(this, Dt, Ac).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), b(this, Dt, Ac).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    pt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  get canChangeContent() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, Ch)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, Ie)}px * var(--total-scale-factor))`, i.color = n(this, ts), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, u] = this.pageDimensions, [p, m] = this.pageTranslation;
        let A, y;
        switch (this.rotation) {
          case 0:
            A = e + (o[0] - p) / c, y = s + this.height - (o[1] - m) / u;
            break;
          case 90:
            A = e + (o[0] - p) / c, y = s - (o[1] - m) / u, [l, h] = [h, -l];
            break;
          case 180:
            A = e - this.width + (o[0] - p) / c, y = s - (o[1] - m) / u, [l, h] = [-l, -h];
            break;
          case 270:
            A = e + (o[0] - p - this.height * u) / c, y = s + (o[1] - m - this.width * c) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(A * r, y * a, l, h);
      } else
        this._moveAfterPaste(e, s);
      b(this, Dt, wc).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var A, y, v;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = b(A = pt, Gi, _u).call(A, s.getData("text") || "").replaceAll(tc, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, c = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const w = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(tc, "")), w !== this.editorDiv) {
        let S = c;
        for (const _ of this.editorDiv.childNodes) {
          if (_ === w) {
            S = u;
            continue;
          }
          S.push(b(y = pt, Gi, yc).call(y, _));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(tc, ""));
    } else if (l === this.editorDiv) {
      let w = c, S = 0;
      for (const _ of this.editorDiv.childNodes)
        S++ === h && (w = u), w.push(b(v = pt, Gi, yc).call(v, _));
    }
    f(this, Le, `${c.join(`
`)}${r}${u.join(`
`)}`), b(this, Dt, wc).call(this);
    const p = new Range();
    let m = Math.sumPrecise(c.map((w) => w.length));
    for (const {
      firstChild: w
    } of this.editorDiv.childNodes)
      if (w.nodeType === Node.TEXT_NODE) {
        const S = w.nodeValue.length;
        if (m <= S) {
          p.setStart(w, m), p.setEnd(w, m);
          break;
        }
        m -= S;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = pt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof Jp) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: u,
          id: p,
          popupRef: m,
          contentsObj: A
        },
        textContent: y,
        textPosition: v,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      if (!y || y.length === 0)
        return null;
      r = e = {
        annotationType: U.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: y.join(`
`),
        position: v,
        pageIndex: w - 1,
        rect: c.slice(0),
        rotation: u,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: m,
        comment: (A == null ? void 0 : A.str) || null
      };
    }
    const a = await super.deserialize(e, s, i);
    return f(a, Ie, e.fontSize), f(a, ts, O.makeHexColor(...e.color)), f(a, Le, b(o = pt, Gi, _u).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e.comment), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getPDFRect(), i = ft._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : n(this, ts)), r = {
      annotationType: U.FREETEXT,
      color: i,
      fontSize: n(this, Ie),
      value: b(this, Dt, rg).call(this),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return this.addComment(r), e ? (r.isCopy = !0, r) : this.annotationElementId && !b(this, Dt, ag).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (!s)
      return null;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${n(this, Ie)}px * var(--total-scale-factor))`, i.color = n(this, ts), s.replaceChildren();
    for (const a of n(this, Le).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const r = {
      rect: this.getPDFRect()
    };
    return r.popup = this.hasEditedComment ? this.comment : {
      text: n(this, Le)
    }, e.updateEdited(r), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
ts = new WeakMap(), Le = new WeakMap(), Ch = new WeakMap(), Nr = new WeakMap(), Ie = new WeakMap(), Dt = new WeakSet(), sg = function(e) {
  const s = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, Ie)) * this.parentScale), f(this, Ie, r), b(this, Dt, Ac).call(this);
  }, i = n(this, Ie);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ig = function(e) {
  const s = (r) => {
    var a;
    f(this, ts, this.editorDiv.style.color = r), (a = this._colorPicker) == null || a.update(r);
  }, i = n(this, ts);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ng = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(i = pt, Gi, yc).call(i, r)), s = r);
  return e.join(`
`);
}, Ac = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, Gi = new WeakSet(), yc = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(tc, "");
}, wc = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, Le))
    for (const e of n(this, Le).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, rg = function() {
  return n(this, Le).replaceAll(" ", " ");
}, _u = function(e) {
  return e.replaceAll(" ", " ");
}, ag = function(e) {
  const {
    value: s,
    fontSize: i,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, g(pt, Gi), k(pt, "_freeTextDefaultContent", ""), k(pt, "_internalPadding", 0), k(pt, "_defaultColor", null), k(pt, "_defaultFontSize", 10), k(pt, "_type", "freetext"), k(pt, "_editorType", U.FREETEXT);
let vu = pt;
class F {
  toSVGPath() {
    dt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    dt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    dt("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * r;
    return a;
  }
  static _translate(t, e, s, i) {
    i || (i = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2)
      i[r] = e + t[r], i[r + 1] = s + t[r + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, r) {
    switch (r) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
    }
  }
  static _normalizePagePoint(t, e, s) {
    switch (s) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, s, i, r, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + r) / 6, (5 * i + a) / 6, (s + r) / 2, (i + a) / 2];
  }
}
k(F, "PRECISION", 1e-4);
var Fe, gs, yo, wo, $s, q, Or, Br, Th, xh, vo, _o, xn, kh, id, nd, Ht, sl, og, lg, hg, cg, dg, ug;
const ti = class ti {
  constructor({
    x: t,
    y: e
  }, s, i, r, a, o = 0) {
    g(this, Ht);
    g(this, Fe);
    g(this, gs, []);
    g(this, yo);
    g(this, wo);
    g(this, $s, []);
    g(this, q, new Float32Array(18));
    g(this, Or);
    g(this, Br);
    g(this, Th);
    g(this, xh);
    g(this, vo);
    g(this, _o);
    g(this, xn, []);
    f(this, Fe, s), f(this, _o, r * i), f(this, wo, a), n(this, q).set([NaN, NaN, NaN, NaN, t, e], 6), f(this, yo, o), f(this, xh, n(ti, kh) * i), f(this, Th, n(ti, nd) * i), f(this, vo, i), n(this, xn).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, q)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var M;
    f(this, Or, t), f(this, Br, e);
    const [s, i, r, a] = n(this, Fe);
    let [o, l, h, c] = n(this, q).subarray(8, 12);
    const u = t - h, p = e - c, m = Math.hypot(u, p);
    if (m < n(this, Th))
      return !1;
    const A = m - n(this, xh), y = A / m, v = y * u, w = y * p;
    let S = o, _ = l;
    o = h, l = c, h += v, c += w, (M = n(this, xn)) == null || M.push(t, e);
    const E = -w / A, C = v / A, T = E * n(this, _o), x = C * n(this, _o);
    return n(this, q).set(n(this, q).subarray(2, 8), 0), n(this, q).set([h + T, c + x], 4), n(this, q).set(n(this, q).subarray(14, 18), 12), n(this, q).set([h - T, c - x], 16), isNaN(n(this, q)[6]) ? (n(this, $s).length === 0 && (n(this, q).set([o + T, l + x], 2), n(this, $s).push(NaN, NaN, NaN, NaN, (o + T - s) / r, (l + x - i) / a), n(this, q).set([o - T, l - x], 14), n(this, gs).push(NaN, NaN, NaN, NaN, (o - T - s) / r, (l - x - i) / a)), n(this, q).set([S, _, o, l, h, c], 6), !this.isEmpty()) : (n(this, q).set([S, _, o, l, h, c], 6), Math.abs(Math.atan2(_ - l, S - o) - Math.atan2(w, v)) < Math.PI / 2 ? ([o, l, h, c] = n(this, q).subarray(2, 6), n(this, $s).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [o, l, S, _] = n(this, q).subarray(14, 18), n(this, gs).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / r, ((_ + l) / 2 - i) / a), !0) : ([S, _, o, l, h, c] = n(this, q).subarray(0, 6), n(this, $s).push(((S + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [h, c, o, l, S, _] = n(this, q).subarray(12, 18), n(this, gs).push(((S + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, $s), e = n(this, gs);
    if (isNaN(n(this, q)[6]) && !this.isEmpty())
      return b(this, Ht, og).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    b(this, Ht, hg).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return b(this, Ht, lg).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new fg(t, e, s, i, r, a);
  }
  getOutlines() {
    var u;
    const t = n(this, $s), e = n(this, gs), s = n(this, q), [i, r, a, o] = n(this, Fe), l = new Float32Array((((u = n(this, xn)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, m = l.length - 2; p < m; p += 2)
      l[p] = (n(this, xn)[p] - i) / a, l[p + 1] = (n(this, xn)[p + 1] - r) / o;
    if (l[l.length - 2] = (n(this, Or) - i) / a, l[l.length - 1] = (n(this, Br) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, Ht, cg).call(this, l);
    const h = new Float32Array(n(this, $s).length + 24 + n(this, gs).length);
    let c = t.length;
    for (let p = 0; p < c; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    c = b(this, Ht, ug).call(this, h, c);
    for (let p = e.length - 6; p >= 6; p -= 6)
      for (let m = 0; m < 6; m += 2) {
        if (isNaN(e[p + m])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[p + m], h[c + 1] = e[p + m + 1], c += 2;
      }
    return b(this, Ht, dg).call(this, h, c), this.newFreeDrawOutline(h, l, n(this, Fe), n(this, vo), n(this, yo), n(this, wo));
  }
};
Fe = new WeakMap(), gs = new WeakMap(), yo = new WeakMap(), wo = new WeakMap(), $s = new WeakMap(), q = new WeakMap(), Or = new WeakMap(), Br = new WeakMap(), Th = new WeakMap(), xh = new WeakMap(), vo = new WeakMap(), _o = new WeakMap(), xn = new WeakMap(), kh = new WeakMap(), id = new WeakMap(), nd = new WeakMap(), Ht = new WeakSet(), sl = function() {
  const t = n(this, q).subarray(4, 6), e = n(this, q).subarray(16, 18), [s, i, r, a] = n(this, Fe);
  return [(n(this, Or) + (t[0] - e[0]) / 2 - s) / r, (n(this, Br) + (t[1] - e[1]) / 2 - i) / a, (n(this, Or) + (e[0] - t[0]) / 2 - s) / r, (n(this, Br) + (e[1] - t[1]) / 2 - i) / a];
}, og = function() {
  const [t, e, s, i] = n(this, Fe), [r, a, o, l] = b(this, Ht, sl).call(this);
  return `M${(n(this, q)[2] - t) / s} ${(n(this, q)[3] - e) / i} L${(n(this, q)[4] - t) / s} ${(n(this, q)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, q)[16] - t) / s} ${(n(this, q)[17] - e) / i} L${(n(this, q)[14] - t) / s} ${(n(this, q)[15] - e) / i} Z`;
}, lg = function(t) {
  const e = n(this, gs);
  t.push(`L${e[4]} ${e[5]} Z`);
}, hg = function(t) {
  const [e, s, i, r] = n(this, Fe), a = n(this, q).subarray(4, 6), o = n(this, q).subarray(16, 18), [l, h, c, u] = b(this, Ht, sl).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, cg = function(t) {
  const e = n(this, q), [s, i, r, a] = n(this, Fe), [o, l, h, c] = b(this, Ht, sl).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, n(this, Fe), n(this, vo), n(this, yo), n(this, wo));
}, dg = function(t, e) {
  const s = n(this, gs);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, ug = function(t, e) {
  const s = n(this, q).subarray(4, 6), i = n(this, q).subarray(16, 18), [r, a, o, l] = n(this, Fe), [h, c, u, p] = b(this, Ht, sl).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), e += 24;
}, g(ti, kh, 8), g(ti, id, 2), g(ti, nd, n(ti, kh) + n(ti, id));
let $c = ti;
var So, Hr, Ri, Ph, Ne, Mh, Ct, rd, pg;
class fg extends F {
  constructor(e, s, i, r, a, o) {
    super();
    g(this, rd);
    g(this, So);
    g(this, Hr, new Float32Array(4));
    g(this, Ri);
    g(this, Ph);
    g(this, Ne);
    g(this, Mh);
    g(this, Ct);
    f(this, Ct, e), f(this, Ne, s), f(this, So, i), f(this, Mh, r), f(this, Ri, a), f(this, Ph, o), this.lastPoint = [NaN, NaN], b(this, rd, pg).call(this, o);
    const [l, h, c, u] = n(this, Hr);
    for (let p = 0, m = e.length; p < m; p += 2)
      e[p] = (e[p] - l) / c, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, m = s.length; p < m; p += 2)
      s[p] = (s[p] - l) / c, s[p + 1] = (s[p + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${n(this, Ct)[4]} ${n(this, Ct)[5]}`];
    for (let s = 6, i = n(this, Ct).length; s < i; s += 6) {
      if (isNaN(n(this, Ct)[s])) {
        e.push(`L${n(this, Ct)[s + 4]} ${n(this, Ct)[s + 5]}`);
        continue;
      }
      e.push(`C${n(this, Ct)[s]} ${n(this, Ct)[s + 1]} ${n(this, Ct)[s + 2]} ${n(this, Ct)[s + 3]} ${n(this, Ct)[s + 4]} ${n(this, Ct)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = i - e, l = r - s;
    let h, c;
    switch (a) {
      case 0:
        h = F._rescale(n(this, Ct), e, r, o, -l), c = F._rescale(n(this, Ne), e, r, o, -l);
        break;
      case 90:
        h = F._rescaleAndSwap(n(this, Ct), e, s, o, l), c = F._rescaleAndSwap(n(this, Ne), e, s, o, l);
        break;
      case 180:
        h = F._rescale(n(this, Ct), i, s, -o, l), c = F._rescale(n(this, Ne), i, s, -o, l);
        break;
      case 270:
        h = F._rescaleAndSwap(n(this, Ct), i, r, -o, -l), c = F._rescaleAndSwap(n(this, Ne), i, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return n(this, Hr);
  }
  newOutliner(e, s, i, r, a, o = 0) {
    return new $c(e, s, i, r, a, o);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, Hr), [l, h, c, u] = n(this, So), p = a * c, m = o * u, A = i * c + l, y = r * u + h, v = this.newOutliner({
      x: n(this, Ne)[0] * p + A,
      y: n(this, Ne)[1] * m + y
    }, n(this, So), n(this, Mh), e, n(this, Ph), s ?? n(this, Ri));
    for (let w = 2; w < n(this, Ne).length; w += 2)
      v.add({
        x: n(this, Ne)[w] * p + A,
        y: n(this, Ne)[w + 1] * m + y
      });
    return v.getOutlines();
  }
}
So = new WeakMap(), Hr = new WeakMap(), Ri = new WeakMap(), Ph = new WeakMap(), Ne = new WeakMap(), Mh = new WeakMap(), Ct = new WeakMap(), rd = new WeakSet(), pg = function(e) {
  const s = n(this, Ct);
  let i = s[4], r = s[5];
  const a = [i, r, i, r];
  let o = i, l = r;
  const h = e ? Math.max : Math.min;
  for (let u = 6, p = s.length; u < p; u += 6) {
    const m = s[u + 4], A = s[u + 5];
    if (isNaN(s[u]))
      O.pointBoundingBox(m, A, a), l < A ? (o = m, l = A) : l === A && (o = h(o, m));
    else {
      const y = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      O.bezierBoundingBox(i, r, ...s.slice(u, u + 6), y), O.rectBoundingBox(...y, a), l < y[3] ? (o = y[2], l = y[3]) : l === y[3] && (o = h(o, y[2]));
    }
    i = m, r = A;
  }
  const c = n(this, Hr);
  c[0] = a[0] - n(this, Ri), c[1] = a[1] - n(this, Ri), c[2] = a[2] - a[0] + 2 * n(this, Ri), c[3] = a[3] - a[1] + 2 * n(this, Ri), this.lastPoint = [o, l];
};
var Rh, Dh, kn, ms, be, gg, vc, mg, bg, Eu;
class Su {
  constructor(t, e = 0, s = 0, i = !0) {
    g(this, be);
    g(this, Rh);
    g(this, Dh);
    g(this, kn, []);
    g(this, ms, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: m,
      y: A,
      width: y,
      height: v
    } of t) {
      const w = Math.floor((m - e) / a) * a, S = Math.ceil((m + y + e) / a) * a, _ = Math.floor((A - e) / a) * a, E = Math.ceil((A + v + e) / a) * a, C = [w, _, E, !0], T = [S, _, E, !1];
      n(this, kn).push(C, T), O.rectBoundingBox(w, _, S, E, r);
    }
    const o = r[2] - r[0] + 2 * s, l = r[3] - r[1] + 2 * s, h = r[0] - s, c = r[1] - s, u = n(this, kn).at(i ? -1 : -2), p = [u[0], u[2]];
    for (const m of n(this, kn)) {
      const [A, y, v] = m;
      m[0] = (A - h) / o, m[1] = (y - c) / l, m[2] = (v - c) / l;
    }
    f(this, Rh, new Float32Array([h, c, o, l])), f(this, Dh, p);
  }
  getOutlines() {
    n(this, kn).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, kn))
      e[3] ? (t.push(...b(this, be, Eu).call(this, e)), b(this, be, mg).call(this, e)) : (b(this, be, bg).call(this, e), t.push(...b(this, be, Eu).call(this, e)));
    return b(this, be, gg).call(this, t);
  }
}
Rh = new WeakMap(), Dh = new WeakMap(), kn = new WeakMap(), ms = new WeakMap(), be = new WeakSet(), gg = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, h] = a;
    e.push([o, l, a], [o, h, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2], h = e[a + 1][2];
    l.push(h), h.push(l), s.add(l), s.add(h);
  }
  const i = [];
  let r;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, l, h, c, u] = a;
    s.delete(a);
    let p = o, m = l;
    for (r = [o, h], i.push(r); ; ) {
      let A;
      if (s.has(c))
        A = c;
      else if (s.has(u))
        A = u;
      else
        break;
      s.delete(A), [o, l, h, c, u] = A, p !== o && (r.push(p, m, o, m === l ? l : h), p = o), m = m === l ? h : l;
    }
    r.push(p, m);
  }
  return new Fb(i, n(this, Rh), n(this, Dh));
}, vc = function(t) {
  const e = n(this, ms);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, mg = function([, t, e]) {
  const s = b(this, be, vc).call(this, t);
  n(this, ms).splice(s, 0, [t, e]);
}, bg = function([, t, e]) {
  const s = b(this, be, vc).call(this, t);
  for (let i = s; i < n(this, ms).length; i++) {
    const [r, a] = n(this, ms)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ms).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, ms)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ms).splice(i, 1);
      return;
    }
  }
}, Eu = function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = b(this, be, vc).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, ms)[o];
    for (let c = 0, u = r.length; c < u; c++) {
      const [, p, m] = r[c];
      if (!(h <= p || m <= l)) {
        if (p >= l) {
          if (m > h)
            r[c][1] = h;
          else {
            if (u === 1)
              return [];
            r.splice(c, 1), c--, u--;
          }
          continue;
        }
        r[c][2] = l, m > h && r.push([e, h, m]);
      }
    }
  }
  return r;
};
var Lh, Eo;
class Fb extends F {
  constructor(e, s, i) {
    super();
    g(this, Lh);
    g(this, Eo);
    f(this, Eo, e), f(this, Lh, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, Eo)) {
      let [i, r] = s;
      e.push(`M${i} ${r}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], l = s[a + 1];
        o === i ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = i - e, h = r - s;
    for (const c of n(this, Eo)) {
      const u = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        u[p] = e + c[p] * l, u[p + 1] = r - c[p + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return n(this, Lh);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
Lh = new WeakMap(), Eo = new WeakMap();
class Cu extends $c {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new Nb(t, e, s, i, r, a);
  }
}
class Nb extends fg {
  newOutliner(t, e, s, i, r, a = 0) {
    return new Cu(t, e, s, i, r, a);
  }
}
var Co, Ih, Di, $r, Fh, _e, Nh, Oh, zr, es, Oe, Jt, To, Li, oe, xo, ss, Bh, V, Tu, _c, Ag, yg, wg, xu, qn, ns, ma, vg, Sc, il, _g, Sg, Eg, Cg, Tg;
const st = class st extends ft {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    g(this, V);
    g(this, Co, null);
    g(this, Ih, 0);
    g(this, Di);
    g(this, $r, null);
    g(this, Fh, null);
    g(this, _e, null);
    g(this, Nh, null);
    g(this, Oh, 0);
    g(this, zr, null);
    g(this, es, null);
    g(this, Oe, null);
    g(this, Jt, !1);
    g(this, To, null);
    g(this, Li);
    g(this, oe, null);
    g(this, xo, "");
    g(this, ss);
    g(this, Bh, "");
    this.color = e.color || st._defaultColor, f(this, ss, e.thickness || st._defaultThickness), f(this, Li, e.opacity || st._defaultOpacity), f(this, Di, e.boxes || null), f(this, Bh, e.methodOfCreation || ""), f(this, xo, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (f(this, Jt, !0), b(this, V, _c).call(this, e), b(this, V, qn).call(this)) : n(this, Di) && (f(this, Co, e.anchorNode), f(this, Ih, e.anchorOffset), f(this, Nh, e.focusNode), f(this, Oh, e.focusOffset), b(this, V, Tu).call(this), b(this, V, qn).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = st.prototype;
    return Y(this, "_keyboardManager", new Vh([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: n(this, Jt) ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, ss),
      methodOfCreation: n(this, Bh)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  get commentColor() {
    return this.color;
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    var i;
    ft.initialize(e, s), st._defaultColor || (st._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case J.HIGHLIGHT_COLOR:
        st._defaultColor = s;
        break;
      case J.HIGHLIGHT_THICKNESS:
        st._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return n(this, To);
  }
  updateParams(e, s) {
    switch (e) {
      case J.HIGHLIGHT_COLOR:
        b(this, V, Ag).call(this, s);
        break;
      case J.HIGHLIGHT_THICKNESS:
        b(this, V, yg).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[J.HIGHLIGHT_COLOR, st._defaultColor], [J.HIGHLIGHT_THICKNESS, st._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[J.HIGHLIGHT_COLOR, this.color || st._defaultColor], [J.HIGHLIGHT_THICKNESS, n(this, ss) || st._defaultThickness], [J.HIGHLIGHT_FREE, n(this, Jt)]];
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", f(this, Fh, new Oc({
      editor: this
    }))]] : super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, V, il).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, V, il).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    b(this, V, xu).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, V, qn).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? b(this, V, xu).call(this) : e && (b(this, V, qn).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    n(this, Jt) ? (e = (e - this.rotation + 360) % 360, i = b(r = st, ns, ma).call(r, n(this, es).box, e)) : i = b(a = st, ns, ma).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(n(this, Oe), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(n(this, oe), {
      bbox: b(o = st, ns, ma).call(o, n(this, _e).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, xo) && (e.setAttribute("aria-label", n(this, xo)), e.setAttribute("role", "mark")), n(this, Jt) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, V, vg).bind(this), {
      signal: this._uiManager._signal
    });
    const s = f(this, zr, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = n(this, $r);
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), jf(this, n(this, zr), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, oe), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, oe), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, V, Sc).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, V, Sc).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, oe) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, oe), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, oe) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, oe), {
      rootClass: {
        selected: !1
      }
    }), n(this, Jt) || b(this, V, Sc).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, Jt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, Oe), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, oe), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, s, {
    target: i,
    x: r,
    y: a
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: c
    } = i.getBoundingClientRect(), u = new AbortController(), p = e.combinedSignal(u), m = (A) => {
      u.abort(), b(this, ns, Cg).call(this, e, A);
    };
    window.addEventListener("blur", m, {
      signal: p
    }), window.addEventListener("pointerup", m, {
      signal: p
    }), window.addEventListener("pointerdown", Mt, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", as, {
      signal: p
    }), i.addEventListener("pointermove", b(this, ns, Eg).bind(this, e), {
      signal: p
    }), this._freeHighlight = new Cu({
      x: r,
      y: a
    }, [o, l, h, c], e.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(e, s, i) {
    var y, v, w, S;
    let r = null;
    if (e instanceof tg) {
      const {
        data: {
          quadPoints: _,
          rect: E,
          rotation: C,
          id: T,
          color: x,
          opacity: P,
          popupRef: M,
          contentsObj: L
        },
        parent: {
          page: {
            pageNumber: R
          }
        }
      } = e;
      r = e = {
        annotationType: U.HIGHLIGHT,
        color: Array.from(x),
        opacity: P,
        quadPoints: _,
        boxes: null,
        pageIndex: R - 1,
        rect: E.slice(0),
        rotation: C,
        annotationElementId: T,
        id: T,
        deleted: !1,
        popupRef: M,
        comment: (L == null ? void 0 : L.str) || null
      };
    } else if (e instanceof Zu) {
      const {
        data: {
          inkLists: _,
          rect: E,
          rotation: C,
          id: T,
          color: x,
          borderStyle: {
            rawWidth: P
          },
          popupRef: M,
          contentsObj: L
        },
        parent: {
          page: {
            pageNumber: R
          }
        }
      } = e;
      r = e = {
        annotationType: U.HIGHLIGHT,
        color: Array.from(x),
        thickness: P,
        inkLists: _,
        boxes: null,
        pageIndex: R - 1,
        rect: E.slice(0),
        rotation: C,
        annotationElementId: T,
        id: T,
        deleted: !1,
        popupRef: M,
        comment: (L == null ? void 0 : L.str) || null
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, c = await super.deserialize(e, s, i);
    c.color = O.makeHexColor(...a), f(c, Li, h || 1), l && f(c, ss, e.thickness), c._initialData = r, e.comment && c.setCommentData(e.comment);
    const [u, p] = c.pageDimensions, [m, A] = c.pageTranslation;
    if (o) {
      const _ = f(c, Di, []);
      for (let E = 0; E < o.length; E += 8)
        _.push({
          x: (o[E] - m) / u,
          y: 1 - (o[E + 1] - A) / p,
          width: (o[E + 2] - o[E]) / u,
          height: (o[E + 1] - o[E + 5]) / p
        });
      b(y = c, V, Tu).call(y), b(v = c, V, qn).call(v), c.rotate(c.rotation);
    } else if (l) {
      f(c, Jt, !0);
      const _ = l[0], E = {
        x: _[0] - m,
        y: p - (_[1] - A)
      }, C = new Cu(E, [0, 0, u, p], 1, n(c, ss) / 2, !0, 1e-3);
      for (let P = 0, M = _.length; P < M; P += 2)
        E.x = _[P] - m, E.y = p - (_[P + 1] - A), C.add(E);
      const {
        id: T,
        clipPathId: x
      } = s.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: c.color,
          "fill-opacity": c._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: C.toSVGPath()
        }
      }, !0, !0);
      b(w = c, V, _c).call(w, {
        highlightOutlines: C.getOutlines(),
        highlightId: T,
        clipPathId: x
      }), b(S = c, V, qn).call(S), c.rotate(c.parentRotation);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getPDFRect(), i = ft._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), r = {
      annotationType: U.HIGHLIGHT,
      color: i,
      opacity: n(this, Li),
      thickness: n(this, ss),
      quadPoints: b(this, V, _g).call(this),
      outlines: b(this, V, Sg).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: b(this, V, il).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.addComment(r), this.annotationElementId && !b(this, V, Tg).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const s = {
      rect: this.getPDFRect()
    };
    return this.hasEditedComment && (s.popup = this.comment), e.updateEdited(s), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Co = new WeakMap(), Ih = new WeakMap(), Di = new WeakMap(), $r = new WeakMap(), Fh = new WeakMap(), _e = new WeakMap(), Nh = new WeakMap(), Oh = new WeakMap(), zr = new WeakMap(), es = new WeakMap(), Oe = new WeakMap(), Jt = new WeakMap(), To = new WeakMap(), Li = new WeakMap(), oe = new WeakMap(), xo = new WeakMap(), ss = new WeakMap(), Bh = new WeakMap(), V = new WeakSet(), Tu = function() {
  const e = new Su(n(this, Di), 1e-3);
  f(this, es, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, es).box;
  const s = new Su(n(this, Di), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  f(this, _e, s.getOutlines());
  const {
    lastPoint: i
  } = n(this, _e);
  f(this, To, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, _c = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, p;
  if (f(this, es, e), f(this, _e, e.getNewOutline(n(this, ss) / 2 + 1.5, 25e-4)), s >= 0)
    f(this, Oe, s), f(this, $r, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), f(this, oe, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, _e).box,
      path: {
        d: n(this, _e).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const m = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, Oe), {
      bbox: b(u = st, ns, ma).call(u, n(this, es).box, (m - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, oe), {
      bbox: b(p = st, ns, ma).call(p, n(this, _e).box, m),
      path: {
        d: n(this, _e).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [m, A] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * A / m, this.height = h * m / A;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [m, A] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * A / m, this.height = h * m / A;
      break;
    }
  }
  const {
    lastPoint: c
  } = n(this, _e);
  f(this, To, [(c[0] - a) / l, (c[1] - o) / h]);
}, Ag = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, f(this, Li, o), (l = this.parent) == null || l.drawLayer.updateProperties(n(this, Oe), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = n(this, Fh)) == null || h.updateColor(a);
  }, i = this.color, r = n(this, Li);
  this.addCommands({
    cmd: s.bind(this, e, st._defaultOpacity),
    undo: s.bind(this, i, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.getNonHCMColorName(e)
  }, !0);
}, yg = function(e) {
  const s = n(this, ss), i = (r) => {
    f(this, ss, r), b(this, V, wg).call(this, r);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, wg = function(e) {
  if (!n(this, Jt))
    return;
  b(this, V, _c).call(this, {
    highlightOutlines: n(this, es).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, xu = function() {
  n(this, Oe) === null || !this.parent || (this.parent.drawLayer.remove(n(this, Oe)), f(this, Oe, null), this.parent.drawLayer.remove(n(this, oe)), f(this, oe, null));
}, qn = function(e = this.parent) {
  n(this, Oe) === null && ({
    id: Lt(this, Oe)._,
    clipPathId: Lt(this, $r)._
  } = e.drawLayer.draw({
    bbox: n(this, es).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": n(this, Li)
    },
    rootClass: {
      highlight: !0,
      free: n(this, Jt)
    },
    path: {
      d: n(this, es).toSVGPath()
    }
  }, !1, !0), f(this, oe, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, Jt)
    },
    bbox: n(this, _e).box,
    path: {
      d: n(this, _e).toSVGPath()
    }
  }, n(this, Jt))), n(this, zr) && (n(this, zr).style.clipPath = n(this, $r)));
}, ns = new WeakSet(), ma = function([e, s, i, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, i];
    case 180:
      return [1 - e - i, 1 - s - r, i, r];
    case 270:
      return [s, 1 - e - i, r, i];
  }
  return [e, s, i, r];
}, vg = function(e) {
  st._keyboardManager.exec(this, e);
}, Sc = function(e) {
  if (!n(this, Co))
    return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, Co), n(this, Ih)) : s.setPosition(n(this, Nh), n(this, Oh));
}, il = function() {
  return n(this, Jt) ? this.rotation : 0;
}, _g = function() {
  if (n(this, Jt))
    return null;
  const [e, s] = this.pageDimensions, [i, r] = this.pageTranslation, a = n(this, Di), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: c,
    width: u,
    height: p
  } of a) {
    const m = h * e + i, A = (1 - c) * s + r;
    o[l] = o[l + 4] = m, o[l + 1] = o[l + 3] = A, o[l + 2] = o[l + 6] = m + u * e, o[l + 5] = o[l + 7] = A - p * s, l += 8;
  }
  return o;
}, Sg = function(e) {
  return n(this, es).serialize(e, b(this, V, il).call(this));
}, Eg = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, Cg = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Tg = function(e) {
  const {
    color: s
  } = this._initialData;
  return this.hasEditedComment || e.color.some((i, r) => i !== s[r]);
}, g(st, ns), k(st, "_defaultColor", null), k(st, "_defaultOpacity", 1), k(st, "_defaultThickness", 12), k(st, "_type", "highlight"), k(st, "_editorType", U.HIGHLIGHT), k(st, "_freeHighlightId", -1), k(st, "_freeHighlight", null), k(st, "_freeHighlightClipId", "");
let zc = st;
var Gr;
class xg {
  constructor() {
    g(this, Gr, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        e.startsWith("_") || this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    n(this, Gr)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Gr);
    return f(this, Gr, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    f(this, Gr, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    dt("Not implemented");
  }
}
Gr = new WeakMap();
var Be, ko, Gt, Ur, jr, Pn, Mn, Rn, Vr, Z, ku, Pu, Mu, nl, kg, Ec, rl, ba;
const N = class N extends ft {
  constructor(e) {
    super(e);
    g(this, Z);
    g(this, Be, null);
    g(this, ko);
    k(this, "_colorPicker", null);
    k(this, "_drawId", null);
    f(this, ko, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  _addOutlines(e) {
    e.drawOutlines && (b(this, Z, ku).call(this, e), b(this, Z, nl).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      i.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    dt("Not implemented");
  }
  static get typesMap() {
    dt("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(N, Gt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, r] of this.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [i, r] of this.constructor.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const r = this._drawingOptions, a = r[s], o = (l) => {
      var c, u;
      r.updateProperty(s, l);
      const h = n(this, Be).updateProperty(s, l);
      h && b(this, Z, rl).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && ((u = this._colorPicker) == null || u.update(l));
    };
    this.addCommands({
      cmd: o.bind(this, i),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties(n(this, Be).getPathResizingSVGProperties(b(this, Z, Ec).call(this)), {
      bbox: b(this, Z, ba).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties(n(this, Be).getPathResizedSVGProperties(b(this, Z, Ec).call(this)), {
      bbox: b(this, Z, ba).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: b(this, Z, ba).call(this)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties(n(this, Be).getPathTranslatedSVGProperties(b(this, Z, Ec).call(this), this.parentDimensions), {
      bbox: b(this, Z, ba).call(this)
    }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, ko) && (f(this, ko, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    b(this, Z, Mu).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, Z, nl).call(this), b(this, Z, rl).call(this, n(this, Be).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, Z, Mu).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, Z, nl).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties({
      bbox: b(this, Z, ba).call(this)
    }, n(this, Be).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && b(this, Z, rl).call(this, n(this, Be).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this._isCopy && (e = this.x, s = this.y);
    const i = super.render();
    i.classList.add("draw");
    const r = document.createElement("div");
    i.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal";
    const [a, o] = this.parentDimensions;
    return this.setDims(this.width * a, this.height * o), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, s), i;
  }
  static createDrawerInstance(e, s, i, r, a) {
    dt("Not implemented");
  }
  static startDrawing(e, s, i, r) {
    var v;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: c
    } = r;
    if (n(N, Mn) && n(N, Mn) !== c)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: p,
      height: m
    } = a.getBoundingClientRect(), A = f(N, Ur, new AbortController()), y = e.combinedSignal(A);
    if (n(N, Pn) || f(N, Pn, h), n(N, Mn) ?? f(N, Mn, c), window.addEventListener("pointerup", (w) => {
      var S;
      n(N, Pn) === w.pointerId ? this._endDraw(w) : (S = n(N, Rn)) == null || S.delete(w.pointerId);
    }, {
      signal: y
    }), window.addEventListener("pointercancel", (w) => {
      var S;
      n(N, Pn) === w.pointerId ? this._currentParent.endDrawingSession() : (S = n(N, Rn)) == null || S.delete(w.pointerId);
    }, {
      signal: y
    }), window.addEventListener("pointerdown", (w) => {
      n(N, Mn) === w.pointerType && ((n(N, Rn) || f(N, Rn, /* @__PURE__ */ new Set())).add(w.pointerId), n(N, Gt).isCancellable() && (n(N, Gt).removeLastElement(), n(N, Gt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: y
    }), window.addEventListener("contextmenu", as, {
      signal: y
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: y
    }), a.addEventListener("touchmove", (w) => {
      w.timeStamp === n(N, Vr) && Mt(w);
    }, {
      signal: y
    }), e.toggleDrawing(), (v = s._editorUndoBar) == null || v.hide(), n(N, Gt)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(N, Gt).startNew(o, l, p, m, u));
      return;
    }
    s.updateUIForDefaultProperties(this), f(N, Gt, this.createDrawerInstance(o, l, p, m, u)), f(N, jr, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(N, jr).toSVGProperties(), n(N, Gt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (f(N, Vr, -1), !n(N, Gt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: r
    } = e;
    if (n(N, Pn) === r) {
      if (((a = n(N, Rn)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(N, Gt).add(s, i)), f(N, Vr, e.timeStamp), Mt(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, f(N, Gt, null), f(N, jr, null), f(N, Mn, null), f(N, Vr, NaN)), n(N, Ur) && (n(N, Ur).abort(), f(N, Ur, null), f(N, Pn, NaN), f(N, Rn, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === s.div && s.drawLayer.updateProperties(this._currentDrawId, n(N, Gt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = n(N, Gt), r = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(r, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(r, i.removeLastElement());
          },
          mustExec: !1,
          type: J.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(J.DRAW_STEP), !n(N, Gt).isEmpty()) {
      const {
        pageDimensions: [i, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: n(N, Gt).getOutlines(i * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(N, jr),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o) {
    dt("Not implemented");
  }
  static async deserialize(e, s, i) {
    var u, p;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), b(u = c, Z, ku).call(u, {
      drawOutlines: h
    }), b(p = c, Z, nl).call(p), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, Be).serialize([s, i, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect()
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Be = new WeakMap(), ko = new WeakMap(), Gt = new WeakMap(), Ur = new WeakMap(), jr = new WeakMap(), Pn = new WeakMap(), Mn = new WeakMap(), Rn = new WeakMap(), Vr = new WeakMap(), Z = new WeakSet(), ku = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  f(this, Be, e), this._drawingOptions || (this._drawingOptions = i), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = b(this, Z, Pu).call(this, e, this.parent), b(this, Z, rl).call(this, e.box);
}, Pu = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(N._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, Mu = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, nl = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, Z, Pu).call(this, n(this, Be), e);
  }
}, kg = function([e, s, i, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [s, 1 - e, i * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [1 - s, e, i * (o / a), r * (a / o)];
    default:
      return [e, s, i, r];
  }
}, Ec = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - s, e, i * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [s, 1 - e, i * (a / o), r * (o / a)];
    default:
      return [e, s, i, r];
  }
}, rl = function(e) {
  if ([this.x, this.y, this.width, this.height] = b(this, Z, kg).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, ba = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - r, e, r, i];
    case 2:
      return [1 - e - i, 1 - s - r, i, r];
    case 3:
      return [s, 1 - e - i, r, i];
    case 4:
      return [e, s - i * (l / h), r * (h / l), i * (l / h)];
    case 5:
      return [1 - s, e, i * (l / h), r * (h / l)];
    case 6:
      return [1 - e - r * (h / l), 1 - s, r * (h / l), i * (l / h)];
    case 7:
      return [s - i * (l / h), 1 - e - r * (h / l), i * (l / h), r * (h / l)];
    case 8:
      return [e - i, s - r, i, r];
    case 9:
      return [1 - s, e - i, r, i];
    case 10:
      return [1 - e, 1 - s, i, r];
    case 11:
      return [s - r, 1 - e, r, i];
    case 12:
      return [e - r * (h / l), s, r * (h / l), i * (l / h)];
    case 13:
      return [1 - s - i * (l / h), e - r * (h / l), i * (l / h), r * (h / l)];
    case 14:
      return [1 - e, 1 - s - i * (l / h), r * (h / l), i * (l / h)];
    case 15:
      return [s, 1 - e, i * (l / h), r * (h / l)];
    default:
      return [e, s, i, r];
  }
}, k(N, "_currentDrawId", -1), k(N, "_currentParent", null), g(N, Gt, null), g(N, Ur, null), g(N, jr, null), g(N, Pn, NaN), g(N, Mn, null), g(N, Rn, null), g(N, Vr, NaN), k(N, "_INNER_MARGIN", 3);
let Gc = N;
var zs, Ut, jt, Wr, Po, de, Zt, is, Xr, qr, Yr, Mo, Cc;
class Ob {
  constructor(t, e, s, i, r, a) {
    g(this, Mo);
    g(this, zs, new Float64Array(6));
    g(this, Ut);
    g(this, jt);
    g(this, Wr);
    g(this, Po);
    g(this, de);
    g(this, Zt, "");
    g(this, is, 0);
    g(this, Xr, new Xh());
    g(this, qr);
    g(this, Yr);
    f(this, qr, s), f(this, Yr, i), f(this, Wr, r), f(this, Po, a), [t, e] = b(this, Mo, Cc).call(this, t, e);
    const o = f(this, Ut, [NaN, NaN, NaN, NaN, t, e]);
    f(this, de, [t, e]), f(this, jt, [{
      line: o,
      points: n(this, de)
    }]), n(this, zs).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && f(this, Po, e);
  }
  isEmpty() {
    return !n(this, jt) || n(this, jt).length === 0;
  }
  isCancellable() {
    return n(this, de).length <= 10;
  }
  add(t, e) {
    [t, e] = b(this, Mo, Cc).call(this, t, e);
    const [s, i, r, a] = n(this, zs).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, qr) * o, n(this, Yr) * l) <= 2 ? null : (n(this, de).push(t, e), isNaN(s) ? (n(this, zs).set([r, a, t, e], 2), n(this, Ut).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, zs)[0]) && n(this, Ut).splice(6, 6), n(this, zs).set([s, i, r, a, t, e], 0), n(this, Ut).push(...F.createBezierPoints(s, i, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (n(this, de).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, r) {
    f(this, qr, s), f(this, Yr, i), f(this, Wr, r), [t, e] = b(this, Mo, Cc).call(this, t, e);
    const a = f(this, Ut, [NaN, NaN, NaN, NaN, t, e]);
    f(this, de, [t, e]);
    const o = n(this, jt).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, jt).push({
      line: a,
      points: n(this, de)
    }), n(this, zs).set(a, 0), f(this, is, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, jt).at(-1);
  }
  setLastElement(t) {
    return n(this, jt) ? (n(this, jt).push(t), f(this, Ut, t.line), f(this, de, t.points), f(this, is, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, Xr).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, jt))
      return n(this, Xr).removeLastElement();
    n(this, jt).pop(), f(this, Zt, "");
    for (let t = 0, e = n(this, jt).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = n(this, jt)[t];
      f(this, Ut, s), f(this, de, i), f(this, is, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, Zt)
      }
    };
  }
  toSVGPath() {
    const t = F.svgRound(n(this, Ut)[4]), e = F.svgRound(n(this, Ut)[5]);
    if (n(this, de).length === 2)
      return f(this, Zt, `${n(this, Zt)} M ${t} ${e} Z`), n(this, Zt);
    if (n(this, de).length <= 6) {
      const i = n(this, Zt).lastIndexOf("M");
      f(this, Zt, `${n(this, Zt).slice(0, i)} M ${t} ${e}`), f(this, is, 6);
    }
    if (n(this, de).length === 4) {
      const i = F.svgRound(n(this, Ut)[10]), r = F.svgRound(n(this, Ut)[11]);
      return f(this, Zt, `${n(this, Zt)} L ${i} ${r}`), f(this, is, 12), n(this, Zt);
    }
    const s = [];
    n(this, is) === 0 && (s.push(`M ${t} ${e}`), f(this, is, 6));
    for (let i = n(this, is), r = n(this, Ut).length; i < r; i += 6) {
      const [a, o, l, h, c, u] = n(this, Ut).slice(i, i + 6).map(F.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
    }
    return f(this, Zt, n(this, Zt) + s.join(" ")), f(this, is, n(this, Ut).length), n(this, Zt);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, jt).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, Xr).build(n(this, jt), t, e, s, n(this, Wr), n(this, Po), i), f(this, zs, null), f(this, Ut, null), f(this, jt, null), f(this, Zt, null), n(this, Xr);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
zs = new WeakMap(), Ut = new WeakMap(), jt = new WeakMap(), Wr = new WeakMap(), Po = new WeakMap(), de = new WeakMap(), Zt = new WeakMap(), is = new WeakMap(), Xr = new WeakMap(), qr = new WeakMap(), Yr = new WeakMap(), Mo = new WeakSet(), Cc = function(t, e) {
  return F._normalizePoint(t, e, n(this, qr), n(this, Yr), n(this, Wr));
};
var ue, Hh, $h, He, Gs, Us, Ro, Do, Kr, ee, Js, Pg, Mg, Rg;
class Xh extends F {
  constructor() {
    super(...arguments);
    g(this, ee);
    g(this, ue);
    g(this, Hh, 0);
    g(this, $h);
    g(this, He);
    g(this, Gs);
    g(this, Us);
    g(this, Ro);
    g(this, Do);
    g(this, Kr);
  }
  build(e, s, i, r, a, o, l) {
    f(this, Gs, s), f(this, Us, i), f(this, Ro, r), f(this, Do, a), f(this, Kr, o), f(this, $h, l ?? 0), f(this, He, e), b(this, ee, Mg).call(this);
  }
  get thickness() {
    return n(this, Kr);
  }
  setLastElement(e) {
    return n(this, He).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, He).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of n(this, He)) {
      if (e.push(`M${F.svgRound(s[4])} ${F.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${F.svgRound(s[10])} ${F.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(F.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = [], [h, c, u, p] = b(this, ee, Pg).call(this);
    let m, A, y, v, w, S, _, E, C;
    switch (n(this, Do)) {
      case 0:
        C = F._rescale, m = e, A = s + r, y = i, v = -r, w = e + h * i, S = s + (1 - c - p) * r, _ = e + (h + u) * i, E = s + (1 - c) * r;
        break;
      case 90:
        C = F._rescaleAndSwap, m = e, A = s, y = i, v = r, w = e + c * i, S = s + h * r, _ = e + (c + p) * i, E = s + (h + u) * r;
        break;
      case 180:
        C = F._rescale, m = e + i, A = s, y = -i, v = r, w = e + (1 - h - u) * i, S = s + c * r, _ = e + (1 - h) * i, E = s + (c + p) * r;
        break;
      case 270:
        C = F._rescaleAndSwap, m = e + i, A = s + r, y = -i, v = -r, w = e + (1 - c - p) * i, S = s + (1 - h - u) * r, _ = e + (1 - c) * i, E = s + (1 - h) * r;
        break;
    }
    for (const {
      line: T,
      points: x
    } of n(this, He))
      o.push(C(T, m, A, y, v, a ? new Array(T.length) : null)), l.push(C(x, m, A, y, v, a ? new Array(x.length) : null));
    return {
      lines: o,
      points: l,
      rect: [w, S, _, E]
    };
  }
  static deserialize(e, s, i, r, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: c
  }) {
    const u = [];
    let p, m, A, y, v;
    switch (h) {
      case 0:
        v = F._rescale, p = -e / i, m = s / r + 1, A = 1 / i, y = -1 / r;
        break;
      case 90:
        v = F._rescaleAndSwap, p = -s / r, m = -e / i, A = 1 / r, y = 1 / i;
        break;
      case 180:
        v = F._rescale, p = e / i + 1, m = -s / r, A = -1 / i, y = 1 / r;
        break;
      case 270:
        v = F._rescaleAndSwap, p = s / r + 1, m = e / i + 1, A = -1 / r, y = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const S of l) {
        const _ = S.length;
        if (_ === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1]]));
          continue;
        }
        if (_ === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1], NaN, NaN, NaN, NaN, S[2], S[3]]));
          continue;
        }
        const E = new Float32Array(3 * (_ - 2));
        o.push(E);
        let [C, T, x, P] = S.subarray(0, 4);
        E.set([NaN, NaN, NaN, NaN, C, T], 0);
        for (let M = 4; M < _; M += 2) {
          const L = S[M], R = S[M + 1];
          E.set(F.createBezierPoints(C, T, x, P, L, R), (M - 2) * 3), [C, T, x, P] = [x, P, L, R];
        }
      }
    }
    for (let S = 0, _ = o.length; S < _; S++)
      u.push({
        line: v(o[S].map((E) => E ?? NaN), p, m, A, y),
        points: v(l[S].map((E) => E ?? NaN), p, m, A, y)
      });
    const w = new this.prototype.constructor();
    return w.build(u, i, r, 1, h, c, a), w;
  }
  get box() {
    return n(this, ue);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, ee, Rg).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = b(this, ee, Js).call(this);
    f(this, Gs, e), f(this, Us, s), f(this, Ro, i);
    const [o, l] = b(this, ee, Js).call(this), h = o - r, c = l - a, u = n(this, ue);
    return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
  }
  updateRotation(e) {
    return f(this, Hh, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, ue).map(F.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, ue);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, ue);
    let i = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, Hh)) {
      case 90:
        r = s / e, a = -e / s, l = e;
        break;
      case 180:
        i = -1, o = -1, l = e, h = s;
        break;
      case 270:
        r = -s / e, a = e / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${r} ${a} ${o} ${F.svgRound(l)} ${F.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, ee, Js).call(this), [l, h, c, u] = n(this, ue);
    if (Math.abs(c - a) <= F.PRECISION || Math.abs(u - o) <= F.PRECISION) {
      const v = e + i / 2 - (l + c / 2), w = s + r / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${v} ${w})`
        }
      };
    }
    const p = (i - 2 * a) / (c - 2 * a), m = (r - 2 * o) / (u - 2 * o), A = c / i, y = u / r;
    return {
      path: {
        "transform-origin": `${F.svgRound(l)} ${F.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${A} ${y}) translate(${F.svgRound(a)} ${F.svgRound(o)}) scale(${p} ${m}) translate(${F.svgRound(-a)} ${F.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, ee, Js).call(this), l = n(this, ue), [h, c, u, p] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = r, Math.abs(u - a) <= F.PRECISION || Math.abs(p - o) <= F.PRECISION) {
      const w = e + i / 2 - (h + u / 2), S = s + r / 2 - (c + p / 2);
      for (const {
        line: _,
        points: E
      } of n(this, He))
        F._translate(_, w, S, _), F._translate(E, w, S, E);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const m = (i - 2 * a) / (u - 2 * a), A = (r - 2 * o) / (p - 2 * o), y = -m * (h + a) + e + a, v = -A * (c + o) + s + o;
    if (m !== 1 || A !== 1 || y !== 0 || v !== 0)
      for (const {
        line: w,
        points: S
      } of n(this, He))
        F._rescale(w, y, v, m, A, w), F._rescale(S, y, v, m, A, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, ue), l = e - o[0], h = s - o[1];
    if (n(this, Gs) === r && n(this, Us) === a)
      for (const {
        line: c,
        points: u
      } of n(this, He))
        F._translate(c, l, h, c), F._translate(u, l, h, u);
    else {
      const c = n(this, Gs) / r, u = n(this, Us) / a;
      f(this, Gs, r), f(this, Us, a);
      for (const {
        line: p,
        points: m
      } of n(this, He))
        F._rescale(p, l, h, c, u, p), F._rescale(m, l, h, c, u, m);
      o[2] *= c, o[3] *= u;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, ue);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${F.svgRound(e[0])} ${F.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
}
ue = new WeakMap(), Hh = new WeakMap(), $h = new WeakMap(), He = new WeakMap(), Gs = new WeakMap(), Us = new WeakMap(), Ro = new WeakMap(), Do = new WeakMap(), Kr = new WeakMap(), ee = new WeakSet(), Js = function(e = n(this, Kr)) {
  const s = n(this, $h) + e / 2 * n(this, Ro);
  return n(this, Do) % 180 === 0 ? [s / n(this, Gs), s / n(this, Us)] : [s / n(this, Us), s / n(this, Gs)];
}, Pg = function() {
  const [e, s, i, r] = n(this, ue), [a, o] = b(this, ee, Js).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, Mg = function() {
  const e = f(this, ue, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, He)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6)
        O.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [c, u, p, m, A, y] = r.subarray(l, l + 6);
      O.bezierBoundingBox(a, o, c, u, p, m, A, y, e), a = A, o = y;
    }
  }
  const [s, i] = b(this, ee, Js).call(this);
  e[0] = ge(e[0] - s, 0, 1), e[1] = ge(e[1] - i, 0, 1), e[2] = ge(e[2] + s, 0, 1), e[3] = ge(e[3] + i, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, Rg = function(e) {
  const [s, i] = b(this, ee, Js).call(this);
  f(this, Kr, e);
  const [r, a] = b(this, ee, Js).call(this), [o, l] = [r - s, a - i], h = n(this, ue);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class pd extends xg {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: ft._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, e) {
    t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new pd(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var ad, Dg;
const wa = class wa extends Gc {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    g(this, ad);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    ft.initialize(e, s), this._defaultDrawingOptions = new pd(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return Y(this, "typesMap", /* @__PURE__ */ new Map([[J.INK_THICKNESS, "stroke-width"], [J.INK_COLOR, "stroke"], [J.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, r, a) {
    return new Ob(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return Xh.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof Zu) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: u,
          opacity: p,
          borderStyle: {
            rawWidth: m
          },
          popupRef: A,
          contentsObj: y
        },
        parent: {
          page: {
            pageNumber: v
          }
        }
      } = e;
      r = e = {
        annotationType: U.INK,
        color: Array.from(u),
        thickness: m,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: v - 1,
        rect: l.slice(0),
        rotation: h,
        annotationElementId: c,
        id: c,
        deleted: !1,
        popupRef: A,
        comment: (y == null ? void 0 : y.str) || null
      };
    }
    const a = await super.deserialize(e, s, i);
    return a._initialData = r, e.comment && a.setCommentData(e.comment), a;
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new Bc(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return J.INK_COLOR;
  }
  get colorValue() {
    return this._drawingOptions.stroke;
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: s,
      parent: i
    } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: s,
    opacity: i
  }) {
    this._drawingOptions = wa.getDefaultDrawingOptions({
      stroke: O.makeHexColor(...e),
      "stroke-width": s,
      "stroke-opacity": i
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: i,
      rect: r
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: a,
        "stroke-opacity": o,
        "stroke-width": l
      }
    } = this, h = {
      annotationType: U.INK,
      color: ft._colorManager.convert(a),
      opacity: o,
      thickness: l,
      paths: {
        lines: s,
        points: i
      },
      pageIndex: this.pageIndex,
      rect: r,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return this.addComment(h), e ? (h.isCopy = !0, h) : this.annotationElementId && !b(this, ad, Dg).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1), r = {
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s
    };
    return this.hasEditedComment && (r.popup = this.comment), e.updateEdited(r), null;
  }
};
ad = new WeakSet(), Dg = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, k(wa, "_type", "ink"), k(wa, "_editorType", U.INK), k(wa, "_defaultDrawingOptions", null);
let Ru = wa;
class Du extends Xh {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const ec = 8, zo = 3;
var Qr, nt, Lu, bs, Lg, Ig, Iu, Tc, Fg, Ng, Og, Fu, Nu, Bg;
class $i {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: i
  }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1), c = h.getContext("2d", {
      alpha: !1
    });
    const u = 200, p = c.font = `${s} ${i} ${u}px ${e}`, {
      actualBoundingBoxLeft: m,
      actualBoundingBoxRight: A,
      actualBoundingBoxAscent: y,
      actualBoundingBoxDescent: v,
      fontBoundingBoxAscent: w,
      fontBoundingBoxDescent: S,
      width: _
    } = c.measureText(t), E = 1.5, C = Math.ceil(Math.max(Math.abs(m) + Math.abs(A) || 0, _) * E), T = Math.ceil(Math.max(Math.abs(y) + Math.abs(v) || u, Math.abs(w) + Math.abs(S) || u) * E);
    h = new OffscreenCanvas(C, T), c = h.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), c.font = p, c.filter = "grayscale(1)", c.fillStyle = "white", c.fillRect(0, 0, C, T), c.fillStyle = "black", c.fillText(t, C * (E - 1) / 2, T * (3 - E) / 2);
    const x = b(this, nt, Fu).call(this, c.getImageData(0, 0, C, T).data), P = b(this, nt, Og).call(this, x), M = b(this, nt, Nu).call(this, P), L = b(this, nt, Iu).call(this, x, C, T, M);
    return this.processDrawnLines({
      lines: {
        curves: L,
        width: C,
        height: T
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t, e, s, i, r) {
    const [a, o, l] = b(this, nt, Bg).call(this, t), [h, c] = b(this, nt, Ng).call(this, a, o, l, Math.hypot(o, l) * n(this, Qr).sigmaSFactor, n(this, Qr).sigmaR, n(this, Qr).kernelSize), u = b(this, nt, Nu).call(this, c), p = b(this, nt, Iu).call(this, h, o, l, u);
    return this.processDrawnLines({
      lines: {
        curves: p,
        width: o,
        height: l
      },
      pageWidth: e,
      pageHeight: s,
      rotation: i,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: s,
    rotation: i,
    innerMargin: r,
    mustSmooth: a,
    areContours: o
  }) {
    i % 180 !== 0 && ([e, s] = [s, e]);
    const {
      curves: l,
      width: h,
      height: c
    } = t, u = t.thickness ?? 0, p = [], m = Math.min(e / h, s / c), A = m / e, y = m / s, v = [];
    for (const {
      points: S
    } of l) {
      const _ = a ? b(this, nt, Fg).call(this, S) : S;
      if (!_)
        continue;
      v.push(_);
      const E = _.length, C = new Float32Array(E), T = new Float32Array(3 * (E === 2 ? 2 : E - 2));
      if (p.push({
        line: T,
        points: C
      }), E === 2) {
        C[0] = _[0] * A, C[1] = _[1] * y, T.set([NaN, NaN, NaN, NaN, C[0], C[1]], 0);
        continue;
      }
      let [x, P, M, L] = _;
      x *= A, P *= y, M *= A, L *= y, C.set([x, P, M, L], 0), T.set([NaN, NaN, NaN, NaN, x, P], 0);
      for (let R = 4; R < E; R += 2) {
        const G = C[R] = _[R] * A, X = C[R + 1] = _[R + 1] * y;
        T.set(F.createBezierPoints(x, P, M, L, G, X), (R - 2) * 3), [x, P, M, L] = [M, L, G, X];
      }
    }
    if (p.length === 0)
      return null;
    const w = o ? new Du() : new Xh();
    return w.build(p, e, s, 1, i, o ? 0 : u, r), {
      outline: w,
      newCurves: v,
      areContours: o,
      thickness: u,
      width: h,
      height: c
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: s,
    width: i,
    height: r
  }) {
    let a = 1 / 0, o = -1 / 0, l = 0;
    for (const _ of t) {
      l += _.length;
      for (let E = 2, C = _.length; E < C; E++) {
        const T = _[E] - _[E - 2];
        a = Math.min(a, T), o = Math.max(o, T);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const c = t.length, u = ec + zo * c, p = new Uint32Array(u);
    let m = 0;
    p[m++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * c) * h.BYTES_PER_ELEMENT, p[m++] = 0, p[m++] = i, p[m++] = r, p[m++] = e ? 0 : 1, p[m++] = Math.max(0, Math.floor(s ?? 0)), p[m++] = c, p[m++] = h.BYTES_PER_ELEMENT;
    for (const _ of t)
      p[m++] = _.length - 2, p[m++] = _[0], p[m++] = _[1];
    const A = new CompressionStream("deflate-raw"), y = A.writable.getWriter();
    await y.ready, y.write(p);
    const v = h.prototype.constructor;
    for (const _ of t) {
      const E = new v(_.length - 2);
      for (let C = 2, T = _.length; C < T; C++)
        E[C - 2] = _[C] - _[C - 2];
      y.write(E);
    }
    y.close();
    const w = await new Response(A.readable).arrayBuffer(), S = new Uint8Array(w);
    return Bf(S);
  }
  static async decompressSignature(t) {
    try {
      const e = nm(t), {
        readable: s,
        writable: i
      } = new DecompressionStream("deflate-raw"), r = i.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null, o = 0;
      for await (const _ of s)
        a || (a = new Uint8Array(new Uint32Array(_.buffer, 0, 4)[0])), a.set(_, o), o += _.length;
      const l = new Uint32Array(a.buffer, 0, a.length >> 2), h = l[1];
      if (h !== 0)
        throw new Error(`Invalid version: ${h}`);
      const c = l[2], u = l[3], p = l[4] === 0, m = l[5], A = l[6], y = l[7], v = [], w = (ec + zo * A) * Uint32Array.BYTES_PER_ELEMENT;
      let S;
      switch (y) {
        case Int8Array.BYTES_PER_ELEMENT:
          S = new Int8Array(a.buffer, w);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          S = new Int16Array(a.buffer, w);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          S = new Int32Array(a.buffer, w);
          break;
      }
      o = 0;
      for (let _ = 0; _ < A; _++) {
        const E = l[zo * _ + ec], C = new Float32Array(E + 2);
        v.push(C);
        for (let T = 0; T < zo - 1; T++)
          C[T] = l[zo * _ + ec + T + 1];
        for (let T = 0; T < E; T++)
          C[T + 2] = C[T] + S[o++];
      }
      return {
        areContours: p,
        thickness: m,
        outlines: v,
        width: c,
        height: u
      };
    } catch (e) {
      return j(`decompressSignature: ${e}`), null;
    }
  }
}
Qr = new WeakMap(), nt = new WeakSet(), Lu = function(t, e, s, i) {
  return s -= t, i -= e, s === 0 ? i > 0 ? 0 : 4 : s === 1 ? i + 6 : 2 - i;
}, bs = new WeakMap(), Lg = function(t, e, s, i, r, a, o) {
  const l = b(this, nt, Lu).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (-h + l - o + 16) % 8, u = n(this, bs)[2 * c], p = n(this, bs)[2 * c + 1];
    if (t[(s + u) * e + (i + p)] !== 0)
      return c;
  }
  return -1;
}, Ig = function(t, e, s, i, r, a, o) {
  const l = b(this, nt, Lu).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (h + l + o + 16) % 8, u = n(this, bs)[2 * c], p = n(this, bs)[2 * c + 1];
    if (t[(s + u) * e + (i + p)] !== 0)
      return c;
  }
  return -1;
}, Iu = function(t, e, s, i) {
  const r = t.length, a = new Int32Array(r);
  for (let c = 0; c < r; c++)
    a[c] = t[c] <= i ? 1 : 0;
  for (let c = 1; c < s - 1; c++)
    a[c * e] = a[c * e + e - 1] = 0;
  for (let c = 0; c < e; c++)
    a[c] = a[e * s - 1 - c] = 0;
  let o = 1, l;
  const h = [];
  for (let c = 1; c < s - 1; c++) {
    l = 1;
    for (let u = 1; u < e - 1; u++) {
      const p = c * e + u, m = a[p];
      if (m === 0)
        continue;
      let A = c, y = u;
      if (m === 1 && a[p - 1] === 0)
        o += 1, y -= 1;
      else if (m >= 1 && a[p + 1] === 0)
        o += 1, y += 1, m > 1 && (l = m);
      else {
        m !== 1 && (l = Math.abs(m));
        continue;
      }
      const v = [u, c], w = y === u + 1, S = {
        isHole: w,
        points: v,
        id: o,
        parent: 0
      };
      h.push(S);
      let _;
      for (const R of h)
        if (R.id === l) {
          _ = R;
          break;
        }
      _ ? _.isHole ? S.parent = w ? _.parent : l : S.parent = w ? l : _.parent : S.parent = w ? l : 0;
      const E = b(this, nt, Lg).call(this, a, e, c, u, A, y, 0);
      if (E === -1) {
        a[p] = -o, a[p] !== 1 && (l = Math.abs(a[p]));
        continue;
      }
      let C = n(this, bs)[2 * E], T = n(this, bs)[2 * E + 1];
      const x = c + C, P = u + T;
      A = x, y = P;
      let M = c, L = u;
      for (; ; ) {
        const R = b(this, nt, Ig).call(this, a, e, M, L, A, y, 1);
        C = n(this, bs)[2 * R], T = n(this, bs)[2 * R + 1];
        const G = M + C, X = L + T;
        v.push(X, G);
        const K = M * e + L;
        if (a[K + 1] === 0 ? a[K] = -o : a[K] === 1 && (a[K] = o), G === c && X === u && M === x && L === P) {
          a[p] !== 1 && (l = Math.abs(a[p]));
          break;
        } else
          A = M, y = L, M = G, L = X;
      }
    }
  }
  return h;
}, Tc = function(t, e, s, i) {
  if (s - e <= 4) {
    for (let x = e; x < s - 2; x += 2)
      i.push(t[x], t[x + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, l = t[s - 3] - a, h = Math.hypot(o, l), c = o / h, u = l / h, p = c * a - u * r, m = l / o, A = 1 / h, y = Math.atan(m), v = Math.cos(y), w = Math.sin(y), S = A * (Math.abs(v) + Math.abs(w)), _ = A * (1 - S + S ** 2), E = Math.max(Math.atan(Math.abs(w + v) * _), Math.atan(Math.abs(w - v) * _));
  let C = 0, T = e;
  for (let x = e + 2; x < s - 2; x += 2) {
    const P = Math.abs(p - c * t[x + 1] + u * t[x]);
    P > C && (T = x, C = P);
  }
  C > (h * E) ** 2 ? (b(this, nt, Tc).call(this, t, e, T + 2, i), b(this, nt, Tc).call(this, t, T, s, i)) : i.push(r, a);
}, Fg = function(t) {
  const e = [], s = t.length;
  return b(this, nt, Tc).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, Ng = function(t, e, s, i, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * i ** 2, h = a >> 1;
  for (let y = 0; y < a; y++) {
    const v = (y - h) ** 2;
    for (let w = 0; w < a; w++)
      o[y * a + w] = Math.exp((v + (w - h) ** 2) / l);
  }
  const c = new Float32Array(256), u = -2 * r ** 2;
  for (let y = 0; y < 256; y++)
    c[y] = Math.exp(y ** 2 / u);
  const p = t.length, m = new Uint8Array(p), A = new Uint32Array(256);
  for (let y = 0; y < s; y++)
    for (let v = 0; v < e; v++) {
      const w = y * e + v, S = t[w];
      let _ = 0, E = 0;
      for (let T = 0; T < a; T++) {
        const x = y + T - h;
        if (!(x < 0 || x >= s))
          for (let P = 0; P < a; P++) {
            const M = v + P - h;
            if (M < 0 || M >= e)
              continue;
            const L = t[x * e + M], R = o[T * a + P] * c[Math.abs(L - S)];
            _ += L * R, E += R;
          }
      }
      const C = m[w] = Math.round(_ / E);
      A[C]++;
    }
  return [m, A];
}, Og = function(t) {
  const e = new Uint32Array(256);
  for (const s of t)
    e[s]++;
  return e;
}, Fu = function(t) {
  const e = t.length, s = new Uint8ClampedArray(e >> 2);
  let i = -1 / 0, r = 1 / 0;
  for (let o = 0, l = s.length; o < l; o++) {
    const h = s[o] = t[o << 2];
    i = Math.max(i, h), r = Math.min(r, h);
  }
  const a = 255 / (i - r);
  for (let o = 0, l = s.length; o < l; o++)
    s[o] = (s[o] - r) * a;
  return s;
}, Nu = function(t) {
  let e, s = -1 / 0, i = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r, o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > s && (e - a > i && (i = e - a, o = e - 1), s = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--)
    ;
  return e;
}, Bg = function(t) {
  const e = t, {
    width: s,
    height: i
  } = t, {
    maxDim: r
  } = n(this, Qr);
  let a = s, o = i;
  if (s > r || i > r) {
    let p = s, m = i, A = Math.log2(Math.max(s, i) / r);
    const y = Math.floor(A);
    A = A === y ? y - 1 : y;
    for (let w = 0; w < A; w++) {
      a = Math.ceil(p / 2), o = Math.ceil(m / 2);
      const S = new OffscreenCanvas(a, o);
      S.getContext("2d").drawImage(t, 0, 0, p, m, 0, 0, a, o), p = a, m = o, t !== e && t.close(), t = S.transferToImageBitmap();
    }
    const v = Math.min(r / a, r / o);
    a = Math.round(a * v), o = Math.round(o * v);
  }
  const h = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  h.fillStyle = "white", h.fillRect(0, 0, a, o), h.filter = "grayscale(1)", h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const c = h.getImageData(0, 0, a, o).data;
  return [b(this, nt, Fu).call(this, c), a, o];
}, g($i, nt), g($i, Qr, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), g($i, bs, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class tf extends xg {
  constructor() {
    super(), super.updateProperties({
      fill: ft._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new tf();
    return t.updateAll(this), t;
  }
}
class ef extends pd {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: ft._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new ef(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Dn, js, Ln, Jr;
const Ee = class Ee extends Gc {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    g(this, Dn, !1);
    g(this, js, null);
    g(this, Ln, null);
    g(this, Jr, null);
    this._willKeepAspectRatio = !0, f(this, Ln, e.signatureData || null), f(this, js, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    ft.initialize(e, s), this._defaultDrawingOptions = new tf(), this._defaultDrawnSignatureOptions = new ef(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return Y(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!n(this, js)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasDescription");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  get isResizable() {
    return !0;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    const {
      _isCopy: i
    } = this;
    if (i && (this._isCopy = !1, e = this.x, s = this.y), super.render(), this._drawId === null)
      if (n(this, Ln)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: h,
          heightInPage: c
        } = n(this, Ln), {
          rawDims: {
            pageWidth: u,
            pageHeight: p
          },
          rotation: m
        } = this.parent.viewport, A = $i.processDrawnLines({
          lines: r,
          pageWidth: u,
          pageHeight: p,
          rotation: m,
          innerMargin: Ee._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(A, c, l, h);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: n(this, js) || ""
      }));
    return i && (this._isCopy = !0, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    f(this, Jr, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, Jr);
  }
  get description() {
    return n(this, js);
  }
  set description(e) {
    f(this, js, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: e
    })), super.addEditToolbar().then((s) => {
      s == null || s.updateEditSignatureButton(e);
    }));
  }
  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: s,
      thickness: i,
      width: r,
      height: a
    } = n(this, Ln), o = Math.max(r, a), l = $i.processDrawnLines({
      lines: {
        curves: e.map((h) => ({
          points: h
        })),
        thickness: i,
        width: r,
        height: a
      },
      pageWidth: o,
      pageHeight: o,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: !1,
      areContours: s
    });
    return {
      areContours: s,
      outline: l.outline
    };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(e, s, i, r) {
    const {
      x: a,
      y: o
    } = this, {
      outline: l
    } = f(this, Ln, e);
    f(this, Dn, l instanceof Du), this.description = i;
    let h;
    n(this, Dn) ? h = Ee.getDefaultDrawingOptions() : (h = Ee._defaultDrawnSignatureOptions.clone(), h.updateProperties({
      "stroke-width": l.thickness
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: h
    });
    const [c, u] = this.parentDimensions, [, p] = this.pageDimensions;
    let m = s / p;
    m = m >= 1 ? 0.5 : m, this.width *= m / this.height, this.width >= 1 && (m *= 0.9 / this.width, this.width = 0.9), this.height = m, this.setDims(c * this.width, u * this.height), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!i
      }
    }), this.div.hidden = !1;
  }
  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return $i.process(e, s, i, r, Ee._INNER_MARGIN);
  }
  getFromText(e, s) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return $i.extractContoursFromText(e, s, i, r, a, Ee._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return $i.processDrawnLines({
      lines: e,
      pageWidth: s,
      pageHeight: i,
      rotation: r,
      innerMargin: Ee._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: s
  }) {
    e ? this._drawingOptions = Ee.getDefaultDrawingOptions() : (this._drawingOptions = Ee._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      "stroke-width": s
    }));
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    const {
      lines: s,
      points: i,
      rect: r
    } = this.serializeDraw(e), {
      _drawingOptions: {
        "stroke-width": a
      }
    } = this, o = {
      annotationType: U.SIGNATURE,
      isSignature: !0,
      areContours: n(this, Dn),
      color: [0, 0, 0],
      thickness: n(this, Dn) ? 0 : a,
      pageIndex: this.pageIndex,
      rect: r,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return this.addComment(o), e ? (o.paths = {
      lines: s,
      points: i
    }, o.uuid = n(this, Jr), o.isCopy = !0) : o.lines = s, n(this, js) && (o.accessibilityData = {
      type: "Figure",
      alt: n(this, js)
    }), o;
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return o.areContours ? Du.deserialize(e, s, i, r, a, o) : Xh.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    var a;
    const r = await super.deserialize(e, s, i);
    return f(r, Dn, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || "", f(r, Jr, e.uuid), r;
  }
};
Dn = new WeakMap(), js = new WeakMap(), Ln = new WeakMap(), Jr = new WeakMap(), k(Ee, "_type", "signature"), k(Ee, "_editorType", U.SIGNATURE), k(Ee, "_defaultDrawingOptions", null);
let Ou = Ee;
var bt, Vt, In, Ii, Fn, Lo, Fi, Zr, Vs, $e, Io, tt, al, ol, xc, kc, Pc, Hu, Mc, Hg;
class Bu extends ft {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    g(this, tt);
    g(this, bt, null);
    g(this, Vt, null);
    g(this, In, null);
    g(this, Ii, null);
    g(this, Fn, null);
    g(this, Lo, "");
    g(this, Fi, null);
    g(this, Zr, !1);
    g(this, Vs, null);
    g(this, $e, !1);
    g(this, Io, !1);
    f(this, Ii, e.bitmapUrl), f(this, Fn, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    ft.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return Md.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor({
      mode: U.STAMP
    }, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: r,
        width: a,
        height: o,
        channels: r.length / (a * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var e;
    n(this, Vt) && (f(this, bt, null), this._uiManager.imageManager.deleteId(n(this, Vt)), (e = n(this, Fi)) == null || e.remove(), f(this, Fi, null), n(this, Vs) && (clearTimeout(n(this, Vs)), f(this, Vs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, Vt) && b(this, tt, xc).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, Vt) && n(this, Fi) === null && b(this, tt, xc).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, In) || n(this, bt) || n(this, Ii) || n(this, Fn) || n(this, Vt) || n(this, Zr));
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, Zr) || (n(this, bt) ? b(this, tt, kc).call(this) : b(this, tt, xc).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const {
      id: i,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), i && this._uiManager.imageManager.isValidId(i) && (f(this, Vt, i), r && f(this, bt, r), f(this, Zr, !1), b(this, tt, kc).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, Vs) !== null && clearTimeout(n(this, Vs)), f(this, Vs, setTimeout(() => {
      f(this, Vs, null), b(this, tt, Hu).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    var m;
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, bt), o = new Xs();
    let l = n(this, bt), h = r, c = a, u = null;
    if (s) {
      if (r > s || a > s) {
        const P = Math.min(s / r, s / a);
        h = Math.floor(r * P), c = Math.floor(a * P);
      }
      u = document.createElement("canvas");
      const A = u.width = Math.ceil(h * o.sx), y = u.height = Math.ceil(c * o.sy);
      n(this, $e) || (l = b(this, tt, Pc).call(this, A, y));
      const v = u.getContext("2d");
      v.filter = this._uiManager.hcmFilter;
      let w = "white", S = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? S = "black" : (m = window.matchMedia) != null && m.call(window, "(prefers-color-scheme: dark)").matches && (w = "#8f8f9d", S = "#42414d");
      const _ = 15, E = _ * o.sx, C = _ * o.sy, T = new OffscreenCanvas(E * 2, C * 2), x = T.getContext("2d");
      x.fillStyle = w, x.fillRect(0, 0, E * 2, C * 2), x.fillStyle = S, x.fillRect(0, 0, E, C), x.fillRect(E, C, E, C), v.fillStyle = v.createPattern(T, "repeat"), v.fillRect(0, 0, A, y), v.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, y);
    }
    let p = null;
    if (i) {
      let A, y;
      if (o.symmetric && l.width < e && l.height < e)
        A = l.width, y = l.height;
      else if (l = n(this, bt), r > e || a > e) {
        const S = Math.min(e / r, e / a);
        A = Math.floor(r * S), y = Math.floor(a * S), n(this, $e) || (l = b(this, tt, Pc).call(this, A, y));
      }
      const w = new OffscreenCanvas(A, y).getContext("2d", {
        willReadFrequently: !0
      });
      w.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, y), p = {
        width: A,
        height: y,
        data: w.getImageData(0, 0, A, y).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: c,
      imageData: p
    };
  }
  static async deserialize(e, s, i) {
    var v;
    let r = null, a = !1;
    if (e instanceof eg) {
      const {
        data: {
          rect: w,
          rotation: S,
          id: _,
          structParent: E,
          popupRef: C,
          contentsObj: T
        },
        container: x,
        parent: {
          page: {
            pageNumber: P
          }
        },
        canvas: M
      } = e;
      let L, R;
      M ? (delete e.canvas, {
        id: L,
        bitmap: R
      } = i.imageManager.getFromCanvas(x.id, M), M.remove()) : (a = !0, e._hasNoCanvas = !0);
      const G = ((v = await s._structTree.getAriaAttributes(`${Wu}${_}`)) == null ? void 0 : v.get("aria-label")) || "";
      r = e = {
        annotationType: U.STAMP,
        bitmapId: L,
        bitmap: R,
        pageIndex: P - 1,
        rect: w.slice(0),
        rotation: S,
        annotationElementId: _,
        id: _,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: G
        },
        isSvg: !1,
        structParent: E,
        popupRef: C,
        comment: (T == null ? void 0 : T.str) || null
      };
    }
    const o = await super.deserialize(e, s, i), {
      rect: l,
      bitmap: h,
      bitmapUrl: c,
      bitmapId: u,
      isSvg: p,
      accessibilityData: m
    } = e;
    a ? (i.addMissingCanvas(e.id, o), f(o, Zr, !0)) : u && i.imageManager.isValidId(u) ? (f(o, Vt, u), h && f(o, bt, h)) : f(o, Ii, c), f(o, $e, p);
    const [A, y] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / A, o.height = (l[3] - l[1]) / y, m && (o.altTextData = m), o._initialData = r, e.comment && o.setCommentData(e.comment), f(o, Io, !!r), o;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: U.STAMP,
      bitmapId: n(this, Vt),
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      isSvg: n(this, $e),
      structTreeParentId: this._structTreeParentId
    };
    if (this.addComment(i), e)
      return i.bitmapUrl = b(this, tt, Mc).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i.isCopy = !0, i;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = b(this, tt, Hg).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = n(this, $e) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, Vt)))
      s.stamps.set(n(this, Vt), {
        area: o,
        serialized: i
      }), i.bitmap = b(this, tt, Mc).call(this, !1);
    else if (n(this, $e)) {
      const l = s.stamps.get(n(this, Vt));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = b(this, tt, Mc).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const s = {
      rect: this.getPDFRect()
    };
    return this.hasEditedComment && (s.popup = this.comment), e.updateEdited(s), null;
  }
}
bt = new WeakMap(), Vt = new WeakMap(), In = new WeakMap(), Ii = new WeakMap(), Fn = new WeakMap(), Lo = new WeakMap(), Fi = new WeakMap(), Zr = new WeakMap(), Vs = new WeakMap(), $e = new WeakMap(), Io = new WeakMap(), tt = new WeakSet(), al = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  f(this, bt, e.bitmap), s || (f(this, Vt, e.id), f(this, $e, e.isSvg)), e.file && f(this, Lo, e.file.name), b(this, tt, kc).call(this);
}, ol = function() {
  if (f(this, In, null), this._uiManager.enableWaiting(!1), !!n(this, Fi)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, bt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, bt)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, xc = function() {
  if (n(this, Vt)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, Vt)).then((i) => b(this, tt, al).call(this, i, !0)).finally(() => b(this, tt, ol).call(this));
    return;
  }
  if (n(this, Ii)) {
    const i = n(this, Ii);
    f(this, Ii, null), this._uiManager.enableWaiting(!0), f(this, In, this._uiManager.imageManager.getFromUrl(i).then((r) => b(this, tt, al).call(this, r)).finally(() => b(this, tt, ol).call(this)));
    return;
  }
  if (n(this, Fn)) {
    const i = n(this, Fn);
    f(this, Fn, null), this._uiManager.enableWaiting(!0), f(this, In, this._uiManager.imageManager.getFromFile(i).then((r) => b(this, tt, al).call(this, r)).finally(() => b(this, tt, ol).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Md.join(",");
  const s = this._uiManager._signal;
  f(this, In, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), b(this, tt, al).call(this, r);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => b(this, tt, ol).call(this))), e.click();
}, kc = function() {
  var u;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = n(this, bt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, i = this.height * a;
  else if (s > o * r || i > o * a) {
    const p = Math.min(o * r / s, o * a / i);
    s *= p, i *= p;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / r, i * h / a), this._uiManager.enableWaiting(!1);
  const c = f(this, Fi, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / r, this.height = i / a, (u = this._initialOptions) != null && u.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, tt, Hu).call(this), n(this, Io) || (this.parent.addUndoableEditor(this), f(this, Io, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, Lo) && this.div.setAttribute("aria-description", n(this, Lo)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, Pc = function(e, s) {
  const {
    width: i,
    height: r
  } = n(this, bt);
  let a = i, o = r, l = n(this, bt);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, Hu = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: r
  } = this, a = new Xs(), o = Math.ceil(i * e * a.sx), l = Math.ceil(r * s * a.sy), h = n(this, Fi);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = n(this, $e) ? n(this, bt) : b(this, tt, Pc).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, Mc = function(e) {
  if (e) {
    if (n(this, $e)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, Vt));
      if (r)
        return r;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = n(this, bt), s.getContext("2d").drawImage(n(this, bt), 0, 0), s.toDataURL();
  }
  if (n(this, $e)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * zn.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * zn.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, bt), 0, 0, n(this, bt).width, n(this, bt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, bt));
}, Hg = function(e) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, r = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, k(Bu, "_type", "stamp"), k(Bu, "_editorType", U.STAMP);
var ta, Fo, Ws, Nn, Ni, ze, On, No, ea, As, Oi, Wt, Bi, Bn, Oo, H, Hn, At, $g, Cs, zu, Gu, Rc;
const hs = class hs {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: c
  }) {
    g(this, At);
    g(this, ta);
    g(this, Fo, !1);
    g(this, Ws, null);
    g(this, Nn, null);
    g(this, Ni, null);
    g(this, ze, /* @__PURE__ */ new Map());
    g(this, On, !1);
    g(this, No, !1);
    g(this, ea, !1);
    g(this, As, null);
    g(this, Oi, null);
    g(this, Wt, null);
    g(this, Bi, null);
    g(this, Bn, null);
    g(this, Oo, -1);
    g(this, H);
    const u = [...n(hs, Hn).values()];
    if (!hs._initialized) {
      hs._initialized = !0;
      for (const p of u)
        p.initialize(c, t);
    }
    t.registerEditorTypes(u), f(this, H, t), this.pageIndex = e, this.div = s, f(this, ta, r), f(this, Ws, a), this.viewport = h, f(this, Wt, l), this.drawLayer = o, this._structTree = i, n(this, H).addLayer(this);
  }
  get isEmpty() {
    return n(this, ze).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, H).getMode() === U.NONE;
  }
  updateToolbar(t) {
    n(this, H).updateToolbar(t);
  }
  updateMode(t = n(this, H).getMode()) {
    switch (b(this, At, Rc).call(this), t) {
      case U.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case U.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case U.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of n(hs, Hn).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, Wt)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, H).setEditingState(t);
  }
  addCommands(t) {
    n(this, H).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, H).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = n(this, Ws)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    var s;
    f(this, ea, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), (s = n(this, Bn)) == null || s.abort(), f(this, Bn, null);
    const t = /* @__PURE__ */ new Set();
    for (const i of n(this, ze).values())
      i.enableEditing(), i.show(!0), i.annotationElementId && (n(this, H).removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
    if (!n(this, Ws)) {
      f(this, ea, !1);
      return;
    }
    const e = n(this, Ws).getEditableAnnotations();
    for (const i of e) {
      if (i.hide(), n(this, H).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id))
        continue;
      const r = await this.deserialize(i);
      r && (this.addOrRebuild(r), r.enableEditing());
    }
    f(this, ea, !1);
  }
  disable() {
    var i;
    if (f(this, No, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), n(this, Wt) && !n(this, Bn)) {
      f(this, Bn, new AbortController());
      const r = n(this, H).combinedSignal(n(this, Bn));
      n(this, Wt).div.addEventListener("pointerdown", (a) => {
        const {
          clientX: l,
          clientY: h,
          timeStamp: c
        } = a, u = n(this, Oo);
        if (c - u > 500) {
          f(this, Oo, c);
          return;
        }
        f(this, Oo, -1);
        const {
          classList: p
        } = this.div;
        p.toggle("getElements", !0);
        const m = document.elementsFromPoint(l, h);
        if (p.toggle("getElements", !1), !this.div.contains(m[0]))
          return;
        let A;
        const y = new RegExp(`^${Lf}[0-9]+$`);
        for (const w of m)
          if (y.test(w.id)) {
            A = w.id;
            break;
          }
        if (!A)
          return;
        const v = n(this, ze).get(A);
        (v == null ? void 0 : v.annotationElementId) === null && (a.stopPropagation(), a.preventDefault(), v.dblclick());
      }, {
        signal: r,
        capture: !0
      });
    }
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const r of n(this, ze).values())
      if (r.disableEditing(), !!r.annotationElementId) {
        if (r.serialize() !== null) {
          t.set(r.annotationElementId, r);
          continue;
        } else
          e.set(r.annotationElementId, r);
        (i = this.getEditableAnnotation(r.annotationElementId)) == null || i.show(), r.remove();
      }
    if (n(this, Ws)) {
      const r = n(this, Ws).getEditableAnnotations();
      for (const a of r) {
        const {
          id: o
        } = a.data;
        if (n(this, H).isDeletedAnnotationElement(o)) {
          a.updateEdited({
            deleted: !0
          });
          continue;
        }
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(a), l.show(!1), a.show();
          continue;
        }
        l = t.get(o), l && (n(this, H).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    b(this, At, Rc).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const r of n(hs, Hn).values())
      s.remove(`${r._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), f(this, No, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, Ws)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, H).getActive() !== t && n(this, H).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, Wt)) != null && t.div && !n(this, Bi)) {
      f(this, Bi, new AbortController());
      const e = n(this, H).combinedSignal(n(this, Bi));
      n(this, Wt).div.addEventListener("pointerdown", b(this, At, $g).bind(this), {
        signal: e
      }), n(this, Wt).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, Wt)) != null && t.div && n(this, Bi) && (n(this, Bi).abort(), f(this, Bi, null), n(this, Wt).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, Nn))
      return;
    f(this, Nn, new AbortController());
    const t = n(this, H).combinedSignal(n(this, Nn));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = n(this, Nn)) == null || t.abort(), f(this, Nn, null);
  }
  attach(t) {
    n(this, ze).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, H).isDeletedAnnotationElement(e) && n(this, H).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, ze).delete(t.id), (e = n(this, ta)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, No) && t.annotationElementId && n(this, H).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, H).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, H).addDeletedAnnotationElement(t.annotationElementId), ft.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, H).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, ea)), n(this, H).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, Ni) && (t._focusEventsAllowed = !1, f(this, Ni, setTimeout(() => {
      f(this, Ni, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, H)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = n(this, ta)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getNextId() {
    return n(this, H).getId();
  }
  combinedSignal(t) {
    return n(this, H).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, At, Cs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, H).updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: i
    } = b(this, At, Gu).call(this), r = this.getNextId(), a = b(this, At, zu).call(this, {
      parent: this,
      id: r,
      x: s,
      y: i,
      uiManager: n(this, H),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n(hs, Hn).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, H))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), r = b(this, At, zu).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, H),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(b(this, At, Gu).call(this), !0, t);
  }
  setSelected(t) {
    n(this, H).setSelected(t);
  }
  toggleSelected(t) {
    n(this, H).toggleSelected(t);
  }
  unselect(t) {
    n(this, H).unselect(t);
  }
  pointerup(t) {
    var i;
    const {
      isMac: e
    } = ie.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, On) || (f(this, On, !1), (i = n(this, At, Cs)) != null && i.isDrawer && n(this, At, Cs).supportMultipleDrawings))
      return;
    if (!n(this, Fo)) {
      f(this, Fo, !0);
      return;
    }
    const s = n(this, H).getMode();
    if (s === U.STAMP || s === U.SIGNATURE) {
      n(this, H).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    var i;
    if (n(this, H).getMode() === U.HIGHLIGHT && this.enableTextSelection(), n(this, On)) {
      f(this, On, !1);
      return;
    }
    const {
      isMac: e
    } = ie.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (f(this, On, !0), (i = n(this, At, Cs)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, H).getActive();
    f(this, Fo, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), n(this, As)) {
      n(this, At, Cs).startDrawing(this, n(this, H), !1, t);
      return;
    }
    n(this, H).setCurrentDrawingSession(this), f(this, As, new AbortController());
    const e = n(this, H).combinedSignal(n(this, As));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (f(this, Oi, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, At, Cs).startDrawing(this, n(this, H), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && f(this, Oi, e);
      return;
    }
    n(this, Oi) && setTimeout(() => {
      var e;
      (e = n(this, Oi)) == null || e.focus(), f(this, Oi, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, As) ? (n(this, H).setCurrentDrawingSession(null), n(this, As).abort(), f(this, As, null), f(this, Oi, null), n(this, At, Cs).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, H).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, As) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, As) && n(this, At, Cs).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, H).getActive()) == null ? void 0 : t.parent) === this && (n(this, H).commitOrRemove(), n(this, H).setActiveEditor(null)), n(this, Ni) && (clearTimeout(n(this, Ni)), f(this, Ni, null));
    for (const s of n(this, ze).values())
      (e = n(this, ta)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, n(this, ze).clear(), n(this, H).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, ia(this.div, t);
    for (const e of n(this, H).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, H).commitOrRemove(), b(this, At, Rc).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, ia(this.div, {
      rotation: s
    }), e !== s)
      for (const i of n(this, ze).values())
        i.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, H).viewParameters.realScale;
  }
};
ta = new WeakMap(), Fo = new WeakMap(), Ws = new WeakMap(), Nn = new WeakMap(), Ni = new WeakMap(), ze = new WeakMap(), On = new WeakMap(), No = new WeakMap(), ea = new WeakMap(), As = new WeakMap(), Oi = new WeakMap(), Wt = new WeakMap(), Bi = new WeakMap(), Bn = new WeakMap(), Oo = new WeakMap(), H = new WeakMap(), Hn = new WeakMap(), At = new WeakSet(), $g = function(t) {
  n(this, H).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, Wt).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, Wt).div.contains(e)) {
    const {
      isMac: s
    } = ie.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    n(this, H).showAllEditors("highlight", !0, !0), n(this, Wt).div.classList.add("free"), this.toggleDrawing(), zc.startHighlighting(this, n(this, H).direction === "ltr", {
      target: n(this, Wt).div,
      x: t.x,
      y: t.y
    }), n(this, Wt).div.addEventListener("pointerup", () => {
      n(this, Wt).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, H)._signal
    }), t.preventDefault();
  }
}, Cs = function() {
  return n(hs, Hn).get(n(this, H).getMode());
}, zu = function(t) {
  const e = n(this, At, Cs);
  return e ? new e.prototype.constructor(t) : null;
}, Gu = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (r + o) / 2 - t, c = (a + l) / 2 - e, [u, p] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return {
    offsetX: u,
    offsetY: p
  };
}, Rc = function() {
  for (const t of n(this, ze).values())
    t.isEmpty() && t.remove();
}, k(hs, "_initialized", !1), g(hs, Hn, new Map([vu, Ru, Bu, zc, Ou].map((t) => [t._editorType, t])));
let $u = hs;
var ys, fe, sa, zh, od, zg, qs, ju, Gg, Vu;
const Ft = class Ft {
  constructor({
    pageIndex: t
  }) {
    g(this, qs);
    g(this, ys, null);
    g(this, fe, /* @__PURE__ */ new Map());
    g(this, sa, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, ys)) {
      f(this, ys, t);
      return;
    }
    if (n(this, ys) !== t) {
      if (n(this, fe).size > 0)
        for (const e of n(this, fe).values())
          e.remove(), t.append(e);
      f(this, ys, t);
    }
  }
  static get _svgFactory() {
    return Y(this, "_svgFactory", new Hc());
  }
  draw(t, e = !1, s = !1) {
    const i = Lt(Ft, zh)._++, r = b(this, qs, ju).call(this), a = Ft._svgFactory.createElement("defs");
    r.append(a);
    const o = Ft._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, sa).set(i, o);
    const h = s ? b(this, qs, Gg).call(this, a, l) : null, c = Ft._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, fe).set(i, r), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = Lt(Ft, zh)._++, i = b(this, qs, ju).call(this), r = Ft._svgFactory.createElement("defs");
    i.append(r);
    const a = Ft._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Ft._svgFactory.createElement("mask");
      r.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const p = Ft._svgFactory.createElement("rect");
      u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const m = Ft._svgFactory.createElement("use");
      u.append(m), m.setAttribute("href", `#${o}`), m.setAttribute("stroke", "none"), m.setAttribute("fill", "black"), m.setAttribute("fill-rule", "nonzero"), m.classList.add("mask");
    }
    const h = Ft._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, fe).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, sa).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? n(this, fe).get(t) : t;
    if (o) {
      if (s && b(this, qs, Vu).call(this, o, s), i && b(l = Ft, od, zg).call(l, o, i), r) {
        const {
          classList: h
        } = o;
        for (const [c, u] of Object.entries(r))
          h.toggle(c, u);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        b(this, qs, Vu).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = n(this, fe).get(t);
    s && (n(e, ys).append(s), n(this, fe).delete(t), n(e, fe).set(t, s));
  }
  remove(t) {
    n(this, sa).delete(t), n(this, ys) !== null && (n(this, fe).get(t).remove(), n(this, fe).delete(t));
  }
  destroy() {
    f(this, ys, null);
    for (const t of n(this, fe).values())
      t.remove();
    n(this, fe).clear(), n(this, sa).clear();
  }
};
ys = new WeakMap(), fe = new WeakMap(), sa = new WeakMap(), zh = new WeakMap(), od = new WeakSet(), zg = function(t, [e, s, i, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, qs = new WeakSet(), ju = function() {
  const t = Ft._svgFactory.create(1, 1, !0);
  return n(this, ys).append(t), t.setAttribute("aria-hidden", !0), t;
}, Gg = function(t, e) {
  const s = Ft._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Ft._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, Vu = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, g(Ft, od), g(Ft, zh, 0);
let Uu = Ft;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: Su
};
globalThis.pdfjsLib = {
  AbortException: $n,
  AnnotationEditorLayer: $u,
  AnnotationEditorParamsType: J,
  AnnotationEditorType: U,
  AnnotationEditorUIManager: na,
  AnnotationLayer: Au,
  AnnotationMode: Wi,
  AnnotationType: Pt,
  build: gb,
  ColorPicker: Oc,
  createValidAbsoluteUrl: If,
  DOMSVGFactory: Hc,
  DrawLayer: Uu,
  FeatureTest: ie,
  fetchData: Uh,
  getDocument: hb,
  getFilenameFromUrl: rm,
  getPdfFilenameFromUrl: am,
  getRGB: ud,
  getUuid: Of,
  getXfaPageViewport: lm,
  GlobalWorkerOptions: Hi,
  ImageKind: sc,
  InvalidPDFException: kd,
  isDataScheme: dd,
  isPdfFile: qu,
  isValidExplicitDest: ym,
  MathClamp: ge,
  noContextMenu: as,
  normalizeUnicode: sm,
  OPS: ll,
  OutputScale: Xs,
  PasswordResponses: Xg,
  PDFDataRangeTransport: Op,
  PDFDateString: Lc,
  PDFWorker: dl,
  PermissionFlag: Wg,
  PixelsPerInch: zn,
  RenderingCancelledException: Xu,
  ResponseException: Dc,
  setLayerDimensions: ia,
  shadow: Y,
  SignatureExtractor: $i,
  stopEvent: Mt,
  SupportedImageMimeTypes: Md,
  TextLayer: hl,
  TouchManager: Fc,
  updateUrlHash: Ff,
  Util: O,
  VerbosityLevel: ld,
  version: pb,
  XfaLayer: zp
};
Promise.withResolvers ?? (Promise.withResolvers = function() {
  let d, t;
  return { promise: new Promise((s, i) => {
    d = s, t = i;
  }), resolve: d, reject: t };
});
export {
  $n as AbortException,
  $u as AnnotationEditorLayer,
  J as AnnotationEditorParamsType,
  U as AnnotationEditorType,
  na as AnnotationEditorUIManager,
  Au as AnnotationLayer,
  Wi as AnnotationMode,
  Pt as AnnotationType,
  Oc as ColorPicker,
  Hc as DOMSVGFactory,
  Uu as DrawLayer,
  ie as FeatureTest,
  Hi as GlobalWorkerOptions,
  sc as ImageKind,
  kd as InvalidPDFException,
  ge as MathClamp,
  ll as OPS,
  Xs as OutputScale,
  Op as PDFDataRangeTransport,
  Lc as PDFDateString,
  dl as PDFWorker,
  Xg as PasswordResponses,
  Wg as PermissionFlag,
  zn as PixelsPerInch,
  Xu as RenderingCancelledException,
  Dc as ResponseException,
  $i as SignatureExtractor,
  Md as SupportedImageMimeTypes,
  hl as TextLayer,
  Fc as TouchManager,
  O as Util,
  ld as VerbosityLevel,
  zp as XfaLayer,
  gb as build,
  If as createValidAbsoluteUrl,
  Uh as fetchData,
  hb as getDocument,
  rm as getFilenameFromUrl,
  am as getPdfFilenameFromUrl,
  ud as getRGB,
  Of as getUuid,
  lm as getXfaPageViewport,
  dd as isDataScheme,
  qu as isPdfFile,
  ym as isValidExplicitDest,
  as as noContextMenu,
  sm as normalizeUnicode,
  ia as setLayerDimensions,
  Y as shadow,
  Mt as stopEvent,
  Ff as updateUrlHash,
  pb as version
};
