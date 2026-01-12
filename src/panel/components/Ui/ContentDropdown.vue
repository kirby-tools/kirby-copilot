<script setup lang="ts">
import { ref } from "kirbyuse";

const emit = defineEmits(["close"]);

const dropdown = ref();

function close() {
  dropdown.value?.close();
}

function open(opener?: HTMLElement) {
  dropdown.value?.open(opener);
}

function toggle() {
  dropdown.value?.toggle();
}

defineExpose({
  close,
  open,
  toggle,
});
</script>

<template>
  <k-dropdown-content
    ref="dropdown"
    align-x="start"
    :navigate="false"
    class="k-copilot-dropdown-content"
  >
    <k-navigate
      element="nav"
      axis="y"
      select="input[type=search], label, .k-copilot-dropdown-content-body button"
      @prev="emit('close')"
    >
      <slot />
    </k-navigate>
  </k-dropdown-content>
</template>

<style>
.k-copilot-dropdown-content {
  padding: 0;
  max-width: 30rem;
  min-width: 8rem;
}

.k-copilot-dropdown-content
  :where(.k-copilot-dropdown-content-header, .k-copilot-dropdown-content-body) {
  padding: var(--dropdown-padding);
}

.k-copilot-dropdown-content .k-copilot-dropdown-content-header {
  border-bottom: 1px solid var(--dropdown-color-hr);
}

/* Mimic: https://github.com/getkirby/kirby/blob/42cd286dab62d87a331e53abfe103e4fba118dd6/panel/src/components/Dropdowns/PicklistDropdown.vue#L91 */
.k-copilot-dropdown-content .k-copilot-dropdown-content-body {
  max-height: calc(
    var(--button-height) * 9.5 + 2px * 9 + var(--dropdown-padding)
  );
  overflow-y: auto;
  outline-offset: -2px;
  overscroll-behavior: contain;
  scroll-padding-top: var(--dropdown-padding);
  scroll-padding-bottom: var(--dropdown-padding);
}

.k-copilot-dropdown-content-search {
  --input-rounded: var(--rounded-sm);
  display: flex;
  align-items: center;
  background: var(--dropdown-color-hr);
  border-radius: var(--rounded-sm);
  padding-inline-end: var(--input-padding);
}

.k-copilot-dropdown-content-search .k-search-input {
  height: var(--button-height);
}

.k-copilot-dropdown-content-search:focus-within {
  outline: var(--outline);
}
</style>
