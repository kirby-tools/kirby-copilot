import type { KirbyLayoutFieldProps } from "kirby-types";
import type { KirbyFieldset } from "../types";
import type { SchemaContext } from "./types";
import { z } from "zod";
import { generateBlockSchema } from "./blocks";

export function generateKirbyLayoutsSchema(
  fieldsets: KirbyFieldset[],
  fieldConfig: Partial<KirbyLayoutFieldProps> = {},
) {
  if (!fieldsets || fieldsets.length === 0) {
    throw new Error("No fieldsets available for layout schema generation");
  }

  const layouts = fieldConfig.layouts ?? [["1/1"]];
  const layoutWidths = extractLayoutWidths(layouts);

  const context: SchemaContext = {
    fieldsets,
    // Context is omitted to prevent infinite recursion (self-referential blocks)
    // and to keep the generated JSON schema small for AI structured output
    generateBlockSchema: (fieldset) => generateBlockSchema(fieldset),
  };

  const layoutSchema = generateLayoutSchema(fieldsets, layoutWidths, context);

  const layoutCombinations = layouts.map((layout) => `"${layout}"`).join(", ");

  return layoutSchema.describe(
    `Kirby layout with columns and blocks. Available layout combinations: ${layoutCombinations}. Use these exact column width combinations when creating layouts.`,
  );
}

function extractLayoutWidths(layouts: KirbyLayoutFieldProps["layouts"]) {
  const widths = new Set<string>();

  for (const layout of layouts) {
    for (const width of layout) {
      if (typeof width === "string" && width.trim()) {
        widths.add(width);
      }
    }
  }

  return [...widths];
}

function generateLayoutSchema(
  fieldsets: KirbyFieldset[],
  layoutWidths: string[],
  context: SchemaContext,
) {
  const columnSchema = generateLayoutColumnSchema(
    fieldsets,
    layoutWidths,
    context,
  );

  return z
    .object({
      columns: z
        .array(columnSchema)
        .min(1)
        .describe("Array of columns in this layout"),
    })
    .strict();
}

function generateLayoutColumnSchema(
  fieldsets: KirbyFieldset[],
  layoutWidths: string[],
  context: SchemaContext,
) {
  const blockSchemas = fieldsets
    .map((fieldset) => generateBlockSchema(fieldset, context))
    .filter((schema) => schema != null);

  const blockUnion =
    blockSchemas.length > 1 ? z.union(blockSchemas) : blockSchemas[0]!;

  return z
    .object({
      width: z
        .enum(layoutWidths)
        .describe(`Column width fraction to use, e.g. "1/2"`),
      blocks: z
        .array(blockUnion)
        .describe("Array of blocks contained in this column"),
    })
    .strict();
}
