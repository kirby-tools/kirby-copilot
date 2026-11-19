import { expect, it, vi } from "vitest";
import { ref } from "vue";
import { useModelFields } from "../../../src/panel/composables/model-fields";
import { PLUGIN_MODEL_FIELDS_API_ROUTE } from "../../../src/panel/constants";
import { field } from "../utils";

const api = { get: vi.fn() };

vi.mock("kirbyuse", () => ({
  useContent: () => ({ modelPath: ref("pages/about") }),
  usePanel: () => ({ api }),
}));

it("drops the fields that save no value", async () => {
  api.get.mockResolvedValue({
    text: field({ type: "textarea", name: "text" }),
    copilot: field({ type: "copilot", name: "copilot", saveable: false }),
    children: field({ type: "pagelist", name: "children", saveable: false }),
  });

  const fields = await useModelFields().getModelFields();

  expect(api.get).toHaveBeenCalledWith(
    PLUGIN_MODEL_FIELDS_API_ROUTE,
    { id: "pages/about" },
    { silent: true },
  );
  expect(fields.map((field) => field.name)).toEqual(["text"]);
});
