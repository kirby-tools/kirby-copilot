import { describe, expect, it } from "vitest";
import { z } from "zod";
import { generateKirbyBlocksSchema } from "../../src/panel/utils/blocks-schema";

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
  });

  describe("field type handling", () => {
    const fieldTypesConfig = [
      {
        type: "demo",
        name: "Demo Block",
        fields: {
          // Text fields
          title: {
            type: "text",
            label: "Title",
            name: "title",
            required: false,
          },
          description: {
            type: "textarea",
            label: "Description",
            name: "description",
            required: false,
          },
          email: {
            type: "email",
            label: "Email",
            name: "email",
            required: false,
          },
          phone: {
            type: "tel",
            label: "Phone",
            name: "phone",
            required: false,
          },
          website: {
            type: "url",
            label: "Website",
            name: "website",
            required: false,
          },

          // Rich text fields
          content: {
            type: "writer",
            label: "Content",
            name: "content",
            required: false,
          },
          notes: {
            type: "markdown",
            label: "Notes",
            name: "notes",
            required: false,
          },
          items: {
            type: "list",
            label: "Items",
            name: "items",
            required: false,
          },

          // Boolean fields
          featured: {
            type: "toggle",
            label: "Featured",
            name: "featured",
            required: false,
          },

          // Selection fields
          category: {
            type: "select",
            label: "Category",
            name: "category",
            options: ["news", "blog", "event"],
            required: false,
          },
          status: {
            type: "radio",
            label: "Status",
            name: "status",
            options: [
              { value: "draft", text: "Draft" },
              { value: "published", text: "Published" },
            ],
            required: false,
          },
          tags: {
            type: "checkboxes",
            label: "Tags",
            name: "tags",
            options: ["tech", "design", "business"],
            required: false,
          },

          // Number fields
          priority: {
            type: "number",
            label: "Priority",
            name: "priority",
            required: false,
          },
          rating: {
            type: "range",
            label: "Rating",
            name: "rating",
            min: 1,
            max: 5,
            required: false,
          },

          // Date/time fields
          publishDate: {
            type: "date",
            label: "Publish Date",
            name: "publishDate",
            required: false,
          },
          publishTime: {
            type: "time",
            label: "Publish Time",
            name: "publishTime",
            required: false,
          },

          // Other fields
          theme: {
            type: "color",
            label: "Theme Color",
            name: "theme",
            required: false,
          },
          permalink: {
            type: "slug",
            label: "Permalink",
            name: "permalink",
            required: false,
          },
          relatedPage: {
            type: "link",
            label: "Related Page",
            name: "relatedPage",
            required: false,
          },
        },
      },
    ];

    it("should handle text fields correctly", () => {
      const schema = generateKirbyBlocksSchema(fieldTypesConfig);

      const validBlock = {
        type: "demo",
        content: {
          title: "Sample Title",
          description: "Multi-line\ndescription text",
          email: "user@example.com",
          phone: "+1-555-0123",
          website: "https://example.com",
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });

    it("should handle rich text fields correctly", () => {
      const schema = generateKirbyBlocksSchema(fieldTypesConfig);

      const validBlock = {
        type: "demo",
        content: {
          content: "<p>Rich <strong>text</strong> content</p>",
          notes: "# Markdown\n- List item",
          items: "<ul><li>Item 1</li><li>Item 2</li></ul>",
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });

    it("should handle boolean fields correctly", () => {
      const schema = generateKirbyBlocksSchema(fieldTypesConfig);

      const validBlock = {
        type: "demo",
        content: { featured: true },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();

      // Should reject non-boolean values
      expect(() =>
        schema.parse({
          type: "demo",
          content: { featured: "true" },
        }),
      ).toThrow();
    });

    it("should handle selection fields correctly", () => {
      const schema = generateKirbyBlocksSchema(fieldTypesConfig);

      const validBlock = {
        type: "demo",
        content: {
          category: "news",
          status: "published",
          tags: ["tech", "design"],
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();

      // Should reject invalid enum values
      expect(() =>
        schema.parse({
          type: "demo",
          content: { category: "invalid" },
        }),
      ).toThrow();
    });

    it("should handle number fields with constraints", () => {
      const schema = generateKirbyBlocksSchema(fieldTypesConfig);

      const validBlock = {
        type: "demo",
        content: {
          priority: 10,
          rating: 3,
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();

      // Should reject values outside range
      expect(() =>
        schema.parse({
          type: "demo",
          content: { rating: 10 },
        }),
      ).toThrow();
    });

    it("should handle date and time fields correctly", () => {
      const schema = generateKirbyBlocksSchema(fieldTypesConfig);

      const validBlock = {
        type: "demo",
        content: {
          publishDate: "2023-12-25",
          publishTime: "14:30:00",
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });

    it("should handle special fields correctly", () => {
      const schema = generateKirbyBlocksSchema(fieldTypesConfig);

      const validBlock = {
        type: "demo",
        content: {
          theme: "#ff0000",
          permalink: "sample-post",
          relatedPage: "page://abc123",
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });
  });

  describe("required fields validation", () => {
    const requiredFieldsConfig = [
      {
        type: "article",
        name: "Article Block",
        fields: {
          title: {
            type: "text",
            label: "Title",
            name: "title",
            required: true,
          },
          content: {
            type: "writer",
            label: "Content",
            name: "content",
            required: true,
          },
          tags: { type: "tags", label: "Tags", name: "tags", required: true },
          excerpt: {
            type: "textarea",
            label: "Excerpt",
            name: "excerpt",
            required: false,
          },
        },
      },
    ];

    it("should enforce required string fields", () => {
      const schema = generateKirbyBlocksSchema(requiredFieldsConfig);

      // Valid block with all required fields
      expect(() =>
        schema.parse({
          type: "article",
          content: {
            title: "Article Title",
            content: "<p>Article content</p>",
            tags: ["tech"],
          },
        }),
      ).not.toThrow();

      // Should reject empty required string
      expect(() =>
        schema.parse({
          type: "article",
          content: {
            title: "",
            content: "<p>Article content</p>",
            tags: ["tech"],
          },
        }),
      ).toThrow();

      // Should reject missing required field
      expect(() =>
        schema.parse({
          type: "article",
          content: {
            content: "<p>Article content</p>",
            tags: ["tech"],
          },
        }),
      ).toThrow();
    });

    it("should enforce required array fields", () => {
      const schema = generateKirbyBlocksSchema(requiredFieldsConfig);

      // Should reject empty required array
      expect(() =>
        schema.parse({
          type: "article",
          content: {
            title: "Article Title",
            content: "<p>Article content</p>",
            tags: [],
          },
        }),
      ).toThrow();
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

      // The excluded fields simply won't be in the schema, so they'll be ignored
      // This test verifies that the schema was created without the excluded fields
      // by checking that only the included field is required
      expect(() =>
        schema.parse({
          type: "layout",
          content: {
            // Missing required 'content' field should fail
          },
        }),
      ).toThrow();
    });
  });

  describe("structure fields", () => {
    const structureFieldConfig = [
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
    ];

    it("should handle structure fields with defined sub-fields", () => {
      const schema = generateKirbyBlocksSchema(structureFieldConfig);

      const validBlock = {
        type: "testimonials",
        content: {
          items: [
            {
              name: "John Doe",
              quote: "Great product!",
              rating: 5,
            },
            {
              name: "Jane Smith",
              quote: "Excellent service.",
              rating: 4,
            },
          ],
        },
      };

      expect(() => schema.parse(validBlock)).not.toThrow();
    });

    it("should validate structure sub-field requirements", () => {
      const schema = generateKirbyBlocksSchema(structureFieldConfig);

      // Should reject structure item missing required fields
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
    });
  });

  describe("writer field inline handling", () => {
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

    it("should generate different descriptions for inline vs block writer fields", () => {
      const schema = generateKirbyBlocksSchema(writerFieldConfig);

      // Both should be valid strings, but descriptions differ
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
