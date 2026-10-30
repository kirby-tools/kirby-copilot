<script setup lang="ts">
import type {
  KirbyBlocksFieldProps,
  KirbyFieldProps,
  KirbyLayoutFieldProps,
} from "kirby-types";
import type { PropType } from "vue";
import type { LogLevel } from "../constants";
import type { ButtonOptionsResponse, PromptContext } from "../types";
import { useContent, usePanel } from "kirbyuse";
import { ref } from "vue";
import { z } from "zod";
import {
  ensurePlaygroundApiKey,
  runStructuredGeneration,
  useBlocks,
  useLayouts,
  useModelFields,
} from "../composables";
import { PLUGIN_BUTTON_OPTIONS_API_ROUTE } from "../constants";
import { fieldToZodSchema } from "../schemas/fields";
import { loadAISDK, openPromptDialog } from "../utils";
import ViewButtonBody from "./Ui/ViewButtonBody.vue";

// The view button props Kirby passes (`disabled`, `responsive`, …) would override the button's own.
defineOptions({ inheritAttrs: false });

const props = defineProps({
  label: String,
  userPrompt: String,
  systemPrompt: String,
  logLevel: String as PropType<LogLevel>,
  icon: String,
  theme: String,
});

const panel = usePanel();
const {
  currentContent,
  isEditable: isContentEditable,
  update: updateContent,
} = useContent();
const { getModelFields } = useModelFields();

const isGenerating = ref(false);
let activeRun: ReturnType<typeof runStructuredGeneration>;
let isAbortRequested = false;

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value !== "";
}

async function initPromptDialog() {
  if (isGenerating.value) return;

  if (!ensurePlaygroundApiKey()) return;

  const fields = await getModelFields();

  if (fields.length === 0) {
    panel.notification.info(panel.t("johannschopplich.copilot.fields.empty"));
    return;
  }

  // A view button's props reach the Panel unresolved, so the server resolves
  // a prompt given as a non-empty string.
  const queriedProps: ButtonOptionsResponse =
    isNonEmptyString(props.userPrompt) || isNonEmptyString(props.systemPrompt)
      ? await panel.api.get<ButtonOptionsResponse>(
          PLUGIN_BUTTON_OPTIONS_API_ROUTE,
          { path: panel.view.path },
          undefined,
          // Avoid showing Panel loading indicator.
          true,
        )
      : props;
  // The route answers `null` for a prop the blueprint doesn't set, like one
  // from `panel.viewButtons`, which the button then uses as written.
  const userPrompt = queriedProps.userPrompt ?? props.userPrompt;
  const systemPrompt = queriedProps.systemPrompt ?? props.systemPrompt;

  const promptContext = await openPromptDialog<PromptContext>({
    fields,
    userPrompt,
  });
  if (!promptContext) return;

  const { prompt, files, selectedFieldNames } = promptContext;
  const selectedFields = fields.filter((field) =>
    selectedFieldNames?.includes(field.name),
  );
  if (!prompt || selectedFields.length === 0) return;

  isGenerating.value = true;
  isAbortRequested = false;

  try {
    const { getZodSchema: getBlocksZodSchema } = useBlocks();
    const { getZodSchema: getLayoutZodSchema } = useLayouts();

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

    const { Output } = await loadAISDK();

    activeRun = runStructuredGeneration({
      streamOptions: {
        userPrompt: prompt,
        systemPrompt,
        output: Output.object({ schema: z.object(fieldsSchema) }),
        files,
        logLevel: props.logLevel,
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
              // Only the final output is saved.
              false,
            );
          }
        },
        // Scalar field values are replaced ("fill these fields"), unlike the
        // Copilot field, which extends the current field value.
        persistFinal: async (structuredOutput) => {
          const finalContent = processFieldValues({
            object: structuredOutput as Record<string, unknown>,
            selectedFields,
            currentContent: _currentContent,
          });

          return updateContent(finalContent);
        },
      },
    });

    // The Stop button goes live with `isGenerating`, but the run only exists
    // once the schemas and the SDK chunk have loaded.
    if (isAbortRequested) activeRun?.abort();

    await activeRun?.done;
  } finally {
    isGenerating.value = false;
    activeRun = undefined;
  }
}

function abort() {
  isAbortRequested = true;
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
  <ViewButtonBody
    :label="label || panel.t('johannschopplich.copilot.label')"
    :icon="icon"
    :theme="theme"
    :is-generating="isGenerating"
    :disabled="!isGenerating && !isContentEditable"
    @click="initPromptDialog()"
    @abort="abort()"
  />
</template>
