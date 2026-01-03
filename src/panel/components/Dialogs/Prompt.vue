<script setup>
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import { computed, isKirby5, ref, usePanel } from "kirbyuse";
import {
  useEventListener,
  useGenerationHistory,
  useModelFields,
  usePluginContext,
  usePromptTemplates,
} from "../../composables";
import { SUPPORTED_FILE_MIME_TYPES } from "../../constants";
import { createContentContext } from "../../utils/content";
import { findFieldDefinition } from "../../utils/fields";
import { PLACEHOLDER_PATTERN, renderTemplate } from "../../utils/template";
import { openFilePicker } from "../../utils/upload";
import AutoGrowTextarea from "../Ui/AutoGrowTextarea.vue";
import ContentDropdown from "../Ui/ContentDropdown.vue";

const props = defineProps({
  fields: Array,
  selection: String,
  userPrompt: String,
  activeField: Object,
});

const emit = defineEmits(["cancel", "close", "input", "submit", "success"]);

const _isKirby5 = isKirby5();
const panel = usePanel();
const {
  lastPrompt,
  currentIndex,
  addToHistory,
  navigateHistory,
  getRecentEntries,
} = useGenerationHistory();
const { templates, addTemplate, setTemplates } = usePromptTemplates();
const { getModelFields } = useModelFields();
const contentContext = createContentContext();

const textareaComponent = ref();
const textarea = computed(() => textareaComponent.value?.el);
const prompt = ref(props.userPrompt || "");
const files = ref([]);
const licenseStatus = ref();

const modelFields = ref([...(props.fields ?? [])]);
const fieldsDropdown = ref();
const selectedFieldNames = ref([]);
const placeholderDropdown = ref();
const isPlaceholderDropdownOpen = ref(false);
const placeholderSearch = ref("");
const templateDropdown = ref();
const historyDropdown = ref();

const selectionInsertOptions = [
  {
    value: "replace",
    text: panel.t("johannschopplich.copilot.replace"),
  },
  {
    value: "append",
    text: panel.t("johannschopplich.copilot.append"),
  },
];
const insertOption = ref(selectionInsertOptions[0].value);

// Prompt dialog is used in two contexts:
// 1. Multi-field generation mode (Panel view button)
// 2. Inline mode (toolbar) with append/replace selection option
const isFieldGenerationMode = computed(
  () => props.fields && props.fields.length > 0,
);

const recentPrompts = computed(() => getRecentEntries(10));
const hasPlaceholders = computed(() => {
  const matches = prompt.value.match(PLACEHOLDER_PATTERN);
  if (!matches) return false;

  // Only show preview if at least one placeholder is present in the content context
  const keys = matches.map((match) => match.slice(1, -1));
  return keys.some((key) => key in contentContext);
});
const resolvedPrompt = computed(() =>
  renderTemplate(prompt.value, contentContext, (key) => `{${key}}`).trim(),
);

const placeholderFields = computed(() => [
  {
    name: "title",
    label: panel.t("title"),
  },
  ...modelFields.value,
]);
const filteredPlaceholderFields = computed(() => {
  const query = placeholderSearch.value.toLowerCase();
  if (!query.trim()) return placeholderFields.value;

  return placeholderFields.value.filter(
    (field) =>
      field.name.toLowerCase().includes(query) ||
      (field.label && field.label.toLowerCase().includes(query)),
  );
});

useEventListener(textarea, "keydown", (event) => {
  // Listen to `Cmd/Ctrl + Enter` to submit the prompt
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();

    if (
      !prompt.value.trim() ||
      (isFieldGenerationMode.value && selectedFieldNames.value.length === 0)
    )
      return;

    submit();
  }

  // Listen to arrow up and down to navigate the prompt history
  if (
    (event.key === "ArrowUp" && event.target.selectionStart === 0) ||
    (event.key === "ArrowDown" &&
      event.target.selectionStart === event.target.value.length)
  ) {
    // Prevent cursor movement
    event.preventDefault();

    // Store current prompt when starting to navigate
    if (event.key === "ArrowUp" && currentIndex.value === -1) {
      lastPrompt.value = prompt.value;
    }

    const newPrompt = navigateHistory(event.key === "ArrowUp" ? "up" : "down");

    if (newPrompt !== undefined) {
      prompt.value = newPrompt;
    }
  }
});

