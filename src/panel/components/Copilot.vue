<script>
import { hash } from "ohash";
import { AbortError, ApiCallError } from "modelfusion";
import SectionMixin from "../mixins/section.js";
import { streamTextGeneration } from "../utils/openai.js";
import { downscaleFile, openFilePicker } from "../utils/upload.js";

export const STORAGE_KEY_PREFIX = "kirby$copilot$";
export const getHashedStorageKey = (...args) =>
  `${STORAGE_KEY_PREFIX}${hash([...args])}`;

const EMPTY_HTML_TAG_RE = /^<(\w+)>\s*<\/\1>$/;

export default {
  mixins: [SectionMixin],
  inheritAttrs: false,

  data() {
    return {
      // Section props
      label: undefined,
      field: undefined,
      userPrompt: undefined,
      systemPrompt: undefined,
      storage: undefined,
      // Section computed
      supported: undefined,
      config: undefined,
      // Local data
      storageKey: undefined,
      isInitialized: false,
      isGenerating: false,
      isDetailsOpen: false,
      detailsElement: undefined,
      currentPrompt: undefined,
      currentFieldContent: undefined,
      allow: [],
      files: [],
      abortController: undefined,
    };
  },

  computed: {
    currentContent() {
      return this.$store.getters["content/values"]();
    },
    canUndo() {
      return !this.isGenerating && this.currentFieldContent !== undefined;
    },
    hasContextImages() {
      return this.files.some((file) => file.type.startsWith("image/"));
    },
    hasContextPdfs() {
      return this.files.some((file) => file.type === "application/pdf");
    },
  },

  watch: {
    currentPrompt(value) {
      if (!this.isInitialized) return;
      if (!this.storage) return;

      if (value && value !== this.userPrompt) {
        localStorage.setItem(`${this.storageKey}$prompt`, value);
      } else if (!value || value === this.userPrompt) {
        localStorage.removeItem(`${this.storageKey}$prompt`);
      }
    },
    isDetailsOpen(value) {
      if (!this.isInitialized) return;
      if (!this.storage) return;

      if (value) {
        localStorage.setItem(`${this.storageKey}$open`, "true");
      } else {
        localStorage.removeItem(`${this.storageKey}$open`);
      }
    },
  },

  async created() {
    const response = await this.load();
    this.label =
      this.t(response.label) || this.$t("johannschopplich.copilot.label");
    this.field = response.field ?? undefined;
    this.userPrompt = response.userPrompt ?? undefined;
    this.systemPrompt =
      response.systemPrompt || response.config.systemPrompt || undefined;
    this.storage = response.storage ?? true;
    if (response.editable !== false) this.allow.push("edit");
    if (response.files !== false) this.allow.push("files");
    this.supported = response.supported;
    this.config = response.config;

    if (this.storage) {
      this.storageKey = getHashedStorageKey(this.$panel.view.path, this.field);
      this.currentPrompt =
        localStorage.getItem(`${this.storageKey}$prompt`) ||
        this.userPrompt ||
        "";
      this.isDetailsOpen =
        localStorage.getItem(`${this.storageKey}$open`) === "true";
      this.$nextTick(() => {
        if (this.$refs.detailsElement && this.isDetailsOpen) {
          this.$refs.detailsElement.open = this.isDetailsOpen;
        }
      });
    }

    this.$panel.events.on("view.save", this.onModelSave);
    this.isInitialized = true;
  },

  beforeDestroy() {
    this.$panel.events.off("view.save", this.onModelSave);
  },

  methods: {
    t(value) {
      if (!value || typeof value === "string") return value;
      return value[this.$panel.translation.code] ?? Object.values(value)[0];
    },
    async generate() {
      // eslint-disable-next-line no-undef
      if (__PLAYGROUND__) {
        const apiKey = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`);
        if (!apiKey) {
          this.$panel.notification.error(
            "Please set your OpenAI API key in the playground settings.",
          );
          return;
        }
        if (!apiKey.startsWith("sk-")) {
          this.$panel.notification.error("Invalid OpenAI API key.");
          return;
        }
      }

      if (!this.currentPrompt) {
        this.$panel.notification.error(
          this.$t("johannschopplich.copilot.prompt.empty"),
        );
        return;
      }

      this.$panel.view.isLoading = true;
      this.isGenerating = true;
      this.currentFieldContent = this.currentContent[this.field];
      this.abortController = new AbortController();

      let text = "";
      let lastCallTime = Date.now();

      try {
        const textStream = await streamTextGeneration({
          userPrompt: this.currentPrompt,
          systemPrompt: this.systemPrompt,
          context: this.createContext(),
          files: this.files,
          config: {
            ...this.config,
            // eslint-disable-next-line no-undef
            apiKey: __PLAYGROUND__
              ? sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`)
              : this.config.providers?.OpenAI?.apiKey,
          },
          run: {
            abortSignal: this.abortController.signal,
          },
        });

        for await (const textPart of textStream) {
          text += textPart;

          // Preview blocks
          if (Array.isArray(this.currentFieldContent)) {
            if (Date.now() - lastCallTime < this.config.blocksUpdateThrottle) {
              continue;
            }
            lastCallTime = Date.now();

            const newBlocks = await this.htmlToBlocks(text);
            if (newBlocks.length > 0) {
              this.$store.dispatch("content/update", [
                this.field,
                [...this.currentFieldContent, ...newBlocks],
              ]);
            }
          }
          // Preview text
          else {
            this.$store.dispatch("content/update", [
              this.field,
              this.currentFieldContent + text,
            ]);
          }
        }
      } catch (error) {
        this.abortController = undefined;
        this.$panel.view.isLoading = false;
        this.isGenerating = false;

        if (error instanceof AbortError) return;

        if (error instanceof ApiCallError) {
          console.error(error);
          this.$panel.notification.error(error.message);
          return;
        }

        console.error(error);
        this.$panel.notification.error(
          this.$t("johannschopplich.copilot.generator.error"),
        );
        return;
      }

      // Update content
      this.$store.dispatch("content/update", [
        this.field,
        Array.isArray(this.currentFieldContent)
          ? [...this.currentFieldContent, ...(await this.htmlToBlocks(text))]
          : this.currentFieldContent + text,
      ]);

      this.abortController = undefined;
      this.$panel.view.isLoading = false;
      this.isGenerating = false;
      this.$panel.notification.success({
        icon: "sparkling",
        message: this.$t("johannschopplich.copilot.generator.success"),
      });
    },
    undo() {
      this.$store.dispatch("content/update", [
        this.field,
        this.currentFieldContent,
      ]);
      this.currentFieldContent = undefined;
    },
    async pickFiles() {
      const files = await openFilePicker({
        // TODO: Accept PDFs
        // accept: "image/*,application/pdf",
        accept: "image/*",
      });

      this.files = await Promise.all(
        files.map(async (file) => {
          if (file.type.startsWith("image/")) {
            return downscaleFile(file, { maxSize: 2048 });
          }

          return file;
        }),
      );
    },
    async htmlToBlocks(html) {
      if (!html) return [];

      const { result } = await this.$api.post("__copilot__/html2blocks", {
        html,
      });

      // Skip empty text block
      if (
        result.blocks.length === 1 &&
        result.blocks[0].type === "text" &&
        EMPTY_HTML_TAG_RE.test(result.blocks[0].content.text)
      ) {
        return [];
      }

      return result.blocks;
    },
    createContext() {
      const context = {
        ...this.currentContent,
        title: this.$panel.view.title,
      };

      // JSON-encode no-primitive values
      return Object.fromEntries(
        Object.entries(context).map(([key, value]) => [
          key,
          Array.isArray(value) || (typeof value === "object" && value !== null)
            ? JSON.stringify(value)
            : value,
        ]),
      );
    },
    onModelSave() {
      if (this.canUndo) {
        this.currentFieldContent = undefined;
      }
    },
  },
};
</script>

