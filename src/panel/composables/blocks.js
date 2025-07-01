import { PLUGIN_FIELDSETS_API_ROUTE } from "../constants";
import { generateKirbyBlocksSchema } from "../schemas/blocks";

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

    if (fieldConfig.fieldsets && Array.isArray(fieldConfig.fieldsets)) {
      fieldsets = fieldsets.filter((fieldset) =>
        fieldConfig.fieldsets.includes(fieldset.type),
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
