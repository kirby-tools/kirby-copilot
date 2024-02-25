export function toArray(value) {
  value = value ?? [];
  return Array.isArray(value) ? value : [value];
}
