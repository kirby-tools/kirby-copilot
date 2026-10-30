<script setup lang="ts">
import type { KirbyFieldProps } from "kirby-types";
import type { PropType } from "vue";
import type { ActiveField, PlaceholderField, PromptContext } from "../../types";
import { useLicenseStatus } from "@kirby-tools/licensing";
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import { usePanel } from "kirbyuse";
import { TEMPLATE_PLACEHOLDER_RE } from "utilful";
import { computed, ref } from "vue";
import {
  useGenerationHistory,
  useModelFields,
  usePluginContext,
  usePromptDialogState,
  usePromptTemplates,
  useSkills,
  useTemplateDialogs,
} from "../../composables";
import { SUPPORTED_FILE_MIME_TYPES } from "../../constants";
import {
  createContentContext,
  findFieldDefinition,
  openFilePicker,
  resolvePlaceholders,
} from "../../utils";
import {
  createInsertOptions,
  createPromptDialogLabels,
} from "../../utils/labels";
import { insertRefToken } from "../../utils/reference-tokens";
import PromptEditor from "../PromptEditor/PromptEditor.vue";
import PromptDialogBody from "../Ui/PromptDialogBody.vue";

const props = defineProps({
  fields: Array as PropType<KirbyFieldProps[]>,
  selection: String,
  userPrompt: String,
  activeField: Object as PropType<ActiveField>,
});

const emit = defineEmits<{
  (event: "cancel"): void;
  (event: "close"): void;
  (event: "input", value: unknown): void;
  (event: "submit", value: PromptContext): void;
  (event: "success"): void;
}>();

const panel = usePanel();
const {
  lastPrompt,
  currentIndex,
  addToHistory,
  navigateHistory,
  getRecentEntries,
} = useGenerationHistory();
const { allTemplates, templates, setConfigTemplates } = usePromptTemplates();
const { setConfigSkills } = useSkills();
const { openSaveTemplateDialog, openEditTemplatesDialog } =
  useTemplateDialogs();
const { getModelFields } = useModelFields();
const contentContext = createContentContext();

const { prompt, files, selectedFieldNames, insertOption } =
  usePromptDialogState();

const editorComponent = ref<InstanceType<typeof PromptEditor>>();
const hasLicenseButtons = !__PLAYGROUND__;
const { licenseStatus, licenseDialog } = useLicenseStatus({
  pluginId: "copilot",
  resolveContext: usePluginContext,
});

const modelFields = ref<KirbyFieldProps[]>([...(props.fields ?? [])]);
const placeholderSearch = ref("");

const labels = createPromptDialogLabels(panel.t);

const selectionInsertOptions = createInsertOptions(panel.t);
// Prompt dialog is used in two contexts:
// 1. Multi-field generation mode (Panel view button).
// 2. Inline mode (toolbar) with append/replace selection option.
const isFieldGenerationMode = computed(
  () => props.fields && props.fields.length > 0,
);

const recentPrompts = computed(() => getRecentEntries(10));
const hasPlaceholders = computed(() =>
  Array.from(prompt.value.matchAll(TEMPLATE_PLACEHOLDER_RE), ([, key]) =>
    key!.toLowerCase(),
  ).some((key) => key in contentContext),
);
const resolvedPrompt = computed(() =>
  resolvePlaceholders(prompt.value, contentContext),
);

const placeholderFields = computed<PlaceholderField[]>(() =>
  [{ name: "title", label: panel.t("title") }, ...modelFields.value].map(
    ({ name, label }) => ({ name, label, preview: getFieldPreview(name) }),
  ),
);

(async () => {
  const context = await usePluginContext();
  setConfigTemplates(context.config.promptTemplates ?? []);
  setConfigSkills(context.config.skills ?? []);

  // Fetch view fields for placeholder insertion if not passed as props.
  if (!props.fields) {
    modelFields.value = await getModelFields();
  }

  if (props.activeField?.path) {
    const fieldDefinition = findFieldDefinition(
      modelFields.value,
      props.activeField.path,
    ) as (KirbyFieldProps & { copilot?: { userPrompt?: string } }) | undefined;

    if (typeof fieldDefinition?.copilot?.userPrompt === "string") {
      prompt.value = fieldDefinition.copilot.userPrompt;
    }
  }
})();

function handleEditorSubmit() {
  if (!prompt.value.trim()) return;
  submit();
}

function handleEditorKeydown(event: KeyboardEvent) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();

    // Store current prompt when starting to navigate.
    if (event.key === "ArrowUp" && currentIndex.value === -1) {
      lastPrompt.value = prompt.value;
    }

    const newPrompt = navigateHistory(event.key === "ArrowUp" ? "up" : "down");

    if (newPrompt !== undefined) {
      prompt.value = newPrompt;
      editorComponent.value?.focus();
    }
  }
}

