import type { KirbyFieldProps } from "kirby-types";
import { usePanel } from "kirbyuse";
import { PLUGIN_MODEL_FIELDS_API_ROUTE } from "../constants";
import { EXCLUDED_FIELD_TYPES } from "../schemas/fields";

const modelFieldsCache = new Map<string, KirbyFieldProps[]>();

export function useModelFields() {
  const panel = usePanel();

  async function getModelFields() {
    const { path: id } = panel.view;

    if (modelFieldsCache.has(id)) {
      return modelFieldsCache.get(id)!;
    }

    const fields = await panel.api.get<Record<string, KirbyFieldProps>>(
      PLUGIN_MODEL_FIELDS_API_ROUTE,
      { id },
      undefined,
      // Avoid showing Panel loading indicator
      true,
    );

    const filteredFields = Object.values(fields).filter(
      (field) =>
        !EXCLUDED_FIELD_TYPES.has(field.type) &&
        !field.disabled &&
        !field.hidden,
    );

    modelFieldsCache.set(id, filteredFields);
    return filteredFields;
  }

  function clearModelFields() {
    modelFieldsCache.delete(panel.view.path);
  }

  return {
    getModelFields,
    clearModelFields,
  };
}
