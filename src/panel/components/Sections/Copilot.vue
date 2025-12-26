<script>
import { isAbortError } from "@ai-sdk/provider-utils";
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import {
  computed,
  isKirby5,
  loadPluginModule,
  nextTick,
  onBeforeUnmount,
  ref,
  useContent,
  useI18n,
  usePanel,
  useSection,
  watch,
} from "kirbyuse";
import { section } from "kirbyuse/props";
import {
  useBlocks,
  useFilePicker,
  useLayouts,
  usePluginContext,
  useStreamText,
} from "../../composables";
import {
  DEFAULT_LOG_LEVEL,
  DEFAULT_SYSTEM_PROMPT,
  FIELD_TYPE_RESPONSE_FORMAT,
  LOG_LEVELS,
  STORAGE_KEY_PREFIX,
  SUPPORTED_IMAGE_MIME_TYPES,
  SUPPORTED_PROVIDERS,
} from "../../constants";
import { CopilotError } from "../../utils/error";
import { getHashedStorageKey } from "../../utils/storage";

const propsDefinition = {
  ...section,
};

export default {
  inheritAttrs: false,
};
</script>

<script setup>
const props = defineProps(propsDefinition);

const _isKirby5 = isKirby5();
const panel = usePanel();
const { t } = useI18n();
const { currentContent, update: updateContent } = useContent();

// Section props
const label = ref();
const field = ref();
const userPrompt = ref();
const systemPrompt = ref();
const storage = ref();
const icon = ref();
const theme = ref();
const size = ref();
const logLevel = ref();

// Section computed
const modelFile = ref();
const help = ref();

// Runtime state
const config = ref();
const isInitialized = ref(false);
const isGenerating = ref(false);
const isDetailsOpen = ref(false);
const detailsElement = ref();
const currentPrompt = ref();
const currentFieldContent = ref();
const permissions = ref([]);
const files = ref([]);
const licenseStatus = ref();

// Non-reactive data
let storageKey;
let abortController;

const canUndo = computed(
  () => !isGenerating.value && currentFieldContent.value !== undefined,
);

watch(currentPrompt, (value) => {
  if (!isInitialized.value) return;
  if (!storage.value) return;

  if (value && value !== userPrompt.value) {
    localStorage.setItem(`${storageKey}$prompt`, value);
  } else if (!value || value === userPrompt.value) {
    localStorage.removeItem(`${storageKey}$prompt`);
  }
});

watch(isDetailsOpen, (value) => {
  if (!isInitialized.value) return;
  if (!storage.value) return;

  if (value) {
    localStorage.setItem(`${storageKey}$open`, "true");
  } else {
    localStorage.removeItem(`${storageKey}$open`);
  }
});

(async () => {
  const { load } = useSection();
  const [context, response] = await Promise.all([
    usePluginContext(),
    load({
      parent: props.parent,
      name: props.name,
    }),
  ]);

  label.value = t(response.label) || panel.t("johannschopplich.copilot.label");
  field.value = response.field ?? undefined;
  userPrompt.value = response.userPrompt ?? undefined;
  systemPrompt.value =
    response.systemPrompt ||
    context.config.systemPrompt ||
    DEFAULT_SYSTEM_PROMPT;
  storage.value = response.storage;
  if (response.editable === true) permissions.value.push("edit");
  if (response.files === true) permissions.value.push("files");
  icon.value = response.icon || "sparkling";
  theme.value = response.theme || "notice-icon";
  size.value = response.size || "md";
  logLevel.value = LOG_LEVELS.indexOf(
    response.logLevel && LOG_LEVELS.includes(response.logLevel)
      ? response.logLevel
      : context.config.logLevel && LOG_LEVELS.includes(context.config.logLevel)
        ? context.config.logLevel
        : DEFAULT_LOG_LEVEL,
  );
  help.value = response.help ? t(response.help) : undefined;
  config.value = context.config;
  licenseStatus.value =
    // eslint-disable-next-line no-undef
    __PLAYGROUND__ ? "active" : context.licenseStatus;

  if (response.files === "auto" && response.modelFile) {
    modelFile.value = response.modelFile;
    const { mime, url } = response.modelFile;
    if (SUPPORTED_IMAGE_MIME_TYPES.includes(mime)) {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          files.value = [blob];
        });
    }
  }

  if (storage.value && field.value?.name) {
    storageKey = getHashedStorageKey(
      panel.view.path,
      field.value.name.toLowerCase(),
    );
    currentPrompt.value =
      localStorage.getItem(`${storageKey}$prompt`) || userPrompt.value || "";
    isDetailsOpen.value =
      localStorage.getItem(`${storageKey}$open`) === "true" || response.open;
    nextTick(() => {
      if (detailsElement.value && isDetailsOpen.value) {
        detailsElement.value.open = true;
      }
    });
  }

  panel.events.on("view.save", onModelSave);
  isInitialized.value = true;
})();

