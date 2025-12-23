import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  EXCLUDED_FIELD_TYPES,
  fieldToZodSchema,
} from "../../src/panel/schemas/fields";

describe("fieldToZodSchema", () => {
  describe("text-like fields", () => {
    it.each([
      ["text", "Title"],
      ["textarea", "Description"],
      ["markdown", "Content"],
      ["email", "Email"],
      ["url", "URL"],
      ["tel", "Phone"],
      ["slug", "Slug"],
      ["password", "Password"],
    ])("should handle %s field", (type, label) => {
      const schema = fieldToZodSchema({ type, label, name: type });
      expect(schema).toBeInstanceOf(z.ZodNullable);
      expect(() => schema.parse("sample-value")).not.toThrow();
    });

    it("should enforce minlength/maxlength constraints", () => {
      const schema = fieldToZodSchema({
        type: "text",
        label: "Username",
        name: "username",
        minlength: 3,
        maxlength: 10,
      });

      expect(() => schema.parse("ab")).toThrow();
      expect(() => schema.parse("a".repeat(11))).toThrow();
      expect(() => schema.parse("valid")).not.toThrow();
    });
  });

  describe("rich text fields", () => {
    it("should handle writer field in block and inline modes", () => {
      const blockSchema = fieldToZodSchema({
        type: "writer",
        label: "Content",
        name: "content",
        inline: false,
      });
      const inlineSchema = fieldToZodSchema({
        type: "writer",
        label: "Content",
        name: "content",
        inline: true,
      });

      expect(() => blockSchema.parse("<p>Block content</p>")).not.toThrow();
      expect(() =>
        inlineSchema.parse("Inline <strong>content</strong>"),
      ).not.toThrow();
    });

    it("should handle list field", () => {
      const schema = fieldToZodSchema({
        type: "list",
        label: "Items",
        name: "items",
      });
      expect(() =>
        schema.parse("<ul><li>Item 1</li><li>Item 2</li></ul>"),
      ).not.toThrow();
    });
  });

  describe("number fields", () => {
    it("should handle number and range fields with constraints", () => {
      const numberSchema = fieldToZodSchema({
        type: "number",
        label: "Count",
        name: "count",
      });
      const rangeSchema = fieldToZodSchema({
        type: "range",
        label: "Rating",
        name: "rating",
        min: 1,
        max: 5,
      });

      expect(() => numberSchema.parse(42)).not.toThrow();
      expect(() => numberSchema.parse("not a number")).toThrow();
      expect(() => rangeSchema.parse(0)).toThrow();
      expect(() => rangeSchema.parse(6)).toThrow();
      expect(() => rangeSchema.parse(3)).not.toThrow();
    });
  });

  describe("boolean fields", () => {
    it("should handle toggle field", () => {
      const field = { type: "toggle", label: "Featured", name: "featured" };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse(true)).not.toThrow();
      expect(() => schema.parse(false)).not.toThrow();
      expect(() => schema.parse("true")).toThrow(); // String not allowed
    });
  });

  describe("selection fields", () => {
    it.each([
      ["select", ["news", "blog", "event"]],
      ["radio", [{ value: "draft" }, { value: "published" }]],
      ["toggles", ["light", "dark"]],
    ])("should handle %s field (single selection)", (type, options) => {
      const schema = fieldToZodSchema({
        type,
        label: "Choice",
        name: "choice",
        options,
      });
      const validValue =
        typeof options[0] === "string" ? options[0] : options[0].value;
      expect(() => schema.parse(validValue)).not.toThrow();
      expect(() => schema.parse("invalid")).toThrow();
    });

    it.each([
      ["checkboxes", ["tech", "design", "business"]],
      ["multiselect", ["cat1", "cat2", "cat3"]],
      ["tags", ["web", "mobile", "api"]],
    ])("should handle %s field (multiple selection)", (type, options) => {
      const schema = fieldToZodSchema({
        type,
        label: "Choices",
        name: "choices",
        options,
      });
      expect(() => schema.parse([options[0], options[1]])).not.toThrow();
      expect(() => schema.parse(["invalid"])).toThrow();
      expect(() => schema.parse([])).not.toThrow();
    });
  });

  describe("date/time fields", () => {
    it("should handle date field with and without time", () => {
      const dateSchema = fieldToZodSchema({
        type: "date",
        label: "Published",
        name: "published",
      });
      const dateTimeSchema = fieldToZodSchema({
        type: "date",
        label: "Published",
        name: "published",
        time: true,
      });
      const timeSchema = fieldToZodSchema({
        type: "time",
        label: "Start",
        name: "start",
      });

      expect(() => dateSchema.parse("2023-12-25")).not.toThrow();
      expect(() => dateTimeSchema.parse("2023-12-25 14:30:00")).not.toThrow();
      expect(() => timeSchema.parse("14:30:00")).not.toThrow();
    });
  });

  describe("other fields", () => {
    it("should handle color and link fields", () => {
      const colorSchema = fieldToZodSchema({
        type: "color",
        label: "Theme",
        name: "theme",
      });
      const linkSchema = fieldToZodSchema({
        type: "link",
        label: "Related",
        name: "related",
      });

      expect(() => colorSchema.parse("#ff0000")).not.toThrow();
      expect(() => linkSchema.parse("page://abc123")).not.toThrow();
      expect(() => linkSchema.parse("https://example.com")).not.toThrow();
    });
  });

  describe("complex fields", () => {
    it("should handle structure with and without defined fields", () => {
      const withFields = fieldToZodSchema({
        type: "structure",
        label: "Items",
        name: "items",
        fields: {
          title: { type: "text", label: "Title", name: "title" },
          description: { type: "textarea", label: "Desc", name: "description" },
        },
      });
      const withoutFields = fieldToZodSchema({
        type: "structure",
        label: "Items",
        name: "items",
      });

      expect(() =>
        withFields.parse([{ title: "Item", description: "Desc" }]),
      ).not.toThrow();
      expect(() => withoutFields.parse([{ custom: "data" }])).not.toThrow();
    });

    it("should handle object with and without defined fields", () => {
      const withFields = fieldToZodSchema({
        type: "object",
        label: "Settings",
        name: "settings",
        fields: {
          title: { type: "text", label: "Title", name: "title" },
          enabled: { type: "toggle", label: "Enabled", name: "enabled" },
        },
      });
      const withoutFields = fieldToZodSchema({
        type: "object",
        label: "Data",
        name: "data",
      });

      expect(() =>
        withFields.parse({ title: "Test", enabled: true }),
      ).not.toThrow();
      expect(() => withoutFields.parse({ custom: "value" })).not.toThrow();
    });

    it("should handle entries field with constraints", () => {
      const schema = fieldToZodSchema({
        type: "entries",
        label: "Tags",
        name: "tags",
        min: 2,
        max: 4,
        field: { field: { type: "text" } },
      });

      expect(() => schema.parse(["tag1"])).toThrow();
      expect(() => schema.parse(["t1", "t2", "t3", "t4", "t5"])).toThrow();
      expect(() => schema.parse(["tag1", "tag2", "tag3"])).not.toThrow();
    });
  });

  describe("required field handling", () => {
    it("should add min(1) for required string fields without existing minlength", () => {
      const schema = fieldToZodSchema({
        type: "text",
        label: "Title",
        name: "title",
        required: true,
      });

      expect(() => schema.parse("")).toThrow();
      expect(() => schema.parse("Valid")).not.toThrow();
    });

    it("should preserve existing minlength for required string fields", () => {
      const schema = fieldToZodSchema({
        type: "text",
        label: "Username",
        name: "username",
        minlength: 3,
        required: true,
      });

      // minlength=3 should take precedence, not min(1)
      expect(() => schema.parse("ab")).toThrow();
      expect(() => schema.parse("abc")).not.toThrow();
    });

    it("should add min(1) for required array fields without existing min", () => {
      const schema = fieldToZodSchema({
        type: "tags",
        label: "Tags",
        name: "tags",
        required: true,
      });

      expect(() => schema.parse([])).toThrow();
      expect(() => schema.parse(["tag1"])).not.toThrow();
    });

    it("should preserve existing min for required array fields", () => {
      const schema = fieldToZodSchema({
        type: "entries",
        label: "Items",
        name: "items",
        min: 2,
        required: true,
        field: { field: { type: "text" } },
      });

      // min=2 should take precedence, not min(1)
      expect(() => schema.parse(["single"])).toThrow();
      expect(() => schema.parse(["item1", "item2"])).not.toThrow();
    });

    it("should handle required number and boolean fields", () => {
      const numberSchema = fieldToZodSchema({
        type: "number",
        label: "Count",
        name: "count",
        required: true,
      });
      const toggleSchema = fieldToZodSchema({
        type: "toggle",
        label: "Active",
        name: "active",
        required: true,
      });

      // Required numbers/booleans don't get min(1), they just aren't nullable
      expect(() => numberSchema.parse(0)).not.toThrow();
      expect(() => numberSchema.parse(null)).toThrow();
      expect(() => toggleSchema.parse(false)).not.toThrow();
      expect(() => toggleSchema.parse(null)).toThrow();
    });

    it("should handle required enum fields", () => {
      const schema = fieldToZodSchema({
        type: "select",
        label: "Status",
        name: "status",
        options: ["draft", "published"],
        required: true,
      });

      expect(() => schema.parse("draft")).not.toThrow();
      expect(() => schema.parse(null)).toThrow();
    });

    it("should make non-required fields nullable", () => {
      const schema = fieldToZodSchema({
        type: "text",
        label: "Description",
        name: "description",
        required: false,
      });

      expect(schema.isNullable()).toBe(true);
      expect(() => schema.parse(null)).not.toThrow();
    });
  });

  describe("excluded field types", () => {
    it("should exclude UI elements and reference types (not layout)", () => {
      const excluded = Array.from(EXCLUDED_FIELD_TYPES);

      expect(excluded).toEqual(
        expect.arrayContaining([
          "files",
          "gap",
          "headline",
          "hidden",
          "info",
          "line",
          "pages",
          "users",
        ]),
      );
      // Layout is handled separately, not excluded
      expect(excluded).not.toContain("layout");
    });
  });
});
