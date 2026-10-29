// @vitest-environment happy-dom
import { describe, expect, it } from "vitest";
import {
  findFieldDefinition,
  getFieldPath,
  getResponseFormat,
} from "../../../src/panel/utils/fields";
import { blocksField, field, layoutField, structureField } from "../utils";

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
  it("resolves a top-level field by its name, not a nested field of that name", () => {
    const fields = [
      blocksField("body", {
        text: { text: field({ type: "writer", name: "text" }) },
      }),
      field({ type: "textarea", name: "text" }),
    ];

    expect(findFieldDefinition(fields, "text")).toBe(fields[1]);
  });

  it("resolves a block field through its blocks field and fieldset", () => {
    const aside = field({ type: "writer", name: "text", label: "Aside" });
    const fields = [
      blocksField("body", {
        note: { text: field({ type: "writer", name: "text" }) },
      }),
      blocksField("aside", { note: { text: aside } }),
    ];

    expect(
      findFieldDefinition(fields, "aside/fieldsets/note/fields/text"),
    ).toBe(aside);
  });

  it("resolves a field in a structure row", () => {
    const summary = field({ type: "textarea", name: "summary" });
    const fields = [
      field({ type: "textarea", name: "summary" }),
      structureField("links", { summary }),
    ];

    expect(findFieldDefinition(fields, "links+summary")).toBe(summary);
  });

  it("resolves a field in the settings of a layout, from any of its tabs", () => {
    const background = field({ type: "text", name: "background" });
    const layout = layoutField(
      "layout",
      {},
      { content: {}, style: { background } },
    );

    expect(findFieldDefinition([layout], "layout/fields/background")).toBe(
      background,
    );
  });

  it("finds nothing for a fieldset the field lacks", () => {
    const layout = layoutField(
      "layout",
      { note: { text: field({ type: "writer", name: "text" }) } },
      { content: { text: field({ type: "text", name: "text" }) } },
    );

    expect(
      findFieldDefinition([layout], "layout/fieldsets/quote/fields/text"),
    ).toBeUndefined();
  });
});

describe("getFieldPath", () => {
  it("names the blocks field and fieldset a block field sits in", () => {
    document.body.innerHTML = `
      <div class="k-field k-field-name-body">
        <div class="k-block-container k-block-container-fieldset-note">
          <div class="k-field k-field-name-text" id="active"></div>
        </div>
      </div>`;

    expect(getFieldPath(document.getElementById("active")!)).toBe(
      "body/fieldsets/note/fields/text",
    );
  });

  it.each([
    { fieldset: "text", inputClass: "k-block-type-text-input", field: "text" },
    {
      fieldset: "quote",
      inputClass: "k-block-type-quote-citation",
      field: "citation",
    },
  ])(
    "names the field a `$fieldset` block edits inline",
    ({ fieldset, inputClass, field }) => {
      document.body.innerHTML = `
        <div class="k-field k-field-name-body">
          <div class="k-block-container k-block-container-fieldset-${fieldset}">
            <div class="${inputClass}">
              <div contenteditable="true" id="active"></div>
            </div>
          </div>
        </div>`;

      expect(getFieldPath(document.getElementById("active")!)).toBe(
        `body/fieldsets/${fieldset}/fields/${field}`,
      );
    },
  );

  it("starts a drawer field's path from its API endpoint", () => {
    document.body.innerHTML = `
      <div class="k-drawer">
        <div class="k-field k-field-name-body">
          <div class="k-block-container k-block-container-fieldset-note">
            <div class="k-field k-field-name-text" id="active"></div>
          </div>
        </div>
      </div>`;
    const drawerTabs = {
      content: {
        fields: {
          body: {
            endpoints: {
              model: "pages/fields",
              field: "pages/fields/fields/links+body",
            },
          },
        },
      },
    };

    expect(getFieldPath(document.getElementById("active")!, drawerTabs)).toBe(
      "links+body/fieldsets/note/fields/text",
    );
  });

  it("gives no path to a drawer field without an API endpoint", () => {
    document.body.innerHTML = `
      <div class="k-drawer">
        <div class="k-field k-field-name-text" id="active"></div>
      </div>`;

    expect(
      getFieldPath(document.getElementById("active")!, {
        content: { fields: { text: {} } },
      }),
    ).toBeUndefined();
  });
});
