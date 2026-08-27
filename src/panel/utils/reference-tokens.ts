/**
 * Grammar mechanics shared by all reference tokens (`@<kind>://<id>`).
 * Each token kind owns its id charset and lifecycle (trigger, strip,
 * resolution); only the token syntax itself lives here.
 */

/** Word characters plus the hyphen, so a token cannot continue a slug either. */
const REF_TOKEN_WORD_CHAR_REGEX = /[\w-]/;

/**
 * Zero-width boundary before a token, so a mid-word occurrence
 * (`foo@skill://x`) stays literal text at every stage of the lifecycle.
 */
export const REF_TOKEN_BOUNDARY_SOURCE = String.raw`(?<!${REF_TOKEN_WORD_CHAR_REGEX.source})`;

export function createRefTokenRegex(kind: string, idCharset: string) {
  return new RegExp(
    String.raw`${REF_TOKEN_BOUNDARY_SOURCE}@${kind}://(${idCharset}+)`,
    "g",
  );
}

export function extractRefIds(text: string, regex: RegExp) {
  const ids: string[] = [];

  for (const match of text.matchAll(regex)) {
    if (match[1]) ids.push(match[1]);
  }

  return ids;
}

/**
 * Inserts a token at `index`, prefixing a space where it would otherwise
 * land mid-word.
 */
export function insertRefToken(text: string, index: number, token: string) {
  const separator = REF_TOKEN_WORD_CHAR_REGEX.test(text[index - 1] ?? "")
    ? " "
    : "";

  return {
    text: text.slice(0, index) + separator + token + text.slice(index),
    nextIndex: index + separator.length + token.length,
  };
}
