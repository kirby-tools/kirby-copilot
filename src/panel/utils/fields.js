/**
 * Recursively searches for a field definition by name and optionally by type
 *
 * @remarks
 * Traverses through all nested structures including blocks, layouts, structures, etc.
 */
export function findFieldInDefinitions(fieldDefinition, fieldName, fieldType) {
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
          const resolvedField = findFieldInDefinitions(
            field,
            fieldName,
            fieldType,
          );
          if (resolvedField) return resolvedField;
        }
      }
    }
  }

  // Search in fields (structure, object, etc.)
  if (fieldDefinition.fields) {
    for (const field of Object.values(fieldDefinition.fields)) {
      const resolvedField = findFieldInDefinitions(field, fieldName, fieldType);
      if (resolvedField) return resolvedField;
    }
  }
}
