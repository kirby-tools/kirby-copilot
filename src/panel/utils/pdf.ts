import type { PDFDocumentProxy } from "pdfjs-dist";
import type * as PDFJS from "pdfjs-dist";
import type { TextItem } from "pdfjs-dist/types/src/display/api";
import { loadPluginModule, resolvePluginAsset } from "kirbyuse";

let _PDFJS: typeof PDFJS | undefined;

/** Extracts text content from a PDF file. */
export async function extractTextFromPdf(file: File) {
  const pdfjs = await resolvePDFJS();
  const data = await file.arrayBuffer();
  const document = await pdfjs.getDocument({
    data,
    useSystemFonts: true,
  }).promise;

  const texts = await Promise.all(
    Array.from({ length: document.numPages }, (_, i) =>
      getPageText(document, i + 1),
    ),
  );

  // Reduce whitespace to single space
  return texts.map((text) => text.replace(/\s+/g, " ")).join("\n");
}

async function getPageText(document: PDFDocumentProxy, pageNumber: number) {
  const page = await document.getPage(pageNumber);
  const content = await page.getTextContent();

  return content.items
    .filter((item): item is TextItem => "str" in item && item.str != null)
    .map((item) => item.str)
    .join(" ");
}

async function resolvePDFJS() {
  if (_PDFJS) {
    return _PDFJS;
  }

  _PDFJS = (await loadPluginModule("pdfjs")) as typeof PDFJS;
  const pdfjsWorker = resolvePluginAsset("pdfjs.worker.js");
  _PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker.url;
  return _PDFJS;
}
