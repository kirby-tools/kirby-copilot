import { z } from "zod";

/**
 * Field types that should be excluded from block schema generation
 */
const EXCLUDED_FIELD_TYPES = new Set(
  /// keep-sorted
  ["files", "gap", "headline", "info", "layout", "layout", "line"],
);

/**
 * Maps Kirby field types to Zod schemas based on their expected data structure
 */
const FIELD_TYPE_TO_SCHEMA = {
  // Text fields
  text: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", single-line plain text without line breaks or formatting`,
      ),
  textarea: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", multi-line plain text content with line breaks for paragraphs. Markdown formatting is allowed if content requires it.`,
      ),
  email: (field) =>
    z.string().describe(`"${field.label}", a valid email address`),
  tel: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", a telephone number in appropriate format for the context`,
      ),
  url: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", a complete and valid URL starting with http:// or https://`,
      ),
  password: (field) =>
    z
      .string()
      .describe(`"${field.label}", a secure password (not for actual use)`),

  // Rich text fields
  writer: (field) =>
    z
      .string()
      .describe(
        `"${field.label}" (WYSIWYG), ${
          field.inline
            ? "inline formatting only (bold, italic, underline, code, links) – NO paragraph <p> tags allowed"
            : "content must be wrapped in <p> tags (can contain one or multiple paragraphs) plus inline formatting (bold, italic, underline, code, links)"
        }`,
      ),
  markdown: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", content in Markdown syntax (headers, lists, links, emphasis, etc.)`,
      ),
  list: (field) =>
    z
      .string()
      .describe(
        `"${field.label}" (WYSIWYG), HTML list content: wrap in <ul> for unordered or <ol> for ordered lists, with <li> items`,
      ),

  // Boolean fields
  toggle: (field) =>
    z
      .boolean()
      .describe(`"${field.label}", a boolean based on context appropriateness`),

  // Single selection fields (all store a single string value)
  select: (field) => createSingleSelectionSchema(field),
  radio: (field) => createSingleSelectionSchema(field),
  toggles: (field) => createSingleSelectionSchema(field),

  // Multiple selection fields (all store arrays of strings)
  checkboxes: (field) => createMultipleSelectionSchema(field),
  multiselect: (field) => createMultipleSelectionSchema(field),
  tags: (field) => createMultipleSelectionSchema(field),

  // Number fields
  number: (field) => {
    let schema = z.number();

    if (field.min != null) schema = schema.min(field.min);
    if (field.max != null) schema = schema.max(field.max);

    return schema.describe(
      `"${field.label}", a numeric value${
        field.min != null || field.max != null
          ? " within the defined range"
          : ""
      }`,
    );
  },
  range: (field) => {
    let schema = z.number();

    if (field.min != null) schema = schema.min(field.min);
    if (field.max != null) schema = schema.max(field.max);

    return schema.describe(
      `"${field.label}", a numeric value${
        field.min != null || field.max != null
          ? " within the defined range"
          : ""
      }`,
    );
  },

  // Date/time fields
  date: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", a date ${
          field.time
            ? "with time in YYYY-MM-DD HH:MM:SS format (ISO 8601)"
            : "in YYYY-MM-DD format (ISO 8601)"
        }`,
      ),
  time: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", a time in HH:MM:SS format (24-hour, ISO 8601)`,
      ),

  // Structure field
  structure: (field) => {
    // If the structure has defined fields, create a proper schema
    if (typeof field.fields === "object" && field.fields !== null) {
      const structureContentSchema = {};

      for (const [fieldName, subField] of Object.entries(field.fields)) {
        if (subField.disabled || subField.hidden) continue;
        if (EXCLUDED_FIELD_TYPES.has(subField.type)) continue;

        structureContentSchema[fieldName] = fieldToZodSchema({
          ...subField,
          name: fieldName,
        });
      }

      return z
        .array(z.object(structureContentSchema))
        .describe(
          `"${field.label}", repeatable structured data, each containing the defined sub-fields with appropriate content`,
        );
    }

    // Fallback for structures without defined fields
    return z
      .array(z.record(z.string()))
      .describe(
        `"${field.label}", repeatable structured data based on expected content structure`,
      );
  },

  // Color field
  color: (field) =>
    z
      .string()
      .describe(`"${field.label}", a color value in hex, rgb or hsl format`),

  // Link field
  link: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", a link: internal page UUIDs (page://...), external URLs (https://...), email links (mailto:...), or anchors (#section)`,
      ),

  // Slug field
  slug: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", a URL-friendly slug (lowercase, hyphens, no spaces or special characters)`,
      ),
};

/**
 * Generates a Zod schema from a Kirby blocks fieldsets configuration
 */
export function generateKirbyBlocksSchema(fieldsets) {
  if (!Array.isArray(fieldsets) || fieldsets.length === 0) {
    throw new Error("Invalid fieldsets configuration");
  }

  const blockSchemas = fieldsets.map(generateBlockSchema).filter(Boolean);

  return z.union(blockSchemas).describe("Union of all Kirby block types");
}

/**
 * Generates a Zod schema for a single block type
 */
function generateBlockSchema(fieldsets) {
  const { name, type, fields } = fieldsets;

  if (!fields || Object.keys(fields).length === 0) {
    return;
  }

  const contentSchema = {};

  for (const field of Object.values(fields)) {
    if (field.disabled || field.hidden) continue;
    if (EXCLUDED_FIELD_TYPES.has(field.type)) continue;

    const fieldSchema = fieldToZodSchema(field);
    contentSchema[field.name] = fieldSchema;
  }

  return z
    .object({
      type: z.literal(type),
      content: z.object(contentSchema),
    })
    .describe(`Kirby block: ${name}`);
}

/**
 * Converts a Kirby field definition to a Zod schema
 */
function fieldToZodSchema(field) {
  const schemaBuilder = FIELD_TYPE_TO_SCHEMA[field.type];

  let schema = schemaBuilder(field);

  // Handle required fields
  if (field.required === true) {
    // Required fields must have content
    if (schema._def.typeName === "ZodString") {
      const description = schema._def.description;
      schema = z.string().min(1).describe(description);
    } else if (schema._def.typeName === "ZodArray") {
      schema = schema.min(1);
    }
  } else {
    // TODO: OpenAI doesn't support optional fields yet
    // schema = schema.optional();
  }

  return schema;
}

/**
 * Creates a Zod schema for single selection fields (select, radio, toggles)
 */
function createSingleSelectionSchema(field) {
  const values = (field.options ?? [])
    .map((option) => (typeof option === "string" ? option : option.value))
    .filter(Boolean);

  if (values.length > 0) {
    return z
      .enum(values)
      .describe(
        `"${field.label}", single selection value based on the predefined options`,
      );
  }

  return z.string().describe(`"${field.label}", single selection value`);
}

/**
 * Creates a Zod schema for multiple selection fields (checkboxes, multiselect, tags)
 */
function createMultipleSelectionSchema(field) {
  const values = (field.options ?? [])
    .map((option) => (typeof option === "string" ? option : option.value))
    .filter(Boolean);

  if (values.length > 0) {
    return z
      .array(z.enum(values))
      .describe(
        `"${field.label}", one ore many values based on the predefined options`,
      );
  }

  return z
    .array(z.string())
    .describe(`"${field.label}", multiple selection values`);
}
