import { useContent, usePanel } from "kirbyuse";

/**
 * Creates a context object from the current Panel content.
 *
 * @remarks
 * Collects all fields from the current content and adds the page title.
 * Non-primitive values are JSON-encoded. Kirby blocks arrays are normalized
 * by stripping internal metadata (`id`, `isHidden`, etc.) before serialization.
 *
 * @returns {Record<string, string>} Key-value pairs of content fields
 */
export function createContentContext() {
  const panel = usePanel();
  const { currentContent } = useContent();
  const context = {
    ...currentContent.value,
    title: panel.view.title,
  };

  return Object.fromEntries(
    Object.entries(context).map(([key, value]) => [
      key,
      Array.isArray(value) || (typeof value === "object" && value !== null)
        ? JSON.stringify(isBlocksArray(value) ? normalizeBlocks(value) : value)
        : value,
    ]),
  );
}

function isBlocksArray(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "id" in item &&
        "type" in item &&
        "isHidden" in item &&
        "content" in item,
    )
  );
}

function normalizeBlocks(blocks) {
  return blocks.map(({ id, isHidden, ...rest }) => rest);
}
