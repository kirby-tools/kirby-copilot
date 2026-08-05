import type { KirbyOption } from "kirby-types";
import { describe, expect, it } from "vitest";
import { fieldToZodSchema } from "../../../src/panel/schemas/fields";
import { assertSchema, field } from "../utils";

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
    ] as const)("accepts a string or null for a %s field", (type, label) => {
      const schema = assertSchema(fieldToZodSchema(field({ type, label, name: type })));
      expect(schema.safeParse("sample-value").success).toBe(true);
      expect(schema.safeParse(null).success).toBe(true);
    });

    it("enforces minlength/maxlength constraints", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "text",
          label: "Username",
          name: "username",
          minlength: 3,
          maxlength: 10,
        }),
      ));

      expect(() => schema.parse("ab")).toThrow();
      expect(() => schema.parse("a".repeat(11))).toThrow();
      expect(() => schema.parse("valid")).not.toThrow();
    });
  });

  describe("rich text fields", () => {
    it("accepts markup in both writer modes", () => {
      const blockSchema = assertSchema(fieldToZodSchema(
        field({
          type: "writer",
          label: "Content",
          name: "content",
          inline: false,
          counter: false,
        }),
      ));
      const inlineSchema = assertSchema(fieldToZodSchema(
        field({
          type: "writer",
          label: "Content",
          name: "content",
          inline: true,
          counter: false,
        }),
      ));

      expect(() => blockSchema.parse("<p>Block content</p>")).not.toThrow();
      expect(() =>
        inlineSchema.parse("Inline <strong>content</strong>"),
      ).not.toThrow();
    });

    it("accepts an HTML list string for a list field", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "list",
          label: "Items",
          name: "items",
        }),
      ));
      expect(() =>
        schema.parse("<ul><li>Item 1</li><li>Item 2</li></ul>"),
      ).not.toThrow();
    });
  });

  describe("number fields", () => {
    it("rejects non-numbers and enforces range bounds", () => {
      const numberSchema = assertSchema(fieldToZodSchema(
        field({
          type: "number",
          label: "Count",
          name: "count",
        }),
      ));
      const rangeSchema = assertSchema(fieldToZodSchema(
        field({
          type: "range",
          label: "Rating",
          name: "rating",
          min: 1,
          max: 5,
        }),
      ));

      expect(() => numberSchema.parse(42)).not.toThrow();
      expect(() => numberSchema.parse("not a number")).toThrow();
      expect(() => rangeSchema.parse(0)).toThrow();
      expect(() => rangeSchema.parse(6)).toThrow();
      expect(() => rangeSchema.parse(3)).not.toThrow();
    });
  });

  describe("boolean fields", () => {
    it("accepts booleans only for a toggle field", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({ type: "toggle", label: "Featured", name: "featured" }),
      ));

      expect(() => schema.parse(true)).not.toThrow();
      expect(() => schema.parse(false)).not.toThrow();
      expect(() => schema.parse("true")).toThrow();
    });
  });

  describe("selection fields", () => {
    const toOptions = (values: string[]): KirbyOption[] =>
      values.map((value) => ({
        value,
        text: value,
        disabled: false,
        icon: null,
        info: null,
      }));

    it.each([
      ["select", ["news", "blog", "event"]],
      ["radio", ["draft", "published"]],
      ["toggles", ["light", "dark"]],
    ] as const)("accepts only declared options for a %s field", (type, values) => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type,
          label: "Choice",
          name: "choice",
          options: toOptions([...values]),
        }),
      ));
      expect(() => schema.parse(values[0])).not.toThrow();
      expect(() => schema.parse("invalid")).toThrow();
    });

    it.each([
      ["checkboxes", ["tech", "design", "business"]],
      ["multiselect", ["cat1", "cat2", "cat3"]],
      ["tags", ["web", "mobile", "api"]],
    ] as const)(
      "accepts declared options and an empty list for a %s field",
      (type, values) => {
        const schema = assertSchema(fieldToZodSchema(
          field({
            type,
            label: "Choices",
            name: "choices",
            options: toOptions([...values]),
          }),
        ));
        expect(() => schema.parse([values[0], values[1]])).not.toThrow();
        expect(() => schema.parse(["invalid"])).toThrow();
        expect(() => schema.parse([])).not.toThrow();
      },
    );
  });

  describe("date/time fields", () => {
    it("accepts the matching format for date, datetime, and time fields", () => {
      const dateSchema = assertSchema(fieldToZodSchema(
        field({
          type: "date",
          label: "Published",
          name: "published",
        }),
      ));
      const dateTimeSchema = assertSchema(fieldToZodSchema(
        field({
          type: "date",
          label: "Published",
          name: "published",
          time: true,
        }),
      ));
      const timeSchema = assertSchema(fieldToZodSchema(
        field({
          type: "time",
          label: "Start",
          name: "start",
        }),
      ));

      expect(() => dateSchema.parse("2023-12-25")).not.toThrow();
      expect(() => dateTimeSchema.parse("2023-12-25 14:30:00")).not.toThrow();
      expect(() => timeSchema.parse("14:30:00")).not.toThrow();
    });
  });

  describe("other fields", () => {
    it("accepts hex colors and page or external links", () => {
      const colorSchema = assertSchema(fieldToZodSchema(
        field({
          type: "color",
          label: "Theme",
          name: "theme",
        }),
      ));
      const linkSchema = assertSchema(fieldToZodSchema(
        field({
          type: "link",
          label: "Related",
          name: "related",
        }),
      ));

      expect(() => colorSchema.parse("#ff0000")).not.toThrow();
      expect(() => linkSchema.parse("page://abc123")).not.toThrow();
      expect(() => linkSchema.parse("https://example.com")).not.toThrow();
    });
  });

  describe("complex fields", () => {
    it("validates structure rows and accepts any row without field definitions", () => {
      const withFields = assertSchema(fieldToZodSchema(
        field({
          type: "structure",
          label: "Items",
          name: "items",
          fields: {
            title: field({ type: "text", label: "Title", name: "title" }),
            description: field({
              type: "textarea",
              label: "Desc",
              name: "description",
            }),
          },
        }),
      ));
      const withoutFields = assertSchema(fieldToZodSchema(
        field({
          type: "structure",
          label: "Items",
          name: "items",
          // Intentionally omit fields to test fallback.
        }) as any,
      ));

      expect(() =>
        withFields.parse([{ title: "Item", description: "Desc" }]),
      ).not.toThrow();
      expect(() => withoutFields.parse([{ custom: "data" }])).not.toThrow();
    });

    it("validates object properties and accepts any object without field definitions", () => {
      const withFields = assertSchema(fieldToZodSchema(
        field({
          type: "object",
          label: "Settings",
          name: "settings",
          fields: {
            title: field({ type: "text", label: "Title", name: "title" }),
            enabled: field({
              type: "toggle",
              label: "Enabled",
              name: "enabled",
            }),
          },
        }),
      ));
      const withoutFields = assertSchema(fieldToZodSchema(
        field({
          type: "object",
          label: "Data",
          name: "data",
          // Intentionally omit fields to test fallback.
        }) as any,
      ));

      expect(() =>
        withFields.parse({ title: "Test", enabled: true }),
      ).not.toThrow();
      expect(() => withoutFields.parse({ custom: "value" })).not.toThrow();
    });

    it("enforces min and max on an entries field", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "entries",
          label: "Tags",
          name: "tags",
          min: 2,
          max: 4,
          field: field({ type: "text", name: "entry", label: "Entry" }),
        }),
      ));

      expect(() => schema.parse(["tag1"])).toThrow();
      expect(() => schema.parse(["t1", "t2", "t3", "t4", "t5"])).toThrow();
      expect(() => schema.parse(["tag1", "tag2", "tag3"])).not.toThrow();
    });
  });

  describe("required field handling", () => {
    it("rejects empty strings when required", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "text",
          label: "Title",
          name: "title",
          required: true,
        }),
      ));

      expect(() => schema.parse("")).toThrow();
      expect(() => schema.parse("Valid")).not.toThrow();
    });

    it("preserves existing minlength for required string fields", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "text",
          label: "Username",
          name: "username",
          minlength: 3,
          required: true,
        }),
      ));

      // `minlength=3` should take precedence, not `min(1)`.
      expect(() => schema.parse("ab")).toThrow();
      expect(() => schema.parse("abc")).not.toThrow();
    });

    it("adds min(1) for required array fields without existing min", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "tags",
          label: "Tags",
          name: "tags",
          required: true,
        }),
      ));

      expect(() => schema.parse([])).toThrow();
      expect(() => schema.parse(["tag1"])).not.toThrow();
    });

    it("preserves existing min for required array fields", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "entries",
          label: "Items",
          name: "items",
          min: 2,
          required: true,
          field: field({ type: "text", name: "entry", label: "Entry" }),
        }),
      ));

      // `min=2` should take precedence, not `min(1)`.
      expect(() => schema.parse(["single"])).toThrow();
      expect(() => schema.parse(["item1", "item2"])).not.toThrow();
    });

    it("accepts zero and false but not null for required number and toggle fields", () => {
      const numberSchema = assertSchema(fieldToZodSchema(
        field({
          type: "number",
          label: "Count",
          name: "count",
          required: true,
        }),
      ));
      const toggleSchema = assertSchema(fieldToZodSchema(
        field({
          type: "toggle",
          label: "Active",
          name: "active",
          required: true,
        }),
      ));

      // Required numbers/booleans don't get `min(1)`, they just aren't nullable.
      expect(() => numberSchema.parse(0)).not.toThrow();
      expect(() => numberSchema.parse(null)).toThrow();
      expect(() => toggleSchema.parse(false)).not.toThrow();
      expect(() => toggleSchema.parse(null)).toThrow();
    });

    it("rejects null for a required select field", () => {
      const toOptions = (values: string[]): KirbyOption[] =>
        values.map((value) => ({
          value,
          text: value,
          disabled: false,
          icon: null,
          info: null,
        }));

      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "select",
          label: "Status",
          name: "status",
          options: toOptions(["draft", "published"]),
          required: true,
        }),
      ));

      expect(() => schema.parse("draft")).not.toThrow();
      expect(() => schema.parse(null)).toThrow();
    });

    it("makes non-required fields nullable", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "text",
          label: "Description",
          name: "description",
          required: false,
        }),
      ));

      expect(schema.safeParse(null).success).toBe(true);
      expect(() => schema.parse(null)).not.toThrow();
    });
  });

  describe("unknown sub-field types in nested fields", () => {
    it("skips unknown sub-field types in structure fields", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "structure",
          label: "Items",
          name: "items",
          fields: {
            title: field({ type: "text", label: "Title", name: "title" }),
            custom: field({ type: "fancy-widget", label: "Custom", name: "custom" }),
          },
        }),
      ));

      expect(() => schema.parse([{ title: "Item" }])).not.toThrow();
    });

    it("skips unknown sub-field types in object fields", () => {
      const schema = assertSchema(fieldToZodSchema(
        field({
          type: "object",
          label: "Settings",
          name: "settings",
          fields: {
            title: field({ type: "text", label: "Title", name: "title" }),
            custom: field({ type: "fancy-widget", label: "Custom", name: "custom" }),
          },
        }),
      ));

      expect(() => schema.parse({ title: "Test" })).not.toThrow();
    });
  });

  describe("unknown field types", () => {
    it("returns undefined for unknown field types instead of throwing", () => {
      const result = fieldToZodSchema(
        field({ type: "fancy-widget", label: "Custom", name: "custom" }),
      );
      expect(result).toBeUndefined();
    });
  });

});
