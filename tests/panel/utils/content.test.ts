import { describe, expect, it, vi } from "vitest";
import {
  createContentContext,
  createReferencePageContent,
} from "../../../src/panel/utils/content";

const mockCurrentContent = { value: {} as Record<string, unknown> };
const mockView = { title: "" };

vi.mock("kirbyuse", () => ({
  usePanel: () => ({ view: mockView }),
  useContent: () => ({ currentContent: mockCurrentContent }),
}));

function block(overrides: Record<string, unknown>) {
  return {
    id: "block-id",
    type: "text",
    isHidden: false,
    content: {},
    ...overrides,
  };
}

describe("createReferencePageContent", () => {
  it("includes the title as the first entry", () => {
    const result = createReferencePageContent({
      title: "Hello",
      content: { body: "world" },
    });
    expect(Object.keys(result)[0]).toBe("title");
    expect(result.title).toBe("Hello");
  });

  it.each([
    { label: "null", value: null },
    { label: "empty string", value: "" },
  ])("drops fields whose value is $label", ({ value }) => {
    const result = createReferencePageContent({
      title: "T",
      content: { body: "keep", headline: value, tagline: "also keep" },
    });
    expect(result).toEqual({ title: "T", body: "keep", tagline: "also keep" });
  });

  it("keeps primitive values verbatim", () => {
    const result = createReferencePageContent({
      title: "T",
      content: { count: 3, flag: false, body: "hi" },
    });
    expect(result).toEqual({ title: "T", count: 3, flag: false, body: "hi" });
  });

  it("strips `id` and `isHidden` from KirbyBlock arrays", () => {
    const result = createReferencePageContent({
      title: "T",
      content: {
        blocks: [
          block({ type: "text", content: { text: "A" } }),
          block({ type: "heading", content: { text: "B" } }),
        ],
      },
    });
    expect(result.blocks).toEqual([
      { type: "text", content: { text: "A" } },
      { type: "heading", content: { text: "B" } },
    ]);
  });

  it("leaves non-block arrays untouched", () => {
    const result = createReferencePageContent({
      title: "T",
      content: { tags: ["a", "b"] },
    });
    expect(result.tags).toEqual(["a", "b"]);
  });
});

describe("createContentContext", () => {
  it("merges currentContent with the panel view title", () => {
    mockCurrentContent.value = { body: "hello" };
    mockView.title = "My Page";

    const result = createContentContext();
    expect(result).toEqual({ body: "hello", title: "My Page" });
  });

  it("stringifies primitives as strings", () => {
    mockCurrentContent.value = { count: 3, flag: false };
    mockView.title = "T";

    const result = createContentContext();
    expect(result.count).toBe("3");
    expect(result.flag).toBe("false");
  });

  it("stringifies plain objects and non-block arrays as JSON with 2-space indent", () => {
    mockCurrentContent.value = {
      meta: { author: "jane" },
      tags: ["a", "b"],
    };
    mockView.title = "T";

    const result = createContentContext();
    expect(result.meta).toBe(JSON.stringify({ author: "jane" }, undefined, 2));
    expect(result.tags).toBe(JSON.stringify(["a", "b"], undefined, 2));
  });

  it("normalizes KirbyBlock arrays before JSON-stringifying", () => {
    mockCurrentContent.value = {
      blocks: [
        block({ type: "text", content: { text: "A" } }),
        block({ type: "heading", content: { text: "B" } }),
      ],
    };
    mockView.title = "T";

    const result = createContentContext();
    const parsed = JSON.parse(result.blocks!);
    expect(parsed).toEqual([
      { type: "text", content: { text: "A" } },
      { type: "heading", content: { text: "B" } },
    ]);
  });
});
