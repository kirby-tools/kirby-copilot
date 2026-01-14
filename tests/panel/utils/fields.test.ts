import { describe, expect, it } from "vitest";
import { findFieldDefinition } from "../../../src/panel/utils/fields";
import { blocksField, field, structureField } from "../utils";

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

    it("finds a field with type filter", () => {
      const titleField = field({ type: "text", name: "title", label: "Title" });
      const result = findFieldDefinition(titleField, "title", "text");
      expect(result).toBe(titleField);
    });

    it("returns undefined when type filter does not match", () => {
      const titleField = field({ type: "text", name: "title", label: "Title" });
      const result = findFieldDefinition(titleField, "title", "textarea");
      expect(result).toBeUndefined();
    });
  });

  describe("array of fields", () => {
    it("finds a field in an array", () => {
      const fields = [
        field({ type: "text", name: "title", label: "Title" }),
        field({ type: "textarea", name: "description", label: "Description" }),
      ];
      const result = findFieldDefinition(fields, "description");
      expect(result).toBe(fields[1]);
    });

    it("returns undefined when field not found in array", () => {
      const fields = [
        field({ type: "text", name: "title", label: "Title" }),
        field({ type: "textarea", name: "description", label: "Description" }),
      ];
      const result = findFieldDefinition(fields, "content");
      expect(result).toBeUndefined();
    });

    it("returns first matching field in array", () => {
      const fields = [
        field({ type: "text", name: "name", label: "Name 1" }),
        field({ type: "text", name: "name", label: "Name 2" }),
      ];
      const result = findFieldDefinition(fields, "name");
      expect(result).toBe(fields[0]);
    });
  });

  describe("nested fields (structure/object)", () => {
    it("finds a field inside nested fields property", () => {
      const items = structureField("items", {
        name: field({ type: "text", name: "name", label: "Name" }),
        value: field({ type: "number", name: "value", label: "Value" }),
      });
      const result = findFieldDefinition(items, "name");
      expect(result?.name).toBe("name");
      expect(result?.type).toBe("text");
    });

    it("finds deeply nested fields", () => {
      const outer = structureField("outer", {
        inner: structureField("inner", {
          deep: field({ type: "text", name: "deep", label: "Deep" }),
        }),
      });
      const result = findFieldDefinition(outer, "deep");
      expect(result?.name).toBe("deep");
    });
  });

  describe("fieldsets with tabs (blocks/layouts)", () => {
    it("finds a field inside fieldsets > tabs > fields", () => {
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
            // No tabs property
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
                // No fields property
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

  describe("type filtering", () => {
    it("filters by type in nested structures", () => {
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
