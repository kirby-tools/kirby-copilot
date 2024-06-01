export function renderTemplate(str, variables, fallback) {
  return str.replace(
    /\{(\w+)\}/g,
    (_, key) =>
      variables[key.toLowerCase()] ||
      ((typeof fallback === "function" ? fallback(key) : fallback) ?? key),
  );
}