function submit() {
  if (isFieldGenerationMode.value && selectedFieldNames.value.length === 0) {
    panel.notification.info(panel.t("johannschopplich.copilot.selectFields"));
    return;
  }

  addToHistory(prompt.value);

  emit("submit", {
    prompt: prompt.value,
    files: files.value,
    selectedFieldNames: selectedFieldNames.value,
    insertMode: insertOption.value,
  });
}

async function pickFiles() {
  const selectedFiles = await openFilePicker({
    accept: SUPPORTED_FILE_MIME_TYPES.join(","),
  });
  files.value = [...files.value, ...selectedFiles];
}

function pickPages() {
  // Save cursor position before the dialog unmounts the editor.
  const cursorOffset =
    editorComponent.value?.getCursorOffset() ?? prompt.value.length;

  panel.dialog.open({
    component: "k-pages-dialog",
    props: {
      endpoint: "site/children",
      multiple: true,
      hasSearch: true,
      // The raw API response only has `title`, but `k-item` renders `text`.
      item: (page: Record<string, string>) => ({
        ...page,
        text: page.title,
      }),
    },
    on: {
      submit: (pages: Record<string, string>[]) => {
        let insertIndex = cursorOffset;
        for (const page of pages) {
          if (!page.id) continue;
          const { nextText, nextIndex } = insertRefToken(
            prompt.value,
            insertIndex,
            `@page://${page.id} `,
          );
          prompt.value = nextText;
          insertIndex = nextIndex;
        }
        panel.dialog.close();
      },
    },
  });
}

function insertFieldPlaceholder(fieldName: string) {
  const placeholder = `{${fieldName}}`;
  editorComponent.value?.insertAtCursor(placeholder);
}

function loadPrompt(promptText: string) {
  prompt.value = promptText;
  currentIndex.value = -1;
  editorComponent.value?.focus();
}

function getFieldPreview(fieldName: string) {
  const value = contentContext[fieldName] ?? "";
  const stringifiedValue = String(value);

  return stringifiedValue.length > 30
    ? `${stringifiedValue.slice(0, 30)}…`
    : stringifiedValue;
}
</script>

<template>
  <k-dialog
    :cancel-button="false"
    :submit-button="false"
    :visible="true"
    size="large"
    class="k-copilot-prompt-dialog"
    @cancel="emit('cancel')"
  >
    <PromptDialogBody
      v-model:selected-field-names="selectedFieldNames"
      v-model:insert-option="insertOption"
      v-model:placeholder-search="placeholderSearch"
      :labels="labels"
      :prompt="prompt"
      :preview="hasPlaceholders ? resolvedPrompt : undefined"
      :file-count="files.length"
      :fields="isFieldGenerationMode ? modelFields : undefined"
      :selection="selection"
      :insert-options="selectionInsertOptions"
      :placeholder-fields="placeholderFields"
      :templates="templates"
      :all-templates="allTemplates"
      :recent-prompts="recentPrompts"
      @pick-files="pickFiles()"
      @clear-files="files = []"
      @pick-pages="pickPages()"
      @insert-placeholder="insertFieldPlaceholder($event)"
      @save-template="openSaveTemplateDialog(prompt)"
      @edit-templates="openEditTemplatesDialog()"
      @load-template="loadPrompt($event.prompt)"
      @load-prompt="loadPrompt($event)"
      @submit="submit()"
    >
      <PromptEditor
        ref="editorComponent"
        :value="prompt"
        autofocus
        :placeholder="
          panel.t('johannschopplich.copilot.prompt.placeholder') +
          (selection
            ? ` (${panel.t('johannschopplich.copilot.prompt.selectionContext')})`
            : '')
        "
        @input="prompt = $event"
        @submit="handleEditorSubmit"
        @keydown="handleEditorKeydown"
      />

      <template
        v-if="hasLicenseButtons && licenseStatus && licenseDialog"
        #licensing
      >
        <LicensingButtonGroup
          :dialog="licenseDialog"
          :license-status="licenseStatus"
          pricing-url="https://kirby.tools/copilot/buy"
          class="k-copilot-prompt-dialog-licensing-buttons kai-absolute kai-right-0 kai-top-[calc(-0.25rem-24px-2px)]"
        />
      </template>
    </PromptDialogBody>
  </k-dialog>
</template>

<style>
.k-copilot-prompt-dialog {
  --dialog-color-back: var(--input-color-back);
  --dialog-padding: 0;
  --dialog-rounded: var(--rounded);
  overflow: visible;
}

/* Kirby scrolls and masks the dialog body, which clips the licensing buttons
   above it and the fixed skill suggestions below it. */
.k-copilot-prompt-dialog .k-dialog-body.k-scrollable[data-fade][data-axis] {
  overflow: visible;
  mask-image: none;
}

.k-copilot-prompt-dialog-licensing-buttons[data-layout="collapsed"]
  > .k-button {
  --theme-color-border: var(--color-pink-900);
}
</style>
