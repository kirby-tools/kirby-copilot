import { createRefTokenRegex, extractRefIds } from "../utils/reference-tokens";

// Unlike skill ids, page ids may contain slashes for nested pages
const PAGE_ID_CHARSET = String.raw`[\w\-/]`;

export function createPageRefTokenRegex() {
  return createRefTokenRegex("page", PAGE_ID_CHARSET);
}

export function extractPageRefIds(text: string) {
  return extractRefIds(text, createPageRefTokenRegex());
}
