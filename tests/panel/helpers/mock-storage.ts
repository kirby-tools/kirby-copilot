import { vi } from "vitest";

export function installStorageMocks(hostname = "test-host") {
  let storage: Record<string, string> = {};

  vi.stubGlobal("localStorage", {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => {
      storage[key] = String(value);
    },
    removeItem: (key: string) => {
      delete storage[key];
    },
    clear: () => {
      storage = {};
    },
  });
  vi.stubGlobal("window", { location: { hostname } });

  return {
    reset() {
      storage = {};
    },
    get(key: string): string | undefined {
      return storage[key];
    },
    set(key: string, value: string) {
      storage[key] = value;
    },
  };
}
