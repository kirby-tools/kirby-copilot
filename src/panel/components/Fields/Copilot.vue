<script setup lang="ts">
import type { LicenseStatus } from "@kirby-tools/licensing";
import type {
  KirbyBlocksFieldProps,
  KirbyFieldProps,
  KirbyLayoutFieldProps,
} from "kirby-types";
import type { PropType } from "vue";
import type z from "zod";
import type { LogLevel } from "../../constants";
import type { PluginConfig } from "../../types";
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import { useContent, usePanel } from "kirbyuse";
import {
  disabled as disabledProp,
  help as helpProp,
  id as idProp,
  name as nameProp,
} from "kirbyuse/props";
import { computed, onBeforeUnmount, ref, watch } from "vue";
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
  licenseStatus: {
    type: String as PropType<LicenseStatus>,
    required: true,
  },
  licenseDialog: {
    type: String,
    required: true,
  },
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

const canEdit = computed(() => props.editable);
const canAttachFiles = computed(() => props.files === true);
const canUndo = computed(
  () => !isGenerating.value && currentFieldContent.value !== undefined,
);

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

// Keep this synchronous – an unmount before the async setup resolves would
// run `off` first, which mitt silently ignores.
panel.events.on("view.save", onModelSave);

onBeforeUnmount(() => {
  panel.events.off("view.save", onModelSave);
});

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
  <k-field
    :id="id"
    :help="help"
    :input="false"
    :label="label"
    :name="name"
    type="copilot"
    class="k-copilot-field"
  >
    <template v-if="hasLicenseButtons" #options>
      <LicensingButtonGroup
        :dialog="licenseDialog"
        :license-status="licenseStatus"
        pricing-url="https://kirby.tools/copilot/buy"
      />
    </template>

    <template v-if="config">
      <k-box v-if="!config.providers?.[config.provider]?.model" theme="empty">
        <k-text>
          Missing
          <code>model</code>
          property in the
          <code>{{
            `johannschopplich.copilot.providers.${config.provider}`
          }}</code>
          global configuration.
        </k-text>
      </k-box>
      <k-box
        v-else-if="
          !targetField || !(targetField.name.toLowerCase() in currentContent)
        "
        theme="empty"
      >
        <k-text>
          The <code>{{ targetField?.name ?? field }}</code> field does not exist
          in the current model.
        </k-text>
      </k-box>
      <k-box v-else-if="!canEdit && !userPrompt" theme="empty">
        <k-text>
          If the user prompt cannot be edited by the user, a default
          <code>userPrompt</code> has to be set in the field configuration.
        </k-text>
      </k-box>
      <div v-else class="[&>*+*]:kai-mt-[var(--spacing-4)]">
        <k-button-group layout="collapsed">
          <k-button
            :icon="isGenerating ? 'loader' : icon"
            :text="panel.t('johannschopplich.copilot.generate')"
            :theme="theme || 'notice-icon'"
            variant="filled"
            :size="size || 'md'"
            :disabled="isGenerating || !isContentEditable"
            @click="generate()"
          />
          <k-button
            v-if="isGenerating"
            icon="cancel"
            :text="panel.t('johannschopplich.copilot.stop')"
            theme="notice"
            variant="filled"
            :size="size || 'md'"
            @click="abort()"
          />
          <k-button
            v-if="canUndo"
            icon="undo"
            :text="panel.t('johannschopplich.copilot.undo')"
            variant="filled"
            :size="size || 'md'"
            @click="undo()"
          />
        </k-button-group>

        <details
          v-if="canEdit || canAttachFiles"
          :open="isDetailsOpen"
          @toggle="isDetailsOpen = ($event.target as HTMLDetailsElement).open"
        >
          <summary>
            {{
              [
                ...(canEdit
                  ? [panel.t("johannschopplich.copilot.prompt.label")]
                  : []),
                ...(canAttachFiles
                  ? [panel.t("johannschopplich.copilot.context")]
                  : []),
              ].join(", ")
            }}
          </summary>

          <div
            class="kai-mt-[var(--spacing-3)] [&>*+*]:kai-mt-[var(--spacing-2)]"
          >
            <div v-if="canEdit" class="kai-text-right">
              <k-input
                :key="isDetailsOpen ? 1 : 0"
                :value="currentPrompt"
                class="kai-mb-[var(--spacing-1)]"
                :placeholder="
                  panel.t('johannschopplich.copilot.prompt.placeholder')
                "
                type="textarea"
                :buttons="false"
                @input="currentPrompt = $event"
              />
              <k-button
                v-if="userPrompt && currentPrompt !== userPrompt"
                icon="undo"
                :text="panel.t('johannschopplich.copilot.context.reset')"
                variant="dimmed"
                size="xs"
                @click="currentPrompt = userPrompt"
              />
            </div>

            <k-button-group v-if="canAttachFiles" layout="collapsed">
              <k-button
                icon="attachment"
                :text="panel.t('johannschopplich.copilot.files.select')"
                variant="filled"
                :badge="
                  files.length > 0
                    ? {
                        theme: 'notice',
                        text: files.length,
                      }
                    : undefined
                "
                size="sm"
                class="!kai-rounded-[var(--button-rounded)]"
                @click="pickFiles()"
              />
              <k-button
                v-if="files.length > 0"
                :text="panel.t('johannschopplich.copilot.delete')"
                variant="dimmed"
                size="sm"
                @click="files = []"
              />
            </k-button-group>
            <k-box v-else-if="modelFile" theme="none">
              <k-text>
                {{
                  panel.t(
                    `johannschopplich.copilot.context.file.${
                      SUPPORTED_IMAGE_MIME_TYPES.includes(modelFile.mime)
                        ? "model"
                        : "unsupported"
                    }`,
                  )
                }}
              </k-text>
            </k-box>
          </div>
        </details>
      </div>
    </template>
  </k-field>
</template>
