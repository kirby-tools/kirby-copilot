import { usePanel } from "kirbyuse";
import { PLUGIN_MODEL_FIELDS_API_ROUTE } from "../constants";
import { EXCLUDED_FIELD_TYPES } from "../schemas/fields";

const fieldsCache = new Map();

export function useFields() {
  const panel = usePanel();

  async function getViewFields() {
    const { path: id } = panel.view;

    if (fieldsCache.has(id)) {
      return fieldsCache.get(id);
    }

    let fields = await panel.api.get(
      PLUGIN_MODEL_FIELDS_API_ROUTE,
      { id },
      undefined,
      // Silent
      true,
    );

    fields = Object.values(fields).filter(
      (field) =>
        !EXCLUDED_FIELD_TYPES.has(field.type) &&
        !field.disabled &&
        !field.hidden,
    );

    fieldsCache.set(id, fields);
    return fields;
  }

  function clearViewFields() {
    fieldsCache.delete(panel.view.path);
  }

  return {
    getViewFields,
    clearViewFields,
  };
}
