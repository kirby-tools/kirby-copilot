<script setup lang="ts">
import type { PropType } from "vue";
import type { Skill } from "../../types";
import { usePanel } from "kirbyuse";

defineProps({
  skills: {
    type: Array as PropType<readonly Skill[]>,
    required: true,
  },
  selectedIndex: {
    type: Number,
    required: true,
  },
  top: {
    type: Number as PropType<number | null>,
    default: null,
  },
  bottom: {
    type: Number as PropType<number | null>,
    default: null,
  },
  left: {
    type: Number,
    required: true,
  },
  anchorInToken: {
    type: Boolean,
    default: false,
  },
  listboxId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (event: "select", id: string): void;
  (event: "hover", index: number): void;
}>();

const panel = usePanel();
</script>

<template>
  <ul
    :id="listboxId"
    role="listbox"
    :aria-label="panel.t('johannschopplich.copilot.skill.suggestions')"
    class="k-dropdown-content kai-fixed kai-z-[var(--z-dropdown)] kai-max-h-[16rem] kai-max-w-[24rem] kai-min-w-[14rem] kai-overflow-y-auto"
    :class="[
      bottom !== null
        ? 'kai-mb-[var(--spacing-1)]'
        : 'kai-mt-[var(--spacing-1)]',
      anchorInToken && 'kai-ml-[calc(-1*var(--spacing-1))]',
    ]"
    :style="{
      top: top !== null ? `${top}px` : 'auto',
      bottom: bottom !== null ? `${bottom}px` : 'auto',
      left: `${left}px`,
    }"
    @mousedown.prevent
  >
    <li
      v-for="(skill, index) in skills"
      :id="`${listboxId}-opt-${index}`"
      :key="skill.id"
      role="option"
      :aria-selected="index === selectedIndex ? 'true' : undefined"
      @mousemove="emit('hover', index)"
      @mousedown.prevent="emit('select', skill.id)"
    >
      <k-dropdown-item
        :class="[
          index === selectedIndex &&
            'kai-[--button-color-back:var(--dropdown-color-hr)]',
        ]"
      >
        <span class="kai-w-full kai-inline-flex kai-items-center kai-gap-3">
          <span class="kai-truncate kai-leading-[1.5]">{{ skill.label }}</span>
          <span
            class="kai-[font-size:var(--font-size-tiny)] kai-truncate kai-text-[var(--color-text-dimmed)] kai-leading-[1.5]"
            v-text="skill.id"
          />
        </span>
      </k-dropdown-item>
    </li>
  </ul>
</template>
