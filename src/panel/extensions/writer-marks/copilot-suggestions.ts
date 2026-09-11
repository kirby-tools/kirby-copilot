import type { WriterMarkContext, WriterMarkExtension } from "kirby-types";
import type { EditorState, PluginSpec, Transaction } from "prosemirror-state";
import type { EditorView } from "prosemirror-view";
import type { CompletionConfig } from "../../types";
import { isLocalDev } from "kirbyuse";
import { PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { resolveLanguageModel, usePluginContext } from "../../composables";
import {
  STORAGE_KEY_PREFIX,
  SUGGESTION_ERROR_COOLDOWN_MS,
  SUGGESTION_PREFIX_LENGTH,
  SUGGESTION_SUFFIX_LENGTH,
  SUGGESTION_SYSTEM_PROMPT,
} from "../../constants";
import { loadAISDK } from "../../utils";

const LICENSE_TOAST_THRESHOLD = 3;
const ACCEPTED_SUGGESTION_COUNT_STORAGE_KEY = `${STORAGE_KEY_PREFIX}acceptedSuggestionCount`;

export interface SuggestionPluginState {
  suggestion: string | null;
  position: number | null;
  isLoading: boolean;
}

export type SuggestionMeta =
  | { type: "startLoading"; position: number }
  | { type: "streamChunk"; suggestion: string; position: number }
  | { type: "complete"; suggestion: string; position: number }
  | { type: "dismiss" };

const EMPTY_PLUGIN_STATE: SuggestionPluginState = {
  suggestion: null,
  position: null,
  isLoading: false,
};

let suggestionConfig: false | CompletionConfig | undefined;

const suggestionPluginKey = new PluginKey<SuggestionPluginState>(
  "copilot-suggestions",
);

const triggerHandles = new WeakMap<EditorView, () => void>();

export function setSuggestionMeta(tr: Transaction, meta: SuggestionMeta) {
  tr.setMeta(suggestionPluginKey, meta);
  return tr;
}

export function getSuggestionState(state: EditorState) {
  return suggestionPluginKey.getState(state);
}

export function triggerSuggestion(view: EditorView): boolean {
  const trigger = triggerHandles.get(view);
  if (!trigger) return false;
  trigger();
  return true;
}

interface CopilotSuggestionsMark extends WriterMarkExtension {
  _acceptSuggestion: () => boolean;
  _dismissSuggestion: () => boolean;
  _triggerSuggestion: () => boolean;
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
      "Mod-,": () => this._triggerSuggestion(),
    };
  },

  plugins(this: CopilotSuggestionsMark, _context: WriterMarkContext) {
    return [createSuggestionPlugin(this)];
  },

  _acceptSuggestion(this: CopilotSuggestionsMark) {
    const { view } = this.editor!;
    const pluginState = getSuggestionState(view.state);
    if (!pluginState?.suggestion) return false;

    const tr = view.state.tr.insertText(
      pluginState.suggestion,
      pluginState.position!,
    );
    setSuggestionMeta(tr, { type: "dismiss" });
    view.dispatch(tr);

    this._showLicenseToastOnce();

    return true;
  },

  _dismissSuggestion(this: CopilotSuggestionsMark) {
    const { view } = this.editor!;
    const pluginState = getSuggestionState(view.state);

    view.dispatch(setSuggestionMeta(view.state.tr, { type: "dismiss" }));

    return Boolean(pluginState?.suggestion || pluginState?.isLoading);
  },

  _triggerSuggestion(this: CopilotSuggestionsMark) {
    return triggerSuggestion(this.editor!.view);
  },

  async _showLicenseToastOnce() {
    if (__PLAYGROUND__) return;
    if (isLocalDev()) return;

    const storedValue = sessionStorage.getItem(
      ACCEPTED_SUGGESTION_COUNT_STORAGE_KEY,
    );
    if (storedValue === "done") return;

    let acceptedSuggestionCount = Number(storedValue) || 0;
    acceptedSuggestionCount++;
    sessionStorage.setItem(
      ACCEPTED_SUGGESTION_COUNT_STORAGE_KEY,
      String(acceptedSuggestionCount),
    );

    if (acceptedSuggestionCount < LICENSE_TOAST_THRESHOLD) return;

    const context = await usePluginContext();

    if (["inactive", "invalid"].includes(context.licenseStatus!)) {
      window.panel.notification.info({
        icon: "key",
        message: window.panel.t("johannschopplich.copilot.licenseToast"),
      });
    }

    sessionStorage.setItem(ACCEPTED_SUGGESTION_COUNT_STORAGE_KEY, "done");
  },
};

