import { TEMPLATE_PLACEHOLDER_RE } from "utilful";

/**
 * Lowercases all placeholder keys in a template string to match
 * Kirby's internally lowercased field names.
 *
 * @example
 * normalizePlaceholders("Summarize {Title} and {Description}")
 * // => "Summarize {title} and {description}"
 */
export function normalizePlaceholders(input: string) {
  return input.replace(
    TEMPLATE_PLACEHOLDER_RE,
    (_, key: string) => `{${key.toLowerCase()}}`,
  );
}
