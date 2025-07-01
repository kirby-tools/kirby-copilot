<script setup>
import { isAbortError } from "@ai-sdk/provider-utils";
import { loadPluginModule, ref, useContent, usePanel } from "kirbyuse";
import {
  useBlocks,
  useLayouts,
  usePluginContext,
  useStreamObject,
  useStreamText,
} from "../../composables";
import { openPromptDialog } from "../../config/shared";
import {
  FIELD_TYPE_RESPONSE_FORMAT,
  PLUGIN_MODEL_FIELDS_API_ROUTE,
  STORAGE_KEY_PREFIX,
  SYSTEM_PROMPT,
} from "../../constants";
import { EXCLUDED_FIELD_TYPES, fieldToZodSchema } from "../../schemas/fields";
import { CopilotError } from "../../utils/error";

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
      abortController?.abort();
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
    (field) => !EXCLUDED_FIELD_TYPES.has(field.type),
  );
  const preselectedField = fields.find(
    (field) => field.type === "blocks",
  )?.name;

  const promptContext = await openPromptDialog({
    fields,
    preselectedField,
  });
  if (!promptContext) return;

  const { prompt, files, field: fieldName } = promptContext;
  const field = fields.find((field) => field.name === fieldName);
  if (!prompt || !field) return;

  const currentFieldContent = currentContent.value[field.name];
  const { getZodSchema: getBlocksZodSchema, normalizeBlock } = useBlocks();
  const { getZodSchema: getLayoutZodSchema, normalizeLayout } = useLayouts();

  panel.isLoading = true;
  isGenerating.value = true;
  document.addEventListener("keydown", handleEscape);

  // Ensure plugin assets are registered for loading the AI module
  await usePluginContext();
  const { AISDKError, APICallError } = await loadPluginModule("ai");

  try {
    let text = "";
    let structuredOutput = [];

    // Handle structured fields (layouts, blocks, structure, object, entries) by streaming the object
    if (
      ["layout", "blocks", "structure", "object", "entries"].includes(
        field.type,
      )
    ) {
      const schema =
        field.type === "layout"
          ? await getLayoutZodSchema(field)
          : field.type === "blocks"
            ? await getBlocksZodSchema(field)
            : fieldToZodSchema(field);

      const { partialObjectStream, object: finalObject } =
        await useStreamObject({
          userPrompt: prompt,
          systemPrompt: SYSTEM_PROMPT,
          schema,
          output:
            field.type === "layout" ||
            field.type === "blocks" ||
            field.type === "structure" ||
            field.type === "entries"
              ? "array"
              : "object",
          files: files.value,
          abortSignal: abortController.signal,
        });

      // Stream partial updates
      for await (const partialObject of partialObjectStream) {
        if (!partialObject) continue;

        let updatedContent;
        if (field.type === "layout" || field.type === "blocks") {
          if (!Array.isArray(partialObject)) continue;
          updatedContent = [
            ...currentFieldContent,
            ...partialObject.map(
              field.type === "layout" ? normalizeLayout : normalizeBlock,
            ),
          ];
        } else if (field.type === "structure" || field.type === "entries") {
          if (!Array.isArray(partialObject)) continue;
          updatedContent = partialObject;
        } else {
          updatedContent = partialObject;
        }

        await updateContent(
          { [field.name]: updatedContent },
          // Disable saving content to storage in Kirby 5
          false,
        );
      }

      // Set final result
      structuredOutput = await finalObject;
    } else {
      const { textStream } = await useStreamText({
        userPrompt: [
          `<response_format>\n${FIELD_TYPE_RESPONSE_FORMAT[field.type] || "text"}\n</response_format>`,
          prompt,
        ].join("\n\n"),
        systemPrompt: SYSTEM_PROMPT,
        files: files.value,
        abortSignal: abortController.signal,
      });

      for await (const textPart of textStream) {
        text += textPart;

        await updateContent(
          { [field.name]: currentFieldContent + text },
          // Disable saving content to storage in Kirby 5
          false,
        );
      }
    }

    // Store the final content
    await updateContent({
      [field.name]:
        field.type === "layout" || field.type === "blocks"
          ? [
              ...currentFieldContent,
              ...(structuredOutput ?? []).map(
                field.type === "layout" ? normalizeLayout : normalizeBlock,
              ),
            ]
          : ["structure", "entries"].includes(field.type)
            ? structuredOutput
            : field.type === "object"
              ? structuredOutput
              : currentFieldContent + text,
    });

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
        message = `The ${field.type} generation for the "${field.name}" field exceeds OpenAI's architectural constraints for nested data structures. This is a known limitation of OpenAI's API. Please use Google Gemini or Anthropic Claude instead, which support complex schemas.`;
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
    :text="panel.t('johannschopplich.copilot.label')"
    :theme="isHovering && isGenerating ? 'notice' : 'notice-icon'"
    variant="filled"
    size="sm"
    responsive
    @mouseenter.native="isHovering = true"
    @mouseleave.native="isHovering = false"
    @click="isHovering && isGenerating ? abort() : initPromptDialog()"
  >
  </k-button>
</template>
