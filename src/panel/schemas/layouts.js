import { z } from "zod";
import { generateBlockSchema } from "./blocks";

/**
 * Extracts all unique layout widths from layouts array
 */
function extractLayoutWidths(layouts) {
  const widths = new Set();

  for (const layout of layouts) {
    for (const width of layout) {
      if (typeof width === "string" && width.trim()) {
        widths.add(width);
      }
    }
  }

  return [...widths];
}

/**
 * Generates a Zod schema for layout column
 */
function generateLayoutColumnSchema(fieldsets, layoutWidths) {
  const blockSchemas = fieldsets.map(generateBlockSchema).filter(Boolean);
  const blockUnion =
    blockSchemas.length > 1 ? z.union(blockSchemas) : blockSchemas[0];

  return z.object({
    width: z
      .enum(layoutWidths)
      .describe(`Column width fraction to use, e.g. "1/2"`),
    blocks: z
      .array(blockUnion)
      .describe("Array of blocks contained in this column"),
  });
}

/**
 * Generates a Zod schema for a single layout
 */
function generateLayoutSchema(fieldsets, layoutWidths) {
  const columnSchema = generateLayoutColumnSchema(fieldsets, layoutWidths);

  return z.object({
    columns: z
      .array(columnSchema)
      .min(1)
      .describe("Array of columns in this layout"),
  });
}

/**
 * Generates a complete Zod schema for Kirby layouts
 */
export function generateKirbyLayoutsSchema(fieldsets, fieldConfig = {}) {
  if (!fieldsets || fieldsets.length === 0) {
    throw new Error("No fieldsets available for layout schema generation");
  }

  const layouts = fieldConfig.layouts ?? [["1/1"]];
  const layoutWidths = extractLayoutWidths(layouts);
  const layoutSchema = generateLayoutSchema(fieldsets, layoutWidths);

  const layoutCombinations = layouts.map((layout) => `"${layout}"`).join(", ");

  return layoutSchema.describe(
    `Kirby layout with columns and blocks. Available layout combinations: ${layoutCombinations}. Use these exact column width combinations when creating layouts.`,
  );
}
