import type { ActiveField, OutputFormat, PromptContext } from "../types";
import { usePanel } from "kirbyuse";
import { ensurePlaygroundApiKey, runTextGeneration } from "../composables";
import { getFieldPath, openPromptDialog } from "../utils";

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
  const activeField = getActiveField();

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("Generating text for field:", {
      selection,
      activeField,
      responseFormat,
    });
  }

  if (!ensurePlaygroundApiKey()) return;

  const promptContext = await openPromptDialog<PromptContext>({
    selection,
    activeField,
  });
  if (!promptContext) return;

  const { prompt, files } = promptContext;
  if (!prompt) return;

  let isFirstInsertion = true;

  if (activeField) activeField.element.dataset.copilot = "generating";

  const run = runTextGeneration({
    streamOptions: {
      userPrompt: prompt,
      selection,
      responseFormat,
      files,
    },
    escapeToAbort: true,
    sink: {
      write: (textPart) => {
        if (selection && promptContext.insertMode === "replace") {
          replaceText(textPart);
          return;
        }

        if (isFirstInsertion) {
          textPart =
            selection && !textPart.startsWith(" ") ? ` ${textPart}` : textPart;
          isFirstInsertion = false;
        }

        appendText(textPart);
      },
    },
  });

  await run?.done;
  if (activeField) delete activeField.element.dataset.copilot;
}

function getActiveField(): ActiveField | undefined {
  const focusedElement = document.activeElement;
  if (!(focusedElement instanceof HTMLElement)) return;

  const element = focusedElement.closest<HTMLElement>(".k-field");
  if (!element) return;

  // A block preview's input sits inside the blocks field's `.k-field`, so the
  // path starts at the input.
  return {
    element,
    path: getFieldPath(focusedElement, usePanel().drawer.props?.tabs),
  };
}