(async () => {
  const context = await usePluginContext();
  licenseStatus.value =
    // eslint-disable-next-line no-undef
    __PLAYGROUND__ ? "active" : context.licenseStatus;

  // Fetch view fields for placeholder insertion if not passed as props
  if (!props.fields) {
    modelFields.value = await getModelFields();
  }

  if (props.activeField) {
    const fieldDefinition = findFieldDefinition(
      modelFields.value,
      props.activeField.name,
      props.activeField.type,
    );

    // Use field-specific custom user prompt if configured
    if (typeof fieldDefinition?.copilot?.userPrompt === "string") {
      prompt.value = fieldDefinition.copilot.userPrompt;
    }
  }
})();

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

function togglePlaceholderDropdown() {
  if (!isPlaceholderDropdownOpen.value) {
    // Reset search when opening dropdown
    placeholderSearch.value = "";
  }

  isPlaceholderDropdownOpen.value = !isPlaceholderDropdownOpen.value;
  placeholderDropdown.value?.toggle();
}

function insertFieldPlaceholder(fieldName) {
  const placeholder = `{${fieldName}}`;
  textareaComponent.value?.insertAtCursor(placeholder);
  isPlaceholderDropdownOpen.value = false;
}

function loadTemplate(template) {
  prompt.value = template.prompt;
  templateDropdown.value?.close();
  textarea.value?.focus();
}

function openSaveTemplateDialog() {
  panel.dialog.open({
    component: "k-form-dialog",
    props: {
      fields: {
        name: {
          label: panel.t("johannschopplich.copilot.template.name"),
          type: "text",
          required: true,
          autofocus: true,
        },
      },
      value: {
        name: "",
      },
    },
    on: {
      submit(values) {
        if (values.name) {
          addTemplate(values.name, prompt.value);
        }

        panel.dialog.close();
      },
    },
  });
}

function openEditTemplatesDialog() {
  panel.dialog.open({
    component: "k-form-dialog",
    props: {
      size: "huge",
      fields: {
        templates: {
          label: panel.t("johannschopplich.copilot.templates"),
          type: "structure",
          empty: panel.t("johannschopplich.copilot.template.empty"),
          columns: {
            name: {
              label: panel.t("johannschopplich.copilot.template.name"),
              width: "1/3",
            },
            prompt: {
              label: panel.t("johannschopplich.copilot.prompt.label"),
              width: "2/3",
            },
          },
          fields: {
            name: {
              label: panel.t("johannschopplich.copilot.template.name"),
              type: "text",
              required: true,
            },
            prompt: {
              label: panel.t("johannschopplich.copilot.prompt.label"),
              type: "textarea",
              required: true,
            },
          },
        },
      },
      value: {
        templates: templates.value.map((template) => ({
          name: template.name,
          prompt: template.prompt,
        })),
      },
    },
    on: {
      submit(values) {
        setTemplates(values.templates);
        panel.dialog.close();
      },
    },
  });
}

function loadPromptFromHistory(promptText) {
  prompt.value = promptText;
  historyDropdown.value?.close();
  textarea.value?.focus();
}

