import { generateKirbyLayoutsSchema } from "../schemas/layouts";
import { useBlocks } from "./blocks";

export function useLayouts() {
  const { getFieldsets } = useBlocks();

  async function getZodSchema(fieldConfig) {
    let fieldsets = await getFieldsets();

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
