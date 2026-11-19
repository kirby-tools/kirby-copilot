// @vitest-environment happy-dom
import { shallowMount } from "@vue/test-utils";
import { afterEach, expect, it, vi } from "vitest";
import { ref } from "vue";
import Field from "../../../src/panel/components/Field.vue";
import FieldBody from "../../../src/panel/components/Ui/FieldBody.vue";
import { field } from "../utils";

vi.mock("kirbyuse", () => ({
  useContent: () => ({
    currentContent: ref({}),
    isEditable: ref(true),
    modelPath: ref("site"),
  }),
  usePanel: () => ({
    t: (key: string) => key,
  }),
  usePanelEvent: () => {},
}));

vi.mock("@kirby-tools/licensing/components", () => ({
  LicensingButtonGroup: {},
}));

vi.mock("../../../src/panel/composables", () => ({
  usePluginContext: async () => ({ config: {} }),
}));

afterEach(() => {
  localStorage.clear();
});

it("keeps the prompt's native input events off the form", () => {
  const onInput = vi.fn();
  const wrapper = shallowMount(Field, {
    props: {
      name: "copilot",
      label: "Copilot",
      licenseStatus: "active",
      licenseDialog: "",
    },
    attrs: { onInput },
  });

  wrapper.element.dispatchEvent(new Event("input", { bubbles: true }));

  expect(onInput).not.toHaveBeenCalled();
});

it("restores the prompt stored under the model path and the field name", () => {
  localStorage.setItem(
    "kirby$copilot$T6aqyZkNt9B2J-0c_dpipAOdZp5XPumahS6OYsqswFM$prompt",
    "Stored prompt",
  );

  const wrapper = shallowMount(Field, {
    props: {
      name: "copilot",
      label: "Copilot",
      field: field({ name: "Text", type: "textarea" }),
      licenseStatus: "active",
      licenseDialog: "",
    },
  });

  expect(wrapper.findComponent(FieldBody).props("prompt")).toBe(
    "Stored prompt",
  );
});