<template>
  <k-section v-if="isInitialized" :label="label">
    <k-box v-if="!config.model.default" theme="empty">
      <k-text>
        Missing <code>model.default</code> property in the
        <code>johannschopplich.copilot</code> global configuration.
      </k-text>
    </k-box>
    <k-box v-if="!config.providers?.OpenAI?.apiKey" theme="empty">
      <k-text>
        Missing <code>providers.OpenAI.apiKey</code> property in the
        <code>johannschopplich.copilot</code> global configuration.
      </k-text>
    </k-box>
    <k-box v-else-if="!field" theme="empty">
      <k-text>
        Missing <code>field</code> property in the section configuration. This
        will be used for the generated content.
      </k-text>
    </k-box>
    <k-box v-else-if="!(field in currentContent)" theme="empty">
      <k-text>
        The <code>{{ field }}</code> field does not exist in the current model.
      </k-text>
    </k-box>
    <k-box v-else-if="!supported" theme="empty">
      <k-text>
        The <code>{{ field }}</code> field is not supported. Use
        <code>blocks</code>, <code>text</code> or <code>textarea</code> fields.
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
          :text="$t('johannschopplich.copilot.generate')"
          variant="filled"
          size="sm"
          theme="positive"
          :disabled="isGenerating"
          @click="generate()"
        />
        <k-button
          v-if="isGenerating"
          icon="cancel"
          :text="$t('johannschopplich.copilot.stop')"
          variant="filled"
          size="sm"
          theme="notice"
          @click="abortController.abort()"
        />
        <k-button
          v-if="canUndo"
          icon="undo"
          :text="$t('johannschopplich.copilot.undo')"
          variant="filled"
          size="sm"
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
                ? [$t("johannschopplich.copilot.prompt.label")]
                : []),
              ...(allow.includes("files")
                ? [$t("johannschopplich.copilot.context")]
                : []),
            ].join(", ")
          }}
        </summary>
        <k-navigate class="kai-mt-3">
          <div v-if="allow.includes('edit')" class="kai-mb-2 kai-text-right">
            <k-input
              :key="isDetailsOpen ? 1 : 0"
              v-model="currentPrompt"
              class="kai-mb-1"
              :placeholder="$t('johannschopplich.copilot.prompt.placeholder')"
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
              :text="$t('johannschopplich.copilot.files.select')"
              variant="filled"
              size="sm"
              @click="pickFiles()"
            />
            <k-button
              v-if="files.length > 0"
              icon="cancel"
              :text="$t('johannschopplich.copilot.remove')"
              variant="filled"
              size="sm"
              @click="files = []"
            />
          </k-button-group>
        </k-navigate>
      </details>
    </div>
  </k-section>
</template>
