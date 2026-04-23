import type { PromptTemplate } from "../../../src/panel/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { installStorageMocks } from "../helpers/mock-storage";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../helpers/mock-kirbyuse");
  return {
    ...baseKirbyuseMock(),
    usePanel: () => ({ user: { language: "en" } }),
  };
});

let idCounter = 0;
vi.mock("utilful", async () => {
  const actual = await vi.importActual<typeof import("utilful")>("utilful");
  return {
    ...actual,
    generateRandomId: () => `rand-${++idCounter}`,
  };
});

vi.spyOn(Date, "now").mockReturnValue(1_700_000_000_000);

const storage = installStorageMocks();

beforeEach(() => {
  storage.reset();
  idCounter = 0;
  vi.resetModules();
});

afterEach(() => {
  vi.clearAllMocks();
});

async function loadComposable() {
  const mod = await import("../../../src/panel/composables/templates");
  return mod.usePromptTemplates();
}

async function seedStorage(templates: PromptTemplate[] | unknown) {
  const { getHashedStorageKey } =
    await import("../../../src/panel/utils/shared");
  const key = getHashedStorageKey("templates", "test-host");
  storage.set(key, JSON.stringify(templates));
}

describe("initial state", () => {
  it("falls back to default templates for the user's language when storage is empty", async () => {
    const { templates } = await loadComposable();

    expect(templates.value.length).toBeGreaterThan(0);
    for (const template of templates.value) {
      expect(template).toMatchObject({
        id: expect.stringMatching(/^rand-/),
        label: expect.any(String),
        prompt: expect.any(String),
        createdAt: 1_700_000_000_000,
      });
    }
  });

  it("loads stored templates verbatim when storage has data", async () => {
    await seedStorage([
      {
        id: "stored-1",
        label: "Stored Template",
        prompt: "Do the thing",
        createdAt: 1_600_000_000_000,
      },
    ]);

    const { templates } = await loadComposable();

    expect(templates.value).toEqual([
      {
        id: "stored-1",
        label: "Stored Template",
        prompt: "Do the thing",
        createdAt: 1_600_000_000_000,
      },
    ]);
  });
});

describe("addTemplate", () => {
  beforeEach(async () => {
    await seedStorage([]);
  });

  it("prepends a new template with a generated id and current timestamp", async () => {
    const { addTemplate, templates } = await loadComposable();

    const added = addTemplate("My Label", "My prompt");

    expect(added).toMatchObject({
      id: "rand-1",
      label: "My Label",
      prompt: "My prompt",
      createdAt: 1_700_000_000_000,
    });
    expect(templates.value[0]).toEqual(added);
  });

  it("trims label and prompt before saving", async () => {
    const { addTemplate } = await loadComposable();

    const added = addTemplate("  Label  ", "  prompt  ");

    expect(added).toMatchObject({ label: "Label", prompt: "prompt" });
  });

  it.each([
    { field: "label", label: "   ", prompt: "prompt" },
    { field: "prompt", label: "label", prompt: "   " },
  ])("returns undefined and does not persist when $field is blank", async ({ label, prompt }) => {
    const { addTemplate, templates } = await loadComposable();

    expect(addTemplate(label, prompt)).toBeUndefined();
    expect(templates.value).toHaveLength(0);
  });

  it("enforces the 50-template limit by dropping the oldest", async () => {
    const { addTemplate, templates } = await loadComposable();

    for (let i = 0; i < 55; i++) {
      addTemplate(`label-${i}`, `prompt-${i}`);
    }

    expect(templates.value).toHaveLength(50);
    // Most recent add is at index 0
    expect(templates.value[0]?.label).toBe("label-54");
    // Oldest kept is 55 - 50 = 5
    expect(templates.value.at(-1)?.label).toBe("label-5");
  });
});

describe("updateTemplate", () => {
  it("merges updates into the existing template", async () => {
    await seedStorage([
      { id: "t-1", label: "Before", prompt: "Before prompt", createdAt: 1 },
    ]);

    const { updateTemplate, templates } = await loadComposable();

    expect(updateTemplate("t-1", { label: "After" })).toBe(true);
    expect(templates.value[0]).toMatchObject({
      id: "t-1",
      label: "After",
      prompt: "Before prompt",
    });
  });

  it("returns false and does not mutate when id is unknown", async () => {
    await seedStorage([{ id: "t-1", label: "A", prompt: "P", createdAt: 1 }]);

    const { updateTemplate, templates } = await loadComposable();
    const snapshot = JSON.parse(JSON.stringify(templates.value));

    expect(updateTemplate("missing", { label: "X" })).toBe(false);
    expect(templates.value).toEqual(snapshot);
  });
});

describe("deleteTemplate", () => {
  it("removes by id and persists", async () => {
    await seedStorage([
      { id: "t-1", label: "A", prompt: "P", createdAt: 1 },
      { id: "t-2", label: "B", prompt: "Q", createdAt: 2 },
    ]);

    const { deleteTemplate, templates } = await loadComposable();

    expect(deleteTemplate("t-1")).toBe(true);
    expect(templates.value.map((t) => t.id)).toEqual(["t-2"]);
  });

  it("returns false for an unknown id", async () => {
    await seedStorage([{ id: "t-1", label: "A", prompt: "P", createdAt: 1 }]);

    const { deleteTemplate } = await loadComposable();

    expect(deleteTemplate("missing")).toBe(false);
  });
});

