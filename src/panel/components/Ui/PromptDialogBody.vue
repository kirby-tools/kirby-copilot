<script setup lang="ts">
import type { PropType } from "vue";
import type {
  PlaceholderField,
  PromptContext,
  PromptDialogLabels,
  PromptTemplate,
} from "../../types";
import { computed, ref } from "vue";
import ContentDropdown from "./ContentDropdown.vue";

const props = defineProps({
  labels: {
    type: Object as PropType<PromptDialogLabels>,
    required: true,
  },
  prompt: {
    type: String,
    default: "",
  },
  /** Prompt with its placeholders filled in. */
  preview: String,
  previewOpen: Boolean,
  fileCount: {
    type: Number,
    default: 0,
  },
  /** Fields of a multi-field generation. */
  fields: Array as PropType<Pick<PlaceholderField, "name" | "label">[]>,
  selectedFieldNames: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  /** Text selected in a field, which the result replaces or extends. */
  selection: String,
  insertOption: String as PropType<PromptContext["insertMode"]>,
  insertOptions: {
    type: Array as PropType<
      { value: NonNullable<PromptContext["insertMode"]>; text: string }[]
    >,
    default: () => [],
  },
  placeholderFields: {
    type: Array as PropType<PlaceholderField[]>,
    default: () => [],
  },
  placeholderSearch: {
    type: String,
    default: "",
  },
  /** User templates, the only ones the editor can change. */
  templates: {
    type: Array as PropType<PromptTemplate[]>,
    default: () => [],
  },
  allTemplates: {
    type: Array as PropType<PromptTemplate[]>,
    default: () => [],
  },
  recentPrompts: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});

const emit = defineEmits<{
  (event: "pickFiles"): void;
  (event: "clearFiles"): void;
  (event: "pickPages"): void;
  (event: "insertPlaceholder", fieldName: string): void;
  (event: "saveTemplate"): void;
  (event: "editTemplates"): void;
  (event: "loadTemplate", template: PromptTemplate): void;
  (event: "loadPrompt", prompt: string): void;
  (event: "update:selectedFieldNames", value: string[]): void;
  (
    event: "update:insertOption",
    value: NonNullable<PromptContext["insertMode"]>,
  ): void;
  (event: "update:placeholderSearch", value: string): void;
  (event: "submit"): void;
}>();

// Placeholder entries, the title included, from which the dropdown offers a search.
const SEARCHABLE_PLACEHOLDER_COUNT = 7;

const fieldsDropdown = ref<{ toggle: () => void }>();
const placeholderDropdown = ref<InstanceType<typeof ContentDropdown>>();
const templateDropdown = ref<InstanceType<typeof ContentDropdown>>();
const historyDropdown = ref<InstanceType<typeof ContentDropdown>>();
const isPlaceholderDropdownOpen = ref(false);

const isFieldGenerationMode = computed(
  () => props.fields !== undefined && props.fields.length > 0,
);
const filteredPlaceholderFields = computed(() => {
  const query = props.placeholderSearch.toLowerCase();
  if (!query.trim()) return props.placeholderFields;

  return props.placeholderFields.filter(
    (field) =>
      field.name.toLowerCase().includes(query) ||
      field.label?.toLowerCase().includes(query),
  );
});

function togglePlaceholderDropdown() {
  if (!isPlaceholderDropdownOpen.value) {
    emit("update:placeholderSearch", "");
  }

  isPlaceholderDropdownOpen.value = !isPlaceholderDropdownOpen.value;
  placeholderDropdown.value?.toggle();
}

function pickPages() {
  placeholderDropdown.value?.close();
  isPlaceholderDropdownOpen.value = false;
  emit("pickPages");
}

function loadTemplate(template: PromptTemplate) {
  templateDropdown.value?.close();
  emit("loadTemplate", template);
}

function loadPrompt(prompt: string) {
  historyDropdown.value?.close();
  emit("loadPrompt", prompt);
}
</script>

