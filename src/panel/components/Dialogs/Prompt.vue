<script setup>
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import { computed, isKirby5, ref, usePanel } from "kirbyuse";
import {
  useEventListener,
  useFields,
  useFilePicker,
  usePluginContext,
  usePromptHistory,
} from "../../composables";
import { findFieldInDefinitions } from "../../utils/fields";
import AutoGrowTextarea from "../Ui/AutoGrowTextarea.vue";

const props = defineProps({
  fields: {
    type: Array,
    default: () => [],
  },
  selection: {
    type: String,
    default: "",
  },
  userPrompt: {
    type: String,
    default: "",
  },
  fieldMeta: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["cancel", "close", "input", "submit", "success"]);

const _isKirby5 = isKirby5();
const panel = usePanel();
const { lastPrompt, currentIndex, addToHistory, navigateHistory } =
  usePromptHistory();
const { getViewFields } = useFields();

const textareaComponent = ref();
const textarea = computed(() => textareaComponent.value?.el);
const picklist = ref();
const placeholderDropdown = ref();
const files = ref([]);
const selectedFields = ref([]);
const insertOption = ref("append");
const prompt = ref(props.userPrompt || "");
const licenseStatus = ref();
const modelFields = ref([]);

useEventListener(textarea, "keydown", (event) => {
  // Listen to `Cmd/Ctrl + Enter` to submit the prompt
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();

    if (
      !prompt.value.trim() ||
      (props.fields.length > 0 && selectedFields.value.length === 0)
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

  // Fetch model fields for placeholder insertion
  const fields = await getViewFields();
  modelFields.value = fields;

  if (props.fieldMeta) {
    const fieldDefinition = await findFieldDefinition(fields, props.fieldMeta);

    // Use field-specific custom user prompt if configured
    if (fieldDefinition?.copilot?.userPrompt) {
      prompt.value = fieldDefinition.copilot.userPrompt;
    }
  }
})();

function submit() {
  addToHistory(prompt.value);
  emit("submit", {
    prompt: prompt.value,
    files: files.value,
    fields: selectedFields.value,
    append: insertOption.value === "append",
  });
}

async function findFieldDefinition(modelFields, fieldMeta) {
  const { name: fieldName, type: fieldType } = fieldMeta;

  for (const rootField of modelFields) {
    // Check if this root field matches
    if (rootField.name === fieldName) {
      if (!fieldType || rootField.type === fieldType) {
        return rootField;
      }
    }

    // Recursively search nested fields
    const resolvedField = findFieldInDefinitions(
      rootField,
      fieldName,
      fieldType,
    );
    if (resolvedField) return resolvedField;
  }
}

async function pickFiles() {
  const selectedFiles = await useFilePicker();
  files.value = [...files.value, ...selectedFiles];
}

function insertFieldPlaceholder(fieldName) {
  const placeholder = `{${fieldName}}`;
  textareaComponent.value?.insertAtCursor(placeholder);
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
      class="kai-relative kai-rounded-[var(--rounded)] focus-within:kai-outline focus-within:kai-outline-[2px] focus-within:kai-outline-[var(--color-focus,currentColor)]"
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

      <div
        class="kai-flex kai-items-center kai-justify-between kai-px-2 kai-pb-2"
      >
        <k-button-group class="kai-gap-1">
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
            @click="pickFiles()"
          />
          <k-button
            v-if="files.length > 0"
            :text="panel.t('johannschopplich.copilot.delete')"
            variant="dimmed"
            size="sm"
            @click="files = []"
          />
          <div class="kai-flex kai-items-center kai-justify-between">
            <k-button
              v-if="modelFields.length > 0"
              icon="copilot-text-snippet"
              :title="panel.t('johannschopplich.copilot.insertPlaceholder')"
              :dropdown="true"
              @click="placeholderDropdown?.toggle()"
            />
            <k-dropdown-content
              ref="placeholderDropdown"
              :options="
                modelFields.map((field) => ({
                  text: field.label || field.name,
                  click: () => insertFieldPlaceholder(field.name),
                }))
              "
            />
          </div>
        </k-button-group>

        <div class="kai-flex kai-gap-2">
          <template v-if="fields.length > 0">
            <k-button
              :text="panel.t('johannschopplich.copilot.fields')"
              variant="filled"
              :badge="
                selectedFields.length > 0
                  ? {
                      theme: 'info',
                      text: selectedFields.length,
                    }
                  : undefined
              "
              dropdown
              @click="picklist.toggle()"
            />
            <k-picklist-dropdown
              ref="picklist"
              :options="
                fields.map((field) => ({
                  value: field.name,
                  text: field.label || field.name,
                }))
              "
              :empty="false"
              :value="selectedFields"
              @input="selectedFields = $event"
            />
          </template>
          <k-select-input
            v-else-if="selection"
            class="kai-underline kai-underline-offset-[var(--link-underline-offset)]"
            :options="[
              {
                value: 'append',
                text: panel.t('johannschopplich.copilot.append'),
              },
              {
                value: 'replace',
                text: panel.t('johannschopplich.copilot.replace'),
              },
            ]"
            :empty="false"
            :value="insertOption"
            @input="insertOption = $event"
          />

          <k-button
            theme="notice-icon"
            variant="filled"
            icon="sparkling"
            :disabled="
              !prompt.trim() ||
              (fields.length > 0 && selectedFields.length === 0)
            "
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
        class="kai-absolute kai-right-0 kai-top-[calc(-0.25rem-24px)]"
      />
    </div>
  </k-dialog>
</template>

<style>
.k-copilot-prompt-dialog {
  --dialog-color-back: var(--toolbar-back);
  --dialog-padding: 0;
  --dialog-rounded: var(--rounded);
  overflow: visible;
}
</style>
