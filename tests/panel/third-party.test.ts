import type { LanguageModelV4StreamPart } from "@ai-sdk/provider";
import { AISDKError, simulateReadableStream } from "ai";
import { MockLanguageModelV4 } from "ai/test";
import { describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { copilotThirdPartyApi } from "../../src/panel/third-party";
import contract from "../fixtures/copilot-seam-contract.json";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("./helpers/mock-kirbyuse");
  return {
    ...baseKirbyuseMock(),
    usePanel: () => ({ view: { title: "Test Page" } }),
    useContent: () => ({ currentContent: { value: {} } }),
  };
});

// Load the real AI SDK so the seam streams through the same code path as
// production.
vi.mock("../../src/panel/utils/ai", () => ({
  loadAISDK: () => import("ai"),
}));

vi.mock("../../src/panel/composables/plugin", () => ({
  usePluginContext: () => Promise.resolve({ config: {} }),
}));

/** Streams a complete object, then fails without ever finishing the run. */
function createModelFailingAfterOutput(error: unknown) {
  const chunks: LanguageModelV4StreamPart[] = [
    { type: "stream-start", warnings: [] },
    { type: "text-start", id: "1" },
    { type: "text-delta", id: "1", delta: '{"title":"Quiet garden"}' },
    { type: "error", error },
  ];

  return new MockLanguageModelV4({
    doStream: async () => ({
      stream: simulateReadableStream({ chunks }),
    }),
  });
}

describe("third-party seam contract", () => {
  it("matches the contract fixture mirrored in Kirby Content Translator", () => {
    expect(copilotThirdPartyApi.apiVersion).toBe(contract.apiVersion);

    for (const method of contract.methods) {
      expect(
        copilotThirdPartyApi[method as keyof typeof copilotThirdPartyApi],
      ).toBeTypeOf("function");
    }
  });

  it("exposes every streamText result key the fixture pins", async () => {
    const result = await copilotThirdPartyApi.streamText({
      userPrompt: "Fill the fields",
      model: createModelFailingAfterOutput(new Error("unused")),
      outputSchema: z.object({ title: z.string() }),
    });

    // `in` over a property read, so the assertion never starts a stream the
    // test does not await.
    for (const key of contract.streamTextResult) {
      expect(key in result).toBe(true);
    }
  });

  it("rejects output with the provider error when the run fails after a complete object", async () => {
    const { output } = await copilotThirdPartyApi.streamText({
      userPrompt: "Fill the fields",
      model: createModelFailingAfterOutput(
        new AISDKError({
          name: "TestUpstreamError",
          message: "Upstream exploded",
        }),
      ),
      outputSchema: z.object({ title: z.string() }),
    });

    await expect(output).rejects.toThrow("Upstream exploded");
  });
});
