import { PLUGIN_FIELDSETS_API_ROUTE } from "../constants";
import { generateKirbyBlocksSchema } from "../schemas/blocks";
import { generateKirbyLayoutsSchema } from "../schemas/layouts";
import { usePluginContext } from "./plugin";

let fieldsets;
let pendingPromise;

async function getFieldsets() {
  if (fieldsets) return fieldsets;
  if (pendingPromise) return pendingPromise;

  pendingPromise = window.panel.api
    .get(PLUGIN_FIELDSETS_API_ROUTE)
    .then((response) => {
      fieldsets = response;
      pendingPromise = undefined;
      return fieldsets;
    });

  return pendingPromise;
}

export function useBlocks() {
  async function getZodSchema(fieldConfig) {
    let fieldsets = await getFieldsets();
    const { config } = await usePluginContext();

    // Filter out excluded blocks from global config
    if (config.excludedBlocks && Array.isArray(config.excludedBlocks)) {
      fieldsets = fieldsets.filter(
        (fieldset) => !config.excludedBlocks.includes(fieldset.type),
      );
    }

    if (fieldConfig.fieldsets) {
      const fieldsetTypes = Array.isArray(fieldConfig.fieldsets)
        ? fieldConfig.fieldsets
        : Object.keys(fieldConfig.fieldsets);

      fieldsets = fieldsets.filter((fieldset) =>
        fieldsetTypes.includes(fieldset.type),
      );
    }

    return generateKirbyBlocksSchema(fieldsets, fieldConfig);
  }

  function normalizeBlock(block) {
    block.isHidden ??= false;
    block.id ??= crypto.randomUUID();
    return block;
  }

  return {
    getFieldsets,
    getZodSchema,
    normalizeBlock,
  };
}

export function useLayouts() {
  async function getZodSchema(fieldConfig) {
    let fieldsets = await getFieldsets();
    const { config } = await usePluginContext();

    // Filter out excluded blocks from global config
    if (config.excludedBlocks && Array.isArray(config.excludedBlocks)) {
      fieldsets = fieldsets.filter(
        (fieldset) => !config.excludedBlocks.includes(fieldset.type),
      );
    }

    if (fieldConfig.fieldsets) {
      const fieldsetTypes = Array.isArray(fieldConfig.fieldsets)
        ? fieldConfig.fieldsets
        : Object.keys(fieldConfig.fieldsets);

      fieldsets = fieldsets.filter((fieldset) =>
        fieldsetTypes.includes(fieldset.type),
      );
    }

    return generateKirbyLayoutsSchema(fieldsets, fieldConfig);
  }

  function normalizeLayout(layout) {
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

    return layout;
  }

  return {
    getZodSchema,
    normalizeLayout,
  };
}
