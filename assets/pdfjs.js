var dg = Object.defineProperty;
var Mu = (d) => {
  throw TypeError(d);
};
var ug = (d, t, e) => t in d ? dg(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var P = (d, t, e) => ug(d, typeof t != "symbol" ? t + "" : t, e), zc = (d, t, e) => t.has(d) || Mu("Cannot " + e);
var n = (d, t, e) => (zc(d, t, "read from private field"), e ? e.call(d) : t.get(d)), g = (d, t, e) => t.has(d) ? Mu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), u = (d, t, e, s) => (zc(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), m = (d, t, e) => (zc(d, t, "access private method"), e);
var ee = (d, t, e, s) => ({
  set _(i) {
    u(d, t, i, e);
  },
  get _() {
    return n(d, t, s);
  }
});
const oe = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Kc = [1e-3, 0, 0, 1e-3, 0, 0], Gc = 1.35, Le = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Pi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Zu = "pdfjs_internal_editor_", G = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  SIGNATURE: 101,
  COMMENT: 102
}, Y = {
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
}, fg = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Yt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Ch = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, _t = {
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
}, zr = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, kc = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, sc = {
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
}, bh = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
}, pg = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Lc = kc.WARNINGS;
function gg(d) {
  Number.isInteger(d) && (Lc = d);
}
function mg() {
  return Lc;
}
function Dc(d) {
  Lc >= kc.INFOS && console.log(`Info: ${d}`);
}
function U(d) {
  Lc >= kc.WARNINGS && console.log(`Warning: ${d}`);
}
function at(d) {
  throw new Error(d);
}
function Et(d, t) {
  d || at(t);
}
function bg(d) {
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
function tf(d, t = null, e = null) {
  if (!d)
    return null;
  if (e && typeof d == "string") {
    if (e.addDefaultProtocol && d.startsWith("www.")) {
      const i = d.match(/\./g);
      (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
    }
    if (e.tryConvertEncoding)
      try {
        d = _g(d);
      } catch {
      }
  }
  const s = t ? URL.parse(d, t) : URL.parse(d);
  return bg(s) ? s : null;
}
function ef(d, t, e = !1) {
  const s = URL.parse(d);
  return s ? (s.hash = t, s.href) : e && tf(d, "http://example.com") ? d.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function q(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const Br = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class Iu extends Br {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Uc extends Br {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class Qc extends Br {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class ic extends Br {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
}
class Ag extends Br {
  constructor(t) {
    super(t, "FormatError");
  }
}
class An extends Br {
  constructor(t) {
    super(t, "AbortException");
  }
}
function sf(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && at("Invalid argument for bytesToString");
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
function dh(d) {
  typeof d != "string" && at("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function yg(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function wg() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function vg() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class Xt {
  static get isLittleEndian() {
    return q(this, "isLittleEndian", wg());
  }
  static get isEvalSupported() {
    return q(this, "isEvalSupported", vg());
  }
  static get isOffscreenCanvasSupported() {
    return q(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return q(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return q(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return q(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const jc = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var _i, xh, Jc;
class $ {
  static makeHexColor(t, e, s) {
    return `#${jc[t]}${jc[e]}${jc[s]}`;
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e, s = 0) {
    const i = t[s], r = t[s + 1];
    t[s] = i * e[0] + r * e[2] + e[4], t[s + 1] = i * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, s = 0) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5];
    for (let c = 0; c < 6; c += 2) {
      const f = t[s + c], p = t[s + c + 1];
      t[s + c] = f * i + p * a + l, t[s + c + 1] = f * r + p * o + h;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0], i = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-s * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, s) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5], c = t[0], f = t[1], p = t[2], b = t[3];
    let y = i * c + l, A = y, v = i * p + l, w = v, S = o * f + h, _ = S, E = o * b + h, C = E;
    if (r !== 0 || a !== 0) {
      const x = r * c, T = r * p, R = a * f, M = a * b;
      y += R, w += R, v += M, A += M, S += x, C += x, E += T, _ += T;
    }
    s[0] = Math.min(s[0], y, v, A, w), s[1] = Math.min(s[1], S, E, _, C), s[2] = Math.max(s[2], y, v, A, w), s[3] = Math.max(s[3], S, E, _, C);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const s = t[0], i = t[1], r = t[2], a = t[3], o = s ** 2 + i ** 2, l = s * r + i * a, h = r ** 2 + a ** 2, c = (o + h) / 2, f = Math.sqrt(c ** 2 - (o * h - l ** 2));
    e[0] = Math.sqrt(c + f || 1), e[1] = Math.sqrt(c - f || 1);
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
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), m(this, _i, Jc).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h), m(this, _i, Jc).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h);
  }
}
_i = new WeakSet(), xh = function(t, e, s, i, r, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const f = 1 - h, p = h * h, b = p * h, y = f * (f * (f * t + 3 * h * e) + 3 * p * s) + b * i, A = f * (f * (f * r + 3 * h * a) + 3 * p * o) + b * l;
  c[0] = Math.min(c[0], y), c[1] = Math.min(c[1], A), c[2] = Math.max(c[2], y), c[3] = Math.max(c[3], A);
}, Jc = function(t, e, s, i, r, a, o, l, h, c, f, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && m(this, _i, xh).call(this, t, e, s, i, r, a, o, l, -f / c, p);
    return;
  }
  const b = c ** 2 - 4 * f * h;
  if (b < 0)
    return;
  const y = Math.sqrt(b), A = 2 * h;
  m(this, _i, xh).call(this, t, e, s, i, r, a, o, l, (-c + y) / A, p), m(this, _i, xh).call(this, t, e, s, i, r, a, o, l, (-c - y) / A, p);
}, g($, _i);
function _g(d) {
  return decodeURIComponent(escape(d));
}
let Vc = null, ku = null;
function Sg(d) {
  return Vc || (Vc = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, ku = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Vc, (t, e, s) => e ? e.normalize("NFKC") : ku.get(s));
}
function nf() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), sf(d);
}
const pu = "pdfjs_internal_id_";
function Eg(d, t, e) {
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
function le(d, t, e) {
  return Math.min(Math.max(d, t), e);
}
function rf(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(sf(d));
}
function Cg(d) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(d) : dh(atob(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(d) {
  return d.reduce((t, e) => t + e, 0);
});
const Os = "http://www.w3.org/2000/svg", Tn = class Tn {
};
P(Tn, "CSS", 96), P(Tn, "PDF", 72), P(Tn, "PDF_TO_CSS_UNITS", Tn.CSS / Tn.PDF);
let yn = Tn;
async function uh(d, t = "text") {
  if (po(d, document.baseURI)) {
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
class fh {
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
    let c, f, p, b;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, f = 0, p = 0, b = 1;
        break;
      case 90:
        c = 0, f = 1, p = 1, b = 0;
        break;
      case 270:
        c = 0, f = -1, p = -1, b = 0;
        break;
      case 0:
        c = 1, f = 0, p = 0, b = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, b = -b);
    let y, A, v, w;
    c === 0 ? (y = Math.abs(h - t[1]) * s + r, A = Math.abs(l - t[0]) * s + a, v = (t[3] - t[1]) * s, w = (t[2] - t[0]) * s) : (y = Math.abs(l - t[0]) * s + r, A = Math.abs(h - t[1]) * s + a, v = (t[2] - t[0]) * s, w = (t[3] - t[1]) * s), this.transform = [c * s, f * s, p * s, b * s, y - c * s * l - p * s * h, A - f * s * l - b * s * h], this.width = v, this.height = w;
  }
  get rawDims() {
    const t = this.viewBox;
    return q(this, "rawDims", {
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
    return new fh({
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
    return $.applyTransform(s, this.transform), s;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    $.applyTransform(e, this.transform);
    const s = [t[2], t[3]];
    return $.applyTransform(s, this.transform), [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    return $.applyInverseTransform(s, this.transform), s;
  }
}
class gu extends Br {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function Nc(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function mu(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function xg(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function Tg(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (Nc(d))
    return U('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
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
class Lu {
  constructor() {
    P(this, "started", /* @__PURE__ */ Object.create(null));
    P(this, "times", []);
  }
  time(t) {
    t in this.started && U(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || U(`Timer has not been started for ${t}`), this.times.push({
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
function po(d, t) {
  const e = t ? URL.parse(d, t) : URL.parse(d);
  return (e == null ? void 0 : e.protocol) === "http:" || (e == null ? void 0 : e.protocol) === "https:";
}
function Ye(d) {
  d.preventDefault();
}
function St(d) {
  d.preventDefault(), d.stopPropagation();
}
function Pg(d) {
  console.log("Deprecated API usage: " + d);
}
var Fo;
class nc {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    n(this, Fo) || u(this, Fo, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Fo).exec(t);
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
    let f = parseInt(e[9], 10) || 0;
    return f = f >= 0 && f <= 59 ? f : 0, h === "-" ? (a += c, o += f) : h === "+" && (a -= c, o -= f), new Date(Date.UTC(s, i, r, a, o, l));
  }
}
Fo = new WeakMap(), g(nc, Fo);
function Rg(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, r = [0, 0, parseInt(s), parseInt(i)];
  return new fh({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function Fc(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (U(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function Mg(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, Fc(s));
  }
  t.remove();
}
function pt(d) {
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
function ds(d) {
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
function Nr(d, t, e = !1, s = !0) {
  if (t instanceof fh) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = d, o = Xt.isCSSRoundSupported, l = `var(--total-scale-factor) * ${i}px`, h = `var(--total-scale-factor) * ${r}px`, c = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`, f = o ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = f) : (a.width = f, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class Ds {
  constructor() {
    const {
      pixelRatio: t
    } = Ds;
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
    s = Ds.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), i !== -1 && (o = i / t, l = i / e);
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
const Zc = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
var Ri, Mi, He, Gs, Oo, Zr, ta, Bo, fc, af, qt, of, lf, Gr, go;
const $s = class $s {
  constructor(t) {
    g(this, qt);
    g(this, Ri, null);
    g(this, Mi, null);
    g(this, He);
    g(this, Gs, null);
    g(this, Oo, null);
    g(this, Zr, null);
    g(this, ta, null);
    u(this, He, t), n($s, Bo) || u($s, Bo, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = u(this, Ri, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, He)._uiManager._signal;
    t.addEventListener("contextmenu", Ye, {
      signal: e
    }), t.addEventListener("pointerdown", m($s, fc, af), {
      signal: e
    });
    const s = u(this, Gs, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, He).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = n(this, He)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return n(this, Ri);
  }
  hide() {
    var t;
    n(this, Ri).classList.add("hidden"), (t = n(this, Mi)) == null || t.hideDropdown();
  }
  show() {
    var t, e;
    n(this, Ri).classList.remove("hidden"), (t = n(this, Oo)) == null || t.shown(), (e = n(this, Zr)) == null || e.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = n(this, He), s = document.createElement("button");
    s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", n($s, Bo)[t]), m(this, qt, Gr).call(this, s), s.addEventListener("click", (i) => {
      e.delete();
    }, {
      signal: e._signal
    }), n(this, Gs).append(s);
  }
  async addAltText(t) {
    const e = await t.render();
    m(this, qt, Gr).call(this, e), n(this, Gs).append(e, n(this, qt, go)), u(this, Oo, t);
  }
  addComment(t) {
    if (n(this, Zr))
      return;
    const e = t.render();
    e && (m(this, qt, Gr).call(this, e), n(this, Gs).prepend(e, n(this, qt, go)), u(this, Zr, t), t.toolbar = this);
  }
  addColorPicker(t) {
    if (n(this, Mi))
      return;
    u(this, Mi, t);
    const e = t.renderButton();
    m(this, qt, Gr).call(this, e), n(this, Gs).append(e, n(this, qt, go));
  }
  async addEditSignatureButton(t) {
    const e = u(this, ta, await t.renderEditButton(n(this, He)));
    m(this, qt, Gr).call(this, e), n(this, Gs).append(e, n(this, qt, go));
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
    n(this, ta) && (n(this, ta).title = t);
  }
  remove() {
    var t;
    n(this, Ri).remove(), (t = n(this, Mi)) == null || t.destroy(), u(this, Mi, null);
  }
};
Ri = new WeakMap(), Mi = new WeakMap(), He = new WeakMap(), Gs = new WeakMap(), Oo = new WeakMap(), Zr = new WeakMap(), ta = new WeakMap(), Bo = new WeakMap(), fc = new WeakSet(), af = function(t) {
  t.stopPropagation();
}, qt = new WeakSet(), of = function(t) {
  n(this, He)._focusEventsAllowed = !1, St(t);
}, lf = function(t) {
  n(this, He)._focusEventsAllowed = !0, St(t);
}, Gr = function(t) {
  const e = n(this, He)._uiManager._signal;
  t.addEventListener("focusin", m(this, qt, of).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", m(this, qt, lf).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Ye, {
    signal: e
  });
}, go = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, g($s, fc), g($s, Bo, null);
let td = $s;
var Ho, Mn, In, wn, hf, cf, df;
class Ig {
  constructor(t) {
    g(this, wn);
    g(this, Ho, null);
    g(this, Mn, null);
    g(this, In);
    u(this, In, t);
  }
  show(t, e, s) {
    const [i, r] = m(this, wn, cf).call(this, e, s), {
      style: a
    } = n(this, Mn) || u(this, Mn, m(this, wn, hf).call(this));
    t.append(n(this, Mn)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, Mn).remove();
  }
}
Ho = new WeakMap(), Mn = new WeakMap(), In = new WeakMap(), wn = new WeakSet(), hf = function() {
  const t = u(this, Mn, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ye, {
    signal: n(this, In)._signal
  });
  const e = u(this, Ho, document.createElement("div"));
  return e.className = "buttons", t.append(e), m(this, wn, df).call(this), t;
}, cf = function(t, e) {
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
}, df = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = n(this, In)._signal;
  t.addEventListener("contextmenu", Ye, {
    signal: s
  }), t.addEventListener("click", () => {
    n(this, In).highlightSelection("floating_button");
  }, {
    signal: s
  }), n(this, Ho).append(t);
};
function uf(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var pc;
class kg {
  constructor() {
    g(this, pc, 0);
  }
  get id() {
    return `${Zu}${ee(this, pc)._++}`;
  }
}
pc = new WeakMap();
var ea, $o, Qt, sa, Th;
const Eu = class Eu {
  constructor() {
    g(this, sa);
    g(this, ea, nf());
    g(this, $o, 0);
    g(this, Qt, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return q(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: r
    } = t;
    return m(this, sa, Th).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return m(this, sa, Th).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return m(this, sa, Th).call(this, t, s);
  }
  async getFromId(t) {
    n(this, Qt) || u(this, Qt, /* @__PURE__ */ new Map());
    const e = n(this, Qt).get(t);
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
    n(this, Qt) || u(this, Qt, /* @__PURE__ */ new Map());
    let s = n(this, Qt).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${n(this, ea)}_${ee(this, $o)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, Qt).set(t, s), n(this, Qt).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, Qt).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    n(this, Qt) || u(this, Qt, /* @__PURE__ */ new Map());
    const e = n(this, Qt).get(t);
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
    return t.startsWith(`image_${n(this, ea)}_`);
  }
};
ea = new WeakMap(), $o = new WeakMap(), Qt = new WeakMap(), sa = new WeakSet(), Th = async function(t, e) {
  n(this, Qt) || u(this, Qt, /* @__PURE__ */ new Map());
  let s = n(this, Qt).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${n(this, ea)}_${ee(this, $o)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await uh(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = Eu._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, a.onload = async () => {
          const f = s.svgUrl = a.result;
          o.src = await r ? `${f}#svgView(preserveAspectRatio(none))` : f;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    U(i), s = null;
  }
  return n(this, Qt).set(t, s), s && n(this, Qt).set(s.id, s), s;
};
let ed = Eu;
var At, Ii, zo, ft;
class Lg {
  constructor(t = 128) {
    g(this, At, []);
    g(this, Ii, !1);
    g(this, zo);
    g(this, ft, -1);
    u(this, zo, t);
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
    if (i && t(), n(this, Ii))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (n(this, ft) === -1) {
      n(this, At).length > 0 && (n(this, At).length = 0), u(this, ft, 0), n(this, At).push(l);
      return;
    }
    if (a && n(this, At)[n(this, ft)].type === r) {
      o && (l.undo = n(this, At)[n(this, ft)].undo), n(this, At)[n(this, ft)] = l;
      return;
    }
    const h = n(this, ft) + 1;
    h === n(this, zo) ? n(this, At).splice(0, 1) : (u(this, ft, h), h < n(this, At).length && n(this, At).splice(h)), n(this, At).push(l);
  }
  undo() {
    if (n(this, ft) === -1)
      return;
    u(this, Ii, !0);
    const {
      undo: t,
      post: e
    } = n(this, At)[n(this, ft)];
    t(), e == null || e(), u(this, Ii, !1), u(this, ft, n(this, ft) - 1);
  }
  redo() {
    if (n(this, ft) < n(this, At).length - 1) {
      u(this, ft, n(this, ft) + 1), u(this, Ii, !0);
      const {
        cmd: t,
        post: e
      } = n(this, At)[n(this, ft)];
      t(), e == null || e(), u(this, Ii, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, ft) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, ft) < n(this, At).length - 1;
  }
  cleanType(t) {
    if (n(this, ft) !== -1) {
      for (let e = n(this, ft); e >= 0; e--)
        if (n(this, At)[e].type !== t) {
          n(this, At).splice(e + 1, n(this, ft) - e), u(this, ft, e);
          return;
        }
      n(this, At).length = 0, u(this, ft, -1);
    }
  }
  destroy() {
    u(this, At, null);
  }
}
At = new WeakMap(), Ii = new WeakMap(), zo = new WeakMap(), ft = new WeakMap();
var gc, ff;
class ph {
  constructor(t) {
    g(this, gc);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Xt.platform;
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
    const s = this.callbacks.get(m(this, gc, ff).call(this, e));
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
    o && !o(t, e) || (i.bind(t, ...a, e)(), r || St(e));
  }
}
gc = new WeakSet(), ff = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const mc = class mc {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Mg(t), q(this, "_colors", t);
  }
  convert(t) {
    const e = Fc(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return mc._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? $.makeHexColor(...e) : t;
  }
};
P(mc, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let sd = mc;
var ia, Ae, Pt, Ht, na, Us, ra, $e, kn, ki, Li, aa, Ln, ps, Qe, Dn, Go, Uo, oa, jo, gs, Di, la, Ni, ms, bc, Fi, Vo, Oi, Nn, ha, Bi, Wo, kt, st, js, Hi, $i, qo, Xo, zi, bs, Vs, Yo, Ko, ze, I, Ph, id, pf, gf, Rh, mf, bf, Af, nd, yf, rd, ad, wf, se, Bs, vf, _f, od, Sf, mo, ld;
const Kr = class Kr {
  constructor(t, e, s, i, r, a, o, l, h, c, f, p, b, y, A, v) {
    g(this, I);
    g(this, ia, new AbortController());
    g(this, Ae, null);
    g(this, Pt, /* @__PURE__ */ new Map());
    g(this, Ht, /* @__PURE__ */ new Map());
    g(this, na, null);
    g(this, Us, null);
    g(this, ra, null);
    g(this, $e, new Lg());
    g(this, kn, null);
    g(this, ki, null);
    g(this, Li, null);
    g(this, aa, 0);
    g(this, Ln, /* @__PURE__ */ new Set());
    g(this, ps, null);
    g(this, Qe, null);
    g(this, Dn, /* @__PURE__ */ new Set());
    P(this, "_editorUndoBar", null);
    g(this, Go, !1);
    g(this, Uo, !1);
    g(this, oa, !1);
    g(this, jo, null);
    g(this, gs, null);
    g(this, Di, null);
    g(this, la, null);
    g(this, Ni, !1);
    g(this, ms, null);
    g(this, bc, new kg());
    g(this, Fi, !1);
    g(this, Vo, !1);
    g(this, Oi, null);
    g(this, Nn, null);
    g(this, ha, null);
    g(this, Bi, null);
    g(this, Wo, null);
    g(this, kt, G.NONE);
    g(this, st, /* @__PURE__ */ new Set());
    g(this, js, null);
    g(this, Hi, null);
    g(this, $i, null);
    g(this, qo, null);
    g(this, Xo, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    g(this, zi, [0, 0]);
    g(this, bs, null);
    g(this, Vs, null);
    g(this, Yo, null);
    g(this, Ko, null);
    g(this, ze, null);
    const w = this._signal = n(this, ia).signal;
    u(this, Vs, t), u(this, Yo, e), u(this, Ko, s), u(this, na, i), u(this, kn, r), u(this, Hi, a), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), {
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
    }), m(this, I, mf).call(this), m(this, I, wf).call(this), m(this, I, nd).call(this), u(this, Us, l.annotationStorage), u(this, jo, l.filterFactory), u(this, $i, h), u(this, la, c || null), u(this, Go, f), u(this, Uo, p), u(this, oa, b), u(this, Wo, y || null), this.viewParameters = {
      realScale: yn.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = A || null, this._supportsPinchToZoom = v !== !1;
  }
  static get _keyboardManager() {
    const t = Kr.prototype, e = (a) => n(a, Vs).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
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
    return q(this, "_keyboardManager", new ph([[["ctrl+a", "mac+meta+a"], t.selectAll, {
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
      }) => !(o instanceof HTMLButtonElement) && n(a, Vs).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Vs).contains(document.activeElement)
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
    (t = n(this, ze)) == null || t.resolve(), u(this, ze, null), (e = n(this, ia)) == null || e.abort(), u(this, ia, null), this._signal = null;
    for (const c of n(this, Ht).values())
      c.destroy();
    n(this, Ht).clear(), n(this, Pt).clear(), n(this, Dn).clear(), (s = n(this, Bi)) == null || s.clear(), u(this, Ae, null), n(this, st).clear(), n(this, $e).destroy(), (i = n(this, na)) == null || i.destroy(), (r = n(this, kn)) == null || r.destroy(), (a = n(this, Hi)) == null || a.destroy(), (o = n(this, ms)) == null || o.hide(), u(this, ms, null), (l = n(this, ha)) == null || l.destroy(), u(this, ha, null), n(this, gs) && (clearTimeout(n(this, gs)), u(this, gs, null)), n(this, bs) && (clearTimeout(n(this, bs)), u(this, bs, null)), (h = this._editorUndoBar) == null || h.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, Wo);
  }
  get useNewAltTextFlow() {
    return n(this, Uo);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, oa);
  }
  get hcmFilter() {
    return q(this, "hcmFilter", n(this, $i) ? n(this, jo).addHCMFilter(n(this, $i).foreground, n(this, $i).background) : "none");
  }
  get direction() {
    return q(this, "direction", getComputedStyle(n(this, Vs)).direction);
  }
  get _highlightColors() {
    return q(this, "_highlightColors", n(this, la) ? new Map(n(this, la).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return q(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), s = !!n(this, $i);
    for (const [i, r] of t) {
      const a = i.endsWith("_HCM");
      if (s && a) {
        e.set(i.replace("_HCM", ""), r);
        continue;
      }
      !s && !a && e.set(i, r);
    }
    return q(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return q(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
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
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), u(this, Li, t);
  }
  setMainHighlightColorPicker(t) {
    u(this, ha, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = n(this, na)) == null || s.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!n(this, kn);
  }
  editComment(t, e) {
    var s;
    (s = n(this, kn)) == null || s.open(this, t, e);
  }
  getSignature(t) {
    var e;
    (e = n(this, Hi)) == null || e.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return n(this, Hi);
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
        u(this, oa, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    u(this, aa, t - 1);
  }
  focusMainContainer() {
    n(this, Vs).focus();
  }
  findParent(t, e) {
    for (const s of n(this, Ht).values()) {
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
    n(this, Yo).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, Dn).add(t);
  }
  removeShouldRescale(t) {
    n(this, Dn).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * yn.PDF_TO_CSS_UNITS;
    for (const s of n(this, Dn))
      s.onScaleChanging();
    (e = n(this, Li)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: i,
      focusNode: r,
      focusOffset: a
    } = e, o = e.toString(), h = m(this, I, Ph).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
    if (!c)
      return;
    e.empty();
    const f = m(this, I, id).call(this, h), p = n(this, kt) === G.NONE, b = () => {
      f == null || f.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: c,
        anchorNode: s,
        anchorOffset: i,
        focusNode: r,
        focusOffset: a,
        text: o
      }), p && this.showAllEditors("highlight", !0, !0);
    };
    if (p) {
      this.switchToMode(G.HIGHLIGHT, b);
      return;
    }
    b();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Us) && !n(this, Us).has(t.id) && n(this, Us).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const s = n(this, Ko);
    s && (s.setAttribute("data-l10n-id", t), e ? s.setAttribute("data-l10n-args", JSON.stringify(e)) : s.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, Ni) && (u(this, Ni, !1), m(this, I, Rh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, st))
      if (e.div.contains(t)) {
        u(this, Nn, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, Nn))
      return;
    const [t, e] = n(this, Nn);
    u(this, Nn, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    m(this, I, nd).call(this), m(this, I, rd).call(this);
  }
  removeEditListeners() {
    m(this, I, yf).call(this), m(this, I, ad).call(this);
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
    if (t.preventDefault(), (s = n(this, Ae)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of n(this, st)) {
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
      U(`paste: "${r.message}".`);
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
          m(this, I, od).call(this, l);
        m(this, I, ld).call(this, r);
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
      U(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, kt) !== G.NONE && !this.isEditorHandlingKeyboard && Kr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, Ni) && (u(this, Ni, !1), m(this, I, Rh).call(this, "main_toolbar")));
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
    }
  }
  setEditingState(t) {
    t ? (m(this, I, bf).call(this), m(this, I, rd).call(this), m(this, I, se).call(this, {
      isEditing: n(this, kt) !== G.NONE,
      isEmpty: m(this, I, mo).call(this),
      hasSomethingToUndo: n(this, $e).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, $e).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (m(this, I, Af).call(this), m(this, I, ad).call(this), m(this, I, se).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, Qe)) {
      u(this, Qe, t);
      for (const e of n(this, Qe))
        m(this, I, Bs).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, bc).id;
  }
  get currentLayer() {
    return n(this, Ht).get(n(this, aa));
  }
  getLayer(t) {
    return n(this, Ht).get(t);
  }
  get currentPageIndex() {
    return n(this, aa);
  }
  addLayer(t) {
    n(this, Ht).set(t.pageIndex, t), n(this, Fi) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, Ht).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1, i = !1, r = !1) {
    var a, o, l;
    if (n(this, kt) !== t && !(n(this, ze) && (await n(this, ze).promise, !n(this, ze)))) {
      if (u(this, ze, Promise.withResolvers()), (a = n(this, Li)) == null || a.commitOrRemove(), u(this, kt, t), t === G.NONE) {
        this.setEditingState(!1), m(this, I, _f).call(this), (o = this._editorUndoBar) == null || o.hide(), n(this, ze).resolve();
        return;
      }
      t === G.SIGNATURE && await ((l = n(this, Hi)) == null ? void 0 : l.loadSignatures()), this.setEditingState(!0), await m(this, I, vf).call(this), this.unselectAll();
      for (const h of n(this, Ht).values())
        h.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), n(this, ze).resolve();
        return;
      }
      for (const h of n(this, Pt).values())
        h.annotationElementId === e || h.id === e ? (this.setSelected(h), r ? h.editComment() : i && h.enterInEditMode()) : h.unselect();
      n(this, ze).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== n(this, kt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (n(this, Qe)) {
      switch (t) {
        case Y.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case Y.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, qo) || u(this, qo, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const s of n(this, st))
          s.updateParams(t, e);
      else
        for (const s of n(this, Qe))
          s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var r;
    for (const a of n(this, Pt).values())
      a.editorType === t && a.show(e);
    (((r = n(this, qo)) == null ? void 0 : r.get(Y.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && m(this, I, Bs).call(this, [[Y.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, Vo) !== t) {
      u(this, Vo, t);
      for (const e of n(this, Ht).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of n(this, Pt).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return n(this, Pt).get(t);
  }
  addEditor(t) {
    n(this, Pt).set(t.id, t);
  }
  removeEditor(t) {
    var e, s;
    t.div.contains(document.activeElement) && (n(this, gs) && clearTimeout(n(this, gs)), u(this, gs, setTimeout(() => {
      this.focusMainContainer(), u(this, gs, null);
    }, 0))), n(this, Pt).delete(t.id), t.annotationElementId && ((e = n(this, Bi)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Ln).has(t.annotationElementId)) && ((s = n(this, Us)) == null || s.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, Ln).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, Ln).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, Ln).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, Ae) !== t && (u(this, Ae, t), t && m(this, I, Bs).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, I, Sf) === t && m(this, I, Bs).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    m(this, I, Bs).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, st).has(t)) {
      n(this, st).delete(t), t.unselect(), m(this, I, se).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, st).add(t), t.select(), m(this, I, Bs).call(this, t.propertiesToUpdate), m(this, I, se).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id
    }), (e = n(this, Li)) == null || e.commitOrRemove();
    for (const s of n(this, st))
      s !== t && s.unselect();
    n(this, st).clear(), n(this, st).add(t), t.select(), m(this, I, Bs).call(this, t.propertiesToUpdate), m(this, I, se).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, st).has(t);
  }
  get firstSelectedEditor() {
    return n(this, st).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, st).delete(t), m(this, I, se).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, st).size !== 0;
  }
  get isEnterHandled() {
    return n(this, st).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, $e).undo(), m(this, I, se).call(this, {
      hasSomethingToUndo: n(this, $e).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: m(this, I, mo).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, $e).redo(), m(this, I, se).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, $e).hasSomethingToRedo(),
      isEmpty: m(this, I, mo).call(this)
    });
  }
  addCommands(t) {
    n(this, $e).add(t), m(this, I, se).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: m(this, I, mo).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, $e).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, st)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        m(this, I, od).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, Ae)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, Ae) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, st))
      t.commit();
    m(this, I, ld).call(this, n(this, Pt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, Ae) && (n(this, Ae).commitOrRemove(), n(this, kt) !== G.NONE)) && !((t = n(this, Li)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, st))
        e.unselect();
      n(this, st).clear(), m(this, I, se).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, zi)[0] += t, n(this, zi)[1] += e;
    const [i, r] = n(this, zi), a = [...n(this, st)], o = 1e3;
    n(this, bs) && clearTimeout(n(this, bs)), u(this, bs, setTimeout(() => {
      u(this, bs, null), n(this, zi)[0] = n(this, zi)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, Pt).has(l.id) && (l.translateInPage(i, r), l.translationDone());
        },
        undo: () => {
          for (const l of a)
            n(this, Pt).has(l.id) && (l.translateInPage(-i, -r), l.translationDone());
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), u(this, ps, /* @__PURE__ */ new Map());
      for (const t of n(this, st))
        n(this, ps).set(t, {
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
    if (!n(this, ps))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, ps);
    u(this, ps, null);
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
      if (n(this, Pt).has(i.id)) {
        const l = n(this, Ht).get(o);
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
    if (n(this, ps))
      for (const s of n(this, ps).keys())
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
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, st).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, Ae) === t;
  }
  getActive() {
    return n(this, Ae);
  }
  getMode() {
    return n(this, kt);
  }
  get imageManager() {
    return q(this, "imageManager", new ed());
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
        o = (h, c, f, p) => ({
          x: (c - i) / a,
          y: 1 - (h + f - s) / r,
          width: p / a,
          height: f / r
        });
        break;
      case "180":
        o = (h, c, f, p) => ({
          x: 1 - (h + f - s) / r,
          y: 1 - (c + p - i) / a,
          width: f / r,
          height: p / a
        });
        break;
      case "270":
        o = (h, c, f, p) => ({
          x: 1 - (c + p - i) / a,
          y: (h - s) / r,
          width: p / a,
          height: f / r
        });
        break;
      default:
        o = (h, c, f, p) => ({
          x: (h - s) / r,
          y: (c - i) / a,
          width: f / r,
          height: p / a
        });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const f = e.getRangeAt(h);
      if (!f.collapsed)
        for (const {
          x: p,
          y: b,
          width: y,
          height: A
        } of f.getClientRects())
          y === 0 || A === 0 || l.push(o(p, b, y, A));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, ra) || u(this, ra, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, ra)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = n(this, ra)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = n(this, Us).getRawValue(e);
    s && (n(this, kt) === G.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    var r;
    const i = (r = n(this, Bi)) == null ? void 0 : r.get(t);
    i && (i.setCanvas(e, s), n(this, Bi).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, Bi) || u(this, Bi, /* @__PURE__ */ new Map())).set(t, e);
  }
};
ia = new WeakMap(), Ae = new WeakMap(), Pt = new WeakMap(), Ht = new WeakMap(), na = new WeakMap(), Us = new WeakMap(), ra = new WeakMap(), $e = new WeakMap(), kn = new WeakMap(), ki = new WeakMap(), Li = new WeakMap(), aa = new WeakMap(), Ln = new WeakMap(), ps = new WeakMap(), Qe = new WeakMap(), Dn = new WeakMap(), Go = new WeakMap(), Uo = new WeakMap(), oa = new WeakMap(), jo = new WeakMap(), gs = new WeakMap(), Di = new WeakMap(), la = new WeakMap(), Ni = new WeakMap(), ms = new WeakMap(), bc = new WeakMap(), Fi = new WeakMap(), Vo = new WeakMap(), Oi = new WeakMap(), Nn = new WeakMap(), ha = new WeakMap(), Bi = new WeakMap(), Wo = new WeakMap(), kt = new WeakMap(), st = new WeakMap(), js = new WeakMap(), Hi = new WeakMap(), $i = new WeakMap(), qo = new WeakMap(), Xo = new WeakMap(), zi = new WeakMap(), bs = new WeakMap(), Vs = new WeakMap(), Yo = new WeakMap(), Ko = new WeakMap(), ze = new WeakMap(), I = new WeakSet(), Ph = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, id = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of n(this, Ht).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, pf = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = m(this, I, Ph).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, ms) || u(this, ms, new Ig(this)), n(this, ms).show(s, i, this.direction === "ltr"));
}, gf = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, js) && ((r = n(this, ms)) == null || r.hide(), u(this, js, null), m(this, I, se).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, js))
    return;
  const i = m(this, I, Ph).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, js) && ((a = n(this, ms)) == null || a.hide(), u(this, js, null), m(this, I, se).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, ms)) == null || o.hide(), u(this, js, e), m(this, I, se).call(this, {
    hasSelectedText: !0
  }), !(n(this, kt) !== G.HIGHLIGHT && n(this, kt) !== G.NONE) && (n(this, kt) === G.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), u(this, Ni, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, kt) === G.HIGHLIGHT ? m(this, I, id).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), c = this.combinedSignal(h), f = (p) => {
      p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && m(this, I, Rh).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", f, {
      signal: c
    }), window.addEventListener("blur", f, {
      signal: c
    });
  }
}, Rh = function(t = "") {
  n(this, kt) === G.HIGHLIGHT ? this.highlightSelection(t) : n(this, Go) && m(this, I, pf).call(this);
}, mf = function() {
  document.addEventListener("selectionchange", m(this, I, gf).bind(this), {
    signal: this._signal
  });
}, bf = function() {
  if (n(this, Di))
    return;
  u(this, Di, new AbortController());
  const t = this.combinedSignal(n(this, Di));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Af = function() {
  var t;
  (t = n(this, Di)) == null || t.abort(), u(this, Di, null);
}, nd = function() {
  if (n(this, Oi))
    return;
  u(this, Oi, new AbortController());
  const t = this.combinedSignal(n(this, Oi));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, yf = function() {
  var t;
  (t = n(this, Oi)) == null || t.abort(), u(this, Oi, null);
}, rd = function() {
  if (n(this, ki))
    return;
  u(this, ki, new AbortController());
  const t = this.combinedSignal(n(this, ki));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, ad = function() {
  var t;
  (t = n(this, ki)) == null || t.abort(), u(this, ki, null);
}, wf = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, se = function(t) {
  Object.entries(t).some(([s, i]) => n(this, Xo)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, Xo), t)
  }), n(this, kt) === G.HIGHLIGHT && t.hasSelectedEditor === !1 && m(this, I, Bs).call(this, [[Y.HIGHLIGHT_FREE, !0]]));
}, Bs = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, vf = async function() {
  if (!n(this, Fi)) {
    u(this, Fi, !0);
    const t = [];
    for (const e of n(this, Ht).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Pt).values())
      e.enable();
  }
}, _f = function() {
  if (this.unselectAll(), n(this, Fi)) {
    u(this, Fi, !1);
    for (const t of n(this, Ht).values())
      t.disable();
    for (const t of n(this, Pt).values())
      t.disable();
  }
}, od = function(t) {
  const e = n(this, Ht).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Sf = function() {
  let t = null;
  for (t of n(this, st))
    ;
  return t;
}, mo = function() {
  if (n(this, Pt).size === 0)
    return !0;
  if (n(this, Pt).size === 1)
    for (const t of n(this, Pt).values())
      return t.isEmpty();
  return !1;
}, ld = function(t) {
  for (const e of n(this, st))
    e.unselect();
  n(this, st).clear();
  for (const e of t)
    e.isEmpty() || (n(this, st).add(e), e.select());
  m(this, I, se).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, P(Kr, "TRANSLATE_SMALL", 1), P(Kr, "TRANSLATE_BIG", 10);
let Fr = Kr;
var Lt, As, Je, ca, ys, ye, da, ws, fe, Ws, Fn, vs, Gi, ls, bo, Mh;
const ie = class ie {
  constructor(t) {
    g(this, ls);
    g(this, Lt, null);
    g(this, As, !1);
    g(this, Je, null);
    g(this, ca, null);
    g(this, ys, null);
    g(this, ye, null);
    g(this, da, !1);
    g(this, ws, null);
    g(this, fe, null);
    g(this, Ws, null);
    g(this, Fn, null);
    g(this, vs, !1);
    u(this, fe, t), u(this, vs, t._uiManager.useNewAltTextFlow), n(ie, Gi) || u(ie, Gi, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    ie._l10n ?? (ie._l10n = t);
  }
  async render() {
    const t = u(this, Je, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = u(this, ca, document.createElement("span"));
    t.append(e), n(this, vs) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(ie, Gi).missing), e.setAttribute("data-l10n-id", n(ie, Gi)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, fe)._uiManager._signal;
    t.addEventListener("contextmenu", Ye, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const i = (r) => {
      r.preventDefault(), n(this, fe)._uiManager.editAltText(n(this, fe)), n(this, vs) && n(this, fe)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, ls, bo)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (u(this, da, !0), i(r));
    }, {
      signal: s
    }), await m(this, ls, Mh).call(this), t;
  }
  finish() {
    n(this, Je) && (n(this, Je).focus({
      focusVisible: n(this, da)
    }), u(this, da, !1));
  }
  isEmpty() {
    return n(this, vs) ? n(this, Lt) === null : !n(this, Lt) && !n(this, As);
  }
  hasData() {
    return n(this, vs) ? n(this, Lt) !== null || !!n(this, Ws) : this.isEmpty();
  }
  get guessedText() {
    return n(this, Ws);
  }
  async setGuessedText(t) {
    n(this, Lt) === null && (u(this, Ws, t), u(this, Fn, await ie._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), m(this, ls, Mh).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, vs) || n(this, Lt)) {
      (e = n(this, ws)) == null || e.remove(), u(this, ws, null);
      return;
    }
    if (!n(this, ws)) {
      const s = u(this, ws, document.createElement("div"));
      s.className = "noAltTextBadge", n(this, fe).div.append(s);
    }
    n(this, ws).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, Lt);
    return !t && n(this, Ws) === e && (e = n(this, Fn)), {
      altText: e,
      decorative: n(this, As),
      guessedText: n(this, Ws),
      textWithDisclaimer: n(this, Fn)
    };
  }
  get data() {
    return {
      altText: n(this, Lt),
      decorative: n(this, As)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: r = !1
  }) {
    s && (u(this, Ws, s), u(this, Fn, i)), !(n(this, Lt) === t && n(this, As) === e) && (r || (u(this, Lt, t), u(this, As, e)), m(this, ls, Mh).call(this));
  }
  toggle(t = !1) {
    n(this, Je) && (!t && n(this, ye) && (clearTimeout(n(this, ye)), u(this, ye, null)), n(this, Je).disabled = !t);
  }
  shown() {
    n(this, fe)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, ls, bo)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, Je)) == null || t.remove(), u(this, Je, null), u(this, ca, null), u(this, ys, null), (e = n(this, ws)) == null || e.remove(), u(this, ws, null);
  }
};
Lt = new WeakMap(), As = new WeakMap(), Je = new WeakMap(), ca = new WeakMap(), ys = new WeakMap(), ye = new WeakMap(), da = new WeakMap(), ws = new WeakMap(), fe = new WeakMap(), Ws = new WeakMap(), Fn = new WeakMap(), vs = new WeakMap(), Gi = new WeakMap(), ls = new WeakSet(), bo = function() {
  return n(this, Lt) && "added" || n(this, Lt) === null && this.guessedText && "review" || "missing";
}, Mh = async function() {
  var i, r, a;
  const t = n(this, Je);
  if (!t)
    return;
  if (n(this, vs)) {
    if (t.classList.toggle("done", !!n(this, Lt)), t.setAttribute("data-l10n-id", n(ie, Gi)[n(this, ls, bo)]), (i = n(this, ca)) == null || i.setAttribute("data-l10n-id", n(ie, Gi)[`${n(this, ls, bo)}-label`]), !n(this, Lt)) {
      (r = n(this, ys)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, Lt) && !n(this, As)) {
      t.classList.remove("done"), (a = n(this, ys)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, ys);
  if (!e) {
    u(this, ys, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, fe).id}`;
    const o = 100, l = n(this, fe)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, ye)), u(this, ye, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      u(this, ye, setTimeout(() => {
        u(this, ye, null), n(this, ys).classList.add("show"), n(this, fe)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, ye) && (clearTimeout(n(this, ye)), u(this, ye, null)), (h = n(this, ys)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, As) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, Lt)), e.parentNode || t.append(e);
  const s = n(this, fe).getElementForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, g(ie, Gi, null), P(ie, "_l10n", null);
let rc = ie;
var _s, On, Ze, Qo, qs, ua, Ui;
class Ah {
  constructor(t) {
    g(this, _s, null);
    g(this, On, !1);
    g(this, Ze, null);
    g(this, Qo, null);
    g(this, qs, null);
    g(this, ua, null);
    g(this, Ui, !1);
    u(this, Ze, t), this.toolbar = null;
  }
  render() {
    if (!n(this, Ze)._uiManager.hasCommentManager())
      return null;
    const t = u(this, _s, document.createElement("button"));
    t.className = "comment", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button");
    const e = n(this, Ze)._uiManager._signal;
    t.addEventListener("contextmenu", Ye, {
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
      i.target === t && i.key === "Enter" && (u(this, On, !0), s(i));
    }, {
      signal: e
    }), t;
  }
  edit() {
    const {
      bottom: t,
      left: e,
      right: s
    } = n(this, Ze).getClientDimensions(), i = {
      top: t
    };
    n(this, Ze)._uiManager.direction === "ltr" ? i.right = s : i.left = e, n(this, Ze)._uiManager.editComment(n(this, Ze), i);
  }
  finish() {
    n(this, _s) && (n(this, _s).focus({
      focusVisible: n(this, On)
    }), u(this, On, !1));
  }
  isDeleted() {
    return n(this, Ui) || n(this, qs) === "";
  }
  hasBeenEdited() {
    return this.isDeleted() || n(this, qs) !== n(this, Qo);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: n(this, qs),
      date: n(this, ua),
      deleted: n(this, Ui)
    };
  }
  set data(t) {
    if (t === null) {
      u(this, qs, ""), u(this, Ui, !0);
      return;
    }
    u(this, qs, t), u(this, ua, /* @__PURE__ */ new Date()), u(this, Ui, !1);
  }
  setInitialText(t) {
    u(this, Qo, t), this.data = t;
  }
  toggle(t = !1) {
    n(this, _s) && (n(this, _s).disabled = !t);
  }
  shown() {
  }
  destroy() {
    var t;
    (t = n(this, _s)) == null || t.remove(), u(this, _s, null), u(this, qs, ""), u(this, ua, null), u(this, Ze, null), u(this, On, !1), u(this, Ui, !1);
  }
}
_s = new WeakMap(), On = new WeakMap(), Ze = new WeakMap(), Qo = new WeakMap(), qs = new WeakMap(), ua = new WeakMap(), Ui = new WeakMap();
var fa, Bn, Jo, Zo, tl, el, sl, Xs, Hn, Ys, $n, Ks, vn, Ef, Cf, xf;
const Cu = class Cu {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    g(this, vn);
    g(this, fa);
    g(this, Bn, !1);
    g(this, Jo, null);
    g(this, Zo);
    g(this, tl);
    g(this, el);
    g(this, sl);
    g(this, Xs, null);
    g(this, Hn);
    g(this, Ys, null);
    g(this, $n);
    g(this, Ks, null);
    u(this, fa, t), u(this, Jo, s), u(this, Zo, e), u(this, tl, i), u(this, el, r), u(this, sl, a), u(this, $n, new AbortController()), u(this, Hn, AbortSignal.any([o, n(this, $n).signal])), t.addEventListener("touchstart", m(this, vn, Ef).bind(this), {
      passive: !1,
      signal: n(this, Hn)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / Ds.pixelRatio;
  }
  destroy() {
    var t, e;
    (t = n(this, $n)) == null || t.abort(), u(this, $n, null), (e = n(this, Xs)) == null || e.abort(), u(this, Xs, null);
  }
};
fa = new WeakMap(), Bn = new WeakMap(), Jo = new WeakMap(), Zo = new WeakMap(), tl = new WeakMap(), el = new WeakMap(), sl = new WeakMap(), Xs = new WeakMap(), Hn = new WeakMap(), Ys = new WeakMap(), $n = new WeakMap(), Ks = new WeakMap(), vn = new WeakSet(), Ef = function(t) {
  var i, r, a;
  if ((i = n(this, Zo)) != null && i.call(this))
    return;
  if (t.touches.length === 1) {
    if (n(this, Xs))
      return;
    const o = u(this, Xs, new AbortController()), l = AbortSignal.any([n(this, Hn), o.signal]), h = n(this, fa), c = {
      capture: !0,
      signal: l,
      passive: !1
    }, f = (p) => {
      var b;
      p.pointerType === "touch" && ((b = n(this, Xs)) == null || b.abort(), u(this, Xs, null));
    };
    h.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (St(p), f(p));
    }, c), h.addEventListener("pointerup", f, c), h.addEventListener("pointercancel", f, c);
    return;
  }
  if (!n(this, Ks)) {
    u(this, Ks, new AbortController());
    const o = AbortSignal.any([n(this, Hn), n(this, Ks).signal]), l = n(this, fa), h = {
      signal: o,
      capture: !1,
      passive: !1
    };
    l.addEventListener("touchmove", m(this, vn, Cf).bind(this), h);
    const c = m(this, vn, xf).bind(this);
    l.addEventListener("touchend", c, h), l.addEventListener("touchcancel", c, h), h.capture = !0, l.addEventListener("pointerdown", St, h), l.addEventListener("pointermove", St, h), l.addEventListener("pointercancel", St, h), l.addEventListener("pointerup", St, h), (r = n(this, tl)) == null || r.call(this);
  }
  if (St(t), t.touches.length !== 2 || (a = n(this, Jo)) != null && a.call(this)) {
    u(this, Ys, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), u(this, Ys, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, Cf = function(t) {
  var E;
  if (!n(this, Ys) || t.touches.length !== 2)
    return;
  St(t);
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = s, l = n(this, Ys), {
    touch0X: h,
    touch0Y: c,
    touch1X: f,
    touch1Y: p
  } = l, b = f - h, y = p - c, A = a - i, v = o - r, w = Math.hypot(A, v) || 1, S = Math.hypot(b, y) || 1;
  if (!n(this, Bn) && Math.abs(S - w) <= Cu.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, Bn)) {
    u(this, Bn, !0);
    return;
  }
  const _ = [(i + a) / 2, (r + o) / 2];
  (E = n(this, el)) == null || E.call(this, _, S, w);
}, xf = function(t) {
  var e;
  t.touches.length >= 2 || (n(this, Ks) && (n(this, Ks).abort(), u(this, Ks, null), (e = n(this, sl)) == null || e.call(this)), n(this, Ys) && (St(t), u(this, Ys, null), u(this, Bn, !1)));
};
let ac = Cu;
var zn, ts, ct, $t, pa, ji, il, Gn, zt, Un, Qs, Vi, nl, jn, we, rl, Vn, Js, Ss, ga, ma, Ge, Wn, al, Ac, z, hd, ol, cd, Ih, Tf, Pf, dd, kh, ud, Rf, Mf, If, fd, kf, pd, Lf, Df, Nf, gd, Ao;
const V = class V {
  constructor(t) {
    g(this, z);
    g(this, zn, null);
    g(this, ts, null);
    g(this, ct, null);
    g(this, $t, null);
    g(this, pa, !1);
    g(this, ji, null);
    g(this, il, "");
    g(this, Gn, !1);
    g(this, zt, null);
    g(this, Un, null);
    g(this, Qs, null);
    g(this, Vi, null);
    g(this, nl, "");
    g(this, jn, !1);
    g(this, we, null);
    g(this, rl, !1);
    g(this, Vn, !1);
    g(this, Js, !1);
    g(this, Ss, null);
    g(this, ga, 0);
    g(this, ma, 0);
    g(this, Ge, null);
    g(this, Wn, null);
    P(this, "isSelected", !1);
    P(this, "_isCopy", !1);
    P(this, "_editToolbar", null);
    P(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    P(this, "_initialData", null);
    P(this, "_isVisible", !0);
    P(this, "_uiManager", null);
    P(this, "_focusEventsAllowed", !0);
    g(this, al, !1);
    g(this, Ac, V._zIndex++);
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
    const t = V.prototype._resizeWithKeyboard, e = Fr.TRANSLATE_SMALL, s = Fr.TRANSLATE_BIG;
    return q(this, "_resizerKeyboardManager", new ph([[["ArrowLeft", "mac+ArrowLeft"], t, {
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
    }], [["Escape", "mac+Escape"], V.prototype._stopResizingWithKeyboard]]));
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
    return q(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new Dg({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (V._l10n ?? (V._l10n = t), V._l10nResizer || (V._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), V._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    V._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
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
    at("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, al);
  }
  set _isDraggable(t) {
    var e;
    u(this, al, t), (e = this.div) == null || e.classList.toggle("draggable", t);
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
    this.div.style.zIndex = n(this, Ac);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : m(this, z, Ao).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, jn) ? u(this, jn, !1) : this.parent.setSelected(this));
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
    m(this, z, hd).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, we) || u(this, we, [this.x, this.y, this.width, this.height]), m(this, z, hd).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, we) || u(this, we, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, r]
    } = this;
    if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: f,
        y: p
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, f, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
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
    return !!n(this, we) && (n(this, we)[0] !== this.x || n(this, we)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, we) && (n(this, we)[2] !== this.width || n(this, we)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = V, i = s / t, r = s / e;
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
          r = le(r, 0, s - o), a = le(a, 0, i - l);
          break;
        case 90:
          r = le(r, 0, s - l), a = le(a, o, i);
          break;
        case 180:
          r = le(r, o, s), a = le(a, l, i);
          break;
        case 270:
          r = le(r, l, s), a = le(a, 0, i - o);
          break;
      }
    this.x = r /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    r += h, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return m(s = V, ol, cd).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return m(s = V, ol, cd).call(s, t, e, 360 - this.parentRotation);
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
    r.width = `${(100 * t / s).toFixed(2)}%`, n(this, Gn) || (r.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), r = !n(this, Gn) && e.endsWith("%");
    if (i && r)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !n(this, Gn) && !r && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
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
    (t = n(this, ct)) == null || t.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || n(this, Vn))
      return this._editToolbar;
    this._editToolbar = new td(this), this.div.append(this._editToolbar.render()), this._editToolbar.addButton("comment", this.addCommentButton());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [e, s] of t)
        await this._editToolbar.addButton(e, s);
    return this._editToolbar.addButton("delete"), this._editToolbar;
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = n(this, ct)) == null || t.destroy());
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
    return n(this, ct) || (rc.initialize(V._l10n), u(this, ct, new rc(this)), n(this, zn) && (n(this, ct).data = n(this, zn), u(this, zn, null))), n(this, ct);
  }
  get altTextData() {
    var t;
    return (t = n(this, ct)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, ct) && (n(this, ct).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, ct)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, ct)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, ct)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, ct) && !n(this, ct).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, ct)) == null ? void 0 : t.hasData()) ?? !1;
  }
  addCommentButton() {
    return n(this, $t) ? n(this, $t) : u(this, $t, new Ah(this));
  }
  get commentColor() {
    return null;
  }
  get comment() {
    const t = n(this, $t);
    return {
      text: t.data.text,
      date: t.data.date,
      deleted: t.isDeleted(),
      color: this.commentColor
    };
  }
  set comment(t) {
    n(this, $t) || u(this, $t, new Ah(this)), n(this, $t).data = t;
  }
  setCommentData(t) {
    n(this, $t) || u(this, $t, new Ah(this)), n(this, $t).setInitialText(t);
  }
  get hasEditedComment() {
    var t;
    return (t = n(this, $t)) == null ? void 0 : t.hasBeenEdited();
  }
  async editComment() {
    n(this, $t) || u(this, $t, new Ah(this)), n(this, $t).edit();
  }
  addComment(t) {
    this.hasEditedComment && (t.popup = {
      contents: this.comment.text,
      deleted: this.comment.deleted
    });
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, pa) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), m(this, z, pd).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [i, r] = this.getInitialTranslation();
    return this.translate(i, r), uf(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, Wn) || u(this, Wn, new ac({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: m(this, z, Rf).bind(this),
      onPinching: m(this, z, Mf).bind(this),
      onPinchEnd: m(this, z, If).bind(this),
      signal: this._uiManager._signal
    }))), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Xt.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (u(this, jn, !0), this._isDraggable) {
      m(this, z, kf).call(this, t);
      return;
    }
    m(this, z, fd).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, Ss) && clearTimeout(n(this, Ss)), u(this, Ss, setTimeout(() => {
      var t;
      u(this, Ss, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, f = this.x * r, p = this.y * a, b = this.width * r, y = this.height * a;
    switch (s) {
      case 0:
        return [f + h + o, a - p - c - y + l, f + h + b + o, a - p - c + l];
      case 90:
        return [f + c + o, a - p + h + l, f + c + y + o, a - p + h + b + l];
      case 180:
        return [f - h - b + o, a - p + c + l, f - h + o, a - p + c + y + l];
      case 270:
        return [f - c - y + o, a - p - h - b + l, f - c + o, a - p - h + l];
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
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), u(this, Vn, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), u(this, Vn, !1), !0) : !1;
  }
  isInEditMode() {
    return n(this, Vn);
  }
  shouldGetKeyboardEvents() {
    return n(this, Js);
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
    m(this, z, pd).call(this);
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
    at("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s,
      annotationElementId: t.annotationElementId
    });
    i.rotation = t.rotation, u(i, zn, t.accessibilityData), i._isCopy = t.isCopy || !1;
    const [r, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = l / a, i.width = h / r, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, Vi)) == null || t.abort(), u(this, Vi, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, Ss) && (clearTimeout(n(this, Ss)), u(this, Ss, null)), m(this, z, Ao).call(this), this.removeEditToolbar(), n(this, Ge)) {
      for (const s of n(this, Ge).values())
        clearTimeout(s);
      u(this, Ge, null);
    }
    this.parent = null, (e = n(this, Wn)) == null || e.destroy(), u(this, Wn, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (m(this, z, Tf).call(this), n(this, zt).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), u(this, Qs, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, zt).children;
    if (!n(this, ts)) {
      u(this, ts, Array.from(e));
      const a = m(this, z, Lf).bind(this), o = m(this, z, Df).bind(this), l = this._uiManager._signal;
      for (const h of n(this, ts)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", m(this, z, Nf).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", V._l10nResizer[c]);
      }
    }
    const s = n(this, ts)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, ts).length / 4);
    if (r !== i) {
      if (r < i)
        for (let o = 0; o < i - r; o++)
          n(this, zt).append(n(this, zt).firstChild);
      else if (r > i)
        for (let o = 0; o < r - i; o++)
          n(this, zt).firstChild.before(n(this, zt).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, ts)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", V._l10nResizer[h]);
      }
    }
    m(this, z, gd).call(this, 0), u(this, Js, !0), n(this, zt).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, Js) && m(this, z, ud).call(this, n(this, nl), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    m(this, z, Ao).call(this), this.div.focus();
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
      (e = this._editToolbar) == null || e.show(), (s = n(this, ct)) == null || s.toggleAltTextBadge(!1);
    }
  }
  unselect() {
    var t, e, s, i, r;
    this.isSelected && (this.isSelected = !1, (t = n(this, zt)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (r = n(this, ct)) == null || r.toggleAltTextBadge(!0));
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
    return n(this, rl);
  }
  set isEditing(t) {
    u(this, rl, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    u(this, Gn, !0);
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
      n(this, Ge) || u(this, Ge, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = n(this, Ge).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, Ge).delete(s), n(this, Ge).size === 0 && u(this, Ge, null);
      }, V._telemetryTimeout), n(this, Ge).set(s, i);
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
    this.div && (this.div.tabIndex = 0), u(this, pa, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), u(this, pa, !0);
  }
  renderAnnotationElement(t) {
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
zn = new WeakMap(), ts = new WeakMap(), ct = new WeakMap(), $t = new WeakMap(), pa = new WeakMap(), ji = new WeakMap(), il = new WeakMap(), Gn = new WeakMap(), zt = new WeakMap(), Un = new WeakMap(), Qs = new WeakMap(), Vi = new WeakMap(), nl = new WeakMap(), jn = new WeakMap(), we = new WeakMap(), rl = new WeakMap(), Vn = new WeakMap(), Js = new WeakMap(), Ss = new WeakMap(), ga = new WeakMap(), ma = new WeakMap(), Ge = new WeakMap(), Wn = new WeakMap(), al = new WeakMap(), Ac = new WeakMap(), z = new WeakSet(), hd = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, ol = new WeakSet(), cd = function(t, e, s) {
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
}, Ih = function(t) {
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
}, Tf = function() {
  if (n(this, zt))
    return;
  u(this, zt, document.createElement("div")), n(this, zt).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, zt).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", m(this, z, Pf).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", Ye, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, zt));
}, Pf = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = Xt.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = n(this, ct)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, u(this, Un, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", m(this, z, ud).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", St, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", Ye, {
    signal: a
  }), u(this, Qs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var f;
    r.abort(), this.parent.togglePointerEvents(!0), (f = n(this, ct)) == null || f.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, m(this, z, kh).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, dd = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [r, a] = this.parentDimensions;
  this.setDims(r * s, a * i), this.fixAndSetPosition(), this._onResized();
}, kh = function() {
  if (!n(this, Qs))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = n(this, Qs);
  u(this, Qs, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === s && l === i || this.addCommands({
    cmd: m(this, z, dd).bind(this, r, a, o, l),
    undo: m(this, z, dd).bind(this, t, e, s, i),
    mustExec: !0
  });
}, ud = function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = V.MIN_SIZE / s, c = V.MIN_SIZE / i, f = m(this, z, Ih).call(this, this.rotation), p = (O, H) => [f[0] * O + f[2] * H, f[1] * O + f[3] * H], b = m(this, z, Ih).call(this, 360 - this.rotation), y = (O, H) => [b[0] * O + b[2] * H, b[1] * O + b[3] * H];
  let A, v, w = !1, S = !1;
  switch (t) {
    case "topLeft":
      w = !0, A = (O, H) => [0, 0], v = (O, H) => [O, H];
      break;
    case "topMiddle":
      A = (O, H) => [O / 2, 0], v = (O, H) => [O / 2, H];
      break;
    case "topRight":
      w = !0, A = (O, H) => [O, 0], v = (O, H) => [0, H];
      break;
    case "middleRight":
      S = !0, A = (O, H) => [O, H / 2], v = (O, H) => [0, H / 2];
      break;
    case "bottomRight":
      w = !0, A = (O, H) => [O, H], v = (O, H) => [0, 0];
      break;
    case "bottomMiddle":
      A = (O, H) => [O / 2, H], v = (O, H) => [O / 2, 0];
      break;
    case "bottomLeft":
      w = !0, A = (O, H) => [0, H], v = (O, H) => [O, 0];
      break;
    case "middleLeft":
      S = !0, A = (O, H) => [0, H / 2], v = (O, H) => [O, H / 2];
      break;
  }
  const _ = A(o, l), E = v(o, l);
  let C = p(...E);
  const x = V._round(r + C[0]), T = V._round(a + C[1]);
  let R = 1, M = 1, L, k;
  if (e.fromKeyboard)
    ({
      deltaX: L,
      deltaY: k
    } = e);
  else {
    const {
      screenX: O,
      screenY: H
    } = e, [Oe, Fs] = n(this, Un);
    [L, k] = this.screenToPageTranslation(O - Oe, H - Fs), n(this, Un)[0] = O, n(this, Un)[1] = H;
  }
  if ([L, k] = y(L / s, k / i), w) {
    const O = Math.hypot(o, l);
    R = M = Math.max(Math.min(Math.hypot(E[0] - _[0] - L, E[1] - _[1] - k) / O, 1 / o, 1 / l), h / o, c / l);
  } else S ? R = le(Math.abs(E[0] - _[0] - L), h, 1) / o : M = le(Math.abs(E[1] - _[1] - k), c, 1) / l;
  const Z = V._round(o * R), it = V._round(l * M);
  C = p(...v(Z, it));
  const X = x - C[0], te = T - C[1];
  n(this, we) || u(this, we, [this.x, this.y, this.width, this.height]), this.width = Z, this.height = it, this.x = X, this.y = te, this.setDims(s * Z, i * it), this.fixAndSetPosition(), this._onResizing();
}, Rf = function() {
  var t;
  u(this, Qs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, ct)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Mf = function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = m(this, z, Ih).call(this, this.rotation), o = (x, T) => [a[0] * x + a[2] * T, a[1] * x + a[3] * T], [l, h] = this.parentDimensions, c = this.x, f = this.y, p = this.width, b = this.height, y = V.MIN_SIZE / l, A = V.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / p, 1 / b), y / p, A / b);
  const v = V._round(p * r), w = V._round(b * r);
  if (v === p && w === b)
    return;
  n(this, we) || u(this, we, [c, f, p, b]);
  const S = o(p / 2, b / 2), _ = V._round(c + S[0]), E = V._round(f + S[1]), C = o(v / 2, w / 2);
  this.x = _ - C[0], this.y = E - C[1], this.width = v, this.height = w, this.setDims(l * v, h * w), this.fixAndSetPosition(), this._onResizing();
}, If = function() {
  var t;
  (t = n(this, ct)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), m(this, z, kh).call(this);
}, fd = function(t) {
  const {
    isMac: e
  } = Xt.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, kf = function(t) {
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
    i.abort(), u(this, ji, null), u(this, jn, !1), this._uiManager.endDragSession() || m(this, z, fd).call(this, h), s && this._onStopDragging();
  };
  e && (u(this, ga, t.clientX), u(this, ma, t.clientY), u(this, ji, t.pointerId), u(this, il, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: f,
      pointerId: p
    } = h;
    if (p !== n(this, ji)) {
      St(h);
      return;
    }
    const [b, y] = this.screenToPageTranslation(c - n(this, ga), f - n(this, ma));
    u(this, ga, c), u(this, ma, f), this._uiManager.dragSelectedEditors(b, y);
  }, a), window.addEventListener("touchmove", St, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, il) && (n(this, Wn) || h.isPrimary) && o(h), St(h);
  }, a));
  const l = (h) => {
    if (!n(this, ji) || n(this, ji) === h.pointerId) {
      o(h);
      return;
    }
    St(h);
  };
  window.addEventListener("pointerup", l, {
    signal: r
  }), window.addEventListener("blur", l, {
    signal: r
  });
}, pd = function() {
  if (n(this, Vi) || !this.div)
    return;
  u(this, Vi, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Vi));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Lf = function(t) {
  V._resizerKeyboardManager.exec(this, t);
}, Df = function(t) {
  var e;
  n(this, Js) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, zt) && m(this, z, Ao).call(this);
}, Nf = function(t) {
  u(this, nl, n(this, Js) ? t : "");
}, gd = function(t) {
  if (n(this, ts))
    for (const e of n(this, ts))
      e.tabIndex = t;
}, Ao = function() {
  u(this, Js, !1), m(this, z, gd).call(this, -1), m(this, z, kh).call(this);
}, g(V, ol), P(V, "_l10n", null), P(V, "_l10nResizer", null), P(V, "_borderLineWidth", -1), P(V, "_colorManager", new sd()), P(V, "_zIndex", 1), P(V, "_telemetryTimeout", 1e3);
let lt = V;
class Dg extends lt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Du = 3285377520, Be = 4294901760, us = 65535;
class Ff {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Du, this.h2 = t ? t & 4294967295 : Du;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let A = 0, v = t.length; A < v; A++) {
        const w = t.charCodeAt(A);
        w <= 255 ? e[s++] = w : (e[s++] = w >>> 8, e[s++] = w & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const f = 3432918353, p = 461845907, b = f & us, y = p & us;
    for (let A = 0; A < i; A++)
      A & 1 ? (o = a[A], o = o * f & Be | o * b & us, o = o << 15 | o >>> 17, o = o * p & Be | o * y & us, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[A], l = l * f & Be | l * b & us, l = l << 15 | l >>> 17, l = l * p & Be | l * y & us, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * f & Be | o * b & us, o = o << 15 | o >>> 17, o = o * p & Be | o * y & us, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Be | t * 36045 & us, e = e * 4283543511 & Be | ((e << 16 | t >>> 16) * 2950163797 & Be) >>> 16, t ^= e >>> 1, t = t * 444984403 & Be | t * 60499 & us, e = e * 3301882366 & Be | ((e << 16 | t >>> 16) * 3120437893 & Be) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const md = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var qn, Xn, Gt, yc, Of;
class bu {
  constructor() {
    g(this, yc);
    g(this, qn, !1);
    g(this, Xn, null);
    g(this, Gt, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = n(this, Gt).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, Gt).get(t);
  }
  remove(t) {
    if (n(this, Gt).delete(t), n(this, Gt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of n(this, Gt).values())
        if (e instanceof lt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = n(this, Gt).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (i = !0, s[r] = a);
    else
      i = !0, n(this, Gt).set(t, e);
    i && m(this, yc, Of).call(this), e instanceof lt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return n(this, Gt).has(t);
  }
  get size() {
    return n(this, Gt).size;
  }
  resetModified() {
    n(this, qn) && (u(this, qn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Bf(this);
  }
  get serializable() {
    if (n(this, Gt).size === 0)
      return md;
    const t = /* @__PURE__ */ new Map(), e = new Ff(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, Gt)) {
      const l = o instanceof lt ? o.serialize(!1, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : md;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of n(this, Gt).values()) {
      if (!(s instanceof lt))
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
    u(this, Xn, null);
  }
  get modifiedIds() {
    if (n(this, Xn))
      return n(this, Xn);
    const t = [];
    for (const e of n(this, Gt).values())
      !(e instanceof lt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return u(this, Xn, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return n(this, Gt).entries();
  }
}
qn = new WeakMap(), Xn = new WeakMap(), Gt = new WeakMap(), yc = new WeakSet(), Of = function() {
  n(this, qn) || (u(this, qn, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var ll;
class Bf extends bu {
  constructor(e) {
    super();
    g(this, ll);
    const {
      map: s,
      hash: i,
      transfer: r
    } = e.serializable, a = structuredClone(s, r ? {
      transfer: r
    } : null);
    u(this, ll, {
      map: a,
      hash: i,
      transfer: r
    });
  }
  get print() {
    at("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, ll);
  }
  get modifiedIds() {
    return q(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
ll = new WeakMap();
var ba;
class Ng {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    g(this, ba, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), n(this, ba).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }) {
    if (!(!t || n(this, ba).has(t.loadedName))) {
      if (Et(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: i,
          src: r,
          style: a
        } = t, o = new FontFace(i, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, ba).add(i), s == null || s(t);
        } catch {
          U(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      at("Not implemented: loadSystemFont without the Font Loading API.");
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
          throw U(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
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
    return q(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return q(this, "isSyncFontLoadingSupported", oe || Xt.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Et(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
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
    return q(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(E, C) {
      return E.charCodeAt(C) << 24 | E.charCodeAt(C + 1) << 16 | E.charCodeAt(C + 2) << 8 | E.charCodeAt(C + 3) & 255;
    }
    function i(E, C, x, T) {
      const R = E.substring(0, C), M = E.substring(C + x);
      return R + T + M;
    }
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(E, C) {
      if (++h > 30) {
        U("Load test font never loaded."), C();
        return;
      }
      if (l.font = "30px " + E, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        C();
        return;
      }
      setTimeout(c.bind(null, E, C));
    }
    const f = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, f.length, f);
    const y = 16, A = 1482184792;
    let v = s(p, y);
    for (r = 0, a = f.length - 3; r < a; r += 4)
      v = v - A + s(f, r) | 0;
    r < f.length && (v = v - A + s(f + "XXX", r) | 0), p = i(p, y, 4, yg(v));
    const w = `url(data:font/opentype;base64,${btoa(p)});`, S = `@font-face {font-family:"${f}";src:${w}}`;
    this.insertRule(S);
    const _ = this._document.createElement("div");
    _.style.visibility = "hidden", _.style.width = _.style.height = "10px", _.style.position = "absolute", _.style.top = _.style.left = "0px";
    for (const E of [t.loadedName, f]) {
      const C = this._document.createElement("span");
      C.textContent = "Hi", C.style.fontFamily = E, _.append(C);
    }
    this._document.body.append(_), c(f, () => {
      _.remove(), e.complete();
    });
  }
}
ba = new WeakMap();
class Fg {
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
    const t = `url(data:${this.mimetype};base64,${rf(this.data)});`;
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
      U(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(i || "");
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
}
function Og(d) {
  if (d instanceof URL)
    return d.href;
  if (typeof d == "string") {
    if (oe)
      return d;
    const t = URL.parse(d, window.location);
    if (t)
      return t.href;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Bg(d) {
  if (oe && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return dh(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function yh(d) {
  if (typeof d != "string")
    return null;
  if (d.endsWith("/"))
    return d;
  throw new Error(`Invalid factory url: "${d}" must include trailing slash.`);
}
const bd = (d) => typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0, Hg = (d) => typeof d == "object" && typeof (d == null ? void 0 : d.name) == "string", $g = Eg.bind(null, bd, Hg);
var Zs, wc;
class zg {
  constructor() {
    g(this, Zs, /* @__PURE__ */ new Map());
    g(this, wc, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, wc).then(() => {
      for (const [i] of n(this, Zs))
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
        U("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, Zs).set(e, i);
  }
  removeEventListener(t, e) {
    const s = n(this, Zs).get(e);
    s == null || s(), n(this, Zs).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, Zs))
      t == null || t();
    n(this, Zs).clear();
  }
}
Zs = new WeakMap(), wc = new WeakMap();
const wh = {
  DATA: 1,
  ERROR: 2
}, vt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Nu() {
}
function de(d) {
  if (d instanceof An || d instanceof Qc || d instanceof Iu || d instanceof ic || d instanceof Uc)
    return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || at('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new An(d.message);
    case "InvalidPDFException":
      return new Qc(d.message);
    case "PasswordException":
      return new Iu(d.message, d.code);
    case "ResponseException":
      return new ic(d.message, d.status, d.missing);
    case "UnknownErrorException":
      return new Uc(d.message, d.details);
  }
  return new Uc(d.message, d.toString());
}
var Aa, Xe, Hf, $f, zf, Lh;
class yo {
  constructor(t, e, s) {
    g(this, Xe);
    g(this, Aa, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", m(this, Xe, Hf).bind(this), {
      signal: n(this, Aa).signal
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
          stream: vt.PULL,
          streamId: r,
          desiredSize: h.desiredSize
        }), c.promise;
      },
      cancel: (h) => {
        Et(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = c, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: vt.CANCEL,
          streamId: r,
          reason: de(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = n(this, Aa)) == null || t.abort(), u(this, Aa, null);
  }
}
Aa = new WeakMap(), Xe = new WeakSet(), Hf = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    m(this, Xe, zf).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === wh.DATA)
      i.resolve(t.data);
    else if (t.callback === wh.ERROR)
      i.reject(de(t.reason));
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
        callback: wh.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: wh.ERROR,
        callbackId: t.callbackId,
        reason: de(a)
      });
    });
    return;
  }
  if (t.streamId) {
    m(this, Xe, $f).call(this, t);
    return;
  }
  e(t.data);
}, $f = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, f) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: i,
        stream: vt.ENQUEUE,
        streamId: e,
        chunk: h
      }, f);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: vt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      Et(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: vt.ERROR,
        streamId: e,
        reason: de(h)
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
      stream: vt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: vt.START_COMPLETE,
      streamId: e,
      reason: de(h)
    });
  });
}, zf = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case vt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(de(t.reason));
      break;
    case vt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(de(t.reason));
      break;
    case vt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || Nu).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.PULL_COMPLETE,
          streamId: e,
          reason: de(h)
        });
      });
      break;
    case vt.ENQUEUE:
      if (Et(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case vt.CLOSE:
      if (Et(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), m(this, Xe, Lh).call(this, a, e);
      break;
    case vt.ERROR:
      Et(a, "error should have stream controller"), a.controller.error(de(t.reason)), m(this, Xe, Lh).call(this, a, e);
      break;
    case vt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(de(t.reason)), m(this, Xe, Lh).call(this, a, e);
      break;
    case vt.CANCEL:
      if (!o)
        break;
      const l = de(t.reason);
      Promise.try(o.onCancel || Nu, l).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.CANCEL_COMPLETE,
          streamId: e,
          reason: de(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Lh = async function(t, e) {
  var s, i, r;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var hl;
class Gf {
  constructor({
    enableHWA: t = !1
  }) {
    g(this, hl, !1);
    u(this, hl, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !n(this, hl)
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
    at("Abstract method `_createCanvas` called.");
  }
}
hl = new WeakMap();
class Gg extends Gf {
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
class Uf {
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
    at("Abstract method `_fetch` called.");
  }
}
class Fu extends Uf {
  async _fetch(t) {
    const e = await uh(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : dh(e);
  }
}
class jf {
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
var Yn, ya, ti, ei, Jt, Kn, Qn, D, Kt, wo, Ur, Dh, jr, Vf, Ad, Vr, vo, _o, yd, So;
class Ug extends jf {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    g(this, D);
    g(this, Yn);
    g(this, ya);
    g(this, ti);
    g(this, ei);
    g(this, Jt);
    g(this, Kn);
    g(this, Qn, 0);
    u(this, ei, e), u(this, Jt, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = n(this, D, Kt).get(e);
    if (s)
      return s;
    const [i, r, a] = m(this, D, Dh).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, D, Kt).get(o), s)
      return n(this, D, Kt).set(e, s), s;
    const l = `g_${n(this, ei)}_transfer_map_${ee(this, Qn)._++}`, h = m(this, D, jr).call(this, l);
    n(this, D, Kt).set(e, h), n(this, D, Kt).set(o, h);
    const c = m(this, D, Vr).call(this, l);
    return m(this, D, _o).call(this, i, r, a, c), h;
  }
  addHCMFilter(e, s) {
    var y;
    const i = `${e}-${s}`, r = "base";
    let a = n(this, D, wo).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((y = a.filter) == null || y.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, n(this, D, wo).set(r, a)), !e || !s))
      return a.url;
    const o = m(this, D, So).call(this, e);
    e = $.makeHexColor(...o);
    const l = m(this, D, So).call(this, s);
    if (s = $.makeHexColor(...l), n(this, D, Ur).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let A = 0; A <= 255; A++) {
      const v = A / 255;
      h[A] = v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), f = `g_${n(this, ei)}_hcm_filter`, p = a.filter = m(this, D, Vr).call(this, f);
    m(this, D, _o).call(this, c, c, c, p), m(this, D, Ad).call(this, p);
    const b = (A, v) => {
      const w = o[A] / 255, S = l[A] / 255, _ = new Array(v + 1);
      for (let E = 0; E <= v; E++)
        _[E] = w + E / v * (S - w);
      return _.join(",");
    };
    return m(this, D, _o).call(this, b(0, 5), b(1, 5), b(2, 5), p), a.url = m(this, D, jr).call(this, f), a.url;
  }
  addAlphaFilter(e) {
    let s = n(this, D, Kt).get(e);
    if (s)
      return s;
    const [i] = m(this, D, Dh).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, D, Kt).get(r), s)
      return n(this, D, Kt).set(e, s), s;
    const a = `g_${n(this, ei)}_alpha_map_${ee(this, Qn)._++}`, o = m(this, D, jr).call(this, a);
    n(this, D, Kt).set(e, o), n(this, D, Kt).set(r, o);
    const l = m(this, D, Vr).call(this, a);
    return m(this, D, yd).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, D, Kt).get(e || "luminosity");
    if (s)
      return s;
    let i, r;
    if (e ? ([i] = m(this, D, Dh).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, D, Kt).get(r), s)
      return n(this, D, Kt).set(e, s), s;
    const a = `g_${n(this, ei)}_luminosity_map_${ee(this, Qn)._++}`, o = m(this, D, jr).call(this, a);
    n(this, D, Kt).set(e, o), n(this, D, Kt).set(r, o);
    const l = m(this, D, Vr).call(this, a);
    return m(this, D, Vf).call(this, l), e && m(this, D, yd).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    var S;
    const o = `${s}-${i}-${r}-${a}`;
    let l = n(this, D, wo).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, D, wo).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(m(this, D, So).bind(this));
    let f = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [b, y] = [r, a].map(m(this, D, So).bind(this));
    p < f && ([f, p, b, y] = [p, f, y, b]), n(this, D, Ur).style.color = "";
    const A = (_, E, C) => {
      const x = new Array(256), T = (p - f) / C, R = _ / 255, M = (E - _) / (255 * C);
      let L = 0;
      for (let k = 0; k <= C; k++) {
        const Z = Math.round(f + k * T), it = R + k * M;
        for (let X = L; X <= Z; X++)
          x[X] = it;
        L = Z + 1;
      }
      for (let k = L; k < 256; k++)
        x[k] = x[L - 1];
      return x.join(",");
    }, v = `g_${n(this, ei)}_hcm_${e}_filter`, w = l.filter = m(this, D, Vr).call(this, v);
    return m(this, D, Ad).call(this, w), m(this, D, _o).call(this, A(b[0], y[0], 5), A(b[1], y[1], 5), A(b[2], y[2], 5), w), l.url = m(this, D, jr).call(this, v), l.url;
  }
  destroy(e = !1) {
    var s, i, r, a;
    e && ((s = n(this, Kn)) != null && s.size) || ((i = n(this, ti)) == null || i.parentNode.parentNode.remove(), u(this, ti, null), (r = n(this, ya)) == null || r.clear(), u(this, ya, null), (a = n(this, Kn)) == null || a.clear(), u(this, Kn, null), u(this, Qn, 0));
  }
}
Yn = new WeakMap(), ya = new WeakMap(), ti = new WeakMap(), ei = new WeakMap(), Jt = new WeakMap(), Kn = new WeakMap(), Qn = new WeakMap(), D = new WeakSet(), Kt = function() {
  return n(this, ya) || u(this, ya, /* @__PURE__ */ new Map());
}, wo = function() {
  return n(this, Kn) || u(this, Kn, /* @__PURE__ */ new Map());
}, Ur = function() {
  if (!n(this, ti)) {
    const e = n(this, Jt).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, Jt).createElementNS(Os, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), u(this, ti, n(this, Jt).createElementNS(Os, "defs")), e.append(i), i.append(n(this, ti)), n(this, Jt).body.append(e);
  }
  return n(this, ti);
}, Dh = function(e) {
  if (e.length === 1) {
    const h = e[0], c = new Array(256);
    for (let p = 0; p < 256; p++)
      c[p] = h[p] / 255;
    const f = c.join(",");
    return [f, f, f];
  }
  const [s, i, r] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = r[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, jr = function(e) {
  if (n(this, Yn) === void 0) {
    u(this, Yn, "");
    const s = n(this, Jt).URL;
    s !== n(this, Jt).baseURI && (Nc(s) ? U('#createUrl: ignore "data:"-URL for performance reasons.') : u(this, Yn, ef(s, "")));
  }
  return `url(${n(this, Yn)}#${e})`;
}, Vf = function(e) {
  const s = n(this, Jt).createElementNS(Os, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Ad = function(e) {
  const s = n(this, Jt).createElementNS(Os, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, Vr = function(e) {
  const s = n(this, Jt).createElementNS(Os, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, D, Ur).append(s), s;
}, vo = function(e, s, i) {
  const r = n(this, Jt).createElementNS(Os, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, _o = function(e, s, i, r) {
  const a = n(this, Jt).createElementNS(Os, "feComponentTransfer");
  r.append(a), m(this, D, vo).call(this, a, "feFuncR", e), m(this, D, vo).call(this, a, "feFuncG", s), m(this, D, vo).call(this, a, "feFuncB", i);
}, yd = function(e, s) {
  const i = n(this, Jt).createElementNS(Os, "feComponentTransfer");
  s.append(i), m(this, D, vo).call(this, i, "feFuncA", e);
}, So = function(e) {
  return n(this, D, Ur).style.color = e, Fc(getComputedStyle(n(this, D, Ur)).getPropertyValue("color"));
};
class Wf {
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
    at("Abstract method `_fetch` called.");
  }
}
class Ou extends Wf {
  async _fetch(t) {
    const e = await uh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class qf {
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
    at("Abstract method `_fetch` called.");
  }
}
class Bu extends qf {
  async _fetch(t) {
    const e = await uh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
oe && U("Please use the `legacy` build in Node.js environments.");
async function Au(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class jg extends jf {
}
class Vg extends Gf {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Wg extends Uf {
  async _fetch(t) {
    return Au(t);
  }
}
class qg extends Wf {
  async _fetch(t) {
    return Au(t);
  }
}
class Xg extends qf {
  async _fetch(t) {
    return Au(t);
  }
}
const Vt = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function wd(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class yu {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    at("Abstract method `getPattern` called.");
  }
}
class Yg extends yu {
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
    if (i === Vt.STROKE || i === Vt.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, pt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = $.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), wd(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(h.canvas, "no-repeat");
      const f = new DOMMatrix(s);
      r.setTransform(f);
    } else
      wd(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function Wc(d, t, e, s, i, r, a, o) {
  const l = t.coords, h = t.colors, c = d.data, f = d.width * 4;
  let p;
  l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), l[s + 1] > l[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const b = (l[e] + t.offsetX) * t.scaleX, y = (l[e + 1] + t.offsetY) * t.scaleY, A = (l[s] + t.offsetX) * t.scaleX, v = (l[s + 1] + t.offsetY) * t.scaleY, w = (l[i] + t.offsetX) * t.scaleX, S = (l[i + 1] + t.offsetY) * t.scaleY;
  if (y >= S)
    return;
  const _ = h[r], E = h[r + 1], C = h[r + 2], x = h[a], T = h[a + 1], R = h[a + 2], M = h[o], L = h[o + 1], k = h[o + 2], Z = Math.round(y), it = Math.round(S);
  let X, te, O, H, Oe, Fs, Sn, cs;
  for (let It = Z; It <= it; It++) {
    if (It < v) {
      const gt = It < y ? 0 : (y - It) / (y - v);
      X = b - (b - A) * gt, te = _ - (_ - x) * gt, O = E - (E - T) * gt, H = C - (C - R) * gt;
    } else {
      let gt;
      It > S ? gt = 1 : v === S ? gt = 0 : gt = (v - It) / (v - S), X = A - (A - w) * gt, te = x - (x - M) * gt, O = T - (T - L) * gt, H = R - (R - k) * gt;
    }
    let bt;
    It < y ? bt = 0 : It > S ? bt = 1 : bt = (y - It) / (y - S), Oe = b - (b - w) * bt, Fs = _ - (_ - M) * bt, Sn = E - (E - L) * bt, cs = C - (C - k) * bt;
    const $r = Math.round(Math.min(X, Oe)), Ci = Math.round(Math.max(X, Oe));
    let xi = f * It + $r * 4;
    for (let gt = $r; gt <= Ci; gt++)
      bt = (X - gt) / (X - Oe), bt < 0 ? bt = 0 : bt > 1 && (bt = 1), c[xi++] = te - (te - Fs) * bt | 0, c[xi++] = O - (O - Sn) * bt | 0, c[xi++] = H - (H - cs) * bt | 0, c[xi++] = 255;
  }
}
function Kg(d, t, e) {
  const s = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (r = 0; r < l; r++) {
        let c = r * o;
        for (let f = 0; f < h; f++, c++)
          Wc(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), Wc(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = s.length; r < a; r += 3)
        Wc(d, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Qg extends yu {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, f = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), b = h / f, y = c / p, A = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / b,
      scaleY: 1 / y
    }, v = f + 2 * 2, w = p + 2 * 2, S = s.getCanvas("mesh", v, w), _ = S.context, E = _.createImageData(f, p);
    if (e) {
      const x = E.data;
      for (let T = 0, R = x.length; T < R; T += 4)
        x[T] = e[0], x[T + 1] = e[1], x[T + 2] = e[2], x[T + 3] = 255;
    }
    for (const x of this._figures)
      Kg(E, x, A);
    return _.putImageData(E, 2, 2), {
      canvas: S.canvas,
      offsetX: o - 2 * b,
      offsetY: l - 2 * y,
      scaleX: b,
      scaleY: y
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, s, i) {
    wd(t, this._bbox);
    const r = new Float32Array(2);
    if (i === Vt.SHADING)
      $.singularValueDecompose2dScale(pt(t), r);
    else if (this.matrix) {
      $.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      $.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else
      $.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, i === Vt.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Vt.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class Jg extends yu {
  getPattern() {
    return "hotpink";
  }
}
function Zg(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new Yg(d);
    case "Mesh":
      return new Qg(d);
    case "Dummy":
      return new Jg();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const Hu = {
  COLORED: 1,
  UNCOLORED: 2
}, vc = class vc {
  constructor(t, e, s, i) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = s, this.baseTransform = i;
  }
  createPatternCanvas(t) {
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
    l = Math.abs(l), h = Math.abs(h), Dc("TilingType: " + r);
    const c = e[0], f = e[1], p = e[2], b = e[3], y = p - c, A = b - f, v = new Float32Array(2);
    $.singularValueDecompose2dScale(this.matrix, v);
    const [w, S] = v;
    $.singularValueDecompose2dScale(this.baseTransform, v);
    const _ = w * v[0], E = S * v[1];
    let C = y, x = A, T = !1, R = !1;
    const M = Math.ceil(l * _), L = Math.ceil(h * E), k = Math.ceil(y * _), Z = Math.ceil(A * E);
    M >= k ? C = l : T = !0, L >= Z ? x = h : R = !0;
    const it = this.getSizeAndScale(C, this.ctx.canvas.width, _), X = this.getSizeAndScale(x, this.ctx.canvas.height, E), te = t.cachedCanvases.getCanvas("pattern", it.size, X.size), O = te.context, H = o.createCanvasGraphics(O);
    if (H.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(H, i, a), O.translate(-it.scale * c, -X.scale * f), H.transform(it.scale, 0, 0, X.scale, 0, 0), O.save(), this.clipBbox(H, c, f, p, b), H.baseTransform = pt(H.ctx), H.executeOperatorList(s), H.endDrawing(), O.restore(), T || R) {
      const Oe = te.canvas;
      T && (C = l), R && (x = h);
      const Fs = this.getSizeAndScale(C, this.ctx.canvas.width, _), Sn = this.getSizeAndScale(x, this.ctx.canvas.height, E), cs = Fs.size, It = Sn.size, bt = t.cachedCanvases.getCanvas("pattern-workaround", cs, It), $r = bt.context, Ci = T ? Math.floor(y / l) : 0, xi = R ? Math.floor(A / h) : 0;
      for (let gt = 0; gt <= Ci; gt++)
        for (let lo = 0; lo <= xi; lo++)
          $r.drawImage(Oe, cs * gt, It * lo, cs, It, 0, 0, cs, It);
      return {
        canvas: bt.canvas,
        scaleX: Fs.scale,
        scaleY: Sn.scale,
        offsetX: c,
        offsetY: f
      };
    }
    return {
      canvas: te.canvas,
      scaleX: it.scale,
      scaleY: X.scale,
      offsetX: c,
      offsetY: f
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(vc.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= i ? r = i : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, i, r) {
    const a = i - e, o = r - s;
    t.ctx.rect(e, s, a, o), $.axialAlignedBoundingBox([e, s, i, r], pt(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, r = t.current;
    switch (e) {
      case Hu.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        i.fillStyle = r.fillColor = a, i.strokeStyle = r.strokeColor = o;
        break;
      case Hu.UNCOLORED:
        i.fillStyle = i.strokeStyle = s, r.fillColor = r.strokeColor = s;
        break;
      default:
        throw new Ag(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, s, i) {
    let r = s;
    i !== Vt.SHADING && (r = $.transform(r, e.baseTransform), this.matrix && (r = $.transform(r, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(r);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
P(vc, "MAX_PATTERN_SIZE", 3e3);
let vd = vc;
function tm({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = Xt.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], c = s >> 3, f = s & 7, p = d.length;
  e = new Uint32Array(e.buffer);
  let b = 0;
  for (let y = 0; y < i; y++) {
    for (const v = t + c; t < v; t++) {
      const w = t < p ? d[t] : 255;
      e[b++] = w & 128 ? h : l, e[b++] = w & 64 ? h : l, e[b++] = w & 32 ? h : l, e[b++] = w & 16 ? h : l, e[b++] = w & 8 ? h : l, e[b++] = w & 4 ? h : l, e[b++] = w & 2 ? h : l, e[b++] = w & 1 ? h : l;
    }
    if (f === 0)
      continue;
    const A = t < p ? d[t++] : 255;
    for (let v = 0; v < f; v++)
      e[b++] = A & 1 << 7 - v ? h : l;
  }
  return {
    srcPos: t,
    destPos: b
  };
}
const $u = 16, zu = 100, em = 15, Gu = 10, me = 16, qc = new DOMMatrix(), De = new Float32Array(2), Yr = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function sm(d, t) {
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
class im {
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
function vh(d, t, e, s, i, r, a, o, l, h) {
  const [c, f, p, b, y, A] = pt(d);
  if (f === 0 && p === 0) {
    const S = a * c + y, _ = Math.round(S), E = o * b + A, C = Math.round(E), x = (a + l) * c + y, T = Math.abs(Math.round(x) - _) || 1, R = (o + h) * b + A, M = Math.abs(Math.round(R) - C) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(b), _, C), d.drawImage(t, e, s, i, r, 0, 0, T, M), d.setTransform(c, f, p, b, y, A), [T, M];
  }
  if (c === 0 && b === 0) {
    const S = o * p + y, _ = Math.round(S), E = a * f + A, C = Math.round(E), x = (o + h) * p + y, T = Math.abs(Math.round(x) - _) || 1, R = (a + l) * f + A, M = Math.abs(Math.round(R) - C) || 1;
    return d.setTransform(0, Math.sign(f), Math.sign(p), 0, _, C), d.drawImage(t, e, s, i, r, 0, 0, M, T), d.setTransform(c, f, p, b, y, A), [M, T];
  }
  d.drawImage(t, e, s, i, r, a, o, l, h);
  const v = Math.hypot(c, f), w = Math.hypot(p, b);
  return [v * l, w * h];
}
class Uu {
  constructor(t, e) {
    P(this, "alphaIsShape", !1);
    P(this, "fontSize", 0);
    P(this, "fontSizeScale", 1);
    P(this, "textMatrix", null);
    P(this, "textMatrixScale", 1);
    P(this, "fontMatrix", Kc);
    P(this, "leading", 0);
    P(this, "x", 0);
    P(this, "y", 0);
    P(this, "lineX", 0);
    P(this, "lineY", 0);
    P(this, "charSpacing", 0);
    P(this, "wordSpacing", 0);
    P(this, "textHScale", 1);
    P(this, "textRenderingMode", Yt.FILL);
    P(this, "textRise", 0);
    P(this, "fillColor", "#000000");
    P(this, "strokeColor", "#000000");
    P(this, "patternFill", !1);
    P(this, "patternStroke", !1);
    P(this, "fillAlpha", 1);
    P(this, "strokeAlpha", 1);
    P(this, "lineWidth", 1);
    P(this, "activeSMask", null);
    P(this, "transferMaps", "none");
    this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = Yr.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = Vt.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === Vt.STROKE) {
      e || at("Stroke bounding box must include transform."), $.singularValueDecompose2dScale(e, De);
      const i = De[0] * this.lineWidth / 2, r = De[1] * this.lineWidth / 2;
      s[0] -= i, s[1] -= r, s[2] += i, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = $.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(Yr, 0);
  }
  getClippedPathBoundingBox(t = Vt.FILL, e = null) {
    return $.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function ju(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % me, r = (e - i) / me, a = i === 0 ? r : r + 1, o = d.createImageData(s, me);
  let l = 0, h;
  const c = t.data, f = o.data;
  let p, b, y, A;
  if (t.kind === Ch.GRAYSCALE_1BPP) {
    const v = c.byteLength, w = new Uint32Array(f.buffer, 0, f.byteLength >> 2), S = w.length, _ = s + 7 >> 3, E = 4294967295, C = Xt.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (y = p < r ? me : i, h = 0, b = 0; b < y; b++) {
        const x = v - l;
        let T = 0;
        const R = x > _ ? s : x * 8 - 7, M = R & -8;
        let L = 0, k = 0;
        for (; T < M; T += 8)
          k = c[l++], w[h++] = k & 128 ? E : C, w[h++] = k & 64 ? E : C, w[h++] = k & 32 ? E : C, w[h++] = k & 16 ? E : C, w[h++] = k & 8 ? E : C, w[h++] = k & 4 ? E : C, w[h++] = k & 2 ? E : C, w[h++] = k & 1 ? E : C;
        for (; T < R; T++)
          L === 0 && (k = c[l++], L = 128), w[h++] = k & L ? E : C, L >>= 1;
      }
      for (; h < S; )
        w[h++] = 0;
      d.putImageData(o, 0, p * me);
    }
  } else if (t.kind === Ch.RGBA_32BPP) {
    for (b = 0, A = s * me * 4, p = 0; p < r; p++)
      f.set(c.subarray(l, l + A)), l += A, d.putImageData(o, 0, b), b += me;
    p < a && (A = s * i * 4, f.set(c.subarray(l, l + A)), d.putImageData(o, 0, b));
  } else if (t.kind === Ch.RGB_24BPP)
    for (y = me, A = s * y, p = 0; p < a; p++) {
      for (p >= r && (y = i, A = s * y), h = 0, b = A; b--; )
        f[h++] = c[l++], f[h++] = c[l++], f[h++] = c[l++], f[h++] = 255;
      d.putImageData(o, 0, p * me);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Vu(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % me, r = (e - i) / me, a = i === 0 ? r : r + 1, o = d.createImageData(s, me);
  let l = 0;
  const h = t.data, c = o.data;
  for (let f = 0; f < a; f++) {
    const p = f < r ? me : i;
    ({
      srcPos: l
    } = tm({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), d.putImageData(o, 0, f * me);
  }
}
function ho(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function _h(d) {
  d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0);
  const {
    filter: t
  } = d;
  t !== "none" && t !== "" && (d.filter = "none");
}
function Wu(d, t) {
  if (t)
    return !0;
  $.singularValueDecompose2dScale(d, De);
  const e = Math.fround(Ds.pixelRatio * yn.PDF_TO_CSS_UNITS);
  return De[0] <= e && De[1] <= e;
}
const nm = ["butt", "round", "square"], rm = ["miter", "round", "bevel"], am = {}, qu = {};
var hs, _d, Sd, Ed;
const xu = class xu {
  constructor(t, e, s, i, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h) {
    g(this, hs);
    this.ctx = t, this.current = new Uu(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new im(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
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
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...pt(this.compositeCtx));
    }
    this.ctx.save(), _h(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = pt(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const r = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const l = r.length;
    if (l === o)
      return o;
    const h = l - o > Gu && typeof s == "function", c = h ? Date.now() + em : 0;
    let f = 0;
    const p = this.commonObjs, b = this.objs;
    let y;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (y = a[o], y !== sc.dependency)
        this[y].apply(this, r[o]);
      else
        for (const A of r[o]) {
          const v = A.startsWith("g_") ? p : b;
          if (!v.has(A))
            return v.get(A, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++f > Gu) {
        if (Date.now() > c)
          return s(), o;
        f = 0;
      }
    }
  }
  endDrawing() {
    m(this, hs, _d).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), m(this, hs, Sd).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, f;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let p = o, b = l;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && l > 1 && (b = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / b), c = this.cachedCanvases.getCanvas(h, p, b), f = c.context, f.clearRect(0, 0, p, b), f.drawImage(t, 0, 0, o, l, 0, 0, p, b), t = c.canvas, o = p, l = b, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: s,
      height: i
    } = t, r = this.current.fillColor, a = this.current.patternFill, o = pt(e);
    let l, h, c, f;
    if ((t.bitmap || t.data) && t.count > 1) {
      const M = t.bitmap || t.data.buffer;
      h = JSON.stringify(a ? o : [o.slice(0, 4), r]), l = this._cachedBitmapsMap.get(M), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(M, l));
      const L = l.get(h);
      if (L && !a) {
        const k = Math.round(Math.min(o[0], o[2]) + o[4]), Z = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: L,
          offsetX: k,
          offsetY: Z
        };
      }
      c = L;
    }
    c || (f = this.cachedCanvases.getCanvas("maskCanvas", s, i), Vu(f.context, t));
    let p = $.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    p = $.transform(p, [1, 0, 0, 1, 0, -i]);
    const b = Yr.slice();
    $.axialAlignedBoundingBox([0, 0, s, i], p, b);
    const [y, A, v, w] = b, S = Math.round(v - y) || 1, _ = Math.round(w - A) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", S, _), C = E.context, x = y, T = A;
    C.translate(-x, -T), C.transform(...p), c || (c = this._scaleImage(f.canvas, ds(C)), c = c.img, l && a && l.set(h, c)), C.imageSmoothingEnabled = Wu(pt(C), t.interpolate), vh(C, c, 0, 0, c.width, c.height, 0, 0, s, i), C.globalCompositeOperation = "source-in";
    const R = $.transform(ds(C), [1, 0, 0, 1, -x, -T]);
    return C.fillStyle = a ? r.getPattern(e, this, R, Vt.FILL) : r, C.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(x),
      offsetY: Math.round(T)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = nm[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = rm[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, s] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.ctx.globalAlpha = this.current.fillAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
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
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
    this.suspendedCtx = this.ctx;
    const r = this.ctx = i.context;
    r.setTransform(this.suspendedCtx.getTransform()), ho(this.suspendedCtx, r), sm(r, this.suspendedCtx), this.setGState([["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), ho(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
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
  genericComposeSMask(t, e, s, i, r, a, o, l, h, c, f) {
    let p = t.canvas, b = l - c, y = h - f;
    if (a)
      if (b < 0 || y < 0 || b + s > p.width || y + i > p.height) {
        const v = this.cachedCanvases.getCanvas("maskExtension", s, i), w = v.context;
        w.drawImage(p, -b, -y), w.globalCompositeOperation = "destination-atop", w.fillStyle = a, w.fillRect(0, 0, s, i), w.globalCompositeOperation = "source-over", p = v.canvas, b = y = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const v = new Path2D();
        v.rect(b, y, s, i), t.clip(v), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(b, y, s, i), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const A = new Path2D();
    A.rect(l, h, s, i), e.clip(A), e.globalCompositeOperation = "destination-in", e.drawImage(p, b, y, s, i, l, h, s, i), e.restore();
  }
  save() {
    this.inSMaskMode && ho(this.ctx, this.suspendedCtx), this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    if (this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && ho(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, s, i, r, a) {
    this.ctx.transform(t, e, s, i, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    let [i] = e;
    if (!s) {
      i || (i = e[0] = new Path2D()), this[t](i);
      return;
    }
    if (!(i instanceof Path2D)) {
      const r = e[0] = new Path2D();
      for (let a = 0, o = i.length; a < o; )
        switch (i[a++]) {
          case bh.moveTo:
            r.moveTo(i[a++], i[a++]);
            break;
          case bh.lineTo:
            r.lineTo(i[a++], i[a++]);
            break;
          case bh.curveTo:
            r.bezierCurveTo(i[a++], i[a++], i[a++], i[a++], i[a++], i[a++]);
            break;
          case bh.closePath:
            r.closePath();
            break;
          default:
            U(`Unrecognized drawing path operator: ${i[a - 1]}`);
            break;
        }
      i = r;
    }
    $.axialAlignedBoundingBox(s, pt(this.ctx), this.current.minMax), this[t](i);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t, e = !0) {
    const s = this.ctx, i = this.current.strokeColor;
    if (s.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof i == "object" && (i != null && i.getPattern)) {
        const r = i.isModifyingCurrentTransform() ? s.getTransform() : null;
        if (s.save(), s.strokeStyle = i.getPattern(s, this, ds(s), Vt.STROKE), r) {
          const a = new Path2D();
          a.addPath(t, s.getTransform().invertSelf().multiplySelf(r)), t = a;
        }
        this.rescaleAndStroke(t, !1), s.restore();
      } else
        this.rescaleAndStroke(t, !0);
    e && this.consumePath(t, this.current.getClippedPathBoundingBox(Vt.STROKE, pt(this.ctx))), s.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t) {
    this.stroke(t);
  }
  fill(t, e = !0) {
    const s = this.ctx, i = this.current.fillColor, r = this.current.patternFill;
    let a = !1;
    if (r) {
      const l = i.isModifyingCurrentTransform() ? s.getTransform() : null;
      if (s.save(), s.fillStyle = i.getPattern(s, this, ds(s), Vt.FILL), l) {
        const h = new Path2D();
        h.addPath(t, s.getTransform().invertSelf().multiplySelf(l)), t = h;
      }
      a = !0;
    }
    const o = this.current.getClippedPathBoundingBox();
    this.contentVisible && o !== null && (this.pendingEOFill ? (s.fill(t, "evenodd"), this.pendingEOFill = !1) : s.fill(t)), a && s.restore(), e && this.consumePath(t, o);
  }
  eoFill(t) {
    this.pendingEOFill = !0, this.fill(t);
  }
  fillStroke(t) {
    this.fill(t, !1), this.stroke(t, !1), this.consumePath(t);
  }
  eoFillStroke(t) {
    this.pendingEOFill = !0, this.fillStroke(t);
  }
  closeFillStroke(t) {
    this.fillStroke(t);
  }
  closeEOFillStroke(t) {
    this.pendingEOFill = !0, this.fillStroke(t);
  }
  endPath(t) {
    this.consumePath(t);
  }
  rawFillPath(t) {
    this.ctx.fill(t);
  }
  clip() {
    this.pendingClip = am;
  }
  eoClip() {
    this.pendingClip = qu;
  }
  beginText() {
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0)
      return;
    const s = new Path2D(), i = e.getTransform().invertSelf();
    for (const {
      transform: r,
      x: a,
      y: o,
      fontSize: l,
      path: h
    } of t)
      h && s.addPath(h, new DOMMatrix(r).preMultiplySelf(i).translate(a, o).scale(l, -l));
    e.clip(s), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var c;
    const s = this.commonObjs.get(t), i = this.current;
    if (!s)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = s.fontMatrix || Kc, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && U("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const r = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${r}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < $u ? h = $u : e > zu && (h = zu), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t) {
    const {
      current: e
    } = this;
    e.textMatrix = t, e.textMatrixScale = Math.hypot(t[0], t[1]), e.x = e.lineX = 0, e.y = e.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, s, i, r) {
    const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, f = h & Yt.FILL_STROKE_MASK, p = !!(h & Yt.ADD_TO_PATH_FLAG), b = o.patternFill && !l.missingFile, y = o.patternStroke && !l.missingFile;
    let A;
    if ((l.disableFontFace || p || b || y) && !l.missingFile && (A = l.getPathGenerator(this.commonObjs, t)), A && (l.disableFontFace || b || y)) {
      a.save(), a.translate(e, s), a.scale(c, -c);
      let v;
      if ((f === Yt.FILL || f === Yt.FILL_STROKE) && (i ? (v = a.getTransform(), a.setTransform(...i), a.fill(m(this, hs, Ed).call(this, A, v, i))) : a.fill(A)), f === Yt.STROKE || f === Yt.FILL_STROKE)
        if (r) {
          v || (v = a.getTransform()), a.setTransform(...r);
          const {
            a: w,
            b: S,
            c: _,
            d: E
          } = v, C = $.inverseTransform(r), x = $.transform([w, S, _, E, 0, 0], C);
          $.singularValueDecompose2dScale(x, De), a.lineWidth *= Math.max(De[0], De[1]) / c, a.stroke(m(this, hs, Ed).call(this, A, v, r));
        } else
          a.lineWidth /= c, a.stroke(A);
      a.restore();
    } else
      (f === Yt.FILL || f === Yt.FILL_STROKE) && a.fillText(t, e, s), (f === Yt.STROKE || f === Yt.FILL_STROKE) && a.strokeText(t, e, s);
    p && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: pt(a),
      x: e,
      y: s,
      fontSize: c,
      path: A
    });
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
    return q(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const r = this.ctx, a = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, c = e.textHScale * h, f = t.length, p = s.vertical, b = p ? 1 : -1, y = s.defaultVMetrics, A = i * e.fontMatrix[0], v = e.textRenderingMode === Yt.FILL && !s.disableFontFace && !e.patternFill;
    r.save(), e.textMatrix && r.transform(...e.textMatrix), r.translate(e.x, e.y + e.textRise), h > 0 ? r.scale(c, -1) : r.scale(c, 1);
    let w, S;
    if (e.patternFill) {
      r.save();
      const T = e.fillColor.getPattern(r, this, ds(r), Vt.FILL);
      w = pt(r), r.restore(), r.fillStyle = T;
    }
    if (e.patternStroke) {
      r.save();
      const T = e.strokeColor.getPattern(r, this, ds(r), Vt.STROKE);
      S = pt(r), r.restore(), r.strokeStyle = T;
    }
    let _ = e.lineWidth;
    const E = e.textMatrixScale;
    if (E === 0 || _ === 0) {
      const T = e.textRenderingMode & Yt.FILL_STROKE_MASK;
      (T === Yt.STROKE || T === Yt.FILL_STROKE) && (_ = this.getSinglePixelWidth());
    } else
      _ /= E;
    if (a !== 1 && (r.scale(a, a), _ /= a), r.lineWidth = _, s.isInvalidPDFjsFont) {
      const T = [];
      let R = 0;
      for (const M of t)
        T.push(M.unicode), R += M.width;
      r.fillText(T.join(""), 0, 0), e.x += R * A * c, r.restore(), this.compose();
      return;
    }
    let C = 0, x;
    for (x = 0; x < f; ++x) {
      const T = t[x];
      if (typeof T == "number") {
        C += b * T * i / 1e3;
        continue;
      }
      let R = !1;
      const M = (T.isSpace ? l : 0) + o, L = T.fontChar, k = T.accent;
      let Z, it, X = T.width;
      if (p) {
        const O = T.vmetric || y, H = -(T.vmetric ? O[1] : X * 0.5) * A, Oe = O[2] * A;
        X = O ? -O[0] : X, Z = H / a, it = (C + Oe) / a;
      } else
        Z = C / a, it = 0;
      if (s.remeasure && X > 0) {
        const O = r.measureText(L).width * 1e3 / i * a;
        if (X < O && this.isFontSubpixelAAEnabled) {
          const H = X / O;
          R = !0, r.save(), r.scale(H, 1), Z /= H;
        } else X !== O && (Z += (X - O) / 2e3 * i / a);
      }
      if (this.contentVisible && (T.isInFont || s.missingFile)) {
        if (v && !k)
          r.fillText(L, Z, it);
        else if (this.paintChar(L, Z, it, w, S), k) {
          const O = Z + i * k.offset.x / a, H = it - i * k.offset.y / a;
          this.paintChar(k.fontChar, O, H, w, S);
        }
      }
      const te = p ? X * A - M * h : X * A + M * h;
      C += te, R && r.restore();
    }
    p ? e.y -= C : e.x += C * c, r.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, r = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, f = s.fontMatrix || Kc, p = t.length, b = s.textRenderingMode === Yt.INVISIBLE;
    let y, A, v, w;
    if (!(b || r === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), s.textMatrix && e.transform(...s.textMatrix), e.translate(s.x, s.y + s.textRise), e.scale(c, a), y = 0; y < p; ++y) {
        if (A = t[y], typeof A == "number") {
          w = o * A * r / 1e3, this.ctx.translate(w, 0), s.x += w * c;
          continue;
        }
        const S = (A.isSpace ? h : 0) + l, _ = i.charProcOperatorList[A.operatorListId];
        _ ? this.contentVisible && (this.save(), e.scale(r, r), e.transform(...f), this.executeOperatorList(_), this.restore()) : U(`Type3 character "${A.operatorListId}" is not available.`);
        const E = [A.width, 0];
        $.applyTransform(E, f), v = E[0] * r + S, e.translate(v, 0), s.x += v * c;
      }
      e.restore();
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, s, i, r, a) {
    const o = new Path2D();
    o.rect(s, i, r - s, a - i), this.ctx.clip(o), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const s = this.baseTransform || pt(this.ctx), i = {
        createCanvasGraphics: (r) => new xu(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new vd(t, this.ctx, i, s);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments), this.current.patternStroke = !0;
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t) {
    this.ctx.strokeStyle = this.current.strokeColor = t, this.current.patternStroke = !1;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t) {
    this.ctx.fillStyle = this.current.fillColor = t, this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = Zg(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, ds(e), Vt.SHADING);
    const i = ds(e);
    if (i) {
      const {
        width: r,
        height: a
      } = e.canvas, o = Yr.slice();
      $.axialAlignedBoundingBox([0, 0, r, a], i, o);
      const [l, h, c, f] = o;
      this.ctx.fillRect(l, h, c - l, f - h);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    at("Should not call beginInlineImage");
  }
  beginImageData() {
    at("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = pt(this.ctx), e)) {
      $.axialAlignedBoundingBox(e, this.baseTransform, this.current.minMax);
      const [s, i, r, a] = e, o = new Path2D();
      o.rect(s, i, r - s, a - i), this.ctx.clip(o), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || Dc("TODO: Support non-isolated groups."), t.knockout && U("Knockout groups not supported.");
    const s = pt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = Yr.slice();
    $.axialAlignedBoundingBox(t.bbox, pt(e), i);
    const r = [0, 0, e.canvas.width, e.canvas.height];
    i = $.intersect(i, r) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - a, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const f = this.cachedCanvases.getCanvas(c, l, h), p = f.context;
    p.translate(-a, -o), p.transform(...s);
    let b = new Path2D();
    const [y, A, v, w] = t.bbox;
    if (b.rect(y, A, v - y, w - A), t.matrix) {
      const S = new Path2D();
      S.addPath(b, new DOMMatrix(t.matrix)), b = S;
    }
    p.clip(b), t.smask ? this.smaskStack.push({
      canvas: f.canvas,
      context: p,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), ho(e, p), this.ctx = p, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = pt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const r = Yr.slice();
      $.axialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i, r), this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(r);
    }
  }
  beginAnnotation(t, e, s, i, r) {
    if (m(this, hs, _d).call(this), _h(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (r && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o, $.singularValueDecompose2dScale(pt(this.ctx), De);
        const {
          viewportScale: l
        } = this, h = Math.ceil(a * this.outputScaleX * l), c = Math.ceil(o * this.outputScaleY * l);
        this.annotationCanvas = this.canvasFactory.create(h, c);
        const {
          canvas: f,
          context: p
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, f), this.annotationCanvas.savedCtx = this.ctx, this.ctx = p, this.ctx.save(), this.ctx.setTransform(De[0], 0, 0, -De[1], 0, o * De[1]), _h(this.ctx);
      } else {
        _h(this.ctx), this.endPath();
        const l = new Path2D();
        l.rect(e[0], e[1], a, o), this.ctx.clip(l);
      }
    }
    this.current = new Uu(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), m(this, hs, Sd).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this._createMaskCanvas(t), r = i.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(r, i.offsetX, i.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, r, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const o = this.ctx;
    o.save();
    const l = pt(o);
    o.transform(e, s, i, r, 0, 0);
    const h = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    for (let c = 0, f = a.length; c < f; c += 2) {
      const p = $.transform(l, [e, s, i, r, a[c], a[c + 1]]);
      o.drawImage(h.canvas, p[4], p[5]);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const r of t) {
      const {
        data: a,
        width: o,
        height: l,
        transform: h
      } = r, c = this.cachedCanvases.getCanvas("maskCanvas", o, l), f = c.context;
      f.save();
      const p = this.getObject(a, r);
      Vu(f, p), f.globalCompositeOperation = "source-in", f.fillStyle = i ? s.getPattern(f, this, ds(e), Vt.FILL) : s, f.fillRect(0, 0, o, l), f.restore(), e.save(), e.transform(...h), e.scale(1, -1), vh(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      U("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, s, i) {
    if (!this.contentVisible)
      return;
    const r = this.getObject(t);
    if (!r) {
      U("Dependent image isn't ready yet");
      return;
    }
    const a = r.width, o = r.height, l = [];
    for (let h = 0, c = i.length; h < c; h += 2)
      l.push({
        transform: [e, 0, 0, s, i[h], i[h + 1]],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
    this.paintInlineImageXObjectGroup(r, l);
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
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, s = t.height, i = this.ctx;
    this.save();
    const {
      filter: r
    } = i;
    r !== "none" && r !== "" && (i.filter = "none"), i.scale(1 / e, -1 / s);
    let a;
    if (t.bitmap)
      a = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      a = t;
    else {
      const h = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      ju(h, t), a = this.applyTransferMapsToCanvas(h);
    }
    const o = this._scaleImage(a, ds(i));
    i.imageSmoothingEnabled = Wu(pt(i), t.interpolate), vh(i, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -s, e, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const r = t.width, a = t.height, l = this.cachedCanvases.getCanvas("inlineImage", r, a).context;
      ju(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const r of e)
      s.save(), s.transform(...r.transform), s.scale(1, -1), vh(s, i, r.x, r.y, r.w, r.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t, e) {
    const s = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(e);
    const i = this.ctx;
    this.pendingClip && (s || (this.pendingClip === qu ? i.clip(t, "evenodd") : i.clip(t)), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = pt(this.ctx);
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
          const c = l * t, f = h * t;
          a = c < 1 ? 1 / c : 1, o = f < 1 ? 1 / f : 1;
        }
      } else {
        const l = Math.abs(e * r - s * i), h = Math.hypot(e, s), c = Math.hypot(i, r);
        if (t === 0)
          a = c / l, o = h / l;
        else {
          const f = t * l;
          a = c > f ? c / f : 1, o = h > f ? h / f : 1;
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
    e && s.save(), s.scale(r, a), qc.a = 1 / r, qc.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, qc), o.length > 0) {
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
hs = new WeakSet(), _d = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Sd = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Ed = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let Jr = xu;
for (const d in sc)
  Jr.prototype[d] !== void 0 && (Jr.prototype[sc[d]] = Jr.prototype[d]);
var cl, dl;
class wi {
  static get workerPort() {
    return n(this, cl);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    u(this, cl, t);
  }
  static get workerSrc() {
    return n(this, dl);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    u(this, dl, t);
  }
}
cl = new WeakMap(), dl = new WeakMap(), g(wi, cl, null), g(wi, dl, "");
var wa, ul;
class om {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    g(this, wa);
    g(this, ul);
    u(this, wa, t), u(this, ul, e);
  }
  getRaw() {
    return n(this, ul);
  }
  get(t) {
    return n(this, wa).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, wa).entries();
  }
}
wa = new WeakMap(), ul = new WeakMap();
const Wr = Symbol("INTERNAL");
var fl, pl, gl, va;
class lm {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: r
  }) {
    g(this, fl, !1);
    g(this, pl, !1);
    g(this, gl, !1);
    g(this, va, !0);
    u(this, fl, !!(t & Le.DISPLAY)), u(this, pl, !!(t & Le.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, gl))
      return n(this, va);
    if (!n(this, va))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, fl) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, pl) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== Wr && at("Internal method `_setVisible` called."), u(this, gl, s), u(this, va, e);
  }
}
fl = new WeakMap(), pl = new WeakMap(), gl = new WeakMap(), va = new WeakMap();
var Wi, nt, _a, Sa, ml, Cd;
class hm {
  constructor(t, e = Le.DISPLAY) {
    g(this, ml);
    g(this, Wi, null);
    g(this, nt, /* @__PURE__ */ new Map());
    g(this, _a, null);
    g(this, Sa, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, u(this, Sa, t.order);
      for (const s of t.groups)
        n(this, nt).set(s.id, new lm(e, s));
      if (t.baseState === "OFF")
        for (const s of n(this, nt).values())
          s._setVisible(Wr, !1);
      for (const s of t.on)
        n(this, nt).get(s)._setVisible(Wr, !0);
      for (const s of t.off)
        n(this, nt).get(s)._setVisible(Wr, !1);
      u(this, _a, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, nt).size === 0)
      return !0;
    if (!t)
      return Dc("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, nt).has(t.id) ? n(this, nt).get(t.id).visible : (U(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return m(this, ml, Cd).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, nt).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (n(this, nt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, nt).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (!n(this, nt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, nt).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (!n(this, nt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, nt).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (n(this, nt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return U(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return U(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var r;
    const i = n(this, nt).get(t);
    if (!i) {
      U(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, nt).get(o)) == null || r._setVisible(Wr, !1, !0));
    i._setVisible(Wr, !!e, !0), u(this, Wi, null);
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
      const r = n(this, nt).get(i);
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
    u(this, Wi, null);
  }
  get hasInitialVisibility() {
    return n(this, _a) === null || this.getHash() === n(this, _a);
  }
  getOrder() {
    return n(this, nt).size ? n(this, Sa) ? n(this, Sa).slice() : [...n(this, nt).keys()] : null;
  }
  getGroup(t) {
    return n(this, nt).get(t) || null;
  }
  getHash() {
    if (n(this, Wi) !== null)
      return n(this, Wi);
    const t = new Ff();
    for (const [e, s] of n(this, nt))
      t.update(`${e}:${s.visible}`);
    return u(this, Wi, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, nt).entries();
  }
}
Wi = new WeakMap(), nt = new WeakMap(), _a = new WeakMap(), Sa = new WeakMap(), ml = new WeakSet(), Cd = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = m(this, ml, Cd).call(this, r);
    else if (n(this, nt).has(r))
      a = n(this, nt).get(r).visible;
    else
      return U(`Optional content group not found: ${r}`), !0;
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
class cm {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    Et(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
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
      Et(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
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
    Et(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new dm(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new um(this, t, e);
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
class dm {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = mu(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
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
class um {
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
function fm(d) {
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
  function s(c, f) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', f);
  }
  function i(c, f) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(f))
        return f;
      try {
        const p = new TextDecoder(c, {
          fatal: !0
        }), b = dh(f);
        f = p.decode(b), t = !1;
      } catch {
      }
    }
    return f;
  }
  function r(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const f = [];
    let p;
    const b = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = b.exec(c)) !== null; ) {
      let [, A, v, w] = p;
      if (A = parseInt(A, 10), A in f) {
        if (A === 0)
          break;
        continue;
      }
      f[A] = [v, w];
    }
    const y = [];
    for (let A = 0; A < f.length && A in f; ++A) {
      let [v, w] = f[A];
      w = o(w), v && (w = unescape(w), A === 0 && (w = l(w))), y.push(w);
    }
    return y.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const f = c.slice(1).split('\\"');
      for (let p = 0; p < f.length; ++p) {
        const b = f[p].indexOf('"');
        b !== -1 && (f[p] = f[p].slice(0, b), f.length = p + 1), f[p] = f[p].replaceAll(/\\(.)/g, "$1");
      }
      c = f.join('"');
    }
    return c;
  }
  function l(c) {
    const f = c.indexOf("'");
    if (f === -1)
      return c;
    const p = c.slice(0, f), y = c.slice(f + 1).replace(/^[^']*'/, "");
    return i(p, y);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(f, p, b, y) {
      if (b === "q" || b === "Q")
        return y = y.replaceAll("_", " "), y = y.replaceAll(/=([0-9a-fA-F]{2})/g, function(A, v) {
          return String.fromCharCode(parseInt(v, 16));
        }), i(p, y);
      try {
        y = atob(y);
      } catch {
      }
      return i(p, y);
    });
  }
  return "";
}
function Xf(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function Oc(d) {
  var t;
  return ((t = URL.parse(d)) == null ? void 0 : t.origin) ?? null;
}
function Yf({
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
function Kf(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = fm(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (mu(e))
      return e;
  }
  return null;
}
function gh(d, t) {
  return new ic(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d, d === 404 || d === 0 && t.startsWith("file:"));
}
function Qf(d) {
  return d === 200 || d === 206;
}
function Jf(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function Zf(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (U(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class pm {
  constructor(t) {
    P(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Xf(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Et(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new gm(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new mm(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class gm {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Jf(s, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = Oc(r.url), !Qf(r.status))
        throw gh(r.status, i);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = Yf({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Kf(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new An("Streaming is disabled."));
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
      value: Zf(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class mm {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, Jf(r, this._withCredentials, this._abortController)).then((o) => {
      const l = Oc(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!Qf(o.status))
        throw gh(o.status, a);
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
      value: Zf(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Xc = 200, Yc = 206;
function bm(d) {
  const t = d.response;
  return typeof t != "string" ? t : dh(t).buffer;
}
class Am {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    P(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Xf(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Yc) : i.expectedStatus = Xc, e.responseType = "arraybuffer", Et(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
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
    const r = i.status || Xc;
    if (!(r === Xc && s.expectedStatus === Yc) && r !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = bm(i);
    if (r === Yc) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : (U('Missing or invalid "Content-Range" header.'), s.onError(0));
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
class ym {
  constructor(t) {
    this._source = t, this._manager = new Am(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Et(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new wm(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new vm(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class wm {
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
    this._manager._responseOrigin = Oc(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = Yf({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Kf(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
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
    this._storedError = gh(t, this._url), this._headersCapability.reject(this._storedError);
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
class vm {
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
    const t = Oc((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
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
    this._storedError ?? (this._storedError = gh(t, this._url));
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
const _m = /^[a-z][a-z0-9\-+.]+:/i;
function Sm(d) {
  if (_m.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class Em {
  constructor(t) {
    this.source = t, this.url = Sm(t.url), Et(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Et(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new Cm(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new xm(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Cm {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = gh(0, this._url.href)), this._storedError = i, this._headersCapability.reject(i);
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new An("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class xm {
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
const co = Symbol("INITIAL_DATA");
var ve, bl, xd;
class tp {
  constructor() {
    g(this, bl);
    g(this, ve, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = m(this, bl, xd).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, ve)[t];
    if (!s || s.data === co)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, ve)[t];
    return !!e && e.data !== co;
  }
  delete(t) {
    const e = n(this, ve)[t];
    return !e || e.data === co ? !1 : (delete n(this, ve)[t], !0);
  }
  resolve(t, e = null) {
    const s = m(this, bl, xd).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, ve)) {
      const {
        data: s
      } = n(this, ve)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    u(this, ve, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, ve)) {
      const {
        data: e
      } = n(this, ve)[t];
      e !== co && (yield [t, e]);
    }
  }
}
ve = new WeakMap(), bl = new WeakSet(), xd = function(t) {
  var e;
  return (e = n(this, ve))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: co
  });
};
const Tm = 1e5, Xu = 30;
var Ju, qi, pe, Al, yl, Jn, si, wl, vl, Zn, Ea, Ca, Xi, xa, _l, Ta, tr, Sl, El, Pa, er, Cl, Yi, Ra, Ei, ep, sp, Td, Fe, Nh, Pd, ip, np;
const xt = class xt {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    g(this, Ei);
    g(this, qi, Promise.withResolvers());
    g(this, pe, null);
    g(this, Al, !1);
    g(this, yl, !!((Ju = globalThis.FontInspector) != null && Ju.enabled));
    g(this, Jn, null);
    g(this, si, null);
    g(this, wl, 0);
    g(this, vl, 0);
    g(this, Zn, null);
    g(this, Ea, null);
    g(this, Ca, 0);
    g(this, Xi, 0);
    g(this, xa, /* @__PURE__ */ Object.create(null));
    g(this, _l, []);
    g(this, Ta, null);
    g(this, tr, []);
    g(this, Sl, /* @__PURE__ */ new WeakMap());
    g(this, El, null);
    var l;
    if (t instanceof ReadableStream)
      u(this, Ta, t);
    else if (typeof t == "object")
      u(this, Ta, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    u(this, pe, u(this, Ea, e)), u(this, Xi, s.scale * Ds.pixelRatio), u(this, Ca, s.rotation), u(this, si, {
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
    u(this, El, [1, 0, 0, -1, -a, o + r]), u(this, vl, i), u(this, wl, r), m(l = xt, Fe, ip).call(l), Nr(e, s), n(this, qi).promise.finally(() => {
      n(xt, Ra).delete(this), u(this, si, null), u(this, xa, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = Xt.platform;
    return q(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, Zn).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          n(this, qi).resolve();
          return;
        }
        n(this, Jn) ?? u(this, Jn, e.lang), Object.assign(n(this, xa), e.styles), m(this, Ei, ep).call(this, e.items), t();
      }, n(this, qi).reject);
    };
    return u(this, Zn, n(this, Ta).getReader()), n(xt, Ra).add(this), t(), n(this, qi).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * Ds.pixelRatio, i = t.rotation;
    if (i !== n(this, Ca) && (e == null || e(), u(this, Ca, i), Nr(n(this, Ea), {
      rotation: i
    })), s !== n(this, Xi)) {
      e == null || e(), u(this, Xi, s);
      const a = {
        div: null,
        properties: null,
        ctx: m(r = xt, Fe, Nh).call(r, n(this, Jn))
      };
      for (const o of n(this, tr))
        a.properties = n(this, Sl).get(o), a.div = o, m(this, Ei, Td).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new An("TextLayer task cancelled.");
    (e = n(this, Zn)) == null || e.cancel(t).catch(() => {
    }), u(this, Zn, null), n(this, qi).reject(t);
  }
  get textDivs() {
    return n(this, tr);
  }
  get textContentItemsStr() {
    return n(this, _l);
  }
  static cleanup() {
    if (!(n(this, Ra).size > 0)) {
      n(this, Pa).clear();
      for (const {
        canvas: t
      } of n(this, er).values())
        t.remove();
      n(this, er).clear();
    }
  }
};
qi = new WeakMap(), pe = new WeakMap(), Al = new WeakMap(), yl = new WeakMap(), Jn = new WeakMap(), si = new WeakMap(), wl = new WeakMap(), vl = new WeakMap(), Zn = new WeakMap(), Ea = new WeakMap(), Ca = new WeakMap(), Xi = new WeakMap(), xa = new WeakMap(), _l = new WeakMap(), Ta = new WeakMap(), tr = new WeakMap(), Sl = new WeakMap(), El = new WeakMap(), Pa = new WeakMap(), er = new WeakMap(), Cl = new WeakMap(), Yi = new WeakMap(), Ra = new WeakMap(), Ei = new WeakSet(), ep = function(t) {
  var i, r;
  if (n(this, Al))
    return;
  (r = n(this, si)).ctx ?? (r.ctx = m(i = xt, Fe, Nh).call(i, n(this, Jn)));
  const e = n(this, tr), s = n(this, _l);
  for (const a of t) {
    if (e.length > Tm) {
      U("Ignoring additional textDivs for performance reasons."), u(this, Al, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, pe);
        u(this, pe, document.createElement("span")), n(this, pe).classList.add("markedContent"), a.id && n(this, pe).setAttribute("id", `${a.id}`), o.append(n(this, pe));
      } else a.type === "endMarkedContent" && u(this, pe, n(this, pe).parentNode);
      continue;
    }
    s.push(a.str), m(this, Ei, sp).call(this, a);
  }
}, sp = function(t) {
  var A;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, tr).push(e);
  const i = $.transform(n(this, El), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, xa)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, yl) && a.fontSubstitution || a.fontFamily;
  o = xt.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * m(A = xt, Fe, np).call(A, o, a, n(this, Jn));
  let c, f;
  r === 0 ? (c = i[4], f = i[5] - h) : (c = i[4] + h * Math.sin(r), f = i[5] - h * Math.cos(r));
  const p = "calc(var(--total-scale-factor) *", b = e.style;
  n(this, pe) === n(this, Ea) ? (b.left = `${(100 * c / n(this, vl)).toFixed(2)}%`, b.top = `${(100 * f / n(this, wl)).toFixed(2)}%`) : (b.left = `${p}${c.toFixed(2)}px)`, b.top = `${p}${f.toFixed(2)}px)`), b.fontSize = `${p}${(n(xt, Yi) * l).toFixed(2)}px)`, b.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, yl) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let y = !1;
  if (t.str.length > 1)
    y = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const v = Math.abs(t.transform[0]), w = Math.abs(t.transform[3]);
    v !== w && Math.max(v, w) / Math.min(v, w) > 1.5 && (y = !0);
  }
  if (y && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, Sl).set(e, s), n(this, si).div = e, n(this, si).properties = s, m(this, Ei, Td).call(this, n(this, si)), s.hasText && n(this, pe).append(e), s.hasEOL) {
    const v = document.createElement("br");
    v.setAttribute("role", "presentation"), n(this, pe).append(v);
  }
}, Td = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(xt, Yi) > 1 && (a = `scale(${1 / n(xt, Yi)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = r, {
      canvasWidth: h,
      fontSize: c
    } = s;
    m(o = xt, Fe, Pd).call(o, i, c * n(this, Xi), l);
    const {
      width: f
    } = i.measureText(e.textContent);
    f > 0 && (a = `scaleX(${h * n(this, Xi) / f}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, Fe = new WeakSet(), Nh = function(t = null) {
  let e = n(this, er).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, er).set(t, e), n(this, Cl).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Pd = function(t, e, s) {
  const i = n(this, Cl).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, ip = function() {
  if (n(this, Yi) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), u(this, Yi, t.getBoundingClientRect().height), t.remove();
}, np = function(t, e, s) {
  const i = n(this, Pa).get(t);
  if (i)
    return i;
  const r = m(this, Fe, Nh).call(this, s);
  r.canvas.width = r.canvas.height = Xu, m(this, Fe, Pd).call(this, r, Xu, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let h = 0.8;
  return o ? h = o / (o + l) : (Xt.platform.isFirefox && U("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, Pa).set(t, h), h;
}, g(xt, Fe), g(xt, Pa, /* @__PURE__ */ new Map()), g(xt, er, /* @__PURE__ */ new Map()), g(xt, Cl, /* @__PURE__ */ new WeakMap()), g(xt, Yi, null), g(xt, Ra, /* @__PURE__ */ new Set());
let Lo = xt;
class Do {
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
      else if (Do.shouldBuildText(o))
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
const Pm = 100;
function Rm(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new Rd(), {
    docId: e
  } = t, s = d.url ? Og(d.url) : null, i = d.data ? Bg(d.data) : null, r = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof rp ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : 2 ** 16;
  let c = d.worker instanceof No ? d.worker : null;
  const f = d.verbosity, p = typeof d.docBaseUrl == "string" && !Nc(d.docBaseUrl) ? d.docBaseUrl : null, b = yh(d.cMapUrl), y = d.cMapPacked !== !1, A = d.CMapReaderFactory || (oe ? Wg : Fu), v = yh(d.iccUrl), w = yh(d.standardFontDataUrl), S = d.StandardFontDataFactory || (oe ? qg : Ou), _ = yh(d.wasmUrl), E = d.WasmFactory || (oe ? Xg : Bu), C = d.stopAtErrors !== !0, x = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, T = d.isEvalSupported !== !1, R = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !oe, M = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !oe && (Xt.platform.isFirefox || !globalThis.chrome), L = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, k = typeof d.disableFontFace == "boolean" ? d.disableFontFace : oe, Z = d.fontExtraProperties === !0, it = d.enableXfa === !0, X = d.ownerDocument || globalThis.document, te = d.disableRange === !0, O = d.disableStream === !0, H = d.disableAutoFetch === !0, Oe = d.pdfBug === !0, Fs = d.CanvasFactory || (oe ? Vg : Gg), Sn = d.FilterFactory || (oe ? jg : Ug), cs = d.enableHWA === !0, It = d.useWasm !== !1, bt = l ? l.length : d.length ?? NaN, $r = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !oe && !k, Ci = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : !!(A === Fu && S === Ou && E === Bu && b && w && _ && po(b, document.baseURI) && po(w, document.baseURI) && po(_, document.baseURI)), xi = null;
  gg(f);
  const gt = {
    canvasFactory: new Fs({
      ownerDocument: X,
      enableHWA: cs
    }),
    filterFactory: new Sn({
      docId: e,
      ownerDocument: X
    }),
    cMapReaderFactory: Ci ? null : new A({
      baseUrl: b,
      isCompressed: y
    }),
    standardFontDataFactory: Ci ? null : new S({
      baseUrl: w
    }),
    wasmFactory: Ci ? null : new E({
      baseUrl: _
    })
  };
  c || (c = No.create({
    verbosity: f,
    port: wi.workerPort
  }), t._worker = c);
  const lo = {
    docId: e,
    apiVersion: "5.4.54",
    data: i,
    password: o,
    disableAutoFetch: H,
    rangeChunkSize: h,
    length: bt,
    docBaseUrl: p,
    enableXfa: it,
    evaluatorOptions: {
      maxImageSize: x,
      disableFontFace: k,
      ignoreErrors: C,
      isEvalSupported: T,
      isOffscreenCanvasSupported: R,
      isImageDecoderSupported: M,
      canvasMaxAreaInBytes: L,
      fontExtraProperties: Z,
      useSystemFonts: $r,
      useWasm: It,
      useWorkerFetch: Ci,
      cMapUrl: b,
      iccUrl: v,
      standardFontDataUrl: w,
      wasmUrl: _
    }
  }, lg = {
    ownerDocument: X,
    pdfBug: Oe,
    styleElement: xi,
    loadingParams: {
      disableAutoFetch: H,
      enableXfa: it
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const hg = c.messageHandler.sendWithPromise("GetDocRequest", lo, i ? [i.buffer] : null);
    let Hc;
    if (l)
      Hc = new cm(l, {
        disableRange: te,
        disableStream: O
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      const $c = po(s) ? pm : oe ? Em : ym;
      Hc = new $c({
        url: s,
        length: bt,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: te,
        disableStream: O
      });
    }
    return hg.then(($c) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const Ru = new yo(e, $c, c.port), cg = new km(Ru, t, Hc, lg, gt, cs);
      t._transport = cg, Ru.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
var _c;
const Sc = class Sc {
  constructor() {
    P(this, "_capability", Promise.withResolvers());
    P(this, "_transport", null);
    P(this, "_worker", null);
    P(this, "docId", `d${ee(Sc, _c)._++}`);
    P(this, "destroyed", !1);
    P(this, "onPassword", null);
    P(this, "onProgress", null);
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
_c = new WeakMap(), g(Sc, _c, 0);
let Rd = Sc;
var sr, xl, Tl, Pl, Rl;
class rp {
  constructor(t, e, s = !1, i = null) {
    g(this, sr, Promise.withResolvers());
    g(this, xl, []);
    g(this, Tl, []);
    g(this, Pl, []);
    g(this, Rl, []);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i;
  }
  addRangeListener(t) {
    n(this, Rl).push(t);
  }
  addProgressListener(t) {
    n(this, Pl).push(t);
  }
  addProgressiveReadListener(t) {
    n(this, Tl).push(t);
  }
  addProgressiveDoneListener(t) {
    n(this, xl).push(t);
  }
  onDataRange(t, e) {
    for (const s of n(this, Rl))
      s(t, e);
  }
  onDataProgress(t, e) {
    n(this, sr).promise.then(() => {
      for (const s of n(this, Pl))
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    n(this, sr).promise.then(() => {
      for (const e of n(this, Tl))
        e(t);
    });
  }
  onDataProgressiveDone() {
    n(this, sr).promise.then(() => {
      for (const t of n(this, xl))
        t();
    });
  }
  transportReady() {
    n(this, sr).resolve();
  }
  requestDataRange(t, e) {
    at("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
sr = new WeakMap(), xl = new WeakMap(), Tl = new WeakMap(), Pl = new WeakMap(), Rl = new WeakMap();
class Mm {
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
    return q(this, "isPureXfa", !!this._transport._htmlForXfa);
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
var ii, ir, Eo;
class Im {
  constructor(t, e, s, i = !1) {
    g(this, ir);
    g(this, ii, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new Lu() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new tp(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
    return new fh({
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
    return q(this, "isPureXfa", !!this._transport._htmlForXfa);
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
    annotationMode: r = Pi.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: h = null,
    pageColors: c = null,
    printAnnotationStorage: f = null,
    isEditing: p = !1
  }) {
    var C, x;
    (C = this._stats) == null || C.time("Overall");
    const b = this._transport.getRenderingIntent(i, r, f, p), {
      renderingIntent: y,
      cacheKey: A
    } = b;
    u(this, ii, !1), l || (l = this._transport.getOptionalContentConfig(y));
    let v = this._intentStates.get(A);
    v || (v = /* @__PURE__ */ Object.create(null), this._intentStates.set(A, v)), v.streamReaderCancelTimeout && (clearTimeout(v.streamReaderCancelTimeout), v.streamReaderCancelTimeout = null);
    const w = !!(y & Le.PRINT);
    v.displayReadyCapability || (v.displayReadyCapability = Promise.withResolvers(), v.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (x = this._stats) == null || x.time("Page Request"), this._pumpOperatorList(b));
    const S = (T) => {
      var R;
      v.renderTasks.delete(_), w && u(this, ii, !0), m(this, ir, Eo).call(this), T ? (_.capability.reject(T), this._abortOperatorList({
        intentState: v,
        reason: T instanceof Error ? T : new Error(T)
      })) : _.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (R = globalThis.Stats) != null && R.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, _ = new Md({
      callback: S,
      params: {
        canvas: e,
        canvasContext: t,
        viewport: s,
        transform: a,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: h,
      operatorList: v.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !w,
      pdfBug: this._pdfBug,
      pageColors: c,
      enableHWA: this._transport.enableHWA
    });
    (v.renderTasks || (v.renderTasks = /* @__PURE__ */ new Set())).add(_);
    const E = _.task;
    return Promise.all([v.displayReadyCapability.promise, l]).then(([T, R]) => {
      var M;
      if (this.destroyed) {
        S();
        return;
      }
      if ((M = this._stats) == null || M.time("Rendering"), !(R.renderingIntent & y))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      _.initializeGraphics({
        transparency: T,
        optionalContentConfig: R
      }), _.operatorListChanged();
    }).catch(S), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Pi.ENABLE,
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
      return this.getXfa().then((s) => Do.textContent(s));
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
    return this.objs.clear(), u(this, ii, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    u(this, ii, !0);
    const e = m(this, ir, Eo).call(this);
    return t && e && this._stats && (this._stats = new Lu()), e;
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
    t.lastChunk && m(this, ir, Eo).call(this);
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
        value: f,
        done: p
      }) => {
        if (p) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(f, h), c());
      }, (f) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const p of h.renderTasks)
              p.operatorListChanged();
            m(this, ir, Eo).call(this);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(f);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(f);
          else
            throw f;
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
        if (e instanceof gu) {
          let i = Pm;
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
      if (t.streamReader.cancel(new An(e.message)).catch(() => {
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
ii = new WeakMap(), ir = new WeakSet(), Eo = function() {
  if (!n(this, ii) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), u(this, ii, !1), !0;
};
var Ki, es, ni, nr, Ec, rr, ar, he, Fh, ap, op, Co, Ma, Oh;
const ht = class ht {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = mg()
  } = {}) {
    g(this, he);
    g(this, Ki, Promise.withResolvers());
    g(this, es, null);
    g(this, ni, null);
    g(this, nr, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, e) {
      if (n(ht, ar).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      n(ht, ar).set(e, this), m(this, he, ap).call(this, e);
    } else
      m(this, he, op).call(this);
  }
  get promise() {
    return n(this, Ki).promise;
  }
  get port() {
    return n(this, ni);
  }
  get messageHandler() {
    return n(this, es);
  }
  destroy() {
    var t, e;
    this.destroyed = !0, (t = n(this, nr)) == null || t.terminate(), u(this, nr, null), n(ht, ar).delete(n(this, ni)), u(this, ni, null), (e = n(this, es)) == null || e.destroy(), u(this, es, null);
  }
  static create(t) {
    const e = n(this, ar).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new ht(t);
  }
  static get workerSrc() {
    if (wi.workerSrc)
      return wi.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return q(this, "_setupFakeWorkerGlobal", (async () => n(this, Ma, Oh) ? n(this, Ma, Oh) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Ki = new WeakMap(), es = new WeakMap(), ni = new WeakMap(), nr = new WeakMap(), Ec = new WeakMap(), rr = new WeakMap(), ar = new WeakMap(), he = new WeakSet(), Fh = function() {
  n(this, Ki).resolve(), n(this, es).send("configure", {
    verbosity: this.verbosity
  });
}, ap = function(t) {
  u(this, ni, t), u(this, es, new yo("main", "worker", t)), n(this, es).on("ready", () => {
  }), m(this, he, Fh).call(this);
}, op = function() {
  if (n(ht, rr) || n(ht, Ma, Oh)) {
    m(this, he, Co).call(this);
    return;
  }
  let {
    workerSrc: t
  } = ht;
  try {
    ht._isSameOrigin(window.location, t) || (t = ht._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), s = new yo("main", "worker", e), i = () => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? n(this, Ki).reject(new Error("Worker was destroyed")) : m(this, he, Co).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, nr) || i();
    }, {
      signal: r.signal
    }), s.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        i();
        return;
      }
      u(this, es, s), u(this, ni, e), u(this, nr, e), m(this, he, Fh).call(this);
    }), s.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        i();
        return;
      }
      try {
        a();
      } catch {
        m(this, he, Co).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      s.send("test", o, [o.buffer]);
    };
    a();
    return;
  } catch {
    Dc("The worker has been disabled.");
  }
  m(this, he, Co).call(this);
}, Co = function() {
  n(ht, rr) || (U("Setting up fake worker."), u(ht, rr, !0)), ht._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, Ki).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new zg();
    u(this, ni, e);
    const s = `fake${ee(ht, Ec)._++}`, i = new yo(s + "_worker", s, e);
    t.setup(i, e), u(this, es, new yo(s, s + "_worker", e)), m(this, he, Fh).call(this);
  }).catch((t) => {
    n(this, Ki).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, Ma = new WeakSet(), Oh = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, g(ht, Ma), g(ht, Ec, 0), g(ht, rr, !1), g(ht, ar, /* @__PURE__ */ new WeakMap()), oe && (u(ht, rr, !0), wi.workerSrc || (wi.workerSrc = "./pdf.worker.mjs")), ht._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!(s != null && s.origin) || s.origin === "null")
    return !1;
  const i = new URL(e, s);
  return s.origin === i.origin;
}, ht._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
}, ht.fromPort = (t) => {
  if (Pg("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t != null && t.port))
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  return ht.create(t);
};
let No = ht;
var ri, Es, Ia, ka, ai, or, xo;
class km {
  constructor(t, e, s, i, r, a) {
    g(this, or);
    g(this, ri, /* @__PURE__ */ new Map());
    g(this, Es, /* @__PURE__ */ new Map());
    g(this, Ia, /* @__PURE__ */ new Map());
    g(this, ka, /* @__PURE__ */ new Map());
    g(this, ai, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new tp(), this.fontLoader = new Ng({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }
  get annotationStorage() {
    return q(this, "annotationStorage", new bu());
  }
  getRenderingIntent(t, e = Pi.ENABLE, s = null, i = !1, r = !1) {
    let a = Le.DISPLAY, o = md;
    switch (t) {
      case "any":
        a = Le.ANY;
        break;
      case "display":
        break;
      case "print":
        a = Le.PRINT;
        break;
      default:
        U(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Le.PRINT && s instanceof Bf ? s : this.annotationStorage;
    switch (e) {
      case Pi.DISABLE:
        a += Le.ANNOTATIONS_DISABLE;
        break;
      case Pi.ENABLE:
        break;
      case Pi.ENABLE_FORMS:
        a += Le.ANNOTATIONS_FORMS;
        break;
      case Pi.ENABLE_STORAGE:
        a += Le.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        U(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += Le.IS_EDITING), r && (a += Le.OPLIST);
    const {
      ids: h,
      hash: c
    } = l.modifiedIds, f = [a, o.hash, c];
    return {
      renderingIntent: a,
      cacheKey: f.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = n(this, ai)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of n(this, Es).values())
      t.push(i._destroy());
    n(this, Es).clear(), n(this, Ia).clear(), n(this, ka).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, ri).clear(), this.filterFactory.destroy(), Lo.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new An("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Et(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
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
          Et(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
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
      Et(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
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
          Et(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
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
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Mm(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(de(s));
    }), t.on("PasswordRequest", (s) => {
      u(this, ai, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw de(s);
        const i = (r) => {
          r instanceof Error ? n(this, ai).reject(r) : n(this, ai).resolve({
            password: r
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, ai).reject(i);
      }
      return n(this, ai).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      n(this, Es).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          if ("error" in r) {
            const c = r.error;
            U(`Error during font loading: ${c}`), this.commonObjs.resolve(s, c);
            break;
          }
          const o = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (c, f) => globalThis.FontInspector.fontAdded(c, f) : null, l = new Fg(r, o);
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
          Et(h, "The imageRef must be defined.");
          for (const c of n(this, Es).values())
            for (const [, f] of c.objs)
              if ((f == null ? void 0 : f.ref) === h)
                return f.dataLen ? (this.commonObjs.resolve(s, structuredClone(f)), f.dataLen) : null;
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
      const o = n(this, Es).get(i);
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
    this.annotationStorage.size <= 0 && U("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
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
    const e = t - 1, s = n(this, Ia).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, ka).set(r.refStr, t);
      const a = new Im(e, r, this, this._params.pdfBug);
      return n(this, Es).set(e, a), a;
    });
    return n(this, Ia).set(e, i), i;
  }
  getPageIndex(t) {
    return bd(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
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
    return m(this, or, xo).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return m(this, or, xo).call(this, "HasJSActions");
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
  getDocJSActions() {
    return m(this, or, xo).call(this, "GetDocJSActions");
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
    return m(this, or, xo).call(this, "GetOptionalContentConfig").then((e) => new hm(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, ri).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var r, a;
      return {
        info: i[0],
        metadata: i[1] ? new om(i[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return n(this, ri).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, Es).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, ri).clear(), this.filterFactory.destroy(!0), Lo.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!bd(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, ka).get(e) ?? null;
  }
}
ri = new WeakMap(), Es = new WeakMap(), Ia = new WeakMap(), ka = new WeakMap(), ai = new WeakMap(), or = new WeakSet(), xo = function(t, e = null) {
  const s = n(this, ri).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return n(this, ri).set(t, i), i;
};
var Qi;
class Lm {
  constructor(t) {
    g(this, Qi, null);
    P(this, "onContinue", null);
    P(this, "onError", null);
    u(this, Qi, t);
  }
  get promise() {
    return n(this, Qi).capability.promise;
  }
  cancel(t = 0) {
    n(this, Qi).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, Qi).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, Qi);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
Qi = new WeakMap();
var Ji, lr;
const Pn = class Pn {
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
    pdfBug: f = !1,
    pageColors: p = null,
    enableHWA: b = !1
  }) {
    g(this, Ji, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = f, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Lm(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = b;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var o, l;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (n(Pn, lr).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(Pn, lr).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: s,
      transform: i,
      background: r
    } = this.params, a = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new Jr(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: i,
      viewport: s,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }
  cancel(t = null, e = 0) {
    var s, i, r;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), n(this, Ji) && (window.cancelAnimationFrame(n(this, Ji)), u(this, Ji, null)), n(Pn, lr).delete(this._canvas), t || (t = new gu(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (i = this.task).onError) == null || r.call(i, t);
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
    this._useRequestAnimationFrame ? u(this, Ji, window.requestAnimationFrame(() => {
      u(this, Ji, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Pn, lr).delete(this._canvas), this.callback())));
  }
};
Ji = new WeakMap(), lr = new WeakMap(), g(Pn, lr, /* @__PURE__ */ new WeakSet());
let Md = Pn;
const Dm = "5.4.54", Nm = "295fb3ec4";
var _e, hr, La, Rt, Ml, Da, oi, Il, Zi, ss, kl, rt, Id, kd, Ld, En, lp, Ti;
const ue = class ue {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    g(this, rt);
    g(this, _e, null);
    g(this, hr, null);
    g(this, La);
    g(this, Rt, null);
    g(this, Ml, !1);
    g(this, Da, !1);
    g(this, oi, null);
    g(this, Il);
    g(this, Zi, null);
    g(this, ss, null);
    var s, i;
    t ? (u(this, Da, !1), u(this, oi, t)) : u(this, Da, !0), u(this, ss, (t == null ? void 0 : t._uiManager) || e), u(this, Il, n(this, ss)._eventBus), u(this, La, ((s = t == null ? void 0 : t.color) == null ? void 0 : s.toUpperCase()) || ((i = n(this, ss)) == null ? void 0 : i.highlightColors.values().next().value) || "#FFFF98"), n(ue, kl) || u(ue, kl, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return q(this, "_keyboardManager", new ph([[["Escape", "mac+Escape"], ue.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ue.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ue.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ue.prototype._moveToPrevious], [["Home", "mac+Home"], ue.prototype._moveToBeginning], [["End", "mac+End"], ue.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = u(this, _e, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", n(this, oi) && (t.ariaControls = `${n(this, oi).id}_colorpicker_dropdown`);
    const e = n(this, ss)._signal;
    t.addEventListener("click", m(this, rt, En).bind(this), {
      signal: e
    }), t.addEventListener("keydown", m(this, rt, Ld).bind(this), {
      signal: e
    });
    const s = u(this, hr, document.createElement("span"));
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = n(this, La), t.append(s), t;
  }
  renderMainDropdown() {
    const t = u(this, Rt, m(this, rt, Id).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, _e)) {
      m(this, rt, En).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && m(this, rt, kd).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!n(this, rt, Ti)) {
      m(this, rt, En).call(this, t);
      return;
    }
    if (t.target === n(this, _e)) {
      (e = n(this, Rt).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = n(this, Rt)) == null ? void 0 : e.firstChild) || t.target === n(this, _e)) {
      n(this, rt, Ti) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, rt, Ti) || m(this, rt, En).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, rt, Ti)) {
      m(this, rt, En).call(this, t);
      return;
    }
    (e = n(this, Rt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, rt, Ti)) {
      m(this, rt, En).call(this, t);
      return;
    }
    (e = n(this, Rt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, Rt)) == null || t.classList.add("hidden"), n(this, _e).ariaExpanded = "false", (e = n(this, Zi)) == null || e.abort(), u(this, Zi, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, Da)) {
      if (!n(this, rt, Ti)) {
        (t = n(this, oi)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, _e).focus({
        preventScroll: !0,
        focusVisible: n(this, Ml)
      });
    }
  }
  updateColor(t) {
    if (n(this, hr) && (n(this, hr).style.backgroundColor = t), !n(this, Rt))
      return;
    const e = n(this, ss).highlightColors.values();
    for (const s of n(this, Rt).children)
      s.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    var t, e;
    (t = n(this, _e)) == null || t.remove(), u(this, _e, null), u(this, hr, null), (e = n(this, Rt)) == null || e.remove(), u(this, Rt, null);
  }
};
_e = new WeakMap(), hr = new WeakMap(), La = new WeakMap(), Rt = new WeakMap(), Ml = new WeakMap(), Da = new WeakMap(), oi = new WeakMap(), Il = new WeakMap(), Zi = new WeakMap(), ss = new WeakMap(), kl = new WeakMap(), rt = new WeakSet(), Id = function() {
  const t = document.createElement("div"), e = n(this, ss)._signal;
  t.addEventListener("contextmenu", Ye, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), n(this, oi) && (t.id = `${n(this, oi).id}_colorpicker_dropdown`);
  for (const [s, i] of n(this, ss).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n(ue, kl)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.ariaSelected = i === n(this, La), r.addEventListener("click", m(this, rt, kd).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", m(this, rt, Ld).bind(this), {
    signal: e
  }), t;
}, kd = function(t, e) {
  e.stopPropagation(), n(this, Il).dispatch("switchannotationeditorparams", {
    source: this,
    type: Y.HIGHLIGHT_COLOR,
    value: t
  }), this.updateColor(t);
}, Ld = function(t) {
  ue._keyboardManager.exec(this, t);
}, En = function(t) {
  if (n(this, rt, Ti)) {
    this.hideDropdown();
    return;
  }
  if (u(this, Ml, t.detail === 0), n(this, Zi) || (u(this, Zi, new AbortController()), window.addEventListener("pointerdown", m(this, rt, lp).bind(this), {
    signal: n(this, ss).combinedSignal(n(this, Zi))
  })), n(this, _e).ariaExpanded = "true", n(this, Rt)) {
    n(this, Rt).classList.remove("hidden");
    return;
  }
  const e = u(this, Rt, m(this, rt, Id).call(this));
  n(this, _e).append(e);
}, lp = function(t) {
  var e;
  (e = n(this, Rt)) != null && e.contains(t.target) || this.hideDropdown();
}, Ti = function() {
  return n(this, Rt) && !n(this, Rt).classList.contains("hidden");
}, g(ue, kl, null);
let oc = ue;
var Cs, Ll, Na, Dl;
const Rn = class Rn {
  constructor(t) {
    g(this, Cs, null);
    g(this, Ll, null);
    g(this, Na, null);
    u(this, Ll, t), u(this, Na, t._uiManager), n(Rn, Dl) || u(Rn, Dl, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (n(this, Cs))
      return n(this, Cs);
    const {
      editorType: t,
      colorType: e,
      colorValue: s
    } = n(this, Ll), i = u(this, Cs, document.createElement("input"));
    return i.type = "color", i.value = s || "#000000", i.className = "basicColorPicker", i.tabIndex = 0, i.setAttribute("data-l10n-id", n(Rn, Dl)[t]), i.addEventListener("input", () => {
      n(this, Na).updateParams(e, i.value);
    }, {
      signal: n(this, Na)._signal
    }), i;
  }
  update(t) {
    n(this, Cs) && (n(this, Cs).value = t);
  }
  destroy() {
    var t;
    (t = n(this, Cs)) == null || t.remove(), u(this, Cs, null);
  }
  hideDropdown() {
  }
};
Cs = new WeakMap(), Ll = new WeakMap(), Na = new WeakMap(), Dl = new WeakMap(), g(Rn, Dl, null);
let lc = Rn;
function Yu(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function uo(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Ku {
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
    return t = uo(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Yu(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(uo);
  }
  static RGB_HTML(t) {
    return `#${t.map(Yu).join("")}`;
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
    return [uo(1 - Math.min(1, t + i)), uo(1 - Math.min(1, s + i)), uo(1 - Math.min(1, e + i))];
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
class Fm {
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
    at("Abstract method `_createSVG` called.");
  }
}
class hc extends Fm {
  _createSVG(t) {
    return document.createElementNS(Os, t);
  }
}
class hp {
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
    var f, p;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: r,
      linkService: s
    });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const b = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = b;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const b = document.createTextNode(i.value);
        a.append(b), o && Do.shouldBuildText(i.name) && h.push(b);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [b, y, A] = c.at(-1);
      if (y + 1 === b.children.length) {
        c.pop();
        continue;
      }
      const v = b.children[++c.at(-1)[1]];
      if (v === null)
        continue;
      const {
        name: w
      } = v;
      if (w === "#text") {
        const _ = document.createTextNode(v.value);
        h.push(_), A.append(_);
        continue;
      }
      const S = (f = v == null ? void 0 : v.attributes) != null && f.xmlns ? document.createElementNS(v.attributes.xmlns, w) : document.createElement(w);
      if (A.append(S), v.attributes && this.setAttributes({
        html: S,
        element: v,
        storage: e,
        intent: r,
        linkService: s
      }), ((p = v.children) == null ? void 0 : p.length) > 0)
        c.push([v, -1, S]);
      else if (v.value) {
        const _ = document.createTextNode(v.value);
        o && Do.shouldBuildText(w) && h.push(_), S.append(_);
      }
    }
    for (const b of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      b.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Om = 9, Or = /* @__PURE__ */ new WeakSet(), Bm = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Qu {
  static create(t) {
    switch (t.data.annotationType) {
      case _t.LINK:
        return new wu(t);
      case _t.TEXT:
        return new Hm(t);
      case _t.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new $m(t);
          case "Btn":
            return t.data.radioButton ? new up(t) : t.data.checkBox ? new Gm(t) : new Um(t);
          case "Ch":
            return new jm(t);
          case "Sig":
            return new zm(t);
        }
        return new Hr(t);
      case _t.POPUP:
        return new Nd(t);
      case _t.FREETEXT:
        return new bp(t);
      case _t.LINE:
        return new Wm(t);
      case _t.SQUARE:
        return new qm(t);
      case _t.CIRCLE:
        return new Xm(t);
      case _t.POLYLINE:
        return new Ap(t);
      case _t.CARET:
        return new Km(t);
      case _t.INK:
        return new vu(t);
      case _t.POLYGON:
        return new Ym(t);
      case _t.HIGHLIGHT:
        return new yp(t);
      case _t.UNDERLINE:
        return new Qm(t);
      case _t.SQUIGGLY:
        return new Jm(t);
      case _t.STRIKEOUT:
        return new Zm(t);
      case _t.STAMP:
        return new wp(t);
      case _t.FILEATTACHMENT:
        return new tb(t);
      default:
        return new wt(t);
    }
  }
}
var cr, Fa, li, Nl, Dd;
const Tu = class Tu {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    g(this, Nl);
    g(this, cr, null);
    g(this, Fa, !1);
    g(this, li, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
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
    return Tu._hasPopupData(this.data);
  }
  updateEdited(t) {
    var r;
    if (!this.container)
      return;
    t.rect && (n(this, cr) || u(this, cr, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: s
    } = t;
    e && m(this, Nl, Dd).call(this, e);
    let i = ((r = n(this, li)) == null ? void 0 : r.popup) || this.popup;
    !i && (s != null && s.text) && (this._createPopup(s), i = n(this, li).popup), i && (i.updateEdited(t), s != null && s.deleted && (i.remove(), u(this, li, null), this.popup = null));
  }
  resetEdited() {
    var t;
    n(this, cr) && (m(this, Nl, Dd).call(this, n(this, cr).rect), (t = n(this, li)) == null || t.popup.resetEdited(), u(this, cr, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof Hr) && !(this instanceof wu) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof Nd) {
      const {
        rotation: A
      } = e;
      return !e.hasOwnCanvas && A !== 0 && this.setRotation(A, r), r;
    }
    const {
      width: o,
      height: l
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const A = e.borderStyle.horizontalCornerRadius, v = e.borderStyle.verticalCornerRadius;
      if (A > 0 || v > 0) {
        const S = `calc(${A}px * var(--total-scale-factor)) / calc(${v}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      } else if (this instanceof up) {
        const S = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case zr.SOLID:
          a.borderStyle = "solid";
          break;
        case zr.DASHED:
          a.borderStyle = "dashed";
          break;
        case zr.BEVELED:
          U("Unimplemented border style: beveled");
          break;
        case zr.INSET:
          U("Unimplemented border style: inset");
          break;
        case zr.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const w = e.borderColor || null;
      w ? (u(this, Fa, !0), a.borderColor = $.makeHexColor(w[0] | 0, w[1] | 0, w[2] | 0)) : a.borderWidth = 0;
    }
    const h = $.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: f,
      pageX: p,
      pageY: b
    } = i.rawDims;
    a.left = `${100 * (h[0] - p) / c}%`, a.top = `${100 * (h[1] - b) / f}%`;
    const {
      rotation: y
    } = e;
    return e.hasOwnCanvas || y === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / f}%`) : this.setRotation(y, r), r;
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
      i.target.style[s] = Ku[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Ku[`${a}_rgb`](o)
      });
    };
    return q(this, "_commonActions", {
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
    const [e, s, i, r] = this.data.rect.map((A) => Math.fround(A));
    if (t.length === 8) {
      const [A, v, w, S] = t.subarray(2, 6);
      if (i === A && r === v && e === w && s === S)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, Fa)) {
      const {
        borderColor: A,
        borderWidth: v
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${A}" stroke-width="${v}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = r - s, {
      svgFactory: c
    } = this, f = c.createElement("svg");
    f.classList.add("quadrilateralsContainer"), f.setAttribute("width", 0), f.setAttribute("height", 0), f.role = "none";
    const p = c.createElement("defs");
    f.append(p);
    const b = c.createElement("clipPath"), y = `clippath_${this.data.id}`;
    b.setAttribute("id", y), b.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(b);
    for (let A = 2, v = t.length; A < v; A += 8) {
      const w = t[A], S = t[A + 1], _ = t[A + 2], E = t[A + 3], C = c.createElement("rect"), x = (_ - e) / l, T = (r - S) / h, R = (w - _) / l, M = (S - E) / h;
      C.setAttribute("x", x), C.setAttribute("y", T), C.setAttribute("width", R), C.setAttribute("height", M), b.append(C), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${T}" width="${R}" height="${M}"/>`);
    }
    n(this, Fa) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(f), this.container.style.clipPath = `url(#${y})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let s, i;
    t ? (s = {
      str: t.text
    }, i = t.date) : (s = e.contentsObj, i = e.modificationDate);
    const r = u(this, li, new Nd({
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
    return !!(n(this, li) || this.popup || this.data.popupRef);
  }
  render() {
    at("Abstract method `AnnotationElement.render` called");
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
          if (h && !Or.has(h)) {
            U(`_getElementsByName - element not allowed: ${a}`);
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
      a !== e && Or.has(i) && s.push({
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
cr = new WeakMap(), Fa = new WeakMap(), li = new WeakMap(), Nl = new WeakSet(), Dd = function(t) {
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
let wt = Tu;
var Ne, Cn, cp, dp;
class wu extends wt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    g(this, Ne);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action, e.overlaidText), r = !0) : e.attachment ? (m(this, Ne, cp).call(this, i, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (m(this, Ne, dp).call(this, i, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(i, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, s, i = "") {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && m(this, Ne, Cn).call(this), i && (e.title = i);
  }
  _bindNamedAction(e, s, i = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), i && (e.title = i), m(this, Ne, Cn).call(this);
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
    s.overlaidText && (e.title = s.overlaidText), e.onclick || (e.onclick = () => !1), m(this, Ne, Cn).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), m(this, Ne, Cn).call(this), !this._fieldObjects) {
      U('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var f;
      i == null || i();
      const {
        fields: r,
        refs: a,
        include: o
      } = s, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const p = new Set(a);
        for (const b of r) {
          const y = this._fieldObjects[b] || [];
          for (const {
            id: A
          } of y)
            p.add(A);
        }
        for (const b of Object.values(this._fieldObjects))
          for (const y of b)
            p.has(y.id) === o && l.push(y);
      } else
        for (const p of Object.values(this._fieldObjects))
          l.push(...p);
      const h = this.annotationStorage, c = [];
      for (const p of l) {
        const {
          id: b
        } = p;
        switch (c.push(b), p.type) {
          case "text": {
            const A = p.defaultValue || "";
            h.setValue(b, {
              value: A
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const A = p.defaultValue === p.exportValues;
            h.setValue(b, {
              value: A
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const A = p.defaultValue || "";
            h.setValue(b, {
              value: A
            });
            break;
          }
          default:
            continue;
        }
        const y = document.querySelector(`[data-element-id="${b}"]`);
        if (y) {
          if (!Or.has(y)) {
            U(`_bindResetFormAction - element not allowed: ${b}`);
            continue;
          }
        } else continue;
        y.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
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
Ne = new WeakSet(), Cn = function() {
  this.container.setAttribute("data-internal-link", "");
}, cp = function(e, s, i = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description ? e.title = s.description : i && (e.title = i), e.onclick = () => {
    var a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(s.content, s.filename, r), !1;
  }, m(this, Ne, Cn).call(this);
}, dp = function(e, s, i = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), i && (e.title = i), m(this, Ne, Cn).call(this);
};
class Hm extends wt {
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
class Hr extends wt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Xt.platform.isMac ? t.metaKey : t.ctrlKey;
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
    t.style.backgroundColor = e === null ? "transparent" : $.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Om, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (Gc * i)) || 1, f = h / c;
      a = Math.min(i, l(f / Gc));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / Gc));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = $.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class $m extends Hr {
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
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Or.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const {
        datetimeFormat: f,
        datetimeType: p,
        timeStep: b
      } = this.data, y = !!p && this.enableScripting;
      f && (s.title = f), this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (v) => {
        t.setValue(e, {
          value: v.target.value
        }), this.setPropertyOnSiblings(s, "value", v.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (v) => {
        const w = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = w, c.formattedValue = null;
      });
      let A = (v) => {
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
          if (y && (S.type = p, b && (S.step = b)), c.userValue) {
            const E = c.userValue;
            if (y)
              if (p === "time") {
                const C = new Date(E), x = [C.getHours(), C.getMinutes(), C.getSeconds()];
                S.value = x.map((T) => T.toString().padStart(2, "0")).join(":");
              } else
                S.value = new Date(E - Bm).toISOString().split(p === "date" ? "T" : ".", 1)[0];
            else
              S.value = E;
          }
          c.lastCommittedValue = S.value, c.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (w) => {
          this.showElementAndHideCanvas(w.target);
          const S = {
            value(_) {
              c.userValue = _.detail.value ?? "", y || t.setValue(e, {
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
              y && (C.value = E), t.setValue(e, C);
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var T;
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
              let x = c.userValue;
              !x || x.length <= E || (x = x.slice(0, E), C.value = c.userValue = x, t.setValue(e, {
                value: x
              }), (T = this.linkService.eventBus) == null || T.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: x,
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
        const v = A;
        A = null, s.addEventListener("blur", (w) => {
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
          if (y) {
            if (_ && p === "time") {
              const x = _.split(":").map((T) => parseInt(T, 10));
              _ = new Date(2e3, 0, 1, x[0], x[1], x[2] || 0).valueOf(), S.step = "";
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
            selectionEnd: x
          } = _;
          let T = C, R = x;
          switch (w.inputType) {
            case "deleteWordBackward": {
              const L = E.substring(0, C).match(/\w*[^\w]*$/);
              L && (T -= L[0].length);
              break;
            }
            case "deleteWordForward": {
              const L = E.substring(C).match(/^[^\w]*\w*/);
              L && (R += L[0].length);
              break;
            }
            case "deleteContentBackward":
              C === x && (T -= 1);
              break;
            case "deleteContentForward":
              C === x && (R += 1);
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
              selStart: T,
              selEnd: R
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (w) => w.target.value);
      }
      if (A && s.addEventListener("blur", A), this.data.comb) {
        const w = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${w}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class zm extends Hr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Gm extends Hr {
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
    return Or.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
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
class up extends Hr {
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
    if (Or.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
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
            for (const f of this._getElementsByName(h.target.name)) {
              const p = c && f.id === s;
              f.domElement && (f.domElement.checked = p), t.setValue(f.id, {
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
class Um extends wu {
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
class jm extends Hr {
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
    Or.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const f = this.data.defaultFieldValue;
      for (const p of i.options)
        p.selected = p.value === f;
    });
    for (const c of this.data.options) {
      const f = document.createElement("option");
      f.textContent = c.displayValue, f.value = c.exportValue, s.value.includes(c.exportValue) && (f.setAttribute("selected", !0), r = !1), i.append(f);
    }
    let a = null;
    if (r) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), a = () => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (c) => {
      const f = c ? "value" : "textContent", {
        options: p,
        multiple: b
      } = i;
      return b ? Array.prototype.filter.call(p, (y) => y.selected).map((y) => y[f]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][f];
    };
    let l = o(!1);
    const h = (c) => {
      const f = c.target.options;
      return Array.prototype.map.call(f, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const f = {
        value(p) {
          a == null || a();
          const b = p.detail.value, y = new Set(Array.isArray(b) ? b : [b]);
          for (const A of i.options)
            A.selected = y.has(A.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(p) {
          i.multiple = !0;
        },
        remove(p) {
          const b = i.options, y = p.detail.remove;
          b[y].selected = !1, i.remove(y), b.length > 0 && Array.prototype.findIndex.call(b, (v) => v.selected) === -1 && (b[0].selected = !0), t.setValue(e, {
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
            index: b,
            displayValue: y,
            exportValue: A
          } = p.detail.insert, v = i.children[b], w = document.createElement("option");
          w.textContent = y, w.value = A, v ? v.before(w) : i.append(w), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        items(p) {
          const {
            items: b
          } = p.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const y of b) {
            const {
              displayValue: A,
              exportValue: v
            } = y, w = document.createElement("option");
            w.textContent = A, w.value = v, i.append(w);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        indices(p) {
          const b = new Set(p.detail.indices);
          for (const y of p.target.options)
            y.selected = b.has(y.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(f, c);
    }), i.addEventListener("input", (c) => {
      var b;
      const f = o(!0), p = o(!1);
      t.setValue(e, {
        value: f
      }), c.preventDefault(), (b = this.linkService.eventBus) == null || b.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: p,
          changeEx: f,
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
class Nd extends wt {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: wt._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    const {
      container: t
    } = this;
    t.classList.add("popupAnnotation"), t.role = "comment";
    const e = this.popup = new Vm({
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
      open: this.data.open
    }), s = [];
    for (const i of this.elements)
      i.popup = e, i.container.ariaHasPopup = "dialog", s.push(i.data.id), i.addHighlightArea();
    return this.container.setAttribute("aria-controls", s.map((i) => `${pu}${i}`).join(",")), this.container;
  }
}
var Oa, Cc, xc, Ba, Ha, mt, hi, tn, $a, Fl, za, xs, Se, en, ci, Ol, di, Ga, dr, sn, J, Bh, Hh, Fd, fp, pp, gp, mp, $h, zh, Od;
class Vm {
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
    open: f
  }) {
    g(this, J);
    g(this, Oa, m(this, J, gp).bind(this));
    g(this, Cc, m(this, J, Od).bind(this));
    g(this, xc, m(this, J, zh).bind(this));
    g(this, Ba, m(this, J, $h).bind(this));
    g(this, Ha, null);
    g(this, mt, null);
    g(this, hi, null);
    g(this, tn, null);
    g(this, $a, null);
    g(this, Fl, null);
    g(this, za, null);
    g(this, xs, !1);
    g(this, Se, null);
    g(this, en, null);
    g(this, ci, null);
    g(this, Ol, null);
    g(this, di, null);
    g(this, Ga, null);
    g(this, dr, null);
    g(this, sn, !1);
    u(this, mt, t), u(this, Ga, i), u(this, hi, a), u(this, di, o), u(this, Fl, l), u(this, Ha, e), u(this, Ol, h), u(this, za, c), u(this, $a, s), u(this, tn, nc.toDateObject(r)), this.trigger = s.flatMap((p) => p.getElementsToTriggerPopup()), m(this, J, Bh).call(this), n(this, mt).hidden = !0, f && m(this, J, $h).call(this);
  }
  render() {
    var i;
    if (n(this, Se))
      return;
    const t = u(this, Se, document.createElement("div"));
    if (t.className = "popup", n(this, Ha)) {
      const r = t.style.outlineColor = $.makeHexColor(...n(this, Ha));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", (i = n(this, Ga)) != null && i.str) {
      const r = document.createElement("span");
      r.className = "title", e.append(r), {
        dir: r.dir,
        str: r.textContent
      } = n(this, Ga);
    }
    if (t.append(e), n(this, tn)) {
      const r = document.createElement("time");
      r.className = "popupDate", r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, tn).valueOf()
      })), r.dateTime = n(this, tn).toISOString(), e.append(r);
    }
    const s = n(this, J, Hh);
    if (s)
      hp.render({
        xfaHtml: s,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const r = this._formatContents(n(this, hi));
      t.append(r);
    }
    n(this, mt).append(t);
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
    m(this, J, Bh).call(this), n(this, dr) || u(this, dr, {
      contentsObj: n(this, hi),
      richText: n(this, di)
    }), t && u(this, ci, null), e && (u(this, di, m(this, J, pp).call(this, e.text)), u(this, tn, nc.toDateObject(e.date)), u(this, hi, null)), (i = n(this, Se)) == null || i.remove(), u(this, Se, null);
  }
  resetEdited() {
    var t;
    n(this, dr) && ({
      contentsObj: ee(this, hi)._,
      richText: ee(this, di)._
    } = n(this, dr), u(this, dr, null), (t = n(this, Se)) == null || t.remove(), u(this, Se, null), u(this, ci, null));
  }
  remove() {
    var t, e;
    (t = n(this, en)) == null || t.abort(), u(this, en, null), (e = n(this, Se)) == null || e.remove(), u(this, Se, null), u(this, sn, !1), u(this, xs, !1);
    for (const s of this.trigger)
      s.classList.remove("popupTriggerArea");
  }
  forceHide() {
    u(this, sn, this.isVisible), n(this, sn) && (n(this, mt).hidden = !0);
  }
  maybeShow() {
    m(this, J, Bh).call(this), n(this, sn) && (n(this, Se) || m(this, J, zh).call(this), u(this, sn, !1), n(this, mt).hidden = !1);
  }
  get isVisible() {
    return n(this, mt).hidden === !1;
  }
}
Oa = new WeakMap(), Cc = new WeakMap(), xc = new WeakMap(), Ba = new WeakMap(), Ha = new WeakMap(), mt = new WeakMap(), hi = new WeakMap(), tn = new WeakMap(), $a = new WeakMap(), Fl = new WeakMap(), za = new WeakMap(), xs = new WeakMap(), Se = new WeakMap(), en = new WeakMap(), ci = new WeakMap(), Ol = new WeakMap(), di = new WeakMap(), Ga = new WeakMap(), dr = new WeakMap(), sn = new WeakMap(), J = new WeakSet(), Bh = function() {
  var e;
  if (n(this, en))
    return;
  u(this, en, new AbortController());
  const {
    signal: t
  } = n(this, en);
  for (const s of this.trigger)
    s.addEventListener("click", n(this, Ba), {
      signal: t
    }), s.addEventListener("mouseenter", n(this, xc), {
      signal: t
    }), s.addEventListener("mouseleave", n(this, Cc), {
      signal: t
    }), s.classList.add("popupTriggerArea");
  for (const s of n(this, $a))
    (e = s.container) == null || e.addEventListener("keydown", n(this, Oa), {
      signal: t
    });
}, Hh = function() {
  const t = n(this, di), e = n(this, hi);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, di).html || null;
}, Fd = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, J, Hh)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, fp = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, J, Hh)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, pp = function(t) {
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
      color: n(this, J, fp),
      fontSize: n(this, J, Fd) ? `calc(${n(this, J, Fd)}px * var(--total-scale-factor))` : ""
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
}, gp = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, xs)) && m(this, J, $h).call(this);
}, mp = function() {
  if (n(this, ci) !== null)
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
  } = n(this, Fl);
  let a = !!n(this, za), o = a ? n(this, za) : n(this, Ol);
  for (const y of n(this, $a))
    if (!o || $.intersect(y.data.rect, o) !== null) {
      o = y.data.rect, a = !0;
      break;
    }
  const l = $.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, f = l[0] + c, p = l[1];
  u(this, ci, [100 * (f - i) / e, 100 * (p - r) / s]);
  const {
    style: b
  } = n(this, mt);
  b.left = `${n(this, ci)[0]}%`, b.top = `${n(this, ci)[1]}%`;
}, $h = function() {
  u(this, xs, !n(this, xs)), n(this, xs) ? (m(this, J, zh).call(this), n(this, mt).addEventListener("click", n(this, Ba)), n(this, mt).addEventListener("keydown", n(this, Oa))) : (m(this, J, Od).call(this), n(this, mt).removeEventListener("click", n(this, Ba)), n(this, mt).removeEventListener("keydown", n(this, Oa)));
}, zh = function() {
  n(this, Se) || this.render(), this.isVisible ? n(this, xs) && n(this, mt).classList.add("focused") : (m(this, J, mp).call(this), n(this, mt).hidden = !1, n(this, mt).style.zIndex = parseInt(n(this, mt).style.zIndex) + 1e3);
}, Od = function() {
  n(this, mt).classList.remove("focused"), !(n(this, xs) || !this.isVisible) && (n(this, mt).hidden = !0, n(this, mt).style.zIndex = parseInt(n(this, mt).style.zIndex) - 1e3);
};
class bp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = G.FREETEXT;
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
var Bl;
class Wm extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Bl, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = u(this, Bl, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Bl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Bl = new WeakMap();
var Hl;
class qm extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Hl, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = u(this, Hl, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Hl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Hl = new WeakMap();
var $l;
class Xm extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, $l, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = u(this, $l, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, $l);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
$l = new WeakMap();
var zl;
class Ap extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, zl, null);
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
    for (let f = 0, p = s.length; f < p; f += 2) {
      const b = s[f] - e[0], y = e[3] - s[f + 1];
      h.push(`${b},${y}`);
    }
    h = h.join(" ");
    const c = u(this, zl, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, zl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
zl = new WeakMap();
class Ym extends Ap {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Km extends wt {
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
var Gl, ur, Ul, Bd;
class vu extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Ul);
    g(this, Gl, null);
    g(this, ur, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? G.HIGHLIGHT : G.INK;
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
    } = m(this, Ul, Bd).call(this, s, e), c = this.svgFactory.create(l, h, !0), f = u(this, Gl, this.svgFactory.createElement("svg:g"));
    c.append(f), f.setAttribute("stroke-width", r.width || 1), f.setAttribute("stroke-linecap", "round"), f.setAttribute("stroke-linejoin", "round"), f.setAttribute("stroke-miterlimit", 10), f.setAttribute("stroke", "transparent"), f.setAttribute("fill", "transparent"), f.setAttribute("transform", o);
    for (let p = 0, b = i.length; p < b; p++) {
      const y = this.svgFactory.createElement(this.svgElementName);
      n(this, ur).push(y), y.setAttribute("points", i[p].join(",")), f.append(y);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: r
    } = e, a = n(this, Gl);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = n(this, ur).length; o < l; o++)
        n(this, ur)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h
      } = m(this, Ul, Bd).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, ur);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Gl = new WeakMap(), ur = new WeakMap(), Ul = new WeakSet(), Bd = function(e, s) {
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
class yp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = G.HIGHLIGHT;
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
class Qm extends wt {
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
class Jm extends wt {
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
class Zm extends wt {
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
class wp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = G.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var jl, Vl, Hd;
class tb extends wt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    g(this, Vl);
    g(this, jl, null);
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
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", m(this, Vl, Hd).bind(this)), u(this, jl, i);
    const {
      isMac: r
    } = Xt.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && m(this, Vl, Hd).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, jl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
jl = new WeakMap(), Vl = new WeakSet(), Hd = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Wl, fr, nn, ql, _n, zd, Gd;
const Pu = class Pu {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: r,
    viewport: a,
    structTreeLayer: o
  }) {
    g(this, _n);
    g(this, Wl, null);
    g(this, fr, null);
    g(this, nn, /* @__PURE__ */ new Map());
    g(this, ql, null);
    this.div = t, u(this, Wl, e), u(this, fr, s), u(this, ql, o || null), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return n(this, nn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    Nr(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new hc(),
      annotationStorage: t.annotationStorage || new bu(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === _t.POPUP;
      if (l) {
        const f = i.get(o.id);
        if (!f)
          continue;
        r.elements = f;
      } else if (o.rect[2] === o.rect[0] || o.rect[3] === o.rect[1])
        continue;
      r.data = o;
      const h = Qu.create(r);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const f = i.get(o.popupRef);
        f ? f.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await m(this, _n, zd).call(this, c, o.id, r.elements), h._isEditable && (n(this, nn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    m(this, _n, Gd).call(this);
  }
  async addLinkAnnotations(t, e) {
    const s = {
      data: null,
      layer: this.div,
      linkService: e,
      svgFactory: new hc(),
      parent: this
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = Pu._defaultBorderStyle), s.data = i;
      const r = Qu.create(s);
      if (!r.isRenderable)
        continue;
      const a = r.render();
      await m(this, _n, zd).call(this, a, i.id, null);
    }
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, Nr(e, {
      rotation: t.rotation
    }), m(this, _n, Gd).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, nn).values());
  }
  getEditableAnnotation(t) {
    return n(this, nn).get(t);
  }
  static get _defaultBorderStyle() {
    return q(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: zr.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
};
Wl = new WeakMap(), fr = new WeakMap(), nn = new WeakMap(), ql = new WeakMap(), _n = new WeakSet(), zd = async function(t, e, s) {
  var o, l;
  const i = t.firstChild || t, r = i.id = `${pu}${e}`, a = await ((o = n(this, ql)) == null ? void 0 : o.getAriaAttributes(r));
  if (a)
    for (const [h, c] of a)
      i.setAttribute(h, c);
  s ? s.at(-1).container.after(t) : (this.div.append(t), (l = n(this, Wl)) == null || l.moveElementInDOM(this.div, t, i, !1));
}, Gd = function() {
  var e;
  if (!n(this, fr))
    return;
  const t = this.div;
  for (const [s, i] of n(this, fr)) {
    const r = t.querySelector(`[data-annotation-id="${s}"]`);
    if (!r)
      continue;
    i.className = "annotationContent";
    const {
      firstChild: a
    } = r;
    a ? a.nodeName === "CANVAS" ? a.replaceWith(i) : a.classList.contains("annotationContent") ? a.after(i) : a.before(i) : r.append(i);
    const o = n(this, nn).get(s);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(s, r.id, i), o._hasNoCanvas = !1) : o.canvas = i);
  }
  n(this, fr).clear();
};
let $d = Pu;
const Sh = /\r\n?|\n/g;
var Ue, Ee, Xl, pr, Ce, Ct, vp, _p, Sp, Gh, Si, Uh, jh, Ep, jd, Cp;
const ot = class ot extends lt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    g(this, Ct);
    g(this, Ue);
    g(this, Ee, "");
    g(this, Xl, `${this.id}-editor`);
    g(this, pr, null);
    g(this, Ce);
    P(this, "_colorPicker", null);
    u(this, Ue, e.color || ot._defaultColor || lt._defaultLineColor), u(this, Ce, e.fontSize || ot._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
  }
  static get _keyboardManager() {
    const e = ot.prototype, s = (a) => a.isEmpty(), i = Fr.TRANSLATE_SMALL, r = Fr.TRANSLATE_BIG;
    return q(this, "_keyboardManager", new ph([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
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
    lt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case Y.FREETEXT_SIZE:
        ot._defaultFontSize = s;
        break;
      case Y.FREETEXT_COLOR:
        ot._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case Y.FREETEXT_SIZE:
        m(this, Ct, vp).call(this, s);
        break;
      case Y.FREETEXT_COLOR:
        m(this, Ct, _p).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Y.FREETEXT_SIZE, ot._defaultFontSize], [Y.FREETEXT_COLOR, ot._defaultColor || lt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[Y.FREETEXT_SIZE, n(this, Ce)], [Y.FREETEXT_COLOR, n(this, Ue)]];
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new lc(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return Y.FREETEXT_COLOR;
  }
  get colorValue() {
    return n(this, Ue);
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-ot._internalPadding * e, -(ot._internalPadding + n(this, Ce)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), u(this, pr, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, pr));
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
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, Xl)), this._isDraggable = !0, (e = n(this, pr)) == null || e.abort(), u(this, pr, null), this.div.focus({
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
    const e = n(this, Ee), s = u(this, Ee, m(this, Ct, Sp).call(this).trimEnd());
    if (e === s)
      return;
    const i = (r) => {
      if (u(this, Ee, r), !r) {
        this.remove();
        return;
      }
      m(this, Ct, jh).call(this), this._uiManager.rebuild(this), m(this, Ct, Gh).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), m(this, Ct, Gh).call(this);
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
    ot._keyboardManager.exec(this, e);
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
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, Xl)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, Ce)}px * var(--total-scale-factor))`, i.color = n(this, Ue), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, f] = this.pageDimensions, [p, b] = this.pageTranslation;
        let y, A;
        switch (this.rotation) {
          case 0:
            y = e + (o[0] - p) / c, A = s + this.height - (o[1] - b) / f;
            break;
          case 90:
            y = e + (o[0] - p) / c, A = s - (o[1] - b) / f, [l, h] = [h, -l];
            break;
          case 180:
            y = e - this.width + (o[0] - p) / c, A = s - (o[1] - b) / f, [l, h] = [-l, -h];
            break;
          case 270:
            y = e + (o[0] - p - this.height * f) / c, A = s + (o[1] - b - this.width * c) / f, [l, h] = [-h, l];
            break;
        }
        this.setAt(y * r, A * a, l, h);
      } else
        this._moveAfterPaste(e, s);
      m(this, Ct, jh).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var y, A, v;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = m(y = ot, Si, jd).call(y, s.getData("text") || "").replaceAll(Sh, `
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
    } = o, c = [], f = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const w = l.parentElement;
      if (f.push(l.nodeValue.slice(h).replaceAll(Sh, "")), w !== this.editorDiv) {
        let S = c;
        for (const _ of this.editorDiv.childNodes) {
          if (_ === w) {
            S = f;
            continue;
          }
          S.push(m(A = ot, Si, Uh).call(A, _));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(Sh, ""));
    } else if (l === this.editorDiv) {
      let w = c, S = 0;
      for (const _ of this.editorDiv.childNodes)
        S++ === h && (w = f), w.push(m(v = ot, Si, Uh).call(v, _));
    }
    u(this, Ee, `${c.join(`
`)}${r}${f.join(`
`)}`), m(this, Ct, jh).call(this);
    const p = new Range();
    let b = Math.sumPrecise(c.map((w) => w.length));
    for (const {
      firstChild: w
    } of this.editorDiv.childNodes)
      if (w.nodeType === Node.TEXT_NODE) {
        const S = w.nodeValue.length;
        if (b <= S) {
          p.setStart(w, b), p.setEnd(w, b);
          break;
        }
        b -= S;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof bp) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: f,
          id: p,
          popupRef: b,
          contentsObj: y
        },
        textContent: A,
        textPosition: v,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      if (!A || A.length === 0)
        return null;
      r = e = {
        annotationType: G.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: A.join(`
`),
        position: v,
        pageIndex: w - 1,
        rect: c.slice(0),
        rotation: f,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: b,
        comment: (y == null ? void 0 : y.str) || null
      };
    }
    const a = await super.deserialize(e, s, i);
    return u(a, Ce, e.fontSize), u(a, Ue, $.makeHexColor(...e.color)), u(a, Ee, m(o = ot, Si, jd).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e.comment), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = ot._internalPadding * this.parentScale, i = this.getRect(s, s), r = lt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : n(this, Ue)), a = {
      annotationType: G.FREETEXT,
      color: r,
      fontSize: n(this, Ce),
      value: m(this, Ct, Ep).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return this.addComment(a), e ? (a.isCopy = !0, a) : this.annotationElementId && !m(this, Ct, Cp).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e), {
      style: i
    } = s;
    i.fontSize = `calc(${n(this, Ce)}px * var(--total-scale-factor))`, i.color = n(this, Ue), s.replaceChildren();
    for (const o of n(this, Ee).split(`
`)) {
      const l = document.createElement("div");
      l.append(o ? document.createTextNode(o) : document.createElement("br")), s.append(l);
    }
    const r = ot._internalPadding * this.parentScale, a = {
      rect: this.getRect(r, r)
    };
    return a.popup = this.hasEditedComment ? this.comment : {
      text: n(this, Ee)
    }, e.updateEdited(a), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
Ue = new WeakMap(), Ee = new WeakMap(), Xl = new WeakMap(), pr = new WeakMap(), Ce = new WeakMap(), Ct = new WeakSet(), vp = function(e) {
  const s = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, Ce)) * this.parentScale), u(this, Ce, r), m(this, Ct, Gh).call(this);
  }, i = n(this, Ce);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Y.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, _p = function(e) {
  const s = (r) => {
    var a;
    u(this, Ue, this.editorDiv.style.color = r), (a = this._colorPicker) == null || a.update(r);
  }, i = n(this, Ue);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Y.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Sp = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(m(i = ot, Si, Uh).call(i, r)), s = r);
  return e.join(`
`);
}, Gh = function() {
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
}, Si = new WeakSet(), Uh = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Sh, "");
}, jh = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, Ee))
    for (const e of n(this, Ee).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, Ep = function() {
  return n(this, Ee).replaceAll(" ", " ");
}, jd = function(e) {
  return e.replaceAll(" ", " ");
}, Cp = function(e) {
  const {
    value: s,
    fontSize: i,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, g(ot, Si), P(ot, "_freeTextDefaultContent", ""), P(ot, "_internalPadding", 0), P(ot, "_defaultColor", null), P(ot, "_defaultFontSize", 10), P(ot, "_type", "freetext"), P(ot, "_editorType", G.FREETEXT);
let Ud = ot;
class N {
  toSVGPath() {
    at("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    at("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    at("Abstract method `serialize` must be implemented.");
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
P(N, "PRECISION", 1e-4);
var xe, is, Ua, ja, Ts, W, gr, mr, Yl, Kl, Va, Wa, rn, Ql, Tc, Pc, Mt, To, xp, Tp, Pp, Rp, Mp, Ip;
const zs = class zs {
  constructor({
    x: t,
    y: e
  }, s, i, r, a, o = 0) {
    g(this, Mt);
    g(this, xe);
    g(this, is, []);
    g(this, Ua);
    g(this, ja);
    g(this, Ts, []);
    g(this, W, new Float32Array(18));
    g(this, gr);
    g(this, mr);
    g(this, Yl);
    g(this, Kl);
    g(this, Va);
    g(this, Wa);
    g(this, rn, []);
    u(this, xe, s), u(this, Wa, r * i), u(this, ja, a), n(this, W).set([NaN, NaN, NaN, NaN, t, e], 6), u(this, Ua, o), u(this, Kl, n(zs, Ql) * i), u(this, Yl, n(zs, Pc) * i), u(this, Va, i), n(this, rn).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, W)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var M;
    u(this, gr, t), u(this, mr, e);
    const [s, i, r, a] = n(this, xe);
    let [o, l, h, c] = n(this, W).subarray(8, 12);
    const f = t - h, p = e - c, b = Math.hypot(f, p);
    if (b < n(this, Yl))
      return !1;
    const y = b - n(this, Kl), A = y / b, v = A * f, w = A * p;
    let S = o, _ = l;
    o = h, l = c, h += v, c += w, (M = n(this, rn)) == null || M.push(t, e);
    const E = -w / y, C = v / y, x = E * n(this, Wa), T = C * n(this, Wa);
    return n(this, W).set(n(this, W).subarray(2, 8), 0), n(this, W).set([h + x, c + T], 4), n(this, W).set(n(this, W).subarray(14, 18), 12), n(this, W).set([h - x, c - T], 16), isNaN(n(this, W)[6]) ? (n(this, Ts).length === 0 && (n(this, W).set([o + x, l + T], 2), n(this, Ts).push(NaN, NaN, NaN, NaN, (o + x - s) / r, (l + T - i) / a), n(this, W).set([o - x, l - T], 14), n(this, is).push(NaN, NaN, NaN, NaN, (o - x - s) / r, (l - T - i) / a)), n(this, W).set([S, _, o, l, h, c], 6), !this.isEmpty()) : (n(this, W).set([S, _, o, l, h, c], 6), Math.abs(Math.atan2(_ - l, S - o) - Math.atan2(w, v)) < Math.PI / 2 ? ([o, l, h, c] = n(this, W).subarray(2, 6), n(this, Ts).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [o, l, S, _] = n(this, W).subarray(14, 18), n(this, is).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / r, ((_ + l) / 2 - i) / a), !0) : ([S, _, o, l, h, c] = n(this, W).subarray(0, 6), n(this, Ts).push(((S + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [h, c, o, l, S, _] = n(this, W).subarray(12, 18), n(this, is).push(((S + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, Ts), e = n(this, is);
    if (isNaN(n(this, W)[6]) && !this.isEmpty())
      return m(this, Mt, xp).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    m(this, Mt, Pp).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return m(this, Mt, Tp).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new kp(t, e, s, i, r, a);
  }
  getOutlines() {
    var f;
    const t = n(this, Ts), e = n(this, is), s = n(this, W), [i, r, a, o] = n(this, xe), l = new Float32Array((((f = n(this, rn)) == null ? void 0 : f.length) ?? 0) + 2);
    for (let p = 0, b = l.length - 2; p < b; p += 2)
      l[p] = (n(this, rn)[p] - i) / a, l[p + 1] = (n(this, rn)[p + 1] - r) / o;
    if (l[l.length - 2] = (n(this, gr) - i) / a, l[l.length - 1] = (n(this, mr) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return m(this, Mt, Rp).call(this, l);
    const h = new Float32Array(n(this, Ts).length + 24 + n(this, is).length);
    let c = t.length;
    for (let p = 0; p < c; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    c = m(this, Mt, Ip).call(this, h, c);
    for (let p = e.length - 6; p >= 6; p -= 6)
      for (let b = 0; b < 6; b += 2) {
        if (isNaN(e[p + b])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[p + b], h[c + 1] = e[p + b + 1], c += 2;
      }
    return m(this, Mt, Mp).call(this, h, c), this.newFreeDrawOutline(h, l, n(this, xe), n(this, Va), n(this, Ua), n(this, ja));
  }
};
xe = new WeakMap(), is = new WeakMap(), Ua = new WeakMap(), ja = new WeakMap(), Ts = new WeakMap(), W = new WeakMap(), gr = new WeakMap(), mr = new WeakMap(), Yl = new WeakMap(), Kl = new WeakMap(), Va = new WeakMap(), Wa = new WeakMap(), rn = new WeakMap(), Ql = new WeakMap(), Tc = new WeakMap(), Pc = new WeakMap(), Mt = new WeakSet(), To = function() {
  const t = n(this, W).subarray(4, 6), e = n(this, W).subarray(16, 18), [s, i, r, a] = n(this, xe);
  return [(n(this, gr) + (t[0] - e[0]) / 2 - s) / r, (n(this, mr) + (t[1] - e[1]) / 2 - i) / a, (n(this, gr) + (e[0] - t[0]) / 2 - s) / r, (n(this, mr) + (e[1] - t[1]) / 2 - i) / a];
}, xp = function() {
  const [t, e, s, i] = n(this, xe), [r, a, o, l] = m(this, Mt, To).call(this);
  return `M${(n(this, W)[2] - t) / s} ${(n(this, W)[3] - e) / i} L${(n(this, W)[4] - t) / s} ${(n(this, W)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, W)[16] - t) / s} ${(n(this, W)[17] - e) / i} L${(n(this, W)[14] - t) / s} ${(n(this, W)[15] - e) / i} Z`;
}, Tp = function(t) {
  const e = n(this, is);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Pp = function(t) {
  const [e, s, i, r] = n(this, xe), a = n(this, W).subarray(4, 6), o = n(this, W).subarray(16, 18), [l, h, c, f] = m(this, Mt, To).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${c} ${f} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, Rp = function(t) {
  const e = n(this, W), [s, i, r, a] = n(this, xe), [o, l, h, c] = m(this, Mt, To).call(this), f = new Float32Array(36);
  return f.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(f, t, n(this, xe), n(this, Va), n(this, Ua), n(this, ja));
}, Mp = function(t, e) {
  const s = n(this, is);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, Ip = function(t, e) {
  const s = n(this, W).subarray(4, 6), i = n(this, W).subarray(16, 18), [r, a, o, l] = n(this, xe), [h, c, f, p] = m(this, Mt, To).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, f, p, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), e += 24;
}, g(zs, Ql, 8), g(zs, Tc, 2), g(zs, Pc, n(zs, Ql) + n(zs, Tc));
let cc = zs;
var qa, br, ui, Jl, Te, Zl, yt, Rc, Lp;
class kp extends N {
  constructor(e, s, i, r, a, o) {
    super();
    g(this, Rc);
    g(this, qa);
    g(this, br, new Float32Array(4));
    g(this, ui);
    g(this, Jl);
    g(this, Te);
    g(this, Zl);
    g(this, yt);
    u(this, yt, e), u(this, Te, s), u(this, qa, i), u(this, Zl, r), u(this, ui, a), u(this, Jl, o), this.lastPoint = [NaN, NaN], m(this, Rc, Lp).call(this, o);
    const [l, h, c, f] = n(this, br);
    for (let p = 0, b = e.length; p < b; p += 2)
      e[p] = (e[p] - l) / c, e[p + 1] = (e[p + 1] - h) / f;
    for (let p = 0, b = s.length; p < b; p += 2)
      s[p] = (s[p] - l) / c, s[p + 1] = (s[p + 1] - h) / f;
  }
  toSVGPath() {
    const e = [`M${n(this, yt)[4]} ${n(this, yt)[5]}`];
    for (let s = 6, i = n(this, yt).length; s < i; s += 6) {
      if (isNaN(n(this, yt)[s])) {
        e.push(`L${n(this, yt)[s + 4]} ${n(this, yt)[s + 5]}`);
        continue;
      }
      e.push(`C${n(this, yt)[s]} ${n(this, yt)[s + 1]} ${n(this, yt)[s + 2]} ${n(this, yt)[s + 3]} ${n(this, yt)[s + 4]} ${n(this, yt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = i - e, l = r - s;
    let h, c;
    switch (a) {
      case 0:
        h = N._rescale(n(this, yt), e, r, o, -l), c = N._rescale(n(this, Te), e, r, o, -l);
        break;
      case 90:
        h = N._rescaleAndSwap(n(this, yt), e, s, o, l), c = N._rescaleAndSwap(n(this, Te), e, s, o, l);
        break;
      case 180:
        h = N._rescale(n(this, yt), i, s, -o, l), c = N._rescale(n(this, Te), i, s, -o, l);
        break;
      case 270:
        h = N._rescaleAndSwap(n(this, yt), i, r, -o, -l), c = N._rescaleAndSwap(n(this, Te), i, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return n(this, br);
  }
  newOutliner(e, s, i, r, a, o = 0) {
    return new cc(e, s, i, r, a, o);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, br), [l, h, c, f] = n(this, qa), p = a * c, b = o * f, y = i * c + l, A = r * f + h, v = this.newOutliner({
      x: n(this, Te)[0] * p + y,
      y: n(this, Te)[1] * b + A
    }, n(this, qa), n(this, Zl), e, n(this, Jl), s ?? n(this, ui));
    for (let w = 2; w < n(this, Te).length; w += 2)
      v.add({
        x: n(this, Te)[w] * p + y,
        y: n(this, Te)[w + 1] * b + A
      });
    return v.getOutlines();
  }
}
qa = new WeakMap(), br = new WeakMap(), ui = new WeakMap(), Jl = new WeakMap(), Te = new WeakMap(), Zl = new WeakMap(), yt = new WeakMap(), Rc = new WeakSet(), Lp = function(e) {
  const s = n(this, yt);
  let i = s[4], r = s[5];
  const a = [i, r, i, r];
  let o = i, l = r;
  const h = e ? Math.max : Math.min;
  for (let f = 6, p = s.length; f < p; f += 6) {
    const b = s[f + 4], y = s[f + 5];
    if (isNaN(s[f]))
      $.pointBoundingBox(b, y, a), l < y ? (o = b, l = y) : l === y && (o = h(o, b));
    else {
      const A = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      $.bezierBoundingBox(i, r, ...s.slice(f, f + 6), A), $.rectBoundingBox(...A, a), l < A[3] ? (o = A[2], l = A[3]) : l === A[3] && (o = h(o, A[2]));
    }
    i = b, r = y;
  }
  const c = n(this, br);
  c[0] = a[0] - n(this, ui), c[1] = a[1] - n(this, ui), c[2] = a[2] - a[0] + 2 * n(this, ui), c[3] = a[3] - a[1] + 2 * n(this, ui), this.lastPoint = [o, l];
};
var th, eh, an, ns, ce, Dp, Vh, Np, Fp, Wd;
class Vd {
  constructor(t, e = 0, s = 0, i = !0) {
    g(this, ce);
    g(this, th);
    g(this, eh);
    g(this, an, []);
    g(this, ns, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: b,
      y,
      width: A,
      height: v
    } of t) {
      const w = Math.floor((b - e) / a) * a, S = Math.ceil((b + A + e) / a) * a, _ = Math.floor((y - e) / a) * a, E = Math.ceil((y + v + e) / a) * a, C = [w, _, E, !0], x = [S, _, E, !1];
      n(this, an).push(C, x), $.rectBoundingBox(w, _, S, E, r);
    }
    const o = r[2] - r[0] + 2 * s, l = r[3] - r[1] + 2 * s, h = r[0] - s, c = r[1] - s, f = n(this, an).at(i ? -1 : -2), p = [f[0], f[2]];
    for (const b of n(this, an)) {
      const [y, A, v] = b;
      b[0] = (y - h) / o, b[1] = (A - c) / l, b[2] = (v - c) / l;
    }
    u(this, th, new Float32Array([h, c, o, l])), u(this, eh, p);
  }
  getOutlines() {
    n(this, an).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, an))
      e[3] ? (t.push(...m(this, ce, Wd).call(this, e)), m(this, ce, Np).call(this, e)) : (m(this, ce, Fp).call(this, e), t.push(...m(this, ce, Wd).call(this, e)));
    return m(this, ce, Dp).call(this, t);
  }
}
th = new WeakMap(), eh = new WeakMap(), an = new WeakMap(), ns = new WeakMap(), ce = new WeakSet(), Dp = function(t) {
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
    let [o, l, h, c, f] = a;
    s.delete(a);
    let p = o, b = l;
    for (r = [o, h], i.push(r); ; ) {
      let y;
      if (s.has(c))
        y = c;
      else if (s.has(f))
        y = f;
      else
        break;
      s.delete(y), [o, l, h, c, f] = y, p !== o && (r.push(p, b, o, b === l ? l : h), p = o), b = b === l ? h : l;
    }
    r.push(p, b);
  }
  return new eb(i, n(this, th), n(this, eh));
}, Vh = function(t) {
  const e = n(this, ns);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, Np = function([, t, e]) {
  const s = m(this, ce, Vh).call(this, t);
  n(this, ns).splice(s, 0, [t, e]);
}, Fp = function([, t, e]) {
  const s = m(this, ce, Vh).call(this, t);
  for (let i = s; i < n(this, ns).length; i++) {
    const [r, a] = n(this, ns)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ns).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, ns)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ns).splice(i, 1);
      return;
    }
  }
}, Wd = function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = m(this, ce, Vh).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, ns)[o];
    for (let c = 0, f = r.length; c < f; c++) {
      const [, p, b] = r[c];
      if (!(h <= p || b <= l)) {
        if (p >= l) {
          if (b > h)
            r[c][1] = h;
          else {
            if (f === 1)
              return [];
            r.splice(c, 1), c--, f--;
          }
          continue;
        }
        r[c][2] = l, b > h && r.push([e, h, b]);
      }
    }
  }
  return r;
};
var sh, Xa;
class eb extends N {
  constructor(e, s, i) {
    super();
    g(this, sh);
    g(this, Xa);
    u(this, Xa, e), u(this, sh, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, Xa)) {
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
    for (const c of n(this, Xa)) {
      const f = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        f[p] = e + c[p] * l, f[p + 1] = r - c[p + 1] * h;
      o.push(f);
    }
    return o;
  }
  get box() {
    return n(this, sh);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
sh = new WeakMap(), Xa = new WeakMap();
class qd extends cc {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new sb(t, e, s, i, r, a);
  }
}
class sb extends kp {
  newOutliner(t, e, s, i, r, a = 0) {
    return new qd(t, e, s, i, r, a);
  }
}
var Ya, ih, fi, Ar, nh, ge, rh, ah, yr, je, Pe, Ut, Ka, pi, Zt, Qa, Ve, oh, j, Xd, Wh, Op, Bp, Hp, Yd, xn, qe, qr, $p, qh, Po, zp, Gp, Up, jp, Vp;
const tt = class tt extends lt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    g(this, j);
    g(this, Ya, null);
    g(this, ih, 0);
    g(this, fi);
    g(this, Ar, null);
    g(this, nh, null);
    g(this, ge, null);
    g(this, rh, null);
    g(this, ah, 0);
    g(this, yr, null);
    g(this, je, null);
    g(this, Pe, null);
    g(this, Ut, !1);
    g(this, Ka, null);
    g(this, pi);
    g(this, Zt, null);
    g(this, Qa, "");
    g(this, Ve);
    g(this, oh, "");
    this.color = e.color || tt._defaultColor, u(this, Ve, e.thickness || tt._defaultThickness), u(this, pi, e.opacity || tt._defaultOpacity), u(this, fi, e.boxes || null), u(this, oh, e.methodOfCreation || ""), u(this, Qa, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (u(this, Ut, !0), m(this, j, Wh).call(this, e), m(this, j, xn).call(this)) : n(this, fi) && (u(this, Ya, e.anchorNode), u(this, ih, e.anchorOffset), u(this, rh, e.focusNode), u(this, ah, e.focusOffset), m(this, j, Xd).call(this), m(this, j, xn).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = tt.prototype;
    return q(this, "_keyboardManager", new ph([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
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
      type: n(this, Ut) ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, Ve),
      methodOfCreation: n(this, oh)
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
    lt.initialize(e, s), tt._defaultColor || (tt._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case Y.HIGHLIGHT_COLOR:
        tt._defaultColor = s;
        break;
      case Y.HIGHLIGHT_THICKNESS:
        tt._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return n(this, Ka);
  }
  updateParams(e, s) {
    switch (e) {
      case Y.HIGHLIGHT_COLOR:
        m(this, j, Op).call(this, s);
        break;
      case Y.HIGHLIGHT_THICKNESS:
        m(this, j, Bp).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Y.HIGHLIGHT_COLOR, tt._defaultColor], [Y.HIGHLIGHT_THICKNESS, tt._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[Y.HIGHLIGHT_COLOR, this.color || tt._defaultColor], [Y.HIGHLIGHT_THICKNESS, n(this, Ve) || tt._defaultThickness], [Y.HIGHLIGHT_FREE, n(this, Ut)]];
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", u(this, nh, new oc({
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
    return super.fixAndSetPosition(m(this, j, Po).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, m(this, j, Po).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    m(this, j, Yd).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (m(this, j, xn).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? m(this, j, Yd).call(this) : e && (m(this, j, xn).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    n(this, Ut) ? (e = (e - this.rotation + 360) % 360, i = m(r = tt, qe, qr).call(r, n(this, je).box, e)) : i = m(a = tt, qe, qr).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(n(this, Pe), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(n(this, Zt), {
      bbox: m(o = tt, qe, qr).call(o, n(this, ge).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, Qa) && (e.setAttribute("aria-label", n(this, Qa)), e.setAttribute("role", "mark")), n(this, Ut) ? e.classList.add("free") : this.div.addEventListener("keydown", m(this, j, $p).bind(this), {
      signal: this._uiManager._signal
    });
    const s = u(this, yr, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = n(this, Ar);
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), uf(this, n(this, yr), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Zt), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Zt), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        m(this, j, qh).call(this, !0);
        break;
      case 1:
      case 3:
        m(this, j, qh).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, Zt) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Zt), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, Zt) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Zt), {
      rootClass: {
        selected: !1
      }
    }), n(this, Ut) || m(this, j, qh).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, Ut);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, Pe), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, Zt), {
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
    } = i.getBoundingClientRect(), f = new AbortController(), p = e.combinedSignal(f), b = (y) => {
      f.abort(), m(this, qe, jp).call(this, e, y);
    };
    window.addEventListener("blur", b, {
      signal: p
    }), window.addEventListener("pointerup", b, {
      signal: p
    }), window.addEventListener("pointerdown", St, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", Ye, {
      signal: p
    }), i.addEventListener("pointermove", m(this, qe, Up).bind(this, e), {
      signal: p
    }), this._freeHighlight = new qd({
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
    var A, v, w, S;
    let r = null;
    if (e instanceof yp) {
      const {
        data: {
          quadPoints: _,
          rect: E,
          rotation: C,
          id: x,
          color: T,
          opacity: R,
          popupRef: M,
          contentsObj: L
        },
        parent: {
          page: {
            pageNumber: k
          }
        }
      } = e;
      r = e = {
        annotationType: G.HIGHLIGHT,
        color: Array.from(T),
        opacity: R,
        quadPoints: _,
        boxes: null,
        pageIndex: k - 1,
        rect: E.slice(0),
        rotation: C,
        annotationElementId: x,
        id: x,
        deleted: !1,
        popupRef: M,
        comment: (L == null ? void 0 : L.str) || null
      };
    } else if (e instanceof vu) {
      const {
        data: {
          inkLists: _,
          rect: E,
          rotation: C,
          id: x,
          color: T,
          borderStyle: {
            rawWidth: R
          },
          popupRef: M,
          contentsObj: L
        },
        parent: {
          page: {
            pageNumber: k
          }
        }
      } = e;
      r = e = {
        annotationType: G.HIGHLIGHT,
        color: Array.from(T),
        thickness: R,
        inkLists: _,
        boxes: null,
        pageIndex: k - 1,
        rect: E.slice(0),
        rotation: C,
        annotationElementId: x,
        id: x,
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
    c.color = $.makeHexColor(...a), u(c, pi, h || 1), l && u(c, Ve, e.thickness), c._initialData = r, e.comment && c.setCommentData(e.comment);
    const [f, p] = c.pageDimensions, [b, y] = c.pageTranslation;
    if (o) {
      const _ = u(c, fi, []);
      for (let E = 0; E < o.length; E += 8)
        _.push({
          x: (o[E] - b) / f,
          y: 1 - (o[E + 1] - y) / p,
          width: (o[E + 2] - o[E]) / f,
          height: (o[E + 1] - o[E + 5]) / p
        });
      m(A = c, j, Xd).call(A), m(v = c, j, xn).call(v), c.rotate(c.rotation);
    } else if (l) {
      u(c, Ut, !0);
      const _ = l[0], E = {
        x: _[0] - b,
        y: p - (_[1] - y)
      }, C = new qd(E, [0, 0, f, p], 1, n(c, Ve) / 2, !0, 1e-3);
      for (let R = 0, M = _.length; R < M; R += 2)
        E.x = _[R] - b, E.y = p - (_[R + 1] - y), C.add(E);
      const {
        id: x,
        clipPathId: T
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
      m(w = c, j, Wh).call(w, {
        highlightOutlines: C.getOutlines(),
        highlightId: x,
        clipPathId: T
      }), m(S = c, j, xn).call(S), c.rotate(c.parentRotation);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = lt._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), r = {
      annotationType: G.HIGHLIGHT,
      color: i,
      opacity: n(this, pi),
      thickness: n(this, Ve),
      quadPoints: m(this, j, zp).call(this),
      outlines: m(this, j, Gp).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: m(this, j, Po).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.addComment(r), this.annotationElementId && !m(this, j, Vp).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(e) {
    const s = {
      rect: this.getRect(0, 0)
    };
    return this.hasEditedComment && (s.popup = this.comment), e.updateEdited(s), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ya = new WeakMap(), ih = new WeakMap(), fi = new WeakMap(), Ar = new WeakMap(), nh = new WeakMap(), ge = new WeakMap(), rh = new WeakMap(), ah = new WeakMap(), yr = new WeakMap(), je = new WeakMap(), Pe = new WeakMap(), Ut = new WeakMap(), Ka = new WeakMap(), pi = new WeakMap(), Zt = new WeakMap(), Qa = new WeakMap(), Ve = new WeakMap(), oh = new WeakMap(), j = new WeakSet(), Xd = function() {
  const e = new Vd(n(this, fi), 1e-3);
  u(this, je, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, je).box;
  const s = new Vd(n(this, fi), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  u(this, ge, s.getOutlines());
  const {
    lastPoint: i
  } = n(this, ge);
  u(this, Ka, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, Wh = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var f, p;
  if (u(this, je, e), u(this, ge, e.getNewOutline(n(this, Ve) / 2 + 1.5, 25e-4)), s >= 0)
    u(this, Pe, s), u(this, Ar, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), u(this, Zt, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, ge).box,
      path: {
        d: n(this, ge).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const b = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, Pe), {
      bbox: m(f = tt, qe, qr).call(f, n(this, je).box, (b - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, Zt), {
      bbox: m(p = tt, qe, qr).call(p, n(this, ge).box, b),
      path: {
        d: n(this, ge).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [b, y] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * y / b, this.height = h * b / y;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [b, y] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * y / b, this.height = h * b / y;
      break;
    }
  }
  const {
    lastPoint: c
  } = n(this, ge);
  u(this, Ka, [(c[0] - a) / l, (c[1] - o) / h]);
}, Op = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, u(this, pi, o), (l = this.parent) == null || l.drawLayer.updateProperties(n(this, Pe), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = n(this, nh)) == null || h.updateColor(a);
  }, i = this.color, r = n(this, pi);
  this.addCommands({
    cmd: s.bind(this, e, tt._defaultOpacity),
    undo: s.bind(this, i, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Y.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.getNonHCMColorName(e)
  }, !0);
}, Bp = function(e) {
  const s = n(this, Ve), i = (r) => {
    u(this, Ve, r), m(this, j, Hp).call(this, r);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Y.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Hp = function(e) {
  if (!n(this, Ut))
    return;
  m(this, j, Wh).call(this, {
    highlightOutlines: n(this, je).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, Yd = function() {
  n(this, Pe) === null || !this.parent || (this.parent.drawLayer.remove(n(this, Pe)), u(this, Pe, null), this.parent.drawLayer.remove(n(this, Zt)), u(this, Zt, null));
}, xn = function(e = this.parent) {
  n(this, Pe) === null && ({
    id: ee(this, Pe)._,
    clipPathId: ee(this, Ar)._
  } = e.drawLayer.draw({
    bbox: n(this, je).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": n(this, pi)
    },
    rootClass: {
      highlight: !0,
      free: n(this, Ut)
    },
    path: {
      d: n(this, je).toSVGPath()
    }
  }, !1, !0), u(this, Zt, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, Ut)
    },
    bbox: n(this, ge).box,
    path: {
      d: n(this, ge).toSVGPath()
    }
  }, n(this, Ut))), n(this, yr) && (n(this, yr).style.clipPath = n(this, Ar)));
}, qe = new WeakSet(), qr = function([e, s, i, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, i];
    case 180:
      return [1 - e - i, 1 - s - r, i, r];
    case 270:
      return [s, 1 - e - i, r, i];
  }
  return [e, s, i, r];
}, $p = function(e) {
  tt._keyboardManager.exec(this, e);
}, qh = function(e) {
  if (!n(this, Ya))
    return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, Ya), n(this, ih)) : s.setPosition(n(this, rh), n(this, ah));
}, Po = function() {
  return n(this, Ut) ? this.rotation : 0;
}, zp = function() {
  if (n(this, Ut))
    return null;
  const [e, s] = this.pageDimensions, [i, r] = this.pageTranslation, a = n(this, fi), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: c,
    width: f,
    height: p
  } of a) {
    const b = h * e + i, y = (1 - c) * s + r;
    o[l] = o[l + 4] = b, o[l + 1] = o[l + 3] = y, o[l + 2] = o[l + 6] = b + f * e, o[l + 5] = o[l + 7] = y - p * s, l += 8;
  }
  return o;
}, Gp = function(e) {
  return n(this, je).serialize(e, m(this, j, Po).call(this));
}, Up = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, jp = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Vp = function(e) {
  const {
    color: s
  } = this._initialData;
  return this.hasEditedComment || e.color.some((i, r) => i !== s[r]);
}, g(tt, qe), P(tt, "_defaultColor", null), P(tt, "_defaultOpacity", 1), P(tt, "_defaultThickness", 12), P(tt, "_type", "highlight"), P(tt, "_editorType", G.HIGHLIGHT), P(tt, "_freeHighlightId", -1), P(tt, "_freeHighlight", null), P(tt, "_freeHighlightClipId", "");
let dc = tt;
var wr;
class Wp {
  constructor() {
    g(this, wr, /* @__PURE__ */ Object.create(null));
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
    n(this, wr)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, wr);
    return u(this, wr, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    u(this, wr, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    at("Not implemented");
  }
}
wr = new WeakMap();
var Re, Ja, Dt, vr, _r, on, ln, hn, Sr, K, Kd, Qd, Jd, Ro, qp, Xh, Mo, Xr;
const F = class F extends lt {
  constructor(e) {
    super(e);
    g(this, K);
    g(this, Re, null);
    g(this, Ja);
    P(this, "_colorPicker", null);
    P(this, "_drawId", null);
    u(this, Ja, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  _addOutlines(e) {
    e.drawOutlines && (m(this, K, Kd).call(this, e), m(this, K, Ro).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      i.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    at("Not implemented");
  }
  static get typesMap() {
    at("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(F, Dt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
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
      var c, f;
      r.updateProperty(s, l);
      const h = n(this, Re).updateProperty(s, l);
      h && m(this, K, Mo).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && ((f = this._colorPicker) == null || f.update(l));
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
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties(n(this, Re).getPathResizingSVGProperties(m(this, K, Xh).call(this)), {
      bbox: m(this, K, Xr).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties(n(this, Re).getPathResizedSVGProperties(m(this, K, Xh).call(this)), {
      bbox: m(this, K, Xr).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: m(this, K, Xr).call(this)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties(n(this, Re).getPathTranslatedSVGProperties(m(this, K, Xh).call(this), this.parentDimensions), {
      bbox: m(this, K, Xr).call(this)
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Ja) && (u(this, Ja, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    m(this, K, Jd).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (m(this, K, Ro).call(this), m(this, K, Mo).call(this, n(this, Re).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), m(this, K, Jd).call(this)) : e && (this._uiManager.addShouldRescale(this), m(this, K, Ro).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties({
      bbox: m(this, K, Xr).call(this)
    }, n(this, Re).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && m(this, K, Mo).call(this, n(this, Re).updateParentDimensions(this.parentDimensions, this.parent.scale));
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
    at("Not implemented");
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
    if (n(F, ln) && n(F, ln) !== c)
      return;
    const {
      viewport: {
        rotation: f
      }
    } = e, {
      width: p,
      height: b
    } = a.getBoundingClientRect(), y = u(F, vr, new AbortController()), A = e.combinedSignal(y);
    if (n(F, on) || u(F, on, h), n(F, ln) ?? u(F, ln, c), window.addEventListener("pointerup", (w) => {
      var S;
      n(F, on) === w.pointerId ? this._endDraw(w) : (S = n(F, hn)) == null || S.delete(w.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointercancel", (w) => {
      var S;
      n(F, on) === w.pointerId ? this._currentParent.endDrawingSession() : (S = n(F, hn)) == null || S.delete(w.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointerdown", (w) => {
      n(F, ln) === w.pointerType && ((n(F, hn) || u(F, hn, /* @__PURE__ */ new Set())).add(w.pointerId), n(F, Dt).isCancellable() && (n(F, Dt).removeLastElement(), n(F, Dt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: A
    }), window.addEventListener("contextmenu", Ye, {
      signal: A
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: A
    }), a.addEventListener("touchmove", (w) => {
      w.timeStamp === n(F, Sr) && St(w);
    }, {
      signal: A
    }), e.toggleDrawing(), (v = s._editorUndoBar) == null || v.hide(), n(F, Dt)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(F, Dt).startNew(o, l, p, b, f));
      return;
    }
    s.updateUIForDefaultProperties(this), u(F, Dt, this.createDrawerInstance(o, l, p, b, f)), u(F, _r, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(F, _r).toSVGProperties(), n(F, Dt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (u(F, Sr, -1), !n(F, Dt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: r
    } = e;
    if (n(F, on) === r) {
      if (((a = n(F, hn)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(F, Dt).add(s, i)), u(F, Sr, e.timeStamp), St(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, u(F, Dt, null), u(F, _r, null), u(F, ln, null), u(F, Sr, NaN)), n(F, vr) && (n(F, vr).abort(), u(F, vr, null), u(F, on, NaN), u(F, hn, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === s.div && s.drawLayer.updateProperties(this._currentDrawId, n(F, Dt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = n(F, Dt), r = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(r, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(r, i.removeLastElement());
          },
          mustExec: !1,
          type: Y.DRAW_STEP
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
    if (s.toggleDrawing(!0), s.cleanUndoStack(Y.DRAW_STEP), !n(F, Dt).isEmpty()) {
      const {
        pageDimensions: [i, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: n(F, Dt).getOutlines(i * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(F, _r),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o) {
    at("Not implemented");
  }
  static async deserialize(e, s, i) {
    var f, p;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), m(f = c, K, Kd).call(f, {
      drawOutlines: h
    }), m(p = c, K, Ro).call(p), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, Re).serialize([s, i, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Re = new WeakMap(), Ja = new WeakMap(), Dt = new WeakMap(), vr = new WeakMap(), _r = new WeakMap(), on = new WeakMap(), ln = new WeakMap(), hn = new WeakMap(), Sr = new WeakMap(), K = new WeakSet(), Kd = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  u(this, Re, e), this._drawingOptions || (this._drawingOptions = i), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = m(this, K, Qd).call(this, e, this.parent), m(this, K, Mo).call(this, e.box);
}, Qd = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(F._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, Jd = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Ro = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = m(this, K, Qd).call(this, n(this, Re), e);
  }
}, qp = function([e, s, i, r]) {
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
}, Xh = function() {
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
}, Mo = function(e) {
  if ([this.x, this.y, this.width, this.height] = m(this, K, qp).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, Xr = function() {
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
}, P(F, "_currentDrawId", -1), P(F, "_currentParent", null), g(F, Dt, null), g(F, vr, null), g(F, _r, null), g(F, on, NaN), g(F, ln, null), g(F, hn, null), g(F, Sr, NaN), P(F, "_INNER_MARGIN", 3);
let uc = F;
var Ps, Nt, Ft, Er, Za, ne, jt, We, Cr, xr, Tr, to, Yh;
class ib {
  constructor(t, e, s, i, r, a) {
    g(this, to);
    g(this, Ps, new Float64Array(6));
    g(this, Nt);
    g(this, Ft);
    g(this, Er);
    g(this, Za);
    g(this, ne);
    g(this, jt, "");
    g(this, We, 0);
    g(this, Cr, new mh());
    g(this, xr);
    g(this, Tr);
    u(this, xr, s), u(this, Tr, i), u(this, Er, r), u(this, Za, a), [t, e] = m(this, to, Yh).call(this, t, e);
    const o = u(this, Nt, [NaN, NaN, NaN, NaN, t, e]);
    u(this, ne, [t, e]), u(this, Ft, [{
      line: o,
      points: n(this, ne)
    }]), n(this, Ps).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && u(this, Za, e);
  }
  isEmpty() {
    return !n(this, Ft) || n(this, Ft).length === 0;
  }
  isCancellable() {
    return n(this, ne).length <= 10;
  }
  add(t, e) {
    [t, e] = m(this, to, Yh).call(this, t, e);
    const [s, i, r, a] = n(this, Ps).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, xr) * o, n(this, Tr) * l) <= 2 ? null : (n(this, ne).push(t, e), isNaN(s) ? (n(this, Ps).set([r, a, t, e], 2), n(this, Nt).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, Ps)[0]) && n(this, Nt).splice(6, 6), n(this, Ps).set([s, i, r, a, t, e], 0), n(this, Nt).push(...N.createBezierPoints(s, i, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (n(this, ne).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, r) {
    u(this, xr, s), u(this, Tr, i), u(this, Er, r), [t, e] = m(this, to, Yh).call(this, t, e);
    const a = u(this, Nt, [NaN, NaN, NaN, NaN, t, e]);
    u(this, ne, [t, e]);
    const o = n(this, Ft).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, Ft).push({
      line: a,
      points: n(this, ne)
    }), n(this, Ps).set(a, 0), u(this, We, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, Ft).at(-1);
  }
  setLastElement(t) {
    return n(this, Ft) ? (n(this, Ft).push(t), u(this, Nt, t.line), u(this, ne, t.points), u(this, We, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, Cr).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, Ft))
      return n(this, Cr).removeLastElement();
    n(this, Ft).pop(), u(this, jt, "");
    for (let t = 0, e = n(this, Ft).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = n(this, Ft)[t];
      u(this, Nt, s), u(this, ne, i), u(this, We, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, jt)
      }
    };
  }
  toSVGPath() {
    const t = N.svgRound(n(this, Nt)[4]), e = N.svgRound(n(this, Nt)[5]);
    if (n(this, ne).length === 2)
      return u(this, jt, `${n(this, jt)} M ${t} ${e} Z`), n(this, jt);
    if (n(this, ne).length <= 6) {
      const i = n(this, jt).lastIndexOf("M");
      u(this, jt, `${n(this, jt).slice(0, i)} M ${t} ${e}`), u(this, We, 6);
    }
    if (n(this, ne).length === 4) {
      const i = N.svgRound(n(this, Nt)[10]), r = N.svgRound(n(this, Nt)[11]);
      return u(this, jt, `${n(this, jt)} L ${i} ${r}`), u(this, We, 12), n(this, jt);
    }
    const s = [];
    n(this, We) === 0 && (s.push(`M ${t} ${e}`), u(this, We, 6));
    for (let i = n(this, We), r = n(this, Nt).length; i < r; i += 6) {
      const [a, o, l, h, c, f] = n(this, Nt).slice(i, i + 6).map(N.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${f}`);
    }
    return u(this, jt, n(this, jt) + s.join(" ")), u(this, We, n(this, Nt).length), n(this, jt);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, Ft).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, Cr).build(n(this, Ft), t, e, s, n(this, Er), n(this, Za), i), u(this, Ps, null), u(this, Nt, null), u(this, Ft, null), u(this, jt, null), n(this, Cr);
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
Ps = new WeakMap(), Nt = new WeakMap(), Ft = new WeakMap(), Er = new WeakMap(), Za = new WeakMap(), ne = new WeakMap(), jt = new WeakMap(), We = new WeakMap(), Cr = new WeakMap(), xr = new WeakMap(), Tr = new WeakMap(), to = new WeakSet(), Yh = function(t, e) {
  return N._normalizePoint(t, e, n(this, xr), n(this, Tr), n(this, Er));
};
var re, lh, hh, Me, Rs, Ms, eo, so, Pr, Wt, Hs, Xp, Yp, Kp;
class mh extends N {
  constructor() {
    super(...arguments);
    g(this, Wt);
    g(this, re);
    g(this, lh, 0);
    g(this, hh);
    g(this, Me);
    g(this, Rs);
    g(this, Ms);
    g(this, eo);
    g(this, so);
    g(this, Pr);
  }
  build(e, s, i, r, a, o, l) {
    u(this, Rs, s), u(this, Ms, i), u(this, eo, r), u(this, so, a), u(this, Pr, o), u(this, hh, l ?? 0), u(this, Me, e), m(this, Wt, Yp).call(this);
  }
  get thickness() {
    return n(this, Pr);
  }
  setLastElement(e) {
    return n(this, Me).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, Me).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of n(this, Me)) {
      if (e.push(`M${N.svgRound(s[4])} ${N.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${N.svgRound(s[10])} ${N.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, l, h, c, f] = s.subarray(i, i + 6).map(N.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${f}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = [], [h, c, f, p] = m(this, Wt, Xp).call(this);
    let b, y, A, v, w, S, _, E, C;
    switch (n(this, so)) {
      case 0:
        C = N._rescale, b = e, y = s + r, A = i, v = -r, w = e + h * i, S = s + (1 - c - p) * r, _ = e + (h + f) * i, E = s + (1 - c) * r;
        break;
      case 90:
        C = N._rescaleAndSwap, b = e, y = s, A = i, v = r, w = e + c * i, S = s + h * r, _ = e + (c + p) * i, E = s + (h + f) * r;
        break;
      case 180:
        C = N._rescale, b = e + i, y = s, A = -i, v = r, w = e + (1 - h - f) * i, S = s + c * r, _ = e + (1 - h) * i, E = s + (c + p) * r;
        break;
      case 270:
        C = N._rescaleAndSwap, b = e + i, y = s + r, A = -i, v = -r, w = e + (1 - c - p) * i, S = s + (1 - h - f) * r, _ = e + (1 - c) * i, E = s + (1 - h) * r;
        break;
    }
    for (const {
      line: x,
      points: T
    } of n(this, Me))
      o.push(C(x, b, y, A, v, a ? new Array(x.length) : null)), l.push(C(T, b, y, A, v, a ? new Array(T.length) : null));
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
    const f = [];
    let p, b, y, A, v;
    switch (h) {
      case 0:
        v = N._rescale, p = -e / i, b = s / r + 1, y = 1 / i, A = -1 / r;
        break;
      case 90:
        v = N._rescaleAndSwap, p = -s / r, b = -e / i, y = 1 / r, A = 1 / i;
        break;
      case 180:
        v = N._rescale, p = e / i + 1, b = -s / r, y = -1 / i, A = 1 / r;
        break;
      case 270:
        v = N._rescaleAndSwap, p = s / r + 1, b = e / i + 1, y = -1 / r, A = -1 / i;
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
        let [C, x, T, R] = S.subarray(0, 4);
        E.set([NaN, NaN, NaN, NaN, C, x], 0);
        for (let M = 4; M < _; M += 2) {
          const L = S[M], k = S[M + 1];
          E.set(N.createBezierPoints(C, x, T, R, L, k), (M - 2) * 3), [C, x, T, R] = [T, R, L, k];
        }
      }
    }
    for (let S = 0, _ = o.length; S < _; S++)
      f.push({
        line: v(o[S].map((E) => E ?? NaN), p, b, y, A),
        points: v(l[S].map((E) => E ?? NaN), p, b, y, A)
      });
    const w = new this.prototype.constructor();
    return w.build(f, i, r, 1, h, c, a), w;
  }
  get box() {
    return n(this, re);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? m(this, Wt, Kp).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = m(this, Wt, Hs).call(this);
    u(this, Rs, e), u(this, Ms, s), u(this, eo, i);
    const [o, l] = m(this, Wt, Hs).call(this), h = o - r, c = l - a, f = n(this, re);
    return f[0] -= h, f[1] -= c, f[2] += 2 * h, f[3] += 2 * c, f;
  }
  updateRotation(e) {
    return u(this, lh, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, re).map(N.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, re);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, re);
    let i = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, lh)) {
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
    return `matrix(${i} ${r} ${a} ${o} ${N.svgRound(l)} ${N.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = m(this, Wt, Hs).call(this), [l, h, c, f] = n(this, re);
    if (Math.abs(c - a) <= N.PRECISION || Math.abs(f - o) <= N.PRECISION) {
      const v = e + i / 2 - (l + c / 2), w = s + r / 2 - (h + f / 2);
      return {
        path: {
          "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${v} ${w})`
        }
      };
    }
    const p = (i - 2 * a) / (c - 2 * a), b = (r - 2 * o) / (f - 2 * o), y = c / i, A = f / r;
    return {
      path: {
        "transform-origin": `${N.svgRound(l)} ${N.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${y} ${A}) translate(${N.svgRound(a)} ${N.svgRound(o)}) scale(${p} ${b}) translate(${N.svgRound(-a)} ${N.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = m(this, Wt, Hs).call(this), l = n(this, re), [h, c, f, p] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = r, Math.abs(f - a) <= N.PRECISION || Math.abs(p - o) <= N.PRECISION) {
      const w = e + i / 2 - (h + f / 2), S = s + r / 2 - (c + p / 2);
      for (const {
        line: _,
        points: E
      } of n(this, Me))
        N._translate(_, w, S, _), N._translate(E, w, S, E);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const b = (i - 2 * a) / (f - 2 * a), y = (r - 2 * o) / (p - 2 * o), A = -b * (h + a) + e + a, v = -y * (c + o) + s + o;
    if (b !== 1 || y !== 1 || A !== 0 || v !== 0)
      for (const {
        line: w,
        points: S
      } of n(this, Me))
        N._rescale(w, A, v, b, y, w), N._rescale(S, A, v, b, y, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, re), l = e - o[0], h = s - o[1];
    if (n(this, Rs) === r && n(this, Ms) === a)
      for (const {
        line: c,
        points: f
      } of n(this, Me))
        N._translate(c, l, h, c), N._translate(f, l, h, f);
    else {
      const c = n(this, Rs) / r, f = n(this, Ms) / a;
      u(this, Rs, r), u(this, Ms, a);
      for (const {
        line: p,
        points: b
      } of n(this, Me))
        N._rescale(p, l, h, c, f, p), N._rescale(b, l, h, c, f, b);
      o[2] *= c, o[3] *= f;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, re);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${N.svgRound(e[0])} ${N.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
}
re = new WeakMap(), lh = new WeakMap(), hh = new WeakMap(), Me = new WeakMap(), Rs = new WeakMap(), Ms = new WeakMap(), eo = new WeakMap(), so = new WeakMap(), Pr = new WeakMap(), Wt = new WeakSet(), Hs = function(e = n(this, Pr)) {
  const s = n(this, hh) + e / 2 * n(this, eo);
  return n(this, so) % 180 === 0 ? [s / n(this, Rs), s / n(this, Ms)] : [s / n(this, Ms), s / n(this, Rs)];
}, Xp = function() {
  const [e, s, i, r] = n(this, re), [a, o] = m(this, Wt, Hs).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, Yp = function() {
  const e = u(this, re, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, Me)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6)
        $.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [c, f, p, b, y, A] = r.subarray(l, l + 6);
      $.bezierBoundingBox(a, o, c, f, p, b, y, A, e), a = y, o = A;
    }
  }
  const [s, i] = m(this, Wt, Hs).call(this);
  e[0] = le(e[0] - s, 0, 1), e[1] = le(e[1] - i, 0, 1), e[2] = le(e[2] + s, 0, 1), e[3] = le(e[3] + i, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, Kp = function(e) {
  const [s, i] = m(this, Wt, Hs).call(this);
  u(this, Pr, e);
  const [r, a] = m(this, Wt, Hs).call(this), [o, l] = [r - s, a - i], h = n(this, re);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class Bc extends Wp {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: lt._defaultLineColor,
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
    const t = new Bc(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Mc, Qp;
const Qr = class Qr extends uc {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    g(this, Mc);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    lt.initialize(e, s), this._defaultDrawingOptions = new Bc(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return q(this, "typesMap", /* @__PURE__ */ new Map([[Y.INK_THICKNESS, "stroke-width"], [Y.INK_COLOR, "stroke"], [Y.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, r, a) {
    return new ib(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return mh.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof vu) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: f,
          opacity: p,
          borderStyle: {
            rawWidth: b
          },
          popupRef: y,
          contentsObj: A
        },
        parent: {
          page: {
            pageNumber: v
          }
        }
      } = e;
      r = e = {
        annotationType: G.INK,
        color: Array.from(f),
        thickness: b,
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
        popupRef: y,
        comment: (A == null ? void 0 : A.str) || null
      };
    }
    const a = await super.deserialize(e, s, i);
    return a._initialData = r, e.comment && a.setCommentData(e.comment), a;
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new lc(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return Y.INK_COLOR;
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
    this._drawingOptions = Qr.getDefaultDrawingOptions({
      stroke: $.makeHexColor(...e),
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
      annotationType: G.INK,
      color: lt._colorManager.convert(a),
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
    return this.addComment(h), e ? (h.isCopy = !0, h) : this.annotationElementId && !m(this, Mc, Qp).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }
  renderAnnotationElement(e) {
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
Mc = new WeakSet(), Qp = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, P(Qr, "_type", "ink"), P(Qr, "_editorType", G.INK), P(Qr, "_defaultDrawingOptions", null);
let Zd = Qr;
class tu extends mh {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const Eh = 8, fo = 3;
var Rr, et, eu, rs, Jp, Zp, su, Kh, tg, eg, sg, iu, nu, ig;
class vi {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: i
  }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1), c = h.getContext("2d", {
      alpha: !1
    });
    const f = 200, p = c.font = `${s} ${i} ${f}px ${e}`, {
      actualBoundingBoxLeft: b,
      actualBoundingBoxRight: y,
      actualBoundingBoxAscent: A,
      actualBoundingBoxDescent: v,
      fontBoundingBoxAscent: w,
      fontBoundingBoxDescent: S,
      width: _
    } = c.measureText(t), E = 1.5, C = Math.ceil(Math.max(Math.abs(b) + Math.abs(y) || 0, _) * E), x = Math.ceil(Math.max(Math.abs(A) + Math.abs(v) || f, Math.abs(w) + Math.abs(S) || f) * E);
    h = new OffscreenCanvas(C, x), c = h.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), c.font = p, c.filter = "grayscale(1)", c.fillStyle = "white", c.fillRect(0, 0, C, x), c.fillStyle = "black", c.fillText(t, C * (E - 1) / 2, x * (3 - E) / 2);
    const T = m(this, et, iu).call(this, c.getImageData(0, 0, C, x).data), R = m(this, et, sg).call(this, T), M = m(this, et, nu).call(this, R), L = m(this, et, su).call(this, T, C, x, M);
    return this.processDrawnLines({
      lines: {
        curves: L,
        width: C,
        height: x
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
    const [a, o, l] = m(this, et, ig).call(this, t), [h, c] = m(this, et, eg).call(this, a, o, l, Math.hypot(o, l) * n(this, Rr).sigmaSFactor, n(this, Rr).sigmaR, n(this, Rr).kernelSize), f = m(this, et, nu).call(this, c), p = m(this, et, su).call(this, h, o, l, f);
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
    } = t, f = t.thickness ?? 0, p = [], b = Math.min(e / h, s / c), y = b / e, A = b / s, v = [];
    for (const {
      points: S
    } of l) {
      const _ = a ? m(this, et, tg).call(this, S) : S;
      if (!_)
        continue;
      v.push(_);
      const E = _.length, C = new Float32Array(E), x = new Float32Array(3 * (E === 2 ? 2 : E - 2));
      if (p.push({
        line: x,
        points: C
      }), E === 2) {
        C[0] = _[0] * y, C[1] = _[1] * A, x.set([NaN, NaN, NaN, NaN, C[0], C[1]], 0);
        continue;
      }
      let [T, R, M, L] = _;
      T *= y, R *= A, M *= y, L *= A, C.set([T, R, M, L], 0), x.set([NaN, NaN, NaN, NaN, T, R], 0);
      for (let k = 4; k < E; k += 2) {
        const Z = C[k] = _[k] * y, it = C[k + 1] = _[k + 1] * A;
        x.set(N.createBezierPoints(T, R, M, L, Z, it), (k - 2) * 3), [T, R, M, L] = [M, L, Z, it];
      }
    }
    if (p.length === 0)
      return null;
    const w = o ? new tu() : new mh();
    return w.build(p, e, s, 1, i, o ? 0 : f, r), {
      outline: w,
      newCurves: v,
      areContours: o,
      thickness: f,
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
        const x = _[E] - _[E - 2];
        a = Math.min(a, x), o = Math.max(o, x);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const c = t.length, f = Eh + fo * c, p = new Uint32Array(f);
    let b = 0;
    p[b++] = f * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * c) * h.BYTES_PER_ELEMENT, p[b++] = 0, p[b++] = i, p[b++] = r, p[b++] = e ? 0 : 1, p[b++] = Math.max(0, Math.floor(s ?? 0)), p[b++] = c, p[b++] = h.BYTES_PER_ELEMENT;
    for (const _ of t)
      p[b++] = _.length - 2, p[b++] = _[0], p[b++] = _[1];
    const y = new CompressionStream("deflate-raw"), A = y.writable.getWriter();
    await A.ready, A.write(p);
    const v = h.prototype.constructor;
    for (const _ of t) {
      const E = new v(_.length - 2);
      for (let C = 2, x = _.length; C < x; C++)
        E[C - 2] = _[C] - _[C - 2];
      A.write(E);
    }
    A.close();
    const w = await new Response(y.readable).arrayBuffer(), S = new Uint8Array(w);
    return rf(S);
  }
  static async decompressSignature(t) {
    try {
      const e = Cg(t), {
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
      const c = l[2], f = l[3], p = l[4] === 0, b = l[5], y = l[6], A = l[7], v = [], w = (Eh + fo * y) * Uint32Array.BYTES_PER_ELEMENT;
      let S;
      switch (A) {
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
      for (let _ = 0; _ < y; _++) {
        const E = l[fo * _ + Eh], C = new Float32Array(E + 2);
        v.push(C);
        for (let x = 0; x < fo - 1; x++)
          C[x] = l[fo * _ + Eh + x + 1];
        for (let x = 0; x < E; x++)
          C[x + 2] = C[x] + S[o++];
      }
      return {
        areContours: p,
        thickness: b,
        outlines: v,
        width: c,
        height: f
      };
    } catch (e) {
      return U(`decompressSignature: ${e}`), null;
    }
  }
}
Rr = new WeakMap(), et = new WeakSet(), eu = function(t, e, s, i) {
  return s -= t, i -= e, s === 0 ? i > 0 ? 0 : 4 : s === 1 ? i + 6 : 2 - i;
}, rs = new WeakMap(), Jp = function(t, e, s, i, r, a, o) {
  const l = m(this, et, eu).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (-h + l - o + 16) % 8, f = n(this, rs)[2 * c], p = n(this, rs)[2 * c + 1];
    if (t[(s + f) * e + (i + p)] !== 0)
      return c;
  }
  return -1;
}, Zp = function(t, e, s, i, r, a, o) {
  const l = m(this, et, eu).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (h + l + o + 16) % 8, f = n(this, rs)[2 * c], p = n(this, rs)[2 * c + 1];
    if (t[(s + f) * e + (i + p)] !== 0)
      return c;
  }
  return -1;
}, su = function(t, e, s, i) {
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
    for (let f = 1; f < e - 1; f++) {
      const p = c * e + f, b = a[p];
      if (b === 0)
        continue;
      let y = c, A = f;
      if (b === 1 && a[p - 1] === 0)
        o += 1, A -= 1;
      else if (b >= 1 && a[p + 1] === 0)
        o += 1, A += 1, b > 1 && (l = b);
      else {
        b !== 1 && (l = Math.abs(b));
        continue;
      }
      const v = [f, c], w = A === f + 1, S = {
        isHole: w,
        points: v,
        id: o,
        parent: 0
      };
      h.push(S);
      let _;
      for (const k of h)
        if (k.id === l) {
          _ = k;
          break;
        }
      _ ? _.isHole ? S.parent = w ? _.parent : l : S.parent = w ? l : _.parent : S.parent = w ? l : 0;
      const E = m(this, et, Jp).call(this, a, e, c, f, y, A, 0);
      if (E === -1) {
        a[p] = -o, a[p] !== 1 && (l = Math.abs(a[p]));
        continue;
      }
      let C = n(this, rs)[2 * E], x = n(this, rs)[2 * E + 1];
      const T = c + C, R = f + x;
      y = T, A = R;
      let M = c, L = f;
      for (; ; ) {
        const k = m(this, et, Zp).call(this, a, e, M, L, y, A, 1);
        C = n(this, rs)[2 * k], x = n(this, rs)[2 * k + 1];
        const Z = M + C, it = L + x;
        v.push(it, Z);
        const X = M * e + L;
        if (a[X + 1] === 0 ? a[X] = -o : a[X] === 1 && (a[X] = o), Z === c && it === f && M === T && L === R) {
          a[p] !== 1 && (l = Math.abs(a[p]));
          break;
        } else
          y = M, A = L, M = Z, L = it;
      }
    }
  }
  return h;
}, Kh = function(t, e, s, i) {
  if (s - e <= 4) {
    for (let T = e; T < s - 2; T += 2)
      i.push(t[T], t[T + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, l = t[s - 3] - a, h = Math.hypot(o, l), c = o / h, f = l / h, p = c * a - f * r, b = l / o, y = 1 / h, A = Math.atan(b), v = Math.cos(A), w = Math.sin(A), S = y * (Math.abs(v) + Math.abs(w)), _ = y * (1 - S + S ** 2), E = Math.max(Math.atan(Math.abs(w + v) * _), Math.atan(Math.abs(w - v) * _));
  let C = 0, x = e;
  for (let T = e + 2; T < s - 2; T += 2) {
    const R = Math.abs(p - c * t[T + 1] + f * t[T]);
    R > C && (x = T, C = R);
  }
  C > (h * E) ** 2 ? (m(this, et, Kh).call(this, t, e, x + 2, i), m(this, et, Kh).call(this, t, x, s, i)) : i.push(r, a);
}, tg = function(t) {
  const e = [], s = t.length;
  return m(this, et, Kh).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, eg = function(t, e, s, i, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * i ** 2, h = a >> 1;
  for (let A = 0; A < a; A++) {
    const v = (A - h) ** 2;
    for (let w = 0; w < a; w++)
      o[A * a + w] = Math.exp((v + (w - h) ** 2) / l);
  }
  const c = new Float32Array(256), f = -2 * r ** 2;
  for (let A = 0; A < 256; A++)
    c[A] = Math.exp(A ** 2 / f);
  const p = t.length, b = new Uint8Array(p), y = new Uint32Array(256);
  for (let A = 0; A < s; A++)
    for (let v = 0; v < e; v++) {
      const w = A * e + v, S = t[w];
      let _ = 0, E = 0;
      for (let x = 0; x < a; x++) {
        const T = A + x - h;
        if (!(T < 0 || T >= s))
          for (let R = 0; R < a; R++) {
            const M = v + R - h;
            if (M < 0 || M >= e)
              continue;
            const L = t[T * e + M], k = o[x * a + R] * c[Math.abs(L - S)];
            _ += L * k, E += k;
          }
      }
      const C = b[w] = Math.round(_ / E);
      y[C]++;
    }
  return [b, y];
}, sg = function(t) {
  const e = new Uint32Array(256);
  for (const s of t)
    e[s]++;
  return e;
}, iu = function(t) {
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
}, nu = function(t) {
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
}, ig = function(t) {
  const e = t, {
    width: s,
    height: i
  } = t, {
    maxDim: r
  } = n(this, Rr);
  let a = s, o = i;
  if (s > r || i > r) {
    let p = s, b = i, y = Math.log2(Math.max(s, i) / r);
    const A = Math.floor(y);
    y = y === A ? A - 1 : A;
    for (let w = 0; w < y; w++) {
      a = Math.ceil(p / 2), o = Math.ceil(b / 2);
      const S = new OffscreenCanvas(a, o);
      S.getContext("2d").drawImage(t, 0, 0, p, b, 0, 0, a, o), p = a, b = o, t !== e && t.close(), t = S.transferToImageBitmap();
    }
    const v = Math.min(r / a, r / o);
    a = Math.round(a * v), o = Math.round(o * v);
  }
  const h = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  h.fillStyle = "white", h.fillRect(0, 0, a, o), h.filter = "grayscale(1)", h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const c = h.getImageData(0, 0, a, o).data;
  return [m(this, et, iu).call(this, c), a, o];
}, g(vi, et), g(vi, Rr, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), g(vi, rs, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class _u extends Wp {
  constructor() {
    super(), super.updateProperties({
      fill: lt._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new _u();
    return t.updateAll(this), t;
  }
}
class Su extends Bc {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: lt._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new Su(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var cn, Is, dn, Mr;
const be = class be extends uc {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    g(this, cn, !1);
    g(this, Is, null);
    g(this, dn, null);
    g(this, Mr, null);
    this._willKeepAspectRatio = !0, u(this, dn, e.signatureData || null), u(this, Is, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    lt.initialize(e, s), this._defaultDrawingOptions = new _u(), this._defaultDrawnSignatureOptions = new Su(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return q(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!n(this, Is)
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
      if (n(this, dn)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: h,
          heightInPage: c
        } = n(this, dn), {
          rawDims: {
            pageWidth: f,
            pageHeight: p
          },
          rotation: b
        } = this.parent.viewport, y = vi.processDrawnLines({
          lines: r,
          pageWidth: f,
          pageHeight: p,
          rotation: b,
          innerMargin: be._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(y, c, l, h);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: n(this, Is) || ""
      }));
    return i && (this._isCopy = !0, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    u(this, Mr, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, Mr);
  }
  get description() {
    return n(this, Is);
  }
  set description(e) {
    u(this, Is, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
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
    } = n(this, dn), o = Math.max(r, a), l = vi.processDrawnLines({
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
    } = u(this, dn, e);
    u(this, cn, l instanceof tu), this.description = i;
    let h;
    n(this, cn) ? h = be.getDefaultDrawingOptions() : (h = be._defaultDrawnSignatureOptions.clone(), h.updateProperties({
      "stroke-width": l.thickness
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: h
    });
    const [c, f] = this.parentDimensions, [, p] = this.pageDimensions;
    let b = s / p;
    b = b >= 1 ? 0.5 : b, this.width *= b / this.height, this.width >= 1 && (b *= 0.9 / this.width, this.width = 0.9), this.height = b, this.setDims(c * this.width, f * this.height), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
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
    return vi.process(e, s, i, r, be._INNER_MARGIN);
  }
  getFromText(e, s) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return vi.extractContoursFromText(e, s, i, r, a, be._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return vi.processDrawnLines({
      lines: e,
      pageWidth: s,
      pageHeight: i,
      rotation: r,
      innerMargin: be._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: s
  }) {
    e ? this._drawingOptions = be.getDefaultDrawingOptions() : (this._drawingOptions = be._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
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
      annotationType: G.SIGNATURE,
      isSignature: !0,
      areContours: n(this, cn),
      color: [0, 0, 0],
      thickness: n(this, cn) ? 0 : a,
      pageIndex: this.pageIndex,
      rect: r,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return this.addComment(o), e ? (o.paths = {
      lines: s,
      points: i
    }, o.uuid = n(this, Mr), o.isCopy = !0) : o.lines = s, n(this, Is) && (o.accessibilityData = {
      type: "Figure",
      alt: n(this, Is)
    }), o;
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return o.areContours ? tu.deserialize(e, s, i, r, a, o) : mh.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    var a;
    const r = await super.deserialize(e, s, i);
    return u(r, cn, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || "", u(r, Mr, e.uuid), r;
  }
};
cn = new WeakMap(), Is = new WeakMap(), dn = new WeakMap(), Mr = new WeakMap(), P(be, "_type", "signature"), P(be, "_editorType", G.SIGNATURE), P(be, "_defaultDrawingOptions", null);
let ru = be;
var dt, Ot, un, gi, fn, io, mi, Ir, ks, Ie, no, Q, Io, ko, Qh, Jh, Zh, ou, tc, ng;
class au extends lt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    g(this, Q);
    g(this, dt, null);
    g(this, Ot, null);
    g(this, un, null);
    g(this, gi, null);
    g(this, fn, null);
    g(this, io, "");
    g(this, mi, null);
    g(this, Ir, !1);
    g(this, ks, null);
    g(this, Ie, !1);
    g(this, no, !1);
    u(this, gi, e.bitmapUrl), u(this, fn, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    lt.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return Zc.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor({
      mode: G.STAMP
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
    n(this, Ot) && (u(this, dt, null), this._uiManager.imageManager.deleteId(n(this, Ot)), (e = n(this, mi)) == null || e.remove(), u(this, mi, null), n(this, ks) && (clearTimeout(n(this, ks)), u(this, ks, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, Ot) && m(this, Q, Qh).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, Ot) && n(this, mi) === null && m(this, Q, Qh).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, un) || n(this, dt) || n(this, gi) || n(this, fn) || n(this, Ot) || n(this, Ir));
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
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, Ir) || (n(this, dt) ? m(this, Q, Jh).call(this) : m(this, Q, Qh).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const {
      id: i,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), i && this._uiManager.imageManager.isValidId(i) && (u(this, Ot, i), r && u(this, dt, r), u(this, Ir, !1), m(this, Q, Jh).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, ks) !== null && clearTimeout(n(this, ks)), u(this, ks, setTimeout(() => {
      u(this, ks, null), m(this, Q, ou).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    var b;
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, dt), o = new Ds();
    let l = n(this, dt), h = r, c = a, f = null;
    if (s) {
      if (r > s || a > s) {
        const R = Math.min(s / r, s / a);
        h = Math.floor(r * R), c = Math.floor(a * R);
      }
      f = document.createElement("canvas");
      const y = f.width = Math.ceil(h * o.sx), A = f.height = Math.ceil(c * o.sy);
      n(this, Ie) || (l = m(this, Q, Zh).call(this, y, A));
      const v = f.getContext("2d");
      v.filter = this._uiManager.hcmFilter;
      let w = "white", S = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? S = "black" : (b = window.matchMedia) != null && b.call(window, "(prefers-color-scheme: dark)").matches && (w = "#8f8f9d", S = "#42414d");
      const _ = 15, E = _ * o.sx, C = _ * o.sy, x = new OffscreenCanvas(E * 2, C * 2), T = x.getContext("2d");
      T.fillStyle = w, T.fillRect(0, 0, E * 2, C * 2), T.fillStyle = S, T.fillRect(0, 0, E, C), T.fillRect(E, C, E, C), v.fillStyle = v.createPattern(x, "repeat"), v.fillRect(0, 0, y, A), v.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, A);
    }
    let p = null;
    if (i) {
      let y, A;
      if (o.symmetric && l.width < e && l.height < e)
        y = l.width, A = l.height;
      else if (l = n(this, dt), r > e || a > e) {
        const S = Math.min(e / r, e / a);
        y = Math.floor(r * S), A = Math.floor(a * S), n(this, Ie) || (l = m(this, Q, Zh).call(this, y, A));
      }
      const w = new OffscreenCanvas(y, A).getContext("2d", {
        willReadFrequently: !0
      });
      w.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, A), p = {
        width: y,
        height: A,
        data: w.getImageData(0, 0, y, A).data
      };
    }
    return {
      canvas: f,
      width: h,
      height: c,
      imageData: p
    };
  }
  static async deserialize(e, s, i) {
    var v;
    let r = null, a = !1;
    if (e instanceof wp) {
      const {
        data: {
          rect: w,
          rotation: S,
          id: _,
          structParent: E,
          popupRef: C,
          contentsObj: x
        },
        container: T,
        parent: {
          page: {
            pageNumber: R
          }
        },
        canvas: M
      } = e;
      let L, k;
      M ? (delete e.canvas, {
        id: L,
        bitmap: k
      } = i.imageManager.getFromCanvas(T.id, M), M.remove()) : (a = !0, e._hasNoCanvas = !0);
      const Z = ((v = await s._structTree.getAriaAttributes(`${pu}${_}`)) == null ? void 0 : v.get("aria-label")) || "";
      r = e = {
        annotationType: G.STAMP,
        bitmapId: L,
        bitmap: k,
        pageIndex: R - 1,
        rect: w.slice(0),
        rotation: S,
        annotationElementId: _,
        id: _,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: Z
        },
        isSvg: !1,
        structParent: E,
        popupRef: C,
        comment: (x == null ? void 0 : x.str) || null
      };
    }
    const o = await super.deserialize(e, s, i), {
      rect: l,
      bitmap: h,
      bitmapUrl: c,
      bitmapId: f,
      isSvg: p,
      accessibilityData: b
    } = e;
    a ? (i.addMissingCanvas(e.id, o), u(o, Ir, !0)) : f && i.imageManager.isValidId(f) ? (u(o, Ot, f), h && u(o, dt, h)) : u(o, gi, c), u(o, Ie, p);
    const [y, A] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / y, o.height = (l[3] - l[1]) / A, b && (o.altTextData = b), o._initialData = r, e.comment && o.setCommentData(e.comment), u(o, no, !!r), o;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: G.STAMP,
      bitmapId: n(this, Ot),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: n(this, Ie),
      structTreeParentId: this._structTreeParentId
    };
    if (this.addComment(i), e)
      return i.bitmapUrl = m(this, Q, tc).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i.isCopy = !0, i;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = m(this, Q, ng).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = n(this, Ie) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, Ot)))
      s.stamps.set(n(this, Ot), {
        area: o,
        serialized: i
      }), i.bitmap = m(this, Q, tc).call(this, !1);
    else if (n(this, Ie)) {
      const l = s.stamps.get(n(this, Ot));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = m(this, Q, tc).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    const s = {
      rect: this.getRect(0, 0)
    };
    return this.hasEditedComment && (s.popup = this.comment), e.updateEdited(s), null;
  }
}
dt = new WeakMap(), Ot = new WeakMap(), un = new WeakMap(), gi = new WeakMap(), fn = new WeakMap(), io = new WeakMap(), mi = new WeakMap(), Ir = new WeakMap(), ks = new WeakMap(), Ie = new WeakMap(), no = new WeakMap(), Q = new WeakSet(), Io = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  u(this, dt, e.bitmap), s || (u(this, Ot, e.id), u(this, Ie, e.isSvg)), e.file && u(this, io, e.file.name), m(this, Q, Jh).call(this);
}, ko = function() {
  if (u(this, un, null), this._uiManager.enableWaiting(!1), !!n(this, mi)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, dt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, dt)) {
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
}, Qh = function() {
  if (n(this, Ot)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, Ot)).then((i) => m(this, Q, Io).call(this, i, !0)).finally(() => m(this, Q, ko).call(this));
    return;
  }
  if (n(this, gi)) {
    const i = n(this, gi);
    u(this, gi, null), this._uiManager.enableWaiting(!0), u(this, un, this._uiManager.imageManager.getFromUrl(i).then((r) => m(this, Q, Io).call(this, r)).finally(() => m(this, Q, ko).call(this)));
    return;
  }
  if (n(this, fn)) {
    const i = n(this, fn);
    u(this, fn, null), this._uiManager.enableWaiting(!0), u(this, un, this._uiManager.imageManager.getFromFile(i).then((r) => m(this, Q, Io).call(this, r)).finally(() => m(this, Q, ko).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Zc.join(",");
  const s = this._uiManager._signal;
  u(this, un, new Promise((i) => {
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
        }), m(this, Q, Io).call(this, r);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => m(this, Q, ko).call(this))), e.click();
}, Jh = function() {
  var f;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = n(this, dt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, i = this.height * a;
  else if (s > o * r || i > o * a) {
    const p = Math.min(o * r / s, o * a / i);
    s *= p, i *= p;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / r, i * h / a), this._uiManager.enableWaiting(!1);
  const c = u(this, mi, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / r, this.height = i / a, (f = this._initialOptions) != null && f.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), m(this, Q, ou).call(this), n(this, no) || (this.parent.addUndoableEditor(this), u(this, no, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, io) && this.div.setAttribute("aria-description", n(this, io)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, Zh = function(e, s) {
  const {
    width: i,
    height: r
  } = n(this, dt);
  let a = i, o = r, l = n(this, dt);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const f = new OffscreenCanvas(a, o);
    f.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = f.transferToImageBitmap();
  }
  return l;
}, ou = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: r
  } = this, a = new Ds(), o = Math.ceil(i * e * a.sx), l = Math.ceil(r * s * a.sy), h = n(this, mi);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = n(this, Ie) ? n(this, dt) : m(this, Q, Zh).call(this, o, l), f = h.getContext("2d");
  f.filter = this._uiManager.hcmFilter, f.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, tc = function(e) {
  if (e) {
    if (n(this, Ie)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, Ot));
      if (r)
        return r;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = n(this, dt), s.getContext("2d").drawImage(n(this, dt), 0, 0), s.toDataURL();
  }
  if (n(this, Ie)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * yn.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * yn.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, dt), 0, 0, n(this, dt).width, n(this, dt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, dt));
}, ng = function(e) {
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
}, P(au, "_type", "stamp"), P(au, "_editorType", G.STAMP);
var kr, ro, Ls, pn, bi, ke, gn, ao, Lr, as, Ai, Bt, yi, mn, oo, B, bn, ut, rg, fs, hu, cu, ec;
const Ke = class Ke {
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
    g(this, ut);
    g(this, kr);
    g(this, ro, !1);
    g(this, Ls, null);
    g(this, pn, null);
    g(this, bi, null);
    g(this, ke, /* @__PURE__ */ new Map());
    g(this, gn, !1);
    g(this, ao, !1);
    g(this, Lr, !1);
    g(this, as, null);
    g(this, Ai, null);
    g(this, Bt, null);
    g(this, yi, null);
    g(this, mn, null);
    g(this, oo, -1);
    g(this, B);
    const f = [...n(Ke, bn).values()];
    if (!Ke._initialized) {
      Ke._initialized = !0;
      for (const p of f)
        p.initialize(c, t);
    }
    t.registerEditorTypes(f), u(this, B, t), this.pageIndex = e, this.div = s, u(this, kr, r), u(this, Ls, a), this.viewport = h, u(this, Bt, l), this.drawLayer = o, this._structTree = i, n(this, B).addLayer(this);
  }
  get isEmpty() {
    return n(this, ke).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, B).getMode() === G.NONE;
  }
  updateToolbar(t) {
    n(this, B).updateToolbar(t);
  }
  updateMode(t = n(this, B).getMode()) {
    switch (m(this, ut, ec).call(this), t) {
      case G.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case G.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case G.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of n(Ke, bn).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, Bt)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, B).setEditingState(t);
  }
  addCommands(t) {
    n(this, B).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, B).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = n(this, Ls)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    var s;
    u(this, Lr, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), (s = n(this, mn)) == null || s.abort(), u(this, mn, null);
    const t = /* @__PURE__ */ new Set();
    for (const i of n(this, ke).values())
      i.enableEditing(), i.show(!0), i.annotationElementId && (n(this, B).removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
    if (!n(this, Ls)) {
      u(this, Lr, !1);
      return;
    }
    const e = n(this, Ls).getEditableAnnotations();
    for (const i of e) {
      if (i.hide(), n(this, B).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id))
        continue;
      const r = await this.deserialize(i);
      r && (this.addOrRebuild(r), r.enableEditing());
    }
    u(this, Lr, !1);
  }
  disable() {
    var i;
    if (u(this, ao, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), n(this, Bt) && !n(this, mn)) {
      u(this, mn, new AbortController());
      const r = n(this, B).combinedSignal(n(this, mn));
      n(this, Bt).div.addEventListener("pointerdown", (a) => {
        const {
          clientX: l,
          clientY: h,
          timeStamp: c
        } = a, f = n(this, oo);
        if (c - f > 500) {
          u(this, oo, c);
          return;
        }
        u(this, oo, -1);
        const {
          classList: p
        } = this.div;
        p.toggle("getElements", !0);
        const b = document.elementsFromPoint(l, h);
        if (p.toggle("getElements", !1), !this.div.contains(b[0]))
          return;
        let y;
        const A = new RegExp(`^${Zu}[0-9]+$`);
        for (const w of b)
          if (A.test(w.id)) {
            y = w.id;
            break;
          }
        if (!y)
          return;
        const v = n(this, ke).get(y);
        (v == null ? void 0 : v.annotationElementId) === null && (a.stopPropagation(), a.preventDefault(), v.dblclick());
      }, {
        signal: r,
        capture: !0
      });
    }
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const r of n(this, ke).values())
      if (r.disableEditing(), !!r.annotationElementId) {
        if (r.serialize() !== null) {
          t.set(r.annotationElementId, r);
          continue;
        } else
          e.set(r.annotationElementId, r);
        (i = this.getEditableAnnotation(r.annotationElementId)) == null || i.show(), r.remove();
      }
    if (n(this, Ls)) {
      const r = n(this, Ls).getEditableAnnotations();
      for (const a of r) {
        const {
          id: o
        } = a.data;
        if (n(this, B).isDeletedAnnotationElement(o)) {
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
        l = t.get(o), l && (n(this, B).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    m(this, ut, ec).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const r of n(Ke, bn).values())
      s.remove(`${r._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), u(this, ao, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, Ls)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, B).getActive() !== t && n(this, B).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, Bt)) != null && t.div && !n(this, yi)) {
      u(this, yi, new AbortController());
      const e = n(this, B).combinedSignal(n(this, yi));
      n(this, Bt).div.addEventListener("pointerdown", m(this, ut, rg).bind(this), {
        signal: e
      }), n(this, Bt).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, Bt)) != null && t.div && n(this, yi) && (n(this, yi).abort(), u(this, yi, null), n(this, Bt).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, pn))
      return;
    u(this, pn, new AbortController());
    const t = n(this, B).combinedSignal(n(this, pn));
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
    (t = n(this, pn)) == null || t.abort(), u(this, pn, null);
  }
  attach(t) {
    n(this, ke).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, B).isDeletedAnnotationElement(e) && n(this, B).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, ke).delete(t.id), (e = n(this, kr)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, ao) && t.annotationElementId && n(this, B).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, B).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, B).addDeletedAnnotationElement(t.annotationElementId), lt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, B).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, Lr)), n(this, B).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, bi) && (t._focusEventsAllowed = !1, u(this, bi, setTimeout(() => {
      u(this, bi, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, B)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = n(this, kr)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
    return n(this, B).getId();
  }
  combinedSignal(t) {
    return n(this, B).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, ut, fs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, B).updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: i
    } = m(this, ut, cu).call(this), r = this.getNextId(), a = m(this, ut, hu).call(this, {
      parent: this,
      id: r,
      x: s,
      y: i,
      uiManager: n(this, B),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n(Ke, bn).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, B))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), r = m(this, ut, hu).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, B),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(m(this, ut, cu).call(this), !0, t);
  }
  setSelected(t) {
    n(this, B).setSelected(t);
  }
  toggleSelected(t) {
    n(this, B).toggleSelected(t);
  }
  unselect(t) {
    n(this, B).unselect(t);
  }
  pointerup(t) {
    var i;
    const {
      isMac: e
    } = Xt.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, gn) || (u(this, gn, !1), (i = n(this, ut, fs)) != null && i.isDrawer && n(this, ut, fs).supportMultipleDrawings))
      return;
    if (!n(this, ro)) {
      u(this, ro, !0);
      return;
    }
    const s = n(this, B).getMode();
    if (s === G.STAMP || s === G.SIGNATURE) {
      n(this, B).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    var i;
    if (n(this, B).getMode() === G.HIGHLIGHT && this.enableTextSelection(), n(this, gn)) {
      u(this, gn, !1);
      return;
    }
    const {
      isMac: e
    } = Xt.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (u(this, gn, !0), (i = n(this, ut, fs)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, B).getActive();
    u(this, ro, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), n(this, as)) {
      n(this, ut, fs).startDrawing(this, n(this, B), !1, t);
      return;
    }
    n(this, B).setCurrentDrawingSession(this), u(this, as, new AbortController());
    const e = n(this, B).combinedSignal(n(this, as));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (u(this, Ai, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, ut, fs).startDrawing(this, n(this, B), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && u(this, Ai, e);
      return;
    }
    n(this, Ai) && setTimeout(() => {
      var e;
      (e = n(this, Ai)) == null || e.focus(), u(this, Ai, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, as) ? (n(this, B).setCurrentDrawingSession(null), n(this, as).abort(), u(this, as, null), u(this, Ai, null), n(this, ut, fs).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, B).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, as) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, as) && n(this, ut, fs).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, B).getActive()) == null ? void 0 : t.parent) === this && (n(this, B).commitOrRemove(), n(this, B).setActiveEditor(null)), n(this, bi) && (clearTimeout(n(this, bi)), u(this, bi, null));
    for (const s of n(this, ke).values())
      (e = n(this, kr)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, n(this, ke).clear(), n(this, B).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, Nr(this.div, t);
    for (const e of n(this, B).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, B).commitOrRemove(), m(this, ut, ec).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, Nr(this.div, {
      rotation: s
    }), e !== s)
      for (const i of n(this, ke).values())
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
    return n(this, B).viewParameters.realScale;
  }
};
kr = new WeakMap(), ro = new WeakMap(), Ls = new WeakMap(), pn = new WeakMap(), bi = new WeakMap(), ke = new WeakMap(), gn = new WeakMap(), ao = new WeakMap(), Lr = new WeakMap(), as = new WeakMap(), Ai = new WeakMap(), Bt = new WeakMap(), yi = new WeakMap(), mn = new WeakMap(), oo = new WeakMap(), B = new WeakMap(), bn = new WeakMap(), ut = new WeakSet(), rg = function(t) {
  n(this, B).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, Bt).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, Bt).div.contains(e)) {
    const {
      isMac: s
    } = Xt.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    n(this, B).showAllEditors("highlight", !0, !0), n(this, Bt).div.classList.add("free"), this.toggleDrawing(), dc.startHighlighting(this, n(this, B).direction === "ltr", {
      target: n(this, Bt).div,
      x: t.x,
      y: t.y
    }), n(this, Bt).div.addEventListener("pointerup", () => {
      n(this, Bt).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, B)._signal
    }), t.preventDefault();
  }
}, fs = function() {
  return n(Ke, bn).get(n(this, B).getMode());
}, hu = function(t) {
  const e = n(this, ut, fs);
  return e ? new e.prototype.constructor(t) : null;
}, cu = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (r + o) / 2 - t, c = (a + l) / 2 - e, [f, p] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return {
    offsetX: f,
    offsetY: p
  };
}, ec = function() {
  for (const t of n(this, ke).values())
    t.isEmpty() && t.remove();
}, P(Ke, "_initialized", !1), g(Ke, bn, new Map([Ud, Zd, au, dc, ru].map((t) => [t._editorType, t])));
let lu = Ke;
var os, ae, Dr, ch, Ic, ag, Ns, uu, og, fu;
const Tt = class Tt {
  constructor({
    pageIndex: t
  }) {
    g(this, Ns);
    g(this, os, null);
    g(this, ae, /* @__PURE__ */ new Map());
    g(this, Dr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, os)) {
      u(this, os, t);
      return;
    }
    if (n(this, os) !== t) {
      if (n(this, ae).size > 0)
        for (const e of n(this, ae).values())
          e.remove(), t.append(e);
      u(this, os, t);
    }
  }
  static get _svgFactory() {
    return q(this, "_svgFactory", new hc());
  }
  draw(t, e = !1, s = !1) {
    const i = ee(Tt, ch)._++, r = m(this, Ns, uu).call(this), a = Tt._svgFactory.createElement("defs");
    r.append(a);
    const o = Tt._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, Dr).set(i, o);
    const h = s ? m(this, Ns, og).call(this, a, l) : null, c = Tt._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, ae).set(i, r), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = ee(Tt, ch)._++, i = m(this, Ns, uu).call(this), r = Tt._svgFactory.createElement("defs");
    i.append(r);
    const a = Tt._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const f = Tt._svgFactory.createElement("mask");
      r.append(f), l = `mask_p${this.pageIndex}_${s}`, f.setAttribute("id", l), f.setAttribute("maskUnits", "objectBoundingBox");
      const p = Tt._svgFactory.createElement("rect");
      f.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const b = Tt._svgFactory.createElement("use");
      f.append(b), b.setAttribute("href", `#${o}`), b.setAttribute("stroke", "none"), b.setAttribute("fill", "black"), b.setAttribute("fill-rule", "nonzero"), b.classList.add("mask");
    }
    const h = Tt._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, ae).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, Dr).delete(t), this.updateProperties(t, e);
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
    } = e, o = typeof t == "number" ? n(this, ae).get(t) : t;
    if (o) {
      if (s && m(this, Ns, fu).call(this, o, s), i && m(l = Tt, Ic, ag).call(l, o, i), r) {
        const {
          classList: h
        } = o;
        for (const [c, f] of Object.entries(r))
          h.toggle(c, f);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        m(this, Ns, fu).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = n(this, ae).get(t);
    s && (n(e, os).append(s), n(this, ae).delete(t), n(e, ae).set(t, s));
  }
  remove(t) {
    n(this, Dr).delete(t), n(this, os) !== null && (n(this, ae).get(t).remove(), n(this, ae).delete(t));
  }
  destroy() {
    u(this, os, null);
    for (const t of n(this, ae).values())
      t.remove();
    n(this, ae).clear(), n(this, Dr).clear();
  }
};
os = new WeakMap(), ae = new WeakMap(), Dr = new WeakMap(), ch = new WeakMap(), Ic = new WeakSet(), ag = function(t, [e, s, i, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, Ns = new WeakSet(), uu = function() {
  const t = Tt._svgFactory.create(1, 1, !0);
  return n(this, os).append(t), t.setAttribute("aria-hidden", !0), t;
}, og = function(t, e) {
  const s = Tt._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Tt._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, fu = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, g(Tt, Ic), g(Tt, ch, 0);
let du = Tt;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: Vd
};
globalThis.pdfjsLib = {
  AbortException: An,
  AnnotationEditorLayer: lu,
  AnnotationEditorParamsType: Y,
  AnnotationEditorType: G,
  AnnotationEditorUIManager: Fr,
  AnnotationLayer: $d,
  AnnotationMode: Pi,
  AnnotationType: _t,
  build: Nm,
  ColorPicker: oc,
  createValidAbsoluteUrl: tf,
  DOMSVGFactory: hc,
  DrawLayer: du,
  FeatureTest: Xt,
  fetchData: uh,
  getDocument: Rm,
  getFilenameFromUrl: xg,
  getPdfFilenameFromUrl: Tg,
  getRGB: Fc,
  getUuid: nf,
  getXfaPageViewport: Rg,
  GlobalWorkerOptions: wi,
  ImageKind: Ch,
  InvalidPDFException: Qc,
  isDataScheme: Nc,
  isPdfFile: mu,
  isValidExplicitDest: $g,
  MathClamp: le,
  noContextMenu: Ye,
  normalizeUnicode: Sg,
  OPS: sc,
  OutputScale: Ds,
  PasswordResponses: pg,
  PDFDataRangeTransport: rp,
  PDFDateString: nc,
  PDFWorker: No,
  PermissionFlag: fg,
  PixelsPerInch: yn,
  RenderingCancelledException: gu,
  ResponseException: ic,
  setLayerDimensions: Nr,
  shadow: q,
  SignatureExtractor: vi,
  stopEvent: St,
  SupportedImageMimeTypes: Zc,
  TextLayer: Lo,
  TouchManager: ac,
  updateUrlHash: ef,
  Util: $,
  VerbosityLevel: kc,
  version: Dm,
  XfaLayer: hp
};
Promise.withResolvers ?? (Promise.withResolvers = function() {
  let d, t;
  return { promise: new Promise((s, i) => {
    d = s, t = i;
  }), resolve: d, reject: t };
});
export {
  An as AbortException,
  lu as AnnotationEditorLayer,
  Y as AnnotationEditorParamsType,
  G as AnnotationEditorType,
  Fr as AnnotationEditorUIManager,
  $d as AnnotationLayer,
  Pi as AnnotationMode,
  _t as AnnotationType,
  oc as ColorPicker,
  hc as DOMSVGFactory,
  du as DrawLayer,
  Xt as FeatureTest,
  wi as GlobalWorkerOptions,
  Ch as ImageKind,
  Qc as InvalidPDFException,
  le as MathClamp,
  sc as OPS,
  Ds as OutputScale,
  rp as PDFDataRangeTransport,
  nc as PDFDateString,
  No as PDFWorker,
  pg as PasswordResponses,
  fg as PermissionFlag,
  yn as PixelsPerInch,
  gu as RenderingCancelledException,
  ic as ResponseException,
  vi as SignatureExtractor,
  Zc as SupportedImageMimeTypes,
  Lo as TextLayer,
  ac as TouchManager,
  $ as Util,
  kc as VerbosityLevel,
  hp as XfaLayer,
  Nm as build,
  tf as createValidAbsoluteUrl,
  uh as fetchData,
  Rm as getDocument,
  xg as getFilenameFromUrl,
  Tg as getPdfFilenameFromUrl,
  Fc as getRGB,
  nf as getUuid,
  Rg as getXfaPageViewport,
  Nc as isDataScheme,
  mu as isPdfFile,
  $g as isValidExplicitDest,
  Ye as noContextMenu,
  Sg as normalizeUnicode,
  Nr as setLayerDimensions,
  q as shadow,
  St as stopEvent,
  ef as updateUrlHash,
  Dm as version
};
