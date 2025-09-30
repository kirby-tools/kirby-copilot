<script setup>
import { isAbortError } from "@ai-sdk/provider-utils";
import { loadPluginModule, ref, useContent, usePanel } from "kirbyuse";
import { z } from "zod";
import {
  useBlocks,
  useLayouts,
  usePluginContext,
  useStreamObject,
} from "../../composables";
import { openPromptDialog } from "../../config/shared";
import {
  DEFAULT_LOG_LEVEL,
  LOG_LEVELS,
  PLUGIN_MODEL_FIELDS_API_ROUTE,
  STORAGE_KEY_PREFIX,
  SYSTEM_PROMPT,
} from "../../constants";
import { EXCLUDED_FIELD_TYPES, fieldToZodSchema } from "../../schemas/fields";
import { CopilotError } from "../../utils/error";

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  userPrompt: {
    type: String,
    required: false,
  },
  systemPrompt: {
    type: String,
    required: false,
  },
  logLevel: {
    type: String,
    default: "",
  },
  theme: {
    type: String,
    default: "notice-icon",
  },
});

const panel = usePanel();
const { currentContent, update: updateContent } = useContent();

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

  let fields = await panel.api.get(
    PLUGIN_MODEL_FIELDS_API_ROUTE,
    { id: panel.view.path },
    undefined,
    // Silent
    true,
  );

  fields = Object.values(fields).filter(
    (field) =>
      !EXCLUDED_FIELD_TYPES.has(field.type) && !field.disabled && !field.hidden,
  );

  if (fields.length === 0) {
    panel.notification.error(
      panel.t("johannschopplich.copilot.generator.noFields"),
    );
    return;
  }

  const promptContext = await openPromptDialog({
    fields,
    userPrompt: props.userPrompt,
  });
  if (!promptContext) return;

  const { prompt, files, fields: selectedFieldNames } = promptContext;
  const selectedFields = fields.filter((field) =>
    selectedFieldNames.includes(field.name),
  );
  if (!prompt || selectedFields.length === 0) return;

  const { getZodSchema: getBlocksZodSchema } = useBlocks();
  const { getZodSchema: getLayoutZodSchema } = useLayouts();

  // Build schema for all selected fields
  const fieldsSchema = {};

  for (const field of selectedFields) {
    if (field.type === "layout") {
      fieldsSchema[field.name] = z.array(await getLayoutZodSchema(field));
    } else if (field.type === "blocks") {
      fieldsSchema[field.name] = z.array(await getBlocksZodSchema(field));
    } else {
      fieldsSchema[field.name] = fieldToZodSchema(field);
    }
  }

  panel.isLoading = true;
  isGenerating.value = true;
  document.addEventListener("keydown", handleEscape);

  const _currentContent = { ...currentContent.value };

  const { config } = await usePluginContext();
  const { AISDKError, APICallError } = await loadPluginModule("ai");

  const systemPrompt =
    props.systemPrompt || config.systemPrompt || SYSTEM_PROMPT;

  try {
    const { partialObjectStream, object: finalObject } = await useStreamObject({
      userPrompt: prompt,
      systemPrompt,
      schema: z.object(fieldsSchema),
      output: "object",
      files,
      logLevel: LOG_LEVELS.indexOf(
        props.logLevel && LOG_LEVELS.includes(props.logLevel)
          ? props.logLevel
          : config.logLevel && LOG_LEVELS.includes(config.logLevel)
            ? config.logLevel
            : DEFAULT_LOG_LEVEL,
      ),
      abortSignal: abortController.signal,
    });

    // Stream partial updates
    for await (const partialObject of partialObjectStream) {
      if (!partialObject) continue;

      const updatedContent = processFieldValues({
        object: partialObject,
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

    // Set final result
    const structuredOutput = await finalObject;
    const finalContent = processFieldValues({
      object: structuredOutput,
      selectedFields,
      currentContent: _currentContent,
    });

    // Store the final content
    await updateContent(finalContent);

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
      let message = error.message;

      if (message.includes("levels of nesting exceeds limit")) {
        message =
          "The fields generation exceeds OpenAI's architectural constraints for nested data structures. This is a known limitation of OpenAI's API. Please use Google Gemini or Anthropic Claude instead, which support complex schemas.";
      }

      console.error(error);
      panel.notification.error(message);
      return;
    }

    console.error(error);
    panel.notification.error(
      panel.t("johannschopplich.copilot.generator.error"),
    );
  } finally {
    abortController = undefined;
    panel.isLoading = false;
    isGenerating.value = false;
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

    // Handle layouts and blocks field normalization
    if (field.type === "layout" || field.type === "blocks") {
      if (Array.isArray(fieldValue)) {
        processedContent[field.name] = [
          ...currentFieldContent,
          ...fieldValue.map(
            field.type === "layout" ? normalizeLayout : normalizeBlock,
          ),
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
      isHovering && isGenerating
        ? 'cancel'
        : isGenerating
          ? 'loader'
          : 'sparkling'
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
