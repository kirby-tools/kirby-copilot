import { loadPluginModule, usePanel } from "kirbyuse";
import {
  openPromptDialog,
  usePluginContext,
  useStreamText,
} from "../composables";
import { DEFAULT_SYSTEM_PROMPT, STORAGE_KEY_PREFIX } from "../constants";
import { CopilotError } from "../utils/error";
import { buildUserPrompt } from "../utils/models";

/**
 * Generates AI text and inserts it into the active field.
 *
 * @param {string} [selection] - Currently selected text to use as context
 * @param {object} options
 * @param {(text: string) => void} options.appendText - Callback to append text
 * @param {(text: string) => void} options.replaceText - Callback to replace text
 * @param {import("../types.js").OutputFormat} [options.responseFormat] - Output format for the generated content
 */
export async function generateAndInsertText(
  selection,
  { appendText, replaceText, responseFormat = "text" },
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

  // eslint-disable-next-line no-undef
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

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      abortController.abort();
    }
  };

  const promptContext = await openPromptDialog({ selection, activeField });
  if (!promptContext) return;

  const { prompt, files } = promptContext;
  if (!prompt) return;

  if (activeField) activeField.element.dataset.copilot = "generating";
  document.addEventListener("keydown", handleEscape);
  panel.isLoading = true;

  const { config } = await usePluginContext();
  const { AISDKError } = await loadPluginModule("ai");

  // Capture signal reference to detect if generation gets cancelled
  const { signal } = abortController;

  try {
    const { textStream } = await useStreamText({
      userPrompt: buildUserPrompt(prompt, { responseFormat, selection }),
      systemPrompt: config.systemPrompt || DEFAULT_SYSTEM_PROMPT,
      responseFormat,
      files,
      abortSignal: abortController.signal,
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

    if (error instanceof CopilotError || AISDKError.isInstance(error)) {
      console.error(error);
      panel.notification.error(error.message);
      return;
    }

    console.error(error);
    panel.notification.error(
      panel.t("johannschopplich.copilot.notification.error"),
    );
  } finally {
    if (activeField) delete activeField.element.dataset.copilot;
    document.removeEventListener("keydown", handleEscape);
    panel.isLoading = false;
  }
}

/**
 * Gets the active field element and its metadata from the Panel.
 *
 * @returns {import("../types.js").ActiveField | undefined} The active field object or undefined if not found
 */
export function getActiveField() {
  const element = document.activeElement?.closest(".k-field");
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
