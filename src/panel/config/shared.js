import { isAbortError } from "@ai-sdk/provider-utils";
import { loadPluginModule, usePanel } from "kirbyuse";
import { usePluginContext, useStreamText } from "../composables";
import { DEFAULT_SYSTEM_PROMPT, STORAGE_KEY_PREFIX } from "../constants";
import { CopilotError } from "../utils/error";

export async function generateAndInsertText(
  selection,
  { appendText, replaceText, responseFormat = "text" },
) {
  const panel = usePanel();
  const fieldMeta = getFieldMetadata();

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("Generating text for field:", {
      selection,
      fieldMeta,
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

  const promptContext = await openPromptDialog({ selection, fieldMeta });
  if (!promptContext) return;

  const { prompt, files } = promptContext;
  if (!prompt) return;

  panel.isLoading = true;
  document.addEventListener("keydown", handleEscape);

  const { config } = await usePluginContext();
  const { AISDKError, APICallError } = await loadPluginModule("ai");

  try {
    const { textStream } = await useStreamText({
      userPrompt: [
        `<response_format>\n${responseFormat}\n</response_format>`,
        selection && `<selected_text>\n${selection}\n</selected_text>`,
        prompt,
      ]
        .filter(Boolean)
        .join("\n\n"),
      systemPrompt: config.systemPrompt || DEFAULT_SYSTEM_PROMPT,
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
 * Extracts the current field name and type from the active element in the Panel
 */
function getFieldMetadata() {
  const fieldElement = document.activeElement?.closest(".k-field");
  if (!fieldElement) return;

  const fieldNameClass = [...fieldElement.classList].find((i) =>
    i.startsWith("k-field-name-"),
  );
  const fieldTypeClass = [...fieldElement.classList].find((i) =>
    i.startsWith("k-field-type-"),
  );

  const name = fieldNameClass?.replace("k-field-name-", "");
  const type = fieldTypeClass?.replace("k-field-type-", "");

  return name ? { name, type } : undefined;
}
