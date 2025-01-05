<script>
import { computed, onMounted, ref } from "kirbyuse";

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

const emit = defineEmits(["input", "mounted"]);

const textarea = ref();
const text = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});

onMounted(() => {
  emit("mounted", textarea.value);
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
