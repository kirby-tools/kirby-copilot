import { describe, expect, it } from "vitest";
import { z } from "zod";
import { generateKirbyBlocksSchema } from "../../src/panel/schemas/blocks";

describe("generateKirbyBlocksSchema", () => {
  // Basic block configurations for testing
  const basicBlocksConfig = [
    {
      type: "text",
      name: "Text Block",
      fields: {
        content: {
          type: "writer",
          label: "Content",
          name: "content",
          required: false,
        },
      },
    },
    {
      type: "heading",
      name: "Heading Block",
      fields: {
        level: {
          type: "select",
          label: "Level",
          name: "level",
          options: ["h1", "h2", "h3"],
          required: true,
        },
        text: {
          type: "text",
          label: "Text",
          name: "text",
          required: true,
        },
      },
    },
  ];

  describe("schema generation", () => {
    it("should generate a valid Zod union schema", () => {
      const schema = generateKirbyBlocksSchema(basicBlocksConfig);

      expect(schema).toBeInstanceOf(z.ZodUnion);
      expect(schema.description).toBe("Union of all Kirby block types");
    });

    it("should throw error for invalid input", () => {
      expect(() => generateKirbyBlocksSchema([])).toThrow(
        "Invalid fieldsets configuration",
      );
      expect(() => generateKirbyBlocksSchema(null)).toThrow(
        "Invalid fieldsets configuration",
      );
      expect(() => generateKirbyBlocksSchema("invalid")).toThrow(
        "Invalid fieldsets configuration",
      );
    });

    it("should filter out blocks with no fields and reject invalid types", () => {
      const configWithEmptyBlock = [
        ...basicBlocksConfig,
        { type: "empty", name: "Empty", fields: {} },
        { type: "no-fields", name: "No Fields" },
      ];

      const schema = generateKirbyBlocksSchema(configWithEmptyBlock);

      // Valid blocks still work
      expect(() =>
        schema.parse({
          type: "text",
          content: { content: "<p>Test</p>" },
        }),
      ).not.toThrow();

      // Empty/no-fields blocks and nonexistent types are rejected
      expect(() => schema.parse({ type: "empty", content: {} })).toThrow();
      expect(() =>
        schema.parse({ type: "nonexistent", content: {} }),
      ).toThrow();
    });
  });

  describe("block validation", () => {
    it("should validate required fields", () => {
      const schema = generateKirbyBlocksSchema(basicBlocksConfig);

      // Should reject missing required field
      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h1" }, // Missing required 'text' field
        }),
      ).toThrow();

      // Should accept block with all required fields
      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h1", text: "Valid heading" },
        }),
      ).not.toThrow();
    });

    it("should validate field types", () => {
      const schema = generateKirbyBlocksSchema(basicBlocksConfig);

      // Should reject invalid enum value
      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h7", text: "Invalid level" }, // h7 not in options
        }),
      ).toThrow();

      // Should accept valid enum value
      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h2", text: "Valid level" },
        }),
      ).not.toThrow();
    });
  });

  describe("excluded field types", () => {
    const excludedFieldsConfig = [
      {
        type: "custom",
        name: "Custom Block",
        fields: {
          // Excluded fields (should not appear in schema)
          separator: { type: "line", label: "Separator", name: "separator" },
          info: { type: "info", label: "Info", name: "info" },
          spacing: { type: "gap", label: "Spacing", name: "spacing" },
          title: { type: "headline", label: "Title", name: "title" },
          images: { type: "files", label: "Images", name: "images" },

          // Included fields
          content: {
            type: "text",
            label: "Content",
            name: "content",
            required: true,
          },
        },
      },
    ];

    it("should exclude utility field types from schema", () => {
      const schema = generateKirbyBlocksSchema(excludedFieldsConfig);

      // Should validate block with only included fields
      expect(() =>
        schema.parse({
          type: "custom",
          content: { content: "Valid content" },
        }),
      ).not.toThrow();

      // Should fail when missing required included field
      expect(() =>
        schema.parse({
          type: "custom",
          content: {},
        }),
      ).toThrow();
    });
  });

  describe("complex field integration", () => {
    const complexBlocksConfig = [
      {
        type: "testimonials",
        name: "Testimonials Block",
        fields: {
          items: {
            type: "structure",
            label: "Testimonials",
            name: "items",
            fields: {
              name: {
                type: "text",
                label: "Name",
                name: "name",
                required: true,
              },
              quote: {
                type: "textarea",
                label: "Quote",
                name: "quote",
                required: true,
              },
              rating: {
                type: "range",
                label: "Rating",
                name: "rating",
                min: 1,
                max: 5,
              },
            },
          },
        },
      },
      {
        type: "card",
        name: "Card Block",
        fields: {
          settings: {
            type: "object",
            label: "Card Settings",
            name: "settings",
            fields: {
              title: {
                type: "text",
                label: "Title",
                name: "title",
                required: true,
              },
              priority: {
                type: "number",
                label: "Priority",
                name: "priority",
                min: 1,
                max: 10,
              },
            },
          },
          tags: {
            type: "entries",
            label: "Tags",
            name: "tags",
            min: 1,
            max: 5,
            field: { field: { type: "text" } },
          },
        },
      },
    ];

    it("should handle structure, object and entries fields in blocks", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      // Structure field
      expect(() =>
        schema.parse({
          type: "testimonials",
          content: { items: [{ name: "John", quote: "Great!", rating: 5 }] },
        }),
      ).not.toThrow();

      // Object and entries fields
      expect(() =>
        schema.parse({
          type: "card",
          content: {
            settings: { title: "Card Title", priority: null },
            tags: ["web", "design"],
          },
        }),
      ).not.toThrow();
    });

    it("should validate complex field constraints", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      // Structure item missing required field
      expect(() =>
        schema.parse({
          type: "testimonials",
          content: { items: [{ quote: "Missing name", rating: 5 }] },
        }),
      ).toThrow();

      // Object missing required field
      expect(() =>
        schema.parse({
          type: "card",
          content: { settings: { priority: 5 }, tags: ["tag"] },
        }),
      ).toThrow();

      // Entries below minimum
      expect(() =>
        schema.parse({
          type: "card",
          content: { settings: { title: "Card" }, tags: [] },
        }),
      ).toThrow();
    });
  });

  describe("writer field modes", () => {
    const writerFieldConfig = [
      {
        type: "content",
        name: "Content Block",
        fields: {
          blockContent: {
            type: "writer",
            label: "Block Content",
            name: "blockContent",
            inline: false,
          },
          inlineContent: {
            type: "writer",
            label: "Inline Content",
            name: "inlineContent",
            inline: true,
          },
        },
      },
    ];

    it("should handle both inline and block writer fields", () => {
      const schema = generateKirbyBlocksSchema(writerFieldConfig);

      // Both should accept string content
      expect(() =>
        schema.parse({
          type: "content",
          content: {
            blockContent: "<p>Block level content</p>",
            inlineContent: "Inline <strong>content</strong>",
          },
        }),
      ).not.toThrow();
    });
  });
});
