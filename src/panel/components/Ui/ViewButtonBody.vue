<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "sparkling",
  },
  theme: {
    type: String,
    default: "notice-icon",
  },
  isGenerating: Boolean,
  disabled: Boolean,
});

const emit = defineEmits<{
  (event: "click"): void;
  (event: "abort"): void;
}>();

const isHovering = ref(false);
const isAbortable = computed(() => isHovering.value && props.isGenerating);
</script>

<template>
  <div @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <!-- `k-button` passes no listener but `click` on to its element. -->
    <k-button
      :icon="isAbortable ? 'cancel' : isGenerating ? 'loader' : icon"
      :text="label"
      :theme="isAbortable ? 'notice' : theme"
      variant="filled"
      size="sm"
      responsive
      :disabled="disabled"
      @click="isAbortable ? emit('abort') : emit('click')"
    />
  </div>
</template>
