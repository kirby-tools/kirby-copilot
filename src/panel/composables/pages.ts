const PAGE_REF_TOKEN_REGEX_SOURCE = String.raw`@page://([\w\-/]+)`;

export function createPageRefTokenRegex() {
  return new RegExp(PAGE_REF_TOKEN_REGEX_SOURCE, "g");
}

export function extractPageRefIds(text: string) {
  const ids: string[] = [];

  for (const match of text.matchAll(createPageRefTokenRegex())) {
    if (match[1]) ids.push(match[1]);
  }

  return ids;
}
