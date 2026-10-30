<script setup lang="ts">
import type { PropType } from "vue";
import type { CopilotFieldError, CopilotFieldLabels } from "../../types";
import {
  help as helpProp,
  id as idProp,
  name as nameProp,
} from "kirbyuse/props";
import { computed } from "vue";

const props = defineProps({
  ...helpProp,
  ...idProp,
  ...nameProp,
  label: {
    type: String,
    required: true,
  },
  labels: {
    type: Object as PropType<CopilotFieldLabels>,
    required: true,
  },
  /** Plugin configuration still loading. */
  isLoading: Boolean,
  error: Object as PropType<CopilotFieldError>,
  icon: {
    type: String,
    default: "sparkling",
  },
  theme: {
    type: String,
    default: "notice-icon",
  },
  size: {
    type: String,
    default: "md",
  },
  editable: {
    type: Boolean,
    default: true,
  },
  files: {
    type: [Boolean, String] as PropType<boolean | "auto">,
    default: true,
  },
  prompt: {
    type: String,
    default: "",
  },
  userPrompt: String,
  open: Boolean,
  isGenerating: Boolean,
  canUndo: Boolean,
  /** Content the editor may not change. */
  isReadOnly: Boolean,
  fileCount: {
    type: Number,
    default: 0,
  },
  /** Note on the file a file view attaches with `files: auto`. */
  modelFileText: String,
});

const emit = defineEmits<{
  (event: "generate"): void;
  (event: "abort"): void;
  (event: "undo"): void;
  (event: "pickFiles"): void;
  (event: "clearFiles"): void;
  (event: "update:prompt", value: string): void;
  (event: "update:open", value: boolean): void;
}>();

const canAttachFiles = computed(() => props.files === true);
const summary = computed(() =>
  [
    props.editable && props.labels.prompt,
    canAttachFiles.value && props.labels.context,
  ]
    .filter(Boolean)
    .join(", "),
);
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
    <template v-if="$slots.options" #options>
      <slot name="options" />
    </template>

    <template v-if="!isLoading">
      <k-box v-if="error?.type === 'model'" theme="empty">
        <k-text>
          Missing
          <code>model</code>
          property in the
          <code>{{
            `johannschopplich.copilot.providers.${error.provider}`
          }}</code>
          global configuration.
        </k-text>
      </k-box>
      <k-box v-else-if="error?.type === 'field'" theme="empty">
        <k-text>
          The <code>{{ error.field }}</code> field does not exist in the current
          model.
        </k-text>
      </k-box>
      <k-box v-else-if="error?.type === 'userPrompt'" theme="empty">
        <k-text>
          If the user prompt cannot be edited by the user, a default
          <code>userPrompt</code> has to be set in the field configuration.
        </k-text>
      </k-box>
      <div v-else class="[&>*+*]:kai-mt-[var(--spacing-4)]">
        <k-button-group layout="collapsed">
          <k-button
            :icon="isGenerating ? 'loader' : icon"
            :text="labels.generate"
            :theme="theme"
            variant="filled"
            :size="size"
            :disabled="isGenerating || isReadOnly"
            @click="emit('generate')"
          />
          <k-button
            v-if="isGenerating"
            icon="cancel"
            :text="labels.stop"
            theme="notice"
            variant="filled"
            :size="size"
            @click="emit('abort')"
          />
          <k-button
            v-if="canUndo"
            icon="undo"
            :text="labels.undo"
            variant="filled"
            :size="size"
            @click="emit('undo')"
          />
        </k-button-group>

        <details
          v-if="summary"
          :open="open"
          @toggle="
            emit('update:open', ($event.target as HTMLDetailsElement).open)
          "
        >
          <summary>{{ summary }}</summary>

          <div
            class="kai-mt-[var(--spacing-3)] [&>*+*]:kai-mt-[var(--spacing-2)]"
          >
            <div v-if="editable" class="kai-text-right">
              <k-input
                :key="open ? 1 : 0"
                :value="prompt"
                class="kai-mb-[var(--spacing-1)]"
                :placeholder="labels.placeholder"
                type="textarea"
                :buttons="false"
                @input="emit('update:prompt', $event)"
              />
              <k-button
                v-if="userPrompt && prompt !== userPrompt"
                icon="undo"
                :text="labels.reset"
                variant="dimmed"
                size="xs"
                @click="emit('update:prompt', userPrompt)"
              />
            </div>

            <k-button-group v-if="canAttachFiles" layout="collapsed">
              <k-button
                icon="attachment"
                :text="labels.selectFiles"
                variant="filled"
                :badge="
                  fileCount > 0
                    ? { theme: 'notice', text: fileCount }
                    : undefined
                "
                size="sm"
                class="!kai-rounded-[var(--button-rounded)]"
                @click="emit('pickFiles')"
              />
              <k-button
                v-if="fileCount > 0"
                :text="labels.clearFiles"
                variant="dimmed"
                size="sm"
                @click="emit('clearFiles')"
              />
            </k-button-group>
            <k-box v-else-if="modelFileText" theme="none">
              <k-text>{{ modelFileText }}</k-text>
            </k-box>
          </div>
        </details>
      </div>
    </template>
  </k-field>
</template>
