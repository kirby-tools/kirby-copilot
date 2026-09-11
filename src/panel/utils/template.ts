import { template, TEMPLATE_PLACEHOLDER_RE } from "utilful";

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

/**
 * Lowercases each placeholder in the prompt, replaces it with its value from
 * `context`, and trims the result. A placeholder without a value keeps its
 * braces, so the prompt preview and the prompt sent to the model read the same.
 */
export function resolvePlaceholders(
  prompt: string,
  context: Record<string, string>,
) {
  return template(
    normalizePlaceholders(prompt),
    context,
    (key) => `{${key}}`,
  ).trim();
}