function getFieldPreview(fieldName) {
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
    <div
      class="kai-relative kai-rounded-[var(--rounded)] has-[textarea:focus]:kai-outline has-[textarea:focus]:kai-outline-[2px] has-[textarea:focus]:kai-outline-[var(--color-focus)]"
    >
      <AutoGrowTextarea
        ref="textareaComponent"
        :value="prompt"
        shared-class="kai-p-2 kai-leading-[1.5] focus:kai-outline-none"
        :placeholder="
          panel.t('johannschopplich.copilot.prompt.placeholder') +
          (selection
            ? ` (${panel.t('johannschopplich.copilot.prompt.selectionContext')})`
            : '')
        "
        rows="3"
        @input="prompt = $event"
      />

      <!-- Placeholder preview panel -->
      <details
        v-if="hasPlaceholders"
        class="kai-group kai-mx-2 kai-mb-2 kai-rounded-[var(--rounded)] kai-bg-[var(--color-background)]"
      >
        <summary
          class="kai-flex kai-cursor-pointer kai-list-none kai-items-center kai-gap-0.5 kai-rounded-[var(--rounded)] kai-p-1.5 focus:kai-outline focus:kai-outline-[2px] focus:kai-outline-[var(--color-focus)] [&::-webkit-details-marker]:kai-hidden"
        >
          <k-icon
            type="angle-dropdown"
            class="kai-size-[var(--icon-size)] kai-transition-transform [transform:rotate(-90deg)] group-open:[transform:rotate(0deg)]"
          />
          <span>{{ panel.t("johannschopplich.copilot.preview") }}</span>
        </summary>
        <div class="kai-px-1.5 kai-py-2">
          <p
            class="kai-whitespace-pre-wrap kai-leading-[1.375]"
            v-text="resolvedPrompt"
          />
        </div>
      </details>

      <div
        class="kai-flex kai-items-center kai-justify-between kai-px-2 kai-pb-2"
      >
        <div class="kai-flex kai-flex-wrap kai-items-center kai-gap-1">
          <!-- File picker button -->
          <k-button
            icon="attachment"
            :badge="
              _isKirby5 && files.length > 0
                ? {
                    theme: 'notice',
                    text: files.length,
                  }
                : undefined
            "
            :aria-label="
              files.length > 0
                ? `${panel.t('johannschopplich.copilot.files.select')} (${files.length})`
                : panel.t('johannschopplich.copilot.files.select')
            "
            @click="pickFiles()"
          />
          <k-button
            v-if="files.length > 0"
            :text="panel.t('johannschopplich.copilot.delete')"
            variant="dimmed"
            size="sm"
            @click="files = []"
          />

          <!-- Placeholder insertion dropdown -->
          <k-button
            icon="copilot-text-snippet"
            :dropdown="true"
            :aria-label="panel.t('johannschopplich.copilot.placeholder.insert')"
            class="max-sm:kai-hidden"
            @click="togglePlaceholderDropdown()"
          />
          <ContentDropdown
            ref="placeholderDropdown"
            @close="isPlaceholderDropdownOpen = false"
          >
            <header
              v-if="modelFields.length > 5"
              class="k-copilot-dropdown-content-header"
            >
              <div class="k-copilot-dropdown-content-search">
                <k-search-input
                  :value="placeholderSearch"
                  type="text"
                  :placeholder="
                    panel.t('johannschopplich.copilot.placeholder.search')
                  "
                  @input="placeholderSearch = $event"
                  @click.native.stop
                  @keydown.native.stop
                  @keydown.escape.native.prevent="togglePlaceholderDropdown()"
                />
              </div>
            </header>

            <div class="k-copilot-dropdown-content-body">
              <k-dropdown-item
                v-for="field in filteredPlaceholderFields"
                :key="field.name"
                @click="insertFieldPlaceholder(field.name)"
              >
                <span
                  class="kai-inline-flex kai-w-full kai-items-center kai-gap-3"
                >
                  <span>{{ field.label || field.name }}</span>
                  <span
                    v-if="getFieldPreview(field.name)"
                    class="kai-truncate kai-leading-[1.5] kai-text-[var(--color-text-dimmed)] [font-size:var(--font-size-tiny)]"
                    >{{ getFieldPreview(field.name) }}</span
                  >
                </span>
              </k-dropdown-item>
              <k-dropdown-item
                v-if="filteredPlaceholderFields.length === 0"
                disabled
              >
                {{ panel.t("johannschopplich.copilot.placeholder.notFound") }}
              </k-dropdown-item>
            </div>
          </ContentDropdown>

          <!-- Templates dropdown -->
          <k-button
            icon="bookmark"
            :dropdown="true"
            :aria-label="panel.t('johannschopplich.copilot.templates')"
            class="max-sm:kai-hidden"
            @click="templateDropdown?.toggle()"
          />
          <ContentDropdown ref="templateDropdown">
            <div class="k-copilot-dropdown-content-body">
              <!-- Save current prompt button -->
              <k-dropdown-item
                v-if="prompt.trim()"
                icon="add"
                @click="openSaveTemplateDialog()"
              >
                {{ panel.t("johannschopplich.copilot.template.saveAs") }}
              </k-dropdown-item>

              <!-- Edit templates button -->
              <k-dropdown-item
                v-if="templates.length > 0"
                icon="settings"
                @click="openEditTemplatesDialog()"
              >
                {{ panel.t("johannschopplich.copilot.template.edit") }}
              </k-dropdown-item>

              <hr v-if="templates.length > 0" />

              <!-- Saved templates list -->
              <k-dropdown-item
                v-for="template in templates"
                :key="template.id"
                @click="loadTemplate(template)"
              >
                <span class="kai-truncate">{{ template.name }}</span>
              </k-dropdown-item>

              <!-- Empty state -->
              <k-dropdown-item v-if="templates.length === 0" disabled>
                {{ panel.t("johannschopplich.copilot.template.empty") }}
              </k-dropdown-item>
            </div>
          </ContentDropdown>

          <!-- History dropdown -->
          <template v-if="recentPrompts.length > 0">
            <k-button
              icon="clock"
              :aria-label="panel.t('johannschopplich.copilot.history')"
              :dropdown="true"
              class="max-sm:kai-hidden"
              @click="historyDropdown?.toggle()"
            />
            <ContentDropdown ref="historyDropdown">
              <div class="k-copilot-dropdown-content-body">
                <k-dropdown-item
                  v-for="(promptText, index) in recentPrompts"
                  :key="index"
                  @click="loadPromptFromHistory(promptText)"
                >
                  <span class="kai-truncate">{{ promptText }}</span>
                </k-dropdown-item>
              </div>
            </ContentDropdown>
          </template>
        </div>

        <!-- Action buttons -->
        <div class="kai-flex kai-gap-2">
          <template v-if="isFieldGenerationMode">
            <k-button
              :text="panel.t('johannschopplich.copilot.fields')"
              variant="filled"
              :badge="
                selectedFieldNames.length > 0
                  ? {
                      theme: 'info',
                      text: selectedFieldNames.length,
                    }
                  : undefined
              "
              dropdown
              @click="fieldsDropdown?.toggle()"
            />
            <k-picklist-dropdown
              ref="fieldsDropdown"
              :options="
                modelFields.map((field) => ({
                  value: field.name,
                  text: field.label || field.name,
                }))
              "
              :empty="false"
              :value="selectedFieldNames"
              @input="selectedFieldNames = $event"
            />
          </template>
          <k-select-input
            v-else-if="selection"
            class="kai-underline kai-underline-offset-[var(--link-underline-offset)]"
            :options="selectionInsertOptions"
            :empty="false"
            :value="insertOption"
            @input="insertOption = $event"
          />

          <k-button
            theme="notice-icon"
            variant="filled"
            icon="sparkling"
            :disabled="!prompt.trim()"
            @click="submit()"
          >
            {{ panel.t("johannschopplich.copilot.generate") }}
          </k-button>
        </div>
      </div>

      <LicensingButtonGroup
        v-if="licenseStatus !== undefined"
        label="Kirby Copilot"
        api-namespace="__copilot__"
        :license-status="licenseStatus"
        pricing-url="https://kirby.tools/copilot/buy"
        class="k-copilot-prompt-dialog-licensing-buttons kai-absolute kai-right-0 kai-top-[calc(-0.25rem-24px-2px)]"
      />
    </div>
  </k-dialog>
</template>

<style>
.k-copilot-prompt-dialog {
  --dialog-color-back: var(--input-color-back);
  --dialog-padding: 0;
  --dialog-rounded: var(--rounded);
  overflow: visible;
}

.k-copilot-prompt-dialog-licensing-buttons[data-layout="collapsed"]
  > .k-button {
  --theme-color-border: var(--color-pink-900);
}
</style>
