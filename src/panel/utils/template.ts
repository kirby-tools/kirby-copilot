/** Regex pattern to match placeholders in the format `{key}`. */
export const PLACEHOLDER_PATTERN = /\{(\w+)\}/g;

/**
 * Replaces placeholders in a template string with corresponding variable values.
 *
 * @example
 * renderTemplate("Hello {name}!", { name: "World" });
 * // => "Hello World!"
 *
 * @example
 * renderTemplate("Hello {unknown}!", {}, "default");
 * // => "Hello default!"
 */
export function renderTemplate(
  input: string,
  variables: Record<string, string>,
  fallback?: string | ((key: string) => string),
) {
  return input.replace(
    PLACEHOLDER_PATTERN,
    (_, key: string) =>
      variables[key.toLowerCase()] ||
      ((typeof fallback === "function" ? fallback(key) : fallback) ?? key),
  );
}
