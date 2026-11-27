import type {
  KirbyBlock,
  KirbyBlocksFieldProps,
  KirbyLayout,
  KirbyLayoutFieldProps,
} from "kirby-types";
import type { KirbyFieldset } from "../types";
import { createSharedRequest, usePanel } from "kirbyuse";
import { PLUGIN_FIELDSETS_API_ROUTE } from "../constants";
import { generateKirbyBlocksSchema } from "../schemas/blocks";
import { generateKirbyLayoutsSchema } from "../schemas/layouts";
import { usePluginContext } from "./plugin";

const fieldsets = createSharedRequest(() =>
  usePanel().api.get<KirbyFieldset[]>(PLUGIN_FIELDSETS_API_ROUTE, undefined, {
    silent: true,
  }),
);

export function useBlocks() {
  async function getZodSchema(fieldConfig: KirbyBlocksFieldProps) {
    let currentFieldsets = await fieldsets.get();
    const { config } = await usePluginContext();

    const { excludedBlocks } = config;
    if (Array.isArray(excludedBlocks)) {
      currentFieldsets = currentFieldsets.filter(
        (fieldset) => !excludedBlocks.includes(fieldset.type),
      );
    }

    if (fieldConfig.fieldsets) {
      const fieldsetTypes = Array.isArray(fieldConfig.fieldsets)
        ? fieldConfig.fieldsets
        : Object.keys(fieldConfig.fieldsets);

      currentFieldsets = currentFieldsets.filter((fieldset) =>
        fieldsetTypes.includes(fieldset.type),
      );
    }

    return generateKirbyBlocksSchema(currentFieldsets);
  }

  return {
    getZodSchema,
  };
}

export function useLayouts() {
  async function getZodSchema(fieldConfig: KirbyLayoutFieldProps) {
    let currentFieldsets = await fieldsets.get();
    const { config } = await usePluginContext();

    const { excludedBlocks } = config;
    if (Array.isArray(excludedBlocks)) {
      currentFieldsets = currentFieldsets.filter(
        (fieldset) => !excludedBlocks.includes(fieldset.type),
      );
    }

    if (fieldConfig.fieldsets) {
      const fieldsetTypes = Array.isArray(fieldConfig.fieldsets)
        ? fieldConfig.fieldsets
        : Object.keys(fieldConfig.fieldsets);

      currentFieldsets = currentFieldsets.filter((fieldset) =>
        fieldsetTypes.includes(fieldset.type),
      );
    }

    return generateKirbyLayoutsSchema(currentFieldsets, fieldConfig);
  }

  return {
    getZodSchema,
  };
}

/**
 * Creates the normalizer of one generation run. Each streamed partial repeats
 * the items of the one before, and a new ID per partial makes Kirby mount
 * every block anew.
 */
export function createItemNormalizer() {
  const ids = new Map<string, string>();

  function stableId(path: string) {
    let id = ids.get(path);
    if (!id) ids.set(path, (id = crypto.randomUUID()));
    return id;
  }

  function normalizeBlock(block: Partial<KirbyBlock>, path: string) {
    block.isHidden ??= false;
    block.id ??= stableId(path);
    return block as KirbyBlock;
  }

  function normalizeLayout(layout: Partial<KirbyLayout>, path: string) {
    layout.id ??= stableId(path);
    layout.attrs ??= [];
    layout.columns = (layout.columns ?? []).map((column, columnIndex) => {
      const columnPath = `${path}/${columnIndex}`;
      column.id ??= stableId(columnPath);
      column.width ??= "1/1";
      column.blocks = (column.blocks ?? []).map((block, blockIndex) =>
        normalizeBlock(block, `${columnPath}/${blockIndex}`),
      );
      return column;
    });

    return layout as KirbyLayout;
  }

  return (type: "blocks" | "layout", items: unknown[], path: string) =>
    items.map((item, index) =>
      type === "layout"
        ? normalizeLayout(item as Partial<KirbyLayout>, `${path}/${index}`)
        : normalizeBlock(item as Partial<KirbyBlock>, `${path}/${index}`),
    );
}
