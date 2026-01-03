import { usePanel } from "kirbyuse";
import { PLUGIN_MODEL_FIELDS_API_ROUTE } from "../constants";
import { EXCLUDED_FIELD_TYPES } from "../schemas/fields";

const modelFieldsCache = new Map();

export function useModelFields() {
  const panel = usePanel();

  async function getModelFields() {
    const { path: id } = panel.view;

    if (modelFieldsCache.has(id)) {
      return modelFieldsCache.get(id);
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

    modelFieldsCache.set(id, fields);
    return fields;
  }

  function clearModelFields() {
    modelFieldsCache.delete(panel.view.path);
  }

  return {
    getModelFields,
    clearModelFields,
  };
}
