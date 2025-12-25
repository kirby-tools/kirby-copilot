import { isAbortError } from "@ai-sdk/provider-utils";
import { loadPluginModule, usePanel } from "kirbyuse";
import { usePluginContext, useStreamText } from "../composables";
import { DEFAULT_SYSTEM_PROMPT, STORAGE_KEY_PREFIX } from "../constants";
import { CopilotError } from "../utils/error";

const GENERATING_CLASS = "k-copilot-generating";

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

  // Show loading indicator on field
  injectGeneratingStyles();
  activeField?.element.classList.add(GENERATING_CLASS);

  panel.isLoading = true;
  document.addEventListener("keydown", handleEscape);

  const { config } = await usePluginContext();
  const { AISDKError, APICallError } = await loadPluginModule("ai");

  try {
    const { textStream } = await useStreamText({
      userPrompt: [
        `<response_format>\n${responseFormat}\n</response_format>`,
        selection && `<selection>\n${selection}\n</selection>`,
        prompt,
      ]
        .filter(Boolean)
        .join("\n\n"),
      systemPrompt: config.systemPrompt || DEFAULT_SYSTEM_PROMPT,
      responseFormat,
      files,
      abortSignal: abortController.signal,
    });

    let isFirstInsertion = true;

    for await (let textPart of textStream) {
      if (promptContext.append) {
        if (isFirstInsertion) {
          textPart = selection ? ` ${textPart}` : textPart;
          isFirstInsertion = false;
        }

        appendText(textPart);
      } else {
        replaceText(textPart);
      }
    }

    panel.notification.success({
      icon: "sparkling",
      message: panel.t("johannschopplich.copilot.generator.success"),
    });
  } catch (error) {
    if (isAbortError(error)) return;

    if (
      error instanceof CopilotError ||
      AISDKError.isInstance(error) ||
      APICallError.isInstance(error)
    ) {
      console.error(error);
      panel.notification.error(error.message);
      return;
    }

    console.error(error);
    panel.notification.error(
      panel.t("johannschopplich.copilot.generator.error"),
    );
  } finally {
    activeField?.element.classList.remove(GENERATING_CLASS);
    panel.isLoading = false;
    document.removeEventListener("keydown", handleEscape);
  }
}

export async function openPromptDialog(props = {}) {
  return new Promise((resolve) => {
    const panel = usePanel();
    let result;

    panel.dialog.open({
      component: "k-copilot-prompt-dialog",
      props,
      on: {
        close: () => {
          setTimeout(() => {
            resolve(result);
          }, 25);
        },
        submit: (event) => {
          result = event;
          panel.dialog.close();
        },
      },
    });
  });
}

/**
 * Gets the active field element and its metadata from the Panel.
 *
 * @returns {{ element: HTMLElement, name: string, type: string } | undefined} The active field object or undefined if not found
 */
function getActiveField() {
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

let cssInjected = false;

function injectGeneratingStyles() {
  if (cssInjected) return;
  cssInjected = true;

  const style = document.createElement("style");
  style.textContent = `
.k-field.${GENERATING_CLASS} .k-input {
  animation: k-copilot-pulse 1.5s ease-in-out infinite;
}
@keyframes k-copilot-pulse {
  0%, 100% { outline: 2px solid transparent; outline-offset: 0; }
  50% { outline: 2px solid var(--color-focus); outline-offset: 0; }
}
`.trimStart();
  document.head.appendChild(style);
}
