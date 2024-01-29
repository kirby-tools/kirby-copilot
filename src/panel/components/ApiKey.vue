<script setup>
import { computed } from "kirbyuse";
import { STORAGE_KEY_PREFIX } from "../utils/storage";

defineProps({
  label: String,
  before: String,
  after: String,
  help: String,
  value: String,
});

const text = computed({
  get() {
    return sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`) || "";
  },
  set(value) {
    if (value) {
      sessionStorage.setItem(`${STORAGE_KEY_PREFIX}apiKey`, value);
    } else {
      sessionStorage.removeItem(`${STORAGE_KEY_PREFIX}apiKey`);
    }
  },
});
</script>

<template>
  <k-field input="apiKey" :label="label" :help="help">
    <k-input
      id="apiKey"
      v-model="text"
      type="password"
      icon="lock"
      :before="before"
      :after="after"
    />
  </k-field>
</template>
