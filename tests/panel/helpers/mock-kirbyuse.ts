import { vi } from "vitest";

export function baseKirbyuseMock() {
  return {
    effectScope: () => ({ run: <T>(fn: () => T): T => fn() }),
    ref: <T>(value: T) => ({ value }),
    reactive: <T extends object>(value: T): T => value,
    computed: <T>(fn: () => T) => ({
      get value() {
        return fn();
      },
    }),
    createLogger: () => ({
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      debug: vi.fn(),
    }),
  };
}
