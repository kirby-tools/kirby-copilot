<script>
import { useLicense } from "@kirby-tools/licensing";
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  useApi,
  usePanel,
  useSection,
  useStore,
  watch,
} from "kirbyuse";
import { section } from "kirbyuse/props";
import { useStreamText } from "../composables";
import {
  LOG_LEVELS,
  STORAGE_KEY_PREFIX,
  SUPPORTED_PROVIDERS,
  SUPPORTED_VISION_MIME_TYPES,
} from "../constants";
import { registerPluginAssets } from "../utils/assets";
import { getHashedStorageKey } from "../utils/storage";
import { downscaleFile, openFilePicker } from "../utils/upload";

const propsDefinition = {
  ...section,
};

export default {
  inheritAttrs: false,
};
</script>

<script setup>
const props = defineProps(propsDefinition);

const panel = usePanel();
const api = useApi();
const store = useStore();
const { openLicenseModal, assertActivationIntegrity } = useLicense({
  label: "Kirby Copilot",
  apiNamespace: "__copilot__",
});

const EMPTY_HTML_TAG_RE = /^<(\w+)>\s*<\/\1>$/;

// Section props
const label = ref();
const field = ref();
const userPrompt = ref();
const systemPrompt = ref();
const storage = ref();
const size = ref();
const logLevel = ref();
// Section computed
const supported = ref();
const config = ref();
const modelFile = ref();
const license = ref();
// Local data
const isInitialized = ref(false);
const isGenerating = ref(false);
const isDetailsOpen = ref(false);
const detailsElement = ref();
const currentPrompt = ref();
const currentFieldContent = ref();
const allow = ref([]);
const files = ref([]);
const licenseButtonGroup = ref();

// Non-reactive data
let storageKey;
let abortController;

const currentContent = computed(() => store.getters["content/values"]());
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
  const response = await load({
    parent: props.parent,
    name: props.name,
  });
  label.value = t(response.label) || panel.t("johannschopplich.copilot.label");
  field.value = response.field ?? undefined;
  userPrompt.value = response.userPrompt ?? undefined;
  systemPrompt.value =
    response.systemPrompt || response.config.systemPrompt || undefined;
  storage.value = response.storage;
  if (response.editable === true) allow.value.push("edit");
  if (response.files === true) allow.value.push("files");
  size.value = response.size;
  logLevel.value = LOG_LEVELS.indexOf(
    response.config.logLevel ?? response.logLevel,
  );
  supported.value = response.supported;
  config.value = response.config;
  license.value =
    // eslint-disable-next-line no-undef
    __PLAYGROUND__ && window.location.hostname === "try.kirbycopilot.com"
      ? "active"
      : response.license;

  registerPluginAssets(response.assets);

  if (response.files === "auto" && response.modelFile) {
    modelFile.value = response.modelFile;
    const { mime, url } = response.modelFile;
    if (SUPPORTED_VISION_MIME_TYPES.includes(mime)) {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          files.value = [blob];
        });
    }
  }

  if (storage.value) {
    storageKey = getHashedStorageKey(panel.view.path, field.value);
    currentPrompt.value =
      localStorage.getItem(`${storageKey}$prompt`) || userPrompt.value || "";
    isDetailsOpen.value = localStorage.getItem(`${storageKey}$open`) === "true";
    nextTick(() => {
      if (detailsElement.value && isDetailsOpen.value) {
        detailsElement.value.open = true;
      }
    });
  }

  panel.events.on("view.save", onModelSave);
  isInitialized.value = true;
  assertActivationIntegrity({
    component: licenseButtonGroup,
    licenseStatus: license.value,
  });
})();

onBeforeUnmount(() => {
  panel.events.off("view.save", onModelSave);
});

function t(value) {
  if (!value || typeof value === "string") return value;
  return value[panel.translation.code] ?? Object.values(value)[0];
}

