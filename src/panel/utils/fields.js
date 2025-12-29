/**
 * @typedef {"text" | "markdown" | "rich-text"} OutputFormat
 */

/// keep-sorted
const FIELD_TYPE_RESPONSE_FORMAT = {
  list: "rich-text",
  markdown: "markdown", // Community plugin field type
  textarea: "markdown",
  writer: "rich-text",
};

/**
 * Returns the output format for a given Kirby field type.
 *
 * @param {string} fieldType - The Kirby field type (e.g., `writer`, `textarea`, `blocks`)
 * @returns {OutputFormat} The output format to use for AI-generated content
 */
export function getResponseFormat(fieldType) {
  return FIELD_TYPE_RESPONSE_FORMAT[fieldType] || "text";
}

/**
 * Recursively searches for a field definition by name and optionally by type.
 *
 * @remarks
 * Traverses through all nested structures including blocks, layouts, structures, etc.
 *
 * @param {object | object[]} fields - Single field definition or array of field definitions
 * @param {string} fieldName - The field name to search for
 * @param {string} [fieldType] - Optional field type to match
 * @returns {object | undefined} The matching field definition or undefined
 */
export function findFieldDefinition(fields, fieldName, fieldType) {
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
  if (fieldDefinition.fieldsets) {
    for (const fieldset of Object.values(fieldDefinition.fieldsets)) {
      if (!fieldset.tabs) continue;

      for (const tab of Object.values(fieldset.tabs)) {
        if (!tab.fields) continue;

        for (const field of Object.values(tab.fields)) {
          const result = findFieldDefinition(field, fieldName, fieldType);
          if (result) return result;
        }
      }
    }
  }

  // Search in fields (structure, object, etc.)
  if (fieldDefinition.fields) {
    for (const field of Object.values(fieldDefinition.fields)) {
      const result = findFieldDefinition(field, fieldName, fieldType);
      if (result) return result;
    }
  }
}
