import type { KirbyAnyFieldProps, KirbyFieldProps } from "kirby-types";
import type { KirbyFieldset } from "../../src/panel/types";

/**
 * Helper to create a field definition with sensible defaults for testing.
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

/**
 * Helper to create a fieldset (block type) definition for testing.
 */
export function fieldset(
  partial: Partial<KirbyFieldset> & Pick<KirbyFieldset, "type" | "name">,
): KirbyFieldset {
  return {
    fields: {},
    ...partial,
  };
}
