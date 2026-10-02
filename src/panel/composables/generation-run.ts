import type { LogLevel as LogLevelIndex } from "kirbyuse";
import type { LogLevel } from "../constants";
import { usePanel } from "kirbyuse";
import {
  DEFAULT_LOG_LEVEL,
  DEFAULT_SYSTEM_PROMPT,
  LOG_LEVELS,
  STORAGE_KEY_PREFIX,
} from "../constants";
import { handleStreamError } from "../utils/error";
import { resolveEditorPrompt, useStreamText } from "./ai";
import { usePluginContext } from "./plugin";

type StreamTextOptions = Omit<
  Parameters<typeof useStreamText>[0],
  "abortSignal" | "logLevel"
> & {
  /** Text selected in a field, sent as is next to the editor prompt. */
  selection?: string;
  /** Per-run override of the global `logLevel` option. */
  logLevel?: LogLevel;
};

export interface GenerationRun {
  /** Settles when the run has finished, was aborted, or failed. */
  done: Promise<void>;
  abort: () => void;
}

export interface GenerationRunOptions {
  /**
   * Whether to abort the run when the user presses Escape. Callers that open a
   * prompt dialog must start the run only after the dialog has closed, so
   * Escape-to-cancel-dialog never reaches this listener.
   */
  escapeToAbort?: boolean;
}

export interface TextGenerationSink {
  write: (delta: string) => void | Promise<void>;
  /** Persisting write after the stream completed; skipped when aborted. */
  persistFinal?: () => void | Promise<void>;
}

export interface StructuredGenerationSink {
  writePartial: (partial: unknown) => void | Promise<void>;
  /** Persisting write of the validated final output; skipped when aborted. */
  persistFinal: (final: unknown) => void | Promise<void>;
}

let hasActiveRun = false;

export function ensurePlaygroundApiKey(): boolean {
  if (!__PLAYGROUND__ || window.location.hostname.includes("localhost")) {
    return true;
  }

  if (sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`)) {
    return true;
  }

  usePanel().notification.error(
    "Please set your API key in the playground settings.",
  );
  return false;
}

export function runTextGeneration({
  streamOptions,
  sink,
  ...runOptions
}: GenerationRunOptions & {
  streamOptions: StreamTextOptions;
  sink: TextGenerationSink;
}): GenerationRun | undefined {
  return startGenerationRun(runOptions, async (signal) => {
    const { textStream } = await useStreamText({
      ...(await resolveStreamOptions(streamOptions)),
      abortSignal: signal,
    });

    for await (const delta of textStream) {
      if (signal.aborted) return;
      await sink.write(delta);
    }

    if (signal.aborted) return;

    await sink.persistFinal?.();
  });
}

export function runStructuredGeneration({
  streamOptions,
  sink,
  ...runOptions
}: GenerationRunOptions & {
  streamOptions: StreamTextOptions & {
    output: NonNullable<StreamTextOptions["output"]>;
  };
  sink: StructuredGenerationSink;
}): GenerationRun | undefined {
  return startGenerationRun(runOptions, async (signal) => {
    const { partialOutputStream, output: finalOutput } = await useStreamText({
      ...(await resolveStreamOptions(streamOptions)),
      abortSignal: signal,
    });

    // A run that fails or is aborted rejects `finalOutput` before the loop
    // below reaches it, which would surface as an unhandled rejection.
    finalOutput.catch(() => {});

    for await (const partialOutput of partialOutputStream) {
      if (signal.aborted) return;
      await sink.writePartial(partialOutput);
    }

    if (signal.aborted) return;

    const structuredOutput = await finalOutput;

    // Abort must never reach the persisting write.
    if (signal.aborted) return;
    await sink.persistFinal(structuredOutput);
  });
}

function startGenerationRun(
  { escapeToAbort = false }: GenerationRunOptions,
  execute: (signal: AbortSignal) => Promise<void>,
): GenerationRun | undefined {
  if (hasActiveRun) {
    const panel = usePanel();
    panel.notification.info(
      panel.t("johannschopplich.copilot.notification.running"),
    );
    return;
  }

  hasActiveRun = true;

  const abortController = new AbortController();
  const { signal } = abortController;

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      abortController.abort();
    }
  };

  const done = (async () => {
    const panel = usePanel();
    panel.isLoading = true;
    if (escapeToAbort) document.addEventListener("keydown", handleEscape);

    try {
      await execute(signal);

      if (signal.aborted) return;

      panel.notification.success({
        icon: "check",
        message: panel.t("johannschopplich.copilot.notification.success"),
      });
    } catch (error) {
      if (signal.aborted) return;
      await handleStreamError(error as Error);
    } finally {
      if (escapeToAbort) document.removeEventListener("keydown", handleEscape);
      hasActiveRun = false;
      panel.isLoading = false;
    }
  })();

  return {
    done,
    abort: () => abortController.abort(),
  };
}

async function resolveStreamOptions({
  systemPrompt,
  logLevel,
  ...streamOptions
}: StreamTextOptions) {
  const { config } = await usePluginContext();

  return {
    ...streamOptions,
    ...(await resolveEditorPrompt({
      ...streamOptions,
      systemPrompt:
        systemPrompt || config.systemPrompt || DEFAULT_SYSTEM_PROMPT,
    })),
    logLevel: LOG_LEVELS.indexOf(
      logLevel && LOG_LEVELS.includes(logLevel)
        ? logLevel
        : (config.logLevel ?? DEFAULT_LOG_LEVEL),
    ) as LogLevelIndex,
  };
}
