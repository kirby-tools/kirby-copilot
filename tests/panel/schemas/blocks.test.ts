import { describe, expect, it } from "vitest";
import { generateKirbyBlocksSchema } from "../../../src/panel/schemas/blocks";
import { field, fieldset } from "../utils";

describe("generateKirbyBlocksSchema", () => {
  const basicBlocksConfig = [
    fieldset({
      type: "text",
      name: "Text Block",
      fields: {
        content: field({
          type: "writer",
          label: "Content",
          name: "content",
          required: false,
          inline: false,
          counter: false,
        }),
      },
    }),
    fieldset({
      type: "heading",
      name: "Heading Block",
      fields: {
        level: field({
          type: "select",
          label: "Level",
          name: "level",
          options: [
            {
              value: "h1",
              text: "H1",
              disabled: false,
              icon: null,
              info: null,
            },
            {
              value: "h2",
              text: "H2",
              disabled: false,
              icon: null,
              info: null,
            },
            {
              value: "h3",
              text: "H3",
              disabled: false,
              icon: null,
              info: null,
            },
          ],
          required: true,
        }),
        text: field({
          type: "text",
          label: "Text",
          name: "text",
          required: true,
        }),
      },
    }),
  ];

  describe("input validation", () => {
    it.each([
      { label: "empty array", input: [] },
      { label: "null", input: null as any },
      { label: "string", input: "invalid" as any },
    ])("throws for $label input", ({ input }) => {
      expect(() => generateKirbyBlocksSchema(input)).toThrow(
        "Invalid fieldsets configuration",
      );
    });

    it("filters out blocks with no fields and rejects invalid types", () => {
      const configWithEmptyBlock = [
        ...basicBlocksConfig,
        fieldset({ type: "empty", name: "Empty", fields: {} }),
        fieldset({ type: "no-fields", name: "No Fields" }),
      ];

      const schema = generateKirbyBlocksSchema(configWithEmptyBlock);

      expect(() =>
        schema.parse({
          type: "text",
          content: { content: "<p>Test</p>" },
        }),
      ).not.toThrow();

      expect(() => schema.parse({ type: "empty", content: {} })).toThrow();
      expect(() =>
        schema.parse({ type: "nonexistent", content: {} }),
      ).toThrow();
    });
  });

  describe("block validation", () => {
    it("validates required fields", () => {
      const schema = generateKirbyBlocksSchema(basicBlocksConfig);

      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h1" }, // Missing the required `text` field.
        }),
      ).toThrow();

      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h1", text: "Valid heading" },
        }),
      ).not.toThrow();
    });

    it("validates field types", () => {
      const schema = generateKirbyBlocksSchema(basicBlocksConfig);

      expect(() =>
        schema.parse({
          type: "heading",
          content: { level: "h7", text: "Invalid level" }, // `h7` is not in the options.
        }),
      ).toThrow();

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
      fieldset({
        type: "custom",
        name: "Custom Block",
        fields: {
          // Excluded fields (should not appear in schema)
          separator: field({
            type: "line",
            label: "Separator",
            name: "separator",
          }),
          info: field({ type: "info", label: "Info", name: "info" }),
          spacing: field({ type: "gap", label: "Spacing", name: "spacing" }),
          title: field({ type: "headline", label: "Title", name: "title" }),
          images: field({ type: "files", label: "Images", name: "images" }),

          // Included fields
          content: field({
            type: "text",
            label: "Content",
            name: "content",
            required: true,
          }),
        },
      }),
    ];

    it("excludes utility field types from schema", () => {
      const schema = generateKirbyBlocksSchema(excludedFieldsConfig);

      expect(() =>
        schema.parse({
          type: "custom",
          content: { content: "Valid content" },
        }),
      ).not.toThrow();

      expect(() =>
        schema.parse({
          type: "custom",
          content: {},
        }),
      ).toThrow();
    });
  });

  describe("unknown field types in blocks", () => {
    it("skips unknown field types and keeps known fields", () => {
      const config = [
        fieldset({
          type: "custom",
          name: "Custom Block",
          fields: {
            title: field({
              type: "text",
              label: "Title",
              name: "title",
              required: true,
            }),
            mywidget: field({
              type: "mywidget",
              label: "Widget",
              name: "mywidget",
            }),
          },
        }),
      ];

      const schema = generateKirbyBlocksSchema(config);

      expect(() =>
        schema.parse({
          type: "custom",
          content: { title: "Hello" },
        }),
      ).not.toThrow();

      // The unknown field is not in the schema, so strict mode rejects it.
      expect(() =>
        schema.parse({
          type: "custom",
          content: { title: "Hello", mywidget: "value" },
        }),
      ).toThrow();
    });

    it("excludes blocks where all fields are unknown types", () => {
      const config = [
        fieldset({
          type: "text",
          name: "Text Block",
          fields: {
            content: field({
              type: "writer",
              label: "Content",
              name: "content",
            }),
          },
        }),
        fieldset({
          type: "all-unknown",
          name: "All Unknown",
          fields: {
            widget: field({
              type: "mywidget",
              label: "Widget",
              name: "widget",
            }),
          },
        }),
      ];

      const schema = generateKirbyBlocksSchema(config);

      expect(() =>
        schema.parse({
          type: "text",
          content: { content: "<p>Test</p>" },
        }),
      ).not.toThrow();

      // The all-unknown block is excluded from the union.
      expect(() =>
        schema.parse({
          type: "all-unknown",
          content: {},
        }),
      ).toThrow();
    });
  });

  describe("complex field integration", () => {
    const complexBlocksConfig = [
      fieldset({
        type: "testimonials",
        name: "Testimonials Block",
        fields: {
          items: field({
            type: "structure",
            label: "Testimonials",
            name: "items",
            fields: {
              name: field({
                type: "text",
                label: "Name",
                name: "name",
                required: true,
              }),
              quote: field({
                type: "textarea",
                label: "Quote",
                name: "quote",
                required: true,
              }),
              rating: field({
                type: "range",
                label: "Rating",
                name: "rating",
                min: 1,
                max: 5,
              }),
            },
          }),
        },
      }),
      fieldset({
        type: "card",
        name: "Card Block",
        fields: {
          settings: field({
            type: "object",
            label: "Card Settings",
            name: "settings",
            fields: {
              title: field({
                type: "text",
                label: "Title",
                name: "title",
                required: true,
              }),
              priority: field({
                type: "number",
                label: "Priority",
                name: "priority",
                min: 1,
                max: 10,
              }),
            },
          }),
          tags: field({
            type: "entries",
            label: "Tags",
            name: "tags",
            min: 1,
            max: 5,
            field: field({ type: "text", name: "entry", label: "Entry" }),
          }),
        },
      }),
    ];

    it("accepts structure, object, and entries content inside blocks", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      expect(() =>
        schema.parse({
          type: "testimonials",
          content: { items: [{ name: "John", quote: "Great!", rating: 5 }] },
        }),
      ).not.toThrow();

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

    it("validates complex field constraints", () => {
      const schema = generateKirbyBlocksSchema(complexBlocksConfig);

      // Structure item missing a required field.
      expect(() =>
        schema.parse({
          type: "testimonials",
          content: { items: [{ quote: "Missing name", rating: 5 }] },
        }),
      ).toThrow();

      // Object missing a required field.
      expect(() =>
        schema.parse({
          type: "card",
          content: { settings: { priority: 5 }, tags: ["tag"] },
        }),
      ).toThrow();

      // Entries below the minimum.
      expect(() =>
        schema.parse({
          type: "card",
          content: { settings: { title: "Card" }, tags: [] },
        }),
      ).toThrow();
    });
  });

  describe("nested blocks field", () => {
    const nestedBlocksConfig = [
      fieldset({
        type: "text",
        name: "Text Block",
        fields: {
          content: field({
            type: "writer",
            label: "Content",
            name: "content",
          }),
        },
      }),
      fieldset({
        type: "heading",
        name: "Heading Block",
        fields: {
          text: field({
            type: "text",
            label: "Text",
            name: "text",
            required: true,
          }),
        },
      }),
      fieldset({
        type: "rich-text",
        name: "Rich Text Section",
        fields: {
          heading: field({
            type: "text",
            label: "Section Heading",
            name: "heading",
          }),
          content: field({
            type: "blocks",
            label: "Content Blocks",
            name: "content",
            fieldsets: {
              text: {},
              heading: {},
            },
          }),
        },
      }),
    ];

    it("generates schemas for blocks containing nested blocks fields", () => {
      const schema = generateKirbyBlocksSchema(nestedBlocksConfig);

      expect(() =>
        schema.parse({
          type: "rich-text",
          content: {
            heading: null,
            content: [
              {
                type: "text",
                content: { content: "<p>Hello</p>" },
              },
              {
                type: "heading",
                content: { text: "Title" },
              },
            ],
          },
        }),
      ).not.toThrow();
    });

    it("rejects invalid nested block types", () => {
      const schema = generateKirbyBlocksSchema(nestedBlocksConfig);

      // `rich-text` is not allowed in the nested blocks fieldsets.
      expect(() =>
        schema.parse({
          type: "rich-text",
          content: {
            heading: null,
            content: [
              {
                type: "rich-text",
                content: { heading: "Nope", content: [] },
              },
            ],
          },
        }),
      ).toThrow();
    });

    it("validates nested block content fields", () => {
      const schema = generateKirbyBlocksSchema(nestedBlocksConfig);

      // Nested heading block missing the required `text` field.
      expect(() =>
        schema.parse({
          type: "rich-text",
          content: {
            heading: null,
            content: [
              {
                type: "heading",
                content: {},
              },
            ],
          },
        }),
      ).toThrow();
    });
  });
});
