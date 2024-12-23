<script>
import { computed } from "kirbyuse";

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

const text = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});
</script>

<template>
  <div class="kai-grid">
    <textarea
      v-model="text"
      class="auto-grow-area kai-resize-none kai-overflow-hidden"
      :class="sharedClass"
      v-bind="$attrs"
    />
    <!-- The weird space is needed to prevent jumpy behavior -->
    <div
      class="auto-grow-area kai-invisible kai-whitespace-pre-wrap"
      :class="sharedClass"
      v-text="`${value} `"
    />
  </div>
</template>

<style scoped>
.auto-grow-area {
  grid-area: 1 / 1 / 2 / 2;
}
</style>
