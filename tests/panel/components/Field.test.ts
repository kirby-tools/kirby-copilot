// @vitest-environment happy-dom
import { shallowMount } from "@vue/test-utils";
import { expect, it, vi } from "vitest";
import { ref } from "vue";
import Field from "../../../src/panel/components/Field.vue";
import FieldBody from "../../../src/panel/components/Ui/FieldBody.vue";

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

it("keeps disabled off k-field", () => {
  const wrapper = shallowMount(Field, {
    props: {
      name: "copilot",
      label: "Copilot",
      licenseStatus: "active",
      licenseDialog: "",
    },
    attrs: { disabled: true },
  });

  expect(
    wrapper.findComponent(FieldBody).attributes("disabled"),
  ).toBeUndefined();
});
