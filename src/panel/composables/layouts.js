import { generateKirbyLayoutsSchema } from "../schemas/layouts";
import { useBlocks } from "./blocks";
import { usePluginContext } from "./plugin";

export function useLayouts() {
  const { getFieldsets } = useBlocks();

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
