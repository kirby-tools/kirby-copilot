import type {
  KirbyAnyFieldProps,
  KirbyBlocksFieldProps,
  KirbyFieldProps,
  KirbyFieldsetProps,
  KirbyLayoutFieldProps,
  KirbyObjectFieldProps,
  KirbyStructureFieldProps,
} from "kirby-types";
import type { z } from "zod";
import type { KirbyFieldset } from "../../src/panel/types";
import { expect } from "vitest";

export function assertSchema(schema: z.ZodType | undefined): z.ZodType {
  expect(schema).toBeDefined();
  return schema!;
}

/**
 * Creates a field definition with sensible defaults.
 */
export function field<T extends Partial<KirbyAnyFieldProps>>(
  partial: T & { type: string; name: string },
): KirbyFieldProps {
  return {
    autofocus: false,
    disabled: false,
    hidden: false,
    required: false,
    saveable: true,
    translate: true,
    width: "1/1",
    ...partial,
  } as KirbyFieldProps;
}

export function structureField(
  name: string,
  fields: Record<string, KirbyFieldProps>,
): KirbyStructureFieldProps {
  return field({
    type: "structure",
    name,
    fields,
  }) as unknown as KirbyStructureFieldProps;
}

export function objectField(
  name: string,
  fields: Record<string, KirbyFieldProps>,
): KirbyObjectFieldProps {
  return field({
    type: "object",
    name,
    fields,
  }) as unknown as KirbyObjectFieldProps;
}

export function blocksField(
  name: string,
  blockTypes: Record<string, Record<string, KirbyFieldProps>>,
): KirbyBlocksFieldProps {
  const fieldsets = {} as KirbyBlocksFieldProps["fieldsets"];
  for (const [blockType, fields] of Object.entries(blockTypes)) {
    fieldsets[blockType] = {
      tabs: {
        content: {
          name: "content",
          fields,
        },
      },
    } as unknown as KirbyFieldsetProps;
  }

  return field({
    type: "blocks",
    name,
    fieldsets,
  }) as unknown as KirbyBlocksFieldProps;
}

export function layoutField(
  name: string,
  blockTypes: Record<string, Record<string, KirbyFieldProps>>,
): KirbyLayoutFieldProps {
  const fieldsets = {} as KirbyLayoutFieldProps["fieldsets"];
  for (const [blockType, fields] of Object.entries(blockTypes)) {
    fieldsets[blockType] = {
      tabs: {
        content: {
          name: "content",
          fields,
        },
      },
    } as unknown as KirbyFieldsetProps;
  }

  return field({
    type: "layout",
    name,
    fieldsets,
  }) as unknown as KirbyLayoutFieldProps;
}

/**
 * Creates a fieldset (block type) definition.
 */
export function fieldset(
  partial: Partial<KirbyFieldset> & Pick<KirbyFieldset, "type" | "name">,
): KirbyFieldset {
  return {
    fields: {},
    ...partial,
  };
}
