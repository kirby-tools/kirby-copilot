/**
 * Flattens nested fields from a blocks/layout field's fieldsets
 *
 * @param {object} field - Field definition object with fieldsets property
 * @returns {object} Object mapping field names to their definitions
 */
export function flattenFieldDefinitions(field) {
  const flattenedFieldMap = {};

  if (!field?.fieldsets) {
    return flattenedFieldMap;
  }

  for (const fieldset of Object.values(field.fieldsets)) {
    if (!fieldset.tabs) continue;

    for (const tab of Object.values(fieldset.tabs)) {
      if (!tab.fields) continue;

      Object.assign(flattenedFieldMap, tab.fields);
    }
  }

  return flattenedFieldMap;
}