onBeforeUnmount(() => {
  panel.events.off("view.save", onModelSave);
});

async function generate() {
  // eslint-disable-next-line no-undef
  if (__PLAYGROUND__ && !window.location.hostname.includes("localhost")) {
    const apiKey = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`);
    if (!apiKey) {
      panel.notification.error(
        "Please set your API key in the playground settings.",
      );
      return;
    }
  }

  if (!currentPrompt.value) {
    panel.notification.error(panel.t("johannschopplich.copilot.prompt.empty"));
    return;
  }

  panel.isLoading = true;
  isGenerating.value = true;
  currentFieldContent.value =
    currentContent.value[field.value.name.toLowerCase()];
  abortController = new AbortController();

  const { getZodSchema: getBlocksZodSchema, normalizeBlock } = useBlocks();
  const { getZodSchema: getLayoutZodSchema, normalizeLayout } = useLayouts();
  const { Output } = await loadPluginModule("ai");

  try {
    let text = "";
    let structuredOutput = [];

    // Handle layouts by streaming the object
    if (field.value.type === "layout" || field.value.type === "blocks") {
      const getSchema =
        field.value.type === "layout" ? getLayoutZodSchema : getBlocksZodSchema;
      const normalizer =
        field.value.type === "layout" ? normalizeLayout : normalizeBlock;
      const schema = await getSchema(field.value);

      const { partialOutputStream, output: finalOutput } = await useStreamText({
        userPrompt: currentPrompt.value,
        systemPrompt: systemPrompt.value,
        output: Output.array({ element: schema }),
        files: files.value,
        logLevel: logLevel.value,
        abortSignal: abortController.signal,
      });

      // Stream partial updates
      for await (const partialOutput of partialOutputStream) {
        if (!partialOutput || !Array.isArray(partialOutput)) continue;

        await updateContent(
          {
            [field.value.name.toLowerCase()]: [
              ...currentFieldContent.value,
              ...partialOutput.map(normalizer),
            ],
          },
          // Disable saving content to storage in Kirby 5
          false,
        );
      }

      // Set final result
      structuredOutput = await finalOutput;
    } else {
      const { textStream } = await useStreamText({
        userPrompt: [
          `<response_format>\n${FIELD_TYPE_RESPONSE_FORMAT[field.value.type] || "text"}\n</response_format>`,
          currentPrompt.value,
        ].join("\n\n"),
        systemPrompt: systemPrompt.value,
        files: files.value,
        logLevel: logLevel.value,
        abortSignal: abortController.signal,
      });

      for await (const textPart of textStream) {
        text += textPart;

        await updateContent(
          {
            [field.value.name.toLowerCase()]: currentFieldContent.value + text,
          },
          // Disable saving content to storage in Kirby 5
          false,
        );
      }
    }

    // Store the final content
    await updateContent({
      [field.value.name.toLowerCase()]:
        field.value.type === "layout" || field.value.type === "blocks"
          ? [
              ...currentFieldContent.value,
              ...(structuredOutput ?? []).map(
                field.value.type === "layout"
                  ? normalizeLayout
                  : normalizeBlock,
              ),
            ]
          : currentFieldContent.value + text,
    });

    panel.notification.success({
      icon: "sparkling",
      message: panel.t("johannschopplich.copilot.generator.success"),
    });
  } catch (error) {
    if (isAbortError(error)) return;

    const { AISDKError } = await loadPluginModule("ai");

    if (error instanceof CopilotError || AISDKError.isInstance(error)) {
      let message = error.message;

      if (message.includes("levels of nesting exceeds limit")) {
        message = `The ${field.value.type} generation for the "${field.value.name}" field exceeds OpenAI's architectural constraints for nested data structures. This is a known limitation of OpenAI's API. Please use Google Gemini or Anthropic Claude instead, which support complex schemas.`;
      }

      console.error(error);
      panel.notification.error(message);
      return;
    }

    console.error(error);
    panel.notification.error(
      panel.t("johannschopplich.copilot.generator.error"),
    );
  } finally {
    abortController = undefined;
    panel.isLoading = false;
    isGenerating.value = false;
  }
}

function abort() {
  abortController?.abort();
  abortController = undefined;
  panel.isLoading = false;
  isGenerating.value = false;
}

function undo() {
  updateContent({
    [field.value.name.toLowerCase()]: currentFieldContent.value,
  });
  currentFieldContent.value = undefined;
}

async function pickFiles() {
  const selectedFiles = await useFilePicker();
  files.value = [...files.value, ...selectedFiles];
}

function onModelSave() {
  if (canUndo.value) {
    currentFieldContent.value = undefined;
  }
}
</script>

<template>
  <k-section v-if="isInitialized" :label="label">
    <template v-if="licenseStatus !== undefined" slot="options">
      <LicensingButtonGroup
        label="Kirby Copilot"
        api-namespace="__copilot__"
        :license-status="licenseStatus"
        pricing-url="https://kirby.tools/copilot/buy"
      />
    </template>

    <k-box
      v-if="!config.provider || !SUPPORTED_PROVIDERS.includes(config.provider)"
      theme="empty"
    >
      <k-text>
        Unsupported provider <code>{{ config.provider }}</code> in the
        <code>johannschopplich.copilot.provider</code> global configuration.
      </k-text>
    </k-box>
    <k-box
      v-else-if="!config.providers?.[config.provider]?.model"
      theme="empty"
    >
      <k-text>
        Missing
        <code>model</code>
        property in the
        <code>{{
          `johannschopplich.copilot.providers.${config.provider}`
        }}</code>
        global configuration.
      </k-text>
    </k-box>
    <k-box
      v-else-if="
        !field ||
        typeof field === 'string' ||
        (typeof field === 'object' &&
          !(field?.name.toLowerCase() in currentContent))
      "
      theme="empty"
    >
      <k-text>
        The <code>{{ field?.name ?? field }}</code> field does not exist in the
        current model.
      </k-text>
    </k-box>
    <k-box
      v-else-if="!permissions.includes('edit') && !userPrompt"
      theme="empty"
    >
      <k-text>
        If the user prompt cannot be edited by the user, a default
        <code>userPrompt</code> has to be set in the section configuration.
      </k-text>
    </k-box>
    <div v-else class="kai-space-y-4">
      <k-button-group layout="collapsed">
        <k-button
          :icon="isGenerating ? 'loader' : icon"
          :text="panel.t('johannschopplich.copilot.generate')"
          :theme="theme"
          variant="filled"
          :size="size"
          :disabled="isGenerating"
          @click="generate()"
        />
        <k-button
          v-if="isGenerating"
          icon="cancel"
          :text="panel.t('johannschopplich.copilot.stop')"
          theme="notice"
          variant="filled"
          :size="size"
          @click="abort()"
        />
        <k-button
          v-if="canUndo"
          icon="undo"
          :text="panel.t('johannschopplich.copilot.undo')"
          variant="filled"
          :size="size"
          @click="undo()"
        />
      </k-button-group>

      <details
        v-if="permissions.length > 0"
        ref="detailsElement"
        @toggle="isDetailsOpen = $event.target.open"
      >
        <summary>
          {{
            [
              ...(permissions.includes("edit")
                ? [panel.t("johannschopplich.copilot.prompt.label")]
                : []),
              ...(permissions.includes("files")
                ? [panel.t("johannschopplich.copilot.context")]
                : []),
            ].join(", ")
          }}
        </summary>

        <div class="kai-mt-3">
          <div
            v-if="permissions.includes('edit')"
            class="kai-mb-2 kai-text-right"
          >
            <k-input
              :key="isDetailsOpen ? 1 : 0"
              :value="currentPrompt"
              class="kai-mb-1"
              :placeholder="
                panel.t('johannschopplich.copilot.prompt.placeholder')
              "
              type="textarea"
              :buttons="false"
              :counter="false"
              @input="currentPrompt = $event"
            />
          </div>

          <k-button-group
            v-if="permissions.includes('files')"
            layout="collapsed"
          >
            <k-button
              icon="attachment"
              :text="panel.t('johannschopplich.copilot.files.select')"
              variant="filled"
              :badge="
                _isKirby5 && files.length > 0
                  ? {
                      theme: 'notice',
                      text: files.length,
                    }
                  : undefined
              "
              size="sm"
              class="!kai-rounded-[var(--button-rounded)]"
              @click="pickFiles()"
            />
            <k-button
              v-if="files.length > 0"
              :text="panel.t('johannschopplich.copilot.delete')"
              variant="dimmed"
              size="sm"
              @click="files = []"
            />
            <k-button
              v-if="
                permissions.includes('edit') &&
                userPrompt &&
                currentPrompt !== userPrompt
              "
              icon="undo"
              :text="panel.t('johannschopplich.copilot.reset')"
              variant="dimmed"
              size="xs"
              class="kai-ml-auto"
              @click="currentPrompt = userPrompt"
            />
          </k-button-group>
          <k-box v-else-if="modelFile" theme="none">
            <k-text>
              {{
                panel.t(
                  `johannschopplich.copilot.context.file.${
                    SUPPORTED_IMAGE_MIME_TYPES.includes(modelFile.mime)
                      ? "model"
                      : "unsupported"
                  }`,
                )
              }}
            </k-text>
          </k-box>
        </div>
      </details>
    </div>

    <footer v-if="help" class="kai-mt-[var(--spacing-2)]">
      <k-text class="k-help" :html="help" />
    </footer>
  </k-section>
</template>
