// @vitest-environment happy-dom
import { shallowMount } from "@vue/test-utils";
import { expect, it, vi } from "vitest";
import { ref } from "vue";
import CopilotField from "../../../src/panel/components/Fields/Copilot.vue";
import CopilotFieldBody from "../../../src/panel/components/Ui/CopilotFieldBody.vue";

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
  const wrapper = shallowMount(CopilotField, {
    props: {
      name: "copilot",
      label: "Copilot",
      licenseStatus: "active",
      licenseDialog: "",
    },
    attrs: { disabled: true },
  });

  expect(
    wrapper.findComponent(CopilotFieldBody).attributes("disabled"),
  ).toBeUndefined();
});
