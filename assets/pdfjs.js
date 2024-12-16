var Ef = Object.defineProperty;
var nd = (d) => {
  throw TypeError(d);
};
var Sf = (d, t, e) => t in d ? Ef(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var N = (d, t, e) => Sf(d, typeof t != "symbol" ? t + "" : t, e), yh = (d, t, e) => t.has(d) || nd("Cannot " + e);
var r = (d, t, e) => (yh(d, t, "read from private field"), e ? e.call(d) : t.get(d)), b = (d, t, e) => t.has(d) ? nd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), p = (d, t, e, s) => (yh(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), m = (d, t, e) => (yh(d, t, "access private method"), e);
var Kt = (d, t, e, s) => ({
  set _(i) {
    p(d, t, i, e);
  },
  get _() {
    return r(d, t, s);
  }
});
var Ia = {};
Ia.d = (d, t) => {
  for (var e in t)
    Ia.o(t, e) && !Ia.o(d, e) && Object.defineProperty(d, e, { enumerable: !0, get: t[e] });
};
Ia.o = (d, t) => Object.prototype.hasOwnProperty.call(d, t);
var B = globalThis.pdfjsLib = {};
Ia.d(B, {
  AbortException: () => (
    /* reexport */
    Xn
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    Nc
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    X
  ),
  AnnotationEditorType: () => (
    /* reexport */
    z
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    jn
  ),
  AnnotationLayer: () => (
    /* reexport */
    _g
  ),
  AnnotationMode: () => (
    /* reexport */
    li
  ),
  ColorPicker: () => (
    /* reexport */
    Ul
  ),
  DOMSVGFactory: () => (
    /* reexport */
    Kc
  ),
  DrawLayer: () => (
    /* reexport */
    Bc
  ),
  FeatureTest: () => (
    /* reexport */
    se
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    ii
  ),
  ImageKind: () => (
    /* reexport */
    ul
  ),
  InvalidPDFException: () => (
    /* reexport */
    Cd
  ),
  MissingPDFException: () => (
    /* reexport */
    il
  ),
  OPS: () => (
    /* reexport */
    Ue
  ),
  OutputScale: () => (
    /* reexport */
    Mh
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    vu
  ),
  PDFDateString: () => (
    /* reexport */
    Wc
  ),
  PDFWorker: () => (
    /* reexport */
    lr
  ),
  PasswordResponses: () => (
    /* reexport */
    Rf
  ),
  PermissionFlag: () => (
    /* reexport */
    Tf
  ),
  PixelsPerInch: () => (
    /* reexport */
    Oi
  ),
  RenderingCancelledException: () => (
    /* reexport */
    Vc
  ),
  TextLayer: () => (
    /* reexport */
    Fa
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    ph
  ),
  Util: () => (
    /* reexport */
    I
  ),
  VerbosityLevel: () => (
    /* reexport */
    dh
  ),
  XfaLayer: () => (
    /* reexport */
    Su
  ),
  build: () => (
    /* reexport */
    Zp
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    Lf
  ),
  fetchData: () => (
    /* reexport */
    mh
  ),
  getDocument: () => (
    /* reexport */
    Vp
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Gf
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    zf
  ),
  getXfaPageViewport: () => (
    /* reexport */
    Uf
  ),
  isDataScheme: () => (
    /* reexport */
    bh
  ),
  isPdfFile: () => (
    /* reexport */
    jc
  ),
  noContextMenu: () => (
    /* reexport */
    rs
  ),
  normalizeUnicode: () => (
    /* reexport */
    Hf
  ),
  setLayerDimensions: () => (
    /* reexport */
    Vn
  ),
  shadow: () => (
    /* reexport */
    j
  ),
  stopEvent: () => (
    /* reexport */
    is
  ),
  version: () => (
    /* reexport */
    Jp
  )
});
const ee = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), xd = [1, 0, 0, 1, 0, 0], Th = [1e-3, 0, 0, 1e-3, 0, 0], xf = 1e7, wh = 1.35, Ee = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, li = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Cf = "pdfjs_internal_editor_", z = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, X = {
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
}, Tf = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Gt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, ul = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, St = {
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
}, pa = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, dh = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Ue = {
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
  setFillTransparent: 93
}, Rf = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let uh = dh.WARNINGS;
function Pf(d) {
  Number.isInteger(d) && (uh = d);
}
function kf() {
  return uh;
}
function fh(d) {
  uh >= dh.INFOS && console.log(`Info: ${d}`);
}
function U(d) {
  uh >= dh.WARNINGS && console.log(`Warning: ${d}`);
}
function it(d) {
  throw new Error(d);
}
function wt(d, t) {
  d || it(t);
}
function Mf(d) {
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
function Lf(d, t = null, e = null) {
  if (!d)
    return null;
  try {
    if (e && typeof d == "string") {
      if (e.addDefaultProtocol && d.startsWith("www.")) {
        const i = d.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
      }
      if (e.tryConvertEncoding)
        try {
          d = Of(d);
        } catch {
        }
    }
    const s = t ? new URL(d, t) : new URL(d);
    if (Mf(s))
      return s;
  } catch {
  }
  return null;
}
function j(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const $i = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class Rh extends $i {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Ph extends $i {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class Cd extends $i {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class il extends $i {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class ph extends $i {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class If extends $i {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Xn extends $i {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Td(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && it("Invalid argument for bytesToString");
  const t = d.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, d);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const n = Math.min(i + e, t), a = d.subarray(i, n);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function gh(d) {
  typeof d != "string" && it("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function Df(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function zc(d) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of d)
    t[e] = s;
  return t;
}
function Ff() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function Nf() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class se {
  static get isLittleEndian() {
    return j(this, "isLittleEndian", Ff());
  }
  static get isEvalSupported() {
    return j(this, "isEvalSupported", Nf());
  }
  static get isOffscreenCanvasSupported() {
    return j(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return j(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? j(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
    }) : j(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return j(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const vh = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var ni, fl, kh;
class I {
  static makeHexColor(t, e, s) {
    return `#${vh[t]}${vh[e]}${vh[s]}`;
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [s, i];
  }
  static applyInverseTransform(t, e) {
    const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, n = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
    return [i, n];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), n = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
    return [Math.min(s[0], i[0], n[0], a[0]), Math.min(s[1], i[1], n[1], a[1]), Math.max(s[0], i[0], n[0], a[0]), Math.max(s[1], i[1], n[1], a[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], n = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], o = (s + a) / 2, l = Math.sqrt((s + a) ** 2 - 4 * (s * a - n * i)) / 2, h = o + l || 1, c = o - l || 1;
    return [Math.sqrt(h), Math.sqrt(c)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return n > a ? null : [s, n, i, a];
  }
  static bezierBoundingBox(t, e, s, i, n, a, o, l, h) {
    return h ? (h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l)) : h = [Math.min(t, o), Math.min(e, l), Math.max(t, o), Math.max(e, l)], m(this, ni, kh).call(this, t, s, n, o, e, i, a, l, 3 * (-t + 3 * (s - n) + o), 6 * (t - 2 * s + n), 3 * (s - t), h), m(this, ni, kh).call(this, t, s, n, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h), h;
  }
}
ni = new WeakSet(), fl = function(t, e, s, i, n, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, f = h * h, g = f * h, A = u * (u * (u * t + 3 * h * e) + 3 * f * s) + g * i, _ = u * (u * (u * n + 3 * h * a) + 3 * f * o) + g * l;
  c[0] = Math.min(c[0], A), c[1] = Math.min(c[1], _), c[2] = Math.max(c[2], A), c[3] = Math.max(c[3], _);
}, kh = function(t, e, s, i, n, a, o, l, h, c, u, f) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && m(this, ni, fl).call(this, t, e, s, i, n, a, o, l, -u / c, f);
    return;
  }
  const g = c ** 2 - 4 * u * h;
  if (g < 0)
    return;
  const A = Math.sqrt(g), _ = 2 * h;
  m(this, ni, fl).call(this, t, e, s, i, n, a, o, l, (-c + A) / _, f), m(this, ni, fl).call(this, t, e, s, i, n, a, o, l, (-c - A) / _, f);
}, b(I, ni);
function Of(d) {
  return decodeURIComponent(escape(d));
}
let Eh = null, rd = null;
function Hf(d) {
  return Eh || (Eh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, rd = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Eh, (t, e, s) => e ? e.normalize("NFKC") : rd.get(s));
}
function Bf() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), Td(d);
}
const Uc = "pdfjs_internal_id_", Ps = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
function $f(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(Td(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
const ks = "http://www.w3.org/2000/svg", Vi = class Vi {
};
N(Vi, "CSS", 96), N(Vi, "PDF", 72), N(Vi, "PDF_TO_CSS_UNITS", Vi.CSS / Vi.PDF);
let Oi = Vi;
async function mh(d, t = "text") {
  if (ba(d, document.baseURI)) {
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
class nl {
  constructor({
    viewBox: t,
    scale: e,
    rotation: s,
    offsetX: i = 0,
    offsetY: n = 0,
    dontFlip: a = !1
  }) {
    this.viewBox = t, this.scale = e, this.rotation = s, this.offsetX = i, this.offsetY = n;
    const o = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2;
    let h, c, u, f;
    switch (s %= 360, s < 0 && (s += 360), s) {
      case 180:
        h = -1, c = 0, u = 0, f = 1;
        break;
      case 90:
        h = 0, c = 1, u = 1, f = 0;
        break;
      case 270:
        h = 0, c = -1, u = -1, f = 0;
        break;
      case 0:
        h = 1, c = 0, u = 0, f = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    a && (u = -u, f = -f);
    let g, A, _, w;
    h === 0 ? (g = Math.abs(l - t[1]) * e + i, A = Math.abs(o - t[0]) * e + n, _ = (t[3] - t[1]) * e, w = (t[2] - t[0]) * e) : (g = Math.abs(o - t[0]) * e + i, A = Math.abs(l - t[1]) * e + n, _ = (t[2] - t[0]) * e, w = (t[3] - t[1]) * e), this.transform = [h * e, c * e, u * e, f * e, g - h * e * o - u * e * l, A - c * e * o - f * e * l], this.width = _, this.height = w;
  }
  get rawDims() {
    const {
      viewBox: t
    } = this;
    return j(this, "rawDims", {
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
    dontFlip: n = !1
  } = {}) {
    return new nl({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  convertToViewportPoint(t, e) {
    return I.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = I.applyTransform([t[0], t[1]], this.transform), s = I.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    return I.applyInverseTransform([t, e], this.transform);
  }
}
class Vc extends $i {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function bh(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function jc(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function Gf(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function zf(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (bh(d))
    return U('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(d);
  let n = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (n && (n = n[0], n.includes("%")))
    try {
      n = s.exec(decodeURIComponent(n))[0];
    } catch {
    }
  return n || t;
}
class ad {
  constructor() {
    N(this, "started", /* @__PURE__ */ Object.create(null));
    N(this, "times", []);
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
      end: n
    } of this.times)
      t.push(`${s.padEnd(e)} ${n - i}ms
`);
    return t.join("");
  }
}
function ba(d, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(d, t) : new URL(d);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function rs(d) {
  d.preventDefault();
}
function is(d) {
  d.preventDefault(), d.stopPropagation();
}
function od(d) {
  console.log("Deprecated API usage: " + d);
}
var Oa;
class Wc {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    r(this, Oa) || p(this, Oa, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = r(this, Oa).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let n = parseInt(e[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
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
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (a += c, o += u) : h === "+" && (a -= c, o -= u), new Date(Date.UTC(s, i, n, a, o, l));
  }
}
Oa = new WeakMap(), b(Wc, Oa);
function Uf(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new nl({
    viewBox: n,
    scale: t,
    rotation: e
  });
}
function qc(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (U(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function Vf(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, qc(s));
  }
  t.remove();
}
function ht(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: a
  } = d.getTransform();
  return [t, e, s, i, n, a];
}
function os(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: a
  } = d.getTransform().invertSelf();
  return [t, e, s, i, n, a];
}
function Vn(d, t, e = !1, s = !0) {
  if (t instanceof nl) {
    const {
      pageWidth: i,
      pageHeight: n
    } = t.rawDims, {
      style: a
    } = d, o = se.isCSSRoundSupported, l = `var(--scale-factor) * ${i}px`, h = `var(--scale-factor) * ${n}px`, c = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class Mh {
  constructor() {
    const t = window.devicePixelRatio || 1;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
var hi, Wi, Ve, qi, Ha, Ba, Wl, Rd, ie, Pd, kd, pl, Md, Ih;
const Is = class Is {
  constructor(t) {
    b(this, ie);
    b(this, hi, null);
    b(this, Wi, null);
    b(this, Ve);
    b(this, qi, null);
    b(this, Ha, null);
    p(this, Ve, t), r(Is, Ba) || p(Is, Ba, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = p(this, hi, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = r(this, Ve)._uiManager._signal;
    t.addEventListener("contextmenu", rs, {
      signal: e
    }), t.addEventListener("pointerdown", m(Is, Wl, Rd), {
      signal: e
    });
    const s = p(this, qi, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = r(this, Ve).toolbarPosition;
    if (i) {
      const {
        style: n
      } = t, a = r(this, Ve)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * a}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return m(this, ie, Md).call(this), t;
  }
  get div() {
    return r(this, hi);
  }
  hide() {
    var t;
    r(this, hi).classList.add("hidden"), (t = r(this, Wi)) == null || t.hideDropdown();
  }
  show() {
    var t;
    r(this, hi).classList.remove("hidden"), (t = r(this, Ha)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    m(this, ie, pl).call(this, e), r(this, qi).prepend(e, r(this, ie, Ih)), p(this, Ha, t);
  }
  addColorPicker(t) {
    p(this, Wi, t);
    const e = t.renderButton();
    m(this, ie, pl).call(this, e), r(this, qi).prepend(e, r(this, ie, Ih));
  }
  remove() {
    var t;
    r(this, hi).remove(), (t = r(this, Wi)) == null || t.destroy(), p(this, Wi, null);
  }
};
hi = new WeakMap(), Wi = new WeakMap(), Ve = new WeakMap(), qi = new WeakMap(), Ha = new WeakMap(), Ba = new WeakMap(), Wl = new WeakSet(), Rd = function(t) {
  t.stopPropagation();
}, ie = new WeakSet(), Pd = function(t) {
  r(this, Ve)._focusEventsAllowed = !1, is(t);
}, kd = function(t) {
  r(this, Ve)._focusEventsAllowed = !0, is(t);
}, pl = function(t) {
  const e = r(this, Ve)._uiManager._signal;
  t.addEventListener("focusin", m(this, ie, Pd).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", m(this, ie, kd).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", rs, {
    signal: e
  });
}, Md = function() {
  const {
    editorType: t,
    _uiManager: e
  } = r(this, Ve), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", r(Is, Ba)[t]), m(this, ie, pl).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), r(this, qi).append(s);
}, Ih = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, b(Is, Wl), b(Is, Ba, null);
let Lh = Is;
var $a, Xi, Yi, Hi, Ld, Id, Dd;
class jf {
  constructor(t) {
    b(this, Hi);
    b(this, $a, null);
    b(this, Xi, null);
    b(this, Yi);
    p(this, Yi, t);
  }
  show(t, e, s) {
    const [i, n] = m(this, Hi, Id).call(this, e, s), {
      style: a
    } = r(this, Xi) || p(this, Xi, m(this, Hi, Ld).call(this));
    t.append(r(this, Xi)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    r(this, Xi).remove();
  }
}
$a = new WeakMap(), Xi = new WeakMap(), Yi = new WeakMap(), Hi = new WeakSet(), Ld = function() {
  const t = p(this, Xi, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", rs, {
    signal: r(this, Yi)._signal
  });
  const e = p(this, $a, document.createElement("div"));
  return e.className = "buttons", t.append(e), m(this, Hi, Dd).call(this), t;
}, Id = function(t, e) {
  let s = 0, i = 0;
  for (const n of t) {
    const a = n.y + n.height;
    if (a < s)
      continue;
    const o = n.x + (e ? n.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, Dd = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = r(this, Yi)._signal;
  t.addEventListener("contextmenu", rs, {
    signal: s
  }), t.addEventListener("click", () => {
    r(this, Yi).highlightSelection("floating_button");
  }, {
    signal: s
  }), r(this, $a).append(t);
};
function $l(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var ql;
class Wf {
  constructor() {
    b(this, ql, 0);
  }
  get id() {
    return `${Cf}${Kt(this, ql)._++}`;
  }
}
ql = new WeakMap();
var hr, Ga, Vt, cr, gl;
const Jc = class Jc {
  constructor() {
    b(this, cr);
    b(this, hr, Bf());
    b(this, Ga, 0);
    b(this, Vt, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const n = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return j(this, "_isSVGFittingCanvas", n);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: n
    } = t;
    return m(this, cr, gl).call(this, `${e}_${s}_${i}_${n}`, t);
  }
  async getFromUrl(t) {
    return m(this, cr, gl).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return m(this, cr, gl).call(this, t, s);
  }
  async getFromId(t) {
    r(this, Vt) || p(this, Vt, /* @__PURE__ */ new Map());
    const e = r(this, Vt).get(t);
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
    r(this, Vt) || p(this, Vt, /* @__PURE__ */ new Map());
    let s = r(this, Vt).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${r(this, hr)}_${Kt(this, Ga)._++}`,
      refCounter: 1,
      isSvg: !1
    }, r(this, Vt).set(t, s), r(this, Vt).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = r(this, Vt).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    r(this, Vt) || p(this, Vt, /* @__PURE__ */ new Map());
    const e = r(this, Vt).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const n = new OffscreenCanvas(s.width, s.height);
      n.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = n.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${r(this, hr)}_`);
  }
};
hr = new WeakMap(), Ga = new WeakMap(), Vt = new WeakMap(), cr = new WeakSet(), gl = async function(t, e) {
  r(this, Vt) || p(this, Vt, /* @__PURE__ */ new Map());
  let s = r(this, Vt).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${r(this, hr)}_${Kt(this, Ga)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await mh(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const n = Jc._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, a.onload = async () => {
          const u = s.svgUrl = a.result;
          o.src = await n ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    U(i), s = null;
  }
  return r(this, Vt).set(t, s), s && r(this, Vt).set(s.id, s), s;
};
let Dh = Jc;
var bt, ci, za, dt;
class qf {
  constructor(t = 128) {
    b(this, bt, []);
    b(this, ci, !1);
    b(this, za);
    b(this, dt, -1);
    p(this, za, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: n = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), r(this, ci))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: n
    };
    if (r(this, dt) === -1) {
      r(this, bt).length > 0 && (r(this, bt).length = 0), p(this, dt, 0), r(this, bt).push(l);
      return;
    }
    if (a && r(this, bt)[r(this, dt)].type === n) {
      o && (l.undo = r(this, bt)[r(this, dt)].undo), r(this, bt)[r(this, dt)] = l;
      return;
    }
    const h = r(this, dt) + 1;
    h === r(this, za) ? r(this, bt).splice(0, 1) : (p(this, dt, h), h < r(this, bt).length && r(this, bt).splice(h)), r(this, bt).push(l);
  }
  undo() {
    if (r(this, dt) === -1)
      return;
    p(this, ci, !0);
    const {
      undo: t,
      post: e
    } = r(this, bt)[r(this, dt)];
    t(), e == null || e(), p(this, ci, !1), p(this, dt, r(this, dt) - 1);
  }
  redo() {
    if (r(this, dt) < r(this, bt).length - 1) {
      p(this, dt, r(this, dt) + 1), p(this, ci, !0);
      const {
        cmd: t,
        post: e
      } = r(this, bt)[r(this, dt)];
      t(), e == null || e(), p(this, ci, !1);
    }
  }
  hasSomethingToUndo() {
    return r(this, dt) !== -1;
  }
  hasSomethingToRedo() {
    return r(this, dt) < r(this, bt).length - 1;
  }
  cleanType(t) {
    if (r(this, dt) !== -1) {
      for (let e = r(this, dt); e >= 0; e--)
        if (r(this, bt)[e].type !== t) {
          r(this, bt).splice(e + 1, r(this, dt) - e), p(this, dt, e);
          return;
        }
      r(this, bt).length = 0, p(this, dt, -1);
    }
  }
  destroy() {
    p(this, bt, null);
  }
}
bt = new WeakMap(), ci = new WeakMap(), za = new WeakMap(), dt = new WeakMap();
var Xl, Fd;
class rl {
  constructor(t) {
    b(this, Xl);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = se.platform;
    for (const [s, i, n = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: n
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: n
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(m(this, Xl, Fd).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: n = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), n || is(e));
  }
}
Xl = new WeakSet(), Fd = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Yl = class Yl {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Vf(t), j(this, "_colors", t);
  }
  convert(t) {
    const e = qc(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((n, a) => n === e[a]))
        return Yl._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? I.makeHexColor(...e) : t;
  }
};
N(Yl, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Fh = Yl;
var dr, fe, Ct, Dt, ur, Fs, fr, ke, di, Ki, pr, Qi, cs, je, Ji, Ua, Va, gr, ja, ds, ui, mr, fi, us, Kl, pi, Wa, gi, Zi, qa, Xa, Pt, tt, Ns, tn, Ya, Ka, mi, fs, Os, Qa, Me, R, ml, Nh, Nd, Od, bl, Hd, Bd, $d, Oh, Gd, Hh, Bh, zd, Qt, Ms, Ud, Vd, $h, jd, Aa, Gh;
const rr = class rr {
  constructor(t, e, s, i, n, a, o, l, h, c, u, f) {
    b(this, R);
    b(this, dr, new AbortController());
    b(this, fe, null);
    b(this, Ct, /* @__PURE__ */ new Map());
    b(this, Dt, /* @__PURE__ */ new Map());
    b(this, ur, null);
    b(this, Fs, null);
    b(this, fr, null);
    b(this, ke, new qf());
    b(this, di, null);
    b(this, Ki, null);
    b(this, pr, 0);
    b(this, Qi, /* @__PURE__ */ new Set());
    b(this, cs, null);
    b(this, je, null);
    b(this, Ji, /* @__PURE__ */ new Set());
    N(this, "_editorUndoBar", null);
    b(this, Ua, !1);
    b(this, Va, !1);
    b(this, gr, !1);
    b(this, ja, null);
    b(this, ds, null);
    b(this, ui, null);
    b(this, mr, null);
    b(this, fi, !1);
    b(this, us, null);
    b(this, Kl, new Wf());
    b(this, pi, !1);
    b(this, Wa, !1);
    b(this, gi, null);
    b(this, Zi, null);
    b(this, qa, null);
    b(this, Xa, null);
    b(this, Pt, z.NONE);
    b(this, tt, /* @__PURE__ */ new Set());
    b(this, Ns, null);
    b(this, tn, null);
    b(this, Ya, null);
    b(this, Ka, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    b(this, mi, [0, 0]);
    b(this, fs, null);
    b(this, Os, null);
    b(this, Qa, null);
    b(this, Me, null);
    const g = this._signal = r(this, dr).signal;
    p(this, Os, t), p(this, Qa, e), p(this, ur, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: g
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: g
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: g
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: g
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: g
    }), i._on("switchannotationeditorparams", (A) => this.updateParams(A.type, A.value), {
      signal: g
    }), m(this, R, Hd).call(this), m(this, R, zd).call(this), m(this, R, Oh).call(this), p(this, Fs, n.annotationStorage), p(this, ja, n.filterFactory), p(this, tn, a), p(this, mr, o || null), p(this, Ua, l), p(this, Va, h), p(this, gr, c), p(this, Xa, u || null), this.viewParameters = {
      realScale: Oi.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = f || null;
  }
  static get _keyboardManager() {
    const t = rr.prototype, e = (a) => r(a, Os).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
    return j(this, "_keyboardManager", new rl([[["ctrl+a", "mac+meta+a"], t.selectAll, {
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
      }) => !(o instanceof HTMLButtonElement) && r(a, Os).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && r(a, Os).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-n, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [n, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -n],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, n],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i, n;
    (t = r(this, Me)) == null || t.resolve(), p(this, Me, null), (e = r(this, dr)) == null || e.abort(), p(this, dr, null), this._signal = null;
    for (const a of r(this, Dt).values())
      a.destroy();
    r(this, Dt).clear(), r(this, Ct).clear(), r(this, Ji).clear(), p(this, fe, null), r(this, tt).clear(), r(this, ke).destroy(), (s = r(this, ur)) == null || s.destroy(), (i = r(this, us)) == null || i.hide(), p(this, us, null), r(this, ds) && (clearTimeout(r(this, ds)), p(this, ds, null)), r(this, fs) && (clearTimeout(r(this, fs)), p(this, fs, null)), (n = this._editorUndoBar) == null || n.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return r(this, Xa);
  }
  get useNewAltTextFlow() {
    return r(this, Va);
  }
  get useNewAltTextWhenAddingImage() {
    return r(this, gr);
  }
  get hcmFilter() {
    return j(this, "hcmFilter", r(this, tn) ? r(this, ja).addHCMFilter(r(this, tn).foreground, r(this, tn).background) : "none");
  }
  get direction() {
    return j(this, "direction", getComputedStyle(r(this, Os)).direction);
  }
  get highlightColors() {
    return j(this, "highlightColors", r(this, mr) ? new Map(r(this, mr).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return j(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), p(this, Ki, t);
  }
  setMainHighlightColorPicker(t) {
    p(this, qa, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = r(this, ur)) == null || s.editAltText(this, t, e);
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
        p(this, gr, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    p(this, pr, t - 1);
  }
  focusMainContainer() {
    r(this, Os).focus();
  }
  findParent(t, e) {
    for (const s of r(this, Dt).values()) {
      const {
        x: i,
        y: n,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= n && e <= n + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    r(this, Qa).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    r(this, Ji).add(t);
  }
  removeShouldRescale(t) {
    r(this, Ji).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Oi.PDF_TO_CSS_UNITS;
    for (const s of r(this, Ji))
      s.onScaleChanging();
    (e = r(this, Ki)) == null || e.onScaleChanging();
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
      focusNode: n,
      focusOffset: a
    } = e, o = e.toString(), h = m(this, R, ml).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
    if (!c)
      return;
    e.empty();
    const u = m(this, R, Nh).call(this, h), f = r(this, Pt) === z.NONE, g = () => {
      u == null || u.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: c,
        anchorNode: s,
        anchorOffset: i,
        focusNode: n,
        focusOffset: a,
        text: o
      }), f && this.showAllEditors("highlight", !0, !0);
    };
    if (f) {
      this.switchToMode(z.HIGHLIGHT, g);
      return;
    }
    g();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && r(this, Fs) && !r(this, Fs).has(t.id) && r(this, Fs).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, r(this, fi) && (p(this, fi, !1), m(this, R, bl).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of r(this, tt))
      if (e.div.contains(t)) {
        p(this, Zi, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!r(this, Zi))
      return;
    const [t, e] = r(this, Zi);
    p(this, Zi, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    m(this, R, Oh).call(this), m(this, R, Hh).call(this);
  }
  removeEditListeners() {
    m(this, R, Gd).call(this), m(this, R, Bh).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of r(this, je))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of r(this, je))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = r(this, fe)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of r(this, tt)) {
      const n = i.serialize(!0);
      n && e.push(n);
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
    for (const n of e.items)
      for (const a of r(this, je))
        if (a.isHandlingMimeForPasting(n.type)) {
          a.paste(n, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (n) {
      U(`paste: "${n.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const n = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        n.push(h);
      }
      const a = () => {
        for (const l of n)
          m(this, R, $h).call(this, l);
        m(this, R, Gh).call(this, n);
      }, o = () => {
        for (const l of n)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (n) {
      U(`paste: "${n.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), r(this, Pt) !== z.NONE && !this.isEditorHandlingKeyboard && rr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, r(this, fi) && (p(this, fi, !1), m(this, R, bl).call(this, "main_toolbar")));
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
    t ? (m(this, R, Bd).call(this), m(this, R, Hh).call(this), m(this, R, Qt).call(this, {
      isEditing: r(this, Pt) !== z.NONE,
      isEmpty: m(this, R, Aa).call(this),
      hasSomethingToUndo: r(this, ke).hasSomethingToUndo(),
      hasSomethingToRedo: r(this, ke).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (m(this, R, $d).call(this), m(this, R, Bh).call(this), m(this, R, Qt).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!r(this, je)) {
      p(this, je, t);
      for (const e of r(this, je))
        m(this, R, Ms).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return r(this, Kl).id;
  }
  get currentLayer() {
    return r(this, Dt).get(r(this, pr));
  }
  getLayer(t) {
    return r(this, Dt).get(t);
  }
  get currentPageIndex() {
    return r(this, pr);
  }
  addLayer(t) {
    r(this, Dt).set(t.pageIndex, t), r(this, pi) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    r(this, Dt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    var i;
    if (r(this, Pt) !== t && !(r(this, Me) && (await r(this, Me).promise, !r(this, Me)))) {
      if (p(this, Me, Promise.withResolvers()), p(this, Pt, t), t === z.NONE) {
        this.setEditingState(!1), m(this, R, Vd).call(this), (i = this._editorUndoBar) == null || i.hide(), r(this, Me).resolve();
        return;
      }
      this.setEditingState(!0), await m(this, R, Ud).call(this), this.unselectAll();
      for (const n of r(this, Dt).values())
        n.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), r(this, Me).resolve();
        return;
      }
      for (const n of r(this, Ct).values())
        n.annotationElementId === e ? (this.setSelected(n), n.enterInEditMode()) : n.unselect();
      r(this, Me).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== r(this, Pt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var s;
    if (r(this, je)) {
      switch (t) {
        case X.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case X.HIGHLIGHT_DEFAULT_COLOR:
          (s = r(this, qa)) == null || s.updateColor(e);
          break;
        case X.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (r(this, Ya) || p(this, Ya, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of r(this, tt))
        i.updateParams(t, e);
      for (const i of r(this, je))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var n;
    for (const a of r(this, Ct).values())
      a.editorType === t && a.show(e);
    (((n = r(this, Ya)) == null ? void 0 : n.get(X.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && m(this, R, Ms).call(this, [[X.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (r(this, Wa) !== t) {
      p(this, Wa, t);
      for (const e of r(this, Dt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of r(this, Ct).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return r(this, Ct).get(t);
  }
  addEditor(t) {
    r(this, Ct).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (r(this, ds) && clearTimeout(r(this, ds)), p(this, ds, setTimeout(() => {
      this.focusMainContainer(), p(this, ds, null);
    }, 0))), r(this, Ct).delete(t.id), this.unselect(t), (!t.annotationElementId || !r(this, Qi).has(t.annotationElementId)) && ((e = r(this, Fs)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    r(this, Qi).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return r(this, Qi).has(t);
  }
  removeDeletedAnnotationElement(t) {
    r(this, Qi).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    r(this, fe) !== t && (p(this, fe, t), t && m(this, R, Ms).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    r(this, R, jd) === t && m(this, R, Ms).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    m(this, R, Ms).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (r(this, tt).has(t)) {
      r(this, tt).delete(t), t.unselect(), m(this, R, Qt).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    r(this, tt).add(t), t.select(), m(this, R, Ms).call(this, t.propertiesToUpdate), m(this, R, Qt).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    (e = r(this, Ki)) == null || e.commitOrRemove();
    for (const s of r(this, tt))
      s !== t && s.unselect();
    r(this, tt).clear(), r(this, tt).add(t), t.select(), m(this, R, Ms).call(this, t.propertiesToUpdate), m(this, R, Qt).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return r(this, tt).has(t);
  }
  get firstSelectedEditor() {
    return r(this, tt).values().next().value;
  }
  unselect(t) {
    t.unselect(), r(this, tt).delete(t), m(this, R, Qt).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return r(this, tt).size !== 0;
  }
  get isEnterHandled() {
    return r(this, tt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    r(this, ke).undo(), m(this, R, Qt).call(this, {
      hasSomethingToUndo: r(this, ke).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: m(this, R, Aa).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    r(this, ke).redo(), m(this, R, Qt).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: r(this, ke).hasSomethingToRedo(),
      isEmpty: m(this, R, Aa).call(this)
    });
  }
  addCommands(t) {
    r(this, ke).add(t), m(this, R, Qt).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: m(this, R, Aa).call(this)
    });
  }
  cleanUndoStack(t) {
    r(this, ke).cleanType(t);
  }
  delete() {
    var n;
    this.commitOrRemove();
    const t = (n = this.currentLayer) == null ? void 0 : n.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...r(this, tt)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        m(this, R, $h).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = r(this, fe)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return r(this, fe) || this.hasSelection;
  }
  selectAll() {
    for (const t of r(this, tt))
      t.commit();
    m(this, R, Gh).call(this, r(this, Ct).values());
  }
  unselectAll() {
    var t;
    if (!(r(this, fe) && (r(this, fe).commitOrRemove(), r(this, Pt) !== z.NONE)) && !((t = r(this, Ki)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of r(this, tt))
        e.unselect();
      r(this, tt).clear(), m(this, R, Qt).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    r(this, mi)[0] += t, r(this, mi)[1] += e;
    const [i, n] = r(this, mi), a = [...r(this, tt)], o = 1e3;
    r(this, fs) && clearTimeout(r(this, fs)), p(this, fs, setTimeout(() => {
      p(this, fs, null), r(this, mi)[0] = r(this, mi)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            r(this, Ct).has(l.id) && l.translateInPage(i, n);
        },
        undo: () => {
          for (const l of a)
            r(this, Ct).has(l.id) && l.translateInPage(-i, -n);
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), p(this, cs, /* @__PURE__ */ new Map());
      for (const t of r(this, tt))
        r(this, cs).set(t, {
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
    if (!r(this, cs))
      return !1;
    this.disableUserSelect(!1);
    const t = r(this, cs);
    p(this, cs, null);
    let e = !1;
    for (const [{
      x: i,
      y: n,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = n, o.newPageIndex = a, e || (e = i !== o.savedX || n !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, n, a, o) => {
      if (r(this, Ct).has(i.id)) {
        const l = r(this, Dt).get(o);
        l ? i._setParentAndPosition(l, n, a) : (i.pageIndex = o, i.x = n, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: n,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, n, a, o);
      },
      undo: () => {
        for (const [i, {
          savedX: n,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, n, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (r(this, cs))
      for (const s of r(this, cs).keys())
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
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || r(this, tt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return r(this, fe) === t;
  }
  getActive() {
    return r(this, fe);
  }
  getMode() {
    return r(this, Pt);
  }
  get imageManager() {
    return j(this, "imageManager", new Dh());
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
      width: n,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, c, u, f) => ({
          x: (c - i) / a,
          y: 1 - (h + u - s) / n,
          width: f / a,
          height: u / n
        });
        break;
      case "180":
        o = (h, c, u, f) => ({
          x: 1 - (h + u - s) / n,
          y: 1 - (c + f - i) / a,
          width: u / n,
          height: f / a
        });
        break;
      case "270":
        o = (h, c, u, f) => ({
          x: 1 - (c + f - i) / a,
          y: (h - s) / n,
          width: f / a,
          height: u / n
        });
        break;
      default:
        o = (h, c, u, f) => ({
          x: (h - s) / n,
          y: (c - i) / a,
          width: u / n,
          height: f / a
        });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: f,
          y: g,
          width: A,
          height: _
        } of u.getClientRects())
          A === 0 || _ === 0 || l.push(o(f, g, A, _));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (r(this, fr) || p(this, fr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = r(this, fr)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = r(this, fr)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = r(this, Fs).getRawValue(e);
    s && (r(this, Pt) === z.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
dr = new WeakMap(), fe = new WeakMap(), Ct = new WeakMap(), Dt = new WeakMap(), ur = new WeakMap(), Fs = new WeakMap(), fr = new WeakMap(), ke = new WeakMap(), di = new WeakMap(), Ki = new WeakMap(), pr = new WeakMap(), Qi = new WeakMap(), cs = new WeakMap(), je = new WeakMap(), Ji = new WeakMap(), Ua = new WeakMap(), Va = new WeakMap(), gr = new WeakMap(), ja = new WeakMap(), ds = new WeakMap(), ui = new WeakMap(), mr = new WeakMap(), fi = new WeakMap(), us = new WeakMap(), Kl = new WeakMap(), pi = new WeakMap(), Wa = new WeakMap(), gi = new WeakMap(), Zi = new WeakMap(), qa = new WeakMap(), Xa = new WeakMap(), Pt = new WeakMap(), tt = new WeakMap(), Ns = new WeakMap(), tn = new WeakMap(), Ya = new WeakMap(), Ka = new WeakMap(), mi = new WeakMap(), fs = new WeakMap(), Os = new WeakMap(), Qa = new WeakMap(), Me = new WeakMap(), R = new WeakSet(), ml = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Nh = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of r(this, Dt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, Nd = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = m(this, R, ml).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (r(this, us) || p(this, us, new jf(this)), r(this, us).show(s, i, this.direction === "ltr"));
}, Od = function() {
  var n, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    r(this, Ns) && ((n = r(this, us)) == null || n.hide(), p(this, Ns, null), m(this, R, Qt).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === r(this, Ns))
    return;
  const i = m(this, R, ml).call(this, t).closest(".textLayer");
  if (!i) {
    r(this, Ns) && ((a = r(this, us)) == null || a.hide(), p(this, Ns, null), m(this, R, Qt).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = r(this, us)) == null || o.hide(), p(this, Ns, e), m(this, R, Qt).call(this, {
    hasSelectedText: !0
  }), !(r(this, Pt) !== z.HIGHLIGHT && r(this, Pt) !== z.NONE) && (r(this, Pt) === z.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), p(this, fi, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = r(this, Pt) === z.HIGHLIGHT ? m(this, R, Nh).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), c = this.combinedSignal(h), u = (f) => {
      f.type === "pointerup" && f.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), f.type === "pointerup" && m(this, R, bl).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: c
    }), window.addEventListener("blur", u, {
      signal: c
    });
  }
}, bl = function(t = "") {
  r(this, Pt) === z.HIGHLIGHT ? this.highlightSelection(t) : r(this, Ua) && m(this, R, Nd).call(this);
}, Hd = function() {
  document.addEventListener("selectionchange", m(this, R, Od).bind(this), {
    signal: this._signal
  });
}, Bd = function() {
  if (r(this, ui))
    return;
  p(this, ui, new AbortController());
  const t = this.combinedSignal(r(this, ui));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, $d = function() {
  var t;
  (t = r(this, ui)) == null || t.abort(), p(this, ui, null);
}, Oh = function() {
  if (r(this, gi))
    return;
  p(this, gi, new AbortController());
  const t = this.combinedSignal(r(this, gi));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Gd = function() {
  var t;
  (t = r(this, gi)) == null || t.abort(), p(this, gi, null);
}, Hh = function() {
  if (r(this, di))
    return;
  p(this, di, new AbortController());
  const t = this.combinedSignal(r(this, di));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, Bh = function() {
  var t;
  (t = r(this, di)) == null || t.abort(), p(this, di, null);
}, zd = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, Qt = function(t) {
  Object.entries(t).some(([s, i]) => r(this, Ka)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(r(this, Ka), t)
  }), r(this, Pt) === z.HIGHLIGHT && t.hasSelectedEditor === !1 && m(this, R, Ms).call(this, [[X.HIGHLIGHT_FREE, !0]]));
}, Ms = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, Ud = async function() {
  if (!r(this, pi)) {
    p(this, pi, !0);
    const t = [];
    for (const e of r(this, Dt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of r(this, Ct).values())
      e.enable();
  }
}, Vd = function() {
  if (this.unselectAll(), r(this, pi)) {
    p(this, pi, !1);
    for (const t of r(this, Dt).values())
      t.disable();
    for (const t of r(this, Ct).values())
      t.disable();
  }
}, $h = function(t) {
  const e = r(this, Dt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, jd = function() {
  let t = null;
  for (t of r(this, tt))
    ;
  return t;
}, Aa = function() {
  if (r(this, Ct).size === 0)
    return !0;
  if (r(this, Ct).size === 1)
    for (const t of r(this, Ct).values())
      return t.isEmpty();
  return !1;
}, Gh = function(t) {
  for (const e of r(this, tt))
    e.unselect();
  r(this, tt).clear();
  for (const e of t)
    e.isEmpty() || (r(this, tt).add(e), e.select());
  m(this, R, Qt).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, N(rr, "TRANSLATE_SMALL", 1), N(rr, "TRANSLATE_BIG", 10);
let jn = rr;
var kt, ps, We, br, gs, pe, Ar, ms, le, Hs, en, bs, bi, ns, _a, Al;
const Jt = class Jt {
  constructor(t) {
    b(this, ns);
    b(this, kt, null);
    b(this, ps, !1);
    b(this, We, null);
    b(this, br, null);
    b(this, gs, null);
    b(this, pe, null);
    b(this, Ar, !1);
    b(this, ms, null);
    b(this, le, null);
    b(this, Hs, null);
    b(this, en, null);
    b(this, bs, !1);
    p(this, le, t), p(this, bs, t._uiManager.useNewAltTextFlow), r(Jt, bi) || p(Jt, bi, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    Jt._l10n ?? (Jt._l10n = t);
  }
  async render() {
    const t = p(this, We, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = p(this, br, document.createElement("span"));
    t.append(e), r(this, bs) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", r(Jt, bi).missing), e.setAttribute("data-l10n-id", r(Jt, bi)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = r(this, le)._uiManager._signal;
    t.addEventListener("contextmenu", rs, {
      signal: s
    }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: s
    });
    const i = (n) => {
      n.preventDefault(), r(this, le)._uiManager.editAltText(r(this, le)), r(this, bs) && r(this, le)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: r(this, ns, _a)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (p(this, Ar, !0), i(n));
    }, {
      signal: s
    }), await m(this, ns, Al).call(this), t;
  }
  finish() {
    r(this, We) && (r(this, We).focus({
      focusVisible: r(this, Ar)
    }), p(this, Ar, !1));
  }
  isEmpty() {
    return r(this, bs) ? r(this, kt) === null : !r(this, kt) && !r(this, ps);
  }
  hasData() {
    return r(this, bs) ? r(this, kt) !== null || !!r(this, Hs) : this.isEmpty();
  }
  get guessedText() {
    return r(this, Hs);
  }
  async setGuessedText(t) {
    r(this, kt) === null && (p(this, Hs, t), p(this, en, await Jt._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), m(this, ns, Al).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!r(this, bs) || r(this, kt)) {
      (e = r(this, ms)) == null || e.remove(), p(this, ms, null);
      return;
    }
    if (!r(this, ms)) {
      const s = p(this, ms, document.createElement("div"));
      s.className = "noAltTextBadge", r(this, le).div.append(s);
    }
    r(this, ms).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = r(this, kt);
    return !t && r(this, Hs) === e && (e = r(this, en)), {
      altText: e,
      decorative: r(this, ps),
      guessedText: r(this, Hs),
      textWithDisclaimer: r(this, en)
    };
  }
  get data() {
    return {
      altText: r(this, kt),
      decorative: r(this, ps)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }) {
    s && (p(this, Hs, s), p(this, en, i)), !(r(this, kt) === t && r(this, ps) === e) && (n || (p(this, kt, t), p(this, ps, e)), m(this, ns, Al).call(this));
  }
  toggle(t = !1) {
    r(this, We) && (!t && r(this, pe) && (clearTimeout(r(this, pe)), p(this, pe, null)), r(this, We).disabled = !t);
  }
  shown() {
    r(this, le)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: r(this, ns, _a)
      }
    });
  }
  destroy() {
    var t, e;
    (t = r(this, We)) == null || t.remove(), p(this, We, null), p(this, br, null), p(this, gs, null), (e = r(this, ms)) == null || e.remove(), p(this, ms, null);
  }
};
kt = new WeakMap(), ps = new WeakMap(), We = new WeakMap(), br = new WeakMap(), gs = new WeakMap(), pe = new WeakMap(), Ar = new WeakMap(), ms = new WeakMap(), le = new WeakMap(), Hs = new WeakMap(), en = new WeakMap(), bs = new WeakMap(), bi = new WeakMap(), ns = new WeakSet(), _a = function() {
  return r(this, kt) && "added" || r(this, kt) === null && this.guessedText && "review" || "missing";
}, Al = async function() {
  var i, n, a;
  const t = r(this, We);
  if (!t)
    return;
  if (r(this, bs)) {
    if (t.classList.toggle("done", !!r(this, kt)), t.setAttribute("data-l10n-id", r(Jt, bi)[r(this, ns, _a)]), (i = r(this, br)) == null || i.setAttribute("data-l10n-id", r(Jt, bi)[`${r(this, ns, _a)}-label`]), !r(this, kt)) {
      (n = r(this, gs)) == null || n.remove();
      return;
    }
  } else {
    if (!r(this, kt) && !r(this, ps)) {
      t.classList.remove("done"), (a = r(this, gs)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = r(this, gs);
  if (!e) {
    p(this, gs, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${r(this, le).id}`;
    const o = 100, l = r(this, le)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(r(this, pe)), p(this, pe, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      p(this, pe, setTimeout(() => {
        p(this, pe, null), r(this, gs).classList.add("show"), r(this, le)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      r(this, pe) && (clearTimeout(r(this, pe)), p(this, pe, null)), (h = r(this, gs)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  r(this, ps) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = r(this, kt)), e.parentNode || t.append(e);
  const s = r(this, le).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, b(Jt, bi, null), N(Jt, "_l10n", null);
let Gl = Jt;
var sn, qe, ut, _r, Ai, Ja, nn, Ft, rn, _i, yi, Za, an, Le, to, on, Bs, As, yr, wr, Ie, eo, Ql, $, zh, so, Uh, Vh, Wd, qd, jh, Wh, qh, Xh, Xd, Yh, Yd, Kd, Qd, Kh, ya;
const J = class J {
  constructor(t) {
    b(this, $);
    b(this, sn, null);
    b(this, qe, null);
    b(this, ut, null);
    b(this, _r, !1);
    b(this, Ai, null);
    b(this, Ja, "");
    b(this, nn, !1);
    b(this, Ft, null);
    b(this, rn, null);
    b(this, _i, null);
    b(this, yi, null);
    b(this, Za, "");
    b(this, an, !1);
    b(this, Le, null);
    b(this, to, !1);
    b(this, on, !1);
    b(this, Bs, !1);
    b(this, As, null);
    b(this, yr, 0);
    b(this, wr, 0);
    b(this, Ie, null);
    N(this, "_editToolbar", null);
    N(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    N(this, "_initialData", null);
    N(this, "_isVisible", !0);
    N(this, "_uiManager", null);
    N(this, "_focusEventsAllowed", !0);
    b(this, eo, !1);
    b(this, Ql, J._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: n,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [n, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = J.prototype._resizeWithKeyboard, e = jn.TRANSLATE_SMALL, s = jn.TRANSLATE_BIG;
    return j(this, "_resizerKeyboardManager", new rl([[["ArrowLeft", "mac+ArrowLeft"], t, {
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
    }], [["Escape", "mac+Escape"], J.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return j(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new Xf({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (J._l10n ?? (J._l10n = t), J._l10nResizer || (J._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), J._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    J._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
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
    it("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return r(this, eo);
  }
  set _isDraggable(t) {
    var e;
    p(this, eo, t), (e = this.div) == null || e.classList.toggle("draggable", t);
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
    this.div.style.zIndex = r(this, Ql);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : m(this, $, ya).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (r(this, an) ? p(this, an, !1) : this.parent.setSelected(this));
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
    const [n, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / n, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  translate(t, e) {
    m(this, $, zh).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    r(this, Le) || p(this, Le, [this.x, this.y, this.width, this.height]), m(this, $, zh).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    r(this, Le) || p(this, Le, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, n]
    } = this;
    if (this.x += t / i, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: f
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, f) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
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
    return !!r(this, Le) && (r(this, Le)[0] !== this.x || r(this, Le)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!r(this, Le) && (r(this, Le)[2] !== this.width || r(this, Le)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = J, i = s / t, n = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, n];
      case 180:
        return [i, n];
      case 270:
        return [i, -n];
      default:
        return [-i, -n];
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
      x: n,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= s, l *= i, n *= s, a *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          n = Math.max(0, Math.min(s - o, n)), a = Math.max(0, Math.min(i - l, a));
          break;
        case 90:
          n = Math.max(0, Math.min(s - l, n)), a = Math.min(i, Math.max(o, a));
          break;
        case 180:
          n = Math.min(s, Math.max(o, n)), a = Math.min(i, Math.max(l, a));
          break;
        case 270:
          n = Math.min(s, Math.max(l, n)), a = Math.max(0, Math.min(i - o, a));
          break;
      }
    this.x = n /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    n += h, a += c, e.left = `${(100 * n).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return m(s = J, so, Uh).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return m(s = J, so, Uh).call(s, t, e, 360 - this.parentRotation);
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
      style: n
    } = this.div;
    n.width = `${(100 * t / s).toFixed(2)}%`, r(this, nn) || (n.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), n = !r(this, nn) && e.endsWith("%");
    if (i && n)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !r(this, nn) && !n && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = r(this, ut)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || r(this, on) ? this._editToolbar : (this._editToolbar = new Lh(this), this.div.append(this._editToolbar.render()), r(this, ut) && await this._editToolbar.addAltText(r(this, ut)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = r(this, ut)) == null || t.destroy());
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
    r(this, ut) || (Gl.initialize(J._l10n), p(this, ut, new Gl(this)), r(this, sn) && (r(this, ut).data = r(this, sn), p(this, sn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = r(this, ut)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    r(this, ut) && (r(this, ut).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = r(this, ut)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = r(this, ut)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = r(this, ut)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!r(this, ut) && !r(this, ut).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = r(this, ut)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    var n;
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = r(this, _r) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), m(this, $, Yh).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), $l(this, this.div, ["pointerdown"]), (n = this._uiManager._editorUndoBar) == null || n.hide(), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = se.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (p(this, an, !0), this._isDraggable) {
      m(this, $, Xd).call(this, t);
      return;
    }
    m(this, $, Xh).call(this, t);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    r(this, As) && clearTimeout(r(this, As)), p(this, As, setTimeout(() => {
      var t;
      p(this, As, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [n, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, u = this.x * n, f = this.y * a, g = this.width * n, A = this.height * a;
    switch (s) {
      case 0:
        return [u + h + o, a - f - c - A + l, u + h + g + o, a - f - c + l];
      case 90:
        return [u + c + o, a - f + h + l, u + c + A + o, a - f + h + g + l];
      case 180:
        return [u - h - g + o, a - f + c + l, u - h + o, a - f + c + A + l];
      case 270:
        return [u - c - A + o, a - f - h - g + l, u - c + o, a - f - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, n, a] = t, o = n - s, l = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [n, e - i, o, l];
      case 270:
        return [n, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    p(this, on, !0);
  }
  disableEditMode() {
    p(this, on, !1);
  }
  isInEditMode() {
    return r(this, on);
  }
  shouldGetKeyboardEvents() {
    return r(this, Bs);
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
      innerHeight: n,
      innerWidth: a
    } = window;
    return e < a && i > 0 && t < n && s > 0;
  }
  rebuild() {
    m(this, $, Yh).call(this);
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
    it("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s
    });
    i.rotation = t.rotation, p(i, sn, t.accessibilityData);
    const [n, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / n, i.y = l / a, i.width = h / n, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t;
    if ((t = r(this, yi)) == null || t.abort(), p(this, yi, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), r(this, As) && (clearTimeout(r(this, As)), p(this, As, null)), m(this, $, ya).call(this), this.removeEditToolbar(), r(this, Ie)) {
      for (const e of r(this, Ie).values())
        clearTimeout(e);
      p(this, Ie, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (m(this, $, Wd).call(this), r(this, Ft).classList.remove("hidden"), $l(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), p(this, _i, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = r(this, Ft).children;
    if (!r(this, qe)) {
      p(this, qe, Array.from(e));
      const a = m(this, $, Yd).bind(this), o = m(this, $, Kd).bind(this), l = this._uiManager._signal;
      for (const h of r(this, qe)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", m(this, $, Qd).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", J._l10nResizer[c]);
      }
    }
    const s = r(this, qe)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (r(this, qe).length / 4);
    if (n !== i) {
      if (n < i)
        for (let o = 0; o < i - n; o++)
          r(this, Ft).append(r(this, Ft).firstChild);
      else if (n > i)
        for (let o = 0; o < n - i; o++)
          r(this, Ft).firstChild.before(r(this, Ft).lastChild);
      let a = 0;
      for (const o of e) {
        const h = r(this, qe)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", J._l10nResizer[h]);
      }
    }
    m(this, $, Kh).call(this, 0), p(this, Bs, !0), r(this, Ft).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    r(this, Bs) && m(this, $, qh).call(this, r(this, Za), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    m(this, $, ya).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, n;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((n = this._editToolbar) == null || n.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = r(this, ut)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var t, e, s, i, n;
    (t = r(this, Ft)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (n = r(this, ut)) == null || n.toggleAltTextBadge(!0);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return r(this, to);
  }
  set isEditing(t) {
    p(this, to, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    p(this, nn, !0);
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
      r(this, Ie) || p(this, Ie, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = r(this, Ie).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), r(this, Ie).delete(s), r(this, Ie).size === 0 && p(this, Ie, null);
      }, J._telemetryTimeout), r(this, Ie).set(s, i);
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
    this.div && (this.div.tabIndex = 0), p(this, _r, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), p(this, _r, !0);
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
sn = new WeakMap(), qe = new WeakMap(), ut = new WeakMap(), _r = new WeakMap(), Ai = new WeakMap(), Ja = new WeakMap(), nn = new WeakMap(), Ft = new WeakMap(), rn = new WeakMap(), _i = new WeakMap(), yi = new WeakMap(), Za = new WeakMap(), an = new WeakMap(), Le = new WeakMap(), to = new WeakMap(), on = new WeakMap(), Bs = new WeakMap(), As = new WeakMap(), yr = new WeakMap(), wr = new WeakMap(), Ie = new WeakMap(), eo = new WeakMap(), Ql = new WeakMap(), $ = new WeakSet(), zh = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, so = new WeakSet(), Uh = function(t, e, s) {
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
}, Vh = function(t) {
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
}, Wd = function() {
  if (r(this, Ft))
    return;
  p(this, Ft, document.createElement("div")), r(this, Ft).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    r(this, Ft).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", m(this, $, qd).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", rs, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(r(this, Ft));
}, qd = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = se.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = r(this, ut)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, p(this, rn, [e.screenX, e.screenY]);
  const n = new AbortController(), a = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", m(this, $, qh).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", is, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", rs, {
    signal: a
  }), p(this, _i, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    n.abort(), this.parent.togglePointerEvents(!0), (u = r(this, ut)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, m(this, $, Wh).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, jh = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [n, a] = this.parentDimensions;
  this.setDims(n * s, a * i), this.fixAndSetPosition(), this._onResized();
}, Wh = function() {
  if (!r(this, _i))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = r(this, _i);
  p(this, _i, null);
  const n = this.x, a = this.y, o = this.width, l = this.height;
  n === t && a === e && o === s && l === i || this.addCommands({
    cmd: m(this, $, jh).bind(this, n, a, o, l),
    undo: m(this, $, jh).bind(this, t, e, s, i),
    mustExec: !0
  });
}, qh = function(t, e) {
  const [s, i] = this.parentDimensions, n = this.x, a = this.y, o = this.width, l = this.height, h = J.MIN_SIZE / s, c = J.MIN_SIZE / i, u = (F) => Math.round(F * 1e4) / 1e4, f = m(this, $, Vh).call(this, this.rotation), g = (F, H) => [f[0] * F + f[2] * H, f[1] * F + f[3] * H], A = m(this, $, Vh).call(this, 360 - this.rotation), _ = (F, H) => [A[0] * F + A[2] * H, A[1] * F + A[3] * H];
  let w, y, v = !1, S = !1;
  switch (t) {
    case "topLeft":
      v = !0, w = (F, H) => [0, 0], y = (F, H) => [F, H];
      break;
    case "topMiddle":
      w = (F, H) => [F / 2, 0], y = (F, H) => [F / 2, H];
      break;
    case "topRight":
      v = !0, w = (F, H) => [F, 0], y = (F, H) => [0, H];
      break;
    case "middleRight":
      S = !0, w = (F, H) => [F, H / 2], y = (F, H) => [0, H / 2];
      break;
    case "bottomRight":
      v = !0, w = (F, H) => [F, H], y = (F, H) => [0, 0];
      break;
    case "bottomMiddle":
      w = (F, H) => [F / 2, H], y = (F, H) => [F / 2, 0];
      break;
    case "bottomLeft":
      v = !0, w = (F, H) => [0, H], y = (F, H) => [F, 0];
      break;
    case "middleLeft":
      S = !0, w = (F, H) => [0, H / 2], y = (F, H) => [F, H / 2];
      break;
  }
  const E = w(o, l), x = y(o, l);
  let C = g(...x);
  const T = u(n + C[0]), M = u(a + C[1]);
  let D = 1, W = 1, O, rt;
  if (e.fromKeyboard)
    ({
      deltaX: O,
      deltaY: rt
    } = e);
  else {
    const {
      screenX: F,
      screenY: H
    } = e, [as, Ge] = r(this, rn);
    [O, rt] = this.screenToPageTranslation(F - as, H - Ge), r(this, rn)[0] = F, r(this, rn)[1] = H;
  }
  if ([O, rt] = _(O / s, rt / i), v) {
    const F = Math.hypot(o, l);
    D = W = Math.max(Math.min(Math.hypot(x[0] - E[0] - O, x[1] - E[1] - rt) / F, 1 / o, 1 / l), h / o, c / l);
  } else S ? D = Math.max(h, Math.min(1, Math.abs(x[0] - E[0] - O))) / o : W = Math.max(c, Math.min(1, Math.abs(x[1] - E[1] - rt))) / l;
  const mt = u(o * D), K = u(l * W);
  C = g(...y(mt, K));
  const Yt = T - C[0], Z = M - C[1];
  r(this, Le) || p(this, Le, [this.x, this.y, this.width, this.height]), this.width = mt, this.height = K, this.x = Yt, this.y = Z, this.setDims(s * mt, i * K), this.fixAndSetPosition(), this._onResizing();
}, Xh = function(t) {
  const {
    isMac: e
  } = se.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Xd = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  const s = new AbortController(), i = this._uiManager.combinedSignal(s), n = {
    capture: !0,
    passive: !1,
    signal: i
  }, a = (l) => {
    s.abort(), p(this, Ai, null), p(this, an, !1), this._uiManager.endDragSession() || m(this, $, Xh).call(this, l);
  };
  e && (p(this, yr, t.clientX), p(this, wr, t.clientY), p(this, Ai, t.pointerId), p(this, Ja, t.pointerType), window.addEventListener("pointermove", (l) => {
    const {
      clientX: h,
      clientY: c,
      pointerId: u
    } = l;
    if (u !== r(this, Ai)) {
      is(l);
      return;
    }
    const [f, g] = this.screenToPageTranslation(h - r(this, yr), c - r(this, wr));
    p(this, yr, h), p(this, wr, c), this._uiManager.dragSelectedEditors(f, g);
  }, n), window.addEventListener("touchmove", is, n), window.addEventListener("pointerdown", (l) => {
    l.isPrimary && l.pointerType === r(this, Ja) && a(l), is(l);
  }, n)), this._onStartDragging();
  const o = (l) => {
    if (!r(this, Ai) || r(this, Ai) === l.pointerId) {
      a(l), this._onStopDragging();
      return;
    }
    is(l);
  };
  window.addEventListener("pointerup", o, {
    signal: i
  }), window.addEventListener("blur", o, {
    signal: i
  });
}, Yh = function() {
  if (r(this, yi) || !this.div)
    return;
  p(this, yi, new AbortController());
  const t = this._uiManager.combinedSignal(r(this, yi));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Yd = function(t) {
  J._resizerKeyboardManager.exec(this, t);
}, Kd = function(t) {
  var e;
  r(this, Bs) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== r(this, Ft) && m(this, $, ya).call(this);
}, Qd = function(t) {
  p(this, Za, r(this, Bs) ? t : "");
}, Kh = function(t) {
  if (r(this, qe))
    for (const e of r(this, qe))
      e.tabIndex = t;
}, ya = function() {
  p(this, Bs, !1), m(this, $, Kh).call(this, -1), m(this, $, Wh).call(this);
}, b(J, so), N(J, "_l10n", null), N(J, "_l10nResizer", null), N(J, "_borderLineWidth", -1), N(J, "_colorManager", new Fh()), N(J, "_zIndex", 1), N(J, "_telemetryTimeout", 1e3);
let pt = J;
class Xf extends pt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const ld = 3285377520, Te = 4294901760, ls = 65535;
class Jd {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : ld, this.h2 = t ? t & 4294967295 : ld;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let _ = 0, w = t.length; _ < w; _++) {
        const y = t.charCodeAt(_);
        y <= 255 ? e[s++] = y : (e[s++] = y >>> 8, e[s++] = y & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, n = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const u = 3432918353, f = 461845907, g = u & ls, A = f & ls;
    for (let _ = 0; _ < i; _++)
      _ & 1 ? (o = a[_], o = o * u & Te | o * g & ls, o = o << 15 | o >>> 17, o = o * f & Te | o * A & ls, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[_], l = l * u & Te | l * g & ls, l = l << 15 | l >>> 17, l = l * f & Te | l * A & ls, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, n) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & Te | o * g & ls, o = o << 15 | o >>> 17, o = o * f & Te | o * A & ls, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Te | t * 36045 & ls, e = e * 4283543511 & Te | ((e << 16 | t >>> 16) * 2950163797 & Te) >>> 16, t ^= e >>> 1, t = t * 444984403 & Te | t * 60499 & ls, e = e * 3301882366 & Te | ((e << 16 | t >>> 16) * 3120437893 & Te) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Qh = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var ln, hn, Mt, Jl, Zd;
class Xc {
  constructor() {
    b(this, Jl);
    b(this, ln, !1);
    b(this, hn, null);
    b(this, Mt, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = r(this, Mt).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return r(this, Mt).get(t);
  }
  remove(t) {
    if (r(this, Mt).delete(t), r(this, Mt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of r(this, Mt).values())
        if (e instanceof pt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = r(this, Mt).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [n, a] of Object.entries(e))
        s[n] !== a && (i = !0, s[n] = a);
    else
      i = !0, r(this, Mt).set(t, e);
    i && m(this, Jl, Zd).call(this), e instanceof pt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return r(this, Mt).has(t);
  }
  getAll() {
    return r(this, Mt).size > 0 ? zc(r(this, Mt)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return r(this, Mt).size;
  }
  resetModified() {
    r(this, ln) && (p(this, ln, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new tu(this);
  }
  get serializable() {
    if (r(this, Mt).size === 0)
      return Qh;
    const t = /* @__PURE__ */ new Map(), e = new Jd(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [a, o] of r(this, Mt)) {
      const l = o instanceof pt ? o.serialize(!1, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), n || (n = !!l.bitmap));
    }
    if (n)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : Qh;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of r(this, Mt).values()) {
      if (!(s instanceof pt))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: n
      } = i;
      e.has(n) || e.set(n, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const a = t[n] || (t[n] = /* @__PURE__ */ new Map());
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
    p(this, hn, null);
  }
  get modifiedIds() {
    if (r(this, hn))
      return r(this, hn);
    const t = [];
    for (const e of r(this, Mt).values())
      !(e instanceof pt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return p(this, hn, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
}
ln = new WeakMap(), hn = new WeakMap(), Mt = new WeakMap(), Jl = new WeakSet(), Zd = function() {
  r(this, ln) || (p(this, ln, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var io;
class tu extends Xc {
  constructor(e) {
    super();
    b(this, io);
    const {
      map: s,
      hash: i,
      transfer: n
    } = e.serializable, a = structuredClone(s, n ? {
      transfer: n
    } : null);
    p(this, io, {
      map: a,
      hash: i,
      transfer: n
    });
  }
  get print() {
    it("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return r(this, io);
  }
  get modifiedIds() {
    return j(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
io = new WeakMap();
var vr;
class Yf {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    b(this, vr, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), r(this, vr).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || r(this, vr).has(t.loadedName))) {
      if (wt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: n
        } = t, a = new FontFace(s, i, n);
        this.addNativeFontFace(a);
        try {
          await a.load(), r(this, vr).add(s), e == null || e(t);
        } catch {
          U(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
        }
        return;
      }
      it("Not implemented: loadSystemFont without the Font Loading API.");
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
    return j(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (ee || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), j(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (wt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const n = s.shift();
        setTimeout(n.callback, 0);
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
    return j(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(E, x) {
      return E.charCodeAt(x) << 24 | E.charCodeAt(x + 1) << 16 | E.charCodeAt(x + 2) << 8 | E.charCodeAt(x + 3) & 255;
    }
    function i(E, x, C, T) {
      const M = E.substring(0, x), D = E.substring(x + C);
      return M + T + D;
    }
    let n, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(E, x) {
      if (++h > 30) {
        U("Load test font never loaded."), x();
        return;
      }
      if (l.font = "30px " + E, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        x();
        return;
      }
      setTimeout(c.bind(null, E, x));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let f = this._loadTestFont;
    f = i(f, 976, u.length, u);
    const A = 16, _ = 1482184792;
    let w = s(f, A);
    for (n = 0, a = u.length - 3; n < a; n += 4)
      w = w - _ + s(u, n) | 0;
    n < u.length && (w = w - _ + s(u + "XXX", n) | 0), f = i(f, A, 4, Df(w));
    const y = `url(data:font/opentype;base64,${btoa(f)});`, v = `@font-face {font-family:"${u}";src:${y}}`;
    this.insertRule(v);
    const S = this._document.createElement("div");
    S.style.visibility = "hidden", S.style.width = S.style.height = "10px", S.style.position = "absolute", S.style.top = S.style.left = "0px";
    for (const E of [t.loadedName, u]) {
      const x = this._document.createElement("span");
      x.textContent = "Hi", x.style.fontFamily = E, S.append(x);
    }
    this._document.body.append(S), c(u, () => {
      S.remove(), e.complete();
    });
  }
}
vr = new WeakMap();
class Kf {
  constructor(t, {
    disableFontFace: e = !1,
    inspectFont: s = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in t)
      this[i] = t[i];
    this.disableFontFace = e === !0, this._inspectFont = s;
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
    const t = `url(data:${this.mimetype};base64,${$f(this.data)});`;
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
    let s;
    try {
      s = t.get(this.loadedName + "_path_" + e);
    } catch (n) {
      U(`getPathGenerator - ignoring character: "${n}".`);
    }
    if (!Array.isArray(s) || s.length === 0)
      return this.compiledGlyphs[e] = function(n, a) {
      };
    const i = [];
    for (let n = 0, a = s.length; n < a; )
      switch (s[n++]) {
        case Ps.BEZIER_CURVE_TO:
          {
            const [o, l, h, c, u, f] = s.slice(n, n + 6);
            i.push((g) => g.bezierCurveTo(o, l, h, c, u, f)), n += 6;
          }
          break;
        case Ps.MOVE_TO:
          {
            const [o, l] = s.slice(n, n + 2);
            i.push((h) => h.moveTo(o, l)), n += 2;
          }
          break;
        case Ps.LINE_TO:
          {
            const [o, l] = s.slice(n, n + 2);
            i.push((h) => h.lineTo(o, l)), n += 2;
          }
          break;
        case Ps.QUADRATIC_CURVE_TO:
          {
            const [o, l, h, c] = s.slice(n, n + 4);
            i.push((u) => u.quadraticCurveTo(o, l, h, c)), n += 4;
          }
          break;
        case Ps.RESTORE:
          i.push((o) => o.restore());
          break;
        case Ps.SAVE:
          i.push((o) => o.save());
          break;
        case Ps.SCALE:
          wt(i.length === 2, "Scale command is only valid at the third position.");
          break;
        case Ps.TRANSFORM:
          {
            const [o, l, h, c, u, f] = s.slice(n, n + 6);
            i.push((g) => g.transform(o, l, h, c, u, f)), n += 6;
          }
          break;
        case Ps.TRANSLATE:
          {
            const [o, l] = s.slice(n, n + 2);
            i.push((h) => h.translate(o, l)), n += 2;
          }
          break;
      }
    return i.push((n) => n.closePath()), this.compiledGlyphs[e] = function(a, o) {
      i[0](a), i[1](a), a.scale(o, -o);
      for (let l = 2, h = i.length; l < h; l++)
        i[l](a);
    };
  }
}
var no;
class eu {
  constructor({
    enableHWA: t = !1
  }) {
    b(this, no, !1);
    p(this, no, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !r(this, no)
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
    it("Abstract method `_createCanvas` called.");
  }
}
no = new WeakMap();
class Qf extends eu {
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
class su {
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
    it("Abstract method `_fetch` called.");
  }
}
class iu extends su {
  async _fetch(t) {
    const e = await mh(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : gh(e);
  }
}
class nu {
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
  addHighlightHCMFilter(t, e, s, i, n) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var cn, Er, $s, Gs, jt, dn, un, P, zt, wa, Jn, _l, Zn, ru, Jh, tr, va, Ea, Zh, Sa;
class Jf extends nu {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    b(this, P);
    b(this, cn);
    b(this, Er);
    b(this, $s);
    b(this, Gs);
    b(this, jt);
    b(this, dn);
    b(this, un, 0);
    p(this, Gs, e), p(this, jt, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = r(this, P, zt).get(e);
    if (s)
      return s;
    const [i, n, a] = m(this, P, _l).call(this, e), o = e.length === 1 ? i : `${i}${n}${a}`;
    if (s = r(this, P, zt).get(o), s)
      return r(this, P, zt).set(e, s), s;
    const l = `g_${r(this, Gs)}_transfer_map_${Kt(this, un)._++}`, h = m(this, P, Zn).call(this, l);
    r(this, P, zt).set(e, h), r(this, P, zt).set(o, h);
    const c = m(this, P, tr).call(this, l);
    return m(this, P, Ea).call(this, i, n, a, c), h;
  }
  addHCMFilter(e, s) {
    var A;
    const i = `${e}-${s}`, n = "base";
    let a = r(this, P, wa).get(n);
    if ((a == null ? void 0 : a.key) === i || (a ? ((A = a.filter) == null || A.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, r(this, P, wa).set(n, a)), !e || !s))
      return a.url;
    const o = m(this, P, Sa).call(this, e);
    e = I.makeHexColor(...o);
    const l = m(this, P, Sa).call(this, s);
    if (s = I.makeHexColor(...l), r(this, P, Jn).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let _ = 0; _ <= 255; _++) {
      const w = _ / 255;
      h[_] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), u = `g_${r(this, Gs)}_hcm_filter`, f = a.filter = m(this, P, tr).call(this, u);
    m(this, P, Ea).call(this, c, c, c, f), m(this, P, Jh).call(this, f);
    const g = (_, w) => {
      const y = o[_] / 255, v = l[_] / 255, S = new Array(w + 1);
      for (let E = 0; E <= w; E++)
        S[E] = y + E / w * (v - y);
      return S.join(",");
    };
    return m(this, P, Ea).call(this, g(0, 5), g(1, 5), g(2, 5), f), a.url = m(this, P, Zn).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = r(this, P, zt).get(e);
    if (s)
      return s;
    const [i] = m(this, P, _l).call(this, [e]), n = `alpha_${i}`;
    if (s = r(this, P, zt).get(n), s)
      return r(this, P, zt).set(e, s), s;
    const a = `g_${r(this, Gs)}_alpha_map_${Kt(this, un)._++}`, o = m(this, P, Zn).call(this, a);
    r(this, P, zt).set(e, o), r(this, P, zt).set(n, o);
    const l = m(this, P, tr).call(this, a);
    return m(this, P, Zh).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = r(this, P, zt).get(e || "luminosity");
    if (s)
      return s;
    let i, n;
    if (e ? ([i] = m(this, P, _l).call(this, [e]), n = `luminosity_${i}`) : n = "luminosity", s = r(this, P, zt).get(n), s)
      return r(this, P, zt).set(e, s), s;
    const a = `g_${r(this, Gs)}_luminosity_map_${Kt(this, un)._++}`, o = m(this, P, Zn).call(this, a);
    r(this, P, zt).set(e, o), r(this, P, zt).set(n, o);
    const l = m(this, P, tr).call(this, a);
    return m(this, P, ru).call(this, l), e && m(this, P, Zh).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, n, a) {
    var v;
    const o = `${s}-${i}-${n}-${a}`;
    let l = r(this, P, wa).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((v = l.filter) == null || v.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, r(this, P, wa).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(m(this, P, Sa).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), f = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [g, A] = [n, a].map(m(this, P, Sa).bind(this));
    f < u && ([u, f, g, A] = [f, u, A, g]), r(this, P, Jn).style.color = "";
    const _ = (S, E, x) => {
      const C = new Array(256), T = (f - u) / x, M = S / 255, D = (E - S) / (255 * x);
      let W = 0;
      for (let O = 0; O <= x; O++) {
        const rt = Math.round(u + O * T), mt = M + O * D;
        for (let K = W; K <= rt; K++)
          C[K] = mt;
        W = rt + 1;
      }
      for (let O = W; O < 256; O++)
        C[O] = C[W - 1];
      return C.join(",");
    }, w = `g_${r(this, Gs)}_hcm_${e}_filter`, y = l.filter = m(this, P, tr).call(this, w);
    return m(this, P, Jh).call(this, y), m(this, P, Ea).call(this, _(g[0], A[0], 5), _(g[1], A[1], 5), _(g[2], A[2], 5), y), l.url = m(this, P, Zn).call(this, w), l.url;
  }
  destroy(e = !1) {
    var s, i, n, a;
    e && ((s = r(this, dn)) != null && s.size) || ((i = r(this, $s)) == null || i.parentNode.parentNode.remove(), p(this, $s, null), (n = r(this, Er)) == null || n.clear(), p(this, Er, null), (a = r(this, dn)) == null || a.clear(), p(this, dn, null), p(this, un, 0));
  }
}
cn = new WeakMap(), Er = new WeakMap(), $s = new WeakMap(), Gs = new WeakMap(), jt = new WeakMap(), dn = new WeakMap(), un = new WeakMap(), P = new WeakSet(), zt = function() {
  return r(this, Er) || p(this, Er, /* @__PURE__ */ new Map());
}, wa = function() {
  return r(this, dn) || p(this, dn, /* @__PURE__ */ new Map());
}, Jn = function() {
  if (!r(this, $s)) {
    const e = r(this, jt).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = r(this, jt).createElementNS(ks, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), p(this, $s, r(this, jt).createElementNS(ks, "defs")), e.append(i), i.append(r(this, $s)), r(this, jt).body.append(e);
  }
  return r(this, $s);
}, _l = function(e) {
  if (e.length === 1) {
    const h = e[0], c = new Array(256);
    for (let f = 0; f < 256; f++)
      c[f] = h[f] / 255;
    const u = c.join(",");
    return [u, u, u];
  }
  const [s, i, n] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = n[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, Zn = function(e) {
  if (r(this, cn) === void 0) {
    p(this, cn, "");
    const s = r(this, jt).URL;
    s !== r(this, jt).baseURI && (bh(s) ? U('#createUrl: ignore "data:"-URL for performance reasons.') : p(this, cn, s.split("#", 1)[0]));
  }
  return `url(${r(this, cn)}#${e})`;
}, ru = function(e) {
  const s = r(this, jt).createElementNS(ks, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Jh = function(e) {
  const s = r(this, jt).createElementNS(ks, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, tr = function(e) {
  const s = r(this, jt).createElementNS(ks, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), r(this, P, Jn).append(s), s;
}, va = function(e, s, i) {
  const n = r(this, jt).createElementNS(ks, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), e.append(n);
}, Ea = function(e, s, i, n) {
  const a = r(this, jt).createElementNS(ks, "feComponentTransfer");
  n.append(a), m(this, P, va).call(this, a, "feFuncR", e), m(this, P, va).call(this, a, "feFuncG", s), m(this, P, va).call(this, a, "feFuncB", i);
}, Zh = function(e, s) {
  const i = r(this, jt).createElementNS(ks, "feComponentTransfer");
  s.append(i), m(this, P, va).call(this, i, "feFuncA", e);
}, Sa = function(e) {
  return r(this, P, Jn).style.color = e, qc(getComputedStyle(r(this, P, Jn)).getPropertyValue("color"));
};
class au {
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
    it("Abstract method `_fetch` called.");
  }
}
class ou extends au {
  async _fetch(t) {
    const e = await mh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
async function lu(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class Zf extends nu {
}
class tp extends eu {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class ep extends su {
  async _fetch(t) {
    return lu(t);
  }
}
class sp extends au {
  async _fetch(t) {
    return lu(t);
  }
}
const Xt = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function tc(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class Yc {
  getPattern() {
    it("Abstract method `getPattern` called.");
  }
}
class ip extends Yc {
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
    let n;
    if (i === Xt.STROKE || i === Xt.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, ht(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = I.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), tc(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), n = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      tc(t, this._bbox), n = this._createGradient(t);
    return n;
  }
}
function Sh(d, t, e, s, i, n, a, o) {
  const l = t.coords, h = t.colors, c = d.data, u = d.width * 4;
  let f;
  l[e + 1] > l[s + 1] && (f = e, e = s, s = f, f = n, n = a, a = f), l[s + 1] > l[i + 1] && (f = s, s = i, i = f, f = a, a = o, o = f), l[e + 1] > l[s + 1] && (f = e, e = s, s = f, f = n, n = a, a = f);
  const g = (l[e] + t.offsetX) * t.scaleX, A = (l[e + 1] + t.offsetY) * t.scaleY, _ = (l[s] + t.offsetX) * t.scaleX, w = (l[s + 1] + t.offsetY) * t.scaleY, y = (l[i] + t.offsetX) * t.scaleX, v = (l[i + 1] + t.offsetY) * t.scaleY;
  if (A >= v)
    return;
  const S = h[n], E = h[n + 1], x = h[n + 2], C = h[a], T = h[a + 1], M = h[a + 2], D = h[o], W = h[o + 1], O = h[o + 2], rt = Math.round(A), mt = Math.round(v);
  let K, Yt, Z, F, H, as, Ge, Ce;
  for (let $t = rt; $t <= mt; $t++) {
    if ($t < w) {
      const ot = $t < A ? 0 : (A - $t) / (A - w);
      K = g - (g - _) * ot, Yt = S - (S - C) * ot, Z = E - (E - T) * ot, F = x - (x - M) * ot;
    } else {
      let ot;
      $t > v ? ot = 1 : w === v ? ot = 0 : ot = (w - $t) / (w - v), K = _ - (_ - y) * ot, Yt = C - (C - D) * ot, Z = T - (T - W) * ot, F = M - (M - O) * ot;
    }
    let Et;
    $t < A ? Et = 0 : $t > v ? Et = 1 : Et = (A - $t) / (A - v), H = g - (g - y) * Et, as = S - (S - D) * Et, Ge = E - (E - W) * Et, Ce = x - (x - O) * Et;
    const Kn = Math.round(Math.min(K, H)), fa = Math.round(Math.max(K, H));
    let re = u * $t + Kn * 4;
    for (let ot = Kn; ot <= fa; ot++)
      Et = (K - ot) / (K - H), Et < 0 ? Et = 0 : Et > 1 && (Et = 1), c[re++] = Yt - (Yt - as) * Et | 0, c[re++] = Z - (Z - Ge) * Et | 0, c[re++] = F - (F - Ce) * Et | 0, c[re++] = 255;
  }
}
function np(d, t, e) {
  const s = t.coords, i = t.colors;
  let n, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (n = 0; n < l; n++) {
        let c = n * o;
        for (let u = 0; u < h; u++, c++)
          Sh(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), Sh(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (n = 0, a = s.length; n < a; n += 3)
        Sh(d, e, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class rp extends Yc {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), f = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), g = h / u, A = c / f, _ = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / g,
      scaleY: 1 / A
    }, w = u + 2 * 2, y = f + 2 * 2, v = s.getCanvas("mesh", w, y), S = v.context, E = S.createImageData(u, f);
    if (e) {
      const C = E.data;
      for (let T = 0, M = C.length; T < M; T += 4)
        C[T] = e[0], C[T + 1] = e[1], C[T + 2] = e[2], C[T + 3] = 255;
    }
    for (const C of this._figures)
      np(E, C, _);
    return S.putImageData(E, 2, 2), {
      canvas: v.canvas,
      offsetX: o - 2 * g,
      offsetY: l - 2 * A,
      scaleX: g,
      scaleY: A
    };
  }
  getPattern(t, e, s, i) {
    tc(t, this._bbox);
    let n;
    if (i === Xt.SHADING)
      n = I.singularValueDecompose2dScale(ht(t));
    else if (n = I.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = I.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * o[0], n[1] * o[1]];
    }
    const a = this._createMeshCanvas(n, i === Xt.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Xt.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class ap extends Yc {
  getPattern() {
    return "hotpink";
  }
}
function op(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new ip(d);
    case "Mesh":
      return new rp(d);
    case "Dummy":
      return new ap();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const hd = {
  COLORED: 1,
  UNCOLORED: 2
}, Zl = class Zl {
  constructor(t, e, s, i, n) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = n;
  }
  createPatternCanvas(t) {
    const {
      bbox: e,
      operatorList: s,
      paintType: i,
      tilingType: n,
      color: a,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: l,
      ystep: h
    } = this;
    l = Math.abs(l), h = Math.abs(h), fh("TilingType: " + n);
    const c = e[0], u = e[1], f = e[2], g = e[3], A = f - c, _ = g - u, w = I.singularValueDecompose2dScale(this.matrix), y = I.singularValueDecompose2dScale(this.baseTransform), v = w[0] * y[0], S = w[1] * y[1];
    let E = A, x = _, C = !1, T = !1;
    const M = Math.ceil(l * v), D = Math.ceil(h * S), W = Math.ceil(A * v), O = Math.ceil(_ * S);
    M >= W ? E = l : C = !0, D >= O ? x = h : T = !0;
    const rt = this.getSizeAndScale(E, this.ctx.canvas.width, v), mt = this.getSizeAndScale(x, this.ctx.canvas.height, S), K = t.cachedCanvases.getCanvas("pattern", rt.size, mt.size), Yt = K.context, Z = o.createCanvasGraphics(Yt);
    if (Z.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(Z, i, a), Yt.translate(-rt.scale * c, -mt.scale * u), Z.transform(rt.scale, 0, 0, mt.scale, 0, 0), Yt.save(), this.clipBbox(Z, c, u, f, g), Z.baseTransform = ht(Z.ctx), Z.executeOperatorList(s), Z.endDrawing(), Yt.restore(), C || T) {
      const F = K.canvas;
      C && (E = l), T && (x = h);
      const H = this.getSizeAndScale(E, this.ctx.canvas.width, v), as = this.getSizeAndScale(x, this.ctx.canvas.height, S), Ge = H.size, Ce = as.size, $t = t.cachedCanvases.getCanvas("pattern-workaround", Ge, Ce), Et = $t.context, Kn = C ? Math.floor(A / l) : 0, fa = T ? Math.floor(_ / h) : 0;
      for (let re = 0; re <= Kn; re++)
        for (let ot = 0; ot <= fa; ot++)
          Et.drawImage(F, Ge * re, Ce * ot, Ge, Ce, 0, 0, Ge, Ce);
      return {
        canvas: $t.canvas,
        scaleX: H.scale,
        scaleY: as.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: K.canvas,
      scaleX: rt.scale,
      scaleY: mt.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(Zl.MAX_PATTERN_SIZE, e);
    let n = Math.ceil(t * s);
    return n >= i ? n = i : s = n / t, {
      scale: s,
      size: n
    };
  }
  clipBbox(t, e, s, i, n) {
    const a = i - e, o = n - s;
    t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(ht(t.ctx), [e, s, i, n]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, n = t.current;
    switch (e) {
      case hd.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, n.fillColor = a.fillStyle, n.strokeColor = a.strokeStyle;
        break;
      case hd.UNCOLORED:
        const o = I.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, n.fillColor = o, n.strokeColor = o;
        break;
      default:
        throw new If(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let n = s;
    i !== Xt.SHADING && (n = I.transform(n, e.baseTransform), this.matrix && (n = I.transform(n, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(n);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
N(Zl, "MAX_PATTERN_SIZE", 3e3);
let ec = Zl;
function lp({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: a = !1
}) {
  const o = se.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [n, o] : [o, n], c = s >> 3, u = s & 7, f = d.length;
  e = new Uint32Array(e.buffer);
  let g = 0;
  for (let A = 0; A < i; A++) {
    for (const w = t + c; t < w; t++) {
      const y = t < f ? d[t] : 255;
      e[g++] = y & 128 ? h : l, e[g++] = y & 64 ? h : l, e[g++] = y & 32 ? h : l, e[g++] = y & 16 ? h : l, e[g++] = y & 8 ? h : l, e[g++] = y & 4 ? h : l, e[g++] = y & 2 ? h : l, e[g++] = y & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const _ = t < f ? d[t++] : 255;
    for (let w = 0; w < u; w++)
      e[g++] = _ & 1 << 7 - w ? h : l;
  }
  return {
    srcPos: t,
    destPos: g
  };
}
const cd = 16, dd = 100, hp = 15, ud = 10, fd = 1e3, ue = 16;
function cp(d, t) {
  if (d._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  d.__originalSave = d.save, d.__originalRestore = d.restore, d.__originalRotate = d.rotate, d.__originalScale = d.scale, d.__originalTranslate = d.translate, d.__originalTransform = d.transform, d.__originalSetTransform = d.setTransform, d.__originalResetTransform = d.resetTransform, d.__originalClip = d.clip, d.__originalMoveTo = d.moveTo, d.__originalLineTo = d.lineTo, d.__originalBezierCurveTo = d.bezierCurveTo, d.__originalRect = d.rect, d.__originalClosePath = d.closePath, d.__originalBeginPath = d.beginPath, d._removeMirroring = () => {
    d.save = d.__originalSave, d.restore = d.__originalRestore, d.rotate = d.__originalRotate, d.scale = d.__originalScale, d.translate = d.__originalTranslate, d.transform = d.__originalTransform, d.setTransform = d.__originalSetTransform, d.resetTransform = d.__originalResetTransform, d.clip = d.__originalClip, d.moveTo = d.__originalMoveTo, d.lineTo = d.__originalLineTo, d.bezierCurveTo = d.__originalBezierCurveTo, d.rect = d.__originalRect, d.closePath = d.__originalClosePath, d.beginPath = d.__originalBeginPath, delete d._removeMirroring;
  }, d.save = function() {
    t.save(), this.__originalSave();
  }, d.restore = function() {
    t.restore(), this.__originalRestore();
  }, d.translate = function(s, i) {
    t.translate(s, i), this.__originalTranslate(s, i);
  }, d.scale = function(s, i) {
    t.scale(s, i), this.__originalScale(s, i);
  }, d.transform = function(s, i, n, a, o, l) {
    t.transform(s, i, n, a, o, l), this.__originalTransform(s, i, n, a, o, l);
  }, d.setTransform = function(s, i, n, a, o, l) {
    t.setTransform(s, i, n, a, o, l), this.__originalSetTransform(s, i, n, a, o, l);
  }, d.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, d.rotate = function(s) {
    t.rotate(s), this.__originalRotate(s);
  }, d.clip = function(s) {
    t.clip(s), this.__originalClip(s);
  }, d.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, d.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, d.bezierCurveTo = function(e, s, i, n, a, o) {
    t.bezierCurveTo(e, s, i, n, a, o), this.__originalBezierCurveTo(e, s, i, n, a, o);
  }, d.rect = function(e, s, i, n) {
    t.rect(e, s, i, n), this.__originalRect(e, s, i, n);
  }, d.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, d.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class dp {
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
function ol(d, t, e, s, i, n, a, o, l, h) {
  const [c, u, f, g, A, _] = ht(d);
  if (u === 0 && f === 0) {
    const v = a * c + A, S = Math.round(v), E = o * g + _, x = Math.round(E), C = (a + l) * c + A, T = Math.abs(Math.round(C) - S) || 1, M = (o + h) * g + _, D = Math.abs(Math.round(M) - x) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(g), S, x), d.drawImage(t, e, s, i, n, 0, 0, T, D), d.setTransform(c, u, f, g, A, _), [T, D];
  }
  if (c === 0 && g === 0) {
    const v = o * f + A, S = Math.round(v), E = a * u + _, x = Math.round(E), C = (o + h) * f + A, T = Math.abs(Math.round(C) - S) || 1, M = (a + l) * u + _, D = Math.abs(Math.round(M) - x) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(f), 0, S, x), d.drawImage(t, e, s, i, n, 0, 0, D, T), d.setTransform(c, u, f, g, A, _), [D, T];
  }
  d.drawImage(t, e, s, i, n, a, o, l, h);
  const w = Math.hypot(c, u), y = Math.hypot(f, g);
  return [w * l, y * h];
}
function up(d) {
  const {
    width: t,
    height: e
  } = d;
  if (t > fd || e > fd)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n = t + 1;
  let a = new Uint8Array(n * (e + 1)), o, l, h;
  const c = t + 7 & -8;
  let u = new Uint8Array(c * e), f = 0;
  for (const y of d.data) {
    let v = 128;
    for (; v > 0; )
      u[f++] = y & v ? 0 : 255, v >>= 1;
  }
  let g = 0;
  for (f = 0, u[f] !== 0 && (a[0] = 1, ++g), l = 1; l < t; l++)
    u[f] !== u[f + 1] && (a[l] = u[f] ? 2 : 1, ++g), f++;
  for (u[f] !== 0 && (a[l] = 2, ++g), o = 1; o < e; o++) {
    f = o * c, h = o * n, u[f - c] !== u[f] && (a[h] = u[f] ? 1 : 8, ++g);
    let y = (u[f] ? 4 : 0) + (u[f - c] ? 8 : 0);
    for (l = 1; l < t; l++)
      y = (y >> 2) + (u[f + 1] ? 4 : 0) + (u[f - c + 1] ? 8 : 0), i[y] && (a[h + l] = i[y], ++g), f++;
    if (u[f - c] !== u[f] && (a[h + l] = u[f] ? 2 : 4, ++g), g > s)
      return null;
  }
  for (f = c * (e - 1), h = o * n, u[f] !== 0 && (a[h] = 8, ++g), l = 1; l < t; l++)
    u[f] !== u[f + 1] && (a[h + l] = u[f] ? 4 : 8, ++g), f++;
  if (u[f] !== 0 && (a[h + l] = 4, ++g), g > s)
    return null;
  const A = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]), _ = new Path2D();
  for (o = 0; g && o <= e; o++) {
    let y = o * n;
    const v = y + t;
    for (; y < v && !a[y]; )
      y++;
    if (y === v)
      continue;
    _.moveTo(y % n, o);
    const S = y;
    let E = a[y];
    do {
      const x = A[E];
      do
        y += x;
      while (!a[y]);
      const C = a[y];
      C !== 5 && C !== 10 ? (E = C, a[y] = 0) : (E = C & 51 * E >> 4, a[y] &= E >> 2 | E << 2), _.lineTo(y % n, y / n | 0), a[y] || --g;
    } while (S !== y);
    --o;
  }
  return u = null, a = null, function(y) {
    y.save(), y.scale(1 / t, -1 / e), y.translate(0, -e), y.fill(_), y.beginPath(), y.restore();
  };
}
class pd {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = xd, this.textMatrixScale = 1, this.fontMatrix = Th, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Gt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.patternStroke = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, s) {
    [e, s] = I.applyTransform([e, s], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(t, e) {
    const s = I.applyTransform(e, t), i = I.applyTransform(e.slice(2), t), n = I.applyTransform([e[0], e[3]], t), a = I.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, s[0], i[0], n[0], a[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], a[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], a[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    I.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, s, i, n, a, o, l, h, c) {
    const u = I.bezierBoundingBox(e, s, i, n, a, o, l, h, c);
    c || this.updateRectMinMax(t, u);
  }
  getPathBoundingBox(t = Xt.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Xt.STROKE) {
      e || it("Stroke bounding box must include transform.");
      const i = I.singularValueDecompose2dScale(e), n = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= a, s[2] += n, s[3] += a;
    }
    return s;
  }
  updateClipFromPath() {
    const t = I.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Xt.FILL, e = null) {
    return I.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function gd(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ue, n = (e - i) / ue, a = i === 0 ? n : n + 1, o = d.createImageData(s, ue);
  let l = 0, h;
  const c = t.data, u = o.data;
  let f, g, A, _;
  if (t.kind === ul.GRAYSCALE_1BPP) {
    const w = c.byteLength, y = new Uint32Array(u.buffer, 0, u.byteLength >> 2), v = y.length, S = s + 7 >> 3, E = 4294967295, x = se.isLittleEndian ? 4278190080 : 255;
    for (f = 0; f < a; f++) {
      for (A = f < n ? ue : i, h = 0, g = 0; g < A; g++) {
        const C = w - l;
        let T = 0;
        const M = C > S ? s : C * 8 - 7, D = M & -8;
        let W = 0, O = 0;
        for (; T < D; T += 8)
          O = c[l++], y[h++] = O & 128 ? E : x, y[h++] = O & 64 ? E : x, y[h++] = O & 32 ? E : x, y[h++] = O & 16 ? E : x, y[h++] = O & 8 ? E : x, y[h++] = O & 4 ? E : x, y[h++] = O & 2 ? E : x, y[h++] = O & 1 ? E : x;
        for (; T < M; T++)
          W === 0 && (O = c[l++], W = 128), y[h++] = O & W ? E : x, W >>= 1;
      }
      for (; h < v; )
        y[h++] = 0;
      d.putImageData(o, 0, f * ue);
    }
  } else if (t.kind === ul.RGBA_32BPP) {
    for (g = 0, _ = s * ue * 4, f = 0; f < n; f++)
      u.set(c.subarray(l, l + _)), l += _, d.putImageData(o, 0, g), g += ue;
    f < a && (_ = s * i * 4, u.set(c.subarray(l, l + _)), d.putImageData(o, 0, g));
  } else if (t.kind === ul.RGB_24BPP)
    for (A = ue, _ = s * A, f = 0; f < a; f++) {
      for (f >= n && (A = i, _ = s * A), h = 0, g = _; g--; )
        u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
      d.putImageData(o, 0, f * ue);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function md(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ue, n = (e - i) / ue, a = i === 0 ? n : n + 1, o = d.createImageData(s, ue);
  let l = 0;
  const h = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const f = u < n ? ue : i;
    ({
      srcPos: l
    } = lp({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: f,
      nonBlackColor: 0
    })), d.putImageData(o, 0, u * ue);
  }
}
function ga(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function ll(d) {
  if (d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0), !ee) {
    const {
      filter: t
    } = d;
    t !== "none" && t !== "" && (d.filter = "none");
  }
}
function bd(d, t) {
  if (t)
    return !0;
  const e = I.singularValueDecompose2dScale(d);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * Oi.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
const fp = ["butt", "round", "square"], pp = ["miter", "round", "bevel"], gp = {}, Ad = {};
var Bi, sc, ic;
const Zc = class Zc {
  constructor(t, e, s, i, n, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h) {
    b(this, Bi);
    this.ctx = t, this.current = new pd(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new dp(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
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
    const n = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, n, a), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", n, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...ht(this.compositeCtx));
    }
    this.ctx.save(), ll(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = ht(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const n = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const l = n.length;
    if (l === o)
      return o;
    const h = l - o > ud && typeof s == "function", c = h ? Date.now() + hp : 0;
    let u = 0;
    const f = this.commonObjs, g = this.objs;
    let A;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (A = a[o], A !== Ue.dependency)
        this[A].apply(this, n[o]);
      else
        for (const _ of n[o]) {
          const w = _.startsWith("g_") ? f : g;
          if (!w.has(_))
            return w.get(_, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++u > ud) {
        if (Date.now() > c)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    m(this, Bi, sc).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), m(this, Bi, ic).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let n = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, u;
    for (; n > 2 && o > 1 || a > 2 && l > 1; ) {
      let f = o, g = l;
      n > 2 && o > 1 && (f = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), n /= o / f), a > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / g), c = this.cachedCanvases.getCanvas(h, f, g), u = c.context, u.clearRect(0, 0, f, g), u.drawImage(t, 0, 0, o, l, 0, 0, f, g), t = c.canvas, o = f, l = g, h = h === "prescale1" ? "prescale2" : "prescale1";
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
    } = t, n = this.current.fillColor, a = this.current.patternFill, o = ht(e);
    let l, h, c, u;
    if ((t.bitmap || t.data) && t.count > 1) {
      const M = t.bitmap || t.data.buffer;
      h = JSON.stringify(a ? o : [o.slice(0, 4), n]), l = this._cachedBitmapsMap.get(M), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(M, l));
      const D = l.get(h);
      if (D && !a) {
        const W = Math.round(Math.min(o[0], o[2]) + o[4]), O = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: D,
          offsetX: W,
          offsetY: O
        };
      }
      c = D;
    }
    c || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), md(u.context, t));
    let f = I.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    f = I.transform(f, [1, 0, 0, 1, 0, -i]);
    const [g, A, _, w] = I.getAxialAlignedBoundingBox([0, 0, s, i], f), y = Math.round(_ - g) || 1, v = Math.round(w - A) || 1, S = this.cachedCanvases.getCanvas("fillCanvas", y, v), E = S.context, x = g, C = A;
    E.translate(-x, -C), E.transform(...f), c || (c = this._scaleImage(u.canvas, os(E)), c = c.img, l && a && l.set(h, c)), E.imageSmoothingEnabled = bd(ht(E), t.interpolate), ol(E, c, 0, 0, c.width, c.height, 0, 0, s, i), E.globalCompositeOperation = "source-in";
    const T = I.transform(os(E), [1, 0, 0, 1, -x, -C]);
    return E.fillStyle = a ? n.getPattern(e, this, T, Xt.FILL) : n, E.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, S.canvas)), {
      canvas: S.canvas,
      offsetX: Math.round(x),
      offsetY: Math.round(C)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = fp[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = pp[t];
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
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
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
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const n = this.ctx;
    n.setTransform(...ht(this.suspendedCtx)), ga(this.suspendedCtx, n), cp(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), ga(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const n = i[0], a = i[1], o = i[2] - n, l = i[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, n, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, n, a, o, l, h, c, u) {
    let f = t.canvas, g = l - c, A = h - u;
    if (a) {
      const w = I.makeHexColor(...a);
      if (g < 0 || A < 0 || g + s > f.width || A + i > f.height) {
        const y = this.cachedCanvases.getCanvas("maskExtension", s, i), v = y.context;
        v.drawImage(f, -g, -A), v.globalCompositeOperation = "destination-atop", v.fillStyle = w, v.fillRect(0, 0, s, i), v.globalCompositeOperation = "source-over", f = y.canvas, g = A = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const y = new Path2D();
        y.rect(g, A, s, i), t.clip(y), t.globalCompositeOperation = "destination-atop", t.fillStyle = w, t.fillRect(g, A, s, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : n === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const _ = new Path2D();
    _.rect(l, h, s, i), e.clip(_), e.globalCompositeOperation = "destination-in", e.drawImage(f, g, A, s, i, l, h, s, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (ga(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), ga(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, n, a) {
    this.ctx.transform(t, e, s, i, n, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, n = this.current;
    let a = n.x, o = n.y, l, h;
    const c = ht(i), u = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, f = u ? s.slice(0) : null;
    for (let g = 0, A = 0, _ = t.length; g < _; g++)
      switch (t[g] | 0) {
        case Ue.rectangle:
          a = e[A++], o = e[A++];
          const w = e[A++], y = e[A++], v = a + w, S = o + y;
          i.moveTo(a, o), w === 0 || y === 0 ? i.lineTo(v, S) : (i.lineTo(v, o), i.lineTo(v, S), i.lineTo(a, S)), u || n.updateRectMinMax(c, [a, o, v, S]), i.closePath();
          break;
        case Ue.moveTo:
          a = e[A++], o = e[A++], i.moveTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Ue.lineTo:
          a = e[A++], o = e[A++], i.lineTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Ue.curveTo:
          l = a, h = o, a = e[A + 4], o = e[A + 5], i.bezierCurveTo(e[A], e[A + 1], e[A + 2], e[A + 3], a, o), n.updateCurvePathMinMax(c, l, h, e[A], e[A + 1], e[A + 2], e[A + 3], a, o, f), A += 6;
          break;
        case Ue.curveTo2:
          l = a, h = o, i.bezierCurveTo(a, o, e[A], e[A + 1], e[A + 2], e[A + 3]), n.updateCurvePathMinMax(c, l, h, a, o, e[A], e[A + 1], e[A + 2], e[A + 3], f), a = e[A + 2], o = e[A + 3], A += 4;
          break;
        case Ue.curveTo3:
          l = a, h = o, a = e[A + 2], o = e[A + 3], i.bezierCurveTo(e[A], e[A + 1], a, o, a, o), n.updateCurvePathMinMax(c, l, h, e[A], e[A + 1], a, o, a, o, f), A += 4;
          break;
        case Ue.closePath:
          i.closePath();
          break;
      }
    u && n.updateScalingPathMinMax(c, f), n.setCurrentPoint(a, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, s = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, os(e), Xt.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let n = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, os(e), Xt.FILL), n = !0);
    const a = this.current.getClippedPathBoundingBox();
    this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), n && e.restore(), t && this.consumePath(a);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = gp;
  }
  eoClip() {
    this.pendingClip = Ad;
  }
  beginText() {
    this.current.textMatrix = xd, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const s of t)
      e.setTransform(...s.transform), e.translate(s.x, s.y), s.addToPath(e, s.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
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
    if (i.fontMatrix = s.fontMatrix || Th, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && U("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const n = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${n}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < cd ? h = cd : e > dd && (h = dd), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
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
  setTextMatrix(t, e, s, i, n, a) {
    this.current.textMatrix = [t, e, s, i, n, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, s, i, n) {
    const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, u = h & Gt.FILL_STROKE_MASK, f = !!(h & Gt.ADD_TO_PATH_FLAG), g = o.patternFill && !l.missingFile, A = o.patternStroke && !l.missingFile;
    let _;
    (l.disableFontFace || f || g || A) && (_ = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g || A ? (a.save(), a.translate(e, s), a.beginPath(), _(a, c), (u === Gt.FILL || u === Gt.FILL_STROKE) && (i && a.setTransform(...i), a.fill()), (u === Gt.STROKE || u === Gt.FILL_STROKE) && (n && a.setTransform(...n), a.stroke()), a.restore()) : ((u === Gt.FILL || u === Gt.FILL_STROKE) && a.fillText(t, e, s), (u === Gt.STROKE || u === Gt.FILL_STROKE) && a.strokeText(t, e, s)), f && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: ht(a),
      x: e,
      y: s,
      fontSize: c,
      addToPath: _
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
    return j(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const n = this.ctx, a = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, c = e.textHScale * h, u = t.length, f = s.vertical, g = f ? 1 : -1, A = s.defaultVMetrics, _ = i * e.fontMatrix[0], w = e.textRenderingMode === Gt.FILL && !s.disableFontFace && !e.patternFill;
    n.save(), n.transform(...e.textMatrix), n.translate(e.x, e.y + e.textRise), h > 0 ? n.scale(c, -1) : n.scale(c, 1);
    let y, v;
    if (e.patternFill) {
      n.save();
      const T = e.fillColor.getPattern(n, this, os(n), Xt.FILL);
      y = ht(n), n.restore(), n.fillStyle = T;
    }
    if (e.patternStroke) {
      n.save();
      const T = e.strokeColor.getPattern(n, this, os(n), Xt.STROKE);
      v = ht(n), n.restore(), n.strokeStyle = T;
    }
    let S = e.lineWidth;
    const E = e.textMatrixScale;
    if (E === 0 || S === 0) {
      const T = e.textRenderingMode & Gt.FILL_STROKE_MASK;
      (T === Gt.STROKE || T === Gt.FILL_STROKE) && (S = this.getSinglePixelWidth());
    } else
      S /= E;
    if (a !== 1 && (n.scale(a, a), S /= a), n.lineWidth = S, s.isInvalidPDFjsFont) {
      const T = [];
      let M = 0;
      for (const D of t)
        T.push(D.unicode), M += D.width;
      n.fillText(T.join(""), 0, 0), e.x += M * _ * c, n.restore(), this.compose();
      return;
    }
    let x = 0, C;
    for (C = 0; C < u; ++C) {
      const T = t[C];
      if (typeof T == "number") {
        x += g * T * i / 1e3;
        continue;
      }
      let M = !1;
      const D = (T.isSpace ? l : 0) + o, W = T.fontChar, O = T.accent;
      let rt, mt, K = T.width;
      if (f) {
        const Z = T.vmetric || A, F = -(T.vmetric ? Z[1] : K * 0.5) * _, H = Z[2] * _;
        K = Z ? -Z[0] : K, rt = F / a, mt = (x + H) / a;
      } else
        rt = x / a, mt = 0;
      if (s.remeasure && K > 0) {
        const Z = n.measureText(W).width * 1e3 / i * a;
        if (K < Z && this.isFontSubpixelAAEnabled) {
          const F = K / Z;
          M = !0, n.save(), n.scale(F, 1), rt /= F;
        } else K !== Z && (rt += (K - Z) / 2e3 * i / a);
      }
      if (this.contentVisible && (T.isInFont || s.missingFile)) {
        if (w && !O)
          n.fillText(W, rt, mt);
        else if (this.paintChar(W, rt, mt, y, v), O) {
          const Z = rt + i * O.offset.x / a, F = mt - i * O.offset.y / a;
          this.paintChar(O.fontChar, Z, F, y, v);
        }
      }
      const Yt = f ? K * _ - D * h : K * _ + D * h;
      x += Yt, M && n.restore();
    }
    f ? e.y -= x : e.x += x * c, n.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, n = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, u = s.fontMatrix || Th, f = t.length, g = s.textRenderingMode === Gt.INVISIBLE;
    let A, _, w, y;
    if (!(g || n === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), A = 0; A < f; ++A) {
        if (_ = t[A], typeof _ == "number") {
          y = o * _ * n / 1e3, this.ctx.translate(y, 0), s.x += y * c;
          continue;
        }
        const v = (_.isSpace ? h : 0) + l, S = i.charProcOperatorList[_.operatorListId];
        if (!S) {
          U(`Type3 character "${_.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = _, this.save(), e.scale(n, n), e.transform(...u), this.executeOperatorList(S), this.restore()), w = I.applyTransform([_.width, 0], u)[0] * n + v, e.translate(w, 0), s.x += w * c;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, s, i, n, a) {
    this.ctx.rect(s, i, n - s, a - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const s = t[1], i = this.baseTransform || ht(this.ctx), n = {
        createCanvasGraphics: (a) => new Zc(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new ec(t, s, this.ctx, n, i);
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
  setStrokeRGBColor(t, e, s) {
    this.ctx.strokeStyle = this.current.strokeColor = I.makeHexColor(t, e, s), this.current.patternStroke = !1;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e, s) {
    this.ctx.fillStyle = this.current.fillColor = I.makeHexColor(t, e, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = op(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, os(e), Xt.SHADING);
    const i = os(e);
    if (i) {
      const {
        width: n,
        height: a
      } = e.canvas, [o, l, h, c] = I.getAxialAlignedBoundingBox([0, 0, n, a], i);
      this.ctx.fillRect(o, l, h - o, c - l);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    it("Should not call beginInlineImage");
  }
  beginImageData() {
    it("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = ht(this.ctx), e)) {
      const s = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(ht(this.ctx), e), this.clip(), this.endPath();
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
    t.isolated || fh("TODO: Support non-isolated groups."), t.knockout && U("Knockout groups not supported.");
    const s = ht(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = I.getAxialAlignedBoundingBox(t.bbox, ht(e));
    const n = [0, 0, e.canvas.width, e.canvas.height];
    i = I.intersect(i, n) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - a, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(c, l, h), f = u.context;
    f.translate(-a, -o), f.transform(...s), t.smask ? this.smaskStack.push({
      canvas: u.canvas,
      context: f,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), ga(e, f), this.ctx = f, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
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
      const i = ht(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const n = I.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(t, e, s, i, n) {
    if (m(this, Bi, sc).call(this), ll(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (n && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
        const [l, h] = I.singularValueDecompose2dScale(ht(this.ctx)), {
          viewportScale: c
        } = this, u = Math.ceil(a * this.outputScaleX * c), f = Math.ceil(o * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(u, f);
        const {
          canvas: g,
          context: A
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, g), this.annotationCanvas.savedCtx = this.ctx, this.ctx = A, this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), ll(this.ctx);
      } else
        ll(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new pd(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), m(this, Bi, ic).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = up(t)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const n = this._createMaskCanvas(t), a = n.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, n.offsetX, n.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, n, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const o = this.ctx;
    o.save();
    const l = ht(o);
    o.transform(e, s, i, n, 0, 0);
    const h = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    for (let c = 0, u = a.length; c < u; c += 2) {
      const f = I.transform(l, [e, s, i, n, a[c], a[c + 1]]), [g, A] = I.applyTransform([0, 0], f);
      o.drawImage(h.canvas, g, A);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const n of t) {
      const {
        data: a,
        width: o,
        height: l,
        transform: h
      } = n, c = this.cachedCanvases.getCanvas("maskCanvas", o, l), u = c.context;
      u.save();
      const f = this.getObject(a, n);
      md(u, f), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, os(e), Xt.FILL) : s, u.fillRect(0, 0, o, l), u.restore(), e.save(), e.transform(...h), e.scale(1, -1), ol(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
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
    const n = this.getObject(t);
    if (!n) {
      U("Dependent image isn't ready yet");
      return;
    }
    const a = n.width, o = n.height, l = [];
    for (let h = 0, c = i.length; h < c; h += 2)
      l.push({
        transform: [e, 0, 0, s, i[h], i[h + 1]],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
    this.paintInlineImageXObjectGroup(n, l);
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
    } = t, n = this.cachedCanvases.getCanvas("inlineImage", s, i), a = n.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", n.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, s = t.height, i = this.ctx;
    if (this.save(), !ee) {
      const {
        filter: o
      } = i;
      o !== "none" && o !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / s);
    let n;
    if (t.bitmap)
      n = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      n = t;
    else {
      const l = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      gd(l, t), n = this.applyTransferMapsToCanvas(l);
    }
    const a = this._scaleImage(n, os(i));
    i.imageSmoothingEnabled = bd(ht(i), t.interpolate), ol(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const n = t.width, a = t.height, l = this.cachedCanvases.getCanvas("inlineImage", n, a).context;
      gd(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const n of e)
      s.save(), s.transform(...n.transform), s.scale(1, -1), ol(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
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
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const s = this.ctx;
    this.pendingClip && (e || (this.pendingClip === Ad ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = ht(this.ctx);
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
        d: n
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(n);
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
        const l = Math.abs(e * n - s * i), h = Math.hypot(e, s), c = Math.hypot(i, n);
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
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: s
    } = this.current, [i, n] = this.getScaleForStroking();
    if (e.lineWidth = s || 1, i === 1 && n === 1) {
      e.stroke();
      return;
    }
    const a = e.getLineDash();
    if (t && e.save(), e.scale(i, n), a.length > 0) {
      const o = Math.max(i, n);
      e.setLineDash(a.map((l) => l / o)), e.lineDashOffset /= o;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
Bi = new WeakSet(), sc = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, ic = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
let or = Zc;
for (const d in Ue)
  or.prototype[d] !== void 0 && (or.prototype[Ue[d]] = or.prototype[d]);
var ro, ao;
class ii {
  static get workerPort() {
    return r(this, ro);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    p(this, ro, t);
  }
  static get workerSrc() {
    return r(this, ao);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    p(this, ao, t);
  }
}
ro = new WeakMap(), ao = new WeakMap(), b(ii, ro, null), b(ii, ao, "");
const hl = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, yt = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function _d() {
}
function Re(d) {
  switch (d instanceof Error || typeof d == "object" && d !== null || it('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new Xn(d.message);
    case "MissingPDFException":
      return new il(d.message);
    case "PasswordException":
      return new Rh(d.message, d.code);
    case "UnexpectedResponseException":
      return new ph(d.message, d.status);
    case "UnknownErrorException":
      return new Ph(d.message, d.details);
    default:
      return new Ph(d.message, d.toString());
  }
}
var Sr, $e, hu, cu, du, yl;
class xa {
  constructor(t, e, s) {
    b(this, $e);
    b(this, Sr, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", m(this, $e, hu).bind(this), {
      signal: r(this, Sr).signal
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
    const i = this.callbackId++, n = Promise.withResolvers();
    this.callbackCapabilities[i] = n;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      n.reject(a);
    }
    return n.promise;
  }
  sendWithStream(t, e, s, i) {
    const n = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[n] = {
          controller: h,
          startCall: c,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: n,
          data: e,
          desiredSize: h.desiredSize
        }, i), c.promise;
      },
      pull: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[n].pullCall = c, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: yt.PULL,
          streamId: n,
          desiredSize: h.desiredSize
        }), c.promise;
      },
      cancel: (h) => {
        wt(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[n].cancelCall = c, this.streamControllers[n].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: yt.CANCEL,
          streamId: n,
          reason: Re(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = r(this, Sr)) == null || t.abort(), p(this, Sr, null);
  }
}
Sr = new WeakMap(), $e = new WeakSet(), hu = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    m(this, $e, du).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === hl.DATA)
      i.resolve(t.data);
    else if (t.callback === hl.ERROR)
      i.reject(Re(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, n = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: hl.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: hl.ERROR,
        callbackId: t.callbackId,
        reason: Re(a)
      });
    });
    return;
  }
  if (t.streamId) {
    m(this, $e, cu).call(this, t);
    return;
  }
  e(t.data);
}, cu = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, u) {
      if (this.isCancelled)
        return;
      const f = this.desiredSize;
      this.desiredSize -= c, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
        sourceName: s,
        targetName: i,
        stream: yt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: yt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      wt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: yt.ERROR,
        streamId: e,
        reason: Re(h)
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
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: yt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: yt.START_COMPLETE,
      streamId: e,
      reason: Re(h)
    });
  });
}, du = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case yt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Re(t.reason));
      break;
    case yt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Re(t.reason));
      break;
    case yt.PULL:
      if (!o) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: yt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || _d).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: yt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: yt.PULL_COMPLETE,
          streamId: e,
          reason: Re(h)
        });
      });
      break;
    case yt.ENQUEUE:
      if (wt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case yt.CLOSE:
      if (wt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), m(this, $e, yl).call(this, a, e);
      break;
    case yt.ERROR:
      wt(a, "error should have stream controller"), a.controller.error(Re(t.reason)), m(this, $e, yl).call(this, a, e);
      break;
    case yt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Re(t.reason)), m(this, $e, yl).call(this, a, e);
      break;
    case yt.CANCEL:
      if (!o)
        break;
      const l = Re(t.reason);
      Promise.try(o.onCancel || _d, l).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: yt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: yt.CANCEL_COMPLETE,
          streamId: e,
          reason: Re(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, yl = async function(t, e) {
  var s, i, n;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (n = t.cancelCall) == null ? void 0 : n.promise]), delete this.streamControllers[e];
};
var fn, oo;
class mp {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    b(this, fn);
    b(this, oo);
    p(this, fn, t), p(this, oo, e);
  }
  getRaw() {
    return r(this, oo);
  }
  get(t) {
    return r(this, fn).get(t) ?? null;
  }
  getAll() {
    return zc(r(this, fn));
  }
  has(t) {
    return r(this, fn).has(t);
  }
}
fn = new WeakMap(), oo = new WeakMap();
const er = Symbol("INTERNAL");
var lo, ho, co, xr;
class bp {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: n
  }) {
    b(this, lo, !1);
    b(this, ho, !1);
    b(this, co, !1);
    b(this, xr, !0);
    p(this, lo, !!(t & Ee.DISPLAY)), p(this, ho, !!(t & Ee.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = n;
  }
  get visible() {
    if (r(this, co))
      return r(this, xr);
    if (!r(this, xr))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return r(this, lo) ? (e == null ? void 0 : e.viewState) !== "OFF" : r(this, ho) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== er && it("Internal method `_setVisible` called."), p(this, co, s), p(this, xr, e);
  }
}
lo = new WeakMap(), ho = new WeakMap(), co = new WeakMap(), xr = new WeakMap();
var wi, et, Cr, Tr, uo, nc;
class Ap {
  constructor(t, e = Ee.DISPLAY) {
    b(this, uo);
    b(this, wi, null);
    b(this, et, /* @__PURE__ */ new Map());
    b(this, Cr, null);
    b(this, Tr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, p(this, Tr, t.order);
      for (const s of t.groups)
        r(this, et).set(s.id, new bp(e, s));
      if (t.baseState === "OFF")
        for (const s of r(this, et).values())
          s._setVisible(er, !1);
      for (const s of t.on)
        r(this, et).get(s)._setVisible(er, !0);
      for (const s of t.off)
        r(this, et).get(s)._setVisible(er, !1);
      p(this, Cr, this.getHash());
    }
  }
  isVisible(t) {
    if (r(this, et).size === 0)
      return !0;
    if (!t)
      return fh("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return r(this, et).has(t.id) ? r(this, et).get(t.id).visible : (U(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return m(this, uo, nc).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!r(this, et).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (r(this, et).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!r(this, et).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (!r(this, et).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!r(this, et).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (!r(this, et).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!r(this, et).has(e))
            return U(`Optional content group not found: ${e}`), !0;
          if (r(this, et).get(e).visible)
            return !1;
        }
        return !0;
      }
      return U(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return U(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var n;
    const i = r(this, et).get(t);
    if (!i) {
      U(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((n = r(this, et).get(o)) == null || n._setVisible(er, !1, !0));
    i._setVisible(er, !!e, !0), p(this, wi, null);
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
      const n = r(this, et).get(i);
      if (n)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !n.visible, e);
            break;
        }
    }
    p(this, wi, null);
  }
  get hasInitialVisibility() {
    return r(this, Cr) === null || this.getHash() === r(this, Cr);
  }
  getOrder() {
    return r(this, et).size ? r(this, Tr) ? r(this, Tr).slice() : [...r(this, et).keys()] : null;
  }
  getGroups() {
    return r(this, et).size > 0 ? zc(r(this, et)) : null;
  }
  getGroup(t) {
    return r(this, et).get(t) || null;
  }
  getHash() {
    if (r(this, wi) !== null)
      return r(this, wi);
    const t = new Jd();
    for (const [e, s] of r(this, et))
      t.update(`${e}:${s.visible}`);
    return p(this, wi, t.hexdigest());
  }
}
wi = new WeakMap(), et = new WeakMap(), Cr = new WeakMap(), Tr = new WeakMap(), uo = new WeakSet(), nc = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const n = t[i];
    let a;
    if (Array.isArray(n))
      a = m(this, uo, nc).call(this, n);
    else if (r(this, et).has(n))
      a = r(this, et).get(n).visible;
    else
      return U(`Optional content group not found: ${n}`), !0;
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
class _p {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    wt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: n,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (n == null ? void 0 : n.length) > 0) {
      const l = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
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
      const i = this._rangeReaders.some(function(n) {
        return n._begin !== t ? !1 : (n._enqueue(s), !0);
      });
      wt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, n;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
      loaded: t.loaded
    }) : (n = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || n.call(i, {
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
    wt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new yp(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new wp(this, t, e);
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
class yp {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = jc(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const n of this._queuedChunks)
      this._loaded += n.byteLength;
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
class wp {
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
function vp(d) {
  let t = !0, e = s("filename\\*", "i").exec(d);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = l(c), c = h(c), n(c);
  }
  if (e = a(d), e) {
    const c = h(e);
    return n(c);
  }
  if (e = s("filename", "i").exec(d), e) {
    e = e[1];
    let c = o(e);
    return c = h(c), n(c);
  }
  function s(c, u) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(c, u) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const f = new TextDecoder(c, {
          fatal: !0
        }), g = gh(u);
        u = f.decode(g), t = !1;
      } catch {
      }
    }
    return u;
  }
  function n(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const u = [];
    let f;
    const g = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (f = g.exec(c)) !== null; ) {
      let [, _, w, y] = f;
      if (_ = parseInt(_, 10), _ in u) {
        if (_ === 0)
          break;
        continue;
      }
      u[_] = [w, y];
    }
    const A = [];
    for (let _ = 0; _ < u.length && _ in u; ++_) {
      let [w, y] = u[_];
      y = o(y), w && (y = unescape(y), _ === 0 && (y = l(y))), A.push(y);
    }
    return A.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const u = c.slice(1).split('\\"');
      for (let f = 0; f < u.length; ++f) {
        const g = u[f].indexOf('"');
        g !== -1 && (u[f] = u[f].slice(0, g), u.length = f + 1), u[f] = u[f].replaceAll(/\\(.)/g, "$1");
      }
      c = u.join('"');
    }
    return c;
  }
  function l(c) {
    const u = c.indexOf("'");
    if (u === -1)
      return c;
    const f = c.slice(0, u), A = c.slice(u + 1).replace(/^[^']*'/, "");
    return i(f, A);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, f, g, A) {
      if (g === "q" || g === "Q")
        return A = A.replaceAll("_", " "), A = A.replaceAll(/=([0-9a-fA-F]{2})/g, function(_, w) {
          return String.fromCharCode(parseInt(w, 16));
        }), i(f, A);
      try {
        A = atob(A);
      } catch {
      }
      return i(f, A);
    });
  }
  return "";
}
function uu(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function Ah(d) {
  try {
    return new URL(d).origin;
  } catch {
  }
  return null;
}
function fu({
  responseHeaders: d,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, n = parseInt(d.get("Content-Length"), 10);
  return !Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * e) || s || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function pu(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = vp(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (jc(e))
      return e;
  }
  return null;
}
function _h(d, t) {
  return d === 404 || d === 0 && t.startsWith("file:") ? new il('Missing PDF "' + t + '".') : new ph(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d);
}
function gu(d) {
  return d === 200 || d === 206;
}
function mu(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function bu(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (U(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class yd {
  constructor(t) {
    N(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = uu(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return wt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Ep(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Sp(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Ep {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, mu(s, this._withCredentials, this._abortController)).then((n) => {
      if (t._responseOrigin = Ah(n.url), !gu(n.status))
        throw _h(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const a = n.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = fu({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = pu(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Xn("Streaming is disabled."));
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
      value: bu(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class Sp {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, mu(n, this._withCredentials, this._abortController)).then((o) => {
      const l = Ah(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!gu(o.status))
        throw _h(o.status, a);
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
      value: bu(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const xh = 200, Ch = 206;
function xp(d) {
  const t = d.response;
  return typeof t != "string" ? t : gh(t).buffer;
}
class Cp {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    N(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = uu(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(t, e, s) {
    const i = {
      begin: t,
      end: e
    };
    for (const n in s)
      i[n] = s[n];
    return this.request(i);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [n, a] of this.headers)
      e.setRequestHeader(n, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Ch) : i.expectedStatus = xh, e.responseType = "arraybuffer", t.onError && (e.onerror = function(n) {
      t.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    var l, h, c;
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      (l = s.onError) == null || l.call(s, i.status);
      return;
    }
    const n = i.status || xh;
    if (!(n === xh && s.expectedStatus === Ch) && n !== s.expectedStatus) {
      (h = s.onError) == null || h.call(s, i.status);
      return;
    }
    const o = xp(i);
    if (n === Ch) {
      const u = i.getResponseHeader("Content-Range"), f = /bytes (\d+)-(\d+)\/(\d+)/.exec(u);
      s.onDone({
        begin: parseInt(f[1], 10),
        chunk: o
      });
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : (c = s.onError) == null || c.call(s, i.status);
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
class Tp {
  constructor(t) {
    this._source = t, this._manager = new Cp(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return wt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Rp(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new Pp(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Rp {
  constructor(t, e) {
    this._manager = t;
    const s = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = t.requestFull(s), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = Ah(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trim().split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: n,
      suggestedLength: a
    } = fu({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    n && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = pu(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
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
    this._storedError = _h(t, this._url), this._headersCapability.reject(this._storedError);
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
class Pp {
  constructor(t, e, s) {
    this._manager = t;
    const i = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = t.url, this._requestId = t.requestRange(e, s, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = Ah((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
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
    this._storedError ?? (this._storedError = _h(t, this._url));
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
const kp = /^[a-z][a-z0-9\-+.]+:/i;
function Mp(d) {
  if (kp.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class Lp {
  constructor(t) {
    this.source = t, this.url = Mp(t.url), wt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return wt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new Ip(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Dp(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Ip {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new il(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Xn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class Dp {
  constructor(t, e, s) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const i = t.source;
    this._isStreamingSupported = !i.disableStream;
    const n = process.getBuiltinModule("fs");
    this._setReadableStream(n.createReadStream(this._url, {
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
const Fp = 1e5, ae = 30, Np = 0.8;
var Sd, vi, he, fo, po, pn, zs, go, mo, gn, Rr, Pr, Ei, kr, bo, Mr, mn, Ao, _o, bn, An, yo, Si, Lr, ai, Au, _u, rc, xe, wl, ac, yu, wu;
const xt = class xt {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    b(this, ai);
    b(this, vi, Promise.withResolvers());
    b(this, he, null);
    b(this, fo, !1);
    b(this, po, !!((Sd = globalThis.FontInspector) != null && Sd.enabled));
    b(this, pn, null);
    b(this, zs, null);
    b(this, go, 0);
    b(this, mo, 0);
    b(this, gn, null);
    b(this, Rr, null);
    b(this, Pr, 0);
    b(this, Ei, 0);
    b(this, kr, /* @__PURE__ */ Object.create(null));
    b(this, bo, []);
    b(this, Mr, null);
    b(this, mn, []);
    b(this, Ao, /* @__PURE__ */ new WeakMap());
    b(this, _o, null);
    var l;
    if (t instanceof ReadableStream)
      p(this, Mr, t);
    else if (typeof t == "object")
      p(this, Mr, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    p(this, he, p(this, Rr, e)), p(this, Ei, s.scale * (globalThis.devicePixelRatio || 1)), p(this, Pr, s.rotation), p(this, zs, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: n,
      pageX: a,
      pageY: o
    } = s.rawDims;
    p(this, _o, [1, 0, 0, -1, -a, o + n]), p(this, mo, i), p(this, go, n), m(l = xt, xe, yu).call(l), Vn(e, s), r(this, vi).promise.finally(() => {
      r(xt, Lr).delete(this), p(this, zs, null), p(this, kr, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = se.platform;
    return j(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      r(this, gn).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          r(this, vi).resolve();
          return;
        }
        r(this, pn) ?? p(this, pn, e.lang), Object.assign(r(this, kr), e.styles), m(this, ai, Au).call(this, e.items), t();
      }, r(this, vi).reject);
    };
    return p(this, gn, r(this, Mr).getReader()), r(xt, Lr).add(this), t(), r(this, vi).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var n;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== r(this, Pr) && (e == null || e(), p(this, Pr, i), Vn(r(this, Rr), {
      rotation: i
    })), s !== r(this, Ei)) {
      e == null || e(), p(this, Ei, s);
      const a = {
        div: null,
        properties: null,
        ctx: m(n = xt, xe, wl).call(n, r(this, pn))
      };
      for (const o of r(this, mn))
        a.properties = r(this, Ao).get(o), a.div = o, m(this, ai, rc).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Xn("TextLayer task cancelled.");
    (e = r(this, gn)) == null || e.cancel(t).catch(() => {
    }), p(this, gn, null), r(this, vi).reject(t);
  }
  get textDivs() {
    return r(this, mn);
  }
  get textContentItemsStr() {
    return r(this, bo);
  }
  static cleanup() {
    if (!(r(this, Lr).size > 0)) {
      r(this, bn).clear();
      for (const {
        canvas: t
      } of r(this, An).values())
        t.remove();
      r(this, An).clear();
    }
  }
};
vi = new WeakMap(), he = new WeakMap(), fo = new WeakMap(), po = new WeakMap(), pn = new WeakMap(), zs = new WeakMap(), go = new WeakMap(), mo = new WeakMap(), gn = new WeakMap(), Rr = new WeakMap(), Pr = new WeakMap(), Ei = new WeakMap(), kr = new WeakMap(), bo = new WeakMap(), Mr = new WeakMap(), mn = new WeakMap(), Ao = new WeakMap(), _o = new WeakMap(), bn = new WeakMap(), An = new WeakMap(), yo = new WeakMap(), Si = new WeakMap(), Lr = new WeakMap(), ai = new WeakSet(), Au = function(t) {
  var i, n;
  if (r(this, fo))
    return;
  (n = r(this, zs)).ctx ?? (n.ctx = m(i = xt, xe, wl).call(i, r(this, pn)));
  const e = r(this, mn), s = r(this, bo);
  for (const a of t) {
    if (e.length > Fp) {
      U("Ignoring additional textDivs for performance reasons."), p(this, fo, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = r(this, he);
        p(this, he, document.createElement("span")), r(this, he).classList.add("markedContent"), a.id !== null && r(this, he).setAttribute("id", `${a.id}`), o.append(r(this, he));
      } else a.type === "endMarkedContent" && p(this, he, r(this, he).parentNode);
      continue;
    }
    s.push(a.str), m(this, ai, _u).call(this, a);
  }
}, _u = function(t) {
  var _;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  r(this, mn).push(e);
  const i = I.transform(r(this, _o), t.transform);
  let n = Math.atan2(i[1], i[0]);
  const a = r(this, kr)[t.fontName];
  a.vertical && (n += Math.PI / 2);
  let o = r(this, po) && a.fontSubstitution || a.fontFamily;
  o = xt.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * m(_ = xt, xe, wu).call(_, o, r(this, pn));
  let c, u;
  n === 0 ? (c = i[4], u = i[5] - h) : (c = i[4] + h * Math.sin(n), u = i[5] - h * Math.cos(n));
  const f = "calc(var(--scale-factor)*", g = e.style;
  r(this, he) === r(this, Rr) ? (g.left = `${(100 * c / r(this, mo)).toFixed(2)}%`, g.top = `${(100 * u / r(this, go)).toFixed(2)}%`) : (g.left = `${f}${c.toFixed(2)}px)`, g.top = `${f}${u.toFixed(2)}px)`), g.fontSize = `${f}${(r(xt, Si) * l).toFixed(2)}px)`, g.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, r(this, po) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let A = !1;
  if (t.str.length > 1)
    A = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const w = Math.abs(t.transform[0]), y = Math.abs(t.transform[3]);
    w !== y && Math.max(w, y) / Math.min(w, y) > 1.5 && (A = !0);
  }
  if (A && (s.canvasWidth = a.vertical ? t.height : t.width), r(this, Ao).set(e, s), r(this, zs).div = e, r(this, zs).properties = s, m(this, ai, rc).call(this, r(this, zs)), s.hasText && r(this, he).append(e), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), r(this, he).append(w);
  }
}, rc = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: n
  } = e;
  let a = "";
  if (r(xt, Si) > 1 && (a = `scale(${1 / r(xt, Si)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = n, {
      canvasWidth: h,
      fontSize: c
    } = s;
    m(o = xt, xe, ac).call(o, i, c * r(this, Ei), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * r(this, Ei) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (n.transform = a);
}, xe = new WeakSet(), wl = function(t = null) {
  let e = r(this, An).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), r(this, An).set(t, e), r(this, yo).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, ac = function(t, e, s) {
  const i = r(this, yo).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, yu = function() {
  if (r(this, Si) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), p(this, Si, t.getBoundingClientRect().height), t.remove();
}, wu = function(t, e) {
  const s = r(this, bn).get(t);
  if (s)
    return s;
  const i = m(this, xe, wl).call(this, e);
  i.canvas.width = i.canvas.height = ae, m(this, xe, ac).call(this, i, ae, t);
  const n = i.measureText("");
  let a = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
  if (a) {
    const c = a / (a + o);
    return r(this, bn).set(t, c), i.canvas.width = i.canvas.height = 0, c;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, ae, ae), i.strokeText("g", 0, 0);
  let l = i.getImageData(0, 0, ae, ae).data;
  o = 0;
  for (let c = l.length - 1 - 3; c >= 0; c -= 4)
    if (l[c] > 0) {
      o = Math.ceil(c / 4 / ae);
      break;
    }
  i.clearRect(0, 0, ae, ae), i.strokeText("A", 0, ae), l = i.getImageData(0, 0, ae, ae).data, a = 0;
  for (let c = 0, u = l.length; c < u; c += 4)
    if (l[c] > 0) {
      a = ae - Math.floor(c / 4 / ae);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const h = a ? a / (a + o) : Np;
  return r(this, bn).set(t, h), h;
}, b(xt, xe), b(xt, bn, /* @__PURE__ */ new Map()), b(xt, An, /* @__PURE__ */ new Map()), b(xt, yo, /* @__PURE__ */ new WeakMap()), b(xt, Si, null), b(xt, Lr, /* @__PURE__ */ new Set());
let Fa = xt;
class Na {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(n) {
      var l;
      if (!n)
        return;
      let a = null;
      const o = n.name;
      if (o === "#text")
        a = n.value;
      else if (Na.shouldBuildText(o))
        (l = n == null ? void 0 : n.attributes) != null && l.textContent ? a = n.attributes.textContent : n.value && (a = n.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!n.children)
        for (const h of n.children)
          i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const Op = 65536, Hp = 100, Bp = 5e3, $p = ee ? tp : Qf, Gp = ee ? ep : iu, zp = ee ? Zf : Jf, Up = ee ? sp : ou;
function Vp(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new oc(), {
    docId: e
  } = t, s = d.url ? jp(d.url) : null, i = d.data ? Wp(d.data) : null, n = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof vu ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : Op;
  let c = d.worker instanceof lr ? d.worker : null;
  const u = d.verbosity, f = typeof d.docBaseUrl == "string" && !bh(d.docBaseUrl) ? d.docBaseUrl : null, g = typeof d.cMapUrl == "string" ? d.cMapUrl : null, A = d.cMapPacked !== !1, _ = d.CMapReaderFactory || Gp, w = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null, y = d.StandardFontDataFactory || Up, v = d.stopAtErrors !== !0, S = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, E = d.isEvalSupported !== !1, x = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !ee, C = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !ee && (se.platform.isFirefox || !globalThis.chrome), T = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, M = typeof d.disableFontFace == "boolean" ? d.disableFontFace : ee, D = d.fontExtraProperties === !0, W = d.enableXfa === !0, O = d.ownerDocument || globalThis.document, rt = d.disableRange === !0, mt = d.disableStream === !0, K = d.disableAutoFetch === !0, Yt = d.pdfBug === !0, Z = d.CanvasFactory || $p, F = d.FilterFactory || zp, H = d.enableHWA === !0, as = l ? l.length : d.length ?? NaN, Ge = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !ee && !M, Ce = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : _ === iu && y === ou && g && w && ba(g, document.baseURI) && ba(w, document.baseURI);
  d.canvasFactory && od("`canvasFactory`-instance option, please use `CanvasFactory` instead."), d.filterFactory && od("`filterFactory`-instance option, please use `FilterFactory` instead.");
  const $t = null;
  Pf(u);
  const Et = {
    canvasFactory: new Z({
      ownerDocument: O,
      enableHWA: H
    }),
    filterFactory: new F({
      docId: e,
      ownerDocument: O
    }),
    cMapReaderFactory: Ce ? null : new _({
      baseUrl: g,
      isCompressed: A
    }),
    standardFontDataFactory: Ce ? null : new y({
      baseUrl: w
    })
  };
  if (!c) {
    const re = {
      verbosity: u,
      port: ii.workerPort
    };
    c = re.port ? lr.fromPort(re) : new lr(re), t._worker = c;
  }
  const Kn = {
    docId: e,
    apiVersion: "4.9.155",
    data: i,
    password: o,
    disableAutoFetch: K,
    rangeChunkSize: h,
    length: as,
    docBaseUrl: f,
    enableXfa: W,
    evaluatorOptions: {
      maxImageSize: S,
      disableFontFace: M,
      ignoreErrors: v,
      isEvalSupported: E,
      isOffscreenCanvasSupported: x,
      isImageDecoderSupported: C,
      canvasMaxAreaInBytes: T,
      fontExtraProperties: D,
      useSystemFonts: Ge,
      cMapUrl: Ce ? g : null,
      standardFontDataUrl: Ce ? w : null
    }
  }, fa = {
    disableFontFace: M,
    fontExtraProperties: D,
    ownerDocument: O,
    pdfBug: Yt,
    styleElement: $t,
    loadingParams: {
      disableAutoFetch: K,
      enableXfa: W
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const re = c.messageHandler.sendWithPromise("GetDocRequest", Kn, i ? [i.buffer] : null);
    let ot;
    if (l)
      ot = new _p(l, {
        disableRange: rt,
        disableStream: mt
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let Qn;
      if (ee)
        if (ba(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype))
            throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          Qn = yd;
        } else
          Qn = Lp;
      else
        Qn = ba(s) ? yd : Tp;
      ot = new Qn({
        url: s,
        length: as,
        httpHeaders: n,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: rt,
        disableStream: mt
      });
    }
    return re.then((Qn) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const id = new xa(e, Qn, c.port), vf = new Kp(id, t, ot, fa, Et);
      t._transport = vf, id.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function jp(d) {
  if (d instanceof URL)
    return d.href;
  try {
    return new URL(d, window.location).href;
  } catch {
    if (ee && typeof d == "string")
      return d;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Wp(d) {
  if (ee && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return gh(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function wd(d) {
  return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var th;
const eh = class eh {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${Kt(eh, th)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s, i;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (n) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, n;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
};
th = new WeakMap(), b(eh, th, 0);
let oc = eh;
class vu {
  constructor(t, e, s = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const s of this._rangeListeners)
      s(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners)
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    it("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class qp {
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
    return j(this, "isPureXfa", !!this._transport._htmlForXfa);
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
var xi, Us, He, sr, vl;
class Xp {
  constructor(t, e, s, i = !1) {
    b(this, He);
    b(this, xi, null);
    b(this, Us, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new ad() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Eu(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
    dontFlip: n = !1
  } = {}) {
    return new nl({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
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
    return j(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = li.ENABLE,
    transform: n = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: c = null,
    isEditing: u = !1
  }) {
    var E, x;
    (E = this._stats) == null || E.time("Overall");
    const f = this._transport.getRenderingIntent(s, i, c, u), {
      renderingIntent: g,
      cacheKey: A
    } = f;
    p(this, Us, !1), m(this, He, vl).call(this), o || (o = this._transport.getOptionalContentConfig(g));
    let _ = this._intentStates.get(A);
    _ || (_ = /* @__PURE__ */ Object.create(null), this._intentStates.set(A, _)), _.streamReaderCancelTimeout && (clearTimeout(_.streamReaderCancelTimeout), _.streamReaderCancelTimeout = null);
    const w = !!(g & Ee.PRINT);
    _.displayReadyCapability || (_.displayReadyCapability = Promise.withResolvers(), _.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (x = this._stats) == null || x.time("Page Request"), this._pumpOperatorList(f));
    const y = (C) => {
      var T;
      _.renderTasks.delete(v), (this._maybeCleanupAfterRender || w) && p(this, Us, !0), m(this, He, sr).call(this, !w), C ? (v.capability.reject(C), this._abortOperatorList({
        intentState: _,
        reason: C instanceof Error ? C : new Error(C)
      })) : v.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (T = globalThis.Stats) != null && T.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, v = new hc({
      callback: y,
      params: {
        canvasContext: t,
        viewport: e,
        transform: n,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: l,
      operatorList: _.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !w,
      pdfBug: this._pdfBug,
      pageColors: h
    });
    (_.renderTasks || (_.renderTasks = /* @__PURE__ */ new Set())).add(v);
    const S = v.task;
    return Promise.all([_.displayReadyCapability.promise, o]).then(([C, T]) => {
      var M;
      if (this.destroyed) {
        y();
        return;
      }
      if ((M = this._stats) == null || M.time("Rendering"), !(T.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      v.initializeGraphics({
        transparency: C,
        optionalContentConfig: T
      }), v.operatorListChanged();
    }).catch(y), S;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = li.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function n() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = n, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
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
      return this.getXfa().then((s) => Na.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function n() {
        a.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), n();
        }, i);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      n();
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
    return this.objs.clear(), p(this, Us, !1), m(this, He, vl).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    p(this, Us, !0);
    const e = m(this, He, sr).call(this, !1);
    return t && e && this._stats && (this._stats = new ad()), e;
  }
  _startRenderPage(t, e) {
    var i, n;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (n = s.displayReadyCapability) == null || n.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && m(this, He, sr).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: n,
      transfer: a
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: n,
      modifiedIds: i
    }, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const c = () => {
      l.read().then(({
        value: u,
        done: f
      }) => {
        if (f) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), c());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const f of h.renderTasks)
              f.operatorListChanged();
            m(this, He, sr).call(this, !0);
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
        if (e instanceof Vc) {
          let i = Hp;
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
      if (t.streamReader.cancel(new Xn(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, n] of this._intentStates)
          if (n === t) {
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
xi = new WeakMap(), Us = new WeakMap(), He = new WeakSet(), sr = function(t = !1) {
  if (m(this, He, vl).call(this), !r(this, Us) || this.destroyed)
    return !1;
  if (t)
    return p(this, xi, setTimeout(() => {
      p(this, xi, null), m(this, He, sr).call(this, !1);
    }, Bp)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), p(this, Us, !1), !0;
}, vl = function() {
  r(this, xi) && (clearTimeout(r(this, xi)), p(this, xi, null));
};
var Vs, sh;
class Yp {
  constructor() {
    b(this, Vs, /* @__PURE__ */ new Map());
    b(this, sh, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    r(this, sh).then(() => {
      for (const [i] of r(this, Vs))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: n
      } = s;
      if (n.aborted) {
        U("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => n.removeEventListener("abort", a), n.addEventListener("abort", a);
    }
    r(this, Vs).set(e, i);
  }
  removeEventListener(t, e) {
    const s = r(this, Vs).get(e);
    s == null || s(), r(this, Vs).delete(e);
  }
  terminate() {
    for (const [, t] of r(this, Vs))
      t == null || t();
    r(this, Vs).clear();
  }
}
Vs = new WeakMap(), sh = new WeakMap();
var ih, _n, yn, Ir, El, Dr, Sl;
const lt = class lt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = kf()
  } = {}) {
    b(this, Ir);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = r(lt, yn)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (r(lt, yn) || p(lt, yn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new xa("main", "worker", t), this._messageHandler.on("ready", function() {
    }), m(this, Ir, El).call(this);
  }
  _initialize() {
    if (r(lt, _n) || r(lt, Dr, Sl)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = lt;
    try {
      lt._isSameOrigin(window.location.href, t) || (t = lt._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), s = new xa("main", "worker", e), i = () => {
        n.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, n = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: n.signal
      }), s.on("test", (o) => {
        if (n.abort(), this.destroyed || !o) {
          i();
          return;
        }
        this._messageHandler = s, this._port = e, this._webWorker = e, m(this, Ir, El).call(this);
      }), s.on("ready", (o) => {
        if (n.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          a();
        } catch {
          this._setupFakeWorker();
        }
      });
      const a = () => {
        const o = new Uint8Array();
        s.send("test", o, [o.buffer]);
      };
      a();
      return;
    } catch {
      fh("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    r(lt, _n) || (U("Setting up fake worker."), p(lt, _n, !0)), lt._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new Yp();
      this._port = e;
      const s = `fake${Kt(lt, ih)._++}`, i = new xa(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new xa(s, s + "_worker", e), m(this, Ir, El).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t, e, s;
    this.destroyed = !0, (t = this._webWorker) == null || t.terminate(), this._webWorker = null, (e = r(lt, yn)) == null || e.delete(this._port), this._port = null, (s = this._messageHandler) == null || s.destroy(), this._messageHandler = null;
  }
  static fromPort(t) {
    var s;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (s = r(this, yn)) == null ? void 0 : s.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new lt(t);
  }
  static get workerSrc() {
    if (ii.workerSrc)
      return ii.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return j(this, "_setupFakeWorkerGlobal", (async () => r(this, Dr, Sl) ? r(this, Dr, Sl) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
ih = new WeakMap(), _n = new WeakMap(), yn = new WeakMap(), Ir = new WeakSet(), El = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, Dr = new WeakSet(), Sl = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(lt, Dr), b(lt, ih, 0), b(lt, _n, !1), b(lt, yn), ee && (p(lt, _n, !0), ii.workerSrc || (ii.workerSrc = "./pdf.worker.mjs")), lt._isSameOrigin = (t, e) => {
  let s;
  try {
    if (s = new URL(t), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
}, lt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let lr = lt;
var js, _s, Fr, Nr, ys, wn, Ca;
class Kp {
  constructor(t, e, s, i, n) {
    b(this, wn);
    b(this, js, /* @__PURE__ */ new Map());
    b(this, _s, /* @__PURE__ */ new Map());
    b(this, Fr, /* @__PURE__ */ new Map());
    b(this, Nr, /* @__PURE__ */ new Map());
    b(this, ys, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Eu(), this.fontLoader = new Yf({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return j(this, "annotationStorage", new Xc());
  }
  getRenderingIntent(t, e = li.ENABLE, s = null, i = !1, n = !1) {
    let a = Ee.DISPLAY, o = Qh;
    switch (t) {
      case "any":
        a = Ee.ANY;
        break;
      case "display":
        break;
      case "print":
        a = Ee.PRINT;
        break;
      default:
        U(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Ee.PRINT && s instanceof tu ? s : this.annotationStorage;
    switch (e) {
      case li.DISABLE:
        a += Ee.ANNOTATIONS_DISABLE;
        break;
      case li.ENABLE:
        break;
      case li.ENABLE_FORMS:
        a += Ee.ANNOTATIONS_FORMS;
        break;
      case li.ENABLE_STORAGE:
        a += Ee.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        U(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += Ee.IS_EDITING), n && (a += Ee.OPLIST);
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
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = r(this, ys)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of r(this, _s).values())
      t.push(i._destroy());
    r(this, _s).clear(), r(this, Fr).clear(), r(this, Nr).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, n;
      this.commonObjs.clear(), this.fontLoader.clear(), r(this, js).clear(), this.filterFactory.destroy(), Fa.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Xn("Worker was terminated.")), (n = this.messageHandler) == null || n.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      wt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
        this._lastProgress = {
          loaded: n.loaded,
          total: n.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: n,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          wt(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]);
        }).catch((n) => {
          i.error(n);
        });
      }, i.onCancel = (n) => {
        this._fullReader.cancel(n), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: a
      } = this._fullReader;
      return (!i || !n) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, i) => {
      wt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n = this._networkStream.getRangeReader(s.begin, s.end);
      if (!n) {
        i.close();
        return;
      }
      i.onPull = () => {
        n.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          wt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        n.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new qp(s, this));
    }), t.on("DocException", function(s) {
      let i;
      switch (s.name) {
        case "PasswordException":
          i = new Rh(s.message, s.code);
          break;
        case "InvalidPDFException":
          i = new Cd(s.message);
          break;
        case "MissingPDFException":
          i = new il(s.message);
          break;
        case "UnexpectedResponseException":
          i = new ph(s.message, s.status);
          break;
        case "UnknownErrorException":
          i = new Ph(s.message, s.details);
          break;
        default:
          it("DocException - expected a valid Error.");
      }
      e._capability.reject(i);
    }), t.on("PasswordRequest", (s) => {
      if (p(this, ys, Promise.withResolvers()), e.onPassword) {
        const i = (n) => {
          n instanceof Error ? r(this, ys).reject(n) : r(this, ys).resolve({
            password: n
          });
        };
        try {
          e.onPassword(i, s.code);
        } catch (n) {
          r(this, ys).reject(n);
        }
      } else
        r(this, ys).reject(new Rh(s.message, s.code));
      return r(this, ys).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      r(this, _s).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, n]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: o,
            fontExtraProperties: l,
            pdfBug: h
          } = this._params;
          if ("error" in n) {
            const g = n.error;
            U(`Error during font loading: ${g}`), this.commonObjs.resolve(s, g);
            break;
          }
          const c = h && ((a = globalThis.FontInspector) != null && a.enabled) ? (g, A) => globalThis.FontInspector.fontAdded(g, A) : null, u = new Kf(n, {
            disableFontFace: o,
            inspectFont: c
          });
          this.fontLoader.bind(u).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !l && u.data && (u.data = null), this.commonObjs.resolve(s, u);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: f
          } = n;
          wt(f, "The imageRef must be defined.");
          for (const g of r(this, _s).values())
            for (const [, A] of g.objs)
              if ((A == null ? void 0 : A.ref) === f)
                return A.dataLen ? (this.commonObjs.resolve(s, structuredClone(A)), A.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, n);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, n, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = r(this, _s).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (n) {
          case "Image":
            o.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > xf && (o._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${n}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBuiltInCMap", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.cMapReaderFactory)
        throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.cMapReaderFactory.fetch(s);
    }), t.on("FetchStandardFontData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.standardFontDataFactory)
        throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.standardFontDataFactory.fetch(s);
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
    const e = t - 1, s = r(this, Fr).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((n) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      n.refStr && r(this, Nr).set(n.refStr, t);
      const a = new Xp(e, n, this, this._params.pdfBug);
      return r(this, _s).set(e, a), a;
    });
    return r(this, Fr).set(e, i), i;
  }
  getPageIndex(t) {
    return wd(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
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
    return m(this, wn, Ca).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return m(this, wn, Ca).call(this, "HasJSActions");
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
    return m(this, wn, Ca).call(this, "GetDocJSActions");
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
    return m(this, wn, Ca).call(this, "GetOptionalContentConfig").then((e) => new Ap(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = r(this, js).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var n, a;
      return {
        info: i[0],
        metadata: i[1] ? new mp(i[1]) : null,
        contentDispositionFilename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return r(this, js).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of r(this, _s).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), r(this, js).clear(), this.filterFactory.destroy(!0), Fa.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!wd(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return r(this, Nr).get(e) ?? null;
  }
}
js = new WeakMap(), _s = new WeakMap(), Fr = new WeakMap(), Nr = new WeakMap(), ys = new WeakMap(), wn = new WeakSet(), Ca = function(t, e = null) {
  const s = r(this, js).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return r(this, js).set(t, i), i;
};
const cl = Symbol("INITIAL_DATA");
var Xe, wo, lc;
class Eu {
  constructor() {
    b(this, wo);
    b(this, Xe, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = m(this, wo, lc).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = r(this, Xe)[t];
    if (!s || s.data === cl)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = r(this, Xe)[t];
    return !!e && e.data !== cl;
  }
  resolve(t, e = null) {
    const s = m(this, wo, lc).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in r(this, Xe)) {
      const {
        data: s
      } = r(this, Xe)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    p(this, Xe, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in r(this, Xe)) {
      const {
        data: e
      } = r(this, Xe)[t];
      e !== cl && (yield [t, e]);
    }
  }
}
Xe = new WeakMap(), wo = new WeakSet(), lc = function(t) {
  var e;
  return (e = r(this, Xe))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: cl
  });
};
var Ci;
class Qp {
  constructor(t) {
    b(this, Ci, null);
    p(this, Ci, t), this.onContinue = null;
  }
  get promise() {
    return r(this, Ci).capability.promise;
  }
  cancel(t = 0) {
    r(this, Ci).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = r(this, Ci).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = r(this, Ci);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
Ci = new WeakMap();
var Ti, vn;
const ji = class ji {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: n,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: c = !1,
    pdfBug: u = !1,
    pageColors: f = null
  }) {
    b(this, Ti, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = f, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Qp(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
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
      if (r(ji, vn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      r(ji, vn).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: n,
      background: a
    } = this.params;
    this.gfx = new or(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: n,
      viewport: i,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }
  cancel(t = null, e = 0) {
    var s;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), r(this, Ti) && (window.cancelAnimationFrame(r(this, Ti)), p(this, Ti, null)), r(ji, vn).delete(this._canvas), this.callback(t || new Vc(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
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
    this._useRequestAnimationFrame ? p(this, Ti, window.requestAnimationFrame(() => {
      p(this, Ti, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), r(ji, vn).delete(this._canvas), this.callback())));
  }
};
Ti = new WeakMap(), vn = new WeakMap(), b(ji, vn, /* @__PURE__ */ new WeakSet());
let hc = ji;
const Jp = "4.9.155", Zp = "a4eb8407c";
function vd(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function ma(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Ed {
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
    return t = ma(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = vd(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(ma);
  }
  static RGB_HTML(t) {
    return `#${t.map(vd).join("")}`;
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
    return [ma(1 - Math.min(1, t + i)), ma(1 - Math.min(1, s + i)), ma(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, n = 1 - e, a = 1 - s, o = Math.min(i, n, a);
    return ["CMYK", i, n, a, o];
  }
}
class tg {
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
    it("Abstract method `_createSVG` called.");
  }
}
class Kc extends tg {
  _createSVG(t) {
    return document.createElementNS(ks, t);
  }
}
class Su {
  static setupStorage(t, e, s, i, n) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), n === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), n === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), n === "print")
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
    linkService: n
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
    o && n.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var u, f;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, n = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: n,
      linkService: s
    });
    const o = n !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const g = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = g;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const g = document.createTextNode(i.value);
        a.append(g), o && Na.shouldBuildText(i.name) && h.push(g);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [g, A, _] = c.at(-1);
      if (A + 1 === g.children.length) {
        c.pop();
        continue;
      }
      const w = g.children[++c.at(-1)[1]];
      if (w === null)
        continue;
      const {
        name: y
      } = w;
      if (y === "#text") {
        const S = document.createTextNode(w.value);
        h.push(S), _.append(S);
        continue;
      }
      const v = (u = w == null ? void 0 : w.attributes) != null && u.xmlns ? document.createElementNS(w.attributes.xmlns, y) : document.createElement(y);
      if (_.append(v), w.attributes && this.setAttributes({
        html: v,
        element: w,
        storage: e,
        intent: n,
        linkService: s
      }), ((f = w.children) == null ? void 0 : f.length) > 0)
        c.push([w, -1, v]);
      else if (w.value) {
        const S = document.createTextNode(w.value);
        o && Na.shouldBuildText(y) && h.push(S), v.append(S);
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
const al = 1e3, eg = 9, Wn = /* @__PURE__ */ new WeakSet();
function Ni(d) {
  return {
    width: d[2] - d[0],
    height: d[3] - d[1]
  };
}
class sg {
  static create(t) {
    switch (t.data.annotationType) {
      case St.LINK:
        return new xu(t);
      case St.TEXT:
        return new ig(t);
      case St.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new ng(t);
          case "Btn":
            return t.data.radioButton ? new Ru(t) : t.data.checkBox ? new ag(t) : new og(t);
          case "Ch":
            return new lg(t);
          case "Sig":
            return new rg(t);
        }
        return new Yn(t);
      case St.POPUP:
        return new dc(t);
      case St.FREETEXT:
        return new Iu(t);
      case St.LINE:
        return new cg(t);
      case St.SQUARE:
        return new dg(t);
      case St.CIRCLE:
        return new ug(t);
      case St.POLYLINE:
        return new Du(t);
      case St.CARET:
        return new pg(t);
      case St.INK:
        return new Qc(t);
      case St.POLYGON:
        return new fg(t);
      case St.HIGHLIGHT:
        return new Fu(t);
      case St.UNDERLINE:
        return new gg(t);
      case St.SQUIGGLY:
        return new mg(t);
      case St.STRIKEOUT:
        return new bg(t);
      case St.STAMP:
        return new Nu(t);
      case St.FILEATTACHMENT:
        return new Ag(t);
      default:
        return new _t(t);
    }
  }
}
var En, Or, Hr, vo, cc;
const td = class td {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    b(this, vo);
    b(this, En, null);
    b(this, Or, !1);
    b(this, Hr, null);
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
    return td._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    r(this, En) || p(this, En, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && m(this, vo, cc).call(this, e), (s = r(this, Hr)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    r(this, En) && (m(this, vo, cc).call(this, r(this, En).rect), (t = r(this, Hr)) == null || t.popup.resetEdited(), p(this, En, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", e.id), this instanceof Yn || (n.tabIndex = al);
    const {
      style: a
    } = n;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof dc) {
      const {
        rotation: _
      } = e;
      return !e.hasOwnCanvas && _ !== 0 && this.setRotation(_, n), n;
    }
    const {
      width: o,
      height: l
    } = Ni(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const _ = e.borderStyle.horizontalCornerRadius, w = e.borderStyle.verticalCornerRadius;
      if (_ > 0 || w > 0) {
        const v = `calc(${_}px * var(--scale-factor)) / calc(${w}px * var(--scale-factor))`;
        a.borderRadius = v;
      } else if (this instanceof Ru) {
        const v = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
        a.borderRadius = v;
      }
      switch (e.borderStyle.style) {
        case pa.SOLID:
          a.borderStyle = "solid";
          break;
        case pa.DASHED:
          a.borderStyle = "dashed";
          break;
        case pa.BEVELED:
          U("Unimplemented border style: beveled");
          break;
        case pa.INSET:
          U("Unimplemented border style: inset");
          break;
        case pa.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const y = e.borderColor || null;
      y ? (p(this, Or, !0), a.borderColor = I.makeHexColor(y[0] | 0, y[1] | 0, y[2] | 0)) : a.borderWidth = 0;
    }
    const h = I.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: u,
      pageX: f,
      pageY: g
    } = i.rawDims;
    a.left = `${100 * (h[0] - f) / c}%`, a.top = `${100 * (h[1] - g) / u}%`;
    const {
      rotation: A
    } = e;
    return e.hasOwnCanvas || A === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / u}%`) : this.setRotation(A, n), n;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: n,
      height: a
    } = Ni(this.data.rect);
    let o, l;
    t % 180 === 0 ? (o = 100 * n / s, l = 100 * a / i) : (o = 100 * a / s, l = 100 * n / i), e.style.width = `${o}%`, e.style.height = `${l}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const n = i.detail[e], a = n[0], o = n.slice(1);
      i.target.style[s] = Ed[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Ed[`${a}_rgb`](o)
      });
    };
    return j(this, "_commonActions", {
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
      const n = t[i] || s[i];
      n == null || n(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, n] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: n
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
    const [e, s, i, n] = this.data.rect.map((_) => Math.fround(_));
    if (t.length === 8) {
      const [_, w, y, v] = t.subarray(2, 6);
      if (i === _ && n === w && e === y && s === v)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (r(this, Or)) {
      const {
        borderColor: _,
        borderWidth: w
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${_}" stroke-width="${w}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = n - s, {
      svgFactory: c
    } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const f = c.createElement("defs");
    u.append(f);
    const g = c.createElement("clipPath"), A = `clippath_${this.data.id}`;
    g.setAttribute("id", A), g.setAttribute("clipPathUnits", "objectBoundingBox"), f.append(g);
    for (let _ = 2, w = t.length; _ < w; _ += 8) {
      const y = t[_], v = t[_ + 1], S = t[_ + 2], E = t[_ + 3], x = c.createElement("rect"), C = (S - e) / l, T = (n - v) / h, M = (y - S) / l, D = (v - E) / h;
      x.setAttribute("x", C), x.setAttribute("y", T), x.setAttribute("width", M), x.setAttribute("height", D), g.append(x), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${C}" y="${T}" width="${M}" height="${D}"/>`);
    }
    r(this, Or) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${A})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = p(this, Hr, new dc({
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
    it("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: n,
          id: a,
          exportValues: o
        } of i) {
          if (n === -1 || a === e)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
          if (h && !Wn.has(h)) {
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
        exportValue: n
      } = i, a = i.getAttribute("data-element-id");
      a !== e && Wn.has(i) && s.push({
        id: a,
        exportValue: n,
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
};
En = new WeakMap(), Or = new WeakMap(), Hr = new WeakMap(), vo = new WeakSet(), cc = function(t) {
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
          pageWidth: n,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t);
  const {
    width: h,
    height: c
  } = Ni(t);
  e.left = `${100 * (t[0] - o) / n}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * h / n}%`, e.height = `${100 * c / a}%`) : this.setRotation(i);
};
let _t = td;
var Se, Gi, Cu, Tu;
class xu extends _t {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    b(this, Se);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let n = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), n = !0) : e.action ? (this._bindNamedAction(i, e.action), n = !0) : e.attachment ? (m(this, Se, Cu).call(this, i, e.attachment, e.attachmentDest), n = !0) : e.setOCGState ? (m(this, Se, Tu).call(this, i, e.setOCGState), n = !0) : e.dest ? (this._bindLink(i, e.dest), n = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), n = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && m(this, Se, Gi).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), m(this, Se, Gi).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const n of Object.keys(s.actions)) {
      const a = i.get(n);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: n
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), m(this, Se, Gi).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), m(this, Se, Gi).call(this), !this._fieldObjects) {
      U('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      i == null || i();
      const {
        fields: n,
        refs: a,
        include: o
      } = s, l = [];
      if (n.length !== 0 || a.length !== 0) {
        const f = new Set(a);
        for (const g of n) {
          const A = this._fieldObjects[g] || [];
          for (const {
            id: _
          } of A)
            f.add(_);
        }
        for (const g of Object.values(this._fieldObjects))
          for (const A of g)
            f.has(A.id) === o && l.push(A);
      } else
        for (const f of Object.values(this._fieldObjects))
          l.push(...f);
      const h = this.annotationStorage, c = [];
      for (const f of l) {
        const {
          id: g
        } = f;
        switch (c.push(g), f.type) {
          case "text": {
            const _ = f.defaultValue || "";
            h.setValue(g, {
              value: _
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const _ = f.defaultValue === f.exportValues;
            h.setValue(g, {
              value: _
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const _ = f.defaultValue || "";
            h.setValue(g, {
              value: _
            });
            break;
          }
          default:
            continue;
        }
        const A = document.querySelector(`[data-element-id="${g}"]`);
        if (A) {
          if (!Wn.has(A)) {
            U(`_bindResetFormAction - element not allowed: ${g}`);
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
Se = new WeakSet(), Gi = function() {
  this.container.setAttribute("data-internal-link", "");
}, Cu = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, m(this, Se, Gi).call(this);
}, Tu = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), m(this, Se, Gi).call(this);
};
class ig extends _t {
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
class Yn extends _t {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return se.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, n) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(a),
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
      n && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var n, a, o;
    for (const [l, h] of s)
      (h === "Action" || (n = this.data.actions) != null && n[h]) && ((h === "Focus" || h === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, h, i), h === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : I.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || eg, n = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (wh * i)) || 1, u = h / c;
      a = Math.min(i, l(u / wh));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / wh));
    }
    n.fontSize = `calc(${a}px * var(--scale-factor))`, n.color = I.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class ng extends Yn {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const n = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), n.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    var i, n;
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
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Wn.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = al, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (f) => {
        t.setValue(e, {
          value: f.target.value
        }), this.setPropertyOnSiblings(s, "value", f.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (f) => {
        const g = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = g, c.formattedValue = null;
      });
      let u = (f) => {
        const {
          formattedValue: g
        } = c;
        g != null && (f.target.value = g), f.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (g) => {
          var _;
          if (c.focused)
            return;
          const {
            target: A
          } = g;
          c.userValue && (A.value = c.userValue), c.lastCommittedValue = A.value, c.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (g) => {
          this.showElementAndHideCanvas(g.target);
          const A = {
            value(_) {
              c.userValue = _.detail.value ?? "", t.setValue(e, {
                value: c.userValue.toString()
              }), _.target.value = c.userValue;
            },
            formattedValue(_) {
              const {
                formattedValue: w
              } = _.detail;
              c.formattedValue = w, w != null && _.target !== document.activeElement && (_.target.value = w), t.setValue(e, {
                formattedValue: w
              });
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var S;
              const {
                charLimit: w
              } = _.detail, {
                target: y
              } = _;
              if (w === 0) {
                y.removeAttribute("maxLength");
                return;
              }
              y.setAttribute("maxLength", w);
              let v = c.userValue;
              !v || v.length <= w || (v = v.slice(0, w), y.value = c.userValue = v, t.setValue(e, {
                value: v
              }), (S = this.linkService.eventBus) == null || S.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: v,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: y.selectionStart,
                  selEnd: y.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(A, g);
        }), s.addEventListener("keydown", (g) => {
          var w;
          c.commitKey = 1;
          let A = -1;
          if (g.key === "Escape" ? A = 0 : g.key === "Enter" && !this.data.multiLine ? A = 2 : g.key === "Tab" && (c.commitKey = 3), A === -1)
            return;
          const {
            value: _
          } = g.target;
          c.lastCommittedValue !== _ && (c.lastCommittedValue = _, c.userValue = _, (w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: A,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          }));
        });
        const f = u;
        u = null, s.addEventListener("blur", (g) => {
          var _, w;
          if (!c.focused || !g.relatedTarget)
            return;
          (_ = this.data.actions) != null && _.Blur || (c.focused = !1);
          const {
            value: A
          } = g.target;
          c.userValue = A, c.lastCommittedValue !== A && ((w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: A,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          })), f(g);
        }), (n = this.data.actions) != null && n.Keystroke && s.addEventListener("beforeinput", (g) => {
          var x;
          c.lastCommittedValue = null;
          const {
            data: A,
            target: _
          } = g, {
            value: w,
            selectionStart: y,
            selectionEnd: v
          } = _;
          let S = y, E = v;
          switch (g.inputType) {
            case "deleteWordBackward": {
              const C = w.substring(0, y).match(/\w*[^\w]*$/);
              C && (S -= C[0].length);
              break;
            }
            case "deleteWordForward": {
              const C = w.substring(y).match(/^[^\w]*\w*/);
              C && (E += C[0].length);
              break;
            }
            case "deleteContentBackward":
              y === v && (S -= 1);
              break;
            case "deleteContentForward":
              y === v && (E += 1);
              break;
          }
          g.preventDefault(), (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: w,
              change: A || "",
              willCommit: !1,
              selStart: S,
              selEnd: E
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (g) => g.target.value);
      }
      if (u && s.addEventListener("blur", u), this.data.comb) {
        const g = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${g}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class rg extends Yn {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class ag extends Yn {
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
    const n = document.createElement("input");
    return Wn.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", e.exportValue), n.tabIndex = al, n.addEventListener("change", (a) => {
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
    }), n.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class Ru extends Yn {
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
    const n = document.createElement("input");
    if (Wn.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = al, n.addEventListener("change", (a) => {
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
    }), n.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      n.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const c = a === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const f = c && u.id === s;
              u.domElement && (u.domElement.checked = f), t.setValue(u.id, {
                value: f
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class og extends xu {
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
class lg extends Yn {
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
    Wn.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = al;
    let n = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const u = this.data.defaultFieldValue;
      for (const f of i.options)
        f.selected = f.value === u;
    });
    for (const c of this.data.options) {
      const u = document.createElement("option");
      u.textContent = c.displayValue, u.value = c.exportValue, s.value.includes(c.exportValue) && (u.setAttribute("selected", !0), n = !1), i.append(u);
    }
    let a = null;
    if (n) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), a = () => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (c) => {
      const u = c ? "value" : "textContent", {
        options: f,
        multiple: g
      } = i;
      return g ? Array.prototype.filter.call(f, (A) => A.selected).map((A) => A[u]) : f.selectedIndex === -1 ? null : f[f.selectedIndex][u];
    };
    let l = o(!1);
    const h = (c) => {
      const u = c.target.options;
      return Array.prototype.map.call(u, (f) => ({
        displayValue: f.textContent,
        exportValue: f.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const u = {
        value(f) {
          a == null || a();
          const g = f.detail.value, A = new Set(Array.isArray(g) ? g : [g]);
          for (const _ of i.options)
            _.selected = A.has(_.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(f) {
          i.multiple = !0;
        },
        remove(f) {
          const g = i.options, A = f.detail.remove;
          g[A].selected = !1, i.remove(A), g.length > 0 && Array.prototype.findIndex.call(g, (w) => w.selected) === -1 && (g[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        clear(f) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(f) {
          const {
            index: g,
            displayValue: A,
            exportValue: _
          } = f.detail.insert, w = i.children[g], y = document.createElement("option");
          y.textContent = A, y.value = _, w ? w.before(y) : i.append(y), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        items(f) {
          const {
            items: g
          } = f.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const A of g) {
            const {
              displayValue: _,
              exportValue: w
            } = A, y = document.createElement("option");
            y.textContent = _, y.value = w, i.append(y);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        indices(f) {
          const g = new Set(f.detail.indices);
          for (const A of f.target.options)
            A.selected = g.has(A.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(f) {
          f.target.disabled = !f.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, c);
    }), i.addEventListener("input", (c) => {
      var g;
      const u = o(!0), f = o(!1);
      t.setValue(e, {
        value: u
      }), c.preventDefault(), (g = this.linkService.eventBus) == null || g.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: f,
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
class dc extends _t {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: _t._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new hg({
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
    return this.container.setAttribute("aria-controls", e.map((s) => `${Uc}${s}`).join(",")), this.container;
  }
}
var Br, nh, rh, $r, Sn, gt, Ws, Gr, Eo, So, zr, qs, Ye, Xs, xo, Ys, Co, xn, Cn, nt, xl, uc, Pu, ku, Mu, Lu, Cl, Tl, fc;
class hg {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: n,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: h,
    parentRect: c,
    open: u
  }) {
    b(this, nt);
    b(this, Br, m(this, nt, Mu).bind(this));
    b(this, nh, m(this, nt, fc).bind(this));
    b(this, rh, m(this, nt, Tl).bind(this));
    b(this, $r, m(this, nt, Cl).bind(this));
    b(this, Sn, null);
    b(this, gt, null);
    b(this, Ws, null);
    b(this, Gr, null);
    b(this, Eo, null);
    b(this, So, null);
    b(this, zr, null);
    b(this, qs, !1);
    b(this, Ye, null);
    b(this, Xs, null);
    b(this, xo, null);
    b(this, Ys, null);
    b(this, Co, null);
    b(this, xn, null);
    b(this, Cn, !1);
    var f;
    p(this, gt, t), p(this, Co, i), p(this, Ws, a), p(this, Ys, o), p(this, So, l), p(this, Sn, e), p(this, xo, h), p(this, zr, c), p(this, Eo, s), p(this, Gr, Wc.toDateObject(n)), this.trigger = s.flatMap((g) => g.getElementsToTriggerPopup());
    for (const g of this.trigger)
      g.addEventListener("click", r(this, $r)), g.addEventListener("mouseenter", r(this, rh)), g.addEventListener("mouseleave", r(this, nh)), g.classList.add("popupTriggerArea");
    for (const g of s)
      (f = g.container) == null || f.addEventListener("keydown", r(this, Br));
    r(this, gt).hidden = !0, u && m(this, nt, Cl).call(this);
  }
  render() {
    if (r(this, Ye))
      return;
    const t = p(this, Ye, document.createElement("div"));
    if (t.className = "popup", r(this, Sn)) {
      const n = t.style.outlineColor = I.makeHexColor(...r(this, Sn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : t.style.backgroundColor = I.makeHexColor(...r(this, Sn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = r(this, Co), t.append(e), r(this, Gr)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: r(this, Gr).valueOf()
      })), e.append(n);
    }
    const i = r(this, nt, xl);
    if (i)
      Su.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(r(this, Ws));
      t.append(n);
    }
    r(this, gt).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let n = 0, a = i.length; n < a; ++n) {
      const o = i[n];
      s.append(document.createTextNode(o)), n < a - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var s;
    r(this, xn) || p(this, xn, {
      contentsObj: r(this, Ws),
      richText: r(this, Ys)
    }), t && p(this, Xs, null), e && (p(this, Ys, m(this, nt, ku).call(this, e)), p(this, Ws, null)), (s = r(this, Ye)) == null || s.remove(), p(this, Ye, null);
  }
  resetEdited() {
    var t;
    r(this, xn) && ({
      contentsObj: Kt(this, Ws)._,
      richText: Kt(this, Ys)._
    } = r(this, xn), p(this, xn, null), (t = r(this, Ye)) == null || t.remove(), p(this, Ye, null), p(this, Xs, null));
  }
  forceHide() {
    p(this, Cn, this.isVisible), r(this, Cn) && (r(this, gt).hidden = !0);
  }
  maybeShow() {
    r(this, Cn) && (r(this, Ye) || m(this, nt, Tl).call(this), p(this, Cn, !1), r(this, gt).hidden = !1);
  }
  get isVisible() {
    return r(this, gt).hidden === !1;
  }
}
Br = new WeakMap(), nh = new WeakMap(), rh = new WeakMap(), $r = new WeakMap(), Sn = new WeakMap(), gt = new WeakMap(), Ws = new WeakMap(), Gr = new WeakMap(), Eo = new WeakMap(), So = new WeakMap(), zr = new WeakMap(), qs = new WeakMap(), Ye = new WeakMap(), Xs = new WeakMap(), xo = new WeakMap(), Ys = new WeakMap(), Co = new WeakMap(), xn = new WeakMap(), Cn = new WeakMap(), nt = new WeakSet(), xl = function() {
  const t = r(this, Ys), e = r(this, Ws);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && r(this, Ys).html || null;
}, uc = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, nt, xl)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, Pu = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, nt, xl)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, ku = function(t) {
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
      color: r(this, nt, Pu),
      fontSize: r(this, nt, uc) ? `calc(${r(this, nt, uc)}px * var(--scale-factor))` : ""
    }
  };
  for (const n of t.split(`
`))
    e.push({
      name: "span",
      value: n,
      attributes: i
    });
  return s;
}, Mu = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && r(this, qs)) && m(this, nt, Cl).call(this);
}, Lu = function() {
  if (r(this, Xs) !== null)
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
        pageY: n
      }
    }
  } = r(this, So);
  let a = !!r(this, zr), o = a ? r(this, zr) : r(this, xo);
  for (const A of r(this, Eo))
    if (!o || I.intersect(A.data.rect, o) !== null) {
      o = A.data.rect, a = !0;
      break;
    }
  const l = I.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = l[0] + c, f = l[1];
  p(this, Xs, [100 * (u - i) / e, 100 * (f - n) / s]);
  const {
    style: g
  } = r(this, gt);
  g.left = `${r(this, Xs)[0]}%`, g.top = `${r(this, Xs)[1]}%`;
}, Cl = function() {
  p(this, qs, !r(this, qs)), r(this, qs) ? (m(this, nt, Tl).call(this), r(this, gt).addEventListener("click", r(this, $r)), r(this, gt).addEventListener("keydown", r(this, Br))) : (m(this, nt, fc).call(this), r(this, gt).removeEventListener("click", r(this, $r)), r(this, gt).removeEventListener("keydown", r(this, Br)));
}, Tl = function() {
  r(this, Ye) || this.render(), this.isVisible ? r(this, qs) && r(this, gt).classList.add("focused") : (m(this, nt, Lu).call(this), r(this, gt).hidden = !1, r(this, gt).style.zIndex = parseInt(r(this, gt).style.zIndex) + 1e3);
}, fc = function() {
  r(this, gt).classList.remove("focused"), !(r(this, qs) || !this.isVisible) && (r(this, gt).hidden = !0, r(this, gt).style.zIndex = parseInt(r(this, gt).style.zIndex) - 1e3);
};
class Iu extends _t {
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
var To;
class cg extends _t {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, To, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Ni(e.rect), n = this.svgFactory.create(s, i, !0), a = p(this, To, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), n.append(a), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, To);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
To = new WeakMap();
var Ro;
class dg extends _t {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, Ro, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Ni(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, Ro, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, Ro);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Ro = new WeakMap();
var Po;
class ug extends _t {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, Po, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Ni(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, Po, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, Po);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Po = new WeakMap();
var ko;
class Du extends _t {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, ko, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: n
      }
    } = this;
    if (!s)
      return this.container;
    const {
      width: a,
      height: o
    } = Ni(e), l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, f = s.length; u < f; u += 2) {
      const g = s[u] - e[0], A = e[3] - s[u + 1];
      h.push(`${g},${A}`);
    }
    h = h.join(" ");
    const c = p(this, ko, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, ko);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ko = new WeakMap();
class fg extends Du {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class pg extends _t {
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
var Mo, Tn, Lo, pc;
class Qc extends _t {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, Lo);
    b(this, Mo, null);
    b(this, Tn, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? z.HIGHLIGHT : z.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: i,
        borderStyle: n,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = m(this, Lo, pc).call(this, s, e), c = this.svgFactory.create(l, h, !0), u = p(this, Mo, this.svgFactory.createElement("svg:g"));
    c.append(u), u.setAttribute("stroke-width", n.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let f = 0, g = i.length; f < g; f++) {
      const A = this.svgFactory.createElement(this.svgElementName);
      r(this, Tn).push(A), A.setAttribute("points", i[f].join(",")), u.append(A);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: n
    } = e, a = r(this, Mo);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = r(this, Tn).length; o < l; o++)
        r(this, Tn)[o].setAttribute("points", i[o].join(","));
    if (n) {
      const {
        transform: o,
        width: l,
        height: h
      } = m(this, Lo, pc).call(this, this.data.rotation, n);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return r(this, Tn);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Mo = new WeakMap(), Tn = new WeakMap(), Lo = new WeakSet(), pc = function(e, s) {
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
class Fu extends _t {
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
class gg extends _t {
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
class mg extends _t {
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
class bg extends _t {
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
class Nu extends _t {
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
var Io, Do, gc;
class Ag extends _t {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    b(this, Do);
    b(this, Io, null);
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
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", m(this, Do, gc).bind(this)), p(this, Io, i);
    const {
      isMac: n
    } = se.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (n ? a.metaKey : a.ctrlKey) && m(this, Do, gc).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return r(this, Io);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Io = new WeakMap(), Do = new WeakSet(), gc = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Fo, Rn, Pn, No, qn, Ou, mc;
class _g {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: a,
    structTreeLayer: o
  }) {
    b(this, qn);
    b(this, Fo, null);
    b(this, Rn, null);
    b(this, Pn, /* @__PURE__ */ new Map());
    b(this, No, null);
    this.div = t, p(this, Fo, e), p(this, Rn, s), p(this, No, o || null), this.page = n, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return r(this, Pn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    Vn(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Kc(),
      annotationStorage: t.annotationStorage || new Xc(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === St.POPUP;
      if (l) {
        const u = i.get(o.id);
        if (!u)
          continue;
        n.elements = u;
      } else {
        const {
          width: u,
          height: f
        } = Ni(o.rect);
        if (u <= 0 || f <= 0)
          continue;
      }
      n.data = o;
      const h = sg.create(n);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await m(this, qn, Ou).call(this, c, o.id), h._isEditable && (r(this, Pn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    m(this, qn, mc).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, Vn(e, {
      rotation: t.rotation
    }), m(this, qn, mc).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(r(this, Pn).values());
  }
  getEditableAnnotation(t) {
    return r(this, Pn).get(t);
  }
}
Fo = new WeakMap(), Rn = new WeakMap(), Pn = new WeakMap(), No = new WeakMap(), qn = new WeakSet(), Ou = async function(t, e) {
  var a, o;
  const s = t.firstChild || t, i = s.id = `${Uc}${e}`, n = await ((a = r(this, No)) == null ? void 0 : a.getAriaAttributes(i));
  if (n)
    for (const [l, h] of n)
      s.setAttribute(l, h);
  this.div.append(t), (o = r(this, Fo)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, mc = function() {
  if (!r(this, Rn))
    return;
  const t = this.div;
  for (const [e, s] of r(this, Rn)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: n
    } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  r(this, Rn).clear();
};
const dl = /\r\n?|\n/g;
var Ke, ge, Oo, kn, me, vt, Hu, Bu, $u, Rl, ri, Pl, kl, Gu, Ac, zu;
const at = class at extends pt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    b(this, vt);
    b(this, Ke);
    b(this, ge, "");
    b(this, Oo, `${this.id}-editor`);
    b(this, kn, null);
    b(this, me);
    p(this, Ke, e.color || at._defaultColor || pt._defaultLineColor), p(this, me, e.fontSize || at._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = at.prototype, s = (a) => a.isEmpty(), i = jn.TRANSLATE_SMALL, n = jn.TRANSLATE_BIG;
    return j(this, "_keyboardManager", new rl([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-n, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [n, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -n],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, n],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    pt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case X.FREETEXT_SIZE:
        at._defaultFontSize = s;
        break;
      case X.FREETEXT_COLOR:
        at._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case X.FREETEXT_SIZE:
        m(this, vt, Hu).call(this, s);
        break;
      case X.FREETEXT_COLOR:
        m(this, vt, Bu).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[X.FREETEXT_SIZE, at._defaultFontSize], [X.FREETEXT_COLOR, at._defaultColor || pt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[X.FREETEXT_SIZE, r(this, me)], [X.FREETEXT_COLOR, r(this, Ke)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-at._internalPadding * e, -(at._internalPadding + r(this, me)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(z.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), p(this, kn, new AbortController());
    const e = this._uiManager.combinedSignal(r(this, kn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    });
  }
  disableEditMode() {
    var e;
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", r(this, Oo)), this._isDraggable = !0, (e = r(this, kn)) == null || e.abort(), p(this, kn, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var e;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
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
    const e = r(this, ge), s = p(this, ge, m(this, vt, $u).call(this).trimEnd());
    if (e === s)
      return;
    const i = (n) => {
      if (p(this, ge, n), !n) {
        this.remove();
        return;
      }
      m(this, vt, kl).call(this), this._uiManager.rebuild(this), m(this, vt, Rl).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), m(this, vt, Rl).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    at._keyboardManager.exec(this, e);
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
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", r(this, Oo)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${r(this, me)}px * var(--scale-factor))`, i.color = r(this, Ke), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), $l(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [n, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, u] = this.pageDimensions, [f, g] = this.pageTranslation;
        let A, _;
        switch (this.rotation) {
          case 0:
            A = e + (o[0] - f) / c, _ = s + this.height - (o[1] - g) / u;
            break;
          case 90:
            A = e + (o[0] - f) / c, _ = s - (o[1] - g) / u, [l, h] = [h, -l];
            break;
          case 180:
            A = e - this.width + (o[0] - f) / c, _ = s - (o[1] - g) / u, [l, h] = [-l, -h];
            break;
          case 270:
            A = e + (o[0] - f - this.height * u) / c, _ = s + (o[1] - g - this.width * c) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(A * n, _ * a, l, h);
      } else
        this.setAt(e * n, s * a, this.width * n, this.height * a);
      m(this, vt, kl).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var A, _, w;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const n = m(A = at, ri, Ac).call(A, s.getData("text") || "").replaceAll(dl, `
`);
    if (!n)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!n.includes(`
`)) {
      o.insertNode(document.createTextNode(n)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, c = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const y = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(dl, "")), y !== this.editorDiv) {
        let v = c;
        for (const S of this.editorDiv.childNodes) {
          if (S === y) {
            v = u;
            continue;
          }
          v.push(m(_ = at, ri, Pl).call(_, S));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(dl, ""));
    } else if (l === this.editorDiv) {
      let y = c, v = 0;
      for (const S of this.editorDiv.childNodes)
        v++ === h && (y = u), y.push(m(w = at, ri, Pl).call(w, S));
    }
    p(this, ge, `${c.join(`
`)}${n}${u.join(`
`)}`), m(this, vt, kl).call(this);
    const f = new Range();
    let g = c.reduce((y, v) => y + v.length, 0);
    for (const {
      firstChild: y
    } of this.editorDiv.childNodes)
      if (y.nodeType === Node.TEXT_NODE) {
        const v = y.nodeValue.length;
        if (g <= v) {
          f.setStart(y, g), f.setEnd(y, g);
          break;
        }
        g -= v;
      }
    a.removeAllRanges(), a.addRange(f);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let n = null;
    if (e instanceof Iu) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: u,
          id: f,
          popupRef: g
        },
        textContent: A,
        textPosition: _,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      if (!A || A.length === 0)
        return null;
      n = e = {
        annotationType: z.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: A.join(`
`),
        position: _,
        pageIndex: w - 1,
        rect: c.slice(0),
        rotation: u,
        id: f,
        deleted: !1,
        popupRef: g
      };
    }
    const a = await super.deserialize(e, s, i);
    return p(a, me, e.fontSize), p(a, Ke, I.makeHexColor(...e.color)), p(a, ge, m(o = at, ri, Ac).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = n, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = at._internalPadding * this.parentScale, i = this.getRect(s, s), n = pt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : r(this, Ke)), a = {
      annotationType: z.FREETEXT,
      color: n,
      fontSize: r(this, me),
      value: m(this, vt, Gu).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !m(this, vt, zu).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${r(this, me)}px * var(--scale-factor))`, i.color = r(this, Ke), s.replaceChildren();
    for (const a of r(this, ge).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const n = at._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(n, n),
      popupContent: r(this, ge)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
Ke = new WeakMap(), ge = new WeakMap(), Oo = new WeakMap(), kn = new WeakMap(), me = new WeakMap(), vt = new WeakSet(), Hu = function(e) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - r(this, me)) * this.parentScale), p(this, me, n), m(this, vt, Rl).call(this);
  }, i = r(this, me);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: X.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Bu = function(e) {
  const s = (n) => {
    p(this, Ke, this.editorDiv.style.color = n);
  }, i = r(this, Ke);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: X.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, $u = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const n of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && n.nodeName === "BR" || (e.push(m(i = at, ri, Pl).call(i, n)), s = n);
  return e.join(`
`);
}, Rl = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: n,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", n.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, ri = new WeakSet(), Pl = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(dl, "");
}, kl = function() {
  if (this.editorDiv.replaceChildren(), !!r(this, ge))
    for (const e of r(this, ge).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, Gu = function() {
  return r(this, ge).replaceAll(" ", " ");
}, Ac = function(e) {
  return e.replaceAll(" ", " ");
}, zu = function(e) {
  const {
    value: s,
    fontSize: i,
    color: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== n[l]) || e.pageIndex !== a;
}, b(at, ri), N(at, "_freeTextDefaultContent", ""), N(at, "_internalPadding", 0), N(at, "_defaultColor", null), N(at, "_defaultFontSize", 10), N(at, "_type", "freetext"), N(at, "_editorType", z.FREETEXT);
let bc = at;
class k {
  toSVGPath() {
    it("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    it("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    it("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, n, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * n;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, n, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * n;
    return a;
  }
  static _translate(t, e, s, i) {
    i || (i = new Float32Array(t.length));
    for (let n = 0, a = t.length; n < a; n += 2)
      i[n] = e + t[n], i[n + 1] = s + t[n + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, n) {
    switch (n) {
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
  static createBezierPoints(t, e, s, i, n, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + n) / 6, (5 * i + a) / 6, (s + n) / 2, (i + a) / 2];
  }
}
N(k, "PRECISION", 1e-4);
var be, Qe, Ur, Vr, ws, V, Mn, Ln, Ho, Bo, jr, Wr, Ri, $o, ah, oh, Rt, Ta, Uu, Vu, ju, Wu, qu, Xu;
const Ds = class Ds {
  constructor({
    x: t,
    y: e
  }, s, i, n, a, o = 0) {
    b(this, Rt);
    b(this, be);
    b(this, Qe, []);
    b(this, Ur);
    b(this, Vr);
    b(this, ws, []);
    b(this, V, new Float32Array(18));
    b(this, Mn);
    b(this, Ln);
    b(this, Ho);
    b(this, Bo);
    b(this, jr);
    b(this, Wr);
    b(this, Ri, []);
    p(this, be, s), p(this, Wr, n * i), p(this, Vr, a), r(this, V).set([NaN, NaN, NaN, NaN, t, e], 6), p(this, Ur, o), p(this, Bo, r(Ds, $o) * i), p(this, Ho, r(Ds, oh) * i), p(this, jr, i), r(this, Ri).push(t, e);
  }
  isEmpty() {
    return isNaN(r(this, V)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var D;
    p(this, Mn, t), p(this, Ln, e);
    const [s, i, n, a] = r(this, be);
    let [o, l, h, c] = r(this, V).subarray(8, 12);
    const u = t - h, f = e - c, g = Math.hypot(u, f);
    if (g < r(this, Ho))
      return !1;
    const A = g - r(this, Bo), _ = A / g, w = _ * u, y = _ * f;
    let v = o, S = l;
    o = h, l = c, h += w, c += y, (D = r(this, Ri)) == null || D.push(t, e);
    const E = -y / A, x = w / A, C = E * r(this, Wr), T = x * r(this, Wr);
    return r(this, V).set(r(this, V).subarray(2, 8), 0), r(this, V).set([h + C, c + T], 4), r(this, V).set(r(this, V).subarray(14, 18), 12), r(this, V).set([h - C, c - T], 16), isNaN(r(this, V)[6]) ? (r(this, ws).length === 0 && (r(this, V).set([o + C, l + T], 2), r(this, ws).push(NaN, NaN, NaN, NaN, (o + C - s) / n, (l + T - i) / a), r(this, V).set([o - C, l - T], 14), r(this, Qe).push(NaN, NaN, NaN, NaN, (o - C - s) / n, (l - T - i) / a)), r(this, V).set([v, S, o, l, h, c], 6), !this.isEmpty()) : (r(this, V).set([v, S, o, l, h, c], 6), Math.abs(Math.atan2(S - l, v - o) - Math.atan2(y, w)) < Math.PI / 2 ? ([o, l, h, c] = r(this, V).subarray(2, 6), r(this, ws).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [o, l, v, S] = r(this, V).subarray(14, 18), r(this, Qe).push(NaN, NaN, NaN, NaN, ((v + o) / 2 - s) / n, ((S + l) / 2 - i) / a), !0) : ([v, S, o, l, h, c] = r(this, V).subarray(0, 6), r(this, ws).push(((v + 5 * o) / 6 - s) / n, ((S + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [h, c, o, l, v, S] = r(this, V).subarray(12, 18), r(this, Qe).push(((v + 5 * o) / 6 - s) / n, ((S + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = r(this, ws), e = r(this, Qe);
    if (isNaN(r(this, V)[6]) && !this.isEmpty())
      return m(this, Rt, Uu).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    m(this, Rt, ju).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return m(this, Rt, Vu).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new Yu(t, e, s, i, n, a);
  }
  getOutlines() {
    var u;
    const t = r(this, ws), e = r(this, Qe), s = r(this, V), [i, n, a, o] = r(this, be), l = new Float32Array((((u = r(this, Ri)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let f = 0, g = l.length - 2; f < g; f += 2)
      l[f] = (r(this, Ri)[f] - i) / a, l[f + 1] = (r(this, Ri)[f + 1] - n) / o;
    if (l[l.length - 2] = (r(this, Mn) - i) / a, l[l.length - 1] = (r(this, Ln) - n) / o, isNaN(s[6]) && !this.isEmpty())
      return m(this, Rt, Wu).call(this, l);
    const h = new Float32Array(r(this, ws).length + 24 + r(this, Qe).length);
    let c = t.length;
    for (let f = 0; f < c; f += 2) {
      if (isNaN(t[f])) {
        h[f] = h[f + 1] = NaN;
        continue;
      }
      h[f] = t[f], h[f + 1] = t[f + 1];
    }
    c = m(this, Rt, Xu).call(this, h, c);
    for (let f = e.length - 6; f >= 6; f -= 6)
      for (let g = 0; g < 6; g += 2) {
        if (isNaN(e[f + g])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[f + g], h[c + 1] = e[f + g + 1], c += 2;
      }
    return m(this, Rt, qu).call(this, h, c), this.newFreeDrawOutline(h, l, r(this, be), r(this, jr), r(this, Ur), r(this, Vr));
  }
};
be = new WeakMap(), Qe = new WeakMap(), Ur = new WeakMap(), Vr = new WeakMap(), ws = new WeakMap(), V = new WeakMap(), Mn = new WeakMap(), Ln = new WeakMap(), Ho = new WeakMap(), Bo = new WeakMap(), jr = new WeakMap(), Wr = new WeakMap(), Ri = new WeakMap(), $o = new WeakMap(), ah = new WeakMap(), oh = new WeakMap(), Rt = new WeakSet(), Ta = function() {
  const t = r(this, V).subarray(4, 6), e = r(this, V).subarray(16, 18), [s, i, n, a] = r(this, be);
  return [(r(this, Mn) + (t[0] - e[0]) / 2 - s) / n, (r(this, Ln) + (t[1] - e[1]) / 2 - i) / a, (r(this, Mn) + (e[0] - t[0]) / 2 - s) / n, (r(this, Ln) + (e[1] - t[1]) / 2 - i) / a];
}, Uu = function() {
  const [t, e, s, i] = r(this, be), [n, a, o, l] = m(this, Rt, Ta).call(this);
  return `M${(r(this, V)[2] - t) / s} ${(r(this, V)[3] - e) / i} L${(r(this, V)[4] - t) / s} ${(r(this, V)[5] - e) / i} L${n} ${a} L${o} ${l} L${(r(this, V)[16] - t) / s} ${(r(this, V)[17] - e) / i} L${(r(this, V)[14] - t) / s} ${(r(this, V)[15] - e) / i} Z`;
}, Vu = function(t) {
  const e = r(this, Qe);
  t.push(`L${e[4]} ${e[5]} Z`);
}, ju = function(t) {
  const [e, s, i, n] = r(this, be), a = r(this, V).subarray(4, 6), o = r(this, V).subarray(16, 18), [l, h, c, u] = m(this, Rt, Ta).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / n} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / n}`);
}, Wu = function(t) {
  const e = r(this, V), [s, i, n, a] = r(this, be), [o, l, h, c] = m(this, Rt, Ta).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / n, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / n, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / n, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / n, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, r(this, be), r(this, jr), r(this, Ur), r(this, Vr));
}, qu = function(t, e) {
  const s = r(this, Qe);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, Xu = function(t, e) {
  const s = r(this, V).subarray(4, 6), i = r(this, V).subarray(16, 18), [n, a, o, l] = r(this, be), [h, c, u, f] = m(this, Rt, Ta).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - n) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, f, NaN, NaN, NaN, NaN, (i[0] - n) / o, (i[1] - a) / l], e), e += 24;
}, b(Ds, $o, 8), b(Ds, ah, 2), b(Ds, oh, r(Ds, $o) + r(Ds, ah));
let zl = Ds;
var qr, In, Ks, Go, Ae, zo, At, lh, Ku;
class Yu extends k {
  constructor(e, s, i, n, a, o) {
    super();
    b(this, lh);
    b(this, qr);
    b(this, In, new Float32Array(4));
    b(this, Ks);
    b(this, Go);
    b(this, Ae);
    b(this, zo);
    b(this, At);
    p(this, At, e), p(this, Ae, s), p(this, qr, i), p(this, zo, n), p(this, Ks, a), p(this, Go, o), this.lastPoint = [NaN, NaN], m(this, lh, Ku).call(this, o);
    const [l, h, c, u] = r(this, In);
    for (let f = 0, g = e.length; f < g; f += 2)
      e[f] = (e[f] - l) / c, e[f + 1] = (e[f + 1] - h) / u;
    for (let f = 0, g = s.length; f < g; f += 2)
      s[f] = (s[f] - l) / c, s[f + 1] = (s[f + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${r(this, At)[4]} ${r(this, At)[5]}`];
    for (let s = 6, i = r(this, At).length; s < i; s += 6) {
      if (isNaN(r(this, At)[s])) {
        e.push(`L${r(this, At)[s + 4]} ${r(this, At)[s + 5]}`);
        continue;
      }
      e.push(`C${r(this, At)[s]} ${r(this, At)[s + 1]} ${r(this, At)[s + 2]} ${r(this, At)[s + 3]} ${r(this, At)[s + 4]} ${r(this, At)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, n], a) {
    const o = i - e, l = n - s;
    let h, c;
    switch (a) {
      case 0:
        h = k._rescale(r(this, At), e, n, o, -l), c = k._rescale(r(this, Ae), e, n, o, -l);
        break;
      case 90:
        h = k._rescaleAndSwap(r(this, At), e, s, o, l), c = k._rescaleAndSwap(r(this, Ae), e, s, o, l);
        break;
      case 180:
        h = k._rescale(r(this, At), i, s, -o, l), c = k._rescale(r(this, Ae), i, s, -o, l);
        break;
      case 270:
        h = k._rescaleAndSwap(r(this, At), i, n, -o, -l), c = k._rescaleAndSwap(r(this, Ae), i, n, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return r(this, In);
  }
  newOutliner(e, s, i, n, a, o = 0) {
    return new zl(e, s, i, n, a, o);
  }
  getNewOutline(e, s) {
    const [i, n, a, o] = r(this, In), [l, h, c, u] = r(this, qr), f = a * c, g = o * u, A = i * c + l, _ = n * u + h, w = this.newOutliner({
      x: r(this, Ae)[0] * f + A,
      y: r(this, Ae)[1] * g + _
    }, r(this, qr), r(this, zo), e, r(this, Go), s ?? r(this, Ks));
    for (let y = 2; y < r(this, Ae).length; y += 2)
      w.add({
        x: r(this, Ae)[y] * f + A,
        y: r(this, Ae)[y + 1] * g + _
      });
    return w.getOutlines();
  }
}
qr = new WeakMap(), In = new WeakMap(), Ks = new WeakMap(), Go = new WeakMap(), Ae = new WeakMap(), zo = new WeakMap(), At = new WeakMap(), lh = new WeakSet(), Ku = function(e) {
  const s = r(this, At);
  let i = s[4], n = s[5], a = i, o = n, l = i, h = n, c = i, u = n;
  const f = e ? Math.max : Math.min;
  for (let A = 6, _ = s.length; A < _; A += 6) {
    if (isNaN(s[A]))
      a = Math.min(a, s[A + 4]), o = Math.min(o, s[A + 5]), l = Math.max(l, s[A + 4]), h = Math.max(h, s[A + 5]), u < s[A + 5] ? (c = s[A + 4], u = s[A + 5]) : u === s[A + 5] && (c = f(c, s[A + 4]));
    else {
      const w = I.bezierBoundingBox(i, n, ...s.slice(A, A + 6));
      a = Math.min(a, w[0]), o = Math.min(o, w[1]), l = Math.max(l, w[2]), h = Math.max(h, w[3]), u < w[3] ? (c = w[2], u = w[3]) : u === w[3] && (c = f(c, w[2]));
    }
    i = s[A + 4], n = s[A + 5];
  }
  const g = r(this, In);
  g[0] = a - r(this, Ks), g[1] = o - r(this, Ks), g[2] = l - a + 2 * r(this, Ks), g[3] = h - o + 2 * r(this, Ks), this.lastPoint = [c, u];
};
var Uo, Vo, Pi, Je, ne, Qu, Ml, Ju, Zu, yc;
class _c {
  constructor(t, e = 0, s = 0, i = !0) {
    b(this, ne);
    b(this, Uo);
    b(this, Vo);
    b(this, Pi, []);
    b(this, Je, []);
    let n = 1 / 0, a = -1 / 0, o = 1 / 0, l = -1 / 0;
    const c = 10 ** -4;
    for (const {
      x: y,
      y: v,
      width: S,
      height: E
    } of t) {
      const x = Math.floor((y - e) / c) * c, C = Math.ceil((y + S + e) / c) * c, T = Math.floor((v - e) / c) * c, M = Math.ceil((v + E + e) / c) * c, D = [x, T, M, !0], W = [C, T, M, !1];
      r(this, Pi).push(D, W), n = Math.min(n, x), a = Math.max(a, C), o = Math.min(o, T), l = Math.max(l, M);
    }
    const u = a - n + 2 * s, f = l - o + 2 * s, g = n - s, A = o - s, _ = r(this, Pi).at(i ? -1 : -2), w = [_[0], _[2]];
    for (const y of r(this, Pi)) {
      const [v, S, E] = y;
      y[0] = (v - g) / u, y[1] = (S - A) / f, y[2] = (E - A) / f;
    }
    p(this, Uo, new Float32Array([g, A, u, f])), p(this, Vo, w);
  }
  getOutlines() {
    r(this, Pi).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of r(this, Pi))
      e[3] ? (t.push(...m(this, ne, yc).call(this, e)), m(this, ne, Ju).call(this, e)) : (m(this, ne, Zu).call(this, e), t.push(...m(this, ne, yc).call(this, e)));
    return m(this, ne, Qu).call(this, t);
  }
}
Uo = new WeakMap(), Vo = new WeakMap(), Pi = new WeakMap(), Je = new WeakMap(), ne = new WeakSet(), Qu = function(t) {
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
  let n;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, l, h, c, u] = a;
    s.delete(a);
    let f = o, g = l;
    for (n = [o, h], i.push(n); ; ) {
      let A;
      if (s.has(c))
        A = c;
      else if (s.has(u))
        A = u;
      else
        break;
      s.delete(A), [o, l, h, c, u] = A, f !== o && (n.push(f, g, o, g === l ? l : h), f = o), g = g === l ? h : l;
    }
    n.push(f, g);
  }
  return new yg(i, r(this, Uo), r(this, Vo));
}, Ml = function(t) {
  const e = r(this, Je);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, a = e[n][0];
    if (a === t)
      return n;
    a < t ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, Ju = function([, t, e]) {
  const s = m(this, ne, Ml).call(this, t);
  r(this, Je).splice(s, 0, [t, e]);
}, Zu = function([, t, e]) {
  const s = m(this, ne, Ml).call(this, t);
  for (let i = s; i < r(this, Je).length; i++) {
    const [n, a] = r(this, Je)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, Je).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, a] = r(this, Je)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, Je).splice(i, 1);
      return;
    }
  }
}, yc = function(t) {
  const [e, s, i] = t, n = [[e, s, i]], a = m(this, ne, Ml).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = r(this, Je)[o];
    for (let c = 0, u = n.length; c < u; c++) {
      const [, f, g] = n[c];
      if (!(h <= f || g <= l)) {
        if (f >= l) {
          if (g > h)
            n[c][1] = h;
          else {
            if (u === 1)
              return [];
            n.splice(c, 1), c--, u--;
          }
          continue;
        }
        n[c][2] = l, g > h && n.push([e, h, g]);
      }
    }
  }
  return n;
};
var jo, Xr;
class yg extends k {
  constructor(e, s, i) {
    super();
    b(this, jo);
    b(this, Xr);
    p(this, Xr, e), p(this, jo, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of r(this, Xr)) {
      let [i, n] = s;
      e.push(`M${i} ${n}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], l = s[a + 1];
        o === i ? (e.push(`V${l}`), n = l) : l === n && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, n], a) {
    const o = [], l = i - e, h = n - s;
    for (const c of r(this, Xr)) {
      const u = new Array(c.length);
      for (let f = 0; f < c.length; f += 2)
        u[f] = e + c[f] * l, u[f + 1] = n - c[f + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return r(this, jo);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
jo = new WeakMap(), Xr = new WeakMap();
class wc extends zl {
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new wg(t, e, s, i, n, a);
  }
}
class wg extends Yu {
  newOutliner(t, e, s, i, n, a = 0) {
    return new wc(t, e, s, i, n, a);
  }
}
var Ze, Dn, Yr, Tt, Wo, Kr, qo, Xo, ki, ts, Qr, Yo, st, vc, Ec, Sc, zi, tf, oi;
const oe = class oe {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    b(this, st);
    b(this, Ze, null);
    b(this, Dn, null);
    b(this, Yr);
    b(this, Tt, null);
    b(this, Wo, !1);
    b(this, Kr, !1);
    b(this, qo, null);
    b(this, Xo);
    b(this, ki, null);
    b(this, ts, null);
    b(this, Qr);
    var s;
    t ? (p(this, Kr, !1), p(this, Qr, X.HIGHLIGHT_COLOR), p(this, qo, t)) : (p(this, Kr, !0), p(this, Qr, X.HIGHLIGHT_DEFAULT_COLOR)), p(this, ts, (t == null ? void 0 : t._uiManager) || e), p(this, Xo, r(this, ts)._eventBus), p(this, Yr, (t == null ? void 0 : t.color) || ((s = r(this, ts)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), r(oe, Yo) || p(oe, Yo, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return j(this, "_keyboardManager", new rl([[["Escape", "mac+Escape"], oe.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], oe.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], oe.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], oe.prototype._moveToPrevious], [["Home", "mac+Home"], oe.prototype._moveToBeginning], [["End", "mac+End"], oe.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = p(this, Ze, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = r(this, ts)._signal;
    t.addEventListener("click", m(this, st, zi).bind(this), {
      signal: e
    }), t.addEventListener("keydown", m(this, st, Sc).bind(this), {
      signal: e
    });
    const s = p(this, Dn, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = r(this, Yr), t.append(s), t;
  }
  renderMainDropdown() {
    const t = p(this, Tt, m(this, st, vc).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === r(this, Ze)) {
      m(this, st, zi).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && m(this, st, Ec).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!r(this, st, oi)) {
      m(this, st, zi).call(this, t);
      return;
    }
    if (t.target === r(this, Ze)) {
      (e = r(this, Tt).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = r(this, Tt)) == null ? void 0 : e.firstChild) || t.target === r(this, Ze)) {
      r(this, st, oi) && this._hideDropdownFromKeyboard();
      return;
    }
    r(this, st, oi) || m(this, st, zi).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!r(this, st, oi)) {
      m(this, st, zi).call(this, t);
      return;
    }
    (e = r(this, Tt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!r(this, st, oi)) {
      m(this, st, zi).call(this, t);
      return;
    }
    (e = r(this, Tt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = r(this, Tt)) == null || t.classList.add("hidden"), (e = r(this, ki)) == null || e.abort(), p(this, ki, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!r(this, Kr)) {
      if (!r(this, st, oi)) {
        (t = r(this, qo)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), r(this, Ze).focus({
        preventScroll: !0,
        focusVisible: r(this, Wo)
      });
    }
  }
  updateColor(t) {
    if (r(this, Dn) && (r(this, Dn).style.backgroundColor = t), !r(this, Tt))
      return;
    const e = r(this, ts).highlightColors.values();
    for (const s of r(this, Tt).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = r(this, Ze)) == null || t.remove(), p(this, Ze, null), p(this, Dn, null), (e = r(this, Tt)) == null || e.remove(), p(this, Tt, null);
  }
};
Ze = new WeakMap(), Dn = new WeakMap(), Yr = new WeakMap(), Tt = new WeakMap(), Wo = new WeakMap(), Kr = new WeakMap(), qo = new WeakMap(), Xo = new WeakMap(), ki = new WeakMap(), ts = new WeakMap(), Qr = new WeakMap(), Yo = new WeakMap(), st = new WeakSet(), vc = function() {
  const t = document.createElement("div"), e = r(this, ts)._signal;
  t.addEventListener("contextmenu", rs, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of r(this, ts).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", r(oe, Yo)[s]);
    const a = document.createElement("span");
    n.append(a), a.className = "swatch", a.style.backgroundColor = i, n.setAttribute("aria-selected", i === r(this, Yr)), n.addEventListener("click", m(this, st, Ec).bind(this, i), {
      signal: e
    }), t.append(n);
  }
  return t.addEventListener("keydown", m(this, st, Sc).bind(this), {
    signal: e
  }), t;
}, Ec = function(t, e) {
  e.stopPropagation(), r(this, Xo).dispatch("switchannotationeditorparams", {
    source: this,
    type: r(this, Qr),
    value: t
  });
}, Sc = function(t) {
  oe._keyboardManager.exec(this, t);
}, zi = function(t) {
  if (r(this, st, oi)) {
    this.hideDropdown();
    return;
  }
  if (p(this, Wo, t.detail === 0), r(this, ki) || (p(this, ki, new AbortController()), window.addEventListener("pointerdown", m(this, st, tf).bind(this), {
    signal: r(this, ts).combinedSignal(r(this, ki))
  })), r(this, Tt)) {
    r(this, Tt).classList.remove("hidden");
    return;
  }
  const e = p(this, Tt, m(this, st, vc).call(this));
  r(this, Ze).append(e);
}, tf = function(t) {
  var e;
  (e = r(this, Tt)) != null && e.contains(t.target) || this.hideDropdown();
}, oi = function() {
  return r(this, Tt) && !r(this, Tt).classList.contains("hidden");
}, b(oe, Yo, null);
let Ul = oe;
var Jr, Ko, Qs, Fn, Zr, ce, Qo, Jo, Nn, De, _e, Nt, ta, Js, Wt, ea, Fe, Zo, G, xc, Ll, ef, sf, nf, Cc, Ui, Be, ir, rf, Il, Ra, af, of, lf, hf, cf;
const Q = class Q extends pt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    b(this, G);
    b(this, Jr, null);
    b(this, Ko, 0);
    b(this, Qs);
    b(this, Fn, null);
    b(this, Zr, null);
    b(this, ce, null);
    b(this, Qo, null);
    b(this, Jo, 0);
    b(this, Nn, null);
    b(this, De, null);
    b(this, _e, null);
    b(this, Nt, !1);
    b(this, ta, null);
    b(this, Js);
    b(this, Wt, null);
    b(this, ea, "");
    b(this, Fe);
    b(this, Zo, "");
    this.color = e.color || Q._defaultColor, p(this, Fe, e.thickness || Q._defaultThickness), p(this, Js, e.opacity || Q._defaultOpacity), p(this, Qs, e.boxes || null), p(this, Zo, e.methodOfCreation || ""), p(this, ea, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (p(this, Nt, !0), m(this, G, Ll).call(this, e), m(this, G, Ui).call(this)) : r(this, Qs) && (p(this, Jr, e.anchorNode), p(this, Ko, e.anchorOffset), p(this, Qo, e.focusNode), p(this, Jo, e.focusOffset), m(this, G, xc).call(this), m(this, G, Ui).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = Q.prototype;
    return j(this, "_keyboardManager", new rl([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
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
      type: r(this, Nt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: r(this, Fe),
      methodOfCreation: r(this, Zo)
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
    pt.initialize(e, s), Q._defaultColor || (Q._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case X.HIGHLIGHT_DEFAULT_COLOR:
        Q._defaultColor = s;
        break;
      case X.HIGHLIGHT_THICKNESS:
        Q._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return r(this, ta);
  }
  updateParams(e, s) {
    switch (e) {
      case X.HIGHLIGHT_COLOR:
        m(this, G, ef).call(this, s);
        break;
      case X.HIGHLIGHT_THICKNESS:
        m(this, G, sf).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[X.HIGHLIGHT_DEFAULT_COLOR, Q._defaultColor], [X.HIGHLIGHT_THICKNESS, Q._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[X.HIGHLIGHT_COLOR, this.color || Q._defaultColor], [X.HIGHLIGHT_THICKNESS, r(this, Fe) || Q._defaultThickness], [X.HIGHLIGHT_FREE, r(this, Nt)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (p(this, Zr, new Ul({
      editor: this
    })), e.addColorPicker(r(this, Zr))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(m(this, G, Ra).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, m(this, G, Ra).call(this));
  }
  onceAdded() {
    this.annotationElementId || this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    m(this, G, Cc).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (m(this, G, Ui).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? m(this, G, Cc).call(this) : e && (m(this, G, Ui).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var n, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    r(this, Nt) ? (e = (e - this.rotation + 360) % 360, i = m(n = Q, Be, ir).call(n, r(this, De).box, e)) : i = m(a = Q, Be, ir).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(r(this, _e), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(r(this, Wt), {
      bbox: m(o = Q, Be, ir).call(o, r(this, ce).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    r(this, ea) && (e.setAttribute("aria-label", r(this, ea)), e.setAttribute("role", "mark")), r(this, Nt) ? e.classList.add("free") : this.div.addEventListener("keydown", m(this, G, rf).bind(this), {
      signal: this._uiManager._signal
    });
    const s = p(this, Nn, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = r(this, Fn);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), $l(this, r(this, Nn), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, Wt), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, Wt), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        m(this, G, Il).call(this, !0);
        break;
      case 1:
      case 3:
        m(this, G, Il).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), r(this, Wt) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, Wt), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), r(this, Wt) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, Wt), {
      rootClass: {
        selected: !1
      }
    }), r(this, Nt) || m(this, G, Il).call(this, !1));
  }
  get _mustFixPosition() {
    return !r(this, Nt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(r(this, _e), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(r(this, Wt), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, s, {
    target: i,
    x: n,
    y: a
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: c
    } = i.getBoundingClientRect(), u = new AbortController(), f = e.combinedSignal(u), g = (A) => {
      u.abort(), m(this, Be, hf).call(this, e, A);
    };
    window.addEventListener("blur", g, {
      signal: f
    }), window.addEventListener("pointerup", g, {
      signal: f
    }), window.addEventListener("pointerdown", is, {
      capture: !0,
      passive: !1,
      signal: f
    }), window.addEventListener("contextmenu", rs, {
      signal: f
    }), i.addEventListener("pointermove", m(this, Be, lf).bind(this, e), {
      signal: f
    }), this._freeHighlight = new wc({
      x: n,
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
    var _, w, y, v;
    let n = null;
    if (e instanceof Fu) {
      const {
        data: {
          quadPoints: S,
          rect: E,
          rotation: x,
          id: C,
          color: T,
          opacity: M,
          popupRef: D
        },
        parent: {
          page: {
            pageNumber: W
          }
        }
      } = e;
      n = e = {
        annotationType: z.HIGHLIGHT,
        color: Array.from(T),
        opacity: M,
        quadPoints: S,
        boxes: null,
        pageIndex: W - 1,
        rect: E.slice(0),
        rotation: x,
        id: C,
        deleted: !1,
        popupRef: D
      };
    } else if (e instanceof Qc) {
      const {
        data: {
          inkLists: S,
          rect: E,
          rotation: x,
          id: C,
          color: T,
          borderStyle: {
            rawWidth: M
          },
          popupRef: D
        },
        parent: {
          page: {
            pageNumber: W
          }
        }
      } = e;
      n = e = {
        annotationType: z.HIGHLIGHT,
        color: Array.from(T),
        thickness: M,
        inkLists: S,
        boxes: null,
        pageIndex: W - 1,
        rect: E.slice(0),
        rotation: x,
        id: C,
        deleted: !1,
        popupRef: D
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, c = await super.deserialize(e, s, i);
    c.color = I.makeHexColor(...a), p(c, Js, h || 1), l && p(c, Fe, e.thickness), c.annotationElementId = e.id || null, c._initialData = n;
    const [u, f] = c.pageDimensions, [g, A] = c.pageTranslation;
    if (o) {
      const S = p(c, Qs, []);
      for (let E = 0; E < o.length; E += 8)
        S.push({
          x: (o[E] - g) / u,
          y: 1 - (o[E + 1] - A) / f,
          width: (o[E + 2] - o[E]) / u,
          height: (o[E + 1] - o[E + 5]) / f
        });
      m(_ = c, G, xc).call(_), m(w = c, G, Ui).call(w), c.rotate(c.rotation);
    } else if (l) {
      p(c, Nt, !0);
      const S = l[0], E = {
        x: S[0] - g,
        y: f - (S[1] - A)
      }, x = new wc(E, [0, 0, u, f], 1, r(c, Fe) / 2, !0, 1e-3);
      for (let M = 0, D = S.length; M < D; M += 2)
        E.x = S[M] - g, E.y = f - (S[M + 1] - A), x.add(E);
      const {
        id: C,
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
          d: x.toSVGPath()
        }
      }, !0, !0);
      m(y = c, G, Ll).call(y, {
        highlightOutlines: x.getOutlines(),
        highlightId: C,
        clipPathId: T
      }), m(v = c, G, Ui).call(v);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = pt._colorManager.convert(this.color), n = {
      annotationType: z.HIGHLIGHT,
      color: i,
      opacity: r(this, Js),
      thickness: r(this, Fe),
      quadPoints: m(this, G, af).call(this),
      outlines: m(this, G, of).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: m(this, G, Ra).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !m(this, G, cf).call(this, n) ? null : (n.id = this.annotationElementId, n);
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
Jr = new WeakMap(), Ko = new WeakMap(), Qs = new WeakMap(), Fn = new WeakMap(), Zr = new WeakMap(), ce = new WeakMap(), Qo = new WeakMap(), Jo = new WeakMap(), Nn = new WeakMap(), De = new WeakMap(), _e = new WeakMap(), Nt = new WeakMap(), ta = new WeakMap(), Js = new WeakMap(), Wt = new WeakMap(), ea = new WeakMap(), Fe = new WeakMap(), Zo = new WeakMap(), G = new WeakSet(), xc = function() {
  const e = new _c(r(this, Qs), 1e-3);
  p(this, De, e.getOutlines()), [this.x, this.y, this.width, this.height] = r(this, De).box;
  const s = new _c(r(this, Qs), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  p(this, ce, s.getOutlines());
  const {
    lastPoint: i
  } = r(this, ce);
  p(this, ta, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, Ll = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, f;
  if (p(this, De, e), p(this, ce, e.getNewOutline(r(this, Fe) / 2 + 1.5, 25e-4)), s >= 0)
    p(this, _e, s), p(this, Fn, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), p(this, Wt, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: r(this, ce).box,
      path: {
        d: r(this, ce).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const g = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(r(this, _e), {
      bbox: m(u = Q, Be, ir).call(u, r(this, De).box, (g - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(r(this, Wt), {
      bbox: m(f = Q, Be, ir).call(f, r(this, ce).box, g),
      path: {
        d: r(this, ce).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [g, A] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * A / g, this.height = h * g / A;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [g, A] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * A / g, this.height = h * g / A;
      break;
    }
  }
  const {
    lastPoint: c
  } = r(this, ce);
  p(this, ta, [(c[0] - a) / l, (c[1] - o) / h]);
}, ef = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, p(this, Js, o), (l = this.parent) == null || l.drawLayer.updateProperties(r(this, _e), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = r(this, Zr)) == null || h.updateColor(a);
  }, i = this.color, n = r(this, Js);
  this.addCommands({
    cmd: s.bind(this, e, Q._defaultOpacity),
    undo: s.bind(this, i, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: X.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, sf = function(e) {
  const s = r(this, Fe), i = (n) => {
    p(this, Fe, n), m(this, G, nf).call(this, n);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: X.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, nf = function(e) {
  if (!r(this, Nt))
    return;
  m(this, G, Ll).call(this, {
    highlightOutlines: r(this, De).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, Cc = function() {
  r(this, _e) === null || !this.parent || (this.parent.drawLayer.remove(r(this, _e)), p(this, _e, null), this.parent.drawLayer.remove(r(this, Wt)), p(this, Wt, null));
}, Ui = function(e = this.parent) {
  r(this, _e) === null && ({
    id: Kt(this, _e)._,
    clipPathId: Kt(this, Fn)._
  } = e.drawLayer.draw({
    bbox: r(this, De).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": r(this, Js)
    },
    rootClass: {
      highlight: !0,
      free: r(this, Nt)
    },
    path: {
      d: r(this, De).toSVGPath()
    }
  }, !1, !0), p(this, Wt, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: r(this, Nt)
    },
    bbox: r(this, ce).box,
    path: {
      d: r(this, ce).toSVGPath()
    }
  }, r(this, Nt))), r(this, Nn) && (r(this, Nn).style.clipPath = r(this, Fn)));
}, Be = new WeakSet(), ir = function([e, s, i, n], a) {
  switch (a) {
    case 90:
      return [1 - s - n, e, n, i];
    case 180:
      return [1 - e - i, 1 - s - n, i, n];
    case 270:
      return [s, 1 - e - i, n, i];
  }
  return [e, s, i, n];
}, rf = function(e) {
  Q._keyboardManager.exec(this, e);
}, Il = function(e) {
  if (!r(this, Jr))
    return;
  const s = window.getSelection();
  e ? s.setPosition(r(this, Jr), r(this, Ko)) : s.setPosition(r(this, Qo), r(this, Jo));
}, Ra = function() {
  return r(this, Nt) ? this.rotation : 0;
}, af = function() {
  if (r(this, Nt))
    return null;
  const [e, s] = this.pageDimensions, [i, n] = this.pageTranslation, a = r(this, Qs), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: c,
    width: u,
    height: f
  } of a) {
    const g = h * e + i, A = (1 - c) * s + n;
    o[l] = o[l + 4] = g, o[l + 1] = o[l + 3] = A, o[l + 2] = o[l + 6] = g + u * e, o[l + 5] = o[l + 7] = A - f * s, l += 8;
  }
  return o;
}, of = function(e) {
  return r(this, De).serialize(e, m(this, G, Ra).call(this));
}, lf = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, hf = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, cf = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, n) => i !== s[n]);
}, b(Q, Be), N(Q, "_defaultColor", null), N(Q, "_defaultOpacity", 1), N(Q, "_defaultThickness", 12), N(Q, "_type", "highlight"), N(Q, "_editorType", z.HIGHLIGHT), N(Q, "_freeHighlightId", -1), N(Q, "_freeHighlight", null), N(Q, "_freeHighlightClipId", "");
let Vl = Q;
var On;
class vg {
  constructor() {
    b(this, On, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    r(this, On)[t] = e;
  }
  toSVGProperties() {
    const t = r(this, On);
    return p(this, On, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    p(this, On, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    it("Not implemented");
  }
}
On = new WeakMap();
var ye, sa, Y, Rc, Pc, kc, Pa, df, Dl, ka, nr;
const Pe = class Pe extends pt {
  constructor(e) {
    super(e);
    b(this, Y);
    b(this, ye, null);
    b(this, sa);
    N(this, "_drawId", null);
    p(this, sa, e.mustBeCommitted || !1), e.drawOutlines && (m(this, Y, Rc).call(this, e), m(this, Y, Pa).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [n, a] of Object.entries(s))
      i.has(n) ? Object.assign(e[n], a) : e[n] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    it("Not implemented");
  }
  static get typesMap() {
    it("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (this._currentDraw.updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, n] of this.typesMap)
      e.push([i, s[n]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [i, n] of this.constructor.typesMap)
      e.push([i, s[n]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const n = this._drawingOptions, a = n[s], o = (l) => {
      var c;
      n.updateProperty(s, l);
      const h = r(this, ye).updateProperty(s, l);
      h && m(this, Y, ka).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, n.toSVGProperties());
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
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, Pe._mergeSVGProperties(r(this, ye).getPathResizingSVGProperties(m(this, Y, Dl).call(this)), {
      bbox: m(this, Y, nr).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, Pe._mergeSVGProperties(r(this, ye).getPathResizedSVGProperties(m(this, Y, Dl).call(this)), {
      bbox: m(this, Y, nr).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: m(this, Y, nr).call(this, e, s)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, Pe._mergeSVGProperties(r(this, ye).getPathTranslatedSVGProperties(m(this, Y, Dl).call(this), this.parentDimensions), {
      bbox: m(this, Y, nr).call(this)
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
  onceAdded() {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, r(this, sa) && (p(this, sa, !1), this.commit(), this.parent.setSelected(this), this.isOnScreen && this.div.focus());
  }
  remove() {
    m(this, Y, kc).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (m(this, Y, Pa).call(this), m(this, Y, ka).call(this, r(this, ye).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), m(this, Y, kc).call(this)) : e && (this._uiManager.addShouldRescale(this), m(this, Y, Pa).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, Pe._mergeSVGProperties({
      bbox: m(this, Y, nr).call(this)
    }, r(this, ye).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && m(this, Y, ka).call(this, r(this, ye).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    e.classList.add("draw");
    const s = document.createElement("div");
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal";
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), this._uiManager.addShouldRescale(this), this.disableEditing(), e;
  }
  static createDrawerInstance(e, s, i, n, a) {
    it("Not implemented");
  }
  static startDrawing(e, s, i, {
    target: n,
    offsetX: a,
    offsetY: o
  }) {
    var g;
    const {
      viewport: {
        rotation: l
      }
    } = e, {
      width: h,
      height: c
    } = n.getBoundingClientRect(), u = new AbortController(), f = e.combinedSignal(u);
    if (window.addEventListener("pointerup", (A) => {
      u.abort(), e.toggleDrawing(!0), this._endDraw(A);
    }, {
      signal: f
    }), window.addEventListener("pointerdown", is, {
      capture: !0,
      passive: !1,
      signal: f
    }), window.addEventListener("contextmenu", rs, {
      signal: f
    }), n.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: f
    }), e.toggleDrawing(), (g = s._editorUndoBar) == null || g.hide(), this._currentDraw) {
      e.drawLayer.updateProperties(this._currentDrawId, this._currentDraw.startNew(a, o, h, c, l));
      return;
    }
    s.updateUIForDefaultProperties(this), this._currentDraw = this.createDrawerInstance(a, o, h, c, l), this._currentDrawingOptions = this.getDefaultDrawingOptions(), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(this._currentDrawingOptions.toSVGProperties(), this._currentDraw.defaultSVGProperties), !0, !1);
  }
  static _drawMove({
    offsetX: e,
    offsetY: s
  }) {
    this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._currentDraw.add(e, s));
  }
  static _endDraw({
    offsetX: e,
    offsetY: s
  }) {
    const i = this._currentParent;
    if (i.drawLayer.updateProperties(this._currentDrawId, this._currentDraw.end(e, s)), this.supportMultipleDrawings) {
      const n = this._currentDraw, a = this._currentDrawId, o = n.getLastElement();
      i.addCommands({
        cmd: () => {
          i.drawLayer.updateProperties(a, n.setLastElement(o));
        },
        undo: () => {
          i.drawLayer.updateProperties(a, n.removeLastElement());
        },
        mustExec: !1,
        type: X.DRAW_STEP
      });
      return;
    }
    this.endDrawing(!1);
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(X.DRAW_STEP), !this._currentDraw.isEmpty()) {
      const {
        pageDimensions: [i, n],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: this._currentDraw.getOutlines(i * a, n * a, a, this._INNER_MARGIN),
        drawingOptions: this._currentDrawingOptions,
        mustBeCommitted: !e
      });
      return this._cleanup(), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(), null;
  }
  static _cleanup() {
    this._currentDrawId = -1, this._currentDraw = null, this._currentDrawingOptions = null, this._currentParent = null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, n, a, o) {
    it("Not implemented");
  }
  static async deserialize(e, s, i) {
    var u, f;
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, n, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), m(u = c, Y, Rc).call(u, {
      drawOutlines: h
    }), m(f = c, Y, Pa).call(f), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [n, a] = this.pageDimensions;
    return r(this, ye).serialize([s, i, n, a], e);
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
ye = new WeakMap(), sa = new WeakMap(), Y = new WeakSet(), Rc = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  p(this, ye, e), this._drawingOptions || (this._drawingOptions = i), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = m(this, Y, Pc).call(this, e, this.parent), m(this, Y, ka).call(this, e.box);
}, Pc = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(Pe._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, kc = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Pa = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = m(this, Y, Pc).call(this, r(this, ye), e);
  }
}, df = function([e, s, i, n]) {
  const {
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [s, 1 - e, i * (o / a), n * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, n];
    case 270:
      return [1 - s, e, i * (o / a), n * (a / o)];
    default:
      return [e, s, i, n];
  }
}, Dl = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: n,
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - s, e, i * (a / o), n * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, n];
    case 270:
      return [s, 1 - e, i * (a / o), n * (o / a)];
    default:
      return [e, s, i, n];
  }
}, ka = function(e) {
  if ([this.x, this.y, this.width, this.height] = m(this, Y, df).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, nr = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: n,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - n, e, n, i];
    case 2:
      return [1 - e - i, 1 - s - n, i, n];
    case 3:
      return [s, 1 - e - i, n, i];
    case 4:
      return [e, s - i * (l / h), n * (h / l), i * (l / h)];
    case 5:
      return [1 - s, e, i * (l / h), n * (h / l)];
    case 6:
      return [1 - e - n * (h / l), 1 - s, n * (h / l), i * (l / h)];
    case 7:
      return [s - i * (l / h), 1 - e - n * (h / l), i * (l / h), n * (h / l)];
    case 8:
      return [e - i, s - n, i, n];
    case 9:
      return [1 - s, e - i, n, i];
    case 10:
      return [1 - e, 1 - s, i, n];
    case 11:
      return [s - n, 1 - e, n, i];
    case 12:
      return [e - n * (h / l), s, n * (h / l), i * (l / h)];
    case 13:
      return [1 - s - i * (l / h), e - n * (h / l), i * (l / h), n * (h / l)];
    case 14:
      return [1 - e, 1 - s - i * (l / h), n * (h / l), i * (l / h)];
    case 15:
      return [s, 1 - e, i * (l / h), n * (h / l)];
    default:
      return [e, s, i, n];
  }
}, N(Pe, "_currentDrawId", -1), N(Pe, "_currentDraw", null), N(Pe, "_currentDrawingOptions", null), N(Pe, "_currentParent", null), N(Pe, "_INNER_MARGIN", 3);
let Tc = Pe;
var vs, Lt, It, Hn, ia, de, Ot, Ne, Bn, $n, Gn, na, Fl;
class Eg {
  constructor(t, e, s, i, n, a) {
    b(this, na);
    b(this, vs, new Float64Array(6));
    b(this, Lt);
    b(this, It);
    b(this, Hn);
    b(this, ia);
    b(this, de);
    b(this, Ot, "");
    b(this, Ne, 0);
    b(this, Bn, new jl());
    b(this, $n);
    b(this, Gn);
    p(this, $n, s), p(this, Gn, i), p(this, Hn, n), p(this, ia, a), [t, e] = m(this, na, Fl).call(this, t, e);
    const o = p(this, Lt, [NaN, NaN, NaN, NaN, t, e]);
    p(this, de, [t, e]), p(this, It, [{
      line: o,
      points: r(this, de)
    }]), r(this, vs).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && p(this, ia, e);
  }
  isEmpty() {
    return !r(this, It) || r(this, It).length === 0;
  }
  add(t, e) {
    [t, e] = m(this, na, Fl).call(this, t, e);
    const [s, i, n, a] = r(this, vs).subarray(2, 6), o = t - n, l = e - a;
    return Math.hypot(r(this, $n) * o, r(this, Gn) * l) <= 2 ? null : (r(this, de).push(t, e), isNaN(s) ? (r(this, vs).set([n, a, t, e], 2), r(this, Lt).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(r(this, vs)[0]) && r(this, Lt).splice(6, 6), r(this, vs).set([s, i, n, a, t, e], 0), r(this, Lt).push(...k.createBezierPoints(s, i, n, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (r(this, de).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, n) {
    p(this, $n, s), p(this, Gn, i), p(this, Hn, n), [t, e] = m(this, na, Fl).call(this, t, e);
    const a = p(this, Lt, [NaN, NaN, NaN, NaN, t, e]);
    p(this, de, [t, e]);
    const o = r(this, It).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), r(this, It).push({
      line: a,
      points: r(this, de)
    }), r(this, vs).set(a, 0), p(this, Ne, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return r(this, It).at(-1);
  }
  setLastElement(t) {
    return r(this, It) ? (r(this, It).push(t), p(this, Lt, t.line), p(this, de, t.points), p(this, Ne, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : r(this, Bn).setLastElement(t);
  }
  removeLastElement() {
    if (!r(this, It))
      return r(this, Bn).removeLastElement();
    r(this, It).pop(), p(this, Ot, "");
    for (let t = 0, e = r(this, It).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = r(this, It)[t];
      p(this, Lt, s), p(this, de, i), p(this, Ne, 0), this.toSVGPath();
    }
    return {
      path: {
        d: r(this, Ot)
      }
    };
  }
  toSVGPath() {
    const t = k.svgRound(r(this, Lt)[4]), e = k.svgRound(r(this, Lt)[5]);
    if (r(this, de).length === 2)
      return p(this, Ot, `${r(this, Ot)} M ${t} ${e} Z`), r(this, Ot);
    if (r(this, de).length <= 6) {
      const i = r(this, Ot).lastIndexOf("M");
      p(this, Ot, `${r(this, Ot).slice(0, i)} M ${t} ${e}`), p(this, Ne, 6);
    }
    if (r(this, de).length === 4) {
      const i = k.svgRound(r(this, Lt)[10]), n = k.svgRound(r(this, Lt)[11]);
      return p(this, Ot, `${r(this, Ot)} L ${i} ${n}`), p(this, Ne, 12), r(this, Ot);
    }
    const s = [];
    r(this, Ne) === 0 && (s.push(`M ${t} ${e}`), p(this, Ne, 6));
    for (let i = r(this, Ne), n = r(this, Lt).length; i < n; i += 6) {
      const [a, o, l, h, c, u] = r(this, Lt).slice(i, i + 6).map(k.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
    }
    return p(this, Ot, r(this, Ot) + s.join(" ")), p(this, Ne, r(this, Lt).length), r(this, Ot);
  }
  getOutlines(t, e, s, i) {
    const n = r(this, It).at(-1);
    return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), r(this, Bn).build(r(this, It), t, e, s, r(this, Hn), r(this, ia), i), p(this, vs, null), p(this, Lt, null), p(this, It, null), p(this, Ot, null), r(this, Bn);
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
vs = new WeakMap(), Lt = new WeakMap(), It = new WeakMap(), Hn = new WeakMap(), ia = new WeakMap(), de = new WeakMap(), Ot = new WeakMap(), Ne = new WeakMap(), Bn = new WeakMap(), $n = new WeakMap(), Gn = new WeakMap(), na = new WeakSet(), Fl = function(t, e) {
  return k._normalizePoint(t, e, r(this, $n), r(this, Gn), r(this, Hn));
};
var Zt, tl, el, we, Es, Ss, ra, aa, oa, Bt, Ls, uf, ff, pf;
const ed = class ed extends k {
  constructor() {
    super(...arguments);
    b(this, Bt);
    b(this, Zt);
    b(this, tl, 0);
    b(this, el);
    b(this, we);
    b(this, Es);
    b(this, Ss);
    b(this, ra);
    b(this, aa);
    b(this, oa);
  }
  build(e, s, i, n, a, o, l) {
    p(this, Es, s), p(this, Ss, i), p(this, ra, n), p(this, aa, a), p(this, oa, o), p(this, el, l ?? 0), p(this, we, e), m(this, Bt, ff).call(this);
  }
  setLastElement(e) {
    return r(this, we).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return r(this, we).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of r(this, we)) {
      if (e.push(`M${k.svgRound(s[4])} ${k.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12) {
        e.push(`L${k.svgRound(s[10])} ${k.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, n = s.length; i < n; i += 6) {
        const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(k.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, n], a) {
    const o = [], l = [], [h, c, u, f] = m(this, Bt, uf).call(this);
    let g, A, _, w, y, v, S, E, x;
    switch (r(this, aa)) {
      case 0:
        x = k._rescale, g = e, A = s + n, _ = i, w = -n, y = e + h * i, v = s + (1 - c - f) * n, S = e + (h + u) * i, E = s + (1 - c) * n;
        break;
      case 90:
        x = k._rescaleAndSwap, g = e, A = s, _ = i, w = n, y = e + c * i, v = s + h * n, S = e + (c + f) * i, E = s + (h + u) * n;
        break;
      case 180:
        x = k._rescale, g = e + i, A = s, _ = -i, w = n, y = e + (1 - h - u) * i, v = s + c * n, S = e + (1 - h) * i, E = s + (c + f) * n;
        break;
      case 270:
        x = k._rescaleAndSwap, g = e + i, A = s + n, _ = -i, w = -n, y = e + (1 - c - f) * i, v = s + (1 - h - u) * n, S = e + (1 - c) * i, E = s + (1 - h) * n;
        break;
    }
    for (const {
      line: C,
      points: T
    } of r(this, we))
      o.push(x(C, g, A, _, w, a ? new Array(C.length) : null)), l.push(x(T, g, A, _, w, a ? new Array(T.length) : null));
    return {
      lines: o,
      points: l,
      rect: [y, v, S, E]
    };
  }
  static deserialize(e, s, i, n, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: c
  }) {
    const u = [];
    let f, g, A, _, w;
    switch (h) {
      case 0:
        w = k._rescale, f = -e / i, g = s / n + 1, A = 1 / i, _ = -1 / n;
        break;
      case 90:
        w = k._rescaleAndSwap, f = -s / n, g = -e / i, A = 1 / n, _ = 1 / i;
        break;
      case 180:
        w = k._rescale, f = e / i + 1, g = -s / n, A = -1 / i, _ = 1 / n;
        break;
      case 270:
        w = k._rescaleAndSwap, f = s / n + 1, g = e / i + 1, A = -1 / n, _ = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const v of l) {
        const S = v.length;
        if (S === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, v[0], v[1]]));
          continue;
        }
        if (S === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, v[0], v[1], NaN, NaN, NaN, NaN, v[2], v[3]]));
          continue;
        }
        const E = new Float32Array(3 * (S - 2));
        o.push(E);
        let [x, C, T, M] = v.subarray(0, 4);
        E.set([NaN, NaN, NaN, NaN, x, C], 0);
        for (let D = 4; D < S; D += 2) {
          const W = v[D], O = v[D + 1];
          E.set(k.createBezierPoints(x, C, T, M, W, O), (D - 2) * 3), [x, C, T, M] = [T, M, W, O];
        }
      }
    }
    for (let v = 0, S = o.length; v < S; v++)
      u.push({
        line: w(o[v].map((E) => E ?? NaN), f, g, A, _),
        points: w(l[v].map((E) => E ?? NaN), f, g, A, _)
      });
    const y = new ed();
    return y.build(u, i, n, 1, h, c, a), y;
  }
  get box() {
    return r(this, Zt);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? m(this, Bt, pf).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [n, a] = m(this, Bt, Ls).call(this);
    p(this, Es, e), p(this, Ss, s), p(this, ra, i);
    const [o, l] = m(this, Bt, Ls).call(this), h = o - n, c = l - a, u = r(this, Zt);
    return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
  }
  updateRotation(e) {
    return p(this, tl, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return r(this, Zt).map(k.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = r(this, Zt);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${k.svgRound(e)} ${k.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = r(this, Zt);
    let i = 0, n = 0, a = 0, o = 0, l = 0, h = 0;
    switch (r(this, tl)) {
      case 90:
        n = s / e, a = -e / s, l = e;
        break;
      case 180:
        i = -1, o = -1, l = e, h = s;
        break;
      case 270:
        n = -s / e, a = e / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${n} ${a} ${o} ${k.svgRound(l)} ${k.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, n]) {
    const [a, o] = m(this, Bt, Ls).call(this), [l, h, c, u] = r(this, Zt);
    if (Math.abs(c - a) <= k.PRECISION || Math.abs(u - o) <= k.PRECISION) {
      const w = e + i / 2 - (l + c / 2), y = s + n / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${k.svgRound(e)} ${k.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${w} ${y})`
        }
      };
    }
    const f = (i - 2 * a) / (c - 2 * a), g = (n - 2 * o) / (u - 2 * o), A = c / i, _ = u / n;
    return {
      path: {
        "transform-origin": `${k.svgRound(l)} ${k.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${A} ${_}) translate(${k.svgRound(a)} ${k.svgRound(o)}) scale(${f} ${g}) translate(${k.svgRound(-a)} ${k.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, n]) {
    const [a, o] = m(this, Bt, Ls).call(this), l = r(this, Zt), [h, c, u, f] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = n, Math.abs(u - a) <= k.PRECISION || Math.abs(f - o) <= k.PRECISION) {
      const y = e + i / 2 - (h + u / 2), v = s + n / 2 - (c + f / 2);
      for (const {
        line: S,
        points: E
      } of r(this, we))
        k._translate(S, y, v, S), k._translate(E, y, v, E);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${k.svgRound(e)} ${k.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const g = (i - 2 * a) / (u - 2 * a), A = (n - 2 * o) / (f - 2 * o), _ = -g * (h + a) + e + a, w = -A * (c + o) + s + o;
    if (g !== 1 || A !== 1 || _ !== 0 || w !== 0)
      for (const {
        line: y,
        points: v
      } of r(this, we))
        k._rescale(y, _, w, g, A, y), k._rescale(v, _, w, g, A, v);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${k.svgRound(e)} ${k.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [n, a] = i, o = r(this, Zt), l = e - o[0], h = s - o[1];
    if (r(this, Es) === n && r(this, Ss) === a)
      for (const {
        line: c,
        points: u
      } of r(this, we))
        k._translate(c, l, h, c), k._translate(u, l, h, u);
    else {
      const c = r(this, Es) / n, u = r(this, Ss) / a;
      p(this, Es, n), p(this, Ss, a);
      for (const {
        line: f,
        points: g
      } of r(this, we))
        k._rescale(f, l, h, c, u, f), k._rescale(g, l, h, c, u, g);
      o[2] *= c, o[3] *= u;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${k.svgRound(e)} ${k.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = r(this, Zt);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${k.svgRound(e[0])} ${k.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
Zt = new WeakMap(), tl = new WeakMap(), el = new WeakMap(), we = new WeakMap(), Es = new WeakMap(), Ss = new WeakMap(), ra = new WeakMap(), aa = new WeakMap(), oa = new WeakMap(), Bt = new WeakSet(), Ls = function(e = r(this, oa)) {
  const s = r(this, el) + e / 2 * r(this, ra);
  return r(this, aa) % 180 === 0 ? [s / r(this, Es), s / r(this, Ss)] : [s / r(this, Ss), s / r(this, Es)];
}, uf = function() {
  const [e, s, i, n] = r(this, Zt), [a, o] = m(this, Bt, Ls).call(this, 0);
  return [e + a, s + o, i - 2 * a, n - 2 * o];
}, ff = function() {
  const e = p(this, Zt, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: n
  } of r(this, we)) {
    if (n.length <= 12) {
      for (let l = 4, h = n.length; l < h; l += 6) {
        const [c, u] = n.subarray(l, l + 2);
        e[0] = Math.min(e[0], c), e[1] = Math.min(e[1], u), e[2] = Math.max(e[2], c), e[3] = Math.max(e[3], u);
      }
      continue;
    }
    let a = n[4], o = n[5];
    for (let l = 6, h = n.length; l < h; l += 6) {
      const [c, u, f, g, A, _] = n.subarray(l, l + 6);
      I.bezierBoundingBox(a, o, c, u, f, g, A, _, e), a = A, o = _;
    }
  }
  const [s, i] = m(this, Bt, Ls).call(this);
  e[0] = Math.min(1, Math.max(0, e[0] - s)), e[1] = Math.min(1, Math.max(0, e[1] - i)), e[2] = Math.min(1, Math.max(0, e[2] + s)), e[3] = Math.min(1, Math.max(0, e[3] + i)), e[2] -= e[0], e[3] -= e[1];
}, pf = function(e) {
  const [s, i] = m(this, Bt, Ls).call(this);
  p(this, oa, e);
  const [n, a] = m(this, Bt, Ls).call(this), [o, l] = [n - s, a - i], h = r(this, Zt);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
let jl = ed;
var la;
const sd = class sd extends vg {
  constructor(e) {
    super();
    b(this, la);
    p(this, la, e), super.updateProperties({
      fill: "none",
      stroke: pt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(e, s) {
    e === "stroke-width" && (s ?? (s = this["stroke-width"]), s *= r(this, la).realScale), super.updateSVGProperty(e, s);
  }
  clone() {
    const e = new sd(r(this, la));
    return e.updateAll(this), e;
  }
};
la = new WeakMap();
let Mc = sd;
var hh, gf;
const ar = class ar extends Tc {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    b(this, hh);
    this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    pt.initialize(e, s), this._defaultDrawingOptions = new Mc(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return j(this, "typesMap", /* @__PURE__ */ new Map([[X.INK_THICKNESS, "stroke-width"], [X.INK_COLOR, "stroke"], [X.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, n, a) {
    return new Eg(e, s, i, n, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, n, a, o) {
    return jl.deserialize(e, s, i, n, a, o);
  }
  static async deserialize(e, s, i) {
    let n = null;
    if (e instanceof Qc) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: u,
          opacity: f,
          borderStyle: {
            rawWidth: g
          },
          popupRef: A
        },
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      n = e = {
        annotationType: z.INK,
        color: Array.from(u),
        thickness: g,
        opacity: f,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: _ - 1,
        rect: l.slice(0),
        rotation: h,
        id: c,
        deleted: !1,
        popupRef: A
      };
    }
    const a = await super.deserialize(e, s, i);
    return a.annotationElementId = e.id || null, a._initialData = n, a;
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
    this._drawingOptions = ar.getDefaultDrawingOptions({
      stroke: I.makeHexColor(...e),
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
      rect: n
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: a,
        "stroke-opacity": o,
        "stroke-width": l
      }
    } = this, h = {
      annotationType: z.INK,
      color: pt._colorManager.convert(a),
      opacity: o,
      thickness: l,
      paths: {
        lines: s,
        points: i
      },
      pageIndex: this.pageIndex,
      rect: n,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? h : this.annotationElementId && !m(this, hh, gf).call(this, h) ? null : (h.id = this.annotationElementId, h);
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
hh = new WeakSet(), gf = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== n || e.pageIndex !== a;
}, N(ar, "_type", "ink"), N(ar, "_editorType", z.INK), N(ar, "_defaultDrawingOptions", null);
let Lc = ar;
var ft, Ht, Mi, Zs, Li, ha, xs, ti, Cs, ve, ca, q, Ma, La, Nl, Dc, mf, Ol, Fc, Hl, bf, Af;
const Da = class Da extends pt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    b(this, q);
    b(this, ft, null);
    b(this, Ht, null);
    b(this, Mi, null);
    b(this, Zs, null);
    b(this, Li, null);
    b(this, ha, "");
    b(this, xs, null);
    b(this, ti, null);
    b(this, Cs, null);
    b(this, ve, !1);
    b(this, ca, !1);
    p(this, Zs, e.bitmapUrl), p(this, Li, e.bitmapFile);
  }
  static initialize(e, s) {
    pt.initialize(e, s);
  }
  static get supportedTypes() {
    return j(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return j(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor(z.STAMP, {
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
      data: n,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: n,
        width: a,
        height: o,
        channels: n.length / (a * o)
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
    var e, s;
    r(this, Ht) && (p(this, ft, null), this._uiManager.imageManager.deleteId(r(this, Ht)), (e = r(this, xs)) == null || e.remove(), p(this, xs, null), (s = r(this, ti)) == null || s.disconnect(), p(this, ti, null), r(this, Cs) && (clearTimeout(r(this, Cs)), p(this, Cs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      r(this, Ht) && m(this, q, Nl).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (r(this, Ht) && r(this, xs) === null && m(this, q, Nl).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(r(this, Mi) || r(this, ft) || r(this, Zs) || r(this, Li) || r(this, Ht));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), r(this, ft) ? m(this, q, Dc).call(this) : m(this, q, Nl).call(this), this.width && !this.annotationElementId) {
      const [i, n] = this.parentDimensions;
      this.setAt(e * i, s * n, this.width * i, this.height * n);
    }
    return this.div;
  }
  copyCanvas(e, s, i = !1) {
    var g;
    e || (e = 224);
    const {
      width: n,
      height: a
    } = r(this, ft), o = new Mh();
    let l = r(this, ft), h = n, c = a, u = null;
    if (s) {
      if (n > s || a > s) {
        const M = Math.min(s / n, s / a);
        h = Math.floor(n * M), c = Math.floor(a * M);
      }
      u = document.createElement("canvas");
      const A = u.width = Math.ceil(h * o.sx), _ = u.height = Math.ceil(c * o.sy);
      r(this, ve) || (l = m(this, q, Ol).call(this, A, _));
      const w = u.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let y = "white", v = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? v = "black" : (g = window.matchMedia) != null && g.call(window, "(prefers-color-scheme: dark)").matches && (y = "#8f8f9d", v = "#42414d");
      const S = 15, E = S * o.sx, x = S * o.sy, C = new OffscreenCanvas(E * 2, x * 2), T = C.getContext("2d");
      T.fillStyle = y, T.fillRect(0, 0, E * 2, x * 2), T.fillStyle = v, T.fillRect(0, 0, E, x), T.fillRect(E, x, E, x), w.fillStyle = w.createPattern(C, "repeat"), w.fillRect(0, 0, A, _), w.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, _);
    }
    let f = null;
    if (i) {
      let A, _;
      if (o.symmetric && l.width < e && l.height < e)
        A = l.width, _ = l.height;
      else if (l = r(this, ft), n > e || a > e) {
        const v = Math.min(e / n, e / a);
        A = Math.floor(n * v), _ = Math.floor(a * v), r(this, ve) || (l = m(this, q, Ol).call(this, A, _));
      }
      const y = new OffscreenCanvas(A, _).getContext("2d", {
        willReadFrequently: !0
      });
      y.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, _), f = {
        width: A,
        height: _,
        data: y.getImageData(0, 0, A, _).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: c,
      imageData: f
    };
  }
  getImageForAltText() {
    return r(this, xs);
  }
  static async deserialize(e, s, i) {
    var _;
    let n = null;
    if (e instanceof Nu) {
      const {
        data: {
          rect: w,
          rotation: y,
          id: v,
          structParent: S,
          popupRef: E
        },
        container: x,
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = e, T = x.querySelector("canvas"), M = i.imageManager.getFromCanvas(x.id, T);
      T.remove();
      const D = ((_ = await s._structTree.getAriaAttributes(`${Uc}${v}`)) == null ? void 0 : _.get("aria-label")) || "";
      n = e = {
        annotationType: z.STAMP,
        bitmapId: M.id,
        bitmap: M.bitmap,
        pageIndex: C - 1,
        rect: w.slice(0),
        rotation: y,
        id: v,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: D
        },
        isSvg: !1,
        structParent: S,
        popupRef: E
      };
    }
    const a = await super.deserialize(e, s, i), {
      rect: o,
      bitmap: l,
      bitmapUrl: h,
      bitmapId: c,
      isSvg: u,
      accessibilityData: f
    } = e;
    c && i.imageManager.isValidId(c) ? (p(a, Ht, c), l && p(a, ft, l)) : p(a, Zs, h), p(a, ve, u);
    const [g, A] = a.pageDimensions;
    return a.width = (o[2] - o[0]) / g, a.height = (o[3] - o[1]) / A, a.annotationElementId = e.id || null, f && (a.altTextData = f), a._initialData = n, p(a, ca, !!n), a;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: z.STAMP,
      bitmapId: r(this, Ht),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: r(this, ve),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = m(this, q, Hl).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: n,
      altText: a
    } = this.serializeAltText(!1);
    if (!n && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = m(this, q, Af).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = r(this, ve) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(r(this, Ht)))
      s.stamps.set(r(this, Ht), {
        area: o,
        serialized: i
      }), i.bitmap = m(this, q, Hl).call(this, !1);
    else if (r(this, ve)) {
      const l = s.stamps.get(r(this, Ht));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = m(this, q, Hl).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
ft = new WeakMap(), Ht = new WeakMap(), Mi = new WeakMap(), Zs = new WeakMap(), Li = new WeakMap(), ha = new WeakMap(), xs = new WeakMap(), ti = new WeakMap(), Cs = new WeakMap(), ve = new WeakMap(), ca = new WeakMap(), q = new WeakSet(), Ma = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  p(this, ft, e.bitmap), s || (p(this, Ht, e.id), p(this, ve, e.isSvg)), e.file && p(this, ha, e.file.name), m(this, q, Dc).call(this);
}, La = function() {
  if (p(this, Mi, null), this._uiManager.enableWaiting(!1), !!r(this, xs)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, ft)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, ft)) {
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
}, Nl = function() {
  if (r(this, Ht)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(r(this, Ht)).then((i) => m(this, q, Ma).call(this, i, !0)).finally(() => m(this, q, La).call(this));
    return;
  }
  if (r(this, Zs)) {
    const i = r(this, Zs);
    p(this, Zs, null), this._uiManager.enableWaiting(!0), p(this, Mi, this._uiManager.imageManager.getFromUrl(i).then((n) => m(this, q, Ma).call(this, n)).finally(() => m(this, q, La).call(this)));
    return;
  }
  if (r(this, Li)) {
    const i = r(this, Li);
    p(this, Li, null), this._uiManager.enableWaiting(!0), p(this, Mi, this._uiManager.imageManager.getFromFile(i).then((n) => m(this, q, Ma).call(this, n)).finally(() => m(this, q, La).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Da.supportedTypesStr;
  const s = this._uiManager._signal;
  p(this, Mi, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const n = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), m(this, q, Ma).call(this, n);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => m(this, q, La).call(this))), e.click();
}, Dc = function() {
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = r(this, ft);
  const [n, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * a;
  else if (s > o * n || i > o * a) {
    const u = Math.min(o * n / s, o * a / i);
    s *= u, i *= u;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / n, i * h / a), this._uiManager.enableWaiting(!1);
  const c = p(this, xs, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), m(this, q, Fc).call(this, s, i), m(this, q, bf).call(this), r(this, ca) || (this.parent.addUndoableEditor(this), p(this, ca, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), r(this, ha) && c.setAttribute("aria-label", r(this, ha));
}, mf = function(e, s) {
  var o;
  const [i, n] = this.parentDimensions;
  this.width = e / i, this.height = s / n, (o = this._initialOptions) != null && o.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, r(this, Cs) !== null && clearTimeout(r(this, Cs)), p(this, Cs, setTimeout(() => {
    p(this, Cs, null), m(this, q, Fc).call(this, e, s);
  }, 200));
}, Ol = function(e, s) {
  const {
    width: i,
    height: n
  } = r(this, ft);
  let a = i, o = n, l = r(this, ft);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, Fc = function(e, s) {
  const i = new Mh(), n = Math.ceil(e * i.sx), a = Math.ceil(s * i.sy), o = r(this, xs);
  if (!o || o.width === n && o.height === a)
    return;
  o.width = n, o.height = a;
  const l = r(this, ve) ? r(this, ft) : m(this, q, Ol).call(this, n, a), h = o.getContext("2d");
  h.filter = this._uiManager.hcmFilter, h.drawImage(l, 0, 0, l.width, l.height, 0, 0, n, a);
}, Hl = function(e) {
  if (e) {
    if (r(this, ve)) {
      const n = this._uiManager.imageManager.getSvgUrl(r(this, Ht));
      if (n)
        return n;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = r(this, ft), s.getContext("2d").drawImage(r(this, ft), 0, 0), s.toDataURL();
  }
  if (r(this, ve)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * Oi.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * Oi.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(n, a);
    return o.getContext("2d").drawImage(r(this, ft), 0, 0, r(this, ft).width, r(this, ft).height, 0, 0, n, a), o.transferToImageBitmap();
  }
  return structuredClone(r(this, ft));
}, bf = function() {
  this._uiManager._signal && (p(this, ti, new ResizeObserver((e) => {
    const s = e[0].contentRect;
    s.width && s.height && m(this, q, mf).call(this, s.width, s.height);
  })), r(this, ti).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var e;
    (e = r(this, ti)) == null || e.disconnect(), p(this, ti, null);
  }, {
    once: !0
  }));
}, Af = function(e) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, n = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this._hasBeenMoved && !this._hasBeenResized && n && a,
    isSameAltText: a
  };
}, N(Da, "_type", "stamp"), N(Da, "_editorType", z.STAMP);
let Ic = Da;
var zn, da, Ts, Ii, ei, Oe, Di, ua, es, qt, si, L, Fi, ct, _f, hs, Oc, Hc, Bl;
const ze = class ze {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: n,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: c
  }) {
    b(this, ct);
    b(this, zn);
    b(this, da, !1);
    b(this, Ts, null);
    b(this, Ii, null);
    b(this, ei, null);
    b(this, Oe, /* @__PURE__ */ new Map());
    b(this, Di, !1);
    b(this, ua, !1);
    b(this, es, null);
    b(this, qt, null);
    b(this, si, null);
    b(this, L);
    const u = [...r(ze, Fi).values()];
    if (!ze._initialized) {
      ze._initialized = !0;
      for (const f of u)
        f.initialize(c, t);
    }
    t.registerEditorTypes(u), p(this, L, t), this.pageIndex = e, this.div = s, p(this, zn, n), p(this, Ts, a), this.viewport = h, p(this, qt, l), this.drawLayer = o, this._structTree = i, r(this, L).addLayer(this);
  }
  get isEmpty() {
    return r(this, Oe).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && r(this, L).getMode() === z.NONE;
  }
  updateToolbar(t) {
    r(this, L).updateToolbar(t);
  }
  updateMode(t = r(this, L).getMode()) {
    switch (m(this, ct, Bl).call(this), t) {
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
    for (const s of r(ze, Fi).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = r(this, qt)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    r(this, L).setEditingState(t);
  }
  addCommands(t) {
    r(this, L).addCommands(t);
  }
  cleanUndoStack(t) {
    r(this, L).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = r(this, Ts)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of r(this, Oe).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (r(this, L).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!r(this, Ts))
      return;
    const e = r(this, Ts).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), r(this, L).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
  }
  disable() {
    var i;
    p(this, ua, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const n of r(this, Oe).values())
      if (n.disableEditing(), !!n.annotationElementId) {
        if (n.serialize() !== null) {
          t.set(n.annotationElementId, n);
          continue;
        } else
          e.set(n.annotationElementId, n);
        (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove();
      }
    if (r(this, Ts)) {
      const n = r(this, Ts).getEditableAnnotations();
      for (const a of n) {
        const {
          id: o
        } = a.data;
        if (r(this, L).isDeletedAnnotationElement(o))
          continue;
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(a), l.show(!1), a.show();
          continue;
        }
        l = t.get(o), l && (r(this, L).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    m(this, ct, Bl).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of r(ze, Fi).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), p(this, ua, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = r(this, Ts)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    r(this, L).getActive() !== t && r(this, L).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = r(this, qt)) != null && t.div && !r(this, si)) {
      p(this, si, new AbortController());
      const e = r(this, L).combinedSignal(r(this, si));
      r(this, qt).div.addEventListener("pointerdown", m(this, ct, _f).bind(this), {
        signal: e
      }), r(this, qt).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = r(this, qt)) != null && t.div && r(this, si) && (r(this, si).abort(), p(this, si, null), r(this, qt).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (r(this, Ii))
      return;
    p(this, Ii, new AbortController());
    const t = r(this, L).combinedSignal(r(this, Ii));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    }), this.div.addEventListener("pointerup", this.pointerup.bind(this), {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = r(this, Ii)) == null || t.abort(), p(this, Ii, null);
  }
  attach(t) {
    r(this, Oe).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && r(this, L).isDeletedAnnotationElement(e) && r(this, L).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    r(this, Oe).delete(t.id), (e = r(this, zn)) == null || e.removePointerInTextLayer(t.contentDiv), !r(this, ua) && t.annotationElementId && r(this, L).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), r(this, L).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (r(this, L).addDeletedAnnotationElement(t.annotationElementId), pt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), r(this, L).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(), r(this, L).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !r(this, ei) && (t._focusEventsAllowed = !1, p(this, ei, setTimeout(() => {
      p(this, ei, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: r(this, L)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = r(this, zn)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
    return r(this, L).getId();
  }
  combinedSignal(t) {
    return r(this, L).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = r(this, ct, hs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    r(this, L).updateToolbar(t), r(this, L).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = m(this, ct, Hc).call(this), n = this.getNextId(), a = m(this, ct, Oc).call(this, {
      parent: this,
      id: n,
      x: s,
      y: i,
      uiManager: r(this, L),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = r(ze, Fi).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, r(this, L))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), n = m(this, ct, Oc).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: r(this, L),
      isCentered: e,
      ...s
    });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(m(this, ct, Hc).call(this), !0);
  }
  setSelected(t) {
    r(this, L).setSelected(t);
  }
  toggleSelected(t) {
    r(this, L).toggleSelected(t);
  }
  unselect(t) {
    r(this, L).unselect(t);
  }
  pointerup(t) {
    var s;
    const {
      isMac: e
    } = se.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && r(this, Di) && (p(this, Di, !1), !((s = r(this, ct, hs)) != null && s.isDrawer && r(this, ct, hs).supportMultipleDrawings))) {
      if (!r(this, da)) {
        p(this, da, !0);
        return;
      }
      if (r(this, L).getMode() === z.STAMP) {
        r(this, L).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    var i;
    if (r(this, L).getMode() === z.HIGHLIGHT && this.enableTextSelection(), r(this, Di)) {
      p(this, Di, !1);
      return;
    }
    const {
      isMac: e
    } = se.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (p(this, Di, !0), (i = r(this, ct, hs)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = r(this, L).getActive();
    p(this, da, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus(), r(this, es)) {
      r(this, ct, hs).startDrawing(this, r(this, L), !1, t);
      return;
    }
    r(this, L).setCurrentDrawingSession(this), p(this, es, new AbortController());
    const e = r(this, L).combinedSignal(r(this, es));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && this.commitOrRemove();
    }, {
      signal: e
    }), r(this, ct, hs).startDrawing(this, r(this, L), !1, t);
  }
  endDrawingSession(t = !1) {
    return r(this, es) ? (r(this, L).setCurrentDrawingSession(null), r(this, es).abort(), p(this, es, null), r(this, ct, hs).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = r(this, L).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return r(this, es) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    r(this, es) && r(this, ct, hs).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = r(this, L).getActive()) == null ? void 0 : t.parent) === this && (r(this, L).commitOrRemove(), r(this, L).setActiveEditor(null)), r(this, ei) && (clearTimeout(r(this, ei)), p(this, ei, null));
    for (const s of r(this, Oe).values())
      (e = r(this, zn)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, r(this, Oe).clear(), r(this, L).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, Vn(this.div, t);
    for (const e of r(this, L).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    r(this, L).commitOrRemove(), m(this, ct, Bl).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, Vn(this.div, {
      rotation: s
    }), e !== s)
      for (const i of r(this, Oe).values())
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
    return r(this, L).viewParameters.realScale;
  }
};
zn = new WeakMap(), da = new WeakMap(), Ts = new WeakMap(), Ii = new WeakMap(), ei = new WeakMap(), Oe = new WeakMap(), Di = new WeakMap(), ua = new WeakMap(), es = new WeakMap(), qt = new WeakMap(), si = new WeakMap(), L = new WeakMap(), Fi = new WeakMap(), ct = new WeakSet(), _f = function(t) {
  r(this, L).unselectAll();
  const {
    target: e
  } = t;
  if (e === r(this, qt).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && r(this, qt).div.contains(e)) {
    const {
      isMac: s
    } = se.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    r(this, L).showAllEditors("highlight", !0, !0), r(this, qt).div.classList.add("free"), this.toggleDrawing(), Vl.startHighlighting(this, r(this, L).direction === "ltr", {
      target: r(this, qt).div,
      x: t.x,
      y: t.y
    }), r(this, qt).div.addEventListener("pointerup", () => {
      r(this, qt).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: r(this, L)._signal
    }), t.preventDefault();
  }
}, hs = function() {
  return r(ze, Fi).get(r(this, L).getMode());
}, Oc = function(t) {
  const e = r(this, ct, hs);
  return e ? new e.prototype.constructor(t) : null;
}, Hc = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), n = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (n + o) / 2 - t, c = (a + l) / 2 - e, [u, f] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return {
    offsetX: u,
    offsetY: f
  };
}, Bl = function() {
  for (const t of r(this, Oe).values())
    t.isEmpty() && t.remove();
}, N(ze, "_initialized", !1), b(ze, Fi, new Map([bc, Lc, Ic, Vl].map((t) => [t._editorType, t])));
let Nc = ze;
var ss, sl, te, Un, ch, yf, Rs, $c, wf, Gc;
const Ut = class Ut {
  constructor({
    pageIndex: t
  }) {
    b(this, Rs);
    b(this, ss, null);
    b(this, sl, 0);
    b(this, te, /* @__PURE__ */ new Map());
    b(this, Un, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!r(this, ss)) {
      p(this, ss, t);
      return;
    }
    if (r(this, ss) !== t) {
      if (r(this, te).size > 0)
        for (const e of r(this, te).values())
          e.remove(), t.append(e);
      p(this, ss, t);
    }
  }
  static get _svgFactory() {
    return j(this, "_svgFactory", new Kc());
  }
  draw(t, e = !1, s = !1) {
    const i = Kt(this, sl)._++, n = m(this, Rs, $c).call(this), a = Ut._svgFactory.createElement("defs");
    n.append(a);
    const o = Ut._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && r(this, Un).set(i, o);
    const h = s ? m(this, Rs, wf).call(this, a, l) : null, c = Ut._svgFactory.createElement("use");
    return n.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(n, t), r(this, te).set(i, n), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = Kt(this, sl)._++, i = m(this, Rs, $c).call(this), n = Ut._svgFactory.createElement("defs");
    i.append(n);
    const a = Ut._svgFactory.createElement("path");
    n.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Ut._svgFactory.createElement("mask");
      n.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const f = Ut._svgFactory.createElement("rect");
      u.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
      const g = Ut._svgFactory.createElement("use");
      u.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const h = Ut._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), r(this, te).set(s, i), s;
  }
  finalizeDraw(t, e) {
    r(this, Un).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: n,
      path: a
    } = e, o = typeof t == "number" ? r(this, te).get(t) : t;
    if (o) {
      if (s && m(this, Rs, Gc).call(this, o, s), i && m(l = Ut, ch, yf).call(l, o, i), n) {
        const {
          classList: h
        } = o;
        for (const [c, u] of Object.entries(n))
          h.toggle(c, u);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        m(this, Rs, Gc).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = r(this, te).get(t);
    s && (r(e, ss).append(s), r(this, te).delete(t), r(e, te).set(t, s));
  }
  remove(t) {
    r(this, Un).delete(t), r(this, ss) !== null && (r(this, te).get(t).remove(), r(this, te).delete(t));
  }
  destroy() {
    p(this, ss, null);
    for (const t of r(this, te).values())
      t.remove();
    r(this, te).clear(), r(this, Un).clear();
  }
};
ss = new WeakMap(), sl = new WeakMap(), te = new WeakMap(), Un = new WeakMap(), ch = new WeakSet(), yf = function(t, [e, s, i, n]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * n}%`;
}, Rs = new WeakSet(), $c = function() {
  const t = Ut._svgFactory.create(1, 1, !0);
  return r(this, ss).append(t), t.setAttribute("aria-hidden", !0), t;
}, wf = function(t, e) {
  const s = Ut._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = Ut._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), i;
}, Gc = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, b(Ut, ch);
let Bc = Ut;
globalThis.pdfjsTestingUtils = {
  HighlightOutliner: _c
};
var xg = B.AbortException, Cg = B.AnnotationEditorLayer, Tg = B.AnnotationEditorParamsType, Rg = B.AnnotationEditorType, Pg = B.AnnotationEditorUIManager, kg = B.AnnotationLayer, Mg = B.AnnotationMode, Lg = B.ColorPicker, Ig = B.DOMSVGFactory, Dg = B.DrawLayer, Fg = B.FeatureTest, Ng = B.GlobalWorkerOptions, Og = B.ImageKind, Hg = B.InvalidPDFException, Bg = B.MissingPDFException, $g = B.OPS, Gg = B.OutputScale, zg = B.PDFDataRangeTransport, Ug = B.PDFDateString, Vg = B.PDFWorker, jg = B.PasswordResponses, Wg = B.PermissionFlag, qg = B.PixelsPerInch, Xg = B.RenderingCancelledException, Yg = B.TextLayer, Kg = B.UnexpectedResponseException, Qg = B.Util, Jg = B.VerbosityLevel, Zg = B.XfaLayer, tm = B.build, em = B.createValidAbsoluteUrl, sm = B.fetchData, im = B.getDocument, nm = B.getFilenameFromUrl, rm = B.getPdfFilenameFromUrl, am = B.getXfaPageViewport, om = B.isDataScheme, lm = B.isPdfFile, hm = B.noContextMenu, cm = B.normalizeUnicode, dm = B.setLayerDimensions, um = B.shadow, fm = B.stopEvent, pm = B.version;
Promise.withResolvers ?? (Promise.withResolvers = function() {
  let d, t;
  return { promise: new Promise((s, i) => {
    d = s, t = i;
  }), resolve: d, reject: t };
});
export {
  xg as AbortException,
  Cg as AnnotationEditorLayer,
  Tg as AnnotationEditorParamsType,
  Rg as AnnotationEditorType,
  Pg as AnnotationEditorUIManager,
  kg as AnnotationLayer,
  Mg as AnnotationMode,
  Lg as ColorPicker,
  Ig as DOMSVGFactory,
  Dg as DrawLayer,
  Fg as FeatureTest,
  Ng as GlobalWorkerOptions,
  Og as ImageKind,
  Hg as InvalidPDFException,
  Bg as MissingPDFException,
  $g as OPS,
  Gg as OutputScale,
  zg as PDFDataRangeTransport,
  Ug as PDFDateString,
  Vg as PDFWorker,
  jg as PasswordResponses,
  Wg as PermissionFlag,
  qg as PixelsPerInch,
  Xg as RenderingCancelledException,
  Yg as TextLayer,
  Kg as UnexpectedResponseException,
  Qg as Util,
  Jg as VerbosityLevel,
  Zg as XfaLayer,
  tm as build,
  em as createValidAbsoluteUrl,
  sm as fetchData,
  im as getDocument,
  nm as getFilenameFromUrl,
  rm as getPdfFilenameFromUrl,
  am as getXfaPageViewport,
  om as isDataScheme,
  lm as isPdfFile,
  hm as noContextMenu,
  cm as normalizeUnicode,
  dm as setLayerDimensions,
  um as shadow,
  fm as stopEvent,
  pm as version
};
