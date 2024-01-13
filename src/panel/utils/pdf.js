import { resolvePDFJS } from "pdfjs-serverless";

export async function loadPdfAsText(file) {
  const { getDocument } = await resolvePDFJS();
  const data = await file.arrayBuffer();
  const pdf = await getDocument({
    data,
    useSystemFonts: true,
  }).promise;

  const pageTexts = [];

  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i + 1);
    const pageContent = await page.getTextContent();

    pageTexts.push(
      pageContent.items
        .filter((item) => item.str != null)
        .map((item) => item.str)
        .join(" "),
    );
  }

  // Reduce whitespace to single space
  return pageTexts.join("\n").replace(/\s+/g, " ");
}
