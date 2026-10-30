<script setup lang="ts">
import type {
  KirbyBlocksFieldProps,
  KirbyFieldProps,
  KirbyLayoutFieldProps,
} from "kirby-types";
import type { PropType } from "vue";
import type z from "zod";
import type { LogLevel } from "../../constants";
import type { CopilotFieldError, PluginConfig } from "../../types";
import { licenseProps } from "@kirby-tools/licensing";
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import { useContent, usePanel, usePanelEvent } from "kirbyuse";
import {
  disabled as disabledProp,
  help as helpProp,
  id as idProp,
  name as nameProp,
} from "kirbyuse/props";
import { computed, ref, watch } from "vue";
import {
  ensurePlaygroundApiKey,
  runStructuredGeneration,
  runTextGeneration,
  useBlocks,
  useLayouts,
  usePluginContext,
} from "../../composables";
import {
  SUPPORTED_FILE_MIME_TYPES,
  SUPPORTED_IMAGE_MIME_TYPES,
} from "../../constants";
import {
  getHashedStorageKey,
  getResponseFormat,
  loadAISDK,
  openFilePicker,
} from "../../utils";
import { createFieldLabels } from "../../utils/labels";
import CopilotFieldBody from "../Ui/CopilotFieldBody.vue";

const props = defineProps({
  // Declared to keep `disabled` off `k-field`, so the field never looks disabled.
  ...disabledProp,
  ...helpProp,
  ...idProp,
  ...nameProp,
  label: {
    type: String,
    required: true,
  },
  field: [Object, String] as PropType<KirbyFieldProps | string>,
  userPrompt: String,
  systemPrompt: String,
  storage: {
    type: Boolean,
    default: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  files: {
    type: [Boolean, String] as PropType<boolean | "auto">,
    default: true,
  },
  icon: String,
  theme: String,
  size: String,
  logLevel: String as PropType<LogLevel>,
  open: Boolean,
  modelFile: Object as PropType<{ mime: string; url: string }>,
  ...licenseProps,
});

const panel = usePanel();
const {
  currentContent,
  isEditable: isContentEditable,
  update: updateContent,
} = useContent();

const hasLicenseButtons = !__PLAYGROUND__;
const targetField = computed(() =>
  typeof props.field === "object" ? props.field : undefined,
);
const isStorageEnabled = computed(
  () => props.storage && targetField.value !== undefined,
);
const storageKey = computed(() =>
  targetField.value
    ? getHashedStorageKey(panel.view.path, targetField.value.name.toLowerCase())
    : undefined,
);

const config = ref<PluginConfig>();
const isGenerating = ref(false);
// Storage only decides whether a previous session overrides the defaults.
const currentPrompt = ref(
  (isStorageEnabled.value &&
    localStorage.getItem(`${storageKey.value}$prompt`)) ||
    props.userPrompt ||
    "",
);
const isDetailsOpen = ref(
  (isStorageEnabled.value &&
    localStorage.getItem(`${storageKey.value}$open`) === "true") ||
    props.open,
);
const currentFieldContent = ref<any>();
const files = ref<File[]>([]);

let activeRun: ReturnType<typeof runTextGeneration>;
let isAbortRequested = false;

const canUndo = computed(
  () => !isGenerating.value && currentFieldContent.value !== undefined,
);

const labels = createFieldLabels(panel.t);
const error = computed<CopilotFieldError | undefined>(() => {
  if (!config.value) return;

  if (!config.value.providers?.[config.value.provider]?.model) {
    return { type: "model", provider: config.value.provider };
  }

  if (
    !targetField.value ||
    !(targetField.value.name.toLowerCase() in currentContent.value)
  ) {
    return {
      type: "field",
      field: targetField.value?.name ?? String(props.field),
    };
  }

  if (!props.editable && !props.userPrompt) {
    return { type: "userPrompt" };
  }

  return undefined;
});
const modelFileText = computed(() => {
  if (!props.modelFile) return;

  return panel.t(
    `johannschopplich.copilot.context.file.${
      SUPPORTED_IMAGE_MIME_TYPES.includes(props.modelFile.mime)
        ? "model"
        : "unsupported"
    }`,
  );
});

watch(currentPrompt, (value) => {
  if (!isStorageEnabled.value) return;

  if (value && value !== props.userPrompt) {
    localStorage.setItem(`${storageKey.value}$prompt`, value);
  } else {
    localStorage.removeItem(`${storageKey.value}$prompt`);
  }
});

watch(isDetailsOpen, (value) => {
  if (!isStorageEnabled.value) return;

  if (value) {
    localStorage.setItem(`${storageKey.value}$open`, "true");
  } else {
    localStorage.removeItem(`${storageKey.value}$open`);
  }
});

if (props.files === "auto" && props.modelFile) {
  const { mime, url } = props.modelFile;

  if (SUPPORTED_IMAGE_MIME_TYPES.includes(mime)) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const filename = url.split("/").pop() || "file";
        files.value = [new File([blob], filename, { type: mime })];
      });
  }
}

