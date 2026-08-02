import { beforeEach, describe, expect, it, vi } from "vitest";

const get = vi.fn();

vi.mock("kirbyuse", () => ({
  registerPluginAssets: vi.fn(),
}));

beforeEach(() => {
  vi.resetModules();
  get.mockReset();
  (globalThis as any).window = { panel: { api: { get } } };
});

describe("usePluginContext", () => {
  it("requests the context once and serves the cached response afterwards", async () => {
    get.mockResolvedValue({ config: {}, assets: [] });
    const { usePluginContext } = await import(
      "../../../src/panel/composables/plugin"
    );

    const [first, second] = await Promise.all([
      usePluginContext(),
      usePluginContext(),
    ]);
    await usePluginContext();

    expect(get).toHaveBeenCalledTimes(1);
    expect(first).toBe(second);
  });

  it("retries after a failed request instead of caching the rejection", async () => {
    get.mockRejectedValueOnce(new Error('Unknown provider "banana"'));
    get.mockResolvedValueOnce({ config: {}, assets: [] });
    const { usePluginContext } = await import(
      "../../../src/panel/composables/plugin"
    );

    await expect(usePluginContext()).rejects.toThrow("banana");

    expect(await usePluginContext()).toEqual({ config: {}, assets: [] });
  });
});
