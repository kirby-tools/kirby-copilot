import { beforeEach, describe, expect, it, vi } from "vitest";
import { installStorageMocks } from "../helpers/mock-storage";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../helpers/mock-kirbyuse");
  return baseKirbyuseMock();
});

const storage = installStorageMocks();

beforeEach(() => {
  storage.reset();
  vi.resetModules();
});

async function loadComposable() {
  const mod = await import("../../../src/panel/composables/generation-history");
  return mod.useGenerationHistory();
}

async function seedStorage(entries: unknown) {
  const { getHashedStorageKey } =
    await import("../../../src/panel/utils/shared");
  const key = getHashedStorageKey("history", "test-host");
  storage.set(key, JSON.stringify(entries));
}

describe("useGenerationHistory", () => {
  describe("initial state", () => {
    it("starts empty when storage is untouched", async () => {
      const { history } = await loadComposable();
      expect(history.value).toEqual([]);
    });

    it("hydrates from storage when present", async () => {
      await seedStorage(["c", "b", "a"]);
      const { history } = await loadComposable();
      expect(history.value).toEqual(["c", "b", "a"]);
    });
  });

  describe("addToHistory", () => {
    it("prepends new entries", async () => {
      const { history, addToHistory } = await loadComposable();
      addToHistory("first");
      addToHistory("second");
      expect(history.value).toEqual(["second", "first"]);
    });

    it("trims and dedupes by moving an existing entry to the front", async () => {
      const { history, addToHistory } = await loadComposable();
      addToHistory("a");
      addToHistory("b");
      addToHistory("  a  ");
      expect(history.value).toEqual(["a", "b"]);
    });

    it.each([
      { label: "empty string", input: "" },
      { label: "whitespace only", input: "   \n  " },
      { label: "non-string", input: 42 as unknown as string },
    ])("ignores $label", async ({ input }) => {
      const { history, addToHistory } = await loadComposable();
      addToHistory(input);
      expect(history.value).toEqual([]);
    });

    it("caps the history at 50 entries", async () => {
      const { history, addToHistory } = await loadComposable();
      for (let i = 0; i < 55; i++) addToHistory(`entry-${i}`);

      expect(history.value).toHaveLength(50);
      expect(history.value[0]).toBe("entry-54");
      expect(history.value.at(-1)).toBe("entry-5");
    });

    it("resets currentIndex so ArrowUp re-starts at the freshest entry", async () => {
      const { addToHistory, navigateHistory, currentIndex } =
        await loadComposable();
      addToHistory("a");
      addToHistory("b");
      navigateHistory("up"); // currentIndex → 0
      navigateHistory("up"); // currentIndex → 1
      expect(currentIndex.value).toBe(1);

      addToHistory("c");
      expect(currentIndex.value).toBe(-1);
    });

    it("persists new entries to storage", async () => {
      const { addToHistory } = await loadComposable();
      addToHistory("persisted");

      const { getHashedStorageKey } =
        await import("../../../src/panel/utils/shared");
      const key = getHashedStorageKey("history", "test-host");
      expect(JSON.parse(storage.get(key)!)).toEqual(["persisted"]);
    });
  });

  describe("navigateHistory", () => {
    it("returns undefined on empty history", async () => {
      const { navigateHistory } = await loadComposable();
      expect(navigateHistory("up")).toBeUndefined();
      expect(navigateHistory("down")).toBeUndefined();
    });

    it("up walks from newest to oldest", async () => {
      await seedStorage(["c", "b", "a"]);
      const { navigateHistory } = await loadComposable();
      expect(navigateHistory("up")).toBe("c");
      expect(navigateHistory("up")).toBe("b");
      expect(navigateHistory("up")).toBe("a");
    });

    it("up returns undefined at the oldest entry", async () => {
      await seedStorage(["only"]);
      const { navigateHistory } = await loadComposable();
      navigateHistory("up");
      expect(navigateHistory("up")).toBeUndefined();
    });

    it("down walks back toward the newest entry", async () => {
      await seedStorage(["c", "b", "a"]);
      const { navigateHistory } = await loadComposable();
      navigateHistory("up");
      navigateHistory("up");
      expect(navigateHistory("down")).toBe("c");
    });

    it("down past the freshest entry returns lastPrompt and resets currentIndex", async () => {
      await seedStorage(["c", "b"]);
      const { navigateHistory, lastPrompt, currentIndex } =
        await loadComposable();
      lastPrompt.value = "in-progress";
      navigateHistory("up"); // index 0 = "c"
      expect(navigateHistory("down")).toBe("in-progress");
      expect(currentIndex.value).toBe(-1);
    });
  });

  describe("deleteEntry", () => {
    it("removes by value and persists", async () => {
      await seedStorage(["a", "b", "c"]);
      const { deleteEntry, history } = await loadComposable();

      expect(deleteEntry("b")).toBe(true);
      expect(history.value).toEqual(["a", "c"]);
    });

    it("returns false for unknown entries", async () => {
      await seedStorage(["a"]);
      const { deleteEntry } = await loadComposable();
      expect(deleteEntry("missing")).toBe(false);
    });
  });

  describe("clearHistory", () => {
    it("empties the list and resets currentIndex", async () => {
      await seedStorage(["a", "b"]);
      const { clearHistory, history, currentIndex, navigateHistory } =
        await loadComposable();
      navigateHistory("up");
      expect(currentIndex.value).toBe(0);

      clearHistory();
      expect(history.value).toEqual([]);
      expect(currentIndex.value).toBe(-1);
    });
  });

  describe("getRecentEntries", () => {
    it("returns up to `limit` most-recent entries", async () => {
      await seedStorage(["e", "d", "c", "b", "a"]);
      const { getRecentEntries } = await loadComposable();
      expect(getRecentEntries(3)).toEqual(["e", "d", "c"]);
    });
  });
});
