<script setup>
import { ref, usePanel } from "kirbyuse";
import { useEventListener } from "../composables/events";
import { SUPPORTED_VISION_MIME_TYPES } from "../constants";
import { openFilePicker, toReducedBlob } from "../utils/upload";
import AutoGrowTextarea from "./Primitives/AutoGrowTextarea.vue";

const emit = defineEmits(["cancel", "close", "input", "submit", "success"]);
const panel = usePanel();

const files = ref([]);
const prompt = ref("");
const isBadgeHovered = ref(false);

// Listen to command + enter to submit the prompt
useEventListener(document, "keydown", (event) => {
  if (event.metaKey && event.key === "Enter") {
    submit();
  }
});

async function pickFiles() {
  const selectedFiles = await openFilePicker({
    accept: [...SUPPORTED_VISION_MIME_TYPES, "application/pdf"].join(","),
  });

  files.value = await Promise.all(
    selectedFiles.map(async (blob) => {
      if (blob.type.startsWith("image/")) {
        return toReducedBlob(blob, 2048);
      }

      return blob;
    }),
  );
}

function submit() {
  emit("submit", { prompt: prompt.value, files: files.value });
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
        v-model="prompt"
        shared-class="kai-p-2 kai-leading-[1.5] focus:kai-outline-none"
        :placeholder="
          panel.t('johannschopplich.copilot.prompt.dialogPlaceholder')
        "
      />

      <div class="kai-absolute kai-inset-x-px kai-bottom-px kai-p-2">
        <div class="kai-flex kai-items-center kai-justify-between">
          <div class="kai-relative">
            <k-button theme="empty" icon="attachment" @click="pickFiles()" />
            <span
              v-if="files.length > 0"
              :data-theme="isBadgeHovered ? 'negative' : 'notice'"
              class="k-tabs-badge kai-top-[-6px] kai-cursor-pointer"
              @click="files = []"
              @mouseenter="isBadgeHovered = true"
              @mouseleave="isBadgeHovered = false"
            >
              {{
                isBadgeHovered
                  ? panel.t("johannschopplich.copilot.delete")
                  : files.length
              }}
            </span>
          </div>

          <k-button variant="filled" icon="plane" @click="submit()">
            Send
          </k-button>
        </div>
      </div>
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
</style>
