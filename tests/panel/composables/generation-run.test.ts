import type { LanguageModelV3StreamPart } from "@ai-sdk/provider";
import { AISDKError, Output, simulateReadableStream } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import {
  runStructuredGeneration,
  runTextGeneration,
} from "../../../src/panel/composables/generation-run";
import { useSkills } from "../../../src/panel/composables/skills";

const panel = {
  isLoading: false,
  view: { title: "Test Page" },
  t: (key: string) => key,
  notification: {
    success: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
  },
};

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../helpers/mock-kirbyuse");
  return {
    ...baseKirbyuseMock(),
    usePanel: () => panel,
    useContent: () => ({
      currentContent: { value: {} },
    }),
  };
});

// Load the real AI SDK so runs stream through the same code path as production
vi.mock("../../../src/panel/utils/ai", () => ({
  loadAISDK: () => import("ai"),
}));

function createTextModel(deltas: string[]) {
  const chunks: LanguageModelV3StreamPart[] = [
    { type: "stream-start", warnings: [] },
    { type: "text-start", id: "1" },
    ...deltas.map(
      (delta): LanguageModelV3StreamPart => ({
        type: "text-delta",
        id: "1",
        delta,
      }),
    ),
    { type: "text-end", id: "1" },
    {
      type: "finish",
      finishReason: { unified: "stop", raw: undefined },
      usage: {
        inputTokens: {
          total: 1,
          noCache: undefined,
          cacheRead: undefined,
          cacheWrite: undefined,
        },
        outputTokens: { total: 1, text: undefined, reasoning: undefined },
      },
    },
  ];

  return new MockLanguageModelV3({
    doStream: async () => ({
      stream: simulateReadableStream({ chunks }),
    }),
  });
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.unstubAllGlobals();
  panel.isLoading = false;
  useSkills().setConfigSkills([]);
});

describe("runTextGeneration", () => {
  it("streams every delta into the sink and reports success once", async () => {
    const writtenDeltas: string[] = [];
    let isLoadingDuringStream: boolean | undefined;

    const run = runTextGeneration({
      streamOptions: {
        userPrompt: "Write a haiku",
        model: createTextModel(["Silent", " pond"]),
      },
      sink: {
        write: (delta) => {
          isLoadingDuringStream ??= panel.isLoading;
          writtenDeltas.push(delta);
        },
      },
    });

    expect(run).toBeDefined();
    await run!.done;

    expect(writtenDeltas.join("")).toBe("Silent pond");
    expect(isLoadingDuringStream).toBe(true);
    expect(panel.isLoading).toBe(false);
    expect(panel.notification.success).toHaveBeenCalledOnce();
    expect(panel.notification.error).not.toHaveBeenCalled();
  });

  it("stops writing and suppresses all notifications when aborted mid-stream", async () => {
    const writtenDeltas: string[] = [];

    const run = runTextGeneration({
      streamOptions: {
        userPrompt: "Write",
        model: createTextModel(["First line\n", "Second line\n"]),
      },
      sink: {
        write: (delta) => {
          writtenDeltas.push(delta);
          run!.abort();
        },
      },
    });

    await run!.done;

    expect(writtenDeltas).toEqual(["First line\n"]);
    expect(panel.notification.success).not.toHaveBeenCalled();
    expect(panel.notification.error).not.toHaveBeenCalled();
    expect(panel.isLoading).toBe(false);
  });

  it("surfaces stream failures as an error notification and clears the loading state", async () => {
    const failingModel = new MockLanguageModelV3({
      doStream: async () => ({
        stream: simulateReadableStream({
          chunks: [
            { type: "stream-start" as const, warnings: [] },
            {
              type: "error" as const,
              error: new AISDKError({
                name: "TestUpstreamError",
                message: "Upstream exploded",
              }),
            },
          ],
        }),
      }),
    });

    const run = runTextGeneration({
      streamOptions: { userPrompt: "Write", model: failingModel },
      sink: { write: () => {} },
    });

    await run!.done;

    expect(panel.notification.error).toHaveBeenCalledWith("Upstream exploded");
    expect(panel.notification.success).not.toHaveBeenCalled();
    expect(panel.isLoading).toBe(false);
  });

  it("persists the result once after streaming when the sink provides persistFinal", async () => {
    const events: string[] = [];

    const run = runTextGeneration({
      streamOptions: {
        userPrompt: "Write",
        model: createTextModel(["First line\n", "Second line\n"]),
      },
      sink: {
        write: () => {
          events.push("write");
        },
        persistFinal: () => {
          events.push("persist");
        },
      },
    });

    await run!.done;

    expect(events).toEqual(["write", "write", "persist"]);
    expect(panel.notification.success).toHaveBeenCalledOnce();
  });

  it("skips the final persist when aborted after the stream completed", async () => {
    const persistFinal = vi.fn();

    const run = runTextGeneration({
      streamOptions: {
        userPrompt: "Write",
        model: createTextModel(["Only line\n"]),
      },
      sink: {
        // Aborting inside the last write simulates a cancellation that lands
        // between the final chunk and the persisting write.
        write: () => run!.abort(),
        persistFinal,
      },
    });

    await run!.done;

    expect(persistFinal).not.toHaveBeenCalled();
    expect(panel.notification.success).not.toHaveBeenCalled();
  });

  it("aborts on Escape while running and detaches the listener afterwards", async () => {
    const keydownListeners = new Set<(event: { key: string }) => void>();
    vi.stubGlobal("document", {
      addEventListener: (type: string, handler: never) => {
        if (type === "keydown") keydownListeners.add(handler);
      },
      removeEventListener: (type: string, handler: never) => {
        if (type === "keydown") keydownListeners.delete(handler);
      },
    });

    const writtenDeltas: string[] = [];

    const run = runTextGeneration({
      streamOptions: {
        userPrompt: "Write",
        model: createTextModel(["First line\n", "Second line\n"]),
      },
      escapeToAbort: true,
      sink: {
        write: (delta) => {
          writtenDeltas.push(delta);
          for (const listener of keydownListeners) listener({ key: "Escape" });
        },
      },
    });

    await run!.done;

    expect(writtenDeltas).toEqual(["First line\n"]);
    expect(panel.notification.success).not.toHaveBeenCalled();
    expect(keydownListeners.size).toBe(0);
  });
});

