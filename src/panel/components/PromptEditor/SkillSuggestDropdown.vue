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
    type: Number,
    required: true,
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
  (e: "select", id: string): void;
  (e: "hover", index: number): void;
}>();

const panel = usePanel();
</script>

<template>
  <ul
    :id="listboxId"
    role="listbox"
    :aria-label="panel.t('johannschopplich.copilot.skill.suggestions')"
    class="k-dropdown-content k-copilot-skill-suggest"
    :class="[anchorInToken && 'kai-ml-[calc(-1*var(--spacing-1))]']"
    :style="{ top: `${top}px`, left: `${left}px` }"
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
      <k-dropdown-item :class="[index === selectedIndex && 'is-active']">
        <span class="kai-inline-flex kai-w-full kai-items-center kai-gap-3">
          <span class="kai-truncate kai-leading-[1.5]">{{ skill.label }}</span>
          <span
            class="kai-truncate kai-leading-[1.5] kai-text-[var(--color-text-dimmed)] [font-size:var(--font-size-tiny)]"
            v-text="skill.id"
          />
        </span>
      </k-dropdown-item>
    </li>
  </ul>
</template>

<style>
.k-copilot-skill-suggest {
  position: fixed;
  z-index: var(--z-dropdown);
  min-width: 14rem;
  max-width: 24rem;
  max-height: 16rem;
  margin-top: var(--spacing-1);
  overflow-y: auto;
}

.k-copilot-skill-suggest .k-dropdown-item.is-active {
  --button-color-back: var(--dropdown-color-hr);
}
</style>