async function generate() {
  // eslint-disable-next-line no-undef
  if (__PLAYGROUND__) {
    const apiKey = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`);
    if (!apiKey) {
      panel.notification.error(
        "Please set your OpenAI API key in the playground settings.",
      );
      return;
    }
    if (!apiKey.startsWith("sk-")) {
      panel.notification.error("Invalid OpenAI API key.");
      return;
    }
  }

  if (!currentPrompt.value) {
    panel.notification.error(panel.t("johannschopplich.copilot.prompt.empty"));
    return;
  }

  panel.isLoading = true;
  isGenerating.value = true;
  currentFieldContent.value = currentContent.value[field.value];
  abortController = new AbortController();

  let text = "";
  let lastCallTime = Date.now();

  let _config = config.value;
  // eslint-disable-next-line no-undef
  if (__PLAYGROUND__) {
    _config = JSON.parse(JSON.stringify(config.value));
    _config.providers[_config.provider].model = currentContent.value.gptmodel;
  }

  try {
    const { textStream } = await useStreamText({
      userPrompt: currentPrompt.value,
      systemPrompt: systemPrompt.value,
      context: createContext(),
      files: files.value,
      config: _config,
      logLevel: logLevel.value,
      abortSignal: abortController.signal,
    });

    for await (const textPart of textStream) {
      text += textPart;

      // Preview blocks
      if (Array.isArray(currentFieldContent.value)) {
        if (Date.now() - lastCallTime < config.value.blocksUpdateThrottle) {
          continue;
        }
        lastCallTime = Date.now();

        const newBlocks = await htmlToBlocks(text);
        if (newBlocks.length > 0) {
          store.dispatch("content/update", [
            field.value,
            [...currentFieldContent.value, ...newBlocks],
          ]);
        }
      }
      // Preview text
      else {
        store.dispatch("content/update", [
          field.value,
          currentFieldContent.value + text,
        ]);
      }
    }
  } catch (error) {
    abortController = undefined;
    panel.isLoading = false;
    isGenerating.value = false;

    if (error instanceof Error && error.name === "AbortError") return;

    if (error instanceof Error && error.name === "ApiCallError") {
      console.error(error);
      panel.notification.error(error.message);
      return;
    }

    console.error(error);
    panel.notification.error(
      panel.t("johannschopplich.copilot.generator.error"),
    );
    return;
  }

  // Update content
  store.dispatch("content/update", [
    field.value,
    Array.isArray(currentFieldContent.value)
      ? [...currentFieldContent.value, ...(await htmlToBlocks(text))]
      : currentFieldContent.value + text,
  ]);

  abortController = undefined;
  panel.isLoading = false;
  isGenerating.value = false;
  panel.notification.success({
    icon: "sparkling",
    message: panel.t("johannschopplich.copilot.generator.success"),
  });
}

function abort() {
  abortController?.abort();
}

function undo() {
  store.dispatch("content/update", [field.value, currentFieldContent.value]);
  currentFieldContent.value = undefined;
}

async function pickFiles() {
  const selectedFiles = await openFilePicker({
    accept: [...SUPPORTED_VISION_MIME_TYPES, "application/pdf"].join(","),
  });

  files.value = await Promise.all(
    selectedFiles.map(async (file) => {
      if (file.type.startsWith("image/")) {
        return downscaleFile(file, { maxSize: 2048 });
      }

      return file;
    }),
  );
}

async function htmlToBlocks(html) {
  if (!html) return [];

  const { blocks } = await api.post("__copilot__/html2blocks", {
    html,
  });

  // Skip empty text block
  if (
    blocks.length === 1 &&
    "text" in blocks[0].content &&
    EMPTY_HTML_TAG_RE.test(blocks[0].content.text)
  ) {
    return [];
  }

  return blocks;
}

function createContext() {
  const context = {
    ...currentContent.value,
    title: panel.view.title,
  };

  // JSON-encode non-primitive values
  return Object.fromEntries(
    Object.entries(context).map(([key, value]) => [
      key,
      Array.isArray(value) || (typeof value === "object" && value !== null)
        ? JSON.stringify(value)
        : value,
    ]),
  );
}

function onModelSave() {
  if (canUndo.value) {
    currentFieldContent.value = undefined;
  }
}

async function handleRegistration() {
  const { isRegistered } = await openLicenseModal();
  if (isRegistered) {
    license.value = "active";
  }
}
</script>

<template>
  <k-section v-if="isInitialized" :label="label">
    <k-button-group
      v-if="license !== 'active'"
      ref="licenseButtonGroup"
      slot="options"
      layout="collapsed"
    >
      <k-button
        theme="love"
        variant="filled"
        size="xs"
        link="https://kirbycopilot.com/buy"
        target="_blank"
        :text="panel.t('johannschopplich.copilot.license.buy')"
      />
      <k-button
        theme="love"
        variant="filled"
        size="xs"
        icon="key"
        :text="panel.t('johannschopplich.copilot.license.activate')"
        @click="handleRegistration()"
      />
    </k-button-group>

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
      v-else-if="!config.providers?.[config.provider]?.apiKey"
      theme="empty"
    >
      <k-text>
        Missing <code>apiKey</code> property in the
        <code>{{
          `johannschopplich.copilot.providers.${config.provider}`
        }}</code>
        global configuration.
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
    <k-box v-else-if="!field" theme="empty">
      <k-text>
        Missing <code>field</code> property in the section configuration. It is
        required for the generated text.
      </k-text>
    </k-box>
    <k-box v-else-if="!(field in currentContent)" theme="empty">
      <k-text>
        The <code>{{ field }}</code> field does not exist in the current model.
      </k-text>
    </k-box>
    <k-box v-else-if="!supported" theme="empty">
      <k-text>
        The <code>{{ field }}</code> field is not supported. Use a
        <code>blocks</code>, <code>text</code>, <code>textarea</code> or
        <code>textarea</code> type.
      </k-text>
    </k-box>
    <k-box v-else-if="!allow.includes('edit') && !userPrompt" theme="empty">
      <k-text>
        If the user prompt cannot be edited by the user, a default
        <code>userPrompt</code> has to be set in the section configuration.
      </k-text>
    </k-box>
    <div v-else class="kai-space-y-4">
      <k-button-group layout="collapsed">
        <k-button
          :icon="isGenerating ? 'loader' : 'sparkling'"
          :text="panel.t('johannschopplich.copilot.generate')"
          variant="filled"
          :size="size"
          theme="positive"
          :disabled="isGenerating"
          @click="generate()"
        />
        <k-button
          v-if="isGenerating"
          icon="cancel"
          :text="panel.t('johannschopplich.copilot.stop')"
          variant="filled"
          :size="size"
          theme="notice"
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
        v-if="allow.length > 0"
        ref="detailsElement"
        @toggle="isDetailsOpen = $event.target.open"
      >
        <summary>
          {{
            [
              ...(allow.includes("edit")
                ? [panel.t("johannschopplich.copilot.prompt.label")]
                : []),
              ...(allow.includes("files")
                ? [panel.t("johannschopplich.copilot.context")]
                : []),
            ].join(", ")
          }}
        </summary>
        <div class="kai-mt-3">
          <div v-if="allow.includes('edit')" class="kai-mb-2 kai-text-right">
            <k-input
              :key="isDetailsOpen ? 1 : 0"
              v-model="currentPrompt"
              class="kai-mb-1"
              :placeholder="
                panel.t('johannschopplich.copilot.prompt.placeholder')
              "
              type="textarea"
              :buttons="false"
              :counter="false"
            />
            <k-button
              v-show="userPrompt && currentPrompt !== userPrompt"
              icon="undo"
              text="Reset"
              size="xs"
              variant="dimmed"
              @click="currentPrompt = userPrompt"
            />
          </div>

          <k-button-group v-if="allow.includes('files')" layout="collapsed">
            <k-button
              icon="upload"
              :text="panel.t('johannschopplich.copilot.files.select')"
              variant="filled"
              size="sm"
              @click="pickFiles()"
            />
            <k-button
              v-if="files.length > 0"
              icon="cancel"
              :text="panel.t('johannschopplich.copilot.remove')"
              variant="filled"
              size="sm"
              @click="files = []"
            />
          </k-button-group>
          <k-box v-else-if="modelFile" theme="none">
            <k-text>
              {{
                panel.t(
                  `johannschopplich.copilot.context.file.${
                    SUPPORTED_VISION_MIME_TYPES.includes(modelFile.mime)
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
  </k-section>
</template>
