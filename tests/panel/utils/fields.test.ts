import { describe, expect, it } from "vitest";
import {
  findFieldDefinition,
  getResponseFormat,
} from "../../../src/panel/utils/fields";
import { blocksField, field, structureField } from "../utils";

describe("getResponseFormat", () => {
  it.each([
    { fieldType: "list", expected: "rich-text" },
    { fieldType: "writer", expected: "rich-text" },
    { fieldType: "textarea", expected: "markdown" },
    { fieldType: "markdown", expected: "markdown" },
  ] as const)("maps `$fieldType` to `$expected`", ({ fieldType, expected }) => {
    expect(getResponseFormat(fieldType)).toBe(expected);
  });

  it("falls back to `text` for unmapped field types", () => {
    expect(getResponseFormat("text")).toBe("text");
    expect(getResponseFormat("unknown-field-type")).toBe("text");
  });
});

describe("findFieldDefinition", () => {
  describe("direct field matching", () => {
    it("finds a field by name", () => {
      const titleField = field({ type: "text", name: "title", label: "Title" });
      const result = findFieldDefinition(titleField, "title");
      expect(result).toBe(titleField);
    });

    it("returns undefined when field name does not match", () => {
      const titleField = field({ type: "text", name: "title", label: "Title" });
      const result = findFieldDefinition(titleField, "description");
      expect(result).toBeUndefined();
    });
  });

  describe("array of fields", () => {
    it("finds the field matching the name", () => {
      const fields = [
        field({ type: "text", name: "title", label: "Title" }),
        field({ type: "textarea", name: "description", label: "Description" }),
      ];
      const result = findFieldDefinition(fields, "description");
      expect(result).toBe(fields[1]);
    });

    it("returns undefined when no field matches the name", () => {
      const fields = [
        field({ type: "text", name: "title", label: "Title" }),
        field({ type: "textarea", name: "description", label: "Description" }),
      ];
      const result = findFieldDefinition(fields, "content");
      expect(result).toBeUndefined();
    });
  });

  describe("structure fields", () => {
    it("finds a field two levels deep", () => {
      const outer = structureField("outer", {
        inner: structureField("inner", {
          deep: field({ type: "text", name: "deep", label: "Deep" }),
        }),
      });
      const result = findFieldDefinition(outer, "deep");
      expect(result?.name).toBe("deep");
    });
  });

  describe("blocks fields", () => {
    it("finds a field in a fieldset tab", () => {
      const blocks = blocksField("blocks", {
        text: {
          content: field({ type: "writer", name: "content", label: "Content" }),
        },
      });

      const result = findFieldDefinition(blocks, "content");
      expect(result?.name).toBe("content");
      expect(result?.type).toBe("writer");
    });

    it("finds fields across multiple fieldsets", () => {
      const blocks = blocksField("blocks", {
        text: {
          text: field({ type: "writer", name: "text", label: "Text" }),
        },
        heading: {
          level: field({ type: "select", name: "level", label: "Level" }),
        },
      });

      const result = findFieldDefinition(blocks, "level");
      expect(result?.name).toBe("level");
      expect(result?.type).toBe("select");
    });

    it("skips fieldsets without tabs", () => {
      const blocksField = {
        type: "blocks",
        name: "blocks",
        fieldsets: {
          empty: {
            name: "Empty",
            // No `tabs` property.
          },
          text: {
            name: "Text",
            tabs: {
              content: {
                fields: {
                  content: field({
                    type: "writer",
                    name: "content",
                    label: "Content",
                  }),
                },
              },
            },
          },
        },
      } as any;

      const result = findFieldDefinition(blocksField, "content");
      expect(result?.name).toBe("content");
    });

    it("skips tabs without fields", () => {
      const blocksField = {
        type: "blocks",
        name: "blocks",
        fieldsets: {
          text: {
            name: "Text",
            tabs: {
              empty: {
                // No `fields` property.
              },
              content: {
                fields: {
                  content: field({
                    type: "writer",
                    name: "content",
                    label: "Content",
                  }),
                },
              },
            },
          },
        },
      } as any;

      const result = findFieldDefinition(blocksField, "content");
      expect(result?.name).toBe("content");
    });
  });

  describe("fieldType", () => {
    it("returns undefined when the name matches but the type does not", () => {
      const items = structureField("items", {
        title: field({ type: "text", name: "title", label: "Title" }),
        description: field({
          type: "textarea",
          name: "description",
          label: "Description",
        }),
      });

      const textResult = findFieldDefinition(items, "title", "text");
      expect(textResult?.type).toBe("text");

      const textareaResult = findFieldDefinition(items, "title", "textarea");
      expect(textareaResult).toBeUndefined();
    });
  });
});
