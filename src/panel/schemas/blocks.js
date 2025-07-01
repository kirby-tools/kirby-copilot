import { z } from "zod";
import { EXCLUDED_FIELD_TYPES, fieldToZodSchema } from "./fields";

/**
 * Generates a Zod schema for a single block type
 */
export function generateBlockSchema(fieldsets) {
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
 * Generates a Zod schema from a Kirby blocks fieldsets configuration
 */
export function generateKirbyBlocksSchema(fieldsets) {
  if (!Array.isArray(fieldsets) || fieldsets.length === 0) {
    throw new Error("Invalid fieldsets configuration");
  }

  const blockSchemas = fieldsets.map(generateBlockSchema).filter(Boolean);

  return z.union(blockSchemas).describe("Union of all Kirby block types");
}
