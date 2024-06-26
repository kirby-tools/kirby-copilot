import { getModule, resolvePluginAsset } from "./assets";

let _PDFJS;

export async function loadPdfAsText(file) {
  const PDFJS = await resolvePDFJS();
  const data = await file.arrayBuffer();
  const document = await PDFJS.getDocument({
    data,
    useSystemFonts: true,
  }).promise;

  const texts = await Promise.all(
    Array.from({ length: document.numPages }, (_, i) =>
      getPageText(document, i + 1),
    ),
  );

  // Reduce whitespace to single space
  return texts.join("\n").replace(/\s+/g, " ");
}

async function getPageText(document, pageNumber) {
  const page = await document.getPage(pageNumber);
  const content = await page.getTextContent();

  return content.items
    .filter((item) => item.str != null)
    .map((item) => item.str)
    .join(" ");
}

async function resolvePDFJS() {
  if (_PDFJS) {
    return _PDFJS;
  }

  _PDFJS = await getModule("pdfjs");
  const pdfjsWorker = resolvePluginAsset("pdfjs.worker.js");
  _PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker.url;
  return _PDFJS;
}
