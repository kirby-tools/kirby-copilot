/**
 * Grammar mechanics shared by all reference tokens (`@<kind>://<id>`).
 * Each token kind owns its id charset and lifecycle (trigger, strip,
 * resolution); only the token syntax itself lives here.
 */
export function createRefTokenRegex(kind: string, idCharset: string) {
  return new RegExp(String.raw`@${kind}://(${idCharset}+)`, "g");
}

export function extractRefIds(text: string, regex: RegExp) {
  const ids: string[] = [];

  for (const match of text.matchAll(regex)) {
    if (match[1]) ids.push(match[1]);
  }

  return ids;
}
