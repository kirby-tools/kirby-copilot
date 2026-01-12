import type { KirbyBlock } from "kirby-types";
import { useContent, usePanel } from "kirbyuse";
import { isObject } from "./shared";

/**
 * Creates a context object from the current Panel content.
 *
 * @remarks
 * Collects all fields from the current content and adds the page title.
 * Non-primitive values are JSON-encoded. Kirby blocks arrays are normalized
 * by stripping internal metadata (`id`, `isHidden`, etc.) before serialization.
 */
export function createContentContext(): Record<string, string> {
  const panel = usePanel();
  const { currentContent } = useContent();
  const context = {
    ...currentContent.value,
    title: panel.view.title,
  };

  return Object.fromEntries(
    Object.entries(context).map(([key, value]) => [
      key,
      Array.isArray(value) || isObject(value)
        ? JSON.stringify(isBlocksArray(value) ? normalizeBlocks(value) : value)
        : String(value),
    ]),
  );
}

function isBlocksArray(value: unknown): value is KirbyBlock[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (item): item is KirbyBlock =>
        isObject(item) &&
        "id" in item &&
        "type" in item &&
        "isHidden" in item &&
        "content" in item,
    )
  );
}

function normalizeBlocks(
  blocks: KirbyBlock[],
): Omit<KirbyBlock, "id" | "isHidden">[] {
  return blocks.map(({ id, isHidden, ...rest }) => rest);
}
