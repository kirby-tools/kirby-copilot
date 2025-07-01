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

    it("should filter out blocks with no fields", () => {
      const configWithEmptyBlock = [
        ...basicBlocksConfig,
        { type: "empty", name: "Empty", fields: {} },
        { type: "no-fields", name: "No Fields" },
      ];

      const schema = generateKirbyBlocksSchema(configWithEmptyBlock);

      // Should still parse valid blocks
      expect(() =>
        schema.parse({
          type: "text",
          content: { content: "<p>Test</p>" },
        }),
      ).not.toThrow();

      // Should reject invalid block types
      expect(() =>
        schema.parse({
          type: "empty",
          content: {},
        }),
      ).toThrow();
    });

    it("should create schemas for all valid blocks", () => {
      const schema = generateKirbyBlocksSchema(basicBlocksConfig);

      // Should accept valid text block
      expect(() =>
        schema.parse({
          type: "text",
          content: { content: "<p>Some content</p>" },
        }),
      ).not.toThrow();

      // Should accept valid heading block
      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h1", text: "Heading text" },
        }),
      ).not.toThrow();

      // Should reject invalid block type
      expect(() =>
        schema.parse({
          type: "nonexistent",
          content: {},
        }),
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
        type: "layout",
        name: "Layout Block",
        fields: {
          // Excluded fields (should not appear in schema)
          separator: { type: "line", label: "Separator", name: "separator" },
          info: { type: "info", label: "Info", name: "info" },
          spacing: { type: "gap", label: "Spacing", name: "spacing" },
          title: { type: "headline", label: "Title", name: "title" },
          grid: { type: "layout", label: "Grid", name: "grid" },
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
          type: "layout",
          content: { content: "Valid content" },
        }),
      ).not.toThrow();

      // Should fail when missing required included field
      expect(() =>
        schema.parse({
          type: "layout",
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
            field: {
              field: { type: "text" },
            },
          },
        },
      },
    ];

    it("should handle structure fields in blocks", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      const validBlock = {
        type: "testimonials",
        content: {
          items: [
            {
              name: "John Doe",
              quote: "Great product!",
              rating: 5,
            },
          ],
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });

    it("should handle object fields in blocks", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      const validBlock = {
        type: "card",
        content: {
          settings: {
            title: "Card Title",
            priority: 5,
          },
          tags: ["web", "design"],
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });

    it("should handle entries fields in blocks", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      const validBlock = {
        type: "card",
        content: {
          settings: { title: "Card Title" },
          tags: ["web", "design", "ui"],
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });

    it("should validate complex field constraints", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      // Should reject structure item missing required field
      expect(() =>
        schema.parse({
          type: "testimonials",
          content: {
            items: [
              {
                quote: "Missing name field",
                rating: 5,
              },
            ],
          },
        }),
      ).toThrow();

      // Should reject object missing required field  
      expect(() =>
        schema.parse({
          type: "card",
          content: {
            settings: {
              priority: 5, // Missing required title
            },
          },
        }),
      ).toThrow();

      // Should reject entries below minimum
      expect(() =>
        schema.parse({
          type: "card",
          content: {
            settings: { title: "Card Title" },
            tags: [], // Below min of 1
          },
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
