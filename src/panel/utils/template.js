/**
 * Simple template engine that replaces `{key}` with `args.key`.
 *
 * @example
 * const result = template(
 *   'Hello {name}! My name is {myName}.',
 *   { name: 'World', myName: 'Johann' }
 * ) // Hello World! My name is Johann.
 */
export function template(input, args) {
  return input.replace(
    /{(\w+)}/g,
    (match, key) => `${args?.[key.toLowerCase()] ?? match}`,
  );
}
