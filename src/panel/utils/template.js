export function template(str, vars, fallback) {
  return str.replace(
    /{([\w\d]+)}/g,
    (_, key) =>
      vars[key] ||
      ((typeof fallback === "function" ? fallback(key) : fallback) ?? key),
  );
}
