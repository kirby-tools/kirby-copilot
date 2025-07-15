import { PLUGIN_FIELDSETS_API_ROUTE } from "../constants";
import { generateKirbyBlocksSchema } from "../schemas/blocks";
import { usePluginContext } from "./plugin";

let fieldsets;
let pendingPromise;

export function useBlocks() {
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
