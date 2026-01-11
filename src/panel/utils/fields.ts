import type { KirbyAnyFieldProps } from "kirby-types";
import type { OutputFormat } from "../types";

/// keep-sorted
const FIELD_TYPE_RESPONSE_FORMAT: Record<string, OutputFormat> = {
  list: "rich-text",
  markdown: "markdown", // Community plugin field type
  textarea: "markdown",
  writer: "rich-text",
};

/** Returns the output format for a given Kirby field type. */
export function getResponseFormat(fieldType: string): OutputFormat {
  return FIELD_TYPE_RESPONSE_FORMAT[fieldType] ?? "text";
}

/**
 * Recursively searches for a field definition by name and optionally by type.
 *
 * @remarks
 * Traverses through all nested structures including blocks, layouts, structures, etc.
 */
export function findFieldDefinition(
  fields: KirbyAnyFieldProps | KirbyAnyFieldProps[],
  fieldName: string,
  fieldType?: string,
): KirbyAnyFieldProps | undefined {
  if (Array.isArray(fields)) {
    for (const field of fields) {
      const result = findFieldDefinition(field, fieldName, fieldType);
      if (result) return result;
    }
    return;
  }

  const fieldDefinition = fields;

  // Check if this field matches
  if (fieldDefinition.name === fieldName) {
    // If type is specified, verify it matches
    if (!fieldType || fieldDefinition.type === fieldType) {
      return fieldDefinition;
    }
  }

  // Search in fieldsets (blocks, layouts)
  if ("fieldsets" in fieldDefinition && fieldDefinition.fieldsets) {
    for (const fieldset of Object.values(fieldDefinition.fieldsets)) {
      if (!fieldset.tabs) continue;

      for (const tab of Object.values(fieldset.tabs)) {
        if (!tab.fields) continue;

        for (const field of Object.values(tab.fields)) {
          const result = findFieldDefinition(
            field as KirbyAnyFieldProps,
            fieldName,
            fieldType,
          );
          if (result) return result;
        }
      }
    }
  }

  // Search in fields (structure, object, etc.)
  if ("fields" in fieldDefinition && fieldDefinition.fields) {
    for (const field of Object.values(fieldDefinition.fields)) {
      const result = findFieldDefinition(
        field as KirbyAnyFieldProps,
        fieldName,
        fieldType,
      );
      if (result) return result;
    }
  }
}
