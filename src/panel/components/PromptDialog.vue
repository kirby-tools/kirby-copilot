<script setup>
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import { isKirby5, ref, usePanel } from "kirbyuse";
import {
  useEventListener,
  useFilePicker,
  usePluginContext,
  usePromptHistory,
} from "../composables";
import AutoGrowTextarea from "./Ui/AutoGrowTextarea.vue";

defineProps({
  selection: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["cancel", "close", "input", "submit", "success"]);

const _isKirby5 = isKirby5();
const panel = usePanel();
const { lastPrompt, addToHistory, navigateHistory } = usePromptHistory();

const textarea = ref();
const files = ref([]);
const insertOption = ref("append");
const prompt = ref("");
const isBadgeHovered = ref(false);
const licenseStatus = ref();

useEventListener(textarea, "keydown", (event) => {
  // Listen to `Cmd/Ctrl + Enter` to submit the prompt
  if (event.metaKey && event.key === "Enter") {
    submit();
  }

  // Listen to arrow up and down to navigate the prompt history
  if (
    (event.key === "ArrowUp" && event.target.selectionStart === 0) ||
    (event.key === "ArrowDown" &&
      event.target.selectionStart === event.target.value.length)
  ) {
    event.preventDefault();

    // Store current prompt when starting to navigate
    if (event.key === "ArrowUp" && prompt.value && lastPrompt.value === "") {
      lastPrompt.value = prompt.value;
    }

    const newPrompt = navigateHistory(event.key === "ArrowUp" ? "up" : "down");

    if (newPrompt !== undefined) {
      prompt.value = newPrompt;
    }
  }
});

(async () => {
  const context = await usePluginContext();
  licenseStatus.value =
    // eslint-disable-next-line no-undef
    __PLAYGROUND__ ? "active" : context.licenseStatus;
})();

function submit() {
  addToHistory(prompt.value);
  emit("submit", {
    prompt: prompt.value,
    files: files.value,
    append: insertOption.value === "append",
  });
}

async function pickFiles() {
  const pickedFiles = await useFilePicker();
  files.value = [...files.value, ...pickedFiles];
}
</script>

<template>
  <k-dialog
    :cancel-button="false"
    :submit-button="false"
    :visible="true"
    size="medium"
    class="k-copilot-prompt-dialog"
    @cancel="emit('cancel')"
  >
    <div
      class="kai-relative kai-rounded-[var(--rounded)] kai-pb-[calc(1rem+32px)] focus-within:kai-outline focus-within:kai-outline-[2px] focus-within:kai-outline-[var(--color-focus,currentColor)]"
    >
      <AutoGrowTextarea
        :value="prompt"
        shared-class="kai-p-2 kai-leading-[1.5] focus:kai-outline-none"
        :placeholder="
          panel.t(
            selection
              ? 'johannschopplich.copilot.prompt.dialogContextPlaceholder'
              : 'johannschopplich.copilot.prompt.dialogPlaceholder',
          )
        "
        @input="prompt = $event"
        @mounted="textarea = $event"
      />

      <div class="kai-absolute kai-inset-x-px kai-bottom-px kai-p-2">
        <div class="kai-flex kai-items-center kai-justify-between">
          <div class="kai-relative">
            <k-button theme="empty" icon="attachment" @click="pickFiles()" />
            <!-- TODO: `k-tabs-badge` is for Kirby 4 compatibility. `k-button-badge` is for Kirby 5. -->
            <span
              v-if="files.length > 0"
              :data-theme="isBadgeHovered ? 'negative' : 'notice'"
              class="kai-cursor-pointer"
              :class="[
                _isKirby5
                  ? 'k-button-badge kai-top-[-2px]'
                  : 'k-tabs-badge kai-top-[-6px]',
              ]"
              @mouseenter="isBadgeHovered = true"
              @mouseleave="isBadgeHovered = false"
              @click="((files = []), (isBadgeHovered = false))"
            >
              {{
                isBadgeHovered
                  ? panel.t("johannschopplich.copilot.delete")
                  : files.length
              }}
            </span>
          </div>

          <div class="kai-flex kai-gap-2">
            <k-select-input
              v-if="selection"
              class="k-copilot-prompt-dialog__select"
              :options="[
                {
                  value: 'append',
                  text: panel.t('johannschopplich.copilot.append'),
                },
                {
                  value: 'replace',
                  text: panel.t('johannschopplich.copilot.replace'),
                },
              ]"
              :empty="false"
              :value="insertOption"
              @input="insertOption = $event"
            />

            <k-button
              theme="notice-icon"
              variant="filled"
              icon="sparkling"
              @click="submit()"
            >
              {{ panel.t("johannschopplich.copilot.generate") }}
            </k-button>
          </div>
        </div>
      </div>

      <LicensingButtonGroup
        v-if="licenseStatus !== undefined"
        label="Kirby Copilot"
        api-namespace="__copilot__"
        :license-status="licenseStatus"
        pricing-url="https://kirbycopilot.com/buy"
        class="kai-absolute kai-right-0 kai-top-[calc(-0.25rem-24px)]"
      />
    </div>
  </k-dialog>
</template>

<style>
.k-copilot-prompt-dialog {
  --dialog-color-back: var(--toolbar-back);
  --dialog-padding: 0;
  --dialog-rounded: var(--rounded);
  overflow: visible;
}

.k-copilot-prompt-dialog__select {
  text-decoration: underline;
  text-underline-offset: var(--link-underline-offset);
}
</style>
