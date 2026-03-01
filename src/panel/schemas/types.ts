import type { KirbyAnyFieldProps } from "kirby-types";
import type { z } from "zod";
import type { KirbyFieldset } from "../types";

export interface SchemaContext {
  fieldsets?: KirbyFieldset[];
  generateBlockSchema?: (fieldset: KirbyFieldset) => z.ZodType | undefined;
}

export type SchemaBuilder = (
  field: KirbyAnyFieldProps,
  context?: SchemaContext,
) => z.ZodType;