<template>
  <div
    class="kai-relative kai-rounded-[var(--rounded)] has-[.ProseMirror:focus]:kai-outline-[2px] has-[.ProseMirror:focus]:kai-outline-[var(--color-focus)] has-[.ProseMirror:focus]:kai-outline"
  >
    <slot />

    <details
      v-if="preview"
      :open="previewOpen"
      class="kai-group kai-mx-[var(--spacing-2)] kai-mb-[var(--spacing-2)] kai-rounded-[var(--rounded)] kai-bg-[var(--panel-color-back)]"
    >
      <summary
        class="kai-flex kai-cursor-pointer kai-list-none kai-items-center kai-gap-0.5 kai-rounded-[var(--rounded)] kai-p-1.5 [&::-webkit-details-marker]:kai-hidden focus:kai-outline-[2px] focus:kai-outline-[var(--color-focus)] focus:kai-outline"
      >
        <k-icon
          type="angle-dropdown"
          class="kai-[transform:rotate(-90deg)] kai-size-[var(--icon-size)] kai-transition-transform group-open:kai-[transform:rotate(0deg)]"
        />
        <span>{{ labels.preview }}</span>
      </summary>
      <div class="kai-px-1.5 kai-py-[var(--spacing-2)]">
        <p
          class="kai-whitespace-pre-wrap kai-leading-[1.375]"
          v-text="preview"
        />
      </div>
    </details>

    <div
      class="kai-flex kai-items-center kai-justify-between kai-px-[var(--spacing-2)] kai-pb-[var(--spacing-2)]"
    >
      <div
        class="kai-flex kai-flex-wrap kai-items-center kai-gap-[var(--spacing-1)]"
      >
        <!-- File picker button -->
        <k-button
          icon="attachment"
          :badge="
            fileCount > 0 ? { theme: 'notice', text: fileCount } : undefined
          "
          :aria-label="
            fileCount > 0
              ? `${labels.selectFiles} (${fileCount})`
              : labels.selectFiles
          "
          @click="emit('pickFiles')"
        />
        <k-button
          v-if="fileCount > 0"
          :text="labels.clearFiles"
          variant="dimmed"
          size="sm"
          @click="emit('clearFiles')"
        />

        <!-- Placeholder insertion dropdown -->
        <k-button
          icon="copilot-text-snippet"
          :dropdown="true"
          :aria-label="labels.insert"
          class="max-sm:kai-hidden"
          @click="togglePlaceholderDropdown()"
        />
        <ContentDropdown
          ref="placeholderDropdown"
          @close="isPlaceholderDropdownOpen = false"
        >
          <header
            v-if="placeholderFields.length >= SEARCHABLE_PLACEHOLDER_COUNT"
            class="k-copilot-dropdown-content-header"
          >
            <div class="k-copilot-dropdown-content-search">
              <k-search-input
                :value="placeholderSearch"
                type="text"
                :placeholder="labels.search"
                @input="emit('update:placeholderSearch', $event)"
                @click.stop
                @keydown.stop
                @keydown.escape.prevent="togglePlaceholderDropdown()"
              />
            </div>
          </header>

          <div class="k-copilot-dropdown-content-body">
            <k-dropdown-item icon="url" @click="pickPages()">
              {{ labels.selectPages }}
            </k-dropdown-item>
            <hr />
            <k-dropdown-item
              v-for="field in filteredPlaceholderFields"
              :key="field.name"
              @click="emit('insertPlaceholder', field.name)"
            >
              <span
                class="kai-w-full kai-inline-flex kai-items-center kai-gap-[var(--spacing-3)]"
              >
                <span>{{ field.label || field.name }}</span>
                <span
                  v-if="field.preview"
                  class="kai-truncate kai-text-[length:var(--text-xs)]/[1.5] kai-text-[color:var(--color-text-dimmed)]"
                  v-text="field.preview"
                />
              </span>
            </k-dropdown-item>
            <k-dropdown-item
              v-if="filteredPlaceholderFields.length === 0"
              disabled
            >
              {{ labels.notFound }}
            </k-dropdown-item>
          </div>
        </ContentDropdown>

        <!-- Templates dropdown -->
        <k-button
          icon="bookmark"
          :dropdown="true"
          :aria-label="labels.templates"
          class="max-sm:kai-hidden"
          @click="templateDropdown?.toggle()"
        />
        <ContentDropdown ref="templateDropdown">
          <div class="k-copilot-dropdown-content-body">
            <k-dropdown-item
              v-if="prompt.trim()"
              icon="add"
              @click="emit('saveTemplate')"
            >
              {{ labels.saveTemplate }}
            </k-dropdown-item>

            <k-dropdown-item
              v-if="templates.length > 0"
              icon="settings"
              @click="emit('editTemplates')"
            >
              {{ labels.editTemplates }}
            </k-dropdown-item>

            <hr v-if="allTemplates.length > 0" />

            <k-dropdown-item
              v-for="template in allTemplates"
              :key="template.id"
              @click="loadTemplate(template)"
            >
              {{ template.label }}
            </k-dropdown-item>

            <k-dropdown-item v-if="allTemplates.length === 0" disabled>
              {{ labels.noTemplates }}
            </k-dropdown-item>
          </div>
        </ContentDropdown>

        <!-- History dropdown -->
        <template v-if="recentPrompts.length > 0">
          <k-button
            icon="clock"
            :aria-label="labels.history"
            :dropdown="true"
            class="max-sm:kai-hidden"
            @click="historyDropdown?.toggle()"
          />
          <ContentDropdown ref="historyDropdown">
            <div class="k-copilot-dropdown-content-body">
              <k-dropdown-item
                v-for="(recentPrompt, index) in recentPrompts"
                :key="index"
                @click="loadPrompt(recentPrompt)"
              >
                {{ recentPrompt }}
              </k-dropdown-item>
            </div>
          </ContentDropdown>
        </template>
      </div>

      <!-- Action buttons -->
      <div class="kai-flex kai-gap-[var(--spacing-2)]">
        <template v-if="isFieldGenerationMode">
          <k-button
            :text="labels.fields"
            variant="filled"
            :badge="
              selectedFieldNames.length > 0
                ? { theme: 'info', text: selectedFieldNames.length }
                : undefined
            "
            dropdown
            @click="fieldsDropdown?.toggle()"
          />
          <k-picklist-dropdown
            ref="fieldsDropdown"
            :options="
              fields!.map((field) => ({
                value: field.name,
                text: field.label || field.name,
              }))
            "
            :empty="false"
            :value="selectedFieldNames"
            @input="emit('update:selectedFieldNames', $event)"
          />
        </template>
        <k-select-input
          v-else-if="selection"
          class="kai-underline kai-underline-offset-[var(--link-underline-offset)]"
          :options="insertOptions"
          :empty="false"
          :value="insertOption"
          @input="emit('update:insertOption', $event)"
        />

        <k-button
          theme="notice-icon"
          variant="filled"
          icon="sparkling"
          :disabled="!prompt.trim()"
          @click="emit('submit')"
        >
          {{ labels.generate }}
        </k-button>
      </div>
    </div>

    <slot name="licensing" />
  </div>
</template>
