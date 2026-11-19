import type { KirbyFieldProps } from "kirby-types";
import { useContent, usePanel } from "kirbyuse";
import { PLUGIN_MODEL_FIELDS_API_ROUTE } from "../constants";
import { EXCLUDED_FIELD_TYPES } from "../schemas/fields";

const modelFieldsCache = new Map<string, KirbyFieldProps[]>();

export function useModelFields() {
  const panel = usePanel();
  const { modelPath } = useContent();

  async function getModelFields() {
    const id = modelPath.value!;

    if (modelFieldsCache.has(id)) {
      return modelFieldsCache.get(id)!;
    }

    const fields = await panel.api.get<Record<string, KirbyFieldProps>>(
      PLUGIN_MODEL_FIELDS_API_ROUTE,
      { id },
      { silent: true },
    );

    const filteredFields = Object.values(fields).filter(
      (field) =>
        field.saveable !== false &&
        !EXCLUDED_FIELD_TYPES.has(field.type) &&
        !field.disabled &&
        !field.hidden,
    );

    modelFieldsCache.set(id, filteredFields);
    return filteredFields;
  }

  return {
    getModelFields,
  };
}
