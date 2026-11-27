<script setup lang="ts">
import type { PropType } from "vue";
import type { FilePreview } from "../../types";
import { computed } from "vue";

const props = defineProps({
  previews: {
    type: Array as PropType<FilePreview[]>,
    required: true,
  },
  disabled: Boolean,
});

const emit = defineEmits<{
  (event: "remove", index: number): void;
}>();

const tags = computed(() =>
  props.previews.map(({ name, image }, index) => ({
    text: name,
    value: index,
    image,
  })),
);

function removeTag(remainingIndexes: number[]) {
  emit(
    "remove",
    tags.value.findIndex((tag) => !remainingIndexes.includes(tag.value)),
  );
}
</script>

<template>
  <k-tags
    :value="tags"
    :disabled="disabled"
    :draggable="false"
    removable
    theme="light"
    @input="removeTag"
  />
</template>