function createSuggestionPlugin(
  mark: CopilotSuggestionsMark,
): PluginSpec<SuggestionPluginState> {
  let debounceTimer: ReturnType<typeof setTimeout>;
  let abortController: AbortController | undefined;
  let hasTypedText = false;
  let cooldownDeadline = 0;

  const abortActiveRequest = () => {
    if (abortController) {
      abortController.abort();
      abortController = undefined;
    }
  };

  return {
    key: suggestionPluginKey,

    state: {
      init() {
        return { ...EMPTY_PLUGIN_STATE };
      },
      apply(tr, value) {
        const meta = tr.getMeta(suggestionPluginKey) as
          SuggestionMeta | undefined;

        if (meta) {
          switch (meta.type) {
            case "startLoading":
              return {
                suggestion: null,
                position: meta.position,
                isLoading: true,
              };
            case "streamChunk":
              return {
                suggestion: meta.suggestion,
                position: meta.position,
                isLoading: true,
              };
            case "complete":
              return {
                suggestion: meta.suggestion,
                position: meta.position,
                isLoading: false,
              };
            case "dismiss":
              abortActiveRequest();
              return { ...EMPTY_PLUGIN_STATE };
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
      // `completion: false` turns off the suggestions that interrupt typing,
      // not the shortcut, which stays available on demand.
      triggerHandles.set(editorView, () => {
        clearTimeout(debounceTimer);
        generateSuggestion(editorView, { includeSuffix: true });
      });

      if (suggestionConfig === undefined) {
        usePluginContext().then(({ config }) => {
          suggestionConfig = config.completion;
        });
      }

      return {
        update(view) {
          const hasTypedTextBeforeUpdate = hasTypedText;
          hasTypedText = false;

          clearTimeout(debounceTimer);

          if (!hasTypedTextBeforeUpdate) return;

          // A composition still assembles the text it will leave behind.
          if (view.composing) return;

          if (!suggestionConfig) return;

          debounceTimer = setTimeout(() => {
            if (Date.now() < cooldownDeadline) return;

            const { $head } = view.state.selection;

            const isAtEndOfBlock =
              $head.parentOffset === $head.parent.content.size;
            const isEmptyBlock = $head.parent.textContent.length === 0;
            if (!isAtEndOfBlock || isEmptyBlock) return;

            generateSuggestion(view);
          }, suggestionConfig.debounce);
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
        const pluginState = getSuggestionState(state);

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
      // Typing is what asks for a suggestion, and a programmatic insertion
      // reaches the same document change without passing here. The update
      // this input dispatches consumes the flag.
      handleTextInput() {
        hasTypedText = true;
        return false;
      },
      handleDOMEvents: {
        blur: () => {
          mark._dismissSuggestion();
        },
      },
    },
  };

  async function generateSuggestion(
    view: EditorView,
    { includeSuffix = false } = {},
  ) {
    abortActiveRequest();

    const { state } = view;
    const position = state.selection.head;

    const { prefix, suffix } = getCursorContext(state, {
      suffixLength: includeSuffix ? SUGGESTION_SUFFIX_LENGTH : 0,
    });
    if (!prefix.trim()) return;

    abortController = new AbortController();

    view.dispatch(
      setSuggestionMeta(state.tr, { type: "startLoading", position }),
    );

    const { signal } = abortController;

    try {
      const { model, reasoning } = await resolveLanguageModel({
        isInlineSuggestion: true,
      });
      const { streamText } = await loadAISDK();

      const prompt = suffix
        ? `<prefix>${prefix}</prefix>\n<suffix>${suffix}</suffix>`
        : prefix;

      let firstStreamError: unknown;

      const { textStream } = streamText({
        model,
        reasoning,
        instructions: SUGGESTION_SYSTEM_PROMPT,
        prompt,
        abortSignal: signal,
        // Error parts never enter `textStream`, so this is the only place the
        // provider's own error can be picked up.
        onError({ error }) {
          firstStreamError ??= error;
        },
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
          setSuggestionMeta(view.state.tr, {
            type: "streamChunk",
            suggestion,
            position,
          }),
        );
      }

      if (signal.aborted) return;

      // Chunks also run out when the provider fails mid-stream, which would
      // otherwise offer the truncated text as a finished suggestion.
      if (firstStreamError) throw firstStreamError;

      const finalSuggestion =
        shouldPrependSpace && !streamedText.startsWith(" ")
          ? ` ${streamedText}`
          : streamedText;

      view.dispatch(
        setSuggestionMeta(view.state.tr, {
          type: "complete",
          suggestion: finalSuggestion,
          position,
        }),
      );
    } catch (error) {
      // An intentional abort runs `abortActiveRequest`, which cleared the state
      // already.
      if (signal.aborted) return;

      console.error("Failed to generate an inline suggestion:", error);
      cooldownDeadline = Date.now() + SUGGESTION_ERROR_COOLDOWN_MS;

      view.dispatch(setSuggestionMeta(view.state.tr, { type: "dismiss" }));
    } finally {
      // A superseded run must not clear the controller of the run that
      // replaced it, which would leave the newer one impossible to abort.
      if (abortController?.signal === signal) {
        abortController = undefined;
      }
    }
  }
}

/**
 * Collects the fill-in-the-middle context around the cursor: the prefix reaches
 * back across earlier blocks, the suffix stays inside the current one.
 */
function getCursorContext(
  state: EditorState,
  {
    prefixLength = SUGGESTION_PREFIX_LENGTH,
    suffixLength = 0,
  }: {
    prefixLength?: number;
    suffixLength?: number;
  } = {},
) {
  const { $head } = state.selection;
  const cursorPos = $head.pos;

  const prefix = state.doc
    .textBetween(0, cursorPos, "\n\n")
    .slice(-prefixLength);

  const blockText = $head.parent.textContent;
  const offset = $head.parentOffset;
  const suffix =
    suffixLength > 0
      ? blockText.slice(offset, offset + suffixLength)
      : undefined;

  return { prefix, suffix };
}
