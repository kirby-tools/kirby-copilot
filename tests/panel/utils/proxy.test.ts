import { describe, expect, it, vi } from "vitest";
import { PROXY_ERROR_MARKER } from "../../../src/panel/constants";
import { CopilotError } from "../../../src/panel/utils/error";
import { watchForProxyError } from "../../../src/panel/utils/proxy";

vi.mock("kirbyuse", () => ({
  loadPluginModule: vi.fn(),
  usePanel: vi.fn(),
}));

async function pipe(chunks: string[]) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    },
  }).pipeThrough(watchForProxyError());

  const output: string[] = [];
  for await (const chunk of stream) {
    output.push(decoder.decode(chunk));
  }
  return output;
}

describe("watchForProxyError", () => {
  it("passes chunks through unchanged", async () => {
    const chunks = ['data: {"delta":"Hi"}\n\n', "data: [DONE]\n\n"];

    const output = await pipe(chunks);

    expect(output).toEqual(chunks);
  });

  it("fails the stream with the message after the marker", async () => {
    const chunks = [
      'data: {"delta":"Hi"}\n\n',
      `: ${PROXY_ERROR_MARKER} Upstream request failed: Operation timed out\n\n`,
    ];

    const failure = pipe(chunks);

    await expect(failure).rejects.toBeInstanceOf(CopilotError);
    await expect(failure).rejects.toThrow(
      "Upstream request failed: Operation timed out",
    );
  });

  it("fails the stream on a marker split across two chunks", async () => {
    const line = `: ${PROXY_ERROR_MARKER} Upstream request failed: Operation timed out\n\n`;
    const chunks = [line.slice(0, 12), line.slice(12)];

    await expect(pipe(chunks)).rejects.toThrow(
      "Upstream request failed: Operation timed out",
    );
  });

  it("fails the stream on a marker line left open at close", async () => {
    const chunks = [`: ${PROXY_ERROR_MARKER} Upstream request failed`];

    await expect(pipe(chunks)).rejects.toThrow("Upstream request failed");
  });
});
