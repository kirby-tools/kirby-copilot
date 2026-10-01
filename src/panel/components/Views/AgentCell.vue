<script setup lang="ts">
import type { PropType } from "vue";
import type { ConnectedAgent } from "../../types";
import { computed, usePanel } from "kirbyuse";

const props = defineProps({
  value: Object as PropType<ConnectedAgent>,
});

const panel = usePanel();

// An unverified client's redirect URI proves no host, so the badge shows none.
const badge = computed(() =>
  [
    props.value?.isVerified
      ? props.value.host
      : panel.t("johannschopplich.copilot.agents.unverified"),
    props.value?.isLocal
      ? panel.t("johannschopplich.copilot.agents.localApp")
      : undefined,
  ]
    .filter(Boolean)
    .join(" · "),
);
</script>

<template>
  <div
    class="kai-flex kai-items-center kai-gap-[var(--spacing-2)] kai-px-[var(--table-cell-padding)] kai-py-[var(--spacing-2)]"
  >
    <span>{{ value?.name }}</span>
    <k-tag v-if="badge" :text="badge" element="span" theme="light" />
  </div>
</template>
