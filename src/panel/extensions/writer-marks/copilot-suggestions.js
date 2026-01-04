import { PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { resolveLanguageModel, usePluginContext } from "../../composables";
import {
  COMPLETION_MAX_TOKENS,
  COMPLETION_PREFIX_LENGTH,
  COMPLETION_SUFFIX_LENGTH,
  COMPLETION_SYSTEM_PROMPT,
  STORAGE_KEY_PREFIX,
} from "../../constants";
import { loadAISDK } from "../../utils/ai";

const LICENSE_TOAST_THRESHOLD = 3; // Show toast after this many completions
const COMPLETION_COUNT_STORAGE_KEY = `${STORAGE_KEY_PREFIX}completionCount`;

let completionConfig;
let isCompletionPaused = false;

export const completionPluginKey = new PluginKey("copilot-suggestions");

/**
 * Pauses inline suggestions while external content generation is in progress.
 */
export function pauseCompletion() {
  isCompletionPaused = true;
}

/**
 * Resumes inline suggestions after external content generation completes.
 */
export function resumeCompletion() {
  isCompletionPaused = false;
}

export const copilotSuggestions = {
  get name() {
    return "copilot-suggestions";
  },

  /**
   * @param {import("kirby-types").WriterMarkContext} context
   */
  // eslint-disable-next-line unused-imports/no-unused-vars
  keys(context) {
    return {
      Tab: () => this._acceptSuggestion(),
      Escape: () => this._dismissSuggestion(),
      "Mod-,": () => this._triggerCompletion(),
    };
  },

  /**
   * @param {import("kirby-types").WriterMarkContext} context
   */
  plugins(context) {
    return [createCompletionPlugin(context, this)];
  },

  _acceptSuggestion() {
    const { view } = this.editor;
    const pluginState = completionPluginKey.getState(view.state);
    if (!pluginState?.suggestion) return false;

    // Insert the suggestion text
    const { tr } = view.state;
    tr.insertText(pluginState.suggestion, pluginState.position);
    tr.setMeta(completionPluginKey, {
      suggestion: null,
      position: null,
      isLoading: false,
    });
    view.dispatch(tr);

    // Show license toast once per session for unlicensed users
    this._showLicenseToastOnce();

    return true;
  },

  _dismissSuggestion() {
    const { view } = this.editor;
    const pluginState = completionPluginKey.getState(view.state);

    // Always dispatch dismiss (also cancels pending debounced completions)
    const tr = view.state.tr.setMeta(completionPluginKey, {
      suggestion: null,
      position: null,
      isLoading: false,
      skipNextTrigger: true,
    });
    view.dispatch(tr);

    // Return true if there was something visible to dismiss
    return Boolean(pluginState?.suggestion || pluginState?.isLoading);
  },

  _triggerCompletion() {
    const { view } = this.editor;
    const pluginState = completionPluginKey.getState(view.state);
    if (!pluginState) return false;

    const tr = view.state.tr.setMeta(completionPluginKey, {
      manualTrigger: true,
    });
    view.dispatch(tr);
    return true;
  },

  async _showLicenseToastOnce() {
    // eslint-disable-next-line no-undef
    if (__PLAYGROUND__) return;

    const storedValue = sessionStorage.getItem(COMPLETION_COUNT_STORAGE_KEY);
    if (storedValue === "done") return;

    let completionCount = Number(storedValue) || 0;
    completionCount++;
    sessionStorage.setItem(
      COMPLETION_COUNT_STORAGE_KEY,
      String(completionCount),
    );

    if (completionCount < LICENSE_TOAST_THRESHOLD) return;

    const context = await usePluginContext();

    // Only show toast for unlicensed users, not for users
    // with version compatibility issues (they already paid)
    if (["inactive", "invalid"].includes(context.licenseStatus)) {
      window.panel.notification.info({
        icon: "key",
        message: window.panel.t("johannschopplich.copilot.license.toast"),
      });
    }

    sessionStorage.setItem(COMPLETION_COUNT_STORAGE_KEY, "done");
  },
};

/**
 * Creates the ProseMirror plugin spec for tab completion.
 *
 * @param {import("kirby-types").WriterMarkContext} context - The mark context from Kirby
 * @param {object} mark - The mark instance
 * @returns {import("prosemirror-state").PluginSpec} Plugin spec with state, view, and props
 */
function createCompletionPlugin(context, mark) {
  let debounceTimer;
  let abortController;

  const deduplicateRequest = () => {
    if (abortController) {
      abortController.abort();
      abortController = undefined;
    }
  };

  return {
    key: completionPluginKey,

    state: {
      init() {
        return {
          suggestion: null,
          position: null,
          isLoading: false,
          skipNextTrigger: false,
          manualTrigger: false,
        };
      },
      apply(tr, pluginState) {
        const meta = tr.getMeta(completionPluginKey);

        if (meta !== undefined) {
          // Abort any active request when loading ends (dismiss, accept, error)
          if (meta.isLoading === false) {
            deduplicateRequest();
          }

          return { ...pluginState, ...meta };
        }

        // Clear suggestion on document change
        if (tr.docChanged) {
          deduplicateRequest();
          return {
            ...pluginState,
            suggestion: null,
            position: null,
            isLoading: false,
          };
        }

        return pluginState;
      },
    },

    view() {
      if (completionConfig === undefined) {
        usePluginContext().then(({ config }) => {
          completionConfig = config.completion;
        });
      }

      return {
        update(view, prevState) {
          const pluginState = completionPluginKey.getState(view.state);

          // Handle manual trigger
          if (pluginState?.manualTrigger) {
            clearTimeout(debounceTimer);
            // Reset the flag
            const tr = view.state.tr.setMeta(completionPluginKey, {
              manualTrigger: false,
            });
            view.dispatch(tr);
            generateCompletion(view, { includeSuffix: true });
            return;
          }

          // Check skip flag (from prompt dialog or pre-emptive dismiss)
          if (pluginState?.skipNextTrigger) {
            clearTimeout(debounceTimer);
            const tr = view.state.tr.setMeta(completionPluginKey, {
              skipNextTrigger: false,
            });
            view.dispatch(tr);
            return;
          }

          clearTimeout(debounceTimer);

          // Only trigger if document changed
          if (view.state.doc.eq(prevState.doc)) return;

          // Skip inline suggestions if disabled, config not loaded, or externally paused
          if (!completionConfig || isCompletionPaused) return;

          debounceTimer = setTimeout(() => {
            const { $head } = view.state.selection;

            // Only trigger if cursor is at the end of a non-empty text block
            const isAtEndOfBlock =
              $head.parentOffset === $head.parent.content.size;
            const isEmptyBlock = $head.parent.textContent.length === 0;
            if (!isAtEndOfBlock || isEmptyBlock) return;

            generateCompletion(view);
          }, completionConfig.debounce);
        },
        destroy() {
          clearTimeout(debounceTimer);
          deduplicateRequest();
        },
      };
    },

    props: {
      decorations(state) {
        const pluginState = completionPluginKey.getState(state);

        // Show loader when loading and no suggestion yet
        if (
          pluginState?.isLoading &&
          !pluginState?.suggestion &&
          pluginState.position !== null
        ) {
          const loader = Decoration.widget(
            pluginState.position,
            () => {
              const span = document.createElement("span");
              span.className = "k-copilot-suggestion-indicator";
              return span;
            },
            { side: 1 },
          );
          return DecorationSet.create(state.doc, [loader]);
        }

        // Show suggestion text when available
        if (pluginState?.suggestion && pluginState.position !== null) {
          const widget = Decoration.widget(
            pluginState.position,
            () => {
              const span = document.createElement("span");
              span.className = "k-copilot-suggestion-text";
              span.textContent = pluginState.suggestion;
              return span;
            },
            { side: 1 }, // Place after the cursor position
          );
          return DecorationSet.create(state.doc, [widget]);
        }

        return DecorationSet.empty;
      },
      handleDOMEvents: {
        blur: () => mark._dismissSuggestion(),
      },
    },
  };

  async function generateCompletion(view, { includeSuffix = false } = {}) {
    abortController?.abort();
    abortController = new AbortController();

    const { state } = view;
    const position = state.selection.head;

    // Get text context around cursor
    const { prefix, suffix } = getCursorContext(state, {
      suffixLength: includeSuffix ? COMPLETION_SUFFIX_LENGTH : 0,
    });
    if (!prefix.trim()) return;

    // Mark as loading
    const tr = state.tr.setMeta(completionPluginKey, {
      suggestion: null,
      position,
      isLoading: true,
    });
    view.dispatch(tr);

    // Capture signal reference to detect if generation gets cancelled
    const { signal } = abortController;

    try {
      const { model } = await resolveLanguageModel({ forCompletion: true });
      const { streamText } = await loadAISDK();

      // Use prefix/suffix format when there's text after cursor (manual trigger mid-text)
      const prompt = suffix
        ? `<prefix>${prefix}</prefix>\n<suffix>${suffix}</suffix>`
        : prefix;

      const { textStream } = await streamText({
        model,
        system: COMPLETION_SYSTEM_PROMPT,
        prompt,
        maxTokens: COMPLETION_MAX_TOKENS,
        abortSignal: signal,
      });

      // Stream chunks and update ghost text progressively
      const shouldPrependSpace = prefix.length > 0 && !/\s$/.test(prefix);
      let fullText = "";

      for await (const chunk of textStream) {
        if (signal.aborted) return;

        fullText += chunk;

        // Apply space prefix on first chunk if needed
        const suggestion =
          shouldPrependSpace && !fullText.startsWith(" ")
            ? ` ${fullText}`
            : fullText;

        const streamTr = view.state.tr.setMeta(completionPluginKey, {
          suggestion,
          position,
          isLoading: true,
        });
        view.dispatch(streamTr);
      }

      // Handle cancellation before stream started or after it completed
      if (signal.aborted) return;

      // Mark streaming complete
      const finalSuggestion =
        shouldPrependSpace && !fullText.startsWith(" ")
          ? ` ${fullText}`
          : fullText;

      const completeTr = view.state.tr.setMeta(completionPluginKey, {
        suggestion: finalSuggestion,
        position,
        isLoading: false,
      });
      view.dispatch(completeTr);
    } catch (error) {
      // If intentionally aborted, state was already cleared by the aborter
      if (signal.aborted) return;

      console.error("Failed to generate completion:", error);

      // Clear state on unexpected error
      const errorTr = view.state.tr.setMeta(completionPluginKey, {
        suggestion: null,
        position: null,
        isLoading: false,
      });
      view.dispatch(errorTr);
    } finally {
      abortController = undefined;
    }
  }
}

/**
 * Gets text context around the cursor for completion (FIM pattern).
 *
 * @remarks
 * Includes text from previous blocks for better context on new lines.
 *
 * @param {import("prosemirror-state").EditorState} state - The editor state
 * @param {object} [options]
 * @param {number} [options.prefixLength] - Max chars before cursor
 * @param {number} [options.suffixLength] - Max chars after cursor (0 = no suffix)
 * @returns {{ prefix: string, suffix: string | undefined }} Text before and optionally after cursor
 */
function getCursorContext(
  state,
  { prefixLength = COMPLETION_PREFIX_LENGTH, suffixLength = 0 } = {},
) {
  const { $head } = state.selection;
  const cursorPos = $head.pos;

  // Get text from document start to cursor, with double newlines between blocks
  const prefix = state.doc
    .textBetween(0, cursorPos, "\n\n")
    .slice(-prefixLength);

  // For suffix, only look within current block (don't cross block boundaries)
  const blockText = $head.parent.textContent;
  const offset = $head.parentOffset;
  const suffix =
    suffixLength > 0
      ? blockText.slice(offset, offset + suffixLength)
      : undefined;

  return { prefix, suffix };
}
