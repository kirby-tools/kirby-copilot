<script setup lang="ts">
import type { PropType } from "vue";
import type { CopilotFieldError, CopilotFieldLabels } from "../../types";
import {
  disabled as disabledProp,
  help as helpProp,
  id as idProp,
  name as nameProp,
} from "kirbyuse/props";
import { computed, nextTick, useTemplateRef } from "vue";

const props = defineProps({
  ...disabledProp,
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
  isGenerating: Boolean,
  canUndo: Boolean,
  fileNames: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  /** Note on the file a file view attaches with `files: auto`. */
  modelFileText: String,
});

const emit = defineEmits<{
  (event: "generate"): void;
  (event: "abort"): void;
  (event: "undo"): void;
  (event: "pickFiles"): void;
  (event: "removeFile", index: number): void;
  (event: "update:prompt", value: string): void;
}>();

const attachButton = useTemplateRef<{ focus: () => void }>("attachButton");

const canAttachFiles = computed(() => props.files === true);
const canGenerate = computed(() => !props.disabled && !props.isLoading);
const canResetPrompt = computed(
  () =>
    props.editable && !!props.userPrompt && props.prompt !== props.userPrompt,
);
// Kirby's input frame reads as "type here", so a composer with nothing to type
// and no files to pick goes without it.
const hasInputFrame = computed(() => props.editable || canAttachFiles.value);
const fileTags = computed(() =>
  canAttachFiles.value
    ? props.fileNames.map((name, index) => ({
        text: name,
        value: index,
        icon: "attachment",
      }))
    : [],
);
const actionButtons = computed(() => [
  ...(props.canUndo
    ? [
        {
          key: "undo",
          icon: "undo",
          title: props.labels.undo,
          disabled: props.disabled,
          click: () => emit("undo"),
        },
      ]
    : []),
  props.isGenerating
    ? {
        key: "run",
        icon: "loader",
        text: props.labels.stop,
        click: (event: MouseEvent) => {
          // Generate turns into Stop on the first click of a double-click.
          if (event.detail > 1) return;
          emit("abort");
        },
      }
    : {
        key: "run",
        icon: props.isLoading ? "loader" : props.icon,
        text: props.labels.generate,
        theme: props.theme,
        disabled: !canGenerate.value,
        click: () => emit("generate"),
      },
]);

async function removeFileTag(remainingIndexes: number[]) {
  const index = fileTags.value.findIndex(
    (tag) => !remainingIndexes.includes(tag.value),
  );
  if (index < 0) return;

  emit("removeFile", index);

  // The tags unmount with the last one, which would drop focus to the body.
  if (remainingIndexes.length === 0) {
    await nextTick();
    attachButton.value?.focus();
  }
}
</script>

<template>
  <k-field
    :id="id"
    :disabled="disabled"
    :help="help"
    :input="editable && !error ? id : false"
    :label="label"
    :name="name"
    type="copilot"
    class="k-copilot-field"
  >
    <template v-if="$slots.options" #options>
      <slot name="options" />
    </template>

    <k-box v-if="error?.type === 'model'" theme="negative">
      <k-text size="small">
        Missing
        <code>model</code>
        property in the
        <code>{{
          `johannschopplich.copilot.providers.${error.provider}`
        }}</code>
        global configuration.
      </k-text>
    </k-box>
    <k-box v-else-if="error?.type === 'field'" theme="negative">
      <k-text size="small">
        The <code>{{ error.field }}</code> field does not exist in the current
        model.
      </k-text>
    </k-box>
    <k-box v-else-if="error?.type === 'userPrompt'" theme="negative">
      <k-text size="small">
        If the user prompt cannot be edited by the user, a default
        <code>userPrompt</code> has to be set in the field configuration.
      </k-text>
    </k-box>
    <k-input v-else-if="hasInputFrame" type="textarea" :disabled="disabled">
      <k-textarea-input
        v-if="editable"
        :id="id"
        :value="prompt"
        :placeholder="labels.placeholder"
        :buttons="false"
        :disabled="disabled"
        @input="emit('update:prompt', $event)"
        @submit="canGenerate && emit('generate')"
      />
      <div
        v-if="fileTags.length"
        class="kai-px-[var(--input-padding)] kai-pb-[var(--input-padding)] first:kai-pt-[var(--input-padding)]"
      >
        <k-tags
          :value="fileTags"
          :disabled="disabled || isGenerating"
          :draggable="false"
          removable
          theme="light"
          @input="removeFileTag"
        />
      </div>
      <!-- `k-input` focuses the textarea on any click inside it. -->
      <k-bar
        class="kai-[--bar-height:auto] kai-p-[var(--spacing-1)] [&:not(:first-child)]:kai-[border-top:1px_solid_var(--toolbar-border)]"
        @click.stop
      >
        <k-button-group v-if="canAttachFiles || canResetPrompt">
          <k-button
            v-if="canAttachFiles"
            ref="attachButton"
            icon="attachment"
            :title="labels.selectFiles"
            :disabled="disabled || isGenerating"
            size="xs"
            @click="emit('pickFiles')"
          />
          <k-button
            v-if="canResetPrompt"
            icon="refresh"
            :title="labels.reset"
            :disabled="disabled"
            size="xs"
            @click="emit('update:prompt', userPrompt!)"
          />
        </k-button-group>
        <span
          v-if="modelFileText"
          class="kai-px-[var(--spacing-1)] kai-text-[color:var(--input-color-description)] kai-leading-[var(--leading-tight)]"
        >
          {{ modelFileText }}
        </span>
        <k-button-group layout="collapsed" class="kai-ms-auto kai-shrink-0">
          <k-button
            v-for="{ key, ...button } in actionButtons"
            :key="key"
            v-bind="button"
            variant="filled"
            size="xs"
          />
        </k-button-group>
      </k-bar>
    </k-input>
    <k-bar v-else class="kai-[--bar-height:auto]">
      <span
        v-if="modelFileText"
        class="kai-text-[length:var(--text-sm)] kai-text-[color:var(--color-text-dimmed)] kai-leading-[var(--leading-tight)]"
      >
        {{ modelFileText }}
      </span>
      <k-button-group layout="collapsed" class="kai-ms-auto kai-shrink-0">
        <k-button
          v-for="{ key, ...button } in actionButtons"
          :key="key"
          v-bind="button"
          variant="filled"
        />
      </k-button-group>
    </k-bar>
  </k-field>
</template>