describe("generation run single-flight", () => {
  it("ignores a second run while one is active and accepts runs again afterwards", async () => {
    const rejectedSinkWrite = vi.fn();
    let rejectedRun: unknown = "unset";

    const activeRun = runTextGeneration({
      streamOptions: {
        userPrompt: "Write",
        model: createTextModel(["Only line\n"]),
      },
      sink: {
        write: () => {
          rejectedRun = runTextGeneration({
            streamOptions: {
              userPrompt: "Write again",
              model: createTextModel(["Never streamed\n"]),
            },
            sink: { write: rejectedSinkWrite },
          });
        },
      },
    });

    await activeRun!.done;

    expect(rejectedRun).toBeUndefined();
    expect(rejectedSinkWrite).not.toHaveBeenCalled();
    expect(panel.notification.info).toHaveBeenCalledWith(
      "johannschopplich.copilot.notification.running",
    );
    expect(panel.notification.success).toHaveBeenCalledOnce();

    const followUpRun = runTextGeneration({
      streamOptions: {
        userPrompt: "Write later",
        model: createTextModel(["Accepted\n"]),
      },
      sink: { write: () => {} },
    });

    expect(followUpRun).toBeDefined();
    await followUpRun!.done;
  });
});

describe("runStructuredGeneration", () => {
  it("streams partial objects into the sink and persists the validated result once", async () => {
    const writtenPartials: unknown[] = [];
    const persistedResults: unknown[] = [];

    const run = runStructuredGeneration({
      streamOptions: {
        userPrompt: "Fill the fields",
        model: createTextModel(['{"title":', '"Quiet', ' garden"}']),
        output: Output.object({ schema: z.object({ title: z.string() }) }),
      },
      sink: {
        writePartial: (partial) => {
          writtenPartials.push(partial);
        },
        persistFinal: (final) => {
          persistedResults.push(final);
        },
      },
    });

    expect(run).toBeDefined();
    await run!.done;

    expect(writtenPartials.length).toBeGreaterThan(0);
    expect(writtenPartials.at(-1)).toEqual({ title: "Quiet garden" });
    expect(persistedResults).toEqual([{ title: "Quiet garden" }]);
    expect(panel.notification.success).toHaveBeenCalledOnce();
    expect(panel.notification.error).not.toHaveBeenCalled();
  });

  it("skips the persisting write and stays silent when aborted during streaming", async () => {
    const persistFinal = vi.fn();

    const run = runStructuredGeneration({
      streamOptions: {
        userPrompt: "Fill the fields",
        model: createTextModel(['{"title":', '"Quiet', ' garden"}']),
        output: Output.object({ schema: z.object({ title: z.string() }) }),
      },
      sink: {
        // Aborting before `output` settles also exercises the unhandled
        // rejection guard; Vitest fails the test if the rejection leaks
        writePartial: () => run!.abort(),
        persistFinal,
      },
    });

    await run!.done;

    expect(persistFinal).not.toHaveBeenCalled();
    expect(panel.notification.success).not.toHaveBeenCalled();
    expect(panel.notification.error).not.toHaveBeenCalled();
    expect(panel.isLoading).toBe(false);
  });
});
