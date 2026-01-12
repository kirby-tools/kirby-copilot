import type {
  KirbyBlock,
  KirbyBlocksFieldProps,
  KirbyLayout,
  KirbyLayoutFieldProps,
} from "kirby-types";
import type { KirbyFieldset } from "../types";
import { PLUGIN_FIELDSETS_API_ROUTE } from "../constants";
import { generateKirbyBlocksSchema } from "../schemas/blocks";
import { generateKirbyLayoutsSchema } from "../schemas/layouts";
import { usePluginContext } from "./plugin";

let fieldsets: KirbyFieldset[] | undefined;
let pendingPromise: Promise<KirbyFieldset[]> | undefined;

function getFieldsets() {
  if (fieldsets) return Promise.resolve(fieldsets);
  if (pendingPromise) return pendingPromise;

  pendingPromise = window.panel.api
    .get<KirbyFieldset[]>(PLUGIN_FIELDSETS_API_ROUTE)
    .then((response) => {
      fieldsets = response;
      pendingPromise = undefined;
      return fieldsets;
    });

  return pendingPromise;
}

export function useBlocks() {
  async function getZodSchema(fieldConfig: KirbyBlocksFieldProps) {
    let currentFieldsets = await getFieldsets();
    const { config } = await usePluginContext();

    // Filter out excluded blocks from global config
    if (config.excludedBlocks && Array.isArray(config.excludedBlocks)) {
      currentFieldsets = currentFieldsets.filter(
        (fieldset) => !config.excludedBlocks!.includes(fieldset.type),
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

  function normalizeBlock(block: Partial<KirbyBlock>) {
    block.isHidden ??= false;
    block.id ??= crypto.randomUUID();
    return block as KirbyBlock;
  }

  return {
    getFieldsets,
    getZodSchema,
    normalizeBlock,
  };
}

export function useLayouts() {
  async function getZodSchema(fieldConfig: KirbyLayoutFieldProps) {
    let currentFieldsets = await getFieldsets();
    const { config } = await usePluginContext();

    // Filter out excluded blocks from global config
    if (config.excludedBlocks && Array.isArray(config.excludedBlocks)) {
      currentFieldsets = currentFieldsets.filter(
        (fieldset) => !config.excludedBlocks!.includes(fieldset.type),
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

  function normalizeLayout(layout: Partial<KirbyLayout>) {
    layout.id ??= crypto.randomUUID();
    layout.attrs ??= [];
    layout.columns = (layout.columns ?? []).map((column) => {
      column.id ??= crypto.randomUUID();
      column.width ??= "1/1";
      column.blocks = (column.blocks ?? []).map((block) => {
        block.isHidden ??= false;
        block.id ??= crypto.randomUUID();
        return block;
      });

      return column;
    });

    return layout as KirbyLayout;
  }

  return {
    getZodSchema,
    normalizeLayout,
  };
}
