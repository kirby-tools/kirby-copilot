// @vitest-environment happy-dom
import { shallowMount } from "@vue/test-utils";
import { expect, it, vi } from "vitest";
import { ref } from "vue";
import Field from "../../../src/panel/components/Field.vue";

vi.mock("kirbyuse", () => ({
  useContent: () => ({ currentContent: ref({}), isEditable: ref(true) }),
  usePanel: () => ({
    view: { path: "site" },
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
