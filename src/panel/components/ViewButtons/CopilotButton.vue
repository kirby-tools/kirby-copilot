<script setup>
import { loadPluginModule, ref, useContent, usePanel } from "kirbyuse";
import { z } from "zod";
import {
  useBlocks,
  useFields,
  useLayouts,
  usePluginContext,
  useStreamText,
} from "../../composables";
import {
  DEFAULT_LOG_LEVEL,
  DEFAULT_SYSTEM_PROMPT,
  LOG_LEVELS,
  STORAGE_KEY_PREFIX,
} from "../../constants";
import {
  pauseCompletion,
  resumeCompletion,
} from "../../extensions/writer-marks/copilot-suggestions";
import { fieldToZodSchema } from "../../schemas/fields";
import { openPromptDialog } from "../../utils/dialog";
import { handleStreamError } from "../../utils/error";

const props = defineProps({
  label: String,
  userPrompt: String,
  systemPrompt: String,
  logLevel: String,
  icon: {
    type: String,
    default: "sparkling",
  },
  theme: {
    type: String,
    default: "notice-icon",
  },
});

const panel = usePanel();
const { currentContent, update: updateContent } = useContent();
const { getViewFields } = useFields();

const isGenerating = ref(false);
const isHovering = ref(false);
let abortController;

async function initPromptDialog() {
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

  abortController = new AbortController();

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      abort();
    }
  };

  const fields = await getViewFields();

  if (fields.length === 0) {
    panel.notification.error(panel.t("johannschopplich.copilot.fields.empty"));
    return;
  }

  const promptContext = await openPromptDialog({
    fields,
    userPrompt: props.userPrompt,
  });
  if (!promptContext) return;

  const { prompt, files, selectedFieldNames } = promptContext;
  const selectedFields = fields.filter((field) =>
    selectedFieldNames.includes(field.name),
  );
  if (!prompt || selectedFields.length === 0) return;

  const { getZodSchema: getBlocksZodSchema } = useBlocks();
  const { getZodSchema: getLayoutZodSchema } = useLayouts();

  // Build schema for all selected fields
  const fieldsSchema = {};

  for (const field of selectedFields) {
    fieldsSchema[field.name] =
      field.type === "layout"
        ? z.array(await getLayoutZodSchema(field))
        : field.type === "blocks"
          ? z.array(await getBlocksZodSchema(field))
          : fieldToZodSchema(field);
  }

  panel.isLoading = true;
  isGenerating.value = true;
  pauseCompletion();
  document.addEventListener("keydown", handleEscape);

  const _currentContent = { ...currentContent.value };

  const { config } = await usePluginContext();
  const { Output } = await loadPluginModule("ai");

  const systemPrompt =
    props.systemPrompt || config.systemPrompt || DEFAULT_SYSTEM_PROMPT;

  // Capture signal reference to detect if generation gets cancelled
  const { signal } = abortController;

  try {
    const { partialOutputStream, output: finalOutput } = await useStreamText({
      userPrompt: prompt,
      systemPrompt,
      output: Output.object({ schema: z.object(fieldsSchema) }),
      files,
      logLevel: LOG_LEVELS.indexOf(
        props.logLevel && LOG_LEVELS.includes(props.logLevel)
          ? props.logLevel
          : config.logLevel && LOG_LEVELS.includes(config.logLevel)
            ? config.logLevel
            : DEFAULT_LOG_LEVEL,
      ),
      abortSignal: signal,
    });

    // Prevent unhandled rejection when aborting before `finalOutput` is awaited
    finalOutput.catch(() => {});

    // Stream partial updates
    for await (const partialOutput of partialOutputStream) {
      if (signal.aborted) return;
      if (!partialOutput) continue;

      const updatedContent = processFieldValues({
        object: partialOutput,
        selectedFields,
        currentContent: _currentContent,
      });

      if (Object.keys(updatedContent).length > 0) {
        await updateContent(
          updatedContent,
          // Disable saving content to storage in Kirby 5
          false,
        );
      }
    }

    // Handle cancellation before stream started or after it completed
    if (signal.aborted) return;

    // Set final result
    const structuredOutput = await finalOutput;
    const finalContent = processFieldValues({
      object: structuredOutput,
      selectedFields,
      currentContent: _currentContent,
    });

    // Store the final content
    await updateContent(finalContent);

    panel.notification.success({
      icon: "check",
      message: panel.t("johannschopplich.copilot.notification.success"),
    });
  } catch (error) {
    if (signal.aborted) return;
    await handleStreamError(error);
  } finally {
    abortController = undefined;
    panel.isLoading = false;
    isGenerating.value = false;
    resumeCompletion();
    document.removeEventListener("keydown", handleEscape);
  }
}

function abort() {
  abortController?.abort();
  abortController = undefined;
  isGenerating.value = false;
  panel.isLoading = false;
}

function processFieldValues({ object, selectedFields, currentContent }) {
  const { normalizeBlock } = useBlocks();
  const { normalizeLayout } = useLayouts();

  const processedContent = {};

  for (const field of selectedFields) {
    const fieldValue = object[field.name];
    if (fieldValue == null) continue;

    const currentFieldContent = currentContent[field.name];
    const normalizer =
      field.type === "layout" ? normalizeLayout : normalizeBlock;

    // Handle layouts and blocks field normalization
    if (field.type === "layout" || field.type === "blocks") {
      if (Array.isArray(fieldValue)) {
        processedContent[field.name] = [
          ...currentFieldContent,
          ...fieldValue.map(normalizer),
        ];
      }
    } else {
      processedContent[field.name] = fieldValue;
    }
  }

  return processedContent;
}
</script>

<template>
  <k-button
    :icon="
      isHovering && isGenerating ? 'cancel' : isGenerating ? 'loader' : icon
    "
    :text="label || panel.t('johannschopplich.copilot.label')"
    :theme="isHovering && isGenerating ? 'notice' : theme"
    variant="filled"
    size="sm"
    responsive
    @mouseenter.native="isHovering = true"
    @mouseleave.native="isHovering = false"
    @click="isHovering && isGenerating ? abort() : initPromptDialog()"
  >
  </k-button>
</template>
