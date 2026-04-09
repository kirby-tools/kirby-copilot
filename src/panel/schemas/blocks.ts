import type { KirbyFieldset } from "../types";
import type { SchemaContext } from "./types";
import { z } from "zod";
import { EXCLUDED_FIELD_TYPES, fieldToZodSchema } from "./fields";

/** Generates a Zod schema for a single block type. */
export function generateBlockSchema(
  fieldset: KirbyFieldset,
  context?: SchemaContext,
) {
  const { name, type, description, fields } = fieldset;

  if (!fields || Object.keys(fields).length === 0) {
    return;
  }

  const contentSchema: Record<string, z.ZodType> = {};

  for (const field of Object.values(fields)) {
    if (field.disabled || field.hidden) continue;
    if (EXCLUDED_FIELD_TYPES.has(field.type)) continue;

    const fieldSchema = fieldToZodSchema(field, context);
    if (fieldSchema) contentSchema[field.name] = fieldSchema;
  }

  // Skip blocks where all fields were filtered out (unknown/excluded types)
  if (Object.keys(contentSchema).length === 0) {
    return;
  }

  const schemaDescription = description
    ? `Kirby block: ${name}. ${description}`
    : `Kirby block: ${name}`;

  return z
    .object({
      type: z.literal(type),
      content: z.object(contentSchema).strict(),
    })
    .strict()
    .describe(schemaDescription);
}

/** Generates a Zod schema from a Kirby blocks fieldsets configuration. */
export function generateKirbyBlocksSchema(fieldsets: KirbyFieldset[]) {
  if (!Array.isArray(fieldsets) || fieldsets.length === 0) {
    throw new Error("Invalid fieldsets configuration");
  }

  const context: SchemaContext = {
    fieldsets,
    // Context is omitted to prevent infinite recursion (self-referential blocks)
    // and to keep the generated JSON schema small for AI structured output
    generateBlockSchema: (fieldset) => generateBlockSchema(fieldset),
  };

  const blockSchemas = fieldsets
    .map((fieldset) => generateBlockSchema(fieldset, context))
    .filter((schema) => schema != null);

  if (blockSchemas.length === 0) {
    throw new Error(
      "No valid block schemas could be generated from the provided fieldsets",
    );
  }

  return z.union(blockSchemas).describe("Union of all Kirby block types");
}
