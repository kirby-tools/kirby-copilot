import type { ActiveField, OutputFormat, PromptContext } from "../types";
import { usePanel } from "kirbyuse";
import { usePluginContext, useStreamText } from "../composables";
import { DEFAULT_SYSTEM_PROMPT, STORAGE_KEY_PREFIX } from "../constants";
import { buildUserPrompt, handleStreamError, openPromptDialog } from "../utils";

/** Streams AI-generated text into the active field. */
export async function streamTextToField(
  selection: string | undefined,
  {
    appendText,
    replaceText,
    responseFormat = "text",
  }: {
    appendText: (text: string) => void;
    replaceText: (text: string) => void;
    responseFormat?: OutputFormat;
  },
) {
  const panel = usePanel();
  const activeField = getActiveField();

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("Generating text for field:", {
      selection,
      activeField,
      responseFormat,
    });
  }

  if (__PLAYGROUND__ && !window.location.hostname.includes("localhost")) {
    const apiKey = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`);
    if (!apiKey) {
      panel.notification.error(
        "Please set your API key in the playground settings.",
      );
      return;
    }
  }

  const abortController = new AbortController();

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      abortController.abort();
    }
  };

  const promptContext = await openPromptDialog<PromptContext>({
    selection,
    activeField,
  });
  if (!promptContext) return;

  const { prompt, files } = promptContext;
  if (!prompt) return;

  if (activeField) activeField.element.dataset.copilot = "generating";
  document.addEventListener("keydown", handleEscape);
  panel.isLoading = true;

  const { config } = await usePluginContext();

  // Capture signal reference to detect if generation gets cancelled
  const { signal } = abortController;

  try {
    const { textStream } = await useStreamText({
      userPrompt: buildUserPrompt(prompt, { responseFormat, selection }),
      systemPrompt: config.systemPrompt || DEFAULT_SYSTEM_PROMPT,
      responseFormat,
      files,
      abortSignal: signal,
    });

    let isFirstInsertion = true;

    for await (let textPart of textStream) {
      if (signal.aborted) return;

      if (selection && promptContext.insertMode === "replace") {
        replaceText(textPart);
      } else {
        if (isFirstInsertion) {
          textPart =
            selection && !textPart.startsWith(" ") ? ` ${textPart}` : textPart;
          isFirstInsertion = false;
        }

        appendText(textPart);
      }
    }

    // Handle cancellation before stream started or after it completed
    if (signal.aborted) return;

    panel.notification.success({
      icon: "check",
      message: panel.t("johannschopplich.copilot.notification.success"),
    });
  } catch (error) {
    if (signal.aborted) return;
    await handleStreamError(error as Error);
  } finally {
    if (activeField) delete activeField.element.dataset.copilot;
    document.removeEventListener("keydown", handleEscape);
    panel.isLoading = false;
  }
}

/** Gets the active field element and its metadata from the Panel. */
export function getActiveField(): ActiveField | undefined {
  const element = document.activeElement?.closest<HTMLElement>(".k-field");
  if (!element) return;

  const nameClass = [...element.classList].find((c) =>
    c.startsWith("k-field-name-"),
  );
  const typeClass = [...element.classList].find((c) =>
    c.startsWith("k-field-type-"),
  );

  const name = nameClass?.replace("k-field-name-", "");
  const type = typeClass?.replace("k-field-type-", "");

  return name ? { element, name, type } : undefined;
}
