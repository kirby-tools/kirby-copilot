/**
 * Regex pattern to match placeholders in the format `{key}`.
 */
export const PLACEHOLDER_PATTERN = /\{(\w+)\}/g;

/**
 * Replaces placeholders in a template string with corresponding variable values.
 *
 * @param {string} input - The template string containing placeholders in the format `{key}`.
 * @param {Record<string, string>} variables - An object mapping lowercase keys to their replacement values.
 * @param {string | ((key: string) => string)} [fallback] - A fallback value or function to use when a variable is not found. If a function, it receives the original key. Defaults to the original key if not provided.
 * @returns {string} The template string with all placeholders replaced.
 *
 * @example
 * renderTemplate("Hello {name}!", { name: "World" });
 * // => "Hello World!"
 *
 * @example
 * renderTemplate("Hello {unknown}!", {}, "default");
 * // => "Hello default!"
 */
export function renderTemplate(input, variables, fallback) {
  return input.replace(
    PLACEHOLDER_PATTERN,
    (_, key) =>
      variables[key.toLowerCase()] ||
      ((typeof fallback === "function" ? fallback(key) : fallback) ?? key),
  );
}
