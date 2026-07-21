import { describe, expect, it, vi } from "vitest";
import { copilotThirdPartyApi } from "../../src/panel/third-party";
import contract from "../fixtures/copilot-seam-contract.json";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("./helpers/mock-kirbyuse");
  return baseKirbyuseMock();
});

describe("third-party seam contract", () => {
  it("matches the contract fixture mirrored in Kirby Content Translator", () => {
    expect(copilotThirdPartyApi.apiVersion).toBe(contract.apiVersion);

    for (const method of contract.methods) {
      expect(
        copilotThirdPartyApi[method as keyof typeof copilotThirdPartyApi],
      ).toBeTypeOf("function");
    }
  });
});
