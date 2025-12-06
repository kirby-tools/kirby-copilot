<script>
import { computed, ref } from "kirbyuse";

export default {
  inheritAttrs: false,
};
</script>

<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  sharedClass: {
    type: String,
    default: undefined,
  },
});

const emit = defineEmits(["input"]);

const textarea = ref();
const text = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});

const cursorPosition = ref({ start: 0, end: 0 });

function updateCursorPosition() {
  if (textarea.value) {
    cursorPosition.value = {
      start: textarea.value.selectionStart,
      end: textarea.value.selectionEnd,
    };
  }
}

function insertAtCursor(textToInsert) {
  const { start, end } = cursorPosition.value;
  const currentValue = props.value;

  // Insert text at the stored cursor position
  const newValue =
    currentValue.slice(0, start) + textToInsert + currentValue.slice(end);

  emit("input", newValue);

  // Restore focus and set cursor position after the inserted text
  requestAnimationFrame(() => {
    if (textarea.value) {
      textarea.value.focus();
      const newCursorPos = start + textToInsert.length;
      textarea.value.setSelectionRange(newCursorPos, newCursorPos);
      // Update stored position
      cursorPosition.value = { start: newCursorPos, end: newCursorPos };
    }
  });
}

function focus() {
  textarea.value?.focus();
}

defineExpose({
  insertAtCursor,
  focus,
  el: textarea,
});
</script>

<template>
  <div class="kai-grid">
    <textarea
      ref="textarea"
      v-model="text"
      class="stack-layer kai-resize-none kai-overflow-hidden"
      :class="sharedClass"
      v-bind="$attrs"
      @mouseup="updateCursorPosition"
      @keyup="updateCursorPosition"
      @focus="updateCursorPosition"
    />
    <!-- The weird space is needed to prevent jumpy behavior -->
    <div
      class="stack-layer kai-invisible kai-whitespace-pre-wrap"
      :class="sharedClass"
      v-text="`${value} `"
    />
  </div>
</template>

<style scoped>
.stack-layer {
  grid-area: 1 / 1 / 2 / 2;
}
</style>