describe("clearTemplates", () => {
  it("empties the user templates list", async () => {
    await seedStorage([
      { id: "t-1", label: "A", prompt: "P", createdAt: 1 },
      { id: "t-2", label: "B", prompt: "Q", createdAt: 2 },
    ]);

    const { clearTemplates, templates } = await loadComposable();

    clearTemplates();

    expect(templates.value).toEqual([]);
  });
});

describe("setTemplates", () => {
  beforeEach(async () => {
    await seedStorage([]);
  });

  it("imports inputs with trimmed label and prompt", async () => {
    const { setTemplates, templates } = await loadComposable();

    setTemplates([
      { label: "  A  ", prompt: "  pa  " },
      { label: "B", prompt: "pb" },
    ]);

    expect(templates.value).toEqual([
      expect.objectContaining({ label: "A", prompt: "pa" }),
      expect.objectContaining({ label: "B", prompt: "pb" }),
    ]);
  });

  it("skips entries with empty label or prompt (after trim)", async () => {
    const { setTemplates, templates } = await loadComposable();

    setTemplates([
      { label: "", prompt: "p" },
      { label: "   ", prompt: "p" },
      { label: "A", prompt: "" },
      { label: "A", prompt: "   " },
      { label: "keep", prompt: "keep" },
    ]);

    expect(templates.value).toHaveLength(1);
    expect(templates.value[0]).toMatchObject({ label: "keep", prompt: "keep" });
  });

  it("matches existing entries by label first, preserving id and createdAt", async () => {
    await seedStorage([
      {
        id: "existing-1",
        label: "Summarize",
        prompt: "Old prompt",
        createdAt: 1_600_000_000_000,
      },
    ]);

    const { setTemplates, templates } = await loadComposable();

    setTemplates([{ label: "Summarize", prompt: "New prompt" }]);

    expect(templates.value[0]).toEqual({
      id: "existing-1",
      label: "Summarize",
      prompt: "New prompt",
      createdAt: 1_600_000_000_000,
    });
  });

  it("falls back to matching by prompt when no label match is found", async () => {
    await seedStorage([
      {
        id: "existing-1",
        label: "Old Label",
        prompt: "Stable prompt",
        createdAt: 1_600_000_000_000,
      },
    ]);

    const { setTemplates, templates } = await loadComposable();

    setTemplates([{ label: "Renamed", prompt: "Stable prompt" }]);

    expect(templates.value[0]).toMatchObject({
      id: "existing-1",
      label: "Renamed",
      prompt: "Stable prompt",
      createdAt: 1_600_000_000_000,
    });
  });

  it("assigns fresh ids to entries without a match", async () => {
    const { setTemplates, templates } = await loadComposable();

    setTemplates([{ label: "New", prompt: "p" }]);

    expect(templates.value[0]?.id).toMatch(/^rand-/);
    expect(templates.value[0]?.createdAt).toBe(1_700_000_000_000);
  });

  it("truncates imports to the 50-template limit", async () => {
    const { setTemplates, templates } = await loadComposable();

    setTemplates(
      Array.from({ length: 60 }, (_, i) => ({
        label: `L${i}`,
        prompt: `P${i}`,
      })),
    );

    expect(templates.value).toHaveLength(50);
    expect(templates.value[0]?.label).toBe("L0");
  });
});

describe("setConfigTemplates", () => {
  it("marks config templates readOnly and assigns config-* ids", async () => {
    const { setConfigTemplates, allTemplates } = await loadComposable();

    setConfigTemplates([
      { label: "From config", prompt: "p" },
      { label: "Another", prompt: "q" },
    ]);

    const configOnly = allTemplates.value.filter((t) => t.readOnly);
    expect(configOnly.map((t) => t.id)).toEqual(["config-0", "config-1"]);
  });

  it("clears default templates on first run when config templates are provided", async () => {
    // Storage is empty → initial state = defaults
    const { templates, setConfigTemplates } = await loadComposable();
    expect(templates.value.length).toBeGreaterThan(0);

    setConfigTemplates([{ label: "Config", prompt: "p" }]);

    expect(templates.value).toEqual([]);
  });

  it("preserves user-customized templates when config templates are provided", async () => {
    await seedStorage([
      { id: "user-1", label: "Mine", prompt: "P", createdAt: 1 },
    ]);

    const { templates, setConfigTemplates } = await loadComposable();

    setConfigTemplates([{ label: "Config", prompt: "p" }]);

    expect(templates.value).toHaveLength(1);
    expect(templates.value[0]?.id).toBe("user-1");
  });
});

describe("allTemplates", () => {
  it("emits config templates before user templates", async () => {
    await seedStorage([
      { id: "user-1", label: "User", prompt: "P", createdAt: 1 },
    ]);

    const { setConfigTemplates, allTemplates } = await loadComposable();
    setConfigTemplates([{ label: "Config", prompt: "p" }]);

    expect(allTemplates.value.map((t) => t.label)).toEqual(["Config", "User"]);
  });
});

describe("getTemplate", () => {
  it("finds a user template by id", async () => {
    await seedStorage([
      { id: "user-1", label: "Mine", prompt: "P", createdAt: 1 },
    ]);

    const { getTemplate } = await loadComposable();

    expect(getTemplate("user-1")?.label).toBe("Mine");
  });

  it("finds a config template by id", async () => {
    const { setConfigTemplates, getTemplate } = await loadComposable();
    setConfigTemplates([{ label: "Config", prompt: "p" }]);

    expect(getTemplate("config-0")?.label).toBe("Config");
  });

  it("returns undefined for an unknown id", async () => {
    const { getTemplate } = await loadComposable();

    expect(getTemplate("nope")).toBeUndefined();
  });
});
