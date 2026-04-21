import { describe, expect, it } from "vitest";
import { generateKirbyLayoutsSchema } from "../../../src/panel/schemas/layouts";
import { field, fieldset } from "../utils";

const textBlock = fieldset({
  type: "text",
  name: "Text Block",
  fields: {
    content: field({
      type: "writer",
      label: "Content",
      name: "content",
      required: true,
    }),
  },
});

describe("generateKirbyLayoutsSchema", () => {
  it("throws when no fieldsets are supplied", () => {
    expect(() => generateKirbyLayoutsSchema([])).toThrow(
      "No fieldsets available",
    );
  });

  it("parses a single-column full-width layout with a block", () => {
    const schema = generateKirbyLayoutsSchema([textBlock]);

    expect(() =>
      schema.parse({
        columns: [
          {
            width: "1/1",
            blocks: [{ type: "text", content: { content: "<p>Hi</p>" } }],
          },
        ],
      }),
    ).not.toThrow();
  });

  it("parses a multi-column layout declared via `layouts` config", () => {
    const schema = generateKirbyLayoutsSchema([textBlock], {
      layouts: [["1/1"], ["1/2", "1/2"]],
    });

    expect(() =>
      schema.parse({
        columns: [
          {
            width: "1/2",
            blocks: [{ type: "text", content: { content: "<p>left</p>" } }],
          },
          {
            width: "1/2",
            blocks: [{ type: "text", content: { content: "<p>right</p>" } }],
          },
        ],
      }),
    ).not.toThrow();
  });

  it("rejects columns whose `width` is not in the declared layouts", () => {
    const schema = generateKirbyLayoutsSchema([textBlock], {
      layouts: [["1/2", "1/2"]],
    });

    expect(() =>
      schema.parse({
        columns: [{ width: "1/3", blocks: [] }],
      }),
    ).toThrow();
  });

  it("rejects blocks whose `type` is not a known fieldset", () => {
    const schema = generateKirbyLayoutsSchema([textBlock]);

    expect(() =>
      schema.parse({
        columns: [
          {
            width: "1/1",
            blocks: [{ type: "nonexistent", content: {} }],
          },
        ],
      }),
    ).toThrow();
  });
});
