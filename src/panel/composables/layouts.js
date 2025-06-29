import { generateKirbyLayoutsSchema } from "../schemas/layouts";
import { useBlocks } from "./blocks";

export function useLayouts() {
  const { getFieldsets } = useBlocks();

  async function getZodSchema(fieldConfig) {
    const fieldsets = await getFieldsets();

    let filteredFieldsets = fieldsets;

    if (fieldConfig.fieldsets && Array.isArray(fieldConfig.fieldsets)) {
      filteredFieldsets = fieldsets.filter((fieldset) =>
        fieldConfig.fieldsets.includes(fieldset.type),
      );
    }

    return generateKirbyLayoutsSchema(filteredFieldsets, fieldConfig);
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
