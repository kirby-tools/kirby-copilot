var jp = Object.defineProperty;
var hu = (d) => {
  throw TypeError(d);
};
var Wp = (d, t, e) => t in d ? jp(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var R = (d, t, e) => Wp(d, typeof t != "symbol" ? t + "" : t, e), yc = (d, t, e) => t.has(d) || hu("Cannot " + e);
var n = (d, t, e) => (yc(d, t, "read from private field"), e ? e.call(d) : t.get(d)), m = (d, t, e) => t.has(d) ? hu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), f = (d, t, e, s) => (yc(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), b = (d, t, e) => (yc(d, t, "access private method"), e);
var te = (d, t, e, s) => ({
  set _(i) {
    f(d, t, i, e);
  },
  get _() {
    return n(d, t, s);
  }
});
const ae = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Rc = [1e-3, 0, 0, 1e-3, 0, 0], wc = 1.35, Ie = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, wi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, qp = "pdfjs_internal_editor_", z = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  SIGNATURE: 101
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
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
  DRAW_STEP: 41
}, Xp = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, qt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, ah = {
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
}, Rr = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, dc = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Oh = {
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
}, Zl = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
}, Yp = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let uc = dc.WARNINGS;
function Kp(d) {
  Number.isInteger(d) && (uc = d);
}
function Qp() {
  return uc;
}
function fc(d) {
  uc >= dc.INFOS && console.log(`Info: ${d}`);
}
function U(d) {
  uc >= dc.WARNINGS && console.log(`Warning: ${d}`);
}
function rt(d) {
  throw new Error(d);
}
function Et(d, t) {
  d || rt(t);
}
function Jp(d) {
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
function ku(d, t = null, e = null) {
  if (!d)
    return null;
  if (e && typeof d == "string") {
    if (e.addDefaultProtocol && d.startsWith("www.")) {
      const i = d.match(/\./g);
      (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
    }
    if (e.tryConvertEncoding)
      try {
        d = ig(d);
      } catch {
      }
  }
  const s = t ? URL.parse(d, t) : URL.parse(d);
  return Jp(s) ? s : null;
}
function Lu(d, t, e = !1) {
  const s = URL.parse(d);
  return s ? (s.hash = t, s.href) : e && ku(d, "http://example.com") ? d.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function X(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const Cr = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class cu extends Cr {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class vc extends Cr {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class Pc extends Cr {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class Bh extends Cr {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
}
class Zp extends Cr {
  constructor(t) {
    super(t, "FormatError");
  }
}
class rn extends Cr {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Du(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && rt("Invalid argument for bytesToString");
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
function Wl(d) {
  typeof d != "string" && rt("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function tg(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function eg() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function sg() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class Wt {
  static get isLittleEndian() {
    return X(this, "isLittleEndian", eg());
  }
  static get isEvalSupported() {
    return X(this, "isEvalSupported", sg());
  }
  static get isOffscreenCanvasSupported() {
    return X(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return X(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return X(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return X(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const _c = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var pi, oh, Ic;
class $ {
  static makeHexColor(t, e, s) {
    return `#${_c[t]}${_c[e]}${_c[s]}`;
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
      const u = t[s + c], p = t[s + c + 1];
      t[s + c] = u * i + p * a + l, t[s + c + 1] = u * r + p * o + h;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0], i = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-s * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, s) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5], c = t[0], u = t[1], p = t[2], g = t[3];
    let y = i * c + l, A = y, w = i * p + l, v = w, S = o * u + h, _ = S, E = o * g + h, C = E;
    if (r !== 0 || a !== 0) {
      const x = r * c, T = r * p, P = a * u, M = a * g;
      y += P, v += P, w += M, A += M, S += x, C += x, E += T, _ += T;
    }
    s[0] = Math.min(s[0], y, w, A, v), s[1] = Math.min(s[1], S, E, _, C), s[2] = Math.max(s[2], y, w, A, v), s[3] = Math.max(s[3], S, E, _, C);
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
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), b(this, pi, Ic).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h), b(this, pi, Ic).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h);
  }
}
pi = new WeakSet(), oh = function(t, e, s, i, r, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, p = h * h, g = p * h, y = u * (u * (u * t + 3 * h * e) + 3 * p * s) + g * i, A = u * (u * (u * r + 3 * h * a) + 3 * p * o) + g * l;
  c[0] = Math.min(c[0], y), c[1] = Math.min(c[1], A), c[2] = Math.max(c[2], y), c[3] = Math.max(c[3], A);
}, Ic = function(t, e, s, i, r, a, o, l, h, c, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, pi, oh).call(this, t, e, s, i, r, a, o, l, -u / c, p);
    return;
  }
  const g = c ** 2 - 4 * u * h;
  if (g < 0)
    return;
  const y = Math.sqrt(g), A = 2 * h;
  b(this, pi, oh).call(this, t, e, s, i, r, a, o, l, (-c + y) / A, p), b(this, pi, oh).call(this, t, e, s, i, r, a, o, l, (-c - y) / A, p);
}, m($, pi);
function ig(d) {
  return decodeURIComponent(escape(d));
}
let Sc = null, du = null;
function ng(d) {
  return Sc || (Sc = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, du = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Sc, (t, e, s) => e ? e.normalize("NFKC") : du.get(s));
}
function Fu() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), Du(d);
}
const Wd = "pdfjs_internal_id_";
function rg(d, t, e) {
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
function oe(d, t, e) {
  return Math.min(Math.max(d, t), e);
}
function Nu(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(Du(d));
}
function ag(d) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(d) : Wl(atob(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(d) {
  return d.reduce((t, e) => t + e, 0);
});
const ks = "http://www.w3.org/2000/svg", pn = class pn {
};
R(pn, "CSS", 96), R(pn, "PDF", 72), R(pn, "PDF_TO_CSS_UNITS", pn.CSS / pn.PDF);
let an = pn;
async function ql(d, t = "text") {
  if (Ka(d, document.baseURI)) {
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
class Xl {
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
    let c, u, p, g;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, u = 0, p = 0, g = 1;
        break;
      case 90:
        c = 0, u = 1, p = 1, g = 0;
        break;
      case 270:
        c = 0, u = -1, p = -1, g = 0;
        break;
      case 0:
        c = 1, u = 0, p = 0, g = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, g = -g);
    let y, A, w, v;
    c === 0 ? (y = Math.abs(h - t[1]) * s + r, A = Math.abs(l - t[0]) * s + a, w = (t[3] - t[1]) * s, v = (t[2] - t[0]) * s) : (y = Math.abs(l - t[0]) * s + r, A = Math.abs(h - t[1]) * s + a, w = (t[2] - t[0]) * s, v = (t[3] - t[1]) * s), this.transform = [c * s, u * s, p * s, g * s, y - c * s * l - p * s * h, A - u * s * l - g * s * h], this.width = w, this.height = v;
  }
  get rawDims() {
    const t = this.viewBox;
    return X(this, "rawDims", {
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
    return new Xl({
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
class qd extends Cr {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function pc(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function Xd(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function og(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function lg(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (pc(d))
    return U('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(d);
  let r = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (r && (r = r[0], r.includes("%")))
    try {
      r = s.exec(decodeURIComponent(r))[0];
    } catch {
    }
  return r || t;
}
class uu {
  constructor() {
    R(this, "started", /* @__PURE__ */ Object.create(null));
    R(this, "times", []);
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
function Ka(d, t) {
  const e = t ? URL.parse(d, t) : URL.parse(d);
  return (e == null ? void 0 : e.protocol) === "http:" || (e == null ? void 0 : e.protocol) === "https:";
}
function os(d) {
  d.preventDefault();
}
function St(d) {
  d.preventDefault(), d.stopPropagation();
}
function hg(d) {
  console.log("Deprecated API usage: " + d);
}
var yo;
class Yd {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    n(this, yo) || f(this, yo, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, yo).exec(t);
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
yo = new WeakMap(), m(Yd, yo);
function cg(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, r = [0, 0, parseInt(s), parseInt(i)];
  return new Xl({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function Kd(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (U(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function dg(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, Kd(s));
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
function hs(d) {
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
function _r(d, t, e = !1, s = !0) {
  if (t instanceof Xl) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = d, o = Wt.isCSSRoundSupported, l = `var(--total-scale-factor) * ${i}px`, h = `var(--total-scale-factor) * ${r}px`, c = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class Rs {
  constructor() {
    const {
      pixelRatio: t
    } = Rs;
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
    s = Rs.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), i !== -1 && (o = i / t, l = i / e);
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
const Mc = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
var vi, mn, Ne, _i, wo, Hr, vo, Wh, Ou, jt, Bu, Hu, Qa, $u, lh;
const Fs = class Fs {
  constructor(t) {
    m(this, jt);
    m(this, vi, null);
    m(this, mn, null);
    m(this, Ne);
    m(this, _i, null);
    m(this, wo, null);
    m(this, Hr, null);
    f(this, Ne, t), n(Fs, vo) || f(Fs, vo, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = f(this, vi, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, Ne)._uiManager._signal;
    t.addEventListener("contextmenu", os, {
      signal: e
    }), t.addEventListener("pointerdown", b(Fs, Wh, Ou), {
      signal: e
    });
    const s = f(this, _i, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, Ne).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = n(this, Ne)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return b(this, jt, $u).call(this), t;
  }
  get div() {
    return n(this, vi);
  }
  hide() {
    var t;
    n(this, vi).classList.add("hidden"), (t = n(this, mn)) == null || t.hideDropdown();
  }
  show() {
    var t;
    n(this, vi).classList.remove("hidden"), (t = n(this, wo)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, jt, Qa).call(this, e), n(this, _i).prepend(e, n(this, jt, lh)), f(this, wo, t);
  }
  addColorPicker(t) {
    f(this, mn, t);
    const e = t.renderButton();
    b(this, jt, Qa).call(this, e), n(this, _i).prepend(e, n(this, jt, lh));
  }
  async addEditSignatureButton(t) {
    const e = f(this, Hr, await t.renderEditButton(n(this, Ne)));
    b(this, jt, Qa).call(this, e), n(this, _i).prepend(e, n(this, jt, lh));
  }
  updateEditSignatureButton(t) {
    n(this, Hr) && (n(this, Hr).title = t);
  }
  remove() {
    var t;
    n(this, vi).remove(), (t = n(this, mn)) == null || t.destroy(), f(this, mn, null);
  }
};
vi = new WeakMap(), mn = new WeakMap(), Ne = new WeakMap(), _i = new WeakMap(), wo = new WeakMap(), Hr = new WeakMap(), vo = new WeakMap(), Wh = new WeakSet(), Ou = function(t) {
  t.stopPropagation();
}, jt = new WeakSet(), Bu = function(t) {
  n(this, Ne)._focusEventsAllowed = !1, St(t);
}, Hu = function(t) {
  n(this, Ne)._focusEventsAllowed = !0, St(t);
}, Qa = function(t) {
  const e = n(this, Ne)._uiManager._signal;
  t.addEventListener("focusin", b(this, jt, Bu).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, jt, Hu).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", os, {
    signal: e
  });
}, $u = function() {
  const {
    editorType: t,
    _uiManager: e
  } = n(this, Ne), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", n(Fs, vo)[t]), b(this, jt, Qa).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), n(this, _i).append(s);
}, lh = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, m(Fs, Wh), m(Fs, vo, null);
let kc = Fs;
var _o, bn, An, on, Gu, zu, Uu;
class ug {
  constructor(t) {
    m(this, on);
    m(this, _o, null);
    m(this, bn, null);
    m(this, An);
    f(this, An, t);
  }
  show(t, e, s) {
    const [i, r] = b(this, on, zu).call(this, e, s), {
      style: a
    } = n(this, bn) || f(this, bn, b(this, on, Gu).call(this));
    t.append(n(this, bn)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, bn).remove();
  }
}
_o = new WeakMap(), bn = new WeakMap(), An = new WeakMap(), on = new WeakSet(), Gu = function() {
  const t = f(this, bn, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", os, {
    signal: n(this, An)._signal
  });
  const e = f(this, _o, document.createElement("div"));
  return e.className = "buttons", t.append(e), b(this, on, Uu).call(this), t;
}, zu = function(t, e) {
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
}, Uu = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = n(this, An)._signal;
  t.addEventListener("contextmenu", os, {
    signal: s
  }), t.addEventListener("click", () => {
    n(this, An).highlightSelection("floating_button");
  }, {
    signal: s
  }), n(this, _o).append(t);
};
function Vu(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var qh;
class fg {
  constructor() {
    m(this, qh, 0);
  }
  get id() {
    return `${qp}${te(this, qh)._++}`;
  }
}
qh = new WeakMap();
var $r, So, Yt, Gr, hh;
const iu = class iu {
  constructor() {
    m(this, Gr);
    m(this, $r, Fu());
    m(this, So, 0);
    m(this, Yt, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return X(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: r
    } = t;
    return b(this, Gr, hh).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, Gr, hh).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, Gr, hh).call(this, t, s);
  }
  async getFromId(t) {
    n(this, Yt) || f(this, Yt, /* @__PURE__ */ new Map());
    const e = n(this, Yt).get(t);
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
    n(this, Yt) || f(this, Yt, /* @__PURE__ */ new Map());
    let s = n(this, Yt).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${n(this, $r)}_${te(this, So)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, Yt).set(t, s), n(this, Yt).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, Yt).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    n(this, Yt) || f(this, Yt, /* @__PURE__ */ new Map());
    const e = n(this, Yt).get(t);
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
    return t.startsWith(`image_${n(this, $r)}_`);
  }
};
$r = new WeakMap(), So = new WeakMap(), Yt = new WeakMap(), Gr = new WeakSet(), hh = async function(t, e) {
  n(this, Yt) || f(this, Yt, /* @__PURE__ */ new Map());
  let s = n(this, Yt).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${n(this, $r)}_${te(this, So)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await ql(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = iu._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
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
    U(i), s = null;
  }
  return n(this, Yt).set(t, s), s && n(this, Yt).set(s.id, s), s;
};
let Lc = iu;
var At, Si, Eo, ft;
class pg {
  constructor(t = 128) {
    m(this, At, []);
    m(this, Si, !1);
    m(this, Eo);
    m(this, ft, -1);
    f(this, Eo, t);
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
    if (i && t(), n(this, Si))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (n(this, ft) === -1) {
      n(this, At).length > 0 && (n(this, At).length = 0), f(this, ft, 0), n(this, At).push(l);
      return;
    }
    if (a && n(this, At)[n(this, ft)].type === r) {
      o && (l.undo = n(this, At)[n(this, ft)].undo), n(this, At)[n(this, ft)] = l;
      return;
    }
    const h = n(this, ft) + 1;
    h === n(this, Eo) ? n(this, At).splice(0, 1) : (f(this, ft, h), h < n(this, At).length && n(this, At).splice(h)), n(this, At).push(l);
  }
  undo() {
    if (n(this, ft) === -1)
      return;
    f(this, Si, !0);
    const {
      undo: t,
      post: e
    } = n(this, At)[n(this, ft)];
    t(), e == null || e(), f(this, Si, !1), f(this, ft, n(this, ft) - 1);
  }
  redo() {
    if (n(this, ft) < n(this, At).length - 1) {
      f(this, ft, n(this, ft) + 1), f(this, Si, !0);
      const {
        cmd: t,
        post: e
      } = n(this, At)[n(this, ft)];
      t(), e == null || e(), f(this, Si, !1);
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
          n(this, At).splice(e + 1, n(this, ft) - e), f(this, ft, e);
          return;
        }
      n(this, At).length = 0, f(this, ft, -1);
    }
  }
  destroy() {
    f(this, At, null);
  }
}
At = new WeakMap(), Si = new WeakMap(), Eo = new WeakMap(), ft = new WeakMap();
var Xh, ju;
class Yl {
  constructor(t) {
    m(this, Xh);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Wt.platform;
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
    const s = this.callbacks.get(b(this, Xh, ju).call(this, e));
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
Xh = new WeakSet(), ju = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Yh = class Yh {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return dg(t), X(this, "_colors", t);
  }
  convert(t) {
    const e = Kd(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return Yh._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? $.makeHexColor(...e) : t;
  }
};
R(Yh, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Dc = Yh;
var zr, be, Rt, Bt, Ur, Os, Vr, Oe, Ei, Ci, jr, yn, us, qe, wn, Co, xo, Wr, To, fs, xi, qr, Ti, ps, Kh, Ri, Ro, Pi, vn, _n, Ii, Po, kt, et, Bs, Mi, Sn, Io, Mo, ki, gs, Hs, ko, Be, I, ch, Fc, Wu, qu, dh, Xu, Yu, Ku, Nc, Qu, Oc, Bc, Ju, ee, Ls, Zu, tf, Hc, ef, Ja, $c;
const Nr = class Nr {
  constructor(t, e, s, i, r, a, o, l, h, c, u, p, g, y) {
    m(this, I);
    m(this, zr, new AbortController());
    m(this, be, null);
    m(this, Rt, /* @__PURE__ */ new Map());
    m(this, Bt, /* @__PURE__ */ new Map());
    m(this, Ur, null);
    m(this, Os, null);
    m(this, Vr, null);
    m(this, Oe, new pg());
    m(this, Ei, null);
    m(this, Ci, null);
    m(this, jr, 0);
    m(this, yn, /* @__PURE__ */ new Set());
    m(this, us, null);
    m(this, qe, null);
    m(this, wn, /* @__PURE__ */ new Set());
    R(this, "_editorUndoBar", null);
    m(this, Co, !1);
    m(this, xo, !1);
    m(this, Wr, !1);
    m(this, To, null);
    m(this, fs, null);
    m(this, xi, null);
    m(this, qr, null);
    m(this, Ti, !1);
    m(this, ps, null);
    m(this, Kh, new fg());
    m(this, Ri, !1);
    m(this, Ro, !1);
    m(this, Pi, null);
    m(this, vn, null);
    m(this, _n, null);
    m(this, Ii, null);
    m(this, Po, null);
    m(this, kt, z.NONE);
    m(this, et, /* @__PURE__ */ new Set());
    m(this, Bs, null);
    m(this, Mi, null);
    m(this, Sn, null);
    m(this, Io, null);
    m(this, Mo, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, ki, [0, 0]);
    m(this, gs, null);
    m(this, Hs, null);
    m(this, ko, null);
    m(this, Be, null);
    const A = this._signal = n(this, zr).signal;
    f(this, Hs, t), f(this, ko, e), f(this, Ur, s), f(this, Mi, i), this._eventBus = r, r._on("editingaction", this.onEditingAction.bind(this), {
      signal: A
    }), r._on("pagechanging", this.onPageChanging.bind(this), {
      signal: A
    }), r._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: A
    }), r._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: A
    }), r._on("setpreference", this.onSetPreference.bind(this), {
      signal: A
    }), r._on("switchannotationeditorparams", (w) => this.updateParams(w.type, w.value), {
      signal: A
    }), b(this, I, Xu).call(this), b(this, I, Ju).call(this), b(this, I, Nc).call(this), f(this, Os, a.annotationStorage), f(this, To, a.filterFactory), f(this, Sn, o), f(this, qr, l || null), f(this, Co, h), f(this, xo, c), f(this, Wr, u), f(this, Po, p || null), this.viewParameters = {
      realScale: an.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = g || null, this._supportsPinchToZoom = y !== !1;
  }
  static get _keyboardManager() {
    const t = Nr.prototype, e = (a) => n(a, Hs).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
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
    return X(this, "_keyboardManager", new Yl([[["ctrl+a", "mac+meta+a"], t.selectAll, {
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
      }) => !(o instanceof HTMLButtonElement) && n(a, Hs).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Hs).contains(document.activeElement)
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
    var t, e, s, i, r, a, o, l;
    (t = n(this, Be)) == null || t.resolve(), f(this, Be, null), (e = n(this, zr)) == null || e.abort(), f(this, zr, null), this._signal = null;
    for (const h of n(this, Bt).values())
      h.destroy();
    n(this, Bt).clear(), n(this, Rt).clear(), n(this, wn).clear(), (s = n(this, Ii)) == null || s.clear(), f(this, be, null), n(this, et).clear(), n(this, Oe).destroy(), (i = n(this, Ur)) == null || i.destroy(), (r = n(this, Mi)) == null || r.destroy(), (a = n(this, ps)) == null || a.hide(), f(this, ps, null), (o = n(this, _n)) == null || o.destroy(), f(this, _n, null), n(this, fs) && (clearTimeout(n(this, fs)), f(this, fs, null)), n(this, gs) && (clearTimeout(n(this, gs)), f(this, gs, null)), (l = this._editorUndoBar) == null || l.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, Po);
  }
  get useNewAltTextFlow() {
    return n(this, xo);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, Wr);
  }
  get hcmFilter() {
    return X(this, "hcmFilter", n(this, Sn) ? n(this, To).addHCMFilter(n(this, Sn).foreground, n(this, Sn).background) : "none");
  }
  get direction() {
    return X(this, "direction", getComputedStyle(n(this, Hs)).direction);
  }
  get highlightColors() {
    return X(this, "highlightColors", n(this, qr) ? new Map(n(this, qr).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return X(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), f(this, Ci, t);
  }
  setMainHighlightColorPicker(t) {
    f(this, _n, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = n(this, Ur)) == null || s.editAltText(this, t, e);
  }
  getSignature(t) {
    var e;
    (e = n(this, Mi)) == null || e.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return n(this, Mi);
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
        f(this, Wr, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    f(this, jr, t - 1);
  }
  focusMainContainer() {
    n(this, Hs).focus();
  }
  findParent(t, e) {
    for (const s of n(this, Bt).values()) {
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
    n(this, ko).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, wn).add(t);
  }
  removeShouldRescale(t) {
    n(this, wn).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * an.PDF_TO_CSS_UNITS;
    for (const s of n(this, wn))
      s.onScaleChanging();
    (e = n(this, Ci)) == null || e.onScaleChanging();
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
    } = e, o = e.toString(), h = b(this, I, ch).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
    if (!c)
      return;
    e.empty();
    const u = b(this, I, Fc).call(this, h), p = n(this, kt) === z.NONE, g = () => {
      u == null || u.createAndAddNewEditor({
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
      this.switchToMode(z.HIGHLIGHT, g);
      return;
    }
    g();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Os) && !n(this, Os).has(t.id) && n(this, Os).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, Ti) && (f(this, Ti, !1), b(this, I, dh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, et))
      if (e.div.contains(t)) {
        f(this, vn, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, vn))
      return;
    const [t, e] = n(this, vn);
    f(this, vn, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, I, Nc).call(this), b(this, I, Oc).call(this);
  }
  removeEditListeners() {
    b(this, I, Qu).call(this), b(this, I, Bc).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of n(this, qe))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of n(this, qe))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = n(this, be)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of n(this, et)) {
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
      for (const a of n(this, qe))
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
          b(this, I, Hc).call(this, l);
        b(this, I, $c).call(this, r);
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
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, kt) !== z.NONE && !this.isEditorHandlingKeyboard && Nr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, Ti) && (f(this, Ti, !1), b(this, I, dh).call(this, "main_toolbar")));
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
    t ? (b(this, I, Yu).call(this), b(this, I, Oc).call(this), b(this, I, ee).call(this, {
      isEditing: n(this, kt) !== z.NONE,
      isEmpty: b(this, I, Ja).call(this),
      hasSomethingToUndo: n(this, Oe).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Oe).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, I, Ku).call(this), b(this, I, Bc).call(this), b(this, I, ee).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, qe)) {
      f(this, qe, t);
      for (const e of n(this, qe))
        b(this, I, Ls).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, Kh).id;
  }
  get currentLayer() {
    return n(this, Bt).get(n(this, jr));
  }
  getLayer(t) {
    return n(this, Bt).get(t);
  }
  get currentPageIndex() {
    return n(this, jr);
  }
  addLayer(t) {
    n(this, Bt).set(t.pageIndex, t), n(this, Ri) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, Bt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    var i, r, a;
    if (n(this, kt) !== t && !(n(this, Be) && (await n(this, Be).promise, !n(this, Be)))) {
      if (f(this, Be, Promise.withResolvers()), (i = n(this, Ci)) == null || i.commitOrRemove(), f(this, kt, t), t === z.NONE) {
        this.setEditingState(!1), b(this, I, tf).call(this), (r = this._editorUndoBar) == null || r.hide(), n(this, Be).resolve();
        return;
      }
      t === z.SIGNATURE && await ((a = n(this, Mi)) == null ? void 0 : a.loadSignatures()), this.setEditingState(!0), await b(this, I, Zu).call(this), this.unselectAll();
      for (const o of n(this, Bt).values())
        o.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), n(this, Be).resolve();
        return;
      }
      for (const o of n(this, Rt).values())
        o.annotationElementId === e || o.id === e ? (this.setSelected(o), o.enterInEditMode()) : o.unselect();
      n(this, Be).resolve();
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
    var s;
    if (n(this, qe)) {
      switch (t) {
        case Y.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case Y.HIGHLIGHT_DEFAULT_COLOR:
          (s = n(this, _n)) == null || s.updateColor(e);
          break;
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
          }), (n(this, Io) || f(this, Io, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of n(this, et))
        i.updateParams(t, e);
      for (const i of n(this, qe))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var r;
    for (const a of n(this, Rt).values())
      a.editorType === t && a.show(e);
    (((r = n(this, Io)) == null ? void 0 : r.get(Y.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && b(this, I, Ls).call(this, [[Y.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, Ro) !== t) {
      f(this, Ro, t);
      for (const e of n(this, Bt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of n(this, Rt).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return n(this, Rt).get(t);
  }
  addEditor(t) {
    n(this, Rt).set(t.id, t);
  }
  removeEditor(t) {
    var e, s;
    t.div.contains(document.activeElement) && (n(this, fs) && clearTimeout(n(this, fs)), f(this, fs, setTimeout(() => {
      this.focusMainContainer(), f(this, fs, null);
    }, 0))), n(this, Rt).delete(t.id), t.annotationElementId && ((e = n(this, Ii)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, yn).has(t.annotationElementId)) && ((s = n(this, Os)) == null || s.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, yn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, yn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, yn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, be) !== t && (f(this, be, t), t && b(this, I, Ls).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, I, ef) === t && b(this, I, Ls).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, I, Ls).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, et).has(t)) {
      n(this, et).delete(t), t.unselect(), b(this, I, ee).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, et).add(t), t.select(), b(this, I, Ls).call(this, t.propertiesToUpdate), b(this, I, ee).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    (e = n(this, Ci)) == null || e.commitOrRemove();
    for (const s of n(this, et))
      s !== t && s.unselect();
    n(this, et).clear(), n(this, et).add(t), t.select(), b(this, I, Ls).call(this, t.propertiesToUpdate), b(this, I, ee).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, et).has(t);
  }
  get firstSelectedEditor() {
    return n(this, et).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, et).delete(t), b(this, I, ee).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, et).size !== 0;
  }
  get isEnterHandled() {
    return n(this, et).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, Oe).undo(), b(this, I, ee).call(this, {
      hasSomethingToUndo: n(this, Oe).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, I, Ja).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, Oe).redo(), b(this, I, ee).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Oe).hasSomethingToRedo(),
      isEmpty: b(this, I, Ja).call(this)
    });
  }
  addCommands(t) {
    n(this, Oe).add(t), b(this, I, ee).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, I, Ja).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, Oe).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, et)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        b(this, I, Hc).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, be)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, be) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, et))
      t.commit();
    b(this, I, $c).call(this, n(this, Rt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, be) && (n(this, be).commitOrRemove(), n(this, kt) !== z.NONE)) && !((t = n(this, Ci)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, et))
        e.unselect();
      n(this, et).clear(), b(this, I, ee).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, ki)[0] += t, n(this, ki)[1] += e;
    const [i, r] = n(this, ki), a = [...n(this, et)], o = 1e3;
    n(this, gs) && clearTimeout(n(this, gs)), f(this, gs, setTimeout(() => {
      f(this, gs, null), n(this, ki)[0] = n(this, ki)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, Rt).has(l.id) && (l.translateInPage(i, r), l.translationDone());
        },
        undo: () => {
          for (const l of a)
            n(this, Rt).has(l.id) && (l.translateInPage(-i, -r), l.translationDone());
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), f(this, us, /* @__PURE__ */ new Map());
      for (const t of n(this, et))
        n(this, us).set(t, {
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
    if (!n(this, us))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, us);
    f(this, us, null);
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
      if (n(this, Rt).has(i.id)) {
        const l = n(this, Bt).get(o);
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
    if (n(this, us))
      for (const s of n(this, us).keys())
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
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, et).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, be) === t;
  }
  getActive() {
    return n(this, be);
  }
  getMode() {
    return n(this, kt);
  }
  get imageManager() {
    return X(this, "imageManager", new Lc());
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
          y: g,
          width: y,
          height: A
        } of u.getClientRects())
          y === 0 || A === 0 || l.push(o(p, g, y, A));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, Vr) || f(this, Vr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, Vr)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = n(this, Vr)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = n(this, Os).getRawValue(e);
    s && (n(this, kt) === z.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    var r;
    const i = (r = n(this, Ii)) == null ? void 0 : r.get(t);
    i && (i.setCanvas(e, s), n(this, Ii).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, Ii) || f(this, Ii, /* @__PURE__ */ new Map())).set(t, e);
  }
};
zr = new WeakMap(), be = new WeakMap(), Rt = new WeakMap(), Bt = new WeakMap(), Ur = new WeakMap(), Os = new WeakMap(), Vr = new WeakMap(), Oe = new WeakMap(), Ei = new WeakMap(), Ci = new WeakMap(), jr = new WeakMap(), yn = new WeakMap(), us = new WeakMap(), qe = new WeakMap(), wn = new WeakMap(), Co = new WeakMap(), xo = new WeakMap(), Wr = new WeakMap(), To = new WeakMap(), fs = new WeakMap(), xi = new WeakMap(), qr = new WeakMap(), Ti = new WeakMap(), ps = new WeakMap(), Kh = new WeakMap(), Ri = new WeakMap(), Ro = new WeakMap(), Pi = new WeakMap(), vn = new WeakMap(), _n = new WeakMap(), Ii = new WeakMap(), Po = new WeakMap(), kt = new WeakMap(), et = new WeakMap(), Bs = new WeakMap(), Mi = new WeakMap(), Sn = new WeakMap(), Io = new WeakMap(), Mo = new WeakMap(), ki = new WeakMap(), gs = new WeakMap(), Hs = new WeakMap(), ko = new WeakMap(), Be = new WeakMap(), I = new WeakSet(), ch = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Fc = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of n(this, Bt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, Wu = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, I, ch).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, ps) || f(this, ps, new ug(this)), n(this, ps).show(s, i, this.direction === "ltr"));
}, qu = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, Bs) && ((r = n(this, ps)) == null || r.hide(), f(this, Bs, null), b(this, I, ee).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, Bs))
    return;
  const i = b(this, I, ch).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, Bs) && ((a = n(this, ps)) == null || a.hide(), f(this, Bs, null), b(this, I, ee).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, ps)) == null || o.hide(), f(this, Bs, e), b(this, I, ee).call(this, {
    hasSelectedText: !0
  }), !(n(this, kt) !== z.HIGHLIGHT && n(this, kt) !== z.NONE) && (n(this, kt) === z.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), f(this, Ti, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, kt) === z.HIGHLIGHT ? b(this, I, Fc).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), c = this.combinedSignal(h), u = (p) => {
      p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && b(this, I, dh).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: c
    }), window.addEventListener("blur", u, {
      signal: c
    });
  }
}, dh = function(t = "") {
  n(this, kt) === z.HIGHLIGHT ? this.highlightSelection(t) : n(this, Co) && b(this, I, Wu).call(this);
}, Xu = function() {
  document.addEventListener("selectionchange", b(this, I, qu).bind(this), {
    signal: this._signal
  });
}, Yu = function() {
  if (n(this, xi))
    return;
  f(this, xi, new AbortController());
  const t = this.combinedSignal(n(this, xi));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Ku = function() {
  var t;
  (t = n(this, xi)) == null || t.abort(), f(this, xi, null);
}, Nc = function() {
  if (n(this, Pi))
    return;
  f(this, Pi, new AbortController());
  const t = this.combinedSignal(n(this, Pi));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Qu = function() {
  var t;
  (t = n(this, Pi)) == null || t.abort(), f(this, Pi, null);
}, Oc = function() {
  if (n(this, Ei))
    return;
  f(this, Ei, new AbortController());
  const t = this.combinedSignal(n(this, Ei));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, Bc = function() {
  var t;
  (t = n(this, Ei)) == null || t.abort(), f(this, Ei, null);
}, Ju = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, ee = function(t) {
  Object.entries(t).some(([s, i]) => n(this, Mo)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, Mo), t)
  }), n(this, kt) === z.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, I, Ls).call(this, [[Y.HIGHLIGHT_FREE, !0]]));
}, Ls = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, Zu = async function() {
  if (!n(this, Ri)) {
    f(this, Ri, !0);
    const t = [];
    for (const e of n(this, Bt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Rt).values())
      e.enable();
  }
}, tf = function() {
  if (this.unselectAll(), n(this, Ri)) {
    f(this, Ri, !1);
    for (const t of n(this, Bt).values())
      t.disable();
    for (const t of n(this, Rt).values())
      t.disable();
  }
}, Hc = function(t) {
  const e = n(this, Bt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, ef = function() {
  let t = null;
  for (t of n(this, et))
    ;
  return t;
}, Ja = function() {
  if (n(this, Rt).size === 0)
    return !0;
  if (n(this, Rt).size === 1)
    for (const t of n(this, Rt).values())
      return t.isEmpty();
  return !1;
}, $c = function(t) {
  for (const e of n(this, et))
    e.unselect();
  n(this, et).clear();
  for (const e of t)
    e.isEmpty() || (n(this, et).add(e), e.select());
  b(this, I, ee).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, R(Nr, "TRANSLATE_SMALL", 1), R(Nr, "TRANSLATE_BIG", 10);
let Sr = Nr;
var Lt, ms, Xe, Xr, bs, Ae, Yr, As, ue, $s, En, ys, Li, as, Za, uh;
const se = class se {
  constructor(t) {
    m(this, as);
    m(this, Lt, null);
    m(this, ms, !1);
    m(this, Xe, null);
    m(this, Xr, null);
    m(this, bs, null);
    m(this, Ae, null);
    m(this, Yr, !1);
    m(this, As, null);
    m(this, ue, null);
    m(this, $s, null);
    m(this, En, null);
    m(this, ys, !1);
    f(this, ue, t), f(this, ys, t._uiManager.useNewAltTextFlow), n(se, Li) || f(se, Li, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    se._l10n ?? (se._l10n = t);
  }
  async render() {
    const t = f(this, Xe, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = f(this, Xr, document.createElement("span"));
    t.append(e), n(this, ys) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(se, Li).missing), e.setAttribute("data-l10n-id", n(se, Li)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, ue)._uiManager._signal;
    t.addEventListener("contextmenu", os, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const i = (r) => {
      r.preventDefault(), n(this, ue)._uiManager.editAltText(n(this, ue)), n(this, ys) && n(this, ue)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, as, Za)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (f(this, Yr, !0), i(r));
    }, {
      signal: s
    }), await b(this, as, uh).call(this), t;
  }
  finish() {
    n(this, Xe) && (n(this, Xe).focus({
      focusVisible: n(this, Yr)
    }), f(this, Yr, !1));
  }
  isEmpty() {
    return n(this, ys) ? n(this, Lt) === null : !n(this, Lt) && !n(this, ms);
  }
  hasData() {
    return n(this, ys) ? n(this, Lt) !== null || !!n(this, $s) : this.isEmpty();
  }
  get guessedText() {
    return n(this, $s);
  }
  async setGuessedText(t) {
    n(this, Lt) === null && (f(this, $s, t), f(this, En, await se._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, as, uh).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, ys) || n(this, Lt)) {
      (e = n(this, As)) == null || e.remove(), f(this, As, null);
      return;
    }
    if (!n(this, As)) {
      const s = f(this, As, document.createElement("div"));
      s.className = "noAltTextBadge", n(this, ue).div.append(s);
    }
    n(this, As).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, Lt);
    return !t && n(this, $s) === e && (e = n(this, En)), {
      altText: e,
      decorative: n(this, ms),
      guessedText: n(this, $s),
      textWithDisclaimer: n(this, En)
    };
  }
  get data() {
    return {
      altText: n(this, Lt),
      decorative: n(this, ms)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: r = !1
  }) {
    s && (f(this, $s, s), f(this, En, i)), !(n(this, Lt) === t && n(this, ms) === e) && (r || (f(this, Lt, t), f(this, ms, e)), b(this, as, uh).call(this));
  }
  toggle(t = !1) {
    n(this, Xe) && (!t && n(this, Ae) && (clearTimeout(n(this, Ae)), f(this, Ae, null)), n(this, Xe).disabled = !t);
  }
  shown() {
    n(this, ue)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, as, Za)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, Xe)) == null || t.remove(), f(this, Xe, null), f(this, Xr, null), f(this, bs, null), (e = n(this, As)) == null || e.remove(), f(this, As, null);
  }
};
Lt = new WeakMap(), ms = new WeakMap(), Xe = new WeakMap(), Xr = new WeakMap(), bs = new WeakMap(), Ae = new WeakMap(), Yr = new WeakMap(), As = new WeakMap(), ue = new WeakMap(), $s = new WeakMap(), En = new WeakMap(), ys = new WeakMap(), Li = new WeakMap(), as = new WeakSet(), Za = function() {
  return n(this, Lt) && "added" || n(this, Lt) === null && this.guessedText && "review" || "missing";
}, uh = async function() {
  var i, r, a;
  const t = n(this, Xe);
  if (!t)
    return;
  if (n(this, ys)) {
    if (t.classList.toggle("done", !!n(this, Lt)), t.setAttribute("data-l10n-id", n(se, Li)[n(this, as, Za)]), (i = n(this, Xr)) == null || i.setAttribute("data-l10n-id", n(se, Li)[`${n(this, as, Za)}-label`]), !n(this, Lt)) {
      (r = n(this, bs)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, Lt) && !n(this, ms)) {
      t.classList.remove("done"), (a = n(this, bs)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, bs);
  if (!e) {
    f(this, bs, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, ue).id}`;
    const o = 100, l = n(this, ue)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, Ae)), f(this, Ae, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      f(this, Ae, setTimeout(() => {
        f(this, Ae, null), n(this, bs).classList.add("show"), n(this, ue)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, Ae) && (clearTimeout(n(this, Ae)), f(this, Ae, null)), (h = n(this, bs)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, ms) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, Lt)), e.parentNode || t.append(e);
  const s = n(this, ue).getElementForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, m(se, Li, null), R(se, "_l10n", null);
let Hh = se;
var Kr, Cn, Lo, Do, Fo, No, Oo, Gs, xn, zs, Tn, Us, ln, sf, nf, rf;
const nu = class nu {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    m(this, ln);
    m(this, Kr);
    m(this, Cn, !1);
    m(this, Lo, null);
    m(this, Do);
    m(this, Fo);
    m(this, No);
    m(this, Oo);
    m(this, Gs, null);
    m(this, xn);
    m(this, zs, null);
    m(this, Tn);
    m(this, Us, null);
    f(this, Kr, t), f(this, Lo, s), f(this, Do, e), f(this, Fo, i), f(this, No, r), f(this, Oo, a), f(this, Tn, new AbortController()), f(this, xn, AbortSignal.any([o, n(this, Tn).signal])), t.addEventListener("touchstart", b(this, ln, sf).bind(this), {
      passive: !1,
      signal: n(this, xn)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / Rs.pixelRatio;
  }
  destroy() {
    var t, e;
    (t = n(this, Tn)) == null || t.abort(), f(this, Tn, null), (e = n(this, Gs)) == null || e.abort(), f(this, Gs, null);
  }
};
Kr = new WeakMap(), Cn = new WeakMap(), Lo = new WeakMap(), Do = new WeakMap(), Fo = new WeakMap(), No = new WeakMap(), Oo = new WeakMap(), Gs = new WeakMap(), xn = new WeakMap(), zs = new WeakMap(), Tn = new WeakMap(), Us = new WeakMap(), ln = new WeakSet(), sf = function(t) {
  var i, r, a;
  if ((i = n(this, Do)) != null && i.call(this))
    return;
  if (t.touches.length === 1) {
    if (n(this, Gs))
      return;
    const o = f(this, Gs, new AbortController()), l = AbortSignal.any([n(this, xn), o.signal]), h = n(this, Kr), c = {
      capture: !0,
      signal: l,
      passive: !1
    }, u = (p) => {
      var g;
      p.pointerType === "touch" && ((g = n(this, Gs)) == null || g.abort(), f(this, Gs, null));
    };
    h.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (St(p), u(p));
    }, c), h.addEventListener("pointerup", u, c), h.addEventListener("pointercancel", u, c);
    return;
  }
  if (!n(this, Us)) {
    f(this, Us, new AbortController());
    const o = AbortSignal.any([n(this, xn), n(this, Us).signal]), l = n(this, Kr), h = {
      signal: o,
      capture: !1,
      passive: !1
    };
    l.addEventListener("touchmove", b(this, ln, nf).bind(this), h);
    const c = b(this, ln, rf).bind(this);
    l.addEventListener("touchend", c, h), l.addEventListener("touchcancel", c, h), h.capture = !0, l.addEventListener("pointerdown", St, h), l.addEventListener("pointermove", St, h), l.addEventListener("pointercancel", St, h), l.addEventListener("pointerup", St, h), (r = n(this, Fo)) == null || r.call(this);
  }
  if (St(t), t.touches.length !== 2 || (a = n(this, Lo)) != null && a.call(this)) {
    f(this, zs, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), f(this, zs, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, nf = function(t) {
  var E;
  if (!n(this, zs) || t.touches.length !== 2)
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
  } = s, l = n(this, zs), {
    touch0X: h,
    touch0Y: c,
    touch1X: u,
    touch1Y: p
  } = l, g = u - h, y = p - c, A = a - i, w = o - r, v = Math.hypot(A, w) || 1, S = Math.hypot(g, y) || 1;
  if (!n(this, Cn) && Math.abs(S - v) <= nu.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, Cn)) {
    f(this, Cn, !0);
    return;
  }
  const _ = [(i + a) / 2, (r + o) / 2];
  (E = n(this, No)) == null || E.call(this, _, S, v);
}, rf = function(t) {
  var e;
  t.touches.length >= 2 || (n(this, Us) && (n(this, Us).abort(), f(this, Us, null), (e = n(this, Oo)) == null || e.call(this)), n(this, zs) && (St(t), f(this, zs, null), f(this, Cn, !1)));
};
let $h = nu;
var Rn, Ye, ht, Qr, Di, Bo, Pn, Ht, In, Vs, Fi, Ho, Mn, ye, $o, kn, js, ws, Jr, Zr, He, Ln, Go, Qh, G, Gc, zo, zc, fh, af, of, Uc, ph, Vc, lf, hf, cf, jc, df, Wc, uf, ff, pf, qc, to;
const j = class j {
  constructor(t) {
    m(this, G);
    m(this, Rn, null);
    m(this, Ye, null);
    m(this, ht, null);
    m(this, Qr, !1);
    m(this, Di, null);
    m(this, Bo, "");
    m(this, Pn, !1);
    m(this, Ht, null);
    m(this, In, null);
    m(this, Vs, null);
    m(this, Fi, null);
    m(this, Ho, "");
    m(this, Mn, !1);
    m(this, ye, null);
    m(this, $o, !1);
    m(this, kn, !1);
    m(this, js, !1);
    m(this, ws, null);
    m(this, Jr, 0);
    m(this, Zr, 0);
    m(this, He, null);
    m(this, Ln, null);
    R(this, "isSelected", !1);
    R(this, "_isCopy", !1);
    R(this, "_editToolbar", null);
    R(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    R(this, "_initialData", null);
    R(this, "_isVisible", !0);
    R(this, "_uiManager", null);
    R(this, "_focusEventsAllowed", !0);
    m(this, Go, !1);
    m(this, Qh, j._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
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
    const t = j.prototype._resizeWithKeyboard, e = Sr.TRANSLATE_SMALL, s = Sr.TRANSLATE_BIG;
    return X(this, "_resizerKeyboardManager", new Yl([[["ArrowLeft", "mac+ArrowLeft"], t, {
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
    }], [["Escape", "mac+Escape"], j.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return X(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new gg({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (j._l10n ?? (j._l10n = t), j._l10nResizer || (j._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), j._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    j._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
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
    rt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, Go);
  }
  set _isDraggable(t) {
    var e;
    f(this, Go, t), (e = this.div) == null || e.classList.toggle("draggable", t);
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
    this.div.style.zIndex = n(this, Qh);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : b(this, G, to).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, Mn) ? f(this, Mn, !1) : this.parent.setSelected(this));
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
    this.addToAnnotationStorage();
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
    b(this, G, Gc).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, ye) || f(this, ye, [this.x, this.y, this.width, this.height]), b(this, G, Gc).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, ye) || f(this, ye, [this.x, this.y, this.width, this.height]);
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
    return !!n(this, ye) && (n(this, ye)[0] !== this.x || n(this, ye)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, ye) && (n(this, ye)[2] !== this.width || n(this, ye)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = j, i = s / t, r = s / e;
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
          r = oe(r, 0, s - o), a = oe(a, 0, i - l);
          break;
        case 90:
          r = oe(r, 0, s - l), a = oe(a, o, i);
          break;
        case 180:
          r = oe(r, o, s), a = oe(a, l, i);
          break;
        case 270:
          r = oe(r, l, s), a = oe(a, 0, i - o);
          break;
      }
    this.x = r /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    r += h, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = j, zo, zc).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = j, zo, zc).call(s, t, e, 360 - this.parentRotation);
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
    r.width = `${(100 * t / s).toFixed(2)}%`, n(this, Pn) || (r.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), r = !n(this, Pn) && e.endsWith("%");
    if (i && r)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !n(this, Pn) && !r && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
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
    (t = n(this, ht)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || n(this, kn) ? this._editToolbar : (this._editToolbar = new kc(this), this.div.append(this._editToolbar.render()), n(this, ht) && await this._editToolbar.addAltText(n(this, ht)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = n(this, ht)) == null || t.destroy());
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    n(this, ht) || (Hh.initialize(j._l10n), f(this, ht, new Hh(this)), n(this, Rn) && (n(this, ht).data = n(this, Rn), f(this, Rn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = n(this, ht)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, ht) && (n(this, ht).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, ht)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, ht)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, ht)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, ht) && !n(this, ht).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, ht)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, Qr) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), b(this, G, Wc).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [i, r] = this.getInitialTranslation();
    return this.translate(i, r), Vu(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, Ln) || f(this, Ln, new $h({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: b(this, G, lf).bind(this),
      onPinching: b(this, G, hf).bind(this),
      onPinchEnd: b(this, G, cf).bind(this),
      signal: this._uiManager._signal
    }))), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Wt.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (f(this, Mn, !0), this._isDraggable) {
      b(this, G, df).call(this, t);
      return;
    }
    b(this, G, jc).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, ws) && clearTimeout(n(this, ws)), f(this, ws, setTimeout(() => {
      var t;
      f(this, ws, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, u = this.x * r, p = this.y * a, g = this.width * r, y = this.height * a;
    switch (s) {
      case 0:
        return [u + h + o, a - p - c - y + l, u + h + g + o, a - p - c + l];
      case 90:
        return [u + c + o, a - p + h + l, u + c + y + o, a - p + h + g + l];
      case 180:
        return [u - h - g + o, a - p + c + l, u - h + o, a - p + c + y + l];
      case 270:
        return [u - c - y + o, a - p - h - g + l, u - c + o, a - p - h + l];
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
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), f(this, kn, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), f(this, kn, !1), !0) : !1;
  }
  isInEditMode() {
    return n(this, kn);
  }
  shouldGetKeyboardEvents() {
    return n(this, js);
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
    b(this, G, Wc).call(this);
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
    rt("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s
    });
    i.rotation = t.rotation, f(i, Rn, t.accessibilityData), i._isCopy = t.isCopy || !1;
    const [r, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = l / a, i.width = h / r, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, Fi)) == null || t.abort(), f(this, Fi, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, ws) && (clearTimeout(n(this, ws)), f(this, ws, null)), b(this, G, to).call(this), this.removeEditToolbar(), n(this, He)) {
      for (const s of n(this, He).values())
        clearTimeout(s);
      f(this, He, null);
    }
    this.parent = null, (e = n(this, Ln)) == null || e.destroy(), f(this, Ln, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, G, af).call(this), n(this, Ht).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), f(this, Vs, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, Ht).children;
    if (!n(this, Ye)) {
      f(this, Ye, Array.from(e));
      const a = b(this, G, uf).bind(this), o = b(this, G, ff).bind(this), l = this._uiManager._signal;
      for (const h of n(this, Ye)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", b(this, G, pf).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", j._l10nResizer[c]);
      }
    }
    const s = n(this, Ye)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Ye).length / 4);
    if (r !== i) {
      if (r < i)
        for (let o = 0; o < i - r; o++)
          n(this, Ht).append(n(this, Ht).firstChild);
      else if (r > i)
        for (let o = 0; o < r - i; o++)
          n(this, Ht).firstChild.before(n(this, Ht).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, Ye)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", j._l10nResizer[h]);
      }
    }
    b(this, G, qc).call(this, 0), f(this, js, !0), n(this, Ht).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, js) && b(this, G, Vc).call(this, n(this, Ho), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    b(this, G, to).call(this), this.div.focus();
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
      (e = this._editToolbar) == null || e.show(), (s = n(this, ht)) == null || s.toggleAltTextBadge(!1);
    }
  }
  unselect() {
    var t, e, s, i, r;
    this.isSelected && (this.isSelected = !1, (t = n(this, Ht)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (r = n(this, ht)) == null || r.toggleAltTextBadge(!0));
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
    return n(this, $o);
  }
  set isEditing(t) {
    f(this, $o, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    f(this, Pn, !0);
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
      n(this, He) || f(this, He, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = n(this, He).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, He).delete(s), n(this, He).size === 0 && f(this, He, null);
      }, j._telemetryTimeout), n(this, He).set(s, i);
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
    this.div && (this.div.tabIndex = 0), f(this, Qr, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), f(this, Qr, !0);
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
Rn = new WeakMap(), Ye = new WeakMap(), ht = new WeakMap(), Qr = new WeakMap(), Di = new WeakMap(), Bo = new WeakMap(), Pn = new WeakMap(), Ht = new WeakMap(), In = new WeakMap(), Vs = new WeakMap(), Fi = new WeakMap(), Ho = new WeakMap(), Mn = new WeakMap(), ye = new WeakMap(), $o = new WeakMap(), kn = new WeakMap(), js = new WeakMap(), ws = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), He = new WeakMap(), Ln = new WeakMap(), Go = new WeakMap(), Qh = new WeakMap(), G = new WeakSet(), Gc = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, zo = new WeakSet(), zc = function(t, e, s) {
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
}, fh = function(t) {
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
}, af = function() {
  if (n(this, Ht))
    return;
  f(this, Ht, document.createElement("div")), n(this, Ht).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, Ht).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, G, of).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", os, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, Ht));
}, of = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = Wt.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = n(this, ht)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, f(this, In, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, G, Vc).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", St, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", os, {
    signal: a
  }), f(this, Vs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, ht)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, b(this, G, ph).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, Uc = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [r, a] = this.parentDimensions;
  this.setDims(r * s, a * i), this.fixAndSetPosition(), this._onResized();
}, ph = function() {
  if (!n(this, Vs))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = n(this, Vs);
  f(this, Vs, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === s && l === i || this.addCommands({
    cmd: b(this, G, Uc).bind(this, r, a, o, l),
    undo: b(this, G, Uc).bind(this, t, e, s, i),
    mustExec: !0
  });
}, Vc = function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = j.MIN_SIZE / s, c = j.MIN_SIZE / i, u = b(this, G, fh).call(this, this.rotation), p = (N, B) => [u[0] * N + u[2] * B, u[1] * N + u[3] * B], g = b(this, G, fh).call(this, 360 - this.rotation), y = (N, B) => [g[0] * N + g[2] * B, g[1] * N + g[3] * B];
  let A, w, v = !1, S = !1;
  switch (t) {
    case "topLeft":
      v = !0, A = (N, B) => [0, 0], w = (N, B) => [N, B];
      break;
    case "topMiddle":
      A = (N, B) => [N / 2, 0], w = (N, B) => [N / 2, B];
      break;
    case "topRight":
      v = !0, A = (N, B) => [N, 0], w = (N, B) => [0, B];
      break;
    case "middleRight":
      S = !0, A = (N, B) => [N, B / 2], w = (N, B) => [0, B / 2];
      break;
    case "bottomRight":
      v = !0, A = (N, B) => [N, B], w = (N, B) => [0, 0];
      break;
    case "bottomMiddle":
      A = (N, B) => [N / 2, B], w = (N, B) => [N / 2, 0];
      break;
    case "bottomLeft":
      v = !0, A = (N, B) => [0, B], w = (N, B) => [N, 0];
      break;
    case "middleLeft":
      S = !0, A = (N, B) => [0, B / 2], w = (N, B) => [N, B / 2];
      break;
  }
  const _ = A(o, l), E = w(o, l);
  let C = p(...E);
  const x = j._round(r + C[0]), T = j._round(a + C[1]);
  let P = 1, M = 1, O, D;
  if (e.fromKeyboard)
    ({
      deltaX: O,
      deltaY: D
    } = e);
  else {
    const {
      screenX: N,
      screenY: B
    } = e, [De, Is] = n(this, In);
    [O, D] = this.screenToPageTranslation(N - De, B - Is), n(this, In)[0] = N, n(this, In)[1] = B;
  }
  if ([O, D] = y(O / s, D / i), v) {
    const N = Math.hypot(o, l);
    P = M = Math.max(Math.min(Math.hypot(E[0] - _[0] - O, E[1] - _[1] - D) / N, 1 / o, 1 / l), h / o, c / l);
  } else S ? P = oe(Math.abs(E[0] - _[0] - O), h, 1) / o : M = oe(Math.abs(E[1] - _[1] - D), c, 1) / l;
  const tt = j._round(o * P), st = j._round(l * M);
  C = p(...w(tt, st));
  const q = x - C[0], Zt = T - C[1];
  n(this, ye) || f(this, ye, [this.x, this.y, this.width, this.height]), this.width = tt, this.height = st, this.x = q, this.y = Zt, this.setDims(s * tt, i * st), this.fixAndSetPosition(), this._onResizing();
}, lf = function() {
  var t;
  f(this, Vs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, ht)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, hf = function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = b(this, G, fh).call(this, this.rotation), o = (x, T) => [a[0] * x + a[2] * T, a[1] * x + a[3] * T], [l, h] = this.parentDimensions, c = this.x, u = this.y, p = this.width, g = this.height, y = j.MIN_SIZE / l, A = j.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / p, 1 / g), y / p, A / g);
  const w = j._round(p * r), v = j._round(g * r);
  if (w === p && v === g)
    return;
  n(this, ye) || f(this, ye, [c, u, p, g]);
  const S = o(p / 2, g / 2), _ = j._round(c + S[0]), E = j._round(u + S[1]), C = o(w / 2, v / 2);
  this.x = _ - C[0], this.y = E - C[1], this.width = w, this.height = v, this.setDims(l * w, h * v), this.fixAndSetPosition(), this._onResizing();
}, cf = function() {
  var t;
  (t = n(this, ht)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), b(this, G, ph).call(this);
}, jc = function(t) {
  const {
    isMac: e
  } = Wt.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, df = function(t) {
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
    i.abort(), f(this, Di, null), f(this, Mn, !1), this._uiManager.endDragSession() || b(this, G, jc).call(this, h), s && this._onStopDragging();
  };
  e && (f(this, Jr, t.clientX), f(this, Zr, t.clientY), f(this, Di, t.pointerId), f(this, Bo, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: u,
      pointerId: p
    } = h;
    if (p !== n(this, Di)) {
      St(h);
      return;
    }
    const [g, y] = this.screenToPageTranslation(c - n(this, Jr), u - n(this, Zr));
    f(this, Jr, c), f(this, Zr, u), this._uiManager.dragSelectedEditors(g, y);
  }, a), window.addEventListener("touchmove", St, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, Bo) && (n(this, Ln) || h.isPrimary) && o(h), St(h);
  }, a));
  const l = (h) => {
    if (!n(this, Di) || n(this, Di) === h.pointerId) {
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
}, Wc = function() {
  if (n(this, Fi) || !this.div)
    return;
  f(this, Fi, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Fi));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, uf = function(t) {
  j._resizerKeyboardManager.exec(this, t);
}, ff = function(t) {
  var e;
  n(this, js) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, Ht) && b(this, G, to).call(this);
}, pf = function(t) {
  f(this, Ho, n(this, js) ? t : "");
}, qc = function(t) {
  if (n(this, Ye))
    for (const e of n(this, Ye))
      e.tabIndex = t;
}, to = function() {
  f(this, js, !1), b(this, G, qc).call(this, -1), b(this, G, ph).call(this);
}, m(j, zo), R(j, "_l10n", null), R(j, "_l10nResizer", null), R(j, "_borderLineWidth", -1), R(j, "_colorManager", new Dc()), R(j, "_zIndex", 1), R(j, "_telemetryTimeout", 1e3);
let lt = j;
class gg extends lt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const fu = 3285377520, Fe = 4294901760, cs = 65535;
class gf {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : fu, this.h2 = t ? t & 4294967295 : fu;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let A = 0, w = t.length; A < w; A++) {
        const v = t.charCodeAt(A);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const u = 3432918353, p = 461845907, g = u & cs, y = p & cs;
    for (let A = 0; A < i; A++)
      A & 1 ? (o = a[A], o = o * u & Fe | o * g & cs, o = o << 15 | o >>> 17, o = o * p & Fe | o * y & cs, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[A], l = l * u & Fe | l * g & cs, l = l << 15 | l >>> 17, l = l * p & Fe | l * y & cs, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & Fe | o * g & cs, o = o << 15 | o >>> 17, o = o * p & Fe | o * y & cs, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Fe | t * 36045 & cs, e = e * 4283543511 & Fe | ((e << 16 | t >>> 16) * 2950163797 & Fe) >>> 16, t ^= e >>> 1, t = t * 444984403 & Fe | t * 60499 & cs, e = e * 3301882366 & Fe | ((e << 16 | t >>> 16) * 3120437893 & Fe) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Xc = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Dn, Fn, $t, Jh, mf;
class Qd {
  constructor() {
    m(this, Jh);
    m(this, Dn, !1);
    m(this, Fn, null);
    m(this, $t, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = n(this, $t).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, $t).get(t);
  }
  remove(t) {
    if (n(this, $t).delete(t), n(this, $t).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of n(this, $t).values())
        if (e instanceof lt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = n(this, $t).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (i = !0, s[r] = a);
    else
      i = !0, n(this, $t).set(t, e);
    i && b(this, Jh, mf).call(this), e instanceof lt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return n(this, $t).has(t);
  }
  get size() {
    return n(this, $t).size;
  }
  resetModified() {
    n(this, Dn) && (f(this, Dn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new bf(this);
  }
  get serializable() {
    if (n(this, $t).size === 0)
      return Xc;
    const t = /* @__PURE__ */ new Map(), e = new gf(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, $t)) {
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
    } : Xc;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of n(this, $t).values()) {
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
    f(this, Fn, null);
  }
  get modifiedIds() {
    if (n(this, Fn))
      return n(this, Fn);
    const t = [];
    for (const e of n(this, $t).values())
      !(e instanceof lt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return f(this, Fn, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return n(this, $t).entries();
  }
}
Dn = new WeakMap(), Fn = new WeakMap(), $t = new WeakMap(), Jh = new WeakSet(), mf = function() {
  n(this, Dn) || (f(this, Dn, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Uo;
class bf extends Qd {
  constructor(e) {
    super();
    m(this, Uo);
    const {
      map: s,
      hash: i,
      transfer: r
    } = e.serializable, a = structuredClone(s, r ? {
      transfer: r
    } : null);
    f(this, Uo, {
      map: a,
      hash: i,
      transfer: r
    });
  }
  get print() {
    rt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, Uo);
  }
  get modifiedIds() {
    return X(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Uo = new WeakMap();
var ta;
class mg {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, ta, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), n(this, ta).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }) {
    if (!(!t || n(this, ta).has(t.loadedName))) {
      if (Et(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: i,
          src: r,
          style: a
        } = t, o = new FontFace(i, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, ta).add(i), s == null || s(t);
        } catch {
          U(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      rt("Not implemented: loadSystemFont without the Font Loading API.");
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
    return X(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return X(this, "isSyncFontLoadingSupported", ae || Wt.platform.isFirefox);
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
    return X(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(E, C) {
      return E.charCodeAt(C) << 24 | E.charCodeAt(C + 1) << 16 | E.charCodeAt(C + 2) << 8 | E.charCodeAt(C + 3) & 255;
    }
    function i(E, C, x, T) {
      const P = E.substring(0, C), M = E.substring(C + x);
      return P + T + M;
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
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, u.length, u);
    const y = 16, A = 1482184792;
    let w = s(p, y);
    for (r = 0, a = u.length - 3; r < a; r += 4)
      w = w - A + s(u, r) | 0;
    r < u.length && (w = w - A + s(u + "XXX", r) | 0), p = i(p, y, 4, tg(w));
    const v = `url(data:font/opentype;base64,${btoa(p)});`, S = `@font-face {font-family:"${u}";src:${v}}`;
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
ta = new WeakMap();
class bg {
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
    const t = `url(data:${this.mimetype};base64,${Nu(this.data)});`;
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
function Ag(d) {
  if (d instanceof URL)
    return d.href;
  if (typeof d == "string") {
    if (ae)
      return d;
    const t = URL.parse(d, window.location);
    if (t)
      return t.href;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function yg(d) {
  if (ae && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return Wl(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function th(d) {
  if (typeof d != "string")
    return null;
  if (d.endsWith("/"))
    return d;
  throw new Error(`Invalid factory url: "${d}" must include trailing slash.`);
}
const Yc = (d) => typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0, wg = (d) => typeof d == "object" && typeof (d == null ? void 0 : d.name) == "string", vg = rg.bind(null, Yc, wg);
var Ws, Zh;
class _g {
  constructor() {
    m(this, Ws, /* @__PURE__ */ new Map());
    m(this, Zh, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, Zh).then(() => {
      for (const [i] of n(this, Ws))
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
    n(this, Ws).set(e, i);
  }
  removeEventListener(t, e) {
    const s = n(this, Ws).get(e);
    s == null || s(), n(this, Ws).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, Ws))
      t == null || t();
    n(this, Ws).clear();
  }
}
Ws = new WeakMap(), Zh = new WeakMap();
const eh = {
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
function pu() {
}
function ce(d) {
  if (d instanceof rn || d instanceof Pc || d instanceof cu || d instanceof Bh || d instanceof vc)
    return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || rt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new rn(d.message);
    case "InvalidPDFException":
      return new Pc(d.message);
    case "PasswordException":
      return new cu(d.message, d.code);
    case "ResponseException":
      return new Bh(d.message, d.status, d.missing);
    case "UnknownErrorException":
      return new vc(d.message, d.details);
  }
  return new vc(d.message, d.toString());
}
var ea, je, Af, yf, wf, gh;
class eo {
  constructor(t, e, s) {
    m(this, je);
    m(this, ea, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, je, Af).bind(this), {
      signal: n(this, ea).signal
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
          reason: ce(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = n(this, ea)) == null || t.abort(), f(this, ea, null);
  }
}
ea = new WeakMap(), je = new WeakSet(), Af = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    b(this, je, wf).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === eh.DATA)
      i.resolve(t.data);
    else if (t.callback === eh.ERROR)
      i.reject(ce(t.reason));
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
        callback: eh.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: eh.ERROR,
        callbackId: t.callbackId,
        reason: ce(a)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, je, yf).call(this, t);
    return;
  }
  e(t.data);
}, yf = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, u) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: i,
        stream: vt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
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
        reason: ce(h)
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
      reason: ce(h)
    });
  });
}, wf = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case vt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(ce(t.reason));
      break;
    case vt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(ce(t.reason));
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
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || pu).then(function() {
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
          reason: ce(h)
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
      a.isClosed = !0, a.controller.close(), b(this, je, gh).call(this, a, e);
      break;
    case vt.ERROR:
      Et(a, "error should have stream controller"), a.controller.error(ce(t.reason)), b(this, je, gh).call(this, a, e);
      break;
    case vt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(ce(t.reason)), b(this, je, gh).call(this, a, e);
      break;
    case vt.CANCEL:
      if (!o)
        break;
      const l = ce(t.reason);
      Promise.try(o.onCancel || pu, l).then(function() {
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
          reason: ce(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, gh = async function(t, e) {
  var s, i, r;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var Vo;
class vf {
  constructor({
    enableHWA: t = !1
  }) {
    m(this, Vo, !1);
    f(this, Vo, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !n(this, Vo)
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
    rt("Abstract method `_createCanvas` called.");
  }
}
Vo = new WeakMap();
class Sg extends vf {
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
class _f {
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
    rt("Abstract method `_fetch` called.");
  }
}
class gu extends _f {
  async _fetch(t) {
    const e = await ql(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Wl(e);
  }
}
class Sf {
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
var Nn, sa, qs, Xs, Kt, On, Bn, k, Xt, so, Pr, mh, Ir, Ef, Kc, Mr, io, no, Qc, ro;
class Eg extends Sf {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    m(this, k);
    m(this, Nn);
    m(this, sa);
    m(this, qs);
    m(this, Xs);
    m(this, Kt);
    m(this, On);
    m(this, Bn, 0);
    f(this, Xs, e), f(this, Kt, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = n(this, k, Xt).get(e);
    if (s)
      return s;
    const [i, r, a] = b(this, k, mh).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, k, Xt).get(o), s)
      return n(this, k, Xt).set(e, s), s;
    const l = `g_${n(this, Xs)}_transfer_map_${te(this, Bn)._++}`, h = b(this, k, Ir).call(this, l);
    n(this, k, Xt).set(e, h), n(this, k, Xt).set(o, h);
    const c = b(this, k, Mr).call(this, l);
    return b(this, k, no).call(this, i, r, a, c), h;
  }
  addHCMFilter(e, s) {
    var y;
    const i = `${e}-${s}`, r = "base";
    let a = n(this, k, so).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((y = a.filter) == null || y.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, n(this, k, so).set(r, a)), !e || !s))
      return a.url;
    const o = b(this, k, ro).call(this, e);
    e = $.makeHexColor(...o);
    const l = b(this, k, ro).call(this, s);
    if (s = $.makeHexColor(...l), n(this, k, Pr).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let A = 0; A <= 255; A++) {
      const w = A / 255;
      h[A] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), u = `g_${n(this, Xs)}_hcm_filter`, p = a.filter = b(this, k, Mr).call(this, u);
    b(this, k, no).call(this, c, c, c, p), b(this, k, Kc).call(this, p);
    const g = (A, w) => {
      const v = o[A] / 255, S = l[A] / 255, _ = new Array(w + 1);
      for (let E = 0; E <= w; E++)
        _[E] = v + E / w * (S - v);
      return _.join(",");
    };
    return b(this, k, no).call(this, g(0, 5), g(1, 5), g(2, 5), p), a.url = b(this, k, Ir).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = n(this, k, Xt).get(e);
    if (s)
      return s;
    const [i] = b(this, k, mh).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, k, Xt).get(r), s)
      return n(this, k, Xt).set(e, s), s;
    const a = `g_${n(this, Xs)}_alpha_map_${te(this, Bn)._++}`, o = b(this, k, Ir).call(this, a);
    n(this, k, Xt).set(e, o), n(this, k, Xt).set(r, o);
    const l = b(this, k, Mr).call(this, a);
    return b(this, k, Qc).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, k, Xt).get(e || "luminosity");
    if (s)
      return s;
    let i, r;
    if (e ? ([i] = b(this, k, mh).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, k, Xt).get(r), s)
      return n(this, k, Xt).set(e, s), s;
    const a = `g_${n(this, Xs)}_luminosity_map_${te(this, Bn)._++}`, o = b(this, k, Ir).call(this, a);
    n(this, k, Xt).set(e, o), n(this, k, Xt).set(r, o);
    const l = b(this, k, Mr).call(this, a);
    return b(this, k, Ef).call(this, l), e && b(this, k, Qc).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    var S;
    const o = `${s}-${i}-${r}-${a}`;
    let l = n(this, k, so).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, k, so).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(b(this, k, ro).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [g, y] = [r, a].map(b(this, k, ro).bind(this));
    p < u && ([u, p, g, y] = [p, u, y, g]), n(this, k, Pr).style.color = "";
    const A = (_, E, C) => {
      const x = new Array(256), T = (p - u) / C, P = _ / 255, M = (E - _) / (255 * C);
      let O = 0;
      for (let D = 0; D <= C; D++) {
        const tt = Math.round(u + D * T), st = P + D * M;
        for (let q = O; q <= tt; q++)
          x[q] = st;
        O = tt + 1;
      }
      for (let D = O; D < 256; D++)
        x[D] = x[O - 1];
      return x.join(",");
    }, w = `g_${n(this, Xs)}_hcm_${e}_filter`, v = l.filter = b(this, k, Mr).call(this, w);
    return b(this, k, Kc).call(this, v), b(this, k, no).call(this, A(g[0], y[0], 5), A(g[1], y[1], 5), A(g[2], y[2], 5), v), l.url = b(this, k, Ir).call(this, w), l.url;
  }
  destroy(e = !1) {
    var s, i, r, a;
    e && ((s = n(this, On)) != null && s.size) || ((i = n(this, qs)) == null || i.parentNode.parentNode.remove(), f(this, qs, null), (r = n(this, sa)) == null || r.clear(), f(this, sa, null), (a = n(this, On)) == null || a.clear(), f(this, On, null), f(this, Bn, 0));
  }
}
Nn = new WeakMap(), sa = new WeakMap(), qs = new WeakMap(), Xs = new WeakMap(), Kt = new WeakMap(), On = new WeakMap(), Bn = new WeakMap(), k = new WeakSet(), Xt = function() {
  return n(this, sa) || f(this, sa, /* @__PURE__ */ new Map());
}, so = function() {
  return n(this, On) || f(this, On, /* @__PURE__ */ new Map());
}, Pr = function() {
  if (!n(this, qs)) {
    const e = n(this, Kt).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, Kt).createElementNS(ks, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), f(this, qs, n(this, Kt).createElementNS(ks, "defs")), e.append(i), i.append(n(this, qs)), n(this, Kt).body.append(e);
  }
  return n(this, qs);
}, mh = function(e) {
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
}, Ir = function(e) {
  if (n(this, Nn) === void 0) {
    f(this, Nn, "");
    const s = n(this, Kt).URL;
    s !== n(this, Kt).baseURI && (pc(s) ? U('#createUrl: ignore "data:"-URL for performance reasons.') : f(this, Nn, Lu(s, "")));
  }
  return `url(${n(this, Nn)}#${e})`;
}, Ef = function(e) {
  const s = n(this, Kt).createElementNS(ks, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Kc = function(e) {
  const s = n(this, Kt).createElementNS(ks, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, Mr = function(e) {
  const s = n(this, Kt).createElementNS(ks, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, k, Pr).append(s), s;
}, io = function(e, s, i) {
  const r = n(this, Kt).createElementNS(ks, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, no = function(e, s, i, r) {
  const a = n(this, Kt).createElementNS(ks, "feComponentTransfer");
  r.append(a), b(this, k, io).call(this, a, "feFuncR", e), b(this, k, io).call(this, a, "feFuncG", s), b(this, k, io).call(this, a, "feFuncB", i);
}, Qc = function(e, s) {
  const i = n(this, Kt).createElementNS(ks, "feComponentTransfer");
  s.append(i), b(this, k, io).call(this, i, "feFuncA", e);
}, ro = function(e) {
  return n(this, k, Pr).style.color = e, Kd(getComputedStyle(n(this, k, Pr)).getPropertyValue("color"));
};
class Cf {
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
    rt("Abstract method `_fetch` called.");
  }
}
class mu extends Cf {
  async _fetch(t) {
    const e = await ql(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class xf {
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
    rt("Abstract method `_fetch` called.");
  }
}
class bu extends xf {
  async _fetch(t) {
    const e = await ql(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
ae && U("Please use the `legacy` build in Node.js environments.");
async function Jd(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class Cg extends Sf {
}
class xg extends vf {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Tg extends _f {
  async _fetch(t) {
    return Jd(t);
  }
}
class Rg extends Cf {
  async _fetch(t) {
    return Jd(t);
  }
}
class Pg extends xf {
  async _fetch(t) {
    return Jd(t);
  }
}
const Ut = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Jc(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class Zd {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    rt("Abstract method `getPattern` called.");
  }
}
class Ig extends Zd {
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
    if (i === Ut.STROKE || i === Ut.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, pt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = $.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), Jc(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      r.setTransform(u);
    } else
      Jc(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function Ec(d, t, e, s, i, r, a, o) {
  const l = t.coords, h = t.colors, c = d.data, u = d.width * 4;
  let p;
  l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), l[s + 1] > l[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const g = (l[e] + t.offsetX) * t.scaleX, y = (l[e + 1] + t.offsetY) * t.scaleY, A = (l[s] + t.offsetX) * t.scaleX, w = (l[s + 1] + t.offsetY) * t.scaleY, v = (l[i] + t.offsetX) * t.scaleX, S = (l[i + 1] + t.offsetY) * t.scaleY;
  if (y >= S)
    return;
  const _ = h[r], E = h[r + 1], C = h[r + 2], x = h[a], T = h[a + 1], P = h[a + 2], M = h[o], O = h[o + 1], D = h[o + 2], tt = Math.round(y), st = Math.round(S);
  let q, Zt, N, B, De, Is, cn, Ms;
  for (let Mt = tt; Mt <= st; Mt++) {
    if (Mt < w) {
      const gt = Mt < y ? 0 : (y - Mt) / (y - w);
      q = g - (g - A) * gt, Zt = _ - (_ - x) * gt, N = E - (E - T) * gt, B = C - (C - P) * gt;
    } else {
      let gt;
      Mt > S ? gt = 1 : w === S ? gt = 0 : gt = (w - Mt) / (w - S), q = A - (A - v) * gt, Zt = x - (x - M) * gt, N = T - (T - O) * gt, B = P - (P - D) * gt;
    }
    let bt;
    Mt < y ? bt = 0 : Mt > S ? bt = 1 : bt = (y - Mt) / (y - S), De = g - (g - v) * bt, Is = _ - (_ - M) * bt, cn = E - (E - O) * bt, Ms = C - (C - D) * bt;
    const Tr = Math.round(Math.min(q, De)), bi = Math.round(Math.max(q, De));
    let Ai = u * Mt + Tr * 4;
    for (let gt = Tr; gt <= bi; gt++)
      bt = (q - gt) / (q - De), bt < 0 ? bt = 0 : bt > 1 && (bt = 1), c[Ai++] = Zt - (Zt - Is) * bt | 0, c[Ai++] = N - (N - cn) * bt | 0, c[Ai++] = B - (B - Ms) * bt | 0, c[Ai++] = 255;
  }
}
function Mg(d, t, e) {
  const s = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (r = 0; r < l; r++) {
        let c = r * o;
        for (let u = 0; u < h; u++, c++)
          Ec(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), Ec(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = s.length; r < a; r += 3)
        Ec(d, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class kg extends Zd {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), g = h / u, y = c / p, A = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / g,
      scaleY: 1 / y
    }, w = u + 2 * 2, v = p + 2 * 2, S = s.getCanvas("mesh", w, v), _ = S.context, E = _.createImageData(u, p);
    if (e) {
      const x = E.data;
      for (let T = 0, P = x.length; T < P; T += 4)
        x[T] = e[0], x[T + 1] = e[1], x[T + 2] = e[2], x[T + 3] = 255;
    }
    for (const x of this._figures)
      Mg(E, x, A);
    return _.putImageData(E, 2, 2), {
      canvas: S.canvas,
      offsetX: o - 2 * g,
      offsetY: l - 2 * y,
      scaleX: g,
      scaleY: y
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, s, i) {
    Jc(t, this._bbox);
    const r = new Float32Array(2);
    if (i === Ut.SHADING)
      $.singularValueDecompose2dScale(pt(t), r);
    else if (this.matrix) {
      $.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      $.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else
      $.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, i === Ut.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Ut.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class Lg extends Zd {
  getPattern() {
    return "hotpink";
  }
}
function Dg(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new Ig(d);
    case "Mesh":
      return new kg(d);
    case "Dummy":
      return new Lg();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const Au = {
  COLORED: 1,
  UNCOLORED: 2
}, tc = class tc {
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
    l = Math.abs(l), h = Math.abs(h), fc("TilingType: " + r);
    const c = e[0], u = e[1], p = e[2], g = e[3], y = p - c, A = g - u, w = new Float32Array(2);
    $.singularValueDecompose2dScale(this.matrix, w);
    const [v, S] = w;
    $.singularValueDecompose2dScale(this.baseTransform, w);
    const _ = v * w[0], E = S * w[1];
    let C = y, x = A, T = !1, P = !1;
    const M = Math.ceil(l * _), O = Math.ceil(h * E), D = Math.ceil(y * _), tt = Math.ceil(A * E);
    M >= D ? C = l : T = !0, O >= tt ? x = h : P = !0;
    const st = this.getSizeAndScale(C, this.ctx.canvas.width, _), q = this.getSizeAndScale(x, this.ctx.canvas.height, E), Zt = t.cachedCanvases.getCanvas("pattern", st.size, q.size), N = Zt.context, B = o.createCanvasGraphics(N);
    if (B.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(B, i, a), N.translate(-st.scale * c, -q.scale * u), B.transform(st.scale, 0, 0, q.scale, 0, 0), N.save(), this.clipBbox(B, c, u, p, g), B.baseTransform = pt(B.ctx), B.executeOperatorList(s), B.endDrawing(), N.restore(), T || P) {
      const De = Zt.canvas;
      T && (C = l), P && (x = h);
      const Is = this.getSizeAndScale(C, this.ctx.canvas.width, _), cn = this.getSizeAndScale(x, this.ctx.canvas.height, E), Ms = Is.size, Mt = cn.size, bt = t.cachedCanvases.getCanvas("pattern-workaround", Ms, Mt), Tr = bt.context, bi = T ? Math.floor(y / l) : 0, Ai = P ? Math.floor(A / h) : 0;
      for (let gt = 0; gt <= bi; gt++)
        for (let ja = 0; ja <= Ai; ja++)
          Tr.drawImage(De, Ms * gt, Mt * ja, Ms, Mt, 0, 0, Ms, Mt);
      return {
        canvas: bt.canvas,
        scaleX: Is.scale,
        scaleY: cn.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: Zt.canvas,
      scaleX: st.scale,
      scaleY: q.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(tc.MAX_PATTERN_SIZE, e);
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
      case Au.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        i.fillStyle = r.fillColor = a, i.strokeStyle = r.strokeColor = o;
        break;
      case Au.UNCOLORED:
        i.fillStyle = i.strokeStyle = s, r.fillColor = r.strokeColor = s;
        break;
      default:
        throw new Zp(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, s, i) {
    let r = s;
    i !== Ut.SHADING && (r = $.transform(r, e.baseTransform), this.matrix && (r = $.transform(r, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(r);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
R(tc, "MAX_PATTERN_SIZE", 3e3);
let Zc = tc;
function Fg({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = Wt.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], c = s >> 3, u = s & 7, p = d.length;
  e = new Uint32Array(e.buffer);
  let g = 0;
  for (let y = 0; y < i; y++) {
    for (const w = t + c; t < w; t++) {
      const v = t < p ? d[t] : 255;
      e[g++] = v & 128 ? h : l, e[g++] = v & 64 ? h : l, e[g++] = v & 32 ? h : l, e[g++] = v & 16 ? h : l, e[g++] = v & 8 ? h : l, e[g++] = v & 4 ? h : l, e[g++] = v & 2 ? h : l, e[g++] = v & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const A = t < p ? d[t++] : 255;
    for (let w = 0; w < u; w++)
      e[g++] = A & 1 << 7 - w ? h : l;
  }
  return {
    srcPos: t,
    destPos: g
  };
}
const yu = 16, wu = 100, Ng = 15, vu = 10, ge = 16, Cc = new DOMMatrix(), Me = new Float32Array(2), Fr = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function Og(d, t) {
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
class Bg {
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
function sh(d, t, e, s, i, r, a, o, l, h) {
  const [c, u, p, g, y, A] = pt(d);
  if (u === 0 && p === 0) {
    const S = a * c + y, _ = Math.round(S), E = o * g + A, C = Math.round(E), x = (a + l) * c + y, T = Math.abs(Math.round(x) - _) || 1, P = (o + h) * g + A, M = Math.abs(Math.round(P) - C) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(g), _, C), d.drawImage(t, e, s, i, r, 0, 0, T, M), d.setTransform(c, u, p, g, y, A), [T, M];
  }
  if (c === 0 && g === 0) {
    const S = o * p + y, _ = Math.round(S), E = a * u + A, C = Math.round(E), x = (o + h) * p + y, T = Math.abs(Math.round(x) - _) || 1, P = (a + l) * u + A, M = Math.abs(Math.round(P) - C) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(p), 0, _, C), d.drawImage(t, e, s, i, r, 0, 0, M, T), d.setTransform(c, u, p, g, y, A), [M, T];
  }
  d.drawImage(t, e, s, i, r, a, o, l, h);
  const w = Math.hypot(c, u), v = Math.hypot(p, g);
  return [w * l, v * h];
}
class _u {
  constructor(t, e) {
    R(this, "alphaIsShape", !1);
    R(this, "fontSize", 0);
    R(this, "fontSizeScale", 1);
    R(this, "textMatrix", null);
    R(this, "textMatrixScale", 1);
    R(this, "fontMatrix", Rc);
    R(this, "leading", 0);
    R(this, "x", 0);
    R(this, "y", 0);
    R(this, "lineX", 0);
    R(this, "lineY", 0);
    R(this, "charSpacing", 0);
    R(this, "wordSpacing", 0);
    R(this, "textHScale", 1);
    R(this, "textRenderingMode", qt.FILL);
    R(this, "textRise", 0);
    R(this, "fillColor", "#000000");
    R(this, "strokeColor", "#000000");
    R(this, "patternFill", !1);
    R(this, "patternStroke", !1);
    R(this, "fillAlpha", 1);
    R(this, "strokeAlpha", 1);
    R(this, "lineWidth", 1);
    R(this, "activeSMask", null);
    R(this, "transferMaps", "none");
    this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = Fr.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = Ut.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === Ut.STROKE) {
      e || rt("Stroke bounding box must include transform."), $.singularValueDecompose2dScale(e, Me);
      const i = Me[0] * this.lineWidth / 2, r = Me[1] * this.lineWidth / 2;
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
    this.clipBox.set(t, 0), this.minMax.set(Fr, 0);
  }
  getClippedPathBoundingBox(t = Ut.FILL, e = null) {
    return $.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Su(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ge, r = (e - i) / ge, a = i === 0 ? r : r + 1, o = d.createImageData(s, ge);
  let l = 0, h;
  const c = t.data, u = o.data;
  let p, g, y, A;
  if (t.kind === ah.GRAYSCALE_1BPP) {
    const w = c.byteLength, v = new Uint32Array(u.buffer, 0, u.byteLength >> 2), S = v.length, _ = s + 7 >> 3, E = 4294967295, C = Wt.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (y = p < r ? ge : i, h = 0, g = 0; g < y; g++) {
        const x = w - l;
        let T = 0;
        const P = x > _ ? s : x * 8 - 7, M = P & -8;
        let O = 0, D = 0;
        for (; T < M; T += 8)
          D = c[l++], v[h++] = D & 128 ? E : C, v[h++] = D & 64 ? E : C, v[h++] = D & 32 ? E : C, v[h++] = D & 16 ? E : C, v[h++] = D & 8 ? E : C, v[h++] = D & 4 ? E : C, v[h++] = D & 2 ? E : C, v[h++] = D & 1 ? E : C;
        for (; T < P; T++)
          O === 0 && (D = c[l++], O = 128), v[h++] = D & O ? E : C, O >>= 1;
      }
      for (; h < S; )
        v[h++] = 0;
      d.putImageData(o, 0, p * ge);
    }
  } else if (t.kind === ah.RGBA_32BPP) {
    for (g = 0, A = s * ge * 4, p = 0; p < r; p++)
      u.set(c.subarray(l, l + A)), l += A, d.putImageData(o, 0, g), g += ge;
    p < a && (A = s * i * 4, u.set(c.subarray(l, l + A)), d.putImageData(o, 0, g));
  } else if (t.kind === ah.RGB_24BPP)
    for (y = ge, A = s * y, p = 0; p < a; p++) {
      for (p >= r && (y = i, A = s * y), h = 0, g = A; g--; )
        u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
      d.putImageData(o, 0, p * ge);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Eu(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ge, r = (e - i) / ge, a = i === 0 ? r : r + 1, o = d.createImageData(s, ge);
  let l = 0;
  const h = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < r ? ge : i;
    ({
      srcPos: l
    } = Fg({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), d.putImageData(o, 0, u * ge);
  }
}
function Wa(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function ih(d) {
  d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0);
  const {
    filter: t
  } = d;
  t !== "none" && t !== "" && (d.filter = "none");
}
function Cu(d, t) {
  if (t)
    return !0;
  $.singularValueDecompose2dScale(d, Me);
  const e = Math.fround(Rs.pixelRatio * an.PDF_TO_CSS_UNITS);
  return Me[0] <= e && Me[1] <= e;
}
const Hg = ["butt", "round", "square"], $g = ["miter", "round", "bevel"], Gg = {}, xu = {};
var ls, td, ed, sd;
const ru = class ru {
  constructor(t, e, s, i, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h) {
    m(this, ls);
    this.ctx = t, this.current = new _u(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Bg(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
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
    this.ctx.save(), ih(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = pt(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const r = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const l = r.length;
    if (l === o)
      return o;
    const h = l - o > vu && typeof s == "function", c = h ? Date.now() + Ng : 0;
    let u = 0;
    const p = this.commonObjs, g = this.objs;
    let y;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (y = a[o], y !== Oh.dependency)
        this[y].apply(this, r[o]);
      else
        for (const A of r[o]) {
          const w = A.startsWith("g_") ? p : g;
          if (!w.has(A))
            return w.get(A, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++u > vu) {
        if (Date.now() > c)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    b(this, ls, td).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, ls, ed).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, u;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let p = o, g = l;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / g), c = this.cachedCanvases.getCanvas(h, p, g), u = c.context, u.clearRect(0, 0, p, g), u.drawImage(t, 0, 0, o, l, 0, 0, p, g), t = c.canvas, o = p, l = g, h = h === "prescale1" ? "prescale2" : "prescale1";
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
    let l, h, c, u;
    if ((t.bitmap || t.data) && t.count > 1) {
      const M = t.bitmap || t.data.buffer;
      h = JSON.stringify(a ? o : [o.slice(0, 4), r]), l = this._cachedBitmapsMap.get(M), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(M, l));
      const O = l.get(h);
      if (O && !a) {
        const D = Math.round(Math.min(o[0], o[2]) + o[4]), tt = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: O,
          offsetX: D,
          offsetY: tt
        };
      }
      c = O;
    }
    c || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), Eu(u.context, t));
    let p = $.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    p = $.transform(p, [1, 0, 0, 1, 0, -i]);
    const g = Fr.slice();
    $.axialAlignedBoundingBox([0, 0, s, i], p, g);
    const [y, A, w, v] = g, S = Math.round(w - y) || 1, _ = Math.round(v - A) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", S, _), C = E.context, x = y, T = A;
    C.translate(-x, -T), C.transform(...p), c || (c = this._scaleImage(u.canvas, hs(C)), c = c.img, l && a && l.set(h, c)), C.imageSmoothingEnabled = Cu(pt(C), t.interpolate), sh(C, c, 0, 0, c.width, c.height, 0, 0, s, i), C.globalCompositeOperation = "source-in";
    const P = $.transform(hs(C), [1, 0, 0, 1, -x, -T]);
    return C.fillStyle = a ? r.getPattern(e, this, P, Ut.FILL) : r, C.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(x),
      offsetY: Math.round(T)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = Hg[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = $g[t];
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
    r.setTransform(this.suspendedCtx.getTransform()), Wa(this.suspendedCtx, r), Og(r, this.suspendedCtx), this.setGState([["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Wa(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
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
    let p = t.canvas, g = l - c, y = h - u;
    if (a)
      if (g < 0 || y < 0 || g + s > p.width || y + i > p.height) {
        const w = this.cachedCanvases.getCanvas("maskExtension", s, i), v = w.context;
        v.drawImage(p, -g, -y), v.globalCompositeOperation = "destination-atop", v.fillStyle = a, v.fillRect(0, 0, s, i), v.globalCompositeOperation = "source-over", p = w.canvas, g = y = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const w = new Path2D();
        w.rect(g, y, s, i), t.clip(w), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(g, y, s, i), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const A = new Path2D();
    A.rect(l, h, s, i), e.clip(A), e.globalCompositeOperation = "destination-in", e.drawImage(p, g, y, s, i, l, h, s, i), e.restore();
  }
  save() {
    this.inSMaskMode && Wa(this.ctx, this.suspendedCtx), this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    if (this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Wa(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
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
          case Zl.moveTo:
            r.moveTo(i[a++], i[a++]);
            break;
          case Zl.lineTo:
            r.lineTo(i[a++], i[a++]);
            break;
          case Zl.curveTo:
            r.bezierCurveTo(i[a++], i[a++], i[a++], i[a++], i[a++], i[a++]);
            break;
          case Zl.closePath:
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
        if (s.save(), s.strokeStyle = i.getPattern(s, this, hs(s), Ut.STROKE), r) {
          const a = new Path2D();
          a.addPath(t, s.getTransform().invertSelf().multiplySelf(r)), t = a;
        }
        this.rescaleAndStroke(t, !1), s.restore();
      } else
        this.rescaleAndStroke(t, !0);
    e && this.consumePath(t, this.current.getClippedPathBoundingBox(Ut.STROKE, pt(this.ctx))), s.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t) {
    this.stroke(t);
  }
  fill(t, e = !0) {
    const s = this.ctx, i = this.current.fillColor, r = this.current.patternFill;
    let a = !1;
    if (r) {
      const l = i.isModifyingCurrentTransform() ? s.getTransform() : null;
      if (s.save(), s.fillStyle = i.getPattern(s, this, hs(s), Ut.FILL), l) {
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
    this.pendingClip = Gg;
  }
  eoClip() {
    this.pendingClip = xu;
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
      s.addPath(h, new DOMMatrix(r).preMultiplySelf(i).translate(a, o).scale(l, -l));
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
    if (i.fontMatrix = s.fontMatrix || Rc, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && U("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const r = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${r}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < yu ? h = yu : e > wu && (h = wu), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
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
    const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, u = h & qt.FILL_STROKE_MASK, p = !!(h & qt.ADD_TO_PATH_FLAG), g = o.patternFill && !l.missingFile, y = o.patternStroke && !l.missingFile;
    let A;
    if ((l.disableFontFace || p || g || y) && (A = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g || y) {
      a.save(), a.translate(e, s), a.scale(c, -c);
      let w;
      if ((u === qt.FILL || u === qt.FILL_STROKE) && (i ? (w = a.getTransform(), a.setTransform(...i), a.fill(b(this, ls, sd).call(this, A, w, i))) : a.fill(A)), u === qt.STROKE || u === qt.FILL_STROKE)
        if (r) {
          w || (w = a.getTransform()), a.setTransform(...r);
          const {
            a: v,
            b: S,
            c: _,
            d: E
          } = w, C = $.inverseTransform(r), x = $.transform([v, S, _, E, 0, 0], C);
          $.singularValueDecompose2dScale(x, Me), a.lineWidth *= Math.max(Me[0], Me[1]) / c, a.stroke(b(this, ls, sd).call(this, A, w, r));
        } else
          a.lineWidth /= c, a.stroke(A);
      a.restore();
    } else
      (u === qt.FILL || u === qt.FILL_STROKE) && a.fillText(t, e, s), (u === qt.STROKE || u === qt.FILL_STROKE) && a.strokeText(t, e, s);
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
    return X(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const r = this.ctx, a = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, c = e.textHScale * h, u = t.length, p = s.vertical, g = p ? 1 : -1, y = s.defaultVMetrics, A = i * e.fontMatrix[0], w = e.textRenderingMode === qt.FILL && !s.disableFontFace && !e.patternFill;
    r.save(), e.textMatrix && r.transform(...e.textMatrix), r.translate(e.x, e.y + e.textRise), h > 0 ? r.scale(c, -1) : r.scale(c, 1);
    let v, S;
    if (e.patternFill) {
      r.save();
      const T = e.fillColor.getPattern(r, this, hs(r), Ut.FILL);
      v = pt(r), r.restore(), r.fillStyle = T;
    }
    if (e.patternStroke) {
      r.save();
      const T = e.strokeColor.getPattern(r, this, hs(r), Ut.STROKE);
      S = pt(r), r.restore(), r.strokeStyle = T;
    }
    let _ = e.lineWidth;
    const E = e.textMatrixScale;
    if (E === 0 || _ === 0) {
      const T = e.textRenderingMode & qt.FILL_STROKE_MASK;
      (T === qt.STROKE || T === qt.FILL_STROKE) && (_ = this.getSinglePixelWidth());
    } else
      _ /= E;
    if (a !== 1 && (r.scale(a, a), _ /= a), r.lineWidth = _, s.isInvalidPDFjsFont) {
      const T = [];
      let P = 0;
      for (const M of t)
        T.push(M.unicode), P += M.width;
      r.fillText(T.join(""), 0, 0), e.x += P * A * c, r.restore(), this.compose();
      return;
    }
    let C = 0, x;
    for (x = 0; x < u; ++x) {
      const T = t[x];
      if (typeof T == "number") {
        C += g * T * i / 1e3;
        continue;
      }
      let P = !1;
      const M = (T.isSpace ? l : 0) + o, O = T.fontChar, D = T.accent;
      let tt, st, q = T.width;
      if (p) {
        const N = T.vmetric || y, B = -(T.vmetric ? N[1] : q * 0.5) * A, De = N[2] * A;
        q = N ? -N[0] : q, tt = B / a, st = (C + De) / a;
      } else
        tt = C / a, st = 0;
      if (s.remeasure && q > 0) {
        const N = r.measureText(O).width * 1e3 / i * a;
        if (q < N && this.isFontSubpixelAAEnabled) {
          const B = q / N;
          P = !0, r.save(), r.scale(B, 1), tt /= B;
        } else q !== N && (tt += (q - N) / 2e3 * i / a);
      }
      if (this.contentVisible && (T.isInFont || s.missingFile)) {
        if (w && !D)
          r.fillText(O, tt, st);
        else if (this.paintChar(O, tt, st, v, S), D) {
          const N = tt + i * D.offset.x / a, B = st - i * D.offset.y / a;
          this.paintChar(D.fontChar, N, B, v, S);
        }
      }
      const Zt = p ? q * A - M * h : q * A + M * h;
      C += Zt, P && r.restore();
    }
    p ? e.y -= C : e.x += C * c, r.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, r = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, u = s.fontMatrix || Rc, p = t.length, g = s.textRenderingMode === qt.INVISIBLE;
    let y, A, w, v;
    if (!(g || r === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), s.textMatrix && e.transform(...s.textMatrix), e.translate(s.x, s.y + s.textRise), e.scale(c, a), y = 0; y < p; ++y) {
        if (A = t[y], typeof A == "number") {
          v = o * A * r / 1e3, this.ctx.translate(v, 0), s.x += v * c;
          continue;
        }
        const S = (A.isSpace ? h : 0) + l, _ = i.charProcOperatorList[A.operatorListId];
        _ ? this.contentVisible && (this.save(), e.scale(r, r), e.transform(...u), this.executeOperatorList(_), this.restore()) : U(`Type3 character "${A.operatorListId}" is not available.`);
        const E = [A.width, 0];
        $.applyTransform(E, u), w = E[0] * r + S, e.translate(w, 0), s.x += w * c;
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
        createCanvasGraphics: (r) => new ru(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new Zc(t, this.ctx, i, s);
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
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = Dg(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, hs(e), Ut.SHADING);
    const i = hs(e);
    if (i) {
      const {
        width: r,
        height: a
      } = e.canvas, o = Fr.slice();
      $.axialAlignedBoundingBox([0, 0, r, a], i, o);
      const [l, h, c, u] = o;
      this.ctx.fillRect(l, h, c - l, u - h);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    rt("Should not call beginInlineImage");
  }
  beginImageData() {
    rt("Should not call beginImageData");
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
    t.isolated || fc("TODO: Support non-isolated groups."), t.knockout && U("Knockout groups not supported.");
    const s = pt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = Fr.slice();
    $.axialAlignedBoundingBox(t.bbox, pt(e), i);
    const r = [0, 0, e.canvas.width, e.canvas.height];
    i = $.intersect(i, r) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - a, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(c, l, h), p = u.context;
    p.translate(-a, -o), p.transform(...s);
    let g = new Path2D();
    const [y, A, w, v] = t.bbox;
    if (g.rect(y, A, w - y, v - A), t.matrix) {
      const S = new Path2D();
      S.addPath(g, new DOMMatrix(t.matrix)), g = S;
    }
    p.clip(g), t.smask ? this.smaskStack.push({
      canvas: u.canvas,
      context: p,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), Wa(e, p), this.ctx = p, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
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
      const r = Fr.slice();
      $.axialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i, r), this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(r);
    }
  }
  beginAnnotation(t, e, s, i, r) {
    if (b(this, ls, td).call(this), ih(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (r && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o, $.singularValueDecompose2dScale(pt(this.ctx), Me);
        const {
          viewportScale: l
        } = this, h = Math.ceil(a * this.outputScaleX * l), c = Math.ceil(o * this.outputScaleY * l);
        this.annotationCanvas = this.canvasFactory.create(h, c);
        const {
          canvas: u,
          context: p
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, u), this.annotationCanvas.savedCtx = this.ctx, this.ctx = p, this.ctx.save(), this.ctx.setTransform(Me[0], 0, 0, -Me[1], 0, o * Me[1]), ih(this.ctx);
      } else {
        ih(this.ctx), this.endPath();
        const l = new Path2D();
        l.rect(e[0], e[1], a, o), this.ctx.clip(l);
      }
    }
    this.current = new _u(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), b(this, ls, ed).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
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
    for (let c = 0, u = a.length; c < u; c += 2) {
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
      } = r, c = this.cachedCanvases.getCanvas("maskCanvas", o, l), u = c.context;
      u.save();
      const p = this.getObject(a, r);
      Eu(u, p), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, hs(e), Ut.FILL) : s, u.fillRect(0, 0, o, l), u.restore(), e.save(), e.transform(...h), e.scale(1, -1), sh(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
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
      Su(h, t), a = this.applyTransferMapsToCanvas(h);
    }
    const o = this._scaleImage(a, hs(i));
    i.imageSmoothingEnabled = Cu(pt(i), t.interpolate), sh(i, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -s, e, s), this.compose(), this.restore();
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
      Su(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const r of e)
      s.save(), s.transform(...r.transform), s.scale(1, -1), sh(s, i, r.x, r.y, r.w, r.h, 0, -1, 1, 1), s.restore();
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
    this.pendingClip && (s || (this.pendingClip === xu ? i.clip(t, "evenodd") : i.clip(t)), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox);
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
    e && s.save(), s.scale(r, a), Cc.a = 1 / r, Cc.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, Cc), o.length > 0) {
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
ls = new WeakSet(), td = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, ed = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, sd = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let Br = ru;
for (const d in Oh)
  Br.prototype[d] !== void 0 && (Br.prototype[Oh[d]] = Br.prototype[d]);
var jo, Wo;
class ui {
  static get workerPort() {
    return n(this, jo);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    f(this, jo, t);
  }
  static get workerSrc() {
    return n(this, Wo);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    f(this, Wo, t);
  }
}
jo = new WeakMap(), Wo = new WeakMap(), m(ui, jo, null), m(ui, Wo, "");
var ia, qo;
class zg {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, ia);
    m(this, qo);
    f(this, ia, t), f(this, qo, e);
  }
  getRaw() {
    return n(this, qo);
  }
  get(t) {
    return n(this, ia).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, ia).entries();
  }
}
ia = new WeakMap(), qo = new WeakMap();
const kr = Symbol("INTERNAL");
var Xo, Yo, Ko, na;
class Ug {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: r
  }) {
    m(this, Xo, !1);
    m(this, Yo, !1);
    m(this, Ko, !1);
    m(this, na, !0);
    f(this, Xo, !!(t & Ie.DISPLAY)), f(this, Yo, !!(t & Ie.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, Ko))
      return n(this, na);
    if (!n(this, na))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, Xo) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, Yo) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== kr && rt("Internal method `_setVisible` called."), f(this, Ko, s), f(this, na, e);
  }
}
Xo = new WeakMap(), Yo = new WeakMap(), Ko = new WeakMap(), na = new WeakMap();
var Ni, it, ra, aa, Qo, id;
class Vg {
  constructor(t, e = Ie.DISPLAY) {
    m(this, Qo);
    m(this, Ni, null);
    m(this, it, /* @__PURE__ */ new Map());
    m(this, ra, null);
    m(this, aa, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, f(this, aa, t.order);
      for (const s of t.groups)
        n(this, it).set(s.id, new Ug(e, s));
      if (t.baseState === "OFF")
        for (const s of n(this, it).values())
          s._setVisible(kr, !1);
      for (const s of t.on)
        n(this, it).get(s)._setVisible(kr, !0);
      for (const s of t.off)
        n(this, it).get(s)._setVisible(kr, !1);
      f(this, ra, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, it).size === 0)
      return !0;
    if (!t)
      return fc("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, it).has(t.id) ? n(this, it).get(t.id).visible : (U(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, Qo, id).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, it).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (n(this, it).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, it).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (!n(this, it).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, it).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (!n(this, it).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, it).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (n(this, it).get(e).visible)
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
    const i = n(this, it).get(t);
    if (!i) {
      U(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, it).get(o)) == null || r._setVisible(kr, !1, !0));
    i._setVisible(kr, !!e, !0), f(this, Ni, null);
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
      const r = n(this, it).get(i);
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
    f(this, Ni, null);
  }
  get hasInitialVisibility() {
    return n(this, ra) === null || this.getHash() === n(this, ra);
  }
  getOrder() {
    return n(this, it).size ? n(this, aa) ? n(this, aa).slice() : [...n(this, it).keys()] : null;
  }
  getGroup(t) {
    return n(this, it).get(t) || null;
  }
  getHash() {
    if (n(this, Ni) !== null)
      return n(this, Ni);
    const t = new gf();
    for (const [e, s] of n(this, it))
      t.update(`${e}:${s.visible}`);
    return f(this, Ni, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, it).entries();
  }
}
Ni = new WeakMap(), it = new WeakMap(), ra = new WeakMap(), aa = new WeakMap(), Qo = new WeakSet(), id = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = b(this, Qo, id).call(this, r);
    else if (n(this, it).has(r))
      a = n(this, it).get(r).visible;
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
class jg {
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
    return this._queuedChunks = null, new Wg(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new qg(this, t, e);
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
class Wg {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = Xd(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
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
class qg {
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
function Xg(d) {
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
        }), g = Wl(u);
        u = p.decode(g), t = !1;
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
    const g = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = g.exec(c)) !== null; ) {
      let [, A, w, v] = p;
      if (A = parseInt(A, 10), A in u) {
        if (A === 0)
          break;
        continue;
      }
      u[A] = [w, v];
    }
    const y = [];
    for (let A = 0; A < u.length && A in u; ++A) {
      let [w, v] = u[A];
      v = o(v), w && (v = unescape(v), A === 0 && (v = l(v))), y.push(v);
    }
    return y.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const u = c.slice(1).split('\\"');
      for (let p = 0; p < u.length; ++p) {
        const g = u[p].indexOf('"');
        g !== -1 && (u[p] = u[p].slice(0, g), u.length = p + 1), u[p] = u[p].replaceAll(/\\(.)/g, "$1");
      }
      c = u.join('"');
    }
    return c;
  }
  function l(c) {
    const u = c.indexOf("'");
    if (u === -1)
      return c;
    const p = c.slice(0, u), y = c.slice(u + 1).replace(/^[^']*'/, "");
    return i(p, y);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, p, g, y) {
      if (g === "q" || g === "Q")
        return y = y.replaceAll("_", " "), y = y.replaceAll(/=([0-9a-fA-F]{2})/g, function(A, w) {
          return String.fromCharCode(parseInt(w, 16));
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
function Tf(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function gc(d) {
  var t;
  return ((t = URL.parse(d)) == null ? void 0 : t.origin) ?? null;
}
function Rf({
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
function Pf(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = Xg(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Xd(e))
      return e;
  }
  return null;
}
function Kl(d, t) {
  return new Bh(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d, d === 404 || d === 0 && t.startsWith("file:"));
}
function If(d) {
  return d === 200 || d === 206;
}
function Mf(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function kf(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (U(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class Yg {
  constructor(t) {
    R(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Tf(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Et(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Kg(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Qg(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Kg {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Mf(s, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = gc(r.url), !If(r.status))
        throw Kl(r.status, i);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = Rf({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Pf(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new rn("Streaming is disabled."));
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
      value: kf(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class Qg {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, Mf(r, this._withCredentials, this._abortController)).then((o) => {
      const l = gc(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!If(o.status))
        throw Kl(o.status, a);
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
      value: kf(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const xc = 200, Tc = 206;
function Jg(d) {
  const t = d.response;
  return typeof t != "string" ? t : Wl(t).buffer;
}
class Zg {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    R(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Tf(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Tc) : i.expectedStatus = xc, e.responseType = "arraybuffer", Et(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
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
    const r = i.status || xc;
    if (!(r === xc && s.expectedStatus === Tc) && r !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = Jg(i);
    if (r === Tc) {
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
class tm {
  constructor(t) {
    this._source = t, this._manager = new Zg(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Et(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new em(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new sm(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class em {
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
    this._manager._responseOrigin = gc(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = Rf({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Pf(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
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
    this._storedError = Kl(t, this._url), this._headersCapability.reject(this._storedError);
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
class sm {
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
    const t = gc((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
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
    this._storedError ?? (this._storedError = Kl(t, this._url));
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
const im = /^[a-z][a-z0-9\-+.]+:/i;
function nm(d) {
  if (im.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class rm {
  constructor(t) {
    this.source = t, this.url = nm(t.url), Et(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Et(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new am(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new om(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class am {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = Kl(0, this._url.href)), this._storedError = i, this._headersCapability.reject(i);
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new rn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class om {
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
const qa = Symbol("INITIAL_DATA");
var we, Jo, nd;
class Lf {
  constructor() {
    m(this, Jo);
    m(this, we, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = b(this, Jo, nd).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, we)[t];
    if (!s || s.data === qa)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, we)[t];
    return !!e && e.data !== qa;
  }
  delete(t) {
    const e = n(this, we)[t];
    return !e || e.data === qa ? !1 : (delete n(this, we)[t], !0);
  }
  resolve(t, e = null) {
    const s = b(this, Jo, nd).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, we)) {
      const {
        data: s
      } = n(this, we)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    f(this, we, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, we)) {
      const {
        data: e
      } = n(this, we)[t];
      e !== qa && (yield [t, e]);
    }
  }
}
we = new WeakMap(), Jo = new WeakSet(), nd = function(t) {
  var e;
  return (e = n(this, we))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: qa
  });
};
const lm = 1e5, Tu = 30;
var Mu, Oi, fe, Zo, tl, Hn, Ys, el, sl, $n, oa, la, Bi, ha, il, ca, Gn, nl, rl, da, zn, al, Hi, ua, mi, Df, Ff, rd, Le, bh, ad, Nf, Of;
const xt = class xt {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    m(this, mi);
    m(this, Oi, Promise.withResolvers());
    m(this, fe, null);
    m(this, Zo, !1);
    m(this, tl, !!((Mu = globalThis.FontInspector) != null && Mu.enabled));
    m(this, Hn, null);
    m(this, Ys, null);
    m(this, el, 0);
    m(this, sl, 0);
    m(this, $n, null);
    m(this, oa, null);
    m(this, la, 0);
    m(this, Bi, 0);
    m(this, ha, /* @__PURE__ */ Object.create(null));
    m(this, il, []);
    m(this, ca, null);
    m(this, Gn, []);
    m(this, nl, /* @__PURE__ */ new WeakMap());
    m(this, rl, null);
    var l;
    if (t instanceof ReadableStream)
      f(this, ca, t);
    else if (typeof t == "object")
      f(this, ca, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    f(this, fe, f(this, oa, e)), f(this, Bi, s.scale * Rs.pixelRatio), f(this, la, s.rotation), f(this, Ys, {
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
    f(this, rl, [1, 0, 0, -1, -a, o + r]), f(this, sl, i), f(this, el, r), b(l = xt, Le, Nf).call(l), _r(e, s), n(this, Oi).promise.finally(() => {
      n(xt, ua).delete(this), f(this, Ys, null), f(this, ha, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = Wt.platform;
    return X(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, $n).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          n(this, Oi).resolve();
          return;
        }
        n(this, Hn) ?? f(this, Hn, e.lang), Object.assign(n(this, ha), e.styles), b(this, mi, Df).call(this, e.items), t();
      }, n(this, Oi).reject);
    };
    return f(this, $n, n(this, ca).getReader()), n(xt, ua).add(this), t(), n(this, Oi).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * Rs.pixelRatio, i = t.rotation;
    if (i !== n(this, la) && (e == null || e(), f(this, la, i), _r(n(this, oa), {
      rotation: i
    })), s !== n(this, Bi)) {
      e == null || e(), f(this, Bi, s);
      const a = {
        div: null,
        properties: null,
        ctx: b(r = xt, Le, bh).call(r, n(this, Hn))
      };
      for (const o of n(this, Gn))
        a.properties = n(this, nl).get(o), a.div = o, b(this, mi, rd).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new rn("TextLayer task cancelled.");
    (e = n(this, $n)) == null || e.cancel(t).catch(() => {
    }), f(this, $n, null), n(this, Oi).reject(t);
  }
  get textDivs() {
    return n(this, Gn);
  }
  get textContentItemsStr() {
    return n(this, il);
  }
  static cleanup() {
    if (!(n(this, ua).size > 0)) {
      n(this, da).clear();
      for (const {
        canvas: t
      } of n(this, zn).values())
        t.remove();
      n(this, zn).clear();
    }
  }
};
Oi = new WeakMap(), fe = new WeakMap(), Zo = new WeakMap(), tl = new WeakMap(), Hn = new WeakMap(), Ys = new WeakMap(), el = new WeakMap(), sl = new WeakMap(), $n = new WeakMap(), oa = new WeakMap(), la = new WeakMap(), Bi = new WeakMap(), ha = new WeakMap(), il = new WeakMap(), ca = new WeakMap(), Gn = new WeakMap(), nl = new WeakMap(), rl = new WeakMap(), da = new WeakMap(), zn = new WeakMap(), al = new WeakMap(), Hi = new WeakMap(), ua = new WeakMap(), mi = new WeakSet(), Df = function(t) {
  var i, r;
  if (n(this, Zo))
    return;
  (r = n(this, Ys)).ctx ?? (r.ctx = b(i = xt, Le, bh).call(i, n(this, Hn)));
  const e = n(this, Gn), s = n(this, il);
  for (const a of t) {
    if (e.length > lm) {
      U("Ignoring additional textDivs for performance reasons."), f(this, Zo, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, fe);
        f(this, fe, document.createElement("span")), n(this, fe).classList.add("markedContent"), a.id !== null && n(this, fe).setAttribute("id", `${a.id}`), o.append(n(this, fe));
      } else a.type === "endMarkedContent" && f(this, fe, n(this, fe).parentNode);
      continue;
    }
    s.push(a.str), b(this, mi, Ff).call(this, a);
  }
}, Ff = function(t) {
  var A;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, Gn).push(e);
  const i = $.transform(n(this, rl), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, ha)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, tl) && a.fontSubstitution || a.fontFamily;
  o = xt.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * b(A = xt, Le, Of).call(A, o, a, n(this, Hn));
  let c, u;
  r === 0 ? (c = i[4], u = i[5] - h) : (c = i[4] + h * Math.sin(r), u = i[5] - h * Math.cos(r));
  const p = "calc(var(--total-scale-factor) *", g = e.style;
  n(this, fe) === n(this, oa) ? (g.left = `${(100 * c / n(this, sl)).toFixed(2)}%`, g.top = `${(100 * u / n(this, el)).toFixed(2)}%`) : (g.left = `${p}${c.toFixed(2)}px)`, g.top = `${p}${u.toFixed(2)}px)`), g.fontSize = `${p}${(n(xt, Hi) * l).toFixed(2)}px)`, g.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, tl) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let y = !1;
  if (t.str.length > 1)
    y = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const w = Math.abs(t.transform[0]), v = Math.abs(t.transform[3]);
    w !== v && Math.max(w, v) / Math.min(w, v) > 1.5 && (y = !0);
  }
  if (y && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, nl).set(e, s), n(this, Ys).div = e, n(this, Ys).properties = s, b(this, mi, rd).call(this, n(this, Ys)), s.hasText && n(this, fe).append(e), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), n(this, fe).append(w);
  }
}, rd = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(xt, Hi) > 1 && (a = `scale(${1 / n(xt, Hi)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = r, {
      canvasWidth: h,
      fontSize: c
    } = s;
    b(o = xt, Le, ad).call(o, i, c * n(this, Bi), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * n(this, Bi) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, Le = new WeakSet(), bh = function(t = null) {
  let e = n(this, zn).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, zn).set(t, e), n(this, al).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, ad = function(t, e, s) {
  const i = n(this, al).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, Nf = function() {
  if (n(this, Hi) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), f(this, Hi, t.getBoundingClientRect().height), t.remove();
}, Of = function(t, e, s) {
  const i = n(this, da).get(t);
  if (i)
    return i;
  const r = b(this, Le, bh).call(this, s);
  r.canvas.width = r.canvas.height = Tu, b(this, Le, ad).call(this, r, Tu, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let h = 0.8;
  return o ? h = o / (o + l) : (Wt.platform.isFirefox && U("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, da).set(t, h), h;
}, m(xt, Le), m(xt, da, /* @__PURE__ */ new Map()), m(xt, zn, /* @__PURE__ */ new Map()), m(xt, al, /* @__PURE__ */ new WeakMap()), m(xt, Hi, null), m(xt, ua, /* @__PURE__ */ new Set());
let mo = xt;
class bo {
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
      else if (bo.shouldBuildText(o))
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
const hm = 100;
function cm(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new od(), {
    docId: e
  } = t, s = d.url ? Ag(d.url) : null, i = d.data ? yg(d.data) : null, r = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof Bf ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : 2 ** 16;
  let c = d.worker instanceof Ao ? d.worker : null;
  const u = d.verbosity, p = typeof d.docBaseUrl == "string" && !pc(d.docBaseUrl) ? d.docBaseUrl : null, g = th(d.cMapUrl), y = d.cMapPacked !== !1, A = d.CMapReaderFactory || (ae ? Tg : gu), w = th(d.iccUrl), v = th(d.standardFontDataUrl), S = d.StandardFontDataFactory || (ae ? Rg : mu), _ = th(d.wasmUrl), E = d.WasmFactory || (ae ? Pg : bu), C = d.stopAtErrors !== !0, x = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, T = d.isEvalSupported !== !1, P = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !ae, M = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !ae && (Wt.platform.isFirefox || !globalThis.chrome), O = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, D = typeof d.disableFontFace == "boolean" ? d.disableFontFace : ae, tt = d.fontExtraProperties === !0, st = d.enableXfa === !0, q = d.ownerDocument || globalThis.document, Zt = d.disableRange === !0, N = d.disableStream === !0, B = d.disableAutoFetch === !0, De = d.pdfBug === !0, Is = d.CanvasFactory || (ae ? xg : Sg), cn = d.FilterFactory || (ae ? Cg : Eg), Ms = d.enableHWA === !0, Mt = d.useWasm !== !1, bt = l ? l.length : d.length ?? NaN, Tr = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !ae && !D, bi = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : !!(A === gu && S === mu && E === bu && g && v && _ && Ka(g, document.baseURI) && Ka(v, document.baseURI) && Ka(_, document.baseURI)), Ai = null;
  Kp(u);
  const gt = {
    canvasFactory: new Is({
      ownerDocument: q,
      enableHWA: Ms
    }),
    filterFactory: new cn({
      docId: e,
      ownerDocument: q
    }),
    cMapReaderFactory: bi ? null : new A({
      baseUrl: g,
      isCompressed: y
    }),
    standardFontDataFactory: bi ? null : new S({
      baseUrl: v
    }),
    wasmFactory: bi ? null : new E({
      baseUrl: _
    })
  };
  c || (c = Ao.create({
    verbosity: u,
    port: ui.workerPort
  }), t._worker = c);
  const ja = {
    docId: e,
    apiVersion: "5.3.31",
    data: i,
    password: o,
    disableAutoFetch: B,
    rangeChunkSize: h,
    length: bt,
    docBaseUrl: p,
    enableXfa: st,
    evaluatorOptions: {
      maxImageSize: x,
      disableFontFace: D,
      ignoreErrors: C,
      isEvalSupported: T,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: M,
      canvasMaxAreaInBytes: O,
      fontExtraProperties: tt,
      useSystemFonts: Tr,
      useWasm: Mt,
      useWorkerFetch: bi,
      cMapUrl: g,
      iccUrl: w,
      standardFontDataUrl: v,
      wasmUrl: _
    }
  }, zp = {
    ownerDocument: q,
    pdfBug: De,
    styleElement: Ai,
    loadingParams: {
      disableAutoFetch: B,
      enableXfa: st
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const Up = c.messageHandler.sendWithPromise("GetDocRequest", ja, i ? [i.buffer] : null);
    let bc;
    if (l)
      bc = new jg(l, {
        disableRange: Zt,
        disableStream: N
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      const Ac = Ka(s) ? Yg : ae ? rm : tm;
      bc = new Ac({
        url: s,
        length: bt,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: Zt,
        disableStream: N
      });
    }
    return Up.then((Ac) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const lu = new eo(e, Ac, c.port), Vp = new fm(lu, t, bc, zp, gt);
      t._transport = Vp, lu.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
var ec;
const sc = class sc {
  constructor() {
    R(this, "_capability", Promise.withResolvers());
    R(this, "_transport", null);
    R(this, "_worker", null);
    R(this, "docId", `d${te(sc, ec)._++}`);
    R(this, "destroyed", !1);
    R(this, "onPassword", null);
    R(this, "onProgress", null);
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
ec = new WeakMap(), m(sc, ec, 0);
let od = sc;
var Un, ol, ll, hl, cl;
class Bf {
  constructor(t, e, s = !1, i = null) {
    m(this, Un, Promise.withResolvers());
    m(this, ol, []);
    m(this, ll, []);
    m(this, hl, []);
    m(this, cl, []);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i;
  }
  addRangeListener(t) {
    n(this, cl).push(t);
  }
  addProgressListener(t) {
    n(this, hl).push(t);
  }
  addProgressiveReadListener(t) {
    n(this, ll).push(t);
  }
  addProgressiveDoneListener(t) {
    n(this, ol).push(t);
  }
  onDataRange(t, e) {
    for (const s of n(this, cl))
      s(t, e);
  }
  onDataProgress(t, e) {
    n(this, Un).promise.then(() => {
      for (const s of n(this, hl))
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    n(this, Un).promise.then(() => {
      for (const e of n(this, ll))
        e(t);
    });
  }
  onDataProgressiveDone() {
    n(this, Un).promise.then(() => {
      for (const t of n(this, ol))
        t();
    });
  }
  transportReady() {
    n(this, Un).resolve();
  }
  requestDataRange(t, e) {
    rt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
Un = new WeakMap(), ol = new WeakMap(), ll = new WeakMap(), hl = new WeakMap(), cl = new WeakMap();
class dm {
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
    return X(this, "isPureXfa", !!this._transport._htmlForXfa);
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
var Ks, Vn, ao;
class um {
  constructor(t, e, s, i = !1) {
    m(this, Vn);
    m(this, Ks, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new uu() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Lf(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
    return new Xl({
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
    return X(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = wi.ENABLE,
    transform: r = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: c = null,
    isEditing: u = !1
  }) {
    var E, C;
    (E = this._stats) == null || E.time("Overall");
    const p = this._transport.getRenderingIntent(s, i, c, u), {
      renderingIntent: g,
      cacheKey: y
    } = p;
    f(this, Ks, !1), o || (o = this._transport.getOptionalContentConfig(g));
    let A = this._intentStates.get(y);
    A || (A = /* @__PURE__ */ Object.create(null), this._intentStates.set(y, A)), A.streamReaderCancelTimeout && (clearTimeout(A.streamReaderCancelTimeout), A.streamReaderCancelTimeout = null);
    const w = !!(g & Ie.PRINT);
    A.displayReadyCapability || (A.displayReadyCapability = Promise.withResolvers(), A.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (C = this._stats) == null || C.time("Page Request"), this._pumpOperatorList(p));
    const v = (x) => {
      var T;
      A.renderTasks.delete(S), w && f(this, Ks, !0), b(this, Vn, ao).call(this), x ? (S.capability.reject(x), this._abortOperatorList({
        intentState: A,
        reason: x instanceof Error ? x : new Error(x)
      })) : S.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (T = globalThis.Stats) != null && T.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, S = new ld({
      callback: v,
      params: {
        canvasContext: t,
        viewport: e,
        transform: r,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: l,
      operatorList: A.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !w,
      pdfBug: this._pdfBug,
      pageColors: h
    });
    (A.renderTasks || (A.renderTasks = /* @__PURE__ */ new Set())).add(S);
    const _ = S.task;
    return Promise.all([A.displayReadyCapability.promise, o]).then(([x, T]) => {
      var P;
      if (this.destroyed) {
        v();
        return;
      }
      if ((P = this._stats) == null || P.time("Rendering"), !(T.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      S.initializeGraphics({
        transparency: x,
        optionalContentConfig: T
      }), S.operatorListChanged();
    }).catch(v), _;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = wi.ENABLE,
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
      return this.getXfa().then((s) => bo.textContent(s));
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
    return this.objs.clear(), f(this, Ks, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    f(this, Ks, !0);
    const e = b(this, Vn, ao).call(this);
    return t && e && this._stats && (this._stats = new uu()), e;
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
    t.lastChunk && b(this, Vn, ao).call(this);
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
            b(this, Vn, ao).call(this);
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
        if (e instanceof qd) {
          let i = hm;
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
      if (t.streamReader.cancel(new rn(e.message)).catch(() => {
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
Ks = new WeakMap(), Vn = new WeakSet(), ao = function() {
  if (!n(this, Ks) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), f(this, Ks, !1), !0;
};
var $i, Ke, Qs, jn, ic, Wn, qn, le, Ah, Hf, $f, oo, fa, yh;
const ct = class ct {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = Qp()
  } = {}) {
    m(this, le);
    m(this, $i, Promise.withResolvers());
    m(this, Ke, null);
    m(this, Qs, null);
    m(this, jn, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, e) {
      if (n(ct, qn).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      n(ct, qn).set(e, this), b(this, le, Hf).call(this, e);
    } else
      b(this, le, $f).call(this);
  }
  get promise() {
    return n(this, $i).promise;
  }
  get port() {
    return n(this, Qs);
  }
  get messageHandler() {
    return n(this, Ke);
  }
  destroy() {
    var t, e;
    this.destroyed = !0, (t = n(this, jn)) == null || t.terminate(), f(this, jn, null), n(ct, qn).delete(n(this, Qs)), f(this, Qs, null), (e = n(this, Ke)) == null || e.destroy(), f(this, Ke, null);
  }
  static create(t) {
    const e = n(this, qn).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new ct(t);
  }
  static get workerSrc() {
    if (ui.workerSrc)
      return ui.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return X(this, "_setupFakeWorkerGlobal", (async () => n(this, fa, yh) ? n(this, fa, yh) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
$i = new WeakMap(), Ke = new WeakMap(), Qs = new WeakMap(), jn = new WeakMap(), ic = new WeakMap(), Wn = new WeakMap(), qn = new WeakMap(), le = new WeakSet(), Ah = function() {
  n(this, $i).resolve(), n(this, Ke).send("configure", {
    verbosity: this.verbosity
  });
}, Hf = function(t) {
  f(this, Qs, t), f(this, Ke, new eo("main", "worker", t)), n(this, Ke).on("ready", () => {
  }), b(this, le, Ah).call(this);
}, $f = function() {
  if (n(ct, Wn) || n(ct, fa, yh)) {
    b(this, le, oo).call(this);
    return;
  }
  let {
    workerSrc: t
  } = ct;
  try {
    ct._isSameOrigin(window.location, t) || (t = ct._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), s = new eo("main", "worker", e), i = () => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? n(this, $i).reject(new Error("Worker was destroyed")) : b(this, le, oo).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, jn) || i();
    }, {
      signal: r.signal
    }), s.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        i();
        return;
      }
      f(this, Ke, s), f(this, Qs, e), f(this, jn, e), b(this, le, Ah).call(this);
    }), s.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        i();
        return;
      }
      try {
        a();
      } catch {
        b(this, le, oo).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      s.send("test", o, [o.buffer]);
    };
    a();
    return;
  } catch {
    fc("The worker has been disabled.");
  }
  b(this, le, oo).call(this);
}, oo = function() {
  n(ct, Wn) || (U("Setting up fake worker."), f(ct, Wn, !0)), ct._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, $i).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new _g();
    f(this, Qs, e);
    const s = `fake${te(ct, ic)._++}`, i = new eo(s + "_worker", s, e);
    t.setup(i, e), f(this, Ke, new eo(s, s + "_worker", e)), b(this, le, Ah).call(this);
  }).catch((t) => {
    n(this, $i).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, fa = new WeakSet(), yh = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, m(ct, fa), m(ct, ic, 0), m(ct, Wn, !1), m(ct, qn, /* @__PURE__ */ new WeakMap()), ae && (f(ct, Wn, !0), ui.workerSrc || (ui.workerSrc = "./pdf.worker.mjs")), ct._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!(s != null && s.origin) || s.origin === "null")
    return !1;
  const i = new URL(e, s);
  return s.origin === i.origin;
}, ct._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
}, ct.fromPort = (t) => {
  if (hg("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t != null && t.port))
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  return ct.create(t);
};
let Ao = ct;
var Js, vs, pa, ga, Zs, Xn, lo;
class fm {
  constructor(t, e, s, i, r) {
    m(this, Xn);
    m(this, Js, /* @__PURE__ */ new Map());
    m(this, vs, /* @__PURE__ */ new Map());
    m(this, pa, /* @__PURE__ */ new Map());
    m(this, ga, /* @__PURE__ */ new Map());
    m(this, Zs, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Lf(), this.fontLoader = new mg({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return X(this, "annotationStorage", new Qd());
  }
  getRenderingIntent(t, e = wi.ENABLE, s = null, i = !1, r = !1) {
    let a = Ie.DISPLAY, o = Xc;
    switch (t) {
      case "any":
        a = Ie.ANY;
        break;
      case "display":
        break;
      case "print":
        a = Ie.PRINT;
        break;
      default:
        U(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Ie.PRINT && s instanceof bf ? s : this.annotationStorage;
    switch (e) {
      case wi.DISABLE:
        a += Ie.ANNOTATIONS_DISABLE;
        break;
      case wi.ENABLE:
        break;
      case wi.ENABLE_FORMS:
        a += Ie.ANNOTATIONS_FORMS;
        break;
      case wi.ENABLE_STORAGE:
        a += Ie.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        U(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += Ie.IS_EDITING), r && (a += Ie.OPLIST);
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
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = n(this, Zs)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of n(this, vs).values())
      t.push(i._destroy());
    n(this, vs).clear(), n(this, pa).clear(), n(this, ga).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, Js).clear(), this.filterFactory.destroy(), mo.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new rn("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
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
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new dm(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(ce(s));
    }), t.on("PasswordRequest", (s) => {
      f(this, Zs, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw ce(s);
        const i = (r) => {
          r instanceof Error ? n(this, Zs).reject(r) : n(this, Zs).resolve({
            password: r
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, Zs).reject(i);
      }
      return n(this, Zs).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      n(this, vs).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
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
          const o = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (c, u) => globalThis.FontInspector.fontAdded(c, u) : null, l = new bg(r, o);
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
          for (const c of n(this, vs).values())
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
      const o = n(this, vs).get(i);
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
    const e = t - 1, s = n(this, pa).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, ga).set(r.refStr, t);
      const a = new um(e, r, this, this._params.pdfBug);
      return n(this, vs).set(e, a), a;
    });
    return n(this, pa).set(e, i), i;
  }
  getPageIndex(t) {
    return Yc(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
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
    return b(this, Xn, lo).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, Xn, lo).call(this, "HasJSActions");
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
    return b(this, Xn, lo).call(this, "GetDocJSActions");
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
    return b(this, Xn, lo).call(this, "GetOptionalContentConfig").then((e) => new Vg(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, Js).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var r, a;
      return {
        info: i[0],
        metadata: i[1] ? new zg(i[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return n(this, Js).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, vs).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, Js).clear(), this.filterFactory.destroy(!0), mo.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Yc(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, ga).get(e) ?? null;
  }
}
Js = new WeakMap(), vs = new WeakMap(), pa = new WeakMap(), ga = new WeakMap(), Zs = new WeakMap(), Xn = new WeakSet(), lo = function(t, e = null) {
  const s = n(this, Js).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return n(this, Js).set(t, i), i;
};
var Gi;
class pm {
  constructor(t) {
    m(this, Gi, null);
    R(this, "onContinue", null);
    R(this, "onError", null);
    f(this, Gi, t);
  }
  get promise() {
    return n(this, Gi).capability.promise;
  }
  cancel(t = 0) {
    n(this, Gi).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, Gi).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, Gi);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
Gi = new WeakMap();
var zi, Yn;
const gn = class gn {
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
    pageColors: p = null
  }) {
    m(this, zi, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new pm(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
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
      if (n(gn, Yn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(gn, Yn).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: r,
      background: a
    } = this.params;
    this.gfx = new Br(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: r,
      viewport: i,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }
  cancel(t = null, e = 0) {
    var s, i, r;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), n(this, zi) && (window.cancelAnimationFrame(n(this, zi)), f(this, zi, null)), n(gn, Yn).delete(this._canvas), t || (t = new qd(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (i = this.task).onError) == null || r.call(i, t);
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
    this._useRequestAnimationFrame ? f(this, zi, window.requestAnimationFrame(() => {
      f(this, zi, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(gn, Yn).delete(this._canvas), this.callback())));
  }
};
zi = new WeakMap(), Yn = new WeakMap(), m(gn, Yn, /* @__PURE__ */ new WeakSet());
let ld = gn;
const gm = "5.3.31", mm = "47ad820d9";
function Ru(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function Xa(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Pu {
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
    return t = Xa(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Ru(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Xa);
  }
  static RGB_HTML(t) {
    return `#${t.map(Ru).join("")}`;
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
    return [Xa(1 - Math.min(1, t + i)), Xa(1 - Math.min(1, s + i)), Xa(1 - Math.min(1, e + i))];
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
class bm {
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
    rt("Abstract method `_createSVG` called.");
  }
}
class Gh extends bm {
  _createSVG(t) {
    return document.createElementNS(ks, t);
  }
}
class Gf {
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
      const g = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = g;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const g = document.createTextNode(i.value);
        a.append(g), o && bo.shouldBuildText(i.name) && h.push(g);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [g, y, A] = c.at(-1);
      if (y + 1 === g.children.length) {
        c.pop();
        continue;
      }
      const w = g.children[++c.at(-1)[1]];
      if (w === null)
        continue;
      const {
        name: v
      } = w;
      if (v === "#text") {
        const _ = document.createTextNode(w.value);
        h.push(_), A.append(_);
        continue;
      }
      const S = (u = w == null ? void 0 : w.attributes) != null && u.xmlns ? document.createElementNS(w.attributes.xmlns, v) : document.createElement(v);
      if (A.append(S), w.attributes && this.setAttributes({
        html: S,
        element: w,
        storage: e,
        intent: r,
        linkService: s
      }), ((p = w.children) == null ? void 0 : p.length) > 0)
        c.push([w, -1, S]);
      else if (w.value) {
        const _ = document.createTextNode(w.value);
        o && bo.shouldBuildText(v) && h.push(_), S.append(_);
      }
    }
    for (const g of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      g.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Ql = 1e3, Am = 9, Er = /* @__PURE__ */ new WeakSet();
class Iu {
  static create(t) {
    switch (t.data.annotationType) {
      case _t.LINK:
        return new zf(t);
      case _t.TEXT:
        return new ym(t);
      case _t.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new wm(t);
          case "Btn":
            return t.data.radioButton ? new jf(t) : t.data.checkBox ? new _m(t) : new Sm(t);
          case "Ch":
            return new Em(t);
          case "Sig":
            return new vm(t);
        }
        return new xr(t);
      case _t.POPUP:
        return new cd(t);
      case _t.FREETEXT:
        return new Kf(t);
      case _t.LINE:
        return new xm(t);
      case _t.SQUARE:
        return new Tm(t);
      case _t.CIRCLE:
        return new Rm(t);
      case _t.POLYLINE:
        return new Qf(t);
      case _t.CARET:
        return new Im(t);
      case _t.INK:
        return new tu(t);
      case _t.POLYGON:
        return new Pm(t);
      case _t.HIGHLIGHT:
        return new Jf(t);
      case _t.UNDERLINE:
        return new Mm(t);
      case _t.SQUIGGLY:
        return new km(t);
      case _t.STRIKEOUT:
        return new Lm(t);
      case _t.STAMP:
        return new Zf(t);
      case _t.FILEATTACHMENT:
        return new Dm(t);
      default:
        return new wt(t);
    }
  }
}
var Kn, ma, ba, dl, hd;
const au = class au {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    m(this, dl);
    m(this, Kn, null);
    m(this, ma, !1);
    m(this, ba, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: s
  }) {
    return !!(t != null && t.str || e != null && e.str || s != null && s.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return au._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    n(this, Kn) || f(this, Kn, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && b(this, dl, hd).call(this, e), (s = n(this, ba)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    n(this, Kn) && (b(this, dl, hd).call(this, n(this, Kn).rect), (t = n(this, ba)) == null || t.popup.resetEdited(), f(this, Kn, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), this instanceof xr || (r.tabIndex = Ql);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof cd) {
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
      const A = e.borderStyle.horizontalCornerRadius, w = e.borderStyle.verticalCornerRadius;
      if (A > 0 || w > 0) {
        const S = `calc(${A}px * var(--total-scale-factor)) / calc(${w}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      } else if (this instanceof jf) {
        const S = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case Rr.SOLID:
          a.borderStyle = "solid";
          break;
        case Rr.DASHED:
          a.borderStyle = "dashed";
          break;
        case Rr.BEVELED:
          U("Unimplemented border style: beveled");
          break;
        case Rr.INSET:
          U("Unimplemented border style: inset");
          break;
        case Rr.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (f(this, ma, !0), a.borderColor = $.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const h = $.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: u,
      pageX: p,
      pageY: g
    } = i.rawDims;
    a.left = `${100 * (h[0] - p) / c}%`, a.top = `${100 * (h[1] - g) / u}%`;
    const {
      rotation: y
    } = e;
    return e.hasOwnCanvas || y === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / u}%`) : this.setRotation(y, r), r;
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
      i.target.style[s] = Pu[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Pu[`${a}_rgb`](o)
      });
    };
    return X(this, "_commonActions", {
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
      const [A, w, v, S] = t.subarray(2, 6);
      if (i === A && r === w && e === v && s === S)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, ma)) {
      const {
        borderColor: A,
        borderWidth: w
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${A}" stroke-width="${w}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = r - s, {
      svgFactory: c
    } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const p = c.createElement("defs");
    u.append(p);
    const g = c.createElement("clipPath"), y = `clippath_${this.data.id}`;
    g.setAttribute("id", y), g.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(g);
    for (let A = 2, w = t.length; A < w; A += 8) {
      const v = t[A], S = t[A + 1], _ = t[A + 2], E = t[A + 3], C = c.createElement("rect"), x = (_ - e) / l, T = (r - S) / h, P = (v - _) / l, M = (S - E) / h;
      C.setAttribute("x", x), C.setAttribute("y", T), C.setAttribute("width", P), C.setAttribute("height", M), g.append(C), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${T}" width="${P}" height="${M}"/>`);
    }
    n(this, ma) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${y})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = f(this, ba, new cd({
      data: {
        color: t.color,
        titleObj: t.titleObj,
        modificationDate: t.modificationDate,
        contentsObj: t.contentsObj,
        richText: t.richText,
        parentRect: t.rect,
        borderStyle: 0,
        id: `popup_${t.id}`,
        rotation: t.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(e.render());
  }
  render() {
    rt("Abstract method `AnnotationElement.render` called");
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
          if (h && !Er.has(h)) {
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
      a !== e && Er.has(i) && s.push({
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
        editId: e
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
Kn = new WeakMap(), ma = new WeakMap(), ba = new WeakMap(), dl = new WeakSet(), hd = function(t) {
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
let wt = au;
var ke, dn, Uf, Vf;
class zf extends wt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    m(this, ke);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action), r = !0) : e.attachment ? (b(this, ke, Uf).call(this, i, e.attachment, e.attachmentDest), r = !0) : e.setOCGState ? (b(this, ke, Vf).call(this, i, e.setOCGState), r = !0) : e.dest ? (this._bindLink(i, e.dest), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, ke, dn).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), b(this, ke, dn).call(this);
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
    e.onclick || (e.onclick = () => !1), b(this, ke, dn).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), b(this, ke, dn).call(this), !this._fieldObjects) {
      U('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
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
        for (const g of r) {
          const y = this._fieldObjects[g] || [];
          for (const {
            id: A
          } of y)
            p.add(A);
        }
        for (const g of Object.values(this._fieldObjects))
          for (const y of g)
            p.has(y.id) === o && l.push(y);
      } else
        for (const p of Object.values(this._fieldObjects))
          l.push(...p);
      const h = this.annotationStorage, c = [];
      for (const p of l) {
        const {
          id: g
        } = p;
        switch (c.push(g), p.type) {
          case "text": {
            const A = p.defaultValue || "";
            h.setValue(g, {
              value: A
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const A = p.defaultValue === p.exportValues;
            h.setValue(g, {
              value: A
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const A = p.defaultValue || "";
            h.setValue(g, {
              value: A
            });
            break;
          }
          default:
            continue;
        }
        const y = document.querySelector(`[data-element-id="${g}"]`);
        if (y) {
          if (!Er.has(y)) {
            U(`_bindResetFormAction - element not allowed: ${g}`);
            continue;
          }
        } else continue;
        y.dispatchEvent(new Event("resetform"));
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
ke = new WeakSet(), dn = function() {
  this.container.setAttribute("data-internal-link", "");
}, Uf = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var r;
    return (r = this.downloadManager) == null || r.openOrDownloadData(s.content, s.filename, i), !1;
  }, b(this, ke, dn).call(this);
}, Vf = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), b(this, ke, dn).call(this);
};
class ym extends wt {
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
class xr extends wt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Wt.platform.isMac ? t.metaKey : t.ctrlKey;
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
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Am, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (wc * i)) || 1, u = h / c;
      a = Math.min(i, l(u / wc));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / wc));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = $.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class wm extends xr {
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
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Er.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Ql, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (p) => {
        t.setValue(e, {
          value: p.target.value
        }), this.setPropertyOnSiblings(s, "value", p.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (p) => {
        const g = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = g, c.formattedValue = null;
      });
      let u = (p) => {
        const {
          formattedValue: g
        } = c;
        g != null && (p.target.value = g), p.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (g) => {
          var A;
          if (c.focused)
            return;
          const {
            target: y
          } = g;
          c.userValue && (y.value = c.userValue), c.lastCommittedValue = y.value, c.commitKey = 1, (A = this.data.actions) != null && A.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (g) => {
          this.showElementAndHideCanvas(g.target);
          const y = {
            value(A) {
              c.userValue = A.detail.value ?? "", t.setValue(e, {
                value: c.userValue.toString()
              }), A.target.value = c.userValue;
            },
            formattedValue(A) {
              const {
                formattedValue: w
              } = A.detail;
              c.formattedValue = w, w != null && A.target !== document.activeElement && (A.target.value = w), t.setValue(e, {
                formattedValue: w
              });
            },
            selRange(A) {
              A.target.setSelectionRange(...A.detail.selRange);
            },
            charLimit: (A) => {
              var _;
              const {
                charLimit: w
              } = A.detail, {
                target: v
              } = A;
              if (w === 0) {
                v.removeAttribute("maxLength");
                return;
              }
              v.setAttribute("maxLength", w);
              let S = c.userValue;
              !S || S.length <= w || (S = S.slice(0, w), v.value = c.userValue = S, t.setValue(e, {
                value: S
              }), (_ = this.linkService.eventBus) == null || _.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: S,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: v.selectionStart,
                  selEnd: v.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(y, g);
        }), s.addEventListener("keydown", (g) => {
          var w;
          c.commitKey = 1;
          let y = -1;
          if (g.key === "Escape" ? y = 0 : g.key === "Enter" && !this.data.multiLine ? y = 2 : g.key === "Tab" && (c.commitKey = 3), y === -1)
            return;
          const {
            value: A
          } = g.target;
          c.lastCommittedValue !== A && (c.lastCommittedValue = A, c.userValue = A, (w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: A,
              willCommit: !0,
              commitKey: y,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          }));
        });
        const p = u;
        u = null, s.addEventListener("blur", (g) => {
          var A, w;
          if (!c.focused || !g.relatedTarget)
            return;
          (A = this.data.actions) != null && A.Blur || (c.focused = !1);
          const {
            value: y
          } = g.target;
          c.userValue = y, c.lastCommittedValue !== y && ((w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          })), p(g);
        }), (r = this.data.actions) != null && r.Keystroke && s.addEventListener("beforeinput", (g) => {
          var C;
          c.lastCommittedValue = null;
          const {
            data: y,
            target: A
          } = g, {
            value: w,
            selectionStart: v,
            selectionEnd: S
          } = A;
          let _ = v, E = S;
          switch (g.inputType) {
            case "deleteWordBackward": {
              const x = w.substring(0, v).match(/\w*[^\w]*$/);
              x && (_ -= x[0].length);
              break;
            }
            case "deleteWordForward": {
              const x = w.substring(v).match(/^[^\w]*\w*/);
              x && (E += x[0].length);
              break;
            }
            case "deleteContentBackward":
              v === S && (_ -= 1);
              break;
            case "deleteContentForward":
              v === S && (E += 1);
              break;
          }
          g.preventDefault(), (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: w,
              change: y || "",
              willCommit: !1,
              selStart: _,
              selEnd: E
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (g) => g.target.value);
      }
      if (u && s.addEventListener("blur", u), this.data.comb) {
        const g = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${g}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class vm extends xr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class _m extends xr {
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
    return Er.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = Ql, r.addEventListener("change", (a) => {
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
class jf extends xr {
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
    if (Er.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = Ql, r.addEventListener("change", (a) => {
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
class Sm extends zf {
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
class Em extends xr {
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
    Er.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Ql;
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
        multiple: g
      } = i;
      return g ? Array.prototype.filter.call(p, (y) => y.selected).map((y) => y[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
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
          const g = p.detail.value, y = new Set(Array.isArray(g) ? g : [g]);
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
          const g = i.options, y = p.detail.remove;
          g[y].selected = !1, i.remove(y), g.length > 0 && Array.prototype.findIndex.call(g, (w) => w.selected) === -1 && (g[0].selected = !0), t.setValue(e, {
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
            index: g,
            displayValue: y,
            exportValue: A
          } = p.detail.insert, w = i.children[g], v = document.createElement("option");
          v.textContent = y, v.value = A, w ? w.before(v) : i.append(v), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        items(p) {
          const {
            items: g
          } = p.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const y of g) {
            const {
              displayValue: A,
              exportValue: w
            } = y, v = document.createElement("option");
            v.textContent = A, v.value = w, i.append(v);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        indices(p) {
          const g = new Set(p.detail.indices);
          for (const y of p.target.options)
            y.selected = g.has(y.index);
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
      var g;
      const u = o(!0), p = o(!1);
      t.setValue(e, {
        value: u
      }), c.preventDefault(), (g = this.linkService.eventBus) == null || g.dispatch("dispatcheventinsandbox", {
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
class cd extends wt {
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
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new Cm({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const s of this.elements)
      s.popup = t, s.container.ariaHasPopup = "dialog", e.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((s) => `${Wd}${s}`).join(",")), this.container;
  }
}
var Aa, nc, rc, ya, wa, mt, ti, va, ul, fl, _a, ei, Qe, si, pl, ii, gl, Qn, Jn, at, wh, dd, Wf, qf, Xf, Yf, vh, _h, ud;
class Cm {
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
    open: u
  }) {
    m(this, at);
    m(this, Aa, b(this, at, Xf).bind(this));
    m(this, nc, b(this, at, ud).bind(this));
    m(this, rc, b(this, at, _h).bind(this));
    m(this, ya, b(this, at, vh).bind(this));
    m(this, wa, null);
    m(this, mt, null);
    m(this, ti, null);
    m(this, va, null);
    m(this, ul, null);
    m(this, fl, null);
    m(this, _a, null);
    m(this, ei, !1);
    m(this, Qe, null);
    m(this, si, null);
    m(this, pl, null);
    m(this, ii, null);
    m(this, gl, null);
    m(this, Qn, null);
    m(this, Jn, !1);
    var p;
    f(this, mt, t), f(this, gl, i), f(this, ti, a), f(this, ii, o), f(this, fl, l), f(this, wa, e), f(this, pl, h), f(this, _a, c), f(this, ul, s), f(this, va, Yd.toDateObject(r)), this.trigger = s.flatMap((g) => g.getElementsToTriggerPopup());
    for (const g of this.trigger)
      g.addEventListener("click", n(this, ya)), g.addEventListener("mouseenter", n(this, rc)), g.addEventListener("mouseleave", n(this, nc)), g.classList.add("popupTriggerArea");
    for (const g of s)
      (p = g.container) == null || p.addEventListener("keydown", n(this, Aa));
    n(this, mt).hidden = !0, u && b(this, at, vh).call(this);
  }
  render() {
    if (n(this, Qe))
      return;
    const t = f(this, Qe, document.createElement("div"));
    if (t.className = "popup", n(this, wa)) {
      const r = t.style.outlineColor = $.makeHexColor(...n(this, wa));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = n(this, gl), t.append(e), n(this, va)) {
      const r = document.createElement("span");
      r.classList.add("popupDate"), r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, va).valueOf()
      })), e.append(r);
    }
    const i = n(this, at, wh);
    if (i)
      Gf.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const r = this._formatContents(n(this, ti));
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
    popupContent: e
  }) {
    var s;
    n(this, Qn) || f(this, Qn, {
      contentsObj: n(this, ti),
      richText: n(this, ii)
    }), t && f(this, si, null), e && (f(this, ii, b(this, at, qf).call(this, e)), f(this, ti, null)), (s = n(this, Qe)) == null || s.remove(), f(this, Qe, null);
  }
  resetEdited() {
    var t;
    n(this, Qn) && ({
      contentsObj: te(this, ti)._,
      richText: te(this, ii)._
    } = n(this, Qn), f(this, Qn, null), (t = n(this, Qe)) == null || t.remove(), f(this, Qe, null), f(this, si, null));
  }
  forceHide() {
    f(this, Jn, this.isVisible), n(this, Jn) && (n(this, mt).hidden = !0);
  }
  maybeShow() {
    n(this, Jn) && (n(this, Qe) || b(this, at, _h).call(this), f(this, Jn, !1), n(this, mt).hidden = !1);
  }
  get isVisible() {
    return n(this, mt).hidden === !1;
  }
}
Aa = new WeakMap(), nc = new WeakMap(), rc = new WeakMap(), ya = new WeakMap(), wa = new WeakMap(), mt = new WeakMap(), ti = new WeakMap(), va = new WeakMap(), ul = new WeakMap(), fl = new WeakMap(), _a = new WeakMap(), ei = new WeakMap(), Qe = new WeakMap(), si = new WeakMap(), pl = new WeakMap(), ii = new WeakMap(), gl = new WeakMap(), Qn = new WeakMap(), Jn = new WeakMap(), at = new WeakSet(), wh = function() {
  const t = n(this, ii), e = n(this, ti);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, ii).html || null;
}, dd = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, at, wh)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, Wf = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, at, wh)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, qf = function(t) {
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
      color: n(this, at, Wf),
      fontSize: n(this, at, dd) ? `calc(${n(this, at, dd)}px * var(--total-scale-factor))` : ""
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
}, Xf = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, ei)) && b(this, at, vh).call(this);
}, Yf = function() {
  if (n(this, si) !== null)
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
  } = n(this, fl);
  let a = !!n(this, _a), o = a ? n(this, _a) : n(this, pl);
  for (const y of n(this, ul))
    if (!o || $.intersect(y.data.rect, o) !== null) {
      o = y.data.rect, a = !0;
      break;
    }
  const l = $.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = l[0] + c, p = l[1];
  f(this, si, [100 * (u - i) / e, 100 * (p - r) / s]);
  const {
    style: g
  } = n(this, mt);
  g.left = `${n(this, si)[0]}%`, g.top = `${n(this, si)[1]}%`;
}, vh = function() {
  f(this, ei, !n(this, ei)), n(this, ei) ? (b(this, at, _h).call(this), n(this, mt).addEventListener("click", n(this, ya)), n(this, mt).addEventListener("keydown", n(this, Aa))) : (b(this, at, ud).call(this), n(this, mt).removeEventListener("click", n(this, ya)), n(this, mt).removeEventListener("keydown", n(this, Aa)));
}, _h = function() {
  n(this, Qe) || this.render(), this.isVisible ? n(this, ei) && n(this, mt).classList.add("focused") : (b(this, at, Yf).call(this), n(this, mt).hidden = !1, n(this, mt).style.zIndex = parseInt(n(this, mt).style.zIndex) + 1e3);
}, ud = function() {
  n(this, mt).classList.remove("focused"), !(n(this, ei) || !this.isVisible) && (n(this, mt).hidden = !0, n(this, mt).style.zIndex = parseInt(n(this, mt).style.zIndex) - 1e3);
};
class Kf extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = z.FREETEXT;
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
var ml;
class xm extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, ml, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = f(this, ml, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, ml);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ml = new WeakMap();
var bl;
class Tm extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, bl, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, bl, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, bl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
bl = new WeakMap();
var Al;
class Rm extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Al, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, Al, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Al);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Al = new WeakMap();
var yl;
class Qf extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, yl, null);
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
      const g = s[u] - e[0], y = e[3] - s[u + 1];
      h.push(`${g},${y}`);
    }
    h = h.join(" ");
    const c = f(this, yl, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, yl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
yl = new WeakMap();
class Pm extends Qf {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Im extends wt {
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
var wl, Zn, vl, fd;
class tu extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, vl);
    m(this, wl, null);
    m(this, Zn, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? z.HIGHLIGHT : z.INK;
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
    } = b(this, vl, fd).call(this, s, e), c = this.svgFactory.create(l, h, !0), u = f(this, wl, this.svgFactory.createElement("svg:g"));
    c.append(u), u.setAttribute("stroke-width", r.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let p = 0, g = i.length; p < g; p++) {
      const y = this.svgFactory.createElement(this.svgElementName);
      n(this, Zn).push(y), y.setAttribute("points", i[p].join(",")), u.append(y);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: r
    } = e, a = n(this, wl);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = n(this, Zn).length; o < l; o++)
        n(this, Zn)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h
      } = b(this, vl, fd).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Zn);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
wl = new WeakMap(), Zn = new WeakMap(), vl = new WeakSet(), fd = function(e, s) {
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
class Jf extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = z.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
  }
}
class Mm extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class km extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class Lm extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class Zf extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = z.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var _l, Sl, pd;
class Dm extends wt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    m(this, Sl);
    m(this, _l, null);
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
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", b(this, Sl, pd).bind(this)), f(this, _l, i);
    const {
      isMac: r
    } = Wt.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, Sl, pd).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, _l);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
_l = new WeakMap(), Sl = new WeakSet(), pd = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var El, tr, Ui, Cl, hn, md, bd;
const ou = class ou {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: r,
    viewport: a,
    structTreeLayer: o
  }) {
    m(this, hn);
    m(this, El, null);
    m(this, tr, null);
    m(this, Ui, /* @__PURE__ */ new Map());
    m(this, Cl, null);
    this.div = t, f(this, El, e), f(this, tr, s), f(this, Cl, o || null), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return n(this, Ui).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    _r(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Gh(),
      annotationStorage: t.annotationStorage || new Qd(),
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
        const u = i.get(o.id);
        if (!u)
          continue;
        r.elements = u;
      } else if (o.rect[2] === o.rect[0] || o.rect[3] === o.rect[1])
        continue;
      r.data = o;
      const h = Iu.create(r);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await b(this, hn, md).call(this, c, o.id), h._isEditable && (n(this, Ui).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    b(this, hn, bd).call(this);
  }
  async addLinkAnnotations(t, e) {
    const s = {
      data: null,
      layer: this.div,
      linkService: e,
      svgFactory: new Gh(),
      parent: this
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = ou._defaultBorderStyle), s.data = i;
      const r = Iu.create(s);
      if (!r.isRenderable)
        continue;
      const a = r.render();
      await b(this, hn, md).call(this, a, i.id);
    }
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, _r(e, {
      rotation: t.rotation
    }), b(this, hn, bd).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, Ui).values());
  }
  getEditableAnnotation(t) {
    return n(this, Ui).get(t);
  }
  static get _defaultBorderStyle() {
    return X(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: Rr.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
};
El = new WeakMap(), tr = new WeakMap(), Ui = new WeakMap(), Cl = new WeakMap(), hn = new WeakSet(), md = async function(t, e) {
  var a, o;
  const s = t.firstChild || t, i = s.id = `${Wd}${e}`, r = await ((a = n(this, Cl)) == null ? void 0 : a.getAriaAttributes(i));
  if (r)
    for (const [l, h] of r)
      s.setAttribute(l, h);
  this.div.append(t), (o = n(this, El)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, bd = function() {
  var e;
  if (!n(this, tr))
    return;
  const t = this.div;
  for (const [s, i] of n(this, tr)) {
    const r = t.querySelector(`[data-annotation-id="${s}"]`);
    if (!r)
      continue;
    i.className = "annotationContent";
    const {
      firstChild: a
    } = r;
    a ? a.nodeName === "CANVAS" ? a.replaceWith(i) : a.classList.contains("annotationContent") ? a.after(i) : a.before(i) : r.append(i);
    const o = n(this, Ui).get(s);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(s, r.id, i), o._hasNoCanvas = !1) : o.canvas = i);
  }
  n(this, tr).clear();
};
let gd = ou;
const nh = /\r\n?|\n/g;
var Je, ve, xl, er, _e, Ct, tp, ep, sp, Sh, gi, Eh, Ch, ip, yd, np;
const ot = class ot extends lt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, Ct);
    m(this, Je);
    m(this, ve, "");
    m(this, xl, `${this.id}-editor`);
    m(this, er, null);
    m(this, _e);
    f(this, Je, e.color || ot._defaultColor || lt._defaultLineColor), f(this, _e, e.fontSize || ot._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = ot.prototype, s = (a) => a.isEmpty(), i = Sr.TRANSLATE_SMALL, r = Sr.TRANSLATE_BIG;
    return X(this, "_keyboardManager", new Yl([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
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
        b(this, Ct, tp).call(this, s);
        break;
      case Y.FREETEXT_COLOR:
        b(this, Ct, ep).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Y.FREETEXT_SIZE, ot._defaultFontSize], [Y.FREETEXT_COLOR, ot._defaultColor || lt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[Y.FREETEXT_SIZE, n(this, _e)], [Y.FREETEXT_COLOR, n(this, Je)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-ot._internalPadding * e, -(ot._internalPadding + n(this, _e)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), f(this, er, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, er));
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
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, xl)), this._isDraggable = !0, (e = n(this, er)) == null || e.abort(), f(this, er, null), this.div.focus({
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
    const e = n(this, ve), s = f(this, ve, b(this, Ct, sp).call(this).trimEnd());
    if (e === s)
      return;
    const i = (r) => {
      if (f(this, ve, r), !r) {
        this.remove();
        return;
      }
      b(this, Ct, Ch).call(this), this._uiManager.rebuild(this), b(this, Ct, Sh).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), b(this, Ct, Sh).call(this);
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
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, xl)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, _e)}px * var(--total-scale-factor))`, i.color = n(this, Je), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, u] = this.pageDimensions, [p, g] = this.pageTranslation;
        let y, A;
        switch (this.rotation) {
          case 0:
            y = e + (o[0] - p) / c, A = s + this.height - (o[1] - g) / u;
            break;
          case 90:
            y = e + (o[0] - p) / c, A = s - (o[1] - g) / u, [l, h] = [h, -l];
            break;
          case 180:
            y = e - this.width + (o[0] - p) / c, A = s - (o[1] - g) / u, [l, h] = [-l, -h];
            break;
          case 270:
            y = e + (o[0] - p - this.height * u) / c, A = s + (o[1] - g - this.width * c) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(y * r, A * a, l, h);
      } else
        this._moveAfterPaste(e, s);
      b(this, Ct, Ch).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var y, A, w;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = b(y = ot, gi, yd).call(y, s.getData("text") || "").replaceAll(nh, `
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
      const v = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(nh, "")), v !== this.editorDiv) {
        let S = c;
        for (const _ of this.editorDiv.childNodes) {
          if (_ === v) {
            S = u;
            continue;
          }
          S.push(b(A = ot, gi, Eh).call(A, _));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(nh, ""));
    } else if (l === this.editorDiv) {
      let v = c, S = 0;
      for (const _ of this.editorDiv.childNodes)
        S++ === h && (v = u), v.push(b(w = ot, gi, Eh).call(w, _));
    }
    f(this, ve, `${c.join(`
`)}${r}${u.join(`
`)}`), b(this, Ct, Ch).call(this);
    const p = new Range();
    let g = Math.sumPrecise(c.map((v) => v.length));
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const S = v.nodeValue.length;
        if (g <= S) {
          p.setStart(v, g), p.setEnd(v, g);
          break;
        }
        g -= S;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof Kf) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: u,
          id: p,
          popupRef: g
        },
        textContent: y,
        textPosition: A,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      if (!y || y.length === 0)
        return null;
      r = e = {
        annotationType: z.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: y.join(`
`),
        position: A,
        pageIndex: w - 1,
        rect: c.slice(0),
        rotation: u,
        id: p,
        deleted: !1,
        popupRef: g
      };
    }
    const a = await super.deserialize(e, s, i);
    return f(a, _e, e.fontSize), f(a, Je, $.makeHexColor(...e.color)), f(a, ve, b(o = ot, gi, yd).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = r, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = ot._internalPadding * this.parentScale, i = this.getRect(s, s), r = lt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : n(this, Je)), a = {
      annotationType: z.FREETEXT,
      color: r,
      fontSize: n(this, _e),
      value: b(this, Ct, ip).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? (a.isCopy = !0, a) : this.annotationElementId && !b(this, Ct, np).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${n(this, _e)}px * var(--total-scale-factor))`, i.color = n(this, Je), s.replaceChildren();
    for (const a of n(this, ve).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const r = ot._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(r, r),
      popupContent: n(this, ve)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
Je = new WeakMap(), ve = new WeakMap(), xl = new WeakMap(), er = new WeakMap(), _e = new WeakMap(), Ct = new WeakSet(), tp = function(e) {
  const s = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, _e)) * this.parentScale), f(this, _e, r), b(this, Ct, Sh).call(this);
  }, i = n(this, _e);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Y.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ep = function(e) {
  const s = (r) => {
    f(this, Je, this.editorDiv.style.color = r);
  }, i = n(this, Je);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Y.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, sp = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(i = ot, gi, Eh).call(i, r)), s = r);
  return e.join(`
`);
}, Sh = function() {
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
}, gi = new WeakSet(), Eh = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(nh, "");
}, Ch = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, ve))
    for (const e of n(this, ve).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, ip = function() {
  return n(this, ve).replaceAll(" ", " ");
}, yd = function(e) {
  return e.replaceAll(" ", " ");
}, np = function(e) {
  const {
    value: s,
    fontSize: i,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, m(ot, gi), R(ot, "_freeTextDefaultContent", ""), R(ot, "_internalPadding", 0), R(ot, "_defaultColor", null), R(ot, "_defaultFontSize", 10), R(ot, "_type", "freetext"), R(ot, "_editorType", z.FREETEXT);
let Ad = ot;
class L {
  toSVGPath() {
    rt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    rt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    rt("Abstract method `serialize` must be implemented.");
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
R(L, "PRECISION", 1e-4);
var Se, Ze, Sa, Ea, _s, W, sr, ir, Tl, Rl, Ca, xa, Vi, Pl, ac, oc, It, ho, rp, ap, op, lp, hp, cp;
const Ns = class Ns {
  constructor({
    x: t,
    y: e
  }, s, i, r, a, o = 0) {
    m(this, It);
    m(this, Se);
    m(this, Ze, []);
    m(this, Sa);
    m(this, Ea);
    m(this, _s, []);
    m(this, W, new Float32Array(18));
    m(this, sr);
    m(this, ir);
    m(this, Tl);
    m(this, Rl);
    m(this, Ca);
    m(this, xa);
    m(this, Vi, []);
    f(this, Se, s), f(this, xa, r * i), f(this, Ea, a), n(this, W).set([NaN, NaN, NaN, NaN, t, e], 6), f(this, Sa, o), f(this, Rl, n(Ns, Pl) * i), f(this, Tl, n(Ns, oc) * i), f(this, Ca, i), n(this, Vi).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, W)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var M;
    f(this, sr, t), f(this, ir, e);
    const [s, i, r, a] = n(this, Se);
    let [o, l, h, c] = n(this, W).subarray(8, 12);
    const u = t - h, p = e - c, g = Math.hypot(u, p);
    if (g < n(this, Tl))
      return !1;
    const y = g - n(this, Rl), A = y / g, w = A * u, v = A * p;
    let S = o, _ = l;
    o = h, l = c, h += w, c += v, (M = n(this, Vi)) == null || M.push(t, e);
    const E = -v / y, C = w / y, x = E * n(this, xa), T = C * n(this, xa);
    return n(this, W).set(n(this, W).subarray(2, 8), 0), n(this, W).set([h + x, c + T], 4), n(this, W).set(n(this, W).subarray(14, 18), 12), n(this, W).set([h - x, c - T], 16), isNaN(n(this, W)[6]) ? (n(this, _s).length === 0 && (n(this, W).set([o + x, l + T], 2), n(this, _s).push(NaN, NaN, NaN, NaN, (o + x - s) / r, (l + T - i) / a), n(this, W).set([o - x, l - T], 14), n(this, Ze).push(NaN, NaN, NaN, NaN, (o - x - s) / r, (l - T - i) / a)), n(this, W).set([S, _, o, l, h, c], 6), !this.isEmpty()) : (n(this, W).set([S, _, o, l, h, c], 6), Math.abs(Math.atan2(_ - l, S - o) - Math.atan2(v, w)) < Math.PI / 2 ? ([o, l, h, c] = n(this, W).subarray(2, 6), n(this, _s).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [o, l, S, _] = n(this, W).subarray(14, 18), n(this, Ze).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / r, ((_ + l) / 2 - i) / a), !0) : ([S, _, o, l, h, c] = n(this, W).subarray(0, 6), n(this, _s).push(((S + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [h, c, o, l, S, _] = n(this, W).subarray(12, 18), n(this, Ze).push(((S + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, _s), e = n(this, Ze);
    if (isNaN(n(this, W)[6]) && !this.isEmpty())
      return b(this, It, rp).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    b(this, It, op).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return b(this, It, ap).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new dp(t, e, s, i, r, a);
  }
  getOutlines() {
    var u;
    const t = n(this, _s), e = n(this, Ze), s = n(this, W), [i, r, a, o] = n(this, Se), l = new Float32Array((((u = n(this, Vi)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, g = l.length - 2; p < g; p += 2)
      l[p] = (n(this, Vi)[p] - i) / a, l[p + 1] = (n(this, Vi)[p + 1] - r) / o;
    if (l[l.length - 2] = (n(this, sr) - i) / a, l[l.length - 1] = (n(this, ir) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, It, lp).call(this, l);
    const h = new Float32Array(n(this, _s).length + 24 + n(this, Ze).length);
    let c = t.length;
    for (let p = 0; p < c; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    c = b(this, It, cp).call(this, h, c);
    for (let p = e.length - 6; p >= 6; p -= 6)
      for (let g = 0; g < 6; g += 2) {
        if (isNaN(e[p + g])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[p + g], h[c + 1] = e[p + g + 1], c += 2;
      }
    return b(this, It, hp).call(this, h, c), this.newFreeDrawOutline(h, l, n(this, Se), n(this, Ca), n(this, Sa), n(this, Ea));
  }
};
Se = new WeakMap(), Ze = new WeakMap(), Sa = new WeakMap(), Ea = new WeakMap(), _s = new WeakMap(), W = new WeakMap(), sr = new WeakMap(), ir = new WeakMap(), Tl = new WeakMap(), Rl = new WeakMap(), Ca = new WeakMap(), xa = new WeakMap(), Vi = new WeakMap(), Pl = new WeakMap(), ac = new WeakMap(), oc = new WeakMap(), It = new WeakSet(), ho = function() {
  const t = n(this, W).subarray(4, 6), e = n(this, W).subarray(16, 18), [s, i, r, a] = n(this, Se);
  return [(n(this, sr) + (t[0] - e[0]) / 2 - s) / r, (n(this, ir) + (t[1] - e[1]) / 2 - i) / a, (n(this, sr) + (e[0] - t[0]) / 2 - s) / r, (n(this, ir) + (e[1] - t[1]) / 2 - i) / a];
}, rp = function() {
  const [t, e, s, i] = n(this, Se), [r, a, o, l] = b(this, It, ho).call(this);
  return `M${(n(this, W)[2] - t) / s} ${(n(this, W)[3] - e) / i} L${(n(this, W)[4] - t) / s} ${(n(this, W)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, W)[16] - t) / s} ${(n(this, W)[17] - e) / i} L${(n(this, W)[14] - t) / s} ${(n(this, W)[15] - e) / i} Z`;
}, ap = function(t) {
  const e = n(this, Ze);
  t.push(`L${e[4]} ${e[5]} Z`);
}, op = function(t) {
  const [e, s, i, r] = n(this, Se), a = n(this, W).subarray(4, 6), o = n(this, W).subarray(16, 18), [l, h, c, u] = b(this, It, ho).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, lp = function(t) {
  const e = n(this, W), [s, i, r, a] = n(this, Se), [o, l, h, c] = b(this, It, ho).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, n(this, Se), n(this, Ca), n(this, Sa), n(this, Ea));
}, hp = function(t, e) {
  const s = n(this, Ze);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, cp = function(t, e) {
  const s = n(this, W).subarray(4, 6), i = n(this, W).subarray(16, 18), [r, a, o, l] = n(this, Se), [h, c, u, p] = b(this, It, ho).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), e += 24;
}, m(Ns, Pl, 8), m(Ns, ac, 2), m(Ns, oc, n(Ns, Pl) + n(Ns, ac));
let zh = Ns;
var Ta, nr, ni, Il, Ee, Ml, yt, lc, up;
class dp extends L {
  constructor(e, s, i, r, a, o) {
    super();
    m(this, lc);
    m(this, Ta);
    m(this, nr, new Float32Array(4));
    m(this, ni);
    m(this, Il);
    m(this, Ee);
    m(this, Ml);
    m(this, yt);
    f(this, yt, e), f(this, Ee, s), f(this, Ta, i), f(this, Ml, r), f(this, ni, a), f(this, Il, o), this.lastPoint = [NaN, NaN], b(this, lc, up).call(this, o);
    const [l, h, c, u] = n(this, nr);
    for (let p = 0, g = e.length; p < g; p += 2)
      e[p] = (e[p] - l) / c, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, g = s.length; p < g; p += 2)
      s[p] = (s[p] - l) / c, s[p + 1] = (s[p + 1] - h) / u;
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
        h = L._rescale(n(this, yt), e, r, o, -l), c = L._rescale(n(this, Ee), e, r, o, -l);
        break;
      case 90:
        h = L._rescaleAndSwap(n(this, yt), e, s, o, l), c = L._rescaleAndSwap(n(this, Ee), e, s, o, l);
        break;
      case 180:
        h = L._rescale(n(this, yt), i, s, -o, l), c = L._rescale(n(this, Ee), i, s, -o, l);
        break;
      case 270:
        h = L._rescaleAndSwap(n(this, yt), i, r, -o, -l), c = L._rescaleAndSwap(n(this, Ee), i, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return n(this, nr);
  }
  newOutliner(e, s, i, r, a, o = 0) {
    return new zh(e, s, i, r, a, o);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, nr), [l, h, c, u] = n(this, Ta), p = a * c, g = o * u, y = i * c + l, A = r * u + h, w = this.newOutliner({
      x: n(this, Ee)[0] * p + y,
      y: n(this, Ee)[1] * g + A
    }, n(this, Ta), n(this, Ml), e, n(this, Il), s ?? n(this, ni));
    for (let v = 2; v < n(this, Ee).length; v += 2)
      w.add({
        x: n(this, Ee)[v] * p + y,
        y: n(this, Ee)[v + 1] * g + A
      });
    return w.getOutlines();
  }
}
Ta = new WeakMap(), nr = new WeakMap(), ni = new WeakMap(), Il = new WeakMap(), Ee = new WeakMap(), Ml = new WeakMap(), yt = new WeakMap(), lc = new WeakSet(), up = function(e) {
  const s = n(this, yt);
  let i = s[4], r = s[5];
  const a = [i, r, i, r];
  let o = i, l = r;
  const h = e ? Math.max : Math.min;
  for (let u = 6, p = s.length; u < p; u += 6) {
    const g = s[u + 4], y = s[u + 5];
    if (isNaN(s[u]))
      $.pointBoundingBox(g, y, a), l < y ? (o = g, l = y) : l === y && (o = h(o, g));
    else {
      const A = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      $.bezierBoundingBox(i, r, ...s.slice(u, u + 6), A), $.rectBoundingBox(...A, a), l < A[3] ? (o = A[2], l = A[3]) : l === A[3] && (o = h(o, A[2]));
    }
    i = g, r = y;
  }
  const c = n(this, nr);
  c[0] = a[0] - n(this, ni), c[1] = a[1] - n(this, ni), c[2] = a[2] - a[0] + 2 * n(this, ni), c[3] = a[3] - a[1] + 2 * n(this, ni), this.lastPoint = [o, l];
};
var kl, Ll, ji, ts, he, fp, xh, pp, gp, vd;
class wd {
  constructor(t, e = 0, s = 0, i = !0) {
    m(this, he);
    m(this, kl);
    m(this, Ll);
    m(this, ji, []);
    m(this, ts, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: g,
      y,
      width: A,
      height: w
    } of t) {
      const v = Math.floor((g - e) / a) * a, S = Math.ceil((g + A + e) / a) * a, _ = Math.floor((y - e) / a) * a, E = Math.ceil((y + w + e) / a) * a, C = [v, _, E, !0], x = [S, _, E, !1];
      n(this, ji).push(C, x), $.rectBoundingBox(v, _, S, E, r);
    }
    const o = r[2] - r[0] + 2 * s, l = r[3] - r[1] + 2 * s, h = r[0] - s, c = r[1] - s, u = n(this, ji).at(i ? -1 : -2), p = [u[0], u[2]];
    for (const g of n(this, ji)) {
      const [y, A, w] = g;
      g[0] = (y - h) / o, g[1] = (A - c) / l, g[2] = (w - c) / l;
    }
    f(this, kl, new Float32Array([h, c, o, l])), f(this, Ll, p);
  }
  getOutlines() {
    n(this, ji).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, ji))
      e[3] ? (t.push(...b(this, he, vd).call(this, e)), b(this, he, pp).call(this, e)) : (b(this, he, gp).call(this, e), t.push(...b(this, he, vd).call(this, e)));
    return b(this, he, fp).call(this, t);
  }
}
kl = new WeakMap(), Ll = new WeakMap(), ji = new WeakMap(), ts = new WeakMap(), he = new WeakSet(), fp = function(t) {
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
    let p = o, g = l;
    for (r = [o, h], i.push(r); ; ) {
      let y;
      if (s.has(c))
        y = c;
      else if (s.has(u))
        y = u;
      else
        break;
      s.delete(y), [o, l, h, c, u] = y, p !== o && (r.push(p, g, o, g === l ? l : h), p = o), g = g === l ? h : l;
    }
    r.push(p, g);
  }
  return new Fm(i, n(this, kl), n(this, Ll));
}, xh = function(t) {
  const e = n(this, ts);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, pp = function([, t, e]) {
  const s = b(this, he, xh).call(this, t);
  n(this, ts).splice(s, 0, [t, e]);
}, gp = function([, t, e]) {
  const s = b(this, he, xh).call(this, t);
  for (let i = s; i < n(this, ts).length; i++) {
    const [r, a] = n(this, ts)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ts).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, ts)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ts).splice(i, 1);
      return;
    }
  }
}, vd = function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = b(this, he, xh).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, ts)[o];
    for (let c = 0, u = r.length; c < u; c++) {
      const [, p, g] = r[c];
      if (!(h <= p || g <= l)) {
        if (p >= l) {
          if (g > h)
            r[c][1] = h;
          else {
            if (u === 1)
              return [];
            r.splice(c, 1), c--, u--;
          }
          continue;
        }
        r[c][2] = l, g > h && r.push([e, h, g]);
      }
    }
  }
  return r;
};
var Dl, Ra;
class Fm extends L {
  constructor(e, s, i) {
    super();
    m(this, Dl);
    m(this, Ra);
    f(this, Ra, e), f(this, Dl, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, Ra)) {
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
    for (const c of n(this, Ra)) {
      const u = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        u[p] = e + c[p] * l, u[p + 1] = r - c[p + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return n(this, Dl);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
Dl = new WeakMap(), Ra = new WeakMap();
class _d extends zh {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new Nm(t, e, s, i, r, a);
  }
}
class Nm extends dp {
  newOutliner(t, e, s, i, r, a = 0) {
    return new _d(t, e, s, i, r, a);
  }
}
var es, rr, Pa, Pt, Fl, Ia, Nl, Ol, Wi, ss, Ma, Bl, nt, Sd, Ed, Cd, un, mp, yi;
const de = class de {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, nt);
    m(this, es, null);
    m(this, rr, null);
    m(this, Pa);
    m(this, Pt, null);
    m(this, Fl, !1);
    m(this, Ia, !1);
    m(this, Nl, null);
    m(this, Ol);
    m(this, Wi, null);
    m(this, ss, null);
    m(this, Ma);
    var s;
    t ? (f(this, Ia, !1), f(this, Ma, Y.HIGHLIGHT_COLOR), f(this, Nl, t)) : (f(this, Ia, !0), f(this, Ma, Y.HIGHLIGHT_DEFAULT_COLOR)), f(this, ss, (t == null ? void 0 : t._uiManager) || e), f(this, Ol, n(this, ss)._eventBus), f(this, Pa, (t == null ? void 0 : t.color) || ((s = n(this, ss)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), n(de, Bl) || f(de, Bl, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return X(this, "_keyboardManager", new Yl([[["Escape", "mac+Escape"], de.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], de.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], de.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], de.prototype._moveToPrevious], [["Home", "mac+Home"], de.prototype._moveToBeginning], [["End", "mac+End"], de.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = f(this, es, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = n(this, ss)._signal;
    t.addEventListener("click", b(this, nt, un).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, nt, Cd).bind(this), {
      signal: e
    });
    const s = f(this, rr, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = n(this, Pa), t.append(s), t;
  }
  renderMainDropdown() {
    const t = f(this, Pt, b(this, nt, Sd).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, es)) {
      b(this, nt, un).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, nt, Ed).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!n(this, nt, yi)) {
      b(this, nt, un).call(this, t);
      return;
    }
    if (t.target === n(this, es)) {
      (e = n(this, Pt).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = n(this, Pt)) == null ? void 0 : e.firstChild) || t.target === n(this, es)) {
      n(this, nt, yi) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, nt, yi) || b(this, nt, un).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, nt, yi)) {
      b(this, nt, un).call(this, t);
      return;
    }
    (e = n(this, Pt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, nt, yi)) {
      b(this, nt, un).call(this, t);
      return;
    }
    (e = n(this, Pt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, Pt)) == null || t.classList.add("hidden"), (e = n(this, Wi)) == null || e.abort(), f(this, Wi, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, Ia)) {
      if (!n(this, nt, yi)) {
        (t = n(this, Nl)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, es).focus({
        preventScroll: !0,
        focusVisible: n(this, Fl)
      });
    }
  }
  updateColor(t) {
    if (n(this, rr) && (n(this, rr).style.backgroundColor = t), !n(this, Pt))
      return;
    const e = n(this, ss).highlightColors.values();
    for (const s of n(this, Pt).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = n(this, es)) == null || t.remove(), f(this, es, null), f(this, rr, null), (e = n(this, Pt)) == null || e.remove(), f(this, Pt, null);
  }
};
es = new WeakMap(), rr = new WeakMap(), Pa = new WeakMap(), Pt = new WeakMap(), Fl = new WeakMap(), Ia = new WeakMap(), Nl = new WeakMap(), Ol = new WeakMap(), Wi = new WeakMap(), ss = new WeakMap(), Ma = new WeakMap(), Bl = new WeakMap(), nt = new WeakSet(), Sd = function() {
  const t = document.createElement("div"), e = n(this, ss)._signal;
  t.addEventListener("contextmenu", os, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of n(this, ss).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n(de, Bl)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.setAttribute("aria-selected", i === n(this, Pa)), r.addEventListener("click", b(this, nt, Ed).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, nt, Cd).bind(this), {
    signal: e
  }), t;
}, Ed = function(t, e) {
  e.stopPropagation(), n(this, Ol).dispatch("switchannotationeditorparams", {
    source: this,
    type: n(this, Ma),
    value: t
  });
}, Cd = function(t) {
  de._keyboardManager.exec(this, t);
}, un = function(t) {
  if (n(this, nt, yi)) {
    this.hideDropdown();
    return;
  }
  if (f(this, Fl, t.detail === 0), n(this, Wi) || (f(this, Wi, new AbortController()), window.addEventListener("pointerdown", b(this, nt, mp).bind(this), {
    signal: n(this, ss).combinedSignal(n(this, Wi))
  })), n(this, Pt)) {
    n(this, Pt).classList.remove("hidden");
    return;
  }
  const e = f(this, Pt, b(this, nt, Sd).call(this));
  n(this, es).append(e);
}, mp = function(t) {
  var e;
  (e = n(this, Pt)) != null && e.contains(t.target) || this.hideDropdown();
}, yi = function() {
  return n(this, Pt) && !n(this, Pt).classList.contains("hidden");
}, m(de, Bl, null);
let Uh = de;
var ka, Hl, ri, ar, La, pe, $l, Gl, or, $e, Ce, Gt, Da, ai, Qt, Fa, Ge, zl, V, xd, Th, bp, Ap, yp, Td, fn, Ve, Lr, wp, Rh, co, vp, _p, Sp, Ep, Cp;
const J = class J extends lt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, V);
    m(this, ka, null);
    m(this, Hl, 0);
    m(this, ri);
    m(this, ar, null);
    m(this, La, null);
    m(this, pe, null);
    m(this, $l, null);
    m(this, Gl, 0);
    m(this, or, null);
    m(this, $e, null);
    m(this, Ce, null);
    m(this, Gt, !1);
    m(this, Da, null);
    m(this, ai);
    m(this, Qt, null);
    m(this, Fa, "");
    m(this, Ge);
    m(this, zl, "");
    this.color = e.color || J._defaultColor, f(this, Ge, e.thickness || J._defaultThickness), f(this, ai, e.opacity || J._defaultOpacity), f(this, ri, e.boxes || null), f(this, zl, e.methodOfCreation || ""), f(this, Fa, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (f(this, Gt, !0), b(this, V, Th).call(this, e), b(this, V, fn).call(this)) : n(this, ri) && (f(this, ka, e.anchorNode), f(this, Hl, e.anchorOffset), f(this, $l, e.focusNode), f(this, Gl, e.focusOffset), b(this, V, xd).call(this), b(this, V, fn).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = J.prototype;
    return X(this, "_keyboardManager", new Yl([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
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
      type: n(this, Gt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: n(this, Ge),
      methodOfCreation: n(this, zl)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    var i;
    lt.initialize(e, s), J._defaultColor || (J._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case Y.HIGHLIGHT_DEFAULT_COLOR:
        J._defaultColor = s;
        break;
      case Y.HIGHLIGHT_THICKNESS:
        J._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return n(this, Da);
  }
  updateParams(e, s) {
    switch (e) {
      case Y.HIGHLIGHT_COLOR:
        b(this, V, bp).call(this, s);
        break;
      case Y.HIGHLIGHT_THICKNESS:
        b(this, V, Ap).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Y.HIGHLIGHT_DEFAULT_COLOR, J._defaultColor], [Y.HIGHLIGHT_THICKNESS, J._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[Y.HIGHLIGHT_COLOR, this.color || J._defaultColor], [Y.HIGHLIGHT_THICKNESS, n(this, Ge) || J._defaultThickness], [Y.HIGHLIGHT_FREE, n(this, Gt)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (f(this, La, new Uh({
      editor: this
    })), e.addColorPicker(n(this, La))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, V, co).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, V, co).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    b(this, V, Td).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, V, fn).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? b(this, V, Td).call(this) : e && (b(this, V, fn).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    n(this, Gt) ? (e = (e - this.rotation + 360) % 360, i = b(r = J, Ve, Lr).call(r, n(this, $e).box, e)) : i = b(a = J, Ve, Lr).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(n(this, Ce), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(n(this, Qt), {
      bbox: b(o = J, Ve, Lr).call(o, n(this, pe).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, Fa) && (e.setAttribute("aria-label", n(this, Fa)), e.setAttribute("role", "mark")), n(this, Gt) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, V, wp).bind(this), {
      signal: this._uiManager._signal
    });
    const s = f(this, or, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = n(this, ar);
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), Vu(this, n(this, or), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Qt), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Qt), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, V, Rh).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, V, Rh).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, Qt) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Qt), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, Qt) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Qt), {
      rootClass: {
        selected: !1
      }
    }), n(this, Gt) || b(this, V, Rh).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, Gt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, Ce), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, Qt), {
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
    } = i.getBoundingClientRect(), u = new AbortController(), p = e.combinedSignal(u), g = (y) => {
      u.abort(), b(this, Ve, Ep).call(this, e, y);
    };
    window.addEventListener("blur", g, {
      signal: p
    }), window.addEventListener("pointerup", g, {
      signal: p
    }), window.addEventListener("pointerdown", St, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", os, {
      signal: p
    }), i.addEventListener("pointermove", b(this, Ve, Sp).bind(this, e), {
      signal: p
    }), this._freeHighlight = new _d({
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
    var A, w, v, S;
    let r = null;
    if (e instanceof Jf) {
      const {
        data: {
          quadPoints: _,
          rect: E,
          rotation: C,
          id: x,
          color: T,
          opacity: P,
          popupRef: M
        },
        parent: {
          page: {
            pageNumber: O
          }
        }
      } = e;
      r = e = {
        annotationType: z.HIGHLIGHT,
        color: Array.from(T),
        opacity: P,
        quadPoints: _,
        boxes: null,
        pageIndex: O - 1,
        rect: E.slice(0),
        rotation: C,
        id: x,
        deleted: !1,
        popupRef: M
      };
    } else if (e instanceof tu) {
      const {
        data: {
          inkLists: _,
          rect: E,
          rotation: C,
          id: x,
          color: T,
          borderStyle: {
            rawWidth: P
          },
          popupRef: M
        },
        parent: {
          page: {
            pageNumber: O
          }
        }
      } = e;
      r = e = {
        annotationType: z.HIGHLIGHT,
        color: Array.from(T),
        thickness: P,
        inkLists: _,
        boxes: null,
        pageIndex: O - 1,
        rect: E.slice(0),
        rotation: C,
        id: x,
        deleted: !1,
        popupRef: M
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, c = await super.deserialize(e, s, i);
    c.color = $.makeHexColor(...a), f(c, ai, h || 1), l && f(c, Ge, e.thickness), c.annotationElementId = e.id || null, c._initialData = r;
    const [u, p] = c.pageDimensions, [g, y] = c.pageTranslation;
    if (o) {
      const _ = f(c, ri, []);
      for (let E = 0; E < o.length; E += 8)
        _.push({
          x: (o[E] - g) / u,
          y: 1 - (o[E + 1] - y) / p,
          width: (o[E + 2] - o[E]) / u,
          height: (o[E + 1] - o[E + 5]) / p
        });
      b(A = c, V, xd).call(A), b(w = c, V, fn).call(w), c.rotate(c.rotation);
    } else if (l) {
      f(c, Gt, !0);
      const _ = l[0], E = {
        x: _[0] - g,
        y: p - (_[1] - y)
      }, C = new _d(E, [0, 0, u, p], 1, n(c, Ge) / 2, !0, 1e-3);
      for (let P = 0, M = _.length; P < M; P += 2)
        E.x = _[P] - g, E.y = p - (_[P + 1] - y), C.add(E);
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
      b(v = c, V, Th).call(v, {
        highlightOutlines: C.getOutlines(),
        highlightId: x,
        clipPathId: T
      }), b(S = c, V, fn).call(S), c.rotate(c.parentRotation);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = lt._colorManager.convert(this.color), r = {
      annotationType: z.HIGHLIGHT,
      color: i,
      opacity: n(this, ai),
      thickness: n(this, Ge),
      quadPoints: b(this, V, vp).call(this),
      outlines: b(this, V, _p).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: b(this, V, co).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !b(this, V, Cp).call(this, r) ? null : (r.id = this.annotationElementId, r);
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
ka = new WeakMap(), Hl = new WeakMap(), ri = new WeakMap(), ar = new WeakMap(), La = new WeakMap(), pe = new WeakMap(), $l = new WeakMap(), Gl = new WeakMap(), or = new WeakMap(), $e = new WeakMap(), Ce = new WeakMap(), Gt = new WeakMap(), Da = new WeakMap(), ai = new WeakMap(), Qt = new WeakMap(), Fa = new WeakMap(), Ge = new WeakMap(), zl = new WeakMap(), V = new WeakSet(), xd = function() {
  const e = new wd(n(this, ri), 1e-3);
  f(this, $e, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, $e).box;
  const s = new wd(n(this, ri), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  f(this, pe, s.getOutlines());
  const {
    lastPoint: i
  } = n(this, pe);
  f(this, Da, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, Th = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, p;
  if (f(this, $e, e), f(this, pe, e.getNewOutline(n(this, Ge) / 2 + 1.5, 25e-4)), s >= 0)
    f(this, Ce, s), f(this, ar, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), f(this, Qt, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, pe).box,
      path: {
        d: n(this, pe).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const g = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, Ce), {
      bbox: b(u = J, Ve, Lr).call(u, n(this, $e).box, (g - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, Qt), {
      bbox: b(p = J, Ve, Lr).call(p, n(this, pe).box, g),
      path: {
        d: n(this, pe).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [g, y] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * y / g, this.height = h * g / y;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [g, y] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * y / g, this.height = h * g / y;
      break;
    }
  }
  const {
    lastPoint: c
  } = n(this, pe);
  f(this, Da, [(c[0] - a) / l, (c[1] - o) / h]);
}, bp = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, f(this, ai, o), (l = this.parent) == null || l.drawLayer.updateProperties(n(this, Ce), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = n(this, La)) == null || h.updateColor(a);
  }, i = this.color, r = n(this, ai);
  this.addCommands({
    cmd: s.bind(this, e, J._defaultOpacity),
    undo: s.bind(this, i, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Y.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Ap = function(e) {
  const s = n(this, Ge), i = (r) => {
    f(this, Ge, r), b(this, V, yp).call(this, r);
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
}, yp = function(e) {
  if (!n(this, Gt))
    return;
  b(this, V, Th).call(this, {
    highlightOutlines: n(this, $e).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, Td = function() {
  n(this, Ce) === null || !this.parent || (this.parent.drawLayer.remove(n(this, Ce)), f(this, Ce, null), this.parent.drawLayer.remove(n(this, Qt)), f(this, Qt, null));
}, fn = function(e = this.parent) {
  n(this, Ce) === null && ({
    id: te(this, Ce)._,
    clipPathId: te(this, ar)._
  } = e.drawLayer.draw({
    bbox: n(this, $e).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": n(this, ai)
    },
    rootClass: {
      highlight: !0,
      free: n(this, Gt)
    },
    path: {
      d: n(this, $e).toSVGPath()
    }
  }, !1, !0), f(this, Qt, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, Gt)
    },
    bbox: n(this, pe).box,
    path: {
      d: n(this, pe).toSVGPath()
    }
  }, n(this, Gt))), n(this, or) && (n(this, or).style.clipPath = n(this, ar)));
}, Ve = new WeakSet(), Lr = function([e, s, i, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, i];
    case 180:
      return [1 - e - i, 1 - s - r, i, r];
    case 270:
      return [s, 1 - e - i, r, i];
  }
  return [e, s, i, r];
}, wp = function(e) {
  J._keyboardManager.exec(this, e);
}, Rh = function(e) {
  if (!n(this, ka))
    return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, ka), n(this, Hl)) : s.setPosition(n(this, $l), n(this, Gl));
}, co = function() {
  return n(this, Gt) ? this.rotation : 0;
}, vp = function() {
  if (n(this, Gt))
    return null;
  const [e, s] = this.pageDimensions, [i, r] = this.pageTranslation, a = n(this, ri), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: c,
    width: u,
    height: p
  } of a) {
    const g = h * e + i, y = (1 - c) * s + r;
    o[l] = o[l + 4] = g, o[l + 1] = o[l + 3] = y, o[l + 2] = o[l + 6] = g + u * e, o[l + 5] = o[l + 7] = y - p * s, l += 8;
  }
  return o;
}, _p = function(e) {
  return n(this, $e).serialize(e, b(this, V, co).call(this));
}, Sp = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, Ep = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Cp = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, r) => i !== s[r]);
}, m(J, Ve), R(J, "_defaultColor", null), R(J, "_defaultOpacity", 1), R(J, "_defaultThickness", 12), R(J, "_type", "highlight"), R(J, "_editorType", z.HIGHLIGHT), R(J, "_freeHighlightId", -1), R(J, "_freeHighlight", null), R(J, "_freeHighlightClipId", "");
let Vh = J;
var lr;
class xp {
  constructor() {
    m(this, lr, /* @__PURE__ */ Object.create(null));
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
    n(this, lr)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, lr);
    return f(this, lr, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    f(this, lr, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    rt("Not implemented");
  }
}
lr = new WeakMap();
var xe, Na, Dt, hr, cr, qi, Xi, Yi, dr, K, Rd, Pd, Id, uo, Tp, Ph, fo, Dr;
const F = class F extends lt {
  constructor(e) {
    super(e);
    m(this, K);
    m(this, xe, null);
    m(this, Na);
    R(this, "_drawId", null);
    f(this, Na, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  _addOutlines(e) {
    e.drawOutlines && (b(this, K, Rd).call(this, e), b(this, K, uo).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      i.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    rt("Not implemented");
  }
  static get typesMap() {
    rt("Not implemented");
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
      var c;
      r.updateProperty(s, l);
      const h = n(this, xe).updateProperty(s, l);
      h && b(this, K, fo).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, r.toSVGProperties());
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
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties(n(this, xe).getPathResizingSVGProperties(b(this, K, Ph).call(this)), {
      bbox: b(this, K, Dr).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties(n(this, xe).getPathResizedSVGProperties(b(this, K, Ph).call(this)), {
      bbox: b(this, K, Dr).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: b(this, K, Dr).call(this)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties(n(this, xe).getPathTranslatedSVGProperties(b(this, K, Ph).call(this), this.parentDimensions), {
      bbox: b(this, K, Dr).call(this)
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Na) && (f(this, Na, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    b(this, K, Id).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, K, uo).call(this), b(this, K, fo).call(this, n(this, xe).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, K, Id).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, K, uo).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, F._mergeSVGProperties({
      bbox: b(this, K, Dr).call(this)
    }, n(this, xe).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && b(this, K, fo).call(this, n(this, xe).updateParentDimensions(this.parentDimensions, this.parent.scale));
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
    rt("Not implemented");
  }
  static startDrawing(e, s, i, r) {
    var w;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: c
    } = r;
    if (n(F, Xi) && n(F, Xi) !== c)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: p,
      height: g
    } = a.getBoundingClientRect(), y = f(F, hr, new AbortController()), A = e.combinedSignal(y);
    if (n(F, qi) || f(F, qi, h), n(F, Xi) ?? f(F, Xi, c), window.addEventListener("pointerup", (v) => {
      var S;
      n(F, qi) === v.pointerId ? this._endDraw(v) : (S = n(F, Yi)) == null || S.delete(v.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointercancel", (v) => {
      var S;
      n(F, qi) === v.pointerId ? this._currentParent.endDrawingSession() : (S = n(F, Yi)) == null || S.delete(v.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointerdown", (v) => {
      n(F, Xi) === v.pointerType && ((n(F, Yi) || f(F, Yi, /* @__PURE__ */ new Set())).add(v.pointerId), n(F, Dt).isCancellable() && (n(F, Dt).removeLastElement(), n(F, Dt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: A
    }), window.addEventListener("contextmenu", os, {
      signal: A
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: A
    }), a.addEventListener("touchmove", (v) => {
      v.timeStamp === n(F, dr) && St(v);
    }, {
      signal: A
    }), e.toggleDrawing(), (w = s._editorUndoBar) == null || w.hide(), n(F, Dt)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(F, Dt).startNew(o, l, p, g, u));
      return;
    }
    s.updateUIForDefaultProperties(this), f(F, Dt, this.createDrawerInstance(o, l, p, g, u)), f(F, cr, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(F, cr).toSVGProperties(), n(F, Dt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (f(F, dr, -1), !n(F, Dt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: r
    } = e;
    if (n(F, qi) === r) {
      if (((a = n(F, Yi)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(F, Dt).add(s, i)), f(F, dr, e.timeStamp), St(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, f(F, Dt, null), f(F, cr, null), f(F, Xi, null), f(F, dr, NaN)), n(F, hr) && (n(F, hr).abort(), f(F, hr, null), f(F, qi, NaN), f(F, Yi, null));
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
        drawingOptions: n(F, cr),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o) {
    rt("Not implemented");
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
    return c.createDrawingOptions(e), b(u = c, K, Rd).call(u, {
      drawOutlines: h
    }), b(p = c, K, uo).call(p), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, xe).serialize([s, i, r, a], e);
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
xe = new WeakMap(), Na = new WeakMap(), Dt = new WeakMap(), hr = new WeakMap(), cr = new WeakMap(), qi = new WeakMap(), Xi = new WeakMap(), Yi = new WeakMap(), dr = new WeakMap(), K = new WeakSet(), Rd = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  f(this, xe, e), this._drawingOptions || (this._drawingOptions = i), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = b(this, K, Pd).call(this, e, this.parent), b(this, K, fo).call(this, e.box);
}, Pd = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(F._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, Id = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, uo = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, K, Pd).call(this, n(this, xe), e);
  }
}, Tp = function([e, s, i, r]) {
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
}, Ph = function() {
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
}, fo = function(e) {
  if ([this.x, this.y, this.width, this.height] = b(this, K, Tp).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, Dr = function() {
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
}, R(F, "_currentDrawId", -1), R(F, "_currentParent", null), m(F, Dt, null), m(F, hr, null), m(F, cr, null), m(F, qi, NaN), m(F, Xi, null), m(F, Yi, null), m(F, dr, NaN), R(F, "_INNER_MARGIN", 3);
let jh = F;
var Ss, Ft, Nt, ur, Oa, ie, zt, ze, fr, pr, gr, Ba, Ih;
class Om {
  constructor(t, e, s, i, r, a) {
    m(this, Ba);
    m(this, Ss, new Float64Array(6));
    m(this, Ft);
    m(this, Nt);
    m(this, ur);
    m(this, Oa);
    m(this, ie);
    m(this, zt, "");
    m(this, ze, 0);
    m(this, fr, new Jl());
    m(this, pr);
    m(this, gr);
    f(this, pr, s), f(this, gr, i), f(this, ur, r), f(this, Oa, a), [t, e] = b(this, Ba, Ih).call(this, t, e);
    const o = f(this, Ft, [NaN, NaN, NaN, NaN, t, e]);
    f(this, ie, [t, e]), f(this, Nt, [{
      line: o,
      points: n(this, ie)
    }]), n(this, Ss).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && f(this, Oa, e);
  }
  isEmpty() {
    return !n(this, Nt) || n(this, Nt).length === 0;
  }
  isCancellable() {
    return n(this, ie).length <= 10;
  }
  add(t, e) {
    [t, e] = b(this, Ba, Ih).call(this, t, e);
    const [s, i, r, a] = n(this, Ss).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, pr) * o, n(this, gr) * l) <= 2 ? null : (n(this, ie).push(t, e), isNaN(s) ? (n(this, Ss).set([r, a, t, e], 2), n(this, Ft).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, Ss)[0]) && n(this, Ft).splice(6, 6), n(this, Ss).set([s, i, r, a, t, e], 0), n(this, Ft).push(...L.createBezierPoints(s, i, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (n(this, ie).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, r) {
    f(this, pr, s), f(this, gr, i), f(this, ur, r), [t, e] = b(this, Ba, Ih).call(this, t, e);
    const a = f(this, Ft, [NaN, NaN, NaN, NaN, t, e]);
    f(this, ie, [t, e]);
    const o = n(this, Nt).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, Nt).push({
      line: a,
      points: n(this, ie)
    }), n(this, Ss).set(a, 0), f(this, ze, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, Nt).at(-1);
  }
  setLastElement(t) {
    return n(this, Nt) ? (n(this, Nt).push(t), f(this, Ft, t.line), f(this, ie, t.points), f(this, ze, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, fr).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, Nt))
      return n(this, fr).removeLastElement();
    n(this, Nt).pop(), f(this, zt, "");
    for (let t = 0, e = n(this, Nt).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = n(this, Nt)[t];
      f(this, Ft, s), f(this, ie, i), f(this, ze, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, zt)
      }
    };
  }
  toSVGPath() {
    const t = L.svgRound(n(this, Ft)[4]), e = L.svgRound(n(this, Ft)[5]);
    if (n(this, ie).length === 2)
      return f(this, zt, `${n(this, zt)} M ${t} ${e} Z`), n(this, zt);
    if (n(this, ie).length <= 6) {
      const i = n(this, zt).lastIndexOf("M");
      f(this, zt, `${n(this, zt).slice(0, i)} M ${t} ${e}`), f(this, ze, 6);
    }
    if (n(this, ie).length === 4) {
      const i = L.svgRound(n(this, Ft)[10]), r = L.svgRound(n(this, Ft)[11]);
      return f(this, zt, `${n(this, zt)} L ${i} ${r}`), f(this, ze, 12), n(this, zt);
    }
    const s = [];
    n(this, ze) === 0 && (s.push(`M ${t} ${e}`), f(this, ze, 6));
    for (let i = n(this, ze), r = n(this, Ft).length; i < r; i += 6) {
      const [a, o, l, h, c, u] = n(this, Ft).slice(i, i + 6).map(L.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
    }
    return f(this, zt, n(this, zt) + s.join(" ")), f(this, ze, n(this, Ft).length), n(this, zt);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, Nt).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, fr).build(n(this, Nt), t, e, s, n(this, ur), n(this, Oa), i), f(this, Ss, null), f(this, Ft, null), f(this, Nt, null), f(this, zt, null), n(this, fr);
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
Ss = new WeakMap(), Ft = new WeakMap(), Nt = new WeakMap(), ur = new WeakMap(), Oa = new WeakMap(), ie = new WeakMap(), zt = new WeakMap(), ze = new WeakMap(), fr = new WeakMap(), pr = new WeakMap(), gr = new WeakMap(), Ba = new WeakSet(), Ih = function(t, e) {
  return L._normalizePoint(t, e, n(this, pr), n(this, gr), n(this, ur));
};
var ne, Ul, Vl, Te, Es, Cs, Ha, $a, mr, Vt, Ds, Rp, Pp, Ip;
class Jl extends L {
  constructor() {
    super(...arguments);
    m(this, Vt);
    m(this, ne);
    m(this, Ul, 0);
    m(this, Vl);
    m(this, Te);
    m(this, Es);
    m(this, Cs);
    m(this, Ha);
    m(this, $a);
    m(this, mr);
  }
  build(e, s, i, r, a, o, l) {
    f(this, Es, s), f(this, Cs, i), f(this, Ha, r), f(this, $a, a), f(this, mr, o), f(this, Vl, l ?? 0), f(this, Te, e), b(this, Vt, Pp).call(this);
  }
  get thickness() {
    return n(this, mr);
  }
  setLastElement(e) {
    return n(this, Te).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, Te).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of n(this, Te)) {
      if (e.push(`M${L.svgRound(s[4])} ${L.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${L.svgRound(s[10])} ${L.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(L.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = [], [h, c, u, p] = b(this, Vt, Rp).call(this);
    let g, y, A, w, v, S, _, E, C;
    switch (n(this, $a)) {
      case 0:
        C = L._rescale, g = e, y = s + r, A = i, w = -r, v = e + h * i, S = s + (1 - c - p) * r, _ = e + (h + u) * i, E = s + (1 - c) * r;
        break;
      case 90:
        C = L._rescaleAndSwap, g = e, y = s, A = i, w = r, v = e + c * i, S = s + h * r, _ = e + (c + p) * i, E = s + (h + u) * r;
        break;
      case 180:
        C = L._rescale, g = e + i, y = s, A = -i, w = r, v = e + (1 - h - u) * i, S = s + c * r, _ = e + (1 - h) * i, E = s + (c + p) * r;
        break;
      case 270:
        C = L._rescaleAndSwap, g = e + i, y = s + r, A = -i, w = -r, v = e + (1 - c - p) * i, S = s + (1 - h - u) * r, _ = e + (1 - c) * i, E = s + (1 - h) * r;
        break;
    }
    for (const {
      line: x,
      points: T
    } of n(this, Te))
      o.push(C(x, g, y, A, w, a ? new Array(x.length) : null)), l.push(C(T, g, y, A, w, a ? new Array(T.length) : null));
    return {
      lines: o,
      points: l,
      rect: [v, S, _, E]
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
    let p, g, y, A, w;
    switch (h) {
      case 0:
        w = L._rescale, p = -e / i, g = s / r + 1, y = 1 / i, A = -1 / r;
        break;
      case 90:
        w = L._rescaleAndSwap, p = -s / r, g = -e / i, y = 1 / r, A = 1 / i;
        break;
      case 180:
        w = L._rescale, p = e / i + 1, g = -s / r, y = -1 / i, A = 1 / r;
        break;
      case 270:
        w = L._rescaleAndSwap, p = s / r + 1, g = e / i + 1, y = -1 / r, A = -1 / i;
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
        let [C, x, T, P] = S.subarray(0, 4);
        E.set([NaN, NaN, NaN, NaN, C, x], 0);
        for (let M = 4; M < _; M += 2) {
          const O = S[M], D = S[M + 1];
          E.set(L.createBezierPoints(C, x, T, P, O, D), (M - 2) * 3), [C, x, T, P] = [T, P, O, D];
        }
      }
    }
    for (let S = 0, _ = o.length; S < _; S++)
      u.push({
        line: w(o[S].map((E) => E ?? NaN), p, g, y, A),
        points: w(l[S].map((E) => E ?? NaN), p, g, y, A)
      });
    const v = new this.prototype.constructor();
    return v.build(u, i, r, 1, h, c, a), v;
  }
  get box() {
    return n(this, ne);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, Vt, Ip).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = b(this, Vt, Ds).call(this);
    f(this, Es, e), f(this, Cs, s), f(this, Ha, i);
    const [o, l] = b(this, Vt, Ds).call(this), h = o - r, c = l - a, u = n(this, ne);
    return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
  }
  updateRotation(e) {
    return f(this, Ul, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, ne).map(L.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, ne);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${L.svgRound(e)} ${L.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, ne);
    let i = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, Ul)) {
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
    return `matrix(${i} ${r} ${a} ${o} ${L.svgRound(l)} ${L.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, Vt, Ds).call(this), [l, h, c, u] = n(this, ne);
    if (Math.abs(c - a) <= L.PRECISION || Math.abs(u - o) <= L.PRECISION) {
      const w = e + i / 2 - (l + c / 2), v = s + r / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${L.svgRound(e)} ${L.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${w} ${v})`
        }
      };
    }
    const p = (i - 2 * a) / (c - 2 * a), g = (r - 2 * o) / (u - 2 * o), y = c / i, A = u / r;
    return {
      path: {
        "transform-origin": `${L.svgRound(l)} ${L.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${y} ${A}) translate(${L.svgRound(a)} ${L.svgRound(o)}) scale(${p} ${g}) translate(${L.svgRound(-a)} ${L.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, Vt, Ds).call(this), l = n(this, ne), [h, c, u, p] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = r, Math.abs(u - a) <= L.PRECISION || Math.abs(p - o) <= L.PRECISION) {
      const v = e + i / 2 - (h + u / 2), S = s + r / 2 - (c + p / 2);
      for (const {
        line: _,
        points: E
      } of n(this, Te))
        L._translate(_, v, S, _), L._translate(E, v, S, E);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${L.svgRound(e)} ${L.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const g = (i - 2 * a) / (u - 2 * a), y = (r - 2 * o) / (p - 2 * o), A = -g * (h + a) + e + a, w = -y * (c + o) + s + o;
    if (g !== 1 || y !== 1 || A !== 0 || w !== 0)
      for (const {
        line: v,
        points: S
      } of n(this, Te))
        L._rescale(v, A, w, g, y, v), L._rescale(S, A, w, g, y, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${L.svgRound(e)} ${L.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, ne), l = e - o[0], h = s - o[1];
    if (n(this, Es) === r && n(this, Cs) === a)
      for (const {
        line: c,
        points: u
      } of n(this, Te))
        L._translate(c, l, h, c), L._translate(u, l, h, u);
    else {
      const c = n(this, Es) / r, u = n(this, Cs) / a;
      f(this, Es, r), f(this, Cs, a);
      for (const {
        line: p,
        points: g
      } of n(this, Te))
        L._rescale(p, l, h, c, u, p), L._rescale(g, l, h, c, u, g);
      o[2] *= c, o[3] *= u;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${L.svgRound(e)} ${L.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, ne);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${L.svgRound(e[0])} ${L.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
}
ne = new WeakMap(), Ul = new WeakMap(), Vl = new WeakMap(), Te = new WeakMap(), Es = new WeakMap(), Cs = new WeakMap(), Ha = new WeakMap(), $a = new WeakMap(), mr = new WeakMap(), Vt = new WeakSet(), Ds = function(e = n(this, mr)) {
  const s = n(this, Vl) + e / 2 * n(this, Ha);
  return n(this, $a) % 180 === 0 ? [s / n(this, Es), s / n(this, Cs)] : [s / n(this, Cs), s / n(this, Es)];
}, Rp = function() {
  const [e, s, i, r] = n(this, ne), [a, o] = b(this, Vt, Ds).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, Pp = function() {
  const e = f(this, ne, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, Te)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6)
        $.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [c, u, p, g, y, A] = r.subarray(l, l + 6);
      $.bezierBoundingBox(a, o, c, u, p, g, y, A, e), a = y, o = A;
    }
  }
  const [s, i] = b(this, Vt, Ds).call(this);
  e[0] = oe(e[0] - s, 0, 1), e[1] = oe(e[1] - i, 0, 1), e[2] = oe(e[2] + s, 0, 1), e[3] = oe(e[3] + i, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, Ip = function(e) {
  const [s, i] = b(this, Vt, Ds).call(this);
  f(this, mr, e);
  const [r, a] = b(this, Vt, Ds).call(this), [o, l] = [r - s, a - i], h = n(this, ne);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class mc extends xp {
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
    const t = new mc(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var hc, Mp;
const Or = class Or extends jh {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, hc);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    lt.initialize(e, s), this._defaultDrawingOptions = new mc(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return X(this, "typesMap", /* @__PURE__ */ new Map([[Y.INK_THICKNESS, "stroke-width"], [Y.INK_COLOR, "stroke"], [Y.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, r, a) {
    return new Om(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return Jl.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof tu) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: u,
          opacity: p,
          borderStyle: {
            rawWidth: g
          },
          popupRef: y
        },
        parent: {
          page: {
            pageNumber: A
          }
        }
      } = e;
      r = e = {
        annotationType: z.INK,
        color: Array.from(u),
        thickness: g,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: A - 1,
        rect: l.slice(0),
        rotation: h,
        id: c,
        deleted: !1,
        popupRef: y
      };
    }
    const a = await super.deserialize(e, s, i);
    return a.annotationElementId = e.id || null, a._initialData = r, a;
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
    this._drawingOptions = Or.getDefaultDrawingOptions({
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
      annotationType: z.INK,
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
    return e ? (h.isCopy = !0, h) : this.annotationElementId && !b(this, hc, Mp).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }
  renderAnnotationElement(e) {
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s
    }), null;
  }
};
hc = new WeakSet(), Mp = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, R(Or, "_type", "ink"), R(Or, "_editorType", z.INK), R(Or, "_defaultDrawingOptions", null);
let Md = Or;
class kd extends Jl {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const rh = 8, Ya = 3;
var br, Z, Ld, is, kp, Lp, Dd, Mh, Dp, Fp, Np, Fd, Nd, Op;
class fi {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: i
  }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1), c = h.getContext("2d", {
      alpha: !1
    });
    const u = 200, p = c.font = `${s} ${i} ${u}px ${e}`, {
      actualBoundingBoxLeft: g,
      actualBoundingBoxRight: y,
      actualBoundingBoxAscent: A,
      actualBoundingBoxDescent: w,
      fontBoundingBoxAscent: v,
      fontBoundingBoxDescent: S,
      width: _
    } = c.measureText(t), E = 1.5, C = Math.ceil(Math.max(Math.abs(g) + Math.abs(y) || 0, _) * E), x = Math.ceil(Math.max(Math.abs(A) + Math.abs(w) || u, Math.abs(v) + Math.abs(S) || u) * E);
    h = new OffscreenCanvas(C, x), c = h.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), c.font = p, c.filter = "grayscale(1)", c.fillStyle = "white", c.fillRect(0, 0, C, x), c.fillStyle = "black", c.fillText(t, C * (E - 1) / 2, x * (3 - E) / 2);
    const T = b(this, Z, Fd).call(this, c.getImageData(0, 0, C, x).data), P = b(this, Z, Np).call(this, T), M = b(this, Z, Nd).call(this, P), O = b(this, Z, Dd).call(this, T, C, x, M);
    return this.processDrawnLines({
      lines: {
        curves: O,
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
    const [a, o, l] = b(this, Z, Op).call(this, t), [h, c] = b(this, Z, Fp).call(this, a, o, l, Math.hypot(o, l) * n(this, br).sigmaSFactor, n(this, br).sigmaR, n(this, br).kernelSize), u = b(this, Z, Nd).call(this, c), p = b(this, Z, Dd).call(this, h, o, l, u);
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
    } = t, u = t.thickness ?? 0, p = [], g = Math.min(e / h, s / c), y = g / e, A = g / s, w = [];
    for (const {
      points: S
    } of l) {
      const _ = a ? b(this, Z, Dp).call(this, S) : S;
      if (!_)
        continue;
      w.push(_);
      const E = _.length, C = new Float32Array(E), x = new Float32Array(3 * (E === 2 ? 2 : E - 2));
      if (p.push({
        line: x,
        points: C
      }), E === 2) {
        C[0] = _[0] * y, C[1] = _[1] * A, x.set([NaN, NaN, NaN, NaN, C[0], C[1]], 0);
        continue;
      }
      let [T, P, M, O] = _;
      T *= y, P *= A, M *= y, O *= A, C.set([T, P, M, O], 0), x.set([NaN, NaN, NaN, NaN, T, P], 0);
      for (let D = 4; D < E; D += 2) {
        const tt = C[D] = _[D] * y, st = C[D + 1] = _[D + 1] * A;
        x.set(L.createBezierPoints(T, P, M, O, tt, st), (D - 2) * 3), [T, P, M, O] = [M, O, tt, st];
      }
    }
    if (p.length === 0)
      return null;
    const v = o ? new kd() : new Jl();
    return v.build(p, e, s, 1, i, o ? 0 : u, r), {
      outline: v,
      newCurves: w,
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
        const x = _[E] - _[E - 2];
        a = Math.min(a, x), o = Math.max(o, x);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const c = t.length, u = rh + Ya * c, p = new Uint32Array(u);
    let g = 0;
    p[g++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * c) * h.BYTES_PER_ELEMENT, p[g++] = 0, p[g++] = i, p[g++] = r, p[g++] = e ? 0 : 1, p[g++] = Math.max(0, Math.floor(s ?? 0)), p[g++] = c, p[g++] = h.BYTES_PER_ELEMENT;
    for (const _ of t)
      p[g++] = _.length - 2, p[g++] = _[0], p[g++] = _[1];
    const y = new CompressionStream("deflate-raw"), A = y.writable.getWriter();
    await A.ready, A.write(p);
    const w = h.prototype.constructor;
    for (const _ of t) {
      const E = new w(_.length - 2);
      for (let C = 2, x = _.length; C < x; C++)
        E[C - 2] = _[C] - _[C - 2];
      A.write(E);
    }
    A.close();
    const v = await new Response(y.readable).arrayBuffer(), S = new Uint8Array(v);
    return Nu(S);
  }
  static async decompressSignature(t) {
    try {
      const e = ag(t), {
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
      const c = l[2], u = l[3], p = l[4] === 0, g = l[5], y = l[6], A = l[7], w = [], v = (rh + Ya * y) * Uint32Array.BYTES_PER_ELEMENT;
      let S;
      switch (A) {
        case Int8Array.BYTES_PER_ELEMENT:
          S = new Int8Array(a.buffer, v);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          S = new Int16Array(a.buffer, v);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          S = new Int32Array(a.buffer, v);
          break;
      }
      o = 0;
      for (let _ = 0; _ < y; _++) {
        const E = l[Ya * _ + rh], C = new Float32Array(E + 2);
        w.push(C);
        for (let x = 0; x < Ya - 1; x++)
          C[x] = l[Ya * _ + rh + x + 1];
        for (let x = 0; x < E; x++)
          C[x + 2] = C[x] + S[o++];
      }
      return {
        areContours: p,
        thickness: g,
        outlines: w,
        width: c,
        height: u
      };
    } catch (e) {
      return U(`decompressSignature: ${e}`), null;
    }
  }
}
br = new WeakMap(), Z = new WeakSet(), Ld = function(t, e, s, i) {
  return s -= t, i -= e, s === 0 ? i > 0 ? 0 : 4 : s === 1 ? i + 6 : 2 - i;
}, is = new WeakMap(), kp = function(t, e, s, i, r, a, o) {
  const l = b(this, Z, Ld).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (-h + l - o + 16) % 8, u = n(this, is)[2 * c], p = n(this, is)[2 * c + 1];
    if (t[(s + u) * e + (i + p)] !== 0)
      return c;
  }
  return -1;
}, Lp = function(t, e, s, i, r, a, o) {
  const l = b(this, Z, Ld).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (h + l + o + 16) % 8, u = n(this, is)[2 * c], p = n(this, is)[2 * c + 1];
    if (t[(s + u) * e + (i + p)] !== 0)
      return c;
  }
  return -1;
}, Dd = function(t, e, s, i) {
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
      const p = c * e + u, g = a[p];
      if (g === 0)
        continue;
      let y = c, A = u;
      if (g === 1 && a[p - 1] === 0)
        o += 1, A -= 1;
      else if (g >= 1 && a[p + 1] === 0)
        o += 1, A += 1, g > 1 && (l = g);
      else {
        g !== 1 && (l = Math.abs(g));
        continue;
      }
      const w = [u, c], v = A === u + 1, S = {
        isHole: v,
        points: w,
        id: o,
        parent: 0
      };
      h.push(S);
      let _;
      for (const D of h)
        if (D.id === l) {
          _ = D;
          break;
        }
      _ ? _.isHole ? S.parent = v ? _.parent : l : S.parent = v ? l : _.parent : S.parent = v ? l : 0;
      const E = b(this, Z, kp).call(this, a, e, c, u, y, A, 0);
      if (E === -1) {
        a[p] = -o, a[p] !== 1 && (l = Math.abs(a[p]));
        continue;
      }
      let C = n(this, is)[2 * E], x = n(this, is)[2 * E + 1];
      const T = c + C, P = u + x;
      y = T, A = P;
      let M = c, O = u;
      for (; ; ) {
        const D = b(this, Z, Lp).call(this, a, e, M, O, y, A, 1);
        C = n(this, is)[2 * D], x = n(this, is)[2 * D + 1];
        const tt = M + C, st = O + x;
        w.push(st, tt);
        const q = M * e + O;
        if (a[q + 1] === 0 ? a[q] = -o : a[q] === 1 && (a[q] = o), tt === c && st === u && M === T && O === P) {
          a[p] !== 1 && (l = Math.abs(a[p]));
          break;
        } else
          y = M, A = O, M = tt, O = st;
      }
    }
  }
  return h;
}, Mh = function(t, e, s, i) {
  if (s - e <= 4) {
    for (let T = e; T < s - 2; T += 2)
      i.push(t[T], t[T + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, l = t[s - 3] - a, h = Math.hypot(o, l), c = o / h, u = l / h, p = c * a - u * r, g = l / o, y = 1 / h, A = Math.atan(g), w = Math.cos(A), v = Math.sin(A), S = y * (Math.abs(w) + Math.abs(v)), _ = y * (1 - S + S ** 2), E = Math.max(Math.atan(Math.abs(v + w) * _), Math.atan(Math.abs(v - w) * _));
  let C = 0, x = e;
  for (let T = e + 2; T < s - 2; T += 2) {
    const P = Math.abs(p - c * t[T + 1] + u * t[T]);
    P > C && (x = T, C = P);
  }
  C > (h * E) ** 2 ? (b(this, Z, Mh).call(this, t, e, x + 2, i), b(this, Z, Mh).call(this, t, x, s, i)) : i.push(r, a);
}, Dp = function(t) {
  const e = [], s = t.length;
  return b(this, Z, Mh).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, Fp = function(t, e, s, i, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * i ** 2, h = a >> 1;
  for (let A = 0; A < a; A++) {
    const w = (A - h) ** 2;
    for (let v = 0; v < a; v++)
      o[A * a + v] = Math.exp((w + (v - h) ** 2) / l);
  }
  const c = new Float32Array(256), u = -2 * r ** 2;
  for (let A = 0; A < 256; A++)
    c[A] = Math.exp(A ** 2 / u);
  const p = t.length, g = new Uint8Array(p), y = new Uint32Array(256);
  for (let A = 0; A < s; A++)
    for (let w = 0; w < e; w++) {
      const v = A * e + w, S = t[v];
      let _ = 0, E = 0;
      for (let x = 0; x < a; x++) {
        const T = A + x - h;
        if (!(T < 0 || T >= s))
          for (let P = 0; P < a; P++) {
            const M = w + P - h;
            if (M < 0 || M >= e)
              continue;
            const O = t[T * e + M], D = o[x * a + P] * c[Math.abs(O - S)];
            _ += O * D, E += D;
          }
      }
      const C = g[v] = Math.round(_ / E);
      y[C]++;
    }
  return [g, y];
}, Np = function(t) {
  const e = new Uint32Array(256);
  for (const s of t)
    e[s]++;
  return e;
}, Fd = function(t) {
  const e = t.length, s = new Uint8ClampedArray(e >> 2);
  let i = -1 / 0, r = 1 / 0;
  for (let o = 0, l = s.length; o < l; o++) {
    if (t[(o << 2) + 3] === 0) {
      i = s[o] = 255;
      continue;
    }
    const c = s[o] = t[o << 2];
    c > i && (i = c), c < r && (r = c);
  }
  const a = 255 / (i - r);
  for (let o = 0; o < e; o++)
    s[o] = (s[o] - r) * a;
  return s;
}, Nd = function(t) {
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
}, Op = function(t) {
  const e = t, {
    width: s,
    height: i
  } = t, {
    maxDim: r
  } = n(this, br);
  let a = s, o = i;
  if (s > r || i > r) {
    let p = s, g = i, y = Math.log2(Math.max(s, i) / r);
    const A = Math.floor(y);
    y = y === A ? A - 1 : A;
    for (let v = 0; v < y; v++) {
      a = Math.ceil(p / 2), o = Math.ceil(g / 2);
      const S = new OffscreenCanvas(a, o);
      S.getContext("2d").drawImage(t, 0, 0, p, g, 0, 0, a, o), p = a, g = o, t !== e && t.close(), t = S.transferToImageBitmap();
    }
    const w = Math.min(r / a, r / o);
    a = Math.round(a * w), o = Math.round(o * w);
  }
  const h = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  h.filter = "grayscale(1)", h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const c = h.getImageData(0, 0, a, o).data;
  return [b(this, Z, Fd).call(this, c), a, o];
}, m(fi, Z), m(fi, br, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), m(fi, is, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class eu extends xp {
  constructor() {
    super(), super.updateProperties({
      fill: lt._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new eu();
    return t.updateAll(this), t;
  }
}
class su extends mc {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: lt._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new su(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Ki, Re, Qi, Ji;
const me = class me extends jh {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    m(this, Ki, !1);
    m(this, Re, null);
    m(this, Qi, null);
    m(this, Ji, null);
    this._willKeepAspectRatio = !0, f(this, Qi, e.signatureData || null), f(this, Re, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    lt.initialize(e, s), this._defaultDrawingOptions = new eu(), this._defaultDrawnSignatureOptions = new su(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return X(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!n(this, Re)
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
      if (n(this, Qi)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: h,
          heightInPage: c
        } = n(this, Qi), {
          rawDims: {
            pageWidth: u,
            pageHeight: p
          },
          rotation: g
        } = this.parent.viewport, y = fi.processDrawnLines({
          lines: r,
          pageWidth: u,
          pageHeight: p,
          rotation: g,
          innerMargin: me._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(y, c, l, h);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    return i && (this._isCopy = !0, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    f(this, Ji, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, Ji);
  }
  get description() {
    return n(this, Re);
  }
  set description(e) {
    f(this, Re, e), super.addEditToolbar().then((s) => {
      s == null || s.updateEditSignatureButton(e);
    });
  }
  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: s,
      thickness: i,
      width: r,
      height: a
    } = n(this, Qi), o = Math.max(r, a), l = fi.processDrawnLines({
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
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.signatureManager && n(this, Re) !== null && (await e.addEditSignatureButton(this._uiManager.signatureManager, n(this, Ji), n(this, Re)), e.show()), e) : null;
  }
  addSignature(e, s, i, r) {
    const {
      x: a,
      y: o
    } = this, {
      outline: l
    } = f(this, Qi, e);
    f(this, Ki, l instanceof kd), f(this, Re, i), this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: i
    }));
    let h;
    n(this, Ki) ? h = me.getDefaultDrawingOptions() : (h = me._defaultDrawnSignatureOptions.clone(), h.updateProperties({
      "stroke-width": l.thickness
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: h
    });
    const [c, u] = this.parentDimensions, [, p] = this.pageDimensions;
    let g = s / p;
    g = g >= 1 ? 0.5 : g, this.width *= g / this.height, this.width >= 1 && (g *= 0.9 / this.width, this.width = 0.9), this.height = g, this.setDims(c * this.width, u * this.height), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
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
    return fi.process(e, s, i, r, me._INNER_MARGIN);
  }
  getFromText(e, s) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return fi.extractContoursFromText(e, s, i, r, a, me._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return fi.processDrawnLines({
      lines: e,
      pageWidth: s,
      pageHeight: i,
      rotation: r,
      innerMargin: me._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: s
  }) {
    e ? this._drawingOptions = me.getDefaultDrawingOptions() : (this._drawingOptions = me._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
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
      annotationType: z.SIGNATURE,
      isSignature: !0,
      areContours: n(this, Ki),
      color: [0, 0, 0],
      thickness: n(this, Ki) ? 0 : a,
      pageIndex: this.pageIndex,
      rect: r,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? (o.paths = {
      lines: s,
      points: i
    }, o.uuid = n(this, Ji), o.isCopy = !0) : o.lines = s, n(this, Re) && (o.accessibilityData = {
      type: "Figure",
      alt: n(this, Re)
    }), o;
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return o.areContours ? kd.deserialize(e, s, i, r, a, o) : Jl.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    var a;
    const r = await super.deserialize(e, s, i);
    return f(r, Ki, e.areContours), f(r, Re, ((a = e.accessibilityData) == null ? void 0 : a.alt) || ""), f(r, Ji, e.uuid), r;
  }
};
Ki = new WeakMap(), Re = new WeakMap(), Qi = new WeakMap(), Ji = new WeakMap(), R(me, "_type", "signature"), R(me, "_editorType", z.SIGNATURE), R(me, "_defaultDrawingOptions", null);
let Od = me;
var dt, Ot, Zi, oi, tn, Ga, li, Ar, xs, Pe, za, Q, po, go, kh, Lh, Dh, Hd, Fh, Bp;
class Bd extends lt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, Q);
    m(this, dt, null);
    m(this, Ot, null);
    m(this, Zi, null);
    m(this, oi, null);
    m(this, tn, null);
    m(this, Ga, "");
    m(this, li, null);
    m(this, Ar, !1);
    m(this, xs, null);
    m(this, Pe, !1);
    m(this, za, !1);
    f(this, oi, e.bitmapUrl), f(this, tn, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    lt.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return Mc.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor({
      mode: z.STAMP
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
    n(this, Ot) && (f(this, dt, null), this._uiManager.imageManager.deleteId(n(this, Ot)), (e = n(this, li)) == null || e.remove(), f(this, li, null), n(this, xs) && (clearTimeout(n(this, xs)), f(this, xs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, Ot) && b(this, Q, kh).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, Ot) && n(this, li) === null && b(this, Q, kh).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, Zi) || n(this, dt) || n(this, oi) || n(this, tn) || n(this, Ot) || n(this, Ar));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), n(this, Ar) || (n(this, dt) ? b(this, Q, Lh).call(this) : b(this, Q, kh).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const {
      id: i,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), i && this._uiManager.imageManager.isValidId(i) && (f(this, Ot, i), r && f(this, dt, r), f(this, Ar, !1), b(this, Q, Lh).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, xs) !== null && clearTimeout(n(this, xs)), f(this, xs, setTimeout(() => {
      f(this, xs, null), b(this, Q, Hd).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    var g;
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, dt), o = new Rs();
    let l = n(this, dt), h = r, c = a, u = null;
    if (s) {
      if (r > s || a > s) {
        const P = Math.min(s / r, s / a);
        h = Math.floor(r * P), c = Math.floor(a * P);
      }
      u = document.createElement("canvas");
      const y = u.width = Math.ceil(h * o.sx), A = u.height = Math.ceil(c * o.sy);
      n(this, Pe) || (l = b(this, Q, Dh).call(this, y, A));
      const w = u.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let v = "white", S = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? S = "black" : (g = window.matchMedia) != null && g.call(window, "(prefers-color-scheme: dark)").matches && (v = "#8f8f9d", S = "#42414d");
      const _ = 15, E = _ * o.sx, C = _ * o.sy, x = new OffscreenCanvas(E * 2, C * 2), T = x.getContext("2d");
      T.fillStyle = v, T.fillRect(0, 0, E * 2, C * 2), T.fillStyle = S, T.fillRect(0, 0, E, C), T.fillRect(E, C, E, C), w.fillStyle = w.createPattern(x, "repeat"), w.fillRect(0, 0, y, A), w.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, A);
    }
    let p = null;
    if (i) {
      let y, A;
      if (o.symmetric && l.width < e && l.height < e)
        y = l.width, A = l.height;
      else if (l = n(this, dt), r > e || a > e) {
        const S = Math.min(e / r, e / a);
        y = Math.floor(r * S), A = Math.floor(a * S), n(this, Pe) || (l = b(this, Q, Dh).call(this, y, A));
      }
      const v = new OffscreenCanvas(y, A).getContext("2d", {
        willReadFrequently: !0
      });
      v.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, A), p = {
        width: y,
        height: A,
        data: v.getImageData(0, 0, y, A).data
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
    var w;
    let r = null, a = !1;
    if (e instanceof Zf) {
      const {
        data: {
          rect: v,
          rotation: S,
          id: _,
          structParent: E,
          popupRef: C
        },
        container: x,
        parent: {
          page: {
            pageNumber: T
          }
        },
        canvas: P
      } = e;
      let M, O;
      P ? (delete e.canvas, {
        id: M,
        bitmap: O
      } = i.imageManager.getFromCanvas(x.id, P), P.remove()) : (a = !0, e._hasNoCanvas = !0);
      const D = ((w = await s._structTree.getAriaAttributes(`${Wd}${_}`)) == null ? void 0 : w.get("aria-label")) || "";
      r = e = {
        annotationType: z.STAMP,
        bitmapId: M,
        bitmap: O,
        pageIndex: T - 1,
        rect: v.slice(0),
        rotation: S,
        id: _,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: D
        },
        isSvg: !1,
        structParent: E,
        popupRef: C
      };
    }
    const o = await super.deserialize(e, s, i), {
      rect: l,
      bitmap: h,
      bitmapUrl: c,
      bitmapId: u,
      isSvg: p,
      accessibilityData: g
    } = e;
    a ? (i.addMissingCanvas(e.id, o), f(o, Ar, !0)) : u && i.imageManager.isValidId(u) ? (f(o, Ot, u), h && f(o, dt, h)) : f(o, oi, c), f(o, Pe, p);
    const [y, A] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / y, o.height = (l[3] - l[1]) / A, o.annotationElementId = e.id || null, g && (o.altTextData = g), o._initialData = r, f(o, za, !!r), o;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: z.STAMP,
      bitmapId: n(this, Ot),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: n(this, Pe),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = b(this, Q, Fh).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i.isCopy = !0, i;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = b(this, Q, Bp).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = n(this, Pe) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, Ot)))
      s.stamps.set(n(this, Ot), {
        area: o,
        serialized: i
      }), i.bitmap = b(this, Q, Fh).call(this, !1);
    else if (n(this, Pe)) {
      const l = s.stamps.get(n(this, Ot));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = b(this, Q, Fh).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
}
dt = new WeakMap(), Ot = new WeakMap(), Zi = new WeakMap(), oi = new WeakMap(), tn = new WeakMap(), Ga = new WeakMap(), li = new WeakMap(), Ar = new WeakMap(), xs = new WeakMap(), Pe = new WeakMap(), za = new WeakMap(), Q = new WeakSet(), po = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  f(this, dt, e.bitmap), s || (f(this, Ot, e.id), f(this, Pe, e.isSvg)), e.file && f(this, Ga, e.file.name), b(this, Q, Lh).call(this);
}, go = function() {
  if (f(this, Zi, null), this._uiManager.enableWaiting(!1), !!n(this, li)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, dt)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
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
}, kh = function() {
  if (n(this, Ot)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, Ot)).then((i) => b(this, Q, po).call(this, i, !0)).finally(() => b(this, Q, go).call(this));
    return;
  }
  if (n(this, oi)) {
    const i = n(this, oi);
    f(this, oi, null), this._uiManager.enableWaiting(!0), f(this, Zi, this._uiManager.imageManager.getFromUrl(i).then((r) => b(this, Q, po).call(this, r)).finally(() => b(this, Q, go).call(this)));
    return;
  }
  if (n(this, tn)) {
    const i = n(this, tn);
    f(this, tn, null), this._uiManager.enableWaiting(!0), f(this, Zi, this._uiManager.imageManager.getFromFile(i).then((r) => b(this, Q, po).call(this, r)).finally(() => b(this, Q, go).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Mc.join(",");
  const s = this._uiManager._signal;
  f(this, Zi, new Promise((i) => {
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
        }), b(this, Q, po).call(this, r);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => b(this, Q, go).call(this))), e.click();
}, Lh = function() {
  var u;
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
  const c = f(this, li, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / r, this.height = i / a, (u = this._initialOptions) != null && u.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, Q, Hd).call(this), n(this, za) || (this.parent.addUndoableEditor(this), f(this, za, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, Ga) && this.div.setAttribute("aria-description", n(this, Ga));
}, Dh = function(e, s) {
  const {
    width: i,
    height: r
  } = n(this, dt);
  let a = i, o = r, l = n(this, dt);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, Hd = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: r
  } = this, a = new Rs(), o = Math.ceil(i * e * a.sx), l = Math.ceil(r * s * a.sy), h = n(this, li);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = n(this, Pe) ? n(this, dt) : b(this, Q, Dh).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, Fh = function(e) {
  if (e) {
    if (n(this, Pe)) {
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
  if (n(this, Pe)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * an.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * an.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, dt), 0, 0, n(this, dt).width, n(this, dt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, dt));
}, Bp = function(e) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, r = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, R(Bd, "_type", "stamp"), R(Bd, "_editorType", z.STAMP);
var yr, Ua, Ts, en, hi, Ue, sn, Va, wr, ns, ci, Jt, di, H, nn, ut, Hp, ds, Gd, zd, Nh;
const We = class We {
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
    m(this, ut);
    m(this, yr);
    m(this, Ua, !1);
    m(this, Ts, null);
    m(this, en, null);
    m(this, hi, null);
    m(this, Ue, /* @__PURE__ */ new Map());
    m(this, sn, !1);
    m(this, Va, !1);
    m(this, wr, !1);
    m(this, ns, null);
    m(this, ci, null);
    m(this, Jt, null);
    m(this, di, null);
    m(this, H);
    const u = [...n(We, nn).values()];
    if (!We._initialized) {
      We._initialized = !0;
      for (const p of u)
        p.initialize(c, t);
    }
    t.registerEditorTypes(u), f(this, H, t), this.pageIndex = e, this.div = s, f(this, yr, r), f(this, Ts, a), this.viewport = h, f(this, Jt, l), this.drawLayer = o, this._structTree = i, n(this, H).addLayer(this);
  }
  get isEmpty() {
    return n(this, Ue).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, H).getMode() === z.NONE;
  }
  updateToolbar(t) {
    n(this, H).updateToolbar(t);
  }
  updateMode(t = n(this, H).getMode()) {
    switch (b(this, ut, Nh).call(this), t) {
      case z.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case z.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case z.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of n(We, nn).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, Jt)) == null ? void 0 : e.div);
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
    (e = n(this, Ts)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    f(this, wr, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, Ue).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, H).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!n(this, Ts)) {
      f(this, wr, !1);
      return;
    }
    const e = n(this, Ts).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), n(this, H).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
    f(this, wr, !1);
  }
  disable() {
    var i;
    f(this, Va, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const r of n(this, Ue).values())
      if (r.disableEditing(), !!r.annotationElementId) {
        if (r.serialize() !== null) {
          t.set(r.annotationElementId, r);
          continue;
        } else
          e.set(r.annotationElementId, r);
        (i = this.getEditableAnnotation(r.annotationElementId)) == null || i.show(), r.remove();
      }
    if (n(this, Ts)) {
      const r = n(this, Ts).getEditableAnnotations();
      for (const a of r) {
        const {
          id: o
        } = a.data;
        if (n(this, H).isDeletedAnnotationElement(o))
          continue;
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(a), l.show(!1), a.show();
          continue;
        }
        l = t.get(o), l && (n(this, H).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    b(this, ut, Nh).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const r of n(We, nn).values())
      s.remove(`${r._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), f(this, Va, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, Ts)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, H).getActive() !== t && n(this, H).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, Jt)) != null && t.div && !n(this, di)) {
      f(this, di, new AbortController());
      const e = n(this, H).combinedSignal(n(this, di));
      n(this, Jt).div.addEventListener("pointerdown", b(this, ut, Hp).bind(this), {
        signal: e
      }), n(this, Jt).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, Jt)) != null && t.div && n(this, di) && (n(this, di).abort(), f(this, di, null), n(this, Jt).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, en))
      return;
    f(this, en, new AbortController());
    const t = n(this, H).combinedSignal(n(this, en));
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
    (t = n(this, en)) == null || t.abort(), f(this, en, null);
  }
  attach(t) {
    n(this, Ue).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, H).isDeletedAnnotationElement(e) && n(this, H).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, Ue).delete(t.id), (e = n(this, yr)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Va) && t.annotationElementId && n(this, H).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, H).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, H).addDeletedAnnotationElement(t.annotationElementId), lt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, H).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, wr)), n(this, H).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, hi) && (t._focusEventsAllowed = !1, f(this, hi, setTimeout(() => {
      f(this, hi, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, H)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = n(this, yr)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
    return (t = n(this, ut, ds)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, H).updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: i
    } = b(this, ut, zd).call(this), r = this.getNextId(), a = b(this, ut, Gd).call(this, {
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
    return await ((e = n(We, nn).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, H))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), r = b(this, ut, Gd).call(this, {
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
    this.createAndAddNewEditor(b(this, ut, zd).call(this), !0, t);
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
    } = Wt.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, sn) || (f(this, sn, !1), (i = n(this, ut, ds)) != null && i.isDrawer && n(this, ut, ds).supportMultipleDrawings))
      return;
    if (!n(this, Ua)) {
      f(this, Ua, !0);
      return;
    }
    const s = n(this, H).getMode();
    if (s === z.STAMP || s === z.SIGNATURE) {
      n(this, H).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    var i;
    if (n(this, H).getMode() === z.HIGHLIGHT && this.enableTextSelection(), n(this, sn)) {
      f(this, sn, !1);
      return;
    }
    const {
      isMac: e
    } = Wt.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (f(this, sn, !0), (i = n(this, ut, ds)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, H).getActive();
    f(this, Ua, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), n(this, ns)) {
      n(this, ut, ds).startDrawing(this, n(this, H), !1, t);
      return;
    }
    n(this, H).setCurrentDrawingSession(this), f(this, ns, new AbortController());
    const e = n(this, H).combinedSignal(n(this, ns));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (f(this, ci, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, ut, ds).startDrawing(this, n(this, H), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && f(this, ci, e);
      return;
    }
    n(this, ci) && setTimeout(() => {
      var e;
      (e = n(this, ci)) == null || e.focus(), f(this, ci, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, ns) ? (n(this, H).setCurrentDrawingSession(null), n(this, ns).abort(), f(this, ns, null), f(this, ci, null), n(this, ut, ds).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, H).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, ns) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, ns) && n(this, ut, ds).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, H).getActive()) == null ? void 0 : t.parent) === this && (n(this, H).commitOrRemove(), n(this, H).setActiveEditor(null)), n(this, hi) && (clearTimeout(n(this, hi)), f(this, hi, null));
    for (const s of n(this, Ue).values())
      (e = n(this, yr)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, n(this, Ue).clear(), n(this, H).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, _r(this.div, t);
    for (const e of n(this, H).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, H).commitOrRemove(), b(this, ut, Nh).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, _r(this.div, {
      rotation: s
    }), e !== s)
      for (const i of n(this, Ue).values())
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
yr = new WeakMap(), Ua = new WeakMap(), Ts = new WeakMap(), en = new WeakMap(), hi = new WeakMap(), Ue = new WeakMap(), sn = new WeakMap(), Va = new WeakMap(), wr = new WeakMap(), ns = new WeakMap(), ci = new WeakMap(), Jt = new WeakMap(), di = new WeakMap(), H = new WeakMap(), nn = new WeakMap(), ut = new WeakSet(), Hp = function(t) {
  n(this, H).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, Jt).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, Jt).div.contains(e)) {
    const {
      isMac: s
    } = Wt.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    n(this, H).showAllEditors("highlight", !0, !0), n(this, Jt).div.classList.add("free"), this.toggleDrawing(), Vh.startHighlighting(this, n(this, H).direction === "ltr", {
      target: n(this, Jt).div,
      x: t.x,
      y: t.y
    }), n(this, Jt).div.addEventListener("pointerup", () => {
      n(this, Jt).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, H)._signal
    }), t.preventDefault();
  }
}, ds = function() {
  return n(We, nn).get(n(this, H).getMode());
}, Gd = function(t) {
  const e = n(this, ut, ds);
  return e ? new e.prototype.constructor(t) : null;
}, zd = function() {
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
}, Nh = function() {
  for (const t of n(this, Ue).values())
    t.isEmpty() && t.remove();
}, R(We, "_initialized", !1), m(We, nn, new Map([Ad, Md, Bd, Vh, Od].map((t) => [t._editorType, t])));
let $d = We;
var rs, re, vr, jl, cc, $p, Ps, Vd, Gp, jd;
const Tt = class Tt {
  constructor({
    pageIndex: t
  }) {
    m(this, Ps);
    m(this, rs, null);
    m(this, re, /* @__PURE__ */ new Map());
    m(this, vr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, rs)) {
      f(this, rs, t);
      return;
    }
    if (n(this, rs) !== t) {
      if (n(this, re).size > 0)
        for (const e of n(this, re).values())
          e.remove(), t.append(e);
      f(this, rs, t);
    }
  }
  static get _svgFactory() {
    return X(this, "_svgFactory", new Gh());
  }
  draw(t, e = !1, s = !1) {
    const i = te(Tt, jl)._++, r = b(this, Ps, Vd).call(this), a = Tt._svgFactory.createElement("defs");
    r.append(a);
    const o = Tt._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, vr).set(i, o);
    const h = s ? b(this, Ps, Gp).call(this, a, l) : null, c = Tt._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, re).set(i, r), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = te(Tt, jl)._++, i = b(this, Ps, Vd).call(this), r = Tt._svgFactory.createElement("defs");
    i.append(r);
    const a = Tt._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Tt._svgFactory.createElement("mask");
      r.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const p = Tt._svgFactory.createElement("rect");
      u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const g = Tt._svgFactory.createElement("use");
      u.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const h = Tt._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, re).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, vr).delete(t), this.updateProperties(t, e);
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
    } = e, o = typeof t == "number" ? n(this, re).get(t) : t;
    if (o) {
      if (s && b(this, Ps, jd).call(this, o, s), i && b(l = Tt, cc, $p).call(l, o, i), r) {
        const {
          classList: h
        } = o;
        for (const [c, u] of Object.entries(r))
          h.toggle(c, u);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        b(this, Ps, jd).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = n(this, re).get(t);
    s && (n(e, rs).append(s), n(this, re).delete(t), n(e, re).set(t, s));
  }
  remove(t) {
    n(this, vr).delete(t), n(this, rs) !== null && (n(this, re).get(t).remove(), n(this, re).delete(t));
  }
  destroy() {
    f(this, rs, null);
    for (const t of n(this, re).values())
      t.remove();
    n(this, re).clear(), n(this, vr).clear();
  }
};
rs = new WeakMap(), re = new WeakMap(), vr = new WeakMap(), jl = new WeakMap(), cc = new WeakSet(), $p = function(t, [e, s, i, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, Ps = new WeakSet(), Vd = function() {
  const t = Tt._svgFactory.create(1, 1, !0);
  return n(this, rs).append(t), t.setAttribute("aria-hidden", !0), t;
}, Gp = function(t, e) {
  const s = Tt._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Tt._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, jd = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, m(Tt, cc), m(Tt, jl, 0);
let Ud = Tt;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: wd
};
globalThis.pdfjsLib = {
  AbortException: rn,
  AnnotationEditorLayer: $d,
  AnnotationEditorParamsType: Y,
  AnnotationEditorType: z,
  AnnotationEditorUIManager: Sr,
  AnnotationLayer: gd,
  AnnotationMode: wi,
  AnnotationType: _t,
  build: mm,
  ColorPicker: Uh,
  createValidAbsoluteUrl: ku,
  DOMSVGFactory: Gh,
  DrawLayer: Ud,
  FeatureTest: Wt,
  fetchData: ql,
  getDocument: cm,
  getFilenameFromUrl: og,
  getPdfFilenameFromUrl: lg,
  getUuid: Fu,
  getXfaPageViewport: cg,
  GlobalWorkerOptions: ui,
  ImageKind: ah,
  InvalidPDFException: Pc,
  isDataScheme: pc,
  isPdfFile: Xd,
  isValidExplicitDest: vg,
  MathClamp: oe,
  noContextMenu: os,
  normalizeUnicode: ng,
  OPS: Oh,
  OutputScale: Rs,
  PasswordResponses: Yp,
  PDFDataRangeTransport: Bf,
  PDFDateString: Yd,
  PDFWorker: Ao,
  PermissionFlag: Xp,
  PixelsPerInch: an,
  RenderingCancelledException: qd,
  ResponseException: Bh,
  setLayerDimensions: _r,
  shadow: X,
  SignatureExtractor: fi,
  stopEvent: St,
  SupportedImageMimeTypes: Mc,
  TextLayer: mo,
  TouchManager: $h,
  updateUrlHash: Lu,
  Util: $,
  VerbosityLevel: dc,
  version: gm,
  XfaLayer: Gf
};
Promise.withResolvers ?? (Promise.withResolvers = function() {
  let d, t;
  return { promise: new Promise((s, i) => {
    d = s, t = i;
  }), resolve: d, reject: t };
});
export {
  rn as AbortException,
  $d as AnnotationEditorLayer,
  Y as AnnotationEditorParamsType,
  z as AnnotationEditorType,
  Sr as AnnotationEditorUIManager,
  gd as AnnotationLayer,
  wi as AnnotationMode,
  _t as AnnotationType,
  Uh as ColorPicker,
  Gh as DOMSVGFactory,
  Ud as DrawLayer,
  Wt as FeatureTest,
  ui as GlobalWorkerOptions,
  ah as ImageKind,
  Pc as InvalidPDFException,
  oe as MathClamp,
  Oh as OPS,
  Rs as OutputScale,
  Bf as PDFDataRangeTransport,
  Yd as PDFDateString,
  Ao as PDFWorker,
  Yp as PasswordResponses,
  Xp as PermissionFlag,
  an as PixelsPerInch,
  qd as RenderingCancelledException,
  Bh as ResponseException,
  fi as SignatureExtractor,
  Mc as SupportedImageMimeTypes,
  mo as TextLayer,
  $h as TouchManager,
  $ as Util,
  dc as VerbosityLevel,
  Gf as XfaLayer,
  mm as build,
  ku as createValidAbsoluteUrl,
  ql as fetchData,
  cm as getDocument,
  og as getFilenameFromUrl,
  lg as getPdfFilenameFromUrl,
  Fu as getUuid,
  cg as getXfaPageViewport,
  pc as isDataScheme,
  Xd as isPdfFile,
  vg as isValidExplicitDest,
  os as noContextMenu,
  ng as normalizeUnicode,
  _r as setLayerDimensions,
  X as shadow,
  St as stopEvent,
  Lu as updateUrlHash,
  gm as version
};
