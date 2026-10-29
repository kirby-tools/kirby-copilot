import { expect, it, vi } from "vitest";
import { useModelFields } from "../../../src/panel/composables/model-fields";
import { field } from "../utils";

const api = { get: vi.fn() };

vi.mock("kirbyuse", () => ({
  usePanel: () => ({ api, view: { path: "pages/about" } }),
}));

it("drops the fields that save no value", async () => {
  api.get.mockResolvedValue({
    text: field({ type: "textarea", name: "text" }),
    copilot: field({ type: "copilot", name: "copilot", saveable: false }),
    children: field({ type: "pagelist", name: "children", saveable: false }),
  });

  const fields = await useModelFields().getModelFields();

  expect(fields.map((field) => field.name)).toEqual(["text"]);
});
