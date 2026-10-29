import type {
  KirbyAnyFieldProps,
  KirbyFieldProps,
  KirbyFieldsetProps,
  KirbyFieldsetTab,
} from "kirby-types";
import type { OutputFormat } from "../types";

/**
 * Block field behind an inline input of Kirby's default block previews,
 * keyed by the input's class (`Blocks/Types/*.vue`).
 */
/// keep-sorted
const INLINE_BLOCK_FIELDS: Record<string, string> = {
  "k-block-type-heading-input": "text",
  "k-block-type-list-input": "text",
  "k-block-type-quote-citation": "citation",
  "k-block-type-quote-text": "text",
  "k-block-type-text-input": "text",
};

/// keep-sorted
const FIELD_TYPE_RESPONSE_FORMAT: Record<string, OutputFormat> = {
  list: "rich-text",
  markdown: "markdown", // Community plugin field type.
  textarea: "markdown",
  writer: "rich-text",
};

export function getResponseFormat(fieldType: string): OutputFormat {
  return FIELD_TYPE_RESPONSE_FORMAT[fieldType] ?? "text";
}

/**
 * Resolves a field definition from its path, which names the fields and
 * fieldsets the field sits in, as Kirby's field API endpoints do:
 * `body/fieldsets/note/fields/text` in a block, `links+url` in a structure
 * row or an object, `layout/fields/class` in the settings of a layout.
 */
export function findFieldDefinition(
  fields: KirbyAnyFieldProps[],
  path: string,
): KirbyAnyFieldProps | undefined {
  const [name, ...steps] = path.split(/(?=\+|\/fieldsets\/|\/fields\/)/);
  let definition: KirbyAnyFieldProps | undefined = fields.find(
    (field) => field.name === name,
  );
  let fieldset: KirbyFieldsetProps | undefined;

  for (const step of steps) {
    if (!definition) return;

    if (step.startsWith("/fieldsets/")) {
      fieldset =
        "fieldsets" in definition
          ? definition.fieldsets[step.slice("/fieldsets/".length)]
          : undefined;
      if (!fieldset) return;
      continue;
    }

    const childName = step.replace(/^\+|^\/fields\//, "");

    if (step.startsWith("+")) {
      definition =
        "fields" in definition ? definition.fields[childName] : undefined;
    } else {
      // A block's fields sit in the tabs of its fieldset, the settings of a
      // layout in the tabs of the settings fieldset.
      const settings =
        "settings" in definition ? definition.settings : undefined;
      definition = tabFields((fieldset ?? settings)?.tabs)[childName];
    }

    fieldset = undefined;
  }

  return definition;
}

/**
 * Reads the path `findFieldDefinition()` takes from the markup around a
 * field. Kirby renders the form of a structure row, an object, a layout's
 * settings, or an opened block in a drawer, apart from the field it belongs
 * to, so a drawer field's path starts from its API endpoint.
 */
export function getFieldPath(
  element: HTMLElement,
  drawerTabs?: Record<
    string,
    {
      fields?: Record<string, { endpoints?: { field: string; model: string } }>;
    }
  >,
): string | undefined {
  let outerName: string | undefined;
  let innerPath = "";
  let separator = "+";
  let node: HTMLElement | null = element;

  while (node && !node.classList.contains("k-drawer")) {
    const blockType = getClassSuffix(node, "k-block-container-fieldset-");
    if (blockType) separator = `/fieldsets/${blockType}/fields/`;

    const name =
      getClassSuffix(node, "k-field-name-") ??
      (outerName ? undefined : getInlineBlockField(node));
    if (name) {
      if (outerName) innerPath = separator + outerName + innerPath;
      outerName = name;
      separator = "+";
    }

    node = node.parentElement;
  }

  if (!outerName) return;
  if (!node) return outerName + innerPath;

  const endpoints = Object.values(drawerTabs ?? {})
    .map((tab) => tab.fields?.[outerName]?.endpoints)
    .find(Boolean);
  if (!endpoints) return;

  return endpoints.field.slice(`${endpoints.model}/fields/`.length) + innerPath;
}

function tabFields(
  tabs?: Record<string, KirbyFieldsetTab>,
): Record<string, KirbyFieldProps> {
  return Object.assign(
    {},
    ...Object.values(tabs ?? {}).map((tab) => tab.fields),
  );
}

function getClassSuffix(element: HTMLElement, prefix: string) {
  return [...element.classList]
    .find((className) => className.startsWith(prefix))
    ?.slice(prefix.length);
}

function getInlineBlockField(element: HTMLElement) {
  return [...element.classList]
    .map((className) => INLINE_BLOCK_FIELDS[className])
    .find(Boolean);
}
