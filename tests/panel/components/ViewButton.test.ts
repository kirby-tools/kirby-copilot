// @vitest-environment happy-dom
import { mount, shallowMount } from "@vue/test-utils";
import { beforeEach, expect, it, vi } from "vitest";
import { defineComponent, h, ref } from "vue";
import ViewButtonBody from "../../../src/panel/components/Ui/ViewButtonBody.vue";
import ViewButton from "../../../src/panel/components/ViewButton.vue";
import { PLUGIN_BUTTON_OPTIONS_API_ROUTE } from "../../../src/panel/constants";

// Kirby 6's `k-button` sets `inheritAttrs: false` and passes no listener but
// `click` on to its element.
const KButton = defineComponent({
  inheritAttrs: false,
  emits: ["click"],
  setup(_, { emit }) {
    return () => h("button", { onClick: () => emit("click") });
  },
});

const api = { get: vi.fn() };
const openPromptDialog = vi.hoisted(() => vi.fn());

vi.mock("kirbyuse", () => ({
  useContent: () => ({ currentContent: ref({}), isEditable: ref(true) }),
  usePanel: () => ({
    api,
    view: { path: "pages/about" },
    t: (key: string) => key,
  }),
}));

vi.mock("../../../src/panel/composables", () => ({
  ensurePlaygroundApiKey: () => true,
  useModelFields: () => ({
    getModelFields: async () => [{ name: "text", type: "textarea" }],
  }),
}));

vi.mock("../../../src/panel/utils", () => ({ openPromptDialog }));

beforeEach(() => {
  api.get.mockReset();
  openPromptDialog.mockReset().mockResolvedValue(undefined);
});

async function openDialog(props: Record<string, unknown> = {}) {
  const wrapper = shallowMount(ViewButton, { props });
  wrapper.findComponent(ViewButtonBody).vm.$emit("click");
  await vi.waitFor(() => expect(openPromptDialog).toHaveBeenCalled());
}

it("resolves the userPrompt through the button-options route", async () => {
  api.get.mockResolvedValue({ userPrompt: "Write about Kirby" });

  await openDialog({ userPrompt: "Write about {{ page.title }}" });

  expect(api.get).toHaveBeenCalledWith(
    PLUGIN_BUTTON_OPTIONS_API_ROUTE,
    { path: "pages/about" },
    undefined,
    true,
  );
  expect(openPromptDialog).toHaveBeenCalledWith(
    expect.objectContaining({ userPrompt: "Write about Kirby" }),
  );
});

it("keeps its own userPrompt when the button-options route answers a null userPrompt", async () => {
  api.get.mockResolvedValue({ userPrompt: null, systemPrompt: null });

  await openDialog({ userPrompt: "Write about Kirby" });

  expect(openPromptDialog).toHaveBeenCalledWith(
    expect.objectContaining({ userPrompt: "Write about Kirby" }),
  );
});

it("skips the button-options route without a prompt", async () => {
  await openDialog();

  expect(api.get).not.toHaveBeenCalled();
});

it("keeps the disabled prop Kirby passes off its button", () => {
  const wrapper = shallowMount(ViewButton, { attrs: { disabled: true } });

  expect(wrapper.findComponent(ViewButtonBody).props("disabled")).toBe(false);
});

it("emits abort instead of click while hovered with isGenerating", async () => {
  const wrapper = mount(ViewButtonBody, {
    props: { label: "Copilot", isGenerating: true },
    global: { components: { "k-button": KButton } },
  });

  await wrapper.trigger("mouseenter");
  await wrapper.find("button").trigger("click");
  expect(wrapper.emitted("abort")).toHaveLength(1);
  expect(wrapper.emitted("click")).toBeUndefined();
});
