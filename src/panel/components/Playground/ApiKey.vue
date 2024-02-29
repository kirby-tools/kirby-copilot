<script>
import { computed } from "kirbyuse";
import {
  after as _after,
  before as _before,
  help as _help,
  label as _label,
} from "kirbyuse/props";
import { STORAGE_KEY_PREFIX } from "../../constants";

const propsDefinition = {
  ..._label,
  ..._before,
  ..._after,
  ..._help,
  value: String,
};

export default {
  inheritAttrs: false,
};
</script>

<script setup>
defineProps(propsDefinition);

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
  <k-field input="apiKey" :label="label" :help="help" required>
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
