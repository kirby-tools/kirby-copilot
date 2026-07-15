import type { ActiveField, OutputFormat, PromptContext } from "../types";
import {
  buildUserPrompt,
  ensurePlaygroundApiKey,
  runTextGeneration,
  usePluginContext,
} from "../composables";
import { DEFAULT_SYSTEM_PROMPT } from "../constants";
import { openPromptDialog } from "../utils";

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

  const { config } = await usePluginContext();

  let isFirstInsertion = true;

  if (activeField) activeField.element.dataset.copilot = "generating";

  const run = runTextGeneration({
    streamOptions: {
      userPrompt: buildUserPrompt(prompt, { responseFormat, selection }),
      systemPrompt: config.systemPrompt || DEFAULT_SYSTEM_PROMPT,
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
