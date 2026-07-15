<script setup lang="ts">
import type {
  KirbyBlocksFieldProps,
  KirbyFieldProps,
  KirbyLayoutFieldProps,
} from "kirby-types";
import type { LogLevel as LogLevelIndex } from "kirbyuse";
import type { PropType } from "vue";
import type { LogLevel } from "../../constants";
import type { PromptContext } from "../../types";
import { ref, useContent, usePanel } from "kirbyuse";
import { z } from "zod";
import {
  ensurePlaygroundApiKey,
  runStructuredGeneration,
  useBlocks,
  useLayouts,
  useModelFields,
  usePluginContext,
} from "../../composables";
import {
  DEFAULT_LOG_LEVEL,
  DEFAULT_SYSTEM_PROMPT,
  LOG_LEVELS,
} from "../../constants";
import { fieldToZodSchema } from "../../schemas/fields";
import { loadAISDK, openPromptDialog } from "../../utils";

const props = defineProps({
  label: String,
  userPrompt: String,
  systemPrompt: String,
  logLevel: String as PropType<LogLevel>,
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
const { getModelFields } = useModelFields();

const isGenerating = ref(false);
const isHovering = ref(false);
let activeRun: ReturnType<typeof runStructuredGeneration>;

async function initPromptDialog() {
  if (!ensurePlaygroundApiKey()) return;

  const fields = await getModelFields();

  if (fields.length === 0) {
    panel.notification.error(panel.t("johannschopplich.copilot.fields.empty"));
    return;
  }

  const promptContext = await openPromptDialog<PromptContext>({
    fields,
    userPrompt: props.userPrompt,
  });
  if (!promptContext) return;

  const { prompt, files, selectedFieldNames } = promptContext;
  const selectedFields = fields.filter((field) =>
    selectedFieldNames?.includes(field.name),
  );
  if (!prompt || selectedFields.length === 0) return;

  const { getZodSchema: getBlocksZodSchema } = useBlocks();
  const { getZodSchema: getLayoutZodSchema } = useLayouts();

  // Build schema for all selected fields
  const fieldsSchema: Record<string, z.ZodType> = {};

  for (const field of selectedFields) {
    const schema =
      field.type === "layout"
        ? z.array(await getLayoutZodSchema(field as KirbyLayoutFieldProps))
        : field.type === "blocks"
          ? z.array(await getBlocksZodSchema(field as KirbyBlocksFieldProps))
          : fieldToZodSchema(field);
    if (schema) fieldsSchema[field.name] = schema;
  }

  const _currentContent = { ...currentContent.value };

  const { config } = await usePluginContext();
  const { Output } = await loadAISDK();

  const systemPrompt =
    props.systemPrompt || config.systemPrompt || DEFAULT_SYSTEM_PROMPT;

  activeRun = runStructuredGeneration({
    streamOptions: {
      userPrompt: prompt,
      systemPrompt,
      output: Output.object({ schema: z.object(fieldsSchema) }),
      files,
      logLevel: LOG_LEVELS.indexOf(
        props.logLevel && LOG_LEVELS.includes(props.logLevel)
          ? props.logLevel
          : (config.logLevel ?? DEFAULT_LOG_LEVEL),
      ) as LogLevelIndex,
    },
    escapeToAbort: true,
    sink: {
      writePartial: async (partialOutput) => {
        if (!partialOutput) return;

        const updatedContent = processFieldValues({
          object: partialOutput as Record<string, unknown>,
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
      },
      // Scalar field values are replaced ("fill these fields"), unlike the
      // section, which extends the current field value
      persistFinal: async (structuredOutput) => {
        const finalContent = processFieldValues({
          object: structuredOutput as Record<string, unknown>,
          selectedFields,
          currentContent: _currentContent,
        });

        await updateContent(finalContent);
      },
    },
    onRunStateChange: (isRunning) => {
      isGenerating.value = isRunning;
    },
  });

  await activeRun?.done;
  activeRun = undefined;
}

function abort() {
  activeRun?.abort();
  activeRun = undefined;
}

function processFieldValues({
  object,
  selectedFields,
  currentContent,
}: {
  object: Record<string, unknown>;
  selectedFields: KirbyFieldProps[];
  currentContent: Record<string, unknown>;
}) {
  const { normalizeBlock } = useBlocks();
  const { normalizeLayout } = useLayouts();

  const processedContent: Record<string, unknown> = {};

  for (const field of selectedFields) {
    const fieldValue = object[field.name];
    if (fieldValue == null) continue;

    const currentFieldContent = currentContent[field.name] as unknown[];
    const normalizer =
      field.type === "layout" ? normalizeLayout : normalizeBlock;

    // Handle layouts and blocks field normalization
    if (field.type === "layout" || field.type === "blocks") {
      if (Array.isArray(fieldValue)) {
        processedContent[field.name] = [
          ...currentFieldContent,
          ...fieldValue.map(normalizer as (item: unknown) => unknown),
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
