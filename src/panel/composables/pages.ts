const PAGE_REF_TOKEN_REGEX_SOURCE = String.raw`@page://([\w\-/]+)`;

export function createPageRefTokenRegex() {
  return new RegExp(PAGE_REF_TOKEN_REGEX_SOURCE, "g");
}

export function extractPageRefIds(text: string) {
  return Array.from(
    text.matchAll(createPageRefTokenRegex()),
    ([, pageId]) => pageId,
  );
}
