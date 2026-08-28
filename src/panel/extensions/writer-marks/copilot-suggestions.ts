import type { WriterMarkContext, WriterMarkExtension } from "kirby-types";
import type { EditorState, PluginSpec, Transaction } from "prosemirror-state";
import type { EditorView } from "prosemirror-view";
import type { CompletionConfig } from "../../types";
import { isLocalDev } from "kirbyuse";
import { PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { resolveLanguageModel, usePluginContext } from "../../composables";
import {
  COMPLETION_ERROR_COOLDOWN_MS,
  COMPLETION_PREFIX_LENGTH,
  COMPLETION_SUFFIX_LENGTH,
  COMPLETION_SYSTEM_PROMPT,
  STORAGE_KEY_PREFIX,
} from "../../constants";
import { loadAISDK } from "../../utils";

const LICENSE_TOAST_THRESHOLD = 3;
const COMPLETION_COUNT_STORAGE_KEY = `${STORAGE_KEY_PREFIX}completionCount`;

export interface CompletionPluginState {
  suggestion: string | null;
  position: number | null;
  isLoading: boolean;
}

export type CompletionMeta =
  | { type: "startLoading"; position: number }
  | { type: "streamChunk"; suggestion: string; position: number }
  | { type: "complete"; suggestion: string; position: number }
  | { type: "dismiss" };

const EMPTY_PLUGIN_STATE: CompletionPluginState = {
  suggestion: null,
  position: null,
  isLoading: false,
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

  plugins(this: CopilotSuggestionsMark, _context: WriterMarkContext) {
    return [createCompletionPlugin(this)];
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

    this._showLicenseToastOnce();

    return true;
  },

  _dismissSuggestion(this: CopilotSuggestionsMark) {
    const { view } = this.editor!;
    const pluginState = getCompletionState(view.state);

    view.dispatch(setCompletionMeta(view.state.tr, { type: "dismiss" }));

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

    if (["inactive", "invalid"].includes(context.licenseStatus!)) {
      window.panel.notification.info({
        icon: "key",
        message: window.panel.t("johannschopplich.copilot.licenseToast"),
      });
    }

    sessionStorage.setItem(COMPLETION_COUNT_STORAGE_KEY, "done");
  },
};

function createCompletionPlugin(
  mark: CopilotSuggestionsMark,
): PluginSpec<CompletionPluginState> {
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
    key: completionPluginKey,

    state: {
      init() {
        return { ...EMPTY_PLUGIN_STATE };
      },
      apply(tr, value) {
        const meta = tr.getMeta(completionPluginKey) as
          CompletionMeta | undefined;

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
        generateCompletion(editorView, { includeSuffix: true });
      });

      if (completionConfig === undefined) {
        usePluginContext().then(({ config }) => {
          completionConfig = config.completion;
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

          if (!completionConfig) return;

          debounceTimer = setTimeout(() => {
            if (Date.now() < cooldownDeadline) return;

            const { $head } = view.state.selection;

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
      // Typing is what asks for a completion, and a programmatic insertion
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

  async function generateCompletion(
    view: EditorView,
    { includeSuffix = false } = {},
  ) {
    abortActiveRequest();

    const { state } = view;
    const position = state.selection.head;

    const { prefix, suffix } = getCursorContext(state, {
      suffixLength: includeSuffix ? COMPLETION_SUFFIX_LENGTH : 0,
    });
    if (!prefix.trim()) return;

    abortController = new AbortController();

    view.dispatch(
      setCompletionMeta(state.tr, { type: "startLoading", position }),
    );

    const { signal } = abortController;

    try {
      const { model, reasoning } = await resolveLanguageModel({
        forCompletion: true,
      });
      const { streamText } = await loadAISDK();

      const prompt = suffix
        ? `<prefix>${prefix}</prefix>\n<suffix>${suffix}</suffix>`
        : prefix;

      let firstStreamError: unknown;

      const { textStream } = streamText({
        model,
        reasoning,
        instructions: COMPLETION_SYSTEM_PROMPT,
        prompt,
        abortSignal: signal,
        // Telemetry has no sink in the Panel, and its tracing channel leaves a
        // rejected promise behind that Kirby turns into an error dialog.
        telemetry: { isEnabled: false },
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
          setCompletionMeta(view.state.tr, {
            type: "streamChunk",
            suggestion,
            position,
          }),
        );
      }

      if (signal.aborted) return;

      // Chunks also run out when the provider fails mid-stream, which would
      // otherwise offer the truncated text as a finished completion.
      if (firstStreamError) throw firstStreamError;

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
      // An intentional abort runs `abortActiveRequest`, which cleared the state
      // already.
      if (signal.aborted) return;

      console.error("Failed to generate completion:", error);
      cooldownDeadline = Date.now() + COMPLETION_ERROR_COOLDOWN_MS;

      view.dispatch(setCompletionMeta(view.state.tr, { type: "dismiss" }));
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
    prefixLength = COMPLETION_PREFIX_LENGTH,
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
