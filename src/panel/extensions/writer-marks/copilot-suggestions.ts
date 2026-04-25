import type { WriterMarkContext, WriterMarkExtension } from "kirby-types";
import type { EditorState, PluginSpec, Transaction } from "prosemirror-state";
import type { EditorView } from "prosemirror-view";
import type { CompletionConfig } from "../../types";
import { isLocalDev } from "kirbyuse";
import { PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { resolveLanguageModel, usePluginContext } from "../../composables";
import {
  COMPLETION_PREFIX_LENGTH,
  COMPLETION_SUFFIX_LENGTH,
  COMPLETION_SYSTEM_PROMPT,
  STORAGE_KEY_PREFIX,
} from "../../constants";
import { loadAISDK } from "../../utils";

const LICENSE_TOAST_THRESHOLD = 3; // Show toast after this many completions
const COMPLETION_COUNT_STORAGE_KEY = `${STORAGE_KEY_PREFIX}completionCount`;

interface CompletionPluginState {
  suggestion: string | null;
  position: number | null;
  isLoading: boolean;
  skipNextTrigger: boolean;
}

export type CompletionMeta =
  | { type: "startLoading"; position: number }
  | { type: "streamChunk"; suggestion: string; position: number }
  | { type: "complete"; suggestion: string; position: number }
  | { type: "dismiss"; skipNextTrigger?: boolean };

const EMPTY_PLUGIN_STATE: CompletionPluginState = {
  suggestion: null,
  position: null,
  isLoading: false,
  skipNextTrigger: false,
};

let completionConfig: false | CompletionConfig | undefined;

const completionPluginKey = new PluginKey<CompletionPluginState>(
  "copilot-suggestions",
);

const triggerHandles = new WeakMap<EditorView, () => void>();

export function setCompletionMeta(tr: Transaction, meta: CompletionMeta) {
  tr.setMeta(completionPluginKey, meta);
  return tr;
}

export function getCompletionState(state: EditorState) {
  return completionPluginKey.getState(state);
}

export function triggerCompletion(view: EditorView): boolean {
  const trigger = triggerHandles.get(view);
  if (!trigger) return false;
  trigger();
  return true;
}

interface CopilotSuggestionsMark extends WriterMarkExtension {
  _acceptSuggestion: () => boolean;
  _dismissSuggestion: () => boolean;
  _triggerCompletion: () => boolean;
  _showLicenseToastOnce: () => Promise<void>;
}

export const copilotSuggestions: CopilotSuggestionsMark = {
  get name() {
    return "copilot-suggestions";
  },

  keys(this: CopilotSuggestionsMark, _context: WriterMarkContext) {
    return {
      Tab: () => this._acceptSuggestion(),
      Escape: () => this._dismissSuggestion(),
      "Mod-,": () => this._triggerCompletion(),
    };
  },

  plugins(this: CopilotSuggestionsMark, context: WriterMarkContext) {
    return [createCompletionPlugin(context, this)];
  },

  _acceptSuggestion(this: CopilotSuggestionsMark) {
    const { view } = this.editor!;
    const pluginState = getCompletionState(view.state);
    if (!pluginState?.suggestion) return false;

    const tr = view.state.tr.insertText(
      pluginState.suggestion,
      pluginState.position!,
    );
    setCompletionMeta(tr, { type: "dismiss" });
    view.dispatch(tr);

    // Show license toast once per session for unlicensed users
    this._showLicenseToastOnce();

    return true;
  },

  _dismissSuggestion(this: CopilotSuggestionsMark) {
    const { view } = this.editor!;
    const pluginState = getCompletionState(view.state);

    view.dispatch(
      setCompletionMeta(view.state.tr, {
        type: "dismiss",
        skipNextTrigger: true,
      }),
    );

    return Boolean(pluginState?.suggestion || pluginState?.isLoading);
  },

  _triggerCompletion(this: CopilotSuggestionsMark) {
    return triggerCompletion(this.editor!.view);
  },

  async _showLicenseToastOnce() {
    if (__PLAYGROUND__) return;
    if (isLocalDev()) return;

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

    // Only show toast for unlicensed users
    if (["inactive", "invalid"].includes(context.licenseStatus!)) {
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
 */
function createCompletionPlugin(
  context: WriterMarkContext,
  mark: CopilotSuggestionsMark,
): PluginSpec<CompletionPluginState> {
  let debounceTimer: ReturnType<typeof setTimeout>;
  let abortController: AbortController | undefined;

  const abortActiveRequest = () => {
    if (abortController) {
      abortController.abort();
      abortController = undefined;
    }
  };

  return {
    key: completionPluginKey,

    state: {
      init() {
        return { ...EMPTY_PLUGIN_STATE };
      },
      apply(tr, value) {
        const meta = tr.getMeta(completionPluginKey) as
          | CompletionMeta
          | undefined;

        if (meta) {
          switch (meta.type) {
            case "startLoading":
              return {
                suggestion: null,
                position: meta.position,
                isLoading: true,
                skipNextTrigger: false,
              };
            case "streamChunk":
              return {
                suggestion: meta.suggestion,
                position: meta.position,
                isLoading: true,
                skipNextTrigger: false,
              };
            case "complete":
              return {
                suggestion: meta.suggestion,
                position: meta.position,
                isLoading: false,
                skipNextTrigger: false,
              };
            case "dismiss":
              abortActiveRequest();
              return {
                suggestion: null,
                position: null,
                isLoading: false,
                skipNextTrigger: meta.skipNextTrigger ?? false,
              };
            default: {
              const _exhaustive: never = meta;
              void _exhaustive;
            }
          }
        }

        if (tr.docChanged || tr.selectionSet) {
          abortActiveRequest();
          return { ...EMPTY_PLUGIN_STATE };
        }

        return value;
      },
    },

    view(editorView) {
      triggerHandles.set(editorView, () => {
        clearTimeout(debounceTimer);
        generateCompletion(editorView, { includeSuffix: true });
      });

      if (completionConfig === undefined) {
        usePluginContext().then(({ config }) => {
          completionConfig = config.completion;
        });
      }

      return {
        update(view, prevState) {
          const pluginState = getCompletionState(view.state);

          if (pluginState?.skipNextTrigger) {
            clearTimeout(debounceTimer);
            return;
          }

          clearTimeout(debounceTimer);

          // Only trigger if document changed
          if (view.state.doc.eq(prevState.doc)) return;

          // Only trigger if editor is focused (prevents completion on external
          // updates like content insertion from prompt dialog or undo/redo)
          if (!view.hasFocus()) return;

          // Skip inline suggestions if disabled or config not loaded
          if (!completionConfig) return;

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
          abortActiveRequest();
          triggerHandles.delete(editorView);
        },
      };
    },

    props: {
      decorations(state) {
        const pluginState = getCompletionState(state);

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
            { side: 1 },
          );
          return DecorationSet.create(state.doc, [widget]);
        }

        return DecorationSet.empty;
      },
      handleDOMEvents: {
        blur: () => {
          mark._dismissSuggestion();
        },
      },
    },
  };

  async function generateCompletion(
    view: EditorView,
    { includeSuffix = false } = {},
  ) {
    abortController?.abort();
    abortController = new AbortController();

    const { state } = view;
    const position = state.selection.head;

    // Get text context around cursor
    const { prefix, suffix } = getCursorContext(state, {
      suffixLength: includeSuffix ? COMPLETION_SUFFIX_LENGTH : 0,
    });
    if (!prefix.trim()) return;

    view.dispatch(
      setCompletionMeta(state.tr, { type: "startLoading", position }),
    );

    // Capture signal reference to detect if generation gets cancelled
    const { signal } = abortController;

    try {
      const { model } = await resolveLanguageModel({ forCompletion: true });
      const { streamText } = await loadAISDK();

      // Use prefix/suffix format when there's text after cursor (manual trigger mid-text)
      const prompt = suffix
        ? `<prefix>${prefix}</prefix>\n<suffix>${suffix}</suffix>`
        : prefix;

      const { textStream } = streamText({
        model,
        system: COMPLETION_SYSTEM_PROMPT,
        prompt,
        abortSignal: signal,
      });

      const shouldPrependSpace = prefix.length > 0 && !/\s$/.test(prefix);
      let streamedText = "";

      for await (const chunk of textStream) {
        if (signal.aborted) return;

        streamedText += chunk;

        const suggestion =
          shouldPrependSpace && !streamedText.startsWith(" ")
            ? ` ${streamedText}`
            : streamedText;

        view.dispatch(
          setCompletionMeta(view.state.tr, {
            type: "streamChunk",
            suggestion,
            position,
          }),
        );
      }

      if (signal.aborted) return;

      const finalSuggestion =
        shouldPrependSpace && !streamedText.startsWith(" ")
          ? ` ${streamedText}`
          : streamedText;

      view.dispatch(
        setCompletionMeta(view.state.tr, {
          type: "complete",
          suggestion: finalSuggestion,
          position,
        }),
      );
    } catch (error) {
      // If intentionally aborted, state was already cleared by the aborter
      if (signal.aborted) return;

      console.error("Failed to generate completion:", error);

      view.dispatch(setCompletionMeta(view.state.tr, { type: "dismiss" }));
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
 */
function getCursorContext(
  state: EditorState,
  {
    prefixLength = COMPLETION_PREFIX_LENGTH,
    suffixLength = 0,
  }: {
    prefixLength?: number;
    suffixLength?: number;
  } = {},
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
