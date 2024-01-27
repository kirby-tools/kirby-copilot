export async function loadPdfAsText({ file, pdfjsServerless }) {
  const { resolvePDFJS } = pdfjsServerless;
  const { getDocument } = await resolvePDFJS();
  const data = await file.arrayBuffer();
  const document = await getDocument({
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
