import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  EXCLUDED_FIELD_TYPES,
  fieldToZodSchema,
} from "../../src/panel/schemas/fields";

describe("fieldToZodSchema", () => {
  describe("text-like fields", () => {
    describe("basic text fields", () => {
      it("should handle text field", () => {
        const field = { type: "text", label: "Title", name: "title" };
        const schema = fieldToZodSchema(field);

        expect(schema).toBeInstanceOf(z.ZodOptional);
        expect(() => schema.parse("Sample text")).not.toThrow();
      });

      it("should handle textarea field", () => {
        const field = {
          type: "textarea",
          label: "Description",
          name: "description",
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("Multi-line\ntext")).not.toThrow();
      });

      it("should handle markdown field", () => {
        const field = { type: "markdown", label: "Content", name: "content" };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("# Heading\n\nContent")).not.toThrow();
      });

      it("should handle specialized text fields", () => {
        const fields = [
          { type: "email", label: "Email", name: "email" },
          { type: "url", label: "URL", name: "url" },
          { type: "tel", label: "Phone", name: "phone" },
          { type: "slug", label: "Slug", name: "slug" },
          { type: "password", label: "Password", name: "password" },
        ];

        fields.forEach((field) => {
          const schema = fieldToZodSchema(field);
          expect(schema).toBeInstanceOf(z.ZodOptional);
          expect(() => schema.parse("sample-value")).not.toThrow();
        });
      });
    });

    describe("text field constraints", () => {
      it("should enforce minlength constraints", () => {
        const field = {
          type: "text",
          label: "Username",
          name: "username",
          minlength: 3,
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("ab")).toThrow(); // Too short
        expect(() => schema.parse("abc")).not.toThrow(); // Valid
      });

      it("should enforce maxlength constraints", () => {
        const field = {
          type: "text",
          label: "Username",
          name: "username",
          maxlength: 10,
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("a".repeat(11))).toThrow(); // Too long
        expect(() => schema.parse("a".repeat(10))).not.toThrow(); // Valid
      });

      it("should enforce both minlength and maxlength", () => {
        const field = {
          type: "text",
          label: "Username",
          name: "username",
          minlength: 3,
          maxlength: 10,
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("ab")).toThrow(); // Too short
        expect(() => schema.parse("a".repeat(11))).toThrow(); // Too long
        expect(() => schema.parse("valid")).not.toThrow(); // Valid
      });
    });
  });

  describe("rich text fields", () => {
    it("should handle writer field (block mode)", () => {
      const field = {
        type: "writer",
        label: "Content",
        name: "content",
        inline: false,
      };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse("<p>Block content</p>")).not.toThrow();
    });

    it("should handle writer field (inline mode)", () => {
      const field = {
        type: "writer",
        label: "Content",
        name: "content",
        inline: true,
      };
      const schema = fieldToZodSchema(field);

      expect(() =>
        schema.parse("Inline <strong>content</strong>"),
      ).not.toThrow();
    });

    it("should handle list field", () => {
      const field = { type: "list", label: "Items", name: "items" };
      const schema = fieldToZodSchema(field);

      expect(() =>
        schema.parse("<ul><li>Item 1</li><li>Item 2</li></ul>"),
      ).not.toThrow();
    });
  });

  describe("number fields", () => {
    it("should handle number field", () => {
      const field = { type: "number", label: "Count", name: "count" };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse(42)).not.toThrow();
      expect(() => schema.parse("not a number")).toThrow();
    });

    it("should handle range field with constraints", () => {
      const field = {
        type: "range",
        label: "Rating",
        name: "rating",
        min: 1,
        max: 5,
      };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse(0)).toThrow(); // Below min
      expect(() => schema.parse(6)).toThrow(); // Above max
      expect(() => schema.parse(3)).not.toThrow(); // Valid
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
    describe("single selection", () => {
      it("should handle select field with options", () => {
        const field = {
          type: "select",
          label: "Category",
          name: "category",
          options: ["news", "blog", "event"],
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("news")).not.toThrow();
        expect(() => schema.parse("invalid")).toThrow();
      });

      it("should handle radio field", () => {
        const field = {
          type: "radio",
          label: "Status",
          name: "status",
          options: [
            { value: "draft", text: "Draft" },
            { value: "published", text: "Published" },
          ],
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("draft")).not.toThrow();
        expect(() => schema.parse("invalid")).toThrow();
      });

      it("should handle toggles field", () => {
        const field = {
          type: "toggles",
          label: "Mode",
          name: "mode",
          options: ["light", "dark"],
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse("light")).not.toThrow();
      });
    });

    describe("multiple selection", () => {
      it("should handle checkboxes field", () => {
        const field = {
          type: "checkboxes",
          label: "Tags",
          name: "tags",
          options: ["tech", "design", "business"],
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse(["tech", "design"])).not.toThrow();
        expect(() => schema.parse(["invalid"])).toThrow();
      });

      it("should handle multiselect field", () => {
        const field = {
          type: "multiselect",
          label: "Categories",
          name: "categories",
          options: ["cat1", "cat2", "cat3"],
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse(["cat1"])).not.toThrow();
        expect(() => schema.parse([])).not.toThrow(); // Empty array allowed
      });

      it("should handle tags field", () => {
        const field = {
          type: "tags",
          label: "Keywords",
          name: "keywords",
          options: ["web", "mobile", "api"],
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse(["web", "api"])).not.toThrow();
      });
    });
  });

  describe("date/time fields", () => {
    it("should handle date field", () => {
      const field = { type: "date", label: "Published", name: "published" };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse("2023-12-25")).not.toThrow();
    });

    it("should handle date field with time", () => {
      const field = {
        type: "date",
        label: "Published",
        name: "published",
        time: true,
      };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse("2023-12-25 14:30:00")).not.toThrow();
    });

    it("should handle time field", () => {
      const field = { type: "time", label: "Start Time", name: "startTime" };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse("14:30:00")).not.toThrow();
    });
  });

  describe("other fields", () => {
    it("should handle color field", () => {
      const field = { type: "color", label: "Theme", name: "theme" };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse("#ff0000")).not.toThrow();
    });

    it("should handle link field", () => {
      const field = { type: "link", label: "Related", name: "related" };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse("page://abc123")).not.toThrow();
      expect(() => schema.parse("https://example.com")).not.toThrow();
    });
  });

  describe("complex fields", () => {
    describe("structure field", () => {
      it("should handle structure with defined fields", () => {
        const field = {
          type: "structure",
          label: "Items",
          name: "items",
          fields: {
            title: { type: "text", label: "Title", name: "title" },
            description: {
              type: "textarea",
              label: "Description",
              name: "description",
            },
          },
        };
        const schema = fieldToZodSchema(field);

        const validData = [
          { title: "Item 1", description: "Description 1" },
          { title: "Item 2", description: "Description 2" },
        ];

        expect(() => schema.parse(validData)).not.toThrow();
      });

      it("should handle structure without defined fields", () => {
        const field = {
          type: "structure",
          label: "Items",
          name: "items",
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse([{ custom: "data" }])).not.toThrow();
      });
    });

    describe("object field", () => {
      it("should handle object with defined fields", () => {
        const field = {
          type: "object",
          label: "Settings",
          name: "settings",
          fields: {
            title: { type: "text", label: "Title", name: "title" },
            enabled: { type: "toggle", label: "Enabled", name: "enabled" },
          },
        };
        const schema = fieldToZodSchema(field);

        const validData = { title: "Test", enabled: true };

        expect(() => schema.parse(validData)).not.toThrow();
      });

      it("should handle object without defined fields", () => {
        const field = {
          type: "object",
          label: "Data",
          name: "data",
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse({ custom: "value" })).not.toThrow();
      });
    });

    describe("entries field", () => {
      it("should handle entries with text field", () => {
        const field = {
          type: "entries",
          label: "Tags",
          name: "tags",
          field: {
            field: { type: "text" },
          },
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse(["tag1", "tag2"])).not.toThrow();
      });

      it("should handle entries with constraints", () => {
        const field = {
          type: "entries",
          label: "Tags",
          name: "tags",
          min: 2,
          max: 4,
          field: {
            field: { type: "text" },
          },
        };
        const schema = fieldToZodSchema(field);

        expect(() => schema.parse(["tag1"])).toThrow(); // Below min
        expect(() => schema.parse(["t1", "t2", "t3", "t4", "t5"])).toThrow(); // Above max
        expect(() => schema.parse(["tag1", "tag2", "tag3"])).not.toThrow(); // Valid
      });
    });
  });

  describe("required field handling", () => {
    it("should add min(1) validation for required string fields without existing constraints", () => {
      const field = {
        type: "text",
        label: "Title",
        name: "title",
        required: true,
      };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse("")).toThrow(); // Empty string should fail
      expect(() => schema.parse("Valid title")).not.toThrow();
    });

    it("should preserve existing minlength constraints for required fields", () => {
      const field = {
        type: "text",
        label: "Username",
        name: "username",
        minlength: 3,
        required: true,
      };
      const schema = fieldToZodSchema(field);

      // Should fail with minlength error, not just "required" error
      expect(() => schema.parse("ab")).toThrow(); // Below minlength
      expect(() => schema.parse("abc")).not.toThrow(); // Valid
    });

    it("should add min(1) validation for required array fields without existing constraints", () => {
      const field = {
        type: "tags",
        label: "Tags",
        name: "tags",
        required: true,
      };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse([])).toThrow(); // Empty array should fail
      expect(() => schema.parse(["tag1"])).not.toThrow();
    });

    it("should preserve existing min constraints for required array fields", () => {
      const field = {
        type: "entries",
        label: "Items",
        name: "items",
        min: 2,
        required: true,
        field: {
          field: { type: "text" },
        },
      };
      const schema = fieldToZodSchema(field);

      expect(() => schema.parse(["single"])).toThrow(); // Below existing min
      expect(() => schema.parse(["item1", "item2"])).not.toThrow(); // Valid
    });

    it("should make non-required fields optional", () => {
      const field = {
        type: "text",
        label: "Description",
        name: "description",
        required: false,
      };
      const schema = fieldToZodSchema(field);

      expect(schema.isOptional()).toBe(true);
    });
  });

  describe("excluded field types", () => {
    it("should exclude utility field types", () => {
      const excludedTypes = Array.from(EXCLUDED_FIELD_TYPES);

      expect(excludedTypes).toContain("files");
      expect(excludedTypes).toContain("gap");
      expect(excludedTypes).toContain("headline");
      expect(excludedTypes).toContain("hidden");
      expect(excludedTypes).toContain("info");
      expect(excludedTypes).toContain("layout");
      expect(excludedTypes).toContain("line");
      expect(excludedTypes).toContain("pages");
      expect(excludedTypes).toContain("users");
    });
  });
});
