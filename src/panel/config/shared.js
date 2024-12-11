import { usePanel } from "kirbyuse";
import { useStreamText } from "../composables";
import { SYSTEM_PROMPT_PROMPT_DIALOG } from "../constants";
import { TextSelector } from "../utils/text-selector";

export async function generateAndInsertText(insertFn) {
  const selection = TextSelector.getSelectedText();
  const panel = usePanel();
  const abortController = new AbortController();

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      abortController.abort();
    }
  };

  const promptContext = await openPromptDialog();
  if (!promptContext) return;

  const { prompt, files } = promptContext;
  if (!prompt) return;

  panel.isLoading = true;
  document.addEventListener("keydown", handleEscape);

  try {
    const { textStream } = await useStreamText({
      userPrompt: `
${prompt}
${selection ? `\n<selected_text>\n${selection}\n</selected_text>` : ""}
`.trim(),
      systemPrompt: SYSTEM_PROMPT_PROMPT_DIALOG,
      files,
      abortSignal: abortController.signal,
    });

    for await (const textPart of textStream) {
      insertFn(textPart);
    }

    panel.notification.success({
      icon: "sparkling",
      message: panel.t("johannschopplich.copilot.generator.success"),
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") return;

    if (error instanceof Error && error.name === "ApiCallError") {
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

export async function openPromptDialog() {
  return new Promise((resolve) => {
    const panel = usePanel();
    let result;

    panel.dialog.open({
      component: "k-copilot-prompt-dialog",
      on: {
        close: () => {
          resolve(result);
        },
        submit: (event) => {
          result = event;
          panel.dialog.close();
        },
      },
    });
  });
}
