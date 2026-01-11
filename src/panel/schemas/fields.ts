import type {
  KirbyAnyFieldProps,
  KirbyDateFieldProps,
  KirbyEntriesFieldProps,
  KirbyFieldProps,
  KirbyNumberFieldProps,
  KirbyObjectFieldProps,
  KirbyOptionsFieldProps,
  KirbyRangeFieldProps,
  KirbyStructureFieldProps,
  KirbyTextFieldProps,
  KirbyWriterFieldProps,
} from "kirby-types";
import { z } from "zod";

/**
 * Field types excluded from AI generation:
 * - UI elements: gap, headline, info, line
 * - Reference types: files, pages, users
 */
export const EXCLUDED_FIELD_TYPES = new Set(
  /// keep-sorted
  ["files", "gap", "headline", "hidden", "info", "line", "pages", "users"],
);

type SchemaBuilder = (field: KirbyAnyFieldProps) => z.ZodType;

/** Maps Kirby fields to Zod schemas based on their expected data structure */
export const FIELD_TYPE_TO_SCHEMA: Record<string, SchemaBuilder> = {
  // Text fields
  text: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", single-line plain text without line breaks or formatting`,
    ),
  textarea: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", multi-line text with line breaks for paragraphs. Markdown formatting is allowed if content requires it.`,
    ),
  markdown: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", multi-line text with Markdown formatting`,
    ),
  slug: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", a URL-friendly slug (lowercase, hyphens, no spaces or special characters)`,
    ),
  url: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", a valid URL starting with http:// or https://`,
    ),
  email: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", a valid email address`,
    ),
  password: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", a secure password (not for actual use)`,
    ),
  tel: (field) =>
    createTextSchema(
      field as KirbyTextFieldProps,
      `"${field.label}", a telephone number in appropriate format for the context`,
    ),

  // Rich text fields
  writer: (field) =>
    createTextSchema(
      field as KirbyWriterFieldProps,
      `"${field.label}" (WYSIWYG), ${
        (field as KirbyWriterFieldProps).inline === true
          ? "text with inline formatting only (bold, italic, underline, code, links, email, sub, sup). NO wrapping paragraph <p> tags allowed."
          : "text wrapped in paragraph <p> tags (can contain one or multiple paragraphs). Inline formatting (bold, italic, underline, code, links, email, sub, sup) is allowed."
      }`,
    ),
  list: (field) =>
    z
      .string()
      .describe(
        `"${field.label}" (WYSIWYG), HTML list wrapped in <ul> or <ol>. Use <li> for items with inline formatting (bold, italic, underline, code, links, email, sub, sup).`,
      ),

  // Number fields
  number: (field) => createNumericSchema(field as KirbyNumberFieldProps),
  range: (field) => createNumericSchema(field as KirbyRangeFieldProps),

  // Boolean fields
  toggle: (field) => z.boolean().describe(`"${field.label}", a boolean`),

  // Single selection fields (all store a single string value)
  select: (field) =>
    createSingleSelectionSchema(field as KirbyOptionsFieldProps),
  radio: (field) =>
    createSingleSelectionSchema(field as KirbyOptionsFieldProps),
  toggles: (field) =>
    createSingleSelectionSchema(field as KirbyOptionsFieldProps),

  // Multiple selection fields (all store arrays of strings)
  checkboxes: (field) =>
    createMultipleSelectionSchema(field as KirbyOptionsFieldProps),
  multiselect: (field) =>
    createMultipleSelectionSchema(field as KirbyOptionsFieldProps),
  tags: (field) =>
    createMultipleSelectionSchema(field as KirbyOptionsFieldProps),

  // Date/time fields
  date: (field) =>
    z
      .string()
      .describe(
        `"${field.label}", a date ${
          (field as KirbyDateFieldProps).time
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

  // Structure field
  structure: (field) => {
    const objectSchema = createNestedFieldsSchema(
      field as KirbyStructureFieldProps,
    );

    if (objectSchema) {
      return z
        .array(objectSchema)
        .describe(
          `"${field.label}", repeatable structured data, each containing the defined sub-fields with appropriate content`,
        );
    }

    // Fallback for structures without defined fields
    return z
      .array(z.record(z.string(), z.string()))
      .describe(
        `"${field.label}", repeatable structured data based on expected content structure`,
      );
  },

  // Object field
  object: (field) => {
    const objectSchema = createNestedFieldsSchema(
      field as KirbyObjectFieldProps,
    );

    if (objectSchema) {
      return objectSchema.describe(
        `"${field.label}", structured data containing the defined sub-fields with appropriate content`,
      );
    }

    // Fallback for objects without defined fields
    return z
      .record(z.string(), z.string())
      .describe(
        `"${field.label}", object data based on expected content structure`,
      );
  },

  // Entries field
  entries: (field) => {
    const _field = field as KirbyEntriesFieldProps;
    const innerField = _field.field;

    // Create a temporary field object for schema generation
    const tempField: KirbyFieldProps = {
      ...innerField,
      name: "entry",
      label: field.label || "Entry",
    };

    // Generate schema for the inner field type
    const innerFieldSchemaBuilder = FIELD_TYPE_TO_SCHEMA[innerField.type]!;
    const innerSchema = innerFieldSchemaBuilder(tempField);
    let arraySchema = z.array(innerSchema);

    if (_field.min != null) arraySchema = arraySchema.min(_field.min);
    if (_field.max != null) arraySchema = arraySchema.max(_field.max);

    return arraySchema.describe(
      `"${field.label}", multiple entries of ${innerField.type} values${
        _field.min != null || _field.max != null
          ? " within the defined count range"
          : ""
      }`,
    );
  },
};

/** Converts a Kirby field definition to a Zod schema */
export function fieldToZodSchema(field: KirbyFieldProps) {
  const schemaBuilder = FIELD_TYPE_TO_SCHEMA[field.type];

  if (!schemaBuilder) {
    throw new Error(`Unsupported field type: ${field.type}`);
  }

  let schema = schemaBuilder(field);

  // Handle required fields
  if (field.required === true) {
    const schemaType = schema._zod?.def?.type;

    // Required fields must have content
    if (schemaType === "string") {
      // Only add minimum validation if not already set
      if ((schema as z.ZodString).minLength == null) {
        schema = (schema as z.ZodString).min(1);
      }
    } else if (schemaType === "array") {
      // Only add minimum validation if not already set
      const hasMinCheck = (
        schema as z.ZodArray<z.ZodType>
      )._zod?.def?.checks?.some(
        (check) => check._zod?.def?.check === "min_length",
      );
      if (!hasMinCheck) {
        schema = (schema as z.ZodArray<z.ZodType>).min(1);
      }
    }
  } else {
    // Optional schema properties are not supported by OpenAI
    schema = schema.nullable();
  }

  return schema;
}

/** Creates a Zod object schema for fields that contain nested sub-fields (structure, object) */
function createNestedFieldsSchema(
  field: KirbyStructureFieldProps | KirbyObjectFieldProps,
) {
  if (typeof field.fields !== "object" || field.fields === null) return;

  const nestedContentSchema: Record<string, z.ZodType> = {};

  for (const [fieldName, subField] of Object.entries(field.fields)) {
    if (subField.disabled || subField.hidden) continue;
    if (EXCLUDED_FIELD_TYPES.has(subField.type)) continue;

    nestedContentSchema[fieldName] = fieldToZodSchema({
      ...subField,
      name: fieldName,
    });
  }

  return z.object(nestedContentSchema).strict();
}

/** Creates a Zod schema for text-like fields with minlength/maxlength support */
function createTextSchema(
  field: KirbyTextFieldProps | KirbyWriterFieldProps,
  description: string,
) {
  let schema = z.string();

  if (field.minlength != null) schema = schema.min(field.minlength);
  if (field.maxlength != null) schema = schema.max(field.maxlength);

  return schema.describe(description);
}

/** Creates a Zod schema for numeric fields (number, range) */
function createNumericSchema(
  field: KirbyNumberFieldProps | KirbyRangeFieldProps,
) {
  let schema = z.number();

  if (field.min != null) schema = schema.min(field.min);
  if (field.max != null) schema = schema.max(field.max);

  return schema.describe(
    `"${field.label}", a numeric value${
      field.min != null || field.max != null ? " within the defined range" : ""
    }`,
  );
}

/** Creates a Zod schema for single selection fields (select, radio, toggles) */
function createSingleSelectionSchema(field: KirbyOptionsFieldProps) {
  const values = (field.options ?? [])
    .map((option) => option.value)
    .filter((v): v is string => typeof v === "string" && Boolean(v));

  if (values.length > 0) {
    return z
      .enum(values)
      .describe(
        `"${field.label}", single selection value based on the predefined options`,
      );
  }

  return z.string().describe(`"${field.label}", single selection value`);
}

/** Creates a Zod schema for multiple selection fields (checkboxes, multiselect, tags) */
function createMultipleSelectionSchema(field: KirbyOptionsFieldProps) {
  const values = (field.options ?? [])
    .map((option) => option.value)
    .filter((v): v is string => typeof v === "string" && Boolean(v));

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