(async () => {
  try {
    config.value = (await usePluginContext()).config;
  } catch (error) {
    panel.error(error as Error);
  }
})();

usePanelEvent("view.save", onModelSave);

async function generate() {
  if (isGenerating.value) return;
  if (!ensurePlaygroundApiKey()) return;

  if (!currentPrompt.value) {
    panel.notification.info(panel.t("johannschopplich.copilot.prompt.empty"));
    return;
  }

  const field = targetField.value;
  if (!field) return;

  const fieldName = field.name.toLowerCase();
  currentFieldContent.value = currentContent.value[fieldName];

  isGenerating.value = true;
  isAbortRequested = false;

  try {
    const { getZodSchema: getBlocksZodSchema, normalizeBlock } = useBlocks();
    const { getZodSchema: getLayoutZodSchema, normalizeLayout } = useLayouts();
    const { Output } = await loadAISDK();

    if (field.type === "layout" || field.type === "blocks") {
      const normalizer = (field.type === "layout"
        ? normalizeLayout
        : normalizeBlock) as unknown as (item: unknown) => unknown;
      const schema =
        field.type === "layout"
          ? await getLayoutZodSchema(field as KirbyLayoutFieldProps)
          : await getBlocksZodSchema(field as KirbyBlocksFieldProps);

      activeRun = runStructuredGeneration({
        streamOptions: {
          userPrompt: currentPrompt.value,
          systemPrompt: props.systemPrompt,
          output: Output.array({ element: schema as z.ZodObject }),
          files: files.value,
          logLevel: props.logLevel,
        },
        escapeToAbort: true,
        sink: {
          writePartial: async (partialOutput) => {
            if (!partialOutput || !Array.isArray(partialOutput)) return;

            await updateContent(
              {
                [fieldName]: [
                  ...currentFieldContent.value,
                  ...partialOutput.map(normalizer),
                ],
              },
              // Only the final output is saved.
              false,
            );
          },
          persistFinal: (structuredOutput) =>
            updateContent({
              [fieldName]: [
                ...currentFieldContent.value,
                ...((structuredOutput as unknown[]) ?? []).map(normalizer),
              ],
            }),
        },
      });
    } else {
      const responseFormat = getResponseFormat(field.type);
      let text = "";

      activeRun = runTextGeneration({
        streamOptions: {
          userPrompt: currentPrompt.value,
          systemPrompt: props.systemPrompt,
          responseFormat,
          files: files.value,
          logLevel: props.logLevel,
        },
        escapeToAbort: true,
        sink: {
          write: async (textPart) => {
            text += textPart;

            await updateContent(
              { [fieldName]: currentFieldContent.value + text },
              // Only the final output is saved.
              false,
            );
          },
          persistFinal: () =>
            updateContent({
              [fieldName]: currentFieldContent.value + text,
            }),
        },
      });
    }

    // The Stop button goes live with `isGenerating`, but the run only exists
    // once the SDK chunk and any schema request have loaded.
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

function undo() {
  if (!targetField.value) return;
  updateContent({
    [targetField.value.name.toLowerCase()]: currentFieldContent.value,
  });
  currentFieldContent.value = undefined;
}

async function pickFiles() {
  const selectedFiles = await openFilePicker({
    accept: SUPPORTED_FILE_MIME_TYPES.join(","),
  });
  files.value = [...files.value, ...selectedFiles];
}

function onModelSave() {
  if (canUndo.value) {
    currentFieldContent.value = undefined;
  }
}
</script>

<template>
  <CopilotFieldBody
    :id="id"
    v-model:prompt="currentPrompt"
    v-model:open="isDetailsOpen"
    :help="help"
    :label="label"
    :name="name"
    :labels="labels"
    :is-loading="!config"
    :error="error"
    :icon="icon"
    :theme="theme ?? undefined"
    :size="size ?? undefined"
    :editable="editable"
    :files="$props.files"
    :user-prompt="userPrompt"
    :is-generating="isGenerating"
    :can-undo="canUndo"
    :is-read-only="!isContentEditable"
    :file-count="files.length"
    :model-file-text="modelFileText"
    @generate="generate()"
    @abort="abort()"
    @undo="undo()"
    @pick-files="pickFiles()"
    @clear-files="files = []"
  >
    <template v-if="hasLicenseButtons" #options>
      <LicensingButtonGroup
        :dialog="licenseDialog"
        :license-status="licenseStatus"
        pricing-url="https://kirby.tools/copilot/buy"
      />
    </template>
  </CopilotFieldBody>
</template>
